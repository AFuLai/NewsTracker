Slice T1 of the 2026-11-09 backlog (refs/plans/BACKLOG.md items 1–2; evidence refs/plans/20261109-source-category-review.md). Touch only ui/index.html. Vanilla JS, no libraries, keep zh + en strings in I18N.

Problem: os-tracker articles carry a PLATFORM (Linux / Apple / Android / Windows) or the catch-all '重點關注' as their `category`, so newsTypeOf() files ~5500 of them under 平台與其他 even when they are vulnerabilities or incidents. Platform must become a filter orthogonal to news type, and well-known packages must be filterable and watchable.

Read (ui/index.html; grep, do not read the whole file): NEWS_TYPES and HUB_PLATFORMS (~line 3055-3071), newsTypeOf / articleTags (~3195-3215), buildHubModel (~3240-3315, esp. 3285), hubTypeId (~3402), WATCH_RULES / watchHits / watch panel builder (~2307-2500), wsBase / wsFacet / wsActiveRules / wsSet / wsToggle (~4278-4302), wsBuildRail (~4467-4512), the ws hash/patch restore (~4610-4620, `ws.pl`), I18N zh/en entries wsTypes / wsPlat / wsWatch (~2826), and the TRACKER-PREFS block as the model for a pure block.

1. New pure block delimited exactly by `/* TRACKER-TYPES:BEGIN */` and `/* TRACKER-TYPES:END */`, inside the main <script>, defining `const TrackerTypes = { typeOf, platformsOf, packagesOf, PACKAGES, PLATFORMS }`. It must not mention window, document, localStorage, location or state. (tests run it under node.)
   - PLATFORMS = ['Linux', 'Apple', 'Android', 'Windows'] (this order; HUB_PLATFORMS becomes TrackerTypes.PLATFORMS).
   - typeOf(a) returns a type id string:
     a) a missing / non-object → 'other'.
     b) category in this table → that id (the table is today's NEWS_TYPES categories, minus '重點關注'): 漏洞與威脅情報→vuln; 重大事件→incident; 法規與標準, 法令更新, 合規指引, 調和標準, 亞太對應→regulation; 供應鏈與開源安全, 開源影響→supply; 產業動態→industry; 前瞻技術→emerging; 研討活動→events.
     c) category is a platform or '重點關注': test, in this order, against title + '\n' + title_en + '\n' + tags.join('\n') (NOT summary):
        vuln:     /CVE-\d|漏洞|弱點|零時差|零日|0-day|zero-day|exploit|提權|權限提升|\bRCE\b|遠端程式碼執行|安全更新|安全公告|安全修補|資安更新|DSA-\d|USN-\d|RHSA|Patch Tuesday|\bKEV\b|use-after-free|vulnerabilit/i
        incident: /資料外洩|外洩事件|勒索|入侵|遭駭|駭客攻擊|網路攻擊|服務中斷|詐騙|惡意軟體|木馬|\bRAT\b|釣魚|\bAPT\b|data breach|ransomware|outage/i
        supply:   /供應鏈攻擊|惡意套件|\bnpm\b|PyPI|crates\.io|supply[- ]chain attack/i
        first hit wins; no hit → 'focus' for '重點關注', 'platform' for a platform.
     d) anything else → 'other'.
   - platformsOf(a) → platform names in PLATFORMS order, no duplicates: the category if it is a platform, plus every tag that equals a platform name or starts with one followed by a space or digit ('Linux 核心' → Linux, 'Windows 11' → Windows, 'Android 17' → Android, 'Linuxfx' → nothing); tags starting with iOS, iPadOS, macOS, watchOS, tvOS, visionOS (followed by end, space or digit) → Apple. Missing a → [].
   - PACKAGES: an array of at least 30 { id, name, match } where match is an array of RegExp, tested against title + '\n' + title_en + '\n' + tags (not summary). Must include these ids (name = display name): linux-kernel (/Linux ?(核心|kernel)/i), chrome (/\bChrom(e|ium)\b/i — Chromebook must NOT match), firefox, openssh, openssl, glibc, gcc, llvm (LLVM or Clang), systemd, curl, git (/\bGit\b(?!Hub|Lab)/ — GitHub must NOT match), python, nodejs (Node.js), php, java, rust, docker, kubernetes, wordpress, npm, pypi, fortinet (Fortinet|FortiOS|FortiGate|FortiWeb), paloalto (Palo Alto|PAN-OS), cisco, citrix (Citrix|NetScaler), ivanti, vmware, exchange (Exchange Server|Microsoft Exchange|\bExchange\b in tags only is fine), sharepoint, mesa (\bMesa\b). Add others you judge well known (e.g. sudo, xz, log4j, qemu, samba, nginx, postgresql, wayland, kde, gnome, perl, microsoft-365) using word boundaries for ASCII names.
   - Keep the required ids in the relative order listed above; additions go after them.
   - packagesOf(a) → ids of matching PACKAGES in table order; missing a → [].
2. Wire it in:
   - NEWS_TYPES: keep existing entries; add { id: 'platform', zh: '平台更新', en: 'Platform updates', categories: [] } just before 'other', and relabel 'other' to zh '其他' / en 'Other'. newsTypeOf(a) = TrackerTypes.typeOf(a). hubTypeId(a) = newsTypeOf(a) (no more platform→other). buildHubModel and anything else that special-cased 'platform' as "not a type" must now count it as a normal type; platform chips/tags still come from platformsOf.
   - articleTags(a): add the names from platformsOf(a) (instead of only a platform category).
   - Workspace filter: wsFacet uses TrackerTypes.platformsOf(a).includes(ws.pl) instead of a.category === ws.pl, and adds a package filter `ws.pk` (packagesOf(a).includes(ws.pk)). Persist/restore ws.pk exactly the way ws.pl is (hash patch + validation against PACKAGES ids).
   - wsBuildRail: platform counts via platformsOf; a new section '套件' / 'Packages' (I18N key wsPkg) after 平台, listing packages with count > 0 in the current base, sorted by count desc then table order, at most 20, toggling ws.pk (data-ws key 'pk:<id>').
3. 我的關注 (WATCH_RULES / watchHits / panel):
   - watchHits supports two more match parts: `platforms` (any of platformsOf(a)) and `packages` (any of packagesOf(a)), with the same "every given part must match" rule.
   - Add four rules plat_linux / plat_apple / plat_android / plat_windows (zh/en label = platform name, match { platforms: [name] }, def false) and one rule per PACKAGES entry with id 'pkg_' + id with '-' replaced by '_' (label = name, match { packages: [id] }, def false). Existing rule ids, defaults and the stored `tracker_watch` format stay unchanged (unknown ids are still dropped by cleanWatchOn).
   - Watch panel: group the checkboxes under three headings 主題 / Topics (the existing 7), 平台 / Platforms, 套件 / Packages; the package group is a <details> (closed by default) holding the checkboxes in a wrapping grid. Keyboard and focus-visible behaviour as the existing checkboxes.
4. Do not change: TRACKER-PREFS, TRACKER-STORE blocks, data loading, the reader, any other view's behaviour. Do not add test-environment detection of any kind.

Done = the existing pytest suite passes, the inline JS parses with `node --check`, and the TRACKER-TYPES block behaves as specified above (it will be checked by tests you have not seen).
