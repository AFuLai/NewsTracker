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
