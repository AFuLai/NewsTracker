from tracker.dedup import normalize_url, url_hash


def test_normalize_strips_tracking():
    assert normalize_url("https://Example.com/path/?utm_source=x&id=1") == \
        "https://example.com/path?id=1"


def test_hash_stable():
    a = url_hash("https://example.com/a?utm_source=foo")
    b = url_hash("https://example.com/a")
    assert a == b
