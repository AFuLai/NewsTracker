// data-20260920.js — 2026-09-20
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-20"] = [
  {
    id: "20260920-12883",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 釋出安全更新：修補 DSA-6509-1 相關漏洞，強化系統穩定性",
    summary: "Debian 專案發布安全公告，修補一個與 DSA-6509-1 相關的漏洞。此更新旨在強化系統的安全性與穩定性，特別針對可能影響系統核心元件的潛在風險。雖然原文未提供具體的漏洞細節、CVSS 分數或受影響版本範圍，但作為 Debian 的安全公告，此修補通常涉及系統關鍵組件的修補，建議所有使用 Debian 系統的用戶應及時更新到最新的安全版本。用戶應透過標準的系統更新機制（如 `apt update` 和 `apt upgrade`）進行修補，以確保系統免受已知漏洞的威脅。本更新屬於核心安全維護，對於維護系統的整體安全態勢至關重要。",
    tags: ["Debian", "DSA-6509-1", "安全更新", "Linux 核心", "Debian Security"],
    title_en: "Debian Releases Security Update: Patching DSA-6509-1 Vulnerability to Enhance System Stability",
    summary_en: "The Debian project has issued a security advisory to patch a vulnerability related to DSA-6509-1. This update aims to enhance the system's security and stability, specifically addressing potential risks that could affect core system components. Although the original text does not provide specific vulnerability details, CVSS scores, or affected version ranges, as a Debian security advisory, this patch typically involves fixing critical system components. All users running Debian systems are advised to update promptly to the latest secure version. Users should utilize standard system update mechanisms (such as `apt update` and `apt upgrade`) to apply the patch and ensure the system is protected against known vulnerabilities. This update constitutes core security maintenance and is crucial for maintaining the overall security posture of the system.",
    tags_en: ["Debian", "DSA-6509-1", "Security Update", "Linux Kernel", "Debian Security"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00421.html", lang: "EN" }
    ]
  },
  {
    id: "20260920-12893",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心預發佈版本 7.3-rc4 資訊：關注核心開發進度與安全更新",
    summary: "本文僅提供 Linux 核心預發佈版本 7.3-rc4 的資訊，內容主要為開發進度公告，未提及具體的漏洞或安全事件。Linux 核心的開發週期持續進行，開發者應持續關注官方的發布公告，以掌握最新的核心功能和修補建議。由於原文未提供具體的漏洞細節、CVSS 分數或受影響產品資訊，故無法提供具體修補建議。建議使用者應透過官方渠道（如發行版或核心開發者網站）獲取最新的穩定版本更新，以確保系統安全與功能性。核心開發的進展是維持系統安全與功能迭代的關鍵。",
    tags: ["Linux 核心", "7.3-rc4", "核心開發", "安全公告", "Linux"],
    title_en: "Linux Kernel Pre-release Version 7.3-rc4 Information: Monitoring Kernel Development Progress and Security Updates",
    summary_en: "This article provides information solely regarding the Linux Kernel pre-release version 7.3-rc4. The content primarily consists of development progress announcements and does not mention specific vulnerabilities or security incidents. The Linux Kernel development cycle is ongoing, and developers should continuously monitor official release announcements to stay updated on the latest kernel features and patch recommendations. Since the original text does not provide specific vulnerability details, CVSS scores, or affected product information, specific remediation advice cannot be provided. Users are advised to obtain the latest stable version updates through official channels (such as distribution or kernel developer websites) to ensure system security and functionality. Kernel development progress is key to maintaining system security and functional iteration.",
    tags_en: ["Linux Kernel", "7.3-rc4", "Kernel Development", "Security Announcement", "Linux"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1095491", lang: "EN" }
    ]
  },
  {
    id: "20260920-12912",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc4 釋出：核心修補涵蓋檔案系統、驅動與網路，AI輔助修復錯誤路徑",
    summary: "本篇報導指出 Linux 核心版本 7.3-rc4 已發布，預計 Linux  7.3 將於十月正式推出。本次修補集中於 x86/x86_64 架構，涵蓋了多項重要更新。主要修補內容包括為 XPad 驅動程式新增多款遊戲控制器支援、修復了 Btrfs 檔案系統的兩項已知錯誤，以及解決了一個自 2023 年以來存在的用戶空間靜默資料遺失漏洞。Linus Torvalds 提到，本次修補的重點分散在檔案系統（如 smb 和 ntfs）、驅動程式和網路層面，整體修補內容多為小型修補，許多錯誤路徑的清理工作是 AI/LLMs 輔助發現的，對一般使用情境的影響較小，但對於遇到特定問題的用戶而言，修補具有實用價值。",
    tags: ["Linux 7.3", "Linux 核心", "x86/x86_64", "Btrfs", "XPad 驅動", "Linus Torvalds"],
    title_en: "Linux 7.3-rc4 Released: Kernel Fixes Cover Filesystems, Drivers, and Networking, AI Assists in Fixing Error Paths",
    summary_en: "This report notes the release of Linux kernel version 7.3-rc4, with Linux 7.3 expected to be officially launched in October. This round of fixes focuses on the x86/x86_64 architecture and includes multiple important updates. Key fixes include adding support for multiple game controllers to the XPad driver, resolving two known bugs in the Btrfs filesystem, and addressing a user-space silent data loss vulnerability that has existed since 2023. Linus Torvalds mentioned that the focus of these fixes is spread across filesystems (such as smb and ntfs), drivers, and the networking layer. While the overall fixes are mostly minor, and many error path cleanups were discovered with the assistance of AI/LLMs, minimizing impact on general use cases, the patches hold practical value for users encountering specific issues.",
    tags_en: ["Linux 7.3", "Linux Kernel", "x86/x86_64", "Btrfs", "XPad Driver", "Linus Torvalds"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc4", lang: "EN" }
    ]
  },
  {
    id: "20260920-12913",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc4 核心更新：修復 Intel Xeon 6 (Granite Rapids) 微碼及 APX 相關 x86 穩定性問題",
    summary: "隨著 Linux 7.3-rc4 核心版本即將發布，開發者合併了一批重要的 x86/x86_64 修復。主要修復包括針對 Intel Xeon 6 「Granite Rapids」伺服器，以避免可能導致機器檢查例外（Machine Check Exception, MCE）的微碼問題。具體修復了與微碼版本 0x1000405 及後續版本相關的載入邏輯，並針對 GNR98 和 GNR101 進行了修正。此外，修復還涵蓋了 Intel Panther Lake 上的 FRED 問題，解決了在 Wine/Steam Play 環境下運行遊戲可能導致崩潰或凍結的情況。另一個重要修復是針對使用 `-march=native` 編譯優化的核心建構，該優化在面對 Advanced Performance Extensions (APX) 時，會導致 Linux 核心過早使用 EGPRs (R16-R31) 造成系統不穩定。本次更新已調整核心建構，直到 Linux 核心準備好在內核層使用 APX 功能前，會明確阻止 APX/EGPR 的使用，確保系統穩定性。",
    tags: ["Linux 7.3-rc4", "x86", "Intel Xeon 6", "Granite Rapids", "APX", "MCE"],
    title_en: "Linux 7.3-rc4 Kernel Update: Fixes x86 Stability Issues for Intel Xeon 6 (Granite Rapids) Microcode and APX",
    summary_en: "With the upcoming release of the Linux 7.3-rc4 kernel version, developers have merged a batch of critical x86/x86_64 fixes. Key fixes include addressing microcode issues for Intel Xeon 6 'Granite Rapids' servers, which could potentially lead to Machine Check Exceptions (MCE). Specifically, the update corrects the loading logic related to microcode versions 0x1000405 and subsequent versions, and addresses issues for GNR98 and GNR101. Furthermore, the fixes cover the FRED issue on Intel Panther Lake, resolving potential crashes or freezes when running games in Wine/Steam Play environments. Another significant fix targets kernel builds optimized using `-march=native`. This optimization caused system instability when encountering Advanced Performance Extensions (APX) because the Linux kernel would prematurely utilize EGPRs (R16-R31). This update adjusts the kernel build to explicitly prevent the use of APX/EGPR until the Linux kernel is ready to utilize APX functionality at the kernel level, ensuring system stability.",
    tags_en: ["Linux 7.3-rc4", "x86", "Intel Xeon 6", "Granite Rapids", "APX", "MCE"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc4-x86-Fixes", lang: "EN" }
    ]
  },
  {
    id: "20260920-12915",
    trackers: ["os"],
    category: "Linux",
    title: "KDE 宣布未來發展重點：強化企業部署、優化文件系統與下一代設計風格",
    summary: "在 KDE Akademy 2026 大會上，KDE 開發團隊公布了未來兩年的三大發展目標。首先是「KDE for Enterprises and Deployments」，旨在提升 KDE Plasma 在企業環境的部署能力，具體功能包括改善 LDAP 整合、密碼過期支援、基於 SSO 的帳號登入、優化網路印表機設定，以及增強無頭（headless）遠端/終端機支援等。其次是「Better documentation」，目標是消除過時、誤導或重複的文檔，全面改進教學和文件，並建立貢獻者指南。最後是「Next Generation Styling for KDE」，設計師將透過 Ocean 專案建立統一的設計系統，技術人員則會著手開發 Union 主題引擎。這些目標旨在讓 KDE 桌面在功能性、易用性和美觀性上全面升級，所有詳細資訊可參考 invent.kde.org。",
    tags: ["KDE Plasma", "Linux 桌面環境", "企業部署", "LDAP", "Ocean 專案", "KDE Akademy"],
    title_en: "KDE Announces Future Development Focus: Strengthening Enterprise Deployment, Optimizing File Systems, and Next-Generation Styling",
    summary_en: "At the KDE Akademy 2026 conference, the KDE development team unveiled three major development goals for the next two years. First is \"KDE for Enterprises and Deployments,\" aimed at enhancing KDE Plasma's deployment capabilities in enterprise environments. Specific features include improved LDAP integration, password expiration support, SSO-based account login, optimized network printer configuration, and enhanced headless remote/terminal support. Second is \"Better documentation,\" which aims to eliminate outdated, misleading, or redundant documentation, comprehensively improving tutorials and guides, and establishing contributor guidelines. Finally is \"Next Generation Styling for KDE,\" where designers will establish a unified design system through the Ocean project, and technical staff will develop the Union theme engine. These goals aim to elevate the KDE desktop across functionality, usability, and aesthetics. Detailed information can be found at invent.kde.org.",
    tags_en: ["KDE Plasma", "Linux Desktop Environment", "Enterprise Deployment", "LDAP", "Ocean Project", "KDE Akademy"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Goals-To-2028", lang: "EN" }
    ]
  },
  {
    id: "20260920-12916",
    trackers: ["os"],
    category: "Linux",
    title: "Starling 0.5 釋出，Linux 桌面新增可步行 3D 視圖，並支援 WSL2 於 Windows 環境運行",
    summary: "Starling 桌面環境發布了 0.5 版本更新，主要亮點是新增了可選的 3D 桌面模式。此模式模擬了一個可步行、包含移動船隻、交通、雲層和時鐘塔的沿海城市場景。用戶可以在控制面板選擇切換至 3D 模式，同時保留傳統的 2D 桌面介面，應用程式視窗（如瀏覽器、檔案總管、終端機）仍以實體視窗形式存在，並支援 Alt + Tab 切換。每個顯示器擁有獨立的場景和攝影機，但場景渲染共用後端。此外，Starling 0.5 版本也擴展了支援性，現已透過 WSL2 搭配 Ubuntu 26.04 和 RDP 顯示模式，支援在 Windows 環境下運行。這項更新展示了 Linux 桌面環境在介面創新和跨平台兼容性方面的進展。",
    tags: ["Starling", "Linux", "Wayland", "3D 桌面", "WSL2", "Ubuntu 26.04"],
    title_en: "Starling 0.5 Released, Adding Walkable 3D View to Linux Desktop and Supporting WSL2 on Windows",
    summary_en: "The Starling desktop environment has released a 0.5 version update, with the main highlight being the addition of an optional 3D desktop mode. This mode simulates a walkable coastal city scene, featuring moving ships, traffic, cloud layers, and a clock tower. Users can select and switch to 3D mode via the control panel while retaining the traditional 2D desktop interface. Application windows (such as browsers, file explorers, and terminals) still exist as physical windows and support Alt + Tab switching. Each display has its own independent scene and camera, but the scene rendering shares a common backend. Furthermore, the Starling 0.5 version has expanded its support, now supporting operation within Windows environments via WSL2 combined with Ubuntu 26.04 and RDP display mode. This update demonstrates the progress of Linux desktop environments in terms of interface innovation and cross-platform compatibility.",
    tags_en: ["Starling", "Linux", "Wayland", "3D Desktop", "WSL2", "Ubuntu 26.04"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Starling-0.5-3D-Desktop", lang: "EN" }
    ]
  },
  {
    id: "20260920-12918",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc4 核心更新：擴展 XPad 驅動支援 Victrix Pro BFG 與 Azeron 遊戲控制器",
    summary: "本次 Linux 核心的輸入子系統（input subsystem）在發布 7.3-rc4 版本前進行了重大修復與擴展。主要更新包括透過 XPad 驅動程式，新增對 PDP Victrix Pro BFG 有線遊戲控制器的支援，使其能作為 Xbox One 相容的遊戲控制器使用。此外，XPad 驅動也首次支援多款 Azeron 品牌的控制器，包括 Cyro、Cyborg、Classic/Compact、Cyro Lefty、Cyborg II 和 Keyzen 等。除了遊戲控制器支援的擴展外，本次還修復了多個輸入相關的錯誤，例如讓 Acer Aspire Go 15 AG15-42P 和 Xiaomi Redmi Book Pro 16 2026 的內建鍵盤保持功能正常，以及為 Lenovo ThinkPad T440p 的 Synaptics PS/2 觸控板驅動程式添加了修復，確保觸控板和 TrackPoint 在開機時能立即響應。這些更新旨在提升 Linux 系統在多樣化硬體輸入設備上的兼容性與穩定性。",
    tags: ["Linux 7.3", "XPad 驅動", "Victrix Pro BFG", "Azeron", "輸入子系統", "核心更新"],
    title_en: "Linux 7.3-rc4 Kernel Update: Expanding XPad Driver Support for Victrix Pro BFG and Azeron Game Controllers",
    summary_en: "The Linux kernel's input subsystem underwent significant fixes and expansions before the release of version 7.3-rc4. Key updates include adding support for the PDP Victrix Pro BFG wired game controller via the XPad driver, allowing it to function as an Xbox One compatible game controller. Furthermore, the XPad driver now supports multiple controllers from the Azeron brand, including Cyro, Cyborg, Classic/Compact, Cyro Lefty, Cyborg II, and Keyzen. In addition to the game controller support expansion, this release also fixed several input-related bugs. For example, it ensures that the built-in keyboards of the Acer Aspire Go 15 AG15-42P and Xiaomi Redmi Book Pro 16 2026 remain functional, and it adds a fix for the Synaptics PS/2 touchpad driver on the Lenovo ThinkPad T440p, ensuring the touchpad and TrackPoint respond immediately upon startup. These updates aim to enhance the compatibility and stability of the Linux system with diverse hardware input devices.",
    tags_en: ["Linux 7.3", "XPad Driver", "Victrix Pro BFG", "Azeron", "Input Subsystem", "Kernel Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc4-Input", lang: "EN" }
    ]
  },
  {
    id: "20260920-12920",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc4 修復 Btrfs 檔案系統兩大問題：恢復 FSID 穩定性與改善 GRUB2 啟動偵測",
    summary: "本次 Linux 7.3-rc4 核心更新針對 Btrfs 檔案系統進行了兩項重要修復。首先，修復了自 Linux 7.2-rc1 引入的 FSID (file-system ID) 衍生方式的迴歸問題。先前 FSID 的變化會導致用戶空間應用程式（例如依賴 FSID 加密/解密 VPN 金鑰的應用程式，如 NetworkManager OpenConnect）在核心更新或重啟後失去穩定性，造成功能中斷。本次修復將 FSID 的衍生方式恢復為基於檔案系統 UUID，以確保後向相容性。\n其次，修復了在處理不使用 initramdisk 的系統啟動時，GRUB2 無法正確偵測到根檔案系統（/dev/root）的問題。這些修復旨在提高 Btrfs 在不同啟動環境下的穩定性和相容性，是 Linux 系統維護和使用者體驗的關鍵更新。",
    tags: ["Linux", "Btrfs", "Linux 7.3-rc4", "FSID", "GRUB2", "檔案系統"],
    title_en: "Linux 7.3-rc4 Fixes Two Major Btrfs Filesystem Issues: Restores FSID Stability and Improves GRUB2 Root Detection",
    summary_en: "This Linux 7.3-rc4 kernel update addresses two critical fixes for the Btrfs filesystem. First, it resolves a regression issue in the FSID (file-system ID) derivation method introduced in Linux 7.2-rc1. Previously, changes to the FSID could cause instability in user-space applications (such as NetworkManager OpenConnect, which relies on FSID for encrypting/decrypting VPN keys) after kernel updates or reboots, leading to functional disruption. This fix reverts the FSID derivation method to be based on the filesystem UUID, ensuring backward compatibility. Second, it fixes an issue where GRUB2 could not correctly detect the root filesystem (/dev/root) when booting systems that do not use an initramdisk. These fixes aim to enhance the stability and compatibility of Btrfs across various boot environments, representing a key update for Linux system maintenance and user experience.",
    tags_en: ["Linux", "Btrfs", "Linux 7.3-rc4", "FSID", "GRUB2", "Filesystem"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Btrfs-Fixes-For-Linux-7.3-rc4", lang: "EN" }
    ]
  },
  {
    id: "20260920-12957",
    trackers: ["os"],
    category: "Windows",
    title: "Windows系統更新流程過長：揭示現代作業系統維護與效率的挑戰",
    summary: "本文非報導特定漏洞，而是以實測經驗指出現代作業系統，特別是 Windows 系統，在長時間閒置後進行更新時所面臨的效率挑戰。作者描述了一台運行 Windows 11 的設備，在閒置數月後，進行更新和修補過程耗時約七小時，涉及 Windows 組件、韌體和驅動程式等多重更新，並伴隨著不準確的進度條顯示。這凸顯了科技產業在追求功能增添的同時，忽略了系統維護的效率問題。文章呼籲開發者和廠商應更重視程式碼的效率和資源使用，並應解決「更新海嘯」帶來的用戶體驗困擾，避免讓系統更新成為用戶無法忍受的長時間等待。",
    tags: ["Windows 11", "系統更新", "效率問題", "韌體更新", "使用者體驗"],
    title_en: "Windows System Update Process is Too Long: Revealing Challenges in Modern OS Maintenance and Efficiency",
    summary_en: "This article does not report a specific vulnerability, but rather uses practical experience to point out the efficiency challenges faced by modern operating systems, particularly Windows, when performing updates after long periods of inactivity. The author describes a device running Windows 11 that, after several months of being idle, took approximately seven hours to complete updates and patches. This process involved multiple updates across Windows components, firmware, and drivers, and was accompanied by inaccurate progress bar display. This highlights the tech industry's tendency to prioritize feature additions while neglecting system maintenance efficiency. The article calls on developers and vendors to place greater emphasis on code efficiency and resource usage, and to resolve the user experience issues caused by the 'update tsunami,' preventing system updates from becoming an unbearable, prolonged wait for users.",
    tags_en: ["Windows 11", "System Update", "Efficiency Issues", "Firmware Update", "User Experience"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/09/20/how-windows-turned-months-of-inactivity-into-a-7-hour-update-hostage-situation/5297478", lang: "EN" }
    ]
  },
  {
    id: "20260920-12984",
    trackers: ["os"],
    category: "Windows",
    title: "深入解析 Windows File System Tunnelling：新檔案如何繼承舊的建立時間與元數據",
    summary: "本文深入探討了 Windows NTFS 檔案系統中的一個內建功能——File System Tunnelling（檔案系統隧道）。此功能並非錯誤，而是 NTFS 和 FAT 系統的設計特性。當使用者刪除或重新命名一個檔案，然後在短時間內使用相同的名稱建立一個新檔案時，Windows 會將原始檔案的元數據（如建立時間、短名稱/長名稱映射）複製到新檔案上。此機制讓新檔案看起來像是舊的，甚至可以讓它繼承數天的建立時間。從技術角度來看，這與應用程式的「安全儲存」（Safe save method）模式有關，許多應用程式在儲存時實際上是執行了「建立臨時檔案、刪除原始檔案、再重新命名臨時檔案」的組合操作。File System Tunnelling 存在的主要目的是支援這種應用程式的儲存模式，並維持 8.3 短名稱與長名稱（LFN）的兼容性。該快取是針對每個磁碟區（per-volume）的，且是臨時的，不會永久保留。若對隱私有極高要求，應注意這僅保留的是元數據，而非檔案內容。修補建議方面，文章指出這是一個核心設計，目前沒有關閉或修補的建議，但提及了過去透過登錄檔調整快取時間的歷史做法。",
    tags: ["Windows", "NTFS", "File System Tunnelling", "元數據", "檔案系統", "安全儲存"],
    title_en: "In-Depth Analysis of Windows File System Tunnelling: How New Files Inherit Old Creation Times and Metadata",
    summary_en: "This article deeply explores an inherent feature within the Windows NTFS file system—File System Tunnelling. This feature is not a bug, but rather a design characteristic of both NTFS and FAT systems. When a user deletes or renames a file, and then creates a new file with the same name shortly thereafter, Windows copies the original file's metadata (such as creation time and short/long name mapping) onto the new file. This mechanism makes the new file appear as if it were the old one, potentially allowing it to inherit creation times spanning several days. From a technical perspective, this relates to the 'safe save method' used by applications. Many applications, when saving, actually execute a combination of 'creating a temporary file, deleting the original file, and then renaming the temporary file.' The primary purpose of File System Tunnelling is to support this application save pattern and maintain compatibility with both 8.3 short names and long names (LFN). This cache is per-volume and temporary, and it does not persist permanently. For those with extremely high privacy requirements, it should be noted that only the metadata, not the file content, is retained. Regarding remediation, the article points out that this is a core design feature and currently has no recommended method for disabling or patching it, though it mentions historical practices of adjusting cache times via the registry.",
    tags_en: ["Windows", "NTFS", "File System Tunnelling", "Metadata", "File System", "Safe Save"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/21/microsoft-engineer-explains-why-windows-can-give-a-brand-new-file-the-creation-date-of-a-file-you-already-deleted", lang: "EN" }
    ]
  },
  {
    id: "20260920-12985",
    trackers: ["os"],
    category: "Windows",
    title: "微軟確認全面更新 Windows 11 舊版介面，WinUI 3 將重塑系統核心體驗",
    summary: "微軟設計總監 March Rogers 確認，Windows 11 將逐步更新所有過時的系統對話框和介面，包括過去看似不重要的功能，例如「語音套件」（Voice packages）對話框。這些更新旨在解決 Windows 11 介面中仍殘留大量 Windows 95、Windows 7 或 Windows 8.1 風格元素的問題。微軟的策略是利用 WinUI 3 框架重寫舊版對話框，而非全面取代，以降低系統崩潰的風險。具體實例包括「重設此電腦」（Reset this PC）和「執行」（Run）對話框，新版不僅擁有現代化的設計（如圓角、深色模式），甚至在性能上也優於舊版（Run dialog 顯示時間從 103 毫秒降至 94 毫秒）。此外，AutoPlay 和 Print Management 等功能也將採用 WinUI 3 重設計，預計未來 Windows 11 的使用者介面將更加統一和現代化。",
    tags: ["Windows 11", "WinUI 3", "微軟", "使用者介面", "系統更新", "Windows 8.1"],
    title_en: "Microsoft Confirms Comprehensive Update to Windows 11 Legacy Interfaces with WinUI 3 to Reshape Core System Experience",
    summary_en: "Microsoft Design Director March Rogers confirmed that Windows 11 will gradually update all outdated system dialogs and interfaces, including previously seemingly minor features such as 'Voice packages' dialogs. These updates aim to resolve the issue of numerous Windows 95, Windows 7, or Windows 8.1 style elements still remaining within the Windows 11 interface. Microsoft's strategy is to rewrite the legacy dialogs using the WinUI 3 framework, rather than completely replacing them, to mitigate the risk of system crashes. Specific examples include the 'Reset this PC' and 'Run' dialogs. The new versions not only feature modernized designs (such as rounded corners and dark mode) but also offer improved performance (the Run dialog display time decreased from 103 milliseconds to 94 milliseconds). Furthermore, functions like AutoPlay and Print Management will also be redesigned using WinUI 3, suggesting that the user interface of future Windows 11 will be more unified and modern.",
    tags_en: ["Windows 11", "WinUI 3", "Microsoft", "User Interface", "System Update", "Windows 8.1"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/20/windows-11-is-getting-a-new-look-as-microsofts-design-boss-confirms-more-ancient-dialogs-are-next", lang: "EN" }
    ]
  },
  {
    id: "20260920-13022",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Watchdog Antivirus 驅動程式存在權限不足漏洞：低權限攻擊者可透過 IOCTL 刪除系統檔案",
    summary: "本漏洞存在於 Watchdog WatchDog Antivirus 1.8.640 的 wsdkd.sys 核心驅動程式（版本 1.3.0.0 及更早）中。攻擊者若為本地低權限使用者，可透過向 \\Device\\wsdk 設備發送特製的 IOCTL 請求，利用驅動程式 IOCTL 處理程序缺乏授權檢查的缺陷。這使得攻擊者能夠以 SYSTEM 權限刪除任意檔案，繞過 NTFS 存取控制，進而可能禁用安全產品或導致作業系統不穩定。本漏洞的利用路徑為本地攻擊，影響範圍為使用該版本驅動程式的 Windows 系統。修補建議是升級 Watchdog Antivirus 驅動程式至修復版本，以確保 IOCTL 請求的權限驗證。",
    tags: ["Watchdog Antivirus", "wsdkd.sys", "IOCTL", "Windows", "權限提升", "本地攻擊"],
    title_en: "Watchdog Antivirus Driver Contains Privilege Escalation Vulnerability: Low-Privilege Attacker Can Delete System Files via IOCTL",
    summary_en: "This vulnerability exists in the wsdkd.sys kernel driver of Watchdog WatchDog Antivirus 1.8.640 (version 1.3.0.0 and earlier). A local low-privilege user attacker can exploit the flaw due to the driver's IOCTL handler lacking proper authorization checks by sending a specially crafted IOCTL request to the \\Device\\wsdk device. This allows the attacker to delete arbitrary files with SYSTEM privileges, bypassing NTFS access controls, which could potentially disable security products or cause operating system instability. The exploitation path is local, affecting Windows systems using the vulnerable driver version. The recommended fix is to upgrade the Watchdog Antivirus driver to a patched version to ensure proper privilege validation for IOCTL requests.",
    tags_en: ["Watchdog Antivirus", "wsdkd.sys", "IOCTL", "Windows", "Privilege Escalation", "Local Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-92254", lang: "EN" }
    ]
  },
  {
    id: "20260920-12793",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV+ 影集《The Savant》延期上映，具體發行日期待定",
    summary: "Apple TV+ 原本計劃推出一部名為《The Savant》的影集，該劇星陣容包含 Jessica Chastain。該影集此前曾因緣由不明而取消排程，但 Apple 方面已承諾將在未來某個時間點重新發行。文章指出，雖然目前尚未公布確切的上映日期，但該影集仍將在 Apple TV+ 平台播出，具體時間將會另行通知。目前內容僅為影集資訊更新，未提及任何技術或安全相關細節，故無法提供漏洞或修補建議。",
    tags: ["Apple TV+", "The Savant", "影集", "Apple 內容"],
    title_en: "Apple TV+ Series 'The Savant' Postponed, Release Date Pending",
    summary_en: "Apple TV+ was originally scheduled to release a series titled 'The Savant,' starring Jessica Chastain. The series was previously canceled for undisclosed reasons, but Apple has committed to re-releasing it at a later date. The article notes that while an exact release date has not been announced, the series will still air on the Apple TV+ platform, with the specific timing to be announced later. As the current content only provides series information updates and does not mention any technical or security details, no vulnerability or patch recommendations can be provided.",
    tags_en: ["Apple TV+", "The Savant", "Series", "Apple Content"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/20/apple-tv-the-savant-another-release-date", lang: "EN" }
    ]
  },
  {
    id: "20260920-12794",
    trackers: ["os"],
    category: "Apple",
    title: "Satechi Thunderbolt 5 CubeDock 發表：為 Mac mini 打造整合式擴充與 NVMe 儲存解決方案",
    summary: "本文介紹 Satechi 的 Thunderbolt 5 CubeDock，這款擴充塢設計仿照 Mac mini 的外觀，旨在為搭配 M6 或 M5 Pro 晶片的 Mac mini 提供一個整合式的周邊解決方案。該擴充塢具備 8 個額外連接埠，除了多樣的 I/O 埠（包括兩個 10Gbps USB-C、兩個 10Gbps USB-A、2.5G Ethernet、SD/microSD 卡槽和 3.5mm 音訊孔）外，最大的亮點是內建了一個 M.2 NVMe SSD 擴充槽。該槽位支援 2230、2242、2260 和 2280 等多種尺寸的 SSD，最高可達 6000MB/s 的讀寫速度，且不增加機身佔用空間。在連接埠方面，它支援 Thunderbolt 5 的高達 120Gbps 傳輸速率，可透過單一線纜驅動多達三台 6K@60Hz 或兩台 4K@144Hz 顯示器。雖然產品價格較高，但對於追求極致整合性、需要大量擴充埠和內建儲存空間的專業用戶來說，提供了極具吸引力的解決方案。",
    tags: ["Satechi", "Thunderbolt 5", "Mac mini", "CubeDock", "M.2 NVMe SSD", "擴充塢"],
    title_en: "Satechi Thunderbolt 5 CubeDock Announced: An Integrated Expansion and NVMe Storage Solution for Mac mini",
    summary_en: "This article introduces the Satechi Thunderbolt 5 CubeDock, an expansion dock designed to mimic the appearance of the Mac mini. It aims to provide an integrated peripheral solution for Mac minis equipped with M6 or M5 Pro chips. The dock features eight additional ports, including various I/O ports (such as two 10Gbps USB-C, two 10Gbps USB-A, 2.5G Ethernet, SD/microSD card slots, and a 3.5mm audio jack). Its most notable feature, however, is the built-in M.2 NVMe SSD expansion slot. This slot supports multiple SSD sizes, including 2230, 2242, 2260, and 2280, offering read/write speeds up to 6000MB/s, all without increasing the unit's physical footprint. In terms of connectivity, it supports Thunderbolt 5's high transfer rate of up to 120Gbps, capable of powering up to three 6K@60Hz or two 4K@144Hz displays via a single cable. Although the product is priced relatively high, it offers an extremely attractive solution for professional users who demand maximum integration, extensive expansion ports, and built-in storage capacity.",
    tags_en: ["Satechi", "Thunderbolt 5", "Mac mini", "CubeDock", "M.2 NVMe SSD", "Docking Station"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/20/satechi-thunderbolt-5-cubedock-mac-mini-review", lang: "EN" }
    ]
  },
  {
    id: "20260920-12795",
    trackers: ["os"],
    category: "Apple",
    title: "iFixit拆解iPhone 18 Pro：探討可變光圈、螢幕修復難點與散熱架構",
    summary: "iFixit對iPhone 18 Pro進行了拆解分析，除了展示其可變光圈（variable aperture）機制外，也深入探討了顯示器修復的潛在問題。該機型採用了新的散熱架構，A20 Pro晶片可直接連接到更大的散熱腔（vapor chamber），該散熱腔表面積比前代增加了三倍。在顯示器方面，iFixit發現Apple將重新定位的紅外線（IR）相機隱藏在顯示器像素陣上方，並使用了IR-pass filter。然而，拆解過程中，iFixit在多台機型上發現顯示器周圍的塑膠框架有損壞的情況，這可能導致重新組裝後螢幕無法完美平整，進而影響防水性。此外，iFixit指出，即使是更換USB-C連接埠等組件，也需要拆卸大量內部零件，顯示iPhone 18 Pro的維修難度依然很高。iFixit目前給予iPhone 18 Pro和Pro Max暫定的修復評分為10分中的7分。",
    tags: ["iPhone 18 Pro", "iFixit", "可變光圈", "A20 Pro", "散熱腔", "螢幕修復"],
    title_en: "iFixit Disassembles iPhone 18 Pro: Exploring Variable Aperture, Display Repair Challenges, and Thermal Architecture",
    summary_en: "iFixit performed a teardown analysis of the iPhone 18 Pro, showcasing its variable aperture mechanism while also delving into potential display repair issues. The model utilizes a new thermal architecture, where the A20 Pro chip connects directly to a larger vapor chamber, increasing the surface area by three times compared to previous generations. Regarding the display, iFixit found that Apple has repositioned the infrared (IR) camera above the display pixel array and implemented an IR-pass filter. However, during the teardown, iFixit observed damage to the plastic frame surrounding the display on multiple units. This could prevent the screen from being perfectly flush after reassembly, potentially compromising water resistance. Furthermore, iFixit noted that even replacing components like the USB-C port requires disassembling numerous internal parts, indicating that the repair difficulty of the iPhone 18 Pro remains high. iFixit currently assigns a provisional repair score of 7 out of 10 for the iPhone 18 Pro and Pro Max.",
    tags_en: ["iPhone 18 Pro", "iFixit", "Variable Aperture", "A20 Pro", "Vapor Chamber", "Display Repair"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/20/ifixit-tears-down-iphone-18-pro-explores-variable-aperture-finds-concerning-repair-issue", lang: "EN" }
    ]
  },
  {
    id: "20260920-12796",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 搭載 Siri AI：新功能雖強大，但用戶體驗仍面臨多方面困擾",
    summary: "Apple 在 iOS 27 中推出了新一代的 Siri AI，該功能正透過等候名單逐步向用戶推送，目前仍處於 Beta 測試階段。新 Siri AI 具備更強大的知識檢索能力，能透過用戶的訊息和備忘錄進行個人化上下文查詢，並能根據螢幕上的內容執行操作。然而，文章指出，儘管功能強大，但新 Siri AI 的實際用戶體驗仍面臨多方面的困擾。這些困擾涵蓋了從語音指令的理解、操作的流程設計，到與用戶預期之間的落差，顯示 Apple 在後續版本中仍需進行大量優化與改進。",
    tags: ["iOS 27", "Siri AI", "Apple", "iPhone", "Apple Watch", "Beta"],
    title_en: "iOS 27's Siri AI: Powerful New Features Face Multiple User Experience Challenges",
    summary_en: "Apple has introduced a new generation of Siri AI in iOS 27, which is currently being rolled out to users via a waiting list and remains in the Beta testing phase. The new Siri AI possesses enhanced knowledge retrieval capabilities, allowing for personalized contextual queries using user messages and notes, and can execute actions based on content displayed on the screen. However, the article points out that despite its powerful functionality, the actual user experience of the new Siri AI faces multiple challenges. These issues range from voice command understanding and operational workflow design to the gap between functionality and user expectations, indicating that Apple still needs significant optimization and improvement in subsequent versions.",
    tags_en: ["iOS 27", "Siri AI", "Apple", "iPhone", "Apple Watch", "Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/20/five-ways-that-the-new-siri-ai-is-frustrating-iphone-and-apple-watch-users", lang: "EN" }
    ]
  },
  {
    id: "20260920-12797",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布 iPhone Duo 支援 USB-C Apple Pencil，但新設計筆款因技術問題取消",
    summary: "本文報導指出，儘管 Apple 最初曾規劃為 iPhone Duo 設計一款尺寸更小、附著於機身<0xE9><0x89><0xB8>接處的新型 Apple Pencil，但該筆款在進入大規模生產前，因遭遇「技術問題」而被公司取消。在 iPhone Duo 的發表會上，Apple 最終宣布支援使用傳統的 USB-C Apple Pencil。然而，由於產品最初並未針對 USB-C Apple Pencil 進行設計，Apple 仍需進行全面的軟體測試與整合工作，因此 Apple Pencil 的支援功能在 iPhone Duo 上發布時將無法立即使用。Apple 預計將在 2026 年底前完成相關軟體更新，以確保 iPad Pencil 能順利在 iPhone Duo 上運作。文章指出，新 Apple Pencil 設計的技術問題，可能是筆款本身，也可能是與 iPhone Duo 的磁吸充電功能相關，未來 Apple 可能會另行推出該配件。",
    tags: ["Apple Pencil", "iPhone Duo", "USB-C", "Apple", "配件支援", "軟體更新"],
    title_en: "Apple Announces iPhone Duo Support for USB-C Apple Pencil, But New Pencil Design Is Canceled Due to Technical Issues",
    summary_en: "This report indicates that although Apple initially planned a smaller Apple Pencil designed to attach to the iPhone Duo's body, this specific model was canceled by the company before mass production due to 'technical issues.' At the iPhone Duo launch event, Apple ultimately announced support for the traditional USB-C Apple Pencil. However, because the product was not originally designed for the USB-C Apple Pencil, Apple must conduct comprehensive software testing and integration work. Consequently, the Apple Pencil support feature will not be immediately available on the iPhone Duo upon release. Apple expects to complete the necessary software updates by the end of 2026 to ensure that the Apple Pencil functions smoothly with the iPhone Duo. The article notes that the technical issues with the new Apple Pencil design may relate either to the pencil itself or to the magnetic charging function with the iPhone Duo, and Apple may release this accessory separately in the future.",
    tags_en: ["Apple Pencil", "iPhone Duo", "USB-C", "Apple", "Accessory Support", "Software Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/20/heres-why-apple-scrapped-its-shorter-apple-pencil-designed-for-iphone-duo-report", lang: "EN" }
    ]
  },
  {
    id: "20260920-12798",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重磅升級：Apple 宣稱多達 30 個功能優化，大幅提升 iPhone 運行速度",
    summary: "Apple 發布 iOS 27 作業系統，強調本次更新在效能和穩定性上進行了全面優化。根據 Apple 的說明，iOS 27 旨在讓日常使用體驗更流暢、更快速。本次更新涵蓋了超過 30 個優化點，包括相簿（Photos）新照片載入速度提升高達 70%、Safari 網頁應用效能提升、訊息（Messages）載入速度加快、以及 AirDrop 傳輸速度提升高達 80%等。此外，文章指出，iOS 27 讓應用程式啟動速度可提升高達 30%。這些性能提升的測試數據基於 iPhone 11 Pro Max 進行，並與運行 iOS 26.4.2 的設備進行比較。本次升級對所有支援的 iPhone 型號（可追溯至 iPhone 11）都具有實用價值，預計使用者將感受到顯著的整體性能改善。",
    tags: ["iOS 27", "Apple", "iPhone", "作業系統更新", "性能優化", "AirDrop"],
    title_en: "iOS 27 Major Upgrade: Apple Claims Up to 30 Feature Optimizations to Significantly Boost iPhone Performance",
    summary_en: "Apple has released the iOS 27 operating system, emphasizing comprehensive optimizations in performance and stability. According to Apple, iOS 27 aims to make the daily user experience smoother and faster. This update includes over 30 optimization points, including up to a 70% faster photo loading speed in Photos, improved Safari web application performance, faster Messages loading, and up to an 80% faster AirDrop transfer speed. Furthermore, the article notes that iOS 27 can boost application startup speed by up to 30%. These performance improvement test data were conducted on the iPhone 11 Pro Max and compared with devices running iOS 26.4.2. This upgrade is valuable for all supported iPhone models (traceable back to the iPhone 11), and users are expected to feel a noticeable overall performance improvement.",
    tags_en: ["iOS 27", "Apple", "iPhone", "OS Update", "Performance Optimization", "AirDrop"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/19/ios-27-makes-your-iphone-faster-in-30-ways-heres-the-full-list", lang: "EN" }
    ]
  },
  {
    id: "20260920-12695",
    trackers: ["eu_cra"],
    category: "開源影響",
    title: "科技部發布「國家研究開發AI研究倫理指南」：規範AI生成物驗證與使用規範",
    summary: "為應對AI生成內容可能帶來的虛假資訊、偏見延續、資安與個人資料外洩等新型研究倫理風險，科學技術情報部（과학기술정보통신부）已正式確定並發布了《國家研究開發AI研究倫理指南》。該指南確立了AI在國家研究開發中的角色應僅限於「工具」，並強調最終成果的責任與權利完全歸屬於使用AI的研究人員。指南建議研究人員在利用AI時，必須遵循七大原則：事實查核、主體判斷、確保透明度、結果可靠性管理、遵守政策規範、確保資安，以及保護個人資料。具體而言，研究人員必須驗證AI生成內容的錯誤、核心資料的遺漏、來源的真實性，並在使用AI時公開所使用的模型、版本、目的與範圍。此外，研究機構需建立制度與技術安全環境，嚴禁將包含個人資料的資料輸入AI服務。此指南旨在建立負責任的AI使用文化，確保國家研究開發的學術真實性。",
    tags: ["AI倫理", "國家研究開發", "科學技術情報部", "AI生成物", "研究倫理", "透明度"],
    title_en: "Ministry of Science and ICT Issues 'National Guide for AI Research Ethics' to Govern AI-Generated Content Verification and Usage",
    summary_en: "To address emerging ethical risks associated with AI-generated content, such as misinformation, bias perpetuation, cybersecurity vulnerabilities, and personal data leakage, the Ministry of Science and ICT has officially finalized and released the 'National Guide for AI Research Ethics.' This guide establishes that the role of AI in national research and development must be limited to that of a 'tool,' and emphasizes that the responsibility and rights for the final outcomes belong entirely to the human researchers using the AI. The guide recommends that researchers adhere to seven principles when utilizing AI: fact-checking, subjective judgment, ensuring transparency, result reliability management, policy compliance, cybersecurity assurance, and personal data protection. Specifically, researchers must verify AI-generated content for errors, detect omissions of core data, and confirm the authenticity of sources. Furthermore, when using AI, they must disclose the model, version, purpose, and scope used. Additionally, research institutions must establish institutional and technical security environments, strictly prohibiting the input of personal data into AI services. This guide aims to cultivate a culture of responsible AI use, ensuring the academic integrity of national research and development.",
    tags_en: ["AI Ethics", "National R&D", "Ministry of Science and ICT", "AI-Generated Content", "Research Ethics", "Transparency"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145950", lang: "EN" }
    ]
  },
  {
    id: "20260920-12731",
    trackers: ["os"],
    category: "Android",
    title: "Android 17 QPR1 穩定版更新：Pixel 裝置狀態列圖示發生變動，包含靜音與 VPN 圖標調整",
    summary: "本篇報導指出，Android 17 QPR1 的穩定版更新，導致 Pixel 裝置的狀態列（status bar）圖示發生了幾項變動。其中最受關注的是「靜音/靜音模式」圖示，從原本的斜線喇叭圖案變更為鈴鐺圖案。這項變動可能是一個意外的迴歸（regression），因為 Google 在 Android 14 時曾將圖示從鈴鐺改為喇叭。值得注意的是，此變動在 Android 17 QPR1 Beta 週期並不存在，僅在本次穩定 OTA 中實施。此外，VPN 圖示也變得更粗且實心。文章提醒，若此變動是錯誤，未來可能需要等到較大的 QPR2 更新（預計於 12 月）才能修復。目前 Android 17 QPR1 尚未對 Pixel 11 系列開放。",
    tags: ["Android 17", "QPR1", "Pixel", "狀態列", "Android OS", "系統更新"],
    title_en: "Android 17 QPR1 Stable Update: Pixel Device Status Bar Icons Change, Including Silent and VPN Icon Adjustments",
    summary_en: "This report highlights several changes to the status bar icons on Pixel devices following the Android 17 QPR1 stable update. The most notable change is the 'Silent/Do Not Disturb' icon, which has changed from the original diagonal speaker icon to a bell icon. This change may be an unexpected regression, as Google had previously changed the icon from a bell to a speaker in Android 14. Notably, this change was not present during the Android 17 QPR1 Beta cycle, but was implemented in this stable OTA. Additionally, the VPN icon has become thicker and solid. The article cautions that if this change is an error, a fix may only be available in a later major QPR2 update (expected in December). Currently, Android 17 QPR1 has not been released for the Pixel 11 series.",
    tags_en: ["Android 17", "QPR1", "Pixel", "Status Bar", "Android OS", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/20/android-17-qpr1-status-bar-icons", lang: "EN" }
    ]
  },
  {
    id: "20260920-12603",
    trackers: ["security"],
    category: "前瞻技術",
    title: "兆勤Nebula雲端平臺升級至20.10版，強化身分聯合與Passkey支援，提升企業網路安全管理",
    summary: "兆勤科技（Zyxel Networks）的Nebula Control Center雲端網路管理平臺，最新發布20.10版，專為中小企業與代管服務供應商（MSP）設計，大幅提升網路管理與身分驗證的安全性與便利性。新版本新增了身分識別存取支援，透過Nebula Identity Federation Service (NID FS)，可整合Microsoft Entra ID、Google Workspace或Okta等第三方身分服務。這使企業員工能使用既有工作帳號，透過開放的OIDC標準，安全存取公司Wi-Fi與VPN，無需在自家目錄建立獨立帳號，適用於多租戶環境。此外，平臺已支援Passkey通行金鑰，提供無密碼（passwordless）登入機制，有效降低密碼網釣風險。此升級簡化了網路維運流程，並強化了跨點連線的安全性，建議企業應利用此功能整合現有IdP，並啟用Passkey登入，以提升整體資安防護等級。",
    tags: ["Zyxel Networks", "Nebula Control Center", "Passkey", "OIDC", "身分聯合", "MSP", "MFA"],
    title_en: "Zyxel Nebula Cloud Platform Upgrades to Version 20.10, Enhancing Identity Federation and Passkey Support for Enterprise Network Security Management",
    summary_en: "Zyxel Networks' Nebula Control Center cloud network management platform has released version 20.10, designed to significantly enhance the security and convenience of network management and identity verification for small and medium-sized enterprises (SMEs) and Managed Service Providers (MSPs). The new version introduces identity access support through the Nebula Identity Federation Service (NID FS), allowing integration with third-party identity services such as Microsoft Entra ID, Google Workspace, or Okta. This enables corporate employees to securely access company Wi-Fi and VPN using their existing work accounts via the open OIDC standard, eliminating the need for creating separate local accounts in the company directory, making it ideal for multi-tenant environments. Furthermore, the platform now supports Passkey credentials, providing a passwordless login mechanism that effectively reduces the risk of password phishing. This upgrade simplifies network operations and strengthens the security of cross-site connectivity. Enterprises are advised to utilize this feature to integrate existing Identity Providers (IdPs) and enable Passkey login to elevate overall cybersecurity defenses.",
    tags_en: ["Zyxel Networks", "Nebula Control Center", "Passkey", "OIDC", "Identity Federation", "MSP", "MFA"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/review/179044", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260920-12870",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Google 揭露資安事件：內部臥底分析師如何監控 TeamPCP 供應鏈駭客活動",
    summary: "Google 威脅情報小組（Google Threat Intelligence Group）近日在 SentinelOne 的 LABScon 大會上，分享了其針對駭客組織 TeamPCP 的調查與滲透經驗。TeamPCP 曾進行過史無前例的供應鏈駭客攻擊，污染了數百個開源程式，並竊取開發者帳號，甚至釋出自傳播的蠕蟲，最終影響了超過千家公司。Google 透過其內部臥底研究員，成功從內部監控了 TeamPCP 的整個駭客行動。根據 Google 威脅情報研究員 Austin Larsen 的說明，Google 最終是追蹤了 TeamPCP 的成員所犯的營運安全錯誤，並將關鍵資訊提供給了執法機構。此外，Google 也從另一個駭客群組 ShinyHunters 獲得了情報，並指出其資安子公司 Mandiant 在事件初期就已部署了臥底分析師，從幕後持續監控整個駭客活動，協助警告受害者並擾亂其攻擊企圖。",
    tags: ["Google Threat Intelligence Group", "TeamPCP", "供應鏈攻擊", "Mandiant", "開源軟體", "資安情報"],
    title_en: "Google Reveals Security Incident: How Internal Undercover Analysts Monitored TeamPCP Supply Chain Hacking Activities",
    summary_en: "The Google Threat Intelligence Group recently shared its investigation and penetration experience targeting the hacking group TeamPCP at the SentinelOne LABScon conference. TeamPCP conducted unprecedented supply chain attacks, polluting hundreds of open-source programs and stealing developer accounts, even releasing self-propagating worms, ultimately affecting over a thousand companies. Google successfully monitored TeamPCP's entire operation by utilizing its internal undercover researchers. According to Google Threat Intelligence researcher Austin Larsen, Google ultimately tracked operational security mistakes made by TeamPCP members and provided critical information to law enforcement agencies. Furthermore, Google also acquired intelligence on another hacking group, ShinyHunters, and noted that its cybersecurity subsidiary, Mandiant, had already deployed undercover analysts at the beginning of the incident, continuously monitoring the entire hacking activity from behind the scenes, assisting in warning victims and disrupting their attack attempts.",
    tags_en: ["Google Threat Intelligence Group", "TeamPCP", "Supply Chain Attack", "Mandiant", "Open Source", "Cyber Intelligence"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang", lang: "EN" }
    ]
  },
  {
    id: "20260920-12917",
    trackers: ["os"],
    category: "重點關注",
    title: "Vulkan API 釋出 1.4.363 版本，新增 VK_INTEL_device_info 擴充功能",
    summary: "Vulkan API 發布了 1.4.363 版本，這是一個例行更新，主要包含多處規範澄清、多個修復，以及一個新的 Intel 廠商擴充功能：VK_INTEL_device_info。此擴充功能專用於讀取 Intel 顯示卡的圖形智慧財產（IP）區塊版本資訊。Intel 引入此擴充功能，是因為現有的 Intel 驅動程式的 deviceID 欄位無法直接暴露圖形 IP 版本，導致應用程式或遊戲需要手動維護一個將設備 ID 與圖形 IP 版本/世代相關聯的查找表。透過此更新，開發者可以更直接地獲取設備的架構世代、該世代的發布資訊以及硬體修訂版本，有助於應用程式的兼容性與開發。",
    tags: ["Vulkan", "VK_INTEL_device_info", "Intel", "API", "圖形運算"],
    title_en: "Vulkan API Releases Version 1.4.363, Introducing VK_INTEL_device_info Extension",
    summary_en: "The Vulkan API has released version 1.4.363, a routine update that includes multiple specification clarifications, various fixes, and a new Intel vendor extension: VK_INTEL_device_info. This extension is specifically designed to read the graphical Intellectual Property (IP) block version information from Intel graphics cards. Intel introduced this extension because the existing deviceID field in Intel drivers could not directly expose the graphical IP version, forcing applications or games to manually maintain a lookup table correlating the device ID with the graphical IP version/generation. With this update, developers can more directly retrieve the device's architecture generation, the release information for that generation, and the hardware revision, which aids in application compatibility and development.",
    tags_en: ["Vulkan", "VK_INTEL_device_info", "Intel", "API", "Graphics Computing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Vulkan-1.4.363", lang: "EN" }
    ]
  },
  {
    id: "20260920-12691",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "政府強化過年假期網路安全監測，改善通訊費欠繳服務與擴充網路基礎設施",
    summary: "為應對中秋節假期期間的網路犯罪與服務中斷風險，韓國科學技術情報通信部（과기정통부）與韓國資訊安全院（KISA）等單位加強了對通訊、交通、旅遊、購物等生活相關服務的網路威脅監測。通訊三大公司啟動「24小時緊急應變小組」，實時監測流量激增、安全威脅及服務故障，並與主要安全企業建立緊急應變機制。\n\n此外，為減輕民眾的經濟負擔，通訊費欠繳制度得到改善：欠繳者仍可正常使用「本人確認」和「防釣魚/垃圾訊息過濾」等基本服務，且可恢復服務的期限從 21 天延長至最長 3 個月。同時，通訊三大公司在假期期間免費提供視訊通話服務，並在高速鐵路（KTX）核心區擴充通訊設備，將平均下載速度提升超過 20%。\n\n平台公司也強化了地圖應用功能，增加「緊急醫療」和「節日免費停車場」等資訊，協助民眾在假期期間移動和就醫。這些措施旨在確保民眾在假期期間能安全、便利地使用數位服務。",
    tags: ["과기정통부", "KISA", "通訊三大公司", "網路安全", "通訊費", "KTX", "平台服務"],
    title_en: "Government Strengthens Cybersecurity Monitoring During Lunar New Year Holidays, Improving Communication Service Suspension and Expanding Network Infrastructure",
    summary_en: "To counter the risks of cybercrime and service disruptions during the Mid-Autumn Festival holiday period, agencies such as the Ministry of Science and ICT (MSIT) and the Korea Internet & Security Agency (KISA) have enhanced network threat monitoring for life-related services, including communications, transportation, and shopping. The three major telecommunications companies launched '24-hour emergency response teams' to monitor real-time traffic surges, security threats, and service failures, establishing emergency response mechanisms with major security firms.\n\nFurthermore, to alleviate the financial burden on the public, the communication service suspension system has been improved: users with outstanding payments can still access basic services such as 'self-verification' and 'anti-phishing/spam message filtering,' and the service restoration period has been extended from 21 days to a maximum of three months. Concurrently, the three major telecommunications companies are providing free video calling services during the holiday period and expanding communication equipment in the core areas of the Korea Train eXpress (KTX), boosting the average download speed by over 20%.\n\nPlatform companies also enhanced map application features by adding information such as 'emergency medical services' and 'holiday free parking lots,' assisting the public with movement and medical care during the holidays. These measures aim to ensure that the public can use digital services safely and conveniently during the holiday period.",
    tags_en: ["MSIT", "KISA", "Three Major Telecoms", "Cybersecurity", "Communication Fees", "KTX", "Platform Services"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145963", lang: "EN" }
    ]
  },
  {
    id: "20260920-12692",
    trackers: ["security"],
    category: "產業動態",
    title: "男裝時尚平台 Lookpin 遭駭，個人資料外洩影響用戶電子郵件與密碼雜湊值",
    summary: "男裝時尚平台 Lookpin 的營運公司 Level13 公佈用戶個人資料外洩事件。根據公司公告，此次資料外洩發生在 16 日下午，公司發現了未經認證的帳號，並於當天傍晚時段切斷了相關系統的存取權限。外洩的資料項目包括電子郵件地址和密碼雜湊值，部分用戶甚至有手機號碼和連線 IP 位址被洩露。Level13 初步調查指出，此次事件是利用了資料分析工具「MetaBase」的安全性漏洞所導致的。公司已向韓國資訊安全院（KISA）報告了此次入侵事件和個人資料外洩，並呼籲用戶提高警惕，防止利用洩露的個人資料進行釣魚攻擊，並建議用戶立即更改密碼。公司表示正在更換相關系統的存取密碼和認證資訊，並將全力配合相關機構的調查。",
    tags: ["Lookpin", "Level13", "個人資料外洩", "MetaBase", "密碼雜湊", "KISA"],
    title_en: "Men's Fashion Platform Lookpin Hacked, User Personal Data Leaked Including Emails and Password Hashes",
    summary_en: "Lookpin's operating company, Level13, announced a user personal data leak incident. According to the company announcement, the data leak occurred on the 16th in the afternoon, when the company discovered unauthorized accounts and subsequently cut off access to the related systems that evening. The leaked data items include email addresses and password hashes; some users' mobile phone numbers and connection IP addresses were also exposed. Level13's preliminary investigation suggests that the incident was caused by a security vulnerability in the data analysis tool, \"MetaBase.\" The company has reported this intrusion and personal data leak to the Korea Internet & Security Agency (KISA), urging users to remain vigilant against phishing attacks using the leaked personal data, and advising users to change their passwords immediately. The company stated that it is changing the access passwords and authentication information for the relevant systems and will fully cooperate with the investigation by relevant authorities.",
    tags_en: ["Lookpin", "Level13", "Personal Data Leak", "MetaBase", "Password Hash", "KISA"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145962", lang: "EN" }
    ]
  },
  {
    id: "20260920-12690",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "針對水處理設施與發電廠攻擊，SenseTone提出OT安全「執行前控制」策略",
    summary: "近期美國水處理設施及英國發電廠等國家基礎設施接連遭受網路攻擊，攻擊者傾向利用正常權限和工具而非新型惡意程式，使得傳統的「事後偵測式」OT安全系統難以應對。SenseTone透過線上研討會指出，僅依賴偵測機制無法有效阻止已發生的未經授權控制指令，對於水廠、發電廠或智慧工廠的停機風險極高。因此，SenseTone強調OT安全真正的關鍵在於建立「執行前控制」（Pre-execution Control）策略，透過在設備控制前進行使用者驗證，從源頭預防攻擊。本次研討會將深入分析AI Agent應用下的OT自主入侵實態，並提供無需更改現有設備或網路設定即可實施的MFA及Identity Layer建構策略，同時涵蓋IEC 62443、NIS2、NERC CIP等全球主要安全規範的合規指引，特別結合全球電池工廠和水處理設施的實戰案例，為CISO、CIO及OT安全負責人提供實用指導。",
    tags: ["OT安全", "SenseTone", "水處理設施", "發電廠", "IEC 62443", "NIS2", "執行前控制"],
    title_en: "SenseTone Proposes 'Pre-execution Control' Strategy for OT Security Against Attacks on Water Treatment Facilities and Power Plants",
    summary_en: "Recently, critical national infrastructure, including water treatment facilities in the US and power plants in the UK, have been targeted by cyberattacks. Attackers are increasingly utilizing normal credentials and tools rather than novel malware, making traditional 'post-detection' Operational Technology (OT) security systems inadequate. Through an online seminar, SenseTone highlighted that relying solely on detection mechanisms cannot effectively prevent unauthorized control commands once they have been issued, posing extremely high risks of downtime for water facilities, power plants, or smart factories. Therefore, SenseTone emphasizes that the true key to OT security lies in establishing a 'Pre-execution Control' strategy. This strategy aims to prevent attacks at the source by performing user validation before equipment control. The seminar will deeply analyze the reality of autonomous OT intrusion under AI Agent applications and provide MFA and Identity Layer construction strategies that require no changes to existing equipment or network configurations. Furthermore, it will cover compliance guidelines for major global security standards such as IEC 62443, NIS2, and NERC CIP, specifically incorporating practical case studies from global battery factories and water treatment facilities, offering practical guidance to CISOs, CIOs, and OT security managers.",
    tags_en: ["OT Security", "SenseTone", "Water Treatment Facilities", "Power Plants", "IEC 62443", "NIS2", "Pre-execution Control"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145731", lang: "EN" }
    ]
  },
  {
    id: "20260920-12694",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "AI自律防禦體系在APEX 2026訓練中實證：實現超高速自動化修復與聯防",
    summary: "在於首爾COEX舉行的全球資安活動CSK 2026的附屬訓練「APEX (Allied Power Exercise) 2026」中，展示了世界首度實戰驗證的自律型AI防禦團隊「Project Phalanx」。該團隊的核心優勢在於實現了「並行性」和「專業性」，能夠同時處理多達16至50個並行任務，遠超傳統人工團隊的處理能力。其最大的成就是實現了「超高速自律修復」，利用大型語言模型（LLM）自行組合超過10行的高難度修復指令，恢復系統完整性。此外，訓練還成功驗證了在國防和公共領域，即使在內部網路環境下，基於開源權重（open-weight）的本地LLM（Local LLM）也能作為主力進行系統修復，證明了其高度的安全性與實戰適用性。這項技術旨在將各機構間差異化的資安應對能力系統化，提升國家整體資安防禦水平。",
    tags: ["AI防禦", "Project Phalanx", "LLM", "APEX 2026", "自律防禦", "國家資安"],
    title_en: "Autonomous AI Defense System Demonstrated at APEX 2026 Exercise: Achieving Ultra-High-Speed Automated Remediation and Joint Defense",
    summary_en: "At the 'APEX (Allied Power Exercise) 2026' auxiliary training event held during CSK 2026 in COEX, Seoul, the 'Project Phalanx' autonomous AI defense team was showcased, marking the world's first live-field validation. The core advantage of this team lies in its ability to achieve 'parallelism' and 'specialization,' enabling it to simultaneously handle up to 16 to 50 parallel tasks, far exceeding the capacity of traditional human teams. Its greatest achievement was the realization of 'ultra-high-speed autonomous remediation,' utilizing Large Language Models (LLMs) to autonomously generate over 10 lines of high-difficulty remediation instructions, thereby restoring system integrity. Furthermore, the exercise successfully validated that in national defense and public sectors, even within internal network environments, local LLMs based on open weights can serve as the primary force for system remediation, demonstrating their high level of security and practical applicability. This technology aims to systematize the differentiated cybersecurity response capabilities across various organizations, thereby elevating the overall national cybersecurity defense level.",
    tags_en: ["AI Defense", "Project Phalanx", "LLM", "APEX 2026", "Autonomous Defense", "National Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145960", lang: "EN" }
    ]
  }
];
