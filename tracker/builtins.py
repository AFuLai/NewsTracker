"""Minimal builtin-sources lookup — auto-enrich ENTRY method when searchinfo
does not specify one. Sourced from Info-Dig builtin-sources.md V2 (subset).
"""
from __future__ import annotations

BUILTIN: dict[str, dict[str, object]] = {
    "thehackernews.com": {"method": "FEED",
                          "feed": "https://feeds.feedburner.com/TheHackersNews"},
    "krebsonsecurity.com": {"method": "FEED",
                            "feed": "https://krebsonsecurity.com/feed/"},
    "googleprojectzero.blogspot.com": {"method": "FEED",
                                       "feed": "https://googleprojectzero.blogspot.com/feeds/posts/default?alt=rss"},
    "microsoft.com": {"method": "FEED",
                      "feed": "https://www.microsoft.com/en-us/security/blog/feed/"},
    "redhat.com": {"method": "FEED",
                   "feed": "https://www.redhat.com/en/rss/blog/channel/security"},
    "dragos.com": {"method": "FEED",
                   "feed": "https://www.dragos.com/blog/feed/"},
    "schneier.com": {"method": "FEED",
                     "feed": "https://www.schneier.com/feed/atom/"},
    "isc.sans.edu": {"method": "FEED",
                     "feed": "https://isc.sans.edu/rssfeed_full.xml"},
    "helpnetsecurity.com": {"method": "FEED",
                            "feed": "https://www.helpnetsecurity.com/feed/"},
    "infosecurity-magazine.com": {"method": "FEED",
                                  "feed": "https://www.infosecurity-magazine.com/rss/news/"},
    "theregister.com": {"method": "FEED",
                        "feed": "https://www.theregister.com/security/headlines.atom"},
    "arstechnica.com": {"method": "FEED",
                        "feed": "https://feeds.arstechnica.com/arstechnica/security"},
    "bleepingcomputer.com": {"method": "PATH", "search_path": "/search/?q="},
    "cisa.gov": {"method": "FEED",
                 "feed": "https://www.cisa.gov/cybersecurity-advisories/all.xml"},
    "openssf.org": {"method": "FEED",
                    "feed": "https://openssf.org/feed/"},
    "security.googleblog.com": {"method": "FEED",
                                "feed": "https://security.googleblog.com/feeds/posts/default?alt=rss"},
    # Verified by HTTP probe 2026-05-29:
    "darkreading.com": {"method": "FEED",
                        "feed": "https://www.darkreading.com/rss.xml"},
    "ithome.com.tw": {"method": "FEED",
                      "feed": "https://www.ithome.com.tw/rss/security"},
    "informationsecurity.com.tw": {"method": "FEED",
                                   "feed": "https://www.informationsecurity.com.tw/feed"},
    "elastic.co": {"method": "FEED",
                   "feed": "https://www.elastic.co/security-labs/rss/feed.xml"},
    "ubuntu.com": {"method": "FEED",
                   "feed": "https://ubuntu.com/security/notices/rss.xml"},
    # Cloudflare-protected, only stealth fetch works — keep SITE for now.
    "securityweek.com": {"method": "SITE"},
    # ── EU CRA official sources ────────────────────────────────────────────
    # Feeds below were found by live probe on 2026-07-27 and each verified to
    # return real, dated items. Before this, all of these were configured as
    # PATH against the domain root and had yielded literally nothing across
    # 31-67 runs, which is why the eu_cra tracker was starved.
    "digital-strategy.ec.europa.eu": {"method": "FEED",
                                      "feed": "https://digital-strategy.ec.europa.eu/en/rss.xml"},
    "etsi.org": {"method": "FEED", "feed": "https://www.etsi.org/rss"},
    "cyber.gouv.fr": {"method": "FEED",            # ANSSI, via autodiscovery
                      "feed": "https://cyber.gouv.fr/en/news/atom/"},
    "linuxfoundation.org": {"method": "FEED",
                            "feed": "https://www.linuxfoundation.org/blog/rss.xml"},
    # accept_all was set back when this was a LISTING scrape that matched
    # nothing. Now that it has a real feed, accept_all bypasses the tracker's
    # topic filter and floods eu_cra with general Korean security news
    # (crypto theft, Zimbra CVEs) that has nothing to do with the CRA. Its
    # value here is specifically the KR/KISA angle *on the CRA*, so it must
    # be topic-filtered like every other source.
    "boannews.com": {"method": "FEED",
                     "feed": "https://www.boannews.com/media/news_rss.xml"},
    # No feed exists; the news index does carry real article links, but they
    # sit *after* a 30-entry nav block — see the ranking fix in sources/path.py.
    "enisa.europa.eu": {"method": "PATH", "search_path": "/news"},
    "csa.gov.sg": {"method": "PATH", "search_path": "/news-events"},
    "nisc.go.jp": {"method": "PATH"},
    # Still unsolved: no feed, and the live page exposes no article links even
    # unthrottled. PATH falls back to Wayback snapshots.
    "stan4cra.eu": {"method": "PATH"},
    "cencenelec.eu": {"method": "PATH"},
    # Android bulletins live under a dated path; without it the fetcher
    # scraped the docs root and returned navigation (97% of its rows gated).
    "source.android.com": {"method": "PATH", "search_path": "/docs/security/bulletin"},
    "jpcert.or.jp": {"method": "FEED",
                     "feed": "https://www.jpcert.or.jp/rss/jpcert.rdf"},
}


def enrich(domain: str, entry) -> None:
    """In-place augment Entry with builtin method/feed if not already set."""
    b = BUILTIN.get(domain)
    if not b:
        return
    if not entry.method:
        entry.method = b.get("method")
    if not entry.feed_url and b.get("feed"):
        entry.feed_url = b["feed"]
    if not entry.search_path and b.get("search_path"):
        entry.search_path = b["search_path"]
    if not entry.accept_all and b.get("accept_all"):
        entry.accept_all = bool(b["accept_all"])
