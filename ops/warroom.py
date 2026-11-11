#!/usr/bin/env python3
"""warroom.py -- NewsTracker's war-room adapter (team-ops, .common/warroom.json).

Prints one "warroom/1" document on stdout (contract: Common tools/codex-assist/warroom_feed.py).
NewsTracker has no work DAG, so endpoint/road stay empty and notes say so; weekly carries the
last 8 weeks of commit counts from git. Stdlib only.
"""
import datetime as dt
import json
import os
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def weekly(today):
    monday = today - dt.timedelta(days=today.weekday())
    starts = [monday - dt.timedelta(weeks=i) for i in range(7, -1, -1)]
    try:
        out = subprocess.run(["git", "-C", REPO, "log", "--since=%s" % starts[0].isoformat(), "--format=%cs"],
                             capture_output=True, text=True, timeout=60, check=True).stdout.split()
        err = False
    except (OSError, subprocess.SubprocessError):
        out, err = [], True
    rows = []
    for s in starts:
        n = sum(1 for d in out if s <= dt.date.fromisoformat(d) < s + dt.timedelta(weeks=1))
        rows.append({"week_start": s.isoformat(), "commits_by_category": {"all": n}, "error": err})
    return rows


def main():
    today = dt.date.today()
    doc = {"schema": "warroom/1", "project": "NewsTracker",
           "generated": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
           "endpoint": {"targets": []},
           "road": {"ready": [], "blocked": [], "user_gated": [], "choke": [], "critical_path": {}},
           "dispatch": {"note": "no dispatch ledger in this repo"},
           "weekly": weekly(today),
           "notes": ["No work DAG: NewsTracker is a single-maintainer pipeline (daily fetch/render/deploy); "
                     "endpoint and road are intentionally empty."]}
    print(json.dumps(doc, ensure_ascii=False))


if __name__ == "__main__":
    main()
