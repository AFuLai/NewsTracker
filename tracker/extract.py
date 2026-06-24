"""Article body extraction via trafilatura.

trafilatura (global config + lxml) is NOT thread-safe; calling it concurrently
from the summarize body-fetch ThreadPoolExecutor corrupts the C heap
(`double free or corruption`). All trafilatura calls are serialized behind one
lock — network I/O stays parallel, only the fast parsing step is serialized.
"""
from __future__ import annotations

import threading

_LOCK = threading.Lock()


def extract_body(html: str, url: str | None = None) -> str:
    try:
        import trafilatura
    except ImportError:
        return ""
    with _LOCK:
        result = trafilatura.extract(html, url=url, include_comments=False,
                                     include_tables=False, favor_recall=False) or ""
    return result.strip()


def extract_metadata(html: str, url: str | None = None) -> dict[str, str | None]:
    try:
        import trafilatura
        from trafilatura.metadata import extract_metadata as _meta
    except ImportError:
        return {"title": None, "date": None}
    with _LOCK:
        md = _meta(html, default_url=url)
    if not md:
        return {"title": None, "date": None}
    return {"title": md.title, "date": md.date}
