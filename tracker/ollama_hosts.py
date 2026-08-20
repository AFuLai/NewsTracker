"""Ordered ollama endpoints, chosen by probe, with a policy for remote ones.

Why this exists: the local 8 GB card holds 42 of `gemma4:e4b`'s 43 layers (the
model is 9.61 GB — `ops/phase0/ACCEPTANCE.md`), and two machines on the LAN run
the *same* model file, digest `c6eb396dbd5992bb`, roughly 4x faster per call.
Measured 2026-08-19, translate, same rows:

    local            6.18 s/article at 4 workers
    TWTY3PC1875      1.61 s/article at 4 workers   (plateaus there; 8 adds nothing)
    TWTY3PC1876      1.62 s/article at 4 workers

**Everything here is opt-in.** With nothing configured the list is the single
local endpoint the pipeline has always used, and nothing reaches the network.
Naming a remote is what turns it on, so the conservative default is a property
of the configuration rather than a flag someone has to remember.

Where the list comes from, in precedence order:

  1. TRACKER_OLLAMA_URLS        ordered, comma-separated; set it and the file
                                below is not consulted at all
  2. endpoints.json (repo root) the dashboard's editable list — `urls` in
                                priority order, plus `preferred`, the endpoint
                                the panel last pinned; machine-local, ignored
                                by git
  3. the local daemon           http://localhost:11434, always the fallback

The file exists because the env var never reaches the dashboard in practice:
the pipeline is launched through `wsl -e` (no login shell), so an `export` in
a profile is invisible there, and a picker whose list depends on ambient shell
state shows `local` and nothing else. A file next to the code is readable no
matter how the process was started, and the panel can edit it.

Those remotes are other people's machines. Two levers bound what we take:

  TRACKER_OLLAMA_REMOTE_WINDOW      "HH:MM-HH:MM" local time; outside it the
                                    remotes are skipped and selection falls
                                    through to whatever else is listed
  TRACKER_OLLAMA_REMOTE_CONCURRENCY in-flight calls against a remote (default 4,
                                    where both remotes stop getting faster)

Example:

    TRACKER_OLLAMA_URLS=http://10.139.180.21:11434,http://10.139.180.22:11434,http://localhost:11434
    TRACKER_OLLAMA_REMOTE_WINDOW=18:00-08:00
"""
from __future__ import annotations

import json
import logging
import os
import threading
import time
from datetime import datetime, time as _time
from pathlib import Path
from urllib.parse import urlsplit

import httpx

from . import OLLAMA_URL as LOCAL_URL, llm_concurrency

_log = logging.getLogger("tracker.ollama_hosts")

#: Where a remote stops getting faster (measured; see the module docstring).
DEFAULT_REMOTE_CONCURRENCY = 4

#: Health probe budget. Short: this runs before every pipeline, and an endpoint
#: that cannot answer /api/tags in this long is not one we want carrying 280
#: articles.
PROBE_TIMEOUT = 3.0

#: How long a cached health verdict is good for. The dashboard polls /state
#: about once a second, and probing every endpoint on every poll would put a
#: network timeout per dead host inside the page refresh.
HEALTH_TTL = 15.0

_lock = threading.Lock()
_current: str | None = None
_down: set[str] = set()

#: url -> (monotonic timestamp, reachable). Empty entry means never probed,
#: which the dashboard draws as "unknown" rather than as "down" — the two are
#: not the same thing and only one of them is worth a red dot.
_health: dict[str, tuple[float, bool]] = {}
_refreshing = False


#: The dashboard-editable endpoint list. Machine-local (the LAN addresses it
#: names mean nothing on another network), so it sits next to the code and
#: stays out of git.
CONFIG_PATH = Path(__file__).resolve().parent.parent / "endpoints.json"


def _load_config() -> dict:
    try:
        raw = json.loads(CONFIG_PATH.read_text("utf-8"))
    except FileNotFoundError:
        return {}
    except (OSError, ValueError) as exc:
        _log.warning("%s is unreadable (%s) — ignoring it", CONFIG_PATH, exc)
        return {}
    return raw if isinstance(raw, dict) else {}


def _save_config(urls: list[str], preferred: str | None) -> None:
    data: dict = {"urls": urls}
    if preferred:
        data["preferred"] = preferred
    tmp = CONFIG_PATH.with_name(CONFIG_PATH.name + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
    os.replace(tmp, CONFIG_PATH)


def _file_urls() -> list[str]:
    urls = _load_config().get("urls")
    if not isinstance(urls, list):
        return []
    return [str(u).strip().rstrip("/") for u in urls if str(u).strip()]


def config_editable() -> bool:
    """Whether the panel may edit the list. With TRACKER_OLLAMA_URLS set the
    file is not consulted, and editing something nobody reads is worse than
    refusing: the refusal says where the real list lives."""
    return not os.environ.get("TRACKER_OLLAMA_URLS", "").strip()


def endpoints() -> list[str]:
    """The configured endpoints, in priority order. Local-only when nothing is
    configured. Env var > endpoints.json > local (see the module docstring)."""
    raw = os.environ.get("TRACKER_OLLAMA_URLS", "").strip()
    if raw:
        listed = [u.strip().rstrip("/") for u in raw.split(",") if u.strip()]
        return listed or [LOCAL_URL]
    return _file_urls() or [LOCAL_URL]


def preferred() -> str | None:
    """The endpoint the panel last pinned, if it is still on the list."""
    if not config_editable():
        return None
    url = str(_load_config().get("preferred") or "").strip().rstrip("/")
    return url if url and url in endpoints() else None


def is_local(url: str) -> bool:
    return (urlsplit(url).hostname or "") in ("localhost", "127.0.0.1", "::1")


def label(url: str) -> str:
    """`local` / `10.139.180.21:11434` — what a log line should say."""
    if is_local(url):
        return "local"
    parts = urlsplit(url)
    return f"{parts.hostname}:{parts.port}" if parts.port else (parts.hostname or url)


def _parse_window(raw: str) -> tuple[_time, _time] | None:
    try:
        start, end = raw.split("-", 1)
        sh, sm = (int(x) for x in start.strip().split(":"))
        eh, em = (int(x) for x in end.strip().split(":"))
        return _time(sh, sm), _time(eh, em)
    except (ValueError, TypeError):
        _log.warning("TRACKER_OLLAMA_REMOTE_WINDOW=%r is not HH:MM-HH:MM — "
                     "treating remotes as always allowed", raw)
        return None


def remote_allowed(now: datetime | None = None) -> bool:
    """Whether the remotes may be used at this moment.

    No window set means always. A window that wraps midnight (18:00-08:00) is
    the normal case for "outside office hours", so it is handled rather than
    read as an empty range.
    """
    raw = os.environ.get("TRACKER_OLLAMA_REMOTE_WINDOW", "").strip()
    if not raw:
        return True
    window = _parse_window(raw)
    if window is None:
        return True
    start, end = window
    at = (now or datetime.now()).time()
    return start <= at < end if start <= end else (at >= start or at < end)


def concurrency_for(url: str | None) -> int:
    """In-flight calls this endpoint may carry.

    A remote is capped separately from the local pool: the local number exists
    to match a daemon's OLLAMA_NUM_PARALLEL that we set ourselves, and on a
    machine we do not own neither the slot count nor the courtesy budget is
    ours to assume.
    """
    if url is None or is_local(url):
        return llm_concurrency()
    try:
        return max(1, int(os.environ.get("TRACKER_OLLAMA_REMOTE_CONCURRENCY",
                                         DEFAULT_REMOTE_CONCURRENCY)))
    except (TypeError, ValueError):
        return DEFAULT_REMOTE_CONCURRENCY


def healthy(url: str, timeout: float = PROBE_TIMEOUT) -> bool:
    try:
        return httpx.get(f"{url}/api/tags", timeout=timeout).status_code == 200
    except Exception:
        return False


def candidates(now: datetime | None = None) -> list[str]:
    """Configured endpoints minus the ones policy currently forbids, with the
    panel's remembered choice tried first. The preference reorders, it never
    admits: an endpoint the window forbids stays out however preferred."""
    allowed = remote_allowed(now)
    order = [u for u in endpoints() if allowed or is_local(u)]
    pref = preferred()
    if pref in order:
        order = [pref] + [u for u in order if u != pref]
    return order


def select(*, force: bool = False, now: datetime | None = None) -> str | None:
    """First healthy permitted endpoint, or None if none answers.

    Cached: the probe costs a round trip per endpoint and the answer is needed
    by preflight, by the worker-count decision and by every call. `force`
    re-probes, which is what a mid-run failure needs.
    """
    global _current
    with _lock:
        if _current is not None and not force:
            return _current
        _current = None
        for url in candidates(now):
            if url in _down and not force:
                continue
            if healthy(url):
                _current = url
                break
        return _current


def selected() -> str | None:
    """The selection as it stands, without probing anything.

    For callers that must not pay a round trip — the worker-count decision runs
    per phase, and probing there would put a network timeout inside a code path
    whose answer preflight already settled.
    """
    return _current


def current() -> str | None:
    """The selected endpoint, selecting on first use."""
    return _current if _current is not None else select()


def demote(url: str, reason: str) -> str | None:
    """Mark an endpoint unusable and pick the next one.

    Called when a request could not be delivered — a refused connection, a dead
    host — never for a slow or unhappy *answer*, which is the model's problem
    and not the endpoint's. Returns the replacement, or None if nothing is left.
    """
    global _current
    with _lock:
        _down.add(url)
        if _current == url:
            _current = None
    _log.warning("ollama endpoint %s is down (%s) — reselecting", label(url), reason)
    replacement = select(force=False)
    if replacement is None:
        _log.error("no ollama endpoint left: tried %s",
                   ", ".join(label(u) for u in candidates()))
    else:
        _log.info("ollama endpoint is now %s", label(replacement))
    return replacement


def reset() -> None:
    """Forget the selection and the down-list (tests, and a new run)."""
    global _current
    with _lock:
        _current = None
        _down.clear()


def describe() -> str:
    """One line for the run log: what was configured and what got chosen."""
    listed = endpoints()
    if len(listed) == 1 and is_local(listed[0]):
        return "local only"
    window = os.environ.get("TRACKER_OLLAMA_REMOTE_WINDOW", "").strip()
    bits = [f"{len(listed)} endpoints ({', '.join(label(u) for u in listed)})",
            f"using {label(current() or listed[0])}"]
    if window:
        bits.append(f"remote window {window} ({'open' if remote_allowed() else 'closed'})")
    return "; ".join(bits)


# ── what the dashboard needs ────────────────────────────────────────────────

def _refresh_health() -> None:
    global _refreshing
    try:
        for url in endpoints():
            ok = healthy(url, timeout=2.0)
            with _lock:
                _health[url] = (time.monotonic(), ok)
    finally:
        with _lock:
            _refreshing = False


def _refresh_async() -> None:
    """Probe in the background when the cache is stale, and never block.

    The page asks for this on every poll; a host that is merely unplugged
    answers by timing out, and doing that on the request thread would stall the
    dashboard for as long as the probe takes.
    """
    global _refreshing
    with _lock:
        if _refreshing:
            return
        now = time.monotonic()
        if all(now - _health.get(u, (0.0, False))[0] < HEALTH_TTL
               for u in endpoints()):
            return
        _refreshing = True
    threading.Thread(target=_refresh_health, daemon=True).start()


def overview() -> dict:
    """The endpoint picker, as data: what is configured, what answers, what is
    in use, and whether the window currently permits the remotes."""
    _refresh_async()
    cur = selected()
    allowed = remote_allowed()
    rows = []
    for url in endpoints():
        ts, ok = _health.get(url, (0.0, False))
        rows.append({"url": url, "label": label(url), "local": is_local(url),
                     "up": ok if ts else None,
                     "allowed": allowed or is_local(url),
                     "current": url == cur,
                     "demoted": url in _down})
    return {"selected": label(cur) if cur else None,
            "selected_url": cur,
            "window": os.environ.get("TRACKER_OLLAMA_REMOTE_WINDOW", "").strip(),
            "remote_allowed": allowed,
            "editable": config_editable(),
            "endpoints": rows}


def use(url: str, *, start_timeout: int = 40) -> tuple[bool, str]:
    """Pin the endpoint the panel chose. Returns (ok, message for the user).

    The one thing this does that select() does not: choosing the local endpoint
    while no daemon is running starts one. That is the point of the option — a
    picker that offers `local` and then reports it dead is a picker that made
    the user do the obvious next step by hand.

    A remote is never started, only checked: we cannot start ollama on a
    machine we do not own, and there is nothing useful to do about it here.
    """
    global _current
    url = (url or "").strip().rstrip("/")
    if url not in endpoints():
        return False, "%s is not in TRACKER_OLLAMA_URLS" % (url or "(nothing)")
    if not is_local(url) and not remote_allowed():
        return False, ("the remote window %s is closed right now"
                       % os.environ.get("TRACKER_OLLAMA_REMOTE_WINDOW", ""))
    if not healthy(url):
        if not is_local(url):
            return False, "%s is not answering" % label(url)
        from .preflight import start_local_daemon
        if not start_local_daemon(start_timeout=start_timeout):
            return False, "local ollama did not start — see logs/ollama-serve.log"
    with _lock:
        _down.discard(url)
        _current = url
        _health[url] = (time.monotonic(), True)
    if config_editable():
        # Remember the choice across runs: a picker that forgets what was
        # picked makes the user repeat themselves every launch.
        _save_config(_file_urls() or endpoints(), url)
    _log.info("ollama endpoint pinned to %s", label(url))
    return True, "using %s" % label(url)


def add_endpoint(url: str) -> tuple[bool, str]:
    """Append an endpoint to the editable list. Returns (ok, message)."""
    url = (url or "").strip().rstrip("/")
    if not config_editable():
        return False, "TRACKER_OLLAMA_URLS is set — edit the variable, not the list"
    parts = urlsplit(url)
    if parts.scheme not in ("http", "https") or not parts.hostname:
        return False, "need a full URL like http://host:11434"
    listed = endpoints()
    if url in listed:
        return False, "%s is already listed" % label(url)
    # Appended, not prepended: adding a machine to the list must not change
    # which endpoint a run picks on its own.
    _save_config(listed + [url], preferred())
    return True, "added %s" % label(url)


def remove_endpoint(url: str) -> tuple[bool, str]:
    """Drop an endpoint from the editable list. Returns (ok, message)."""
    global _current
    url = (url or "").strip().rstrip("/")
    if not config_editable():
        return False, "TRACKER_OLLAMA_URLS is set — edit the variable, not the list"
    listed = endpoints()
    if url not in listed:
        return False, "%s is not on the list" % (label(url) if url else "(nothing)")
    if len(listed) == 1:
        return False, "cannot remove the last endpoint"
    pref = preferred()
    _save_config([u for u in listed if u != url], None if pref == url else pref)
    with _lock:
        if _current == url:
            _current = None
        _down.discard(url)
        _health.pop(url, None)
    return True, "removed %s" % label(url)
