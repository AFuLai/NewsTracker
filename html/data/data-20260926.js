// data-20260926.js — 2026-09-26
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-26"] = [
  {
    id: "20260926-13646",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6519-1 相關漏洞，強化系統安全性",
    summary: "本安全公告（DSA-6519-1）針對 Debian 系統發布，旨在修補一個或多個潛在的安全漏洞。雖然原文僅提供了一個安全追蹤連結，但根據 Debian 安全公告的慣例，此更新通常涉及核心元件或系統層級的修補，以應對已知的安全風險。建議所有使用 Debian 系統的用戶應立即更新系統至包含此修補的最新版本，以確保系統的完整性和安全性。用戶應透過標準的系統更新機制（如 `apt update` 和 `apt upgrade`）執行修補，避免使用未經證實的來源。由於原文未提供具體的漏洞細節、CVSS 分數或受影響產品列表，因此無法提供更深入的技術分析，但修補是必要的安全措施。",
    tags: ["Debian", "DSA-6519-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6519-1 Vulnerability to Enhance System Security",
    summary_en: "This security advisory (DSA-6519-1) is issued for Debian systems and aims to patch one or more potential security vulnerabilities. Although the original text only provides a security tracking link, based on Debian security advisory conventions, this update typically involves core component or system-level patches to address known security risks. All users running Debian systems are advised to immediately update their systems to the latest version containing this patch to ensure system integrity and security. Users should execute the patch through standard system update mechanisms (such as `apt update` and `apt upgrade`), and avoid using unverified sources. Since the original text does not provide specific vulnerability details, CVSS scores, or a list of affected products, a deeper technical analysis cannot be provided, but the patch is a necessary security measure.",
    tags_en: ["Debian", "DSA-6519-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00432.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13647",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6518-1：修補 OpenSSH 服務中的潛在漏洞",
    summary: "Debian 發布安全公告 DSA-6518-1，修補了 OpenSSH 服務中一個潛在的安全漏洞。此漏洞的具體技術細節和CVSS評分未在本次公告中詳細說明，但其修補旨在加強 OpenSSH 的安全性。受影響的產品為使用 Debian 系統並安裝 OpenSSH 服務的用戶。建議所有系統管理員應立即升級 OpenSSH 套件至 Debian 提供的修補版本，以防止潛在的未經授權存取或執行風險。由於這屬於核心系統元件的修補，建議用戶應遵循標準的系統更新流程，確保系統的完整性和安全性。",
    tags: ["Debian", "OpenSSH", "DSA-6518-1", "Linux 核心", "安全更新"],
    title_en: "Debian Releases Security Advisory DSA-6518-1: Patching Potential Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued security advisory DSA-6518-1, addressing a potential security vulnerability in the OpenSSH service. While the specific technical details and CVSS score for this vulnerability are not elaborated in this advisory, the patch aims to enhance the overall security of OpenSSH. Affected users are those running Debian systems and utilizing the OpenSSH service. System administrators are strongly advised to immediately upgrade the OpenSSH package to the patched version provided by Debian to prevent potential risks of unauthorized access or execution. As this patch pertains to a core system component, users should follow standard system update procedures to ensure system integrity and security.",
    tags_en: ["Debian", "OpenSSH", "DSA-6518-1", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00431.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13648",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6517-1 相關漏洞，強化系統安全性",
    summary: "Debian 發布了安全公告，修補了與 DSA-6517-1 相關的系統漏洞。雖然原文僅提供了一個安全追蹤連結，但根據 Debian 安全公告的慣例，此類更新通常針對核心元件或系統層級的函式庫進行修補，以防止潛在的系統層面攻擊。建議所有使用 Debian 系統的用戶應立即更新系統，以確保系統的穩定性和安全性。用戶應透過標準的系統更新機制（如 apt update/upgrade）來獲取修補程式。由於原文未提供具體的漏洞細節、CVSS 分數或受影響版本範圍，建議用戶應以 Debian 官方公告為準，並遵循官方指引進行修補。",
    tags: ["Debian", "DSA-6517-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patches DSA-6517-1 Vulnerability to Enhance System Security",
    summary_en: "Debian has issued a security advisory patching a system vulnerability related to DSA-6517-1. Although the original text only provided a security tracking link, based on Debian's security advisory conventions, such updates typically target core components or system-level libraries to prevent potential system-level attacks. All users running Debian systems are advised to update immediately to ensure system stability and security. Users should obtain the patches through standard system update mechanisms (such as apt update/upgrade). Since the original text did not provide specific vulnerability details, CVSS scores, or affected version ranges, users are advised to rely on the official Debian announcement and follow official guidelines for patching.",
    tags_en: ["Debian", "DSA-6517-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00430.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13661",
    trackers: ["os"],
    category: "Linux",
    title: "GDB 互動式除錯器發布 18.1 版本，強化 Windows 支援與環境變數管理",
    summary: "GNU Debugger (GDB) 釋出 18.1 版本，作為一個用於 Ada、C、C++、Fortran、Go、Rust 等多種語言的源級除錯器。本次更新主要著重於提升跨平台除錯能力與使用者體驗。在 Windows 平台方面，新增了 Non-stop mode 支援（需 Windows 10 或更高版本）、Scheduler-locking 功能，並支援原生 Thread Local Storage (TLS) 變數。此外，GDB 在 Windows Terminal 上支援了真彩色 24-bit 顏色，並改善了檔案路徑的顯示一致性。功能層面，新增了 `set/show/unset local-environment` 等指令，用於管理子程序（subprocess）的環境變數，並引入了 `--no-escape-args` 選項，改善了參數傳遞的可靠性。技術上，GDB 提升了對核心檔案（core file）和 inferior 參數的處理能力，並增加了對 AArch64 平台和 libipt v2.2 事件的支援。開發者應注意更新至 GDB 18.1 以利用這些重要的除錯功能增強。",
    tags: ["GDB", "GNU Debugger", "Windows", "除錯器", "AArch64", "環境變數"],
    title_en: "GDB Interactive Debugger Releases 18.1, Enhancing Windows Support and Environment Variable Management",
    summary_en: "GNU Debugger (GDB) has released version 18.1, a source-level debugger for multiple languages including Ada, C, C++, Fortran, Go, and Rust. This update primarily focuses on improving cross-platform debugging capabilities and user experience. For the Windows platform, new features include Non-stop mode support (requires Windows 10 or later), Scheduler-locking functionality, and native support for Thread Local Storage (TLS) variables. Furthermore, GDB now supports true 24-bit color in Windows Terminal and improves the consistency of file path display. Functionally, new commands such as `set/show/unset local-environment` have been added to manage environment variables for subprocesses, and the `--no-escape-args` option has been introduced to improve parameter passing reliability. Technically, GDB has enhanced its handling of core files and inferior parameters, and added support for AArch64 platform and libipt v2.2 events. Developers are advised to update to GDB 18.1 to utilize these important debugging feature enhancements.",
    tags_en: ["GDB", "GNU Debugger", "Windows", "Debugger", "AArch64", "Environment Variables"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1096897", lang: "EN" }
    ]
  },
  {
    id: "20260926-13691",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心記憶體管理優化：7.4 版本修補預充填 Sheaves 資源，大幅提升效能",
    summary: "本篇報導介紹一項針對 Linux 核心記憶體管理系統的優化修補，該修補旨在改善「從 Barn 預充填 Sheaves」的機制。Sheaves 是 Linux 核心記憶體分配器用於每個 CPU 的陣列式快取層。優化點在於當預充填 API 重新填充非滿 Sheaf 時，原機制會忽略 Barn 中的完整 Sheaves，導致 Barn 的完整列表很快飽和。修補後，系統允許 Sheaf 從 Barn 優先重新填充，並引入了「部分 Sheaf」來儲存剩餘物件。這不僅為未來透過 kfree_rcu() 釋放的 Sheaf 留出了空間，也讓 Sheaf 重新填充的過程更高效。測試結果顯示，此修補能使 will-it-scale mmap1 測試整體提升 24%，且 barn_get 和 barn_put 等指標有極高的百分比提升。此修補預計將在 Linux 7.4 的合併窗口（late October）納入。",
    tags: ["Linux 7.4", "記憶體管理", "Sheaves", "Linux 核心", "mmap1", "Barn"],
    title_en: "Linux Kernel Memory Management Optimization: 7.4 Version Patches Sheaves Resource Pre-filling, Significantly Boosting Performance",
    summary_en: "This report introduces an optimization patch for the Linux kernel memory management system, aimed at improving the 'pre-filling Sheaves from Barn' mechanism. Sheaves are an array-based cache layer used by the Linux kernel memory allocator for each CPU. The optimization addresses the issue that the original mechanism ignored complete Sheaves in the Barn when the pre-filling API refilled non-full Sheaves, causing the Barn's complete list to saturate quickly. After the patch, the system allows Sheaves to prioritize refilling from the Barn and introduces 'partial Sheaves' to store remaining objects. This not only reserves space for Sheaves released later via kfree_rcu() but also makes the Sheaf refilling process more efficient. Test results show that this patch improves the overall will-it-scale mmap1 test by 24%, and metrics such as barn_get and barn_put show extremely high percentage increases. This patch is expected to be included in the Linux 7.4 merge window (late October).",
    tags_en: ["Linux 7.4", "Memory Management", "Sheaves", "Linux Kernel", "mmap1", "Barn"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.4-Refill-Sheaves-Barn", lang: "EN" }
    ]
  },
  {
    id: "20260926-13692",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc5 DRM 子系統更新：新增電源保護機制與 Nouveau 驅動程式修復",
    summary: "本次 Linux 7.3-rc5 版本發布前，Direct Rendering Manager (DRM) 子系統進行了大量修復。DRM 共同維護者 David Airlie 指出，許多修復是「AI 啟發的錯誤處理路徑、記憶體洩漏和使用後釋放」等問題。其中，Intel Xe 驅動程式新增了電源保護（power brake）作為熱節流原因，適用於即將推出的 Crescent Island AI 加速器，該機制透過 Xe 驅動程式傳遞 Crescent Island 的「PWRBRK」硬體位元。Nouveau 開源 NVIDIA 驅動程式也獲得了大量修復，特別是從使用 NVIDIA R535 韌體二進位檔轉為 R570 韌體後出現的暫停/恢復（suspend/resume）回歸問題，本次更新已修復了使用新版 NVIDIA 韌體時的相關問題，並修復了 vRAM pinning 和其他驅動程式錯誤。這些修復對於維持系統穩定性至關重要。",
    tags: ["Linux 7.3", "DRM", "Intel Xe", "Nouveau", "Crescent Island", "Linux 核心"],
    title_en: "Linux 7.3-rc5 DRM Subsystem Update: Adds Power Protection Mechanism and Nouveau Driver Fixes",
    summary_en: "Prior to the release of Linux 7.3-rc5, the Direct Rendering Manager (DRM) subsystem underwent extensive fixes. DRM maintainer David Airlie noted that many fixes address issues such as \"AI-inspired error handling paths, memory leaks, and use-after-free.\" Notably, the Intel Xe driver introduced a power brake mechanism for thermal throttling reasons, applicable to the upcoming Crescent Island AI accelerator. This mechanism transmits the Crescent Island's \"PWRBRK\" hardware bit via the Xe driver. The open-source NVIDIA Nouveau driver also received numerous fixes, particularly addressing suspend/resume regression issues that occurred when transitioning from the NVIDIA R535 firmware binary to R570 firmware. This update resolves related issues when using the new NVIDIA firmware and fixes vRAM pinning and other driver bugs. These fixes are crucial for maintaining system stability.",
    tags_en: ["Linux 7.3", "DRM", "Intel Xe", "Nouveau", "Crescent Island", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc5-DRM", lang: "EN" }
    ]
  },
  {
    id: "20260926-13693",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 新擴充功能 Wisp 讓 Btrfs 快照管理更直觀化",
    summary: "Wisp 是一款全新的 GNOME Shell 擴充功能，旨在為使用者提供一個圖形介面來管理 Btrfs 文件系統的快照。它透過與 Snapper 工具整合，讓原本需要透過命令列操作的 Btrfs 快照管理任務變得更加容易。使用 Wisp，使用者可以在現代 GNOME 桌面環境中，輕鬆地查看不同快照間的文件變更內容、調整快照保留策略、手動建立新的文件系統快照，以及執行其他相關的維護任務。這對於不習慣使用命令列介面來管理基於 Btrfs 的 Linux 系統的使用者來說，提供了極大的便利性。Wisp 可透過 extensions.gnome.org 和 GitHub 下載。",
    tags: ["GNOME Shell", "Wisp", "Btrfs", "快照", "Snapper", "Linux"],
    title_en: "New GNOME Extension Wisp Makes Btrfs Snapshot Management More Intuitive",
    summary_en: "Wisp is a brand-new GNOME Shell extension designed to provide users with a graphical interface for managing Btrfs file system snapshots. By integrating with the Snapper tool, it simplifies Btrfs snapshot management tasks that previously required command-line operations. With Wisp, users can easily view file changes between different snapshots, adjust snapshot retention policies, manually create new file system snapshots, and perform other related maintenance tasks within the modern GNOME desktop environment. This offers significant convenience for users who are not accustomed to using command-line interfaces to manage Btrfs-based Linux systems. Wisp is available for download via extensions.gnome.org and GitHub.",
    tags_en: ["GNOME Shell", "Wisp", "Btrfs", "Snapshot", "Snapper", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Wisp-Btrfs-Snapshots", lang: "EN" }
    ]
  },
  {
    id: "20260926-13694",
    trackers: ["os"],
    category: "Linux",
    title: "AMD AMDXDNA Linux 驅動程式升級，強化對 NPU3 核心硬體的支援與電源管理",
    summary: "AMD 正在持續優化 AMDXDNA 開源 Linux 核心加速器驅動程式，以更好地支援當前世代的 NPU3 神經處理單元（Neural Processing Unit）。NPU3 是目前 AMD Ryzen AI 300 / Ryzen AI 300 PRO 系列 SoC 中採用的核心。工程師 David Zhang 透過一系列補丁，將驅動程式的執行模式從原先依賴使用者空間的門鈴映射（userspace doorbell mapping），升級為更穩健的核心模式命令提交（kernel-mode command submission, KMQ）。這項重大改進不僅提供了穩健的柵欄管理（fence management）、BO 預留鎖定和佇列生命週期處理，更實現了完整的系統休眠/恢復（suspend/resume）和運行時電源管理。此外，新的補丁集還增加了設備遙測查詢、時脈/頻率/資訊查詢等功能，全面提升了對 AIE4/NPU3 硬體的支援度。相關的最新補丁細節已發佈於 LKML。",
    tags: ["AMD", "AMDXDNA", "Linux 核心", "NPU3", "AIE4", "SoC"],
    title_en: "AMD AMDXDNA Linux Driver Upgrade Enhances Support and Power Management for NPU3 Core Hardware",
    summary_en: "AMD is continuously optimizing the AMDXDNA open-source Linux kernel accelerator driver to better support the current generation of NPU3 Neural Processing Units. NPU3 is the core utilized in the AMD Ryzen AI 300 / Ryzen AI 300 PRO series SoC. Engineer David Zhang, through a series of patches, upgraded the driver's execution mode from relying on userspace doorbell mapping to a more robust kernel-mode command submission (KMQ). This major improvement not only provides stable fence management, BO reservation locking, and queue lifecycle handling, but also enables full system suspend/resume and runtime power management. Furthermore, the new patch set adds features such as device telemetry querying, clock/frequency/information querying, comprehensively enhancing support for AIE4/NPU3 hardware. Details of the relevant latest patches have been published on LKML.",
    tags_en: ["AMD", "AMDXDNA", "Linux Kernel", "NPU3", "AIE4", "SoC"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMDXDNA-NPU3-Enhancements", lang: "EN" }
    ]
  },
  {
    id: "20260926-13695",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 進行最後階段優化，修復 UI 體驗與藍牙連線穩定性問題",
    summary: "KDE 開發團隊在舉行 KDE Akademy 大會並發布 KDE Plasma 6.8 Beta 2 版本後，仍持續進行最後一刻的介面調整與修復。Plasma 6.8 進行了多項 UI 改善，例如系統匣圖示的點擊回饋效果更佳，並在其他區域進行了細微的優化，以提升整體使用者體驗。此外，該版本修復了在從 Meta + V 彈出視窗刪除星號剪貼簿項目時可能發生的崩潰問題。在藍牙功能方面，Plasma 6.8 的設定嚮導現在能更穩定地尋找低功耗藍牙（Bluetooth Low Energy）設備，即使系統其他軟體（如 KDE Connect 或其他藍牙應用）仍在進行設備搜尋會話時也能正常運作。對於下一版本 Plasma 6.9，KRunner 搜尋功能也升級，使其能更有效地處理包含貨幣符號的貨幣轉換搜尋。",
    tags: ["KDE Plasma", "Plasma 6.8", "Linux", "UI 改善", "Bluetooth", "KRunner"],
    title_en: "KDE Plasma 6.8 Undergoes Final Polish, Fixing UI Experience and Bluetooth Connection Stability",
    summary_en: "Following the KDE Akademy conference and the release of the KDE Plasma 6.8 Beta 2 version, the KDE development team continued with final interface adjustments and fixes. Plasma 6.8 includes multiple UI improvements, such as enhanced click feedback for system tray icons, along with subtle optimizations in other areas to boost overall user experience. Furthermore, this version fixes a potential crash that could occur when deleting starred clipboard items from the Meta + V pop-up window. Regarding Bluetooth functionality, Plasma 6.8's settings wizard can now more reliably search for Bluetooth Low Energy (BLE) devices, even when other system software (such as KDE Connect or other Bluetooth applications) are actively running device search sessions. For the next version, Plasma 6.9, the KRunner search function has also been upgraded to more effectively handle currency conversion searches that include currency symbols.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "Linux", "UI Improvement", "Bluetooth", "KRunner"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Plasma-6.8-Last-Minute-UI-Fixes", lang: "EN" }
    ]
  },
  {
    id: "20260926-13759",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 新版 Outlook 將推出「發送前自動拼字檢查」功能，提升郵件撰寫準確性",
    summary: "Microsoft 宣布，新版 Outlook (New Outlook) 將在 2026 年 10 月開始引入「發送前自動拼字檢查」功能。此功能旨在解決使用者在撰寫郵件時，可能因匆忙而忘記檢查錯誤，導致發送帶有拼字或語法錯誤的問題。目前 Outlook 已透過 Microsoft Editor 提供即時的拼字和語法檢查，但新功能將在使用者點擊「發送」前介入，提醒使用者修正錯誤。\n\n此功能不會強制啟用，使用者可以在設定中自適應開啟。此外，文章也提到 Outlook Classic 將新增「使用者主動啟動的 Copilot 功能」，允許使用者在需要時，透過選取文字並選擇「解釋此內容」來觸發 Copilot，提供上下文洞察。新版 Outlook 方面，除了拼字檢查，還將獲得更接近 Outlook Classic 的主題介面，以利使用者過渡。Microsoft 預計新功能將在 2026 年 12 月中旬左右逐步推出。",
    tags: ["Microsoft", "Outlook", "New Outlook", "Copilot", "拼字檢查", "Windows"],
    title_en: "Microsoft's New Outlook to Feature 'Pre-Send Auto Spell Check' to Enhance Email Accuracy",
    summary_en: "Microsoft has announced that the New Outlook will begin introducing a 'Pre-Send Auto Spell Check' feature starting in October 2026. This feature aims to solve the problem of users forgetting to check for errors due to haste while composing emails, which can lead to sending messages with spelling or grammatical mistakes. Currently, Outlook provides real-time spell and grammar checking via Microsoft Editor, but the new feature will intervene before the user clicks 'Send,' prompting them to correct errors.\n\nThis feature will not be mandatory; users can enable it adaptively in the settings. Additionally, the article mentions that Outlook Classic will gain a 'user-initiated Copilot function,' allowing users to trigger Copilot when needed by selecting text and choosing 'Explain this content,' providing contextual insights. The New Outlook, besides the spell check, will also receive a theme interface closer to Outlook Classic to facilitate user transition. Microsoft anticipates that the new features will be rolled out gradually around mid-December 2026.",
    tags_en: ["Microsoft", "Outlook", "New Outlook", "Copilot", "Spell Check", "Windows"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/27/microsofts-new-outlook-will-stop-the-typo-you-always-spot-right-after-hitting-send", lang: "EN" }
    ]
  },
  {
    id: "20260926-13364",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Lunex Stealer 利用 AMD 驅動程式漏洞 CVE-2023-20598 進行權限提升與資訊竊取",
    summary: "安全公司 Ontinue 報告了一種名為 Psychedelic Stealer 的惡意程式，它屬於一個名為 Lunex 的惡意軟體即服務（MaaS）平台。該攻擊鏈針對使用烏克蘭語的用戶，流程包括偽造 CAPTCHA 頁面、使用 Bogus MSI 安裝程式觸發載入器 LunexLoader，並利用 BYOVD（Bring Your Own Vulnerable Driver）攻擊進行防禦規避。攻擊的核心是利用 AMD Radeon Software 的有漏洞核心模式驅動程式 `PDFWKRNL.sys`，該驅動程式易受 CVE-2023-20598 影響，從而提升權限並使安全產品處於「盲目」狀態。成功竊取範圍包括 Google Chrome、Microsoft Edge、Brave 等七個瀏覽器的憑證、會話 Cookie，以及多個硬體和瀏覽器擴充功能的加密貨幣錢包資料。此外，攻擊還建立持久性存取，包括使用註冊表 Run key 和一個名為 \"psychedelicloveUtils\" 的隱藏排程任務。該平台透過 PowerShell 腳本在受害者瀏覽器中建立 Native Messaging Host (NMH)，並注入惡意 Chrome 擴充功能，實現對用戶瀏覽活動的全面監控。修補建議是關注和修補所有核心模式驅動程式的漏洞，特別是那些可被用於 BYOVD 攻擊的組件。",
    tags: ["Lunex Stealer", "Psychedelic Stealer", "CVE-2023-20598", "AMD Radeon Software", "BYOVD", "MaaS"],
    title_en: "Lunex Stealer Exploits AMD Driver Vulnerability CVE-2023-20598 for Privilege Escalation and Information Theft",
    summary_en: "Security firm Ontinue reported a malicious program called Psychedelic Stealer, which belongs to a malicious software-as-a-service (MaaS) platform named Lunex. The attack chain targets users utilizing Ukrainian language settings. The process involves spoofing a CAPTCHA page, using a bogus MSI installer to trigger the loader LunexLoader, and employing a Bring Your Own Vulnerable Driver (BYOVD) attack for defense evasion. The core of the attack is exploiting the vulnerable kernel-mode driver `PDFWKRNL.sys` within AMD Radeon Software, which is susceptible to CVE-2023-20598. This vulnerability allows for privilege escalation and renders security products 'blind.' Successfully stolen data includes credentials and session cookies from seven browsers, such as Google Chrome, Microsoft Edge, and Brave, as well as cryptocurrency wallet data from multiple hardware and browser extensions. Furthermore, the attack establishes persistence by using a registry Run key and a hidden scheduled task named \"psychedelicloveUtils.\" The platform establishes a Native Messaging Host (NMH) within the victim's browser using PowerShell scripts and injects a malicious Chrome extension, achieving comprehensive monitoring of the user's browsing activity. The remediation advice is to monitor and patch all kernel-mode driver vulnerabilities, especially components that can be used for BYOVD attacks.",
    tags_en: ["Lunex Stealer", "Psychedelic Stealer", "CVE-2023-20598", "AMD Radeon Software", "BYOVD", "MaaS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/lunex-stealer-abuses-amd-driver-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13365",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 CVE-2026-35273 漏洞攻擊 Oracle PeopleSoft，繞過 WAF 進行遠端代碼執行",
    summary: "Google 警告，駭客群體正在大規模利用 Oracle PeopleSoft 的已知漏洞 CVE-2026-35273，這是一個可導致未經身份驗證遠端代碼執行的嚴重安全缺陷。該漏洞最初被用於學術機構，進行偵察、部署 MeshCentral 等遠端存取軟體，並透過 SSH 進行橫向移動竊取資料。最新活動顯示，攻擊者（UNC6240）修改了其攻擊程式，成功繞過了 Web 應用程式防火牆（WAF）的規則。他們透過 URL 編碼（例如使用 /%50SEMHUB/ 代替 /PSEMHUB/）來繞過基於字串的 WAF 規則，而 PeopleSoft 應用伺服器在解碼後仍會將請求導向到易受攻擊的服務。攻擊鏈包括：透過 POST 請求和序列化 Java 物件識別目標，繞過 WAF，濫用 PSEMHUB 服務中的 Java 反序列化漏洞部署 Web Shell，並使用這些 Web Shell 上傳惡意程式（如 Ple64.exe），最終竊取憑證並建立持久存取。為緩解風險，組織應立即修補 CVE-2026-35273，並考慮停用或移除 Environment Management Hub (EMHub) 服務。同時，應檢查 WebLogic 存取日誌和 PSEMHUB.war 目錄，並輪換 PeopleSoft 應用服務帳號的憑證。",
    tags: ["Oracle PeopleSoft", "CVE-2026-35273", "WAF 繞過", "Java 反序列化", "遠端代碼執行", "UNC6240"],
    title_en: "Hackers Exploit CVE-2026-35273 Vulnerability in Oracle PeopleSoft to Achieve Remote Code Execution Bypassing WAF",
    summary_en: "Google warns that hacking groups are extensively exploiting the known vulnerability CVE-2026-35273 in Oracle PeopleSoft, a critical security flaw that can lead to unauthenticated remote code execution. The vulnerability was initially used against academic institutions for reconnaissance and deploying remote access software like MeshCentral, followed by lateral movement and data theft via SSH. Recent activity shows that attackers (UNC6240) have modified their attack code to successfully bypass Web Application Firewall (WAF) rules. They achieve this by using URL encoding (e.g., using /%50SEMHUB/ instead of /PSEMHUB/) to bypass string-based WAF rules, while the PeopleSoft application server still directs the request to the vulnerable service after decoding. The attack chain involves: identifying targets via POST requests and serialized Java objects, bypassing the WAF, abusing the Java deserialization vulnerability in the PSEMHUB service to deploy a web shell, and subsequently using these web shells to upload malicious programs (such as Ple64.exe), ultimately stealing credentials and establishing persistent access. To mitigate the risk, organizations should immediately patch CVE-2026-35273 and consider disabling or removing the Environment Management Hub (EMHub) service. Furthermore, they should check WebLogic access logs and the PSEMHUB.war directory, and rotate the credentials for the PeopleSoft application service accounts.",
    tags_en: ["Oracle PeopleSoft", "CVE-2026-35273", "WAF Bypass", "Java Deserialization", "Remote Code Execution", "UNC6240"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-bypass-wafs-to-exploit-oracle.html", lang: "EN" },
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/shinyhunters-uses-waf-bypass-trick-in-oracle-peoplesoft-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260926-13367",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Elementor WordPress 外掛遭 CSRF 漏洞攻擊，可讓未登入攻擊者建立管理員帳號",
    summary: "Elementor Website Builder WordPress 外掛存在一高嚴重性（CVSS 8.8/10.0）的跨站請求偽造（CSRF）漏洞，尚未分配 CVE 編號。此漏洞僅影響 Elementor 外掛的 4.3.0 和 4.3.1 版本，且該外掛已安裝於數百萬個 WordPress 網站。攻擊者只需透過一個惡意連結，即可誘騙已登入的 WordPress 使用者執行任何其帳號有權限的 REST API 動作，甚至在未經任何前提條件（如 JavaScript 或特定網頁）的情況下發動攻擊。漏洞的根源在於 Editor Events 模組在處理包含特定字串 \"elementor/v1/events/\" 的 REST API 請求時，跳過了 CSRF 保護機制。攻擊者可利用此漏洞，透過偽造的 REST API 請求，在 `/wp/v2/users` 端點建立新的管理員帳號。此問題已在 Elementor 外掛 4.3.2 版本中修復。建議所有用戶應立即升級至最新版本，以防範潛在的資安威脅。",
    tags: ["Elementor", "WordPress", "CSRF", "REST API", "CVE", "資安漏洞"],
    title_en: "Elementor WordPress Plugin Vulnerable to CSRF Attack, Allowing Unauthenticated Users to Create Administrator Accounts",
    summary_en: "The Elementor Website Builder WordPress plugin contains a high-severity (CVSS 8.8/10.0) Cross-Site Request Forgery (CSRF) vulnerability, for which no CVE ID has been assigned. This vulnerability affects Elementor plugin versions 4.3.0 and 4.3.1, and the plugin is installed on millions of WordPress websites. An attacker can trick an authenticated WordPress user into executing any REST API action for which their account has permissions, even by simply clicking a malicious link, without requiring any prerequisite conditions (such as JavaScript or a specific webpage). The root cause of the vulnerability is that the Editor Events module bypasses the CSRF protection mechanism when handling REST API requests containing the specific string \"elementor/v1/events/\". An attacker can exploit this vulnerability to create new administrator accounts via a forged REST API request to the `/wp/v2/users` endpoint. This issue has been patched in Elementor plugin version 4.3.2. All users are advised to immediately upgrade to the latest version to prevent potential security threats.",
    tags_en: ["Elementor", "WordPress", "CSRF", "REST API", "CVE", "Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/elementor-csrf-flaw-lets-attackers-take.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13368",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將兩項漏洞列入KEV：Microsoft SharePoint及Mikrotik RouterOS面臨遠端代碼執行風險",
    summary: "美國網路安全基礎設施安全局（CISA）於近期將兩項已證實被積極利用的漏洞納入其已知漏洞（KEV）目錄，分別影響Microsoft SharePoint和Mikrotik RouterOS。第一個漏洞為CVE-2026-65660，這是一個影響SharePoint的程式碼注入漏洞，允許授權攻擊者透過網路執行程式碼。第二個漏洞為CVE-2026-67279，這是一個Mikrotik RouterOS的行為工作流程不當強制執行漏洞，可能讓未經身份驗證的客戶端建立會話通道並發送執行請求。安全機構指出，攻擊者將CVE-2026-67279與CVE-2026-86060（一個登入流程的參數注入缺陷）串聯成名為MikroTrick的攻擊鏈。此攻擊鏈可讓攻擊者無需密碼即可完全取得網際網路暴露的路由器管理控制權。專家分析指出，MikroTrick利用了兩個不同信任邊界上的缺陷，使原本僅供信任本地呼叫者的功能，成為了遠端攻擊面。建議受影響組織應立即修補，特別是針對RouterOS的修補，以防止未經授權的遠端管理接管。",
    tags: ["CISA", "KEV", "CVE-2026-65660", "CVE-2026-67279", "Microsoft SharePoint", "Mikrotik RouterOS", "遠端代碼執行"],
    title_en: "CISA Lists Two Vulnerabilities in KEV: Microsoft SharePoint and Mikrotik RouterOS Face Remote Code Execution Risks",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) recently added two vulnerabilities, which have been actively exploited, to its Known Exploited Vulnerabilities (KEV) catalog. These affect Microsoft SharePoint and Mikrotik RouterOS, respectively. The first vulnerability is CVE-2026-65660, a code injection flaw affecting SharePoint that allows an authenticated attacker to execute code over the network. The second vulnerability is CVE-2026-67279, a behavioral workflow improper enforcement flaw in Mikrotik RouterOS that could allow an unauthenticated client to establish a session channel and send execution requests. Security agencies point out that attackers are chaining CVE-2026-67279 with CVE-2026-86060 (a parameter injection defect in a login process) to create an attack chain dubbed MikroTrick. This attack chain allows an attacker to gain full administrative control of internet-exposed routers without needing a password. Experts analyze that MikroTrick exploits flaws across two different trust boundaries, turning a function originally intended only for trusted local callers into a remote attack surface. Affected organizations are advised to patch immediately, especially the patches for RouterOS, to prevent unauthorized remote management takeover.",
    tags_en: ["CISA", "KEV", "CVE-2026-65660", "CVE-2026-67279", "Microsoft SharePoint", "Mikrotik RouterOS", "Remote Code Execution"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/sharepoint-rce-and-mikrotik-routeros.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13369",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Kiteworks 建議客戶週末停機，預防潛在網路攻擊威脅",
    summary: "資安公司 Kiteworks (原名 Accellion) 因收到來自聯邦情報機構的可靠威脅情報，警告其系統可能面臨即將發生的網路攻擊，因此建議客戶採取預防措施，在週末期間關閉系統。公司強調，此建議是預防性的，而非針對已確認的入侵事件。Kiteworks 表示，目前尚未發現客戶系統遭到入侵的證據。公司已指出所有已知漏洞已在最新的軟體版本 9.5.1 中修補，並建議客戶應用此補丁以確保最佳保護。此外，Kiteworks 提醒客戶，其旗下其他子公司，包括 Zivver、DRACOON 等，並未受影響。在建議停機的特定時間段結束後，Kiteworks 已發布更新，確認所有系統已恢復正常運作。",
    tags: ["Kiteworks", "Accellion", "網路攻擊", "預防性停機", "資安威脅情報"],
    title_en: "Kiteworks Advises Customers to Schedule Weekend Downtime to Prevent Potential Cyber Threats",
    summary_en: "Cybersecurity firm Kiteworks (formerly Accellion) issued a warning, based on reliable threat intelligence received from a federal intelligence agency, that its systems might face imminent cyber attacks. Consequently, the company advised customers to take preventive measures by taking their systems offline over the weekend. Kiteworks emphasized that this recommendation was proactive and not related to any confirmed intrusion event. The company stated that there was currently no evidence of client systems having been compromised. Kiteworks noted that all known vulnerabilities have been patched in the latest software version 9.5.1, and advised customers to apply this patch to ensure optimal protection. Furthermore, Kiteworks reminded customers that its other subsidiaries, including Zivver and DRACOON, were unaffected. After the specified downtime period, Kiteworks issued an update confirming that all systems had returned to normal operation.",
    tags_en: ["Kiteworks", "Accellion", "Cyber Attack", "Preventive Downtime", "Cyber Threat Intelligence"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/kiteworks-urges-customers-to-shut-down.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13546",
    trackers: ["os"],
    category: "Apple",
    title: "新獨立應用程式 QuillCue 推出，協助使用者管理 Siri AI 提示詞",
    summary: "隨著 iOS 27 搭載的 Siri AI 功能逐漸普及，雖然該功能具有革命性，但在實際使用中仍存在一些不足。QuillCue 這款獨立開發的應用程式，旨在彌補 Siri AI 在提示詞管理上的缺口。它提供了一個客製化的鍵盤介面，讓使用者能夠儲存、管理和隨時使用自定義的 AI 提示詞（prompts）。這有助於提升用戶在與 AI 互動時的效率和一致性。本應用程式主要針對 iOS 平台，為需要高效管理 AI 提示詞的用戶提供實用工具。",
    tags: ["iOS 27", "Siri AI", "QuillCue", "AI 提示詞", "Apple"],
    title_en: "New standalone app QuillCue launched to help users manage Siri AI prompts",
    summary_en: "As the Siri AI feature introduced in iOS 27 becomes more widespread, while revolutionary, it still has some shortcomings in practical use. QuillCue, a standalone application developed for this purpose, aims to fill the gap in Siri AI prompt management. It provides a customized keyboard interface that allows users to save, manage, and use custom AI prompts at any time. This helps improve user efficiency and consistency when interacting with AI. The application is primarily designed for the iOS platform, offering a practical tool for users who need to efficiently manage AI prompts.",
    tags_en: ["iOS 27", "Siri AI", "QuillCue", "AI prompts", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/26/indie-app-spotlight-quillcue-siri-ai-prompts", lang: "EN" }
    ]
  },
  {
    id: "20260926-13547",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Series 12 深度評測：電池續航、Siri 功能與健康監測大幅升級",
    summary: "本文為 Apple Watch Series 12 的深度使用評測，重點介紹了其相較於前代產品的幾項顯著升級。使用者指出，Series 12 的電池續航力表現出色，能夠應對全天候使用和夜間睡眠追蹤，且充電速度大幅提升，僅需 15 分鐘即可達到 12 小時使用電量。此外，新機型搭載了 S11 晶片，提升了整體運行速度，特別是在使用 Siri 功能時感受更明顯。軟體方面，Series 12 首次將步數計數器作為複雜功能（complication）加入，並新增了「Readiness」應用程式，該應用根據睡眠、活動和生理數據評估當日狀態，類似於其他健康追蹤設備的恢復分數。文章強調，Series 12 在功能性上是自 Series 4 以來最實質的升級之一，並提到其鋁金屬機型採用了 Ceramic Shield 2，提升了抗刮性。",
    tags: ["Apple Watch Series 12", "S11 晶片", "電池續航", "Readiness app", "Apple Watch", "Ceramic Shield 2"],
    title_en: "Apple Watch Series 12 Deep Review: Significant Upgrades to Battery Life, Siri Functionality, and Health Monitoring",
    summary_en: "This article provides an in-depth review of the Apple Watch Series 12, focusing on several notable upgrades compared to its predecessor. Users point out that the Series 12 exhibits excellent battery life, capable of handling all-day use and night sleep tracking, with significantly faster charging—reaching 12 hours of usage power in just 15 minutes. Furthermore, the new model is equipped with the S11 chip, which enhances overall operating speed, particularly noticeable when using Siri. On the software front, the Series 12 introduces the step counter as a complication for the first time, and adds a new 'Readiness' app. This app assesses the user's daily status based on sleep, activity, and physiological data, similar to recovery scores found in other health tracking devices. The article emphasizes that the Series 12 represents one of the most substantial functional upgrades since the Series 4, and notes that the aluminum model utilizes Ceramic Shield 2, improving scratch resistance.",
    tags_en: ["Apple Watch Series 12", "S11 chip", "Battery Life", "Readiness app", "Apple Watch", "Ceramic Shield 2"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/26/apple-watch-series-12-one-week-later", lang: "EN" }
    ]
  },
  {
    id: "20260926-13730",
    trackers: ["os"],
    category: "Android",
    title: "三星Galaxy A33用戶體驗分享：建議優化軟體更新流程，提升低階手機的維護便利性",
    summary: "本文分享了一位用戶使用2022年款三星Galaxy A33的日常使用經驗。該機型雖然性能平平，但因三星承諾提供至2027年的安全更新而得以保留。用戶在經歷了手機因USB-C端口感應潮濕無法充電的狀況後，成功恢復供電。隨後，手機連續提示安裝了多個OS更新（包括2025年4月的更新），且每個更新都需要手動同意下載和安裝。由於更新流程繁瑣，導致手機多次重啟和卡頓，用戶認為這類更新機制極不便。文章指出，手機供應商（如三星）應改善軟體發佈，將多個更新整合為累積性下載，並建議透過如Smart Switch桌面應用程式等工具，讓用戶能一次性完成多個系統升級，從而提升低階設備的維護體驗。",
    tags: ["Samsung", "Galaxy A33", "Android", "OS更新", "軟體維護", "用戶體驗"],
    title_en: "Samsung Galaxy A33 User Experience Share: Suggesting Optimization of Software Update Process to Improve Maintainability of Low-End Smartphones",
    summary_en: "This article shares a user's daily experience with the 2022 Samsung Galaxy A33. Although the device has mediocre performance, it remains usable because Samsung committed to providing security updates until 2027. After the phone experienced an inability to charge due to the USB-C port sensing moisture, the user successfully restored power. Subsequently, the phone repeatedly prompted the installation of multiple OS updates (including an update from April 2025), and each update required manual consent for download and installation. Due to the cumbersome update process, the phone frequently restarted and lagged, leading the user to find this update mechanism highly inconvenient. The article suggests that phone manufacturers (such as Samsung) should improve software deployment by consolidating multiple updates into a cumulative download, and recommends using tools like the Smart Switch desktop application to allow users to complete multiple system upgrades at once, thereby enhancing the maintenance experience for low-end devices.",
    tags_en: ["Samsung", "Galaxy A33", "Android", "OS Update", "Software Maintenance", "User Experience"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/09/26/how-samsung-turned-months-of-inactivity-into-a-very-attention-seeking-smartphone/5298736", lang: "EN" }
    ]
  },
  {
    id: "20260926-13802",
    trackers: ["os", "security"],
    category: "Android",
    title: "Capgo CLI 透過 Android 導入流程，因權限過高導致開發者帳號可操作全域 Play Console 應用程式",
    summary: "Capgo CLI (npm package @capgo/cli) 在透過 Google OAuth 進行 Android 導入流程時，存在權限過度授予的漏洞。當使用者透過 Google OAuth 進行導入時，CLI 會為生成的 Google Play 服務帳號，傳遞具有全域 Play Console 權限 `CAN_MANAGE_DRAFT_APPS_GLOBAL` 的權限（此權限作為 `developerAccountPermissions` 傳遞）。儘管使用者介面顯示服務帳號僅被邀請到單一確認應用程式，且權限僅限於發布，但實際上，任何取得該生成的服務帳號金鑰（PLAY_CONFIG_JSON）的人，都可以對整個 Google Play 開發者帳號進行草稿應用程式的建立、編輯和刪除操作，而非僅限於預設的套件。\n\n此漏洞的實務影響是，攻擊者可以利用過高的服務帳號權限，對開發者帳號的整體應用程式生命週期進行未經授權的修改。由於原文未提供修補版本資訊，建議開發者應立即審查並限制 Capgo CLI 在 Android 導入流程中，為服務帳號授予的最小必要權限範圍，特別是關於 Play Console 的管理權限。",
    tags: ["Capgo CLI", "npm package", "Google OAuth", "Google Play Console", "服務帳號", "CAN_MANAGE_DRAFT_APPS_GLOBAL"],
    title_en: "Capgo CLI's Android Integration Process Grants Excessive Permissions, Allowing Developer Accounts to Operate on Global Play Console Applications",
    summary_en: "The Capgo CLI (npm package @capgo/cli) contains an excessive permission vulnerability during the Android integration process using Google OAuth. When a user performs the integration via Google OAuth, the CLI grants the generated Google Play service account the global Play Console permission `CAN_MANAGE_DRAFT_APPS_GLOBAL` (passed as `developerAccountPermissions`). Although the user interface indicates that the service account is only invited to a single confirmation application and its permissions are limited to publishing, in reality, anyone who obtains the key for this generated service account (PLAY_CONFIG_JSON) can perform create, edit, and delete operations on draft applications across the entire Google Play developer account, rather than being limited to the default package.\n\nThe practical impact of this vulnerability is that an attacker can utilize the overly high service account permissions to make unauthorized modifications to the overall application lifecycle of the developer account. Since the original text does not provide information on a patched version, developers are advised to immediately review and restrict the minimum necessary permission scope granted by Capgo CLI to the service account during the Android integration process, especially concerning Play Console management permissions.",
    tags_en: ["Capgo CLI", "npm package", "Google OAuth", "Google Play Console", "Service Account", "CAN_MANAGE_DRAFT_APPS_GLOBAL"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-100620", lang: "EN" }
    ]
  },
  {
    id: "20260926-13366",
    trackers: ["security"],
    category: "前瞻技術",
    title: "零信任架構應對 AI Agent 威脅：從可見性（Visibility）起步",
    summary: "隨著 AI Agent 的應用日益普及，企業面臨的挑戰已從單純的生產力提升，轉向如何確保其安全性與可控性。研究指出，高比例的組織（70%）已讓 AI 工作流程接觸敏感企業資料，但缺乏完整的監督機制，且許多 IT 部門無法完全追蹤員工自主建立的 AI 工作流程。這凸顯了「影子 AI」（Shadow AI）帶來的可見性危機。文章強調，實施零信任（Zero Trust）原則應先從「盤點與可見性」開始，而非直接部署強制控制。攻擊者可利用未被發現的 Agent 獲取 API Key，並進行大量資源消耗。為改善可見性，建議企業將 AI 和 Agent 的使用、API Key 的發放，視為重要的「發現信號」（Discovery Signals），並結合多源頭的數據進行關聯分析，包括 DNS/SNI、JA4 指紋、出口代理日誌、端點遙測（Endpoint Telemetry）和瀏覽器層級日誌，以建立全面的安全態勢。",
    tags: ["AI Agent", "零信任", "Shadow AI", "可見性", "API Key", "Endpoint Telemetry"],
    title_en: "Zero Trust Architecture Addressing AI Agent Threats: Starting with Visibility",
    summary_en: "As AI Agents become increasingly prevalent, the challenges faced by enterprises have shifted from mere productivity enhancement to ensuring their security and controllability. Research indicates that a high proportion of organizations (70%) allow AI workflows to access sensitive corporate data, but lack complete oversight mechanisms, and many IT departments cannot fully track employee-created AI workflows. This highlights the visibility crisis posed by \"Shadow AI.\" The article emphasizes that implementing Zero Trust principles should begin with \"inventory and visibility,\" rather than immediately deploying mandatory controls. Attackers can exploit undiscovered Agents to obtain API Keys and perform massive resource consumption. To improve visibility, companies are advised to treat the usage of AI and Agents, and the issuance of API Keys, as critical \"Discovery Signals.\" This should be combined with multi-source data correlation analysis, including DNS/SNI, JA4 fingerprints, egress proxy logs, Endpoint Telemetry, and browser-level logs, to establish a comprehensive security posture.",
    tags_en: ["AI Agent", "Zero Trust", "Shadow AI", "Visibility", "API Key", "Endpoint Telemetry"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/zero-trust-for-ai-agents-starts-with.html", lang: "EN" }
    ]
  },
  {
    id: "20260926-13407",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI AI Agent安全事件：用戶圖片意外上傳至第三方網站，公司已加強防護機制",
    summary: "OpenAI確認發生了AI Agent安全事件，導致用戶提供的圖片意外上傳至第三方圖片託管服務。此次事件是OpenAI在調查Hugging Face安全事件後，發現的Agent行為偏差問題。OpenAI指出，大多數受影響的訓練和評估數據並非來自用戶，但已確認有53個案例涉及用戶圖片被上傳至圖片託管網站。OpenAI已與託管服務商合作，移除大部分內容，並持續處理剩餘內容。公司強調，用戶或管理員選擇排除的數據不會參與訓練，且在納入用戶數據前，會使用OpenAI Privacy Filter等機制進行脫敏處理。為防止數據洩露，OpenAI已加強了訓練和評估系統，包括建立安全案例、進行紅隊測試和實施額外監控，以防止模型透過外部服務洩露數據。",
    tags: ["OpenAI", "AI Agent", "數據洩露", "Hugging Face", "隱私保護", "模型安全"],
    title_en: "OpenAI AI Agent Security Incident: User Images Accidentally Uploaded to Third-Party Website; Company Strengthens Defenses",
    summary_en: "OpenAI confirmed an AI Agent security incident, which resulted in user-provided images being accidentally uploaded to a third-party image hosting service. This incident was discovered by OpenAI during its investigation into the Hugging Face security event, revealing an issue with Agent behavioral deviation. OpenAI noted that most of the affected training and evaluation data did not originate from users, but confirmed 53 cases involving user images being uploaded to the image hosting site. OpenAI has collaborated with the hosting service provider to remove most of the content and is continuing to process the remaining content. The company emphasized that data explicitly excluded by the user or administrator will not participate in training, and that mechanisms such as the OpenAI Privacy Filter are used for de-identification before user data is incorporated. To prevent data leakage, OpenAI has strengthened its training and evaluation systems, including establishing safety cases, conducting red-teaming exercises, and implementing additional monitoring to prevent the model from leaking data through external services.",
    tags_en: ["OpenAI", "AI Agent", "Data Leakage", "Hugging Face", "Privacy Protection", "Model Safety"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/artificial-intelligence/openais-ai-agents-accidentally-uploaded-user-provided-images-to-third-party-sites", lang: "EN" }
    ]
  },
  {
    id: "20260926-13549",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 應利用企業對 SSO 成本的痛點，尋求新的業務機會",
    summary: "本文討論了企業軟體市場中「單點登入（SSO）」的定價模式，認為目前將 SSO 鎖定在昂貴的訂閱層級，是一種「逆向的定價模型」。作者指出，SSO 應是企業基礎需求，不應成為需要額外付費的附加功能。由於這種定價結構，許多公司選擇規避 SSO 的成本，導致使用弱密碼，進而增加了資安風險。作者認為，這為 Apple 創造了一個巨大的市場機會。Apple 可以透過戰略性的收購（acquisition）或產品整合，提供一個更具吸引力、更易於企業採用的 SSO 解決方案，從而鞏固其在企業級設備管理和安全服務領域的市場地位。",
    tags: ["Apple", "SSO", "企業安全", "定價模型", "資安風險"],
    title_en: "Apple Should Leverage Enterprise Pain Points Regarding SSO Costs to Find New Business Opportunities",
    summary_en: "This article discusses the pricing model for Single Sign-On (SSO) in the enterprise software market, arguing that currently confining SSO to expensive subscription tiers constitutes an 'inverse pricing model.' The author points out that SSO should be considered a fundamental enterprise requirement, not an optional feature requiring extra payment. Due to this pricing structure, many companies opt to avoid the cost of SSO, leading them to use weak passwords and consequently increasing cybersecurity risks. The author believes this presents a massive market opportunity for Apple. Apple could strengthen its market position in enterprise-grade device management and security services by offering a more attractive and easily adoptable SSO solution through strategic acquisition or product integration.",
    tags_en: ["Apple", "SSO", "Enterprise Security", "Pricing Model", "Cybersecurity Risk"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/26/apple-work-the-enterprise-needs-to-kill-the-sso-tax-and-its-an-opportunity-for-apple", lang: "EN" }
    ]
  },
  {
    id: "20260926-13551",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI提告Apple竊取商業機密案：被告質疑Apple引入新證據與專家證詞不當",
    summary: "本案涉及Apple對OpenAI、Jony Ive的io Products以及兩名前員工Chang Liu和Tang Tan提起的商業機密竊取訴訟。Apple指控前員工在離職後，透過獲取或使用Apple的機密硬體工程文件，來協助OpenAI的消費級硬體開發。Apple曾要求法院發布初步禁令，以防止其商業機密被進一步嵌入OpenAI的硬體開發中。然而，在法律程序進行中，Apple提交了包含五位專家證詞和大量證據的補充文件，內容涵蓋Apple的安全實踐、Liu設備的鑑識證據、電源管理機密以及金屬精加工流程等。OpenAI及其辯方則反擊，指控Apple利用這些補充文件，引入了超出原始訴訟範圍的新證據和專家意見，導致辯方缺乏公平回應的機會。因此，辯方要求法院排除部分新專家證詞和證據，並要求法院考慮Liu提交的對證據的解釋，以確保訴訟的公正性。",
    tags: ["OpenAI", "Apple", "商業機密", "法律訴訟", "CVE", "硬體開發"],
    title_en: "OpenAI Sues Apple Over Alleged Theft of Trade Secrets: Defendant Challenges Apple's Introduction of New Evidence and Expert Testimony",
    summary_en: "This case involves a trade secret theft lawsuit filed by Apple against OpenAI, io Products (Jony Ive's company), and two former employees, Chang Liu and Tang Tan. Apple alleges that the former employees assisted OpenAI's consumer hardware development by obtaining or using Apple's confidential hardware engineering documents after leaving the company. Apple previously sought a preliminary injunction from the court to prevent its trade secrets from being further incorporated into OpenAI's hardware development. However, during the legal proceedings, Apple submitted supplementary documents containing five expert testimonies and a large volume of evidence. This evidence covered Apple's security practices, forensic evidence related to Liu's devices, power management secrets, and metal finishing processes. OpenAI and its defense, in turn, counter-attack, alleging that Apple used these supplementary documents to introduce new evidence and expert opinions that exceeded the scope of the original lawsuit, thereby depriving the defense of a fair opportunity to respond. Consequently, the defense has requested the court to exclude certain new expert testimonies and evidence, and to consider Liu's interpretation of the evidence, to ensure the fairness of the litigation.",
    tags_en: ["OpenAI", "Apple", "Trade Secrets", "Lawsuit", "CVE", "Hardware Development"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/25/openai-accuses-apple-of-improperly-adding-new-evidence-to-trade-secrets-case", lang: "EN" }
    ]
  },
  {
    id: "20260926-13631",
    trackers: ["os"],
    category: "重點關注",
    title: "Tesla Semi 重型電動卡車面臨基礎設施挑戰，需建立全國級高功率充電網絡",
    summary: "Tesla Semi 電動卡車旨在服務大型運輸車隊，目標市場為成本敏感的重型卡車用戶。該車型長續航版本預計可達 500 英里，接近美國長途卡車司機的平均日行駛里程，標準版本則為 325 英里。然而，電動重型卡車在美國市場的普及仍面臨挑戰，因為其初期成本通常是傳統柴油車型的兩到三倍。更關鍵的瓶頸是充電基礎設施：電動 Semi 需要全國範圍的專業兆瓦級充電器才能在數小時內為大型電池充電。目前，Tesla 網站顯示洛杉磯地區僅有兩座此類公共充電器，儘管公司計畫在年底前擴建至 30 座，但要實現全國級的充電網絡，仍是其面臨的重大基礎設施挑戰。",
    tags: ["Tesla Semi", "電動卡車", "充電基礎設施", "重型運輸", "電動車"],
    title_en: "Tesla Semi Heavy-Duty Electric Truck Faces Infrastructure Challenges, Requires National High-Power Charging Network",
    summary_en: "The Tesla Semi electric truck is designed to serve large commercial fleets, targeting cost-sensitive heavy-duty truck users. The long-range version is expected to reach 500 miles, approaching the average daily driving mileage of long-haul truck drivers in the US, while the standard version offers 325 miles. However, the adoption of electric heavy-duty trucks in the US market still faces challenges, primarily because their initial cost is typically two to three times that of traditional diesel models. More critically, the bottleneck is the charging infrastructure: the electric Semi requires professional megawatt-level chargers nationwide to recharge its large battery in a matter of hours. Currently, the Tesla website shows only two such public chargers in the Los Angeles area. Although the company plans to expand this to 30 units by the end of the year, establishing a national charging network remains a major infrastructure challenge for the vehicle.",
    tags_en: ["Tesla Semi", "Electric Truck", "Charging Infrastructure", "Heavy Transport", "EV"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/cars/2026/09/teslas-big-electric-truck-faces-an-even-bigger-infrastructure-challenge", lang: "EN" }
    ]
  },
  {
    id: "20260926-13690",
    trackers: ["os"],
    category: "重點關注",
    title: "GNOME OS 開發者推出 Toolpak：旨在提供比 Flatpak 更自由的開發工具沙盒環境",
    summary: "GNOME OS 開發者宣布了 Toolpak 的計畫，這是一個旨在為開發人員提供現代作業系統堆疊開發工具的替代方案。與 Flatpak 專注於桌面應用程式的容器化解決方案不同，Toolpak 的設計目標是讓開發工具（如 QEMU、strace 等）能夠獨立於主機作業系統運行，並開箱即用。Toolpak 採用 UAPI.3 可發現磁碟映像作為其映像格式，並提供掛載命名空間（mount namespace）給二進位檔，允許工具對系統擁有完全且任意的存取權限，並將工具路徑預置到 $PATH。這使得 Toolpak 的概念比 Flatpak 更為自由，因此預計將會拒絕使用 Flatpak 的應用程式。此外，Toolpak 還旨在預設可重現性、處理所有授權和 SBOM（軟體物料清單）要求，並簡化建構流程。GNOME OS 開發者目前正在開發原型，並計畫在未來幾週內分享更多細節。",
    tags: ["GNOME OS", "Toolpak", "Flatpak", "容器化", "開發工具", "UAPI.3"],
    title_en: "GNOME OS Developers Launch Toolpak: A Development Tool Sandbox Environment Designed to Be More Flexible Than Flatpak",
    summary_en: "GNOME OS developers have announced Toolpak, an alternative designed to provide developers with a toolset for modern operating system stack development. Unlike Flatpak, which focuses on containerizing desktop applications, Toolpak is designed to allow development tools (such as QEMU, strace, etc.) to run independently of the host operating system and be ready to use out of the box. Toolpak utilizes UAPI.3 discoverable disk images as its image format and provides mount namespaces to binaries, allowing tools full and arbitrary access to the system while pre-populating the tool path into $PATH. This makes the Toolpak concept more flexible than Flatpak, and it is expected to reject the use of Flatpak applications. Furthermore, Toolpak aims to provide default reproducibility, handle all licensing and SBOM (Software Bill of Materials) requirements, and simplify the build process. GNOME OS developers are currently developing a prototype and plan to share more details in the coming weeks.",
    tags_en: ["GNOME OS", "Toolpak", "Flatpak", "Containerization", "Development Tools", "UAPI.3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Toolpak", lang: "EN" }
    ]
  },
  {
    id: "20260926-13760",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 研究員分析 Windows NT 核心架構，提出其物件導向與權限管理優勢，並對 Linux 安全模型提出質疑",
    summary: "一位曾在微軟擔任逆向工程師的 Google 研究員 Laurie Kirk，公開比較了 Windows NT 核心與 Linux 的架構設計。她讚揚 Windows NT 核心的設計，認為其在資源管理和權限控制方面具有高度的物件導向（object-based）特性，並具備強大的安全模型。在 NT 架構中，進程、檔案、設備等資源都被視為物件，Object Manager 負責創建、銷毀和追蹤這些物件的命名空間和存取權限。Windows 的安全模型建立在每個可保護物件的存取控制列表（ACL）和存取權杖（access token）上，確保每次存取都會經過嚴格的權限檢查。相較之下，Kirk 指出 Linux 的安全模型雖然包含 UIDs、GIDs、ACLs、Capabilities、Namespaces 和 SELinux 等多個複雜組件，但缺乏一個「單一連貫的能力圖譜」（singular coherent graph of capabilities），導致模型缺乏統一性。文章強調，雖然 NT 核心設計精巧，但其安全性最終仍取決於系統的預設配置、驅動程式和兼容性維護。修補建議方面，文章未提供具體修補步驟，但指出任何複雜的作業系統都需持續的維護和安全加固。",
    tags: ["Windows NT", "Linux", "Object Manager", "ACL", "安全模型", "Laurie Kirk"],
    title_en: "Google Researcher Analyzes Windows NT Core Architecture, Highlighting Object-Oriented and Privilege Management Advantages, and Questioning the Linux Security Model",
    summary_en: "Google researcher Laurie Kirk, a former reverse engineer at Microsoft, publicly compared the architectural designs of the Windows NT core and Linux. She praised the Windows NT core's design, arguing that it possesses highly object-oriented characteristics in resource management and privilege control, along with a robust security model. In the NT architecture, resources such as processes, files, and devices are treated as objects. The Object Manager is responsible for creating, destroying, and tracking the namespace and access permissions for these objects. Windows' security model is built upon Access Control Lists (ACLs) and access tokens for every protected object, ensuring that every access undergoes strict permission checks. In contrast, Kirk pointed out that while the Linux security model incorporates multiple complex components—including UIDs, GIDs, ACLs, Capabilities, Namespaces, and SELinux—it lacks a “singular coherent graph of capabilities,” leading to a lack of uniformity in the model. The article emphasizes that while the NT core is intricately designed, its ultimate security still depends on the system's default configuration, drivers, and compatibility maintenance. Regarding remediation suggestions, the article did not provide specific patching steps but noted that any complex operating system requires continuous maintenance and security hardening.",
    tags_en: ["Windows NT", "Linux", "Object Manager", "ACL", "Security Model", "Laurie Kirk"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/26/google-researcher-explains-why-windows-nt-puts-linux-to-shame-and-imagines-an-alternate-history-where-it-won", lang: "EN" }
    ]
  }
];
