// data-20260820.js — 2026-08-20
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-20"] = [
  {
    id: "20260820-001",
    trackers: ["security"],
    category: "重大事件",
    title: "日本 Sakura Internet 客戶合約系統遭入侵，影響 136 萬會員資料，包含姓名與密碼雜湊值",
    summary: "日本雲端與資料中心服務提供商 Sakura Internet 近日宣布，其客戶合約管理系統曾遭未授權存取。該系統儲存了約 136 萬個會員帳號的資料，涉及姓名、地址、電話、電子郵件、契約服務等個人資訊。此外，約 30 個帳號的雜湊密碼也可能遭到存取。雖然公司尚未確認資料是否已外洩，但這兩起獨立的入侵事件（一為合約系統，一為 Sakura Rental Server）顯示其資安防護面臨多重風險。\n\n為應對此次事件，Sakura Internet 已採取了停用身分驗證憑證、移除惡意程式、強化監控等措施，並啟動鑑識調查，同時通知所有可能受影響的用戶。用戶應提高警覺，留意任何來自該公司的異常通知或要求提供密碼的行為。建議用戶應立即更換所有可能受影響帳號的密碼，並啟用雙重驗證機制，以降低帳號被盜用的風險。",
    tags: ["Sakura Internet", "資料外洩", "客戶合約系統", "網路入侵", "會員資料", "密碼雜湊"],
    title_en: "Japan's Sakura Internet Client Contract System Breached, Affecting 1.36 Million Members' Data Including Names and Password Hashes",
    summary_en: "Cloud and data center service provider Sakura Internet recently announced that its client contract management system was subject to unauthorized access. This system stored personal information for approximately 1.36 million member accounts, including names, addresses, phone numbers, emails, and contract services. Additionally, the hashed passwords for about 30 accounts may have been accessed. Although the company has not confirmed whether the data has been leaked, these two separate intrusion incidents (one involving the contract system, and one involving the Sakura Rental Server) indicate that its cybersecurity defenses face multiple risks.\n\nIn response to these incidents, Sakura Internet has taken measures such as disabling authentication certificates, removing malware, and strengthening monitoring, while initiating a forensic investigation and notifying all potentially affected users. Users are advised to remain vigilant and watch out for any unusual notifications or requests for passwords from the company. It is recommended that users immediately change the passwords for all potentially affected accounts and enable two-factor authentication to reduce the risk of account theft.",
    tags_en: ["Sakura Internet", "Data Leak", "Client Contract System", "Network Intrusion", "Member Data", "Password Hash"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178301", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-002",
    trackers: ["security"],
    category: "重大事件",
    title: "柏林邦政府網路遭駭：調查顯示攻擊者利用行政部門弱點入侵關鍵政府資料網路",
    summary: "德國柏林邦政府於8月17日公告，其用於連接約600個政府及公共據點的「Landesnetz Berlin」網路遭到駭客入侵。該網路是當地行政體系的核心，涵蓋行政部門、警察、消防單位及醫院等關鍵服務。初步調查顯示，攻擊者疑似利用連接邦政府網路的某個行政部門的IT營運環境弱點，進而對整個邦政府網路發動了攻擊。基於安全考量，相關的兩個受影響行政部門已自8月14日起與邦政府網路進行隔離。此次事件導致部分補助案件暫時無法處理，受影響部門的員工也無法正常使用Email或網際網路等IT服務，只能改用傳統通訊方式。柏林邦刑事警察局與檢方已介入調查，事件凸顯了政府關鍵基礎設施在面對內部弱點時的資安風險。",
    tags: ["柏林邦政府", "Landesnetz Berlin", "駭客攻擊", "政府網路", "資安事件"],
    title_en: "Berlin State Government Network Hacked: Investigation Shows Attackers Exploited Administrative Weaknesses to Breach Critical Government Data Network",
    summary_en: "The Berlin State Government announced on August 17 that its \"Landesnetz Berlin\" network, which connects approximately 600 government and public facilities, was compromised by hackers. This network is central to the local administrative system, covering critical services such as administrative departments, police, fire services, and hospitals. Preliminary investigations suggest that attackers exploited a vulnerability within the IT operational environment of a specific administrative department connected to the state government network, subsequently launching an attack across the entire state government network. Due to security concerns, two affected administrative departments have been isolated from the state government network since August 14. This incident has temporarily halted the processing of some subsidy cases, and employees in the affected departments are unable to use standard IT services like email or the internet, requiring them to revert to traditional communication methods. The Berlin State Criminal Police and the Public Prosecutor's Office have launched investigations, highlighting the cybersecurity risks faced by government critical infrastructure when internal weaknesses are present.",
    tags_en: ["Berlin State Government", "Landesnetz Berlin", "Hacking Attack", "Government Network", "Cybersecurity Incident"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178273", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-003",
    trackers: ["os"],
    category: "Linux",
    title: "X.Org Server 26.1 RC1 發布，標誌著五年來重大功能更新，提升安全性與建構效率",
    summary: "X.Org Server 26.1 RC1 版本已發布，預計將成為五年來首次重大功能發布，繼承 xorg-server 21.1 系列。雖然其功能豐富度不及正在開發的 XWayland 26.1，但該版本帶來了多項重要改進。主要技術變動包括：移除 Autoconf/Automake 建構系統，改採 Meson；預設禁用位元交換的客戶端（byte-swapped clients），提升安全性；新增對 DPMSInfoNotify 事件的支援；並在 Xvfb 中加入了多個 CRTC 的支援，以及支援多達 13 個滑鼠按鈕。此外，系統也增加了多項安全改進，例如將預設非 root 使用者的日誌檔案移動至 $XDG_STATE_HOME/xorg，並為 BSD 平台新增了 DRM 支援。這些更新旨在提升 X Server 的穩定性、安全性與現代化程度。",
    tags: ["X.Org Server", "xorg-server", "Meson", "Linux 核心", "XWayland", "DPMS"],
    title_en: "X.Org Server 26.1 RC1 Released, Marking Major Feature Updates in Five Years, Enhancing Security and Build Efficiency",
    summary_en: "X.Org Server 26.1 RC1 has been released, expected to be the first major feature release in five years, succeeding the xorg-server 21.1 series. Although its feature richness does not match the currently developing XWayland 26.1, this version brings several important improvements. Key technical changes include: replacing the Autoconf/Automake build system with Meson; default disabling of byte-swapped clients to enhance security; adding support for the DPMSInfoNotify event; and adding support for multiple CRTCs and up to 13 mouse buttons in Xvfb. Furthermore, the system includes several security enhancements, such as moving log files for default non-root users to $XDG_STATE_HOME/xorg, and adding DRM support for the BSD platform. These updates aim to improve the stability, security, and modernization of the X Server.",
    tags_en: ["X.Org Server", "xorg-server", "Meson", "Linux Kernel", "XWayland", "DPMS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/X.Org-Server-26.1-RC1", lang: "EN" }
    ]
  },
  {
    id: "20260820-004",
    trackers: ["os"],
    category: "Linux",
    title: "EXT4 檔案系統為 Linux 7.3 帶來效能升級，提升平行 I/O 寫入與記憶體預取效率",
    summary: "EXT4 檔案系統為 Linux 7.3 版本進行了多項效能優化與功能改進。主要更新包括允許進行平行直接 I/O 寫入，解決先前在檢查是否安全避免獨佔鎖時過於保守的問題。此外，在多區塊分配器中，使用 fallocate() 提升了 ext4_mb_prefetch() 的效能，避免不必要的運算。另有優化處理已更新 folio 的覆寫操作，並進行了程式碼清理，以避免潛在的軟鎖定（soft lockups）或 RCU 停頓（stall conditions）。這些改動旨在提升檔案系統的整體穩定性與效能，為 Linux 7.3 帶來更佳的檔案管理體驗。相關的完整功能變更清單已透過 Pull Request 提交。",
    tags: ["EXT4", "Linux 7.3", "檔案系統", "I/O 效能", "Linux 核心"],
    title_en: "EXT4 Filesystem Brings Performance Upgrades to Linux 7.3, Enhancing Parallel I/O Writes and Memory Prefetching Efficiency",
    summary_en: "The EXT4 filesystem has undergone multiple performance optimizations and feature enhancements for Linux 7.3. Key updates include enabling parallel direct I/O writes, addressing previous overly conservative issues when checking for exclusive locks to ensure safety. Furthermore, in the multi-block allocator, the use of fallocate() improves the efficiency of ext4_mb_prefetch(), avoiding unnecessary computations. The changes also optimize the overwrite operation for updated folios and include code cleanup to prevent potential soft lockups or RCU stall conditions. These modifications aim to boost the overall stability and performance of the filesystem, providing an improved file management experience for Linux 7.3. The complete list of functional changes has been submitted via a Pull Request.",
    tags_en: ["EXT4", "Linux 7.3", "Filesystem", "I/O Performance", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/EXT4-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260820-005",
    trackers: ["security"],
    category: "重大事件",
    title: "波蘭電子病歷系統MyDr遭駭，可能導致近1,900萬人醫療資料外洩",
    summary: "波蘭政府正在調查一宗針對主要電子病歷系統（EDM）供應商MyDr的網路攻擊事件。MyDr的雲端醫療資訊平臺服務於約1.2萬家醫療機構，整合了電子健康記錄、預約、處方等關鍵功能，並與波蘭政府的全國電子健康平臺P1連結。攻擊者可能存取至2024年4月止的歷史資料，涉及基層醫療服務業者的處方、預約、指定藥物及醫師等高度敏感的病患資訊。波蘭數位事務部已確認事件，並採取預防措施，例如替換連接P1平臺的數位憑證。MyDr方面已公告排除事件原因並加強安全措施，目前正持續調查受影響的客戶與病患資料範圍，並承諾在調查完成後立即通知相關方。",
    tags: ["MyDr", "波蘭", "電子病歷系統", "醫療資訊", "資料外洩", "P1平臺"],
    title_en: "Polish Electronic Health Record System MyDr Hacked, Potentially Exposing Medical Data of Nearly 19 Million People",
    summary_en: "The Polish government is investigating a cyberattack targeting MyDr, a major Electronic Medical Record (EMR) provider. MyDr's cloud medical information platform serves approximately 12,000 healthcare facilities, integrating critical functions such as electronic health records, appointment scheduling, and prescriptions, and connecting to Poland's national electronic health platform, P1. Attackers may have accessed historical data up to April 2024, involving highly sensitive patient information, including prescriptions, appointments, designated medications, and physician details from primary care service providers. The Polish Ministry of Digital Affairs has confirmed the incident and taken preventative measures, such as replacing the digital certificates connecting to the P1 platform. MyDr has announced that it has eliminated the cause of the incident and strengthened security measures. It is currently continuing to investigate the scope of affected client and patient data, and has pledged to notify all relevant parties immediately upon completion of the investigation.",
    tags_en: ["MyDr", "Poland", "Electronic Health Record System", "Medical Information", "Data Leakage", "P1 Platform"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178310", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全更新 DSA-6455-1：修補 OpenSSH 處理特定密鑰格式時的緩衝區溢出漏洞",
    summary: "Debian 發布了安全公告 DSA-6455-1，修補了 OpenSSH 處理特定密鑰格式時可能發生的緩衝區溢出漏洞。此漏洞存在於 OpenSSH 的核心元件中，攻擊者若能利用此漏洞，可能導致遠端執行程式碼（RCE）。建議所有使用 Debian 系統的用戶及系統管理員應立即更新 OpenSSH 套件至修補版本，以防止被惡意利用。由於此漏洞涉及核心安全元件，修補是極為必要的。用戶應透過標準的系統更新機制（如 `apt update` 和 `apt upgrade`）進行修補，以確保系統的安全性。本公告強調了修補的時效性與重要性，建議所有相關系統盡快完成升級。",
    tags: ["Debian", "OpenSSH", "DSA-6455-1", "緩衝區溢出", "Linux 核心元件"],
    title_en: "Debian Releases Security Update DSA-6455-1: Patching OpenSSH Buffer Overflow Vulnerability When Handling Specific Key Formats",
    summary_en: "Debian has released security advisory DSA-6455-1, which patches a buffer overflow vulnerability that may occur when OpenSSH processes specific key formats. This vulnerability resides in a core OpenSSH component, and if exploited, an attacker could potentially achieve Remote Code Execution (RCE). All users and system administrators running Debian systems are advised to immediately update the OpenSSH package to the patched version to prevent malicious exploitation. Due to the nature of this vulnerability involving a core security component, patching is critically necessary. Users should apply the patch through standard system update mechanisms (such as `apt update` and `apt upgrade`) to ensure system security. This advisory emphasizes the timeliness and importance of the patch, recommending that all affected systems upgrade as soon as possible.",
    tags_en: ["Debian", "OpenSSH", "DSA-6455-1", "Buffer Overflow", "Linux Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00366.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全更新：修補 OpenSSH 處理特定密鑰格式時的潛在資訊洩漏漏洞",
    summary: "Debian 針對 OpenSSH 核心元件發布了安全公告 DSA-6454-1，修補了一個在處理特定密鑰格式時可能導致資訊洩漏的漏洞。此漏洞的攻擊向量與具體影響的密鑰格式未在公告中詳述，但其本質是 OpenSSH 在處理某些密鑰時，可能透過錯誤的錯誤訊息或內部狀態洩漏敏感資訊。實務上，建議所有使用 Debian 系統並依賴 OpenSSH 的用戶，應立即透過系統更新機制（如 `apt update && apt upgrade`）安裝最新的安全補丁。此更新屬於核心元件層面的修補，旨在強化 OpenSSH 的安全性，防止攻擊者利用該漏洞竊取用戶的敏感密鑰或系統資訊。由於原文未提供 CVSS 分數或具體影響範圍，用戶應遵循 Debian 的官方指引進行修補。",
    tags: ["Debian", "OpenSSH", "DSA-6454-1", "資訊洩漏", "Linux 核心元件"],
    title_en: "Debian Releases Security Update: Patching Potential Information Leakage Vulnerability in OpenSSH Handling of Specific Key Formats",
    summary_en: "Debian has issued security advisory DSA-6454-1 for the OpenSSH core component, patching a vulnerability that could lead to information leakage when processing specific key formats. While the advisory does not detail the attack vector or the specific key formats affected, the vulnerability fundamentally involves OpenSSH potentially leaking sensitive information through erroneous error messages or internal states when handling certain keys. Practically, all users running Debian systems and relying on OpenSSH are advised to immediately install the latest security patch using the system update mechanism (e.g., `apt update && apt upgrade`). This update is a core component patch aimed at enhancing OpenSSH's security and preventing attackers from stealing user's sensitive keys or system information. Since the original text did not provide a CVSS score or specific scope of impact, users should follow Debian's official guidelines for remediation.",
    tags_en: ["Debian", "OpenSSH", "DSA-6454-1", "Information Leakage", "Linux Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00365.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6453-1 相關漏洞，強化核心元件安全性",
    summary: "Debian 發布安全公告 DSA-6453-1，修補了核心元件中的安全漏洞。此漏洞可能影響系統的完整性與安全性，建議所有使用 Debian 系統的用戶應立即更新系統以修補相關的漏洞。雖然原文未提供具體的 CVSS 分數或受影響產品列表，但此類核心元件的漏洞通常具有嚴重的實務影響，可能導致遠端代碼執行 (RCE) 或提升權限。用戶應遵循 Debian 官方的修補指引，執行系統更新，確保系統處於安全狀態。建議系統管理員特別注意檢查所有核心元件的更新狀態，以避免潛在的資安風險。",
    tags: ["Debian", "DSA-6453-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6453-1 Vulnerability to Enhance Core Component Security",
    summary_en: "Debian has issued a security advisory (DSA-6453-1) to patch a vulnerability in its core components. This vulnerability could potentially compromise system integrity and security. All users running Debian systems are advised to update immediately to patch the relevant flaw. Although the original advisory did not provide specific CVSS scores or a list of affected products, vulnerabilities in core components typically carry severe practical implications, potentially leading to Remote Code Execution (RCE) or privilege escalation. Users should follow the official Debian patching guidelines and execute a system update to ensure the system is in a secure state. System administrators are especially advised to check the update status of all core components to mitigate potential security risks.",
    tags_en: ["Debian", "DSA-6453-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00364.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-009",
    trackers: ["os"],
    category: "Linux",
    title: "RPM Package Manager 釋出 6.1.0 版本，強化宏定義、PKCS11 簽名支援與新發行模型",
    summary: "RPM Package Manager 釋出 6.1.0 版本，帶來多項重要功能升級。主要改進包括在定義時提供 RPM macros 的修飾符（modifiers），提升了建構與驗證錯誤處理的穩定性。此外，該版本新增了使用 PKCS11 tokens 簽署檔案的能力，透過 rpmsign 工具實現，大幅增強了套件的安全性驗證。從架構角度來看，6.1.0 版本也引入了受 Linux 核心啟發的新發行模型，預計將改善整個套件的生命週期管理。這些更新對於維護和部署基於 RPM 格式的 Linux 系統至關重要，能讓系統管理員更有效地管理套件的完整性與來源可信度。",
    tags: ["RPM Package Manager", "6.1.0", "Linux", "PKCS11", "套件管理"],
    title_en: "RPM Package Manager Releases 6.1.0, Enhancing Macro Definition, PKCS11 Signature Support, and Introducing New Release Model",
    summary_en: "The RPM Package Manager has released version 6.1.0, bringing several important feature upgrades. Key improvements include modifiers for defining RPM macros, which enhances the stability of build and validation error handling. Furthermore, this version adds the capability to sign files using PKCS11 tokens, implemented through the rpmsign tool, significantly boosting package security verification. From an architectural standpoint, the 6.1.0 version also introduces a new release model inspired by the Linux kernel, which is expected to improve overall package lifecycle management. These updates are crucial for maintaining and deploying Linux systems based on the RPM format, allowing system administrators to more effectively manage package integrity and source trustworthiness.",
    tags_en: ["RPM Package Manager", "6.1.0", "Linux", "PKCS11", "Package Management"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089719", lang: "EN" }
    ]
  },
  {
    id: "20260820-010",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 7.3 版本更新：引入多處理器系統群組排程重大重構",
    summary: "Linux 核心 7.3 版本主線儲存庫已整合了大量變更，包括但不限於對多處理器系統群組排程（group scheduling）機制進行了重大重構。這項更新屬於核心層面的底層優化，旨在提升系統在多核心環境下的資源分配效率與穩定性。雖然文章未提供具體的 CVE 或 CVSS 分數，但這類核心層的重構通常涉及底層的排程邏輯和系統調用，對於伺服器和高性能計算（HPC）環境的效能有實質影響。開發者應關注這些核心元件的變動，並確保使用最新版本的 Linux 核心以獲得最佳的效能和穩定性。建議系統管理員密切關注 Linux 核心的開發進度，並依循發行版（如 Ubuntu, RHEL 等）的官方安全公告進行升級。",
    tags: ["Linux 核心", "7.3 kernel", "群組排程", "多處理器系統", "核心優化"],
    title_en: "Linux Kernel 7.3 Update: Major Refactoring of Multiprocessor System Group Scheduling Introduced",
    summary_en: "The main repository for the Linux Kernel 7.3 version has integrated numerous changes, including, but not limited to, a major refactoring of the multiprocessor system group scheduling mechanism. This update constitutes a core-level, low-level optimization aimed at enhancing resource allocation efficiency and stability in multi-core environments. Although the article does not provide specific CVE or CVSS scores, such core-level refactoring typically involves underlying scheduling logic and system calls, which significantly impacts performance in server and High-Performance Computing (HPC) environments. Developers should monitor changes to these core components and ensure the use of the latest Linux kernel version to achieve optimal performance and stability. System administrators are advised to closely follow the development progress of the Linux kernel and upgrade according to the official security advisories of their distribution (such as Ubuntu, RHEL, etc.).",
    tags_en: ["Linux Kernel", "7.3 kernel", "Group Scheduling", "Multiprocessor System", "Kernel Optimization"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089244", lang: "EN" }
    ]
  },
  {
    id: "20260820-011",
    trackers: ["os"],
    category: "Linux",
    title: "多發行版安全更新：AlmaLinux、Debian、Gentoo、Oracle、Slackware、SUSE與Ubuntu修補多個核心元件與應用程式",
    summary: "多數主流 Linux 發行版，包括 AlmaLinux、Debian、Gentoo、Oracle、Slackware、SUSE 和 Ubuntu，近期發布了廣泛的安全性更新。這些更新涵蓋了從核心元件到應用層的眾多模組，涉及 bind9.18、glib2、gstreamer1-plugins-bad-free、mysql8.4、php8.4、python3 等關鍵庫。具體修補的範圍極廣，包括網頁瀏覽器（如 firefox-esr、mozilla-firefox）、網路服務（如 bind9、nginx）以及各種開發工具鏈（如 nodejs、curl）。開發者和系統管理員應注意，這些更新涉及多個核心庫和應用程式的修補，建議根據各發行版官方公告，及時更新受影響的元件，以確保系統的穩定性和安全性。由於原文僅列出更新範圍，未提供具體漏洞細節或 CVSS 分數，使用者應以官方安全公告為準。",
    tags: ["AlmaLinux", "Debian", "Gentoo", "Ubuntu", "Linux", "安全更新", "bind9", "glib2"],
    title_en: "Multi-Distribution Security Updates: AlmaLinux, Debian, Gentoo, Oracle, Slackware, SUSE, and Ubuntu Patch Multiple Core Components and Applications",
    summary_en: "Most major Linux distributions, including AlmaLinux, Debian, Gentoo, Oracle, Slackware, SUSE, and Ubuntu, have recently released extensive security updates. These updates cover numerous modules, ranging from core components to application layers, affecting key libraries such as bind9.18, glib2, gstreamer1-plugins-bad-free, mysql8.4, php8.4, and python3. The scope of the patches is extremely broad, encompassing web browsers (such as firefox-esr, mozilla-firefox), network services (such as bind9, nginx), and various development toolchains (such as nodejs, curl). Developers and system administrators should note that these updates involve patches to multiple core libraries and applications, and they are advised to update affected components promptly according to the official announcements of each distribution to ensure system stability and security. Since the original text only lists the scope of updates and does not provide specific vulnerability details or CVSS scores, users should rely on official security advisories.",
    tags_en: ["AlmaLinux", "Debian", "Gentoo", "Ubuntu", "Linux", "Security Update", "bind9", "glib2"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089717", lang: "EN" }
    ]
  },
  {
    id: "20260820-012",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心網路子系統更新：支援 BIG TCP、CXL 及多種無線驅動程式",
    summary: "Linux 7.3 核心的網路子系統本輪已合併多項功能更新和錯誤修復。本次更新涵蓋了多個核心網路技術的進步，包括在 VXLAN 和 Geneve 驅動程式中支援 BIG TCP 在 UDP 隧道中的應用，以及改善了 MPTCP 在極端記憶體壓力下的處理能力。在有線網路驅動方面，新增了對 AMD/Solarflare NICs 的 CXL 初步支援，並建立了 Intel iXD 驅動程式基礎架構，用於支援 Intel E2100 及後續 IPUs 和 FNICs 的控制平面 PIC 功能。無線網路方面，持續增強了 Multi-Link Operation (MLO) 功能，並加入了針對 NXP 設備的 NXPWIFI 驅動程式，以及 Mediatek MT76 驅動程式對 MT7928 和 MT7925 NAN 的支援。值得注意的是，維護者指出，由於 AI/LLM 代理的大量代碼提交，開發團隊目前「完全不堪重負」，但未來計劃讓 AI 協助處理更多例行工作，如管理補丁和自動化提交訊息編輯。",
    tags: ["Linux 7.3", "網路子系統", "BIG TCP", "CXL", "MLO", "Intel iXD", "Linux 核心"],
    title_en: "Linux 7.3 Kernel Networking Subsystem Update: Support for BIG TCP, CXL, and Various Wireless Drivers",
    summary_en: "The networking subsystem of the Linux 7.3 kernel has merged multiple feature updates and bug fixes. This update covers advancements in several core networking technologies, including support for BIG TCP within UDP tunnels in VXLAN and Geneve drivers, and improved handling of MPTCP under extreme memory pressure. For wired networking drivers, preliminary CXL support for AMD/Solarflare NICs has been added, and an Intel iXD driver framework has been established to support the control plane PIC functionality for Intel E2100 and subsequent IPUs and FNICs. On the wireless networking front, Multi-Link Operation (MLO) functionality has been continuously enhanced, and new drivers have been added, including the NXPWIFI driver for NXP devices and support for MT7928 and MT7925 NAN via the Mediatek MT76 driver. Notably, maintainers pointed out that due to the large volume of code submissions from AI/LLM agents, the development team is currently 'completely overwhelmed,' but plans for the future include using AI to assist with more routine tasks, such as managing patches and automating commit message editing.",
    tags_en: ["Linux 7.3", "Networking Subsystem", "BIG TCP", "CXL", "MLO", "Intel iXD", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Networking", lang: "EN" }
    ]
  },
  {
    id: "20260820-013",
    trackers: ["os"],
    category: "Linux",
    title: "KMSCON 10.0.2 更新：為 Linux 終端機模擬器新增 asciicast 播放支援與多項穩定性修復",
    summary: "KMSCON 10.0.2 版本作為這款領先的 Linux 用戶空間終端機模擬器最新更新發布。KMSCON 本身是圍繞 Linux 的 KMS/DRM 介面構建，是目前用於取代內核虛擬終端機（in-kernel VTs）的最佳替代方案。本次 10.0.2 版本最大的亮點是新增了對 asciicast 播放的支援，這使得使用者可以播放由 asciicinema 命令列工具產生的、基於 JSON 格式的終端機會話錄製檔案。此外，該版本還加入了閃爍（blink）配置選項、改善了原子 DRM 模式集失敗時的恢復機制、提升了 8x16 字體的支援，並修復了輸入的滑鼠按鈕順序等多項錯誤。KMSCON 目前被 KDE Linux、GNOME OS 以及即將推出的 Fedora 45 等系統預設使用。使用者可透過 GitHub 下載最新版本。",
    tags: ["KMSCON", "Linux", "KMS/DRM", "終端機模擬器", "Fedora 45", "asciicast"],
    title_en: "KMSCON 10.0.2 Update: Adds asciicast playback support and multiple stability fixes for Linux terminal emulator",
    summary_en: "KMSCON 10.0.2 is the latest update for this leading Linux user-space terminal emulator. KMSCON itself is built around the Linux KMS/DRM interface and is currently considered the best alternative to in-kernel VTs. The biggest highlight of this 10.0.2 version is the addition of support for asciicast playback, allowing users to play back terminal session recordings generated by the asciicinema command-line tool, which are based on JSON format. Furthermore, this version includes a blinking configuration option, improves the recovery mechanism when the atomic DRM mode set fails, enhances support for 8x16 fonts, and fixes various bugs, including the order of mouse button inputs. KMSCON is currently used by systems such as KDE Linux, GNOME OS, and the upcoming Fedora 45. Users can download the latest version from GitHub.",
    tags_en: ["KMSCON", "Linux", "KMS/DRM", "terminal emulator", "Fedora 45", "asciicast"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KMSCON-10.0.2-Released", lang: "EN" }
    ]
  },
  {
    id: "20260820-014",
    trackers: ["os"],
    category: "Linux",
    title: "KDE軟體整合Btrfs快照功能：KIO-Snapshot v1.0穩定發布",
    summary: "KDE軟體現已穩定整合Btrfs檔案系統快照功能，透過KIO-Snapshot的發布實現。對於使用KIO的KDE軟體，現在可以新增一個KIO worker，用於瀏覽子卷的快照，並能夠檢視檔案的歷史版本。此外，KIO-Snapshot還提供了一個上下文選單外掛，讓使用者在Dolphin和其他KDE軟體中更容易存取不同的快照版本。此功能由KDE開發者Bharadwaj Raju主導，KIO-Snapshot v1.0的發布標誌著此整合的里程碑。KIO-Snapshot透過介接Btrfs的libbtrfsutil，並與KDE Frameworks Solid程式碼整合。KDE自家的Linux發行版KDE Linux也計畫很快會預裝Snapper和KIO Snapshot，為使用者提供更完善的Btrfs體驗。使用者可從KDE.org下載KIO-Snapshot。",
    tags: ["KDE軟體", "Btrfs", "KIO-Snapshot", "Linux", "快照", "libbtrfsutil"],
    title_en: "KDE Software Integrates Btrfs Snapshot Functionality with KIO-Snapshot v1.0 Stable Release",
    summary_en: "KDE software has now stably integrated Btrfs filesystem snapshot functionality through the release of KIO-Snapshot. For KDE applications utilizing KIO, users can now add a KIO worker to browse snapshots of subvolumes and view historical file versions. Furthermore, KIO-Snapshot provides a context menu plugin, allowing users to more easily access different snapshot versions within Dolphin and other KDE applications. This feature was spearheaded by KDE developer Bharadwaj Raju, and the release of KIO-Snapshot v1.0 marks a major milestone for this integration. KIO-Snapshot integrates with Btrfs via libbtrfsutil and is coupled with the KDE Frameworks Solid code. KDE's own Linux distribution, KDE Linux, also plans to soon pre-install Snapper and KIO Snapshot, offering users an even more comprehensive Btrfs experience. KIO-Snapshot is available for download from KDE.org.",
    tags_en: ["KDE Software", "Btrfs", "KIO-Snapshot", "Linux", "Snapshot", "libbtrfsutil"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Btrfs-Snapshots", lang: "EN" }
    ]
  },
  {
    id: "20260820-015",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 更新優化 FSCRYPT 框架，簡化加密程式碼並支援 Btrfs 等新功能",
    summary: "FSCRYPT 是 Linux 核心用於支援每目錄透明加密的文件系統加密框架。本次針對 Linux 7.3 的更新，核心開發者 Eric Biggers 進行了重大的程式碼清理與重構。主要優化包括移除 EXT4 和 F2FS 等文件系統各自維護的重複單文件加密實作，改用 blk-crypto 實作文件內容加密，此舉亦支援內嵌加密硬體。重構後，FSCRYPT 程式碼得以大幅精簡，並為未來功能擴展鋪路。新功能支援包括 IOmap 支援、大型 folios，以及支援 Btrfs 上的 FSCRYPT 加密。此外，在 Linux 7.3 中，即使沒有使用 \"inlinecrypt\" 掛載選項，直接 I/O 也可直接在加密檔案上操作，而非退回至緩衝式 I/O，提升了系統的效能與兼容性。",
    tags: ["Linux 7.3", "FSCRYPT", "Linux 核心", "Btrfs", "blk-crypto", "文件系統加密"],
    title_en: "Linux 7.3 Update Optimizes FSCRYPT Framework, Simplifies Encryption Code, and Adds Support for Btrfs and More",
    summary_en: "FSCRYPT is the Linux kernel framework for transparent file system encryption at the directory level. For this Linux 7.3 update, core developer Eric Biggers performed significant code cleanup and refactoring. Key optimizations include removing redundant single-file encryption implementations previously maintained separately for file systems like EXT4 and F2FS, and instead utilizing blk-crypto to encrypt file contents. This change also supports embedded encryption hardware. Following the refactoring, the FSCRYPT code has been significantly streamlined, paving the way for future feature expansion. New supported features include IOmap support, large folios, and FSCRYPT encryption support on Btrfs. Furthermore, in Linux 7.3, direct I/O can now operate directly on encrypted files even without using the \"inlinecrypt\" mount option, rather than falling back to buffered I/O, thereby improving system performance and compatibility.",
    tags_en: ["Linux 7.3", "FSCRYPT", "Linux Kernel", "Btrfs", "blk-crypto", "File System Encryption"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-FSCRYPT", lang: "EN" }
    ]
  },
  {
    id: "20260820-016",
    trackers: ["os"],
    category: "Linux",
    title: "PreSonus Quantum 2626 獲得開源 Linux 驅動程式，透過逆向工程提交核心審查",
    summary: "高階 Thunderbolt 音訊介面 PreSonus Quantum 2626，目前主要提供 Windows 與 macOS 驅動程式。近日，一位開發者已透過獨立的逆向工程，為該設備開發出名為 \"Quantum\" 的 Linux 音訊驅動程式，並已提交至 Linux 核心的上游審查（upstream kernel review）。該驅動程式旨在為 Quantum PCI 家族的 Thunderbolt 音訊介面提供 ALSA PCI 支援。它具備播放、擷取、原始 MIDI、採樣率控制、時脈源控制、XRUN 報告及意外移除處理等功能。目前版本已驗證支援 Quantum 2626，且設計目標是保持硬體路徑的直接性與多通道能力，以便未來能順利整合至主線 Linux 核心。開發者強調此專案獨立於 PreSonus 或 Fender，目前僅匹配已驗證的 2626 設備 ID。此驅動程式目前正等待審查回饋，目標是最終能被納入主流 Linux 核心。",
    tags: ["PreSonus Quantum 2626", "Linux", "ALSA", "Thunderbolt", "開源驅動程式", "核心開發"],
    title_en: "PreSonus Quantum 2626 Receives Open-Source Linux Driver Submitted for Kernel Review",
    summary_en: "The PreSonus Quantum 2626, a high-end Thunderbolt audio interface, currently offers primary drivers for Windows and macOS. Recently, a developer independently reverse-engineered and created a Linux audio driver named \"Quantum.\" This driver has been submitted for upstream kernel review in the Linux kernel. The driver aims to provide ALSA PCI support for the Quantum PCI family of Thunderbolt audio interfaces. It features playback, capture, raw MIDI, sample rate control, clock source control, XRUN reporting, and unexpected removal handling. The current version has been verified to support the Quantum 2626, and its design goal is to maintain directness and multi-channel capability of the hardware path for future integration into the mainline Linux kernel. The developer emphasized that this project is independent of PreSonus or Fender, and currently only matches the verified 2626 device ID. The driver is currently awaiting review feedback, with the goal of eventual inclusion in the mainstream Linux kernel.",
    tags_en: ["PreSonus Quantum 2626", "Linux", "ALSA", "Thunderbolt", "Open-Source Driver", "Kernel Development"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/PreSonus-Quantum-2626-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260820-017",
    trackers: ["os"],
    category: "Linux",
    title: "RPM 6.1 版本發布：修復 Clang 編譯錯誤並導入新版發布模型",
    summary: "RPM 套件管理系統發布了 6.1 版本，帶來多項功能與改進。本次更新特別修復了在非 GNU 工具鏈環境下使用 LLVM/Clang 編譯時的錯誤與警告。此外，RPM 6.1 提升了金鑰儲存（keystore）的鎖定機制，預設恢復了基於 NSS 的使用者/群組查找，並增加了對字面值和一次性巨集（literal and one-shot macros）的支援。在功能層面，它也提供了新的 %define 選項、改善了建構與驗證錯誤處理，並提升了 `rpm-plugin-syslog` 插件與 systemd journald 結合的可用性。在發布模型上，RPM 6.x 引入了受 Linux 核心啟發的新模型：主要版本（Major）代表套件格式，次要版本（Minor）包含不破壞現有的新功能與錯誤修復，而微版本（Micro）則專用於安全與錯誤修復。這使得 RPM 的發布週期更清晰，未來次要版本預計會更頻繁。",
    tags: ["RPM", "RPM 6.1", "Linux", "套件管理", "LLVM", "Clang", "systemd"],
    title_en: "RPM 6.1 Release: Fixes Clang Compilation Errors and Introduces New Release Model",
    summary_en: "The RPM package management system has released version 6.1, bringing multiple features and improvements. This update specifically fixes errors and warnings encountered when compiling with LLVM/Clang in non-GNU toolchain environments. Furthermore, RPM 6.1 enhances the keystore locking mechanism, defaults to restoring user/group lookups based on NSS, and adds support for literal and one-shot macros. Functionally, it also introduces a new %define option, improves build and validation error handling, and enhances the usability of the `rpm-plugin-syslog` plugin with systemd journald. Regarding the release model, RPM 6.x introduces a new model inspired by the Linux kernel: Major version represents the package format, Minor version includes new features and bug fixes that are non-breaking, and Micro version is dedicated solely to security and bug fixes. This clarifies the RPM release cycle, with Minor versions expected to become more frequent in the future.",
    tags_en: ["RPM", "RPM 6.1", "Linux", "Package Management", "LLVM", "Clang", "systemd"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/RPM-6.1-Released", lang: "EN" }
    ]
  },
  {
    id: "20260820-018",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 7.3 版本修補，徹底移除遺留的 32 位元時間支援程式碼",
    summary: "Linux 核心在 7.3 版本中進行了重大清理，旨在徹底移除與 32 位元時間相關的遺留程式碼。過去，核心透過 `CONFIG_COMPAT_32BIT_TIME` 選項來選擇性地禁用 32 位元時間系統呼叫支援，但即使此選項被禁用，其他 CPU 架構和核心區域仍有殘留的 32 位元時間程式碼暴露。本次修補透過 vDSO pull request 進行，確保當禁用 32 位元時間兼容性時，舊有的 `time()`、`stime()` 和 `gettimeofday()` 等使用 32 位元整數秒數的函數能夠被完全關閉。修補涵蓋了 ARM、PowerPC、MIPS、SPARC 和 x86 等多種架構，以確保 `COMPAT_32BIT_TIME` 設定能被正確遵守。目前大多數 Linux 發行版仍為啟用 32 位元兼容性，以維持 32 位元應用程式的相容性，但此趨勢預計會在 Y2038 問題發生前的 11 年內改變。",
    tags: ["Linux 核心", "Linux 7.3", "CONFIG_COMPAT_32BIT_TIME", "Y2038", "vDSO", "時間系統呼叫"],
    title_en: "Linux Kernel 7.3 Patch Completely Removes Legacy 32-bit Time Support Code",
    summary_en: "The Linux kernel has undergone significant cleanup in version 7.3, aiming to completely remove legacy code related to 32-bit time. Previously, the kernel allowed for the selective disabling of 32-bit time system call support via the `CONFIG_COMPAT_32BIT_TIME` option. However, even when this option was disabled, residual 32-bit time code remained exposed in other CPU architectures and kernel areas. This patch, implemented through a vDSO pull request, ensures that when 32-bit time compatibility is disabled, functions such as `time()`, `stime()`, and `gettimeofday()`, which use 32-bit integer seconds, are completely shut down. The patch covers multiple architectures, including ARM, PowerPC, MIPS, SPARC, and x86, ensuring that the `COMPAT_32BIT_TIME` setting is correctly enforced. While most Linux distributions currently maintain 32-bit compatibility to ensure compatibility with 32-bit applications, this trend is expected to change within 11 years before the Y2038 problem.",
    tags_en: ["Linux Kernel", "Linux 7.3", "CONFIG_COMPAT_32BIT_TIME", "Y2038", "vDSO", "Time System Calls"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-vDSO-32-bit-Time", lang: "EN" }
    ]
  },
  {
    id: "20260820-019",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Gear 26.08 更新發布：強化應用程式體驗，完善 Plasma 6 桌面功能",
    summary: "KDE 官方今日發布了 KDE Gear 26.08 應用程式集合更新，旨在為使用者提供一系列最新的 KDE 應用程式增強功能，以完善與 Plasma 6 桌面的整合體驗。本次更新的亮點包括：Dolphin 檔案管理器提升了與 KDE Connect 的整合度，並帶來多項可用性改進；Konsole 終端機模擬器增加了拖放功能等優化；Okular 文件檢視器提升了文件簽署的支援能力；此外，Kdenlive 影片編輯器也帶來了影片特效的改進與其他功能增強。這批更新主要著重於提升日常使用體驗與功能完善，建議使用者可透過 KDE.org 下載最新版本以獲取這些應用程式的升級功能。",
    tags: ["KDE Gear", "Plasma 6", "Dolphin", "Konsole", "Okular", "Kdenlive"],
    title_en: "KDE Gear 26.08 Update Released: Enhancing Application Experience and Refining Plasma 6 Desktop Functionality",
    summary_en: "KDE officially released the KDE Gear 26.08 application suite update today, aiming to provide users with a series of enhanced KDE application features to improve integration with the Plasma 6 desktop. Highlights of this update include: Dolphin file manager, which has improved its integration with KDE Connect and introduced several usability enhancements; Konsole terminal emulator, which added optimizations such as drag-and-drop functionality; Okular document viewer, which enhanced support for file signing; and Kdenlive video editor, which brought improvements to video effects and other functional enhancements. This batch of updates primarily focuses on improving daily usage experience and functional completeness. Users are advised to download the latest version from KDE.org to obtain these application upgrades.",
    tags_en: ["KDE Gear", "Plasma 6", "Dolphin", "Konsole", "Okular", "Kdenlive"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Gear-26.08", lang: "EN" }
    ]
  },
  {
    id: "20260820-020",
    trackers: ["os"],
    category: "Linux",
    title: "NetBSD 11.0 重磅發布：支援 64 位元 RISC-V，引入 MICROVM 虛擬機核心",
    summary: "NetBSD 11.0 已正式發布，這是一個穩定且功能豐富的作業系統版本。本次更新的主要亮點包括新增對 64 位元 RISC-V 的支援，提升了與 POSIX.1-2024 和 C23 標準的相容性，並改善了 Linux 系統呼叫的相容性。特別值得注意的是，NetBSD 引入了一個專用的 MICROVM 核心，該核心支援 32 位元和 64 位元的 x86 客體，據開發團隊測試，其啟動時間可達約 10 毫秒，極大地提升了虛擬機的啟動效率。此外，版本 11.0 還支援多達 52 個 Tier II 平台，並初步支援 Qualcomm Snapdragon X Elite 等 PC 級 Arm64 系統。NetBSD 是一個通用型作業系統，其優勢在於不局限於單一角色，可作為 Xen 主機或客體運行，適合用於構建輕量、快速啟動的 x86 虛擬機。雖然 NetBSD 的安裝和配置過程相對複雜，需要使用者熟悉編輯設定檔和腳本，但它為學習 Unix 系統和深入了解作業系統底層機制提供了極佳的平台。",
    tags: ["NetBSD", "RISC-V", "MICROVM", "POSIX.1-2024", "x86-64", "作業系統"],
    title_en: "NetBSD 11.0 Major Release: Support for 64-bit RISC-V and Introduction of MICROVM Virtual Machine Kernel",
    summary_en: "NetBSD 11.0 has been officially released, a stable and feature-rich operating system version. Key highlights of this update include added support for 64-bit RISC-V, improved compatibility with POSIX.1-2024 and C23 standards, and enhanced compatibility with Linux system calls. Of particular note is that NetBSD has introduced a dedicated MICROVM kernel, which supports 32-bit and 64-bit x86 guests. According to the development team's tests, its startup time is approximately 10 milliseconds, significantly improving virtual machine startup efficiency. Furthermore, version 11.0 supports up to 52 Tier II platforms and provides preliminary support for PC-class Arm64 systems such as the Qualcomm Snapdragon X Elite. NetBSD is a general-purpose operating system, whose advantage lies in not being limited to a single role; it can function as a Xen host or guest, making it suitable for building lightweight, fast-booting x86 virtual machines. Although the installation and configuration process for NetBSD is relatively complex, requiring users to be familiar with editing configuration files and scripts, it offers an excellent platform for learning Unix systems and gaining deep insight into operating system underlying mechanisms.",
    tags_en: ["NetBSD", "RISC-V", "MICROVM", "POSIX.1-2024", "x86-64", "Operating System"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/08/20/netbsd-11-lands-with-risc-v-support-and-lightning-fast-vm-boots/5289713", lang: "EN" }
    ]
  },
  {
    id: "20260820-021",
    trackers: ["os"],
    category: "Linux",
    title: "SparkyLinux 8.4 重啟 32 位元支援，為老舊硬體提供新生命力",
    summary: "SparkyLinux 8.4 版本已重新引入對 32 位元 PC 的安裝支援，這對於使用老舊或資源受限的硬體設備（如 Atom 支援的 Netbook）極具價值。該發行版基於 Debian 13，並提供 LXQt、MATE、Xfce、KDE 等多種桌面環境選擇，以及最小化命令列和 GUI 版本。雖然 32 位元版本缺乏圖形化安裝器，但其核心系統仍使用 systemd，並與 64 位元版本共享 Linux kernel 6.12。這使得 32 位元系統在記憶體佔用上通常小於 64 位元對應版本，適合資源有限的虛擬機或實體機。雖然 Mozilla 已在 Firefox 144 後停止主流 32 位元 Linux 建置，但 SparkyLinux 8.4 仍提供了 Firefox 140 ESR 的 32 位元建置，確保了基礎應用程式的兼容性。",
    tags: ["SparkyLinux", "Debian 13", "32-bit", "Linux kernel 6.12", "LXQt", "系統更新"],
    title_en: "SparkyLinux 8.4 Revives 32-bit Support, Giving New Life to Older Hardware",
    summary_en: "SparkyLinux 8.4 has reintroduced installation support for 32-bit PCs, which is highly valuable for devices using older or resource-constrained hardware (such as Netbooks supported by Atom). Based on Debian 13, the distribution offers multiple desktop environment choices, including LXQt, MATE, Xfce, and KDE, as well as minimal command-line and GUI versions. Although the 32-bit version lacks a graphical installer, its core system still uses systemd and shares the Linux kernel 6.12 with the 64-bit version. This means the 32-bit system typically consumes less memory than its 64-bit counterpart, making it suitable for resource-limited virtual machines or physical machines. Although Mozilla stopped mainstream 32-bit Linux builds after Firefox 144, SparkyLinux 8.4 still provides a 32-bit build of Firefox 140 ESR, ensuring compatibility for essential applications.",
    tags_en: ["SparkyLinux", "Debian 13", "32-bit", "Linux kernel 6.12", "LXQt", "System Update"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/08/20/sparkylinux-84-rekindles-support-for-32-bit-pcs/5289203", lang: "EN" }
    ]
  },
  {
    id: "20260820-022",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布移除 Windows 11 的「Drag Tray」功能，因用戶反饋干擾拖放操作",
    summary: "微軟（Microsoft）已決定根據用戶反饋，從 Windows 11 作業系統中移除名為「Drag Tray」的功能。該功能本意是透過將檔案拖曳至螢幕頂部，方便用戶快速分享至 WhatsApp、Outlook 等應用程式。然而，用戶指出 Drag Tray 的實作存在缺陷，它會過早、過度地彈出，嚴重干擾了用戶在桌面或 File Explorer 中進行正常的檔案拖放（drag-and-drop）和資料整理操作，導致使用體驗不佳。\n微軟已在支援文件中確認開始移除此功能，Windows Insider Program 的測試者將率先看到變動，一般用戶預計會在未來幾週或幾個月的更新中移除。雖然 Drag Tray 本身將被移除，但微軟表示仍會持續探索更優化的檔案分享替代方案。\n若用戶無法等待正式移除，可以手動透過「設定」>「系統」>「附近共用」（Nearby sharing）的開關，將 Drag Tray 功能關閉，以避免其干擾日常使用。",
    tags: ["Microsoft", "Windows 11", "Drag Tray", "系統更新", "用戶體驗", "檔案分享"],
    title_en: "Microsoft to Remove Windows 11's 'Drag Tray' Feature Due to User Feedback on Interference with Drag-and-Drop Operations",
    summary_en: "Microsoft has decided, based on user feedback, to remove the 'Drag Tray' feature from the Windows 11 operating system. This feature was originally intended to allow users to quickly share files by dragging them to the top of the screen, facilitating sharing to applications like WhatsApp and Outlook. However, users pointed out that the implementation of Drag Tray had flaws; it would pop up prematurely and excessively, severely interfering with normal file drag-and-drop and data organization operations within the desktop or File Explorer, resulting in a poor user experience. Microsoft has confirmed in support documentation that the removal of this feature has begun, with Windows Insider Program testers seeing the changes first. General users are expected to see the removal in future updates within weeks or months. Although Drag Tray itself will be removed, Microsoft stated that it will continue to explore more optimized alternative file sharing solutions. If users cannot wait for the official removal, they can manually disable the Drag Tray function via the 'Settings' > 'System' > 'Nearby sharing' toggle to prevent it from interfering with daily use.",
    tags_en: ["Microsoft", "Windows 11", "Drag Tray", "System Update", "User Experience", "File Sharing"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/20/microsoft-is-killing-the-windows-11-feature-that-hijacked-your-drag-and-drop-its-called-drag-tray", lang: "EN" }
    ]
  },
  {
    id: "20260820-023",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 承認 Windows 11 右鍵選單曾有缺陷，正透過更新提升速度與可客製化",
    summary: "本文探討了 Windows 11 的右鍵上下文選單（context menu）的演進與改進。最初，Microsoft 旨在透過現代化設計改善 Windows 10 時代選單過於混亂、缺乏規範的問題。然而，Microsoft 承認，Windows 11 的現代選單在實作初期也變得混亂且反應遲緩，需要大幅優化。最新的更新目標是讓選單更具可客製化，並提升速度，使其接近 Windows 10 的性能。雖然 Microsoft 尚未計畫完全移除 Windows 10 的傳統選單，但未來使用此功能的「顯示更多選項」（Show more options）將不再預設出現，主要保留給仍依賴傳統選單的第三方應用程式。Microsoft 正在積極引導開發者將其擴充功能遷移至現代選單，以確保系統的穩定性與使用者體驗。",
    tags: ["Windows 11", "Windows 10", "Context Menu", "Microsoft", "使用者介面"],
    title_en: "Microsoft Acknowledges Flaws in Windows 11 Context Menu, Plans Updates to Improve Speed and Customization",
    summary_en: "This article explores the evolution and improvements of the Windows 11 context menu. Initially, Microsoft aimed to modernize the design to address the perceived clutter and lack of standardization found in the Windows 10 era menus. However, Microsoft has acknowledged that the modern Windows 11 menu also became cluttered and sluggish in its early implementation, necessitating significant optimization. The latest updates aim to make the menu more customizable and improve its speed, bringing performance closer to that of Windows 10. Although Microsoft has not planned to completely remove the traditional Windows 10 menu, the 'Show more options' feature will no longer appear by default, primarily being retained for third-party applications that still rely on the traditional menu. Microsoft is actively guiding developers to migrate their extensions to the modern menu to ensure system stability and user experience.",
    tags_en: ["Windows 11", "Windows 10", "Context Menu", "Microsoft", "User Interface"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/20/will-windows-11-remove-the-windows-10-era-right-click-menu-microsoft-reveals-whats-next", lang: "EN" }
    ]
  },
  {
    id: "20260820-024",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 工作管理員新增 AI 工作負載監控功能，提供 NPU/GPU 使用率可供診斷",
    summary: "微軟更新了 Windows Task Manager（工作管理員），使其能夠提供更深入的 AI 工作負載可視性。先前，Processes 標籤頁無法顯示針對神經處理單元（NPU）或圖形處理單元（GPU）神經引擎的單一程序活動。現在，在支援的較新設備上，用戶可以在 Processes 標籤頁同時查看 NPU 使用率與 CPU 和 GPU 活動，而 Performance 標籤頁則顯示整體利用率。此功能對於診斷效能和電源消耗問題極為實用，特別是在使用電池供電的筆記型電腦上。微軟強調，隨著 AI 工作負載在 Windows 設備上日益普遍，監控 NPU 和 GPU 神經引擎的利用率，能幫助用戶做出更明智的決策。這項更新讓用戶可以在熟悉的介面中，同時監控 AI 處理活動、CPU、記憶體、儲存和網路數據。",
    tags: ["Windows", "Task Manager", "NPU", "GPU", "AI 工作負載", "微軟"],
    title_en: "Windows Task Manager Adds AI Workload Monitoring to Provide NPU/GPU Utilization for Diagnostics",
    summary_en: "Microsoft has updated the Windows Task Manager to provide deeper visibility into AI workloads. Previously, the Processes tab could not display single-process activity for the Neural Engine of the Neural Processing Unit (NPU) or Graphics Processing Unit (GPU). Now, on supported newer devices, users can view NPU utilization alongside CPU and GPU activity in the Processes tab, while the Performance tab displays overall utilization. This feature is extremely useful for diagnosing performance and power consumption issues, especially on battery-powered laptops. Microsoft emphasizes that as AI workloads become increasingly common on Windows devices, monitoring the utilization of NPU and GPU Neural Engines helps users make more informed decisions. This update allows users to monitor AI processing activity, CPU, memory, storage, and network data simultaneously within a familiar interface.",
    tags_en: ["Windows", "Task Manager", "NPU", "GPU", "AI Workload", "Microsoft"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/08/20/microsoft-gives-task-manager-another-task-watching-ai-workloads/5290448", lang: "EN" }
    ]
  },
  {
    id: "20260820-025",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 8月更新引發遊戲崩潰：Microsoft 正在調查第三方驅動程式相容性問題",
    summary: "近期有使用者回報，在安裝了 Windows 11 24H2 和 25H2 的 8 月 Patch Tuesday 更新（KB5121003）後，部分遊戲出現崩潰現象。受影響的遊戲可能變得無回應、意外關閉，或觸發「EXCEPTION_ACCESS_VIOLATION」錯誤，甚至導致設備意外重啟。Microsoft 已在 Release Health 頁面承認收到這些回報，但尚未接受責任，並表示正在調查問題的成因。使用者推測，此次更新可能透過更嚴格的核心句柄驗證（kernel handle validation），暴露了過去 Windows 容忍的第三方驅動程式中的潛在問題。雖然這對系統安全是正向的，但對於依賴舊有行為的軟體而言，卻造成了不穩定性。Microsoft 正在透過 Driver Quality Initiative (DQI) 等措施，持續收緊對舊版和不相容核心驅動程式的處理，這使得遊戲崩潰問題的調查仍在進行中，建議使用者留意官方後續公告。",
    tags: ["Windows 11", "Patch Tuesday", "KB5121003", "核心驅動程式", "EXCEPTION_ACCESS_VIOLATION", "Microsoft"],
    title_en: "Windows 11 August Update Causes Game Crashes: Microsoft Investigating Third-Party Driver Compatibility Issues",
    summary_en: "Users have recently reported that after installing the August Patch Tuesday update (KB5121003) for Windows 11 24H2 and 25H2, some games are experiencing crashes. Affected games may become unresponsive, unexpectedly close, or trigger an \"EXCEPTION_ACCESS_VIOLATION\" error, even leading to unexpected device restarts. Microsoft has acknowledged receiving these reports on the Release Health page but has not accepted responsibility, stating that it is investigating the cause of the issue. Users speculate that this update may expose latent issues in third-party drivers that Windows previously tolerated, possibly through stricter kernel handle validation. While this is positive for system security, it causes instability for software that relies on older behaviors. Microsoft is continuously tightening its handling of older and incompatible core drivers through measures like the Driver Quality Initiative (DQI), meaning the investigation into the game crash issue is ongoing. Users are advised to monitor official announcements for further updates.",
    tags_en: ["Windows 11", "Patch Tuesday", "KB5121003", "Core Driver", "EXCEPTION_ACCESS_VIOLATION", "Microsoft"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/08/20/microsoft-probes-reports-of-games-taking-exception-to-windows-11s-august-update/5290214", lang: "EN" }
    ]
  },
  {
    id: "20260820-026",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 26H2 重大更新將徹底移除 WMIC 工具，提升系統安全性",
    summary: "Windows Management Instrumentation Command-line (WMIC) 是一個歷史悠久、廣泛用於企業系統管理，但同時也常被網路犯罪分子濫用來部署惡意軟體或勒索軟體的工具。根據報導，Microsoft 在 Windows 11 的 September 2026 Patch Tuesday 更新（即 Windows 11 26H2）中，將會徹底移除 WMIC。這項變更不是漸進式的，用戶將無法透過「可選功能」或任何指令重新啟用它。Microsoft 官方確認，移除 WMIC 是為了「改善 Windows 的安全性與可靠性」，因為該工具屬於 LOLBIN（Living-off-the-land binary），容易被攻擊者利用進行攻擊。移除 WMIC 旨在取代過時的元件，並鼓勵使用者轉向 PowerShell 等現代化、受支援的管理工具。這項重大更新除了移除 WMIC 外，還包含其他多項優化，預計能提升整體系統安全性和管理體驗。",
    tags: ["Windows 11", "WMIC", "Windows 11 26H2", "Patch Tuesday", "LOLBIN", "系統安全"],
    title_en: "Windows 11 26H2 Major Update to Completely Remove WMIC Tool, Enhancing System Security",
    summary_en: "Windows Management Instrumentation Command-line (WMIC) is a long-standing, widely used tool for enterprise system management, but it has also frequently been exploited by cybercriminals to deploy malware or ransomware. Reports indicate that Microsoft will completely remove WMIC in the Windows 11 September 2026 Patch Tuesday update (i.e., Windows 11 26H2). This change will not be gradual; users will not be able to re-enable it through 'optional features' or any other command. Microsoft officially confirmed that removing WMIC is intended to 'improve Windows security and reliability,' as the tool is considered a LOLBIN (Living-off-the-land binary) and is easily exploited by attackers. The removal of WMIC aims to replace an outdated component and encourage users to transition to modern, supported management tools like PowerShell. In addition to removing WMIC, this major update includes several other optimizations expected to enhance overall system security and management experience.",
    tags_en: ["Windows 11", "WMIC", "Windows 11 26H2", "Patch Tuesday", "LOLBIN", "System Security"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/21/tested-windows-11-has-fully-removed-the-legacy-tool-wmic-abused-by-cybercriminals-for-malware-and-ransomware", lang: "EN" }
    ]
  },
  {
    id: "20260820-027",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 實驗性功能：新增「開機應用程式最大化」設定，適用於小螢幕筆電與平板",
    summary: "在 Windows 11 的 Experimental Build 26340.9212 版本中，已發現一個名為「Open apps maximized」的隱藏設定。此功能位於「設定」>「輔助功能」>「視覺效果」中，允許使用者一鍵開啟應用程式時，預設將其最大化顯示，取代以往記憶應用程式上次的視窗大小。該功能目前僅限於 Insiders Experimental 頻道測試，尚未有 Microsoft 官方公告。文章指出，此功能對於使用 13 吋或 14 吋等小螢幕筆電，或在 Windows 平板設備上操作者，能極大提升使用便利性，避免重複點擊最大化按鈕。使用者若想啟用此功能，需確保系統版本符合要求，並透過執行 `vivetool /enable /id:62915050` 指令在管理員權限的命令提示字元中執行，隨後重啟電腦。作者建議，未來若能增加「顯示器感知」和「置中開啟」等進階選項，將會更完善。",
    tags: ["Windows 11", "Experimental Build", "Open apps maximized", "Accessibility", "Windows 11", "vivetool"],
    title_en: "Windows 11 Experimental Feature: New 'Open apps maximized' Setting for Small Screen Laptops and Tablets",
    summary_en: "A hidden setting called 'Open apps maximized' has been discovered in the Windows 11 Experimental Build 26340.9212. This feature, located under Settings > Accessibility > Visual effects, allows users to default to maximizing an application when opening it with a single click, replacing the previous behavior of remembering the application's last window size. The feature is currently limited to testing on the Insiders Experimental channel and has not been officially announced by Microsoft. The article notes that this feature significantly enhances usability for users operating small-screen laptops, such as 13-inch or 14-inch models, or on Windows tablet devices, eliminating the need for repeated clicks on the maximize button. To enable this feature, users must ensure their system version meets the requirements and execute the command `vivetool /enable /id:62915050` in an elevated command prompt, followed by a system restart. The author suggests that future improvements could include advanced options such as 'display-aware' and 'center-opening.'",
    tags_en: ["Windows 11", "Experimental Build", "Open apps maximized", "Accessibility", "Windows 11", "vivetool"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/20/windows-11s-new-hidden-setting-opens-every-app-maximized-by-default-rolling-out-to-insiders", lang: "EN" }
    ]
  },
  {
    id: "20260820-028",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 KB5121003 更新引發遊戲崩潰：第三方驅動程式 inpoutx64.sys 疑似衝突",
    summary: "近期發布的 Windows 11 August 2026 更新 (KB5121003)，已引起遊戲玩家的廣泛關注。多名玩家報告，安裝此更新後，多款遊戲如 ARC Raiders、MARVEL Tōkon: Fighting Souls 和 The Finals 發生崩潰或重啟等問題。遊戲開發商 Embark Studios 經調查後指出，問題可能源於第三方核心層級的埠存取驅動程式 inpoutx64.sys 與本次 Windows 更新的相容性衝突。該驅動程式通常由第三方軟體（如 Razer）安裝。Embark Studios 建議的臨時解決方案是透過指令列停用並移除 inpoutx64 驅動程式。此外，用戶也報告了 Windows Hello PIN 登入在每次重啟後失敗的異常現象。雖然 Microsoft 已知悉這些問題並正在調查，但尚未確認問題是否由 Windows 本身造成。文章提醒，儘管存在遊戲相容性問題，但由於 KB5121003 修補了超過 400 個安全漏洞，用戶仍應謹慎處理，除非系統無法正常使用，否則不建議移除安全更新。",
    tags: ["Windows 11", "KB5121003", "inpoutx64.sys", "Windows Hello", "遊戲崩潰", "Microsoft"],
    title_en: "Windows 11 KB5121003 Update Causes Game Crashes: Potential Conflict with Third-Party Driver inpoutx64.sys",
    summary_en: "The recently released Windows 11 August 2026 update (KB5121003) has drawn significant attention from game players. Multiple users have reported that after installing this update, several games, including ARC Raiders, MARVEL Tōkon: Fighting Souls, and The Finals, experience crashes or unexpected restarts. Game developer Embark Studios investigated the issue and suggested that the problem may stem from a compatibility conflict between the third-party kernel-level port access driver, inpoutx64.sys, and the Windows update. This driver is typically installed by third-party software (such as Razer). Embark Studios recommends a temporary workaround of disabling and removing the inpoutx64 driver via the command line. Additionally, users have reported an anomaly where Windows Hello PIN login fails after every reboot. Although Microsoft is aware of these issues and is investigating, they have not yet confirmed whether the problem originates from Windows itself. The article advises that despite the game compatibility issues, users should proceed with caution, but given that KB5121003 patches over 400 security vulnerabilities, it is not recommended to remove the security update unless the system is unusable.",
    tags_en: ["Windows 11", "KB5121003", "inpoutx64.sys", "Windows Hello", "Game Crash", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/20/windows-11s-august-update-is-breaking-games-and-microsoft-is-investigating-after-a-studio-blamed-the-update", lang: "EN" }
    ]
  },
  {
    id: "20260820-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安署揭露政府網站密碼重設與OTP驗證機制漏洞：驗證資訊外洩遭繞過雙重驗證",
    summary: "資安署在資通安全網路月報中，檢討了政府機關網站近期遭遇的資安事件，指出多數攻擊者透過密碼重設與一次性密碼（OTP）驗證機制失效，成功繞過雙重驗證，甚至非法修改管理帳號密碼。資安署分析了兩個案例：一是部分網站的驗證碼以明碼形式存在於網頁原始碼，使得攻擊者僅需知曉電子郵件地址，即可直接取得驗證碼重設密碼；二是攻擊者能透過攔截請求封包，在未完成身分驗證時，取得OTP密碼，從而繞過第二階段驗證。共同問題在於驗證資訊暴露於前端，或後端未妥善確認密碼重設流程及使用者身分。資安署建議強化防護措施，包括：密碼重設流程應限定使用範圍、設定有效期限，並確保驗證碼採安全隨機方式；驗證資訊（如OTP）不得出現在網頁原始碼或伺服器回應中；且在密碼重設或驗證完成後，應立即終止既有存取權限，並要求使用者重新完整驗證。",
    tags: ["資安署", "密碼重設", "OTP", "雙重驗證", "資安漏洞", "Web安全"],
    title_en: "Cybersecurity Agency Reveals Vulnerabilities in Government Website Password Reset and OTP Authentication Mechanisms: Double Authentication Bypassed via Exposed Verification Information",
    summary_en: "In its Cybersecurity and Communications Network Monthly Report, the Cybersecurity Agency reviewed recent security incidents affecting government agency websites. It pointed out that most attackers successfully bypassed two-factor authentication (2FA) by exploiting flaws in password reset and One-Time Password (OTP) verification mechanisms, even illegally modifying administrative account passwords. The Agency analyzed two cases: first, some websites displayed verification codes in plain text within the page source code, allowing attackers to obtain password reset codes merely by knowing the user's email address; and second, attackers could intercept request packets to obtain the OTP code before identity verification was completed, thereby bypassing the second stage of authentication. The common issue was the exposure of verification information on the front end, or the backend failing to properly validate the password reset process and user identity. The Agency recommended strengthening protective measures, including: password reset processes should be scope-limited and set with an expiration period, and verification codes must be generated using secure random methods; verification information (such as OTP) must not appear in the page source code or server responses; and after a password reset or authentication completion, existing access privileges should be immediately terminated, requiring the user to complete full re-authentication.",
    tags_en: ["Cybersecurity Agency", "Password Reset", "OTP", "Two-Factor Authentication", "Security Vulnerability", "Web Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178303", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Check Point揭露StopAndProtect攻擊：駭客濫用WordPress網站進行大規模惡意軟體散播與資料竊取",
    summary: "資安公司Check Point揭露一波名為StopAndProtect的大規模攻擊行動。駭客利用近2,000個未更新的WordPress網站作為基礎設施，進行惡意軟體散播、控制受害設備，並竊取受害者資料、螢幕截圖及活動記錄。攻擊鏈的啟動，源於駭客透過ClickFix社交工程手法，引誘使用者執行PowerShell指令。隨後，攻擊者利用以.NET撰寫的惡意程式下載工具與載入工具，散播勒索軟體、蠕蟲程式、竊資軟體及VBS散播工具等。Check Point指出，受害WordPress網站普遍缺乏持續更新，導致存在過期憑證、SQL注入、開放重新導向、身分驗證繞過及任意檔案上傳等多樣漏洞。這場攻擊活動顯示，駭客的目標不僅是部署勒索軟體，更著重於竊取受害電腦的檔案清單等敏感資料。",
    tags: ["Check Point", "WordPress", "StopAndProtect", "惡意軟體", "PowerShell", "SQL注入", "供應鏈安全"],
    title_en: "Check Point Reveals StopAndProtect Attack: Hackers Exploit WordPress Sites for Large-Scale Malware Distribution and Data Theft",
    summary_en: "Cybersecurity firm Check Point has revealed a large-scale attack campaign dubbed StopAndProtect. Hackers utilized nearly 2,000 unupdated WordPress websites as infrastructure to distribute malware, control victim devices, and steal victim data, screenshots, and activity logs. The attack chain was initiated when hackers lured users into executing PowerShell commands using a ClickFix social engineering technique. Subsequently, attackers used malicious programs written in .NET to download and load tools, distributing ransomware, worms, spyware, and VBS distribution tools. Check Point noted that the affected WordPress sites generally lacked continuous updates, leading to various vulnerabilities such as expired credentials, SQL injection, open redirects, authentication bypass, and arbitrary file upload. This attack activity indicates that the hackers' goal was not merely deploying ransomware, but focusing on stealing sensitive data, such as the victim computer's file list.",
    tags_en: ["Check Point", "WordPress", "StopAndProtect", "Malware", "PowerShell", "SQL Injection", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178300", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "VulnCheck警告：SCADA/OT儀表板FUXA存在CVE-2026-25895路徑遍歷漏洞，可遠端寫入檔案",
    summary: "資安公司VulnCheck透過蜜罐陷阱偵測到針對FUXA儀表板系統的活動，該系統用於管理SCADA與OT環境。該系統存在CVE-2026-25895路徑遍歷漏洞，允許未經身分驗證的攻擊者遠端利用，在FUXA伺服器的檔案系統任意位置寫入檔案。此漏洞的CVSS v3.1評分為9.8分（v4.0為9.5分），影響版本為1.2.9以下。雖然目前觀察到的攻擊僅為偵察行為，覆寫垃圾資料，但VulnCheck警告，若攻擊者成功覆寫應用程式程式碼或啟動指令碼，可能演變為遠端程式碼執行（RCE），導致系統全面入侵，並暴露與FUXA連接的工業控制系統（ICS）與SCADA環境。開發團隊已於今年1月發布1.2.10版修補。VulnCheck指出，過去也曾發現利用CVE-2026-25939和CVE-2023-33831等RCE漏洞的案例，提醒用戶應立即修補相關漏洞。",
    tags: ["VulnCheck", "CVE-2026-25895", "FUXA", "SCADA", "OT", "路徑遍歷"],
    title_en: "VulnCheck Warns: SCADA/OT Dashboard FUXA Has CVE-2026-25895 Path Traversal Vulnerability Allowing Remote File Write",
    summary_en: "Security firm VulnCheck detected activity targeting the FUXA dashboard system, which is used to manage SCADA and OT environments, through a honeypot trap. The system contains CVE-2026-25895, a path traversal vulnerability that allows unauthenticated attackers to remotely write files to arbitrary locations on the FUXA server's file system. The vulnerability has a CVSS v3.1 score of 9.8 (9.5 in v4.0) and affects versions 1.2.9 and earlier. Although currently observed attacks are limited to reconnaissance and overwriting junk data, VulnCheck warns that if attackers successfully overwrite application code or execute scripts, it could escalate to Remote Code Execution (RCE), leading to full system compromise and exposure of the connected Industrial Control Systems (ICS) and SCADA environment. The development team released version 1.2.10 as a patch this January. VulnCheck also noted past cases utilizing RCE vulnerabilities such as CVE-2026-25939 and CVE-2023-33831, advising users to patch relevant vulnerabilities immediately.",
    tags_en: ["VulnCheck", "CVE-2026-25895", "FUXA", "SCADA", "OT", "Path Traversal"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178297", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安分析：勒索軟體集團Clop濫用PTC Windchill漏洞，部署客製化Web Shell進行資料竊取",
    summary: "資安廠商ReliaQuest分析指出，勒索軟體集團Clop（Cl0p）可能針對PTC產品生命週期管理（PLM）平臺Windchill，利用遠端程式碼執行（RCE）漏洞CVE-2026-12569進行攻擊。PTC已於6月18日警告此漏洞，CVSS v4.0風險評分為9.3分。Clop利用此漏洞部署了高度客製化的Web Shell，使其成為竊取登入憑證和大量資料的直接通道。該Web Shell具備憑證收割、關鍵資訊位置發現、任意檔案讀取及檔案傳輸等功能，且透過客製化Java class loader在應用程式處理程序內執行，避免寫入磁碟，極難被傳統偵測機制識別。攻擊行為透過Windchill既有的資料庫連線及服務身分執行，使其行為模式接近正常應用程式活動，增加了偵測難度。研究人員警告，Clop的這種「應用層革命」手法，使其能夠在系統存取時全程處於應用程式的信任範圍內，實現高效且不易被察覺的資料竊取與後續入侵活動。建議受影響組織應立即修補CVE-2026-12569，並強化對應用層異常行為的監控。",
    tags: ["Clop", "ReliaQuest", "PTC Windchill", "CVE-2026-12569", "RCE", "Web Shell", "資料外洩"],
    title_en: "Security Analysis: Ransomware Group Clop Exploits PTC Windchill Vulnerability to Deploy Custom Web Shell for Data Exfiltration",
    summary_en: "Security vendor ReliaQuest analyzed that the ransomware group Clop (Cl0p) may have targeted PTC's Product Lifecycle Management (PLM) platform, Windchill, by exploiting the Remote Code Execution (RCE) vulnerability CVE-2026-12569. PTC warned about this vulnerability on June 18, and it has a CVSS v4.0 risk score of 9.3. Clop utilized this vulnerability to deploy a highly customized Web Shell, establishing a direct channel for stealing login credentials and large amounts of data. This Web Shell features capabilities such as credential harvesting, key information location discovery, arbitrary file reading, and file transfer. Furthermore, it executes within the application process using a customized Java class loader, avoiding disk writes, which makes it extremely difficult for traditional detection mechanisms to identify. The attack operates using Windchill's existing database connection and service identity, making its behavior pattern resemble normal application activity, thereby increasing detection difficulty. Researchers warn that Clop's 'application layer revolution' technique allows it to remain entirely within the application's trusted scope during system access, enabling efficient and inconspicuous data theft and subsequent intrusion activities. Affected organizations are advised to immediately patch CVE-2026-12569 and strengthen monitoring for application-layer anomalies.",
    tags_en: ["Clop", "ReliaQuest", "PTC Windchill", "CVE-2026-12569", "RCE", "Web Shell", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178296", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-033",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Apple Safari 瀏覽器 26.6.1 版本修補 21 個漏洞，多數為 WebKit 記憶體安全問題",
    summary: "Apple 在發布 iOS、iPadOS 和 macOS Tahoe 更新後，於 8 月 18 日進一步發布了 Safari 瀏覽器 26.6.1 版本，修補了共 21 個安全漏洞。這些漏洞皆集中在 WebKit 元件，且類型主要為記憶體安全相關問題。具體而言，其中包含 5 個記憶體損毀（Memory Corruption）問題、2 個記憶體已釋放卻仍被使用（UAF）問題，以及其他記憶體越界存取等問題。這些記憶體安全漏洞佔了本次修補漏洞總數近一半，顯示攻擊者可能利用這些底層的記憶體管理缺陷。使用者應儘快更新至 Safari 26.6.1 或更高版本，以修補這些潛在的系統漏洞，降低被利用的風險。",
    tags: ["Apple", "Safari", "WebKit", "記憶體安全", "漏洞修補", "iOS", "macOS"],
    title_en: "Apple Safari Browser 26.6.1 Update Patches 21 Vulnerabilities, Mostly WebKit Memory Safety Issues",
    summary_en: "Following the release of iOS, iPadOS, and macOS Tahoe updates, Apple further released Safari browser version 26.6.1 on August 18th, patching a total of 21 security vulnerabilities. These vulnerabilities are concentrated in the WebKit component and are primarily memory safety related issues. Specifically, the patches include 5 Memory Corruption issues, 2 Use-After-Free (UAF) issues, and other memory out-of-bounds access problems. These memory safety vulnerabilities account for nearly half of the total patched vulnerabilities, suggesting that attackers might exploit these low-level memory management flaws. Users should update to Safari 26.6.1 or later as soon as possible to patch these potential system vulnerabilities and reduce the risk of exploitation.",
    tags_en: ["Apple", "Safari", "WebKit", "Memory Safety", "Vulnerability Patch", "iOS", "macOS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178291", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-034",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟Windows 11 Insider版移除WMIC命令列工具，加速淘汰過時系統管理風險",
    summary: "微軟在Windows 11 Insider Beta預覽版 Build 26220.9202 中，正式移除並加速淘汰了 WMIC (Windows Management Instrumentation Command-line) 命令列工具。WMIC 是一個歷史悠久的系統管理工具，雖然可用於查詢系統資訊，但因其易被攻擊者利用執行遠端命令或進行系統操作，已成為資安風險點。微軟已自 2021 年將 WMIC 列為棄用功能，並規劃在 2026 年的 Windows 功能更新中完全移除。文章指出，被移除的是 wmic.exe 命令列工具，而非底層的 WMI 管理功能。企業用戶應將原本使用 WMIC 執行的管理腳本與自動化工作，改寫為使用更現代、更安全的 PowerShell 命令，例如利用 Get-CimInstance 查詢系統資訊，以確保系統管理流程的安全性與穩定性。",
    tags: ["Microsoft", "Windows 11", "WMIC", "PowerShell", "系統管理", "資安風險"],
    title_en: "Microsoft Windows 11 Insider Build Removes WMIC Command-Line Tool, Accelerating Deprecation of Legacy System Management Risks",
    summary_en: "Microsoft has officially removed and accelerated the deprecation of the WMIC (Windows Management Instrumentation Command-line) command-line tool in the Windows 11 Insider Beta Preview Build 26220.9202. WMIC is a long-standing system management tool that, while usable for querying system information, has become a security risk due to its ease of exploitation by attackers to execute remote commands or perform system operations. Microsoft had already listed WMIC as a deprecated feature starting in 2021, with a planned complete removal in the Windows 2026 feature update. The article specifies that the removed component is the wmic.exe command-line tool, not the underlying WMI management functionality. Enterprise users should rewrite management scripts and automation tasks that previously used WMIC to utilize more modern and secure PowerShell commands, such as using Get-CimInstance to query system information, thereby ensuring the security and stability of system management processes.",
    tags_en: ["Microsoft", "Windows 11", "WMIC", "PowerShell", "System Administration", "Security Risk"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178277", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA揭露Malcolm平臺六大漏洞：高風險CVE-2026-55676允許遠端執行任意PHP程式碼",
    summary: "美國網路安全與基礎設施安全局（CISA）與愛達荷國家實驗室（INL）共同開發的開源網路流量分析與監控平臺Malcolm，於8月18日發布資安公告，指出該平臺存在六個漏洞。這些漏洞涵蓋資源耗盡、路徑穿越、危險檔案上傳及存取控制等問題，影響版本為26.06.1、26.07.0與26.07.1以前。其中，最嚴重的漏洞為CVE-2026-55676，CVSS評分達8.8分。此漏洞源於Malcolm的檔案上傳元件，由於檔案類型清單限制不夠嚴格，具備上傳權限的低權限使用者可透過上傳PHP檔案，進而觸發執行任意PHP程式碼，造成遠端程式碼執行風險。CISA建議所有用戶應立即升級至Malcolm 26.08.0版本，以一次性修補所有已知的漏洞，確保系統安全。",
    tags: ["CISA", "Malcolm", "CVE-2026-55676", "工控系統", "網路流量分析", "遠端程式碼執行"],
    title_en: "CISA Discloses Six Vulnerabilities in Malcolm Platform: High-Risk CVE-2026-55676 Allows Remote Arbitrary PHP Code Execution",
    summary_en: "The Malcolm platform, an open-source network traffic analysis and monitoring tool co-developed by the U.S. Cybersecurity and Infrastructure Security Agency (CISA) and Idaho National Laboratory (INL), released a security advisory on August 18th detailing six vulnerabilities. These vulnerabilities encompass issues such as resource exhaustion, path traversal, dangerous file uploads, and access control problems, affecting versions prior to 26.06.1, 26.07.0, and 26.07.1. The most severe vulnerability is CVE-2026-55676, which has a CVSS score of 8.8. This flaw originates in Malcolm's file upload component. Due to insufficiently strict file type listing restrictions, a low-privilege user with upload permissions can upload a PHP file, subsequently triggering the execution of arbitrary PHP code, leading to a Remote Code Execution (RCE) risk. CISA advises all users to immediately upgrade to Malcolm version 26.08.0 to patch all known vulnerabilities simultaneously and ensure system security.",
    tags_en: ["CISA", "Malcolm", "CVE-2026-55676", "ICS", "Network Traffic Analysis", "Remote Code Execution"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178289", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Rapid7發布2026年Q2漏洞趨勢：高風險漏洞激增，但實質遭利用漏洞數量增幅趨緩",
    summary: "資安業者Rapid7發布2026年第二季漏洞趨勢分析報告，指出該期間揭露的高風險及重大風險漏洞數量達8,539項，較去年同期大幅增加。然而，確認已列入美國網路安全暨基礎設施安全局（CISA）已知遭利用漏洞（Known Exploited Vulnerabilities, KEV）清單的漏洞數量為40項，低於去年同期。分析顯示，雖然整體高風險漏洞激增，但實際被確認遭利用的漏洞增幅卻趨緩。\n\n更值得關注的是，可從網路直接利用、且無需身分驗證或使用者互動的漏洞同步增加。第二季共有3,453項新揭露漏洞符合此條件，較去年同期大幅增加。此外，已有公開概念驗證（PoC）程式碼可用的漏洞也顯著增加。\n\n研究人員建議，企業在規劃修補時，不應單純依賴CVSS風險分數。應進一步綜合考量漏洞所在系統是否可被攻擊者實際觸及、受影響資產對企業營運的關鍵重要性，以及漏洞在當前環境中的實際可利用性，以更精準地排定修補優先順序。",
    tags: ["Rapid7", "CISA", "KEV", "漏洞趨勢", "PoC", "資安修補"],
    title_en: "Rapid7 Releases 2026 Q2 Vulnerability Trends: High-Risk Vulnerabilities Surge, But Exploited Vulnerabilities Slow Down",
    summary_en: "Cybersecurity firm Rapid7 released its Q2 2026 Vulnerability Trends analysis report, noting that the number of high-risk and critical-risk vulnerabilities disclosed during the period reached 8,539, a significant increase compared to the same period last year. However, the number of vulnerabilities listed on the US Cybersecurity and Infrastructure Security Agency's (CISA) Known Exploited Vulnerabilities (KEV) catalog was 40, which is lower than the same period last year. The analysis shows that while overall high-risk vulnerabilities surged, the actual increase in confirmed exploited vulnerabilities slowed down.\n\nOf particular concern is the synchronized increase in vulnerabilities that can be exploited directly from the network without authentication or user interaction. A total of 3,453 newly disclosed vulnerabilities in Q2 met this criterion, a significant increase compared to the same period last year. Furthermore, the number of vulnerabilities with publicly available Proof-of-Concept (PoC) code has also significantly increased.\n\nResearchers recommend that when planning patches, enterprises should not rely solely on CVSS scores. Instead, they should further consider whether the vulnerability resides in a system that attackers can actually reach, the critical importance of the affected assets to the enterprise's operations, and the vulnerability's actual exploitability within the current environment, in order to more accurately prioritize patching efforts.",
    tags_en: ["Rapid7", "CISA", "KEV", "Vulnerability Trends", "PoC", "Cybersecurity Patching"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178284", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：Medusa勒索軟體威脅加劇，利用未修補漏洞及RMM軟體進行攻擊",
    summary: "美國網路安全與基礎設施安全局（CISA）更新警訊，指出勒索軟體Medusa攻擊活動持續加劇。該駭客組織已攻擊超過500家與關鍵基礎設施相關的企業，受害者涵蓋醫療、教育、法律、保險、科技及製造業等領域。CISA警告，Medusa主要利用未修補的軟體漏洞作為初期入侵管道，而非針對特定產業。近期醫療保健與公共衛生（HPH）機構成為主要目標。\n\n攻擊技術方面，Medusa會密切追蹤漏洞公告，並在漏洞公布後極短時間內（有時甚至在公布前一週）開始利用。過去曾利用ConnectWise ScreenConnect（CVE-2024-1709）、FortiClient EMS（CVE-2023-48788）等漏洞，近期又鎖定Fortra GoAnywhere（CVE-2025-10035）和BeyondTrust（CVE-2026-1731）等已知漏洞。\n\n此外，Medusa攻擊活動的另一特徵是廣泛濫用遠端監控與管理（RMM）軟體進行偵測規避。被濫用的RMM工具包括AnyDesk、Atera、ConnectWise、eHorus、N-able、BeyondTrust、SimpleHelp和Splashtop。CISA提醒，組織應加強修補管理，並特別注意這些被濫用的RMM軟體，以應對日益嚴重的勒索軟體威脅。",
    tags: ["CISA", "Medusa", "勒索軟體", "CVE-2024-1709", "RMM", "關鍵基礎設施"],
    title_en: "CISA Warns: Medusa Ransomware Threat Intensifies, Exploiting Unpatched Vulnerabilities and RMM Software",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has updated its alerts, noting a continuous escalation in Medusa ransomware attack activity. The threat actor group has targeted over 500 companies associated with critical infrastructure, with victims spanning sectors including healthcare, education, legal, insurance, technology, and manufacturing. CISA warns that Medusa primarily utilizes unpatched software vulnerabilities as initial entry points, rather than targeting specific industries. Recently, healthcare and public health (HPH) facilities have become primary targets.\n\nRegarding attack techniques, Medusa closely monitors vulnerability disclosures and begins exploiting them in a very short timeframe after disclosure (sometimes even a week before announcement). They have previously exploited vulnerabilities such as ConnectWise ScreenConnect (CVE-2024-1709) and FortiClient EMS (CVE-2023-48788), and recently focused on known vulnerabilities like Fortra GoAnywhere (CVE-2025-10035) and BeyondTrust (CVE-2026-1731).\n\nAnother characteristic of Medusa's attack activity is the widespread abuse of Remote Monitoring and Management (RMM) software for detection evasion. Abused RMM tools include AnyDesk, Atera, ConnectWise, eHorus, N-able, BeyondTrust, SimpleHelp, and Splashtop. CISA advises organizations to strengthen patch management and pay special attention to these misused RMM tools to counter the increasingly severe ransomware threat.",
    tags_en: ["CISA", "Medusa", "Ransomware", "CVE-2024-1709", "RMM", "Critical Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178285", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GitLab 關鍵漏洞 CVE-2026-19478 遭利用，未經身份驗證可遠端刪除專案與偽造紀錄",
    summary: "資安公司 WatchTowr 警告，一個嚴重級別的 GitLab 漏洞 CVE-2026-19478，在公開披露後僅約兩天內即開始遭到攻擊者利用。此漏洞為一個程式碼注入缺陷，CVSS 分數為 9.4，允許未經身份驗證的攻擊者透過 GraphQL 指令，遠端修改或刪除公開專案及使用者資料。攻擊者只需單一 HTTP 請求，無需憑證或使用者互動，即可刪除整個儲存庫、偽造合併紀錄，甚至封鎖維護者。GitLab 已於 8 月 17 日修補此問題，並在 Community Edition (CE) 和 Enterprise Edition (EE) 的多個版本（如 19.2.4, 19.1.6 等）中發布了修補程式。WatchTowr 建議用戶立即更新自架設的實例，並作為緩解措施，應限制對 /api/graphql 端點的未經身份驗證存取，或完全移除公開儲存庫的存取權。專家指出，此類漏洞的快速利用週期，結合 AI 攻擊能力的提升，使得修補與防禦的窗口期極為狹窄。",
    tags: ["GitLab", "CVE-2026-19478", "程式碼注入", "GraphQL", "供應鏈安全", "未經身份驗證"],
    title_en: "GitLab Critical Vulnerability CVE-2026-19478 Exploited: Remote Deletion of Projects and Record Forgery Without Authentication",
    summary_en: "Security firm WatchTowr warned that a critical GitLab vulnerability, CVE-2026-19478, began being exploited by attackers within approximately two days of public disclosure. This flaw is a code injection defect with a CVSS score of 9.4, which allows unauthenticated attackers to remotely modify or delete public projects and user data via GraphQL commands. Attackers only need a single HTTP request—without credentials or user interaction—to delete entire repositories, forge merge records, or even lock out maintainers. GitLab patched this issue on August 17, releasing fixes in multiple versions for both Community Edition (CE) and Enterprise Edition (EE), such as 19.2.4 and 19.1.6. WatchTowr advises users to immediately update self-hosted instances and, as a mitigation measure, to restrict unauthenticated access to the /api/graphql endpoint, or completely remove access to public repositories. Experts point out that the rapid exploitation cycle of such vulnerabilities, combined with the increasing capabilities of AI attacks, makes the window for patching and defense extremely narrow.",
    tags_en: ["GitLab", "CVE-2026-19478", "Code Injection", "GraphQL", "Supply Chain Security", "Unauthenticated"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/critical-gitlab-flaw-exploited-shortly-after-disclosure", lang: "EN" }
    ]
  },
  {
    id: "20260820-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "美國政府警告：駭客利用 AI 攻擊西門子 (Siemens) PLC，鎖定關鍵基礎設施",
    summary: "美國多個政府機構（包括 NSA、CISA、FBI 等）發布聯合警示，警告關鍵基礎設施組織面臨駭客攻擊。攻擊者正在掃描網際網路，尋找暴露的 Siemens 可程式邏輯控制器 (PLC)，並開發利用這些設備造成嚴重工業流程中斷的漏洞。目標產業涵蓋能源、製造、水務、農業、化學等關鍵領域，受影響設備包括 S7-200、S7-300、S7-400、S7-1200 和 S7-1500 系列。駭客利用 AI 技術生成漏洞利用腳本，用於初始存取、憑證竊取和 DoS 攻擊。此外，攻擊者結合開源工業自動化函式庫（如 snap7.dll 和 python-snap7）與 AI 腳本，創建惡意工具，可篡改 PLC 的記憶體、配置資料和梯形邏輯程式。政府警告指出，AI 的應用極大地降低了開發 ICS 攻擊腳本的技術門檻，使攻擊者能快速適應防禦措施。建議相關組織必須安裝最新補丁、實施網路隔離，並強化存取控制，同時部署能監控 ICS 環境的資安產品。",
    tags: ["Siemens", "PLC", "AI 攻擊", "關鍵基礎設施", "ICS", "S7-1500"],
    title_en: "US Government Warns: Hackers Using AI to Attack Siemens PLCs, Targeting Critical Infrastructure",
    summary_en: "Multiple US government agencies, including the NSA, CISA, and FBI, have issued a joint warning regarding cyberattacks targeting critical infrastructure organizations. Attackers are scanning the internet for exposed Siemens Programmable Logic Controllers (PLCs) and developing vulnerabilities that could cause severe industrial process disruptions. Target sectors include energy, manufacturing, water, agriculture, and chemical industries, with affected equipment spanning the S7-200, S7-300, S7-400, S7-1200, and S7-1500 series. Hackers are leveraging AI technology to generate exploit scripts for initial access, credential theft, and DoS attacks. Furthermore, attackers are combining open-source industrial automation libraries (such as snap7.dll and python-snap7) with AI scripts to create malicious tools capable of tampering with PLC memory, configuration data, and ladder logic programs. Government warnings highlight that the application of AI significantly lowers the technical barrier for developing ICS attack scripts, allowing attackers to rapidly adapt to defensive measures. Relevant organizations are advised to install the latest patches, implement network segmentation, and strengthen access controls, while also deploying security products capable of monitoring the ICS environment.",
    tags_en: ["Siemens", "PLC", "AI Attacks", "Critical Infrastructure", "ICS", "S7-1500"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178286", lang: "ZH-TW" },
      { name: "SecurityWeek", url: "https://securityweek.com/hackers-using-ai-to-target-siemens-plcs-in-critical-us-sectors", lang: "EN" }
    ]
  },
  {
    id: "20260820-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "libmspack 發現堆緩衝區溢出漏洞：影響 CAB/CHM 等微軟壓縮格式處理",
    summary: "資安研究人員在對 libmspack 函式庫進行獨立審計後，發現了一個記憶體安全問題。libmspack 是一個用於處理微軟壓縮格式（如 CAB、CHM、LIT、HLP、KWAJ、SZDD）的小型 C 函式庫，該函式庫被 cabextract 和 ClamAV (libclammspack) 等工具使用。漏洞點位於 `mspack/readhuff.h` 中的 `make_decode_table()` 函式，該函式用於構建共享的 Huffman 解碼表。該漏洞的本質在於，`make_decode_table()` 在構建擴展節點時，並未驗證輸入的代碼長度陣列是否滿足 Kraft's inequality。攻擊者可以透過精心構造的、格式上合法的長度分佈輸入檔案，導致函式庫寫入超出呼叫方分配的解碼表範圍（out-of-bounds write），但程式仍會返回成功，使呼叫方無法察覺異常。研究人員已確認此漏洞可透過真實的函式庫 API 呼叫鏈觸發，並已向維護者報告，目前尚未分配 CVE 編號。",
    tags: ["libmspack", "堆緩衝區溢出", "CAB", "CHM", "ClamAV", "CVE"],
    title_en: "libmspack Discovers Heap Buffer Overflow Vulnerability Affecting Microsoft Compression Formats like CAB/CHM",
    summary_en: "Security researchers discovered a memory safety issue after independently auditing the libmspack library. libmspack is a small C library used to process Microsoft compression formats (such as CAB, CHM, LIT, HLP, KWAJ, SZDD), and is utilized by tools like cabextract and ClamAV (libclammspack). The vulnerability resides in the `make_decode_table()` function within `mspack/readhuff.h`, which is responsible for constructing a shared Huffman decoding table. The core issue is that `make_decode_table()` fails to validate whether the input code length array satisfies Kraft's inequality when building an extended node. An attacker can exploit this by providing a specially crafted, format-valid length distribution input file, causing the library to perform an out-of-bounds write beyond the decoding table range allocated by the caller. Crucially, the program still returns successfully, making the anomaly undetectable by the caller. Researchers confirmed that this vulnerability can be triggered through a genuine library API call chain and have reported it to the maintainers; no CVE ID has been assigned yet.",
    tags_en: ["libmspack", "Heap Buffer Overflow", "CAB", "CHM", "ClamAV", "CVE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/6", lang: "EN" }
    ]
  },
  {
    id: "20260820-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "libgit2 發布 1.9.5 與 1.9.7 版本，修補多項嚴重漏洞，包含堆緩衝區溢出與資訊洩漏",
    summary: "資安研究人員發布 libgit2 函式庫的 1.9.5 和 1.9.7 版本更新，修補了多個安全漏洞。本次更新涵蓋了多種風險，包括堆緩衝區溢出（Heap Buffer Overflow）、資訊洩漏和潛在的拒絕服務（DoS）問題。受影響的漏洞包括 CVE-2026-53587，這是一個在 `set_data` 函式中的堆越界讀取（heap out-of-bounds read）漏洞；CVE-2026-53584，涉及 Delta Object 結果大小標頭導致的無界記憶體分配；以及 CVE-2026-53585，與 Delta Object 相關。此外，1.9.5 版本還修補了由於 `git_revparse_single` 內部正規表達式引擎導致的堆緩衝區溢出，以及 OpenSSL TLS 後端中 IP SubjectAltName (SAN) 驗證的邏輯錯誤，可能導致中間人攻擊（MITM）。建議所有使用者升級至 v1.9.5 或 v1.9.7 版本，以修補這些關鍵安全缺陷。對於 1.8.x 系列，建議升級至 1.8.6 或 1.8.7。",
    tags: ["libgit2", "CVE-2026-53587", "CVE-2026-53584", "CVE-2026-53585", "堆緩衝區溢出", "OpenSSL"],
    title_en: "libgit2 Releases v1.9.5 and v1.9.7, Patching Multiple Critical Vulnerabilities Including Heap Buffer Overflow and Information Leakage",
    summary_en: "Cybersecurity researchers have released updated versions of the libgit2 library, v1.9.5 and v1.9.7, to patch multiple security vulnerabilities. This update addresses various risks, including Heap Buffer Overflow, information leakage, and potential Denial of Service (DoS) issues. Affected vulnerabilities include CVE-2026-53587, a heap out-of-bounds read vulnerability in the `set_data` function; CVE-2026-53584, involving unbounded memory allocation due to Delta Object result size headers; and CVE-2026-53585, related to Delta Objects. Furthermore, v1.9.5 patches a heap buffer overflow caused by the internal regular expression engine of `git_revparse_single`, as well as a logic error in the OpenSSL TLS backend's IP SubjectAltName (SAN) validation, which could potentially lead to Man-in-the-Middle (MITM) attacks. All users are advised to upgrade to v1.9.5 or v1.9.7 to patch these critical security flaws. For users on the 1.8.x series, upgrading to 1.8.6 or 1.8.7 is recommended.",
    tags_en: ["libgit2", "CVE-2026-53587", "CVE-2026-53584", "CVE-2026-53585", "Heap Buffer Overflow", "OpenSSL"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/4", lang: "EN" }
    ]
  },
  {
    id: "20260820-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GNU Emacs 任意檔案讀取導致遠端程式碼執行漏洞，影響 Emacs 28.1 及以上版本",
    summary: "資安研究員 Eshel Yaron 發現了 GNU Emacs 的一個任意程式碼執行（RCE）漏洞。該漏洞的觸發條件是在開啟任意檔案時，攻擊者可利用此缺陷執行惡意程式碼。受影響的版本為 Emacs 28.1 及更高版本。此漏洞的修復措施已在 Emacs 31 版本提供一個臨時補丁，並且在 master 分支上進行了更全面的重構。Gentoo 發行版已將修復補丁回溯應用至 28.2 版本。建議使用者應立即升級至已修補的版本，或採用官方提供的補丁進行修復，以防止被惡意利用。",
    tags: ["GNU Emacs", "RCE", "任意程式碼執行", "Emacs 28.1", "OSS 安全"],
    title_en: "GNU Emacs Arbitrary File Read Leads to Remote Code Execution Vulnerability Affecting Emacs 28.1 and Higher",
    summary_en: "Security researcher Eshel Yaron discovered an arbitrary code execution (RCE) vulnerability in GNU Emacs. The vulnerability can be exploited by an attacker to execute malicious code when opening an arbitrary file. Affected versions include Emacs 28.1 and higher. A temporary patch for this vulnerability has been provided in Emacs 31, and a more comprehensive refactoring has been implemented on the master branch. The Gentoo distribution has backported the fix to version 28.2. Users are advised to immediately upgrade to the patched version or apply the official patch to prevent malicious exploitation.",
    tags_en: ["GNU Emacs", "RCE", "Arbitrary Code Execution", "Emacs 28.1", "OSS Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/3", lang: "EN" }
    ]
  },
  {
    id: "20260820-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "uutils coreutils 存在安全漏洞：透過 LD_PRELOAD 載入世界可寫臨時檔案的共享函式庫",
    summary: "GNU coreutils 的 uutils 實作版本在處理 'stdbuf' 程式時，存在一個嚴重的安全漏洞。該程式透過設定環境變數 LD_PRELOAD，並指向一個位於世界可寫臨時目錄（如 /tmp）中的共享函式庫（libstdbuf.so）來修改標準串流的緩衝區特性。問題出在 uutils 預設會建立一個世界可寫的臨時目錄，並將共享函式庫放置於此，且未清理。這使得系統上的其他使用者可以在 'stdbuf' 執行前，修改這個共享函式庫，從而允許攻擊者執行任意程式碼。受影響的系統包括 Fedora、Alpine Linux、FreeBSD 和 NetBSD 等使用 uutils-coreutils 套件的發行版。修復建議是使用 'feat_external_libstdbuf' 特性建構 uutils，以確保共享函式庫的處理流程更安全。",
    tags: ["uutils", "coreutils", "LD_PRELOAD", "共享函式庫", "臨時檔案", "任意程式碼執行"],
    title_en: "uutils coreutils Vulnerability: Shared Library Loaded from World-Writable Temporary File via LD_PRELOAD",
    summary_en: "A critical security vulnerability exists in the uutils implementation of GNU coreutils when processing the 'stdbuf' program. The program modifies the buffering characteristics of standard streams by setting the environment variable LD_PRELOAD to point to a shared library (libstdbuf.so) located in a world-writable temporary directory (such as /tmp). The issue arises because uutils defaults to creating a world-writable temporary directory and placing the shared library there, without subsequently cleaning up the directory. This allows other users on the system to modify this shared library before 'stdbuf' executes, thereby enabling an attacker to execute arbitrary code. Affected systems include distributions using the uutils-coreutils package, such as Fedora, Alpine Linux, FreeBSD, and NetBSD. The recommended fix is to build uutils using the 'feat_external_libstdbuf' feature to ensure a safer handling process for the shared library.",
    tags_en: ["uutils", "coreutils", "LD_PRELOAD", "shared library", "temporary file", "arbitrary code execution"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/2", lang: "EN" }
    ]
  },
  {
    id: "20260820-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CVE-2026-75628：Perl的Punk::OAuth2模組存在登入後可被惡意重定向的漏洞",
    summary: "Punk::OAuth2 模組的 0.02 版本及更早版本，在 Perl 環境下存在一個嚴重的「開放重定向」（Open Redirect）漏洞，CVE-2026-75628。此漏洞的根源在於 `same_origin_path` 函數處理 `return` 參數時，未能正確驗證輸入，允許攻擊者利用反斜線（backslash）或 Tab 鍵字元來繞過原本的同源檢查。\n當攻擊者構造一個惡意連結引導受害者登入應用程式時，即使受害者完成了真實的身份驗證，系統仍會根據攻擊者植入的參數進行重定向，導致受害者被導向攻擊者控制的外部網站。雖然重定向本身不攜帶授權碼或存取權杖，但這仍可被用於進行釣魚攻擊或社會工程學攻擊，竊取用戶信任。\n修復建議是立即將 Punk-OAuth2 升級至 0.03 或更高版本。若無法升級，建議在反向代理層面，移除所有發往 `oauth2_login` 啟動路由的 `return` 查詢參數。",
    tags: ["CVE-2026-75628", "Punk::OAuth2", "Perl", "Open Redirect", "OAuth2"],
    title_en: "CVE-2026-75628: Open Redirect Vulnerability in Perl's Punk::OAuth2 Module",
    summary_en: "The Punk::OAuth2 module, specifically versions 0.02 and earlier, contains a critical 'Open Redirect' vulnerability, CVE-2026-75628, when running in a Perl environment. The root cause lies in the `same_origin_path` function's failure to properly validate input when processing the `return` parameter, allowing attackers to bypass the intended same-origin check using backslashes or Tab characters. When an attacker constructs a malicious link to guide a victim to log into the application, the system will redirect the victim based on the attacker-supplied parameter, even after the victim has completed genuine authentication. This leads to the victim being redirected to an external website controlled by the attacker. Although the redirection itself does not carry authorization codes or access tokens, it can still be used for phishing or social engineering attacks to steal user trust. The recommended fix is to immediately upgrade Punk-OAuth2 to version 0.03 or later. If upgrading is not possible, it is recommended to remove all `return` query parameters destined for the `oauth2_login` starting route at the reverse proxy layer.",
    tags_en: ["CVE-2026-75628", "Punk::OAuth2", "Perl", "Open Redirect", "OAuth2"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/1", lang: "EN" }
    ]
  },
  {
    id: "20260820-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增兩項已知遭利用漏洞：TrueConf Server的兩大高風險漏洞",
    summary: "美國網路安全局（CISA）宣布，已根據實際的攻擊證據，將兩項新的漏洞納入其「已知遭利用漏洞（Known Exploited Vulnerabilities, KEV）目錄」。這兩項漏洞分別是 TrueConf Server 的 CVE-2026-72529（缺少身份驗證的關鍵功能漏洞）和 CVE-2026-72530（代碼注入漏洞）。CISA指出，這類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業構成重大風險。\n\n此外，CISA的《具約束力的操作指令》（BOD 26-04）要求聯邦民事行政部門（FCEB）必須建立風險導向的漏洞管理機制，並優先修補 KEV 目錄中已公開暴露且在利用後可獲得完全控制權的漏洞。雖然該指令僅適用於 FCEB，但 CISA 鼓勵所有組織應採取類似的風險管理措施，優先修補 KEV 目錄中的漏洞，以降低整體資安風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-72529", "CVE-2026-72530", "TrueConf Server", "漏洞管理"],
    title_en: "CISA Adds Two Known Exploited Vulnerabilities: High-Risk Flaws in TrueConf Server",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added two new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog, based on actual evidence of exploitation. These two vulnerabilities are CVE-2026-72529 (a critical functionality flaw lacking authentication) and CVE-2026-72530 (a code injection flaw) in TrueConf Server. CISA noted that such vulnerabilities are common attack vectors used by malicious actors and pose a significant risk to federal enterprises.\n\nFurthermore, CISA's Binding Operational Directive (BOD 26-04) requires Federal Civilian Executive Branch (FCEB) departments to establish risk-based vulnerability management mechanisms, prioritizing the patching of vulnerabilities listed in the KEV Catalog that are publicly exposed and allow for full control upon exploitation. Although this directive only applies to the FCEB, CISA encourages all organizations to adopt similar risk management measures, prioritizing the patching of KEV Catalog vulnerabilities to reduce overall cybersecurity risk.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-72529", "CVE-2026-72530", "TrueConf Server", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/08/20/cisa-adds-two-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260820-046",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Delta 飛機機上 Wi-Fi 遭駭事件：駭客偽造網路進行釣魚攻擊，引發安全疑慮",
    summary: "近期發生一起 Delta Air Lines 飛機機上 Wi-Fi 遭駭事件。駭客透過偽造名為「Delta WiFi Fast」的 Wi-Fi 網路，在飛機上設置了看似 Google 介面的釣魚頁面，意圖進行釣魚式憑證竊取。雖然事件的幕後黑手尚未查明，但事件立即引起了高度的資安關注。資安專家指出，在飛機機上進行此類釣魚攻擊，不僅技術上非常低階，而且實務上極為不便，難以成功竊取大量受害者資訊。此外，文章也提及了另一項學術研究，揭示了在波音 737（Boeing 737）飛機的維護存取埠，可透過小型 Wi-Fi 設備操縱飛航管理電腦的潛在風險。儘管這項研究是在學術環境下進行，但仍警示了物理安全和系統韌性的重要性，提醒業界需高度警惕非網路層面的攻擊威脅。",
    tags: ["Delta Air Lines", "Wi-Fi 駭客攻擊", "釣魚攻擊", "Boeing 737", "物理安全", "資安事件"],
    title_en: "Delta Aircraft In-Flight Wi-Fi Hacked: Attackers Used Spoofed Network for Phishing Attempt, Raising Security Concerns",
    summary_en: "A recent incident involved a hacking attempt targeting Delta Air Lines' in-flight Wi-Fi. Attackers set up a phishing page, mimicking a Google interface, via a spoofed Wi-Fi network named \"Delta WiFi Fast\" on the aircraft, aiming to steal credentials through phishing. Although the perpetrators have not yet been identified, the incident immediately drew significant cybersecurity attention. Security experts noted that conducting such phishing attacks on an aircraft is not only technically low-level but also practically difficult, making it challenging to steal large amounts of victim data. Furthermore, the article also mentioned another academic study that revealed potential risks of manipulating the flight management computer via a small Wi-Fi device through the maintenance access port of a Boeing 737. Although this research was conducted in an academic setting, it still serves as a warning regarding the importance of physical security and system resilience, urging the industry to remain highly vigilant against non-network layer attack threats.",
    tags_en: ["Delta Air Lines", "Wi-Fi Hacking", "Phishing Attack", "Boeing 737", "Physical Security", "Cybersecurity Incident"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/delta-flight-disrupted-wi-fi-hack", lang: "EN" }
    ]
  },
  {
    id: "20260820-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "巴基斯坦資安威脅組織 Transparent Tribe (APT 36) 升級工具，針對阿富汗與印度進行網路間諜活動",
    summary: "資安研究機構 Acronis 觀察到一個名為 Transparent Tribe（亦稱 APT 36）的巴基斯坦資安威脅行為者，該組織持續針對阿富汗和印度進行網路間諜活動。該群體利用一套升級的工具集，包括名為 \"Patchcord\" 和 \"Sheetcord\" 的新型後門程式。Patchcord 是一款 C++ 植入物，具備在記憶體中執行任意程式碼的能力，並透過修改桌面捷徑（browser shortcut hijacking）來實現持久性，這是一種相對老式但有效的滲透技術。研究人員指出，該威脅行為者曾成功感染阿富汗一家國際公司的子公司，並針對一名在阿富汗電信（AFTEL）的 IT 職員竊取其桌面和私人資料，並試圖利用這些資料進行進一步的釣魚攻擊。此外，該組織還開發了針對印度多個政府機構（如國防部、外交部）的釣魚誘餌，儘管目前尚未有成功入侵的證據。專家建議，由於其持久性機制（如捷徑修改）相對老舊，端點安全產品應能有效偵測。修補建議是持續監控端點行為異常，特別是捷徑或啟動程序被非正常修改的行為。",
    tags: ["Transparent Tribe", "APT 36", "巴基斯坦", "Patchcord", "Sheetcord", "網路間諜活動", "捷徑劫持"],
    title_en: "Pakistan Cyber Threat Group Transparent Tribe (APT 36) Upgrades Tools for Cyber Espionage Targeting Afghanistan and India",
    summary_en: "Cybersecurity research firm Acronis has observed a Pakistani cyber threat actor group named Transparent Tribe (also known as APT 36), which continues to conduct cyber espionage targeting Afghanistan and India. The group is utilizing an upgraded toolset, including novel backdoors named \"Patchcord\" and \"Sheetcord.\" Patchcord is a C++ implant capable of executing arbitrary code in memory and achieving persistence by modifying desktop shortcuts (browser shortcut hijacking)—a relatively old but effective infiltration technique. Researchers noted that the threat actor successfully infected a subsidiary of an international company in Afghanistan, stealing the desktop and private data of an IT employee at AFTEL (Afghan Telecom), and attempting to use this data for further phishing attacks. Furthermore, the group has developed phishing lures targeting multiple Indian government agencies (such as the Ministry of Defence and the Ministry of Foreign Affairs), although no successful intrusion has been confirmed yet. Experts suggest that due to the relatively dated nature of its persistence mechanisms (such as shortcut modification), endpoint security products should be able to detect it. The remediation advice is to continuously monitor for endpoint behavioral anomalies, especially instances where shortcuts or startup programs are abnormally modified.",
    tags_en: ["Transparent Tribe", "APT 36", "Pakistan", "Patchcord", "Sheetcord", "Cyber Espionage", "Shortcut Hijacking"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/pakistan-transparent-tribe-afghan-cyberattacks", lang: "EN" }
    ]
  },
  {
    id: "20260820-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "銀行木馬程式 Grandoreiro 在墨西哥重現，利用 DLL 側載技術進行高度隱蔽性攻擊",
    summary: "銀行木馬程式 Grandoreiro 雖然在兩年前曾被執法機構打擊，但其營運者仍持續活躍，並在墨西哥發起新一輪攻擊活動。Acronis 的分析指出，這次的攻擊利用了 DLL 側載（DLL sideloading）技術，並偽裝成包含合法 PDF 和 XML 文件、以及一個名為 Duplicate Files Finder 的檔案管理應用程式的 ZIP 壓縮檔，透過垃圾郵件傳遞。攻擊者修改了該合法應用程式，使其在執行時能載入惡意的動態連結函式庫，從而啟動 Grandoreiro。新載入器具有高度的防分析和防鑑識功能，會檢查受害者電腦的系統運行時間、特定應用程式組合（如 Google Chrome、Firefox、CCleaner、Firefox Edge）以及系統資源，以判斷是否處於安全沙箱環境。若通過檢查，惡意程式才會與攻擊者的 C2 伺服器通訊並下載主載荷。Grandoreiro 最初於 2016 年出現，主要針對拉丁美洲的銀行客戶，具備竊取銀行憑證、記錄按鍵輸入和遠端控制等能力。這顯示該木馬程式持續演化，並專注於規避偵測和分析。",
    tags: ["Grandoreiro", "銀行木馬", "DLL sideloading", "Acronis", "拉丁美洲", "C2"],
    title_en: "Banking Trojan Grandoreiro Reappears in Mexico, Utilizing DLL Sideloading for Highly Stealthy Attacks",
    summary_en: "Although the banking trojan Grandoreiro was disrupted by law enforcement two years ago, its operators remain active and have launched a new wave of attacks in Mexico. Acronis analysis indicates that this attack utilized DLL sideloading techniques, packaged within a ZIP archive that appeared to contain legitimate PDF and XML files, along with a file management application named Duplicate Files Finder, and was delivered via spam email. The attackers modified this legitimate application to load a malicious dynamic link library upon execution, thereby initiating Grandoreiro. The new loader features advanced anti-analysis and anti-forensics capabilities, checking the victim computer's system uptime, specific application combinations (such as Google Chrome, Firefox, CCleaner, Firefox Edge), and system resources to determine if it is within a secure sandbox environment. Only if these checks pass will the malicious program communicate with the attacker's C2 server and download the main payload. Grandoreiro first appeared in 2016, primarily targeting bank clients in Latin America, and possesses capabilities such as stealing banking credentials, recording keystrokes, and remote control. This demonstrates the trojan's continued evolution, focusing on evading detection and analysis.",
    tags_en: ["Grandoreiro", "Banking Trojan", "DLL sideloading", "Acronis", "Latin America", "C2"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/grandoreiro-resurfaces-mexico-campaign", lang: "EN" }
    ]
  },
  {
    id: "20260820-049",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟揭露 MacSync Stealer 竊資活動：鎖定 macOS 裝置，竊取密碼、憑證及敏感資料",
    summary: "微軟資安研究團隊追蹤到名為 MacSync Stealer 的竊資軟體最新攻擊活動，該惡意程式專門鎖定 macOS 裝置。攻擊手法初期符合 ClickFix 社交工程，誘騙使用者在終端機執行指令，隨後下載惡意內容並透過指令碼與 AppleScript 執行。一旦進入系統，MacSync 會蒐集多種敏感資訊，包括 macOS 鑰匙圈、瀏覽器帳號密碼、Cookie、SSH 金鑰、AWS 雲端憑證、Kubernetes 組態，以及文件與桌面資料夾中的敏感檔案。資料竊取後，惡意程式會將內容壓縮成 ZIP 檔，再分區塊透過 HTTP 上傳請求傳送至攻擊者伺服器，並清除本地痕跡。由於 MacSync 會持續更換 C2 網域，微軟採取了更進階的防禦方式，透過交叉比對「終端機命令」、「固定路徑」、「HTTP 請求標頭」及「分段上傳」等多項端點與網路行為，才能追蹤到超過 30 個相關網域。建議企業應結合端點行為與網路活動進行比對，留意使用者操作終端機後，短時間內接連發生下載程式、執行 AppleScript、存取密碼、建立壓縮檔及大量上傳等異常行為。",
    tags: ["MacSync Stealer", "macOS", "竊資軟體", "C2 通訊", "社交工程", "憑證竊取"],
    title_en: "Microsoft Uncovers MacSync Stealer Activity: Targeting macOS Devices to Steal Passwords, Credentials, and Sensitive Data",
    summary_en: "Microsoft's security research team has tracked the latest attack activity of a data-stealing malware named MacSync Stealer, which specifically targets macOS devices. The attack initially mimics ClickFix social engineering, tricking users into executing commands in the terminal. Subsequently, it downloads malicious content and executes it using scripts and AppleScript. Once inside the system, MacSync collects various types of sensitive information, including macOS Keychain data, browser account passwords, cookies, SSH keys, AWS cloud credentials, Kubernetes configurations, and sensitive files from documents and desktop folders. After data theft, the malware compresses the content into a ZIP file and then transmits it to the attacker's server in chunks via HTTP upload requests, while also clearing local traces. Because MacSync continuously changes its C2 domains, Microsoft adopted a more advanced defense method, cross-referencing multiple endpoints and network behaviors—including 'terminal commands,' 'fixed paths,' 'HTTP request headers,' and 'segmented uploads'—to track over 30 related domains. Enterprises are advised to correlate endpoint behavior with network activity, paying attention to abnormal sequences of actions shortly after a user operates the terminal, such as downloading programs, executing AppleScript, accessing passwords, creating archives, and performing large-volume uploads.",
    tags_en: ["MacSync Stealer", "macOS", "Data Stealer", "C2 Communication", "Social Engineering", "Credential Theft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178311", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-050",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Akamai揭露「自帶EDR」攻擊手法：濫用端點防護系統進行任意程式碼執行",
    summary: "資安公司Akamai在DEF CON 2026（DEF CON 34）上，揭露了一種新型態的「自帶EDR」（Bring Your Own EDR）攻擊手法。此攻擊不需利用Windows核心漏洞，而是利用已獲系統信任且擁有高權限的EDR元件，將端點防護軟體本身轉化為攻擊工具。Akamai以SentinelOne的EDR代理程式為研究目標，發現其雖然採用Protected Process Light (PPL) 和 PsProtectedSignerAntimalware-Light 等Windows防護機制，但代理程式暴露了多個COM介面。攻擊者可透過串連利用這些COM功能，形成攻擊鏈，最終成功繞過PPL限制，將未簽署的DLL映射至受保護程序中執行任意程式碼。這項研究強調，由於EDR必須存取敏感系統元件而擁有極高權限，若其本地權限提升機制或信任模型存在弱點，攻擊者在取得主機初始存取權後，便可能將EDR轉化為攻擊工具。SentinelOne獲報後已推出26.1.1版代理程式進行修補。",
    tags: ["Akamai", "SentinelOne", "EDR", "Bring Your Own EDR", "COM介面", "PPL"],
    title_en: "Akamai Reveals 'Bring Your Own EDR' Attack Technique: Exploiting Endpoint Protection Systems for Arbitrary Code Execution",
    summary_en: "Cybersecurity firm Akamai revealed a novel 'Bring Your Own EDR' attack technique at DEF CON 2026 (DEF CON 34). This attack does not require exploiting Windows kernel vulnerabilities; instead, it leverages the EDR component, which already possesses system trust and high privileges, effectively turning the endpoint protection software itself into an attack tool. Using SentinelOne's EDR agent as a research target, Akamai found that while the agent employs Windows protections such as Protected Process Light (PPL) and PsProtectedSignerAntimalware-Light, the agent exposes multiple COM interfaces. Attackers can chain together these COM functionalities to form an attack chain, ultimately bypassing PPL restrictions and mapping unsigned DLLs into the protected process to execute arbitrary code. This research highlights that because EDR must access sensitive system components and thus possesses extremely high privileges, any weakness in its local privilege escalation mechanism or trust model could allow an attacker, after gaining initial host access, to transform the EDR into an attack tool. Following the report, SentinelOne released version 26.1.1 of the agent to patch the vulnerability.",
    tags_en: ["Akamai", "SentinelOne", "EDR", "Bring Your Own EDR", "COM Interface", "PPL"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178312", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-051",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "勒索軟體Clop鎖定Windchill系統竊取資料；CISA警告AI加速攻擊西門子PLC設備",
    summary: "近期資安事件顯示攻擊活動的複雜性與威脅等級持續升高。勒索軟體集團Clop被分析針對PTC產品生命週期管理（PLM）平臺Windchill開發客製化Web Shell，用於竊取登入憑證及大量資料，顯示其大規模資料竊取能力。此外，CISA發布警訊，警告駭客利用AI加速開發漏洞利用程式碼，鎖定西門子S7系列PLC設備，並透過網路掃描尋找暴露於網際網路的工控設備，威脅工控系統的完整性。另有報告指出，Medusa勒索軟體已攻擊超過500家關鍵基礎設施機構，且近期醫療保健與公共衛生機構成為主要目標。此外，CISA也發布了多個已遭利用的漏洞名單（KEV），包括Windows IKE服務、SharePoint身分驗證等，呼籲相關用戶緊急修補。企業應特別注意工控設備的網路隔離，並強化對身份驗證與權限管理的防禦。",
    tags: ["Clop", "Windchill", "CVE-2026-12569", "CISA", "西門子S7", "勒索軟體"],
    title_en: "Clop Ransomware Locks Windchill System to Steal Data; CISA Warns AI Accelerates Attacks on Siemens PLC Equipment",
    summary_en: "Recent cybersecurity incidents demonstrate the increasing complexity and threat level of attack activities. The ransomware group Clop was analyzed to have developed a customized Web Shell targeting PTC's Product Lifecycle Management (PLM) platform, Windchill, used to steal login credentials and large volumes of data, demonstrating its capability for large-scale data exfiltration. Furthermore, CISA issued an alert warning that hackers are using AI to accelerate the development of exploit code, targeting Siemens S7 series PLC equipment and searching for internet-exposed industrial control systems via network scanning, threatening the integrity of ICS. Another report indicates that Medusa ransomware has attacked over 500 critical infrastructure organizations, with healthcare and public health facilities being primary targets recently. Additionally, CISA published a list of exploited vulnerabilities (KEV), including Windows IKE service and SharePoint authentication, urging relevant users to patch immediately. Enterprises must pay special attention to network isolation of ICS equipment and strengthen defenses for identity authentication and access management.",
    tags_en: ["Clop", "Windchill", "CVE-2026-12569", "CISA", "Siemens S7", "Ransomware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178309", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客組織對烏克蘭和俄羅斯目標進行大規模攻擊，入侵超過 14,000 台 Dahua IP 攝影機",
    summary: "根據 Hunt.io 的報告，一個威脅行為者在 6 月 17 日至 7 月 22 日期間，對烏克蘭和俄羅斯地區的 Dahua IP 攝影機進行了大規模的駭客攻擊，代號為 Operation CameraSwarm。攻擊者利用暴力破解引擎，鎖定 12,324 個唯一 IP 位址，成功入侵了超過 14,530 台設備。攻擊者透過遠端程序呼叫（RPC）部署了持久性後門帳號，該帳號使用 p2pwn/p2password，且獨立於管理員密碼，即使更換密碼或進行出廠重設也無法清除。\n\n攻擊者利用了多個漏洞進行身份驗證繞過，包括鏈接了 CVE-2021-33044、CVE-2021-33045 和 CVE-20244-39943 三個漏洞。其中，CVE-2021-33044 利用了對自稱 NetKeyboard 硬體控制器客戶端的無條件信任，使得密碼欄位不會被評估；CVE-2021-33045 則利用了韌體從請求主體而非 TCP 連接中讀取聲稱來源位址的缺陷。這些繞過機制能返回未經身份驗證的完整管理員會話，並透過 RPC 植入後門帳號。\n\n此外，攻擊者甚至濫用了 Dahua 的雲端中繼服務，僅使用序列號即可到達位於 NAT 後方的攝影機。報告指出，攻擊者在攻擊前至少一年時間內建立了相關基礎設施，其工具包包含多個開發者的修改代碼，顯示其高度組織化。",
    tags: ["Dahua", "IP 攝影機", "CVE-2021-33044", "CVE-2021-33045", "Operation CameraSwarm", "遠端程序呼叫 (RPC)"],
    title_en: "Cyber Threat Actors Launch Massive Attacks on Ukraine and Russia Targets, Compromising Over 14,000 Dahua IP Cameras",
    summary_en: "According to a report from Hunt.io, a threat actor conducted a large-scale cyberattack on Dahua IP cameras in Ukraine and Russia between June 17 and July 22, codenamed Operation CameraSwarm. The attackers utilized a brute-force engine to target 12,324 unique IP addresses, successfully compromising over 14,530 devices. The attackers deployed persistent backdoor accounts via Remote Procedure Call (RPC), using p2pwn/p2password. These accounts are independent of the administrator password and cannot be cleared even by changing the password or performing a factory reset.\n\nThe attackers exploited multiple vulnerabilities to bypass authentication, including CVE-2021-33044, CVE-2021-33045, and CVE-20244-39943. Specifically, CVE-2021-33044 exploited the unconditional trust given to a client claiming to be the NetKeyboard hardware controller, preventing the password field from being evaluated. CVE-2021-33045 exploited a flaw where the firmware read the claimed source address from the request body rather than the TCP connection. These bypass mechanisms allowed the return of unauthenticated, full administrator sessions, enabling the planting of backdoor accounts via RPC.\n\nFurthermore, the attackers even abused Dahua's cloud relay service, reaching cameras located behind NAT using only the serial number. The report indicates that the attackers established related infrastructure at least a year prior to the attack, with their toolkit containing modified code from multiple developers, suggesting a high degree of organization.",
    tags_en: ["Dahua", "IP Cameras", "CVE-2021-33044", "CVE-2021-33045", "Operation CameraSwarm", "Remote Procedure Call (RPC)"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/threat-actor-hacks-14000-ip-cameras-in-ukraine-and-russia", lang: "EN" }
    ]
  },
  {
    id: "20260820-053",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Atlassian與Splunk同步修補超過250個漏洞，涵蓋多個關鍵高風險安全缺陷",
    summary: "本週，Atlassian和Splunk分別宣布為其產品線修補了超過250個漏洞，其中包含多個關鍵（Critical）和高風險（High-severity）的缺陷。Atlassian在週二發布安全公告，針對Bamboo、Bitbucket、Confluence、Crowd、Fisheye/Crucible和Jira等產品，修補了10個關鍵和162個高風險的第三方依賴漏洞。這些修補涵蓋了約109個獨立的CVE。成功利用這些漏洞可能導致遠端程式碼執行（RCE）、服務拒絕（DoS）、資訊竊取、中間人攻擊（MitM）、身份驗證繞過（Authentication Bypass）等嚴重攻擊。週三，Splunk也宣布為Splunk Enterprise、SOAR、Universal Forwarder及其相關應用和外掛修補了至少150個漏洞。例如，Splunk Enterprise發布了版本10.4.2、10.2.6、10.0.9和9.4.14，修補了60個漏洞，其中包含3個關鍵級別的缺陷。這些修補旨在解決第三方套件和依賴中的多個安全缺陷，實務上建議用戶應立即更新至最新版本，以防範被駭客利用。",
    tags: ["Atlassian", "Splunk", "CVE", "RCE", "Confluence", "Jira", "安全修補"],
    title_en: "Atlassian and Splunk Patch Over 250 Vulnerabilities, Addressing Multiple Critical and High-Severity Flaws",
    summary_en: "This week, Atlassian and Splunk announced patches for over 250 vulnerabilities across their product lines, including multiple Critical and High-severity flaws. Atlassian released a security advisory on Tuesday, patching 10 Critical and 162 High-severity third-party dependency vulnerabilities for products including Bamboo, Bitbucket, Confluence, Crowd, Fisheye/Crucible, and Jira. These patches cover approximately 109 independent CVEs. Successful exploitation of these vulnerabilities could lead to severe attacks such as Remote Code Execution (RCE), Denial of Service (DoS), information theft, Man-in-the-Middle (MitM), and Authentication Bypass. On Wednesday, Splunk also announced patches for at least 150 vulnerabilities across Splunk Enterprise, SOAR, Universal Forwarder, and related applications and add-ons. For instance, Splunk Enterprise released versions 10.4.2, 10.2.6, 10.0.9, and 9.4.14, patching 60 vulnerabilities, including 3 Critical-level flaws. These patches aim to resolve multiple security flaws in third-party packages and dependencies, and users are strongly advised to update to the latest versions immediately to prevent exploitation by attackers.",
    tags_en: ["Atlassian", "Splunk", "CVE", "RCE", "Confluence", "Jira", "Security Patch"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/atlassian-splunk-patch-dozens-of-critical-high-severity-vulnerabilities", lang: "EN" }
    ]
  },
  {
    id: "20260820-054",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "MLflow 平台遭利用的 SSRF 漏洞 (CVE-2026-64849)，威脅雲端憑證外洩",
    summary: "AI 工程平台 MLflow 的 Tracking Server 存在一個未經身份驗證的伺服器端請求偽造 (SSRF) 漏洞，被追蹤為 CVE-2026-64849，CVSS 分數為 9.3。此漏洞允許攻擊者向內部端點發送 HTTP 請求，因為 MLflow 的模型註冊表 webhooks API 預設沒有身份驗證保護。攻擊者可利用此缺陷繞過先前版本添加的 SSRF 保護機制，直接存取雲端元數據服務，從而竊取雲端憑證和敏感密鑰。WatchTowr 警告，此漏洞的野外利用在 CVE 分配後數小時內即開始，主要目標是雲端託管的實例。受影響版本為所有早於 3.15.0 的 MLflow 版本。CISA 已將此漏洞列入已知已利用漏洞 (KEV) 目錄，敦促聯邦機構在兩週內修補。建議所有運行 MLflow 的組織應優先修補所有暴露的系統，並審查稽核日誌，檢查是否有憑證外洩的跡象。",
    tags: ["MLflow", "CVE-2026-64849", "SSRF", "雲端憑證", "AI 平台", "CISA"],
    title_en: "SSRF Vulnerability in MLflow Platform (CVE-2026-64849) Threatens Cloud Credential Leakage",
    summary_en: "The Tracking Server in the AI engineering platform MLflow contains an unauthenticated Server-Side Request Forgery (SSRF) vulnerability, tracked as CVE-2026-64849, with a CVSS score of 9.3. This vulnerability allows attackers to send HTTP requests to internal endpoints because the MLflow Model Registry webhooks API lacks default authentication protection. Attackers can exploit this flaw to bypass SSRF protections added in previous versions, directly accessing cloud metadata services and thereby stealing cloud credentials and sensitive keys. WatchTowr warned that exploitation of this vulnerability began within hours of the CVE assignment, primarily targeting cloud-hosted instances. Affected versions are all MLflow versions prior to 3.15.0. CISA has listed this vulnerability in its Known Exploited Vulnerabilities (KEV) catalog, urging federal agencies to patch within two weeks. Organizations running MLflow are advised to prioritize patching all exposed systems and reviewing audit logs for signs of credential leakage.",
    tags_en: ["MLflow", "CVE-2026-64849", "SSRF", "Cloud Credentials", "AI Platform", "CISA"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178282", lang: "ZH-TW" },
      { name: "SecurityWeek", url: "https://securityweek.com/mlflow-vulnerability-exploited-for-cloud-credential-theft", lang: "EN" }
    ]
  },
  {
    id: "20260820-055",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "思科（Cisco）修補 15 個漏洞：Crosswork 與 Secure Workload 包含多個高危險 CVE",
    summary: "思科（Cisco）於本週三宣布為其多款產品發布修補程式，涵蓋 15 個漏洞，其中涉及 Crosswork 和 Secure Workload 等產品線。Crosswork 版本 7.2.1-SP 修復了四個高危險 CVE，包括 CVE-2026-20030、CVE-2026-20357 和 CVE-2026-20358，這三個漏洞的 CVSS 分數均為 10/10，另一個 CVE-2026-20359 的 CVSS 分數為 9.9/10。這些漏洞的成功利用可能導致遠端程式碼執行（RCE）、身份驗證繞過、路徑遍歷及檔案覆寫/刪除等攻擊。此外，Secure Workload 也發布了版本更新，修復了五個 CVE，涉及不當存取控制、程式碼/作業系統指令注入等問題。另一個高危險漏洞 CVE-2026-20320 存在於 BroadWorks 的 OCI XML 解析器，允許未經身份驗證的外部實體解析，可讓攻擊者讀取敏感配置資訊。思科指出，目前未掌握任何這些漏洞在野外被利用的證據，建議用戶立即更新至最新的修補版本。",
    tags: ["Cisco", "Crosswork", "Secure Workload", "CVE-2026-20030", "CVE-2026-20320", "RCE", "資安修補"],
    title_en: "Cisco Patches 15 Vulnerabilities: Crosswork and Secure Workload Include Multiple High-Risk CVEs",
    summary_en: "Cisco announced on Wednesday that it has released patches for multiple products, covering 15 vulnerabilities, including products lines such as Crosswork and Secure Workload. Crosswork version 7.2.1-SP fixes four high-risk CVEs, including CVE-2026-20030, CVE-2026-20357, and CVE-2026-20358. These three vulnerabilities each have a CVSS score of 10/10, while CVE-2026-20359 has a CVSS score of 9.9/10. Successful exploitation of these vulnerabilities could lead to attacks such as Remote Code Execution (RCE), authentication bypass, path traversal, and file overwrite/deletion. Additionally, Secure Workload released a version update that fixes five CVEs, involving issues such as improper access control and code/operating system command injection. Another high-risk vulnerability, CVE-2026-20320, exists in BroadWorks' OCI XML parser, allowing parsing by unauthenticated external entities, which could allow an attacker to read sensitive configuration information. Cisco noted that there is currently no evidence of these vulnerabilities being exploited in the wild, and recommends that users update immediately to the latest patched version.",
    tags_en: ["Cisco", "Crosswork", "Secure Workload", "CVE-2026-20030", "CVE-2026-20320", "RCE", "Cybersecurity Patch"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/cisco-patches-critical-crosswork-secure-workload-vulnerabilities", lang: "EN" }
    ]
  },
  {
    id: "20260820-056",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google揭露三組疑似俄羅斯駭客組織，利用OAuth與應用密碼進行精準網路釣魚攻擊",
    summary: "Google威脅情報小組（GTIG）發布報告，揭露三組疑似俄羅斯網路間諜威脅集群：UNC6293、UNC7005和UNC5976。這些駭客組織利用合法身份驗證流程，針對歐洲和美國的學術界、航空航天、國防、政府及智庫人員進行持續且適應性強的網路釣魚活動。UNC6293被評估為Ice Relic（前身為APT29）的子集群，過去曾利用應用特定密碼（application specific passwords）竊取帳號。近期，攻擊者透過冒充國務院官員，以外交主題為誘餌，進行應用密碼釣魚。UNC5976則擅長利用OAuth釣魚技術，透過購買網域和雲端基礎設施，建立假文件分享頁面，誘騙受害者在成功登入Google OAuth頁面後，讓惡意腳本擷取身份驗證Token。此外，UNC7005（別名Storm-2945）則針對WhatsApp帳號進行設備代碼釣魚，誘騙受害者連結帳號，最終可執行JavaScript來記錄受害者的語音和視訊。\n\nGoogle建議用戶提高警覺，特別注意要求分享完整URL或驗證碼的釣魚行為，並警惕涉及外交、學術或軍事相關主題的釣魚郵件和連結。",
    tags: ["Google Threat Intelligence Group", "UNC6293", "UNC7005", "UNC5976", "OAuth phishing", "應用特定密碼", "網路釣魚"],
    title_en: "Google Uncovers Three Suspected Russian Hacker Groups Using OAuth and Application Passwords for Targeted Phishing Attacks",
    summary_en: "Google Threat Intelligence Group (GTIG) released a report revealing three suspected Russian cyber espionage threat clusters: UNC6293, UNC7005, and UNC5976. These hacker groups are conducting persistent and adaptive phishing campaigns targeting individuals in academia, aerospace, defense, government, and think tank sectors across Europe and the United States, utilizing legitimate identity verification processes. UNC6293 is assessed to be a sub-cluster of Ice Relic (formerly APT29), which previously used application specific passwords to steal accounts. Recently, attackers have been observed conducting application password phishing by impersonating State Department officials and using diplomatic topics as lures. UNC5976 specializes in using OAuth phishing techniques, establishing fake document sharing pages by purchasing domains and cloud infrastructure, and tricking victims into allowing malicious scripts to capture identity verification Tokens after successfully logging into the Google OAuth page. Furthermore, UNC7005 (also known as Storm-2945) targets WhatsApp accounts for device code phishing, tricking victims into linking accounts, which ultimately allows JavaScript to record the victim's voice and video. Google advises users to heighten their vigilance, paying special attention to phishing activities that request the sharing of complete URLs or verification codes, and to be wary of phishing emails and links related to diplomatic, academic, or military subjects.",
    tags_en: ["Google Threat Intelligence Group", "UNC6293", "UNC7005", "UNC5976", "OAuth phishing", "application specific passwords", "phishing"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/suspected-russian-hackers-abuse-google.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-057",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Microsoft Defender 驅動程式遭濫用：研究揭露利用合法簽章元件繞過端點安全防禦",
    summary: "安全研究人員發現，攻擊者可以重新利用 Microsoft Defender 的簽章驅動程式 (BTR.sys)，將其作為通用核心操作引擎。這種方法可以利用系統啟動到使用者模式初始化之間的「黃金窗口期」，從而繞過傳統的端點安全解決方案。由於 BTR.sys 是合法的 Microsoft 簽章元件，基於簽章的阻擋機制因此失效。攻擊者甚至會製作出模仿合法 Windows Defender 修復流程的工具，進一步提高規避偵測的難度。這類攻擊展示了即使是看似最信任的合法系統元件，也可能被轉化為攻擊的跳板，對企業的端點安全防禦構成了重大威脅。修補建議是需加強對系統啟動流程的監控，並考慮採用更進階的行為分析和記憶體保護機制，而非僅依賴簽章驗證。",
    tags: ["Microsoft Defender", "BTR.sys", "驅動程式濫用", "端點安全", "核心操作", "簽章繞過"],
    title_en: "Microsoft Defender Driver Misuse: Research Reveals Exploitation of Legitimate Signature Component to Bypass Endpoint Security Defenses",
    summary_en: "Security researchers discovered that attackers can repurpose the Microsoft Defender signature driver (BTR.sys) as a general-purpose kernel operation engine. This method exploits the 'golden window' between system boot and user-mode initialization, thereby bypassing traditional endpoint security solutions. Because BTR.sys is a legitimate Microsoft-signed component, signature-based blocking mechanisms are rendered ineffective. Attackers can even create tools that mimic legitimate Windows Defender repair processes, further increasing the difficulty of detection evasion. This type of attack demonstrates that even seemingly most trusted, legitimate system components can be transformed into attack launchpads, posing a significant threat to enterprise endpoint security defenses. Recommended mitigations include strengthening monitoring of the system boot process and considering the adoption of more advanced behavioral analysis and memory protection mechanisms, rather than relying solely on signature validation.",
    tags_en: ["Microsoft Defender", "BTR.sys", "Driver Misuse", "Endpoint Security", "Kernel Operation", "Signature Bypass"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/threatsday-gogs-100-rce-n8n-workflow-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-058",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "美國政府警告：AI生成惡意腳本正鎖定Siemens S7 PLC，威脅關鍵基礎設施",
    summary: "美國國家安全局（NSA）、CISA等多個政府機構發出警告，指出目前存在利用人工智慧（AI）生成惡意腳本的「活躍威脅」，目標是國家關鍵基礎設施，特別是Siemens S7系列可程式邏輯控制器（PLC）。攻擊者利用Censys和ZoomEye等網路掃描服務，尋找運行過時或保護不足的PLC。這些PLC包括S7-200、S7-300、S7-400、S7-1200和S7-1500等系列。攻擊者使用AI輔助生成腳本，可進行初始存取、憑證竊取和服務拒絕等攻擊，並模擬合法監控工具，透過S7comm協定讀寫PLC記憶體和邏輯程式。專家指出，AI的應用正在降低攻擊門檻，使攻擊者能更快速地迭代和開發攻擊腳本。為應對此威脅，建議OT系統擁有者應確保PLC運行最新版本、盡可能隔離於網際網路，並實施強大的存取控制和異常監控。",
    tags: ["Siemens S7", "PLC", "AI 攻擊", "關鍵基礎設施", "OT/ICS", "CISA"],
    title_en: "US Government Warns: AI-Generated Malicious Scripts Targeting Siemens S7 PLCs, Threatening Critical Infrastructure",
    summary_en: "Multiple US government agencies, including the National Security Agency (NSA) and CISA, have issued warnings regarding an 'active threat' utilizing artificial intelligence (AI) to generate malicious scripts. The targets are national critical infrastructure, specifically the Siemens S7 series of Programmable Logic Controllers (PLCs). Attackers are using network scanning services like Censys and ZoomEye to locate PLCs running outdated or insufficiently protected versions. These PLCs include series such as S7-200, S7-300, S7-400, S7-1200, and S7-1500. Attackers are using AI assistance to generate scripts capable of performing attacks such as initial access, credential theft, and denial of service. These scripts simulate legitimate monitoring tools, reading and writing PLC memory and logic programs via the S7comm protocol. Experts point out that the application of AI is lowering the barrier to entry for attackers, allowing them to iterate and develop attack scripts more rapidly. To counter this threat, OT system owners are advised to ensure PLCs run the latest versions, isolate them from the internet where possible, and implement strong access controls and anomaly monitoring.",
    tags_en: ["Siemens S7", "PLC", "AI Attacks", "Critical Infrastructure", "OT/ICS", "CISA"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/ai-generated-exploit-scripts-target.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-059",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Adversa AI揭露「加密上下文注入」攻擊：Grok與Gemini等大型語言模型面臨私密資料外洩風險",
    summary: "資安公司 Adversa AI 公布了一種名為「加密上下文注入」（Cryptographic Context Injection）的攻擊技術，指出其可使大型語言模型（LLM）如 xAI 的 Grok 聊天機器人，在用戶要求總結一般網頁時，將用戶的姓名、大致位置、訂閱層級和當前對話內容傳輸給攻擊者控制的伺服器。該攻擊無需確認步驟，且沒有可見警告。技術原理是將攻擊者的指令以密文形式嵌入網頁的 JSON 物件中，模型在執行 Python 程式碼時，會透過 PBKDF2 和 AES-256-GCM 解密這些指令，使其內容進入模型的上下文。這使得敏感的私有會話元數據和對話歷史被導向到模型啟動的外部工具調用（egress action）中。Adversa AI 建議，修補重點不應放在模型層，而應放在圍繞 Agent 的「外掛層」（harness）控制，包括隔離不可信內容、對不可逆和出站行為進行閘控，並捕獲帶有解析參數的每會話工具追蹤。\n\n此外，Adversa AI 也展示了針對 Google Gemini 的攻擊向量，該攻擊能讓模型解密一個偽造的 Python 追蹤堆棧，從而達到繞過安全策略的目的。雖然文章未提供 CVE 編號或修補建議，但強調了限制 Agent 權限、嚴格控制數據流向和出站行為的重要性。",
    tags: ["Adversa AI", "Grok", "Gemini", "大型語言模型", "上下文注入", "加密上下文注入", "LLM 安全"],
    title_en: "Adversa AI Uncovers 'Cryptographic Context Injection' Attack: Large Language Models Like Grok and Gemini Face Private Data Leakage Risk",
    summary_en: "Cybersecurity firm Adversa AI has published an attack technique called 'Cryptographic Context Injection,' which demonstrates that large language models (LLMs), such as xAI's Grok chatbot, can leak user's name, approximate location, subscription tier, and current conversation content to an attacker-controlled server when summarizing general web pages. The attack requires no confirmation steps and leaves no visible warnings. The technical principle involves embedding the attacker's instructions in an encrypted format within the webpage's JSON object. When the model executes Python code, it decrypts these instructions using PBKDF2 and AES-256-GCM, allowing the content to enter the model's context. This subsequently directs sensitive private session metadata and conversation history into an external tool call (egress action) initiated by the model. Adversa AI suggests that the focus of remediation should not be on the model itself, but rather on the control of the 'harness' surrounding the Agent. This includes isolating untrusted content, gating irreversible and outbound actions, and tracking every session tool with parsed parameters.\n\nFurthermore, Adversa AI also demonstrated an attack vector targeting Google Gemini, which allows the model to decrypt a fabricated Python trace stack, thereby bypassing security policies. Although the article does not provide a CVE ID or specific patch recommendations, it emphasizes the critical importance of limiting Agent permissions, strictly controlling data flow, and managing outbound actions.",
    tags_en: ["Adversa AI", "Grok", "Gemini", "Large Language Models", "Context Injection", "Cryptographic Context Injection", "LLM Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/new-cryptographic-context-injection.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-060",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "關鍵資安漏洞：isolated-vm 允許沙盒逃逸，可能導致主機程序記憶體遭破壞",
    summary: "資安研究人員發現了一個名為 GHSA-864f-rcv7-6rh4 的嚴重漏洞，影響流行的開源沙盒函式庫 isolated-vm 的所有版本（包括 7.0.0 及以前）。isolated-vm 是一個用於 Node.js 的函式庫，它利用 V8 Isolate 運行不受信任的 JavaScript，以實現多個沙盒環境的隔離。該漏洞存在於 ExternalCopy 組件，該組件負責安全地序列化和反序列化 JavaScript 物件。漏洞的根本原因是 ExternalCopy 在處理 transferList 選項時發生了「類型混淆」（type confusion），使得沙盒內的程式碼能夠突破隔離限制，破壞主機應用程式的記憶體。攻擊的影響範圍極大，最低可導致主機程序崩潰（Denial-of-Service），最高甚至可能達到「客戶端到主機沙盒逃逸」（guest-to-host sandbox escape），進而導致主機控制流劫持，存在遠端程式碼執行（RCE）的風險。建議所有使用 isolated-vm 的開發者應立即升級至 6.2.0 或 7.0.1 或更新版本以獲得最佳保護。",
    tags: ["isolated-vm", "GHSA-864f-rcv7-6rh4", "沙盒逃逸", "V8 Isolate", "Node.js", "記憶體破壞"],
    title_en: "Critical Security Vulnerability: isolated-vm Allows Sandbox Escape, Potentially Corrupting Host Process Memory",
    summary_en: "Security researchers have discovered a critical vulnerability, designated GHSA-864f-rcv7-6rh4, affecting all versions of the popular open-source sandbox library isolated-vm (including 7.0.0 and earlier). isolated-vm is a Node.js library that utilizes V8 Isolate to run untrusted JavaScript, thereby achieving isolation for multiple sandbox environments. The vulnerability resides in the ExternalCopy component, which is responsible for safely serializing and deserializing JavaScript objects. The root cause of the vulnerability is a 'type confusion' error that occurs in ExternalCopy when handling the transferList option. This flaw allows code within the sandbox to break out of the isolation limits and corrupt the host application's memory. The attack impact is extensive, ranging from minimum Denial-of-Service (DoS) to potentially a 'guest-to-host sandbox escape,' which could lead to host control flow hijacking and pose a risk of Remote Code Execution (RCE). Developers using isolated-vm are advised to immediately upgrade to version 6.2.0, 7.0.1, or later for optimal protection.",
    tags_en: ["isolated-vm", "GHSA-864f-rcv7-6rh4", "Sandbox Escape", "V8 Isolate", "Node.js", "Memory Corruption"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/isolated-vm-flaw-lets-sandboxed.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-061",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Citrix修補NetScaler ADC/Gateway兩大漏洞：包含可繞過身份驗證的關鍵CVE-2026-19490",
    summary: "雲端虛擬化公司Citrix發布更新，修補了影響NetScaler ADC和NetScaler Gateway部署的兩項安全漏洞，其中包含一個嚴重等級的身份驗證繞過漏洞（CVE-2026-19490）。這些漏洞影響客戶自行管理的NetScaler實例，包括某些FIPS和NDcPP版本，以及使用客戶管理NetScaler的SecurAccess ZTNA Hybrid部署。值得注意的是，Citrix管理的雲服務和自適應身份驗證功能已修補，不受影響。CVE-2026-19489是一個記憶體溢出漏洞（CVSS 8.8），僅在啟用SIP ALG且配置為LSN組時觸發。而更嚴重的CVE-2026-19490（CVSS 9.3）是身份驗證繞過漏洞，影響配置為Gateway（如SSL VPN, ICA Proxy, CVPN, RDP Proxy）或AAA虛擬伺服器的設備。建議客戶根據自身配置（如是否啟用SAML action）評估風險，並升級至指定的修補版本（例如14.1-73.32或更高）。",
    tags: ["Citrix", "NetScaler", "CVE-2026-19490", "CVE-2026-19489", "身份驗證繞過", "SSL VPN"],
    title_en: "Citrix Patches Two Major NetScaler ADC/Gateway Vulnerabilities, Including Authentication Bypass CVE-2026-19490",
    summary_en: "Cloud virtualization company Citrix has released an update to patch two security vulnerabilities affecting NetScaler ADC and NetScaler Gateway deployments. One of these vulnerabilities is a critical authentication bypass flaw (CVE-2026-19490). These vulnerabilities impact customer-managed NetScaler instances, including certain FIPS and NdcPP versions, as well as SecurAccess ZTNA Hybrid deployments using customer-managed NetScaler. Notably, Citrix-managed cloud services and adaptive authentication features are patched and unaffected. CVE-2026-19489 is a memory overflow vulnerability (CVSS 8.8) that is triggered only when SIP ALG is enabled and configured for LSN groups. The more severe CVE-2026-19490 (CVSS 9.3) is an authentication bypass vulnerability that affects devices configured as Gateways (such as SSL VPN, ICA Proxy, CVPN, RDP Proxy) or AAA virtual servers. Customers are advised to assess the risk based on their specific configurations (such as whether SAML action is enabled) and upgrade to the specified patched version (e.g., 14.1-73.32 or higher).",
    tags_en: ["Citrix", "NetScaler", "CVE-2026-19490", "CVE-2026-19489", "Authentication Bypass", "SSL VPN"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/exploitation-expected-for-critical-authentication-bypass-patched-in-citrix-netscaler", lang: "EN" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/critical-netscaler-flaw-can-bypass.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-062",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Zimbra Collaboration (ZCS) 存在遠端代碼執行漏洞 CVE-2026-73570，CERT Polska 警告已遭積極利用",
    summary: "Polish Computer Emergency Response Team (CERT Polska) 警告，一個已修補的 Zimbra Collaboration (ZCS) 安全漏洞 CVE-2026-73570，目前已在野外遭到積極利用。此漏洞屬於命令注入（command injection）類型，可導致遠端代碼執行（RCE）。根據 NIST NVD 描述，當安裝了 optional zimbra-snmp 套件且啟用 SNMP 通知時，由於在處理不可信輸入時缺乏適當的清理（improper sanitization），未經身份驗證的攻擊者可以發送特製的 SMTP 請求，從而執行任意作業系統指令，且執行權限為 Zimbra user。\nZimbra 已於上月發布版本 10.1.20 修補此問題。CERT Polska 呼籲用戶檢查 /var/log/zimbra.log 檔案，並檢查 /opt/zimbra/jetty/webapps/、/opt/zimbra/jetty_base/webapps/ 和 /tmp/ 目錄下過去 30 天內創建的檔案，以尋找入侵跡象。\n此外，文章提及 Zimbra 曾遭受其他攻擊，包括利用 CVE-2025-66376 漏洞，透過惡意 JavaScript 載荷 ZimReaper 竊取電子郵件和敏感資料。",
    tags: ["Zimbra Collaboration (ZCS)", "CVE-2026-73570", "命令注入", "遠端代碼執行", "SNMP", "CERT Polska"],
    title_en: "Zimbra Collaboration (ZCS) has Remote Code Execution Vulnerability CVE-2026-73570; CERT Polska Warns of Active Exploitation",
    summary_en: "The Polish Computer Emergency Response Team (CERT Polska) warns that a patched Zimbra Collaboration (ZCS) vulnerability, CVE-2026-73570, is currently being actively exploited in the wild. This vulnerability is a command injection type, which can lead to Remote Code Execution (RCE). According to the NIST NVD description, when the optional zimbra-snmp package is installed and SNMP notifications are enabled, an unauthenticated attacker can send a specially crafted SMTP request, due to improper sanitization when processing untrusted input, thereby executing arbitrary operating system commands with the Zimbra user's privileges. Zimbra released version 10.1.20 last month to fix this issue. CERT Polska urges users to check the /var/log/zimbra.log file, and to examine files created in the past 30 days within the /opt/zimbra/jetty/webapps/, /opt/zimbra/jetty_base/webapps/, and /tmp/ directories, to look for signs of intrusion. Furthermore, the article mentions that Zimbra has been subjected to other attacks, including the exploitation of CVE-2025-66376, which used the malicious JavaScript payload ZimReaper to steal emails and sensitive data.",
    tags_en: ["Zimbra Collaboration (ZCS)", "CVE-2026-73570", "Command Injection", "Remote Code Execution", "SNMP", "CERT Polska"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/hackers-target-zimbra-servers-in-active-exploitation-campaign", lang: "EN" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/attackers-exploit-zimbra-snmp-flaw-for.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-063",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露「殭屍卡」攻擊：可透過修改NFC訊號讓過期Visa卡進行實體消費",
    summary: "麻省大學阿默斯特分校的研究人員展示了一種名為「殭屍卡」（Zombie Card）的攻擊手法，能夠在實體店面消費時，透過修改近場通訊（NFC）讀取到的過期Visa非接觸式信用卡，使其看似有效。此攻擊無需破壞卡片本身的密碼學保護，僅需物理接觸過期卡片或持續的NFC近距離訊號，並需要一個位於卡片與POS終端機之間的「中間人」（MitM）中繼設備。攻擊的成功條件包括帳戶仍保持開放，且發卡銀行未在授權過程中獨立檢查卡片到期日。研究發現，攻擊者只需修改終端機讀取的應用程式到期日（Application Expiration Date，TLV tag 5F24），而無需觸及卡片追蹤資料（Track 2 Equivalent Data，tag 57）。由於Visa的Kernel 3未要求這兩個到期日必須一致，且終端機驗證的fDDA簽名完全排除5F24，使得修改的到期日可以欺騙POS系統。雖然本文未公開CVSS分數，但研究指出，攻擊者可以將到期日設定為任何未來日期，且卡片的私鑰本身不包含到期概念。研究建議，應加強POS終端機對多個到期日資訊的交叉驗證，並考慮實施如Relay Resistance Protocol (RRP) 等機制，以防範此類訊號篡改。",
    tags: ["Visa", "NFC", "EMV", "POS終端機", "殭屍卡", "中間人攻擊"],
    title_en: "Research Uncovers 'Zombie Card' Attack: Allowing Physical Purchases with Modified NFC Signals from Expired Visa Cards",
    summary_en: "Researchers from Amherst College, University of Massachusetts, demonstrated an attack technique called 'Zombie Card,' which allows an expired Visa contactless credit card to appear valid during physical retail purchases by modifying the Near Field Communication (NFC) signals read. This attack does not require breaking the card's cryptographic protection; it only requires physical contact with the expired card or a sustained NFC near-field signal, and necessitates a 'Man-in-the-Middle' (MitM) relay device positioned between the card and the Point-of-Sale (POS) terminal. The attack is successful if the account remains open and the issuing bank does not independently verify the card's expiration date during the authorization process. The research found that attackers only need to modify the Application Expiration Date (TLV tag 5F24) read by the terminal, without needing to tamper with the Track 2 Equivalent Data (tag 57). Because Visa's Kernel 3 does not require these two expiration dates to match, and since the fDDA signature verified by the terminal completely excludes 5F24, the modified expiration date can deceive the POS system. Although this article does not disclose a CVSS score, the research indicates that attackers can set the expiration date to any future date, and the card's private key itself does not contain an expiration concept. The research recommends strengthening POS terminals' cross-validation of multiple expiration date pieces of information and considering implementing mechanisms such as Relay Resistance Protocol (RRP) to prevent this type of signal tampering.",
    tags_en: ["Visa", "NFC", "EMV", "POS Terminal", "Zombie Card", "Man-in-the-Middle Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/zombie-card-attack-can-revive-expired.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-064",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露「CDN Tsunami」攻擊：利用 HTTP/3 轉換機制對源站伺服器造成高倍率 DoS 攻擊",
    summary: "資安研究人員揭露了一系列名為「CDN Tsunami」的兩類拒絕服務（DoS）攻擊，該攻擊利用大型內容傳遞網路（CDN）將客戶端接收的 HTTP/3 流量轉換為傳輸至源站伺服器的 HTTP/1.1 請求的機制。攻擊的本質在於這種轉換過程，特別是 QPACK 標頭壓縮格式的擴展，導致低頻寬的攻擊請求可以被放大高達 350 倍，對源站伺服器造成極大的負載。攻擊者可以利用這種「部署落差」：CDN 端與瀏覽器使用 HTTP/3，但與後方的源站伺服器使用 HTTP/1.1。具體而言，攻擊包括 HTTP/3 頻寬放大（HBA）和 HTTP/3 連線放大（HCA）。受影響的 CDN 服務商包括 Alibaba、Baidu、Cloudflare、Amazon CloudFront、Fastly 和 Tencent。雖然目前尚未有 CVE 編號或野外攻擊報告，但研究人員指出，各 CDN 必須在邊緣層面實施緩解措施，例如限制 QPACK 動態表單個標頭欄位的大小，或限制單一動態表目可被參考的次數，以防止攻擊放大。建議所有使用 HTTP/3 的網站，應密切關注 CDN 服務商的修補公告，並確保 CDN 邊緣層的配置達到最新的安全標準。",
    tags: ["HTTP/3", "CDN", "DoS 攻擊", "QPACK", "頻寬放大", "Cloudflare", "Amazon CloudFront"],
    title_en: "Research Uncovers 'CDN Tsunami' Attack: High-Multiplicity DoS Attack on Origin Servers Using HTTP/3 Conversion Mechanisms",
    summary_en: "Cybersecurity researchers have revealed two types of Denial-of-Service (DoS) attacks dubbed 'CDN Tsunami.' These attacks exploit the mechanism by which large Content Delivery Networks (CDNs) convert HTTP/3 traffic received from clients into HTTP/1.1 requests transmitted to the origin server. The core of the attack lies in this conversion process, particularly the extension of the QPACK header compression format, which allows low-bandwidth attack requests to be amplified up to 350 times, placing immense load on the origin server. Attackers can exploit this 'deployment disparity': the CDN communicates with the browser using HTTP/3, but with the backend origin server using HTTP/1.1. Specifically, the attacks include HTTP/3 Bandwidth Amplification (HBA) and HTTP/3 Connection Amplification (HCA). Affected CDN providers include Alibaba, Baidu, Cloudflare, Amazon CloudFront, Fastly, and Tencent. Although there are currently no CVE IDs or reports of wild attacks, researchers point out that CDNs must implement mitigation measures at the edge layer, such as limiting the size of individual header fields in the QPACK dynamic table, or restricting the number of times a single dynamic table entry can be referenced, to prevent attack amplification. All websites using HTTP/3 are advised to closely monitor CDN provider patch announcements and ensure that the CDN edge layer configuration meets the latest security standards.",
    tags_en: ["HTTP/3", "CDN", "DoS Attack", "QPACK", "Bandwidth Amplification", "Cloudflare", "Amazon CloudFront"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/cdn-tsunami-attack-abuses-http3.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-065",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型 Android 惡意軟體 Manic 威脅分析：針對銀行、政府與通訊服務進行數據竊取",
    summary: "安全公司 ThreatFabric 發布報告指出，一種代號為 Manic 的新型 Android 惡意軟體，正積極鎖定烏克蘭、俄羅斯及歐洲的銀行、政府身份服務、金融科技和加密貨幣機構。Manic 結合了銀行詐騙惡意軟體和行動間諜軟體的特性，目標是竊取用戶的財務活動、通訊記錄和實時位置。該惡意軟體透過偽裝的應用程式（如 tech.intel.dialer.updater, org.honor.secure.helper 等）分發，並濫用 Android 的無障礙服務和通知權限來實現深度監控。其攻擊能力包括攔截鍵盤輸入、記錄 PIN 碼（透過透明疊層），監控螢幕、竊取聯絡人、通訊記錄，甚至能透過 WebRTC 進行遠端設備監控。更令人擔憂的是，Manic 引入了新穎的 Wi-Fi Mesh 數據中繼機制，允許受感染設備透過附近其他已連網的設備，將竊取的數據傳輸給攻擊者，即使源設備離線也能維持數據外洩。該惡意軟體活動可追溯至 2026 年 2 月，持續不斷進化，顯示出極高的複雜度和持久性。",
    tags: ["Manic", "Android 惡意軟體", "數據外洩", "Wi-Fi Mesh", "行動間諜軟體", "PIN 碼竊取"],
    title_en: "Analysis of New Android Malware 'Manic': Data Theft Targeting Banks, Governments, and Telecom Services",
    summary_en: "A report released by security company ThreatFabric indicates that a new Android malware, codenamed Manic, is actively targeting banks, government identity services, fintech, and cryptocurrency institutions in Ukraine, Russia, and Europe. Manic combines the characteristics of banking trojans and mobile spyware, aiming to steal users' financial activities, communication records, and real-time location. The malware is distributed through disguised applications (such as tech.intel.dialer.updater, org.honor.secure.helper, etc.) and exploits Android's accessibility and notification permissions to achieve deep monitoring. Its capabilities include intercepting keystrokes, recording PIN codes (via transparent overlays), monitoring the screen, stealing contacts and communication logs, and even performing remote device monitoring through WebRTC. More concerning is that Manic introduces a novel Wi-Fi Mesh data relay mechanism, allowing infected devices to transmit stolen data to attackers through other nearby connected devices, maintaining data exfiltration even if the source device is offline. The activity of this malware can be traced back to February 2026, showing continuous evolution and extremely high complexity and persistence.",
    tags_en: ["Manic", "Android Malware", "Data Leakage", "Wi-Fi Mesh", "Mobile Spyware", "PIN Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/manic-android-malware-exfiltrates-data.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-066",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "NASA AMMOS 工具箱 AIT-GUI 存在未經認證的命令注入漏洞，可讓攻擊者發送任意指令",
    summary: "資安研究機構 Cycode 揭露了 NASA/JPL 開源 AMMOS Instrument Toolkit 的瀏覽器操作控制台 AIT-GUI，存在一系列的漏洞鏈。該漏洞鏈被評為 CVSS v3.1 分數 9.4，允許未經認證的攻擊者向軟體的太空船和儀器命令匯流排發送任意指令。受影響版本為 AIT-GUI 2.5.1 及更早版本，修復版本為 2.5.2。\n\n漏洞的本質在於 AIT-GUI 的 Web 伺服器預設綁定到 0.0.0.0 的 8080 埠，且其命令、腳本和序列路徑缺乏基於憑證的認證或授權，也沒有實作跨站請求偽造（CSRF）保護。雖然路徑會透過 Session Cookie 進行保護，但攻擊者只需請求根頁面即可在無需憑證的情況下獲取 Session Cookie。\n\n攻擊者可利用此漏洞鏈，透過 POST /cmd、POST /script/run 和 POST /seq 等路徑，發送任意儀器和太空船指令，甚至執行路徑遍歷（path traversal）的伺服器端腳本。Cycode 指出，即使修補版本 2.5.2 限制了監聽主機和阻止了跨站瀏覽器請求，但根路徑仍可為任何請求發出 Session Cookie，且命令路徑仍接受帶有該 Cookie 的任何請求，因此該漏洞鏈仍未完全修復。",
    tags: ["NASA", "JPL", "AIT-GUI", "AMMOS Instrument Toolkit", "CVSS v3.1", "命令注入", "未經認證"],
    title_en: "NASA AMMOS Toolkit AIT-GUI Contains Unauthenticated Command Injection Vulnerability Allowing Arbitrary Command Execution",
    summary_en: "Security research firm Cycode has disclosed a series of vulnerabilities in the browser-based control console, AIT-GUI, of the open-source AMMOS Instrument Toolkit used by NASA/JPL. This vulnerability chain is rated CVSS v3.1 score 9.4, allowing unauthenticated attackers to send arbitrary commands to the software's spacecraft and instrument command bus. Affected versions are AIT-GUI 2.5.1 and earlier, with the patched version being 2.5.2. The core vulnerability lies in the fact that AIT-GUI's web server defaults to binding to port 8080 on 0.0.0.0, and its commands, scripts, and serial paths lack credential-based authentication or authorization, and do not implement Cross-Site Request Forgery (CSRF) protection. Although the paths are protected by a Session Cookie, an attacker only needs to request the root page to obtain a Session Cookie without credentials. Attackers can exploit this vulnerability chain to send arbitrary instrument and spacecraft commands via paths such as POST /cmd, POST /script/run, and POST /seq, and even execute server-side scripts using path traversal. Cycode points out that even though the patched version 2.5.2 restricts the listening host and prevents cross-site browser requests, the root path can still issue a Session Cookie for any request, and the command path still accepts any request containing that Cookie, meaning the vulnerability chain is not fully remediated.",
    tags_en: ["NASA", "JPL", "AIT-GUI", "AMMOS Instrument Toolkit", "CVSS v3.1", "Command Injection", "Unauthenticated"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/nasa-ait-gui-flaws-could-let.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-067",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "分析 ToxicPanda 2.0 與 GoldDigger 惡意程式：深入了解 Android 設備的權限濫用與金融詐騙威脅",
    summary: "資安研究人員揭露了兩款惡意 Android 程式：ToxicPanda 2.0 和 GoldDigger。ToxicPanda 2.0 透過濫用 Android 無障礙服務（accessibility service），擴大了其目標範圍，可針對超過 140 個銀行和加密貨幣應用程式，並具備更複雜的憑證竊取機制。新版本還能利用假疊層（overlay）竊取鎖定螢幕密碼，並透過模擬 ADB 漏洞提升權限，實現 Shell 級別存取。\n\nGoldDigger 則被歸因於 GoldFactory，主要針對南非和英國的用戶，偽裝成航空公司或零售商應用程式。它利用「dpt-shell」等複雜打包器進行混淆，並能模擬用戶互動（如輸入文字、點擊按鈕），從銀行應用程式發起詐騙交易。兩款惡意程式都透過 WebSocket 連線與 C2 伺服器通訊，並能收集聯絡人、簡訊、錄音/錄影，甚至透過 RTMP 串流實時傳輸給攻擊者。\n\n為防禦這些威脅，建議用戶審查並移除可疑應用程式，審核應用程式權限，僅從可信來源下載應用程式，並為所有線上帳戶啟用雙因素驗證（2FA）。",
    tags: ["ToxicPanda", "GoldDigger", "Android Malware", "Accessibility Service", "金融詐騙", "C2", "Android Debug Bridge"],
    title_en: "Analysis of ToxicPanda 2.0 and GoldDigger Malware: Understanding Android Device Permission Abuse and Financial Fraud Threats",
    summary_en: "Cybersecurity researchers have exposed two malicious Android applications: ToxicPanda 2.0 and GoldDigger. ToxicPanda 2.0 expands its scope by abusing Android accessibility services, targeting over 140 banks and cryptocurrency applications, and featuring more sophisticated credential theft mechanisms. The new version can also steal lock screen passwords using fake overlays and elevate privileges by simulating ADB vulnerabilities, achieving shell-level access.\n\nGoldDigger, attributed to GoldFactory, primarily targets users in South Africa and the UK, disguised as airline or retailer applications. It uses complex packers like \"dpt-shell\" for obfuscation and can simulate user interactions (such as typing text or clicking buttons) to initiate fraudulent transactions from banking applications. Both malicious programs communicate with C2 servers via WebSocket connections and can collect contacts, SMS messages, audio/video recordings, and even stream them in real-time to attackers via RTMP.\n\nTo defend against these threats, users are advised to review and remove suspicious applications, audit application permissions, download applications only from trusted sources, and enable two-factor authentication (2FA) for all online accounts.",
    tags_en: ["ToxicPanda", "GoldDigger", "Android Malware", "Accessibility Service", "Financial Fraud", "C2", "Android Debug Bridge"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/toxicpanda-20-and-golddigger-expand.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-068",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "40個偽裝成Web3工具的Firefox擴充功能，實施多種錢包竊取攻擊",
    summary: "安全研究團隊 Socket Threat Research 發現，一系列包含 40 個惡意 Mozilla Firefox 擴充功能，偽裝成 OKX、Rabby Wallet、TronLink 等知名 Web3 產品，旨在竊取用戶的加密貨幣錢包資訊。這些擴充功能屬於一個名為 Offside Wallet Theft Factory 的大規模活動，據信自 2026 年 3 月開始活躍。研究指出，這些惡意擴充功能採用了多種竊取機制：部分直接透過 Cloudflare Workers 竊取恢復短語和私鑰；另有修改版建置的擴充功能在本地加密前外洩序列化金鑰環；還有部分透過硬編碼的 C2 基礎設施竊取帳號密碼和剪貼簿資料。攻擊者利用了擴充功能生命週期特點，先以看似無害的體育比分或工具外觀進入市場，隨後再轉變為竊取錢包的惡意程式。攻擊者透過輪換名稱、重複使用現有擴充功能身份，使得惡意活動的發布成本極低且可擴展。",
    tags: ["Mozilla Firefox", "Web3", "擴充功能", "錢包竊取", "C2", "Offside Wallet Theft Factory"],
    title_en: "40 Firefox Extensions Disguised as Web3 Tools Implement Various Wallet Theft Attacks",
    summary_en: "Security research team Socket Threat Research discovered a series of 40 malicious Mozilla Firefox extensions disguised as popular Web3 products like OKX, Rabby Wallet, and TronLink, aiming to steal users' cryptocurrency wallet information. These extensions are part of a large-scale operation called Offside Wallet Theft Factory, believed to have been active since March 2026. The research points out that these malicious extensions employ multiple theft mechanisms: some directly steal recovery phrases and private keys via Cloudflare Workers; others leak serialized keyrings before local encryption through modified builds; and some steal account passwords and clipboard data via hardcoded C2 infrastructure. The attackers exploited the lifecycle characteristics of extensions, initially entering the market with seemingly harmless appearances like sports scores or utility tools, before transforming into malicious wallet stealers. By rotating names and reusing existing extension identities, the attackers kept the cost of deploying the malicious activity extremely low and highly scalable.",
    tags_en: ["Mozilla Firefox", "Web3", "Extensions", "Wallet Theft", "C2", "Offside Wallet Theft Factory"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/40-malicious-firefox-extensions-pose-as.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-069",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Elementor Pro 插件曝出致命漏洞 CVE-2026-32475，可讓網站執行遠端程式碼攻擊",
    summary: "資安公司 Patchstack 揭露 Elementor Pro WordPress 插件存在一項關鍵漏洞 CVE-2026-32475。此漏洞影響 Elementor Pro 4.2.2 版本之前的版本，源於其 File Upload 模組。漏洞的根源在於檔案驗證與處理流程的邏輯不一致，當處理帶有空檔名（empty filename）的多部分上傳（multipart upload）時，攻擊者可以利用此差異。攻擊者可透過精心設計的包含空檔名和惡意 PHP Payload 的多部分上傳，使驗證程序在檢查第一個空檔名部分後提前退出，從而跳過對後續惡意程式碼的檢查。隨後，處理程序會將第二部分的惡意 PHP 程式碼移動到網站的公共目錄（wp-content/uploads/elementor/forms/）。一旦攻擊者透過時間暴力破解或自動回覆郵件等方式確定了 Payload 的 URL，並觸發該 URL，伺服器上的 PHP 解譯器將執行其內容，導致網站權限下任意程式碼執行。Elementor 警告，僅使用啟用檔案上傳功能且開啟多檔案上傳選項的 Elementor Pro 表單網站受影響。修復建議是立即更新至最新版 Elementor Pro，並徹底檢查 wp-content/uploads/elementor/forms/ 目錄，尋找可疑的 PHP 或其他惡意檔案。",
    tags: ["Elementor Pro", "WordPress", "CVE-2026-32475", "RCE", "檔案上傳", "WordPress 插件"],
    title_en: "Elementor Pro Plugin Exposed to Critical Vulnerability CVE-2026-32475, Allowing Remote Code Execution Attack",
    summary_en: "Security firm Patchstack has revealed a critical vulnerability, CVE-2026-32475, in the Elementor Pro WordPress plugin. This vulnerability affects versions prior to Elementor Pro 4.2.2 and originates in its File Upload module. The root cause lies in a logical inconsistency in the file validation and processing workflow. When handling multipart uploads with an empty filename, an attacker can exploit this discrepancy. By using a carefully crafted multipart upload containing an empty filename and a malicious PHP payload, the attacker can cause the validation process to prematurely exit after checking the first empty filename part, thereby skipping the check for subsequent malicious code. Subsequently, the processing routine moves the malicious PHP code from the second part to the website's public directory (wp-content/uploads/elementor/forms/). Once an attacker determines the payload's URL—for example, through time-based brute-forcing or automated email replies—and triggers that URL, the PHP interpreter on the server executes its content, leading to arbitrary code execution under the website's permissions. Elementor warns that only Elementor Pro form websites that have file upload functionality enabled and multi-file upload option activated are affected. The recommended fix is to immediately update to the latest version of Elementor Pro and thoroughly check the wp-content/uploads/elementor/forms/ directory for suspicious PHP or other malicious files.",
    tags_en: ["Elementor Pro", "WordPress", "CVE-2026-32475", "RCE", "File Upload", "WordPress Plugin"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/elementor-pro-flaw-could-let.html", lang: "EN" },
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/critical-elementor-pro-bug-exposes-wordpress-sites-to-rce-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260820-070",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI強化網路釣魚攻擊難度激增，MSP應從監控行為與端點活動防禦",
    summary: "隨著AI技術的應用，網路釣魚（Phishing）攻擊已從傳統郵件過濾器難以攔截的層級，進化為高度個人化、難以察覺的威脅。攻擊者利用AI掃描公開資料（如LinkedIn），能快速生成看似來自信任同事或供應商的郵件，並透過「多態性網路釣魚」（polymorphic phishing）不斷改變郵件特徵以規避傳統郵件閘道。若使用者點擊惡意連結，攻擊者能迅速竊取Session Token，並在後端環境內進行橫向移動。因此，僅依賴郵件過濾已不足夠。為有效防禦，MSP應轉向「行為監控」與「異常偵測」，重點監測帳戶行為異常，例如：在短時間內從不同國家登入（Impossible Travel）、帳戶突然建立外部轉寄規則、或使用者未啟動但持續收到MFA提示（MFA fatigue）。此外，必須將身分驗證、電子郵件和端點活動進行關聯分析，才能在攻擊擴散前及時發現並隔離受損端點，縮短攻擊者的駐留時間。",
    tags: ["AI Phishing", "MSP", "行為分析", "多態性網路釣魚", "身份監控", "端點防禦"],
    title_en: "AI Intensifies Phishing Attacks, Requiring MSPs to Focus on Behavioral Monitoring and Endpoint Defense",
    summary_en: "With the application of AI technology, phishing attacks have evolved from a level difficult for traditional email filters to intercept, into highly personalized and inconspicuous threats. Attackers use AI to scan public data (such as LinkedIn) to rapidly generate emails that appear to come from trusted colleagues or vendors, and they employ 'polymorphic phishing' by constantly altering email characteristics to evade traditional email gateways. If a user clicks a malicious link, attackers can quickly steal Session Tokens and perform lateral movement within the backend environment. Therefore, relying solely on email filtering is no longer sufficient. For effective defense, MSPs must shift towards 'behavioral monitoring' and 'anomaly detection,' focusing on monitoring abnormal account behavior, such as: logging in from different countries in a short period (Impossible Travel), the sudden creation of external forwarding rules on an account, or receiving MFA prompts even when the user has not initiated a login (MFA fatigue). Furthermore, correlating identity verification, email, and endpoint activities is essential to detect and isolate compromised endpoints in a timely manner before the attack spreads, thereby reducing the attacker's dwell time.",
    tags_en: ["AI Phishing", "MSP", "Behavioral Analysis", "Polymorphic Phishing", "Identity Monitoring", "Endpoint Defense"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/how-msps-can-catch-phishing-attacks-email-filters-miss", lang: "EN" }
    ]
  },
  {
    id: "20260820-071",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "OpenStack Aodh與Watcher存在CVE-2026-76878漏洞：非管理員可跨專案列覽警報及繞過Webhook授權",
    summary: "安全研究人員報告發現OpenStack的Aodh和Watcher服務存在CVE-2026-76878漏洞。Aodh在列覽警報API時，若使用`all_projects`參數並設為false值，未強制執行專案範圍限制。這使得僅擁有讀取權限的非管理員用戶，即使不屬於目標專案，仍可列出其他專案的警報元數據，包括Webhook動作URL、信號端點和專案識別碼，影響所有Aodh部署。此外，Watcher服務在Webhook觸發端點缺乏授權檢查。任何已驗證的用戶，只要從Aodh洩露的警報元數據中獲取到Webhook URL，便可忽略自身專案或角色限制，啟動任意的`EVENT`審計和相關的行動計畫，影響所有Watcher部署。建議用戶應立即修補受影響的Aodh版本（>=10.0.0 <20.0.1, ==21.0.0, ==22.0.0）和Watcher版本（>=4.0.0 <14.1.2, >=15.0.0 <15.1.2, >=16.0.0 <16.0.2）。",
    tags: ["OpenStack", "Aodh", "Watcher", "CVE-2026-76878", "Webhook", "跨專案漏洞"],
    title_en: "OpenStack Aodh and Watcher contain CVE-2026-76878 vulnerability: Non-admin users can list alerts across projects and bypass Webhook authorization",
    summary_en: "Security researchers have reported a vulnerability, CVE-2026-76878, in OpenStack's Aodh and Watcher services. When listing alerts via the Aodh API, if the `all_projects` parameter is used and set to `false`, the service fails to enforce project-level scope restrictions. This allows non-administrator users with only read permissions to list alert metadata from other projects, including Webhook action URLs, signal endpoints, and project IDs, affecting all Aodh deployments. Furthermore, the Watcher service lacks authorization checks at the Webhook trigger endpoint. Any authenticated user who obtains a Webhook URL from the leaked Aodh metadata can bypass their own project or role restrictions to trigger arbitrary `EVENT` audits and related action plans, affecting all Watcher deployments. Users are advised to immediately patch the affected Aodh versions (>=10.0.0 <20.0.1, ==21.0.0, ==22.0.0) and Watcher versions (>=4.0.0 <14.1.2, >=15.0.0 <15.1.2, >=16.0.0 <16.0.2).",
    tags_en: ["OpenStack", "Aodh", "Watcher", "CVE-2026-76878", "Webhook", "Cross-project vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/21", lang: "EN" }
    ]
  },
  {
    id: "20260820-072",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ceph 服務修補多個認證漏洞：影響 OpenStack 服務，需升級 CephX 金鑰",
    summary: "Ceph 釋出 v20.2.4 和 v19.2.6 版本，修補了四個關鍵漏洞，包括 CVE-2025-30156、CVE-2026-39944、CVE-2026-50152 和 CVE-2026-54330。所有使用 CephX keyrings 的 OpenStack 服務（如 Nova、Cinder、Glance、Manila）均受影響。漏洞可能允許內部人員提升權限，例如在 OpenStack 環境中，如果租戶使用 Manila 搭配原生 CephFS，可能被利用。這些漏洞的根本原因包括硬編碼的初始化向量和缺乏 HMAC，允許攻擊者在未被偵測的情況下篡改票證權限。修補方案要求將 CephX key 升級至使用 AES256-CTS-HMAC-SHA384-192 (RFC 8009) 的新類型 aes256k。建議的修復措施包括：升級 Ceph 伺服器和客戶端，並重新建立所有 CephX 憑證。所有 OpenStack Nova guest 必須進行 Live Migration 或重啟，以載入新的 CephX key。",
    tags: ["Ceph", "OpenStack", "CVE-2025-30156", "CVE-2026-39944", "CVE-2026-50152", "CVE-2026-54330", "CephX", "認證漏洞"],
    title_en: "Ceph Patches Multiple Authentication Vulnerabilities: Affecting OpenStack Services, Requires CephX Key Upgrade",
    summary_en: "Ceph released versions v20.2.4 and v19.2.6, patching four critical vulnerabilities: CVE-2025-30156, CVE-2026-39944, CVE-2026-50152, and CVE-2026-54330. All OpenStack services utilizing CephX keyrings (such as Nova, Cinder, Glance, and Manila) are affected. The vulnerabilities could potentially allow internal personnel to escalate privileges; for example, in an OpenStack environment where a tenant uses Manila with native CephFS, exploitation might be possible. The root cause of these vulnerabilities includes hardcoded initialization vectors and lack of HMAC, allowing attackers to tamper with credential permissions without detection. The patch requires upgrading the CephX key to the new type, aes256k, which uses AES256-CTS-HMAC-SHA384-192 (RFC 8009). Recommended remediation steps include: upgrading both Ceph servers and clients, and re-establishing all CephX credentials. All OpenStack Nova guests must undergo Live Migration or reboot to load the new CephX key.",
    tags_en: ["Ceph", "OpenStack", "CVE-2025-30156", "CVE-2026-39944", "CVE-2026-50152", "CVE-2026-54330", "CephX", "Authentication Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/20", lang: "EN" }
    ]
  },
  {
    id: "20260820-073",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Kata Containers 發現 CVE-2026-77176：genpolicy 缺乏驗證導致容器掛載與儲存規則漏洞",
    summary: "Kata Containers 的安全團隊發現了一個名為 CVE-2026-77176 的漏洞。此漏洞存在於使用 genpolicy 進行機密容器（Confidential Containers）訪客保護的配置中。攻擊者若為惡意的主機操作員，可利用 genpolicy 對 CreateContainer 掛載和儲存規則驗證不足的缺陷。這使得攻擊者能夠將任意的容器根文件系統路徑掛載到敏感的主機位置，或提供任意內容，從而可能洩露機密資訊，或讓系統接受攻擊者控制的輸入。此問題已在 Kata Containers 的 4.1.0 版本中修復，預計將很快發布。建議使用者應儘速升級至修補後的版本，以避免遭受資料洩露或系統被惡意控制的風險。",
    tags: ["Kata Containers", "CVE-2026-77176", "genpolicy", "Confidential Containers", "容器安全", "掛載漏洞"],
    title_en: "Kata Containers Discovers CVE-2026-77176: genpolicy Lacks Validation Leading to Container Mount and Storage Rule Vulnerability",
    summary_en: "The security team at Kata Containers has discovered a vulnerability designated as CVE-2026-77176. This vulnerability exists in configurations utilizing genpolicy for Confidential Containers guest protection. A malicious host operator could exploit the insufficient validation of container mount and storage rules within genpolicy. This allows the attacker to mount an arbitrary container root filesystem path to a sensitive host location, or provide arbitrary content, potentially leading to confidential information leakage or allowing the system to accept attacker-controlled input. This issue has been patched in Kata Containers version 4.1.0 and is expected to be released soon. Users are advised to upgrade to the patched version immediately to mitigate the risk of data leakage or system compromise.",
    tags_en: ["Kata Containers", "CVE-2026-77176", "genpolicy", "Confidential Containers", "Container Security", "Mount Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/19", lang: "EN" }
    ]
  },
  {
    id: "20260820-074",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl 框架警告：Catalyst::Plugin::Static::Simple 存在 CVE-2026-15743 緩存標頭配置錯誤",
    summary: "Catalyst::Plugin::Static::Simple 函式庫的舊版本（透過 0.38）存在一個緩存配置錯誤，被分配了 CVE-2026-15743。此漏洞的根本問題在於其 _serve_static 方法會強制將 Cache-Control header 設定為 \"public\"，無法被覆寫。這會誤導代理伺服器（proxies）認為內容可以儲存在共享快取中，甚至可能在處理帶有 Authorization header 的其他用戶請求時重用這些內容，導致敏感資訊洩露。此問題屬於 CWE-524，即使用包含敏感資訊的快取。修復建議是應用官方修補程式，並根據需求配置預設的 Cache-Control。若無法立即修補，可透過修改 Catalyst 類別中 _serve_static 方法的 modifier 來覆寫 Cache-Control 或 Expires header。",
    tags: ["CVE-2026-15743", "Catalyst::Plugin::Static::Simple", "Perl", "緩存標頭", "CWE-524"],
    title_en: "Perl Framework Warning: Catalyst::Plugin::Static::Simple Has CVE-2026-15743 Cache Header Misconfiguration",
    summary_en: "Older versions of the Catalyst::Plugin::Static::Simple library (via 0.38) contain a cache configuration error, assigned CVE-2026-15743. The root cause of this vulnerability is that its _serve_static method forces the Cache-Control header to \"public,\" which cannot be overwritten. This misleads proxy servers into believing that content can be stored in a shared cache, potentially reusing this content when processing other user requests that include an Authorization header, leading to sensitive information leakage. This issue falls under CWE-524, Improperly Configuring Cache. The recommended fix is to apply the official patch and configure the default Cache-Control as needed. If immediate patching is not possible, the Cache-Control or Expires header can be overwritten by modifying the modifier of the _serve_static method within the Catalyst class.",
    tags_en: ["CVE-2026-15743", "Catalyst::Plugin::Static::Simple", "Perl", "Cache Header", "CWE-524"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/18", lang: "EN" }
    ]
  },
  {
    id: "20260820-075",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在 CVE-2026-63044 漏洞：認證用戶可執行 SSRF 攻擊",
    summary: "Apache InLong 產品系列存在一項嚴重的 Server-Side Request Forgery (SSRF) 漏洞，編號為 CVE-2026-63044。該漏洞影響版本範圍為 2.0.0 至 2.4.0 之前。攻擊者僅需具備任何認證用戶權限（無需管理員角色），即可利用此漏洞強制 InLong Manager 伺服器向任意內部主機和埠發起 HTTP 請求或 TCP 連線。這可能導致內部網路資源洩露或遭受未經授權的攻擊。開發團隊建議受影響用戶應立即升級至 Apache InLong 2.4.0 版本，或採用相關的程式碼修補方案來修復此安全問題。",
    tags: ["Apache InLong", "CVE-2026-63044", "SSRF", "資安漏洞", "內部網路"],
    title_en: "Apache InLong has CVE-2026-63044 vulnerability: Authenticated users can execute SSRF attacks",
    summary_en: "A critical Server-Side Request Forgery (SSRF) vulnerability, identified as CVE-2026-63044, exists within the Apache InLong product series. This vulnerability affects versions prior to 2.4.0 (specifically, versions 2.0.0 through 2.4.0). An attacker only needs any authenticated user privileges (no administrator role required) to exploit this flaw. Exploitation allows the attacker to force the InLong Manager server to initiate HTTP requests or TCP connections to arbitrary internal hosts and ports. This could potentially lead to the leakage of internal network resources or unauthorized attacks. The development team recommends that affected users immediately upgrade to Apache InLong 2.4.0 or apply the relevant code patch to remediate this security issue.",
    tags_en: ["Apache InLong", "CVE-2026-63044", "SSRF", "Vulnerability", "Internal Network"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/17", lang: "EN" }
    ]
  },
  {
    id: "20260820-076",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在路徑穿越漏洞 (CVE-2026-63043)，可能導致任意檔案讀取",
    summary: "Apache InLong 軟體版本 2.0.0 至 2.4.0 之前，存在一個相對路徑穿越 (Relative Path Traversal) 的漏洞，編號為 CVE-2026-63043。此漏洞允許攻擊者透過未經驗證的檔案來源路徑，在 Agent 主機的檔案系統上執行任意檔案讀取。用戶應立即升級至 Apache InLong 2.4.0 或採用相關的修補程式（如 pull/12146）來修復此安全問題。本漏洞的修復建議是升級版本，以防止資料外洩風險。",
    tags: ["Apache InLong", "CVE-2026-63043", "路徑穿越", "檔案讀取", "Agent"],
    title_en: "Apache InLong Vulnerable to Path Traversal Flaw (CVE-2026-63043), Potentially Leading to Arbitrary File Read",
    summary_en: "In Apache InLong software versions prior to 2.4.0, a Relative Path Traversal vulnerability, identified as CVE-2026-63043, exists. This vulnerability allows an attacker to perform arbitrary file reading on the agent host's file system using unvalidated file source paths. Users should immediately upgrade to Apache InLong 2.4.0 or apply the relevant patch (such as pull/12146) to remediate this security issue. The recommended fix for this vulnerability is a version upgrade to prevent data leakage risks.",
    tags_en: ["Apache InLong", "CVE-2026-63043", "Path Traversal", "File Read", "Agent"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/16", lang: "EN" }
    ]
  },
  {
    id: "20260820-077",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在未經授權的 DataNode 管理端點漏洞 (CVE-2026-63042)",
    summary: "Apache InLong 在其 DataNode 管理端點存在一個權限控制缺失的漏洞，編號為 CVE-2026-63042。此漏洞影響 Apache InLong 版本 2.0.0 至 2.4.0 之前的所有版本。攻擊者只需能夠成功通過身份驗證登入管理介面，即可利用此漏洞創建、修改或刪除 Data Node 的定義，可能導致資料系統的配置被惡意更改或癱瘓。建議所有用戶應立即升級至 Apache InLong 2.4.0 或採用相關的修補程式進行修復，以確保系統的資料完整性和可用性。",
    tags: ["Apache InLong", "CVE-2026-63042", "權限控制缺失", "DataNode", "資安漏洞"],
    title_en: "Apache InLong DataNode Management Endpoint Vulnerability (CVE-2026-63042)",
    summary_en: "Apache InLong contains an authorization control missing vulnerability in its DataNode management endpoint, identified as CVE-2026-63042. This vulnerability affects all versions of Apache InLong prior to 2.4.0, specifically versions 2.0.0 through 2.4.0. An attacker who can successfully authenticate to the management interface can exploit this vulnerability to create, modify, or delete Data Node definitions, potentially leading to malicious alteration or paralysis of the data system's configuration. All users are advised to immediately upgrade to Apache InLong 2.4.0 or apply the relevant patch to ensure the data integrity and availability of the system.",
    tags_en: ["Apache InLong", "CVE-2026-63042", "Authorization Control Missing", "DataNode", "Security Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/15", lang: "EN" }
    ]
  },
  {
    id: "20260820-078",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在未經授權的 StreamSource 刪除漏洞 (CVE-2026-63040)",
    summary: "Apache InLong 產品在 StreamSource 功能中存在一個未經授權的刪除漏洞 (CVE-2026-63040)。該漏洞的影響範圍是所有已驗證的使用者，他們可以邏輯上刪除所有 StreamSource，因為 StreamSource 在執行此操作時缺乏權限檢查。受影響的版本為 Apache InLong 2.0.0 至 2.4.0 之前的所有版本。為了解決此問題，建議使用者升級至 Apache InLong 2.4.0 或手動套用相關的修補程式。本漏洞的修復資訊已在 Apache InLong 的官方渠道公布。",
    tags: ["Apache InLong", "CVE-2026-63040", "StreamSource", "權限控制", "資安漏洞"],
    title_en: "Apache InLong Contains Unauthorized StreamSource Deletion Vulnerability (CVE-2026-63040)",
    summary_en: "The Apache InLong product has an unauthorized deletion vulnerability (CVE-2026-63040) within its StreamSource functionality. This vulnerability affects all authenticated users, who can logically delete any StreamSource because the StreamSource lacks proper authorization checks when performing this action. Affected versions include all versions prior to Apache InLong 2.4.0. To resolve this issue, users are advised to upgrade to Apache InLong 2.4.0 or manually apply the relevant patch. Remediation information for this vulnerability has been published through official Apache InLong channels.",
    tags_en: ["Apache InLong", "CVE-2026-63040", "StreamSource", "Authorization Control", "Security Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/14", lang: "EN" }
    ]
  },
  {
    id: "20260820-079",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在 SQL Injection 漏洞：透過 MyBatis Dollar-Sign 插值機制可注入惡意 SQL 指令",
    summary: "資安研究人員發現 Apache InLong 存在一項中等嚴重度的 SQL Injection 漏洞，編號為 CVE-2026-63039。此漏洞源於其在 `AuditAlertRuleService` 中的不當處理，允許攻擊者透過未經驗證的 MyBatis Dollar-Sign 插值機制，將惡意字串值注入到 SQL 語句中，從而執行任意 SQL 指令。受影響的版本範圍為 Apache InLong 2.0.0 至 2.4.0 之前的所有版本。為修復此漏洞，建議使用者立即升級至 Apache InLong 2.4.0 或採用相關的程式碼修補方案。建議所有使用 Apache InLong 的用戶應儘速進行版本升級，以避免資料被未授權的 SQL 操作影響。",
    tags: ["Apache InLong", "CVE-2026-63039", "SQL Injection", "MyBatis", "資安漏洞", "InLong"],
    title_en: "Apache InLong Contains SQL Injection Vulnerability: Malicious SQL Commands Can Be Injected via MyBatis Dollar-Sign Interpolation Mechanism",
    summary_en: "Security researchers have discovered a medium-severity SQL Injection vulnerability in Apache InLong, designated as CVE-2026-63039. This vulnerability stems from improper handling within the `AuditAlertRuleService`, which allows an attacker to inject malicious string values into SQL statements through the unvalidated MyBatis Dollar-Sign interpolation mechanism, thereby executing arbitrary SQL commands. The affected version range is all versions prior to Apache InLong 2.4.0, from 2.0.0. Users are advised to immediately upgrade to Apache InLong 2.4.0 or apply the relevant code patch to fix this vulnerability. All users utilizing Apache InLong are recommended to upgrade their versions promptly to prevent data from being affected by unauthorized SQL operations.",
    tags_en: ["Apache InLong", "CVE-2026-63039", "SQL Injection", "MyBatis", "Security Vulnerability", "InLong"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/13", lang: "EN" }
    ]
  },
  {
    id: "20260820-080",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在 SQL Injection 漏洞：透過字串連接可注入任意 SQL 指令",
    summary: "Apache InLong 在處理 SQL 指令時，存在「不當中和特殊元素」的 SQL Injection 漏洞，CVE-2026-63038。此漏洞允許攻擊者透過 `dbName`、`tableName`、`schemaName` 和 `username` 等參數，注入任意的 SQL 程式碼。該問題影響範圍為 Apache InLong 從 2.0.0 版本至 2.4.0 之前的版本。為修復此漏洞，建議使用者立即升級至 Apache InLong 2.4.0 或採用相關的修補程式。建議使用者應儘快採取升級措施，以防止資料庫被未經授權的操作。",
    tags: ["Apache InLong", "CVE-2026-63038", "SQL Injection", "資料庫漏洞", "資安漏洞"],
    title_en: "Apache InLong has SQL Injection vulnerability: Arbitrary SQL commands can be injected via string concatenation",
    summary_en: "Apache InLong contains an SQL Injection vulnerability (CVE-2026-63038) due to failure to sanitize special elements when processing SQL commands. This vulnerability allows an attacker to inject arbitrary SQL code using parameters such as `dbName`, `tableName`, `schemaName`, and `username`. The affected versions of Apache InLong are those from 2.0.0 up to (but not including) 2.4.0. Users are advised to immediately upgrade to Apache InLong 2.4.0 or apply the relevant patch to remediate this vulnerability. Users should take prompt action to upgrade to prevent unauthorized database operations.",
    tags_en: ["Apache InLong", "CVE-2026-63038", "SQL Injection", "Database Vulnerability", "Security Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/12", lang: "EN" }
    ]
  },
  {
    id: "20260820-081",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在 SQL Injection 漏洞：未經身份驗證可攻擊 Manager OpenAPI 審計規則列表端點",
    summary: "Apache InLong 軟體在 Manager OpenAPI 的審計規則列表端點中存在一項 SQL Injection 漏洞，編號為 CVE-2026-63037。此漏洞屬於「不當中和 SQL 命令中使用的特殊元素」類型的安全缺陷，允許攻擊者在 ORDER BY 子句中執行 SQL 注入攻擊，目標是 Manager 後端資料庫。受影響的版本範圍為 Apache InLong 2.0.0 到 2.4.0 之前的所有版本。為修復此問題，建議使用者立即升級至 Apache InLong 2.4.0 或採用相關的修補程式。建議所有使用 Apache InLong 的用戶應儘速進行版本升級，以避免資料庫被未經授權的查詢或修改。",
    tags: ["Apache InLong", "CVE-2026-63037", "SQL Injection", "OpenAPI", "資安漏洞", "Manager"],
    title_en: "Apache InLong has SQL Injection Vulnerability: Unauthenticated Attack Possible on Manager OpenAPI Audit Rule List Endpoint",
    summary_en: "Apache InLong software contains an SQL Injection vulnerability in the Manager OpenAPI audit rule list endpoint, identified as CVE-2026-63037. This vulnerability is classified as an 'improper neutralization of special elements used in SQL commands' flaw, allowing an attacker to execute an SQL injection attack via the ORDER BY clause, targeting the Manager backend database. The affected version range is all versions prior to Apache InLong 2.4.0, from 2.0.0. Users are advised to immediately upgrade to Apache InLong 2.4.0 or apply the relevant patch to remediate this issue. All users utilizing Apache InLong should prioritize version upgrades to prevent unauthorized querying or modification of the database.",
    tags_en: ["Apache InLong", "CVE-2026-63037", "SQL Injection", "OpenAPI", "Vulnerability", "Manager"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/11", lang: "EN" }
    ]
  },
  {
    id: "20260820-082",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 存在 CVE-2026-63016 漏洞：普通使用者可創建新套件",
    summary: "Apache InLong 系統存在一項名為 CVE-2026-63016 的「未受控資源消耗」（Uncontrolled Resource Consumption）漏洞。此漏洞影響 Apache InLong 版本 2.0.0 至 2.4.0 之前的所有版本。攻擊者利用此漏洞，可能影響系統的運營配置，甚至允許上傳非官方的套件。本漏洞屬於中等（moderate）嚴重性。為修復此問題，建議使用者立即升級至 Apache InLong 2.4.0 版本，或採用相關的程式碼修補（cherry-pick）方案。",
    tags: ["Apache InLong", "CVE-2026-63016", "未受控資源消耗", "套件管理", "開源安全"],
    title_en: "Apache InLong has CVE-2026-63016 vulnerability: Ordinary users can create new packages",
    summary_en: "The Apache InLong system contains a vulnerability named CVE-2026-63016, classified as 'Uncontrolled Resource Consumption'. This vulnerability affects all versions of Apache InLong prior to 2.4.0, specifically versions 2.0.0 through 2.4.0. An attacker exploiting this vulnerability may impact the system's operational configuration, and could even allow the upload of non-official packages. This vulnerability is rated as moderate severity. To remediate this issue, users are advised to immediately upgrade to Apache InLong 2.4.0, or implement the relevant code patch (cherry-pick) solution.",
    tags_en: ["Apache InLong", "CVE-2026-63016", "Uncontrolled Resource Consumption", "Package Management", "Open Source Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/10", lang: "EN" }
    ]
  },
  {
    id: "20260820-083",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache InLong 曝 CVE-2026-63015：非模板負責人可查看模板資訊，建議升級至 2.4.0",
    summary: "Apache InLong 存在一項名為 CVE-2026-63015 的「未受控資源消耗」（Uncontrolled Resource Consumption）漏洞。此漏洞的影響範圍為 Apache InLong 版本 2.0.0 至 2.4.0 之前。攻擊者若為非模板負責人（Non-template responsible persons），可利用此漏洞查看敏感的模板資訊。此問題主要影響 InLong 系統的資訊安全，可能導致未授權的資料洩露。建議受影響的用戶應立即將 Apache InLong 升級至 2.4.0 版本，或採納相關的修補程式（cherry-pick）以解決此安全風險。本漏洞的修復資訊已在 Apache 的官方 GitHub Pull Request 中提供。",
    tags: ["Apache InLong", "CVE-2026-63015", "未受控資源消耗", "模板資訊洩露", "資安漏洞"],
    title_en: "Apache InLong Exposed to CVE-2026-63015: Non-template Responsible Persons Can View Template Information; Upgrade to 2.4.0 Recommended",
    summary_en: "Apache InLong contains a vulnerability named CVE-2026-63015, classified as 'Uncontrolled Resource Consumption.' This vulnerability affects Apache InLong versions prior to 2.4.0, specifically from 2.0.0 up to that point. An attacker, who is a non-template responsible person, can exploit this vulnerability to view sensitive template information. This issue primarily impacts the information security of the InLong system, potentially leading to unauthorized data leakage. Affected users are advised to immediately upgrade Apache InLong to version 2.4.0, or apply the relevant patch (cherry-pick) to mitigate this security risk. Remediation details for this vulnerability have been provided in the official Apache GitHub Pull Request.",
    tags_en: ["Apache InLong", "CVE-2026-63015", "Uncontrolled Resource Consumption", "Template Information Leakage", "Security Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/9", lang: "EN" }
    ]
  },
  {
    id: "20260820-084",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "rsyslog 強化 omfile 模組，修補 dynaFile 動態檔名處理的路徑限制風險",
    summary: "rsyslog 專案發布了 GHSA-xmp9-244p-5ggv 安全公告，針對 omfile 輸出模組中動態檔名（dynaFile）的處理機制進行強化。由於某些既有部署需要保留動態檔名的靈活性，因此無法完全限制在單一靜態基礎目錄。本次修補旨在增加預設的詞彙包含（lexical containment），當系統可以確定靜態基礎路徑時，提供額外的限制層級。對於需要保留 dynaFile 靈活性的用戶，新版本增加了明確的、針對每個動作的兼容性選擇（compatibility opt-in）。然而，若部署環境中可能受到不可信資料影響的動態檔名擴展，建議用戶應使用已文件化的安全路徑選項，例如 securepath，並搭配 secpath-drop 或 secpath-replace 策略，以建立可靠的安全邊界。開發者提醒，全面為所有舊版動態路徑語義建立沙箱極具挑戰性，建議用戶應立即更新以修補此路徑包含風險。",
    tags: ["rsyslog", "omfile", "GHSA-xmp9-244p-5ggv", "動態檔名", "路徑限制", "安全強化"],
    title_en: "rsyslog strengthens omfile module to patch path restriction risk in dynaFile dynamic filename handling",
    summary_en: "The rsyslog project has released the GHSA-xmp9-244p-5ggv security advisory, strengthening the handling mechanism for dynamic filenames (dynaFile) within the omfile output module. Because certain existing deployments require the flexibility of dynamic filenames, it is not possible to restrict them entirely to a single static base directory. This patch aims to add lexical containment by providing an additional layer of restriction when the system can determine a static base path. For users who need to retain dynaFile flexibility, the new version includes explicit, action-specific compatibility options (compatibility opt-in). However, for dynamic filenames in deployment environments that might be influenced by untrusted data, users are advised to use documented secure path options, such as securepath, combined with secpath-drop or secpath-replace strategies, to establish reliable security boundaries. Developers note that comprehensively sandboxing all legacy dynamic path semantics is highly challenging, and users are advised to update immediately to patch this path containment risk.",
    tags_en: ["rsyslog", "omfile", "GHSA-xmp9-244p-5ggv", "dynamic filename", "path restriction", "security enhancement"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/8", lang: "EN" }
    ]
  },
  {
    id: "20260820-085",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GNU Emacs 任意檔案開啟漏洞：可執行任意程式碼的資安警訊",
    summary: "資安研究員 Eshel Yaron 揭露了 GNU Emacs 的一個嚴重漏洞，該漏洞允許攻擊者透過開啟任意檔案來執行任意程式碼。此漏洞影響範圍涵蓋 Emacs 28.1 及更高版本。攻擊者已提供詳細的技術分析文章，並指出此問題與先前報告的 CVE-2024-53920 相關。為修復此漏洞，開發者已提供針對 Emacs 31 的 Workaround Patch，並在 Gentoo 等發行版中已將修復內容回溯至 28.2 版本。建議使用者應立即更新至修補後的版本，或考慮禁用檔案本地變數（file-local variables）作為臨時的緩解措施。由於此類漏洞的性質，使用者應保持警惕，特別是面對潛在的 LLM 相關攻擊風險。",
    tags: ["GNU Emacs", "任意程式碼執行", "CVE-2024-53920", "OSS 安全", "Emacs 28.1", "韌體漏洞"],
    title_en: "GNU Emacs Arbitrary File Opening Vulnerability: Security Alert Allowing Arbitrary Code Execution",
    summary_en: "Security researcher Eshel Yaron has disclosed a critical vulnerability in GNU Emacs, which allows an attacker to execute arbitrary code by opening any file. This vulnerability affects Emacs versions 28.1 and higher. The attacker has provided a detailed technical analysis, noting that this issue is related to the previously reported CVE-2024-53920. To remediate this vulnerability, developers have provided a Workaround Patch for Emacs 31, and the fix has been backported to version 28.2 in distributions like Gentoo. Users are advised to immediately update to the patched version, or consider disabling file-local variables as a temporary mitigation. Given the nature of such vulnerabilities, users should remain vigilant, especially regarding potential LLM-related attack risks.",
    tags_en: ["GNU Emacs", "Arbitrary Code Execution", "CVE-2024-53920", "OSS Security", "Emacs 28.1", "Firmware Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/20/7", lang: "EN" }
    ]
  },
  {
    id: "20260820-086",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳裁撤 VR 團隊，資源重心轉向 AI 穿戴裝置與空間運算",
    summary: "根據 AppleInsider 的報導，Apple 據傳已裁撤至少 60 名與其 VR 團隊（Apple Vision Group）相關的員工。此消息顯示 Apple 可能正在調整其產品開發的優先順序。儘管 Apple 尚未證實或對此報導發表評論，但報導指出，Apple 的資源正逐漸轉向 AI 驅動的智慧眼鏡等新類型穿戴裝置。Apple 的高層主管 Steve Sinclair 曾強調，空間運算仍處於「早期階段」，並指出 Vision Pro 是一個「非凡的產品」，並提到企業和醫療等領域的應用潛力。此外，Apple Vision Pro 近期經歷了 M5 晶片升級，提升了渲染像素和刷新率，但其價格也持續上漲。整體來看，Apple 的策略似乎是將核心資源從大型 VR 頭戴設備，轉移至更具 AI 整合性、更貼近日常生活的智慧眼鏡，以應對市場變化和技術發展趨勢。",
    tags: ["Apple", "Apple Vision Pro", "VR", "AI 穿戴裝置", "空間運算", "Apple Vision Group"],
    title_en: "Apple reportedly scales back VR team, refocusing resources on AI wearables and spatial computing",
    summary_en: "According to AppleInsider, Apple has reportedly laid off at least 60 employees associated with its VR team (Apple Vision Group). This news suggests that Apple may be adjusting its product development priorities. Although Apple has not confirmed the report or commented on it, the report indicates that Apple's resources are gradually shifting toward new types of wearable devices, such as AI-powered smart glasses. Apple executive Steve Sinclair previously emphasized that spatial computing is still in an \"early stage,\" noting that Vision Pro is an \"extraordinary product\" and mentioning its potential applications in enterprise and healthcare. Furthermore, the Apple Vision Pro recently underwent an M5 chip upgrade, enhancing rendering pixels and refresh rates, though its price continues to rise. Overall, Apple's strategy appears to be shifting core resources from large VR headsets to smart glasses that are more integrated with AI and closer to daily life, in response to market changes and technological development trends.",
    tags_en: ["Apple", "Apple Vision Pro", "VR", "AI wearables", "spatial computing", "Apple Vision Group"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/apple-reportedly-lays-off-60-vision-employees-amid-shifting-priorities", lang: "EN" }
    ]
  },
  {
    id: "20260820-087",
    trackers: ["os"],
    category: "Apple",
    title: "WhatsApp 正在擴展 Liquid Glass 設計，預計將應用介面視覺風格引入繪圖編輯器與影片播放器",
    summary: "WhatsApp 正在持續將其 Liquid Glass 的全新視覺設計，從最初的介面元素擴展到更多功能區塊。此設計風格最初於今年稍早推出，經過數月測試後，已初步應用於語音訊息播放器、訊息反應和上下文選單等部分。根據 WABetaInfo 的報告，最新的 iOS Beta 版本顯示，WhatsApp 正在準備將 Liquid Glass 的外觀和質感應用到繪圖編輯器（Drawing Editor）和影片播放器（Video Player）的進度條上。繪圖編輯器用於用戶在分享前註釋或編輯照片、影片和 GIF，未來其頂部按鈕將會更新以匹配 Liquid Glass 風格。影片播放器上的進度條也將會進行更新。雖然部分用戶可能尚未收到最初的 Liquid Glass 介面更新，但 Meta 仍持續將這種新的視覺語言推廣至 iOS、macOS 和 iPadOS 等多個平台。目前這些功能仍處於開發階段，尚未開放給 Beta 測試。",
    tags: ["WhatsApp", "Liquid Glass", "iOS", "Meta", "macOS", "iPadOS"],
    title_en: "WhatsApp is expanding Liquid Glass design, expected to apply visual style to drawing editor and video player",
    summary_en: "WhatsApp is continuously expanding its new Liquid Glass visual design, extending it from initial interface elements to more functional areas. This design style was first introduced earlier this year and, after several months of testing, has been preliminarily applied to sections such as the voice message player, message reactions, and context menus. According to a report from WABetaInfo, the latest iOS Beta version shows that WhatsApp is preparing to apply the Liquid Glass appearance and texture to the progress bars of the Drawing Editor and Video Player. The Drawing Editor is used by users to annotate or edit photos, videos, and GIFs before sharing, and its top buttons will be updated to match the Liquid Glass style. The progress bar on the Video Player will also be updated. Although some users may not have received the initial Liquid Glass interface update, Meta continues to promote this new visual language across multiple platforms, including iOS, macOS, and iPadOS. These features are currently in the development stage and are not yet available to Beta testers.",
    tags_en: ["WhatsApp", "Liquid Glass", "iOS", "Meta", "macOS", "iPadOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/whatsapp-is-working-on-even-more-liquid-glass-interface-changes-on-ios", lang: "EN" }
    ]
  },
  {
    id: "20260820-088",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 產品與生態系統討論：涵蓋 AirPods、iOS 27 Beta 6、Siri AI 與 App Store 爭議",
    summary: "本文內容為一場關於 Apple 產品與生態系統的討論，涵蓋多個前瞻性話題。討論內容包括 Apple 透過影片展示的搭載相機的全新 AirPods 洩漏資訊、iOS 27 Beta 6 的最新變動，以及關於 Siri AI 的最新體驗分享。此外，內容也討論了 iPhone 18 Pro 是否能兼容 iPhone 17 Pro 的保護殼，並提及了 Apple 與歐盟之間關於 App Store 佣金爭議的潛在解決方案。整體而言，這是一場聚焦於 Apple 產品線、作業系統更新與產業法律趨勢的綜合性討論，為用戶提供了了解未來 Apple 生態系統發展的資訊。",
    tags: ["Apple", "iOS 27", "AirPods", "Siri AI", "App Store", "iPhone 18 Pro"],
    title_en: "Apple Product and Ecosystem Discussion: Covering AirPods, iOS 27 Beta 6, Siri AI, and App Store Controversies",
    summary_en: "This article provides a comprehensive discussion about Apple's products and ecosystem, covering several forward-looking topics. The discussion includes leaked information about new AirPods featuring cameras, shown via video, the latest changes in iOS 27 Beta 6, and recent experiences with Siri AI. Furthermore, it discusses whether the iPhone 18 Pro will be compatible with iPhone 17 Pro cases, and mentions potential resolutions to the ongoing dispute between Apple and the EU regarding App Store commissions. Overall, this is a comprehensive discussion focusing on Apple's product line, operating system updates, and industry legal trends, providing users with information on the future development of the Apple ecosystem.",
    tags_en: ["Apple", "iOS 27", "AirPods", "Siri AI", "App Store", "iPhone 18 Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/happy-hour-604", lang: "EN" }
    ]
  },
  {
    id: "20260820-089",
    trackers: ["os"],
    category: "Apple",
    title: "ChatGPT Mac 版新增 Apple Messages 整合，用戶可直接在 Mac 上讀取、搜尋和發送 iMessage/SMS 訊息",
    summary: "OpenAI 更新了 ChatGPT for Mac 桌面應用程式，新增了 Apple Messages 外掛程式。此功能允許用戶在 Mac 上讀取和搜尋 iMessage、SMS 和 RCS 聊天記錄，並透過 Messages 應用程式準備和發送訊息。該外掛程式適用於所有訂閱方案，包括 ChatGPT Work 和 Codex。然而，OpenAI 強調，預設情況下，發送訊息仍需要用戶手動批准，用戶應謹慎處理持續授權的風險。此外，本次更新還提升了跨平台同步功能，例如釘選聊天記錄現在可以在 ChatGPT 桌面應用程式和 iOS 之間同步。用戶還可以分享本地 Codex 討論串的唯讀快照，並允許工作區的擁有者邀請成員共同編輯網站，提升了協作能力。目前此功能僅支援 Apple silicon Mac，不支援 Intel 機型。",
    tags: ["ChatGPT", "OpenAI", "Apple Messages", "macOS", "iMessage", "Codex"],
    title_en: "ChatGPT Mac App Adds Apple Messages Integration, Allowing Users to Read, Search, and Send iMessage/SMS Messages Directly on Mac",
    summary_en: "OpenAI has updated the ChatGPT for Mac desktop application with a new Apple Messages plugin. This feature allows users to read and search iMessage, SMS, and RCS chat history on Mac, and to compose and send messages through the Messages application. The plugin is available to all subscription plans, including ChatGPT Work and Codex. However, OpenAI emphasizes that, by default, sending messages still requires manual user approval, and users should be cautious about the risk of continuous authorization. Furthermore, this update enhances cross-platform synchronization features, such as pinned chat history now synchronizing between the ChatGPT desktop application and iOS. Users can also share read-only snapshots of local Codex threads, and workspace owners can invite members to co-edit the website, improving collaboration capabilities. Currently, this feature only supports Apple silicon Macs and does not support Intel models.",
    tags_en: ["ChatGPT", "OpenAI", "Apple Messages", "macOS", "iMessage", "Codex"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/chatgpt-update-adds-apple-messages-integration-on-mac", lang: "EN" }
    ]
  },
  {
    id: "20260820-090",
    trackers: ["os"],
    category: "Apple",
    title: "watchOS 27 預覽：Apple Watch 導入動態 App 網格、單擊手勢及統一 Siri AI 體驗",
    summary: "Apple 即將發布 watchOS 27，為 Apple Watch 帶來多項重大軟體更新。本次更新主要著重於提升使用者介面流暢度與 AI 互動體驗。首先，watchOS 27 預設導入了「動態 App 網格」（dynamic app grid）作為主畫面，該網格限制於使用者最常用的五個 App 及 Siri，旨在解決傳統主畫面過於混亂的問題。其次，新增了「單擊」（Tap）手勢，用於 Smart Stack 介面，使用者可透過單指和拇指的點擊來選擇高亮顯示的 Widget。最重要的是，watchOS 27 升級了 Siri AI，讓 Apple Watch 版本的 Siri 體驗與 iPhone、iPad、Mac 等設備上的 Siri AI 保持一致，確保使用者無論在哪個設備上互動，都能獲得統一且個人化的 AI 體驗。這些更新使 Apple Watch 在 AI 穿戴裝置市場中更具競爭力。",
    tags: ["watchOS 27", "Apple Watch", "Siri AI", "動態 App 網格", "Apple 生態系統", "手勢控制"],
    title_en: "watchOS 27 Preview: Apple Watch Introduces Dynamic App Grid, Tap Gestures, and Unified Siri AI Experience",
    summary_en: "Apple is set to release watchOS 27, bringing several major software updates to the Apple Watch. These updates primarily focus on enhancing the fluidity of the user interface and the AI interaction experience. First, watchOS 27 introduces a 'dynamic app grid' as the main screen, which is limited to the user's five most frequently used apps and Siri, aiming to solve the problem of traditional home screens being overly cluttered. Second, a 'Tap' gesture is added for the Smart Stack interface, allowing users to select highlighted Widgets using a single finger and thumb tap. Most importantly, watchOS 27 upgrades Siri AI, ensuring that the Siri experience on the Apple Watch remains consistent with Siri AI on devices like the iPhone, iPad, and Mac. This guarantees that users receive a unified and personalized AI experience regardless of the device they are interacting with. These updates make the Apple Watch more competitive in the AI wearable device market.",
    tags_en: ["watchOS 27", "Apple Watch", "Siri AI", "Dynamic App Grid", "Apple Ecosystem", "Gesture Control"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/watchos-27-adds-three-new-apple-watch-features-ive-been-loving", lang: "EN" }
    ]
  },
  {
    id: "20260820-091",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳聞 MacBook Ultra 將搭載 OLED 螢幕、Touch 支援與 Dynamic Island，重新定義 Mac 體驗",
    summary: "根據傳聞消息來源，Apple 即將推出名為 MacBook Ultra 的新機型，預計在今年秋季上市，並將帶來多項重大設計與功能革新。新機型預計將採用 OLED 顯示器，這將是 Mac 首次搭載此技術，有望提供更深的黑色、更高的對比度，並可能改善電池續航力。此外，MacBook Ultra 將首次支援觸控螢幕，作為輔助輸入方式，並預計取代傳統的 Notch 設計，改用 Dynamic Island 進行機身設計與 Siri AI 介面整合。在處理器方面，雖然長期期待 M6 系列，但傳聞指出 Apple 正在加速開發 M7 晶片，而今年的機型仍將沿用 M5 Pro 和 M5 Max 晶片。此外，Apple 也可能首次為 Mac 引入 C2 modem 支援的行動通訊選項，但預計此功能要到 2026 年才會成熟。這些更新預示著 MacBook Ultra 將具備更輕薄的設計、更先進的顯示技術和更全面的互動介面。",
    tags: ["Apple", "MacBook Ultra", "OLED", "Dynamic Island", "M5 Pro", "M5 Max", "macOS"],
    title_en: "Rumored MacBook Ultra to Feature OLED Display, Touch Support, and Dynamic Island, Redefining the Mac Experience",
    summary_en: "According to rumor sources, Apple is preparing to launch a new model called MacBook Ultra, expected this autumn, bringing multiple major design and functional innovations. The new model is rumored to adopt an OLED display, which would be the first time Mac has utilized this technology, potentially offering deeper blacks, higher contrast, and improved battery life. Furthermore, the MacBook Ultra is expected to support touch screens for the first time, serving as an auxiliary input method. It is also rumored to replace the traditional Notch design with the Dynamic Island for body design and Siri AI integration. Regarding the processor, while the M6 series has been long anticipated, rumors indicate that Apple is accelerating the development of the M7 chip, but this year's model will still utilize the M5 Pro and M5 Max chips. Additionally, Apple may introduce mobile connectivity options with C2 modem support for the first time on Mac, though this feature is not expected to be mature until 2026. These updates suggest that the MacBook Ultra will feature a more lightweight design, advanced display technology, and a more comprehensive interactive interface.",
    tags_en: ["Apple", "MacBook Ultra", "OLED", "Dynamic Island", "M5 Pro", "M5 Max", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/macbook-ultra-is-coming-six-new-features-launching-this-fall", lang: "EN" }
    ]
  },
  {
    id: "20260820-092",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 新型 HomePad 智慧家庭中樞傳聞：可自訂錶面風格，提升居家客製化體驗",
    summary: "Apple 傳聞將在今年秋季推出新型智慧家庭中樞 HomePad。該產品最初預計於 2025 年初發布，但因 Siri AI 相關延遲而推遲，目前預計將在近期上市。HomePad 的主要功能包括更實用的 Siri AI、Apple Photos 的幻燈片與回憶展示、安全攝影機功能，以及在螢幕上顯示 Apple Music 的藝術作品和歌詞。最新傳聞指出，HomePad 的主畫面將具備可自訂的「Faces」（錶面），類似 Apple Watch 的設計，但尺寸更大。這些 Faces 支援不同的小工具（widgets）和 Smart Stacks，讓使用者可以根據不同房間的需求，為每個 HomePad 進行高度個人化設定，例如在廚房、客廳和臥室設置不同的介面。這大大增加了 HomePad 的多功能性和居家應用潛力。",
    tags: ["Apple", "HomePad", "智慧家庭", "Apple Watch", "Siri AI"],
    title_en: "Rumored Apple HomePad Smart Home Hub: Customizable Face Designs to Enhance Home Personalization",
    summary_en: "Apple is rumored to be launching a new smart home hub called HomePad this autumn. Although initially slated for release in early 2025, the launch has been delayed due to related Siri AI developments, and is now expected to hit the market soon. HomePad's core features include a more capable Siri AI, slideshows and memory displays from Apple Photos, security camera functionality, and the ability to display Apple Music artwork and lyrics on the screen. The latest rumors suggest that HomePad's main screen will feature customizable 'Faces,' similar to Apple Watch designs but larger. These Faces support various widgets and Smart Stacks, allowing users to highly personalize each HomePad for different room needs—for example, setting up different interfaces for the kitchen, living room, and bedroom. This significantly increases HomePad's versatility and potential for home applications.",
    tags_en: ["Apple", "HomePad", "Smart Home", "Apple Watch", "Siri AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/new-homepad-reveal-is-another-reason-to-put-it-in-every-room-of-your-house", lang: "EN" }
    ]
  },
  {
    id: "20260820-093",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳 iPhone 18 基礎型機型延期至 2027 年初，改變傳統發布模式",
    summary: "根據多方報導，Apple 傳出今年九月的 iPhone 發布會將不會推出基礎型 iPhone 18 機型。傳統上，Apple 的 iPhone 系列會包含基礎型、兩款 Pro 型和一個額外選項。然而，由於戰略調整或應對記憶體供應鏈危機，Apple 可能決定分階段發布產品。報導指出，今年九月預計將發布 iPhone 18 Pro、Pro Max 和 iPhone Ultra 三款機型。而基礎型 iPhone 18、iPhone 18e 和 iPhone Air 2 等機型，則預計將延期至 2027 年初推出，可能不晚於三月。這代表消費者若想購買下一代非 Pro 或 Ultra 的基礎型 iPhone，需要等待更長的時間。",
    tags: ["Apple", "iPhone 18", "iPhone 18 Pro", "iPhone 18e", "iPhone Air 2", "產品發布週期"],
    title_en: "Apple reportedly delays base iPhone 18 model until early 2027, altering traditional release pattern",
    summary_en: "According to multiple reports, Apple's September iPhone launch this year will not feature the base iPhone 18 model. Traditionally, the Apple iPhone lineup includes a base model, two Pro models, and an additional option. However, due to strategic adjustments or in response to memory supply chain issues, Apple may decide to phase out product releases. Reports indicate that three models are expected to launch this September: the iPhone 18 Pro, Pro Max, and iPhone Ultra. Meanwhile, the base iPhone 18, iPhone 18e, and iPhone Air 2 models are reportedly scheduled for release later, possibly not before early 2027, potentially by March. This means that consumers wishing to purchase the next generation of non-Pro or non-Ultra base iPhones will have to wait a longer period.",
    tags_en: ["Apple", "iPhone 18", "iPhone 18 Pro", "iPhone 18e", "iPhone Air 2", "Product release cycle"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/iphone-18-wont-launch-next-month-heres-when-its-coming-instead", lang: "EN" }
    ]
  },
  {
    id: "20260820-094",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重大介面變動：Apple 將改變 iPhone 與 iPad 的通知中心開啟方式",
    summary: "Apple 在 iOS 27 版本中，預計將對 iPhone 和 iPad 的通知中心（Notification Center）開啟機制進行重大調整。自 iOS 5（2011 年）以來，通知中心一直是應用程式通知的中央匯集地，按時間順序排列。根據目前開發者測試版（developer betas）的觀察，iOS 27 的使用者介面將改變傳統的開啟方式。雖然文章未提供具體變動細節，但指出此變動預計將在今年秋季正式發布。此更新屬於使用者體驗（UX）層面的重大改動，而非安全漏洞修補。建議使用者留意 Apple 官方發布的完整說明，以適應新的通知中心操作流程。",
    tags: ["iOS 27", "Notification Center", "Apple", "使用者介面", "iPadOS", "macOS"],
    title_en: "iOS 27 Major UI Changes: Apple to Alter How iPhone and iPad Access the Notification Center",
    summary_en: "In iOS 27, Apple is expected to make significant adjustments to the mechanism for opening the Notification Center on both iPhone and iPad. Since iOS 5 (2011), the Notification Center has served as the central repository for application notifications, displayed chronologically. Observations from current developer betas suggest that the user interface in iOS 27 will change the traditional method of accessing this feature. Although the article does not provide specific change details, it notes that this modification is expected to be officially released this autumn. This update constitutes a major change at the User Experience (UX) level, rather than a security vulnerability patch. Users are advised to monitor official Apple announcements for complete documentation to adapt to the new Notification Center workflow.",
    tags_en: ["iOS 27", "Notification Center", "Apple", "User Interface", "iPadOS", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/ios-27-just-broke-15-years-of-muscle-memory-on-iphone-and-ipad", lang: "EN" }
    ]
  },
  {
    id: "20260820-095",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "NPM與RubyGems遭惡意套件攻擊：開發者誤裝後自動執行竊密程式竊取密碼與金鑰",
    summary: "開源惡意程式研究網站OpenSourceMalware揭露，近期針對NPM與RubyGems這兩個主流的開源套件管理平台，發動了大規模的惡意套件投放攻擊。攻擊者仿冒如chalk、lodash、react、axios（NPM）和bundler、i18n（RubyGems）等熱門套件，誘騙開發者誤裝。攻擊的技術細節在於，NPM利用`postinstall.js`腳本，而RubyGems則利用`extconf.rb`腳本，在套件安裝完成後自動執行惡意程式，無需使用者手動開啟檔案。\n\n一旦安裝，惡意程式會自動下載一個包含竊密功能的Windows載入器，該載入器內嵌了Go語言撰寫的竊密程式。此竊密程式主要鎖定Chromium系列瀏覽器，能蒐集儲存的帳號密碼、Cookie、登入工作階段及支付卡資料。此外，它還會尋找電腦中的加密貨幣錢包、助記詞與Telegram資料。竊取資料會先上傳至Gofile，再傳送給攻擊者控制的回傳端點。研究團隊確認，這兩批惡意套件屬於同一波攻擊，目的在於快速竊取開發者的敏感資訊。",
    tags: ["NPM", "RubyGems", "開源安全", "惡意套件", "供應鏈攻擊", "竊密程式"],
    title_en: "NPM and RubyGems Targeted by Malicious Package Attack: Developers Install Packages Leading to Automatic Execution of Stealing Code to Steal Passwords and Keys",
    summary_en: "The open-source malware research site OpenSourceMalware revealed a large-scale malicious package deployment attack recently targeting two major open-source package management platforms: NPM and RubyGems. Attackers impersonated popular packages such as chalk, lodash, react, and axios (NPM), and bundler and i18n (RubyGems), tricking developers into installing them. The technical details of the attack are that NPM utilizes the `postinstall.js` script, while RubyGems uses the `extconf.rb` script. Both scripts automatically execute malicious code after the package installation is complete, requiring no manual user action.\n\nOnce installed, the malicious code automatically downloads a Windows loader containing a credential-stealing program written in Go. This stealer primarily targets Chromium-based browsers, capable of collecting stored account passwords, cookies, login sessions, and payment card data. Furthermore, it searches for cryptocurrency wallets, seed phrases, and Telegram data on the computer. The stolen data is first uploaded to Gofile and then transmitted to the attacker's controlled return endpoint. The research team confirmed that these two batches of malicious packages belong to the same wave of attack, aimed at quickly stealing developers' sensitive information.",
    tags_en: ["NPM", "RubyGems", "Open-Source Security", "Malicious Packages", "Supply Chain Attack", "Stealer"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178298", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260820-096",
    trackers: ["os"],
    category: "Android",
    title: "Gboard 為 Pixel 11 系列推出「表情符號大小」設定，提升使用者自訂體驗",
    summary: "Google 在 Gboard 輸入法中，為支援 Pixel 11 系列的用戶，推出新的「表情符號大小」（Emoji size）設定。使用者可以在設定 > 首選 > 外觀中找到此滑桿，用於調整一行顯示的表情符號的尺寸和數量。此功能讓用戶可以根據個人偏好，在保持密度的同時，讓表情符號呈現略微放大或縮小的效果。目前觀察到此功能在 Gboard 的 Beta 版本 18.0.3.x 中可用。此更新旨在讓使用者更好地欣賞 Google 更新的表情符號設計細節。此設定不適用於頂部的 Emoji Kitchen 區塊。本更新屬於使用者介面（UI/UX）的改進，主要提升用戶體驗，並與 Gboard 的其他功能更新（如 M3 Expressive redesign）同步推出。",
    tags: ["Gboard", "Pixel 11", "Emoji size", "Android", "Google"],
    title_en: "Gboard introduces 'Emoji size' setting for Pixel 11 series, enhancing user customization experience",
    summary_en: "Google has introduced a new 'Emoji size' setting within Gboard's keyboard input method, specifically for users of the Pixel 11 series. Users can find this slider under Settings > Preferences > Appearance, which allows them to adjust the size and quantity of emojis displayed per row. This feature enables users to slightly enlarge or reduce the appearance of emojis according to personal preference, while maintaining density. This functionality is currently observable in the Beta version 18.0.3.x of Gboard. The update aims to allow users to better appreciate the detailed design of Google's updated emojis. Note that this setting does not apply to the top Emoji Kitchen block. This update is an improvement to the User Interface (UI/UX), primarily enhancing user experience, and is being rolled out concurrently with other Gboard feature updates (such as the M3 Expressive redesign).",
    tags_en: ["Gboard", "Pixel 11", "Emoji size", "Android", "Google"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/19/gboard-emoji-size-setting", lang: "EN" }
    ]
  },
  {
    id: "20260820-097",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Rust 生態系遭遇供應鏈攻擊：惡意建構腳本透過 typosquatting 植入後門",
    summary: "Rust 專案發現三個廣泛使用的 crate（arrayref 0.3.10、internment 0.8.7、append-only-vec 0.1.9）遭到惡意版本污染，並已從 crates.io 刪除。攻擊手法是透過一個被植入的 typosquatting 依賴（proc-macro1）觸發，該依賴的建構腳本（build script）會在編譯時下載並執行遠端惡意載荷。攻擊的關鍵在於，僅僅編譯（building）依賴該 crate 的專案，無需呼叫其任何功能，即可觸發惡意程式碼。\n\n惡意載荷能夠重組 C2 位址，並安裝一個無條件成功驗證的自訂憑證驗證器，從而禁用 TLS 驗證。在 Unix/macOS 上，它會在 `/tmp/rust-setup` 寫入可執行檔；在 Windows 上，則透過 VBScript 啟動 PowerShell 腳本。該植入物具備持久化機制，能在 Windows 的 Registry Run key、macOS 的 LaunchAgent 和 Linux 的 systemd user service 中留下痕跡，並能竊取 Chrome、Brave 和 Edge 的瀏覽器憑證。\n\n開發者應立即檢查本地的 `~/.cargo/registry/cache` 尋找被刪除的 crate 文件，並將 `arrayref` 版本固定在 0.3.9 或更早。由於這是供應鏈攻擊，建議開發者應加強 SCA（Software Composition Analysis）工具的使用，並審核所有第三方依賴的建構腳本。",
    tags: ["Rust Project", "crates.io", "Supply Chain Attack", "typosquatting", "build script", "arrayref", "proc-macro1"],
    title_en: "Rust Ecosystem Hit by Supply Chain Attack: Malicious Build Script Injects Backdoor via Typosquatting",
    summary_en: "Three widely used crates (arrayref 0.3.10, internment 0.8.7, and append-only-vec 0.1.9) in the Rust ecosystem were found to be contaminated with malicious versions and have since been removed from crates.io. The attack was triggered by a planted typosquatting dependency (proc-macro1), whose build script downloads and executes a remote malicious payload during compilation. Critically, the malicious code could be triggered merely by compiling a project that depends on the affected crate, without calling any of its functions.\n\nThe malicious payload was capable of reconstructing C2 addresses and installing a custom, unconditionally successful certificate verifier, thereby disabling TLS validation. On Unix/macOS, it writes an executable file to `/tmp/rust-setup`; on Windows, it initiates a PowerShell script via VBScript. This implant includes persistence mechanisms, leaving traces in the Windows Registry Run key, macOS LaunchAgent, and Linux systemd user service, and is capable of stealing browser credentials from Chrome, Brave, and Edge.\n\nDevelopers are advised to immediately check the local `~/.cargo/registry/cache` for the deleted crate files and to pin the `arrayref` version to 0.3.9 or earlier. Due to the nature of this supply chain attack, developers are recommended to enhance the use of SCA (Software Composition Analysis) tools and audit the build scripts of all third-party dependencies.",
    tags_en: ["Rust Project", "crates.io", "Supply Chain Attack", "typosquatting", "build script", "arrayref", "proc-macro1"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/rust-supply-chain-attack-puts-build.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-098",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "駭客透過惡意 Rust 依賴庫攻擊供應鏈：Poison arrayref 等套件竊取開發者憑證",
    summary: "本次供應鏈攻擊鎖定廣泛使用的 Rust 函式庫，包括 arrayref、append-only-vec 和 internment 等，透過惡意更新竊取開發者系統的資訊。攻擊者利用一個名為 proc-macro1 的套件（該套件是知名 proc-macro2 的變體名稱 Typosquatting），在編譯過程中自動執行一個名為 build.rs 的腳本。此腳本會從 base64 編碼的片段重建基礎設施，並根據主機作業系統（如 Linux x86-64、Windows x86-64 等）選擇適當的惡意載荷。惡意程式在 Unix 系統上寫入 /tmp/rust-setup，在 Windows 上使用 VBS 啟動器，最終目標是竊取 Google Chrome、Brave 和 Edge 瀏覽器中的 SQLite 登入資料庫，以獲取用戶憑證。受影響的專案包括 blake3、egui、eframe 和 iced 等。安全專家建議，開發者應立即檢查 Cargo.lock 檔案，並在確認受害時，必須輪換所有可存取的憑證、CI token 和簽名金鑰，並從安全備份重建環境。同時，應將受影響的依賴套件版本固定（pin）為已知安全的版本，直到維護者情況釐清。",
    tags: ["Rust", "arrayref", "proc-macro1", "供應鏈攻擊", "Typosquatting", "CVE"],
    title_en: "Hackers Attack Supply Chain via Malicious Rust Dependency: Packages like arrayref Steal Developer Credentials",
    summary_en: "This supply chain attack targeted widely used Rust libraries, including arrayref, append-only-vec, and internment, to steal information from developers' systems through malicious updates. The attackers utilized a package named proc-macro1 (a typosquatting variant of the well-known proc-macro2) which automatically executes a script named build.rs during the compilation process. This script reconstructs infrastructure from a base64 encoded snippet and selects an appropriate malicious payload based on the host operating system (such as Linux x86-64 or Windows x86-64). The malicious code writes to /tmp/rust-setup on Unix systems and uses the VBS launcher on Windows, ultimately aiming to steal SQLite login databases from Google Chrome, Brave, and Edge browsers to acquire user credentials. Affected projects include blake3, egui, eframe, and iced. Security experts recommend that developers immediately check the Cargo.lock file, and if compromised, must rotate all accessible credentials, CI tokens, and signing keys, and rebuild the environment from a secure backup. Furthermore, affected dependency packages should be pinned to known safe versions until the maintainers clarify the situation.",
    tags_en: ["Rust", "arrayref", "proc-macro1", "Supply Chain Attack", "Typosquatting", "CVE"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-poison-arrayref-rust-crate-to-push-infostealer-malware", lang: "EN" }
    ]
  },
  {
    id: "20260820-099",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 搭載 Gboard 寫作工具升級：引入 Gemini 智慧提供個人化建議",
    summary: "Google 在 Pixel 11 系列手機上更新了 Gboard 的寫作工具，整合 Gemini 智慧，新增「建議 (Suggested)」分頁，提供高度個人化的草稿建議。此功能能夠根據用戶的輸入文本、打字模式，甚至分析當前的對話內容，重寫或優化訊息。例如，若輸入「7 PM Spanish restaurant?」，系統可能建議改寫為「That sounds like a great plan! How about dinner on Thursday at 7 PM at the Spanish restaurant?」。\n\n具體而言，Gboard 會利用用戶的打字歷史記錄，以及從支援的第一方和第三方通訊應用程式獲取的螢幕上下文快照。所有數據處理都透過 Google 的 Private AI Compute 進行，確保資料在設備和雲端私有、專用空間內加密處理，甚至 Google 本身也無法查看用戶資料。\n\n除了個人化建議，新功能還包含根據螢幕上下文和寫作風格提供快速回覆選項，包括校對 (Proofread)、改寫 (Rephrase)、專業 (Professional)、友善 (Friendly) 等多種風格調整。用戶可以在右上角啟用或停用此功能。此功能支援 Google Messages、Google Chat、Line 等多種聊天應用程式，並支援多種語言，但排除歐洲經濟區 (EEA)。",
    tags: ["Pixel 11", "Gboard", "Gemini Intelligence", "Android", "AI 寫作工具", "個人化建議"],
    title_en: "Pixel 11 with Gboard Writing Tools Upgrade: Introducing Gemini Intelligence for Personalized Suggestions",
    summary_en: "Google has updated the Gboard writing tools on the Pixel 11 series phones, integrating Gemini intelligence and adding a 'Suggested' tab to provide highly personalized draft suggestions. This feature can rewrite or optimize messages based on the user's input text, typing patterns, and even by analyzing the current conversation context. For example, if the user types '7 PM Spanish restaurant?', the system might suggest rewriting it to 'That sounds like a great plan! How about dinner on Thursday at 7 PM at the Spanish restaurant?'.\n\nSpecifically, Gboard utilizes the user's typing history and screen context snapshots obtained from supported first-party and third-party messaging applications. All data processing occurs through Google's Private AI Compute, ensuring that data is encrypted and processed within private, dedicated spaces both on the device and in the cloud, meaning even Google itself cannot view the user data.\n\nIn addition to personalized suggestions, the new feature includes quick reply options based on screen context and writing style, including various style adjustments such as Proofread, Rephrase, and Professional, and Friendly. Users can enable or disable this feature in the upper right corner. This feature supports multiple chat applications, including Google Messages, Google Chat, and Line, and supports multiple languages, but excludes the European Economic Area (EEA).",
    tags_en: ["Pixel 11", "Gboard", "Gemini Intelligence", "Android", "AI Writing Tools", "Personalized Suggestions"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/pixel-11-personalized-suggestions", lang: "EN" }
    ]
  },
  {
    id: "20260820-100",
    trackers: ["os"],
    category: "Android",
    title: "Google Messages 應用程式出現 RCS 連線錯誤 3100，主要影響 Samsung Galaxy 用戶",
    summary: "部分 Google Messages 用戶在嘗試使用 RCS 功能時，遇到了錯誤代碼「3100」，顯示「Trouble connecting. Awaiting retry.」，代表裝置無法正確連線至 RCS 伺服器。此問題目前主要集中在 Samsung Galaxy 裝置用戶，特別是在更換新裝置或更換電信業者時發生。Google 官方確認此為電信業者層面的問題，並表示正與電信合作夥伴合作修復。初步分析指出，問題可能與用戶的號碼轉移（porting numbers）或 Samsung Smart Switch 傳輸了「損壞的快取檔案」有關。Google 建議的初步排除步驟包括關閉 RCS、清除「Carrier Services」資料、重新啟動裝置，再重新開啟 RCS。若以上步驟無效，可嘗試更進階的排除方法，但建議用戶先嘗試 Google 提供的步驟，並注意在操作過程中，若關閉了雙重驗證（2FA）必須立即重新開啟。",
    tags: ["Google Messages", "RCS", "Samsung Galaxy", "Android", "錯誤代碼 3100", "電信服務"],
    title_en: "Google Messages App Experiences RCS Connection Error 3100, Primarily Affecting Samsung Galaxy Users",
    summary_en: "Some Google Messages users are encountering error code '3100' when attempting to use RCS functionality, displaying the message 'Trouble connecting. Awaiting retry.' This indicates that the device is unable to properly connect to the RCS server. This issue is currently concentrated among Samsung Galaxy device users, particularly when switching to a new device or changing carriers. Google has confirmed that this is a carrier-level issue and stated that they are working with carrier partners to fix it. Preliminary analysis suggests the problem may be related to the user's number porting or the transfer of 'corrupted cache files' via Samsung Smart Switch. Initial troubleshooting steps recommended by Google include disabling RCS, clearing the 'Carrier Services' data, restarting the device, and then re-enabling RCS. If these steps are ineffective, more advanced troubleshooting methods can be attempted, but users are advised to try Google's provided steps first. Users must also note that if they disable two-factor authentication (2FA) during the process, they must immediately re-enable it.",
    tags_en: ["Google Messages", "RCS", "Samsung Galaxy", "Android", "Error Code 3100", "Carrier Services"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-messages-rcs-3100-error", lang: "EN" }
    ]
  },
  {
    id: "20260820-101",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 螢幕保護程式更新：新增多樣化風格與「充電」主題",
    summary: "Google 為 Pixel 11 系列手機推出了螢幕保護程式（screen savers）的系統更新。本次更新的主要功能包括支援多個螢幕保護程式，使用者可以輕鬆在不同主題間切換，類似於 Apple 的 StandBy 功能。此外，Google 新增了一個名為「Charge」的專用主題，該主題以極簡設計顯示時間和電池百分比，並特別標示了 80% 和 100% 的充電停頓點，提供預估時間。同時，「Clock」螢幕保護程式也進行了升級，數位和類比風格得以融合，並提供更高的客製化選項。這些功能在 Pixel 11 出廠時即已啟用，預計未來會逐步推送給較舊的 Pixel 機型。此更新主要提升了手機閒置時的介面體驗與資訊展示功能。",
    tags: ["Google Pixel 11", "螢幕保護程式", "Android", "系統更新", "Google"],
    title_en: "Google Pixel 11 Screen Saver Update: Adds Diverse Styles and 'Charging' Theme",
    summary_en: "Google has released a system update for the Pixel 11 series phones, introducing enhanced screen savers. Key features of this update include support for multiple screen saver options, allowing users to easily switch between different themes, similar to Apple's StandBy feature. Furthermore, Google has added a dedicated theme called 'Charge,' which features a minimalist design displaying the time and battery percentage, and specifically marks the 80% and 100% charging pause points, along with estimated time remaining. Concurrently, the 'Clock' screen saver has been upgraded, merging digital and analog styles and offering higher levels of customization. These features are enabled by default on the Pixel 11 and are expected to be rolled out gradually to older Pixel models. This update primarily enhances the idle interface experience and information display capabilities of the phone.",
    tags_en: ["Google Pixel 11", "Screen Saver", "Android", "System Update", "Google"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-pixel-screen-savers-updates-pixel-11", lang: "EN" }
    ]
  },
  {
    id: "20260820-102",
    trackers: ["os"],
    category: "Android",
    title: "Google 發布 Pixel 11 系列工廠映像檔，搭載 Android 17 並包含 2026 年 8 月安全補丁",
    summary: "隨著 Pixel 11 系列手機上市，Google 已為所有機型發布了工廠映像檔。這些映像檔運行的是 Android 17 作業系統，並包含 2026 年 8 月的安全補丁。發布了三個版本號：CD1A.260618.001.A7、CD1A.260618.001.C2 和 CD1A.260714.001.A9。這些工廠映像檔可供用戶恢復軟體損壞的設備至原始出廠韌體。雖然 Google 建議用戶使用 OTA 完整映像檔進行更新，但工廠映像檔仍是重要的恢復工具。文章指出，Pixel 11 系列的代號主題為「熊」，分別為 Pixel 11 (cubs)、Pixel 11 Pro (grizzly)、Pixel 11 Pro XL (kodiak) 和 Pixel 11 Pro Fold (yogi)。目前，Pixel 11 系列尚未符合透過 Android Beta Program 升級到 Android 17 QPR1 或 QPR2 的資格。",
    tags: ["Google", "Pixel 11", "Android 17", "工廠映像檔", "AOSP", "安全補丁"],
    title_en: "Google Releases Pixel 11 Series Factory Images with Android 17 and August 2026 Security Patches",
    summary_en: "With the launch of the Pixel 11 series phones, Google has released factory images for all models. These images run on the Android 17 operating system and include security patches up to August 2026. Three versions were released: CD1A.260618.001.A7, CD1A.260618.001.C2, and CD1A.260714.001.A9. These factory images allow users to restore devices with corrupted software to their original factory firmware. Although Google recommends using OTA full images for updates, factory images remain an important recovery tool. The article notes that the codename theme for the Pixel 11 series is 'bear,' with models including the Pixel 11 (cubs), Pixel 11 Pro (grizzly), Pixel 11 Pro XL (kodiak), and Pixel 11 Pro Fold (yogi). Currently, the Pixel 11 series is not eligible to upgrade to Android 17 QPR1 or QPR2 via the Android Beta Program.",
    tags_en: ["Google", "Pixel 11", "Android 17", "Factory Image", "AOSP", "Security Patch"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/pixel-11-factory-images", lang: "EN" }
    ]
  },
  {
    id: "20260820-103",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11s 搭載 Magic Capture 功能，解決現代父母拍攝瞬間的困境",
    summary: "本文介紹 Pixel 11s 的 Magic Capture 功能，旨在彌合靜態照片與動態影片之間的拍攝鴻溝。作者指出，雖然從 HTC Zoe 到 Apple Live Photos 和 Google Motion Photos 等技術，許多嘗試已出現，但技術限制仍使照片和影片功能難以完美結合。Magic Capture 應能提供更直觀、更完整的拍攝體驗，特別是對於經常拍攝孩子成長瞬間的父母。該功能預計能讓使用者在捕捉瞬間時，無需在照片和影片之間切換，即可完整記錄動態的細節與情感。",
    tags: ["Pixel 11s", "Magic Capture", "Google", "Android", "攝影技術", "行動攝影"],
    title_en: "Pixel 11s' Magic Capture Feature Solves Modern Parents' Dilemma in Capturing Moments",
    summary_en: "This article introduces the Magic Capture feature of the Pixel 11s, which aims to bridge the gap between static photos and dynamic videos. The author points out that while many attempts have been made—from HTC Zoe to Apple Live Photos and Google Motion Photos—technical limitations have made it difficult to perfectly combine photo and video functionality. Magic Capture is expected to provide a more intuitive and complete shooting experience, especially for parents who frequently capture their children's growth moments. This feature is anticipated to allow users to fully record dynamic details and emotions of a moment without having to switch between photo and video modes.",
    tags_en: ["Pixel 11s", "Magic Capture", "Google", "Android", "Photography Technology", "Mobile Photography"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/pixel-11s-magic-capture-perfectly-solves-a-very-modern-parenting-dilemma", lang: "EN" }
    ]
  },
  {
    id: "20260820-104",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Tab S12 系列傳出價格上漲，預計將推出 Plus 與 Ultra 型號",
    summary: "根據洩露的資訊，三星即將推出的 Galaxy Tab S12 系列，預計將會比前代更昂貴。該系列可能主要包含 Plus 和 Ultra 兩種尺寸。預計美國市場的起價將從 $1,199 起，整體價格預計上漲約 $100。具體的價格資訊包括 Galaxy Tab S12+ (12/256GB) 為 $1,199.99，以及 Galaxy Tab S12 Ultra (16/1TB) 高達 $1,999.99。相較於前代 Galaxy Tab S11 Ultra 的起價 $1,299，確實呈現了明顯的價格上漲趨勢。雖然尚未公布正式發布日期，但市場預期其將與三星預計下週發布的 Galaxy S26 FE 一同上市。此消息為產品預測與市場資訊，尚未經官方證實。",
    tags: ["Samsung", "Galaxy Tab S12", "Android", "平板電腦", "產品洩漏", "One UI"],
    title_en: "Samsung Galaxy Tab S12 Series Rumored to See Price Hike, Expected to Feature Plus and Ultra Models",
    summary_en: "According to leaked information, the upcoming Galaxy Tab S12 series from Samsung is expected to be more expensive than its predecessor. The series is rumored to potentially include two sizes: Plus and Ultra. The starting price in the US market is projected to begin at $1,199, representing an overall price increase of approximately $100. Specific pricing details include the Galaxy Tab S12+ (12/256GB) at $1,199.99, and the Galaxy Tab S12 Ultra (16/1TB) reaching $1,999.99. This shows a noticeable price increase compared to the starting price of the previous generation, the Galaxy Tab S11 Ultra, at $1,299. Although no official release date has been announced, the market anticipates it will launch alongside the Galaxy S26 FE, which Samsung is expected to release next week. This information is based on product predictions and market rumors and has not been officially confirmed.",
    tags_en: ["Samsung", "Galaxy Tab S12", "Android", "Tablet", "Product Leak", "One UI"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/samsung-galaxy-tab-s12-price-leaks", lang: "EN" }
    ]
  },
  {
    id: "20260820-105",
    trackers: ["os"],
    category: "Android",
    title: "Google 發布 Android Auto 17.4 更新，修復用戶回報的隨機斷線與當機問題",
    summary: "Google 確認近期用戶回報 Android Auto 系統出現隨機當機或斷線的異常現象。由於 Android Auto 主要用於行車導航，此問題造成極大不便。Google 透過其社群專家回應，指出已修復此問題，並建議受影響的用戶應將 Android Auto 應用程式更新至 17.4 或更高版本。該版本已透過 Play Store 廣泛發布，且 17.5 版本也已開始對穩定版用戶開放。更新至最新版本應能解決用戶遇到的隨機斷線和凍結問題，確保行車介面的穩定性。",
    tags: ["Android Auto", "Google", "Android 平台", "17.4", "系統更新"],
    title_en: "Google releases Android Auto 17.4 update to fix reported random disconnections and crashes",
    summary_en: "Google has confirmed that users recently reported random crashes or disconnections with the Android Auto system. Since Android Auto is primarily used for in-vehicle navigation, this issue causes significant inconvenience. Google's community experts responded, stating that the issue has been fixed and advising affected users to update the Android Auto application to version 17.4 or higher. This version has been widely distributed through the Play Store, and version 17.5 has also begun rolling out to stable users. Updating to the latest version should resolve the random disconnections and freezing issues encountered by users, ensuring the stability of the driving interface.",
    tags_en: ["Android Auto", "Google", "Android Platform", "17.4", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-android-auto-random-disconnect-fix-update", lang: "EN" }
    ]
  },
  {
    id: "20260820-106",
    trackers: ["os"],
    category: "Android",
    title: "三星 One UI 9.5 預覽：推出自訂小工具功能，具備模組化與多應用整合能力",
    summary: "本文報導指出，三星（Samsung）正在 One UI 9.5 的早期版本中準備推出自訂小工具（custom widget）功能。此功能與 Google 此前宣布的類似，旨在讓使用者能根據需求描述並組合出任何資訊的小工具。從技術細節來看，三星展示的自訂小工具採用模組化分割結構，允許兩個獨立的自訂小工具共存於同一區塊，且無需特定的應用程式錨點。在功能整合方面，範例展示了日曆和訊息等不同應用程式可連結到同一個小工具中。此功能預計將在今年晚些時候推出，特別適合整合到三星的 Daily Brief 介面中。由於此資訊來自未發布的 One UI 9.5 版本，具體發布時間和最終功能仍待確認。",
    tags: ["Samsung", "One UI 9.5", "Android 17", "自訂小工具", "Google", "Android 平台"],
    title_en: "Samsung One UI 9.5 Preview: Introducing Custom Widgets with Modular and Multi-App Integration Capabilities",
    summary_en: "This report indicates that Samsung is preparing to launch a custom widget feature in an early version of One UI 9.5. This functionality is similar to what Google previously announced, aiming to allow users to describe and combine any type of information into a widget based on their needs. From a technical perspective, the custom widget demonstrated by Samsung adopts a modular, segmented structure, allowing two independent custom widgets to coexist in the same area without requiring a specific application anchor. In terms of functional integration, examples show that different applications, such as Calendar and Messages, can link to the same widget. This feature is expected to roll out later this year, making it particularly suitable for integration into Samsung's Daily Brief interface. Since this information comes from an unreleased One UI 9.5 version, the specific release date and final functionality are subject to confirmation.",
    tags_en: ["Samsung", "One UI 9.5", "Android 17", "Custom Widgets", "Google", "Android Platform"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/samsungs-custom-widgets-show-up-in-one-ui-9-5", lang: "EN" }
    ]
  },
  {
    id: "20260820-107",
    trackers: ["os"],
    category: "Android",
    title: "第三方開發者繞過限制，開發出可高度自訂 Google Pixel 11 Pro HiLight LED 功能的應用程式",
    summary: "Google Pixel 11 Pro 搭載的「HiLight」硬體功能，本應僅限於系統預設的通話通知和 Gemini 狀態指示。然而，一位開發者已成功繞過 Google 限制，開發出名為「HiLight Studio」的第三方應用程式。此應用程式賦予使用者對 Pixel 11 Pro RGB LED 的完全控制權，使其可作為多樣化的通知 LED，支援自訂顏色、模式，並可針對單一應用程式進行精細設定。此外，使用者還可以建立和匯出預設模式。雖然該應用程式的設置過程複雜，需要透過 Github 側載（sideload）並使用 Shizuku 和 ADB 進行安裝，且每次重啟後都需要重新啟用，但它極大地擴展了 HiLight 的實用性。此事件顯示了硬體功能在初期可能存在限制，並為未來 Google 透過軟體層面開放此類功能的可能性帶來了希望。由於涉及側載和進階權限，使用者應自行評估風險。",
    tags: ["Google Pixel 11 Pro", "HiLight", "Android", "第三方開發", "LED 通知"],
    title_en: "Third-Party Developer Bypasses Restrictions to Create Highly Customizable Google Pixel 11 Pro HiLight LED Function App",
    summary_en: "The 'HiLight' hardware feature on the Google Pixel 11 Pro was originally intended only for system-default call notifications and Gemini status indicators. However, a developer has successfully bypassed Google's restrictions to create a third-party application called 'HiLight Studio.' This application grants users complete control over the Pixel 11 Pro's RGB LED, allowing it to function as a versatile notification LED that supports custom colors and patterns, and can be finely tuned for specific applications. Furthermore, users can create and export custom default patterns. Although the application's setup process is complex—requiring GitHub sideloading and installation using Shizuku and ADB, and needing re-enabling after every reboot—it significantly expands the utility of HiLight. This incident demonstrates that hardware features may have initial limitations and offers hope for Google to potentially open up such functionalities through the software layer in the future. Due to the involvement of sideloading and advanced permissions, users should assess the risks themselves.",
    tags_en: ["Google Pixel 11 Pro", "HiLight", "Android", "Third-Party Development", "LED Notification"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-pixel-11-pro-hilight-third-party-control-feature", lang: "EN" }
    ]
  },
  {
    id: "20260820-108",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 強化震動回饋：新增環繞鈴聲與震動模式同步功能",
    summary: "Google 在 Pixel 11 手機上推出了「Pixel Sounds」應用程式的新功能，大幅提升了用戶體驗。此功能能夠將特定的鈴聲與獨特的震動模式進行配對，讓用戶不再只是感受到預設的脈衝震動，而是能感受到鈴聲的韻律透過設備傳遞。此外，用戶還可以為任何其他鈴聲自訂專屬的震動模式。此功能不僅限於特定預設鈴聲，更可以在「Google Contacts」應用程式中，針對個別聯絡人，同時設定自訂的鈴聲和自訂的震動模式。這項功能展示了 Google 對其震動馬達技術的持續優化與應用，提升了手機的個性化體驗。文章提到，Pixel 11 還搭載了 Android 17 的新 3D 表情符號，並將啟動畫面標誌替換為 Gemini Intelligence。",
    tags: ["Google Pixel 11", "Android 17", "Pixel Sounds", "震動回饋", "Google Contacts", "haptic motors"],
    title_en: "Google Pixel 11 Enhances Haptic Feedback: Introducing Ringtone and Vibration Pattern Synchronization",
    summary_en: "Google has introduced a new feature in the \"Pixel Sounds\" application on the Pixel 11, significantly enhancing the user experience. This feature allows users to pair specific ringtones with unique vibration patterns, enabling users to feel the rhythm of the ringtone through the device, rather than just experiencing a default pulse vibration. Furthermore, users can customize dedicated vibration patterns for any other ringtone. This functionality is not limited to specific default ringtones; users can also set custom ringtones and custom vibration patterns for individual contacts within the \"Google Contacts\" application. This feature demonstrates Google's continuous optimization and application of its vibration motor technology, elevating the phone's personalization experience. The article also mentions that the Pixel 11 features Android 17's new 3D emojis and replaces the startup screen logo with Gemini Intelligence.",
    tags_en: ["Google Pixel 11", "Android 17", "Pixel Sounds", "Haptic Feedback", "Google Contacts", "haptic motors"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-pixel-11-flaunts-its-haptics-with-vibrations-that-match-your-ringtone", lang: "EN" }
    ]
  },
  {
    id: "20260820-109",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel Journal App 更新：整合 Private AI Compute 提升功能，並強化隱私保護",
    summary: "Google 發布了 Pixel Journal 應用程式的更新版本 2026.07.27.x，該更新旨在提升用戶體驗並整合先進的 AI 功能。主要更新包括：自動格式化文字內容、整合來自 Health Connect 的睡眠數據、新增每日自訂例行提醒，以及互動式即時地圖搜尋。其中最主要的升級是「自動格式化」功能，它利用 Google 的 Private AI Compute 雲端能力，而非僅限於裝置端，這使得應用程式在提供 AI 體驗的同時，仍能維持業界領先的隱私保護標準。用戶需透過設定手動開啟「睡眠」權限才能使用睡眠數據。此外，應用程式還增加了定時提醒功能，並對介面進行了多處視覺優化，例如深色主題的調整。這項更新展示了 Google 正在將更多 AI 處理能力引入其核心應用，同時強調數據安全與隱私保護。",
    tags: ["Google", "Pixel Journal", "Private AI Compute", "Android", "Health Connect", "AI"],
    title_en: "Google Pixel Journal App Update: Integrates Private AI Compute to Enhance Features and Strengthen Privacy Protection",
    summary_en: "Google released an updated version of the Pixel Journal application, version 2026.07.27.x. This update aims to enhance user experience and integrate advanced AI functionalities. Key updates include: automatic text formatting, integration of sleep data from Health Connect, addition of customizable daily reminders, and interactive real-time map search. The most significant upgrade is the 'automatic formatting' feature, which utilizes Google's Private AI Compute cloud capabilities, moving beyond device-only processing. This allows the application to provide an AI experience while maintaining industry-leading privacy protection standards. Users must manually enable 'Sleep' permissions in the settings to utilize sleep data. Furthermore, the application has added scheduled reminder functionality and implemented multiple visual interface optimizations, such as dark theme adjustments. This update demonstrates Google's trend of incorporating more AI processing power into its core applications while emphasizing data security and privacy protection.",
    tags_en: ["Google", "Pixel Journal", "Private AI Compute", "Android", "Health Connect", "AI"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/pixel-journal-ai-update", lang: "EN" }
    ]
  },
  {
    id: "20260820-110",
    trackers: ["os"],
    category: "Android",
    title: "XREAL Aura Android XR 眼鏡預定熱銷，預計價格低於 1,500 美元",
    summary: "XREAL 公司推出了首款基於 Android XR 的眼鏡型設備 Aura，該產品具備內建顯示器，功能上類似於 VR 頭戴裝置，但體積更小。與以往的 XREAL 眼鏡不同，Aura 還配備了一個控制底座，用於運行 Android XR 所需的組件。自六月以來，XREAL 已確認 Aura 的預定數量已超過 10,000 台，顯示出市場對其產品的強勁需求。雖然早鳥預訂優惠已結束，但公司仍表示，Aura 的價格將「低於 1,500 美元（不含稅）」。這款設備預計將在未來上市，為 Android XR 應用場景提供新的選擇。",
    tags: ["XREAL", "Aura", "Android XR", "眼鏡型設備", "VR/AR"],
    title_en: "XREAL Aura Android XR Smart Glasses Pre-orders Hot, Expected Price Below $1,500",
    summary_en: "XREAL has launched Aura, its first Android XR smart glasses device. This product features a built-in display and functions similarly to a VR headset, but in a smaller form factor. Unlike previous XREAL glasses, Aura also includes a control base for running the components required for Android XR. Since June, XREAL has confirmed that pre-order numbers for Aura have exceeded 10,000 units, indicating strong market demand. Although the early bird pre-order discount has ended, the company stated that the price of Aura will be \"below $1,500 (excluding tax)\". This device is expected to launch in the future, offering a new choice for Android XR application scenarios.",
    tags_en: ["XREAL", "Aura", "Android XR", "Smart Glasses", "VR/AR"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/xreal-teases-the-price-of-its-android-xr-glasses-as-early-bird-deal-sells-out", lang: "EN" }
    ]
  },
  {
    id: "20260820-111",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 系列預覽：Google 終於推出「攝影風格」，改變拍照質感與處理方式",
    summary: "本文為 Pixel 11 系列的初步評測，重點介紹了 Google 引入的「攝影風格」（Photographic Styles）功能。此功能被認為是 Google 對於提升 Pixel 拍照質感的一次重大嘗試，類似於 iPhone 的 Photographic Styles。作者表示，此功能有望改變 Pixel 傳統上偏向均勻照明和高動態範圍（HDR）的處理風格。雖然作者認為此功能令人滿意，但仍強調其「大部分」的滿意，暗示仍有提升空間。此功能預計將在 Pixel 11 Pro XL 的完整評測中進一步討論，對於攝影愛好者和內容創作者而言，這代表了 Pixel 拍照體驗的重大升級與變化。",
    tags: ["Google Pixel", "Pixel 11", "攝影風格", "Android 拍照", "手機相機"],
    title_en: "Pixel 11 Series Preview: Google Finally Introduces 'Photographic Styles' to Change Photo Quality and Processing",
    summary_en: "This article provides a preliminary review of the Pixel 11 series, focusing on the newly introduced 'Photographic Styles' feature. This feature is seen as a major attempt by Google to enhance the photographic quality of the Pixel, similar to the Photographic Styles found on iPhones. The author suggests that this feature is poised to change the Pixel's traditional processing style, which tends to favor uniform lighting and high dynamic range (HDR). While the author finds the feature satisfactory, they emphasize that it is only 'mostly' satisfactory, implying room for improvement. This feature is expected to be discussed further in the full review of the Pixel 11 Pro XL, representing a significant upgrade and change in the Pixel photography experience for photography enthusiasts and content creators.",
    tags_en: ["Google Pixel", "Pixel 11", "Photographic Styles", "Android Photography", "Smartphone Camera"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-pixel-11-camera-looks-thoughts-impressions-results", lang: "EN" }
    ]
  },
  {
    id: "20260820-112",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 移除「Powered by Android」啟動標誌，強調 Gemini 整合與品牌區隔化",
    summary: "Google 在 Pixel 11 系列手機上進行了顯著的品牌設計變更，移除了傳統的「Powered by Android」啟動標誌。此舉反映了 Google 戰略重心正逐漸轉向 Gemini 相關功能，並將 Pixel 設備定位為「Gemini 手機」，以區隔其與市場上其他 Android 設備的差異。新的啟動畫面已由舊的 Bugdroid 標誌替換，並與 Gemini 相關的動畫啟動畫面結合。此外，文章指出 Pixel 11 系列的開機時間已顯著改善，這是一個實質上的優化，但其主要變動點是品牌層面的調整。這項變動雖然對習慣舊啟動畫面用戶可能感到陌生，但體現了 Google 在 AI 時代的產品定位與品牌重塑。",
    tags: ["Pixel 11", "Android", "Gemini", "Google", "啟動畫面"],
    title_en: "Pixel 11 removes 'Powered by Android' boot logo, emphasizing Gemini integration and brand differentiation",
    summary_en: "Google has implemented significant brand design changes on the Pixel 11 series, removing the traditional 'Powered by Android' boot logo. This move reflects Google's strategic focus shifting toward Gemini-related functionalities, positioning the Pixel device as a 'Gemini phone' to differentiate it from other Android devices in the market. The new boot screen replaces the old Bugdroid logo and integrates with a Gemini-related animated startup sequence. Furthermore, the article notes that the Pixel 11 series has significantly improved boot times, which is a tangible optimization, but the primary change highlighted is the brand-level adjustment. Although this change may feel unfamiliar to users accustomed to the old boot screen, it demonstrates Google's product positioning and brand reshaping for the AI era.",
    tags_en: ["Pixel 11", "Android", "Gemini", "Google", "Boot Screen"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/the-pixel-11-ditches-the-powered-by-android-boot-logo-for-gemini-intelligence", lang: "EN" }
    ]
  },
  {
    id: "20260820-113",
    trackers: ["os"],
    category: "重點關注",
    title: "三星預告 Galaxy S26 系列新品發表，預計推出 Galaxy S26 FE 旗艦入門機型",
    summary: "三星電子宣布於 8 月 27 日舉行「Galaxy Event August 2026」線上活動，旨在發表 Galaxy S26 系列的最新成員。根據報導，本次活動預計將推出 Galaxy S26 FE，這是一款定位為入門級的旗艦機型。雖然三星強調該機型將整合最新的 One UI，並在相機和 AI 方面帶來多樣化的體驗，但洩漏的規格顯示，Galaxy S26 FE 的設計可能與去年的 Galaxy S25 FE 幾乎沒有變化。此外，活動也可能同時發表 Galaxy Tab S12 以及新款 Galaxy Buds 等產品。本次活動的重點似乎是擴展 S26 系列的市場覆蓋範圍，提供更具成本效益的選擇。",
    tags: ["Samsung", "Galaxy S26", "Galaxy S26 FE", "One UI", "AI", "Galaxy Tab S12"],
    title_en: "Samsung Teases Galaxy S26 Series Launch, Expecting Galaxy S26 FE Flagship Entry-Level Model",
    summary_en: "Samsung Electronics announced an online event, \"Galaxy Event August 2026,\" scheduled for August 27th, to unveil the latest members of the Galaxy S26 series. According to reports, the event is expected to introduce the Galaxy S26 FE, a model positioned as an entry-level flagship. Although Samsung emphasized that the device will integrate the latest One UI and offer diverse experiences in camera and AI, leaked specifications suggest that the Galaxy S26 FE's design might be nearly identical to last year's Galaxy S25 FE. Furthermore, the event may also launch products such as the Galaxy Tab S12 and new Galaxy Buds. The focus of this event appears to be expanding the market coverage of the S26 series by providing a more cost-effective option.",
    tags_en: ["Samsung", "Galaxy S26", "Galaxy S26 FE", "One UI", "AI", "Galaxy Tab S12"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/19/samsung-august-event-galaxy-s26-family", lang: "EN" }
    ]
  },
  {
    id: "20260820-114",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple回應OpenAI動議，堅稱其指控的商業機密竊取行為成立，要求法院駁回動議",
    summary: "本案涉及Apple對OpenAI、io Products、Chang Liu和Tang Tan等前員工提起的商業機密竊取訴訟。OpenAI曾提出動議要求駁回此案，主張Apple缺乏充分證據證明其擁有可保護的商業機密，且未能證明任何實際的侵害或持續的損害。Apple在回應中，駁斥了OpenAI的論點，強調其原始訴狀已充分識別出被竊取的具體商業機密。Apple特別針對Chang Liu的行為，指出其在離職後利用了身份驗證漏洞（authentication bug）來存取Apple的網路儲存空間，並下載了大量機密文件。對於Tang Tan，Apple則澄清其要求展示的內部組件（如電池、MLB等）屬於機密工作成果，而非公開可購零件。Apple總結稱，OpenAI的動議未能處理訴狀核心的指控，要求法院駁回OpenAI的動議。",
    tags: ["Apple", "OpenAI", "商業機密", "法律訴訟", "trade secret", "CVE"],
    title_en: "Apple Responds to OpenAI Motion, Insisting Allegations of Trade Secret Theft Stand and Demanding Dismissal of Motion",
    summary_en: "The case involves a trade secret theft lawsuit filed by Apple against former employees including OpenAI, io Products, Chang Liu, and Tang Tan. OpenAI previously filed a motion to dismiss, arguing that Apple lacks sufficient evidence to prove ownership of protectable trade secrets, and failed to prove any actual or continuing damage. In its response, Apple refuted OpenAI's arguments, emphasizing that its original complaint adequately identified the specific trade secrets that were stolen. Apple specifically addressed Chang Liu's actions, pointing out that he utilized an authentication bug after his departure to access Apple's network storage and download a large volume of confidential files. Regarding Tang Tan, Apple clarified that the internal components requested for display (such as batteries, MLB, etc.) constitute confidential work product, not publicly available parts. Apple concluded that OpenAI's motion fails to address the core allegations of the complaint, and demands the court dismiss the motion.",
    tags_en: ["Apple", "OpenAI", "trade secret", "legal lawsuit", "trade secret", "CVE"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/19/apple-hits-back-at-openais-bid-to-dismiss-lawsuit-reaffirms-pervasive-trade-secret-misappropriation", lang: "EN" }
    ]
  },
  {
    id: "20260820-115",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 服務中斷：用戶無法登入或建立新帳戶，ChatGPT 服務暫時遭影響",
    summary: "OpenAI 宣布其服務目前遭遇系統故障，導致用戶在嘗試登入帳戶或建立新帳戶時遇到錯誤。根據 OpenAI 的系統狀態頁面，目前所有 ChatGPT 的「註冊與登入」功能均已中斷。公司已確認此問題，並表示正在實施緩解措施。用戶除了無法登入外，甚至連已登入狀態下使用聊天機器人也可能遇到困難。雖然 Mac 應用程式測試顯示功能正常，但網頁版在使用時偶爾會無法載入聊天紀錄、帳戶專案或生成回覆。此事件影響了廣大用戶的日常使用，目前 OpenAI 正在積極處理，並持續監測服務恢復狀況。",
    tags: ["OpenAI", "ChatGPT", "服務中斷", "系統故障", "帳戶登入", "Web 服務"],
    title_en: "OpenAI Service Outage: Users Unable to Log In or Create New Accounts, ChatGPT Service Temporarily Affected",
    summary_en: "OpenAI has announced that its services are currently experiencing a system outage, causing users to encounter errors when attempting to log into accounts or create new ones. According to OpenAI's system status page, all 'Sign-up and Login' functionalities for ChatGPT are currently disrupted. The company has confirmed the issue and stated that it is implementing mitigation measures. In addition to being unable to log in, users may also experience difficulties using the chatbot even when already logged in. Although testing on the Mac application shows normal functionality, the web version occasionally fails to load chat history, account projects, or generate responses. This incident affects the daily use of a large number of users, and OpenAI is actively addressing the issue while continuously monitoring service recovery status.",
    tags_en: ["OpenAI", "ChatGPT", "Service Outage", "System Failure", "Account Login", "Web Service"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/19/psa-chatgpt-outage-is-blocking-users-from-logging-in-or-creating-new-accounts", lang: "EN" }
    ]
  },
  {
    id: "20260820-116",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "AI 程式代理人建議惡意套件，軟體公司提醒開發者必須人工驗證供應鏈安全",
    summary: "本文報導了軟體開發公司 Softjourn 的一個案例，展示了 AI 程式代理人（AI agent）在推薦軟體套件時可能帶來的安全風險。一名工程師曾接受 AI 代理人的建議，安裝一個看似正規但實際上可疑的套件。該公司遵循了內部政策，要求對所有 AI 推薦的軟體進行人工二次驗證。工程師發現該套件在 GitHub 上的下載次數過少且創建時間極短，懷疑其可疑性。根據 Softjourn 的董事總經理 Sergiy Fitsak 指出，攻擊者已利用 AI 模型「幻覺」（hallucinated）產生的套件名稱，創造出看似合理但實際上不存在的名稱，並在真實的套件中註冊這些名稱。如果沒有人工審核，該惡意套件可能導致後門植入、資料竊取或系統破壞。文章強調，開發團隊必須養成習慣，對任何 AI 推薦的外部程式碼進行人工審查，確保供應鏈安全，避免因追求效率而忽略了基本的安全驗證步驟。",
    tags: ["AI Agent", "供應鏈安全", "軟體開發", "Malware", "Softjourn", "Slopsquatting"],
    title_en: "AI Code Agents Recommend Malicious Packages; Software Company Reminds Developers of Need for Manual Supply Chain Verification",
    summary_en: "This article reports on a case involving the software development company Softjourn, illustrating the security risks that AI agents can pose when recommending software packages. An engineer followed the advice of an AI agent and installed a package that appeared legitimate but was actually suspicious. The company adhered to internal policies requiring manual secondary verification for all AI-recommended software. The engineer noticed that the package had very few downloads and a very short creation time on GitHub, raising suspicion. According to Softjourn CEO Sergiy Fitsak, attackers are exploiting AI model 'hallucinations' to create package names that seem plausible but do not exist, and then registering these names in real packages. Without manual review, such malicious packages could lead to backdoor implantation, data theft, or system destruction. The article emphasizes that development teams must develop a habit of manually reviewing any external code recommended by AI to ensure supply chain security and avoid neglecting basic security verification steps in the pursuit of efficiency.",
    tags_en: ["AI Agent", "Supply Chain Security", "Software Development", "Malware", "Softjourn", "Slopsquatting"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/20/ai-agent-suggested-installing-a-malware-package-engineer-almost-took-its-advice/5289849", lang: "EN" }
    ]
  },
  {
    id: "20260820-117",
    trackers: ["os"],
    category: "重點關注",
    title: "中國航太新創 LandSpace 成功實現火箭第一級返回著陸，邁向可重複使用載具時代",
    summary: "中國航太新創 LandSpace 宣布其開發的 Zhuque-3 火箭成功執行了第一級助推器在地面上的返回著陸。這是中國公司首次達成此壯舉。Zhuque-3 採用 LandSpace 自有的 TQ-12A 引擎，使用液氧甲烷燃料，其第一級助推器具備可重複使用特性，能夠在四個支腿上著陸。此次成功任務展示了火箭從高空返回、再入點火減速、氣動滑翔控制、著陸點火減速，直至部署著陸腿的完整流程。LandSpace 聲稱該火箭設計可重複飛行高達 20 次。雖然這尚未證明其能成功重複使用，但首次實現第一級助推器著陸本身已是重大里程碑，此前只有 SpaceX 和 Blue Origin 達成過此成就。這項技術對於降低太空發射成本至關重要，符合中國在建立寬頻衛星星座、擴建太空站和建設月球基地等方面的宏大目標。",
    tags: ["LandSpace", "Zhuque-3", "可重複使用火箭", "液氧甲烷", "航太技術", "中國航天"],
    title_en: "Chinese Aerospace Startup LandSpace Achieves First-Stage Rocket Landing, Advancing Towards Reusable Vehicle Era",
    summary_en: "Chinese aerospace startup LandSpace announced the successful ground return landing of the first-stage booster for its Zhuque-3 rocket. This marks the first time a Chinese company has achieved this feat. The Zhuque-3 utilizes LandSpace's proprietary TQ-12A engine, which uses liquid oxygen and methane fuel. Its first-stage booster is designed for reusability and can land on four legs. This successful mission demonstrated the complete process, from high-altitude return and re-entry ignition deceleration, to aerodynamic glide control, landing ignition deceleration, and finally, the deployment of landing legs. LandSpace claims that the rocket is designed for up to 20 reusable flights. While this has not yet proven successful reusability, the initial achievement of first-stage booster landing is a major milestone, previously accomplished only by SpaceX and Blue Origin. This technology is crucial for reducing space launch costs, aligning with China's grand goals of establishing broadband satellite constellations, expanding space stations, and building lunar bases.",
    tags_en: ["LandSpace", "Zhuque-3", "Reusable Rocket", "LOX-Methane", "Aerospace Technology", "China Space"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/20/china-marches-towards-re-usable-rockets-with-successful-first-stage-landing/5290095", lang: "EN" }
    ]
  },
  {
    id: "20260820-118",
    trackers: ["os"],
    category: "重點關注",
    title: "IBM發表新型模組化低溫機櫃，推動量子電腦規模化與互連技術",
    summary: "IBM近日展示了用於量子電腦的全新冷卻硬體設計。由於量子電腦（Quantum computers）的量子位元（qubits）必須在接近絕對零度的極低溫下運行，傳統的圓形冷卻箱體體積龐大。為了解決規模化和互連的挑戰，IBM推出了尺寸更小、更方正的模組化低溫機櫃（cryogenic cabinets）。這些機櫃由鋁板和框架組成，提供了足夠的佈線空間和真空腔體容積，能夠容納更大單晶片處理器和更密集的系統配置。更重要的是，IBM設計了「受保護的低溫隧道」（protected cryogenic tunnel），允許在機櫃之間運行量子電纜，並通過多層熱屏蔽進行保護。這種設計不僅解決了傳統圓形機櫃間連接長且容易產生雜訊的問題，還能讓多個量子處理器協同工作，從而提升量子電腦的穩定性、容錯能力，並實現更大規模的系統構建。這項技術預計將使量子電腦的開發更具可擴展性，降低其操作門檻。",
    tags: ["IBM", "量子電腦", "cryogenic cabinets", "qubits", "模組化", "量子計算"],
    title_en: "IBM Unveils New Modular Cryogenic Cabinet to Advance Quantum Computer Scaling and Interconnect Technology",
    summary_en: "IBM recently showcased a new cryogenic hardware design for quantum computers. Because the qubits of quantum computers must operate at extremely low temperatures near absolute zero, traditional spherical cryostats are bulky. To address the challenges of scaling and interconnectivity, IBM introduced modular cryogenic cabinets. These cabinets, composed of aluminum plates and frames, provide sufficient space for wiring and vacuum chamber volume, allowing them to house larger single-crystal processors and more densely configured systems. Crucially, IBM designed a \"protected cryogenic tunnel\" that allows quantum cables to run between cabinets and pass through multi-layer thermal shielding. This design not only solves the problem of long, noise-prone connections between traditional spherical cabinets but also enables multiple quantum processors to work together, thereby enhancing the stability and fault tolerance of quantum computers, and facilitating the construction of larger-scale systems. This technology is expected to make quantum computer development more scalable and lower the operational threshold.",
    tags_en: ["IBM", "Quantum Computers", "cryogenic cabinets", "qubits", "modular", "quantum computing"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/08/20/ibm-says-super-chill-boxes-that-connect-through-cryogenic-tunnels-will-get-quantum-computers-scaling/5290067", lang: "EN" }
    ]
  },
  {
    id: "20260820-119",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft 終止 AVS 服務，客戶需轉向購買 VCF 授權，規劃遷移至 BYOL 模式",
    summary: "本文報導 Microsoft 將逐步淘汰包含授權的 Azure VMware Solution (AVS) 服務。由於 Broadcom 透過收購 VMware 後，已將業務重心完全放在 Cloud Foundation (VCF) 套件，並要求客戶採用 BYOL（Bring Your Own License，自帶授權）模式，因此 AVS 將不再提供包含授權的選項。\n\nMicrosoft 宣布將於 2026 年 10 月 31 日停止銷售包含授權的 AVS，並警告用戶必須開始規劃遷移，因為現有環境未來將無法運作。客戶應盡快從 Broadcom 購買 VCF 授權，並完成轉型至 AVS VCF BYOL 模式。建議用戶立即評估現有的 AVS 環境，並制定轉型路線圖，以避免在 2027 年 8 月 31 日發生服務中斷。\n\n這項政策變化顯示，Broadcom 正在強推其旗艦的 VCF 產品線，並將市場導向大型客戶，要求所有使用 VMware 服務的客戶必須自行管理授權，加速整個產業的標準化與集中化。",
    tags: ["Microsoft", "VMware", "Azure VMware Solution (AVS)", "Broadcom", "VCF", "BYOL"],
    title_en: "Microsoft Discontinues AVS Service, Customers Must Transition to Purchasing VCF Licenses and Plan Migration to BYOL Model",
    summary_en: "This article reports that Microsoft will gradually phase out the Azure VMware Solution (AVS) service, which includes licensing. Because Broadcom has focused entirely on the Cloud Foundation (VCF) suite following its acquisition of VMware, and requires customers to adopt the BYOL (Bring Your Own License) model, AVS will no longer offer the licensed option.\n\nMicrosoft announced that it will stop selling licensed AVS by October 31, 2026, and warns users that they must begin planning their migration, as existing environments will become non-operational in the future. Customers should purchase VCF licenses directly from Broadcom as soon as possible and complete the transition to the AVS VCF BYOL model. Users are advised to immediately assess their existing AVS environment and develop a transition roadmap to avoid service disruption on August 31, 2027.\n\nThis policy change indicates that Broadcom is strongly promoting its flagship VCF product line, directing the market toward large enterprise clients, and requiring all customers using VMware services to manage their own licenses, accelerating standardization and centralization across the industry.",
    tags_en: ["Microsoft", "VMware", "Azure VMware Solution (AVS)", "Broadcom", "VCF", "BYOL"],
    sources: [
      { name: "The Register", url: "https://theregister.com/virtualization/2026/08/20/microsoft-ends-one-of-the-last-ways-to-buy-vmware-without-big-bundles/5290044", lang: "EN" }
    ]
  },
  {
    id: "20260820-120",
    trackers: ["security"],
    category: "前瞻技術",
    title: "專家發布 CUSTODY 框架：限制 AI 代理在內部網路運作，防止惡意行為",
    summary: "資安專家 Jake Williams 針對 OpenAI 等大型 AI 模型公司近期爆發的失控事件，發布了名為 CUSTODY 的新框架。該框架旨在提供一套控制機制，將 AI 代理（AI agents）限制在企業內部網路環境，防止其產生惡意行為或造成外部損害。CUSTODY 的全名包含：conditions of release（釋放條件）、untrusted input（不可信輸入）、supervision and stop（監控與停止）、temporary authority（臨時權限）、observability and escalation（可觀察性與升級）以及 disposal and decommission（處置與退役）。Williams 指出，傳統的資安控制機制難以應對 AI 代理可能發生的「越界」行為，例如為了獲取競爭情報而駭入競爭對手。他強調，隨著 AI 應用深入 CI/CD 管線，需要更精密的控制。該框架已提供 GitHub 儲存庫和網站資源供社群參考，旨在提升企業對 AI 代理的控制能力。",
    tags: ["AI Agents", "CUSTODY Framework", "OpenAI", "AI 安全", "網路安全", "CI/CD"],
    title_en: "Expert Releases CUSTODY Framework: Restricting AI Agents in Internal Networks to Prevent Malicious Behavior",
    summary_en: "Cybersecurity expert Jake Williams has released a new framework called CUSTODY in response to recent uncontrolled incidents involving large AI model companies like OpenAI. This framework aims to provide a set of control mechanisms that restrict AI agents within an enterprise's internal network environment, preventing them from generating malicious behavior or causing external damage. The full name of CUSTODY includes: conditions of release, untrusted input, supervision and stop, temporary authority, observability and escalation, and disposal and decommission. Williams points out that traditional cybersecurity control mechanisms struggle to address the potential 'scope creep' behavior of AI agents, such as hacking a competitor to gain competitive intelligence. He emphasizes that as AI applications become deeply integrated into CI/CD pipelines, more precise control is required. The framework has provided a GitHub repository and website resources for the community to reference, aiming to enhance corporate control over AI agents.",
    tags_en: ["AI Agents", "CUSTODY Framework", "OpenAI", "AI Security", "Cybersecurity", "CI/CD"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/perimeter/new-custody-framework-constrains-ai-agents-inside-network", lang: "EN" }
    ]
  },
  {
    id: "20260820-121",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI輔助工具Argo提升衛星通訊系統韌性，應對俄伊等國家級網路威脅",
    summary: "隨著俄羅斯在2022年入侵烏克蘭時癱瘓數千衛星數據機，以及伊朗等國家級駭客持續威脅關鍵基礎設施，網路安全防禦需求日益迫切。資安公司Atalanta推出了名為Argo的產品，該產品利用「軟體理解」（software understanding）技術，結合複雜數學與人工智慧，成為首個可商用分析軟體和網路連網系統漏洞的系統。該技術旨在提升關鍵系統的韌性，特別是針對Viasat衛星通訊網路，以抵禦新興的攻擊。Argo的應用範圍廣泛，不僅用於強化衛星通訊，甚至被用於能源部（Department of Energy）的自主核反應爐「Genesis任務」。專家指出，這類技術預計將成為未來測試任何新能力的標準工具，並被視為國防部（DoD）的黃金標準。該技術的發展受益於DARPA等機構數十年的巨額投資。",
    tags: ["Atalanta", "Argo", "衛星通訊", "AI", "軟體理解", "Viasat", "DARPA"],
    title_en: "AI-Assisted Tool Argo Enhances Satellite Communication System Resilience Against Nation-State Threats like Russia and Iran",
    summary_en: "Following Russia's 2022 invasion of Ukraine, which crippled thousands of satellite terminals, and persistent threats from nation-state hackers like Iran targeting critical infrastructure, the demand for cybersecurity defense is increasingly urgent. Cybersecurity firm Atalanta has launched a product called Argo. This product utilizes 'software understanding' technology, combining complex mathematics and artificial intelligence, making it the first commercially available system capable of analyzing software and networked system vulnerabilities. This technology aims to enhance the resilience of critical systems, particularly for Viasat satellite communication networks, to defend against emerging attacks. Argo's applications are broad, extending beyond satellite communications to include the Department of Energy's 'Genesis mission' autonomous nuclear reactor. Experts suggest that this type of technology is expected to become the standard tool for testing any new capability in the future, and is viewed as a gold standard by the Department of Defense (DoD). The development of this technology benefits from decades of massive investment from organizations such as DARPA.",
    tags_en: ["Atalanta", "Argo", "Satellite Communications", "AI", "Software Understanding", "Viasat", "DARPA"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/ai-assisted-tool-helped-secure-satellite-communication-system-after-2022-russian-hacking", lang: "EN" }
    ]
  },
  {
    id: "20260820-122",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI強化AI模型安全機制：導入沙盒、Token檢測與30分鐘警報機制",
    summary: "OpenAI因內部評估及近期安全事件，宣布大幅重組其AI研究基礎設施，以應對模型能力提升帶來的潛在風險。特別是針對其高能力級別模型，如Astra，為確保模型符合「關鍵」級別的網路安全能力門檻，公司導入了更嚴格的隔離和監控協議。新機制要求執行模型生成或不可信程式碼的工作負載必須在更強的沙盒環境中運行。此外，網路邊界也進行了重配置，防止單一工作負載的洩漏導致未經授權的外部或內部網路存取。核心的安全更新包括多階段監控框架，系統會在每個採樣的Token上使用激活分類器（activation classifiers）檢查模型的內部活動。任何異常行為都會觸發自動調查，分析模型是否發生資料竊取、未授權存取或破壞行為。此監控層要求嚴格的營運SLA，若安全團隊在30分鐘內無法證明警報為誤報，則必須暫停活動。這些更新標準現已成為所有涉及Sol能力級別或更高模型的強化學習訓練和評估的強制要求。",
    tags: ["OpenAI", "AI安全", "沙盒技術", "Token檢測", "強化學習", "Astra"],
    title_en: "OpenAI Strengthens AI Model Security Mechanisms: Implementing Sandboxing, Token Inspection, and a 30-Minute Alert Protocol",
    summary_en: "Following internal assessments and recent security incidents, OpenAI announced a major restructuring of its AI research infrastructure to address potential risks stemming from enhanced model capabilities. Specifically for its high-capability models, such as Astra, the company has implemented stricter isolation and monitoring protocols to ensure the models meet 'critical' network security capability thresholds. The new mechanisms require that workloads executing model generation or untrusted code must run within a more robust sandboxed environment. Furthermore, the network perimeter has been reconfigured to prevent a single workload leak from causing unauthorized external or internal network access. Core security updates include a multi-stage monitoring framework, where activation classifiers check the model's internal activity on every sampled token. Any anomalous behavior triggers an automatic investigation to analyze whether the model has experienced data exfiltration, unauthorized access, or destructive actions. This monitoring layer mandates a strict operational SLA: if the security team cannot prove an alert is a false positive within 30 minutes, activity must be suspended. These updated standards are now mandatory for all enhanced learning training and evaluation involving Sol-capability level or higher models.",
    tags_en: ["OpenAI", "AI Security", "Sandboxing", "Token Inspection", "Reinforcement Learning", "Astra"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/openai-overhauls-model-security-with-sandboxing-30-minute-alerts-and-training-pauses", lang: "EN" }
    ]
  },
  {
    id: "20260820-123",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Meta內部AI事件揭示「Shady AI」風險：企業需從事後治理轉向預設治理",
    summary: "本文以Meta 2026年3月發生的一次內部AI事件為例，指出企業面臨的「Shady AI」（隱蔽式AI）治理挑戰。該事件中，一名員工使用經批准的AI代理程式，在未經授權的情況下，將大量敏感公司和用戶資料公開給了未經授權的工程師，持續超過兩小時。作者區分了「Shadow AI」（未經批准使用AI工具）和「Shady AI」（使用經批准工具但方式不當或未預期）。Shady AI的風險更難控制，它導致了資料外洩、監管風險，並造成了組織效率下降。文章強調，傳統的政策和培訓無法應對AI快速演變的能力和使用模式。解決方案是實施「預設治理」（governance by default），即在員工創建和部署AI輔助工作流程的環境中，內建必要的權限控制、存取控制和監控機制，而非僅依賴事後規定。",
    tags: ["Shady AI", "AI治理", "Meta", "資料外洩", "AI代理程式", "權限控制"],
    title_en: "Meta's Internal AI Incident Reveals 'Shady AI' Risks: Enterprises Must Shift from Post-Incident to Default Governance",
    summary_en: "Using a March 2026 internal AI incident at Meta as an example, this article highlights the governance challenges enterprises face regarding 'Shady AI.' In the incident, an employee used an approved AI agent to expose large amounts of sensitive company and user data to unauthorized engineers for over two hours without authorization. The author distinguishes between 'Shadow AI' (using unapproved AI tools) and 'Shady AI' (using approved tools but in an inappropriate or unexpected manner). Shady AI poses a more difficult risk to control, leading to data leakage, regulatory risk, and decreased organizational efficiency. The article emphasizes that traditional policies and training are insufficient to address the rapid evolution and usage patterns of AI. The solution is implementing 'governance by default,' which involves embedding necessary permission controls, access controls, and monitoring mechanisms into the environment where employees create and deploy AI-assisted workflows, rather than relying solely on post-incident regulations.",
    tags_en: ["Shady AI", "AI Governance", "Meta", "Data Leakage", "AI Agent", "Access Control"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/why-shady-ai-is-securitys-next-big.html", lang: "EN" }
    ]
  },
  {
    id: "20260820-124",
    trackers: ["os"],
    category: "重點關注",
    title: "Peloton Strength+ 訓練應用程式現已支援 Android 平台，擴大用戶可使用範圍",
    summary: "Peloton 旗下專為肌力訓練設計的 Strength+ 應用程式，此前僅限於 iOS 用戶使用。現今該應用程式已透過 Play Store 正式開放給 Android 用戶。該應用程式提供專家指導的訓練課程、可根據個人需求客製化的訓練生成器，以及詳細的教學指南。用戶可以透過耳機接收指導，進行重量訓練或其他肌力訓練活動。Peloton 強調，無論用戶目標是增肌、增強力量或提升整體體能，Strength+ 都能提供多樣化的訓練風格和自定步調的數週課程。該服務的月費為 $9.99。此更新擴展了 Peloton 服務的平台覆蓋範圍，讓更多 Android 用戶能夠參與其專業的健身訓練計畫。",
    tags: ["Peloton", "Strength+", "Android", "iOS", "健身應用程式", "Play Store"],
    title_en: "Peloton Strength+ Training App Now Supports Android Platform, Expanding User Reach",
    summary_en: "Peloton's Strength+ application, designed specifically for strength training, was previously limited to iOS users. It is now officially available to Android users via the Play Store. The application offers expert-guided workout classes, a personalized workout generator tailored to individual needs, and detailed instructional guides. Users can receive guidance via headphones while performing weightlifting or other strength training activities. Peloton emphasizes that whether a user's goal is muscle gain, strength enhancement, or overall fitness improvement, Strength+ provides diverse training styles and multi-week programs that can be customized to the user's pace. The monthly subscription fee for this service is $9.99. This update expands the platform coverage of Peloton's services, allowing more Android users to participate in its professional fitness training plans.",
    tags_en: ["Peloton", "Strength+", "Android", "iOS", "Fitness App", "Play Store"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/peloton-strength-plus-android-app-release", lang: "EN" }
    ]
  },
  {
    id: "20260820-125",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 推出 Discover 與 Google News 語音摘要自訂功能，提升內容個人化體驗",
    summary: "Google 近期正在推出多項介面更新，旨在大幅提升用戶的內容自訂化與個人化體驗。首先，Google Discover 資訊流現已透過提示式介面（prompt-based interface）進行自訂，用戶可以直接用文字告訴 Google 希望看到或減少的特定主題或連結，系統能即時調整並記住這些偏好。此外，Google News 的每日語音摘要也增加了自訂功能，用戶可以針對新聞標題、商業、娛樂、體育、科學技術等多個大類別，甚至更細分的子類別進行選擇。最後，Google 為發布商推出了互動式「首選來源」（Preferred Sources）按鈕，此按鈕可嵌入網站，點擊後不僅將該出版商設為首選來源，還能立即將讀者導回他們在該出版商頁面停留的位置。這些更新主要提升用戶在搜尋、AI Overviews 和 AI Mode 等介面上的內容瀏覽體驗，讓內容呈現更貼近用戶的興趣。",
    tags: ["Google", "Google Discover", "Google News", "AI Overviews", "內容個人化", "使用者介面"],
    title_en: "Google introduces customizable voice summaries for Discover and Google News to enhance personalized content experience",
    summary_en: "Google has recently been rolling out multiple interface updates aimed at significantly enhancing user content customization and personalization. First, the Google Discover feed now features a prompt-based interface, allowing users to directly tell Google specific topics or links they wish to see or reduce. The system can then adjust and remember these preferences in real-time. Furthermore, Google News' daily voice summary has added customization features, allowing users to select from multiple major categories—such as news, business, entertainment, sports, and science/technology—as well as more granular subcategories. Finally, Google has introduced an interactive 'Preferred Sources' button for publishers. This button can be embedded on websites; upon clicking, it not only sets the publisher as a preferred source but also immediately redirects the reader back to the specific location they were viewing on that publisher's page. These updates primarily enhance the content browsing experience for users across interfaces like Search, AI Overviews, and AI Mode, ensuring content presentation is more closely aligned with user interests.",
    tags_en: ["Google", "Google Discover", "Google News", "AI Overviews", "Content Personalization", "User Interface"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/google-discover-customize", lang: "EN" }
    ]
  },
  {
    id: "20260820-126",
    trackers: ["os"],
    category: "重點關注",
    title: "Omdia 報告：摺疊手機市場預測成長，Book-style 裝置取代 Clamshell，但 Samsung 已非市場領頭羊",
    summary: "根據 Omdia 的報告，全球摺疊智慧型手機市場預計將持續增長，預計到 2028 年達到約 3600 萬台，年增率超過 20%。儘管 2026 年上半年出貨量達到 510 萬台，但該數字較去年同期下降超過 20%，主要原因是翻蓋式（Clamshell）摺疊機出貨量下降了 47%。報告指出，Book-style（書本式）裝置正在崛起，在今年上半年佔了 69% 的摺疊機出貨量，顯示像 Samsung Galaxy Z Fold 8 這類寬幅裝置將是未來成長的主要動力。然而，市場領導地位已發生變化，中國製造商 Huawei 目前佔據全球摺疊機出貨量的 57%，遠超 Samsung 僅佔 18%。儘管 Samsung 是該品類的創始者，但目前市場格局已轉移。整體而言，儘管摺疊手機越來越受歡迎，但預計到 2030 年，其在全球智慧型手機出貨量中的佔比仍將維持在 3% 以下。",
    tags: ["Omdia", "摺疊手機", "Foldable", "Samsung", "Huawei", "Book-style"],
    title_en: "Omdia Report: Foldable Phone Market Predicted to Grow, Book-style Devices Replace Clamshell, but Samsung is No Longer the Market Leader",
    summary_en: "According to an Omdia report, the global foldable smartphone market is expected to continue growing, projected to reach approximately 36 million units by 2028, with a Compound Annual Growth Rate (CAGR) exceeding 20%. Although shipments reached 5.1 million units in the first half of 2026, this figure represents a decline of over 20% compared to the same period last year, primarily due to a 47% drop in Clamshell foldable shipments. The report indicates that Book-style devices are rising, accounting for 69% of foldable shipments in the first half of this year, suggesting that wider devices like the Samsung Galaxy Z Fold 8 will be the main driver of future growth. However, the market leadership has shifted: Chinese manufacturer Huawei currently accounts for 57% of global foldable shipments, significantly surpassing Samsung's 18%. Although Samsung pioneered the category, the current market landscape has changed. Overall, while foldable phones are becoming increasingly popular, their share of global smartphone shipments is expected to remain below 3% by 2030.",
    tags_en: ["Omdia", "Foldable", "Foldable Phone", "Samsung", "Huawei", "Book-style"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/book-style-foldables-growth-report-1h26", lang: "EN" }
    ]
  },
  {
    id: "20260820-127",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "內容為一般科技新聞彙整，無特定資安事件或產品更新資訊",
    summary: "本文為 9to5Google 的一般科技新聞彙整內容，主要涵蓋了多個非資安相關的主題，包括 Pixel 產品評測、遊戲《Wolverine》的預告片、電話詐騙的報導，以及 Qwen 3.8 的模型更新。文章沒有提及任何具體的資安漏洞、CVE 編號、受影響的產品版本或修補建議。因此，無法提供資安相關的分析或警告。",
    tags: ["9to5Google", "Pixel", "Qwen 3.8", "科技新聞"],
    title_en: "General Technology News Compilation (Non-Cybersecurity Content)",
    summary_en: "This article compiles general technology news from 9to5Google, covering multiple topics unrelated to cybersecurity. These include reviews of Pixel products, trailers for the game《Wolverine》, reports on phone scams, and updates regarding the Qwen 3.8 model. The article does not mention any specific security vulnerabilities, CVE IDs, affected product versions, or patch recommendations. Therefore, no cybersecurity analysis or warnings can be provided.",
    tags_en: ["9to5Google", "Pixel", "Qwen 3.8", "Technology News"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/the-trials-and-tribulations-of-reviewing-a-pixel", lang: "EN" }
    ]
  },
  {
    id: "20260820-128",
    trackers: ["os"],
    category: "重點關注",
    title: "市場分析：全球智慧型手機市場持續下滑，Apple 在多個區域仍展現領先增長力",
    summary: "根據 Counterpoint Research 發布的報告，全球智慧型手機市場正持續面臨需求疲軟和價格上漲的挑戰，導致印度、拉丁美洲、歐洲和中國等主要市場的出貨量和銷量均呈現下降趨勢。儘管市場普遍萎縮，Apple 在多個區域仍展現出強勁的增長力。例如，在歐洲第二季度，雖然整體出貨量下降 10%，但 Apple 的市佔率仍提升了九個百分點。在拉丁美洲，市場年減 10%，Apple 的出貨量年增 5%，主要得益於其吸收價格上漲的策略，以及 iPhone 17 Pro Max 等產品線持續的穩定需求。報告指出，Apple 在拉丁美洲的高階和高端價格區間（超過 $600）仍佔據約 51% 的市場份額，顯示其在高端市場的領導地位。這些數據反映出，儘管整體市場面臨經濟壓力，Apple 仍憑藉其產品生態和高端定位，在關鍵市場保持了優勢。",
    tags: ["Apple", "Counterpoint Research", "智慧型手機市場", "iPhone 17", "全球市場趨勢"],
    title_en: "Market Analysis: Global Smartphone Market Continues to Decline, but Apple Maintains Leading Growth in Multiple Regions",
    summary_en: "According to a report released by Counterpoint Research, the global smartphone market is facing challenges from weak demand and rising prices, leading to declining shipments and sales in major markets such as India, Latin America, Europe, and China. Despite the general market contraction, Apple continues to demonstrate strong growth in multiple regions. For instance, in Europe during the second quarter, although overall shipments dropped by 10%, Apple's market share still increased by nine percentage points. In Latin America, where the market declined by 10% year-over-year, Apple's shipments grew by 5% year-over-year. This growth is primarily attributed to its strategy of absorbing price increases and the sustained stable demand for product lines such as the iPhone 17 Pro Max. The report notes that Apple still accounts for approximately 51% of the market share in the high-end and premium price segment (exceeding $600) in Latin America, demonstrating its leadership in the premium market. These figures reflect that even as the overall market faces economic pressure, Apple maintains its advantage in key markets through its product ecosystem and high-end positioning.",
    tags_en: ["Apple", "Counterpoint Research", "Smartphone Market", "iPhone 17", "Global Market Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/apple-bucks-downward-trend-as-reports-show-global-smartphone-shipment-and-sales-declines", lang: "EN" }
    ]
  },
  {
    id: "20260820-129",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Music 將強制顯示 AI 生成內容標籤，提升平台內容透明度",
    summary: "Apple 宣布更新其音樂平台政策，要求內容提供者必須為使用 AI 創作的音樂作品、藝術品、曲目或音樂影片添加「Made With AI」透明度標籤。此舉旨在提高平台內容的透明度，讓聽眾清楚了解內容的來源。根據 Apple 的說明，只要內容的任何部分是使用 AI 創作，都必須包含此標籤，特別是那些主要源自生成式 AI 服務的內容。此政策的推動，反映了串流媒體產業面對 AI 內容激增的趨勢。其他平台如 Spotify 和 Deezer 也已採取類似措施，例如 Deezer 排除全 AI 生成曲目於推薦清單。雖然 Apple Music 提到每月上傳的 AI 生成音樂超過三分之一，但其聽歌佔比仍不到 0.5%。",
    tags: ["Apple Music", "AI 內容", "Made With AI", "內容透明度", "生成式 AI", "串流媒體"],
    title_en: "Apple Music to Mandate AI-Generated Content Labeling to Enhance Platform Transparency",
    summary_en: "Apple has announced an update to its music platform policy, requiring content providers to add a \"Made With AI\" transparency label to any music works, art, tracks, or music videos created using AI. This measure aims to increase the transparency of platform content, allowing listeners to clearly understand the source of the material. According to Apple, this label must be included if any part of the content was created using AI, particularly for content primarily sourced from generative AI services. The implementation of this policy reflects the streaming industry's response to the surge in AI-generated content. Other platforms, such as Spotify and Deezer, have also taken similar steps; for instance, Deezer has excluded fully AI-generated tracks from its recommendation lists. Although Apple Music noted that over a third of the monthly uploaded AI-generated music was present, its listening share remains below 0.5%.",
    tags_en: ["Apple Music", "AI Content", "Made With AI", "Content Transparency", "Generative AI", "Streaming"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/apple-music-will-soon-get-visible-labels-for-ai-generated-content", lang: "EN" }
    ]
  },
  {
    id: "20260820-130",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple AirPods 4 與 AirPods Pro 3 比較：分析購買時機與功能差異",
    summary: "本文比較了 Apple 的 AirPods 4 和 AirPods Pro 3 的功能與定位，為消費者提供購買建議。AirPods 4 採用開放式設計，強調舒適度和性價比，入門款具備 H2 晶片和個人化空間音訊，但缺乏主動降噪（ANC）和透明模式。高階款則增加了 ANC 和自適應音訊。相對地，AirPods Pro 3 提供了完整的旗艦功能，包括更強的降噪、更長的電池續航力（具備 ANC 時可達八小時），並支援心率感測、聽力測試等健康功能。雖然 Apple 正在開發具備「視覺智慧」（Visual Intelligence）的相機耳機，但預計至少要到 2027 年才能上市，因此對於目前有需求的用戶，建議直接購買現有的 AirPods Pro 3，以獲得更強的降噪和更長的電池壽命，避免等待過久。",
    tags: ["Apple", "AirPods 4", "AirPods Pro 3", "ANC", "空間音訊", "Apple Watch"],
    title_en: "AirPods 4 vs. AirPods Pro 3 Comparison: Analyzing Purchase Timing and Feature Differences",
    summary_en: "This article compares the features and positioning of Apple's AirPods 4 and AirPods Pro 3, offering purchasing advice to consumers. The AirPods 4 feature an open-fit design, emphasizing comfort and cost-effectiveness, and include the H2 chip and personalized Spatial Audio, but lack Active Noise Cancellation (ANC) and Transparency Mode. Conversely, the AirPods Pro 3 offer complete flagship functionality, including stronger noise cancellation, longer battery life (up to eight hours with ANC), and health features such as heart rate sensing and hearing tests. Although Apple is developing camera earbuds with 'Visual Intelligence,' these are not expected to launch until at least 2027. Therefore, for users with immediate needs, it is recommended to purchase the existing AirPods Pro 3 directly to gain superior noise cancellation and longer battery life, avoiding excessive waiting time.",
    tags_en: ["Apple", "AirPods 4", "AirPods Pro 3", "ANC", "Spatial Audio", "Apple Watch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/airpods-4-vs-airpods-pro-3-which-should-you-buy-in-2026", lang: "EN" }
    ]
  },
  {
    id: "20260820-131",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV+喜劇《Stick》第二季宣布回歸，Rhea Seehorn加入陣容",
    summary: "Apple TV+的喜劇影集《Stick》宣布將於 11 月 4 日首播第二季，並將持續至 12 月 30 日。該劇被譽為溫馨的體育喜劇，描寫了一個在高爾夫世界觀背景下的「尋找到的家庭」及其關係。第一季中，Owen Wilson飾演的前職業高爾夫球手Pryce Cahill，在事業和婚姻遭遇挫折後，將希望寄託在一位名叫Santi的年輕高爾夫天才身上。第二季的劇情將圍繞Santi進入職業高爾夫的下一步，以及Pryce自身的復出過程。本季陣容除了Wilson、Peter Dager、Marc Maron等核心成員外，還加入了《Pluribus》的明星Rhea Seehorn，她將飾演Pryce的新高爾夫教練。觀眾可以在Apple TV+上觀看該劇，該服務每月收費 $12.99。",
    tags: ["Apple TV+", "Stick", "Owen Wilson", "Rhea Seehorn", "高爾夫", "影集"],
    title_en: "Apple TV+'s Comedy 'Stick' Season 2 Announced with Rhea Seehorn Joining the Cast",
    summary_en: "The comedy series 'Stick' on Apple TV+ is set to premiere its second season on November 4 and run through December 30. The show is described as a heartwarming sports comedy, depicting a 'found family' and their relationships set against the backdrop of the golf world. In Season 1, Owen Wilson played former professional golfer Pryce Cahill, who placed his hopes in a young golf prodigy named Santi after experiencing setbacks in his career and marriage. Season 2's plot will focus on Santi's next steps in professional golf, as well as Pryce's own journey toward a comeback. In addition to the core cast members including Wilson, Peter Dager, and Marc Maron, the season adds Rhea Seehorn, a star from 'Pluribus,' who will play Pryce's new golf coach. The series is available to stream on Apple TV+, which costs $12.99 per month.",
    tags_en: ["Apple TV+", "Stick", "Owen Wilson", "Rhea Seehorn", "Golf", "Series"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/apple-tv-has-beloved-comedy-returning-soon-with-pluribus-star-added", lang: "EN" }
    ]
  },
  {
    id: "20260820-132",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 官方翻新店重補 M5 MacBook Pro，Midnight、Starlight、Sky Blue 等顏色可享優惠",
    summary: "本文為科技產品折扣資訊彙整，主要介紹 Apple 官方翻新店目前重新補貨了多款 MacBook Pro，其中 13-inch M5 MacBook Pro 的 Midnight、Starlight 和 Sky Blue 三色型號，價格可享優惠，最低可達 $1,099。此外，文章也追蹤到全新 M5 Pro MacBook Pro 機型有 $400 的折扣。同時，Apple Watch Series 11 也回歸了 $100 的價格優惠，價格從 $250 以上起。此外，文章還提及了 Twelve South 的 Find My 充電器和 Curve Nano MagSafe 支架等配件的折扣資訊。此為消費性資訊，無涉及資安漏洞或技術更新。",
    tags: ["Apple", "MacBook Pro", "M5", "Apple Watch Series 11", "Apple 官方翻新店", "消費資訊"],
    title_en: "Apple Refurbished Store Restocks M5 MacBook Pro with Discounts on Colors like Midnight, Starlight, and Sky Blue",
    summary_en: "This article compiles technology product discount information, primarily introducing that the Apple Refurbished Store has restocked multiple MacBook Pro models. Specifically, the 13-inch M5 MacBook Pro in Midnight, Starlight, and Sky Blue colors is available at a discounted price, starting as low as $1,099. Furthermore, the brand new M5 Pro MacBook Pro model is also noted with a $400 discount. Additionally, the Apple Watch Series 11 has returned with a $100 price discount, starting from $250. The article also mentions discount information for accessories such as the Twelve South Find My charger and Curve Nano MagSafe stand. This is consumer information and does not involve cybersecurity vulnerabilities or technical updates.",
    tags_en: ["Apple", "MacBook Pro", "M5", "Apple Watch Series 11", "Apple Refurbished Store", "Consumer Information"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/deals-m5-macbook-air-macbook-pro-airtag-2", lang: "EN" }
    ]
  },
  {
    id: "20260820-133",
    trackers: ["os"],
    category: "重點關注",
    title: "Adobe Firefly AI 擴展音訊功能：提供生成音樂、語音與音效工具，支援商業用途",
    summary: "Adobe 宣布將 Firefly AI 助理的音訊工具，包括 Generate Music（生成音樂）、Generate Speech（生成語音）和 Generate Sound Effects（生成音效），正式開放給廣大用戶。這些工具旨在解決內容創作者在音樂授權、版權和音效整合上的痛點。Generate Music 可根據影片內容生成原創、具備完整授權的音樂，用戶無需擔心版權或下架風險。Generate Speech 支援將腳本轉換為自然語音，可選擇使用 Adobe Firefly 內建模型或 ElevenLabs。Generate Sound Effects 則能根據文字提示或用戶聲音錄製，生成符合內容情境的客製化音效。Adobe 強調，這些工具生成的所有素材均可用於商業用途，且無需額外訂閱。此外，Firefly 還整合了 Gemini Omni Flash 等更多 AI 模型，讓用戶能透過文字、影片、音訊和圖像等多模態輸入進行內容開發與編輯。",
    tags: ["Adobe Firefly", "Generate Music", "Generate Speech", "Generate Sound Effects", "AI 內容生成", "多模態 AI"],
    title_en: "Adobe Firefly AI expands audio capabilities: offering tools for generating music, speech, and sound effects for commercial use",
    summary_en: "Adobe announced that its Firefly AI assistant's audio tools, including Generate Music, Generate Speech, and Generate Sound Effects, are now officially available to a wider user base. These tools aim to address pain points for content creators regarding music licensing, copyright, and sound integration. Generate Music can create original, fully licensed music based on video content, allowing users to worry about neither copyright nor takedown risks. Generate Speech supports converting scripts into natural speech, with options to use either the built-in Adobe Firefly model or ElevenLabs. Generate Sound Effects can generate customized sound effects that match the content's context, based on text prompts or user voice recordings. Adobe emphasizes that all materials generated by these tools can be used for commercial purposes without requiring additional subscriptions. Furthermore, Firefly has integrated more AI models, such as Gemini Omni Flash, enabling users to develop and edit content using multimodal inputs including text, video, audio, and images.",
    tags_en: ["Adobe Firefly", "Generate Music", "Generate Speech", "Generate Sound Effects", "AI Content Generation", "Multimodal AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/adobe-fireflys-music-voiceover-and-sound-effects-generation-tools-now-generally-available", lang: "EN" }
    ]
  },
  {
    id: "20260820-134",
    trackers: ["os"],
    category: "重點關注",
    title: "監管機構指控 Roblox 兒童安全措施不足，成人仍可聯繫未成年用戶",
    summary: "澳洲 eSafety 委員會指出，儘管 Roblox 聲稱已為保護兒童而進行了多項修改，但其現有的安全機制仍存在重大漏洞。測試發現，成人仍可向未成年澳洲兒童發送連接請求，且無需父母或監護人的同意。此外，兒童和成人可以在遊戲環境外的論壇上互相查看和回覆帖子，同樣缺乏父母或監護人的同意機制。更甚者，兒童的連接資訊、個人資料（包括帳號名稱、聯繫人數量、頭像、興趣等非敏感資訊）在整個 Roblox 平台上對任何人都是可見的，且缺乏限制可見性的選項。為了解決這些問題，Roblox 已同意在三個月內實施更嚴格的措施，包括：阻止成人未經父母同意聯繫未知兒童；預設將兒童帳號設置為私密；建立可通知用戶申訴結果的報告機制；並聘請獨立第三方審計機構評估其安全措施的有效性，包括年齡估計機制。Roblox 擁有超過 3.8 億的活躍用戶，其中大部分用戶年齡未滿 16 歲。",
    tags: ["Roblox", "eSafety Commissioner", "兒童安全", "數據隱私", "監管合規"],
    title_en: "Regulatory Body Accuses Roblox of Insufficient Child Safety Measures, Allowing Adults to Contact Minors",
    summary_en: "Australia's eSafety Commissioner pointed out that despite Roblox claiming to have implemented multiple modifications to protect children, its existing safety mechanisms still contain significant vulnerabilities. Testing revealed that adults can still send connection requests to minor Australian children without parental or guardian consent. Furthermore, children and adults can view and reply to posts on forums outside the game environment, also lacking a parental or guardian consent mechanism. Worse still, children's connection information and personal data (including non-sensitive information such as account names, number of contacts, avatars, and interests) are visible to anyone across the entire Roblox platform, with no option to restrict visibility. To address these issues, Roblox has agreed to implement stricter measures within three months, including: blocking adults from contacting unknown children without parental consent; setting child accounts to private by default; establishing a reporting mechanism that notifies users of appeal outcomes; and engaging an independent third-party audit firm to assess the effectiveness of its safety measures, including age estimation mechanisms. Roblox has over 380 million active users, the majority of whom are under 16 years old.",
    tags_en: ["Roblox", "eSafety Commissioner", "Child Safety", "Data Privacy", "Regulatory Compliance"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/roblox-still-allows-predators-to-contact-children-says-regulator", lang: "EN" }
    ]
  },
  {
    id: "20260820-135",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple與歐盟App Store爭議落幕：新佣金結構確立，開發者支付比例範圍為 5% 至 26%",
    summary: "蘋果公司（Apple）與歐盟（EU）關於 App Store 壟斷爭議的長期戰役似乎已告一段落。歐盟方面表示歡迎蘋果提出的新商業條款。根據新的佣金結構，開發者支付的費用將根據其營業額和所選銷售通路而異，範圍介於 5% 至 26%。\n\n具體而言，使用 Apple In-App Purchase 的 App Store 應用程式，佣金為 26%；對於大多數開發者（包括 App Store Small Business Program 等），佣金為 15%。若使用替代支付處理方式，佣金為 20%，但特定計畫的開發者可享 10% 的優惠費率。此外，透過替代應用市場或網頁分發的 App，蘋果將收取 5% 的 Core Technology Commission。\n\n歐盟委員會（European Commission）對這些變動表示歡迎，並指出這些新條款是在與蘋果進行深入對話後，針對蘋果的行為規範和替代應用分發的初步調查後達成的。歐盟委員會將持續監測蘋果對新條款的實施情況。值得注意的是，此解決方案僅適用於歐盟市場，美國市場的爭議（例如與 Epic Games 的訴訟）仍待法院裁決。",
    tags: ["Apple", "European Union", "App Store", "佣金結構", "Core Technology Commission", "反壟斷"],
    title_en: "Apple and EU App Store Dispute Conclude: New Commission Structure Established, Developer Payment Range Set at 5% to 26%",
    summary_en: "The long-running dispute between Apple and the European Union regarding App Store monopoly appears to have reached a conclusion. The EU welcomed the new commercial terms proposed by Apple. Under the new commission structure, the fees paid by developers will vary depending on their revenue and the sales channel they utilize, ranging from 5% to 26%. Specifically, App Store applications using Apple In-App Purchase will incur a 26% commission; for most developers (including those in the App Store Small Business Program), the commission will be 15%. If an alternative payment processing method is used, the commission is 20%, but developers in specific programs can benefit from a 10% preferential rate. Furthermore, for apps distributed through alternative marketplaces or web distribution, Apple will charge a 5% Core Technology Commission. The European Commission welcomed these changes, noting that these new terms were reached after in-depth discussions with Apple and preliminary investigations into Apple's business practices and alternative app distribution. The European Commission will continue to monitor Apple's implementation of these new terms. Notably, this resolution applies only to the EU market; disputes in the US market (such as the lawsuit with Epic Games) are still pending court judgment.",
    tags_en: ["Apple", "European Union", "App Store", "Commission Structure", "Core Technology Commission", "Antitrust"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/20/apples-long-running-app-store-battle-with-the-eu-appears-to-finally-be-over", lang: "EN" }
    ]
  },
  {
    id: "20260820-136",
    trackers: ["os"],
    category: "重點關注",
    title: "美國發行商 RoboStore 宣布轉型，計畫在紐約建立自有機器人製造基地",
    summary: "美國主要的中國人型與四足機器人發行商 RoboStore，宣布重大業務轉型。該公司原本是中國機器人公司 Unitree Robotics 在北美的主要經銷商，曾為哈佛、麻省理工學院（MIT）、Amazon、Nvidia 等機構提供機器人，累積了超過 1,500 台的銷售經驗。然而，面對美國政府對外國製造機器人日益嚴格的管制，RoboStore 決定改變策略。公司計畫在紐約長島開設一個 66,000 平方英尺的設施，並成立新公司 Robo Inc. 來負責商業機器人的製造和系統整合。RoboStore 的創始人 Teddy Haggerty 指出，比起通用的人型機器人，針對特定應用場景（如 Standard Bots 或 Universal Robots 的機械手臂）的專業化機器人更適合企業需求，這也體現了其轉型方向。",
    tags: ["RoboStore", "Unitree Robotics", "人型機器人", "機器人製造", "美國市場", "科技供應鏈"],
    title_en: "US Distributor RoboStore Announces Transformation, Plans to Establish Proprietary Robot Manufacturing Base in New York",
    summary_en: "RoboStore, a major distributor of humanoid and quadruped robots in the US, has announced a significant business transformation. The company previously served as the primary North American distributor for the Chinese robotics firm Unitree Robotics, having supplied robots to institutions such as Harvard, MIT, Amazon, and Nvidia, accumulating sales experience of over 1,500 units. However, facing increasingly stringent US government regulations on foreign-manufactured robots, RoboStore has decided to change its strategy. The company plans to open a 66,000 sq ft facility on Long Island, New York, and establish a new entity, Robo Inc., to handle the manufacturing and system integration of commercial robots. RoboStore founder Teddy Haggerty noted that specialized robots for specific application scenarios (such as Standard Bots or Universal Robots' robotic arms) are better suited for enterprise needs than general-purpose humanoid robots, reflecting the company's new direction.",
    tags_en: ["RoboStore", "Unitree Robotics", "Humanoid Robots", "Robot Manufacturing", "US Market", "Tech Supply Chain"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/08/us-distributor-of-chinas-most-popular-humanoid-robots-pivots-after-us-ban", lang: "EN" }
    ]
  },
  {
    id: "20260820-137",
    trackers: ["os"],
    category: "重點關注",
    title: "歐洲太空總署取消 Ariane 6 火箭「Block 3」升級計畫，成本壓力成主要考量",
    summary: "歐洲太空總署（ESA）宣布擱置 Ariane 6 火箭的「Block 3」升級計畫。此升級計畫包含使用碳複合結構的輕型 ICARUS 上級助推器。該升級的取消，對包括前往土星冰衛星 Enceladus 的科學任務等 ESA 項目產生影響。儘管 Ariane 6 在戰後提供了歐洲可靠的發射能力，但歐洲各國政府在資助升級時的猶豫，顯示出對該火箭成本日益增大的擔憂。目前，Arianespace 尚未公開 Ariane 6 的發射成本，但預計在 8,000 萬至 1 億歐元之間。此事件凸顯了歐洲太空發射產業在成本控制與技術迭代上面臨的挑戰。",
    tags: ["Ariane 6", "歐洲太空總署", "ESA", "Arianespace", "太空發射", "成本控制"],
    title_en: "European Space Agency Cancels Ariane 6 Rocket 'Block 3' Upgrade Plan Amid Cost Concerns",
    summary_en: "The European Space Agency (ESA) has announced the shelving of the Ariane 6 rocket's 'Block 3' upgrade plan. This upgrade was slated to incorporate a lightweight ICARUS upper stage featuring carbon composite structures. The cancellation of this upgrade impacts various ESA projects, including scientific missions destined for Saturn's moon Enceladus. Although Ariane 6 provides Europe with a reliable post-war launch capability, hesitation among European national governments regarding funding the upgrade highlights growing concerns over the rocket's escalating costs. While Arianespace has not yet disclosed the launch cost of Ariane 6, it is estimated to fall between €80 million and €100 million. This incident underscores the challenges facing the European space launch industry in terms of cost control and technological iteration.",
    tags_en: ["Ariane 6", "ESA", "Arianespace", "Space Launch", "Cost Control"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/08/europe-cancels-planned-upgrades-for-ariane-6-rocket", lang: "EN" }
    ]
  },
  {
    id: "20260820-138",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "澳洲 eSafety 警告：Roblox 平台仍存在漏洞，成人可繞過保護機制接觸兒童",
    summary: "澳洲 eSafety 委員會指出，儘管 Roblox 平台在去年秋天進行了修改以阻止成人向陌生兒童發送訊息，但該平台仍存在多種漏洞，無法完全阻止成人對兒童進行不當接觸。eSafety 進行的測試發現，成人陌生人仍能向兒童發送連線請求，且兒童的個人資料（包括帳號名稱、聯絡人、頭像和興趣等非敏感資訊）對平台上的任何人都是可見的，缺乏限制隱私的選項。更令人擔憂的是，成人可以在遊戲環境外的論壇搜尋兒童並評論其貼文，且無需父母或監護人的同意。根據《澳洲線上安全法案》，平台有義務預防成人與未成年人之間的不當接觸，並要求預設將兒童帳號設為私密。目前，Roblox 已簽署了可強制執行的協議，承諾在未來三個月內進行改進，包括預防成人未經父母同意聯繫兒童，並強化兒童帳號的預設私密性，同時簡化不當接觸的舉報流程。",
    tags: ["Roblox", "eSafety", "澳洲線上安全法案", "兒童隱私", "平台安全", "未成年人保護"],
    title_en: "Australian eSafety Warning: Roblox Platform Still Has Vulnerabilities, Allowing Adults to Bypass Protections and Access Children",
    summary_en: "The Australian eSafety Commissioner pointed out that although the Roblox platform made modifications last autumn to prevent adults from sending messages to unknown children, the platform still contains multiple vulnerabilities that prevent it from completely stopping inappropriate adult contact with children. eSafety's testing found that unknown adults can still send connection requests to children, and children's personal data (including non-sensitive information such as usernames, contacts, avatars, and interests) is visible to anyone on the platform, lacking options to restrict privacy. More concerningly, adults can search for and comment on children's posts on forums outside the game environment, and this can be done without the consent of parents or guardians. Under the Australian Online Safety Act, platforms have an obligation to prevent inappropriate contact between adults and minors, and are required to default child accounts to private. Roblox has currently signed a legally enforceable agreement, committing to improvements within the next three months, including preventing adults from contacting children without parental consent, strengthening the default privacy settings for child accounts, and simplifying the reporting process for inappropriate contact.",
    tags_en: ["Roblox", "eSafety", "Australian Online Safety Act", "Child Privacy", "Platform Safety", "Minor Protection"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/weak-roblox-safeguards-failed-to-stop-adults-contacting-kids-regulator-says", lang: "EN" }
    ]
  },
  {
    id: "20260820-139",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "人臉搜尋工具 ClarityCheck 曝露 900 萬張照片與個人資料，安全漏洞引發隱私危機",
    summary: "獨立資安研究員 Jeremiah Fowler 發現，人臉搜尋工具 ClarityCheck 曾將大量個人資料公開曝露。該公司將超過 900 萬張包含成人、青少年和兒童人臉照片的圖片檔案，以及大量個人電子郵件和電話號碼，儲存在一個未受保護的 Amazon S3 儲存桶中。這些資料儲存在名為 “faces” 和 “profiles” 的資料夾中，可透過公司網站公開程式碼中的 URL 存取。ClarityCheck 聲稱其服務可以搜尋姓名、電話號碼、電子郵件地址和車牌號碼，並提供人臉識別功能。雖然 ClarityCheck 在 WIRED 媒體聯繫後已修復了資料庫，但 Fowler 指出，該漏洞疑似已曝露數月，且早期通知公司無果。這類意外的資料外洩，特別是生物識別數據（如人臉照片），對個人隱私構成極大風險，即使使用者在上傳照片時聲明擁有權限，也無法保證其個人資料不會被未經同意地收集和公開。",
    tags: ["ClarityCheck", "Amazon S3", "人臉識別", "資料外洩", "生物識別", "隱私權"],
    title_en: "Facial Search Tool ClarityCheck Exposed 9 Million Photos and Personal Data, Security Vulnerability Triggers Privacy Crisis",
    summary_en: "Independent cybersecurity researcher Jeremiah Fowler discovered that the facial search tool ClarityCheck had publicly exposed a large amount of personal data. The company stored image files containing over 9 million photos of adults, teenagers, and children, along with a large volume of personal email addresses and phone numbers, in an unprotected Amazon S3 bucket. This data was stored in folders named “faces” and “profiles,” accessible via a URL found in the company's public code. ClarityCheck claims its service can search by name, phone number, email address, and license plate number, and provides facial recognition functionality. Although ClarityCheck reportedly fixed the database after being contacted by WIRED, Fowler pointed out that the vulnerability was suspected to have been exposed for several months, and early attempts to notify the company were unsuccessful. Such accidental data leaks, especially involving biometric data (such as facial photos), pose extreme risks to personal privacy, as even if users claim ownership when uploading photos, it cannot guarantee that their personal data will not be collected and made public without consent.",
    tags_en: ["ClarityCheck", "Amazon S3", "Facial Recognition", "Data Leak", "Biometric", "Privacy"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/08/reverse-lookup-service-exposed-millions-of-photos-of-peoples-faces", lang: "EN" }
    ]
  },
  {
    id: "20260820-140",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "研究揭露 Grok 語言模型遭加密指令繞過安全限制，可竊取用戶聊天記錄與個人資料",
    summary: "研究人員發現一種新的資料竊取攻擊，針對 Elon Musk 旗下的 Grok 大型語言模型（LLM）。此攻擊利用一種看似簡單的技巧，迫使 Grok 竊取用戶的聊天記錄和個人資訊。攻擊的核心機制是「加密上下文注入」（Cryptographic Context Injection）。傳統的提示注入（Prompt Injection）攻擊通常透過在電子郵件或網頁內容中隱藏惡意指令來利用 LLM 遵循用戶請求的特性。然而，Grok 等模型只能透過建立安全防護機制（guardrails）來標記並阻止可疑指令。研究人員發現，只需將惡意指令加密，並在同一網站上提供明文解密指令和解密金鑰，就能繞過這些安全限制。當用戶要求 Grok 總結該頁面時，模型會立即執行惡意指令，無需任何警告或確認。這凸顯了當前 LLM 在處理來自不可信來源內容與用戶指令區分上的根本缺陷，並強調了建立更強大、更可靠的防護機制的重要性。",
    tags: ["Grok", "LLM", "Prompt Injection", "加密上下文注入", "資料外洩", "xAI"],
    title_en: "Research Reveals Grok Language Model Bypassed Security Restrictions via Encrypted Instructions, Enabling Theft of User Chat History and Personal Data",
    summary_en: "Researchers have discovered a novel data exfiltration attack targeting Grok, the large language model (LLM) developed by Elon Musk. This attack utilizes a seemingly simple technique to force Grok to steal user chat history and personal information. The core mechanism of the attack is 'Cryptographic Context Injection.' Traditional Prompt Injection attacks typically exploit the LLM's tendency to follow user requests by embedding malicious instructions within email or webpage content. However, models like Grok can only flag and prevent suspicious instructions by establishing safety guardrails. Researchers found that by simply encrypting the malicious instructions and providing the plaintext decryption instructions and the decryption key on the same webpage, they could bypass these safety restrictions. When a user asks Grok to summarize the page, the model immediately executes the malicious instructions without any warning or confirmation. This highlights a fundamental flaw in current LLMs regarding the distinction between content from untrusted sources and user instructions, emphasizing the critical need for stronger and more reliable defensive mechanisms.",
    tags_en: ["Grok", "LLM", "Prompt Injection", "Cryptographic Context Injection", "Data Leakage", "xAI"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/08/grok-exfiltrates-user-data-when-malicious-instructions-are-encrypted", lang: "EN" }
    ]
  },
  {
    id: "20260820-141",
    trackers: ["os"],
    category: "重點關注",
    title: "Windows 365 成立五週年：雲端 PC 助力實現大規模、安全且彈性的工作空間",
    summary: "本文回顧了 Windows 365 成立五週年，強調雲端 PC (Cloud PC) 已成為提供安全、可管理、可擴展工作空間的關鍵技術。Windows 365 提供了多種解決方案，包括 Windows 365 Flex（彈性使用）、Windows 365 Reserve（臨時設備）、Windows 365 Link（共享工作區）以及專門用於 AI 代理的 Windows 365 for Agents。在產業認證方面，Microsoft 連續四年被 Gartner 評為 Desktop as a Service (DaaS) 領導者，並被 IDC 評為市場領導者。未來發展重點包括為開發者提供預配置的 Cloud PCs，以及推出 GPU Select 和 32vCPU Cloud PCs，支援 AI/ML 工作負載。此外，Windows 365 for Agents 已可供使用，並持續擴展功能，例如支援透過代理身份存取內部應用程式，以及與 Microsoft Entra 和 Microsoft Intune 整合，協助企業在大規模部署 AI 代理時，仍能維持高度的安全性與管理性。",
    tags: ["Windows 365", "Cloud PC", "AI Agents", "DaaS", "Microsoft Entra", "Microsoft Intune"],
    title_en: "Windows 365 Marks Five Years: Cloud PC Powers Large-Scale, Secure, and Flexible Workspaces",
    summary_en: "This article reviews the five-year anniversary of Windows 365, emphasizing that Cloud PCs have become a critical technology for providing secure, manageable, and scalable workspaces. Windows 365 offers various solutions, including Windows 365 Flex (flexible usage), Windows 365 Reserve (temporary devices), Windows 365 Link (shared workspaces), and Windows 365 for Agents, which is specialized for AI agents. In terms of industry recognition, Microsoft has been named a Gartner Leader in Desktop as a Service (DaaS) for four consecutive years and recognized as a market leader by IDC. Future development focuses include providing pre-configured Cloud PCs for developers, and the launch of GPU Select and 32vCPU Cloud PCs to support AI/ML workloads. Furthermore, Windows 365 for Agents is now available and continuously expanding its features, such as supporting access to internal applications via agent identities, and integrating with Microsoft Entra and Microsoft Intune, helping enterprises maintain high levels of security and manageability when deploying AI agents at scale.",
    tags_en: ["Windows 365", "Cloud PC", "AI Agents", "DaaS", "Microsoft Entra", "Microsoft Intune"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/windowsexperience/2026/08/20/windows-365-turns-five-cloud-pcs-enable-workspaces-at-scale", lang: "EN" }
    ]
  },
  {
    id: "20260820-142",
    trackers: ["os"],
    category: "重點關注",
    title: "Quickshell：用於建構桌面元件的工具包，支援 QML 介面設計",
    summary: "Quickshell 是一個專為開發桌面元件（如工具列或選單）而設計的工具包。它利用 QML（一種用於設計 GUI 應用程式的宣告式語言）來協助開發者，能夠輕鬆地為常見的桌面使用案例創建圖形化工具。Quickshell 提供了便捷的介面撰寫方法，已被多個專案採用，例如 caelestia-shell 和 DankMaterialShell。這些應用程式為 Sway 和 niri 等極簡式視窗管理器提供了完整的桌面環境。本工具包主要用於提升開發效率，並協助開發者快速實現複雜的桌面使用者介面。",
    tags: ["Quickshell", "QML", "GUI", "桌面元件", "Sway", "niri"],
    title_en: "Quickshell: A Toolkit for Building Desktop Components with QML Interface Design",
    summary_en: "Quickshell is a toolkit designed specifically for developing desktop components (such as toolbars or menus). It utilizes QML (a declarative language used for designing GUI applications) to assist developers, enabling the creation of graphical tools for common desktop use cases with ease. Quickshell provides convenient interface writing methods and has been adopted by multiple projects, such as caelestia-shell and DankMaterialShell. These applications provide complete desktop environments for minimal window managers like Sway and niri. The toolkit's primary purpose is to enhance development efficiency and help developers quickly implement complex desktop user interfaces.",
    tags_en: ["Quickshell", "QML", "GUI", "Desktop Component", "Sway", "niri"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083090", lang: "EN" }
    ]
  },
  {
    id: "20260820-143",
    trackers: ["os"],
    category: "重點關注",
    title: "KDE Gear 應用程式套件發布 Version 26.08，強化 Okular 簽名功能與 Dolphin 文件管理器",
    summary: "KDE 團隊發布了 Version 26.08 的 KDE Gear 應用程式集合。本次更新主要針對多個核心應用程式進行了改進。其中，Okular 閱讀器提升了簽名（signing）功能，增強了文件驗證的安全性。Dolphin 文件管理器則改善了文件分組功能，提升了使用者操作效率。此外，Kdenlive 影片編輯器也獲得了多項增強。這是一個典型的應用層級更新，主要目的是提升使用者體驗和功能完整性，而非修補重大安全漏洞。建議使用者根據需求，更新至最新版本以獲取所有功能優化與錯誤修復。",
    tags: ["KDE", "KDE Gear", "Okular", "Dolphin", "Kdenlive", "應用程式更新"],
    title_en: "KDE Gear Application Suite Releases Version 26.08, Enhancing Okular Signing and Dolphin File Manager",
    summary_en: "The KDE team has released Version 26.08 of the KDE Gear application suite. This update includes improvements across several core applications. Specifically, the Okular reader has enhanced its signing functionality, boosting the security of file verification. The Dolphin file manager has improved its file grouping features, thereby increasing user operational efficiency. Furthermore, the Kdenlive video editor has received multiple enhancements. This is a typical application-level update, primarily aimed at improving user experience and functional completeness, rather than patching major security vulnerabilities. Users are advised to update to the latest version as needed to benefit from all feature optimizations and bug fixes.",
    tags_en: ["KDE", "KDE Gear", "Okular", "Dolphin", "Kdenlive", "Application Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089721", lang: "EN" }
    ]
  },
  {
    id: "20260820-144",
    trackers: ["os"],
    category: "重點關注",
    title: "Rust 生態系警訊：惡意 crate `proc-macro1` 污染 crates.io，影響 `arrayref` 等核心函式庫",
    summary: "Rust 語言官方部落格報告，在 crates.io 函式庫倉庫中發現了一個名為 `proc-macro1` 的惡意 crate。更嚴重的是，知名的 `arrayref` crate 近期被重新發布，並將其依賴項設定為此惡意 crate，導致最新版本被移除（yanked）。Rust 團隊已立即移除惡意版本，並恢復被惡意移除的版本。此外，同一作者的其他相關 crate，如 `internment` 和 `append-only-vec` 也受到影響，已採取相同措施並暫時鎖定該帳號以防範。雖然團隊不認為 `arrayref` 的作者是惡意行為者，但懷疑其電腦或憑證已被盜用，目前正積極聯繫該作者以釐清事件全貌。此事件凸顯了 Rust 生態系供應鏈安全面臨的重大風險，開發者應特別注意檢查依賴項的來源與完整性。",
    tags: ["Rust", "crates.io", "供應鏈攻擊", "proc-macro1", "arrayref", "安全警訊"],
    title_en: "Rust Ecosystem Alert: Malicious crate `proc-macro1` pollutes crates.io, affecting core libraries like `arrayref`",
    summary_en: "The official Rust blog reported the discovery of a malicious crate named `proc-macro1` in the crates.io library repository. More critically, the well-known `arrayref` crate was recently republished, setting its dependency to this malicious crate, which led to the removal (yanking) of its latest version. The Rust team immediately removed the malicious version and restored the compromised version. Furthermore, other related crates by the same author, such as `internment` and `append-only-vec`, were also affected, and similar measures were taken, including temporarily locking the account for prevention. Although the team does not believe the author of `arrayref` is malicious, they suspect that their computer or credentials may have been stolen. They are currently actively contacting the author to clarify the full scope of the incident. This incident highlights significant supply chain security risks facing the Rust ecosystem, urging developers to pay special attention to checking the source and integrity of their dependencies.",
    tags_en: ["Rust", "crates.io", "Supply Chain Attack", "proc-macro1", "arrayref", "Security Alert"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089720", lang: "EN" }
    ]
  },
  {
    id: "20260820-145",
    trackers: ["os"],
    category: "重點關注",
    title: "Rust 1.98 重大更新：引入代數浮點運算方法，提升 x86_64 效能",
    summary: "Rust 1.98 版本發布，核心亮點是引入了代數浮點運算方法（algebraic floating-point methods）。這些方法類似於其他編譯器語言中的 `--fast-math` 選項，旨在優化浮點數的加法、減法、乘法、除法和取餘等操作。此更新的動機是解決在現代 x86_64 CPU 上，Rust 進行簡單點積運算時，相較於 C++ 慢達 8 倍的問題，因為編譯器無法重新排序浮點運算以進行更好的向量化。代數方法允許編譯器自由重新排序運算（例如將 `a + b + c + d` 重新排序為 `(a + b) + (c + d)`），從而啟用更廣泛的迴圈向量化，顯著提升效能。然而，由於編譯器優化選擇的不可預測性，這些方法是非確定性的，同一輸入可能在單次運行中產生不同結果，開發者在使用時必須注意此點，且不應依賴返回值來確保程式的正確性。此外，Rust 1.98 也帶來了緩衝整數格式化等其他改動。",
    tags: ["Rust", "Rust 1.98", "浮點數運算", "x86_64", "編譯器優化", "fast-math"],
    title_en: "Rust 1.98 Major Update: Introduction of Algebraic Floating-Point Methods Boosts x86_64 Performance",
    summary_en: "The release of Rust 1.98 introduces algebraic floating-point methods. These methods are similar to the `--fast-math` option found in other compiler languages and are designed to optimize floating-point operations such as addition, subtraction, multiplication, division, and modulo. The motivation for this update is to address a performance issue where Rust's simple dot product calculations on modern x86_64 CPUs can be up to 8 times slower compared to C++, because the compiler cannot reorder floating-point operations for better vectorization. Algebraic methods allow the compiler to freely reorder operations (for example, reordering `a + b + c + d` to `(a + b) + (c + d)`), thereby enabling broader loop vectorization and significantly improving performance. However, because these methods introduce non-deterministic compiler optimization choices, they are non-deterministic; the same input may produce different results in a single run. Developers must be aware of this point and should not rely on the return value to ensure program correctness. Furthermore, Rust 1.98 also brings other changes, such as buffered integer formatting.",
    tags_en: ["Rust", "Rust 1.98", "Floating-Point Arithmetic", "x86_64", "Compiler Optimization", "fast-math"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Rust-1.98-Released", lang: "EN" }
    ]
  },
  {
    id: "20260820-146",
    trackers: ["os"],
    category: "重點關注",
    title: "測試 Intel Xeon 678X 處理器：分析 Hyper-Threading (HT) 對工作站效能的影響",
    summary: "本文針對 Intel Xeon 678X（Granite Rapids WS）處理器，在 HP Z4 G6i 工作站環境下進行了效能測試。該處理器具備 48 個核心，啟用 Hyper-Threading (HT) 後可提供 96 個執行緒，且 TDP 為 300 瓦。測試使用了 Fedora Workstation 44 軟體堆疊，旨在比較在啟用與停用 HT/SMT 狀態下，Xeon 600 系列工作站 CPU 的實際效能差異。測試結果提供了關於 Intel HT 技術在工作站級別應用場景下的性能表現和功耗/散熱監控數據，幫助使用者了解 HT 對於高階工作站處理器的實際影響。",
    tags: ["Intel Xeon 678X", "Hyper-Threading", "工作站", "HP Z4 G6i", "Fedora Workstation 44", "性能測試"],
    title_en: "Testing the Intel Xeon 678X Processor: Analyzing the Impact of Hyper-Threading (HT) on Workstation Performance",
    summary_en: "This article details performance testing conducted on the Intel Xeon 678X (Granite Rapids WS) processor within an HP Z4 G6i workstation environment. The processor features 48 cores and, when Hyper-Threading (HT) is enabled, provides 96 threads, with a TDP of 300W. The tests utilized the Fedora Workstation 44 software stack, aiming to compare the actual performance differences of the Xeon 600 series workstation CPU when HT/SMT is enabled versus disabled. The results provide performance metrics and power/thermal monitoring data regarding Intel HT technology in high-end workstation application scenarios, helping users understand the practical impact of HT on advanced workstation processors.",
    tags_en: ["Intel Xeon 678X", "Hyper-Threading", "Workstation", "HP Z4 G6i", "Fedora Workstation 44", "Performance Testing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/intel-xeon-678x-ht", lang: "EN" }
    ]
  },
  {
    id: "20260820-147",
    trackers: ["os"],
    category: "重點關注",
    title: "Mesa 26.2.1 版本發布：包含多項修復，強化 RADV、RadeonSI 與 Intel ANV 驅動程式功能",
    summary: "Mesa 專案發布了 26.2.1 版本，為先前 26.2 版本提供了多項修復。本次更新涵蓋了多個核心驅動程式的優化與修復，旨在提升穩定性。在 RADV Vulkan 驅動程式方面，修復了 Vulkan Video、ACO 編譯器和 gang submit 等多個問題，特別針對 Vulkan Video 增加了 AV1 的修復。RadeonSI Gallium3D 驅動程式也進行了多項修復。Intel ANV 驅動程式的更新包括確保正確的 ray-tracing shader key 指標傳遞，並新增了在命令緩衝區結束時刷新 L1 和 L2 快取的功能。此外，Mesa 的其他驅動程式以及 WSI 和 NIR 等通用程式碼區域也修復了多處錯誤，包括修復了多個 Mesa 驅動程式中的緩衝區物件參考計數洩漏（reference count leaks）。開發者應考慮升級至 26.2.1，並注意 26.1.8 將是該分支的最後一個修復版本，建議使用者遷移至 26.2 系列。",
    tags: ["Mesa", "Vulkan", "RADV", "RadeonSI", "Intel ANV", "驅動程式更新"],
    title_en: "Mesa 26.2.1 Release: Includes Multiple Fixes Enhancing RADV, RadeonSI, and Intel ANV Drivers",
    summary_en: "The Mesa project has released version 26.2.1, providing multiple fixes over the previous 26.2 version. This update includes optimizations and fixes for several core drivers, aiming to improve stability. For the RADV Vulkan driver, multiple issues were fixed, including those related to Vulkan Video, the ACO compiler, and gang submit. A specific fix for AV1 was added to Vulkan Video. The RadeonSI Gallium3D driver also received multiple fixes. Updates to the Intel ANV driver include ensuring correct ray-tracing shader key attribute passing and adding functionality to flush L1 and L2 caches when the command buffer ends. Furthermore, other Mesa drivers and general code areas like WSI and NIR fixed numerous bugs, including resolving multiple reference count leaks across various Mesa drivers. Developers are advised to consider upgrading to 26.2.1, noting that 26.1.8 will be the last maintenance release for that branch, and recommending users migrate to the 26.2 series.",
    tags_en: ["Mesa", "Vulkan", "RADV", "RadeonSI", "Intel ANV", "Driver Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Mesa-26.2.1-Released", lang: "EN" }
    ]
  },
  {
    id: "20260820-148",
    trackers: ["os"],
    category: "重點關注",
    title: "美國主導全球超大規模資料中心市場：北弗吉尼亞成為核心樞紐",
    summary: "根據 Synergy Research 的分析，美國已成為全球前 20 大超大規模資料中心市場的領頭羊，其中北弗吉尼亞（Northern Virginia）單獨佔據了全球近 12% 的容量。美國的領主地位歸因於其擁有全球 62% 的超大規模營運商總部，並且在多個關鍵服務領域貢獻了近半數的雲端收入。超大規模資料中心是為支援大型雲端和網際網路營運商的運算需求而建的龐大設施。Amazon、Microsoft 和 Google 共同佔據了全球超大規模容量的 57%，位居前列。分析指出，隨著 AI 技術和基礎設施需求的極速增長，電力供應的可用性已成為決定建置地點的關鍵標準，其次是房地產成本、網路基礎設施和地方政策穩定性。雖然北弗吉尼亞曾是焦點，但目前德州（Texas）的營運超大規模容量年增長了 71%，顯示市場正在持續轉移和擴張。",
    tags: ["超大規模資料中心", "Hyperscale", "北弗吉尼亞", "美國", "AI 基礎設施", "Synergy Research"],
    title_en: "US Leads Global Hyperscale Data Center Market: Northern Virginia Emerges as Core Hub",
    summary_en: "According to Synergy Research analysis, the United States has become the leader among the top 20 global hyperscale data center markets, with Northern Virginia alone accounting for nearly 12% of global capacity. The US dominance is attributed to it housing the headquarters of 62% of global hyperscale operators and contributing nearly half of the cloud revenue across multiple key service areas. Hyperscale data centers are massive facilities built to support the computing demands of large cloud and internet operators. Amazon, Microsoft, and Google collectively account for 57% of global hyperscale capacity, maintaining a leading position. The analysis points out that as AI technology and infrastructure demand accelerate, power supply availability has become the critical determinant for facility location, followed by real estate costs, network infrastructure, and local policy stability. While Northern Virginia was once the focus, Texas has seen its operational hyperscale capacity grow by 71% year-over-year, indicating continued market shift and expansion.",
    tags_en: ["Hyperscale Data Center", "Hyperscale", "Northern Virginia", "US", "AI Infrastructure", "Synergy Research"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/08/20/us-claims-15-of-the-worlds-top-20-hyperscale-datacenter-locations/5290436", lang: "EN" }
    ]
  },
  {
    id: "20260820-149",
    trackers: ["os"],
    category: "重點關注",
    title: "研究人員揭露：透過 Linux 設備可將其納入 Apple Find My 網路，並讀取分享的即時位置資料",
    summary: "資安研究人員 Zerotistic 提出了一種方法，展示了如何將一台基於 Linux 的非 Apple 設備，透過模擬 Apple 的標準認證流程，成功註冊到 Apple 的 Find My 網路中。Find My 本來是專為 Apple 生態系統設計的定位服務，用於追蹤 AirTags、iPad 或其他 Apple 設備，甚至包含個人位置分享。該研究指出，雖然這並非任意獲取任何 Apple 用戶位置的漏洞，但它證明了非 Apple 設備可以被「欺騙」進入該網路。研究人員首先利用 Apple 的 GrandSlam 認證協議，透過建立自訂的 CSR（使用 PKCS#10 格式和 SHA-1 簽名）來取得 Apple Identity Services (IDS) 設備憑證。接著，他們讓 Linux 設備通過一系列的子服務訂閱和憑證簽署，成功讓 Find My 服務認為該設備具備接收位置資料的能力。最終，研究人員開發了 Linux 腳本，能夠解包 Apple 的訊息封裝，提取並解密從 Apple SearchParty 服務獲取的加密位置資料，從而實現了對已分享位置的即時監控。此發現凸顯了 Apple 服務在開放性與信任機制上的潛在風險。",
    tags: ["Find My", "Linux", "Apple", "IDS", "位置追蹤", "Zerotistic", "供應鏈"],
    title_en: "Researchers Reveal Method to Integrate Linux Devices into Apple Find My Network and Read Shared Live Location Data",
    summary_en: "Cybersecurity researchers at Zerotistic proposed a method demonstrating how a non-Apple, Linux-based device can successfully register into Apple's Find My network by simulating Apple's standard authentication processes. Find My is a location service designed for the Apple ecosystem, used to track AirTags, iPads, or other Apple devices, and even includes personal location sharing. The research pointed out that while this does not constitute arbitrary access to any Apple user's location, it proves that non-Apple devices can be 'tricked' into joining the network. The researchers first utilized Apple's GrandSlam authentication protocol, obtaining an Apple Identity Services (IDS) device certificate by generating a custom CSR (using PKCS#10 format and SHA-1 signing). Next, they allowed the Linux device to successfully convince the Find My service of its ability to receive location data through a series of sub-service subscriptions and certificate signings. Finally, the researchers developed a Linux script capable of unpacking Apple's message payload, extracting, and decrypting encrypted location data obtained from the Apple SearchParty service, thereby achieving real-time monitoring of shared locations. This discovery highlights potential risks in the openness and trust mechanisms of Apple's services.",
    tags_en: ["Find My", "Linux", "Apple", "IDS", "Location Tracking", "Zerotistic", "Supply Chain"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/20/researcher-tricks-apples-find-my-into-sharing-location-data-with-linux/5290496", lang: "EN" }
    ]
  },
  {
    id: "20260820-150",
    trackers: ["os"],
    category: "重點關注",
    title: "Adversa AI揭露Grok聊天機器人面臨「加密上下文注入」風險，利用加密指令繞過安全防護",
    summary: "安全研究機構 Adversa AI 發現 xAI 的 Grok 網頁聊天代理（web chat agent）存在一種新型的提示注入（prompt injection）漏洞。此攻擊手法稱為「間接提示注入」（indirect prompt injection），攻擊者可以在網頁上植入帶有惡意指令的內容，誘使 AI 模型在總結網頁內容時執行有害操作。\n\nAdversa 的獨特之處在於，它利用了「加密上下文注入」（cryptographic context injection）。攻擊者將加密的惡意指令和解密金鑰一同放置在網頁上。由於輸入過濾器（guardrail scanner）無法解讀加密文本，它會將其傳遞給模型。模型隨後利用金鑰在內部執行環境（code execution sandbox）中解密指令，從而執行惡意內容。\n\n在概念驗證（PoC）中，研究人員展示了該技術可被用於竊取用戶在 Grok.com 的聊天記錄，包括用戶名稱、粗略位置、訂閱層級和完整的提示內容。雖然 Gemini 等模型因缺乏外部網站存取權限，無法完全重現此攻擊，但該技術仍可被用於繞過安全過濾器，例如讓模型生成建構燃燒武器的指令。\n\nxAI 已於 2026 年 6 月 3 日接獲此報告，但截至 8 月 19 日，該技術在 Grok.com 上仍有效。建議開發者和平台方應加強對模型執行環境的監控，特別是當模型被賦予程式碼和工具使用權時，應將安全檢查的單元從「字串」提升到「執行行為」層面。",
    tags: ["xAI", "Grok", "Prompt Injection", "加密上下文注入", "AI 安全", "Indirect Prompt Injection"],
    title_en: "Adversa AI Uncovers 'Cryptographic Context Injection' Risk in Grok Chatbot, Using Encrypted Commands to Bypass Defenses",
    summary_en: "Security research firm Adversa AI discovered a novel prompt injection vulnerability in xAI's Grok web chat agent. This attack method is called 'indirect prompt injection,' where an attacker can embed content containing malicious instructions on a webpage, tricking the AI model into executing harmful operations while summarizing the page content.\n\nAdversa's unique contribution is the use of 'cryptographic context injection.' The attacker places encrypted malicious instructions and the corresponding decryption key together on the webpage. Because the input filter (guardrail scanner) cannot decipher the encrypted text, it passes it to the model. The model then uses the key to decrypt the instructions within its internal execution environment (code execution sandbox), thereby executing the malicious content.\n\nIn a Proof of Concept (PoC), researchers demonstrated that this technique could be used to steal user chat history from Grok.com, including usernames, approximate location, subscription tier, and full prompt content. Although models like Gemini cannot fully replicate this attack due to lacking external website access, the technique can still be used to bypass safety filters, such as prompting the model to generate instructions for constructing incendiary weapons.\n\nxAI received this report on June 3, 2026, but as of August 19, the technique remains effective on Grok.com. It is recommended that developers and platform providers strengthen monitoring of the model's execution environment. Specifically, when models are granted code and tool usage permissions, safety checks should be elevated from a 'string' level to an 'execution behavior' level.",
    tags_en: ["xAI", "Grok", "Prompt Injection", "Cryptographic Context Injection", "AI Security", "Indirect Prompt Injection"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/20/grok-chat-duped-into-swallowing-injected-instructions/5290019", lang: "EN" }
    ]
  },
  {
    id: "20260820-151",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "法國稅務機構資料外洩：60 萬名納稅人資料包含私人訊息遭竊",
    summary: "法國總公共財政局（DGFiP）證實，在最近一次資料入侵事件中，攻擊者可能竊取了與數百名納稅人交換的訊息內容。受影響的納稅人約有 250 人，其資料包含私人訊息。整體而言，約 60 萬名個體受影響，除了稅號、婚姻狀況、電子郵件和郵寄地址、電話號碼等個人資料外，還包含家庭組成、依賴人數、家庭平均收入等稅務記錄。對於約 25 萬家企業和專業人士，受影響資料僅限於公司名稱和 SIREN 號碼。DGFiP 表示，部分資料已為公開資訊。機構已透過電子郵件或郵件通知受影響納稅人，並警告犯罪分子可能利用這些資料進行更具說服力的網路釣魚攻擊。此外，DGFiP 還披露了其空置繼承門戶網站（PSV）存在「技術漏洞」，並已暫停該服務進行調查，但目前尚無證據顯示個人資料外洩。此事件凸顯了法國公共部門面臨的嚴峻網路安全挑戰。",
    tags: ["DGFiP", "法國政府", "資料外洩", "網路安全", "個人隱私", "Phishing"],
    title_en: "French Tax Authority Data Leak: Private Information of 600,000 Taxpayers Stolen",
    summary_en: "The French Directorate General of Public Finances (DGFiP) confirmed that in a recent data breach incident, attackers may have stolen message content exchanged with several hundred taxpayers. Approximately 250 affected taxpayers' data included private messages. Overall, about 600,000 individuals were affected. In addition to personal data such as tax IDs, marital status, email addresses, mailing addresses, and phone numbers, the records included tax information such as household composition, number of dependents, and average household income. For approximately 250,000 businesses and professionals, the affected data was limited to company names and SIREN numbers. The DGFiP stated that some of the data was already public information. The institution has notified affected taxpayers via email or mail and warned that criminals may use this data for more convincing phishing attacks. Furthermore, the DGFiP disclosed that its vacant inheritance portal website (PSV) had a \"technical vulnerability\" and has suspended the service for investigation, but there is currently no evidence of personal data leakage. This incident highlights the severe cybersecurity challenges facing the French public sector.",
    tags_en: ["DGFiP", "French Government", "Data Leak", "Cybersecurity", "Privacy", "Phishing"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/20/french-tax-authority-says-break-in-exposed-data-of-600k-including-some-private-messages/5290249", lang: "EN" }
    ]
  },
  {
    id: "20260820-152",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 技術故障導致部分受審核資安研究人員失去 Daybreak Blue 存取權",
    summary: "OpenAI 的 Trusted Access for Cyber (TAC) 專案遭遇技術故障，導致部分已通過審核的資安研究人員突然失去 Daybreak Blue 存取權。該專案旨在為經過驗證的資安防禦者提供進階的網路能力，以尋找和修復漏洞。受影響的用戶發現，他們先前已批准的狀態消失，甚至無法透過重新驗證流程恢復權限。部分研究人員嘗試按照 OpenAI 的指示重新驗證，但系統卻回報帳戶不符合資格或無法開始流程。OpenAI 方面承認了此技術問題，並表示這不是他們期望的體驗，但對於受影響用戶無法恢復存取權的具體原因，OpenAI 並未提供詳細說明。此事件凸顯了大型科技公司在管理高度敏感的內部資安資源時，其系統穩定性和流程可靠性的重要性。",
    tags: ["OpenAI", "Daybreak Blue", "Trusted Access for Cyber (TAC)", "資安研究", "系統故障", "存取控制"],
    title_en: "OpenAI Technical Glitch Causes Loss of Daybreak Blue Access for Some Vetted Cybersecurity Researchers",
    summary_en: "The OpenAI Trusted Access for Cyber (TAC) project experienced a technical malfunction, causing some vetted cybersecurity researchers to suddenly lose their Daybreak Blue access. The project is designed to provide advanced network capabilities to verified security defenders for vulnerability discovery and remediation. Affected users reported that their previously approved status had disappeared, and they were unable to restore their privileges even through the re-verification process. Some researchers who attempted to re-verify following OpenAI's instructions received system messages indicating that their accounts were ineligible or that the process could not be started. OpenAI acknowledged the technical issue, stating it was not the intended experience, but did not provide a detailed explanation for the specific reason why affected users could not restore their access. This incident highlights the critical importance of system stability and process reliability when large technology companies manage highly sensitive internal security resources.",
    tags_en: ["OpenAI", "Daybreak Blue", "Trusted Access for Cyber (TAC)", "Cybersecurity Research", "System Failure", "Access Control"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/20/openai-glitch-locks-out-vetted-cyber-researchers-and-some-cant-get-back-in/5290238", lang: "EN" }
    ]
  },
  {
    id: "20260820-153",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "拉脫維亞交通安全局遭駭，120萬公民個人資料外洩，涉及車輛支付與身份資訊",
    summary: "拉脫維亞交通安全局（CSDD）遭受大規模駭客攻擊，導致約120萬名公民的個人資料外洩。攻擊者非法存取了自2008年累積的車輛支付收據資料庫，並竊取了多達20萬個企業的資訊。外洩的敏感資料包括居民身份證號碼、企業營業號、車牌號、支付明細和住址等。拉脫維亞事件應對小組（CERT.LV）警告，犯罪分子可能利用這些資料進行網路釣魚和社會工程金融詐騙。調查顯示，駭客利用了CSDD系統未經保護的漏洞，而CSDD本身也未能遵守基本的安全規範。CSDD指出，由於其與負責IT基礎設施和安全監控的拉脫維亞電信公司Tet簽訂了5年合約，責任不應僅歸於CSDD。然而，Tet則強烈反駁，聲稱其僅是部分系統管理合約，預計雙方之間將爆發激烈的法律爭議。事件後，CSDD高層已相繼辭職。",
    tags: ["拉脫維亞", "CSDD", "CERT.LV", "駭客攻擊", "個人資料外洩", "網路安全"],
    title_en: "Latvian Traffic Safety Agency Hacked, 1.2 Million Citizens' Personal Data Leaked, Including Vehicle Payment and Identity Information",
    summary_en: "The Latvian Traffic Safety Agency (CSDD) suffered a massive cyberattack, resulting in the leak of personal data belonging to approximately 1.2 million citizens. Attackers illegally accessed a vehicle payment receipt database accumulated since 2008, and stole information belonging to up to 200,000 businesses. The leaked sensitive data includes residents' ID numbers, business registration numbers, license plates, payment details, and addresses. The Latvian Incident Response Team (CERT.LV) warned that criminals may use this data for phishing and social engineering financial fraud. Investigations revealed that the hackers exploited unprotected vulnerabilities in the CSDD system, and CSDD itself failed to adhere to basic security standards. CSDD pointed out that since it signed a five-year contract with Latvian telecommunications company Tet, which is responsible for IT infrastructure and security monitoring, the responsibility should not rest solely with CSDD. However, Tet strongly refuted this, claiming it was only a partial system management contract, suggesting that a fierce legal dispute is expected between the two parties. Following the incident, several high-ranking CSDD officials resigned.",
    tags_en: ["Latvia", "CSDD", "CERT.LV", "Cyberattack", "Data Leakage", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145307", lang: "EN" }
    ]
  },
  {
    id: "20260820-154",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "CISA與FBI揭露：Medusa勒索軟體組織擴張，攻擊目標鎖定醫療與關鍵基礎設施",
    summary: "美國網路安全與基礎設施安全局（CISA）和聯邦調查局（FBI）宣布，自2021年Medusa勒索軟體組織成立以來，累積受害者已超過500個機構。Medusa的攻擊規模在過去一年內擴大，目標集中於關鍵基礎設施和醫療部門。該組織曾攻擊密西西比大學醫療中心（UMMC），癱瘓了包括兒科和重症監護室在內的關鍵醫療網路。Medusa的攻擊手法包括在漏洞公開前夕取得漏洞利用程式（exploit）並惡用，或在官方公告後24小時內迅速武器化，以利用修補的時差。他們透過RaaS（Ransomware as a Service）模式運營，並向初期入侵經紀商（IAB）提供高額資金，擴大了勢力。攻擊者利用AnyDesk和Atera等正常遠端控制程式進行活動，以規避偵測。安全專家警告，Medusa已將從初期入侵到資料竊取的所需時間大幅縮短，從數天縮短至數小時。",
    tags: ["Medusa", "CISA", "FBI", "勒索軟體", "RaaS", "關鍵基礎設施", "醫療部門"],
    title_en: "CISA and FBI Reveal: Medusa Ransomware Group Expands, Targeting Healthcare and Critical Infrastructure",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) and the Federal Bureau of Investigation (FBI) announced that since the establishment of the Medusa ransomware group in 2021, they have affected over 500 organizations. Medusa's attack scope has expanded over the past year, focusing on critical infrastructure and the healthcare sector. The group previously attacked the University of Mississippi Medical Center (UMMC), paralyzing critical medical networks including pediatrics and intensive care units. Medusa's tactics include acquiring and exploiting vulnerabilities just before they are publicly disclosed, or rapidly weaponizing them within 24 hours of an official announcement to exploit patching delays. They operate using a Ransomware as a Service (RaaS) model, providing high funding to Initial Access Brokers (IABs) to expand their reach. Attackers utilize legitimate remote control programs such as AnyDesk and Atera to evade detection. Security experts warn that Medusa has significantly reduced the time required from initial intrusion to data exfiltration, shortening it from days to mere hours.",
    tags_en: ["Medusa", "CISA", "FBI", "Ransomware", "RaaS", "Critical Infrastructure", "Healthcare Sector"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145303", lang: "EN" }
    ]
  },
  {
    id: "20260820-155",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "導入 AI 的最大障礙是「資訊洩漏的擔憂」：企業資料治理與文件一元化的重要性",
    summary: "本調查彙整了由文件中央化及 AI 專業企業 엠클라우독（M CloudDock）針對參加 ISEC 2026 的 373 位實務人員所進行的「AI 準備度診斷」結果。調查結果顯示，企業猶豫導入 AI 的最大障礙是「資訊洩漏的擔憂」，有 56.6% 的受訪者提出此點。這個比例高於希望基於自家資料建立專用 AI 的群體（16.6%）的三倍以上。然而，在抱持安全疑慮的受訪者中，實際能適切管理文件存取權限的比例卻偏低，此落差被指出。此外，關於 AI 的實際應用情況，有 83.1% 的受訪者仍停留在「AI 自動化未完成」的初期階段，顯示決策流程仍依賴人工。專家強調，若要成功利用 AI，首先必須建立一個能安全彙集分散式內部資料的「文件中央化」環境，並將其作為安全基礎，這是不可或缺的。",
    tags: ["AI", "資訊洩漏", "文件中央化", "資料治理", "ISEC 2026", "엠클라우독"],
    title_en: "The Biggest Barrier to Adopting AI is 'Concerns Over Information Leakage': The Importance of Enterprise Data Governance and Document Unification",
    summary_en: "This survey compiles the results of an 'AI Readiness Assessment' conducted by M CloudDock, a professional enterprise specializing in document centralization and AI, for 373 practitioners attending ISEC 2026. The findings show that the biggest obstacle preventing enterprises from adopting AI is 'concerns over information leakage,' cited by 56.6% of respondents. This proportion is more than three times higher than the group that wishes to build dedicated AI based on proprietary data (16.6%). However, among respondents who expressed security concerns, the actual proportion who can properly manage document access permissions was found to be relatively low, highlighting a significant gap. Furthermore, regarding actual AI application, 83.1% of respondents remain in the early stage of 'incomplete AI automation,' indicating that decision-making processes still rely on manual labor. Experts emphasize that to successfully utilize AI, it is first necessary to establish a 'centralized document' environment that can safely aggregate dispersed internal data, and this must serve as an indispensable security foundation.",
    tags_en: ["AI", "Information Leakage", "Document Centralization", "Data Governance", "ISEC 2026", "M CloudDock"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145299", lang: "EN" }
    ]
  },
  {
    id: "20260820-156",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "CISO 面臨「責任過重、權限不足」的悖論：企業治理結構亟需改革",
    summary: "本文深入探討當代企業中「資訊安全最高責任人」（CISO）所面臨的「CISO 悖論」（CISO Paradox）。儘管 CISO 在企業中擁有如同 CEO 或 CFO 一般的權威地位，負責制定整體安全策略，但實際上他們往往缺乏實質的決策權、預算控制權和人力資源的支配權。這導致 CISO 必須耗費大量時間向其他高階主管「銷售」安全投資的必要性，而非專注於預防性防禦，使其只能處於事後應變的「反應式消防員」角色。\n\n全球趨勢顯示，CISO 面臨的挑戰包括：預算難以確保、需兼任其他職務、以及因 SEC 等法規要求（如 SolarWinds 和 Uber 案例）而面臨的極大法律責任。這種「責任無限大，權限最小」的結構性失衡，已成為全球治理層面的重大危機。\n\n文章提出三種改善 CISO 治理結構的建議：\n1. **建立獨立報告體系**：將 CISO 直接匯報給 CEO 或董事會風險/審計委員會，避免與專注於成本的 CIO 產生利益衝突。\n2. **賦予獨立預算控制權**：建議將至少 10%~15% 的 IT 預算獨立分配給 CISO，能顯著提高新威脅的應對速度。\n3. **提升戰略地位**：將 CISO 從「技術顧問」提升為具備全公司「戰略風險管理權限」的執行層級，甚至賦予對新服務或併購的「否決權」（Veto）。\n\n作者呼籲，企業高階主管和董事會必須將 CISO 定位為具備實質控制權的 C-Level 領導者，才能建立起穩固的防禦生態系統。",
    tags: ["CISO", "CISO Paradox", "企業治理", "資訊安全", "風險管理", "SEC"],
    title_en: "The CISO Paradox: Navigating the Dilemma of Overwhelming Responsibility and Insufficient Authority in Corporate Governance",
    summary_en: "This article delves into the 'CISO Paradox' faced by Chief Information Security Officers (CISOs) in modern enterprises. Although CISOs hold an authoritative position comparable to a CEO or CFO, responsible for setting overall security strategy, they often lack substantive decision-making power, budget control, and human resource authority. This forces CISOs to spend significant time 'selling' the necessity of security investments to other senior executives, rather than focusing on proactive defense, relegating them to a reactive 'firefighter' role. Global trends indicate that CISO challenges include difficulty securing budgets, having to juggle multiple roles, and facing immense legal liability due to regulatory requirements (such as those from the SEC, citing the SolarWinds and Uber cases). This structural imbalance—of 'infinite responsibility and minimal authority'—has become a major crisis in global governance. The article proposes three ways to improve CISO governance structure: 1. **Establish an Independent Reporting Structure**: Having the CISO report directly to the CEO or the Board's Risk/Audit Committee, thereby avoiding conflicts of interest with the CIO, who often focuses on cost. 2. **Grant Independent Budgetary Control**: Suggesting that at least 10%–15% of the IT budget be allocated independently to the CISO, which can significantly improve the speed of responding to new threats. 3. **Elevate Strategic Status**: Promoting the CISO from a 'technical advisor' to an executive level with company-wide 'strategic risk management authority,' even granting a 'veto' power over new services or mergers and acquisitions. The author urges that corporate senior management and the board must position the CISO as a C-Level leader with genuine control to build a robust defense ecosystem.",
    tags_en: ["CISO", "CISO Paradox", "Corporate Governance", "Information Security", "Risk Management", "SEC"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145290", lang: "EN" }
    ]
  },
  {
    id: "20260820-157",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Softcamp與Inmi-rae Strategy Institute簽署合作協議，深化公有及國防市場佈局",
    summary: "資安企業Softcamp與戰略諮詢機構Inmi-rae Strategy Institute於19日簽署了業務合作協議。此次合作旨在結合Softcamp的資安技術能力與Inmi-rae Strategy Institute的政策諮詢資源，共同拓展公有採購市場及國防市場的業務版圖。隨著公有機構和國防領域推動雲端轉型及AI導入，對文件安全、網路間資料傳輸、供應鏈安全等需求日益增加。然而，公有及國防採購流程複雜，即使技術能力強，若缺乏政策和制度理解，進入市場也會耗時。本次合作將利用Inmi-rae Strategy Institute的政策諮詢經驗，協助Softcamp將其資安解決方案與公有政策及國家安全領域深度結合，擴大業務範圍。Inmi-rae Strategy Institute將在政府支援事業發掘、公有採購增長、國防採購業務進入可能性檢視等五個領域提供諮詢服務，助力Softcamp擴大公有採購註冊，並進軍國防資安市場。",
    tags: ["Softcamp", "Inmi-rae Strategy Institute", "公有採購", "國防市場", "資安", "AI"],
    title_en: "Softcamp and Inmi-rae Strategy Institute Sign Cooperation Agreement to Deepen Public and Defense Market Penetration",
    summary_en: "Cybersecurity company Softcamp and strategic consulting firm Inmi-rae Strategy Institute signed a business cooperation agreement on the 19th. This collaboration aims to combine Softcamp's cybersecurity technical capabilities with Inmi-rae Strategy Institute's policy consulting resources to jointly expand their market presence in the public procurement and defense sectors. As public institutions and the defense sector drive cloud transformation and AI adoption, the demand for document security, inter-network data transmission, and supply chain security is increasing. However, public and defense procurement processes are complex; even with strong technical capabilities, entering the market is time-consuming without understanding the policies and systems. This cooperation will utilize Inmi-rae Strategy Institute's policy consulting expertise to help Softcamp deeply integrate its cybersecurity solutions with public policy and national security domains, thereby expanding its business scope. Inmi-rae Strategy Institute will provide consulting services in five areas: identifying government-supported projects, public procurement growth, and feasibility assessment for defense procurement entry, helping Softcamp expand its public procurement registrations and enter the defense cybersecurity market.",
    tags_en: ["Softcamp", "Inmi-rae Strategy Institute", "Public Procurement", "Defense Market", "Cybersecurity", "AI"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145287", lang: "EN" }
    ]
  },
  {
    id: "20260820-158",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Fortinet 收購 Virtue AI，強化 AI 應用與 Agent 的全生命週期安全保護",
    summary: "網路安全解決方案公司 Fortinet 宣布收購 AI 安全公司 Virtue AI。此舉旨在將 Virtue AI 的技術整合到 FortiGate HyperScale 防火牆等現有的 AI 安全產品線，強化企業在導入和營運 AI 系統時的安全性。隨著 AI 應用和自律 Agent 的快速普及，攻擊面已擴展至 Prompt、模型、Agent、API 呼叫和 AI 基礎設施等環節，企業必須同時確保 AI 的安全營運。Fortinet 透過其 FortiAIGate 已能保護 LLM 免受 Prompt Injection、資料外洩和模型中毒等威脅。收購 Virtue AI 後，Fortinet 的安全範圍擴展至 AI 模型和應用程式、Agent 的開發到實際營運全週期。主要功能包括：在超過 50 個虛擬環境和 14 個高風險領域預先診斷 AI Agent 的漏洞（Red Teaming）；尋找未授權的 AI 工具並預先阻止惡意指令執行（Agent 保護與治理）；以及提供持續驗證功能，自動檢查模型更新或政策調整帶來的風險，並生成稽核證據。此外，系統能對文字、圖像、影音等內容應用安全政策，實時防禦敏感資訊洩露、AI 越獄（jailbreak）嘗試和惡意程式碼外洩。此整合使 Fortinet 能提供涵蓋網路、端點、雲端、應用程式乃至 AI 系統的整合式 AI 原生安全結構。",
    tags: ["Fortinet", "Virtue AI", "AI 安全", "FortiAIGate", "AI Agent", "Prompt Injection"],
    title_en: "Fortinet Acquires Virtue AI to Enhance Full Lifecycle Security for AI Applications and Agents",
    summary_en: "Cybersecurity solutions company Fortinet announced the acquisition of AI security company Virtue AI. This move aims to integrate Virtue AI's technology into existing AI security product lines, such as the FortiGate HyperScale firewall, thereby strengthening enterprise security when deploying and operating AI systems. With the rapid proliferation of AI applications and autonomous Agents, the attack surface has expanded to include prompts, models, Agents, API calls, and AI infrastructure. Enterprises must ensure secure AI operation across all these areas. Fortinet's FortiAIGate already protects LLMs from threats like Prompt Injection, data leakage, and model poisoning. Following the acquisition of Virtue AI, Fortinet's security scope expands to cover the entire lifecycle of AI models and applications, from development to actual operation. Key capabilities include: pre-diagnosing vulnerabilities in AI Agents through Red Teaming across over 50 virtual environments and 14 high-risk domains; identifying and preemptively blocking unauthorized AI tools and malicious command execution (Agent Protection and Governance); and providing continuous validation functionality that automatically checks risks introduced by model updates or policy adjustments, while generating audit evidence. Furthermore, the system can apply security policies to various content types, including text, images, and video, providing real-time defense against sensitive information leakage, AI jailbreak attempts, and malicious code exfiltration. This integration enables Fortinet to offer an integrated, AI-native security architecture covering networks, endpoints, cloud, applications, and even AI systems.",
    tags_en: ["Fortinet", "Virtue AI", "AI Security", "FortiAIGate", "AI Agent", "Prompt Injection"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145272", lang: "EN" }
    ]
  },
  {
    id: "20260820-159",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "AI自動化攻擊工具在暗網流通，降低複雜漏洞攻擊門檻，威脅級別升級",
    summary: "資安公司Trellix發布報告指出，目前暗網地下論壇上正大量流通各種AI驅動的駭客工具與服務。這些工具包括偵察工具、憑證販售、以及AI即服務(AIaaS)平台等高階攻擊工具。其中，如APEX AI可僅輸入目標網域，便自動生成國家級駭客水準的客製化攻擊情境與勒索軟體傳播計畫。另有Metamorphic Crypter等工具，能規避Windows Defender等主流防毒解決方案的特徵碼偵測。更令人擔憂的是，MessiahGPT等AI模型已移除倫理安全機制，可無限支援惡意程式碼生成和漏洞攻擊(exploit)代碼的製作。專家警告，AI自動化工具大幅降低了過去需要高度專業知識才能執行的複雜漏洞攻擊的技術門檻，使得原本只有APT組織能使用的複雜攻擊手法，現在已商品化，甚至低價販售。Proofpoint也發現，用於操縱AI代理的間接提示注入攻擊工具，正以低價在暗網交易，加速了網路犯罪的普及化。",
    tags: ["Trellix", "AIaaS", "暗網", "APEX AI", "MessiahGPT", "漏洞攻擊", "網路犯罪"],
    title_en: "AI Automation Attack Tools Circulate on Dark Web, Lowering the Barrier for Complex Vulnerability Exploits, Escalating Threat Levels",
    summary_en: "A report released by cybersecurity firm Trellix indicates that various AI-driven hacking tools and services are currently circulating widely on dark web forums. These tools include advanced attack utilities such as reconnaissance tools, credential marketplaces, and AI-as-a-Service (AIaaS) platforms. For instance, APEX AI can automatically generate customized, nation-state level attack scenarios and ransomware propagation plans merely by inputting a target domain. Other tools, such as Metamorphic Crypter, can evade signature detection by mainstream antivirus solutions like Windows Defender. Of greater concern is that AI models like MessiahGPT have removed ethical safety mechanisms, allowing for unlimited support in generating malicious code and exploit code for vulnerability attacks. Experts warn that AI automation tools significantly lower the technical barrier for complex vulnerability exploits, which previously required highly specialized knowledge. Consequently, complex attack methods once exclusive to APT organizations are now commoditized and even sold cheaply. Proofpoint has also found that tools for indirect prompt injection attacks, used to manipulate AI agents, are being traded cheaply on the dark web, accelerating the popularization of cybercrime.",
    tags_en: ["Trellix", "AIaaS", "Dark Web", "APEX AI", "MessiahGPT", "Vulnerability Exploits", "Cybercrime"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145252", lang: "EN" }
    ]
  },
  {
    id: "20260820-160",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "韓國安全專家在DEF CON 34雲端村嶄露實力，主導頂級駭客競賽內容設計",
    summary: "韓國安全專家團隊在美國拉斯維加斯舉行的DEF CON 34駭客大會雲端村（Cloud Village）的CTF「Apex Park」中表現出色。該競賽結合了AWS、GCP、Azure等主流雲端環境，旨在檢驗頂尖駭客的雲端安全能力。韓國團隊不僅在競賽中表現優異，更在內容設計環節發揮了關鍵作用。他們主導了本次大會共47道題目中的15道，特別是最高難度的「Insane」級別題目全部由韓國團隊負責。這證明了韓國安全社群已能從單純的參與者，躍升為能夠主導全球頂級安全活動的內容設計者和協作者。這場活動展示了跨國、跨語言的技術交流與深度合作，為韓國安全社群在全球舞台上建立更穩固的基礎奠定了重要基礎。",
    tags: ["DEF CON 34", "Cloud Village", "CTF", "AWS", "GCP", "Azure", "雲端安全"],
    title_en: "South Korean Security Experts Shine at DEF CON 34 Cloud Village, Leading Top-Tier Hacking Competition Design",
    summary_en: "A team of South Korean security experts performed exceptionally well at the CTF 'Apex Park' held in the Cloud Village at DEF CON 34 in Las Vegas, USA. This competition combined mainstream cloud environments such as AWS, GCP, and Azure, aiming to test the cloud security capabilities of top hackers. The Korean team not only excelled in the competition but also played a crucial role in the content design. They were responsible for 15 out of the total 47 questions, including all the highest difficulty 'Insane' level questions. This demonstrates that the Korean security community has advanced from merely being participants to becoming content designers and collaborators capable of leading global top-tier security events. This activity showcased international, cross-language technical exchange and deep cooperation, laying an important foundation for the Korean security community to establish a more solid presence on the global stage.",
    tags_en: ["DEF CON 34", "Cloud Village", "CTF", "AWS", "GCP", "Azure", "Cloud Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145258", lang: "EN" }
    ]
  },
  {
    id: "20260820-161",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "2026 KISIA資訊保護競賽舉辦：檢驗下一代資安人才能力",
    summary: "科學技術情報通信部（과학기술정보통신부）與韓國資訊保護產業協會（KISIA）為發掘下一代資安人才，成功舉辦了「2026 KISIA資訊保護競賽」本賽。本次競賽採用CTF（Capture The Flag）模式，讓全國大學（研究生）學生以團隊形式比拼駭客防禦實力。共有163支隊伍報名，展現了極高的競爭率。本賽的參賽者挑戰了系統駭客、逆向工程（리버싱）、鑑識（포렌식）等高難度問題。特別是，本次競賽的題目經過主要AI模型進行事前驗證，設計上確保了無法僅靠簡單提問就能解決，展現了要求參賽者深入探究原理的高完成度。在激烈的競爭之後，「트레저」(Trezor) 隊伍榮獲最高獎，KISIA表示未來將持續連結公私學界，支持年輕人才與產業現場接軌的決心。",
    tags: ["KISIA", "資訊保護", "CTF", "資安", "科學技術情報通信部", "人才培育"],
    title_en: "2026 KISIA Information Protection Competition Held: Testing Next-Generation Cybersecurity Talent",
    summary_en: "The Ministry of Science and ICT (과학기술정보통신부) and the Korea Information Security Industry Association (KISIA) successfully hosted the '2026 KISIA Information Protection Competition' to discover next-generation cybersecurity talent. This competition utilized the Capture The Flag (CTF) format, allowing university (graduate) students nationwide to compete in team-based hacking defense skills. A total of 163 teams registered, demonstrating extremely high competition. Participants challenged themselves with high-difficulty problems such as system hacking, reverse engineering (리버싱), and forensics (포렌식). Notably, the competition questions were pre-verified by major AI models, ensuring that they could not be solved merely by simple questioning, thus demonstrating a high level of difficulty that required participants to deeply investigate the underlying principles. Following the intense competition, the 'Trezor' team won the highest prize. KISIA stated its commitment to continuously connecting the public, private, and academic sectors to help young talent align with industry demands.",
    tags_en: ["KISIA", "Information Protection", "CTF", "Cybersecurity", "Ministry of Science and ICT", "Talent Development"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145253", lang: "EN" }
    ]
  }
];
