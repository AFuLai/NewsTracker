#!/usr/bin/env python3
"""verify_chrome.py -- Headless Google Chrome Debug & Self-Test Verification Runner for Bomberman 3D.

Uses Playwright to:
  1. Launch real installed Google Chrome (chrome.exe).
  2. Load file:///d:/Claude/Tool/Harness/cases/bomberman/index.html.
  3. Listen to browser console and page error streams.
  4. Invoke window.BombermanDebug.runSelfTest() to validate WebGL context, arena grid,
     player models, bomb placement, cross-fire raycasts, powerups, director camera modes,
     sudden death spiral, and 5-slot save state.
  5. Capture a rendering screenshot to verify visual WebGL canvas integrity.
"""
import json
import os
import sys

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HTML_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "index.html"))
SCREENSHOT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "bomberman_chrome_screen.png"))


def main():
    print("=" * 70)
    print("CHROME HEADLESS WEBGL & BROWSER SELF-TEST RUNNER - BOMBERMAN 3D")
    print(f"Target HTML: {HTML_PATH}")
    print(f"Target Chrome: {CHROME_PATH}")
    print("=" * 70)

    if not os.path.isfile(CHROME_PATH):
        print(f"[ERROR] Chrome binary not found at: {CHROME_PATH}", file=sys.stderr)
        return 1

    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("[ERROR] Playwright library not installed.", file=sys.stderr)
        return 1

    console_errors = []
    console_logs = []

    with sync_playwright() as p:
        print("\n[1/5] Launching Chrome in headless WebGL mode...")
        browser = p.chromium.launch(
            executable_path=CHROME_PATH,
            headless=True,
            args=[
                "--enable-webgl",
                "--ignore-gpu-blocklist",
                "--allow-file-access-from-files",
                "--disable-web-security"
            ]
        )
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()

        page.on("console", lambda msg: (
            console_errors.append(f"[{msg.type}] {msg.text}")
            if msg.type in ("error", "warning") and "audiocontext" not in msg.text.lower() and "autoplay" not in msg.text.lower()
            else console_logs.append(msg.text)
        ))
        page.on("pageerror", lambda err: console_errors.append(f"[PAGE_ERROR] {err}"))

        print("\n[2/5] Navigating to game index.html...")
        page.goto(f"file:///{HTML_PATH.replace(os.sep, '/')}")

        print("\n[3/5] Waiting for WebGL and BombermanInstance initialization...")
        page.wait_for_function("() => window.BombermanDebug && window.BombermanInstance", timeout=5000)

        # Trigger user gesture on canvas to unlock AudioContext
        page.click("#bombermanCanvas")
        page.wait_for_timeout(500)

        print("\n[4/5] Invoking in-browser self-test suite (window.BombermanDebug.runSelfTest())...")
        report = page.evaluate("() => window.BombermanDebug.runSelfTest()")

        print("\n[REPORT FROM CHROME]:")
        print(json.dumps(report, indent=2, ensure_ascii=False))

        # Capture visual screenshot
        print(f"\n[5/5] Capturing rendered viewport snapshot -> {SCREENSHOT_PATH}...")
        page.screenshot(path=SCREENSHOT_PATH)

        browser.close()

    print("\n" + "=" * 70)
    print("CONSOLE WARNINGS/ERRORS AUDIT:")
    if console_errors:
        print(f"Captured {len(console_errors)} warning(s)/error(s):")
        for err in console_errors:
            print("  *", err)
    else:
        print("  Clean: 0 Console Errors detected!")

    if report.get("success") is True and report.get("passedProbes") == report.get("totalProbes"):
        print("\n>>> ALL CHROME DEBUG SELF-TEST PROBES PASSED (100% OK) <<<")
        print("=" * 70)
        return 0
    else:
        print("\n>>> CHROME SELF-TEST REPORTED FAILURES <<<", file=sys.stderr)
        print("=" * 70)
        return 1


if __name__ == "__main__":
    sys.exit(main())
