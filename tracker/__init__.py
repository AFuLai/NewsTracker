"""Tracker — local-LLM security news pipeline."""
from pathlib import Path

ROOT = Path("/opt/tracker")
PROJECT_ROOT = Path("/mnt/d/Claude/Tool/NewsTracker")
# Static site output lives on ext4 (native to render.py): ~90x faster small-file
# writes than drvfs(/mnt/d) and none of the cross-write pitfalls (drvfs speed
# tax, 777/CRLF git noise, AV locking, ADS streams). The tarball stays on /mnt/d
# for Windows-side distribution.
DEFAULT_OUT = ROOT / "html"
DEFAULT_TARBALL = PROJECT_ROOT / "tarball"
DEFAULT_DB = ROOT / "db" / "articles.sqlite"
OLLAMA_URL = "http://localhost:11434"
OLLAMA_MODEL = "gemma4:e4b"

# Multi-tracker support. Each top-level "tracker" is a self-contained
# topic with its own searchinfo file, categories, and manifest tree.
# These live IN the repo (not on /mnt/d) so the source lists, categories and
# keywords are versioned and published alongside the engine that reads them —
# a checkout is runnable as-is instead of needing three files nobody has.
SEARCHINFOS: dict[str, Path] = {
    "security": ROOT / "searchinfo" / "searchinfo_security.md",
    "eu_cra":   ROOT / "searchinfo" / "searchinfo_eu_cra.md",
    "os":       ROOT / "searchinfo" / "searchinfo_os.md",
}
DEFAULT_TRACKER = "security"

# Back-compat shim: code that still imports DEFAULT_SEARCHINFO will get
# the security searchinfo path.
DEFAULT_SEARCHINFO = SEARCHINFOS[DEFAULT_TRACKER]
