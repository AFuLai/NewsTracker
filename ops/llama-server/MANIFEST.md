# llama-server deployment (PLAN-v3.md WP4)

Two CPU-only `llama-server` instances providing embeddings and reranking. They
exist because ollama has no `/v1/rerank` endpoint: WP5 needs a *quantitative*
relevance score for the EU CRA gate, and WP6 needs sentence embeddings for
cross-source semantic dedup. Generation stays on ollama and is not touched.

**Nothing here uses the GPU.** Both are started with `-ngl 0`, so all 8 GB of
VRAM stays with ollama's `gemma4:e4b`. The cost is RAM and CPU, of which this
box has 23 GB and 22 cores.

## Pinned versions

Reproducibility: an unpinned binary or model file makes every score in this
pipeline unreproducible, and the whole point of WP5 is a *calibrated* threshold.

| item | value |
|---|---|
| llama.cpp release | `b10423` (build 10423, commit `a94d563ed`, built GNU 11.4.0 x86_64) |
| source | `https://github.com/ggml-org/llama.cpp/releases/download/b10423/llama-b10423-bin-ubuntu-x64.tar.gz` |
| tarball sha256 | `664ffbf9134dbc12b2de3281d0404cb8f98a2339580911e5f74035dc320e0e84` |
| install path | `/opt/llama.cpp/llama-b10423/` |

| model | file | sha256 | source |
|---|---|---|---|
| embeddings | `bge-m3-FP16.gguf` (1157 MB) | `daec91ffb5dd0c27411bd71f29932917c49cf529a641d0168496c3a501e3062c` | `huggingface.co/gpustack/bge-m3-GGUF` |
| rerank | `bge-reranker-v2-m3-FP16.gguf` (1160 MB) | `5df93be121c09c43432102ad2b9569d369ccb85c209ca7583e8ccd28f0e41b88` | `huggingface.co/gpustack/bge-reranker-v2-m3-GGUF` |

FP16 rather than a quantised build on purpose. PLAN-v3.md lists "bge/reranker
GGUF conversion quality (known near-zero-score cases)" as a risk, and
quantisation is where that risk lives; these models are small enough that
avoiding it costs only ~1.2 GB of RAM each.

Model path: `/opt/llama.cpp/models/`.

Re-derive the hashes:

```bash
sha256sum /opt/llama.cpp/models/*.gguf /opt/llama.cpp/*.tar.gz
```

## Ports and flags

| port | model | flags | endpoint used |
|---|---|---|---|
| 8081 | bge-m3 | `--embedding --pooling cls -ngl 0 --threads 6` | `/v1/embeddings` |
| 8082 | bge-reranker-v2-m3 | `--reranking --pooling rank -ngl 0 --threads 6` | `/v1/rerank` |

Bound to `127.0.0.1` only — these have no auth and must not be reachable off
the box. Measured resident size: 1282 MB and 1421 MB.

## Deploy-gate results (2026-08-14)

`ops/llama-server/sanity.py` is the gate, run at every deploy and after any
version change. It fails the deploy on the failure mode the plan names — a
conversion that returns flat or near-zero scores for everything.

Rerank scores are **raw logits, not 0..1**, and are not comparable to any
other model's. Observed range on the gate set:

| | score range |
|---|---|
| on-topic (EN) | `-3.99` … `+5.46` |
| on-topic (zh/ja/ko) | `+0.44` … `+4.39` |
| off-topic | `-9.55` … `-11.04` |

The off-topic side saturates near `-11`, so the usable signal is the on-topic
tail. WP5's threshold τ must be calibrated on this scale against a real
validation set, never guessed — and re-calibrated if either pinned version
above changes.

Embeddings: dim 1024. cos(EN "CRA harmonised standards", ZH "網路韌性法案調和
標準") = `0.6965`; cos(same EN, "sourdough bread baking guide") = `0.2653`.
Cross-lingual retrieval works, which is required — roughly half this tracker's
sources are CJK.

## Generation server (WP8, CUDA — port 8083)

Added for PLAN-v4 WP8: a *third* `llama-server` serving gemma-4-E4B generation
on the GPU, so the pipeline no longer depends on a borrowed remote ollama.

**Why a source build.** llama.cpp ships **no Linux CUDA binary** (only Windows
gets `win-cuda`); the Linux release tarballs are CPU / Vulkan / ROCm / SYCL.
On this WSL2 box Vulkan exposes only software ICDs (`lvp`=llvmpipe), so the only
real GPU path is CUDA, which had to be compiled from source. The b10423
embed/rerank build stays **untouched** (G6: its `MODEL_TAG` binds the CRA
calibration to that build).

| item | value |
|---|---|
| llama.cpp source | git tag `b10665`, commit `ca3d5a3e10d53f7ea672cb9b6178faca3e2807bc` |
| clone | `git clone --depth 1 --branch b10665 https://github.com/ggml-org/llama.cpp` |
| build | `cmake -B build -DGGML_CUDA=ON -DCMAKE_BUILD_TYPE=Release -DCMAKE_CUDA_HOST_COMPILER=g++-13 -DCMAKE_CUDA_ARCHITECTURES=89 -DLLAMA_CURL=OFF` |
| toolchain | CUDA 12.4.131 (nvcc), host gcc-13.4 (default gcc 15.2 is too new for nvcc 12.4), driver 552.22 |
| install path | `/opt/llama.cpp/llama-b10665/` (binary + `libggml-cuda.so` etc.) |

| model | file | sha256 | source |
|---|---|---|---|
| generation | `google_gemma-4-E4B-it-Q4_K_M.gguf` (5,405,170,144 B / 5.41 GB) | `d35a3aa7a6d47de237fd488bb6f7f3efd62908d828f85a63da0ee93acdbefe9f` | `huggingface.co/bartowski/google_gemma-4-E4B-it-GGUF` |

Re-derive: `sha256sum /opt/llama.cpp/models/google_gemma-4-E4B-it-Q4_K_M.gguf`
(HF LFS oid = sha256; verified before and after download).

**Flags** (systemd `llama-gen.service`, port 8083, `127.0.0.1` only):
`-ngl 99 -fa on -ctk q8_0 -ctv q8_0 -c 8192 -np 4 --jinja`. `--cache-reuse`
from the PLAN draft is dropped — "cache_reuse is not supported by this context"
with a quantized-KV flash-attention context.

**WP8.1 — GPU offload (VRAM).** `-ngl 99` offloads every repeating layer.
Gemma E4B keeps its token-embedding / PLE tensors on CPU **by architecture**, so
steady VRAM is ~2.2 GB (3.3 GB total incl. the ~1.1 GB Windows-host baseline),
not the full 5 GB — this is expected and is *not* the old ollama 42/43 shortfall.
Measured 76% GPU utilisation during decode; ~4.6 GB VRAM headroom remains.
Re-derive: `nvidia-smi --query-gpu=memory.used,utilization.gpu --format=csv` while
generating. This build prints **no** `offloaded N/N` line, so throughput is the
offload proxy (below).

**WP8.2 — sanity (2026-08-28).** `ops/llama-server/sanity.py` extended with 3
generation checks, all green: `/health`→200; a `json_schema`-constrained
generation returns valid JSON (`title`+`summary`); eval throughput **29–38 tok/s**
(prompt eval ~85–125 tok/s) — well above the >20 GPU threshold (a CPU-bound E4B
is single digits).

**Thinking-channel finding (feeds WP9 revision / WP10).** This GGUF's chat
template injects a `<|channel>thought` reasoning phase; on `/v1/chat/completions`
the model burns the whole token budget thinking and `content` stays empty
(`finish_reason:length`), and `--reasoning off` / `enable_thinking:false` do not
suppress it. The pipeline therefore drives generation through **`/completion` +
`json_schema`** (compiled to a grammar that constrains from the first token),
which yields clean JSON with no thinking. WP9's adapter currently posts to
`/v1/chat/completions` and must be revised to this path before WP9.2.

## Operating

```bash
bash ops/llama-server/llama_up.sh start     # start both, wait for /health
bash ops/llama-server/llama_up.sh status    # report health without changing it
bash ops/llama-server/llama_up.sh stop
/opt/venv/bin/python ops/llama-server/sanity.py   # the deploy gate; exit 1 on failure
```

Logs: `/tmp/llama-embed.log`, `/tmp/llama-rerank.log`.

**Fail-open is the contract.** `tracker/rerank.py` treats an unreachable or
erroring service as "no opinion": the pipeline keeps every article and logs it,
exactly as the L1 prompt gate does. Verify it by stopping both services and
running a pipeline — that is a Phase 1 acceptance item in PLAN-v3.md.
