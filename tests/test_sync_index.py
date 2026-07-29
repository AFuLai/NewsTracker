"""render.sync_index_html keeps the served index.html in step with ui/index.html.

Called from update_root_manifest so every build refreshes the site shell —
byte-exact, skipping when unchanged. Both source and output are ext4 now, so
the old manual cross-copy to /mnt/d (drvfs tax + ADS streams) is gone.
"""
from tracker import render, ROOT

SRC = ROOT / "ui" / "index.html"


def test_sync_copies_shell_into_output_root(tmp_path):
    dst = tmp_path / "index.html"
    assert not dst.exists()
    result = render.sync_index_html(tmp_path)
    if not SRC.exists():
        assert result is None   # nothing to copy in this checkout
        return
    assert result == dst
    assert dst.read_bytes() == SRC.read_bytes()


def test_sync_is_a_noop_when_unchanged(tmp_path):
    if not SRC.exists():
        return
    render.sync_index_html(tmp_path)                      # first copy
    assert render.sync_index_html(tmp_path) is None       # unchanged → skip


def test_sync_restores_a_stale_or_edited_copy(tmp_path):
    if not SRC.exists():
        return
    render.sync_index_html(tmp_path)
    dst = tmp_path / "index.html"
    dst.write_bytes(dst.read_bytes() + b"<!-- stale -->")
    assert render.sync_index_html(tmp_path) == dst
    assert dst.read_bytes() == SRC.read_bytes()
