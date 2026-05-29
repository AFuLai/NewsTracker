from tracker.llm import _coerce_category

ALLOWED = ["法規與標準", "漏洞與威脅情報", "供應鏈與開源安全", "重大事件", "前瞻技術"]


def test_exact_match_keeps():
    assert _coerce_category("漏洞與威脅情報", ALLOWED) == "漏洞與威脅情報"


def test_substring_match_maps_to_allowed():
    # Model emitted "產品更新與技術評測" — none of allowed appears as substring,
    # so should fall through to uncategorized.
    assert _coerce_category("產品更新與技術評測", ALLOWED) == "uncategorized"


def test_substring_match_allowed_in_raw():
    # Model padded with extras around an allowed name.
    assert _coerce_category("(漏洞與威脅情報) 補述", ALLOWED) == "漏洞與威脅情報"


def test_raw_in_allowed_short():
    # Model emitted short prefix that's a substring of an allowed name.
    assert _coerce_category("漏洞與威脅", ALLOWED) == "漏洞與威脅情報"


def test_empty_returns_uncategorized():
    assert _coerce_category("", ALLOWED) == "uncategorized"
    assert _coerce_category("漏洞", []) == "uncategorized"
