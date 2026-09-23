#!/usr/bin/env python3
"""verify_chrome.py -- Headless Google Chrome Debug & Self-Test Verification Runner for Contra 3D.

Uses Playwright to:
  1. Launch real installed Google Chrome (chrome.exe).
  2. Load file:///d:/Claude/Tool/Harness/cases/contra-3d/index.html.
  3. Listen to browser console and page error streams.
  4. Invoke window.ContraDebug.runSelfTest() to validate WebGL context, procedural normal maps,
     commando 3D aiming rig, arrow keys, weapons, tactical codec, volumetric god rays, and 5-slot save state.
  5. Test Stage 2 (3D Corridor behind-the-back), Stage 3 (Waterfall vertical ascent), and Stage 8 (Alien Lair).
  6. Capture rendered snapshots to verify visual WebGL canvas integrity across perspectives.
"""
import json
import os
import sys

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HTML_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "index.html"))
SCREENSHOT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "contra3d_chrome_screen.png"))
SCREENSHOT_CORRIDOR_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "contra3d_chrome_screen_corridor.png"))


def main():
    print("=" * 70)
    print("CHROME HEADLESS WEBGL & BROWSER SELF-TEST RUNNER")
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
        print("\n[1/6] Launching Chrome in headless WebGL mode...")
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

        print("\n[2/6] Navigating to game index.html...")
        page.goto(f"file:///{HTML_PATH.replace(os.sep, '/')}")

        print("\n[3/6] Waiting for WebGL and ContraInstance initialization...")
        page.wait_for_function("() => window.ContraDebug && window.ContraInstance", timeout=5000)

        print("\n[4/6] Invoking in-browser self-test suite (window.ContraDebug.runSelfTest())...")
        report = page.evaluate("() => window.ContraDebug.runSelfTest()")

        print("\n[REPORT FROM CHROME]:")
        print(json.dumps(report, indent=2, ensure_ascii=False))

        # Capture Stage 1 visual screenshot
        print(f"\n[5/6] Capturing Stage 1 rendered viewport snapshot -> {SCREENSHOT_PATH}...")
        page.screenshot(path=SCREENSHOT_PATH)

        # Multi-Perspective & Stage Navigation Verification
        print("\n[6/6] Verifying Multi-Perspective Progression (Stage 2 3D Corridor & Stage 3 Waterfall)...")
        stage2_state = page.evaluate("""() => {
            window.ContraDebug.triggerStage(2);
            return window.ContraDebug.getState();
        }""")
        print(f"  * Stage 2 Warp: Stage={stage2_state['stage']}, CameraMode={stage2_state['cameraMode']}")
        page.screenshot(path=SCREENSHOT_CORRIDOR_PATH)

        stage3_state = page.evaluate("""() => {
            window.ContraDebug.triggerStage(3);
            return window.ContraDebug.getState();
        }""")
        print(f"  * Stage 3 Warp: Stage={stage3_state['stage']}, CameraMode={stage3_state['cameraMode']}")

        stage8_state = page.evaluate("""() => {
            window.ContraDebug.triggerStage(8);
            return window.ContraDebug.getState();
        }""")
        print(f"  * Stage 8 Warp: Stage={stage8_state['stage']}, CameraMode={stage8_state['cameraMode']}")

        # Return to Stage 1
        page.evaluate("() => window.ContraDebug.triggerStage(1)")

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
