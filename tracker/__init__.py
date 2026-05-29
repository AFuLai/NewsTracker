"""Tracker — local-LLM security news pipeline."""
from pathlib import Path

ROOT = Path("/opt/tracker")
DEFAULT_SEARCHINFO = Path("/mnt/d/Claude/Track Security/searchinfo_security.md")
DEFAULT_OUT = Path("/mnt/d/Claude/Track Security/html")
DEFAULT_TARBALL = Path("/mnt/d/Claude/Track Security/tarball")
DEFAULT_DB = ROOT / "db" / "articles.sqlite"
OLLAMA_URL = "http://localhost:11434"
OLLAMA_MODEL = "gemma4:e4b"
