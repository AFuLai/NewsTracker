"""Standalone (native Windows / NEWSTRACKER_HOME) layer: settings, schedule
arguments, the portable run lock, export/import. Platform-neutral: runs on WSL
and on Windows. Expected values are hand-written."""
import json
import sqlite3
import zipfile
from pathlib import Path

import pytest

from tracker import runlock, schedule, settings


@pytest.fixture
def home(tmp_path, monkeypatch):
    monkeypatch.setenv("NEWSTRACKER_HOME", str(tmp_path / "home"))
    return tmp_path / "home"


def test_wsl_layout_unchanged_without_home(monkeypatch):
    monkeypatch.delenv("NEWSTRACKER_HOME", raising=False)
    monkeypatch.setattr(settings, "IS_WINDOWS", False)
    p = settings.resolve()
    assert p["home"] is None
    assert p["db"] == Path("/opt/tracker/repo/db/articles.sqlite")
    assert p["out"] == Path("/opt/tracker/web/public")
    assert p["status"] == Path("/mnt/d/Claude/Tool/NewsTracker/status.json")
    assert p["endpoints"] == Path("/opt/tracker/repo/endpoints.json")


def test_home_layout_defaults(home):
    p = settings.resolve()
    assert p["db"] == home / "db" / "articles.sqlite"
    assert p["out"] == settings.INSTALL_DIR / "html"
    assert p["web_dir"] == home / "site"
    assert p["status"] == home / "status.json"
    assert p["ui_html"] == settings.INSTALL_DIR / "ui" / "index.html"


def test_settings_merge_and_bad_values(home):
    home.mkdir(parents=True)
    (home / "settings.json").write_text(json.dumps({
        "out_dir": "  X:/site  ", "bogus": 1, "cdp_port": "nope",
        "schedule": {"enabled": 1, "days": "5", "extra": 2},
        "firebase": "not a dict"}), "utf-8")
    s = settings.load()
    assert s["out_dir"] == "X:/site"
    assert "bogus" not in s
    assert s["cdp_port"] == 9999
    assert s["schedule"]["enabled"] is True and s["schedule"]["days"] == 5
    assert "extra" not in s["schedule"] and s["schedule"]["time"] == "07:30"
    assert s["firebase"] == {"enabled": False, "project": "afu-news", "web_dir": ""}
    assert settings.resolve()["out"] == Path("X:/site")


def test_save_partial_keeps_rest(home):
    settings.save({"firebase": {"enabled": True}})
    settings.save({"schedule": {"time": "06:15"}, "nonsense": 3})
    s = json.loads((home / "settings.json").read_text("utf-8"))
    assert s["firebase"]["enabled"] is True and s["firebase"]["project"] == "afu-news"
    assert s["schedule"]["time"] == "06:15" and s["schedule"]["mode"] == "daily"
    assert "nonsense" not in s


def test_save_refused_on_wsl_layout(monkeypatch):
    monkeypatch.delenv("NEWSTRACKER_HOME", raising=False)
    monkeypatch.setattr(settings, "IS_WINDOWS", False)
    with pytest.raises(RuntimeError):
        settings.save({"out_dir": "x"})


def test_schedule_next_due_daily_and_hourly():
    from datetime import datetime as D
    daily = {"mode": "daily", "time": "07:30"}
    assert schedule.next_due(daily, D(2026, 11, 11, 6, 0)) == D(2026, 11, 11, 7, 30)
    assert schedule.next_due(daily, D(2026, 11, 11, 7, 30)) == D(2026, 11, 12, 7, 30)
    hourly = {"mode": "hourly", "time": "00:15", "every_hours": 6}
    assert schedule.next_due(hourly, D(2026, 11, 11, 0, 10)) == D(2026, 11, 11, 0, 15)
    assert schedule.next_due(hourly, D(2026, 11, 11, 13, 0)) == D(2026, 11, 11, 18, 15)
    assert schedule.next_due(hourly, D(2026, 11, 11, 23, 0)) == D(2026, 11, 12, 0, 15)
    odd = {"mode": "hourly", "time": "08:00", "every_hours": 5}  # 08,13,18,23,04 then 08
    assert schedule.next_due(odd, D(2026, 11, 11, 23, 30)) == D(2026, 11, 12, 4, 0)
    assert schedule.next_due(odd, D(2026, 11, 12, 4, 30)) == D(2026, 11, 12, 8, 0)


def test_standalone_llm_defaults(home, monkeypatch):
    from tracker import ollama_hosts as h
    from tracker import llm
    monkeypatch.delenv("TRACKER_OLLAMA_URLS", raising=False)
    monkeypatch.delenv("TRACKER_OLLAMA_REMOTE_CONCURRENCY", raising=False)
    monkeypatch.delenv("TRACKER_LLM_BACKEND", raising=False)
    monkeypatch.setattr(h, "CONFIG_PATH", home / "endpoints.json")
    assert h.endpoints() == h.BUILTIN_URLS + [h.LOCAL_URL]
    assert h.endpoints()[0] == "http://10.139.180.22:11434"
    assert h.remote_concurrency() == 20
    assert h.label("http://10.139.180.21:11434").startswith("TWTY3PC1875")
    assert llm.resolve_default_backend() == "ollama"


def test_schedule_command():
    c = schedule.command({"mode": "daily", "time": "07:30", "days": 3, "deploy": True})
    assert c[1:] == ["-m", "tracker.cli", "daily", "--days", "3", "--deploy", "--cra"]
    c = schedule.command({"mode": "daily", "time": "07:30", "days": 1, "cra": False})
    assert c[-2:] == ["--no-deploy", "--no-cra"]


def test_scheduler_fires_once_per_slot(tmp_path, monkeypatch):
    from datetime import datetime as D
    import tracker
    monkeypatch.setenv("NEWSTRACKER_HOME", str(tmp_path))
    monkeypatch.setattr(tracker, "DEFAULT_DB", tmp_path / "db" / "a.sqlite")
    monkeypatch.setattr(tracker, "LOGS_DIR", tmp_path / "logs")
    settings.save({"schedule": {"enabled": True, "mode": "daily", "time": "07:30"}})
    now = [D(2026, 11, 11, 7, 0)]
    launched = []

    class P:
        returncode = 0
        def poll(self):
            return 0
    def fake_popen(argv, **kw):
        launched.append(argv)
        return P()
    s = schedule.Scheduler(popen=fake_popen, clock=lambda: now[0])
    s.tick()                                    # arms for 07:30
    assert s.status()["next_run"] == "2026-11-11 07:30" and not launched
    now[0] = D(2026, 11, 11, 7, 31); s.tick()
    assert len(launched) == 1
    s.tick()                                    # same slot: no second run
    assert len(launched) == 1
    st = s.status()
    assert st["last_result"] == "成功" and st["next_run"] == "2026-11-12 07:30"
    settings.save({"schedule": {"enabled": False}})
    now[0] = D(2026, 11, 12, 8, 0); s.tick()
    assert len(launched) == 1 and s.status()["enabled"] is False


@pytest.mark.parametrize("bad", [{"time": "7:30"}, {"time": "24:00"}, {"mode": "weekly"},
                                 {"every_hours": 0}, {"every_hours": 24}, {"days": 0},
                                 {"days": 31}, {"days": "x"}])
def test_schedule_validation(bad):
    with pytest.raises(schedule.ScheduleError):
        schedule.validate(dict({"mode": "hourly", "time": "07:30"}, **bad))


def test_runlock_exclusive(tmp_path):
    db = tmp_path / "x" / "a.sqlite"
    first = runlock.acquire(db)
    assert first is not None
    assert runlock.acquire(db) is None
    first.close()
    again = runlock.acquire(db)
    assert again is not None
    again.close()


def _mkdb(path: Path, n: int):
    path.parent.mkdir(parents=True, exist_ok=True)
    c = sqlite3.connect(path)
    c.execute("CREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT)")
    c.executemany("INSERT INTO articles (title) VALUES (?)", [(f"t{i}",) for i in range(n)])
    c.commit(); c.close()


def test_export_import_roundtrip(tmp_path, monkeypatch):
    import tracker
    from tracker import migrate_data
    src_home, dst_home = tmp_path / "a", tmp_path / "b"
    # source install
    monkeypatch.setenv("NEWSTRACKER_HOME", str(src_home))
    paths = settings.resolve()
    monkeypatch.setattr(migrate_data, "PATHS", paths)
    _mkdb(paths["db"], 3)
    paths["endpoints"].write_text('{"urls": ["http://h:11434"]}', "utf-8")
    settings.save({"out_dir": "Z:/old-machine/site", "schedule": {"enabled": True}})
    z = tmp_path / "export.zip"
    info = migrate_data.export(z)
    assert info["articles"] == 3
    assert set(zipfile.ZipFile(z).namelist()) == {"db/articles.sqlite", "endpoints.json",
                                                   "settings.json", migrate_data.MANIFEST}
    # target install
    monkeypatch.setenv("NEWSTRACKER_HOME", str(dst_home))
    paths2 = settings.resolve()
    monkeypatch.setattr(migrate_data, "PATHS", paths2)
    migrate_data.import_(z)
    c = sqlite3.connect(paths2["db"])
    assert c.execute("SELECT COUNT(*) FROM articles").fetchone()[0] == 3
    c.close()
    assert json.loads(paths2["endpoints"].read_text("utf-8"))["urls"] == ["http://h:11434"]
    s = settings.load()
    assert s["out_dir"] == "" and s["schedule"]["enabled"] is False   # old-machine paths cleared
    with pytest.raises(FileExistsError):
        migrate_data.import_(z)
    migrate_data.import_(z, force=True)
    assert list(paths2["db"].parent.glob("articles.sqlite.bak-*"))


def test_import_rejects_foreign_zip(tmp_path, monkeypatch):
    from tracker import migrate_data
    monkeypatch.setenv("NEWSTRACKER_HOME", str(tmp_path / "h"))
    monkeypatch.setattr(migrate_data, "PATHS", settings.resolve())
    z = tmp_path / "other.zip"
    with zipfile.ZipFile(z, "w") as f:
        f.writestr("hello.txt", "x")
    with pytest.raises(ValueError):
        migrate_data.import_(z)


def test_firebase_json_written_once(tmp_path):
    from tracker.deploy import ensure_firebase_json
    web, pub = tmp_path / "site", tmp_path / "site" / "public"
    f = ensure_firebase_json(web, pub)
    assert json.loads(f.read_text("utf-8"))["hosting"]["public"] == "public"
    f.write_text('{"hosting": {"public": "custom"}}', "utf-8")
    ensure_firebase_json(web, pub)
    assert json.loads(f.read_text("utf-8"))["hosting"]["public"] == "custom"


def test_firebase_standalone_preferred(tmp_path, monkeypatch):
    from tracker import deploy
    monkeypatch.delenv('NEWSTRACKER_FIREBASE', raising=False)
    monkeypatch.setattr(deploy.settings, 'home', lambda: tmp_path)
    exe = tmp_path / 'tools' / 'firebase.exe'
    exe.parent.mkdir()
    exe.write_bytes(b'x')
    assert deploy.resolve_firebase() == exe


def test_firebase_install_downloads_atomically(tmp_path, monkeypatch):
    import httpx
    from tracker import deploy
    monkeypatch.setattr(deploy.settings, 'home', lambda: tmp_path)
    body = b'a' * (3 << 20)

    def handler(req):
        return httpx.Response(200, content=body, headers={'content-length': str(len(body))})
    client = httpx.Client(transport=httpx.MockTransport(handler))
    monkeypatch.setattr(httpx, 'stream', lambda m, u, **kw: client.stream(m, u))
    seen = []
    out = deploy.install_standalone(lambda d, t: seen.append((d, t)))
    assert out.read_bytes() == body and seen[-1] == (len(body), len(body))
    assert not out.with_suffix('.part').exists()
