# Build the portable NewsTracker for Windows as two zips:
#
#   NewsTracker-runtime-<id>.zip   the official Windows *embeddable* Python with
#                                  every dependency installed (~79 MB). Rebuilt
#                                  only when the Python version or the
#                                  dependency list changes; <id> says which.
#   NewsTracker-app-<ver>.zip      the program itself (< 1 MB). Every build.
#
# Both unzip into the same NewsTracker\ folder. Upgrading the program is just
# unzipping a new app zip over it; the runtime stays. NewsTracker.cmd checks
# that the runtime it finds is the one the app was built against.
#
#   powershell -ExecutionPolicy Bypass -File windows\build-portable.ps1 [-SourceZip x.zip] [-OutDir D:\out] [-Version v] [-ForceRuntime]
#
# Run on a build machine with 64-bit Python 3.11+ and internet; the target
# machine needs neither.
param(
  [string]$SourceZip = "",   # a `git archive` zip; default: this checkout
  [string]$OutDir = "",      # default: <checkout>\dist
  [string]$Version = "",     # default: the VERSION file
  [switch]$ForceRuntime      # rebuild the runtime zip even if it exists
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

# Zip <root> as NewsTracker\..., optionally leaving out one top-level folder.
function ZipTree([string]$root, [string]$out, [string]$exclude = "") {
  if (Test-Path $out) { Remove-Item -Force $out }
  & $py -c "import os,sys,zipfile
root, out, excl = sys.argv[1], sys.argv[2], sys.argv[3]
base = os.path.dirname(root)
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for d, dirs, files in os.walk(root):
        if d == root and excl:
            dirs[:] = [x for x in dirs if x != excl]
        for f in files:
            p = os.path.join(d, f)
            z.write(p, os.path.relpath(p, base))" $root $out $exclude
  if ($LASTEXITCODE -ne 0) { throw "zip failed: $out" }
  $mb = [math]::Round((Get-Item $out).Length / 1MB, 1)
  Write-Host "  $out ($mb MB)" -ForegroundColor Green
}

$work = Join-Path $env:TEMP "nt-portable-build"
if (Test-Path $work) { Retry { Remove-Item -Recurse -Force $work } }
$app = Join-Path $work "NewsTracker"
New-Item -ItemType Directory -Force -Path $app | Out-Null
if (-not $OutDir) { $OutDir = Join-Path $Here "dist" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

# 1. program files: an allowlist of what runs, nothing else.
if ($SourceZip) {
  $src = Join-Path $work "src"
  Unzip $SourceZip $src
  $srcRoot = (Get-ChildItem $src | Select-Object -First 1).FullName
} else {
  $srcRoot = $Here
}
foreach ($item in "tracker", "ui", "searchinfo", "NewsTracker.cmd", "VERSION") {
  $p = Join-Path $srcRoot $item
  if (-not (Test-Path $p)) { throw "missing from the source: $item" }
  Copy-Item -Recurse -Path $p -Destination $app
}
Copy-Item -Path (Join-Path $srcRoot "windows\README.md") -Destination (Join-Path $app "README.md")
Get-ChildItem -Path $app -Recurse -Directory -Filter "__pycache__" | Remove-Item -Recurse -Force
Get-ChildItem -Path $app -Recurse -File -Include "*.pyc", "*.pyo" | Remove-Item -Force
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

# 2. runtime identity: Python version + the dependency list. Same inputs, same id.
$deps = & $py -c "import tomllib,sys; print('\n'.join(sorted(tomllib.load(open(sys.argv[1],'rb'))['project']['dependencies'])))" (Join-Path $srcRoot "pyproject.toml")
if ($LASTEXITCODE -ne 0 -or -not $deps) { throw "could not read dependencies from pyproject.toml" }
$reqs = Join-Path $work "requirements.txt"
$deps | Set-Content -Path $reqs -Encoding utf8
$hash = (& $py -c "import hashlib,sys; print(hashlib.sha256((sys.argv[1] + '\n' + open(sys.argv[2], encoding='utf-8').read()).encode()).hexdigest()[:8])" $pyVer $reqs).Trim()
$rtId = "py$($pyVer -replace '\.', '')-$hash"
Retry { Set-Content -Path (Join-Path $app "RUNTIME_REQUIRED") -Value $rtId -Encoding ascii -NoNewline }
$rtZip = Join-Path $OutDir "NewsTracker-runtime-$rtId.zip"
Write-Host "Runtime id: $rtId"

$pyDir = Join-Path $app "python"
if ((Test-Path $rtZip) -and -not $ForceRuntime) {
  Write-Host "Runtime zip already built; reusing it (use -ForceRuntime to rebuild)."
  Unzip $rtZip $work          # for the smoke test below
} else {
  # 3a. embeddable Python (download cached between builds)
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
  Unzip $embedZip $pyDir
  # The ._pth file is the embeddable Python's whole sys.path: add site-packages
  # and the program folder (..) so `python -m tracker.cli` works from anywhere.
  $pth = Join-Path $pyDir "python$tag._pth"
  Retry { @("python$tag.zip", ".", "Lib\site-packages", "..", "import site") | Set-Content -Path $pth -Encoding ascii }

  # 3b. dependencies as binary wheels for this Python
  $site = Join-Path $pyDir "Lib\site-packages"
  New-Item -ItemType Directory -Force -Path $site | Out-Null
  & $py -m pip install --disable-pip-version-check --no-warn-script-location --target $site -r $reqs
  if ($LASTEXITCODE -ne 0) { throw "pip install failed" }
  Get-ChildItem -Path $site -Recurse -Directory -Filter "__pycache__" | Remove-Item -Recurse -Force
  Remove-Item -Recurse -Force (Join-Path $site "bin") -ErrorAction SilentlyContinue
  Get-ChildItem -Path $site -Filter "*.exe" -File | Remove-Item -Force
  Retry { Set-Content -Path (Join-Path $pyDir "RUNTIME") -Value $rtId -Encoding ascii -NoNewline }
  $rtBuilt = $true
}

# 4. smoke test: this app on this runtime, embedded interpreter only
$env:PYTHONNOUSERSITE = "1"
& (Join-Path $pyDir "python.exe") -c "import tracker.cli, tracker.schedule, selectolax.parser, curl_cffi, trafilatura, playwright; print('embedded python ok')"
if ($LASTEXITCODE -ne 0) { throw "smoke test failed: the embedded Python cannot import NewsTracker" }

# 5. zips
Write-Host "Output:"
if ($rtBuilt) {
  # runtime zip = NewsTracker\python\... only
  $rtRoot = Join-Path $work "rt\NewsTracker"
  New-Item -ItemType Directory -Force -Path $rtRoot | Out-Null
  Move-Item $pyDir (Join-Path $rtRoot "python")
  ZipTree $rtRoot $rtZip
  Move-Item (Join-Path $rtRoot "python") $pyDir
} else {
  Write-Host "  $rtZip (unchanged)"
}
ZipTree $app (Join-Path $OutDir "NewsTracker-app-$ver.zip") "python"
