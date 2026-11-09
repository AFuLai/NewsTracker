"""The dashboard remembers the Summarize / Translate backend and the Gemini model
across launches (endpoints.json "llm"), next to the already-remembered endpoint.
conftest points hosts.CONFIG_PATH at a per-test temp file."""
import json

import tracker.ollama_hosts as hosts
from tracker.control import Controller
from tracker.web_dashboard import _apply_control


def _cfg():
    return {"since": "2026-11-01", "until": "2026-11-02", "trackers": ["security"],
            "all_trackers": ["security", "os"], "summarize_backend": "ollama",
            "translate_backend": "ollama", "gemini_model": "gemini-x"}


def test_empty_file_remembers_nothing():
    assert hosts.remembered_llm() == {}


def test_backend_switch_is_remembered_and_keeps_other_keys():
    hosts.CONFIG_PATH.write_text(json.dumps({"urls": ["http://a:1"], "preferred": "http://a:1"}), "utf-8")
    c = Controller(config=_cfg())
    ok, _ = _apply_control(c, {"cmd": "backend", "role": "translate", "backend": "gemini"})
    assert ok
    data = json.loads(hosts.CONFIG_PATH.read_text("utf-8"))
    assert data["llm"] == {"translate_backend": "gemini"}
    assert data["preferred"] == "http://a:1" and data["urls"] == ["http://a:1"]


def test_unknown_backend_is_not_remembered():
    c = Controller(config=_cfg())
    _apply_control(c, {"cmd": "backend", "role": "summarize", "backend": "bogus"})
    assert hosts.remembered_llm() == {}


def test_start_remembers_all_three():
    c = Controller(config=_cfg())
    cfg = dict(_cfg(), summarize_backend="gemini", gemini_model="gemini-y")
    ok, _ = _apply_control(c, {"cmd": "start", "config": cfg})
    assert ok
    assert hosts.remembered_llm() == {"summarize_backend": "gemini", "translate_backend": "ollama",
                                      "gemini_model": "gemini-y"}


def test_bad_values_filtered():
    hosts.CONFIG_PATH.write_text(json.dumps({"llm": {"summarize_backend": "  gemini ", "x": "y",
                                                     "gemini_model": "", "translate_backend": 3}}), "utf-8")
    assert hosts.remembered_llm() == {"summarize_backend": "gemini"}
    hosts.CONFIG_PATH.write_text(json.dumps({"llm": "nope"}), "utf-8")
    assert hosts.remembered_llm() == {}
