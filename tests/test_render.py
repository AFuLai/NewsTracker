"""Render helpers: JSON emitted into data-YYYYMMDD.js must be valid JS."""
from tracker.render import _tojson_unicode


def test_tojson_escapes_js_line_separators():
    # F-DATA-5: U+2028/U+2029 are raw line terminators inside a JS string on
    # pre-ES2019 engines, so a title/summary containing one must be escaped or
    # the whole day file fails to load.
    out = _tojson_unicode({"t": "a" + chr(0x2028) + "b" + chr(0x2029) + "c"})
    assert chr(0x2028) not in out and chr(0x2029) not in out
    assert chr(92) + "u2028" in out and chr(92) + "u2029" in out


def test_tojson_keeps_cjk_readable():
    # The whole point of the custom filter: CJK stays literal, not \uXXXX.
    out = _tojson_unicode({"t": "資安漏洞"})
    assert "資安漏洞" in out
