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

-- v2: per-source runtime profile (cache, not config — searchinfo stays source of truth)
CREATE TABLE IF NOT EXISTS source_profiles (
  domain          TEXT PRIMARY KEY,
  name            TEXT,
  method          TEXT NOT NULL,             -- fetcher registry key: FEED/LISTING/SEARCH/API/ARCHIVE
  feed_url        TEXT,
  search_path     TEXT,
  api_endpoint    TEXT,
  accept_all      INTEGER NOT NULL DEFAULT 0,
  trackers        TEXT NOT NULL,             -- comma-separated trackers that watch this source
  etag            TEXT,
  last_modified   TEXT,
  last_seen_utc   TEXT,                       -- watermark: newest article time seen last run
  consecutive_failures INTEGER NOT NULL DEFAULT 0,
  total_runs      INTEGER NOT NULL DEFAULT 0,
  total_yield     INTEGER NOT NULL DEFAULT 0, -- cumulative new candidates inserted
  probed_at       TEXT,
  probe_note      TEXT
);

-- v2: pipeline run journal (one row per `tracker pipeline` invocation)
CREATE TABLE IF NOT EXISTS runs (
  run_id      INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at  TEXT NOT NULL,
  finished_at TEXT,
  args        TEXT,                          -- JSON: {since, until, trackers}
  stats       TEXT,                          -- JSON: per-phase counts
  errors      TEXT,                          -- JSON array of error strings
  ok          INTEGER                        -- 1 success / 0 failure / NULL in-progress
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


def _ensure_v2_columns(conn) -> None:
    """Idempotent ALTER for v2 (content_hash on articles for republish detection)."""
    cols = [r[1] for r in conn.execute("PRAGMA table_info(articles)").fetchall()]
    if "content_hash" not in cols:
        conn.execute("ALTER TABLE articles ADD COLUMN content_hash TEXT")
        conn.commit()

_TRACKING_PARAMS = re.compile(r"^(utm_|fbclid|gclid|mc_eid|mc_cid|_hsenc|_hsmi)", re.I)


def normalize_url(url: str) -> str:
    p = urlparse(url)
    q = [(k, v) for k, v in parse_qsl(p.query, keep_blank_values=True) if not _TRACKING_PARAMS.match(k)]
    return urlunparse((p.scheme.lower(), p.netloc.lower().removeprefix("www."),
                       p.path.rstrip("/") or "/", "", urlencode(q), ""))


def url_hash(url: str) -> str:
    return hashlib.sha1(normalize_url(url).encode("utf-8")).hexdigest()


def content_hash(text: str) -> str:
    """Hash of article body/title for republish (edited-after-publish) detection."""
    return hashlib.sha1((text or "").encode("utf-8")).hexdigest()


class Store:
    def __init__(self, db_path: Path):
        db_path.parent.mkdir(parents=True, exist_ok=True)
        self.conn = sqlite3.connect(db_path)
        self.conn.row_factory = sqlite3.Row
        self.conn.executescript(SCHEMA)
        _ensure_trackers_column(self.conn)
        _ensure_v2_columns(self.conn)
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

    def remove_tracker(self, article_id: int, tracker: str) -> bool:
        """Remove tracker from an article's trackers list.
        Refuses to leave the list empty — returns False if it would."""
        row = self.conn.execute(
            "SELECT trackers FROM articles WHERE id=?", (article_id,)).fetchone()
        if not row:
            return False
        current = [t for t in (row["trackers"] or "").split(",") if t]
        if tracker not in current:
            return False
        if len(current) == 1:
            return False  # would orphan
        current.remove(tracker)
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

    # ── Batch dedup (v2: replace per-URL SELECT-then-INSERT) ────────────────

    def all_url_hashes(self) -> set[str]:
        """Load every known url_hash once for in-memory dedup during a run."""
        return {r[0] for r in self.conn.execute("SELECT url_hash FROM articles")}

    def insert_candidates_batch(self, candidates: list[dict]) -> int:
        """Insert many candidates with a single executemany INSERT OR IGNORE.

        Each candidate dict: {url, source, title?, date?, raw_text?, tracker?,
        content_hash?}. Caller is responsible for pre-filtering against
        all_url_hashes() to avoid wasted rows, but INSERT OR IGNORE makes this
        safe even if duplicates slip through (UNIQUE url_hash constraint).
        Returns the number of rows actually inserted.
        """
        if not candidates:
            return 0
        now = datetime.utcnow().isoformat()
        rows = []
        for c in candidates:
            url = c["url"]
            rows.append((
                url_hash(url), normalize_url(url), c["source"],
                c.get("title"), c.get("date"), c.get("raw_text"),
                c.get("tracker", "security"), c.get("content_hash"), now,
            ))
        before = self.conn.total_changes
        self.conn.executemany(
            "INSERT OR IGNORE INTO articles "
            "(url_hash, url, source, title, date, raw_text, trackers, content_hash, fetched_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            rows,
        )
        self.conn.commit()
        return self.conn.total_changes - before

    # ── source_profiles (v2) ────────────────────────────────────────────────

    def get_profile(self, domain: str) -> sqlite3.Row | None:
        return self.conn.execute(
            "SELECT * FROM source_profiles WHERE domain=?", (domain,)).fetchone()

    def list_profiles(self, *, tracker: str | None = None,
                      method: str | None = None) -> list[sqlite3.Row]:
        sql = "SELECT * FROM source_profiles"
        clauses, params = [], []
        if tracker:
            clauses.append("(','||trackers||',') LIKE '%,'||?||',%'")
            params.append(tracker)
        if method:
            clauses.append("method=?")
            params.append(method)
        if clauses:
            sql += " WHERE " + " AND ".join(clauses)
        sql += " ORDER BY domain"
        return list(self.conn.execute(sql, params))

    def upsert_profile(self, *, domain: str, name: str, method: str,
                       trackers: str, feed_url: str | None = None,
                       search_path: str | None = None, api_endpoint: str | None = None,
                       accept_all: bool = False,
                       probe_note: str | None = None, probed_at: str | None = None) -> None:
        """Insert or update a source profile. Merges trackers (union) and
        preserves HTTP cache / watermark / failure counters on update."""
        existing = self.get_profile(domain)
        if existing:
            merged = sorted(set(
                [t for t in (existing["trackers"] or "").split(",") if t] +
                [t for t in trackers.split(",") if t]))
            # COALESCE keeps existing feed_url/search_path/api_endpoint when the
            # caller passes None (e.g. a union-only upsert that only adds a tracker).
            self.conn.execute(
                "UPDATE source_profiles SET name=?, method=?, "
                "feed_url=COALESCE(?, feed_url), search_path=COALESCE(?, search_path), "
                "api_endpoint=COALESCE(?, api_endpoint), accept_all=?, trackers=?, "
                "probe_note=COALESCE(?, probe_note), probed_at=COALESCE(?, probed_at) "
                "WHERE domain=?",
                (name, method, feed_url, search_path, api_endpoint, int(accept_all),
                 ",".join(merged), probe_note, probed_at, domain),
            )
        else:
            self.conn.execute(
                "INSERT INTO source_profiles "
                "(domain, name, method, feed_url, search_path, api_endpoint, accept_all, "
                " trackers, probe_note, probed_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (domain, name, method, feed_url, search_path, api_endpoint, int(accept_all),
                 trackers, probe_note, probed_at),
            )
        self.conn.commit()

    def update_profile_http(self, domain: str, *, etag: str | None = None,
                            last_modified: str | None = None,
                            last_seen_utc: str | None = None) -> None:
        self.conn.execute(
            "UPDATE source_profiles SET "
            "etag=COALESCE(?, etag), last_modified=COALESCE(?, last_modified), "
            "last_seen_utc=COALESCE(?, last_seen_utc) WHERE domain=?",
            (etag, last_modified, last_seen_utc, domain),
        )
        self.conn.commit()

    def record_profile_yield(self, domain: str, new_count: int, *, failed: bool = False) -> None:
        """After a fetch: bump total_runs/total_yield, reset or increment failures."""
        if failed:
            self.conn.execute(
                "UPDATE source_profiles SET total_runs=total_runs+1, "
                "consecutive_failures=consecutive_failures+1 WHERE domain=?", (domain,))
        else:
            self.conn.execute(
                "UPDATE source_profiles SET total_runs=total_runs+1, "
                "total_yield=total_yield+?, consecutive_failures=0 WHERE domain=?",
                (new_count, domain))
        self.conn.commit()

    def set_profile_method(self, domain: str, method: str, *,
                           feed_url: str | None = None, search_path: str | None = None,
                           probe_note: str | None = None, probed_at: str | None = None) -> None:
        """Used by auto-probe to record a newly detected fetch method."""
        self.conn.execute(
            "UPDATE source_profiles SET method=?, "
            "feed_url=COALESCE(?, feed_url), search_path=COALESCE(?, search_path), "
            "probe_note=?, probed_at=?, consecutive_failures=0 WHERE domain=?",
            (method, feed_url, search_path, probe_note, probed_at, domain),
        )
        self.conn.commit()

    # ── runs journal (v2) ───────────────────────────────────────────────────

    def start_run(self, args_json: str) -> int:
        cur = self.conn.execute(
            "INSERT INTO runs (started_at, args) VALUES (?, ?)",
            (datetime.utcnow().isoformat(), args_json))
        self.conn.commit()
        return cur.lastrowid

    def finish_run(self, run_id: int, *, stats_json: str, errors_json: str, ok: bool) -> None:
        self.conn.execute(
            "UPDATE runs SET finished_at=?, stats=?, errors=?, ok=? WHERE run_id=?",
            (datetime.utcnow().isoformat(), stats_json, errors_json, int(ok), run_id))
        self.conn.commit()

    def last_run(self) -> sqlite3.Row | None:
        return self.conn.execute(
            "SELECT * FROM runs ORDER BY run_id DESC LIMIT 1").fetchone()
