"""TrackerPersonal (ui/index.html, TRACKER-PERSONAL block): the reading-taste profile, the 為你推薦
score, visits (「新」 since the last visit), the start page, the greeting and the settings. Pure; run
under node. Expected values are hand-derived."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _block():
    m = re.search(r"/\* TRACKER-PERSONAL:BEGIN \*/(.*?)/\* TRACKER-PERSONAL:END \*/", HTML.read_text(encoding="utf-8"), re.S)
    assert m, "TRACKER-PERSONAL block missing"
    return m.group(1)


def _run(expr):
    js = '"use strict";\n' + _block() + "process.stdout.write(JSON.stringify((() => {" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


def test_pure():
    for w in ("window", "document", "localStorage", "location", "state.", "Date.now", "new Date("):
        assert w not in _block(), w


def test_learn_decays_and_caps():
    out = _run("""
      let t = TrackerPersonal.emptyTaste();
      t = TrackerPersonal.learn(t, { type: 'Vuln', tags: ['CVE', 'cve', ' AI ', 'a', 'b', 'c', 'd', 'e', 'f', 'g'] });
      t = TrackerPersonal.learn(t, { type: 'vuln', tags: ['CVE'] });
      return [t, TrackerPersonal.parseTaste('{bad'), TrackerPersonal.parseTaste(JSON.stringify({ v: 1, n: 2.7, ty: { X: -1, y: 2 }, tg: [] }))];""")
    t, bad, odd = out
    assert t["n"] == 2 and t["ty"] == {"vuln": 1.97}
    # first article: cve, ai, a..f (8 tags, the duplicate 'cve' merged); second: cve again
    assert t["tg"]["cve"] == 1.97 and t["tg"]["ai"] == 0.97 and t["tg"]["f"] == 0.97 and "g" not in t["tg"]
    assert bad == {"v": 1, "n": 0, "ty": {}, "tg": {}}
    assert odd == {"v": 1, "n": 2, "ty": {"y": 2}, "tg": {}}


def test_affinity_needs_three_reads():
    out = _run("""
      const t2 = { v: 1, n: 2, ty: { vuln: 2 }, tg: { cve: 2 } };
      const t = { v: 1, n: 3, ty: { vuln: 2, regulation: 1 }, tg: { cve: 2, ai: 1 } };
      const f = (type, tags) => ({ type, tags });
      return [TrackerPersonal.affinity(t2, f('vuln', ['cve'])), TrackerPersonal.affinity(t, f('vuln', ['cve'])),
              TrackerPersonal.affinity(t, f('regulation', ['ai'])), TrackerPersonal.affinity(t, f('other', []))];""")
    assert out == [0, 1, 0.5, 0]


def test_score_and_rank():
    out = _run("""
      const taste = { v: 1, n: 5, ty: { vuln: 4 }, tg: {} };
      const nw = '2026-11-20';
      const s = f => TrackerPersonal.score(f, taste, nw);
      const items = [{ id: 'old', date: '2026-11-10', type: 'other' }, { id: 'fresh', date: '2026-11-20', type: 'other' },
                     { id: 'liked', date: '2026-11-18', type: 'vuln' }, { id: 'read', date: '2026-11-20', type: 'vuln', read: true },
                     { id: 'tie', date: '2026-11-20', type: 'other' }];
      return { fresh: s({ date: nw }), watched: s({ date: nw, watched: true }), old: s({ date: '2026-11-16' }),
               nodate: s({}), read: s({ date: nw, read: true }),
               rank: TrackerPersonal.rank(items, x => x, taste, nw).map(x => x.id) };""")
    assert out["fresh"] == 0.45 and out["watched"] == 0.7 and out["old"] == 0.15
    assert out["nodate"] == 0.0281 and out["read"] == 0.05
    # liked: 0.45/2 + 0.35*0.55 = 0.4175 < fresh 0.45; read vuln: 0.45 + 0.1925 - 0.4 = 0.2425
    assert out["rank"] == ["fresh", "tie", "liked", "read", "old"]


def test_visit_sessions():
    out = _run("""
      const H = 3600 * 1000;
      const v1 = TrackerPersonal.visit(null, '2026-11-20', 1000 * H);                      // first ever
      const v2 = TrackerPersonal.visit(JSON.stringify(v1.state), '2026-11-21', 1002 * H);  // reload 2 h later
      const v3 = TrackerPersonal.visit(v2.state, '2026-11-22', 1010 * H);                  // new session 8 h later
      const v4 = TrackerPersonal.visit('{bad', 'nope', 0);
      return [v1, v2, v3, v4];""")
    v1, v2, v3, v4 = out
    assert v1["since"] == "" and v1["state"] == {"v": 1, "base": "", "seen": "2026-11-20", "at": 3600000000}
    assert v2["since"] == "" and v2["state"]["seen"] == "2026-11-21" and v2["state"]["at"] == 3600000000
    assert v3["since"] == "2026-11-21" and v3["state"] == {"v": 1, "base": "2026-11-21", "seen": "2026-11-22", "at": 3636000000}
    assert v4["since"] == "" and v4["state"]["seen"] == ""


def test_home_target_greeting_settings():
    out = _run("""
      const ht = h => TrackerPersonal.homeTarget(h, ['main', 'p1'], ['security', 'eu_cra']);
      return { ht: ['', 'hub', 't:eu_cra', 't:gone', 'p1', 'p9', null].map(ht),
               g: [4, 5, 10, 11, 13, 14, 17, 18, 22, 23].map(TrackerPersonal.greeting),
               def: TrackerPersonal.parseSettings(null),
               set: TrackerPersonal.parseSettings(JSON.stringify({ greet: false, learn: 0, tips: false, wiz: 'done',
                 wizPage: 'p1', tipsSeen: ['search', 'search', 'Bad!', 3], gearSeen: true })) };""")
    assert out["ht"] == [{"kind": "last"}, {"kind": "hub"}, {"kind": "tracker", "name": "eu_cra"}, {"kind": "last"},
                         {"kind": "page", "id": "p1"}, {"kind": "last"}, {"kind": "last"}]
    assert out["g"] == ["night", "morning", "morning", "noon", "noon", "afternoon", "afternoon", "evening", "evening", "night"]
    assert out["def"] == {"v": 1, "greet": True, "learn": True, "tips": True, "wiz": "", "wizPage": "", "tipsSeen": [], "gearSeen": False}
    s = out["set"]
    assert s["greet"] is False and s["learn"] is True and s["tips"] is False and s["wiz"] == "done"
    assert s["wizPage"] == "p1" and s["tipsSeen"] == ["search"] and s["gearSeen"] is True
