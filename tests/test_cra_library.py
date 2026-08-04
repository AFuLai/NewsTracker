"""CRA reference-topic library: cluster assignment, discovery parsing, and the
new/updated/unchanged/gone reconciliation in sync()."""
from tracker import cra_library as C


# ── pure cluster assignment ────────────────────────────────────────────────
def test_cluster_craevidence():
    f = C._cluster_craevidence
    assert f("https://craevidence.com/cra-compliance/sbom") == "SBOM"
    assert f("https://craevidence.com/cra-compliance/sbom/hbom") == "SBOM"
    assert f("https://craevidence.com/cra-compliance/manufacturer") == "CRA Overview"
    assert f("https://craevidence.com/cra-compliance/supply-chain/white-label-oem") \
        == "Supply Chain & Third-party"
    assert f("https://craevidence.com/cra-compliance/machinery-regulation") == "Related Regulations"
    assert f("https://craevidence.com/cra-compliance/some-brand-new-slug") == "Other"


def test_cluster_cra_eu():
    f = C._cluster_cra_eu
    assert f("https://www.cyberresilienceact.eu/regulation.html") == "Reference Documents"
    assert f("https://www.cyberresilienceact.eu/guide-software.html") == "Guidance by Role"
    assert f("https://www.cyberresilienceact.eu/fast-check.html") == "Assessment Tools"
    assert f("https://www.cyberresilienceact.eu/tools.html") == "Assessment Tools"


# ── discovery keeps CTA-only URLs, prefers a real label ────────────────────
def test_discover_keeps_cta_only_url_and_prefers_real_title(monkeypatch):
    html = """
    <a href="/cra-compliance/sbom">Learn more →</a>
    <a href="/cra-compliance/sbom">SBOM</a>
    <a href="/cra-compliance/fast">Open the tool →</a>
    <a href="/pricing">Pricing</a>
    """
    monkeypatch.setattr(C, "_get_html", lambda url, timeout=25.0: html)
    topics = {t["url"]: t for t in C.discover("craevidence")}
    sbom = "https://craevidence.com/cra-compliance/sbom"
    fast = "https://craevidence.com/cra-compliance/fast"
    assert topics[sbom]["title"] == "SBOM"          # non-CTA label wins over "Learn more →"
    assert fast in topics                           # CTA-only URL is still kept
    assert "https://craevidence.com/pricing" not in topics   # off-topic excluded


# ── sync reconciliation: new / updated / unchanged / gone ──────────────────
def test_sync_lifecycle(tmp_path, monkeypatch):
    db = tmp_path / "t.sqlite"
    state = {
        "topics": [
            {"url": "https://craevidence.com/cra-compliance/a", "title": "A", "cluster": "SBOM"},
            {"url": "https://craevidence.com/cra-compliance/b", "title": "B", "cluster": "SBOM"},
        ],
        "hash": {"a": "h1", "b": "h1"},
        "date": {"a": "2026-06-01", "b": "2026-06-02"},
    }
    monkeypatch.setattr(C, "discover",
                        lambda sk: state["topics"] if sk == "craevidence" else [])
    def fake_snapshot(url):
        slug = url.rsplit("/", 1)[-1]
        return (state["hash"][slug], "Title " + slug.upper(),
                state["date"][slug], "modified")
    monkeypatch.setattr(C, "snapshot", fake_snapshot)

    # run 1 — both new
    r1 = C.sync(db, sites=["craevidence"])
    assert len(r1["new"]) == 2 and not r1["updated"] and not r1["removed"]

    # run 2 — b's content changes, a unchanged
    state["hash"]["b"] = "h2"
    r2 = C.sync(db, sites=["craevidence"])
    assert not r2["new"] and r2["unchanged"] == 1
    assert [t["url"].endswith("/b") for t in r2["updated"]] == [True]

    # run 3 — a disappears from discovery → gone
    state["topics"] = [state["topics"][1]]
    r3 = C.sync(db, sites=["craevidence"])
    assert len(r3["removed"]) == 1 and r3["removed"][0]["url"].endswith("/a")
    active = [t for t in C.list_topics(db)]
    assert {t["url"].rsplit("/", 1)[-1] for t in active} == {"b"}


# ── progress callback drives the dashboard's bar ───────────────────────────
def test_sync_reports_progress(tmp_path, monkeypatch):
    db = tmp_path / "t.sqlite"
    topics = [{"url": f"https://craevidence.com/cra-compliance/{s}", "title": s.upper(),
               "cluster": "SBOM"} for s in ("a", "b", "c")]
    monkeypatch.setattr(C, "discover", lambda sk: topics)
    monkeypatch.setattr(C, "snapshot", lambda url: ("h", "T", None, None))
    seen = []
    C.sync(db, sites=["craevidence"], progress=lambda d, t, n="": seen.append((d, t, n)))
    assert seen[0] == (0, 0, "discover craevidence")      # discovery, total unknown
    assert [(d, t) for d, t, _ in seen[1:]] == [(0, 3), (1, 3), (2, 3), (3, 3)]


# ── a site whose index fails must not retire that site's topics ────────────
def test_failed_discovery_does_not_mark_gone(tmp_path, monkeypatch):
    db = tmp_path / "t.sqlite"
    topics = [{"url": "https://craevidence.com/cra-compliance/a", "title": "A",
               "cluster": "SBOM"}]
    monkeypatch.setattr(C, "snapshot", lambda url: ("h", "A", "2026-07-01", "modified"))
    monkeypatch.setattr(C, "discover", lambda sk: topics)
    assert len(C.sync(db, sites=["craevidence"])["new"]) == 1

    def boom(sk):
        raise RuntimeError("empty index")
    monkeypatch.setattr(C, "discover", boom)
    rep = C.sync(db, sites=["craevidence"])
    assert rep["removed"] == [] and rep["errors"]         # error, but nothing retired
    assert [t["status"] for t in C.list_topics(db)] == ["active"]


# ── one unfetchable topic must not abort the whole sync ────────────────────
def test_topic_error_is_collected_not_fatal(tmp_path, monkeypatch):
    db = tmp_path / "t.sqlite"
    topics = [{"url": "https://craevidence.com/cra-compliance/a", "title": "A", "cluster": "SBOM"},
              {"url": "https://craevidence.com/cra-compliance/b", "title": "B", "cluster": "SBOM"}]
    monkeypatch.setattr(C, "discover", lambda sk: topics)
    def flaky(url):
        if url.endswith("/a"):
            raise RuntimeError("timeout")
        return "h", "B", None, None
    monkeypatch.setattr(C, "snapshot", flaky)
    rep = C.sync(db, sites=["craevidence"])
    assert len(rep["new"]) == 1 and rep["new"][0]["url"].endswith("/b")
    assert len(rep["errors"]) == 1 and "timeout" in rep["errors"][0]
    assert rep["removed"] == []                          # /a was seen, just unreadable


# ── the page's own date: parsing, precedence, persistence ──────────────────
def test_iso_normalises_the_formats_the_sites_use():
    assert C._iso("2026-07-03T00:00:00+00:00") == "2026-07-03"
    assert C._iso("2026/07/03") == "2026-07-03"
    assert C._iso("July 17, 2026") == "2026-07-17"
    assert C._iso("17 Jul 2026") == "2026-07-17"
    assert C._iso("Tue, 28 Jul 2026 04:41:51 GMT") == "2026-07-28"
    assert C._iso("") is None and C._iso(None) is None
    assert C._iso("not a date") is None
    assert C._iso("2026-13-40") is None          # impossible date
    assert C._iso("1999-01-01") is None          # implausibly old → parse artefact
    assert C._iso("2099-01-01") is None          # far future → parse artefact


def test_page_date_prefers_modified_over_published():
    html = """<html><head>
      <meta property="article:published_time" content="2026-01-02">
      <script type="application/ld+json">
        {"datePublished":"2026-05-08T00:00:00+00:00",
         "dateModified":"2026-07-03T00:00:00+00:00"}
      </script></head><body>x</body></html>"""
    assert C.page_date(html) == ("2026-07-03", "modified")


def test_page_date_falls_back_through_meta_then_nothing():
    pub_only = ('<html><head><script type="application/ld+json">'
                '{"datePublished":"2026-05-08"}</script></head></html>')
    assert C.page_date(pub_only) == ("2026-05-08", "published")
    meta = '<html><head><meta property="og:updated_time" content="2026-06-09"></head></html>'
    assert C.page_date(meta) == ("2026-06-09", "modified")
    meta_pub = '<html><head><meta name="date" content="2026-06-09"></head></html>'
    assert C.page_date(meta_pub) == ("2026-06-09", "published")
    assert C.page_date("<html><head></head><body>no dates</body></html>") == (None, None)
    assert C.page_date("") == (None, None)


def test_snapshot_uses_http_last_modified_when_the_page_is_undated(monkeypatch):
    monkeypatch.setattr(C, "_get_html",
                        lambda url, timeout: "<html><body>" + "x " * 100 + "</body></html>")
    monkeypatch.setattr(C, "extract_body", lambda html, url=None: "body " * 40)
    monkeypatch.setattr(C, "http_last_modified", lambda url, timeout=15.0: "2026-07-28")
    h, title, sdate, kind = C.snapshot("https://www.cyberresilienceact.eu/faq.html")
    assert h and (sdate, kind) == ("2026-07-28", "site")


def test_sync_stores_source_date_and_never_erases_it(tmp_path, monkeypatch):
    db = tmp_path / "t.sqlite"
    topics = [{"url": "https://craevidence.com/cra-compliance/a", "title": "A", "cluster": "SBOM"}]
    monkeypatch.setattr(C, "discover", lambda sk: topics)
    monkeypatch.setattr(C, "snapshot", lambda url: ("h1", "A", "2026-06-24", "modified"))
    rep = C.sync(db, sites=["craevidence"])
    assert rep["new"][0]["source_date"] == "2026-06-24"
    row = C.list_topics(db)[0]
    assert (row["source_date"], row["date_kind"]) == ("2026-06-24", "modified")

    # the site revises the page: hash and stated date both move
    monkeypatch.setattr(C, "snapshot", lambda url: ("h2", "A", "2026-07-20", "modified"))
    rep = C.sync(db, sites=["craevidence"])
    assert rep["updated"][0]["source_date"] == "2026-07-20"
    assert C.list_topics(db)[0]["source_date"] == "2026-07-20"

    # a later fetch loses the metadata → keep what the page told us before
    monkeypatch.setattr(C, "snapshot", lambda url: ("h2", "A", None, None))
    C.sync(db, sites=["craevidence"])
    row = C.list_topics(db)[0]
    assert (row["source_date"], row["date_kind"]) == ("2026-07-20", "modified")


# ── complycra.eu (read through the WordPress REST API) ─────────────────────
_WP = {
    "posts": [
        {"link": "https://complycra.eu/cyber-resilience-act-cra-vs-nis2/",
         "title": {"rendered": "CRA vs NIS2: Similarities &#038; Differences"},
         "modified": "2026-03-30T03:53:02", "content": {"rendered": "<p>" + "body " * 40 + "</p>"}},
        {"link": "https://complycra.eu/cra-fines/",
         "title": {"rendered": "CRA fines: How much"},
         "modified": "2026-07-30T09:00:00", "content": {"rendered": "<p>" + "fines " * 40 + "</p>"}},
    ],
    "pages": [
        {"link": "https://complycra.eu/cra-scope-assessment-tool/",
         "title": {"rendered": "CRA Scope Assessment Tool"},
         "modified": "2026-06-12T00:00:00", "content": {"rendered": "<p>" + "tool " * 40 + "</p>"}},
        # boilerplate that must not enter the catalogue
        {"link": "https://complycra.eu/privacy-statement-uk/", "title": {"rendered": "Privacy"},
         "modified": "2025-05-21T00:00:00", "content": {"rendered": "x"}},
        {"link": "https://complycra.eu/cookie-policy-eu/", "title": {"rendered": "Cookies"},
         "modified": "2025-05-21T00:00:00", "content": {"rendered": "x"}},
        {"link": "https://complycra.eu/", "title": {"rendered": "Comply with CRA"},
         "modified": "2026-06-24T00:00:00", "content": {"rendered": "x"}},
        {"link": "https://complycra.eu/cra-stories-and-news/", "title": {"rendered": "Stories"},
         "modified": "2026-06-12T00:00:00", "content": {"rendered": "x"}},
        {"link": "https://complycra.eu/test/", "title": {"rendered": "TEST"},
         "modified": "2026-03-26T00:00:00", "content": {"rendered": "x"}},
    ],
}


def test_discover_complycra_skips_boilerplate_and_clusters_topics(monkeypatch):
    monkeypatch.setattr(C, "_wp_items", lambda kind: _WP[kind])
    topics = {t["url"]: t for t in C.discover_complycra()}
    assert set(topics) == {
        "https://complycra.eu/cyber-resilience-act-cra-vs-nis2",
        "https://complycra.eu/cra-fines",
        "https://complycra.eu/cra-scope-assessment-tool"}     # legal/home/index/test dropped
    assert topics["https://complycra.eu/cyber-resilience-act-cra-vs-nis2"]["cluster"] \
        == "Related Regulations"
    assert topics["https://complycra.eu/cra-scope-assessment-tool"]["cluster"] == "Assessment Tools"
    assert topics["https://complycra.eu/cra-fines"]["cluster"] == "CRA Overview"
    # HTML entities in the API's rendered title are decoded
    assert topics["https://complycra.eu/cyber-resilience-act-cra-vs-nis2"]["title"] \
        == "CRA vs NIS2: Similarities & Differences"


def test_snapshot_complycra_uses_the_modified_date_and_body_hash(monkeypatch):
    monkeypatch.setattr(C, "_wp_items", lambda kind: _WP[kind])
    C.discover_complycra()                       # warms the per-run cache
    h, title, sdate, kind = C.snapshot_complycra("https://complycra.eu/cra-fines")
    assert h and (title, sdate, kind) == ("CRA fines: How much", "2026-07-30", "modified")
    # a different body must hash differently
    h2, *_ = C.snapshot_complycra("https://complycra.eu/cyber-resilience-act-cra-vs-nis2")
    assert h2 != h


def test_snapshot_complycra_requeries_on_a_cache_miss(monkeypatch):
    monkeypatch.setattr(C, "_wp_items", lambda kind: _WP[kind])
    C.discover_complycra()
    C._COMPLYCRA_CACHE.clear()                   # e.g. sync() called without discovery
    asked = []

    class _Resp:
        def __init__(self, data): self._d = data
        def raise_for_status(self): pass
        def json(self): return self._d

    def fake_get(url, params=None, **kw):
        asked.append((url, params["slug"]))
        kind = url.rsplit("/", 1)[-1]
        return _Resp([i for i in _WP[kind]
                      if i["link"].rstrip("/").endswith(params["slug"])])
    monkeypatch.setattr(C.httpx, "get", fake_get)
    h, title, sdate, kind = C.snapshot_complycra("https://complycra.eu/cra-fines")
    assert (title, sdate) == ("CRA fines: How much", "2026-07-30") and h
    assert asked and asked[0][1] == "cra-fines"


# ── ETSI Labs STAN4CRA (standards drafts, read through the GitLab API) ─────
_PROJECTS = [
    {"id": 411, "name": "EN 304 617 Browser", "path": "en-304-617",
     "web_url": "https://labs.etsi.org/rep/stan4cra/en-304-617",
     "last_activity_at": "2026-07-30T08:40:41.216Z"},
    {"id": 431, "name": "EN 4000X Hardware devices with security boxes", "path": "en-4000x",
     "web_url": "https://labs.etsi.org/rep/stan4cra/en-4000x",
     "last_activity_at": "2026-01-22T13:56:16.820Z"},
]


def _fake_gitlab(calls=None, commits=True):
    def gl(path, timeout=25.0):
        if calls is not None:
            calls.append(path)
        if path.startswith("groups/"):
            return _PROJECTS
        if "/repository/commits" in path:
            if not commits:
                raise RuntimeError("404 no commits")
            return [{"id": "aee6241a" * 5, "committed_date": "2026-07-30T08:40:41.000+00:00"}]
        pid = path.rsplit("/", 1)[-1]           # projects/<url-encoded path>
        return next(p for p in _PROJECTS if p["path"] in pid)
    return gl


def test_discover_stan4cra_lists_one_topic_per_draft(monkeypatch):
    monkeypatch.setattr(C, "_gitlab", _fake_gitlab())
    topics = C.discover_stan4cra()
    assert [t["title"] for t in topics] == ["EN 304 617 Browser",
                                            "EN 4000X Hardware devices with security boxes"]
    assert {t["cluster"] for t in topics} == {"Standards Drafts"}
    assert topics[0]["url"] == "https://labs.etsi.org/rep/stan4cra/en-304-617"


def test_snapshot_stan4cra_uses_the_head_commit(monkeypatch):
    calls = []
    monkeypatch.setattr(C, "_gitlab", _fake_gitlab(calls))
    h, title, sdate, kind = C.snapshot_stan4cra("https://labs.etsi.org/rep/stan4cra/en-304-617")
    assert h == "aee6241a" * 5                       # the commit id IS the hash
    assert (title, sdate, kind) == ("EN 304 617 Browser", "2026-07-30", "modified")
    assert calls[0] == "projects/stan4cra%2Fen-304-617"   # path is URL-encoded


def test_snapshot_stan4cra_falls_back_to_last_activity(monkeypatch):
    monkeypatch.setattr(C, "_gitlab", _fake_gitlab(commits=False))
    h, title, sdate, kind = C.snapshot_stan4cra("https://labs.etsi.org/rep/stan4cra/en-4000x")
    assert h and (sdate, kind) == ("2026-01-22", "modified")


def test_sync_routes_stan4cra_through_its_own_snapshot(tmp_path, monkeypatch):
    """A site with custom callables must not fall back to the HTML path."""
    monkeypatch.setattr(C, "_gitlab", _fake_gitlab())
    def boom(url):
        raise AssertionError("the generic page snapshot must not be used here")
    monkeypatch.setattr(C, "snapshot", boom)
    rep = C.sync(tmp_path / "t.sqlite", sites=["stan4cra"])
    assert len(rep["new"]) == 2 and not rep["errors"]
    rows = {r["title"]: r for r in C.list_topics(tmp_path / "t.sqlite")}
    assert rows["EN 304 617 Browser"]["source_date"] == "2026-07-30"
    assert rows["EN 304 617 Browser"]["source"] == "stan4cra"


def test_conn_adds_the_date_columns_to_an_existing_table(tmp_path):
    import sqlite3
    db = tmp_path / "old.sqlite"
    legacy = sqlite3.connect(str(db))
    legacy.execute("""CREATE TABLE cra_topic (
      id INTEGER PRIMARY KEY AUTOINCREMENT, source TEXT NOT NULL, cluster TEXT,
      title TEXT, url TEXT UNIQUE NOT NULL, content_hash TEXT,
      first_seen TEXT NOT NULL, last_seen TEXT NOT NULL, last_changed TEXT,
      status TEXT NOT NULL DEFAULT 'active')""")
    legacy.execute("INSERT INTO cra_topic(source,url,first_seen,last_seen,status) "
                   "VALUES('craevidence','u','2026-01-01','2026-01-01','active')")
    legacy.commit(); legacy.close()

    rows = C.list_topics(db)          # goes through _conn → migration
    assert rows[0]["source_date"] is None and rows[0]["date_kind"] is None
