from datetime import date
from pathlib import Path

import pytest

from tracker import mergecheck


class FakeStore:
    def __init__(self, days):
        self.days = days

    def list_writable_for_day(self, d):
        return self.days.get(d, [])


def _row(i, title, source, raw=""):
    return {"id": i, "title": title, "source": source, "url": f"https://{source}/{i}",
            "summary": "s" * i, "raw_text": raw, "trackers": "security"}


def _write_day(out: Path, day: str, n: int):
    d = out / "data"
    d.mkdir(parents=True, exist_ok=True)
    items = "".join(f'  {{\n    id: "{day.replace("-", "")}-{i}",\n  }},\n' for i in range(n))
    (d / f"data-{day.replace('-', '')}.js").write_text(f"x = [\n{items}];\n", encoding="utf-8")


def test_default_range_is_last_week():
    assert mergecheck.default_range(date(2026, 11, 20)) == ("2026-11-14", "2026-11-20")


def test_check_reports_unmerged_rendered_day(tmp_path):
    rows = [_row(1, "Patch CVE-2026-1111 now", "a.com"),
            _row(2, "CVE-2026-1111 exploited", "b.com"),
            _row(3, "Something else entirely", "c.com")]
    store = FakeStore({"2026-11-19": rows, "2026-11-18": rows[2:]})
    _write_day(tmp_path, "2026-11-19", 3)   # rendered before the merge
    _write_day(tmp_path, "2026-11-18", 1)
    res = mergecheck.check(store, tmp_path, "2026-11-18", "2026-11-19")
    assert res["stale"] == ["2026-11-19"]
    day = {d["date"]: d for d in res["days"]}["2026-11-19"]
    assert day["rendered"] == 3 and day["clusters"] == 2 and day["pending"] == 1
    assert sorted(i["id"] for i in day["groups"][0]["items"]) == [1, 2]


@pytest.mark.parametrize("start,end", [("2026-11-19", "2026-11-18"), ("x", "2026-11-18"),
                                       ("2025-01-01", "2026-11-18")])
def test_check_rejects_bad_range(tmp_path, start, end):
    with pytest.raises(ValueError):
        mergecheck.check(FakeStore({}), tmp_path, start, end)


def test_apply_requires_dates(tmp_path):
    with pytest.raises(ValueError):
        mergecheck.apply(FakeStore({}), tmp_path, [])
