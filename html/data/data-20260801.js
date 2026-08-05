// data-20260801.js — 2026-08-01
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-01"] = [
  {
    id: "20260801-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 核心安全更新：修補 DSA-6409-1 相關的資訊洩漏與權限提升漏洞",
    summary: "Debian 安全團隊發布了關於 DSA-6409-1 的安全公告，修補了核心元件中潛在的資訊洩漏與權限提升漏洞。該漏洞可能允許攻擊者在特定條件下，從低權限進程提升至更高權限，或竊取敏感系統資訊。修補措施已包含在最新的 Debian 安全更新中。建議所有使用 Debian 系統的用戶和系統管理員，應立即透過系統更新機制（如 apt update/upgrade）修補核心元件，以防止被惡意利用。由於原文未提供具體的 CVSS 分數、受影響版本範圍或影響台數，建議用戶應密切關注 Debian 官方的詳細公告，並確保系統保持在最新、最安全的狀態。",
    tags: ["Debian", "DSA-6409-1", "Linux 核心", "安全更新", "資訊洩漏", "權限提升"],
    title_en: "Debian Core Security Update: Patching Information Leakage and Privilege Escalation Vulnerabilities Related to DSA-6409-1",
    summary_en: "The Debian security team has issued a security advisory regarding DSA-6409-1, patching potential information leakage and privilege escalation vulnerabilities within core components. This vulnerability could potentially allow an attacker, under specific conditions, to escalate privileges from a low-privilege process to a higher one, or to steal sensitive system information. The patch has been included in the latest Debian security updates. All users and system administrators running Debian systems are advised to immediately patch the core components using the system update mechanism (such as apt update/upgrade) to prevent malicious exploitation. Since the original text did not provide specific CVSS scores, affected version ranges, or the number of affected systems, users are advised to closely monitor the official Debian announcements and ensure their systems remain in the latest and most secure state.",
    tags_en: ["Debian", "DSA-6409-1", "Linux Kernel", "Security Update", "Information Leakage", "Privilege Escalation"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00320.html", lang: "EN" }
    ]
  },
  {
    id: "20260801-002",
    trackers: ["os"],
    category: "Linux",
    title: "資安警訊：資深 Arch Linux 開發者 Foxboron 宣布離職，多個核心套件需尋新維護者",
    summary: "資深 Arch Linux 開發者 Morten Linderud（代號 Foxboron）宣布從 Arch Linux 專案退居幕後。他在專案中服務了十年，曾負責 Arch Linux 的除錯套件、Git 遷移等重要工作，並在安全團隊擔任成員。Foxboron 的離職，使得許多關鍵的 Arch Linux 套件面臨維護空窗期。這些需要新維護者接手的套件包括 `mkinitcpio`、`Bolt`、`nvme-cli`、`Pacman`、`arch-install-scripts`、`archlinux-keyring` 等，其中他曾是 `WPA_Supplicant` 和 `fsverity-utils` 等套件的唯一維護者。雖然他仍計劃繼續在 TPM、Secure Boot 等開源安全領域工作，但其離開對 Arch Linux 的維護鏈和套件穩定性構成潛在風險，開發者和維護者需關注這些關鍵套件的交接與維護規劃。",
    tags: ["Arch Linux", "Morten Linderud", "Foxboron", "Linux 核心", "套件維護", "資安供應鏈"],
    title_en: "Security Alert: Senior Arch Linux Developer Foxboron Announces Departure, Multiple Core Packages Need New Maintainers",
    summary_en: "Senior Arch Linux developer Morten Linderud (alias Foxboron) has announced his departure from the Arch Linux project. He served the project for ten years, handling critical tasks such as Arch Linux's debugging packages and Git migration, and was also a member of the security team. Foxboron's departure leaves many key Arch Linux packages facing a maintenance vacuum. These packages requiring new maintainers include `mkinitcpio`, `Bolt`, `nvme-cli`, `Pacman`, `arch-install-scripts`, and `archlinux-keyring`. Notably, he was the sole maintainer for packages such as `WPA_Supplicant` and `fsverity-utils`. Although he plans to continue working in open-source security areas like TPM and Secure Boot, his departure poses a potential risk to Arch Linux's maintenance chain and package stability. Developers and maintainers must pay attention to the handover and maintenance planning for these critical packages.",
    tags_en: ["Arch Linux", "Morten Linderud", "Foxboron", "Linux Kernel", "Package Maintenance", "Cybersecurity Supply Chain"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Arch-Linux-Foxboron", lang: "EN" }
    ]
  },
  {
    id: "20260801-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc6 修正 Western Digital SATA 驅動器問題：強制停用 LPM 解決硬碟離線故障",
    summary: "本篇報告針對 Linux 核心的硬體相容性修復，特別關注 Western Digital (WD) 品牌的 SATA 儲存設備。由於 Link Power Management (LPM) 的功耗管理行為，多款 WD 驅動器在較新版本的 Linux 核心中會出現 SATA 匯流排隨時間離線的故障。LPM 本身是為降低功耗而設計的，但導致了設備不穩定。在 Linux 7.2-rc6 版本中，核心開發者已將特定型號的 WD 驅動器（包括用於 NAS 的 10TB Red Plus SATA HDD 和 3.5-inch Red Plus Pro）預設列入黑名單，強制禁用 LPM，以確保這些設備能穩定運作。此外，另一個 WD Green 2.5 驅動器也獲得了類似修復。對於尚未升級到最新核心的使用者，可透過在啟動時加入 `libata.force=nolpm` 參數來暫時解決此問題，但需注意禁用 LPM 會損失潛在的功耗節省（約 0.5~1.5W/顆）。這些修復已合併至 7.2-rc6，穩定版預計於八月發布。",
    tags: ["Linux 核心", "Western Digital", "SATA", "LPM", "Linux 7.2-rc6", "硬體相容性"],
    title_en: "Linux 7.2-rc6 Fixes Western Digital SATA Drive Issue: Forcing LPM Disable Resolves Hard Drive Offline Failure",
    summary_en: "This report addresses a hardware compatibility fix for the Linux kernel, specifically concerning Western Digital (WD) brand SATA storage devices. Due to the power management behavior of Link Power Management (LPM), multiple WD drives experience SATA bus offline failures over time when running on newer Linux kernel versions. While LPM is designed to reduce power consumption, it is causing device instability. In the Linux 7.2-rc6 version, kernel developers have pre-blacklisted specific models of WD drives (including the 10TB Red Plus SATA HDD and 3.5-inch Red Plus Pro used for NAS) and forced the disabling of LPM to ensure stable operation. Additionally, another WD Green 2.5 drive has received a similar fix. For users who have not yet upgraded to the latest kernel, this issue can be temporarily resolved by adding the `libata.force=nolpm` parameter at boot, though users should note that disabling LPM will result in a loss of potential power savings (approximately 0.5~1.5W/drive). These fixes have been merged into 7.2-rc6, with the stable release expected in August.",
    tags_en: ["Linux Kernel", "Western Digital", "SATA", "LPM", "Linux 7.2-rc6", "Hardware Compatibility"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc6-ATA", lang: "EN" }
    ]
  },
  {
    id: "20260801-004",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 專案推動 RFC 流程規範，並應對大量 AI 生成的低品質 Shell 擴充功能",
    summary: "GNOME 專案正在強化其治理流程，透過建立正式的 Request For Comments (RFC) 流程來提升專案的規範性。相關的草案提案已在 GNOME Discourse 上公開討論，旨在為整個 GNOME 專案提供統一的提案機制。此外，GNOME 團隊也面臨一個挑戰，即其 Shell 擴充功能審核隊列被大量由 AI 生成的低品質代碼所充斥，這些擴充功能常帶有相同的不良實踐。為改善 AI 生成的 JavaScript 代碼品質，團隊已發布相關的討論文章。在功能更新方面，GNOME 51 版本已開始進入 API/ABI、功能和 UI 的凍結階段，預示著開發的成熟階段。同時，一個名為 ChromaLeon 的新擴充功能也已發布，可根據桌布自動生成強調色來美化 GNOME Shell 與應用程式。",
    tags: ["GNOME", "RFC", "GNOME Shell", "Linux 桌面環境", "GNOME 51", "AI 生成代碼"],
    title_en: "GNOME Project Implements RFC Process Standards and Addresses Flood of Low-Quality AI-Generated Shell Extensions",
    summary_en: "The GNOME Project is strengthening its governance processes by establishing a formal Request For Comments (RFC) process to enhance project standardization. Draft proposals have been publicly discussed on the GNOME Discourse, aiming to provide a unified proposal mechanism for the entire GNOME project. Furthermore, the GNOME team faces a challenge: the Shell extension review queue is being flooded with a large volume of low-quality, AI-generated code, many of which contain similar poor practices. To improve the quality of AI-generated JavaScript code, the team has published related discussion articles. In terms of feature updates, GNOME 51 has entered the API/ABI, feature, and UI freeze stage, signaling a mature development phase. Concurrently, a new extension called ChromaLeon has been released, which automatically generates accent colors based on the wallpaper to enhance the GNOME Shell and applications.",
    tags_en: ["GNOME", "RFC", "GNOME Shell", "Linux Desktop Environment", "GNOME 51", "AI-Generated Code"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-RFC-Process-AI-Extensions", lang: "EN" }
    ]
  },
  {
    id: "20260801-005",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 顯著提升 Linux 多顯示器與 eGPU 效能，優化 KWin 影像處理",
    summary: "KDE Plasma 6.8 版本針對 Linux 上的多顯示器（Multi-GPU）和外部顯示卡（eGPU）使用情境進行了重大效能優化。主要改進由 Xaver Hugl 實作，透過在 KWin 中支援 DMA-BUF v6，讓 KWin 能夠直接管理多 GPU 複製，並執行直接掃描輸出（direct scan-out）。這機制能避免不必要的影像複製，大幅提升效能。測試結果顯示，在外部 GPU 測試中，幀率從 40 FPS 提升至 120 FPS；在運行《電馭叛客 2077》時，幀率從 27 FPS 提升至 50 FPS。此外，Plasma 6.8 的系統設定介面也新增了支援使用方向鍵逐像素移動螢幕的佈局編輯功能。另有 KDE Frameworks 6.29 修復了在接收包含大量 Emoji 的通知時可能導致 Plasma 凍結的問題。",
    tags: ["KDE Plasma", "Linux", "KWin", "eGPU", "DMA-BUF", "Plasma 6.8", "多顯示器"],
    title_en: "KDE Plasma 6.8 Significantly Boosts Linux Multi-Display and eGPU Performance with KWin Image Processing Optimization",
    summary_en: "The KDE Plasma 6.8 version introduces major performance optimizations for multi-display (Multi-GPU) and external GPU (eGPU) usage scenarios on Linux. The primary improvements were implemented by Xaver Hugl, who enabled KWin to support DMA-BUF v6. This allows KWin to directly manage multi-GPU replication and perform direct scan-out. This mechanism avoids unnecessary image copying, significantly boosting performance. Testing results show that in external GPU tests, the frame rate increased from 40 FPS to 120 FPS; and when running Cyberpunk 2077, the frame rate increased from 27 FPS to 50 FPS. Additionally, the Plasma 6.8 system settings interface now includes a layout editing feature that supports pixel-by-pixel screen movement using arrow keys. Furthermore, KDE Frameworks 6.29 fixed an issue where receiving notifications containing a large number of emojis could cause Plasma to freeze.",
    tags_en: ["KDE Plasma", "Linux", "KWin", "eGPU", "DMA-BUF", "Plasma 6.8", "Multi-Display"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-Faster-eGPU", lang: "EN" }
    ]
  },
  {
    id: "20260801-006",
    trackers: ["os"],
    category: "Linux",
    title: "AMD發布DCN6顯示核心Linux補丁：為下一代RDNA5 GPU奠定基礎",
    summary: "AMD近期為AMDGPU Linux驅動程式發布了顯示核心（Display Core）補丁，其中最引人注目的是開始建立下一代顯示IP「DCN6」的基礎。DCN6與預計用於下一代RDNA5圖形處理器的AMD GFX13圖形引擎相關聯。這些補丁除了擴展KUnit單元測試覆蓋範圍和修復顯示流驗證相關的程式碼外，也首次公開提及了DCN6的支援。DCN6具備新的縮放線性度、平面共存表面功能、UPSP Pre-Scaler等低階改動。雖然DCN6的參考與RDNA5（預計2027年推出）相關，但文章指出DCN5的進度尚不明確。AMD的這些開源補丁，預示著未來AMD RDNA5圖形驅動程式支援的進展，資安與開發人員應持續關注這些開源補丁的更新。",
    tags: ["AMD", "AMDGPU", "DCN6", "RDNA5", "Linux", "GPU驅動"],
    title_en: "AMD Releases DCN6 Display Core Linux Patch: Laying the Foundation for Next-Generation RDNA5 GPU",
    summary_en: "AMD recently released a Display Core patch for the AMDGPU Linux driver, the most notable aspect of which is the establishment of the foundation for the next-generation display IP, 'DCN6'. DCN6 is associated with the AMD GFX13 graphics engine, which is expected to be used in the next-generation RDNA5 graphics processor. In addition to expanding KUnit unit test coverage and fixing display stream validation-related code, the patch also publicly mentions support for DCN6 for the first time. DCN6 includes low-level changes such as new scaling linearity, planar co-existence surface functionality, and UPSP Pre-Scaler. Although DCN6's reference is tied to RDNA5 (expected release in 2027), the article notes that the progress of DCN5 remains unclear. These open-source patches from AMD signal the progress of future AMD RDNA5 graphics driver support, and security professionals and developers should continue to monitor updates to these open-source patches.",
    tags_en: ["AMD", "AMDGPU", "DCN6", "RDNA5", "Linux", "GPU驅動"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-DCN6-Linux-Start", lang: "EN" }
    ]
  },
  {
    id: "20260801-007",
    trackers: ["os"],
    category: "Windows",
    title: "機場指示牌顯示 Windows 啟用錯誤水印，揭示系統維護與部署的潛在問題",
    summary: "本文描述了一個非技術性的觀察案例：在倫敦希斯羅機場（Heathrow Terminal 5）的登機櫃檯指示牌上，出現了 Windows 系統的啟用（activation）水印。此水印通常出現在系統經過硬體更換或更新後需要重新啟用時。雖然作者指出，這種水印在技術層面上不太可能造成重大不良影響，但它反映了公共設施的資訊技術（IT）部署和維護狀態。對於旅客而言，在經歷了緊張的機場流程後，看到這種顯示系統未經充分維護的畫面，可能會加劇乘客的焦慮感。文章並未提及任何特定的 CVE 或技術漏洞，僅以一個日常觀察來諷刺大型公共機構（如希斯羅和英國航空）在資訊系統的穩定性與專業性上可能存在的不足。",
    tags: ["Windows", "系統啟用", "IT 部署", "機場設施", "資訊安全"],
    title_en: "Airport Signage Displays Windows Activation Watermark, Revealing Potential System Maintenance and Deployment Issues",
    summary_en: "This article describes a non-technical observational case: the appearance of a Windows system activation watermark on the boarding counter signage at London Heathrow Airport (Heathrow Terminal 5). This watermark typically appears when a system requires reactivation after hardware replacement or updates. Although the author notes that this watermark is unlikely to cause significant technical issues, it reflects the IT deployment and maintenance status of public facilities. For travelers, seeing a display suggesting insufficient system maintenance, especially after going through a stressful airport process, might exacerbate passenger anxiety. The article does not mention any specific CVE or technical vulnerability, using a daily observation to satirize potential shortcomings in the stability and professionalism of information systems within large public institutions (such as Heathrow and British Airways).",
    tags_en: ["Windows", "System Activation", "IT Deployment", "Airport Facilities", "Information Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/01/unexpected-item-in-the-bagging-area-as-windows-activation-error-pops-up-at-check-in/5281946", lang: "EN" }
    ]
  },
  {
    id: "20260801-008",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 搜尋功能升級：自動學習重要資料夾並進行索引，提升檔案查找效率",
    summary: "本文介紹 Windows 11 搜尋功能的一項重大更新：「自動尋找額外相關位置」。此功能旨在解決傳統 Windows 搜尋索引範圍有限、無法自動找到用戶經常使用或新創建檔案的問題。過去，Windows 搜尋的索引通常僅限於預設的常用資料夾（如圖片、文件、桌面），用戶若需搜尋其他位置，必須手動添加或開啟「增強模式」（Enhanced mode）。然而，文章指出「增強模式」可能消耗更多系統資源，且不適合大多數使用場景。新功能透過學習用戶的檔案活動，能自動識別並將重要的資料夾納入索引範圍，讓用戶無需手動設定即可提高搜尋的準確性和效率。此外，Windows 搜尋還將進一步改善對拼寫錯誤的理解，並計劃移除 Bing 搜尋和廣告內容，這些改動預計將在今年晚些時候推出，能顯著提升本地檔案的查找體驗。",
    tags: ["Windows 11", "Windows Search", "索引", "系統功能更新", "檔案管理", "Microsoft"],
    title_en: "Windows 11 Search Feature Upgrade: Automatic Learning of Important Folders for Enhanced File Search Efficiency",
    summary_en: "This article introduces a major update to the Windows 11 Search feature: \"Automatic discovery of related locations.\" This function aims to solve the problem of traditional Windows search having limited indexing scope and failing to automatically locate files that users frequently use or newly create. Previously, Windows Search indexing was typically limited to default common folders (such as Pictures, Documents, and Desktop). If users needed to search other locations, they had to manually add or enable \"Enhanced mode.\" However, the article points out that \"Enhanced mode\" might consume more system resources and is unsuitable for most use cases. The new feature learns from user file activity, automatically identifying and including important folders within the index scope, allowing users to improve search accuracy and efficiency without manual configuration. Furthermore, Windows Search will improve its understanding of spelling errors and plans to remove Bing search and advertising content. These changes are expected to roll out later this year and are anticipated to significantly enhance the local file search experience.",
    tags_en: ["Windows 11", "Windows Search", "Indexing", "System Feature Update", "File Management", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/02/windows-11-search-will-now-learn-which-folders-matter-to-you-and-index-them-automatically", lang: "EN" }
    ]
  },
  {
    id: "20260801-009",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Photos App 進行優化，移除多餘介面雜物；但新版「Photos (Preview)」仍以 WebView2 形式自動安裝",
    summary: "本文評述了 Windows 11 Insiders 版 Photos App 的最新更新，指出該版本成功清理了介面雜物，提升了使用體驗。優化內容包括移除頂部工具列上的 Designer、Clipchamp、OneDrive 等多餘圖標，並簡化了右鍵上下文選單，使其載入速度更快、更精簡。此外，新版還增加了更豐富的檔案資訊面板、支援 HEIC 格式編輯，並透過 WASDK 多程序架構提升了啟動效能。然而，文章也指出 Microsoft 在同一更新中推送了「Photos (Preview)」應用程式。此新應用程式與 OneDrive Photos 類似，仍基於 WebView2 技術，且會自動安裝，這與 Photos App 進行的「去臃腫化」努力背道而馳，增加了系統負載和複雜性，影響了整體用戶體驗。",
    tags: ["Windows 11", "Photos App", "WebView2", "Microsoft", "Windows Insiders", "UI/UX"],
    title_en: "Windows 11 Photos App Optimized, Removing Excess Interface Clutter; But New 'Photos (Preview)' Still Automatically Installs via WebView2",
    summary_en: "This article reviews the latest update for the Windows 11 Insiders build of the Photos App, noting that the version successfully cleans up interface clutter and improves the user experience. Optimization content includes removing unnecessary icons like Designer, Clipchamp, and OneDrive from the top toolbar, and simplifying the right-click context menu for faster, more streamlined loading. Furthermore, the new version adds a richer file information panel, supports HEIC format editing, and enhances startup performance through the WASDK multi-process architecture. However, the article also points out that Microsoft pushed the 'Photos (Preview)' application in the same update. This new application is similar to OneDrive Photos, is still based on WebView2 technology, and automatically installs, which runs counter to the 'bloat reduction' efforts made in the Photos App, increasing system load and complexity, and affecting the overall user experience.",
    tags_en: ["Windows 11", "Photos App", "WebView2", "Microsoft", "Windows Insiders", "UI/UX"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/01/windows-11s-photos-app-just-got-debloated-but-microsoft-is-already-ruining-it-with-a-webview2-sequel", lang: "EN" }
    ]
  },
  {
    id: "20260801-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Coldcard硬體錢包韌體漏洞：攻擊者可透過弱熵值重現私鑰，造成數百萬美元資產損失",
    summary: "加拿大公司 Coinkite 推出的 Coldcard 比特幣硬體錢包，因韌體整合錯誤存在嚴重的私鑰生成漏洞。該漏洞導致種子生成過程未正確使用硬體隨機數生成器（RNG），而是依賴一個確定性的軟體偽隨機數生成器（PRNG）。這使得攻擊者若能確定設備的唯一識別碼（UID）、計時器狀態和歷史RNG呼叫，便可離線重現潛在的私鑰候選流。Coinkite 估計受影響設備的有效熵值遠低於標準的 128 位元，尤其在早期型號上。雖然 Coinkite 已發布緊急韌體，但僅更新韌體無法修復已洩露的種子。受影響的用戶必須在修補後的韌體上生成全新的種子，並將資金轉移。建議用戶立即檢查設備型號和韌體版本，若屬於漏洞範圍，應立即執行重新生成種子和轉移資產，以避免資產被攻擊者利用。未公開的 CVSS 分數和具體受害筆數，但已確認有大規模的資產掃蕩事件發生。",
    tags: ["Coldcard", "Coinkite", "硬體錢包", "韌體漏洞", "PRNG", "熵值", "BIP-39"],
    title_en: "Coldcard Hardware Wallet Firmware Vulnerability: Attackers Can Reproduce Private Keys Using Weak Entropy, Causing Millions of Dollars in Losses",
    summary_en: "The Coldcard Bitcoin hardware wallet, developed by Canadian company Coinkite, contains a critical private key generation vulnerability due to firmware integration errors. This vulnerability causes the seed generation process to incorrectly rely on a deterministic software pseudo-random number generator (PRNG) instead of a hardware random number generator (RNG). This allows an attacker, if they can determine the device's unique identifier (UID), timer state, and historical RNG calls, to reproduce a potential stream of private key candidates offline. Coinkite estimates that the effective entropy of affected devices is significantly lower than the standard 128 bits, especially in early models. Although Coinkite has released an emergency firmware, merely updating the firmware cannot fix already leaked seeds. Affected users must generate entirely new seeds on the patched firmware and transfer their funds. Users are advised to immediately check their device model and firmware version; if within the vulnerable scope, they must immediately regenerate seeds and transfer assets to prevent attackers from exploiting the assets. While the CVSS score and specific number of affected users are not public, a large-scale asset draining incident has been confirmed.",
    tags_en: ["Coldcard", "Coinkite", "Hardware Wallet", "Firmware Vulnerability", "PRNG", "Entropy", "BIP-39"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260801-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Adobe 釋出安全更新：修補 Campaign Classic 與 Adobe Bridge 多項高危漏洞，包含任意程式碼執行風險",
    summary: "Adobe 發布安全更新，修補其企業級行銷自動化平台 Campaign Classic (ACC) 的多項嚴重漏洞。其中，CVE-2026-48449 是一個最高嚴重性（CVSS 10.0）的錯誤授權缺陷，可能導致無需使用者互動即可執行任意程式碼。此外，ACC 還修補了另一個高嚴重性（CVSS 8.6）的 SQL 注入漏洞，可能導致任意檔案讀取。對於 Adobe Bridge，Adobe 同時修補了八個關鍵漏洞，包括 CVE-2026-48395、CVE-2026-48396 等，這些漏洞涉及不可信搜尋路徑、錯誤授權和越界寫入，均可能導致任意程式碼執行或權限提升。Adobe 建議用戶立即升級至 ACC v7: 7.4.3 build 9398，以確保系統安全。",
    tags: ["Adobe", "Campaign Classic", "Adobe Bridge", "CVE-2026-48449", "CVE-2026-48395", "任意程式碼執行"],
    title_en: "Adobe Releases Security Update: Patches High-Risk Vulnerabilities in Campaign Classic and Adobe Bridge, Including Arbitrary Code Execution Risk",
    summary_en: "Adobe has released a security update to patch multiple critical vulnerabilities in its enterprise marketing automation platform, Campaign Classic (ACC). Among these, CVE-2026-48449 is a high-severity (CVSS 10.0) authorization flaw that could allow arbitrary code execution without user interaction. Furthermore, ACC also patched another high-severity (CVSS 8.6) SQL injection vulnerability that could lead to arbitrary file read. For Adobe Bridge, Adobe simultaneously patched eight key vulnerabilities, including CVE-2026-48395 and CVE-2026-48396. These vulnerabilities involve untrusted search paths, authorization flaws, and out-of-bounds writes, all potentially leading to arbitrary code execution or privilege escalation. Adobe recommends that users immediately upgrade to ACC v7: 7.4.3 build 9398 to ensure system security.",
    tags_en: ["Adobe", "Campaign Classic", "Adobe Bridge", "CVE-2026-48449", "CVE-2026-48395", "Arbitrary Code Execution"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/adobe-campaign-classic-cvss-100-flaw.html", lang: "EN" }
    ]
  },
  {
    id: "20260801-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客劫持飯店Wi-Fi，透過偽瀏覽器更新推送RAT CornFlake，竊取用戶資料與MFA憑證",
    summary: "安全公司微軟（Microsoft）報告指出，駭客利用劫持的飯店Wi-Fi網路，透過偽造的瀏覽器更新，推送名為 CornFlake 的遠端存取木馬（RAT）。攻擊者將此活動命名為 CaptiveCrunch，並將其歸因於 Storm-2945，該組織被評估為 APT29（Midnight Blizzard）的一個子集群，而 APT29則被美國和英國政府歸因於俄羅斯外務情報局（SVR）。攻擊者透過控制網路的網關（gateway），偽造DNS解析答案，將受害者自動連線檢查引導至偽造的軟體更新頁面。CornFlake 是一個基於 Go 語言的植入物，能竊取網路攝影機影像、麥克風音訊、按鍵輸入，並能竊取瀏覽器Cookie和密碼，甚至透過註冊服務和排程任務維持持久性。此外，攻擊者還利用 ChocoShell 這種記憶體 PowerShell 竊取器，收集包含 Microsoft 365 和 Azure Active Directory 的存取和刷新 Token，使攻擊者能夠在未經瀏覽器 Cookie 的情況下執行會話重放。微軟建議用戶使用私人連線，並應透過條件式存取（Conditional Access）阻擋不必要的設備代碼認證流程。專業研究機構建議用戶應使用全通道 VPN，並拒絕透過網關提供的所有軟體更新或安全工具。",
    tags: ["CaptiveCrunch", "CornFlake", "RAT", "APT29", "Microsoft", "DNS欺騙", "MFA"],
    title_en: "Hackers hijack hotel Wi-Fi to push RAT CornFlake via fake browser update, stealing user data and MFA credentials",
    summary_en: "A report by security company Microsoft indicates that hackers utilized hijacked hotel Wi-Fi networks to push a Remote Access Trojan (RAT) named CornFlake through a fabricated browser update. The attackers named this activity CaptiveCrunch and attributed it to Storm-2945, an organization assessed as a sub-cluster of APT29 (Midnight Blizzard), which the US and UK governments attribute to the Russian Foreign Intelligence Service (SVR). The attackers controlled the network gateway and forged DNS resolution answers, guiding victims' automatic connection checks to a fake software update page. CornFlake is a Go language-based implant capable of stealing webcam footage, microphone audio, keystrokes, and can also steal browser cookies and passwords, and even maintain persistence through registered services and scheduled tasks. Furthermore, the attackers used a memory PowerShell stealer called ChocoShell to collect access and refresh tokens containing Microsoft 365 and Azure Active Directory credentials, enabling session replay without browser cookies. Microsoft advises users to use private connections and to block unnecessary device code authentication processes using Conditional Access. Professional research institutions recommend that users utilize full-tunnel VPNs and reject all software updates or security tools provided through the gateway.",
    tags_en: ["CaptiveCrunch", "CornFlake", "RAT", "APT29", "Microsoft", "DNS Spoofing", "MFA"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/hijacked-hotel-wi-fi-pushes-fake.html", lang: "EN" }
    ]
  },
  {
    id: "20260801-013",
    trackers: ["os"],
    category: "Apple",
    title: "Apple推出全新「Apple Upgrade」租賃計畫，可能取代Apple Card月付分期付款服務",
    summary: "蘋果公司近期推出了全新的「Apple Upgrade」租賃計畫，該計畫將完全取代原有的「iPhone Upgrade Program」。根據報導，新計畫的條件極具吸引力，甚至可能讓許多用戶不再需要使用Apple Card的月付分期付款服務（ACMI）。新計畫仍提供類似ACMI的3%現金回饋，且租賃條款比ACMI更為寬鬆，用戶在租期結束後，可以支付剩餘差額購買設備。這項變動顯示蘋果正在調整其產品銷售和金融服務的策略，讓用戶擁有更彈性的設備升級路徑。",
    tags: ["Apple", "Apple Upgrade", "Apple Card", "租賃計畫", "iPhone", "消費電子"],
    title_en: "Apple Launches New 'Apple Upgrade' Rental Plan, Potentially Replacing Apple Card Installment Payments",
    summary_en: "Apple recently introduced a brand-new 'Apple Upgrade' rental plan, which is set to completely replace the existing 'iPhone Upgrade Program.' According to reports, the new plan offers highly attractive terms, potentially making the use of Apple Card Monthly Installment Payments (ACMI) unnecessary for many users. The new plan still offers a similar 3% cash rebate to ACMI, and its rental terms are more flexible than ACMI. After the rental period ends, users can pay the remaining balance to purchase the device. This change indicates that Apple is adjusting its product sales and financial service strategies, providing users with a more flexible path for device upgrades.",
    tags_en: ["Apple", "Apple Upgrade", "Apple Card", "Rental Plan", "iPhone", "Consumer Electronics"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/01/apple-upgrade-will-it-replace-apple-card-monhtly-installments", lang: "EN" }
    ]
  },
  {
    id: "20260801-014",
    trackers: ["os"],
    category: "Apple",
    title: "新應用程式 Overflight：iPhone、iPad 與 Apple TV 整合的空域雷達應用",
    summary: "本文介紹一款名為 Overflight 的獨立開發應用程式，該應用程式專為 iPhone、iPad 和 Apple TV 設計。它提供使用者一個直觀的介面，用來追蹤當前空域上飛行的飛機資訊。使用者可以了解這些飛機的具體位置、預計航向，以及其他相關的航空資料。這款應用程式屬於生活實用型工具，而非資安產品，主要功能是提供即時的空域監測與資訊展示。對於對航空或空域資訊有興趣的用戶來說，這是一款值得關注的應用程式。",
    tags: ["Overflight", "iPhone", "iPad", "Apple TV", "空域雷達", "應用程式"],
    title_en: "New Application Overflight: Airspace Radar App Integrated for iPhone, iPad, and Apple TV",
    summary_en: "This article introduces an independent application called Overflight, which is designed for iPhone, iPad, and Apple TV. It provides users with an intuitive interface to track information on aircraft currently flying in the airspace. Users can learn the specific location, estimated course, and other relevant aviation data for these aircraft. This application is a lifestyle utility tool, not a cybersecurity product, and its main function is to provide real-time airspace monitoring and information display. It is an application worth paying attention to for users interested in aviation or airspace information.",
    tags_en: ["Overflight", "iPhone", "iPad", "Apple TV", "Airspace Radar", "Application"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/01/indie-app-spotlight-overflight-lets-you-glance-at-what-planes-are-flying-above-you", lang: "EN" }
    ]
  },
  {
    id: "20260801-015",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Mac Studio 即將升級：預計搭載 M5/M7 晶片，提升 AI 運算與記憶體支援",
    summary: "本文預測 Apple Mac Studio 將進行兩階段的重大升級。近期（預計今年秋季）將推出搭載 M5 Max 與 M5 Ultra 的新機型，旨在大幅提升效能。M5 Ultra 預計具備高達 36 個 CPU 核心和 80 個 GPU 核心，相較於現有的 M3 Ultra 機型有顯著提升。此外，文章更展望到 2028 年的 M7 Max 與 M7 Ultra 世代，指出 M7 系列晶片預計在 AI 運算方面會有巨大飛躍，特別適合運行裝置端大型語言模型（LLMs）。M7 Ultra 的升級重點包括新的散熱器以維持持續效能，以及支援高達 1.5TB 的統一記憶體，這將使其性能追平 2019 年 Mac Pro 的水準。然而，所有關於記憶體容量（如 768GB 或 1.5TB）的提升，都受制於供應鏈的限制。",
    tags: ["Apple", "Mac Studio", "M5 Ultra", "M7 Max", "AI 運算", "統一記憶體"],
    title_en: "Apple Mac Studio Upgrade Imminent: Expected to Feature M5/M7 Chips, Boosting AI Computing and Memory Support",
    summary_en: "This article predicts a major two-phase upgrade for the Apple Mac Studio. A new model featuring the M5 Max and M5 Ultra is expected to be launched soon (anticipated this autumn), aiming for a significant performance boost. The M5 Ultra is projected to feature up to 36 CPU cores and 80 GPU cores, representing a noticeable improvement over the current M3 Ultra model. Furthermore, the article looks ahead to the M7 Max and M7 Ultra generations in 2028, noting that the M7 series chips are expected to achieve a massive leap in AI computing, making them particularly suitable for running on-device Large Language Models (LLMs). Key upgrades for the M7 Ultra include new cooling systems to maintain sustained performance and support up to 1.5TB of unified memory, which would bring its performance level up to par with the 2019 Mac Pro. However, all increases in memory capacity (such as 768GB or 1.5TB) are subject to supply chain limitations.",
    tags_en: ["Apple", "Mac Studio", "M5 Ultra", "M7 Max", "AI Computing", "Unified Memory"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/01/heres-what-to-come-with-the-next-apple-mac-studio-refresh", lang: "EN" }
    ]
  },
  {
    id: "20260801-016",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27重大介面變動：Siri AI接管頂部邊緣，改變通知中心（Notification Center）的呼叫手勢",
    summary: "Apple在iOS 27和iPadOS 27中進行了重大使用者介面（UI）調整，特別是針對通知中心（Notification Center）的呼叫手勢。自iOS 5以來，通知中心一直是手機的重要功能。在iOS 27中，為了優先提升Siri AI的存取性，Apple將頂部邊緣的大部分區域用於啟動新的Siri體驗。這導致了通知中心原本的呼叫手勢發生改變：原本從頂部左側滑動（swipe down from the top-left corner）仍可使用，但現在用戶需要適應新的介面佈局，通知提醒將從左上角動畫進入。此外，在iPadOS 27 beta 2中，Apple進一步優化了介面，使通知中心和控制中心（Control Center）在左右兩側形成更統一的區域。這項變動雖然改變了用戶長達15年的操作習慣，但整體趨勢是將核心功能（如通知）的空間壓縮到角落，以讓Siri AI佔據主導地位。目前iOS 27處於開發者和公開測試版，預計下月正式發布。",
    tags: ["iOS 27", "iPadOS 27", "Apple", "Siri AI", "Notification Center", "使用者介面"],
    title_en: "Major UI Changes in iOS 27: Siri AI Takes Over Top Edge, Altering Notification Center Swipe Gesture",
    summary_en: "Apple has implemented significant User Interface (UI) adjustments in iOS 27 and iPadOS 27, particularly concerning the Notification Center swipe gesture. Since iOS 5, the Notification Center has been a crucial phone feature. In iOS 27, to prioritize enhanced accessibility for Siri AI, Apple has allocated most of the top edge area to launch a new Siri experience. This change has altered the original Notification Center swipe gesture: while swiping down from the top-left corner is still possible, users must now adapt to the new layout, as notifications will animate in from the upper left corner. Furthermore, in iPadOS 27 beta 2, Apple further optimized the interface, creating a more unified area for the Notification Center and Control Center on both the left and right sides. Although this change alters user habits spanning 15 years, the overall trend is to compress the space for core functions (such as notifications) into the corners, allowing Siri AI to take a dominant position. iOS 27 is currently in developer and public beta, and is expected to be released next month.",
    tags_en: ["iOS 27", "iPadOS 27", "Apple", "Siri AI", "Notification Center", "User Interface"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/01/ios-27-just-broke-15-years-of-muscle-memory-on-iphone-and-ipad", lang: "EN" }
    ]
  },
  {
    id: "20260801-017",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安警示：廣告技術公司 Adform 腳本遭惡意竄改，可竊取加密貨幣錢包地址",
    summary: "廣告技術公司 Adform 的追蹤腳本 `trackpoint-async.js` 遭到駭客竄改，形成瀏覽器端的惡意工具。該惡意程式碼透過共享的部署路徑，可影響到多個不相關的下游網站，構成供應鏈風險。受害者在 7 月 27 日訪問載有受影響腳本的網站，並複製了 Bitcoin、Ethereum 或 Tron 等加密貨幣地址時，可能被惡意程式碼替換成攻擊者預設的地址。該惡意腳本包含兩個主要惡意區塊：一個監控剪貼簿和頁面載入事件，試圖替換匹配的地址；另一個則掛鉤輸入框和文字區域的數值設定器，攔截複製、剪切、貼上和輸入事件，實現地址的替換。Adform 已移除惡意代碼並通知客戶，建議用戶清除瀏覽器快取，並在轉帳前仔細檢查所有錢包地址。由於攻擊範圍和時間線仍不明確，用戶應提高警覺，並在任何支付環節前驗證地址的真實性。",
    tags: ["Adform", "JavaScript", "供應鏈攻擊", "加密貨幣", "Web 漏洞", "惡意腳本"],
    title_en: "Cybersecurity Alert: Adform Script Tampered with Maliciously, Capable of Stealing Cryptocurrency Wallet Addresses",
    summary_en: "The tracking script `trackpoint-async.js` from ad-tech company Adform was tampered with by hackers, forming a malicious browser-side tool. This malicious code, through a shared deployment path, could affect multiple unrelated downstream websites, constituting a supply chain risk. When victims visited a website containing the affected script and copied cryptocurrency addresses such as Bitcoin, Ethereum, or Tron on July 27, the malicious code could replace the legitimate address with an attacker's predefined address. The malicious script contains two main malicious blocks: one monitors clipboard and page load events, attempting to replace matching addresses; the other hooks input fields and text area number pickers, intercepting copy, cut, paste, and input events to achieve address replacement. Adform has removed the malicious code and notified its clients, advising users to clear their browser cache and carefully verify all wallet addresses before transferring funds. Due to the unclear scope and timeline of the attack, users should remain vigilant and validate the authenticity of addresses before any payment process.",
    tags_en: ["Adform", "JavaScript", "Supply Chain Attack", "Cryptocurrency", "Web Vulnerability", "Malicious Script"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html", lang: "EN" }
    ]
  },
  {
    id: "20260801-018",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple MacBook Neo 銷售數據顯示，其正在快速取代傳統的 Windows 與 Chromebook 市場，搶佔 K-12 教育市場份額",
    summary: "根據 Apple 的最新財報電話會議資訊，MacBook Neo 的銷售表現令人注目。該數據顯示，MacBook Neo 正在快速地在 K-12（K-12 教育）市場中取代傳統的 Windows 和 Chromebook 設備。這項趨勢對於電子產品的定價策略和市場佔有率具有重大意義。雖然原文未提供具體的技術細節或漏洞資訊，但其市場趨勢預示著 Apple 在教育市場的產品線正在獲得更高的市場接受度。對於教育機構和企業採購者而言，這代表了設備選擇和生態系統轉型的潛在趨勢，建議相關機構應關注 Apple 在教育市場的產品策略與成本效益分析。",
    tags: ["Apple", "MacBook Neo", "K-12", "Windows", "Chromebook", "市場趨勢"],
    title_en: "Apple MacBook Neo sales data shows it is rapidly replacing traditional Windows and Chromebook market share in the K-12 education sector",
    summary_en: "According to Apple's latest earnings call information, the sales performance of the MacBook Neo is noteworthy. The data indicates that the MacBook Neo is rapidly replacing traditional Windows and Chromebook devices in the K-12 education market. This trend has significant implications for the pricing strategy and market share of electronic products. Although the original text does not provide specific technical details or vulnerability information, the market trend suggests that Apple's product line in the education market is gaining higher market acceptance. For educational institutions and enterprise purchasers, this represents a potential trend in device selection and ecosystem transformation, suggesting that relevant organizations should pay attention to Apple's product strategy and cost-benefit analysis in the education market.",
    tags_en: ["Apple", "MacBook Neo", "K-12", "Windows", "Chromebook", "Market Trend"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/01/apple-says-macbook-neo-is-pulling-schools-away-from-windows-and-chromebooks", lang: "EN" }
    ]
  },
  {
    id: "20260801-019",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple iPhone 20 週年機型傳聞：預計採用全玻璃設計，可能取代 Pro 系列",
    summary: "本文討論了關於 iPhone 20 週年機型的傳聞，指出 Apple 可能會推出一款極具革命性的全玻璃設計手機。該機型據傳將具備 7 吋顯示器，並可能首次整合螢幕下 Face ID 和鏡頭技術，從而取消 Dynamic Island。然而，文章作者質疑這款機型是否會直接取代 iPhone 17 Pro 或 iPhone 18 Pro。作者分析指出，由於 iPhone 17 Pro 已經強調了鋁合金設計以優化散熱，若 Apple 轉回全玻璃設計，可能會面臨散熱上的妥協。文章推測，未來 iPhone 系列的陣容可能包括 iPhone 19 Pro/Pro Max、20 週年機型、第二代折疊機型，以及標準版 iPhone 19/19e，而非直接取代 Pro 系列。這是一個關於產品線規劃和設計趨勢的分析，而非技術漏洞或安全公告。",
    tags: ["Apple", "iPhone 20", "全玻璃設計", "產品線規劃", "iPhone Pro", "設計趨勢"],
    title_en: "Apple iPhone 20th Anniversary Model Rumors: Expected to Feature All-Glass Design, Potentially Replacing the Pro Series",
    summary_en: "This article discusses rumors surrounding the iPhone 20th Anniversary model, suggesting Apple might launch a highly revolutionary all-glass designed phone. The rumored device is said to feature a 7-inch display and may integrate under-display Face ID and camera technology for the first time, thereby eliminating the Dynamic Island. However, the author questions whether this model will directly replace the iPhone 17 Pro or iPhone 18 Pro. The analysis points out that since the iPhone 17 Pro has already emphasized an aluminum alloy design to optimize heat dissipation, a return to an all-glass design might compromise thermal management. The article speculates that future iPhone series lineups might include the iPhone 19 Pro/Pro Max, the 20th Anniversary model, a second-generation foldable model, and a standard iPhone 19/19e, rather than directly replacing the Pro series. This is an analysis of product line planning and design trends, not a technical vulnerability or security announcement.",
    tags_en: ["Apple", "iPhone 20", "All-Glass Design", "Product Line Planning", "iPhone Pro", "Design Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/01/heres-why-iphone-20-could-actually-be-iphone-air-3", lang: "EN" }
    ]
  },
  {
    id: "20260801-020",
    trackers: ["os"],
    category: "重點關注",
    title: "Reddit CEO批評Google AI Overviews：強調深度討論價值，並考慮終止與Google的授權協議",
    summary: "Reddit執行長Steve Huffman在季度財報期間，公開對Google的AI Overviews功能表達了擔憂與批評。他認為，隨著AI將網際網路內容壓縮成摘要，人們真正渴望的是Reddit所提供的深度討論、熱情辯論和第一手經驗，而非自動化的總結。Huffman指出，當資訊過剩時，挑戰已從「找到內容」轉變為「找到脈絡、個人觀點和第一手帳目」。他進一步比較了AI Overviews與傳統的「10個藍色連結」模式，認為後者為生態系統帶來了巨大的價值增長。據報導，Reddit此前與Google有高額的授權協議，但現在正考慮終止該協議。此外，多家知名出版商，包括《經濟學人》和《路透社》，也正考慮與Google切割關係，顯示業界對AI內容整合模式的普遍質疑。",
    tags: ["Reddit", "Google", "AI Overviews", "內容生態", "授權協議", "資訊過載"],
    title_en: "Reddit CEO Criticizes Google AI Overviews: Emphasizes Value of Deep Discussion and Considers Terminating Licensing Agreement with Google",
    summary_en: "During the quarterly earnings report, Reddit CEO Steve Huffman publicly expressed concern and criticism regarding Google's AI Overviews feature. He argued that as AI compresses internet content into summaries, what people truly crave is the deep discussion, passionate debate, and firsthand experience provided by Reddit, rather than automated summaries. Huffman pointed out that when information is abundant, the challenge has shifted from 'finding content' to 'finding context, personal viewpoints, and firsthand accounts.' He further compared AI Overviews to the traditional '10 blue links' model, arguing that the latter brings immense value to the ecosystem. Reports indicate that while Reddit previously had a high-value licensing agreement with Google, it is now considering terminating this agreement. Furthermore, several major publishers, including the Economist and Reuters, are also considering distancing themselves from Google, reflecting industry-wide skepticism toward AI content integration models.",
    tags_en: ["Reddit", "Google", "AI Overviews", "Content Ecosystem", "Licensing Agreement", "Information Overload"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/08/reddit-ceo-on-ai-overviews-were-still-looking-for-that-win-win", lang: "EN" }
    ]
  },
  {
    id: "20260801-021",
    trackers: ["os"],
    category: "重點關注",
    title: "法院下令 Waymo 停止在聖莫尼卡夜間運營自動駕駛充電站，因涉嫌造成公共滋擾",
    summary: "在聖莫尼卡市（Santa Monica）持續的公共滋擾訴訟中，當地法院已裁定 Waymo 無法在特定地點夜間使用其充電設施。洛杉磯高等法院的法官批准了聖莫尼卡市政府的初步禁令動議。市政府和鄰居主張，自動駕駛車輛在充電站的持續運營，造成了光線、噪音污染，並導致街道和巷道過度的交通擁堵，構成集體困擾。法院下達的禁令規定，Waymo 不得在 Broadway 街的特定充電站（位於 12th 和 Euclid 街之間）於晚上 11 點至早上 6 點之間運營。該充電站鄰近私人學校和住宅區，長期以來引發了居民的持續投訴。禁令生效後，當地居民已感受到環境改善，噪音和車輛活動明顯減少。",
    tags: ["Waymo", "聖莫尼卡", "自動駕駛", "公共滋擾", "法規限制", "自動車輛"],
    title_en: "Court Orders Waymo to Cease Nighttime Operation of Self-Driving Charging Station in Santa Monica Due to Alleged Public Nuisance",
    summary_en: "In ongoing public nuisance litigation in Santa Monica, the local court has ruled that Waymo cannot operate its charging facilities at certain locations during nighttime hours. A judge at the Los Angeles Superior Court approved the Santa Monica city government's preliminary injunction motion. The city government and neighbors argued that the continuous operation of autonomous vehicles at the charging station caused light and noise pollution, and led to excessive traffic congestion in streets and alleys, constituting a collective nuisance. The court's injunction stipulates that Waymo may not operate the specific charging station on Broadway between 12th and Euclid Streets between 11 PM and 6 AM. This charging station is near private schools and residential areas, and has long been the source of continuous resident complaints. Since the injunction took effect, local residents have felt an environmental improvement, with noticeable reductions in noise and vehicle activity.",
    tags_en: ["Waymo", "Santa Monica", "Autonomous Driving", "Public Nuisance", "Regulatory Restriction", "Automobile"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/after-noise-complaints-judge-orders-waymo-to-stop-overnight-charging-in-santa-monica", lang: "EN" }
    ]
  },
  {
    id: "20260801-022",
    trackers: ["os"],
    category: "重點關注",
    title: "Defcon 推出 Baochip-1x：新型開源晶片，旨在提升計算安全與透明度",
    summary: "在年度 Defcon 黑客大會上，今年的參會徽章採用了創新的硬體安全晶片 Baochip-1x。該晶片由資深硬體駭客 Andrew Huang 設計，其核心目標是提升計算領域的安全性、透明度與可信賴性。Baochip-1x 是一個「大部分」開源的微控制器，其設計涵蓋了操作系統、韌體、處理器核心、加密引擎和輸入/輸出系統等各個組件。Huang 已將所有相關的原始碼公開發佈於 GitHub，供研究人員進行檢視與使用。更具突破性的是，該晶片採用了可供研究人員「透視」內部結構的封裝，讓外部人員可以直接檢查矽晶片，以驗證其是否與公開的設計圖一致，從而避免了對製造過程的盲目信任。該晶片的核心模組甚至可以從徽章中取出，作為會議後的硬體安全令牌使用，展現了其實用性和可擴展性。",
    tags: ["Defcon", "Baochip-1x", "硬體安全", "開源晶片", "透明度", "微控制器"],
    title_en: "Defcon Launches Baochip-1x: A Novel Open-Source Chip Aimed at Enhancing Computational Security and Transparency",
    summary_en: "At this year's Defcon hacker conference, the attendee badge featured the innovative hardware security chip, Baochip-1x. Designed by veteran hardware hacker Andrew Huang, the chip's core objective is to enhance the security, transparency, and trustworthiness of the computing domain. Baochip-1x is a 'mostly' open-source microcontroller, with its design encompassing various components such as the operating system, firmware, processor core, encryption engine, and input/output system. Huang has publicly released all related source code on GitHub for researchers to inspect and utilize. Even more groundbreaking is that the chip utilizes a packaging that allows researchers to 'look through' its internal structure, enabling external parties to directly examine the silicon chip to verify its consistency with the public design schematics, thereby eliminating the need for blind trust in the manufacturing process. The chip's core module can even be extracted from the badge for use as a hardware security token after the conference, demonstrating its practicality and scalability.",
    tags_en: ["Defcon", "Baochip-1x", "Hardware Security", "Open-Source Chip", "Transparency", "Microcontroller"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/08/defcons-new-badge-is-a-security-key-you-can-see-inside", lang: "EN" }
    ]
  },
  {
    id: "20260801-023",
    trackers: ["os"],
    category: "重點關注",
    title: "NetBSD 11.0 重磅發布：首次支援 RISC-V 64位元架構，並強化 Linux 系統呼叫相容性",
    summary: "NetBSD 官方發布了第十九個主要版本 NetBSD 11.0。本次更新的重點在於首次支援 64 位元的 RISC-V 架構，並在 StarFive JH71XX 等平台（如 VisionFive 2）上提供初始硬體支援，同時也支援在 QEMU 上運行 RISC-V。此外，在 ARM 方面，NetBSD 11.0 增加了對高通 Snapdragon X1 Elite 硬體的支援，包括 Oryon CPU 核心。在標準化方面，該版本提升了對 POSIX.1-2024 和 C23 標準的支援。技術層面，NetBSD 11.0 透過「compat_linux」程式碼增強了與各種 Linux 系統呼叫的相容性，並引入了用於 x86/amd64 的全新 MICROVM 核心，以實現極速虛擬機啟動。此外，它還加入了新的 Intel 和 AMD 驅動，並在 AArch64 上優化了 SIMD 加速的 X.Org 伺服器。這對於希望在多樣化架構上運行 BSD 系統的開發者和資安人員具有重大意義。",
    tags: ["NetBSD", "NetBSD 11.0", "RISC-V", "Linux 系統呼叫", "多架構支援", "QEMU"],
    title_en: "NetBSD 11.0 Major Release: First Support for RISC-V 64-bit Architecture and Enhanced Linux System Call Compatibility",
    summary_en: "NetBSD has officially released its nineteenth major version, NetBSD 11.0. The key focus of this update is the first support for the 64-bit RISC-V architecture, providing initial hardware support on platforms such as StarFive JH71XX (e.g., VisionFive 2), while also supporting RISC-V operation on QEMU. Furthermore, regarding ARM, NetBSD 11.0 adds support for Qualcomm Snapdragon X1 Elite hardware, including the Oryon CPU core. In terms of standardization, this version improves support for POSIX.1-2024 and C23 standards. At the technical level, NetBSD 11.0 enhances compatibility with various Linux system calls through the \"compat_linux\" code, and introduces a new MICROVM core for x86/amd64 to achieve ultra-fast virtual machine startup. Additionally, it includes new Intel and AMD drivers and optimizes the X.Org server with SIMD acceleration on AArch64. This is highly significant for developers and security professionals who aim to run BSD systems on diverse architectures.",
    tags_en: ["NetBSD", "NetBSD 11.0", "RISC-V", "Linux System Calls", "Multi-Architecture Support", "QEMU"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NetBSD-11.0", lang: "EN" }
    ]
  },
  {
    id: "20260801-024",
    trackers: ["os"],
    category: "重點關注",
    title: "Firefox 153.0 支援 Vulkan 視訊解碼與 JPEG-XL，Pop!_OS 推出「磨砂玻璃」桌面風格",
    summary: "本期重點涵蓋多個跨平台與核心技術的進展。在瀏覽器方面，Mozilla 發布了 Firefox 153.0，這是一個最新的長期支援版本（ESR），最大的亮點是新增了 Vulkan 視訊解碼支援，並實驗性地加入了 JPEG-XL 編解碼。在桌面環境方面，System76 的 Pop!_OS 為其 COSMIC 桌面環境推出了「磨砂玻璃」（Frosted Glass）風格。此外，Valve 正在贊助將開源的 Radeon Vulkan 驅動「RADV」移植至 Windows 系統，這對於提升跨平台遊戲體驗至關重要。在 Linux 核心層面，開發者持續討論 AI 輔助生成程式碼的歸屬標籤政策，並有關於 KVM 核心結構優化的討論。這些更新顯示了開源生態系統在圖形、效能和使用者體驗上的持續迭代。",
    tags: ["Firefox 153.0", "Vulkan", "JPEG-XL", "Pop!_OS", "COSMIC", "RADV", "Linux 核心"],
    title_en: "Firefox 153.0 Supports Vulkan Video Decoding and JPEG-XL; Pop!_OS Launches 'Frosted Glass' Desktop Style",
    summary_en: "This issue covers several cross-platform and core technology advancements. On the browser front, Mozilla released Firefox 153.0, the latest Extended Support Release (ESR). The major highlights include added Vulkan video decoding support and the experimental inclusion of JPEG-XL encoding and decoding. In the desktop environment space, System76's Pop!_OS introduced a 'Frosted Glass' style for its COSMIC desktop environment. Furthermore, Valve is sponsoring the porting of the open-source Radeon Vulkan driver, 'RADV', to Windows, which is crucial for enhancing cross-platform gaming experiences. At the Linux kernel level, developers continue to discuss attribution labeling policies for AI-assisted code generation, alongside discussions regarding KVM kernel structure optimizations. These updates demonstrate the continuous iteration of the open-source ecosystem in graphics, performance, and user experience.",
    tags_en: ["Firefox 153.0", "Vulkan", "JPEG-XL", "Pop!_OS", "COSMIC", "RADV", "Linux 核心"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/July-2026-Highlights", lang: "EN" }
    ]
  },
  {
    id: "20260801-025",
    trackers: ["os"],
    category: "重點關注",
    title: "Picolibc 1.8.12 發布：強化嵌入式環境支援，擴展多核心架構與 POSIX 功能",
    summary: "Picolibc 是一個專為嵌入式系統設計的 C 函式庫，旨在提供比標準 glibc 更輕量、更適合資源受限環境的替代方案。最新版本 Picolibc 1.8.12 的發布，顯著擴展了其對多種 CPU 架構的支援範圍。目前支援的架構包括 RISC-V (32/64 位)、ARM (32/64 位)、x86_64、MIPS、以及多達十餘種其他嵌入式核心，如 LatticeMico32 和 Xtensa ESP32。技術更新方面，新版本增加了 POSIX 群組檔案功能支援，並在 RISC-V 上支援了向量化的 memset/memcpy/memmove，提升了效能。此外，它還修復了 libc 鎖的遞迴鎖定問題，並增加了對 RISC-V Zcmt 擴展的支援。這對於需要高度客製化、跨多核心架構的嵌入式開發者極具實用價值，有助於在不使用完整 Linux 核心庫的情況下，實現接近原生 Linux 的功能集。",
    tags: ["Picolibc", "嵌入式系統", "C 函式庫", "RISC-V", "POSIX", "多核心架構"],
    title_en: "Picolibc 1.8.12 Released: Enhanced Support for Embedded Environments, Expanding Multi-Core Architectures and POSIX Functionality",
    summary_en: "Picolibc is a C library designed specifically for embedded systems, aiming to provide a lighter and more resource-friendly alternative to the standard glibc. The release of the latest version, Picolibc 1.8.12, significantly expands its support for various CPU architectures. Supported architectures currently include RISC-V (32/64-bit), ARM (32/64-bit), x86_64, MIPS, and over ten other embedded cores, such as LatticeMico32 and Xtensa ESP32. In terms of technical updates, the new version adds support for POSIX group file functionality and implements vectorized memset/memcpy/memmove support on RISC-V, improving performance. Furthermore, it fixes a recursive locking issue with the libc lock and adds support for the RISC-V Zcmt extension. This is highly valuable for embedded developers requiring high customization and cross-multi-core architecture support, helping them achieve a feature set close to native Linux without using the full Linux kernel library.",
    tags_en: ["Picolibc", "Embedded Systems", "C Library", "RISC-V", "POSIX", "Multi-core Architecture"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Picolibc-1.8.12-Released", lang: "EN" }
    ]
  },
  {
    id: "20260801-026",
    trackers: ["os"],
    category: "重點關注",
    title: "Nvidia發布Vera CPU超晶片，搭載自研Olympus核心，挑戰Intel與AMD伺服器市場",
    summary: "Nvidia宣布推出Vera CPU，這款獨立於GPU的AI專用處理器，旨在挑戰Intel和AMD在伺服器CPU市場的地位。Vera採用88個自研Armv9.2核心，並以單片式（monolithic）計算架構設計，搭配LPDDR5X記憶體控制器和PCIe 6.4/CXL 3.1 I/O介面。其核心架構與Amazon Graviton 4有相似之處，皆為單片計算與分散I/O/記憶體。Vera Superchip支援雙路配置，透過NVLink-C2C介面提供1.8 TB/s的雙向頻寬。自研的Olympus核心雖然基於Arm IP，但強調了其獨特的神經網路分支預測器，能同時探索兩個分支，並加入了記憶體重命名和值預測機制，以最大化每時脈週期指令數（IPC），特別適用於AI代理和圖遍歷等工作負載。這款CPU的推出，預示著AI運算架構正朝向高度整合、專用化、且追求極致效能的單晶片設計發展。",
    tags: ["Nvidia", "Vera", "Olympus", "Armv9.2", "AI運算", "伺服器CPU", "CXL 3.1"],
    title_en: "Nvidia Launches Vera CPU Superchip with Proprietary Olympus Core, Challenging Intel and AMD in Server Market",
    summary_en: "Nvidia announced the launch of the Vera CPU, an AI-dedicated processor independent of the GPU, designed to challenge Intel and AMD's position in the server CPU market. Vera utilizes 88 proprietary Armv9.2 cores and is designed with a monolithic computing architecture, featuring LPDDR5X memory controller and PCIe 6.4/CXL 3.1 I/O interfaces. Its core architecture is similar to Amazon Graviton 4, both employing monolithic computing with distributed I/O and memory. The Vera Superchip supports dual-socket configurations, providing 1.8 TB/s bidirectional bandwidth via the NVLink-C2C interface. Although the proprietary Olympus core is based on Arm IP, it emphasizes its unique neural network branch predictor, which can simultaneously explore two branches, and incorporates memory renaming and value prediction mechanisms to maximize instructions per cycle (IPC). This makes it particularly suitable for workloads such as AI agents and graph traversal. The introduction of this CPU signals a trend toward highly integrated, specialized, and performance-optimized single-chip designs in AI computing architectures.",
    tags_en: ["Nvidia", "Vera", "Olympus", "Armv9.2", "AI Computing", "Server CPU", "CXL 3.1"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/08/01/nvidias-vera-cpu-and-the-olympus-cores-that-power-it-deep-dive/5282056", lang: "EN" }
    ]
  },
  {
    id: "20260801-027",
    trackers: ["os"],
    category: "重點關注",
    title: "OneNote 核心功能優化：第三方插件 Onetastic 提升筆記管理效率",
    summary: "本文介紹了 Microsoft OneNote 的使用經驗與擴充性，指出雖然 OneNote 是一個功能豐富的筆記工具，但其內建功能仍有提升空間。文章特別推薦了第三方插件 Onetastic，它是一個功能強大的套件，主要包含 OneCalendar、Macroland 和 OneTastic Tools 三個核心功能。OneCalendar 允許用戶根據日期追蹤和快速回顧所有編輯過的頁面，極大地提升了重度用戶的查找效率。Macroland 提供宏語言和工具集，能自動化從插入線條到生成目錄等複雜操作。Onetastic Tools 則提供快速管理常用頁面等實用功能。作者建議 OneCalendar 應被納入 OneNote 核心產品，以提升用戶體驗。這類第三方工具的發展，突顯了 OneNote 雖然功能完善，但在核心使用者體驗和擴充性方面仍有優化空間。",
    tags: ["OneNote", "Microsoft 365", "第三方插件", "筆記管理", "Onetastic", "OneCalendar"],
    title_en: "OneNote Core Functionality Optimization: Third-Party Plugin Onetastic Boosts Note Management Efficiency",
    summary_en: "This article discusses the user experience and extensibility of Microsoft OneNote, pointing out that while OneNote is a feature-rich note-taking tool, its built-in functionality still has room for improvement. The article specifically recommends the third-party plugin Onetastic, a powerful suite that includes three core features: OneCalendar, Macroland, and OneTastic Tools. OneCalendar allows users to track and quickly review all edited pages based on dates, significantly improving search efficiency for heavy users. Macroland provides a macro language and toolset that can automate complex operations, such as inserting lines or generating indexes. OneTastic Tools offers practical functions like quick management of frequently used pages. The author suggests that OneCalendar should be integrated into OneNote's core product to enhance the user experience. The development of such third-party tools highlights that while OneNote is feature-complete, there is still room for optimization in core user experience and extensibility.",
    tags_en: ["OneNote", "Microsoft 365", "Third-Party Plugin", "Note Management", "Onetastic", "OneCalendar"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/01/onenotes-best-feature-isnt-built-by-microsoft-its-a-free-add-in-called-onetastic", lang: "EN" }
    ]
  }
];
