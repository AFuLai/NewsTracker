"""Browser-based live dashboard for the pipeline.

A WebReporter (same interface as progress.Reporter) keeps the run state in
memory; a tiny threaded HTTP server serves a self-contained HTML page that polls
/state and renders a graphical dashboard (phase cards, progress bars, ETA, the
current item, and a completion summary).

Works from WSL2: the server binds 0.0.0.0:<port> and Windows localhost
forwarding routes http://localhost:<port> in the user's browser to it — no X
server needed.
"""
from __future__ import annotations

import json
import threading
import time
from dataclasses import asdict
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from .progress import NullReporter

DEFAULT_PORT = 8787


class WebReporter(NullReporter):
    def __init__(self, controller=None):
        self._lock = threading.Lock()
        self.t0 = time.time()
        self.title = ""
        self.phases: list[dict] = []
        self.by_key: dict[str, dict] = {}
        self.current: str | None = None
        self.note_text = ""
        self.finished = False
        self.summary_data: dict | None = None
        self.controller = controller   # live pause/resume/restart/backend control

    # ── Reporter interface ───────────────────────────────────────────────────
    def begin(self, *, since, until, trackers, phases):
        with self._lock:
            self.title = f"{since}..{until} · [{', '.join(trackers)}]"
            self.phases = [{"key": k, "label": lbl, "status": "pending",
                            "result": "", "done": 0, "total": 0, "started_at": 0.0}
                           for k, lbl in phases]
            self.by_key = {p["key"]: p for p in self.phases}
            self.t0 = time.time()

    def enter(self, key, status=""):
        with self._lock:
            p = self.by_key.get(key)
            if not p:
                return
            p["status"] = "running"
            p["result"] = status
            p["started_at"] = time.time()
            p["done"] = p["total"] = 0
            self.current = key
            self.note_text = ""

    def note(self, text):
        with self._lock:
            self.note_text = text or ""

    def tick(self, done, total, note=""):
        with self._lock:
            if self.current:
                p = self.by_key[self.current]
                p["done"], p["total"] = done, total
            if note:
                self.note_text = note

    def result(self, key, text, *, failed=False):
        with self._lock:
            p = self.by_key.get(key)
            if not p:
                return
            p["status"] = "failed" if failed else "done"
            p["result"] = text
            if self.current == key:
                self.current = None
                self.note_text = ""

    def summary(self, rep):
        with self._lock:
            self.finished = True
            self.summary_data = asdict(rep)

    def restarting(self):
        """Called by the CLI between a restart-abort and the new run: clears the
        finished flag so the page shows the run is live again."""
        with self._lock:
            self.finished = False
            self.summary_data = None

    # ── snapshot for the web page ────────────────────────────────────────────
    def snapshot(self) -> dict:
        with self._lock:
            now = time.time()
            eta = None
            if self.current:
                p = self.by_key[self.current]
                if p["total"] and p["done"]:
                    avg = (now - p["started_at"]) / p["done"]
                    eta = (p["total"] - p["done"]) * avg
            control = self.controller.snapshot() if self.controller is not None else None
            return {
                "title": self.title,
                "elapsed": now - self.t0,
                "running": self.current,
                "eta": eta,
                "note": self.note_text,
                "phases": [dict(p) for p in self.phases],
                "finished": self.finished,
                "summary": self.summary_data,
                "control": control,
            }


def _apply_control(controller, cmd: dict) -> bool:
    action = cmd.get("cmd")
    if action == "pause":
        controller.pause(); return True
    if action == "resume":
        controller.resume(); return True
    if action == "restart":
        phase = cmd.get("phase")
        if phase:
            controller.request_restart(phase, bool(cmd.get("force")))
            return True
        return False
    if action == "backend":
        role, backend = cmd.get("role"), cmd.get("backend")
        if role and backend:
            controller.set_backend(role, backend)
            return True
    if action == "close":
        controller.close(); return True
    return False


def serve(reporter: WebReporter, *, port: int = DEFAULT_PORT) -> ThreadingHTTPServer:
    """Start the dashboard HTTP server in a daemon thread. Returns the server."""
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *a):  # silence access logs
            pass

        def do_GET(self):
            if self.path.startswith("/state"):
                body = json.dumps(reporter.snapshot(), ensure_ascii=False).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(body)
            else:
                body = _HTML.encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write(body)

        def do_POST(self):
            ok = False
            if self.path.startswith("/control") and reporter.controller is not None:
                try:
                    n = int(self.headers.get("Content-Length", 0))
                    cmd = json.loads(self.rfile.read(n) or b"{}")
                    ok = _apply_control(reporter.controller, cmd)
                except Exception:
                    ok = False
            body = json.dumps({"ok": ok}).encode("utf-8")
            self.send_response(200 if ok else 400)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)

    httpd = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd


_HTML = r"""<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tracker 執行儀表板</title>
<style>
  :root { --bg:#0f1419; --card:#1a2129; --line:#2a333d; --txt:#e6edf3;
          --dim:#8b98a5; --accent:#2dd4bf; --green:#3fb950; --yellow:#d29922;
          --red:#f85149; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--txt);
         font-family:-apple-system,"Segoe UI","Microsoft JhengHei",sans-serif; }
  .wrap { max-width: 820px; margin: 0 auto; padding: 24px 18px 48px; }
  header { display:flex; align-items:baseline; gap:16px; flex-wrap:wrap;
           border-bottom:1px solid var(--line); padding-bottom:14px; margin-bottom:18px; }
  h1 { font-size:1.15rem; margin:0; font-weight:600; }
  .sub { color:var(--dim); font-size:.9rem; }
  .clock { margin-left:auto; font-variant-numeric:tabular-nums; font-size:1.05rem; }
  .clock b { color:var(--accent); }
  .eta { color:var(--yellow); }
  .phase { display:flex; align-items:center; gap:12px; background:var(--card);
           border:1px solid var(--line); border-radius:10px; padding:12px 16px;
           margin-bottom:10px; transition:border-color .2s; }
  .phase.running { border-color:var(--accent); }
  .ic { width:24px; height:24px; border-radius:50%; display:grid; place-items:center;
        font-size:.85rem; flex:none; }
  .ic.pending { background:#222b34; color:var(--dim); }
  .ic.running { background:var(--yellow); color:#1a1200; animation:pulse 1.1s infinite; }
  .ic.done { background:var(--green); color:#04210b; }
  .ic.failed { background:var(--red); color:#2a0606; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.45} }
  .pl { font-weight:600; width:96px; flex:none; }
  .pl.pending { color:var(--dim); }
  .detail { color:var(--dim); font-size:.92rem; flex:1; min-width:0;
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .bar { height:8px; background:#222b34; border-radius:5px; overflow:hidden;
         flex:1; margin:0 6px; }
  .bar > i { display:block; height:100%; background:var(--accent); width:0;
             transition:width .3s; }
  .count { font-variant-numeric:tabular-nums; color:var(--txt); font-size:.88rem;
           flex:none; }
  .note { color:var(--dim); font-style:italic; font-size:.9rem; margin:8px 4px 0;
          min-height:1.2em; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .summary { margin-top:22px; background:var(--card); border:1px solid var(--green);
             border-radius:12px; padding:18px 22px; }
  .summary.fail { border-color:var(--red); }
  .summary h2 { margin:0 0 12px; font-size:1.05rem; }
  .grid { display:grid; grid-template-columns:auto 1fr; gap:6px 16px; font-size:.95rem; }
  .grid .k { color:var(--dim); text-align:right; }
  .grid .v { font-variant-numeric:tabular-nums; }
  .dot { display:inline-block; width:8px; height:8px; border-radius:50%;
         background:var(--green); margin-right:6px; }
  .dot.off { background:var(--dim); }
  .control { display:flex; flex-wrap:wrap; align-items:center; gap:8px;
             background:var(--card); border:1px solid var(--line); border-radius:10px;
             padding:10px 14px; margin-bottom:14px; font-size:.84rem; }
  .control.hidden { display:none; }
  .control button, .control select { background:#222b34; color:var(--txt);
             border:1px solid var(--line); border-radius:7px; padding:5px 10px;
             cursor:pointer; font-size:.82rem; }
  .control button:hover, .control select:hover { border-color:var(--accent); }
  .control button.primary { background:var(--accent); color:#04210b;
             border-color:transparent; font-weight:600; }
  .control button:disabled { opacity:.4; cursor:default; }
  .control .sep { width:1px; height:20px; background:var(--line); margin:0 4px; }
  .control label { color:var(--dim); }
  .pausedBadge { color:var(--yellow); font-weight:600; }
</style></head>
<body><div class="wrap">
  <header>
    <h1>🛡️ Tracker 執行儀表板</h1>
    <span class="sub" id="title"></span>
    <span class="clock"><span class="dot off" id="live"></span>
      已過 <b id="elapsed">0:00</b><span class="eta" id="eta"></span></span>
  </header>
  <div class="control hidden" id="control">
    <button id="btnPause" class="primary">⏸ 暫停</button>
    <span id="pausedTag"></span>
    <span class="sep"></span>
    <label>Summarize</label>
    <select id="beSum"><option value="ollama">Ollama</option><option value="gemini">Gemini</option></select>
    <label>Translate</label>
    <select id="beTra"><option value="ollama">Ollama</option><option value="gemini">Gemini</option></select>
    <span class="sep"></span>
    <label>從</label>
    <select id="reFrom">
      <option value="fetch">Fetch</option><option value="gate">Gate</option>
      <option value="summarize" selected>Summarize</option><option value="translate">Translate</option>
      <option value="write">Write</option><option value="cleanup">Cleanup</option>
    </select>
    <label><input type="checkbox" id="reForce"> 強制重做</label>
    <button id="btnRestart">↻ 重新來過</button>
    <span class="sep"></span>
    <button id="btnClose">✕ 關閉</button>
  </div>
  <div id="phases"></div>
  <div class="note" id="note"></div>
  <div id="summary"></div>
</div>
<script>
const $ = id => document.getElementById(id);
function fmt(s){ s=Math.max(0,Math.floor(s)); const h=(s/3600|0),m=(s%3600/60|0),x=s%60;
  return h? `${h}:${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`
          : `${m}:${String(x).padStart(2,'0')}`; }
const ICON={pending:'○',running:'▶',done:'✓',failed:'✗'};
let CTRL=null;
async function ctl(cmd){ try{ await fetch('/control',{method:'POST',
  headers:{'Content-Type':'application/json'}, body:JSON.stringify(cmd)}); }catch(e){} }
$('btnPause').onclick = ()=> ctl({cmd:(CTRL&&CTRL.paused)?'resume':'pause'});
$('beSum').onchange = e=> ctl({cmd:'backend', role:'summarize', backend:e.target.value});
$('beTra').onchange = e=> ctl({cmd:'backend', role:'translate', backend:e.target.value});
$('btnRestart').onclick = ()=> ctl({cmd:'restart', phase:$('reFrom').value, force:$('reForce').checked});
$('btnClose').onclick = ()=> { ctl({cmd:'close'}); };
function syncControl(st){
  if(!st.control){ $('control').classList.add('hidden'); return; }
  CTRL = st.control;
  $('control').classList.remove('hidden');
  $('btnPause').textContent = st.control.paused ? '▶ 恢復' : '⏸ 暫停';
  $('pausedTag').innerHTML = st.control.paused ? '<span class="pausedBadge">⏸ 已暫停</span>' : '';
  if(document.activeElement!==$('beSum')) $('beSum').value = st.control.backends.summarize;
  if(document.activeElement!==$('beTra')) $('beTra').value = st.control.backends.translate;
  // pause toggle is only meaningful while a run is live
  $('btnPause').disabled = !!st.finished;
}
async function poll(){
  let st; try{ st=await (await fetch('/state',{cache:'no-store'})).json(); }catch(e){ return; }
  syncControl(st);
  $('title').textContent = st.title || '';
  $('elapsed').textContent = fmt(st.elapsed);
  $('eta').textContent = (st.running && st.eta!=null) ? `　預估剩餘 ~${fmt(st.eta)}` : '';
  $('live').className = 'dot' + (st.finished?' off':'');
  const ph = st.phases.map(p=>{
    const running = p.status==='running';
    let mid;
    if(running && p.total){
      const pct = Math.round(100*p.done/p.total);
      mid = `<div class="bar"><i style="width:${pct}%"></i></div>`+
            `<span class="count">${p.done}/${p.total}</span>`;
      if(p.result) mid = `<span class="detail">${esc(p.result)}</span>`+mid;
    } else {
      mid = `<span class="detail">${esc(p.result||'')}</span>`;
    }
    return `<div class="phase ${running?'running':''}">`+
      `<span class="ic ${p.status}">${ICON[p.status]}</span>`+
      `<span class="pl ${p.status==='pending'?'pending':''}">${esc(p.label)}</span>`+
      mid + `</div>`;
  }).join('');
  $('phases').innerHTML = ph;
  $('note').textContent = st.note ? '↳ '+st.note : '';
  if(st.finished && st.summary){
    const s=st.summary, ok=s.ok;
    $('summary').innerHTML =
      `<div class="summary ${ok?'':'fail'}"><h2>更新完成 · run#${s.run_id} · `+
      `${ok?'✅ 成功':'❌ 失敗'}</h2><div class="grid">`+
      row('擷取', `${s.fetch_new} 新 / ${s.fetch_sources} 來源 (304:${s.fetch_304}, 失敗:${s.fetch_failed})`)+
      row('過濾掉', s.gated_out)+
      row('摘要', `${s.summarized} / ${s.summarize_attempted}（窗外 ${s.out_of_window}, 審核退回 ${s.review_failed}）`)+
      row('LLM 後端', `Sum:${s.summarize_backend||'ollama'} · Tra:${s.translate_backend||'ollama'}${s.gemini_fallback? ' · Gemini退回 '+s.gemini_fallback:''}`)+
      row('跨主類', `+${s.cross_added} / -${s.cross_removed}`)+
      row('寫入天數', s.days_written)+
      row('錯誤', (s.errors||[]).length)+
      row('耗時', fmt(s.elapsed_s))+
      `</div></div>`;
  }
}
function row(k,v){ return `<div class="k">${k}</div><div class="v">${esc(v)}</div>`; }
function esc(x){ return String(x==null?'':x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
poll(); setInterval(poll, 800);
</script></body></html>"""
