"""Start the Chrome the program uses, on native Windows.

One Chrome serves both purposes the WSL install splits between the user and
the program: the console page opens in it, and its remote-debugging port is
the CDP endpoint that BROWSER sources (and the Gemini backend) drive. It runs
with its own profile under NEWSTRACKER_HOME\\chrome, so it never touches the
user's everyday profile and a sign-in made there (e.g. Gemini) persists.

On WSL nothing here is used: the user starts the debug Chrome on the Windows
side and preflight finds it through the WSL gateway, as before.
"""
from __future__ import annotations

import os
import shutil
import subprocess
import time
from pathlib import Path


def find_chrome(configured: str = "") -> Path | None:
    """chrome.exe: the configured path, else the usual install locations, else PATH."""
    cands: list[str] = []
    if configured:
        cands.append(configured)
    for env in ("PROGRAMFILES", "PROGRAMFILES(X86)", "LOCALAPPDATA"):
        base = os.environ.get(env)
        if base:
            cands.append(str(Path(base) / "Google" / "Chrome" / "Application" / "chrome.exe"))
    for env in ("PROGRAMFILES", "PROGRAMFILES(X86)"):
        base = os.environ.get(env)
        if base:   # Edge is Chromium and speaks CDP too; a fallback, not the default
            cands.append(str(Path(base) / "Microsoft" / "Edge" / "Application" / "msedge.exe"))
    for name in ("chrome", "chrome.exe", "msedge.exe"):
        w = shutil.which(name)
        if w:
            cands.append(w)
    for c in cands:
        if c and Path(c).is_file():
            return Path(c)
    return None


def launch_args(chrome: Path, *, port: int, profile: Path, url: str | None) -> list[str]:
    args = [str(chrome), f"--remote-debugging-port={port}", f"--user-data-dir={profile}",
            "--no-first-run", "--no-default-browser-check"]
    if url:
        args += ["--new-window", url]
    return args


def launch(url: str | None = None, *, wait_cdp: float = 15.0) -> str | None:
    """Open `url` in the program's Chrome, starting it with the debug port if it
    is not running. Returns the CDP base URL once it answers, else None."""
    from . import PATHS, settings
    from .preflight import find_browser
    s = settings.load()
    port = int(s.get("cdp_port") or 9999)
    chrome = find_chrome(s.get("chrome", ""))
    if chrome is None:
        if url:   # still show the console, in whatever browser Windows opens
            os.startfile(url) if os.name == "nt" else None
        return None
    profile = Path(PATHS["chrome_profile"] or (Path.home() / ".newstracker-chrome"))
    profile.mkdir(parents=True, exist_ok=True)
    # Same profile + same port: an already-running instance just opens the window.
    flags = 0x00000008 | 0x00000200 if os.name == "nt" else 0   # DETACHED_PROCESS | NEW_PROCESS_GROUP
    subprocess.Popen(launch_args(chrome, port=port, profile=profile, url=url),
                     stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=flags)
    end = time.monotonic() + wait_cdp
    while time.monotonic() < end:
        base = find_browser(timeout=1.0)
        if base:
            return base
        time.sleep(0.5)
    return None
