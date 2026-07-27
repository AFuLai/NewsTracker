"""rebuild_days must retire days that no longer have any article.

Found on the live site: after gating etsi.org/legal-notice (a website legal
page the summariser had turned into 「ETSI 官方網站法律公告」), a full
rebuild_days(dates=None) left it visible. Two reasons — the date list was
built only from days that still HAVE ready/written rows, so an emptied day was
never revisited; and the loop did `if not rows: continue`, leaving the stale
file in place even when it was revisited.
"""
import tempfile
from pathlib import Path

from tracker.dedup import Store
from tracker.orchestrator import rebuild_days


def _store_with_article(tmp: Path):
    s = Store(tmp / "t.sqlite")
    s.insert_candidates_batch([{
        "url": "https://etsi.org/legal-notice", "source": "ETSI",
        "title": "ETSI legal notice", "date": "2026-03-27",
        "raw_text": "x", "tracker": "eu_cra", "content_hash": "h1",
    }])
    row = s.conn.execute("SELECT id FROM articles").fetchone()
    s.update_summary(row["id"], title="ETSI 官方網站法律公告",
                     summary="s", category="產業動態", tags=["ETSI"],
                     date="2026-03-27")
    s.mark_status(row["id"], "written", date="2026-03-27")
    return s, row["id"]


def test_emptied_day_file_is_removed():
    tmp = Path(tempfile.mkdtemp())
    out = tmp / "html"
    s, aid = _store_with_article(tmp)

    rebuild_days(s, out, dates=None)
    day_file = out / "data" / "data-20260327.js"
    assert day_file.exists(), "sanity: the day should render while it has an article"
    assert "法律公告" in day_file.read_text(encoding="utf-8")

    # Demote the only article on that day.
    s.mark_status(aid, "gated_out", date="2026-03-27")
    rebuild_days(s, out, dates=None)

    assert not day_file.exists(), (
        "a day with no remaining articles must not keep serving its old file")


def test_day_with_remaining_articles_is_rerendered_not_deleted():
    tmp = Path(tempfile.mkdtemp())
    out = tmp / "html"
    s, aid = _store_with_article(tmp)
    s.insert_candidates_batch([{
        "url": "https://etsi.org/newsroom/real-cra-story", "source": "ETSI",
        "title": "real", "date": "2026-03-27", "raw_text": "x",
        "tracker": "eu_cra", "content_hash": "h2",
    }])
    keep = s.conn.execute(
        "SELECT id FROM articles WHERE url LIKE '%real-cra-story'").fetchone()["id"]
    s.update_summary(keep, title="歐盟 CRA 調和標準進度", summary="s",
                     category="調和標準", tags=["CRA"], date="2026-03-27")
    s.mark_status(keep, "written", date="2026-03-27")

    s.mark_status(aid, "gated_out", date="2026-03-27")
    rebuild_days(s, out, dates=None)

    day_file = out / "data" / "data-20260327.js"
    assert day_file.exists()
    body = day_file.read_text(encoding="utf-8")
    assert "調和標準" in body
    assert "法律公告" not in body, "the gated article must drop out of the re-render"
