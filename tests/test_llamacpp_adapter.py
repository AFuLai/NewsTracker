"""WP9 — the local llama.cpp generation backend (_call_llamacpp).

All HTTP is mocked: these assert the request shape (llama-server /completion,
gemma turn markers, json_schema compiled to a grammar) and the fail-open
contract (a connection-level failure falls through to the ollama chain; a read
timeout or 5xx does not, matching _post_ollama's "this prompt, not this host").

The adapter uses /completion, NOT /v1/chat/completions: this model's chat
template injects a thinking channel that never yields the constrained JSON
(PLAN-v4 R-003)."""
import httpx
import pytest

import tracker.llm as llm


class _Resp:
    def __init__(self, payload):
        self._payload = payload

    def raise_for_status(self):
        return None

    def json(self):
        return self._payload


def _ok(content="OUT"):
    return {"content": content}


def test_llamacpp_success_hits_completion(monkeypatch):
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["url"] = url
        seen["json"] = json
        return _Resp(_ok('{"ok": 1}'))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    before = llm.STATS["llamacpp_ok"]
    out = llm.call("hi", backend="llamacpp")
    assert out == '{"ok": 1}'
    assert seen["url"].endswith("/completion")
    assert seen["json"]["temperature"] == 0.2
    # gemma turn markers wrap the prompt (no chat template on /completion)
    assert "<start_of_turn>user\nhi<end_of_turn>" in seen["json"]["prompt"]
    assert seen["json"]["prompt"].endswith("<start_of_turn>model\n")
    assert llm.STATS["llamacpp_ok"] == before + 1


def test_llamacpp_passes_schema_as_json_schema(monkeypatch):
    seen = {}
    schema = {"type": "object", "properties": {"x": {"type": "string"}},
              "required": ["x"]}

    def fake_post(url, json=None, timeout=None):
        seen["json"] = json
        return _Resp(_ok('{"x": "y"}'))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    llm.call("hi", backend="llamacpp", schema=schema)
    assert seen["json"]["json_schema"] == schema


def test_llamacpp_no_schema_sends_no_grammar(monkeypatch):
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["json"] = json
        return _Resp(_ok("plain"))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    out = llm.call("hi", backend="llamacpp", format_json=True)
    assert out == "plain"
    assert "json_schema" not in seen["json"]


def test_llamacpp_prepends_system_into_prompt(monkeypatch):
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["json"] = json
        return _Resp(_ok("OK"))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    llm.call("hi", backend="llamacpp", system="be terse")
    p = seen["json"]["prompt"]
    assert "be terse" in p and p.index("be terse") < p.index("hi")


def test_llamacpp_connection_failure_falls_back_to_ollama(monkeypatch):
    def boom(url, json=None, timeout=None):
        raise httpx.ConnectError("no server")

    monkeypatch.setattr(llm.httpx, "post", boom)
    monkeypatch.setattr(llm, "_call_ollama", lambda *a, **k: "OLLAMA-OUT")
    before = llm.STATS["llamacpp_fallback"]
    out = llm.call("hi", backend="llamacpp")
    assert out == "OLLAMA-OUT"
    assert llm.STATS["llamacpp_fallback"] == before + 1


def test_llamacpp_read_timeout_does_not_fall_back(monkeypatch):
    """A read timeout is this prompt, not a dead host: it propagates to the
    caller's degraded path rather than moving the whole run off llamacpp."""
    def slow(url, json=None, timeout=None):
        raise httpx.ReadTimeout("slow")

    monkeypatch.setattr(llm.httpx, "post", slow)
    monkeypatch.setattr(llm, "_call_ollama",
                        lambda *a, **k: pytest.fail("should not fall back"))
    before = llm.STATS["llamacpp_fallback"]
    with pytest.raises(httpx.ReadTimeout):
        llm.call("hi", backend="llamacpp")
    assert llm.STATS["llamacpp_fallback"] == before
