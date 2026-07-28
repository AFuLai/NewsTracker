"""An organisation's root-level "about" area is not news.

Found while rescuing wrongly-skipped EU CRA articles: six enisa.europa.eu
`/about-enisa/*` pages were live on the site as EU CRA news, including
`/about-enisa/accounting-finance` summarised as 「ENISA 官方公布年度財務報告：
揭示其資金來源與支出結構」. Same class as the etsi.org/legal-notice junk that
`_STRUCTURAL_SEG_RE` was added for in v2.20 — that rule only knew the bare word
`about` and `about-us`, so `about-enisa` and `about-csa` walked past it.

The rule must stay narrow: `_STRUCTURAL_SEG_RE`'s own comment promises that a
headline like `/about-the-cra-regulation` is untouched.
"""
import pytest

from tracker.sources.path import _is_org_about_page, _looks_like_article


@pytest.mark.parametrize("path", [
    "/about-enisa/who-we-are",
    "/about-enisa/accounting-finance/accounting-finance",
    "/about-enisa/How-we-work",          # case-insensitive
    "/about-csa",
    "/about-csa/who-we-are",
    "/about-1",                          # stan4cra.eu
    "/about_us",                         # underscore variant
])
def test_org_about_pages_are_rejected(path):
    assert _is_org_about_page(path) is True


@pytest.mark.parametrize("path", [
    # The must-keep case named in _STRUCTURAL_SEG_RE's comment: a multi-word
    # headline that happens to start with "about-".
    "/about-the-cra-regulation",
    "/about-that-linux-kernel-bug",
    # Not the first segment — news slugs live under a date or a section.
    "/news/2026/07/about-that-linux-bug",
    "/blog/about-our-new-scanner",
    # Unrelated
    "/aboutface",
    "/news/enisa-publishes-cra-guidance",
    "",
])
def test_real_headlines_are_kept(path):
    assert _is_org_about_page(path) is False


def test_end_to_end_through_looks_like_article():
    assert _looks_like_article("https://enisa.europa.eu/about-enisa/who-we-are") is False
    assert _looks_like_article("https://csa.gov.sg/about-csa") is False
    assert _looks_like_article("https://csa.gov.sg/information-for") is False
    # still a normal article
    assert _looks_like_article(
        "https://enisa.europa.eu/news/enisa-publishes-cra-guidance") is True
    assert _looks_like_article("https://x.eu/about-the-cra-regulation") is True
