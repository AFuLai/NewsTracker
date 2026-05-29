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


def render_day(*, day: str, rows: list[dict], out_dir: Path) -> Path:
    items = []
    for i, r in enumerate(rows, 1):
        items.append({
            "id": f"{day.replace('-', '')}-{i:03d}",
            "category": r.get("category") or "uncategorized",
            "title": r.get("title") or "",
            "summary": r.get("summary") or "",
            "tags": [t for t in (r.get("tags") or "").split(",") if t] if isinstance(r.get("tags"), str)
                    else (r.get("tags") or []),
            "sources": _parse_sources(r),
        })
    text = _env.get_template("data_day.js.j2").render(day=day, items=items)
    return _write(out_dir / f"data-{day.replace('-', '')}.js", text)


def _scan_month(out_dir: Path, month: str) -> tuple[list[dict], int]:
    """Walk data-YYYYMMDD.js files in out_dir matching given YYYY-MM."""
    prefix = month.replace("-", "")
    dates: list[dict] = []
    total = 0
    pattern = re.compile(rf"^data-({prefix}\d\d)\.js$")
    for p in sorted(out_dir.glob(f"data-{prefix}*.js"), reverse=True):
        m = pattern.match(p.name)
        if not m:
            continue
        ymd = m.group(1)
        day_iso = f"{ymd[:4]}-{ymd[4:6]}-{ymd[6:8]}"
        body = p.read_text(encoding="utf-8", errors="replace")
        count = body.count("    id:")
        if count == 0:
            count = body.count("id:") - body.count("// ")
        dates.append({"date": day_iso, "file": f"data/{p.name}", "count": max(count, 0)})
        total += max(count, 0)
    return dates, total


def update_month_manifest(*, month: str, out_dir: Path) -> Path:
    dates, total = _scan_month(out_dir, month)
    last_updated = _date.today().isoformat()
    text = _env.get_template("manifest_month.js.j2").render(
        month=month, dates=dates, total=total, last_updated=last_updated)
    return _write(out_dir / f"manifest-{month.replace('-', '')}.js", text)


def _scan_year(out_dir: Path, year: str) -> list[str]:
    months: set[str] = set()
    for p in out_dir.glob(f"manifest-{year}??.js"):
        stem = p.stem.replace("manifest-", "")
        months.add(f"{stem[:4]}-{stem[4:6]}")
    return sorted(months, reverse=True)


def update_year_manifest(*, year: str, out_dir: Path) -> Path:
    months = _scan_year(out_dir, year)
    last_updated = _date.today().isoformat()
    text = _env.get_template("manifest_year.js.j2").render(
        year=year, months=months, last_updated=last_updated)
    return _write(out_dir / f"manifest-{year}.js", text)


def update_root_manifest(*, root_html: Path, title: str, categories: list[str]) -> Path:
    data_dir = root_html / "data"
    years: list[str] = []
    for p in data_dir.glob("manifest-????.js"):
        y = p.stem.replace("manifest-", "")
        if y.isdigit() and len(y) == 4:
            years.append(y)
    years.sort(reverse=True)
    last_updated = _date.today().isoformat()
    text = _env.get_template("manifest_root.js.j2").render(
        title=title, categories=categories, years=years, last_updated=last_updated)
    return _write(root_html / "manifest.js", text)
