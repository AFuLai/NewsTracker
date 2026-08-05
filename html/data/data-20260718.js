// data-20260718.js — 2026-07-18
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-18"] = [
  {
    id: "20260718-001",
    trackers: ["os"],
    category: "Linux",
    title: "AMD Linux 顯示卡驅動程式釋出更新，修復 Apple Studio Display 的 5K 雙連結顯示問題",
    summary: "AMD 針對 Linux 核心的 AMDGPU 顯示核心（DC）發布了含 70 檔修補程式的更新。本次重大修正解決了在 Linux 系統下使用 AMD Radeon 顯示卡驅動 Apple Studio Display 27 吋 5K 螢幕時的相容性問題。原本該驅動程式的 DisplayPort 處理機制不完善，會將該螢幕解讀為兩個獨立的 SST 連結，導致桌面合成器錯誤且混亂地同時驅動兩個拼貼串流。新修補程式將隱藏並斷開第二個連結，避免其暴露給使用者空間，確保僅透過主要連結輸出單一 5K 串流。此變更有望納入 Linux 核心 v7.3 版本，使用者屆時需更新核心以解決畫面異常。",
    tags: ["AMD", "AMDGPU", "Linux Kernel", "Apple Studio Display", "DisplayPort", "Radeon", "驅動程式更新"],
    title_en: "AMD Linux Graphics Driver Releases Update, Fixing 5K Dual-Link Display Issue on Apple Studio Display",
    summary_en: "AMD has released an update containing 70 patches for the AMDGPU Display Core (DC) in the Linux kernel. This major fix addresses a compatibility issue when driving the Apple Studio Display 27-inch 5K monitor using AMD Radeon graphics cards under Linux systems. Previously, the driver's flawed DisplayPort handling mechanism would interpret the monitor as two separate SST links, causing desktop compositors to incorrectly and chaotically drive two tiled streams simultaneously. The new patches will hide and disconnect the second link, preventing it from being exposed to user space and ensuring a single 5K stream is output solely through the primary link. This change is expected to be integrated into Linux kernel version v7.3, and users will need to update their kernel to resolve the display anomalies.",
    tags_en: ["AMD", "AMDGPU", "Linux Kernel", "Apple Studio Display", "DisplayPort", "Radeon", "Driver Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMDGPU-DC-Apple-Studio-Display", lang: "EN" }
    ]
  },
  {
    id: "20260718-002",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME OS 推出全新「安全模式」：跳過 systemd-sysext 擴充以大幅提升 Linux 系統復原力",
    summary: "在西班牙舉辦的 GUADEC 2026 大會上，GNOME 發行團隊揭露了 GNOME OS 的最新進展。這款作為 Linux 開發與測試環境的映像檔導向系統（Image-based system），正式引入了全新的「安全模式」（Safe Mode）機制。當系統因 NVIDIA 驅動程式異常或系統擴充元件損壞而無法順利開機時，該模式將作為後備方案。技術細節上，GNOME OS 仰賴 systemd-sysupdate 進行更新，並透過 systemd-sysext 管理擴充映像檔；安全模式啟動時會主動跳過載入所有 systemd-sysexts，確保即便安裝了錯誤的擴充元件，系統依然能維持基本開機能力。此外，本次更新亦包含強化行動裝置與 Android 支援、導入 firewalld 防火牆及 Thermald 運作，實務上可大幅縮短開發者的故障排除時間並提升系統可靠度。",
    tags: ["GNOME OS", "GUADEC 2026", "systemd-sysext", "Linux", "安全模式", "系統復原"],
    title_en: "GNOME OS Launches New 'Safe Mode': Bypasses systemd-sysext Extensions to Greatly Enhance Linux System Resilience",
    summary_en: "At GUADEC 2026 in Spain, the GNOME release team unveiled the latest developments for GNOME OS. This image-based system, designed as a Linux development and testing environment, has formally introduced a brand new 'Safe Mode' mechanism. This mode serves as a fallback solution when the system fails to boot properly due to NVIDIA driver anomalies or corrupted system extensions. Technically, GNOME OS relies on systemd-sysupdate for updates and uses systemd-sysext to manage extension images; when Safe Mode starts, it actively skips loading all systemd-sysexts, ensuring that the system maintains basic boot functionality even if incorrect extensions are installed. Furthermore, this update includes enhanced support for mobile devices and Android, the integration of the firewalld firewall, and the implementation of Thermald operation. Practically, this significantly reduces developers' troubleshooting time and improves system reliability.",
    tags_en: ["GNOME OS", "GUADEC 2026", "systemd-sysext", "Linux", "Safe Mode", "System Resilience"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-OS-Safe-Mode", lang: "EN" }
    ]
  },
  {
    id: "20260718-003",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 系統監視器全新升級：支援一鍵分配行程 CPU 親和性與多項效能優化",
    summary: "KDE 開發團隊在最新一期的週報中，公布了即將於 KDE Plasma 6.8 桌面環境中推出的數項重大功能與系統優化。其中最受矚目的改進是 KDE 系統監視器（System Monitor）新增了方便的 CPU 親和性（CPU Affinity）管理功能，讓使用者能直接在介面中將特定行程或應用程式指派給特定的 CPU 核心或核心群組。此外，新版 KWin 視窗管理器也實作了伺服器端陰影效果，可大幅改善 Steam 及 Discord 等應用的顯示外觀。在維護與效能方面，針對舊版本的 Plasma 6.7.4 修正了 Discover 軟體中心在安裝更新時可能引發崩潰的常見問題，而即將推出的 KDE Frameworks 6.29 則透過優化 KSVG 與 KGUIAddons 的快取機制，有效降低了系統記憶體佔用。目前官方尚未針對此更新公告相關的 CVE 編號或 CVSS 漏洞評級。實務上建議使用 Linux 相關發行版的用戶密切留意後續的版本更新發布，以取得更佳的處理器效能分配與系統穩定度。",
    tags: ["KDE Plasma 6.8", "Linux", "CPU Affinity", "System Monitor", "KWin", "Discover", "KDE Frameworks 6.29", "效能優化"],
    title_en: "KDE Plasma 6.8 System Monitor Receives Brand-New Upgrade: Supports One-Click Allocation of Process CPU Affinity and Multiple Performance Optimizations",
    summary_en: "In the latest edition of their weekly report, the KDE development team announced several major features and system optimizations upcoming in the KDE Plasma 6.8 desktop environment. The most highly anticipated improvement is the addition of a convenient CPU Affinity management feature in KDE System Monitor, allowing users to directly assign specific processes or applications to specific CPU cores or core groups within the interface. Furthermore, the new version of the KWin window manager implements server-side shadow effects, which can significantly improve the visual appearance of applications like Steam and Discord. Regarding maintenance and performance, a common issue in the older version, Plasma 6.7.4, where the Discover software center could crash while installing updates, has been fixed, while the upcoming KDE Frameworks 6.29 effectively reduces system memory usage by optimizing the caching mechanisms of KSVG and KGUIAddons. Currently, the official announcement has not disclosed any CVE IDs or CVSS vulnerability ratings related to this update. In practice, it is recommended that users of relevant Linux distributions keep a close eye on subsequent version update releases to obtain better processor performance allocation and system stability.",
    tags_en: ["KDE Plasma 6.8", "Linux", "CPU Affinity", "System Monitor", "KWin", "Discover", "KDE Frameworks 6.29", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-CPU-Affinity", lang: "EN" }
    ]
  },
  {
    id: "20260718-004",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 遊戲轉譯層 DXVK 3.0.2 正式發布，強化 GPU 當機偵錯功能並修復多款遊戲錯誤",
    summary: "Valve 旗下的 Linux 遊戲技術迎來新進展，將 Direct3D 8、9、10、11 轉換為 Vulkan API 的轉譯層 DXVK 正式推出 3.0.2 版本。此版本主要修復了多款知名遊戲的執行問題，包含解決 NVIDIA 顯示卡上的異常 GPU 當機、特定遊戲的渲染錯誤，以及啟用 FSR 時的效能倒退現象，受影響遊戲涵蓋《Overwatch》與《Dying Light: The Beast》等。在技術層面上，新版本引進了全新的環境變數偵錯機制，讓開發者與使用者在遇到 Vulkan 裝置遺失導致的驅動程式崩潰或當機時，能更輕鬆地獲取關鍵的除錯資訊。實務上，官方建議 Linux 遊戲玩家與相關開發人員適時更新此元件以提升系統穩定度。",
    tags: ["DXVK", "Linux Gaming", "Vulkan", "Valve", "GPU Debugging", "NVIDIA", "AMD"],
    title_en: "Linux gaming translation layer DXVK 3.0.2 officially released, enhancing GPU crash debugging and fixing bugs in multiple games",
    summary_en: "Valve's Linux gaming technology marks new progress as DXVK, the translation layer that converts Direct3D 8, 9, 10, and 11 to the Vulkan API, officially rolls out version 3.0.2. This release primarily fixes execution issues across several well-known games, including resolving abnormal GPU crashes on NVIDIA graphics cards, rendering errors in specific games, and performance regressions when FSR is enabled, with affected games spanning Overwatch and Dying Light: The Beast. On a technical level, the new version introduces a brand-new environment variable debugging mechanism, making it easier for developers and users to obtain critical debugging information when encountering driver crashes or hangs caused by a lost Vulkan device. In practice, officials recommend that Linux gamers and related developers update this component in a timely manner to improve system stability.",
    tags_en: ["DXVK", "Linux Gaming", "Vulkan", "Valve", "GPU Debugging", "NVIDIA", "AMD"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/DXVK-3.0.2-Released", lang: "EN" }
    ]
  },
  {
    id: "20260718-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新：發布 7.1.4、6.18.39 與 6.12.96 穩定版本，修補多項重要安全與功能缺陷",
    summary: "Linux 核心團隊發布了三個穩定版本的更新：7.1.4、6.18.39 和 6.12.96。這些更新版本包含了大量重要的修補程式，涵蓋了多項安全漏洞與功能缺陷。雖然原文未提供具體的 CVE 編號或 CVSS 分數，但這些核心更新對於維護系統的穩定性與安全性至關重要。建議所有使用這些核心版本或相關發行版（如基於這些核心的伺服器或工作站）的系統管理員，應儘快根據其發行版提供的更新機制（如 apt, yum, dnf）進行升級，以確保系統能修補所有已知的安全風險，並享有最新的穩定功能。",
    tags: ["Linux 核心", "Kernel", "7.1.4", "6.18.39", "6.12.96", "安全更新"],
    title_en: "Linux Kernel Updates: Release of 7.1.4, 6.18.39, and 6.12.96 Stable Versions Patch Multiple Critical Security and Functional Flaws",
    summary_en: "The Linux Kernel team has released three stable versions: 7.1.4, 6.18.39, and 6.12.96. These updates contain numerous important patches, covering multiple security vulnerabilities and functional defects. Although the original text does not provide specific CVE IDs or CVSS scores, these kernel updates are crucial for maintaining system stability and security. System administrators using these kernel versions or related distributions (such as servers or workstations based on these kernels) are advised to upgrade promptly using their distribution's provided update mechanisms (such as apt, yum, or dnf) to ensure all known security risks are patched and the system benefits from the latest stable features.",
    tags_en: ["Linux Kernel", "Kernel", "7.1.4", "6.18.39", "6.12.96", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083462", lang: "EN" }
    ]
  },
  {
    id: "20260718-006",
    trackers: ["os"],
    category: "Linux",
    title: "Mesa 26.2 性能提升：NVK Vulkan 驅動持續追趕 NVIDIA 專有驅動，但仍有差距",
    summary: "本文討論了 Mesa 專案的 NVK Vulkan 驅動在性能上的持續進步。NVK 驅動透過 Mesa 26.2 Git 版本，相較於穩定版的 Mesa 26.1，展示了穩定的性能提升。雖然 NVK 已經在縮小與 NVIDIA 官方專有驅動之間的性能差距，特別是在《Serious Sam 2017》這類遊戲中表現極為接近，但在許多較新的遊戲中，兩者之間仍存在顯著的性能差異。這顯示了開源驅動在持續優化和追趕商業專有驅動的努力。未來預計在 2026 年下半年會有更多優化，且隨著現代 Nova 核心驅動的持續開發，有助於 NVK 驅動進一步提升性能。",
    tags: ["Mesa", "NVK", "Vulkan", "Linux", "Nouveau", "性能優化"],
    title_en: "Mesa 26.2 Performance Boost: NVK Vulkan Driver Continues to Close Gap with NVIDIA Proprietary Driver, But Still Lags",
    summary_en: "This article discusses the continuous performance improvements of the NVK Vulkan driver within the Mesa project. The NVK driver, using the Mesa 26.2 Git version, demonstrates stable performance gains compared to the stable Mesa 26.1. While NVK has significantly narrowed the performance gap with the official NVIDIA proprietary driver—showing performance remarkably close in games like *Serious Sam 2017*—a noticeable performance difference still exists in many newer games. This highlights the ongoing effort of open-source drivers to continuously optimize and catch up to commercial proprietary drivers. Further optimizations are anticipated in the second half of 2026, and the continued development of modern Nova core drivers will help NVK further enhance its performance.",
    tags_en: ["Mesa", "NVK", "Vulkan", "Linux", "Nouveau", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVK-Mesa-26.2-Performance", lang: "EN" }
    ]
  },
  {
    id: "20260718-007",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟緊急暫停 Windows 11 KB5101650 於部分 Dell 電腦推送，因與 Intel IPF 驅動程式衝突導致過熱與異常關機",
    summary: "微軟證實已暫停向配備 Intel IPF 驅動程式的部分裝置推送 2026 年 7 月強制性安全更新 Windows 11 KB5101650（組建版本 26200.8875 或 26100.8875）。目前主要影響 Dell 旗下多款機種，包含 Dell Pro Max、Precision 及 XPS 系列。此事件核心在於微軟新加入的 USB-C 連線管理員介面與 Intel 驅動程式不相容，導致裝置管理員出現黃色驚嘆號錯誤。若強制安裝，可能引發嚴重效能下滑、異常過熱、電池耗盡、意外關機甚至藍白畫面（BSOD）。微軟、Dell 與 Intel 已展開合作修復，建議資安人員與系統管理員暫時在受影響系統中排除此更新，切勿透過 Catalog 強制安裝，待新修補程式釋出。",
    tags: ["微軟", "Windows 11", "KB5101650", "Dell", "Intel IPF", "驅動程式衝突", "Patch Tuesday", "過熱關機"],
    title_en: "Microsoft Urgently Pauses Windows 11 KB5101650 Rollout for Certain Dell Computers Due to Conflict with Intel IPF Driver Causing Overheating and Abnormal Shutdowns",
    summary_en: "Microsoft has confirmed that it has paused the rollout of the July 2026 mandatory security update, Windows 11 KB5101650 (Build 26200.8875 or 26100.8875), to certain devices equipped with the Intel IPF driver. The issue currently primarily affects multiple Dell models, including the Dell Pro Max, Precision, and XPS series. The core of this incident lies in an incompatibility between Microsoft's newly added USB-C Connection Manager Interface and the Intel driver, which causes a yellow exclamation mark error in Device Manager. If forced to install, it may trigger severe performance degradation, abnormal overheating, battery drain, unexpected shutdowns, or even Blue Screen of Death (BSOD) errors. Microsoft, Dell, and Intel have initiated collaborative remediation efforts. Cybersecurity personnel and system administrators are advised to temporarily exclude this update from affected systems and avoid forcing installation via the Catalog until a new patch is released.",
    tags_en: ["Microsoft", "Windows 11", "KB5101650", "Dell", "Intel IPF", "Driver Conflict", "Patch Tuesday", "Overheating Shutdown"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/18/microsoft-halts-windows-11-kb5101650-on-some-pcs-to-intel-driver-issues-list-of-dell-pcs-affected", lang: "EN" }
    ]
  },
  {
    id: "20260718-008",
    trackers: ["os"],
    category: "Windows",
    title: "微軟與 OEM 解決 Secure Boot 2023 憑證過期遷移痛點，釋出內建 PowerShell 檢測腳本",
    summary: "微軟於 7 月 15 日舉辦 OEM Secure Boot 線上座談會，與 Acer、Asus、Dell、HP 及 Surface 等廠商技術專家共同解答企業 IT 管理員面臨的 Secure Boot 憑證重大更新移轉問題。隨著 2011 年舊憑證到期超過三週，許多 IT 人員反映遇到 BitLocker 修復迴圈、Intune 策略失敗且無錯誤碼等痛點。微軟對此澄清，長期離線的裝置重新連線後仍可正常取得 2023 年新憑證，而最新版 Windows 更新也已內建 PowerShell 檢測腳本（如 Detect-SecureBootCertUpdateStatus.ps1），方便管理員單機診斷更新狀態，並強調應手動修改 AvailableUpdates 機碼而非受原則控制的機碼。",
    tags: ["微軟", "Secure Boot", "Windows 11", "憑證過期", "IT維運", "PowerShell", "BitLocker"],
    title_en: "Microsoft and OEMs Address Secure Boot 2023 Certificate Expiration Migration Pain Points, Releasing Built-In PowerShell Detection Script",
    summary_en: "Microsoft hosted an online OEM Secure Boot seminar on July 15, collaborating with technical experts from companies including Acer, Asus, Dell, HP, and Surface to address critical Secure Boot certificate update and migration issues faced by enterprise IT administrators. As the old 2011 certificates have been expired for over three weeks, many IT personnel reported experiencing pain points such as BitLocker recovery loops and Intune policy failures without error codes. Microsoft clarified that long-term offline devices can still successfully obtain the new 2023 certificates after reconnecting. Furthermore, the latest Windows updates now include built-in PowerShell detection scripts (such as Detect-SecureBootCertUpdateStatus.ps1) to help administrators perform standalone diagnostics of the update status. Microsoft also emphasized that administrators should manually modify the AvailableUpdates registry key rather than policy-controlled keys.",
    tags_en: ["Microsoft", "Secure Boot", "Windows 11", "Certificate Expiration", "IT Operations", "PowerShell", "BitLocker"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/18/windows-11-secure-boot-certificates-have-expired-and-microsoft-says-what-to-do-next", lang: "EN" }
    ]
  },
  {
    id: "20260718-009",
    trackers: ["os"],
    category: "Apple",
    title: "9to5Mac 報導週末 Apple 產品優惠：AirPods Pro 3、M5 系列 MacBook Pro 及 Apple Watch 降價促销",
    summary: "知名科技媒體 9to5Mac 於 2026 年 7 月 18 日發布週末促銷資訊。報導指出，Apple 多款主力硬體產品迎降價，其中 AirPods Pro 3 降價 50 美元，具備主動降噪（ANC）功能的 AirPods 4 與熱門款 Apple Watch 亦有顯著折扣。此外，配備最新晶片的 M5 MacBook Pro、M5 Pro 及 M5 Max 全線機型推出 150 至 400 美元不等的限時優惠。週邊配件品牌 Nomad 及 Anker 也同步展開夏季充電配件與錶帶的特價活動。本篇報導僅為純粹的電商市場行銷與產品促銷情報，並未包含任何資訊安全漏洞、CVE 編號或技術威脅等資安相關事件。",
    tags: ["Apple", "MacBook Pro", "AirPods", "Apple Watch", "電子商務", "產品促銷"],
    title_en: "9to5Mac Reports Weekend Apple Product Deals: Price Cuts and Promotions on AirPods Pro 3, M5 Series MacBook Pro, and Apple Watch",
    summary_en: "Well-known tech media outlet 9to5Mac published weekend promotional information on July 18, 2026. The report indicates that several of Apple's flagship hardware products are seeing price drops, with the AirPods Pro 3 discounted by $50, and the AirPods 4 featuring Active Noise Cancellation (ANC) alongside the popular Apple Watch also receiving significant discounts. In addition, the entire lineup of M5 MacBook Pro, M5 Pro, and M5 Max models equipped with the latest chips has launched limited-time offers ranging from $150 to $400 off. Peripheral accessory brands Nomad and Anker have also simultaneously kicked off summer sales for charging accessories and watch bands. This report is purely e-commerce market marketing and product promotional intelligence, and does not contain any cybersecurity vulnerabilities, CVE IDs, technical threats, or other information security-related events.",
    tags_en: ["Apple", "MacBook Pro", "AirPods", "Apple Watch", "E-commerce", "Product Promotion"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/18/apple-weekend-deals-airpods-pro-macbook-series-11", lang: "EN" }
    ]
  },
  {
    id: "20260718-010",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果調漲多國 iCloud+ 訂閱價格，涵蓋日本、越南及埃及等市場",
    summary: "蘋果公司近期調整了多個國家與地區的 iCloud+ 雲端儲存服務訂閱價格。此次調價涵蓋埃及、奈及利亞、土耳其、印尼、日本、紐西蘭、菲律賓及越南等多個市場，各方案資費均有不同程度的調升。舉例而言，日本地區的 50 GB 方案由 150 日圓漲至 180 日圓，2 TB 方案則由 1500 日圓提高至 1800 日圓。此外，模里西斯、剛果共和國和寮國等地區則改以美元計價，且因增值稅影響使實際價格略高。此舉反映出蘋果繼先前調高部分地區硬體與 Apple Music 訂閱價格後，持續調整整體營運與定價策略，建議相關市場的用戶與企業重新檢視雲端服務的預算規劃。",
    tags: ["Apple", "iCloud+", "雲端服務", "訂閱價格", "市場調整"],
    title_en: "Apple Raises iCloud+ Subscription Prices in Multiple Countries, Covering Markets Including Japan, Vietnam, and Egypt",
    summary_en: "Apple has recently adjusted iCloud+ cloud storage service subscription prices across multiple countries and regions. This price adjustment covers several markets including Egypt, Nigeria, Turkey, Indonesia, Japan, New Zealand, the Philippines, and Vietnam, with varying degrees of increases across all plans. For instance, in Japan, the 50 GB plan has increased from 150 yen to 180 yen, while the 2 TB plan has risen from 1,500 yen to 1,800 yen. In addition, regions such as Mauritius, the Republic of the Congo, and Laos have switched to USD pricing, with actual prices being slightly higher due to the impact of value-added tax (VAT). Following previous hikes in hardware and Apple Music subscription prices in certain regions, this move reflects Apple's continuous adjustment of its overall operations and pricing strategy. Users and enterprises in the affected markets are advised to review their cloud service budget planning.",
    tags_en: ["Apple", "iCloud+", "Cloud Services", "Subscription Prices", "Market Adjustment"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-raises-icloud-subscription-prices-in-several-countries", lang: "EN" }
    ]
  },
  {
    id: "20260718-011",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 以證券欺詐案暫緩執行為由，請求法院暫停 Epic Games 反壟斷後續訴訟程序",
    summary: "Apple 公司近日向法庭提出請求，希望在美國最高法院審理其與 Epic Games 的民事藐視法庭案期間，暫停下級法院針對 App Store 外部購買抽成比例的訴訟程序。Apple 指出，加州北區地方法院此前已同意暫停另一宗由珊瑚泉市警察養老金計畫發起的證券欺詐集體訴訟，該案指控 Apple 在遵守 Epic 案禁令及 AI Siri 功能上誤導投資人。由於該證券案同樣涉及 Epic 案核心，且已被法官裁定在最高法院做出決定前暫緩執行，Apple 隨即以此判決作為實務案例，說服負責 Epic 案的法官 Yvonne Gonzalez Rogers 採取相同做法。Apple 甚至請求，若暫停申請遭拒，也應給予臨時寬限期以利其向巡迴法院或最高法院上訴，此舉將直接影響外部金流抽成規範的實施進度。",
    tags: ["Apple", "Epic Games", "反壟斷", "訴訟暫緩", "App Store", "最高法院", "證券欺詐"],
    title_en: "Apple Requests Court to Stay Epic Games Antitrust Follow-up Proceedings, Citing Stay in Securities Fraud Case",
    summary_en: "Apple recently filed a request with the court, seeking to stay lower-court proceedings regarding App Store external purchase commission rates while the U.S. Supreme Court reviews its civil contempt case with Epic Games. Apple pointed out that the U.S. District Court for the Northern District of California had previously agreed to stay another securities fraud class-action lawsuit launched by the Coral Springs Police Pension Plan, which accuses Apple of misleading investors regarding its compliance with the Epic case injunction and its AI Siri features. Since this securities case similarly involves the core of the Epic case and a judge has already ruled to stay it pending the Supreme Court's decision, Apple promptly used this judgment as a practical precedent to persuade Judge Yvonne Gonzalez Rogers, who is handling the Epic case, to adopt the same approach. Apple even requested that, if the application for a stay is denied, a temporary grace period should be granted to facilitate its appeal to the Circuit Court or the Supreme Court, a move that will directly affect the implementation progress of external payment commission regulations.",
    tags_en: ["Apple", "Epic Games", "Antitrust", "Stay of Proceedings", "App Store", "Supreme Court", "Securities Fraud"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/17/apple-cites-paused-securities-fraud-case-in-bid-to-halt-epic-proceedings", lang: "EN" }
    ]
  },
  {
    id: "20260718-012",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "關鍵 RCE 漏洞曝光：WordPress 核心面臨 wp2shell 攻擊，建議立即升級至 7.0.2 或 6.9.5",
    summary: "安全研究機構 Searchlight Cyber 發現了 WordPress 核心的兩項嚴重漏洞，即 CVE-2026-63030（REST API 批次路由混淆）和 CVE-2026-60137（SQL 注入）。這兩項獨立的缺陷可以串聯，形成一個無需預先驗證（pre-authentication）的遠端程式碼執行（RCE）鏈。攻擊者可利用此鏈在未登入的情況下，對運行受影響版本的 WordPress 進行攻擊。由於漏洞的嚴重性，WordPress 官方已強制啟用自動安全更新，敦促網站管理員立即升級至 WordPress 7.0.2 或 6.9.5。除了升級，若無法立即修補，建議在 WAF 層級阻擋 `/wp-json/batch/v1and?rest_route=/batch/v1`，或安裝阻止匿名存取 REST API 的外掛作為臨時緩解措施。Cloudflare 等服務商也已為受影響的漏洞部署了 WAF 保護。由於公開 PoC 程式碼和野外利用跡象的出現，修補建議已提升至最高優先級。",
    tags: ["WordPress", "CVE-2026-63030", "CVE-2026-60137", "RCE", "SQL 注入", "WordPress 核心"],
    title_en: "Critical RCE Vulnerability Exposed: WordPress Core Faces wp2shell Attack, Immediate Upgrade to 7.0.2 or 6.9.5 Recommended",
    summary_en: "Security research firm Searchlight Cyber has discovered two critical vulnerabilities in the WordPress core: CVE-2026-63030 (REST API batch routing confusion) and CVE-2026-60137 (SQL injection). These two independent flaws can be chained together to form a pre-authentication Remote Code Execution (RCE) chain. Attackers can exploit this chain to attack WordPress running vulnerable versions without needing to be logged in. Due to the severity of the vulnerabilities, WordPress has mandated automatic security updates, urging site administrators to immediately upgrade to WordPress 7.0.2 or 6.9.5. In addition to upgrading, if immediate patching is not possible, it is recommended to block `/wp-json/batch/v1and?rest_route=/batch/v1` at the WAF layer, or install a plugin that prevents anonymous access to the REST API as a temporary mitigation. Service providers like Cloudflare have also deployed WAF protection for the affected vulnerabilities. Given the public availability of PoC code and evidence of wild use, the patching recommendation has been elevated to the highest priority.",
    tags_en: ["WordPress", "CVE-2026-63030", "CVE-2026-60137", "RCE", "SQL Injection", "WordPress Core"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/wordpress-core-wp2shell-rce-flaws-get-public-exploits-patch-now", lang: "EN" }
    ]
  },
  {
    id: "20260718-013",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "7-Zip 釋出 26.02 版本修補 XZ 壓縮資料的堆緩衝區溢出漏洞",
    summary: "資安研究人員已揭露 7-Zip 處理 XZ 壓縮資料時存在一個遠端程式碼執行（RCE）漏洞。該漏洞允許攻擊者透過讓使用者開啟特製的壓縮檔案，觸發堆緩衝區溢出（heap-based buffer overflow），進而執行任意程式碼。雖然開發者尚未公開完整的技術細節，但修補程式的變動顯示，此漏洞與 7-Zip 在解壓縮 XZ 資料時追蹤可用空間的機制有關。修補版本 26.02 增加了檢查，確保解碼器不會寫入超出輸出緩衝區的可用空間，從而防止堆緩衝區溢出。此漏洞屬於需要使用者互動（user interaction）的類型，攻擊者可能透過網路釣魚或社工攻擊，散播惡意壓縮檔案來利用此缺陷。由於 7-Zip 是 Windows 上廣泛使用的工具，此類漏洞極具攻擊價值。建議所有使用者務必手動更新至 7-Zip 26.02 版本，以降低遭受惡意攻擊的風險。",
    tags: ["7-Zip", "RCE", "XZ 壓縮", "堆緩衝區溢出", "資安漏洞", "Windows"],
    title_en: "7-Zip Releases Version 26.02 Patching Heap Buffer Overflow Vulnerability in XZ Compressed Data",
    summary_en: "Cybersecurity researchers have disclosed a Remote Code Execution (RCE) vulnerability in 7-Zip when processing XZ compressed data. This vulnerability allows an attacker to trigger a heap-based buffer overflow by having a user open a specially crafted compressed file, thereby executing arbitrary code. Although developers have not yet disclosed the full technical details, changes in the patch indicate that the vulnerability relates to 7-Zip's mechanism for tracking available space while decompressing XZ data. The patched version 26.02 adds checks to ensure the decoder does not write available space beyond the output buffer, thereby preventing the heap buffer overflow. This vulnerability requires user interaction, meaning an attacker might exploit this flaw by distributing malicious compressed files through phishing or social engineering attacks. Given that 7-Zip is a widely used tool on Windows, this type of vulnerability holds significant attack value. All users are strongly advised to manually update to 7-Zip 26.02 to mitigate the risk of malicious attacks.",
    tags_en: ["7-Zip", "RCE", "XZ Compression", "Heap Buffer Overflow", "Cybersecurity Vulnerability", "Windows"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/update-now-7-zip-fixes-rce-flaw-exploitable-with-malicious-archives", lang: "EN" }
    ]
  },
  {
    id: "20260718-014",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布提高 Apple Music 與 Apple One 訂閱價格，用戶需評估服務組合價值",
    summary: "本文討論 Apple 旗下多項服務（如 Apple TV、Apple Music、Apple Fitness+ 等）的整合方案 Apple One。Apple 近期宣布提高 Apple Music 以及部分 Apple One 捆綁方案的訂閱價格。文章旨在為用戶分析 Apple One 是否仍具備高性價比，並提供評估其服務組合價值的指引。由於原文內容僅為服務價格變動與介紹，未提及任何資安漏洞、CVE 編號、技術細節或實務攻擊風險，因此修補建議為「無」。建議用戶根據自身的使用習慣，權衡單獨訂閱各服務與透過 Apple One 捆綁方案的成本效益。",
    tags: ["Apple", "Apple One", "Apple Music", "訂閱服務", "定價策略"],
    title_en: "Apple Announces Price Increases for Apple Music and Apple One Subscriptions; Users Must Evaluate Service Bundle Value",
    summary_en: "This article discusses Apple's integrated service package, Apple One, which includes multiple Apple services such as Apple TV, Apple Music, and Apple Fitness+. Apple recently announced price increases for Apple Music and certain Apple One bundled plans. The article aims to help users analyze whether Apple One still offers high value for money and provides guidance on evaluating the value of its service bundle. Since the original content only discusses service price changes and introductions, and does not mention any cybersecurity vulnerabilities, CVE IDs, technical details, or practical attack risks, the remediation advice is 'None'. Users are advised to weigh the cost-effectiveness of subscribing to individual services versus opting for the Apple One bundle, based on their personal usage habits.",
    tags_en: ["Apple", "Apple One", "Apple Music", "Subscription Service", "Pricing Strategy"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/18/is-apple-one-worth-it-for-you", lang: "EN" }
    ]
  },
  {
    id: "20260718-015",
    trackers: ["os"],
    category: "Apple",
    title: "Passable App：提供更精細化的聯絡人資訊分享至 Apple Wallet",
    summary: "本文介紹一款名為 Passable 的獨立應用程式，旨在解決傳統聯絡人分享方式（如 Apple 的 NameDrop）缺乏精細度和可靠性的問題。Passable 允許使用者將聯絡人資訊以美觀的 Apple Wallet 卡片形式分享。它強調了其提供高度的客製化和細節控制，讓使用者可以更精準地選擇和呈現分享的聯絡人資料。這對於需要專業或特定資訊交換場景的使用者尤其有用，提升了數位名片分享的便利性與專業度。本內容為產品介紹，未提及任何資安漏洞或修補建議。",
    tags: ["Passable", "Apple Wallet", "聯絡人分享", "名片數位化", "iOS 應用程式"],
    title_en: "Passable App: Providing more granular contact information sharing to Apple Wallet",
    summary_en: "This article introduces an independent application called Passable, which aims to solve the problem of traditional contact sharing methods (such as Apple's NameDrop) lacking granularity and reliability. Passable allows users to share contact information in an aesthetically pleasing Apple Wallet card format. It emphasizes providing high levels of customization and detailed control, allowing users to select and present shared contact data with greater precision. This is particularly useful for users in professional or specific information exchange scenarios, enhancing the convenience and professionalism of digital business card sharing. This content is a product introduction and does not mention any cybersecurity vulnerabilities or patch recommendations.",
    tags_en: ["Passable", "Apple Wallet", "Contact Sharing", "Digital Business Card", "iOS Application"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/18/passable-makes-contact-sharing-easy-in-apple-wallet", lang: "EN" }
    ]
  },
  {
    id: "20260718-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟警告：ACR Stealer惡意程式潮起，透過ClickFix與WebDAV竊取企業密碼與敏感資料",
    summary: "微軟觀察到使用ACR Stealer惡意程式的攻擊潮正在增加，該惡意程式旨在竊取企業客戶瀏覽器儲存的密碼、身份驗證Token和敏感文件。攻擊者利用ClickFix的社交工程手法，結合WebDAV伺服器或MSHTA工具，將資訊竊取負載傳遞給目標。攻擊鏈路包括：透過ClickFix引誘執行遠端WebDAV上的惡意DLL，或利用MSHTA載入並執行隱藏在公開JPEG圖像中的加密負載。惡意程式能透過Windows DPAPI解密瀏覽器資料，並存取Chrome/Edge的資料庫、OneDrive和SharePoint等企業同步目錄，竊取密碼、Cookie和文件。為防禦，微軟建議組織應實施應用程式控制規則，限制從遠端資源使用PowerShell、Python、mshta.exe或rundll32.exe等工具啟動內容，並透過網路過濾器限制對低信譽或新網域的存取。",
    tags: ["ACR Stealer", "ClickFix", "WebDAV", "MSHTA", "密碼竊取", "應用程式控制", "微軟"],
    title_en: "Microsoft Warns: ACR Stealer Malware Wave Rises, Stealing Corporate Passwords and Sensitive Data via ClickFix and WebDAV",
    summary_en: "Microsoft has observed an increasing wave of attacks utilizing the ACR Stealer malware. This malware is designed to steal passwords, authentication tokens, and sensitive files stored in corporate client browsers. Attackers employ social engineering techniques via ClickFix, combined with WebDAV servers or MSHTA tools, to deliver the information theft payload to the target. The attack chain includes: tricking the execution of malicious DLLs on a remote WebDAV resource via ClickFix, or utilizing MSHTA to load and execute an encrypted payload hidden within a public JPEG image. The malware can decrypt browser data using Windows DPAPI, accessing corporate sync directories such as Chrome/Edge databases, OneDrive, and SharePoint to steal passwords, cookies, and files. For defense, Microsoft recommends that organizations implement application control policies, restricting the execution of content from remote resources using tools like PowerShell, Python, mshta.exe, or rundll32.exe, and using network filters to limit access to low-reputation or new domains.",
    tags_en: ["ACR Stealer", "ClickFix", "WebDAV", "MSHTA", "Password Theft", "Application Control", "Microsoft"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/microsoft-warns-of-surge-in-acr-stealer-attacks-on-customers", lang: "EN" }
    ]
  },
  {
    id: "20260718-017",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Elastic 揭露北韓駭客全新「Contagious Interview」行動：利用 SVG 隱寫術鎖定開發人員發動供應鏈攻擊",
    summary: "Elastic Security Labs 發現北韓相關駭客組織發動代號為 REF9403 的全新「Contagious Interview」惡意活動。攻擊者假冒雇主在 Elastic 社群 Slack 頻道的職缺專區發布虛假招聘資訊，並將有意願的開發人員引導至私訊，要求下載包含「程式碼挑戰」的惡意 E-commerce 專案。受害者執行該專案後，將觸發潛藏在多個國家國旗 SVG 圖檔 HTML 註解中的 Base64 惡意片段。系統會按字母順序拼接並執行該載荷，最終植入與 OTTERCOOKIE 相關的四階段惡意程式，包含瀏覽器與加密貨幣錢包竊取程式、檔案竊取程式、基於 Socket.IO 的遠端存取木馬（RAT）以及剪貼簿竊取程式。目前防毒軟體對此專案檢測率為零，建議開發人員避免下載來源不明的測試專案。",
    tags: ["Elastic", "Contagious Interview", "REF9403", "OTTERCOOKIE", "SVG 隱寫術", "開發人員鎖定", "供應鏈攻擊"],
    title_en: "Elastic Uncovers North Korean Hacker's New 'Contagious Interview' Campaign: Using SVG Steganography to Target Developers for Supply Chain Attack",
    summary_en: "Elastic Security Labs discovered a new malicious campaign, designated REF9403, launched by North Korea-affiliated hacker groups, called 'Contagious Interview.' The attackers impersonated employers and posted fake job listings in the Elastic community Slack channel's job section. They then lured interested developers into private messages, requesting them to download a malicious e-commerce project containing a 'coding challenge.' After the victim executed the project, it triggered a Base64 malicious payload hidden within HTML comments of multiple country flag SVG files. The system concatenates and executes this payload in alphabetical order, ultimately implanting a four-stage malicious program related to OTTERCOOKIE. This payload includes browser and cryptocurrency wallet stealers, file stealers, a Socket.IO-based Remote Access Trojan (RAT), and a clipboard stealer. Currently, antivirus software detection rate for this project is zero, and developers are advised to avoid downloading unknown test projects.",
    tags_en: ["Elastic", "Contagious Interview", "REF9403", "OTTERCOOKIE", "SVG Steganography", "Developer Targeting", "Supply Chain Attack"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/contagious-interview-malware-svg-steganography", lang: "EN" }
    ]
  },
  {
    id: "20260718-018",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Watch 9 確認採用高通 Snapdragon Wear Elite 晶片，升級 AI 性能",
    summary: "根據洩漏的圖片資訊，三星（Samsung）的下一代智慧手錶 Galaxy Watch 9 將從傳統的 Exynos 晶片，轉向採用高通（Qualcomm）的 Snapdragon Wear Elite 晶片。高通宣布這款 3nm 晶片，旨在提供更快的整體性能，特別是針對 AI 任務的強大運算能力。這標誌著 Galaxy Watch 系列可能徹底擺脫過去專用 Exynos 晶片的歷史慣例。雖然文章未提供具體技術細節或漏洞資訊，但指出晶片升級預計能大幅提升手錶的運算效能和 AI 應用能力。預計 Galaxy Watch 9 將在下週與三星的新款折疊手機一同發布。",
    tags: ["Samsung", "Galaxy Watch 9", "Qualcomm", "Snapdragon Wear Elite", "智慧手錶", "AI 運算"],
    title_en: "Samsung Galaxy Watch 9 Confirmed to Adopt Qualcomm Snapdragon Wear Elite Chip, Boosting AI Performance",
    summary_en: "According to leaked images, Samsung's next-generation smartwatch, the Galaxy Watch 9, will transition from the traditional Exynos chip to adopt Qualcomm's Snapdragon Wear Elite chip. Qualcomm announced that this 3nm chip is designed to provide faster overall performance, especially with powerful computing capabilities for AI tasks. This marks a potential departure for the Galaxy Watch series from its historical reliance on proprietary Exynos chips. Although the article does not provide specific technical details or vulnerability information, it points out that the chip upgrade is expected to significantly enhance the watch's computing efficiency and AI application capabilities. The Galaxy Watch 9 is anticipated to be released next week alongside Samsung's new foldable phone.",
    tags_en: ["Samsung", "Galaxy Watch 9", "Qualcomm", "Snapdragon Wear Elite", "Smartwatch", "AI Computing"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/18/galaxy-watch-9-is-powered-by-snapdragon-wear-elite-leaked-images-confirm-gallery", lang: "EN" }
    ]
  },
  {
    id: "20260718-019",
    trackers: ["os"],
    category: "Android",
    title: "YouTube PiP 模式故障：iOS/Android 應用程式退出後無法啟動浮動播放器",
    summary: "YouTube 應用程式目前面臨一個功能性問題，用戶在退出應用程式後，Picture-in-Picture (PiP) 模式無法正常啟動。正常情況下，應會彈出一個浮動播放器讓用戶持續觀看；但目前現象是應用程式只是在背景持續播放音訊，而沒有顯示任何浮動介面。根據 Google 的說法，大部分的相關回報來自 iOS 用戶，但 Android 設備也偶爾會出現此問題。該問題已於本週五（PT）被 YouTube 發現，目前工程師團隊正在積極調查，但截至目前尚未有進展。用戶應留意 YouTube 官方的幫助討論串以獲取最新修復資訊。此問題影響的是 YouTube 應用程式的用戶體驗，目前尚未有公開的 CVE 或安全漏洞資訊，主要屬於功能性故障。",
    tags: ["YouTube", "PiP", "Picture-in-Picture", "iOS", "Android", "功能故障"],
    title_en: "YouTube PiP Mode Failure: Floating Player Cannot Start After Exiting iOS/Android Application",
    summary_en: "The YouTube application is currently experiencing a functional issue where Picture-in-Picture (PiP) mode fails to activate when the user exits the application. Normally, a floating player should pop up, allowing the user to continue viewing; however, the current behavior is that the application only continues playing audio in the background without displaying any floating interface. According to Google, most related reports come from iOS users, but Android devices occasionally experience this issue as well. The problem was discovered by YouTube this Friday (PT), and the engineering team is actively investigating, but there has been no progress yet. Users should monitor the official YouTube help threads for the latest fix information. This issue affects the user experience of the YouTube application and currently does not involve any public CVE or security vulnerability information, classifying it primarily as a functional fault.",
    tags_en: ["YouTube", "PiP", "Picture-in-Picture", "iOS", "Android", "Functional Fault"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/18/youtube-pip-broken", lang: "EN" }
    ]
  },
  {
    id: "20260718-020",
    trackers: ["os"],
    category: "Android",
    title: "Google 調整 Android 備份資料計費政策：所有備份資料將計入 Google 帳戶儲存空間",
    summary: "Google 宣布調整 Android 備份資料的儲存空間計費政策。受影響的用戶為所有 Android 備份使用者。根據新政策，原本僅計入 Google 相簿和 MMS 圖片/影片的備份資料，現在將包含所有在 Android 備份設定中可見的資料類型，包括 SMS 訊息（實際文字內容）、通話紀錄和裝置設定等。Google 表示，平均而言，這項變動預計會使備份大小增加約 40 MB。為增加用戶控制權，Google 正在逐步推出針對 SMS/MMS 訊息、通話紀錄和裝置設定的開關切換（on/off toggles）和單一應用程式的備份控制選項。新政策將從明天開始對新的備份使用者生效，並在未來幾個月內逐步推廣至現有帳戶。用戶可透過「設定 > 帳戶與備份 > Google 備份 > 其他裝置資料」等路徑查看和管理此設定。",
    tags: ["Google", "Android", "Google 帳戶", "備份政策", "SMS", "儲存空間"],
    title_en: "Google Adjusts Android Backup Data Billing Policy: All Backup Data Will Count Towards Google Account Storage",
    summary_en: "Google has announced an adjustment to the storage billing policy for Android backup data. All Android backup users are affected. Under the new policy, backup data that previously only included Google Photos and MMS pictures/videos will now encompass all data types visible in the Android backup settings, including SMS messages (actual text content), call logs, and device settings. Google stated that, on average, this change is expected to increase backup size by approximately 40 MB. To increase user control, Google is gradually introducing on/off toggles and single-app backup control options for SMS/MMS messages, call logs, and device settings. The new policy will take effect tomorrow for new backup users and will be gradually rolled out to existing accounts over the coming months. Users can view and manage this setting via paths such as 'Settings > Accounts and backup > Google One backup > Other device data'.",
    tags_en: ["Google", "Android", "Google Account", "Backup Policy", "SMS", "Storage Space"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/18/android-backup-data-update", lang: "EN" }
    ]
  },
  {
    id: "20260718-021",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 應用程式間通訊漏洞：Stoat 允許透過 Intent 洩露內部資料庫與認證 Token",
    summary: "本漏洞影響 Stoat 應用程式，屬於 Android 平台上的內部資料洩露風險。攻擊者若能透過發送 Intent 訊息（例如透過 ADB 存取或共安裝的惡意應用程式），可以觸發 `chat.stoat.activities.ShareTargetActivity` 組件。該活動組件接收透過 `android.intent.extra.STREAM` 傳入的 URI，但缺乏對此 URI 的有效驗證或過濾機制。這使得攻擊者可以傳入指向應用程式內部儲存路徑（例如 `/data/data/chat.revolt/databases/revolt.db` 或快取認證 Token）的 `file://` URI。當受害者在單一的選擇頻道互動時，應用程式會將這些內部檔案視為使用者選擇的附件並發送出去。由於組成器不會顯示檔案名稱，受害者無法察覺正在洩露自己的內部應用資料。潛在的後果包括洩露 Stoat 本地資料庫（訊息紀錄、聯絡人名單）、可導致完全帳號接管的認證 Token，以及任何可被應用程式流程讀取的其他檔案。",
    tags: ["Android", "Stoat", "Intent", "資料洩露", "內部儲存", "CVE-2026-57848"],
    title_en: "Android Inter-Application Communication Vulnerability: Stoat Allows Internal Data Leakage via Intent",
    summary_en: "This vulnerability affects the Stoat application and constitutes an internal data leakage risk on the Android platform. An attacker, by sending an Intent message (for example, via ADB access or a co-installed malicious application), can trigger the `chat.stoat.activities.ShareTargetActivity` component. This activity component receives a URI passed through `android.intent.extra.STREAM`, but lacks effective validation or filtering mechanisms for this URI. This allows an attacker to pass a `file://` URI pointing to internal application storage paths (such as `/data/data/chat.revolt/databases/revolt.db` or cached authentication tokens). When the victim interacts with a single selection channel, the application treats these internal files as user-selected attachments and sends them out. Since the component does not display the file name, the victim is unaware that their internal application data is being leaked. Potential consequences include the leakage of Stoat's local databases (message records, contact lists), authentication tokens that could lead to complete account takeover, and any other files readable by the application process.",
    tags_en: ["Android", "Stoat", "Intent", "Data Leakage", "Internal Storage", "CVE-2026-57848"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57848", lang: "EN" }
    ]
  },
  {
    id: "20260718-022",
    trackers: ["security"],
    category: "前瞻技術",
    title: "1Password 攜手 Anthropic 推出 1Password for Claude 整合，打造 AI 代理專用防護與 Agentic 模式",
    summary: "1Password 與 Anthropic 宣布合作推出 1Password for Claude 行動整合，允許 Claude 網頁代理在獲得使用者授權下登入特定網站，同時確保敏感憑證的安全。技術上，當 AI 提出登入請求時，會觸發 1Password 桌面程式彈出用途確認，並由瀏覽器擴充功能直接填入帳密。關鍵在於，密碼及一次性驗證碼（TOTP）完全不會進入 Claude 的上下文、記憶或 Anthropic 系統中，且自動填入時會暫停 AI 讀取頁面，失敗亦會自動清除。1Password 亦同步新增 Agentic Mode，可自動隱藏自動填入建議與儲存提示，限制 AI 僅能存取已核准的憑證。目前此功能已在 Mac 平台上線，實務上建議管理員與使用者在配置 AI 代理人任務時，應啟用此類權限控管機制，以防範身分憑證外洩。",
    tags: ["1Password", "Anthropic", "Claude", "Agentic AI", "AI代理安全", "身分驗證", "瀏覽器擴充功能"],
    title_en: "1Password Partners with Anthropic to Launch 1Password for Claude Integration, Creating Dedicated Protection for AI Agents and Agentic Mode",
    summary_en: "1Password and Anthropic have announced a partnership to launch the 1Password for Claude action integration, allowing Claude web agents to log into specific websites with user authorization while ensuring the security of sensitive credentials. Technically, when the AI requests a login, it triggers a 1Password desktop app pop-up for purpose confirmation, and the browser extension directly fills in the credentials. Crucially, passwords and time-based one-time passwords (TOTP) never enter Claude's context, memory, or the Anthropic system, and AI page-reading is paused during autofill, which is also automatically cleared upon failure. 1Password has simultaneously introduced Agentic Mode, which automatically hides autofill suggestions and save prompts, restricting the AI to accessing only approved credentials. Currently, this feature is live on the Mac platform. In practice, it is recommended that administrators and users enable this type of permission control mechanism when configuring AI agent tasks to prevent credential leakage.",
    tags_en: ["1Password", "Anthropic", "Claude", "Agentic AI", "AI Agent Security", "Authentication", "Browser Extension"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177407", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260718-023",
    trackers: ["os"],
    category: "重點關注",
    title: "UXL 基金會發布 oneDNN 3.13，優化 Intel Nova Lake 架構與 AVX10.2 指令集效能",
    summary: "UXL 基金會旗下神經網路函式庫 oneDNN 發布 3.13 版本。本次更新重點在於為未來硬體做好準備，特別是針對配備 AVX10.2 指令集的 Intel 旗艦級 Nova Lake 處理器進行效能調校。在 CPU 方面，新版本亦提升了現有 Intel Xeon 系列處理器於 AMX 架構下的矩陣乘法運算表現，並針對舊款處理器強化 AVX2 優化，同時涵蓋 AArch64 與 RISC-V 架構。圖形處理方面，此版本也顯著改善了 Nova Lake P 內建的 Xe3P-LPG 顯示晶片效能，並優化了現行 Arc B 系列 Battlemage 顯示卡的卷積運算效率。開發者已可透過 GitHub 下載最新版本以進行架構遷移與部署。",
    tags: ["UXL Foundation", "oneDNN", "Intel", "Nova Lake", "AVX10.2", "硬體架構", "深度學習函式庫"],
    title_en: "UXL Foundation Releases oneDNN 3.13, Optimizing Performance for Intel Nova Lake Architecture and AVX10.2 Instruction Set",
    summary_en: "The UXL Foundation's neural network library, oneDNN, has released version 3.13. The focus of this update is to prepare for future hardware, specifically performance tuning for Intel's flagship Nova Lake processors equipped with the AVX10.2 instruction set. On the CPU side, the new version also enhances the matrix multiplication performance of existing Intel Xeon series processors under the AMX architecture, strengthens AVX2 optimization for older processors, and covers AArch64 and RISC-V architectures. In terms of graphics processing, this release significantly improves the performance of the Xe3P-LPG integrated graphics built into Nova Lake P, and optimizes the convolution computation efficiency of current Arc B-series Battlemage graphics cards. Developers can now download the latest version via GitHub for architecture migration and deployment.",
    tags_en: ["UXL Foundation", "oneDNN", "Intel", "Nova Lake", "AVX10.2", "Hardware Architecture", "Deep Learning Library"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/oneDNN-3.13", lang: "EN" }
    ]
  },
  {
    id: "20260718-024",
    trackers: ["os"],
    category: "重點關注",
    title: "開源相容層 D7VK 2.0 正式發布，基於 Vulkan 提升舊款 Direct3D 7 遊戲效能達兩倍以上",
    summary: "開源社群正式釋出 D7VK 2.0 版本，此專案旨在透過 Vulkan API 來轉譯並加速 Direct3D 7 及更早期的圖形指令。本次重大更新主打大幅度的效能優化，在特定受限於處理器效能的場景下，能帶來兩倍甚至更高的幀率提升。例如經典遊戲《戰慄時空》與《玩具總動員 2》在測試中皆展現顯著的流暢度改善。此外，新版本亦改良了除錯日誌機制以減少熱點路徑的效能開銷，並同步整合了最新的 DXVK 3.0.2 底層架構與多項錯誤修復。由於此專案涉及轉譯層架構，資安與系統開發人員可關注其在跨平台遊戲相容性與記憶體管理上的效能演進。相關程式碼與編譯版本已於 GitHub 開放下載。",
    tags: ["D7VK 2.0", "Direct3D 7", "Vulkan", "DXVK", "開源相容層", "效能優化", "遊戲相容性"],
    title_en: "Open-source compatibility layer D7VK 2.0 officially released, boosting older Direct3D 7 game performance by over two times based on Vulkan",
    summary_en: "The open-source community has officially released D7VK version 2.0, a project aimed at translating and accelerating Direct3D 7 and earlier graphics commands via the Vulkan API. This major update features significant performance optimization, delivering a two-times or even higher frame rate boost in specific CPU-bound scenarios. For instance, classic games like Half-Life and Toy Story 2 both demonstrated noticeable improvements in smoothness during testing. Furthermore, the new version refines the debug logging mechanism to reduce performance overhead on hot paths, while simultaneously integrating the latest underlying DXVK 3.0.2 architecture and multiple bug fixes. Given that this project involves translation layer architecture, cybersecurity and system developers may want to monitor its performance evolution regarding cross-platform game compatibility and memory management. The relevant code and compiled versions are now available for download on GitHub.",
    tags_en: ["D7VK 2.0", "Direct3D 7", "Vulkan", "DXVK", "Open-source compatibility layer", "Performance optimization", "Game compatibility"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/D7VK-2.0-Released", lang: "EN" }
    ]
  },
  {
    id: "20260718-025",
    trackers: ["os"],
    category: "重點關注",
    title: "Java 誕生內幕紀錄片首映，揭露當年於 SunWorld 發表前三天差點因執行緒臭蟲腰斬",
    summary: "最新紀錄片《The Java Story》揭露了 Java 語言早期的坎坷發展史。該語言最初名為 Oak，源於 Sun Microsystems 針對電視機上盒市場所開發的失敗專案，在團隊面臨裁員重組後，轉向當時剛興起的全球資訊網（Web）發展，並開發出可執行網頁動畫的 WebRunner。然而，在 1995 年 SunWorld 大會正式發表前三天，編寫虛擬機器（JVM）規範的核心工程師 Tim Lindholm 發現 Java 的執行緒模型存在根本性缺陷，當 SPARC 處理器執行指令且系統發出中斷時會導致記憶體狀態無法復原而嚴重崩潰。團隊在壓力下進行了為期三天的緊急修補，最終成功讓 Java 順利登台並奠定後續數十年的企業級應用基礎。本紀錄片由 Cult.Repo 製作，訪談了 Java 之父 James Gosling 及 Oracle 首席架構師等關鍵人物。",
    tags: ["Java", "JVM", "Sun Microsystems", "The Java Story", "James Gosling", "歷史事件", "程式語言"],
    title_en: "The Premiere of the Java Origin Documentary Reveals Near Cancellation Due to Thread Bug Three Days Before SunWorld",
    summary_en: "The latest documentary, *The Java Story*, reveals the early, challenging development history of the Java language. Initially named Oak, the language originated from a failed project by Sun Microsystems for developing set-top boxes for televisions. After the team faced layoffs and restructuring, it pivoted to developing for the nascent global information network (Web), creating WebRunner, which could execute web animations. However, just three days before the official announcement at the 1995 SunWorld conference, the core engineer responsible for the Virtual Machine (JVM) specification, Tim Lindholm, discovered a fundamental flaw in Java's threading model: when the SPARC processor executed instructions and the system generated an interrupt, it would lead to an unrecoverable memory state and severe crashes. The team conducted an emergency three-day patch under immense pressure, ultimately ensuring Java's successful debut and laying the foundation for decades of enterprise-level applications. The documentary was produced by Cult.Repo and features interviews with key figures, including Java's father, James Gosling, and Oracle Chief Architect.",
    tags_en: ["Java", "JVM", "Sun Microsystems", "The Java Story", "James Gosling", "Historical Event", "Programming Language"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/07/18/java-was-a-three-day-hotfix-away-from-dying-horribly-on-stage/5274590", lang: "EN" }
    ]
  },
  {
    id: "20260718-026",
    trackers: ["os"],
    category: "重點關注",
    title: "開源作業系統 NextBSD 專案重啟，結合 FreeBSD 核心與 Apple 歐美版 Darwin 基礎架構",
    summary: "知名 BSD 變體專案 NextBSD 在新維護者 Joe Maloney 領導下正式宣布重啟（NextBSD-redux）。該專案旨在整合現今 FreeBSD 作業系統核心，並替換其傳統偏向伺服器端的用戶空間（userland），改為導入 Apple 旗下開源的 Darwin OS（如 XNU 核心架構、init 系統 launchd、IOkit 與 Apple 系統日誌 syslogd 等）相關核心元件。此專案並非基於十年前舊程式碼分支，而是因應現今系統與硬體架構進行全新重構，目前正同步開發仿 Mac 風格的 Gershwin 圖形桌面環境，並與 ravynOS 等開源專案合作引入部分程式庫（如 libxpc）。本事件為作業系統架構與開源供應鏈生態變更，未涉及特定 CVE 漏洞。實務上建議資安及開發人員可關注此類新型態跨平台基礎架構對未來編譯器、底層安全監控與權限機制的潛在影響，相關細節與版本號目前尚未公開。",
    tags: ["NextBSD", "FreeBSD", "Apple Darwin", "開源專案", "作業系統架構", "launchd", "XNU"],
    title_en: "Open-Source Operating System NextBSD Project Rebooted, Combining FreeBSD Kernel with Apple's Darwin Infrastructure",
    summary_en: "The well-known BSD variant project NextBSD has officially announced its reboot (NextBSD-redux) under the leadership of new maintainer Joe Maloney. The project aims to integrate the modern FreeBSD operating system kernel and replace its traditional, server-oriented userland by introducing core components from Apple's open-source Darwin OS (such as the XNU kernel architecture, the init system launchd, IOkit, and the Apple system log syslogd). This project is not based on the old code branch from a decade ago; instead, it is a brand-new refactoring designed for current system and hardware architectures. Currently, it is simultaneously developing a Mac-style Gershwin graphical desktop environment and collaborating with open-source projects like ravynOS to introduce certain libraries (such as libxpc). This event represents a change in operating system architecture and the open-source supply chain ecosystem, involving no specific CVE vulnerabilities. In practice, it is recommended that cybersecurity and development personnel monitor the potential impact of this new type of cross-platform infrastructure on future compilers, low-level security monitoring, and permission mechanisms. Relevant details and version numbers have not yet been disclosed.",
    tags_en: ["NextBSD", "FreeBSD", "Apple Darwin", "Open-Source Project", "Operating System Architecture", "launchd", "XNU"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/07/18/nextbsd-returns-to-dollop-apple-source-on-freebsd/5273788", lang: "EN" }
    ]
  },
  {
    id: "20260718-027",
    trackers: ["os"],
    category: "重點關注",
    title: "Nvidia 發布首款 N1X Windows 11 Arm64 顯示卡驅動程式，為 RTX Spark Arm PC 上市做準備",
    summary: "Nvidia 已開始在其官網發布首款 N1X Windows 顯示卡驅動程式（版本 616.00），此版本為原生 Windows 11 Arm64 架構安裝包。技術細節顯示，該驅動程式的 INF 檔案中包含名為 nv_surface_woa.inf 的裝機資訊，揭露了兩種不同規格的 RTX Spark N1X GPU 配置，分別配備 6,144 核心與 5,120 核心的 Blackwell 晶片，並整合了以深度學習加速器（DLA）架構為基礎的 NVIDIA NPU 裝置識別碼。目前該驅動程式專為 Surface RTX Dev Box 開發者套件進行最佳化，雖尚未針對一般消費端裝置開放，但證實了 Nvidia 與微軟合作的 Arm 架構 RTX Spark PC 生態系即將問世。微軟亦針對 Windows 11 26H1 進行最佳化，推出工作負載設定檔排程（WPS）與全新記憶體管理機制，以支援高達 20 核處理器與 128GB 統一記憶體的高效能架構。",
    tags: ["Nvidia", "Microsoft", "Windows 11", "Arm64", "RTX Spark", "Blackwell", "顯示卡驅動程式", "NPU"],
    title_en: "Nvidia Releases First N1X Windows 11 Arm64 Graphics Driver, Preparing for RTX Spark Arm PC Launch",
    summary_en: "Nvidia has begun releasing its first N1X Windows graphics driver (version 616.00) on its official website. This version is a native Windows 11 Arm64 architecture installer. Technical details show that the driver's INF file contains installation information for nv_surface_woa.inf, revealing two different specifications for the RTX Spark N1X GPU configuration: one equipped with 6,144 cores and another with 5,120 cores, both utilizing Blackwell chips. Furthermore, it integrates an NVIDIA NPU device identifier based on the Deep Learning Accelerator (DLA) architecture. Although this driver is currently optimized for the Surface RTX Dev Box developer kit and is not yet available for general consumer devices, it confirms the imminent launch of the Arm architecture RTX Spark PC ecosystem through the collaboration between Nvidia and Microsoft. Microsoft has also optimized for Windows 11 26H1, introducing Workload Profile Scheduling (WPS) and a new memory management mechanism to support high-performance architectures featuring up to 20-core processors and 128GB of unified memory.",
    tags_en: ["Nvidia", "Microsoft", "Windows 11", "Arm64", "RTX Spark", "Blackwell", "Graphics Driver", "NPU"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/18/nvidia-begins-preparing-n1x-windows-11-gpu-drivers-ahead-of-rtx-spark-arm-pcs-launch", lang: "EN" }
    ]
  },
  {
    id: "20260718-028",
    trackers: ["os"],
    category: "重點關注",
    title: "SwitchBot發布RGBICWW吸頂燈，原生支援Matter與Apple Home，提升智慧家居照明體驗",
    summary: "SwitchBot推出了新型RGBICWW吸頂燈，旨在為智慧家居提供更完整的硬接線照明解決方案。這款燈具最大的亮點是原生支援Matter標準，無需額外的SwitchBot Hub，只要Apple TV 4K或HomePod連網，即可透過2.4 GHz Wi-Fi直接接入Apple Home生態系統。它採用RGBIC技術，具備獨立晶片，可同時顯示多種顏色，創造動態照明效果。此外，它提供2700K至6500K的色溫調光，並具備斷電記憶功能，確保電力恢復後能維持上次的亮度與顏色設定。產品提供12吋（2000流明）和15吋（3200流明）兩種尺寸，適合走廊、浴室及客廳等不同場景。這款產品以低成本提供了硬接線、原生Matter支援的優質照明升級方案。",
    tags: ["SwitchBot", "Matter", "Apple Home", "RGBIC", "智慧照明", "IoT"],
    title_en: "SwitchBot Releases RGBICWW Flush Mount Light, Natively Supporting Matter and Apple Home to Enhance Smart Home Lighting Experience",
    summary_en: "SwitchBot has launched a new RGBICWW flush mount light, designed to provide a more comprehensive hardwired lighting solution for smart homes. The biggest highlight of this fixture is its native support for the Matter standard, eliminating the need for an external SwitchBot Hub. As long as an Apple TV 4K or HomePod is connected, the light can directly join the Apple Home ecosystem via 2.4 GHz Wi-Fi. It utilizes RGBIC technology, featuring independent chips that can display multiple colors simultaneously, creating dynamic lighting effects. Furthermore, it offers color temperature dimming from 2700K to 6500K and includes power outage memory function, ensuring that the last brightness and color settings are maintained after power restoration. The product is available in two sizes: 12 inches (2000 lumens) and 15 inches (3200 lumens), suitable for various settings such as hallways, bathrooms, and living rooms. This product offers a high-quality, low-cost lighting upgrade solution with hardwiring and native Matter support.",
    tags_en: ["SwitchBot", "Matter", "Apple Home", "RGBIC", "Smart Lighting", "IoT"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/18/switchbot-rgbicww", lang: "EN" }
    ]
  },
  {
    id: "20260718-029",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "個人資料外洩警示：您的電話、地址與聯絡資訊正被數據經紀商打包出售",
    summary: "本文揭露個人資料在網路上持續外洩，指出電話號碼、電子郵件、家庭住址及人際關係等個人資訊，正被數據經紀商（Data Brokers）收集、打包，並販售給行銷商、保險公司及駭客。儘管 Apple 在 Safari 和 Mail 等服務中提供了隱私保護機制，但這些措施無法逆轉多年來已被爬取並分散到數百個經紀商資料庫中的資訊。文章強調，數據經紀商已建立了一個數十億美元的產業，透過收集和販售數位數據牟利。文章旨在提醒使用者，必須採取行動將個人資訊從市場和網路上移除，但原文並未提供具體的移除步驟或技術細節，僅提出警示與意識提升。",
    tags: ["數據經紀商", "個人資料外洩", "隱私權", "數據爬取", "網路安全"],
    title_en: "Personal Data Leak Alert: Your Phone, Address, and Contact Information Are Being Packaged and Sold by Data Brokers",
    summary_en: "This article reveals the continuous leakage of personal data online, pointing out that personal information such as phone numbers, email addresses, home addresses, and social connections are being collected, packaged, and sold by data brokers to marketers, insurance companies, and hackers. Although Apple has provided privacy protection mechanisms in services like Safari and Mail, these measures cannot reverse the information that has been scraped and dispersed into hundreds of broker databases over years. The article emphasizes that data brokers have established a multi-billion dollar industry by profiting from the collection and sale of digital data. The article aims to remind users that they must take action to remove their personal information from the market and the internet, but the original text does not provide specific removal steps or technical details, only raising an alert and increasing awareness.",
    tags_en: ["Data Brokers", "Personal Data Leakage", "Privacy", "Data Scraping", "Cybersecurity"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/18/your-personal-data-is-for-sale-here-is-how-to-take-it-off-the-internet", lang: "EN" }
    ]
  }
];
