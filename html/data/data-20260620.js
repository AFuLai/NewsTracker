// data-20260620.js — 2026-06-20
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-20"] = [
  {
    id: "20260620-001",
    trackers: ["security"],
    category: "重大事件",
    title: "新型 Prinz Eugen 勒索軟體採用無勒索信策略，優先加密近期檔案以施壓受害者",
    summary: "由 Threatdown 分析發現的新型勒索軟體「Prinz Eugen」，並非採取常見的 RaaS 模式，其駭客偏好透過遭竊的 RDP 憑證取得初始權限，並利用合法遠端管理工具（RMM）與內建系統指令進行「離地攻擊」。該惡意程式以 Go 語言編寫，具備優先加密近期檔案的機制以鎖定業務核心資料，並採用 ChaCha20-Poly1305 加密演算法。值得注意的是，該組織刻意不留下勒索信件，轉而透過暗網入口或直接聯繫進行勒索，以降低數位鑑識軌跡與自動化偵測風險。建議企業應落實 RDP 憑證管理，監控異常的 RMM 工具部署，並參考資安報告中提供的入侵指標（IoC）進行檢測與防禦。",
    tags: ["Prinz Eugen", "勒索軟體", "RDP", "RMM", "離地攻擊", "資料外洩", "Threatdown"],
    title_en: "New Prinz Eugen Ransomware Uses No-Ransom-Note Strategy, Prioritizing Recent Files for Maximum Impact",
    summary_en: "A new ransomware strain, 'Prinz Eugen,' analyzed by Threatdown, does not follow the common RaaS model. Instead, its threat actors prefer gaining initial access through compromised RDP credentials and execute 'air-gapped attacks' using legitimate Remote Monitoring and Management (RMM) tools and built-in system commands. The malware is written in Go and features a mechanism that prioritizes the encryption of recent files to lock down core business data, utilizing the ChaCha20-Poly1305 encryption algorithm. Notably, the group deliberately avoids leaving ransom notes, opting instead to conduct extortion via dark web portals or direct contact, thereby reducing digital forensics trails and automated detection risks. Enterprises are advised to strengthen RDP credential management, monitor for anomalous RMM tool deployments, and utilize Indicators of Compromise (IoC) provided in security reports for detection and defense.",
    tags_en: ["Prinz Eugen", "Ransomware", "RDP", "RMM", "Air-gapped attack", "Data Leakage", "Threatdown"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-prinz-eugen-ransomware-prioritizes-recent-files-for-encryption", lang: "EN" }
    ]
  },
  {
    id: "20260620-002",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心移除 strncpy API：解決長年存在的 Bug 與效能問題",
    summary: "Linux 核心在 7.2 版本中正式移除 strncpy 函式庫介面。strncpy 過去因其反直覺的語義、處理 NUL 終止字串時的行為，以及在目標記憶體上冗餘的零填充，長期成為核心程式碼的「持續性 Bug 來源」。為此，開發團隊耗時六年，累積了數百個修補程式（commits）才徹底清除核心內所有使用 strncpy 的程式碼。本次移除不僅是 API 的淘汰，也包括了所有針對 CPU 架構的 strncpy 實作。開發者應改用更精確的替代方案，包括：針對 NUL 終止目標的 strscpy()；需要零填充的 NUL 終止目標使用 strscpy_pad()；處理非 NUL 終止固定寬度欄位時使用 strtomem_pad()；進行有界複製時使用 memcpy_and_pad()；或對於已知長度的記憶體複製使用標準的 memcpy()。此舉大幅提升了核心的穩定性與程式碼品質。",
    tags: ["Linux 核心", "strncpy", "API 移除", "程式碼重構", "系統穩定性", "Linux 7.2"],
    title_en: "Linux Kernel Removes strncpy API: Addressing Long-Standing Bugs and Performance Issues",
    summary_en: "The Linux kernel has officially removed the strncpy library function interface in version 7.2. Historically, strncpy has been a 'persistent bug source' in core code due to its counter-intuitive semantics, its behavior when handling NUL-terminated strings, and the redundant zero padding applied to the target memory. Consequently, the development team spent six years accumulating hundreds of commits to completely eliminate all instances of strncpy usage within the kernel. This removal is not merely an API deprecation; it also includes all strncpy implementations across CPU architectures. Developers should adopt more precise alternatives, including: strscpy() for NUL-terminated targets; strscpy_pad() for NUL-terminated targets requiring zero padding; strtomem_pad() for handling fixed-width fields that are not NUL-terminated; memcpy_and_pad() for bounded copying; or the standard memcpy() for known-length memory copies. This measure significantly enhances the kernel's stability and code quality.",
    tags_en: ["Linux Kernel", "strncpy", "API Removal", "Code Refactoring", "System Stability", "Linux 7.2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Drops-strncpy", lang: "EN" }
    ]
  },
  {
    id: "20260620-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新：CRC64-NVMe 檢查機制支援 32 位元 ARM，提升效能",
    summary: "本篇報導指出 Linux 核心在處理儲存子系統的資料完整性檢查時，針對 CRC64-NVMe 演算法進行了重大優化。原本 NEON 加速的 CRC64-NVMe 支援主要適用於 ARM64 架構。透過一系列的補丁，開發者成功讓 ARM64 NEON 內建功能（intrinsics）能夠在 Linux 核心內部，跨越 32 位元和 64 位元 ARM 架構進行共享。這項更新使得具備 NEON 支援的 32 位元 ARM 環境也能享受到 CRC64 的加速效能。具體而言，此優化已合併至 Linux 7.2 核心版本，並讓 32 位元 ARM 能夠使用 ARM64 的優化 xor_gen() 函數。這對於仍使用 32 位元 ARM 且依賴上游 Linux 核心建構的系統（預計適用於 2026 年及以後）具有實質的效能提升，能有效減少儲存子系統的資料驗證瓶頸。",
    tags: ["Linux 核心", "ARM", "CRC64-NVMe", "NEON", "Linux 7.2", "32-bit ARM"],
    title_en: "Linux Kernel Update: CRC64-NVMe Check Mechanism Support for 32-bit ARM Improves Performance",
    summary_en: "This report highlights a major optimization in the Linux kernel for data integrity checks within the storage subsystem, specifically for the CRC64-NVMe algorithm. Previously, NEON-accelerated CRC64-NVMe support was primarily limited to the ARM64 architecture. Through a series of patches, developers successfully enabled the sharing of ARM64 NEON intrinsics within the Linux kernel, spanning both 32-bit and 64-bit ARM architectures. This update allows 32-bit ARM environments with NEON support to benefit from CRC64 acceleration. Specifically, this optimization has been merged into the Linux 7.2 kernel version, enabling 32-bit ARM to utilize the optimized xor_gen() function designed for ARM64. This provides a substantial performance boost for systems still running 32-bit ARM and relying on upstream Linux kernel builds (expected to apply from 2026 onwards), effectively reducing data validation bottlenecks in the storage subsystem.",
    tags_en: ["Linux Kernel", "ARM", "CRC64-NVMe", "NEON", "Linux 7.2", "32-bit ARM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-CRC64-NEON-On-ARM32", lang: "EN" }
    ]
  },
  {
    id: "20260620-004",
    trackers: ["os"],
    category: "Linux",
    title: "GIMP 0.54 版本透過 Flatpak 移植，讓老式 Motif 工具組在現代 Linux 桌面環境上運行",
    summary: "本文介紹了 GIMP 0.54 版本透過 Flatpak 進行了移植，使其能夠在現代 Linux 桌面環境上運行。GIMP 0.54 是一個年代久遠的版本，其特點是使用了 Motif 工具組，這在現代使用 GTK 工具組的 Linux 發行版中較為罕見。該移植版本由開發者 balooii 在 GNOME.org GitLab 上提供。雖然該版本在實用性上可能僅吸引懷舊的用戶，但它展示了如何將老舊的軟體與現代的 Linux 桌面環境進行整合。文章提醒用戶，對於日常使用，建議使用現代的 GIMP 版本（例如 GIMP 3.2）。",
    tags: ["GIMP", "Flatpak", "Motif Toolkit", "Linux", "GNOME"],
    title_en: "GIMP 0.54 ported via Flatpak allows old Motif toolkit to run on modern Linux desktop environments",
    summary_en: "This article introduces GIMP 0.54, which has been ported using Flatpak, allowing it to run on modern Linux desktop environments. GIMP 0.54 is an older version characterized by its use of the Motif toolkit, which is uncommon in modern Linux distributions that typically use the GTK toolkit. This ported version was provided by developer balooii on GNOME.org GitLab. While this version may only appeal to nostalgic users in terms of practicality, it demonstrates how legacy software can be integrated with modern Linux desktop environments. The article advises users that for daily use, they should use a modern GIMP version (e.g., GIMP 3.2).",
    tags_en: ["GIMP", "Flatpak", "Motif Toolkit", "Linux", "GNOME"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GIMP-0.54-Flatpak", lang: "EN" }
    ]
  },
  {
    id: "20260620-005",
    trackers: ["os"],
    category: "Linux",
    title: "exFAT 文件系統在 Linux 7.2 上升級支援 IOmap，提升效能與穩定性",
    summary: "本文介紹 exFAT 文件系統在 Linux 7.2 版本上的重大更新。該更新的核心是將 exFAT 驅動程式整合至 IOmap 基礎設施，使其能更好地處理緩衝 I/O、直接 I/O，並支援 LLSEEK 的 SEEK_HOLE/SEEK_DATA 等操作。IOmap 是 Linux 核心用於將邏輯檔案偏移量映射到物理儲存區塊的新框架，取代了舊的 buffer head 機制。透過這次的 IOmap 轉換，exFAT 在 Linux 7.2 上獲得了顯著的效能提升，這對於使用 exFAT 進行可移除儲存媒體存取的用戶來說，是一次值得關注的系統優化。除了效能提升外，本次更新也包含多項錯誤修復與程式碼改進。",
    tags: ["exFAT", "Linux 7.2", "IOmap", "文件系統", "Linux 核心", "效能優化"],
    title_en: "exFAT Filesystem Upgrades Support IOmap on Linux 7.2, Enhancing Performance and Stability",
    summary_en: "This article introduces a major update for the exFAT filesystem on Linux 7.2. The core of this update is the integration of the exFAT driver into the IOmap infrastructure, enabling it to better handle buffered I/O and direct I/O, and supporting LLSEEK operations such as SEEK_HOLE/SEEK_DATA. IOmap is a new Linux kernel framework used to map logical file offsets to physical storage blocks, replacing the older buffer head mechanism. Through this IOmap conversion, exFAT gains significant performance improvements on Linux 7.2, making it a noteworthy system optimization for users accessing removable media with exFAT. In addition to performance enhancements, this update also includes multiple bug fixes and code improvements.",
    tags_en: ["exFAT", "Linux 7.2", "IOmap", "Filesystem", "Linux Kernel", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-exFAT", lang: "EN" }
    ]
  },
  {
    id: "20260620-006",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 新增彩色識別標籤，優化多螢幕配置體驗",
    summary: "KDE Plasma 桌面環境在 6.8 版本中，為解決長期存在的多螢幕配置難點，新增了在設定介面中為每個顯示器添加彩色編號標籤。此功能特別有助於使用者配置複雜的多螢幕佈局，尤其是在有多個相同型號顯示器時。此外，Plasma 6.8 也更新了 QML 應用程式，使其改用符合 KDE 風格的顏色選擇器，取代了不尊重 KDE 主題的 Qt 顏色選擇器。針對 Plasma 6.7.1 版本，則改善了全局主題切換的過渡效果，並因遊戲控制器熱插拔的競態條件（race condition）問題，預設關閉了遊戲控制器輸入外掛。對於舊版穩定系列，Plasma 6.6.6 修正了 KWin 在登入時因部分舊版 GPU 或驅動程式而無法啟動的問題，而 Plasma 6.7.1 則修復了 KWin 在應用程式請求無效顏色格式時可能崩潰的情況。",
    tags: ["KDE Plasma", "Linux", "Plasma 6.8", "KWin", "多螢幕配置", "桌面環境"],
    title_en: "KDE Plasma 6.8 Adds Color-Coded Labels to Improve Multi-Monitor Setup Experience",
    summary_en: "In version 6.8, the KDE Plasma desktop environment has added color-coded labels for each display within the settings interface to address long-standing difficulties in multi-monitor configuration. This feature is particularly helpful for users setting up complex multi-monitor layouts, especially when using multiple displays of the same model. Furthermore, Plasma 6.8 has updated QML applications to use a color picker consistent with the KDE style, replacing the Qt color picker that did not respect the KDE theme. For version 6.7.1, the transition effect for global theme switching has been improved, and the game controller input plugin is now disabled by default due to a race condition issue related to hot-plugging game controllers. For older stable series, Plasma 6.6.6 fixed an issue where KWin could fail to start due to certain older GPUs or drivers during login, while Plasma 6.7.1 fixed a potential crash in KWin when an application requested an invalid color format.",
    tags_en: ["KDE Plasma", "Linux", "Plasma 6.8", "KWin", "Multi-Monitor Setup", "Desktop Environment"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-Multi-Monitor", lang: "EN" }
    ]
  },
  {
    id: "20260620-007",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 NTFS 驅動程式升級：支援 Windows 原生符號連結並強化元數據處理",
    summary: "本文介紹了 Linux 核心 7.2 版本中，NTFS 驅動程式的重大更新與強化。本次更新的主要功能是新增了對 Windows 原生檔案系統層級符號連結（Symbolic Links）的支援，這與常見的 .lnk 檔案不同。使用者可以透過掛載選項控制原生符號連結的處理方式，支援相對連結、絕對連結和接點（junctions）。此外，NTFS 驅動程式在處理離線元數據時也進行了更嚴格的強化，修復了多個邊界外存取、整數溢位和不一致的元數據處理問題，例如修復了涉及區段 MFT 記錄的寫回死鎖，並改善了資源洩漏路徑。這些改進提升了 Linux 系統在與 Windows 檔案系統互動時的穩定性與安全性，建議使用 Linux 7.2 或更高版本來利用這些強化功能。",
    tags: ["Linux 7.2", "NTFS", "符號連結", "檔案系統", "核心驅動程式", "元數據"],
    title_en: "Linux 7.2 NTFS Driver Upgrade: Supports Windows Native Symbolic Links and Enhances Metadata Handling",
    summary_en: "This article introduces significant updates and enhancements to the NTFS driver in the Linux 7.2 kernel. The main feature of this update is the addition of support for Windows native file system level Symbolic Links, which are distinct from common .lnk files. Users can control the handling of native symbolic links via mount options, supporting relative links, absolute links, and junctions. Furthermore, the NTFS driver has undergone stricter enhancements in handling offline metadata, fixing multiple out-of-bounds access, integer overflow, and inconsistent metadata processing issues. For example, it resolves write deadlocks involving segment MFT records and improves resource leak paths. These improvements enhance the stability and security of the Linux system when interacting with Windows file systems, and it is recommended to use Linux 7.2 or higher to utilize these enhanced features.",
    tags_en: ["Linux 7.2", "NTFS", "Symbolic Links", "File System", "Kernel Driver", "Metadata"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-NTFS-Improvements", lang: "EN" }
    ]
  },
  {
    id: "20260620-008",
    trackers: ["os"],
    category: "Windows",
    title: "微軟揭露 Windows 11 設備錯過 Secure Boot 2023 更新的風險與處理方式",
    summary: "本文針對運行舊硬體或透過註冊表繞過安裝 Windows 11 的用戶，說明了 Secure Boot 2023 憑證更新的重要性。雖然 Secure Boot 憑證過期不會導致電腦無法開機，但若未更新，設備將無法接收未來針對開機層級安全更新，包括 Windows Boot Manager、Secure Boot 資料庫、撤銷清單或新發現的開機漏洞的修補。無法更新的主要原因包括：OEM 廠商對舊平台（如 2018 年前）停止提供 BIOS 更新；設備運行在 Legacy BIOS 或 CSM 模式；或用戶透過繞過方式安裝 Windows 11，導致 Secure Boot 在韌體層面未啟用或配置不當。若未接收 2023 更新，最大的安全風險是無法接收未來更新的 Secure Boot DBX（禁止簽章資料庫）的撤銷資訊，影響開機鏈的安全性。建議用戶檢查設備是否能接收到官方的 BIOS/韌體更新，並確保 Secure Boot 在韌體層面是正確啟用的。",
    tags: ["Windows 11", "Secure Boot", "韌體", "BIOS", "開機安全", "CVE"],
    title_en: "Microsoft Reveals Risks and Mitigation for Windows 11 Devices Missing Secure Boot 2023 Updates",
    summary_en: "This article addresses the importance of updating the Secure Boot 2023 credentials for users running on older hardware or who installed Windows 11 by bypassing standard requirements. Although an expired Secure Boot credential will not prevent the computer from booting, failure to update means the device will be unable to receive future security updates for the boot level, including patches for the Windows Boot Manager, Secure Boot database, revocation lists, or newly discovered boot vulnerabilities. The main reasons for inability to update include: OEM vendors ceasing BIOS updates for older platforms (such as those pre-2018); the device running in Legacy BIOS or CSM mode; or the user installing Windows 11 via bypass methods, resulting in Secure Boot not being properly enabled or configured at the firmware level. The greatest security risk of not receiving the 2023 update is the inability to receive revocation information for future Secure Boot DBX (Database of Forbidden Signatures) updates, which compromises the security of the boot chain. Users are advised to check if their device can receive official BIOS/firmware updates and ensure that Secure Boot is correctly enabled at the firmware level.",
    tags_en: ["Windows 11", "Secure Boot", "Firmware", "BIOS", "Boot Security", "CVE"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/21/microsoft-reveals-how-to-verify-windows-11s-secure-boot-update-what-to-do-if-your-pc-missed-it", lang: "EN" }
    ]
  },
  {
    id: "20260620-009",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 KB5094126 更新後，Office 應用程式與回收筒出現多項功能故障",
    summary: "微軟發布的 Windows 11 KB5094126（2026 年 6 月補丁）更新，雖然是強制性安全修補，但導致多項使用者體驗問題。主要問題包括：第一，Office 應用程式（如 Word、Excel）在透過第三方應用程式（如會計軟體、牙科軟體）呼叫時，因 OLE 自動化機制故障而崩潰。這表示單純手動開啟 Office 應用程式通常沒問題，但任何整合流程都會出錯。第二，回收筒（Recycle Bin）的介面顯示錯誤，會顯示內部儲存名稱（如 $Rxxxxx.ext）而非原始檔案名稱，造成使用者混淆。此外，報告指出在部分商用 PC（特別是 HP 機型）上，安裝此更新後可能遭遇啟動失敗、BSOD（藍色畫面）、BitLocker 恢復畫面或 Secure Boot 驗證錯誤。建議使用者留意這些功能異常，並在微軟提供修復方案前，特別注意檔案刪除和應用程式整合流程。",
    tags: ["Windows 11", "KB5094126", "Office 應用程式", "OLE 自動化", "BSOD", "BitLocker"],
    title_en: "Multiple Function Failures in Office Applications and Recycle Bin After Windows 11 KB5094126 Update",
    summary_en: "Microsoft's Windows 11 KB5094126 (June 2026 patch) update, while a mandatory security patch, has caused multiple user experience issues. The main problems include: First, Office applications (such as Word and Excel) crash when called by third-party applications (such as accounting or dental software) due to failures in the OLE automation mechanism. This indicates that simply opening Office applications manually is usually fine, but any integrated workflow will fail. Second, the Recycle Bin interface displays incorrect internal storage names (e.g., $Rxxxxx.ext) instead of the original file names, causing user confusion. Furthermore, reports indicate that some commercial PCs (especially HP models) may encounter startup failures, BSOD (Blue Screen of Death), BitLocker recovery screen, or Secure Boot validation errors after installing this update. Users are advised to be aware of these functional anomalies and to exercise particular caution when deleting files and integrating applications until Microsoft provides a fix.",
    tags_en: ["Windows 11", "KB5094126", "Office Applications", "OLE Automation", "BSOD", "BitLocker"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/21/microsoft-confirms-issues-in-windows-11-kb5094126-june-2026-update", lang: "EN" }
    ]
  },
  {
    id: "20260620-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WordPress 外掛 Gravity SMTP 遭利用 CVE-2026-4020 資訊洩露，可竊取 API 金鑰與系統配置",
    summary: "資安研究公司 Wordfence 警告，WordPress 外掛 Gravity SMTP 存在一個中等嚴重性（CVSS 5.3）的資訊洩露漏洞 CVE-2026-4020。此漏洞位於一個 REST API 端點，由於其權限檢查機制不嚴謹，允許未經身份驗證的攻擊者透過附加特定查詢參數，強制執行內部資料填充，從而導致伺服器回傳包含大量敏感資訊的 JSON 格式報告。\n\n攻擊者可藉此竊取包括 PHP 版本、網頁伺服器版本、資料庫類型、所有已安裝外掛版本、WordPress 配置細節，以及最關鍵的第三方 API 金鑰和 OAuth token（如 Amazon SES、Google 等）。這些資訊不僅可讓攻擊者了解網站的完整軟體堆疊，更可直接用於惡意發送郵件或規劃後續攻擊。\n\n開發者已發布修補程式，建議所有使用 Gravity SMTP 外掛並配置了第三方電子郵件整合的網站擁有者，應立即升級至最新版本 2.1.5。此外，強烈建議立即輪換所有受影響的第三方 API 憑證，並檢查伺服器日誌是否有來自已知惡意 IP 地址的異常請求。",
    tags: ["Gravity SMTP", "WordPress", "CVE-2026-4020", "資訊洩露", "API 金鑰", "Wordfence"],
    title_en: "WordPress Plugin Gravity SMTP Exploited via CVE-2026-4020 Information Leakage, Allowing Theft of API Keys and System Configurations",
    summary_en: "Security research company Wordfence warns that the WordPress plugin Gravity SMTP has a medium severity (CVSS 5.3) information leakage vulnerability, CVE-2026-4020. This vulnerability resides in a REST API endpoint. Due to insufficient permission checks, it allows unauthenticated attackers to force internal data filling by appending specific query parameters, causing the server to return a JSON report containing a large amount of sensitive information.\n\nAttackers can exploit this to steal information including the PHP version, web server version, database type, all installed plugin versions, WordPress configuration details, and most critically, third-party API keys and OAuth tokens (such as Amazon SES, Google, etc.). This information not only allows attackers to understand the website's complete software stack but can also be directly used for malicious email sending or planning subsequent attacks.\n\nThe developer has released a patch, and owners of all websites using the Gravity SMTP plugin and configured with third-party email integrations are advised to immediately upgrade to the latest version 2.1.5. Furthermore, it is strongly recommended to immediately rotate all affected third-party API credentials and check server logs for unusual requests originating from known malicious IP addresses.",
    tags_en: ["Gravity SMTP", "WordPress", "CVE-2026-4020", "Information Leakage", "API Key", "Wordfence"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/hackers-exploit-gravity-smtp-wordpress.html", lang: "EN" }
    ]
  },
  {
    id: "20260620-011",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布設備管理標準轉型：從傳統配置到聲明式管理（Declarative Management）",
    summary: "本文討論了 Apple 在 macOS 27 和 iOS 27 版本中，設備管理（MDM）的重大趨勢轉變。Apple 正將傳統的、基於步驟的設備配置（legacy configurations）轉移到聲明式管理（Declarative Management）模型。這不僅是一個未來規劃，而是已經成為新的標準。透過引入聲明式模型和強大的原生控制，Apple 旨在為 IT 部門提供更高效、更自動化的工具，以管理和保護 Apple 設備。這代表企業級的設備部署和維護流程將迎來一次重大升級，要求 IT 專業人員必須掌握新的管理模式。",
    tags: ["Apple", "macOS 27", "iOS 27", "MDM", "聲明式管理", "設備管理"],
    title_en: "Apple Announces Shift in Device Management Standards: From Traditional Configuration to Declarative Management",
    summary_en: "This article discusses a major trend shift in Mobile Device Management (MDM) within Apple's macOS 27 and iOS 27 versions. Apple is transitioning traditional, step-based device configurations (legacy configurations) to a Declarative Management model. This is not merely a future plan, but has become the new standard. By introducing the declarative model and robust native controls, Apple aims to provide IT departments with more efficient and automated tools for managing and securing Apple devices. This represents a major upgrade for enterprise-level device deployment and maintenance processes, requiring IT professionals to master the new management paradigm.",
    tags_en: ["Apple", "macOS 27", "iOS 27", "MDM", "Declarative Management", "Device Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/20/apple-work-the-era-of-legacy-mdm-is-over-and-declarative-management-is-the-new-standard", lang: "EN" }
    ]
  },
  {
    id: "20260620-012",
    trackers: ["os"],
    category: "Apple",
    title: "【App推薦】Brink：為 iPhone 打造功能豐富的播客收聽體驗",
    summary: "本文介紹了一款名為 Brink 的 iOS 應用程式，旨在提升用戶的播客收聽體驗。該應用程式被描述為功能豐富，除了基本的播客收聽功能外，還整合了新聞分頁、播客摘要、熱門播客推薦、AI 播放清單等進階功能。它特別強調了其在 iOS 26 和 Liquid Glass 介面上的優化與良好運行感受，適合希望提升數位內容消費體驗的用戶。本內容屬於應用程式推薦，並未提及任何安全漏洞、CVE 或修補建議，因此不提供實務修補指引。",
    tags: ["Brink", "iOS", "播客應用", "iPhone", "iOS 26", "App Store"],
    title_en: "[App Recommendation] Brink: A Feature-Rich Podcast Listening Experience for iPhone",
    summary_en: "This article introduces an iOS application called Brink, designed to enhance the user's podcast listening experience. The application is described as feature-rich, integrating advanced functionalities beyond basic podcast listening, such as a news feed, podcast summaries, popular podcast recommendations, and AI playlists. It specifically highlights its optimization and smooth performance on iOS 26 and the Liquid Glass interface, making it suitable for users looking to improve their digital content consumption experience. As this content is an application recommendation and does not mention any security vulnerabilities, CVEs, or patches, no practical remediation guidance is provided.",
    tags_en: ["Brink", "iOS", "Podcast App", "iPhone", "iOS 26", "App Store"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/20/indie-app-spotlight-brink-brings-a-feature-rich-experience-to-iphone-podcast-listening", lang: "EN" }
    ]
  },
  {
    id: "20260620-013",
    trackers: ["os"],
    category: "Apple",
    title: "WhatsApp 在 iOS 測試版重啟訊息動畫功能，並提供開關設定",
    summary: "WhatsApp 正在逐步將訊息動畫功能重新引入 iOS 平台。此功能此前曾於 WhatsApp 的 Android Beta 版推出，並允許用戶在「設定 > 聊天 > 動畫」中開關。在 iOS 測試版（TestFlight）中，用戶可以觀察到新的動畫效果，訊息氣泡不再是簡單出現，而是會透過淡入並輕微放大來呈現。此更新目前僅限於少量 Beta 測試用戶，尚未公開發布時間。此舉顯示 WhatsApp 正在跨平台恢復和優化其聊天介面體驗，並提供更精細的用戶控制權來管理動畫效果。",
    tags: ["WhatsApp", "iOS", "TestFlight", "訊息動畫", "Apple 平台", "UI/UX"],
    title_en: "WhatsApp Restores Message Animation Feature in iOS Beta, Offering Toggle Setting",
    summary_en: "WhatsApp is gradually reintroducing the message animation feature to the iOS platform. This feature was previously launched on the WhatsApp Android Beta version, allowing users to toggle it in 'Settings > Chats > Animations'. In the iOS TestFlight version, users can observe the new animation effect, where message bubbles no longer simply appear but instead fade in and slightly scale up. This update is currently limited to a small number of Beta testers and has no public release date. This move indicates that WhatsApp is cross-platform restoring and optimizing its chat interface experience, while providing users with finer control over managing the animation effects.",
    tags_en: ["WhatsApp", "iOS", "TestFlight", "Message Animation", "Apple Platform", "UI/UX"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/19/whatsapp-tests-new-animated-message-bubbles-on-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260620-014",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Microsoft 指出北韓駭客組織 Sapphire Sleet 發動 Mastra AI 供應鏈攻擊",
    summary: "Microsoft 近期調查指出，北韓國家級駭客組織 Sapphire Sleet（又稱 BlueNoroff）鎖定 npm 套件生態發動供應鏈攻擊。攻擊者先取得 Mastra AI 的維護者帳號控制權，隨後於 @mastra 範圍下發布超過 140 個遭篡改的套件版本。這些惡意套件植入了名為 easy-day-js 的假冒依賴庫，該程式庫為知名 dayjs 套件的拼寫劫持變體。當開發者安裝後，惡意程式碼會透過安裝後腳本執行混淆過的植入程式，進而下載第二階段酬載。該惡意程式具備跨平台能力，能針對 Windows、macOS 與 Linux 系統進行竊密，主要目標包括網頁瀏覽器憑證、API 金鑰及各類加密貨幣錢包擴充功能。建議開發者審視專案所使用的 npm 套件版本，並避免安裝來源不明或名稱相似的套件。",
    tags: ["Microsoft", "Sapphire Sleet", "Mastra AI", "npm", "供應鏈攻擊", "北韓駭客", "BlueNoroff", "竊密軟體"],
    title_en: "Microsoft Points to North Korean Hacker Group Sapphire Sleet for Mastra AI Supply Chain Attack",
    summary_en: "Recent Microsoft investigations indicate that the North Korean state-sponsored hacking group Sapphire Sleet (also known as BlueNoroff) targeted the npm package ecosystem to launch a supply chain attack. The attackers first gained control of Mastra AI's maintainer account, subsequently publishing over 140 tampered package versions under the @mastra scope. These malicious packages implanted a fake dependency library named easy-day-js, which is a typo-squatting variant of the well-known dayjs package. When developers installed the package, the malicious code executed an obfuscated payload via post-install scripts, subsequently downloading a second-stage payload. This malware possesses cross-platform capabilities, enabling it to steal credentials targeting Windows, macOS, and Linux systems. Primary targets include web browser credentials, API keys, and various cryptocurrency wallet extensions. Developers are advised to review the versions of npm packages used in their projects and to avoid installing packages from unknown sources or those with similar names.",
    tags_en: ["Microsoft", "Sapphire Sleet", "Mastra AI", "npm", "Supply Chain Attack", "North Korean Hackers", "BlueNoroff", "Infostealer"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/microsoft-links-mastra-ai-supply-chain-attack-to-north-korean-hackers", lang: "EN" }
    ]
  },
  {
    id: "20260620-015",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Watch 9 與 Ultra 2 洩漏細節：預計取消經典錶圈設計，並更新設計與健康功能",
    summary: "本文根據洩漏資訊，預告了三星（Samsung）即將推出的 Galaxy Watch 9 和 Galaxy Watch Ultra 2 的多項更新。在設計方面，兩款手錶預計將推出黑色、銀色和米色等多種顏色，且洩漏指出今年將不會有「經典款」（Classic）的錶圈設計。Galaxy Watch Ultra 2 的設計將更為方正（boxier），邊框更薄，側邊按鈕的橘色設計也將會改變。軟體層面，洩漏渲染圖展示了 Samsung Health 的重新設計，以及新的錶面選擇器。這些資訊主要屬於產品預告和設計趨勢，尚未涉及任何安全漏洞或技術細節。建議關注三星官方在七月活動上的正式發布。",
    tags: ["三星", "Samsung Health", "Galaxy Watch 9", "Galaxy Watch Ultra 2", "穿戴裝置", "產品洩漏"],
    title_en: "Samsung Galaxy Watch 9 and Ultra 2 Leaked Details: Expected to Drop Classic Bezel Design, with Design and Health Feature Updates",
    summary_en: "Based on leaked information, this article previews several updates for Samsung's upcoming Galaxy Watch 9 and Galaxy Watch Ultra 2. In terms of design, both watches are expected to launch in multiple colors, including black, silver, and beige, and leaks indicate that the 'Classic' bezel design will not be available this year. The Galaxy Watch Ultra 2 design is expected to be boxier, with thinner bezels, and the orange design of the side buttons will also change. On the software front, leaked renders show a redesigned Samsung Health and new watch face selectors. This information primarily concerns product previews and design trends, and does not involve any security vulnerabilities or technical details. It is recommended to follow Samsung's official announcement at the July event.",
    tags_en: ["Samsung", "Samsung Health", "Galaxy Watch 9", "Galaxy Watch Ultra 2", "Wearable Devices", "Product Leak"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/20/samsung-galaxy-watch-9-changes-leak", lang: "EN" }
    ]
  },
  {
    id: "20260620-016",
    trackers: ["os"],
    category: "Android",
    title: "Android 17 系統更新後，Pixel 手機電池續航力表現如何？用戶分享經驗與觀察",
    summary: "隨著 Android 17 正式推出，支援的 Pixel 設備用戶已可更新至 Google 的最新作業系統。本次更新強調提升效率、優化背景處理，旨在改善手機的整體續航力。根據初步觀察，Pixel 10 系列的用戶報告顯示，待機時間和螢幕開啟時間有輕微改善，但尚未達到顯著的突破性提升。然而，文章提醒用戶，電池續航力的改善效果可能受到個人使用習慣和設備老化程度的影響。雖然新系統安裝有時能清除有問題的舊應用程式或背景服務，並修補安全漏洞，但用戶仍需警惕「安慰劑效應」，過度期待新系統能神奇地解決所有電池問題。建議用戶根據自身使用情境，持續觀察電池表現，並留意是否有系統層面的優化或修補。",
    tags: ["Android 17", "Pixel", "電池續航力", "Google OS", "系統更新"],
    title_en: "How is the battery life performance of Pixel phones after the Android 17 system update? User experiences and observations",
    summary_en: "With the official launch of Android 17, users of supported Pixel devices can now update to Google's latest operating system. This update emphasizes efficiency improvements and background processing optimization, aiming to enhance overall battery life. According to preliminary observations, user reports from the Pixel 10 series indicate slight improvements in standby time and screen-on time, but these improvements have not reached a significant breakthrough. However, the article reminds users that the improvement in battery life may be affected by individual usage habits and the degree of device aging. While installing the new system can sometimes clear problematic old applications or background services, and patch security vulnerabilities, users should remain vigilant against the 'placebo effect' and not overly expect the new system to magically solve all battery issues. It is recommended that users continuously monitor battery performance based on their own usage scenarios, and pay attention to any system-level optimizations or patches.",
    tags_en: ["Android 17", "Pixel", "Battery Life", "Google OS", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/20/has-your-pixel-battery-life-improved-after-updating-to-android-17-poll", lang: "EN" }
    ]
  },
  {
    id: "20260620-017",
    trackers: ["os"],
    category: "Android",
    title: "Google 宣布 Android 17 啟動：涵蓋系統升級、Pixel 特色功能與跨平台整合趨勢",
    summary: "Google 在最新一集 Podcast 「Pixelated」中，深入探討了 Android 17 的發布細節。本次更新涵蓋了從一般系統改進到 Pixel 裝置專屬的特色功能。主要亮點包括「Pixel Screenshots」功能將支援雲端同步，提升用戶在不同設備間的資料協作能力。此外，Google 也推出了新的智慧音箱，並強調了 Android 與 iOS 之間在操作體驗上可能更為流暢的跨平台整合趨勢。這預示著未來作業系統的設計將更注重生態系統的無縫銜接與用戶體驗的提升，為開發者和資安人員提供了關注跨平台架構走向的重點。",
    tags: ["Android 17", "Google", "Pixel Screenshots", "跨平台", "作業系統更新", "智慧音箱"],
    title_en: "Google Announces Android 17 Launch: Covering System Upgrades, Pixel Features, and Cross-Platform Integration Trends",
    summary_en: "In the latest episode of the podcast \"Pixelated,\" Google delved into the release details of Android 17. This update covers everything from general system improvements to features exclusive to Pixel devices. Key highlights include the \"Pixel Screenshots\" feature supporting cloud synchronization, enhancing users' data collaboration across different devices. Furthermore, Google introduced a new smart speaker and emphasized the trend toward smoother cross-platform integration between Android and iOS in terms of operational experience. This suggests that future operating system designs will focus more on seamless ecosystem connectivity and enhanced user experience, providing developers and cybersecurity professionals with key points to monitor regarding cross-platform architecture trends.",
    tags_en: ["Android 17", "Google", "Pixel Screenshots", "Cross-Platform", "OS Update", "Smart Speaker"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/19/pixelated-105-an-android-17-summer", lang: "EN" }
    ]
  },
  {
    id: "20260620-018",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple宣布關閉三家美國實體店面：因購物中心衰退與零售業調整",
    summary: "Apple宣布永久關閉位於馬里蘭州、加州和康涅狄格州的三家實體店面，包括 Apple Towson Town Center、Apple North County 和 Apple Trumbull。公司指出，關店的主要原因是這些店面所在的購物中心面臨零售商撤離和整體商業環境衰退的困境。Apple表示，持續評估現有門市是為了確保能以最佳方式滿足客戶需求。此次關店行動引發了勞工工會的強烈批評，特別是針對在 Towson Town Center 設有工會代表的店面。工會主張這可能構成對行使勞工權利的懲罰，並對Apple的決策提出了法律層面的質疑。文章未提供具體的技術漏洞或安全資訊，僅討論公司營運與零售策略變動。",
    tags: ["Apple", "零售策略", "實體店面", "商業衰退", "勞工權益", "美國市場"],
    title_en: "Apple Announces Closure of Three US Physical Stores: Due to Mall Decline and Retail Adjustments",
    summary_en: "Apple has announced the permanent closure of three physical stores located in Maryland, California, and Connecticut: Apple Towson Town Center, Apple North County, and Apple Trumbull. The company stated that the primary reason for the closures is the difficulty faced by the shopping centers where these stores are located, due to retailer departures and overall commercial environment decline. Apple stated that it is continuously evaluating its existing stores to ensure it can best meet customer needs. This closure has drawn strong criticism from labor unions, particularly regarding the store in Towson Town Center, which has a union representative. The unions argue that this may constitute retaliation against the exercise of labor rights, and they have raised legal questions regarding Apple's decision. The article does not provide specific technical vulnerabilities or security information, only discussing corporate operational and retail strategy changes.",
    tags_en: ["Apple", "Retail Strategy", "Physical Stores", "Commercial Decline", "Labor Rights", "US Market"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/20/three-apple-stores-are-closing-for-good-today", lang: "EN" }
    ]
  },
  {
    id: "20260620-019",
    trackers: ["os"],
    category: "重點關注",
    title: "英國政府計畫使用AI臉部年齡估計系統篩檢庇護申請者，卻面臨技術偏見與準確性爭議",
    summary: "英國政府計劃從明年開始，在邊境使用臉部年齡估計（FAE）系統，對庇護申請者的年齡進行AI掃描評估。此舉旨在幫助確定申請者的年齡，特別是對於缺乏年齡證明文件的庇護者。然而，根據WIRED和Lighthouse Reports的調查，一份洩露的英國內政部報告顯示，該技術存在嚴重的偏見和準確性問題。系統在估計撒哈拉以南非洲裔人群的年齡時，表現明顯劣於其他族群。例如，報告指出，對於女性撒哈拉以南非洲裔，系統估算的年齡平均偏離了4.6年，可能導致年幼的女孩被誤判為成年人，從而剝奪其法律保護。這項技術的部署，不僅影響了最脆弱的移民群體，也引發了對政府大規模監控和技術公平性的嚴肅質疑。",
    tags: ["英國政府", "AI", "臉部年齡估計", "庇護申請者", "技術偏見", "監控技術"],
    title_en: "UK Government Plans to Use AI Face Age Estimation System to Screen Asylum Seekers, But Faces Technical Bias and Accuracy Controversy",
    summary_en: "Starting next year, the UK government plans to use a Face Age Estimation (FAE) system at the border to conduct AI scans and assess the age of asylum seekers. This initiative aims to help determine the applicants' age, particularly for those who lack age documentation. However, according to investigations by WIRED and Lighthouse Reports, a leaked UK Home Office report reveals that the technology suffers from severe bias and accuracy issues. The system performs noticeably worse when estimating the ages of people of Sub-Saharan African descent compared to other ethnic groups. For instance, the report notes that for women of Sub-Saharan African descent, the system's estimated age deviates by an average of 4.6 years, potentially leading to young girls being misclassified as adults, thereby stripping them of legal protection. The deployment of this technology not only affects the most vulnerable immigrant groups but also raises serious questions about government mass surveillance and technological fairness.",
    tags_en: ["UK Government", "AI", "Face Age Estimation", "Asylum Seekers", "Technical Bias", "Surveillance Technology"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/06/the-uk-will-scan-asylum-seekers-faces-for-age-checks-despite-knowing-the-tech-is-flawed", lang: "EN" }
    ]
  },
  {
    id: "20260620-020",
    trackers: ["os"],
    category: "重點關注",
    title: "亞馬遜資安專家：AI治理趨勢轉向「端到端責任制」，取代傳統「人為審核環節」",
    summary: "亞馬遜資安專家 Eric Brandwine 指出，傳統的「人為審核環節」（human-in-the-loop）在處理自動化和代理式 AI 系統（agentic AI）時，效率極低且難以維持紀律。他以人類在緊急醫療場景中因重複接收誤報而麻痺的現象為例，指出要求人類重複進行審批決策，最終會導致判斷力下降。因此，業界領先科技公司如亞馬遜、Google Cloud 和 Microsoft，正在重新思考 AI 治理模式。他們正從「人主導」轉向「AI 主導，由人監督」的模式。亞馬遜提出的替代方案是「端到端責任制」（accountability end to end），強調無論 AI 代理執行何種操作，最終的身份和所有權都必須追溯到人類決策者，從而確保責任歸屬清晰，並將重點放在管理和保護 AI 代理的獨立身份憑證。",
    tags: ["AI治理", "Human-in-the-loop", "Agentic AI", "亞馬遜", "責任追溯", "資安架構"],
    title_en: "Amazon Security Expert: AI Governance Trends Shift to 'End-to-End Accountability,' Replacing Traditional 'Human-in-the-Loop'",
    summary_en: "Amazon security expert Eric Brandwine points out that the traditional 'human-in-the-loop' process is highly inefficient and difficult to maintain discipline when dealing with automated and agentic AI systems. He uses the example of humans becoming desensitized in emergency medical scenarios due to repeated false alarms, noting that requiring humans to repeatedly approve decisions ultimately leads to diminished judgment. Consequently, industry leaders like Amazon, Google Cloud, and Microsoft are rethinking AI governance models. They are shifting from a 'human-led' approach to an 'AI-led, human-supervised' model. The alternative proposed by Amazon is 'accountability end to end,' which emphasizes that regardless of the actions performed by an AI agent, the final identity and ownership must be traceable back to the human decision-maker. This ensures clear accountability and focuses on managing and protecting the independent identity credentials of the AI agents.",
    tags_en: ["AI Governance", "Human-in-the-loop", "Agentic AI", "Amazon", "Accountability", "Cybersecurity Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/20/why-amazon-hates-human-in-the-loop-ai-governance/5258639", lang: "EN" }
    ]
  },
  {
    id: "20260620-021",
    trackers: ["os"],
    category: "重點關注",
    title: "英國向烏克蘭增援額外 3 萬架無人機，總計達 15 萬架",
    summary: "本文報導英國持續向烏克蘭提供軍事援助，最新批次額外增添了 3 萬架無人機。這使得英國迄今為止向烏克蘭提供的無人機總數量達到 15 萬架。這項援助屬於軍事支援範疇，旨在強化烏克蘭的防禦與戰場能力。文章未提供具體的技術細節、CVE 編號或修補建議，僅為戰略層面的軍事動態報導。實務影響為提升受援國的戰場資源和戰略威懾力。",
    tags: ["英國", "烏克蘭", "無人機", "軍事援助", "地緣政治"],
    title_en: "UK provides an additional 30,000 drones to Ukraine, bringing the total to 150,000",
    summary_en: "This article reports that the UK continues to provide military aid to Ukraine, with the latest batch adding an additional 30,000 drones. This brings the total number of drones provided by the UK to Ukraine to 150,000. This aid falls under the category of military support, aimed at strengthening Ukraine's defense and battlefield capabilities. The article does not provide specific technical details, CVE IDs, or patch recommendations; it is merely a report on strategic military developments. The practical impact is the enhancement of the recipient country's battlefield resources and strategic deterrence.",
    tags_en: ["UK", "Ukraine", "drones", "military aid", "geopolitics"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/06/20/britain-sending-ukraine-an-extra-30000-drones-now-150000-all-up/5258833", lang: "EN" }
    ]
  },
  {
    id: "20260620-022",
    trackers: ["os"],
    category: "重點關注",
    title: "Edge瀏覽器新增Google帳號登入選項，Microsoft正逐步放寬對MSA的強制要求",
    summary: "Microsoft正逐步放寬對Microsoft帳號（MSA）的強制要求，這在Edge瀏覽器上體現得最為明顯。Edge將在2026年7月開始逐步推出支援使用Google帳號登入的功能，適用於Windows和macOS平台。這允許用戶將Google帳號作為Edge的個人資料身份，無需強制綁定MSA。此功能旨在降低用戶從Chrome轉移至Edge的門檻，特別是對於已將密碼、書籤和瀏覽紀錄與Google帳號綁定的用戶。此外，文章指出Microsoft也在考慮放寬Windows 11的首次開機體驗（OOBE）中強制要求使用MSA的限制。這標誌著Microsoft在生態系策略上的重大轉變，讓用戶在不強制使用MSA的情況下，也能順利使用Edge等產品。企業管理員仍可透過NonMicrosoftAccountSignInEnabled策略控制此功能。",
    tags: ["Microsoft Edge", "Google 帳號", "MSA", "Windows 11", "生態系", "用戶體驗"],
    title_en: "Edge Browser Adds Google Account Login Option; Microsoft Gradually Eases Mandatory MSA Requirements",
    summary_en: "Microsoft is gradually easing mandatory requirements for Microsoft Accounts (MSA), which is most evident in the Edge browser. Edge will begin rolling out support for using Google accounts for login starting in July 2026, applicable to both Windows and macOS platforms. This allows users to use their Google account as their personal identity within Edge, without being forced to link an MSA. This feature aims to lower the barrier for users transitioning from Chrome to Edge, especially for those who have already linked passwords, bookmarks, and browsing history to their Google account. Furthermore, the article notes that Microsoft is also considering relaxing the mandatory MSA requirement during the Out-of-Box Experience (OOBE) for Windows 11. This marks a significant shift in Microsoft's ecosystem strategy, allowing users to smoothly use products like Edge without being forced to use an MSA. Enterprise administrators can still control this feature via the NonMicrosoftAccountSignInEnabled policy.",
    tags_en: ["Microsoft Edge", "Google Account", "MSA", "Windows 11", "Ecosystem", "User Experience"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/20/microsoft-is-killing-the-microsoft-account-lock-in-across-products-windows-11-may-be-next", lang: "EN" }
    ]
  }
];
