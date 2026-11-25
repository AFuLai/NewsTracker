"""TrackerPages share links (ui/index.html, TRACKER-PAGES block): shareEncode / shareDecode carry a
whole 版面分頁 (name, time, filters, layout, page size, display options, pinned search) in
`#ws=1&pgx=<code>`, so the link opens the same page in any browser. Pure; run under node.
Expected values are hand-derived."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _src():
    return HTML.read_text(encoding="utf-8")


def _block():
    m = re.search(r"/\* TRACKER-PAGES:BEGIN \*/(.*?)/\* TRACKER-PAGES:END \*/", _src(), re.S)
    assert m, "TRACKER-PAGES block missing"
    return m.group(1)


def _run(expr):
    js = '"use strict";\n' + _block() + "process.stdout.write(JSON.stringify((() => {" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


FULL = """{ id: 'p7', name: '主管晨報 ✓', range: '7d', src: 'security', ty: 'vuln', w: 'kev', pl: 'Linux', pk: 'openssl',
  layout: 'magazine', size: 50, q: 'tag:CVE "remote code"',
  f: { types: ['vuln', 'incident'], tags: ['Ransomware'], tagMode: 'all', kwNot: ['廣告'], unread: true, sort: 'foryou' },
  look: { d: 'roomy', fs: 'l', sum: false, tg: true } }"""


def test_round_trip_keeps_the_whole_page_but_not_the_id():
    out = _run("const p = " + FULL + """;
      const code = TrackerPages.shareEncode(p);
      return { code, back: TrackerPages.shareDecode(code), want: TrackerPages.normPage(Object.assign({}, p, { id: 'shared' }), 0) };""")
    assert re.fullmatch(r"[A-Za-z0-9_-]+", out["code"]), "base64url without padding, safe in a hash"
    assert out["back"] == out["want"]
    assert out["back"]["id"] == "shared" and out["back"]["name"] == "主管晨報 ✓"
    assert out["back"]["look"] == {"d": "roomy", "fs": "l", "sum": False, "tg": True}
    assert out["back"]["q"] == 'tag:CVE "remote code"'


def test_default_page_encodes_to_an_empty_object():
    out = _run("""const code = TrackerPages.shareEncode({ id: 'main' });
      return { code, json: Buffer.from(code, 'base64url').toString('utf8'), back: TrackerPages.shareDecode(code) };""")
    assert out["json"] == "{}"
    assert out["code"] == "e30"          # base64url("{}") without padding
    assert out["back"]["layout"] == "cards" and out["back"]["range"] == "30d" and out["back"]["name"] == ""


def test_bad_codes_are_refused():
    out = _run("""const big = 'A'.repeat(4001);
      const notObj = Buffer.from('[1,2]').toString('base64url');
      const badUtf8 = Buffer.from([0xff, 0xfe, 0x7b]).toString('base64url');
      return ['', null, 42, 'not base64!', 'e30=', big, notObj, badUtf8, '@@'].map(c => TrackerPages.shareDecode(c));""")
    assert out == [None] * 9


def test_hostile_fields_are_normalised():
    # A link is outside input: unknown layouts, oversized names and junk filters fall back to defaults.
    out = _run("""const raw = { n: 'x'.repeat(200), ly: 'evil<script>', sz: 7, r: '../etc', f: { types: 'vuln', sort: 'drop' },
                     lk: { d: 'huge' }, q: 5, extra: 1 };
      const code = Buffer.from(JSON.stringify(raw)).toString('base64url');
      return TrackerPages.shareDecode(code);""")
    assert len(out["name"]) == 30
    assert out["layout"] == "cards" and out["size"] == 0 and out["range"] == "30d"
    assert out["f"] == {} and out["q"] == "" and out["look"]["d"] == "cozy"
    assert "extra" not in out


def test_site_wires_the_link():
    s = _src()
    assert "item(pt('shareLink'), pgCopyLink);" in s
    assert re.search(r"const shared = h\.pgx \? TrackerPages\.shareDecode\(h\.pgx\) : null;", s)
    assert "u.searchParams.delete('pv');" in s.split("function pgShareUrl()")[1].split("\n}", 1)[0]
    assert "wp.push('pgx=' + TrackerPages.shareEncode(pgCurrentPage()))" in s
