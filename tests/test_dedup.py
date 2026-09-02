from tracker.dedup import normalize_url, url_hash, Store


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
