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

from . import ROOT

WEB_DIR = ROOT.parent / "web"
FIREBASE_PROJECT = "afu-news"
DEPLOY_MACHINE = "afu-delta"
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
    found = shutil.which("firebase")
    if found:
        return Path(found)
    raise DeployError("firebase-tools not found (set NEWSTRACKER_FIREBASE or install it under nvm)")


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
    name = machine_name()
    if name != DEPLOY_MACHINE:
        raise DeployError(f"deploy runs only on {DEPLOY_MACHINE} (this machine: {name or 'unknown'})")
    if not (WEB_DIR / "firebase.json").is_file():
        raise DeployError(f"{WEB_DIR}/firebase.json not found")
    fb = resolve_firebase()
    if channel:
        args = ["hosting:channel:deploy", channel]
    else:
        args = ["deploy", "--only", "hosting"]
    env = dict(os.environ)
    env["PATH"] = f"{fb.parent}{os.pathsep}{env.get('PATH', '')}"   # firebase needs its node
    proc = subprocess.run([str(fb), *args, "--project", FIREBASE_PROJECT, "--non-interactive"],
                          cwd=WEB_DIR, env=env, capture_output=True, text=True, timeout=900)
    out = (proc.stdout + proc.stderr).strip()
    if proc.returncode != 0:
        raise DeployError(f"firebase exited {proc.returncode}: {out[-800:]}")
    return out.splitlines()[-1] if out else ""
