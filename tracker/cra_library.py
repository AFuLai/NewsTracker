"""CRA reference-topic library — a curated catalogue of *stable* CRA topics
from external reference sites, with new-topic and content-update detection.

Distinct from the eu_cra NEWS tracker (dated articles). This tracks relatively
stable reference / guidance pages, keyed by URL, with a content hash so we can
tell when an existing topic's body changes. Dated "latest news" items are out
of scope by design (they belong to the news pipeline).

Storage: a `cra_topic` table in the same SQLite DB. Each run (`tracker cra-lib`)
re-discovers the topic set on each site, then:
  - URL never seen        -> NEW topic (insert)
  - URL seen, hash differs -> UPDATED topic (bump content_hash + last_changed)
  - URL in DB not seen now -> mark 'gone'
"""
from __future__ import annotations

import hashlib
import re
import sqlite3
from datetime import date
from pathlib import Path
from urllib.parse import urljoin, urlsplit

from selectolax.parser import HTMLParser

from . import DEFAULT_DB
from .extract import extract_body
from .sources.article import _get_html, fetch_body

# anchor texts that are call-to-action buttons, not topic titles
_CTA_RE = re.compile(r"^(read|learn more|open|view|see|explore|start|get|download|→|»)\b", re.I)

# ── schema ────────────────────────────────────────────────────────────────
CRA_SCHEMA = """
CREATE TABLE IF NOT EXISTS cra_topic (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  source       TEXT NOT NULL,              -- site key
  cluster      TEXT,                       -- topic cluster / section
  title        TEXT,
  url          TEXT UNIQUE NOT NULL,
  content_hash TEXT,                       -- sha256 of the cleaned body
  first_seen   TEXT NOT NULL,              -- ISO date first catalogued
  last_seen    TEXT NOT NULL,              -- ISO date last present in discovery
  last_changed TEXT,                       -- ISO date content_hash last changed
  status       TEXT NOT NULL DEFAULT 'active'   -- 'active' | 'gone'
);
CREATE INDEX IF NOT EXISTS idx_cra_topic_source ON cra_topic(source);
CREATE INDEX IF NOT EXISTS idx_cra_topic_status ON cra_topic(status);
"""

# ── per-site cluster assignment ───────────────────────────────────────────
_CRAEV_CLUSTERS = {
    "cra-overview": "CRA Overview",
    "sbom": "SBOM",
    "conformity-and-documentation": "Conformity & Documentation",
    "vulnerability-handling-and-reporting": "Vulnerability Handling & Reporting",
    "support-period": "Support Period & Security Updates",
    "harmonised-standards": "Harmonised Standards",
    "supply-chain": "Supply Chain & Third-party",
}
_CRAEV_ARTICLE_CLUSTER = {
    "what-is-the-cra": "CRA Overview", "product-with-digital-elements": "CRA Overview",
    "remote-data-processing": "CRA Overview", "penalties-and-enforcement": "CRA Overview",
    "who-must-comply": "CRA Overview", "manufacturer": "CRA Overview",
    "importer": "CRA Overview", "distributor": "CRA Overview",
    "authorised-representative": "CRA Overview",
    "product-classification": "Conformity & Documentation",
    "risk-assessment": "Conformity & Documentation",
    "conformity-assessment": "Conformity & Documentation",
    "european-cybersecurity-certification": "Conformity & Documentation",
    "technical-documentation": "Conformity & Documentation",
    "declaration-of-conformity": "Conformity & Documentation",
    "vulnerability-handling": "Vulnerability Handling & Reporting",
    "vulnerability-reporting": "Vulnerability Handling & Reporting",
    "coordinated-vulnerability-disclosure": "Vulnerability Handling & Reporting",
    "severity-scoring": "Vulnerability Handling & Reporting",
    "enisa-srp-onboarding": "Vulnerability Handling & Reporting",
    "support-period-basics": "Support Period & Security Updates",
    "end-of-support-disclosure": "Support Period & Security Updates",
    "security-updates": "Support Period & Security Updates",
    "harmonised-standards-status": "Harmonised Standards",
    "machinery-regulation": "Related Regulations",
}


def _cluster_craevidence(url: str) -> str:
    parts = urlsplit(url).path.rstrip("/").split("/")   # ['', 'cra-compliance', slug, sub?]
    if len(parts) >= 4:                                 # /cra-compliance/<parent>/<sub>
        return _CRAEV_CLUSTERS.get(parts[2], "Other")
    slug = parts[-1]
    return _CRAEV_CLUSTERS.get(slug) or _CRAEV_ARTICLE_CLUSTER.get(slug, "Other")


def _cluster_cra_eu(url: str) -> str:
    slug = urlsplit(url).path.strip("/").replace(".html", "")
    if slug.startswith("guide-"):
        return "Guidance by Role"
    if slug in ("fast-check", "tools"):
        return "Assessment Tools"
    return "Reference Documents"


# ── site registry ─────────────────────────────────────────────────────────
SITES = {
    "craevidence": {
        "name": "CRA Evidence",
        "index": "https://craevidence.com/cra-compliance",
        "topic_re": re.compile(r"^https?://craevidence\.com/cra-compliance/[a-z0-9-]+(?:/[a-z0-9-]+)?$", re.I),
        "exclude_re": re.compile(r"/cra-compliance/products(?:/|$)", re.I),
        "cluster": _cluster_craevidence,
    },
    "cyberresilienceact": {
        "name": "cyberresilienceact.eu",
        "index": "https://www.cyberresilienceact.eu/",
        "topic_re": re.compile(r"^https?://www\.cyberresilienceact\.eu/[a-z0-9-]+\.html$", re.I),
        # dated news + boilerplate pages are out of scope
        "exclude_re": re.compile(r"/(news|cra-news|privacy|terms|imprint|cookie)", re.I),
        "cluster": _cluster_cra_eu,
    },
}


# ── discovery ─────────────────────────────────────────────────────────────
def discover(site_key: str) -> list[dict]:
    """Return [{url, title, cluster}] of stable topics on a site's index."""
    cfg = SITES[site_key]
    html = _get_html(cfg["index"], 25.0)
    if not html:
        raise RuntimeError(f"empty index for {site_key} ({cfg['index']})")
    tree = HTMLParser(html)
    # Per URL, choose the best anchor label: prefer a non-CTA title, and among
    # those the shortest (the clean nav/list label, not the long card blurb). A
    # URL whose only labels are CTAs ("Open …", "Read it →") is still kept — its
    # page <h1> becomes the title later in snapshot().
    best: dict[str, tuple[str, bool]] = {}
    for a in tree.css("a[href]"):
        href = a.attributes.get("href") or ""
        href = urljoin(cfg["index"], href).split("#")[0].split("?")[0].rstrip("/")
        if not cfg["topic_re"].match(href):
            continue
        if cfg["exclude_re"] and cfg["exclude_re"].search(href):
            continue
        title = " ".join((a.text() or "").split()).strip()
        if len(title) < 3:
            continue
        is_cta = bool(_CTA_RE.match(title))
        cur = best.get(href)
        if cur is None:
            best[href] = (title, is_cta)
        else:
            cur_title, cur_cta = cur
            if (cur_cta and not is_cta) or (cur_cta == is_cta and len(title) < len(cur_title)):
                best[href] = (title, is_cta)
    return [{"url": u, "title": t[0][:160], "cluster": cfg["cluster"](u)}
            for u, t in sorted(best.items())]


def _page_title(tree: HTMLParser) -> str | None:
    h1 = tree.css_first("h1")
    if h1 and h1.text().strip():
        return " ".join(h1.text().split())[:160]
    t = tree.css_first("title")
    if t and t.text().strip():
        # drop the site-name suffix ("… · site" / "… | site")
        return " ".join(re.split(r"[·|]", t.text())[0].split())[:160]
    return None


def snapshot(url: str) -> tuple[str | None, str | None]:
    """Return (content_hash, page_title). One fetch yields both; the page's own
    <h1> is the authoritative title (discovery anchor text is only a fallback).
    content_hash is None when the body is too thin / unfetchable."""
    html = _get_html(url, 20.0)
    if not html:
        # last resort: stealth path for the hash, no title
        body = fetch_body(url)
        norm = " ".join((body or "").split())
        h = hashlib.sha256(norm.encode("utf-8")).hexdigest() if len(norm) >= 80 else None
        return h, None
    tree = HTMLParser(html)
    title = _page_title(tree)
    body = extract_body(html, url=url) or ""
    norm = " ".join(body.split())
    h = hashlib.sha256(norm.encode("utf-8")).hexdigest() if len(norm) >= 80 else None
    return h, title


# ── store ─────────────────────────────────────────────────────────────────
def _conn(db: Path) -> sqlite3.Connection:
    c = sqlite3.connect(str(db))
    c.row_factory = sqlite3.Row
    c.executescript(CRA_SCHEMA)
    return c


def sync(db: Path = DEFAULT_DB, sites: list[str] | None = None) -> dict:
    """Re-discover each site and reconcile the catalogue. Returns a report."""
    sites = sites or list(SITES)
    conn = _conn(db)
    today = date.today().isoformat()
    rep = {"new": [], "updated": [], "unchanged": 0, "removed": [], "errors": []}
    seen: set[str] = set()

    for sk in sites:
        try:
            topics = discover(sk)
        except Exception as e:
            rep["errors"].append(f"{sk} discover: {e}")
            continue
        for tp in topics:
            seen.add(tp["url"])
            h, page_title = snapshot(tp["url"])
            title = page_title or tp["title"]      # page <h1> wins over anchor text
            tp = {**tp, "title": title}
            row = conn.execute("SELECT * FROM cra_topic WHERE url=?", (tp["url"],)).fetchone()
            if row is None:
                conn.execute(
                    "INSERT INTO cra_topic(source,cluster,title,url,content_hash,"
                    "first_seen,last_seen,last_changed,status) VALUES(?,?,?,?,?,?,?,?,'active')",
                    (sk, tp["cluster"], title, tp["url"], h, today, today, today))
                rep["new"].append({**tp, "source": sk})
            else:
                changed = bool(h) and bool(row["content_hash"]) and h != row["content_hash"]
                if changed:
                    conn.execute(
                        "UPDATE cra_topic SET cluster=?,title=?,content_hash=?,"
                        "last_seen=?,last_changed=?,status='active' WHERE url=?",
                        (tp["cluster"], tp["title"], h, today, today, tp["url"]))
                    rep["updated"].append({**tp, "source": sk})
                else:
                    # keep the hash if this fetch failed (h is None) so we don't
                    # lose the baseline; still refresh label/cluster/last_seen.
                    conn.execute(
                        "UPDATE cra_topic SET cluster=?,title=?,last_seen=?,status='active'"
                        + ("" if h is None else ",content_hash=COALESCE(content_hash,?)")
                        + " WHERE url=?",
                        ((tp["cluster"], tp["title"], today, tp["url"]) if h is None
                         else (tp["cluster"], tp["title"], today, h, tp["url"])))
                    rep["unchanged"] += 1

    # topics we track for the synced sites but no longer see -> gone
    placeholders = ",".join("?" * len(sites))
    for r in conn.execute(
            f"SELECT url,title,source FROM cra_topic "
            f"WHERE status='active' AND source IN ({placeholders})", sites).fetchall():
        if r["url"] not in seen:
            conn.execute("UPDATE cra_topic SET status='gone',last_seen=? WHERE url=?",
                         (today, r["url"]))
            rep["removed"].append(dict(r))

    conn.commit()
    conn.close()
    return rep


def list_topics(db: Path = DEFAULT_DB, include_gone: bool = False) -> list[dict]:
    conn = _conn(db)
    q = "SELECT * FROM cra_topic"
    if not include_gone:
        q += " WHERE status='active'"
    q += " ORDER BY source, cluster, title"
    rows = [dict(r) for r in conn.execute(q).fetchall()]
    conn.close()
    return rows


def emit_js(db: Path, out_dir: Path) -> Path:
    """Write data/cra_library.js consumed by the site's CRA Library view."""
    import json
    conn = _conn(db)
    rows = [dict(r) for r in conn.execute(
        "SELECT source,cluster,title,url,first_seen,last_seen,last_changed,status "
        "FROM cra_topic ORDER BY source,cluster,title").fetchall()]
    conn.close()
    sources = {k: v["name"] for k, v in SITES.items()}
    payload = {
        "generated": date.today().isoformat(),
        "sources": sources,
        "topics": rows,
    }
    data_dir = out_dir / "data"
    data_dir.mkdir(parents=True, exist_ok=True)
    path = data_dir / "cra_library.js"
    text = "window.CRA_LIBRARY = " + json.dumps(payload, ensure_ascii=False, indent=0) + ";\n"
    path.write_text(text, encoding="utf-8", newline="\n")
    return path
