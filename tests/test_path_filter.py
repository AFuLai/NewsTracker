"""Listing URL filter: reject non-news sections that yield empty bodies.

308 of the DB's 369 "empty body after fetch" errors came from BleepingComputer
/tutorials/ pages — slug-shaped, so they passed the article heuristic, but
trafilatura extracts nothing from a how-to page.
"""
from tracker.sources import path as path_mod
from tracker.sources.path import _looks_like_article, fetch_listing


def test_rejects_tutorial_sections():
    # The exact URLs that produced the repeated empty-body errors.
    assert not _looks_like_article(
        "https://www.bleepingcomputer.com/tutorials/how-to-access-the-dark-web-using-the-tor-browser")
    assert not _looks_like_article(
        "https://www.bleepingcomputer.com/tutorials/how-to-use-the-windows-registry-editor")


def test_rejects_other_non_news_sections():
    for url in (
        "https://example.com/forums/some-thread-123",
        "https://example.com/deals/best-vpn-deal-2026",
        "https://example.com/offers/spring-sale-2026",
        "https://example.com/glossary/what-is-ransomware",
        "https://example.com/how-to/harden-ssh",
    ):
        assert not _looks_like_article(url), url


def test_articles_under_the_listing_path_outrank_navigation(monkeypatch):
    """Navigation appears first in the DOM. Truncating to max_results before
    ranking filled the whole quota with menu entries and never reached the
    stories — ENISA's /news page has 55 article-shaped links whose 12 real
    articles all sort after the nav block, so at max_results=30 we collected
    zero of them and the source read as dead for 67 runs.
    """
    nav = "".join(
        f'<a href="/audience/section-{i}">Navigation entry number {i}</a>'
        for i in range(30))
    articles = "".join(
        f'<a href="/news/real-story-number-{i}">Real ENISA story number {i}</a>'
        for i in range(5))
    monkeypatch.setattr(path_mod, "_get_html", lambda url, timeout: f"<html>{nav}{articles}</html>")

    hits = fetch_listing(base_url="https://www.enisa.europa.eu", search_path="/news",
                         domain="enisa.europa.eu", max_results=30)

    under = [h for h in hits if "/news/real-story" in h.url]
    assert len(under) == 5, "every real article must survive truncation"
    # And they must come first, ahead of the navigation.
    assert all("/news/real-story" in h.url for h in hits[:5])


def test_ranking_does_not_drop_links_when_no_listing_path(monkeypatch):
    """With no search_path there is nothing to prefer — behaviour unchanged."""
    links = "".join(f'<a href="/2026/07/story-number-{i}">Story number {i} headline</a>'
                    for i in range(10))
    monkeypatch.setattr(path_mod, "_get_html", lambda url, timeout: f"<html>{links}</html>")
    hits = fetch_listing(base_url="https://example.com", domain="example.com", max_results=30)
    assert len(hits) == 10


def test_keeps_real_news_articles():
    """The filter must not eat legitimate news — including slugs that merely
    start with 'how-to' as part of the headline rather than a section."""
    for url in (
        "https://www.bleepingcomputer.com/news/security/new-ransomware-hits-eu-vendors",
        "https://example.com/how-to-secure-ssh-in-2026",       # slug, not a section
        "https://example.com/2026/07/27/cve-2026-1234-analysis",
        "https://source.android.com/docs/security/bulletin/2026-02-01",
    ):
        assert _looks_like_article(url), url
