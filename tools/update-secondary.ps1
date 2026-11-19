<#
  update-secondary.ps1
  Secondary legislation & pre-legislative drafts for every dossier configured in data/sources.json:
    1. EUR-Lex / Cellar SPARQL: acts based on, amending, or (filtered) citing each base act
       -> delegated & implementing acts, guidelines/notices, reports, amending regulations, harmonised standards
    2. Have Your Say (Better Regulation portal API): planned acts, calls for evidence, public consultations,
       draft delegated/implementing acts open for feedback, adopted-act stage, with full publication history.
  Output: data/secondary-data.js (window.SECONDARY_DATA) and data/secondary-data.json

  Usage: powershell -ExecutionPolicy Bypass -File tools\update-secondary.ps1 [-Only batteries,crma] [-SkipHys] [-SkipEurlex]
#>
param(
  [string[]]$Only = @(),
  [switch]$SkipHys,
  [switch]$SkipEurlex,
  [int]$DelayMs = 400
)
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$root    = Split-Path -Parent $PSScriptRoot
$cfgPath = Join-Path $root 'data\sources.json'
$oeilJs  = Join-Path $root 'data\oeil-data.json'
$curJs   = Join-Path $root 'data\curated.js'
$outJson = Join-Path $root 'data\secondary-data.json'
$outJs   = Join-Path $root 'data\secondary-data.js'
$utf8    = New-Object System.Text.UTF8Encoding($false)

$cfg = [IO.File]::ReadAllText($cfgPath, [Text.Encoding]::UTF8) | ConvertFrom-Json
$ids = @($cfg.PSObject.Properties.Name | Where-Object { $_ -notlike '_*' })
if ($Only.Count) { $sel = @($Only | ForEach-Object { $_ -split '[,;\s]+' } | Where-Object { $_ }); $ids = @($ids | Where-Object { $sel -contains $_ }) }

# proposal date per dossier (used as a cut-off for very old acts on broad base acts like the ETS Directive)
$propDate = @{}
if (Test-Path $oeilJs) {
  $oeil = [IO.File]::ReadAllText($oeilJs, [Text.Encoding]::UTF8) | ConvertFrom-Json
  $cur = [IO.File]::ReadAllText($curJs, [Text.Encoding]::UTF8)
  foreach ($m in [regex]::Matches($cur, 'id:\s*"(?<id>[^"]+)",\s*\r?\n\s*oeil:\s*"(?<r>[^"]+)"')) {
    $p = $oeil.procedures.($m.Groups['r'].Value)
    if ($p) { $e = @($p.events | Where-Object { $_.event -like 'Legislative proposal*' }); if ($e.Count) { $propDate[$m.Groups['id'].Value] = $e[0].date } }
  }
}

# keep previous data so a partial run (-Only / -Skip*) does not wipe other dossiers
$data = [ordered]@{}
if (Test-Path $outJson) {
  $old = [IO.File]::ReadAllText($outJson, [Text.Encoding]::UTF8) | ConvertFrom-Json
  foreach ($p in $old.dossiers.PSObject.Properties) { $data[$p.Name] = $p.Value }
}

function Get-Json([string]$url, [int]$timeout = 120) {
  $r = $null
  for ($try = 1; $try -le 3; $try++) {
    try { $r = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec $timeout; break }
    catch { if ($try -eq 3) { throw }; Start-Sleep -Seconds (3 * $try) }
  }
  $bytes = if ($r.RawContentStream) { $r.RawContentStream.ToArray() } else { $r.Content }
  if ($bytes -is [string]) { return $bytes | ConvertFrom-Json }
  return ([Text.Encoding]::UTF8.GetString($bytes) | ConvertFrom-Json)
}

function Sparql-Related([string]$celex) {
  $q = @"
PREFIX cdm: <http://publications.europa.eu/ontology/cdm#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT DISTINCT ?c ?d ?rel ?t WHERE {
  ?b owl:sameAs <http://publications.europa.eu/resource/celex/$celex> .
  { ?act cdm:resource_legal_based_on_resource_legal ?b . BIND("based_on" AS ?rel) }
  UNION { ?act cdm:resource_legal_amends_resource_legal ?b . BIND("amends" AS ?rel) }
  UNION { ?act cdm:work_cites_work ?b . BIND("cites" AS ?rel) }
  ?act owl:sameAs ?cx . FILTER(STRSTARTS(STR(?cx),"http://publications.europa.eu/resource/celex/"))
  BIND(STRAFTER(STR(?cx),"celex/") AS ?c)
  OPTIONAL { ?act cdm:work_date_document ?d }
  OPTIONAL { ?e cdm:expression_belongs_to_work ?act ; cdm:expression_uses_language <http://publications.europa.eu/resource/authority/language/ENG> ; cdm:expression_title ?t }
} ORDER BY DESC(?d) LIMIT 600
"@
  $u = "https://publications.europa.eu/webapi/rdf/sparql?query=" + [uri]::EscapeDataString($q) + "&format=" + [uri]::EscapeDataString("application/sparql-results+json")
  return (Get-Json $u 180).results.bindings
}

function Classify-Act([string]$celex, [string]$title) {
  $t = $title
  if ($t -match '^Commission Delegated Regulation') { return 'delegated' }
  if ($t -match '^Commission Delegated (Decision|Directive)') { return 'delegated' }
  if ($t -match '^Commission Implementing (Regulation|Decision)') { if ($t -match 'harmonised standard') { return 'standard' } return 'implementing' }
  if ($t -match 'harmonised standard') { return 'standard' }
  if ($t -match '^(Regulation|Directive|Decision) \(EU\) \d{4}/\d+ of the European Parliament and of the Council') { return 'amending' }
  if ($t -match '^Proposal for a') { return 'proposal' }
  if ($t -match '^(Commission Notice|Communication from the Commission|COMMUNICATION FROM THE COMMISSION|Commission notice|Commission Guidance|Commission guidelines)') { return 'guidance' }
  if ($t -match '^REPORT FROM THE COMMISSION|^Report from the Commission') { return 'report' }
  if ($t -match '^Commission (Regulation|Decision|Recommendation)') { return 'commission-act' }
  if ($t -match '^Council (Decision|Regulation)') { return 'council-act' }
  return 'other'
}

$hysBase = 'https://ec.europa.eu/info/law/better-regulation'
$hysSeen = @{}   # initiative id -> dossier id (first match wins)

foreach ($id in $ids) {
  $c = $cfg.$id
  $entry = [ordered]@{ id = $id; acts = @(); initiatives = @(); fetchedAt = (Get-Date).ToString('yyyy-MM-ddTHH:mm:ss') }
  if ($data.Contains($id)) {
    $prev = $data[$id]
    if ($prev.acts) { $entry.acts = @($prev.acts) }
    if ($prev.initiatives) { $entry.initiatives = @($prev.initiatives) }
  }
  $match = if ($c.hys -and $c.hys.match) { $c.hys.match } else { '^$' }
  $cut = if ($propDate[$id]) { $propDate[$id] } else { '2019-01-01' }

  # ---------------- EUR-Lex ----------------
  if (-not $SkipEurlex -and $c.celex -and @($c.celex).Count) {
    $acts = [ordered]@{}
    foreach ($base in @($c.celex)) {
      try {
        Write-Host "[$id] EUR-Lex related to $base ..." -NoNewline
        $rows = Sparql-Related $base
        $n = 0
        foreach ($b in $rows) {
          $cx = [uri]::UnescapeDataString($b.c.value)
          if ($cx -match '\(' -or $cx -notmatch '^[35]') { continue }             # skip corrigenda, consolidated, OJ C refs
          if ($cx -match '^5\d{4}(SC|AE|AR|AP|IP|AG|BP|DP|XG|IR|XX)') { continue } # staff docs, EESC/CoR opinions, EP texts, Council positions
          $title = if ($b.t) { $b.t.value } else { '' }
          $date = if ($b.d) { $b.d.value } else { '' }
          $rel = $b.rel.value
          if ($rel -eq 'cites') {
            if ($title -notmatch $match) { continue }
            if ($date -and $date -lt $cut) { continue }
          } elseif ($date -and $date -lt $cut -and $base -notin @('32023R1542')) { continue }
          if ($cx -eq $base) { continue }
          $k = Classify-Act $cx $title
          if ($acts.Contains($cx)) {
            if ($acts[$cx].rel -eq 'cites' -and $rel -ne 'cites') { $acts[$cx].rel = $rel }
            continue
          }
          $acts[$cx] = [ordered]@{ celex = $cx; date = $date; title = $title; kind = $k; rel = $rel; base = $base
            url = "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:$cx" }
          $n++
        }
        Write-Host " $n"
      } catch { Write-Host " FAILED: $($_.Exception.Message)" -ForegroundColor Red }
      Start-Sleep -Milliseconds $DelayMs
    }
    $entry.acts = @($acts.Values | Sort-Object { $_.date } -Descending)
  }

  # ---------------- Have Your Say ----------------
  if (-not $SkipHys -and $c.hys -and @($c.hys.q).Count) {
    $found = [ordered]@{}
    foreach ($kw in @($c.hys.q)) {
      try {
        $u = "$hysBase/brpapi/searchInitiatives?text=" + [uri]::EscapeDataString($kw) + "&size=100&language=EN"
        $res = Get-Json $u 90
        foreach ($it in @($res.initiativeResultDtoPage.content)) {
          $iid = [string][int]$it.id
          if ($found.Contains($iid)) { continue }
          $found[$iid] = $it
        }
      } catch { Write-Host "[$id] HYS search '$kw' FAILED: $($_.Exception.Message)" -ForegroundColor Red }
      Start-Sleep -Milliseconds $DelayMs
    }
    $inits = @()
    $kept = 0
    foreach ($iid in $found.Keys) {
      $it = $found[$iid]
      try { $det = Get-Json "$hysBase/brpapi/groupInitiatives/$iid" 60 } catch { continue }
      Start-Sleep -Milliseconds 150
      $legal = @($det.legalBasis | ForEach-Object { $_.documentLegal } | Where-Object { $_ })
      $byEli = $false
      foreach ($e in @($c.eli)) { if ($e -and ($legal -join ' ') -match [regex]::Escape($e)) { $byEli = $true } }
      $byTitle = ($det.shortTitle -match $match) -or ($det.dossierSummary -match $match -and $det.shortTitle -match $match)
      if (-not ($byEli -or $byTitle)) { continue }
      if ($hysSeen.ContainsKey($iid) -and $hysSeen[$iid] -ne $id) { continue }
      $hysSeen[$iid] = $id
      $pubs = @()
      foreach ($p in @($det.publications)) {
        $pubs += [ordered]@{
          type = $p.type; stage = $p.frontEndStage
          date = $(if ($p.publishedDate) { ($p.publishedDate -split ' ')[0] -replace '/', '-' } else { '' })
          fbStart = $(if ($p.feedbackStartDate) { ($p.feedbackStartDate -split ' ')[0] -replace '/', '-' } else { '' })
          fbEnd = $(if ($p.feedbackEndDate) { ($p.feedbackEndDate -split ' ')[0] -replace '/', '-' } else { '' })
          feedback = $p.totalFeedback; reference = $p.reference
        }
      }
      $inits += [ordered]@{
        id = $iid; title = $det.shortTitle; summary = $det.dossierSummary
        actType = $det.foreseenActType; stage = $det.stage; status = $det.initiativeStatus
        feedbackStatus = $det.receivingFeedbackStatus
        dg = $(if ($det.dg) { $det.dg } else { $det.unit }); legalBasis = $legal; matchedBy = $(if ($byEli) { 'legal-basis' } else { 'title' })
        published = $(if ($det.publishedDate) { ($det.publishedDate -split ' ')[0] -replace '/', '-' } else { '' })
        modified = $(if ($det.modifiedDate) { ($det.modifiedDate -split ' ')[0] -replace '/', '-' } else { '' })
        publications = $pubs
        url = "$hysBase/have-your-say/initiatives/$iid" + "_en"
      }
      $kept++
    }
    Write-Host "[$id] Have Your Say: $kept of $($found.Count) candidates kept"
    $entry.initiatives = $inits
  }
  $data[$id] = $entry
}

$out = [ordered]@{ generatedAt = (Get-Date).ToString('yyyy-MM-ddTHH:mm:ss'); dossiers = $data }
$json = $out | ConvertTo-Json -Depth 10 -Compress
[IO.File]::WriteAllText($outJson, $json, $utf8)
[IO.File]::WriteAllText($outJs, "window.SECONDARY_DATA = $json;`n", $utf8)
Write-Host "Secondary done -> data\secondary-data.js"
