"""Article body extraction via trafilatura."""
from __future__ import annotations


def extract_body(html: str, url: str | None = None) -> str:
    try:
        import trafilatura
    except ImportError:
        return ""
    result = trafilatura.extract(html, url=url, include_comments=False,
                                 include_tables=False, favor_recall=False) or ""
    return result.strip()


def extract_metadata(html: str, url: str | None = None) -> dict[str, str | None]:
    try:
        import trafilatura
        from trafilatura.metadata import extract_metadata as _meta
    except ImportError:
        return {"title": None, "date": None}
    md = _meta(html, default_url=url)
    if not md:
        return {"title": None, "date": None}
    return {"title": md.title, "date": md.date}
