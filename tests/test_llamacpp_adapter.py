"""WP9 — the local llama.cpp generation backend (_call_llamacpp).

All HTTP is mocked: these assert the request shape (OpenAI chat/completions,
json_schema response_format, temperature) and the fail-open contract (a
connection-level failure falls through to the ollama chain; a read timeout or
5xx does not, matching _post_ollama's "this prompt, not this host")."""
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


def _ok_payload(content="OUT"):
    return {"choices": [{"message": {"content": content}}]}


def test_llamacpp_success_hits_chat_completions(monkeypatch):
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["url"] = url
        seen["json"] = json
        return _Resp(_ok_payload('{"ok": 1}'))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    before = llm.STATS["llamacpp_ok"]
    out = llm.call("hi", backend="llamacpp")
    assert out == '{"ok": 1}'
    assert seen["url"].endswith("/v1/chat/completions")
    assert seen["json"]["temperature"] == 0.2
    assert seen["json"]["messages"] == [{"role": "user", "content": "hi"}]
    assert llm.STATS["llamacpp_ok"] == before + 1


def test_llamacpp_passes_schema_as_response_format(monkeypatch):
    seen = {}
    schema = {"type": "object", "properties": {"x": {"type": "string"}},
              "required": ["x"]}

    def fake_post(url, json=None, timeout=None):
        seen["json"] = json
        return _Resp(_ok_payload('{"x": "y"}'))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    llm.call("hi", backend="llamacpp", schema=schema)
    rf = seen["json"]["response_format"]
    assert rf["type"] == "json_schema"
    assert rf["json_schema"]["schema"] == schema


def test_llamacpp_format_json_without_schema(monkeypatch):
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["json"] = json
        return _Resp(_ok_payload("{}"))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    llm.call("hi", backend="llamacpp", format_json=True)
    assert seen["json"]["response_format"] == {"type": "json_object"}


def test_llamacpp_prepends_system_message(monkeypatch):
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["json"] = json
        return _Resp(_ok_payload("OK"))

    monkeypatch.setattr(llm.httpx, "post", fake_post)
    llm.call("hi", backend="llamacpp", system="be terse")
    assert seen["json"]["messages"][0] == {"role": "system", "content": "be terse"}
    assert seen["json"]["messages"][1] == {"role": "user", "content": "hi"}


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
