"""Repo-wide test isolation.

The live `endpoints.json` at the repo root names real machines on this LAN.
Every test runs with CONFIG_PATH pointed at a per-test temporary file instead,
so no test reads the operator's endpoint list and no test can rewrite it.

`PROJECT_ROOT` is likewise redirected to a per-test temp dir: `_finalize`
writes `PROJECT_ROOT/status.json` unconditionally, so without this a test that
runs the pipeline (e.g. test_pipeline_aborts_when_ollama_down) overwrites the
operator's real /mnt/d/.../status.json with a synthetic run result. Both the
orchestrator (writer) and cli (reader) bindings are patched to the same dir so
the write and any read stay consistent.
"""
import pytest

import tracker.ollama_hosts as hosts
import tracker.orchestrator as orchestrator
import tracker.cli as cli


@pytest.fixture(autouse=True)
def _isolate_endpoint_config(tmp_path, monkeypatch):
    monkeypatch.setattr(hosts, "CONFIG_PATH", tmp_path / "endpoints.json")


@pytest.fixture(autouse=True)
def _isolate_project_root(tmp_path, monkeypatch):
    monkeypatch.setattr(orchestrator, "PROJECT_ROOT", tmp_path)
    monkeypatch.setattr(cli, "PROJECT_ROOT", tmp_path)


@pytest.fixture(autouse=True)
def _never_deploy(monkeypatch):
    """No test may publish the real site: deploy() is replaced by a no-op."""
    import tracker.deploy as deploy_mod
    monkeypatch.setattr(deploy_mod, "deploy", lambda **_kw: "stubbed under test")


@pytest.fixture(autouse=True)
def _isolate_snapshots(tmp_path, monkeypatch):
    """DB snapshots from tests land in the per-test temp dir, never state/backups/."""
    import tracker.snapshot as snap
    monkeypatch.setattr(snap, "SNAP_DIR", tmp_path / "snapshots")
    real = snap.snapshot
    monkeypatch.setattr(snap, "snapshot", lambda db, **kw: real(db, **{"dest": tmp_path / "snapshots", **kw}))
