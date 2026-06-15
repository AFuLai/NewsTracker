"""WP3 tests: L1 gate batch parsing/fallback, L3 review anti-hallucination."""
import json
from types import SimpleNamespace

import tracker.llm.gate as gate_mod
from tracker.llm.gate import run_gate, _gate_batch
from tracker.llm.review import review


def _info(categories):
    return SimpleNamespace(title="資安新聞", categories=categories)


# ── L3 review ────────────────────────────────────────────────────────────────

CATS = ["漏洞與威脅情報", "重大事件"]


def test_review_passes_grounded():
    body = "A flaw tracked as CVE-2026-9999 with CVSS 9.8 was found."
    res = {"title": "漏洞", "summary": "發現 CVE-2026-9999，CVSS 9.8 高危。",
           "category": "漏洞與威脅情報", "tags": ["x"]}
    ok, reason = review(res, body, _info(CATS))
    assert ok and reason is None


def test_review_rejects_fabricated_cve():
    body = "A vulnerability was found in the product."
    res = {"title": "漏洞", "summary": "這是 CVE-2026-1234 漏洞。",
           "category": "漏洞與威脅情報", "tags": []}
    ok, reason = review(res, body, _info(CATS))
    assert not ok and "CVE-2026-1234" in reason


def test_review_rejects_fabricated_cvss():
    body = "CVE-2026-9999 was disclosed today."
    res = {"title": "漏洞", "summary": "CVE-2026-9999，CVSS 9.8 嚴重。",
           "category": "漏洞與威脅情報", "tags": []}
    ok, reason = review(res, body, _info(CATS))
    assert not ok and "9.8" in reason  # CVE grounded, but CVSS invented


def test_review_rejects_empty_and_bad_category():
    info = _info(CATS)
    assert not review({"title": "", "summary": "x", "category": "漏洞與威脅情報"}, "b", info)[0]
    assert not review({"title": "t", "summary": "s", "category": "亂分類"}, "b", info)[0]
    # uncategorized is allowed
    assert review({"title": "t", "summary": "s no cve", "category": "uncategorized"}, "b", info)[0]


# ── L1 gate ──────────────────────────────────────────────────────────────────

def test_gate_batch_respects_keep_flags(monkeypatch):
    monkeypatch.setattr(gate_mod, "call",
        lambda *a, **k: json.dumps({"results": [
            {"i": 0, "keep": True}, {"i": 1, "keep": False}]}))
    keep = _gate_batch("topic", [{"title": "real cve"}, {"title": "privacy policy"}])
    assert keep == [True, False]


def test_gate_batch_fallback_all_keep_on_error(monkeypatch):
    monkeypatch.setattr(gate_mod, "call",
        lambda *a, **k: (_ for _ in ()).throw(RuntimeError("ollama down")))
    keep = _gate_batch("topic", [{"title": "a"}, {"title": "b"}, {"title": "c"}])
    assert keep == [True, True, True]


def test_gate_batch_bare_list(monkeypatch):
    monkeypatch.setattr(gate_mod, "call",
        lambda *a, **k: json.dumps([{"i": 0, "keep": False}]))
    keep = _gate_batch("topic", [{"title": "junk"}])
    assert keep == [False]


def test_run_gate_returns_kept_and_gated(monkeypatch):
    rows = [{"id": 10, "title": "real", "raw_text": "s"},
            {"id": 11, "title": "footer", "raw_text": "s"}]
    monkeypatch.setattr(gate_mod, "call",
        lambda *a, **k: json.dumps({"results": [
            {"i": 0, "keep": True}, {"i": 1, "keep": False}]}))
    kept, gated = run_gate(rows, "security", _info(CATS))
    assert kept == [10]
    assert [g[0] for g in gated] == [11]
