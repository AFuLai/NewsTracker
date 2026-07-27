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


# ---------------------------------------------------------------------------
# Signal 2 (STRONG_MARKERS) word-boundary matching.
#
# `_bare_info()` has no categories and no keys, so signals 0 and 3 can never
# fire — whatever these assertions see comes purely from marker matching.
# ---------------------------------------------------------------------------

def _bare_info():
    return SearchInfo(title="bare", entries=[], categories=[], keys=[])


def _hit(title, name, tags=None):
    return belongs_to(article_url="https://example.com/a", article_title=title,
                      article_tags=tags or [], other=_bare_info(),
                      other_name=name, narrow_domains=None)


def test_cra_marker_not_matched_inside_other_words():
    for title in ("Threats to democracy in the EU",
                  "Terracraft 2.0 ships new mod tools",
                  "Craig Federighi on privacy",
                  "Sacramento data centre outage"):
        assert not _hit(title, "eu_cra"), title


def test_cra_marker_still_matches_standalone():
    assert _hit("EU CRA enters into force", "eu_cra")
    assert _hit("New rules (CRA) explained", "eu_cra")
    assert _hit("cra compliance deadline", "eu_cra")          # case-insensitive
    assert _hit("Vendor ships CRA-ready firmware", "eu_cra")  # hyphen is a boundary
    assert _hit("update", "eu_cra", tags=["CRA"])             # tags blob too


def test_linux_marker_word_boundary():
    assert not _hit("LinuxFoundation publishes CRA guidance", "os")
    assert not _hit("GNU/Linuxisms in the codebase", "os")
    assert _hit("Linux kernel 6.9 released", "os")
    assert _hit("Linux 6.9 released", "os")
    assert _hit("A new linux distro appears", "os")


def test_linuxfoundation_no_space_is_not_os_but_linux_foundation_is_eu_cra():
    # The eu_cra marker is "Linux Foundation" (with a space).
    assert _hit("Linux Foundation on CRA stewardship", "eu_cra")
    assert not _hit("LinuxFoundation posts an update", "os")


def test_cve_marker_trailing_hyphen():
    assert _hit("CVE-2026-1234 exploited in the wild", "security")
    assert _hit("advisory", "security", tags=["CVE-2026-1234"])
    # Must not fire on a bare word "cve" with no identifier attached, nor
    # inside another token.
    assert not _hit("MYCVE-2026-1234 internal id", "security")


def test_short_high_collision_markers():
    assert not _hit("BIOS update breaks boot", "os")          # iOS inside BIOS
    assert not _hit("Kernelization of the problem", "os")     # kernel inside word
    assert not _hit("C2C marketplace launches", "security")   # C2 inside C2C
    assert not _hit("Adorable UX rewrite", "eu_cra")          # DORA inside word
    assert not _hit("Raptor engine test", "security")         # APT inside word
    assert _hit("iOS 19 patches an actively exploited bug", "os")
    assert _hit("C2 infrastructure seized", "security")
    assert _hit("DORA and the CRA overlap", "eu_cra")


def test_apt_marker_is_word_bounded():
    # "APT41" is a single token, so a word-bounded "APT" does not match it.
    # That is the intended trade-off: no false positives from "Raptor"/"adapt".
    assert not _hit("adapt your patching strategy", "security")
    assert _hit("APT group targets telecoms", "security")


def test_cjk_markers_still_substring_match():
    # No spaces anywhere in CJK text -> \b would never fire, so these must
    # stay plain substring matches.
    assert _hit("重大漏洞揭露與修補時程", "security")
    assert _hit("勒索軟體攻擊醫院", "security")
    assert _hit("大型企業資料外洩事件", "security")
    assert _hit("歐盟網路韌性法二級法規進度", "eu_cra")
    assert _hit("亞太對應措施盤點", "eu_cra")
    assert _hit("作業系統核心更新說明", "os")
    assert _hit("更新", "os", tags=["核心"])


def test_ascii_marker_adjacent_to_cjk_still_matches():
    """Regression: `\\b` uses unicode \\w, which matches Han characters, so
    `\\bWindows\\b` would NOT fire on "Windows代理程式". Real titles in this
    corpus glue ASCII product names straight onto CJK with no space."""
    assert _hit("Veeam修補兩大漏洞：Windows代理程式與Linux備份伺服器風險", "os")
    assert _hit("駭客利用新型Linux/Windows惡意程式攻擊亞太電信業者", "os")
    assert _hit("原生Windows工具遭濫用竊取信箱資料", "os")
    assert _hit("蘋果發布iOS更新", "os")
    assert _hit("研究人員揭露RCE漏洞細節", "security")
    assert _hit("歐盟CRA正式生效", "eu_cra")
    # ...while ASCII-on-ASCII gluing is still rejected.
    assert not _hit("LinuxFoundation談CRA治理", "os")


def test_multiword_markers_still_match():
    assert _hit("The Cyber Resilience Act explained", "eu_cra")
    assert _hit("ETSI EN 303 645 baseline revisited", "eu_cra")
    assert _hit("CEN/CENELEC JTC 13 work programme", "eu_cra")
    assert _hit("Towards a harmonised standard for CRA", "eu_cra")
    assert _hit("Patch Tuesday fixes 60 flaws", "os")
    assert _hit("Malware-as-a-Service crews expand", "security")
    assert _hit("Linux kernel LPE bug", "os")


def test_markers_are_precompiled_once():
    """belongs_to() is hot — matchers must be built at import time, not per call."""
    from tracker import cross
    for markers in cross.STRONG_MARKERS.values():
        for m in markers:
            assert m in cross._MARKER_MATCHERS
    # CJK -> str (substring), ASCII -> compiled pattern.
    assert cross._MARKER_MATCHERS["漏洞"] == "漏洞"
    assert hasattr(cross._MARKER_MATCHERS["CRA"], "search")
