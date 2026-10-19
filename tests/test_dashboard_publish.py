"""Publish (Firebase) action of the web dashboard: background, one at a time,
failures recorded. No network, no real firebase (deploy() is always stubbed)."""
from __future__ import annotations

import threading
import time

import tracker.deploy as deploy_mod
from tracker import web_dashboard as wd
from tracker.web_dashboard import WebReporter, _apply_control


def _reset():
    with wd._DEPLOY_LOCK:
        wd._DEPLOY.update(state="idle", channel="", message="",
                          started_at=0.0, finished_at=0.0)


def _wait_not_running(rep, timeout=2.0):
    end = time.time() + timeout
    while time.time() < end:
        if rep.snapshot()["deploy"]["state"] != "running":
            break
        time.sleep(0.01)
    return rep.snapshot()["deploy"]


def test_deploy_ok():
    _reset()
    rep = WebReporter()
    assert _apply_control(None, {"cmd": "deploy", "channel": "preview"}) == (True, "")
    d = _wait_not_running(rep)
    assert d["state"] == "ok"
    assert d["channel"] == "preview"
    assert d["message"] == "stubbed under test"
    assert d["finished_at"] >= d["started_at"] > 0


def test_second_deploy_refused_while_running(monkeypatch):
    _reset()
    gate, entered = threading.Event(), threading.Event()

    def slow(**_kw):
        entered.set()
        gate.wait(2)
        return "done"

    monkeypatch.setattr(deploy_mod, "deploy", slow)
    rep = WebReporter()
    try:
        assert _apply_control(None, {"cmd": "deploy"}) == (True, "")
        assert entered.wait(2)
        assert rep.snapshot()["deploy"]["state"] == "running"
        ok, msg = _apply_control(None, {"cmd": "deploy", "channel": "preview"})
        assert ok is False and msg
    finally:
        gate.set()
    assert _wait_not_running(rep)["state"] == "ok"


def test_deploy_error_recorded_as_failed(monkeypatch):
    _reset()

    def boom(**_kw):
        raise deploy_mod.DeployError("boom")

    monkeypatch.setattr(deploy_mod, "deploy", boom)
    rep = WebReporter()
    assert _apply_control(None, {"cmd": "deploy"}) == (True, "")
    d = _wait_not_running(rep)
    assert d["state"] == "failed" and "boom" in d["message"]


def test_unexpected_exception_is_failed_not_ok(monkeypatch):
    _reset()

    def bad(**_kw):
        raise ValueError("kaput")

    monkeypatch.setattr(deploy_mod, "deploy", bad)
    rep = WebReporter()
    _apply_control(None, {"cmd": "deploy"})
    d = _wait_not_running(rep)
    assert d["state"] == "failed" and "kaput" in d["message"]


def test_html_has_publish_card():
    html = wd._HTML
    assert "發布" in html
    assert 'id="sec-publish"' in html
    assert "預覽發布" in html and "正式發布" in html
