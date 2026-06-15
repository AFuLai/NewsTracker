"""WP4 tests: auto-probe decision tree (mocked network) + persistence."""
import tempfile
from pathlib import Path

import tracker.probe as probe_mod
from tracker.probe import probe_source, probe_and_save
from tracker.methods import FEED, LISTING, SEARCH, ARCHIVE


def _patch(monkeypatch, *, html="", feed=None, links=None, snapshot=None,
           classify=None):
    monkeypatch.setattr(probe_mod, "_get_html", lambda url, **k: html)
    monkeypatch.setattr(probe_mod, "_discover_feed", lambda base, h: feed)
    monkeypatch.setattr(probe_mod, "_article_links", lambda base, h: links or [])
    monkeypatch.setattr(probe_mod, "stealth_fetch", lambda url, **k: "")
    import tracker.sources.wayback as wb
    monkeypatch.setattr(wb, "closest_snapshot", lambda url, **k: snapshot)
    if classify is not None:
        import tracker.llm.probe as lp
        monkeypatch.setattr(lp, "classify_page", lambda *a, **k: classify)


def test_probe_prefers_rss(monkeypatch):
    _patch(monkeypatch, html="<html>x</html>", feed="https://x.com/feed")
    v = probe_source("https://x.com", use_ollama=False)
    assert v["method"] == FEED and v["feed_url"] == "https://x.com/feed"
    assert v["confidence"] >= 0.9


def test_probe_listing_when_dense(monkeypatch):
    links = [f"https://x.com/article-{i}" for i in range(8)]
    _patch(monkeypatch, html="<html>links</html>", feed=None, links=links)
    v = probe_source("https://x.com", use_ollama=False)
    assert v["method"] == LISTING and "8 links" in v["note"]


def test_probe_ollama_archive(monkeypatch):
    # no feed, thin live page, ollama says js_shell->ARCHIVE
    _patch(monkeypatch, html="<html>thin</html>", feed=None, links=[],
           classify={"page_type": "js_shell", "suggested_method": ARCHIVE,
                     "confidence": 0.8})
    v = probe_source("https://x.com", use_ollama=True)
    assert v["method"] == ARCHIVE


def test_probe_wayback_when_thin(monkeypatch):
    _patch(monkeypatch, html="<html>thin</html>", feed=None, links=[],
           snapshot="https://web.archive.org/web/2026/https://x.com",
           classify={"page_type": "unknown", "suggested_method": "unknown",
                     "confidence": 0.0})
    v = probe_source("https://x.com", use_ollama=True)
    assert v["method"] == ARCHIVE and "wayback" in v["note"]


def test_probe_search_fallback(monkeypatch):
    _patch(monkeypatch, html="", feed=None, links=[], snapshot=None,
           classify={"page_type": "unknown", "suggested_method": "unknown",
                     "confidence": 0.0})
    v = probe_source("https://x.com", use_ollama=True)
    assert v["method"] == SEARCH


def test_probe_and_save_persists(monkeypatch):
    _patch(monkeypatch, html="<html>x</html>", feed="https://x.com/feed")
    store = __import__("tracker.dedup", fromlist=["Store"]).Store(
        Path(tempfile.mkdtemp()) / "t.sqlite")
    v = probe_and_save(store, "https://x.com", "X", "security", use_ollama=False)
    assert v["domain"] == "x.com"
    p = store.get_profile("x.com")
    assert p["method"] == FEED and p["feed_url"] == "https://x.com/feed"
    assert p["probe_note"] and p["probed_at"]
