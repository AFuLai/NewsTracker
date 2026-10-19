# Task (plan only — do NOT edit anything): how the news site should present categories and topics

Working root: /opt/tracker/repo (absolute paths). This is a read-only planning task.

## What to read (closed list)
1. /opt/tracker/repo/ui/index.html — the site shell. Key parts: `CAT_MAP` and `effectiveCat()` (about
   lines 1308–1350), `buildCatPills` / `refreshCatPills` (search for them), category colour CSS
   (about lines 637–660), the card renderer around line 2003.
2. /opt/tracker/repo/searchinfo/searchinfo_security.md, searchinfo_eu_cra.md, searchinfo_os.md — the
   `category 值` tables (each tracker's declared categories and what belongs in them).

## Measured facts (from the session, DB of 12,801 published articles; use these, do not recompute)
Counts are per tracker the article belongs to, by the article's stored `category`, all time / last 90 days.
- security: 漏洞與威脅情報 2675/1887, Linux 997/726, 前瞻技術 581/400, 供應鏈與開源安全 462/282,
  Android 411/271, 重大事件 409/281, 重點關注 325/215, Windows 180/136, 法規與標準 139/86,
  產業動態 121/99, Apple 119/73, uncategorized 31/5, 開源影響 29/27, 研討活動 21/14, 法令更新 18/2,
  合規指引 12/5, 調和標準 5/2, 亞太對應 1/1.
- eu_cra: 產業動態 253/226, 研討活動 85/56, 合規指引 44/20, 法令更新 38/12, 法規與標準 35/26,
  開源影響 30/28, 調和標準 20/7, 亞太對應 19/18, others ≤7 each. Top tags 90d: AI 40, 網路安全 35,
  AI安全 29, CRA 26, 零信任 26, KISA 23, Cyber Resilience Act 17, SBOM 17.
- os: 重點關注 2869/2037, Linux 2013/1474, Apple 1436/1056, Android 1043/716, Windows 482/376,
  漏洞與威脅情報 443/340, others ≤35 each.
- Consequence through CAT_MAP (session's arithmetic): on the security page 漏洞與威脅情報 absorbs the
  four OS platforms and holds about two thirds of all items; on the os page 重點關注 absorbs every
  foreign category and holds about 40%. One pill holding most items makes the filter nearly useless.
- eu_cra's 產業動態 is 46% of that tracker and its recent tags drift off-topic (AI, 零信任, KISA).

## What to produce
A plan the user can decide on, in Traditional Chinese, with these sections:
1. 問題診斷 — per tracker, what the reader currently sees, citing `path:line` + the verbatim line for
   every code claim.
2. 選項 — two or three alternative presentation designs (e.g. secondary 平台 filter instead of folding
   OS platforms into 漏洞與威脅情報; showing per-pill counts; hiding/merging near-empty foreign pills;
   a topic/tag cloud from the top tags; a "今日重點" hero section). For each: what changes on screen,
   which functions/CSS in ui/index.html change, risk to existing behaviour (permalinks, search, month
   menu), and whether it needs a classification (searchinfo / LLM prompt) change or only presentation.
3. 建議 — which option you recommend and why, plus anything that needs a user decision.
4. 驗收 — concrete checks (commands or DOM checks) that would prove the chosen option works.
Do not write code patches. Label every number you did not take from the facts above as ESTIMATE.
