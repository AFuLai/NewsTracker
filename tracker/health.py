"""Source health reporting (WP: `tracker sources`).

Pure data-gathering: every function here takes a `Store` (or a db path) and
returns plain dicts/lists — no printing, no rich, no typer. `cli.py` is the
thin presentation shell on top of this.

Correlation note: `source_profiles.domain` is a machine host (e.g.
"example.com") while `articles.source` is a human display name (e.g.
"Example News"). The intended join key is `source_profiles.name`, which is
meant to equal the display name used when articles are inserted. The join is
therefore a best-effort name match, not a guaranteed FK — this module never
silently drops a row that fails to correlate on either side:

- a profile with no matching articles/errors is still returned, with zero
  counts for the article/error fields.
- an `articles.source` (or `fetch_errors.source`) value that doesn't match
  any profile's `name` is still returned as its own row, with
  ``unmatched: True`` and null domain/method/trackers fields.
"""
from __future__ import annotations

from pathlib import Path

from .dedup import Store


def _tracker_clause(tracker: str | None) -> tuple[str, tuple]:
    """SQL fragment (+ params) to filter `articles` rows by tracker membership,
    matching the `(','||trackers||',') LIKE '%,'||?||',%'` pattern used
    elsewhere in dedup.Store. Empty fragment (no filter) when tracker is None."""
    if not tracker:
        return "", ()
    return " AND (','||trackers||',') LIKE '%,'||?||',%'", (tracker,)


def _article_stats_by_source(store: Store, tracker: str | None) -> dict[str, dict]:
    clause, params = _tracker_clause(tracker)
    rows = store.conn.execute(
        "SELECT source, "
        " SUM(CASE WHEN status='written' THEN 1 ELSE 0 END) AS written, "
        " SUM(CASE WHEN status='gated_out' THEN 1 ELSE 0 END) AS gated_out, "
        " SUM(CASE WHEN status='skipped_window' THEN 1 ELSE 0 END) AS skipped_window, "
        " SUM(CASE WHEN status='review_failed' THEN 1 ELSE 0 END) AS review_failed, "
        " COUNT(*) AS total, MAX(date) AS newest "
        f"FROM articles WHERE 1=1{clause} GROUP BY source",
        params).fetchall()
    return {r["source"]: dict(r) for r in rows}


def _error_stats_by_source(store: Store) -> dict[str, dict]:
    # fetch_errors has no tracker column, so this is intentionally unfiltered —
    # errors are shown regardless of the --tracker filter (best effort; see
    # module docstring).
    rows = store.conn.execute(
        "SELECT source, COUNT(*) AS error_count, MAX(occurred_at) AS last_error_at "
        "FROM fetch_errors GROUP BY source").fetchall()
    return {r["source"]: dict(r) for r in rows}


def _junk_pct(a: dict) -> float:
    total = a.get("total") or 0
    if not total:
        return 0.0
    junk = (a.get("gated_out") or 0) + (a.get("review_failed") or 0)
    return round(junk / total * 100, 1)


def _row_from_profile(p, a: dict, e: dict) -> dict:
    return {
        "domain": p["domain"], "name": p["name"], "method": p["method"],
        "trackers": p["trackers"], "total_runs": p["total_runs"],
        "total_yield": p["total_yield"],
        "consecutive_failures": p["consecutive_failures"],
        "last_seen_utc": p["last_seen_utc"],
        "written": a.get("written") or 0,
        "gated_out": a.get("gated_out") or 0,
        "skipped_window": a.get("skipped_window") or 0,
        "review_failed": a.get("review_failed") or 0,
        "total_articles": a.get("total") or 0,
        "junk_pct": _junk_pct(a),
        "newest_article_date": a.get("newest"),
        "error_count": e.get("error_count") or 0,
        "last_error_at": e.get("last_error_at"),
        "unmatched": False,
    }


def _row_unmatched(name: str, a: dict, e: dict) -> dict:
    return {
        "domain": None, "name": name, "method": None, "trackers": None,
        "total_runs": 0, "total_yield": 0, "consecutive_failures": 0,
        "last_seen_utc": None,
        "written": a.get("written") or 0,
        "gated_out": a.get("gated_out") or 0,
        "skipped_window": a.get("skipped_window") or 0,
        "review_failed": a.get("review_failed") or 0,
        "total_articles": a.get("total") or 0,
        "junk_pct": _junk_pct(a),
        "newest_article_date": a.get("newest"),
        "error_count": e.get("error_count") or 0,
        "last_error_at": e.get("last_error_at"),
        "unmatched": True,
    }


def _problem_score(r: dict) -> tuple:
    """Higher = worse. Zero-yield sources and high junk% sort to the top."""
    zero_yield = 1 if (r["total_yield"] or 0) == 0 else 0
    failing = 1 if (r["consecutive_failures"] or 0) > 0 else 0
    return (r["junk_pct"] + zero_yield * 50 + failing * 20, r["error_count"], r["name"] or "")


def gather_source_health(store: Store, *, tracker: str | None = None) -> list[dict]:
    """Per-source health report, sorted worst-first.

    Combines:
    - source_profiles: domain, method, trackers, total_runs, total_yield,
      consecutive_failures, last_seen_utc watermark
    - articles (joined by name==source): written / gated_out / skipped_window /
      review_failed counts, junk% = (gated_out+review_failed)/total, newest date
    - fetch_errors: error count + most recent error timestamp

    See module docstring for the correlation caveat and the unmatched-row
    behavior (nothing is silently dropped on either side).
    """
    profiles = store.list_profiles(tracker=tracker)
    article_stats = _article_stats_by_source(store, tracker)
    error_stats = _error_stats_by_source(store)

    rows: list[dict] = []
    seen_names: set[str] = set()
    for p in profiles:
        name = p["name"] or p["domain"]
        seen_names.add(name)
        rows.append(_row_from_profile(p, article_stats.get(name, {}),
                                      error_stats.get(name, {})))

    extra_names = (set(article_stats) | set(error_stats)) - seen_names
    for name in sorted(extra_names):
        rows.append(_row_unmatched(name, article_stats.get(name, {}),
                                   error_stats.get(name, {})))

    rows.sort(key=_problem_score, reverse=True)
    return rows


def source_health_report(db: Path, *, tracker: str | None = None) -> list[dict]:
    """Convenience entry point for callers that only have a db path (e.g. cli.py)."""
    return gather_source_health(Store(db), tracker=tracker)
