"""Tracker — local-LLM security news pipeline."""
from pathlib import Path

ROOT = Path("/opt/tracker")
PROJECT_ROOT = Path("/mnt/d/Claude/Track Security")
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
SEARCHINFOS: dict[str, Path] = {
    "security": PROJECT_ROOT / "searchinfo_security.md",
    "eu_cra":   PROJECT_ROOT / "searchinfo_eu_cra.md",
    "os":       PROJECT_ROOT / "searchinfo_os.md",
}
DEFAULT_TRACKER = "security"

# Back-compat shim: code that still imports DEFAULT_SEARCHINFO will get
# the security searchinfo path.
DEFAULT_SEARCHINFO = SEARCHINFOS[DEFAULT_TRACKER]
