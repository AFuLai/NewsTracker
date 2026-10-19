Implement slices S0 and S1 of plan run 20261019-layout-scenarios-plan. Touch only tracker/web_dashboard.py, tests/test_web_dashboard.py, tests/test_dashboard_publish.py.

S0 — local site preview route in tracker/web_dashboard.py do_GET (~L228-241):
- New branch for paths starting with "/site/" (and "/site" -> redirect or serve index). Strip query/fragment, URL-unquote.
- "/site/index.html" (and "/site/") serves ROOT/ui/index.html (ROOT from tracker/__init__.py) so UI edits preview without render.
- Any other "/site/<rel>" serves DEFAULT_OUT/<rel> (tracker/__init__.py DEFAULT_OUT, read it at request time so tests can monkeypatch `tracker.web_dashboard.DEFAULT_OUT` or the module you import from — say which in your summary).
- Path traversal: resolve() and require is_relative_to(base.resolve()); otherwise 404. Missing file 404. Directories 404.
- Content-Type via mimetypes (default application/octet-stream; .js -> text/javascript), header Cache-Control: no-store. GET only; do not touch /control or /state behaviour; keep loopback binding unchanged.

S1 — preview card in the embedded console HTML: a new <section class="card" id="sec-preview"> right after the Publish card (~L489-502), containing:
- select id="pvPreset" with options value "" (預設), quick (快讀), analyst (分析師), event (事件追蹤), cra (合規 CRA) — presets are implemented later; the value is only passed as a hash.
- select id="pvWidth": desktop (100%), 820, 390 (px; sets iframe width only).
- button id="btnLocalPreview" "本機預覽": sets iframe id="pvFrame" src to "/site/index.html?pv=1" + (preset ? "#p="+preset : "").
- a link id="pvOpen" target=_blank pointing at the same URL.
- The iframe must live outside anything poll()/syncDeploy rewrites (poll every 800ms ~L826), so it is not reset.
- Rename the existing Publish button label 預覽發布 to 預覽頻道發布 (keep id btnPreview and its handler).

Tests: in tests/test_web_dashboard.py add a server test (pick a free port distinct from 8799) that: /site/index.html is 200 and contains a string from ui/index.html (<title>資安新聞追蹤系統</title>); a file written into a monkeypatched tmp DEFAULT_OUT (e.g. data/x.js) is served with javascript content-type; "/site/..%2f..%2fetc/passwd" and "/site/../../etc/passwd" are 404 (or 403). In tests/test_dashboard_publish.py add a string check for id="sec-preview", id="pvFrame", id="btnLocalPreview". Full test suite must pass. Do not change product code to detect tests.
