# systemd units (WSL)

Three services the pipeline depends on, so they survive a shell exiting and a
distro restart:

| unit | port | what |
|---|---|---|
| `ollama.service` | 11434 | the LLM backend (`gemma4:e4b`) |
| `llama-embed.service` | 8081 | bge-m3 embeddings, WP6 semantic dedup |
| `llama-rerank.service` | 8082 | bge-reranker-v2-m3, WP5 EU CRA gate |

## Why

All three were being started by hand with `nohup` from a `wsl -e bash -lc`
invocation, and WSL takes them down with the session that started them. On
2026-08-19 that happened three times in one working day: run #70 used the two
llama-server instances at 16:21 and all three were gone by 16:40. Shadow data
for WP5 accumulates only from daily runs, so a service that quietly disappears
between runs never accumulates anything.

`Restart=always` covers the other half - a crash mid-run.

## Install

Needs root, so a human runs it:

```bash
sudo bash ops/systemd/install.sh
```

It copies the three files into `/etc/systemd/system/`, reloads systemd,
enables and starts them, and then checks that each **port answers** rather
than that systemd calls the unit active - a unit can be running while the
port is not yet serving, and the port is what the pipeline talks to.

## Status and logs

```bash
systemctl status ollama llama-embed llama-rerank
journalctl -u llama-embed -n 50
bash ops/llama-server/llama_up.sh status      # port-level check, no systemd
```

Under systemd the daemon output goes to the journal, not to
`logs/ollama-serve.log`: that file only receives output from a daemon
**tracker itself** started (`tracker/preflight.py`). A run whose preflight
found the service already up will say so.

## Two things that can drift

1. **`OLLAMA_NUM_PARALLEL=4` in `ollama.service` must match
   `TRACKER_LLM_CONCURRENCY`** (default 4, `tracker/__init__.py`). ollama
   serves one request per slot and queues the rest, so a 4-wide pool against a
   1-slot daemon just queues. Nothing detects a mismatch - `/api/ps` reports
   per-slot context length, not the slot count - and the run report says
   plainly that it did not start the daemon and therefore cannot claim its
   slot count.

2. **The llama-server flags are duplicated** between these units and
   `ops/llama-server/llama_up.sh`. Both must change together. `llama_up.sh`
   remains the manual path for a machine without systemd, and for restarting
   the pair without touching the unit files.

## Uninstall

```bash
sudo systemctl disable --now ollama llama-embed llama-rerank
sudo rm /etc/systemd/system/{ollama,llama-embed,llama-rerank}.service
sudo systemctl daemon-reload
```
