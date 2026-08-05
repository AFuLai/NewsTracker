TITLE: 資安新聞追蹤

## ENTRY

> 說明：`search:` 為可選欄位（附加於「說明」欄以 ` | search:路徑` 格式），
> 指定該網站內建搜尋路徑，讓 Step 2 階段 A 可額外 web_fetch 搜尋結果頁補充內容。
> 未加 `search:` 的項目一律以 `site:{domain} {關鍵字}` 方式搜尋。

| 名稱 | URL | 說明 |
|------|-----|------|
| The Hacker News | https://thehackernews.com/ | 最廣泛的資安新聞，涵蓋雲端、作業系統、APT、AI 威脅 \| search:/?s= |
| BleepingComputer | https://www.bleepingcomputer.com/ | 勒索軟體、重大外洩即時報導，Week in Ransomware 專欄 \| search:/search/?q= |
| Krebs on Security | https://krebsonsecurity.com/ | 深度調查型報導，金融詐騙與供應鏈攻擊的指標性來源 \| search:/?s= |
| SecurityWeek | https://www.securityweek.com/ | 廣泛資安新聞，ICS/OT 子分類豐富 \| search:/?s= |
| Dark Reading | https://www.darkreading.com/ | 企業資安威脅分析與研究報告 \| search:/search/#q= |
| CISA Advisories | https://www.cisa.gov/news-events/cybersecurity-advisories | 美國政府官方資安公告（ICS、惡意軟體、KEV 更新）|
| CISA KEV Catalog | https://www.cisa.gov/known-exploited-vulnerabilities-catalog | 已遭利用漏洞目錄，修補優先排序最重要依據 |
| NVD (NIST) | https://nvd.nist.gov/ | NIST 國家漏洞資料庫，CVE 官方資料 \| search:/vuln/search?results_type=overview&query=&search_type=all |
| Openwall oss-security | https://www.openwall.com/lists/oss-security/ | 開源社群最早期漏洞揭露（Linux kernel、glibc、OpenSSL）|
| Red Hat Security Blog | https://www.redhat.com/en/blog/channel/security | RHEL 核心 CVE 深度分析，CVSS 與緩解建議 |
| Ubuntu Security Blog | https://ubuntu.com/blog/tag/security | Ubuntu 核心與套件安全更新，LPE CVE 快速揭露 |
| Microsoft Security Blog | https://www.microsoft.com/en-us/security/blog/ | Windows 零時差、Patch Tuesday 及跨平台漏洞分析 |
| Google Project Zero | https://googleprojectzero.blogspot.com/ | 高品質漏洞研究，零時差漏洞技術深度分析 |
| Mandiant Blog | https://www.mandiant.com/resources/blog | APT 組織追蹤、威脅情報、紅隊研究 |
| Dragos Blog | https://www.dragos.com/blog/ | OT/ICS 威脅景觀，PLC/HMI 漏洞，工控資安最強情報源 |
| SecurityWeek ICS/OT | https://www.securityweek.com/category/ics-ot/ | 工業系統資安，硬體廠商漏洞披露（子分類直接搜尋）|
| ISA Global Security Alliance | https://gca.isa.org/blog | IEC 62443 最前線動態，工業自動化安全最佳實踐 |
| ENISA News | https://www.enisa.europa.eu/news | 歐盟資安認證框架、CRA 技術指引、NIS2 執行細節 |
| iThome 資安 | https://www.ithome.com.tw/security | 繁體中文資安報導，含台灣本地事件 \| search:/search/node/ |
| 資安人 | https://www.informationsecurity.com.tw/ | 台灣資安產業動態、TWCERT 公告 \| search:/?s= |
| OpenSSF Blog | https://openssf.org/blog/ | 開源軟體安全，SBOM、Sigstore、套件簽名 |
| Elastic Security Labs | https://www.elastic.co/security-labs | 惡意軟體逆向分析，威脅獵捕研究 |

---

## CATEGORY

| category 值 | 適用內容說明 |
|------------|------------|
| 法規與標準 | EU CRA、NIS2、NIST CSF/SP 800 系列、ISA/IEC 62443、ISO 27001、ENISA 認證、CISA 指令（BOD）、SEC 網路揭露規則、政府採購資安要求、DORA 金融數位韌性法 |
| 漏洞與威脅情報 | CVE 公告、KEV 更新、Patch Tuesday、PoC 攻擊程式碼、EPSS 評分、APT 組織 TTPs、OT/ICS 設備漏洞、Linux/Windows kernel LPE、命名漏洞（Dirty Frag 等）、韌體漏洞、硬體側信道攻擊 |
| 供應鏈與開源安全 | SBOM/VEX 要求、npm/PyPI/RubyGems 套件投毒、開源專案惡意提交、SCA 工具、第三方元件漏洞、CI/CD 管線攻擊、軟體簽名（Sigstore）、Typosquatting 攻擊 |
| 重大事件 | 重大資料外洩、勒索軟體攻擊事件（含 RaaS 動態）、OT/ICS 關鍵基礎設施攻擊、國家級駭客行動、醫療/金融/政府入侵事件、事件後技術分析報告 |
| 前瞻技術 | AI 攻擊工具與防禦、後量子密碼（PQC）NIST 遷移、零信任架構（ZTA）、身分驗證新技術（Passkey/FIDO）、Agentic AI 安全風險、量子運算對密碼學的影響、機密運算（Confidential Computing）|

---

## KEY

### 重大事件 / 勒索軟體
1. `ransomware attack critical infrastructure 2026`
2. `data breach incident report 2026`
3. `APT nation-state cyberattack 2026`
4. `Ransomware-as-a-Service RaaS new variant`

### 漏洞 / CVE / KEV
5. `CISA KEV Known Exploited Vulnerabilities added`
6. `Patch Tuesday Microsoft Windows zero-day CVE`
7. `Linux kernel CVE privilege escalation LPE patch`
8. `named vulnerability "dirty" OR "ghost" OR "blast" OR "frag" disclosure`
9. `EPSS v4 vulnerability scoring critical exploit probability`
10. `memory corruption use-after-free heap overflow PoC exploit`
11. `OT ICS SCADA vulnerability advisory Dragos Claroty`
12. `firmware vulnerability embedded device CVE 2026`

### 法規 / 標準 / 合規
13. `EU Cyber Resilience Act CRA compliance deadline 2026`
14. `ENISA NIS2 cybersecurity certification scheme`
15. `NIST SP 800 cybersecurity framework update`
16. `IEC 62443 OT industrial cybersecurity standard update`
17. `SEC cyber disclosure enforcement action 2026`
18. `DORA digital operational resilience financial sector`

### 供應鏈 / 開源
19. `SBOM mandatory software bill of materials requirement`
20. `npm PyPI malicious package supply chain attack`
21. `CI/CD pipeline compromise software supply chain`
22. `open source dependency confusion typosquatting`

### 前瞻技術
23. `AI-powered cyberattack autonomous phishing malware 2026`
24. `Post-Quantum Cryptography PQC migration NIST ML-KEM`
25. `Zero Trust Architecture ZTA ZTNA implementation`
26. `Passkey FIDO2 passwordless authentication adoption`
27. `confidential computing TEE secure enclave`

### 台灣 / 亞太
28. `台灣 資安事件 攻擊 2026`
29. `TWCERT 台灣漏洞 資安公告`
30. `Asia Pacific cyber espionage APT Taiwan Japan Korea`
