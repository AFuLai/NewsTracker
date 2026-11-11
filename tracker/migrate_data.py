"""Move an install's data to another machine: one zip, either direction.

export: a consistent copy of the DB (SQLite backup API, safe while the
dashboard is open), endpoints.json and — on a standalone install —
settings.json. Works from the WSL install too, which is how the existing data
reaches a new Windows PC.

import, two modes:
  replace — the export becomes this install's data. The old DB is kept as
            articles.sqlite.bak-<stamp> (endpoints/settings likewise). The DB
            is written with the SQLite backup API, not a file rename, so it
            works while the console still has the DB open (Windows refuses to
            rename an open file). settings.json paths that point at the old
            machine are cleared (out_dir, ui_html, chrome, firebase.web_dir)
            and the schedule is switched off, so the new PC falls back to its
            own defaults instead of a folder that does not exist there.
  merge   — this install keeps its own data and settings. Articles it lacks
            (by url_hash) are added; articles it has get empty fields filled
            from the export (a summary or translation done elsewhere), and a
            row still pending here takes the export's status. CRA scores and
            topics and unknown source profiles come along; run history and
            fetch errors stay local.
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
MODES = ("replace", "merge")


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


def _backup_into(src: Path, dst: Path) -> None:
    a = sqlite3.connect(f"file:{src}?mode=ro", uri=True)
    try:
        b = sqlite3.connect(dst, timeout=60)
        try:
            a.backup(b)
        finally:
            b.close()
    finally:
        a.close()


#: Fields a merge may fill on an article this install already has.
_FILL = ("title", "date", "category", "summary", "tags", "raw_text", "summarized_at",
         "written_at", "content_hash", "title_en", "summary_en", "tags_en", "embedding")


def _cols(con: sqlite3.Connection, schema: str, table: str) -> list[str]:
    return [r[1] for r in con.execute(f"PRAGMA {schema}.table_info({table})")]


def merge_db(incoming: Path, db: Path) -> dict:
    """Fold `incoming` into `db` (module doc, merge). Returns counts."""
    from .dedup import Store
    Store(db)  # the local DB exists with the current schema from here on
    # uri=True: Windows' sqlite3 does not parse URIs in ATTACH by default (Linux does).
    con = sqlite3.connect(db, timeout=60, uri=True)
    try:
        con.execute("ATTACH DATABASE ? AS inc", (Path(incoming).resolve().as_uri() + "?mode=ro",))
        local = _cols(con, "main", "articles")
        shared = [c for c in _cols(con, "inc", "articles") if c in local and c != "id"]
        fill = [c for c in _FILL if c in shared]
        out: dict = {}
        with con:
            n0 = con.total_changes
            cl = ", ".join(shared)
            con.execute(f"INSERT INTO main.articles ({cl}) SELECT {cl} FROM inc.articles i "
                        "WHERE NOT EXISTS (SELECT 1 FROM main.articles m "
                        "WHERE m.url_hash = i.url_hash)")
            out["added"] = con.total_changes - n0

            def inc(c):
                return (f"(SELECT i.{c} FROM inc.articles i "
                        f"WHERE i.url_hash = main.articles.url_hash)")
            sets = [f"{c} = COALESCE(NULLIF(main.articles.{c}, ''), {inc(c)})" for c in fill]
            sets.append(f"status = CASE WHEN main.articles.status = 'pending' "
                        f"THEN {inc('status')} ELSE main.articles.status END")
            gaps = " OR ".join(
                f"((main.articles.{c} IS NULL OR main.articles.{c} = '') "
                f"AND i.{c} IS NOT NULL AND i.{c} <> '')" for c in fill)
            n0 = con.total_changes
            con.execute(f"UPDATE main.articles SET {', '.join(sets)} WHERE EXISTS ("
                        f"SELECT 1 FROM inc.articles i WHERE i.url_hash = main.articles.url_hash "
                        f"AND ({gaps} OR (main.articles.status = 'pending' "
                        f"AND i.status <> 'pending')))")
            out["updated"] = con.total_changes - n0

            tables = {r[0] for r in con.execute(
                "SELECT name FROM inc.sqlite_master WHERE type='table'")}
            if "cra_scores" in tables:
                # article ids differ between installs: remap through url_hash
                con.execute("INSERT OR IGNORE INTO main.cra_scores "
                            "(article_id, score, best_query, model_tag, scored_at, enforced) "
                            "SELECT m.id, s.score, s.best_query, s.model_tag, s.scored_at, "
                            "s.enforced FROM inc.cra_scores s "
                            "JOIN inc.articles ia ON ia.id = s.article_id "
                            "JOIN main.articles m ON m.url_hash = ia.url_hash")
            for t, key in (("cra_topic", "url"), ("source_profiles", "source_key")):
                if t not in tables:
                    continue
                lc = _cols(con, "main", t)
                cl = ", ".join(c for c in _cols(con, "inc", t) if c in lc and c != "id")
                con.execute(f"INSERT INTO main.{t} ({cl}) SELECT {cl} FROM inc.{t} i "
                            f"WHERE NOT EXISTS (SELECT 1 FROM main.{t} m WHERE m.{key} = i.{key})")
        out["articles"] = con.execute("SELECT COUNT(*) FROM main.articles").fetchone()[0]
        return out
    finally:
        con.close()


def import_(src: Path, *, force: bool = False, mode: str = "replace") -> dict:
    """Import an export zip. `force` only matters for replace over an existing DB."""
    if mode not in MODES:
        raise ValueError(f"unknown import mode {mode!r}")
    if settings.home() is None:
        raise RuntimeError("import-data is for a standalone install (NEWSTRACKER_HOME)")
    src = Path(src)
    db = Path(PATHS["db"])
    with zipfile.ZipFile(src) as z, tempfile.TemporaryDirectory() as td:
        names = set(z.namelist())
        if MANIFEST not in names or "db/articles.sqlite" not in names:
            raise ValueError(f"{src} is not a NewsTracker export")
        info = json.loads(z.read(MANIFEST))
        if mode == "replace" and db.exists() and not force:
            raise FileExistsError(f"{db} already exists (use --force to replace it)")
        incoming = Path(td) / "incoming.sqlite"
        incoming.write_bytes(z.read("db/articles.sqlite"))
        info["mode"] = mode
        if mode == "merge":
            info.update(merge_db(incoming, db))
            return info
        stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
        db.parent.mkdir(parents=True, exist_ok=True)
        if db.exists():
            _backup_into(db, db.with_name(db.name + f".bak-{stamp}"))
        _backup_into(incoming, db)
        for name, target in (("endpoints.json", Path(PATHS["endpoints"])),
                             ("settings.json", settings.settings_path())):
            if name not in names or target is None:
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            if target.exists():
                target.replace(target.with_name(target.name + f".bak-{stamp}"))
            target.write_bytes(z.read(name))
    sp = settings.settings_path()
    if sp is not None and sp.is_file():
        s = settings.load()
        settings.save({"out_dir": "", "ui_html": "", "chrome": "",
                       "firebase": dict(s["firebase"], web_dir=""),
                       "schedule": dict(s["schedule"], enabled=False)})
    return info
