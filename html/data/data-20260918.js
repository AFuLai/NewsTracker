// data-20260918.js — 2026-09-18
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-18"] = [
  {
    id: "20260918-12608",
    trackers: ["security"],
    category: "重大事件",
    title: "商周集團網站遭惡意攻擊導致服務中斷，需持續監測後續恢復狀況",
    summary: "商周集團曾公告旗下網站遭受惡意攻擊，導致線上服務中斷，修復過程持續進行。該集團於9月16日宣布主網站基礎服務已恢復，可提供截至9月8日的新聞與雜誌內容。然而，由於其他系統仍在重建，9月9日之後的新文章暫時無法閱讀。集團旗下多個相關網站，如商周財富網、良醫健康網等，仍處於驗證階段，需確認安全後才會逐步上線。商周同時提醒讀者，警惕此次事件可能衍生的詐騙風險，強調集團絕對不會透過電話、簡訊或通訊軟體，要求讀者進行任何金融操作或提供帳密資訊。",
    tags: ["商周集團", "惡意攻擊", "服務中斷", "詐騙警示", "媒體資安"],
    title_en: "Shang Zhou Group Website Suffers Malicious Attack, Services Interrupted; Continuous Monitoring of Recovery Status Required",
    summary_en: "Shang Zhou Group previously announced that its subsidiary websites were targeted by a malicious attack, leading to the disruption of online services, with remediation efforts ongoing. The group announced on September 16th that the basic services of its main website had been restored, providing news and magazine content up to September 8th. However, because other systems are still under reconstruction, articles published after September 9th are temporarily unavailable. Several related websites under the group, such as Shang Zhou Wealth Network and Liang Yi Health Network, remain in the verification phase and will only gradually go online after security confirmation. Shang Zhou also reminds readers to be vigilant against potential fraud risks arising from this incident, emphasizing that the group will absolutely not request readers to perform any financial operations or provide account credentials via phone calls, text messages, or communication software.",
    tags_en: ["Shang Zhou Group", "Malicious Attack", "Service Interruption", "Fraud Warning", "Media Cybersecurity"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179056", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260918-12896",
    trackers: ["os", "security"],
    category: "Linux",
    title: "多發行版安全更新公告：AlmaLinux、Debian、Fedora、Oracle、Red Hat、SUSE與Ubuntu同步修補核心與應用程式漏洞",
    summary: "本文彙整了多家主流 Linux 發行版（包括 AlmaLinux、Debian、Fedora、Mageia、Oracle、Red Hat、SUSE與Ubuntu）發布的最新安全更新清單。這些更新涵蓋了多個核心元件與應用程式，包括但不限於 Linux 核心、glibc、coreutils、OpenSSH、Nginx、PostgreSQL、Chromium、Python 相關套件、以及各種網路服務（如 bind9、unbound、openvpn）。受影響的產品範圍極廣，涉及從作業系統核心到上層應用程式的各個層面。實務建議使用者應根據發行版官方公告，及時更新所有列出的核心元件和應用程式套件，以修補潛在的安全漏洞，確保系統的穩定性與安全性。由於原文僅提供更新清單，未公開具體漏洞的 CVSS 分數或影響規模，使用者應以官方公告為準，進行全面的系統升級。",
    tags: ["Linux", "AlmaLinux", "Debian", "Fedora", "Oracle", "Red Hat", "SUSE", "Ubuntu", "安全更新", "核心"],
    title_en: "Multi-Vendor Security Update Announcement: AlmaLinux, Debian, Fedora, Oracle, Red Hat, SUSE, and Ubuntu Patch Core and Application Vulnerabilities",
    summary_en: "This article compiles the latest security updates released by multiple major Linux distributions (including AlmaLinux, Debian, Fedora, Mageia, Oracle, Red Hat, SUSE, and Ubuntu). These updates cover numerous core components and applications, including but not limited to the Linux kernel, glibc, coreutils, OpenSSH, Nginx, PostgreSQL, Chromium, Python packages, and various network services (such as bind9, unbound, and openvpn). The scope of affected products is extremely broad, ranging from the operating system kernel to upper-level applications. Practitioners are advised to promptly update all listed core components and application packages according to the official announcements of their respective distributions, thereby patching potential security vulnerabilities and ensuring system stability and security. Since the original text only provides an update list and does not disclose specific CVSS scores or impact levels, users should rely on official announcements and perform comprehensive system upgrades.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Fedora", "Oracle", "Red Hat", "SUSE", "Ubuntu", "Security Update", "Kernel"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1095219", lang: "EN" }
    ]
  },
  {
    id: "20260918-12930",
    trackers: ["os"],
    category: "Linux",
    title: "Apple 影片解碼器 AVD 驅動程式提交 Linux 核心審核，支援 M1 至 M3 晶片硬體解碼",
    summary: "Apple 的影片解碼器 AVD 驅動程式已提交至 Linux 核心郵件清單進行審核。這是一個開源、逆向工程開發的驅動程式，旨在為 Apple M1、M2 和 M3 等 Apple Silicon SoC 晶片提供硬體加速的影片解碼功能。該驅動支援 H.264、H.265、VP9，且 M3 及更新晶片還具備 AV1 解碼支援。該驅動透過實現 Video 4 Linux 2 (V4L2) M2M 無狀態解碼器 API 來運作。\n\n開發者預計 AVD Linux 驅動未來將擴展至支援 M4、M5、M6 和 Neo 等新一代 SoC。驅動程式的設計獨特，它不遵循傳統的參數寫入方式，而是透過單一暫存器進行編程，並將指令寫入「區段」（segments）列表，以確保與硬體處理速度同步。此外，它還利用 Cortex-M3 協處理器來處理解碼狀態的 IRQ，未來甚至可能用於指令提交，預計能降低功耗並提高解碼速度。\n\n目前，這些補丁已提交至 Linux 核心媒體子系統樹，等待納入未來核心版本。",
    tags: ["Apple Silicon", "AVD", "Linux 核心", "V4L2", "硬體解碼", "M1", "M3"],
    title_en: "Apple Video Decoder AVD Driver Submitted to Linux Kernel for Review, Supporting Hardware Decoding for M1 to M3 Chips",
    summary_en: "Apple's Video Decoder AVD driver has been submitted to the Linux kernel mailing list for review. This is an open-source, reverse-engineered driver designed to provide hardware-accelerated video decoding functionality for Apple Silicon SoCs, including the M1, M2, and M3 chips. The driver supports H.264, H.265, and VP9, with M3 and newer chips also featuring AV1 decoding support. The driver operates by implementing the Video 4 Linux 2 (V4L2) M2M stateless decoder API. The developer anticipates that the AVD Linux driver will expand in the future to support next-generation SoCs such as M4, M5, M6, and Neo. The driver's design is unique; instead of following traditional parameter write methods, it programs via a single register and writes instructions into a 'segment' list to ensure synchronization with hardware processing speed. Furthermore, it utilizes a Cortex-M3 coprocessor to handle the IRQ for decoding state, which may eventually be used for instruction submission, expected to reduce power consumption and increase decoding speed. Currently, these patches have been submitted to the Linux kernel media subsystem tree and are awaiting inclusion in future kernel versions.",
    tags_en: ["Apple Silicon", "AVD", "Linux Kernel", "V4L2", "Hardware Decoding", "M1", "M3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Apple-Video-Decode-AVD-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260918-12931",
    trackers: ["os"],
    category: "Linux",
    title: "Ubuntu 26.10 測試報告：Strix Halo 平台性能提升，特別是使用 amd64v3 核心包",
    summary: "本文針對即將發布的 Ubuntu 26.10 Beta 版本，測試了其在搭載 AMD Ryzen AI Max+「Strix Halo」的系統上的性能表現。測試結果顯示，相較於 Ubuntu 26.04 LTS，Ubuntu 26.10 在整體性能上有所提升，尤其當選擇使用 amd64v3 格式的快照/每日 ISO 進行安裝時，能為 x86_64-v3 套件提供額外的開箱即用性能增益。Strix Halo 是一款性能優異的 SoC，在 Ubuntu Linux 上表現穩定。測試使用了 Framework Desktop 搭配 AMD Ryzen AI Max+ 395 和 Radeon 8060S Graphics，比較了在 Ubuntu 26.04 LTS、Ubuntu 26.10 每日 ISO 以及使用實驗性 amd64v3 套件時的基準測試結果，指出 26.10 版本在提升硬體支援和性能方面具有吸引力。",
    tags: ["Ubuntu 26.10", "Strix Halo", "AMD Ryzen AI Max+", "amd64v3", "Linux 核心", "性能優化"],
    title_en: "Ubuntu 26.10 Test Report: Strix Halo Platform Performance Boost, Especially with amd64v3 Core Packages",
    summary_en: "This article tests the performance of the upcoming Ubuntu 26.10 Beta version on systems equipped with the AMD Ryzen AI Max+ 'Strix Halo'. The test results show that compared to Ubuntu 26.04 LTS, Ubuntu 26.10 exhibits overall performance improvements. Specifically, using a snapshot/daily ISO formatted with amd64v3 provides additional out-of-the-box performance gains for x86_64-v3 packages. The Strix Halo is a high-performance SoC that performs stably on Ubuntu Linux. The test used Framework Desktop paired with the AMD Ryzen AI Max+ 395 and Radeon 8060S Graphics, comparing benchmark results across Ubuntu 26.04 LTS, Ubuntu 26.10 daily ISO, and the experimental amd64v3 package, indicating that version 26.10 is appealing for its enhanced hardware support and performance.",
    tags_en: ["Ubuntu 26.10", "Strix Halo", "AMD Ryzen AI Max+", "amd64v3", "Linux Kernel", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/ubuntu-2610-strix-halo", lang: "EN" }
    ]
  },
  {
    id: "20260918-12606",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "歐盟CRA通報義務上路，資安院籲提升PSIRT成熟度；AI安全議題與供應鏈風險持續升溫",
    summary: "本週資安焦點圍繞歐盟網路韌性法（CRA）的通報義務正式生效，ENISA已啟用單一通報平臺（SRP），要求製造商通報已遭利用的產品漏洞及重大資安事件。此法規趨勢促使臺灣企業關注產品資安應變能力，資安院提醒，企業應提升產品資安事件應變小組（PSIRT）的成熟度，資訊服務業亦需建立相關機制。在AI領域，業界持續討論安全護欄與人類控制，OpenAI、微軟等發布行為準則，強調將安全重點前移至模型開發與訓練階段。同時，供應鏈風險與個資外洩事件頻傳，包括澳洲警方逮捕涉嫌攻擊全球逾1,000個組織的駭客團體，以及韓國修法後大幅提高資料外洩的罰款上限。此外，醫療產業和政府系統也接連面臨勒索軟體和漏洞攻擊，凸顯全球資安治理與合規的嚴峻挑戰。",
    tags: ["CRA", "ENISA", "PSIRT", "AI安全", "供應鏈安全", "個資外洩", "OpenAI", "微軟"],
    title_en: "EU CRA Reporting Obligations Go Live, Cybersecurity Agency Urges PSIRT Maturity Improvement; AI Security and Supply Chain Risks Continue to Heat Up",
    summary_en: "This week's cybersecurity focus centers on the official enforcement of the EU Cyber Resilience Act (CRA) reporting obligations. ENISA has activated a Single Reporting Platform (SRP), requiring manufacturers to report product vulnerabilities that have been exploited and major cybersecurity incidents. This regulatory trend prompts Taiwanese enterprises to pay attention to product cybersecurity incident response capabilities. The Cybersecurity Agency reminds companies that they should enhance the maturity of their Product Security Incident Response Team (PSIRT), and the information services industry must also establish relevant mechanisms. In the AI domain, the industry continues to discuss safety guardrails and human control. Companies like OpenAI and Microsoft are issuing codes of conduct, emphasizing the need to shift security focus to the model development and training stages. Meanwhile, supply chain risks and personal data leakage incidents are frequent, including Australian police arresting a hacking group suspected of attacking over 1,000 organizations globally, and South Korea significantly raising the maximum fines for data leakage following legal revisions. Furthermore, the healthcare industry and government systems are successively facing ransomware and vulnerability attacks, highlighting the severe global challenges in cybersecurity governance and compliance.",
    tags_en: ["CRA", "ENISA", "PSIRT", "AI Security", "Supply Chain Security", "Personal Data Leakage", "OpenAI", "Microsoft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179033", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260918-12882",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Insider Preview 發布新版本，增強無障礙功能與雲端重建能力",
    summary: "微軟透過 Windows Insider Program 發布了針對 Beta 和 Experimental 通道的 Windows 11 Preview 版本，包括 Build 26220.9492 和 Build 26340.9502 等。本次更新主要著重於提升系統的可用性與管理功能。在無障礙功能方面，Experimental 通道新增了更流暢的「滑鼠指標」（Mouse indicator）動畫，並允許使用者透過按 Esc 鍵來控制其啟用狀態。此外，「放大鏡」（Magnifier）功能也新增了新的對比主題切換，以提供更舒適的低眩光螢幕體驗。在系統管理方面，更新了「雲端重建」（Cloud rebuild）功能，使其除了執行完整的作業系統重裝以恢復系統至已知良好狀態外，還增加了資料驅動的消毒（sanitize）能力。IT 管理員現在可以透過 Recovery CSP 從遠端配置和啟動此重建流程，大幅提升企業環境下的設備恢復與安全管理能力。",
    tags: ["Windows 11", "Insider Preview", "Beta", "Experimental", "無障礙功能", "Cloud rebuild"],
    title_en: "Windows 11 Insider Preview Releases New Builds, Enhancing Accessibility and Cloud Rebuild Capabilities",
    summary_en: "Microsoft has released Windows 11 Preview builds for the Beta and Experimental channels through the Windows Insider Program, including Build 26220.9492 and Build 26340.9502. This update primarily focuses on improving system usability and management features. Regarding accessibility, the Experimental channel introduces a smoother 'Mouse indicator' animation and allows users to control its activation status using the Esc key. Furthermore, the 'Magnifier' feature adds new contrast theme switching, providing a more comfortable low-glare screen experience. In terms of system management, the 'Cloud rebuild' functionality has been updated. In addition to performing a full operating system reinstallation to restore the system to a known good state, it now includes data-driven sanitization capabilities. IT administrators can now remotely configure and initiate this rebuild process via Recovery CSP, significantly enhancing device recovery and security management capabilities in enterprise environments.",
    tags_en: ["Windows 11", "Insider Preview", "Beta", "Experimental", "Accessibility", "Cloud rebuild"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/windows-insider/2026/09/18/announcing-new-builds-for-18-september-2026", lang: "EN" }
    ]
  },
  {
    id: "20260918-12971",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 為 Excel 貼上功能修復熱修補程式，僅適用於 Excel 2016 版本",
    summary: "Microsoft 發布了針對 Excel 貼上操作失敗的熱修補程式。此修補程式僅適用於 Excel 2016 版本，旨在解決先前更新中引入的錯誤，該錯誤會導致用戶嘗試貼上內容時，源內容仍保持選取狀態，而目標位置未被修改，且系統不會提供任何失敗提示。\n\n先前，Microsoft 在九月發布了安全更新，修復了 Excel 的遠端代碼執行和資訊洩露漏洞。然而，該更新本身又引入了貼上操作失敗的問題，影響範圍包括 Excel 2024、2021、2019 和 2016 等多個版本。雖然部分用戶可使用「貼上特殊」功能繞過，但最終需要 Microsoft 釋出修補程式。\n\n本次修補程式的發布，顯示了 Microsoft 在修補安全漏洞的同時，也持續面臨著軟體更新引入新問題的挑戰。用戶在使用時仍需注意，即使修復了貼上功能，在包含條件式格式的活頁簿中，貼上操作仍可能失敗。",
    tags: ["Microsoft", "Excel", "熱修補程式", "Windows 安全更新", "貼上操作"],
    title_en: "Microsoft Releases Hotfix for Excel Paste Functionality, Applicable Only to Excel 2016",
    summary_en: "Microsoft has released a hotfix addressing failures in the Excel paste operation. This patch is exclusively for Excel 2016 and aims to resolve a bug introduced in a previous update. This bug caused the source content to remain selected when a user attempted to paste content, without modifying the target location, and without providing any failure notification. Previously, Microsoft released a security update in September that fixed Remote Code Execution and information leakage vulnerabilities in Excel. However, this update itself introduced the paste operation failure issue, affecting multiple versions including Excel 2024, 2021, 2019, and 2016. Although some users could bypass the issue using the 'Paste Special' function, a patch was ultimately required from Microsoft. The release of this hotfix highlights Microsoft's ongoing challenge of introducing new issues while simultaneously patching security vulnerabilities. Users should still be aware that even after the paste function is fixed, pasting operations may still fail in workbooks containing conditional formatting.",
    tags_en: ["Microsoft", "Excel", "Hotfix", "Windows Security Update", "Paste Operation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/09/18/microsoft-fixes-the-fix-that-broke-excel-paste-partly/5297467", lang: "EN" }
    ]
  },
  {
    id: "20260918-12990",
    trackers: ["os"],
    category: "Windows",
    title: "微軟解釋：Windows 11 重新啟動（Restart）比關機（Shut down）更徹底，能提供更乾淨的系統環境",
    summary: "本文深入探討了 Windows 系統的啟動模式，特別是「快速啟動」（Fast Startup）功能如何影響用戶對「關機」和「重新啟動」的理解。當啟用 Fast Startup 時，系統在關機時並非完全關閉，而是將核心會話（kernel session）進入了休眠（hibernated）狀態，將部分 OS 狀態儲存到 hiberfil.sys 檔案中，以加速下次開機。因此，下次開機時，系統會載入這個快照，而非從零開始初始化。相較之下，「重新啟動」（Restart）會清除核心會話，執行一次完整的冷啟動（Cold Boot），重新初始化所有驅動程式和核心，這能更徹底地修復因舊會話導致的系統錯誤或驅動程式問題。因此，當用戶遇到系統故障或需要最乾淨的環境時，建議使用 Restart。若需完全跳過 Fast Startup 進行徹底關機，可使用指令 `shutdown /s /t 0`。",
    tags: ["Windows 11", "Fast Startup", "Restart", "Shut down", "kernel", "Microsoft"],
    title_en: "Microsoft Explains: Restarting Windows 11 is More Thorough Than Shutting Down, Providing a Cleaner System Environment",
    summary_en: "This article delves into Windows system startup modes, specifically how the 'Fast Startup' feature affects users' understanding of 'shutting down' versus 'restarting.' When Fast Startup is enabled, the system does not fully power down upon shutdown; instead, it places the kernel session into a hibernated state, saving parts of the OS state to the hiberfil.sys file to speed up the next boot. Consequently, the system loads this snapshot upon the next startup rather than initializing from scratch. In contrast, 'Restart' clears the kernel session and performs a full Cold Boot, reinitializing all drivers and the kernel. This process can more thoroughly resolve system errors or driver issues caused by old sessions. Therefore, when users encounter system malfunctions or require the cleanest possible environment, using Restart is recommended. If a user needs to completely bypass Fast Startup for a thorough shutdown, they can use the command `shutdown /s /t 0`.",
    tags_en: ["Windows 11", "Fast Startup", "Restart", "Shut down", "kernel", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/18/microsoft-explains-why-restarting-windows-11-can-shut-it-down-more-completely-than-shutting-it-down", lang: "EN" }
    ]
  },
  {
    id: "20260918-12556",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA新增兩項已知被利用漏洞：CVE-2025-39964與CVE-2026-53266，警告Linux核心安全風險",
    summary: "美國網路安全局（CISA）宣布，已根據實際的攻擊證據，將兩項新的漏洞納入其「已知被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。這兩項漏洞分別是：CVE-2025-39964（Linux Kernel Race Condition Vulnerability）和CVE-2026-53266（Linux Kernel Out-of-Bounds Write Vulnerability）。這類核心漏洞是惡意網路行為者常利用的攻擊途徑，對聯邦企業級系統構成重大風險。\n\nCISA同時重申了《具約束力的操作指令》（Binding Operational Directive, BOD 26-04）的要求，該指令要求聯邦民事行政部門（FCEB）必須優先修補高風險漏洞，特別是那些已列入KEV Catalog、且在公開資產上能讓攻擊者獲得完全控制權的漏洞。對於所有組織，CISA鼓勵採取基於風險的漏洞管理策略，優先修補KEV Catalog中的漏洞。\n\n建議所有組織應密切關注KEV Catalog的更新，並將修補高風險、已知被利用的漏洞列為最高優先級，以降低整體資安風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2025-39964", "CVE-2026-53266", "Linux Kernel", "漏洞管理"],
    title_en: "CISA Adds Two Known Exploited Vulnerabilities: CVE-2025-39964 and CVE-2026-53266, Warning of Linux Kernel Security Risks",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added two new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog, based on actual evidence of exploitation. These two vulnerabilities are: CVE-2025-39964 (Linux Kernel Race Condition Vulnerability) and CVE-2026-53266 (Linux Kernel Out-of-Bounds Write Vulnerability). These types of core vulnerabilities are frequently exploited by malicious actors and pose a significant risk to federal enterprise systems.\n\nCISA also reiterated the requirements of the Binding Operational Directive (BOD 26-04), which mandates that Federal Civilian Executive Branch (FCEB) departments must prioritize patching high-risk vulnerabilities, especially those listed in the KEV Catalog that could grant an attacker full control over public assets. For all organizations, CISA encourages adopting a risk-based vulnerability management strategy, prioritizing the patching of vulnerabilities found in the KEV Catalog.\n\nAll organizations are advised to closely monitor updates to the KEV Catalog and list patching high-risk, known-exploited vulnerabilities as the highest priority to mitigate overall cybersecurity risk.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2025-39964", "CVE-2026-53266", "Linux Kernel", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/09/18/cisa-adds-two-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260918-12557",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2025-39682至已知漏洞目錄，提醒機構優先修補Linux核心漏洞",
    summary: "美國網路安全局（CISA）宣布將一個新的漏洞，即CVE-2025-39682（Linux Kernel Improper Check for Unusual or Exceptional Conditions Vulnerability），新增至其「已知被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。此類漏洞是惡意網路行為者常見的攻擊途徑，對聯邦企業系統構成重大風險。\n\n文章同時重申了《強制性營運指令》（Binding Operational Directive, BOD）26-04的要求，該指令要求聯邦民事行政部門（FCEB）機構必須根據風險等級，優先且快速地修補KEV目錄中列出的高風險漏洞。修補的重點是那些在公開暴露的資產上，且在利用後能授予攻擊者完全控制權的漏洞。\n\nCISA鼓勵所有組織採納基於風險的漏洞管理方法，並將KEV目錄中的漏洞列為修補優先事項。若組織發現尚未列入KEV目錄但已被利用的漏洞，可透過提交提名表向CISA建議納入。",
    tags: ["CISA", "KEV Catalog", "CVE-2025-39682", "Linux Kernel", "漏洞管理", "BOD 26-04"],
    title_en: "CISA Adds CVE-2025-39682 to Known Exploited Vulnerabilities Catalog, Urging Priority Patching for Linux Kernel Flaw",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new vulnerability, CVE-2025-39682 (Linux Kernel Improper Check for Unusual or Exceptional Conditions Vulnerability), to its Known Exploited Vulnerabilities (KEV) Catalog. Such vulnerabilities are common attack vectors used by malicious actors and pose a significant risk to federal enterprise systems.\n\nThe article also reiterates the requirements of the Binding Operational Directive (BOD) 26-04, which mandates that Federal Civilian Executive Branch (FCEB) agencies must prioritize and rapidly patch high-risk vulnerabilities listed in the KEV Catalog, based on their risk level. The focus of patching is on vulnerabilities that are publicly exposed and, if exploited, can grant an attacker full control.\n\nCISA encourages all organizations to adopt a risk-based vulnerability management approach, listing KEV Catalog vulnerabilities as patching priorities. Organizations that discover vulnerabilities that have been exploited but are not yet listed in the KEV Catalog can submit a nomination form to CISA for consideration.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2025-39682", "Linux Kernel", "Vulnerability Management", "BOD 26-04"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/09/18/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260918-12570",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Cisco Identity Services Engine (ISE) 零日漏洞 CVE-2026-76460：API 端點認證繞過風險警示",
    summary: "Cisco 公布其 Identity Services Engine (ISE) 存在一項嚴重零日漏洞 CVE-2026-76460，該漏洞影響 ISE 的 API 端點，屬於認證繞過（authentication bypass）類型。該漏洞源於 ISE API 端點的「認證控制不足」，允許攻擊者透過發送惡意請求，繞過基於網頁的管理介面，取得未經授權的存取權限。該漏洞已於 9 月 16 日披露並修補，並被 CISA 列入已知已被利用漏洞（KEV）目錄。由於成功利用此漏洞可讓攻擊者取得 root 權限和命令執行權，且 ISE 本身是許多其他 Cisco API 用於認證和存取控制的核心，因此一旦被入侵，可能導致整個網路的存取控制系統癱瘓，造成極大的安全風險。Cisco 建議客戶應立即升級至修補版本（3.1 至 3.5），並可透過使用基礎設施存取控制列表（iACLs）限制管理和控制平面流量，以作為臨時緩解措施。同時，建議管理員應檢查外部網路和防火牆日誌，尋找可疑活動。",
    tags: ["Cisco", "CVE-2026-76460", "Identity Services Engine (ISE)", "API 漏洞", "認證繞過", "CISA KEV"],
    title_en: "Cisco Identity Services Engine (ISE) Zero-Day Vulnerability CVE-2026-76460: API Endpoint Authentication Bypass Risk Alert",
    summary_en: "Cisco has disclosed a critical zero-day vulnerability, CVE-2026-76460, affecting its Identity Services Engine (ISE). This vulnerability is an authentication bypass flaw in the ISE's API endpoint. The flaw stems from insufficient authentication control at the ISE API endpoint, allowing an attacker to bypass the web-based management interface by sending malicious requests and gain unauthorized access. The vulnerability was disclosed and patched on September 16 and has been listed by CISA in the Known Exploited Vulnerabilities (KEV) catalog. Successful exploitation of this vulnerability could grant an attacker root privileges and command execution. Since ISE is a core component used by many other Cisco APIs for authentication and access control, a breach could lead to the paralysis of the entire network's access control system, posing extreme security risks. Cisco advises customers to immediately upgrade to the patched version (3.1 to 3.5) and recommends using infrastructure Access Control Lists (iACLs) to restrict management and control plane traffic as a temporary mitigation measure. Furthermore, administrators are advised to check external network and firewall logs for suspicious activity.",
    tags_en: ["Cisco", "CVE-2026-76460", "Identity Services Engine (ISE)", "API Vulnerability", "Authentication Bypass", "CISA KEV"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/cisco-zero-day-api-endpoint-authentication-issues", lang: "EN" }
    ]
  },
  {
    id: "20260918-12604",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "TWNIC籲企業強化網域基礎安全：部署DNSSEC、RPKI與Registry Lock防範網路詐騙",
    summary: "台灣網路資訊中心（TWNIC）提醒企業，隨著釣魚、假冒網站及生成式AI技術的發展，網域、DNS與路由等基礎設施的資安治理已成為企業安全的重要環節。TWNIC建議企業應將網路信任納入整體安全藍圖，並重點部署DNSSEC、RPKI和Registry Lock等數位信任機制。文章指出，雖然DNSSEC能透過數位簽章驗證DNS資料來源，降低資料被竄改的風險，但目前「.tw」域名中部署比例仍偏低（僅佔2.47%）。另一方面，RPKI的ROA覆蓋率已達98.06%，且臺灣的ROV過濾率領先全球。此外，TWNIC也強調，無論網域管理委外給外部廠商，企業必須掌握所有權、管理帳號與異動權限，並在合約中明確規範相關安全設定，以防範權責不清的風險。",
    tags: ["TWNIC", "DNSSEC", "RPKI", "Registry Lock", "網域安全", "資安治理"],
    title_en: "TWNIC Urges Enterprises to Strengthen Domain Infrastructure Security: Deploying DNSSEC, RPKI, and Registry Lock to Prevent Cyber Fraud",
    summary_en: "Taiwan Network Information Center (TWNIC) reminds enterprises that with the rise of phishing, spoofing websites, and generative AI technologies, the security governance of foundational infrastructure such as domains, DNS, and routing has become a critical component of corporate security. TWNIC advises enterprises to incorporate network trust into their overall security blueprint, focusing on deploying digital trust mechanisms such as DNSSEC, RPKI, and Registry Lock. The article points out that while DNSSEC can verify the source of DNS data through digital signatures, thereby reducing the risk of data tampering, the deployment rate within the \".tw\" domain remains low (only 2.47%). On the other hand, the RPKI ROA coverage rate has reached 98.06%, and Taiwan's ROV filtering rate leads the global industry. Furthermore, TWNIC emphasizes that regardless of whether domain management is outsourced to external vendors, enterprises must retain ownership, management accounts, and modification rights, and clearly specify related security settings in contracts to prevent risks arising from unclear responsibilities.",
    tags_en: ["TWNIC", "DNSSEC", "RPKI", "Registry Lock", "Domain Security", "Cybersecurity Governance"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179047", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260918-12605",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA發布指南：利用網路誘餌（Cyber Decoys）強化關鍵基礎設施偵測與應變能力",
    summary: "美國網路安全暨基礎設施安全局（CISA）發布了《使用網路誘餌（Cyber Decoys）強化偵測與應變能力》指南，旨在協助關鍵基礎設施（CI）部署誘餌資產，以更早發現、觀察並阻礙已進入環境中的惡意活動。此指南首次提供完整的防禦性網路誘餌部署與操作流程，強調誘餌可作為偵測手段，而非單純的假資產部署。\n\nCISA指出，當攻擊者取得合法帳密並利用系統原生工具或寄生攻擊（LOTL）時，難以偵測，網路誘餌透過部署看似正常的假系統、帳號或資料，誘使攻擊者互動，從而暴露其惡意行為並蒐集威脅情資。指南內容引用MITRE Engage與ATT&CK框架，提供系統化的規劃與評估方法。\n\n此外，CISA也強調，即使採用零信任（Zero Trust）架構，仍應假設攻擊者已取得一定存取權，部署網路誘餌能建立高可信度的可疑活動警告，降低警報疲勞。雖然指南主要針對關鍵基礎設施，但其應用原則可供一般企業參考。常見的誘餌類型包括假帳號密碼、假API金鑰、誘餌檔案等，一旦被讀取或使用，即代表可能發生未經授權的活動。",
    tags: ["CISA", "網路誘餌", "Cyber Decoys", "關鍵基礎設施", "零信任", "MITRE ATT&CK"],
    title_en: "CISA Releases Guidance: Using Cyber Decoys to Enhance Critical Infrastructure Detection and Response Capabilities",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has released the 'Using Cyber Decoys to Enhance Detection and Response Capabilities' guidance. This aims to assist Critical Infrastructure (CI) organizations in deploying decoy assets to detect, observe, and impede malicious activities that have already entered their environment at an earlier stage. This guidance provides the first comprehensive process for deploying and operating defensive cyber decoys, emphasizing that decoys serve as a detection mechanism rather than merely being deployed fake assets.\n\nCISA notes that when attackers obtain legitimate credentials and utilize native system tools or Living Off the Land techniques (LOTL), detection is difficult. Cyber decoys, by deploying seemingly normal fake systems, accounts, or data, entice attackers into interaction, thereby exposing their malicious behavior and collecting threat intelligence. The guidance content references the MITRE Engage and ATT&CK frameworks, providing systematic planning and assessment methodologies.\n\nFurthermore, CISA emphasizes that even when adopting a Zero Trust architecture, organizations should assume that attackers have already gained some level of access. Deploying cyber decoys can establish highly reliable suspicious activity alerts, thereby reducing alert fatigue. Although the guidance primarily targets critical infrastructure, its application principles can be referenced by general enterprises. Common decoy types include fake account passwords, fake API keys, and decoy files; any interaction with these indicates potential unauthorized activity.",
    tags_en: ["CISA", "Cyber Decoys", "Critical Infrastructure", "Zero Trust", "MITRE ATT&CK"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179046", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260918-12607",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 153 更新修補 16 個資安漏洞，包含兩個重大等級 CVE",
    summary: "Google 發布 Chrome 瀏覽器 153.0.8010.52/53 版本更新，修補了共 16 個資安漏洞。其中包含兩個被評為重大等級的漏洞，分別存在於 WebGL 與 Dawn 元件。用戶應立即更新至指定版本，以防範攻擊者利用這些弱點。本次更新僅與上次修補 42 個漏洞的更新相隔兩天，顯示 Google 對資安漏洞修補的積極性。Windows、macOS、Linux 及 Android 用戶應根據作業系統和設備類型更新至指定的版本號，以確保瀏覽器環境的安全。",
    tags: ["Google Chrome", "CVE-2026-93372", "CVE-2026-93374", "資安漏洞", "瀏覽器安全", "Google"],
    title_en: "Google Chrome 153 Update Patches 16 Security Vulnerabilities, Including Two High-Severity CVEs",
    summary_en: "Google has released Chrome browser version 153.0.8010.52/53, which patches a total of 16 security vulnerabilities. These include two vulnerabilities rated as high severity, located in the WebGL and Dawn components, respectively. Users are advised to update immediately to the specified version to prevent attackers from exploiting these weaknesses. This update follows the previous patch of 42 vulnerabilities by only two days, demonstrating Google's proactive approach to security patching. Users on Windows, macOS, Linux, and Android should update to the specified version number according to their operating system and device type to ensure browser environment security.",
    tags_en: ["Google Chrome", "CVE-2026-93372", "CVE-2026-93374", "Security Vulnerability", "Browser Security", "Google"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179059", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260918-12637",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "資安研究員公開四個 Linux 核心漏洞 PoC，本地權限提升可獲取 Root 權限",
    summary: "資安研究員 Asim Manizada 公布了四個 Linux 核心漏洞的可用 PoC（概念驗證）程式碼，這些漏洞允許本地使用者提升權限，從普通帳號達到最高的 Root 權限。這些漏洞包括 DirtyAH6、TUNderflow、PPPoEject 和 DiagSpill。核心維護者已在過去數週內修復了所有四個漏洞，因此運行最新核心的系統不受影響。然而，由於 PoC 代碼已公開，仍運行舊版核心的系統必須立即更新。這些漏洞都是記憶體安全錯誤，允許攻擊者在核心層級汙染記憶體。DirtyAH6 涉及 IPv6 認證標頭的邊界檢查問題；TUNderflow 涉及虛擬網路設備的尺寸計算環繞；PPPoEject 屬於使用後釋放（use-after-free）錯誤；而 DiagSpill 則因計數器溢位導致的緩衝區寫入越界。雖然這些漏洞的底層錯誤已存在多年，但公開的 PoC 程式碼提高了共享系統的風險。修補建議是立即更新到包含所有四個修復的穩定核心版本，或在無法即時修補時，關閉未特權使用者命名空間（unprivileged user namespaces）及不使用的相關功能（如 AH6、TUN/TAP、PPPoE、SCTP）。",
    tags: ["Linux 核心", "DirtyAH6", "TUNderflow", "PPPoEject", "DiagSpill", "本地權限提升", "PoC"],
    title_en: "Cybersecurity Researcher Releases PoC for Four Linux Kernel Vulnerabilities, Local Privilege Escalation Can Achieve Root Access",
    summary_en: "Cybersecurity researcher Asim Manizada has published usable Proof-of-Concept (PoC) code for four Linux kernel vulnerabilities. These flaws allow local users to escalate privileges from a standard account to the highest Root level. The vulnerabilities include DirtyAH6, TUNderflow, PPPoEject, and DiagSpill. Kernel maintainers have already patched all four vulnerabilities in recent weeks, meaning systems running the latest kernel are unaffected. However, because the PoC code is now public, systems running older kernel versions must update immediately. All these vulnerabilities are memory safety errors, allowing attackers to contaminate memory at the kernel level. DirtyAH6 involves an out-of-bounds check issue in the IPv6 authentication header; TUNderflow involves an integer overflow in virtual network device size calculation; PPPoEject is a use-after-free error; and DiagSpill is a buffer write overflow caused by a counter overflow. Although the underlying flaws have existed for years, the public release of the PoC code increases the risk across shared systems. The recommended mitigation is to immediately update to a stable kernel version containing all four patches, or, if immediate patching is not possible, to disable unprivileged user namespaces and unused related features (such as AH6, TUN/TAP, PPPoE, and SCTP).",
    tags_en: ["Linux Kernel", "DirtyAH6", "TUNderflow", "PPPoEject", "DiagSpill", "Local Privilege Escalation", "PoC"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/public-exploits-released-for-four-linux.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12638",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "WordPress 核心漏洞 Click2Shell：登入管理員點擊惡意連結可強制安裝主題並執行程式碼",
    summary: "資安公司 pwn.ai 發現了 WordPress 核心的一個新漏洞，命名為 Click2Shell。此漏洞允許攻擊者透過精心設計的網頁連結，誘騙已登入的網站管理員，在未點擊「安裝」按鈕的情況下，強制將一個主題從官方 WordPress.org 目錄安裝到網站。單獨的強制安裝漏洞被評為高嚴重性（CVSS 7.1）。然而，研究團隊進一步展示，若將此核心漏洞與主題本身的第二個缺陷鏈接，可達到在伺服器上執行攻擊者自定義程式碼的關鍵級別（CVSS 9.6）。此漏洞的原理是 WordPress 系統的不同部分對同一連結的處理方式不同，使得攻擊者能利用管理員的登入權限和安全 Token。WordPress 已在 7.1.1 版本中發布修補程式，並建議所有網站立即更新。雖然目前沒有證據顯示此漏洞已被用於真實攻擊，但由於其嚴重性，網站擁有者應儘快升級至 7.1.1 或對應的支援分支版本，以修補此核心缺陷。",
    tags: ["WordPress", "Click2Shell", "核心漏洞", "CVE", "CVSS", "強制安裝"],
    title_en: "WordPress Core Vulnerability Click2Shell: Clicking Malicious Link Allows Forced Theme Installation and Code Execution",
    summary_en: "Security firm pwn.ai discovered a new vulnerability in the WordPress core, named Click2Shell. This vulnerability allows an attacker to trick an already logged-in site administrator into forcibly installing a theme from the official WordPress.org directory, even without clicking an 'Install' button. The forced installation vulnerability alone was rated as high severity (CVSS 7.1). However, the research team further demonstrated that by chaining this core vulnerability with a second flaw in the theme itself, it is possible to achieve critical-level remote code execution (CVSS 9.6). The principle of this vulnerability lies in the different ways various parts of the WordPress system handle the same link, allowing an attacker to exploit the administrator's login credentials and security tokens. WordPress has released a patch in version 7.1.1 and recommends that all websites update immediately. Although there is currently no evidence that this vulnerability has been used in real attacks, due to its severity, website owners should upgrade to 7.1.1 or the corresponding supported branch version as soon as possible to patch this core flaw.",
    tags_en: ["WordPress", "Click2Shell", "Core Vulnerability", "CVE", "CVSS", "Forced Installation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/new-wordpress-click2shell-flaw-forces.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12639",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客組織 Transparent Tribe 針對印度與阿富汗政府機構發動「Operation RapidRust」攻擊",
    summary: "資安研究機構 Zscaler ThreatLabz 報告指出，一個被追蹤為與巴基斯坦相關的威脅群組 Transparent Tribe（亦名 APT36 和 Earth Karkaddan），近期針對印度和阿富汗的政府及國防機構發動了名為「Operation RapidRust」的網路攻擊。該攻擊活動展示了高運作節奏和不斷演進的 TTPs。攻擊者使用了多種未公開的工具，包括 RUSTYSHADE、RUSTYMOVE、PSNATCH 和 BASHNATCH。RUSTYSHADE 是一個基於 Rust 語言的後門，利用攻擊者控制的私人 GitHub 儲存庫，透過 GitHub REST API 進行加密的 C2 通訊，能夠執行截圖、擷取網路攝影機照片、檔案操作等。攻擊者還利用了模仿知名印度新聞媒體（如 The Print 和 India Today）的 Typosquatting 網域，來託管惡意 PowerShell 腳本和負載。在後滲透階段，攻擊者會部署 PSNATCH（針對 Windows）和 BASHNATCH（針對 Linux）這兩種檔案竊取工具，以及 RUSTYMOVE，這是一個用 Rust 開發的 USB 傳播工具，用於監控外部可移除媒體並植入惡意檔案。這些活動顯示攻擊者持續進行系統、使用者和網路偵察，並部署下一階段的惡意負載。",
    tags: ["Transparent Tribe", "APT36", "Operation RapidRust", "RUSTYSHADE", "PSNATCH", "BASHNATCH", "GitHub API"],
    title_en: "Cyber Threat Group Transparent Tribe Launches 'Operation RapidRust' Attacks Targeting Indian and Afghan Government Agencies",
    summary_en: "According to a report from the cybersecurity research firm Zscaler ThreatLabz, a threat group tracked as being associated with Pakistan, named Transparent Tribe (also known as APT36 and Earth Karkaddan), recently launched a cyber attack called 'Operation RapidRust' targeting government and defense agencies in India and Afghanistan. This attack activity demonstrated a high operational tempo and continuously evolving TTPs. The attackers utilized various undisclosed tools, including RUSTYSHADE, RUSTYMOVE, PSNATCH, and BASHNATCH. RUSTYSHADE is a backdoor built on the Rust language, which uses an attacker-controlled private GitHub repository to conduct encrypted C2 communication via the GitHub REST API, capable of performing screen captures, capturing webcam photos, and file operations. The attackers also leveraged Typosquatting domains mimicking well-known Indian news media (such as The Print and India Today) to host malicious PowerShell scripts and payloads. In the post-exploitation phase, the attackers deploy PSNATCH (for Windows) and BASHNATCH (for Linux) file exfiltration tools, as well as RUSTYMOVE, a USB propagation tool developed in Rust, used to monitor external removable media and implant malicious files. These activities indicate that the attackers are continuously conducting system, user, and network reconnaissance, and deploying next-stage malicious payloads.",
    tags_en: ["Transparent Tribe", "APT36", "Operation RapidRust", "RUSTYSHADE", "PSNATCH", "BASHNATCH", "GitHub API"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/transparent-tribe-deploys-new-rust.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12640",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Microsoft修補多重高風險漏洞：Azure AI Foundry (CVE-2026-85889) 及 Windows 系統安全更新",
    summary: "微軟（Microsoft）發布修補程式，修復了多個嚴重安全漏洞，其中最為嚴重的為 Azure AI Foundry 的一個權限提升缺陷 (CVE-2026-85889)，該漏洞的 CVSS 分數為 10.0。此缺陷源於 Azure AI Foundry 關鍵功能缺乏身份驗證，允許未經授權的攻擊者透過網路提升權限。微軟指出，該漏洞已得到修復，且無需客戶採取任何行動。\n\n此外，微軟還修補了其他多個高風險漏洞，包括：Microsoft 365 Copilot 的命令注入漏洞 (CVE-2026-85885, CVSS 9.9)、Azure Database for PostgreSQL 的不當授權缺陷 (CVE-2026-85878, CVSS 9.9)，以及 Azure Cosmos DB 的不當中和漏洞 (CVE-2026-87701, CVSS 9.6)。\n\n針對作業系統層面，微軟也為 Windows 11 版本 26H1 發布了累積更新，修補了兩個本地權限提升漏洞：Windows User-Mode Power Service (UMPS) 的存取控制粒度不足 (CVE-2026-62721, CVSS 7.8)，以及 Windows Secure Kernel Mode 的雙釋放漏洞 (CVE-2026-85921, CVSS 8.2)。\n\n微軟提醒，近期修補的漏洞中，有部分缺陷已遭到積極利用，例如影響 Windows Advanced Local Procedure Call (ALPC) 和 Windows Update Stack 的漏洞，已被駭客組利用開發了名為 BlueMoon 的攻擊工具包。",
    tags: ["Microsoft", "Azure AI Foundry", "CVE-2026-85889", "CVE-2026-85885", "Windows 11", "權限提升"],
    title_en: "Microsoft Patches Multiple High-Risk Vulnerabilities: Azure AI Foundry (CVE-2026-85889) and Windows System Security Updates",
    summary_en: "Microsoft has released patches addressing multiple critical security vulnerabilities, the most severe of which is a privilege escalation flaw in Azure AI Foundry (CVE-2026-85889), which carries a CVSS score of 10.0. This flaw stems from a lack of authentication for a key Azure AI Foundry function, allowing unauthorized attackers to elevate privileges over the network. Microsoft notes that the vulnerability has been patched and requires no action from customers.\n\nAdditionally, Microsoft patched several other high-risk vulnerabilities, including a command injection flaw in Microsoft 365 Copilot (CVE-2026-85885, CVSS 9.9), an improper authorization flaw in Azure Database for PostgreSQL (CVE-2026-85878, CVSS 9.9), and an insufficient neutralization vulnerability in Azure Cosmos DB (CVE-2026-87701, CVSS 9.6).\n\nAt the operating system level, Microsoft also released a cumulative update for Windows 11 version 26H1, patching two local privilege escalation flaws: insufficient access control granularity in Windows User-Mode Power Service (UMPS) (CVE-2026-62721, CVSS 7.8), and a double-release vulnerability in Windows Secure Kernel Mode (CVE-2026-85921, CVSS 8.2).\n\nMicrosoft warns that some of the recently patched vulnerabilities have been actively exploited, such as flaws affecting Windows Advanced Local Procedure Call (ALPC) and the Windows Update Stack, which have been exploited by threat actors to develop an attack toolkit named BlueMoon.",
    tags_en: ["Microsoft", "Azure AI Foundry", "CVE-2026-85889", "CVE-2026-85885", "Windows 11", "Privilege Escalation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/microsoft-patches-cvss-100-azure-ai.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12642",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI 程式碼代理程式插件漏洞：可透過偽造分支名稱竊取權限",
    summary: "資安公司 Air Security 發現四款廣泛使用的 AI 程式碼代理程式（AI coding agents）存在嚴重漏洞。該漏洞允許攻擊者控制插件程式碼儲存庫，透過偽造分支名稱（branch name）的方式，讓代理程式安裝一個惡意的插件，即使該插件已被鎖定在特定的版本（commit hash）。由於插件是以使用者的權限運行，一旦被替換，攻擊者可存取使用者的檔案、儲存的憑證及登入系統，造成重大資料外洩風險。Anthropic 已修補 Claude Code 2.1.179，OpenAI 已修補 Codex 0.146.0。然而，GitHub Copilot 尚未修復，且 Google 宣布將退役 Gemini CLI，並未提供修補方案。Air Security 指出，此漏洞的風險存在於允許使用分支名稱模擬 commit hash 的 Git 託管服務（如 Bitbucket 或公司自建 Git 伺服器），而非 GitHub 本身。修補必須在代理程式本身進行，而非在插件市場端，使用者應留意使用 AI 代理程式的最新安全公告。",
    tags: ["AI 程式碼代理程式", "Plugin4Shell", "Anthropic", "OpenAI", "CVE", "Git 漏洞"],
    title_en: "AI Code Agent Plugin Vulnerability: Privilege Theft Possible via Fake Branch Names",
    summary_en: "Security firm Air Security has discovered severe vulnerabilities in four widely used AI coding agents. The vulnerability allows attackers to compromise the plugin code repository by fabricating branch names, enabling the agent to install a malicious plugin even if the plugin is locked to a specific version (commit hash). Since the plugin runs with the user's permissions, replacement by an attacker could lead to the theft of user files, stored credentials, and system login access, posing a significant data leakage risk. Anthropic has patched Claude Code 2.1.179, and OpenAI has patched Codex 0.146.0. However, GitHub Copilot has not been patched, and Google announced the deprecation of Gemini CLI without providing a patch. Air Security points out that the risk of this vulnerability lies in Git hosting services that allow branch names to simulate commit hashes (such as Bitbucket or corporate self-hosted Git servers), rather than GitHub itself. The fix must be implemented within the agent itself, not at the plugin marketplace level. Users should pay attention to the latest security advisories when using AI coding agents.",
    tags_en: ["AI Code Agents", "Plugin4Shell", "Anthropic", "OpenAI", "CVE", "Git Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12645",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "AI驅動的Android惡意軟體 RatHat 濫用 ADB 與無障礙服務，建立持久性後門",
    summary: "資安研究人員發現了一種名為 RatHat 的新型 Android 惡意軟體，據信由中國背景的威脅行為者操作。該惡意軟體主要透過目標式 Smishing（簡訊釣魚）和惡意廣告活動分發，利用自動化的多階段感染流程。RatHat 的核心機制是結合「無障礙服務（Accessibility）」的濫用與自主的本地 ADB（Android Debug Bridge）自配對功能，成功突破標準的 Android 應用程式沙箱，並啟動具有 Shell 級別權限的獨立原生守護程序（daemons）。該惡意軟體具備多層反分析技術，包括 Container tampering、Manifest bomb、DEX bytecode poisoning 和 Dual string-encryption。其架構包含惡意 Android 應用、Go Agent 和 FRP 反向代理客戶端。Go Agent 偽裝成原生函式庫，利用本地 ADB 守護程序獲取的 Shell 權限來執行命令，建立持久性。此外，它還能將設備的無障礙樹序列化為 XML，並與生成式 AI 助理互動，用於解析螢幕上的座標和文字，執行合成點擊等非惡意行為，以達到更精準的控制。攻擊者還能透過 C2 伺服器建立反向隧道，從遠端收集極為全面的設備資訊，包括簡訊、密碼、螢幕截圖、按鍵輸入，甚至透過硬體級別的指紋按鍵記錄器進行監控。研究指出，RatHat 的多層架構和對 GenAI 的依賴，顯示傳統的基於簽名的移動安全控制已不足以應對。",
    tags: ["RatHat", "Android 惡意軟體", "ADB", "無障礙服務", "AI 攻擊", "C2 伺服器", "Shell 權限"],
    title_en: "AI-Driven Android Malware RatHat Exploits ADB and Accessibility Services to Establish Persistent Backdoor",
    summary_en: "Security researchers have discovered a novel Android malware named RatHat, believed to be operated by China-based threat actors. The malware primarily distributes through targeted Smishing (SMS phishing) and malicious ad campaigns, utilizing an automated, multi-stage infection process. RatHat's core mechanism combines the abuse of 'Accessibility Services' with autonomous local ADB (Android Debug Bridge) pairing capabilities, successfully bypassing standard Android application sandboxing and initiating independent, native daemon processes with Shell-level privileges. The malware incorporates multiple layers of anti-analysis techniques, including Container tampering, Manifest bomb, DEX bytecode poisoning, and Dual string-encryption. Its architecture comprises a malicious Android application, a Go Agent, and an FRP reverse proxy client. The Go Agent masquerades as a native library, utilizing Shell privileges obtained from the local ADB daemon to execute commands and establish persistence. Furthermore, it can serialize the device's accessibility tree into XML and interact with generative AI assistants to parse screen coordinates and text, performing non-malicious actions like synthetic clicking for more precise control. The attackers can also establish reverse tunnels via a C2 server to remotely collect extremely comprehensive device information, including SMS messages, passwords, screenshots, keystrokes, and even monitor via hardware-level fingerprint keyloggers. The research indicates that RatHat's multi-layered architecture and reliance on GenAI demonstrate that traditional signature-based mobile security controls are insufficient to address it.",
    tags_en: ["RatHat", "Android Malware", "ADB", "Accessibility Services", "AI Attack", "C2 Server", "Shell Privileges"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/rathat-android-malware-abuses-adb-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12707",
    trackers: ["security"],
    category: "合規指引",
    title: "企業帳密外洩風險警訊：員工帳號與憑證在暗網洩露規模創歷史新高",
    summary: "近期觀察顯示，透過暗網（Dark Web）洩露的員工帳號和憑證日誌規模已達到歷史最高點。攻擊者可透過釣魚（Phishing）攻擊，一次性竊取儲存在瀏覽器「自動登入」功能中的帳號和會話（Session）Cookie，進而將其作為入侵企業內部網路的途徑。文章指出，企業不應僅依賴表面化的安全評估指標，而必須建立實質的帳號盜取防禦體系。建議企業採取以下措施：禁止在瀏覽器中儲存帳號密碼；實施持續性的暗網洩露監控；並設定會話即時過期機制，以有效阻斷帳號被盜用的風險。",
    tags: ["暗網洩露", "憑證盜取", "釣魚攻擊", "會話Cookie", "資安防禦", "帳號管理"],
    title_en: "Corporate Credential Leak Warning: Employee Accounts and Credentials Leaked on Dark Web Reach Record High",
    summary_en: "Recent observations show that the volume of employee accounts and credentials leaked on the Dark Web has reached an all-time high. Attackers can use phishing attacks to steal accounts and session cookies stored in browser 'auto-fill' functions, subsequently using them as a pathway to infiltrate corporate internal networks. The article emphasizes that companies should not rely solely on superficial security assessment metrics but must establish a substantive account theft defense system. It recommends that companies adopt the following measures: prohibit storing accounts and passwords in browsers; implement continuous dark web leak monitoring; and set up real-time session expiration mechanisms to effectively mitigate the risk of account misuse.",
    tags_en: ["Dark Web Leak", "Credential Theft", "Phishing Attack", "Session Cookie", "Cybersecurity Defense", "Account Management"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145944", lang: "EN" }
    ]
  },
  {
    id: "20260918-12808",
    trackers: ["os"],
    category: "Apple",
    title: "The Quantified Scientist 評測 Apple Watch Series 12 心率感測器：與 Polar H10 比較表現",
    summary: "科技評測者 The Quantified Scientist 的 Rob ter Horst 針對 Apple Watch Series 12 的全新心率感測器，進行了與 Polar H10 ECG 胸帶的深度比較測試。該感測器升級後，即使使用者處於非活動狀態，也能每五秒測量一次心率，提供更詳細的日常活動洞察。測試結果顯示，Series 12 在室內自行車、跑步和重量訓練等多種情境下表現良好。特別是在室內自行車測試中，其讀數與 Polar H10 的數據幾乎一致。雖然在跑步和重量訓練時，其相關係數（correlation）略低於室內自行車，但 ter Horst 仍認為其表現「相當不錯」，且在重量訓練方面超越了他測試的 85% 設備。整體而言，Series 12 的心率準確性與前代 Series 11 相似，但 ter Horst 推測 Apple 可能仍在持續優化其演算法。",
    tags: ["Apple Watch Series 12", "心率感測器", "Polar H10", "Apple Watch", "健康追蹤"],
    title_en: "The Quantified Scientist Reviews Apple Watch Series 12 Heart Sensor: Comparison with Polar H10 Performance",
    summary_en: "Tech reviewer The Quantified Scientist's Rob ter Horst conducted an in-depth comparative test of the Apple Watch Series 12's new heart sensor against the Polar H10 ECG chest strap. With the sensor upgrade, it can now measure heart rate every five seconds even when the user is inactive, providing more detailed daily activity insights. Test results show that the Series 12 performed well in various scenarios, including indoor cycling, running, and weight training. Notably, during the indoor cycling test, its readings were nearly identical to the Polar H10's data. Although the correlation was slightly lower during running and weight training compared to indoor cycling, ter Horst still rated its performance as 'quite good,' and noted that it surpassed 85% of the devices he tested for weight training. Overall, the heart rate accuracy of the Series 12 is similar to the previous Series 11, but ter Horst speculates that Apple may still be continuously optimizing its algorithms.",
    tags_en: ["Apple Watch Series 12", "Heart Sensor", "Polar H10", "Apple Watch", "Health Tracking"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/the-quantified-scientist-tests-the-apple-watch-series-12s-new-heart-rate-sensor", lang: "EN" }
    ]
  },
  {
    id: "20260918-12809",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 與 iPadOS 27 擴展語言支援，提升詞典、快速鍵盤及 Siri 功能的國際化能力",
    summary: "Apple 更新了 iOS 27 和 iPadOS 27 的功能可用性頁面，確認多達 30 種新的語言和語言變體已支援。這些更新涵蓋了多個核心功能，包括詞典（Dictionary: Thesaurus）、Siri 語音激活、以及視覺搜尋（Visual Look Up）。語言支援的擴展不僅限於單一語言，還包括了特定地區的變體，例如澳洲英語和加拿大英語。在快速鍵盤（QuickType Keyboard）方面，新增的支援包括多種語言的自訂更正、預測輸入和多語言輸入功能，例如菲律賓英語和旁遮普語。此外，Siri 語音激活和視覺搜尋功能也增加了對阿拉伯語（沙烏地阿拉伯）、繁體中文（香港、台灣）、韓語、葡萄牙語（巴西）和泰語等地區的支援。這些更新顯著提升了作業系統的國際化和本地化體驗，讓用戶在更多語言環境下使用 Apple 設備。",
    tags: ["iOS 27", "iPadOS 27", "Apple", "語言支援", "QuickType Keyboard", "Siri"],
    title_en: "iOS 27 and iPadOS 27 Expand Language Support, Enhancing Internationalization for Dictionary, Quick Keyboard, and Siri Features",
    summary_en: "Apple has updated the feature availability page for iOS 27 and iPadOS 27, confirming support for up to 30 new languages and language variants. These updates cover multiple core functionalities, including Dictionary (Thesaurus), Siri voice activation, and Visual Look Up. The expansion of language support is not limited to single languages but also includes specific regional variants, such as Australian English and Canadian English. For the QuickType Keyboard, new supported features include custom corrections, predictive input, and multilingual input for various languages, such as Philippine English and Punjabi. Furthermore, Siri voice activation and Visual Look Up have added support for regions including Arabic (Saudi Arabia), Traditional Chinese (Hong Kong, Taiwan), Korean, Portuguese (Brazil), and Thai. These updates significantly enhance the operating system's internationalization and localization experience, allowing users to utilize Apple devices in a greater variety of language environments.",
    tags_en: ["iOS 27", "iPadOS 27", "Apple", "Language Support", "QuickType Keyboard", "Siri"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/ios-27-and-ipados-27-expand-language-support-for-dictionary-quicktype-keyboard-more", lang: "EN" }
    ]
  },
  {
    id: "20260918-12811",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27大幅升級AirPods功能：新增自訂EQ、GymKit心率同步及Siri AI語音助理",
    summary: "本文介紹iOS 27為AirPods系列帶來多項重大功能升級，特別強調AirPods Pro 3的升級內容。主要新增功能包括：自訂EQ（Custom EQ），允許用戶在AirPods設定中調整低、中、高頻的音頻曲線；GymKit擴展支援，讓AirPods Pro 3可透過心率感測器同步運動數據至iPhone，實現與跑步機等設備的數據整合；以及最主要的Siri AI升級，使AirPods成為AI穿戴裝置，具備線上知識查詢、對話式互動和個人情境識別等能力。此外，iOS 27也擴展了Precision Finding功能至AirPods Pro 3，並重新設計了AirPods的設定介面，使其更具條理性和易用性。這些更新提升了AirPods在健康監測、智能互動和使用便利性方面的實用價值。",
    tags: ["iOS 27", "AirPods Pro 3", "Siri AI", "Custom EQ", "GymKit", "Apple Watch"],
    title_en: "iOS 27 Significantly Upgrades AirPods Features: Adding Custom EQ, GymKit Heart Rate Sync, and Siri AI Voice Assistant",
    summary_en: "This article introduces several major feature upgrades that iOS 27 brings to the AirPods series, with a special focus on the enhancements for the AirPods Pro 3. Key new features include: Custom EQ, which allows users to adjust the low, mid, and high frequency audio curves within the AirPods settings; GymKit expansion support, enabling the AirPods Pro 3 to sync exercise data via a heart rate sensor to the iPhone, facilitating data integration with equipment like treadmills; and the most significant upgrade, Siri AI, transforming AirPods into an AI wearable device with capabilities such as online knowledge querying, conversational interaction, and personalized context recognition. Furthermore, iOS 27 extends the Precision Finding feature to the AirPods Pro 3 and redesigns the AirPods settings interface for improved organization and usability. These updates enhance the practical value of AirPods in health monitoring, smart interaction, and overall convenience.",
    tags_en: ["iOS 27", "AirPods Pro 3", "Siri AI", "Custom EQ", "GymKit", "Apple Watch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/airpods-pro-3-keep-getting-better-heres-whats-new-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260918-12812",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27搭載Apple Intelligence全面升級：Siri、系統應用與功能全面整合AI能力",
    summary: "Apple在iOS 27中推出了由下一代Apple Intelligence驅動的眾多新功能，大幅升級了用戶體驗。本次升級的核心是重新設計的Siri，它具備了廣泛的世界知識、個人上下文理解、螢幕內容感知等能力，能更深入地跨應用程式執行任務，例如撰寫草稿、生成內容等。此外，系統內建的應用程式如照片、訊息、日曆、郵件等也全面整合了AI功能，例如照片的空間重構、訊息的個人化智慧回覆、日曆的自然語言描述等。系統層面也新增了自動校對、通話上下文資訊顯示、以及增強的輔助功能等。這些AI功能旨在讓用戶在日常使用中獲得更智慧、更個人化的支援，顯著提升了iOS 27的整體可用性。",
    tags: ["iOS 27", "Apple Intelligence", "Siri", "Apple", "AI", "作業系統更新"],
    title_en: "iOS 27 with Apple Intelligence Upgrade: Comprehensive Integration of AI into Siri, System Apps, and Features",
    summary_en: "Apple has launched numerous new features in iOS 27, powered by the next-generation Apple Intelligence, significantly upgrading the user experience. The core of this upgrade is the redesigned Siri, which possesses extensive world knowledge, personal context understanding, and screen content awareness. This allows it to execute tasks more deeply across applications, such as drafting or generating content. Furthermore, built-in system applications like Photos, Messages, Calendar, and Mail have fully integrated AI capabilities. Examples include spatial reconstruction in Photos, personalized smart replies in Messages, and natural language descriptions in Calendar. The system level also introduces automatic proofreading, call context information display, and enhanced accessibility features. These AI functions aim to provide users with smarter, more personalized support in daily use, significantly enhancing the overall usability of iOS 27.",
    tags_en: ["iOS 27", "Apple Intelligence", "Siri", "Apple", "AI", "Operating System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/apple-intelligence-has-20-brand-new-features-in-ios-27-heres-the-full-list", lang: "EN" }
    ]
  },
  {
    id: "20260918-12815",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 Xcode 27.1 Beta，開發者可提前為摺疊式 iPhone Duo 進行應用程式開發",
    summary: "Apple 已發布 Xcode 27.1 beta 1，專門為開發者提供支援新型號摺疊式 iPhone Duo 的應用程式開發工具。雖然 iPhone Duo 尚未於十月正式上市，但此版本讓開發者能提前為該設備進行準備與測試。使用 iOS 26 SDK 建構的應用程式，若要支援 iPhone Duo，需要升級至 iOS 27。而針對 iOS 27.1 及更高版本的應用程式，則能充分利用摺疊螢幕提供的更大顯示空間。開發者在部署應用程式時，仍需考慮許多尺寸和佈局的調整。Xcode 27.1 beta 允許開發者在模擬器上虛擬體驗應用程式在 iPhone Duo 上的運行效果。此版本發布後，Apple 預計將 iOS 27.2 作為下一版軟體更新，適用於運行 iOS 27.0 的 iPhone，但 iPhone Duo 將會先運行專為摺疊設備設計的 iOS 27.1 版本，之後再與其他 iPhone 型號同步更新。iPhone Duo 將於 10 月 16 日開始預購，並於 10 月 23 日發貨。",
    tags: ["Xcode 27.1", "iPhone Duo", "iOS 27", "Apple 開發者", "Beta 版本", "摺疊螢幕"],
    title_en: "Apple Releases Xcode 27.1 Beta, Allowing Developers to Preemptively Develop for Foldable iPhone Duo",
    summary_en: "Apple has released Xcode 27.1 beta 1, providing developers with tools to develop applications specifically for the new foldable iPhone Duo model. Although the iPhone Duo is not scheduled for official launch until October, this version allows developers to prepare and test for the device in advance. Applications built using the iOS 26 SDK that aim to support the iPhone Duo will require an upgrade to iOS 27. For applications targeting iOS 27.1 and later versions, developers can fully utilize the expanded display space provided by the foldable screen. Developers must still consider numerous adjustments to sizing and layout when deploying applications. Xcode 27.1 beta enables developers to virtually experience how their applications will run on the iPhone Duo using the simulator. Following this release, Apple anticipates releasing iOS 27.2 as the next software update for iPhones running iOS 27.0, but the iPhone Duo will initially run a dedicated iOS 27.1 version designed for foldable devices, before synchronizing with other iPhone models. The iPhone Duo is scheduled for pre-order starting October 16 and shipping on October 23.",
    tags_en: ["Xcode 27.1", "iPhone Duo", "iOS 27", "Apple Developer", "Beta Version", "Foldable Screen"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/apple-releases-xcode-27-1-beta-enabling-iphone-duo-app-development", lang: "EN" }
    ]
  },
  {
    id: "20260918-12819",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 強化 Apple Wallet 功能：新增利用 Apple Cash 分攤帳單，提升用戶體驗",
    summary: "Apple 在 iOS 27 中大幅升級了 Apple Wallet 的功能，特別加入了透過 Apple Cash 進行帳單分攤（bill splitting）的機制。此新功能旨在讓用戶在與朋友或家人用餐後，能更輕鬆地結清帳款。用戶只需使用 iPhone 鏡頭掃描收據，或使用現有的收據照片，Apple Intelligence 就能自動識別收據上的各項商品，並讓用戶標記出各自應付的項目。整個流程極為順暢，甚至可以自動計算包含稅金和小費（如 18% 或 20%）的總支付金額。此功能可以在 Messages、Apple Wallet 或透過 Camera app 的 Siri 模式使用。這項整合讓 Apple Cash 的使用場景更廣，預計能提高其普及度。然而，若用戶尚未設定 Apple Cash，仍需要額外步驟，可能會稍稍減緩使用流程。",
    tags: ["iOS 27", "Apple Wallet", "Apple Cash", "Apple Intelligence", "帳單分攤", "iOS"],
    title_en: "iOS 27 Enhances Apple Wallet with Apple Cash Bill Splitting Feature",
    summary_en: "Apple has significantly upgraded Apple Wallet functionality in iOS 27, notably introducing a mechanism for splitting bills using Apple Cash. This new feature aims to make it easier for users to settle payments after dining with friends or family. Users can simply use their iPhone camera to scan a receipt or utilize an existing photo of a receipt. Apple Intelligence can then automatically identify individual items on the receipt and allow users to mark the specific items they are responsible for paying. The entire process is extremely smooth, even automatically calculating the total payment amount, including taxes and tips (such as 18% or 20%). This feature can be accessed through Messages, Apple Wallet, or via Siri in the Camera app. This integration expands the use cases for Apple Cash and is expected to boost its adoption rate. However, if the user has not yet set up Apple Cash, additional steps are required, which might slightly slow down the overall process.",
    tags_en: ["iOS 27", "Apple Wallet", "Apple Cash", "Apple Intelligence", "Bill Splitting", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/ios-27s-wallet-app-adds-feature-that-will-make-you-want-to-use-apple-cash", lang: "EN" }
    ]
  },
  {
    id: "20260918-12822",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPhone 18 Pro、Apple Watch Series 12 及 AirPods 5 等新產品",
    summary: "本文報導 Apple 於當日全球發布多款新產品，包括 iPhone 18 Pro、iPhone 18 Pro Max、Apple Watch Series 12、Apple Watch Ultra 4，以及 AirPods 5。這些產品是在上週的「Surprise and shine」活動中首次亮相。雖然 iPhone 18 Pro 和 Pro Max 在 Apple.com 訂購時，大多數型號仍需等待數週的預訂時間，但在許多地區仍可於店內提貨。此外，另一個產品 iPhone Duo 尚未上市，預計將於 10 月 16 日開放預購，並於 10 月 23 日出貨。文章主要為產品發布新聞，並提供了相關的產品評測連結及配件購買資訊。",
    tags: ["Apple", "iPhone 18 Pro", "Apple Watch Series 12", "AirPods 5", "產品發布"],
    title_en: "Apple Launches New Products Including iPhone 18 Pro, Apple Watch Series 12, and AirPods 5",
    summary_en: "This article reports that Apple globally launched multiple new products today, including the iPhone 18 Pro, iPhone 18 Pro Max, Apple Watch Series 12, Apple Watch Ultra 4, and AirPods 5. These products debuted at last week's \"Surprise and shine\" event. Although most models of the iPhone 18 Pro and Pro Max require several weeks of pre-order waiting time when ordered on Apple.com, they are still available for in-store pickup in many regions. Additionally, another product, the iPhone Duo, has not yet launched and is scheduled for pre-order on October 16th, with shipments beginning on October 23rd. The article primarily serves as a product launch news report, providing links to related product reviews and accessory purchase information.",
    tags_en: ["Apple", "iPhone 18 Pro", "Apple Watch Series 12", "AirPods 5", "Product Launch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/iphone-18-pro-apple-watch-series-12-and-ultra-4-airpods-5-now-available-in-stores", lang: "EN" }
    ]
  },
  {
    id: "20260918-12825",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 升級：Apple Music 整合五大新功能，提升用戶體驗與內容管理",
    summary: "本文介紹了 iOS 27 作業系統預計為 Apple Music 帶來一系列的改進與五個新功能。這些更新旨在提升用戶在音樂聆聽、內容管理和個人化體驗方面的便利性。雖然文章未提供具體的技術細節或漏洞資訊，但從功能層面來看，這些更新預計會優化音樂庫的瀏覽介面、增強離線收聽功能，並可能整合更進階的社群分享或個人化推薦系統。對於用戶而言，這代表著在不改變使用習慣的前提下，能獲得更流暢、更豐富的音樂服務體驗。建議用戶在 iOS 27 正式發布後，留意 Apple 官方的更新公告，以充分利用這些新功能。",
    tags: ["iOS 27", "Apple Music", "Apple", "作業系統更新", "用戶介面"],
    title_en: "iOS 27 Upgrade: Apple Music Integrates Five Major New Features to Enhance User Experience and Content Management",
    summary_en: "This article introduces a series of improvements and five new features expected to arrive in Apple Music with the iOS 27 operating system. These updates aim to enhance user convenience in music listening, content management, and personalized experiences. Although the article does not provide specific technical details or vulnerability information, from a functional perspective, these updates are expected to optimize the music library browsing interface, strengthen offline listening capabilities, and potentially integrate more advanced social sharing or personalized recommendation systems. For users, this means gaining a smoother and richer music service experience without changing existing usage habits. Users are advised to monitor official Apple announcements after the official release of iOS 27 to fully utilize these new features.",
    tags_en: ["iOS 27", "Apple Music", "Apple", "OS Update", "User Interface"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/apple-music-in-ios-27-five-new-features-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260918-12826",
    trackers: ["os"],
    category: "Apple",
    title: "預告 iPhone Duo 功能：展示軟體鍵盤、分屏多工處理及相機等新功能",
    summary: "文章介紹了尚未發布的 iPhone Duo 機型，並根據網路上流出的實機操作影片，展示了其多項創新功能。這些功能包括在外接螢幕上的單手輸入體驗，以及在折疊螢幕上可實現的「分體鍵盤」（split keyboard UI）。此外，在橫向模式下，iPhone Duo 的多工處理介面設計類似 iPad，內容顯示在右側，左側配有側邊欄。影片也展示了閱讀體驗、相機功能、遊戲模式和 StandBy 模式等。整體而言，iPhone Duo 預計將提供比以往 iPhone 更獨特的用戶體驗，特別是在多工處理和鍵盤設計方面進行了大幅優化。",
    tags: ["iPhone Duo", "Apple", "iOS", "軟體鍵盤", "多工處理", "折疊螢幕"],
    title_en: "Previewing iPhone Duo Features: Displaying Software Keyboard, Split-Screen Multitasking, and Camera Functionality",
    summary_en: "This article introduces the unreleased iPhone Duo model, showcasing its various innovative features based on leaked operational videos. These features include a single-handed input experience on external screens, and a 'split keyboard UI' achievable on a foldable display. Furthermore, in landscape mode, the iPhone Duo's multitasking interface design resembles that of an iPad, with content displayed on the right and a sidebar on the left. The videos also demonstrate reading experience, camera functions, gaming modes, and StandBy mode. Overall, the iPhone Duo is expected to provide a more unique user experience than previous iPhones, with significant enhancements particularly in multitasking and keyboard design.",
    tags_en: ["iPhone Duo", "Apple", "iOS", "Software Keyboard", "Multitasking", "Foldable Display"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/iphone-duo-videos-reveal-split-keyboard-app-multitasking-more", lang: "EN" }
    ]
  },
  {
    id: "20260918-12827",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 上線：除了 Apple Intelligence 外，新增多項實用功能提升用戶體驗",
    summary: "Apple 本週發布 iOS 27 作業系統，除了主打的 Siri AI 和 Apple Intelligence 功能外，也帶來了多項實用的系統升級。主要更新包括：iCloud 共享相簿支援全解析度分享，大幅提升照片分享的品質；在「時鐘」App 中新增了獨立鬧鐘音量設定，讓鬧鐘音量不再受鈴聲影響；主畫面新增了超大尺寸 Widget，支援 Music、Photos、Weather 等應用；用戶現在可以在鎖定畫面（Lock Screen）上移除 Now Playing Widget，並將時鐘移動到頂部 Widget 行；相簿 App 支援從影片中直接保存特定畫面；此外，Apple Pay 結帳流程經過大幅優化，使用體驗更順暢。其他亮點包括「尋找」（Find My）App 的新設計與更靈活的分享選項，以及系統級的剪貼簿快捷鍵，讓跨應用程式的複製貼上更快速。這些更新旨在全面提升用戶在多種場景下的操作效率與便利性。",
    tags: ["iOS 27", "Apple Intelligence", "iCloud", "Widget", "Apple Pay", "Find My"],
    title_en: "iOS 27 Launched: Beyond Apple Intelligence, Multiple Practical Features Enhance User Experience",
    summary_en: "Apple released the iOS 27 operating system this week, bringing multiple practical system upgrades in addition to the main features of Siri AI and Apple Intelligence. Key updates include: iCloud shared albums now support full-resolution sharing, significantly improving photo sharing quality; the Clock app added independent alarm volume settings, ensuring the alarm volume is no longer affected by the ringtone volume; the Home Screen introduced ultra-large widgets supporting applications like Music, Photos, and Weather; users can now remove the Now Playing widget from the Lock Screen and move the clock to the top widget row; the Photos app supports saving specific frames directly from videos; furthermore, the Apple Pay checkout process has been significantly optimized, resulting in a smoother user experience. Other highlights include a redesigned and more flexible Find My app, as well as system-level clipboard shortcuts, making copy-pasting across applications faster. These updates aim to comprehensively enhance user operational efficiency and convenience across various scenarios.",
    tags_en: ["iOS 27", "Apple Intelligence", "iCloud", "Widget", "Apple Pay", "Find My"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/ios-27-my-favorite-new-iphone-features-other-than-ai", lang: "EN" }
    ]
  },
  {
    id: "20260918-12828",
    trackers: ["os"],
    category: "Apple",
    title: "Safari 27.0 重磅升級：引入 Safari MCP 伺服器，強化 AI 代理程式開發工作流",
    summary: "Apple 發布 WebKit 博客，詳細介紹 Safari 27.0 的新功能。其中最主要的亮點是 Safari MCP 伺服器，旨在讓 AI 代理程式（如 Claude Code、Codex 等）能夠控制瀏覽器視窗，大幅提升開發者的工作效率。透過 MCP 伺服器，代理程式可以存取 DOM、網路請求、螢幕截圖和控制台輸出，從而協助開發者驗證表單狀態、比較不同瀏覽器的樣式、測試無障礙性問題，並分析性能。Apple 強調，MCP 伺服器完全在本地運行，不會進行網路呼叫，且不會存取用戶的個人資訊。此外，Safari 27.0 還修復了近 850 個問題，並新增了對沉浸式環境的支援，擴展了 HTML `<model>` 元素，讓網站可以直接嵌入互動式 3D 模型。另有 Scroll Anchoring 功能，防止網頁內容跳動，以及 Web Inspector 的多項優化。",
    tags: ["Safari 27.0", "WebKit", "Apple", "AI 代理程式", "MCP 伺服器", "WebAssembly", "iOS"],
    title_en: "Safari 27.0 Major Upgrade: Introducing Safari MCP Server to Enhance AI Agent Development Workflow",
    summary_en: "Apple released a WebKit blog detailing the new features in Safari 27.0. The most significant highlight is the Safari MCP server, designed to allow AI agents (such as Claude Code, Codex, etc.) to control the browser window, greatly improving developer efficiency. Through the MCP server, agents can access the DOM, network requests, screenshots, and console output, thereby assisting developers in validating form states, comparing styles across different browsers, testing accessibility issues, and analyzing performance. Apple emphasized that the MCP server operates entirely locally, does not perform network calls, and does not access user personal information. Furthermore, Safari 27.0 fixed nearly 850 issues and added support for immersive environments by expanding the HTML `<model>` element, allowing websites to directly embed interactive 3D models. It also includes a Scroll Anchoring feature to prevent web page content jumping, along with various optimizations to the Web Inspector.",
    tags_en: ["Safari 27.0", "WebKit", "Apple", "AI Agents", "MCP Server", "WebAssembly", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/17/webkit-blog-breaks-down-whats-new-with-safari-27-for-developers-including-mcp-support", lang: "EN" }
    ]
  },
  {
    id: "20260918-12829",
    trackers: ["os"],
    category: "Apple",
    title: "WhatsApp 為 iOS 用戶推出聊天室內搜尋按鈕，簡化訊息查找流程",
    summary: "WhatsApp 近期在進行測試後，現已開始向 iPhone 用戶推送新的聊天室內搜尋按鈕。此功能旨在大幅簡化用戶查找聊天記錄的流程。過去，用戶若需搜尋訊息，必須點擊聯絡人或群組名稱，進入聊天資訊頁面，再選擇搜尋選項，流程較為繁瑣。新按鈕的加入，允許用戶直接在聊天介面內啟動搜尋，無需離開對話頁面。根據 WABetaInfo 的報導，此按鈕會根據用戶滾動聊天內容的位置而出現，當用戶向上滾動時，按鈕會出現在螢幕頂部，並在滾動到聊天底部時消失。此功能適用於個人聊天、群組聊天和頻道，使用方式與現有搜尋模式一致，用戶無需學習新操作。由於 WhatsApp 的功能推送通常需要時間，因此新功能可能不會立即覆蓋所有用戶。",
    tags: ["WhatsApp", "iOS", "聊天室功能", "搜尋功能", "WABetaInfo"],
    title_en: "WhatsApp rolls out in-chat search button for iOS users, simplifying message lookup process",
    summary_en: "Following recent testing, WhatsApp has begun rolling out a new in-chat search button to iPhone users. This feature is designed to significantly simplify the process of users finding chat history. Previously, if a user needed to search for a message, they had to click on the contact or group name, enter the chat information page, and then select the search option, which was a cumbersome process. The addition of the new button allows users to initiate a search directly within the chat interface, without leaving the conversation page. According to WABetaInfo, this button appears based on the user's scroll position within the chat content: it appears at the top of the screen when the user scrolls up, and disappears when scrolling to the bottom of the chat. This feature is applicable to personal chats, group chats, and channels, and the usage method remains consistent with the existing search mode, requiring no new learning for users. Since WhatsApp's feature rollouts often take time, the new feature may not be immediately available to all users.",
    tags_en: ["WhatsApp", "iOS", "Chatroom Feature", "Search Feature", "WABetaInfo"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/17/whatsapp-starts-rolling-out-new-in-chat-search-button-on-ios", lang: "EN" }
    ]
  },
  {
    id: "20260918-12569",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Vectra AI 推出 Ascent 合作夥伴計畫，應對 AI 驅動的複雜資安威脅",
    summary: "隨著攻擊者利用 AI 提升攻擊速度和複雜度，資安環境日益複雜，組織亟需更深入的能見度與更強的防禦能力。Vectra AI 宣布推出 Ascent 全球合作夥伴計畫，旨在建立一個結合技術、專業知識與服務的生態系統，協助客戶應對日益複雜的資安挑戰。該計畫超越傳統的交易型合作模式，著重於四個維度：共同銷售（Co-Sell）、共同行銷（Co-Market）、共同交付（Co-Deliver）以及共同創新（Co-Innovate）。Ascent 旨在將 Vectra AI 與其合作夥伴（包括 MSSPs、系統整合商等）緊密結合，提供深度的專業知識和增值服務，幫助客戶識別資安漏洞、現代化安全營運，並提升對現代攻擊的韌性。此舉強調了在 AI 時代，企業需要尋求可信賴的顧問，以解決更廣泛的 AI 資安挑戰。",
    tags: ["Vectra AI", "Ascent", "AI 安全", "資安威脅", "MSSPs", "安全生態系統"],
    title_en: "Vectra AI Launches Ascent Partner Program to Address AI-Driven Complex Security Threats",
    summary_en: "As attackers leverage AI to increase the speed and complexity of attacks, the cybersecurity landscape is becoming increasingly complex, requiring organizations to have deeper visibility and stronger defense capabilities. Vectra AI has announced the launch of the Ascent Global Partner Program, which aims to build an ecosystem combining technology, expertise, and services to help clients address increasingly complex security challenges. This program goes beyond traditional transactional partnerships, focusing on four dimensions: Co-Sell, Co-Market, Co-Deliver, and Co-Innovate. Ascent aims to tightly integrate Vectra AI with its partners (including MSSPs, system integrators, etc.), providing deep expertise and value-added services to help clients identify security vulnerabilities, modernize security operations, and enhance resilience against modern attacks. This move emphasizes that in the age of AI, enterprises need to seek trusted advisors to solve broader AI security challenges.",
    tags_en: ["Vectra AI", "Ascent", "AI Security", "Cybersecurity Threats", "MSSPs", "Security Ecosystem"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/vectra-ai-launches-ascent-new-era-ai-driven-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260918-12572",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "MFA不足以防禦OAuth同意權濫用：資安應強化授權治理與監控",
    summary: "本文指出，僅依賴多因素驗證（MFA）來保護帳戶是不足夠的。攻擊者可以透過一個看似正常的OAuth同意提示，在無需竊取密碼或運行惡意軟體的情況下，取得持久的SaaS應用程式存取權。OAuth同意權濫用本質上是一個授權治理問題，而非單純的釣魚風險。攻擊路徑是透過惡意連結引導用戶進入真實的OAuth授權流程，用戶在同意後，攻擊者可取得的token或應用程式權限，將允許持續的API存取。因此，組織應建立四層防禦：第一，實施同意治理，要求高風險權限需經管理員審批；第二，實行範圍（Scope）紀律，確保應用程式權限具備最小必要原則；第三，強化同意後監控，特別關注新的應用程式同意、高權限範圍的批准，以及偏離用戶正常行為的API行為；第四，建立快速撤銷機制，確保能迅速識別並移除被濫用的應用程式權限和刷新Token。這能將安全焦點從單純的身份驗證，轉移到授權和行為監控。",
    tags: ["OAuth", "MFA", "授權治理", "SaaS", "API 權限", "最小權限原則"],
    title_en: "MFA is Insufficient to Prevent OAuth Consent Abuse: Security Must Strengthen Authorization Governance and Monitoring",
    summary_en: "This article points out that relying solely on Multi-Factor Authentication (MFA) to protect accounts is insufficient. Attackers can obtain persistent SaaS application access through a seemingly normal OAuth consent prompt, without needing to steal passwords or run malware. OAuth consent abuse is fundamentally an authorization governance issue, rather than a simple phishing risk. The attack path involves guiding users via a malicious link into a legitimate OAuth authorization flow. After the user consents, the token or application permissions obtained by the attacker allow for continuous API access. Therefore, organizations should establish a four-layer defense: First, implement consent governance, requiring administrator approval for high-risk permissions; second, enforce scope discipline, ensuring application permissions adhere to the principle of least privilege; third, strengthen post-consent monitoring, paying special attention to new application consents, approval of high-privilege scopes, and API behavior that deviates from normal user activity; and fourth, establish a rapid revocation mechanism, ensuring that misused application permissions and refresh tokens can be quickly identified and removed. This shifts the security focus from mere identity authentication to authorization and behavior monitoring.",
    tags_en: ["OAuth", "MFA", "Authorization Governance", "SaaS", "API Permissions", "Principle of Least Privilege"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/mfa-oauth-consent-abuse", lang: "EN" }
    ]
  },
  {
    id: "20260918-12643",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "研究發現 WeaselBiscuit 惡意程式：透過 13 個 npm 套件散播，竊取 Chrome 擴充功能資料",
    summary: "資安研究人員發現了一組包含 13 個 npm 套件的惡意程式集群，該程式被命名為 WeaselBiscuit。此惡意程式屬於資訊竊取器（stealer），其功能與來自朝鮮民主主義人民共和國（DPRK）的 Contagious Interview 戰役相關的 BeaverTail 和 OtterCookie 兩款惡意程式有功能重疊。WeaselBiscuit 的設計強調輕巧和自包含性，透過 npm 匯入觸發，會引導載入器（loader.js）從 Npoint 存儲區拉取主惡意程式並直接在記憶體中執行。\n\n執行後，它會從獨立的 Npoint URL 解析命令與控制（C2）配置，並在 Windows、macOS 和 Linux 系統上收集 Chrome 擴充功能儲存區的資料。這包括竊取擴充功能本地設定目錄下的所有可讀、非空檔案（原始 LevelDB key/value store）。此外，根據 C2 伺服器的指令，它還能記錄剪貼簿內容和鍵盤輸入。雖然 WeaselBiscuit 缺乏遠端存取、持久化或加密貨幣提款功能，但其竊取擴充功能儲存區的能力具有重大的財務相關性，可能暴露錢包擴充功能狀態等敏感資料。\n\n雖然 OpenSourceMalware 指出其與 DPRK 工具鏈的重疊性，但缺乏確鑿的證據來將其歸因於北韓。建議開發者應警惕來自 npm 的惡意套件，並加強對第三方元件的審核，特別是那些具有資訊竊取和跨平台能力的套件。",
    tags: ["npm", "WeaselBiscuit", "資訊竊取器", "DPRK", "Contagious Interview", "開源安全"],
    title_en: "Research Uncovers WeaselBiscuit Malware: Spreading via 13 npm Packages to Steal Chrome Extension Data",
    summary_en: "Cybersecurity researchers have discovered a cluster of malicious code comprising 13 npm packages, named WeaselBiscuit. This malware is an information stealer, with functionalities overlapping those of BeaverTail and OtterCookie, which are associated with the Contagious Interview campaign originating from the Democratic People's Republic of Korea (DPRK). WeaselBiscuit is designed for lightweight and self-contained operation, triggering via npm import to pull the main payload from an Npoint storage area using a loader.js, and executing it directly in memory. After execution, it parses a command and control (C2) configuration from a separate Npoint URL and collects data from Chrome extension storage on Windows, macOS, and Linux systems. This includes stealing all readable, non-empty files (original LevelDB key/value store) from the extension's local configuration directory. Furthermore, based on C2 server instructions, it can also log clipboard contents and keystrokes. Although WeaselBiscuit lacks remote access, persistence, or cryptocurrency withdrawal capabilities, its ability to steal extension storage data holds significant financial relevance, potentially exposing sensitive data such as wallet extension statuses. While OpenSourceMalware points out its overlap with DPRK toolchains, definitive evidence linking it to North Korea is lacking. Developers are advised to be vigilant regarding malicious npm packages and strengthen the auditing of third-party components, especially those with information stealing and cross-platform capabilities.",
    tags_en: ["npm", "WeaselBiscuit", "Information Stealer", "DPRK", "Contagious Interview", "Open Source Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/weaselbiscuit-stealer-spreads-via-13.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12644",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安分析：PhantomRaven資訊竊取程式透過npm散播，疑利用LLM生成並鎖定漏洞賞金機會",
    summary: "一家財務動機的威脅行為者，透過npm套件註冊庫開發並散播了名為PhantomRaven的JavaScript資訊竊取程式。CrowdStrike分析指出，該惡意程式很可能利用大型語言模型（LLM）生成，從其冗長註釋和程式碼模式中得出。攻擊者利用了數百個惡意npm套件進行「slopsquatting」和「typosquatting」活動，竊取開發者的身份驗證Token、CI/CD密鑰和GitHub憑證。這些套件作為掩護，用於載入一個遠端動態依賴（RDD），從外部伺服器獲取惡意程式，避免被安全工具偵測。一旦安裝，惡意程式會掃描開發環境，收集電子郵件、CI/CD環境資訊、系統指紋（包含公網IP）以及Git/npm配置和CI/CD環境變數等敏感資料，並傳輸至攻擊者控制的伺服器。分析顯示，該行為者自2022年以來持續活躍，並聲稱是漏洞賞金獵人，其目的似乎是利用竊取資訊來識別漏洞賞金機會，而非公開販賣竊取資料。修補建議包括嚴格審核所有第三方npm套件的來源與內容，並實施最小權限原則，限制開發環境的資訊收集範圍。",
    tags: ["PhantomRaven", "npm", "JavaScript", "LLM", "資訊竊取", "供應鏈攻擊", "CrowdStrike"],
    title_en: "Security Analysis: PhantomRaven Information Stealer Disseminated via npm, Suspected to Utilize LLM Generation to Target Vulnerability Bounty Opportunities",
    summary_en: "A financially motivated threat actor developed and disseminated a JavaScript information stealer named PhantomRaven through the npm package registry. CrowdStrike analysis indicates that the malicious code was likely generated using a Large Language Model (LLM), inferred from its verbose comments and code patterns. The attacker utilized hundreds of malicious npm packages for 'slopsquatting' and 'typosquatting' activities, stealing developers' authentication tokens, CI/CD secrets, and GitHub credentials. These packages served as camouflage to load a Remote Dynamic Dependency (RDD), fetching the malicious code from an external server to evade detection by security tools. Once installed, the malware scans the development environment, collecting sensitive data such as emails, CI/CD environment information, system fingerprints (including public IP addresses), and Git/npm configurations and CI/CD environment variables, which are then transmitted to the attacker-controlled server. Analysis shows that the actor has been active since 2022 and claims to be a vulnerability bounty hunter; its apparent goal is to use the stolen information to identify vulnerability bounty opportunities, rather than publicly selling the stolen data. Remediation recommendations include strictly auditing the source and content of all third-party npm packages, and implementing the principle of least privilege to limit the scope of information collection within the development environment.",
    tags_en: ["PhantomRaven", "npm", "JavaScript", "LLM", "Information Stealer", "Supply Chain Attack", "CrowdStrike"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/claimed-bug-bounty-hunter-likely-used.html", lang: "EN" }
    ]
  },
  {
    id: "20260918-12736",
    trackers: ["os"],
    category: "Android",
    title: "Pixelated 117 播客討論 Android 17 QPR1 與未來筆電版 Android 發展",
    summary: "本期 Pixelated 播客第 117 集，討論了 Android 17 QPR1 的相關資訊，並預告了 Android 系統未來將在筆記型電腦（laptops）上推出的發展趨勢。內容主要聚焦於 Android 系統的最新版本迭代與跨裝置平台的應用擴展。雖然原文未提供具體的漏洞或安全細節，但從討論 Android 17 QPR1 和筆電版 Android 的角度來看，顯示 Google 正在持續推動 Android 系統的生態系整合與功能擴充，這對於開發者和資安人員關注跨平台兼容性與新架構的安全性至關重要。建議關注 Google 官方發布的 Android 系統更新與安全公告，以掌握最新的安全修補與功能特性。",
    tags: ["Android 17", "QPR1", "Google", "跨平台", "行動作業系統", "Pixelated"],
    title_en: "Pixelated Podcast Episode 117 Discusses Android 17 QPR1 and Future Laptop Android Development",
    summary_en: "In this episode of the Pixelated Podcast, Episode 117, we discuss information related to Android 17 QPR1 and preview the future development trends of the Android system on laptops. The content primarily focuses on the latest version iterations of the Android system and the expansion of application across cross-device platforms. Although the original text does not provide specific vulnerabilities or security details, the discussion of Android 17 QPR1 and laptop Android indicates that Google is continuously promoting the integration and functional expansion of the Android system ecosystem. This is crucial for developers and cybersecurity professionals to pay attention to cross-platform compatibility and the security of new architectures. We recommend monitoring official Google announcements regarding Android system updates and security advisories to stay informed about the latest security patches and features.",
    tags_en: ["Android 17", "QPR1", "Google", "Cross-Platform", "Mobile Operating System", "Pixelated"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/pixelated-117-googlebook-eve", lang: "EN" }
    ]
  },
  {
    id: "20260918-12738",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy S27 Ultra 與 S27 Pro 傳出電池規格：Ultra 預計提升至 5,700 mAh 級",
    summary: "根據一則傳聞洩漏的資料，三星（Samsung）下一代旗艦手機 Galaxy S27 Ultra 和 Galaxy S27 Pro 的電池容量規格已曝光。傳聞指出，Galaxy S27 Ultra 的額定容量為 5,534 mAh，預計廣告容量可達 5,700 mAh 左右；而 Galaxy S27 Pro 的預計廣告容量則為 5,200 mAh 左右。相較於前代 Galaxy S26 Ultra 的 5,000 mAh 廣告容量，S27 Ultra 的提升幅度約為 700 mAh，雖然增幅為 14%，但相較於近年來電池容量停滯的趨勢，仍是顯著的進步。此外，兩款機型均預計支援 60W 有線充電。然而，文章指出，在市場上已有如 Oppo Find X10 等傳聞搭載高達 8,000 mAh 電池的產品，這使得三星的電池升級幅度在業界競爭中仍有待觀察。",
    tags: ["Samsung", "Galaxy S27 Ultra", "Galaxy S27 Pro", "電池容量", "Android", "手機規格"],
    title_en: "Samsung Galaxy S27 Ultra and S27 Pro Rumored to Feature Battery Specs: Ultra Expected to Boost to 5,700 mAh Class",
    summary_en: "According to leaked data, the battery capacity specifications for Samsung's next-generation flagship phones, the Galaxy S27 Ultra and Galaxy S27 Pro, have been revealed. Rumors indicate that the Galaxy S27 Ultra has a rated capacity of 5,534 mAh, with an expected advertised capacity of around 5,700 mAh; while the Galaxy S27 Pro is rumored to have an advertised capacity of around 5,200 mAh. Compared to the previous generation Galaxy S26 Ultra's 5,000 mAh advertised capacity, the S27 Ultra's increase is approximately 700 mAh. Although this represents a 14% increase, it is considered a significant improvement given the recent trend of stagnant battery capacities. Furthermore, both models are expected to support 60W wired charging. However, the article notes that the market already contains rumored products, such as the Oppo Find X10, which boast batteries up to 8,000 mAh, making Samsung's battery upgrade increment something to watch in the industry competition.",
    tags_en: ["Samsung", "Galaxy S27 Ultra", "Galaxy S27 Pro", "Battery Capacity", "Android", "Phone Specifications"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/samsung-galaxy-s27-ultra-pro-battery-upgrades-leak", lang: "EN" }
    ]
  },
  {
    id: "20260918-12741",
    trackers: ["os"],
    category: "Android",
    title: "Android Auto 介面更新：修復長期困擾的行動訊號圖示缺失問題",
    summary: "近期有使用者回報，Android Auto 的狀態列長期存在行動訊號圖示顯示異常或缺失的 Bug。此問題已持續數月，影響了用戶對車載系統連網狀態的判斷。根據最新資訊，Android Auto 的更新似乎已經修復了這個困擾已久的介面錯誤。雖然文章未提供具體的修補版本號或CVSS分數，但這類介面修復對於提升用戶體驗和系統的可靠性至關重要。建議用戶留意 Google 發布的最新 Android Auto 更新，以確保獲得修復此類介面顯示問題的補丁，維持最佳的車載資訊顯示狀態。",
    tags: ["Android Auto", "Google", "介面 Bug", "行動訊號", "Android 系統更新"],
    title_en: "Android Auto Interface Update: Fixing Long-Standing Mobile Signal Icon Display Issue",
    summary_en: "Recently, users reported a persistent bug in Android Auto where the status bar frequently displayed abnormal or missing mobile signal icons. This issue has persisted for several months, affecting users' ability to accurately gauge the connectivity status of the in-vehicle system. According to the latest information, an Android Auto update appears to have fixed this long-standing interface error. Although the article does not provide specific patch version numbers or CVSS scores, such interface fixes are crucial for enhancing user experience and system reliability. Users are advised to monitor for the latest Android Auto updates released by Google to ensure they receive the patch that resolves this type of interface display issue, maintaining optimal in-vehicle information display status.",
    tags_en: ["Android Auto", "Google", "Interface Bug", "Mobile Signal", "Android System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/android-auto-update-might-fix-cellular-signal-icon-is-it-back-for-you", lang: "EN" }
    ]
  },
  {
    id: "20260918-12742",
    trackers: ["os"],
    category: "Android",
    title: "Valve 發布 Lepton 開源工具，讓 Android 遊戲能在 Linux 與 Steam Frame 上運行",
    summary: "Valve 近期釋出 Lepton 開源工具，旨在協助開發者將原生的 Android 遊戲移植到 Linux 系統和 Steam Frame 上運行。Lepton 是透過 Steam 客戶端使用的工具，主要目的是讓專屬於 Android 的遊戲能在 Linux 作業系統上執行。Valve 說明，該工具最初的目標是幫助遊戲開發者將 VR 版本的 Android 遊戲帶到 Steam Frame 平台。目前，部分開發者已開始利用 Lepton 將 Meta Quest 遊戲（Quest 運行 Android）移植到 Steam Frame 上。Steam Frame 是一款搭載 Snapdragon 晶片的 VR 頭戴裝置，定價為 $1,059，目前已開放等候名單。此工具的推出，預計將擴大 Android 遊戲在 PC VR 領域的兼容性與可玩性。",
    tags: ["Valve", "Lepton", "Android", "Steam Frame", "Linux", "VR"],
    title_en: "Valve releases Lepton open-source tool to run Android games on Linux and Steam Frame",
    summary_en: "Valve recently released the Lepton open-source tool, designed to help developers port native Android games to run on Linux systems and Steam Frame. Lepton is a tool utilized through the Steam client, primarily aimed at enabling games exclusive to Android to run on Linux operating systems. Valve stated that the tool's initial goal was to assist game developers in bringing VR versions of Android games to the Steam Frame platform. Currently, some developers have begun using Lepton to port Meta Quest games (which run Android) to Steam Frame. The Steam Frame is a VR headset equipped with a Snapdragon chip, priced at $1,059, and is currently accepting pre-orders. The introduction of this tool is expected to expand the compatibility and playability of Android games in the PC VR domain.",
    tags_en: ["Valve", "Lepton", "Android", "Steam Frame", "Linux", "VR"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/valves-open-source-lepton-brings-android-games-to-the-1059-steam-frame", lang: "EN" }
    ]
  },
  {
    id: "20260918-12745",
    trackers: ["os"],
    category: "Android",
    title: "三星相簿開始支援 Google Photos 同步功能，取代 OneDrive 備份整合",
    summary: "三星相簿（Samsung Gallery）正在逐步推出 Google Photos 同步功能，取代先前整合的 Microsoft OneDrive 備份功能。此功能更新需要用戶的 Samsung 設備運行 Android 13 或更高版本。啟用同步後，用戶可以在相簿的「設定」>「同步」中找到相關選項。Google 官方說明，透過三星相簿同步的圖片和影片，在 Google Photos 中將無法用於「回憶」、「亮點」、「活相簿」或「搜尋」等功能。此外，相簿同步的功能僅顯示從同步的 Samsung 設備傳輸的內容，無法顯示透過 Google Photos 直接備份的內容。三星雖然仍可存取原本從 Gallery Cloud Sync 備份的媒體項目，但無法存取未從同步的 Samsung 設備備份的其他 Google Photos 內容。三星相簿與 OneDrive 的整合將於 9 月 30 日結束支援。",
    tags: ["Samsung Gallery", "Google Photos", "Android 13", "OneDrive", "Samsung Cloud"],
    title_en: "Samsung Gallery begins supporting Google Photos sync, replacing OneDrive backup integration",
    summary_en: "Samsung Gallery is gradually rolling out Google Photos synchronization, replacing the previously integrated Microsoft OneDrive backup function. This feature update requires the user's Samsung device to run Android 13 or higher. After enabling synchronization, users can find the relevant options in the Gallery's 'Settings' > 'Sync'. Google officially stated that images and videos synced through Samsung Gallery will not be available for features such as 'Memories', 'Highlights', 'Live Albums', or 'Search' within Google Photos. Furthermore, the Gallery sync function only displays content transferred from the syncing Samsung device and cannot display content directly backed up via Google Photos. Although Samsung can still access media items originally backed up via Gallery Cloud Sync, it cannot access other Google Photos content that was not backed up from the syncing Samsung device. The integration of Samsung Gallery with OneDrive will end support on September 30th.",
    tags_en: ["Samsung Gallery", "Google Photos", "Android 13", "OneDrive", "Samsung Cloud"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/samsung-gallery-google-photos-sync-details-rollout", lang: "EN" }
    ]
  },
  {
    id: "20260918-12746",
    trackers: ["os"],
    category: "Android",
    title: "Pixel Now Playing 介面更新：新增背景音樂通知與操作優化",
    summary: "Google 透過伺服器端更新，為 Pixel 裝置推出 Now Playing 應用程式的最新版本 2026.08.27x，並同步更新 Android System Intelligence C.6。本次更新主要重啟了「辨識音樂通知」（Recognized Music Notifications）功能。此功能允許使用者在不開啟應用程式或檢查快速設定區塊的情況下，透過靜音通知了解正在播放的音樂資訊。使用者可透過擴展通知直接進入「歷史記錄」分頁或收藏歌曲。此外，Now Playing 的操作介面也進行了優化：點擊識別歌曲的選單按鈕後，現在會滑出底部工作表（bottom sheet），取代原有的浮動選單，提升單手操作的便利性。底部工作表提供歌曲資訊，並並列設置了分享、加入最愛和從歷史記錄中移除的按鈕，同時也新增了播放歌曲和特定音樂服務的快捷按鈕。此外，「最愛」分頁現在也包含日期和時間資訊，與「歷史記錄」饋源保持一致。此版本已透過 Google Play Store 廣泛推送。",
    tags: ["Pixel", "Now Playing", "Android System Intelligence", "Google", "使用者介面優化", "音樂通知"],
    title_en: "Pixel Now Playing Interface Update: Added Background Music Notifications and Operation Enhancements",
    summary_en: "Google has released the latest version of the Now Playing application, 2026.08.27x, for Pixel devices via a server-side update, along with an update to Android System Intelligence C.6. This update primarily reintroduces the \"Recognized Music Notifications\" feature. This feature allows users to receive silent notifications about currently playing music without needing to open the application or check the quick settings panel. Users can directly access the \"History\" tab or save songs via the expanded notification. Furthermore, the Now Playing interface has been optimized: after clicking the song identification menu button, a bottom sheet now slides out, replacing the previous floating menu, which improves convenience for one-handed operation. The bottom sheet provides song information and includes side-by-side buttons for sharing, adding to favorites, and removing from history. Additionally, quick buttons for playing the song and specific music services have been added. Moreover, the \"Favorites\" tab now includes date and time information, maintaining consistency with the \"History\" feed. This version has been widely pushed through the Google Play Store.",
    tags_en: ["Pixel", "Now Playing", "Android System Intelligence", "Google", "UI Optimization", "Music Notifications"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/17/pixel-now-playing-tweaks", lang: "EN" }
    ]
  },
  {
    id: "20260918-13028",
    trackers: ["os", "security"],
    category: "Android",
    title: "Acode Android 編輯器存在權限過度問題，允許本地應用程式執行高權限指令",
    summary: "資安研究發現 Acode，一款用於 Android 平台的強大文字與程式碼編輯器，在特定版本間存在安全漏洞。受影響版本範圍為 1.11.6 至 1.12.7。漏洞點在於 `com.foxdebug.acode.rk.exec.terminal.TerminalService` 服務在 `src/plugins/terminal/plugin.xml` 中被宣告為可導出服務，且未設置綁定權限。更嚴重的是，`src/plugins/terminal/src/android/TerminalService.java` 未能驗證呼叫者身份。這使得任何已安裝的 Android 應用程式都可以綁定此服務，並透過發送 `MSG_EXEC` 訊息，攜帶攻擊者控制的指令值。該指令值最終會被終端機實作透過 `ProcessBuilder` 傳遞給 `sh -c`，且是在 Acode 的使用者 ID (UID) 下執行。這項漏洞允許權限為零的本地應用程式，在無需額外互動的情況下，執行具有存取 Acode 私有資料、遠端憑證、Storage Access Framework 權限和運行時權限的指令，造成嚴重的本地資訊洩漏或遠端代碼執行風險。開發者已在版本 1.12.7 中修復此問題。",
    tags: ["Acode", "Android", "TerminalService", "本地應用程式", "權限過度", "CVE"],
    title_en: "Acode Android Editor Has Privilege Escalation Flaw, Allowing Local Apps to Execute High-Privilege Commands",
    summary_en: "Security researchers discovered a vulnerability in Acode, a powerful text and code editor for the Android platform, affecting versions between 1.11.6 and 1.12.7. The flaw lies in the `com.foxdebug.acode.rk.exec.terminal.TerminalService` service, which is declared as an exportable service in `src/plugins/terminal/plugin.xml` without setting binding permissions. More critically, `src/plugins/terminal/src/android/TerminalService.java` fails to validate the caller's identity. This allows any installed Android application to bind to the service and send an `MSG_EXEC` message carrying attacker-controlled command values. This command value is subsequently executed by the terminal implementation via `ProcessBuilder` using `sh -c`, and critically, it runs under Acode's User ID (UID). This vulnerability allows a zero-privilege local application to execute commands—without further interaction—that have access to Acode's private data, remote credentials, Storage Access Framework permissions, and runtime permissions, leading to severe local information leakage or remote code execution risk. The developer has patched this issue in version 1.12.7.",
    tags_en: ["Acode", "Android", "TerminalService", "Local Application", "Privilege Escalation", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68928", lang: "EN" }
    ]
  },
  {
    id: "20260918-12571",
    trackers: ["security"],
    category: "前瞻技術",
    title: "EY調查揭露：企業自主AI部署速度超越治理框架，內部監控與合規成最大挑戰",
    summary: "根據安永（EY US）發布的AI風險與治理調查，儘管許多大型企業（年收入至少10億美元）已制定了正式的AI治理政策，但在實際部署和運用上，政策與實踐仍存在巨大落差。受訪高階主管指出，約半數企業曾因緊急部署而未遵循既有的AI治理流程。特別是「Agentic AI」（自主代理AI）的快速採用，帶來了新的治理挑戰：約四分之一使用此類AI的企業，無法偵測到內部未經授權的AI代理活動。此外，約三分之一的企業已經歷了由AI相關事件或故障導致的重大負面影響，包括資料外洩、財務損失和營運中斷。專家警告，企業必須在加速AI採用與建立適當治理之間找到平衡，否則將面臨聲譽、財務和營運上的風險。企業正透過進行正式的AI保證審核（AI assurance review）來彌補治理鴻溝，常見問題包括資料品質問題、AI模型漂移和影子AI。",
    tags: ["AI治理", "Agentic AI", "AI風險", "EY US", "資料外洩", "影子AI"],
    title_en: "EY Investigation Reveals: Corporate Autonomous AI Deployment Outpaces Governance Frameworks, Making Internal Monitoring and Compliance the Biggest Challenges",
    summary_en: "According to an AI risk and governance survey released by EY US, although many large enterprises (with annual revenues of at least $1 billion) have established formal AI governance policies, a significant gap remains between policy and actual practice in deployment and operation. Interviewed senior executives pointed out that approximately half of the companies had not followed existing AI governance procedures due to urgent deployments. The rapid adoption of 'Agentic AI' has introduced new governance challenges: approximately one quarter of companies using this type of AI cannot detect unauthorized internal AI agent activity. Furthermore, about one third of companies have experienced significant negative impacts—including data leaks, financial losses, and operational disruptions—stemming from AI-related incidents or failures. Experts warn that companies must find a balance between accelerating AI adoption and establishing proper governance, otherwise they face reputational, financial, and operational risks. Companies are addressing this governance gap by conducting formal AI assurance reviews, with common issues including data quality problems, AI model drift, and shadow AI.",
    tags_en: ["AI Governance", "Agentic AI", "AI Risk", "EY US", "Data Leakage", "Shadow AI"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/ey-survey-autonomous-ai-implementation-outpaces-oversight", lang: "EN" }
    ]
  },
  {
    id: "20260918-12573",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI代理人攻擊事件：西班牙機構遭資料外洩，個人資料被修改",
    summary: "西班牙資料保護局（AEPD）報告了一起個人資料外洩事件，受害者為一家未具名機構。事件顯示，攻擊者利用一個「知名語言模型」驅動的代理人式AI系統，成功入侵了企業的個人資料儲存庫。攻擊流程包括：首先讓AI搜尋目標組織的「通用」檔案，從中發現並利用了鬆散的憑證（loose credentials）；隨後，AI利用這些憑證登入內部系統，並進一步利用了企業應用程式的漏洞。這使得攻擊者不僅能存取個人資料，還能修改資料記錄並查看公司發票。專家指出，AI代理人能夠自動化、加速並鏈接傳統的網路攻擊步驟，極大地縮短了攻擊週期，使傳統依賴人工判斷的事件回應流程難以應對。AEPD建議組織應加強數位身份和憑證的安全，並加速修復事件回應流程，以應對機器速度的持續性威脅。",
    tags: ["AI Agent", "資料外洩", "AEPD", "語言模型", "憑證管理", "個人資料"],
    title_en: "AI Agent Attack Incident: Spanish Institution Suffers Data Leak and Personal Data Modification",
    summary_en: "The Spanish Data Protection Agency (AEPD) reported a personal data leak incident affecting an unnamed organization. The incident revealed that attackers utilized an agentic AI system powered by a 'well-known language model' to successfully breach the enterprise's personal data repository. The attack process involved: first, the AI searching for the target organization's 'general' files, thereby discovering and exploiting loose credentials; subsequently, the AI used these credentials to log into internal systems and further exploited vulnerabilities within the corporate application. This allowed the attackers not only to access personal data but also to modify data records and view company invoices. Experts point out that AI agents can automate, accelerate, and chain together traditional cyber attack steps, drastically shortening the attack cycle and making traditional incident response processes, which rely on manual judgment, difficult to manage. The AEPD advises organizations to strengthen digital identity and credential security, and to accelerate the remediation of incident response processes to cope with continuous machine-speed threats.",
    tags_en: ["AI Agent", "Data Leak", "AEPD", "Language Model", "Credential Management", "Personal Data"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/ai-agent-breaches-spanish-organization-personal-data", lang: "EN" }
    ]
  },
  {
    id: "20260918-12705",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "KISA與WEF、新加坡CSA會談：深化AI時代全球網路安全合作",
    summary: "韓國資訊通信振興院（KISA）於18日召開會議，與世界經濟論壇（WEF）網路安全中心及新加坡資訊通信安全局（CSA）代表團，共同討論擴大在人工智慧（AI）時代的全球網路安全合作方案。此次會談旨在分享各機構的全球網絡、網路安全政策、技術和經驗，並發掘AI安全領域的新合作課題。KISA與WEF討論了網路安全人才培養、AI驅動的網路威脅聯合應對、網路犯罪應對、網路侵害事件的經濟影響共同研究，以及與WEF和沙烏地阿拉伯全球網路安全論壇（GCF）共同營運的網路經濟中心（CCE）的合作等。此外，雙方也討論了KISA的K-Shield和下一代安全領袖培養計畫（BoB）等實戰型訓練經驗與WEF全球網絡的結合。與新加坡CSA的討論則著重於檢視物聯網（IoT）合作成果，並擴展至AI系統及AI嵌入產品安全、AI驅動的網路威脅情報共享、關鍵資訊基礎設施保護經驗分享，以及網路安全人才交流等方向。KISA表示，隨著利用AI的網路威脅跨越國界發展，與全球夥伴的合作和共同應對變得至關重要。",
    tags: ["KISA", "WEF", "CSA", "人工智慧", "AI安全", "網路安全", "全球合作"],
    title_en: "KISA Meets with WEF and Singapore CSA to Deepen Global Cybersecurity Cooperation in the AI Era",
    summary_en: "The Korea Internet & Security Agency (KISA) held a meeting on the 18th with representatives from the World Economic Forum (WEF) Cybersecurity Center and the Singapore Cybersecurity Agency (CSA) to discuss expanding global cybersecurity cooperation in the age of Artificial Intelligence (AI). The meeting aimed to share each organization's global network, cybersecurity policies, technologies, and experiences, while identifying new areas for cooperation in AI security. KISA and WEF discussed cybersecurity talent development, joint response to AI-driven cyber threats, cybercrime response, joint research on the economic impact of cyber incidents, and cooperation on the Cyber Center of Excellence (CCE), which is jointly operated with WEF and the Saudi Arabia Global Cybersecurity Forum (GCF). Furthermore, the two parties discussed integrating KISA's practical training experiences, such as K-Shield and the Blueprint of the Future (BoB) program for cultivating next-generation security leaders, with the WEF Global Network. Discussions with the Singapore CSA focused on reviewing IoT cooperation outcomes, expanding to the security of AI systems and AI-embedded products, sharing intelligence on AI-driven cyber threats, exchanging experiences in protecting critical information infrastructure, and talent exchange in cybersecurity. KISA stated that as cyber threats utilizing AI develop across borders, cooperation and joint response with global partners are becoming critically important.",
    tags_en: ["KISA", "WEF", "CSA", "Artificial Intelligence", "AI Security", "Cybersecurity", "Global Cooperation"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145946", lang: "EN" }
    ]
  },
  {
    id: "20260918-12735",
    trackers: ["os"],
    category: "重點關注",
    title: "Gemini App 擴充 macOS 整合 iMessage 功能，實現訊息閱讀與自動化回覆",
    summary: "Google 推出了 Gemini 應用程式的最新 macOS 更新，使其能夠整合 Apple Messages 的 iMessage 功能。透過這個「Connected App」功能，使用者可以讓 Gemini 讀取、搜尋和發送訊息，從而能根據對話內容獲取上下文資訊。具體應用包括發送訊息給聯絡人、查看近期對話紀錄，以及在訊息歷史中進行搜尋，例如查詢晚餐預約。然而，此整合目前仍有功能限制，例如無法管理群組成員、排程或編輯訊息、發送媒體附件（僅限純文字）、或發送反應（如讚、愛心）。使用者需在設定 > Connected Apps 中，並更新至 Gemini for macOS 的版本 1.116.5.889 才能看到此功能。目前觀察到伺服器端元件似乎尚未完全啟用，@messages 在提示框中尚未被識別。此外，Gemini for macOS 也新增了 File Providers 擴充功能，允許使用者在 Finder 中右鍵點擊檔案，直接將其加入提示框供 Gemini 處理。",
    tags: ["Gemini", "macOS", "iMessage", "Apple Messages", "Connected App", "Google"],
    title_en: "Gemini App Expands macOS Integration with iMessage Functionality for Reading and Automated Replies",
    summary_en: "Google has released the latest macOS update for the Gemini application, enabling it to integrate with Apple Messages' iMessage functionality. Through this 'Connected App' feature, users can allow Gemini to read, search, and send messages, thereby obtaining contextual information based on the conversation content. Specific applications include sending messages to contacts, viewing recent conversation history, and searching within message history, such as querying dinner reservations. However, this integration currently has functional limitations, such as the inability to manage group members, schedule or edit messages, send media attachments (limited to plain text), or send reactions (like thumbs up or heart). Users must navigate to Settings > Connected Apps and update to version 1.116.5.889 of Gemini for macOS to see this feature. Currently, it is observed that the server-side component does not appear to be fully enabled, and @messages has not yet been recognized in the prompt box. Furthermore, Gemini for macOS has added a File Providers extension, allowing users to right-click files in Finder and directly include them in the prompt box for Gemini to process.",
    tags_en: ["Gemini", "macOS", "iMessage", "Apple Messages", "Connected App", "Google"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/gemini-macos-imessage", lang: "EN" }
    ]
  },
  {
    id: "20260918-12737",
    trackers: ["os"],
    category: "重點關注",
    title: "華碩 Googlebook 洩漏圖片曝光，預計搭載大尺寸觸控板與多樣化連接埠",
    summary: "根據洩漏的圖片，華碩（Asus）的 Googlebook 筆記型電腦展示了其外觀設計和硬體配置。從側面視角看來，該機型至少配備了兩個 USB-C 連接埠、數個 USB-A 連接埠，以及一個耳機插孔。此外，它具備了指紋感應器、尺寸可觀的觸控板，以及外置的燈條。文章還提到，鍵盤周圍設計了專用的「G」鍵，類似於 Windows 的啟動按鈕。Google 已確認 Googlebook 的預購將於下週開始，預計將提供更多詳細資訊。",
    tags: ["Asus", "Googlebook", "筆記型電腦", "硬體洩漏", "Windows"],
    title_en: "Leaked Images Reveal Asus Googlebook Laptop Featuring Large Touchpad and Diverse Ports",
    summary_en: "According to leaked images, Asus's Googlebook laptop showcases its exterior design and hardware configuration. From a side view, the model is equipped with at least two USB-C ports, several USB-A ports, and a headphone jack. Furthermore, it features a fingerprint sensor, a sizable touchpad, and an external light strip. The article also mentions a dedicated 'G' key designed around the keyboard, similar to the Windows start button. Google has confirmed that pre-orders for the Googlebook will begin next week and expects to provide more detailed information.",
    tags_en: ["Asus", "Googlebook", "Laptop", "Hardware Leak", "Windows"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/asus-googlebook-shows-off-a-big-trackpad-and-plenty-of-ports-in-leaked-images-gallery", lang: "EN" }
    ]
  },
  {
    id: "20260918-12740",
    trackers: ["os"],
    category: "重點關注",
    title: "Amazon Prime Day促銷：Galaxy Z Fold 8、Galaxy Z Fold 8 Ultra及Windows Copilot+ PC大幅折扣",
    summary: "本文為9to5Toys的產品優惠彙報，介紹了多項電子產品的促銷活動。主要優惠包括Galaxy Z Fold 8和Galaxy Z Fold 8 Ultra在Amazon的折扣，折扣金額分別為$250至$380以上，以及$300至$577的開箱折扣。此外，文章還報導了Best Buy舉辦的為期一天的Windows Copilot+ PC閃購活動，消費者可享受高達$650的折扣，其中特別提到Lenovo的Snapdragon X2 Elite Yoga Slim 7x Copilot+ PC是本次促銷的重點產品。這些優惠活動主要針對消費電子產品市場，提供用戶購買最新型號智慧型手機和搭載Copilot+功能的PC的機會。",
    tags: ["Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Windows Copilot+ PC", "Lenovo", "Amazon Prime Day", "Best Buy"],
    title_en: "Amazon Prime Day Deals: Significant Discounts on Galaxy Z Fold 8, Galaxy Z Fold 8 Ultra, and Windows Copilot+ PCs",
    summary_en: "This article compiles product deals from 9to5Toys, introducing various electronics sales. Key offers include discounts on the Galaxy Z Fold 8 and Galaxy Z Fold 8 Ultra on Amazon, with savings ranging from $250 to $380, and an unboxing discount of $300 to $577. Additionally, the article reports on a one-day flash sale event at Best Buy for Windows Copilot+ PCs, where consumers can enjoy discounts of up to $650. A specific highlight of this promotion is the Lenovo Snapdragon X2 Elite Yoga Slim 7x Copilot+ PC. These deals primarily target the consumer electronics market, offering users opportunities to purchase the latest smartphone models and PCs equipped with Copilot+ functionality.",
    tags_en: ["Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Windows Copilot+ PC", "Lenovo", "Amazon Prime Day", "Best Buy"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/deals-galaxy-z-fold-8-ultra-copilot-pc-sale-lenovo", lang: "EN" }
    ]
  },
  {
    id: "20260918-12744",
    trackers: ["os"],
    category: "重點關注",
    title: "Motorola 預告「Signature 27」手機，將於 Snapdragon Summit 發表",
    summary: "Motorola 在社交媒體上預告，其新款智慧型手機「Signature 27」將於 9 月 22 日詳細介紹。此日期恰逢高通（Qualcomm）年度 Snapdragon Summit 的開幕日，該峰會通常會發布當年度的旗艦 Snapdragon 晶片組。雖然首次發布的 Motorola Signature 機型搭載的是 Snapdragon 8 Gen 5，但對於「Signature 27」最終將採用何種晶片組仍不明確。從時間點來看，這是一個加速的產品發表時程。此外，Motorola 的網站也暗示「Signature 27」可能會進入美國市場。該手機的預覽影片展示了綠色外觀、布料感背板，並強調了帶有 Dolby Vision 標記的相機系統，以及一個較大的鏡頭。目前除了發表日期外，其他詳細規格仍待公布。",
    tags: ["Motorola", "Signature 27", "Snapdragon Summit", "Qualcomm", "智慧型手機"],
    title_en: "Motorola Teases 'Signature 27' Phone for Snapdragon Summit Launch",
    summary_en: "Motorola has teased that its new smartphone, the 'Signature 27,' will be detailed on September 22nd. This date coincides with the opening day of Qualcomm's annual Snapdragon Summit, an event that typically unveils the year's flagship Snapdragon chipset. Although the initially revealed Motorola Signature model is equipped with the Snapdragon 8 Gen 5, it remains unclear what chipset 'Signature 27' will ultimately utilize. From a timing perspective, this suggests an accelerated product launch schedule. Furthermore, Motorola's website hints that the 'Signature 27' may enter the US market. The preview video for the phone showcased a green aesthetic, a fabric-feel back panel, and emphasized a camera system marked with Dolby Vision, along with a larger lens. Currently, only the launch date has been announced, and other detailed specifications are pending.",
    tags_en: ["Motorola", "Signature 27", "Snapdragon Summit", "Qualcomm", "Smartphone"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/18/motorola-signature-27-teaser-snapdragon", lang: "EN" }
    ]
  },
  {
    id: "20260918-12813",
    trackers: ["os"],
    category: "重點關注",
    title: "Homey 推出新功能，透過 Matter 標準化機制實現設備韌體更新，提升智慧家庭可靠性",
    summary: "本文介紹 Homey 平台新增的「設備更新」（Device Updates）功能，旨在解決智慧家庭設備韌體更新流程複雜、難度高的痛點。該功能允許使用者直接透過 Homey Mobile App 或 Web App，對 Matter、Z-Wave 和 Zigbee 設備進行韌體更新，無需依賴製造商的專用應用程式。特別值得注意的是 Matter 設備的更新路徑，Homey 採用了 Connectivity Standards Alliance（CSA）的「分散式合規帳本」（Distributed Compliance Ledger, DCL）。Homey 從 DCL 檢索韌體版本、下載 URL 等資訊，再透過 Matter 標準化的 OTA（Over-The-Air）更新機制將韌體傳輸給設備。這確保了 Matter 設備的更新流程不綁定於任何單一公司或雲服務，而是依賴標準化的認證機構，極大提升了智慧家庭的互通性和可靠性。此外，Homey Pro 和 Homey Pro mini 作為 Matter Controller 和 Thread Border Router，使得 Matter 支援的 Eve 設備（如 Eve Energy、Eve Door & Window 等）現在也能與 Homey 協同運作，進一步擴展了 Homey 的生態系。",
    tags: ["Homey", "Matter", "韌體更新", "Z-Wave", "Zigbee", "OTA", "CSA"],
    title_en: "Homey Launches New Feature for Device Firmware Updates via Matter Standardization",
    summary_en: "This article introduces the new 'Device Updates' feature on the Homey platform, designed to solve the pain point of complex and difficult firmware update processes for smart home devices. This feature allows users to perform firmware updates for Matter, Z-Wave, and Zigbee devices directly through the Homey Mobile App or Web App, eliminating the need to rely on manufacturer-specific applications. Of particular note is the update path for Matter devices: Homey utilizes the Connectivity Standards Alliance's (CSA) 'Distributed Compliance Ledger' (DCL). Homey retrieves information such as firmware versions and download URLs from the DCL, and then transmits the firmware to the device using the standardized Matter OTA (Over-The-Air) update mechanism. This ensures that the Matter device update process is not tied to any single company or cloud service, but rather relies on standardized certification bodies, greatly enhancing the interoperability and reliability of the smart home. Furthermore, the Homey Pro and Homey Pro mini, acting as Matter Controllers and Thread Border Routers, enable Matter-supported Eve devices (such as Eve Energy, Eve Door & Window, etc.) to now work together with Homey, further expanding Homey's ecosystem.",
    tags_en: ["Homey", "Matter", "Firmware Update", "Z-Wave", "Zigbee", "OTA", "CSA"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/homeys-new-device-updates-feature-shows-what-matter-was-supposed-to-be-all-along", lang: "EN" }
    ]
  },
  {
    id: "20260918-12814",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple硬體工程副總Tom Marieb深入探討iPhone Duo的耐用性、<0xE9><0x89><0xB8>接結構與螢幕摺痕問題",
    summary: "Apple硬體工程副總Tom Marieb接受TechRadar採訪，詳細討論了iPhone Duo的設計細節與耐用性。他特別強調了iPhone Duo的<0xE9><0x89><0xB8>接結構（hinge）的可靠性，並對螢幕保護貼的使用表達了個人看法。Marieb談及iPhone Duo的耐用性，涵蓋了整體結構、螢幕摺痕等多方面議題。本次討論主要聚焦於產品的實體工程學優勢，而非特定的資安漏洞或軟體更新。對於消費者而言，了解這些硬體設計的優點，有助於更全面地評估產品的長期使用體驗。",
    tags: ["Apple", "iPhone Duo", "硬體工程", "耐用性", "螢幕摺痕"],
    title_en: "Apple Hardware Engineering VP Tom Marieb Discusses iPhone Duo Durability, Hinge Mechanism, and Screen Crease Issues",
    summary_en: "Apple Hardware Engineering Vice President Tom Marieb spoke with TechRadar, detailing the design and durability of the iPhone Duo. He specifically emphasized the reliability of the iPhone Duo's hinge mechanism, and offered his personal views on the use of screen protectors. Marieb discussed the iPhone Duo's durability, covering aspects such as overall structure and screen creasing. This discussion primarily focused on the product's physical engineering advantages, rather than specific security vulnerabilities or software updates. For consumers, understanding these hardware design advantages helps in a more comprehensive assessment of the product's long-term user experience.",
    tags_en: ["Apple", "iPhone Duo", "Hardware Engineering", "Durability", "Screen Crease"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/apple-vp-of-hardware-talks-iphone-duo-durability-crease-hinge-and-more", lang: "EN" }
    ]
  },
  {
    id: "20260918-12816",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta Muse AI 代理應用程式超越 ChatGPT，成為美國 App Store 熱門應用程式榜首",
    summary: "Meta 推出的 Muse AI 代理應用程式，已在美國 App Store 的免費應用程式排行榜上超越 OpenAI 的 ChatGPT，登上榜首。該應用程式本月才推出，但由於持續的新安裝，使其在 App Store 的熱門榜單上表現出色。Meta 近期已將 Muse 的可用性擴展至 Mac 平台，但桌面版無法計入 App Store 的排名。目前市場上，Meta 和 SpaceXAI 的 Grok Bot 採用了將代理工作流程設計為類似日常訊息介面的方式，賦予 AI 代理更具擬人化的角色和外觀。此外，Apple 也剛公開了整合了 iPhone、iPad、Mac 和 Apple Watch 的 Siri AI，並搭配全新的 OS 27 軟體發布。新 Siri 包含專用的聊天應用程式，並具備編輯照片和使用螢幕內容作為上下文等系統級操作能力。",
    tags: ["Meta", "Muse AI", "OpenAI", "ChatGPT", "Apple", "Siri AI", "App Store"],
    title_en: "Meta's Muse AI Agent App Surpasses ChatGPT to Top US App Store Charts",
    summary_en: "Meta's Muse AI agent application has surpassed OpenAI's ChatGPT to reach the top of the free apps chart on the US App Store. Although the application was only released this month, its strong performance on the App Store's trending charts is due to continuous new installations. Meta recently expanded Muse's availability to the Mac platform, but the desktop version does not count toward the App Store ranking. Currently, Meta and SpaceXAI's Grok Bot utilize a design that mimics a daily messaging interface for their agent workflows, giving the AI agents a more anthropomorphic role and appearance. Furthermore, Apple recently unveiled the Siri AI, integrated across iPhone, iPad, Mac, and Apple Watch, accompanied by the new OS 27 software release. The new Siri includes a dedicated chat application and possesses system-level capabilities such as photo editing and using screen content as context.",
    tags_en: ["Meta", "Muse AI", "OpenAI", "ChatGPT", "Apple", "Siri AI", "App Store"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/18/metas-new-muse-ai-agent-app-overtakes-chatgpt-as-top-iphone-app", lang: "EN" }
    ]
  },
  {
    id: "20260918-12830",
    trackers: ["os"],
    category: "重點關注",
    title: "法官駁回 OpenAI 要求查閱 X 與 SpaceXAI 與 Apple 之間反壟斷和解協議",
    summary: "在針對 OpenAI 的反壟斷訴訟中，OpenAI 曾要求法官查閱 X 和 SpaceXAI 與 Apple 達成的保密和解協議，主張該協議可能包含對其辯護有相關資訊。該訴訟的核心指控是 X 和 SpaceXAI 指控 Apple 和 OpenAI 串通，阻止競爭的 AI 應用程式進入市場，包括限制其在 App Store 的能見度。法官 Mark Pittman 經過審閱後，最終裁定該和解協議「不包含與本案相關的資訊」，因此駁回了 OpenAI 的要求。此判決強調了法院在要求提供保密和解協議時，必須證明其內容與審判或總結判決的議題具有直接相關性。OpenAI 方面目前計畫提交總結判決動議，法院已給予其額外準備時間。",
    tags: ["OpenAI", "Apple", "X", "SpaceXAI", "反壟斷訴訟", "App Store", "法律訴訟"],
    title_en: "Judge Dismisses OpenAI's Request to Review Anti-Trust Settlement Agreements Between X, SpaceXAI, and Apple",
    summary_en: "In an anti-trust lawsuit targeting OpenAI, OpenAI had requested the judge to review confidential settlement agreements reached between X, SpaceXAI, and Apple, arguing that these agreements might contain information relevant to its defense. The core allegation in the lawsuit is that X and SpaceXAI accuse Apple and OpenAI of colluding to block competing AI applications from entering the market, including limiting their visibility in the App Store. After review, Judge Mark Pittman ultimately ruled that the settlement agreements 'do not contain information relevant to this case,' thereby dismissing OpenAI's request. This ruling emphasizes that the court must be convinced that the content of confidential settlement agreements is directly relevant to the issues being tried or summarized. OpenAI currently plans to file a motion for summary judgment, and the court has granted it additional preparation time.",
    tags_en: ["OpenAI", "Apple", "X", "SpaceXAI", "Anti-Trust Lawsuit", "App Store", "Legal Litigation"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/17/judge-rejects-openais-bid-to-see-xs-confidential-settlement-with-apple-in-antitrust-lawsuit", lang: "EN" }
    ]
  },
  {
    id: "20260918-12831",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TWS 市場領先地位穩固，但 Omdia 報告指出開放式耳機 (OWS) 正在快速成長",
    summary: "根據 Omdia 的報告，Apple 在 2026 年第二季的全球真無線立體聲 (TWS) 市場仍保持領先地位，出貨量為 1,680 萬台，年增 1.2%。儘管 Apple 表現優於整體市場（整體市場年減 0.7%），但市場結構正在發生變化。報告特別關注了開放式無線立體聲 (OWS) 市場，該類產品包括掛耳或耳鉤式設計，不會完全封閉耳道。Omdia 預測 OWS 將是 TWS 領域最具潛力的成長領域，預計年出貨量將從 2026 年的 4,390 萬台增長至 2030 年的 9,050 萬台，佔 TWS 出貨量的近五分之一。市場競爭方面，Shokz 在 OWS 市場表現亮眼，出貨量增長了 107.9%。這顯示市場正在從傳統 TWS 逐漸轉向開放式設計。",
    tags: ["Apple", "Omdia", "TWS", "OWS", "真無線立體聲", "市場分析"],
    title_en: "Apple Solidifies TWS Market Leadership, But Omdia Report Points to Rapid Growth in Open-Ear Headphones (OWS)",
    summary_en: "According to an Omdia report, Apple maintained its leading position in the global True Wireless Stereo (TWS) market in Q2 2026, shipping 16.8 million units, representing a 1.2% year-over-year increase. Although Apple outperformed the overall market (which saw a 0.7% year-over-year decline), the market structure is undergoing a shift. The report specifically highlights the Open-Ear Wireless Stereo (OWS) market, which includes designs like ear hooks or hanging ear pieces that do not completely seal the ear canal. Omdia predicts that OWS will be the most promising growth segment within the TWS domain, forecasting annual shipments to grow from 43.9 million units in 2026 to 90.5 million units by 2030, accounting for nearly one-fifth of total TWS shipments. In terms of market competition, Shokz showed strong performance in the OWS market, with shipments increasing by 107.9%. This indicates a gradual market shift from traditional TWS towards open-ear designs.",
    tags_en: ["Apple", "Omdia", "TWS", "OWS", "True Wireless Stereo", "Market Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/17/report-apple-leads-slowing-true-wireless-stereo-market-as-open-ear-earbuds-gain-ground", lang: "EN" }
    ]
  },
  {
    id: "20260918-12875",
    trackers: ["os"],
    category: "重點關注",
    title: "AI生成錯誤情報導致美國險遇衝突：揭示大型語言模型（LLM）的幻覺風險",
    summary: "根據CNN報導，美國軍方曾因一份「完全錯誤」的情報報告，險些對一艘中國船隻進行攔截和登船。該情報報告由美國特種作戰司令部分析師使用AI工具生成，錯誤地指出該船隻正在中東運送核武計畫組件。當局人員發現，用於生成報告的聊天機器人「不準確地識別了船隻所攜帶的物資」，導致了這場近乎災難的事件。這起事件凸顯了AI模型「幻覺」（hallucination）的嚴重風險，即模型在缺乏足夠上下文時，會編造出看似合理但實質虛假的資訊。文章指出，儘管業界已意識到此問題，但研究人員仍認為，完全阻止大型語言模型（LLMs）產生幻覺可能是不可能的。這場事件也引發了對軍事部門依賴AI進行情報分析的警示，特別是國防部推動的「AI加速策略」。",
    tags: ["AI工具", "大型語言模型", "情報安全", "幻覺風險", "美國軍方", "LLM"],
    title_en: "AI-Generated Misinformation Leads to Near-Conflict in US: Revealing the Hallucination Risk of Large Language Models (LLMs)",
    summary_en: "According to CNN, US military personnel nearly intercepted and boarded a Chinese vessel based on a 'completely incorrect' intelligence report. This report was generated by an analyst from the US Special Operations Command using an AI tool, which mistakenly indicated that the vessel was transporting nuclear weapons components in the Middle East. Officials discovered that the chatbot used to generate the report 'inaccurately identified the cargo carried by the vessel,' leading to this near-disaster. The incident highlights the serious risk of AI model 'hallucination'—the phenomenon where a model fabricates information that appears plausible but is substantively false, especially when lacking sufficient context. The article points out that although the industry is aware of this issue, researchers believe that completely preventing LLMs from hallucinating may be impossible. This incident has also raised alarms regarding the military sector's reliance on AI for intelligence analysis, particularly in light of the Department of Defense's push for an 'AI acceleration strategy.'",
    tags_en: ["AI Tools", "Large Language Models", "Intelligence Security", "Hallucination Risk", "US Military", "LLM"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/09/report-us-almost-boarded-chinese-ship-over-hallucinated-ai-arms-report", lang: "EN" }
    ]
  },
  {
    id: "20260918-12876",
    trackers: ["os"],
    category: "重點關注",
    title: "FAA 部署 AI 系統 SMART 輔助管理華盛頓特區空域，預計全國擴展",
    summary: "美國聯邦航空管理局（FAA）正準備在華盛頓特區地區的繁忙空域部署名為 SMART 的人工智慧工具。該系統旨在利用 AI 模型預測空域流量，並根據航班時間表、天氣、機場容量和空域狀況等營運因素，識別潛在的交通衝突。SMART 的目標包括減少飛機燃油消耗、提高航班準時性，並加速應對天氣或空域壅塞事件。該系統預計會先在華盛頓特區的三個主要機場進行有限範圍的試點，之後再逐步擴展至整個美國國土空域。雖然該工具屬於一個大型的 $875 百萬美元合約的一部分，但據了解，它不會改變現有的空管程序，而是透過現有的 FAA 系統提供「替代航線資訊」，讓各方能共享營運狀況，共同決定最有效率的航線和起飛時間。",
    tags: ["FAA", "SMART", "人工智慧", "空域管理", "航空安全", "Air Space Intelligence"],
    title_en: "FAA to Deploy AI System SMART for Washington D.C. Airspace Management, Planned for National Expansion",
    summary_en: "The Federal Aviation Administration (FAA) is preparing to deploy an artificial intelligence tool called SMART in the busy airspace of the Washington D.C. area. The system is designed to use AI models to predict airspace traffic and identify potential traffic conflicts based on operational factors such as flight schedules, weather, airport capacity, and airspace conditions. SMART aims to reduce aircraft fuel consumption, improve flight punctuality, and accelerate responses to weather or airspace congestion events. The system is expected to begin with limited pilot programs at three major airports in Washington D.C., before gradually expanding to the entire US airspace. Although the tool is part of a large $875 million contract, it is understood that it will not change existing air traffic control procedures, but rather provide 'alternative route information' through existing FAA systems, allowing all parties to share operational status and jointly determine the most efficient routes and departure times.",
    tags_en: ["FAA", "SMART", "Artificial Intelligence", "Airspace Management", "Aviation Safety", "Air Space Intelligence"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/09/faa-tees-up-875m-ai-tool-to-help-manage-air-traffic-congestion", lang: "EN" }
    ]
  },
  {
    id: "20260918-12879",
    trackers: ["os"],
    category: "重點關注",
    title: "美國政府網站使用中國AI模型引發爭議：FBI指控中國企業竊取美國技術",
    summary: "美國政府網站Federal Register曾短暫提供使用阿里巴巴（Alibaba）的Qwen AI模型搜尋公共提案評論的選項。此舉引起社會關注，因為聯邦調查局（FBI）此前已將阿里巴巴列為六家涉嫌進行「工業規模蒸餾」（industrial-scale distillation）的中國企業之一，指控其幫助中國競爭對手在AI領域節省成本並加速發展。該獨立機構（National Archives）尚未對移除此服務發表評論。專家指出，政府使用Qwen模型是否構成安全風險，取決於模型的訓練方式，以及美國數據是否經過「阿里巴巴控制的系統」處理。此事件凸顯了美國政府在採用AI技術時，在國家安全和技術來源方面的政策矛盾與挑戰。",
    tags: ["AI模型", "Alibaba", "Qwen", "FBI", "美國政府", "國家安全"],
    title_en: "Controversy Over US Government Website Using Chinese AI Model: FBI Accuses Chinese Company of Stealing US Technology",
    summary_en: "The Federal Register website of the U.S. government briefly offered an option to use Alibaba's Qwen AI model to search public proposed comments. This action drew public attention, as the FBI had previously listed Alibaba as one of six Chinese companies suspected of engaging in \"industrial-scale distillation.\" The FBI alleged that the company was helping Chinese competitors save costs and accelerate development in the AI sector. The National Archives has not yet commented on the removal of this service. Experts point out that whether the government's use of the Qwen model constitutes a security risk depends on the model's training methods and whether U.S. data was processed by an \"Alibaba-controlled system.\" This incident highlights the policy contradictions and challenges faced by the U.S. government regarding national security and technological sourcing when adopting AI technologies.",
    tags_en: ["AI model", "Alibaba", "Qwen", "FBI", "U.S. government", "national security"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/09/us-government-website-used-chinese-model-the-fbi-called-malicious", lang: "EN" }
    ]
  },
  {
    id: "20260918-12927",
    trackers: ["os"],
    category: "重點關注",
    title: "Wine 11.18 發布：強化 NTOSKRNL 實作支援，進一步提升在 Linux/macOS 運行 Windows 應用程式的能力",
    summary: "Wine 11.18 作為開源軟體生態系統的最新雙週開發版本，旨在讓使用者能在 Linux、macOS 等平台運行 Windows 遊戲與應用程式。本次更新重點著重於擴展其 NTOSKRNL 的實作支援，NTOSKRNL 是 Microsoft Windows 作業系統的核心執行檔，負責處理核心與執行層的各項功能，包括硬體抽象、程序處理和記憶體管理。Wine 11.18 在 NTOSKRNL 方面進行了 PnP 設備啟用、容器 ID 等功能的開發，並同步提升了測試覆蓋率。此外，該版本還包含多項程式碼正確性修復、標準 C 標頭檔的相容性修復，以及針對 Adobe Creative Cloud 和《Assassin's Creed Rogue》等遊戲的 21 個已知 Bug 修復。使用者可從 WineHQ.org 下載 Wine 11.18。",
    tags: ["Wine", "NTOSKRNL", "Linux", "macOS", "Windows 相容性", "開源軟體"],
    title_en: "Wine 11.18 Released: Enhanced NTOSKRNL Implementation Support Improves Windows Application Compatibility on Linux/macOS",
    summary_en: "Wine 11.18, the latest bi-weekly development release in the open-source software ecosystem, aims to allow users to run Windows games and applications on platforms such as Linux and macOS. This update focuses on expanding its implementation support for NTOSKRNL, which is a core executable file of the Microsoft Windows operating system responsible for handling various functions at the kernel and execution layers, including hardware abstraction, process handling, and memory management. Wine 11.18 introduces development for features such as PnP device enablement and container ID within NTOSKRNL, while also improving test coverage. Additionally, the version includes multiple code correctness fixes, compatibility fixes for standard C headers, and 21 known bug fixes for games like Adobe Creative Cloud and Assassin's Creed Rogue. Users can download Wine 11.18 from WineHQ.org.",
    tags_en: ["Wine", "NTOSKRNL", "Linux", "macOS", "Windows Compatibility", "Open Source Software"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.18-Released", lang: "EN" }
    ]
  },
  {
    id: "20260918-12928",
    trackers: ["os"],
    category: "重點關注",
    title: "Valve Steam Frame VR 頭戴設備採用 Mesa Zink 驅動，實現 OpenGL 透過 Vulkan API 運作",
    summary: "Valve 的 Steam Frame VR 頭戴設備，其核心採用 Qualcomm Snapdragon 8 Gen 3 SoC 並配備 Adreno 顯示晶片。根據 Valve Linux 圖形團隊成員 Mike Blumenkrantz 的確認，該設備在 OpenGL 繪圖方面，選擇使用 Mesa 的 Zink 驅動。Zink 驅動提供了一種通用且成熟的 OpenGL-on-Vulkan 實作方案。雖然 Mesa 具備為 Qualcomm Adreno 晶片設計的原生 OpenGL 驅動（如 Freedreno Gallium3D），但 Valve 選擇使用 Zink 來實現跨平台的 OpenGL 兼容性。這顯示了 OpenGL 透過 Vulkan API 運作的技術實作已達到一個高度成熟的階段。Steam Frame 本週開始販售，起價為 $1059 USD。",
    tags: ["Valve", "Steam Frame", "Mesa", "Zink", "Vulkan", "OpenGL", "Qualcomm Snapdragon 8 Gen 3"],
    title_en: "Valve Steam Frame VR Headset Uses Mesa Zink Driver, Enabling OpenGL Functionality via Vulkan API",
    summary_en: "The Valve Steam Frame VR headset utilizes the Qualcomm Snapdragon 8 Gen 3 SoC, featuring the Adreno GPU. According to Mike Blumenkrantz, a member of the Valve Linux Graphics team, the device employs the Mesa Zink driver for OpenGL rendering. Zink provides a universal and mature OpenGL-on-Vulkan implementation. Although Mesa possesses native OpenGL drivers designed for the Qualcomm Adreno chip (such as Freedreno Gallium3D), Valve opted for Zink to achieve cross-platform OpenGL compatibility. This demonstrates that the technical implementation of OpenGL running through the Vulkan API has reached a highly mature stage. The Steam Frame goes on sale this week, starting at $1059 USD.",
    tags_en: ["Valve", "Steam Frame", "Mesa", "Zink", "Vulkan", "OpenGL", "Qualcomm Snapdragon 8 Gen 3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Steam-Frame-Uses-Zink", lang: "EN" }
    ]
  },
  {
    id: "20260918-12929",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布淘汰 Binder C 驅動程式，全面轉向 Rust 實現的 IPC 機制",
    summary: "Android 系統核心的跨進程通訊（IPC）機制 Binder 驅動程式，自傳統的 C 語言實作，將逐步淘汰。Google 宣布，由於 Rust 版本的 Binder 驅動程式已經成熟，並在可維護性、擴展性以及性能上均證明優於原始 C 程式碼，因此決定移除舊版 C 程式碼。該 C 驅動程式已存在超過 15 年，隨著時間推移變得極度複雜，維護難度高，且容易引入漏洞。新的 Rust 實作不僅具備了完整的功能對等性（full feature parity），甚至在性能上表現出與原始 C 驅動程式相當甚至更快的速度。此移除計畫已由 Google 工程師 Carlos Llamas 提出補丁，並被 Greg Kroah-Hartman 納入 char-misc-next 分支，預計將提交至 Linux 7.4 的合併窗口，標誌著 Android 核心 IPC 機制轉型至更現代、更安全的 Rust 語言。",
    tags: ["Android", "Binder", "Rust", "C 語言", "IPC", "Linux 核心", "Google"],
    title_en: "Google Announces Deprecation of Binder C Driver, Full Transition to Rust-Implemented IPC Mechanism",
    summary_en: "The Binder driver, which is the core Inter-Process Communication (IPC) mechanism of the Android operating system, will gradually phase out its traditional C language implementation. Google announced that because the Rust version of the Binder driver is mature and has proven superior to the original C code in terms of maintainability, scalability, and performance, they have decided to remove the old C code. This C driver has existed for over 15 years, becoming extremely complex and difficult to maintain over time, and prone to introducing vulnerabilities. The new Rust implementation not only possesses full feature parity but also demonstrates performance comparable to, or even faster than, the original C driver. This removal plan was proposed by Google engineer Carlos Llamas with a patch, and has been incorporated into the char-misc-next branch by Greg Kroah-Hartman, with an expected submission to the Linux 7.4 merge window, marking the transition of the Android core IPC mechanism to the more modern and secure Rust language.",
    tags_en: ["Android", "Binder", "Rust", "C language", "IPC", "Linux kernel", "Google"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Google-Binder-C-Goodbye", lang: "EN" }
    ]
  },
  {
    id: "20260918-12961",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 支援 OpenAI 的 AGENTS.md 標準，簡化 AI 代理開發流程",
    summary: "Anthropic 宣布在 Claude Code 版本 2.1.277 中新增對 AGENTS.md 檔案格式的支援。此舉允許使用 Claude Code 的開發者在專案中統一管理 AI 代理的指令集，無需再維護兩套獨立的 Markdown 指令文件（CLAUDE.md 和 AGENTS.md）。過去，開發者若同時使用 Claude Code 與 OpenAI Codex 等非 Anthropic 工具，必須為每套工具維護兩組指令文件，增加了複雜性。AGENTS.md 旨在成為工具中立的標準，而 OpenAI 已將其貢獻給 Linux Foundation 的 Agentic AI Foundation，目前已有超過 60,000 個開源專案採用此標準。Anthropic 的此項決定，標誌著其放棄了堅持自身標準的策略，對於使用 AI 編碼工具的開發者社群而言，是一個簡化且重要的進展。",
    tags: ["Anthropic", "OpenAI", "Claude Code", "AGENTS.md", "AI 代理", "Linux Foundation"],
    title_en: "Anthropic Supports OpenAI's AGENTS.md Standard, Streamlining AI Agent Development",
    summary_en: "Anthropic announced support for the AGENTS.md file format in Claude Code version 2.1.277. This feature allows developers using Claude Code to manage the instruction set for AI agents within a single location in their projects, eliminating the need to maintain two separate Markdown instruction files (CLAUDE.md and AGENTS.md). Previously, developers who used Claude Code alongside non-Anthropic tools like OpenAI Codex had to maintain two sets of instruction files for each tool, which increased complexity. AGENTS.md is designed to be a tool-agnostic standard, and OpenAI has contributed it to the Linux Foundation's Agentic AI Foundation. Currently, over 60,000 open-source projects adopt this standard. Anthropic's decision marks a shift away from enforcing its proprietary standard, representing a significant and simplifying advancement for the developer community utilizing AI coding tools.",
    tags_en: ["Anthropic", "OpenAI", "Claude Code", "AGENTS.md", "AI Agent", "Linux Foundation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/09/18/anthropic-decides-to-support-openais-markdown-instructions-spec/5297588", lang: "EN" }
    ]
  },
  {
    id: "20260918-12962",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟將 Copilot 核心運行時從 TypeScript 遷移至 Rust，大幅提升效能與資源效率",
    summary: "微軟宣布其 Copilot 軟體引擎，以及大量 Microsoft 產品（包括 VS Code、Visual Studio、Excel、Outlook、PowerPoint 等）的運行時核心，已全面改寫為 Rust 語言。原運行時基於 TypeScript 和 Node.js，雖然利於快速開發，但在大規模應用場景下，在啟動速度和伺服器密度方面存在瓶頸。此次遷移旨在實現透過 C ABI 嵌入、低啟動和穩定運行開銷，以及可預測的資源使用。改寫過程利用 AI Agent 進行，成功將約 43 萬行 TypeScript 轉換為 80 萬行 Rust 程式碼。性能測試顯示，Rust 版本的運行時在處理 1,000 個單次會話生命週期時，速度比原始 TypeScript 版本提升了 15.9 倍（從 7.55 次/秒提升至 120 次/秒）。此外，在記憶體使用方面，Rust 版本能耗僅為 TypeScript 版本的約 1/10。儘管 AI Agent 成功完成了這項複雜的重寫工作，但開發人員仍需注意，AI 產生的程式碼可能存在「回歸（regression）」問題，且編譯器僅能保證語法正確性，無法保證程式邏輯的正確性。",
    tags: ["Microsoft", "Copilot", "Rust", "TypeScript", "Node.js", "AI Agent", "性能優化"],
    title_en: "Microsoft Migrates Copilot Core Runtime from TypeScript to Rust, Significantly Boosting Performance and Resource Efficiency",
    summary_en: "Microsoft has announced that the core runtime engine for Copilot, along with the runtimes for numerous Microsoft products (including VS Code, Visual Studio, Excel, Outlook, and PowerPoint), have been entirely rewritten in the Rust language. The original runtime was based on TypeScript and Node.js. While this stack facilitated rapid development, it presented bottlenecks in terms of startup speed and server density when deployed in large-scale applications. This migration aims to achieve low startup and stable operational overhead through C ABI embedding, alongside predictable resource usage. The rewriting process utilized an AI Agent, successfully converting approximately 430,000 lines of TypeScript into 800,000 lines of Rust code. Performance testing demonstrated that the Rust version of the runtime increased speed by 15.9 times when handling 1,000 single session lifecycles (improving from 7.55 sessions/second to 120 sessions/second). Furthermore, in terms of memory consumption, the Rust version consumes only about one-tenth of the memory used by the TypeScript version. Although the AI Agent successfully completed this complex rewriting task, developers must remain aware that AI-generated code may contain 'regression' issues, and the compiler can only guarantee syntactic correctness, not logical correctness.",
    tags_en: ["Microsoft", "Copilot", "Rust", "TypeScript", "Node.js", "AI Agent", "Performance Optimization"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/09/18/microsoft-agentically-ports-copilot-runtime-to-rust-for-120k/5297549", lang: "EN" }
    ]
  },
  {
    id: "20260918-12966",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "研究人員利用 Claude 漏洞鏈攻擊 OpenAI 員工 ChatGPT 帳號，成功進入內部儲存庫",
    summary: "幾位安全研究人員（Hacktron）利用 Anthropic 的 Claude 模型，成功鏈接了兩處漏洞，接管了多名 OpenAI 員工的 ChatGPT 帳號。他們最初的攻擊點是 OpenAI 運行在 Discourse 上的社群論壇（community.openai.com）。研究人員發現，由於 FastImage 缺乏對 HEIF 檔案的支援，上傳到 Discourse 的 HEIF 圖片會經過 ImageMagick 和 libheif 處理，這暴露了底層的 libheif 解析器給攻擊者控制的文件。他們最初使用 Claude Opus 4.8 嘗試利用 libheif 中的堆緩衝溢出（heap buffer overflow）進行遠端程式碼執行（RCE），但未成功。隨後，他們改用 Anthropic 新發布的 Claude Opus 5 模型，成功生成了利用腳本，並在 OpenAI 的實例上實現了 RCE。利用這些帳號，研究人員展示了他們可以透過讓員工的 Codex 帳號開一個 Pull Request（PR）來觸及 OpenAI 的內部單體儲存庫（monorepo）。OpenAI 在收到報告後約 14 小時內修復了此漏洞，並支付了 $6,500 的漏洞獎勵。Discourse 也發布了安全公告 GHSA-vhm9-85gw-x335，增加了圖像處理沙箱機制。這場攻擊展示了 AI 代理人（AI agent）如何將原本需要耗時數月的工作壓縮到數天內，凸顯了安全假設必須跟上攻擊者能力提升的趨勢。",
    tags: ["Anthropic", "OpenAI", "Claude", "ChatGPT", "libheif", "RCE", "Discourse", "漏洞鏈"],
    title_en: "Researchers Exploit Claude Vulnerability Chain to Attack OpenAI Employee ChatGPT Accounts, Gaining Access to Internal Repository",
    summary_en: "Several security researchers (Hacktron) utilized Anthropic's Claude model to successfully chain two vulnerabilities, thereby taking control of multiple OpenAI employee ChatGPT accounts. Their initial attack vector was the OpenAI community forum, which runs on Discourse (community.openai.com). The researchers discovered that because FastImage lacked support for HEIF files, HEIF images uploaded to Discourse were processed by ImageMagick and libheif, exposing the underlying libheif parser to a file controllable by the attackers. They initially attempted to exploit a heap buffer overflow in libheif using Claude Opus 4.8 to achieve Remote Code Execution (RCE), but were unsuccessful. Subsequently, they switched to the newly released Anthropic Claude Opus 5 model, which successfully generated an exploit script, achieving RCE on the OpenAI instance. Using these compromised accounts, the researchers demonstrated that they could access OpenAI's internal monorepo by having an employee's Codex account open a Pull Request (PR). OpenAI patched the vulnerability within approximately 14 hours of receiving the report and paid a bounty of $6,500. Discourse also issued a security advisory, GHSA-vhm9-85gw-x335, and implemented an enhanced image processing sandbox mechanism. This attack demonstrates how AI agents can compress work that previously took months into days, highlighting the necessity for security assumptions to keep pace with the increasing capabilities of attackers.",
    tags_en: ["Anthropic", "OpenAI", "Claude", "ChatGPT", "libheif", "RCE", "Discourse", "Vulnerability Chain"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/18/researchers-used-claude-to-hack-openai-employees-chatgpt-accounts/5297517", lang: "EN" }
    ]
  },
  {
    id: "20260918-12967",
    trackers: ["os"],
    category: "重點關注",
    title: "北韓詐騙工會「WaterPlum」：偽面試詐騙竊取超過 3 萬設備資料，竊取加密貨幣與身份資訊",
    summary: "國際資安機構發出警示，指出北韓政權支持的網路犯罪集團「WaterPlum」正在利用偽工作面試的方式進行詐騙。攻擊者鎖定網頁設計師、工程師以及 Web3 專業人士，以虛假的招募流程為誘餌。受害者在所謂的「編碼作業」或「招募測試」中下載的檔案，實際上會植入惡意程式，從而讓攻擊者部署遠端存取木馬（RATs）和資訊竊取器。這些惡意程式能持續竊取憑證、密碼、剪貼簿內容、按鍵輸入紀錄、加密貨幣錢包資料和身份文件。攻擊者利用這些資料進行身份冒充、竊取企業的智慧財產、或用於敲詐勒索。此次活動已成功感染超過 3 萬台設備，並竊取了超過 7,000 個加密貨幣錢包的資金，總計損失金額高達至少 1,071 萬美元，這些資金最終流入平壤。機構建議，任何懷疑參與此類詐騙的組織，應立即啟動完整的鑑識調查，並假設所有憑證和敏感資料均已遭洩露。",
    tags: ["北韓", "WaterPlum", "網路詐騙", "RATs", "加密貨幣", "身份盜用"],
    title_en: "North Korean Scam Group 'WaterPlum': Fake Interviews Steal Data from Over 30,000 Devices, Cryptocurrency, and Identity Information",
    summary_en: "International cybersecurity organizations have issued warnings regarding the North Korean regime-backed cybercrime group 'WaterPlum,' which is utilizing fake job interviews for scams. The attackers are targeting web designers, engineers, and Web3 professionals, using fraudulent recruitment processes as bait. Files downloaded by victims during supposed 'coding assignments' or 'recruitment tests' actually contain malicious programs, allowing the attackers to deploy Remote Access Trojans (RATs) and information stealers. These malicious programs can continuously steal credentials, passwords, clipboard contents, keystroke logs, cryptocurrency wallet data, and identity documents. The attackers use this data for identity impersonation, stealing corporate intellectual property, or for blackmail. This campaign has successfully infected over 30,000 devices and stolen funds from over 7,000 cryptocurrency wallets, totaling a minimum loss of $10.71 million, with these funds ultimately flowing into Pyongyang. Organizations recommend that any entity suspected of participating in such scams immediately initiate a full forensic investigation and assume that all credentials and sensitive data have been compromised.",
    tags_en: ["North Korea", "WaterPlum", "Cyber Scam", "RATs", "Cryptocurrency", "Identity Theft"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/18/north-koreas-fake-job-interviews-infected-30000-devices/5297461", lang: "EN" }
    ]
  },
  {
    id: "20260918-12968",
    trackers: ["os"],
    category: "重點關注",
    title: "FBI警告：假冒警察與政府官員詐騙案損失超16億美元，受害者應提高警覺",
    summary: "聯邦調查局（FBI）報告指出，自 2025 年 1 月至 2026 年 7 月，假冒執法或政府官員的詐騙案已造成受害者損失超過 16 億美元。在收到的近 61,000 宗投訴中，平均每宗投訴的損失超過 26,000 美元。\n詐騙手法多樣，常見類型包括：假稱受害者涉嫌犯罪，威脅要求支付費用以解除指控；或假冒法院要求繳費以避免罰款或逮捕。\n其中，針對專業人士（如醫療從業人員）的詐騙尤其具針對性，詐騙集團會進行背景調查，並偽裝成要求更新專業執照或保護聲譽來勒索金錢，此類案件損失超過 3,700 萬美元。\n最為複雜的詐騙手法是假冒外國執法或外交官，威脅取消受害者護照或引渡，此類案件雖然佔比低於 3%，但損失超過 1.4 億美元。FBI提醒公眾，任何執法機構不會透過電話要求支付費用或索取個人敏感資訊。受害者應主動透過公開資訊聯繫相關部門，驗證來電者的身份。",
    tags: ["FBI", "IC3", "詐騙", "假冒身份", "網路犯罪", "政府欺詐"],
    title_en: "FBI Warns: Impersonation Scams by Police and Government Officials Cost Over $1.6 Billion, Victims Urged to Be Vigilant",
    summary_en: "A report from the Federal Bureau of Investigation (FBI) indicates that from January 2025 to July 2026, scams involving the impersonation of law enforcement or government officials have resulted in victim losses exceeding $1.6 billion. Of nearly 61,000 complaints received, the average loss per complaint exceeded $26,000. Scam methods are diverse, with common types including: falsely claiming the victim is involved in a crime and threatening demands for payment to drop the charges; or impersonating a court to demand fees to avoid fines or arrest. Scams targeting professionals (such as medical personnel) are particularly sophisticated; scam groups conduct background checks and then extort money by posing as if they are required to update professional licenses or protect reputations, resulting in losses exceeding $37 million. The most complex scam method involves impersonating foreign law enforcement or diplomats, threatening to cancel the victim's passport or initiate extradition. Although these cases account for less than 3% of complaints, the losses exceed $140 million. The FBI reminds the public that no law enforcement agency will call to demand payment or request sensitive personal information. Victims should proactively contact relevant departments using public information to verify the identity of the caller.",
    tags_en: ["FBI", "IC3", "Scam", "Impersonation", "Cybercrime", "Government Fraud"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/09/18/fbi-fake-cop-and-government-impersonation-scams-cost-victims-16b/5297499", lang: "EN" }
    ]
  },
  {
    id: "20260918-12969",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟提醒企業主：Edge 的 Internet Explorer 模式支援將於 2029 年結束，建議立即規劃系統現代化遷移",
    summary: "微軟透過 Microsoft 365 管理中心發出警告，提醒企業管理員，Edge 瀏覽器中的 Internet Explorer (IE) 模式支援預計只會持續到 2029 年。IE 模式允許企業在 Edge 環境中使用依賴舊版網站的應用程式，它使用了 IE 11 的 Trident MSHTML 引擎，並支援 ActiveX 等元素。然而，隨著支援期限的臨近，企業若過度依賴此模式，將面臨重大的安全、相容性與合規風險。微軟建議客戶應儘早規劃應用程式現代化專案，因為這類涉及數十年歷史依賴的系統遷移工作可能需要數年時間。雖然微軟承諾會提前一年通知停用，但企業必須開始規劃，以避免在支援終止後造成業務中斷。",
    tags: ["Microsoft", "Edge", "Internet Explorer", "IE mode", "系統現代化", "2029"],
    title_en: "Microsoft Warns Enterprises: Edge's Internet Explorer Mode Support Ends in 2029, Advising Immediate System Modernization Planning",
    summary_en: "Microsoft has issued a warning via the Microsoft 365 admin center, notifying enterprise administrators that support for Internet Explorer (IE) mode in the Edge browser is expected to continue only until 2029. IE mode allows organizations to use applications within the Edge environment that rely on older websites, utilizing the IE 11 Trident MSHTML engine and supporting elements like ActiveX. However, as the support deadline approaches, enterprises that over-rely on this mode face significant security, compatibility, and compliance risks. Microsoft advises customers to plan for application modernization projects early, as migrating systems with decades of historical dependencies can take several years. Although Microsoft commits to providing one year's notice before discontinuation, businesses must begin planning now to avoid operational disruption after support ends.",
    tags_en: ["Microsoft", "Edge", "Internet Explorer", "IE mode", "System Modernization", "2029"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/09/18/admins-youve-been-warned-the-clock-is-ticking-on-edges-ie-mode/5297408", lang: "EN" }
    ]
  },
  {
    id: "20260918-12970",
    trackers: ["os"],
    category: "重點關注",
    title: "KDE 提案「AI 原生桌面」：提出可為用戶客製化、以個人 AI 為核心的桌面架構",
    summary: "在 KDE 專案即將迎來 30 週年紀念的背景下，開發者們在一次會議上提出了「AI 原生 KDE」的願景。這項提案的核心概念是建立一個名為 Kadai 的加密、供應商中立的個人核心（personal kernel）。這個核心能夠根據用戶、設備和時間點，為用戶編譯出高度個人化的桌面體驗。提案指出，Plasma 桌面環境具備活動（Activities）和 Plasmoids 等特性，非常適合實現這一目標。若能進行一些上游變更，KDE 有潛力成為第一個將 AI 視為基礎設施而非單純聊天框的 Shell。然而，此提案的性質極具爭議性，被批評者認為這將導致桌面環境的極度碎片化和複雜化。文章也提到，另一個分支環境 Trinity Desktop Environment 的貢獻者已開始嘗試使用 AI 生成的程式碼，而對於希望避免 AI 影響的用戶，可關注 Sonic Desktop Environment 的進展。",
    tags: ["KDE", "Plasma", "AI-native", "桌面環境", "Linux", "Kadai"],
    title_en: "KDE Proposes 'AI-Native Desktop': A Framework for User-Customizable, AI-Centric Desktop Architecture",
    summary_en: "Amid the KDE project's upcoming 30th anniversary, developers proposed the vision of 'AI-Native KDE' during a recent meeting. The core concept of this proposal is to establish a secure, vendor-neutral personal kernel called Kadai. This kernel would be capable of compiling a highly personalized desktop experience for the user, based on the user, the device, and the time. The proposal notes that the Plasma desktop environment, with features like Activities and Plasmoids, is well-suited to achieve this goal. With some upstream changes, KDE has the potential to become the first Shell to view AI as foundational infrastructure rather than merely a chat box. However, the nature of this proposal is highly controversial, with critics arguing it could lead to extreme fragmentation and complexity of the desktop environment. The article also mentions that contributors to another branch environment, Trinity Desktop Environment, have begun experimenting with AI-generated code, and users who wish to avoid AI influence can follow the progress of the Sonic Desktop Environment.",
    tags_en: ["KDE", "Plasma", "AI-native", "Desktop Environment", "Linux", "Kadai"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/09/18/kde-turns-30-and-someones-brought-an-ai-native-desktop-proposal/5297282", lang: "EN" }
    ]
  },
  {
    id: "20260918-12977",
    trackers: ["os"],
    category: "重點關注",
    title: "Wi-Fi訊號死角疑因電源線電磁干擾：IT人員透過鑽孔重置線路解決問題",
    summary: "本文分享一位自稱為「Eddy」的IT人員，在為一家輔助生活機構建立穩定Wi-Fi網路時遇到的技術挑戰。他發現除了建築物後方的一條走廊，其他區域的Wi-Fi訊號都無法穩定。在排除多個網路干擾源後，他轉而檢查了辦公桌上的顯示器。Eddy觀察到，顯示器的電源和影像線材從桌子上的同一孔洞穿過，當顯示器支架移動或門關閉時，線材會被擠壓（crimping）。他透過鑽一個新的孔洞並更換了電源線，不僅修復了顯示器間歇性斷電的問題，更意外地恢復了辦公桌周圍的Wi-Fi訊號。Eddy推測，電源線的擠壓可能導致其電磁干擾（EMI），進而干擾了Wi-Fi訊號。儘管如此，後方走廊的Wi-Fi死角問題仍待解決，他計畫使用軟體定義無線電（SDR）和Yagi天線進行進一步的現場偵測。",
    tags: ["Wi-Fi", "電磁干擾", "EMI", "IT維護", "電源線", "SDR"],
    title_en: "Wi-Fi Dead Zone Suspected Due to Power Cable Electromagnetic Interference: IT Staff Resolves Issue by Drilling New Conduit",
    summary_en: "This article shares the technical challenge faced by an IT professional, calling himself \"Eddy,\" while establishing a stable Wi-Fi network for an assisted living facility. He found that Wi-Fi signals were unstable in all areas except one corridor at the back of the building. After ruling out multiple network interference sources, he began inspecting the monitors on the desks. Eddy observed that the power and video cables passed through the same hole in the desk. When the monitor stand moved or the door closed, the cables were compressed (crimping). By drilling a new hole and replacing the power cable, he not only fixed the intermittent power loss of the monitor but also unexpectedly restored the Wi-Fi signal around the desks. Eddy hypothesized that the cable compression might be causing electromagnetic interference (EMI) from the power line, which in turn interfered with the Wi-Fi signal. Nevertheless, the Wi-Fi dead zone issue in the back corridor remains unresolved, and he plans to use Software Defined Radio (SDR) and Yagi antennas for further on-site detection.",
    tags_en: ["Wi-Fi", "Electromagnetic Interference", "EMI", "IT Maintenance", "Power Cable", "SDR"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/09/18/techie-fixed-wi-fi-dead-zone-with-a-drill/5297036", lang: "EN" }
    ]
  },
  {
    id: "20260918-12979",
    trackers: ["os"],
    category: "重點關注",
    title: "AWS 宣布推出新版使用者體驗，簡化雲端環境設定流程，加速新創產品開發",
    summary: "亞馬遜網路服務（AWS）承認其現有的雲端控制台（console）對於新使用者而言過於複雜，成為開發初期障礙。為了解決此問題，AWS 推出了一套新的「入門體驗」（getting started experience）。這項新功能旨在讓新使用者能更快速地開始專案開發，特別是針對處於 AI 時代的「建構者」（builders）。新流程允許使用者透過 Google、GitHub 和 Apple 等帳號進行註冊，並自動建立專案。使用者無需進行複雜的配置任務，而是從「合理的預設值」（sensible defaults）開始，並透過一個提示，讓程式碼代理（coding agent）自動配置與 AWS 環境的整合。此外，新系統還提供預設的支出限制（spending limit），使用者可以從每月 $20 開始設定，並在接近預算上限時，AWS 會主動暫停專案，以防止超支。此舉顯示 AWS 正在積極優化其使用者介面，以降低新用戶的入門門檻，加速其雲端服務的採用率。",
    tags: ["AWS", "雲端服務", "使用者體驗", "新創公司", "AI 應用", "雲端架構"],
    title_en: "AWS Launches New User Experience to Simplify Cloud Environment Setup and Accelerate Startup Development",
    summary_en: "Amazon Web Services (AWS) acknowledged that its existing cloud console is overly complex for new users, creating a barrier during early development. To address this, AWS has introduced a new 'getting started experience.' This feature aims to help new users begin project development more quickly, especially for 'builders' in the AI era. The new workflow allows users to register using accounts from providers like Google, GitHub, and Apple, and automatically sets up a project. Users no longer need to perform complex configuration tasks; instead, they start with 'sensible defaults' and, through a prompt, a coding agent automatically configures integrations with the AWS environment. Furthermore, the new system provides a default spending limit, which users can set starting from $20 per month. AWS will proactively suspend the project when the budget approaches the limit, preventing overspending. This move demonstrates AWS's commitment to actively optimizing its user interface to lower the entry barrier for new users and accelerate the adoption of its cloud services.",
    tags_en: ["AWS", "Cloud Services", "User Experience", "Startups", "AI Applications", "Cloud Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/09/18/aws-confesses-its-console-causes-cloudy-confusion-for-new-users/5297365", lang: "EN" }
    ]
  },
  {
    id: "20260918-12701",
    trackers: ["security"],
    category: "產業動態",
    title: "팔로알토 네트웍스指出：前沿AI模型「Mithos」揭露的漏洞，比資安專家一年搜尋成果更驚人",
    summary: "在「Cyber Summit 2026」上，팔로알토 네트웍스（Palo Alto Networks）代表朴相圭指出，隨著高性能前沿AI模型（如Anthropic的「Project Glasswing」參與方）的普及，傳統的資安模型和慣例必須進行全面轉型。他透露，透過參與「Project Glasswing」對「Mithos」進行漏洞掃描，其發現的漏洞數量和難度，甚至超越了全球頂尖資安企業數千名工程師投入一年時間尋找的成果。據稱，全球領先金融企業在數小時內就發現了數百個「Critical high」級別的漏洞。朴代表警告，若將此類高能AI模型用於掃描韓國所有企業和政府機構的系統，將會發現極為驚人的漏洞數量。他建議企業應立即採取「零信任」（Zero Trust）架構、建立完全自動化的AI基礎安全營運中心（SOC），並利用安全存取服務邊緣（SASE）取代VPN等措施。此外，他強調資安轉型刻不容緩，並提出建立國家通用的AI安全框架、推動零信任制度化等建議。",
    tags: ["Palo Alto Networks", "Mithos", "Project Glasswing", "零信任", "AI安全", "Cyber Summit 2026", "SASE"],
    title_en: "Palo Alto Networks: Vulnerabilities Discovered by Frontier AI Model 'Mithos' Exceed One Year of Expert Cybersecurity Research",
    summary_en: "At 'Cyber Summit 2026,' Palo Alto Networks representative Sang-Kyu Park pointed out that with the proliferation of high-performance frontier AI models (such as those involved in Anthropic's 'Project Glasswing'), traditional cybersecurity models and practices must undergo a complete transformation. He revealed that vulnerability scanning conducted on 'Mithos' through participation in 'Project Glasswing' yielded a number and complexity of vulnerabilities that surpassed the findings of thousands of engineers from top global cybersecurity firms working for an entire year. It was reported that global leading financial institutions discovered hundreds of 'Critical high' level vulnerabilities within hours. Representative Park warned that if such high-powered AI models were used to scan the systems of all Korean corporate and government organizations, an astonishing number of vulnerabilities would be found. He advised that companies should immediately adopt a 'Zero Trust' architecture, establish fully automated AI-powered Security Operations Centers (SOCs), and utilize Secure Access Service Edge (SASE) to replace measures like VPNs. Furthermore, he emphasized that cybersecurity transformation is urgent, proposing recommendations such as establishing a national AI security framework and promoting the institutionalization of Zero Trust.",
    tags_en: ["Palo Alto Networks", "Mithos", "Project Glasswing", "Zero Trust", "AI Security", "Cyber Summit 2026", "SASE"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145953", lang: "EN" }
    ]
  },
  {
    id: "20260918-12703",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "無",
    summary: "本文內容為描述一場大型體育活動（第18屆網路領土守護馬拉松大賽）的報導，內容涉及活動的籌辦單位、參與人數、活動流程（包括不同距離的跑步和慶典環節），以及活動主辦方對國家安全和AI強國建設的宏觀論述。文章未提及任何資安漏洞、技術細節、CVE 編號或具體的安全事件。因此，無法從資安角度進行摘要或提供修補建議。",
    tags: ["馬拉松", "AI強國", "網路領土", "體育活動"],
    title_en: "N/A",
    summary_en: "This article reports on a large-scale sporting event (the 18th Cyber Territory Defense Marathon). The content covers the event organizers, the number of participants, the activity flow (including different running distances and celebration segments), and the event hosts' macro-level discussions on national security and building an AI powerhouse. Since the article does not mention any cybersecurity vulnerabilities, technical details, CVE IDs, or specific security incidents, it is impossible to provide a summary or remediation advice from a cybersecurity perspective.",
    tags_en: ["Marathon", "AI Powerhouse", "Cyber Territory", "Sporting Event"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145949", lang: "EN" }
    ]
  },
  {
    id: "20260918-12704",
    trackers: ["security"],
    category: "產業動態",
    title: "知名數學學園網站遭駭，學生與家長個人資料外洩，警惕二次詐騙風險",
    summary: "某知名數學學園「생각하는 황소」的考試預約網站於 17 日遭不明駭客入侵。根據學園的公告，可能洩漏的資訊包含家長姓名、學生姓名、學校、年級、出生日期及家長電話等敏感資料。學園已暫時關閉網站並向相關機構報案，並指出洩漏範圍可能涵蓋所有有預約紀錄的家長和學生。\n\n本次事件的嚴重性不僅限於資料外洩，更引發了二次傷害。在洩漏公告後，家長社群中開始出現利用這些個人資訊進行恐嚇、詐騙（如假裝發生意外要求賠償）以及綁架等語音詐騙（Voice Phishing）和簡訊詐騙（Smishing）的案例。資安專家指出，這類駭客攻擊已成為全面性的威脅，不論企業規模大小，都可能成為目標。特別是缺乏完善安全基礎設施的中小型平台和私人服務領域，正成為駭客的獵物。建議家長和相關人士提高警覺，警惕利用洩漏的個人資料進行的各種二次、三次詐騙行為。",
    tags: ["個人資料外洩", "數學學園", "Voice Phishing", "Smishing", "資安威脅", "中小型平台"],
    title_en: "Famous Math Academy Website Hacked, Student and Parent Personal Data Leaked; Beware of Secondary Scam Risks",
    summary_en: "The exam reservation website for a well-known math academy, 'Thinking Bull,' was infiltrated by unknown hackers on the 17th. According to the academy's announcement, sensitive data that may have been leaked includes parent names, student names, school, grade level, date of birth, and parent phone numbers. The academy has temporarily shut down the website and reported the incident to relevant authorities, noting that the scope of the leak may cover all parents and students with reservation records.\n\nThe severity of this incident is not limited to data leakage; it has triggered secondary harm. Following the leak announcement, cases emerged in parent communities utilizing this personal information for intimidation, fraud (such as demanding compensation by pretending an accident occurred), and voice phishing and smishing scams (Voice Phishing and Smishing) involving kidnapping. Cybersecurity experts point out that these types of hacker attacks have become a comprehensive threat, potentially targeting organizations of all sizes. Small and medium-sized platforms and private service sectors, especially those lacking robust security infrastructure, are becoming prime targets for hackers. Parents and relevant individuals are advised to raise their awareness and be vigilant against various secondary and tertiary scam activities utilizing the leaked personal data.",
    tags_en: ["Personal Data Leakage", "Math Academy", "Voice Phishing", "Smishing", "Cybersecurity Threat", "Small and Medium-sized Platforms"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145947", lang: "EN" }
    ]
  },
  {
    id: "20260918-12708",
    trackers: ["security"],
    category: "產業動態",
    title: "FBI行動：沒收知名DDoS攻擊平台NightmareStresser，打擊網路攻擊服務",
    summary: "美國司法部（DOJ）宣布，聯邦調查局（FBI）已成功沒收了「NightmareStresser」這一個歷史悠久的DDoS攻擊平台網域。此類服務被稱為「booter」，其運作模式是讓攻擊者只需付費，即可租用預先感染的路由器和物聯網（IoT）設備，從而發動大規模的網路攻擊，即使缺乏專業的網路知識也能執行。FBI指出，自2022年以來，此類服務已在全球範圍內被用於數十萬次DDoS攻擊。根據安全公司Searchlight Cyber的資料，該平台曾擁有超過56.6萬名註冊用戶，並能發送規模高達200 Gbps的攻擊。此次沒收行動是國際聯合行動「Operation PowerOFF」的一部分，此前該行動已成功關閉了英國的DigitalStress平台，並沒收了DDoS服務評估網站Dstat.cc。美國司法部此前也曾於2022年12月沒收過該網域，並逮捕了數名涉嫌經營多個DDoS代辦服務的嫌犯。",
    tags: ["FBI", "DDoS", "NightmareStresser", "Operation PowerOFF", "IoT", "網路安全"],
    title_en: "FBI Action: Seizure of Prominent DDoS Attack Platform NightmareStresser to Combat Cyber Attacks",
    summary_en: "The U.S. Department of Justice (DOJ) announced that the FBI has successfully seized the domain for 'NightmareStresser,' a long-standing DDoS attack platform. These services are known as 'booters,' and their operational model allows attackers to rent pre-infected routers and Internet of Things (IoT) devices for a fee, enabling them to launch large-scale network attacks even without professional networking knowledge. The FBI noted that since 2022, such services have been used in hundreds of thousands of DDoS attacks globally. According to data from security firm Searchlight Cyber, the platform once boasted over 566,000 registered users and was capable of launching attacks up to 200 Gbps. This seizure is part of an international joint effort called 'Operation PowerOFF,' which previously successfully shut down the UK's DigitalStress platform and seized the DDoS service assessment website Dstat.cc. The U.S. Department of Justice had previously seized the domain in December 2022 and arrested several suspects suspected of operating multiple DDoS proxy services.",
    tags_en: ["FBI", "DDoS", "NightmareStresser", "Operation PowerOFF", "IoT", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145943", lang: "EN" }
    ]
  },
  {
    id: "20260918-12709",
    trackers: ["security"],
    category: "產業動態",
    title: "AI時代的資安訓練趨勢：從單純點擊測試到檢驗組織決策與供應鏈風險",
    summary: "隨著生成式AI使網路釣魚郵件的語法和翻譯錯誤等傳統識別點消失，資安訓練的重點正從「技術層面的點擊判斷」轉移到「業務情境的異常判斷」與「組織的決策流程」上。業界指出，現代的模擬訓練已進化為「實戰型防禦體系」，要求模擬情境需高度客製化，甚至由客戶反向提出需求，涵蓋如BEC（業務電子郵件詐騙）或內部權限濫用等複雜場景。\n\n訓練的範圍也擴展至供應鏈，攻擊者不再僅針對單一企業，而是利用合作夥伴、SaaS權限和雲端權限進行繞道攻擊。因此，模擬訓練的目標已從單純的員工行為檢測，轉向驗證「誰的權限」和「哪些連結」是薄弱環節。此外，訓練體系也正納入BAS（Breach and Attack Simulation）等自動化工具，結合紅隊（Red Team）的深度驗證，形成「持續性」與「深度性」結合的綜合檢驗模型。\n\n然而，業界也提醒，單純依賴點擊率等指標容易產生「假象」，應結合「報告率」、「報告耗時」等行為指標，並建立「診斷-教育-再訓練」的良性循環體系。對於中小型企業，建議政府應透過雲端訂閱服務和保險掛鉤等方式，降低其參與模擬訓練的門檻。",
    tags: ["生成式AI", "網路釣魚", "模擬訓練", "供應鏈安全", "BAS", "BEC"],
    title_en: "Cybersecurity Training Trends in the AI Era: From Simple Phishing Tests to Assessing Organizational Decision-Making and Supply Chain Risk",
    summary_en: "As generative AI eliminates traditional indicators of phishing emails, such as grammatical or translation errors, the focus of cybersecurity training is shifting from 'technical click judgment' to 'anomaly judgment within business contexts' and 'organizational decision-making processes.' The industry notes that modern simulated training has evolved into a 'live defense system,' requiring highly customized scenarios, sometimes even driven by client requirements. These scenarios cover complex situations such as Business Email Compromise (BEC) or internal privilege abuse. The scope of training has also expanded to the supply chain. Attackers no longer target single enterprises but use partners, SaaS permissions, and cloud credentials for lateral attacks. Consequently, the goal of simulated training has shifted from merely detecting employee behavior to validating 'who has what permissions' and identifying 'which links' are weak points. Furthermore, training systems are incorporating automated tools like Breach and Attack Simulation (BAS), combined with deep validation from Red Teaming, forming a comprehensive assessment model that combines 'continuity' and 'depth.' However, the industry also cautions that relying solely on metrics like click rates can create a 'false sense of security.' Instead, organizations should combine behavioral metrics such as 'reporting rate' and 'time to report,' and establish a virtuous cycle of 'diagnosis-education-retraining.' For small and medium-sized enterprises (SMEs), it is recommended that governments lower the barrier to entry for participating in simulated training through methods like cloud subscription services and insurance linkage.",
    tags_en: ["Generative AI", "Phishing", "Simulated Training", "Supply Chain Security", "BAS", "BEC"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145920", lang: "EN" }
    ]
  },
  {
    id: "20260918-12711",
    trackers: ["security"],
    category: "產業動態",
    title: "Seapazone，在DLP解決方案中搭載超輕量AI-OCR引擎，強化離裝置資料外洩防護",
    summary: "Seapazone宣布，其資料外洩防護（DLP）解決方案和安全USB已內建「超輕量AI-OCR」引擎。過去，為了從圖片或影片中提取個人資訊，主要採用將資料傳輸到昂貴的中央集中式伺服器的方式。然而，Seapazone已將此轉變為在個別使用者PC上直接處理的離裝置（On-Device）模式。透過將此超輕量OCR引擎內建到PC和DLP本身，可以阻止敏感的大容量影片檔案等上傳到外部伺服器，從而減少網路頻寬浪費，並確保了無論是否連網都能持續運作的高效率。此外，它還能阻斷資料傳輸過程中可能發生的中間洩漏或因伺服器遭駭客攻擊所導致的二次傷害，從而構築零信任（Zero Trust）的資安環境。特別是，為了應對透過智慧型手機拍攝PC螢幕竊取資訊的內部人員資安問題，它結合了可見性/不可見性螢幕浮水印功能和AI-OCR引擎，預防資料外洩行為。此功能無需額外安裝程式，即可透過現有的DLP代理程式（Agent）整合運作，降低系統負載，並提高資安管理員的營運效率。",
    tags: ["Seapazone", "DLP", "AI-OCR", "離裝置", "資料外洩防護", "零信任"],
    title_en: "Seapazone Integrates Ultra-Lightweight AI-OCR Engine into DLP Solution to Enhance Off-Device Data Leakage Protection",
    summary_en: "Seapazone announced that its Data Loss Prevention (DLP) solution and secure USB now feature a built-in 'Ultra-Lightweight AI-OCR' engine. Previously, extracting personal information from images or videos required transmitting data to expensive, centralized servers. However, Seapazone has transitioned this to an On-Device mode, processing data directly on the individual user's PC. By embedding this lightweight OCR engine into the PC and the DLP itself, it can prevent sensitive, large-volume video files from being uploaded to external servers. This not only reduces network bandwidth waste but also ensures high efficiency and continuous operation regardless of connectivity. Furthermore, it blocks potential intermediate leakage during data transmission or secondary damage caused by server hacking, thereby building a Zero Trust security environment. Notably, to address insider security risks involving the theft of information captured from PC screens using smartphones, it combines visible/invisible screen watermarking functionality with the AI-OCR engine to prevent data leakage. This feature operates through integration with existing DLP agents without requiring additional software installation, thereby reducing system load and improving the operational efficiency for security administrators.",
    tags_en: ["Seapazone", "DLP", "AI-OCR", "On-Device", "Data Loss Prevention", "Zero Trust"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145936", lang: "EN" }
    ]
  },
  {
    id: "20260918-12712",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "지란지교시큐리티發起 Project Q-BRIDGE，推動企業級量子安全轉型標準化",
    summary: "지란지교시큐리티宣布啟動「Project Q-BRIDGE」，旨在將其在傳統資安軟體領域累積的技術與業務能力，全面擴展至量子安全轉型（Post-Quantum Cryptography, PQC）領域。此專案的重點並非單純導入某種PQC演算法或單一安全產品，而是著重於為客戶的整個加密基礎設施環境，具體規劃「何物、何順序進行轉型」。\n\n該專案採用「發現(Discover)→連接(Connect)→轉型(Transition)」三階段模式。首先，透過被動和主動的加密資產發現技術，將組織內隱藏的加密資產與風險點視覺化並排序。接著，連接各領域所需的技術與解決方案，最後則考量到與現有遺留系統的相容性、性能及業務連續性，執行分階段的轉型。지란지교시큐리티將NIST標準的PQC前瞻性應用於電子郵件、文件、行動等核心業務安全解決方案，並實現了與現有加密體系的並行混合結構及「加密敏捷性」（Crypto Agility）。\n\n為此，公司組建了「K-量子轉型技術與業務協議體」，匯集了KAIST、ICTK、한빛에스아이、빅오、유니키等學術與產業專業力量，共同進行技術整合與性能驗證，致力於建立可立即執行的量子轉型標準模型。",
    tags: ["지란지교시큐리티", "Project Q-BRIDGE", "PQC", "量子安全", "加密敏捷性", "NIST"],
    title_en: "Jiranjiogyo Security Launches Project Q-BRIDGE to Standardize Enterprise-Grade Quantum Security Transformation",
    summary_en: "Jiranjiogyo Security announced the launch of \"Project Q-BRIDGE,\" aiming to fully extend its accumulated technical and business capabilities in traditional cybersecurity software into the Post-Quantum Cryptography (PQC) domain. The focus of this project is not merely the introduction of a specific PQC algorithm or single security product, but rather on systematically planning \"what and in what order\" the transformation should occur across a client's entire cryptographic infrastructure environment.\n\nThe project adopts a three-stage model: \"Discover $\\rightarrow$ Connect $\\rightarrow$ Transition.\" First, it visualizes and prioritizes hidden cryptographic assets and risk points within an organization using passive and active cryptographic asset discovery technologies. Next, it connects the necessary technologies and solutions across various domains. Finally, it executes phased transitions while considering compatibility with existing legacy systems, performance, and business continuity. Jiranjiogyo Security applies NIST standards for PQC proactively across core business security solutions such as email, documents, and mobile, achieving a parallel hybrid structure with existing cryptographic systems and \"Crypto Agility.\"\n\nTo achieve this, the company formed the \"K-Quantum Transformation Technology and Business Consortium,\" gathering academic and industry expertise from KAIST, ICTK, Hanbit SI, Big O, and Unikey to conduct technical integration and performance verification, dedicated to establishing an immediately actionable quantum transformation standard model.",
    tags_en: ["Jiranjiogyo Security", "Project Q-BRIDGE", "PQC", "Quantum Security", "Crypto Agility", "NIST"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145937", lang: "EN" }
    ]
  },
  {
    id: "20260918-12713",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "安랩發布「Agentic AI 安全」戰略：打造 AI 原生平台應對複雜網路威脅",
    summary: "資安平台企業安랩（AhnLab）在「안랩 ISF 2026」綜合安全戰略大會上，展示了其核心的「Agentic AI（代理式AI）」安全戰略。本次活動旨在應對快速演變的網路威脅，強調的重點不只是提供 AI 功能，更關鍵的是如何利用 AI 有效解決客戶的資安問題。安랩提出以「안랩 AI 플러스」為核心的整合品牌，打造一套能讓多個 AI Agent 協作、執行安全運營的 Agentic AI 安全架構。專家們分享了從 AI SOC、實體 AI 安全、生成式 AI 安全到智慧零信任等多方面內容。該平台旨在將分散在不同產品和領域的數據，連結成單一的「安全情境（Security Context）」，從而實現精確的攻擊情境判斷和快速、負責的應對執行，為企業提供下一代 AI 原生安全營運模式。",
    tags: ["安랩", "AhnLab", "Agentic AI", "안랩 AI 플러스", "AI-네이티브 보안", "資安平台"],
    title_en: "AhnLab Unveils 'Agentic AI Security' Strategy: Building AI-Native Platforms to Counter Complex Cyber Threats",
    summary_en: "Cybersecurity platform company AhnLab showcased its core 'Agentic AI' security strategy at the 'AhnLab ISF 2026' comprehensive security strategy conference. This event aims to address rapidly evolving cyber threats, emphasizing not just the provision of AI features, but critically, how to leverage AI to effectively solve clients' cybersecurity problems. AhnLab proposed an integrated brand centered on 'AhnLab AI Plus,' creating an Agentic AI security architecture that allows multiple AI Agents to collaborate and execute security operations. Experts shared content covering various aspects, including AI SOC, physical AI security, generative AI security, and intelligent zero trust. The platform aims to connect data scattered across different products and domains into a single 'Security Context,' thereby enabling precise attack scenario judgment and rapid, responsible response execution, providing enterprises with a next-generation AI-native security operational model.",
    tags_en: ["AhnLab", "Agentic AI", "AhnLab AI Plus", "AI-Native Security", "Cybersecurity Platform"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145939", lang: "EN" }
    ]
  },
  {
    id: "20260918-12706",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "金融機構面臨AI代理人攻擊威脅：金融資安院強調強化API安全與預防性檢測",
    summary: "隨著AI技術的快速發展，AI代理人（AI Agent）已成為金融領域主要的網路攻擊工具。金融資安院（금융보안원）於近期舉辦了「金融AI安全威脅應對研討會」，旨在提高金融機構對此類新型威脅的防禦能力。研討會指出，攻擊者已開始利用AI代理人，使得API（應用程式介面）成為主要的攻擊目標。因此，金融機構必須強化API的安全性管理，特別是檢查安全金鑰的洩露狀況。此外，面對日益現實的AI安全威脅，資安院強調應利用AI技術進行主動的、預防性的安全檢測和漏洞修復。資安院也分享了其白帽駭客在實際安全檢測中累積的AI應用檢測技術和漏洞確認經驗，並針對金融業利用AI或SaaS服務時的安全最佳實踐提出了建議，以確保金融系統的穩定性。",
    tags: ["AI Agent", "API安全", "金融資安", "금융보안원", "網路攻擊", "預防性檢測"],
    title_en: "Financial Institutions Face AI Agent Attack Threats: Korea's Financial Security Institute Stresses Strengthening API Security and Proactive Detection",
    summary_en: "With the rapid development of AI technology, AI Agents have become a primary network attack tool in the financial sector. The Korea's Financial Security Institute (FSI) recently held a 'Financial AI Security Threat Response Seminar' aimed at enhancing financial institutions' defense capabilities against these novel threats. The seminar pointed out that attackers have begun utilizing AI Agents, making APIs (Application Programming Interfaces) a primary target. Therefore, financial institutions must strengthen API security management, especially regarding the detection of leaked security keys. Furthermore, facing increasingly realistic AI security threats, the FSI emphasized the need to use AI technology for proactive and preventive security detection and vulnerability remediation. The FSI also shared its experience in AI application detection techniques and vulnerability confirmation gained from white-hat hacking during practical security assessments, offering recommendations for security best practices when the financial industry utilizes AI or SaaS services, thereby ensuring the stability of the financial system.",
    tags_en: ["AI Agent", "API Security", "Financial Security", "FSI", "Cyberattack", "Proactive Detection"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145945", lang: "EN" }
    ]
  }
];
