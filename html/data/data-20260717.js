// data-20260717.js — 2026-07-17
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-17"] = [
  {
    id: "20260717-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Inc 勒索軟體組織串聯攻擊 SonicWall SMA 零日漏洞以獲取根路徑權限",
    summary: "資安廠商 SonicWall 的 Secure Mobile Access (SMA) 1000 系列設備遭揭露存在兩項零日漏洞：CVE-2026-15409 與 CVE-2026-15410。其中 CVE-2026-15409 為 Web 介面的 SSRF 漏洞，CVSS 評分達滿分 10 分，允許未經身分驗證的攻擊者遠端執行程式碼；CVE-2026-15410 則是管理控制台的代碼注入漏洞，CVSS 評分為 7.2。根據 Rapid7 的資安情報，知名勒索軟體服務（RaaS）組織 Inc Ransomware 串聯此兩項漏洞，先透過 SSRF 建立連線，再藉由代碼注入將權限提升至 root 等級，藉此入侵企業網路、竊取憑證並部署勒索軟體。CISA 已將其列入 KEV 認證已知漏洞清單。SonicWall 已釋出修補修復程式（hotfix），專家建議受影響組織除應立即安裝修補程式外，亦須全面進行數位鑑識調查，確認設備在修補前是否已遭入侵並遭留存後門。",
    tags: ["SonicWall", "Inc Ransomware", "CVE-2026-15409", "CVE-2026-15410", "Rapid7", "零日漏洞", "勒索軟體", "SMA"],
    title_en: "Inc Ransomware Group Chains SonicWall SMA Zero-Day Exploits to Gain Root Access",
    summary_en: "Cybersecurity vendor SonicWall's Secure Mobile Access (SMA) 1000 series appliances have been disclosed to contain two zero-day vulnerabilities: CVE-2026-15409 and CVE-2026-15410. Among them, CVE-2026-15409 is an SSRF vulnerability in the web interface with a maximum CVSS score of 10.0, allowing unauthenticated attackers to execute code remotely; CVE-2026-15410 is a code injection vulnerability in the management console with a CVSS score of 7.2. According to threat intelligence from Rapid7, the well-known Ransomware-as-a-Service (RaaS) group Inc Ransomware chained these two vulnerabilities, first establishing a connection via SSRF and then escalating privileges to root level through code injection, thereby infiltrating corporate networks, stealing credentials, and deploying ransomware. CISA has added them to the Known Exploited Vulnerabilities (KEV) catalog. SonicWall has released hotfixes, and experts recommend that affected organizations not only install the patches immediately but also conduct a comprehensive digital forensics investigation to confirm whether the devices were compromised and backdoored prior to patching.",
    tags_en: ["SonicWall", "Inc Ransomware", "CVE-2026-15409", "CVE-2026-15410", "Rapid7", "Zero-day vulnerability", "Ransomware", "SMA"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/inc-ransomware-exploits-sonicwall-sma-zero-days", lang: "EN" }
    ]
  },
  {
    id: "20260717-002",
    trackers: ["security"],
    category: "重大事件",
    title: "中國高階後門程式Daxin與Stupig潛伏臺灣高科技製造業長達13年，駭客鎖定老舊鼎捷SSO漏洞入侵",
    summary: "賽門鐵克與 Carbon Black 威脅獵捕團隊於 2026 年 5 月在一家跨國高科技製造公司的臺灣子公司中，發現了中國高階後門程式 Daxin 及另一款新曝光的後門程式 Stupig 的活動。調查顯示這兩款惡意程式的編譯時戳均在 2013 年初，意味著其可能已在受害組織內隱密潛伏長達 13 年。Daxin 是一款 Windows 核心層級的 rootkit，其最大特色在於不主動建立連線，而是透過挾持合法的傳入 TCP 流量來傳輸加密的 C2 指令，並支援多跳躍通訊以滲透隔離網路。而 Stupig 則是偽裝成鍵盤配置程式庫以取得系統載入，並透過監控登入畫面中的特定名稱來以 SYSTEM 權限執行命令。駭客最初的入侵管道疑似是利用該公司在 2009 至 2011 年間建置、使用老舊 JDK 1.5 及 1.6 元件的舊版鼎捷數智單一簽入入口網站。實務影響層面，此攻擊顯示出攻擊者能長期且極其隱蔽地監控高價值的高科技製造業。修補建議包含加速淘汰生命週期結束的舊版軟體、全面清查與隔離老舊 SSO 系統，並針對 Windows 核心層級與註冊表異常進行深度端點偵測與威脅獵捕。",
    tags: ["Daxin", "Stupig", "賽門鐵克", "臺灣高科技製造業", "鼎捷數智", "rootkit", "APT攻擊", "潛伏威脅"],
    title_en: "Chinese High-End Backdoors Daxin and Stupig Lurk in Taiwan High-Tech Manufacturing for 13 Years, Hackers Targeted Legacy Digiwin SSO Vulnerability for Intrusions",
    summary_en: "Symantec and the Carbon Black threat hunting teams discovered activities of the Chinese high-end backdoor Daxin and another newly exposed backdoor Stupig in May 2026 within the Taiwan subsidiary of a multinational high-tech manufacturing company. Investigations revealed that the compilation timestamps for both malware programs date back to early 2013, meaning they may have been stealthily lurking within the victim organization for up to 13 years. Daxin is a Windows kernel-level rootkit whose most prominent feature is that it does not actively establish connections; instead, it hijacks legitimate incoming TCP traffic to transmit encrypted C2 commands and supports multi-hop communications to penetrate isolated networks. Meanwhile, Stupig disguises itself as a keyboard layout library to achieve system loading and monitors specific names within the login screen to execute commands with SYSTEM privileges. The hackers' initial intrusion vector is suspected to be exploiting the company's legacy Digiwin Software single sign-on portal, which was deployed between 2009 and 2011 and utilized outdated JDK 1.5 and 1.6 components. In terms of practical impact, this attack demonstrates that attackers can monitor high-value high-tech manufacturing industries over the long term and with extreme stealth. Remediation recommendations include accelerating the decommissioning of end-of-life legacy software, comprehensively auditing and isolating legacy SSO systems, and conducting deep endpoint detection and threat hunting for Windows kernel-level and registry anomalies.",
    tags_en: ["Daxin", "Stupig", "Symantec", "Taiwan high-tech manufacturing", "Digiwin Software", "rootkit", "APT attack", "lurking threats"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177390", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-003",
    trackers: ["security"],
    category: "重大事件",
    title: "可口可樂旗下乳品子公司 fairlife 遭勒索軟體攻擊，全美多處生產工廠被迫暫時停工",
    summary: "可口可樂旗下的美國乳品生產子公司 fairlife 遭到勒索軟體攻擊。根據可口可樂向美國證管會（SEC）提交的報告，該公司於 7 月 16 日偵測到未授權的第三方惡意存取其內部系統，其中包含關鍵的生產相關系統。事件發生後，該公司隨即啟動緊急應變與業務永續程序，並協同外部資安專家與執法單位展開調查。此攻擊導致 fairlife 位於美國境內的生產線運作全面暫時中斷，不過加拿大廠區與產品本身的安全品質目前未受波及。目前攻擊者的身分、是否有資料遭竊或具體的贖金要求等技術細節與 CVE 編號皆尚未公開，公司正全力進行系統與產線的復原工作，並評估此事件對整體營運的後續衝擊。",
    tags: ["可口可樂", "fairlife", "勒索軟體", "關鍵基礎設施", "製造業", "資安事件", "生產中斷"],
    title_en: "Coca-Cola Dairy Subsidiary fairlife Hit by Ransomware Attack, Forcing Temporary Halts at Multiple US Production Plants",
    summary_en: "Coca-Cola's US dairy production subsidiary, fairlife, has been hit by a ransomware attack. According to a report submitted by Coca-Cola to the US Securities and Exchange Commission (SEC), the company detected unauthorized third-party malicious access to its internal systems, including critical production-related systems, on July 16. Following the incident, the company immediately activated emergency response and business continuity procedures, and is investigating the matter in cooperation with external cybersecurity experts and law enforcement agencies. The attack resulted in a comprehensive temporary disruption of fairlife's production line operations within the United States, though Canadian facilities and the safety and quality of the products themselves remain unaffected at this time. Technical details, such as the identity of the attackers, whether any data was stolen, specific ransom demands, or CVE IDs, have not yet been disclosed. The company is dedicating full efforts to system and production line recovery while assessing the subsequent impact of this incident on overall operations.",
    tags_en: ["可口可樂", "fairlife", "Ransomware", "Critical Infrastructure", "Manufacturing", "Cybersecurity Incident", "Production Disruption"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177375", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-004",
    trackers: ["security"],
    category: "重大事件",
    title: "中國駭客組織 GoldenEyeDog 子群發動 DigiCert 資安事件，竊取憑證簽章惡意軟體",
    summary: "資安業者 Expel 揭露，2026 年 4 月數位憑證機構 DigiCert 的資安事件由中國網路犯罪組織 GoldenEyeDog 的子群 CylindricalCanine 所為。駭客透過客戶聊天管道發送偽裝成截圖的惡意 ZIP 檔案（內含 .scr 執行檔），入侵兩名 DigiCert 客服分析師的工作站。隨後濫用客服門戶網站的權限，獲取已核准但尚未交付的 EV 代碼簽名憑證初始化代碼，成功冒領 60 張憑證（其中 27 張確認與駭客相關），並用其為惡意軟體 Zhong Stealer 進行數位簽章以躲避偵測。該攻擊最終會佈署 Gh0st RAT 變種「Golden Gh0st RAT」，具備竊密、側錄鍵盤與清理日誌等功能。DigiCert 已撤銷受影響憑證，並更新系統以遮蔽初始化代碼。",
    tags: ["DigiCert", "GoldenEyeDog", "CylindricalCanine", "Gh0st RAT", "代碼簽名憑證", "憑證竊取", "社交工程"],
    title_en: "Chinese Hacker Group GoldenEyeDog Subgroup Initiates DigiCert Security Incident, Stealing Certificate Signing Malware",
    summary_en: "Security firm Expel revealed that the 2026 security incident at digital certificate authority DigiCert was perpetrated by the Chinese cybercrime group GoldenEyeDog's subgroup, CylindricalCanine. The hackers infiltrated the workstations of two DigiCert customer service analysts by sending malicious ZIP files (containing a .scr executable) disguised as screenshots through client chat channels. They subsequently abused the customer service portal's privileges to obtain initialization code for approved but undelivered EV code-signing certificates, successfully acquiring 60 certificates (27 of which were confirmed to be related to the hackers). They then used these certificates to digitally sign the malware Zhong Stealer to evade detection. The attack ultimately deployed a variant of Gh0st RAT, named 'Golden Gh0st RAT,' which possesses functionalities such as data theft, keystroke logging, and log clearing. DigiCert has since revoked the affected certificates and updated its system to obscure the initialization code.",
    tags_en: ["DigiCert", "GoldenEyeDog", "CylindricalCanine", "Gh0st RAT", "Code-Signing Certificate", "Certificate Theft", "Social Engineering"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/goldeneyedog-subgroup-linked-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-005",
    trackers: ["security"],
    category: "重大事件",
    title: "北韓駭客組織 REF9403 偽裝招聘活動，利用 SVG 隱寫術散播 OtterCookie 惡意軟體鎖定開發人員",
    summary: "資安廠商 Elastic Security Labs 揭露北韓國家級駭客組織 REF9403（與 Contagious Interview 活動相關）的新型社交工程攻擊。駭客於 2026 年 5 月底鎖定社群 Slack 頻道的開發人員，以虛假招募和程式碼測驗為誘餌，誘使受害者執行含有惡意程式碼的專案儲存庫。該專案表面運作正常，卻在資產目錄的 SVG 國旗圖片（如 AE.svg）的 HTML 註解中，隱藏 Base64 編碼的惡意片段，利用隱寫術規避偵測。專案中的 JavaScript 檔案會將其組裝並於系統啟動時執行。受害者最終會感染名為 OtterCookie 的四階段模塊化惡意軟體，具備竊取瀏覽器憑證、加密貨幣錢包、特定副檔名檔案（包含 AI 編碼工具擴充套件）、剪貼簿內容以及透過 Socket.IO 建立遠端存取木馬（RAT）的能力。建議組織加強開發人員的社交工程防範意識，並審查未授權的第三方程式碼庫與不尋常的網路連線。",
    tags: ["REF9403", "Contagious Interview", "OtterCookie", "隱寫術", "SVG", "Slack", "社交工程", "開發人員安全"],
    title_en: "North Korean Hacker Group REF9403 Disguises Recruitment Activities, Using SVG Steganography to Distribute OtterCookie Malware Targeting Developers",
    summary_en: "Cybersecurity firm Elastic Security Labs has uncovered a new social engineering attack by the North Korean state-sponsored hacker group REF9403 (associated with the Contagious Interview campaign). In late May 2026, the hackers targeted developers on the Slack social platform, using fake recruitment and coding tests as bait to entice victims into executing a project repository containing malicious code. While the project appeared to function normally, it hid a Base64-encoded malicious snippet within the HTML comments of an SVG national flag image (such as AE.svg) inside the assets directory, utilizing steganography to evade detection. A JavaScript file within the project assembles and executes this snippet upon system startup. Victims are ultimately infected with a four-stage modular malware named OtterCookie, which is capable of stealing browser credentials, cryptocurrency wallets, files with specific extensions (including AI coding tool extensions), and clipboard content, as well as establishing a Remote Access Trojan (RAT) via Socket.IO. Organizations are advised to strengthen social engineering prevention awareness among developers and review unauthorized third-party code repositories and unusual network connections.",
    tags_en: ["REF9403", "Contagious Interview", "OtterCookie", "Steganography", "SVG", "Slack", "Social Engineering", "Developer Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/north-korea-linked-hackers-hide.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-006",
    trackers: ["security"],
    category: "重大事件",
    title: "亞美尼亞因美國引渡要求逮捕俄羅斯遊客，律師質疑因缺乏父名導致誤捕 REvil 勒索軟體嫌犯",
    summary: "亞美尼亞當局於埃里溫機場逮捕一名名為 Aleksandr Ermakov 的俄羅斯遊客，起因是美國德州北區聯邦法院因 Sodinokibi/REvil 勒索軟體攻擊事件發出引渡要求。然而律師指出美國因制裁名單缺乏「父名」欄位導致自動化比對誤捕。真正的嫌犯 Aleksandr Gennadievich Ermakov 曾參與 2022 年 Medibank 勒索案及多起 REvil 攻擊（涉案金額逾 1370 萬美元，受害者逾千家），且目前因涉及 SugarLocker 勒索軟體遭俄羅斯判刑限制出境中。目前被捕的 Aleksandr Yuryevich Ermakov 僅為前監獄系統律師，並不諳英語。此事件凸顯情資標記不精準對執法帶來的實務影響。建議跨境執法與情資查核應引入指紋及完整護照資料比對以防誤判。",
    tags: ["REvil", "Medibank", "Aleksandr Ermakov", "勒索軟體", "亞美尼亞", "引渡", "SugarLocker"],
    title_en: "Armenia Arrests Russian Tourist Following U.S. Extradition Request, Lawyer Questions Misidentification Due to Missing Father's Name, REvil Ransomware Suspect",
    summary_en: "Armenian authorities arrested a Russian tourist named Aleksandr Ermakov at Yerevan Airport, following an extradition request issued by the U.S. Northern District Federal Court concerning the Sodinokibi/REvil ransomware attack. However, a lawyer pointed out that the U.S. automated matching system potentially resulted in a misidentification due to the lack of a 'father's name' field in the sanctions list. The actual suspect, Aleksandr Gennadievich Ermakov, was involved in the 2022 Medibank ransomware case and multiple REvil attacks (involving amounts exceeding $13.7 million and over a thousand victims), and is currently restricted from leaving Russia due to a sentence related to the SugarLocker ransomware. The currently arrested individual, Aleksandr Yuryevich Ermakov, is merely a former prison system lawyer and does not speak English. This incident highlights the practical impact of imprecise intelligence tagging on law enforcement. It is recommended that cross-border law enforcement and intelligence verification should incorporate fingerprint and complete passport data matching to prevent misjudgment.",
    tags_en: ["REvil", "Medibank", "Aleksandr Ermakov", "Ransomware", "Armenia", "Extradition", "SugarLocker"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/armenia-detains-russian-tourist-on-us.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-007",
    trackers: ["security"],
    category: "重大事件",
    title: "ACR Stealer 惡意軟體藉由 ClickFix 誘騙手法入侵企業網路，竊取憑證與雲端機密檔案",
    summary: "自 2024 年起活躍的資訊竊取軟體 ACR Stealer，近期在企業網路中的活動顯著上升。微軟 Defender 專家團隊指出，攻擊者利用 ClickFix 誘騙手法，誘導使用者在執行視窗中貼上並執行惡意指令。其攻擊手法分為兩大路徑：一種是利用無檔案（Fileless）技術，透過隱藏在 JPEG 圖片像素中的惡意負載，在記憶體中解密執行，並運用 DPAPI 竊取瀏覽器憑證、Session Token 及桌面與下載資料夾中的 PDF 和 Microsoft 365 檔案；另一種則會將檔案寫入磁碟，利用 WebDAV 掛載遠端共用路徑、混淆的 PowerShell 與 Python 腳本來建立隱蔽的排程工作以維持權限，甚至結合 EtherHiding 技術將 C2 位址藏於區塊鏈智能合約中。此攻擊未利用任何已知漏洞（無 CVE 編號），微軟建議受害者除重設密碼外，必須撤銷受影響的驗證 Token。",
    tags: ["ACR Stealer", "ClickFix", "微軟", "資訊竊取軟體", "無檔案攻擊", "EtherHiding", "憑證竊取"],
    title_en: "ACR Stealer Malware Infiltrates Corporate Networks via ClickFix Deception, Stealing Credentials and Cloud Confidences",
    summary_en: "Active since 2024, the info-stealing malware ACR Stealer has recently seen a significant rise in activity within corporate networks. Microsoft Defender expert teams pointed out that attackers utilize the ClickFix deception technique to induce users to paste and execute malicious commands in the Run dialog box. Its attack methodology is divided into two major paths: one utilizes fileless technology, where a malicious payload hidden in the pixels of a JPEG image is decrypted and executed in memory, employing DPAPI to steal browser credentials, Session Tokens, and PDF and Microsoft 365 files from Desktop and Downloads folders; the other writes files to disk, utilizing WebDAV to mount remote shared paths, alongside obfuscated PowerShell and Python scripts to establish covert scheduled tasks for persistence, and even combines EtherHiding technology to conceal C2 addresses within blockchain smart contracts. This attack does not exploit any known vulnerabilities (no CVE IDs), and Microsoft recommends that in addition to resetting passwords, victims must revoke affected authentication tokens.",
    tags_en: ["ACR Stealer", "ClickFix", "微軟", "Infostealer", "Fileless Attack", "EtherHiding", "Credential Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/acr-stealer-uses-clickfix-lures-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-008",
    trackers: ["security"],
    category: "重大事件",
    title: "東南亞政府與外交機構遭新惡意軟體 GoSerpent 網路間諜攻擊",
    summary: "卡巴斯基研究人員揭露自 2025 年底起，有長期潛伏的網路間諜活動鎖定東南亞政府與外交機構。攻擊者部署了先前未被記錄、以 Go 語言編寫的惡意軟體 GoSerpent。該後門程式透過接收加密且經過 Base64 編碼的 C2 地址與密碼發動攻擊，具備建立 SOCKS5 代理伺服器、連接遠端、執行 Shell 及傳輸檔案等功能。攻擊者更於 2026 年 5 月升級工具鏈，搭配 ThumbcacheService、Mimikatz、QuarksDumpLocalHash 進行憑證竊取與敏感檔案收集，並利用 Stowaway 代理工具和 TmcLoader/TmcPayload 將資料透過網路共享硬碟外洩。研究團隊推測此活動與駭客組織 TetrisPhantom 存在技術交疊，修補建議包含強化網路共享資產存取管制、監控異常的 SOCKS5 流量，以及清查 SAM 與 LSASS 的異常憑證傾倒行為。",
    tags: ["GoSerpent", "Kaspersky", "東南亞", "政府機構", "網路間諜", "TetrisPhantom", "Mimikatz"],
    title_en: "Southeast Asian Governments and Diplomatic Institutions Targeted by New GoSerpent Malware in Cyber Espionage Campaign",
    summary_en: "Kaspersky researchers have uncovered a long-term cyber espionage campaign targeting Southeast Asian governments and diplomatic institutions since late 2025. Attackers deployed GoSerpent, a previously undocumented malware written in the Go language. This backdoor initiates attacks by receiving encrypted and Base64-encoded C2 addresses and passwords, and it features capabilities such as establishing SOCKS5 proxy servers, connecting to remote hosts, executing shells, and transferring files. Furthermore, the attackers upgraded their toolchain in May 2026, combining ThumbcacheService, Mimikatz, and QuarksDumpLocalHash for credential theft and sensitive file collection, while utilizing the Stowaway proxy tool and TmcLoader/TmcPayload to exfiltrate data via network shared drives. The research team suspects technical overlaps between this campaign and the hacker group TetrisPhantom. Remediation recommendations include strengthening access controls for network shared assets, monitoring anomalous SOCKS5 traffic, and inspecting abnormal credential dumping behaviors within SAM and LSASS.",
    tags_en: ["GoSerpent", "Kaspersky", "Southeast Asia", "Government Agencies", "Cyber Espionage", "TetrisPhantom", "Mimikatz"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-goserpent-malware-targets-southeast.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-009",
    trackers: ["os"],
    category: "Linux",
    title: "Collabora 與 Valve 攜手打造 Holo Core，將 Arch Linux 移植至 64位元 Arm 架構",
    summary: "開源軟體諮詢公司 Collabora 發表最新部落格文章，揭露其與知名遊戲大廠 Valve 的最新合作進展。雙方正共同開發名為「Holo Core」的專案，旨在將 Arch Linux 散佈版移植至 aarch64（64位元 Arm）架構，並預計將此系統應用於 Valve 旗下的 64位元 Arm Steam Frame 遊戲裝置中。目前 Collabora 已正式釋出該專案的原始碼、二進位軟體包以及適用於 aarch64 裝置的容器映像檔。雖然現階段基礎設施已具備從頭構建特定時間點快照的能力，但開發團隊指出，下一步將著重於建立能即時追蹤 Arch Linux 開發進度的持續整合（CI）系統，並計畫與 Arch Linux 上游社群合作以實現自動化與可重複構建。此外，官方也提供在 x86_64 主機上建立與測試該架構容器的教學，降低開發者的測試門檻。",
    tags: ["Collabora", "Valve", "Arch Linux", "Holo Core", "aarch64", "Arm 架構", "Steam Frame"],
    title_en: "Collabora and Valve Partner to Develop Holo Core, Porting Arch Linux to 64-bit Arm Architecture",
    summary_en: "Open-source software consultancy Collabora published a new blog post revealing its latest collaboration with the renowned gaming giant Valve. The two parties are jointly developing a project called \"Holo Core,\" which aims to port the Arch Linux distribution to the aarch64 (64-bit Arm) architecture. This system is expected to be applied to Valve's 64-bit Arm Steam Frame gaming device. Collabora has officially released the project's source code, binary software packages, and container images suitable for aarch64 devices. Although the current infrastructure is capable of building specific point-in-time snapshots, the development team noted that the next step will focus on establishing a Continuous Integration (CI) system that can track the progress of Arch Linux development in real-time, and they plan to collaborate with the Arch Linux upstream community to achieve automation and reproducible builds. Furthermore, the official guide provides instructions for building and testing the architecture container on an x86_64 host, lowering the testing threshold for developers.",
    tags_en: ["Collabora", "Valve", "Arch Linux", "Holo Core", "aarch64", "Arm Architecture", "Steam Frame"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083392", lang: "EN" }
    ]
  },
  {
    id: "20260717-010",
    trackers: ["os"],
    category: "Linux",
    title: "Linux LSM 機制採用 BPF 遭遇安全瓶頸，Systemd 開發者呼籲強化程式碼防篡改保護",
    summary: "在 2026 年 Linux 儲存、檔案系統、記憶體管理與 BPF 峰會上，開發者 Christian Brauner 針對 systemd 等專案導入 BPF 作為 Linux 安全模組（LSM）的現況提出探討。雖然自 2020 年起 BPF 已具備 LSM 的安全防護能力，但在實際應用中仍面臨關鍵限制。Brauner 特別指出，目前的架構缺乏足夠的安全保障，導致 BPF 程式可能面臨被惡意移除或私有資料遭到篡改的風險。為了提升系統層級的安全性，他呼籲 Linux 社群進行架構變更，提供一種確保 BPF 程式與其核心資料無法被輕易更動或破壞的防禦機制，以利核心元件能更安全地利用 BPF 強化使用者防護。",
    tags: ["Linux", "BPF", "LSM", "systemd", "內核安全", "防篡改"],
    title_en: "Linux LSM Mechanism Faces Security Bottleneck with BPF; Systemd Developer Calls for Stronger Code Tamper-Proof Protection",
    summary_en: "At the 2026 Linux Storage, Filesystem, Memory Management & BPF Subsystem Summit, developer Christian Brauner discussed the current status of projects like systemd adopting BPF as a Linux Security Module (LSM). Although BPF has possessed LSM security protection capabilities since 2020, it still faces critical limitations in practical applications. Brauner specifically pointed out that the current architecture lacks adequate security guarantees, leaving BPF programs vulnerable to risks of malicious removal or tampering of private data. To enhance system-level security, he called on the Linux community to make architectural changes that provide a defensive mechanism ensuring BPF programs and their core data cannot be easily altered or destroyed, thereby allowing core components to more safely leverage BPF to strengthen user protection.",
    tags_en: ["Linux", "BPF", "LSM", "systemd", "Kernel Security", "Tamper-proof"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082111", lang: "EN" }
    ]
  },
  {
    id: "20260717-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "多家 Linux 發行版釋出安全更新，修補核心與常用軟體元件漏洞",
    summary: "AlmaLinux、Fedora、Oracle、Red Hat、Slackware、SUSE 及 Ubuntu 等多家主流 Linux 發行版大動作釋出安全更新。本次修補範圍涵蓋 Linux 核心、UEK 核心、核心系統元件，以及 cifs-utils、tar、git-lfs 與 podman 等多款常用基礎工具。此外，受影響並獲得更新的還包括 python、nodejs、perl 等開發語言環境與網頁伺服器元件。本次公告並未公開具體 CVE 編號、CVSS 評分或技術細節，但強烈建議系統管理員與開發人員儘速檢查並將受影響的系統與套件更新至最新版本，以降低潛在的資安風險。",
    tags: ["AlmaLinux", "Fedora", "Oracle", "Red Hat", "SUSE", "Ubuntu", "安全更新", "Linux Kernel"],
    title_en: "Multiple Linux Distributions Release Security Updates to Patch Vulnerabilities in Kernel and Common Software Components",
    summary_en: "Multiple mainstream Linux distributions, including AlmaLinux, Fedora, Oracle, Red Hat, Slackware, SUSE, and Ubuntu, have taken major action to release security updates. The scope of these patches covers the Linux kernel, UEK kernel, core system components, as well as several widely used foundational tools such as cifs-utils, tar, git-lfs, and podman. In addition, development language environments and web server components, including python, nodejs, and perl, were also affected and received updates. While this announcement did not disclose specific CVE IDs, CVSS scores, or technical details, system administrators and developers are strongly advised to check and update affected systems and packages to the latest versions as soon as possible to mitigate potential cybersecurity risks.",
    tags_en: ["AlmaLinux", "Fedora", "Oracle", "Red Hat", "SUSE", "Ubuntu", "Security Updates", "Linux Kernel"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083388", lang: "EN" }
    ]
  },
  {
    id: "20260717-012",
    trackers: ["os"],
    category: "Linux",
    title: "Collabora 釋出 Holo Core 實驗版本：專為 Valve 的 Steam Frame 所打造的 Arch Linux AArch64 架構基礎系統",
    summary: "軟體顧問公司 Collabora 宣布針對 Valve 即將推出的高通處理器 Steam Frame 頭戴裝置，釋出名為 Holo Core 的 Arch Linux AArch64 基礎系統源碼與二進位檔案。由於 Arch Linux 官方上游目前缺乏正式的 AArch64 架構支援，開發團隊為此建置了額外的工具鏈與持續整合（CI）基礎設施。本次釋出的目的在於讓社群與開發者能探索此移植版本，除了提供程式碼外，也包含二進位套件與 Docker 容器。目前該版本並未重新編譯 Arch Linux 儲存庫內的所有套件，而是先聚焦於 Steam Frame 開發與映像檔製作所需的幾千個核心套件及依賴項。此階段尚未提及特定 CVE 漏洞或 CVSS 評分，主旨在於系統架構的遷移與開發進度。",
    tags: ["Valve", "Collabora", "Holo Core", "Arch Linux", "AArch64", "Steam Frame", "ARM64"],
    title_en: "Collabora Releases Holo Core Experimental Version: An Arch Linux AArch64 Base System Tailored for Valve's Steam Frame",
    summary_en: "Software consultancy Collabora has announced the release of source code and binaries for Holo Core, an Arch Linux AArch64 base system tailored for Valve's upcoming Qualcomm-powered Steam Frame headset. Because the official upstream Arch Linux currently lacks formal AArch64 architecture support, the development team built an additional toolchain and continuous integration (CI) infrastructure for this purpose. The purpose of this release is to allow the community and developers to explore this port, providing binary packages and Docker containers alongside the code. Currently, this version does not recompile all packages in the Arch Linux repository, focusing instead on a few thousand core packages and dependencies required for Steam Frame development and image creation. No specific CVE vulnerabilities or CVSS scores were mentioned at this stage, as the primary focus is on system architecture migration and development progress.",
    tags_en: ["Valve", "Collabora", "Holo Core", "Arch Linux", "AArch64", "Steam Frame", "ARM64"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Holo-Core-Experimental-ARM64", lang: "EN" }
    ]
  },
  {
    id: "20260717-013",
    trackers: ["os"],
    category: "Linux",
    title: "Linux Kernel 迎來新補丁：ACPI WMI 驅動程式將首度支援 ARM64 筆電架構",
    summary: "Linux 開發者 Armin Wolf 近日提交了一套全新補丁，旨在為 ACPI 視窗管理規範（WMI）驅動程式引進 AArch64 架構支援。此舉打破了該驅動過往僅限於 x86 與 x86_64 的架構限制，為 Linux 系統全面支援現代 Windows on ARM 筆電奠定關鍵基礎。技術細節上，補丁移除了核心架構限制，使驅動能在所有支援 ACPI 的架構上運行，並同步更新了 acpi-video 與通用 WMI BMOF 驅動以適應新架構，目前已在 ARM64 虛擬機器測試成功。這項轉變呼應了未來高通驍龍等 ARM 筆電走向純 ACPI 化、淘汰設備樹（Device Tree）的硬體趨勢。實務上能顯著提升 Linux 在新世代 ARM 筆電上的相容性，目前此補丁正爭取合併至 Linux 官方主線核心中。",
    tags: ["Linux", "ARM64", "AArch64", "ACPI", "WMI", "Armin Wolf", "Kernel補丁", "高通Snapdragon"],
    title_en: "Linux Kernel Receives New Patch: ACPI WMI Driver Set to Support ARM64 Laptop Architecture for the First Time",
    summary_en: "Linux developer Armin Wolf recently submitted a brand-new set of patches aimed at introducing AArch64 architecture support to the ACPI Windows Management Instrumentation (WMI) driver. This move breaks the driver's historical architecture restriction to x86 and x86_64, laying a critical foundation for Linux systems to fully support modern Windows on ARM laptops. Regarding technical details, the patches remove the core architecture constraints, enabling the driver to run on all ACPI-supported architectures, while simultaneously updating the acpi-video and generic WMI BMOF drivers to accommodate the new architecture; it has currently been successfully tested on ARM64 virtual machines. This transition echoes the future hardware trend of ARM laptops, such as Qualcomm Snapdragon, moving toward pure ACPI and phasing out Device Tree. In practice, this can significantly enhance Linux compatibility on next-generation ARM laptops, and the patches are currently vying for merger into the official mainline Linux kernel.",
    tags_en: ["Linux", "ARM64", "AArch64", "ACPI", "WMI", "Armin Wolf", "Kernel Patch", "Qualcomm Snapdragon"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-ACPI-WMI-Driver-ARM64", lang: "EN" }
    ]
  },
  {
    id: "20260717-014",
    trackers: ["os"],
    category: "Linux",
    title: "Arm 為 Linux 提交 CLA 核心驅動程式，為加速器提供與類型無關的核心本機介面",
    summary: "Arm 工程師近日針對 Linux 核心提交了一項新開源驅動程式「核心本機加速器（Core Local Accelerator, CLA）」的意見徵求稿（RFC）。該驅動程式旨在為連網的加速器提供一個與處理器本機（CPU-local）直接連結的程式化介面。此介面設計與加速器類型無關，初期主要針對運算引擎進行最佳化。技術細節上，Arm CLA 最多可支援 8 個連接的加速器，並具備促進加速器之間協同合作的架構設計。目前 Arm 僅釋出核心層級的加速器驅動原型程式碼，尚未提供使用者空間（user-space）的驅動程式，雖然官方正推動將使用者空間驅動開源，但目前尚無明確的時間表。此階段主要供開發者針對未來 Arm 硬體架構進行評估與討論。",
    tags: ["Arm", "Linux Kernel", "CLA", "驅動程式", "加速器", "RFC", "開源"],
    title_en: "Arm Submits CLA Core Driver to Linux, Providing Type-Agnostic Core Local Interface for Accelerators",
    summary_en: "Arm engineers recently submitted a Request for Comments (RFC) for a new open-source driver, the Core Local Accelerator (CLA), to the Linux kernel. This driver is designed to provide a programmable interface directly connected to the processor local to networked accelerators. The interface is designed to be type-agnostic regarding the accelerator type, initially focusing on optimizing compute engines. Technically, the Arm CLA can support up to 8 connected accelerators and features an architecture designed to facilitate cooperation among accelerators. Currently, Arm has only released the core-level accelerator driver prototype code and has not yet provided user-space drivers. Although the official team is promoting the open-sourcing of user-space drivers, there is no clear timeline yet. This phase is primarily for developers to evaluate and discuss future Arm hardware architectures.",
    tags_en: ["Arm", "Linux Kernel", "CLA", "Driver", "Accelerator", "RFC", "Open Source"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Arm-Core-Local-Accelerator", lang: "EN" }
    ]
  },
  {
    id: "20260717-015",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 7.3 將迎來 AMDGPU 驅動更新：新增 OLED 省電功能、修正 8K 高刷顯示與記憶體流失漏洞",
    summary: "AMD 已針對即將於 7 月下旬開啟合併視窗的 Linux 7.3 核心，提交了新一輪的 AMDGPU 核心顯示驅動與 AMDKFD 計算驅動更新。本次技術調整包含支援次世代硬體的 DCN 4.2、GFX 12.1 等全新 IP 模組。實務功能方面，新增內容自適應對比與電源（CACP）技術以提升 OLED 螢幕省電效益，並修正了因 DisplayID 區塊解析錯誤導致 8K 120Hz/240Hz 高更新率顯示器失效的問題。在安全與穩定性維護上，修補了 amdgpu_bo_create_reserved 函數中的記憶體緩衝區引腳流失（bo->pin leak）漏洞、AMDKFD 內 CWSR 大小計算的邊界檢查錯誤，以及多項舊款 GPU 的電源切換與時脈修正。建議 Linux 用戶與硬體開發者關注後續核心版本發布並即時升級。",
    tags: ["AMD", "Linux 7.3", "AMDGPU", "記憶體流失", "核心驅動", "OLED 省電", "驅動更新"],
    title_en: "Linux 7.3 to Welcome AMDGPU Driver Update: Adding OLED Power-Saving Features, Fixing 8K High Refresh Rate Display and Memory Leak Vulnerabilities",
    summary_en: "AMD has submitted a new round of AMDGPU core display driver and AMDKFD compute driver updates for the upcoming Linux 7.3 kernel, whose merge window opens in late July. This technical adjustment includes support for brand-new IP modules such as DCN 4.2 and GFX 12.1 for next-generation hardware. In terms of practical features, it adds Content Adaptive Contrast and Power (CACP) technology to enhance OLED screen power-saving efficiency, and fixes an issue where 8K 120Hz/240Hz high refresh rate displays failed due to DisplayID block parsing errors. For security and stability maintenance, it patches a memory buffer pin leak (bo->pin leak) vulnerability in the amdgpu_bo_create_reserved function, a boundary check error in CWSR size calculation within AMDKFD, as well as multiple power switching and clock fixes for older GPUs. Linux users and hardware developers are advised to pay close attention to subsequent kernel version releases and upgrade promptly.",
    tags_en: ["AMD", "Linux 7.3", "AMDGPU", "Memory Leak", "Kernel Driver", "OLED Power Saving", "Driver Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-More-AMDGPU", lang: "EN" }
    ]
  },
  {
    id: "20260717-016",
    trackers: ["os"],
    category: "Linux",
    title: "開發者利用 Claude Code AI 打造純 x86_64 組合語言 X11 伺服器 Frame",
    summary: "開發者 Geir Isene 在 Claude Code 的協助下，成功開發出一款名為 Frame 的全新 X11 伺服器。該項目完全由純 x86_64 組合語言編寫，單一程式碼檔案將近 2.5 萬行。Frame 不依賴 Mesa、FreeType、Xlib 甚至 libc 等外部基礎庫，而是直接調用 Linux 系統呼叫、DRM/KMS 介面以及用於輸入的 evdev。作者已將其作為日常工作環境，並指出其實測 CPU 消耗僅為傳統 Xorg 的三分之一，大幅提升了筆電的電池續航力。儘管目前尚未公開相關 CVE 漏洞或 CVSS 安全評級，但該項目展示了利用大型語言模型（LLM）管理複雜組合語言、優化系統底層架構並推動供應鏈與工具鏈簡化的新趨勢。",
    tags: ["Frame", "X11", "組合語言", "Claude Code", "Linux", "AI 開發", "開源項目"],
    title_en: "Developer Uses Claude Code AI to Build Pure x86_64 Assembly Language X11 Server 'Frame'",
    summary_en: "Developer Geir Isene, with the assistance of Claude Code, has successfully developed a brand-new X11 server named Frame. The project is written entirely in pure x86_64 assembly language, with a single code file spanning nearly 25,000 lines. Frame does not rely on external foundational libraries such as Mesa, FreeType, Xlib, or even libc; instead, it directly invokes Linux system calls, the DRM/KMS interface, and evdev for input. The author has already adopted it as his daily working environment and noted that its measured CPU consumption is only one-third of traditional Xorg, significantly improving laptop battery life. Although no related CVE vulnerabilities or CVSS security ratings have been made public yet, the project demonstrates a new trend of utilizing large language models (LLMs) to manage complex assembly language, optimize low-level system architecture, and drive the simplification of supply chains and toolchains.",
    tags_en: ["Frame", "X11", "Assembly language", "Claude Code", "Linux", "AI development", "Open-source project"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Frame-X11-Server-Assembly", lang: "EN" }
    ]
  },
  {
    id: "20260717-017",
    trackers: ["security"],
    category: "重大事件",
    title: "四大會計師事務所安永（EY）遭第三方支援系統駭客入侵，客戶稅務資料外洩",
    summary: "全球四大會計師事務所之一安永（Ernst & Young, EY）宣布，其IT人員使用的第三方支援票務系統遭到未經授權的第三方存取。根據公司通知，該系統可能包含客戶的稅務資訊文件。EY於4月23日偵測到異常活動，並啟動調查。外部資安專家協助確認，駭客在3月28日至4月12日期間存取該平台，並下載了多份文件。受影響的資訊包含用於準備報稅的個人和財務資料，但具體外洩的資料類型尚未明確。EY已聲稱已加固系統並通知了聯邦執法機構，並提供受影響客戶兩年身份監控服務。然而，文章未公開受影響的客戶數量或是否僅限於美國客戶群，且目前未有勒索軟體團體聲稱攻擊此事件。",
    tags: ["安永", "Ernst & Young", "資料外洩", "第三方系統", "稅務資訊", "資訊安全"],
    title_en: "Big Four Accounting Firm EY Hit by Hacker Intrusion on Third-Party Support System; Client Tax Data Leaked",
    summary_en: "One of the global Big Four accounting firms, Ernst & Young (EY), announced that its third-party support ticketing system used by IT personnel was accessed by unauthorized third parties. According to the company's notice, the system may contain client tax information documents. EY detected abnormal activity on April 23 and launched an investigation. External cybersecurity experts confirmed that hackers accessed the platform between March 28 and April 12, downloading multiple documents. The affected information includes personal and financial data used for tax preparation, but the specific types of leaked data have not been clarified. EY has stated that it has hardened the system and notified federal law enforcement agencies, and it is providing two years of identity monitoring services to affected clients. However, the article did not disclose the number of affected clients or whether the scope was limited only to US clients, and there have been no reports of ransomware groups claiming responsibility for this incident.",
    tags_en: ["Ernst & Young", "Data Leakage", "Third-Party System", "Tax Information", "Information Security"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/ernst-and-young-discloses-data-breach-after-support-system-hack", lang: "EN" }
    ]
  },
  {
    id: "20260717-018",
    trackers: ["security"],
    category: "法規與標準",
    title: "白宮正式啟動 Gold Eagle 漏洞協調機制，聯手 AI 產業加速關鍵基礎設施防禦但細節仍未明",
    summary: "美國白宮於 7 月 14 日正式啟動名為「Gold Eagle」的漏洞協調中心計畫。該計畫旨在因應如 Anthropic Claude Mythos 等大型語言模型（LLM）普及後所帶來的海量漏洞挑戰。Gold Eagle 由財政部、國防部、國家安全局（NSA）及國土安全部（CISA）等跨部會官員共同規劃，屬於與 AI 產業及關鍵基礎設施的自願性合作計畫。技術上，該機制建立在卡內基美隆大學軟體工程學院開發的 VINCE 平台之上，旨在利用前瞻 AI 能力進行漏洞阻斷、驗證與修補優先順序協調。專家指出，該計畫確實填補了跨領域漏洞修補優先級的空白，但其具體執行權責、數據保護與資金來源等實際運作細節仍不明確，組織仍需依循 CISA 的 BOD 26-04 指引來落實內部修補流程。",
    tags: ["白宮", "Gold Eagle", "AI 安全", "關鍵基礎設施", "CISA", "VINCE", "漏洞管理", "BOD 26-04"],
    title_en: "White House Launches Gold Eagle Vulnerability Coordination Mechanism to Accelerate Critical Infrastructure Defense with AI Industry, But Details Remain Unclear",
    summary_en: "On July 14, the U.S. White House officially launched a vulnerability coordination center program named \"Gold Eagle.\" This program aims to address the massive challenge of vulnerabilities arising from the widespread adoption of large language models (LLMs), such as Anthropic Claude Mythos. Gold Eagle is a voluntary collaborative initiative involving cross-departmental officials from the Treasury Department, Department of Defense, National Security Agency (NSA), and CISA. Technically, the mechanism is built upon the VINCE platform, developed by Carnegie Mellon University's School of Software Engineering, aiming to utilize predictive AI capabilities for vulnerability blocking, validation, and patching prioritization. Experts point out that while the program successfully fills the gap in cross-domain vulnerability patching prioritization, the practical operational details—such as specific execution responsibilities, data protection, and funding sources—remain unclear. Organizations are still required to follow CISA's BOD 26-04 guidelines to implement internal patching processes.",
    tags_en: ["White House", "Gold Eagle", "AI Security", "Critical Infrastructure", "CISA", "VINCE", "Vulnerability Management", "BOD 26-04"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/gold-eagle-clearinghouse-targets-security-gap", lang: "EN" }
    ]
  },
  {
    id: "20260717-019",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國暫停CMMC第二階段第三方評估要求 以減輕中小企業國防採購法規負擔",
    summary: "美國宣布立即暫停網路安全成熟度模型認證（CMMC）第二階段要求，原定於2026年11月實施的受控非機密資訊（CUI）第三方評估將重新檢討，以減輕中小型與非傳統承包商的合規成本。官方強調此舉並非取消CMMC，第一階段自我評估仍維持實施，承包商仍須符合NIST SP 800-171第2版等資安規範。調查指出，現行制度合規成本高昂達數十萬美元，且第三方評估機構量能不足、等待時間過長，已導致部分中小企業考慮退出國防供應鏈。進階指引將於60天審查後頒布，暫停期間國防採購案僅能要求自我評估。",
    tags: ["CMMC", "NIST SP 800-171", "美國國防部", "國防承包商", "法規遵循", "供應鏈資安"],
    title_en: "US Suspends CMMC Level 2 Third-Party Assessment Requirements to Ease Defense Procurement Regulatory Burden on SMEs",
    summary_en: "The United States has announced an immediate suspension of the Cybersecurity Maturity Model Certification (CMMC) Level 2 requirements, reopening the third-party assessment for Controlled Unclassified Information (CUI) originally scheduled for implementation in November 2026 for review to alleviate compliance costs for small and medium-sized as well as non-traditional contractors. Officials emphasized that this move does not cancel CMMC; Level 1 self-assessments remain in effect, and contractors must still comply with cybersecurity standards such as NIST SP 800-171 Rev 2. Surveys indicate that current compliance costs are exorbitantly high, reaching hundreds of thousands of dollars, and a shortage of capacity among third-party assessment organizations coupled with excessive waiting times has led some SMEs to consider exiting the defense supply chain. Advanced guidance will be issued following a 60-day review, and defense procurement projects can only require self-assessments during the suspension period.",
    tags_en: ["CMMC", "NIST SP 800-171", "DoD", "Defense Contractors", "Regulatory Compliance", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177389", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-020",
    trackers: ["os", "security"],
    category: "法規與標準",
    title: "歐盟依據 DMA 要求 Google 於 Android 18 開放 AI 競爭對手存取系統底層與感測器權限",
    summary: "歐盟執行委員會依據《數位市場法案》（DMA）對 Google 作出具體規範裁決，要求其必須在 Android 18（最遲 2027 年 8 月 1 日）前，將其專屬 AI 助理 Gemini 擁有的底層系統權限對等開放給競爭對手。受影響產品為市佔率約 60% 的歐洲 Android 行動裝置。技術細節上，開放內容涵蓋 11 項作業系統功能，其中微軟、相機、螢幕內容、鎖屏喚醒及背景執行等 6 項功能完全免除驗證，第三方應用可在取得用戶輕度同意後持續於背景讀取感測器；其餘 5 項如 App 功能整合與螢幕自動化則屬限制性功能，Google 須建立合格 AI 助理計畫並由第三方公信機構（TCA）免費認證。實務影響在於第三方 AI 助理將可代用戶操作其他 App，可能衍生代理人安全風險（Agentic Risks），App 開發商需在 Android 18 測試版前完成對敏感畫面的遮蔽保護。修補與因應建議上，Google 須於 2027 年 2 月 1 日前提交草案，並在敏感操作前重新確認用戶意圖與強化模型抗攻擊能力。",
    tags: ["Google", "Android 18", "歐盟執行委員會", "DMA", "Gemini", "AI 助理", "隱私安全"],
    title_en: "EU Requires Google to Grant AI Competitors Access to System Underlyings and Sensor Permissions in Android 18 Under DMA",
    summary_en: "The European Commission has issued a specific regulatory ruling against Google based on the Digital Markets Act (DMA), requiring it to equally open up the underlying system permissions possessed by its proprietary AI assistant, Gemini, to competitors by Android 18 (no later than August 1, 2027). The affected products are European Android mobile devices with a market share of approximately 60%. In terms of technical details, the scope of access covers 11 operating system functions. Among them, 6 functions including microphone, camera, screen content, lock screen wake-up, and background execution are completely exempt from verification, allowing third-party applications to continuously read sensors in the background after obtaining lightweight user consent. The remaining 5 functions, such as App function integration and screen automation, are restricted functions, for which Google must establish a Qualified AI Assistant Program certified free of charge by a Third-Party Credible Authority (TCA). The practical impact is that third-party AI assistants will be able to operate other Apps on behalf of users, which may lead to agentic risks (Agentic Risks); App developers need to complete the masking protection of sensitive screens before the Android 18 beta version. For remediation and response recommendations, Google must submit a draft by February 1, 2027, and reconfirm user intent before sensitive operations while strengthening the model's resistance to attacks.",
    tags_en: ["Google", "Android 18", "European Commission", "DMA", "Gemini", "AI Assistant", "Privacy and Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/eu-orders-google-to-open-android-mic.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-021",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布將於下個月停止針對舊版 Windows 10 的 OneDrive 支援服務",
    summary: "微軟官方宣布將於 2026 年 8 月起，停止舊版 Windows 10 作業系統上的 OneDrive 桌面應用程式支援。受影響的系統版本包含已達生命週期終點（EoD）的 Windows 10 21H1、21H2 以及更早的版本。微軟表示此舉是為了集中資源於更新、更安全的系統架構。實務上，受影響用戶的 OneDrive 應用程式將停止同步檔案至雲端，但使用者仍可透過網頁版存取資料。微軟強烈建議仍在使用舊版系統的企業與個人用戶，應盡速將作業系統升級至 Windows 10 22H2 或 Windows 11，以維持雲端同步功能的正常運作並確保系統整體安全性。",
    tags: ["Microsoft", "OneDrive", "Windows 10", "產品生命週期", "雲端同步", "系統更新"],
    title_en: "Microsoft Announces Termination of OneDrive Support for Older Windows 10 Versions Next Month",
    summary_en: "Microsoft has officially announced that starting August 2026, it will stop supporting the OneDrive desktop application on older versions of the Windows 10 operating system. The affected system versions include Windows 10 21H1, 21H2, and earlier versions that have already reached their End of Life (EoD). Microsoft stated that this move is to concentrate resources on newer, more secure system architectures. In practice, the OneDrive application for affected users will stop syncing files to the cloud, though users can still access their data via the web version. Microsoft strongly recommends that enterprise and individual users still utilizing older systems upgrade their operating systems to Windows 10 22H2 or Windows 11 as soon as possible to maintain normal cloud synchronization functionality and ensure overall system security.",
    tags_en: ["Microsoft", "OneDrive", "Windows 10", "Product Lifecycle", "Cloud Synchronization", "System Update"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/07/17/microsoft-cuts-onedrive-support-for-older-windows-10-versions-next-month/5274489", lang: "EN" }
    ]
  },
  {
    id: "20260717-022",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟發布 2026 年 7 月 Patch Tuesday 安全更新 KB5101650，修補 570 項漏洞並推多項功能變更",
    summary: "微軟於 2026 年 7 月 14 日發布強制性 Patch Tuesday 安全更新（KB5101650），一次性修補了高達 570 項系統漏洞與瑕疵。此版本除了重大的安全性修補外，亦針對 Windows 11 推出多項功能改進，包括：調整小工具（Widgets）資訊看板的觸發機制以防止自動彈出、在 Windows Update 中新增行事曆式暫停更新機制（最長 35 天）。此外，還正式推出了基於磁碟區陰影複製服務（VSS）的全新「時間點還原」（Point-in-time Restore）全系統復原工具，可在背景建立區塊級快照，供系統因驅動程式或更新損壞時進行離線復原，但需佔用最多 50GB 空間。目前相關新功能正採漸進式推送。",
    tags: ["微軟", "Windows 11", "Patch Tuesday", "KB5101650", "安全性更新", "漏洞修補", "系統還原"],
    title_en: "Microsoft Releases KB5101650 Patch Tuesday Security Update in July 2026, Fixing 570 Vulnerabilities and Introducing Multiple Feature Changes",
    summary_en: "On July 14, 2026, Microsoft released a mandatory Patch Tuesday security update (KB5101650), which fixes up to 570 system vulnerabilities and flaws. In addition to major security patches, this version also introduces multiple feature improvements for Windows 11, including: adjusting the trigger mechanism for the Widgets information panel to prevent automatic pop-ups, and adding a calendar-based update pause mechanism in Windows Update (up to 35 days). Furthermore, it formally introduces a new 'Point-in-time Restore' full system recovery tool based on the Volume Shadow Copy Service (VSS). This tool can create block-level snapshots in the background for offline recovery in case the system is damaged by drivers or updates, but it requires up to 50GB of space. These new features are currently being rolled out gradually.",
    tags_en: ["Microsoft", "Windows 11", "Patch Tuesday", "KB5101650", "Security Update", "Vulnerability Patch", "System Restore"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/17/windows-11s-biggest-summer-update-just-landed-with-5-new-features-but-you-wont-get-them-all-today", lang: "EN" }
    ]
  },
  {
    id: "20260717-023",
    trackers: ["os", "security"],
    category: "法規與標準",
    title: "微軟宣布 Windows Server 2022 進入維護期，建議用戶升級至 Windows Server 2025",
    summary: "微軟（Microsoft）宣布，Windows Server 2022 的主流支援期將於 2026 年 10 月 13 日結束。雖然該版本將進入「延伸支援」（Extended Support），仍可持續接收安全更新，但主流支援更新將在此日期為止。用戶應規劃升級至最新的長期服務通道（LTSC）版本 Windows Server 2025。Windows Server 2025 已於 2024 年 11 月發布，其主流支援期至 2029 年 11 月 13 日，延伸支援期則至 2034 年 11 月 14 日。微軟強調，為確保環境安全與持續支援，建議客戶盡早評估並部署升級至 Windows Server 2025，以獲得完整的主流支援。此外，微軟也針對特定版本（如 Datacenter: Azure Edition）延長了熱修補期，並提醒用戶留意其他產品的支援終止日期。",
    tags: ["Microsoft", "Windows Server 2022", "Windows Server 2025", "LTSC", "支援終止", "資安升級"],
    title_en: "Microsoft Announces Windows Server 2022 Entering Maintenance Phase, Recommends Upgrade to Windows Server 2025",
    summary_en: "Microsoft announced that the mainstream support period for Windows Server 2022 will end on October 13, 2026. Although the version will enter 'Extended Support' and continue to receive security updates, mainstream support updates will cease on this date. Users should plan to upgrade to the latest Long-Term Servicing Channel (LTSC) version, Windows Server 2025. Windows Server 2025 was released in November 2024, with mainstream support until November 13, 2029, and extended support until November 14, 2034. Microsoft emphasizes that to ensure environmental security and continuous support, customers are advised to evaluate and deploy the upgrade to Windows Server 2025 as soon as possible to receive full mainstream support. Furthermore, Microsoft has extended the hotfix period for specific versions (such as Datacenter: Azure Edition) and reminds users to pay attention to the support end dates for other products.",
    tags_en: ["Microsoft", "Windows Server 2022", "Windows Server 2025", "LTSC", "End-of-Life", "Security Upgrade"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/microsoft/windows-server-2022-reach-end-of-mainstream-support-in-90-days", lang: "EN" }
    ]
  },
  {
    id: "20260717-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA 與多國發布俄駭客攻擊指南，並示警 Fortinet 及 SonicWall 防火牆滿分漏洞已遭積極利用",
    summary: "本週資安焦點集中於網路邊界設備漏洞與關鍵基礎設施威脅。CISA 將 Fortinet 沙箱系統 FortiSandbox 的兩項漏洞（CVE-2026-39808、CVE-2026-25089，CVSS 9.1分）以及 SonicWall SMA1000 防火牆設備漏洞（CVE-2026-15409、CVE-2026-15410，CVSS 10分）列入 KEV 清單，兩者皆已出現積極利用的攻擊活動。此外，英國 NCSC 聯合 13 國資安機構發布指南，指出俄羅斯國家級駭客組織 Centre 16 持續利用設定不當或具已知漏洞的路由器（如18年前的思科舊漏洞 CVE-2008-4128）鎖定全球能源、金融等關鍵基礎設施。實務上，SonicWall 漏洞無替代緩解措施，強烈建議用戶儘速升級至 12.4.3-03453 或 12.5.0-02835 以上版本；CISA 亦要求聯邦機構限期完成 Fortinet 設備修補，並呼籲 CI 營運單位停用舊版 SNMP、限制管理介面存取。",
    tags: ["CISA", "KEV", "Fortinet", "SonicWall", "思科", "CVE-2026-15409", "關鍵基礎設施", "防火牆漏洞"],
    title_en: "CISA and Multi-Nation Coalition Issue Guidance on Russian Cyberattacks, Warning updates on Fortinet and SonicWall Firewall Perfect-Score Vulnerabilities Under Active Exploitation",
    summary_en: "This week's cybersecurity focus centers on network perimeter equipment vulnerabilities and threats to critical infrastructure. CISA added two vulnerabilities in Fortinet's sandbox system FortiSandbox (CVE-2026-39808, CVE-2026-25089, CVSS 9.1) and vulnerabilities in SonicWall SMA1000 firewall appliances (CVE-2026-15409, CVE-2026-15410, CVSS 10) to its KEV catalog, both of which have seen active exploitation activities. Furthermore, the UK's NCSC, jointly with cybersecurity agencies from 13 nations, issued guidance indicating that the Russian nation-state hacker group Centre 16 continues to exploit misconfigured or known-vulnerable routers (such as an 18-year-old Cisco vulnerability CVE-2008-4128) to target global critical infrastructure in energy, finance, and other sectors. In practice, there are no alternative workarounds for the SonicWall vulnerabilities; users are strongly advised to upgrade to version 12.4.3-03453 or 12.5.0-02835 and above as soon as possible. CISA has also mandated federal agencies to complete patches for Fortinet equipment within a specified deadline and urged CI operators to disable legacy SNMP and restrict management interface access.",
    tags_en: ["CISA", "KEV", "Fortinet", "SonicWall", "Cisco", "CVE-2026-15409", "Critical Infrastructure", "Firewall Vulnerabilities"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177408", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA 將 Fortinet 沙箱系統兩項已知 OS 命令注入漏洞納入 KEV 名單，並要求限期修補",
    summary: "美國網路安全與基礎設施安全局（CISA）於7月16日將三個已遭積極利用的漏洞列入已遭利用漏洞名單（KEV），其中包含 Fortinet 沙箱系統 FortiSandbox 的兩項已知作業系統命令注入漏洞：CVE-2026-39808 與 CVE-2026-25089。這兩項弱點的 CVSS 風險評分均高達 9.1 分，威脅情報業者更指出駭客會搭配 CVE-2026-39813 來繞過身分驗證並提升權限。Fortinet 已於4月及6月陸續釋出更新，CISA 則勒令聯邦機構須在7月19日前完成安全修補，以防範潛在的惡意入侵與系統控制風險。",
    tags: ["CISA", "KEV", "Fortinet", "FortiSandbox", "CVE-2026-39808", "CVE-2026-25089", "命令注入"],
    title_en: "CISA Adds Two Known OS Command Injection Vulnerabilities in Fortinet Sandbox to KEV Catalog, Mandating Timely Patching",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) listed three actively exploited vulnerabilities in its Known Exploited Vulnerabilities (KEV) catalog on July 16, including two known operating system command injection vulnerabilities in Fortinet's FortiSandbox: CVE-2026-39808 and CVE-2026-25089. Both vulnerabilities have a CVSS risk score of 9.1. Threat intelligence vendors further point out that attackers could combine these with CVE-2026-39813 to bypass authentication and escalate privileges. Fortinet has released updates in April and June, and CISA has mandated that federal agencies complete the security patching by July 19 to prevent potential malicious intrusion and system control risks.",
    tags_en: ["CISA", "KEV", "Fortinet", "FortiSandbox", "CVE-2026-39808", "CVE-2026-25089", "Command Injection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177387", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Oracle EBS 重大漏洞 CVE-2026-46817 遭駭客積極利用，美 CISA 列入 KEV 要求限期修補",
    summary: "美國網路安全與基礎設施安全局（CISA）於7月15日將 Oracle E-Business Suite（EBS）的重大安全漏洞 CVE-2026-46817 列入已知遭利用漏洞名單（KEV）。該漏洞最初由 Oracle 於今年5月的關鍵安全修補更新中釋出修補程式，然而威脅情報公司 Defused Cyber 在一個月後便偵測到實際的漏洞利用活動。由於此弱點已被證實用於現實攻擊中，CISA 判定其對聯邦機構具有急迫威脅，並強制要求相關單位必須在7月18日前完成系統修補。目前受影響組織需儘速檢視內部系統，並依照官方指示套用最新的安全更新，以防範潛在的惡意入侵與損害。",
    tags: ["Oracle", "E-Business Suite", "CVE-2026-46817", "CISA", "KEV", "漏洞利用", "資安更新"],
    title_en: "Critical Oracle EBS Vulnerability CVE-2026-46817 Actively Exploited by Hackers; US CISA Adds It to KEV Catalog, Demanding Timely Patching",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) on July 15 added a critical security vulnerability in Oracle E-Business Suite (EBS), designated as CVE-2026-46817, to its Known Exploited Vulnerabilities (KEV) catalog. A patch for this vulnerability was initially released by Oracle in its Critical Patch Update this May; however, threat intelligence firm Defused Cyber detected active exploitation in the wild just one month later. Because this weakness has been confirmed to be used in real-world attacks, CISA determined it poses an urgent threat to federal agencies and has mandated that relevant units must complete system patching by July 18. Affected organizations currently need to review their internal systems as soon as possible and apply the latest security updates according to official instructions to prevent potential malicious intrusions and damage.",
    tags_en: ["Oracle", "E-Business Suite", "CVE-2026-46817", "CISA", "KEV", "Vulnerability Exploitation", "Security Update"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177379", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google 釋出 ChromeOS 穩定版更新，緊急修補 346 個瀏覽器與第三方元件漏洞",
    summary: "Google 針對作業系統 ChromeOS 與 ChromeOS Flex 發布 16700.46.0 穩定版更新，並將內建瀏覽器升級至 150.0.7871.150 版。本次更新總計解決多達 346 個安全性漏洞，其中包含 309 個瀏覽器本身的弱點以及存在於第三方元件的漏洞。在危險等級方面，有 21 個被評為重大風險、98 個為高風險。若以技術型態分類，以記憶體使用後再存取利用（UAF）漏洞高達 76 個為最多，其次為元件不當實作的 63 個，其餘還包含 44 個未充分驗證不受信任輸入的弱點，以及 42 個政策未充分執行的缺陷。官方已釋出相關修補程式，建議用戶應儘速完成系統更新以防範潛在的攻擊風險。",
    tags: ["Google", "ChromeOS", "ChromeOS Flex", "瀏覽器漏洞", "UAF", "第三方元件"],
    title_en: "Google Releases ChromeOS Stable Update, Urgently Patching 346 Vulnerabilities in Browser and Third-Party Components",
    summary_en: "Google has released stable version update 16700.46.0 for the operating systems ChromeOS and ChromeOS Flex, upgrading the built-in browser to version 150.0.7871.150. This update addresses a total of up to 346 security vulnerabilities, including 309 weaknesses in the browser itself and vulnerabilities existing in third-party components. In terms of severity levels, 21 are rated as critical risks and 98 as high risks. Classified by technical types, Use-After-Free (UAF) vulnerabilities are the most prevalent with up to 76 flaws, followed by 63 instances of inappropriate component implementation, alongside 44 weaknesses of improper validation of untrusted input and 42 deficiencies where policy is insufficiently enforced. Official patches have been released, and users are advised to complete the system update as soon as possible to mitigate potential attack risks.",
    tags_en: ["Google", "ChromeOS", "ChromeOS Flex", "Browser Vulnerabilities", "UAF", "Third-Party Components"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177377", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google 緊急更新 Chrome 150 修复 7 個記憶體安全漏洞，內含 CameraCapture 與 GPU 等 3 個重大等級 UAF 弱點",
    summary: "Google 於 7 月 16 日針對電腦版與 Android 版 Chrome 瀏覽器發布 150.0.7871.128 與 150.0.7871.129 版本更新，緊急修補 7 個資安漏洞。本次修補的核心全為記憶體相關問題，多數屬於記憶體釋放後再存取使用（UAF）弱點。其中包含 3 個由 Google 自行發現的重大等級漏洞，分別存在於 CameraCapture、GPU 以及 Network 元件中，並登記為 CVE-2026-15899、CVE-2026-15900、CVE-2026-15901，其餘 4 個則為高風險等級。這些弱點可能引發非預期的程式碼執行或系統崩潰，建議用戶儘速將瀏覽器升級至最新版本以降低受駭風險。",
    tags: ["Google", "Chrome", "CVE-2026-15899", "CVE-2026-15900", "CVE-2026-15901", "UAF", "記憶體安全性", "瀏覽器更新"],
    title_en: "Google Urgently Updates Chrome 150 to Fix 7 Memory Safety Vulnerabilities, Including 3 Critical-Severity UAF Weaknesses in CameraCapture and GPU",
    summary_en: "On July 16, Google released version updates 150.0.7871.128 and 150.0.7871.129 for Chrome browser on Desktop and Android, urgently patching 7 security vulnerabilities. The core of this patch consists entirely of memory-related issues, most of which belong to Use-After-Free (UAF) weaknesses. Among them are 3 critical-severity vulnerabilities discovered by Google itself, which exist in the CameraCapture, GPU, and Network components respectively, and are registered as CVE-2026-15899, CVE-2026-15900, and CVE-2026-15901; the remaining 4 are classified as high-risk severity. These weaknesses could trigger unexpected code execution or system crashes, and users are advised to upgrade their browsers to the latest version as soon as possible to mitigate the risk of exploitation.",
    tags_en: ["Google", "Chrome", "CVE-2026-15899", "CVE-2026-15900", "CVE-2026-15901", "UAF", "Memory Safety", "Browser Update"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177374", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-029",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "WordPress 核心驚爆 wp2shell 嚴重漏洞！串聯兩大 CVE 可對預設安裝站點執行遠端程式碼",
    summary: "WordPress 核心爆發名為 wp2shell 的嚴重漏洞鏈。該漏洞由兩個 CVE 組成：CVE-2026-63030 為 REST API 批次路由混淆漏洞，CVE-2026-60137 則是 WP_Query 的 SQL 注入漏洞。攻擊者可透過發送匿名 HTTP 請求，串聯此兩項漏洞，在未經身分驗證的情況下對站點執行遠端程式碼（RCE）。此漏洞影響 6.9 與 7.0 版本（6.8 僅受 SQL 注入影響）。目前網路上已出現公開的 PoC 攻擊程式碼。實務上，未啟用持久性物件快取的預設安裝站點皆暴露於風險中。官方已緊急發布 6.9.5 及 7.0.2 版本並啟動強制自動更新。若無法立即更新，建議於 WAF 封鎖 /wp-json/batch/v1 路由，或停用未經認證的 REST API 存取。",
    tags: ["WordPress", "wp2shell", "CVE-2026-63030", "CVE-2026-60137", "RCE", "SQL 注入", "REST API", "Assetnote"],
    title_en: "WordPress Core Shock: wp2shell Critical Vulnerability! Chaining Two CVEs Allows Remote Code Execution on Default Installations",
    summary_en: "A critical vulnerability chain named wp2shell has emerged in the WordPress core. This vulnerability is composed of two CVEs: CVE-2026-63030, a REST API batch routing confusion vulnerability, and CVE-2026-60137, a WP_Query SQL injection vulnerability. Attackers can chain these two vulnerabilities by sending anonymous HTTP requests, achieving Remote Code Execution (RCE) on a site without authentication. This vulnerability affects versions 6.9 and 7.0 (version 6.8 is only affected by SQL injection). Public Proof-of-Concept (PoC) code is currently available online. In practice, default installations without persistent object caching are exposed to risk. The official team has urgently released versions 6.9.5 and 7.0.2 and activated forced automatic updates. If immediate updating is not possible, it is recommended to block the /wp-json/batch/v1 route using a WAF, or disable unauthenticated REST API access.",
    tags_en: ["WordPress", "wp2shell", "CVE-2026-63030", "CVE-2026-60137", "RCE", "SQL Injection", "REST API", "Assetnote"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-030",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "OpenSSL 隱密漏洞 HollowByte 可引發記憶體碎片化與拒絕服務攻擊，官方未核發 CVE 編號",
    summary: "Okta 紅隊揭露一個名為 HollowByte 的 OpenSSL 拒絕服務（DoS）漏洞。攻擊者只需發送 11 位元組的 TLS 握手標頭並宣告不實的訊息長度，便能誘導 OpenSSL 伺服器配置高達 131 KB 的緩衝區。若搭配 glibc 系統，當連線中斷時釋放的記憶體會因碎片化而無法交還給核心，導致記憶體持續流失，Okta 測試中曾使 1 GB 伺服器因 OOM 遭到終殺。然而 OpenSSL 官方僅將其視為「錯誤或強化」修補，未核發 CVE 編號、公告或變更日誌，導致傳統掃描器與下游發行版（如 Red Hat）難以追蹤。受影響版本為 3.0 至 4.0 分支中於 2025 年 6 月 9 日前的所有舊版本（DTLS 則仍未修補）。修補建議為手動升級至 OpenSSL 4.0.1、3.6.3、3.5.7、3.4.6、3.0.21 或更新版本並重啟相關服務。",
    tags: ["OpenSSL", "HollowByte", "Okta", "glibc", "拒絕服務攻擊", "記憶體碎片化", "TLS"],
    title_en: "OpenSSL Stealth Vulnerability HollowByte Can Trigger Memory Fragmentation and Denial of Service Attacks; Officials Have Not Issued a CVE ID",
    summary_en: "The Okta Red Team has disclosed a Denial of Service (DoS) vulnerability in OpenSSL named HollowByte. By sending an 11-byte TLS handshake header that declares a false message length, an attacker can trick the OpenSSL server into allocating a buffer of up to 131 KB. When combined with a glibc system, the memory released upon connection disruption cannot be returned to the kernel due to fragmentation, leading to continuous memory leaks. In Okta's tests, this caused a 1 GB server to be terminated by the OOM killer. However, OpenSSL officials have treated this merely as a 'bug or hardening' patch, without issuing a CVE ID, advisory, or changelog entry, making it difficult for traditional scanners and downstream distributions (such as Red Hat) to track. The affected versions include all legacy versions within the 3.0 to 4.0 branches prior to June 9, 2025 (DTLS remains unpatched). Remediation recommendations involve manually upgrading to OpenSSL 4.0.1, 3.6.3, 3.5.7, 3.4.6, 3.0.21, or newer versions, and restarting relevant services.",
    tags_en: ["OpenSSL", "HollowByte", "Okta", "glibc", "Denial of Service Attack", "Memory Fragmentation", "TLS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/openssl-hollowbyte-flaw-could-freeze.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新型 Go 語言植物網路 NadMesh 鎖定暴露之 AI 服務，大肆搜刮 AWS 憑證與雲端權限",
    summary: "一款名為 NadMesh 的 Go 語言 Botnet 於 2026 年 7 月初被網路安全機構發現，該惡意軟體專門鎖定暴露於網際網路的 AI 與自動化服務（如 ComfyUI、Ollama、n8n、Gradio 等）。根據 QiAnXin XLab 的分析報告，攻擊者利用其內建的掃描與自動排程機制，針對目標進行漏洞利用，其主要目的並非控制主機本身，而是竊取環境變數、Kubernetes 服務帳戶權限、~/.aws/config、.env 及 Docker 配置中的雲端憑證。儘管該 Botnet 試圖利用模型上下文協議（MCP）的未授權指令執行漏洞，但流量分析顯示其主要攻擊手段仍為 Jenkins、Docker API 的遠端程式碼執行（RCE）、弱密碼及特定已知漏洞（如 CVE-2026-39987 與 CVE-2026-41176）。NadMesh 具備多重持久化機制並經過混淆與加殼，使得單一特徵碼難以清除。專家建議，管理者應立即將 AI 相關服務移至防火牆後方並啟用身分驗證，關閉不必要的公開通訊埠，若發現受害跡象須立刻隔離主機並撤換所有可能外洩的雲端與叢集憑證。",
    tags: ["NadMesh", "Botnet", "AI 安全", "AWS 憑證竊取", "Kubernetes", "CVE-2026-39987", "CVE-2026-41176", "QiAnXin"],
    title_en: "New Go-Based Botnet NadMesh Targets Exposed AI Services, Heavily Harvesting AWS Credentials and Cloud Permissions",
    summary_en: "A Go-based Botnet named NadMesh was discovered by cybersecurity organizations in early July 2026. This malware specifically targets AI and automation services exposed to the internet (such as ComfyUI, Ollama, n8n, Gradio, etc.). According to an analytical report by QiAnXin XLab, attackers utilize its built-in scanning and automated scheduling mechanisms to exploit vulnerabilities in targets. Its primary objective is not to control the host itself, but to steal cloud credentials from environment variables, Kubernetes service account permissions, ~/.aws/config, .env, and Docker configurations. Although the Botnet attempts to exploit unauthorized command execution vulnerabilities in the Model Context Protocol (MCP), traffic analysis indicates that its primary attack methods remain remote code execution (RCE) via Jenkins and Docker APIs, weak passwords, and specific known vulnerabilities (such as CVE-2026-39987 and CVE-2026-41176). NadMesh features multiple persistence mechanisms and undergoes obfuscation and packing, making it difficult to clear with a single signature. Experts recommend that administrators immediately move AI-related services behind firewalls, enable authentication, and close unnecessary public ports. If signs of compromise are detected, the host must be isolated immediately, and all potentially leaked cloud and cluster credentials must be rotated.",
    tags_en: ["NadMesh", "Botnet", "AI Security", "AWS Credential Theft", "Kubernetes", "CVE-2026-39987", "CVE-2026-41176", "QiAnXin"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-nadmesh-botnet-hunts-exposed-ai.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA 將微軟 SharePoint Server 遭開採的遠端代碼執行漏洞 CVE-2026-58644 列入 KEV  catalog",
    summary: "美國 CISA 將微軟 SharePoint Server 的嚴重漏洞 CVE-2026-58644 列入已知遭開採漏洞（KEV）目錄。此漏洞為不受信任資料的反序列化缺陷，CVSS 風險評分高達 9.8。具備網站擁有者權限的攻擊者，可在低複雜度的情況下從網路遠端對伺服器注入並執行任意程式碼。受影響版本包含 SharePoint Server 訂閱版、2019 及 2016 企業版。微軟已於 2026 年 7 月的修補星期二發布更新，並證實該漏洞在修補前已被作為零日漏洞開採。此外，CISA 警告多個 SharePoint 漏洞正遭積極利用來竊取 IIS 機器金鑰並部署惡意軟體。修補建議包含立即安裝微軟最新安全更新、啟用 AMSI 整合、清查並移除入侵痕跡、更換機器金鑰、避免將伺服器直接暴露於網際網路，並封鎖外部存取中央管理介面。",
    tags: ["CISA", "KEV", "Microsoft", "SharePoint Server", "CVE-2026-58644", "遠端代碼執行", "反序列化漏洞", "零日漏洞"],
    title_en: "CISA Adds Exploited Microsoft SharePoint Server Remote Code Execution Vulnerability CVE-2026-58644 to KEV Catalog",
    summary_en: "The US CISA has added the critical Microsoft SharePoint Server vulnerability CVE-2026-58644 to its Known Exploited Vulnerabilities (KEV) catalog. This vulnerability is a deserialization of untrusted data flaw with a high CVSS risk score of 9.8. An attacker with site owner privileges can remotely inject and execute arbitrary code on the server over the network with low complexity. Affected versions include SharePoint Server Subscription Edition, 2019, and 2016 Enterprise Edition. Microsoft released updates during the July 2026 Patch Tuesday and confirmed that the vulnerability had been exploited as a zero-day prior to patching. Additionally, CISA warned that multiple SharePoint vulnerabilities are being actively exploited to steal IIS machine keys and deploy malware. Mitigation recommendations include immediately installing Microsoft's latest security updates, enabling AMSI integration, inventorying and removing indicators of compromise, replacing machine keys, avoiding direct exposure of servers to the internet, and blocking external access to the Central Administration interface.",
    tags_en: ["CISA", "KEV", "Microsoft", "SharePoint Server", "CVE-2026-58644", "Remote Code Execution", "Deserialization Vulnerability", "Zero-day Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177397", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/177382", lang: "ZH-TW" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/cisa-adds-exploited-sharepoint-rce-zero.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "雅培（Abbott）調查兩起資安事件：內部系統遭未授權存取與客戶門戶網站洩密疑慮",
    summary: "雅培（Abbott）確認其癌症診斷業務的內部舊版 Exact Sciences 系統曾發生未授權存取事件，並正在調查另一起關於其 LabCentral 客戶門戶網站遭入侵的指控。關於內部系統的事件，攻擊者 ShinyHunters 聲稱透過針對員工的語音釣魚（vishing）攻擊，盜取了 Microsoft Entra SSO 帳號，進而存取了內部系統。ShinyHunters 聲稱竊取了超過 3000 萬筆包含姓名、電子郵件、電話、生日等個人身份資訊（PII），以及超過 2200 萬筆病患紀錄和醫療訂單。雅培表示，該事件僅影響癌症診斷業務的有限內部系統，不影響任何業務營運或產品供應。對於 LabCentral 門戶網站的指控，雅培則澄清該網站僅存放公開的技術產品參考文件，不包含任何專有或敏感的客戶或業務資訊。公司已啟動事件應變流程並通知執法機構，並強調目前沒有證據證明數據已公開洩露。",
    tags: ["Abbott Laboratories", "ShinyHunters", "LabCentral", "vishing", "Microsoft Entra", "PII", "資料外洩"],
    title_en: "Abbott Investigates Two Security Incidents: Unauthorized Access to Internal System and Alleged Data Leak from Customer Portal",
    summary_en: "Abbott confirmed an unauthorized access incident involving its legacy internal Exact Sciences system used for cancer diagnostics, and is investigating another allegation regarding a breach of its LabCentral customer portal. Regarding the internal system incident, the attacker ShinyHunters claimed to have stolen a Microsoft Entra SSO account through a voice phishing (vishing) attack targeting employees, subsequently accessing the internal system. ShinyHunters claimed the theft of over 30 million records containing Personally Identifiable Information (PII), such as names, emails, phone numbers, and dates of birth, as well as over 22 million patient records and medical orders. Abbott stated that this incident only affected a limited internal system for cancer diagnostics and did not impact any business operations or product supply. Regarding the LabCentral portal allegations, Abbott clarified that the site only stores public technical product reference documents and does not contain any proprietary or sensitive customer or business information. The company has initiated its incident response process and notified law enforcement, emphasizing that there is currently no evidence that data has been publicly leaked.",
    tags_en: ["Abbott Laboratories", "ShinyHunters", "LabCentral", "vishing", "Microsoft Entra", "PII", "Data Leak"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/abbott-laboratories-probes-two-cyber-incidents-amid-extortion-claims", lang: "EN" }
    ]
  },
  {
    id: "20260717-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "OpenSSL 存在 HollowByte 服務拒絕漏洞：攻擊者利用 11 位元資料膨脹伺服器記憶體",
    summary: "OpenSSL 函式庫存在名為 HollowByte 的服務拒絕（DoS）漏洞。該漏洞允許未經身份驗證的攻擊者，透過發送包含 11 位元惡意負載的 TLS 連線，觸發目標伺服器記憶體膨脹，最終導致服務崩潰。攻擊原理是利用 TLS 握手訊息的 4 位元標頭，在未驗證實際資料大小的情況下，讓 OpenSSL 預先分配過大的緩衝區。攻擊者透過重複建立連線並隨機聲稱不同的訊息大小，使伺服器堆積大量未釋放的記憶體，導致系統的 Resident Set Size (RSS) 持續攀升，即使攻擊停止，伺服器仍處於記憶體膨脹狀態。OpenSSL 團隊已修補此漏洞，並將補丁回溯至多個舊版本。受影響的應用程式包括 NGINX、Apache、Node.js、Python 等所有依賴 OpenSSL 的服務。建議所有組織應立即升級 OpenSSL 函式庫至修補版本，以避免營運中斷。",
    tags: ["OpenSSL", "HollowByte", "DoS", "TLS", "服務拒絕", "記憶體膨脹"],
    title_en: "OpenSSL Contains HollowByte Denial-of-Service Vulnerability: Attackers Exploit 11-Bit Data Expansion in Server Memory",
    summary_en: "The OpenSSL library contains a Denial-of-Service (DoS) vulnerability named HollowByte. This vulnerability allows unauthenticated attackers to trigger memory expansion in a target server by sending a TLS connection containing an 11-bit malicious payload, ultimately causing the service to crash. The attack principle exploits the 4-bit header of the TLS handshake message, allowing OpenSSL to pre-allocate excessively large buffers without validating the actual data size. By repeatedly establishing connections and randomly claiming different message sizes, attackers cause the server to accumulate a large amount of unreleased memory, leading to a continuous rise in the system's Resident Set Size (RSS). Even after the attack ceases, the server remains in a state of memory exhaustion. The OpenSSL team has patched this vulnerability and has backported the patch to multiple older versions. Affected applications include NGINX, Apache, Node.js, Python, and all services that rely on OpenSSL. All organizations are advised to immediately upgrade the OpenSSL library to the patched version to prevent operational disruption.",
    tags_en: ["OpenSSL", "HollowByte", "DoS", "TLS", "Denial-of-Service", "Memory Expansion"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hollowbyte-ddos-flaw-bloats-openssl-server-memory-with-11-byte-payload", lang: "EN" }
    ]
  },
  {
    id: "20260717-035",
    trackers: ["os"],
    category: "Apple",
    title: "巴西 App Store 遭爆數十款偽裝應用程式，利用地理位置防禦規避審查以運行賭博平台",
    summary: "根據外媒 9to5Mac 的調查，巴西 App Store 的導航、旅遊和天氣等分類排行榜中，出現數十款外觀粗糙且疑似以 AI 生成動物圖標的偽裝應用程式（jacket apps）。技術分析顯示，這超過 60 款的 App 內建遠端控制路由功能，當審查人員或非巴西 IP 訪問時，會呈現與商店截圖相符的普通遊戲或工具介面；一旦偵測到巴西境內 IP，則會切換為線上賭博平台。調查更發現 GitHub 上存在相關自動化開發指令，指導如何透過不重複的核心代碼與多套介面來規避 Apple 的上架審查。此事件已引發當地監管關注，巴西司法部要求 Apple 限期說明對此類規避審查與非法賭博 App 的偵測機制。",
    tags: ["Apple", "App Store", "巴西", "賭博應用程式", "規避審查", "地理位置欺騙", "應用程式安全"],
    title_en: "Dozens of Camouflaged Apps Exposed on Brazil App Store, Utilizing Geolocation Defense to Evade Review and Run Gambling Platforms",
    summary_en: "According to an investigation by foreign media outlet 9to5Mac, dozens of poorly made camouflaged applications (jacket apps), featuring what appear to be AI-generated animal icons, have appeared in the navigation, travel, and weather category rankings of the Brazil App Store. Technical analysis reveals that these more than 60 apps possess built-in remote control routing functionality. When accessed by reviewers or non-Brazilian IPs, they present ordinary game or tool interfaces that match the store screenshots; however, once a Brazilian IP is detected, they switch to online gambling platforms. The investigation further discovered that related automated development scripts exist on GitHub, providing guidance on how to evade Apple's store review process through non-duplicate core code and multiple sets of interfaces. This incident has already drawn the attention of local regulators, with the Brazilian Ministry of Justice demanding that Apple explain its detection mechanisms for such review-evading and illegal gambling apps within a specified timeframe.",
    tags_en: ["Apple", "App Store", "Brazil", "Gambling Applications", "Review Evasion", "Geolocation Spoofing", "Application Security"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/investigation-reveals-dozens-of-disguised-gambling-apps-on-the-app-store-in-brazil", lang: "EN" }
    ]
  },
  {
    id: "20260717-036",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果因日圓貶值調漲日本 iPhone 17 與 16e 售價，最高漲幅達 11%",
    summary: "蘋果公司今日調漲日本市場的 iPhone 售價，漲幅最高達 11%，受影響機型包含最新款的 iPhone 17 系列、iPhone Air 以及 iPhone 16e。雖然官方並未公開漲價的具體原因，但外界普遍推測與近期日圓大幅貶值至40年來新低有關。匯率波動削弱了蘋果在日本銷售額折算為美元的價值，迫使其調整價格以與其他市場保持平衡。此外，蘋果上個月已因應關鍵零組件成本上揚，調漲了 Mac 和 iPad 的全球售價。本次 iPhone 漲價若僅受日本匯率影響，其他國家預計不會跟進，蘋果將於 7 月 30 日的財報會議上進一步說明定價策略。",
    tags: ["Apple", "iPhone 17", "iPhone 16e", "日本", "產品定價", "匯率波動"],
    title_en: "Apple Raises iPhone 17 and 16e Prices in Japan by Up to 11% Due to Yen Depreciation",
    summary_en: "Apple today raised iPhone prices in the Japanese market by up to 11%, with affected models including the latest iPhone 17 series, iPhone Air, and iPhone 16e. Although the company did not publicly disclose the specific reason for the price hike, outside analysts generally speculate that it is related to the Japanese yen's recent sharp depreciation to a 40-year low. Exchange rate fluctuations have weakened the value of Apple's sales in Japan when converted to US dollars, forcing it to adjust prices to maintain balance with other markets. Furthermore, Apple raised the global prices of Macs and iPads last month in response to rising costs of key components. If this iPhone price hike is solely affected by the Japanese exchange rate, other countries are not expected to follow suit. Apple will further explain its pricing strategy during its earnings call on July 30.",
    tags_en: ["Apple", "iPhone 17", "iPhone 16e", "Japan", "Product Pricing", "Exchange Rate Fluctuations"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-increases-iphone-prices-in-japan-by-up-to-11", lang: "EN" }
    ]
  },
  {
    id: "20260717-037",
    trackers: ["os"],
    category: "Apple",
    title: "舊金山檢察長要求蘋果與 Google 下架 8 款非自願 AI 脫衣應用程式",
    summary: "舊金山城市檢察長向蘋果與 Google 發出停止並終止函，要求下架應用程式商店內共 13 款非自願 AI 脫衣（nudify）應用程式，其中蘋果 App Store 佔 8 款，Google Play Store 佔 5 款。這些軟體常偽裝成換臉工具，實則利用 AI 生成未經同意的深偽色情影像，且兩大平台涉嫌從其內購機制中獲利，違反加州禁止協助製作深偽色情物品的法律。蘋果隨後回應，其審查指南嚴格禁止此類內容，目前已下架其中 3 款並著手終止其開發者帳號，另有 4 款正進行違規溝通，若未改善將予以移除。官方呼籲用戶可透過檢舉管道主動回報違規軟體。",
    tags: ["Apple", "Google", "App Store", "AI 脫衣應用程式", "Deepfake", "深偽色情", "資訊安全", "隱私保護"],
    title_en: "San Francisco City Attorney Demands Apple and Google Remove 8 Involuntary AI Nudify Applications",
    summary_en: "The San Francisco City Attorney has issued cease-and-desist letters to Apple and Google, demanding the removal of a total of 13 involuntary AI nudify applications from their app stores, with 8 on Apple's App Store and 5 on the Google Play Store. These applications often disguise themselves as face-swapping tools but actually utilize AI to generate non-consensual deepfake pornographic images. Furthermore, both platforms are accused of profiting from these apps through their in-app purchase mechanisms, which violates California laws prohibiting assistance in the production of deepfake pornography. Apple subsequently responded, stating that its review guidelines strictly prohibit such content; it has already removed 3 of the apps and is proceeding to terminate the respective developer accounts, while another 4 are undergoing non-compliance communication and will be removed if no improvements are made. Officials urge users to proactively report non-compliant software through reporting channels.",
    tags_en: ["Apple", "Google", "App Store", "AI nudify applications", "Deepfake", "deepfake pornography", "information security", "privacy protection"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-ordered-to-remove-8-ai-nonconsensual-undressing-apps-from-the-app-store", lang: "EN" },
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/apple-google-must-stop-profiting-off-ai-nudify-apps-san-francisco-ag-says", lang: "EN" }
    ]
  },
  {
    id: "20260717-038",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 27 公開測試版，Tech 專家解析新功能與 Siri AI 發展趨勢",
    summary: "Apple 正式推出 iOS 27 公開測試版，引起廣泛關注。科技評論員 Jeff 與 Fernando 針對該測試版展開深入探討，分析多項全新功能，並就使用者是否應將其安裝於主力裝置提供實務建議。除了系統更新外，探討內容亦涵蓋 ChatGPT 與 Siri AI 之間競爭、OpenAI 與 Apple 的競合關係，以及電信商資助型解鎖 iPhone 的終結、九款即將推出的新表情符號等市場與產品動態。本期內容亦提及 Bitwarden 密碼管理器，其具備 Apple Watch 驗證器整合、Safari 與 iOS 應用程式安全自動填入等企業級安全工具，協助使用者安全管理憑證。",
    tags: ["Apple", "iOS 27", "Siri AI", "ChatGPT", "測試版", "密碼管理"],
    title_en: "Apple Releases iOS 27 Public Beta: Tech Experts Analyze New Features and Siri AI Development Trends",
    summary_en: "Apple has officially launched the iOS 27 public beta, drawing widespread attention. Tech commentators Jeff and Fernando dive deep into this beta version, analyzing multiple completely new features and providing practical advice on whether users should install it on their primary devices. In addition to system updates, the discussion also covers the competition between ChatGPT and Siri AI, the co-opetition relationship between OpenAI and Apple, as well as market and product dynamics such as the end of carrier-subsidized iPhone unlocking and nine upcoming new emojis. This edition also mentions the Bitwarden password manager, which features enterprise-grade security tools including Apple Watch authenticator integration and secure autofill for Safari and iOS applications to help users securely manage credentials.",
    tags_en: ["Apple", "iOS 27", "Siri AI", "ChatGPT", "Beta", "Password Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/9to5mac-overtime-073-ios-27-public-beta", lang: "EN" }
    ]
  },
  {
    id: "20260717-039",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布調漲 Apple Music 與 Apple One 訂閱方案價格",
    summary: "Apple 於今日宣布調漲美國及其他地區的 Apple Music 與部分 Apple One 訂閱方案價格。其中 Apple Music 個人方案每月費用由 10.99 美元提高至 11.99 美元，家庭與學生方案亦同步調整；Apple One 的家庭與頂級方案每月亦調升 2 美元。Apple 官方對此表示，調價主因在於版權授權成本持續上升。本次調整為該音訊串流服務近四年來首度漲價，由於此事件純屬商業定價策略變更，並不涉及任何系統資訊安全漏洞、CVE 編號或技術性攻擊威脅，因此無相關資安修補建議與技術數據。",
    tags: ["Apple", "Apple Music", "Apple One", "訂閱服務", "價格調整", "版權成本"],
    title_en: "Apple Announces Price Increases for Apple Music and Apple One Subscription Plans",
    summary_en: "Apple announced today that it is raising the prices of Apple Music and certain Apple One subscription plans in the United States and other regions. Among the changes, the Apple Music Individual plan monthly fee will increase from $10.99 to $11.99, with Family and Student plans adjusted accordingly; Apple One's Family and Premier plans will also increase by $2 per month. Apple officially stated that the primary reason for the price adjustment is the continuous rise in licensing costs. This adjustment marks the first price hike for the audio streaming service in nearly four years. As this event is purely a business pricing strategy change, it does not involve any system information security vulnerabilities, CVE IDs, or technical attack threats; therefore, there are no related cybersecurity patching recommendations or technical data.",
    tags_en: ["Apple", "Apple Music", "Apple One", "Subscription Services", "Price Adjustment", "Licensing Costs"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-raises-prices-for-apple-music-and-apple-one-subscriptions", lang: "EN" }
    ]
  },
  {
    id: "20260717-040",
    trackers: ["os"],
    category: "Apple",
    title: "OpenAI 更新 Mac 版 ChatGPT 應用程式，修正因改版導致的對話與專案選單消失問題",
    summary: "OpenAI 針對日前 Mac 版 ChatGPT 應用程式改版所引發的爭議釋出更新。先前該公司推出結合 ChatGPT、Codex 與全新 Work 代理程式的「超級應用程式」，卻將原生 Mac 用戶端改為龐大的 Electron 架構，並將標準的聊天功能邊欄與對話歷史紀錄隱藏，導致用戶強烈不滿。本次更新於視窗上方新增切換鍵，恢復了 Chat 與 Work 的直接切換，並在側邊欄選單中提供 ChatGPT 與 Codex 的切換功能。本事件未涉及特定 CVE 漏洞編號與 CVSS 分數，主要為使用者介面與架構變更之實務影響。建議 Mac 用戶儘速將應用程式更新至最新版本以恢復正常操作體驗。",
    tags: ["OpenAI", "ChatGPT", "Mac", "應用程式更新", "Electron", "Codex", "使用者體驗"],
    title_en: "OpenAI Updates Mac ChatGPT App to Fix Missing Conversation and Project Menu Issues Caused by Version Change",
    summary_en: "OpenAI released an update addressing controversies stemming from the recent overhaul of the Mac ChatGPT application. Previously, the company launched a 'super app' combining ChatGPT, Codex, and a new Work agent. However, it transitioned the native Mac client to a massive Electron architecture, which concealed the standard chat sidebar and conversation history, leading to strong user dissatisfaction. This update adds a toggle key at the top of the window, restoring direct switching between Chat and Work, and provides a switch for ChatGPT and Codex within the sidebar menu. This incident does not involve specific CVE vulnerability IDs or CVSS scores; it relates primarily to the practical impact of UI and architectural changes. Mac users are advised to update the application to the latest version promptly to restore normal operational experience.",
    tags_en: ["OpenAI", "ChatGPT", "Mac", "App Update", "Electron", "Codex", "User Experience"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/openai-fixes-chat-access-in-the-chatgpt-app-for-mac", lang: "EN" }
    ]
  },
  {
    id: "20260717-041",
    trackers: ["os"],
    category: "Apple",
    title: "美國司法部與蘋果公司就 2024 年智慧型手機壟斷反托拉斯訴訟展開和解談判",
    summary: "根據外媒最新報導，美國司法部（DOJ）與蘋果公司正針對 2024 年發起的反托拉斯訴訟進行初步的和解談判。該起訴訟最初由司法部於兩年前提出，指控蘋果公司在智慧型手機市場實施壟斷行為，限制競爭並損害消費者利益。儘管蘋果在過去兩年中多次對此案表示強烈反對與抗辯，並認為該指控威脅到其核心價值，但目前的談判進展顯示雙方正尋求潛在的解決方案。由於本案為反壟斷法律訴訟，並非軟體安全漏洞漏洞，因此未涉及 CVE 編號、CVSS 評分或特定技術攻擊向量。目前具體的和解條款與實務修補建議均未公開。",
    tags: ["Apple", "美國司法部", "反托拉斯", "智慧型手機壟斷", "訴訟和解"],
    title_en: "U.S. DOJ and Apple Begin Settlement Negotiations over 2024 Smartphone Monopoly Antitrust Lawsuit",
    summary_en: "According to the latest reports from foreign media, the U.S. Department of Justice (DOJ) and Apple are engaging in preliminary settlement negotiations regarding the antitrust lawsuit initiated in 2024. The lawsuit was originally filed by the DOJ two years ago, accusing Apple of engaging in monopolistic behavior in the smartphone market, restricting competition and harming consumer interests. Although Apple has repeatedly expressed strong opposition and defense against the case over the past two years, arguing that the allegations threaten its core values, the current progress in negotiations indicates that both sides are seeking a potential resolution. Because this case is an antitrust legal lawsuit rather than a software security vulnerability, it does not involve CVE IDs, CVSS scores, or specific technical attack vectors. At present, specific settlement terms and practical remediation recommendations have not been disclosed.",
    tags_en: ["Apple", "DOJ", "Antitrust", "Smartphone Monopoly", "Litigation Settlement"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-in-talks-to-settle-doj-antitrust-lawsuit-per-report", lang: "EN" }
    ]
  },
  {
    id: "20260717-042",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Wallet 數位車鑰功能傳將導入中國長城汽車（GWM）旗下 Tank 車系",
    summary: "根據最新被發現的蘋果後台程式碼顯示，Apple 準備擴大其 Wallet（錢包）App 中的數位車鑰（Car Keys）功能支援，預計近期將導入中國大型汽車製造商長城汽車（GWM）旗下的 Tank（坦克）車系。雖然多款 Tank 車型（如 Tank 300、400、500、700）以及長城汽車旗下的哈弗（Haval）、歐拉（Ora）、魏牌（Wey）等品牌早已支援 Apple CarPlay，但先前皆尚未引進能讓車主透過 iPhone 或 Apple Watch 進行車輛上鎖、解鎖及發動的數位車鑰服務。此項新進展代表蘋果正加速推動該功能的普及，近期也傳出福斯汽車（Volkswagen）將加入支援。目前全球雖有超過 800 款車型支援 CarPlay，但僅 52 款支援數位車鑰，官方正持續擴展與各大車廠的合作生態系。",
    tags: ["Apple", "Car Keys", "Apple Wallet", "長城汽車", "GWM", "Tank", "車聯網安全"],
    title_en: "Apple Wallet Digital Car Key Feature Reportedly Coming to Great Wall Motor (GWM) Tank Series in China",
    summary_en: "According to newly discovered Apple backend code, Apple is preparing to expand support for its digital Car Keys feature within the Wallet app, with an expected rollout in the near future to the Tank series under Great Wall Motor (GWM), a major Chinese automaker. Although multiple Tank models (such as the Tank 300, 400, 500, and 700) as well as GWM's Haval, Ora, and Wey brands have long supported Apple CarPlay, none had previously introduced the digital car key service that allows owners to lock, unlock, and start their vehicles using an iPhone or Apple Watch. This new development signifies that Apple is accelerating the adoption of this feature, with recent reports also suggesting that Volkswagen will soon add support. While over 800 vehicle models worldwide currently support CarPlay, only 52 support digital car keys, and the company is continuously expanding its cooperative ecosystem with major automakers.",
    tags_en: ["Apple", "Car Keys", "Apple Wallet", "長城汽車", "GWM", "Tank", "IoV Security"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/car-keys-in-apple-wallet-reportedly-coming-to-major-chinese-automaker", lang: "EN" }
    ]
  },
  {
    id: "20260717-043",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV 釋出體育紀錄片《The Dynasty: UConn Huskies》首支預告片，預計 8 月 21 日正式開播",
    summary: "Apple TV 發布了三集紀錄片《The Dynasty: UConn Huskies》的首款預告片。該片由 Matthew Hamachek 與 Erica Sashin 執導，深入探討美國康乃狄克大學（UConn）女子籃球隊的輝煌歷史與崛起過程。內容包含 2025 年全國冠軍球隊的獨家訪談、未公開的珍貴檔案畫面，展現球員與教練在追求卓越時所面臨的壓力與犧牲。此紀錄片將於 2026 年 8 月 21 日首播，進一步豐富 Apple TV 的運動類影音內容。由於本篇報導屬於串流媒體與影視娛樂新聞，並未涉及任何資訊安全漏洞、網路攻擊、CVE 編號或技術修補建議。",
    tags: ["Apple TV", "UConn Huskies", "體育紀錄片", "影視娛樂", "康乃狄克大學"],
    title_en: "Apple TV releases first trailer for sports documentary 'The Dynasty: UConn Huskies,' scheduled to premiere on August 21",
    summary_en: "Apple TV has released the first trailer for the three-part documentary series, 'The Dynasty: UConn Huskies.' Directed by Matthew Hamachek and Erica Sashin, the series delves into the glorious history and rise of the UConn women's basketball team. The content includes exclusive interviews with the 2025 national championship team and previously unseen archival footage, showcasing the pressure and sacrifice faced by players and coaches in their pursuit of excellence. The documentary is set to premiere on August 21, 2026, further enriching Apple TV's sports video content. As this report pertains to streaming media and film entertainment news, it does not involve any information security vulnerabilities, cyberattacks, CVE numbers, or technical remediation advice.",
    tags_en: ["Apple TV", "UConn Huskies", "Sports Documentary", "Film Entertainment", "University of Connecticut"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-tv-drops-first-trailer-for-the-dynasty-uconn-huskies", lang: "EN" }
    ]
  },
  {
    id: "20260717-044",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 釋出 iOS 27 公開測試版，升級 CarPlay 導航穩定性、Siri AI 整合與全新影音功能",
    summary: "Apple 正式推出 iOS 27 公開測試版，針對其車載系統 CarPlay 進行多項功能升級與效能優化。在技術與實務影響方面，本次更新整合了全新 Siri AI，允許駕駛透過語音搜尋電子郵件或簡訊中的地址並直接進行導航，顯著提升免持控制的實用性。此外，系統改善了核心底層效能，主要修正並提升了 GPS 導航航向的精準度，同時強化無線 CarPlay 連線的穩定性，解決過往連線中斷的問題。介面部分則新增「播放中」迷你播放器與時間軸進度條，並開放開發者設計車用專屬影片應用程式（需汽車製造商配合支援）。建議有意測試新功能的用戶或開發人員，可將相容裝置升級至最新測試版本。",
    tags: ["Apple", "iOS 27", "CarPlay", "Siri AI", "GPS 導航", "車載系統"],
    title_en: "Apple Releases iOS 27 Public Beta, Upgrading CarPlay Navigation Stability, Siri AI Integration, and Brand New Audio-Visual Features",
    summary_en: "Apple has officially launched the iOS 27 public beta, featuring multiple functional upgrades and performance optimizations for its in-car system, CarPlay. Regarding technical and practical impacts, this update integrates the brand new Siri AI, allowing drivers to voice-search for addresses within emails or text messages and navigate directly, significantly enhancing the practicality of hands-free control. Furthermore, the system improves core underlying performance, primarily fixing and improving the accuracy of GPS navigation headings while strengthening the stability of wireless CarPlay connections to resolve past disconnection issues. For the interface, a 'Now Playing' mini-player and timeline progress bar have been added, and developers are now permitted to design dedicated in-car video applications (requiring support and cooperation from car manufacturers). Users or developers interested in testing the new features are recommended to upgrade compatible devices to the latest beta version.",
    tags_en: ["Apple", "iOS 27", "CarPlay", "Siri AI", "GPS Navigation", "In-Vehicle Infotainment System"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/the-best-carplay-upgrades-to-try-in-the-ios-27-public-beta", lang: "EN" }
    ]
  },
  {
    id: "20260717-045",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果重返全球市值第一寶座，股價大漲直逼 5 兆美元大關並加速執行執行長交接",
    summary: "蘋果公司於週五盤中交易中正式超越 NVIDIA，重新奪回全球市值最高公司的寶座。儘管先前因全球記憶體短缺導致 Mac 與 iPad 等產品進行前所未有的全面調漲，一度引發股價短暫下跌，但經過一週的強勁交易後已全面收復失土。目前蘋果市值已觸及 4.9 兆美元，正朝 5 兆美元的重大里程碑邁進。在公司營運方面，蘋果目前正進行高層人事交接，現任執行長 Tim Cook 將於八月正式卸任並轉任董事會執行主席，職位由 John Ternus 接任。本篇報導屬於市場與產業動態，不涉及特定系統漏洞、CVE 編號或 CVSS 評級等技術安全性修補資訊。",
    tags: ["Apple", "NVIDIA", "市值", "Tim Cook", "John Ternus", "記憶體短缺"],
    title_en: "Apple Reclaims Global Market Cap Throne, Stock Price Soars Nearing $5 Trillion Mark Amid CEO Transition",
    summary_en: "Apple officially surpassed NVIDIA during Friday's trading session, reclaiming its position as the world's most valuable company. Although the stock experienced a temporary dip previously due to unprecedented global price hikes for products like Mac and iPad, stemming from global memory shortages, it has since fully recovered its ground after a week of strong trading. Apple's current market capitalization has reached $4.9 trillion, moving toward the significant milestone of $5 trillion. Regarding corporate operations, Apple is currently undergoing a high-level executive transition: current CEO Tim Cook will officially step down in August and transition to the role of Chairman of the Board, with John Ternus taking over the CEO position. This report covers market and industry dynamics and does not involve specific system vulnerabilities, CVE IDs, or CVSS rating technical security patch information.",
    tags_en: ["Apple", "NVIDIA", "Market Cap", "Tim Cook", "John Ternus", "Memory Shortage"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-reclaims-most-valuable-company-title-from-nvidia-as-it-barrels-toward-5t", lang: "EN" }
    ]
  },
  {
    id: "20260717-046",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果指控前員工竊取商業機密，向約 40 名轉職 OpenAI 之員工發出法律存證信函",
    summary: "蘋果公司（Apple）上週對人工智慧巨頭 OpenAI 及硬體設計公司 io Products 提起訴訟，指控其前員工涉嫌竊取內部商業機密以利益化 OpenAI。根據《金融時報》最新報導，蘋果已向大約 40 名現職於 OpenAI 的前蘋果員工直接發送法律存證信函（preservation letters）。此舉係因蘋果懷疑商業機密外洩的範圍，可能已超越最初訴訟文件當中所點名的特定人員。存證信函正式要求這些員工必須妥善保存所有可能與本案訴訟相關的個人文件、紀錄及潛在證據。目前 OpenAI 方面則回應表示，尚未看到任何支持蘋果這項機密竊取指控的實質證據。",
    tags: ["Apple", "OpenAI", "商業機密", "法律訴訟", "存證信函", "io Products"],
    title_en: "Apple Accuses Former Employees of Stealing Trade Secrets, Sending Legal Preservation Letters to Around 40 Employees Who Transferred to OpenAI",
    summary_en: "Apple filed a lawsuit last week against AI giant OpenAI and hardware design firm io Products, alleging that former employees suspected of stealing internal trade secrets did so to benefit OpenAI. According to the latest report by the Financial Times, Apple has directly sent legal preservation letters to approximately 40 former Apple employees currently working at OpenAI. This move comes as Apple suspects that the scope of the trade secret leaks may extend beyond the specific individuals named in the initial lawsuit documents. The preservation letters formally request that these employees must properly preserve all personal documents, records, and potential evidence that could be relevant to this lawsuit. Meanwhile, OpenAI responded by stating that it has not yet seen any substantive evidence supporting Apple's allegations of secret theft.",
    tags_en: ["Apple", "OpenAI", "Trade secrets", "Lawsuit", "Preservation letters", "io Products"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-sends-legal-letters-to-former-employees-now-at-openai", lang: "EN" }
    ]
  },
  {
    id: "20260717-047",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究者釋出 Windows Zero-day 漏洞 LegacyHive，PoC 可讓非管理員權限提升至執行程式碼",
    summary: "資安研究員 Nightmare Eclipse 公布了一個名為 LegacyHive 的 Windows zero-day 漏洞 PoC。此漏洞利用了 Windows User Profile Service 中的安全缺陷，目前尚未分配 CVE 編號。雖然 PoC 程式碼經過修改，要求攻擊者提供標準使用者憑證和第三個使用者名稱，但成功利用後，非管理員使用者仍可修改 Class Registry Hive，並在管理員帳號登入受害系統時，實現自動程式碼執行。專家分析指出，這類攻擊可讓攻擊者將惡意程式碼與常用檔案類型（如 .txt）關聯，甚至無需使用者互動即可執行。此漏洞的 PoC 已被證實有效，並已為 Microsoft Defender for Endpoint (MDE) 提供了偵測查詢。微軟已表示知悉此漏洞，並承諾積極調查，同時強調支持協調式漏洞揭露標準。",
    tags: ["Windows", "LegacyHive", "Zero-day", "User Profile Service", "PoC", "權限提升"],
    title_en: "Researcher Releases Windows Zero-day Vulnerability LegacyHive; PoC Allows Non-Administrator Privilege Escalation to Code Execution",
    summary_en: "Security researcher Nightmare Eclipse has published a Proof-of-Concept (PoC) for a Windows zero-day vulnerability named LegacyHive. This vulnerability exploits a security flaw in the Windows User Profile Service and has not yet been assigned a CVE ID. Although the PoC code is modified to require the attacker to provide standard user credentials and a third user name, successful exploitation allows a non-administrator user to modify the Class Registry Hive, achieving automatic code execution when an administrator logs into the compromised system. Experts analyze that this type of attack can allow an attacker to associate malicious code with common file types (such as .txt), potentially executing without user interaction. The PoC for this vulnerability has been proven effective and a detection query has been provided for Microsoft Defender for Endpoint (MDE). Microsoft has acknowledged awareness of this vulnerability and committed to an active investigation, while emphasizing support for coordinated vulnerability disclosure standards.",
    tags_en: ["Windows", "LegacyHive", "Zero-day", "User Profile Service", "PoC", "Privilege Escalation"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-windows-legacyhive-zero-day-exploit-grants-hackers-admin-access", lang: "EN" }
    ]
  },
  {
    id: "20260717-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告聯邦機構：緊急修補FortiSandbox兩處遭積極利用漏洞，包含CVE-2026-39808與CVE-2026-25089",
    summary: "美國網路安全基礎設施安全局（CISA）已要求政府機構，必須優先修補Fortinet FortiSandbox威脅偵測平台上的兩處已遭積極利用的漏洞。這兩處關鍵嚴重漏洞分別為CVE-2026-39808和CVE-2026-25089。攻擊者可透過低複雜度的命令注入（Command Injection）攻擊，在未經身份驗證的情況下遠端執行未授權程式碼，且無需使用者互動。儘管Fortinet尚未正式標記這些漏洞為攻擊利用，但情報公司Defused已揭露攻擊者已在野外濫用這些漏洞。CISA已確認這些漏洞正在積極利用，並根據《約束性操作指令》（BOD）26-04，要求美國聯邦機構必須在特定日期前完成修補。文章指出，Fortinet的漏洞經常被用於網路間諜活動和勒索軟體攻擊，建議機構應立即升級所有受影響的FortiSandbox部署至最新版本，並強化資安防禦層級。",
    tags: ["CISA", "Fortinet", "FortiSandbox", "CVE-2026-39808", "CVE-2026-25089", "命令注入"],
    title_en: "CISA Warns Federal Agencies: Patch FortiSandbox for Two Actively Exploited Vulnerabilities, Including CVE-2026-39808 and CVE-2026-25089",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has mandated that government agencies must prioritize patching two actively exploited vulnerabilities in the Fortinet FortiSandbox threat detection platform. These two critical vulnerabilities are CVE-2026-39808 and CVE-2026-25089. Attackers can exploit these vulnerabilities via low-complexity Command Injection attacks to remotely execute unauthorized code without authentication or user interaction. Although Fortinet has not officially marked these vulnerabilities as being exploited in the wild, the intelligence company Defused has revealed that attackers are actively abusing these flaws. CISA has confirmed that these vulnerabilities are being actively exploited and, under the Binding Operational Directive (BOD) 26-04, requires U.S. federal agencies to complete patching by a specific date. The article notes that Fortinet's vulnerabilities are frequently used in cyber espionage and ransomware attacks, advising agencies to immediately upgrade all affected FortiSandbox deployments to the latest version and strengthen their cybersecurity defenses.",
    tags_en: ["CISA", "Fortinet", "FortiSandbox", "CVE-2026-39808", "CVE-2026-25089", "Command Injection"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cisa-warns-feds-to-patch-exploited-fortinet-fortisandbox-flaws-by-sunday", lang: "EN" }
    ]
  },
  {
    id: "20260717-049",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "JavaScript保護工具Jscrambler之NPM套件遭入侵，攻擊者透過GitHub Actions權杖發布惡意版本",
    summary: "JavaScript程式碼保護工具開發商Jscrambler公布其NPM套件於2024年7月11日遭入侵的事故報告。調查指出，攻擊者首先入侵開發團隊的一臺電腦，取得GitHub SSH金鑰與NPM發布憑證，進而獲得GitHub儲存庫的寫入權限，並透過GitHub Actions工作流程外洩發布套件所需的權杖。隨後，攻擊者濫用此權杖在NPM儲存庫發布遭竄改的惡意版本。雖然開發團隊在數秒內便偵測到異狀，但因初期誤判攻擊者使用的憑證類型，導致撤銷後攻擊者仍能持續發布新惡意版本。直到團隊確認並註銷正確的GitHub Actions權杖，才成功封鎖攻擊。此事故未影響其旗下產品與客戶資料，惡意套件雖被下載1,614次，但多數為資安研究員下載，目前無客戶受害通報。建議開發者全面檢查並撤銷受影響期間的憑證，加強CI/CD管線與端點設備的安全控制。",
    tags: ["Jscrambler", "NPM套件投毒", "GitHub Actions", "供應鏈攻擊", "憑證外洩", "CI/CD安全"],
    title_en: "JavaScript protection tool Jscrambler's NPM package compromised; attacker publishes malicious versions via GitHub Actions token",
    summary_en: "JavaScript code protection tool developer Jscrambler released an incident report regarding a compromise of its NPM package on July 11, 2024. The investigation indicated that the attacker first compromised a development team computer, obtaining a GitHub SSH key and an NPM publishing credential, thereby gaining write access to the GitHub repository and exfiltrating the token required to publish the package via a GitHub Actions workflow. Subsequently, the attacker abused this token to publish tampered malicious versions to the NPM repository. Although the development team detected the anomaly within seconds, an initial misjudgment of the credential type used by the attacker allowed the attacker to continue publishing new malicious versions even after revocations. The attack was successfully blocked only after the team confirmed and revoked the correct GitHub Actions token. This incident did not affect its products or customer data; although the malicious package was downloaded 1,614 times, most downloads were by cybersecurity researchers, and there are currently no reports of affected customers. Developers are advised to comprehensively inspect and revoke credentials from the affected period, and to strengthen security controls for CI/CD pipelines and endpoint devices.",
    tags_en: ["Jscrambler", "NPM package poisoning", "GitHub Actions", "Supply chain attack", "Credential leak", "CI/CD security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177420", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-050",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Jscrambler 之 NPM 套件遭駭客植入惡意掛鉤，上傳多個版本以傳播 Rust 竊資軟體",
    summary: "在 GitHub 發布 NPM 12 大改版以防範供應鏈攻擊的 3 天後，JavaScript 程式碼保護工具 Jscrambler 的 NPM 套件於 2026 年 7 月 11 日遭到入侵。攻擊者在未經授權的情況下，於 3 小時內密集發布了 8.14.0、8.16.0、8.17.0、8.18.0 和 8.20.0 等多個惡意版本。一旦開發者下載安裝，套件內含的惡意掛鉤便會引入新檔案，並依據受害系統平台（Windows、macOS、Linux），透過混淆處理的 CSI 容器載入專屬二進位檔案，最終植入 Rust 竊資軟體。資安公司 Socket 偵測到此異常並隨即通報。專家建議開發人員應儘速將套件更新至最新的 8.22.0 版並固定版本，若不慎安裝問題版本則需進行全面環境檢查。",
    tags: ["Jscrambler", "NPM套件", "供應鏈攻擊", "套件投毒", "竊資軟體", "Socket", "JavaScript"],
    title_en: "Jscrambler's NPM Package Compromised with Malicious Hooks, Multiple Versions Uploaded to Distribute Rust Info-Stealer",
    summary_en: "Just 3 days after GitHub released the major NPM 12 upgrade to defend against supply chain attacks, the NPM package for JavaScript code protection tool Jscrambler was compromised on July 11, 2026. Attackers unauthorizedly published multiple malicious versions—including 8.14.0, 8.16.0, 8.17.0, 8.18.0, and 8.20.0—in a concentrated 3-hour window. Once downloaded and installed by developers, the malicious hooks embedded within the package introduce new files and leverage obfuscated CSI containers to load platform-specific binaries based on the victim's OS (Windows, macOS, Linux), ultimately implanting a Rust info-stealer. Cybersecurity firm Socket detected this anomaly and issued an immediate alert. Experts advise developers to upgrade to the latest version 8.22.0 as soon as possible and pin the version, and to conduct a comprehensive environment audit if any compromised versions were mistakenly installed.",
    tags_en: ["Jscrambler", "NPM package", "Supply chain attack", "Package poisoning", "Info-stealer", "Socket", "JavaScript"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177419", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-051",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "開源供應鏈遭殃！資安業者揭露 Vite 生態系遭 ViteVenom 惡意 npm 套件滲透",
    summary: "資安業者 Checkmarx 揭露一起名為 ViteVenom 的軟體供應鏈攻擊，駭客針對前端開發工具 Vite 的生態系，在 npm 平台上發布了 7 個惡意套件（如 @uw010010/vite-tree、@vite-tab/tab 等），透過範圍名稱（scoped package names）刻意冒充官方命名空間。該攻擊為 ChainVeil 活動的延伸，由名為 SuccessKey 的駭客組織主導。技術上，惡意代碼不會在安裝時執行，而是在導入（import）時觸發。它利用 Tron、Aptos 和幣安智能鏈（BSC）等區塊鏈作為四層式 C2 架構，將惡意負載指針存於區塊鏈交易數據中以規避網域查封，最終投放具備遠端存取木馬（RAT）、憑證竊取與持久化後門功能的惡意軟體。修補建議受影響開發者應立即移除相關套件、審查依賴項、更換所有憑證，並檢查 .bashrc 等設定檔是否遭到未授權修改。",
    tags: ["Checkmarx", "ViteVenom", "ChainVeil", "npm", "供應鏈攻擊", "SuccessKey", "區塊鏈 C2"],
    title_en: "Open-Source Supply Chain Attacked! Cybersecurity Firm Exposes Vite Ecosystem Infiltrated by ViteVenom Malicious npm Packages",
    summary_en: "Cybersecurity firm Checkmarx has exposed a software supply chain attack named ViteVenom, where hackers targeted the ecosystem of the front-end development tool Vite by publishing 7 malicious packages on the npm platform (such as @uw010010/vite-tree, @vite-tab/tab, etc.), deliberately mimicking the official namespace using scoped package names. This attack is an extension of the ChainVeil campaign and is spearheaded by a hacker group named SuccessKey. Technically, the malicious code does not execute during installation, but is triggered upon import. It utilizes blockchains such as Tron, Aptos, and Binance Smart Chain (BSC) as a four-tier C2 architecture, storing malicious payload pointers within blockchain transaction data to evade domain take downs, ultimately deploying malware equipped with remote access trojan (RAT), credential theft, and persistence backdoor capabilities. Remediation advice: Affected developers should immediately remove the relevant packages, review dependencies, rotate all credentials, and check configuration files such as .bashrc for unauthorized modifications.",
    tags_en: ["Checkmarx", "ViteVenom", "ChainVeil", "npm", "Supply Chain Attack", "SuccessKey", "Blockchain C2"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/seven-malicious-vite-npm-packages-use.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-052",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 傳將升級人臉解鎖技術，Pixel 11a 規格與代號曝光",
    summary: "最新供應鏈傳聞指出，即將發布的 Google Pixel 11 預計將大幅改良人臉解鎖功能，提供更快速、安全且在低光源環境下更精準的驗證體驗，惟目前尚無法確認此項升級是基於軟體演算法優化或已克服紅外線（IR）硬體技術瓶頸。此外，次代中階機型 Pixel 11a（代號 Formosan）的規格亦同步流出，該機款傳出將搭載最新的 Tensor G6 處理器與 Titan M3 安全晶片，配備 8 GB 記憶體與 4,870 mAh 電池，並改用聯發科 M90 調變解調器（Modem）。實務上，相關晶片與生物辨識技術的更新將直接影響未來 Android 生態系的硬體安全架構，建議資安人員與開發者持續關注 Google 官方安全公告以獲取確切技術細節。",
    tags: ["Google", "Pixel 11", "Pixel 11a", "人臉解鎖", "Tensor G6", "Titan M3", "智慧型手機"],
    title_en: "Google Pixel 11 Rumored to Upgrade Face Unlock Technology; Pixel 11a Specs and Codename Exposed",
    summary_en: "The latest supply chain rumors indicate that the upcoming Google Pixel 11 is expected to significantly improve its Face Unlock feature, providing a faster, more secure, and more accurate verification experience in low-light environments. However, it currently cannot be confirmed whether this upgrade is based on software algorithm optimization or if it has overcome infrared (IR) hardware technology bottlenecks. Furthermore, the specifications for the next-generation mid-range model, Pixel 11a (codename Formosan), have leaked simultaneously. The device is rumored to feature the latest Tensor G6 processor and Titan M3 security chip, equipped with 8 GB of RAM and a 4,870 mAh battery, and will switch to a MediaTek M90 modem. In practice, updates to these chips and biometric technologies will directly impact the future hardware security architecture of the Android ecosystem. Cybersecurity personnel and developers are advised to monitor official Google security advisories for definitive technical details.",
    tags_en: ["Google", "Pixel 11", "Pixel 11a", "Face Unlock", "Tensor G6", "Titan M3", "Smartphone"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/pixel-11-face-unlock-11a-tensor-g6", lang: "EN" }
    ]
  },
  {
    id: "20260717-053",
    trackers: ["os"],
    category: "Android",
    title: "Google 發表全新 3D Noto Emoji 設計：導入 AI 對比度工具並開源 3D 模型",
    summary: "為慶祝世界表情符號日，Google 深入解析其全新 3D 表情符號（Noto Emoji 3D）的設計歷程。Google 重新設計了全數 3,977 個表情符號角色，強調呈現維度與趣味性而非追求過度擬真的寫實感。在設計過程中，Google 進行了大規模使用者研究以避免調整引發誤解，並解決了 2D 轉 3D 的結構性空間問題。特別的是，針對深色模式下深膚色表情符號辨識度低的問題，Google 開發了一款基於 AI 的對比度分析工具，能在像素層級檢測對比度過低的狀況並提供修補建議。這套全新 3D 表情符號將於今年稍晚首發於 Pixel 手機，隨後推向所有 Google 產品。所有角色均以 .OBJ 檔案格式作為開源 3D 模型提供。",
    tags: ["Google", "Noto Emoji 3D", "Android", "Pixel", "AI工具", "開源模型", "使用者經驗"],
    title_en: "Google Unveils All-New 3D Noto Emoji Design: Introduces AI Contrast Tool and Open-Sources 3D Models",
    summary_en: "To celebrate World Emoji Day, Google shared an in-depth look at the design journey behind its new 3D emojis (Noto Emoji 3D). Google redesigned all 3,977 emoji characters, emphasizing dimension and playfulness rather than pursuing hyper-realistic photorealism. Throughout the design process, Google conducted extensive user research to prevent modifications from causing misunderstandings, and resolved structural spatial challenges involved in transitioning from 2D to 3D. Notably, addressing the low visibility of dark skin tone emojis in dark mode, Google developed an AI-based contrast analysis tool capable of detecting insufficient contrast at the pixel level and providing remediation suggestions. This brand-new set of 3D emojis will debut on Pixel phones later this year before rolling out to all Google products. All characters are available as open-source 3D models in the .OBJ file format.",
    tags_en: ["Google", "Noto Emoji 3D", "Android", "Pixel", "AI Tools", "Open-Source Models", "User Experience"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/google-3d-emoji-design", lang: "EN" }
    ]
  },
  {
    id: "20260717-054",
    trackers: ["os"],
    category: "Android",
    title: "Google Photos 推出 Android 版懸浮底部導航欄更新，採用 Material 3 設計",
    summary: "Google 開始向 Android 用戶廣泛推送 Google Photos（版本 7.82 及 7.83）的全新懸浮底部導航欄介面設計。此次更新將原本固定於螢幕底部的導航欄改為懸浮膠囊狀（floating pill），整合了相片、珍藏與建立等功能標籤，並加入 Gemini 驅動的 Ask Photos 搜尋入口，釋放更多畫面空間。同時，日期標示也改為頂部懸浮呈現，用戶可透過右上角選單調整顯示設定。此設計與 Google Chat 等應用的 Material 3 Expressive 規範相近，先前已於 iOS 平台上線，目前正透過伺服器端更新陸續覆蓋所有 Android 用戶。",
    tags: ["Google Photos", "Android", "Material 3", "使用者介面", "Gemini", "行動應用更新"],
    title_en: "Google Photos rolls out Android floating bottom navigation bar update using Material 3 design",
    summary_en: "Google has begun widely pushing a new floating bottom navigation bar interface design for Google Photos (versions 7.82 and 7.83) to Android users. This update changes the navigation bar, which was previously fixed to the bottom of the screen, into a floating pill shape, integrating function tabs for Photos, Memories, and Create, and adding a Gemini-powered Ask Photos search entry, thereby freeing up more screen space. Additionally, the date display has been moved to a floating presentation at the top, and users can adjust the display settings via the top-right menu. This design is similar to the Material 3 Expressive specification used in applications like Google Chat and was previously launched on the iOS platform. It is currently being rolled out to all Android users via server-side updates.",
    tags_en: ["Google Photos", "Android", "Material 3", "User Interface", "Gemini", "Mobile App Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/google-photos-floating-bottom-bar-android", lang: "EN" }
    ]
  },
  {
    id: "20260717-055",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Z Fold 8 與 Flip 8 預購傳將維持 512GB 免費容量升級優惠",
    summary: "根據南韓媒體與內部消息指出，三星電子在經過內部審慎評估後，決定在即將舉行的 Galaxy Unpacked 發表會中，針對折疊螢幕手機 Galaxy Z Fold 8 與 Galaxy Z Flip 8 延續過往的預購優惠。用戶在預購時選擇 512GB 版本，將可以基礎 256GB 的價格購入。先前曾有傳言指出三星將取消此項傳統，改為讓用戶支付 50% 的升級費用，最新情報澄清該收費政策僅適用於從 512GB 升級至 1TB 的方案。此舉被視為在零組件成本上漲的壓力下，三星為了維護品牌忠誠度與消費者承諾所做的決定，但高階機型仍可能面臨價格調漲。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "行動裝置", "預購優惠", "Galaxy Unpacked"],
    title_en: "Samsung Galaxy Z Fold 8 and Flip 8 Pre-orders Rumored to Retain Free 512GB Storage Upgrade Offer",
    summary_en: "According to South Korean media and internal sources, Samsung Electronics, after careful internal evaluation, has decided to continue its past pre-order incentives for the Galaxy Z Fold 8 and Galaxy Z Flip 8 foldable smartphones at the upcoming Galaxy Unpacked launch event. Users who select the 512GB version during pre-order will be able to purchase it at the price of the base 256GB model. Previous rumors suggested that Samsung would cancel this tradition and instead require users to pay 50% of the upgrade fee; the latest information clarifies that this fee policy applies only to the upgrade scheme from 512GB to 1TB. This move is seen as a decision made by Samsung to maintain brand loyalty and consumer commitment under the pressure of rising component costs, though high-end models may still face price hikes.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Mobile Devices", "Pre-order Offers", "Galaxy Unpacked"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/samsung-galaxy-z-fold-8-free-storage-upgrade", lang: "EN" }
    ]
  },
  {
    id: "20260717-056",
    trackers: ["os"],
    category: "Android",
    title: "加密通訊軟體 Signal 開放 Android 測試版多裝置同步功能，最高可連結 5 部裝置",
    summary: "加密通訊軟體 Signal 於 Android 平台推出 8.20 測試版本，正式加入「連結裝置」功能。過往使用者在行動裝置上僅能同時登入單一裝置（電腦版與 iPad 版除外），新功能允許使用者在不需額外門號的情況下，透過掃描 QR Code 連結第二部 Android 行動裝置，並可選擇是否同步歷史訊息。官方說明頁面指出，單一帳號最多可連結 5 部裝置，若裝置連續 45 天未活動將自動解除連結，且主裝置必須每 30 天上線一次以維持連結狀態。目前此功能僅限測試計畫用戶，預計不久後將推播至正式版本。",
    tags: ["Signal", "Android", "多裝置連結", "加密通訊", "Beta測試"],
    title_en: "Encrypted Communication Software Signal Releases Android Beta with Multi-Device Sync Functionality, Supporting Up to 5 Devices",
    summary_en: "The encrypted communication software Signal has released an 8.20 beta version for the Android platform, officially introducing the 'Linked Devices' feature. Previously, users could only log into a single device on their mobile device (excluding desktop and iPad versions). The new feature allows users to link a second Android mobile device by scanning a QR Code, without needing an additional phone number, and allows the user to choose whether to sync historical messages. The official documentation states that a single account can link up to 5 devices. If a device is inactive for 45 consecutive days, it will automatically unlink. Furthermore, the primary device must come online once every 30 days to maintain the connection status. Currently, this feature is limited to users in the testing program and is expected to be rolled out to the official version soon.",
    tags_en: ["Signal", "Android", "Multi-Device Linking", "Encrypted Communication", "Beta Test"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/signal-linked-devices-android-expansion-beta", lang: "EN" }
    ]
  },
  {
    id: "20260717-057",
    trackers: ["os"],
    category: "Android",
    title: "Redmagic 全球發表 Astra 2 電競平板，搭載 Android 16 與驍龍 8 Elite Gen 5 晶片",
    summary: "電競品牌 Redmagic 宣布其最新款 Android 遊戲平板「Astra 2」正式進軍全球市場，美國與歐洲地區定價自 699 美元起。此款設備在大陸市場以 Redmagic 遊戲平板 5 Pro 命名。技術規格方面，該平板搭載高通 Snapdragon 8 Elite Gen 5 處理器，配置具備液冷散熱技術的 9.06 吋、185Hz 刷新率 AMOLED 螢幕，並內建支援最高 75W 雙孔同時充電的 8300 mAh 大容量電池。系統層面則直接預載最新的 Android 16 作業系統及自訂使用者介面。目前全球市場預計於 8 月中旬開放早鳥預購，隨後於當月底全面上市。原文未公開任何涉及 CVE 漏洞、CVSS 風險評級或網路資安威脅等技術細節。",
    tags: ["Redmagic", "Astra 2", "Android 16", "電競平板", "高通", "Snapdragon", "行動裝置"],
    title_en: "Redmagic Launches Astra 2 Gaming Tablet Globally, Featuring Android 16 and Snapdragon 8 Elite Gen 5 Chip",
    summary_en: "Gaming brand Redmagic announced that its latest Android gaming tablet, the \"Astra 2,\" has officially entered the global market, priced starting from $699 in the US and Europe. In the mainland Chinese market, this device is named the Redmagic Gaming Tablet 5 Pro. In terms of technical specifications, the tablet is equipped with the Qualcomm Snapdragon 8 Elite Gen 5 processor, a 9.06-inch, 185Hz refresh rate AMOLED screen with liquid cooling technology, and a large 8300 mAh battery supporting dual-port simultaneous charging up to 75W. At the system level, it comes pre-loaded with the latest Android 16 operating system and a customized user interface. Global pre-orders are expected to open in mid-August, followed by a full market launch at the end of the month. The original text did not disclose any technical details related to CVE vulnerabilities, CVSS risk ratings, or cybersecurity threats.",
    tags_en: ["Redmagic", "Astra 2", "Android 16", "Gaming Tablet", "Qualcomm", "Snapdragon", "Mobile Device"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/redmagic-astra-2-android-gaming-tablet-price-release-date", lang: "EN" }
    ]
  },
  {
    id: "20260717-058",
    trackers: ["os"],
    category: "Android",
    title: "Google 聯絡人 Android 版推出「個人資訊」卡片功能，優化用戶自身資料管理與 VCard 分享控管",
    summary: "Google 近期針對 Android 平台的「Google 聯絡人」應用程式推出全新功能，在最新穩定版本 4.83.13.940538822 中新增了「個人資訊」卡片。此功能類似於 Apple 系統的設計，會將用戶自身的檔案置頂於聯絡人清單最上方。在隱私防護實務上，該卡片內建專屬的分享按鈕，允許用戶將個人資訊以 VCard 格式導出，並特別提供限制資料顯示範圍的選項。預設情況下，系統僅會勾選並分享與該裝置綁定的裝置號碼，有效避免過度揭露電子郵件或其他敏感個資。由於本事件屬於正常功能更新，並未涉及特定 CVE 漏洞或 CVSS 評級。建議 Android 用戶可將 Google 聯絡人應用程式更新至最新版本，以利用此機制提升日常分享時的隱私控制權。",
    tags: ["Google", "Android", "Google 聯絡人", "隱私控制", "VCard", "應用程式更新"],
    title_en: "Google Contacts for Android Launches 'Your Info' Card Feature, Optimizing User Profile Management and VCard Sharing Controls",
    summary_en: "Google has recently rolled out a brand-new feature for the Google Contacts application on the Android platform, introducing a 'Your Info' card in the latest stable version 4.83.13.940538822. Similar to the design found in Apple systems, this feature pins the user's own profile to the very top of the contact list. In terms of privacy protection practices, the card includes a built-in dedicated share button, allowing users to export their personal information in VCard format, and specifically provides an option to limit the scope of data displayed. By default, the system will only check and share the device number tied to the device, effectively preventing the over-disclosure of email addresses or other sensitive personal data. As this event is a standard functional update, it does not involve specific CVE vulnerabilities or CVSS ratings. It is recommended that Android users update their Google Contacts application to the latest version to utilize this mechanism to enhance privacy control during daily sharing.",
    tags_en: ["Google", "Android", "Google Contacts", "Privacy Control", "VCard", "Application Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/google-contacts-your-info-card-android", lang: "EN" }
    ]
  },
  {
    id: "20260717-059",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google 著手修補 Android 鎖定畫面漏洞：Gemini 可繞過 PIN 碼傳送簡訊",
    summary: "Google 目前正著手修補一項潛在的 Android 系統漏洞。該漏洞與內建的 AI 助理 Gemini 有關，當裝置處於鎖定狀態時，攻擊者或未授權的第三方可能利用特定指令，繞過系統的 PIN 碼、圖形或密碼防護，指示 Gemini 直接發送簡訊。這項安全缺陷對用戶隱私構成威脅，可能導致機密資訊外洩或惡意簡訊詐騙。雖然相關的 CVE 編號與具體的 CVSS 風險評分於原文中未明確公開，但 Google 已確認此問題並開始擬定修復計畫。官方建議用戶在修補程式發布前，可考慮於設定中暫時關閉鎖定畫面上的助理功能，以防範潛在的非授權存取風險。",
    tags: ["Google", "Android", "Gemini", "智慧型手機安全", "鎖定畫面繞過", "AI安全漏洞"],
    title_en: "Google Begins Patching Android Lock Screen Vulnerability: Gemini Can Bypass PIN to Send SMS",
    summary_en: "Google is currently working to patch a potential Android system vulnerability. The flaw is related to the built-in AI assistant Gemini; when a device is locked, an attacker or unauthorized third party could utilize specific commands to bypass the system's PIN, pattern, or password protections and instruct Gemini to directly send text messages. This security defect poses a threat to user privacy and could lead to the leakage of confidential information or malicious SMS scams. Although the relevant CVE ID and specific CVSS risk score were not explicitly disclosed in the original text, Google has confirmed the issue and begun developing a fix. Official recommendations suggest that before the patch is released, users may consider temporarily disabling the assistant function on the lock screen within settings to protect against potential unauthorized access risks.",
    tags_en: ["Google", "Android", "Gemini", "Smartphone Security", "Lock Screen Bypass", "AI Security Vulnerability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/17/google-fixing-android-lock-screen-bug-that-lets-gemini-send-sms-without-a-pin/5273027", lang: "EN" }
    ]
  },
  {
    id: "20260717-060",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Agentic AI 盲目信任風險：駭客利用摩斯密碼誘導自主 Agent 繞過資安審查",
    summary: "近期一起針對自主 AI Agent 的攻擊事件，揭露了企業部署 AI 系統時面臨的「權限洗白（Authority Laundering）」風險。攻擊者先將數位憑證存入與 AI 連動的加密錢包以擴展其權限，隨後發送偽裝成摩斯密碼的惡意負載。傳統資安系統將其視為無害文本而忽略，但 AI 模型將其解譯並轉化為合法指令，導致另一個負責執行資金轉移的 AI 系統在毫無懷疑的情況下完成交易。此攻擊未竊取密碼或部署惡意軟體，完全利用了 AI 混淆語言與權限的架構缺陷。報告建議企業推動自主 AI 時應導入零信任架構、實施嚴格的權限隔離、並在涉及資金或關鍵基礎設施變更時加入人為驗證與確定性策略引擎，避免過度授權導致資安防線崩潰。",
    tags: ["Agentic AI", "盲目信任", "權限洗白", "摩斯密碼攻擊", "零信任架構", "自主代理", "企業資安治理"],
    title_en: "Blind Trust Risk in Agentic AI: Hackers Use Morse Code to Induce Autonomous Agents to Bypass Security Checks",
    summary_en: "A recent attack targeting autonomous AI Agents revealed the risk of \"Authority Laundering\" when enterprises deploy AI systems. The attackers first stored digital credentials in an encrypted wallet linked to the AI to expand its permissions, and then sent malicious payloads disguised as Morse code. Traditional security systems ignored this, viewing it as harmless text, but the AI model interpreted and converted it into legitimate instructions. This caused another AI system, responsible for executing fund transfers, to complete the transaction without suspicion. This attack did not steal passwords or deploy malware; it fully exploited the architectural flaw of AI confusing language and permissions. The report recommends that enterprises implementing autonomous AI should adopt a Zero Trust architecture, enforce strict permission isolation, and incorporate human verification and deterministic policy engines when dealing with funds or critical infrastructure changes, thereby preventing security defenses from collapsing due to over-authorization.",
    tags_en: ["Agentic AI", "Blind Trust", "Authority Laundering", "Morse Code Attack", "Zero Trust Architecture", "Autonomous Agents", "Enterprise Security Governance"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/real-ai-threat-blind-trust", lang: "EN" }
    ]
  },
  {
    id: "20260717-061",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Google 整合 Wiz 技術推出「自主 Agent 防禦」平台，自動化對抗 AI 驅動型網路攻擊",
    summary: "Google Cloud 在完成以 320 億美元收購雲端資安公司 Wiz 後，宣布將其關鍵功能整合至全新的「自主 Agent 防禦」平台。根據 Mandiant 的 M-Trends 2026 報告，攻擊者從初始入侵到轉移存取權的時間已從 3 年前的 8 小時縮短至僅 22 秒。為因應 AI 驅動的自動化攻擊，Google 整合 Wiz 的攻擊表面管理（ASM）與 Google 威脅情資（TI），利用 Gemini 的推理能力與 Mandiant 的專業知識，實現即時的雲端原生風險偵測與資安編排。此外，新架構結合了 Google 安全營運平台與 Wiz AI 應用程式保護平台（AI-APP），並推出 AI-BOM 工具以自動盤點 AI 框架與模型，將防禦從晶片、模型延伸至自主 Agent 層級。目前 Wiz AI-APP 已進入公開預覽階段，旨在協助企業防範針對多雲環境與 AI 應用的新型態威脅。",
    tags: ["Google Cloud", "Wiz", "Agentic Defense", "自主Agent", "Gemini", "AI-APP", "AI-BOM", "雲端資安"],
    title_en: "Google Integrates Wiz Technology to Launch 'Autonomous Agent Defense' Platform, Automating Defense Against AI-Driven Cyber Attacks",
    summary_en: "Following the $32 billion acquisition of cloud security company Wiz, Google Cloud announced the integration of Wiz's key functionalities into a brand new 'Autonomous Agent Defense' platform. According to Mandiant's M-Trends 2026 report, the time for attackers to move from initial breach to lateral movement has shrunk from 8 hours three years ago to just 22 seconds. To counter AI-driven automated attacks, Google integrates Wiz's Attack Surface Management (ASM) with Google Threat Intelligence (TI). By leveraging Gemini's reasoning capabilities and Mandiant's expertise, the platform achieves real-time cloud-native risk detection and security orchestration. Furthermore, the new architecture combines the Google Security Operations Platform with Wiz AI Application Protection Platform (AI-APP), and introduces the AI-BOM tool to automatically inventory AI frameworks and models, extending defense from the chip and model level to the autonomous agent level. Wiz AI-APP is currently in public preview, designed to help enterprises defend against novel threats targeting multi-cloud environments and AI applications.",
    tags_en: ["Google Cloud", "Wiz", "Agentic Defense", "Autonomous Agent", "Gemini", "AI-APP", "AI-BOM", "Cloud Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cloud-security/google-bets-agentic-defense-strategy-outpace-attackers", lang: "EN" }
    ]
  },
  {
    id: "20260717-062",
    trackers: ["security"],
    category: "前瞻技術",
    title: "SANS研究指出企業AI資安採用率飆升至78% 但高達63%組織缺乏全面治理與監控能力",
    summary: "資安研究機構SANS Institute發布最新調查，指出將AI納入資安策略的組織比例在2026年已大幅增至78%，然而僅有36%建立正式的風險管理與法規遵循計畫，顯示治理機制的成熟度嚴重落後。調查顯示，76%的資安團隊已承擔AI治理職責，但仍有63%的組織無法掌握AI模型的使用位置與潛在暴露資料，更有54%缺乏AI稽核框架。此外，AI在攻防兩端應用增加，78%的受訪者懷疑遭到AI輔助攻擊，且引進AI威脅偵測時常遭遇幻覺與誤判問題。SANS建議企業應持續檢驗AI系統表現，全面盤點工具、用途與資料存取狀況，並建置審查與日常稽核機制，提升人員對AI輸出的檢查與介入能力。",
    tags: ["SANS Institute", "人工智慧安全", "AI治理", "風險管理", "AI防禦", "AI輔助攻擊", "威脅偵測"],
    title_en: "SANS Study Shows Enterprise AI Cybersecurity Adoption Surges to 78%, but Up to 63% of Organizations Lack Comprehensive Governance and Monitoring Capabilities",
    summary_en: "Cybersecurity research organization SANS Institute has released its latest survey, pointing out that the proportion of organizations integrating AI into their cybersecurity strategies has significantly increased to 78% in 2026. However, only 36% have established formal risk management and compliance programs, indicating that the maturity of governance mechanisms is lagging severely behind. The survey shows that 76% of cybersecurity teams have assumed AI governance responsibilities, yet 63% of organizations are still unable to track where AI models are being used and their potential data exposure, and 54% lack an AI auditing framework. In addition, the application of AI is increasing on both the offensive and defensive sides, with 78% of respondents suspecting they have been targeted by AI-assisted attacks, and the introduction of AI threat detection frequently encounters issues with hallucinations and false positives. SANS recommends that enterprises continuously verify AI system performance, comprehensively inventory tools, use cases, and data access statuses, and establish review and routine auditing mechanisms to enhance personnel's capabilities in inspecting and intervening in AI outputs.",
    tags_en: ["SANS Institute", "Artificial Intelligence Security", "AI Governance", "Risk Management", "AI Defense", "AI-assisted Attacks", "Threat Detection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177383", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-063",
    trackers: ["security"],
    category: "前瞻技術",
    title: "G7與金管會引導金融業後量子密碼遷移，Forescout強調密碼學敏捷性成轉型關鍵",
    summary: "網路資安業者Forescout近日解析G7網路專家小組發布的《金融業量子整備路線圖》，為金融機構與主管機關提供後量子密碼學（PQC）轉型指南。該藍圖將轉型分為風險認知、資產盤點、風險評估、執行、測試及持續監控等6個階段。G7與臺灣金管會皆建議以2035年作為完成高風險系統遷移的長期目標，而關鍵系統則應於2030至2032年間優先推動。Forescout提醒，量子安全並非一勞永逸，組織應建立「密碼學敏捷性」（Crypto-Agility），避免將特定演算法寫死在基礎設施中，並在過渡期採用混合式密碼技術，以便日後能無縫更換演算法並因應新興威脅。修補與因應建議包含盤點密碼資產、評估第三方相依性及逐步落實PQC遷移規畫。",
    tags: ["後量子密碼學", "PQC", "金融資安", "G7", "金管會", "密碼學敏捷性", "Forescout"],
    title_en: "G7 and Financial Regulators Guide Financial Sector's Post-Quantum Cryptography Transition; Forescout Stresses Crypto-Agility as Key to Transformation",
    summary_en: "Cybersecurity vendor Forescout recently analyzed the 'Financial Sector Quantum Readiness Roadmap' published by the G7 network expert group, providing a transition guide for Post-Quantum Cryptography (PQC) to financial institutions and regulatory authorities. The roadmap divides the transition into six stages: risk awareness, asset inventory, risk assessment, execution, testing, and continuous monitoring. Both the G7 and Taiwan's financial regulators recommend 2035 as the long-term goal for completing the transition of high-risk systems, with critical systems needing priority implementation between 2030 and 2032. Forescout reminds that quantum security is not a one-time fix; organizations must establish 'Crypto-Agility' to avoid hardcoding specific algorithms into infrastructure, and adopt hybrid cryptographic techniques during the transition period to allow for seamless algorithm replacement and adaptation to emerging threats. Remediation and response recommendations include inventorying cryptographic assets, assessing third-party dependencies, and gradually implementing the PQC transition plan.",
    tags_en: ["Post-Quantum Cryptography", "PQC", "Financial Security", "G7", "Financial Regulators", "Crypto-Agility", "Forescout"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177380", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-064",
    trackers: ["security"],
    category: "前瞻技術",
    title: "奧義智慧與臺大揭露 Agentic AI 四大資安風險，提出 TraceSafe 執行軌跡評測基準",
    summary: "在 CraftCon Taiwan 2026 資安技術研討會上，奧義智慧指出 Agent 時代的資安防禦本質為執行時期安全（Runtime Security），風險存在於執行的每一秒。奧義智慧 AI Lab 與臺灣大學研究團隊共同發表論文，將 Agent 工具呼叫的威脅系統化歸納為提示注入、隱私外洩、幻覺、介面不一致等 4 大領域、12 個細項類別，並推出 TraceSafe-Bench 評測基準。測試市面 20 種主流模型與 AI 護欄方案後發現，現有方案對多步驟工具呼叫的防護明顯不足，常難以辨識 JSON 格式中的異常。專家建議企業評估 AI 護欄時，應確保能掌握完整執行脈絡、理解工具 schema、在工具呼叫前實施攔截，並全面涵蓋上述四大風險領域。",
    tags: ["奧義智慧", "臺灣大學", "Agentic AI", "TraceSafe", "LLM Guardrails", "Runtime Security", "提示注入", "隱私外洩"],
    title_en: "CyCraft and NTU Disclose Four Major Cybersecurity Risks of Agentic AI, Introduce TraceSafe Execution Trajectory Benchmark",
    summary_en: "At the CraftCon Taiwan 2026 cybersecurity technical conference, CyCraft pointed out that the essence of cybersecurity defense in the Agent era is Runtime Security, where risks exist in every second of execution. The CyCraft AI Lab, in collaboration with the National Taiwan University research team, co-published a paper that systematically categorizes threats in Agent tool calling into 4 major domains and 12 detailed subcategories—including prompt injection, privacy leakage, hallucination, and interface inconsistency—and launched the TraceSafe-Bench benchmark. After testing 20 mainstream models and AI guardrail solutions on the market, they discovered that existing solutions are significantly inadequate in protecting multi-step tool calls and often struggle to identify anomalies within JSON formats. Experts recommend that when enterprises evaluate AI guardrails, they should ensure the capability to capture the complete execution context, understand tool schemas, implement interception before tool calls, and comprehensively cover the aforementioned four major risk domains.",
    tags_en: ["CyCraft", "National Taiwan University", "Agentic AI", "TraceSafe", "LLM Guardrails", "Runtime Security", "Prompt Injection", "Privacy Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177369", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260717-065",
    trackers: ["security"],
    category: "前瞻技術",
    title: "西方加速布署軍事自主化系統，Everfox 倡導以硬體隔離建構跨網域信任資訊基礎設施",
    summary: "隨著美國、英國及北約（NATO）加速推動軍事自主化與人工智慧（AI）應用的實戰部署，無人機、無人艦艇及衛星等自主系統的聯網需求大增。傳統上依賴軟體控制的資訊架構面臨高度複雜性與資安風險。資安廠商 Everfox 指出，未來防衛核心在於確保遙測、指令及聯盟情資能安全跨越不同安全層級與平台。為解決此痛點，實務上應捨棄傳統需耗時整合的客製化架構，改採硬體強化的隔離技術（Hardsec）。該技術將作業系統移出信任邊界，直接在硬體邏輯中建立信任，藉此簡化架構並支援跨網域的安全資訊交換，使國防組織能在維持作戰速度與高防禦韌性的情況下，快速導入商業創新技術。",
    tags: ["Everfox", "軍事自主化", "硬體隔離", "Hardsec", "跨網域安全", "國防資安", "人工智慧安全"],
    title_en: "The West Accelerates the Deployment of Military Autonomous Systems; Everfox Advocates for Constructing Cross-Domain Trusted Information Infrastructure via Hardware Isolation",
    summary_en: "As the United States, the United Kingdom, and NATO accelerate the promotion and operational deployment of military autonomy and artificial intelligence (AI) applications, the networking demands for autonomous systems such as drones, unmanned vessels, and satellites have surged. Traditional information architectures relying on software control face high complexity and cybersecurity risks. Cybersecurity vendor Everfox points out that the core of future defense lies in ensuring that telemetry, commands, and coalition intelligence can securely cross different security levels and platforms. To address this pain point, practical implementation should abandon traditional, time-consuming custom architectures that require complex integration, and instead adopt hardware-enforced isolation technology (Hardsec). This technology removes the operating system from the trust boundary and establishes trust directly within the hardware logic, thereby simplifying the architecture and supporting secure cross-domain information exchange. This enables defense organizations to rapidly adopt commercial innovative technologies while maintaining operational speed and high defense resilience.",
    tags_en: ["Everfox", "Military Autonomy", "Hardware Isolation", "Hardsec", "Cross-Domain Security", "Defense Cybersecurity", "Artificial Intelligence Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/the-race-to-field-military-autonomy-is.html", lang: "EN" }
    ]
  },
  {
    id: "20260717-066",
    trackers: ["os"],
    category: "重點關注",
    title: "三星 Galaxy Z Fold 8、Fold 8 Ultra 及 Flip 8 新機行銷圖提前外洩，規格與設計細節完整曝光",
    summary: "知名爆料人士 Evan Blass 提前外洩了三星即將於 7 月 22 日發表的 Galaxy Z Fold 8、Galaxy Z Fold 8 Ultra 及 Galaxy Z Flip 8 三款折疊手機的大量官方行銷圖片。外洩資訊證實，Fold 8 搭載 5000 萬畫素廣角與超廣角鏡頭，而頂規的 Fold 8 Ultra 則升級至 2 億畫素廣角鏡頭並支援 5000 毫安培電池；Flip 8 則配備 4300 毫安培電池。設計上，Fold 8 採用更寬的機身設計以優化日常影音體驗，Ultra 版本則主打高效能多工與創作應用。雖然本質為產品規格外洩，但由於涉及供應鏈與新機發表前的資訊安全防護，仍值得資安人員與開發者關注硬體生態系發展。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "資訊外洩", "行動裝置", "供應鏈", "硬體生態系"],
    title_en: "Samsung Galaxy Z Fold 8, Fold 8 Ultra, and Flip 8 Marketing Images Leaked Ahead of Launch, Revealing Full Specs and Design Details",
    summary_en: "Well-known leaker Evan Blass has leaked a large number of official marketing images for Samsung's upcoming Galaxy Z Fold 8, Galaxy Z Fold 8 Ultra, and Galaxy Z Flip 8 foldable phones ahead of their July 22 launch. The leaked information confirms that the Fold 8 is equipped with 50-megapixel wide-angle and ultra-wide-angle lenses, while the top-tier Fold 8 Ultra upgrades to a 200-megapixel wide-angle lens and supports a 5000 mAh battery; the Flip 8 features a 4300 mAh battery. In terms of design, the Fold 8 adopts a wider body design to optimize daily multimedia experiences, while the Ultra version focuses on high-performance multitasking and creative applications. Although this is essentially a product specification leak, it remains worthy of attention from cybersecurity professionals and developers regarding hardware ecosystem development due to its involvement with the supply chain and information security protection prior to new product launches.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Information Leak", "Mobile Device", "Supply Chain", "Hardware Ecosystem"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/galaxy-z-fold-8-flip-images-leak-before-launch", lang: "EN" }
    ]
  },
  {
    id: "20260717-067",
    trackers: ["os"],
    category: "重點關注",
    title: "Counterpoint 報告：2026年第二季 Google Pixel 與 Nothing 成為印度市場成長最快智慧型手機品牌",
    summary: "根據 Counterpoint Research 發布的 2026 年第二季印度智慧型手機出貨量報告，儘管該地區整體市場年減 10%，且多數中國品牌市佔率下滑，但 Google Pixel 與 Nothing 表現亮眼。Nothing 憑藉新機系列與板球隊贊助，出貨量年成長達 105%，奪下整體成長冠軍。Google Pixel 則透過積極的線下零售佈局、市場行銷及凍漲策略，在售價高於 45,000 盧比的超高階市場中達到 68% 的年成長率，成為該級別成長最快的品牌。由於此為市場出貨量統計報告，並未涉及資訊安全漏洞、CVSS 風險評級或網路攻擊向量，亦無相關安全修補建議。",
    tags: ["Google Pixel", "Nothing", "Counterpoint Research", "印度市場", "智慧型手機出貨量", "市場分析報告"],
    title_en: "Counterpoint Report: Google Pixel and Nothing Become the Fastest-Growing Smartphone Brands in the Indian Market in Q2 2026",
    summary_en: "According to the Q2 2026 Indian smartphone shipment report released by Counterpoint Research, despite a 10% year-on-year decline in the region's overall market and a drop in market share for most Chinese brands, Google Pixel and Nothing delivered stellar performances. Leveraging its new smartphone series and cricket team sponsorship, Nothing achieved a 105% year-on-year growth in shipments, claiming the top spot for overall growth. Meanwhile, through aggressive offline retail expansion, market marketing, and price-freeze strategies, Google Pixel achieved a 68% year-on-year growth rate in the ultra-premium segment priced above 45,000 INR, becoming the fastest-growing brand in that category. As this is a market shipment statistical report, it does not involve information security vulnerabilities, CVSS risk ratings, or cyberattack vectors, nor are there any related security patch recommendations.",
    tags_en: ["Google Pixel", "Nothing", "Counterpoint Research", "Indian Market", "Smartphone Shipments", "Market Analysis Report"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/17/google-pixel-nothing-india-fastest-growing-brands", lang: "EN" }
    ]
  },
  {
    id: "20260717-068",
    trackers: ["os"],
    category: "重點關注",
    title: "Fubo 與 NBCUniversal 達成部分頻道回歸協議，並全面調漲月租費 15 美元",
    summary: "體育串流電視平台 Fubo 因與 NBCUniversal 達成新版授權合約，宣布將所有月租訂閱方案調漲 15 美元。先前於 2025 年 11 月兩家公司因合約糾紛，導致 Fubo 失去 NBC 地方台、Telemundo 等多個體育與國家頻道，Fubo 隨後於同年 12 月罕見調降訂閱價格。儘管此次達成新合約並調高費用，使其價格高於先前中斷時的行情，但 Fubo 僅恢復部分頻道，仍有 9 個先前由 NBCUniversal 分拆至 Versant 公司的有線頻道（如 CNBC、USA Network、E! 等）依舊無法收看。官方對此表示是因節目成本上升而調整售價。",
    tags: ["Fubo", "NBCUniversal", "串流電視", "訂閱價格調漲", "頻道授權爭議"],
    title_en: "Fubo and NBCUniversal Reach Agreement for Partial Channel Return, Raising Monthly Subscription Fees by $15 Across the Board",
    summary_en: "Sports streaming television platform Fubo has announced a $15 price hike across all monthly subscription plans due to a new licensing agreement reached with NBCUniversal. Previously, in November 2025, a contract dispute between the two companies led to Fubo losing multiple sports and national channels, including local NBC stations and Telemundo, which prompted Fubo to make a rare move by cutting subscription prices in December of the same year. Despite reaching a new agreement and raising fees this time—making prices higher than they were prior to the blackout—Fubo has only restored a portion of the channels. Nine cable channels previously spun off by NBCUniversal to Versant Company (such as CNBC, USA Network, E!, etc.) remain unavailable. Officials stated that the price adjustment is due to rising programming costs.",
    tags_en: ["Fubo", "NBCUniversal", "Streaming TV", "Subscription Price Hike", "Channel Licensing Dispute"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/07/fubo-hikes-prices-by-15-after-restoring-some-nbcu-channels-lost-in-november", lang: "EN" }
    ]
  },
  {
    id: "20260717-069",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "資安快訊：本篇為太空科技「火箭報告」新聞，未涉及資訊安全漏洞、補丁與核心元件更新",
    summary: "此文章內容為 Ars Technica 的「火箭報告（Rocket Report）」專欄，主要探討國際太空航天科技進展。報導包含三大焦點：SpaceX 在德州南部的 Starship 火箭因 Raptor 引擎未成功點火而於 T-0 倒數時緊急中止，目前正評估是否需將火箭卸載檢修；印度航太公司 Skyroot Aerospace 的 Vikram-1 商業火箭預計於 7 月 18 日進行首次商業軌道發射測試，旨在搭載小型衛星並收集飛行數據；以及日本宇宙航空研究開發機構（JAXA）成功完成一項實驗性可重複使用火箭的垂直起降測試（飛行高度約 11 公尺，歷時 40 秒）。由於原文不包含任何資訊安全漏洞、CVE 編號、網路攻擊或作業系統更新等資安相關事件，故無法提供資安實務修補建議。",
    tags: ["SpaceX", "Skyroot Aerospace", "JAXA", "Vikram-1", "Starship", "航太科技"],
    title_en: "Cybersecurity Alert: This article is a 'Rocket Report' on space technology and does not involve information security vulnerabilities, patches, or core component updates",
    summary_en: "This article contains Ars Technica's 'Rocket Report' column, which primarily explores international space and aerospace technology advancements. The report focuses on three main points: SpaceX's Starship rocket in South Texas, which aborted its countdown at T-0 because the Raptor engine failed to ignite, and is currently being assessed for the need to offload the rocket for inspection; India's Skyroot Aerospace's Vikram-1 commercial rocket is scheduled for its first commercial orbital launch test on July 18, aiming to carry small satellites and collect flight data; and Japan's Japan Aerospace Exploration Agency (JAXA) successfully completed an experimental vertical takeoff and landing test for a reusable rocket (flying to an altitude of approximately 11 meters over a duration of 40 seconds). Since the original text does not include any information security vulnerabilities, CVE IDs, cyberattacks, or operating system updates, no practical cybersecurity remediation advice can be provided.",
    tags_en: ["SpaceX", "Skyroot Aerospace", "JAXA", "Vikram-1", "Starship", "Aerospace Technology"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/07/rocket-report-indias-vikram-1-nears-debut-flight-ast-to-become-rocket-company", lang: "EN" }
    ]
  },
  {
    id: "20260717-070",
    trackers: ["os"],
    category: "重點關注",
    title: "SpaceX Starship 第13次測試因 Raptor 3 發動機啟動異常觸發自動中止而宣告延期",
    summary: "航太巨擘 SpaceX 在德州南部進行第13次 Starship 火箭與 Super Heavy 助推器全尺寸測試發動時，於倒數歸零當刻宣告中止。火箭在順利注入超過1,150萬磅的液態甲烷與液態氧後，控制倒數的電腦系統在助推器發動機啟動序列中偵測到異常，自動觸發中止程序。馬斯克隨後證實，主要是因為部分發動機未能成功點火所致，直播畫面顯示33具第三代 Raptor 發動機中有4具未點燃。目前地面團隊正準備替換其中兩具發動機，發射計畫將延後至下週初期。由於本起事件屬於航太硬體與控制系統中止，未涉及 IT 網路資安漏洞或 CVE 編號，官方建議密切關注後續修復與重新發射時程。",
    tags: ["SpaceX", "Starship", "Super Heavy", "Raptor 3", "自動發射中止"],
    title_en: "SpaceX Starship 13th Test Postponed Due to Automatic Abort Triggered by Raptor 3 Engine Startup Anomaly",
    summary_en: "Aerospace giant SpaceX's 13th full-scale test launch of the Starship rocket and Super Heavy booster in southern Texas was aborted at the exact moment the countdown reached zero. After the rocket was successfully loaded with over 11.5 million pounds of liquid methane and liquid oxygen, the computer system controlling the countdown detected an anomaly during the booster engine startup sequence, automatically triggering the abort procedure. Elon Musk subsequently confirmed that the issue was primarily caused by some engines failing to ignite successfully; the live stream footage showed that 4 out of the 33 third-generation Raptor engines did not ignite. Ground teams are currently preparing to replace two of the engines, and the launch schedule will be postponed to early next week. As this incident was an aerospace hardware and control system abort and did not involve IT network cybersecurity vulnerabilities or CVE IDs, officials recommend closely monitoring the subsequent repairs and relaunch schedule.",
    tags_en: ["SpaceX", "Starship", "Super Heavy", "Raptor 3", "Automatic Launch Abort"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/07/spacex-scrubs-starship-launch-after-some-of-its-engines-didnt-start", lang: "EN" }
    ]
  },
  {
    id: "20260717-071",
    trackers: ["os"],
    category: "重點關注",
    title: "AMD 宣布收購開源 NPU 推理軟體 FastFlowLM 開發團隊，全面推進 AI PC 與工作站開源生態系",
    summary: "超微（AMD）宣布收購開源項目 FastFlowLM 的開發團隊，該團隊成員將正式加入 AMD AI 部門。FastFlowLM 最初由學術界研究人員創立，長期專注於 AMD Ryzen AI NPU 的加速技術，在 Windows 平台上提供類似 Ollama 的開發者體驗，是現行驅動 AMD NPU 晶片的核心推理軟體之一。此團隊加入後，將聚焦於客戶端與工作站 AI 軟體開發，並致力於最新 AI 模型在 AMD 硬體上的首發支援（Day Zero Enablement）。FastFlowLM 本身採用 MIT 開源授權，其技術整合有助於強化 AMD 既有的 ROCm、Lemonade 與 GAIA 等開源 AI 工具鏈。本事件未涉及特定 CVE 漏洞或資安威脅，屬於架構發展與供應鏈工具鏈之布局優化。",
    tags: ["AMD", "FastFlowLM", "Ryzen AI", "NPU", "開源軟體", "人工智慧", "工具鏈"],
    title_en: "AMD Announces Acquisition of Open-Source NPU Inference Software FastFlowLM Development Team to Comprehensively Advance Open-Source Ecosystem for AI PCs and Workstations",
    summary_en: "Advanced Micro Devices (AMD) announced the acquisition of the development team behind the open-source project FastFlowLM, with its team members officially joining the AMD AI department. Originally founded by academic researchers, FastFlowLM has long focused on acceleration technologies for AMD Ryzen AI NPUs, providing a developer experience similar to Ollama on the Windows platform, and stands as one of the core inference softwares currently driving AMD NPU chips. Following the team's arrival, they will focus on client and workstation AI software development, and dedicate efforts to Day Zero Enablement for the latest AI models on AMD hardware. FastFlowLM itself is licensed under the MIT open-source license, and its technology integration will help strengthen AMD's existing open-source AI toolchains, including ROCm, Lemonade, and GAIA. This event does not involve specific CVE vulnerabilities or cybersecurity threats, and falls under architectural development and supply chain toolchain layout optimization.",
    tags_en: ["AMD", "FastFlowLM", "Ryzen AI", "NPU", "Open-Source Software", "Artificial Intelligence", "Toolchain"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FastFlowLM-Joins-AMD", lang: "EN" }
    ]
  },
  {
    id: "20260717-072",
    trackers: ["os"],
    category: "重點關注",
    title: "Mozilla AI 發布 Llamafile 0.10.4，整合語音轉文字元件並導入 SECCOMP 沙箱安全防護",
    summary: "Mozilla AI 團隊正式發布 Llamafile 0.10.4 開源更新，這是一項旨在簡化跨平台大型語言模型部署的單一檔案解決方案。本次更新的核心亮點為導入基於 Transcribe.cpp 專案研發的 Transcribefile 元件，讓語音轉文字推論庫能以單一檔案建置並支援超過 16 種模型，同時整合 Vulkan、NVIDIA CUDA 及 Apple Metal 等硬體加速。在資安與架構層面，新版本同步更新了 Llama.cpp 上游程式碼、優化 AMD ROCm 處理機制、新增 HTTPS 下載支援，並特別引進了 pledge 與 SECCOMP 沙箱安全機制。建議開發者與相關人員盡速至 GitHub 下載更新，以獲取最新的安全防護與效能優化。",
    tags: ["Mozilla AI", "Llamafile", "Transcribe.cpp", "SECCOMP", "沙箱防護", "跨平台", "開源安全", "AI安全"],
    title_en: "Mozilla AI Releases Llamafile 0.10.4, Integrating Speech-to-Text Component and Introducing SECCOMP Sandbox Security Protection",
    summary_en: "The Mozilla AI team has officially released the Llamafile 0.10.4 open-source update, a single-file solution designed to simplify cross-platform large language model deployment. The core highlight of this update is the introduction of the Transcribefile component, developed based on the Transcribe.cpp project, allowing the speech-to-text inference library to be built as a single file and support over 16 models, while also integrating hardware acceleration such as Vulkan, NVIDIA CUDA, and Apple Metal. On the security and architecture level, the new version simultaneously updates the upstream Llama.cpp code, optimizes AMD ROCm processing mechanisms, adds HTTPS download support, and specifically introduces pledge and SECCOMP sandbox security mechanisms. Developers and related personnel are advised to download the update from GitHub as soon as possible to obtain the latest security protection and performance optimization.",
    tags_en: ["Mozilla AI", "Llamafile", "Transcribe.cpp", "SECCOMP", "Sandbox Protection", "Cross-platform", "Open Source Security", "AI Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Llamafile-0.10.4", lang: "EN" }
    ]
  },
  {
    id: "20260717-073",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenBLAS 0.3.34 釋出！支援記憶體安全編譯器 Fil-C 並大幅優化多執行緒效能",
    summary: "知名開源基礎線性代數子程式庫 OpenBLAS 正式釋出 0.3.34 版本。本次更新的一大亮點是新增對 Fil-C 的編譯支援，這是一款基於 LLVM 的實驗性 C 語言工具鏈，旨在提供具備記憶體安全（Memory Safety）特性的 C 與 C++ 實作，有助於降低底層計算庫的資安風險。技術細節方面，新版本優化了 SPR、GETRS 等多個核心的核心多執行緒閾值，並同步調整以適應即將推出的 Reference-LAPACK 3.13。在硬體支援上，此版本提升了 ARM 架構下的 SGEMM 核心執行速度，並對 ARM64、RISC-V 64-bit 及兆芯 x86_64 CPU 進行特定優化與相容性修復。建議開發人員前往 GitHub 下載新版，以強化效能與編譯安全性。",
    tags: ["OpenBLAS", "Fil-C", "LLVM", "記憶體安全", "開源軟體", "編譯器", "ARM", "RISC-V"],
    title_en: "OpenBLAS 0.3.34 Released! Supporting Fil-C Memory-Safe Compiler and Significantly Optimizing Multi-Threading Performance",
    summary_en: "The renowned open-source Basic Linear Algebra Subprograms library, OpenBLAS, has officially released version 0.3.34. A major highlight of this update is the addition of compilation support for Fil-C, an experimental LLVM-based C toolchain designed to provide memory-safe C and C++ implementations, which helps mitigate cybersecurity risks in low-level computing libraries. In terms of technical details, the new version optimizes multi-threading thresholds for several core routines, such as SPR and GETRS, and aligns adjustments to accommodate the upcoming Reference-LAPACK 3.13. For hardware support, this release enhances the execution speed of SGEMM kernels under the ARM architecture and introduces specific optimizations and compatibility fixes for ARM64, RISC-V 64-bit, and Zhaoxin x86_64 CPUs. Developers are advised to download the new version from GitHub to enhance performance and compilation security.",
    tags_en: ["OpenBLAS", "Fil-C", "LLVM", "Memory Safety", "Open Source Software", "Compiler", "ARM", "RISC-V"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenBLAS-0.3.34-Released", lang: "EN" }
    ]
  },
  {
    id: "20260717-074",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Joomla 網站擴充套件爆發 CVSS 10 分重大漏洞，攻擊者正積極利用進行惡意攻擊",
    summary: "資安人員發現攻擊者正積極利用 Joomla 開源內容管理系統（CMS）兩款特定擴充套件「iCagenda」與「Balbooa Forms」中的漏洞。這些漏洞在通用漏洞評分系統（CVSS）中獲得了罕見的滿分 10 分，屬於極度危險等級。由於 Joomla 在全球驅動高達百萬個網站，此安全漏洞的爆發預計將對採用相關擴充套件的網站管理者造成實質且嚴重的資安威脅。目前技術細節與特定的 CVE 編號在原文中未公開，建議所有使用上述套件的 IT 與資安人員應立即檢查系統更新，並儘速套用修補程式以防範潛在的惡意入侵。",
    tags: ["Joomla", "iCagenda", "Balbooa Forms", "CMS 漏洞", "CVSS 10", "惡意攻擊"],
    title_en: "Joomla Website Extensions Exploit Critical CVSS 10 Vulnerability, Attackers Actively Exploiting for Malicious Attacks",
    summary_en: "Security personnel have discovered that attackers are actively exploiting vulnerabilities in two specific Joomla open-source Content Management System (CMS) extensions: \"iCagenda\" and \"Balbooa Forms.\" These vulnerabilities have received a rare perfect score of 10 in the Common Vulnerability Scoring System (CVSS), classifying them as extremely dangerous. Given that Joomla powers up to a million websites globally, the emergence of these security flaws is expected to pose a substantial and severe cybersecurity threat to website administrators using the affected extensions. As the technical details and specific CVE identifiers have not been disclosed in the original text, all IT and cybersecurity personnel using the aforementioned extensions are advised to immediately check for system updates and apply patches promptly to prevent potential malicious intrusions.",
    tags_en: ["Joomla", "iCagenda", "Balbooa Forms", "CMS Vulnerability", "CVSS 10", "Malicious Attack"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/07/17/mozilla-speeds-firefox-release-schedule-to-biweekly/5274423", lang: "EN" }
    ]
  },
  {
    id: "20260717-075",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Joomla CMS 擴充套件爆發 CVSS 10 滿分重大漏洞，已被駭客積極開採",
    summary: "全球擁有百萬網站採用的大型開源內容管理系統 Joomla 爆出嚴重安全危機。駭客正積極利用其第三方擴充套件中的重大漏洞進行攻擊，受影響的套件包含知名活動行事曆擴充套件 iCagenda 以及表單建立工具 Balbooa Forms。這兩款漏洞的 CVSS 風險評分高達完美的 10 分滿分，屬於極度危險等級。攻擊者可藉此未經授權執行任意代碼或掌控受害網站控制權。由於受影響網站基數龐大，資安人員強烈建議所有安裝該開源管理系統的系統管理員，應立即檢查並將相關擴充套件更新至最新安全版本，以防範已被偵測到的現時開採威脅。",
    tags: ["Joomla", "iCagenda", "Balbooa Forms", "CMS漏洞", "開源安全", "在野開採", "CVSS 10"],
    title_en: "Joomla CMS Extensions Hit by Critical CVSS 10 Vulnerabilities, Actively Exploited by Hackers",
    summary_en: "Joomla, a major open-source content management system powering millions of websites worldwide, is facing a severe security crisis. Hackers are actively exploiting critical vulnerabilities in its third-party extensions, with affected packages including the popular event calendar extension iCagenda and the form builder tool Balbooa Forms. The CVSS risk scores for both vulnerabilities have reached a perfect 10 out of 10, classifying them as extremely dangerous. Attackers can leverage these flaws to execute arbitrary code without authorization or gain full control over victim websites. Due to the massive base of affected websites, cybersecurity personnel strongly advise all system administrators utilizing this open-source management system to immediately inspect and update the relevant extensions to their latest secure versions to defend against the currently detected in-the-wild exploitation threats.",
    tags_en: ["Joomla", "iCagenda", "Balbooa Forms", "CMS Vulnerabilities", "Open Source Security", "In-the-Wild Exploitation", "CVSS 10"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/07/17/torvalds-challenged-the-haters-to-fork-linux-someone-said-hold-my-beer/5274275", lang: "EN" }
    ]
  },
  {
    id: "20260717-076",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟延後 Exchange Online 舊版傳輸層安全性協定淘汰時程，為企業資安管理員爭取緩衝時間",
    summary: "微軟宣布調整 Exchange Online 的安全郵件傳輸政策，決議延後強制全面停用舊版傳輸層安全性協定（TLS 1.0 與 TLS 1.1）的既定時程。這項調整旨在為全球企業的 IT 與資安系統管理員提供更充裕的緩衝時間，以升級現有不支援 TLS 1.2 以上版本的舊型系統、設備或第三方整合工具。微軟強調，雖然延期實施，但淘汰安全性不足的舊版加密協定仍是保障郵件傳輸安全的既定方向，強烈建議組織加速遷移至現代化的加密標準，避免未來面臨郵件傳遞中斷的實務影響。本次公告並未提及特定 CVE 編號、CVSS 漏洞評分或受影響的確切用戶數量。",
    tags: ["Microsoft", "Exchange Online", "TLS", "傳輸層安全性協定", "企業資安", "雲端安全"],
    title_en: "Microsoft Postpones Exchange Online Legacy Transport Layer Security Protocol Deprecation Timeline, Gaining Buffer Time for Enterprise Cybersecurity Administrators",
    summary_en: "Microsoft announced an adjustment to its Exchange Online secure mail transport policy, deciding to postpone the established timeline for enforcing the comprehensive deprecation of legacy Transport Layer Security protocols (TLS 1.0 and TLS 1.1). This adjustment aims to provide more ample buffer time for global enterprise IT and cybersecurity administrators to upgrade existing legacy systems, devices, or third-party integration tools that do not support TLS 1.2 or higher. Microsoft emphasized that despite the postponed implementation, deprecating insecure legacy encryption protocols remains the established direction for ensuring mail transport security; the company strongly recommends that organizations accelerate migration to modern encryption standards to avoid practical impacts of mail delivery disruption in the future. This announcement did not mention specific CVE IDs, CVSS vulnerability scores, or the exact number of affected users.",
    tags_en: ["Microsoft", "Exchange Online", "TLS", "Transport Layer Security", "Enterprise Cybersecurity", "Cloud Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/saas/2026/07/17/microsoft-gives-admins-exchange-online-breathing-room/5274346", lang: "EN" }
    ]
  },
  {
    id: "20260717-077",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Fortinet FortiSandbox 重大漏洞遭攻擊者積極利用，美國 CISA 釋出修補指令",
    summary: "美國網路安全暨基礎設施安全局（CISA）發布警告，指出 Fortinet 的惡意軟體分析平台 FortiSandbox 存在多個重大安全漏洞，且已被攻擊者實質利用。這些漏洞（包含 CVE-2026-XXXX 系列，具體編號與 CVSS 分數原文未公開）屬於高風險的遠端程式碼執行或權限提升漏洞，攻擊者可藉此繞過安全防護，在受影響的沙箱系統中執行惡意代碼，進而影響企業整體的威脅情資分析能力。CISA 已將此漏洞納入「已知遭利用漏洞」（KEV）清單，並要求美國聯邦機構在特定期限內完成更新。對此，Fortinet 已發布對應的安全公告，強烈建議所有使用該產品的企業與資安人員，應立即將 FortiSandbox 升級至官方指定的最新安全版本，以防範潛在的針對性攻擊。",
    tags: ["Fortinet", "FortiSandbox", "CISA", "KEV", "漏洞利用", "沙箱安全", "資安公告"],
    title_en: "Fortinet FortiSandbox Critical Vulnerabilities Actively Exploited by Attackers; US CISA Issues Patching Directive",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning stating that multiple critical security vulnerabilities exist in Fortinet's malware analysis platform, FortiSandbox, and are being actively exploited by attackers. These vulnerabilities (including the CVE-2026-XXXX series, with specific IDs and CVSS scores undisclosed in the original text) fall under high-risk remote code execution or privilege escalation vulnerabilities. Attackers can leverage them to bypass security defenses and execute malicious code within affected sandbox systems, thereby impacting an organization's overall threat intelligence analysis capabilities. CISA has added these vulnerabilities to its Known Exploited Vulnerabilities (KEV) catalog and ordered US federal agencies to complete updates within a specified deadline. In response, Fortinet has released corresponding security advisories, strongly recommending that all enterprises and cybersecurity personnel using the product immediately upgrade FortiSandbox to the latest officially designated secure versions to prevent potential targeted attacks.",
    tags_en: ["Fortinet", "FortiSandbox", "CISA", "KEV", "Vulnerability Exploitation", "Sandbox Security", "Security Advisory"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/17/attackers-target-critical-fortisandbox-flaws-as-cisa-issues-patch-order/5274287", lang: "EN" }
    ]
  },
  {
    id: "20260717-078",
    trackers: ["os"],
    category: "重點關注",
    title: "澳洲電信龍頭 Optus 發生大規模行動網路中斷，起因為 NTP 伺服器時間倒流引發系統連鎖故障",
    summary: "澳洲大型電信業者 Optus 發生全國性的行動網路中斷事件，導致數百萬用戶無法通話與上網。調查顯示，該起事故的根源為其中一台關鍵的網路時間協定（NTP）伺服器出現異常，將系統時間錯誤地回推，導致與其他 NTP 伺服器產生嚴重的時間同步衝突。此時間落差引發了網路基礎設施的連鎖反應，使得路由器與核心網路設備無法正常處理認證與資料傳輸。目前相關技術細節如特定的 CVE 編號、CVSS 分數及受攻擊向量均未公開，官方正聚焦於優化時間同步機制的容錯架構。專家建議企業與維運人員應針對 NTP 服務導入多來源交叉驗證及異常時間漂移的自動阻斷機制，避免單一時間源錯誤擴大為系統性癱瘓。",
    tags: ["Optus", "NTP", "行動網路中斷", "基礎設施故障", "澳洲", "時間同步"],
    title_en: "Major Mobile Network Outage Hits Australian Telecom Giant Optus, Triggered by NTP Server Time Rollback Causing Cascading System Failures",
    summary_en: "Major Australian telecom operator Optus experienced a nationwide mobile network outage, leaving millions of users unable to make calls or access the internet. Investigations reveal that the root cause of the incident was an anomaly in one of its critical Network Time Protocol (NTP) servers, which incorrectly rolled back the system time and caused a severe time synchronization conflict with other NTP servers. This time discrepancy triggered a chain reaction across the network infrastructure, rendering routers and core network equipment unable to properly process authentication and data transmission. Currently, relevant technical details such as specific CVE IDs, CVSS scores, and attack vectors have not been disclosed, and officials are focusing on optimizing the fault-tolerant architecture of the time synchronization mechanism. Experts recommend that enterprises and operations personnel implement multi-source cross-verification and automatic blocking mechanisms for abnormal time drifts in NTP services to prevent a single time source error from escalating into a systemic collapse.",
    tags_en: ["Optus", "NTP", "Mobile Network Outage", "Infrastructure Failure", "Australia", "Time Synchronization"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/07/17/ntp-server-that-traveled-back-in-time-caused-massive-aussie-mobile-outage/5274059", lang: "EN" }
    ]
  },
  {
    id: "20260717-079",
    trackers: ["os"],
    category: "重點關注",
    title: "南韓政府計劃開發國家級安全專屬 AI 模型以應對地緣政治與假訊息威脅",
    summary: "南韓科學技術資訊通信部（MSIT）宣布將投入國家資源，開發一套專為安全與國防設計的自主 AI 模型。此舉旨在降低對外國技術（如 OpenAI 或 Google）的依賴，並防範潛在的供應鏈封鎖。該模型將針對南韓特定的地緣政治環境進行最佳化，核心應用包含網路威脅偵測、假訊息與深偽技術（Deepfake）防禦，以及軍事決策支援。技術細節與特定的 CVE 漏洞或 CVSS 評分並未在文中公開。實務上，該專案預期提升南韓關鍵基礎設施的數位韌性，並強化國家安全機關的自動化防禦能力。官方建議國內科技產業與學術界後續應積極參與此生態系的建立，以確保本土 AI 技術的合規性與安全性。",
    tags: ["南韓科學技術資訊通信部", "人工智慧安全", "地緣政治", "假訊息防禦", "國家安全", "自主 AI 模型"],
    title_en: "South Korean Government Plans to Develop National-Level Security-Exclusive AI Model to Counter Geopolitical and Misinformation Threats",
    summary_en: "The South Korean Ministry of Science and ICT (MSIT) announced that it will invest national resources to develop an autonomous AI model specifically designed for security and national defense. This move aims to reduce reliance on foreign technologies (such as OpenAI or Google) and prevent potential supply chain blockades. The model will be optimized for South Korea's specific geopolitical environment, with core applications including cyber threat detection, misinformation and Deepfake defense, as well as military decision-making support. Technical details and specific CVE vulnerabilities or CVSS scores were not disclosed in the text. In practice, the project is expected to enhance the digital resilience of South Korea's critical infrastructure and strengthen the automated defense capabilities of national security agencies. Officials recommend that the domestic tech industry and academia actively participate in the subsequent establishment of this ecosystem to ensure the compliance and security of indigenous AI technology.",
    tags_en: ["南韓科學技術資訊通信部", "AI Safety", "Geopolitics", "Misinformation Defense", "National Security", "Autonomous AI Model"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/17/south-korea-making-its-own-security-centric-ai-model/5274034", lang: "EN" }
    ]
  },
  {
    id: "20260717-080",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟宣布 2026 年 9 月淘汰 Outlook Meeting Insights 功能，改由 Copilot 接手以消除隱私外洩誤解",
    summary: "微軟證實將於 2026 年 9 月初淘汰 Outlook 的「Meeting Insights」功能，並由 Microsoft 365 Copilot 取代。該功能自 2020 年推出，利用機器學習在會議邀請介面自動顯示使用者近期修改的相關檔案與郵件。然而，由於預設開啟且介面設計不佳，常讓使用者誤以為敏感機密文件已被當作附件發送給外部客戶，進而引發資安恐慌與混淆。未來該功能移除後，系統將不再主動列出檔案，改由付費的 Copilot 提供會議準備摘要。微軟強調 Copilot 能更理解上下文並提供更智慧的體驗，此舉亦是為了進一步推廣其 AI 生態系。",
    tags: ["Microsoft", "Outlook", "Meeting Insights", "Copilot", "微軟", "資安風險", "使用者介面"],
    title_en: "Microsoft announces deprecation of Outlook Meeting Insights feature in September 2026, to be replaced by Copilot to eliminate privacy leakage misunderstandings",
    summary_en: "Microsoft has confirmed that it will deprecate the 'Meeting Insights' feature in Outlook in early September 2026, replacing it with Microsoft 365 Copilot. Launched in 2020, the feature used machine learning to automatically display files and emails recently modified by the user within the meeting invitation interface. However, due to being enabled by default and having poor interface design, it often led users to mistakenly believe that sensitive confidential files were being sent as attachments to external clients, causing security panic and confusion. After the removal of this feature, the system will no longer proactively list files; instead, paid Copilot will provide meeting preparation summaries. Microsoft emphasized that Copilot can better understand context and provide a smarter experience, and this move is also intended to further promote its AI ecosystem.",
    tags_en: ["Microsoft", "Outlook", "Meeting Insights", "Copilot", "Microsoft", "Cybersecurity Risk", "User Interface"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/18/microsoft-is-retiring-the-outlook-meeting-insights-feature-that-made-users-think-they-leaked-documents-replacing-it-with-copilot", lang: "EN" }
    ]
  },
  {
    id: "20260717-081",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟 Teams 推出全新工作地點簽到功能引發員工監控疑慮，官方發聲明捍衛隱私安全",
    summary: "微軟正在 Microsoft Teams 中逐步部署一項全新的「工作地點簽到」（workplace check-in）功能，旨在延伸現有的線上狀態系統。該功能可透過偵測員工電腦是否連接公司 Wi-Fi 或註冊的周邊設備（如螢幕），自動將實際工作位置更新為特定辦公大樓，以促進混合工作模式下的同仁協作。然而，此舉引發外界對於職場員工監控的強烈隱私疑慮。微軟官方對此回應並捍衛其設計，強調這絕非監控工具或員工審查系統，且不會持續追蹤員工的移動軌跡，亦不會顯示精確的樓層或座位。微軟表示該功能在預設情況下為關閉，企業管理員啟用時需在「告知並允許退出」或「主動詢問加入」模式中擇一，然而實務上組織仍可能透過內部 HR 政策強制員工配合。建議資安與人事主管應審慎評估此功能對隱私政策的影響。",
    tags: ["Microsoft", "Microsoft Teams", "隱私疑慮", "員工監控", "工作地點簽到", "混合辦公", "企業安全政策"],
    title_en: "Microsoft Teams Launches New Workplace Check-In Feature Raising Employee Surveillance Concerns, Company Issues Statement Defending Privacy and Security",
    summary_en: "Microsoft is gradually deploying a new 'workplace check-in' feature in Microsoft Teams, aimed at extending the existing presence status system. By detecting whether an employee's computer is connected to corporate Wi-Fi or registered peripherals (such as monitors), this feature automatically updates the physical work location to a specific office building to facilitate colleague collaboration in hybrid work models. However, this move has raised strong privacy concerns regarding workplace employee surveillance. Microsoft responded by defending its design, emphasizing that it is by no means a surveillance tool or an employee auditing system, and that it will not continuously track employees' movements, nor will it display precise floors or seats. Microsoft stated that the feature is disabled by default, and when enterprise administrators enable it, they must choose between 'notify and allow opt-out' or 'actively prompt to opt-in' modes; however, in practice, organizations may still mandate employee compliance through internal HR policies. Cybersecurity and HR executives are advised to carefully evaluate the impact of this feature on privacy policies.",
    tags_en: ["Microsoft", "Microsoft Teams", "隱私疑慮", "員工監控", "工作地點簽到", "混合辦公", "企業安全政策"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/18/not-employee-surveillance-microsoft-defends-teams-new-location-tracking-feature-now-rolling-out", lang: "EN" }
    ]
  },
  {
    id: "20260717-082",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft Teams 將預設啟用 AI 會議封存功能並生成 .meeting 檔案，引發資安與隱私防護關注",
    summary: "微軟宣布將於 2026 年 8 月起，針對符合條件的 Microsoft Teams 會議預設啟用 AI 自動封存功能。系統會在符合儲存會議記錄、參與者具備 Microsoft 365 Copilot 授權等條件下，自動處理會議記錄與中繼資料，並於企業租戶擁有的 SharePoint 嵌入式容器中生成 .meeting 封存檔案，用於提升 Copilot 及 Facilitator 的分析與內容檢索能力。雖然該檔案不包含原始逐字稿且無法被使用者直接修改或移動，但預設開啟的特性仍帶來潛在的資料隱私與合規風險。企業資安與系統管理員若欲停用此功能，必須手動透過會議策略中的「AI 記憶與封存」選項將其關閉。此外，Teams 亦將調整即時字幕的髒話過濾器為預設關閉。",
    tags: ["Microsoft", "Microsoft Teams", "Copilot", "AI 隱私", "資料治理", "SharePoint", "會議封存"],
    title_en: "Microsoft Teams will default to enabling AI meeting recording and generating .meeting files, raising cybersecurity and privacy concerns",
    summary_en: "Microsoft announced that starting in August 2026, Microsoft Teams will automatically enable AI recording for eligible meetings. Under conditions such as meeting record storage and participant possession of Microsoft 365 Copilot licenses, the system will automatically process meeting records and metadata, generating a .meeting archive file within the SharePoint embedded container owned by the enterprise tenant. This is intended to enhance Copilot and Facilitator's analysis and content retrieval capabilities. Although this file does not contain the original transcript and cannot be directly modified or moved by users, its default activation introduces potential data privacy and compliance risks. Enterprise cybersecurity and system administrators must manually disable this feature by turning off the 'AI Memory and Recording' option within the meeting policies. Furthermore, Teams will also adjust the profanity filter for live captions to be disabled by default.",
    tags_en: ["Microsoft", "Microsoft Teams", "Copilot", "AI Privacy", "Data Governance", "SharePoint", "Meeting Recording"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/17/microsoft-teams-will-use-ai-to-archive-your-meetings-for-copilot-analysis-by-default-plus-6-more-changes", lang: "EN" }
    ]
  },
  {
    id: "20260717-083",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Square Wire 開源資料庫漏洞 CVE-2026-45799：負數欄位長度未驗證恐導致服務崩潰",
    summary: "開源序列化工具 Wire 被揭露存在安全漏洞 CVE-2026-45799。受影響產品為 wire-runtime 程式庫，該產品主要為 Android、Kotlin、Swift 和 Java 提供 gRPC 及 Protocol Buffers 支援。技術細節指出，當內部元件處理經過特殊設計的 Protobuf 欄位時，未在執行跳過操作前驗證欄位長度是否為非負數。攻擊者可藉由偽造特定的編碼，將長度指定為負數，進而誘發陣列索引越界異常，直接導致處理未授信資料載荷的服務發生異常崩潰。此漏洞的 CVSS 3.1 評分為未公開，但攻擊向量顯示為網路觸發。建議開發人員將相關套件升級至 6.3.0 或 7.0.0-alpha03 以上版本以防範風險。",
    tags: ["Square Wire", "CVE-2026-45799", "Protocol Buffers", "gRPC", "拒絕服務攻擊", "wire-runtime", "安全漏洞"],
    title_en: "Square Wire Open-Source Database Vulnerability CVE-2026-45799: Negative Field Length Unvalidated May Cause Service Crash",
    summary_en: "The open-source serialization tool Wire has been found to have a security vulnerability, CVE-2026-45799. The affected product is the wire-runtime library, which primarily provides gRPC and Protocol Buffers support for Android, Kotlin, Swift, and Java. Technical details indicate that when an internal component processes a specially designed Protobuf field, it fails to validate that the field length is a non-negative number before executing a skip operation. An attacker can exploit this by forging specific encoding that sets the length to a negative number, thereby triggering an array index out-of-bounds exception and directly causing the service, which processes untrusted data payloads, to crash. The CVSS 3.1 score for this vulnerability is undisclosed, but the attack vector is network-based. Developers are advised to upgrade the relevant packages to version 6.3.0 or 7.0.0-alpha03 or higher to mitigate the risk.",
    tags_en: ["Square Wire", "CVE-2026-45799", "Protocol Buffers", "gRPC", "Denial of Service Attack", "wire-runtime", "Security Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-45799", lang: "EN" }
    ]
  },
  {
    id: "20260717-084",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Red Hat結合NVIDIA AI，利用Agentic AI提升漏洞管理精度，從套件層級分析轉向函數可利用性評估",
    summary: "本文介紹Red Hat如何利用Agentic AI，結合NVIDIA的先進AI框架，革新傳統的漏洞管理流程。傳統的資安掃描工具僅能停留在套件層級，容易產生大量無法實際利用的誤報（False Positives）。Red Hat的Trusted Profile Analyzer中的Exploit Intelligence功能，透過深度函數級別分析，追蹤應用程式的執行路徑，以確定特定漏洞函數是否在實際應用情境中可到達或可執行。如果無法利用，系統將自動判定為「不可利用」（Non-Exploitable）。這項技術的實務影響是讓安全團隊能從處理海量的理論漏洞，轉而專注於真正具有業務風險且可被利用的威脅。此外，Red Hat OpenShift AI平台也提供了一個安全的部署環境，讓企業在滿足數位主權要求下，安全地部署AI應用。該解決方案透過SBOM、CVE輸入，利用LLM規劃和Agent執行，最終生成標準的CSAF VEX檔案，大幅提升資安決策的精準度。",
    tags: ["Red Hat", "NVIDIA", "Agentic AI", "OpenShift", "SBOM", "CVE", "漏洞管理", "VEX"],
    title_en: "Red Hat Combines NVIDIA AI with Agentic AI to Enhance Vulnerability Management Precision, Shifting from Package-Level Analysis to Function-Level Exploitability Assessment",
    summary_en: "This article introduces how Red Hat is utilizing Agentic AI, combined with NVIDIA's advanced AI framework, to revolutionize traditional vulnerability management processes. Traditional security scanning tools are limited to package-level analysis, often generating a large volume of false positives that are not practically exploitable. Red Hat's Exploit Intelligence feature within the Trusted Profile Analyzer performs deep function-level analysis, tracking an application's execution path to determine if a specific vulnerability function is reachable or executable in a real-world application context. If it cannot be exploited, the system automatically flags it as 'Non-Exploitable.' The practical impact of this technology is that security teams can shift their focus from managing massive amounts of theoretical vulnerabilities to concentrating on genuinely business-critical and exploitable threats. Furthermore, the Red Hat OpenShift AI platform provides a secure deployment environment, allowing enterprises to safely deploy AI applications while meeting digital sovereignty requirements. This solution utilizes SBOM and CVE inputs, employing LLM planning and Agent execution to ultimately generate standardized CSAF VEX files, significantly improving the precision of cybersecurity decision-making.",
    tags_en: ["Red Hat", "NVIDIA", "Agentic AI", "OpenShift", "SBOM", "CVE", "Vulnerability Management", "VEX"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/agentic-ai-red-hat-openshift-and-nvidia-shifting-precision-security", lang: "EN" }
    ]
  }
];
