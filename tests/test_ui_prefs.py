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


def test_trial_view_says_it_does_not_save():
    """?pv=1 never writes, so the page says so and links to the saving page,
    instead of dropping the reader's changes silently (2026-11-25)."""
    s = _src()
    assert re.search(r"function pvNote\(\)\s*\{\s*if \(!isPreviewMode\(\)", s)
    assert re.search(r"^\s*pvNote\(\);", s, re.M), "pvNote() is never called"
    assert "searchParams.delete('pv')" in s


def test_disk_push_keepalive_stays_under_chrome_limit():
    """Chrome rejects a keepalive fetch body over 64 KiB, which would drop the /prefs disk copy."""
    m = re.search(r"function prefsPush\(\)\s*\{(.*?)\n\}", _src(), re.S)
    assert m, "prefsPush missing"
    assert "keepalive: body.length < 60000" in m.group(1)
    assert "keepalive: true" not in m.group(1)


def test_was_cleared_only_when_same_origin_lost_its_data():
    """Local console: the browser holding nothing while the disk copy, written from this same
    origin, holds settings means the browser cleared site data on exit (2026-11-26)."""
    out = _run("""
      const O = 'http://127.0.0.1:8787';
      const P = v => ({ v: 2, values: v });
      const w = TrackerPrefs.wasCleared;
      return [
        w(P({}), P({tracker_theme: 'dark', tracker_origin: O}), O),          // cleared
        w(P({tracker_theme: 'dark'}), P({tracker_theme: 'dark', tracker_origin: O}), O),  // browser kept it
        w(P({}), P({tracker_theme: 'dark', tracker_origin: 'http://127.0.0.1:8788'}), O), // port moved
        w(P({}), P({tracker_theme: 'dark'}), O),                             // disk from before 2.34
        w(P({}), P({tracker_origin: O}), O),                                 // nothing but the marker
        w(P({}), P({}), O),
        TrackerPrefs.get(TrackerPrefs.set(P({}), 'tracker_store_note', 'off'), 'tracker_store_note'),
        TrackerPrefs.get(TrackerPrefs.set(P({}), 'tracker_origin', O), 'tracker_origin')];""")
    assert out == [True, False, False, False, False, False, "off", "http://127.0.0.1:8787"]


def test_store_notes_are_wired():
    s = _src()
    assert re.search(r"prefsCleared = TrackerPrefs\.wasCleared\(prefs, sp, location\.origin\)", s)
    assert re.search(r"prefSet\('tracker_origin', location\.origin\)", s)
    assert re.search(r"^\s*storeNote\(\);", s, re.M), "storeNote() is never called"
    m = re.search(r"function storeNote\(\)\s*\{(.*?)\n\}", s, re.S)
    assert m and "isPreviewMode()" in m.group(1) and "'tracker_store_note'" in m.group(1)
    # the online edition (no disk copy) gets the fixed hint in 個人化 → 版面設定檔
    assert re.search(r"if \(!PREFS_SERVER\) \{\s*// Online edition", s)
