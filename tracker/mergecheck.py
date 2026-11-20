"""Merge check: find same-day near-duplicate stories that the rendered site
still shows separately.

The day files are only re-clustered when a day is re-rendered, so a change to
the merge rules (or a late article) can leave a rendered day with items the
current rules would merge. `check` re-runs `merge_by_title` over each day in a
range and compares the cluster count with the item count of the rendered
`data-YYYYMMDD.js`; `apply` re-renders only the days the caller picks.
Nothing here runs on its own: the console calls it on explicit request.
"""
from __future__ import annotations

import re
from datetime import date, timedelta
from pathlib import Path

DEFAULT_DAYS = 7
MAX_DAYS = 366
_ID_RE = re.compile(r'^\s+id: "', re.M)


def default_range(today: date | None = None) -> tuple[str, str]:
    """The last week, today included."""
    t = today or date.today()
    return (t - timedelta(days=DEFAULT_DAYS - 1)).isoformat(), t.isoformat()


def _parse_range(start: str, end: str) -> list[str]:
    try:
        a, b = date.fromisoformat(start), date.fromisoformat(end)
    except (TypeError, ValueError):
        raise ValueError("日期格式需為 YYYY-MM-DD")
    if b < a:
        raise ValueError("結束日早於開始日")
    n = (b - a).days + 1
    if n > MAX_DAYS:
        raise ValueError(f"範圍最多 {MAX_DAYS} 天")
    return [(a + timedelta(days=i)).isoformat() for i in range(n)]


def rendered_count(out: Path, day: str) -> int | None:
    p = Path(out) / "data" / f"data-{day.replace('-', '')}.js"
    if not p.is_file():
        return None
    return len(_ID_RE.findall(p.read_text(encoding="utf-8")))


def check(store, out: Path, start: str, end: str) -> dict:
    from .cluster import merge_by_title
    days = []
    for d in _parse_range(start, end):
        rows = [dict(r) for r in store.list_writable_for_day(d)]
        if not rows:
            continue
        by_id = {r["id"]: r for r in rows}
        clusters = merge_by_title(rows)
        groups = []
        for c in clusters:
            ids = c.get("_merged_ids") or [c["id"]]
            if len(ids) < 2:
                continue
            groups.append({"primary": c["id"], "items": [
                {"id": i, "title": by_id[i].get("title") or "",
                 "source": by_id[i].get("source") or ""} for i in ids]})
        shown = rendered_count(out, d)
        days.append({"date": d, "articles": len(rows), "clusters": len(clusters),
                     "rendered": shown,
                     "pending": (shown - len(clusters)) if shown is not None else None,
                     "groups": groups})
    return {"start": start, "end": end, "days": days,
            "stale": [x["date"] for x in days if x["pending"]]}


def apply(store, out: Path, dates: list[str]) -> int:
    from .orchestrator import rebuild_days
    clean = sorted({d for d in dates if isinstance(d, str)})
    for d in clean:
        date.fromisoformat(d)
    if not clean:
        raise ValueError("沒有要重新產生的日期")
    return rebuild_days(store, Path(out), dates=clean)
