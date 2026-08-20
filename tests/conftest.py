"""Repo-wide test isolation.

The live `endpoints.json` at the repo root names real machines on this LAN.
Every test runs with CONFIG_PATH pointed at a per-test temporary file instead,
so no test reads the operator's endpoint list and no test can rewrite it.
"""
import pytest

import tracker.ollama_hosts as hosts


@pytest.fixture(autouse=True)
def _isolate_endpoint_config(tmp_path, monkeypatch):
    monkeypatch.setattr(hosts, "CONFIG_PATH", tmp_path / "endpoints.json")
