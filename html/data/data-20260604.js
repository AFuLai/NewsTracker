// data-20260604.js — 2026-06-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-04"] = [
  {
    id: "20260604-001",
    trackers: ["security"],
    category: "重大事件",
    title: "美國司法部發動跨國行動：聯手科技巨頭瓦解東南亞網路加密貨幣詐騙集團",
    summary: "美國司法部（DoJ）宣布，政府機構與私營企業共同發動了「瓦解週」行動，旨在打擊針對美國公民的網路和加密貨幣詐騙。此次行動針對的詐騙集團位於東南亞，透過社交媒體和網路帳號進行詐騙，特別是「愛情詐騙」（pig butchering）。參與行動的包括蘋果、谷歌、Meta、Coinbase、微軟等科技巨頭，以及多國警方（如澳洲、加拿大、新西蘭、泰國等）。行動成果包括關閉超過 140 萬個帳號、2 萬個微軟帳號，並成功凍結了超過 380 萬美元的加密貨幣。DoJ 指出，加密貨幣詐騙是美國最快速增長的詐騙形式，損失金額持續攀升。詐騙集團常在柬埔寨、寮國和緬甸等地的工業規模營地運營，甚至涉及人口販運。此次事件強調了跨國合作在打擊跨國網路犯罪中的關鍵作用。",
    tags: ["美國司法部", "加密貨幣詐騙", "跨國犯罪", "愛情詐騙", "Meta", "Coinbase", "東南亞"],
    title_en: "U.S. Department of Justice Launches Cross-Border Operation with Tech Giants to Dismantle Southeast Asian Crypto Scam Rings",
    summary_en: "The U.S. Department of Justice (DoJ) announced a joint 'Dismantle Week' operation involving government agencies and private companies aimed at combating online and cryptocurrency scams targeting U.S. citizens. The scam rings targeted by this operation are located in Southeast Asia and operate through social media and online accounts, particularly focusing on 'pig butchering' scams. Participating in the operation are tech giants such as Apple, Google, Meta, Coinbase, and Microsoft, alongside law enforcement from multiple countries (including Australia, Canada, New Zealand, and Thailand). The operation achieved results including the closure of over 1.4 million accounts, 20,000 Microsoft accounts, and the successful freezing of over $3.8 million in cryptocurrency. The DoJ noted that cryptocurrency scams are the fastest-growing type of fraud in the U.S., with losses continuously rising. The scam groups often operate from industrial-scale facilities in countries like Cambodia, Laos, and Myanmar, sometimes involving human trafficking. This incident underscores the critical role of international cooperation in combating transnational cybercrime.",
    tags_en: ["U.S. Department of Justice", "Cryptocurrency Scam", "Transnational Crime", "Pig Butchering", "Meta", "Coinbase", "Southeast Asia"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/doj-disrupts-southeast-asia-crypto.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-002",
    trackers: ["security"],
    category: "重大事件",
    title: "Symantec/Carbon Black揭露：駭客鎖定證交所高階主管郵件帳號，持續竊取商業機密資料",
    summary: "Broadcom旗下Symantec與Carbon Black團隊揭露一宗針對全球大型證券交易所的網路間諜活動。攻擊者成功入侵高階主管的電子郵件帳號，並在長達五個月的時間內持續竊取郵件資料。攻擊的初始入侵途徑不明，但攻擊者最早於2025年10月取得SYSTEM權限，並部署了偽裝成Adobe Acrobat Reader與OneDrive元件的惡意程式。後續攻擊利用合法.NET函式庫Aspose，將Outlook OST郵件資料轉換為PST格式，再分割成小型增量檔案，透過Dropbox與OneDrive分批外傳，以規避資安監控。攻擊者透過重新建立與執行排程工作來維持惡意程式的運作，專注於竊取單一信箱內容，獲取足以建構組織發展方向的極高價值商業資訊。",
    tags: ["Symantec", "Carbon Black", "證券交易所", "網路間諜", "郵件竊取", "OST/PST", "系統權限"],
    title_en: "Symantec/Carbon Black Reveal: Hackers Target High-Level Executives' Email Accounts at Stock Exchanges, Continuously Stealing Commercial Secrets",
    summary_en: "Symantec, a subsidiary of Broadcom, and the Carbon Black team revealed a cyber espionage campaign targeting major global stock exchanges. The attackers successfully infiltrated high-level executives' email accounts and continuously stole email data over a period of five months. The initial entry vector of the attack is unknown, but the attackers first gained SYSTEM privileges in October 2025 and deployed malware disguised as Adobe Acrobat Reader and OneDrive components. Subsequent attacks utilized the legitimate .NET library Aspose to convert Outlook OST email data into PST format, which was then segmented into small, incremental files and exfiltrated in batches via Dropbox and OneDrive to evade security monitoring. The attackers maintained the malware's operation by recreating and executing scheduled tasks, focusing on stealing the contents of a single mailbox to acquire extremely valuable commercial information sufficient to construct the organization's development direction.",
    tags_en: ["Symantec", "Carbon Black", "Stock Exchange", "Cyber Espionage", "Email Theft", "OST/PST", "System Privilege"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176375", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-003",
    trackers: ["os"],
    category: "Linux",
    title: "Ubuntu Core 26 應用：利用 Snap 部署 AI 模型至 Renesas RZ/V 邊緣設備",
    summary: "本文介紹了如何在邊緣運算設備上部署優化的 AI 模型，特別針對 Renesas RZ/V 系列微處理器。這些設備配備了 DRP-AI 專用加速器，用於加速神經網路推理，同時保持極低的功耗。開發流程結合了 Ubuntu Core 的模組化架構，實現了從模型編譯到部署的端到端解決方案。開發者需在主機系統上使用 DRP-AI TVM 工具鏈，將 ONNX 模型編譯為 Runtime Model Data。接著，所有組件（包括 DRP-AI TVM 運行時庫、編譯後的應用程式和模型數據）會被打包成一個 Snap。Snap 透過 `snapcraft.yaml` 進行跨平台編譯，並利用 `devmode` 限制來確保安全可靠的部署。這為開發者提供了一個管理安全、模組化 AI 解決方案的完整基礎設施。",
    tags: ["Ubuntu Core", "Renesas", "RZ/V", "DRP-AI", "AI 邊緣運算", "Snap", "TVM"],
    title_en: "Ubuntu Core 26 Application: Deploying AI Models via Snap to Renesas RZ/V Edge Devices",
    summary_en: "This article introduces how to deploy optimized AI models on edge computing devices, specifically targeting the Renesas RZ/V series microprocessors. These devices are equipped with a dedicated DRP-AI accelerator for accelerating neural network inference while maintaining extremely low power consumption. The development process combines Ubuntu Core's modular architecture to achieve an end-to-end solution, from model compilation to deployment. Developers must use the DRP-AI TVM toolchain on the host system to compile ONNX models into Runtime Model Data. Subsequently, all components (including the DRP-AI TVM runtime library, the compiled application, and the model data) are packaged into a Snap. The Snap uses `snapcraft.yaml` for cross-platform compilation and leverages `devmode` restrictions to ensure secure and reliable deployment. This provides developers with a complete infrastructure for managing secure, modular AI solutions.",
    tags_en: ["Ubuntu Core", "Renesas", "RZ/V", "DRP-AI", "AI Edge Computing", "Snap", "TVM"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/ubuntu-core-26-ai-renesas", lang: "EN" }
    ]
  },
  {
    id: "20260604-004",
    trackers: ["security"],
    category: "法規與標準",
    title: "微軟預告 Entra ID SSPR 流程重大調整：2026年起需正式註冊驗證方法",
    summary: "微軟宣布，身分識別與存取管理服務 Microsoft Entra ID 的自助式密碼重設（SSPR）流程將進行重大調整。自 2026 年 9 月 7 日起，使用者在透過 SSPR 重設密碼時，必須使用事先完成註冊的驗證方法進行身分驗證。若手機號碼、公司電話或備用電子郵件僅存在於目錄屬性中，但未正式註冊為驗證方法，政策生效後將無法再用於密碼重設。\n此變更屬於微軟安全未來倡議（SFI）的一部分，旨在確保密碼重設驗證基於可信且經使用者驗證的方法，而非依賴可能未持續維護的目錄聯絡資訊。微軟建議已啟用 SSPR 的組織應及早確認所有使用者，特別是系統管理員，都已註冊至少一種符合新政策的驗證方法，並提前規劃服務台協助註冊，以降低政策生效後使用者無法自行重設密碼的風險。",
    tags: ["Microsoft Entra ID", "SSPR", "身分識別", "密碼重設", "微軟安全未來倡議", "身份驗證"],
    title_en: "Microsoft Announces Major Changes to Entra ID SSPR Process: Formal Registration Required Starting in 2026",
    summary_en: "Microsoft has announced significant adjustments to the Self-Service Password Reset (SSPR) process for Microsoft Entra ID identity and access management services. Effective September 7, 2026, users must utilize a pre-registered verification method to authenticate when resetting their passwords via SSPR. If a mobile number, corporate phone, or backup email address exists only as a directory attribute but has not been formally registered as a verification method, it will no longer be usable for password reset after the policy takes effect.\n\nThis change is part of Microsoft's Security Future Initiative (SFI), aiming to ensure that password reset authentication relies on reliable and user-verified methods, rather than depending on directory contact information that may not be continuously maintained. Microsoft advises organizations that have enabled SSPR to confirm early that all users, especially system administrators, have registered at least one verification method compliant with the new policy, and to plan service desk assistance for registration to mitigate the risk of users being unable to self-reset their passwords after the policy takes effect.",
    tags_en: ["Microsoft Entra ID", "SSPR", "Identity", "Password Reset", "Security Future Initiative", "Authentication"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176333", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-005",
    trackers: ["security"],
    category: "法規與標準",
    title: "Bugcrowd推出歐盟資料駐留選項，應對日益複雜的資料主權與法規要求",
    summary: "隨著全球地緣政治緊張局勢加劇，企業對於資料的儲存地點和適用法律規範的關注度日益提高。Bugcrowd為此擴展了其滲透測試平台，推出了「資料駐留選項」（Data Residency Option），旨在協助客戶滿足歐盟（EU）嚴格的資料主權和資料駐留要求。資料主權的核心是確保資料受其產生國家的法律管轄，而資料駐留則關乎資料的實際儲存位置。文章指出，歐盟的《一般資料保護規範》（GDPR）規定了個人資料的處理，而美國的《雲端法案》（Cloud Act）則可能要求美國公司提供無論資料實際位於何處的數據。Bugcrowd的此舉反映了資料駐留已成為企業在資安採購決策中的關鍵考量，客戶需要更高的數據控制權和可見度，以應對跨國法律衝突和營運韌性需求。",
    tags: ["Bugcrowd", "資料主權", "資料駐留", "歐盟", "GDPR", "資安法規"],
    title_en: "Bugcrowd Launches EU Data Residency Option to Address Complex Data Sovereignty and Regulatory Requirements",
    summary_en: "As global geopolitical tensions escalate, corporate concern regarding data storage location and applicable legal standards is increasing. Bugcrowd has expanded its penetration testing platform by introducing a 'Data Residency Option,' designed to help clients meet stringent EU data sovereignty and data residency requirements. Data sovereignty ensures that data is governed by the laws of the country where it originated, while data residency concerns the physical storage location of the data. The article notes that the EU's General Data Protection Regulation (GDPR) governs the processing of personal data, while the US Cloud Act may require US companies to provide data regardless of its physical location. Bugcrowd's move reflects that data residency has become a critical consideration in enterprise cybersecurity procurement decisions, as clients require greater data control and visibility to address cross-border legal conflicts and operational resilience needs.",
    tags_en: ["Bugcrowd", "Data Sovereignty", "Data Residency", "EU", "GDPR", "Cybersecurity Regulations"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/bugcrowd-launches-eu-data-residency-option-for-evolving-data-sovereignty-needs", lang: "EN" }
    ]
  },
  {
    id: "20260604-006",
    trackers: ["os", "security"],
    category: "Windows",
    title: "SQLite sqldiff.exe 存在命令列參數處理漏洞 (CVE-2025-71316)",
    summary: "本漏洞影響 SQLite 的 sqldiff.exe 工具，其在處理微軟 Windows C 運行時將 Unicode 字元轉換為 ANSI 代碼頁的過程中，缺乏安全處理機制。攻擊者可利用此漏洞，透過使用 '-L' 選項載入任意 DLL，並搭配精心構造的命令列參數字串，導致命令列檔案參數被誤解為命令列選項，從而執行惡意代碼。此漏洞的修補預計在 2025 年 12 月 26 日左右完成。建議使用者應留意相關安全公告，並在修補版本發布後儘速更新 SQLite 相關元件，以防範被利用。由於原文未提供具體修補版本號或影響範圍，建議所有使用 sqldiff.exe 的環境應保持警惕。",
    tags: ["SQLite", "CVE-2025-71316", "Windows", "DLL 載入", "命令列注入"],
    title_en: "SQLite sqldiff.exe has command-line argument processing vulnerability (CVE-2025-71316)",
    summary_en: "This vulnerability affects the SQLite sqldiff.exe tool. The tool lacks secure handling mechanisms when converting Unicode characters to ANSI code pages using the Microsoft Windows C runtime. Attackers can exploit this vulnerability by loading an arbitrary DLL using the '-L' option, combined with a specially crafted command-line argument string. This causes the command-line file parameters to be misinterpreted as command-line options, leading to the execution of malicious code. The patch for this vulnerability is expected around December 26, 2025. Users are advised to monitor relevant security announcements and update SQLite components promptly once the patched version is released to prevent exploitation. Since the original text did not provide specific patch version numbers or affected scopes, all environments using sqldiff.exe are advised to remain vigilant.",
    tags_en: ["SQLite", "CVE-2025-71316", "Windows", "DLL Loading", "Command-line Injection"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-71316", lang: "EN" }
    ]
  },
  {
    id: "20260604-007",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "巴基斯坦APT組織「SideCopy」針對阿富汗財政部進行網路間諜活動，利用Xeno RAT竊取資料",
    summary: "研究人員指出，一個來自巴基斯坦的資深持續性威脅（APT）組織「SideCopy」，自至少 2025 年 5 月以來，持續對阿富汗的政府財政部門進行網路間諜活動。攻擊鏈採用了典型的釣魚攻擊（spear-phishing），透過包含惡意 LNK 檔案的 ZIP 壓縮檔，利用 mshta 執行 HTA 載荷，並在記憶體中解碼。攻擊者隨後建立持久性，偽裝成 Microsoft Edge 流程。核心惡意程式為開源的遠端竊取工具 Xeno RAT，並透過在保加利亞的「彈藥桶服務」託管的 C2 網域進行控制。攻擊者利用阿富汗通信和資訊科技部的受侵害網域，將惡意流量偽裝成國家合法業務，實現了高度的防禦規避。此次攻擊的目標是獲取阿富汗各省高階員工的個人資料，顯示出成熟的戰術、技術和程序（TTPs）和運營安全考量。",
    tags: ["SideCopy", "Xeno RAT", "APT", "阿富汗", "巴基斯坦", "網路間諜", "spear-phishing"],
    title_en: "Pakistan APT Group 'SideCopy' Conducts Cyber Espionage Against Afghanistan's Ministry of Finance Using Xeno RAT to Steal Data",
    summary_en: "Researchers have pointed out that a sophisticated Advanced Persistent Threat (APT) group originating from Pakistan, named 'SideCopy', has been conducting cyber espionage against the Afghan government's financial sector since at least May 2025. The attack chain utilized typical spear-phishing, using a ZIP archive containing a malicious LNK file to execute an HTA payload via mshta, which was then decoded in memory. The attackers subsequently established persistence, masquerading as the Microsoft Edge process. The core malicious tool was the open-source remote access tool Xeno RAT, which was controlled through a C2 domain hosted on a 'bulletproof service' in Bulgaria. The attackers leveraged compromised domains belonging to the Afghan Ministry of Communications and Information Technology to disguise malicious traffic as legitimate national business, achieving a high degree of defense evasion. The objective of this attack was to acquire personal data of high-ranking employees across various provinces in Afghanistan, demonstrating mature Tactics, Techniques, and Procedures (TTPs) and operational security considerations.",
    tags_en: ["SideCopy", "Xeno RAT", "APT", "Afghanistan", "Pakistan", "Cyber Espionage", "spear-phishing"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/pakistan-spies-afghan-finance-ministry-xeno-rat", lang: "EN" }
    ]
  },
  {
    id: "20260604-008",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WordPress外掛Kirki曝未經身分驗證權限提升漏洞CVE-2026-8206，遭駭可接管管理員帳號",
    summary: "資安業者Wordfence揭露，WordPress外掛Kirki存在一項嚴重權限提升漏洞CVE-2026-8206。此漏洞CVSS分數為9.8，影響版本為6.0.0至6.0.6。攻擊者無需登入網站，僅需透過外掛的忘記密碼功能，即可指定任意高權限帳號名稱，同時將重設連結導向攻擊者控制的電子郵件信箱。由於漏洞出現在前端帳號管理流程，攻擊者可接管管理員帳號，進而修改網站內容、安裝惡意外掛或植入Web shell，造成網站後臺控制權被奪取。Wordfence指出，該漏洞已在Kirki 6.0.7版本修補，建議所有使用Kirki外掛的網站應立即升級至6.0.7或更高版本。",
    tags: ["WordPress", "Kirki", "CVE-2026-8206", "權限提升", "忘記密碼", "外掛漏洞"],
    title_en: "WordPress Plugin Kirki Exposed to Unauthenticated Privilege Escalation Vulnerability CVE-2026-8206, Allowing Admin Account Takeover",
    summary_en: "Security firm Wordfence has disclosed a critical privilege escalation vulnerability, CVE-2026-8206, in the WordPress plugin Kirki. This vulnerability has a CVSS score of 9.8 and affects versions 6.0.0 through 6.0.6. Attackers do not need to log into the website; they only need to utilize the plugin's 'forgot password' function to specify an arbitrary high-privilege account name and redirect the reset link to an email address controlled by the attacker. Since the vulnerability exists within the front-end account management process, attackers can take over administrator accounts, subsequently modifying website content, installing malicious plugins, or injecting Web shells, leading to the loss of website backend control. Wordfence points out that this vulnerability has been patched in Kirki version 6.0.7, and recommends that all websites using the Kirki plugin immediately upgrade to version 6.0.7 or higher.",
    tags_en: ["WordPress", "Kirki", "CVE-2026-8206", "Privilege Escalation", "Forgot Password", "Plugin Vulnerability"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176358", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：舊版Linux核心權限提升漏洞CVE-2022-0492持續遭利用，要求聯邦機構緊急修補",
    summary: "美國網路安全與基礎設施安全局（CISA）警告，數年前揭露的Linux核心權限提升漏洞CVE-2022-0492，已被確認持續遭到積極利用，並將其列入已遭利用漏洞名單（KEV）。該漏洞最初於2022年2月揭露，存在於cgroups v1 release_agent功能。攻擊者若在特定條件下利用此漏洞，可提升權限並繞過名稱空間（namespace）隔離機制。根據分析，此漏洞的CVSS風險評分為7.8，且無需特定授權即可利用，甚至可被用於容器逃逸。CISA要求聯邦機構在特定日期前完成修補。資安界指出，此漏洞的持續被利用，凸顯了修補舊有、長期未修補的系統漏洞的重要性，建議相關機構應立即檢查並修補所有使用受影響Linux核心版本的系統。",
    tags: ["CISA", "CVE-2022-0492", "Linux核心", "權限提升", "KEV", "容器逃逸"],
    title_en: "CISA Warns: Old Linux Kernel Privilege Escalation Vulnerability CVE-2022-0492 Continues to Be Exploited, Federal Agencies Urged to Patch",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) warns that the Linux kernel privilege escalation vulnerability CVE-2022-0492, disclosed several years ago, has been confirmed to be actively exploited and has been listed on the Known Exploited Vulnerabilities (KEV) catalog. The vulnerability was initially disclosed in February 2022 and exists within the cgroups v1 release_agent function. Under specific conditions, attackers can exploit this vulnerability to escalate privileges and bypass namespace isolation mechanisms. Analysis shows that the CVSS risk score for this vulnerability is 7.8, and it can be exploited without specific authorization, even potentially being used for container escape. CISA requires federal agencies to complete patching by a specific date. Cybersecurity experts point out that the continued exploitation of this vulnerability highlights the importance of patching old, long-unpatched system vulnerabilities, advising relevant organizations to immediately check and patch all systems using the affected Linux kernel versions.",
    tags_en: ["CISA", "CVE-2022-0492", "Linux Kernel", "Privilege Escalation", "KEV", "Container Escape"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176353", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "TXOne Networks發布2026年OT資安報告：歐洲工業系統老舊漏洞風險持續攀升",
    summary: "TXOne Networks近期發布的2026年度OT資安報告，深入分析了歐洲工業領域面臨的資安挑戰。報告指出，老舊系統（Legacy Systems）的漏洞已成為駭客持續且活躍的攻擊面。數據顯示，過去一年超過半數（51%）的歐洲工業組織曾歷經涉及老舊Windows系統的資安事件，相較於前一年有明顯增長。此風險已橫跨多個產業，如食品與飲料業和半導體產業，受害比例均達七成。報告強調，企業防禦策略正從「何時更換」轉向「今日如何保護」，促使六成工業組織正積極規劃投資專門的舊系統防護方案，以應對日益嚴峻的OT資安風險。",
    tags: ["OT資安", "Legacy Systems", "工業控制系統", "TXOne Networks", "Windows系統", "資安報告"],
    title_en: "TXOne Networks Releases 2026 OT Security Report: Risks from Aging Vulnerabilities in European Industrial Systems Continue to Climb",
    summary_en: "TXOne Networks recently released its 2026 OT Security Report, which deeply analyzes the cybersecurity challenges facing Europe's industrial sector. The report points out that vulnerabilities in Legacy Systems have become a persistent and active attack surface for hackers. Data shows that over half (51%) of European industrial organizations experienced a security incident involving old Windows systems over the past year, representing a noticeable increase compared to the previous year. This risk spans multiple industries, such as food and beverage and semiconductor, with 70% of affected organizations in each sector. The report emphasizes that corporate defense strategies are shifting from 'when to replace' to 'how to protect today,' prompting 60% of industrial organizations to actively plan investments in dedicated legacy system protection solutions to address the increasingly severe OT security risks.",
    tags_en: ["OT Security", "Legacy Systems", "Industrial Control Systems", "TXOne Networks", "Windows Systems", "Security Report"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176352", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Magento快取外掛程式曝重大漏洞 CVE-2026-45247，CISA警告已遭積極利用",
    summary: "資安公司Sansec警告，Magento網頁快取外掛程式Mirasvit Cache Warmer存在一個嚴重漏洞CVE-2026-45247。此漏洞允許攻擊者在未經身分驗證的情況下，對PHP物件進行注入，CVSS風險評分為9.8分，屬於極高風險。美國網路安全與基礎設施安全局（CISA）已確認此漏洞遭積極利用，並於6月3日將其列入已遭利用的漏洞名單（KEV），要求聯邦機構必須在指定期限內完成修補。用戶應立即更新或修補相關外掛程式，以防範未經身分驗證的物件注入攻擊，降低被惡意利用的風險。",
    tags: ["Magento", "CVE-2026-45247", "Mirasvit Cache Warmer", "PHP", "CISA", "KEV"],
    title_en: "Magento Cache Plugin Exposed to Critical Vulnerability CVE-2026-45247; CISA Warns of Active Exploitation",
    summary_en: "Security firm Sansec warns that the Magento webpage cache plugin, Mirasvit Cache Warmer, contains a critical vulnerability, CVE-2026-45247. This flaw allows attackers to inject PHP objects without authentication, resulting in a CVSS risk score of 9.8, categorized as critical. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has confirmed that this vulnerability is being actively exploited and listed it on its Known Exploited Vulnerabilities (KEV) catalog on June 3rd, requiring federal agencies to patch within a specified timeframe. Users should immediately update or patch the affected plugin to prevent unauthenticated object injection attacks and mitigate the risk of malicious exploitation.",
    tags_en: ["Magento", "CVE-2026-45247", "Mirasvit Cache Warmer", "PHP", "CISA", "KEV"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176350", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google 6月Android 安全更新修補權限提升漏洞 CVE-2025-48595，CISA 確認遭積極利用",
    summary: "Google 發布了 6 月份的 Android 安全公告，修補了多個漏洞，其中包含一個關鍵的權限提升漏洞 CVE-2025-48595。該漏洞被指出可被鎖定目標的局部活動利用，具有嚴重的安全風險。美國網路安全暨基礎設施安全局（CISA）已證實 CVE-2025-48595 已經被用於實際攻擊，並將其列入已遭利用漏洞列表（KEV）。CISA 要求聯邦機構必須在 6 月 5 日前完成修補。因此，建議所有使用者應儘快透過系統更新，修補 Android 系統中的相關漏洞，以避免遭受攻擊。",
    tags: ["Google", "Android", "CVE-2025-48595", "權限提升", "CISA", "安全更新"],
    title_en: "Google's June Android Security Update Patches Privilege Escalation Vulnerability CVE-2025-48595; CISA Confirms Active Exploitation",
    summary_en: "Google released its June Android security announcement, patching multiple vulnerabilities, including a critical privilege escalation flaw, CVE-2025-48595. This vulnerability is noted to be exploitable via local activity and poses a severe security risk. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has confirmed that CVE-2025-48595 has been used in actual attacks and has listed it in its Known Exploited Vulnerabilities (KEV) catalog. CISA requires federal agencies to complete the patch by June 5th. Therefore, all users are advised to update their Android system promptly to patch the relevant vulnerabilities and prevent potential attacks.",
    tags_en: ["Google", "Android", "CVE-2025-48595", "Privilege Escalation", "CISA", "Security Update"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176349", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露HTTP/2 Bomb DoS攻擊：利用HPACK與流量控制窗口耗盡記憶體",
    summary: "資安研究平臺Calif揭露了一種名為HTTP/2 Bomb的遠端阻斷服務（DoS）攻擊手法。此攻擊鎖定HTTP/2的預設組態，攻擊者結合了針對HPACK標頭壓縮機制的「壓縮炸彈」與類似Slowloris的連線佔用技術。攻擊者可利用HPACK索引引用讓伺服器反覆配置標頭相關記憶體，再透過宣告零位元組的HTTP/2流量控制視窗，使伺服器無法完成回應並釋放已配置的記憶體，從而耗盡伺服器記憶體資源。受影響的產品包括Nginx、Apache httpd、Microsoft IIS、Envoy與Cloudflare Pingora等主流網頁伺服器與代理伺服器。研究測試顯示，在具備100Mbps連線的家用電腦上，易受攻擊的伺服器理論上可在數秒內無法提供服務。修補建議方面，Nginx已在1.29.8版加入`max_headers`指令；Apache則在mod_http2 v2.0.41修正，但尚未納入2.4.x正式版本。此問題已指定為CVE-2026-49975，若無法升級，建議停用HTTP/2協定。",
    tags: ["HTTP/2 Bomb", "CVE-2026-49975", "DoS攻擊", "HPACK", "Nginx", "Apache httpd"],
    title_en: "Research Reveals HTTP/2 Bomb DoS Attack: Exhausting Memory Using HPACK and Flow Control Windows",
    summary_en: "Security research platform Calif has disclosed a Remote Denial of Service (DoS) attack technique called HTTP/2 Bomb. This attack targets the default configuration of HTTP/2, combining a 'compression bomb' targeting the HPACK header compression mechanism with connection exhaustion techniques similar to Slowloris. Attackers can exploit HPACK index references to force the server to repeatedly allocate header-related memory, and then use HTTP/2 flow control windows declared with zero bytes to prevent the server from completing the response and releasing the allocated memory, thereby exhausting the server's memory resources. Affected products include mainstream web servers and proxy servers such as Nginx, Apache httpd, Microsoft IIS, Envoy, and Cloudflare Pingora. Research testing showed that, on a home computer with a 100Mbps connection, a vulnerable server could theoretically become unavailable within seconds. Regarding remediation, Nginx has added the `max_headers` directive in version 1.29.8; Apache has fixed this in mod_http2 v2.0.41, but it has not been incorporated into the 2.4.x official version. This issue has been designated as CVE-2026-49975, and if upgrading is not possible, it is recommended to disable the HTTP/2 protocol.",
    tags_en: ["HTTP/2 Bomb", "CVE-2026-49975", "DoS Attack", "HPACK", "Nginx", "Apache httpd"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176351", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Cisco Unified CM 發現檔案寫入漏洞，PoC 公開，可透過 WebDialer 服務提升至 Root",
    summary: "Cisco 針對 Unified Communications Manager (Unified CM) 的一個漏洞發布修補程式。此漏洞被追蹤為 CVE-2026-20230，屬於伺服器端請求偽造（SSRF）類型。攻擊者若能發送惡意 HTTP 請求，可利用 Unified CM 和其 Session Management Edition 未經適當驗證的機制，在底層作業系統上寫入任意檔案，為後續提升權限建立立足點。雖然 CVSS 基礎評分為 8.6（僅評估檔案寫入的完整性影響），但由於最終目標是提升至 Root 權限，Cisco 仍評定為關鍵（Critical）。此漏洞需 WebDialer 服務運行時才會生效。修補建議是立即進行修補，針對 14 train 版本應升級至 14SU6；若使用 15 train，則需使用臨時 COP patch，或在修補前暫時停用 WebDialer 服務。由於 PoC 已公開，建議用戶高度警惕。",
    tags: ["Cisco", "Unified CM", "CVE-2026-20230", "SSRF", "Root 權限", "WebDialer"],
    title_en: "Cisco Unified CM File Write Vulnerability Discovered, PoC Released, Allows Root Escalation via WebDialer",
    summary_en: "Cisco has released a patch for a vulnerability in Unified Communications Manager (Unified CM). This vulnerability is tracked as CVE-2026-20230 and is classified as Server-Side Request Forgery (SSRF). If an attacker can send a malicious HTTP request, they can exploit an inadequately validated mechanism within Unified CM and its Session Management Edition to write arbitrary files to the underlying operating system, establishing a foothold for subsequent privilege escalation. Although the CVSS base score is 8.6 (only assessing the integrity impact of the file write), Cisco has rated it as Critical due to the ultimate goal of achieving Root privileges. This vulnerability is only exploitable when the WebDialer service is running. The recommended remediation is immediate patching: for the 14 train version, upgrade to 14SU6; if using the 15 train, use a temporary COP patch, or temporarily disable the WebDialer service until patching can occur. Given that a PoC has been released, users are advised to exercise extreme caution.",
    tags_en: ["Cisco", "Unified CM", "CVE-2026-20230", "SSRF", "Root", "WebDialer"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/cisco-patches-cve-2026-20230-in-unified.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "思科UCM存在SSRF高風險漏洞：未經認證攻擊者可遠端寫入系統檔案",
    summary: "思科（Cisco）修復了一個影響其Unified Communications Manager (UCM) 的高嚴重性安全漏洞（CVE-2026-20230，CVSS 分數：8.6）。此漏洞允許未經認證的遠端攻擊者透過發送惡意建構的 HTTP 請求，執行伺服器端請求偽造（SSRF）攻擊。攻擊者成功利用此漏洞後，可能在底層作業系統上寫入檔案，進而提升權限至 root。思科已在 Unified CM 和 Unified CM SME 的 14SU6 及 15SU5 版本中修復了此問題。雖然目前沒有證據顯示有正在進行的實際攻擊，但已公開 PoC 程式碼，實務建議所有使用 UCM 的機構應立即升級至指定修復版本，並強化輸入驗證機制，以防範遠端惡意輸入。",
    tags: ["Cisco", "Unified Communications Manager", "CVE-2026-20230", "SSRF", "CVSS", "資安修補"],
    title_en: "Cisco UCM has high-risk SSRF vulnerability: Unauthenticated attackers can write system files remotely",
    summary_en: "Cisco has patched a high-severity security vulnerability (CVE-2026-20230, CVSS Score: 8.6) affecting its Unified Communications Manager (UCM). This vulnerability allows unauthenticated remote attackers to execute a Server-Side Request Forgery (SSRF) attack by sending maliciously crafted HTTP requests. After successfully exploiting this vulnerability, attackers may be able to write files to the underlying operating system, potentially escalating privileges to root. Cisco has fixed this issue in versions 14SU6 and 15SU5 of Unified CM and Unified CM SME. Although there is currently no evidence of active exploitation, public PoC code has been released. Therefore, it is recommended that all organizations using UCM immediately upgrade to the specified patched versions and strengthen input validation mechanisms to prevent remote malicious input.",
    tags_en: ["Cisco", "Unified Communications Manager", "CVE-2026-20230", "SSRF", "CVSS", "Cybersecurity Patch"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/threatsday-bulletin-ai-agents-gone.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國資安犯罪集團 TA4922 擴大攻擊範圍，以釣魚與 DLL 側載方式鎖定歐洲與亞洲企業",
    summary: "資安公司 Proofpoint 追蹤到一個名為 TA4922 的中國資安犯罪集團，該集團的攻擊目標已擴展至英國、德國、義大利和南非等歐洲地區。TA4922 的攻擊模式顯示出快速的運營節奏和不斷演進的惡意工具箱。該集團的動機被評估為財務利益，主要目標是透過釣魚攻擊竊取憑證、進行詐騙或取得遠端存取權。攻擊者常利用人力資源或業務主題的誘餌，透過電子郵件進行釣魚，並使用 Atlas RAT、RomulusLoader 和 SilentRunLoader 等惡意載入器。攻擊技術包括 DLL 側載（DLL side-loading）來植入惡意程式，並嘗試將溝通轉移至 LINE、WhatsApp 等非電子郵件通訊管道，以繞過企業安全控制。攻擊者可利用這些載入器竊取 Google Chrome 的敏感資料，包括密碼和瀏覽紀錄。企業應提高警覺，特別注意來自非傳統通訊管道的釣魚郵件，並強化對端點設備的監控與防禦。",
    tags: ["TA4922", "釣魚攻擊", "DLL 側載", "Atlas RAT", "RomulusLoader", "Proofpoint", "資安犯罪"],
    title_en: "Chinese Cybercrime Group TA4922 Expands Attack Scope, Targeting European and Asian Enterprises via Phishing and DLL Side-loading",
    summary_en: "Cybersecurity firm Proofpoint has tracked a Chinese cybercrime group named TA4922, whose attack targets have expanded to include European regions such as the UK, Germany, Italy, and South Africa. TA4922's attack pattern demonstrates a rapid operational tempo and an evolving arsenal of malicious tools. The group's motive is assessed to be financial gain, primarily aiming to steal credentials, conduct fraud, or gain remote access through phishing attacks. Attackers frequently use lures related to human resources or business topics via email phishing, utilizing malicious loaders such as Atlas RAT, RomulusLoader, and SilentRunLoader. Attack techniques include DLL side-loading to implant malicious code, and attempting to shift communication to non-email channels like LINE and WhatsApp to bypass corporate security controls. Attackers can use these loaders to steal sensitive data from Google Chrome, including passwords and browsing history. Enterprises should heighten their vigilance, paying special attention to phishing emails originating from non-traditional communication channels, and strengthening monitoring and defense for endpoint devices.",
    tags_en: ["TA4922", "Phishing Attack", "DLL Side-loading", "Atlas RAT", "RomulusLoader", "Proofpoint", "Cybercrime"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/china-linked-ta4922-expands-phishing.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "macOS惡意廣告活動「Operation FlutterBridge」傳播後門 FlutterShell，利用WebView架構進行動態攻擊",
    summary: "資安研究人員揭露了一場代號為 Operation FlutterBridge 的 macOS 惡意廣告活動，該活動傳播了一個名為 FlutterShell 的後門。該後門利用 Flutter 框架，透過惡意桌面應用程式散播廣告軟體，並具備執行 Shell 指令和操作檔案系統的能力。攻擊者 CL-CRI-1089 利用 Google 驗證的空殼公司，透過惡意 Google 和 YouTube 廣告作為誘餌，誘騙目標用戶下載偽裝成合法應用程式的惡意軟體。FlutterShell 的技術特點是採用 WebView 架構，利用 JavaScript 到原生橋接（JavaScript-to-native bridge），這使得攻擊者可以在外部網站上託管惡意邏輯，從而無需重新編譯或推送更新即可動態改變惡意軟體的行為。這類後門能劫持 Google Chrome 的設定檔，將所有流量導向攻擊者控制的廣告頁面。研究指出，該惡意軟體樣本均使用有效的 Apple Developer ID 簽名，並通過了 Apple 的自動化安全檢查。這顯示了攻擊鏈的技術深度和持續性，建議用戶保持警惕，並關注作業系統和瀏覽器的安全更新。",
    tags: ["macOS", "FlutterShell", "Operation FlutterBridge", "WebView", "惡意廣告", "CL-CRI-1089", "後門"],
    title_en: "macOS Malicious Ad Campaign 'Operation FlutterBridge' Spreads FlutterShell Backdoor Using WebView Architecture for Dynamic Attacks",
    summary_en: "Cybersecurity researchers have uncovered a malicious ad campaign, codenamed Operation FlutterBridge, which spread a backdoor named FlutterShell. This backdoor utilizes the Flutter framework to distribute adware through malicious desktop applications, possessing the capability to execute shell commands and manipulate the file system. The attacker, CL-CRI-1089, leveraged shell companies verified by Google, using malicious Google and YouTube ads as bait to trick target users into downloading malware disguised as legitimate applications. A key technical feature of FlutterShell is its adoption of the WebView architecture, utilizing a JavaScript-to-native bridge. This allows attackers to host malicious logic on external websites, thereby dynamically altering the malware's behavior without needing to recompile or push updates. This type of backdoor can hijack Google Chrome's configuration files, redirecting all traffic to ad pages controlled by the attacker. Research indicates that all malware samples used valid Apple Developer ID signatures and passed Apple's automated security checks. This demonstrates the technical depth and persistence of the attack chain, advising users to remain vigilant and monitor security updates for their operating systems and browsers.",
    tags_en: ["macOS", "FlutterShell", "Operation FlutterBridge", "WebView", "Malicious Ad", "CL-CRI-1089", "Backdoor"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/fluttershell-backdoor-spreads-to-macos.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安警示：駭客長期滲透全球證交所高階主管信箱，竊取市場機密資訊",
    summary: "本事件為一次針對全球大型證券交易所高階主管信箱的長期間諜活動。攻擊者在至少五個月內持續滲透，透過將信箱內容分批次、小量地複製，並利用 Dropbox 和 OneDrive 等雲端服務進行傳輸，使流量混入正常雲端活動中。Symantec 和 Carbon Black 的威脅獵捕團隊報告指出，這屬於情報蒐集（Espionage），而非為了金錢的竊取。攻擊者在 2025 年 10 月 10 日首次活動，並在系統中運行了偽裝成 Adobe 更新器和 OneDrive 的惡意二進位檔，取得 SYSTEM 最高權限。攻擊者利用 Aspose 建立的信箱竊取工具，將信箱內容轉換為 PST 格式，並分批次、低調地匯出，期間持續監控直到 2026 年 2 月 17 日。攻擊的隱蔽性來自於將惡意活動偽裝成 Adobe、Lenovo 和 OneDrive 等系統服務，並使用個人化的 Dropbox/OneDrive 帳號進行外傳。由於這類攻擊是針對行為模式的滲透，而非利用已知漏洞，因此沒有特定的 CVE 或修補程式可以解決，強調了持續的監控和響應能力的重要性。建議機構應密切監控異常的信箱匯出行為、對高權限用戶的異常 Outlook 存取，以及到個人雲端帳號的意外上傳。",
    tags: ["信箱竊取", "情報蒐集", "證券交易所", "APT", "Aspose", "Dropbox", "OneDrive"],
    title_en: "Cybersecurity Alert: Hackers Long-Term Infiltrate Global Stock Exchange Executives' Mailboxes, Stealing Market Confidential Information",
    summary_en: "This incident was a long-term espionage campaign targeting the mailboxes of executives at global major stock exchanges. The attackers continuously infiltrated the mailboxes for at least five months, transferring the content in small, batch-wise amounts and utilizing cloud services such as Dropbox and OneDrive, which allowed the traffic to blend into normal cloud activity. Threat hunting teams from Symantec and Carbon Black reported that this constituted information gathering (Espionage), rather than theft for monetary gain. The attackers first became active on October 10, 2025, and obtained SYSTEM-level privileges by running malicious binaries disguised as Adobe updaters and OneDrive within the system. The attackers used a mailbox exfiltration tool built with Aspose to convert mailbox content into PST format, which was then exported in small, low-profile batches. They maintained continuous monitoring until February 17, 2026. The attack's stealthiness stemmed from disguising malicious activities as system services like Adobe, Lenovo, and OneDrive, and using personalized Dropbox/OneDrive accounts for exfiltration. Because this type of attack targets behavioral patterns rather than exploiting known vulnerabilities, there is no specific CVE or patch to resolve it, emphasizing the importance of continuous monitoring and response capabilities. Organizations are advised to closely monitor for abnormal mailbox export behavior, unusual Outlook access to high-privilege users, and unexpected uploads to personal cloud accounts.",
    tags_en: ["Mailbox Exfiltration", "Espionage", "Stock Exchange", "APT", "Aspose", "Dropbox", "OneDrive"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/hackers-spied-on-stock-exchange.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國網路犯罪集團 TA4922 擴大攻擊範圍，利用全球化釣魚郵件與多樣化惡意工具進行攻擊",
    summary: "網路安全公司 Proofpoint 報告指出，一個名為 TA4922 的中國網路犯罪集團，已大幅擴大其攻擊範圍和戰術。該集團的活動已從最初專注於日本的稅務主題釣魚郵件，擴展至橫跨東亞（如台灣、韓國、新加坡）、歐洲（如英國、德國、義大利）乃至南非等多個國家。TA4922 擅長撰寫符合當地文化和語言的釣魚郵件，通常偽裝成金融、稅務或人力資源部門，誘騙目標在 Teams 或 WhatsApp 等非監控平台進行後續溝通。攻擊鏈極為多樣，除了惡意連結和附件外，還可能使用 DLL Sideloading、遠端存取木馬（RAT）如 ValleyRAT 或 Atlas RAT，甚至利用 AnyDesk 等合法遠端管理軟體。研究人員指出，TA4922 經常使用大量一次性寄件地址，並結合多種載入器（如 SilentRunLoader）和複雜的惡意載荷，意圖使其攻擊行為難以被即時識別。這顯示該集團具備高度的適應性和多功能性，使其攻擊更具韌性。",
    tags: ["TA4922", "中國網路犯罪", "釣魚攻擊", "ValleyRAT", "Atlas RAT", "Proofpoint", "TTPs"],
    title_en: "Chinese Cybercrime Group TA4922 Expands Attack Scope, Utilizing Global Phishing Emails and Diverse Malicious Tools",
    summary_en: "A report from cybersecurity firm Proofpoint indicates that a Chinese cybercrime group, designated TA4922, has significantly expanded its attack scope and tactics. The group's activities have expanded from initially focusing on tax-themed phishing emails targeting Japan, to spanning multiple countries across East Asia (such as Taiwan, South Korea, and Singapore), Europe (including the UK, Germany, and Italy), and even South Africa. TA4922 excels at crafting phishing emails that align with local culture and language, often impersonating financial, tax, or human resources departments to lure targets into subsequent communications on non-monitored platforms like Teams or WhatsApp. The attack chain is highly diverse; in addition to malicious links and attachments, the group may employ DLL Sideloading, Remote Access Trojans (RATs) such as ValleyRAT or Atlas RAT, and even utilize legitimate remote management software like AnyDesk. Researchers point out that TA4922 frequently uses a large volume of disposable sending addresses, combined with various loaders (such as SilentRunLoader) and complex malicious payloads, intending to make its attack behavior difficult to detect in real-time. This demonstrates the group's high adaptability and versatility, making its attacks more resilient.",
    tags_en: ["TA4922", "China Cybercrime", "Phishing Attack", "ValleyRAT", "Atlas RAT", "Proofpoint", "TTPs"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/china-ta4922-cybercrime-attacks-globally", lang: "EN" }
    ]
  },
  {
    id: "20260604-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "NAVTOR NavBox 存在硬編碼憑證漏洞，本地攻擊者可透過 SOAP 介面取得權限",
    summary: "NAVTOR 的 NavBox 軟體版本 4.16.1.20 存在 CVE-2026-21404 漏洞。此漏洞源於其 Windows Communication Foundation (SOAP) 實作中硬編碼的憑證（CWE-798）。若 SOAP 功能啟用，本地攻擊者可利用此漏洞提取憑證，進而繞過預期工作流程，取得特權 WCF 方法的存取權限，最終可能導致在應用程式定義路徑內寫入或覆寫檔案，造成營運中斷。該漏洞的 CVSS 3.1 分數為 6.3（中等），攻擊向量為本地（AV:L）。廠商已於 2026 年 4 月發布修補程式，建議使用者升級至 4.17.2.6 或更高版本。此外，CISA 建議將控制系統設備隔離於防火牆後，並盡量減少網路暴露面，以降低被利用風險。",
    tags: ["NAVTOR", "NavBox", "CVE-2026-21404", "SOAP", "硬編碼憑證", "OT/ICS"],
    title_en: "NAVTOR NavBox has hardcoded credential vulnerability, allowing local attackers to gain privileges via SOAP interface",
    summary_en: "The NAVTOR NavBox software version 4.16.1.20 contains the vulnerability CVE-2026-21404. This vulnerability stems from hardcoded credentials (CWE-798) within its Windows Communication Foundation (SOAP) implementation. If the SOAP functionality is enabled, a local attacker can exploit this vulnerability to extract the credentials, thereby bypassing the expected workflow and gaining access to privileged WCF methods. This could ultimately lead to writing or overwriting files within the application's defined path, causing operational disruption. The vulnerability has a CVSS 3.1 score of 6.3 (Medium), with a local attack vector (AV:L). The vendor released a patch in April 2026, recommending that users upgrade to version 4.17.2.6 or higher. Furthermore, CISA advises isolating control system equipment behind a firewall and minimizing network exposure to reduce the risk of exploitation.",
    tags_en: ["NAVTOR", "NavBox", "CVE-2026-21404", "SOAP", "Hardcoded Credentials", "OT/ICS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-155-01", lang: "EN" }
    ]
  },
  {
    id: "20260604-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "日立能源 MACH HiDraw 存在堆疊溢出漏洞：CVE-2026-7310 影響關鍵基礎設施",
    summary: "日立能源（Hitachi Energy）發出警示，其 MACH HiDraw 產品系列存在一項堆疊溢出漏洞（Heap-based Buffer Overflow），編號為 CVE-2026-7310。此漏洞存在於 HiDraw 的 XML 解析功能中。攻擊者若具備本地存取權限，可利用特製的 XML 檔案觸發此漏洞，可能導致記憶體損壞，進而造成應用程式崩潰（服務拒絕）甚至執行任意程式碼。該漏洞的影響範圍涵蓋版本 9.22 及更早的產品。日立能源已在版本 9.23 中修復此問題。建議用戶應立即升級至 9.23 或更高版本。此外，應採取網路隔離、防火牆分區、限制外部存取等安全措施，確保工控系統（ICS）與外部網路隔離，以降低被攻擊的風險。",
    tags: ["Hitachi Energy", "CVE-2026-7310", "MACH HiDraw", "堆疊溢出", "工控系統", "ICS"],
    title_en: "Hitachi Energy MACH HiDraw has Stack Overflow Vulnerability: CVE-2026-7310 Affects Critical Infrastructure",
    summary_en: "Hitachi Energy has issued a warning regarding a Heap-based Buffer Overflow vulnerability, designated CVE-2026-7310, present in its MACH HiDraw product line. This vulnerability exists within HiDraw's XML parsing functionality. If an attacker possesses local access, they can exploit this vulnerability using a specially crafted XML file, potentially leading to memory corruption, application crash (Denial of Service), or even arbitrary code execution. The vulnerability affects versions 9.22 and earlier. Hitachi Energy has patched this issue in version 9.23. Users are advised to immediately upgrade to version 9.23 or higher. Furthermore, security measures such as network isolation, firewall segmentation, and restricting external access should be implemented to ensure that Industrial Control Systems (ICS) are isolated from external networks, thereby reducing the risk of attack.",
    tags_en: ["Hitachi Energy", "CVE-2026-7310", "MACH HiDraw", "Stack Overflow", "ICS", "Industrial Control System"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-155-05", lang: "EN" }
    ]
  },
  {
    id: "20260604-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警告：日立能源 RTU500 韌體面臨多重漏洞，影響電力、水務等關鍵基礎設施",
    summary: "日立能源（Hitachi Energy）發布公告，警告其 RTU500 系列產品的 CMU 韌體存在多個安全漏洞，包括 CVE-2025-69421、CVE-2026-24515 等。這些漏洞主要屬於 NULL 指標解引用（NULL Pointer Dereference）和整數溢位等類型，可能導致應用程式崩潰，造成服務中斷（Denial of Service, DoS）。\n\n受影響的產品版本涵蓋 12.7.1 至 13.8.1 等多個區間。漏洞的實務影響範圍廣泛，特別針對電廠、水務、能源等關鍵基礎設施產業，部署於全球各地。雖然目前漏洞的影響主要限制在服務中斷，但仍有潛在的機密性與完整性風險。\n\n日立能源建議用戶應立即更新韌體至修復版本，例如 CMU Firmware version 13.8.2 或 13.7.9（若可用），以降低風險。建議用戶應密切關注廠商的修補建議，並採取適當的緩解措施。",
    tags: ["Hitachi Energy", "RTU500", "CVE-2025-69421", "NULL Pointer Dereference", "關鍵基礎設施", "韌體漏洞"],
    title_en: "Warning: Hitachi Energy RTU500 Firmware Faces Multiple Vulnerabilities, Affecting Power and Water Key Infrastructure",
    summary_en: "Hitachi Energy has issued a notice warning that the CMU firmware for its RTU500 series products contains multiple security vulnerabilities, including CVE-2025-69421 and CVE-2026-24515. These vulnerabilities primarily involve types such as NULL Pointer Dereference and integer overflow, which could lead to application crashes and cause service disruption (Denial of Service, DoS).\n\nThe affected product versions cover multiple ranges, including 12.7.1 through 13.8.1. The practical impact of these vulnerabilities is widespread, specifically targeting critical infrastructure sectors such as power plants, water utilities, and energy, deployed globally. Although the current impact of the vulnerabilities is mainly limited to service disruption, there remains a potential risk to confidentiality and integrity.\n\nHitachi Energy advises users to immediately update the firmware to a patched version, such as CMU Firmware version 13.8.2 or 13.7.9 (if available), to mitigate risks. Users are advised to closely monitor the vendor's patch recommendations and take appropriate mitigation measures.",
    tags_en: ["Hitachi Energy", "RTU500", "CVE-2025-69421", "NULL Pointer Dereference", "Critical Infrastructure", "Firmware Vulnerability"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-155-04", lang: "EN" }
    ]
  },
  {
    id: "20260604-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "B&R PPT30作業系統面臨資源分配漏洞 (CVE-2025-11482)，可能導致OPC-UA服務無法使用",
    summary: "B&R Industrial Automation GmbH 的 PPT30 作業系統（版本小於 1.8.0）存在一個資源分配限制不足的漏洞 (CVE-2025-11482)。此漏洞位於 OPC-UA 伺服器，允許未經身份驗證的網路攻擊者，透過耗盡資源的方式，永久性地阻止合法使用者與該服務進行互動。該系統適用於關鍵基礎設施，包括商業設施、關鍵製造、能源、交通和水處理等領域。此漏洞的 CVSS 3.1 分數為 7.5 (高風險)，攻擊向量為網路 (AV:N)，無需權限 (PR:N)，且無需使用者互動 (UI:N)。修補建議是升級至 PPT30 作業系統 1.8.0 或更高版本。此外，即使已修補，建議客戶應將 OPC-UA 伺服器保持預設未啟用狀態，並透過配置南向防火牆和控制網路防火牆，將存取權限限制於可信 IP 位址，以進行網路分段和加強安全防護。",
    tags: ["B&R", "PPT30 Operating System", "CVE-2025-11482", "OPC-UA", "OT/ICS", "資源分配漏洞"],
    title_en: "B&R PPT30 Operating System Faces Resource Allocation Vulnerability (CVE-2025-11482), Potentially Disrupting OPC-UA Service",
    summary_en: "The PPT30 Operating System from B&R Industrial Automation GmbH (versions less than 1.8.0) contains a resource allocation insufficient vulnerability (CVE-2025-11482). This vulnerability resides in the OPC-UA server, allowing unauthenticated network attackers to permanently disrupt legitimate users' interaction with the service by exhausting resources. The system is used in critical infrastructure, including commercial facilities, critical manufacturing, energy, transportation, and water treatment sectors. This vulnerability has a CVSS 3.1 score of 7.5 (High Risk), with an Attack Vector of Network (AV:N), a Privileges Required of None (PR:N), and a User Interaction of None (UI:N). The recommended patch is to upgrade to PPT30 Operating System version 1.8.0 or higher. Furthermore, even after patching, customers are advised to keep the OPC-UA server in its default disabled state and restrict access by configuring south-bound firewalls and control network firewalls to trusted IP addresses, thereby achieving network segmentation and enhancing security protection.",
    tags_en: ["B&R", "PPT30 Operating System", "CVE-2025-11482", "OPC-UA", "OT/ICS", "Resource Allocation Vulnerability"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-155-03", lang: "EN" }
    ]
  },
  {
    id: "20260604-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "日立能源 (Hitachi Energy) ITT600 Explorer 產品面臨兩處漏洞，可能導致服務拒絕攻擊",
    summary: "本公告指出日立能源 (Hitachi Energy) 的 ITT600 Explorer 產品存在兩處漏洞：CVE-2024-8176 和 CVE-2025-59375。這兩個漏洞都與產品所使用的 libexpat 函式庫有關，且僅在使用 IEC61850 伺服器模擬功能時受影響。CVE-2024-8176 屬於堆疊溢位 (Stack Overflow)，而 CVE-2025-59375 則允許攻擊者透過解析小型文件時觸發過大的動態記憶體分配。這兩處漏洞的 CVSS 評分為 7.5 (HIGH)，攻擊向量為網路 (AV:N)，且無需本地權限 (PR:N)。攻擊者可利用這些漏洞執行服務拒絕 (DoS) 攻擊，或在特定環境下導致記憶體損壞。建議用戶立即更新至 2.1 SP6 HF1 或升級至 2.2 版本以修復。建議用戶應留意廠商提供的修復措施，並避免使用受影響的產品版本。",
    tags: ["Hitachi Energy", "ITT600 Explorer", "CVE-2024-8176", "CVE-2025-59375", "libexpat", "IEC61850", "DoS"],
    title_en: "Hitachi Energy ITT600 Explorer Product Faces Two Vulnerabilities, Potentially Leading to Denial of Service Attack",
    summary_en: "This announcement points out that Hitachi Energy's ITT600 Explorer product has two vulnerabilities: CVE-2024-8176 and CVE-2025-59375. Both vulnerabilities are related to the libexpat library used by the product and are only affected when using the IEC61850 server simulation function. CVE-2024-8176 is a Stack Overflow, while CVE-2025-59375 allows an attacker to trigger excessive dynamic memory allocation by parsing small files. Both vulnerabilities have a CVSS score of 7.5 (HIGH), an Attack Vector of Network (AV:N), and require no local privileges (PR:N). Attackers can exploit these vulnerabilities to execute Denial of Service (DoS) attacks or cause memory corruption in specific environments. Users are advised to immediately update to 2.1 SP6 HF1 or upgrade to version 2.2 for remediation. Users should pay attention to the vendor's provided fixes and avoid using the affected product versions.",
    tags_en: ["Hitachi Energy", "ITT600 Explorer", "CVE-2024-8176", "CVE-2025-59375", "libexpat", "IEC61850", "DoS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-155-02", lang: "EN" }
    ]
  },
  {
    id: "20260604-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI驅動漏洞激增時代：Red Hat分析Copy Fail等漏洞，強調人工技術評估的重要性",
    summary: "隨著AI工具（如Anthropic的Mythos）的應用，安全漏洞的發現速度和數量呈指數級增長，已成為新的挑戰。文章以Xint.io發布的Copy Fail漏洞為例，指出這是一個允許未授權本地使用者在裸機、VM或容器中取得root權限的本地權限提升（LPE）漏洞。雖然Red Hat及其他Linux發行版在公開漏洞的同一天得知了攻擊，但其迅速行動更新了漏洞評級並發布了安全公告。此外，AI工具的崛起使安全漏洞的數量激增，Red Hat Product Security團隊的處理量從2025年的7,722個增加到2026年第一季度已達2,826個，預計年總量超過17,000個。文章強調，面對這種快速且持續的漏洞披露洪流，僅依賴CVSS分數或自動化工具是不夠的，組織必須結合人工專業判斷來管理安全態勢，特別是處理與舊應用程式相容性、複雜的部署環境等實務問題。",
    tags: ["Red Hat", "Copy Fail", "LPE", "Linux kernel", "AI安全", "CVE"],
    title_en: "In the Era of AI-Driven Vulnerability Surge: Red Hat Analyzes Copy Fail and Other Vulnerabilities, Emphasizing the Importance of Manual Technical Assessment",
    summary_en: "With the application of AI tools (such as Anthropic's Mythos), the speed and number of security vulnerability discoveries are growing exponentially, posing a new challenge. Using the Copy Fail vulnerability published by Xint.io as an example, the article points out that this is a local privilege escalation (LPE) vulnerability that allows unauthorized local users to gain root privileges on bare metal, VMs, or containers. Although Red Hat and other Linux distributions learned of the vulnerability on the same day it was disclosed, they acted quickly to update the vulnerability rating and issue security advisories. Furthermore, the rise of AI tools has caused a surge in the number of security vulnerabilities; the workload handled by the Red Hat Product Security team increased from 7,722 in 2025 to 2,826 in Q1 2026, with an estimated annual total exceeding 17,000. The article emphasizes that facing this rapid and continuous flood of vulnerability disclosures, relying solely on CVSS scores or automated tools is insufficient; organizations must combine manual professional judgment to manage their security posture, especially when dealing with practical issues such as compatibility with legacy applications and complex deployment environments.",
    tags_en: ["Red Hat", "Copy Fail", "LPE", "Linux kernel", "AI security", "CVE"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/beyond-automation-why-surge-ai-driven-security-vulnerabilities-demands-human-technical-advocacy", lang: "EN" }
    ]
  },
  {
    id: "20260604-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu發布多個Linux核心安全更新：修復多項提升權限與資訊洩露的CVE漏洞",
    summary: "本更新修復了多個Linux核心的嚴重安全漏洞，涵蓋多個子系統，包括加密API、網路堆疊、AppArmor通知處理等。其中，多個漏洞（如CVE-2026-43284, CVE-2026-43503, CVE-2026-45998, CVE-2026-46000）允許本地攻擊者利用Dirty Frag或Fragnesia邏輯缺陷，達到提升權限或逃逸容器的目的。此外，針對AppArmor通知處理，多個CVE（如CVE-2026-47326至CVE-2026-47337）揭露了記憶體洩漏、空指針解引用、越界讀寫等問題，可能導致資源耗盡或核心記憶體損壞。另有CVE-2026-46333指出ptrace子系統的競態條件，可能導致敏感資訊洩露。建議所有使用Ubuntu Linux核心的用戶應立即更新系統，以修補這些嚴重的核心層級漏洞，防止本地攻擊者利用這些缺陷危害系統穩定性與安全性。",
    tags: ["Linux核心", "Ubuntu", "CVE-2026-43284", "AppArmor", "提升權限", "Dirty Frag"],
    title_en: "Ubuntu Releases Multiple Linux Kernel Security Updates: Fixing Multiple CVE Vulnerabilities Related to Privilege Escalation and Information Leakage",
    summary_en: "This update addresses multiple critical Linux kernel vulnerabilities across various subsystems, including the crypto API, network stack, and AppArmor notification handling. Several vulnerabilities (such as CVE-2026-43284, CVE-2026-43503, CVE-2026-45998, CVE-2026-46000) allow local attackers to exploit Dirty Frag or Fragnesia logic flaws, potentially leading to privilege escalation or container escape. Furthermore, multiple CVEs targeting AppArmor notification handling (such as CVE-2026-47326 through CVE-2026-47337) reveal issues like memory leaks, null pointer dereferences, and out-of-bounds read/writes, which could result in resource exhaustion or kernel memory corruption. Additionally, CVE-2026-46333 points to a race condition in the ptrace subsystem, which may lead to sensitive information leakage. All users running Ubuntu Linux kernels are advised to update their systems immediately to patch these severe kernel-level vulnerabilities and prevent local attackers from compromising system stability and security.",
    tags_en: ["Linux Kernel", "Ubuntu", "CVE-2026-43284", "AppArmor", "Privilege Escalation", "Dirty Frag"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8393-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu 發布 USN-8361-2：修補 Linux 核心 FIPS 模組的網路套接字漏洞",
    summary: "Ubuntu 發布了 USN-8361-2 安全更新，修補了 Linux 核心（特別是包含 FIPS 功能的版本）中的一個安全漏洞。此漏洞存在於「Packet sockets」子系統，理論上允許攻擊者在特定條件下利用該缺陷來危害系統安全。該更新旨在修復核心層級的缺陷，以降低系統的整體安全風險。用戶應立即執行標準系統更新，並記得重新啟動電腦，以確保所有修補程式能夠完全生效。由於原文未提供具體 CVE 編號、CVSS 分數或受影響範圍，建議所有使用 Linux 核心的系統管理員應將此更新視為高優先級的修補作業，以維持系統的穩定性和安全性。",
    tags: ["Ubuntu", "Linux kernel", "FIPS", "Packet sockets", "USN-8361-2", "核心漏洞"],
    title_en: "Ubuntu Releases USN-8361-2: Patching Network Socket Vulnerability in Linux Kernel FIPS Module",
    summary_en: "Ubuntu has released the USN-8361-2 security update, which patches a vulnerability in the Linux kernel (specifically versions containing FIPS functionality). This vulnerability resides in the \"Packet sockets\" subsystem and theoretically allows an attacker to exploit the flaw under certain conditions to compromise system security. The update aims to fix a core-level defect to reduce overall system security risk. Users should immediately perform a standard system update and remember to reboot the computer to ensure all patches take full effect. Since the original text did not provide specific CVE IDs, CVSS scores, or affected scope, system administrators using the Linux kernel are advised to treat this update as a high-priority patch to maintain system stability and security.",
    tags_en: ["Ubuntu", "Linux kernel", "FIPS", "Packet sockets", "USN-8361-2", "Kernel vulnerability"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8361-2", lang: "EN" }
    ]
  },
  {
    id: "20260604-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu 提醒：Linux 核心多個漏洞曝光，包含 Copy Fail 與 Dirty Frag，本地攻擊者可提升權限或逃逸容器",
    summary: "Ubuntu 發布安全更新，修補多個 Linux 核心中的安全漏洞。其中，一個名為 Copy Fail 的缺陷存在於 `algif_aead` 模組，導致其無法正確處理原地加密操作，本地攻擊者可利用此漏洞提升權限或逃逸容器，相關 CVE 為 CVE-2026-31431。另一個名為 Dirty Frag 的邏輯缺陷，存在於 XFRM ESP-in-TCP 和 RxRPC 網路子系統，當處理分頁片段時，核心無法正確處理共享頁面片段，同樣允許本地攻擊者提升權限或逃逸容器，相關 CVE 為 CVE-2026-43284 與 CVE-2026-43500。此外，文章還列出了多個其他子系統的漏洞，包括加密 API、封包 Socket、RDS 和 TLS 協議等，修補了 CVE-2026-31504、CVE-2026-31533、CVE-2026-43033 等多個 CVE。建議所有使用 Linux 核心的系統用戶，應立即更新到最新的 Ubuntu 安全版本，以修補這些嚴重的本地權限提升漏洞。",
    tags: ["Linux 核心", "Ubuntu", "CVE-2026-31431", "Dirty Frag", "Copy Fail", "本地權限提升"],
    title_en: "Ubuntu Alert: Multiple Linux Kernel Vulnerabilities Exposed, Including Copy Fail and Dirty Frag, Allowing Local Privilege Escalation or Container Escape",
    summary_en: "Ubuntu has released a security update to patch multiple vulnerabilities in the Linux kernel. Among these, a flaw named Copy Fail exists in the `algif_aead` module, which prevents it from correctly handling in-place encryption operations. Local attackers can exploit this vulnerability to elevate privileges or escape containers, related to CVE-2026-31431. Another logical flaw, named Dirty Frag, exists in the XFRM ESP-in-TCP and RxRPC network subsystems. When processing fragmented packets, the kernel fails to correctly handle shared page fragments, similarly allowing local attackers to elevate privileges or escape containers, related to CVE-2026-43284 and CVE-2026-43500. Furthermore, the article lists multiple other subsystem vulnerabilities, including those in the crypto API, packet socket, RDS, and TLS protocols, patching multiple CVEs such as CVE-2026-31504, CVE-2026-31533, and CVE-2026-43033. All system users utilizing the Linux kernel are advised to immediately update to the latest Ubuntu security version to patch these critical local privilege escalation vulnerabilities.",
    tags_en: ["Linux Kernel", "Ubuntu", "CVE-2026-31431", "Dirty Frag", "Copy Fail", "Local Privilege Escalation"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8392-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Linux 核心多項漏洞曝光：從加密操作到Dirty Frag，本地攻擊者可提升權限或逃逸容器",
    summary: "本更新揭露了 Linux 核心多個安全漏洞，攻擊者可利用這些缺陷提升系統權限或逃逸容器。其中，`algif_aead` 模組存在「Copy Fail」缺陷，未正確處理原地加密操作，導致權限提升風險（CVE-2026-31431）。另一個嚴重漏洞是「Dirty Frag」，發生在處理套接字緩衝區的共享頁面片段時，影響 XFRM ESP-in-TCP 和 RxRPC 網路子系統，本地攻擊者可利用此缺陷提升權限或逃逸容器（CVE-2026-43284, CVE-2026-43500）。此外，核心還修復了加密 API、網路驅動、NVME 驅動、IPv4 網路、封包套接字、RDS 和 TLS 協議等子系統的數個漏洞（包括 CVE-2024-50304 等）。建議所有使用者應立即更新 Linux 核心版本，以修補這些潛在的系統層級安全風險。",
    tags: ["Linux 核心", "CVE-2026-31431", "Dirty Frag", "權限提升", "核心安全", "Linux"],
    title_en: "Multiple Linux Kernel Vulnerabilities Exposed: Local Attackers Can Elevate Privileges or Escape Containers from Crypto Operations to Dirty Frag",
    summary_en: "This update reveals multiple security vulnerabilities in the Linux kernel, which attackers can exploit to elevate system privileges or escape containers. Among them, the `algif_aead` module has a \"Copy Fail\" defect, which fails to correctly handle in-place cryptographic operations, leading to privilege escalation risks (CVE-2026-31431). Another severe vulnerability is \"Dirty Frag,\" which occurs when handling shared page fragments in socket buffers. It affects the XFRM ESP-in-TCP and RxRPC network subsystems, allowing local attackers to exploit this defect to elevate privileges or escape containers (CVE-2026-43284, CVE-2026-43500). Furthermore, the kernel also fixed several vulnerabilities in subsystems such as the crypto API, network drivers, NVME drivers, IPv4 networking, packet sockets, RDS, and TLS protocols (including CVE-2024-50304). All users are advised to immediately update their Linux kernel version to patch these potential system-level security risks.",
    tags_en: ["Linux Kernel", "CVE-2026-31431", "Dirty Frag", "Privilege Escalation", "Kernel Security", "Linux"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8391-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Linux 核心發現 Dirty Frag 邏輯缺陷：本地攻擊者可利用提升權限或逃逸容器",
    summary: "本公告指出 Linux 核心在處理 Socket Buffer 操作時，未能正確處理共享頁面片段（Shared Page Fragments），此缺陷被稱為 Dirty Frag。該邏輯缺陷存在於 XFRM ESP-in-TCP 子系統和 RxRPC 網路子系統處理分頁片段時。攻擊者若為本地使用者，可利用此漏洞執行權限提升（Privilege Escalation），甚至可能逃逸容器（Container Escape）。Ubuntu 建議使用者透過標準系統更新，將受影響的套件升級至最新版本以修復此問題。修補後，系統必須重新啟動才能使所有變更生效。建議所有使用 Linux 核心的系統，特別是雲端環境（如 Azure, GCP, KVM, Oracle）的用戶，應立即進行系統更新。",
    tags: ["Linux kernel", "Dirty Frag", "權限提升", "容器逃逸", "Ubuntu", "XFRM ESP-in-TCP"],
    title_en: "Linux Kernel Discovers Dirty Frag Logic Flaw: Local Attacker Can Exploit for Privilege Escalation or Container Escape",
    summary_en: "This announcement points out that the Linux kernel fails to correctly handle Shared Page Fragments when processing Socket Buffer operations, a flaw known as Dirty Frag. This logic defect exists in the XFRM ESP-in-TCP subsystem and the RxRPC network subsystem when handling fragmented pages. A local attacker can exploit this vulnerability to achieve Privilege Escalation, and potentially even Container Escape. Ubuntu advises users to upgrade affected packages to the latest version via standard system updates to fix this issue. After patching, the system must be rebooted for all changes to take effect. All systems using the Linux kernel, especially users in cloud environments (such as Azure, GCP, KVM, Oracle), are advised to update their systems immediately.",
    tags_en: ["Linux kernel", "Dirty Frag", "Privilege Escalation", "Container Escape", "Ubuntu", "XFRM ESP-in-TCP"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8390-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu修補Linux核心Dirty Frag漏洞：本地攻擊者可提升權限或逃逸容器 (CVE-2026-43284, CVE-2026-43500)",
    summary: "Ubuntu發布安全更新，修補了Linux核心處理共享頁面片段（Dirty Frag）時的邏輯缺陷。此漏洞存在於XFRM ESP-in-TCP子系統和RxRPC網路子系統，當處理分頁片段時，本地攻擊者可利用此缺陷提升系統權限，甚至可能逃逸容器環境。本次更新修補了多個Linux核心安全問題，建議用戶執行標準系統更新並重新啟動電腦。由於核心更新涉及不可避免的ABI變更，用戶必須重新編譯和重新安裝所有第三方核心模組，以確保系統穩定性。",
    tags: ["Ubuntu", "Linux kernel", "Dirty Frag", "CVE-2026-43284", "CVE-2026-43500", "權限提升"],
    title_en: "Ubuntu patches Linux kernel Dirty Frag vulnerability: Local attacker can escalate privileges or escape container",
    summary_en: "Ubuntu has released a security update to patch a logic flaw in how the Linux kernel handles shared page fragments (Dirty Frag). This vulnerability exists in the XFRM ESP-in-TCP subsystem and the RxRPC network subsystem. When processing fragmented packets, a local attacker can exploit this flaw to escalate system privileges or potentially escape the container environment. This update patches multiple Linux kernel security issues, and users are advised to perform a standard system update and reboot their computer. Because kernel updates involve unavoidable ABI changes, users must recompile and reinstall all third-party kernel modules to ensure system stability.",
    tags_en: ["Ubuntu", "Linux kernel", "Dirty Frag", "CVE-2026-43284", "CVE-2026-43500", "Privilege Escalation"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8389-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu發布核心更新：修補多個Linux核心邏輯漏洞，包含Dirty Frag、Fragnesia及提升權限風險",
    summary: "Ubuntu發布核心安全更新，修補多個Linux核心中的邏輯漏洞。其中，一個名為Dirty Frag的漏洞，存在於處理Socket緩衝區共享頁面片段時，可能導致本地攻擊者提升權限或逃逸容器。另一個名為Fragnesia的漏洞，存在於XFRM ESP-in-TCP子系統處理頁面片段時，同樣可供本地攻擊者提升權限或逃逸容器。此外，還修補了ptrace子系統的競態條件漏洞，可能讓未授權的本地攻擊者洩露敏感資訊，以及RDS協定等其他子系統的缺陷。這些漏洞皆屬於核心邏輯缺陷，若未更新，可能使系統面臨權限提升或資訊洩露的風險，建議所有用戶立即更新至最新版本以確保系統安全。",
    tags: ["Linux kernel", "Dirty Frag", "Fragnesia", "CVE-2026-43284", "CVE-2026-43500", "權限提升", "Ubuntu"],
    title_en: "Ubuntu Releases Kernel Update: Patches Multiple Linux Kernel Logic Vulnerabilities, Including Dirty Frag, Fragnesia, and Privilege Escalation Risks",
    summary_en: "Ubuntu has released a kernel security update to patch multiple logic vulnerabilities in the Linux kernel. One vulnerability, named Dirty Frag, exists when handling shared page fragments in socket buffers, potentially allowing a local attacker to escalate privileges or escape a container. Another vulnerability, named Fragnesia, exists in the XFRM ESP-in-TCP subsystem when processing page fragments, which also allows a local attacker to escalate privileges or escape a container. Furthermore, the update patches a race condition vulnerability in the ptrace subsystem that could allow unauthorized local attackers to leak sensitive information, as well as defects in other subsystems like the RDS protocol. Since these vulnerabilities are all core logic flaws, failure to update could expose the system to privilege escalation or information leakage risks. All users are advised to update immediately to the latest version to ensure system security.",
    tags_en: ["Linux kernel", "Dirty Frag", "Fragnesia", "CVE-2026-43284", "CVE-2026-43500", "Privilege Escalation", "Ubuntu"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8388-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Nano 編輯器存在兩項漏洞：權限配置錯誤與狀態列處理缺陷，可能導致資訊洩露或服務拒絕",
    summary: "GNU nano 編輯器在不同版本中存在兩項安全漏洞。首先，CVE-2026-6842指出，當環境的 umask 設定過於寬鬆時，Nano 在建立 ~/.local 目錄時會產生錯誤權限，本地攻擊者可能利用此缺陷注入惡意啟動器檔案，進而導致資訊洩露或其他未預期的行為。其次，CVE-2026-6843指出，Nano 在更新狀態列時處理目錄名稱的方式有誤，本地攻擊者可能利用此問題導致 Nano 崩潰，造成服務拒絕（Denial of Service）。這些漏洞主要影響 Ubuntu 22.04 LTS、Ubuntu 24.04 LTS、Ubuntu 25.10 和 Ubuntu 26.04 LTS 等系統。修復建議是執行標準的系統更新，將相關套件升級至修補版本，以降低系統的安全性風險。",
    tags: ["Nano", "CVE-2026-6842", "CVE-2026-6843", "GNU nano editor", "資訊洩露", "服務拒絕"],
    title_en: "Two Vulnerabilities Found in Nano Editor: Permission Misconfiguration and Status Bar Handling Flaw May Lead to Information Leakage or Denial of Service",
    summary_en: "The GNU nano editor contains two security vulnerabilities in different versions. First, CVE-2026-6842 points out that when the environment's umask is set too loosely, Nano creates incorrect permissions when establishing the ~/.local directory. A local attacker may exploit this flaw to inject malicious launcher files, potentially leading to information leakage or other unexpected behavior. Second, CVE-2026-6843 indicates that Nano incorrectly handles directory names when updating the status bar. A local attacker may exploit this issue to cause Nano to crash, resulting in a Denial of Service (DoS). These vulnerabilities primarily affect systems such as Ubuntu 22.04 LTS, Ubuntu 24.04 LTS, Ubuntu 25.10, and Ubuntu 26.04 LTS. The recommended fix is to perform a standard system update, upgrading the relevant package to the patched version, thereby mitigating system security risks.",
    tags_en: ["Nano", "CVE-2026-6842", "CVE-2026-6843", "GNU nano editor", "Information Leakage", "Denial of Service"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8386-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Robocode 發現多個安全漏洞：包含路徑驗證、臨時檔案處理及整數溢位風險",
    summary: "Ubuntu 針對 Robocode 應用程式發布安全公告，修補了多個安全漏洞。這些漏洞包括路徑驗證不當、臨時檔案處理不安全，以及緩衝區類別的整數溢位風險。其中，CVE-2019-10648 允許攻擊者透過外部服務互動，可能導致資訊洩露。另有 CVE-2025-14306 讓攻擊者可刪除任意檔案，CVE-2025-14307 則因臨時檔案處理不當，可能導致任意程式碼執行。此外，CVE-2025-14308 透過數據長度驗證不足，可能觸發整數溢位，進而導致任意程式碼執行。這些漏洞主要影響 Ubuntu 16.04 LTS 和 Ubuntu 18.04 LTS 版本，建議使用者應立即更新系統以修補這些安全風險。",
    tags: ["Robocode", "Ubuntu", "CVE-2019-10648", "CVE-2025-14306", "CVE-2025-14307", "CVE-2025-14308"],
    title_en: "Robocode Discovers Multiple Security Vulnerabilities: Including Path Validation, Temporary File Handling, and Integer Overflow Risks",
    summary_en: "Ubuntu has issued a security advisory for the Robocode application, patching multiple vulnerabilities. These flaws include improper path validation, insecure temporary file handling, and buffer-related integer overflow risks. Specifically, CVE-2019-10648 allows an attacker to potentially cause information leakage through external service interaction. Additionally, CVE-2025-14306 allows an attacker to delete arbitrary files, while CVE-2025-14307 could lead to arbitrary code execution due to improper temporary file handling. Furthermore, CVE-2025-14308 may trigger an integer overflow due to insufficient data length validation, potentially leading to arbitrary code execution. These vulnerabilities primarily affect Ubuntu 16.04 LTS and Ubuntu 18.04 LTS versions, and users are advised to update their systems immediately to mitigate these security risks.",
    tags_en: ["Robocode", "Ubuntu", "CVE-2019-10648", "CVE-2025-14306", "CVE-2025-14307", "CVE-2025-14308"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8385-1", lang: "EN" }
    ]
  },
  {
    id: "20260604-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "McAfee揭露Minecraft惡意軟體WeedHack：低門檻攻擊模式，竊取帳密及進行網路騷擾",
    summary: "資安公司McAfee監測到一款名為WeedHack的惡意軟體，主要針對Minecraft玩家。該惡意軟體採用「惡意軟體即服務」（Malware-as-a-Service）的商業模式經營。McAfee指出，攻擊的門檻極低，任何人只要擁有Discord帳號和網路連線即可免費使用，主要功能是竊取玩家的帳密資料並挾持帳號。付費版本則具備更進階的功能，包括即時存取受害者電腦的螢幕畫面、視訊鏡頭及檔案。攻擊者透過Telegram等平台販售和分享，不僅用於經濟利益，更常被年輕族群用於騷擾和霸凌同儕。McAfee提醒使用者，若遇到聲稱入侵電腦、掌握網路攝影機畫面或IP位址的威脅，應立即告知家長、監護人或學校輔導人員，並聯絡當地執法機關，切勿與攻擊者互動或聽從指示。",
    tags: ["McAfee", "WeedHack", "Minecraft", "惡意軟體", "Malware-as-a-Service", "網路騷擾"],
    title_en: "McAfee Uncovers Minecraft Malware WeedHack: Low-Barrier Attack Model Steals Credentials and Facilitates Cyberbullying",
    summary_en: "Cybersecurity company McAfee has detected malware named WeedHack, which primarily targets Minecraft players. This malware operates under a 'Malware-as-a-Service' business model. McAfee points out that the barrier to entry is extremely low, as anyone with a Discord account and internet connection can use it for free. Its main functions are stealing players' credentials and hijacking accounts. Paid versions offer more advanced features, including real-time access to the victim's screen, video camera, and files. Attackers sell and share this malware through platforms like Telegram, not only for financial gain but also frequently used by young people for harassing and bullying peers. McAfee advises users that if they encounter threats claiming to have infiltrated their computer, accessed their webcam feed, or obtained their IP address, they should immediately inform their parents, guardians, or school counselors, and contact local law enforcement. Users must not interact with the attackers or follow any instructions.",
    tags_en: ["McAfee", "WeedHack", "Minecraft", "Malware", "Malware-as-a-Service", "Cyberbullying"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176370", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "HTTP/2 Bomb攻擊手法曝光：研究人員串聯HPACK與Slowloris，影響主流網頁伺服器",
    summary: "研究人員於6月3日揭露名為HTTP/2 Bomb的遠端阻斷服務（DoS）攻擊手法。此攻擊手法的成形，源於使用OpenAI程式開發代理Codex，將兩種已存在長達十年的已知手法串聯而成：一是HTTP/2標頭壓縮機制HPACK的壓縮炸彈，二是類似Slowloris的連線占用手法。該攻擊手法影響範圍廣泛，包括Nginx、Apache httpd、Microsoft IIS、Envoy與Cloudflare Pingora等主流網頁伺服器與代理伺服器。實務上，攻擊者可利用此手法對目標伺服器發動DoS攻擊，導致服務中斷。建議網頁伺服器和代理服務提供者應關注相關研究報告，並留意是否有針對HPACK機制優化的修補或配置調整，以強化對異常連線和標頭處理的防禦能力。原文未提供具體修補建議或CVSS分數。",
    tags: ["HTTP/2 Bomb", "DoS攻擊", "HPACK", "Nginx", "Apache httpd", "Slowloris"],
    title_en: "HTTP/2 Bomb Attack Technique Exposed: Researchers Combine HPACK and Slowloris to Affect Mainstream Web Servers",
    summary_en: "On June 3rd, researchers disclosed a Denial-of-Service (DoS) attack technique named HTTP/2 Bomb. This attack technique was formed by using the OpenAI programming agent Codex to combine two existing techniques, both over ten years old: first, a compression bomb targeting the HTTP/2 header compression mechanism, HPACK; and second, a connection-occupancy method similar to Slowloris. This attack technique has a wide impact, affecting mainstream web servers and proxy servers such as Nginx, Apache httpd, Microsoft IIS, Envoy, and Cloudflare Pingora. In practice, attackers can utilize this technique to launch DoS attacks against target servers, causing service disruption. It is recommended that web server and proxy service providers pay attention to relevant research reports and monitor for patches or configuration adjustments optimized for the HPACK mechanism, in order to strengthen defense capabilities against abnormal connections and header processing. The original text did not provide specific patch recommendations or CVSS scores.",
    tags_en: ["HTTP/2 Bomb", "DoS attack", "HPACK", "Nginx", "Apache httpd", "Slowloris"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176372", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-037",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "McAfee揭露「惡意軟體租用服務」WeedHack：專攻Minecraft玩家，竊取帳密與加密貨幣資產",
    summary: "資安公司McAfee揭露一個名為WeedHack的惡意軟體租用服務（Malware-as-a-Service）。該平臺自今年一月開始運作，主要目標鎖定Minecraft遊戲的玩家。攻擊者透過偽造的YouTube影片或利用搜尋引擎最佳化中毒（SEO Poisoning）的網頁，引誘玩家下載惡意程式。一旦受害者電腦被感染，攻擊者可竊取帳號密碼資料，並挾持受害者的Discord或Minecraft帳號，進而洗劫加密貨幣資產。更甚者，攻擊者甚至能即時存取受害者的視訊鏡頭、螢幕畫面，以及電腦內的檔案。受害規模持續擴大，目前已確認有大量電腦受害，且感染數量每日仍在增加。建議玩家提高警覺，避免點擊來源可疑的連結或下載未經證實的模組。",
    tags: ["McAfee", "WeedHack", "Minecraft", "惡意軟體", "Malware-as-a-Service", "SEO Poisoning"],
    title_en: "McAfee Exposes 'Malware-as-a-Service' WeedHack: Targeting Minecraft Players to Steal Accounts and Crypto Assets",
    summary_en: "Cybersecurity firm McAfee has exposed a Malware-as-a-Service platform called WeedHack. Operating since January of this year, the platform primarily targets Minecraft players. Attackers lure players into downloading malicious programs through fake YouTube videos or websites affected by Search Engine Optimization (SEO) Poisoning. Once a victim's computer is infected, attackers can steal account credentials, hijack the victim's Discord or Minecraft accounts, and subsequently loot cryptocurrency assets. Furthermore, attackers can even gain real-time access to the victim's webcam, screen feed, and local files. The scale of the damage continues to grow, with a large number of computers already confirmed to be compromised, and the infection rate increasing daily. Players are advised to raise their awareness and avoid clicking on suspicious links or downloading unverified mods.",
    tags_en: ["McAfee", "WeedHack", "Minecraft", "Malware", "Malware-as-a-Service", "SEO Poisoning"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176362", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-038",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "駭客濫用Steam社群留言區植入惡意軟體，透過WordPress網站進行C2通訊與後門建立",
    summary: "資安研究人員發現一種不尋常的惡意活動，駭客利用遊戲平臺Steam的社群個人資料留言區作為C2通訊的隱藏點。攻擊者在WordPress網站上植入惡意軟體，其機制包含兩部分：首先，它能從Steam個人資料留言區擷取經編碼的URL，並將外部JavaScript指令碼注入WordPress網頁；其次，它能利用網頁存取POST請求中的身分驗證Cookie，建立後門。透過此後門，攻擊者可以遠端修改網頁程式碼，甚至透過外掛程式與佈景主題竄改PHP檔案。為了規避偵測，駭客甚至利用肉眼不可見的Unicode字元來隱藏留言區的酬載，使得傳統文字偵測方法失效。GoDaddy資安團隊已鎖定相關活動，迄今約有1,980個WordPress網站受影響。",
    tags: ["Steam", "WordPress", "C2通訊", "惡意軟體", "後門", "Unicode字元", "GoDaddy"],
    title_en: "Hackers exploit Steam community message boards to implant malware, establishing C2 communication and backdoors via WordPress websites",
    summary_en: "Cybersecurity researchers discovered an unusual malicious activity where hackers utilized the community personal message boards of the gaming platform Steam as a hidden point for C2 communication. The attackers implanted malware on WordPress websites, which operates through two mechanisms: first, it extracts encoded URLs from the Steam personal message boards and injects external JavaScript scripts into the WordPress webpage; second, it uses the authentication cookies from POST requests within the webpage to establish a backdoor. Through this backdoor, attackers can remotely modify webpage code, and even tamper with PHP files via plugins and themes. To evade detection, the hackers even utilized invisible Unicode characters to hide the payload in the message boards, rendering traditional text detection methods ineffective. The GoDaddy security team has contained the related activity, affecting approximately 1,980 WordPress websites to date.",
    tags_en: ["Steam", "WordPress", "C2 Communication", "Malware", "Backdoor", "Unicode Characters", "GoDaddy"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176357", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-039",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "研究人員揭露 Anthropic Claude Code GitHub Action 漏洞：透過開源議題可劫持受影響儲存庫",
    summary: "資安研究人員發現 Anthropic 的 Claude Code GitHub Action 存在重大安全漏洞。該 Action 預設擁有對儲存庫（Repository）的廣泛讀寫權限，可用於分類議題、審核拉取請求等。漏洞點在於其觸發機制過於寬鬆，允許任何名稱結尾為 [bot] 的使用者觸發，即使該使用者只是在擁有公開儲存庫的專案中註冊了 GitHub App。攻擊者可利用此點，結合間接提示注入（Indirect Prompt Injection）技術，在議題內容中植入指令，誘使 Claude 執行惡意命令。最終目標是竊取 GitHub Actions 用於請求 OIDC 令牌的憑證，從而獲得對目標儲存庫的寫入權限，甚至可將惡意程式碼注入到 Action 本身，造成供應鏈污染。Anthropic 已修補此漏洞，並將修補內容納入 claude-code-action v1.0.94 版本。建議用戶應立即更新 Action，並嚴格審核所有允許非寫入權限使用者或 Bot 觸發的工作流程，確保不將任何秘密資訊提供給不受信任的輸入。",
    tags: ["Anthropic", "Claude Code", "GitHub Actions", "提示注入", "供應鏈安全", "OIDC 令牌"],
    title_en: "Researchers Expose Anthropic Claude Code GitHub Action Vulnerability: Compromising Repositories via Open Issues",
    summary_en: "Cybersecurity researchers discovered a critical vulnerability in Anthropic's Claude Code GitHub Action. This Action is designed with broad read and write permissions for repositories, used for tasks such as issue classification and pull request review. The vulnerability lies in its overly permissive trigger mechanism, allowing any user whose name ends with [bot] to trigger it, even if that user has only registered a GitHub App in a public repository. Attackers can exploit this by combining it with Indirect Prompt Injection techniques, embedding malicious instructions within issue content to trick Claude into executing harmful commands. The ultimate goal is to steal the credentials used by GitHub Actions to request OIDC tokens, thereby gaining write access to the target repository, and potentially injecting malicious code into the Action itself, causing supply chain contamination. Anthropic has patched this vulnerability and included the fix in version claude-code-action v1.0.94. Users are advised to immediately update the Action and strictly review all workflows that allow non-write permission users or bots to trigger, ensuring that no secret information is provided to untrusted input.",
    tags_en: ["Anthropic", "Claude Code", "GitHub Actions", "Prompt Injection", "Supply Chain Security", "OIDC Token"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/claude-code-github-action-flaw-let-one.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-040",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "駭客利用假冒開源工具網站，透過流量分發系統（TDS）傳遞 Remus Stealer 等惡意程式",
    summary: "資安研究人員發現一場大規模的網路活動，駭客透過建立假冒知名的開源或免費軟體專案網站，誘騙使用者進入流量分發系統（TDS）。這些假網站設計精良，甚至會引用真實的資源連結，以達到欺騙目的。攻擊鏈利用 CloudFront 託管的 JavaScript 層，將使用者點擊「下載」按鈕的行為，轉導至具有嚴格門控機制（如首次訪問狀態檢查、強制點擊確認、反機器人邏輯等）的 TDS。攻擊目標包括尋找 Ghidra、dnSpy 和 SpiderFoot 等安全工具的使用者。一旦使用者點擊下載，將啟動 TDS 重定向鏈，最終部署惡意程式。主要的惡意載荷包括 Remus Stealer（一種多瀏覽器資訊竊取器）、AnimateClipper（加密貨幣錢包劫持器）和 SessionGate（一種多階段混淆載入器）。這些惡意程式的設計極為複雜，具有多層次混淆和反分析機制，旨在抵抗安全分析。攻擊的最終目的除了流量獲取和營利，更具備精準地將流量導向惡意載荷的傳遞鏈。",
    tags: ["開源專案", "TDS", "Remus Stealer", "SessionGate", "資訊竊取", "假網站", "供應鏈攻擊"],
    title_en: "Hackers Exploit Fake Open-Source Tool Websites to Deliver Malware via Traffic Distribution System (TDS)",
    summary_en: "Security researchers discovered a large-scale cyber campaign where hackers established fake websites mimicking popular open-source or free software projects, luring users into a Traffic Distribution System (TDS). These fake sites are highly sophisticated, even referencing genuine resource links to deceive users. The attack chain exploits the JavaScript layer hosted on CloudFront, redirecting users who click a 'Download' button to a TDS that employs strict gating mechanisms (such as first-time visit status checks, forced click confirmations, and anti-bot logic). The targets include users of security tools like Ghidra, dnSpy, and SpiderFoot. Once a user clicks to download, a TDS redirection chain is initiated, ultimately deploying malicious payloads. The primary malicious payloads include Remus Stealer (a multi-browser information stealer), AnimateClipper (a cryptocurrency wallet hijacker), and SessionGate (a multi-stage obfuscator). These malicious programs are designed to be extremely complex, featuring multi-layered obfuscation and anti-analysis mechanisms to resist security analysis. The ultimate goal of the attack, beyond traffic acquisition and profit, is the precise channeling of traffic into the malicious payload delivery chain.",
    tags_en: ["Open-Source Project", "TDS", "Remus Stealer", "SessionGate", "Information Stealing", "Fake Website", "Supply Chain Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/fake-sites-mimicking-open-source-tools.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-041",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Rust編寫的 IronWorm 惡意程式攻擊 NPM 供應鏈：竊取開發者憑證並擴散",
    summary: "JFrog 發現了一場名為 IronWorm 的惡意軟體活動，該活動主要針對開源軟體生態系統的開發者，透過惡意 NPM 套件更新和受污染的發布工作流程進行攻擊。IronWorm 使用 Rust 語言編寫，能夠竊取廣泛的開發者秘密，包括 API 金鑰、雲端憑證、SSH 金鑰和 NPM 發布令牌。該惡意程式與 Shai-Hulud 蠕蟲有相似之處，但更進階，它利用了 Linux 核心的 eBPF 根目錄（rootkit）來隱藏惡意行為，並使用獨特的加密金鑰加密程式碼，使其難以分析。研究人員指出，該威脅已影響至少 36 個 NPM 套件，總下載量超過 32,000 次。攻擊者甚至在發布惡意套件後，迅速在多個組織的儲存庫中進行了至少 57 次惡意代碼修改，並回溯提交時間以混淆取證。JFrog 警告，開發環境和開發者憑證已成為主要目標，建議開發者必須高度警惕供應鏈風險，並加強對 CI/CD 管線和憑證管理的保護。",
    tags: ["IronWorm", "NPM", "供應鏈攻擊", "Rust", "eBPF", "開源安全", "憑證竊取"],
    title_en: "IronWorm Malware Written in Rust Attacks NPM Supply Chain: Stealing Developer Credentials and Spreading",
    summary_en: "JFrog discovered a malicious activity named IronWorm, which primarily targets developers in the open-source software ecosystem through malicious NPM package updates and contaminated release workflows. IronWorm is written in Rust and is capable of stealing a wide range of developer secrets, including API keys, cloud credentials, SSH keys, and NPM publish tokens. The malware shares similarities with the Shai-Hulud worm but is more advanced; it utilizes the Linux kernel's eBPF rootkit to hide malicious activities and uses unique encryption keys to obfuscate its code, making it difficult to analyze. Researchers point out that the threat has affected at least 36 NPM packages, with total downloads exceeding 32,000. The attackers even performed at least 57 malicious code modifications across multiple organizational repositories shortly after publishing the malicious packages, while rolling back commit times to confuse forensic investigation. JFrog warns that development environments and developer credentials have become primary targets, advising developers to be highly vigilant about supply chain risks and to strengthen protection for CI/CD pipelines and credential management.",
    tags_en: ["IronWorm", "NPM", "Supply Chain Attack", "Rust", "eBPF", "Open Source Security", "Credential Theft"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/rust-written-ironworm-npm-supply-chain", lang: "EN" }
    ]
  },
  {
    id: "20260604-042",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Tenable揭露NPM套件操弄手法：下載量與版本歷史可能被惡意攻擊者人為推升",
    summary: "資安業者Tenable揭露一種名為「download pumping」的NPM套件操弄手法。攻擊者可透過在短時間內大量發布看似正常的套件新版本，觸發套件庫鏡像站、安全掃描器及分析機器人等自動化系統進行大量下載，從而人為抬高惡意套件的下載次數、版本歷史與維護活躍度，使其看起來像是具有高度可信度的專案。研究人員在「ambar-src」惡意套件案例中觀察到，攻擊者曾在兩小時內密集發布大量版本，並累積至高版本數量，推升了下載量。Tenable警告，單純依賴下載量、更新頻率或版本數量等指標已不足以判斷開源套件的真實可信度。企業應建立完整的套件資產清單與環境監控機制，並建議實施版本釘選策略，對新套件設定等待期，同時採用一次性CI/CD執行環境，以降低軟體供應鏈風險。",
    tags: ["NPM", "download pumping", "開源套件", "Tenable", "軟體供應鏈", "SBOM"],
    title_en: "Tenable Uncovers NPM Package Manipulation Technique: Download Volume and Version History May Be Artificially Inflated",
    summary_en: "Cybersecurity firm Tenable has revealed a package manipulation technique for NPM called \"download pumping.\" Attackers can trigger automated systems such as package repository mirrors, security scanners, and analysis bots to perform massive downloads by rapidly publishing numerous seemingly normal new versions of a package. This artificially inflates the malicious package's download count, version history, and maintenance activity, making it appear as a highly trustworthy project. In the \"ambar-src\" malicious package case, researchers observed that the attacker densely published numerous versions within two hours, accumulating a high number of versions and inflating the download count. Tenable warns that relying solely on metrics like download volume, update frequency, or version count is insufficient to determine the true trustworthiness of an open-source package. Companies should establish comprehensive package asset inventories and environment monitoring mechanisms, and are advised to implement version pinning strategies, set waiting periods for new packages, and utilize ephemeral CI/CD execution environments to mitigate software supply chain risks.",
    tags_en: ["NPM", "download pumping", "Open-Source Packages", "Tenable", "Software Supply Chain", "SBOM"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176373", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-043",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Google Workspace強化「網域外檔案警示」功能，擴大支援行動裝置與郵件通知，提升資料外洩防護",
    summary: "Google於5月26日宣布升級Google Workspace的安全功能，強化「網域外檔案警示」（Out-of-Domain file-level warnings）的適用範圍。此功能旨在幫助用戶識別處理的檔案是否來自組織外部，從而降低敏感資料外洩及網路釣魚的風險。原功能於2025年4月推出，最初已在專案名稱、評論作者、標題列等處加上外部圖形或文字註解。本次升級後，警示功能已擴大支援至Android和iOS版的Google雲端硬碟、Google文件、Google試算表及Google簡報等行動裝置App，並延伸至電子郵件的評論通知與檔案共享通知情境。此外，若企業使用者文件開放給外部Google Cloud組織的服務帳戶存取，系統也會自動加上外部標示，提醒用戶注意權限變化。企業用戶應確保啟用此預設啟動的安全功能，以全面提升資料的邊界意識和安全性。",
    tags: ["Google Workspace", "資料外洩防護", "網域外檔案警示", "行動裝置安全", "Google Cloud"],
    title_en: "Google Workspace enhances 'Out-of-Domain File Warnings' with expanded support for mobile devices and email notifications, boosting data leakage protection",
    summary_en: "Google announced an upgrade to Google Workspace security features on May 26th, strengthening the applicability of 'Out-of-Domain file-level warnings.' This feature aims to help users identify if processed files originate from outside the organization, thereby reducing the risk of sensitive data leakage and phishing. The original feature was launched in April 2025, initially adding external graphics or text annotations to areas such as project names, comment authors, and subject lines. With this upgrade, the warning function now supports mobile device apps—including Google Drive, Google Docs, Google Sheets, and Google Slides for both Android and iOS—and extends to comment notifications and file sharing notifications within emails. Furthermore, if corporate users share documents with external Google Cloud organization service accounts, the system will automatically add an external indicator, reminding users to be mindful of permission changes. Enterprise users should ensure this default security feature is enabled to comprehensively enhance data boundary awareness and security.",
    tags_en: ["Google Workspace", "Data Leakage Protection", "Out-of-Domain File Warnings", "Mobile Device Security", "Google Cloud"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176340", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-044",
    trackers: ["security"],
    category: "前瞻技術",
    title: "前沿代理式AI帶來的防禦挑戰：安全架構與資料治理成關鍵",
    summary: "隨著美國政府將AI能力部署至機密網路，前沿且代理式AI（Agentic AI）在國防與情報領域的應用帶來了巨大的決策優勢，但風險也同步擴大。文章指出，AI的應用不僅是部署強大模型，更需要建立完善的安全、治理和韌性基礎設施。在機密環境中，AI的可靠性取決於其使用的資料、接觸的網路，以及嚴格的控制機制。實務上，必須關注三個核心風險點：一是輸入資料的安全性（防止Poisoned content）；二是存取權限的精細控制（確保不同合作夥伴和分析師的邊界）；三是AI代理的輸出與連線（確保機密層級的完整性）。作者強調，無論AI如何加速作戰時程，安全邊界絕不能成為第一個失效點。因此，企業必須在基礎設施層面，建立具備跨域能力和硬體強制保護的安全網路骨架，確保敏感資料在進入模型前就能跨越分類邊界，從源頭上建立安全機制。",
    tags: ["Agentic AI", "國防網路", "機密環境", "資料治理", "安全架構", "AI風險"],
    title_en: "Defensive Challenges Posed by Advanced Agentic AI: Security Architecture and Data Governance are Key",
    summary_en: "As the US government deploys AI capabilities into classified networks, the application of advanced and agentic AI in defense and intelligence domains brings significant decision advantages, but also expands risks. The article points out that AI application is not merely about deploying powerful models, but requires establishing comprehensive security, governance, and resilience infrastructure. In classified environments, AI reliability depends on the data used, the networks accessed, and strict control mechanisms. Practically, three core risk points must be addressed: first, the security of input data (preventing Poisoned content); second, fine-grained access control (ensuring boundaries for different partners and analysts); and third, the output and connectivity of AI agents (ensuring the integrity of classified levels). The author emphasizes that no matter how much AI accelerates the operational timeline, the security boundary must not be the first point of failure. Therefore, enterprises must establish a secure network backbone at the infrastructure level, equipped with cross-domain capabilities and hardware-enforced protection, ensuring that sensitive data can cross classification boundaries before entering the model, establishing security mechanisms from the source.",
    tags_en: ["Agentic AI", "Defense Networks", "Classified Environments", "Data Governance", "Security Architecture", "AI Risks"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/agentic-ai-is-transforming-defense-but.html", lang: "EN" }
    ]
  },
  {
    id: "20260604-045",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Gartner警告四類關鍵威脅：深偽、供應鏈、提示注入與AI應用，企業防禦力落後",
    summary: "Gartner分析師在資安峰會指出，目前企業防禦體系在應對四種關鍵威脅時處於劣勢，這些威脅包括深偽（Deepfakes）、軟體供應鏈風險、提示注入（Prompt Injections）和AI應用程式的妥協。深偽攻擊已普遍化，甚至可繞過臉部或語音識別系統，建議採用多層次安全措施，而非僅依賴偵測技術。在供應鏈方面，攻擊者利用自動化蠕蟲和第三方平台漏洞，要求企業在CI/CD管線中實施強化的版本控制、秘密掃描和最小權限原則。對於AI應用，提示注入威脅日益嚴重，攻擊者可植入惡意提示給AI Agent，導致執行鏈被污染。專家建議，應透過滲透測試和紅隊演練來尋找並修復這些漏洞，而非僅依賴第三方產品。此外，AI相關CVE年增長迅速，企業需警惕擴大的攻擊面，並加強對開源框架（如OpenClaw）的控制。",
    tags: ["Gartner", "深偽", "Prompt Injection", "AI Agent", "軟體供應鏈", "CVE", "多因素驗證"],
    title_en: "Gartner Warns of Four Key Threats: Deepfakes, Supply Chain, Prompt Injection, and AI Applications, Noting Corporate Defense Deficiencies",
    summary_en: "Gartner analysts at a recent security summit pointed out that corporate defense systems are currently disadvantaged when responding to four key threats: Deepfakes, software supply chain risks, Prompt Injections, and the compromise of AI applications. Deepfake attacks have become widespread, capable of bypassing facial or voice recognition systems, necessitating the adoption of multi-layered security measures rather than relying solely on detection technologies. Regarding the supply chain, attackers are utilizing automated worms and third-party platform vulnerabilities, urging companies to implement enhanced version control, secret scanning, and the principle of least privilege within their CI/CD pipelines. For AI applications, the threat of prompt injection is escalating, allowing attackers to implant malicious prompts into AI Agents, leading to the contamination of execution chains. Experts recommend conducting penetration testing and red team exercises to identify and remediate these vulnerabilities, rather than depending solely on third-party products. Furthermore, the number of AI-related CVEs is growing rapidly, requiring enterprises to be vigilant about the expanding attack surface and strengthen control over open-source frameworks (such as OpenClaw).",
    tags_en: ["Gartner", "Deepfakes", "Prompt Injection", "AI Agent", "Software Supply Chain", "CVE", "Multi-Factor Authentication"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/4-critical-threats-attackers-advantage", lang: "EN" }
    ]
  },
  {
    id: "20260604-046",
    trackers: ["security"],
    category: "前瞻技術",
    title: "微軟更新 Agentic AI 失敗模式分類法 v2.0：揭示新興的供應鏈、目標劫持與視覺攻擊風險",
    summary: "微軟發布了 Agentic AI 系統的《失敗模式分類法 v2.0》，這是基於一年紅隊演練的實戰經驗更新。新版本增加了七個新的失敗模式，以應對開源框架（如 OpenClaw）和模型上下文協議（MCP）的快速成熟。主要風險包括：1. **Agentic 供應鏈組件的污染**：攻擊不再是惡意程式碼，而是注入改變行為的自然語言指令。2. **目標劫持 (Goal Hijacking)**：透過看似合法的指令，悄悄改變 AI 的終極目標。3. **電腦使用代理 (CUA) 視覺攻擊**：利用圖形介面中對人類可見但對 AI 具有欺騙性的視覺內容進行攻擊。此外，文章指出 MCP 生態系統已累積了大量漏洞，工具污染已成為實戰攻擊面。修補建議強調需要建立更全面的安全審計流程，特別針對自然語言指令和多步驟的會話上下文。未公開。",
    tags: ["Agentic AI", "失敗模式分類法", "供應鏈安全", "目標劫持", "CUA", "MCP"],
    title_en: "Microsoft Updates Agentic AI Failure Mode Taxonomy v2.0: Revealing Emerging Risks in Supply Chain, Goal Hijacking, and Visual Attacks",
    summary_en: "Microsoft has released the 'Failure Mode Taxonomy v2.0' for Agentic AI systems, an update based on a year of red team exercises and practical experience. The new version adds seven new failure modes to address the rapid maturation of open-source frameworks (such as OpenClaw) and Model Context Protocols (MCP). Key risks include: 1. **Pollution of Agentic Supply Chain Components**: Attacks are no longer limited to malicious code, but involve injecting natural language instructions that alter behavior. 2. **Goal Hijacking**: Subtly changing the AI's ultimate objective through seemingly legitimate instructions. 3. **CUA Visual Attacks**: Exploiting visual content within graphical user interfaces that is visible to humans but deceptive to AI. Furthermore, the article notes that the MCP ecosystem has accumulated numerous vulnerabilities, making tool pollution a practical attack surface. Remediation suggestions emphasize the need for establishing more comprehensive security auditing processes, especially targeting natural language instructions and multi-step conversational context. Not Public.",
    tags_en: ["Agentic AI", "Failure Mode Taxonomy", "Supply Chain Security", "Goal Hijacking", "CUA", "MCP"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/06/04/updating-taxonomy-failure-modes-agentic-ai-systems-year-red-teaming-taught-us", lang: "EN" }
    ]
  },
  {
    id: "20260604-047",
    trackers: ["security"],
    category: "前瞻技術",
    title: "信驊科技發表搭載Caliptra 2.x、支援PQC的下一代伺服器管理晶片，深化硬體信任根安全",
    summary: "信驊科技在Computex展出多款新一代伺服器管理晶片，核心技術為整合了Caliptra 2.x安全架構。Caliptra 2.x是OCP主導的開源硬體信任根標準，使晶片在生產階段透過PUF技術賦予唯一身分識別碼，並利用HSM模組簽署生成憑證，燒錄至OTP記憶體，形成不可變更的唯一身分證明。新版本最大的進步是全面支援後量子密碼學（PQC），具體包含符合NIST標準的ML-KEM（FIPS 203）與ML-DSA（FIPS 204）演算法，確保晶片在未來量子運算時代仍能防範韌體竄改。本次重點產品包括AST1040、AST1840及AST1080，它們均內建Caliptra 2.x，提供硬體層級的韌體保護與實體防篡改能力。此外，晶片還支援多節點管理架構，並整合了如SPDM與PLDM等業界標準協定，大幅提升資料中心平臺的資安韌性。",
    tags: ["信驊科技", "Caliptra", "PQC", "硬體信任根", "BMC", "NIST", "AST1040"],
    title_en: "Synology Technologies Unveils Next-Generation Server Management Chip Featuring Caliptra 2.x and PQC, Deepening Hardware Root of Trust Security",
    summary_en: "At Computex, Synology Technologies showcased multiple new generations of server management chips, with the core technology integrating the Caliptra 2.x security architecture. Caliptra 2.x is an OCP-led open-source hardware root of trust standard. It enables the chip to be provisioned with a unique identifier during the manufacturing process using PUF technology, and utilizes an HSM module to sign and generate certificates, which are then burned into OTP memory, forming an immutable unique identity proof. The biggest advancement in the new version is the comprehensive support for Post-Quantum Cryptography (PQC), specifically including ML-KEM (FIPS 203) and ML-DSA (FIPS 204) algorithms compliant with NIST standards, ensuring the chip can defend against firmware tampering even in the future quantum computing era. Key products highlighted include AST1040, AST1840, and AST1080, all of which embed Caliptra 2.x, providing hardware-level firmware protection and physical anti-tampering capabilities. Furthermore, the chip supports a multi-node management architecture and integrates industry standard protocols such as SPDM and PLDM, significantly enhancing the cybersecurity resilience of data center platforms.",
    tags_en: ["Synology Technologies", "Caliptra", "PQC", "Hardware Root of Trust", "BMC", "NIST", "AST1040"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176369", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-048",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Let's Encrypt規劃導入MTC，以應對Web PKI後量子身分驗證挑戰",
    summary: "免費憑證簽發機構 Let's Encrypt 宣布規劃採用 MTC（Merkle Tree Certificates）作為 Web PKI 導入後量子身分驗證的主要方案。此計畫目標是在 2026 年晚些建立測試環境，並在 2027 年建立生產環境。此變革旨在應對量子電腦威脅對長期金鑰（如根憑證機構金鑰）的潛在影響。傳統上，後量子密碼多著重於加密與金鑰交換，但身分驗證（Identity）的長期金鑰影響範圍更大。Let's Encrypt 提出 MTC 的設計，將憑證批次放入雜湊樹，由單一簽章涵蓋整批憑證。這能有效降低相較於直接替換後量子簽章（如 ML-DSA-44）導致的 TLS 交握資料量大幅增加（可能超過 10KB）的負擔。MTC 也將憑證透明度納入簽發流程，改變現行 CT 紀錄的實作方式。雖然現有憑證不受影響，但仰賴 ACME 協定自動化工作流程的客戶端維護者應開始關注此變動，因為後續的基礎設施調整將需要客戶端支援。",
    tags: ["Let's Encrypt", "MTC", "後量子密碼", "Web PKI", "TLS", "ACME"],
    title_en: "Let's Encrypt Plans to Implement MTC to Address Web PKI Post-Quantum Identity Authentication Challenges",
    summary_en: "The free certificate authority Let's Encrypt has announced plans to adopt MTC (Merkle Tree Certificates) as the primary solution for integrating post-quantum identity authentication into Web PKI. The goal of this project is to establish a testing environment by late 2026 and a production environment in 2027. This change aims to address the potential impact of quantum computer threats on long-term keys (such as root Certificate Authority keys). Traditionally, post-quantum cryptography has focused on encryption and key exchange, but the impact of long-term keys on identity is broader. Let's Encrypt proposes the MTC design, which places certificate batches into a hash tree, allowing a single signature to cover the entire batch of certificates. This effectively mitigates the burden of significantly increased TLS handshake data volume (potentially exceeding 10KB) that would result from directly replacing post-quantum signatures (such as ML-DSA-44). MTC will also incorporate certificate transparency into the issuance process, changing the implementation method of the current CT record. Although existing certificates will remain unaffected, maintainers of client applications relying on the ACME protocol automation workflow should begin paying attention to this change, as subsequent infrastructure adjustments will require client support.",
    tags_en: ["Let's Encrypt", "MTC", "Post-Quantum Cryptography", "Web PKI", "TLS", "ACME"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176364", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-049",
    trackers: ["security"],
    category: "前瞻技術",
    title: "趨勢科技揭露：攻擊者利用越獄Gemini AI與社群頻道進行大規模自動化詐欺與帳號入侵",
    summary: "趨勢科技研究團隊揭露一宗長達五年、以「美國愛國者」為掩護的網路詐欺活動。攻擊者代號bandcampro利用Telegram社群頻道進行詐騙，並進一步將生成式AI（Google Gemini）用於自動化攻擊。攻擊者利用疑似遭竊的Gemini API金鑰，並透過提示工程及記憶檔案，使AI持續處於越獄狀態，用於自動生成貼文、輪替API金鑰、除錯腳本，甚至產生密碼變體。透過AI協助，攻擊者成功入侵29個WordPress網站管理員帳號，至少影響一個企業環境和一個加密貨幣錢包。趨勢科技指出，此案例顯示生成式AI已大幅降低網路犯罪門檻，使攻擊活動更容易擴大規模。防禦建議包括強化AI供應鏈、增強AI模型的跨語言防護機制、支援抗越獄的記憶體檔案，並重點監控被盜API金鑰的重複使用及命令列介面（CLI）的異常變更。",
    tags: ["生成式AI", "Google Gemini", "越獄攻擊", "API金鑰", "網路詐欺", "趨勢科技", "自動化攻擊"],
    title_en: "Trend Micro Reveals: Attackers Utilize Jailbroken Gemini AI and Community Channels for Large-Scale Automated Fraud and Account Intrusion",
    summary_en: "The Trend Micro research team has uncovered a sophisticated cyber fraud operation spanning five years, masked by the guise of 'American Patriotism.' Attackers, codenamed bandcampro, utilized Telegram community channels for scams, further integrating generative AI (Google Gemini) for automated attacks. The attackers leveraged seemingly stolen Gemini API keys, employing prompt engineering and memory files to keep the AI in a jailbroken state. This allowed the AI to automatically generate posts, rotate API keys, create debugging scripts, and even generate password variations. With AI assistance, the attackers successfully compromised administrator accounts on 29 WordPress websites, affecting at least one corporate environment and one cryptocurrency wallet. Trend Micro points out that this case demonstrates how generative AI has significantly lowered the barrier to entry for cybercrime, making attack activities easier to scale. Defensive recommendations include strengthening the AI supply chain, enhancing cross-language protection mechanisms for AI models, supporting anti-jailbreak memory files, and focusing on monitoring the repeated use of stolen API keys and abnormal changes in the Command Line Interface (CLI).",
    tags_en: ["Generative AI", "Google Gemini", "Jailbreak Attack", "API Key", "Cyber Fraud", "Trend Micro", "Automated Attack"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176363", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260604-050",
    trackers: ["security"],
    category: "uncategorized",
    title: "Palo Alto Networks GlobalProtect 門戶端及 Prisma Access 遭重大漏洞攻擊，可繞過驗證建立未授權 VPN 連線",
    summary: "Palo Alto Networks 發現一項關鍵漏洞（CVE-2026-0257），影響其 PAN-OS 軟體和 Prisma Access 的 GlobalProtect 門戶端及閘道器。此漏洞屬於身份驗證繞過（authentication bypass）類型，攻擊者可透過遠端且無需身份驗證的方式，繞過安全限制並建立未授權的 VPN 連線。該漏洞的 CVSS v3.1 分數為 9.1/10，且已被確認在野外積極利用。受影響的產品版本包括 PAN-OS 12.1、11.2、11.1、10.2，以及 Prisma Access 11.2 和 10.2 等。建議用戶和管理員應立即更新至最新修補版本。若無法立即修補，建議實施的緩解措施包括使用專用憑證處理 Authentication Override cookies，或直接停用 Authentication Override 功能。",
    tags: ["Palo Alto Networks", "CVE-2026-0257", "GlobalProtect", "PAN-OS", "Prisma Access", "VPN"],
    title_en: "Palo Alto Networks GlobalProtect Client and Prisma Access Affected by Critical Vulnerability, Allowing Unauthorized VPN Connection Bypass",
    summary_en: "Palo Alto Networks has discovered a critical vulnerability (CVE-2026-0257) affecting its PAN-OS software and the GlobalProtect client and gateway for Prisma Access. This vulnerability is an authentication bypass type, allowing attackers to bypass security restrictions and establish unauthorized VPN connections remotely and without authentication. The vulnerability has a CVSS v3.1 score of 9.1/10 and has been confirmed to be actively exploited in the wild. Affected product versions include PAN-OS 12.1, 11.2, 11.1, 10.2, and Prisma Access 11.2 and 10.2. Users and administrators are advised to immediately update to the latest patched version. If immediate patching is not possible, recommended mitigation measures include using dedicated credentials to process Authentication Override cookies, or directly disabling the Authentication Override function.",
    tags_en: ["Palo Alto Networks", "CVE-2026-0257", "GlobalProtect", "PAN-OS", "Prisma Access", "VPN"],
    sources: [
      { name: "新加坡 CSA", url: "https://csa.gov.sg/alerts-and-advisories/alerts/al-2026-064", lang: "EN" }
    ]
  }
];
