"""Tests for the L5 English-mirror layer: translate parse, store columns,
render emission, and the rebuild_days backfill helper."""
import json
from pathlib import Path

import tracker.llm.translate as tr
from tracker.dedup import Store
from tracker.render import render_day


def test_translate_article_parses_json(monkeypatch):
    payload = {"title": "Splunk RCE patched",
               "summary": "Splunk fixed CVE-2026-20253, a critical RCE.",
               "tags": ["Splunk", "CVE-2026-20253", "RCE"]}
    monkeypatch.setattr(tr, "call", lambda *a, **k: json.dumps(payload))
    out = tr.translate_article(title="Splunk 修補", summary="修了 CVE-2026-20253",
                               tags=["Splunk", "網路釣魚"])
    assert out["title_en"] == "Splunk RCE patched"
    assert "CVE-2026-20253" in out["summary_en"]
    assert out["tags_en"] == ["Splunk", "CVE-2026-20253", "RCE"]


def test_translate_article_bad_json_is_safe(monkeypatch):
    monkeypatch.setattr(tr, "call", lambda *a, **k: "not json at all")
    out = tr.translate_article(title="x", summary="y", tags=[])
    assert out == {"title_en": "", "summary_en": "", "tags_en": []}


def test_store_i18n_columns_and_methods(tmp_path):
    store = Store(tmp_path / "a.sqlite")
    cols = [r[1] for r in store.conn.execute("PRAGMA table_info(articles)")]
    assert {"title_en", "summary_en", "tags_en"} <= set(cols)

    store.upsert_candidate(url="https://e.com/x", source="E", title="t",
                           date="2026-06-10", tracker="security")
    aid = store.conn.execute("SELECT id FROM articles").fetchone()["id"]
    store.update_summary(aid, title="標題", summary="摘要", category="重大事件",
                         tags=["A", "B"], date="2026-06-10")
    # ready + has summary, no summary_en yet → untranslated
    pend = store.list_untranslated(statuses=("ready", "written"))
    assert [r["id"] for r in pend] == [aid]

    store.update_translation(aid, title_en="Title", summary_en="Summary",
                             tags_en=["A", "B"])
    assert store.list_untranslated(statuses=("ready", "written")) == []
    row = store.conn.execute("SELECT title_en, tags_en FROM articles WHERE id=?",
                             (aid,)).fetchone()
    assert row["title_en"] == "Title" and row["tags_en"] == "A,B"


def test_render_day_emits_en_fields(tmp_path):
    rows = [{
        "id": 1, "trackers": "security", "category": "重大事件",
        "title": "中文標題", "summary": "中文摘要", "tags": "標籤A,標籤B",
        "title_en": "English Title", "summary_en": "English summary.",
        "tags_en": "TagA,TagB", "source": "Src", "url": "https://e.com/1",
    }]
    p = render_day(day="2026-06-10", rows=rows, out_dir=tmp_path,
                   allowed_categories=["重大事件"])
    body = Path(p).read_text(encoding="utf-8")
    assert "title_en:" in body and "English Title" in body
    assert "summary_en:" in body and "English summary." in body
    assert "tags_en:" in body and "TagA" in body


def test_render_day_omits_en_when_absent(tmp_path):
    rows = [{
        "id": 1, "trackers": "security", "category": "重大事件",
        "title": "中文標題", "summary": "中文摘要", "tags": "標籤A",
        "source": "Src", "url": "https://e.com/1",
    }]
    p = render_day(day="2026-06-11", rows=rows, out_dir=tmp_path,
                   allowed_categories=["重大事件"])
    body = Path(p).read_text(encoding="utf-8")
    assert "title_en:" not in body and "summary_en:" not in body
