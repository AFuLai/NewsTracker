"""Render helpers: JSON emitted into data-YYYYMMDD.js must be valid JS."""
from tracker.render import _tojson_unicode, render_day


def test_render_day_id_is_stable_db_id(tmp_path):
    # F-DATA-1: the site id is the article's DB id, not its sorted position, so
    # inserting an older-dated item does not renumber the rest of the day.
    rows = [
        {"id": 4207, "title": "T1", "summary": "S1", "category": "x",
         "date": "2026-06-01", "trackers": "security"},
        {"id": 88, "title": "T2", "summary": "S2", "category": "x",
         "date": "2026-06-01", "trackers": "security"},
    ]
    render_day(day="2026-06-01", rows=rows, out_dir=tmp_path)
    js = (tmp_path / "data-20260601.js").read_text(encoding="utf-8")
    assert "20260601-4207" in js and "20260601-88" in js
    assert "20260601-001" not in js  # not position-based any more


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
