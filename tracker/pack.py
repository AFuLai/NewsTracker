"""Version bump + git commit/tag + git archive zip output."""
from __future__ import annotations

import os
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
    # Only the release bookkeeping: `add -A` once swept stray files (an NTFS
    # alternate-data-stream file, a side project under html/) into a release.
    _git("add", "--", "VERSION", "ChangeLog.html")
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


def _win_path(p: Path) -> str:
    if os.name == "nt":
        return str(p)
    return subprocess.check_output(["wslpath", "-w", str(p)], text=True).strip()


def portable_from_head(out_dir: Path) -> Path:
    """Portable build of the current commit, without a release: no version
    bump, no ChangeLog, no tag, no tarball. Named <VERSION>-<short sha>."""
    import tempfile
    sha = _git("rev-parse", "--short", "HEAD").strip()
    m, n = read_version()
    label = f"{m}.{n}-{sha}"
    out_dir.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=out_dir) as tmp:
        src = Path(tmp) / f"Tracker-{label}.zip"
        _git("archive", "--format=zip", f"--prefix=Tracker-{label}/", "-o", str(src), "HEAD")
        return build_portable(src, out_dir, version=label)


def build_portable(source_zip: Path, out_dir: Path, *, version: str | None = None) -> Path:
    """Run windows/build-portable.ps1 on the release zip (from WSL via interop).

    Produces NewsTracker-portable-<ver>.zip in out_dir (the project's release\): the
    program plus an embeddable Python with every dependency, so the target
    machine needs no Python. Needs Windows Python 3.11+ and internet on this
    (build) machine; raises CalledProcessError when the script fails.
    """
    script = ROOT / "windows" / "build-portable.ps1"
    exe = "powershell" if os.name == "nt" else "powershell.exe"
    version = version or source_zip.stem.removeprefix("Tracker-")
    subprocess.run([exe, "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", _win_path(script),
                    "-SourceZip", _win_path(source_zip), "-OutDir", _win_path(out_dir),
                    "-Version", version], check=True)
    return out_dir / f"NewsTracker-portable-{version}.zip"
