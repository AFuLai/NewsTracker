"""TrackerPages (ui/index.html, TRACKER-PAGES block): the user's own pages, the advanced
filter, paging. Pure; run under node. Expected values are hand-derived."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _block():
    m = re.search(r"/\* TRACKER-PAGES:BEGIN \*/(.*?)/\* TRACKER-PAGES:END \*/", HTML.read_text(encoding="utf-8"), re.S)
    assert m, "TRACKER-PAGES block missing"
    return m.group(1)


H = """
const A = (o) => Object.assign({ ty: 'other', srcs: [], rules: [], plats: [], pkgs: [], tags: [], text: '', read: false, src: '' }, o);
const h = { type: a => a.ty, inSrc: (a, s) => a.srcs.includes(s), rules: a => a.rules, plats: a => a.plats,
            pkgs: a => a.pkgs, tags: a => a.tags, text: (a, sc) => sc === 'title' ? a.title || '' : a.text,
            read: a => a.read, source: a => a.src, typeOrder: ['vuln', 'incident', 'other'] };
"""


def _run(expr):
    js = '"use strict";\n' + _block() + H + "process.stdout.write(JSON.stringify((() => {" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


def test_pure():
    for w in ("window", "document", "localStorage", "location", "state."):
        assert not re.search(r"\b" + re.escape(w), _block()), w


def test_parse_bad_input_gives_default():
    out = _run("""return [TrackerPages.parse(null), TrackerPages.parse('{x'), TrackerPages.parse('{"v":2,"pages":[]}'),
                          TrackerPages.parse('{"v":1,"pages":[]}')];""")
    for st in out:
        assert st["active"] == "main" and [p["id"] for p in st["pages"]] == ["main"]
        assert st["pages"][0]["layout"] == "cards" and st["pages"][0]["range"] == "30d" and st["pages"][0]["f"] == {}


def test_normalise_pages_ids_and_fields():
    out = _run("""return TrackerPages.normState({ v: 1, active: 'gone', pages: [
        { id: 'a', name: '  晨報  ', range: '7d', layout: 'table', size: 50, f: { types: ['vuln', 'vuln', ' '], sort: 'oldest', x: 1 } },
        { id: 'a', layout: 'nope', size: 33, range: 'BAD RANGE' },
        { id: 'Bad Id!' } ] });""")
    ids = [p["id"] for p in out["pages"]]
    assert ids == ["a", "a-1", "p2"]
    assert out["active"] == "a"
    a = out["pages"][0]
    assert a["name"] == "晨報" and a["layout"] == "table" and a["size"] == 50
    assert a["f"] == {"types": ["vuln"], "sort": "oldest"}
    b = out["pages"][1]
    assert b["layout"] == "cards" and b["size"] == 0 and b["range"] == "30d"


def test_max_pages_and_new_id():
    out = _run("""const st = TrackerPages.normState({ v: 1, pages: Array.from({ length: 15 }, (_, i) => ({ id: 'p' + i })) });
                  const small = TrackerPages.normState({ v: 1, pages: [{ id: 'p1' }, { id: 'p2' }] });
                  return [st.pages.length, TrackerPages.canAdd(st), TrackerPages.newId(small), TrackerPages.canAdd(small)];""")
    assert out == [12, False, "p3", True]


def test_filter_match_rules():
    out = _run("""
      const list = [
        A({ id: 1, ty: 'vuln', srcs: ['security'], tags: ['Linux', 'CVE'], text: 'OpenSSH RCE in Debian', title: 'OpenSSH RCE' }),
        A({ id: 2, ty: 'incident', srcs: ['os'], tags: ['Windows'], text: 'Ransomware hits hospital', rules: ['ransomware'] }),
        A({ id: 3, ty: 'vuln', srcs: ['os'], tags: ['linux'], text: 'Kernel patch', read: true, plats: ['Linux'] }),
        A({ id: 4, ty: 'other', srcs: ['security'], tags: [], text: 'Conference recap Debian' }) ];
      const ids = f => TrackerPages.filter(list, f, h).map(a => a.id);
      return {
        none: ids({}),
        types: ids({ types: ['vuln', 'incident'] }),
        srcs: ids({ srcs: ['os'] }),
        tagAny: ids({ tags: ['LINUX', 'Windows'] }),
        tagAll: ids({ tags: ['linux', 'cve'], tagMode: 'all' }),
        tagNot: ids({ tagsNot: ['linux'] }),
        kwAll: ids({ kwAll: ['openssh', 'debian'] }),
        kwAny: ids({ kwAny: ['kernel', 'ransomware'] }),
        kwNot: ids({ kwNot: ['debian'] }),
        kwTitle: ids({ kwAll: ['debian'], kwIn: 'title' }),
        watched: ids({ watched: true }),
        unread: ids({ unread: true }),
        plats: ids({ plats: ['Linux'] }),
        combo: ids({ types: ['vuln'], tagsNot: ['cve'], unread: false }),
        count: TrackerPages.filterCount({ types: ['a', 'b'], kwNot: ['x'], watched: true, sort: 'oldest' })
      };""")
    assert out["none"] == [1, 2, 3, 4]
    assert out["types"] == [1, 2, 3]
    assert out["srcs"] == [2, 3]
    assert out["tagAny"] == [1, 2, 3]
    assert out["tagAll"] == [1]
    assert out["tagNot"] == [2, 4]
    assert out["kwAll"] == [1]
    assert out["kwAny"] == [2, 3]
    assert out["kwNot"] == [2, 3]
    assert out["kwTitle"] == []
    assert out["watched"] == [2]
    assert out["unread"] == [1, 2, 4]
    assert out["plats"] == [3]
    assert out["combo"] == [3]
    assert out["count"] == 4


def test_sort_orders_are_stable():
    out = _run("""
      const list = [A({ id: 1, ty: 'other', src: 'b' }), A({ id: 2, ty: 'vuln', src: 'a' }), A({ id: 3, ty: 'vuln', src: 'b' }),
                    A({ id: 4, ty: 'zzz', src: 'A' })];
      const ids = o => TrackerPages.sort(list, o, h).map(a => a.id);
      return [ids('newest'), ids('oldest'), ids('source'), ids('type')];""")
    assert out == [[1, 2, 3, 4], [4, 3, 2, 1], [2, 4, 1, 3], [2, 3, 1, 4]]


def test_paging_and_pager_window():
    out = _run("""
      const list = Array.from({ length: 45 }, (_, i) => i + 1);
      const s = (size, pn) => { const r = TrackerPages.slice(list, size, pn); return [r.items[0], r.items.length, r.pn, r.pages]; };
      return { endless: s(0, 3), p1: s(20, 1), p3: s(20, 3), over: s(20, 9), under: s(20, -2), junk: s(20, 'x'),
               w1: TrackerPages.pagerWindow(1, 1), w5: TrackerPages.pagerWindow(5, 10), w2: TrackerPages.pagerWindow(2, 4),
               empty: TrackerPages.slice([], 20, 1).pages };""")
    assert out["endless"] == [1, 45, 1, 1]
    assert out["p1"] == [1, 20, 1, 3]
    assert out["p3"] == [41, 5, 3, 3]
    assert out["over"] == [41, 5, 3, 3]
    assert out["under"] == [1, 20, 1, 3]
    assert out["junk"] == [1, 20, 1, 3]
    assert out["w1"] == [1]
    assert out["w5"] == [1, "…", 3, 4, 5, 6, 7, "…", 10]
    assert out["w2"] == [1, 2, 3, 4]
    assert out["empty"] == 1


def test_tag_counts_merge_case_and_order():
    out = _run("""
      const list = [A({ tags: ['Linux', 'CVE', 'linux'] }), A({ tags: ['linux', 'Apple'] }), A({ tags: ['apple', 'Zed'] })];
      return TrackerPages.tagCounts(list, a => a.tags, 10);""")
    assert out == [{"tag": "Apple", "n": 2}, {"tag": "Linux", "n": 2}, {"tag": "CVE", "n": 1}, {"tag": "Zed", "n": 1}]


def test_templates_build_valid_pages():
    out = _run("""
      const st = TrackerPages.defaultState();
      return TrackerPages.TEMPLATES.map(t => TrackerPages.fromTemplate(st, t.id, 'x'));""")
    assert len(out) == 8
    for p in out:
        assert p["id"] == "p1" and p["name"] == "x" and p["layout"] in ("cards", "titles", "compact", "magazine", "table", "bytype")
    assert out[1]["layout"] == "magazine" and out[1]["range"] == "7d" and out[1]["f"]["types"] == ["incident", "vuln", "regulation"]
    assert out[7]["f"] == {"unread": True} and out[7]["size"] == 50


def test_compact_filter_roundtrip():
    out = _run("""
      const f = { tags: ['A'], tagMode: 'all', kwIn: 'title', watched: true, sort: 'type', bogus: 1 };
      const c = TrackerPages.compactFilter(f);
      return [c, TrackerPages.compactFilter(JSON.parse(JSON.stringify(c))), TrackerPages.compactFilter({})];""")
    want = {"tags": ["A"], "tagMode": "all", "kwIn": "title", "watched": True, "sort": "type"}
    assert out == [want, want, {}]
