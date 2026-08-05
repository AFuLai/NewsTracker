#!/usr/bin/env bash
# Inject the shared half of CLAUDE.md into this machine's landing file.
#
# CLAUDE.md is read from the session cwd, which for this project is the Windows
# side, while the git canon lives in WSL (see the common-roots declaration).
# So the copy in the repo is never read by anything: the shared half has to be
# pushed out to each machine's landing file. Constitution appendix A.3.
#
# Usage:
#   sync.sh [--check] [--target PATH]     report drift; writes nothing (default)
#   sync.sh --apply   [--target PATH]     inject or refresh the managed block
#   sync.sh --self-test                   prove --check actually detects drift
#
# Target resolution: --target > $NEWSTRACKER_CLAUDE_MD > the default below.
# Exit: 0 in sync, 1 stale or missing, 2 usage/environment error.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SHARED="$HERE/shared.md"
DEFAULT_TARGET="/mnt/d/Claude/Tool/NewsTracker/CLAUDE.md"
BEGIN='<!-- NEWSTRACKER-SHARED:BEGIN generated from ops/claude-md/shared.md -- do not hand-edit -->'
END='<!-- NEWSTRACKER-SHARED:END -->'

MODE=check
TARGET=""
while [ $# -gt 0 ]; do
  case "$1" in
    --check)     MODE=check;     shift ;;
    --apply)     MODE=apply;     shift ;;
    --self-test) MODE=self-test; shift ;;
    --target)    TARGET="${2:-}"; shift 2 ;;
    -h|--help)   sed -n '2,14p' "$0"; exit 0 ;;
    *) echo "unknown argument: $1" >&2; exit 2 ;;
  esac
done
[ -f "$SHARED" ] || { echo "shared source not found: $SHARED" >&2; exit 2; }

# The block-level work is text surgery; doing it in sed/awk invites quoting bugs
# on a file that is mostly CJK prose, so it goes through python.
run_py() {  # run_py <mode> <target>
  BEGIN="$BEGIN" END="$END" SHARED="$SHARED" python3 - "$1" "$2" <<'PY'
import os, sys, pathlib
mode, target = sys.argv[1], pathlib.Path(sys.argv[2])
begin, end = os.environ["BEGIN"], os.environ["END"]
shared = pathlib.Path(os.environ["SHARED"]).read_text(encoding="utf-8").strip("\n")
block = f"{begin}\n{shared}\n{end}"

text = target.read_text(encoding="utf-8") if target.exists() else ""
i, j = text.find(begin), text.find(end)
present = i != -1 and j != -1 and j > i
current = text[i:j + len(end)] if present else None

if mode == "check":
    if not target.exists():
        print(f"MISSING  landing file does not exist: {target}"); sys.exit(1)
    if not present:
        print(f"MISSING  no managed block in {target}"); sys.exit(1)
    if current != block:
        print(f"STALE    managed block in {target} differs from ops/claude-md/shared.md")
        sys.exit(1)
    print(f"OK       {target} is in sync with ops/claude-md/shared.md"); sys.exit(0)

# apply
if present:
    out = text[:i] + block + text[j + len(end):]
else:
    sep = "" if text.endswith("\n\n") or text == "" else ("\n" if text.endswith("\n") else "\n\n")
    out = text + sep + block + "\n"
if out == text:
    print(f"OK       {target} already in sync; nothing written"); sys.exit(0)
if target.exists():
    bak = target.with_suffix(target.suffix + ".bak")
    bak.write_text(text, encoding="utf-8", newline="\n")
    print(f"backup   {bak}")
target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(out, encoding="utf-8", newline="\n")
print(f"WROTE    {target}")
PY
}

self_test() {
  local d rc out
  d="$(mktemp -d)"; trap 'rm -rf "$d"' RETURN
  local t="$d/CLAUDE.md"
  printf '# NewsTracker\n\nmachine-specific half must survive\n' > "$t"

  # Precondition (VERIFICATION 8.4): a negative test asserts what it needs first.
  grep -qF "$BEGIN" "$t" && { echo "self-test FAIL: fixture already has the block"; return 1; }

  rc=0; out="$(run_py check "$t")" || rc=$?
  [ "$rc" = 1 ] && [ "${out#MISSING}" != "$out" ] || { echo "self-test FAIL: missing block not reported ($rc: $out)"; return 1; }

  run_py apply "$t" >/dev/null
  rc=0; run_py check "$t" >/dev/null || rc=$?
  [ "$rc" = 0 ] || { echo "self-test FAIL: still not in sync after --apply"; return 1; }
  grep -qF "machine-specific half must survive" "$t" || { echo "self-test FAIL: content outside the block was lost"; return 1; }

  printf 'tampered\n' >> "$t"                      # drift inside? no -- outside the block
  rc=0; run_py check "$t" >/dev/null || rc=$?
  [ "$rc" = 0 ] || { echo "self-test FAIL: edits outside the block must not count as drift"; return 1; }

  python3 - "$t" <<'PY'                            # now tamper INSIDE the block
import pathlib, sys
p = pathlib.Path(sys.argv[1]); t = p.read_text(encoding="utf-8")
p.write_text(t.replace("git 正典在 WSL 側", "git 正典在別的地方", 1), encoding="utf-8")
PY
  rc=0; out="$(run_py check "$t")" || rc=$?
  [ "$rc" = 1 ] && [ "${out#STALE}" != "$out" ] || { echo "self-test FAIL: tampered block not reported stale ($rc: $out)"; return 1; }

  run_py apply "$t" >/dev/null
  rc=0; run_py check "$t" >/dev/null || rc=$?
  [ "$rc" = 0 ] || { echo "self-test FAIL: --apply did not restore"; return 1; }

  echo "self-test OK   missing / stale / restore all detected; outside-block content preserved"
}

case "$MODE" in
  self-test) self_test ;;
  *) run_py "$MODE" "${TARGET:-${NEWSTRACKER_CLAUDE_MD:-$DEFAULT_TARGET}}" ;;
esac
