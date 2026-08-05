// data-20260528.js — 2026-05-28
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-28"] = [
  {
    id: "20260528-001",
    trackers: ["security"],
    category: "重大事件",
    title: "嘉年華公司遭駭：員工帳號受騙外洩數百萬旅客個人資料",
    summary: "郵輪營運商嘉年華公司（Carnival Corporation）宣布，其約六百萬名個人資料遭到近期資料外洩。事件於四月十四日被發現，駭客透過社交工程（social engineering）取得一名員工帳號，進而存取公司系統並竊取包含個人資料的檔案。受影響的個人資料種類包括姓名、地址、出生日期、電子郵件、電話號碼，甚至包含政府頒發的身份證號碼。駭客組織 ShinyHunters 在其洩露網站聲稱竊取了八百七十萬筆記錄，並於四月下旬公開了數據。根據資料外洩通知網站 HaveIBeenPwned 的分析，與嘉年華旗下品牌 Holland America 營運的 Mariner Society 會員計畫相關的帳號，約有七百五十萬個帳號可能受影響。專家建議，企業應將社交工程韌性視為核心資安控制，而非僅是意識訓練，應強化防釣魚的 MFA、條件式存取政策和特權存取分割等防禦措施。",
    tags: ["Carnival Corporation", "資料外洩", "社交工程", "個人資料", "Mariner Society", "身份盜用"],
    title_en: "Carnival Corporation Hacked: Millions of Passenger Records Leaked via Employee Account Compromise",
    summary_en: "Cruise line operator Carnival Corporation announced that approximately six million personal records were compromised in a recent data breach. The incident was discovered on April 14th, when hackers gained access to an employee account through social engineering, subsequently accessing company systems and stealing files containing personal data. The affected personal data types include names, addresses, dates of birth, email addresses, phone numbers, and even government-issued identification numbers. The hacking group ShinyHunters claimed on its leak site to have stolen 8.7 million records, and publicly disclosed the data in late April. According to analysis from the data breach notification site HaveIBeenPwned, approximately 7.5 million accounts related to the Mariner Society membership program, operated by Carnival's subsidiary Holland America, may be affected. Experts recommend that enterprises treat social engineering resilience as a core security control, rather than merely an awareness training topic. Defenses should be strengthened with MFA, conditional access policies, and privileged access segmentation to prevent phishing.",
    tags_en: ["Carnival Corporation", "Data Breach", "Social Engineering", "Personal Data", "Mariner Society", "Identity Theft"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/carnival-data-breach-exposed-6-million-people", lang: "EN" }
    ]
  },
  {
    id: "20260528-002",
    trackers: ["security"],
    category: "法規與標準",
    title: "資安保險促使企業量化風險：分析其對安全防禦與勒索威脅的雙面影響",
    summary: "本文探討網路保險（Cyber Insurance）如何從一個利基產品發展成企業風險管理的核心要素。保險公司要求企業涵蓋的範圍已擴大至涵蓋資料外洩的修復成本、法規罰款、業務中斷損失，甚至包括網路勒索金支付。這種機制迫使組織必須將以往抽象的資安風險，轉化為具體的財務數字，從而提升了企業對資安風險的關注度。然而，文章也指出一個潛在的風險：保險的存在可能反而誘使攻擊者。駭客會識別出購買保險的目標，並根據其保額來調整勒索金要求，形成一個「保險可能激勵攻擊」的惡性循環。為應對此風險，保險提供者現在要求被保公司必須維持最低的資安標準，例如多因素驗證（MFA）、完善的資料備份和文件化的事件應變流程，否則理賠可能會被拒絕。這使得保險成為推動企業提升整體資安防禦的催化劑。",
    tags: ["網路保險", "風險量化", "企業風險管理", "資安防禦", "勒索軟體", "多因素驗證"],
    title_en: "Cyber Insurance Drives Corporate Risk Quantification: Analyzing its Dual Impact on Security Defense and Ransomware Threats",
    summary_en: "This article explores how Cyber Insurance has evolved from a niche product into a core element of corporate risk management. Insurers now require companies to cover a scope that includes data breach remediation costs, regulatory fines, business interruption losses, and even payments for network ransoms. This mechanism forces organizations to convert previously abstract cybersecurity risks into concrete financial figures, thereby increasing corporate awareness of cybersecurity risks. However, the article also points out a potential risk: the existence of insurance might actually incentivize attackers. Hackers may identify insured targets and adjust their ransom demands based on the coverage amount, creating a vicious cycle of 'insurance potentially incentivizing attacks.' To counter this risk, insurers now require insured companies to maintain minimum cybersecurity standards, such as Multi-Factor Authentication (MFA), robust data backups, and documented incident response procedures, otherwise claims may be denied. This makes insurance a catalyst for driving enterprises to improve their overall cybersecurity defenses.",
    tags_en: ["Cyber Insurance", "Risk Quantification", "Corporate Risk Management", "Cybersecurity Defense", "Ransomware", "Multi-Factor Authentication"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/focus-cyber-insurance-quantifying-risk-reshape-security", lang: "EN" }
    ]
  },
  {
    id: "20260528-003",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "歐盟網路韌性法案（CRA）迫近期限，呼籲開源生態系統提升合規性",
    summary: "本文為 OpenSSF 季度更新，重點強調了歐盟網路韌性法案（EU CRA）的合規性壓力。文章指出 CRA 已不再是理論概念，且其九月截止日期正在快速逼近，呼籲開源生態系統的基礎設施和維護者必須從僅僅「對照要求」轉向「主動實施合規」。此外，OpenSSF 也發布了《Python 安全編碼指南 v1.0》，提供了一個框架獨立的資源，用以指導開發者修復常見漏洞。文章還介紹了 OpenSSF 成立的「大使計畫」，旨在透過全球社群領袖傳播安全最佳實踐，並討論了開源套件註冊庫面臨的經濟壓力，以及利用 OSV API 檢測惡意套件的實務應用。",
    tags: ["EU CRA", "OpenSSF", "Python 安全編碼", "開源生態系統", "合規性", "供應鏈安全"],
    title_en: "EU Cyber Resilience Act (CRA) Deadline Nears, Calling for Open Source Ecosystem to Enhance Compliance",
    summary_en: "This article is an OpenSSF quarterly update, focusing on the compliance pressure from the EU Cyber Resilience Act (EU CRA). The article points out that CRA is no longer a theoretical concept, and its September deadline is rapidly approaching, urging the infrastructure and maintainers of the open source ecosystem to transition from merely 'meeting requirements' to 'proactively implementing compliance.' Furthermore, OpenSSF has released the 'Python Secure Coding Guidelines v1.0,' providing a framework-agnostic resource to guide developers in fixing common vulnerabilities. The article also introduces the OpenSSF 'Ambassador Program,' aimed at disseminating security best practices through global community leaders, and discusses the economic pressures facing open source package registries, as well as practical applications of using the OSV API to detect malicious packages.",
    tags_en: ["EU CRA", "OpenSSF", "Python Secure Coding", "Open Source Ecosystem", "Compliance", "Supply Chain Security"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/newsletter/2026/05/28/openssf-newsletter-may-2026", lang: "EN" }
    ]
  },
  {
    id: "20260528-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Gogs 關鍵 RCE 漏洞曝光：未經授權用戶可透過惡意 Pull Request 執行程式碼",
    summary: "一個針對流行的開源自託管 Git 服務 Gogs 的嚴重安全漏洞被揭露。該漏洞允許任何已驗證用戶，在特定條件下實現遠端程式碼執行（RCE）。根據 Rapid7 評分，此漏洞的 CVSS 評分為 9.4。攻擊者只需創建帳號和儲存庫，並在設定中啟用 Rebase 合併功能，即可透過包含惡意分支名稱的 Pull Request，將 `--exec` 旗標注入到 `git rebase` 過程中，從而執行任意 Shell 指令。此漏洞的實務影響極為嚴重，攻擊者可竊取所有儲存庫的憑證、入侵伺服器、篡改程式碼，甚至造成跨租戶資料外洩，讀取同一共享伺服器上其他用戶的私有儲存庫。由於該漏洞尚未修補，建議管理者應立即審核並限制用戶註冊和儲存庫創建權限，並特別審核 Rebase 合併的設定。",
    tags: ["Gogs", "RCE", "Git", "開源安全", "漏洞與威脅情報", "CVSS"],
    title_en: "Gogs Critical RCE Vulnerability Exposed: Unauthorized Users Can Execute Code via Malicious Pull Request",
    summary_en: "A severe security vulnerability targeting the popular open-source self-hosted Git service Gogs has been disclosed. This vulnerability allows any authenticated user, under specific conditions, to achieve Remote Code Execution (RCE). According to Rapid7 scoring, this vulnerability has a CVSS score of 9.4. An attacker only needs to create an account and a repository, and enable the Rebase merge feature in the settings, to inject the `--exec` flag into the `git rebase` process via a Pull Request containing a malicious branch name, thereby executing arbitrary shell commands. The practical impact of this vulnerability is extremely severe; attackers can steal credentials for all repositories, compromise the server, tamper with code, and even cause cross-tenant data leakage, reading private repositories of other users on the same shared server. Since this vulnerability has not yet been patched, administrators are advised to immediately review and restrict user registration and repository creation permissions, and specifically audit the Rebase merge settings.",
    tags_en: ["Gogs", "RCE", "Git", "Open Source Security", "Vulnerability and Threat Intelligence", "CVSS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/critical-gogs-rce-vulnerability-lets.html", lang: "EN" }
    ]
  },
  {
    id: "20260528-005",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 FortiClient EMS 漏洞 CVE-2026-35616，透過偽裝更新推送資訊竊取惡意負載",
    summary: "資安公司 Arctic Wolf 觀察到，惡意行為者持續利用 FortiClient Endpoint Management Server (EMS) 的一個關鍵漏洞 CVE-2026-35616，進行憑證竊取活動。此漏洞為一個預認證 API 存取繞過，可導致權限提升，CVSS 分數為 9.1。攻擊者利用 EMS 的信任管理路徑，將惡意負載偽裝成合法的 Fortinet 端點更新，透過 PowerShell 靜默執行。攻擊流程包括：利用漏洞修改 EMS 配置，阻止韌體升級提醒，並插入惡意腳本。惡意執行路徑是透過名為 \"fortitray.exe\" 的合法執行檔，啟動一個 .cmd 腳本，該腳本再呼叫 Base64 編碼的 PowerShell 腳本。最終的惡意執行檔 \"FortiEndpoint_Patch.exe\" 偽裝成更新，實質上是一個資訊竊取器，能從 Chromium 和 Gecko 瀏覽器中收集密碼、Cookie 及信用卡等敏感資料，並透過 PowerShell 將資料傳輸至攻擊者控制的 IP 位址。Fortinet 已在 FortiClient EMS 7.4.7 版本及之後修補此問題，建議用戶立即升級。",
    tags: ["FortiClient EMS", "CVE-2026-35616", "憑證竊取", "PowerShell", "資訊竊取", "Fortinet"],
    title_en: "Hackers exploit FortiClient EMS vulnerability CVE-2026-35616 to steal malicious payloads via disguised update push",
    summary_en: "Security firm Arctic Wolf observed that malicious actors are continuously exploiting a critical vulnerability, CVE-2026-35616, in FortiClient Endpoint Management Server (EMS) for credential theft activities. This vulnerability is a pre-authenticated API access bypass that can lead to privilege escalation, with a CVSS score of 9.1. Attackers utilize the EMS's trust management path to disguise malicious payloads as legitimate Fortinet endpoint updates, executed via PowerShell silently. The attack process includes: exploiting the vulnerability to modify EMS configurations, preventing firmware upgrade notifications, and injecting malicious scripts. The malicious execution path involves a legitimate executable named \"fortitray.exe\" launching a .cmd script, which in turn calls an Base64 encoded PowerShell script. Finally, the malicious executable \"FortiEndpoint_Patch.exe\" disguises itself as an update, but is actually an information stealer capable of collecting sensitive data such as passwords, cookies, and credit card information from Chromium and Gecko browsers, and transmitting this data to an attacker-controlled IP address via PowerShell. Fortinet has patched this issue in FortiClient EMS version 7.4.7 and later, and recommends that users upgrade immediately.",
    tags_en: ["FortiClient EMS", "CVE-2026-35616", "Credential Theft", "PowerShell", "Information Stealing", "Fortinet"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/threat-actors-exploit-critical.html", lang: "EN" }
    ]
  },
  {
    id: "20260528-006",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟強推協調式漏洞揭露，回應研究人員公開多個零日漏洞攻擊的爭議",
    summary: "微軟（Microsoft）公開呼籲業界採用協調式漏洞揭露（CVD）模式，要求研究社群在發現漏洞後，應先與受影響的廠商分享資訊，以便廠商有足夠時間評估影響並修補。此聲明是在一位研究人員 Chaotic Eclipse（又名 Nightmare-Eclipse）公開揭露多個影響 Windows 組件（包括 Defender 和 BitLocker）的零日漏洞後發出的。該研究人員在過去一個月內，公開了包括 BlueHammer (CVE-2026-33825)、RedSun (CVE-2026-41091)、UnDefend (CVE-2026-45498)、YellowKey (CVE-2026-45585) 等多個漏洞的細節。微軟指出，這些漏洞在未事先通知的情況下公開，使客戶面臨不必要的風險，並強調這些漏洞已在野外被積極利用。微軟強烈反對這種非協調的公開揭露，並警告 PoC 代碼一旦落入不法分子手中，可能造成「真實世界的後果」。修補建議是業界應遵循協調式漏洞揭露流程，確保廠商有時間修補，避免漏洞被惡意利用。",
    tags: ["Microsoft", "CVE-2026-33825", "CVE-2026-41091", "CVE-2026-45498", "零日漏洞", "協調式漏洞揭露", "Windows"],
    title_en: "Microsoft Strongly Promotes Coordinated Vulnerability Disclosure in Response to Researcher Publicizing Multiple Zero-Day Exploits",
    summary_en: "Microsoft has publicly called on the industry to adopt a Coordinated Vulnerability Disclosure (CVD) model, urging the research community to share information with affected vendors after discovering a vulnerability. This is to ensure vendors have sufficient time to assess the impact and apply patches. This statement was issued following a researcher, Chaotic Eclipse (also known as Nightmare-Eclipse), who publicly disclosed multiple zero-day vulnerabilities affecting Windows components (including Defender and BitLocker). Over the past month, this researcher has disclosed details on multiple vulnerabilities, including BlueHammer (CVE-2026-33825), RedSun (CVE-2026-41091), UnDefend (CVE-2026-45498), and YellowKey (CVE-2026-45585). Microsoft pointed out that the public disclosure of these vulnerabilities without prior notice exposes customers to unnecessary risk, and emphasized that these vulnerabilities have been actively exploited in the wild. Microsoft strongly opposes this uncoordinated disclosure, warning that PoC code falling into the hands of malicious actors could lead to \"real-world consequences.\" The suggested remedy is for the industry to follow the CVD process, ensuring vendors have time to patch and preventing the vulnerabilities from being maliciously exploited.",
    tags_en: ["Microsoft", "CVE-2026-33825", "CVE-2026-41091", "CVE-2026-45498", "Zero-Day Vulnerability", "Coordinated Vulnerability Disclosure", "Windows"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/microsoft-slams-public-zero-day.html", lang: "EN" }
    ]
  },
  {
    id: "20260528-007",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將DAEMON Tools供應鏈攻擊列入KEV：惡意簽名檔繞過防禦機制",
    summary: "美國網路安全及基礎設施安全局（CISA）已將針對DAEMON Tools軟體的供應鏈攻擊納入其已知漏洞（KEV）目錄，並指定聯邦民用行政部門（FCEB）必須在 2026 年 5 月 30 日前修補。此漏洞（CVE-2026-8398，CVSS v4 分數：9.3）的攻擊者透過入侵供應商（AVB Disc Soft）的建置或發佈基礎設施，植入了三個惡意二進位檔：DTHelper.exe、DiscSoftBusServiceLite.exe 和 DTShellHlp.exe。這些惡意程式使用了供應商合法的程式碼簽名憑證進行數位簽署，使得惡意安裝程式看起來具有可信度，從而繞過了基於簽名的偵測機制。實務上，這提醒組織必須高度警惕供應鏈中的惡意植入，即使攻擊者能取得合法簽名，也需透過行為分析和多層防禦來驗證軟體來源的完整性。",
    tags: ["CISA", "DAEMON Tools", "CVE-2026-8398", "供應鏈攻擊", "KEV", "數位簽名"],
    title_en: "CISA Lists DAEMON Tools Supply Chain Attack in KEV: Malicious Signature Bypasses Defenses",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added a supply chain attack targeting DAEMON Tools software to its Known Exploited Vulnerabilities (KEV) catalog, mandating that Federal Civilian Executive Branch (FCEB) agencies must remediate by May 30, 2026. This vulnerability (CVE-2026-8398, CVSS v4 score: 9.3) involved attackers compromising the build or distribution infrastructure of the supplier (AVB Disc Soft) and injecting three malicious binaries: DTHelper.exe, DiscSoftBusServiceLite.exe, and DTShellHlp.exe. These malicious programs used the supplier's legitimate code signing certificate for digital signing, making the malicious installer appear trustworthy and thereby bypassing signature-based detection mechanisms. Practically, this reminds organizations to be highly vigilant about malicious implants within the supply chain; even if attackers obtain a legitimate signature, verifying the integrity of the software source requires behavioral analysis and multi-layered defenses.",
    tags_en: ["CISA", "DAEMON Tools", "CVE-2026-8398", "Supply Chain Attack", "KEV", "Digital Signature"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/threatsday-bulletin-claude-security.html", lang: "EN" }
    ]
  },
  {
    id: "20260528-008",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "荷蘭查緝俄羅斯「彈甲託管」網路：THE.Hosting 轉移資產與活動持續，關鍵基礎設施仍面臨威脅",
    summary: "荷蘭執法部門曾對 THE.Hosting 進行查緝，扣押了超過 800 台伺服器並逮捕了兩名營運人員，但該彈甲託管網路的惡意活動並未受阻。根據網路威脅情報公司 ELLIO 的報告，該網路的掃描活動持續不減，顯示了現代網路犯罪基礎設施的極高韌性。THE.Hosting 曾是俄羅斯網路犯罪活動的載體，其資產（ASN AS44477）經歷了多次轉移和重塑，從 Stark Industries Solution 到 PQ Hosting Plus S.R.L.，最終轉移至位於荷蘭的 WorkTitans B.V. 旗下。儘管荷蘭警方行動，但由於其 IP 地址區塊仍透過 BGP 宣告，且服務跨越多國，犯罪分子能迅速在不同地點重建服務。其掃描活動範圍極廣，不僅針對 Web 伺服器、SSH、FTP 等常見弱點，更擴展到工業控制系統（ICS）和資料庫，包括 MongoDB、Redis、PostgreSQL、Oracle，以及 DNP3 和 EtherNet/IP 等工業通訊協定，對電網和水系統等關鍵基礎設施構成潛在威脅。",
    tags: ["THE.Hosting", "彈甲託管", "ELLIO", "AS44477", "工業控制系統", "DNP3", "關鍵基礎設施"],
    title_en: "Netherlands Investigates Russian 'Shell Hosting' Network: THE.Hosting Continues Asset and Activity Transfer, Critical Infrastructure Remains Threatened",
    summary_en: "Dutch law enforcement previously raided THE.Hosting, seizing over 800 servers and arresting two operators, but the malicious activity of the shell hosting network has not been halted. According to a report from the threat intelligence company ELLIO, the network's scanning activities remain constant, demonstrating the extremely high resilience of modern cybercrime infrastructure. THE.Hosting has served as a vehicle for Russian cybercrime activities, and its assets (ASN AS44477) have undergone multiple transfers and restructuring, moving from Stark Industries Solution to PQ Hosting Plus S.R.L., and finally transferring to WorkTitans B.V., located in the Netherlands. Despite the police action in the Netherlands, because its IP address block is still announced via BGP, and its services span multiple countries, criminals can quickly rebuild services in different locations. Its scanning activities are extremely broad, targeting common vulnerabilities such as Web servers, SSH, and FTP, and extending to Industrial Control Systems (ICS) and databases, including MongoDB, Redis, PostgreSQL, Oracle, as well as industrial communication protocols like DNP3 and EtherNet/IP, posing potential threats to critical infrastructure such as power grids and water systems.",
    tags_en: ["THE.Hosting", "Shell Hosting", "ELLIO", "AS44477", "Industrial Control Systems", "DNP3", "Critical Infrastructure"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/dutch-raid-russian-bulletproof-host", lang: "EN" }
    ]
  },
  {
    id: "20260528-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新型 BTMOB 遠端存取木馬（RAT）透過 MaaS 模式在巴西及拉美擴散，利用無代碼介面提升攻擊門檻",
    summary: "一種名為 BTMOB 的進階 Android 遠端存取木馬（RAT）正在巴西和拉丁美洲地區擴散。該木馬採用惡意軟體即服務（MaaS）模式，並提供無代碼的惡意應用程式生成介面，極大地降低了網路犯罪分子進行手機設備全面接管的門檻。BTMOB 不僅能竊取金融憑證，還具備擷取螢幕、記錄設備活動、竊取敏感資料等多種能力，並能透過濫用 Android 無障礙服務（Accessibility Services）來獲取高權限。攻擊者透過冒充串流服務、加密貨幣平台等網站進行釣魚，誘騙受害者安裝惡意 APK。為防禦，專家建議用戶僅從官方 Google Play 商店下載應用程式，提高警惕，並應對所有來源的釣魚連結保持高度懷疑，同時企業應部署專業的行動安全解決方案。",
    tags: ["BTMOB", "RAT", "MaaS", "Android", "遠端存取木馬", "釣魚攻擊"],
    title_en: "New BTMOB Remote Access Trojan (RAT) Spreads via MaaS Model in Brazil and Latin America, Lowering Attack Barriers with No-Code Interface",
    summary_en: "An advanced Android Remote Access Trojan (RAT) named BTMOB is spreading across Brazil and Latin America. The malware utilizes a Malicious as a Service (MaaS) model and provides a no-code malicious application generation interface, significantly lowering the barrier for cybercriminals to achieve full mobile device takeover. BTMOB is capable of not only stealing financial credentials but also capturing screens, recording device activity, and stealing sensitive data, and can gain high privileges by abusing Android Accessibility Services. Attackers are conducting phishing campaigns by impersonating websites such as streaming services and cryptocurrency platforms, tricking victims into installing malicious APKs. For defense, experts recommend that users only download applications from the official Google Play Store, remain vigilant, and treat all phishing links with high suspicion. Meanwhile, enterprises should deploy professional mobile security solutions.",
    tags_en: ["BTMOB", "RAT", "MaaS", "Android", "Remote Access Trojan", "Phishing Attack"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/btmob-rat-brazil-latam-maas-model", lang: "EN" }
    ]
  },
  {
    id: "20260528-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "北歐CISO報告：儘管網路威脅增加，資安主管報告嚴重事件穩定，歸因於MDR與攻擊面管理改善",
    summary: "根據Truesec發布的北歐CISO報告，受訪資安主管指出，儘管全球網路威脅的數量和強度都在增加，但其組織所面臨的嚴重網路攻擊事件數量卻保持穩定。報告指出，這是一個「顯著的成就」，因為在快速變化的時代，事件數量的穩定本身就代表了攻擊的相對成功率下降。資安專家歸因於組織整體資安防禦能力的提升，例如增加外包給成熟的資安監控與回應（MDR）服務，以及改善攻擊面管理。雖然攻擊者利用目標組織的平均時間從2024年的53天大幅縮減至2026年的2.4天，但CISO們仍報告了穩定水平。這顯示資安團隊在偵測和遏制能力上有所進步，但同時也面臨了更大的時間壓力。此外，報告也提到，資安主管的職責重心正從保護關鍵系統轉向保護核心業務流程，強調將網路風險轉化為業務流程風險。",
    tags: ["CISO", "Truesec", "MDR", "攻擊面管理", "網路威脅", "北歐"],
    title_en: "Nordic CISO Report: Despite Rising Cyber Threats, CISOs Report Stable Severe Incident Volume Due to Improved MDR and Attack Surface Management",
    summary_en: "According to the Nordic CISO Report published by Truesec, surveyed CISOs noted that while the volume and intensity of global cyber threats are increasing, the number of severe cyber attack incidents faced by their organizations remains stable. The report highlights this as a \"significant achievement,\" as the stability of incident volume itself represents a relative decrease in the success rate of attacks in a rapidly changing era. Cybersecurity experts attribute this to the overall improvement in organizational cybersecurity defense capabilities, such as increasing outsourcing to mature Managed Detection and Response (MDR) services and improving attack surface management. Although attackers have significantly reduced the average time to target organizations from 53 days in 2024 to 2.4 days in 2026, CISOs still reported stable levels. This indicates progress in the detection and containment capabilities of security teams, but also points to greater time pressure. Furthermore, the report mentions that the focus of CISOs' responsibilities is shifting from protecting critical systems to protecting core business processes, emphasizing the transformation of cyber risk into business process risk.",
    tags_en: ["CISO", "Truesec", "MDR", "Attack Surface Management", "Cyber Threats", "Nordic"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-analytics/nordic-cisos-rising-cyber-threats", lang: "EN" }
    ]
  },
  {
    id: "20260528-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB EIBPORT 設備面臨跨站腳本漏洞：CVSS 3.1 分數為 8 的高風險安全警示",
    summary: "ABB 針對其 EIBPORT 產品系列發出安全警示，指出其在特定版本中存在安全漏洞。該漏洞屬於「跨站腳本」（Cross-site Scripting, CWE-79），允許成功攻擊者在未經身份驗證的情況下，竊取設備的 Session ID。受影響的產品包括 EIBPORT V3 KNX (2CLA963710W1001)、EIBPORT V3 KNX (2CSM256242R2001) 和 EIBPORT V3 KNX GSM (2CLA963720W1001)，且版本均低於 3.9.2。該漏洞的 CVSS 3.1 基本分數為 8（高風險），攻擊向量為網路（AV:N），無需權限（PR:L），且可遠端觸發（UI:R）。ABB 已提供韌體更新來修復此問題，建議客戶盡快應用修補程式，以防止攻擊者竊取敏感資訊或更改設備配置。此外，建議實施網路隔離和防火牆等安全措施，保護工控系統。",
    tags: ["ABB", "EIBPORT", "CVE-2021-22291", "跨站腳本", "工控系統", "韌體漏洞"],
    title_en: "ABB EIBPORT Devices Face Cross-Site Scripting Vulnerability: High-Risk Alert with CVSS 3.1 Score of 8",
    summary_en: "ABB has issued a security alert regarding its EIBPORT product line, noting a vulnerability in specific versions. The flaw is a Cross-site Scripting (CWE-79) vulnerability, which allows a successful attacker to steal the device's Session ID without authentication. Affected products include EIBPORT V3 KNX (2CLA963710W1001), EIBPORT V3 KNX (2CSM256242R2001), and EIBPORT V3 KNX GSM (2CLA963720W1001), all running versions lower than 3.9.2. The vulnerability has a CVSS 3.1 base score of 8 (High Risk), with an attack vector of Network (AV:N), low privileges required (PR:L), and is remotely exploitable (UI:R). ABB has provided a firmware update to fix this issue and advises customers to apply the patch promptly to prevent attackers from stealing sensitive information or altering device configurations. Furthermore, implementing security measures such as network isolation and firewalls is recommended to protect industrial control systems.",
    tags_en: ["ABB", "EIBPORT", "CVE-2021-22291", "Cross-site Scripting", "Industrial Control Systems", "Firmware Vulnerability"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-03", lang: "EN" }
    ]
  },
  {
    id: "20260528-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Schneider Electric Ecostruxure Machine Expert HVAC 存在資訊明文儲存漏洞，可能洩露受保護原始碼",
    summary: "本報告指出 Schneider Electric 的 Ecostruxure™ Machine Expert HVAC 產品存在一項 CWE-312 類型的漏洞（CVE-2026-6332）。此漏洞屬於「資訊明文儲存」，若授權攻擊者能夠存取原始碼進行編輯或編譯，可能導致敏感資訊洩露，進而洩露受保護的原始碼，造成機密性損失。受影響版本為 Ecostruxure™ Machine Expert HVAC 1.10.0 以下版本。該產品適用於化學、關鍵製造、能源、水處理等關鍵基礎設施產業，且部署範圍為全球。為修復此漏洞，建議升級至 Ecostruxure™ Machine Expert HVAC 1.10.0 版本。此外，報告也強調了工業控制系統的整體安全最佳實務，包括隔離網路、實體控制、限制程式模式存取，並建議使用 VPN 等安全方法進行遠端存取。",
    tags: ["Schneider Electric", "Ecostruxure Machine Expert HVAC", "CVE-2026-6332", "CWE-312", "OT/ICS", "關鍵基礎設施"],
    title_en: "Schneider Electric Ecostruxure Machine Expert HVAC has Information Plaintext Storage Vulnerability, Potentially Leaking Protected Source Code",
    summary_en: "This report identifies a CWE-312 type vulnerability (CVE-2026-6332) in Schneider Electric's Ecostruxure™ Machine Expert HVAC product. This vulnerability is classified as 'Information Plaintext Storage.' If an authorized attacker can access the source code for editing or compilation, it could lead to the leakage of sensitive information, resulting in the exposure of protected source code and a loss of confidentiality. Affected versions are Ecostruxure™ Machine Expert HVAC versions below 1.10.0. This product is used in critical infrastructure sectors such as chemical, critical manufacturing, energy, and water treatment, with global deployment. To remediate this vulnerability, it is recommended to upgrade to Ecostruxure™ Machine Expert HVAC version 1.10.0. Furthermore, the report emphasizes overall security best practices for industrial control systems, including network segmentation, physical controls, restricting program mode access, and recommending secure methods like VPN for remote access.",
    tags_en: ["Schneider Electric", "Ecostruxure Machine Expert HVAC", "CVE-2026-6332", "CWE-312", "OT/ICS", "Critical Infrastructure"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-07", lang: "EN" }
    ]
  },
  {
    id: "20260528-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PUSR USR-W610 設備遭硬編碼密碼漏洞（CVE-2026-7786）攻擊，CVSS 9.8 警示",
    summary: "Jinan USR IOT Technology Limited (PUSR) 的 USR-W610 RS232/485 to Wi-Fi/Ethernet Converter 設備，版本 7.03T.07，存在硬編碼管理員憑證的漏洞（CVE-2026-7786）。此漏洞屬於 CWE-798，攻擊者可透過韌體分析提取明文憑證，進而取得設備管理員權限。該漏洞的 CVSS 評分為 9.8（嚴重級），攻擊向量為網路（AV:N），無需權限（PR:N），並可導致高機密性、高完整性及高可用性影響。由於廠商未回應修補建議，CISA 建議用戶應將控制系統設備的網路暴露程度降到最低，確保設備無法從網際網路存取。此外，應將控制系統網路隔離於業務網路後方，並在需要遠端存取時，使用 VPN 等更安全的機制，並定期更新所有相關設備。",
    tags: ["CVE-2026-7786", "PUSR", "USR-W610", "硬編碼密碼", "OT/ICS", "CVSS"],
    title_en: "PUSR USR-W610 Device Vulnerable to Hardcoded Credentials Attack (CVE-2026-7786), CVSS 9.8 Alert",
    summary_en: "The USR-W610 RS232/485 to Wi-Fi/Ethernet Converter device, version 7.03T.07, manufactured by Jinan USR IOT Technology Limited (PUSR), contains a vulnerability (CVE-2026-7786) related to hardcoded administrator credentials. This vulnerability falls under CWE-798, allowing attackers to extract plaintext credentials through firmware analysis and subsequently gain administrator privileges on the device. The vulnerability has a CVSS score of 9.8 (Critical), with an attack vector of Network (AV:N), no privileges required (PR:N), and can lead to high confidentiality, high integrity, and high availability impact. Since the vendor has not responded with a patch recommendation, CISA advises users to minimize the network exposure of their control system devices, ensuring they cannot be accessed from the internet. Furthermore, control system networks should be isolated behind the business network, and when remote access is necessary, more secure mechanisms such as VPN should be used, along with regularly updating all related equipment.",
    tags_en: ["CVE-2026-7786", "PUSR", "USR-W610", "Hardcoded Credentials", "OT/ICS", "CVSS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-02", lang: "EN" }
    ]
  },
  {
    id: "20260528-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB Busch-Welcome 門體開關執行器存在遠端越權漏洞，CVSS 評分 6.8",
    summary: "ABB 針對其 Busch-Welcome 兩線門體開關執行器（ABB Busch-Welcome 2 Wire Door Opener Actuator）發布了安全通告，揭露了 CVE-2025-7705 漏洞。此漏洞屬於「認證繞過」，是因產品預設啟用相容模式所致。攻擊者若成功利用，可能導致對安裝該產品的建築物進行物理的未授權存取。該漏洞的 CVSS 3.1 分數為 6.8（中等風險），攻擊向量為物理（AV:P），權限等級為低（AC:L），無需權限（PR:N），無需使用者互動（UI:N），範圍受限（S:U），機密性、完整性、可用性皆為高（C:H/I:H/A:H）。ABB 建議的修復措施包括：在系統運行時，切換產品模式開關從「門開」切到「燈」模式，等待一秒後再切回「門開」模式；或執行電源重置（斷電再通電），讓系統在啟動時自動重新校準並修正誤配置。此外，CISA 建議用戶應將控制系統設備最小化網路暴露，並透過防火牆隔離至業務網路。",
    tags: ["ABB", "CVE-2025-7705", "Busch-Welcome", "門體開關執行器", "OT/ICS", "認證繞過"],
    title_en: "Remote Privilege Escalation Vulnerability Found in ABB Busch-Welcome Door Opener Actuator, CVSS Score 6.8",
    summary_en: "ABB has issued a security advisory regarding its Busch-Welcome 2 Wire Door Opener Actuator, disclosing CVE-2025-7705. This vulnerability is classified as an 'Authentication Bypass' flaw, stemming from the product's default activation of a compatibility mode. Successful exploitation could potentially lead to unauthorized physical access to buildings equipped with the product. The vulnerability has a CVSS 3.1 score of 6.8 (Medium Risk), with a Physical Attack Vector (AV:P), Low Attack Complexity (AC:L), No Privileges Required (PR:N), No User Interaction (UI:N), and Limited Scope (S:U). The impact is High for Confidentiality, Integrity, and Availability (C:H/I:H/A:H). ABB recommends mitigation steps including: switching the product mode switch from 'Door Open' to 'Light' mode while the system is running, waiting one second, and then switching back to 'Door Open' mode; or performing a power cycle (cutting and restoring power) to allow the system to automatically recalibrate and correct the misconfiguration upon startup. Furthermore, CISA advises users to minimize the network exposure of control system equipment and isolate it via a firewall from the business network.",
    tags_en: ["ABB", "CVE-2025-7705", "Busch-Welcome", "Door Opener Actuator", "OT/ICS", "Authentication Bypass"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-04", lang: "EN" }
    ]
  },
  {
    id: "20260528-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Fourth Frontier Frontier X 設備遭曝 BLE 漏洞：CVE-2026-5768 允許未經授權讀寫心率等健康數據",
    summary: "醫療設備廠商 Fourth Frontier 的 Frontier X 和 Frontier X2 設備，及其相關的 Android/iOS 應用程式，存在一個關鍵的未經身份驗證的 BLE 漏洞（CVE-2026-5768）。此漏洞屬於「關鍵功能缺乏身份驗證」（CWE-306），CVSS 3.1 分數為 8.8（高風險）。攻擊者僅需在 BLE 範圍內，即可未經授權讀寫設備的 GATT 特性，從而操縱活動狀態、觸發設備振動，甚至注入偽造的健康數據（如心率、呼吸率）到手機應用程式中。這可能導致設備被接管，進而造成患者的健康風險。受影響版本包括 Frontier X Android <v15.0.0、iOS <v25.0.0，以及 Frontier X2 所有版本。建議用戶應立即關注 Fourth Frontier 的修復公告，並採取網路隔離、防火牆保護等措施，將控制系統網路與業務網路分離，以最小化風險。",
    tags: ["Fourth Frontier", "CVE-2026-5768", "BLE", "醫療設備", "健康數據", "CWE-306"],
    title_en: "Fourth Frontier Frontier X Device Exposed to BLE Vulnerability: CVE-2026-5768 Allows Unauthorized Read/Write of Health Data",
    summary_en: "Medical device manufacturer Fourth Frontier's Frontier X and Frontier X2 devices, along with their associated Android/iOS applications, contain a critical unauthenticated BLE vulnerability (CVE-2026-5768). This vulnerability falls under 'Lack of Authentication for Critical Functionality' (CWE-306) and has a CVSS 3.1 score of 8.8 (High Risk). An attacker only needs to be within BLE range to unauthorizedly read and write the device's GATT characteristics, thereby manipulating activity status, triggering device vibrations, or even injecting falsified health data (such as heart rate or respiratory rate) into the mobile application. This could potentially lead to device hijacking, posing health risks to patients. Affected versions include Frontier X Android <v15.0.0, iOS <v25.0.0, and all versions of Frontier X2. Users are advised to monitor Fourth Frontier's patch announcements immediately and take measures such as network isolation and firewall protection, separating the control system network from the business network to minimize risk.",
    tags_en: ["Fourth Frontier", "CVE-2026-5768", "BLE", "Medical Device", "Health Data", "CWE-306"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-medical-advisories/icsma-26-148-01", lang: "EN" }
    ]
  },
  {
    id: "20260528-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CP Plus 網路攝影機錄影機面臨儲存型 XSS 漏洞 (CVE-2026-6824)，資安建議修補韌體",
    summary: "CP Plus 旗下 8 頻道網路錄影機 (NVR) 系列產品存在儲存型跨站腳本攻擊 (Stored XSS) 漏洞，編號為 CVE-2026-6824。此漏洞源於設備在處理使用者輸入時，對網頁生成缺乏足夠的淨化處理。攻擊者可注入惡意腳本並持久儲存在設備後端，當管理員或使用者存取受影響頁面時，腳本將在瀏覽器執行。這可能導致使用者會話劫持、執行未授權操作，甚至竊取或操縱敏感資料，嚴重影響系統完整性。\n\n此漏洞的 CVSS v3.1 分數為 8.4 (高風險)，攻擊向量為網路 (AV:N)，無需權限 (PR:H)，且可遠端觸發 (UI:R)。CP Plus 建議用戶立即更新韌體至最新版本，以修補此安全缺陷。此外，資安機構也建議將控制系統設備隔離於業務網路之外，並透過 VPN 等安全方式進行遠端存取。",
    tags: ["CP Plus", "CVE-2026-6824", "XSS", "NVR", "ICS", "韌體漏洞"],
    title_en: "CP Plus Network Camera Recorder Faces Stored XSS Vulnerability (CVE-2026-6824); Security Advises Firmware Patch",
    summary_en: "A Stored Cross-Site Scripting (XSS) vulnerability, designated as CVE-2026-6824, exists in CP Plus's 8-channel Network Video Recorder (NVR) series products. This vulnerability stems from the device's insufficient sanitization when processing user input for web page generation. An attacker can inject malicious scripts and persistently store them on the device's backend. When an administrator or user accesses the affected page, the script will execute in the browser. This could lead to user session hijacking, execution of unauthorized operations, or even the theft or manipulation of sensitive data, severely impacting system integrity.\n\nThe vulnerability has a CVSS v3.1 score of 8.4 (High Risk), with an Attack Vector of Network (AV:N), requiring No Privileges (PR:H), and being Remote (UI:R). CP Plus advises users to immediately update the firmware to the latest version to patch this security flaw. Furthermore, security organizations recommend isolating control system equipment from the business network and using secure methods like VPN for remote access.",
    tags_en: ["CP Plus", "CVE-2026-6824", "XSS", "NVR", "ICS", "Firmware Vulnerability"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-05", lang: "EN" }
    ]
  },
  {
    id: "20260528-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "XCharge C6 設備面臨三項重大漏洞：包含未驗證韌體更新與堆疊溢出，CVSS 分數高達 9.8",
    summary: "資安機構發布警示，指出 XCharge C6 充電控制器存在三項嚴重漏洞，可能允許攻擊者取得管理員權限或執行惡意程式碼。其中，CVE-2026-9037 是一個關鍵的韌體更新機制缺陷，由於缺乏密碼學簽章驗證，攻擊者可透過管理介面安裝未經授權的韌體，CVSS 分數為 9.8 (CRITICAL)。此外，設備還存在 CVE-2026-9038 的堆疊式緩衝區溢出，若攻擊者具備實體存取權，可透過充電介面傳送超限訊息，導致記憶體損壞；以及 CVE-2026-9039 的配置弱點，允許透過充電連接器介面取得管理員權限。所有受影響的 XCharge C6 產品版本均為 2026 年 5 月 22 日之前。廠商已確認並部署了修補更新，建議用戶應立即檢查並更新設備韌體，以修復這些嚴重安全風險。",
    tags: ["XCharge", "C6", "CVE-2026-9037", "CVE-2026-9038", "韌體漏洞", "堆疊溢出", "OT/ICS"],
    title_en: "XCharge C6 Device Faces Three Major Vulnerabilities: Including Unverified Firmware Update and Stack Overflow, CVSS Score Reaches 9.8",
    summary_en: "A cybersecurity organization has issued a warning regarding three severe vulnerabilities found in the XCharge C6 charging controller, which could potentially allow attackers to gain administrator privileges or execute malicious code. One of these is CVE-2026-9037, a critical firmware update mechanism flaw. Due to the lack of cryptographic signature verification, an attacker can install unauthorized firmware via the management interface, scoring a CVSS of 9.8 (CRITICAL). Furthermore, the device also contains CVE-2026-9038, a stack buffer overflow vulnerability. If an attacker has physical access, they can send oversized messages through the charging interface, leading to memory corruption; and CVE-2026-9039, a configuration weakness that allows gaining administrator privileges through the charging connector interface. All affected XCharge C6 product versions are those released before May 22, 2026. The manufacturer has confirmed and deployed a patch update, advising users to immediately check and update the device firmware to mitigate these severe security risks.",
    tags_en: ["XCharge", "C6", "CVE-2026-9037", "CVE-2026-9038", "Firmware Vulnerability", "Stack Overflow", "OT/ICS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-08", lang: "EN" }
    ]
  },
  {
    id: "20260528-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "KMW CCTV 設備曝 CVE-2026-5386：可遠端未經驗證重設密碼，危及監控系統",
    summary: "KMW 廠牌的 CCTV 監控攝影機系列（包括 KM-IP521 和 KM-IP421）受 CVE-2026-5386 漏洞影響。此漏洞屬於未經驗證的密碼重設缺陷（CWE-620），允許攻擊者在未經身份驗證的情況下，遠端將管理員密碼重設為已知值，從而獲得對攝影機影像和設定的完全未授權存取。該漏洞的 CVSS 3.1 分數為 9.1（CRITICAL）。為修復此問題，KMW 已發布了韌體更新。建議用戶應立即更新韌體，並將監控設備隔離於獨立網路，限制外部存取，並定期檢查韌體更新，以降低被攻擊的風險。此外，應透過 VPN 等更安全的方式進行遠端存取，並持續進行風險評估。",
    tags: ["KMW", "CVE-2026-5386", "CCTV", "OT/ICS", "韌體漏洞", "密碼重設"],
    title_en: "KMW CCTV Equipment Exposed to CVE-2026-5386: Remote Unauthenticated Password Reset Threatens Surveillance Systems",
    summary_en: "CCTV surveillance cameras from the KMW brand (including KM-IP521 and KM-IP421) are affected by the CVE-2026-5386 vulnerability. This flaw is an unauthenticated password reset defect (CWE-620), which allows an attacker to remotely reset the administrator password to a known value without authentication, thereby gaining unauthorized full access to the camera's images and settings. The vulnerability has a CVSS 3.1 score of 9.1 (CRITICAL). To fix this issue, KMW has released a firmware update. Users are advised to immediately update the firmware, isolate the surveillance equipment on a separate network, restrict external access, and regularly check for firmware updates to mitigate the risk of attack. Furthermore, remote access should be conducted through more secure methods like VPN, and continuous risk assessments should be performed.",
    tags_en: ["KMW", "CVE-2026-5386", "CCTV", "OT/ICS", "Firmware Vulnerability", "Password Reset"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-06", lang: "EN" }
    ]
  },
  {
    id: "20260528-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Danelec MacGregor VDR G4e 設備面臨三項漏洞，CVSS 評分最高達 8.7，建議立即更新韌體",
    summary: "本次資安警示指出，Danelec 的 MacGregor Voyage Data Recorder (VDR) G4e 設備存在三項重大漏洞：CVE-2026-42941、CVE-2026-42951 和 CVE-2026-44611。這些漏洞主要源於預設憑證未強制變更、帳號資料和密碼雜湊保護不足，以及密碼儲存機制易受暴力破解。攻擊者成功利用這些漏洞，可能取得設備管理員權限。受影響產品為 VDR G4e 版本低於 V5.250 的設備。建議用戶應儘早透過更新韌體至 V5.250 版本來修補，而非等待年度性能檢測。由於該設備用於交通系統等關鍵基礎設施，建議所有相關營運單位應高度警惕並立即採取修補措施。",
    tags: ["Danelec", "MacGregor VDR G4e", "CVE-2026-42941", "CVE-2026-42951", "CVE-2026-44611", "OT/ICS"],
    title_en: "Danelec MacGregor VDR G4e Equipment Faces Three Vulnerabilities, With CVSS Score Up to 8.7, Immediate Firmware Update Recommended",
    summary_en: "This security alert points out that Danelec's MacGregor Voyage Data Recorder (VDR) G4e equipment contains three critical vulnerabilities: CVE-2026-42941, CVE-2026-42951, and CVE-2026-44611. These vulnerabilities primarily stem from the failure to enforce changes to default credentials, insufficient protection of account data and password hashes, and the ease of brute-forcing stored passwords. Successful exploitation of these vulnerabilities could allow attackers to gain administrator privileges on the device. The affected product is VDR G4e devices running versions lower than V5.250. Users are advised to patch by updating the firmware to V5.250 immediately, rather than waiting for annual performance inspections. Given that this equipment is used in critical infrastructure such as transportation systems, all relevant operating units are advised to be highly vigilant and take immediate remediation measures.",
    tags_en: ["Danelec", "MacGregor VDR G4e", "CVE-2026-42941", "CVE-2026-42951", "CVE-2026-44611", "OT/ICS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-148-01", lang: "EN" }
    ]
  },
  {
    id: "20260528-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "OpenJDK 26 多項安全漏洞曝光：從資訊竊取到服務拒絕，建議立即更新修補程式",
    summary: "本公告揭露了 OpenJDK 26 版本中多個安全漏洞，涵蓋了 JAXP、Networking、JSSE、JGSS、2D、Libraries 和 Security 等多個核心組件。這些漏洞的本質皆源於組件未能正確驗證特定 API，或處理整數算術時存在缺陷。具體而言，攻擊者可利用這些漏洞遠端未經身份驗證地竊取敏感資訊（如 CVE-2026-22016, CVE-2026-22013, CVE-2026-23865），或造成服務拒絕（如 CVE-2026-34282, CVE-2026-22021），甚至在某些情況下（如 CVE-2026-22008）修改資料。此外，Security 組件的漏洞（CVE-2026-22007, CVE-2026-34268）則要求本地攻擊者才能利用。由於這些漏洞的影響範圍廣泛，建議所有使用 OpenJDK 26 的用戶應立即更新到最新的修補版本，以修補這些安全缺陷。",
    tags: ["OpenJDK", "CVE-2026-22016", "CVE-2026-34282", "CVE-2026-22021", "服務拒絕", "資訊竊取"],
    title_en: "Multiple Security Vulnerabilities Exposed in OpenJDK 26: From Information Theft to Denial of Service, Immediate Patching Recommended",
    summary_en: "This announcement reveals multiple security vulnerabilities in OpenJDK 26, affecting several core components including JAXP, Networking, JSSE, JGSS, 2D, Libraries, and Security. These vulnerabilities fundamentally stem from components failing to properly validate specific APIs or containing flaws in integer arithmetic handling. Specifically, attackers can exploit these vulnerabilities to remotely steal sensitive information without authentication (such as CVE-2026-22016, CVE-2026-22013, CVE-2026-23865), or cause a denial of service (such as CVE-2026-34282, CVE-2026-22021), and even modify data in certain scenarios (such as CVE-2026-22008). Furthermore, the vulnerabilities in the Security component (CVE-2026-22007, CVE-2026-34268) require a local attacker to exploit. Due to the wide impact scope of these vulnerabilities, all users utilizing OpenJDK 26 are advised to immediately update to the latest patched version to remediate these security flaws.",
    tags_en: ["OpenJDK", "CVE-2026-22016", "CVE-2026-34282", "CVE-2026-22021", "Denial of Service", "Information Theft"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8341-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "pip 函式庫面臨三項安全漏洞：包含 TLS 驗證繞過與 DoS 攻擊風險",
    summary: "Python 的套件管理工具 pip 及其內建的 urllib3 函式庫，近期被發現存在三項安全漏洞。第一，CVE-2024-35195 允許遠端攻擊者在 TLS 憑證驗證被禁用後，即使後續設定啟用驗證，仍能繞過憑證檢查，可能導致中間人攻擊（Man-in-the-Middle）。第二，CVE-2025-66418 存在資源消耗問題，攻擊者可利用其在處理 HTTP 回應時，未限制解壓縮步驟次數，導致服務拒絕（DoS）。第三，CVE-2025-66471 亦是資源消耗漏洞，源於其對高度壓縮資料的串流解壓縮處理不當，同樣可能導致 DoS 攻擊。這些漏洞主要影響依賴 pip 進行套件安裝和網路通訊的應用程式，建議使用者應立即升級 pip 及其相關依賴，以修補這些潛在的資安風險。",
    tags: ["pip", "CVE-2024-35195", "CVE-2025-66418", "CVE-2025-66471", "TLS", "Denial of Service"],
    title_en: "pip Library Faces Three Security Vulnerabilities: Including TLS Validation Bypass and DoS Risks",
    summary_en: "Python's package management tool pip, along with its built-in urllib3 library, was recently found to contain three security vulnerabilities. First, CVE-2024-35195 allows a remote attacker to bypass certificate checks even if validation is subsequently enabled, provided it was initially disabled, potentially leading to a Man-in-the-Middle attack. Second, CVE-2025-66418 is a resource consumption issue; an attacker can exploit it by utilizing the lack of limits on decompression steps when processing HTTP responses, potentially causing a Denial of Service (DoS). Third, CVE-2025-66471 is also a resource consumption vulnerability, stemming from improper handling of streaming decompression for highly compressed data, which can similarly lead to a DoS attack. These vulnerabilities primarily affect applications that rely on pip for package installation and network communication. Users are advised to immediately upgrade pip and its related dependencies to patch these potential security risks.",
    tags_en: ["pip", "CVE-2024-35195", "CVE-2025-66418", "CVE-2025-66471", "TLS", "Denial of Service"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8344-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GNU sed 編輯器存在處理符號連結時的漏洞，可能允許本地攻擊者覆寫任意檔案",
    summary: "本更新針對 GNU sed 編輯器的一個漏洞進行修補。該漏洞的發現者為 Michał Majchrowicz 和 Marcin Wyczechowski，問題出在 sed 在執行原地編輯（in-place edits）時，未能正確處理符號連結（symbolic links）。這使得本地攻擊者有可能利用此問題覆寫系統上的任意檔案，造成嚴重的系統安全風險。受影響的系統包括運行 Ubuntu 18.04 LTS 和 Ubuntu 20.04 LTS 的環境。修補建議是透過標準的系統更新機制，將 sed 套件升級至最新的安全版本，以消除此安全漏洞，降低系統的整體安全暴露面。",
    tags: ["sed", "GNU", "Ubuntu", "符號連結", "本地攻擊", "LPE"],
    title_en: "Vulnerability in GNU sed Editor When Handling Symbolic Links Could Allow Local Attackers to Overwrite Arbitrary Files",
    summary_en: "This update addresses a vulnerability in the GNU sed editor. The vulnerability was discovered by Michał Majchrowicz and Marcin Wyczechowski, and stems from sed's failure to correctly handle symbolic links during in-place edits. This could allow a local attacker to exploit the issue to overwrite arbitrary files on the system, posing a severe system security risk. Affected systems include environments running Ubuntu 18.04 LTS and Ubuntu 20.04 LTS. The recommended remediation is to upgrade the sed package to the latest secure version via standard system update mechanisms to eliminate this vulnerability and reduce the system's overall security exposure.",
    tags_en: ["sed", "GNU", "Ubuntu", "Symbolic Links", "Local Attack", "LPE"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8229-2", lang: "EN" }
    ]
  },
  {
    id: "20260528-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu 發布 22.04、18.04、16.04、14.04 等版本，修補多個 Vim 相關套件的資安漏洞",
    summary: "Ubuntu 官方發布了安全公告，針對多個版本的 Linux 作業系統（包括 22.04 LTS、18.04 LTS、16.04 LTS 和 14.04 LTS）中的 Vim 編輯器及其相關套件進行修補。本次更新涵蓋了 `vim`、`vim-athena`、`vim-common`、`vim-gtk`、`vim-nox` 等多個組件。由於原文未提供具體的 CVE 編號、CVSS 分數或漏洞描述，本次修補的具體漏洞細節未公開。實務影響為運行這些舊版或未更新 Vim 套件的系統可能面臨安全風險。建議所有使用上述 LTS 版本的用戶，應立即透過 Ubuntu Pro 或官方更新機制，升級所有受影響的 Vim 相關套件至最新版本，以確保系統安全。修補建議是執行系統更新指令，確保所有相關套件都已更新到修補版本。",
    tags: ["Ubuntu", "Vim", "LTS", "安全更新", "Linux", "資安修補"],
    title_en: "Ubuntu Releases Security Updates for Multiple Vim Packages Across Versions Including 22.04, 18.04, 16.04, and 14.04",
    summary_en: "Ubuntu has issued a security advisory to patch the Vim editor and its related packages across multiple versions of the Linux operating system (including 22.04 LTS, 18.04 LTS, 16.04 LTS, and 14.04 LTS). This update covers multiple components such as `vim`, `vim-athena`, `vim-common`, `vim-gtk`, and `vim-nox`. Since the original text did not provide specific CVE IDs, CVSS scores, or vulnerability descriptions, the detailed vulnerability information for this patch has not been disclosed. The practical impact is that systems running these older or unpatched Vim packages may face security risks. All users of the aforementioned LTS versions are advised to immediately upgrade all affected Vim-related packages to the latest version using Ubuntu Pro or the official update mechanism to ensure system security. The recommended patch action is to execute the system update command to ensure all relevant packages are updated to the patched version.",
    tags_en: ["Ubuntu", "Vim", "LTS", "Security Update", "Linux", "Security Patch"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8342-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu 警告：multipart 套件因正規表達式歧義可能導致服務拒絕攻擊",
    summary: "Ubuntu 發現 `multipart` 套件在處理特定 HTTP header 值時，其正規表達式交替（regular expression alternation）存在歧義問題。這可能允許遠端攻擊者利用此漏洞，導致 `multipart` 消耗過多資源，進而造成服務拒絕（Denial of Service, DoS）的狀況。這類問題屬於資源耗盡型攻擊。修復建議是透過執行標準的系統更新，將相關套件升級至修補後的版本，以消除正規表達式的歧義性，降低系統的資安風險。",
    tags: ["Ubuntu", "multipart", "正規表達式", "DoS", "服務拒絕"],
    title_en: "Ubuntu Warning: `multipart` package may allow Denial of Service attack due to regular expression ambiguity",
    summary_en: "Ubuntu discovered that the `multipart` package has an ambiguity issue in its regular expression alternation when processing specific HTTP header values. This could allow a remote attacker to exploit this vulnerability, causing `multipart` to consume excessive resources and thus resulting in a Denial of Service (DoS) condition. This type of issue constitutes a resource exhaustion attack. The recommended fix is to perform a standard system update to upgrade the relevant package to a patched version, eliminating the regular expression ambiguity and reducing the system's security risk.",
    tags_en: ["Ubuntu", "multipart", "Regular Expression", "DoS", "Denial of Service"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8343-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "OpenJDK 25 曝出多項安全漏洞：從資訊竊取到拒絕服務，需立即更新修補程式",
    summary: "本次安全公告揭露了 OpenJDK 25 版本包含多個安全漏洞，涵蓋多個核心組件。這些漏洞主要源於組件未能正確驗證特定 API，或處理整數算術時存在缺陷。具體而言，JAXP、Networking、JSSE、JGSS、Libraries、Security 等組件均受影響，並分別被分配了多個 CVE 編號，例如 CVE-2026-22016、CVE-2026-34282 等。攻擊向量包括遠端未驗證攻擊者（Remote unauthenticated attacker）和本地攻擊者（Local attacker）。實務影響範圍廣泛，包括攻擊者可能竊取敏感資訊、導致服務拒絕（Denial of Service, DoS），甚至修改資料。開發者和使用者應立即參考官方修補程式進行升級，以修復這些未經正確驗證的 API 存取問題，並確保系統的資料完整性與服務可用性。",
    tags: ["OpenJDK", "CVE-2026-22016", "CVE-2026-34282", "OpenJDK 25", "安全漏洞", "DoS"],
    title_en: "OpenJDK 25 Exposed with Multiple Security Vulnerabilities: From Information Theft to Denial of Service, Immediate Patching Required",
    summary_en: "This security advisory reveals multiple vulnerabilities in OpenJDK 25, affecting several core components. These vulnerabilities primarily stem from components failing to correctly validate specific APIs or containing flaws during integer arithmetic processing. Specifically, components such as JAXP, Networking, JSSE, JGSS, Libraries, and Security are affected, and each has been assigned multiple CVE IDs, such as CVE-2026-22016 and CVE-2026-34282. Attack vectors include remote unauthenticated attackers and local attackers. The practical impact is widespread, including the potential for attackers to steal sensitive information, cause Denial of Service (DoS), or even modify data. Developers and users should immediately refer to official patches for upgrading to fix these improperly validated API access issues, ensuring the data integrity and service availability of the system.",
    tags_en: ["OpenJDK", "CVE-2026-22016", "CVE-2026-34282", "OpenJDK 25", "Vulnerability", "DoS"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8339-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "LibreOffice 處理 OOXML 文件加密鹽參數錯誤，可能導致服務崩潰或執行任意程式碼",
    summary: "資安研究員 Duc Anh Nguyen 發現 LibreOffice 在處理精心構造的 OOXML 文件時，對於不匹配的加密鹽參數（encryption salt parameters）處理有誤。攻擊者可利用此漏洞，導致 LibreOffice 應用程式崩潰，造成服務拒絕（Denial of Service, DoS）。更嚴重的是，此漏洞可能進一步被利用來執行任意程式碼（arbitrary code execution）。修復建議是透過標準的系統更新，將相關套件升級至最新版本，以修補此安全漏洞，降低系統的整體安全風險。",
    tags: ["LibreOffice", "OOXML", "加密鹽參數", "Denial of Service", "任意程式碼執行"],
    title_en: "LibreOffice handles OOXML file encryption salt parameter error, potentially leading to service crash or arbitrary code execution",
    summary_en: "Security researcher Duc Anh Nguyen discovered that LibreOffice incorrectly handles mismatched encryption salt parameters when processing specially crafted OOXML files. Attackers can exploit this vulnerability to cause the LibreOffice application to crash, resulting in a Denial of Service (DoS). More severely, this vulnerability could potentially be leveraged for arbitrary code execution. The recommended fix is to upgrade the relevant packages to the latest version through standard system updates to patch this security flaw and reduce overall system risk.",
    tags_en: ["LibreOffice", "OOXML", "encryption salt parameters", "Denial of Service", "arbitrary code execution"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8340-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache HTTP Server 曝出多項高風險漏洞，涵蓋 SSRF、命令注入及會話劫持，多版本受影響",
    summary: "本次安全公告彙整了多個針對 Apache HTTP Server 的漏洞，涵蓋多個 CVE 編號，影響範圍廣泛。主要的漏洞類型包括：HTTP 響應分割（Response Splitting）、伺服器端請求偽造（SSRF）、命令注入（Command Injection）以及會話劫持（Session Hijacking）。\n\n受影響的產品和版本包括 Ubuntu 14.04 LTS、16.04 LTS、18.04 LTS、20.04 LTS 等。攻擊向量多為遠端，攻擊者可利用這些漏洞執行惡意操作。\n\n具體風險包括：\n1. **SSRF/資訊洩露**：透過 `mod_proxy`、`mod_rewrite` 或 `mod_headers` 等模組，攻擊者可發起 SSRF 攻擊或洩露敏感資訊。\n2. **命令注入**：`mod_cgid` 模組存在缺陷，可能導致命令注入。\n3. **會話劫持**：`mod_ssl` 模組存在缺陷，可能允許攻擊者劫持 HTTP 會話。\n\n修補建議：建議所有使用 Apache HTTP Server 的用戶，特別是運行舊版 LTS 版本的用戶，應立即升級或修補所有受影響的模組和核心版本，以防範被惡意利用。",
    tags: ["Apache HTTP Server", "SSRF", "命令注入", "HTTP 響應分割", "CVE-2024-38473", "CVE-2025-58098", "Ubuntu"],
    title_en: "Apache HTTP Server Exposed to Multiple High-Risk Vulnerabilities, Including SSRF, Command Injection, and Session Hijacking, Affecting Multiple Versions",
    summary_en: "This security advisory compiles multiple vulnerabilities targeting Apache HTTP Server, covering various CVE IDs and impacting a wide range of systems. The primary vulnerability types include: HTTP Response Splitting, Server-Side Request Forgery (SSRF), Command Injection, and Session Hijacking.\n\nThe affected products and versions include Ubuntu 14.04 LTS, 16.04 LTS, 18.04 LTS, 20.04 LTS, and others. The attack vectors are largely remote, allowing attackers to execute malicious operations using these vulnerabilities.\n\nSpecific risks include:\n1. **SSRF/Information Leakage**: Attackers can initiate SSRF attacks or leak sensitive information through modules such as `mod_proxy`, `mod_rewrite`, or `mod_headers`.\n2. **Command Injection**: A flaw in the `mod_cgid` module may lead to command injection.\n3. **Session Hijacking**: A flaw in the `mod_ssl` module may allow attackers to hijack HTTP sessions.\n\nMitigation Advice: All users of Apache HTTP Server, especially those running older LTS versions, are advised to immediately upgrade or patch all affected modules and core versions to prevent malicious exploitation.",
    tags_en: ["Apache HTTP Server", "SSRF", "Command Injection", "HTTP Response Splitting", "CVE-2024-38473", "CVE-2025-58098", "Ubuntu"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8338-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "QtSvg 處理 SVG 圖像時存在多重漏洞，可能導致系統崩潰或執行任意程式碼",
    summary: "QtSvg 模組在處理特定 SVG 圖像時，存在多個安全漏洞。這些漏洞的本質是程式碼未能正確處理某些 SVG 格式的輸入，可能導致應用程式崩潰（Denial of Service, DoS），甚至可能被攻擊者利用執行任意程式碼。本次公告涵蓋了多個 CVE 編號，包括 CVE-2018-19869、CVE-2021-3481、CVE-2021-28025、CVE-2021-45930，以及 CVE-2023-32573。受影響的系統版本包括 Ubuntu 16.04 LTS 和 Ubuntu 20.04 LTS。修補建議是執行標準的系統更新，以確保安裝到修復後的套件版本，從而降低系統的安全性風險。",
    tags: ["QtSvg", "SVG", "CVE-2023-32573", "Denial of Service", "Ubuntu", "漏洞"],
    title_en: "Multiple Vulnerabilities in QtSvg When Processing SVG Images Could Lead to System Crash or Arbitrary Code Execution",
    summary_en: "The QtSvg module contains multiple security vulnerabilities when processing specific SVG images. These vulnerabilities stem from the code's failure to correctly handle certain SVG format inputs, potentially leading to application crashes (Denial of Service, DoS), or even allowing attackers to execute arbitrary code. This announcement covers multiple CVE IDs, including CVE-2018-19869, CVE-2021-3481, CVE-2021-28025, CVE-2021-45930, and CVE-2023-32573. Affected system versions include Ubuntu 16.04 LTS and Ubuntu 20.04 LTS. The recommended fix is to perform a standard system update to ensure the installation of patched package versions, thereby mitigating system security risks.",
    tags_en: ["QtSvg", "SVG", "CVE-2023-32573", "Denial of Service", "Ubuntu", "Vulnerability"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8337-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PHP 核心多個漏洞曝光：從 SQL 注入到任意代碼執行，影響範圍涵蓋多個 CVE",
    summary: "本篇安全公告彙整了多個 PHP 核心函式庫的漏洞，涵蓋了資料庫操作、字串編碼處理、SOAP 請求解析以及 XML 處理等環節。其中，CVE-2025-14179 揭露了 PHP 在使用 PDO Firebird 驅動時，因不當處理 NUL 位元組而可能導致 SQL 注入攻擊。此外，多個漏洞如 CVE-2026-6722 允許遠端攻擊者利用物件參考處理錯誤執行任意代碼；CVE-2026-6735 則可讓攻擊者注入惡意 JavaScript 到 PHP-FPM 狀態頁面；而其他漏洞（如 CVE-2026-7259、CVE-2026-7261 等）多樣地導致服務崩潰或洩露敏感資訊。受影響的系統包括 Ubuntu 25.10 和 Ubuntu 26.04 LTS。建議使用者應立即更新 PHP 核心版本，以修補這些嚴重的安全缺陷，避免遭受遠端攻擊。",
    tags: ["PHP", "CVE-2025-14179", "CVE-2026-6722", "SQL 注入", "任意代碼執行", "Denial of Service"],
    title_en: "Multiple PHP Core Vulnerabilities Exposed: From SQL Injection to Arbitrary Code Execution, Affecting Multiple CVEs",
    summary_en: "This security announcement compiles multiple vulnerabilities in PHP core libraries, covering areas such as database operations, string encoding handling, SOAP request parsing, and XML processing. Specifically, CVE-2025-14179 reveals that PHP, when using the PDO Firebird driver, may be susceptible to SQL injection attacks due to improper handling of NUL bytes. Furthermore, several vulnerabilities, such as CVE-2026-6722, allow remote attackers to execute arbitrary code by exploiting object reference handling errors; CVE-2026-6735 allows attackers to inject malicious JavaScript into the PHP-FPM status page; and other vulnerabilities (such as CVE-2026-7259, CVE-2026-7261, etc.) variously cause service crashes or leak sensitive information. Affected systems include Ubuntu 25.10 and Ubuntu 26.04 LTS. Users are advised to immediately update the PHP core version to patch these critical security flaws and prevent remote attacks.",
    tags_en: ["PHP", "CVE-2025-14179", "CVE-2026-6722", "SQL Injection", "Arbitrary Code Execution", "Denial of Service"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8336-1", lang: "EN" }
    ]
  },
  {
    id: "20260528-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "分析 Gentlemen 勒索軟體：揭露其自傳播機制、加密流程與雙重勒索威脅",
    summary: "Microsoft 深入分析了 RaaS 威脅「The Gentlemen」勒索軟體，這是一種結合強大檔案加密與積極橫向傳播能力的惡意軟體。該勒索軟體使用 Go 語言編寫並透過 Garble 混淆，目標為 Windows 環境，並已在教育、交通、醫療和金融等產業造成衝擊。攻擊者使用雙重勒索（Double Extortion）戰術，不僅加密資料，還竊取敏感資訊以威脅公開。技術上，它利用 Curve25519 進行檔案加密，並透過多種橫向移動方法進行傳播。在執行前，它會檢查硬編碼的密碼，若不匹配則終止。若使用 `--full` 參數，它會創建一個 SYSTEM 權限的排程任務，以確保能加密本地和網路共用資料夾。本報告為防禦者提供了詳細的執行流程、防禦規避行為、加密細節和橫向移動技術分析，並提供了修復建議和 IOCs，協助組織應對此類威脅。",
    tags: ["The Gentlemen", "Ransomware", "RaaS", "Go 語言", "橫向移動", "雙重勒索"],
    title_en: "Analysis of The Gentlemen Ransomware: Revealing its Self-Propagation Mechanism, Encryption Process, and Double Extortion Threat",
    summary_en: "Microsoft has deeply analyzed the RaaS threat 'The Gentlemen' ransomware, a malicious program that combines strong file encryption with active lateral propagation capabilities. The ransomware is written in Go language and obfuscated using Garble, targeting Windows environments, and has impacted sectors including education, transportation, healthcare, and finance. The attackers employ Double Extortion tactics, not only encrypting data but also exfiltrating sensitive information to threaten public release. Technically, it utilizes Curve25519 for file encryption and propagates through various lateral movement methods. Before execution, it checks for hardcoded passwords and terminates if they do not match. If the `--full` parameter is used, it creates a SYSTEM-level scheduled task to ensure it can encrypt both local and network shared folders. This report provides defenders with a detailed analysis of the execution flow, defense evasion behaviors, encryption details, and lateral movement techniques, offering remediation suggestions and IOCs to help organizations respond to such threats.",
    tags_en: ["The Gentlemen", "Ransomware", "RaaS", "Go language", "Lateral Movement", "Double Extortion"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor", lang: "EN" }
    ]
  },
  {
    id: "20260528-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：cPanel外掛LiteSpeed漏洞已遭利用，聯邦機構須於5月29日前修補",
    summary: "美國網路安全暨基礎設施安全局（CISA）發出公告，將LiteSpeed為cPanel用戶提供的外掛程式中的權限提升漏洞CVE-2026-48172列入已遭利用的漏洞名單（KEV）。此漏洞的CVSS v4.0風險評分為滿分10分，且已確認被積極利用。CISA要求聯邦機構必須在5月29日前完成修補。此外，CISA也將其他漏洞如CVE-2026-8398等列入KEV，提醒用戶注意供應鏈攻擊導致的惡意程式植入。修補建議是所有使用cPanel外掛程式的用戶，應立即升級或修補相關系統，以避免遭受高風險的攻擊。",
    tags: ["CISA", "CVE-2026-48172", "LiteSpeed", "cPanel", "KEV", "權限提升"],
    title_en: "CISA Warns: LiteSpeed cPanel Plugin Vulnerability Exploited; Federal Agencies Must Patch by May 29",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) issued an advisory listing a privilege escalation vulnerability (CVE-2026-48172) in the LiteSpeed plugin for cPanel users as an actively exploited vulnerability (KEV). This vulnerability has a CVSS v4.0 risk score of 10.0 and has been confirmed to be actively exploited. CISA requires federal agencies to complete patching by May 29. Furthermore, CISA has listed other vulnerabilities, such as CVE-2026-8398, in the KEV, warning users about malicious code injection resulting from supply chain attacks. The recommended remediation is for all users of cPanel plugins to immediately upgrade or patch the relevant systems to avoid high-risk attacks.",
    tags_en: ["CISA", "CVE-2026-48172", "LiteSpeed", "cPanel", "KEV", "Privilege Escalation"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176187", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Veeam發布13.0.2版修補兩大漏洞：Windows代理程式與Linux備份伺服器存在權限提升及寫入任意檔案風險",
    summary: "備份與資料保護軟體廠商Veeam發布了主力備份軟體Veeam Backup & Replication的最新13.0.2版本，並修補了兩項重大安全漏洞。受影響範圍為13.0.1.2067版本以前的所有Veeam Backup & Replication 13.x版。第一項漏洞為CVE-2026-32996，CVSS評分為7.3分，存在於Windows代理程式，允許系統身分驗證的使用者利用漏洞提升本機權限。第二項漏洞為CVE-2026-32997，CVSS評分為8.6分，存在於Linux版備份伺服器，若帳號角色為備份管理員，可使攻擊者在伺服器上寫入任意檔案。Veeam建議所有用戶應立即升級至13.0.2版本，以修補這些已知的安全風險，確保備份系統的資料完整性與安全性。",
    tags: ["Veeam", "CVE-2026-32996", "CVE-2026-32997", "Veeam Backup & Replication", "備份系統", "權限提升"],
    title_en: "Veeam releases 13.0.2 patch to fix two vulnerabilities: Privilege escalation and arbitrary file write risks in Windows agents and Linux backup servers",
    summary_en: "Backup and data protection software vendor Veeam has released the latest 13.0.2 version of its flagship backup software, Veeam Backup & Replication, addressing two critical security vulnerabilities. The affected scope includes all Veeam Backup & Replication 13.x versions prior to 13.0.1.2067. The first vulnerability is CVE-2026-32996, with a CVSS score of 7.3, located in the Windows agent, which allows a system-authenticated user to exploit the vulnerability for local privilege escalation. The second vulnerability is CVE-2026-32997, with a CVSS score of 8.6, located in the Linux version backup server. If the account role is Backup Administrator, an attacker can use this to write arbitrary files on the server. Veeam recommends that all users immediately upgrade to version 13.0.2 to patch these known security risks, ensuring the data integrity and security of their backup systems.",
    tags_en: ["Veeam", "CVE-2026-32996", "CVE-2026-32997", "Veeam Backup & Replication", "Backup System", "Privilege Escalation"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176191", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "高風險漏洞揭露：VS Code MCP安裝對話框可遭惡意組態注入，可能劫持開發者身分",
    summary: "資安業者 Oasis Security 揭露微軟程式碼編輯器 Visual Studio Code (VS Code) 的 MCP 安裝對話框存在高風險漏洞 CVE-2026-41613。攻擊者可透過特製安裝連結，在開發者點擊安裝後，將惡意組態項目（如環境變數、HTTP標頭等）寫入工作區，但這些組態在安裝預覽畫面中並未顯示。由於 VS Code 當時缺乏對這些未顯示組態的檢查與提醒，攻擊者可植入惡意程式碼，使程式在啟動時執行攻擊者指定的指令，甚至造成隱蔽的連線身分劫持。這可能導致開發者後續使用 AI 助理或讀取檔案時，所有操作都以攻擊者植入的帳號身份完成。微軟已在 VS Code 1.119.1 版本修補此問題，透過在確認畫面顯示所有潛在的組態內容，提高使用者警覺性。建議用戶立即更新至 1.119.1 或以上版本，並全面檢查工作區的 mcp.json 設定，特別關注未經開發者主動加入的環境變數或授權標頭。",
    tags: ["Visual Studio Code", "CVE-2026-41613", "MCP", "環境變數", "身分劫持", "開發環境"],
    title_en: "High-Risk Vulnerability Disclosed: VS Code MCP Installation Dialog Can Be Subjected to Malicious Configuration Injection, Potentially Hijacking Developer Identity",
    summary_en: "Security firm Oasis Security disclosed a high-risk vulnerability, CVE-2026-41613, in the MCP installation dialog of Microsoft's code editor, Visual Studio Code (VS Code). An attacker can use a specially crafted installation link to write malicious configuration items (such as environment variables, HTTP headers, etc.) into the workspace after the developer clicks to install, even though these configurations are not displayed in the installation preview. Because VS Code previously lacked checks and warnings for these hidden configurations, an attacker could inject malicious code, causing the program to execute attacker-specified commands upon startup, potentially leading to covert connection identity hijacking. This could result in all subsequent developer operations, such as using AI assistants or reading files, being completed using the attacker-injected account identity. Microsoft has patched this issue in VS Code version 1.119.1 by displaying all potential configuration contents on the confirmation screen, thereby increasing user awareness. Users are advised to immediately update to version 1.119.1 or later, and to thoroughly check the mcp.json settings in the workspace, paying special attention to environment variables or authorization headers that were not actively added by the developer.",
    tags_en: ["Visual Studio Code", "CVE-2026-41613", "MCP", "Environment Variables", "Identity Hijacking", "Development Environment"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176189", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GitHub發布GHES 3.20.3修補重大漏洞：包含兩項SSRF、Linux Dirty Frag及簽章金鑰輪換要求",
    summary: "開發社群平臺GitHub本週釋出GitHub Enterprise Server (GHES) 3.20.3版本，修補多項重大及高風險漏洞。本次更新修補的重大漏洞包括CVE-2026-9312，這是一個前驗證階段的SSRF漏洞，允許攻擊者透過變造請求存取內部服務並曝露敏感憑證；另一個未編號的漏洞則針對五月資安事件進行補強，要求管理員輪換GHES執行個體的GPG公鑰，以應對惡意擴充套件竊取資料的風險。\n此外，GHES還修補了兩個與Linux核心相關的高風險漏洞，分別為代號Dirty Frag的CVE-2026-43284和CVE-2026-43500，影響IPsec ESP和RxRPC子系統。另一個SSRF漏洞CVE-2026-8606，允許攻擊者透過安全公告套件查詢功能誘發內部請求，並藉由測量回應時間推測私鑰。為徹底解決此類風險，GHES 3.20.3版本甚至直接移除了受影響的API。\n使用者在升級時需注意，除了輪換GPG公鑰外，若使用AWS S3或Google Cloud Storage的OIDC驗證，升級過程中可能需手動修補。建議管理員務必遵循官方指引，分批次開啟全公司級別的掃描功能，避免系統過載。",
    tags: ["GitHub", "GHES", "CVE-2026-9312", "SSRF", "Dirty Frag", "Linux核心", "GPG"],
    title_en: "GitHub Releases GHES 3.20.3 Patching Critical Vulnerabilities: Includes Two SSRF, Linux Dirty Frag, and Signature Key Rotation Requirements",
    summary_en: "The developer platform GitHub released GitHub Enterprise Server (GHES) version 3.20.3 this week, patching multiple critical and high-risk vulnerabilities. The major vulnerability patched in this update includes CVE-2026-9312, an SSRF vulnerability in the pre-authentication phase that allows attackers to access internal services and expose sensitive credentials by manipulating requests. Another unnumbered vulnerability addresses the May security incident, requiring administrators to rotate the GPG public key of the GHES instance to mitigate the risk of malicious extensions stealing data. Furthermore, GHES patched two high-risk vulnerabilities related to the Linux kernel: CVE-2026-43284 and CVE-2026-43500, affecting the IPsec ESP and RxRPC subsystems. Another SSRF vulnerability, CVE-2026-8606, allows attackers to trigger internal requests through the security advisory package query function, potentially inferring private keys by measuring response times. To thoroughly resolve these risks, the GHES 3.20.3 version even removes the affected API entirely. Users upgrading must note that, in addition to rotating the GPG public key, manual remediation may be required during the upgrade process if AWS S3 or Google Cloud Storage OIDC authentication is used. Administrators are advised to follow official guidelines and enable company-wide scanning features in batches to prevent system overload.",
    tags_en: ["GitHub", "GHES", "CVE-2026-9312", "SSRF", "Dirty Frag", "Linux Kernel", "GPG"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176180", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PraisonAI高風險身分驗證繞過漏洞（CVE-2026-44338）曝光，駭客掃描活動顯示漏洞利用窗口極短",
    summary: "AI代理應用框架PraisonAI修補了高風險的身分驗證繞過漏洞CVE-2026-44338。此漏洞源於PraisonAI舊版Flask API Server元件預設未啟用身分驗證，導致任何可存取主機的使用者都能直接存取原本受保護的API端點，包括回傳已部署AI代理資訊的/agents端點，以及觸發AI代理工作流程的/chat端點。受影響版本範圍為2.5.6至4.6.33，已在4.6.34版修補。該漏洞的CVSS嚴重性評分為7.3。在PraisonAI發布修補公告後，資安公司Sysdig僅相隔數小時就偵測到駭客掃描工具，針對暴露在網際網路上的PraisonAI主機端點進行掃描，顯示駭客利用漏洞的速度極快，修補時間窗口越來越短。企業應立即升級至4.6.34版或更高版本，並強化API端點的身份驗證機制。",
    tags: ["PraisonAI", "CVE-2026-44338", "身分驗證繞過", "Flask API Server", "AI代理", "資安漏洞"],
    title_en: "PraisonAI High-Risk Authentication Bypass Vulnerability (CVE-2026-44338) Exposed; Hacker Scanning Activity Shows Narrow Exploitation Window",
    summary_en: "The AI agent application framework PraisonAI has patched a high-risk authentication bypass vulnerability, CVE-2026-44338. This vulnerability originated because older versions of the PraisonAI Flask API Server component did not enable authentication by default, allowing any user with access to the host to directly access previously protected API endpoints, including the /agents endpoint that returns deployed AI agent information, and the /chat endpoint that triggers AI agent workflows. The affected version range is 2.5.6 to 4.6.33, and it has been patched in version 4.6.34. The CVSS severity score for this vulnerability is 7.3. After PraisonAI released the patch announcement, security company Sysdig detected hacker scanning tools within hours, scanning PraisonAI host endpoints exposed to the internet, indicating that the speed of hacker exploitation is extremely fast, and the patching window is getting shorter. Enterprises should immediately upgrade to version 4.6.34 or higher, and strengthen the authentication mechanism for API endpoints.",
    tags_en: ["PraisonAI", "CVE-2026-44338", "Authentication Bypass", "Flask API Server", "AI Agent", "Security Vulnerability"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176178", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Health-ISAC警告：Anthropic Claude Mythos模型具備高度自主漏洞利用能力，威脅醫療健康產業",
    summary: "醫療健康產業資安情資分享組織Health-ISAC發布報告，警告AI模型Anthropic的Claude Mythos Preview展現出高度自主的漏洞發現與利用能力。Mythos不僅能找出零時差漏洞，還能將發現轉化為可運作的漏洞利用程式。在內部測試中，該模型針對Firefox JavaScript引擎產生了大量可運作的漏洞利用程式。Health-ISAC指出，這類AI能力極可能被攻擊者濫用，如同Cobalt Strike等合法工具轉為惡意攻擊武器，大幅壓縮了企業從「發現漏洞」到「可用於攻擊」的時間。雖然Anthropic透過嚴格的KYC模式限制使用，但一旦模型外流，將使網路犯罪分子取得AI漏洞發現能力的門檻大幅降低。建議企業應將修補管理視為核心防禦工作，建立自動化、可重複執行的修補流程，並透過網路分段等補償性控制，降低單一弱點的擴散風險。",
    tags: ["Health-ISAC", "Anthropic", "Claude Mythos", "漏洞利用", "AI安全", "醫療健康產業"],
    title_en: "Health-ISAC Warning: Anthropic Claude Mythos Model Exhibits High Autonomous Vulnerability Exploitation Capability, Threatening Healthcare Industry",
    summary_en: "The Health-ISAC (Health Information Sharing and Analysis Center) released a report warning that Anthropic's Claude Mythos Preview AI model demonstrates highly autonomous vulnerability discovery and exploitation capabilities. Mythos can not only identify zero-day vulnerabilities but can also convert these findings into functional exploit code. In internal testing, the model generated a large number of functional exploit programs targeting the Firefox JavaScript engine. Health-ISAC points out that such AI capabilities are highly likely to be misused by attackers, transforming legitimate tools like Cobalt Strike into malicious attack weapons, significantly compressing the time required for an enterprise to move from 'vulnerability discovery' to 'attack usability.' Although Anthropic restricts usage through strict KYC (Know Your Customer) models, if the model leaks, it will drastically lower the barrier for cybercriminals to acquire AI-driven vulnerability discovery capabilities. Enterprises are advised to treat patch management as a core defensive function, establishing automated, repeatable patching processes, and implementing compensating controls such as network segmentation to mitigate the risk of single-point vulnerability spread.",
    tags_en: ["Health-ISAC", "Anthropic", "Claude Mythos", "Exploitation", "AI Security", "Healthcare Industry"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176176", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "權限提升漏洞 CVE-2026-48172 曝光：LiteSpeed 外掛程式遭積極利用，CISA 已列入 KEV 名單",
    summary: "網頁伺服器系統開發商 LiteSpeed 揭露並修補了一個名為 CVE-2026-48172 的權限提升漏洞。此漏洞存在於其提供給 cPanel 用戶的外掛程式中，CVSS v4.0 風險評分達到滿分 10 分。LiteSpeed 強調該漏洞已被積極利用，且美國網路安全暨基礎設施安全局（CISA）已於 5 月 26 日發布公告，將 CVE-2026-48172 列入已遭利用的漏洞名單（KEV）。CISA 要求聯邦機構必須在 5 月 29 日前完成修補。由於該漏洞風險極高且已被確認被惡意利用，用戶應立即採取行動，儘速更新或修補所有相關外掛程式，以防止被駭客利用進行系統權限提升。",
    tags: ["LiteSpeed", "CVE-2026-48172", "權限提升", "cPanel", "CISA", "KEV"],
    title_en: "Privilege Escalation Vulnerability CVE-2026-48172 Exposed: LiteSpeed Plugin Actively Exploited, Listed on CISA KEV",
    summary_en: "Web server system developer LiteSpeed has disclosed and patched a privilege escalation vulnerability, CVE-2026-48172. This vulnerability exists within the plugin provided to cPanel users, achieving a CVSS v4.0 risk score of 10. LiteSpeed emphasizes that the vulnerability has been actively exploited, and the U.S. Cybersecurity and Infrastructure Security Agency (CISA) published an announcement on May 26 listing CVE-2026-48172 on its Known Exploited Vulnerabilities (KEV) catalog. CISA requires federal agencies to complete patching by May 29. Due to the extremely high risk and confirmed malicious exploitation of this vulnerability, users should take immediate action to promptly update or patch all affected plugins to prevent exploitation by hackers for system privilege escalation.",
    tags_en: ["LiteSpeed", "CVE-2026-48172", "Privilege Escalation", "cPanel", "CISA", "KEV"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176174", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Lumen與PwC報告揭露：中國駭客組織Red Lamassu利用新型Linux/Windows惡意程式攻擊亞太電信業者",
    summary: "美國電信業者Lumen與PwC聯合發布報告，指出自2022年起，亞太與中東地區的電信業者（如哈薩克、阿富汗、印度）持續遭受疑似中國駭客組織Red Lamassu的攻擊。該報告揭露的攻擊活動，顯示駭客利用新型的惡意程式維持長期滲透與遠端控制能力，且這些工具可能在多個駭客組織間流通。針對Linux環境的惡意程式Showboat，研究團隊指出它是一個模組化後滲透框架，具備收集系統資訊、上傳下載檔案、建立持久化服務，甚至能將惡意指令隱藏到外部網站。而針對Windows環境的JFMBackdoor，則是一個功能齊全的間諜程式，可執行遠端指令、操作檔案、建立TCP Proxy、截圖、修改系統登錄檔，並具備自我刪除功能。文章未提供具體修補建議，但提醒電信業者需提高警覺，防範來自中國駭客組織的長期滲透威脅。",
    tags: ["Lumen", "PwC", "Red Lamassu", "Showboat", "JFMBackdoor", "電信業者", "中國駭客"],
    title_en: "Lumen and PwC Report Reveal: Chinese Hacker Group Red Lamassu Uses Novel Linux/Windows Malware to Attack Asia-Pacific Telecom Operators",
    summary_en: "Telecom provider Lumen and PwC jointly released a report indicating that since 2022, telecom operators in the Asia-Pacific and Middle East regions (such as Kazakhstan, Afghanistan, and India) have been continuously targeted by suspected attacks from the Chinese hacker group Red Lamassu. The attack activities revealed in the report show that the hackers utilize novel malware to maintain long-term persistence and remote control capabilities, and these tools may circulate among multiple hacker groups. Regarding the malware Showboat for Linux environments, the research team points out that it is a modular post-exploitation framework capable of collecting system information, uploading and downloading files, establishing persistent services, and even hiding malicious commands on external websites. As for JFMBackdoor for Windows environments, it is a fully functional spyware capable of executing remote commands, manipulating files, establishing TCP Proxies, taking screenshots, modifying system registry, and possessing self-deletion functionality. While the article does not provide specific remediation advice, it reminds telecom operators to heighten their vigilance against long-term infiltration threats originating from Chinese hacker groups.",
    tags_en: ["Lumen", "PwC", "Red Lamassu", "Showboat", "JFMBackdoor", "Telecom Operator", "China Hacker"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176171", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-039",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "JINX-0164 駭客活動：透過社交工程與 macOS 惡意程式攻擊加密貨幣產業供應鏈",
    summary: "Wiz 研究人員追蹤到一個代號 JINX-0164 的新威脅行為，該行為目標為加密貨幣相關組織，旨在透過數位資產盜竊。攻擊者利用高度複雜的社交工程技術，特別是偽裝為招聘人員，誘騙開發者參加虛擬會議。受害者隨後會被引導至惡意網域，下載看似會議客戶端的惡意檔案。該檔案會觸發一個 Python 資訊竊取程式和名為 AUDIOFIX 的遠端存取木馬。攻擊者可竊取密碼管理器、瀏覽器和 iCloud 金鑰鏈的憑證，SSH 金鑰，以及加密貨幣錢包地址等敏感資料。此外，JINX-0164 還利用了供應鏈攻擊，透過投毒 npm 套件 @velora-dex/sdk 分發 Go 語言後門 MiniRAT，進一步擴大攻擊範圍。攻擊鏈顯示，惡意程式能從受害員工筆電橫向移動至內部程式碼分發系統，並修改原始碼，意圖竊取加密貨幣錢包憑證。修補建議包括強化員工安全意識，特別警惕來自陌生招聘者的虛擬會議邀請，並嚴格監控 CI/CD 系統的存取權限。",
    tags: ["JINX-0164", "macOS", "社交工程", "加密貨幣", "供應鏈攻擊", "MiniRAT", "CI/CD"],
    title_en: "JINX-0164 Hacker Campaign: Targeting Crypto Industry Supply Chains via Social Engineering and macOS Malware",
    summary_en: "Wiz researchers have tracked a new threat activity, designated JINX-0164, which targets cryptocurrency-related organizations with the goal of digital asset theft. The attackers utilize sophisticated social engineering techniques, specifically impersonating recruiters, to lure developers into virtual meetings. Victims are then directed to malicious domains and prompted to download malware disguised as meeting client software. This file executes a Python information stealer and a remote access Trojan (RAT) named AUDIOFIX. The attackers can steal sensitive credentials such as those from password managers, browsers, and the iCloud Keychain, as well as SSH keys and cryptocurrency wallet addresses. Furthermore, JINX-0164 leverages a supply chain attack by distributing a Go language backdoor MiniRAT through the poisoned npm package @velora-dex/sdk, expanding the attack scope. The attack chain shows that the malware can laterally move from the victim's laptop to internal code distribution systems, modifying source code with the intent of stealing cryptocurrency wallet credentials. Remediation recommendations include strengthening employee security awareness, particularly regarding virtual meeting invitations from unknown recruiters, and strictly monitoring access permissions to CI/CD systems.",
    tags_en: ["JINX-0164", "macOS", "Social Engineering", "Cryptocurrency", "Supply Chain Attack", "MiniRAT", "CI/CD"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/jinx-0164-targets-cryptocurrency-firms.html", lang: "EN" }
    ]
  },
  {
    id: "20260528-040",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "CISA警告：Nx Console擴充功能與GitHub儲存庫遭供應鏈攻擊，警惕CI/CD管線洩密",
    summary: "CISA近期發出警報，警告開發生態系統面臨多重供應鏈入侵活動，主要目標為CI/CD管線。攻擊者利用了Nx Console的惡意VS Code擴充功能（版本18.95.0），透過自動更新機制，導致未經開發者手動安裝即被植入惡意程式碼。此事件已被分配CVE-2026-48027，並列入CISA已知漏洞目錄（KEV）。此外，另有「Megalodon」活動，駭客透過注入惡意GitHub Action工作流，竊取了開發與部署管線中的秘密憑證、雲端金鑰和Token。CISA建議組織應立即審核CI/CD日誌和雲端稽核軌跡，並必須輪換所有可被CI/CD管線存取的秘密憑證，包括API金鑰、雲端提供商憑證（如AWS、GCP、Azure）和各種Token。同時，應實施最佳實務，如固定軟體版本（Pinning）和僅從可信來源拉取套件。",
    tags: ["CISA", "Nx Console", "VS Code", "CI/CD", "供應鏈攻擊", "CVE-2026-48027", "Megalodon"],
    title_en: "CISA Warns: Nx Console Extension and GitHub Repository Targeted by Supply Chain Attack, Beware of CI/CD Pipeline Leakage",
    summary_en: "CISA recently issued an alert warning of multiple supply chain intrusion activities targeting the development ecosystem, with CI/CD pipelines as the primary objective. Attackers exploited a malicious VS Code extension for Nx Console (version 18.95.0), which, through its automatic update mechanism, injected malicious code without requiring manual developer installation. This incident has been assigned CVE-2026-48027 and listed in the CISA Known Exploited Vulnerabilities catalog (KEV). Furthermore, there was the \"Megalodon\" activity, where hackers stole secret credentials, cloud keys, and Tokens from development and deployment pipelines by injecting malicious GitHub Actions workflows. CISA advises organizations to immediately review CI/CD logs and cloud audit trails, and must rotate all secrets accessible by CI/CD pipelines, including API keys, cloud provider credentials (such as AWS, GCP, Azure), and various Tokens. Concurrently, organizations should implement best practices, such as pinning software versions and only pulling packages from trusted sources.",
    tags_en: ["CISA", "Nx Console", "VS Code", "CI/CD", "Supply Chain Attack", "CVE-2026-48027", "Megalodon"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/alerts/2026/05/28/supply-chain-compromises-impact-nx-console-and-github-repositories", lang: "EN" }
    ]
  },
  {
    id: "20260528-041",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "NetApp與Red Hat合作，推出OpenShift平臺備份與災難復原解決方案",
    summary: "隨著虛擬化應用領域的變化，NetApp與Red Hat宣布共同發布針對OpenShift與OpenShift Virtualization平臺的資料保護解決方案。第一款解決方案結合NetApp ONTAP的SnapMirror功能，透過異動區塊追蹤（CBT）機制，為容器與VM工作負載提供「永遠增量備份」模式。此模式能精確追蹤至4KB層級的資料異動區塊，大幅減少備份資料量和備份窗口時間。第二款解決方案為NetApp Disaster Recovery雲端服務新增OpenShift支援，目前處於預覽階段。此服務旨在提供企業管理災難復原流程，未來將擴展至為容器與虛擬機器工作負載提供災難復原能力，協助企業應對雲端環境的資料保護需求。",
    tags: ["NetApp", "Red Hat", "OpenShift", "備份復原", "容器", "災難復原"],
    title_en: "NetApp and Red Hat Partner to Launch OpenShift Platform Backup and Disaster Recovery Solution",
    summary_en: "As the virtualization application landscape evolves, NetApp and Red Hat announced the joint release of a data protection solution for OpenShift and OpenShift Virtualization platforms. The first solution combines NetApp ONTAP's SnapMirror functionality, utilizing Change Block Tracking (CBT) mechanism, to provide an 'ever-incremental backup' mode for container and VM workloads. This mode can precisely track data change blocks down to the 4KB level, significantly reducing backup data volume and backup window time. The second solution adds OpenShift support to NetApp Disaster Recovery cloud services and is currently in preview. This service aims to provide enterprise-managed disaster recovery workflows, and will eventually expand to offer disaster recovery capabilities for container and virtual machine workloads, helping enterprises meet data protection needs in cloud environments.",
    tags_en: ["NetApp", "Red Hat", "OpenShift", "Backup and Recovery", "Container", "Disaster Recovery"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176199", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-042",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安機構聯手破壞 GlassWorm 蠕蟲：切斷多層次 C2 通訊管道，遏止軟體供應鏈攻擊",
    summary: "GlassWorm 蠕蟲最初在 VS Code 市集、Open VSX 儲存庫散播，後續擴散至 PyPI、NPM 和 GitHub 等多個開發生態系。該蠕蟲攻擊範圍極廣，不僅透過惡意延伸套件感染 VS Code、Cursor 等開發工具，更入侵 NPM 與 Python 生態，並竊取開發者憑證，感染超過 300 個 GitHub 儲存庫。為應對其複雜的 C2 架構，資安公司 CrowdStrike 宣布與 Google 和 Shadowserver 基金會合作，成功破壞了 GlassWorm 背後的殭屍網路和四種 C2 通道。這些通道涵蓋 Solana 區塊鏈、BitTorrent DHT、Google 行事曆，以及透過 VPS 建置的 C2 主機。CrowdStrike 指出，由於駭客採用多層間接機制保護 C2 伺服器，資安業者必須同時且精準破壞所有通訊管道，才能阻止受害電腦接收惡意指令或有效酬載。此事件凸顯了軟體供應鏈安全面臨的巨大風險。",
    tags: ["GlassWorm", "軟體供應鏈", "VS Code", "PyPI", "NPM", "C2 通訊"],
    title_en: "Cybersecurity Agencies Collaborate to Dismantle GlassWorm Worm: Cutting Multi-Layered C2 Communication Channels to Curb Software Supply Chain Attacks",
    summary_en: "The GlassWorm worm initially spread through the VS Code Marketplace and Open VSX repository, subsequently expanding to multiple development ecosystems including PyPI, NPM, and GitHub. The worm's attack scope is extremely broad; it not only infects development tools like VS Code and Cursor via malicious extensions but also penetrates the NPM and Python ecosystems, stealing developer credentials and infecting over 300 GitHub repositories. To counter its complex C2 architecture, cybersecurity firm CrowdStrike announced a collaboration with Google and the Shadowserver Foundation, successfully dismantling the botnet and four distinct C2 channels behind GlassWorm. These channels included the Solana blockchain, BitTorrent DHT, Google Calendar, and C2 hosts built via VPS. CrowdStrike pointed out that because the attackers utilized multiple layers of indirect mechanisms to protect the C2 servers, security vendors must simultaneously and precisely dismantle all communication channels to prevent infected computers from receiving malicious commands or effective payloads. This incident highlights the immense risks facing software supply chain security.",
    tags_en: ["GlassWorm", "Software Supply Chain", "VS Code", "PyPI", "NPM", "C2 Communication"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176195", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-043",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "CISA警告三個供應鏈漏洞已遭利用：Daemon Tools與TanStack套件遭惡意植入",
    summary: "美國網路安全暨基礎設施安全局（CISA）於5月27日將CVE-2026-8398、CVE-2026-45321、CVE-2026-48027等三個漏洞列入已遭利用的漏洞名單（KEV）。這些漏洞的共同特點是源於供應鏈攻擊，而非傳統軟體弱點。其中，CVE-2026-8398涉及虛擬光碟機軟體Daemon Tools Lite，受影響版本範圍為12.5.0.2421至12.5.0.2434。攻擊者透過竄改從官方網站下載的安裝檔，植入惡意程式碼，導致受害者連線至冒牌網域下載其他作案工具。另外兩個漏洞分別影響TanStack Router NPM套件和VS Code延伸套件，駭客是透過滲透GitHub Actions發布流程上架惡意套件。CISA要求聯邦機構必須在不同期限內完成修補，建議開發者和機構應立即檢查所有第三方元件的來源，並特別關注來自CI/CD管線的惡意提交。",
    tags: ["CISA", "CVE-2026-8398", "CVE-2026-45321", "CVE-2026-48027", "供應鏈攻擊", "Daemon Tools Lite", "NPM套件"],
    title_en: "CISA Warns Three Supply Chain Vulnerabilities Have Been Exploited: Daemon Tools and TanStack Packages Compromised",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) listed three vulnerabilities—CVE-2026-8398, CVE-2026-45321, and CVE-2026-48027—as being actively exploited (KEV) on May 27. A common characteristic of these vulnerabilities is that they originate from supply chain attacks, rather than traditional software weaknesses. Specifically, CVE-2026-8398 affects the virtual CD burning software Daemon Tools Lite, with affected versions ranging from 12.5.0.2421 to 12.5.0.2434. Attackers compromised the installation files downloaded from the official website, injecting malicious code that directed victims to fake domains to download other tools for malicious purposes. The other two vulnerabilities affect the TanStack Router NPM package and a VS Code extension, respectively. Hackers uploaded malicious packages by infiltrating the GitHub Actions publishing process. CISA requires federal agencies to complete patching within different deadlines and advises developers and organizations to immediately verify the source of all third-party components, paying special attention to malicious submissions originating from CI/CD pipelines.",
    tags_en: ["CISA", "CVE-2026-8398", "CVE-2026-45321", "CVE-2026-48027", "Supply Chain Attack", "Daemon Tools Lite", "NPM Package"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176175", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-044",
    trackers: ["security"],
    category: "前瞻技術",
    title: "LayerX報告揭示企業AI風險分散性低，警示「AI超級用戶」與個人帳號使用帶來的治理盲點",
    summary: "LayerX Security的《2026年AI使用現狀報告》指出，企業AI風險並非平均分配，而是高度集中於少數「AI超級用戶」和少數主導AI平台。雖然近半數企業用戶曾使用AI，但僅18%是每週使用者。風險的關鍵點在於，頂尖的5%用戶產生了不成比例的AI曝光量，且平均每段對話的提示次數遠高於平均水平。在平台使用上，ChatGPT仍佔主導地位，但Copilot M365的增長顯示AI使用正從受控的企業原生AI，轉向消費者驅動的AI應用。更嚴重的風險是，近半數的企業AI對話透過個人身份而非企業帳號進行，導致組織在數據保留、模型訓練和敏感資訊處理上缺乏可見性和治理控制。此外，AI使用正碎片化，形成「影子AI」（Shadow AI）的長尾生態，使傳統治理機制難以追蹤。",
    tags: ["AI風險", "影子AI", "企業AI", "LayerX Security", "Copilot M365", "個人帳號"],
    title_en: "LayerX Report Reveals Low Dispersion of Enterprise AI Risk, Warning of Governance Blind Spots from 'AI Superusers' and Personal Accounts",
    summary_en: "LayerX Security's '2026 AI Usage Status Report' indicates that enterprise AI risk is not evenly distributed, but is highly concentrated among a small number of 'AI superusers' and a few dominant AI platforms. Although nearly half of corporate users have used AI, only 18% are weekly users. The key risk point is that the top 5% of users generate a disproportionate amount of AI exposure, and their average prompt frequency per conversation is far higher than the average. In terms of platform usage, ChatGPT remains dominant, but the growth of Copilot M365 shows that AI usage is shifting from controlled, enterprise-native AI toward consumer-driven AI applications. The more serious risk is that nearly half of enterprise AI conversations are conducted using personal identities rather than corporate accounts, leading to a lack of visibility and governance control for the organization regarding data retention, model training, and sensitive information handling. Furthermore, AI usage is fragmenting, forming a long-tail ecosystem of 'Shadow AI,' making it difficult for traditional governance mechanisms to track.",
    tags_en: ["AI risk", "Shadow AI", "Enterprise AI", "LayerX Security", "Copilot M365", "Personal accounts"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/new-ai-usage-report-enterprise-ai-risk.html", lang: "EN" }
    ]
  },
  {
    id: "20260528-045",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Acronis警告：Agentic AI風險不在模型本身，而是傳統軟體與整合的漏洞",
    summary: "隨著Agentic AI（具體行為型AI）的快速部署，業界普遍誤以為其風險來自於AI模型本身。然而，Acronis的研究人員指出，這些AI代理系統並非黑箱，其核心風險源於AI與傳統「確定性系統」（如舊式軟體工具）的整合點。這些漏洞主要源於傳統的編碼缺陷，例如缺乏輸入清理、硬編碼憑證和不足的存取控制。文章指出，過去已發現Salesforce和ServiceNow等平台因AI代理的誤用而出現漏洞，這些問題本質上是傳統軟體安全缺陷的體現。修補重點不應只放在LLM本身，更必須深入理解並加固AI與其所連接的傳統軟體工具之間的邊界安全，特別是身份驗證機制，以防止資訊洩露。",
    tags: ["Agentic AI", "AI代理", "Acronis", "LLM", "軟體漏洞", "身份驗證", "確定性系統"],
    title_en: "Acronis Warns: Agentic AI Risk Lies Not in the Model Itself, but in Vulnerabilities Integrating with Traditional Software",
    summary_en: "With the rapid deployment of Agentic AI, the industry generally assumes that the risk originates from the AI model itself. However, Acronis researchers point out that these AI agent systems are not black boxes; their core risk stems from the integration points between the AI and traditional 'deterministic systems' (such as legacy software tools). These vulnerabilities primarily originate from traditional coding flaws, such as lack of input sanitization, hardcoded credentials, and insufficient access control. The article notes that platforms like Salesforce and ServiceNow have previously exhibited vulnerabilities due to the misuse of AI agents, problems that are essentially manifestations of traditional software security flaws. Patching efforts should not only focus on the LLM itself but must also deeply understand and strengthen the boundary security between the AI and the traditional software tools it connects to, especially identity verification mechanisms, to prevent information leakage.",
    tags_en: ["Agentic AI", "AI Agents", "Acronis", "LLM", "Software Vulnerabilities", "Identity Verification", "Deterministic Systems"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/agentic-ai-risky", lang: "EN" }
    ]
  },
  {
    id: "20260528-046",
    trackers: ["security"],
    category: "前瞻技術",
    title: "中華電信揭露AI資安驗證閘門：加速資安檢測，應對開發節奏極速化挑戰",
    summary: "本文介紹中華電信資訊技術分公司資安產品股股長吳明峰，分享資安團隊如何運用生成式AI加速日常工作，並提出「ChainStrike AI」驗證閘門架構。面對開發速度的極速提升，傳統人工白箱掃描已無法及時應對，中華電信因此建立此AI閘門，用於AI白箱檢測和預部署安全驗證。該系統能整合程式碼、威脅情報與營運資料，執行攻擊面探索、身分權限驗證及攻擊鏈編排等功能，核心價值在於將潛在風險轉化為具體證據，大幅縮短資安檢測時間。此外，團隊也將AI應用於文件產出、程式碼轉換、相依性盤點等場景，並強調資安人員的角色將從執行者轉變為「教練」，負責指導AI Agent執行任務，並將治理模式提升至「人類決策、Agent執行、系統稽核」的層級。修補建議是業界應積極探索AI Agent在資安檢測與自動化治理中的應用潛力。",
    tags: ["生成式AI", "AI Agent", "資安驗證閘門", "中華電信", "白箱檢測", "資安自動化"],
    title_en: "中華 Telecom Unveils AI Security Verification Gateway: Accelerating Security Testing to Meet Rapid Development Cycles",
    summary_en: "This article features Ming-Feng Wu, a product manager at Chunghwa Telecom's Information Technology Division, who shares how the security team utilizes generative AI to accelerate daily operations and introduces the \"ChainStrike AI\" verification gateway architecture. Faced with the extremely rapid pace of development, traditional manual white-box scanning is no longer sufficient. Chunghwa Telecom has therefore established this AI gateway for AI white-box testing and pre-deployment security verification. The system integrates code, threat intelligence, and operational data to perform attack surface exploration, identity and access validation, and attack chain orchestration. Its core value lies in converting potential risks into concrete evidence, significantly reducing security testing time. Furthermore, the team applies AI to scenarios such as document generation, code conversion, and dependency inventory, emphasizing that the role of security personnel will shift from executors to \"trainers,\" responsible for guiding AI Agents to execute tasks, elevating the governance model to a level of \"Human Decision, Agent Execution, System Audit.\" The recommendation is that the industry should actively explore the potential of AI Agents in security testing and automated governance.",
    tags_en: ["Generative AI", "AI Agent", "Security Verification Gateway", "Chunghwa Telecom", "White-box Testing", "Security Automation"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176193", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-047",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Google Cloud推出AI資安防禦平臺：整合Gemini、Wiz等能力，應對AI加速的漏洞與攻擊趨勢",
    summary: "Google Cloud宣布推出Google AI Threat Defense，這是一個利用AI驅動的自主式資安防禦平臺。此平臺旨在協助企業應對AI加速漏洞發現與攻擊自動化的趨勢，大幅提升漏洞管理流程的自動化與處理速度。它整合了大型語言模型Gemini的推理與程式碼生成能力、雲端安全平臺Wiz的曝險分析與風險排序能力，以及Mandiant的威脅情報與處置經驗。平臺採用四階段框架：準備（Prepare）降低曝險；掃描與風險排序（Scan and prioritize）透過AI分析程式碼、API、權限等，判斷實際遭利用的可能性；修補（Remediate）利用CodeMender在開發環境生成修補建議；最後是監控（Monitor）透過代理式安全營運中心（agentic SOC）進行自動化偵測。此舉顯示資安防禦正朝向更自動化、更具預測性的方向發展。",
    tags: ["Google Cloud", "AI Threat Defense", "Gemini", "Wiz", "Mandiant", "資安防禦", "AI安全"],
    title_en: "Google Cloud Launches AI Security Defense Platform: Integrating Gemini, Wiz, and Other Capabilities to Address AI-Accelerated Vulnerabilities and Attack Trends",
    summary_en: "Google Cloud announced the launch of Google AI Threat Defense, an autonomous, AI-driven security defense platform. This platform is designed to help enterprises address the accelerating trends of AI-driven vulnerability discovery and attack automation, significantly enhancing the automation and speed of vulnerability management processes. It integrates the reasoning and code generation capabilities of the large language model Gemini, the exposure analysis and risk prioritization capabilities of the cloud security platform Wiz, and Mandiant's threat intelligence and remediation expertise. The platform adopts a four-stage framework: Prepare, to reduce exposure; Scan and prioritize, which uses AI to analyze code, APIs, and permissions to determine the likelihood of actual exploitation; Remediate, which uses CodeMender to generate remediation suggestions in the development environment; and finally, Monitor, which conducts automated detection through an agentic SOC. This move demonstrates the direction of security defense toward greater automation and predictive capabilities.",
    tags_en: ["Google Cloud", "AI Threat Defense", "Gemini", "Wiz", "Mandiant", "Cybersecurity Defense", "AI Security"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176192", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-048",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic推出Claude Managed Agents自管沙箱與MCP通道，強化企業級資料隔離與安全控制",
    summary: "Anthropic於5月27日公布Claude Managed Agents的兩項新安全功能：自管沙箱（self-hosted）和MCP通道（MCP tunnel）。自管沙箱允許企業將代理人工具的執行環境搬移到用戶自控的基礎架構上，確保代理人程式碼、檔案系統及網路出口（egress）都留在用戶邊界內，適用於金融、醫療等對資料隔離要求高的產業。MCP通道則用於將代理人連結到私有MCP（Model Context Protocol）伺服器。此外，Anthropic還推出了安全指引外掛，能讓Claude在程式碼變更後即時檢測並修補常見漏洞，如注入和不安全序列化。同時，Anthropic整合了28家主流資安與合規平臺，讓企業能將現有的監控與治理政策套用到Claude Enterprise，強化了企業級的資安管理能力。自管沙箱目前支援企業自有基礎架構，或合作的託管服務供應商，尚未支援AWS上的Claude Platform。",
    tags: ["Anthropic", "Claude Managed Agents", "自管沙箱", "MCP通道", "企業安全", "AI 安全"],
    title_en: "Anthropic Launches Claude Managed Agents with Self-Hosted Sandbox and MCP Tunnel to Enhance Enterprise Data Isolation and Security Controls",
    summary_en: "On May 27th, Anthropic announced two new security features for Claude Managed Agents: a self-hosted sandbox and an MCP tunnel. The self-hosted sandbox allows enterprises to move the execution environment for agent tools onto user-controlled infrastructure, ensuring that agent code, file system, and network egress remain within the user's boundary. This is suitable for industries with high data isolation requirements, such as finance and healthcare. The MCP tunnel is used to connect agents to a private MCP (Model Context Protocol) server. Furthermore, Anthropic introduced a security guide plugin that can detect and patch common vulnerabilities, such as injection and unsafe serialization, in real-time after code changes. Concurrently, Anthropic integrated 28 major security and compliance platforms, allowing enterprises to apply existing monitoring and governance policies to Claude Enterprise, thereby strengthening enterprise-grade security management capabilities. The self-hosted sandbox currently supports the enterprise's own infrastructure or partnered hosting service providers, but does not yet support the Claude Platform on AWS.",
    tags_en: ["Anthropic", "Claude Managed Agents", "Self-Hosted Sandbox", "MCP Tunnel", "Enterprise Security", "AI Security"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176184", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-049",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic 強化 Claude 代理產品安全：導入環境隔離與沙箱機制，限制權限與資料外洩風險",
    summary: "Anthropic 公開說明其 Claude 代理產品（Claude Code/Claude Cowork）的安全設計，強調單純的模型判斷或人工批准已不足夠，必須透過環境層級的隔離來限制潛在的損害範圍。在網頁服務中，程式執行被限制在伺服器端的暫時隔離容器，檔案系統僅限於單一工作階段。對於開發者版本的 Claude Code，為了解決使用者疲勞和過度依賴人工審核的問題，Anthropic 導入了作業系統層級沙箱，並預設封鎖網路存取，讓代理能在較少中斷地執行任務。然而，Anthropic 也承認了早期設計的盲點，例如曾因允許連向特定 API，導致惡意檔案可引導代理使用攻擊者控制的 API 金鑰，將工作區檔案上傳至外部帳號。為修復此問題，公司在虛擬機內加入了防禦性中間人代理伺服器，確保只有帶有當前工作階段權杖的請求才能通過。Anthropic 總結，成熟的虛擬化、系統呼叫過濾器與容器執行環境是主要的防線，而產品自建的周邊元件才是最容易出問題的環節。",
    tags: ["Anthropic", "Claude", "AI 代理", "沙箱機制", "環境隔離", "虛擬化", "API 安全"],
    title_en: "Anthropic Strengthens Claude Agent Product Security: Implementing Environment Isolation and Sandboxing to Limit Privilege and Data Leakage Risks",
    summary_en: "Anthropic publicly detailed the security design of its Claude agent products (Claude Code/Claude Cowork), emphasizing that simple model judgment or manual approval is insufficient, and that environment-level isolation is required to limit the scope of potential damage. For web services, code execution is restricted within temporary, isolated containers on the server side, and the file system is limited to a single session. For the developer version of Claude Code, Anthropic introduced an operating system-level sandbox and defaulted to blocking network access, allowing the agent to perform tasks with fewer interruptions. However, Anthropic also acknowledged blind spots in its early design, such as allowing connections to specific APIs, which could enable malicious files to guide the agent to use attacker-controlled API keys to upload workspace files to external accounts. To fix this issue, the company added a defensive man-in-the-middle proxy server within a virtual machine, ensuring that only requests bearing the current session token can pass. Anthropic concluded that mature virtualization, system call filters, and container execution environments are the primary defenses, while the peripheral components built by the product itself are the most likely points of failure.",
    tags_en: ["Anthropic", "Claude", "AI Agent", "Sandboxing", "Environment Isolation", "Virtualization", "API Security"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176172", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-050",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Red Hat IdM 強化 Linux 身份管理：支援 AI 時代分散式系統與容器化架構",
    summary: "本文介紹 Red Hat Identity Management (IdM)，強調其在現代高度分散式、AI 代理人活躍的系統環境中的關鍵作用。IdM 是一個專為 Linux 生態系統設計的中央身份控制器，提供統一的身份管理服務，涵蓋身份驗證（Kerberos/LDAP）、授權（Host-Based Access Control/sudo）和安全策略強制執行。它能解決傳統管理本地 `/etc/passwd` 檔案或複雜 Kerberos 信任關係的痛點。在 RHEL 10 採用 OS-as-a-Container 模式時，IdM 提供持久的外部身份層。此外，結合 Red Hat Ansible Automation Platform，可將 IdM 的部署和管理流程化（Infrastructure as Code）。IdM 的核心功能包括：支援雙因素驗證（2FA）、與 Active Directory 信任橋接、ID 視圖（ID views）以遷移舊系統、Certmonger 自動化憑證管理、ACME 服務、集中式策略控制（HBAC）以及透過 REST API 和 Ansible 進行自動化管理。建議部署時應規劃多個副本以確保高可用性，並利用 `ipa-healthcheck` 進行預先檢查。",
    tags: ["Red Hat IdM", "Linux 身份管理", "Kerberos", "Active Directory", "RHEL 10", "零信任"],
    title_en: "Red Hat IdM Strengthens Linux Identity Management: Supporting Distributed Systems and Containerized Architectures in the AI Era",
    summary_en: "This article introduces Red Hat Identity Management (IdM), emphasizing its crucial role in modern, highly distributed system environments where AI agents are active. IdM is a central identity controller designed for the Linux ecosystem, providing unified identity management services that cover identity authentication (Kerberos/LDAP), authorization (Host-Based Access Control/sudo), and secure policy enforcement. It solves the pain points associated with traditionally managing local `/etc/passwd` files or complex Kerberos trust relationships. When adopting the OS-as-a-Container model in RHEL 10, IdM provides a persistent external identity layer. Furthermore, by integrating with Red Hat Ansible Automation Platform, IdM's deployment and management processes can be codified (Infrastructure as Code). Core IdM functionalities include: support for two-factor authentication (2FA), trust bridging with Active Directory, ID views for migrating legacy systems, Certmonger for automated certificate management, ACME services, centralized policy control (HBAC), and automated management via REST API and Ansible. When planning deployment, it is recommended to provision multiple replicas to ensure high availability and utilize `ipa-healthcheck` for pre-deployment checks.",
    tags_en: ["Red Hat IdM", "Linux Identity Management", "Kerberos", "Active Directory", "RHEL 10", "Zero Trust"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/7-features-red-hat-identity-management-you-need-know-modern-enterprise", lang: "EN" }
    ]
  },
  {
    id: "20260528-051",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Red Hat RHEL 10.2 升級：預設啟用後量子加密SSH與FIPS模式支援",
    summary: "為應對「現在採集、未來解密」（harvest now, decrypt later）的量子威脅，Red Hat 在 RHEL 10.2 版本中大幅強化了後量子密碼學（PQC）支援。本次升級將後量子SSH金鑰交換預設啟用，涵蓋了兩種混合模式：sntrup761x25519-sha512 和 mlkem768x25519-sha256。特別值得注意的是，RHEL 10.2 提供了 FIPS 模式下的 PQC 支援，引入了 mlkem768nistp256-sha256 和 mlkem1024nistp384-sha384，這兩種算法皆符合 FIPS 標準。此外，基於 libssh 的客製化伺服器也受益，因為 RHEL 10.2 預設使用 mlkem768x25519-sha256。Red Hat 建議所有用戶升級至 RHEL 10.2，以確保系統在量子計算時代的通訊安全，並保護免受未來解密攻擊。未公開。",
    tags: ["Red Hat", "RHEL", "後量子密碼學", "PQC", "SSH", "FIPS", "量子安全"],
    title_en: "Red Hat RHEL 10.2 Upgrade: Default Enabling of Post-Quantum Cryptography SSH and FIPS Mode Support",
    summary_en: "To address the quantum threat of \"harvest now, decrypt later,\" Red Hat has significantly enhanced Post-Quantum Cryptography (PQC) support in RHEL 10.2. This upgrade defaults the use of post-quantum SSH key exchange, covering two hybrid modes: sntrup761x25519-sha512 and mlkem768x25519-sha256. Notably, RHEL 10.2 provides PQC support in FIPS mode, introducing mlkem768nistp256-sha256 and mlkem1024nistp384-sha384, both of which comply with FIPS standards. Furthermore, custom servers based on libssh also benefit, as RHEL 10.2 defaults to using mlkem768x25519-sha256. Red Hat recommends that all users upgrade to RHEL 10.2 to ensure communication security in the era of quantum computing and protect against future decryption attacks. Undisclosed.",
    tags_en: ["Red Hat", "RHEL", "Post-Quantum Cryptography", "PQC", "SSH", "FIPS", "Quantum Security"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/advancing-post-quantum-capabilities-ssh-red-hat-enterprise-linux", lang: "EN" }
    ]
  },
  {
    id: "20260528-052",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法分析：提供的文章內容為NIST官方警告頁面，無具體漏洞資訊。",
    summary: "提供的文章內容僅為指向NIST（國家漏洞資料庫）的官方警告頁面，並包含關於官方網站（.gov）和安全連線（HTTPS）的提醒。該內容本身不包含任何具體的資安漏洞、受影響產品、技術細節（如 CVE 編號、CVSS 分數）或修補建議。因此，無法撰寫新聞摘要。",
    tags: ["NIST", "CVE", "資安警告", "資訊安全"],
    title_en: "Cannot Analyze: The provided article content is an official NIST warning page and lacks specific vulnerability information.",
    summary_en: "The provided article content only points to an official NIST (National Vulnerability Database) warning page and includes reminders about official websites (.gov) and secure connections (HTTPS). The content itself does not contain any specific security vulnerabilities, affected products, technical details (such as CVE IDs, CVSS scores), or patch recommendations. Therefore, a news summary cannot be written.",
    tags_en: ["NIST", "CVE", "Security Warning", "Information Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-10014", lang: "EN" }
    ]
  },
  {
    id: "20260528-053",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "NVD 頁面重定向警告：提醒用戶注意官方政府網站的安全性與資訊驗證",
    summary: "本文內容為一個標準的網路安全警示頁面，而非具體的漏洞或威脅情報。它提醒使用者在瀏覽美國政府官方網站（.gov）時，應留意網站的安全性。核心資訊包括：官方網站應使用 HTTPS 協定以確保連線安全，並且應確認網站是否為官方組織所屬。警示內容強調，使用者在分享敏感資訊時，必須確保連線至官方且安全的網站。這類警告旨在提升用戶對於網路釣魚（Phishing）和偽造網站的警覺性，是資安教育的範例，而非針對特定產品或漏洞的修補建議。",
    tags: ["NVD", "資安教育", "Phishing", "HTTPS", "政府網站", "安全警示"],
    title_en: "NVD Page Redirection Warning: Reminder for Users on Official Government Website Security and Information Verification",
    summary_en: "This article contains a standard cybersecurity alert page, not specific vulnerability or threat intelligence. It reminds users that when browsing official U.S. government websites (.gov), they should pay attention to the site's security. Key information includes: official websites should use the HTTPS protocol to ensure connection security, and users must confirm if the website belongs to an official organization. The warning emphasizes that when sharing sensitive information, users must ensure they are connected to an official and secure website. These types of warnings aim to raise user awareness regarding Phishing and spoofed websites, serving as an example of cybersecurity education rather than providing patch recommendations for specific products or vulnerabilities.",
    tags_en: ["NVD", "Cybersecurity Education", "Phishing", "HTTPS", "Government Website", "Security Alert"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-9875", lang: "EN" }
    ]
  },
  {
    id: "20260528-054",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法生成新聞標題：原文內容為NIST網站導流頁面，無可分析的資安事件資訊。",
    summary: "無法生成新聞摘要。提供的文章內容僅為NIST（國家漏洞資料庫）網站的導流頁面，並包含安全提醒（如識別官方 .gov 網站和使用 HTTPS），不包含任何具體的漏洞、CVE 編號、受影響產品或技術細節。因此，無法分析其技術細節、實務影響或提供修補建議。",
    tags: ["NIST", "CVE", "資安提醒", "資訊安全"],
    title_en: "Unable to Generate News Title: Original Content is an NIST Website Redirect Page with No Analyzable Cybersecurity Incident Information.",
    summary_en: "Unable to generate a news summary. The provided article content is merely a redirect page from the NIST (National Vulnerability Database) website and contains general security advisories (such as identifying official .gov websites and using HTTPS), but does not include any specific vulnerabilities, CVE IDs, affected products, or technical details. Therefore, it is impossible to analyze its technical details, practical impact, or provide remediation suggestions.",
    tags_en: ["NIST", "CVE", "Cybersecurity Advisory", "Information Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-9876", lang: "EN" }
    ]
  },
  {
    id: "20260528-055",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "ENISA發布歐盟網路安全現狀報告與歐盟網路安全指數（EU CSI）框架，強化歐盟整體資安成熟度評估",
    summary: "為達成歐盟「高共同網路安全水平」，ENISA（歐洲網路安全機構）持續透過多項政策框架和倡議提升歐盟成員國的資安能力。根據《NIS2 指令》（Directive (EU) 2022/2555）第 18 條規定，ENISA 已於 2024 年 12 月 3 日發布了首份《歐盟網路安全現狀雙年報告》。該報告旨在為歐盟政策制定者提供一個基於證據的概述，評估歐盟在國家、社會層面網路安全現狀和能力。此外，ENISA 還開發了「歐盟網路安全指數」（EU CSI），這是一個工具，用於描述成員國和歐盟的網路安全態勢。該指數透過分析現有數據，提供各成員國的網路安全成熟度和能力洞察，並協助識別提升的機會。這兩項工具的發布，顯示了歐盟在提升整體網路韌性與資安標準化方面的持續努力。",
    tags: ["ENISA", "歐盟", "網路安全", "NIS2 指令", "EU CSI", "網路韌性"],
    title_en: "ENISA Releases EU Cybersecurity Status Report and EU Cybersecurity Index (EU CSI) Framework, Strengthening Assessment of Overall EU Cybersecurity Maturity",
    summary_en: "To achieve a 'high common level of cybersecurity' across the EU, ENISA (the European Union Agency for Cybersecurity) continues to enhance the cybersecurity capabilities of EU member states through various policy frameworks and initiatives. Pursuant to Article 18 of the NIS2 Directive (Directive (EU) 2022/2555), ENISA published its first 'EU Cybersecurity Status Biennial Report' on December 3, 2024. This report aims to provide EU policymakers with an evidence-based overview, assessing the current state and capacity of cybersecurity at the national and societal levels across the EU. Furthermore, ENISA has developed the 'EU Cybersecurity Index' (EU CSI), a tool designed to describe the cybersecurity posture of member states and the EU as a whole. By analyzing existing data, the index provides insights into the cybersecurity maturity and capabilities of individual member states, helping to identify areas for improvement. The release of these two tools demonstrates the EU's ongoing efforts to enhance overall cyber resilience and standardize cybersecurity standards.",
    tags_en: ["ENISA", "EU", "Cybersecurity", "NIS2 Directive", "EU CSI", "Cyber Resilience"],
    sources: [
      { name: "ENISA News", url: "https://enisa.europa.eu/topics/state-of-cybersecurity-in-the-eu", lang: "EN" }
    ]
  },
  {
    id: "20260528-056",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "ETSI 宣布 2026 年資安會議：涵蓋 AI 安全、量子準備與全球法規趨勢",
    summary: "ETSI 即將舉辦第 20 屆資安會議，這是一個全球資安社群重要的年度盛會。本次會議為期四天，內容涵蓋了廣泛的戰略與技術主題。議程重點包括全球資安格局、新興威脅與關鍵法規，特別關注 AI 安全與韌性，探討了代理式 AI 系統的應用與風險。此外，會議也將深入討論密碼學與量子準備、身份與 API 安全、雲端、SaaS、OT/IoT 產品安全，以及網路與電信安全，涵蓋 5G、6G 和 Open RAN 等前沿技術。另一個重要的環節是「法規跑道與合規營運」，將覆蓋歐盟及全球框架的實務影響，並特別提及 CRA 2026 的議題。本次活動旨在讓政府機構、標準制定組織、學術界和產業各領域的專家進行面對面交流，了解全球資安的最新發展與標準化趨勢。",
    tags: ["ETSI", "資安會議", "AI 安全", "量子準備", "CRA", "標準化", "5G/6G"],
    title_en: "ETSI Announces 2026 Cybersecurity Conference: Covering AI Security, Quantum Readiness, and Global Regulatory Trends",
    summary_en: "ETSI is set to host its 20th Cybersecurity Conference, a major annual event for the global cybersecurity community. This four-day conference will cover a wide range of strategic and technical topics. Key agenda points include the global cybersecurity landscape, emerging threats, and critical regulations, with a special focus on AI security and resilience. It will explore the application and risks associated with agentic AI systems. Furthermore, the conference will delve into cryptography and quantum readiness, identity and API security, cloud, SaaS, OT/IoT product security, and network and telecommunications security, covering advanced technologies such as 5G, 6G, and Open RAN. Another important segment is the \"Regulatory Roadmap and Compliance Operations,\" which will cover the practical implications of EU and global frameworks, specifically mentioning the CRA 2026 issue. The event aims to facilitate face-to-face exchange among experts from government agencies, standardization bodies, academia, and industry, providing insights into the latest developments and standardization trends in global cybersecurity.",
    tags_en: ["ETSI", "Cybersecurity Conference", "AI Security", "Quantum Readiness", "CRA", "Standardization", "5G/6G"],
    sources: [
      { name: "ETSI 資安技術", url: "https://etsi.org/events/2645-etsi-security-conference-oct2026", lang: "EN" }
    ]
  },
  {
    id: "20260528-057",
    trackers: ["security"],
    category: "uncategorized",
    title: "Fortinet發布3500G與400G系列防火牆：強調高連線數與能效比領先",
    summary: "Fortinet持續擴展其FortiGate系列防火牆產品線，於今年宣布新增用於資料中心（3500G系列）和企業邊緣（400G系列）兩款機型。3500G系列（FG-3500G、FG-3501G）具備更強大的資料中心級規格，擁有1.79億個同時連線數，並搭載NP7、CP10等專屬ASIC晶片。400G系列（FG-400G、FG-401G）則定位於中階邊緣環境，具備16個GbE埠等豐富介面。兩系列產品均強調其在同時連線數與單位能耗上的領先優勢，並運行FortiOS 7.6.6版。雖然400G系列在部分高耗能規格（如IPS吞吐量）上不如700G系列，但其在防火牆吞吐量和同時連線數方面仍能達到業界高水準，適合分散建置的網路環境。",
    tags: ["Fortinet", "FortiGate", "防火牆", "ASIC晶片", "FortiOS", "資料中心"],
    title_en: "Fortinet Releases 3500G and 400G Series Firewalls: Emphasizing Leading Connection Capacity and Energy Efficiency",
    summary_en: "Fortinet continues to expand its FortiGate series firewall product line, announcing two new models this year: one for data centers (3500G series) and one for enterprise edge (400G series). The 3500G series (FG-3500G, FG-3501G) features enhanced data center-grade specifications, boasting 179 million concurrent connections and equipped with dedicated ASICs such as NP7 and CP10. The 400G series (FG-400G, FG-401G) is positioned for mid-tier edge environments, offering rich interfaces such as 16 GbE ports. Both series emphasize their leading advantages in concurrent connection capacity and energy efficiency, and run on FortiOS 7.6.6. Although the 400G series may not match the 700G series in certain high-power specifications (such as IPS throughput), it still achieves industry-high standards in firewall throughput and concurrent connections, making it suitable for distributed network deployments.",
    tags_en: ["Fortinet", "FortiGate", "Firewall", "ASIC Chip", "FortiOS", "Data Center"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/review/176173", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260528-058",
    trackers: ["security"],
    category: "uncategorized",
    title: "無法分析：提供的文章內容為 NVD 頁面重定向警告，無可提取資安新聞資訊。",
    summary: "無法根據提供的內容撰寫摘要。原文僅為一個指向 NVD 網站的重定向警告頁面，內容不包含任何具體的資安漏洞、受影響產品、技術細節或修補建議。因此，無法判斷受影響的產品、攻擊向量或實務影響。",
    tags: ["NVD", "無法分析", "CVE-2026-10008"],
    title_en: "Unable to Analyze: The provided article content is an NVD page redirection warning, and no cybersecurity news information can be extracted.",
    summary_en: "A summary cannot be written based on the provided content. The original text is merely a redirection warning page pointing to the NVD website, and it does not contain any specific cybersecurity vulnerabilities, affected products, technical details, or patch recommendations. Therefore, it is impossible to determine the affected products, attack vectors, or practical impact.",
    tags_en: ["NVD", "Unable to Analyze", "CVE-2026-10008"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-10008", lang: "EN" }
    ]
  },
  {
    id: "20260528-059",
    trackers: ["security"],
    category: "uncategorized",
    title: "無法生成新聞標題：原文內容為 NVD 頁面重定向警告，無可分析的資安事件資訊。",
    summary: "本文提供的原文內容僅為一個指向 NVD (National Vulnerability Database) 網站的重定向警告頁面，並包含關於官方政府網站（.gov）安全連接的提醒。該內容不包含任何具體的資安事件、受影響產品、CVE 編號、技術細節或修補建議。因此，無法撰寫資安新聞摘要。",
    tags: ["NVD", "安全警告", "資訊安全"],
    title_en: "Cannot Generate News Headline: Original Content is an NVD Page Redirection Warning, Lacking Analyzable Security Incident Information.",
    summary_en: "The original content provided is merely a redirection warning page pointing to the NVD (National Vulnerability Database) website, and includes a reminder about secure connections to official government websites (.gov). This content does not contain any specific security incidents, affected products, CVE IDs, technical details, or patch recommendations. Therefore, it is impossible to write a cybersecurity news summary.",
    tags_en: ["NVD", "Security Warning", "Information Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-10010", lang: "EN" }
    ]
  }
];
