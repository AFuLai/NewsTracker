# Runtime environment (bootstrap)

The pipeline runs **only under WSL** on the ext4 repo at `/opt/tracker/repo`. Paths
like `PROJECT_ROOT = /mnt/d/Claude/Tool/NewsTracker` (`tracker/__init__.py`) are
hardcoded for this deployment; the engine is not meant to be `pip install`-ed
and run on an unrelated machine (release zips from `tracker pack` ship the
engine only — see the top-level README).

## The venv (addresses the "which interpreter" gap)

There is **no venv checked in**, and the system `python3` (3.14) has none of the
dependencies. The runtime interpreter is a venv at `/opt/venv`:

```bash
python3 -m venv /opt/venv
/opt/venv/bin/pip install -e .          # runtime deps + the tracker package
/opt/venv/bin/pip install -e '.[dev]'   # + pytest & pytest-cov, to run tests
```

- Interpreter: CPython **3.14** (`pyproject` requires `>=3.11`; deps resolve on
  3.14). There is no lockfile — dependencies are pinned only by lower bound.
- Everything below assumes `/opt/venv/bin/python` as the interpreter.

## Run the tests

```bash
cd /opt/tracker/repo
/opt/venv/bin/python -m pytest -q                 # fast, hermetic (~5s)
/opt/venv/bin/python -m pytest --cov=tracker       # coverage (needs .[dev])
```

Tests are isolated from live state by `tests/conftest.py`: it redirects
`ollama_hosts.CONFIG_PATH` (the real `endpoints.json`) and `PROJECT_ROOT` (the
real `status.json`) to per-test temp dirs, so running the suite never touches
the operator's endpoint list or last-run health signal.

## Logs

Each run writes `logs/run-<UTC-timestamp>.log` (git-ignored). Ad-hoc/manual and
test runs land here alongside the scheduled runs, and there is **no rotation** —
the directory grows unbounded. Prune it periodically; it holds no state the
pipeline reads back (the authoritative last-run summary is `status.json` +
the `runs` table in `db/articles.sqlite`).
