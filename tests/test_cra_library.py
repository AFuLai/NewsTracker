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
    }
    monkeypatch.setattr(C, "discover",
                        lambda sk: state["topics"] if sk == "craevidence" else [])
    def fake_snapshot(url):
        return state["hash"][url.rsplit("/", 1)[-1]], "Title " + url[-1].upper()
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
