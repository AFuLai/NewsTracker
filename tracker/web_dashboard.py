"""Browser-based live dashboard for the pipeline.

A WebReporter (same interface as progress.Reporter) keeps the run state in
memory; a tiny threaded HTTP server serves a self-contained HTML page that polls
/state and renders a graphical dashboard (phase cards, progress bars, ETA, the
current item, and a completion summary).

Works from WSL2: the server binds 127.0.0.1:<port> and WSL2's localhost
forwarding routes http://localhost:<port> in the user's Windows browser to it
— no X server needed. The bind host defaults to loopback so the control
endpoint (which can run the pipeline and repoint the LLM endpoint) is not
exposed to the LAN; set TRACKER_DASHBOARD_HOST=0.0.0.0 to opt into LAN access.
"""
from __future__ import annotations

import json
import mimetypes
import os
import threading
import time
from dataclasses import asdict
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from pathlib import Path
from urllib.parse import unquote, urlsplit

from . import DEFAULT_OUT, ROOT
from .progress import NullReporter

DEFAULT_PORT = 8787

# ── publish (Firebase) state ────────────────────────────────────────────────
# One deploy at a time, run off the HTTP handler thread (a firebase deploy takes
# tens of seconds). The dict is only touched under _DEPLOY_LOCK; snapshot()
# hands the page a copy.
_DEPLOY_LOCK = threading.Lock()
_DEPLOY: dict = {"state": "idle", "channel": "", "message": "",
                 "started_at": 0.0, "finished_at": 0.0}


def _deploy_snapshot() -> dict:
    with _DEPLOY_LOCK:
        return dict(_DEPLOY)


def _deploy_worker(channel: str) -> None:
    from . import deploy as _deploy_mod
    try:
        out = _deploy_mod.deploy(channel=channel or None)
        state, message = "ok", str(out or "")
    except _deploy_mod.DeployError as exc:
        state, message = "failed", str(exc) or "DeployError"
    except Exception as exc:  # a failure is never swallowed or reported as ok
        state, message = "failed", f"{type(exc).__name__}: {exc}"
    with _DEPLOY_LOCK:
        _DEPLOY.update(state=state, message=message, finished_at=time.time())


def _start_deploy(channel) -> tuple[bool, str]:
    if channel is None:
        channel = ""
    if not isinstance(channel, str):
        return False, "頻道名稱格式不正確"
    channel = channel.strip()
    with _DEPLOY_LOCK:
        if _DEPLOY["state"] == "running":
            return False, "已有發布作業進行中，請等它結束"
        _DEPLOY.update(state="running", channel=channel, message="",
                       started_at=time.time(), finished_at=0.0)
    try:
        threading.Thread(target=_deploy_worker, args=(channel,),
                         daemon=True, name="dashboard-deploy").start()
    except Exception as exc:
        with _DEPLOY_LOCK:
            _DEPLOY.update(state="failed", message=f"無法啟動發布：{exc}",
                           finished_at=time.time())
        return False, f"無法啟動發布：{exc}"
    return True, ""


class WebReporter(NullReporter):
    def __init__(self, controller=None, cra_job=None):
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
        self.cra_job = cra_job         # CRA reference-library sync, run on demand

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
            cralib = self.cra_job.snapshot() if self.cra_job is not None else None
            from . import ollama_hosts as hosts
            return {
                "ollama": hosts.overview(),
                "cralib": cralib,
                "title": self.title,
                "elapsed": now - self.t0,
                "running": self.current,
                "eta": eta,
                "note": self.note_text,
                "phases": [dict(p) for p in self.phases],
                "finished": self.finished,
                "summary": self.summary_data,
                "control": control,
                "deploy": _deploy_snapshot(),
            }


def _apply_control(controller, cmd: dict, cra_job=None) -> tuple[bool, str]:
    """Apply one command. Returns (ok, message) — the message is what the page
    shows the user, and endpoint selection needs one: "10.139.180.21 is not
    answering" and "the remote window is closed" are different refusals, and a
    bare red X makes the user guess which."""
    action = cmd.get("cmd")
    if action == "cralib":
        return bool(cra_job is not None and cra_job.start()), ""
    if action == "deploy":
        # Before the controller check, like cralib: publishing the site does
        # not depend on a pipeline run being in flight.
        return _start_deploy(cmd.get("channel"))
    if action in ("endpoint", "endpoint-add", "endpoint-remove", "endpoint-policy"):
        # Deliberately before the controller check: which ollama serves this
        # box is a process-wide setting, and the picker is most useful exactly
        # when no run is in flight yet.
        from . import ollama_hosts as hosts
        if action == "endpoint-policy":
            return hosts.set_policy(cmd.get("window"), cmd.get("concurrency"))
        fn = {"endpoint": hosts.use, "endpoint-add": hosts.add_endpoint,
              "endpoint-remove": hosts.remove_endpoint}[action]
        return fn(cmd.get("url") or "")
    if controller is None:
        return False, "no run to control"
    if action == "start":
        return controller.request_start(cmd.get("config")), ""
    if action == "pause":
        controller.pause(); return True, ""
    if action == "resume":
        controller.resume(); return True, ""
    if action == "restart":
        phase = cmd.get("phase")
        if phase:
            controller.request_restart(phase, bool(cmd.get("force")))
            return True, ""
        return False, "no phase given"
    if action == "backend":
        role, backend = cmd.get("role"), cmd.get("backend")
        if role and backend:
            controller.set_backend(role, backend)
            return True, ""
    if action == "close":
        controller.close(); return True, ""
    return False, "unknown command"


def serve(reporter: WebReporter, *, port: int = DEFAULT_PORT) -> ThreadingHTTPServer:
    """Start the dashboard HTTP server in a daemon thread. Returns the server."""
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *a):  # silence access logs
            pass

        def _serve_site(self):
            # Local preview of the public site: /site/index.html is the live
            # ui/index.html (no render needed), everything else comes from
            # DEFAULT_OUT. DEFAULT_OUT/ROOT are read from this module's globals
            # at request time so tests can monkeypatch them.
            raw = urlsplit(self.path).path
            if raw == "/site":
                self.send_response(302)
                self.send_header("Location", "/site/index.html")
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                return
            rel = unquote(raw[len("/site/"):])
            if rel in ("", "index.html"):
                base, rel = Path(ROOT) / "ui", "index.html"
            else:
                base = Path(DEFAULT_OUT)
            target = None
            try:
                base_r = base.resolve()
                cand = (base_r / rel).resolve()
                if cand.is_relative_to(base_r) and cand.is_file():
                    target = cand
            except (OSError, ValueError):
                target = None
            if target is None:
                self.send_response(404)
                self.send_header("Content-Type", "text/plain; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(b"not found")
                return
            ctype = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
            if target.suffix == ".js":
                ctype = "text/javascript"
            data = target.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)

        def do_GET(self):
            if self.path == "/site" or self.path.startswith("/site/"):
                self._serve_site()
            elif self.path.startswith("/state"):
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
            ok, msg = False, ""
            if self.path.startswith("/control"):
                try:
                    n = int(self.headers.get("Content-Length", 0))
                    cmd = json.loads(self.rfile.read(n) or b"{}")
                    ok, msg = _apply_control(reporter.controller, cmd,
                                             reporter.cra_job)
                except Exception as exc:
                    ok, msg = False, str(exc)
            body = json.dumps({"ok": ok, "msg": msg},
                              ensure_ascii=False).encode("utf-8")
            self.send_response(200 if ok else 400)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)

    # Loopback by default: the control endpoint can start the pipeline and
    # repoint the LLM backend, so it must not be reachable from the LAN. WSL2
    # localhost forwarding still routes the Windows browser to 127.0.0.1. A
    # deliberate LAN deployment sets TRACKER_DASHBOARD_HOST=0.0.0.0.
    host = os.environ.get("TRACKER_DASHBOARD_HOST", "127.0.0.1").strip() or "127.0.0.1"
    httpd = ThreadingHTTPServer((host, port), Handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd


_HTML = r"""<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NewsTracker 控制台 · Tracker 執行儀表板</title>
<style>
  /* Single-screen ops board: dense (13px body, 10-12px card padding/gaps), 1px
     borders instead of shadows, 8px radius, system monospace for numbers (no
     external fonts). */
  :root { --bg:#f4f5f7; --card:#ffffff; --line:#dadee5; --txt:#15181d;
          --dim:#5b6472; --accent:#1e4fd0; --accent-ink:#ffffff; --soft:#eef0f3;
          --green:#1a8a4c; --yellow:#b7791f; --red:#d93b3b;
          --band:#15181d; --band-ink:#f4f5f7; --band-dim:#aeb6c2; --band-line:#3a414d;
          --radius:8px;
          --mono:ui-monospace,SFMono-Regular,"IBM Plex Mono",Menlo,Consolas,"Liberation Mono",monospace; }
  @media (prefers-color-scheme: dark) {
    :root { --bg:#0f1319; --card:#181e27; --line:#2a3340; --txt:#e8edf3;
            --dim:#92a0b1; --accent:#7f9bff; --accent-ink:#10122b; --soft:#222a36;
            --green:#3fb970; --yellow:#e0a93b; --red:#f2605c; }
  }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--txt); line-height:1.45; font-size:13px;
         font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft JhengHei",
                     "PingFang TC","Noto Sans TC",sans-serif; }
  .hero { position:sticky; top:0; z-index:10; display:flex; flex-wrap:wrap; align-items:center;
          gap:6px 14px; min-height:44px; padding:6px 16px; background:var(--band);
          color:var(--band-ink); border-bottom:1px solid var(--band-line); }
  .brand { font-size:14px; font-weight:700; letter-spacing:.02em; flex:none; }
  .pill { display:inline-flex; align-items:center; gap:6px; padding:2px 10px; flex:none;
          border:1px solid var(--band-line); border-radius:999px; font-size:12px; }
  .hero .state { font-weight:600; }
  .hero.run .state { color:#9db1ff; }
  .hero.ok .state { color:#5fd391; }
  .hero.fail .state { color:#ff7b78; }
  .hero .sub { color:var(--band-dim); min-width:0; flex:0 1 auto; overflow:hidden;
               text-overflow:ellipsis; white-space:nowrap; }
  .hero .clock { font-family:var(--mono); font-variant-numeric:tabular-nums; color:var(--band-dim); flex:none; }
  .hero .clock b { color:var(--band-ink); font-weight:500; }
  .hero .grow { flex:1 1 0; }
  .eta { color:#e0a93b; }
  .wrap { max-width:1440px; margin:0 auto; padding:12px 16px 24px; display:grid;
          grid-template-columns:minmax(0,7fr) minmax(0,5fr); gap:12px; align-items:start; }
  .col { display:flex; flex-direction:column; gap:12px; min-width:0; }
  @media (max-width:1100px) {
    .wrap { grid-template-columns:minmax(0,1fr); padding:10px 10px 20px; }
  }
  .card { background:var(--card); border:1px solid var(--line); border-radius:var(--radius);
          padding:10px 12px; min-width:0; }
  .card.hidden { display:none; }
  .card > h2 { margin:0 0 8px; font-size:12px; font-weight:600; letter-spacing:.06em; color:var(--dim); }
  button, select, input { font:inherit; font-size:13px; color:var(--txt); background:var(--soft);
          border:1px solid var(--line); border-radius:6px; padding:4px 10px; min-width:0; max-width:100%; }
  button { cursor:pointer; font-weight:600; }
  button:hover:not(:disabled), select:hover { border-color:var(--accent); }
  button:disabled { opacity:.45; cursor:default; }
  button.primary, #btnStart { background:var(--accent); color:var(--accent-ink);
          border-color:transparent; }
  #btnStart { padding:6px 18px; font-weight:700; margin-top:2px; }
  #btnStart:hover { filter:brightness(1.1); }
  .hero button, .hero select, .hero input { background:#232a34; color:var(--band-ink);
          border-color:var(--band-line); padding:3px 8px; }
  .hero button.primary { background:var(--accent); color:#fff; border-color:transparent; }
  .phase { display:flex; align-items:center; gap:10px; background:var(--soft);
           border:1px solid var(--line); border-radius:var(--radius); padding:6px 10px;
           margin-bottom:6px; transition:border-color .2s; }
  .phase.running { border-color:var(--accent); }
  .ic { width:20px; height:20px; border-radius:50%; display:grid; place-items:center;
        font-size:11px; flex:none; }
  .ic.pending { background:var(--line); color:var(--dim); }
  .ic.running { background:var(--yellow); color:#1a1200; animation:pulse 1.1s infinite; }
  .ic.done { background:var(--green); color:#fff; }
  .ic.failed { background:var(--red); color:#fff; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.45} }
  .pl { font-weight:600; width:84px; flex:none; }
  .pl.pending { color:var(--dim); }
  .detail { color:var(--dim); flex:1; min-width:0; font-family:var(--mono); font-size:12px;
            overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .bar { height:6px; background:var(--line); border-radius:3px; overflow:hidden;
         flex:1; margin:0 4px; }
  .bar > i { display:block; height:100%; background:var(--accent); width:0; transition:width .3s; }
  .count { font-family:var(--mono); font-variant-numeric:tabular-nums; font-size:12px; flex:none; }
  .note { color:var(--dim); font-style:italic; margin:6px 2px 0;
          min-height:1.2em; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .summary { margin-top:10px; border:1px solid var(--green); border-radius:var(--radius);
             padding:10px 12px; background:var(--soft); }
  .summary.fail { border-color:var(--red); }
  .summary h2 { margin:0 0 8px; font-size:12px; font-weight:600; letter-spacing:.06em; }
  .grid { display:grid; grid-template-columns:auto 1fr; gap:4px 12px; }
  .grid .k { color:var(--dim); text-align:right; }
  .grid .v { font-family:var(--mono); font-variant-numeric:tabular-nums; min-width:0; overflow-wrap:anywhere; }
  .dot { display:inline-block; width:8px; height:8px; border-radius:50%;
         background:#3fb970; }
  .dot.off { background:#8b95a5; }
  .control { display:flex; flex-wrap:wrap; align-items:center; gap:6px 8px; }
  .control.hidden { display:none; }
  .control .sep { width:1px; height:20px; background:var(--band-line); margin:0 2px; }
  .control label { color:var(--band-dim); }
  .pausedBadge { color:var(--yellow); font-weight:600; }
  .config.hidden { display:none; }
  .cfgrow { display:flex; flex-wrap:wrap; align-items:center; gap:6px 10px; margin-bottom:8px; }
  .cfgrow > label { color:var(--dim); min-width:60px; }
  .config input[type=checkbox] { width:auto; min-width:0; }
  .config .chk { color:var(--txt); display:inline-flex; align-items:center; gap:5px; }
  .depstate { display:inline-flex; align-items:center; gap:8px; font-size:14px;
              font-weight:700; color:var(--dim); }
  .depstate.running { color:var(--accent); }
  .depstate.ok { color:var(--green); }
  .depstate.failed { color:var(--red); }
  .spin { width:14px; height:14px; border:2px solid var(--line); border-top-color:var(--accent);
          border-radius:50%; animation:spin .8s linear infinite; }
  @keyframes spin { to { transform:rotate(360deg); } }
  .depmeta { display:grid; grid-template-columns:auto minmax(0,1fr); gap:4px 12px; margin:8px 0 10px; }
  .depmeta .k { color:var(--dim); }
  .depmeta .v { min-width:0; overflow-wrap:anywhere; }
  .depmeta a { color:var(--accent); }
  .btnrow { display:flex; flex-wrap:wrap; align-items:center; gap:8px; }
  .cra.hidden { display:none; }
  .crahead { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
  .crahead b { font-weight:600; }
  .crastat { color:var(--dim); flex:1; min-width:0; overflow:hidden;
         text-overflow:ellipsis; white-space:nowrap; }
  .crastat.ok { color:var(--green); }
  .crastat.err { color:var(--red); }
  .craprog { display:flex; align-items:center; gap:8px; margin-top:8px; }
  .craprog.hidden { display:none; }
  .cralist { margin-top:8px; display:flex; flex-direction:column; gap:4px; }
  .cralist:empty { display:none; }
  .cralist a { color:var(--txt); text-decoration:none; }
  .cralist a:hover { text-decoration:underline; }
  .cralist .row { display:flex; align-items:baseline; gap:8px; min-width:0; }
  .cralist .t { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .cralist .cl { color:var(--dim); font-size:11px; flex:none; }
  .cralist .d { flex:none; font-family:var(--mono); font-variant-numeric:tabular-nums; font-size:11px;
         color:var(--accent); cursor:help; }
  .cralist .d.weak { color:var(--dim); text-decoration:underline dotted; }
  .cralist .d.dim { color:var(--dim); }
  .chip { flex:none; border-radius:5px; padding:1px 6px; font-size:11px;
         font-weight:700; letter-spacing:.02em; }
  .chip.new { background:var(--green); color:#fff; }
  .chip.upd { background:var(--yellow); color:#fff; }
  .chip.gone { background:var(--red); color:#fff; }
  .chip.err { background:var(--soft); color:var(--red); }
  .cramore { color:var(--dim); font-size:11px; }
  /* site preview: full-width bottom drawer, collapsed by default */
  .drawer { grid-column:1 / -1; }
  .drawer .dhead { display:flex; flex-wrap:wrap; align-items:center; gap:8px; }
  .drawer .dhead h2 { margin:0; }
  .drawer .dhead .grow { flex:1 1 0; }
  .drawer .dbody { margin-top:8px; display:flex; flex-direction:column; gap:8px; min-height:0; }
  .drawer.collapsed .dbody { display:none; }
  .drawer .pvwrap { overflow:auto; max-width:100%; }
  #pvFrame { display:block; width:100%; height:45vh; max-height:45vh;
             border:1px solid var(--line); background:#fff; }
  .drawer.fs { position:fixed; inset:0; z-index:100; border-radius:0; display:flex;
               flex-direction:column; }
  .drawer.fs .dbody { flex:1; }
  .drawer.fs .pvwrap { flex:1; display:flex; min-height:0; }
  .drawer.fs #pvFrame { height:100%; max-height:none; flex:none; }
</style></head>
<body>
<section class="hero" id="hero">
  <div class="brand">NewsTracker 控制台</div>
  <span class="pill"><span class="dot off" id="live"></span><span class="state" id="heroState">待命</span></span>
  <span class="sub" id="title"></span>
  <span class="clock">已過 <b id="elapsed">0:00</b><span class="eta" id="eta"></span></span>
  <span class="grow"></span>
  <div class="control hidden" id="control">
    <button id="btnPause" class="primary">⏸ 暫停</button>
    <span id="pausedTag"></span>
    <span class="sep"></span>
    <label>Summarize</label>
    <select id="beSum"><option value="ollama">Ollama</option><option value="gemini">Gemini</option></select>
    <label>Translate</label>
    <select id="beTra"><option value="ollama">Ollama</option><option value="gemini">Gemini</option></select>
    <span class="sep"></span>
    <label>端點</label>
    <select id="beEnd" style="min-width:150px"></select>
    <span id="beEndMsg" style="color:var(--band-dim);"></span>
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
</section>
<div class="wrap">
  <div class="col">
    <section class="card" id="sec-run">
      <h2>執行</h2>
      <div class="config hidden" id="config">
        <div class="cfgrow">
          <label>日期</label>
          <input id="cfgSince" type="date"> <span style="color:var(--dim)">→</span> <input id="cfgUntil" type="date">
        </div>
        <div class="cfgrow"><label>追蹤</label><span id="cfgTrackers"></span></div>
        <div class="cfgrow">
          <label>LLM</label>
          <span class="chk">Summarize <select id="cfgSum"><option value="ollama">Ollama</option><option value="gemini">Gemini</option></select></span>
          <span class="chk">Translate <select id="cfgTra"><option value="ollama">Ollama</option><option value="gemini">Gemini</option></select></span>
        </div>
        <div class="cfgrow">
          <label>選項</label>
          <label class="chk"><input type="checkbox" id="cfgGate"> Gate 過濾</label>
          <label class="chk"><input type="checkbox" id="cfgTranslate"> 翻譯</label>
          <label class="chk"><input type="checkbox" id="cfgCleanup"> Cleanup</label>
          <label class="chk">摘要上限 <input id="cfgLimit" type="number" min="1" style="width:84px"></label>
        </div>
        <button id="btnStart">▶ 開始執行</button>
        <span id="cfgErr" style="color:var(--red); margin-left:10px;"></span>
      </div>
      <div id="phases" style="margin-top:10px"></div>
      <div class="note" id="note"></div>
      <div id="summary"></div>
    </section>
  </div>
  <div class="col">
    <section class="card" id="sec-publish">
      <h2>發布</h2>
      <div class="depstate idle" id="depState">閒置</div>
      <div class="depmeta">
        <span class="k">頻道</span><span class="v" id="depChan">—</span>
        <span class="k">訊息</span><span class="v" id="depMsg">—</span>
        <span class="k">完成時間</span><span class="v" id="depTime">—</span>
      </div>
      <div class="btnrow">
        <button id="btnPreview">預覽頻道發布</button>
        <button id="btnLive" class="primary">正式發布</button>
      </div>
      <div id="depErr" style="color:var(--red); margin-top:8px; min-height:1.2em;"></div>
    </section>
    <section class="card" id="sec-llm">
      <h2>LLM 端點</h2>
      <div class="cfgrow">
        <label>模型端點</label>
        <select id="cfgEnd" style="min-width:180px"></select>
        <input id="cfgEndNew" placeholder="http://主機:11434" style="width:168px">
        <button id="btnEndAdd" title="加入清單">＋</button>
        <button id="btnEndDel" title="移除下拉選單目前選取的端點">✕</button>
        <span id="cfgEndMsg" style="color:var(--dim); margin-left:8px;"></span>
      </div>
      <div class="cfgrow">
        <label>遠端政策</label>
        <span class="chk">時段窗 <input id="cfgWin" placeholder="18:00-08:00（空=不限）" style="width:170px"></span>
        <span class="chk">並發 <input id="cfgConc" type="number" min="1" style="width:70px"></span>
        <button id="btnPolicy">套用</button>
        <span id="cfgPolMsg" style="color:var(--dim); margin-left:8px;"></span>
      </div>
    </section>
    <section class="card cra hidden" id="cra">
        <div class="crahead">
          <b>📚 CRA 參考圖書庫</b>
          <button id="btnCra">↻ 更新 CRA 庫</button>
          <span class="crastat" id="craStat"></span>
        </div>
        <div class="craprog hidden" id="craProg">
          <div class="bar"><i id="craBar"></i></div>
          <span class="count" id="craCount"></span>
        </div>
      <div class="cralist" id="craList"></div>
    </section>
  </div>
  <section class="card drawer collapsed" id="sec-preview">
    <div class="dhead">
      <h2><button id="pvToggle" aria-expanded="false" style="border:0;background:none;padding:0;font:inherit;letter-spacing:inherit;color:inherit">▸ 網站預覽</button></h2>
      <span class="grow"></span>
      <button id="pvFull">全螢幕</button>
    </div>
    <div class="dbody">
      <div class="btnrow">
        <select id="pvPreset">
          <option value="">預設</option>
          <option value="quick">快讀</option>
          <option value="analyst">分析師</option>
          <option value="event">事件追蹤</option>
          <option value="cra">合規 CRA</option>
        </select>
        <select id="pvWidth">
          <option value="100%">desktop (100%)</option>
          <option value="820">820</option>
          <option value="390">390</option>
        </select>
        <button id="btnLocalPreview">本機預覽</button>
        <a id="pvOpen" target="_blank" href="/site/index.html?pv=1">新分頁開啟</a>
      </div>
      <div class="pvwrap"><iframe id="pvFrame"></iframe></div>
    </div>
  </section>
</div>
<script>
// drawer for the site preview: collapsed by default; 全螢幕 fills the viewport,
// Esc or the same button leaves it. Independent of the polling/control script below.
(function(){
  const d = document.getElementById('sec-preview'), t = document.getElementById('pvToggle'),
        f = document.getElementById('pvFull');
  function setOpen(o){
    d.classList.toggle('collapsed', !o);
    t.setAttribute('aria-expanded', o ? 'true' : 'false');
    t.textContent = (o ? '▾ ' : '▸ ') + '網站預覽';
  }
  function setFull(on){
    if(on) setOpen(true);
    d.classList.toggle('fs', on);
    f.textContent = on ? '離開全螢幕' : '全螢幕';
  }
  t.onclick = ()=>{ const open = d.classList.contains('collapsed'); if(!open) setFull(false); setOpen(open); };
  f.onclick = ()=> setFull(!d.classList.contains('fs'));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && d.classList.contains('fs')) setFull(false); });
})();
</script>
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

// ── model endpoint picker ────────────────────────────────────────────────
// Two selects, one state: the pre-run panel and the live control bar show the
// same list, because which ollama answers is a property of the box and not of
// a particular run.
let ENDBUSY = false;
function endDot(e){
  if(!e.allowed) return '\u26d4';           // outside the remote window
  if(e.up===null) return '\u25cb';          // not probed yet - not the same as down
  return e.up ? '\u25cf' : '\u25cb';
}
function endLabel(e){
  const dot = endDot(e);
  const tail = e.local ? (e.up ? '' : ' (\u9ede\u9078\u5373\u555f\u52d5)')
                       : (e.allowed ? '' : ' (\u6642\u6bb5\u5916)');
  return dot + ' ' + e.label + tail;
}
function fillEnd(sel, ov){
  if(!ov || document.activeElement===sel) return;
  const want = (ov.endpoints||[]).map(e=> e.url+'|'+endLabel(e)).join(',');
  if(sel.dataset.sig !== want){
    sel.innerHTML = (ov.endpoints||[]).map(e=>
      `<option value="${e.url}">${endLabel(e)}</option>`).join('');
    sel.dataset.sig = want;
  }
  if(ov.selected_url) sel.value = ov.selected_url;
}
async function ctlMsg(cmd, msgEl){
  try{
    const r = await fetch('/control',{method:'POST',
      headers:{'Content-Type':'application/json'}, body:JSON.stringify(cmd)});
    const j = await r.json();
    msgEl.textContent = j.msg || (j.ok ? '' : '\u5931\u6557');
    msgEl.style.color = j.ok ? 'var(--green)' : 'var(--red)';
    return j;
  }catch(e){
    msgEl.textContent = String(e); msgEl.style.color = 'var(--red)'; return null;
  }
}
async function pickEnd(url, msgEl){
  if(ENDBUSY) return;
  ENDBUSY = true;
  // Starting a local daemon takes seconds, so say something rather than
  // leaving a dropdown that looks like it ignored the click.
  msgEl.textContent = '\u5207\u63db\u4e2d\u2026';
  try{ await ctlMsg({cmd:'endpoint', url}, msgEl); }
  finally{ ENDBUSY = false; }
}
$('cfgEnd').onchange = e=> pickEnd(e.target.value, $('cfgEndMsg'));
$('beEnd').onchange  = e=> pickEnd(e.target.value, $('beEndMsg'));
$('btnEndAdd').onclick = async ()=>{
  const url = $('cfgEndNew').value.trim();
  if(!url){ $('cfgEndMsg').textContent = '\u5148\u8f38\u5165\u7db2\u5740'; return; }
  const j = await ctlMsg({cmd:'endpoint-add', url}, $('cfgEndMsg'));
  if(j && j.ok) $('cfgEndNew').value = '';
};
$('btnEndDel').onclick = ()=> ctlMsg({cmd:'endpoint-remove', url:$('cfgEnd').value}, $('cfgEndMsg'));
$('btnPolicy').onclick = ()=> ctlMsg({cmd:'endpoint-policy',
  window:$('cfgWin').value, concurrency:$('cfgConc').value}, $('cfgPolMsg'));
let POL_INIT=false;
function fillPolicy(ov){
  if(!ov || POL_INIT) return; POL_INIT=true;
  $('cfgWin').value = ov.window || '';
  $('cfgConc').value = ov.remote_concurrency || '';
  // an env-pinned field is read-only here: the file edit would be shadowed
  $('cfgWin').disabled = !!ov.window_env;
  $('cfgConc').disabled = !!ov.concurrency_env;
  $('btnPolicy').disabled = !!(ov.window_env && ov.concurrency_env);
}
$('btnRestart').onclick = ()=> ctl({cmd:'restart', phase:$('reFrom').value, force:$('reForce').checked});
$('btnClose').onclick = ()=> { ctl({cmd:'close'}); };
let CFG_INIT=false;
function buildConfig(cfg){
  if(CFG_INIT) return; CFG_INIT=true;
  $('cfgSince').value = cfg.since||''; $('cfgUntil').value = cfg.until||'';
  $('cfgSum').value = cfg.summarize_backend||'ollama';
  $('cfgTra').value = cfg.translate_backend||'ollama';
  $('cfgGate').checked = cfg.gate!==false;
  $('cfgTranslate').checked = cfg.translate!==false;
  $('cfgCleanup').checked = cfg.cleanup!==false;
  $('cfgLimit').value = cfg.limit||300;
  const tw = $('cfgTrackers'); tw.innerHTML='';
  (cfg.all_trackers||[]).forEach(t=>{
    const lbl=document.createElement('label'); lbl.className='chk';
    lbl.innerHTML='<input type="checkbox" id="trk_'+t+'" '+((cfg.trackers||[]).includes(t)?'checked':'')+'> '+t;
    tw.appendChild(lbl);
  });
}
$('btnStart').onclick = async ()=>{
  const all = (CTRL&&CTRL.config&&CTRL.config.all_trackers)||[];
  const trackers = all.filter(t=>{ const e=$('trk_'+t); return e&&e.checked; });
  const config = { since:$('cfgSince').value, until:$('cfgUntil').value, trackers,
    summarize_backend:$('cfgSum').value, translate_backend:$('cfgTra').value,
    gate:$('cfgGate').checked, translate:$('cfgTranslate').checked,
    cleanup:$('cfgCleanup').checked, limit:parseInt($('cfgLimit').value)||300 };
  const r = await fetch('/control',{method:'POST',headers:{'Content-Type':'application/json'},
                                    body:JSON.stringify({cmd:'start',config})});
  $('cfgErr').textContent = r.ok ? '' : '參數有誤（請確認日期區間與至少一個追蹤項目）';
};
let CRA_PENDING = false;   // click → server ack, so a poll can't re-enable early
$('btnCra').onclick = async ()=> {
  $('btnCra').disabled = true; CRA_PENDING = true;
  try{ await ctl({cmd:'cralib'}); } finally { CRA_PENDING = false; }
};
const CRA_MAX = 30;   // rows listed per run; the rest are summarised as "+N"
// 官方頁面自己標示的修訂日；kind='site' 是整站部署時間戳（弱訊號）。
const KIND={modified:'官方更新',published:'官方發佈',site:'站台部署'};
function craDate(t){
  if(!t.date) return '<span class="d dim">未標日期</span>';
  return `<span class="d${t.kind==='site'?' weak':''}" title="${esc(KIND[t.kind]||t.kind)}">`+
         `${esc(t.date)}</span>`;
}
function craRows(items, cls, tag){
  return items.slice(0, CRA_MAX).map(t=>
    `<div class="row"><span class="chip ${cls}">${tag}</span>${t.nodate?'':craDate(t)}`+
    `<span class="t">${t.url? `<a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.title)}</a>`
                            : esc(t.title)}</span>`+
    `<span class="cl">${esc(t.cluster||t.source||'')}</span></div>`).join('')+
    (items.length>CRA_MAX? `<div class="cramore">…另有 ${items.length-CRA_MAX} 項</div>`:'');
}
function syncCra(st){
  const c = st.cralib;
  if(!c){ $('cra').classList.add('hidden'); return; }
  $('cra').classList.remove('hidden');
  const running = c.status==='running';
  $('btnCra').disabled = running || CRA_PENDING;
  $('btnCra').textContent = running ? '⏳ 更新中…' : '↻ 更新 CRA 庫';
  $('craProg').classList.toggle('hidden', !running);
  if(running){
    const pct = c.total? Math.round(100*c.done/c.total) : 0;
    $('craBar').style.width = pct+'%';
    $('craCount').textContent = c.total? `${c.done}/${c.total}` : '探索中';
  }
  const stat = $('craStat');
  stat.className = 'crastat';
  if(running){
    stat.textContent = `已過 ${fmt(c.elapsed)}${c.note? '　↳ '+c.note : ''}`;
  } else if(c.status==='failed'){
    stat.classList.add('err');
    stat.textContent = '❌ 失敗：' + (c.error||'');
  } else if(c.status==='done' && c.report){
    const r = c.report;
    stat.classList.add('ok');
    stat.textContent = `✅ 新增 ${r.new.length} · 更新 ${r.updated.length} · `+
      `未變 ${r.unchanged} · 消失 ${r.removed.length}`+
      (r.errors.length? ` · 錯誤 ${r.errors.length}`:'')+`　(${fmt(c.elapsed)})`;
  } else {
    stat.textContent = '獨立於新聞流程；更新後會重寫 data/cra_library.js';
  }
  const r = c.report;
  $('craList').innerHTML = !r ? '' :
    craRows(r.new,'new','NEW') + craRows(r.updated,'upd','UPDATED') +
    craRows(r.removed,'gone','GONE') +
    craRows(r.errors.map(e=>({title:e, nodate:true})),'err','ERR');
}
function syncControl(st){
  // The endpoint picker/policy card is always on the page (which ollama serves
  // this box is process-wide, usable with or without a run), so fill it first.
  fillEnd($('cfgEnd'), st.ollama);
  fillPolicy(st.ollama);
  // Editing goes to endpoints.json; with TRACKER_OLLAMA_URLS set that file
  // is not consulted, so the buttons would edit something nobody reads.
  const canEdit = !!(st.ollama && st.ollama.editable);
  $('btnEndAdd').disabled = $('btnEndDel').disabled = !canEdit;
  if(!st.control){ $('control').classList.add('hidden'); $('config').classList.add('hidden'); return; }
  CTRL = st.control;
  if(!st.control.started){
    buildConfig(st.control.config||{});
    $('config').classList.remove('hidden');
    $('control').classList.add('hidden');
    return;
  }
  $('config').classList.add('hidden');
  $('control').classList.remove('hidden');
  $('btnPause').textContent = st.control.paused ? '▶ 恢復' : '⏸ 暫停';
  $('pausedTag').innerHTML = st.control.paused ? '<span class="pausedBadge">⏸ 已暫停</span>' : '';
  if(document.activeElement!==$('beSum')) $('beSum').value = st.control.backends.summarize;
  if(document.activeElement!==$('beTra')) $('beTra').value = st.control.backends.translate;
  fillEnd($('beEnd'), st.ollama);
  // pause toggle is only meaningful while a run is live
  $('btnPause').disabled = !!st.finished;
}
async function poll(){
  let st; try{ st=await (await fetch('/state',{cache:'no-store'})).json(); }catch(e){ return; }
  syncControl(st);
  syncCra(st);            // usable before Start and after a run finishes
  syncDeploy(st);
  syncHero(st);
  $('title').textContent = st.title || '';
  if(st.control && !st.control.started){   // config mode: nothing is running yet
    $('elapsed').textContent='—'; $('eta').textContent='';
    $('live').className='dot off'; $('phases').innerHTML=''; $('note').textContent='';
    $('summary').innerHTML=''; return;
  }
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
      row('翻譯', `${s.translated} 篇 → EN${s.lang_repaired? '（外語摘要轉中文 '+s.lang_repaired+' 篇）':''}`)+
      row('LLM 後端',`Sum:${s.summarize_backend||'ollama'} · Tra:${s.translate_backend||'ollama'}${s.gemini_fallback? ' · Gemini退回 '+s.gemini_fallback:''}`)+
      row('跨主類', `+${s.cross_added} / -${s.cross_removed}`)+
      row('寫入天數', s.days_written)+
      row('錯誤', (s.errors||[]).length)+
      row('耗時', fmt(s.elapsed_s))+
      `</div></div>`;
  }
}
// ── publish card ─────────────────────────────────────────────────────────
const DEP_LBL={idle:'閒置',running:'發布中…',ok:'發布成功',failed:'發布失敗'};
async function deployCmd(cmd){
  $('depErr').textContent = '';
  $('btnPreview').disabled = $('btnLive').disabled = true;   // until the next poll
  try{
    const r = await fetch('/control',{method:'POST',
      headers:{'Content-Type':'application/json'}, body:JSON.stringify(cmd)});
    const j = await r.json();
    if(!j.ok) $('depErr').textContent = j.msg || '發布失敗';
  }catch(e){ $('depErr').textContent = String(e); }
  poll();
}
function pvUrl(){
  const p = $('pvPreset').value;
  return '/site/index.html?pv=1' + (p ? '#p=' + p : '');
}
function pvWidth(){
  const w = $('pvWidth').value;
  $('pvFrame').style.width = (w === '100%') ? '100%' : w + 'px';
}
$('pvWidth').onchange = pvWidth;
$('pvPreset').onchange = ()=>{ $('pvOpen').href = pvUrl(); };
$('btnLocalPreview').onclick = ()=>{
  const u = pvUrl();
  $('pvOpen').href = u;
  pvWidth();
  $('pvFrame').src = u;
};
$('btnPreview').onclick = ()=> deployCmd({cmd:'deploy', channel:'preview'});
$('btnLive').onclick = ()=>{
  if(!confirm('確定要發布到正式站 afu-news.web.app？')) return;
  deployCmd({cmd:'deploy'});
};
function depMsgHtml(msg){
  const m = /https:\/\/[^\s"'<>]+/.exec(msg||'');
  if(!m) return esc(msg||'') || '—';
  return esc(msg.slice(0,m.index)) +
    `<a href="${esc(m[0])}" target="_blank" rel="noopener">${esc(m[0])}</a>` +
    esc(msg.slice(m.index+m[0].length));
}
function syncDeploy(st){
  const d = st.deploy || {state:'idle'};
  const running = d.state==='running';
  $('btnPreview').disabled = $('btnLive').disabled = running;
  const el = $('depState');
  el.className = 'depstate ' + d.state;
  el.innerHTML = (running ? '<span class="spin"></span>' : '') + esc(DEP_LBL[d.state]||d.state);
  $('depChan').textContent = d.state==='idle' ? '—' : (d.channel || '正式站');
  $('depMsg').innerHTML = depMsgHtml(d.message);
  $('depTime').textContent = d.finished_at ? new Date(d.finished_at*1000).toLocaleString('zh-TW') : '—';
}
// ── hero status ──────────────────────────────────────────────────────────
function syncHero(st){
  let cls='', txt='待命';
  if(st.control && !st.control.started){ txt='待命'; }
  else if(st.finished){ const ok = !st.summary || st.summary.ok; cls = ok?'ok':'fail'; txt = ok?'完成':'失敗'; }
  else if(st.running || st.control || (st.phases && st.phases.length)){ cls='run'; txt='執行中'; }
  $('hero').className = 'hero ' + cls;
  $('heroState').textContent = txt;
}
function row(k,v){ return `<div class="k">${k}</div><div class="v">${esc(v)}</div>`; }
function esc(x){ return String(x==null?'':x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
poll(); setInterval(poll, 800);
</script></body></html>"""
