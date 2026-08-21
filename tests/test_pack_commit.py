"""commit_site(): the pipeline lands html/ after a successful run.

Two properties matter: a changed site produces exactly one commit with the
summary in its message, and an unchanged site produces none — a run that
wrote nothing must not manufacture empty commits.
"""
import subprocess

import tracker.pack as pack


def _repo(tmp_path):
    subprocess.run(["git", "init", "-q", str(tmp_path)], check=True)
    for k, v in (("user.email", "t@test"), ("user.name", "t")):
        subprocess.run(["git", "-C", str(tmp_path), "config", k, v], check=True)
    (tmp_path / "html").mkdir()
    return tmp_path


def test_a_changed_site_is_committed_once(tmp_path, monkeypatch):
    repo = _repo(tmp_path)
    monkeypatch.setattr(pack, "ROOT", repo)
    (repo / "html" / "data.js").write_text("v1")

    short = pack.commit_site("run#7 2026-08-15..2026-08-21 (148 new, 4 days)")

    assert short
    msg = subprocess.check_output(
        ["git", "-C", str(repo), "log", "-1", "--format=%s"], text=True).strip()
    assert msg == "Site update: run#7 2026-08-15..2026-08-21 (148 new, 4 days)"
    # nothing new to land → no commit, and the hash says so
    assert pack.commit_site("run#8") is None


def test_only_html_is_landed(tmp_path, monkeypatch):
    repo = _repo(tmp_path)
    monkeypatch.setattr(pack, "ROOT", repo)
    (repo / "html" / "data.js").write_text("v1")
    (repo / "unrelated.txt").write_text("scratch")

    assert pack.commit_site("run#9")

    status = subprocess.check_output(
        ["git", "-C", str(repo), "status", "--porcelain"], text=True)
    assert "unrelated.txt" in status          # still uncommitted
    assert "html" not in status               # landed
