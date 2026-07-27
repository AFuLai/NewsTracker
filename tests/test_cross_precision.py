"""eu_cra admission precision.

Measured on the live corpus before this change: 165 eu_cra memberships, 69 of
them (42%) had nothing to do with the regulation. Attribution showed why —
markers that merely *co-occur* with the topic were treated as decisive:

    signal            total  relevant  noise
    1-narrow-domain       8         0      8   (100%)
    3-marker-tags        27         2     25   ( 93%)
    2-marker-title       14         9      5   ( 36%)
    0-category          106        77     29   ( 27%)

"SBOM" alone admitted 20 irrelevant articles and 1 relevant one.
"""
from tracker.config import SearchInfo
from tracker.cross import belongs_to

CATS = ["法令更新", "調和標準", "合規指引", "開源影響", "產業動態", "亞太對應", "研討活動"]


def _info() -> SearchInfo:
    return SearchInfo(title="EU CRA", entries=[], categories=list(CATS), keys=[])


def _belongs(title, tags=(), url="https://example.com/a-story-here",
            category=None, trackers=None, narrow=None) -> bool:
    return belongs_to(article_url=url, article_title=title, article_tags=list(tags),
                      other=_info(), other_name="eu_cra", article_category=category,
                      key_token_sets=[], narrow_domains=narrow,
                      article_trackers=trackers)


# ── contextual markers must not admit on their own ──────────────────────────

def test_sbom_alone_does_not_admit():
    """The single worst offender: 20 noise / 1 relevant."""
    assert not _belongs("GitLab 19.0推出SBOM相依性掃描：強化軟體供應鏈")
    assert not _belongs("Red Hat宣布VEX文件重大升級：優化安全數據生態")


def test_sbom_with_regulatory_context_still_admits():
    """SBOM *in a CRA/EU context* is exactly what this tracker wants."""
    assert _belongs("歐盟 CRA 要求製造商提供 SBOM：合規義務說明")
    assert _belongs("Cyber Resilience Act mandates SBOM for digital products")


def test_apac_body_names_need_context():
    """These were added for 'how ACSC/JPCERT responded to the CRA', but as bare
    markers they matched every routine advisory those bodies publish."""
    assert not _belongs("澳洲資安中心警告：全球CMS平台面臨大規模漏洞利用")
    assert not _belongs("印度車廠遭勒索軟體攻擊，資安事件警示產業警覺", tags=["CERT-In"])
    assert _belongs("ACSC 說明澳洲如何對應歐盟 CRA 的合規要求")


def test_linux_foundation_needs_context():
    assert not _belongs("Linux Foundation 成立 x402 基金會，標準化 AI 代理支付機制")
    assert _belongs("Linux Foundation 回應歐盟 CRA 開源例外條款的法令更新")


# ── decisive markers are unaffected ─────────────────────────────────────────

def test_decisive_markers_still_admit_alone():
    for t in ("歐盟通過《網路韌性法案》（CRA）新規定",
              "ETSI EN 303 645 draft published",
              "CEN/CENELEC JTC 13 progress on harmonised standards",
              "Commission adopts delegated act on conformity assessment"):
        assert _belongs(t), t


# ── narrow domain needs topical evidence for a topical tracker ──────────────

def test_peripheral_narrow_domain_needs_context():
    """etsi.org / csa.gov.sg / jpcert.or.jp were on the narrow list for their
    CRA response, but publish mostly routine material: measured 25/11, 11/0
    and 8/0 on topic respectively."""
    assert not _belongs("ETSI Mission Critical 10th Plugtests Report Unveiled",
                        url="https://www.etsi.org/newsroom/plugtests-report",
                        narrow={"etsi.org"})
    assert not _belongs("SAP發布多項重大漏洞修補：NetWeaver與Commerce Cloud受影響",
                        url="https://www.csa.gov.sg/alerts/sap", narrow={"csa.gov.sg"})
    assert _belongs("ETSI publishes harmonised standard supporting the Cyber Resilience Act",
                    url="https://www.etsi.org/newsroom/cra-standard", narrow={"etsi.org"})


def test_eu_official_domains_stay_decisive():
    """EU CRA bodies are definitional, not merely topical — everything they
    publish is in scope (digital-strategy 38/38, enisa 15/15 on topic)."""
    assert _belongs("Random title with no explicit wording",
                    url="https://www.enisa.europa.eu/news/some-update",
                    narrow={"enisa.europa.eu"})
    assert _belongs("Commission publishes new guidance",
                    url="https://digital-strategy.ec.europa.eu/en/news/x",
                    narrow={"digital-strategy.ec.europa.eu"})


# ── category signal: authoritative for own articles, not for borrowed ones ──

def test_category_admits_unconditionally_for_own_articles():
    """An article the eu_cra tracker itself owns stays in, even if the title
    carries no explicit regulatory wording."""
    assert _belongs("業界動態：某廠商推出新產品", category="產業動態",
                    trackers=["eu_cra"])


def test_category_requires_context_for_borrowed_articles():
    """eu_cra owns broad buckets like 產業動態, so a routine advisory that a
    security-tracker article got filed under would otherwise be pulled in."""
    assert not _belongs("Oracle 多產品群組曝出多重漏洞，建議修補",
                        category="產業動態", trackers=["security", "eu_cra"])
    assert _belongs("歐盟 CRA 合規期限逼近，產業界加速準備",
                    category="產業動態", trackers=["security", "eu_cra"])


def test_other_trackers_are_unaffected():
    """Only eu_cra has contextual markers configured; security/os keep the
    original decisive-marker behaviour."""
    from tracker.cross import CONTEXTUAL_MARKERS
    assert set(CONTEXTUAL_MARKERS) == {"eu_cra"}
