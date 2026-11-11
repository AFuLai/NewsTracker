"""One pipeline per DB (F-CONC-1), on Linux and Windows.

An exclusive, non-blocking lock on <db>.lock held for the life of the process.
The OS drops it when the process exits, so a crash never leaves a stale lock:
flock on POSIX, msvcrt.locking on Windows (a 1-byte region lock).
"""
from __future__ import annotations

import os
from pathlib import Path


def acquire(db: Path):
    """Return the open lock file (keep a reference!) or None if another run holds it."""
    Path(db).parent.mkdir(parents=True, exist_ok=True)
    f = open(f"{db}.lock", "a+")
    try:
        if os.name == "nt":
            import msvcrt
            f.seek(0)
            msvcrt.locking(f.fileno(), msvcrt.LK_NBLCK, 1)
        else:
            import fcntl
            fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except OSError:
        f.close()
        return None
    return f
