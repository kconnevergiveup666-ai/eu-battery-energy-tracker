<#
  update-all.ps1  --  one command to refresh everything:
    1. OEIL procedures (Commission / EP committees / plenary / Council adoption / forecasts / documents)
    2. Secondary legislation (EUR-Lex) and drafts / consultations (Have Your Say)
    3. Change tracking + rebuild tracker.html

  Usage: powershell -ExecutionPolicy Bypass -File tools\update-all.ps1
#>
$ErrorActionPreference = 'Continue'
$here = $PSScriptRoot
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $here 'update-oeil.ps1')
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $here 'update-secondary.ps1')
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $here 'build.ps1')
