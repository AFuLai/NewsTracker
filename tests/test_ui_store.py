"""TrackerStore (ui/index.html, TRACKER-STORE block) is pure and runs under node.
Expected values are hand-derived from the fixtures below, not from the implementation."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _block():
    s = HTML.read_text(encoding="utf-8")
    m = re.search(r"/\* TRACKER-STORE:BEGIN \*/(.*?)/\* TRACKER-STORE:END \*/", s, re.S)
    assert m, "TRACKER-STORE block missing"
    return m.group(1)


def _run(expr):
    js = '"use strict";\n' + _block() + "\nprocess.stdout.write(JSON.stringify((() => {" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


DAYS = """const D = {
 '2026-10-18': [{id:'20261018-1', title:'A CVE-2026-1111', category:'漏洞'}],
 '2026-10-19': [{id:'20261019-2', title:'B', tags:['cve-2026-1111','x']}, null, {id:'20261018-1', title:'A again'}],
 '2026-10-20': [{id:'20261020-3', title:'C', category:'漏洞', summary:'see CVE-2026-2222 and CVE-2026-1111'}, {title:'noid'}],
 '2026-10-21': [],
 'bad': 5 };"""


def test_block_is_pure():
    b = _block()
    for w in ("window", "document", "localStorage", "location", "state."):
        assert not re.search(r"\b" + re.escape(w), b), w


def test_keys_dates_collect_dedup():
    out = _run(DAYS + """
      const all = TrackerStore.collect(D, {fromDate:'2026-10-18', toDate:'2026-10-21'});
      const picked = TrackerStore.collect(D, {dates:['2026-10-20','2026-10-18','2026-10-19']});
      return { newest: TrackerStore.newestDate(D), shift: TrackerStore.shiftDate('2026-03-01', -1),
               k: TrackerStore.keyOf({title:'t'}, '2026-01-02'), k0: TrackerStore.keyOf({id:0}, 'x'),
               all: all.map(a => a._key + '@' + a._date), picked: picked.map(a => a._key),
               sorted: TrackerStore.sortNewest(all).map(a => a._key) };""")
    assert out["newest"] == "2026-10-20"
    assert out["shift"] == "2026-02-28"
    assert out["k"] == "2026-01-02|t" and out["k0"] == "0"
    assert out["all"] == ["20261018-1@2026-10-18", "20261019-2@2026-10-19",
                          "20261020-3@2026-10-20", "2026-10-20|noid@2026-10-20"]
    assert out["picked"] == ["20261020-3", "2026-10-20|noid", "20261018-1", "20261019-2"]
    assert out["sorted"] == ["2026-10-20|noid", "20261020-3", "20261019-2", "20261018-1"]


def test_cves_and_reader_context():
    out = _run(DAYS + """
      const list = TrackerStore.sortNewest(TrackerStore.collect(D, {fromDate:'2026-10-18', toDate:'2026-10-20'}));
      const ty = a => a.category || 'other';
      const c = TrackerStore.getReaderContext('20261019-2', list, {typeOf: ty});
      const d = TrackerStore.getReaderContext('20261020-3', list, {typeOf: ty});
      const z = TrackerStore.getReaderContext('nope', list);
      return { cv: TrackerStore.extractCves(list[1]),
               c: [c.index, c.total, c.prevArticle._key, c.nextArticle._key, c.nextInType && c.nextInType._key,
                   c.sameCveArticles.map(a => a._key)],
               d: [d.nextInType && d.nextInType._key, d.sameCveArticles.map(a => a._key)],
               z: [z.index, z.article, z.prevArticle, z.sameCveArticles.length, z.total] };""")
    assert out["cv"] == ["CVE-2026-2222", "CVE-2026-1111"]
    assert out["c"] == [2, 4, "20261020-3", "20261018-1", None, ["20261018-1", "20261020-3"]]
    assert out["d"] == ["20261018-1", ["20261018-1", "20261019-2"]]
    assert out["z"] == [-1, None, None, 0, 4]
