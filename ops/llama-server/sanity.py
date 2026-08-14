"""WP4 deploy gate — the 3 sanity queries PLAN-v3.md requires.

The risk being tested is the one the plan names: a GGUF conversion that returns
near-zero (or constant) scores for everything. A reranker that cannot separate
an obviously on-topic document from an obviously off-topic one is broken, and
must be caught here rather than after it has silently gated a week of news.

Pass conditions, all three:
  1. on-topic scores strictly above off-topic, on every query
  2. the spread is real, not float noise (>0.2 between best and worst)
  3. multilingual: a Chinese/Japanese/Korean CRA document still outranks
     English noise, since half this tracker's sources are CJK
"""
import json
import sys

import httpx

RERANK = "http://127.0.0.1:8082/v1/rerank"
EMBED = "http://127.0.0.1:8081/v1/embeddings"

QUERIES = [
    ("CRA harmonised standard EN progress CEN CENELEC JTC 13", [
        # on-topic
        ("ON ", "CEN and CENELEC JTC 13 published the latest work programme for "
                "the harmonised standards supporting the Cyber Resilience Act."),
        ("ON ", "歐盟網路韌性法案的調和標準進度：CEN-CENELEC JTC 13 公布最新工作計畫。"),
        # off-topic
        ("OFF", "Manchester United signed a new striker in the summer transfer "
                "window for a club record fee."),
        ("OFF", "How to bake sourdough bread at home: a beginner's guide to "
                "starters, hydration and oven spring."),
    ]),
    ("Cyber Resilience Act delegated act implementing regulation", [
        ("ON ", "The European Commission adopted an implementing regulation "
                "setting out the technical description of important products "
                "with digital elements under the CRA."),
        ("ON ", "サイバーレジリエンス法に基づく委任法令が採択され、重要な製品カテゴリーが定義された。"),
        ("OFF", "Apple released iOS 26.2 with a redesigned Control Centre and "
                "new wallpapers."),
        ("OFF", "Researchers found a critical RCE in a popular WordPress plugin "
                "affecting 200,000 sites."),
    ]),
    ("CRA vulnerability reporting obligation ENISA single reporting platform", [
        ("ON ", "ENISA guidance explains the 24-hour early warning and the "
                "single reporting platform for actively exploited "
                "vulnerabilities under Article 14 of the CRA."),
        ("ON ", "사이버 복원력법 제14조에 따른 취약점 보고 의무와 ENISA 단일 보고 플랫폼에 대한 안내."),
        ("OFF", "The stock market closed higher on Tuesday as investors "
                "digested the latest inflation figures."),
        ("OFF", "A guide to the best hiking trails in the Swiss Alps this "
                "autumn season."),
    ]),
]

failures = []
print("=" * 74)
print("RERANK sanity (bge-reranker-v2-m3-FP16, /v1/rerank on :8082)")
print("=" * 74)

for qi, (query, docs) in enumerate(QUERIES, 1):
    body = {"model": "rerank", "query": query,
            "documents": [d for _, d in docs], "top_n": len(docs)}
    r = httpx.post(RERANK, json=body, timeout=180.0)
    r.raise_for_status()
    data = r.json()
    results = data.get("results", data.get("data", []))
    scored = {}
    for item in results:
        scored[item["index"]] = item.get("relevance_score",
                                         item.get("score"))
    print(f"\nQ{qi}: {query[:64]}")
    on, off = [], []
    for i, (tag, doc) in enumerate(docs):
        s = scored.get(i)
        print(f"   {tag} {s:+8.4f}  {doc[:52]}")
        (on if tag.strip() == "ON" else off).append(s)

    if min(on) <= max(off):
        failures.append(f"Q{qi}: an off-topic doc outranked an on-topic one "
                        f"(min ON {min(on):.4f} <= max OFF {max(off):.4f})")
    spread = max(on) - min(off)
    if spread < 0.2:
        failures.append(f"Q{qi}: spread {spread:.4f} < 0.2 — scores are flat, "
                        f"the classic broken-GGUF signature")
    # the CJK doc is the second ON entry in every query
    cjk = scored[1]
    if cjk <= max(off):
        failures.append(f"Q{qi}: the CJK on-topic doc ({cjk:.4f}) did not beat "
                        f"English noise ({max(off):.4f})")

print("\n" + "=" * 74)
print("EMBEDDING sanity (bge-m3-FP16, /v1/embeddings on :8081)")
print("=" * 74)
r = httpx.post(EMBED, json={"model": "bge-m3", "input": [
    "Cyber Resilience Act harmonised standards",
    "網路韌性法案調和標準",
    "sourdough bread baking guide",
]}, timeout=180.0)
r.raise_for_status()
vecs = [d["embedding"] for d in r.json()["data"]]
print(f"   dim = {len(vecs[0])}  (bge-m3 should be 1024)")


def cos(a, b):
    num = sum(x * y for x, y in zip(a, b))
    na = sum(x * x for x in a) ** 0.5
    nb = sum(x * x for x in b) ** 0.5
    return num / (na * nb)


same = cos(vecs[0], vecs[1])
diff = cos(vecs[0], vecs[2])
print(f"   cos(EN CRA, ZH CRA)      = {same:.4f}   <- cross-lingual, want high")
print(f"   cos(EN CRA, bread)       = {diff:.4f}   <- unrelated, want low")
if len(vecs[0]) != 1024:
    failures.append(f"embedding dim {len(vecs[0])} != 1024")
if same <= diff:
    failures.append(f"cross-lingual pair ({same:.4f}) not closer than the "
                    f"unrelated pair ({diff:.4f})")
if same < 0.5:
    failures.append(f"cross-lingual similarity {same:.4f} < 0.5 — bge-m3 is "
                    f"supposed to be strongly multilingual")

print("\n" + "=" * 74)
if failures:
    print("SANITY FAILED:")
    for f in failures:
        print("  -", f)
    sys.exit(1)
print("SANITY PASSED — scores separate, spread is real, CJK works both models")
sys.exit(0)
