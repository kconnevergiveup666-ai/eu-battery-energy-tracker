# lint-wiki.ps1
# Mechanical health check for the LLM wiki (wiki/). Semantic checks (contradictions,
# stale status text) are done by the LLM per wiki/CLAUDE.md section 5.
# Reports: broken relative links, orphan pages, missing frontmatter fields,
# curated dossier ids that have no wiki page yet.
# Exit code 1 when broken links are found.
# Keep this file ASCII-only (Windows PowerShell 5.1 misreads non-ASCII source).

param(
  [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'
$utf8 = New-Object System.Text.UTF8Encoding($false)
$wiki = Join-Path $Root 'wiki'
$wikiFull = (Resolve-Path $wiki).Path

$pages = Get-ChildItem $wiki -Recurse -Filter *.md |
  Where-Object { $_.FullName -notlike (Join-Path $wikiFull 'raw\*') }

$broken = New-Object System.Collections.ArrayList
$inbound = @{}
$noFront = New-Object System.Collections.ArrayList

foreach ($p in $pages) {
  $text = [IO.File]::ReadAllText($p.FullName, $utf8)
  $rel = $p.FullName.Substring($wikiFull.Length + 1)

  # Frontmatter check for content pages
  if ($rel -match '^(dossiers|topics|actors|analyses)\\') {
    $fm = [regex]::Match($text, '(?s)\A---\r?\n(.*?)\r?\n---')
    if (-not $fm.Success) { [void]$noFront.Add("$rel (no frontmatter)") }
    else {
      foreach ($k in 'type', 'title', 'updated', 'sources') {
        if ($fm.Groups[1].Value -notmatch "(?m)^$($k):") { [void]$noFront.Add("$rel (missing '$k')") }
      }
    }
  }

  # Strip fenced code blocks so example links in CLAUDE.md are ignored
  $scan = [regex]::Replace($text, '(?s)```.*?```', '')
  $scan = [regex]::Replace($scan, '`[^`\r\n]*`', '')
  foreach ($m in [regex]::Matches($scan, '\]\(([^)\s]+)\)')) {
    $target = $m.Groups[1].Value
    if ($target -match '^(https?:|mailto:|#)') { continue }
    $target = ($target -split '#')[0]
    if (-not $target) { continue }
    $target = [Uri]::UnescapeDataString($target)
    $full = [IO.Path]::GetFullPath((Join-Path $p.DirectoryName $target))
    if (-not (Test-Path $full)) {
      [void]$broken.Add("$rel -> $($m.Groups[1].Value)")
    } elseif ($full -ne $p.FullName) {
      if (-not $inbound.ContainsKey($full)) { $inbound[$full] = 0 }
      $inbound[$full]++
    }
  }
}

$orphans = $pages | Where-Object {
  $_.FullName.Substring($wikiFull.Length + 1) -match '^(dossiers|topics|actors|analyses)\\' -and
  -not $inbound.ContainsKey($_.FullName)
} | ForEach-Object { $_.FullName.Substring($wikiFull.Length + 1) }

# Curated ids without a dossier page
$curated = [IO.File]::ReadAllText((Join-Path $Root 'data/curated.js'), $utf8)
$ids = [regex]::Matches($curated, '(?m)^  \{\s*\r?\n\s+id: "([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
$missing = $ids | Where-Object { -not (Test-Path (Join-Path $wiki "dossiers/$_.md")) }

Write-Host "Wiki pages scanned: $($pages.Count)"
Write-Host ""
Write-Host "Broken links: $($broken.Count)"
$broken | ForEach-Object { Write-Host "  $_" }
Write-Host "Orphan pages (no inbound links): $(@($orphans).Count)"
$orphans | ForEach-Object { Write-Host "  $_" }
Write-Host "Frontmatter problems: $($noFront.Count)"
$noFront | ForEach-Object { Write-Host "  $_" }
Write-Host "Curated dossiers not yet in wiki: $(@($missing).Count) of $(@($ids).Count)"
if (@($missing).Count -gt 0) { Write-Host ("  " + ($missing -join ', ')) }

if ($broken.Count -gt 0) { exit 1 }
