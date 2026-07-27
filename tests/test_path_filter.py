"""Listing URL filter: reject non-news sections that yield empty bodies.

308 of the DB's 369 "empty body after fetch" errors came from BleepingComputer
/tutorials/ pages — slug-shaped, so they passed the article heuristic, but
trafilatura extracts nothing from a how-to page.
"""
from tracker.sources.path import _looks_like_article


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
