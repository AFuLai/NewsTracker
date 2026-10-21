"""TrackerStore.rangeOf / dateCounts (M4). Expected values hand-derived."""
from tests.test_ui_store import _run


def test_range_keys():
    out = _run("""const R = k => { const r = TrackerStore.rangeOf(k, '2026-10-21'); return r.from + '..' + r.to; };
      return ['today','7d','30d','90d','year','all','y2025','d2026-10-05','c2026-10-10_2026-10-01','junk'].map(R);""")
    assert out == ["2026-10-21..2026-10-21", "2026-10-15..2026-10-21", "2026-09-22..2026-10-21",
                   "2026-07-24..2026-10-21", "2026-01-01..2026-10-21", "0000-01-01..9999-12-31",
                   "2025-01-01..2025-12-31", "2026-10-05..2026-10-05", "2026-10-01..2026-10-10",
                   "2026-09-22..2026-10-21"]


def test_date_counts():
    out = _run("return TrackerStore.dateCounts([{_date:'a'},{_date:'b'},{_date:'a'}]);")
    assert out == {"a": 2, "b": 1}
