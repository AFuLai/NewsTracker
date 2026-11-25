"""Publish panel: the deploy message is firebase's URL line (not the border of its
"Update available" box), and the console can load TrackerPages to build 版面分頁 links."""
from tracker import deploy, web_dashboard

BOX_TAIL = """\
=== Deploying to 'afu-news'...
\x1b[1m\x1b[32m✔ \x1b[39m\x1b[22m Deploy complete!

Project Console: https://console.firebase.google.com/project/afu-news/overview
Hosting URL: https://afu-news.web.app

╭────────────────────────────────────────────────╮
│                                                │
│     Update available 13.0.0 → 14.1.0           │
│                                                │
╰────────────────────────────────────────────────╯
"""

CHANNEL = """\
✔  hosting:channel: Channel URL (afu-news): https://afu-news--preview-ab12cd.web.app [expires 2026-12-02 08:00:00]
"""


def test_live_url_line_wins_over_update_box():
    assert deploy.summarize_output(BOX_TAIL) == "Hosting URL: https://afu-news.web.app"


def test_channel_url_line():
    assert deploy.summarize_output(CHANNEL) == (
        "Channel URL: https://afu-news--preview-ab12cd.web.app [expires 2026-12-02 08:00:00]")


def test_no_url_skips_decoration():
    out = "done something\n╭──╮\n│  │\n╰──╯\n"
    assert deploy.summarize_output(out) == "done something"
    assert deploy.summarize_output("") == ""


def test_pages_js_exports_tracker_pages():
    js = web_dashboard.pages_js()
    assert "const TrackerPages" in js and "shareEncode" in js
    assert js.rstrip().endswith("window.TrackerPages = TrackerPages;")


def test_console_loads_pages_js_and_has_link_list():
    assert '<script src="/pages.js"></script>' in web_dashboard._HTML
    assert 'id="depLinksList"' in web_dashboard._HTML
