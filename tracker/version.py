"""The program version shown in the console header.

Portable builds carry a BUILD file (written by windows/build-portable.ps1,
e.g. "2.31-4cf7100"); a git checkout has only VERSION, so the short commit
is added when git can tell it. Read once per process.
"""
from __future__ import annotations

import functools
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


@functools.lru_cache(maxsize=1)
def version(root: Path = ROOT) -> str:
    p = root / "BUILD"
    if p.is_file():
        v = p.read_text(encoding="utf-8", errors="replace").strip()
        if v:
            return v
    p = root / "VERSION"
    v = p.read_text(encoding="utf-8").strip() if p.is_file() else "dev"
    if (root / ".git").exists():
        try:
            sha = subprocess.run(["git", "-C", str(root), "rev-parse", "--short", "HEAD"],
                                 capture_output=True, text=True, timeout=5).stdout.strip()
            if sha:
                v = f"{v}-{sha}"
        except (OSError, subprocess.SubprocessError):
            pass
    return v
