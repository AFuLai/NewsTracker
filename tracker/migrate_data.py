"""Move an install's data to another machine: one zip, either direction.

export: a consistent copy of the DB (SQLite backup API, safe while the
dashboard is open), endpoints.json and — on a standalone install —
settings.json. Works from the WSL install too, which is how the existing data
reaches a new Windows PC.

import: unpacks into this install's data folder. Refuses to overwrite an
existing DB unless forced; the overwritten files are kept as *.bak-<stamp>.
settings.json paths that point at the old machine are cleared on import
(out_dir, ui_html, chrome, firebase.web_dir), so the new PC falls back to its
own defaults instead of a folder that does not exist there.
"""
from __future__ import annotations

import json
import sqlite3
import tempfile
import zipfile
from datetime import datetime, timezone
from pathlib import Path

from . import PATHS, settings

MANIFEST = "newstracker-export.json"


def export(dest: Path) -> dict:
    db = Path(PATHS["db"])
    if not db.is_file():
        raise FileNotFoundError(f"no database at {db}")
    dest = Path(dest)
    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        snap = Path(td) / "articles.sqlite"
        src = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
        try:
            dst = sqlite3.connect(snap)
            try:
                src.backup(dst)
                dst.execute("PRAGMA journal_mode=DELETE")
                n = dst.execute("SELECT COUNT(*) FROM articles").fetchone()[0]
            finally:
                dst.close()
        finally:
            src.close()
        info = {"format": 1, "exported_at": datetime.now(timezone.utc).isoformat(),
                "articles": n, "files": ["db/articles.sqlite"]}
        with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED) as z:
            z.write(snap, "db/articles.sqlite")
            for key, name in (("endpoints", "endpoints.json"),):
                p = Path(PATHS[key])
                if p.is_file():
                    z.write(p, name)
                    info["files"].append(name)
            sp = settings.settings_path()
            if sp is not None and sp.is_file():
                z.write(sp, "settings.json")
                info["files"].append("settings.json")
            z.writestr(MANIFEST, json.dumps(info, ensure_ascii=False, indent=2))
    return info


def import_(src: Path, *, force: bool = False) -> dict:
    if settings.home() is None:
        raise RuntimeError("import-data is for a standalone install (NEWSTRACKER_HOME)")
    src = Path(src)
    with zipfile.ZipFile(src) as z:
        names = set(z.namelist())
        if MANIFEST not in names or "db/articles.sqlite" not in names:
            raise ValueError(f"{src} is not a NewsTracker export")
        info = json.loads(z.read(MANIFEST))
        db = Path(PATHS["db"])
        if db.exists() and not force:
            raise FileExistsError(f"{db} already exists (use --force to replace it)")
        stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
        targets = {"db/articles.sqlite": db,
                   "endpoints.json": Path(PATHS["endpoints"]),
                   "settings.json": settings.settings_path()}
        for name, target in targets.items():
            if name not in names or target is None:
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            if target.exists():
                target.replace(target.with_name(target.name + f".bak-{stamp}"))
            for side in ("-wal", "-shm"):
                sib = target.with_name(target.name + side)
                if name.startswith("db/") and sib.exists():
                    sib.unlink()
            target.write_bytes(z.read(name))
    sp = settings.settings_path()
    if sp is not None and sp.is_file():
        s = settings.load()
        settings.save({"out_dir": "", "ui_html": "", "chrome": "",
                       "firebase": dict(s["firebase"], web_dir=""),
                       "schedule": dict(s["schedule"], enabled=False)})
    return info
