"""Generate per-version release section and prepend to ChangeLog.html."""
from __future__ import annotations

import subprocess
from datetime import date
from pathlib import Path

from . import ROOT
from .llm import render_release_notes

INSERTION_TAG = "<!-- CHANGELOG_INSERTION_POINT -->"
CHANGELOG_PATH = ROOT / "ChangeLog.html"


def _git_log_since(last_tag: str | None) -> str:
    rng = f"{last_tag}..HEAD" if last_tag else "HEAD"
    try:
        out = subprocess.check_output(
            ["git", "-C", str(ROOT), "log", rng, "--stat", "--no-color"],
            text=True, errors="replace")
    except subprocess.CalledProcessError:
        out = ""
    return out


def _last_tag() -> str | None:
    try:
        out = subprocess.check_output(
            ["git", "-C", str(ROOT), "describe", "--tags", "--abbrev=0"],
            text=True, stderr=subprocess.DEVNULL).strip()
        return out or None
    except subprocess.CalledProcessError:
        return None


def append_release(version: str) -> str:
    """Generate ollama-written section, prepend to ChangeLog.html, return the section."""
    git_log = _git_log_since(_last_tag())
    if not git_log.strip():
        git_log = "(no commits since last tag)"
    body_html = render_release_notes(version=version, git_log=git_log)
    today = date.today().isoformat()
    section = (
        f'<section class="release" id="v{version}">\n'
        f'  <h2>v{version} — {today}</h2>\n'
        f'{body_html}\n'
        f'</section>\n'
    )
    if not CHANGELOG_PATH.exists():
        raise FileNotFoundError(f"missing {CHANGELOG_PATH}")
    text = CHANGELOG_PATH.read_text(encoding="utf-8")
    if INSERTION_TAG not in text:
        # Fallback: append before </body>
        text = text.replace("</body>", f"{section}</body>")
    else:
        text = text.replace(INSERTION_TAG, f"{INSERTION_TAG}\n{section}")
    CHANGELOG_PATH.write_text(text, encoding="utf-8", newline="\n")
    return section
