"""snapshot(): a verified copy of the DB, pruned to the newest `keep`."""
import sqlite3

import tracker.snapshot as snap


def _db(path, n):
    c = sqlite3.connect(path)
    c.execute("CREATE TABLE articles (id INTEGER PRIMARY KEY, url TEXT)")
    c.executemany("INSERT INTO articles (url) VALUES (?)", [(f"u{i}",) for i in range(n)])
    c.commit()
    c.close()


def test_snapshot_copies_every_row(tmp_path):
    db = tmp_path / "a.sqlite"
    _db(db, 5)
    out = snap.snapshot(db, dest=tmp_path / "s")
    got = sqlite3.connect(out).execute("SELECT COUNT(*) FROM articles").fetchone()[0]
    assert got == 5


def test_snapshot_keeps_only_the_newest(tmp_path):
    db = tmp_path / "a.sqlite"
    _db(db, 1)
    dest = tmp_path / "s"
    dest.mkdir()
    for i in range(4):
        (dest / f"articles-2026010{i}-000000.sqlite").write_bytes(b"")
    snap.snapshot(db, dest=dest, keep=2)
    left = sorted(p.name for p in dest.glob("articles-*.sqlite"))
    assert len(left) == 2 and left[0] == "articles-20260103-000000.sqlite"
