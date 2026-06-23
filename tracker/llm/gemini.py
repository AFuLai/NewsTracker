"""Gemini-via-Chrome backend (ported from IC37 work/gemini_chrome.py).

Drives an ALREADY-LOGGED-IN Chrome (DevTools debug port, default 9999) with
Playwright to ask gemini.google.com (temporary chat). Used as an optional
backend for Summarize/Translate; on any failure the caller falls back to Ollama.

Critical for back-to-back calls (the tracker makes hundreds): every ask()
re-navigates to a clean page (_fresh), stops any in-progress generation, and
only reads responses that appear AFTER this query was sent (n_before) — so a
call never picks up the previous answer.

Privacy: this backend sends the prompt to Google. It is only the default when a
debug Chrome is detected (preflight.find_browser); otherwise Ollama.
Requirements: /opt/venv has `playwright` (imported lazily); a Chrome started with
--remote-debugging-port=9999 and logged into Google.
"""
from __future__ import annotations

import os
import threading
import time

GEMINI_URL = "https://gemini.google.com/app"

SEL_INPUT = 'div.ql-editor[contenteditable="true"]'
SEL_RESPONSE = ".model-response-text"
LBL_SEND = "傳送訊息"
LBL_TEMP = "臨時對話"
STOP_LABELS = ("停止生成", "停止回應", "停止", "Stop response", "Stop generating", "Stop")


class GeminiError(Exception):
    pass


def _cdp_url() -> str:
    """Reachable CDP base. Reuse the tracker's browser detection (handles the
    WSL→Windows host gateway); fall back to the IC37 default / env override."""
    env = os.environ.get("TRACKER_CDP_URL")
    if env:
        return env
    try:
        from ..preflight import find_browser
        base = find_browser()
        if base:
            return base
    except Exception:
        pass
    return "http://localhost:9999"


class GeminiSession:
    _inst = None
    _inst_lock = threading.Lock()

    @classmethod
    def get(cls) -> "GeminiSession":
        with cls._inst_lock:
            if cls._inst is None:
                cls._inst = GeminiSession()
            return cls._inst

    def __init__(self):
        self.lock = threading.Lock()
        self._pw = None
        self._browser = None
        self._page = None

    # ---- connect + a live tab (navigation is re-done by _fresh each call) ----
    def _ensure_page(self, page_load_timeout_ms):
        from playwright.sync_api import sync_playwright  # lazy; optional dep
        if self._page is not None:
            try:
                if not self._page.is_closed():
                    return self._page
            except Exception:
                pass
        if self._pw is None:
            self._pw = sync_playwright().start()
        self._browser = self._pw.chromium.connect_over_cdp(_cdp_url())
        ctx = (self._browser.contexts[0] if self._browser.contexts
               else self._browser.new_context())
        self._page = ctx.new_page()
        return self._page

    def _fresh(self, page, page_load_timeout_ms):
        """Clean start: stop any in-progress generation, re-navigate to a fresh
        page (wipes the previous response), and confirm idle."""
        self._stop_generating(page)
        page.goto(GEMINI_URL, wait_until="domcontentloaded",
                  timeout=max(15000, page_load_timeout_ms))
        if "accounts.google.com" in page.url:
            raise GeminiError("Gemini 未登入（被導向 Google 登入頁）")
        try:
            page.wait_for_selector(SEL_INPUT, timeout=page_load_timeout_ms)
        except Exception:
            raise GeminiError(f"Gemini 頁面 {page_load_timeout_ms}ms 內未載入完成")
        self._stop_generating(page)
        if not self._is_idle(page):
            page.wait_for_timeout(1500)
        page.wait_for_timeout(500)

    def _is_idle(self, page):
        """No 'stop generating' button = nothing is being generated."""
        for lbl in STOP_LABELS:
            try:
                b = page.get_by_label(lbl, exact=False)
                if b.count() and b.first.is_visible():
                    return False
            except Exception:
                pass
        return True

    def _stop_generating(self, page, tries=6):
        for _ in range(tries):
            if self._is_idle(page):
                return
            for lbl in STOP_LABELS:
                try:
                    b = page.get_by_label(lbl, exact=False)
                    if b.count() and b.first.is_visible():
                        b.first.click(timeout=1500)
                        break
                except Exception:
                    pass
            page.wait_for_timeout(700)

    def _new_temp_chat(self, page):
        try:
            page.get_by_label(LBL_TEMP).first.click(timeout=4000)
            page.wait_for_timeout(1500)
        except Exception:
            pass

    def _set_model(self, page, model):
        """Switch model (Flash / Flash-Lite); best-effort."""
        if not model:
            return
        try:
            picker = page.locator('button[aria-label*="模式挑選器"]').first
            if model in (picker.get_attribute("aria-label") or ""):
                return
            picker.click(timeout=4000)
            page.wait_for_timeout(700)
            items = page.locator("[role=menuitem]")
            for i in range(items.count()):
                t = items.nth(i).inner_text()
                hit = (("Flash-Lite" in t) if model == "Flash-Lite"
                       else ("Flash" in t and "Lite" not in t) if model == "Flash"
                       else (model in t))
                if hit:
                    items.nth(i).click(timeout=3000)
                    page.wait_for_timeout(800)
                    return
            page.keyboard.press("Escape")
        except Exception:
            try:
                page.keyboard.press("Escape")
            except Exception:
                pass

    def _count_responses(self, page):
        try:
            return page.locator(SEL_RESPONSE).count()
        except Exception:
            return 0

    def _wait_response(self, page, timeout_ms, start_marker, end_marker, n_before=0):
        """With end_marker: wait until both markers appear (= complete) and return
        the middle. Otherwise fall back to text-stability. Only reads responses
        that appear AFTER n_before, so we never grab the previous answer."""
        deadline = time.time() + timeout_ms / 1000.0
        last, stable = None, 0
        while time.time() < deadline:
            page.wait_for_timeout(1200)
            els = page.locator(SEL_RESPONSE)
            if els.count() <= n_before:
                continue   # new response not present yet — don't read the old one
            cur = els.last.inner_text() if els.count() else ""
            if end_marker and cur and end_marker in cur:
                body = cur
                if start_marker and start_marker in body:
                    body = body.split(start_marker, 1)[1]
                body = body.rsplit(end_marker, 1)[0]
                return body.strip()
            if not end_marker:
                if cur and cur == last:
                    stable += 1
                    if stable >= 2:
                        return cur.strip()
                else:
                    stable = 0
                last = cur
        if end_marker:
            raise GeminiError("回覆未含完整開頭/結尾標記（可能被截斷或格式不符）")
        if last:
            return last.strip()
        raise GeminiError("等待 Gemini 回覆逾時或無回覆")

    def ask(self, prompt, *, timeout_ms=120000, model=None,
            page_load_timeout_ms=25000, start_marker=None, end_marker=None):
        with self.lock:
            try:
                page = self._ensure_page(page_load_timeout_ms)
                self._fresh(page, page_load_timeout_ms)   # clean start each call
                self._new_temp_chat(page)
                self._set_model(page, model)
                n_before = self._count_responses(page)    # ignore prior answers
                box = page.locator(SEL_INPUT).first
                box.click(timeout=8000)
                box.fill(prompt)
                page.wait_for_timeout(400)
                try:
                    page.get_by_label(LBL_SEND).first.click(timeout=4000)
                except Exception:
                    box.press("Enter")
                out = self._wait_response(page, timeout_ms, start_marker, end_marker, n_before)
                self._stop_generating(page)               # leave no in-progress state
                return out
            except GeminiError:
                raise
            except Exception as e:
                try:
                    if self._page:
                        self._page.close()
                except Exception:
                    pass
                self._page = None
                raise GeminiError(f"{type(e).__name__}: {e}")


def ask(prompt, *, timeout_ms=120000, model=None, page_load_timeout_ms=25000,
        start_marker=None, end_marker=None):
    return GeminiSession.get().ask(
        prompt, timeout_ms=timeout_ms, model=model,
        page_load_timeout_ms=page_load_timeout_ms,
        start_marker=start_marker, end_marker=end_marker)


def available() -> bool:
    """True if a debug Chrome is reachable (so Gemini can be the default)."""
    try:
        from ..preflight import find_browser
        return find_browser() is not None
    except Exception:
        return False
