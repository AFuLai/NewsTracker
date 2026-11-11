"""Where this install keeps its data, and the user-editable settings.

Two layouts, chosen by platform, never by guessing at runtime:

* **WSL / Linux (the original install)** — unchanged: the checkout is
  /opt/tracker/repo, data in repo/db, the site in /opt/tracker/web/public,
  status.json in the Windows project folder. Nothing here changes those
  unless NEWSTRACKER_HOME is set explicitly.

* **Native Windows (standalone, no WSL)** — everything the program writes
  lives under one folder, NEWSTRACKER_HOME (default
  %LOCALAPPDATA%\\NewsTracker), so moving to another PC is "copy that folder"
  (or `tracker export-data` / `import-data`):

      <home>\\settings.json      this file's settings (console-editable)
      <home>\\endpoints.json     the ollama endpoint list (as on WSL)
      <home>\\db\\articles.sqlite
      <home>\\logs\\  <home>\\backups\\  <home>\\tarball\\  <home>\\status.json
      <install>\\html\\            the generated static site (default out_dir)
      <home>\\site\\firebase.json  written on first Firebase deploy
      <home>\\chrome\\             profile of the Chrome the program starts

settings.json keys (all optional; missing = default):

  out_dir     the static-site output folder (the "html path")
  ui_html     the UI shell copied into out_dir as index.html (default: the
              install's ui/index.html) — for a customised page
  firebase    {"enabled": false, "project": "afu-news", "web_dir": "<home>\\site"}
  schedule    {"enabled": false, "mode": "daily"|"hourly", "time": "07:30",
               "every_hours": 6, "days": 3, "deploy": false, "cra": true}
              (cra: the periodic update also refreshes the CRA reference library)
  chrome      path to chrome.exe (default: found in the usual places)
  cdp_port    the program Chrome's remote-debugging port (default 9333). Never
              9999 or 9998: on a Common machine those belong to the shared
              D:/WSL/chrome-debug profile (ruling 20261007183000); a stored
              9999 from older builds is moved to the default on load.

This module imports nothing from the package (it is imported by __init__).
"""
from __future__ import annotations

import json
import os
from pathlib import Path

IS_WINDOWS = os.name == "nt"

#: The install (checkout) directory: the folder holding tracker/, ui/, searchinfo/.
INSTALL_DIR = Path(__file__).resolve().parent.parent

DEFAULTS: dict = {
    "out_dir": "",
    "ui_html": "",
    "firebase": {"enabled": False, "project": "afu-news", "web_dir": ""},
    "schedule": {"enabled": False, "mode": "daily", "time": "07:30",
                 "every_hours": 6, "days": 3, "deploy": False, "cra": True},
    "chrome": "",
    "cdp_port": 9333,
}

#: Ports this program must never open its own Chrome on (shared debug Chrome).
RESERVED_CDP_PORTS = (9998, 9999)


def home() -> Path | None:
    """The data folder, or None for the classic WSL layout."""
    env = os.environ.get("NEWSTRACKER_HOME", "").strip()
    if env:
        return Path(env).expanduser()
    if IS_WINDOWS:
        base = os.environ.get("LOCALAPPDATA") or str(Path.home() / "AppData" / "Local")
        return Path(base) / "NewsTracker"
    return None


def settings_path() -> Path | None:
    h = home()
    return h / "settings.json" if h else None


def _merge(base: dict, over: dict) -> dict:
    out = {}
    for k, v in base.items():
        o = over.get(k) if isinstance(over, dict) else None
        if isinstance(v, dict):
            out[k] = _merge(v, o if isinstance(o, dict) else {})
        elif o is None:
            out[k] = v
        elif isinstance(v, bool):
            out[k] = bool(o) if isinstance(o, (bool, int)) else v
        elif isinstance(v, int):
            try:
                out[k] = int(o)
            except (TypeError, ValueError):
                out[k] = v
        else:
            out[k] = str(o).strip() if isinstance(o, (str, int, float)) else v
    return out


def load() -> dict:
    """Settings merged over DEFAULTS; unknown keys dropped, bad values defaulted."""
    p = settings_path()
    raw: dict = {}
    if p is not None:
        try:
            got = json.loads(p.read_text("utf-8"))
            raw = got if isinstance(got, dict) else {}
        except (OSError, ValueError):
            raw = {}
    out = _merge(DEFAULTS, raw)
    if out.get("cdp_port") in RESERVED_CDP_PORTS:
        out["cdp_port"] = DEFAULTS["cdp_port"]
    return out


def save(changes: dict) -> dict:
    """Merge `changes` (same shape as DEFAULTS, partial) into settings.json and
    return the result. Raises RuntimeError on the classic WSL layout, where
    there is no settings file to write."""
    p = settings_path()
    if p is None:
        raise RuntimeError("no settings file in the WSL layout (set NEWSTRACKER_HOME)")
    cur = load()
    for k, v in (changes or {}).items():
        if k not in DEFAULTS:
            continue
        if isinstance(DEFAULTS[k], dict) and isinstance(v, dict):
            cur[k] = dict(cur[k], **{kk: vv for kk, vv in v.items() if kk in DEFAULTS[k]})
        else:
            cur[k] = v
    cur = _merge(DEFAULTS, cur)
    p.parent.mkdir(parents=True, exist_ok=True)
    tmp = p.with_name(p.name + ".tmp")
    tmp.write_text(json.dumps(cur, ensure_ascii=False, indent=2) + "\n", "utf-8")
    os.replace(tmp, p)
    return cur


def resolve() -> dict:
    """Every path the program uses, as Paths. The single place layouts differ."""
    h = home()
    s = load()
    if h is None:   # classic WSL layout: exactly the pre-2026-11-11 constants
        root = Path("/opt/tracker/repo")
        project = Path("/mnt/d/Claude/Tool/NewsTracker")
        return {
            "home": None, "root": root, "project": project,
            "db": root / "db" / "articles.sqlite",
            "out": root.parent / "web" / "public",
            "logs": root / "logs",
            "backups": root.parent / "state" / "backups",
            "tarball": project / "tarball",
            "status": project / "status.json",
            "endpoints": root / "endpoints.json",
            "query_cache": root / "db" / "query_cache.json",
            "ui_html": root / "ui" / "index.html",
            "web_dir": root.parent / "web",
            "chrome_profile": None,
        }
    # Default site output: <program folder>\html, next to NewsTracker.cmd, so
    # the generated site is where the user runs the program from.
    out = Path(s["out_dir"]).expanduser() if s["out_dir"] else INSTALL_DIR / "html"
    # Firebase's deploy folder (firebase.json/.firebaserc) stays in the data
    # folder; firebase.json points at `out` by relative or absolute path.
    web = Path(s["firebase"]["web_dir"]).expanduser() if s["firebase"]["web_dir"] else h / "site"
    return {
        "home": h, "root": INSTALL_DIR, "project": h,
        "db": h / "db" / "articles.sqlite",
        "out": out,
        "logs": h / "logs",
        "backups": h / "backups",
        "tarball": h / "tarball",
        "status": h / "status.json",
        "endpoints": h / "endpoints.json",
        "query_cache": h / "db" / "query_cache.json",
        "ui_html": Path(s["ui_html"]).expanduser() if s["ui_html"] else INSTALL_DIR / "ui" / "index.html",
        "web_dir": web,
        "chrome_profile": h / "chrome",
    }
