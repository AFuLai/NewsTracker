"""Source auto-probe (WP4).

Given a source URL, detect the best fetch method and persist it to
source_profiles. Lets you add a brand-new source by name+URL only — the next
fetch self-configures. Also invoked automatically when a source's
consecutive_failures crosses a threshold.

Probe order (first success wins):
  1. RSS autodiscovery — <link rel=alternate rss/atom> + common feed paths
  2. Listing heuristic — article-shape link density on the live page (>=5)
  3. stealth retry (curl_cffi) — re-run the listing heuristic on a UA that
     defeats simple bot blocks
  4. ollama L4 — classify_page page_type + suggested_method
  5. Wayback availability — JS-only page with an archive snapshot -> ARCHIVE
  6. fallback -> SEARCH (DuckDuckGo)
"""
from __future__ import annotations

from datetime import datetime
from urllib.parse import urljoin, urlparse

import feedparser
import httpx

from .methods import ARCHIVE, FEED, LISTING, SEARCH
from .sources.path import _looks_like_article
from .sources.stealth import fetch as stealth_fetch

UA = "Mozilla/5.0 (X11; Linux x86_64) Chrome/120.0 tracker/2.x probe"
COMMON_FEED_PATHS = ("/feed", "/rss", "/rss.xml", "/atom.xml", "/index.xml",
                     "/feed.xml", "/feed/", "/rss/")
MIN_LISTING_LINKS = 5
FAILURE_REPROBE_THRESHOLD = 3
# A source can 200-OK forever while returning nothing (moved listing, changed
# markup). Re-probe those too, a little later than hard failures.
EMPTY_REPROBE_THRESHOLD = 8


def _get_html(url: str, timeout: float = 15.0) -> str:
    """httpx first, then curl_cffi stealth (defeats TLS-fingerprint bot blocks
    like CISA's Akamai, which 403s httpx regardless of User-Agent)."""
    try:
        r = httpx.get(url, headers={"User-Agent": UA}, follow_redirects=True, timeout=timeout)
        if r.status_code == 200 and r.text:
            return r.text
    except Exception:
        pass
    return stealth_fetch(url, timeout=timeout)


def _valid_feed(url: str, timeout: float = 12.0) -> bool:
    try:
        r = httpx.get(url, headers={"User-Agent": UA}, follow_redirects=True, timeout=timeout)
        if r.status_code == 200 and feedparser.parse(r.content).entries:
            return True
    except Exception:
        pass
    # TLS-blocked feeds: retry via stealth
    body = stealth_fetch(url, timeout=timeout)
    if body:
        try:
            return bool(feedparser.parse(body.encode("utf-8", "replace")).entries)
        except Exception:
            return False
    return False


def _discover_feed(base_url: str, html: str) -> str | None:
    domain = urlparse(base_url).netloc
    # 1a. <link rel="alternate" type="...rss/atom...">
    try:
        from selectolax.parser import HTMLParser
        tree = HTMLParser(html or "")
        for link in tree.css('link[rel="alternate"]'):
            typ = (link.attributes.get("type") or "").lower()
            href = link.attributes.get("href")
            if href and ("rss" in typ or "atom" in typ or "xml" in typ):
                cand = urljoin(base_url, href)
                if _valid_feed(cand):
                    return cand
    except Exception:
        pass
    # 1b. brute-force common paths on the site root
    root = f"{urlparse(base_url).scheme}://{domain}"
    for path in COMMON_FEED_PATHS:
        cand = root + path
        if _valid_feed(cand):
            return cand
    return None


def _article_links(base_url: str, html: str) -> list[str]:
    if not html:
        return []
    try:
        from selectolax.parser import HTMLParser
    except Exception:
        return []
    domain = urlparse(base_url).netloc.lower().removeprefix("www.")
    tree = HTMLParser(html)
    out, seen = [], set()
    for a in tree.css("a"):
        href = (a.attributes.get("href") or "").strip()
        if not href:
            continue
        absu = urljoin(base_url, href)
        net = urlparse(absu).netloc.lower().removeprefix("www.")
        if domain not in net or not _looks_like_article(absu) or absu in seen:
            continue
        seen.add(absu)
        out.append(absu)
    return out


def probe_source(url: str, *, use_ollama: bool = True) -> dict:
    """Return {method, feed_url, note, confidence}. Does not persist."""
    base = url if url.startswith("http") else f"https://{url}"
    html = _get_html(base)

    # 1. RSS autodiscovery
    feed = _discover_feed(base, html)
    if feed:
        return {"method": FEED, "feed_url": feed, "confidence": 0.95,
                "note": f"rss autodiscovered: {feed}"}

    # 2. Listing heuristic (live)
    links = _article_links(base, html)
    if len(links) >= MIN_LISTING_LINKS:
        return {"method": LISTING, "feed_url": None, "confidence": 0.8,
                "note": f"listing density {len(links)} links (live)"}

    # 3. stealth retry
    if not html or len(links) < MIN_LISTING_LINKS:
        shtml = stealth_fetch(base)
        if shtml:
            slinks = _article_links(base, shtml)
            if len(slinks) >= MIN_LISTING_LINKS:
                return {"method": LISTING, "feed_url": None, "confidence": 0.75,
                        "note": f"listing density {len(slinks)} links (stealth)"}
            html = html or shtml
            links = links or slinks

    # 4. ollama L4 page classification
    if use_ollama and html:
        try:
            from .llm.probe import classify_page
            verdict = classify_page(html, links)
            m = verdict["suggested_method"]
            if m in (FEED, LISTING, ARCHIVE, SEARCH) and verdict["confidence"] >= 0.6:
                return {"method": m, "feed_url": None,
                        "confidence": verdict["confidence"],
                        "note": f"ollama L4: {verdict['page_type']} -> {m}"}
        except Exception:
            pass

    # 5. Wayback availability
    try:
        from .sources.wayback import closest_snapshot
        if closest_snapshot(base):
            return {"method": ARCHIVE, "feed_url": None, "confidence": 0.5,
                    "note": "live page thin; wayback snapshot available"}
    except Exception:
        pass

    # 6. fallback
    return {"method": SEARCH, "feed_url": None, "confidence": 0.3,
            "note": "no feed/listing/archive; fallback to search"}


def probe_and_save(store, url: str, name: str, tracker: str, *,
                   use_ollama: bool = True) -> dict:
    """Probe and write the result into source_profiles."""
    domain = urlparse(url if url.startswith("http") else f"https://{url}").netloc \
        .lower().removeprefix("www.")
    verdict = probe_source(url, use_ollama=use_ollama)
    now = datetime.utcnow().isoformat()
    existing = store.get_profile(domain)
    if existing:
        store.set_profile_method(domain, verdict["method"],
                                 feed_url=verdict.get("feed_url"),
                                 probe_note=verdict["note"], probed_at=now)
    else:
        store.upsert_profile(domain=domain, name=name, method=verdict["method"],
                             trackers=tracker, feed_url=verdict.get("feed_url"),
                             probe_note=verdict["note"], probed_at=now)
    verdict["domain"] = domain
    return verdict


def reprobe_failing(store, *, use_ollama: bool = True) -> int:
    """Re-probe profiles that are failing *or* silently yielding nothing.

    A source that errors out crosses consecutive_failures; a source that
    "succeeds" but returns zero items every run crosses consecutive_empty.
    The latter is the more common rot (a moved listing page still 200s), so
    both must trigger a reprobe — otherwise a dead source is re-fetched
    forever and never re-detected."""
    n = 0
    for p in store.list_reprobe_candidates(
            failure_threshold=FAILURE_REPROBE_THRESHOLD,
            empty_threshold=EMPTY_REPROBE_THRESHOLD):
        # Secondary entry points (source_key "domain#/path") are explicitly
        # configured, not auto-discovered. Probing them would probe the domain
        # ROOT and then overwrite the path-scoped profile with the root's
        # verdict — actively wrong. Leave them to their configuration.
        if p["source_key"] != p["domain"]:
            continue
        url = p["feed_url"] or f"https://{p['domain']}"
        probe_and_save(store, url, p["name"], (p["trackers"] or "").split(",")[0],
                       use_ollama=use_ollama)
        n += 1
    return n
