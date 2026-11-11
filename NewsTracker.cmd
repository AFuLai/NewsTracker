@echo off
rem NewsTracker launcher (native Windows, no WSL).
rem   NewsTracker.cmd             open the console (Chrome) for the last 3 days
rem   NewsTracker.cmd daily ...   unattended update (used by Task Scheduler)
rem   NewsTracker.cmd <command>   any tracker command, e.g. export-data D:\data.zip
setlocal
set "HERE=%~dp0"
set "PY=%HERE%.venv\Scripts\python.exe"
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
