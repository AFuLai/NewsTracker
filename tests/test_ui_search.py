"""TrackerSearch (ui/index.html, TRACKER-SEARCH block): the search-box syntax, matching, suggestions
and recent searches. Pure; run under node. Expected values are hand-derived."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _block():
    m = re.search(r"/\* TRACKER-SEARCH:BEGIN \*/(.*?)/\* TRACKER-SEARCH:END \*/", HTML.read_text(encoding="utf-8"), re.S)
    assert m, "TRACKER-SEARCH block missing"
    return m.group(1)


H = """
const A = o => Object.assign({ title: '', text: '', tags: [], src: '', ty: ['other'], cves: [], date: '2026-11-20',
                               read: false, watched: false, isNew: false }, o);
const h = { text: (a, t) => t ? a.title : a.title + ' ' + a.text, tags: a => a.tags, source: a => a.src, type: a => a.ty,
            cves: a => a.cves, date: a => a.date, read: a => a.read, watched: a => a.watched, isNew: a => a.isNew };
const M = (a, q) => TrackerSearch.match(a, TrackerSearch.parse(q), h);
"""


def _run(expr):
    js = '"use strict";\n' + _block() + H + "process.stdout.write(JSON.stringify((() => {" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


def test_pure():
    for w in ("window", "document", "localStorage", "location", "state."):
        assert not re.search(r"\b" + re.escape(w), _block()), w


def test_parse_syntax():
    p = _run("""return TrackerSearch.parse('Fortinet "zero day" -webinar 勒索 OR ransomware OR extortion tag:CVE -tag:AI '
      + 'src:"The Hacker News" type:vuln cve:2026-1234 after:2026-11 before:2026/11/20 is:unread -is:read in:title https://x.y Foo:bar');""")
    assert p["terms"] == ["fortinet", "https://x.y", "foo:bar"]
    assert p["phrases"] == ["zero day"] and p["not"] == ["webinar"]
    assert p["any"] == [[{"v": "勒索", "phrase": False}, {"v": "ransomware", "phrase": False}, {"v": "extortion", "phrase": False}]]
    assert p["tag"] == ["cve"] and p["tagNot"] == ["ai"] and p["src"] == ["the hacker news"] and p["type"] == ["vuln"]
    assert p["cve"] == ["cve-2026-1234"] and p["after"] == "2026-11-01" and p["before"] == "2026-11-20"
    assert p["is"] == ["unread"] and p["isNot"] == ["read"] and p["inTitle"] is True and p["empty"] is False


def test_parse_edges():
    out = _run("""return [TrackerSearch.parse(''), TrackerSearch.parse('  -  OR  " '), TrackerSearch.parse('OR a'),
                          TrackerSearch.parse('after:soon is:maybe 標籤：勒索 is:未讀'), TrackerSearch.parse('a OR')];""")
    assert out[0]["empty"] and out[1]["empty"]
    assert out[2]["terms"] == ["a"] and out[2]["any"] == []
    assert out[3]["after"] == "" and out[3]["is"] == ["unread"] and out[3]["tag"] == ["勒索"]
    assert out[4]["terms"] == ["a"]


def test_match_words_phrases_or_not():
    out = _run("""
      const a = A({ title: 'Fortinet zero day exploited', text: '勒索軟體 攻擊 crash report' });
      return [M(a, 'fortinet'), M(a, 'cra'), M(a, '"zero day"'), M(a, '"day zero"'), M(a, 'nope OR 勒索'),
              M(a, 'nope OR none'), M(a, '-crash'), M(a, '-cra'), M(a, '攻擊'), M(a, 'in:title 勒索'), M(a, '')];""")
    assert out == [True, False, True, False, True, False, False, True, True, False, True]


def test_match_fields():
    out = _run("""
      const a = A({ tags: ['CVE-2026-1234', 'Ransomware'], src: 'The Hacker News | iThome', ty: ['vuln', '漏洞威脅'],
                    cves: ['CVE-2026-1234'], date: '2026-11-20', read: true, watched: true, isNew: false });
      return [M(a, 'tag:ransom'), M(a, 'tag:cve tag:ransom'), M(a, '-tag:ransom'), M(a, 'src:ithome'), M(a, 'src:bbc src:hacker'),
              M(a, '-src:ithome'), M(a, 'type:vuln'), M(a, 'type:漏洞'), M(a, '-type:vuln'), M(a, 'cve:2026-12'), M(a, 'cve:2025'),
              M(a, 'after:2026-11-20'), M(a, 'after:2026-11-21'), M(a, 'before:2026-11'), M(a, 'before:2026-10'),
              M(a, 'is:unread'), M(a, 'is:read is:watched'), M(a, 'is:new'), M(a, '-is:new')];""")
    assert out == [True, True, False, True, True, False, True, True, False, True, False,
                   True, False, True, False, False, True, False, True]


def test_marks_for_highlighting():
    out = _run("""return TrackerSearch.marks(TrackerSearch.parse('a fortinet "zero day" -crash x OR 勒索 tag:ai'));""")
    assert out == ["fortinet", "zero day", "勒索"]   # longest first; equal lengths keep words-then-phrases order


def test_suggest():
    out = _run("""
      const ctx = { tags: ['Ransomware', 'CVE', 'Zero day'], srcs: ['The Hacker News', 'iThome'],
                    types: [{ id: 'vuln', name: '漏洞威脅' }, { id: 'regulation', name: '法規標準' }],
                    recent: ['fortinet vpn', 'tag:CVE'] };
      const v = q => TrackerSearch.suggest(q, ctx, 8).map(x => x.kind + '|' + x.value);
      return { empty: v(''), recent: v('fort'), key: v('x tag:ze'), neg: v('-src:hack'), type: v('type:法'),
               is: v('is:u'), op: v('ta'), word: v('ran'), cjk: v('漏'), space: v('fortinet ') };""")
    assert out["empty"] == ["recent|fortinet vpn", "recent|tag:CVE"]
    assert out["recent"] == ["recent|fortinet vpn"]
    assert out["key"] == ['tag|x tag:"Zero day" ']
    assert out["neg"] == ['src|-src:"The Hacker News" ']
    assert out["type"] == ["type|type:regulation "]
    assert out["is"] == ["is|is:unread "]
    assert out["op"] == ["recent|tag:CVE", "op|tag:"]
    assert out["word"] == ["tag|tag:Ransomware "]
    assert out["cjk"] == ["type|type:vuln "]
    assert out["space"] == ["recent|fortinet vpn"]


def test_remember():
    out = _run("""return [TrackerSearch.remember(['b', 'A', 'c'], ' a ', 3), TrackerSearch.remember(null, '', 3),
                          TrackerSearch.remember(['x', 5, ''], 'y', 8)];""")
    assert out == [["a", "b", "c"], [], ["y", "x"]]
