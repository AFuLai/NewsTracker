from tracker.config import SearchInfo, Entry, Key, Category
from tracker.cross import belongs_to


def _eu_cra_info():
    return SearchInfo(
        title="EU CRA 追蹤",
        entries=[
            Entry(name="ENISA", url="https://www.enisa.europa.eu/", domain="enisa.europa.eu"),
            Entry(name="OpenSSF", url="https://openssf.org/", domain="openssf.org"),
        ],
        categories=["法令更新", "調和標準"],
        keys=[
            Key(text="EU Cyber Resilience Act delegated act"),
            Key(text="SBOM software bill of materials CRA requirement"),
            Key(text="open source software EU CRA steward obligation"),
        ],
    )


def test_belongs_via_narrow_domain():
    info = _eu_cra_info()
    narrow = {"enisa.europa.eu"}
    assert belongs_to(article_url="https://www.enisa.europa.eu/news/cra-update",
                      article_title="Random title",
                      article_tags=[], other=info, other_name="eu_cra",
                      narrow_domains=narrow)


def test_broad_domain_alone_not_enough():
    """THN appears in BOTH searchinfos; an unrelated THN article must NOT
    be auto-classed as eu_cra just by domain."""
    info = _eu_cra_info()
    assert not belongs_to(
        article_url="https://thehackernews.com/ransomware-news",
        article_title="LockBit hits hospitals", article_tags=["ransomware"],
        other=info, other_name="eu_cra", narrow_domains=None)


def test_belongs_via_strong_marker_in_title():
    info = _eu_cra_info()
    assert belongs_to(article_url="https://thehackernews.com/foo",
                      article_title="EU CRA 將強制 SBOM 揭露義務", article_tags=[],
                      other=info, other_name="eu_cra")


def test_belongs_via_token_overlap_with_keys():
    info = _eu_cra_info()
    # Tags overlap with the SBOM key tokens (sbom, software, bill, materials).
    assert belongs_to(article_url="https://example.com/article",
                      article_title="A vendor responds to new software bill of materials rules",
                      article_tags=["SBOM", "supply chain"],
                      other=info, other_name="eu_cra")


def test_does_not_belong():
    info = _eu_cra_info()
    # Pure ransomware story unrelated to CRA.
    assert not belongs_to(
        article_url="https://thehackernews.com/ransomware-x",
        article_title="LockBit ransomware hits hospitals",
        article_tags=["LockBit", "ransomware"],
        other=info, other_name="eu_cra")


def test_security_strong_marker_does_not_force_eu_cra():
    info = _eu_cra_info()
    assert not belongs_to(
        article_url="https://thehackernews.com/cve-x",
        article_title="CVE-2026-12345 RCE in some product",
        article_tags=["CVE-2026-12345"],
        other=info, other_name="eu_cra")
