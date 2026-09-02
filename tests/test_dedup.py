from tracker.dedup import normalize_url, url_hash, Store


def test_requeue_if_content_changed(tmp_path):
    # C-REVDET: a known URL whose content_hash changed is re-queued; an
    # unchanged one (or a missing url) is not.
    from tracker.dedup import url_hash
    s = Store(tmp_path / "t.sqlite")
    s.upsert_candidate(url="https://x.com/a", source="X", title="T",
                       tracker="security")
    h = url_hash("https://x.com/a")
    s.conn.execute(
        "UPDATE articles SET content_hash='OLD', status='written' WHERE url_hash=?",
        (h,))
    s.conn.commit()
    assert s.requeue_if_content_changed(h, "OLD") is False
    assert s.requeue_if_content_changed("does-not-exist", "NEW") is False
    assert s.requeue_if_content_changed(h, "NEW") is True
    row = s.conn.execute(
        "SELECT status, content_hash FROM articles WHERE url_hash=?", (h,)).fetchone()
    assert row["status"] == "pending" and row["content_hash"] == "NEW"


def test_store_uses_wal_and_busy_timeout(tmp_path):
    # F-DATA-3: concurrent writer/reader must wait, not raise "database is
    # locked"; WAL lets readers not block the writer.
    s = Store(tmp_path / "t.sqlite")
    assert s.conn.execute("PRAGMA journal_mode").fetchone()[0].lower() == "wal"
    assert s.conn.execute("PRAGMA busy_timeout").fetchone()[0] == 30000


def test_normalize_strips_tracking():
    assert normalize_url("https://Example.com/path/?utm_source=x&id=1") == \
        "https://example.com/path?id=1"


def test_hash_stable():
    a = url_hash("https://example.com/a?utm_source=foo")
    b = url_hash("https://example.com/a")
    assert a == b
