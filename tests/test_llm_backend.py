"""Tests for the selectable LLM backend (gemini with ollama fallback)."""
import tracker.llm as llm
from tracker.llm import gemini


def test_gemini_success(monkeypatch):
    monkeypatch.setattr(gemini, "ask", lambda *a, **k: '{"ok": 1}')
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "SHOULD-NOT-RUN")
    before = llm.STATS["gemini_ok"]
    out = llm.call("hi", format_json=True, backend="gemini")
    assert out == '{"ok": 1}'
    assert llm.STATS["gemini_ok"] == before + 1


def test_gemini_failure_falls_back_to_ollama(monkeypatch):
    def boom(*a, **k):
        raise RuntimeError("no chrome")
    monkeypatch.setattr(gemini, "ask", boom)
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "OLLAMA-OUT")
    before = llm.STATS["gemini_fallback"]
    out = llm.call("hi", backend="gemini")
    assert out == "OLLAMA-OUT"
    assert llm.STATS["gemini_fallback"] == before + 1


def test_ollama_backend_does_not_touch_gemini(monkeypatch):
    monkeypatch.setattr(gemini, "ask", lambda *a, **k: (_ for _ in ()).throw(AssertionError("gemini called")))
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "OK")
    assert llm.call("hi", backend="ollama") == "OK"


def test_resolve_default_backend(monkeypatch):
    monkeypatch.setattr(gemini, "available", lambda: True)
    assert llm.resolve_default_backend() == "gemini"
    monkeypatch.setattr(gemini, "available", lambda: False)
    assert llm.resolve_default_backend() == "ollama"


def test_gemini_prompt_wraps_markers(monkeypatch):
    seen = {}
    def fake_ask(prompt, **k):
        seen["prompt"] = prompt
        seen["markers"] = (k.get("start_marker"), k.get("end_marker"))
        return "BODY"
    monkeypatch.setattr(gemini, "ask", fake_ask)
    llm.call("PROMPT", format_json=True, backend="gemini")
    assert "PROMPT" in seen["prompt"] and llm._GEM_START in seen["prompt"]
    assert seen["markers"] == (llm._GEM_START, llm._GEM_END)
