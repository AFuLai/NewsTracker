"""Acceptance tests for the OS tracker registration (by-platform categories)."""
from tracker import SEARCHINFOS
from tracker.config import load_tracker
from tracker.cross import STRONG_MARKERS, NARROW_DOMAINS
from tracker.render import CATEGORY_PRIORITY
from tracker.orchestrator import TRACKER_FETCH

OS_CATS = ["Linux", "Windows", "Apple", "Android", "重點關注"]


def test_os_registered():
    assert "os" in SEARCHINFOS


def test_os_searchinfo_shape():
    info = load_tracker("os")
    assert info.title == "作業系統追蹤"
    assert info.categories == OS_CATS
    assert len(info.entries) >= 15
    # NVD source is wired to the API fetcher
    nvd = [e for e in info.entries if e.domain == "nvd.nist.gov"]
    assert nvd and nvd[0].method == "API"
    # first KEYs are NVD-keyword-friendly platform terms
    assert [k.text for k in info.keys[:3]] == ["Linux kernel", "Microsoft Windows", "Android"]


def test_os_cross_signals():
    assert "os" in STRONG_MARKERS and "os" in NARROW_DOMAINS
    assert "Linux kernel" in STRONG_MARKERS["os"]
    assert "kernel.org" in NARROW_DOMAINS["os"]
    # must NOT carry the generic CVE- marker (that belongs to security)
    assert "CVE-" not in STRONG_MARKERS["os"]


def test_os_category_priority():
    for c in OS_CATS:
        assert c in CATEGORY_PRIORITY


def test_os_uses_default_fetch_config():
    # os has no special query-prefix/filter (relies on the L1 gate)
    assert "os" not in TRACKER_FETCH
