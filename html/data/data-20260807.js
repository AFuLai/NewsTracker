// data-20260807.js — 2026-08-07
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-07"] = [
  {
    id: "20260807-001",
    trackers: ["security"],
    category: "重大事件",
    title: "UNC6671 勒索集團透過語音釣魚攻陷多國企業，獲利逾千萬美元",
    summary: "黑客組織 UNC6671（又稱 Cordial Spider）鎖定金融、科技與法律等產業，透過語音釣魚（Vishing）偽裝成 IT 支援人員聯繫員工個人手機，以緊急安全升級為由引導至中間人（AitM）釣魚頁面。攻擊者藉此竊取憑證與 MFA 權杖，並在移除原驗證設備後綁定惡意 MFA 設備以維持存取權。隨後透過自動化 Python 與 PowerShell 腳本從 Microsoft 365 及 Okta 等雲端環境勒索資料。該組織頻繁變更 Redact、Pink、Helix 等勒索品牌以分散追蹤，於 2026 年 1 月至 5 月間已獲利超過 1,060 萬美元比特幣。專家建議企業應採用具抗釣魚能力的 MFA 機制。",
    tags: ["UNC6671", "Cordial Spider", "Vishing", "AitM", "Okta", "Microsoft 365", "MFA 繞過", "社交工程"],
    title_en: "Ransomware Group UNC6671 Breaches Multiple International Companies via Voice Phishing, Earning Over $10 Million",
    summary_en: "The hacking group UNC6671 (also known as Cordial Spider) targeted the finance, technology, and legal sectors. They contacted employees' personal mobile phones using voice phishing (Vishing), impersonating IT support staff and claiming an urgent security upgrade was required. This led victims to a Man-in-the-Middle (AitM) phishing page. The attackers used this method to steal credentials and MFA tokens, subsequently binding malicious MFA devices to maintain access after removing the original authentication device. They then exfiltrated data from cloud environments like Microsoft 365 and Okta using automated Python and PowerShell scripts for ransomware deployment. The group frequently changes its ransomware brands, such as Redact, Pink, and Helix, to evade tracking. Between January and May 2026, they earned over $10.6 million in Bitcoin. Experts recommend that enterprises adopt MFA mechanisms with anti-phishing capabilities.",
    tags_en: ["UNC6671", "Cordial Spider", "Vishing", "AitM", "Okta", "Microsoft 365", "MFA Bypass", "Social Engineering"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/unc6671-vishing-attacks-target-personal.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-002",
    trackers: ["security"],
    category: "重大事件",
    title: "Metabase 零日漏洞遭用於資料竊取攻擊，Framework 與 Tally 等客戶證實受害",
    summary: "數據分析平台 Metabase 披露其 Metabase Cloud SaaS 及自建實例遭零日漏洞攻擊。該漏洞為未授權 SQL 注入漏洞，CVSS 評分為最高 10.0（尚未指派 CVE 編號），影響 1.58 及以上版本。遠端攻擊者可藉此取得管理員權限、竊取憑證並導出資料。硬體製造商 Framework 與表單平台 Tally 已證實於 8 月 3 日遭入侵，造成客戶姓名、Email 及密碼雜湊值等資料外洩。Metabase 已推出修補版本（如 0.58.24、0.59.21 等），建議自建客戶立即升級、重置所有使用者會話、輪換資料庫憑證，若無法立即升級，應先阻擋 /api/session/reset_password 端點存取。",
    tags: ["Metabase", "Framework", "Tally", "SQL 注入", "零日漏洞", "資料外洩", "供應鏈攻擊"],
    title_en: "Metabase Zero-Day Vulnerability Used in Data Theft Attack; Clients Including Framework and Tally Confirmed Affected",
    summary_en: "The data analytics platform Metabase disclosed that both its Metabase Cloud SaaS and self-hosted instances were targeted by a zero-day vulnerability. The flaw is an unauthorized SQL injection vulnerability, rated with a CVSS score of 10.0 (no CVE ID assigned), affecting versions 1.58 and above. Remote attackers can exploit this to gain administrator privileges, steal credentials, and exfiltrate data. Hardware manufacturer Framework and form platform Tally confirmed being compromised on August 3rd, leading to the leakage of customer data such as names, emails, and password hashes. Metabase has released patched versions (e.g., 0.58.24, 0.59.21), and advises self-hosted customers to immediately upgrade, reset all user sessions, and rotate database credentials. If immediate upgrading is not possible, they should block access to the /api/session/reset_password endpoint.",
    tags_en: ["Metabase", "Framework", "Tally", "SQL Injection", "Zero-Day Vulnerability", "Data Leakage", "Supply Chain Attack"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/framework-tally-disclose-metabase-data-theft-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260807-003",
    trackers: ["security"],
    category: "重大事件",
    title: "Levi Strauss 遭社交工程攻擊：三名員工電腦資料被竊，未波及消費者資料",
    summary: "服飾巨頭 Levi Strauss & Co.（Levi's）向美國證券交易委員會（SEC）通報一起資安事件。駭客透過社交工程誘騙三名員工，成功入侵其公司電腦並竊取部分企業內部資料。公司表示其快速應變措施已成功圍堵攻擊，初步調查顯示消費者資料未受影響，亦未造成營運中斷或重大財務衝擊。雖然無勒索軟體組織出面認領，但部分媒體將此事件指向與語音釣魚攻擊相關的駭客組織 UNC6671。目前調查仍持續進行中，針對受影響對象將依規定通知。",
    tags: ["Levi Strauss", "社交工程", "語音釣魚", "UNC6671", "資料外洩", "SEC通報"],
    title_en: "Levi Strauss Targeted by Social Engineering Attack: Employee Data Stolen, Consumer Data Unaffected",
    summary_en: "Apparel giant Levi Strauss & Co. (Levi's) has reported a cybersecurity incident to the U.S. Securities and Exchange Commission (SEC). Hackers used social engineering to deceive three employees, successfully infiltrating company computers and stealing some internal corporate data. The company stated that its rapid response measures successfully contained the attack. Preliminary investigations indicate that consumer data was not affected, and there was no operational disruption or significant financial impact. Although no ransomware group has claimed responsibility, some media outlets have linked the incident to the hacking group UNC6671, which is associated with vishing attacks. Investigations are ongoing, and affected parties will be notified according to regulations.",
    tags_en: ["Levi Strauss", "Social Engineering", "Vishing", "UNC6671", "Data Leak", "SEC Filing"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/levi-strauss-and-co-says-hackers-stole-corporate-data-in-cyberattack", lang: "EN" }
    ]
  },
  {
    id: "20260807-004",
    trackers: ["os"],
    category: "Linux",
    title: "shadow-utils 4.20.0 發布，正式移除密碼定期過期相關公用程式",
    summary: "Linux 系統帳號與群組管理工具 shadow-utils 釋出 4.20.0 版本，重點在於正式移除先前在 4.19.0 版本中標記為棄用的定期密碼過期相關公用程式與功能。雖然部分密碼老化管理功能仍可使用，但高度依賴這些機制的組織應評估影響，並提前規劃在未來幾年內完全移除相關相依性。",
    tags: ["shadow-utils", "Linux", "密碼過期", "帳號管理", "系統安全"],
    title_en: "shadow-utils 4.20.0 Released, Officially Removing Password Expiration Utilities",
    summary_en: "The Linux system account and group management tool, shadow-utils, has released version 4.20.0. The key focus is the official removal of password expiration-related utilities and features that were previously marked as deprecated in version 4.19.0. Although some password aging management functionalities remain usable, organizations highly dependent on these mechanisms should assess the impact and plan for the complete removal of related dependencies in the coming years.",
    tags_en: ["shadow-utils", "Linux", "Password Expiration", "Account Management", "System Security"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1086949", lang: "EN" }
    ]
  },
  {
    id: "20260807-005",
    trackers: ["os"],
    category: "Linux",
    title: "LightDM 顯示管理器睽違四年釋出 1.33.0 版本，移交新社群維護",
    summary: "LightDM 顯示管理器發布了 1.33.0 版本，這是四年來的首次發布。該專案過去曾由 Canonical 贊助，但近年來實質上處於無人維護的狀態，目前已轉移至新的社群儲存庫，並由 Joshua Peisach 與 Neal Gompa 進行維護。新版本包含 Qt6 支援、程式碼最佳化，以及先前因等待新版本而暫停的一系列修復。受影響產品為 LightDM，攻擊向量、CVSS 分數及受害規模等細節未公開，建議使用者關注專案後續更新。",
    tags: ["LightDM", "Canonical", "Qt6", "Joshua Peisach", "Neal Gompa", "Linux", "顯示管理器"],
    title_en: "LightDM Display Manager Releases 1.33.0 After Four Years, Transfers to New Community Maintenance",
    summary_en: "The LightDM Display Manager has released version 1.33.0, its first release in four years. The project was previously sponsored by Canonical but has been effectively unmaintained in recent years. It has now been transferred to a new community repository and is being maintained by Joshua Peisach and Neal Gompa. The new version includes Qt6 support, code optimizations, and a series of fixes that were previously paused pending a new release. The affected product is LightDM. Details regarding the attack vector, CVSS score, and scope of impact have not been disclosed, and users are advised to monitor the project's subsequent updates.",
    tags_en: ["LightDM", "Canonical", "Qt6", "Joshua Peisach", "Neal Gompa", "Linux", "Display Manager"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1087759", lang: "EN" }
    ]
  },
  {
    id: "20260807-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 穩定版核心釋出更新以修復 CVE-2026-68480 投機執行漏洞",
    summary: "Greg Kroah-Hartman 宣佈釋出 Linux 6.12.102、6.6.150、6.1.182、5.15.215 與 5.10.264 等穩定版核心。此輪更新包含由 Thomas Lamprecht 所發現的單一臭蟲修復，該臭蟲影響了先前為因應 CVE-2026-68480 漏洞而釋出的版本。該漏洞可能透過投機執行導致資料外洩。其中 6.12.102 版本已補上針對該漏洞的安全性修復，官方建議所有用戶儘速升級。",
    tags: ["Linux 核心", "CVE-2026-68480", "投機執行", "Greg Kroah-Hartman", "安全更新"],
    title_en: "Linux Stable Kernel Releases Update to Fix CVE-2026-68480 Speculative Execution Vulnerability",
    summary_en: "Greg Kroah-Hartman announced the release of stable kernels including 6.12.102, 6.6.150, 6.1.182, 5.15.215, and 5.10.264. This update includes a single bug fix discovered by Thomas Lamprecht, which affects versions previously released to address CVE-2026-68480. The vulnerability could lead to data leakage via speculative execution. Specifically, the 6.12.102 version contains the security patch for this vulnerability, and users are advised to upgrade as soon as possible.",
    tags_en: ["Linux Kernel", "CVE-2026-68480", "Speculative Execution", "Greg Kroah-Hartman", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1087743", lang: "EN" }
    ]
  },
  {
    id: "20260807-007",
    trackers: ["os"],
    category: "Linux",
    title: "多個主流 Linux 發行版發布安全更新：涵蓋核心、應用程式與多種服務元件",
    summary: "多個主要的 Linux 發行版，包括 AlmaLinux、Debian、Fedora、Mageia、Oracle、Red Hat、Slackware 和 SUSE，近期發布了廣泛的安全性更新。這些更新涵蓋了作業系統核心（kernel）、各種應用程式（如 Firefox、Thunderbird、GIMP、Chromium）、以及多個核心函式庫和服務元件（如 OpenSSL、libXfont2、php、Python）。受影響的範圍極廣，從底層的系統服務到上層的用戶應用程式，顯示出多個系統層面和應用層面的安全風險。使用者應根據各自的發行版和已安裝的套件，及時應用這些安全補丁，以修補潛在的漏洞，確保系統的穩定性和安全性。建議系統管理員查閱各發行版官方的安全公告，並執行完整的系統更新流程。",
    tags: ["Linux", "AlmaLinux", "Debian", "Fedora", "SUSE", "安全更新", "kernel"],
    title_en: "Multiple Major Linux Distributions Release Security Updates Covering Kernel, Applications, and Various Service Components",
    summary_en: "Several major Linux distributions, including AlmaLinux, Debian, Fedora, Mageia, Oracle, Red Hat, Slackware, and SUSE, recently released extensive security updates. These updates cover the operating system kernel, various applications (such as Firefox, Thunderbird, GIMP, and Chromium), as well as multiple core libraries and service components (such as OpenSSL, libXfont2, php, and Python). The scope of affected components is extremely broad, ranging from underlying system services to upper-level user applications, indicating security risks at multiple system and application layers. Users should promptly apply these security patches based on their specific distribution and installed packages to remediate potential vulnerabilities and ensure system stability and security. System administrators are advised to consult the official security announcements of each distribution and execute a complete system update process.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Fedora", "SUSE", "security update", "kernel"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1087742", lang: "EN" }
    ]
  },
  {
    id: "20260807-008",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：新增支援 Logitech HID++ 2.0 可重新配置按鈕功能",
    summary: "本次 Linux 核心的更新，主要為支援 Logitech HID++ 2.0 設備協議的重新配置按鈕功能。此功能允許軟體查詢、重新映射和轉移滑鼠按鈕及特殊鍵盤按鍵。當按鈕被轉移時，系統會使用特殊的通知而非標準的鍵盤事件。雖然先前已存在使用者空間的開源解決方案，但透過 logitech-hidpp 核心驅動的支援，能更深入地整合此 HID++ 2.0 能力。此功能由開源開發者 Elliot Douglas 負責，並已透過修補程式加入 HID 子系統的「for-next」Git 分支，預計將在即將到來的 Linux 7.3 合併窗口中提交。此更新主要提升了 Linux 系統對新一代高階輸入設備的相容性與支援度，對於使用 Logitech 設備的用戶具有實用價值。",
    tags: ["Linux 7.3", "Logitech", "HID++ 2.0", "核心驅動", "輸入設備", "Linux 核心"],
    title_en: "Linux 7.3 Kernel Update: Adds Support for Reconfigurable Buttons on Logitech HID++ 2.0",
    summary_en: "This Linux kernel update primarily introduces support for the reconfigurable button functionality of the Logitech HID++ 2.0 device protocol. This feature allows software to query, remap, and transfer mouse buttons and special keyboard keys. When a button is transferred, the system uses a special notification rather than a standard keyboard event. Although user-space open-source solutions previously existed, the inclusion of the logitech-hidpp kernel driver provides deeper integration of this HID++ 2.0 capability. This feature was developed by open-source developer Elliot Douglas and has been added to the 'for-next' branch of the HID subsystem, expected to be submitted in the upcoming Linux 7.3 merge window. This update significantly enhances Linux system compatibility and support for next-generation advanced input devices, offering practical value to users of Logitech equipment.",
    tags_en: ["Linux 7.3", "Logitech", "HID++ 2.0", "Kernel Driver", "Input Device", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-HIDPP-Reprogrammable", lang: "EN" }
    ]
  },
  {
    id: "20260807-009",
    trackers: ["os"],
    category: "Linux",
    title: "Apple M3 Pro/Max/Ultra 晶片支援進展：主線 Linux 7.3 核心加入設備樹支援",
    summary: "本次更新主要針對 Linux 7.3 核心，為 Apple M3 Pro、M3 Max 和 M3 Ultra 系列晶片加入了基礎的設備樹（Device Tree, DT）支援。這項支援是為主線 Linux 核心準備的，目前僅達到與基礎 M3 SoC 相似的支援層級，尚未具備如 GPU 加速等功能，因此對於一般終端用戶而言，目前仍無法直接使用。然而，這標誌著 Apple M3 系列晶片在主線 Linux 核心上獲得了基礎的建構，為未來更完善的支援奠定了基礎。此外，該設備樹拉取（DT pull）也包含了處理 Apple M1 和 M2 系列晶片複雜感測器系統的 HWMON 支援。雖然 M3 Ultra 晶片已於 2025 年 3 月推出，但主線 Linux 核心要達到可用的日常使用支援，時間尚不確定。目前用戶仍可透過 Asahi Linux 發行版使用，但該發行版仍有許多 M3 功能待開發。",
    tags: ["Apple M3", "Linux 7.3", "設備樹 (DT)", "主線核心", "Apple Silicon", "HWMON"],
    title_en: "Apple M3 Pro/Max/Ultra Chip Support Progress: Mainline Linux 7.3 Kernel Adds Device Tree Support",
    summary_en: "This update primarily targets the Linux 7.3 kernel, adding foundational Device Tree (DT) support for the Apple M3 Pro, M3 Max, and M3 Ultra series chips. This support is prepared for the mainline Linux kernel and currently reaches a support level similar to the basic M3 SoC, lacking features like GPU acceleration. Therefore, it is not yet usable for general end-users. However, this marks the acquisition of foundational support for the Apple M3 series chips on the mainline Linux kernel, laying the groundwork for more comprehensive future support. Furthermore, the Device Tree pull also includes HWMON support for the complex sensor systems of the Apple M1 and M2 series chips. Although the M3 Ultra chip was launched in March 2025, the timeline for the mainline Linux kernel to achieve usable daily support remains uncertain. Users can currently still utilize the Asahi Linux distribution, but that distribution still has many M3 features to be developed.",
    tags_en: ["Apple M3", "Linux 7.3", "Device Tree (DT)", "Mainline Kernel", "Apple Silicon", "HWMON"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/M3-Pro-Max-Ultra-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260807-010",
    trackers: ["os"],
    category: "Linux",
    title: "Intel 發布 QATlib 26.08，支援下一代 Gen6 加速器與 2MB Hugepages",
    summary: "Intel 今日發布了更新版本的 QuickAssist Technology library (QATlib) 26.08，該函式庫作為使用者空間元件，用於在 Linux 環境下使用 QuickAssist 加速器。本次更新最引人注目的是，QATlib 26.08 已準備好支援下一代 QAT Gen6 6XXX 加速器。Intel 此前已在 Linux 核心驅動程式中為 Gen6 支援做準備，並加入了無線模式支援、Zstd 支援和 Key Protection Technology (KPT) 等新功能。QATlib 26.08 的支援內容涵蓋了字典、Zstandard 和 KPT 功能，並提供了針對這些新硬體的範例 QAT 程式碼。此外，本次更新還新增了對 `QAT_MAX_2M_HPG_PER_PROCESS` 環境變數的支援，以啟用 2MB Hugepages 功能。其他更新包括 EPOLL coalesce timer 支援和用於速率限制功能的 `sla_mgr` 腳本。使用者可透過 GitHub 下載最新的 Intel QATlib 26.08。",
    tags: ["Intel", "QATlib", "QuickAssist Technology", "Linux", "Gen6", "Hugepages"],
    title_en: "Intel Releases QATlib 26.08, Supporting Next-Generation Gen6 Accelerators and 2MB Hugepages",
    summary_en: "Intel today released an updated version of the QuickAssist Technology library (QATlib) 26.08. This library functions as a user-space component used to utilize QuickAssist accelerators in Linux environments. The most notable update in QATlib 26.08 is its readiness to support the next-generation QAT Gen6 6XXX accelerators. Intel had previously prepared the Linux kernel driver for Gen6 support, adding new features such as wireless mode support, Zstd support, and Key Protection Technology (KPT). QATlib 26.08's support covers dictionary, Zstandard, and KPT functionalities, and provides example QAT code for these new hardware features. Furthermore, this update adds support for the `QAT_MAX_2M_HPG_PER_PROCESS` environment variable, enabling 2MB Hugepages functionality. Other updates include EPOLL coalesce timer support and the `sla_mgr` script for rate limiting functionality. Users can download the latest Intel QATlib 26.08 from GitHub.",
    tags_en: ["Intel", "QATlib", "QuickAssist Technology", "Linux", "Gen6", "Hugepages"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-QATlib-26.08-Released", lang: "EN" }
    ]
  },
  {
    id: "20260807-011",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：提升 TTM 記憶體管理，強化 VRAM 稀缺時的資源分配效率",
    summary: "本次更新主要針對 Linux 核心的 DRM 記憶體管理機制進行重大改進，旨在解決在 VRAM 記憶體稀缺時，應用程式和遊戲之間競爭資源導致的記憶體分配問題。Valve 的 Linux 圖形團隊成員 Natalie Vock 投入大量時間優化 TTM 記憶體管理和 cgroup 設備記憶體代碼。核心改動在於，當分配受到 cgroups 保護時，TTM 不再直接退回（back off）到 GTT 區域，而是會主動嘗試從該域（domain）驅逐（evict）未受保護的緩衝區，為受保護的應用程式騰出空間。這能確保應用程式能真正使用系統分配的記憶體保護，避免因資源競爭導致的記憶體分配不穩定。此外，本次更新還包括為 AMDGPU 和 Xe 驅動程式啟用 DMEMCG 的驅逐支援，移除 UDMABUF 的人工 64MB 限制，並為 Allwinner Sun4i DRM 驅動程式增強 YUV 和 4K 支援，Nouveau 驅動程式也獲得了 DMEMCG 的支援。",
    tags: ["Linux 7.3", "DRM", "TTM", "VRAM", "cgroups", "DMEMCG"],
    title_en: "Linux 7.3 Kernel Update: Enhancing TTM Memory Management and Resource Allocation Efficiency During VRAM Scarcity",
    summary_en: "This update introduces significant improvements to the DRM memory management mechanism within the Linux kernel. The goal is to address memory allocation issues caused by resource competition between applications and games when VRAM is scarce. Natalie Vock, a member of Valve's Linux Graphics team, dedicated considerable time to optimizing TTM memory management and cgroup device memory code. The core change is that when allocation is protected by cgroups, TTM no longer directly backs off to the GTT region. Instead, it proactively attempts to evict unprotected buffers from that domain, thereby freeing up space for protected applications. This ensures that applications can genuinely utilize the system-allocated memory protection, preventing memory allocation instability due to resource contention. Furthermore, this update includes support for DMEMCG eviction for the AMDGPU and Xe drivers, removes the manual 64MB limit on UDMABUF, and enhances YUV and 4K support for the Allwinner Sun4i DRM driver. Nouveau also receives support for DMEMCG.",
    tags_en: ["Linux 7.3", "DRM", "TTM", "VRAM", "cgroups", "DMEMCG"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/More-Aggressive-TTM-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260807-012",
    trackers: ["os"],
    category: "Linux",
    title: "Intel 為 Meteor Lake 及後續硬體推出 HDMI 2.1 FRL 支援的 Linux 核心驅動程式修補程式",
    summary: "Intel 近日為其 Linux 核心圖形驅動程式發布了一組包含 44 個修補程式，旨在為 Meteor Lake 及更新的硬體提供 HDMI 2.1 Fixed Rate Link (FRL) 的支援。此功能允許在超越傳統 TMDS 限制的範圍內，支援更高的刷新率和解析度。此舉顯示了開源驅動程式支援方面，HDMI Forum 正在積極發展，與 AMD 的相關工作形成互補。目前修補程式已在 Panther Lake (PTL) 和 Meteor Lake (MTL) 等硬體上進行測試，已確認如 4K@120 等模式可運作。然而，目前仍未實作 Display Stream Compression (DSC) 功能，因此部分解析度/刷新率組合尚無法支援，而 DSC 的開發工作仍在進行中。Intel 工程師預計此工作將在今年稍晚的 Linux v7.4 週期中準備上游整合，並期待 DSC 支援也能同步完成。",
    tags: ["Intel", "HDMI 2.1", "FRL", "Linux 核心", "Meteor Lake", "DSC"],
    title_en: "Intel Releases Linux Kernel Driver Patch Supporting HDMI 2.1 FRL for Meteor Lake and Subsequent Hardware",
    summary_en: "Intel recently released a set of 44 patches for its Linux kernel graphics driver, aimed at providing support for HDMI 2.1 Fixed Rate Link (FRL) on Meteor Lake and newer hardware. This feature allows support for higher refresh rates and resolutions beyond the limitations of traditional TMDS. This move demonstrates the active development of open-source driver support for the HDMI Forum, complementing related work from AMD. The patches have been tested on hardware such as Panther Lake (PTL) and Meteor Lake (MTL), and modes like 4K@120 have been confirmed to work. However, Display Stream Compression (DSC) functionality is not yet implemented, meaning some resolution/refresh rate combinations are not yet supported, and DSC development is ongoing. Intel engineers anticipate that this work will be ready for upstream integration in the Linux v7.4 cycle later this year, and they expect DSC support to be completed concurrently.",
    tags_en: ["Intel", "HDMI 2.1", "FRL", "Linux Kernel", "Meteor Lake", "DSC"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-HDMI-2.1-FRL-Linux-2026", lang: "EN" }
    ]
  },
  {
    id: "20260807-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "N-able 確認 N-central 零日漏洞 CVE-2026-18577 遭利用，緊急發布 Hotfix 2 強化保護",
    summary: "資安廠商 N-able 確認攻擊者已利用 N-central 平台上的零日漏洞 CVE-2026-18577，成功進入客戶網路。此漏洞允許未經身份驗證的攻擊者取得 N-central 管理平台的管理員權限。攻擊者利用此權限後，可透過平台的 Take Control 功能，遠端連線至受管環境內部的系統，並建立 Cloudflare Tunnel 服務以維持持久存取。N-able 隨後發布了 Hotfix 2 (版本 2026.3.1.10)，要求所有運行 N-central 內部部署客戶的用戶立即安裝，即使先前已安裝 Hotfix 1。N-able 表示，此更新旨在超越前一個修補程式，並加入進一步的強化措施，以應對持續演進的威脅行為。由於攻擊的嚴重性，CISA 已將此漏洞列入已知被利用的漏洞目錄，並給予美國聯邦機構極短的修補期限。用戶應立即安裝 Hotfix 2，以確保管理平台的安全。",
    tags: ["N-able", "N-central", "CVE-2026-18577", "零日漏洞", "遠端監控與管理", "Hotfix 2"],
    title_en: "N-able Confirms N-central Zero-Day Vulnerability CVE-2026-18577 Exploited; Releases Hotfix 2 for Enhanced Protection",
    summary_en: "Security vendor N-able confirmed that attackers have exploited a zero-day vulnerability, CVE-2026-18577, in the N-central platform, successfully gaining access to client networks. This vulnerability allows unauthenticated attackers to obtain administrator privileges on the N-central management platform. After gaining these privileges, attackers can use the platform's Take Control feature to remotely connect to systems within the managed environment and establish Cloudflare Tunnel services to maintain persistent access. N-able subsequently released Hotfix 2 (version 2026.3.1.10), urging all users running on-premises N-central clients to install it immediately, even if Hotfix 1 has already been applied. N-able stated that this update is designed to surpass the previous patch and includes further enhancements to address continuously evolving threat behaviors. Due to the severity of the attack, CISA has listed this vulnerability in its known exploited vulnerabilities catalog and issued a very short patching deadline for US federal agencies. Users must immediately install Hotfix 2 to ensure the security of the management platform.",
    tags_en: ["N-able", "N-central", "CVE-2026-18577", "Zero-Day Vulnerability", "Remote Monitoring and Management", "Hotfix 2"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/08/07/n-able-god-mode-flaw-vendor-confirms-attackers-reached-customer-networks-as-second-hotfix-lands/5284730", lang: "EN" }
    ]
  },
  {
    id: "20260807-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA 將 Progress LoadMaster 指令注入漏洞 CVE-2026-8037 列入已遭利用漏洞目錄",
    summary: "美國網路安全暨基礎設施安全局（CISA）宣布將 Progress LoadMaster 的指令注入漏洞（CVE-2026-8037）納入「已遭利用漏洞目錄」（KEV Catalog），因有證據表明該漏洞已遭受活躍攻擊。此類漏洞易成威脅份子入侵管道，對組織帶來極高風險。依據 BOD 26-04 指令要求，聯邦文職行政部門（FCEB）機構必須優先修補 KEV 目錄中所列且暴露於網際網路的高風險漏洞，並在更新前檢查系統是否已遭入侵。CISA 亦呼籲所有企業組織採行風險導向的漏洞管理策略，儘速完成相關防護與修補措施。",
    tags: ["CISA", "KEV", "CVE-2026-8037", "Progress LoadMaster", "Command Injection", "BOD 26-04"],
    title_en: "CISA Adds Progress LoadMaster Command Injection Vulnerability CVE-2026-8037 to Known Exploited Vulnerabilities Catalog",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added the command injection vulnerability (CVE-2026-8037) in Progress LoadMaster to the Known Exploited Vulnerabilities (KEV) Catalog, due to evidence that the vulnerability is being actively exploited. Such vulnerabilities are easily exploited by threat actors to infiltrate pipelines, posing extremely high risks to organizations. According to the BOD 26-04 directive, Federal Civilian Executive Branch (FCEB) agencies must prioritize patching high-risk vulnerabilities listed in the KEV Catalog and exposed to the internet, and must check their systems for signs of compromise before updating. CISA also urges all private sector organizations to adopt a risk-based vulnerability management strategy and promptly complete necessary protective measures and patching.",
    tags_en: ["CISA", "KEV", "CVE-2026-8037", "Progress LoadMaster", "Command Injection", "BOD 26-04"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/08/07/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260807-015",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Elastic 揭露 AI 程式碼助理資安風險：Claude Code 與 Cursor 遭利用建立反向隧道與 LaunchAgent 持久性攻擊",
    summary: "Elastic Security 團隊揭露 AI 程式碼助理（如 Claude Code 與 Cursor）在開發者 macOS 端點上帶來的潛在資安威脅。分析顯示，攻擊者利用受信任的 AI Agent 執行 zsh Shell，透過免費隧道服務（如 localhost.run、Cloudflare Quick Tunnels、ngrok）將本地服務暴露至網際網路，並寫入 LaunchAgent 實現持久性控制。此外，亦觀察到利用 Python/osascript 進行腳本載入、嘗試解密 Keychain 竊取 OAuth 憑證以及繞過隔離區（Quarantine）等雙重用途工具濫用手法。建議企業針對 GenAI 工具衍生的子進程與隧道行為強化監控與風險評估。",
    tags: ["Elastic", "Claude Code", "Cursor", "macOS", "GenAI", "LaunchAgent", "Cloudflare Tunnels", "threat hunting"],
    title_en: "Elastic Reveals Security Risks of AI Code Assistants: Claude Code and Cursor Exploited to Establish Reverse Tunnels and LaunchAgent Persistence",
    summary_en: "The Elastic Security team has disclosed potential security threats posed by AI code assistants (such as Claude Code and Cursor) on developer macOS endpoints. Analysis shows that attackers can leverage trusted AI Agents to execute zsh Shell, exposing local services to the internet via free tunneling services (such as localhost.run, Cloudflare Quick Tunnels, and ngrok), and establishing persistence by writing to LaunchAgents. Furthermore, the report observed dual-use misuse techniques, including using Python/osascript for script loading, attempting to decrypt the Keychain to steal OAuth credentials, and bypassing the Quarantine mechanism. Enterprises are advised to strengthen monitoring and risk assessment for subprocesses and tunneling behaviors derived from GenAI tools.",
    tags_en: ["Elastic", "Claude Code", "Cursor", "macOS", "GenAI", "LaunchAgent", "Cloudflare Tunnels", "threat hunting"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/coding-agent-launchagent-tunnel-detection", lang: "EN" }
    ]
  },
  {
    id: "20260807-016",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "ClickFix 社交工程攻擊入侵 macOS 系統，散播具備轉移加密貨幣功能的竊密軟體",
    summary: "資安廠商 Huntress 發現新型 ClickFix 攻擊行動，誘騙 macOS 使用者於 Terminal 執行指令，進而下載相符 CPU 架構的 Go 語言竊密軟體。該惡意軟體除竊取瀏覽器密碼、Apple iCloud Keychain 及快取憑證外，更具備特殊的「DRAIN」功能，能計算並轉移比特幣、門羅幣等加密貨幣錢包資產（包含僅抽離 1% 資金的隱蔽手段）。攻擊者透過偽造系統錯誤提示彈窗進行權限提升，其 C2 與分發基礎設施指向已被制裁的俄羅斯防彈託播商 Aeza Group。近期 ClickFix 攻擊亦涵蓋利用指紋辨識過濾分析環境、濫用 Windows pcalua.exe 元件及利用 WebAssembly 與 SVG 隱寫術等手法。",
    tags: ["ClickFix", "macOS", "Infostealer", "Go", "Huntress", "加密貨幣竊取", "Aeza Group", "社交工程"],
    title_en: "ClickFix Social Engineering Attack Compromises macOS Systems, Spreading Stealer Malware with Cryptocurrency Transfer Functionality",
    summary_en: "Security vendor Huntress discovered a novel ClickFix attack campaign that tricks macOS users into executing commands in the Terminal, subsequently downloading Go language stealer malware compatible with the CPU architecture. In addition to stealing browser passwords, Apple iCloud Keychain, and cached credentials, the malware possesses a specialized 'DRAIN' function capable of calculating and transferring cryptocurrency wallet assets, including Bitcoin and Monero (utilizing covert methods that only withdraw 1% of the funds). The attackers elevate privileges by using fake system error pop-ups, and their C2 and distribution infrastructure point to the sanctioned Russian bulletproof hosting provider Aeza Group. Recent ClickFix attacks have also included techniques such as utilizing fingerprint recognition for environment filtering, abusing the Windows pcalua.exe component, and employing WebAssembly and SVG steganography.",
    tags_en: ["ClickFix", "macOS", "Infostealer", "Go", "Huntress", "Cryptocurrency Theft", "Aeza Group", "Social Engineering"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/clickfix-attacks-deliver-macos-stealer.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WordPress 登入頁面 XSS 漏洞 (CVE-2026-64638) 可鏈接至伺服器 PHP Code Execution",
    summary: "WordPress 核心系統存在一個高嚴重性、無需預先身份驗證的反射型跨站腳本攻擊 (XSS) 漏洞，影響所有版本。此漏洞被追蹤為 CVE-2026-64638，CVSS 分數為 8.9。攻擊者只需透過惡意設計的用戶名，在登入失敗錯誤頁面觸發 JavaScript，無需任何額外互動。雖然初步的 XSS 攻擊無需登入，但要達到伺服器端程式碼執行 (RCE)，攻擊鏈需要受害者已登入管理員帳號，並與攻擊者控制的頁面進行互動。研究人員 pwn.ai 揭示了完整的攻擊鏈 XSS2Shell，該鏈利用 XSS 漏洞，透過 WordPress 的 REST JSONP 支援，最終觸發管理員帳號的應用程式密碼 (Application Password) 流程，並上傳惡意 ZIP 檔案，從而實現 PHP 程式碼執行。WordPress 已在 7.0.3 版本（並回溯至 4.7 分支）修補此漏洞，強烈建議所有網站立即更新。",
    tags: ["WordPress", "CVE-2026-64638", "XSS", "RCE", "PHP", "pwn.ai"],
    title_en: "WordPress Login Page XSS Vulnerability (CVE-2026-64638) Linked to Server PHP Code Execution",
    summary_en: "A high-severity, unauthenticated reflected Cross-Site Scripting (XSS) vulnerability exists in the WordPress core system, affecting all versions. This vulnerability is tracked as CVE-2026-64638, with a CVSS score of 8.9. Attackers can trigger JavaScript simply by submitting a maliciously crafted username on the login failure error page, requiring no additional interaction. While the initial XSS attack does not require authentication, achieving Server-Side Code Execution (RCE) requires the victim to be logged in as an administrator and interact with a page controlled by the attacker. Researcher pwn.ai revealed the complete attack chain, XSS2Shell. This chain leverages the XSS vulnerability, utilizes WordPress's REST JSONP support, and ultimately triggers the Application Password flow for the administrator account, allowing the upload of a malicious ZIP file and achieving PHP code execution. WordPress has patched this vulnerability in version 7.0.3 (and backported to the 4.7 branch), and all websites are strongly advised to update immediately.",
    tags_en: ["WordPress", "CVE-2026-64638", "XSS", "RCE", "PHP", "pwn.ai"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/new-wordpress-pre-auth-xss-could-lead.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-018",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux SCTP 潛伏 18 年高危漏洞 CVE-2026-64564 曝光，可致特權提升與容器逃逸",
    summary: "騰訊雀鷹實驗室透過 AI 工具發現潛伏於 Linux 核心長達 18 年的 SCTP 協定漏洞「SCTPhantom」（CVE-2026-64564）。該漏洞屬於釋放後使用（Use-After-Free）缺陷，源於動態地址重構功能處理刪除請求時的邏輯錯誤，可讓本地攻擊者重複存取已釋放的核心記憶體。騰訊測試顯示，在預設容器配置下，攻擊者可成功取得宿主機 Root 權限並達成容器逃逸，影響 Debian、Ubuntu 與 RHEL 等發行版。騰訊對此評估 CVSS v4.0 為 8.5 分。官方已於 2026 年 8 月 3 日釋出 7.1.6、6.18.42、6.12.101 與 6.6.148 等核心版本修補，建議管理員儘速更新或封鎖不必要的 SCTP 模組。",
    tags: ["Linux Kernel", "CVE-2026-64564", "SCTPhantom", "騰訊雀鷹實驗室", "Use-After-Free", "容器逃逸", "特權提升"],
    title_en: "Linux SCTP Dormant for 18 Years High-Risk Vulnerability CVE-2026-64564 Exposed, Can Lead to Privilege Escalation and Container Escape",
    summary_en: "Tencent Falcon Lab discovered the SCTP protocol vulnerability, 'SCTPhantom' (CVE-2026-64564), which has been dormant in the Linux kernel for up to 18 years. This vulnerability is a Use-After-Free defect, stemming from a logic error in how the dynamic address reconstruction feature handles deletion requests, allowing a local attacker to repeatedly access already freed kernel memory. Tencent's testing showed that, under default container configurations, an attacker can successfully obtain root privileges on the host machine and achieve container escape, affecting distributions such as Debian, Ubuntu, and RHEL. Tencent assessed the CVSS v4.0 score for this vulnerability at 8.5. Official patches have been released for kernel versions 7.1.6, 6.18.42, 6.12.101, and 6.6.148 as of August 3, 2026. Administrators are advised to update promptly or block unnecessary SCTP modules.",
    tags_en: ["Linux Kernel", "CVE-2026-64564", "SCTPhantom", "Tencent Falcon Lab", "Use-After-Free", "Container Escape", "Privilege Escalation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/18-year-old-linux-sctp-flaw-could-let.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-019",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型 NatJack 攻擊手法揭露：可劫持 TCP 與 DNS，影響 Windows 與 Linux Netfilter 機制",
    summary: "資安研究員 Malcolm Stagg 於 Black Hat USA 2026 揭露名為 NatJack 的新型網路位址轉換（NAT）攻擊手法。駭客若能控制同一 NAT 後方的受控系統，即可操控連線追蹤條目，進而劫持活躍的 TCP 連線、偽造 DNS 回應、暴露映射連接埠或耗盡 NAT 連線表。此機制影響 Windows 與 Linux 等多種實作，相關漏洞包括 Hyper-V 所用 Windows NAT 的 CVE-2026-56181（CVSS 8.3）以及 Linux Netfilter conntrack 的 CVE-2026-63913（CVSS 8.2）。官方已針對核心提出修補版本，但由於此攻擊屬於結構性問題，建議企業除了更新 Windows 與 Linux 外，應實施網路隔離、對內部流量加密並部署 IP Source Guard。",
    tags: ["NatJack", "CVE-2026-56181", "CVE-2026-63913", "Windows", "Linux", "Netfilter", "TCP 劫持", "DNS 欺騙"],
    title_en: "Novel NatJack Attack Technique Revealed: Ability to Hijack TCP and DNS, Affecting Windows and Linux Netfilter Mechanisms",
    summary_en: "Security researcher Malcolm Stagg revealed a novel Network Address Translation (NAT) attack technique called NatJack at Black Hat USA 2026. If an attacker can control a system located behind the same NAT, they can manipulate connection tracking entries, thereby hijacking active TCP connections, forging DNS responses, exposing mapped ports, or exhausting the NAT connection table. This mechanism affects various implementations, including the Windows NAT used by Hyper-V (CVE-2026-56181, CVSS 8.3) and the Linux Netfilter conntrack (CVE-2026-63913, CVSS 8.2). While official patches have been released for the core components, because this attack represents a structural issue, organizations are advised to implement network segmentation, encrypt internal traffic, and deploy IP Source Guard in addition to updating Windows and Linux.",
    tags_en: ["NatJack", "CVE-2026-56181", "CVE-2026-63913", "Windows", "Linux", "Netfilter", "TCP Hijacking", "DNS Spoofing"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/new-natjack-attacks-hijack-tcp-sessions.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安業者揭露新型 AitM 網路釣魚攻擊：駭客利用住宅代理與多重轉址劫持 Microsoft 365 帳號",
    summary: "Arctic Wolf 揭露一項大規模 AitM 網路釣魚行動，影響美加與歐洲的醫療、教育及政府等領域。攻擊者透過語音郵件主題郵件，經由 Google 與 AWS S3 等多階段轉址將受害者引導至偽造頁面，側錄憑證與 MFA 驗證碼以劫持 Microsoft 365 帳號。為規避偵測，駭客利用前端腳本蒐集瀏覽器資訊與地理位置，並使用住宅代理（Residential Proxies）模擬在地流量，以每 8 小時為週期自動刷新工作階段。成功入侵後，駭客利用 Microsoft Graph API 列舉人資與財務人員，收集薪資與發票等敏感郵件，部分個案更建立收件匣規則隱匿行蹤。",
    tags: ["Microsoft 365", "AitM", "網路釣魚", "住宅代理", "BEC", "Storm-2755", "Arctic Wolf"],
    title_en: "Cybersecurity Firm Uncovers New AitM Phishing Attack: Hackers Exploit Residential Proxies and Multi-Redirection Hijacking to Compromise Microsoft 365 Accounts",
    summary_en: "Arctic Wolf has revealed a large-scale AitM phishing campaign affecting sectors such as healthcare, education, and government across the US, Canada, and Europe. Attackers used voice email subject lines and multi-stage redirection through services like Google and AWS S3 to lure victims to spoofed pages, capturing credentials and MFA codes to hijack Microsoft 365 accounts. To evade detection, the attackers collected browser information and geolocation using front-end scripts, and utilized Residential Proxies to simulate local traffic, automatically refreshing sessions every 8 hours. After successful intrusion, the attackers used the Microsoft Graph API to list HR and finance personnel, collecting sensitive emails such as payroll and invoices. In some cases, they even created inbox rules to conceal their tracks.",
    tags_en: ["Microsoft 365", "AitM", "Phishing", "Residential Proxies", "BEC", "Storm-2755", "Arctic Wolf"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/microsoft-365-aitm-phishing-hijacks.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PortSwigger 發布 AI 輔助研究系統 HTTP Terminator，揭露新型 HTTP 非同步攻擊與 Apache 零日漏洞",
    summary: "PortSwigger 研究員 James Kettle 開發 AI 輔助系統 HTTP Terminator，經由解析 RFC 文件產生並驗證新型 HTTP 非同步（Desync）攻擊技術。該系統測試 3 萬個授權目標，發現約 700 個受影響網站，涵蓋銀行、政府設施及機場等。研究提出雙重匹配 Content-Length 與 dangling-byte 技術，提升回應佇列毒化（RQP）成功率，進而可能洩漏其他使用者的 Session Cookie 或 API 金鑰。人工引導過程亦發現 Apache Traffic Server 零日漏洞（CVE-2026-63078，已修補）。此外，系統提出「共享解析器混淆」概念。PortSwigger 已將 HTTP Terminator 開源，修補建議包含前端與後端避免使用 HTTP/1.1，若無法避免則應設置方法白名單並限制攜帶 Request Body 的 HTTP 方法。",
    tags: ["PortSwigger", "James Kettle", "HTTP Terminator", "HTTP Desynchronization", "CVE-2026-63078", "Apache Traffic Server", "RQP", "AI 安全"],
    title_en: "PortSwigger Releases AI-Assisted Research System HTTP Terminator, Exposing Novel HTTP Asynchronous Attacks and Apache Zero-Day Vulnerability",
    summary_en: "PortSwigger researcher James Kettle developed the AI-assisted system HTTP Terminator, which generates and validates novel HTTP asynchronous (Desync) attack techniques by parsing RFC documents. The system tested 30,000 authorized targets and discovered approximately 700 affected websites, covering sectors such as banking, government facilities, and airports. The research proposes a dual-matching Content-Length and dangling-byte technique, which increases the success rate of Response Queue Poisoning (RQP), potentially leading to the leakage of other users' Session Cookies or API keys. The manual process also uncovered an Apache Traffic Server zero-day vulnerability (CVE-2026-63078), which is already patched. Furthermore, the system introduces the concept of 'shared parser obfuscation.' PortSwigger has open-sourced HTTP Terminator, and remediation recommendations include avoiding HTTP/1.1 in both frontend and backend. If HTTP/1.1 cannot be avoided, methods carrying a Request Body should be whitelisted and restricted.",
    tags_en: ["PortSwigger", "James Kettle", "HTTP Terminator", "HTTP Desynchronization", "CVE-2026-63078", "Apache Traffic Server", "RQP", "AI Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/ai-assisted-http-terminator-finds-novel.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-022",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究人員揭露可濫用 Windows Hello for Business 繞過 PIN 與生物辨識存取 Entra ID 雲端權限",
    summary: "資安研究員 Dirk-jan Mollema 揭露，當惡意軟體在已登入的 Windows 工作階段中執行時，無需管理者權限、提取私鑰或觸發 PIN/生物辨識驗證，即可透過 WebAuthn 將 Windows Hello for Business 金鑰視為 FIDO2 Passkey 進行呼叫。攻擊者可在其他主機申請 Entra ID 挑戰並由受害端點完成簽署，進而註冊新裝置、取得主要重新整理令牌（PRT）並建立長期的雲端存取權限。此攻擊可滿足抗釣魚 MFA 政策，但若設定裝置狀態或合規性政策仍可被中斷。目前尚未發現活躍攻擊案例或相關 CVE。建議管理者監控缺乏裝置 ID（empty device ID）的登入活動。",
    tags: ["Windows Hello for Business", "Microsoft Entra ID", "FIDO2", "Passkey", "WebAuthn", "PRT", "ROADtools"],
    title_en: "Researchers reveal method to misuse Windows Hello for Business to bypass PIN and biometric access to Entra ID cloud credentials",
    summary_en: "Security researcher Dirk-jan Mollema revealed that when malware executes within an already logged-in Windows session, it can call the Windows Hello for Business key as a FIDO2 Passkey via WebAuthn without requiring administrator privileges, extracting private keys, or triggering PIN/biometric authentication. Attackers can then initiate an Entra ID challenge on another host, which the victim endpoint completes the signing for. This process allows the attacker to register new devices, obtain a Primary Refresh Token (PRT), and establish long-term cloud access credentials. While this attack satisfies anti-phishing MFA policies, it can still be interrupted by device state or compliance policies. No active attack cases or related CVEs have been discovered yet. Administrators are advised to monitor for login activities with empty device IDs.",
    tags_en: ["Windows Hello for Business", "Microsoft Entra ID", "FIDO2", "Passkey", "WebAuthn", "PRT", "ROADtools"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/malware-can-abuse-windows-hello-for.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Anthropic 與 Google  AI 開發工具爆嚴重漏洞：未授權 GitHub Issue 即可觸發遠端程式碼執行",
    summary: "資安公司 Novee Security 於 Black Hat 大會揭露 Anthropic 的 Claude Code、Google 的 Gemini CLI 以及 OpenAI Codex 的部署漏洞。攻擊者僅需透過未授權的 GitHub Issue 即可在 CI/CD 環境執行惡意程式碼或劫持 Agent。其中 Gemini CLI 的 CVE-2026-12537（CVSS 10.0）為容器啟動器命令注入漏洞，可於沙盒啟動前突破至宿主機；Claude Code 的 CVE-2026-54316（CVSS 6.0/9.1）則透過 Hugging Face 下載計數器外洩 API 金鑰。預防建議包含將 Gemini CLI 更新至 0.39.1、run-gemini-cli 至 0.1.22 及 Claude Code 至 2.1.163，並審查所有外來使用者可觸發的 GitHub Actions 工作流程。",
    tags: ["Google", "Anthropic", "OpenAI", "Gemini CLI", "Claude Code", "CVE-2026-12537", "CVE-2026-54316", "命令注入"],
    title_en: "Anthropic and Google AI Development Tools Flawed with Critical Vulnerability: Remote Code Execution Triggerable via Unauthorized GitHub Issue",
    summary_en: "Security firm Novee Security revealed deployment vulnerabilities in Anthropic's Claude Code, Google's Gemini CLI, and OpenAI Codex at Black Hat. Attackers can execute malicious code or hijack Agents simply by submitting an unauthorized GitHub Issue in a CI/CD environment. Specifically, Gemini CLI's CVE-2026-12537 (CVSS 10.0) is a container launcher command injection vulnerability that can break out to the host machine before sandbox initialization. Claude Code's CVE-2026-54316 (CVSS 6.0/9.1) allows for API key leakage through a counter download from Hugging Face. Prevention recommendations include updating Gemini CLI to 0.39.1, run-gemini-cli to 0.1.22, and Claude Code to 2.1.163, and reviewing all GitHub Actions workflows triggered by external users.",
    tags_en: ["Google", "Anthropic", "OpenAI", "Gemini CLI", "Claude Code", "CVE-2026-12537", "CVE-2026-54316", "Command Injection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/claude-code-and-gemini-cli-flaws-let.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安業者揭露 TeamPCP 駭客集團早於 2020 年即活躍，持續擴張至軟體供應鏈與 Kubernetes 破壞性攻擊",
    summary: "資安業者 Oligo Security 分析指出，追蹤名稱為 TeamPCP 的駭客集團早在 2020 年即開始活躍。該集團過去曾發動針對 AI 基礎設施的 ShadowRay 2.0（又稱 IronErn）以及針對 Redis 伺服器的 TA-NATALSTATUS 等攻擊。TeamPCP 長期利用 Redis、Docker、Ray、React 及 Next.js 等面向網際網路的基礎設施漏洞進行憑證竊取與蠕蟲式傳播，並逐步演化至利用 GitHub Actions 與令牌竊取進行開源套件投毒等軟體供應鏈攻擊。最新研究更發現其針對 Kubernetes 環境導入名為 Kamikaze 的破壞性抹除程式（Wiper）。建議組織落實雲端與開源供應鏈安全控管並即時修補暴露漏洞。",
    tags: ["TeamPCP", "Oligo Security", "Redis", "Kubernetes", "軟體供應鏈攻擊", "ShadowRay 2.0", "威脅情報"],
    title_en: "Cybersecurity Firm Reveals TeamPCP Hacker Group Active Before 2020, Expanding to Software Supply Chain and Kubernetes Destructive Attacks",
    summary_en: "Analysis by cybersecurity firm Oligo Security indicates that the hacker group known as TeamPCP has been active since 2020. The group has previously launched attacks such as ShadowRay 2.0 (also known as IronErn) targeting AI infrastructure, and TA-NATALSTATUS targeting Redis servers. TeamPCP has long utilized internet-facing vulnerabilities in Redis, Docker, Ray, React, and Next.js for credential theft and worm-like propagation, gradually evolving to software supply chain attacks, such as poisoning open-source packages using GitHub Actions and token theft. The latest research further discovered its deployment of a destructive wiper program named Kamikaze targeting Kubernetes environments. Organizations are advised to strengthen cloud and open-source supply chain security controls and promptly patch exposed vulnerabilities.",
    tags_en: ["TeamPCP", "Oligo Security", "Redis", "Kubernetes", "Software Supply Chain Attacks", "ShadowRay 2.0", "Threat Intelligence"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/teampcp-linked-to-redis-attacks-dating.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-025",
    trackers: ["os"],
    category: "Apple",
    title: "Anthropic 推出 Claude Code 跨工作階段訊息功能，支援 macOS 與 Linux",
    summary: "Anthropic 針對 macOS 與 Linux 平台上的 Claude Code 釋出更新版本，正式引入跨工作階段訊息傳遞功能。此項新特性允許不同的 Claude Code 工作階段彼此傳送更新與相關資訊，特別適用於多個工作階段同時處理同一專案不同部分的場景。主要應用情境包含傳遞發現結果、協調平行工作樹、取得長時間執行工作的狀態，以及跨機器回覆。官方說明指出，該功能不適用於核准權限請求或更改設定，若接收端訊息涉及權限動作仍須經過使用者審核。使用者目前可透過升級至最新版本來取得此功能。",
    tags: ["Claude Code", "Anthropic", "macOS", "Linux", "跨工作階段訊息"],
    title_en: "Anthropic releases Claude Code cross-session messaging feature supporting macOS and Linux",
    summary_en: "Anthropic has released an updated version of Claude Code for macOS and Linux platforms, formally introducing a cross-session messaging feature. This new capability allows different Claude Code sessions to send updates and relevant information to each other, which is particularly useful in scenarios where multiple sessions are simultaneously working on different parts of the same project. Key use cases include transmitting discovery results, coordinating parallel worktrees, retrieving the status of long-running jobs, and cross-machine responses. The official documentation notes that this feature cannot be used for approval requests or configuration changes; if the message received involves a permission action, it still requires user review. Users can currently access this feature by upgrading to the latest version.",
    tags_en: ["Claude Code", "Anthropic", "macOS", "Linux", "cross-session messaging"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/claude-code-now-lets-sessions-talk-to-each-other-on-macos", lang: "EN" }
    ]
  },
  {
    id: "20260807-026",
    trackers: ["os"],
    category: "Apple",
    title: "傳聞稱 Apple 可能於下週調整 iPhone 17 系列價格",
    summary: "根據社群平台微博爆料者 Fixed Focus Digital 指出，市場有傳聞顯示 Apple 可能會調漲 iPhone 17 的價格。雖然過去幾個月 Apple 調整了多項產品售價但 iPhone 暫未受影響，原本外界預期價格變動會在 9 月新機發表時發生，但此次傳聞暗示時間點可能提前。由於該傳聞缺乏直接官方來源，具體是全面調漲還是僅部分機型受影響尚不明朗。建議消費者與相關從業者持續關注 Apple 官方後續公告，以評估實際市場價格波動與採購規劃。",
    tags: ["Apple", "iPhone 17", "Fixed Focus Digital", "售價調整", "傳聞"],
    title_en: "Rumors Suggest Apple May Adjust iPhone 17 Pricing Next Week",
    summary_en: "According to the social media platform Weibo user Fixed Focus Digital, market rumors suggest that Apple may raise the price of the iPhone 17. Although Apple has adjusted the prices of several products in recent months, the iPhone has not yet been affected. While the public had previously expected price changes to occur at the September new product launch, this rumor suggests that the timing may be advanced. Since this rumor lacks a direct official source, it remains unclear whether the price increase will be comprehensive or limited to specific models. Consumers and relevant industry professionals are advised to continue monitoring official Apple announcements to assess actual market price fluctuations and adjust purchasing plans.",
    tags_en: ["Apple", "iPhone 17", "Fixed Focus Digital", "Price Adjustment", "Rumor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/iphone-17-might-get-price-increase-next-week-per-new-rumor", lang: "EN" }
    ]
  },
  {
    id: "20260807-027",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 迎來重大更新，解決 iPhone 長期存在的 Wi-Fi 與行動網路切換延遲問題",
    summary: "Apple 在 iOS 27 中針對平台效能進行了顯著改進，特別改善了 iPhone 在 Wi-Fi 網路與行動數據之間切換時的流暢度。過去用戶在離開 Wi-Fi 覆蓋範圍時常遭遇短暫斷線或網路延遲，必須手動關閉 Wi-Fi 才能強制切換至行動網路。在 iOS 27 中，系統透過更聰明的網路轉移機制解決了此問題，使網路切換更加無縫。建議用戶在正式版推出後盡速升級以獲得最佳連線體驗，相關細節可參考 Apple 官方說明。",
    tags: ["Apple", "iOS 27", "iPhone", "Wi-Fi", "行動網路", "網路切換", "作業系統更新"],
    title_en: "iOS 27 brings major updates, resolving persistent Wi-Fi and cellular network switching delays on iPhone",
    summary_en: "Apple has made significant platform performance improvements in iOS 27, specifically enhancing the fluidity when an iPhone switches between Wi-Fi networks and cellular data. Previously, users often encountered momentary disconnections or network delays when leaving Wi-Fi coverage, sometimes requiring them to manually disable Wi-Fi to force a switch to cellular data. In iOS 27, the system addresses this issue through a smarter network handover mechanism, making the transition more seamless. Users are advised to upgrade promptly after the official release to ensure the best connectivity experience. For detailed information, please refer to Apple's official documentation.",
    tags_en: ["Apple", "iOS 27", "iPhone", "Wi-Fi", "Cellular Network", "Network Switching", "Operating System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/ios-27-has-long-awaited-fix-for-common-iphone-wireless-issue", lang: "EN" }
    ]
  },
  {
    id: "20260807-028",
    trackers: ["os"],
    category: "Apple",
    title: "傳聞蘋果秋季將推出搭載 M6 晶片之 MacBook Pro 與全新 MacBook Ultra",
    summary: "根據外媒報導，蘋果預計於今年秋季推出兩款全新 Mac 機型以滿足 MacBook Pro 用戶的需求。其中搭載 M6 晶片的 MacBook Pro 預計將成為首款採用未公開製程或先進技術的 Mac 晶片，並維持現有的經典外型與優異續航力；而全新推出的 MacBook Ultra 則主打更輕薄的外觀設計，並配備 OLED 顯示器、觸控螢幕、動態島以及行動網路連線選項，內部將搭載 M5 Pro 與 M5 Max 晶片。兩款新機預計於未公開的確切秋季日期亮相，建議有需求的用戶可依預算與功能需求評估升級選項，或是參考現有的整修品與通路優惠。",
    tags: ["Apple", "MacBook Pro", "MacBook Ultra", "M6", "M5 Pro", "M5 Max", "OLED"],
    title_en: "Rumor: Apple to Launch MacBook Pro with M6 Chip and New MacBook Ultra This Autumn",
    summary_en: "According to foreign media reports, Apple is expected to launch two new Mac models this autumn to meet the needs of MacBook Pro users. The MacBook Pro, featuring the M6 chip, is anticipated to be the first Mac chip to utilize an unannounced process or advanced technology, while maintaining its classic design and excellent battery life. Meanwhile, the newly introduced MacBook Ultra will focus on a lighter, thinner design, equipped with an OLED display, touchscreen, Dynamic Island, and cellular connectivity options, and will house the M5 Pro and M5 Max chips. Both new models are expected to debut on an unannounced autumn date. Users with needs are advised to evaluate upgrade options based on their budget and functional requirements, or to consider existing refurbished units and retail promotions.",
    tags_en: ["Apple", "MacBook Pro", "MacBook Ultra", "M6", "M5 Pro", "M5 Max", "OLED"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/macbook-pro-users-will-soon-have-two-compelling-new-upgrade-options", lang: "EN" }
    ]
  },
  {
    id: "20260807-029",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 似乎已放棄「電影模式」，但這對影像功能開發是個重大失誤",
    summary: "本文討論了 Apple 於 2021 年 iPhone 13 上推出的「電影模式」（Cinematic mode）。此功能被描述為影片版的「人像模式」（Portrait mode），允許使用者設定焦點並模糊背景。作者指出，雖然「人像模式」在後續世代持續大幅改進，但「電影模式」的發展似乎停滯不前，甚至讓作者認為 Apple 已經失去了對此功能的興趣。作者認為，這是一個重大的失誤，暗示 Apple 應持續投入資源，進一步提升此類專業影像處理功能，以維持產品的競爭力與吸引力。",
    tags: ["Apple", "Cinematic mode", "iPhone 13", "人像模式", "影像處理"],
    title_en: "Apple Seems to Have Abandoned 'Cinematic Mode,' But This is a Major Misstep for Imaging Feature Development",
    summary_en: "This article discusses 'Cinematic mode,' which was introduced by Apple on the iPhone 13 in 2021. This feature is described as a video version of 'Portrait mode,' allowing users to set focus and blur the background. The author points out that while 'Portrait mode' has continued to improve significantly in subsequent generations, the development of 'Cinematic mode' appears to have stalled, leading the author to believe that Apple may have lost interest in this feature. The author argues that this is a significant oversight, suggesting that Apple should continue to invest resources in further enhancing such professional imaging features to maintain product competitiveness and appeal.",
    tags_en: ["Apple", "Cinematic mode", "iPhone 13", "Portrait mode", "Image processing"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/apple-seems-to-have-abandoned-cinematic-mode-and-thats-a-mistake", lang: "EN" }
    ]
  },
  {
    id: "20260807-030",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 官方整修品商店擴大陣容，新增 M5 MacBook Pro 與高階配置",
    summary: "Apple 近期在其官方認證整修品商店中，擴大並新增了多款產品的庫存，包含 M5 MacBook Pro、Studio Display XDR、高階 M5 MacBook Air 以及 Apple TV 4K 與 Apple Watch 等配置。整修品提供最高達百分之十五的折扣，享有原廠一年有限保固與十四天退貨政策，並可加購 AppleCare。由於庫存有限且銷售速度極快，建議有需求的消費者儘快前往選購。",
    tags: ["Apple", "MacBook Pro", "MacBook Air", "Studio Display XDR", "Apple TV 4K", "Apple Watch", "Certified Refurbished"],
    title_en: "Apple Official Refurbished Store Expands Inventory with New M5 MacBook Pro and High-End Configurations",
    summary_en: "Apple has recently expanded its official certified refurbished store, adding multiple products to its inventory. These include the M5 MacBook Pro, Studio Display XDR, high-end M5 MacBook Air, as well as configurations for the Apple TV 4K and Apple Watch. Refurbished items offer discounts of up to fifteen percent, come with a full year limited warranty, and a fourteen-day return policy, with the option to purchase AppleCare. Due to limited stock and rapid sales, consumers are advised to purchase quickly if they require these items.",
    tags_en: ["Apple", "MacBook Pro", "MacBook Air", "Studio Display XDR", "Apple TV 4K", "Apple Watch", "Certified Refurbished"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/apple-expands-refurb-store-with-rare-m5-macbook-pro-configs-apple-tv-4k-more", lang: "EN" }
    ]
  },
  {
    id: "20260807-031",
    trackers: ["os"],
    category: "Apple",
    title: "watchOS 27 傳將迎來高血壓通知功能升級，目前正等待美國 FDA 審查",
    summary: "根據外媒報導，Apple Watch 的高血壓通知功能預計在 watchOS 27 中迎來升級與擴展。該功能正等待美國食品藥物管理局（FDA）審查，尚未正式向公眾推出。高血壓為心臟病、中風與腎臟病的重要風險因子，此升級有望進一步強化 Apple Watch 的健康管理能力。雖然未在開發者大會中亮相，但預計將隨秋季新一代硬體設備推出或透過軟體更新推送給使用者。建議相關使用者持續關注官方後續的更新與安全公告，並在功能推出後安裝對應的 watchOS 版本。",
    tags: ["Apple", "watchOS 27", "Apple Watch", "FDA", "高血壓通知"],
    title_en: "watchOS 27 to Feature High Blood Pressure Notification Upgrade, Awaiting US FDA Review",
    summary_en: "According to foreign media reports, the high blood pressure notification feature for the Apple Watch is expected to receive upgrades and expansions in watchOS 27. This feature is currently awaiting review by the U.S. Food and Drug Administration (FDA) and has not been officially released to the public. High blood pressure is a significant risk factor for heart disease, stroke, and kidney disease, and this upgrade is expected to further enhance the Apple Watch's health management capabilities. Although it has not been showcased at a developer conference, it is anticipated to be released with the next generation of hardware or pushed to users via a software update. Users are advised to continue monitoring official updates and security announcements, and to install the corresponding watchOS version once the feature is launched.",
    tags_en: ["Apple", "watchOS 27", "Apple Watch", "FDA", "High Blood Pressure Notification"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/watchos-27-could-make-apple-watchs-important-new-health-feature-even-better", lang: "EN" }
    ]
  },
  {
    id: "20260807-032",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 測試 iOS 26.6.1 更新，預計將包含錯誤修復與安全強化",
    summary: "Apple 近期開始在內部測試 iOS 26.6.1 更新，該版本是在 iOS 26.6 公開發布約兩週後出現。雖然 Apple 內部測試的版本不一定會公開發布，但若正式推出，預計將著重於修復錯誤或提升安全性。此舉符合 Apple 宣布加速 iPhone 軟體更新的趨勢，以應對 AI 發展出惡意駭客工具的速度加快。此外，文章也提到 Apple 本週發布了三組 Mac 更新，包括 macOS Sonoma 14.8.9、macOS Sequoia 15.7.9 和 macOS Tahoe 26.6.1，旨在修補影響 Screen Sharing 應用程式的重大漏洞。目前，iOS 27 版本仍處於 Beta 測試階段，預計下個月會對 iPhone 用戶開放。",
    tags: ["iOS 26.6.1", "Apple", "macOS", "安全更新", "iOS 27", "錯誤修復"],
    title_en: "Apple Testing iOS 26.6.1 Update, Expected to Include Bug Fixes and Security Enhancements",
    summary_en: "Apple has recently begun internal testing of the iOS 26.6.1 update, which appeared approximately two weeks after the public release of iOS 26.6. Although internal test versions are not guaranteed for public release, if officially launched, it is expected to focus on bug fixes or enhanced security. This move aligns with Apple's trend of accelerating iPhone software updates to keep pace with the speed at which AI development can create malicious hacking tools. Furthermore, the article mentions that Apple released three sets of Mac updates this week, including macOS Sonoma 14.8.9, macOS Sequoia 15.7.9, and macOS Tahoe 26.6.1, aimed at patching critical vulnerabilities affecting the Screen Sharing application. Currently, iOS 27 remains in the Beta testing phase and is expected to be available to iPhone users next month.",
    tags_en: ["iOS 26.6.1", "Apple", "macOS", "Security Update", "iOS 27", "Bug Fixes"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/ios-26-6-1-likely-coming-soon-as-apple-speeds-up-iphone-updates", lang: "EN" }
    ]
  },
  {
    id: "20260807-033",
    trackers: ["os", "security"],
    category: "Apple",
    title: "傳聞 iPhone 18 Pro 系列將迎來相機升級、更大電池容量與價格調漲",
    summary: "市場傳聞指出，蘋果即將推出的 iPhone 18 Pro 與 Pro Max 將在多個方面強化其高階定位。在硬體升級方面，主相機預計將導入可變光圈設計，而望遠相機則會配備更大的光圈以提升低光源拍攝表現。在續航力方面，受惠於物理電池容量的增加（例如 iPhone 18 Pro Max 的 eSIM 版本據傳將搭載更大容量電池）以及新一代處理器與數據機的能效表現，預期電池續航力將創下新高。然而，售價部分也可能隨之調高，分析師預估兩款 Pro 機型的起售價格將有所上調，對消費者而言入手門檻將會提高。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "A20 Pro", "C2 modem", "相機升級", "電池續航"],
    title_en: "Rumored iPhone 18 Pro Series to Feature Camera Upgrades, Larger Battery, and Price Hike",
    summary_en: "Market rumors suggest that Apple's upcoming iPhone 18 Pro and Pro Max will enhance their high-end positioning across multiple aspects. In terms of hardware upgrades, the main camera is expected to introduce a variable aperture design, while the telephoto camera will be equipped with a larger aperture to improve low-light photography performance. Regarding battery life, thanks to increased physical battery capacity (for example, the eSIM version of the iPhone 18 Pro Max is rumored to feature a larger battery) and the energy efficiency of the new generation processor and modem, battery life is expected to reach new heights. However, the selling price may also increase. Analysts estimate that the starting prices for both Pro models will be raised, raising the entry barrier for consumers.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "A20 Pro", "C2 modem", "Camera Upgrade", "Battery Life"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/iphone-18-pro-is-getting-even-more-pro-this-year-in-three-ways", lang: "EN" }
    ]
  },
  {
    id: "20260807-034",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 在 iOS 27 的 Apple Wallet 中加入實體通行證匯入功能",
    summary: "Apple 於 iOS 27 中為 Apple Wallet 推出一項全新功能，允許使用者將實體通行證、會員卡與活動門票直接匯入數位錢包中。透過相機 App 的 Siri 模式，使用者只需將 iPhone 對準帶有條碼的實體卡片，或對數位卡片進行截圖，系統便會提示儲存至 Apple Wallet。此功能消除了隨身攜帶實體卡片的必要性，減少了使用者因遺忘實體卡片而產生的困擾。目前未公開具體的資安漏洞或安全風險評等細節。建議使用者可依需求更新至最新作業系統版本以體驗新功能。",
    tags: ["Apple", "iOS 27", "Apple Wallet", "iPhone", "Apple Watch", "Siri"],
    title_en: "Apple Adds Physical Pass Import Feature to Apple Wallet in iOS 27",
    summary_en: "Apple is introducing a new feature in iOS 27 for Apple Wallet, allowing users to directly import physical passes, membership cards, and event tickets into their digital wallet. Using the Camera App's Siri mode, users simply need to point their iPhone at a physical card with a barcode, or take a screenshot of a digital card, and the system will prompt them to save it to Apple Wallet. This feature eliminates the need to carry physical cards, reducing user inconvenience caused by forgetting them. No specific cybersecurity vulnerabilities or risk assessment details have been disclosed at this time. Users are advised to update to the latest operating system version as needed to experience the new functionality.",
    tags_en: ["Apple", "iOS 27", "Apple Wallet", "iPhone", "Apple Watch", "Siri"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/apple-wallet-in-ios-27-adds-feature-thats-been-on-my-wishlist-for-years", lang: "EN" }
    ]
  },
  {
    id: "20260807-035",
    trackers: ["os"],
    category: "Apple",
    title: "警惕詐騙集團利用FaceTime冒充銀行，竊取用戶資料",
    summary: "蘋果公司近期發出警告，提醒iPhone用戶注意詐騙集團正日益利用FaceTime進行冒充行為。這些詐騙分子會冒充銀行等機構，試圖騙取用戶的個人資料。本內容透過與Truecaller資深顧問Clayton LiaBraaten的討論，深入分析了這類冒充詐騙的發展模式，探討了為什麼實時視訊通話會給人一種高度信任感，並提供了預防這些詐騙行為的實用建議。用戶應提高警覺心，不輕信來電的身份，特別是涉及金錢或敏感資訊的請求。修補建議是提高用戶的數位安全意識，並透過多重驗證和官方管道確認資訊的真實性。",
    tags: ["FaceTime", "詐騙", "iPhone", "Apple", "Truecaller", "個人資料竊取"],
    title_en: "Beware of Scammers Using FaceTime to Impersonate Banks and Steal User Data",
    summary_en: "Apple recently issued a warning, reminding iPhone users to be cautious as scam groups are increasingly utilizing FaceTime for impersonation. These scammers impersonate institutions such as banks, attempting to trick users into revealing personal data. This article, based on a discussion with Truecaller Senior Advisor Clayton LiaBraaten, deeply analyzes the evolving patterns of these impersonation scams, explores why real-time video calls create a high sense of trust, and provides practical advice for preventing such fraudulent activities. Users should raise their vigilance and not easily trust the identity of incoming calls, especially when financial or sensitive information is requested. The key recommendations are to raise user digital security awareness and to confirm the authenticity of information through multi-factor authentication and official channels.",
    tags_en: ["FaceTime", "Scam", "iPhone", "Apple", "Truecaller", "Personal Data Theft"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/security-bite-podcast-why-scammers-love-facetime-now", lang: "EN" }
    ]
  },
  {
    id: "20260807-036",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Health App 功能指南：整合 Apple Watch 與第三方醫療裝置的最佳實踐",
    summary: "本文介紹 Apple Health 應用程式的綜合功能與設定方式，涵蓋資料整合、裝置連接、版面自訂及資料來源管理。使用者可透過 Apple Watch、智慧手環、血壓計與智慧體重計等周邊設備同步健康數據，並直接連接醫療機構同步病歷資訊。同時，文章說明如何透過隱私設定與資料權限管理，確保健康數據的安全共用與加密保護。",
    tags: ["Apple", "Apple Health", "Apple Watch", "Withings", "Medical Records", "iOS"],
    title_en: "Apple Health App Guide: Best Practices for Integrating Apple Watch and Third-Party Medical Devices",
    summary_en: "This article introduces the comprehensive functions and setup methods of the Apple Health application, covering data integration, device connectivity, dashboard customization, and data source management. Users can synchronize health data from peripheral devices such as Apple Watch, smart bands, blood pressure monitors, and smart scales, and also directly connect to medical institutions to synchronize medical records. Furthermore, the article explains how to ensure the secure sharing and encrypted protection of health data through privacy settings and data permission management.",
    tags_en: ["Apple", "Apple Health", "Apple Watch", "Withings", "Medical Records", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/06/apple-health-best-features", lang: "EN" }
    ]
  },
  {
    id: "20260807-037",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "近 800 個惡意 npm 套件遭上架，散播跨平台遠端存取木馬與竊密軟體",
    summary: "資安研究人員發現新一輪供應鏈攻擊，攻擊者在 npm 登錄檔上架近 800 個惡意套件，採用 AI 產生或隨機文字的拼寫錯誤搶注（Typosquatting）名稱。這些套件要求開發者使用 require() 載入，進而執行名為 WEL1DROPPER 的下載器。該下載器會辨識作業系統（Windows、Mac、Linux）與 CPU 架構，透過 Cloudflare Workers 或 DNS TXT 記錄分段下載對應的遠端存取木馬（RAT）及竊密軟體，最終甚至部署 Sliver C2 框架。攻擊者在 Windows 機制中繞過 ETW 與 AMSI 檢測，並在 macOS 與 Linux 建立持續性機制。專家建議開發者審查專案依賴項目，避免引用來源不明或名稱拼寫異常的 npm 套件。",
    tags: ["npm", "WEL1DROPPER", "Sliver", "Typosquatting", "供應鏈攻擊", "遠端存取木馬", "開源安全"],
    title_en: "Nearly 800 malicious npm packages uploaded, spreading cross-platform RATs and spyware",
    summary_en: "Security researchers discovered a new wave of supply chain attacks, where attackers uploaded nearly 800 malicious packages to the npm registry. These packages used AI-generated or randomly misspelled names to perform typosquatting. The packages require developers to use require() to load, which then executes a downloader named WEL1DROPPER. This downloader identifies the operating system (Windows, Mac, Linux) and CPU architecture, and then downloads corresponding Remote Access Trojans (RATs) and spyware in segments via Cloudflare Workers or DNS TXT records, eventually even deploying the Sliver C2 framework. The attackers bypassed ETW and AMSI detection on Windows machines, and established persistence mechanisms on macOS and Linux. Experts advise developers to review project dependencies and avoid referencing unknown or suspiciously named npm packages.",
    tags_en: ["npm", "WEL1DROPPER", "Sliver", "Typosquatting", "Supply Chain Attack", "Remote Access Trojan", "Open Source Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/nearly-800-malicious-npm-packages.html", lang: "EN" }
    ]
  },
  {
    id: "20260807-038",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Z Fold 8 系列正式上市：預購優惠結束與各大通路換購折扣調整",
    summary: "三星消費級折疊螢幕手機 Galaxy Z Fold 8 系列於今日正式上市，預購期間提供的多項優惠與高額換購折扣隨之縮減。Samsung.com 官網已全面調降舊機換購（Trade-in）折抵金額，最高折抵額度減少 200 美元。Amazon 雖維持部分優惠，但熱門機型已售罄。目前以 Best Buy 優惠最佳，仍維持最高 1,200 美元的換購折抵並加贈 200 美元禮品卡。受影響產品包含 Galaxy Z Fold 8 與 Fold 8 Ultra 全系列機型，建議有購機需求的消費者比較各通路剩餘庫存與換購條款。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Android", "智慧型手機", "Best Buy"],
    title_en: "Samsung Galaxy Z Fold 8 Series Officially Launched: Pre-order Offers End and Retail Trade-in Discounts Adjust",
    summary_en: "Samsung's consumer foldable smartphone, the Galaxy Z Fold 8 series, officially launched today, leading to the reduction of multiple pre-order offers and high trade-in discounts. Samsung.com has significantly reduced the trade-in value for older devices, lowering the maximum trade-in amount by $200. While Amazon maintains some offers, popular models are already sold out. Best Buy currently offers the best deal, maintaining a trade-in discount of up to $1,200 plus a $200 gift card. Affected products include the entire Galaxy Z Fold 8 and Fold 8 Ultra series. Consumers needing to purchase a device are advised to compare remaining inventory and trade-in terms across various retailers.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Android", "Smartphone", "Best Buy"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/07/galaxy-z-fold-8-best-deal-release-day", lang: "EN" }
    ]
  },
  {
    id: "20260807-039",
    trackers: ["os"],
    category: "Android",
    title: "Google Photos 新增設定選項：支援使用者手動關閉貼圖選取閃爍動畫",
    summary: "Google Photos 於去年推出了將相片主體轉換為貼圖的功能，系統會自動透過外框與「閃爍（shimmer）」動畫提示可剪裁的對象。然而，此視覺效果可能干擾部分使用者的相片瀏覽體驗。回應用戶建議，Google 於支援頁面宣布新增設定控制開關。使用者現在可透過「設定 > 偏好設定 > 相片檢視」路徑，自行將預設啟用的「顯示閃爍（Show shimmer）」功能關閉。此更新旨在提升使用者介面體驗與個人化自主性。",
    tags: ["Google", "Google Photos", "Android", "使用者體驗", "相片檢視"],
    title_en: "Google Photos adds setting option to manually disable sticker selection shimmer animation",
    summary_en: "Google Photos introduced the feature that converts photo subjects into stickers last year. The system automatically uses a bounding box and a 'shimmer' animation to indicate objects that can be cropped. However, this visual effect might disrupt the photo browsing experience for some users. Following user feedback, Google announced on its support page that it has added a setting control switch. Users can now manually disable the default 'Show shimmer' function via the path 'Settings > Preferences > Photo View.' This update aims to enhance the user interface experience and personal autonomy.",
    tags_en: ["Google", "Google Photos", "Android", "User Experience", "Photo View"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/07/google-photos-turn-off-sticker-animation", lang: "EN" }
    ]
  },
  {
    id: "20260807-040",
    trackers: ["os"],
    category: "Android",
    title: "Google Wear OS 版 Gemini 迎來全新覆蓋層介面，強化跨平台視覺一致性",
    summary: "Google 針對 Wear OS 平台的 Gemini 應用程式發布 1.36 版本更新，導入全新的覆蓋層（Overlay）介面設計。過往啟動 Gemini 會直接開啟完整 App，新設計則會直接浮現在目前的錶面上，並採用與 Android 手機相同的 Neural Expressive 背景與 Spark 圖示，同時將系統麥克風隱私指示燈移至螢幕上方。本次更新旨在整合跨裝置的助手介面體驗，AI 回應功能本身並未改變。目前該版本已於 Play Store 上架，但全新視覺介面仍需等待伺服器端（Server-side）逐步推送開放。",
    tags: ["Google", "Gemini", "Wear OS", "UI更新", "Android", "使用者體驗"],
    title_en: "Google Wear OS Gemini Receives New Overlay Interface, Enhancing Cross-Platform Visual Consistency",
    summary_en: "Google has released version 1.36 of the Gemini application for the Wear OS platform, introducing a brand new Overlay interface design. Previously, launching Gemini would directly open the full application. The new design, however, will appear as an overlay on the current watch face, utilizing the same Neural Expressive background and Spark icon as the Android phone, while also relocating the system microphone privacy indicator to the top of the screen. This update aims to integrate a consistent assistant interface experience across devices; the core AI response functionality remains unchanged. The version is currently available on the Play Store, but the new visual interface is expected to be rolled out gradually via server-side push.",
    tags_en: ["Google", "Gemini", "Wear OS", "UI Update", "Android", "User Experience"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/06/gemini-overlay-wear-os", lang: "EN" }
    ]
  },
  {
    id: "20260807-041",
    trackers: ["os", "security"],
    category: "Android",
    title: "Datadog Android 應用程式存在 CVE-2026-44964 漏洞，可透過共安裝惡意 App 觸發",
    summary: "Datadog 的 Android 應用程式在 v545-5.9.2 版本之前存在一個安全漏洞 CVE-2026-44964。此漏洞源於 `OnCallNotificationActivity` 在舊版本中被宣告為可導出（exported），且缺乏權限保護機制。攻擊者只需在受害者設備上共安裝一個惡意應用程式，並確保受害者有活躍的 Datadog 會話，即可利用此漏洞。攻擊流程是透過惡意 App 傳遞控制的 Intent extras，啟動該活動，並在受害者點擊「確認」（Acknowledge）按鈕後，應用程式會向後端發送偽造的待命確認訊號，同時從 Datadog 流程內部啟動惡意 Intent，並在螢幕亮起、解除鍵盤保護的情況下執行攻擊者提供的程式碼。此漏洞的攻擊向量為網路（AV:N），無需權限（PR:N），且需要使用者互動（UI:R），影響的機密性、完整性與可用性分別為低、低、高（CVSS v3.1）。建議用戶應立即升級 Datadog Android 應用程式至 v545-5.9.2 或更高版本，以修補此安全風險。",
    tags: ["Datadog", "CVE-2026-44964", "Android", "OnCallNotificationActivity", "共安裝攻擊"],
    title_en: "CVE-2026-44964 Vulnerability in Datadog Android App Exploitable via Co-installed Malicious App",
    summary_en: "The Datadog Android application has a security vulnerability, CVE-2026-44964, present in versions prior to v545-5.9.2. This vulnerability stems from the `OnCallNotificationActivity` being declared as exported and lacking proper permission protection in older versions. An attacker only needs to co-install a malicious application on the victim's device and ensure the victim has an active Datadog session to exploit this flaw. The attack process involves the malicious app passing a controlled Intent extra to launch the activity. When the victim clicks the 'Acknowledge' button, the application sends a forged on-call confirmation signal to the backend, while simultaneously initiating a malicious Intent from within the Datadog workflow and executing attacker-provided code when the screen is on and the keyboard is unlocked. This vulnerability has an attack vector of Network (AV:N), no privileges required (PR:N), and requires user interaction (UI:R), with low impact on Confidentiality, low on Integrity, and high on Availability (CVSS v3.1). Users are advised to immediately upgrade the Datadog Android application to v545-5.9.2 or later to patch this security risk.",
    tags_en: ["Datadog", "CVE-2026-44964", "Android", "OnCallNotificationActivity", "Co-installation Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-44964", lang: "EN" }
    ]
  },
  {
    id: "20260807-042",
    trackers: ["os", "security"],
    category: "Android",
    title: "Datadog Android App Widget 存在未受保護的活動，可能遭共安裝應用程式暴力破解登入",
    summary: "Datadog Android 應用程式在 v545-5.9.2 版本之前的版本中，其六個 App Widget 配置活動（包括 IncidentWidgetActivity 等）未設置權限保護，允許透過接收呼叫者提供的 AppWidgetManager.EXTRA_APPWIDGET_ID 參數。當無法解析深層連結目的地時，這些活動會使用該 ID 載入匹配的 Widget 儲存會話，並自動以該用戶登入。由於 Android Widget ID 是連續的整數，共安裝的惡意應用程式可以暴力破解此 ID，以找到與受害者設備上配置的 Widget 相匹配的 ID。此漏洞的影響是，惡意應用程式可以在受害者會話前台開啟匹配的配置活動，並渲染即時基礎設施資料。然而，資料的暴露僅限於視覺側信道（如螢幕錄影或無障礙服務），呼叫應用程式無法程式化地讀取渲染的資料。修補建議是升級至 v545-5.9.2 或更高版本，並確保相關活動實施適當的權限保護。",
    tags: ["Datadog", "Android", "App Widget", "CVE", "權限保護", "共安裝應用程式"],
    title_en: "Datadog Android App Widget has unprotected activity, potentially allowing brute-forcing of login via co-installed applications",
    summary_en: "In versions of the Datadog Android application prior to v545-5.9.2, six App Widget configuration activities (including IncidentWidgetActivity) lacked permission protection, allowing them to be triggered by receiving the AppWidgetManager.EXTRA_APPWIDGET_ID parameter. When a deep link destination cannot be resolved, these activities load the matching Widget store session using this ID and automatically log in the user. Since Android Widget IDs are sequential integers, a co-installed malicious application can brute-force these IDs to find an ID matching a Widget configured on the victim's device. The impact of this vulnerability is that a malicious application can open the matching configuration activity in the foreground of the victim's session and render real-time infrastructure data. However, the data exposure is limited to visual side channels (such as screen recording or accessibility services); the calling application cannot programmatically read the rendered data. The recommended fix is to upgrade to v545-5.9.2 or later and ensure that the relevant activities implement proper permission protection.",
    tags_en: ["Datadog", "Android", "App Widget", "CVE", "Permission Protection", "Co-installed Application"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-44965", lang: "EN" }
    ]
  },
  {
    id: "20260807-043",
    trackers: ["os", "security"],
    category: "Android",
    title: "CVE-2026-47361：Datadog Android 應用程式允許惡意應用程式靜默清除 Bits AI 通知",
    summary: "本漏洞 CVE-2026-47361 影響 Datadog Android 應用程式在 v541-5.9.2 版本之前。漏洞點在於 `BubbleChatActivity` 類別被導出（exported），且缺乏權限保護機制。該活動會接受帶有呼叫方提供 `conversation_id` 的 SEND intent。當該活動關閉，且沒有正在處理的 session 匹配此 ID 時，它會無條件取消 ID 為 9201 的通知（即 Bits AI 的聊天通知），且不會檢查呼叫方的身份或對該對話的擁有權。這要求攻擊者必須在受害者設備上預先安裝一個惡意應用程式。若成功利用，惡意應用程式可以靜默地清除受害者與 Bits AI 之間的聊天通知。不過，此漏洞僅影響通知的清除，不會導致聊天內容外洩，對話資料仍受伺服器認證保護，且不會傳回給呼叫方。修補建議是升級至 Datadog Android 應用程式 v541-5.9.2 或更高版本。",
    tags: ["Datadog", "CVE-2026-47361", "Android", "BubbleChatActivity", "Bits AI", "應用程式漏洞"],
    title_en: "CVE-2026-47361: Datadog Android Application Allows Malicious Apps to Silently Clear Bits AI Notifications",
    summary_en: "The vulnerability CVE-2026-47361 affects Datadog Android applications prior to version v541-5.9.2. The flaw lies in the `BubbleChatActivity` class being exported and lacking proper permission protection. This activity accepts a SEND intent containing a `conversation_id` from the caller. When the activity is closed and no active session matches this ID, it unconditionally cancels the notification with ID 9201 (i.e., the Bits AI chat notification), without checking the caller's identity or ownership of the conversation. This requires an attacker to pre-install a malicious application on the victim's device. If successfully exploited, the malicious application can silently clear the chat notifications between the victim and Bits AI. However, this vulnerability only affects notification clearing and does not lead to chat content leakage; the conversation data remains protected by server authentication and is not returned to the caller. The recommended fix is to upgrade to Datadog Android application v541-5.9.2 or later.",
    tags_en: ["Datadog", "CVE-2026-47361", "Android", "BubbleChatActivity", "Bits AI", "Application Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-47361", lang: "EN" }
    ]
  },
  {
    id: "20260807-044",
    trackers: ["os", "security"],
    category: "Android",
    title: "Datadog Android 應用程式存在資料外洩風險：敏感資料以純文字儲存於本地資料庫",
    summary: "Datadog 的 Android 應用程式在版本 v554-5.9.4 之前，存在資料儲存的安全性漏洞 (CVE-2026-47362)。該漏洞導致兩個使用 Room-backed SQLite 資料庫的區域，即 LocalNotificationDatabase 和 SearchRecentDatabase，會將敏感內容以純文字 (plaintext) 形式儲存於本地。LocalNotificationDatabase 儲存的內容包括通知標題、訊息、接收者、服務、標籤，以及待命/事件的深度連結；而 SearchRecentDatabase 則儲存了用戶完整的應用程式內搜尋歷史記錄。若攻擊者能夠繞過應用程式的沙盒機制 (app sandbox)，便可以讀取這些資料庫中的所有敏感資訊。此漏洞的修補建議是升級至 v554-5.9.4 或更高版本。由於原文未提供 CVSS 分數或詳細修補指南，建議用戶應立即檢查並更新應用程式至最新版本，以防止本地資料被未授權存取。",
    tags: ["Datadog", "Android", "CVE-2026-47362", "SQLite", "資料外洩", "應用程式安全"],
    title_en: "DataDog Android App Contains Data Leakage Risk: Sensitive Data Stored in Local Database as Plaintext",
    summary_en: "DataDog's Android application, prior to version v554-5.9.4, contains a data storage vulnerability (CVE-2026-47362). This vulnerability causes two areas utilizing Room-backed SQLite databases—LocalNotificationDatabase and SearchRecentDatabase—to store sensitive content in plaintext. The LocalNotificationDatabase stores notification titles, messages, recipients, services, labels, and deep links for pending/events; while the SearchRecentDatabase stores the user's complete in-app search history. If an attacker can bypass the application's sandbox mechanism, they can read all sensitive information from these databases. The recommended fix is to upgrade to v554-5.9.4 or a higher version. Since the original text did not provide a CVSS score or detailed remediation guidelines, users are advised to immediately check and update the application to the latest version to prevent unauthorized access to local data.",
    tags_en: ["Datadog", "Android", "CVE-2026-47362", "SQLite", "Data Leakage", "App Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-47362", lang: "EN" }
    ]
  },
  {
    id: "20260807-045",
    trackers: ["os", "security"],
    category: "Android",
    title: "Datadog Android 應用程式存在 CVE-2026-47363 漏洞，允許惡意應用程式劫持用戶會話",
    summary: "Datadog Android 應用程式在 v541-5.9.2 版本之前存在一個安全漏洞 CVE-2026-47363。此漏洞源於其導出啟動器活動 AppActivity，該活動接受來自 Intent extras 的攻擊者提供的會話資訊（包括 OAuth tokens），但缺乏權限檢查，且在進入會話時未對其進行後端驗證。攻擊者需在設備上共安裝一個惡意應用程式，並讓該應用程式將一個可供攻擊者控制的 OAuth token 載入到受害者應用程式中。若成功利用，惡意應用程式可以將受害者 Datadog 應用程式切換到攻擊者控制的會話。此漏洞屬於帳號混淆（account-confusion）問題，本身並不會直接洩露受害者現有的會話或資料。建議用戶應升級至 v541-5.9.2 或更高版本以修補此漏洞。",
    tags: ["Datadog", "CVE-2026-47363", "Android", "OAuth tokens", "會話劫持"],
    title_en: "CVE-2026-47363 Vulnerability in Datadog Android App Allows Malicious App to Hijack User Session",
    summary_en: "The Datadog Android application has a security vulnerability, CVE-2026-47363, present in versions prior to v541-5.9.2. This vulnerability stems from its exported launcher activity, AppActivity, which accepts session information (including OAuth tokens) provided by an attacker via Intent extras but lacks proper authorization checks and fails to perform backend validation upon entering the session. An attacker must co-install a malicious application on the device and trick the malicious app into loading an attacker-controlled OAuth token into the victim's application. If successfully exploited, the malicious application can switch the victim's Datadog application to an attacker-controlled session. This vulnerability is classified as an account-confusion issue and does not directly leak the victim's existing session or data. Users are advised to upgrade to v541-5.9.2 or later to patch this vulnerability.",
    tags_en: ["Datadog", "CVE-2026-47363", "Android", "OAuth tokens", "Session Hijacking"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-47363", lang: "EN" }
    ]
  },
  {
    id: "20260807-046",
    trackers: ["os", "security"],
    category: "Android",
    title: "Datadog Android 應用程式存在 CVE-2026-47364 漏洞，可能洩露用戶 UUID 及崩潰資料",
    summary: "Datadog 應用程式在版本 v545-5.9.2 之前，存在一個資料洩露的漏洞（CVE-2026-47364）。該漏洞的影響在於，應用程式會將用戶的 Datadog UUID 與 Crashlytics 崩潰資料一同標記，且缺乏用戶可操作的退出機制。這導致用戶的 UUID 和崩潰資料會被記錄在 Firebase Crashlytics 中。雖然文章指出此 UUID 並非用於識別 Datadog 外部系統，但仍構成用戶隱私資料外洩的風險。建議用戶應升級至 v545-5.9.2 或更高版本，以修補此安全問題，並應留意應用程式的資料收集權限。",
    tags: ["Datadog", "CVE-2026-47364", "Android", "Firebase Crashlytics", "資料洩露", "用戶隱私"],
    title_en: "Datadog Android Application Contains CVE-2026-47364 Vulnerability, Potentially Leaking User UUID and Crash Data",
    summary_en: "In versions prior to v545-5.9.2, the Datadog application contains a data leakage vulnerability (CVE-2026-47364). The vulnerability allows the application to tag the user's Datadog UUID along with Crashlytics crash data, and lacks a user-operable exit mechanism. This results in the user's UUID and crash data being recorded in Firebase Crashlytics. Although the article notes that this UUID is not used to identify Datadog external systems, it still poses a risk of user private data leakage. Users are advised to upgrade to v545-5.9.2 or a higher version to patch this security issue, and should pay attention to the application's data collection permissions.",
    tags_en: ["Datadog", "CVE-2026-47364", "Android", "Firebase Crashlytics", "Data Leakage", "User Privacy"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-47364", lang: "EN" }
    ]
  },
  {
    id: "20260807-047",
    trackers: ["os", "security"],
    category: "Android",
    title: "Home Assistant Android Companion App 存在開放重定向漏洞，可能竊取新用戶憑證",
    summary: "Home Assistant 是一個專注於本地控制與隱私的開源智慧家庭自動化軟體。其 Android Companion App 在版本 2026.6.1 之前，存在一個開放重定向（Open Redirect）漏洞。此漏洞發生在應用程式處理 `homeassistant://invite` 深層連結的入職流程（onboarding flow）中。應用程式會將 URL 片段（URL fragment）傳入入職流程，但不會顯示最終的目的主機名稱。由於邀請或入職流程的任何畫面都沒有顯示解析後的伺服器 URL，受害者無法區分合法邀請與惡意邀請。攻擊者可以偽造一個邀請，使得用戶點擊看似正常的「連接到我的 Home Assistant 伺服器」按鈕時，實際上會將用戶導向攻擊者控制的 `/auth/authorize` 端點。在沒有 URL 顯示的 WebView 中，這會呈現一個假冒的登入頁面，從而竊取受害者的憑證。此問題已在版本 2026.6.1 中修復。",
    tags: ["Home Assistant", "Android Companion App", "CVE-2026-59717", "開放重定向", "智慧家庭"],
    title_en: "Home Assistant Android Companion App has Open Redirect vulnerability, potentially allowing credential theft",
    summary_en: "Home Assistant is an open-source smart home automation software focused on local control and privacy. Its Android Companion App, prior to version 2026.6.1, contained an Open Redirect vulnerability. This vulnerability occurs during the onboarding flow when the application processes the `homeassistant://invite` deep link. The application passes the URL fragment into the onboarding flow but does not display the final destination hostname. Because none of the screens in the invitation or onboarding process display the resolved server URL, victims cannot distinguish between a legitimate invitation and a malicious one. An attacker can forge an invitation that, when the user clicks the seemingly normal \"Connect to my Home Assistant server\" button, actually redirects the user to an attacker-controlled `/auth/authorize` endpoint. In a WebView where the URL is not displayed, this presents a spoofed login page, thereby stealing the victim's credentials. This issue has been fixed in version 2026.6.1.",
    tags_en: ["Home Assistant", "Android Companion App", "CVE-2026-59717", "Open Redirect", "Smart Home"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-59717", lang: "EN" }
    ]
  },
  {
    id: "20260807-048",
    trackers: ["security"],
    category: "前瞻技術",
    title: "1Password 報告指 AI 生成修補程式失敗率達半數 易引入新漏洞與遭繞過",
    summary: "根據 1Password 的最新研究（FLAWED），研究團隊測試 OpenAI 與 Anthropic 等 LLM 所生成的修補程式，發現僅 46% 成功解決原漏洞，其餘 49% 未修復漏洞，且許多程式會引入新漏洞或變更應用程式行為。即使成功的修補亦偏向脆弱且易被繞過。報告指出 AI 在攻擊漏洞上比修復更具效率。此外，研究引述 Cursor 資料顯示有 36% 的程式變更未經人工審查即被自動接受。專家建議企業在使用 AI 加速開發時，必須搭配人工審查與驗證機制。",
    tags: ["1Password", "AI 安全", "LLM", "OpenAI", "Anthropic", "漏洞修補", "Agentic AI", "Veracode"],
    title_en: "1Password Report Finds AI-Generated Patches Fail Half the Time, Risking New Vulnerabilities and Bypass",
    summary_en: "According to 1Password's latest research (FLAWED), the research team tested patches generated by LLMs such as OpenAI and Anthropic. They found that only 46% successfully resolved the original vulnerability, while the remaining 49% failed to fix the vulnerability, and many of the programs introduced new vulnerabilities or altered application behavior. Even the successful patches tended to be fragile and easily bypassed. The report notes that AI is more efficient for exploiting vulnerabilities than for fixing them. Furthermore, the research cited Cursor data showing that 36% of code changes were automatically accepted without manual review. Experts recommend that companies utilizing AI for accelerated development must implement manual review and verification mechanisms.",
    tags_en: ["1Password", "AI Security", "LLM", "OpenAI", "Anthropic", "Vulnerability Patching", "Agentic AI", "Veracode"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/ai-generated-patches-fail-half-time", lang: "EN" }
    ]
  },
  {
    id: "20260807-049",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 發布 Pixel Watch 5 宣傳影片 凸顯圓形錶面設計與 Gemini 人工智慧整合",
    summary: "Google 繼發表智慧型手機系列預告後，正式釋出 Pixel Watch 5 的宣傳影片。影片主打該智慧手錶具備健康、睡眠與健身追蹤功能，同時強調其圓形傳統手錶的外觀設計，與市面上矩形或方圓形的競品形成對比。外觀細節顯示新一代手錶延續前代造型並保留充電接點，產品重點強調結合 Gemini 智慧功能。根據先前流出的資訊，Pixel Watch 5 預計搭載效能提升的晶片、全新二代錶帶，並推出新配色，起售價預估為 399 美元。",
    tags: ["Google", "Pixel Watch 5", "Gemini", "智慧手錶", "穿戴式裝置", "硬體預告"],
    title_en: "Google Releases Pixel Watch 5 Promotional Video Highlighting Circular Design and Gemini AI Integration",
    summary_en: "Following the announcement of its smartphone series, Google has officially released the promotional video for the Pixel Watch 5. The video highlights the smartwatch's health, sleep, and fitness tracking capabilities, while emphasizing its circular, traditional watch aesthetic—a contrast to the rectangular or square designs of competing products. The exterior details show that the new generation watch continues the previous model's design and retains the charging contact points. The product's key focus is the integration of Gemini smart features. According to previously leaked information, the Pixel Watch 5 is expected to feature an upgraded chip, a brand-new second-generation strap, and new color options, with an estimated starting price of $399.",
    tags_en: ["Google", "Pixel Watch 5", "Gemini", "Smartwatch", "Wearable Device", "Hardware Teaser"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/07/pixel-watch-5-teaser", lang: "EN" }
    ]
  },
  {
    id: "20260807-050",
    trackers: ["os"],
    category: "重點關注",
    title: "James Marsden將主演Apple TV新劇《Bad News Dads》，改編自Adam Frost小說",
    summary: "演員James Marsden在飾演《Your Friends & Neighbors》第二季的成功之後，再次確認參與Apple TV的第三個製作項目。這次的作品是一部名為《Bad News Dads》的懸疑喜劇。該劇改編自Adam Frost的同名小說，故事圍繞著一支不甚專業的男子棒球業餘聯隊展開。當其中一名球員的妻子在可疑的事故中身亡後，主角Ben（由Marsden飾演）便主導了這場臨時且經常誤導的調查，懷疑這起事件涉及謀殺。Marsden除了主演外，也擔任了執行製作人。該劇由《You’re the Worst》的創作者Stephen Falk操刀。雖然Adam Frost的小說預計於2027年4月6日出版，但Apple TV的半小時懸疑喜劇改編版本目前仍在開發階段，尚未確定首播日期。Apple TV目前提供每月$12.99的訂閱服務。",
    tags: ["Apple TV", "James Marsden", "Bad News Dads", "Adam Frost", "Stephen Falk", "懸疑喜劇"],
    title_en: "James Marsden to Star in Apple TV Series 'Bad News Dads,' Adapted from Adam Frost's Novel",
    summary_en: "Following his successful role in Season 2 of 'Your Friends & Neighbors,' actor James Marsden has confirmed his participation in a third Apple TV production. This new series is a suspense comedy titled 'Bad News Dads.' The show is adapted from Adam Frost's novel of the same name and centers on an amateur men's baseball league. After one of the players' wives dies in a suspicious accident, the protagonist, Ben (played by Marsden), leads a temporary and often misleading investigation, suspecting the incident was a murder. In addition to starring, Marsden also serves as an executive producer. The series is helmed by Stephen Falk, the creator of 'You’re the Worst.' Although Adam Frost's novel is scheduled for publication on April 6, 2027, the half-hour suspense comedy adaptation for Apple TV is currently in development, and a premiere date has not been set. Apple TV currently offers a subscription service for $12.99 per month.",
    tags_en: ["Apple TV", "James Marsden", "Bad News Dads", "Adam Frost", "Stephen Falk", "Suspense Comedy"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/your-friends-neighbors-star-confirmed-for-his-third-apple-tv-project", lang: "EN" }
    ]
  },
  {
    id: "20260807-051",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 正在開發功能，讓使用者可直接將自訂貼圖從 ChatGPT 匯出至 WhatsApp",
    summary: "OpenAI 正在開發一項新功能，允許使用者在 ChatGPT 介面中創建自訂貼圖，並直接將這些貼圖匯出到 WhatsApp 應用程式。目前此功能尚未正式發布，而是透過分析 Android 應用程式套件（APK）的字串資訊所發現。該功能名為「ChatGPT Stickers」，除了提供自訂貼圖的創建選項外，還具備「新增至 WhatsApp」的匯出功能。根據發現的字串，該功能似乎主要支援 WhatsApp 平台，並且需要至少包含三個貼圖才能匯出。這項功能預計將大幅提升使用者在聊天應用程式中的互動性，讓自訂內容的分享更加便捷。由於此功能是從 APK 拆解中發現的，目前尚不清楚其正式的發布時間和是否會公開。此更新屬於應用程式功能擴展，而非安全漏洞修補。",
    tags: ["OpenAI", "ChatGPT", "WhatsApp", "貼圖", "Android", "應用程式功能"],
    title_en: "OpenAI Developing Feature to Export Custom Stickers from ChatGPT Directly to WhatsApp",
    summary_en: "OpenAI is developing a new feature that allows users to create custom stickers within the ChatGPT interface and export them directly to the WhatsApp application. This feature has not been officially released; it was discovered through analyzing string information within an Android application package (APK). The feature, named \"ChatGPT Stickers,\" not only provides options for creating custom stickers but also includes an \"Add to WhatsApp\" export function. According to the discovered strings, the feature appears to primarily support the WhatsApp platform and requires a minimum of three stickers to be exported. This functionality is expected to significantly enhance user interactivity within chat applications, making the sharing of custom content more convenient. Since this feature was discovered via APK deconstruction, its official release timeline and public availability are currently unknown. This update represents an application feature expansion, not a security vulnerability patch.",
    tags_en: ["OpenAI", "ChatGPT", "WhatsApp", "Stickers", "Android", "Application Feature"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/you-may-soon-be-able-to-create-and-export-custom-whatsapp-stickers-straight-from-chatgpt", lang: "EN" }
    ]
  },
  {
    id: "20260807-052",
    trackers: ["os"],
    category: "重點關注",
    title: "探討 Tesla、Rivian 與 GM 等主要車廠持續拒絕支援 Apple CarPlay 的原因與現狀",
    summary: "本文分析了三大主要汽車製造商 Tesla、Rivian 與 GM 拒絕支援 Apple CarPlay 平台的最新動態與背後原因。Tesla 曾傳出正在開發 CarPlay 整合，但目前狀態未公開；Rivian 執行長 RJ Scaringe 強調希望提供原生且一致的數位體驗，軟體主管 Wassym Bensaid 更認為人工智慧將使 CarPlay 過時；GM 則自宣布逐步放棄 CarPlay 以來，持續為此決定辯護，並計劃擴大至燃油車款。整體而言，這幾家車廠仍堅持推動各自的車載資訊娛樂系統與平台策略。",
    tags: ["Apple", "CarPlay", "Tesla", "Rivian", "GM", "iOS", "智慧車載平台"],
    title_en: "Analyzing Why Major Automakers Like Tesla, Rivian, and GM Continue to Reject Apple CarPlay Support and the Current Status",
    summary_en: "This article analyzes the latest developments and underlying reasons why three major automakers—Tesla, Rivian, and GM—are refusing to support the Apple CarPlay platform. Although there were reports that Tesla was developing CarPlay integration, its current status remains undisclosed. Rivian CEO RJ Scaringe emphasized the desire to provide a native and consistent digital experience, while software lead Wassym Bensaid believes that artificial intelligence will render CarPlay obsolete. GM, since announcing its gradual abandonment of CarPlay, has continuously defended this decision and plans to expand its scope to include gasoline-powered models. Overall, these automakers remain committed to promoting their own in-vehicle infotainment systems and platform strategies.",
    tags_en: ["Apple", "CarPlay", "Tesla", "Rivian", "GM", "iOS", "Smart In-Vehicle Platform"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/these-automakers-still-dont-support-carplay-heres-why", lang: "EN" }
    ]
  },
  {
    id: "20260807-053",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 將於下週起把 Claude Code 自動模式設為 Pro 與 Team 用戶的預設權限",
    summary: "Anthropic 宣布自 8 月 14 日起，Claude Code 的自動模式將成為 Pro、Max 與 Team 用戶的預設權限設定，除非用戶或管理員另行指定。該模式透過分類器檢查每次工具調用，以防範具破壞性或超越邊界的動作，並取消了先前針對分類器額外 Token 收費的作法。Anthropic 的測試指出，自動模式在攔截危險指令上的表現優於人類疲勞後的表現，但官方仍提醒分類器無法完全消除風險，建議在正式環境異動時仍須進行人工審查。",
    tags: ["Anthropic", "Claude Code", "自動模式", "AI 程式碼助理", "資安風險", "權限管理"],
    title_en: "Anthropic to Set Claude Code Auto Mode as Default for Pro and Team Users Starting Next Week",
    summary_en: "Anthropic announced that starting August 14, the Auto Mode for Claude Code will become the default setting for Pro, Max, and Team users, unless otherwise specified by the user or administrator. This mode uses a classifier to check every tool call, preventing destructive or out-of-bounds actions, and eliminates the previous practice of charging extra tokens for the classifier. Anthropic's testing indicates that Auto Mode performs better than human performance when fatigued in intercepting dangerous instructions, but the company officially advises that the classifier cannot completely eliminate risk, and manual review is still recommended when making changes in a production environment.",
    tags_en: ["Anthropic", "Claude Code", "Auto Mode", "AI Code Assistant", "Cybersecurity Risk", "Permission Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/psa-claude-code-enabling-auto-mode-as-default-next-week-anthropic-says", lang: "EN" }
    ]
  },
  {
    id: "20260807-054",
    trackers: ["os"],
    category: "重點關注",
    title: "無新聞內容，無法撰寫資安新聞標題與摘要",
    summary: "提供的文章內容僅為播客的介紹和播放器，未包含任何資安事件、漏洞或技術資訊，因此無法撰寫新聞摘要。",
    tags: ["無內容", "9to5Mac", "播客"],
    title_en: "No news content available for writing cybersecurity news title and summary",
    summary_en: "The provided article content only contains a podcast introduction and player, and does not include any cybersecurity incidents, vulnerabilities, or technical information. Therefore, a news summary cannot be written.",
    tags_en: ["No Content", "9to5Mac", "Podcast"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/daily-august-7-2026", lang: "EN" }
    ]
  },
  {
    id: "20260807-055",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無新聞內容：9to5Mac 每日摘要（2026年8月6日）",
    summary: "本文為 9to5Mac 網站提供的 2026 年 8 月 6 日的每日新聞摘要（Daily Recap）。文章內容主要包含一個可收聽的音訊檔案，並提供多個平台（如 iTunes、Apple Podcasts、Stitcher、Google Play）的收聽連結。原文未提供任何具體的資安事件、漏洞或產品更新細節，因此無法撰寫詳細的資安摘要。",
    tags: ["9to5Mac", "每日摘要", "資安資訊", "未公開事件"],
    title_en: "No News Content: 9to5Mac Daily Digest (August 6, 2026)",
    summary_en: "This article is a daily news digest provided by the 9to5Mac website for August 6, 2026. The content primarily consists of an audio file that can be listened to, along with listening links for multiple platforms (such as iTunes, Apple Podcasts, Stitcher, and Google Play). Since the original text does not provide any specific cybersecurity incidents, vulnerabilities, or product update details, a detailed security summary cannot be written.",
    tags_en: ["9to5Mac", "Daily Digest", "Cybersecurity Information", "Undisclosed Incident"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/06/daily-august-6-2026", lang: "EN" }
    ]
  },
  {
    id: "20260807-056",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft Edge 宣布逐步淘汰 Manifest Version 2，推動擴充功能生態系統邁向 MV3",
    summary: "Microsoft Edge 宣布其擴充功能生態系統將進入下一階段，正式推動使用者從 Manifest Version 2 (MV2) 轉移至 Manifest Version 3 (MV3)。自 2026 年 8 月起，Edge 將開始對安裝 MV2 擴充功能的用戶發出通知，並逐步關閉 MV2 擴充功能。目標是到 2026 年底完成消費者轉移，企業級的棄用（deprecation）則將在 2027 年初跟進。MV3 相較於 MV2 提供了顯著的安全性與效能提升。目前，Edge Add-ons 商店中 95% 的頂級 MV2 擴充功能已成功遷移至 MV3，且絕大多數擴充功能已成功轉移，沒有功能性損失。開發者應立即行動，透過 Microsoft Partner Center 上傳 MV3 版本，以確保擴充功能平穩過渡。此變動將先在 Canary、Dev 和 Beta 通道開始，隨後逐步擴展至 Stable 版本。",
    tags: ["Microsoft Edge", "Manifest Version 3", "MV2", "擴充功能", "Chromium", "資安"],
    title_en: "Microsoft Edge Announces Phased Deprecation of Manifest Version 2, Driving Extension Ecosystem Towards MV3",
    summary_en: "Microsoft Edge has announced that its extension ecosystem is entering a new phase, officially guiding users from Manifest Version 2 (MV2) to Manifest Version 3 (MV3). Starting in August 2026, Edge will begin notifying users with MV2 extensions and will gradually deprecate MV2 extensions. The goal is to complete the consumer transition by the end of 2026, with enterprise-level deprecation following in early 2027. MV3 offers significant improvements in security and performance compared to MV2. Currently, 95% of top MV2 extensions in the Edge Add-ons store have successfully migrated to MV3, and the vast majority of extensions have transitioned without functional loss. Developers are urged to take immediate action by uploading MV3 versions via the Microsoft Partner Center to ensure a smooth transition for their extensions. This change will first roll out in the Canary, Dev, and Beta channels before gradually expanding to the Stable version.",
    tags_en: ["Microsoft Edge", "Manifest Version 3", "MV2", "Extensions", "Chromium", "Cybersecurity"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/msedgedev/2026/08/07/moving-the-microsoft-edge-extensions-ecosystem-forward-with-manifest-version-3", lang: "EN" }
    ]
  },
  {
    id: "20260807-057",
    trackers: ["eu_cra", "os"],
    category: "重點關注",
    title: "Software Stewardship Lab 成立，專注於開源軟體供應鏈安全與維護者倦怠研究",
    summary: "Software Stewardship Lab 是一個總部位於蘇格蘭的非營利組織，正式宣布成立。該實驗室的初期研究重點涵蓋兩個關鍵領域：軟體供應鏈安全與開源維護者倦怠問題。在供應鏈安全方面，他們正開發一個「觀測站」，旨在讓使用者即時識別並監控全球關鍵的開源套件，特別關注先前隱藏的依賴關係圖（dependency graph）部分。此外，該組織也持續關注開源社群的維護者倦怠問題，並計畫發布年度報告，甚至研究人工智慧（AI）對維護者倦怠的影響。未來，該實驗室的專家將指導資金流向並監督進行關鍵工作的開源永續性研究人員，並與大學合作，培養下一代軟體供應鏈專家。",
    tags: ["Software Stewardship Lab", "開源軟體", "供應鏈安全", "Open Source", "維護者倦怠", "AI"],
    title_en: "Software Stewardship Lab Established to Focus on Open Source Supply Chain Security and Maintainer Burnout Research",
    summary_en: "The Software Stewardship Lab, a non-profit organization based in Scotland, has officially announced its establishment. The lab's initial research focus covers two critical areas: software supply chain security and the issue of open source maintainer burnout. Regarding supply chain security, they are developing an 'observatory' designed to allow users to instantly identify and monitor critical global open source packages, with a particular focus on previously hidden dependency graph components. Furthermore, the organization continues to address the issue of maintainer burnout within the open source community and plans to release an annual report, even researching the impact of Artificial Intelligence (AI) on maintainer burnout. In the future, the lab's experts will guide funding toward and oversee open source sustainability researchers conducting critical work, and will collaborate with universities to cultivate the next generation of software supply chain experts.",
    tags_en: ["Software Stewardship Lab", "Open Source Software", "Supply Chain Security", "Open Source", "Maintainer Burnout", "AI"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1087812", lang: "EN" }
    ]
  },
  {
    id: "20260807-058",
    trackers: ["os"],
    category: "重點關注",
    title: "前 NSA 局長警告：水系統控制器不應連網，指美國水務設施面臨重大網路攻擊風險",
    summary: "前美國陸軍上將、前 NSA 局長 Paul Nakasone 在 DEF CON 發表談話，警告美國水務系統面臨嚴重的網路安全威脅。他指出，許多水務設施的 Programmable Logic Controllers (PLCs) 應避免連接到網際網路，因為這些設備被惡意行為者鎖定。近期，FBI 已調查針對操作技術設備（Operational Technology devices），包括 PLCs 的攻擊，這些設備負責監控水箱水位並控制泵浦開關。多位私營資安研究人員，如 Halcyon Ransomware Research Center 的 Cynthia Kaiser，懷疑攻擊背後涉及伊朗（Iran）的行為。Nakasone 認為，美國水系統分散且歷史上資金不足，缺乏專職資安人員，形成了巨大的攻擊面。他呼籲必須建立跨部門的合作夥伴關係，並提及了 Vanderbilt University 的 Project Chimera 等專案，以提升關鍵基礎設施的韌性。",
    tags: ["Paul Nakasone", "PLCs", "水務系統", "關鍵基礎設施", "Iran", "DEF CON"],
    title_en: "Former NSA Director Warns: Water System Controllers Should Not Be Connected to Networks, Pointing to Major Cyber Attack Risks for US Water Facilities",
    summary_en: "Former U.S. Army General and NSA Director Paul Nakasone spoke at DEF CON, warning of severe cybersecurity threats facing U.S. water systems. He pointed out that many water facility Programmable Logic Controllers (PLCs) should avoid connection to the internet, as these devices have been targeted by malicious actors. Recently, the FBI has investigated attacks against Operational Technology devices, including PLCs, which are responsible for monitoring water tank levels and controlling pump switches. Several private cybersecurity researchers, such as Cynthia Kaiser of the Halcyon Ransomware Research Center, suspect Iranian involvement behind the attacks. Nakasone believes that the decentralized and historically underfunded nature of U.S. water systems, coupled with a lack of dedicated cybersecurity personnel, creates a massive attack surface. He called for the establishment of cross-departmental partnerships and mentioned projects like Vanderbilt University's Project Chimera to enhance the resilience of critical infrastructure.",
    tags_en: ["Paul Nakasone", "PLCs", "Water Systems", "Critical Infrastructure", "Iran", "DEF CON"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/07/water-system-controllers-dont-belong-on-the-internet-says-ex-nsa-chief-after-suspected-iran-attacks/5285070", lang: "EN" }
    ]
  },
  {
    id: "20260807-059",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "七月勒索軟體攻擊激增，金融、科技、醫療與教育產業成為主要目標",
    summary: "根據 Comparitech 的數據，全球勒索軟體攻擊在七月環環不絕，攻擊事件數量較六月大幅增加。雖然近期媒體焦點集中於美國水利基礎設施的網路攻擊，但這些攻擊並非勒索軟體，且報告指出，對公用事業公司的勒索軟體攻擊反而下降了 44%。相反地，金融、科技、製藥、醫療帳單和教育等產業在七月遭受的攻擊比例大幅上升，分別增長了 71%、62%、46% 和 44%。這與 DeepStrike 報告的趨勢一致，認為製造業、教育、醫療和金融業是勒索金支付的可能性最高的目標。攻擊者利用的途徑可能包括竊取的憑證或零日漏洞。文章提醒，無論安全趨勢如何變化，組織仍應確保員工使用第二安全因素登入、保持系統更新，並定期進行備份，以應對持續存在的傳統威脅。",
    tags: ["勒索軟體", "Comparitech", "金融業", "醫療產業", "教育產業", "零日漏洞"],
    title_en: "Ransomware Attacks Surge in July, Targeting Finance, Tech, Healthcare, and Education Sectors",
    summary_en: "According to Comparitech data, global ransomware attacks continued unabated in July, with a significant increase in the number of incidents compared to June. Although recent media focus has been on cyberattacks against US water infrastructure, these attacks were not ransomware, and reports indicate that ransomware attacks against utility companies actually decreased by 44%. Conversely, the proportion of attacks suffered by the finance, technology, pharmaceutical, healthcare billing, and education sectors saw significant increases in July, rising by 71%, 62%, 46%, and 44% respectively. This aligns with DeepStrike's report, which suggests that manufacturing, education, healthcare, and finance are the most likely targets for ransom payments. Attackers may exploit vectors including stolen credentials or zero-day vulnerabilities. The article reminds readers that regardless of changing security trends, organizations must ensure employees use two-factor authentication for login, keep systems updated, and perform regular backups to address persistent traditional threats.",
    tags_en: ["Ransomware", "Comparitech", "Finance", "Healthcare", "Education", "Zero-day vulnerability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/07/ransomware-attacks-spike-as-world-distracted-by-ai/5284934", lang: "EN" }
    ]
  },
  {
    id: "20260807-060",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "駭客群 ShinyHunters 竊取 Abbott 癌症診斷業務資料，洩露 1090 萬電子郵件及個人健康資訊",
    summary: "醫療巨頭 Abbott 的癌症診斷業務部門，遭駭客群 ShinyHunters 進行資料竊取並公開洩露。此次洩漏的資料包含 1090 萬個獨特電子郵件地址，以及名單、電子郵件、實體地址、電話號碼、出生日期、性別和個人健康資訊等高度敏感資料。Abbott 於 7 月 16 日首次披露此次入侵事件，並在 8 月 5 日更新，確認部分存取檔案包含個人或個人健康資訊，但持續分析中，尚未確定需通知哪些人。駭客群 ShinyHunters 聲稱此次竊取了超過 3000 萬筆客戶資訊，包括超過一百萬個社會安全號碼和 750 萬個出生日期，更令人擔憂的是，他們聲稱包含超過 2200 萬筆包含機密醫病對話和健康資訊的客戶筆記，以及超過 2000 萬筆包含病患 ID、處方類型和訂單日期的醫療訂單記錄。駭客群在暗網上公開威脅，聲稱 Abbott 未支付贖金。目前，Abbott 尚未透露此次透過語音詐騙（vishing）攻擊如何導致資料竊取，或入侵者存取系統的時間長度。受影響的個人資料已大量外洩，風險極高。",
    tags: ["Abbott", "ShinyHunters", "資料外洩", "個人健康資訊", "vishing", "醫療資安"],
    title_en: "Hacker Group ShinyHunters Steal Abbott Cancer Diagnostics Data, Leaking 10.9 Million Emails and Personal Health Information",
    summary_en: "The cancer diagnostics division of medical giant Abbott was targeted by the hacker group ShinyHunters for data theft and subsequent public leak. The leaked data includes 10.9 million unique email addresses, along with highly sensitive information such as lists, emails, physical addresses, phone numbers, dates of birth, gender, and personal health information. Abbott first disclosed the intrusion on July 16 and updated on August 5, confirming that some accessed files contained personal or personal health information, but stated that analysis was ongoing and that it was not yet determined who needed to be notified. The hacker group ShinyHunters claimed to have stolen over 30 million customer records, including over one million social security numbers and 7.5 million dates of birth. More concerningly, they claimed to include over 22 million customer notes containing confidential medical dialogues and health information, and over 20 million medical order records containing patient IDs, prescription types, and order dates. The group publicly threatened on the dark web, claiming Abbott failed to pay a ransom. Currently, Abbott has not disclosed how the data was stolen via a voice phishing (vishing) attack, nor the duration of the intruders' system access. A large volume of affected personal data has been leaked, posing extremely high risk.",
    tags_en: ["Abbott", "ShinyHunters", "Data Leak", "Personal Health Information", "vishing", "Healthcare Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/07/shinyhunters-called-cancer-diagnostics-biz-and-tricked-staffers-into-giving-them-access-now-theyve-dumped-109m-email-addresses/5284857", lang: "EN" }
    ]
  },
  {
    id: "20260807-061",
    trackers: ["os"],
    category: "重點關注",
    title: "MIT 研究人員揭露 TONTOU 攻擊：利用中斷注入繞過 Intel 與 AMD CPU 的 Spectre 防禦機制",
    summary: "MIT CSAIL 的 Daniël Trujillo 和 Mengjia Yan 發表了一種名為 TONTOU (Time-of-Neutralization to Time-of-Use) 的新型投機執行攻擊，旨在繞過現有的 Spectre v2 防禦機制。此攻擊的核心假設是，攻擊者無法在「中和後窗口期」（post-neutralization window）內改變分支預測器狀態。然而，研究人員展示了透過「中斷注入」（interrupt injection）來重新污染分支預測器結構（如 RSB 或 BHB），從而使受保護的分支預測器誤判跳轉到洩露密鑰的 Gadget。該攻擊利用了未特權程式在系統擁有計時器時，與受害者共享核心的環境。測試結果顯示，TONTOU 攻擊在 Intel 和 AMD 系統上均可運作，甚至成功地對 AMD Zen 2 進行了端到端利用，並成功破解了 Linux 的 KASLR，甚至能定位並洩露 `/etc/shadow` 的內容。研究指出，任何在共享核心環境下，且允許計時器存取的系統（例如多租戶容器平台）都可能受到影響。Intel、Arm 和 AMD 已收到相關報告，但目前僅 AMD 承諾透過核心補丁進行修復。",
    tags: ["Spectre", "TONTOU", "中斷注入", "Intel", "AMD", "Linux", "投機執行"],
    title_en: "MIT Researchers Unveil TONTOU Attack: Bypassing Intel and AMD CPU Spectre Defenses Using Interrupt Injection",
    summary_en: "Daniël Trujillo and Mengjia Yan from MIT CSAIL published a novel speculative execution attack called TONTOU (Time-of-Neutralization to Time-of-Use), designed to bypass existing Spectre v2 defenses. The core assumption of this attack is that an attacker cannot modify the branch predictor state within the 'post-neutralization window.' However, the researchers demonstrated that by using 'interrupt injection,' they could re-pollute the branch predictor structures (such as RSB or BHB), causing the protected branch predictor to mispredict a jump to a key-leaking gadget. The attack leverages an environment where unprivileged processes share a core with the system while the system has access to a timer. Test results showed that the TONTOU attack was operational on both Intel and AMD systems, successfully achieving end-to-end exploitation on AMD Zen 2, cracking Linux KASLR, and even locating and leaking the contents of `/etc/shadow`. The research indicates that any system that allows timer access and operates in a shared core environment (such as multi-tenant container platforms) could be vulnerable. Intel, Arm, and AMD have received the relevant reports, but currently, only AMD has committed to remediation via core patches.",
    tags_en: ["Spectre", "TONTOU", "Interrupt Injection", "Intel", "AMD", "Linux", "Speculative Execution"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/07/mit-boffins-tontou-attack-slips-through-spectre-defenses-on-intel-and-amd-cpus/5284081", lang: "EN" }
    ]
  },
  {
    id: "20260807-062",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft 將逐步淘汰 Teams Live Chat 功能，轉向 Dynamics 365 解決方案",
    summary: "Microsoft 宣布將逐步停用 Teams 中的 Live Chat 功能，原定於 2025 年 10 月 5 日停止接收客戶訊息。此功能曾讓企業將聊天小工具嵌入網站，將訪客訊息導流至 Teams 支援團隊，適用於 Microsoft 365 Business Basic、Standard 和 Premium 版本。雖然現有客戶資料和 Teams 通道仍可保留，但將無法進行新的對話、升級或互動。Microsoft 指出，客戶應轉向使用 Dynamics 365 Contact Center，並結合 Live Chat 和 Copilot Studio 的聯絡中心 AI 工具來取代此功能。此舉是 Microsoft 整理和精簡 Teams 功能的最新舉動，顯示公司正將資源集中於更現代的客戶互動和溝通體驗，特別是結合 AI 的解決方案。",
    tags: ["Microsoft", "Teams", "Live Chat", "Dynamics 365", "Copilot Studio", "Microsoft 365"],
    title_en: "Microsoft to Phase Out Teams Live Chat Functionality, Directing Users to Dynamics 365 Solutions",
    summary_en: "Microsoft has announced the gradual discontinuation of the Live Chat feature within Teams, which will stop receiving customer messages on October 5, 2025. This feature previously allowed enterprises to embed chat widgets on websites, routing visitor inquiries to Teams support teams, and was available in Microsoft 365 Business Basic, Standard, and Premium versions. While existing customer data and Teams channels can still be retained, new conversations, upgrades, or interactions will no longer be possible. Microsoft advises customers to transition to using Dynamics 365 Contact Center, integrating its AI tools—Live Chat and Copilot Studio—to replace this functionality. This move is part of Microsoft's ongoing effort to streamline and consolidate Teams features, indicating the company's focus on modernizing customer interaction and communication experiences, particularly through AI-integrated solutions.",
    tags_en: ["Microsoft", "Teams", "Live Chat", "Dynamics 365", "Copilot Studio", "Microsoft 365"],
    sources: [
      { name: "The Register", url: "https://theregister.com/applications/2026/08/07/microsoft-tosses-teams-live-chat-into-its-feature-graveyard/5284634", lang: "EN" }
    ]
  },
  {
    id: "20260807-063",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "IEH Corporation 遭釣魚攻擊，M365 帳號外洩，涉及國防與航空航太技術資訊",
    summary: "美國國防與航空航太供應商 IEH Corporation 在向證券交易委員會（SEC）提交的 8-K 表格中披露，公司遭遇了釣魚攻擊。一名員工上當，透過一個偽造的 Microsoft 共享連結登入頁面，導致攻擊者竊取了其 M365 帳號憑證。攻擊者透過這些憑證進入了 IEH 的 M365 環境，理論上可存取包含電子郵件、附件、客戶通訊、採購訂單、工程文件，甚至潛在的出口管制技術資訊等內容。IEH 於 8 月 4 日發現了入侵，並已立即採取措施，包括停用惡意郵箱規則、保留證據並加強帳號安全控制。雖然公司目前尚未發現資訊被複製或外洩的證據，但由於 M365 帳號被盜用可能用於監控通訊、冒充員工或準備後續攻擊，因此公司持續進行調查，以評估潛在的重大影響。",
    tags: ["IEH Corporation", "Microsoft 365", "釣魚攻擊", "M365", "國防供應鏈", "SEC"],
    title_en: "IEH Corporation Suffers Phishing Attack, M365 Accounts Compromised, Affecting Defense and Aerospace Technology Information",
    summary_en: "U.S. defense and aerospace supplier IEH Corporation disclosed in an 8-K filing with the Securities and Exchange Commission (SEC) that it was the victim of a phishing attack. An employee fell for the attack, logging in through a fraudulent Microsoft shared link page, which allowed attackers to steal the employee's M365 account credentials. Using these credentials, the attackers gained access to IEH's M365 environment, theoretically allowing access to content including emails, attachments, client communications, procurement orders, and even sensitive export-controlled technology information. IEH discovered the intrusion on August 4th and immediately took action, including disabling malicious mailbox rules, preserving evidence, and strengthening account security controls. Although the company has not yet found evidence that information was copied or leaked, due to the potential for the compromised M365 accounts to be used for communication monitoring, employee impersonation, or preparation for further attacks, the company is continuing its investigation to assess potential material impact.",
    tags_en: ["IEH Corporation", "Microsoft 365", "Phishing Attack", "M365", "Defense Supply Chain", "SEC"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/07/ieh-corp-says-phished-staffer-opened-gates-to-company-m365/5284523", lang: "EN" }
    ]
  },
  {
    id: "20260807-064",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "美國醫療軟體供應商 UTS 遭駭，380 萬人敏感健康資料外洩",
    summary: "美國一家醫療軟體供應商 Unlimited Technology Systems (UTS) 承認，其系統可能遭到駭客入侵，導致超過 380 萬名個人的敏感健康資料外洩。此次事件發生於去年 10 月，駭客在 2025 年 10 月 5 日至 10 日期間，從 UTS 的商業資料中心竊取了資料。受影響的資料類型極為廣泛，包括姓名、社會安全號碼、出生日期、電子郵件、電話號碼等個人身份資訊，以及保單號碼、理賠資訊、病患餘額、診斷紀錄等醫療與保險資料。此外，資料還可能包含駕照和政府身份證件的掃描件。雖然 UTS 表示資料中不包含完整的病歷、信用卡號碼或銀行帳戶詳細資訊，但這次的洩漏規模使其成為今年報告給美國衛生及公共服務部 (HHS) 的最大醫療資料外洩事件。UTS 已聘請鑑識安全公司並通知執法機構，並向受影響的個人提供為期 24 個月的信用監控和身份保護服務。",
    tags: ["Unlimited Technology Systems", "UTS", "醫療資料外洩", "數據安全", "美國醫療產業", "HHS"],
    title_en: "U.S. Medical Software Vendor UTS Breached, Exposing Sensitive Health Data of 3.8 Million People",
    summary_en: "Unlimited Technology Systems (UTS), a U.S. medical software vendor, has acknowledged that its systems may have been compromised by hackers, leading to the exposure of sensitive health data belonging to over 3.8 million individuals. The incident occurred last October, during which hackers stole data from UTS's commercial data center between October 5 and October 10, 2025. The affected data types are extremely broad, including personal identifying information such as names, social security numbers, dates of birth, emails, and phone numbers, as well as medical and insurance data like policy numbers, claims information, patient balances, and diagnostic records. Furthermore, the data may also contain scanned copies of driver's licenses and government identification documents. Although UTS stated that the data does not include complete medical records, credit card numbers, or bank account details, the sheer scale of this leak makes it the largest medical data breach reported to the U.S. Department of Health and Human Services (HHS) this year. UTS has hired a forensic security firm, notified law enforcement agencies, and offered affected individuals two years of credit monitoring and identity protection services.",
    tags_en: ["Unlimited Technology Systems", "UTS", "Medical Data Breach", "Data Security", "U.S. Healthcare Industry", "HHS"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/07/intrusion-at-us-healthcare-software-provider-puts-38m-peoples-data-at-risk/5284609", lang: "EN" }
    ]
  },
  {
    id: "20260807-065",
    trackers: ["os"],
    category: "重點關注",
    title: "前美國國家網路主任警告：AI自主性與持久性構成巨大威脅，需重新定義安全規則",
    summary: "前美國國家網路主任 Chris Inglis 在 Black Hat 安全會議上指出，當前 AI 模型展現出高度的自主性（autonomy）和持久性（persistence），構成對未受保護系統的巨大威脅。他警告，AI 不僅能選擇行動的目標和方式，甚至可能採取在人類法律框架下屬於非法行為的行動，例如偽造身份或在開源資料庫中植入惡意程式碼。Inglis 引用了艾沙莫夫（Isaac Asimov）的機器人三定律，主張 AI 的設計應優先考慮「不傷害人類」的原則，其次是「服從人類指令」，最後是「保護人類」。然而，他同時指出，AI 模型的行為無法完全硬編碼（hardwire）規則，開發者必須在高度受控的沙盒環境中進行嚴格測試，並始終保持人類對 AI 行為的最終責任。他強調，人類必須充分了解授予 AI 的權限範圍和預期的後端性能，否則將會面臨意料之外的風險。",
    tags: ["AI 模型", "自主性", "Chris Inglis", "Black Hat", "AI 安全", "Isaac Asimov"],
    title_en: "Former US National Cyber Director Warns: AI Autonomy and Persistence Pose Huge Threat, Requiring Redefinition of Security Rules",
    summary_en: "Former US National Cyber Director Chris Inglis stated at the Black Hat conference that current AI models exhibit high levels of autonomy and persistence, posing a significant threat to unprotected systems. He warned that AI can not only select the goals and methods of its actions but may also take actions that would be illegal under human legal frameworks, such as identity spoofing or injecting malicious code into open-source repositories. Inglis referenced Isaac Asimov's Three Laws of Robotics, arguing that AI design should prioritize the principle of 'do no harm to humanity,' followed by 'obey human instructions,' and finally 'protect humanity.' However, he simultaneously pointed out that AI model behavior cannot be completely hardwired with rules; developers must conduct rigorous testing in highly controlled sandbox environments and always maintain ultimate human accountability for AI actions. He emphasized that humans must fully understand the scope of authority granted to AI and the expected backend performance, otherwise, they will face unforeseen risks.",
    tags_en: ["AI Models", "Autonomy", "Chris Inglis", "Black Hat", "AI Security", "Isaac Asimov"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/07/asimov-was-right-about-rules-for-robots-says-ex-us-cyber-director/5284397", lang: "EN" }
    ]
  },
  {
    id: "20260807-066",
    trackers: ["os"],
    category: "重點關注",
    title: "中國網信辦對 Palo Alto Networks 產品進行安全審查，引發地緣科技供應鏈擔憂",
    summary: "中國網信辦（CAC）宣布對 Palo Alto Networks 的產品進行安全審查，聲稱此舉是為了「確保關鍵資訊基礎設施的安全穩定運營，預防網路安全風險與漏洞，並維護國家安全」。Palo Alto Networks 方面發布聲明，表示其全球營運仍維持最高安全標準，且目前對其在該地區的客戶支援和產品交付能力沒有影響。此事件與中國 2023 年對記憶體製造商 Micron 產品進行的調查有相似之處。CAC 在宣布調查後數週才公佈結果，並決定將 Micron 產品列為關鍵基礎設施運營商不可接受的安全風險，實質上禁售，導致 Micron 停止在中國銷售資料中心和伺服器產品。雖然 Palo Alto Networks 未公開各國營收數據，但此類地緣政治的審查行動，顯示出中國在關鍵技術領域對外資產品的嚴格監管趨勢，對全球網路安全供應鏈構成重大不確定性。",
    tags: ["Palo Alto Networks", "中國網信辦", "地緣政治", "網路安全", "供應鏈風險", "Micron"],
    title_en: "China's CAC Initiates Security Review of Palo Alto Networks Products, Raising Geopolitical Tech Supply Chain Concerns",
    summary_en: "The Cyberspace Administration of China (CAC) announced a security review of Palo Alto Networks' products, stating the measure is intended to \"ensure the secure and stable operation of critical information infrastructure, prevent cybersecurity risks and vulnerabilities, and maintain national security.\" Palo Alto Networks issued a statement asserting that its global operations maintain the highest security standards and that the review does not affect its customer support or product delivery capabilities in the region. This incident bears similarities to China's 2023 investigation into Micron products. After announcing the investigation, the CAC published its findings weeks later, deciding to list Micron products as an unacceptable security risk for critical infrastructure operators, effectively banning their sale. This forced Micron to halt the sale of data center and server products in China. Although Palo Alto Networks has not disclosed its revenue data by country, such geopolitical review actions highlight China's trend toward strict regulation of foreign products in key technology sectors, posing significant uncertainty to the global cybersecurity supply chain.",
    tags_en: ["Palo Alto Networks", "CAC", "Geopolitics", "Cybersecurity", "Supply Chain Risk", "Micron"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/07/china-launches-mysterious-probe-into-security-of-palo-alto-networks-products/5284453", lang: "EN" }
    ]
  },
  {
    id: "20260807-067",
    trackers: ["os"],
    category: "重點關注",
    title: "Cloudflare高層預測：人工網路流量將被AI驅動的機器流量超越，人類將成「四捨五入的誤差」",
    summary: "Cloudflare執行長Thomas Seifert在第二季財報電話會議上，針對網路流量趨勢進行了預測。他指出，隨著AI的發展，機器生成（non-human）的網路流量將會大幅增長，預計五年內，機器流量的規模將達到人類流量的1,000倍。Seifert強調，這種增長並非人類流量下降，而是機器流量增長的速度極快。他認為，這種流量爆炸式增長也將帶來更多安全威脅，並暗示Cloudflare的服務能提供更高的效率。此外，Cloudflare CEO Matthew Prince也藉此機會批評傳統的雲端服務提供商（hyperscalers），指出他們僅銷售「商品化的運算能力」，而Cloudflare則專注於提供「實際完成的工作」，並堅持發展Serverless等高效率服務模式。",
    tags: ["Cloudflare", "AI", "網路流量", "Serverless", "Matthew Prince", "Thomas Seifert"],
    title_en: "Cloudflare Executive Forecast: AI-Driven Machine Traffic Will Surpass Human Network Traffic, Making Humans 'Rounding Errors'",
    summary_en: "During the second-quarter earnings call, Cloudflare CEO Thomas Seifert provided a forecast on network traffic trends. He pointed out that with the development of AI, machine-generated (non-human) network traffic will increase significantly, projecting that within five years, the volume of machine traffic will reach 1,000 times that of human traffic. Seifert emphasized that this growth does not imply a decline in human traffic, but rather an extremely rapid increase in machine traffic. He believes this explosive growth in traffic will also introduce more security threats, subtly suggesting that Cloudflare's services can offer greater efficiency. Furthermore, Cloudflare CEO Matthew Prince used the opportunity to criticize traditional cloud service providers (hyperscalers), arguing that they merely sell 'commodity compute capacity,' while Cloudflare focuses on delivering 'actual completed work,' maintaining its commitment to developing high-efficiency service models like Serverless.",
    tags_en: ["Cloudflare", "AI", "Network Traffic", "Serverless", "Matthew Prince", "Thomas Seifert"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/08/07/humans-will-be-a-rounding-error-on-the-internet-says-cloudflare-exec/5284429", lang: "EN" }
    ]
  },
  {
    id: "20260807-068",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Element Call 應用程式：透過配置 PostHog 服務時，可能洩露用戶完整網址及加密密碼",
    summary: "Matrix 視訊會議應用程式 Element Call 的特定版本（0.5.17 至 0.19.3）存在資料分析風險。當用戶在 `config.json` 中配置 `posthog` key，或透過 `posthogApiHost` 和 `posthogApiKey` URL 參數啟用分析功能時，應用程式會將分析數據傳送到 PostHog 伺服器。研究發現，此分析數據中的幾個欄位（包括 `$initial_person_info`、`$session_entry_url` 和 `$current_url`）會包含用戶造訪頁面的完整 URL，甚至包含 URL 的片段（fragment）。這意味著使用獨立 Element Call ‘SPA’ 實例的用戶（例如 https://call.element.io），可能會將包含加密密碼的完整通話網址洩露給配置了 PostHog 分析的伺服器，從而可能危及通話的機密性。雖然嵌入式套件也存在此問題，但對於使用此套件的應用程式（如 Element Web、Element Desktop、Element X iOS 和 Element X Android）而言，實際影響較小，因為這些應用程式透過 Matrix 分發加密金鑰，而非將密碼編碼在 URL 中。此問題已在 Element Call 0.19.4 版本中修復。用戶可透過 Element Call 設定中的「Feedback」分頁關閉分析功能，或為未來通話建立新連結。管理員若作為獨立應用程式託管 Element Call，可透過移除部署 `config.json` 中的 `posthog` key 來完全禁用 PostHog 分析。",
    tags: ["Element Call", "PostHog", "Matrix", "資料洩露", "應用程式安全", "CVE-2026-48007"],
    title_en: "Element Call Application: Potential Leakage of Full User URLs and Encrypted Passwords When Configuring PostHog Service",
    summary_en: "Specific versions of the Matrix video conferencing application Element Call (0.5.17 through 0.19.3) contain a data analysis risk. When users configure the `posthog` key in `config.json`, or enable analytics via the `posthogApiHost` and `posthogApiKey` URL parameters, the application transmits analysis data to the PostHog server. Research found that several fields within this analysis data (including `$initial_person_info`, `$session_entry_url`, and `$current_url`) contain the full URL of the page the user visited, including URL fragments. This means that users utilizing a standalone Element Call 'SPA' instance (e.g., https://call.element.io) could leak the full call URL, potentially containing an encrypted password, to the server configured with PostHog analytics, thereby compromising call confidentiality. Although the embedded package also has this issue, the actual impact is considered minor for applications using this package (such as Element Web, Element Desktop, Element X iOS, and Element X Android), because these applications distribute encrypted keys via Matrix rather than encoding passwords in the URL. This issue has been fixed in Element Call version 0.19.4. Users can disable the analytics feature via the 'Feedback' tab in Element Call settings, or by creating a new link for future calls. Administrators hosting Element Call as a standalone application can completely disable PostHog analytics by removing the `posthog` key from the deployed `config.json`.",
    tags_en: ["Element Call", "PostHog", "Matrix", "Data Leakage", "Application Security", "CVE-2026-48007"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-48007", lang: "EN" }
    ]
  }
];
