from pathlib import Path
from tracker.config import load_searchinfo


def test_load_searchinfo_smoke():
    p = Path("/mnt/d/Claude/Track Security/searchinfo_security.md")
    if not p.exists():
        return  # skip silently in environments without the file
    info = load_searchinfo(p)
    assert info.title
    assert len(info.entries) > 5
    assert len(info.categories) >= 3
    assert len(info.keys) > 5
