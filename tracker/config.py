"""Parse searchinfo_security.md (V3 + Info-Dig V1 extension fields)."""
from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path
from urllib.parse import urlparse

ENTRY_EXT_RE = re.compile(r"(?P<key>method|feed|api|search|tags)\s*:\s*(?P<val>[^|]+)")


@dataclass
class Entry:
    name: str
    url: str
    domain: str
    notes: str = ""
    method: str | None = None
    feed_url: str | None = None
    api_endpoint: str | None = None
    search_path: str | None = None
    tags: list[str] = field(default_factory=list)
    accept_all: bool = False   # PATH-method: bypass topical filter words


@dataclass
class Key:
    text: str
    tags: list[str] = field(default_factory=list)


@dataclass
class Category:
    name: str
    description: str = ""


@dataclass
class SearchInfo:
    title: str
    entries: list[Entry]
    categories: list[str]            # backward-compat: list of names
    keys: list[Key]
    category_defs: list[Category] = field(default_factory=list)


def _domain(url: str) -> str:
    return urlparse(url).netloc.lower().removeprefix("www.")


def _parse_entry_row(row: str) -> Entry | None:
    cells = [c.strip() for c in row.strip().strip("|").split("|")]
    if len(cells) < 3 or cells[0].lower() in ("名稱", "name", "---"):
        return None
    name, url, notes = cells[0], cells[1], cells[2]
    if not url.startswith("http"):
        return None
    entry = Entry(name=name, url=url, domain=_domain(url), notes=notes)
    for m in ENTRY_EXT_RE.finditer(notes):
        key, val = m.group("key"), m.group("val").strip()
        if key == "method":
            entry.method = val.upper()
        elif key == "feed":
            entry.feed_url = val
        elif key == "api":
            entry.api_endpoint = val
        elif key == "search":
            entry.search_path = val
        elif key == "tags":
            entry.tags = [t.strip() for t in val.split(",")]
    return entry


def _apply_builtins(entries: list[Entry]) -> None:
    from .builtins import enrich
    for e in entries:
        enrich(e.domain, e)


def load_tracker(name: str):
    """Load searchinfo by tracker name (e.g. 'security', 'eu_cra')."""
    from . import SEARCHINFOS
    if name not in SEARCHINFOS:
        raise ValueError(f"Unknown tracker: {name!r}. Known: {list(SEARCHINFOS)}")
    return load_searchinfo(SEARCHINFOS[name])


def load_searchinfo(path: Path) -> SearchInfo:
    raw = path.read_text(encoding="utf-8")
    title_m = re.search(r"^TITLE:\s*(.+)$", raw, re.M)
    title = title_m.group(1).strip() if title_m else path.stem

    def _section(name: str) -> str:
        m = re.search(rf"^##\s+{re.escape(name)}\s*$(.+?)(?=^##\s+|\Z)", raw, re.M | re.S)
        return m.group(1) if m else ""

    entries: list[Entry] = []
    for line in _section("ENTRY").splitlines():
        if line.startswith("|") and "|" in line[1:]:
            e = _parse_entry_row(line)
            if e:
                entries.append(e)

    categories: list[str] = []
    category_defs: list[Category] = []
    for line in _section("CATEGORY").splitlines():
        if line.startswith("|") and "|" in line[1:]:
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if cells and cells[0] not in ("category 值", "---") \
                    and not cells[0].startswith((":-", "---", "==")):
                name = cells[0]
                desc = cells[1] if len(cells) > 1 else ""
                categories.append(name)
                category_defs.append(Category(name=name, description=desc))

    keys: list[Key] = []
    for line in _section("KEY").splitlines():
        m = re.match(r"\s*\d+\.\s*`([^`]+)`", line)
        if m:
            text = m.group(1)
            tags = re.findall(r"\[(#[\w-]+)\]", line)
            keys.append(Key(text=text, tags=tags))

    _apply_builtins(entries)
    return SearchInfo(title=title, entries=entries, categories=categories,
                      keys=keys, category_defs=category_defs)
