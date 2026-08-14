# EU CRA gate v2 — threshold calibration record (PLAN-v3.md WP5)

Model and query set this record applies to:
`bge-reranker-v2-m3-FP16/b10423/queries-v1` (`cra_gate.MODEL_TAG`).
Scores are raw logits from this exact build. **Any change to the model, the
binary, or `tracker/prompts/cra_queries.txt` invalidates every number here**
and requires a fresh replay under a new `MODEL_TAG`.

## What was measured (2026-08-14)

245 `eu_cra`-tagged rows with summaries, plus 200 randomly sampled rows *not*
tagged `eu_cra` as a control, scored against all 17 queries; each row keeps its
maximum. 445 documents x 17 queries = 7565 scorings, 5219 s on CPU.

| set | n | min | p25 | median | p75 | max |
|---|---|---|---|---|---|---|
| tagged `eu_cra` | 245 | -10.52 | -6.68 | **-2.59** | +1.56 | +5.70 |
| control (not `eu_cra`) | 200 | -11.02 | -10.60 | -9.89 | -8.72 | **-2.11** |

The control set never exceeds **-2.11**, while half the tagged set sits below
-2.59. The two populations barely overlap, which is the result that makes a
threshold possible at all.

By source, the tagged set splits cleanly into the intended sources and the
collateral of a broad keyword filter:

| n | median | source |
|---|---|---|
| 43 | **+3.04** | EC CRA implementation page |
| 9 | +2.73 | BSI (Germany) |
| 4 | +2.59 | STAN4CRA |
| 30 | -1.02 | ENISA News |
| 36 | -2.95 | ETSI |
| 48 | **-8.54** | Boannews (KR) |
| 9 | **-8.17** | Singapore CSA |

## How the threshold was chosen

Recall risk lives entirely below the cut, so **all 116 tagged rows below -3.0
were read individually** rather than sampled. None was a genuine EU CRA
article. They are ETSI conference and governance notices, ENISA brand
guidelines / financial reports / internal procedures, other EU regulations
(AI Act, DSA, EUDIW), and Korean and Singaporean security-industry news
(vendor launches, ISEC booths, CCTV and parking platforms).

The closest thing to a miss, at **-6.36**, is a Commission note on "Type C"
critical product category standardisation, which is arguably CRA scope. One
borderline article in 116.

**τ = -3.0.**

| | keeps | of which genuinely CRA | precision | recall |
|---|---|---|---|---|
| current L1 prompt gate | 245 | ~103 | 0.42 | 1.00 |
| rerank gate at τ = -3.0 | 129 | ~102 | **0.79** | **~0.99** |
| rerank gate at τ = 0.0 | 84 | ~80 | 0.95 | 0.78 — **fails** the ≥0.95 recall bar |

That satisfies PLAN-v3.md's enablement condition (recall ≥ 0.95, precision
clearly better than L1) — **subject to the two limits below.**

## Limits of this calibration — read before enabling

1. **The "genuinely CRA" labels are one reader's judgement of titles**, made in
   this session, not an independent validation set, and not a reading of full
   article text. The counts above are estimates resting on that. The `≥ 0` and
   `< -3` bands were unambiguous; the **-3..0 band was sampled 8 of 45** and
   ran roughly half and half, and that band is where the precision estimate is
   softest.

2. **The replay scored different text from what the gate scores.** The replay
   used `title + summary[:400]` because `raw_text` is purged for most older
   rows; the gate runs before summarisation and scores `title + snippet[:240]`.
   A live shadow run over 40 rows carrying both measured the gap: delta median
   **-0.62** (range -4.80 .. +0.84), and **0 of 40 articles crossed τ = -3.0**
   in either direction. That is reassuring but weak evidence — that sample's
   median score was -9.0, so only about five rows were near the threshold at
   all and could have flipped.

Because of (1) and (2), **τ = -3.0 ships as provisional and the gate ships in
shadow mode**. Enabling it is a deliberate act:

```bash
TRACKER_CRA_GATE=enforce tracker pipeline ...     # opt in
TRACKER_CRA_TAU=-2.5 ...                          # override the threshold
```

Before enabling, re-derive τ from shadow rows the gate itself produced — those
are scored on the real input — rather than from this replay.

## Cost

Measured on the live gate: 40 candidates x 17 queries in 272.9 s = **6.8 s per
candidate** (~0.40 s per doc-query, CPU). A run with ~50 `eu_cra` candidates
costs roughly 5-6 minutes, against a whole-gate phase of 232 s in run #64 — so
enabling this roughly doubles the gate phase. Document length dominates:
~130-character documents measured ~107 ms per doc-query against ~400 ms for
real snippets, so `SNIPPET_CHARS` is the lever if this needs to get cheaper.

## Re-derive

```bash
sqlite3 /opt/tracker/db/articles.sqlite \
  "select count(*), min(score), max(score) from cra_scores where model_tag='bge-reranker-v2-m3-FP16/b10423/queries-v1'"
sqlite3 /opt/tracker/db/articles.sqlite \
  "select a.title, c.score from cra_scores c join articles a on a.id=c.article_id order by c.score desc limit 40"
```

---

# WP6 — semantic dedup threshold (τ₂)

`cluster.SIM_THRESHOLD`, cosine over bge-m3-FP16 embeddings of
`title + summary[:600]`.

## Measured (2026-08-14)

All 154 articles of the busiest day in the DB (2026-06-30) embedded, then every
pair compared — 11 781 pairs:

| p50 | p90 | p99 | p99.9 | max |
|---|---|---|---|---|
| 0.463 | 0.584 | 0.845 | 0.908 | 0.941 |

Unrelated security articles sit around 0.46–0.58, so the plan's starting value
of **0.85 lands at roughly p99** — strict, as intended. This is the number that
justifies it; a threshold near 0.6 would merge a large share of the day.

Two pairs cleared 0.85, and both are genuine duplicates that the existing
CVE-bridge and title-Jaccard signals missed:

| cos | pair |
|---|---|
| 0.941 | Google phasing out the Tenor GIF API — two independent write-ups |
| 0.872 | Apple v. Epic, Supreme Court agreeing to hear the App Store appeal — two write-ups |

Clusters for that day: 150 with CVE+Jaccard only, **148** with the semantic
signal added. No false merge in this sample.

**One day, two positive pairs is a small sample** — enough to show the
threshold is not absurd and that the signal finds real duplicates, not enough
to put a false-merge rate on it. So `semantic=False` (shadow) remains the
default; a wrong merge deletes an article from the reader's view, because only
the cluster primary is rendered.

```bash
TRACKER_SEMANTIC_DEDUP=enforce tracker pipeline ...   # opt in
TRACKER_CRA_CROSSTAG=shadow|enforce ...               # rerank cross-tagging
```

Cross-tagging is off unless asked for, and cost is why as much as caution: at
6.8 s per candidate, scoring a 267-article run adds roughly 30 minutes.

Re-derive:

```bash
sqlite3 /opt/tracker/db/articles.sqlite \
  "select count(*) from articles where embedding is not null"
grep semdedup /opt/tracker/logs/run-*.log       # shadow pairs, with cosines
```
