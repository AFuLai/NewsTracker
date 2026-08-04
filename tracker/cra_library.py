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

Dates: `first_seen`/`last_changed` are *our* crawl dates — they only say when we
noticed something, so they cannot order the official updates (a page revised
before we started tracking looks like it changed the day we first fetched it).
So every topic also carries the page's own date, `source_date`, with
`date_kind` recording how trustworthy it is:
  modified  — the page states when it was last revised (JSON-LD dateModified,
              article:modified_time, …). This is the one that orders updates.
  published — only an original publication date was found.
  site      — no per-page date at all; the HTTP Last-Modified of the document.
              Static sites redeploy every page at once, so this is a site build
              stamp, not evidence that this topic changed.
  (null)    — nothing found; consumers fall back to last_changed/first_seen.
"""
from __future__ import annotations

import hashlib
import re
import sqlite3
from datetime import date, timedelta
from pathlib import Path
from urllib.parse import urljoin, urlsplit

import httpx
from selectolax.parser import HTMLParser

from . import DEFAULT_DB
from .extract import extract_body
from .sources.article import UA, _get_html, fetch_body

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
  status       TEXT NOT NULL DEFAULT 'active',  -- 'active' | 'gone'
  source_date  TEXT,                       -- the page's OWN date (ISO), if stated
  date_kind    TEXT                        -- 'modified' | 'published' | 'site'
);
CREATE INDEX IF NOT EXISTS idx_cra_topic_source ON cra_topic(source);
CREATE INDEX IF NOT EXISTS idx_cra_topic_status ON cra_topic(status);
"""

#: Columns added after the table shipped; _conn() backfills them in place.
_ADDED_COLUMNS = {"source_date": "TEXT", "date_kind": "TEXT"}

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


# ── the page's own date ───────────────────────────────────────────────────
_MONTHS = {m: i for i, m in enumerate(
    ["jan", "feb", "mar", "apr", "may", "jun",
     "jul", "aug", "sep", "oct", "nov", "dec"], 1)}
_ISO_RE = re.compile(r"(\d{4})[-/](\d{1,2})[-/](\d{1,2})")
_TXT_RE = re.compile(r"([A-Za-z]{3,9})\.?\s+(\d{1,2}),?\s+(\d{4})")       # July 17, 2026
_TXT2_RE = re.compile(r"(\d{1,2})\s+([A-Za-z]{3,9})\.?,?\s+(\d{4})")     # 17 July 2026
_JSONLD = {"modified": re.compile(r'"dateModified"\s*:\s*"([^"]{4,40})"'),
           "published": re.compile(r'"datePublished"\s*:\s*"([^"]{4,40})"')}
#: <meta> keys, most authoritative first, mapped to the kind they stand for.
_META_KEYS = [
    ("article:modified_time", "modified"), ("og:updated_time", "modified"),
    ("datemodified", "modified"), ("last-modified", "modified"),
    ("revised", "modified"), ("dcterms.modified", "modified"),
    ("article:published_time", "published"), ("datepublished", "published"),
    ("date", "published"), ("dcterms.date", "published"),
]
#: Anything outside this window is a parse artefact (a nav "2015", a typo'd
#: year), not a real revision date.
_MIN_DATE = "2015-01-01"


def _iso(raw: str | None) -> str | None:
    """Normalise a date string to YYYY-MM-DD, or None if it isn't a sane date."""
    if not raw:
        return None
    s = " ".join(str(raw).split())
    y = mo = d = None
    m = _ISO_RE.search(s)
    if m:
        y, mo, d = (int(x) for x in m.groups())
    else:
        m = _TXT_RE.search(s)
        if m and m.group(1)[:3].lower() in _MONTHS:
            mo, d, y = _MONTHS[m.group(1)[:3].lower()], int(m.group(2)), int(m.group(3))
        else:
            m = _TXT2_RE.search(s)
            if m and m.group(2)[:3].lower() in _MONTHS:
                d, mo, y = int(m.group(1)), _MONTHS[m.group(2)[:3].lower()], int(m.group(3))
    if not y:
        return None
    try:
        out = date(y, mo, d).isoformat()
    except ValueError:
        return None
    # Tomorrow is still plausible (timezones); next month is not.
    if out < _MIN_DATE or out > (date.today() + timedelta(days=1)).isoformat():
        return None
    return out


def page_date(html: str, tree: HTMLParser | None = None) -> tuple[str | None, str | None]:
    """(ISO date, kind) stated by the page itself; (None, None) when it states none.

    JSON-LD wins over <meta>: on craevidence.com the JSON-LD block carries both
    dateModified and datePublished while trafilatura's metadata only surfaces
    the publication date, which is exactly the date that cannot order revisions.
    """
    if not html:
        return None, None
    for kind in ("modified", "published"):
        for raw in _JSONLD[kind].findall(html):
            iso = _iso(raw)
            if iso:
                return iso, kind
    tree = tree if tree is not None else HTMLParser(html)
    metas: dict[str, str] = {}
    for m in tree.css("meta"):
        a = m.attributes
        key = (a.get("property") or a.get("name") or a.get("itemprop") or "").strip().lower()
        val = (a.get("content") or "").strip()
        if key and val:
            metas.setdefault(key, val)
    for key, kind in _META_KEYS:
        iso = _iso(metas.get(key))
        if iso:
            return iso, kind
    return None, None


def http_last_modified(url: str, timeout: float = 15.0) -> str | None:
    """The document's HTTP Last-Modified as an ISO date (site build stamp)."""
    try:
        r = httpx.head(url, follow_redirects=True, timeout=timeout,
                       headers={"User-Agent": UA})
        lm = r.headers.get("last-modified")
        if not lm:
            return None
        from email.utils import parsedate_to_datetime
        return parsedate_to_datetime(lm).date().isoformat()
    except Exception:
        return None


def _page_title(tree: HTMLParser) -> str | None:
    h1 = tree.css_first("h1")
    if h1 and h1.text().strip():
        return " ".join(h1.text().split())[:160]
    t = tree.css_first("title")
    if t and t.text().strip():
        # drop the site-name suffix ("… · site" / "… | site")
        return " ".join(re.split(r"[·|]", t.text())[0].split())[:160]
    return None


def snapshot(url: str) -> tuple[str | None, str | None, str | None, str | None]:
    """Return (content_hash, page_title, source_date, date_kind).

    One fetch yields all four; the page's own <h1> is the authoritative title
    (discovery anchor text is only a fallback) and its own stated date is the
    authoritative revision time (our crawl date is only a fallback).
    content_hash is None when the body is too thin / unfetchable.
    """
    html = _get_html(url, 20.0)
    if not html:
        # last resort: stealth path for the hash, no title
        body = fetch_body(url)
        norm = " ".join((body or "").split())
        h = hashlib.sha256(norm.encode("utf-8")).hexdigest() if len(norm) >= 80 else None
        return h, None, None, None
    tree = HTMLParser(html)
    title = _page_title(tree)
    sdate, kind = page_date(html, tree)
    if not sdate:                       # no date on the page — fall back to the
        sdate = http_last_modified(url)  # document's HTTP build stamp
        kind = "site" if sdate else None
    body = extract_body(html, url=url) or ""
    norm = " ".join(body.split())
    h = hashlib.sha256(norm.encode("utf-8")).hexdigest() if len(norm) >= 80 else None
    return h, title, sdate, kind


# ── store ─────────────────────────────────────────────────────────────────
def _conn(db: Path) -> sqlite3.Connection:
    c = sqlite3.connect(str(db))
    c.row_factory = sqlite3.Row
    # A sync may run alongside a pipeline write (both from the dashboard), so
    # wait for the other writer instead of failing with "database is locked".
    c.execute("PRAGMA busy_timeout=30000")
    c.executescript(CRA_SCHEMA)
    have = {r["name"] for r in c.execute("PRAGMA table_info(cra_topic)").fetchall()}
    for col, decl in _ADDED_COLUMNS.items():        # in-place upgrade of old DBs
        if col not in have:
            c.execute(f"ALTER TABLE cra_topic ADD COLUMN {col} {decl}")
    c.commit()
    return c


def sync(db: Path = DEFAULT_DB, sites: list[str] | None = None,
         progress=None) -> dict:
    """Re-discover each site and reconcile the catalogue. Returns a report.

    `progress(done, total, note)` — optional callback, invoked once per topic
    (and while discovering, with total=0) so a UI can show a live bar.
    """
    sites = sites or list(SITES)
    conn = _conn(db)
    today = date.today().isoformat()
    rep = {"new": [], "updated": [], "unchanged": 0, "removed": [], "errors": []}
    seen: set[str] = set()

    def _tick(done, total, note=""):
        if progress is not None:
            progress(done, total, note)

    # Discover every site first so the per-topic phase has a real total.
    discovered: list[tuple[str, dict]] = []
    ok_sites: list[str] = []
    for sk in sites:
        _tick(0, 0, f"discover {sk}")
        try:
            topics = discover(sk)
        except Exception as e:
            rep["errors"].append(f"{sk} discover: {e}")
            continue
        ok_sites.append(sk)
        discovered.extend((sk, tp) for tp in topics)

    total = len(discovered)
    for i, (sk, tp) in enumerate(discovered):
        _tick(i, total, tp["title"] or tp["url"])
        seen.add(tp["url"])
        try:
            h, page_title, sdate, kind = snapshot(tp["url"])
        except Exception as e:                    # one bad page must not kill the run
            rep["errors"].append(f"{sk} {tp['url']}: {e}")
            continue
        title = page_title or tp["title"]      # page <h1> wins over anchor text
        tp = {**tp, "title": title, "source_date": sdate, "date_kind": kind}
        row = conn.execute("SELECT * FROM cra_topic WHERE url=?", (tp["url"],)).fetchone()
        if row is None:
            conn.execute(
                "INSERT INTO cra_topic(source,cluster,title,url,content_hash,"
                "first_seen,last_seen,last_changed,status,source_date,date_kind) "
                "VALUES(?,?,?,?,?,?,?,?,'active',?,?)",
                (sk, tp["cluster"], title, tp["url"], h, today, today, today, sdate, kind))
            rep["new"].append({**tp, "source": sk})
        else:
            changed = bool(h) and bool(row["content_hash"]) and h != row["content_hash"]
            # Never overwrite a stated date with nothing: a fetch that lost the
            # metadata must not erase what the page told us last time.
            if sdate is None:
                sdate, kind = row["source_date"], row["date_kind"]
                tp = {**tp, "source_date": sdate, "date_kind": kind}
            if changed:
                conn.execute(
                    "UPDATE cra_topic SET cluster=?,title=?,content_hash=?,"
                    "last_seen=?,last_changed=?,status='active',source_date=?,date_kind=? "
                    "WHERE url=?",
                    (tp["cluster"], tp["title"], h, today, today, sdate, kind, tp["url"]))
                rep["updated"].append({**tp, "source": sk})
            else:
                # keep the hash if this fetch failed (h is None) so we don't
                # lose the baseline; still refresh label/cluster/last_seen.
                conn.execute(
                    "UPDATE cra_topic SET cluster=?,title=?,last_seen=?,status='active',"
                    "source_date=?,date_kind=?"
                    + ("" if h is None else ",content_hash=COALESCE(content_hash,?)")
                    + " WHERE url=?",
                    ((tp["cluster"], tp["title"], today, sdate, kind, tp["url"]) if h is None
                     else (tp["cluster"], tp["title"], today, sdate, kind, h, tp["url"])))
                rep["unchanged"] += 1
        # Commit per topic: the loop is minutes long, and holding one write
        # transaction open would lock out a concurrent pipeline write (and lose
        # everything if the process exits mid-sync).
        conn.commit()
    _tick(total, total, "")

    # Topics we track for the synced sites but no longer see -> gone. Only sites
    # whose discovery succeeded may retire topics: a site that failed to load
    # tells us nothing about which of its topics still exist.
    if ok_sites:
        placeholders = ",".join("?" * len(ok_sites))
        for r in conn.execute(
                f"SELECT url,title,source FROM cra_topic "
                f"WHERE status='active' AND source IN ({placeholders})", ok_sites).fetchall():
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
        "SELECT source,cluster,title,url,first_seen,last_seen,last_changed,status,"
        "source_date,date_kind FROM cra_topic ORDER BY source,cluster,title").fetchall()]
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
