<#
  build.ps1
  1. Change tracking: compares current OEIL + secondary data against data/snapshot.json and appends every new
     item (new procedural event, scheduled vote, document, status change, EUR-Lex act, Have Your Say stage /
     draft / feedback window) to data/changes.json with the date it was detected. Writes data/changes.js.
     The first run only records a baseline (nothing is reported as new).
  2. Builds tracker.html: index.html with every data file inlined (single file, opens offline).

  Usage: powershell -ExecutionPolicy Bypass -File tools\build.ps1
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$d    = Join-Path $root 'data'
$utf8 = New-Object System.Text.UTF8Encoding($false)
function ReadJson($p) { if (Test-Path $p) { return [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) | ConvertFrom-Json } return $null }

$cur = [IO.File]::ReadAllText((Join-Path $d 'curated.js'), [Text.Encoding]::UTF8)
$ref2id = @{}
foreach ($m in [regex]::Matches($cur, 'id:\s*"(?<id>[^"]+)",\s*\r?\n\s*oeil:\s*"(?<r>[^"]+)"')) { $ref2id[$m.Groups['r'].Value] = $m.Groups['id'].Value }

$oeil = ReadJson (Join-Path $d 'oeil-data.json')
$sec  = ReadJson (Join-Path $d 'secondary-data.json')

# ---- fingerprint every trackable item: key -> description ----
$items = [ordered]@{}
function Add-Item($key, $dossier, $source, $kind, $date, $text, $url) {
  if (-not $items.Contains($key)) { $items[$key] = [ordered]@{ key = $key; dossier = $dossier; source = $source; kind = $kind; date = $date; text = $text; url = $url } }
}
if ($oeil) {
  foreach ($p in $oeil.procedures.PSObject.Properties) {
    $ref = $p.Name; $v = $p.Value; $id = $ref2id[$ref]; if (-not $id) { continue }
    Add-Item "status|$ref|$($v.status)" $id 'OEIL' 'status' $v.fetchedAt.Substring(0,10) "Procedure status: $($v.status)" $v.url
    foreach ($e in @($v.events)) { Add-Item "ev|$ref|$($e.date)|$($e.event)" $id 'OEIL' 'event' $e.date $e.event $v.url }
    foreach ($f in @($v.forecasts)) { Add-Item "fc|$ref|$($f.date)|$($f.event)" $id 'OEIL' 'forecast' $f.date "Forecast: $($f.event)" $v.url }
    foreach ($x in @($v.documents)) { Add-Item "doc|$ref|$($x.inst)|$($x.ref)|$($x.type)" $id 'OEIL' 'document' $x.date ("$($x.type) $($x.extra) $($x.ref)" -replace '\s+', ' ') $x.href }
    foreach ($c in @($v.committees)) { foreach ($r in @($c.rapporteurs)) { if ($r.name) { Add-Item "rap|$ref|$($c.abbr)|$($r.name)" $id 'OEIL' 'rapporteur' $c.appointed "Rapporteur $($c.abbr): $($r.name) ($($r.group))" $v.url } } }
  }
}
if ($sec) {
  foreach ($p in $sec.dossiers.PSObject.Properties) {
    $id = $p.Name
    foreach ($a in @($p.Value.acts)) { if ($a.celex) { Add-Item "act|$($a.celex)" $id 'EUR-Lex' $a.kind $a.date $a.title $a.url } }
    foreach ($i in @($p.Value.initiatives)) {
      Add-Item "hys|$($i.id)" $id 'HaveYourSay' 'initiative' $i.published "New initiative: $($i.title)" $i.url
      Add-Item "hysstage|$($i.id)|$($i.stage)" $id 'HaveYourSay' 'stage' $i.modified "$($i.title) -> stage $($i.stage)" $i.url
      foreach ($pb in @($i.publications)) {
        if ($pb.date) { Add-Item "hyspub|$($i.id)|$($pb.type)" $id 'HaveYourSay' 'publication' $pb.date "$($i.title): $($pb.type) published$(if($pb.fbEnd){' (feedback until ' + $pb.fbEnd + ')'})" $i.url }
      }
    }
  }
}

# ---- stakeholder influence events (data/stakeholders.js: window.STAKEHOLDERS = <JSON>;) ----
$stkPath = Join-Path $d 'stakeholders.js'
if (Test-Path $stkPath) {
  $raw = [IO.File]::ReadAllText($stkPath, [Text.Encoding]::UTF8)
  $i0 = $raw.IndexOf('window.STAKEHOLDERS')
  $json = $raw.Substring($raw.IndexOf('{', $i0)); $json = $json.Substring(0, $json.LastIndexOf('}') + 1)
  $stk = $json | ConvertFrom-Json
  $names = @{}; foreach ($a in @($stk.actors)) { $names[$a.id] = $a.nameZh }
  foreach ($e in @($stk.events)) {
    $who = (@($e.actors) | ForEach-Object { if ($names.ContainsKey($_)) { $names[$_] } else { $_ } }) -join ', '
    foreach ($ds in @($e.dossiers)) { Add-Item "stk|$($e.id)|$ds" $ds 'Stakeholder' 'stakeholder' $e.date "${who}: $($e.textZh)" $e.url }
  }
}

# ---- diff against snapshot ----
$snapPath = Join-Path $d 'snapshot.json'
$chgPath  = Join-Path $d 'changes.json'
$snap = ReadJson $snapPath
$history = @()
$h = ReadJson $chgPath
if ($h) { $history = @($h.changes) }
$today = (Get-Date).ToString('yyyy-MM-dd')
$new = @()
if ($snap) {
  $known = @{}; foreach ($k in @($snap.keys)) { $known[$k] = $true }
  # dossiers seen in earlier runs; the first fetch of a newly added dossier is a baseline, not "new"
  $knownDos = $null
  if ($snap.dossiers) { $knownDos = @{}; foreach ($x in @($snap.dossiers)) { $knownDos[$x] = $true } }
  foreach ($k in $items.Keys) {
    if ($known.ContainsKey($k)) { continue }
    $it = $items[$k]
    if ($knownDos -and $it.source -ne 'Stakeholder' -and -not $knownDos.ContainsKey($it.dossier)) { continue }
    $it['detected'] = $today; $new += $it
  }
  Write-Host "Change tracking: $($new.Count) new item(s) since last update"
} else {
  Write-Host "Change tracking: baseline recorded ($($items.Count) items); future runs will report new items"
}
$history = @($new) + @($history) | Select-Object -First 3000
$runs = @(); if ($h -and $h.runs) { $runs = @($h.runs) }
$runs = @([ordered]@{ date = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ'); newItems = $new.Count; baseline = (-not $snap) }) + $runs | Select-Object -First 200
$chg = [ordered]@{ changes = @($history); runs = @($runs) }
$cj = $chg | ConvertTo-Json -Depth 6 -Compress
[IO.File]::WriteAllText($chgPath, $cj, $utf8)
[IO.File]::WriteAllText((Join-Path $d 'changes.js'), "window.CHANGES = $cj;`n", $utf8)
$dosSeen = @{}
if ($snap -and $snap.dossiers) { foreach ($x in @($snap.dossiers)) { $dosSeen[$x] = $true } }
foreach ($it in $items.Values) { if ($it.source -ne 'Stakeholder') { $dosSeen[$it.dossier] = $true } }
$snapObj = [ordered]@{ date = $today; dossiers = @($dosSeen.Keys | Sort-Object); keys = @($items.Keys) }
[IO.File]::WriteAllText($snapPath, ($snapObj | ConvertTo-Json -Depth 3 -Compress), $utf8)

# ---- standalone tracker.html ----
$page = [IO.File]::ReadAllText((Join-Path $root 'index.html'), [Text.Encoding]::UTF8)
foreach ($f in 'curated.js', 'oeil-data.js', 'secondary-data.js', 'changes.js', 'stakeholders.js') {
  $p = Join-Path $d $f
  $content = if (Test-Path $p) { [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8) } else { '' }
  $page = $page.Replace("<script src=`"data/$f`"></script>", "<script>`n" + $content.Replace('</script', '<\/script') + "`n</script>")
}
[IO.File]::WriteAllText((Join-Path $root 'tracker.html'), $page, $utf8)
Write-Host "Built tracker.html"
