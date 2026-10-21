"""TrackerPrefs (ui/index.html, TRACKER-PREFS block): pure, migrates the 10 legacy keys,
never writes in preview. Expected values are hand-derived."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _src():
    return HTML.read_text(encoding="utf-8")


def _block():
    m = re.search(r"/\* TRACKER-PREFS:BEGIN \*/(.*?)/\* TRACKER-PREFS:END \*/", _src(), re.S)
    assert m, "TRACKER-PREFS block missing"
    return m.group(1)


def _run(expr):
    js = '"use strict";\n' + _block() + """
function mem(init){ const d = Object.assign({}, init); return { d, getItem: k => (k in d ? d[k] : null), setItem: (k, v) => { d[k] = String(v); } }; }
const boom = { getItem(){ throw new Error('x'); }, setItem(){ throw new Error('x'); } };
process.stdout.write(JSON.stringify((() => {""" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


def test_pure():
    for w in ("window", "document", "localStorage", "location", "state."):
        assert not re.search(r"\b" + re.escape(w), _block()), w


def test_migrate_and_roundtrip():
    out = _run("""
      const s = mem({tracker_lang:'en', tracker_theme:'light', tracker_nav:'collapsed', other:'z'});
      const p = TrackerPrefs.load(s);
      const p2 = TrackerPrefs.set(TrackerPrefs.set(p, 'tracker_lang', 'zh'), 'tracker_nav', null);
      const p3 = TrackerPrefs.set(p2, 'bogus', 'q');
      TrackerPrefs.save(s, p3, true); const afterPv = s.d.tracker_prefs === undefined;
      TrackerPrefs.save(s, p3, false);
      const back = TrackerPrefs.load(mem({tracker_prefs: s.d.tracker_prefs, tracker_lang: 'fr'}));
      return { n: TrackerPrefs.LEGACY_KEYS.length, p: p.values, orig: TrackerPrefs.get(p, 'tracker_lang'),
               p3: p3.values, afterPv, back: back.values, legacyKept: s.d.tracker_lang,
               boom: TrackerPrefs.load(boom).values, miss: TrackerPrefs.get(p, 'tracker_skin') };""")
    assert out["n"] == 10
    assert out["p"] == {"tracker_lang": "en", "tracker_theme": "light", "tracker_nav": "collapsed"}
    assert out["orig"] == "en"
    assert out["p3"] == {"tracker_lang": "zh", "tracker_theme": "light"}
    assert out["afterPv"] is True
    assert out["back"] == {"tracker_lang": "zh", "tracker_theme": "light"}
    assert out["legacyKept"] == "en"
    assert out["boom"] == {} and out["miss"] is None


def test_bad_json_and_wrong_version_migrate():
    out = _run("""
      return [TrackerPrefs.load(mem({tracker_prefs:'{bad', tracker_skin:'classic'})).values,
              TrackerPrefs.load(mem({tracker_prefs: JSON.stringify({v:1, values:{tracker_skin:'md3'}}), tracker_skin:'classic'})).values,
              TrackerPrefs.load(mem({tracker_prefs: JSON.stringify({v:2, values:{tracker_skin:'md3', x:'1', tracker_lang:5}})})).values];""")
    assert out == [{"tracker_skin": "classic"}, {"tracker_skin": "classic"}, {"tracker_skin": "md3"}]


def test_no_direct_tracker_storage_calls():
    s = _src()
    calls = re.findall(r"localStorage\.(?:getItem|setItem)\(\s*'tracker_", s)
    assert calls == [], calls
