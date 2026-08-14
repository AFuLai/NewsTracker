"""SQLite-backed article store with URL/title dedup."""
from __future__ import annotations

import hashlib
import re
import sqlite3
import struct
from datetime import datetime, timedelta
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
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_source   ON articles(source);

CREATE TABLE IF NOT EXISTS fetch_errors (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  source     TEXT NOT NULL,
  url        TEXT,
  error      TEXT,
  occurred_at TEXT NOT NULL
);

-- v2: per-source runtime profile (cache, not config — searchinfo stays source of truth)
CREATE TABLE IF NOT EXISTS source_profiles (
  source_key      TEXT PRIMARY KEY,            -- domain, or "domain#/path" for extra entry points
  domain          TEXT NOT NULL,
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

-- v3 (WP5): rerank scores for the EU CRA gate, written in shadow mode too.
-- Its own table rather than a column on `articles`: a score belongs to a
-- (model, query-set) pair rather than to the article, so re-calibrating means
-- writing rows under a new model_tag instead of overwriting the history that
-- justified the threshold currently in force.
CREATE TABLE IF NOT EXISTS cra_scores (
  article_id  INTEGER NOT NULL,
  score       REAL    NOT NULL,             -- max over the query set (raw logit)
  best_query  TEXT,                         -- which query carried the max
  model_tag   TEXT    NOT NULL,             -- model build + query-set version
  scored_at   TEXT    NOT NULL,
  enforced    INTEGER NOT NULL DEFAULT 0,   -- 0 = shadow only, 1 = this score gated
  PRIMARY KEY (article_id, model_tag)
);
CREATE INDEX IF NOT EXISTS idx_cra_scores_score ON cra_scores(score);
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


def _ensure_i18n_columns(conn) -> None:
    """Idempotent ALTER for the English mirror of each article (v2.4).

    title_en/summary_en/tags_en hold the ollama-translated English version of
    the zh summary. NULL/empty means 'not translated yet' → the UI falls back
    to the Chinese fields, so this is fully back-compatible."""
    cols = [r[1] for r in conn.execute("PRAGMA table_info(articles)").fetchall()]
    for col in ("title_en", "summary_en", "tags_en"):
        if col not in cols:
            conn.execute(f"ALTER TABLE articles ADD COLUMN {col} TEXT")
    conn.commit()


def _ensure_embedding_column(conn) -> None:
    """Idempotent ALTER for the bge-m3 sentence embedding (v3, WP6).

    NULL means 'not embedded', which is the normal state for every row written
    before WP6: the plan is explicit that old rows are not backfilled, so every
    consumer has to treat a missing vector as 'no semantic opinion' rather than
    as a zero vector (which would be maximally dissimilar to everything and
    would quietly suppress merges).

    Stored as a raw float32 BLOB rather than JSON: 1024 floats is 4 KB packed
    against ~20 KB of text, and this column is written for every new article.
    """
    cols = [r[1] for r in conn.execute("PRAGMA table_info(articles)").fetchall()]
    if "embedding" not in cols:
        conn.execute("ALTER TABLE articles ADD COLUMN embedding BLOB")
        conn.commit()


def _ensure_profile_dormancy_columns(conn) -> None:
    """Idempotent ALTER for dormancy tracking (v2.5).

    `consecutive_failures` only increments on an EXCEPTION during fetch, so a
    source that succeeds every run but returns zero items (dead source, no
    new content) never trips it and is never auto-reprobed. `consecutive_empty`
    tracks that case; `last_attempt_utc` lets us re-check a dormant source at
    most once a week instead of skipping it forever."""
    cols = [r[1] for r in conn.execute("PRAGMA table_info(source_profiles)").fetchall()]
    if "consecutive_empty" not in cols:
        conn.execute(
            "ALTER TABLE source_profiles ADD COLUMN consecutive_empty INTEGER NOT NULL DEFAULT 0")
    if "last_attempt_utc" not in cols:
        conn.execute("ALTER TABLE source_profiles ADD COLUMN last_attempt_utc TEXT")
    conn.commit()


def profile_key(domain: str, entry: str | None = None) -> str:
    """Stable identity for a source profile.

    One site can expose several entry points that need different fetchers:
    digital-strategy.ec.europa.eu publishes CRA guidance under /en/library
    while its only RSS feed is a 10-slot, site-wide firehose that the guidance
    never even reached. Keying purely on the domain allowed exactly one of
    those, so the second entry point could not be configured at all.

    For the ordinary single-entry source the key IS the bare domain, so every
    existing profile keeps its identity across the migration and every
    domain-keyed call site keeps working untouched.

    `entry` is the explicit opt-in to a SECONDARY entry point, and is
    deliberately not derived from `search_path`: a primary profile may perfectly
    well have a search_path of its own (enisa.europa.eu → /news,
    source.android.com → /docs/security/bulletin). Deriving the suffix from
    search_path re-keyed those four existing profiles and silently forked each
    into a duplicate with zeroed counters.
    """
    suffix = (entry or "").strip()
    return f"{domain}#{suffix}" if suffix else domain


def _ensure_profile_source_key(conn) -> None:
    """Idempotent rebuild moving the PK from `domain` to `source_key` (v2.24).

    SQLite cannot alter a primary key in place, so the table is rebuilt. Legacy
    rows get source_key = domain — identical to what `profile_key()` returns for
    a source with no search_path — which is what keeps the migration a no-op for
    everything that already exists.
    """
    cols = [r[1] for r in conn.execute("PRAGMA table_info(source_profiles)").fetchall()]
    if not cols or "source_key" in cols:
        return
    carried = [c for c in cols if c != "domain"]
    conn.executescript("""
        CREATE TABLE source_profiles_new (
          source_key      TEXT PRIMARY KEY,
          domain          TEXT NOT NULL,
          name            TEXT,
          method          TEXT NOT NULL,
          feed_url        TEXT,
          search_path     TEXT,
          api_endpoint    TEXT,
          accept_all      INTEGER NOT NULL DEFAULT 0,
          trackers        TEXT NOT NULL,
          etag            TEXT,
          last_modified   TEXT,
          last_seen_utc   TEXT,
          consecutive_failures INTEGER NOT NULL DEFAULT 0,
          total_runs      INTEGER NOT NULL DEFAULT 0,
          total_yield     INTEGER NOT NULL DEFAULT 0,
          probed_at       TEXT,
          probe_note      TEXT,
          consecutive_empty INTEGER NOT NULL DEFAULT 0,
          last_attempt_utc TEXT
        );
    """)
    conn.execute(
        f"INSERT INTO source_profiles_new (source_key, domain, {', '.join(carried)}) "
        f"SELECT domain, domain, {', '.join(carried)} FROM source_profiles")
    conn.executescript("""
        DROP TABLE source_profiles;
        ALTER TABLE source_profiles_new RENAME TO source_profiles;
        CREATE INDEX IF NOT EXISTS idx_profiles_domain ON source_profiles(domain);
    """)
    conn.commit()


def _reconcile_stale_runs(conn) -> None:
    """Mark crashed/aborted runs as failed.

    A row in `runs` with ok IS NULL means the process died before calling
    finish_run(). If it started more than 24h ago it is definitely not still
    running, so flip it to ok=0 rather than leaving it NULL forever. Rows
    younger than 24h are left alone — they may be genuinely in-flight."""
    cutoff = (datetime.utcnow() - timedelta(hours=24)).isoformat()
    conn.execute("UPDATE runs SET ok=0 WHERE ok IS NULL AND started_at < ?", (cutoff,))
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
        _ensure_i18n_columns(self.conn)
        _ensure_embedding_column(self.conn)
        _ensure_profile_dormancy_columns(self.conn)
        _ensure_profile_source_key(self.conn)
        self.conn.commit()
        _reconcile_stale_runs(self.conn)

    # ── WP6: sentence embeddings ─────────────────────────────────────────
    def store_embeddings(self, vectors: dict[int, list[float]]) -> int:
        """Persist bge-m3 vectors as float32 BLOBs. New rows only — WP6 does
        not backfill, so absence is normal and means 'no semantic opinion'."""
        if not vectors:
            return 0
        self.conn.executemany(
            "UPDATE articles SET embedding = ? WHERE id = ?",
            [(struct.pack(f"<{len(v)}f", *v), aid) for aid, v in vectors.items()])
        self.conn.commit()
        return len(vectors)

    def load_embeddings(self, ids: list[int]) -> dict[int, list[float]]:
        """Vectors for the ids that have one. Ids without an embedding are
        simply absent from the result rather than mapped to a zero vector: a
        zero vector reads as 'dissimilar to everything', which would silently
        suppress the merges this feature exists to make."""
        if not ids:
            return {}
        out: dict[int, list[float]] = {}
        for chunk in (ids[i:i + 500] for i in range(0, len(ids), 500)):
            q = ",".join("?" * len(chunk))
            for aid, blob in self.conn.execute(
                    f"SELECT id, embedding FROM articles "
                    f"WHERE id IN ({q}) AND embedding IS NOT NULL", chunk):
                if blob:
                    out[aid] = list(struct.unpack(f"<{len(blob)//4}f", blob))
        return out

    def ids_needing_embedding(self, ids: list[int]) -> list[int]:
        if not ids:
            return []
        got = set()
        for chunk in (ids[i:i + 500] for i in range(0, len(ids), 500)):
            q = ",".join("?" * len(chunk))
            got.update(r[0] for r in self.conn.execute(
                f"SELECT id FROM articles WHERE id IN ({q}) "
                f"AND embedding IS NOT NULL", chunk))
        return [i for i in ids if i not in got]

    # ── WP5: EU CRA rerank scores ────────────────────────────────────────
    def record_cra_scores(self, scores: list[tuple[int, float, str]], *,
                          model_tag: str, enforced: bool) -> int:
        """Persist shadow/enforced rerank scores. scores: [(article_id, score,
        best_query)]. Upsert on (article_id, model_tag) so a re-run replaces
        its own numbers but never another model_tag's."""
        if not scores:
            return 0
        now = datetime.utcnow().isoformat()
        self.conn.executemany(
            "INSERT INTO cra_scores (article_id, score, best_query, model_tag, "
            "scored_at, enforced) VALUES (?, ?, ?, ?, ?, ?) "
            "ON CONFLICT(article_id, model_tag) DO UPDATE SET "
            "score=excluded.score, best_query=excluded.best_query, "
            "scored_at=excluded.scored_at, enforced=excluded.enforced",
            [(aid, sc, bq, model_tag, now, int(enforced))
             for aid, sc, bq in scores])
        self.conn.commit()
        return len(scores)

    def cra_score_stats(self, model_tag: str | None = None) -> dict:
        """Counts and quantiles for calibration; the command that re-derives
        the numbers lives in ops/llama-server/MANIFEST.md."""
        q = "SELECT score FROM cra_scores"
        args: tuple = ()
        if model_tag:
            q += " WHERE model_tag = ?"
            args = (model_tag,)
        v = sorted(r[0] for r in self.conn.execute(q + " ORDER BY score", args))
        if not v:
            return {"n": 0}
        def p(f):
            return v[min(int(len(v) * f), len(v) - 1)]
        return {"n": len(v), "min": v[0], "p25": p(.25), "median": p(.5),
                "p75": p(.75), "max": v[-1]}

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

    # ── i18n / English mirror (v2.4) ────────────────────────────────────────

    def update_translation(self, article_id: int, *, title_en: str,
                           summary_en: str, tags_en) -> None:
        tags = ",".join(tags_en) if isinstance(tags_en, (list, tuple)) else (tags_en or "")
        self.conn.execute(
            "UPDATE articles SET title_en=?, summary_en=?, tags_en=? WHERE id=?",
            (title_en or "", summary_en or "", tags, article_id))
        self.conn.commit()

    def list_untranslated(self, limit: int = 100_000, *,
                          statuses: tuple[str, ...] = ("ready", "written")) -> list[sqlite3.Row]:
        """Summarized articles that still lack an English summary."""
        qs = ",".join("?" * len(statuses))
        return list(self.conn.execute(
            f"SELECT * FROM articles WHERE status IN ({qs}) "
            "AND summary IS NOT NULL AND summary != '' "
            "AND (summary_en IS NULL OR summary_en = '') "
            "ORDER BY date DESC, id LIMIT ?",
            (*statuses, limit)))

    def list_summarized(self, limit: int = 100_000, *,
                        statuses: tuple[str, ...] = ("ready", "written")) -> list[sqlite3.Row]:
        """Every article that has a summary, translated or not. Used by the
        language audit, which has to inspect the text itself (SQL cannot tell
        Korean from Chinese) before deciding what needs re-translating."""
        qs = ",".join("?" * len(statuses))
        return list(self.conn.execute(
            f"SELECT * FROM articles WHERE status IN ({qs}) "
            "AND summary IS NOT NULL AND summary != '' "
            "ORDER BY date DESC, id LIMIT ?",
            (*statuses, limit)))

    def update_localized(self, article_id: int, *, title: str, summary: str,
                         tags: list[str] | None = None) -> None:
        """Replace the Chinese title/summary/tags in place. Unlike
        update_summary this touches neither `status` nor `summarized_at`: it
        repairs the text of an article that is already published, so a
        re-translation must not push a `written` row back through the pipeline."""
        sets = ["title=?", "summary=?"]
        params: list = [title or "", summary or ""]
        if tags is not None:
            sets.append("tags=?")
            params.append(",".join(tags))
        params.append(article_id)
        self.conn.execute(f"UPDATE articles SET {', '.join(sets)} WHERE id=?", params)
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

    def get_profile(self, key: str) -> sqlite3.Row | None:
        """Look up by source_key. For a single-entry source that is the bare
        domain, so existing domain-keyed callers need no change."""
        return self.conn.execute(
            "SELECT * FROM source_profiles WHERE source_key=?", (key,)).fetchone()

    def list_profiles_for_domain(self, domain: str) -> list[sqlite3.Row]:
        """Every entry point configured for one site (v2.24)."""
        return list(self.conn.execute(
            "SELECT * FROM source_profiles WHERE domain=? ORDER BY source_key", (domain,)))

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
        sql += " ORDER BY source_key"
        return list(self.conn.execute(sql, params))

    def upsert_profile(self, *, domain: str, name: str, method: str,
                       trackers: str, feed_url: str | None = None,
                       search_path: str | None = None, api_endpoint: str | None = None,
                       accept_all: bool = False, entry: str | None = None,
                       probe_note: str | None = None, probed_at: str | None = None) -> None:
        """Insert or update a source profile. Merges trackers (union) and
        preserves HTTP cache / watermark / failure counters on update.

        Identity is `profile_key(domain, entry)`. Without `entry` this is the
        site's primary profile — including when it carries a search_path of its
        own. Pass `entry` only to create/update an ADDITIONAL entry point.
        """
        key = profile_key(domain, entry)
        existing = self.get_profile(key)
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
                "WHERE source_key=?",
                (name, method, feed_url, search_path, api_endpoint, int(accept_all),
                 ",".join(merged), probe_note, probed_at, key),
            )
        else:
            self.conn.execute(
                "INSERT INTO source_profiles "
                "(source_key, domain, name, method, feed_url, search_path, api_endpoint, "
                " accept_all, trackers, probe_note, probed_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (key, domain, name, method, feed_url, search_path, api_endpoint,
                 int(accept_all), trackers, probe_note, probed_at),
            )
        self.conn.commit()

    def update_profile_http(self, key: str, *, etag: str | None = None,
                            last_modified: str | None = None,
                            last_seen_utc: str | None = None) -> None:
        self.conn.execute(
            "UPDATE source_profiles SET "
            "etag=COALESCE(?, etag), last_modified=COALESCE(?, last_modified), "
            "last_seen_utc=COALESCE(?, last_seen_utc) WHERE source_key=?",
            (etag, last_modified, last_seen_utc, key),
        )
        self.conn.commit()

    def record_profile_yield(self, key: str, new_count: int, *,
                             failed: bool = False,
                             items_seen: int | None = None) -> None:
        """After a fetch: bump total_runs/total_yield, reset or increment failures.

        `failed` only happens on an exception during fetch (consecutive_failures).

        `consecutive_empty` tracks a *different* rot: a source that keeps
        answering 200 OK while returning nothing (moved listing, changed
        markup). It never raises, so it would otherwise never trip the
        failure-based auto-reprobe.

        `items_seen` is the number of RAW candidates the fetcher returned,
        before dedup. Prefer it over `new_count` for the empty signal:
        `new_count` is post-dedup, so a perfectly healthy source that returns
        30 already-known articles in a narrow window scores 0 and would be
        wrongly marked empty. Only "the fetcher parsed nothing at all" means
        the source is actually broken. Falls back to `new_count` when the
        caller has no raw count (keeps older call sites working).

        last_attempt_utc is stamped on every call so dormancy checks know how
        fresh this is."""
        now = datetime.utcnow().isoformat()
        looked_empty = (items_seen if items_seen is not None else new_count) == 0
        if failed:
            self.conn.execute(
                "UPDATE source_profiles SET total_runs=total_runs+1, "
                "consecutive_failures=consecutive_failures+1, last_attempt_utc=? "
                "WHERE source_key=?", (now, key))
        elif not looked_empty:
            self.conn.execute(
                "UPDATE source_profiles SET total_runs=total_runs+1, "
                "total_yield=total_yield+?, consecutive_failures=0, consecutive_empty=0, "
                "last_attempt_utc=? WHERE source_key=?",
                (max(new_count, 0), now, key))
        else:
            self.conn.execute(
                "UPDATE source_profiles SET total_runs=total_runs+1, "
                "consecutive_failures=0, consecutive_empty=consecutive_empty+1, "
                "last_attempt_utc=? WHERE source_key=?",
                (now, key))
        self.conn.commit()

    def mark_profile_alive(self, key: str) -> None:
        """HTTP 304 Not Modified: the source answered correctly and told us
        nothing changed. That is the *healthiest* possible outcome (conditional
        GET working as designed), so it must reset the empty counter rather
        than increment it — otherwise the best-behaved sources go dormant
        fastest."""
        self.conn.execute(
            "UPDATE source_profiles SET total_runs=total_runs+1, "
            "consecutive_failures=0, consecutive_empty=0, last_attempt_utc=? "
            "WHERE source_key=?", (datetime.utcnow().isoformat(), key))
        self.conn.commit()

    def is_dormant(self, profile_row, now: datetime | None = None) -> bool:
        """True if a source has been empty for 8+ consecutive runs AND was
        last attempted within the past 7 days — i.e. we already know it's
        dead and confirmed that recently, so skip it this run. Once the last
        attempt ages past 7 days, this returns False again so the fetch phase
        picks it back up (at most once a week) rather than abandoning it
        forever."""
        def _get(key, default=None):
            try:
                return profile_row[key]
            except (IndexError, KeyError, TypeError):
                return default

        consecutive_empty = _get("consecutive_empty", 0) or 0
        if consecutive_empty < 8:
            return False
        last_attempt = _get("last_attempt_utc")
        if not last_attempt:
            return False
        try:
            last_dt = datetime.fromisoformat(last_attempt)
        except (TypeError, ValueError):
            return False
        now = now or datetime.utcnow()
        return (now - last_dt) < timedelta(days=7)

    def list_reprobe_candidates(self, *, failure_threshold: int = 3,
                                empty_threshold: int = 8) -> list[sqlite3.Row]:
        """Profiles due for auto-reprobe: either the existing
        consecutive_failures threshold (exception-driven) OR a high
        consecutive_empty count (successful but zero-yield for many runs —
        a dead source that never trips the failure counter). Exposed here
        rather than queried inline in probe.reprobe_failing() so both
        conditions live in one place; probe.py still needs a one-line change
        to call this instead of iterating list_profiles() itself."""
        return list(self.conn.execute(
            "SELECT * FROM source_profiles WHERE consecutive_failures >= ? "
            "OR consecutive_empty >= ? ORDER BY source_key",
            (failure_threshold, empty_threshold)))

    def set_profile_method(self, key: str, method: str, *,
                           feed_url: str | None = None, search_path: str | None = None,
                           probe_note: str | None = None, probed_at: str | None = None) -> None:
        """Used by auto-probe to record a newly detected fetch method."""
        self.conn.execute(
            "UPDATE source_profiles SET method=?, "
            "feed_url=COALESCE(?, feed_url), search_path=COALESCE(?, search_path), "
            "probe_note=?, probed_at=?, consecutive_failures=0 WHERE source_key=?",
            (method, feed_url, search_path, probe_note, probed_at, key),
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
