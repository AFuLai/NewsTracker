# 新聞來源與分類檢討（2026-11-09）

資料：`db/articles.sqlite`，`status=written`、文章日期近 90 天，共 **9006 篇**。統計腳本為一次性，結論如下。

## 1. 分類現況

| 追蹤器 | 主要分類（90 天篇數） |
|---|---|
| os（含與 security 共掛） | 重點關注 1873、Linux 1496、Apple 1040、Android 701、Windows 378、漏洞與威脅情報 358 |
| security | 漏洞與威脅情報 1543、前瞻技術 329、供應鏈與開源安全 262、重大事件 247、產業動態 112、法規與標準 43 |
| eu_cra | 產業動態 249、研討活動 66、開源影響 34、亞太對應 21、合規指引 16、調和標準 9、法令更新 8 |

問題：

- **os 的分類是「平台」不是「類型」**。Linux／Apple／Android／Windows 加上「重點關注」共約 5500 篇，前端把它們全部歸到「平台與其他」。
- **「重點關注」是個雜物箱**：1873 篇，大多是產品傳聞、Beta 更新，混著真正的漏洞與事件。
- **eu_cra 的 2/3 是「產業動態」**，主要來自 Boannews 韓國（385 篇）。真正的法令與標準更新只有約 17 篇，訊號被稀釋。
- 同一篇文章常同時掛在多個追蹤器下（例如 `os,security` 共 1800+ 篇），分類卻只有一個值，所以平台和類型無法同時表達。

**用標題＋標籤做關鍵字分型**的試算（os 平台類與重點關注，共 5492 篇；只看標題與標籤，摘要太雜不用）：

| 推得的類型 | 篇數 | 抽樣準確度（人工看 12 篇） |
|---|---|---|
| 漏洞威脅 | 1352 | 12/12 |
| 重大事件 | 159 | 約 10/12（混入「服務中斷」「詐騙警示」類，可接受） |
| 供應鏈開源 | 22 | 約 7/12（「供應鏈」也指硬體物流，需收緊為「供應鏈攻擊」「惡意套件」「npm／PyPI／crates」） |
| 平台更新（其餘） | 3959 | 少數漏網的事件，如 ShinyHunters 那篇只有標籤沒寫「攻擊」 |

結論：**前端規則可以先把約 1500 篇從「平台與其他」移到正確類型**，準確度夠用。長期仍建議在後端加一個獨立的 `news_type` 欄位，平台則留在 `category`／標籤（見 §4）。

## 2. 來源現況

**量集中**：9to5Mac 1361、NVD 889、iThome 894、Phoronix 763、9to5Google 730、The Register 789。前 6 個來源佔 60%。9to5Mac 和 9to5Google 以消費性產品傳聞為主，是「平台更新」膨脹的主因。

**近 90 天沒有產出（或幾乎沒有）的來源**：

| 來源 | 最後一篇 | 判斷 |
|---|---|---|
| Android Security Bulletins | 2023-10-01 | 失效（source.android.com LISTING），且 Android 每月公告正是高價值項目 |
| STAN4CRA／ENISA News／EUR-Lex／BSI／新加坡 CSA | 2026-01～07 | LISTING 型抓取失效，eu_cra 法規訊號因此偏少 |
| CISA Advisories／Ubuntu Security Blog | 2026-06 | 失效或已改名，待查 |
| NVD (NIST)、iThome 資安 | 2026-05～06 | 應是改名為 `NVD CVE API`、`iThome`，非失效；舊名可清掉 |
| ANSSI、JPCERT/CC、Dragos、Linux Foundation、Project Zero | 90 天 1～4 篇 | 低頻，屬正常 |

**被 gate 擋掉比例異常**（近 90 天抓到的文章）：

- Ars Technica 385/643（60%）：大多與主題無關，屬合理，但抓取成本高，可考慮改用分類 feed。
- **CISA KEV Catalog 102/213（48%）：異常**。KEV 條目照理應全收，需查 gate 為何擋掉。
- Debian Security 51/210、Ubuntu Security Notices 20/38：發行版的安全公告不該被擋。

**缺口**：標籤中常見、但沒有直接來源的有 Chrome（234）、Cisco（52）、Fortinet（49）、Palo Alto（44）、Citrix（44）、Mozilla Firefox（49）。供應鏈只有 262 篇，缺 GitHub Advisory／OSV。另外 MSRC（msrc.microsoft.com）沒有產出。

## 3. 知名套件（標題＋標籤命中次數，90 天）

Linux 核心 1034、Chrome／Chromium 350、Git 168、Rust 145、Apache 139、OpenSSH 88、PHP 78、Microsoft 365 71、GitHub 70、WordPress 60、Java 58、Perl 58、Python 51、Firefox 49、Mesa 49、KDE 49、npm 39、VMware 38、LLVM／Clang 39、GCC 25、OpenSSL 22、Kubernetes 22、Node.js 22、Exchange 22、SharePoint 23、systemd 21、BIND 20、PyPI 16、PostgreSQL 15、glibc 14、Docker 12、QEMU 10、curl 9。

（Git 會被 GitHub 等字誤中，套件比對需用詞界或別名表；Apache 也同時指基金會。）

## 4. 建議

1. **前端（本次做）**：平台改為與類型正交的篩選條件；os 文章用 §1 的關鍵字規則推類型，剩下的叫「平台更新」；加入 §3 的套件名單（含別名、詞界比對）作為側欄篩選與關注項目。
2. **後端（下一步，需要決定）**：在 summary prompt 增加 `news_type` 欄位（與 category 分開），並對近 90 天的資料回填；前端有這個欄位時優先使用，沒有時才用關鍵字規則。
3. **來源修復**：查 CISA KEV、Debian、Ubuntu 被 gate 擋掉的原因；修 Android Security Bulletins、MSRC、EU 法規類的 LISTING 抓取；清掉改名留下的舊來源名。
4. **來源增補**：Chrome Releases、Mozilla Security Advisories、GitHub Advisory Database（或 OSV）、Cisco／Fortinet／Palo Alto PSIRT。
5. **eu_cra**：考慮讓 Boannews 只進 security，或在 eu_cra 下提高 gate 門檻，以免把法規訊號稀釋掉。
