"""Tests for L6 language detection and the zh/en repair paths built on it.

The bug these pin down: a Korean or Japanese article was summarized in its own
language and stored in the Chinese column, then mirrored into the English column
untranslated. Detection has to be sharp in both directions — flag genuinely
foreign text, but never flag a Chinese summary that merely quotes a katakana
product name or an English CVE reference.
"""
import json

import pytest

import tracker.llm.summarize as sm
import tracker.llm.translate as tr
from tracker.dedup import Store
from tracker.llm.lang import (detect, is_chinese, is_english, needs_zh_repair,
                              source_lang)

KO_TITLE = "지니언스, EDR 및 통합 보안 솔루션 시장 성장 주도"
KO_SUMMARY = ("지니언스는 AI 기반 보안 위협 증가에 힘입어 EDR 및 통합 보안 솔루션 시장의 "
              "폭발적 수요 증가를 바탕으로 실적 호조를 기록했습니다.")
JA_TITLE = "国家サイバー統括室（NCO）、NISCの名を騙る不審な電話が確認されています"
ZH_SUMMARY = ("Splunk 修補 CVE-2026-20253 遠端程式碼執行漏洞，CVSS 9.8 分，"
              "建議立即升級至 9.2.1 版以避免遭攻擊者利用。")
EN_SUMMARY = ("Splunk patched CVE-2026-20253, a critical RCE rated CVSS 9.8; "
              "upgrade to 9.2.1 immediately.")


@pytest.mark.parametrize("text,expected", [
    (KO_SUMMARY, "ko"),
    (KO_TITLE, "ko"),
    (JA_TITLE, "ja"),
    ("ご利用にあたって", "ja"),
    ("情報セキュリティ関係省庁等", "ja"),
    (ZH_SUMMARY, "zh"),
    (EN_SUMMARY, "latin"),
    ("Das BSI warnt vor einer kritischen Schwachstelle in der Software.", "latin"),
    ("Роскомнадзор сообщил об утечке персональных данных пользователей.", "ru"),
    # Too little to judge — must not be condemned as foreign.
    ("N/A", "unknown"),
    ("", "unknown"),
    ("CVE-2026-1234", "unknown"),
])
def test_detect(text, expected):
    assert detect(text) == expected


def test_chinese_quoting_a_katakana_term_is_still_chinese():
    """The false positive that a naive any-kana rule would produce."""
    text = ("研究人員發現日本廠商的ランサムウェア對策不足，建議強化端點防護與備份機制，"
            "避免資料遭到加密勒索，並定期演練還原流程。")
    assert detect(text) == "zh"
    assert is_chinese(text)
    assert needs_zh_repair(text) is None


def test_english_quoting_a_chinese_name_is_still_english():
    text = ("Taiwanese vendor 趨勢科技 patched CVE-2026-1111 in its endpoint agent; "
            "administrators should upgrade before the exploit is weaponized.")
    assert is_english(text)


def test_english_glossing_korean_terms_is_still_english():
    """Hangul with no han around it must not read as Korean: an English summary
    that glosses 인감도장 has hangul as 100% of its (tiny) CJK share."""
    text = ("The article stresses that protecting personal information is a matter "
            "of habit rather than technology, with advice on storing personal seals "
            "(인감도장) and seal certificates (인감증명서) separately, and on "
            "reporting a lost seal at a community centre (주민센터).")
    assert detect(text) == "latin"
    assert is_english(text)


def test_chinese_glossing_korean_terms_is_still_chinese():
    text = ("本文強調資安與個人資訊保護的重點在於「習慣」而非技術，特別針對印鑑（인감도장）"
            "與印鑑證明書（인감증명서）的保管建議，並提醒遺失時應立即到社區中心（주민센터）"
            "辦理印鑑變更申報，使舊印鑑失效。")
    assert detect(text) == "zh"


def test_needs_zh_repair_flags_foreign_and_english():
    assert needs_zh_repair(KO_TITLE, KO_SUMMARY) == "ko"
    assert needs_zh_repair(JA_TITLE) == "ja"
    assert needs_zh_repair("", EN_SUMMARY) == "latin"
    assert needs_zh_repair("標題", ZH_SUMMARY) is None


def test_a_korean_title_is_not_masked_by_a_chinese_summary():
    """What the first backfill missed: judging the fields jointly let a correct
    Chinese summary carry an untranslated Korean title through the audit."""
    ko_title = "아마노코리아-바이온에버，簽署AI基礎停車與充電整合移動平台共同開發MOU"
    assert needs_zh_repair(ko_title, ZH_SUMMARY) == "ko"


def test_korean_tags_behind_a_chinese_article_are_flagged():
    tags = ["지니언스", "EDR", "NAC", "양자내성암호", "제로트러스트"]
    assert needs_zh_repair("標題", ZH_SUMMARY, tags) == "ko"


def test_one_korean_proper_noun_among_translated_tags_is_accepted():
    """The tag list is otherwise translated; 지니언스 is the company's name, the
    same kind of survivor as "Splunk" in a Chinese tag list. Flagging it would
    make the audit re-translate this row on every single run, forever."""
    tags = ["지니언스", "EDR", "NAC", "MDR", "量子抗性加密", "零信任"]
    assert needs_zh_repair("標題", ZH_SUMMARY, tags) is None


def test_source_lang_announces_the_foreign_field_not_the_majority():
    """Otherwise the repair prompt reads "translate this Chinese into Chinese"
    and the model has no reason to touch the Korean title."""
    ko_tags = ["지니언스", "양자내성암호", "제로트러스트"]
    assert source_lang("標題", ZH_SUMMARY, ko_tags) == "ko"
    assert source_lang(JA_TITLE, ZH_SUMMARY, ["EDR"]) == "ja"
    assert source_lang("標題", ZH_SUMMARY, ["Splunk", "RCE"]) == "zh"


def test_a_product_name_heavy_chinese_title_is_not_flagged():
    """The opposite error: a Chinese headline may be almost entirely Latin
    product names, and must not be mistaken for untranslated English."""
    title = "Google 發布 Android 17 QPR1 Beta 5，Pixel 10 Pro Fold 預覽 Gemini"
    assert detect(title) == "latin"          # on its own it does look Latin …
    assert needs_zh_repair(title, ZH_SUMMARY) is None   # … but the record is zh


# ── L5: the translator verifies its own output language ──────────────────────

def test_translate_article_retries_when_output_stays_korean(monkeypatch):
    replies = [
        json.dumps({"title": KO_TITLE, "summary": KO_SUMMARY, "tags": ["EDR"]}),
        json.dumps({"title": "Genians leads EDR market",
                    "summary": "Genians reported strong results on booming demand "
                               "for EDR and integrated security suites.",
                    "tags": ["EDR"]}),
    ]
    monkeypatch.setattr(tr, "call", lambda *a, **k: replies.pop(0))
    out = tr.translate_article(title=KO_TITLE, summary=KO_SUMMARY, tags=["EDR"])
    assert out["title_en"] == "Genians leads EDR market"
    assert not replies, "the wrong-language answer should have triggered a retry"


def test_translate_article_gives_up_rather_than_store_korean(monkeypatch):
    monkeypatch.setattr(tr, "call", lambda *a, **k: json.dumps(
        {"title": KO_TITLE, "summary": KO_SUMMARY, "tags": ["EDR"]}))
    out = tr.translate_article(title=KO_TITLE, summary=KO_SUMMARY, tags=["EDR"])
    assert out == {"title_en": "", "summary_en": "", "tags_en": []}


def test_translate_to_chinese(monkeypatch):
    monkeypatch.setattr(tr, "call", lambda *a, **k: json.dumps(
        {"title": "Genians 主導 EDR 與整合式資安方案市場成長",
         "summary": ZH_SUMMARY, "tags": ["EDR", "端點防護"]}))
    out = tr.translate_to_chinese(title=KO_TITLE, summary=KO_SUMMARY, tags=["EDR"])
    assert out["summary"] == ZH_SUMMARY
    assert out["tags"] == ["EDR", "端點防護"]


def test_translate_to_chinese_gives_up_on_untranslated_output(monkeypatch):
    monkeypatch.setattr(tr, "call", lambda *a, **k: json.dumps(
        {"title": KO_TITLE, "summary": KO_SUMMARY, "tags": []}))
    out = tr.translate_to_chinese(title=KO_TITLE, summary=KO_SUMMARY, tags=[])
    assert out == {"title": "", "summary": "", "tags": []}


# ── L2: a foreign-language summary is repaired before it is returned ─────────

def test_summarize_repairs_a_korean_summary(monkeypatch):
    monkeypatch.setattr(sm, "call", lambda *a, **k: json.dumps(
        {"title": KO_TITLE, "summary": KO_SUMMARY,
         "category": "產業動態", "tags": ["EDR"]}))
    monkeypatch.setattr(tr, "call", lambda *a, **k: json.dumps(
        {"title": "Genians 主導 EDR 市場成長", "summary": ZH_SUMMARY,
         "tags": ["EDR", "端點防護"]}))
    out = sm.summarize_article(url="https://boannews.com/x", raw_text="본문",
                               categories=["產業動態"])
    assert out["src_lang"] == "ko" and out["repaired"] is True
    assert out["summary"] == ZH_SUMMARY
    assert out["title"] == "Genians 主導 EDR 市場成長"


def test_summarize_keeps_original_when_repair_fails(monkeypatch):
    """A Korean summary is bad; an empty one is worse (the row would vanish)."""
    monkeypatch.setattr(sm, "call", lambda *a, **k: json.dumps(
        {"title": KO_TITLE, "summary": KO_SUMMARY,
         "category": "產業動態", "tags": ["EDR"]}))
    monkeypatch.setattr(tr, "call", lambda *a, **k: "not json")
    out = sm.summarize_article(url="https://boannews.com/x", raw_text="본문",
                               categories=["產業動態"])
    assert out["summary"] == KO_SUMMARY and out["repaired"] is False
    assert out["src_lang"] == "ko"


def test_summarize_leaves_chinese_alone(monkeypatch):
    calls = []
    monkeypatch.setattr(sm, "call", lambda *a, **k: json.dumps(
        {"title": "Splunk 修補重大漏洞", "summary": ZH_SUMMARY,
         "category": "漏洞與威脅情報", "tags": ["Splunk"]}))
    monkeypatch.setattr(tr, "call", lambda *a, **k: calls.append(1) or "{}")
    out = sm.summarize_article(url="https://e.com/x", raw_text="body",
                               categories=["漏洞與威脅情報"])
    assert out["repaired"] is False and out["src_lang"] == "zh"
    assert calls == [], "a Chinese summary must not cost an extra model call"


# ── Store: repairing published text must not disturb the pipeline ────────────

def test_update_localized_keeps_status(tmp_path):
    store = Store(tmp_path / "a.sqlite")
    store.upsert_candidate(url="https://e.com/x", source="Boannews", title="t",
                           date="2026-08-04", tracker="security")
    aid = store.conn.execute("SELECT id FROM articles").fetchone()["id"]
    store.update_summary(aid, title=KO_TITLE, summary=KO_SUMMARY,
                         category="產業動態", tags=["EDR"], date="2026-08-04")
    store.mark_written([aid])

    store.update_localized(aid, title="Genians 主導 EDR 市場成長",
                           summary=ZH_SUMMARY, tags=["EDR", "端點防護"])
    row = store.conn.execute("SELECT * FROM articles WHERE id=?", (aid,)).fetchone()
    assert row["status"] == "written", "a text repair must not re-open a published row"
    assert row["summary"] == ZH_SUMMARY
    assert row["tags"] == "EDR,端點防護"


def test_list_summarized_includes_translated_rows(tmp_path):
    store = Store(tmp_path / "a.sqlite")
    store.upsert_candidate(url="https://e.com/x", source="S", title="t",
                           date="2026-08-04", tracker="security")
    aid = store.conn.execute("SELECT id FROM articles").fetchone()["id"]
    store.update_summary(aid, title="標題", summary=ZH_SUMMARY,
                         category="產業動態", tags=["A"], date="2026-08-04")
    store.update_translation(aid, title_en="T", summary_en=EN_SUMMARY, tags_en=["A"])
    # list_untranslated skips it (it has English); the audit must still see it.
    assert store.list_untranslated(statuses=("ready", "written")) == []
    assert [r["id"] for r in store.list_summarized(statuses=("ready", "written"))] == [aid]
