"""Point-in-time copies of db/articles.sqlite.

The DB is the only source of the site (html/ is generated and untracked) and
it never enters git: the repo is public and articles carry raw_text. So after
each successful run a consistent copy is taken with SQLite's online backup API
(safe while the WAL is live, unlike a file copy) into the workarea's
state/backups/, keeping the newest KEEP copies. state/ is machine-local and
never synced (Common workarea-names: "state", sync=forbidden).
"""
from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from . import ROOT

SNAP_DIR = ROOT.parent / "state" / "backups"
KEEP = 7


def snapshot(db: Path, *, dest: Path = SNAP_DIR, keep: int = KEEP) -> Path:
    """Copy `db` to dest/articles-<UTC>.sqlite, verify it, prune to `keep`."""
    dest.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
    out = dest / f"articles-{stamp}.sqlite"
    src = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
    try:
        dst = sqlite3.connect(out)
        try:
            src.backup(dst)
            # A self-contained file: no -wal/-shm siblings left to outlive pruning.
            dst.execute("PRAGMA journal_mode=DELETE")
        finally:
            dst.close()
        want = src.execute("SELECT COUNT(*) FROM articles").fetchone()[0]
    finally:
        src.close()
    chk = sqlite3.connect(f"file:{out}?mode=ro&immutable=1", uri=True)
    try:
        if chk.execute("PRAGMA integrity_check").fetchone()[0] != "ok":
            raise RuntimeError(f"snapshot {out} failed integrity_check")
        got = chk.execute("SELECT COUNT(*) FROM articles").fetchone()[0]
    finally:
        chk.close()
    if got != want:
        raise RuntimeError(f"snapshot {out} has {got} articles, source has {want}")
    for old in sorted(dest.glob("articles-*.sqlite"))[:-keep]:
        old.unlink()
    return out
