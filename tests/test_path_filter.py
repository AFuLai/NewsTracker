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


def test_rejects_site_structure_pages():
    """These were all summarised into fake news articles on the live site:
    etsi.org/legal-notice became 「ETSI 官方網站法律公告」, /site-map became
    「ETSI 網站導覽」, and three /membership/* pages became articles about
    corporate influence on standards."""
    for url in (
        "https://etsi.org/legal-notice",
        "https://etsi.org/site-map",
        "https://etsi.org/subcribe-news",
        "https://etsi.org/membership/large-corporations",
        "https://etsi.org/membership/contribution-classes",
        "https://etsi.org/resources/intellectual-property-rights",
        "https://etsi.org/expertise/policy-affairs",
        "https://example.com/about-us",
        "https://example.com/contact",
        "https://example.com/privacy-policy",
    ):
        assert not _looks_like_article(url), url


def test_structural_rule_does_not_eat_real_sections():
    """Regression guard: an earlier draft matched bare 'legal' and
    'newsletter' and wrongly rejected 7 live articles — The Register files
    real reporting under /legal/<date>/<slug> and OpenSSF publishes its
    CRA coverage under /newsletter/<date>/<slug>."""
    for url in (
        "https://theregister.com/legal/2026/06/25/european-commission-cloud-gatekeepers",
        "https://theregister.com/legal/2026/07/13/apple-accuses-openai",
        "https://openssf.org/newsletter/2026/05/28/openssf-newsletter-may",
        # whole-segment matching: these merely START with a structural word
        "https://example.com/member-states-adopt-cra",
        "https://example.com/about-the-cra-regulation-explained",
        "https://example.com/legal-experts-weigh-in-on-cra",
    ):
        assert _looks_like_article(url), url


def test_rejects_taxonomy_archives():
    """A tag/category/author/page archive lists articles, it never is one.
    Measured over the 6,632-row corpus: 11 such rows, none an article."""
    for url in (
        "https://complycra.eu/tag/privacy-by-design",
        "https://complycra.eu/tag/cyber-resilience-act/",
        "https://bleepingcomputer.com/author/bill-toulas",
        "https://example.com/category/regulation",
        "https://example.com/categories/regulation",
        "https://example.com/page/2",
    ):
        assert not _looks_like_article(url), url


def test_taxonomy_rule_does_not_eat_posts_filed_under_a_taxonomy():
    """WordPress also serves real posts as /category/<cat>/<post-slug>, so the
    archive rule is anchored at the end of the path."""
    for url in (
        "https://example.com/category/regulation/eu-adopts-cra-delegated-act",
        "https://example.com/tag/cra/why-the-deadline-moved",
        "https://example.com/author/jane-doe/how-cra-changes-oss",
        # 'tag'/'page' as part of a real slug, not a taxonomy segment
        "https://example.com/tagging-products-for-cra-compliance",
        "https://example.com/page-one-of-the-cra-guide",
    ):
        assert _looks_like_article(url), url


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
