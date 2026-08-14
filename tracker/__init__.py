"""Tracker — local-LLM security news pipeline."""
import os
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

# WP2: how many LLM calls the summarize/translate phases may have in flight.
# Lives here rather than in orchestrator.py because preflight also needs it —
# it starts the ollama daemon with a matching OLLAMA_NUM_PARALLEL, and reading
# it from the orchestrator would make preflight import it, which is a cycle.
DEFAULT_LLM_CONCURRENCY = 4


def llm_concurrency() -> int:
    """Worker count for the LLM phases, from TRACKER_LLM_CONCURRENCY.

    Floor of 1 so a nonsense value degrades to the pre-WP2 serial behaviour
    instead of raising in the middle of a run."""
    try:
        return max(1, int(os.environ.get("TRACKER_LLM_CONCURRENCY",
                                         DEFAULT_LLM_CONCURRENCY)))
    except (TypeError, ValueError):
        return DEFAULT_LLM_CONCURRENCY

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
