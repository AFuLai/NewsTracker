from tracker import SEARCHINFOS
from tracker.config import load_searchinfo


def test_load_searchinfo_smoke():
    # The searchinfo files ship with the repo, so this no longer skips itself
    # on a machine that happens not to have them at some absolute path.
    for name, path in SEARCHINFOS.items():
        assert path.exists(), f"{name}: {path} missing"
        info = load_searchinfo(path)
        assert info.title
        assert len(info.entries) > 5
        assert len(info.categories) >= 3
        assert len(info.keys) > 5
