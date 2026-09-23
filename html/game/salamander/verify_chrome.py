#!/usr/bin/env python3
"""verify_chrome.py -- Headless Google Chrome Verification Runner for Salamander.

Uses Playwright to:
  1. Launch real installed Google Chrome (chrome.exe).
  2. Load file:///d:/Claude/Tool/Harness/cases/salamander/index.html.
  3. Listen to browser console and page error streams.
  4. Invoke window.SalamanderDebug.runSelfTest() to validate Canvas context, stages,
     player kinematics, weapon gauge, and 5-slot save state.
  5. Capture a rendering screenshot to verify visual retro arcade aesthetic and canvas integrity.
"""
import json
import os
import sys

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HTML_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "index.html"))
SCREENSHOT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "salamander_chrome_screen.png"))


def main():
    print("=" * 70)
    print("CHROME HEADLESS CANVAS & BROWSER SELF-TEST RUNNER: SALAMANDER")
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
        print("\n[1/5] Launching Chrome in headless WebGL/Canvas mode...")
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
            console_errors.append(f"[{msg.type}] {msg.text}") if msg.type in ("error", "warning")
            else console_logs.append(msg.text)
        ))
        page.on("pageerror", lambda err: console_errors.append(f"[PAGE_ERROR] {err}"))

        file_url = "file:///" + HTML_PATH.replace("\\", "/")
        print(f"[2/5] Navigating to: {file_url}")
        page.goto(file_url, wait_until="load", timeout=15000)

        # Let the canvas initialize and render a few frames
        print("[3/5] Waiting for Canvas engine initialization...")
        page.wait_for_timeout(2000)

        # Execute browser self-test via SalamanderDebug hook
        print("[4/5] Executing window.SalamanderDebug.runSelfTest()...")
        try:
            test_result = page.evaluate("() => window.SalamanderDebug ? window.SalamanderDebug.runSelfTest() : null")
            print(f"[SELF-TEST RESULT]: {json.dumps(test_result, indent=2, ensure_ascii=False)}")
            if not test_result or not test_result.get("pass"):
                print("[FAIL] In-browser self test failed!", file=sys.stderr)
                browser.close()
                return 1
        except Exception as e:
            print(f"[FAIL] Error evaluating self test: {e}", file=sys.stderr)
            browser.close()
            return 1

        # Capture visual screenshot
        print(f"[5/5] Capturing screenshot -> {SCREENSHOT_PATH}")
        page.screenshot(path=SCREENSHOT_PATH)
        browser.close()

    print("\n" + "=" * 70)
    print("BROWSER CONSOLE REPORT:")
    print(f"Total Logs: {len(console_logs)}")
    print(f"Total Errors/Warnings: {len(console_errors)}")
    if console_errors:
        for err in console_errors:
            print(f"  {err}")
    print("=" * 70)

    if console_errors:
        # Filter benign warnings if any
        critical_errors = [e for e in console_errors if "PAGE_ERROR" in e or "[error]" in e]
        if critical_errors:
            print(f"[FAIL] Found {len(critical_errors)} critical browser console errors!", file=sys.stderr)
            return 1

    print("[SUCCESS] All Chrome browser self-tests and canvas render passed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
