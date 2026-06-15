"""L3 — deterministic quality self-review (anti-hallucination).

Pure regex, no ollama call (cheaper and more reliable than asking gemma to
grade itself). Rejects a summary when:
  (a) title or summary is empty (schema incomplete)
  (b) category is neither in the tracker whitelist nor 'uncategorized'
  (c) a CVE id cited in the summary does not appear in the source body
  (d) a CVSS score cited in the summary does not appear in the source body

A rejection triggers one re-summarize (handled by the orchestrator); a second
rejection marks the article review_failed. This is the last line against the
"invented CVSS" failure mode.
"""
from __future__ import annotations

import re

CVE_RE = re.compile(r"CVE-\d{4}-\d{4,7}", re.I)
# "CVSS 9.8", "CVSS v4 9.3", "CVSS：9.2", "CVSS score of 7.8"
CVSS_RE = re.compile(r"CVSS[^\d]{0,12}(\d{1,2}\.\d)", re.I)


def review(result: dict, raw_text: str, info) -> tuple[bool, str | None]:
    title = (result.get("title") or "").strip()
    summary = (result.get("summary") or "").strip()
    category = (result.get("category") or "").strip()
    body = raw_text or ""
    body_l = body.lower()

    if not title or not summary:
        return False, "empty title or summary"

    allowed = set(info.categories) | {"uncategorized"}
    if category not in allowed:
        return False, f"category '{category}' not in whitelist"

    # (c) CVE ids must be grounded in the source body
    for cve in {m.group(0).upper() for m in CVE_RE.finditer(summary)}:
        if cve.lower() not in body_l:
            return False, f"fabricated CVE {cve} (not in source)"

    # (d) CVSS scores must be grounded in the source body
    for score in {m.group(1) for m in CVSS_RE.finditer(summary)}:
        if score not in body:
            return False, f"fabricated CVSS {score} (not in source)"

    return True, None
