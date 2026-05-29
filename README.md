# Tracker

Security news tracker — runs entirely on WSL with local Ollama (`gemma4:e4b`).
Triggered by Claude Code via CLI; outputs static HTML site to
`D:\Claude\Track Security\html\`.

## Quick start

```bash
cd /opt/tracker
python3 -m venv .venv && source .venv/bin/activate
pip install -e .

tracker --help
tracker status
tracker fetch --since 2026-05-30 --until 2026-05-30
tracker summarize --pending
tracker write --date 2026-05-30
tracker pack
```

## Layout

| Path | Purpose |
|------|---------|
| `tracker/` | Python source |
| `tracker/prompts/` | Ollama prompt templates |
| `tracker/templates/` | Jinja2 templates for `.js` output |
| `db/articles.sqlite` | local article store (gitignored) |
| `VERSION` | current version string |
| `ChangeLog.html` | accumulating release notes (prepend on pack) |

## Config

`tracker.config.load_searchinfo()` reads
`/mnt/d/Claude/Track Security/searchinfo_security.md` by default. Override
with `--searchinfo`.

## Output

Default output directory: `/mnt/d/Claude/Track Security/html`.
Override with `tracker write --out PATH`.

## Pack

`tracker pack` (default bumps `#N`):
1. Generate v{M}.{N} release section via ollama, prepend to `ChangeLog.html`
2. Write new `VERSION`
3. `git add -A && git commit && git tag v{M}.{N}`
4. `git archive` → `D:/Claude/Track Security/tarball/Tracker-{M}.{N}.zip`

## Performance tuning

`summarize` is bottlenecked by serial ollama calls (~15–20s per article on
`gemma4:e4b`). The `fetch_body` phase already runs in parallel via a
ThreadPoolExecutor; to also parallelize ollama, set `OLLAMA_NUM_PARALLEL`
on the ollama server **before** starting it:

```bash
# 2× parallel — needs roughly 2× VRAM (~12 GB total for gemma4:e4b)
OLLAMA_NUM_PARALLEL=2 ollama serve

# Or persist via systemd drop-in:
sudo mkdir -p /etc/systemd/system/ollama.service.d
cat <<'EOF' | sudo tee /etc/systemd/system/ollama.service.d/parallel.conf
[Service]
Environment="OLLAMA_NUM_PARALLEL=2"
EOF
sudo systemctl daemon-reload && sudo systemctl restart ollama
```

Then run with `tracker summarize --concurrency 2` (or higher). Ollama
queues additional requests, so going above `OLLAMA_NUM_PARALLEL` gives
no further speedup but won't error.

VRAM budget for `gemma4:e4b` is ~6 GB at concurrency 1. With 16 GB VRAM
you can safely set `OLLAMA_NUM_PARALLEL=2`; with 8 GB stay at 1.
