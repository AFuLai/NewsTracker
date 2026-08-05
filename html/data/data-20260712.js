// data-20260712.js — 2026-07-12
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-12"] = [
  {
    id: "20260712-001",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心開發進度：Kernel 7.2-rc3 穩定更新，持續觀察核心元件變化",
    summary: "本文為 Linux 核心開發進度更新，報告了 Kernel 7.2-rc3 的狀態。文章內容主要描述了核心開發的日常進展，指出提交（commits）的速率保持在「新的常態」（new normal）水平，但作者也提到可能受到夏季假期影響，導致提交速率略有放緩。這類更新對於追蹤 Linux 核心的穩定性、新功能整合以及潛在的安全性修補至關重要。雖然原文未提及具體的漏洞或高風險的技術細節，但持續的開發和提交活動本身就是核心維護的體現。建議使用者和資安人員持續關注 Linux 核心的發行版更新，特別是針對穩定版（stable branch）的修補程式，以確保系統能修補最新的安全漏洞。",
    tags: ["Linux 核心", "Kernel 7.2", "開發進度", "資安更新", "Linux 核心元件"],
    title_en: "Linux Kernel Development Progress: Kernel 7.2-rc3 Stable Update, Continued Monitoring of Core Component Changes",
    summary_en: "This article provides an update on Linux kernel development progress, reporting on the status of Kernel 7.2-rc3. The content primarily describes the routine progress of core development, noting that the commit rate remains at a 'new normal' level. However, the author also mentions that the rate may have slowed slightly due to summer holidays. Such updates are crucial for tracking the stability, new feature integration, and potential security patches of the Linux kernel. Although the original text does not mention specific vulnerabilities or high-risk technical details, the continuous development and commit activity itself reflects core maintenance. Users and cybersecurity professionals are advised to continuously monitor Linux kernel release updates, especially patches for the stable branch, to ensure the system is patched against the latest security vulnerabilities.",
    tags_en: ["Linux Kernel", "Kernel 7.2", "Development Progress", "Cybersecurity Update", "Linux Kernel Component"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082487", lang: "EN" }
    ]
  },
  {
    id: "20260712-002",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc3 預覽版發布：新增 Ultra RISC-V 支援與多 GPU 顯示偵測改善",
    summary: "Linux 核心版本 7.2-rc3 已發布供測試，預計將穩定版 Linux 7.2 於今年八月推出。本次預覽版的主要更新包括將 Ultra RISC-V 支援加入 RISC-V 預設核心配置，修復 SEGA Dreamcast 驅動程式，並改善了多 GPU 系統的顯示偵測功能。此外，核心開發方面也宣布 Nick Desaulniers 返回 LLVM Linux 開發。Linux 7.2 版本預計將為 Ubuntu 26.10 等後續發行版提供支援。本次更新內容涵蓋了廣泛的 Bug/回歸修復，包括 AI 輔助的補丁，主要修復領域集中在驅動程式、網路和檔案系統等核心元件，整體趨勢顯示核心開發持續穩定。",
    tags: ["Linux 核心", "Linux 7.2", "RISC-V", "Ubuntu 26.10", "驅動程式", "LLVM"],
    title_en: "Linux 7.2-rc3 Preview Release: Adds Ultra RISC-V Support and Improves Multi-GPU Display Detection",
    summary_en: "Linux kernel version 7.2-rc3 has been released for testing, with the stable Linux 7.2 expected to launch this August. Key updates in this preview include adding Ultra RISC-V support to the default RISC-V core configuration, fixing the SEGA Dreamcast driver, and improving display detection functionality for multi-GPU systems. Furthermore, the core development team announced the return of Nick Desaulniers to LLVM Linux development. Linux 7.2 is expected to support future releases such as Ubuntu 26.10. This update encompasses extensive bug/regression fixes, including AI-assisted patches. Major areas of repair focus on core components such as drivers, networking, and file systems, indicating a continued stable trend in kernel development.",
    tags_en: ["Linux Kernel", "Linux 7.2", "RISC-V", "Ubuntu 26.10", "Driver", "LLVM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc3-Released", lang: "EN" }
    ]
  },
  {
    id: "20260712-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心更新：預設啟用 UltraRISC RISC-V 硬體支援，擴大 RISC-V 平台適用性",
    summary: "Linux 核心版本 7.2 在即將發布的 rc3 週測版本前，已將 UltraRISC RISC-V 硬體支援納入預設核心建構（defconfig）。此更新透過新增 ARCH_ULTRARISC Kconfig 支援，使主線核心預設啟用 UltraRISC RISC-V 支援。具體而言，這使得系統能夠支援搭載八個 UltraRISC C100 核心的 UR-DP1000 等 SoC。這類更新對於採用 RISC-V 架構的嵌入式系統和開發者至關重要，能大幅擴展 Linux 核心在多樣化 RISC-V 晶片上的應用範圍。開發者應關注 Linux 核心的開發進度，特別是針對特定 SoC 的 Kconfig 支援，以確保其目標硬體平台能順利整合最新的核心功能。",
    tags: ["Linux 7.2", "RISC-V", "UltraRISC", "核心更新", "ARCH_ULTRARISC", "SoC"],
    title_en: "Linux 7.2 Kernel Update: Default Enabling of UltraRISC RISC-V Hardware Support Expands RISC-V Platform Applicability",
    summary_en: "In the upcoming rc3 weekly build of the Linux kernel 7.2, UltraRISC RISC-V hardware support has been included in the default kernel configuration (defconfig). This update enables UltraRISC RISC-V support by adding ARCH_ULTRARISC Kconfig support, making it a default feature in the mainline kernel. Specifically, this allows the system to support SoCs such as the UR-DP1000, which feature eight UltraRISC C100 cores. Such updates are crucial for embedded systems and developers utilizing the RISC-V architecture, significantly expanding the application scope of the Linux kernel across diverse RISC-V chips. Developers should monitor the Linux kernel development progress, especially regarding Kconfig support for specific SoCs, to ensure their target hardware platform can smoothly integrate the latest kernel features.",
    tags_en: ["Linux 7.2", "RISC-V", "UltraRISC", "Kernel Update", "ARCH_ULTRARISC", "SoC"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-UltraRISC-RISC-V", lang: "EN" }
    ]
  },
  {
    id: "20260712-004",
    trackers: ["os"],
    category: "Linux",
    title: "Harmonic 韌體倡議 (HFI) 旨在為 RISC-V 平台提供標準化的開機與 BIOS 設定體驗",
    summary: "Harmonic 韌體倡議 (HFI) 是一個旨在為 RISC-V 架構的開發板提供通用、標準化的開機韌體體驗。其目標是模擬傳統 x86 系統的開機流程，包括顯示卡初始化、Power On Self Test (POST) 畫面，以及完整的 BIOS 設定工具。該專案由開發 QSOE QNX 啟發的 RISC-V 作業系統的團隊主導，初期目標硬體為 SiFive HiFive Unmatched 開發板。HFI 是作為 U-Boot 的延伸開發的，旨在大幅提升 RISC-V 系統的初始開機使用者體驗。雖然目前專案的目標硬體範圍較窄，但這項工作對於提升 RISC-V 生態系統的成熟度至關重要，未來若能獲得主要硬體供應商的廣泛採用，將有助於推動整個 RISC-V 平台的發展。",
    tags: ["RISC-V", "HFI", "U-Boot", "BIOS", "SiFive", "嵌入式系統"],
    title_en: "Harmonic Firmware Initiative (HFI) Aims to Provide Standardized Boot and BIOS Experience for RISC-V Platforms",
    summary_en: "The Harmonic Firmware Initiative (HFI) aims to provide a universal, standardized boot firmware experience for RISC-V architecture development boards. Its goal is to emulate the boot process of traditional x86 systems, including graphics card initialization, Power On Self Test (POST) screens, and complete BIOS setup utilities. The project is led by the team that developed the RISC-V operating system inspired by QSOE QNX, with initial target hardware being the SiFive HiFive Unmatched development board. HFI is developed as an extension of U-Boot, aiming to significantly improve the initial boot user experience of RISC-V systems. Although the project's current target hardware scope is narrow, this work is crucial for enhancing the maturity of the RISC-V ecosystem. If it gains widespread adoption from major hardware vendors in the future, it will help drive the development of the entire RISC-V platform.",
    tags_en: ["RISC-V", "HFI", "U-Boot", "BIOS", "SiFive", "Embedded Systems"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Harmonic-Firmware-Initiative", lang: "EN" }
    ]
  },
  {
    id: "20260712-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc3 核心更新：修復 SEGA Dreamcast 驅動程式的空指針與競態條件問題",
    summary: "本次 Linux 7.2-rc3 核心版本包含多項針對 SEGA Dreamcast 舊式硬體驅動程式的修復。這些修復主要由 Linux 輸入子系統維護者 Dmitry Torokhov 實施，旨在改善 Dreamcast 鍵盤、滑鼠和操縱桿驅動程式，以正確處理驅動程式資料設定和設備註冊，從而避免核心中的競態條件（race conditions）。此外，Florian Fuchs 針對 SEGA Dreamcast 的「Maple」滑鼠驅動程式修復了一個自 2017 年以來存在的空指針解引用（null pointer dereference）導致的核心崩潰問題。雖然主線 Linux 核心開始逐步淘汰對老舊硬體的支援，但這些更新仍讓在 CD-R 上製作專用 Linux 系統，並使用 Dreamcast 鍵盤滑鼠進行互動的可能性得以維持。其他相關修復包括 GD-ROM 驅動程式和 VMUFAT 檔案系統驅動程式的討論，但 VMUFAT 驅動程式因 Linux 檔案系統要求收緊而未被納入上游。這些修復作為本週輸入驅動程式修復的一部分，已合併至 Linux 7.2-rc3。",
    tags: ["Linux 7.2-rc3", "SEGA Dreamcast", "核心驅動程式", "空指針解引用", "競態條件", "輸入子系統"],
    title_en: "Linux 7.2-rc3 Kernel Update: Fixing Null Pointer and Race Condition Issues in SEGA Dreamcast Drivers",
    summary_en: "This Linux 7.2-rc3 kernel version includes multiple fixes for legacy SEGA Dreamcast hardware drivers. These fixes were primarily implemented by Linux input subsystem maintainer Dmitry Torokhov, aiming to improve the Dreamcast keyboard, mouse, and joystick drivers by correctly handling driver data setup and device registration, thereby preventing race conditions in the kernel. Additionally, Florian Fuchs fixed a core crash issue in the SEGA Dreamcast 'Maple' mouse driver, which was caused by a null pointer dereference and had existed since 2017. Although the mainline Linux kernel is gradually phasing out support for older hardware, these updates maintain the possibility of creating dedicated Linux systems on CD-R and interacting with them using Dreamcast keyboards and mice. Other related fixes included discussions for the GD-ROM driver and the VMUFAT file system driver, but the VMUFAT driver was not included upstream due to tightening Linux file system requirements. These fixes, as part of this week's input driver updates, have been merged into Linux 7.2-rc3.",
    tags_en: ["Linux 7.2-rc3", "SEGA Dreamcast", "Kernel Driver", "Null Pointer Dereference", "Race Condition", "Input Subsystem"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc3-SEGA-Dreamcast", lang: "EN" }
    ]
  },
  {
    id: "20260712-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Realtek RTL8723BS WiFi 驅動程式修補：強化防禦惡意無線基地台的記憶體越界漏洞",
    summary: "本次 Linux 核心的開發更新，主要針對 Realtek RTL8723BS WiFi 驅動程式進行了安全強化。該驅動程式在連接到惡意或「不良」的 WiFi 存取點時，存在記憶體越界（Out-of-Bounds, OOB）的風險。攻擊者若能提供惡意控制的過空傳輸（over-the-air）幀資料，可能導致驅動程式在處理資料時，未能正確驗證標頭或負載，進而引發 OOB 讀寫操作。這些安全漏洞已自 2017 年驅動程式進入 Linux 核心預備區以來持續存在。開發者已修補了這些問題，並將在 Linux 7.2-rc3 核心發布前合併，同時也會回溯應用到現有的穩定核心版本。修補建議是系統更新至包含此修補的 Linux 核心版本，以確保處理惡意 WiFi 訊號時的安全性。",
    tags: ["Realtek", "RTL8723BS", "Linux 核心", "WiFi 驅動程式", "OOB", "Linux 7.2-rc3"],
    title_en: "Realtek RTL8723BS WiFi Driver Patch: Strengthening Defense Against Memory Out-of-Bounds Vulnerabilities in Malicious Wireless Access Points",
    summary_en: "This Linux kernel development update primarily focuses on security enhancements for the Realtek RTL8723BS WiFi driver. The driver contains a risk of Out-of-Bounds (OOB) memory vulnerabilities when connecting to malicious or 'bad' WiFi access points. If an attacker can provide malicious, controlled over-the-air frame data, it may cause the driver to fail to correctly validate headers or payloads while processing the data, thereby triggering OOB read/write operations. These security vulnerabilities have persisted since the driver entered the Linux kernel reserve area in 2017. Developers have patched these issues and will merge them before the release of the Linux 7.2-rc3 kernel, while also backporting them to existing stable kernel versions. The patch recommends that systems update to a Linux kernel version containing this fix to ensure security when handling malicious WiFi signals.",
    tags_en: ["Realtek", "RTL8723BS", "Linux Kernel", "WiFi Driver", "OOB", "Linux 7.2-rc3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Realtek-RTL8723BS-WiFi-Bad-APs", lang: "EN" }
    ]
  },
  {
    id: "20260712-007",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布多產品生命週期終結：Windows 11 24H2、Office 2021及SQL Server 2016等將於 2026 年停止支援",
    summary: "本文彙整了微軟多款關鍵產品在 2026 年將達到終止支援的時程表，包括 Windows 11 24H2（Home/Pro）、Office 2021、Windows Server 2012/2012 R2，以及 SQL Server 2016 等。產品停止支援後，將無法獲得安全更新和修復，除非購買額外付費的延伸安全更新（ESU）。Windows 11 24H2 的終止日期為 2026 年 10 月 13 日，建議用戶應升級至 25H2 或更高版本，或考慮升級至企業版以延後支援期限。Office 2021 系列產品亦在同年終止支援，建議轉向 Microsoft 365 訂閱服務。對於企業級應用，如 SQL Server 2016（2026 年 7 月 14 日）和 SharePoint Server 2016/2019，建議規劃遷移至雲端服務（如 Azure SQL Database）或升級到支援訂閱模式的產品，以維持資料的安全性與合規性。",
    tags: ["Microsoft", "Windows 11 24H2", "Office 2021", "SQL Server 2016", "Windows Server 2012", "End of Life", "ESU"],
    title_en: "Microsoft Announces End of Life for Multiple Products: Windows 11 24H2, Office 2021, and SQL Server 2016 to Cease Support in 2026",
    summary_en: "This article compiles the end-of-support schedule for several key Microsoft products in 2026, including Windows 11 24H2 (Home/Pro), Office 2021, Windows Server 2012/2012 R2, and SQL Server 2016. After product support ends, they will no longer receive security updates and patches, unless an extended paid security update (ESU) is purchased. The end date for Windows 11 24H2 is October 13, 2026, and users are advised to upgrade to 25H2 or a higher version, or consider upgrading to an enterprise edition to extend the support period. The Office 2021 series products will also end support in the same year, and users are advised to transition to the Microsoft 365 subscription service. For enterprise applications, such as SQL Server 2016 (July 14, 2026) and SharePoint Server 2016/2019, it is recommended to plan migration to cloud services (such as Azure SQL Database) or upgrade to products that support a subscription model, to maintain data security and compliance.",
    tags_en: ["Microsoft", "Windows 11 24H2", "Office 2021", "SQL Server 2016", "Windows Server 2012", "End of Life", "ESU"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/12/microsoft-is-killing-15-products-in-2026-including-windows-11-24h2-and-office-2021", lang: "EN" }
    ]
  },
  {
    id: "20260712-008",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Copilot「PC Insights」功能詳解：AI可分析系統資源、硬體與儲存狀態",
    summary: "微軟在 Windows 11 中測試了一項名為「PC Insights」的 AI 功能，讓 Copilot 能夠理解並分析系統資源使用情況，幫助使用者找出電腦性能或儲存問題的根本原因。此功能允許使用者提問，Copilot 可根據裝置的即時硬體狀態提供答案，例如判斷是否足夠安裝大型遊戲，或查詢 CPU/RAM/GPU 使用率。它能讀取系統資源、儲存空間、連接的 USB 設備、網路狀態、電池健康度、BIOS資訊等。雖然微軟強調此功能是可選且需用戶授權，但用戶需注意，若將權限設定為「總是允許」，Copilot 將能存取大量系統資訊。此外，文章指出 Copilot 本身作為一個 Web 應用程式，在閒置時可能佔用高達 1GB 的 RAM，存在資源消耗的矛盾。微軟聲稱不會使用個人檔案訓練模型，僅使用對話活動，但用戶應謹慎評估其數據收集範圍。",
    tags: ["Windows 11", "Copilot", "PC Insights", "系統資源", "AI 輔助", "微軟"],
    title_en: "Deep Dive into Windows 11 Copilot's 'PC Insights' Feature: AI Analyzes System Resources, Hardware, and Storage Status",
    summary_en: "Microsoft has tested an AI feature in Windows 11 called 'PC Insights,' which allows Copilot to understand and analyze system resource usage, helping users pinpoint the root cause of computer performance or storage issues. This feature enables users to ask questions, and Copilot can provide answers based on the device's real-time hardware status—for example, determining if there is enough space to install large games, or checking CPU/RAM/GPU utilization. It can read system resources, storage space, connected USB devices, network status, battery health, BIOS information, and more. Although Microsoft emphasizes that this feature is optional and requires user permission, users should note that if the permission is set to 'always allow,' Copilot will have access to a large amount of system information. Furthermore, the article points out a contradiction: Copilot itself, as a web application, may consume up to 1GB of RAM when idle, indicating resource consumption. While Microsoft claims it will not use personal files to train models, only conversational activity, users should carefully evaluate the scope of its data collection.",
    tags_en: ["Windows 11", "Copilot", "PC Insights", "System Resources", "AI Assistance", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/12/windows-11-copilot-ai-can-now-tell-you-whats-slowing-down-your-pc-while-using-1gb-of-ram-itself", lang: "EN" }
    ]
  },
  {
    id: "20260712-009",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "RedHook惡意軟體利用無線ADB功能，無需Root即可取得高權限Shell存取",
    summary: "資安公司 Group-IB 分析了新型惡意軟體 RedHook，指出其大幅擴展了攻擊能力。該惡意軟體利用 Android 11 引入的無線 ADB (Android Debug Bridge) 機制，結合透過欺騙使用者授予的「輔助功能權限」，無需 Root 即可建立高權限的 Shell 存取。攻擊鏈的關鍵步驟是讓受害者啟動無線除錯，隨後惡意軟體透過本地環回介面 (127.0.0.1) 進行配對和控制。取得權限後，RedHook 部署了 Shizuku 框架，利用其作為特權伺服器，執行 UID 2000 等級的系統指令。這使得攻擊者能夠進行螢幕串流、攔截按鍵、模擬操作、安裝/移除應用程式，甚至創建假冒的驗證對話框。該惡意軟體還具備多重持久化機制，包括使用 WakeLocks 和自啟動服務，並透過社工手法散播，建議用戶僅從 Google Play 安裝應用，並仔細審查權限請求。",
    tags: ["RedHook", "Android", "無線ADB", "Shell存取", "輔助功能權限", "Group-IB"],
    title_en: "RedHook Malware Exploits Wireless ADB Functionality to Gain High-Privilege Shell Access Without Root",
    summary_en: "Cybersecurity firm Group-IB analyzed a new piece of malware called RedHook, noting that it significantly expands attack capabilities. This malware exploits the wireless ADB (Android Debug Bridge) mechanism introduced in Android 11, combined with 'accessibility permissions' fraudulently granted by the user, to establish high-privilege Shell access without requiring Root. A critical step in the attack chain is tricking the victim into initiating wireless debugging, after which the malware performs pairing and control via the local loopback interface (127.0.0.1). After gaining permissions, RedHook deploys the Shizuku framework, utilizing it as a privileged server to execute system commands at the UID 2000 level. This enables the attacker to perform screen streaming, keylogging, simulating operations, installing/uninstalling applications, and even creating fake authentication dialog boxes. The malware also features multiple persistence mechanisms, including the use of WakeLocks and self-starting services, and is spread through social engineering tactics, advising users to only install applications from Google Play and to carefully review permission requests.",
    tags_en: ["RedHook", "Android", "Wireless ADB", "Shell Access", "Accessibility Permissions", "Group-IB"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/redhook-android-malware-now-uses-wireless-adb-for-shell-access", lang: "EN" }
    ]
  },
  {
    id: "20260712-010",
    trackers: ["os"],
    category: "Apple",
    title: "Apple M7 Ultra 晶片預計支援 1.5TB 統一記憶體，有望追平頂級 Mac Pro 配置",
    summary: "根據 Mark Gurman 的報導，Apple 正在為即將推出的 M7 Ultra 晶片進行準備，使其能夠支援高達 1.5TB 的統一記憶體（Unified Memory）。這項技術突破有望讓 Apple Silicon 的記憶體配置，能追平甚至超越 2019 年頂級 Intel Mac Pro 的最高規格。目前 Apple Silicon 的記憶體容量一直受限於晶片設計，但 M7 Ultra 的設計目標是支援 1.5TB，這比預計的 M5 Ultra 的容量（768GB）還要高出許多。不過，報導指出最終是否能達到 1.5TB 的配置，仍取決於產業記憶體晶片供應鏈的狀況。此外，Apple 今年稍晚還將推出 M5 Ultra 晶片，支援高達 768GB 的統一記憶體。目前，Apple 提升記憶體容量的成本估計約為每 GB $25，從基礎配置升級到 1.5TB 的費用預計將超過 $35,000。",
    tags: ["Apple Silicon", "M7 Ultra", "M5 Ultra", "統一記憶體", "Mac Studio", "Apple 晶片"],
    title_en: "Apple M7 Ultra Chip Expected to Support 1.5TB Unified Memory, Potentially Matching Top-Tier Mac Pro Configurations",
    summary_en: "According to Mark Gurman's report, Apple is preparing the upcoming M7 Ultra chip to support up to 1.5TB of Unified Memory. This technological breakthrough could allow Apple Silicon's memory configurations to match or even surpass the highest specifications of the 2019 top-tier Intel Mac Pro. Currently, Apple Silicon's memory capacity has been limited by chip design, but the M7 Ultra's design goal is to support 1.5TB, which is significantly higher than the expected capacity of the M5 Ultra (768GB). However, the report notes that whether the 1.5TB configuration can ultimately be achieved depends on the status of the industry memory chip supply chain. Furthermore, Apple will later this year launch the M5 Ultra chip, which supports up to 768GB of Unified Memory. Currently, the estimated cost for Apple to increase memory capacity is about $25 per GB, and upgrading from the base configuration to 1.5TB is expected to cost over $35,000.",
    tags_en: ["Apple Silicon", "M7 Ultra", "M5 Ultra", "Unified Memory", "Mac Studio", "Apple Chip"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/12/m7-ultra-mac-studio-to-support-up-to-1-5-tb-unified-memory", lang: "EN" }
    ]
  },
  {
    id: "20260712-011",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳開發新一代 Apple Pencil 配件，預計具備可更換電池系統以符合歐盟法規",
    summary: "根據彭博社報導，蘋果正在開發一系列新的 Apple Pencil 手寫筆配件，預計將於 2027 年春季與新款 iPad Pro 型號一同發布。這包括新一代的 Apple Pencil (USB-C) 和無線充電的 Apple Pencil Pro。報導指出，這些新款手寫筆可能會整合新的電池系統，並設計成更易於使用者自行更換，以符合即將實施的歐盟法規要求。此舉顯示蘋果正積極應對全球日益嚴格的產品可修復性（Right to Repair）趨勢，提升產品的耐用性與使用者便利性。目前文章未提供具體的技術細節或安全漏洞資訊，僅為產品線的預期更新。",
    tags: ["Apple Pencil", "iPad Pro", "Apple", "電池更換", "歐盟法規", "可修復性"],
    title_en: "Apple reportedly developing next-generation Apple Pencil accessories, expected to feature replaceable battery system to comply with EU regulations",
    summary_en: "According to Bloomberg, Apple is developing a series of new Apple Pencil accessories, expected to launch in Spring 2027 alongside the new iPad Pro models. These include the next-generation Apple Pencil (USB-C) and the wireless charging Apple Pencil Pro. The report indicates that these new styluses may integrate a new battery system, designed to be easier for users to replace, in order to comply with upcoming EU regulatory requirements. This move demonstrates Apple's proactive response to the global trend toward stricter product Right to Repair standards, enhancing product durability and user convenience. The article currently provides no specific technical details or security vulnerability information, only anticipated product line updates.",
    tags_en: ["Apple Pencil", "iPad Pro", "Apple", "Battery Replacement", "EU Regulations", "Right to Repair"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/12/apple-pencil-ipad-new-battery-replacement", lang: "EN" }
    ]
  },
  {
    id: "20260712-012",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 Pro Fold 外觀洩漏：揭示「Pine」綠色與改進的相機模組設計",
    summary: "本文報導了關於 Pixel 11 Pro Fold 的外觀洩漏資訊，特別是其「Pine」綠色版本。該洩漏圖示顯示，Pixel 11 Pro Fold 將採用此款較淺的綠色，並與淺金色邊框搭配「G」標誌。相機模組設計有明顯變化，相機切口延伸至邊緣，且相機陣列的佈局有所調整，主鏡和超廣角鏡位於底部，而望遠鏡則移至右上角。相較於前代，相機閃光燈似乎尺寸更大，引發了關於是否整合「Pixel Glow」功能的猜測。整體而言，設計上呈現更精緻的邊框處理，但具體的硬體規格和功能仍待官方確認。",
    tags: ["Pixel 11 Pro Fold", "Pine", "Google Pixel", "手機外觀", "相機模組", "Android"],
    title_en: "Pixel 11 Pro Fold Exterior Leak: Revealing 'Pine' Green and Improved Camera Module Design",
    summary_en: "This article reports on leaked exterior information regarding the Pixel 11 Pro Fold, specifically its 'Pine' green version. The leaked images show that the Pixel 11 Pro Fold will adopt this lighter green color, paired with a light gold bezel and a 'G' logo. The camera module design shows noticeable changes: the camera cutout extends to the edge, and the arrangement of the camera array has been adjusted. The main and ultra-wide lenses are located at the bottom, while the telephoto lens is moved to the upper right corner. Compared to the previous generation, the camera flash appears to be larger, sparking speculation about the integration of a 'Pixel Glow' feature. Overall, the design features more refined bezel treatment, but specific hardware specifications and functions are still pending official confirmation.",
    tags_en: ["Pixel 11 Pro Fold", "Pine", "Google Pixel", "Smartphone Exterior", "Camera Module", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/12/pixel-11-pro-pine-color-leak", lang: "EN" }
    ]
  },
  {
    id: "20260712-013",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Pixel 11 系列預計漲價，但文章未提供資安或技術漏洞資訊",
    summary: "本文源自 9to5Google 的文章，主要討論 Google Pixel 11 系列手機的價格上漲趨勢。文章內容僅提及該系列可能面臨價格調漲的問題，並指出這讓消費者難以接受。由於原文內容缺乏任何關於資安漏洞、CVE 編號、技術細節、受影響產品或修補建議的資訊，因此無法提供具體的資安分析。建議讀者應關注官方發布的產品規格與安全更新公告。",
    tags: ["Google", "Pixel 11", "價格變動", "Android"],
    title_en: "Google Pixel 11 Series Expected to Increase Price, But Article Lacks Security or Technical Vulnerability Information",
    summary_en: "This article is sourced from 9to5Google and primarily discusses the price increase trend for the Google Pixel 11 series of smartphones. The content only mentions the potential issue of price hikes for this series, pointing out that this makes it difficult for consumers to accept. Since the original text lacks any information regarding security vulnerabilities, CVE IDs, technical details, affected products, or patch recommendations, specific security analysis cannot be provided. Readers are advised to monitor official announcements regarding product specifications and security updates.",
    tags_en: ["Google", "Pixel 11", "Price Change", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/12/google-pixel-price-hike-problems", lang: "EN" }
    ]
  },
  {
    id: "20260712-014",
    trackers: ["os"],
    category: "Android",
    title: "Google Store 推出 Pixel 10 Pro 深度折扣，限時促銷至 $699",
    summary: "本文報導 Google Store 正在進行一場罕見的 Pixel 10 Pro 深度折扣活動。受影響產品為特定型號的 Pixel 10 Pro（128 GB Obsidian），折扣金額為 $300，促銷後價格為 $699。此為 Google Store 迄今最大的折扣，甚至超越了 Prime Day 的優惠。此外，用戶還可以在 Google Store 和 Amazon 找到 Pixel 10 Pro 或 Pro XL 的 $250 折扣優惠。文章推測，Google 可能正在清理過剩庫存，以應對下一代 Pixel 11 的發布。目前，Pixel 10 型號也提供 $200 的折扣。這些促銷活動將持續到 2026 年 7 月 26 日。消費者應注意，部分顏色和儲存容量的庫存目前已告售罄或正在等待補貨。",
    tags: ["Google Store", "Pixel 10 Pro", "Pixel 10", "Android", "促銷活動", "庫存管理"],
    title_en: "Google Store Launches Deep Discount on Pixel 10 Pro, Limited-Time Sale Down to $699",
    summary_en: "This article reports that the Google Store is holding a rare deep discount event on the Pixel 10 Pro. The affected product is the Pixel 10 Pro (128 GB Obsidian), with a discount of $300, bringing the sale price to $699. This is the largest discount offered by the Google Store to date, surpassing even Prime Day deals. Additionally, users can find $250 discounts on the Pixel 10 Pro or Pro XL at both the Google Store and Amazon. The article speculates that Google may be clearing excess inventory in anticipation of the next-generation Pixel 11 release. Currently, the Pixel 10 model also offers a $200 discount. These promotions will run until July 26, 2026. Consumers should note that stock for certain colors and storage capacities is currently sold out or awaiting restock.",
    tags_en: ["Google Store", "Pixel 10 Pro", "Pixel 10", "Android", "Promotion", "Inventory Management"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/12/pixel-10-pro-discount", lang: "EN" }
    ]
  },
  {
    id: "20260712-015",
    trackers: ["os", "security"],
    category: "Android",
    title: "SonicCloudOrg sonic-agent 存在遠端命令注入漏洞，影響 Android WebSocket Server 組件",
    summary: "SonicCloudOrg 的 sonic-agent 在其 Android WebSocket Server 組件中，存在一個遠端命令注入（Command Injection）漏洞。該漏洞源於對參數路徑（argument path）的操縱，允許攻擊者在遠端執行系統命令。此漏洞影響的版本範圍為 2.7.0 至 2.7.2。由於此漏洞的性質，攻擊者可透過遠端方式發起攻擊。值得注意的是，該漏洞僅影響尚未得到維護者支援的產品版本。文章指出，供應商在漏洞披露初期未做出任何回應。修補建議是升級至受支援的版本，或使用修補後的版本，但原文未提供具體修補版本號。建議用戶應立即評估產品的支援狀態，並採取必要的安全措施。",
    tags: ["SonicCloudOrg", "sonic-agent", "CVE-2026-15495", "命令注入", "Android WebSocket Server", "遠端漏洞"],
    title_en: "SonicCloudOrg sonic-agent has Remote Command Injection Vulnerability Affecting Android WebSocket Server Component",
    summary_en: "The sonic-agent from SonicCloudOrg contains a Remote Command Injection vulnerability within its Android WebSocket Server component. This vulnerability stems from the manipulation of the argument path, allowing an attacker to execute system commands remotely. The affected version range is 2.7.0 to 2.7.2. Due to the nature of this vulnerability, attackers can launch attacks remotely. It is noteworthy that this vulnerability only affects product versions that have not received vendor support. The article points out that the vendor did not provide any initial response upon vulnerability disclosure. The suggested remediation is to upgrade to a supported version or use a patched version, although the original text did not provide a specific patched version number. Users are advised to immediately assess their product's support status and take necessary security measures.",
    tags_en: ["SonicCloudOrg", "sonic-agent", "CVE-2026-15495", "Command Injection", "Android WebSocket Server", "Remote Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15495", lang: "EN" }
    ]
  },
  {
    id: "20260712-016",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 學生回歸促銷活動預計本週推出，但價格上漲影響促銷誘因",
    summary: "本文報導根據 Bloomberg 的 Mark Gurman 消息，Apple 的「回歸學校」（Back to School）促銷活動預計將在本週內推出。該活動通常會為學生提供購買 Mac 或 iPad 的特殊優惠，例如贈送配件或 Apple 禮品卡。然而，由於記憶體短缺導致 Mac 和 iPad 的價格大幅上漲，Apple 可能需要提供更高的誘因來鼓勵學生購買。此外，Apple 已在美國教育商店加入了 UNiDAYS 驗證機制，參與此類促銷活動必須是經過驗證的學生。文章未提供具體的促銷細節或技術漏洞資訊，僅為產品銷售與市場趨勢報導。",
    tags: ["Apple", "回歸學校", "Back to School", "學生促銷", "UNiDAYS", "MacBook", "iPad"],
    title_en: "Apple's Back to School Promotion Expected This Week, But Price Hikes Diminish Incentive",
    summary_en: "According to reporting by Bloomberg's Mark Gurman, Apple's 'Back to School' promotion is expected to launch this week. This event typically offers special discounts to students purchasing Macs or iPads, such as free accessories or Apple gift cards. However, due to memory shortages causing significant price increases for Macs and iPads, Apple may need to offer higher incentives to encourage student purchases. Furthermore, Apple has integrated the UNiDAYS verification mechanism into its US education store, meaning participation in such promotions requires verified student status. The article does not provide specific promotional details or technical vulnerability information; it is solely a report on product sales and market trends.",
    tags_en: ["Apple", "Back to School", "Back to School", "Student Promotion", "UNiDAYS", "MacBook", "iPad"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/12/gurman-apples-back-to-school-deal-for-u-s-students-likely-launching-later-this-week", lang: "EN" }
    ]
  },
  {
    id: "20260712-017",
    trackers: ["security"],
    category: "uncategorized",
    title: "資安機構Binarly揭露U-Boot開機載入程式六大漏洞，影響廣泛的硬體設備韌體安全",
    summary: "資安研究機構Binarly於7月初公開，指出全球廣泛使用的開放原始碼開機載入程式U-Boot存在六個安全漏洞。其中兩個漏洞（BRLY-2026-037、BRLY-2026-038）具有任意程式碼執行（RCE）的潛在風險，而其他四個漏洞則可能導致服務中斷（DoS）。由於U-Boot自2013年推出以來，已累積了大量版本，且應用於家用路由器、網路攝影機及伺服器BMC等多種關鍵硬體設備，因此其安全風險極為廣泛。Binarly已向社群通報並提供修補程式，這些修補程式已納入U-Boot主分支。然而，由於U-Boot的發行版本凍結，修補程式尚未包含在最新的穩定發行版中，建議所有使用相關設備的用戶，應密切關注後續版本更新，盡快進行修補。",
    tags: ["U-Boot", "Binarly", "韌體漏洞", "開機載入程式", "RCE", "硬體安全"],
    title_en: "Cybersecurity Firm Binarly Discloses Six U-Boot Bootloader Vulnerabilities Affecting Wide Range of Hardware Device Firmware",
    summary_en: "Cybersecurity research firm Binarly disclosed in early July that the widely used open-source bootloader U-Boot contains six security vulnerabilities. Two of these vulnerabilities (BRLY-2026-037, BRLY-2026-038) pose a potential risk of Remote Code Execution (RCE), while the other four may lead to Denial of Service (DoS). Given that U-Boot has accumulated numerous versions since its introduction in 2013, and is applied to various critical hardware devices such as home routers, network cameras, and server BMCs, its security risk is extremely widespread. Binarly has notified the community and provided patches, which have been incorporated into the U-Boot main branch. However, due to the freezing of U-Boot's release versions, the patches have not yet been included in the latest stable release. It is recommended that all users of affected devices closely monitor subsequent version updates and apply the patches as soon as possible.",
    tags_en: ["U-Boot", "Binarly", "Firmware Vulnerability", "Bootloader", "RCE", "Hardware Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177240", lang: "ZH-TW" }
    ]
  }
];
