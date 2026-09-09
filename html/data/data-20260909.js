// data-20260909.js — 2026-09-09
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-09"] = [
  {
    id: "20260909-11156",
    trackers: ["security"],
    category: "重大事件",
    title: "Thomson Reuters旗下法院案件管理平臺 C-Track 遭外洩，可能洩露多州法院的敏感個人資料",
    summary: "資訊服務商 Thomson Reuters 的法院案件管理平臺 C-Track 發生資料外洩事件。根據調查，未經授權的第三方早在今年三月便已取得部分法院檔案。遭竊取的資料類型極為敏感，可能包含受害者的姓名、社會安全碼、駕照號碼、出生日期，以及醫療和健康保險資訊，甚至可能涉及部分法院的機密或封存資料。\n\nThomson Reuters 於六月三十日發現異常存取活動，並委請外部資安專家進行調查，同時已通知相關執法機關。目前已知事件已波及美國至少 12 個州，受影響範圍包括俄亥俄州多個上訴法院、美屬維京群島法院以及加拿大安大略省的法院。\n\n該事件的實務影響重大，涉及多州法院的敏感個人資料，可能導致身份盜用和隱私權風險。雖然 Thomson Reuters 尚未公布確切的資料總量和受影響人數，但建議相關機構和個人應提高警覺，留意相關的身份盜用警訊，並採取適當的防護措施。",
    tags: ["Thomson Reuters", "C-Track", "資料外洩", "法院系統", "個人資料", "身份盜用"],
    title_en: "Data Leak Affects Thomson Reuters' C-Track Court Case Management Platform, Potentially Exposing Sensitive Multi-State Court Records",
    summary_en: "Thomson Reuters' C-Track court case management platform has experienced a data leak. Investigations reveal that unauthorized third parties gained access to certain court files as early as March of this year. The stolen data is extremely sensitive, potentially including victims' names, social security numbers, driver's license numbers, dates of birth, and medical and health insurance information, and may even involve confidential or sealed court records. Thomson Reuters detected the anomalous access activity on June 30th and subsequently engaged external cybersecurity experts for an investigation, while also notifying relevant law enforcement agencies. The incident is currently known to affect at least 12 states across the United States, including multiple appellate courts in Ohio, the court in the U.S. Virgin Islands, and courts in Ontario, Canada. The practical impact of this incident is significant, involving sensitive personal data from multiple state courts, which could lead to identity theft and privacy risks. Although Thomson Reuters has not yet disclosed the exact volume of data or the number of affected individuals, it is recommended that relevant institutions and individuals heighten their vigilance, monitor for identity theft alerts, and take appropriate protective measures.",
    tags_en: ["Thomson Reuters", "C-Track", "Data Leak", "Court System", "Personal Data", "Identity Theft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178774", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11303",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6491-1 相關漏洞，強化系統安全性",
    summary: "Debian 安全團隊發布了關於 DSA-6491-1 的安全公告，旨在修補一個潛在的系統漏洞。此漏洞的具體技術細節和受影響的元件未在本次公告中詳述，但其修補是為了加強系統的整體安全性。建議所有 Debian 使用者應立即更新系統以修補此安全漏洞。由於原文僅提供安全追蹤連結，未提供詳細的 CVSS 分數、受影響版本範圍或具體攻擊向量，因此修補建議為立即執行系統更新。本公告屬於核心系統層面的安全修補，建議所有 Debian 系統管理者應將其視為高優先級的更新項目。",
    tags: ["Debian", "DSA-6491-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6491-1 Vulnerability to Enhance System Security",
    summary_en: "The Debian security team has issued a security advisory regarding DSA-6491-1, aimed at patching a potential system vulnerability. While the specific technical details and affected components of this vulnerability are not elaborated in this advisory, the patch is intended to strengthen overall system security. All Debian users are advised to immediately update their systems to patch this security flaw. Since the original text only provides a security tracking link and does not include detailed CVSS scores, affected version ranges, or specific attack vectors, the patch recommendation is immediate system updating. As this advisory pertains to core system-level security fixes, all Debian system administrators should treat this as a high-priority update item.",
    tags_en: ["Debian", "DSA-6491-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00402.html", lang: "EN" }
    ]
  },
  {
    id: "20260909-11309",
    trackers: ["os"],
    category: "Linux",
    title: "ARM 工程師利用 AI 找出瓶頸，發布 23 個補丁大幅加速 Linux 核心編譯時間",
    summary: "一位 ARM 工程師兼資深 Linux 開發者 Lorenzo Stoakes，發布了一組包含 23 個補丁，旨在顯著加速 Linux 核心的編譯流程。這些補丁的核心目標是解決核心編譯過程中長期受困於單執行緒瓶頸的問題。他指出，在開發過程中，曾利用大型語言模型（LLM）來找出這些性能瓶頸並提出改進方案，但隨後他親自進行了大量的審核、評估和重寫。這些改動主要透過並行化許多單執行緒任務，並提升了整個建構流程的效率。受影響的關鍵建構系統和元件包括 Kbuild、kallsyms、modpost、objtool、mksysmap 以及 Rust 建構系統。根據測試結果，啟用所有模組的核心編譯時間可加快約 36%，增量核心編譯可加快高達 70%，而 noop 編譯甚至可加快近 90%。這些性能提升在不同硬體和核心配置上都非常顯著，開發者期待這些改動能進入主線 Linux 核心。",
    tags: ["Linux 核心", "Linux 編譯", "ARM", "LLM", "Kbuild", "性能優化"],
    title_en: "ARM Engineer Uses AI to Identify Bottlenecks, Releases 23 Patches to Significantly Speed Up Linux Kernel Compilation",
    summary_en: "Lorenzo Stoakes, an ARM engineer and senior Linux developer, has released a set of 23 patches aimed at significantly accelerating the Linux kernel compilation process. The core objective of these patches is to resolve the long-standing single-threaded bottlenecks encountered during kernel compilation. He noted that during the development process, he utilized large language models (LLMs) to identify these performance bottlenecks and propose improvements, but subsequently conducted extensive manual review, evaluation, and rewriting. These changes primarily involve parallelizing numerous single-threaded tasks and boosting the efficiency of the entire build process. Key build systems and components affected include Kbuild, kallsyms, modpost, objtool, mksysmap, and the Rust build system. According to testing results, compiling the kernel with all modules enabled can be accelerated by approximately 36%, incremental kernel compilation can be accelerated by up to 70%, and even a noop compilation can be accelerated by nearly 90%. These performance improvements are significant across various hardware and kernel configurations, and the developer hopes these changes will be integrated into the mainline Linux kernel.",
    tags_en: ["Linux Kernel", "Linux Compilation", "ARM", "LLM", "Kbuild", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AI-To-Faster-Linux-Kernel-Comp", lang: "EN" }
    ]
  },
  {
    id: "20260909-11153",
    trackers: ["os", "security"],
    category: "法規與標準",
    title: "Google擴大Android數位憑證聯盟，應對歐盟eIDAS 2.0與數位身分錢包安全挑戰",
    summary: "Google調整了原Android Ready SE聯盟，升級為Android數位憑證聯盟（Android Digital Credential Alliance）。此聯盟旨在整合晶片、裝置、數位身分錢包及憑證發行等各方，共同建立標準化的安全測試與評估機制，協助產品符合日益嚴格的資安法規要求。\n\n此舉時機點與歐盟數位身分政策部署緊密相關。歐盟預計在2026年底前實施eIDAS 2.0，要求各成員國建立歐洲數位身分錢包（European Digital Identity Wallet）。隨著數位身分錢包的普及，如何保護其中的數位憑證私密金鑰成為關鍵。Google強調，在支援StrongBox的Android裝置上，私密金鑰可被安全地儲存在與主處理器實體隔離的安全元件內，並透過StrongBox產生的金鑰對，將憑證與特定裝置進行綁定。使用者在使用數位憑證前，仍需完成身分驗證流程，以確保憑證不會被未經授權的第三方使用。",
    tags: ["Google", "Android數位憑證聯盟", "eIDAS 2.0", "數位身分錢包", "StrongBox", "安全元件"],
    title_en: "Google Expands Android Digital Credential Alliance to Address EU eIDAS 2.0 and Digital Identity Wallet Security Challenges",
    summary_en: "Google has restructured the original Android Ready SE Alliance, upgrading it to the Android Digital Credential Alliance. This alliance aims to integrate chips, devices, digital identity wallets, and credential issuance parties to establish standardized security testing and evaluation mechanisms, helping products comply with increasingly stringent cybersecurity regulations. This move is closely timed with the deployment of EU digital identity policies. The EU plans to implement eIDAS 2.0 by the end of 2026, requiring member states to establish a European Digital Identity Wallet. As digital identity wallets become widespread, protecting the private keys of the digital credentials within them is crucial. Google emphasizes that on Android devices supporting StrongBox, private keys can be securely stored within a secure element physically isolated from the main processor. Furthermore, by using key pairs generated by StrongBox, credentials can be bound to specific devices. Before a user can utilize a digital credential, an identity verification process must still be completed to ensure the credential is not used by unauthorized third parties.",
    tags_en: ["Google", "Android Digital Credential Alliance", "eIDAS 2.0", "Digital Identity Wallet", "StrongBox", "Secure Element"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178761", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11155",
    trackers: ["security"],
    category: "法規與標準",
    title: "微軟警告：Exchange Server 2016/2019 連接 Exchange Online 需升級，否則郵件將遭限制或封鎖",
    summary: "微軟宣布，自今年九月第二週起，連接 Exchange Online 的 Exchange Server 2016 與 2019 將提高最低版本要求。這兩款產品若仍使用過舊版本，並透過 OnPremises 類型的輸入連接器傳送郵件至 Exchange Online，可能會首先面臨傳送速率限制，甚至最終遭到封鎖。\n\n此次提高最低版本要求，是基於產品的支援週期管理。Exchange Server 2016 與 2019 的第二階段延伸安全更新（ESU）計畫預計將於今年十月底結束。因此，尚未更新到最新版本的企業，從九月第二週起就可能受到郵件傳送的限制。\n\n文章提醒，對於仍採用這兩個版本與 Exchange Online 混合部署的企業，必須立即規劃將 Exchange Server 遷移至支援的環境，以確保郵件服務的穩定性與連續性。",
    tags: ["Microsoft", "Exchange Server 2016", "Exchange Server 2019", "Exchange Online", "ESU", "郵件服務"],
    title_en: "Microsoft Warning: Exchange Server 2016/2019 Connecting to Exchange Online Requires Upgrade, Otherwise Email May Be Restricted or Blocked",
    summary_en: "Microsoft announced that starting the second week of September, Exchange Server 2016 and 2019 connecting to Exchange Online will have increased minimum version requirements. If these two products continue to use outdated versions and send emails to Exchange Online via On-Premises type input connectors, they may first face sending rate limits and could eventually be blocked. This increase in minimum version requirements is based on product support lifecycle management. The second phase Extended Security Updates (ESU) plan for Exchange Server 2016 and 2019 is scheduled to end at the end of October this year. Therefore, enterprises that have not updated to the latest version may face email sending restrictions starting the second week of September. The article reminds organizations that still use a hybrid deployment of these two versions with Exchange Online that they must immediately plan to migrate Exchange Server to a supported environment to ensure the stability and continuity of email services.",
    tags_en: ["Microsoft", "Exchange Server 2016", "Exchange Server 2019", "Exchange Online", "ESU", "Email Services"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178777", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11322",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟發布史上最多 974 個 CVE，同時 Adobe 警告 Magento 存在零日 RCE 漏洞",
    summary: "本月安全更新的重點包括微軟發布了創紀錄的 974 個 CVE，其中包含兩個已被利用的零日漏洞。其中一個是影響 Windows Advanced Local Procedure Call (ALPC) 的權限提升漏洞 CVE-2026-85880，可讓攻擊者在低權限 AppContainer 中逃逸沙盒並提升至 SYSTEM 權限，無需額外使用者互動。另一個是影響 Windows Update Stack 的權限提升漏洞 CVE-2026-81963，同樣可讓攻擊者取得 SYSTEM 級別存取權。此外，Adobe 發布了針對 172 個 CVE 的修補程式，特別警告 e-commerce 網站的 Magento 和 Adobe Commerce 存在 StyleSmuggler 漏洞（CVE-2026-75650）。此漏洞允許未經身份驗證的攻擊者透過注入惡意 PHP 代碼，在 Magento 模板中執行遠端程式碼 (RCE)，建議所有線上商店應優先修補此漏洞。此外，文章也提醒，Google 已修補 Chrome 中的 V8 JavaScript 引擎漏洞 CVE-2026-85046，但微軟尚未發布相關安全公告，使用者應警惕未公開的漏洞風險。",
    tags: ["Microsoft", "Adobe", "CVE-2026-75650", "CVE-2026-85880", "CVE-2026-81963", "Magento", "Windows"],
    title_en: "Microsoft Releases Record 974 CVEs; Adobe Warns of Zero-Day RCE Vulnerability in Magento",
    summary_en: "Key security updates this month include Microsoft releasing a record 974 CVEs, including two exploited zero-day vulnerabilities. One is CVE-2026-85880, a privilege escalation vulnerability affecting Windows Advanced Local Procedure Call (ALPC), which allows attackers to escape the sandbox from a low-privilege AppContainer and escalate to SYSTEM privileges without requiring additional user interaction. Another is CVE-2026-81963, a privilege escalation vulnerability affecting the Windows Update Stack, which also allows attackers to achieve SYSTEM-level access. Additionally, Adobe released patches for 172 CVEs, specifically warning that Magento and Adobe Commerce, used by e-commerce websites, are affected by the StyleSmuggler vulnerability (CVE-2026-75650). This vulnerability allows unauthenticated attackers to execute remote code (RCE) by injecting malicious PHP code into Magento templates, and all online stores are advised to prioritize patching this flaw. Furthermore, the article reminds users that Google has patched the V8 JavaScript engine vulnerability in Chrome, CVE-2026-85046, but Microsoft has not yet issued a related security advisory, cautioning users about the risk of undisclosed vulnerabilities.",
    tags_en: ["Microsoft", "Adobe", "CVE-2026-75650", "CVE-2026-85880", "CVE-2026-81963", "Magento", "Windows"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/09/microsoft-breaks-patch-tuesday-record-with-974-cve-deluge/5295160", lang: "EN" }
    ]
  },
  {
    id: "20260909-11346",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 透過 KB5124008 更新，終於恢復可移動工作列功能",
    summary: "本文介紹了 2026 年 9 月的 Patch Tuesday 更新 KB5124008，該更新為 Windows 11 恢復了可將工作列（Taskbar）移動至螢幕任何邊緣的功能。此功能自 Windows 95 時代以來已是標準配置，但 Windows 11 早期版本缺乏此能力，曾讓使用者透過 ExplorerPatcher 等第三方工具修補。使用者需先安裝 KB5124008（將系統提升至 Build 26200.9445 或 Build 26100.9445），若仍未看到設定選項，可使用 ViVeTool 指令（`vivetool /enable /id:61161244,61754985`）強制啟用。啟用後，使用者可在「設定」>「個人化」>「工作列」>「工作列行為」中選擇工作列位置。雖然功能已恢復，但部分細節如「自動隱藏」和「優化觸控互動」等選項仍僅限於底部位置，顯示此為功能初版。建議使用者安裝此安全更新，以確保系統穩定性。",
    tags: ["Windows 11", "KB5124008", "Taskbar", "Windows 10", "Microsoft"],
    title_en: "Windows 11 KB5124008 Update Restores Movable Taskbar Functionality",
    summary_en: "This article introduces the September 2026 Patch Tuesday update, KB5124008, which restores the ability to move the Taskbar to any edge of the screen in Windows 11. This feature has been standard since the Windows 95 era, but early versions of Windows 11 lacked this capability, forcing users to rely on third-party tools like ExplorerPatcher for a fix. Users must first install KB5124008 (upgrading the system to Build 26200.9445 or Build 26100.9445). If the setting option is still not visible, users can force activation using the ViVeTool command (`vivetool /enable /id:61161244,61754985`). Once enabled, users can select the Taskbar location under Settings > Personalization > Taskbar > Taskbar behaviors. Although the function has been restored, some details, such as the 'Auto-hide' and 'Optimize touch interaction' options, are still limited to the bottom position, indicating this is a preliminary version of the feature. It is recommended that users install this security update to ensure system stability.",
    tags_en: ["Windows 11", "KB5124008", "Taskbar", "Windows 10", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/09/windows-11-finally-restores-a-windows-10-feature-after-five-years-the-movable-taskbar", lang: "EN" }
    ]
  },
  {
    id: "20260909-11148",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SAP 9月例行更新修補 19 個資安弱點，最高危險漏洞 CVE-2026-44756 評分 10 分",
    summary: "SAP於9月8日發布例行安全修補（Security Patch Day），共修補了 19 個資安弱點。本次修補的漏洞嚴重程度涵蓋重大、高風險、中度及低風險等多個等級。其中，最危險的漏洞為 CVE-2026-44756，該漏洞影響 Extended Passport (EPP) 功能，CVSS 評分為 10 分。未經身分驗證的攻擊者若能利用帶有惡意 EPP 標頭的特製請求，有可能觸發未定義行為或導致程式異常終止。\n\n此外，本次更新還修補了其他數個重大等級的漏洞，包括：CVE-2026-58240（影響 NetWeaver Message Server，因缺乏身分驗證檢查，CVSS 9.8）；CVE-2026-66768（影響 SAP GUI for Java，因存取控制不當，CVSS 9.0）；以及 CVE-2026-76969（影響 SAP Cloud Application Programming Model (CAP)，涉及跨租戶應用程式的憑證洩露，CVSS 9.4）。\n\n實務上，用戶應留意 SAP 發布的例行安全修補，並儘速更新相關產品，以修補這些高風險的資安漏洞，避免遭受未經身分驗證的攻擊。",
    tags: ["SAP", "CVE-2026-44756", "CVE-2026-58240", "CVE-2026-66768", "CVE-2026-76969", "資安修補", "SAP Security Patch Day"],
    title_en: "SAP Releases September Routine Security Patch Addressing 19 Vulnerabilities, Featuring Critical Flaw CVE-2026-44756 with a CVSS Score of 10",
    summary_en: "On September 8th, SAP released its routine security patch (Security Patch Day), addressing a total of 19 vulnerabilities. The severity of these patches ranges across multiple levels, including critical, high, medium, and low risk. The most dangerous vulnerability is CVE-2026-44756, which affects the Extended Passport (EPP) function and has a CVSS score of 10. An unauthenticated attacker could potentially exploit a specially crafted request containing a malicious EPP header to trigger undefined behavior or cause the program to terminate abnormally. Additionally, this update patched several other high-severity vulnerabilities, including: CVE-2026-58240 (affecting NetWeaver Message Server due to lack of authentication checks, CVSS 9.8); CVE-2026-66768 (affecting SAP GUI for Java due to improper access control, CVSS 9.0); and CVE-2026-76969 (affecting SAP Cloud Application Programming Model (CAP), involving credential leakage across tenants, CVSS 9.4). Practically, users should pay attention to the routine security patches released by SAP and update relevant products promptly to patch these high-risk security vulnerabilities, thereby avoiding unauthenticated attacks.",
    tags_en: ["SAP", "CVE-2026-44756", "CVE-2026-58240", "CVE-2026-66768", "CVE-2026-76969", "Security Patch", "SAP Security Patch Day"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178801", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11149",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟9月例行更新修補974個漏洞，警告兩處零時差提升權限漏洞需特別注意",
    summary: "本週微軟在9月例行更新（Patch Tuesday）中，修補了多達974個已登記的CVE漏洞。其中，微軟特別警告兩處零時差漏洞，需高度留意其被利用的跡象。第一個漏洞為CVE-2026-81963，存在於Windows Update Stack元件，屬於本機提升權限的弱點。該漏洞影響所有版本的Windows 11與Windows Server 2025，攻擊者可利用連結解析問題，在授權環境下取得SYSTEM權限。第二個零時差漏洞為CVE-2026-85880，存在於Advanced Local Procedure Call（ALPC）元件，屬於記憶體堆積緩衝區溢位弱點。此漏洞影響Windows 10 (1607, 1809, 22H2) 及Windows Server 2012至2022。兩處漏洞的CVSS嚴重程度皆為7.8分，評級為重要（Important），若被成功利用，攻擊者可提升本機權限。",
    tags: ["微軟", "Patch Tuesday", "CVE-2026-81963", "CVE-2026-85880", "Windows", "提升權限"],
    title_en: "Microsoft's September Patch Update Fixes 974 Vulnerabilities, Warning Users to Pay Special Attention to Two Zero-Day Privilege Escalation Flaws",
    summary_en: "In this week's routine September update (Patch Tuesday), Microsoft patched a total of 974 registered CVE vulnerabilities. Microsoft specifically warned about two zero-day vulnerabilities, urging users to pay close attention to signs of exploitation. The first vulnerability is CVE-2026-81963, located in the Windows Update Stack component, which is a local privilege escalation weakness. This vulnerability affects all versions of Windows 11 and Windows Server 2025. Attackers can exploit a link parsing issue to gain SYSTEM privileges in a privileged environment. The second zero-day vulnerability is CVE-2026-85880, located in the Advanced Local Procedure Call (ALPC) component, which is a memory stack buffer overflow weakness. This vulnerability affects Windows 10 (1607, 1809, 22H2) and Windows Server 2012 through 2022. Both vulnerabilities have a CVSS severity score of 7.8, rated as Important. If successfully exploited, attackers can escalate local privileges.",
    tags_en: ["Microsoft", "Patch Tuesday", "CVE-2026-81963", "CVE-2026-85880", "Windows", "Privilege Escalation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178800", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11150",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "HPE修補ArubaOS-CX網路作業系統34個漏洞：最高CVSS 9.8分，警惕遠端程式碼執行風險",
    summary: "HPE於9月2日發布資安公告，修補了ArubaOS-CX網路作業系統共34個漏洞。ArubaOS-CX主要用於Aruba企業級網路交換器，影響範圍涵蓋CX 10000、6000、6300、6400與8400等多款設備，以及版本10.18.0001、10.17.1021、10.16.1051及其更早版本。本次修補的漏洞類型包括緩衝區溢位、指令注入、任意檔案寫入及權限提升等。其中，最嚴重的漏洞為CVE-2026-73749，CVSS評分為9.8分，源於作業系統對錯誤格式輸入資料處理不當，攻擊者可透過特製封包觸發，進而執行遠端程式碼。HPE提醒用戶，應立即升級至已修補的特定版本，例如10.18.1002、10.17.1030或10.16.1060，以防範潛在的攻擊風險。",
    tags: ["HPE", "ArubaOS-CX", "CVE-2026-73749", "網路交換器", "漏洞修補", "遠端程式碼執行"],
    title_en: "HPE Patches 34 Vulnerabilities in ArubaOS-CX Network OS: Highest CVSS Score 9.8, Warning of Remote Code Execution Risk",
    summary_en: "On September 2nd, HPE released a security advisory patching a total of 34 vulnerabilities in the ArubaOS-CX network operating system. ArubaOS-CX is primarily used on Aruba enterprise-grade network switches, affecting multiple models including CX 10000, 6000, 6300, 6400, and 8400, as well as versions 10.18.0001, 10.17.1021, 10.16.1051, and earlier. The vulnerabilities patched include buffer overflows, command injection, arbitrary file write, and privilege escalation. The most severe vulnerability is CVE-2026-73749, which has a CVSS score of 9.8. This vulnerability stems from the operating system's improper handling of malformed input data, allowing an attacker to trigger it via a specially crafted packet and execute remote code. HPE urges users to immediately upgrade to the patched specific versions, such as 10.18.1002, 10.17.1030, or 10.16.1060, to prevent potential attack risks.",
    tags_en: ["HPE", "ArubaOS-CX", "CVE-2026-73749", "Network Switch", "Vulnerability Patching", "Remote Code Execution"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178798", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11151",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟 9月例行更新修補近千個漏洞：Windows、Office 與伺服器組件為主要修補目標",
    summary: "微軟於本月例行更新（Patch Tuesday）中，修補了數量龐大的資安漏洞。本次更新共修補了 974 個公司登記的 CVE 編號漏洞，若計入 25 個第三方元件的弱點，總漏洞數達到 999 個。修補的漏洞主要集中在 Windows 作業系統（723 個），其次是辦公室套件 Office（111 個）和 SQL Server（62 個）。此外，開發工具、SharePoint Server、Skype for Business 和 Exchange Server 等服務也分別修補了各自的弱點。在雲端服務方面，微軟亦修補了 12 個弱點。資安專業人士應留意這些大型的修補週期，並確保所有相關系統組件及第三方元件都及時進行更新，以降低整體攻擊面。",
    tags: ["Microsoft", "Patch Tuesday", "CVE", "Windows", "Office", "資安修補"],
    title_en: "Microsoft's September Patch Tuesday Addresses Nearly 1,000 Vulnerabilities: Windows, Office, and Server Components are Primary Targets",
    summary_en: "In this month's routine update (Patch Tuesday), Microsoft patched a large number of security vulnerabilities. The update addressed 974 CVE-identified vulnerabilities, and including weaknesses in 25 third-party components, the total number of vulnerabilities reached 999. The patched vulnerabilities were primarily concentrated in the Windows operating system (723), followed by the Office suite (111) and SQL Server (62). Additionally, services such as development tools, SharePoint Server, Skype for Business, and Exchange Server also patched their respective weaknesses. In cloud services, Microsoft also patched 12 vulnerabilities. Cybersecurity professionals should pay attention to these large patching cycles and ensure that all relevant system components and third-party elements are updated promptly to reduce the overall attack surface.",
    tags_en: ["Microsoft", "Patch Tuesday", "CVE", "Windows", "Office", "Security Patching"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178797", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11152",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 153 大改版修補 230 個漏洞，警惕 V8 記憶體越界寫入漏洞 CVE-2026-87491",
    summary: "Google 發布 Chrome 153 大改版，共修補 230 個漏洞，包含 5 個重大、41 個高風險、133 個中度及 51 個低風險漏洞。用戶應儘速更新至適用版本（Windows/macOS 為 153.0.8010.36 或 153.0.8010.37；Linux/Android 為 153.0.8010.36）。其中，CVE-2026-87491 是一個已遭利用的 V8 JavaScript 引擎記憶體越界寫入弱點，雖然 Google 評為中度風險，但攻擊者可透過特製 HTML 網頁觸發，並在瀏覽器沙箱執行任意程式碼。此前 Google 也修補了另一個 V8 零時差漏洞 CVE-2026-85046，同樣可執行任意程式碼。除了 Chrome，基於 Chrome 核心的瀏覽器如 Edge、Brave、Vivadli 等用戶也應留意並及時更新修補。",
    tags: ["Google Chrome", "CVE-2026-87491", "V8", "記憶體越界寫入", "瀏覽器漏洞", "零時差漏洞"],
    title_en: "Google Chrome 153 Major Update Patches 230 Vulnerabilities, Beware of V8 Memory Out-of-Bounds Write Vulnerability CVE-2026-87491",
    summary_en: "Google has released Chrome 153 with patches for a total of 230 vulnerabilities, including 5 critical, 41 high, 133 medium, and 51 low-risk flaws. Users should update promptly to the applicable version (153.0.8010.36 or 153.0.8010.37 for Windows/macOS; 153.0.8010.36 for Linux/Android). Among these, CVE-2026-87491 is an exploited V8 JavaScript engine memory out-of-bounds write weakness. Although Google rates it as medium risk, attackers can trigger it using a specially crafted HTML page to execute arbitrary code within the browser sandbox. Previously, Google also patched another V8 zero-day vulnerability, CVE-2026-85046, which could also execute arbitrary code. Besides Chrome, users of browsers based on the Chrome core, such as Edge, Brave, and Vivadli, should also pay attention and update promptly.",
    tags_en: ["Google Chrome", "CVE-2026-87491", "V8", "Memory Out-of-Bounds Write", "Browser Vulnerability", "Zero-Day Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178795", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11189",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將N-able N-central的預認證RCE漏洞（CVE-2026-86218）列入KEV清單，要求聯邦機構緊急修補",
    summary: "美國網路安全基礎設施安全局（CISA）已將一個影響 N-able N-central 的嚴重安全漏洞 CVE-2026-86218，列入其已知已被利用漏洞（KEV）目錄。此漏洞被描述為靜態程式碼注入（static code injection），可導致預認證遠端程式碼執行（pre-authentication remote code execution），CVSS 分數為 10.0。N-able 已於 2026 年 9 月 5 日發布 N-central 2026.3 Hotfix 4 來修補此漏洞。該漏洞的曝光，是在 Huntress 報告某客戶的 N-central 實例於 2026 年 9 月 4 日遭到入侵之後。雖然 N-able 警告 CVE-2026-86218 已在野外被觀察到利用，但調查人員指出，入侵行為可能涉及此漏洞，或與其他兩個已修補的漏洞（CVE-2026-86206 和 CVE-2026-86207）有關。建議所有用戶應立即應用 N-able 提供的熱修補程式，以防範被利用。",
    tags: ["N-able N-central", "CVE-2026-86218", "CISA", "KEV", "RCE", "靜態程式碼注入"],
    title_en: "CISA Lists N-able N-central Pre-Authentication RCE Vulnerability (CVE-2026-86218) in KEV Catalog, Urging Federal Agencies to Patch",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has added a critical vulnerability, CVE-2026-86218, affecting N-able N-central, to its Known Exploited Vulnerabilities (KEV) catalog. This vulnerability is described as a static code injection flaw that could lead to pre-authentication remote code execution (RCE), carrying a CVSS score of 10.0. N-able released N-central 2026.3 Hotfix 4 on September 5, 2026, to patch this vulnerability. The flaw was exposed after Huntress reported an N-central instance of a client being compromised on September 4, 2026. Although N-able warned that CVE-2026-86218 had been observed exploited in the wild, investigators suggest that the compromise may involve this vulnerability or could be related to two other patched flaws (CVE-2026-86206 and CVE-2026-86207). All users are advised to immediately apply the hotfix provided by N-able to prevent exploitation.",
    tags_en: ["N-able N-central", "CVE-2026-86218", "CISA", "KEV", "RCE", "Static Code Injection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/n-able-n-central-pre-auth-rce-flaw.html", lang: "EN" }
    ]
  },
  {
    id: "20260909-11210",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "libpcap 1.10.7 修復七大漏洞：修復 BPF 語解釋器越界讀寫與資源洩漏風險",
    summary: "libpcap 釋出 1.10.7 版本，修復了包括 CVE-2026-0799、CVE-2026-31912 等七個漏洞。這些漏洞主要集中在 BPF（Berkeley Packet Filter）語解釋器，存在越界讀寫、除零、無限循環等風險。例如，CVE-2026-0799 允許惡意過濾程式在 64 位元架構上嘗試讀寫 OS 進程記憶體，而 CVE-2026-31912 存在越界讀取風險。此外，還修復了 rcapd 服務的記憶體洩漏（CVE-2026-18313）和客戶端處理訊息時的緩衝區驗證問題（CVE-2026-18238）。使用者應立即升級至 1.10.7 版本。對於使用 `bpf_filter()` 的應用程式，必須遷移到 `pcap_offline_filter()` 以確保修復生效。同時，開發者需注意遠端封包擷取功能仍為實驗性代碼，不適用於生產環境。",
    tags: ["libpcap", "CVE-2026-0799", "CVE-2026-31912", "BPF", "網路安全", "韌體漏洞"],
    title_en: "libpcap 1.10.7 Patches Seven Vulnerabilities: Fixing BPF Interpreter Out-of-Bounds Read/Write and Resource Leak Risks",
    summary_en: "libpcap has released version 1.10.7, which patches seven vulnerabilities, including CVE-2026-0799 and CVE-2026-31912. These vulnerabilities primarily affect the BPF (Berkeley Packet Filter) interpreter, posing risks such as out-of-bounds read/write, division by zero, and infinite loops. For instance, CVE-2026-0799 allows malicious filter programs to attempt reading and writing OS process memory on a 64-bit architecture, while CVE-2026-31912 contains an out-of-bounds read risk. Additionally, the release fixes a memory leak in the rcapd service (CVE-2026-18313) and a buffer validation issue when the client processes messages (CVE-2026-18238). Users should immediately upgrade to version 1.10.7. Applications using `bpf_filter()` must migrate to `pcap_offline_filter()` to ensure the patches take effect. Developers should also note that the remote packet capture functionality remains experimental code and is not suitable for production environments.",
    tags_en: ["libpcap", "CVE-2026-0799", "CVE-2026-31912", "BPF", "Cybersecurity", "Firmware Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/09/2", lang: "EN" }
    ]
  },
  {
    id: "20260909-11211",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "libfuse 升級至 3.18.3 修復多項核心漏洞，強化掛載點與權限控制",
    summary: "libfuse 釋出版本 3.18.3，修復了多個與檔案系統掛載、權限管理及路徑解析相關的安全性漏洞。本次修補重點包括：修復了 `fusermount3` 在處理掛載點時，因符號連結（symlink）可能導致掛載點被重定向的風險，以及在執行自動解除掛載探測時，可能以 root 權限開啟攻擊者指定路徑的問題。此外，修補了 `mount_util` 處理參數向量時，可能允許未授權呼叫者控制 `mount(8)` 系統呼叫參數的漏洞。其他修補包括限制 `fuse_session_custom_io()` 的使用，防止非核心的 I/O 模擬器造成檔案系統崩潰或資料損壞；以及強化了 `fusermount3` 在處理 unmount 路徑時，確保權限降級的正確性。這些修補旨在提高 FUSE 檔案系統的穩定性、安全性和權限隔離能力，建議使用 3.18.3 或更高版本。",
    tags: ["libfuse", "fuse", "掛載點漏洞", "權限提升", "CVE", "檔案系統"],
    title_en: "libfuse upgraded to 3.18.3 to fix multiple core vulnerabilities, strengthening mount point and permission control",
    summary_en: "libfuse has released version 3.18.3, which fixes multiple security vulnerabilities related to file system mounting, permission management, and path resolution. Key fixes in this release include: addressing the risk where `fusermount3` might redirect a mount point when processing symbolic links, and the issue where automatic unmount detection could potentially open attacker-specified paths with root privileges. Furthermore, a vulnerability was patched in `mount_util` that could allow unauthorized callers to control the parameters of the `mount(8)` system call. Other fixes include restricting the use of `fuse_session_custom_io()` to prevent non-core I/O emulators from causing file system crashes or data corruption; and strengthening `fusermount3` when handling unmount paths to ensure correct privilege degradation. These patches aim to enhance the stability, security, and permission isolation capabilities of the FUSE file system. Users are advised to use version 3.18.3 or higher.",
    tags_en: ["libfuse", "fuse", "mount point vulnerability", "privilege escalation", "CVE", "file system"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/09/1", lang: "EN" }
    ]
  },
  {
    id: "20260909-11252",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳推出 iPhone Ultra 可折疊機型，預計採用 Touch ID 並強調極低可見折痕",
    summary: "根據市場傳聞，Apple 即將發表首款折疊式 iPhone，代號可能為 iPhone Ultra。該機型預計的起價從最初的 $1,999 上升至 $2,199，高配版本甚至可能達到 $3,000。在安全功能方面，傳聞指出 iPhone Ultra 將採用 Touch ID 取代 Face ID。此外，Apple 致力於解決折疊螢幕的折痕問題，據報導已開發出「先進鈦金屬與鋁合金<0xE9><0x89><0xB8>鏈系統」搭配自定義保護玻璃，目標是打造出比市面現有折疊機更不顯眼的折痕。在配件支援方面，MagSafe 功能也預計會整合至此折疊機型。然而，由於 eSIM-only 的設計，該機型在中國大陸的發布時間可能會延後。",
    tags: ["Apple", "iPhone Ultra", "折疊螢幕", "Touch ID", "MagSafe", "eSIM"],
    title_en: "Apple Rumored to Launch Foldable iPhone Ultra, Expected to Use Touch ID and Feature Minimal Crease",
    summary_en: "According to market rumors, Apple is preparing to release its first foldable iPhone, potentially codenamed iPhone Ultra. The expected starting price is rumored to increase from an initial $1,999 to $2,199, with high-end versions possibly reaching $3,000. Regarding security features, reports indicate that the iPhone Ultra will adopt Touch ID, replacing Face ID. Furthermore, Apple is focused on solving the crease issue inherent in foldable screens. It is reported that the company has developed an 'advanced titanium and aluminum alloy chain system' combined with a custom protective glass, aiming to create a crease that is less visible than current foldable devices on the market. In terms of accessories, MagSafe functionality is also expected to be integrated into this foldable model. However, due to its eSIM-only design, the launch of this model in mainland China may be delayed.",
    tags_en: ["Apple", "iPhone Ultra", "Foldable Screen", "Touch ID", "MagSafe", "eSIM"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/08/iphone-ultra-is-coming-heres-what-the-final-rumors-are-saying", lang: "EN" }
    ]
  },
  {
    id: "20260909-11147",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Truffle Security警告：大量AWS存取金鑰持續外洩，逾9,300個仍具高權限",
    summary: "資安公司Truffle Security發布報告，追蹤自2022年8月至2026年8月間公開洩漏的AWS存取金鑰。研究人員從Git儲存庫、Hugging Face資料集、Docker映像檔等公開來源，總共發現了64,024個AWS金鑰，對應50,654個AWS帳號。其中，超過9,300個金鑰至今仍有效，且有數百個金鑰擁有企業AWS帳號的完整管理權限。特別值得注意的是，有768個金鑰具備企業帳戶的完整控制權限，包括526個AWS root金鑰和242個具備AdministratorAccess權限的IAM使用者金鑰。報告指出，這些憑證一旦被攻擊者取得，可能導致存取、竊取或刪除雲端資料、控制伺服器與應用程式，甚至建立持久存取。此外，研究發現許多金鑰存在時間過長，其中86%從未輪替。Truffle Security強調，金鑰外洩主要源於開發人員將憑證提交至公開程式碼或資料集，建議組織應立即實施金鑰管理流程，並定期輪替所有存取憑證。",
    tags: ["Truffle Security", "AWS", "存取金鑰", "雲端安全", "Git", "Hugging Face"],
    title_en: "Truffle Security Warns: Over 9,300 AWS Access Keys Still Leaking, Many Possessing High Privileges",
    summary_en: "Cybersecurity firm Truffle Security released a report tracking AWS access keys leaked publicly between August 2022 and August 2026. Researchers found a total of 64,024 AWS keys, corresponding to 50,654 AWS accounts, from public sources such as Git repositories, Hugging Face datasets, and Docker images. Of these, over 9,300 keys are still active, and several hundred keys possess full administrative privileges for corporate AWS accounts. Notably, 768 keys have full control over corporate accounts, including 526 AWS root keys and 242 IAM user keys with AdministratorAccess privileges. The report warns that if attackers obtain these credentials, it could lead to accessing, stealing, or deleting cloud data, controlling servers and applications, or even establishing persistent access. Furthermore, the research found that many keys have been active for extended periods, with 86% never having been rotated. Truffle Security emphasizes that key leakage primarily stems from developers submitting credentials to public code or datasets, and advises organizations to immediately implement key management processes and regularly rotate all access credentials.",
    tags_en: ["Truffle Security", "AWS", "Access Keys", "Cloud Security", "Git", "Hugging Face"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178805", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11386",
    trackers: ["os", "security"],
    category: "Android",
    title: "Chrome 瀏覽器於 Android 平台 WebGL 存在越界寫入漏洞，可能導致遠端執行任意程式碼",
    summary: "Google Chrome 瀏覽器在 Android 平台版本 153.0.8010.36 之前的版本中，於 WebGL 介面存在一個越界寫入（Out of bounds write）的漏洞。此漏洞被評定為嚴重（Critical），允許遠端攻擊者透過精心構造的 HTML 頁面，在不離開沙盒環境的前提下，執行任意程式碼。攻擊者可利用此漏洞在 Chrome 瀏覽器中提升權限，造成嚴重的資安風險。Google 建議使用者應立即更新 Chrome 瀏覽器至 153.0.8010.36 或更高版本，以修補此 WebGL 相關的越界寫入漏洞，確保瀏覽器安全。",
    tags: ["Google Chrome", "Android", "WebGL", "CVE-2026-87438", "越界寫入", "瀏覽器安全"],
    title_en: "Chrome Browser WebGL Out-of-Bounds Write Vulnerability on Android Could Lead to Arbitrary Remote Code Execution",
    summary_en: "Google Chrome on Android versions prior to 153.0.8010.36 contains an out-of-bounds write vulnerability in the WebGL interface. This vulnerability is rated as Critical, allowing a remote attacker to execute arbitrary code by loading a specially crafted HTML page, all without leaving the sandbox environment. An attacker could exploit this vulnerability to elevate privileges within Chrome, posing a severe security risk. Google recommends that users immediately update Chrome to version 153.0.8010.36 or later to patch this WebGL-related out-of-bounds write vulnerability and ensure browser security.",
    tags_en: ["Google Chrome", "Android", "WebGL", "CVE-2026-87438", "Out-of-bounds write", "Browser Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87438", lang: "EN" }
    ]
  },
  {
    id: "20260909-11387",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome 在 Android 上的憑證驗證錯誤，可能讓遠端攻擊者偽造網址列",
    summary: "Google Chrome 在 Android 平台版本 153.0.8010.36 之前的版本中，存在一個憑證授權驗證的錯誤。此漏洞允許遠端攻擊者透過精心構造的網路流量，潛在地偽造瀏覽器網址列的顯示內容。此安全問題的嚴重性被評定為低風險（Low）。受影響的產品為 Google Chrome 瀏覽器，主要影響 Android 作業系統的用戶。為修補此漏洞，使用者應立即更新 Google Chrome 至 153.0.8010.36 或更高版本，以確保憑證驗證機制得到正確修復，防止網址列被惡意偽造。",
    tags: ["Google Chrome", "Android", "憑證驗證", "CVE-2026-87463", "Chromium"],
    title_en: "Certificate Validation Flaw in Google Chrome on Android Could Allow Remote Attacker to Spoof URL Bar",
    summary_en: "Google Chrome versions prior to 153.0.8010.36 on the Android platform contain a certificate validation error. This vulnerability allows a remote attacker, through carefully crafted network traffic, to potentially spoof the displayed content of the browser's URL bar. The severity of this security issue is rated as Low. The affected product is the Google Chrome browser, primarily impacting users of the Android operating system. To patch this vulnerability, users should immediately update Google Chrome to version 153.0.8010.36 or higher to ensure the certificate validation mechanism is correctly fixed and prevent the URL bar from being maliciously spoofed.",
    tags_en: ["Google Chrome", "Android", "Certificate Validation", "CVE-2026-87463", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87463", lang: "EN" }
    ]
  },
  {
    id: "20260909-11388",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android WebView 存在授權不足漏洞，可能允許遠端執行任意程式碼",
    summary: "Google Chrome 在 Android 平台上的 WebView 元件，在版本低於 153.0.8010.36 的情況下，存在授權不足（Incorrect authorization）的漏洞。此漏洞允許已成功入侵渲染器程序（renderer process）的遠端攻擊者，透過精心構造的 HTML 頁面，潛在地在沙盒（sandbox）外部執行任意程式碼。此安全問題的嚴重性被評定為中等（Medium）。建議使用者應立即更新至版本 153.0.8010.36 或更高版本，以修補此漏洞，避免遭受遠端程式碼執行攻擊。",
    tags: ["Google Chrome", "WebView", "Android", "CVE-2026-87481", "授權不足", "遠端程式碼執行"],
    title_en: "Google Chrome Android WebView has insufficient authorization vulnerability, potentially allowing remote arbitrary code execution",
    summary_en: "The WebView component within Google Chrome on the Android platform contains an insufficient authorization vulnerability in versions lower than 153.0.8010.36. This vulnerability allows a remote attacker, who has successfully compromised the renderer process, to potentially execute arbitrary code outside the sandbox using a specially crafted HTML page. The severity of this security issue is rated as Medium. Users are advised to immediately update to version 153.0.8010.36 or higher to patch this vulnerability and prevent remote code execution attacks.",
    tags_en: ["Google Chrome", "WebView", "Android", "CVE-2026-87481", "Insufficient Authorization", "Remote Code Execution"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87481", lang: "EN" }
    ]
  },
  {
    id: "20260909-11389",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器存在權限不足漏洞，可透過惡意 HTML 頁面繞過系統限制",
    summary: "Google Chrome 在 Android 平台上的瀏覽器元件，版本早於 153.0.8010.36，存在一個權限不足（Incorrect authorization）的漏洞。此漏洞允許遠端攻擊者透過精心設計的 HTML 頁面，繞過系統的存取限制，進而執行惡意操作。該漏洞的嚴重性被評定為中等（Medium）。受影響的產品為 Google Chrome 瀏覽器在 Android 系統上的運行環境。修補建議是使用者應立即更新 Chrome 瀏覽器至 153.0.8010.36 或更高版本，以修補此瀏覽器元件的安全缺陷，避免遭受遠端攻擊。",
    tags: ["Google Chrome", "Android", "權限不足", "CVE-2026-87483", "Chromium"],
    title_en: "Google Chrome Android Browser Has Privilege Escalation Vulnerability, Bypass System Restrictions via Malicious HTML Page",
    summary_en: "The Google Chrome browser component on the Android platform, versions prior to 153.0.8010.36, contains an incorrect authorization vulnerability. This flaw allows a remote attacker to bypass system access restrictions and execute malicious operations using a specially crafted HTML page. The vulnerability is rated as Medium severity. The affected product is the Google Chrome browser running on the Android operating system. Users are advised to immediately update Chrome to version 153.0.8010.36 or later to patch this browser component's security flaw and prevent remote exploitation.",
    tags_en: ["Google Chrome", "Android", "Incorrect authorization", "CVE-2026-87483", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87483", lang: "EN" }
    ]
  },
  {
    id: "20260909-11390",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器存在 Clickjacking 漏洞，可能透過共安裝應用程式偽造網址列",
    summary: "Google Chrome 在 Android 平台上的 TrustedWebActivities 功能，在版本 153.0.8010.36 之前的版本中，存在 Clickjacking 漏洞。此漏洞允許本地攻擊者透過共安裝的應用程式（co-installed app）來偽造瀏覽器的網址列。這類漏洞屬於 Chromium 安全等級的「中等」風險。實務上，攻擊者可能利用此機制進行釣魚或資訊竊取，誤導使用者進入惡意網站。建議使用者應立即更新 Google Chrome 至 153.0.8010.36 或更高版本，以修補此安全漏洞。",
    tags: ["Google Chrome", "Android", "Clickjacking", "TrustedWebActivities", "Chromium"],
    title_en: "Clickjacking Vulnerability Found in Google Chrome Android Browser, Potentially Allowing URL Bar Spoofing via Co-installed Apps",
    summary_en: "The TrustedWebActivities feature of Google Chrome on the Android platform, in versions prior to 153.0.8010.36, contains a Clickjacking vulnerability. This vulnerability allows a local attacker to spoof the browser's address bar using a co-installed application. This type of vulnerability is rated as 'Medium' risk by Chromium security standards. In practice, attackers could exploit this mechanism for phishing or information theft, misleading users into malicious websites. Users are advised to immediately update Google Chrome to version 153.0.8010.36 or higher to patch this security flaw.",
    tags_en: ["Google Chrome", "Android", "Clickjacking", "TrustedWebActivities", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87486", lang: "EN" }
    ]
  },
  {
    id: "20260909-11391",
    trackers: ["os", "security"],
    category: "Android",
    title: "Chrome 瀏覽器於 Android 平台 WebGL 存在 Use-after-free 漏洞，可能導致遠端執行任意程式碼",
    summary: "Google Chrome 瀏覽器在 Android 平台版本 153.0.8010.36 之前，於 WebGL 相關功能中存在一個 Use-after-free 漏洞。此漏洞被評定為 Chromium 安全嚴重等級：Critical。攻擊者可透過精心設計的 HTML 頁面，利用此漏洞讓遠端攻擊者在沙盒（sandbox）外部執行任意程式碼。本漏洞的修補建議是升級至 Chrome 瀏覽器 153.0.8010.36 或更高版本，以確保 WebGL 相關功能的安全。由於原文未提供 CVSS 分數或具體影響範圍，建議使用者應立即更新瀏覽器以防範風險。",
    tags: ["Google Chrome", "Android", "WebGL", "Use-after-free", "Chromium", "CVE-2026-87488"],
    title_en: "Chrome Browser on Android Platform Has Use-after-free Vulnerability in WebGL, Potentially Leading to Arbitrary Remote Code Execution",
    summary_en: "Google Chrome browser versions prior to 153.0.8010.36 on the Android platform contain a Use-after-free vulnerability within WebGL-related functionality. This vulnerability has been assessed as Critical severity by Chromium. An attacker can exploit this flaw using a specially crafted HTML page to allow a remote attacker to execute arbitrary code outside the sandbox. The recommended fix is to upgrade to Chrome browser version 153.0.8010.36 or later to ensure the security of WebGL-related functions. Since the original text did not provide a CVSS score or specific impact scope, users are advised to update their browser immediately to prevent risk.",
    tags_en: ["Google Chrome", "Android", "WebGL", "Use-after-free", "Chromium", "CVE-2026-87488"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87488", lang: "EN" }
    ]
  },
  {
    id: "20260909-11392",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 版本漏洞：透過惡意 HTML 頁面繞過系統存取限制",
    summary: "Google Chrome 在 Android 平台上的 Downloads 功能，在版本早於 153.0.8010.36 的情況下，存在不當實作的漏洞。此漏洞允許遠端攻擊者利用社交工程學手法，透過精心設計的 HTML 頁面，繞過系統的存取限制。攻擊的嚴重性被評定為中等（Medium）。實務上，攻擊者可利用此漏洞誘騙用戶訪問惡意頁面，從而達到繞過系統安全限制的目的。為修補此漏洞，使用者應立即將 Google Chrome 瀏覽器更新至 153.0.8010.36 或更高版本，以確保系統安全。",
    tags: ["Google Chrome", "Android", "Downloads", "HTML", "CVE-2026-87503"],
    title_en: "Google Chrome Android Version Vulnerability: Bypassing System Access Restrictions via Malicious HTML Page",
    summary_en: "The Downloads feature in Google Chrome on the Android platform contains an improper implementation vulnerability in versions prior to 153.0.8010.36. This vulnerability allows a remote attacker to bypass system access restrictions using social engineering techniques via a carefully designed HTML page. The severity of the attack is rated as Medium. In practice, an attacker can exploit this vulnerability to trick users into visiting a malicious page, thereby achieving the goal of bypassing system security limitations. To patch this vulnerability, users should immediately update the Google Chrome browser to version 153.0.8010.36 or higher to ensure system security.",
    tags_en: ["Google Chrome", "Android", "Downloads", "HTML", "CVE-2026-87503"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87503", lang: "EN" }
    ]
  },
  {
    id: "20260909-11393",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器曝 Use-after-free 漏洞，可能允許遠端執行任意程式碼",
    summary: "Google Chrome 在 Android 平台上的瀏覽器核心，在版本 153.0.8010.36 之前的版本中，存在一個 Use-after-free 漏洞。此漏洞位於 Dawn 模組，允許遠端攻擊者透過精心構造的 HTML 頁面，在沙盒外部執行任意程式碼。此漏洞的安全性嚴重等級被評定為 High。實務上，攻擊者可利用此漏洞進行遠端代碼執行（RCE），可能導致設備安全風險。建議使用者應立即更新 Google Chrome 瀏覽器至 153.0.8010.36 或更高版本，以修補此安全漏洞。",
    tags: ["Google Chrome", "Android", "Use-after-free", "Dawn", "RCE", "Chromium"],
    title_en: "Google Chrome Android Browser Exposed to Use-after-free Vulnerability, Potentially Allowing Remote Code Execution",
    summary_en: "The browsing core of Google Chrome on the Android platform contains a Use-after-free vulnerability in versions prior to 153.0.8010.36. This vulnerability resides in the Dawn module and allows a remote attacker to execute arbitrary code outside the sandbox by loading a specially crafted HTML page. The severity of this vulnerability is rated as High. Practically, an attacker can exploit this vulnerability to achieve Remote Code Execution (RCE), potentially leading to device security risks. Users are advised to immediately update Google Chrome browser to version 153.0.8010.36 or higher to patch this security flaw.",
    tags_en: ["Google Chrome", "Android", "Use-after-free", "Dawn", "RCE", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87520", lang: "EN" }
    ]
  },
  {
    id: "20260909-11394",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android WebView 存在未經授權存取漏洞，可能遭遠端攻擊者利用",
    summary: "Google Chrome 在 Android 平台上的 WebView 元件，在版本 153.0.8010.36 之前的版本中，存在一個未經授權的存取（Missing authorization）漏洞。此漏洞允許遠端攻擊者透過精心構造的網路流量，潛在地繞過系統存取限制。攻擊者可能結合社工手法，利用此漏洞來執行攻擊。此漏洞的嚴重性被評定為低（Low）。修補建議是升級至 Google Chrome 支援的 WebView 版本 153.0.8010.36 或更高版本，以修復此安全缺陷。",
    tags: ["Google Chrome", "WebView", "Android", "CVE-2026-87522", "遠端攻擊"],
    title_en: "Google Chrome Android WebView has unauthorized access vulnerability, potentially exploitable by remote attackers",
    summary_en: "The WebView component within Google Chrome on the Android platform, in versions prior to 153.0.8010.36, contains an unauthorized access (Missing authorization) vulnerability. This flaw allows remote attackers to potentially bypass system access restrictions using carefully crafted network traffic. Attackers may combine this vulnerability with social engineering techniques to execute an attack. The severity of this vulnerability is rated as Low. The recommended fix is to upgrade to WebView version 153.0.8010.36 or higher, supported by Google Chrome, to patch this security flaw.",
    tags_en: ["Google Chrome", "WebView", "Android", "CVE-2026-87522", "Remote Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87522", lang: "EN" }
    ]
  },
  {
    id: "20260909-11395",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android WebView 存在權限缺失漏洞，可透過網路流量繞過系統存取限制",
    summary: "Google Chrome 在 Android 平台上的 WebView 元件，在版本低於 153.0.8010.36 的情況下，存在一個權限缺失（Missing authorization）的漏洞。此漏洞允許遠端攻擊者透過精心構造的網路流量，並結合社交工程手法，繞過系統的存取限制。該漏洞的嚴重性被評定為中等（Medium）。若使用者瀏覽器或應用程式使用了受影響版本的 WebView，則可能面臨被遠端攻擊者利用的風險。修補建議是將 Google Chrome 的 WebView 元件更新至 153.0.8010.36 或更高版本，以修復此權限缺失問題，確保系統的存取控制機制完整性。",
    tags: ["Google Chrome", "WebView", "Android", "CVE-2026-87534", "權限缺失", "網路流量"],
    title_en: "Google Chrome Android WebView has Missing Authorization vulnerability, potentially bypasses system access restrictions via network traffic",
    summary_en: "The WebView component within Google Chrome on the Android platform has a Missing authorization vulnerability in versions lower than 153.0.8010.36. This vulnerability allows a remote attacker to bypass system access restrictions by combining specially crafted network traffic with social engineering techniques. The vulnerability is rated as Medium severity. Users who utilize the affected version of the WebView in their browser or application may face the risk of exploitation by a remote attacker. The recommended fix is to update the Google Chrome WebView component to version 153.0.8010.36 or higher to patch this missing authorization issue and ensure the integrity of the system's access control mechanisms.",
    tags_en: ["Google Chrome", "WebView", "Android", "CVE-2026-87534", "Missing Authorization", "Network Traffic"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87534", lang: "EN" }
    ]
  },
  {
    id: "20260909-11396",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome 在 Android 上的 TrustedWebActivities 缺乏授權，可能讓本地攻擊者竊取敏感資訊",
    summary: "Google Chrome 在 Android 平台上的 TrustedWebActivities 功能，在版本早於 153.0.8010.36 時存在一個安全漏洞。此漏洞屬於權限不足（Missing authorization），允許本地攻擊者透過共安裝的應用程式（co-installed app）取得敏感資訊。該漏洞的嚴重性被評定為高（High）。建議使用者應立即更新 Google Chrome 至 153.0.8010.36 或更高版本，以修補此權限缺失問題，防止本地攻擊者利用此路徑竊取用戶的敏感資料。",
    tags: ["Google Chrome", "Android", "TrustedWebActivities", "CVE-2026-87552", "權限不足", "本地攻擊"],
    title_en: "Google Chrome's TrustedWebActivities on Android Lacks Authorization, Potentially Allowing Local Data Theft",
    summary_en: "A security vulnerability was found in Google Chrome's TrustedWebActivities feature on the Android platform in versions prior to 153.0.8010.36. This vulnerability is classified as Missing authorization, allowing a local attacker to obtain sensitive information via a co-installed application. The severity of this vulnerability is rated as High. Users are advised to immediately update Google Chrome to version 153.0.8010.36 or later to patch this authorization deficiency and prevent local attackers from stealing user sensitive data.",
    tags_en: ["Google Chrome", "Android", "TrustedWebActivities", "CVE-2026-87552", "Missing authorization", "Local attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87552", lang: "EN" }
    ]
  },
  {
    id: "20260909-11397",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome 在 Android 上的 GPU 資源未初始化漏洞 (CVE-2026-87555)",
    summary: "Google Chrome 在 Android 平台上，版本早於 153.0.8010.36，存在一個 GPU 資源未初始化（Uninitialized resource）的漏洞。此漏洞允許遠端攻擊者透過精心構造的 HTML 頁面，讀取沙盒（sandbox）以外的記憶體內容。該漏洞的嚴重性被評定為中等（Medium）。受影響的產品為 Google Chrome 在 Android 上的運行環境。攻擊向量為遠端，且無需本地權限。修補建議是升級至 Chrome 版本 153.0.8010.36 或更高版本，以修復此記憶體讀取漏洞。",
    tags: ["Google Chrome", "Android", "GPU", "CVE-2026-87555", "記憶體讀取"],
    title_en: "Google Chrome on Android: GPU Resource Uninitialized Vulnerability (CVE-2026-87555)",
    summary_en: "Google Chrome on the Android platform, in versions earlier than 153.0.8010.36, contains an uninitialized GPU resource vulnerability. This vulnerability allows a remote attacker to read memory contents outside the sandbox by loading a specially crafted HTML page. The vulnerability is rated as Medium severity. The affected product is the Google Chrome runtime environment on Android. The attack vector is remote, and no local privileges are required. The recommended fix is to upgrade to Chrome version 153.0.8010.36 or later to patch this memory read vulnerability.",
    tags_en: ["Google Chrome", "Android", "GPU", "CVE-2026-87555", "Memory Read"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87555", lang: "EN" }
    ]
  },
  {
    id: "20260909-11398",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器資訊洩漏漏洞 (CVE-2026-87565) 警示",
    summary: "Google Chrome 在 Android 平台上的版本 153.0.8010.36 之前的版本，存在一個資訊洩漏漏洞。此漏洞允許遠端攻擊者透過精心構造的 HTML 頁面，竊取用戶的敏感資訊。該漏洞的嚴重性被評定為低風險 (Low)。修補建議是升級至 153.0.8010.36 或更高版本的 Google Chrome 瀏覽器，以避免遭受此類資訊洩漏攻擊。由於原文未提供具體的 CVSS 分數、影響範圍或修補時間表，建議用戶應立即更新瀏覽器以確保資料安全。",
    tags: ["Google Chrome", "Android", "資訊洩漏", "CVE-2026-87565", "Chromium"],
    title_en: "Google Chrome Android Browser Information Leak Vulnerability (CVE-2026-87565) Alert",
    summary_en: "Versions of Google Chrome on the Android platform prior to 153.0.8010.36 contain an information leak vulnerability. This flaw allows a remote attacker to steal sensitive user information by utilizing a specially crafted HTML page. The vulnerability has been rated as Low severity. The recommended remediation is to upgrade to Google Chrome browser version 153.0.8010.36 or later to prevent potential information leak attacks. Since the original text did not provide specific CVSS scores, impact scope, or patch timelines, users are advised to update their browser immediately to ensure data security.",
    tags_en: ["Google Chrome", "Android", "Information Leak", "CVE-2026-87565", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87565", lang: "EN" }
    ]
  },
  {
    id: "20260909-11399",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome 在 Android 上的 GPU 資源未初始化漏洞 (CVE-2026-87576)",
    summary: "Google Chrome 在 Android 平台版本 153.0.8010.36 之前的版本中，存在一個 GPU 資源未初始化（Uninitialized resource）的漏洞。此漏洞允許已遭遠端攻擊者利用並成功入侵渲染器程序（renderer process）的攻擊者，透過精心構造的 HTML 頁面，讀取沙盒（sandbox）以外的記憶體。這屬於中等安全等級的漏洞（Chromium security severity: Medium）。受影響的產品為 Google Chrome 在 Android 上的運行版本。修補建議是升級至 153.0.8010.36 或更高版本，以修復此記憶體讀取漏洞，防止攻擊者繞過沙盒機制。",
    tags: ["Google Chrome", "Android", "GPU", "CVE-2026-87576", "Chromium", "記憶體讀取"],
    title_en: "Google Chrome on Android has GPU Resource Uninitialized Vulnerability (CVE-2026-87576)",
    summary_en: "Google Chrome on the Android platform, in versions prior to 153.0.8010.36, contains a GPU resource uninitialized vulnerability. This vulnerability allows an attacker, who has been successfully exploited by a remote attacker and has gained access to the renderer process, to read memory outside the sandbox by using a specially crafted HTML page. This is classified as a medium security severity vulnerability (Chromium security severity: Medium). The affected product is the Google Chrome running on Android. The recommended fix is to upgrade to version 153.0.8010.36 or later to patch this memory read vulnerability and prevent attackers from bypassing the sandbox mechanism.",
    tags_en: ["Google Chrome", "Android", "GPU", "CVE-2026-87576", "Chromium", "Memory Read"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87576", lang: "EN" }
    ]
  },
  {
    id: "20260909-11400",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器存在 UI 誤呈現漏洞，遠端攻擊者可偽造介面元素",
    summary: "Google Chrome 在 Android 平台版本 153.0.8010.36 之前的版本中，存在一個 UI 誤呈現（UI misrepresentation）漏洞。此漏洞允許遠端攻擊者透過精心構造的 HTML 頁面，偽造或操縱瀏覽器介面元素。該漏洞的嚴重性被評定為低（Low）。若用戶瀏覽器版本未更新至修補版本，可能面臨惡意網站偽造的風險。建議用戶應立即將 Google Chrome 瀏覽器更新至 153.0.8010.36 或更高版本，以修補此安全漏洞，避免遭受介面欺騙攻擊。",
    tags: ["Google Chrome", "Android", "UI misrepresentation", "CVE-2026-87583", "Chromium"],
    title_en: "UI Misrepresentation Vulnerability Found in Google Chrome Android Browser, Allowing Remote Attackers to Forge Interface Elements",
    summary_en: "Google Chrome on the Android platform, in versions prior to 153.0.8010.36, contains a UI misrepresentation vulnerability. This flaw allows remote attackers to forge or manipulate browser interface elements using a specially crafted HTML page. The vulnerability has been rated as Low severity. If users do not update their browser version to the patched version, they may face the risk of malicious website impersonation. Users are advised to immediately update Google Chrome to version 153.0.8010.36 or higher to patch this security flaw and prevent interface deception attacks.",
    tags_en: ["Google Chrome", "Android", "UI misrepresentation", "CVE-2026-87583", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87583", lang: "EN" }
    ]
  },
  {
    id: "20260909-11402",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器漏洞：輸入驗證不當導致繞過系統存取限制",
    summary: "Google Chrome 在 Android 平台上的 Safebrowsing 功能，在版本 153.0.8010.36 之前的版本中存在輸入驗證不當的漏洞。攻擊者可利用此漏洞，透過精心構造的 HTML 頁面，結合社會工程學手法，實現在遠端繞過系統的存取限制。此漏洞的嚴重性被評定為中等（Medium）。修補建議是升級至 Chrome 瀏覽器 153.0.8010.36 或更高版本，以修復 Safebrowsing 模組中的輸入驗證缺陷，防止惡意頁面利用此漏洞。",
    tags: ["Google Chrome", "Android", "Safebrowsing", "輸入驗證", "CVE-2026-87600"],
    title_en: "Google Chrome Android Browser Vulnerability: Improper Input Validation Leads to Bypass of System Access Restrictions",
    summary_en: "The Safebrowsing feature of Google Chrome on the Android platform contains an improper input validation vulnerability in versions prior to 153.0.8010.36. Attackers can exploit this vulnerability by combining a carefully crafted HTML page with social engineering techniques to achieve remote bypass of system access restrictions. The severity of this vulnerability is rated as Medium. The recommended fix is to upgrade to Chrome browser version 153.0.8010.36 or higher, which patches the input validation flaw in the Safebrowsing module and prevents malicious pages from exploiting it.",
    tags_en: ["Google Chrome", "Android", "Safebrowsing", "Input Validation", "CVE-2026-87600"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87600", lang: "EN" }
    ]
  },
  {
    id: "20260909-11403",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 瀏覽器存在 UI 偽造漏洞，可能被遠端攻擊者利用",
    summary: "Google Chrome 在 Android 平台上的版本 153.0.8010.36 之前的版本，存在一個 UI 偽造（UI misrepresentation）漏洞。此漏洞允許已經成功取得渲染器程序（renderer process）控制權的遠端攻擊者，透過精心構造的 HTML 頁面，偽造或操縱瀏覽器介面元素。該漏洞的嚴重性被評定為低（Low）。實務上，攻擊者必須先透過其他方式進入渲染器程序，才能利用此漏洞進行 UI 偽造。修補建議是升級至 Google Chrome 153.0.8010.36 或更高版本，以修復此安全缺陷。",
    tags: ["Google Chrome", "Android", "UI misrepresentation", "Chromium", "CVE-2026-87624"],
    title_en: "UI Misrepresentation Vulnerability Found in Google Chrome Android Browser",
    summary_en: "Versions of Google Chrome on the Android platform prior to 153.0.8010.36 contain a UI misrepresentation vulnerability. This flaw allows a remote attacker who has already gained control of the renderer process to fake or manipulate browser interface elements using a specially crafted HTML page. The vulnerability is rated as Low severity. Practically, an attacker must first gain access to the renderer process through another method before exploiting this vulnerability for UI misrepresentation. The recommended fix is to upgrade to Google Chrome 153.0.8010.36 or later to patch this security flaw.",
    tags_en: ["Google Chrome", "Android", "UI misrepresentation", "Chromium", "CVE-2026-87624"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87624", lang: "EN" }
    ]
  },
  {
    id: "20260909-11404",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android WebView 存在越界讀取漏洞，可能允許遠端攻擊者讀取沙盒外記憶體",
    summary: "Google Chrome 在 Android 平台上的 WebView 組件，在版本 153.0.8010.36 之前的版本中，存在一個越界讀取（Out of bounds read）漏洞。此漏洞允許已經成功入侵渲染器程序（renderer process）的遠端攻擊者，透過精心構造的 HTML 頁面，讀取到沙盒（sandbox）邊界之外的記憶體內容。該漏洞的嚴重性被評定為中等（Medium）。修補建議是升級至 153.0.8010.36 或更高版本的 Chrome/WebView 組件，以修復此記憶體安全缺陷，防止資料外洩或進一步的系統惡意行為。",
    tags: ["Google Chrome", "WebView", "Android", "Out of bounds read", "CVE-2026-87640"],
    title_en: "Google Chrome Android WebView has Out-of-bounds Read vulnerability, potentially allowing remote attackers to read memory outside the sandbox",
    summary_en: "The WebView component of Google Chrome on the Android platform contains an Out-of-bounds read vulnerability in versions prior to 153.0.8010.36. This vulnerability allows a remote attacker who has successfully compromised the renderer process to read memory content outside the sandbox boundary by utilizing a specially crafted HTML page. The vulnerability is rated as Medium severity. The recommended mitigation is to upgrade to Chrome/WebView components version 153.0.8010.36 or later to patch this memory safety flaw, preventing data leakage or further malicious system actions.",
    tags_en: ["Google Chrome", "WebView", "Android", "Out of bounds read", "CVE-2026-87640"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87640", lang: "EN" }
    ]
  },
  {
    id: "20260909-11405",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome 在 Android 上的 GPU 發生整數溢位漏洞，可能導致越獄執行任意程式碼",
    summary: "Google Chrome 在 Android 平台上的特定版本（低於 153.0.8010.36）存在一個整數溢位（Integer overflow）漏洞。此漏洞發生在 GPU 相關元件，允許遠端攻擊者透過精心構造的 HTML 頁面，潛在地在沙盒（sandbox）外部執行任意程式碼。該漏洞的嚴重性被評定為中等（Medium）。實務上，這類漏洞可能被利用來突破瀏覽器的安全隔離機制，造成更高的系統風險。用戶應立即更新 Google Chrome 至最新版本，以修補此安全漏洞，確保瀏覽器運行在安全的環境。",
    tags: ["Google Chrome", "Android", "GPU", "Integer overflow", "CVE-2026-87643", "沙盒逃逸"],
    title_en: "Integer Overflow Vulnerability in Google Chrome's Android GPU Component Could Lead to Arbitrary Code Execution",
    summary_en: "A specific version of Google Chrome on the Android platform (below 153.0.8010.36) contains an Integer overflow vulnerability. This flaw resides in the GPU-related component, allowing a remote attacker to potentially execute arbitrary code outside the sandbox using a specially crafted HTML page. The vulnerability is rated as Medium severity. In practice, such flaws could be exploited to bypass the browser's security isolation mechanisms, leading to higher system risk. Users should immediately update Google Chrome to the latest version to patch this security vulnerability and ensure the browser operates in a secure environment.",
    tags_en: ["Google Chrome", "Android", "GPU", "Integer overflow", "CVE-2026-87643", "Sandbox Escape"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-87643", lang: "EN" }
    ]
  },
  {
    id: "20260909-11154",
    trackers: ["security"],
    category: "前瞻技術",
    title: "澳洲通訊局（ASD）建議企業依風險評估，制定後量子密碼（PQC）轉型優先順序",
    summary: "澳洲通訊局（ASD）提醒企業，面對未來具備破解能力的量子電腦威脅，應提前規劃後量子密碼（PQC）轉型。ASD指出，企業不應一次處理所有系統，而是應依據風險、潛在影響及轉型可行性，制定系統的轉型優先順序。企業應首先盤點系統中所有使用傳統非對稱式密碼學的密碼學使用情況，並評估受保護系統與資料的重要性及敏感程度。影響轉型順序的關鍵因素包括：系統是否處理需要長期保護的敏感資料、是否與不可信任環境互動，以及是否高度依賴對外使用的密碼學通訊協定。ASD強調，在制定優先順序時，必須在「轉型急迫性」與「實務可行性」之間取得平衡，重點應放在優先處理那些一旦延後轉型，可能帶來最高長期風險的系統，而非僅是影響最大的系統。",
    tags: ["PQC", "後量子密碼", "澳洲通訊局", "ASD", "密碼學", "量子電腦"],
    title_en: "Australian Signals Directorate (ASD) Advises Enterprises to Prioritize Post-Quantum Cryptography (PQC) Transition Based on Risk Assessment",
    summary_en: "The Australian Signals Directorate (ASD) advises enterprises to proactively plan for the transition to Post-Quantum Cryptography (PQC) in anticipation of future quantum computers capable of breaking current encryption. ASD emphasizes that organizations should not attempt to upgrade all systems simultaneously. Instead, they must establish a transition priority order for their systems based on risk, potential impact, and feasibility of transition. Enterprises should first inventory all cryptographic usage within their systems that rely on traditional asymmetric cryptography, and assess the importance and sensitivity of the protected systems and data. Key factors influencing the transition order include: whether the system handles sensitive data requiring long-term protection, whether it interacts with untrusted environments, and whether it heavily relies on externally used cryptographic communication protocols. ASD stresses that when setting priorities, a balance must be struck between 'urgency of transition' and 'practical feasibility.' The focus should be on prioritizing systems that pose the highest long-term risk if the transition is delayed, rather than merely those with the largest immediate impact.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "Australian Signals Directorate", "ASD", "Cryptography", "Quantum Computer"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178723", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260909-11218",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "펜타시큐리티參加海灣城 GISEC Global 2026，展示AI防禦與後量子加密技術",
    summary: "펜타시큐리티宣布將於 16 日至 18 日在阿拉伯聯合大公國（UAE）杜拜 Expo City 舉行的中東・非洲網路安全展覽「GISEC Global 2026」參展。本次展會以「Cyber First: The New Digital Order」為主題，匯集了來自全球的資安專家，核心議題包括 AI 驅動的威脅、雲端安全及量子運算安全。펜타시큐리티在展位上以「Secure What Matters Most: Your Application & Your Data」為口號，重點展示了其網頁應用程式安全和資料加密產品線。展出的產品包括基於自研邏輯運算偵測引擎「COCEP」的智慧型網頁防火牆「와플(WAPPLES)」，以及填補雲端轉型期安全空隙的 SaaS 安全平台「Cloudbric」。特別值得一提的是，其加密平台「D.AMO」已將美國國家標準技術研究院（NIST）標準的後量子加密（PQC）和韓國型後量子加密（KPQC）演算法應用於所有產品，並支援與現有加密體系的混合運營，實現了分階段的加密轉換。公司指出，在 AI 降低攻擊成本和量子運算縮短現有加密壽命的時代，必須將阻斷入侵路徑的防禦與保護資產本身的防禦結合。",
    tags: ["펜타시큐리티", "GISEC Global 2026", "網頁應用程式安全", "後量子加密", "PQC", "와플(WAPPLES)"],
    title_en: "PentaSecurity to Exhibit at GISEC Global 2026 in Dubai, Showcasing AI Defense and Post-Quantum Cryptography Technology",
    summary_en: "PentaSecurity announced that it will participate in the Middle East and Africa cybersecurity exhibition, \"GISEC Global 2026,\" held from the 16th to the 18th at Expo City in the United Arab Emirates (UAE). With the theme \"Cyber First: The New Digital Order,\" the exhibition gathers cybersecurity experts from around the world, focusing on core issues such as AI-driven threats, cloud security, and quantum computing security. At its booth, PentaSecurity is promoting with the slogan \"Secure What Matters Most: Your Application & Your Data,\" highlighting its web application security and data encryption product lines. Products on display include \"WAPPLES,\" an intelligent Web Application Firewall based on its proprietary logic computation detection engine \"COCEP,\" and \"Cloudbric,\" a SaaS security platform designed to fill security gaps during cloud transformation. Notably, its encryption platform \"D.AMO\" has applied both NIST-standard Post-Quantum Cryptography (PQC) and Korea-type Post-Quantum Cryptography (KPQC) algorithms across all products, supporting hybrid operation with existing cryptographic systems to achieve phased cryptographic migration. The company stated that in an era where AI lowers the cost of attacks and quantum computing shortens the lifespan of existing encryption, defense must combine blocking intrusion paths with protecting assets themselves.",
    tags_en: ["PentaSecurity", "GISEC Global 2026", "Web Application Security", "Post-Quantum Cryptography", "PQC", "WAPPLES"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145736", lang: "EN" }
    ]
  },
  {
    id: "20260909-11219",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "이지서티「U-PRIVACY SAFER V4.0」將為警察廳「溫羅 2.0」提供個人資訊過濾解決方案",
    summary: "個人資訊保護專業企業이지서티（EasyCert）宣布，將向警察廳提供其智慧型即時偵測個人資訊過濾解決方案「U-PRIVACY SAFER V4.0」，用於警察廳將老舊的「溫羅 1.0」轉換為基於 G-Cloud 的「溫羅 2.0」系統。此解決方案包含在本次專案的直接採購商用軟體範疇，旨在預防透過文件和附件處理的個人資訊外洩。U-PRIVACY SAFER V4.0的特色是結合AI技術，能廣泛識別結構化和非結構化的個人資訊。它不僅能偵測如身分證號、護照號碼、帳戶號碼等固定模式的資訊，還應用自然語言處理（NLP）的命名實體識別（NER）技術，能透過語境識別姓名、地址、公司名稱等個人資訊。此外，它還結合AI OCR技術，能檢測包含在圖像檔案中的個人資訊。該系統能分析韓文、PDF、PPT、MS Office、壓縮檔案等多種文件和附件，一旦確認個人資訊，會根據機構政策阻擋內容登錄，從而在預先降低外洩風險。由於個人資訊包含檢測在文件撰寫或附件上傳階段自動進行，為在大量文件生成和流通的溫羅工作環境建立了技術性的個人資訊控制體系。이지서티在公部門行政業務和雲端轉換環境擁有豐富的實建經驗，曾為超過600個機構和企業提供個人資訊保護解決方案。",
    tags: ["이지서티", "U-PRIVACY SAFER V4.0", "警察廳", "온나라 2.0", "個人資訊保護", "NLP", "AI OCR"],
    title_en: "EasyCert's 'U-PRIVACY SAFER V4.0' to Provide Personal Information Filtering Solution for Police Agency's 'Onnara 2.0'",
    summary_en: "EasyCert, a professional enterprise specializing in personal information protection, announced that it will provide the Police Agency with its intelligent real-time personal information filtering solution, 'U-PRIVACY SAFER V4.0'. This solution is designed for the Police Agency's transition from the legacy 'Onnara 1.0' to the G-Cloud-based 'Onnara 2.0' system. The solution falls within the scope of direct procurement commercial software for this project, aiming to prevent the leakage of personal information processed through documents and attachments. U-PRIVACY SAFER V4.0 features the combination of AI technology to broadly identify both structured and unstructured personal information. It can not only detect fixed-pattern information such as resident registration numbers, passport numbers, and account numbers, but also applies Named Entity Recognition (NER) using Natural Language Processing (NLP) to identify personal information like names, addresses, and company names through context. Furthermore, it integrates AI OCR technology to detect personal information contained within image files. The system can analyze various document and attachment types, including Korean language, PDF, PPT, MS Office, and compressed files. Upon confirming personal information, it blocks the content from being logged according to institutional policy, thereby pre-emptively reducing the risk of leakage. Since personal information detection is performed automatically during the document creation or attachment upload stage, it establishes a technical personal information control system within the Onnara working environment, where a large volume of documents are generated and circulated. EasyCert possesses extensive practical experience in public sector administrative operations and cloud transition environments, having provided personal information protection solutions to over 600 institutions and companies.",
    tags_en: ["EasyCert", "U-PRIVACY SAFER V4.0", "Police Agency", "Onnara 2.0", "Personal Information Protection", "NLP", "AI OCR"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145739", lang: "EN" }
    ]
  },
  {
    id: "20260909-11220",
    trackers: ["security"],
    category: "產業動態",
    title: "AI 時代 API 漏洞成新威脅：攻擊速度與複雜度急劇提升，企業需強化外部攻擊面管理",
    summary: "隨著次世代 AI 模型（如 Claude, Paible, GPT 等）的發展，用於外部連動的應用程式介面（API）已成為新的安全高風險點。攻擊者正利用 AI 進行自動化攻擊，能以機器速度挖掘 API 邏輯的漏洞，使得從漏洞公開到實際惡用所需的時間已大幅縮短。多起實例顯示，從時尚平台到保養品平台，因 API 漏洞導致大量客戶的個人隱私和敏感資訊外洩。安全專家指出，攻擊者不再尋找複雜的 Bug，而是利用邏輯濫用和缺乏存取控制的弱點。為應對此趨勢，企業必須全面重新設計外部暴露的 API 防禦體系，實施攻擊表面管理（ASM）來即時檢測並最小化攻擊路徑。同時，必須為所有 API 啟用嚴格的身份驗證（Credential），並積極利用專業工具檢測 API Key 的洩露，同時嚴禁在程式碼中硬編碼（Hardcoding）API Key。",
    tags: ["API 漏洞", "AI 攻擊", "攻擊表面管理", "Credential Leak", "BOLA", "Web Application"],
    title_en: "API Vulnerabilities in the AI Era Become New Threat: Attack Speed and Complexity Increase, Requiring Enterprises to Strengthen External Attack Surface Management",
    summary_en: "With the development of next-generation AI models (such as Claude, Paible, and GPT), Application Programming Interfaces (APIs) used for external connectivity have become new high-risk security points. Attackers are leveraging AI to conduct automated attacks, enabling them to discover API logic vulnerabilities at machine speed, significantly reducing the time required from vulnerability disclosure to actual exploitation. Multiple cases, ranging from fashion platforms to beauty product sites, have shown massive leaks of customer personal and sensitive information due to API vulnerabilities. Security experts point out that attackers are no longer looking for complex bugs, but rather exploiting weaknesses related to logical abuse and lack of access control. To address this trend, enterprises must comprehensively redesign their externally exposed API defense systems, implementing Attack Surface Management (ASM) to detect and minimize attack paths in real time. Furthermore, strict credential authentication must be enabled for all APIs, and organizations must actively use professional tools to detect API Key leakage, while strictly prohibiting the hardcoding of API Keys in code.",
    tags_en: ["API Vulnerabilities", "AI Attacks", "Attack Surface Management", "Credential Leak", "BOLA", "Web Application"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145732", lang: "EN" }
    ]
  }
];
