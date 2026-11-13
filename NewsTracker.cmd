@echo off
rem NewsTracker launcher (native Windows, no WSL).
rem   NewsTracker.cmd             open the console in the default browser (last 3 days)
rem   NewsTracker.cmd daily ...   one unattended update (what the periodic update runs)
rem   NewsTracker.cmd scheduler   stay running and update per the console's schedule
rem   NewsTracker.cmd <command>   any tracker command, e.g. export-data D:\data.zip
setlocal
set "HERE=%~dp0"
rem Portable build: bundled embeddable Python in .\python (windows\build-portable.ps1).
set "PY=%HERE%python\python.exe"
if exist "%HERE%RUNTIME_REQUIRED" (
  set /p NEED=<"%HERE%RUNTIME_REQUIRED"
  if not exist "%PY%" goto :noruntime
  set /p HAVE=<"%HERE%python\RUNTIME"
)
if exist "%HERE%RUNTIME_REQUIRED" if not "%HAVE%"=="%NEED%" goto :noruntime
if exist "%PY%" (
  set PYTHONNOUSERSITE=1
  set PYTHONHOME=
  set PYTHONPATH=
) else (
  set "PY=%HERE%.venv\Scripts\python.exe"
)
if not exist "%PY%" (
  echo NewsTracker is not installed yet. Run:  powershell -ExecutionPolicy Bypass -File "%HERE%windows\install.ps1"
  exit /b 2
)
set PYTHONUTF8=1
set PYTHONIOENCODING=utf-8
if "%~1"=="" (
  "%PY%" -m tracker.cli pipeline --ui --days 3
  exit /b %ERRORLEVEL%
)
"%PY%" -m tracker.cli %*
exit /b %ERRORLEVEL%

:noruntime
echo.
echo  This NewsTracker needs the runtime package  NewsTracker-runtime-%NEED%.zip
if defined HAVE echo  (the python folder here is runtime %HAVE%)
echo  Unzip it into the same folder as this file, so that python\python.exe sits next to NewsTracker.cmd.
echo.
echo  需要執行環境 NewsTracker-runtime-%NEED%.zip：解壓到本程式同一個資料夾即可。
echo.
pause
exit /b 3
