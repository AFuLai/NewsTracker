"""API fetcher — structured endpoints. Currently NVD CVE 2.0.

Activated when a source_profile has method=API. The orchestrator passes the
tracker's KEYs via profile.extra['keywords']. Each CVE becomes a Candidate
whose url is the canonical NVD detail page, so downstream dedup/summarize treat
it like any other article.
"""
from __future__ import annotations

from . import Candidate, DateWindow, FetchResult, Profile, register
from ..sources.api import nvd_cves

NVD_HOST = "nvd.nist.gov"


@register
class ApiFetcher:
    method = "API"
    max_keys = 5

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        # Only NVD is wired up today; other API hosts fall through to no-op.
        if NVD_HOST not in (profile.domain or ""):
            return FetchResult(error=f"no API handler for {profile.domain}")
        keywords = list(profile.extra.get("keywords", []))[: self.max_keys]
        if not keywords:
            return FetchResult(error="no keywords for API")
        seen: set[str] = set()
        items: list[Candidate] = []
        for kw in keywords:
            for v in nvd_cves(kw, since=window.since, until=window.until):
                cve = v.get("cve", {})
                cid = cve.get("id")
                if not cid:
                    continue
                url = f"https://nvd.nist.gov/vuln/detail/{cid}"
                if url in seen:
                    continue
                seen.add(url)
                descs = cve.get("descriptions", [])
                desc = next((d["value"] for d in descs if d.get("lang") == "en"),
                            descs[0]["value"] if descs else "")
                published = (cve.get("published") or "")[:10] or None
                items.append(Candidate(
                    url=url, title=f"{cid}: {desc[:80]}",
                    snippet=desc, published=published))
        return FetchResult(items=items)
