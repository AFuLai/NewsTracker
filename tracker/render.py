"""Jinja2 → data-YYYYMMDD.js + manifest chain."""
from __future__ import annotations

import json
import re
from datetime import date as _date
from pathlib import Path

from jinja2 import Environment, PackageLoader, select_autoescape


def _tojson_unicode(value):
    """tojson that preserves CJK characters (no \\uXXXX escape)."""
    return json.dumps(value, ensure_ascii=False)


_env = Environment(
    loader=PackageLoader("tracker", "templates"),
    autoescape=select_autoescape(disabled_extensions=("j2",), default=False),
    keep_trailing_newline=True,
)
_env.filters["tojson"] = _tojson_unicode


def _write(path: Path, text: str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8", newline="\n")
    return path


def _parse_sources(row: dict) -> list[dict]:
    """Sources may be either a list (already parsed) or a JSON/csv string."""
    s = row.get("sources")
    if isinstance(s, list):
        return s
    src_name = row.get("source") or "source"
    url = row.get("url") or ""
    return [{"name": src_name, "url": url, "lang": "EN"}]


# Display order — most actionable categories first within each day.
# Includes both Security and EU CRA category names.
CATEGORY_PRIORITY = {
    # Security tracker
    "重大事件": 0,
    "法規與標準": 1,
    "漏洞與威脅情報": 2,
    "供應鏈與開源安全": 3,
    "前瞻技術": 4,
    # EU CRA tracker
    "法令更新": 0,
    "調和標準": 1,
    "合規指引": 2,
    "開源影響": 3,
    "亞太對應": 4,
    "產業動態": 5,
    "研討活動": 6,
    # OS tracker (by platform)
    "Linux": 0,
    "Windows": 1,
    "Apple": 2,
    "Android": 3,
    "重點關注": 4,
    "uncategorized": 99,
}


def _trackers_of(row: dict) -> list[str]:
    t = row.get("trackers")
    if isinstance(t, list):
        return [str(x) for x in t if x]
    if isinstance(t, str) and t:
        return [s.strip() for s in t.split(",") if s.strip()]
    return ["security"]  # back-compat default


def render_day(*, day: str, rows: list[dict], out_dir: Path,
               allowed_categories: list[str] | None = None) -> Path:
    from .llm import _coerce_category
    allowed = allowed_categories or []
    coerced_rows = []
    for r in rows:
        r = dict(r)
        if allowed:
            r["category"] = _coerce_category(r.get("category") or "", allowed)
        coerced_rows.append(r)
    sorted_rows = sorted(
        coerced_rows,
        key=lambda r: (CATEGORY_PRIORITY.get(r.get("category") or "uncategorized", 50),
                       r.get("id", 0)),
    )
    items = []
    for i, r in enumerate(sorted_rows, 1):
        tags_en = r.get("tags_en")
        if isinstance(tags_en, str):
            tags_en = [t for t in tags_en.split(",") if t]
        items.append({
            "id": f"{day.replace('-', '')}-{i:03d}",
            "trackers": _trackers_of(r),
            "category": r.get("category") or "uncategorized",
            "title": r.get("title") or "",
            "summary": r.get("summary") or "",
            "tags": [t for t in (r.get("tags") or "").split(",") if t] if isinstance(r.get("tags"), str)
                    else (r.get("tags") or []),
            # English mirror — emitted only when present; UI falls back to zh.
            "title_en": r.get("title_en") or "",
            "summary_en": r.get("summary_en") or "",
            "tags_en": tags_en or [],
            "sources": _parse_sources(r),
        })
    text = _env.get_template("data_day.js.j2").render(day=day, items=items)
    return _write(out_dir / f"data-{day.replace('-', '')}.js", text)


_DATA_ITEM_RE = re.compile(r"^\s*id:\s*\"", re.M)
_TRACKERS_FIELD_RE = re.compile(r'^\s*trackers:\s*\[([^\]]*)\]', re.M)


def _count_items_for_tracker(body: str, tracker: str) -> int:
    """Count items in a data-YYYYMMDD.js whose `trackers` array contains tracker.

    Falls back to total item count if no trackers field is present (back-compat
    for files written before v0.5 — all such items are implicit 'security')."""
    total_items = len(_DATA_ITEM_RE.findall(body))
    trackers_matches = _TRACKERS_FIELD_RE.findall(body)
    if not trackers_matches:
        return total_items if tracker == "security" else 0
    return sum(1 for arr in trackers_matches if f'"{tracker}"' in arr)


def _scan_month(data_root: Path, month: str, tracker: str) -> tuple[list[dict], int]:
    """Walk data-YYYYMMDD.js files in data_root (shared) for given YYYY-MM,
    counting only items that belong to `tracker`."""
    prefix = month.replace("-", "")
    dates: list[dict] = []
    total = 0
    pattern = re.compile(rf"^data-({prefix}\d\d)\.js$")
    for p in sorted(data_root.glob(f"data-{prefix}*.js"), reverse=True):
        m = pattern.match(p.name)
        if not m:
            continue
        ymd = m.group(1)
        day_iso = f"{ymd[:4]}-{ymd[4:6]}-{ymd[6:8]}"
        body = p.read_text(encoding="utf-8", errors="replace")
        count = _count_items_for_tracker(body, tracker)
        if count == 0:
            continue
        dates.append({"date": day_iso, "file": f"../{p.name}", "count": count})
        total += count
    return dates, total


def update_month_manifest(*, month: str, data_root: Path, tracker: str) -> Path:
    """Write data_root/<tracker>/manifest-YYYYMM.js scanning shared data files."""
    dates, total = _scan_month(data_root, month, tracker)
    path = data_root / tracker / f"manifest-{month.replace('-', '')}.js"
    # Don't keep a manifest for a month this tracker has no items in — otherwise
    # the year scan would surface an empty month in the UI grid.
    if total == 0:
        if path.exists():
            path.unlink()
        return path
    last_updated = _date.today().isoformat()
    text = _env.get_template("manifest_month.js.j2").render(
        month=month, dates=dates, total=total, last_updated=last_updated, tracker=tracker)
    return _write(path, text)


def _scan_year(data_root: Path, year: str, tracker: str) -> list[str]:
    months: set[str] = set()
    for p in (data_root / tracker).glob(f"manifest-{year}??.js"):
        stem = p.stem.replace("manifest-", "")
        months.add(f"{stem[:4]}-{stem[4:6]}")
    return sorted(months, reverse=True)


def update_year_manifest(*, year: str, data_root: Path, tracker: str) -> Path:
    months = _scan_year(data_root, year, tracker)
    path = data_root / tracker / f"manifest-{year}.js"
    # No months with items this year for this tracker → drop the year manifest so
    # the UI doesn't show an empty year pill.
    if not months:
        if path.exists():
            path.unlink()
        return path
    last_updated = _date.today().isoformat()
    text = _env.get_template("manifest_year.js.j2").render(
        year=year, months=months, last_updated=last_updated, tracker=tracker)
    return _write(path, text)


def update_root_manifest(*, root_html: Path,
                         trackers: dict[str, dict]) -> Path:
    """Write TRACKER_MANIFESTS root file. `trackers` maps name → {title, categories}."""
    data_dir = root_html / "data"
    blocks: dict[str, dict] = {}
    last_updated = _date.today().isoformat()
    for tname, meta in trackers.items():
        years: list[str] = []
        for p in (data_dir / tname).glob("manifest-????.js"):
            y = p.stem.replace("manifest-", "")
            if y.isdigit() and len(y) == 4:
                years.append(y)
        years.sort(reverse=True)
        blocks[tname] = {
            "title": meta.get("title") or tname,
            "categories": meta.get("categories") or [],
            "years": years,
            "yearFiles": {y: f"data/{tname}/manifest-{y}.js" for y in years},
        }
    text = _env.get_template("manifest_root.js.j2").render(
        trackers=blocks, last_updated=last_updated)
    return _write(root_html / "manifest.js", text)
