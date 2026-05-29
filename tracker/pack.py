"""Version bump + git commit/tag + git archive zip output."""
from __future__ import annotations

import subprocess
from pathlib import Path

from . import DEFAULT_TARBALL, ROOT
from .changelog import append_release

VERSION_PATH = ROOT / "VERSION"


def read_version() -> tuple[int, int]:
    if not VERSION_PATH.exists():
        return (0, 0)
    raw = VERSION_PATH.read_text(encoding="utf-8").strip()
    try:
        m, n = raw.split(".")
        return int(m), int(n)
    except (ValueError, AttributeError):
        return (0, 0)


def write_version(m: int, n: int) -> None:
    VERSION_PATH.write_text(f"{m}.{n}\n", encoding="utf-8", newline="\n")


def next_version(*, major: bool = False, keep: bool = False) -> tuple[int, int]:
    m, n = read_version()
    if keep:
        return m, n
    if major:
        return m + 1, 0
    return m, n + 1


def _git(*args: str) -> str:
    return subprocess.check_output(["git", "-C", str(ROOT), *args], text=True,
                                   errors="replace")


def pack(*, major: bool = False, keep: bool = False,
         tarball_dir: Path = DEFAULT_TARBALL) -> dict[str, str | int]:
    m, n = next_version(major=major, keep=keep)
    version = f"{m}.{n}"
    section = append_release(version)
    write_version(m, n)
    _git("add", "-A")
    try:
        _git("commit", "-m", f"Release Tracker-{version}")
    except subprocess.CalledProcessError:
        # nothing to commit; continue
        pass
    try:
        _git("tag", f"v{version}")
    except subprocess.CalledProcessError:
        pass  # tag may already exist on --keep

    tarball_dir.mkdir(parents=True, exist_ok=True)
    out_zip = tarball_dir / f"Tracker-{version}.zip"
    _git("archive", "--format=zip", f"--prefix=Tracker-{version}/",
         "-o", str(out_zip), "HEAD")
    size = out_zip.stat().st_size
    return {"version": version, "zip": str(out_zip), "size": size,
            "section_chars": len(section)}
