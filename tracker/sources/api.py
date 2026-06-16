"""Structured-API fetchers (NVD, arXiv, HN Algolia)."""
from __future__ import annotations

from datetime import date

import httpx


def _nvd_query(keyword: str, since: date, until: date) -> list[dict]:
    params = {
        "keywordSearch": keyword,
        "pubStartDate": f"{since.isoformat()}T00:00:00.000",
        "pubEndDate": f"{until.isoformat()}T23:59:59.000",
        "resultsPerPage": 30,
    }
    try:
        r = httpx.get("https://services.nvd.nist.gov/rest/json/cves/2.0",
                      params=params, timeout=30)
        r.raise_for_status()
        return r.json().get("vulnerabilities", [])
    except Exception:
        return []


def nvd_cves(keyword: str, *, since: date, until: date) -> list[dict]:
    """Query NVD for CVEs published in [since, until].

    NVD rejects a pubStartDate/pubEndDate span longer than 120 days, so longer
    windows are split into ≤120-day chunks and concatenated."""
    from datetime import timedelta
    out: list[dict] = []
    start = since
    while start <= until:
        end = min(start + timedelta(days=119), until)
        out.extend(_nvd_query(keyword, start, end))
        start = end + timedelta(days=1)
    return out


def hn_stories(keyword: str, *, since: date, until: date) -> list[dict]:
    import time
    s = int(time.mktime(since.timetuple()))
    u = int(time.mktime(until.timetuple()))
    params = {
        "query": keyword,
        "tags": "story",
        "numericFilters": f"created_at_i>{s},created_at_i<{u}",
        "hitsPerPage": 20,
    }
    try:
        r = httpx.get("https://hn.algolia.com/api/v1/search", params=params, timeout=20)
        r.raise_for_status()
        return r.json().get("hits", [])
    except Exception:
        return []
