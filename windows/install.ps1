# NewsTracker installer for native Windows (no WSL).
#
#   powershell -ExecutionPolicy Bypass -File windows\install.ps1 [-ImportData D:\newstracker-data.zip] [-WithFirebase] [-NoShortcuts]
#
# What it does, all as the current user (nothing elevated):
#   1. finds Python 3.11+ (offers to install it with winget if missing)
#   2. creates .venv in the install folder and installs NewsTracker into it
#   3. creates the data folder (%LOCALAPPDATA%\NewsTracker, or $env:NEWSTRACKER_HOME)
#   4. optionally imports data exported from another machine (tracker export-data)
#   5. optionally installs Node.js + firebase-tools for publishing
#   6. creates Desktop / Start Menu shortcuts "NewsTracker Console"
# Re-running it is safe: it upgrades the venv in place.
param(
  [string]$ImportData = "",
  [switch]$WithFirebase,
  [switch]$NoShortcuts
)
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root
Write-Host "NewsTracker install folder: $Root"

function Find-Python {
  $cands = @()
  if (Get-Command py -ErrorAction SilentlyContinue) {
    foreach ($v in "3.13", "3.12", "3.11") { $cands += ,@("py", "-$v") }
  }
  if (Get-Command python -ErrorAction SilentlyContinue) { $cands += ,@("python") }
  foreach ($c in $cands) {
    try {
      $exe = $c[0]; $rest = @($c | Select-Object -Skip 1)
      $out = & $exe @rest -c "import sys; print(sys.version_info >= (3, 11), sys.executable)" 2>$null
      if ($LASTEXITCODE -eq 0 -and $out -match "^True (.+)$") { return $Matches[1].Trim() }
    } catch { }
  }
  return $null
}

$py = Find-Python
if (-not $py) {
  Write-Host "Python 3.11+ was not found." -ForegroundColor Yellow
  if (Get-Command winget -ErrorAction SilentlyContinue) {
    $ans = Read-Host "Install Python 3.12 for this user with winget now? [y/N]"
    if ($ans -match "^[yY]") {
      winget install -e --id Python.Python.3.12 --scope user --accept-package-agreements
      $env:Path = [Environment]::GetEnvironmentVariable("Path", "User") + ";" + $env:Path
      $py = Find-Python
    }
  }
  if (-not $py) { throw "Install Python 3.11 or newer (https://www.python.org/downloads/windows/) and run this script again." }
}
Write-Host "Using Python: $py"

$venvPy = Join-Path $Root ".venv\Scripts\python.exe"
if (-not (Test-Path $venvPy)) {
  & $py -m venv (Join-Path $Root ".venv")
  if ($LASTEXITCODE -ne 0) { throw "python -m venv failed" }
}
& $venvPy -m pip install --upgrade pip --quiet
& $venvPy -m pip install -e $Root --quiet
if ($LASTEXITCODE -ne 0) { throw "pip install failed" }
Write-Host "NewsTracker installed into .venv" -ForegroundColor Green

$dataHome = if ($env:NEWSTRACKER_HOME) { $env:NEWSTRACKER_HOME } else { Join-Path $env:LOCALAPPDATA "NewsTracker" }
New-Item -ItemType Directory -Force -Path $dataHome | Out-Null
Write-Host "Data folder: $dataHome"

$cmd = Join-Path $Root "NewsTracker.cmd"
if ($ImportData) {
  & $cmd import-data $ImportData
  if ($LASTEXITCODE -ne 0) { Write-Host "import-data failed (see above). Re-run with: NewsTracker.cmd import-data <zip> --force" -ForegroundColor Yellow }
  else { & $cmd render-all }
}

if ($WithFirebase) {
  if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    if (Get-Command winget -ErrorAction SilentlyContinue) {
      winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements
      $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User")
    } else { Write-Host "Install Node.js LTS from https://nodejs.org, then run: npm install -g firebase-tools" -ForegroundColor Yellow }
  }
  if (Get-Command npm -ErrorAction SilentlyContinue) {
    npm install -g firebase-tools
    Write-Host "firebase-tools installed. Sign in from the console: Firebase -> Login." -ForegroundColor Green
  }
}

if (-not $NoShortcuts) {
  $ws = New-Object -ComObject WScript.Shell
  $targets = @([Environment]::GetFolderPath("Desktop"), (Join-Path ([Environment]::GetFolderPath("Programs")) "NewsTracker"))
  foreach ($dir in $targets) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    $lnk = $ws.CreateShortcut((Join-Path $dir "NewsTracker Console.lnk"))
    $lnk.TargetPath = $cmd
    $lnk.WorkingDirectory = $Root
    $lnk.Description = "NewsTracker console (opens in Chrome)"
    $lnk.Save()
  }
  Write-Host "Shortcuts created: Desktop and Start Menu > NewsTracker" -ForegroundColor Green
}

Write-Host ""
Write-Host "Next:" -ForegroundColor Cyan
Write-Host "  1. Open 'NewsTracker Console' (or run NewsTracker.cmd)."
Write-Host "  2. In 'LLM endpoints' add your LAN ollama host, e.g. http://10.139.180.22:11434."
Write-Host "  3. In 'Local settings' set the html output folder, schedule and (optionally) Firebase."
