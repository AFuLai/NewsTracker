"""WP1 — schema-constrained output.

The point of the work package is that a wrong-shaped reply becomes
unrepresentable rather than repaired afterwards, so these tests check two
things: that the schema actually reaches ollama's `format` field, and that the
old repair paths are still there but now *count* themselves.
"""
import httpx
import pytest

import tracker.llm as llm
from tracker.llm import gemini


@pytest.fixture(autouse=True)
def _zero_stats():
    """Counters are process-global; isolate each test from the others."""
    before = dict(llm.STATS)
    yield
    llm.STATS.clear()
    llm.STATS.update(before)


class _FakeResponse:
    def __init__(self, text):
        self._text = text

    def raise_for_status(self):
        pass

    def json(self):
        return {"response": self._text}


def _capture_payload(monkeypatch, reply='{"ok":1}'):
    """Intercept the ollama HTTP POST and hand back the payload it would send."""
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["url"] = url
        seen["payload"] = json
        return _FakeResponse(reply)

    monkeypatch.setattr(httpx, "post", fake_post)
    return seen


# ── the schema reaches the wire ──────────────────────────────────────────────

def test_schema_goes_into_format_field(monkeypatch):
    seen = _capture_payload(monkeypatch)
    schema = {"type": "object", "properties": {"a": {"type": "string"}}}
    llm.call("hi", schema=schema)
    assert seen["payload"]["format"] == schema


def test_schema_supersedes_format_json(monkeypatch):
    # Both requested: the schema wins, because it already implies JSON and
    # ollama's `format` holds one value.
    seen = _capture_payload(monkeypatch)
    schema = {"type": "object"}
    llm.call("hi", format_json=True, schema=schema)
    assert seen["payload"]["format"] == schema


def test_no_schema_keeps_plain_json_mode(monkeypatch):
    seen = _capture_payload(monkeypatch)
    llm.call("hi", format_json=True)
    assert seen["payload"]["format"] == "json"


def test_no_schema_no_format_key(monkeypatch):
    seen = _capture_payload(monkeypatch)
    llm.call("hi")
    assert "format" not in seen["payload"]


def test_gemini_path_ignores_schema_but_keeps_json_hint(monkeypatch):
    # Gemini is driven through a browser UI: there is no grammar hook, so the
    # schema must not be smuggled into the prompt — but the "must be valid
    # JSON" instruction still has to appear, or the reply is unparseable.
    seen = {}

    def fake_ask(prompt, **k):
        seen["prompt"] = prompt
        return "BODY"

    monkeypatch.setattr(gemini, "ask", fake_ask)
    llm.call("PROMPT", backend="gemini", schema={"type": "object"})
    assert "合法 JSON" in seen["prompt"]
    assert "type" not in seen["prompt"].replace("PROMPT", "")


# ── the schema builders ──────────────────────────────────────────────────────

def test_category_schema_pins_this_trackers_enum():
    sch = llm.category_schema(["法令更新", "調和標準"])
    enum = sch["properties"]["category"]["enum"]
    assert enum == ["法令更新", "調和標準", "uncategorized"]
    assert set(sch["required"]) == {"title", "summary", "category", "tags"}


def test_category_schema_is_per_tracker():
    a = llm.category_schema(["x"])["properties"]["category"]["enum"]
    b = llm.category_schema(["y"])["properties"]["category"]["enum"]
    assert a != b


def test_gate_schema_requires_both_keys():
    item = llm.GATE_SCHEMA["properties"]["results"]["items"]
    # A reply of {"i": 3} with no verdict used to read as keep=True.
    assert set(item["required"]) == {"i", "keep"}
    assert item["properties"]["keep"]["type"] == "boolean"


# ── _coerce_category demoted to a counted fuse ───────────────────────────────

def test_exact_category_is_not_a_miss():
    llm.STATS["schema_miss"] = 0
    assert llm._coerce_category("法令更新", ["法令更新", "產業動態"]) == "法令更新"
    assert llm.STATS["schema_miss"] == 0


def test_uncategorized_is_in_the_enum_and_not_a_miss():
    # The model abstaining is it obeying the schema, not missing it.
    llm.STATS["schema_miss"] = 0
    assert llm._coerce_category("uncategorized", ["法令更新"]) == "uncategorized"
    assert llm.STATS["schema_miss"] == 0


def test_off_enum_category_counts_a_miss():
    llm.STATS["schema_miss"] = 0
    assert llm._coerce_category("法令更新（歐盟）", ["法令更新"]) == "法令更新"
    assert llm.STATS["schema_miss"] == 1


def test_empty_category_counts_a_miss():
    llm.STATS["schema_miss"] = 0
    assert llm._coerce_category("", ["法令更新"]) == "uncategorized"
    assert llm.STATS["schema_miss"] == 1


# ── parse fallbacks are counted, not silent ──────────────────────────────────

def test_summarize_parse_failure_counts_and_degrades(monkeypatch):
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "not json at all")
    llm.STATS["parse_fallback"] = 0
    out = llm.summarize_article(url="u", raw_text="body",
                                categories=["法令更新"], repair_language=False)
    assert llm.STATS["parse_fallback"] == 1
    assert out["category"] == "uncategorized"
    assert out["summary"] == "not json at all"


def test_gate_parse_failure_counts_and_fails_open(monkeypatch):
    from tracker.llm import gate
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "}{ broken")
    llm.STATS["parse_fallback"] = 0
    keep = gate._gate_batch("topic", [{"title": "a", "snippet": "s"},
                                      {"title": "b", "snippet": "s"}])
    # fail-open philosophy is unchanged — but now it leaves a trace.
    assert keep == [True, True]
    assert llm.STATS["parse_fallback"] == 1


def test_translate_parse_failure_counts(monkeypatch):
    from tracker.llm import translate
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "nope")
    llm.STATS["parse_fallback"] = 0
    out = translate.translate_article(title="t", summary="s")
    assert out["summary_en"] == ""
    assert llm.STATS["parse_fallback"] == 1


def test_bump_is_atomic_under_threads():
    # schema_miss/parse_fallback are asserted to be zero, so a dropped
    # increment under WP2's pool would read as a pass.
    import threading
    llm.STATS["schema_miss"] = 0
    threads = [threading.Thread(target=lambda: [llm.bump("schema_miss")
                                                for _ in range(500)])
               for _ in range(8)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    assert llm.STATS["schema_miss"] == 8 * 500
