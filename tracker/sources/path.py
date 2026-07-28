"""PATH-method fetcher: pull a listing page (HTML), extract candidate
article URLs from it, optionally filter by keyword presence on the page or
URL.

Tries httpx first; falls back to curl_cffi stealth for sites that filter
generic UAs. The trafilatura/extract module handles the actual body later
during summarize.
"""
from __future__ import annotations

import re
from dataclasses import dataclass
from urllib.parse import urljoin, urlparse

import httpx

from .stealth import fetch as stealth_fetch

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36 tracker/0.x")


@dataclass
class Hit:
    title: str
    url: str
    snippet: str = ""


def _get_html(url: str, timeout: float) -> str:
    try:
        r = httpx.get(url, follow_redirects=True, timeout=timeout,
                      headers={"User-Agent": UA, "Accept-Language": "en,zh-TW;q=0.7,ja;q=0.6"})
        if r.status_code == 200:
            return r.text
    except Exception:
        pass
    return stealth_fetch(url, timeout=timeout)


# Whole path segments that mark a site-structure page rather than a story.
# Anchored with (/|$) on both sides so only complete segments match.
# NOTE: bare "legal" and "newsletter" are deliberately NOT here. They are real
# content sections on real publishers — theregister.com/legal/<date>/<slug> and
# openssf.org/newsletter/<date>/<slug> are ordinary articles, and an earlier
# draft of this rule rejected 7 of them (one being CRA coverage we want).
# Only the unambiguous "legal notice" page form is matched.
_STRUCTURAL_SEG_RE = re.compile(
    r"/(legal[-_]notice|imprint|impressum|disclaimer|copyright"
    r"|privacy([-_]policy)?|terms([-_]of[-_](use|service))?"
    r"|site[-_]?map|subs?cribe([-_]news)?"
    r"|members?|membership|intellectual[-_]property([-_]rights)?"
    r"|about([-_]us)?|contact([-_]us)?|careers?|jobs?"
    r"|information[-_]for"
    r"|cookies?|accessibility|expertise)(/|$)", re.I)


_ORG_ABOUT_RE = re.compile(r"^/about[-_]([a-z0-9]+)(/|$)", re.I)

# europa.eu serves the same page under a per-language path prefix. The CRA
# policy page was ingested 20 times — once per language — and 18 of those
# translations were live on the site as separate articles, each summarised into
# its own near-identical Chinese paragraph.
_EUROPA_HOST_RE = re.compile(r"(^|\.)ec\.europa\.eu$", re.I)
_LANG_PREFIX_RE = re.compile(r"^/([a-z]{2})(/|$)", re.I)


def _is_translated_duplicate(host: str, path: str) -> bool:
    """True for a non-English language variant on an EU Commission host.

    Scoped to ec.europa.eu on purpose. A generic "two-letter first segment"
    rule looks tempting and is wrong: it would throw away Ars Technica's /ai/
    section (28 rows) and JPCERT's /at/ and /wr/ advisory sections (17 rows),
    all of which are real articles. Only the europa.eu family is known to
    mirror every page across languages with /en/ always present.
    """
    if not _EUROPA_HOST_RE.search(host or ""):
        return False
    m = _LANG_PREFIX_RE.match(path or "")
    return bool(m) and m.group(1).lower() != "en"


def _is_org_about_page(path: str) -> bool:
    """True for an organisation's root-level "about us" area.

    `/about-csa`, `/about-1`, `/about-enisa/who-we-are` are org pages; six of
    them were live on the site as EU CRA news, including
    enisa.europa.eu/about-enisa/accounting-finance summarised as 「ENISA 官方
    公布年度財務報告」.

    The rule is deliberately narrow so it cannot eat a real headline. It only
    fires at the FIRST path segment (news slugs sit under a date or section),
    and only when the part after `about-` is a single token or the path
    continues — so `/about-the-cra-regulation`, called out as must-keep in
    `_STRUCTURAL_SEG_RE`'s comment, is untouched.  Measured over the 5,789-row
    corpus: 9 hits, none of them an article.
    """
    return bool(_ORG_ABOUT_RE.match(path or ""))


def _looks_like_article(href: str) -> bool:
    p = urlparse(href)
    path = p.path or "/"
    if path in ("", "/"):
        return False
    # Reject obvious section/listing pages
    if re.match(r"^/?(news|news-events|press-releases|alerts|tags?|categories?|page|search|home|sitemap)/?$", path, re.I):
        return False
    # Reject site-wide footer / about pages (privacy policy, accessibility,
    # terms of use, contact, sitemap, related-links indexes). These get picked
    # up by listing scrapes (esp. NISC, BSI, government sites) but are not
    # news articles and yield empty bodies downstream.
    if re.search(r"/(privacy(_policy)?|webaccessibility|accessibility|terms|rights|"
                 r"about|contact|copyright|disclaimer|legal|imprint|impressum|"
                 r"datenschutz|mentions[-_]?legales|cookies?|sitemap|link/index)"
                 r"(\.html?)?/?$", path, re.I):
        return False
    # Reject non-news sections (how-to guides, forums, deals). These are
    # slug-shaped so they pass the heuristic below, but trafilatura extracts
    # nothing from them — they were the source of 308 of the DB's 369
    # "empty body after fetch" errors (all BleepingComputer /tutorials/).
    if re.match(r"^/?(tutorials?|how-to|forums?|deals?|offers?|glossary)(/|$)",
                path, re.I):
        return False
    # Reject site-structure pages anywhere in the path. The rule above this
    # one anchors to the END of the path, so hyphenated variants slipped
    # through and were summarised into fake news: etsi.org/legal-notice became
    # "ETSI 官方網站法律公告", /site-map became "ETSI 網站導覽", and three
    # /membership/* pages became articles about corporate influence. Each
    # alternative must be a WHOLE segment, so a real headline like
    # /member-states-adopt-cra or /about-the-cra-regulation is untouched.
    if _STRUCTURAL_SEG_RE.search(path):
        return False
    if _is_org_about_page(path):
        return False
    if _is_translated_duplicate(p.netloc, path):
        return False
    segments = [s for s in path.strip("/").split("/") if s]
    if not segments:
        return False
    last = segments[-1]
    # Heuristic: needs a slug-like segment (hyphenated or digit-bearing).
    return "-" in last or any(ch.isdigit() for ch in last) or last.endswith((".html", ".htm"))


def fetch_listing(base_url: str, *, search_path: str = "",
                  keyword: str = "", domain: str = "",
                  max_results: int = 30, timeout: float = 20.0,
                  filter_keywords: tuple[str, ...] = ()) -> list[Hit]:
    """Fetch a listing page and extract candidate article URLs.

    base_url: the listing page URL OR the domain root if search_path used.
    search_path: appended to base_url if non-empty; keyword interpolated.
    filter_keywords: only keep links whose anchor text or URL contains any
                     of these (case-insensitive). Empty tuple = no filter.
    """
    try:
        from selectolax.parser import HTMLParser
    except ImportError:
        return []

    url = base_url
    if search_path:
        full = base_url.rstrip("/") + search_path
        if "{kw}" in full:
            full = full.replace("{kw}", keyword)
        else:
            full = full + keyword
        url = full

    html = _get_html(url, timeout)
    if not html:
        return []

    tree = HTMLParser(html)
    domain_norm = (domain or urlparse(base_url).netloc).lower().removeprefix("www.")

    hits: list[Hit] = []
    seen: set[str] = set()
    for a in tree.css("a"):
        href = (a.attributes.get("href") or "").strip()
        if not href:
            continue
        # Resolve relative URLs against the listing page.
        abs_url = urljoin(url, href)
        p = urlparse(abs_url)
        # Same-domain only
        netloc = p.netloc.lower().removeprefix("www.")
        if domain_norm not in netloc:
            continue
        if not _looks_like_article(abs_url):
            continue
        if abs_url in seen:
            continue
        anchor_text = (a.text() or "").strip()
        if filter_keywords:
            blob = (anchor_text + " " + abs_url).lower()
            if not any(k.lower() in blob for k in filter_keywords):
                continue
        if not anchor_text or len(anchor_text) < 8:
            # Skip purely structural links with no readable label.
            continue
        seen.add(abs_url)
        hits.append(Hit(title=anchor_text, url=abs_url))
    # Rank before truncating. Site navigation appears FIRST in the DOM, so a
    # plain "take the first max_results" filled the entire quota with menu
    # entries and never reached the articles: ENISA's /news page yields 55
    # article-shaped links of which the 12 real stories all sort after the
    # nav block — at max_results=30 we collected zero of them, which is why
    # that source read as dead for 67 runs.
    # Articles on a listing page almost always live under the listing's own
    # path, so prefer those; everything else keeps its original order.
    listing_path = (urlparse(url).path or "").rstrip("/")
    if listing_path and listing_path != "":
        hits.sort(key=lambda h: 0 if urlparse(h.url).path.startswith(listing_path + "/") else 1)
    return hits[:max_results]
