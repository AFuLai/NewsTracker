"""TrackerPages additions (ui/index.html, TRACKER-PAGES block): per-page display options (`look`),
the pinned search (`q`), the start page (`home`) and the 為你推薦 sort. Pure; run under node."""
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


def test_look_query_and_home_are_normalised():
    out = _run("""
      const st = TrackerPages.normState({ v: 1, active: 'a', home: 'b', pages: [
        { id: 'a', look: { d: 'roomy', fs: 'l', sum: false, tg: true }, q: '  tag:CVE  ' },
        { id: 'b', look: { d: 'huge', fs: 9, sum: 'no', tg: 1 } } ] });
      const homes = ['nope', 't:Bad Name', 'hub', 't:eu_cra', 5].map(home =>
        TrackerPages.normState({ v: 1, home, pages: [{ id: 'a' }] }).home);
      return { st, homes, def: TrackerPages.defaultState().home, back: TrackerPages.parse(TrackerPages.serialize(st)) };""")
    a, b = out["st"]["pages"]
    assert a["look"] == {"d": "roomy", "fs": "l", "sum": False, "tg": True} and a["q"] == "tag:CVE"
    assert b["look"] == {"d": "cozy", "fs": "m", "sum": True, "tg": False} and b["q"] == ""
    assert out["st"]["home"] == "b"
    assert out["homes"] == ["", "", "hub", "t:eu_cra", ""] and out["def"] == ""
    assert out["back"] == out["st"]


def test_foryou_sort_uses_the_rank_helper():
    out = _run("""
      const list = [A({ id: 1 }), A({ id: 2 }), A({ id: 3 })];
      const ranked = TrackerPages.sort(list, 'foryou', Object.assign({}, h, { rank: l => l.slice().reverse() })).map(a => a.id);
      const plain = TrackerPages.sort(list, 'foryou', h).map(a => a.id);
      return [ranked, plain, TrackerPages.normFilter({ sort: 'foryou' }).sort, TrackerPages.LAYOUTS.length];""")
    assert out == [[3, 2, 1], [1, 2, 3], "foryou", 9]
