"""Tests for `tracker daily` and `tracker sources` (CLI wiring + health.py).

Everything that could touch the network or the real ollama is monkeypatched:
- tracker.preflight.ensure_ollama (looked up at call-time inside cli.daily /
  cli._translate_backfill, so patching the module attribute is enough)
- tracker.orchestrator.run_pipeline / rebuild_days (same call-time-import
  pattern)
- tracker.cli._translate_backfill (a plain module-level function in cli.py)
"""
from __future__ import annotations

import json

from typer.testing import CliRunner

import tracker.cli as cli_mod
import tracker.orchestrator as orch
import tracker.preflight as preflight
from tracker.cli import app
from tracker.dedup import Store
from tracker.health import gather_source_health
from tracker.methods import FEED

runner = CliRunner()


def _fake_report(**over):
    kw = dict(since="2026-07-25", until="2026-07-27", trackers=["security"], ok=True)
    kw.update(over)
    return orch.RunReport(**kw)


def test_daily_help_works():
    result = runner.invoke(app, ["daily", "--help"])
    assert result.exit_code == 0
    assert "daily" in result.output.lower() or "pipeline" in result.output.lower()


def test_sources_help_works():
    result = runner.invoke(app, ["sources", "--help"])
    assert result.exit_code == 0


def test_daily_calls_run_pipeline_with_translate_disabled_and_ollama_backend(monkeypatch, tmp_path):
    captured = {}

    def fake_run_pipeline(**kwargs):
        captured.update(kwargs)
        return _fake_report(since=kwargs["since"], until=kwargs["until"],
                            trackers=kwargs["trackers"])

    monkeypatch.setattr(preflight, "ensure_ollama", lambda **k: True)
    monkeypatch.setattr(orch, "run_pipeline", fake_run_pipeline)
    monkeypatch.setattr(orch, "rebuild_days", lambda store, out, dates=None: 0)
    monkeypatch.setattr(cli_mod, "_translate_backfill",
                        lambda **k: {"attempted": 0, "translated": 0, "row_errors": 0, "error": None})

    db = tmp_path / "t.sqlite"
    out = tmp_path / "html"
    result = runner.invoke(app, ["daily", "--db", str(db), "--out", str(out), "--days", "3"])

    assert result.exit_code == 0, result.output
    assert captured["translate"] is False
    assert captured["summarize_backend"] == "ollama"
    assert captured["translate_backend"] == "ollama"


def test_daily_survives_translate_backfill_raising(monkeypatch, tmp_path):
    rebuild_calls = []

    monkeypatch.setattr(preflight, "ensure_ollama", lambda **k: True)
    monkeypatch.setattr(orch, "run_pipeline",
                        lambda **kwargs: _fake_report(since=kwargs["since"], until=kwargs["until"],
                                                      trackers=kwargs["trackers"]))

    def fake_rebuild(store, out, dates=None):
        rebuild_calls.append(dates)
        return 2

    monkeypatch.setattr(orch, "rebuild_days", fake_rebuild)

    def boom(**k):
        raise RuntimeError("ollama choked mid-translate")

    monkeypatch.setattr(cli_mod, "_translate_backfill", boom)

    db = tmp_path / "t.sqlite"
    out = tmp_path / "html"
    result = runner.invoke(app, ["daily", "--db", str(db), "--out", str(out), "--days", "3"])

    assert result.exit_code == 0, result.output
    # rebuild (step 4) still ran despite the translate backfill blowing up
    assert rebuild_calls == [None]
    # status.json (step 5) still got written, and records the non-fatal error
    status = json.loads((cli_mod.PROJECT_ROOT / "status.json").read_text(encoding="utf-8"))
    assert status["ok"] is True
    assert any("translate backfill" in e for e in status["errors"])


def test_daily_nonzero_exit_when_pipeline_crashes(monkeypatch, tmp_path):
    monkeypatch.setattr(preflight, "ensure_ollama", lambda **k: True)

    def crash(**kwargs):
        raise RuntimeError("boom")

    monkeypatch.setattr(orch, "run_pipeline", crash)
    monkeypatch.setattr(orch, "rebuild_days", lambda store, out, dates=None: 0)
    monkeypatch.setattr(cli_mod, "_translate_backfill",
                        lambda **k: {"attempted": 0, "translated": 0, "row_errors": 0, "error": None})

    db = tmp_path / "t.sqlite"
    out = tmp_path / "html"
    result = runner.invoke(app, ["daily", "--db", str(db), "--out", str(out), "--days", "3"])

    assert result.exit_code != 0


def test_health_report_includes_profile_with_no_matching_articles(tmp_path):
    store = Store(tmp_path / "t.sqlite")
    store.upsert_profile(domain="quiet-source.example", name="Quiet Source",
                         method=FEED, trackers="security")

    rows = gather_source_health(store)

    assert len(rows) == 1
    row = rows[0]
    assert row["name"] == "Quiet Source"
    assert row["domain"] == "quiet-source.example"
    assert row["unmatched"] is False
    assert row["total_articles"] == 0
    assert row["written"] == 0
    assert row["gated_out"] == 0
    assert row["junk_pct"] == 0.0
    assert row["newest_article_date"] is None
