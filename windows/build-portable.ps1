# Build the portable NewsTracker for Windows: one zip, no Python install needed.
#
#   powershell -ExecutionPolicy Bypass -File windows\build-portable.ps1 [-SourceZip Tracker-2.31.zip] [-OutDir D:\out]
#
# The result, NewsTracker-portable-<ver>.zip, holds the program plus the official
# Windows *embeddable* Python (python.org) with every dependency already
# installed into it. On the target machine: unzip anywhere, run NewsTracker.cmd.
# Nothing is installed, no PATH, no venv, no registry.
#
# Run this on a build machine that has Python 3.11+ (x64) and internet access.
# The embedded Python is the same version as the build machine's, so the
# binary wheels pip picks match it.
param(
  [string]$SourceZip = "",   # a `tracker pack` zip; default: this checkout
  [string]$OutDir = "",      # default: <checkout>\dist
  [string]$Version = ""      # default: the VERSION file
)
$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"   # Invoke-WebRequest is 10x slower with the bar
$Here = Split-Path -Parent $PSScriptRoot

function Find-Python {
  $cands = @()
  if (Get-Command py -ErrorAction SilentlyContinue) {
    foreach ($v in "3.13", "3.12", "3.11") { $cands += ,@("py", "-$v") }
  }
  if (Get-Command python -ErrorAction SilentlyContinue) { $cands += ,@("python") }
  foreach ($c in $cands) {
    try {
      $exe = $c[0]; $rest = @($c | Select-Object -Skip 1)
      $out = & $exe @rest -c "import sys,struct; print(sys.version_info >= (3, 11) and struct.calcsize('P') == 8, sys.executable)" 2>$null
      if ($LASTEXITCODE -eq 0 -and $out -match "^True (.+)$") { return $Matches[1].Trim() }
    } catch { }
  }
  return $null
}

$py = Find-Python
if (-not $py) { throw "The build machine needs 64-bit Python 3.11+ (the target machine does not)." }
$pyVer = (& $py -c "import platform; print(platform.python_version())").Trim()
$tag = (& $py -c "import sys; print(f'{sys.version_info[0]}{sys.version_info[1]}')").Trim()
Write-Host "Build Python: $py ($pyVer)"

function Retry([scriptblock]$block) {
  for ($i = 1; ; $i++) {
    try { & $block; return } catch {
      if ($i -ge 15) { throw }
      Start-Sleep -Seconds 1
    }
  }
}

# Extract with Python, retrying per file: antivirus often holds a just-written
# DLL for a moment, which makes Expand-Archive fail outright.
function Unzip([string]$zipPath, [string]$dest) {
  & $py -c "import sys,time,zipfile
z = zipfile.ZipFile(sys.argv[1])
for m in z.infolist():
    for i in range(10):
        try:
            z.extract(m, sys.argv[2]); break
        except PermissionError:
            if i == 9: raise
            time.sleep(1)" $zipPath $dest
  if ($LASTEXITCODE -ne 0) { throw "unzip failed: $zipPath" }
}

$work = Join-Path $env:TEMP "nt-portable-build"
if (Test-Path $work) { Retry { Remove-Item -Recurse -Force $work } }
$app = Join-Path $work "NewsTracker"
New-Item -ItemType Directory -Force -Path $app | Out-Null

# 1. program files
if ($SourceZip) {
  $src = Join-Path $work "src"
  Unzip $SourceZip $src
  $top = Get-ChildItem $src | Select-Object -First 1
  Copy-Item -Recurse -Path (Join-Path $top.FullName "*") -Destination $app
} else {
  foreach ($item in "tracker", "ui", "searchinfo", "windows", "NewsTracker.cmd", "VERSION", "ChangeLog.html", "pyproject.toml", "README.md") {
    $p = Join-Path $Here $item
    if (Test-Path $p) { Copy-Item -Recurse -Path $p -Destination $app }
  }
}
Get-ChildItem -Path $app -Recurse -Directory -Filter "__pycache__" | Remove-Item -Recurse -Force
# cmd.exe misparses LF-only batch files; a WSL checkout has LF.
Get-ChildItem -Path $app -Filter "*.cmd" | ForEach-Object {
  $f = $_.FullName
  Retry {
    $t = [IO.File]::ReadAllText($f) -replace "`r?`n", "`r`n"
    [IO.File]::WriteAllText($f, $t, (New-Object Text.ASCIIEncoding))
  }
}
$ver = if ($Version) { $Version } elseif (Test-Path (Join-Path $app "VERSION")) { (Get-Content (Join-Path $app "VERSION") -Raw).Trim() } else { "dev" }
Write-Host "NewsTracker version: $ver"

# 2. embeddable Python (cached between builds)
$cache = Join-Path $env:LOCALAPPDATA "NewsTracker-build"
New-Item -ItemType Directory -Force -Path $cache | Out-Null
$embedName = "python-$pyVer-embed-amd64.zip"
$embedZip = Join-Path $cache $embedName
if (-not (Test-Path $embedZip)) {
  $url = "https://www.python.org/ftp/python/$pyVer/$embedName"
  Write-Host "Downloading $url"
  Invoke-WebRequest -Uri $url -OutFile "$embedZip.part" -UseBasicParsing
  Move-Item "$embedZip.part" $embedZip
}
$pyDir = Join-Path $app "python"
Unzip $embedZip $pyDir

# The ._pth file is the embeddable Python's whole sys.path: add site-packages
# and the program folder (..) so `python -m tracker.cli` works from anywhere.
$pth = Join-Path $pyDir "python$tag._pth"
Retry { @("python$tag.zip", ".", "Lib\site-packages", "..", "import site") | Set-Content -Path $pth -Encoding ascii }

# 3. dependencies, from pyproject.toml, as binary wheels for this Python
$site = Join-Path $pyDir "Lib\site-packages"
New-Item -ItemType Directory -Force -Path $site | Out-Null
$deps = & $py -c "import tomllib,sys; print('\n'.join(tomllib.load(open(sys.argv[1],'rb'))['project']['dependencies']))" (Join-Path $app "pyproject.toml")
if ($LASTEXITCODE -ne 0 -or -not $deps) { throw "could not read dependencies from pyproject.toml" }
$reqs = Join-Path $work "requirements.txt"
$deps | Set-Content -Path $reqs -Encoding utf8
& $py -m pip install --disable-pip-version-check --no-warn-script-location --target $site -r $reqs
if ($LASTEXITCODE -ne 0) { throw "pip install failed" }
Get-ChildItem -Path $site -Recurse -Directory -Filter "__pycache__" | Remove-Item -Recurse -Force
Remove-Item -Recurse -Force (Join-Path $site "bin") -ErrorAction SilentlyContinue

# 4. smoke test with the embedded interpreter only (no PATH, no user site)
$env:PYTHONNOUSERSITE = "1"
& (Join-Path $pyDir "python.exe") -c "import tracker.cli, tracker.schedule, selectolax.parser, curl_cffi, trafilatura, playwright; print('embedded python ok')"
if ($LASTEXITCODE -ne 0) { throw "smoke test failed: the embedded Python cannot import NewsTracker" }

# 5. zip
if (-not $OutDir) { $OutDir = Join-Path $Here "dist" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$zip = Join-Path $OutDir "NewsTracker-portable-$ver.zip"
if (Test-Path $zip) { Remove-Item -Force $zip }
& $py -c "import os,sys,zipfile
root, out = sys.argv[1], sys.argv[2]
base = os.path.dirname(root)
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for d, _, files in os.walk(root):
        for f in files:
            p = os.path.join(d, f)
            z.write(p, os.path.relpath(p, base))" $app $zip
if ($LASTEXITCODE -ne 0) { throw "zip failed" }
$mb = [math]::Round((Get-Item $zip).Length / 1MB, 1)
Write-Host "Portable build: $zip ($mb MB)" -ForegroundColor Green
