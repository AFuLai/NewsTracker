"""Publish the generated site to Firebase Hosting (project afu-news).

The deploy directory is the workarea's /opt/tracker/web: firebase.json,
.firebaserc and `public/`, the site itself (DEFAULT_OUT renders into it). It is
project-specific, machine-local and never committed; the site itself is
rendered from db/ and is not tracked either.

Only one machine publishes (user ruling 2026-10-19: "目前只在 DELTA 發布"), so
deploy refuses anywhere whose Common machine_name is not afu-delta.

firebase-tools is an nvm install that is not on a non-interactive PATH, so the
binary is resolved explicitly: $NEWSTRACKER_FIREBASE, else the newest
~/.nvm/versions/node/*/bin/firebase, else whatever `firebase` is on PATH.
"""
from __future__ import annotations

import json
import os
import re
import shutil
import subprocess
from pathlib import Path

from . import PATHS, ROOT, settings

WEB_DIR = Path(PATHS["web_dir"])
FIREBASE_PROJECT = "afu-news"
DEPLOY_MACHINE = "afu-delta"
#: Standalone (native Windows / NEWSTRACKER_HOME) installs: publishing is an
#: opt-in setting with its own project, not tied to a Common machine name.
STANDALONE = settings.home() is not None
COMMON_LOCAL = Path("/mnt/d/Claude/Common/repo/tools/common-env/common_local.py")


class DeployError(RuntimeError):
    pass


def _version_key(p: Path) -> tuple[int, ...]:
    # .../node/v24.15.0/bin/firebase -> (24, 15, 0)
    return tuple(int(x) for x in re.findall(r"\d+", p.parent.parent.name)) or (0,)


def resolve_firebase() -> Path:
    env = os.environ.get("NEWSTRACKER_FIREBASE")
    if env:
        p = Path(env)
        if not p.is_file():
            raise DeployError(f"NEWSTRACKER_FIREBASE={env} is not a file")
        return p
    nvm = sorted(Path.home().glob(".nvm/versions/node/*/bin/firebase"), key=_version_key)
    if nvm:
        return nvm[-1]
    found = shutil.which("firebase")   # on Windows this finds npm's firebase.cmd
    if found:
        return Path(found)
    if os.name == "nt":
        npm_bin = Path(os.environ.get("APPDATA", "")) / "npm" / "firebase.cmd"
        if npm_bin.is_file():
            return npm_bin
        raise DeployError("找不到 firebase-tools：請安裝 Node.js 後執行 npm install -g firebase-tools")
    raise DeployError("firebase-tools not found (set NEWSTRACKER_FIREBASE or install it under nvm)")


def config() -> dict:
    """{enabled, project, web_dir} for this install."""
    if not STANDALONE:
        return {"enabled": True, "project": FIREBASE_PROJECT, "web_dir": str(WEB_DIR)}
    fb = settings.load()["firebase"]
    return {"enabled": bool(fb["enabled"]), "project": fb["project"] or FIREBASE_PROJECT,
            "web_dir": str(WEB_DIR)}


def ensure_firebase_json(web_dir: Path, public: Path) -> Path:
    """Write web_dir/firebase.json (hosting.public -> the site) if it is missing."""
    f = web_dir / "firebase.json"
    if f.is_file():
        return f
    web_dir.mkdir(parents=True, exist_ok=True)
    try:
        rel = os.path.relpath(public, web_dir)
    except ValueError:      # another drive on Windows: firebase accepts an absolute path
        rel = str(public)
    f.write_text(json.dumps({"hosting": {"public": rel.replace("\\", "/"),
                                         "ignore": ["firebase.json", "**/.*"]}},
                            indent=2) + "\n", "utf-8")
    return f


def login() -> None:
    """Open a console window running `firebase login` (browser OAuth, once per PC)."""
    fb = resolve_firebase()
    if os.name == "nt":
        subprocess.Popen(["cmd", "/c", "start", "Firebase login", "cmd", "/k", str(fb), "login"])
    else:
        raise DeployError(f"run in a terminal: {fb} login")


def login_status(timeout: float = 30) -> str:
    """The signed-in account, '' when nobody is, or 'unknown: <why>'."""
    try:
        fb = resolve_firebase()
        proc = subprocess.run([str(fb), "login:list"], capture_output=True, text=True,
                              timeout=timeout)
    except (DeployError, OSError, subprocess.SubprocessError) as exc:
        return f"unknown: {exc}"
    m = re.search(r"Logged in as (\S+)", proc.stdout + proc.stderr)
    return m.group(1) if m else ""


def machine_name() -> str | None:
    """Common's machine_name from %USERPROFILE%\\.common.local.json, or None."""
    try:
        path = subprocess.run(["python3", str(COMMON_LOCAL), "--path"], capture_output=True,
                              text=True, timeout=30, check=True).stdout.strip()
        return json.loads(Path(path).read_text(encoding="utf-8")).get("machine_name")
    except (OSError, ValueError, subprocess.SubprocessError):
        return None


def deploy(*, channel: str | None = None) -> str:
    """Deploy hosting; to a preview `channel` when given, else live.

    Returns firebase's last output line. Raises DeployError on any failure,
    including running on a machine other than the publishing one.
    """
    from . import DEFAULT_OUT
    cfg = config()
    if STANDALONE:
        if not cfg["enabled"]:
            raise DeployError("Firebase 發布未啟用（控制台「發布」設定）")
        ensure_firebase_json(WEB_DIR, Path(DEFAULT_OUT))
    else:
        name = machine_name()
        if name != DEPLOY_MACHINE:
            raise DeployError(f"deploy runs only on {DEPLOY_MACHINE} (this machine: {name or 'unknown'})")
    if not (WEB_DIR / "firebase.json").is_file():
        raise DeployError(f"{WEB_DIR}/firebase.json not found")
    # The site shell is copied into public/ only by a render; without this a deploy
    # made after a UI-only change (no pipeline run since) publishes the stale page.
    from .render import sync_index_html
    sync_index_html(DEFAULT_OUT)
    fb = resolve_firebase()
    if channel:
        args = ["hosting:channel:deploy", channel]
    else:
        args = ["deploy", "--only", "hosting"]
    env = dict(os.environ)
    env["PATH"] = f"{fb.parent}{os.pathsep}{env.get('PATH', '')}"   # firebase needs its node
    proc = subprocess.run([str(fb), *args, "--project", cfg["project"], "--non-interactive"],
                          cwd=WEB_DIR, env=env, capture_output=True, text=True, timeout=900)
    out = (proc.stdout + proc.stderr).strip()
    if proc.returncode != 0:
        raise DeployError(f"firebase exited {proc.returncode}: {out[-800:]}")
    return out.splitlines()[-1] if out else ""
