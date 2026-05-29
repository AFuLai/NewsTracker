"""Minimal builtin-sources lookup — auto-enrich ENTRY method when searchinfo
does not specify one. Sourced from Info-Dig builtin-sources.md V2 (subset).
"""
from __future__ import annotations

BUILTIN: dict[str, dict[str, str]] = {
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
