# Phase 0 acceptance record — PLAN-v3.md WP1–WP3

Measured 2026-08-19. Code under test: `15a4da7` (its working-tree content is
what run #68 executed; the commit was made after the run). The runs it is
compared against ran on `b81add1` (#64) and `607757a` (#65).

Every number below is wall clock on one machine — RTX 2000 Ada Laptop, 8188
MiB VRAM, 23 GB RAM, 22 cores, ollama 0.23.2, `gemma4:e4b`. Re-derivation
commands are at the bottom.

## Verdict

| # | criterion (PLAN-v3.md) | result | verdict |
|---|---|---|---|
| 1 | `parse_fallback` = 0, `schema_miss` = 0 | 0 / 0 across runs #64–#68 | **pass** |
| 2 | summarize + translate < 60 min | 61.4 min (#64), 67.3 min (#68) | **fail** |
| 3 | whole run < 90 min (baseline 168) | 70.2 min (#64), 76.2 min (#68) | **pass** |
| 4 | `rev_fail` no higher than baseline | baseline 0/207; #68 1/282 | **marginal** |
| 5 | `uncategorized` share falls | 0.59% → 0.00% | **pass** |
| 6 | 8 GB VRAM, all layers on GPU | 42/43 at every configuration tested | **fail, and unreachable by configuration** |

Criterion 2 is missed by 7.3 min at run #68's volume; the throughput goal
behind it (2x) *was* met — see the per-article table. Criterion 6 is not a
tuning problem, and section "The 43rd layer" is why.

## Throughput

Per-article figures are the phase's wall clock divided by the articles it
processed, which is the number that survives a change in run size. `n` is the
article count for that phase.

| run | date | code | concurrency | summarize | translate | whole run |
|---|---|---|---|---|---|---|
| #63 baseline | 08-12 | pre-v3, serial | 1 | 17.3 s (n=184) | 13.2 s (n=487) | 168 min |
| #64 | 08-14 | `b81add1` | 4 | 7.87 s (n=267) | 5.92 s (n=267) | 70.2 min |
| #65 | 08-16 | `607757a` | 4 | 10.7 s (n=143) | **42.3 s** (n=143) | 134 min |
| #68 | 08-19 | `15a4da7` | 4 | 7.97 s (n=282) | 6.37 s (n=281) | 76.2 min |

#68 against the #63 baseline: summarize **2.17x**, translate **2.07x**. #64 and
#68 agree to within 8% on both phases, which is what makes them two
measurements rather than one repeated.

**Run #65 is an outlier and stays unexplained.** Its translate phase ran 7.7x
slower than a bench of the same code against the same rows, its own summarize
phase minutes earlier was normal, and its log records `ollama ready (started
here, OLLAMA_NUM_PARALLEL=4)`, so the slot count is not the variable. The
artefacts that would have identified it did not exist at the time: the
daemon's output went to `/dev/null` and no phase recorded a per-call number.
Both are fixed in `15a4da7`; that is the whole reason it exists.

Bench against a copy of the production DB, 2026-08-19, `translate_article()`
over rows from the 08-13..08-19 window:

| shape | s/article | note |
|---|---|---|
| serial | 13.77 (n=3) | reproduces #63's 13.2 and WP2's 12.83 |
| 4 workers, batched as `_phase_translate` ships | 5.48 (n=8) | reproduces WP2's 5.48 exactly |
| 4 workers, no per-batch barrier | 6.80 (n=8) | the batch barrier is not a cost |

## The 43rd layer

Run #68's daemon log — readable for the first time, because `15a4da7` stopped
discarding it — shows ollama asking for `GPULayers:43`, backing off, and
settling on:

```
offloading 42 repeating layers to GPU
offloading output layer to CPU
offloaded 42/43 layers to GPU
```

PLAN-v3.md's risk table predicts this and names the lever: drop `num_ctx` or
drop concurrency, judged on total throughput. Both were measured, same 16
articles per configuration, daemon restarted between them so no slot carried a
warm prompt cache across configurations:

| configuration | layers | KvSize | s/article | per-call p50 | throughput |
|---|---|---|---|---|---|
| **P=4 ctx=8192 (shipping)** | 42/43 | 32768 | **6.18** | 22.6 s | baseline |
| P=4 ctx=6144 | 42/43 | 24576 | 6.91 | 24.5 s | −10.5% |
| P=3 ctx=8192 | 42/43 | 24576 | 6.79 | 19.2 s | −9.0% |

Neither candidate moves the layer, and both are slower. By the plan's own
criterion — total throughput — the shipping configuration wins and nothing
should change.

Because halving the KV changed nothing, a load-only probe pushed it further:

| configuration | KvSize | layers | GPU available | model total |
|---|---|---|---|---|
| P=4 ctx=2048 | 8192 | 42/43 | 7.8 GiB | 10.1 GiB |
| P=1 ctx=2048 | 2048 | 42/43 | 7.8 GiB | 9.7 GiB |
| P=1 ctx=8192 | 8192 | 42/43 | 7.8 GiB | 9.9 GiB |

KV runs from 2048 to 32768 — a factor of 16 — and concurrency from 1 to 4, and
every configuration lands on 42/43. KV accounts for roughly 0.4 GiB of the
total; weights plus compute graph need about 9.3 GiB against 7.8 GiB
available. **`gemma4:e4b` at this quantisation does not fit in 8 GB, so its
output layer stays on the CPU whatever the KV settings are.**

Criterion 6 therefore cannot be satisfied by configuration. The remaining
levers are a smaller quantisation or a smaller model, both of which are model
changes and belong to Phase 2, not to Phase 0.

**Limits of this finding.** Quantisations other than the shipped one were not
tested, and neither was any other model; the claim above is about
`gemma4:e4b` as deployed. What *is* established across the whole matrix is
that KV size and slot count are not the binding constraint.

The criterion's intent — no OOM, no offload slowdown — is met: no OOM at any
setting, throughput is 2.1x the serial baseline, and 42/43 is a fixed property
of this hardware and model rather than a degradation. Run #64 was almost
certainly also 42/43; nobody could know, because that log line was being
discarded.

## Accuracy

`uncategorized` share, split at `b81add1` (schema-constrained output):

| population | n | uncategorized | share |
|---|---|---|---|
| summarised before WP1 (free JSON) | 6073 | 36 | 0.59% |
| summarised after WP1 (schema) | 482 | 0 | **0.00%** |

`schema_miss` and `parse_fallback` are 0 in every run since WP1 landed, so the
`_coerce_category` fuse has not been reached once.

`rev_fail` (L3 anti-hallucination review): baseline #63 was 0 of 207, run #68
was 1 of 282 (0.35%). One instance, and the criterion says "no higher than
baseline", so it is recorded as marginal rather than passed. Not treated as a
regression on a single occurrence; a second run showing the same rate would
change that.

## Re-derive

```bash
# per-phase and per-call numbers for any run
grep -E "per-call|finished:" /opt/tracker/logs/run-*.log

# the same, machine-readable, for the last run
python3 -c 'import json;d=json.load(open("/opt/tracker/status.json"));print(d["llm_call_s"],d["phase_s"])'

# what ollama decided to put on the GPU
grep -E "offloaded|output layer|KvSize" /opt/tracker/logs/ollama-serve.log

# uncategorized share either side of b81add1
python3 - <<'PY'
import sqlite3
c = sqlite3.connect("/opt/tracker/db/articles.sqlite")
q = ("SELECT SUM(category='uncategorized'), COUNT(*) FROM articles "
     "WHERE summarized_at IS NOT NULL AND summary IS NOT NULL AND summarized_at %s ?")
for op in ("<", ">="):
    unc, n = c.execute(q % op, ("2026-08-14T09:45",)).fetchone()
    print(op, n, unc, "%.2f%%" % (100.0 * (unc or 0) / n))
PY
```

The configuration comparison and the load probe were one-off scripts, not
committed: they restart the ollama daemon and are not safe to run while a
pipeline is in flight. Their method is stated above in full — same rows across
configurations, daemon restarted between them, `num_ctx` injected into the
request payload — which is what a repeat needs.
