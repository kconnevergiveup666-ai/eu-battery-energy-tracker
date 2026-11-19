<#
  update-oeil.ps1
  Scrapes the European Parliament Legislative Observatory (OEIL) for every procedure
  listed in data/curated.js (field  oeil: "YYYY/NNNN(COD)") and writes
  data/oeil-data.js (read by index.html) and data/oeil-data.json.

  Usage (from project root):
    powershell -ExecutionPolicy Bypass -File tools\update-oeil.ps1
    powershell -ExecutionPolicy Bypass -File tools\update-oeil.ps1 -Only "2020/0353(COD)"
#>
param(
  [string[]]$Only = @(),
  [int]$DelayMs = 800,
  [switch]$BuildOnly   # skip fetching; just rebuild tracker.html from existing data
)

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$root    = Split-Path -Parent $PSScriptRoot
$curated = Join-Path $root 'data\curated.js'
$outJs   = Join-Path $root 'data\oeil-data.js'
$outJson = Join-Path $root 'data\oeil-data.json'
$base    = 'https://oeil.europarl.europa.eu'

function Decode([string]$s) {
  if ($null -eq $s) { return '' }
  $t = [regex]::Replace($s, '<!--[\s\S]*?-->', '')
  $t = [regex]::Replace($t, '<svg[\s\S]*?</svg>', '')
  $t = [regex]::Replace($t, '<[^>]+>', ' ')
  $t = [System.Net.WebUtility]::HtmlDecode($t)
  return ([regex]::Replace($t, '\s+', ' ')).Trim()
}

# --
function Get-Section([string]$html, [string]$header) {
  $m = [regex]::Match($html, '<h2[^>]*>\s*' + [regex]::Escape($header) + '\s*</h2>')
  if (-not $m.Success) { return '' }
  $start = $m.Index
  $next = $html.IndexOf('oeil-spy-section', $start + 10)
  if ($next -lt 0) { $next = [Math]::Min($html.Length, $start + 200000) }
  return $html.Substring($start, $next - $start)
}

function Get-Rows([string]$html) {
  return [regex]::Matches($html, '<tr(?<attr>[^>]*)>(?<body>[\s\S]*?)</tr>')
}

function Get-Cells([string]$rowHtml) {
  return [regex]::Matches($rowHtml, '<t[dh][^>]*>(?<c>[\s\S]*?)</t[dh]>') | ForEach-Object { $_.Groups['c'].Value }
}

function Parse-People([string]$cellHtml) {
  $list = @()
  foreach ($m in [regex]::Matches($cellHtml, '<span>(?<n>[^<]+)</span>')) {
    $raw = [System.Net.WebUtility]::HtmlDecode($m.Groups['n'].Value).Trim()
    if ($raw -eq '') { continue }
    $g = [regex]::Match($raw, '^(?<name>.+?)\s*\((?<grp>[^()]+)\)$')
    if ($g.Success) { $list += [ordered]@{ name = $g.Groups['name'].Value; group = $g.Groups['grp'].Value } }
    else { $list += [ordered]@{ name = $raw; group = '' } }
  }
  return ,$list
}

function Parse-Procedure([string]$ref) {
  $url = "$base/oeil/en/procedure-file?reference=$ref"
  $wc = New-Object System.Net.WebClient
  $wc.Encoding = [System.Text.Encoding]::UTF8
  $wc.Headers.Add('User-Agent', 'Mozilla/5.0 (EU-policy-tracker)')
  $html = $null
  for ($try = 1; $try -le 3; $try++) {
    try { $html = $wc.DownloadString($url); break }
    catch {
      if ($try -eq 3 -or $_.Exception.Message -match '\(404\)') { throw }
      Start-Sleep -Seconds (3 * $try)
    }
  }

  $h2 = [regex]::Matches($html, '<h2 class="es_title-h2 mb-3">(?<t>[\s\S]*?)</h2>')
  $title = if ($h2.Count -gt 0) { Decode $h2[0].Groups['t'].Value } else { '' }

  # ---- Basic information ----
  $basic = [regex]::Replace((Get-Section $html 'Basic information'), '<!--[\s\S]*?-->', '')
  $ps = [regex]::Matches($basic, '<p[^>]*>(?<p>[\s\S]*?)</p>') | ForEach-Object { $_.Groups['p'].Value }
  $procType = ''; $instrument = ''; $status = ''
  if ($ps.Count -ge 3) { $procType = Decode $ps[1]; $instrument = Decode $ps[2] }
  $st = [regex]::Match($basic, 'Status</p>\s*<p[^>]*>(?<s>[\s\S]*?)</p>')
  if ($st.Success) { $status = Decode $st.Groups['s'].Value }
  $relations = @()
  foreach ($m in [regex]::Matches($basic, '(?<label>(Amending|Repealing|Amended by|Repealed by|Supplementing|Supplemented by|Modified by|Amending act|See also)[^<]*?)<a href="/oeil/en/procedure-file\?reference=(?<r>[^"]+)">')) {
    $relations += [ordered]@{ label = (Decode $m.Groups['label'].Value); ref = [System.Net.WebUtility]::HtmlDecode($m.Groups['r'].Value) }
  }

  # ---- Key players: European Parliament ----
  $kp = Get-Section $html 'Key players'
  $committees = @()
  $epBlock = ''
  $epM = [regex]::Match($kp, 'id="es_accordion-committee"[\s\S]*?(?=<li class="es_accordion-item")')
  if ($epM.Success) { $epBlock = $epM.Value }
  foreach ($t in [regex]::Matches($epBlock, '<table[\s\S]*?</table>')) {
    $th = [regex]::Match($t.Value, '<thead>[\s\S]*?<th[^>]*>(?<h>[\s\S]*?)</th>')
    $role = Decode $th.Groups['h'].Value
    $last = $null
    foreach ($r in (Get-Rows ([regex]::Replace($t.Value, '<thead>[\s\S]*?</thead>', '')))) {
      $body = $r.Groups['body'].Value
      if ($r.Groups['attr'].Value -match 'bg-none') {
        if ($null -ne $last) { $last.shadows = (Parse-People $body) }
        continue
      }
      $abbr = Decode ([regex]::Match($body, 'es_badge-committee[^>]*>(?<a>[^<]+)<').Groups['a'].Value)
      $cname = Decode ([regex]::Match($body, '<span class="font-weight-normal">(?<n>[^<]+)</span>').Groups['n'].Value)
      $cells = @(Get-Cells $body)
      $people = if ($cells.Count -ge 2) { Parse-People $cells[1] } else { @() }
      $note = ''
      if ($cells.Count -ge 2 -and $people.Count -eq 0) { $note = Decode $cells[1] }
      $appointed = if ($cells.Count -ge 3) { Decode $cells[2] } else { '' }
      $c = [ordered]@{
        role = $role; abbr = $abbr; name = $cname
        associated = ($body -match 'Associated committee')
        rapporteurs = $people; appointed = $appointed; note = $note; shadows = @()
      }
      $committees += $c
      $last = $c
    }
  }

  # ---- Key players: Council / Commission (generic table rows) ----
  function Block-Rows([string]$id) {
    $m = [regex]::Match($kp, 'id="' + $id + '"[\s\S]*?(?=<li class="es_accordion-item"|$)')
    $rows = @()
    if ($m.Success) {
      foreach ($r in (Get-Rows $m.Value)) {
        $cells = @(Get-Cells $r.Groups['body'].Value | ForEach-Object { Decode $_ })
        if (($cells -join '').Trim() -ne '') { $rows += ,$cells }
      }
    }
    return ,$rows
  }
  $council = Block-Rows 'es_accordion-item2'
  $commission = Block-Rows 'es_accordion-item3'

  # ---- Key events ----
  $ke = Get-Section $html 'Key events'
  $events = @()
  foreach ($r in (Get-Rows $ke)) {
    $cells = @(Get-Cells $r.Groups['body'].Value)
    if ($cells.Count -lt 2) { continue }
    $d = Decode $cells[0]
    $dm = [regex]::Match($d, '^(\d{2})/(\d{2})/(\d{4})$')
    if (-not $dm.Success) { continue }
    $iso = "$($dm.Groups[3].Value)-$($dm.Groups[2].Value)-$($dm.Groups[1].Value)"
    $refs = @()
    if ($cells.Count -ge 3) {
      foreach ($a in [regex]::Matches($cells[2], '<a href="(?<h>[^"]+)"[^>]*>(?<t>[^<]+)</a>')) {
        $txt = (Decode $a.Groups['t'].Value)
        if ($txt -ne '') { $refs += [ordered]@{ text = $txt; href = [System.Net.WebUtility]::HtmlDecode($a.Groups['h'].Value) } }
      }
      if ($refs.Count -eq 0) {
        $plain = Decode $cells[2]
        if ($plain -ne '') { foreach ($p in ($plain -split '\s+')) { $refs += [ordered]@{ text = $p; href = '' } } }
      }
    }
    $sum = ''
    if ($cells.Count -ge 4) {
      $sm = [regex]::Match($cells[3], 'href="(?<h>[^"]+)"')
      if ($sm.Success) { $sum = $base + [System.Net.WebUtility]::HtmlDecode($sm.Groups['h'].Value) }
    }
    $events += [ordered]@{ date = $iso; event = (Decode $cells[1]); refs = $refs; summary = $sum }
  }

  # ---- Final act & delegated acts ----
  $fa = Get-Section $html 'Final act'
  $finalActs = @()
  foreach ($m in [regex]::Matches($fa, '<a[^>]+href="(?<h>[^"]*eur-lex[^"]*)"[^>]*>(?<t>[\s\S]*?)</a>')) {
    $txt = Decode $m.Groups['t'].Value
    if ($txt -ne '') { $finalActs += [ordered]@{ text = $txt; href = [System.Net.WebUtility]::HtmlDecode($m.Groups['h'].Value) } }
  }
  $faText = Decode $fa
  $mainAct = ''; $mainOj = ''; $mainHref = ''
  $mm = [regex]::Match($faText, '(?<a>(Regulation|Directive|Decision) \d{4}/\d{4})\s+(?<oj>OJ (OJ )?L[^A-Z]*?\d{2}\.\d{2}\.\d{4})')
  if ($mm.Success) {
    $mainAct = $mm.Groups['a'].Value -replace '/0(\d{3})$', '/$1'
    $mainOj = ($mm.Groups['oj'].Value -replace 'OJ OJ', 'OJ').Trim()
    $hm = [regex]::Match($fa, 'href="(?<h>[^"]*eur-lex[^"]*)"[^>]*>\s*(<[^>]+>\s*)*' + [regex]::Escape(($mm.Groups['a'].Value -split ' ')[0]))
    if ($hm.Success) { $mainHref = [System.Net.WebUtility]::HtmlDecode($hm.Groups['h'].Value) }
  }
  $da = Get-Section $html 'Delegated acts'
  $delegated = @()
  foreach ($r in (Get-Rows $da)) {
    $cells = @(Get-Cells $r.Groups['body'].Value | ForEach-Object { Decode $_ })
    if ($cells.Count -ge 2 -and $cells[0] -match '\d{4}/\d{4}') { $delegated += [ordered]@{ ref = $cells[0]; subject = $cells[1] } }
  }

  # ---- Forecasts (scheduled committee votes, indicative plenary dates) ----
  $fc = Get-Section $html 'Forecasts'
  $forecasts = @()
  foreach ($r in (Get-Rows $fc)) {
    $cells = @(Get-Cells $r.Groups['body'].Value | ForEach-Object { Decode $_ })
    if ($cells.Count -ge 2 -and $cells[0] -match '^(\d{2})/(\d{2})/(\d{4})$') {
      $forecasts += [ordered]@{ date = "$($Matches[3])-$($Matches[2])-$($Matches[1])"; event = $cells[1] }
    }
  }

  # ---- Documentation gateway (draft reports, amendments, opinions, Council/Commission docs) ----
  $dg = Get-Section $html 'Documentation gateway'
  $documents = @()
  foreach ($inst in 'EP','CSL','EC','NP','OTHER') {
    $m = [regex]::Match($dg, 'id="es_accordion-item-doc-gateway-' + $inst + '"[\s\S]*?(?=id="es_accordion-item-doc-gateway-|$)')
    if (-not $m.Success) { continue }
    foreach ($r in (Get-Rows ([regex]::Replace($m.Value, '<thead>[\s\S]*?</thead>', '')))) {
      $raw = @(Get-Cells $r.Groups['body'].Value)
      if ($raw.Count -lt 3) { continue }
      $cells = @($raw | ForEach-Object { Decode $_ })
      $di = -1
      for ($k = 0; $k -lt $cells.Count; $k++) { if ($cells[$k] -match '^\d{2}/\d{2}/\d{4}$') { $di = $k; break } }
      if ($di -lt 1) { continue }
      $dp = $cells[$di] -split '/'
      $refCell = $raw[$di - 1]
      $lm = [regex]::Match($refCell, 'href="(?<h>[^"]+)"')
      $documents += [ordered]@{
        inst = $inst; type = $cells[0]
        extra = (($cells[1..([Math]::Max(1, $di - 2))] | Where-Object { $_ -ne '' -and $di -gt 2 }) -join ' ')
        ref = $cells[$di - 1]; href = $(if ($lm.Success) { [System.Net.WebUtility]::HtmlDecode($lm.Groups['h'].Value) } else { '' })
        date = "$($dp[2])-$($dp[1])-$($dp[0])"
      }
    }
  }

  return [ordered]@{
    ref = $ref; url = $url; title = $title
    forecasts = $forecasts; documents = $documents
    procedureType = $procType; instrument = $instrument; status = $status
    relations = $relations; committees = $committees
    council = $council; commission = $commission
    events = $events; finalActs = $finalActs
    mainAct = $mainAct; mainActOj = $mainOj; mainActHref = $mainHref
    delegatedActs = $delegated
    fetchedAt = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ')
  }
}

# --
$refs = @()
if ($Only.Count -gt 0) { $refs = @($Only | ForEach-Object { $_ -split '[,;\s]+' } | Where-Object { $_ -ne '' }) }
else {
  $src = [IO.File]::ReadAllText($curated, [Text.Encoding]::UTF8)
  $refs = [regex]::Matches($src, 'oeil\s*:\s*["''](?<r>\d{4}/\d{4}[A-Z]?\([A-Z]+\))["'']') | ForEach-Object { $_.Groups['r'].Value } | Select-Object -Unique
}

# --
$data = [ordered]@{}
if (Test-Path $outJson) {
  $old = [IO.File]::ReadAllText($outJson, [Text.Encoding]::UTF8) | ConvertFrom-Json
  foreach ($p in $old.procedures.PSObject.Properties) { $data[$p.Name] = $p.Value }
}

if ($BuildOnly) { $refs = @() }
$ok = 0; $fail = @()
foreach ($r in $refs) {
  try {
    Write-Host "Fetching $r ..." -NoNewline
    $data[$r] = Parse-Procedure $r
    Write-Host (" {0} events  [{1}]" -f $data[$r].events.Count, $data[$r].title)
    $ok++
  } catch {
    Write-Host " FAILED (line $($_.InvocationInfo.ScriptLineNumber)): $($_.Exception.Message)" -ForegroundColor Red
    $fail += $r
  }
  Start-Sleep -Milliseconds $DelayMs
}

$out = [ordered]@{ generatedAt = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ'); source = $base; procedures = $data }
$json = $out | ConvertTo-Json -Depth 12 -Compress
$utf8 = New-Object System.Text.UTF8Encoding($false)
[IO.File]::WriteAllText($outJson, $json, $utf8)
[IO.File]::WriteAllText($outJs, "window.OEIL_DATA = $json;`n", $utf8)
Write-Host "`nOEIL done: $ok updated, $($fail.Count) failed. -> data\oeil-data.js"
if ($fail.Count) { Write-Host ("Failed: " + ($fail -join ', ')) -ForegroundColor Yellow }
