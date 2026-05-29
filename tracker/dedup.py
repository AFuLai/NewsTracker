"""SQLite-backed article store with URL/title dedup."""
from __future__ import annotations

import hashlib
import re
import sqlite3
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse, urlunparse, parse_qsl, urlencode

SCHEMA = """
CREATE TABLE IF NOT EXISTS articles (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  url_hash     TEXT UNIQUE NOT NULL,
  url          TEXT NOT NULL,
  source       TEXT NOT NULL,
  title        TEXT,
  date         TEXT,
  category     TEXT,
  summary      TEXT,
  tags         TEXT,
  status       TEXT NOT NULL DEFAULT 'pending',
  raw_text     TEXT,
  trackers     TEXT NOT NULL DEFAULT 'security',  -- comma-separated, e.g. 'security' or 'security,eu_cra'
  fetched_at   TEXT NOT NULL,
  summarized_at TEXT,
  written_at   TEXT
);
CREATE INDEX IF NOT EXISTS idx_articles_date   ON articles(date);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);

CREATE TABLE IF NOT EXISTS fetch_errors (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  source     TEXT NOT NULL,
  url        TEXT,
  error      TEXT,
  occurred_at TEXT NOT NULL
);
"""


def _ensure_trackers_column(conn) -> None:
    """Idempotent ALTER for legacy DBs created before v0.5."""
    cols = [r[1] for r in conn.execute("PRAGMA table_info(articles)").fetchall()]
    if "trackers" not in cols:
        conn.execute(
            "ALTER TABLE articles ADD COLUMN trackers TEXT NOT NULL DEFAULT 'security'")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_articles_trackers ON articles(trackers)")
        conn.commit()

_TRACKING_PARAMS = re.compile(r"^(utm_|fbclid|gclid|mc_eid|mc_cid|_hsenc|_hsmi)", re.I)


def normalize_url(url: str) -> str:
    p = urlparse(url)
    q = [(k, v) for k, v in parse_qsl(p.query, keep_blank_values=True) if not _TRACKING_PARAMS.match(k)]
    return urlunparse((p.scheme.lower(), p.netloc.lower().removeprefix("www."),
                       p.path.rstrip("/") or "/", "", urlencode(q), ""))


def url_hash(url: str) -> str:
    return hashlib.sha1(normalize_url(url).encode("utf-8")).hexdigest()


class Store:
    def __init__(self, db_path: Path):
        db_path.parent.mkdir(parents=True, exist_ok=True)
        self.conn = sqlite3.connect(db_path)
        self.conn.row_factory = sqlite3.Row
        self.conn.executescript(SCHEMA)
        _ensure_trackers_column(self.conn)
        self.conn.commit()

    def upsert_candidate(self, *, url: str, source: str, title: str | None = None,
                         date: str | None = None, raw_text: str | None = None,
                         tracker: str = "security") -> bool:
        """Insert a new candidate; if URL already exists, leave trackers alone.

        Cross-tracker membership is determined later by `tracker cross-scan`
        (using cross.belongs_to() — domain/tags/title evidence). Merely seeing
        the same URL appear in two trackers' feed lists is not enough to claim
        it belongs to both topics.
        """
        h = url_hash(url)
        cur = self.conn.execute("SELECT 1 FROM articles WHERE url_hash = ?", (h,))
        if cur.fetchone():
            return False
        self.conn.execute(
            "INSERT INTO articles (url_hash, url, source, title, date, raw_text, trackers, fetched_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (h, normalize_url(url), source, title, date, raw_text, tracker,
             datetime.utcnow().isoformat()),
        )
        self.conn.commit()
        return True

    def list_pending(self, limit: int = 100, *, tracker: str | None = None) -> list[sqlite3.Row]:
        if tracker:
            return list(self.conn.execute(
                "SELECT * FROM articles WHERE status='pending' AND "
                "(','||trackers||',') LIKE '%,'||?||',%' ORDER BY id LIMIT ?",
                (tracker, limit)))
        return list(self.conn.execute(
            "SELECT * FROM articles WHERE status = 'pending' ORDER BY id LIMIT ?", (limit,)))

    def list_by_date(self, date: str, *, tracker: str | None = None) -> list[sqlite3.Row]:
        if tracker:
            return list(self.conn.execute(
                "SELECT * FROM articles WHERE date=? AND status='ready' AND "
                "(','||trackers||',') LIKE '%,'||?||',%' ORDER BY id",
                (date, tracker)))
        return list(self.conn.execute(
            "SELECT * FROM articles WHERE date = ? AND status = 'ready' ORDER BY id", (date,)))

    def add_tracker(self, article_id: int, tracker: str) -> bool:
        row = self.conn.execute(
            "SELECT trackers FROM articles WHERE id=?", (article_id,)).fetchone()
        if not row:
            return False
        current = [t for t in (row["trackers"] or "").split(",") if t]
        if tracker in current:
            return False
        current.append(tracker)
        self.conn.execute("UPDATE articles SET trackers=? WHERE id=?",
                          (",".join(sorted(set(current))), article_id))
        self.conn.commit()
        return True

    def list_ready_by_date(self, date: str) -> list[sqlite3.Row]:
        """All ready articles for a date, regardless of tracker. Used by cross-scan."""
        return list(self.conn.execute(
            "SELECT * FROM articles WHERE date=? AND status IN ('ready','written') ORDER BY id",
            (date,)))

    def list_writable_for_day(self, date: str) -> list[sqlite3.Row]:
        """All articles for a date that have been summarized (ready or written).
        Used by `tracker write` to compose the shared per-day data file —
        the file must contain every tracker's items so switching trackers in
        the UI doesn't lose data."""
        return list(self.conn.execute(
            "SELECT * FROM articles WHERE date=? AND status IN ('ready','written') "
            "ORDER BY id",
            (date,)))

    def update_summary(self, article_id: int, *, title: str, summary: str,
                       category: str, tags: list[str], date: str | None = None) -> None:
        if date:
            self.conn.execute(
                "UPDATE articles SET title=?, summary=?, category=?, tags=?, "
                "date=COALESCE(date, ?), status='ready', summarized_at=? WHERE id=?",
                (title, summary, category, ",".join(tags), date,
                 datetime.utcnow().isoformat(), article_id),
            )
        else:
            self.conn.execute(
                "UPDATE articles SET title=?, summary=?, category=?, tags=?, "
                "status='ready', summarized_at=? WHERE id=?",
                (title, summary, category, ",".join(tags),
                 datetime.utcnow().isoformat(), article_id),
            )
        self.conn.commit()

    def mark_written(self, article_ids: list[int]) -> None:
        self.conn.executemany(
            "UPDATE articles SET status='written', written_at=? WHERE id=?",
            [(datetime.utcnow().isoformat(), aid) for aid in article_ids],
        )
        self.conn.commit()

    def mark_status(self, article_id: int, status: str, *, date: str | None = None) -> None:
        if date:
            self.conn.execute(
                "UPDATE articles SET status=?, date=COALESCE(date, ?) WHERE id=?",
                (status, date, article_id),
            )
        else:
            self.conn.execute("UPDATE articles SET status=? WHERE id=?", (status, article_id))
        self.conn.commit()

    def log_error(self, source: str, error: str, url: str | None = None) -> None:
        self.conn.execute(
            "INSERT INTO fetch_errors (source, url, error, occurred_at) VALUES (?, ?, ?, ?)",
            (source, url, error, datetime.utcnow().isoformat()),
        )
        self.conn.commit()

    def stats(self) -> dict[str, int]:
        rows = self.conn.execute(
            "SELECT status, COUNT(*) AS n FROM articles GROUP BY status").fetchall()
        return {r["status"]: r["n"] for r in rows}
