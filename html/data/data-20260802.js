// data-20260802.js — 2026-08-02
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-02"] = [
  {
    id: "20260802-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6410-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 發布了安全公告 DSA-6410-1，修補了 OpenSSH 服務中一個潛在的認證繞過漏洞。此漏洞可能允許攻擊者在特定條件下，無需正確認證即可執行遠端命令。該漏洞的修補涉及 OpenSSH 核心元件的更新。實務上，所有使用 Debian 系統並依賴 OpenSSH 服務的用戶，應立即升級到包含此修補的系統版本，以防止未經授權的遠端存取。建議用戶透過標準的系統更新機制（如 `apt update` 和 `apt upgrade`）進行修補，確保系統的安全性。",
    tags: ["Debian", "OpenSSH", "DSA-6410-1", "認證繞過", "Linux 核心", "安全更新"],
    title_en: "Debian Releases DSA-6410-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6410-1, patching a potential authentication bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to execute remote commands without proper authentication under specific conditions. The patch involves updating core OpenSSH components. Practically, all users running Debian systems and relying on the OpenSSH service should immediately upgrade to the system version containing this patch to prevent unauthorized remote access. Users are advised to apply the patch through standard system update mechanisms (such as `apt update` and `apt upgrade`) to ensure system security.",
    tags_en: ["Debian", "OpenSSH", "DSA-6410-1", "Authentication Bypass", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00321.html", lang: "EN" }
    ]
  },
  {
    id: "20260802-002",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Starfire 空間級 SoC 支援：Linux 核心開始整合新硬體支援",
    summary: "本文報導 Intel 為極端環境（如太空）設計的 Starfire 空間級 SoC，並指出 Linux 核心已開始整合相關支援。Starfire 採用 18A 製程，是專為極端環境、Linux 系統更為普遍的應用場景設計。目前首次觀察到的支援修補程式位於 EDAC（Error Detection And Correction）子系統的 edac-for-next 分支，主要用於記憶體架構的錯誤偵測與修正。從技術細節來看，Starfire 的記憶體架構與 Panther Lake 非常接近，因此可以重用 IGEN6 驅動程式中現有的程式碼路徑，僅需新增設備 ID 即可完成支援。這代表 Starfire 的 Linux 支援預計會沿用 Panther Lake 的現有支援基礎，未來預期將會持續新增設備 ID。這項更新對於需要在極端環境運行的嵌入式系統和太空應用至關重要。",
    tags: ["Intel", "Starfire", "Linux 核心", "SoC", "EDAC", "Panther Lake"],
    title_en: "Intel Starfire Space-Grade SoC Support: Linux Kernel Begins Integrating New Hardware Support",
    summary_en: "This article reports on the Starfire space-grade SoC designed by Intel for extreme environments (such as space), noting that the Linux kernel has begun integrating related support. Starfire utilizes the 18A process and is designed specifically for extreme environments and application scenarios where Linux systems are prevalent. The first observed support patch is located in the EDAC (Error Detection And Correction) subsystem's edac-for-next branch, primarily used for error detection and correction in memory architecture. From a technical perspective, Starfire's memory architecture is very similar to Panther Lake, allowing for the reuse of existing code paths within the IGEN6 driver, requiring only the addition of a device ID to complete the support. This indicates that Starfire's Linux support is expected to leverage the existing support foundation of Panther Lake, with future additions anticipated through the continuous addition of device IDs. This update is crucial for embedded systems and space applications that operate in extreme environments.",
    tags_en: ["Intel", "Starfire", "Linux Kernel", "SoC", "EDAC", "Panther Lake"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Starfire-Starts-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260802-003",
    trackers: ["os"],
    category: "Linux",
    title: "Qualcomm MSM 驅動程式更新：Linux 7.3 將支援 Adreno 704 與 Adreno 722 GPU，並為 Shikra SoC 準備",
    summary: "Qualcomm 發布了 MSM DRM 核心圖形/顯示驅動程式更新，預計將納入 Linux 7.3 的合併窗口。此驅動程式更新的主要功能是為 Adreno 704 和 Adreno 722 GPU 提供支援。Adreno 704 可用於 UNO-Q 等嵌入式平台，而 Adreno 722 則用於更強大的 Snapdragon 7 Gen 4 SoC 等設備。此外，此驅動程式還增加了 Device Tree bindings，以支援即將推出的 Qualcomm Shikra SoC。這些更新也包含對 FBDEV 模擬的改進、teardown 修復以及其他多項修復。Linux 7.3 的合併窗口預計在八月下半期開始。此更新主要針對嵌入式系統和設備製造商，確保其在 Linux 核心層級獲得最新的硬體支援。",
    tags: ["Qualcomm", "MSM", "Linux 7.3", "Adreno 704", "Adreno 722", "Shikra SoC", "DRM"],
    title_en: "Qualcomm MSM Driver Update: Linux 7.3 to Support Adreno 704 and Adreno 722 GPUs, and Prepare for Shikra SoC",
    summary_en: "Qualcomm has released an MSM DRM core graphics/display driver update, which is expected to be included in the Linux 7.3 merge window. The primary function of this driver update is to provide support for the Adreno 704 and Adreno 722 GPUs. The Adreno 704 can be used in embedded platforms such as UNO-Q, while the Adreno 722 is intended for devices with more powerful SoCs, such as the Snapdragon 7 Gen 4. Furthermore, this driver adds Device Tree bindings to support the upcoming Qualcomm Shikra SoC. These updates also include improvements to FBDEV simulation, teardown fixes, and several other fixes. The Linux 7.3 merge window is expected to begin in the latter half of August. This update is primarily aimed at embedded systems and device manufacturers, ensuring they receive the latest hardware support at the Linux kernel level.",
    tags_en: ["Qualcomm", "MSM", "Linux 7.3", "Adreno 704", "Adreno 722", "Shikra SoC", "DRM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-MSM-DRM-Driver", lang: "EN" }
    ]
  },
  {
    id: "20260802-004",
    trackers: ["os"],
    category: "Linux",
    title: "Ubuntu Touch 邁向 26.04 LTS：整合 Vulkan、Widevine 及提升 Android 應用相容性",
    summary: "本文介紹了 Ubuntu Touch 的最新開發進度與路線圖。最新的 Ubuntu Touch 24.04-2.0 版本已發布，提供了部分 Vulkan 支援、Widevine DRM 內容串流支援、瀏覽器更新和提升設備加密處理能力等功能。未來開發重點包括 PulseAudio 整合更新、基於 Halium 16 的移植以支援新型 Android 設備，以及透過 Waydroid 實驗支援 Play Integrity API，這對於讓部分 Android 銀行應用程式在 Ubuntu Touch 上運行至關重要。此外，開發團隊正努力在 Snap 套件中實現 Vulkan 支援，並計劃發布 24.04-2.1 版本進行小幅修補。更長遠的目標是將 Ubuntu Touch 遷移至 Ubuntu 26.04 LTS 基礎版本，儘管目前尚未公布具體時間表，但這代表了平台重要的架構升級。",
    tags: ["Ubuntu Touch", "Ubuntu 26.04", "Vulkan", "Widevine", "Linux 核心", "Android 相容性"],
    title_en: "Ubuntu Touch heads toward 26.04 LTS: Integrating Vulkan, Widevine, and Enhancing Android App Compatibility",
    summary_en: "This article introduces the latest development progress and roadmap for Ubuntu Touch. The latest Ubuntu Touch 24.04-2.0 version has been released, providing features such as partial Vulkan support, Widevine DRM content streaming support, browser updates, and enhanced device encryption capabilities. Future development focuses include PulseAudio integration updates, porting based on Halium 16 to support new Android devices, and supporting the Play Integrity API via Waydroid experimental support. This is crucial for running certain Android banking applications on Ubuntu Touch. Furthermore, the development team is working to implement Vulkan support within Snap packages and plans to release a 24.04-2.1 version for minor patches. The longer-term goal is migrating Ubuntu Touch to the Ubuntu 26.04 LTS base version. Although a specific timeline has not been announced, this represents a significant architectural upgrade for the platform.",
    tags_en: ["Ubuntu Touch", "Ubuntu 26.04", "Vulkan", "Widevine", "Linux Kernel", "Android Compatibility"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Ubuntu-Touch-Toward-26.04", lang: "EN" }
    ]
  },
  {
    id: "20260802-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新：修復 AMD Zen 5/Zen 6 CPU 型號識別錯誤，提升系統兼容性",
    summary: "本次 Linux 核心的 x86 修復旨在解決部分 AMD Zen 5 處理器被錯誤識別為 Zen 6 的問題。先前合併的補丁將 0xd0 到 0xef ID 範圍的更多 Zen 6 型號加入了核心，但實際上 0xd0 到 0xd7 應屬於 Zen 5，而非 Zen 6。因此，新的補丁已將 0xd0 到 0xd7 劃分給 Zen 5，並重新定義了 Zen 6 的範圍，確保了 CPU 型號識別的準確性。此外，本次修復還為核心的 x86 memcmp() 實作增加了 volatile 限定詞和 clobbers 參數，以解決因指令重排序和優化導致的 Xen 虛擬機無法啟動的錯誤。這些修復將在 Linux 7.2-rc6 核心發布前合併，有助於提升系統在處理新一代 AMD 處理器和虛擬化環境中的穩定性與兼容性。",
    tags: ["Linux 核心", "AMD Zen 5", "Zen 6", "x86", "Linux 7.2-rc6", "Xen", "CPU 識別"],
    title_en: "Linux Kernel Update: Fixes AMD Zen 5/Zen 6 CPU Model Identification Error, Enhancing System Compatibility",
    summary_en: "This x86 fix in the Linux kernel aims to resolve an issue where some AMD Zen 5 processors were incorrectly identified as Zen 6. Previously merged patches added more Zen 6 models in the 0xd0 to 0xef ID range to the kernel, but in reality, the 0xd0 to 0xd7 range should belong to Zen 5, not Zen 6. Therefore, the new patch assigns the 0xd0 to 0xd7 range to Zen 5 and redefines the Zen 6 range, ensuring accurate CPU model identification. Furthermore, this fix adds volatile qualifiers and clobbers parameters to the kernel's x86 memcmp() implementation, resolving an error that prevented Xen virtual machines from booting due to instruction reordering and optimization. These fixes will be merged before the Linux 7.2-rc6 kernel release, helping to improve system stability and compatibility when handling new generations of AMD processors and virtualization environments.",
    tags_en: ["Linux Kernel", "AMD Zen 5", "Zen 6", "x86", "Linux 7.2-rc6", "Xen", "CPU Identification"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc6-Fixing-Zen-5-IDs", lang: "EN" }
    ]
  },
  {
    id: "20260802-006",
    trackers: ["os"],
    category: "Linux",
    title: "Steam 平台使用數據分析：Linux 遊戲市場佔有率於 2026 年 7 月回升至 4.01%",
    summary: "根據 Valve 發布的 2026 年 7 月 Steam 調查報告，Steam 在 Linux 上的市場佔有率回升至 4.01%。此數據相較於前一個月的 3.69% 有所提升，但仍遠低於 3 月和 4 月的歷史高點。報告指出，SteamOS Holo 在 Linux 遊戲系統中的使用比例約為 22%，這是在 Steam Deck 和新推出的 Steam Machine 設備支援下觀察到的趨勢。雖然數據顯示 Linux 平台的使用率有所增長，但 Valve 亦提醒用戶，Steam 數據有時會進行後續的修正與更新，建議玩家可至 SteamPowered.com 查閱完整的最新數據。整體而言，這反映了 Linux 平台在遊戲領域的持續增長趨勢，特別是隨著專用硬體設備的推出。",
    tags: ["Steam", "Linux", "SteamOS", "Steam Deck", "Steam Machine", "市場佔有率"],
    title_en: "Steam Platform Usage Data Analysis: Linux Gaming Market Share Rebounds to 4.01% in July 2026",
    summary_en: "According to the Steam survey report released by Valve in July 2026, Steam's market share on Linux rebounded to 4.01%. This figure represents an increase from the previous month's 3.69%, but remains significantly lower than the historical peaks recorded in March and April. The report notes that SteamOS Holo accounts for approximately 22% of the Linux gaming system usage, a trend observed with the support of the Steam Deck and the newly launched Steam Machine devices. Although the data shows increased usage on the Linux platform, Valve also advises users that Steam data is sometimes subject to subsequent corrections and updates, and recommends that players consult SteamPowered.com for the complete latest data. Overall, this reflects a continuous growth trend for the Linux platform in the gaming sector, especially with the introduction of dedicated hardware devices.",
    tags_en: ["Steam", "Linux", "SteamOS", "Steam Deck", "Steam Machine", "Market Share"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Steam-On-Linux-July-2026", lang: "EN" }
    ]
  },
  {
    id: "20260802-007",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc6 核心版本發布：包含多項驅動修復與硬體相容性改善",
    summary: "Linux 核心版本 7.2-rc6 已發布，持續朝向穩定版 7.2 邁進。本次預覽版包含了大量修復與更新，尤其是在驅動程式層面。主要修復內容包括音訊（sound）相關的修復、Linux DRM 核心圖形驅動程式的修復，以及針對有缺陷的 Western Digital SATA 驅動程式的應對。此外，本次版本也修正了部分 AMD Zen 5 CPU 型號被誤識別為 Zen 6 的問題。Linus Torvalds 指出，本次 RC 版本在修補的範圍和數量上非常龐大，涵蓋了約 60% 的驅動程式、20% 的網路功能和 20% 的其他核心元件。這些更新反映了持續的維護和修復工作，特別是受 AI/LLM 編碼代理影響的修補增多。開發者應留意這些核心元件的變動，以確保系統在穩定版發布前具備最佳的硬體相容性。",
    tags: ["Linux 核心", "Linux 7.2", "Linux DRM", "Western Digital", "AMD Zen 5", "核心修復"],
    title_en: "Linux 7.2-rc6 Kernel Release: Includes Multiple Driver Fixes and Hardware Compatibility Improvements",
    summary_en: "Linux kernel version 7.2-rc6 has been released, continuing the progress toward the stable 7.2 version. This preview version includes numerous fixes and updates, particularly at the driver level. Key fixes include audio (sound) related patches, fixes for the Linux DRM core graphics driver, and addressing a flawed Western Digital SATA driver. Furthermore, this version corrects an issue where certain AMD Zen 5 CPU models were incorrectly identified as Zen 6. Linus Torvalds noted that this RC version is massive in scope and number of patches, covering approximately 60% of drivers, 20% of networking functionality, and 20% of other core components. These updates reflect continuous maintenance and patching efforts, especially with an increase in patches influenced by AI/LLM coding agents. Developers should monitor these core component changes to ensure optimal hardware compatibility before the stable version is released.",
    tags_en: ["Linux Kernel", "Linux 7.2", "Linux DRM", "Western Digital", "AMD Zen 5", "Kernel Fixes"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc6-Released", lang: "EN" }
    ]
  },
  {
    id: "20260802-008",
    trackers: ["os"],
    category: "Windows",
    title: "微軟持續推動 Windows 11 核心元件 WinUI 3 重建，將擴展至傳統管理工具",
    summary: "本文探討微軟正在將 Windows 11 系統中較老舊的系統管理工具，如「印表機管理」（Print Management），逐步遷移至現代化的 WinUI 3 介面。這顯示微軟正在系統性地解決 Windows 11 介面一致性問題，將傳統的 MMC 樣式介面替換為現代化的應用程式體驗。目前，新的印表機管理應用程式僅在基於 Germanium 的 Beta 和實驗性 Windows Insider 版本中可見，它作為一個獨立的 Windows 應用程式（而非 MMC Snap-in）存在，但仍要求使用者手動以管理員權限啟動。這項趨勢與微軟正在重寫檔案總管屬性表單、檔案複製對話框等核心系統對話框一致，目標是讓整個作業系統感覺更為統一。雖然這項更新對一般使用者可能不顯眼，但它對於 IT 管理員和進階使用者而言，代表著系統核心元件的重大設計轉型，預計未來會持續擴展到更多被遺忘的 Windows 組件。",
    tags: ["Windows 11", "WinUI 3", "Print Management", "MMC", "微軟", "系統管理"],
    title_en: "Microsoft Continues to Modernize Windows 11 Core Components with WinUI 3, Expanding to Traditional Management Tools",
    summary_en: "This article explores Microsoft's process of migrating older system management tools, such as 'Print Management,' within Windows 11 to the modern WinUI 3 interface. This indicates Microsoft's systematic effort to resolve Windows 11 interface consistency issues by replacing traditional MMC-style interfaces with a modern application experience. Currently, the new Print Management application is only visible in Beta and experimental Windows Insider builds based on Germanium. It exists as a standalone Windows application (rather than an MMC Snap-in), but still requires the user to manually launch it with administrator privileges. This trend aligns with Microsoft's efforts to rewrite core system dialog boxes, such as the file explorer property sheet and file copy dialog. The goal is to give the entire operating system a more unified feel. Although this update may not be noticeable to the average user, it represents a major design transformation of core system components for IT administrators and advanced users, and is expected to continue expanding to more forgotten Windows components.",
    tags_en: ["Windows 11", "WinUI 3", "Print Management", "MMC", "Microsoft", "System Management"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/02/windows-11s-winui-3-modernization-just-reached-one-of-its-oldest-legacy-tools-meet-the-new-print-management", lang: "EN" }
    ]
  },
  {
    id: "20260802-009",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft Teams 重設計會議介面：大幅降低誤操作風險，改善螢幕分享與離會體驗",
    summary: "為解決用戶在會議期間因介面設計不當而導致的意外螢幕分享或誤離會問題，Microsoft 正逐步推出 Teams 新的會議介面。本次更新的核心改動包括將主要操作按鈕（如音訊、視訊、分享）集中至頂部，並將「離會」按鈕移至最右側，以減少誤點擊的機率。此外，新增的分享面板提供更精細的控制，用戶可預覽分享內容，並在分享前選擇多種展示模式（如內容專用、側邊），且最終的分享按鈕設置為兩步驟流程，大幅降低意外分享的風險。其他次要功能（如錄影、白板、投票）則整合至新的「更多」選單。用戶預計在 2026 年 8 月底前可使用新功能。此更新旨在提升用戶在協作環境中的操作信心與安全性。",
    tags: ["Microsoft Teams", "會議介面", "UX/UI", "協作軟體", "誤操作防護"],
    title_en: "Microsoft Teams Redesigns Meeting Interface: Significantly Reduces Accidental Operation Risks and Improves Screen Sharing and Leaving Experience",
    summary_en: "To address issues of accidental screen sharing or leaving meetings due to poor interface design during conferences, Microsoft is gradually rolling out a new Teams meeting interface. Core changes in this update include consolidating main operation buttons (such as audio, video, and sharing) at the top, and moving the 'Leave' button to the far right to minimize the chance of accidental clicks. Additionally, the new sharing panel offers more granular control, allowing users to preview shared content and select various display modes (such as content-only or sidebar) before sharing. Furthermore, the final share button is set up as a two-step process, significantly reducing the risk of accidental sharing. Other secondary functions (such as recording, whiteboard, and polling) are integrated into a new 'More' menu. Users are expected to be able to use the new features by the end of August 2026. This update aims to enhance user confidence and security within the collaborative environment.",
    tags_en: ["Microsoft Teams", "Meeting Interface", "UX/UI", "Collaboration Software", "Accidental Operation Prevention"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/03/microsoft-teams-redesign-stops-your-accidental-screen-shares-and-leave-clicks-rolling-out-now", lang: "EN" }
    ]
  },
  {
    id: "20260802-010",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "【個人情報管理】防範印鑑偽造與遺失：專家建議分開保管印鑑與印鑑證明書",
    summary: "本文強調資安與個人資訊保護的重點在於「習慣」而非技術，特別針對印鑑（인감도장）與印鑑證明書（인감증명서）的保管建議。專家指出，印鑑因其一旦遺失或被盜用，可能導致本意之外的契約、登記或行政流程，造成重大的財產糾紛或法律責任。因此，建議將印鑑與印鑑證明書分開保管，並將印鑑存放在有鎖具的保險箱等限制存取處所。若印鑑遺失，應立即到社區中心（주민센터）進行印鑑變更申報，以使舊印鑑失效。此外，文章也提醒，可考慮使用本人簽名事實確認書（본인서명사실확인서）作為替代文件，以減輕印鑑的保管負擔。若發生管理不當，可能導致印鑑被偽造或未經授權使用，造成內部控制失敗的風險。",
    tags: ["印鑑", "印鑑證明書", "個人資訊保護", "資安習慣", "法律責任", "內部控制"],
    title_en: "[Personal Information Management] Preventing Seal Forgery and Loss: Expert Advice to Store Seals and Seal Certificates Separately",
    summary_en: "This article emphasizes that the focus of cybersecurity and personal information protection lies in 'habits' rather than technology, specifically addressing storage recommendations for personal seals (인감도장) and seal certificates (인감증명서). Experts point out that if a seal is lost or misused, it can lead to unintended contracts, registrations, or administrative processes, resulting in significant property disputes or legal liabilities. Therefore, it is recommended to store the seal and the seal certificate separately, and to keep the seal in a restricted access location such as a locked safe. If the seal is lost, one should immediately report the seal change at the community center (주민센터) to invalidate the old seal. Furthermore, the article reminds readers that considering using a personal signature confirmation document (본인서명사실확인서) as an alternative document can alleviate the burden of seal management. Improper management may lead to the seal being forged or used without authorization, resulting in the risk of internal control failure.",
    tags_en: ["Seal", "Seal Certificate", "Personal Information Protection", "Cybersecurity Habits", "Legal Liability", "Internal Control"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144232&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-011",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳出「iPhone Ultra」可採用折疊螢幕設計，規格與三星 Galaxy Z Fold 8 相似",
    summary: "本文為科技新聞報導，預測蘋果下一代旗艦手機「iPhone Ultra」可能會採用折疊螢幕形式。報導指出，該機型預計具備 5.5 吋外接螢幕和 7.6 吋內接螢幕的規格。這些尺寸與近期三星推出的 Galaxy Z Fold 8 的規格高度吻合。雖然文章未提供任何技術細節或安全漏洞資訊，僅是基於市場傳聞和產品比較，暗示蘋果可能正在進入折疊手機市場，並可能參考競爭對手的設計趨勢。建議關注蘋果未來正式發布的產品資訊。",
    tags: ["iPhone Ultra", "折疊螢幕", "Apple", "Samsung", "Galaxy Z Fold 8", "手機規格"],
    title_en: "Rumors suggest Apple's 'iPhone Ultra' may adopt foldable screen design, specifications similar to Samsung Galaxy Z Fold 8",
    summary_en: "This article is a technology news report speculating that Apple's next flagship phone, the 'iPhone Ultra,' might adopt a foldable screen form factor. The report indicates that the device is expected to feature a 5.5-inch outer screen and a 7.6-inch inner screen. These dimensions closely match those of the recently launched Samsung Galaxy Z Fold 8. Although the article provides no technical details or security vulnerability information, it is based solely on market rumors and product comparisons, suggesting that Apple may be entering the foldable phone market and potentially referencing the design trends of its competitors. Users are advised to monitor official product information released by Apple in the future.",
    tags_en: ["iPhone Ultra", "Foldable Screen", "Apple", "Samsung", "Galaxy Z Fold 8", "Phone Specifications"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/02/heres-how-iphone-ultras-form-factor-could-compare-to-other-apple-products", lang: "EN" }
    ]
  },
  {
    id: "20260802-012",
    trackers: ["os"],
    category: "Apple",
    title: "Apple傳聞：具備相機功能的 AirPods 可能於今年推出，整合視覺智慧功能",
    summary: "本文報導指出 Apple 正在開發具備相機功能的 AirPods，並將「視覺智慧」（Visual Intelligence）功能作為產品重點。此產品最初曾有傳聞今年推出，但後續曾推遲至明年。然而，報導提出一個新的可能性，認為第一代具備相機的 AirPods 可能會在今年晚些時候發布。這項產品的開發與 Apple 的生態系統整合緊密相關，預計將提升用戶在日常使用中的拍照、錄影和資訊擷取能力。由於文章為傳聞性質，未提供具體的產品規格、發布日期或技術細節，因此修補建議為關注 Apple 官方後續公告。",
    tags: ["Apple", "AirPods", "相機", "視覺智慧", "傳聞", "iOS"],
    title_en: "Apple Rumor: AirPods with Camera Functionality May Launch This Year, Integrating Visual Intelligence",
    summary_en: "This article reports that Apple is developing AirPods equipped with camera functionality, making \"Visual Intelligence\" a key product feature. While the product was initially rumored to launch this year, it was later postponed until next year. However, the report proposes a new possibility, suggesting that the first generation of camera-equipped AirPods might be released later this year. The development of this product is closely linked to Apple's ecosystem integration and is expected to enhance users' ability to take photos, record videos, and capture information in daily use. Since the article is based on rumors, it does not provide specific product specifications, release dates, or technical details. Therefore, the remediation advice is to monitor official announcements from Apple.",
    tags_en: ["Apple", "AirPods", "Camera", "Visual Intelligence", "Rumor", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/02/airpods-with-cameras-visual-intelligence-could-arrive-this-year", lang: "EN" }
    ]
  },
  {
    id: "20260802-013",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 規劃非AR智慧眼鏡作為健康穿戴裝置，整合運動追蹤與健康監測功能",
    summary: "根據報導，Apple正積極將其未來的非擴增實境（non-AR）智慧眼鏡定位為健康與健身輔助裝置。雖然這些功能預計不會在首代產品上市時就推出，但Apple已在相關領域進行規劃。過去，Apple曾嘗試讓Vision Pro運行健身應用程式，但因技術限制和設備重量而擱置。目前，Apple正在重新考慮智慧眼鏡的健康監測方案，預計可能結合心率感測器（類似AirPods Pro 3的技術）和攝像頭，讓眼鏡成為跑步等運動的實用伴侶。此外，Apple的Vision Products Group也正在招募人才，專門負責定義跨越空間計算、穿戴式裝置、消費健康和人類行為的產品方向。這顯示Apple將持續投入資源，將智慧眼鏡發展成一個全面的健康監測平台，但具體功能預計需數年時間才能成熟。",
    tags: ["Apple", "智慧眼鏡", "健康穿戴", "Vision Pro", "空間計算", "心率感測器"],
    title_en: "Apple plans non-AR smart glasses as health wearable device, integrating fitness tracking and health monitoring functions",
    summary_en: "According to reports, Apple is actively positioning its future non-augmented reality (non-AR) smart glasses as a health and fitness assistance device. Although these functions are not expected to be available in the first generation product launch, Apple has been planning in this area. Previously, Apple attempted to run fitness applications on the Vision Pro, but this was shelved due to technical limitations and device weight. Currently, Apple is reconsidering the health monitoring solution for smart glasses, which is expected to combine a heart rate sensor (similar to technology in AirPods Pro 3) and a camera, making the glasses a practical companion for activities like running. Furthermore, Apple's Vision Products Group is recruiting talent specifically responsible for defining product directions that span spatial computing, wearable devices, consumer health, and human behavior. This indicates that Apple will continue to invest resources into developing smart glasses into a comprehensive health monitoring platform, though specific functions are expected to take several years to mature.",
    tags_en: ["Apple", "Smart Glasses", "Health Wearable", "Vision Pro", "Spatial Computing", "Heart Rate Sensor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/02/apple-ai-smart-glasses-to-serve-as-health-companion", lang: "EN" }
    ]
  },
  {
    id: "20260802-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "COLDCARD硬體錢包韌體漏洞遭利用，駭客可離線推測私鑰竊取價值8860萬美元的比特幣",
    summary: "研究人員懷疑COLDCARD硬體錢包韌體存在漏洞，導致其隨機數生成器（RNG）使用非加密安全的確定性軟體生成器，而非應用的STM32硬體RNG。此漏洞允許攻擊者離線生成可能的錢包種子，並透過鏈上地址比對來確認正確的私鑰，從而竊取資金。受影響的韌體版本包括Mk2和Mk3的4.0.1至4.1.9，以及Mk4和Mk5的舊版等。駭客利用此漏洞在短時間內從數千個地址竊取了估計價值8860萬美元的比特幣。修補建議是立即更新到修復版本（例如Mk2/Mk3的4.2.0或更高），但用戶必須理解更新無法修復已生成的種子。受影響用戶應驗證現有備份，安裝修復韌體，生成並安全記錄新的種子，並透過小額測試交易完成資金遷移。",
    tags: ["COLDCARD", "硬體錢包", "RNG漏洞", "韌體漏洞", "Bitcoin", "私鑰竊取"],
    title_en: "COLDCARD Hardware Wallet Firmware Vulnerability Exploited, Allowing Offline Private Key Deduction and Theft of $88.6 Million in Bitcoin",
    summary_en: "Researchers suspect a vulnerability in the COLDCARD hardware wallet firmware, which causes its Random Number Generator (RNG) to use a non-cryptographically secure deterministic software generator instead of the intended STM32 hardware RNG. This vulnerability allows attackers to offline generate possible wallet seeds and confirm the correct private key by comparing on-chain addresses, thereby stealing funds. Affected firmware versions include 4.0.1 to 4.1.9 for Mk2 and Mk3, as well as older versions of Mk4 and Mk5. Attackers exploited this vulnerability to steal an estimated $88.6 million worth of Bitcoin from thousands of addresses in a short period. The recommended fix is to immediately update to a patched version (e.g., 4.2.0 or higher for Mk2/Mk3), but users must understand that the update cannot recover already generated seeds. Affected users should verify existing backups, install the patched firmware, generate and securely record a new seed, and complete the fund transfer via a small test transaction.",
    tags_en: ["COLDCARD", "Hardware Wallet", "RNG Vulnerability", "Firmware Vulnerability", "Bitcoin", "Private Key Theft"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/coldcard-wallet-rng-flaw-likely-linked-to-88-million-bitcoin-theft", lang: "EN" }
    ]
  },
  {
    id: "20260802-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome擬推出新功能，預設阻擋惡意劫持新分頁或搜尋引擎的政策安裝擴充功能",
    summary: "Google正在開發一項新的Chrome安全功能，旨在預設阻擋透過政策強制安裝的擴充功能，防止其劫持「新分頁」頁面或更改預設搜尋引擎。目前，惡意軟體利用企業政策（Enterprise Policy）的機制，在未受管理的個人電腦（即「低信任環境」）上，透過新增本地Chrome政策金鑰的方式，強制安裝擴充功能。這些惡意擴充功能可以取代新分頁內容、更改搜尋引擎，甚至將搜尋結果導向可疑網站，且由於其政策控制性質，用戶難以移除或停用，甚至會顯示「由您的組織管理」的誤導訊息。\n\n新功能將啟用`kBlockDseNtpOverrideExtensionsOnUnmanagedDevices`功能，在未受管理的Windows和macOS設備上，預設啟動端到端阻擋機制。當偵測到試圖安裝覆寫新分頁或預設搜尋引擎的政策控制擴充功能時，Chrome將會取消安裝，並將擴充功能ID儲存為「已阻擋擴充功能」偏好，防止重複嘗試。此外，該功能還確保手動安裝的擴充功能不會被誤轉換為政策控制的類型，讓用戶仍能自行管理。若設備失去信任管理狀態，Chrome也會自動解除受影響的覆寫擴充功能。此功能尚未正式發布，但預計將大幅提升個人設備的安全性。",
    tags: ["Google Chrome", "政策控制", "新分頁劫持", "擴充功能安全", "未受管理設備", "Chrome 安全功能"],
    title_en: "Google Chrome to Introduce New Feature Blocking Malicious Policy-Controlled Extensions Hijacking New Tabs or Search Engines",
    summary_en: "Google is developing a new Chrome security feature designed to prevent extensions that are forcibly installed via policies from hijacking the \"New Tab\" page or altering the default search engine. Currently, malware exploits the Enterprise Policy mechanism to forcibly install extensions on unmanaged personal computers (i.e., \"low-trust environments\") by adding local Chrome policy keys. These malicious extensions can replace new tab content, change search engines, or even redirect search results to suspicious websites. Furthermore, due to their policy-controlled nature, users find them difficult to remove or disable, and they may even display misleading messages such as \"Managed by your organization.\" The new feature will enable `kBlockDseNtpOverrideExtensionsOnUnmanagedDevices`, which will activate an end-to-end blocking mechanism on unmanaged Windows and macOS devices by default. When Chrome detects an attempt to install a policy-controlled extension that overwrites the New Tab or default search engine, it will uninstall the extension and store the extension ID as a \"blocked extension\" preference, preventing repeated attempts. Additionally, the feature ensures that manually installed extensions are not mistakenly converted into policy-controlled types, allowing users to manage them independently. If a device loses its trusted management status, Chrome will also automatically remove the affected override extensions. Although this feature has not been officially released, it is expected to significantly enhance the security of personal devices.",
    tags_en: ["Google Chrome", "Policy Control", "New Tab Hijacking", "Extension Security", "Unmanaged Devices", "Chrome Security Feature"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/google/google-chrome-may-soon-block-new-tab-hijacker-extensions-by-default", lang: "EN" }
    ]
  },
  {
    id: "20260802-016",
    trackers: ["os"],
    category: "Android",
    title: "Google Android 語音搜尋按鈕大改版：整合 AI 模式與多功能工具列",
    summary: "Google 正在對 Android 桌面常駐的語音搜尋按鈕進行重大重新設計。舊版設計僅能將語音輸入轉為一般搜尋查詢，並提供歌曲搜尋快捷方式。新版改動最大的亮點是新增了底部的工具列，使用者可以更流暢地在「搜尋 (Search)」、「AI 模式 (AI Mode)」、「即時搜尋 (Search Live)」和「歌曲搜尋 (Song Search)」之間切換。在「搜尋」功能中，新增了四格波形狀的轉錄介面，使用者說話時，轉錄內容會即時顯示在頂部。完成「AI 模式」查詢後，點擊箭頭可進入「搜尋」框進行編輯，而左側的停止按鈕則能導回帶有轉錄內容的搜尋框。此改版尚未全面推出，目前僅在 Google 應用程式的 Beta 版本中可見。",
    tags: ["Google", "Android", "語音搜尋", "AI Mode", "Google Lens", "使用者介面"],
    title_en: "Google Android Voice Search Button Major Redesign: Integrating AI Mode and Multifunctional Toolbar",
    summary_en: "Google is undergoing a major redesign of the persistent voice search button on the Android desktop. The old design could only convert voice input into a general search query and provide a song search shortcut. The biggest highlight of the new version is the addition of a bottom toolbar, allowing users to switch more smoothly between \"Search,\" \"AI Mode,\" \"Search Live,\" and \"Song Search.\" Within the \"Search\" function, a new four-grid waveform transcription interface has been added, displaying transcribed content in real-time as the user speaks. After completing an \"AI Mode\" query, clicking the arrow allows entry into the \"Search\" box for editing, while the stop button on the left can return to the search box containing the transcription. This redesign has not been fully rolled out and is currently only visible in the Beta version of the Google application.",
    tags_en: ["Google", "Android", "Voice Search", "AI Mode", "Google Lens", "User Interface"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/02/google-voice-search-redesign-2", lang: "EN" }
    ]
  },
  {
    id: "20260802-017",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 傳聞洩漏：Google 新機型規格曝光，市場評價認為規格平平",
    summary: "本文為科技新聞週報的內容，討論了關於 Google Pixel 11 系列手機的洩漏資訊。文章指出，目前已洩漏了關於 Pixel 11 的大部分規格，但整體市場評價認為其功能和規格「有點令人失望」（underwhelming）。由於原文僅為一篇介紹洩漏資訊的開場白，並未提供任何具體的技術細節、CVE 編號、攻擊向量或修補建議。因此，本摘要僅能概述其為一則關於新產品規格的市場討論，並未涉及資安或技術漏洞分析。",
    tags: ["Pixel 11", "Google", "Android", "手機規格", "洩漏資訊"],
    title_en: "Pixel 11 Rumors Leak: Google's New Device Specifications Exposed, Market Views Specs as Mediocre",
    summary_en: "This article is content from a technology news weekly, discussing leaked information regarding the Google Pixel 11 series smartphone. It points out that most specifications for the Pixel 11 have been leaked, but the overall market sentiment views its features and specifications as 'underwhelming.' Since the original text is merely an introduction to leaked information and does not provide any specific technical details, CVE IDs, attack vectors, or patch recommendations, this summary can only overview it as a market discussion about new product specifications, and does not involve cybersecurity or technical vulnerability analysis.",
    tags_en: ["Pixel 11", "Google", "Android", "Smartphone Specs", "Leak Information"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/02/the-pixel-11-will-be-a-perfect-storm-of-bad-timing", lang: "EN" }
    ]
  },
  {
    id: "20260802-018",
    trackers: ["os"],
    category: "重點關注",
    title: "AI數據中心需求衝擊供應鏈：MacBook Air面臨記憶體短缺與供貨困境",
    summary: "由於美國地區AI數據中心的大規模建置，導致對高階HBM2 DRAM等記憶體元件的需求激增，造成整個消費電子產業的供應鏈結構性轉移。市場上，SSD和DDR5記憶體的價格自年初以來持續上漲。儘管蘋果公司已在六月下旬調整了產品定價，但其MacBook Air仍持續面臨庫存短缺的困境。這顯示AI帶動的產業需求，已對傳統消費級電子產品的供應鏈造成了重大壓力，影響了多個產品線的供貨穩定性。",
    tags: ["供應鏈危機", "AI數據中心", "HBM2 DRAM", "MacBook Air", "DDR5", "消費電子"],
    title_en: "AI Data Center Demand Hits Supply Chain: MacBook Air Faces Memory Shortages and Supply Difficulties",
    summary_en: "Due to the massive construction of AI data centers in the United States, the demand for memory components such as high-end HBM2 DRAM has surged, causing a structural shift in the entire consumer electronics supply chain. Market prices for SSD and DDR5 memory have continued to rise since the beginning of the year. Although Apple adjusted its product pricing in late June, its MacBook Air continues to face inventory shortages. This indicates that AI-driven industrial demand has placed significant pressure on the supply chain of traditional consumer-grade electronic products, affecting the supply stability of multiple product lines.",
    tags_en: ["Supply Chain Crisis", "AI Data Center", "HBM2 DRAM", "MacBook Air", "DDR5", "Consumer Electronics"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/02/macbook-air-reportedly-facing-major-supply-shortages-due-to-ai-driven-memory-crisis", lang: "EN" }
    ]
  },
  {
    id: "20260802-019",
    trackers: ["os"],
    category: "重點關注",
    title: "Box64 v0.4.4 發布：提升跨架構模擬能力，內建配置工具與快取機制",
    summary: "Box64 釋出新版本 v0.4.4，這是一個開源的用戶空間 Linux x86_64 模擬器，用於在 64 位元 ARM、RISC-V 和 LoongArch 等系統上執行二進位檔案。本版本的主要更新包括新增了使用 Python 編寫的 `box64-configurator` 應用程式，使用戶能更輕鬆地針對不同二進位或應用程式自訂配置。此外，DynaCache（用於 x86_64 生成原生程式碼的磁碟快取）現已預設啟用。功能層面，v0.4.4 提升了模擬精準度，有助於運行更多受數位版權管理（DRM）保護的遊戲。同時，它也為 RISC-V 增加了新的操作碼，並大幅提升了對 LoongArch CPU 的支援速度。使用者可透過 GitHub 或 box86.org 獲取下載與詳細資訊。",
    tags: ["Box64", "v0.4.4", "x86_64", "ARM", "RISC-V", "LoongArch", "模擬器"],
    title_en: "Box64 v0.4.4 Released: Enhanced Cross-Architecture Emulation Capabilities with Built-in Configuration Tool and Caching Mechanism",
    summary_en: "Box64 has released a new version, v0.4.4. This is an open-source user-space Linux x86_64 emulator used to run binary files on systems such as 64-bit ARM, RISC-V, and LoongArch. Key updates in this version include the addition of the `box64-configurator` application, written in Python, which allows users to easily customize configurations for different binaries or applications. Furthermore, DynaCache (a disk cache used for generating native code for x86_64) is now enabled by default. Functionally, v0.4.4 improves emulation accuracy, aiding the execution of more Digital Rights Management (DRM)-protected games. It also adds new opcodes for RISC-V and significantly boosts support speed for LoongArch CPUs. Users can obtain downloads and detailed information via GitHub or box86.org.",
    tags_en: ["Box64", "v0.4.4", "x86_64", "ARM", "RISC-V", "LoongArch", "emulator"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Box64-0.4.4", lang: "EN" }
    ]
  },
  {
    id: "20260802-020",
    trackers: ["os"],
    category: "重點關注",
    title: "回顧網路早期發展：前微軟員工談 Exchange 與 Outlook 如何應對網際網路的挑戰",
    summary: "本文回顧了早期網路時代的資安與通訊歷史，重點介紹了前 AT&T WorldNet 員工 Tom Evslin 的經歷。在 1990 年代初期，Microsoft 當時正開發 Exchange Server，旨在應對 Lotus Notes 的威脅。Evslin 認為 Microsoft 過度關注內部產品，延遲了與網際網路的整合。他負責的 SMTP Gateway 服務，最初未受重視，但隨著企業用戶實際透過網際網路大量傳送電子郵件，其重要性迅速凸顯。此外，他指出 Outlook 的開發初期，Word 和 Outlook 客戶端未能充分整合，導致格式化引擎存在分離，影響了用戶體驗。文章強調，在快速變動的網路環境中，應具備快速適應和整合的能力，而非固守傳統的企業網路思維。",
    tags: ["Microsoft Exchange", "Outlook", "SMTP", "網路通訊歷史", "AT&T", "資安歷史"],
    title_en: "A Look Back at Early Internet Development: Former Microsoft Employee Discusses How Exchange and Outlook Faced Internet Challenges",
    summary_en: "This article reviews the history of cybersecurity and communications in the early internet era, focusing on the experiences of Tom Evslin, a former AT&T WorldNet employee. In the early 1990s, Microsoft was developing Exchange Server, aiming to counter the threat posed by Lotus Notes. Evslin believes that Microsoft focused too heavily on internal products, delaying integration with the internet. The SMTP Gateway service, which he was responsible for, was initially underestimated, but its importance quickly became apparent as enterprise users began sending large volumes of email over the internet. Furthermore, he points out that during the early development of Outlook, the Word and Outlook clients failed to integrate sufficiently, leading to a separation of the formatting engine and negatively impacting the user experience. The article emphasizes that in a rapidly changing network environment, the ability to adapt and integrate quickly is crucial, rather than adhering to traditional corporate network thinking.",
    tags_en: ["Microsoft Exchange", "Outlook", "SMTP", "Internet Communications History", "AT&T", "Cybersecurity History"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/02/meet-the-internet-radical-who-helped-microsoft-get-email-and-att-get-online/5281281", lang: "EN" }
    ]
  },
  {
    id: "20260802-021",
    trackers: ["os"],
    category: "重點關注",
    title: "實驗測試揭露：Windows 應用程式（如 MS Word）在部分筆電上開啟速度落後 Mac，但 XPS 13 仍具備優勢",
    summary: "獨立實驗室測試（PhoneBuff）比較了多款筆電在開啟大型 MS Word 文件時的性能。測試結果顯示，相較於 MacBook Air M5，配備 Snapdragon X2 Plus 的 Surface Laptop 13 開啟 500 頁 Word 文件耗時近兩倍。此外，在日常生產力工作（如 Word/Excel 切換）的電池續航測試中，Intel Core 5 320 搭載的 Dell XPS 13 表現優於 MacBook Neo。雖然 Windows 系統在 Word 開啟速度上存在明顯弱點，但 XPS 13 憑藉更優的螢幕、擴充儲存和電池續航表現，仍被認為是目前更值得購買的 Windows 選擇。文章指出，Microsoft 應改善其應用程式在 Windows 系統上的基礎性能，而非僅依賴硬體規格。",
    tags: ["Microsoft Word", "Windows 11", "MacBook Air", "Dell XPS 13", "Snapdragon X2 Plus", "性能測試", "電池續航"],
    title_en: "Lab Tests Reveal: Windows Applications (like MS Word) Lag Behind Mac on Some Laptops, But XPS 13 Still Holds an Edge",
    summary_en: "Independent laboratory tests (PhoneBuff) compared the performance of various laptops when opening large MS Word files. The test results showed that the Surface Laptop 13, equipped with Snapdragon X2 Plus, took nearly twice as long to open a 500-page Word file compared to the MacBook Air M5. Furthermore, in battery life tests for daily productivity tasks (such as switching between Word/Excel), the Dell XPS 13, powered by Intel Core 5 320, outperformed the MacBook Neo. Although the Windows system exhibits noticeable weaknesses in Word opening speed, the XPS 13 is still considered the more worthwhile Windows choice due to its superior screen, expandable storage, and battery life. The article points out that Microsoft should improve the fundamental performance of its applications on the Windows system, rather than relying solely on hardware specifications.",
    tags_en: ["Microsoft Word", "Windows 11", "MacBook Air", "Dell XPS 13", "Snapdragon X2 Plus", "Performance Test", "Battery Life"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/02/ms-word-opens-twice-as-slow-on-windows-11-pcs-as-on-macbooks-and-microsoft-has-no-excuse", lang: "EN" }
    ]
  },
  {
    id: "20260802-022",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI 宣布 Astra 模型，宣稱其能解決十年未進展的複雜數學與理論計算問題",
    summary: "OpenAI 公布了名為 Astra 的新一代大型 AI 模型，專為處理複雜、長期運算的任務而設計。該模型在內部研究中展現了突破性的能力，成功推進了包括高維幾何、編碼理論、群論、晶格密碼學等廣泛數學領域的難題。OpenAI 提到，這些問題的中央結果已至少有十年未見進展。Astra 的運作模式允許 AI 代理（AI agents）協作解決大型問題的各個部分。研究人員利用該模型準備論證，並將所有論證形式化為 Lean 證書，以便透過數學驗證系統進行檢查。雖然 OpenAI 未明確宣布最終版本名稱，但市場預期它可能以 GPT-5.7 或 GPT-6 的形式推出。此模型代表了 AI 領域的重大突破，預計將具備類似 Anthropic 的分級發布策略，部分功能對消費者開放，而更強大的變體則需要特殊審批。",
    tags: ["OpenAI", "Astra", "大型語言模型", "AI 代理", "數學證明", "理論計算"],
    title_en: "OpenAI Announces Astra Model, Claiming Ability to Solve Complex Mathematical and Theoretical Problems Stalled for a Decade",
    summary_en: "OpenAI has unveiled a new generation large AI model called Astra, designed specifically for handling complex, long-term computational tasks. In internal research, the model demonstrated breakthrough capabilities, successfully advancing difficult problems across various mathematical fields, including high-dimensional geometry, coding theory, group theory, and lattice cryptography. OpenAI noted that central results for these problems have seen no progress for at least a decade. Astra's operational mode allows AI agents to collaborate on solving different parts of a large problem. Researchers used the model to prepare proofs, formalizing all arguments into Lean certificates for checking through a mathematical verification system. Although OpenAI did not explicitly announce the final version name, the market anticipates it may be released as GPT-5.7 or GPT-6. This model represents a major breakthrough in the AI field and is expected to feature a tiered release strategy similar to Anthropic, with some functionalities open to consumers and more powerful variants requiring special approval.",
    tags_en: ["OpenAI", "Astra", "Large Language Model", "AI Agents", "Mathematical Proof", "Theoretical Computation"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/artificial-intelligence/openai-teases-astra-its-next-major-ai-model-after-it-solves-10-long-standing-math-problems", lang: "EN" }
    ]
  },
  {
    id: "20260802-023",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Black Duck發布整合AppSec平台，支援SBOM管理與DevSecOps，應對CRA等全球供應鏈安全規範",
    summary: "隨著AI軟體開發的快速擴散，以及歐盟《網路韌性法案》（CRA）和美國EO 14028等全球供應鏈安全規範的趨嚴，軟體組件的可視性與漏洞管理變得至關重要。Black Duck作為AI應用程式安全領域的領導者，推出了整合性的AppSec平台，旨在保護整個軟體開發生命週期（SDLC）。該平台在Polaris™上提供多種功能，包括：分析開源漏洞與授權風險的SCA（軟體組件分析）、偵測原始碼漏洞的SAST（靜態應用程式安全測試）、分析運行應用程式的DAST（動態應用程式安全測試），以及SBOM（軟體物料清單）的生成與管理。此外，其AI代理（Agent）解決方案Black Duck Signal™能分析大量漏洞數據，並根據實際風險提供優先級建議，協助開發者和安全團隊更高效地管理漏洞。Black Duck未來將持續升級，聚焦於SBOM基礎的供應鏈安全、AI應用程式安全和DevSecOps自動化，幫助企業應對全球法規，並在確保準確風險分析與開發生產力之間取得平衡。",
    tags: ["Black Duck", "SBOM", "DevSecOps", "AppSec", "CRA", "SCA", "SAST", "DAST"],
    title_en: "Black Duck Releases Integrated AppSec Platform Supporting SBOM Management and DevSecOps to Address Global Supply Chain Security Regulations like CRA",
    summary_en: "With the rapid proliferation of AI software development and the increasing stringency of global supply chain security regulations, such as the EU's Cyber Resilience Act (CRA) and US EO 14028, software component visibility and vulnerability management have become critically important. Black Duck, a leader in AI application security, has launched an integrated AppSec platform designed to protect the entire Software Development Life Cycle (SDLC). The platform, available on Polaris™, offers multiple functionalities, including: SCA (Software Composition Analysis) for analyzing open-source vulnerabilities and license risks; SAST (Static Application Security Testing) for detecting source code vulnerabilities; DAST (Dynamic Application Security Testing) for analyzing running applications; and the generation and management of SBOM (Software Bill of Materials). Furthermore, its AI Agent solution, Black Duck Signal™, can analyze vast amounts of vulnerability data and provide prioritized recommendations based on actual risk, helping developers and security teams manage vulnerabilities more efficiently. Black Duck plans to continue upgrading, focusing on SBOM-based supply chain security, AI application security, and DevSecOps automation, helping enterprises comply with global regulations while balancing accurate risk analysis with development productivity.",
    tags_en: ["Black Duck", "SBOM", "DevSecOps", "AppSec", "CRA", "SCA", "SAST", "DAST"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144949&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-024",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "GS네오텍發表「Security Lens」亮相 ISEC 2026：整合式雲端安全平台，強化國內法規與AI自動化合規管理",
    summary: "隨著雲端轉型與AI導入加速，企業IT環境的複雜性與安全管理難度同步增加。傳統的全球CNAPP解決方案常因缺乏本土化支援，導致管理人員需手動對應國內法規，並在多個管理主控台間切換，效率低下。GS네오텍在ISEC 2026展出其「시큐리티 렌즈」（Security Lens）整合式雲端安全平台。該平台從設計初期就納入了「國內法規」、「韓文」及「混合環境」等本土化需求，並內建了ISMS-P認證及資訊保護公示等國內主要法規應對功能。其核心特色是能將從程式碼、執行時期、SBOM漏洞到CloudTrail異常行為等全域的診斷結果與資產現況，整合至單一介面。此外，平台搭載了AI安全代理「네오봇」（neoBot），能自動化ISMS-P的證據資料確認與填寫，並提供基於風險的應對優先順序推薦，大幅縮短了合規認證準備時間，實現了從威脅發現到改善驗證的一站式管理。",
    tags: ["GS네오텍", "Security Lens", "CNAPP", "ISMS-P", "AI安全", "ISEC 2026"],
    title_en: "GS Neotech Unveils 'Security Lens' at ISEC 2026: Integrated Cloud Security Platform Enhancing Domestic Regulatory and AI Automated Compliance Management",
    summary_en: "As cloud transformation and AI adoption accelerate, the complexity and difficulty of managing enterprise IT environments are increasing. Traditional global CNAPP solutions often lack localized support, requiring management personnel to manually map domestic regulations and switch between multiple management consoles, leading to low efficiency. At ISEC 2026, GS Neotech showcased its 'Security Lens,' an integrated cloud security platform. This platform was designed from the outset to incorporate localized requirements such as 'domestic regulations,' 'Korean language,' and 'hybrid environments,' and includes built-in response functions for major domestic regulations, such as ISMS-P certification and information protection disclosures. Its core feature is the ability to consolidate comprehensive diagnostic results and asset status—ranging from code, runtime, SBOM vulnerabilities, to CloudTrail anomalies—into a single interface. Furthermore, the platform is equipped with the AI security agent 'neoBot,' which automates the verification and filling of ISMS-P evidence documentation and provides risk-based response priority recommendations. This significantly shortens the compliance certification preparation time, achieving one-stop management from threat detection to improvement verification.",
    tags_en: ["GS Neotech", "Security Lens", "CNAPP", "ISMS-P", "AI Security", "ISEC 2026"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144943&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-025",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "AI 緊急按鈕市場的演進：結合 CCTV 與 AI 語音識別的公共安全系統建構趨勢",
    summary: "隨著強大犯罪的增加，緊急按鈕已超越單純的物理按鈕，進化成為公共安全基礎設施的核心要素。特別是結合 AI 技術後，緊急按鈕正轉型為一個整合 CCTV、監控中心、警察、消防等應對機構的智慧型系統。主要的技術趨勢包括：AI 自動偵測暴力、跌倒、尖叫等危險情境的功能；以及在難以安裝 CCTV 的空間（例如：公共廁所）中，無需影像拍攝，僅分析語音訊號（尖叫、求救）的聲學 AI 技術。這類系統的特色是能夠在無需按鈕操作的情況下偵測到危險，並將現場影像與資訊快速傳輸至監控中心。然而，在現場應用時，解決 AI 的準確度與誤報（False Positive）問題至關重要；此外，設備老化、通訊中斷，以及為系統間連動而進行的標準化工作，仍是重要的課題。因此，緊急按鈕市場的焦點已從單純擴大安裝數量，轉向確保與整合監控系統的連動性、建立定期的維護體系，以及提升標準化的營運體系。",
    tags: ["緊急按鈕", "AI", "公共安全", "CCTV", "監控中心", "聲學AI", "整合安全平台"],
    title_en: "The Evolution of the Emergency Button Market: Trends in Public Safety Systems Integrating CCTV and AI Voice Recognition",
    summary_en: "With the rise of sophisticated crimes, the emergency button has evolved beyond a simple physical switch, becoming a core element of public safety infrastructure. Especially with the integration of AI technology, emergency buttons are transforming into smart systems that integrate CCTV, monitoring centers, police, and fire departments. Key technological trends include: AI functions that automatically detect dangerous situations such as violence, falls, or screams; and acoustic AI technology that analyzes voice signals (screams, distress calls) without requiring video capture, particularly in spaces where CCTV installation is difficult (e.g., public restrooms). These systems are characterized by their ability to detect danger without manual button activation and rapidly transmit both live video and information to the monitoring center. However, when applied in real-world scenarios, addressing AI accuracy and the issue of false positives is critical; furthermore, equipment aging, communication disruptions, and standardization efforts for system interoperability remain important challenges. Consequently, the focus of the emergency button market has shifted from merely expanding installation numbers to ensuring connectivity and integration with monitoring systems, establishing regular maintenance protocols, and improving standardized operational frameworks.",
    tags_en: ["Emergency Button", "AI", "Public Safety", "CCTV", "Monitoring Center", "Acoustic AI", "Integrated Security Platform"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144849&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-026",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Toss證券革新AI治理：透過實務人員主導的「Be Smart」文化，強化資安風險管理",
    summary: "隨著AI導入的普及，Toss證券曾面臨資安團隊決策工作過載的問題，因此提出了新的治理模型。其核心是擺脫傳統的「依賴資安團隊審批」模式，轉而引導最了解數據使用情境的業務實務人員直接掌握風險，建立「Be Smart」文化。Toss證券導入了類比高速公路車道的多層次運營模型。公開數據摘要需經過「FAST」軌道，一般文件分析需經過「CHECK」軌道，而涉及客戶帳戶/交易資訊時則需經過「STOP」軌道，從而提高了控制層級。此外，他們還設定了AI執行權限的邊界線：回答生成等查詢功能可以自動化，但涉及退款執行或帳戶權限賦予等直接影響客戶的領域，則必須經過人工審批控制。藉此，資安團隊的角色從單純的控制者轉變為提出標準並傳播標準的「倡導者（Evangelist）」。",
    tags: ["Toss證券", "AI治理", "Be Smart", "資安治理", "實務人員主導", "風險管理"],
    title_en: "Toss Securities Innovates AI Governance: Strengthening Cyber Risk Management through a Practitioner-Led 'Be Smart' Culture",
    summary_en: "With the widespread adoption of AI, Toss Securities previously faced issues of decision fatigue within its security team, leading to the proposal of a new governance model. The core of this model is to move away from the traditional pattern of 'reliance on security team approval,' instead empowering business practitioners—who possess the deepest understanding of data usage contexts—to directly manage risks and establish a 'Be Smart' culture. Toss Securities introduced a multi-layered operational model, analogous to highway lanes. Public data summaries must pass through the 'FAST' lane, general document analysis must pass through the 'CHECK' lane, and any process involving client account/transaction information must pass through the 'STOP' lane, thereby increasing the level of control. Furthermore, they established clear boundaries for AI execution permissions: query functions like answer generation can be automated, but areas directly impacting clients, such as refund execution or account permission granting, must undergo manual approval control. Through this, the role of the security team shifts from being mere controllers to becoming 'Evangelists' who propose and disseminate standards.",
    tags_en: ["Toss Securities", "AI Governance", "Be Smart", "Cybersecurity Governance", "Practitioner-Led", "Risk Management"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144708&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-027",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "韓國金融犯罪預防協會主辦：探討AI時代全球金融詐騙威脅與公私合作應對模式",
    summary: "本次活動為「全球金融犯罪威脅與K-安全合作模型」論壇，由韓國金融犯罪預防協會主辦，旨在應對日益複雜和國際化的金融犯罪。活動匯集了金融、安全私營部門代表、警察等公部門官員及學術專家，共同討論在人工智慧（AI）時代背景下，如何建立適應的K-安全合作模型和安全治理框架。主要內容包括：超國家詐騙威脅的應對模式轉變、電信金融詐騙的政府整合應對成果與課題，以及以虛擬資產為媒介的全球金融犯罪威脅。特別關注虛擬資產如何被用於洗錢和跨國犯罪，並將提出技術追蹤與阻斷的合作模型。本次論壇強調透過公私部門的資訊分析合作，來遏制智能化、全球化的金融詐騙行為。",
    tags: ["金融犯罪", "全球詐騙", "AI時代", "虛擬資產", "公私合作", "K-安全模型"],
    title_en: "Hosted by Korea Financial Crime Prevention Association: Exploring Global Financial Fraud Threats and Public-Private Cooperation Models in the AI Era",
    summary_en: "This event, titled the 'Global Financial Crime Threats and K-Security Cooperation Model' forum, was hosted by the Korea Financial Crime Prevention Association. Its aim is to address increasingly complex and internationalized financial crimes. The event gathered representatives from the financial and security private sectors, as well as public sector officials (including police) and academic experts, to jointly discuss how to establish an adaptable K-Security cooperation model and security governance framework in the context of the Artificial Intelligence (AI) era. Key topics included: shifts in responding to transnational fraud threats, government integrated response outcomes and challenges regarding telecommunications financial fraud, and global financial crime threats using virtual assets. Particular attention was paid to how virtual assets are used for money laundering and transnational crime, and a cooperative model for technical tracking and disruption will be proposed. The forum emphasized containing intelligent and globalized financial fraud activities through information analysis cooperation between public and private sectors.",
    tags_en: ["Financial Crime", "Global Fraud", "AI Era", "Virtual Assets", "Public-Private Cooperation", "K-Security Model"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144974&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-028",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "首爾市主辦「資安保全大會」：分享公部門資訊保全與個人資料保護能力強化方案",
    summary: "由首爾市數位都市局資訊保全課主辦的「資安保全大會暨個人資料保護工作坊」已成功舉辦，本次活動針對首爾市政府本廳、事業所、自治區、投資出資機構等公部門實務人員，重點聚焦於資訊保全與個人資料保護能力的強化。本次活動旨在建立一個目標為應對 AI 時代金融犯罪的公私協力資安治理（Security Governance）體系。上午的會議內容涵蓋了基於「零信任」（Zero Trust）的國家網路安全體系（N2SF）建構策略，以及公部門經營評鑑和地方政府實地評鑑的關鍵指標等。下午的工作坊則由專家提出，除了首爾市的個人資料保護政策方向外，還包括個人資料生命週期各階段的檢查清單，以及在公務行政業務中發生個人資料處理、委託與代行時的法律風險與注意事項判例。預期這將有助於公部門實務人員掌握最新的資安趨勢與法規要求，並建立實質的資安治理體系。",
    tags: ["首爾市", "資訊保全", "個人資料保護", "零信任", "公部門", "資安治理"],
    title_en: "Seoul Metropolitan Government Hosts 'Cybersecurity Conference': Sharing Plans for Strengthening Public Sector Information Security and Personal Data Protection",
    summary_en: "The 'Cybersecurity Conference and Personal Data Protection Workshop,' organized by the Seoul Digital Urban Bureau's Information Security Division, was successfully held. This event focused on strengthening information security and personal data protection capabilities for practical personnel across various public sectors, including the Seoul Metropolitan Government itself, its affiliated institutions, autonomous districts, and investment-backed organizations. The conference aims to establish a public-private collaborative security governance system designed to counter financial crimes in the AI era. The morning sessions covered strategies for building a national cyber security system based on 'Zero Trust' and key indicators for public sector operational assessments and local government field audits. The afternoon workshop featured expert presentations, including Seoul's personal data protection policy directions, checklists for various stages of the personal data lifecycle, and legal risk and cautionary case studies concerning personal data processing, consignment, and agency within public administrative operations. It is expected that this will help public sector personnel grasp the latest cybersecurity trends and regulatory requirements, thereby establishing a substantive security governance framework.",
    tags_en: ["Seoul Metropolitan Government", "Information Security", "Personal Data Protection", "Zero Trust", "Public Sector", "Security Governance"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144975&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-029",
    trackers: ["eu_cra", "os", "security"],
    category: "研討活動",
    title: "CISO協會舉辦研討會：探討從資安事件到企業韌性與治理的六大核心能力",
    summary: "韓國CISO協會與中央電波管理所共同舉辦第13屆CISO能力提升工作坊，旨在協助企業的最高資訊安全長（CISO）應對快速變化的網路威脅環境，確保企業的持續經營能力與競爭力。本次研討會以「六角形領導力」為主題，涵蓋六大核心領域：業務策略、AI治理、組織管理、對外協作、網路韌性（Resilience）及協調（Orchestration）。各業界CISO分享了具體經驗，例如LG Uplus CISO提出將資安風險轉化為管理決策語言的業務策略；三星生命CISO則分享了在AI時代平衡創新與風險的治理方法；GS Retail CISO強調了建立「網路韌性」和威脅資產平台的重要性，以最小化資安事件造成的業務中斷。這場活動強調CISO的角色已超越技術層面，必須具備更全面的管理、策略和治理能力，以推動企業的整體發展。",
    tags: ["CISO", "網路韌性", "AI治理", "企業治理", "業務策略", "韓國"],
    title_en: "CISO Association Hosts Seminar: Exploring Six Core Capabilities from Security Incidents to Enterprise Resilience and Governance",
    summary_en: "The Korea CISO Association and the National Radio Research Agency co-hosted the 13th CISO Capability Enhancement Workshop. The event aims to assist Chief Information Security Officers (CISOs) in responding to the rapidly changing cyber threat landscape, ensuring the enterprise's continuous operation capability and competitiveness. This seminar, themed 'Hexagonal Leadership,' covered six core domains: Business Strategy, AI Governance, Organizational Management, External Collaboration, Cyber Resilience, and Orchestration. CISOs from various industries shared specific experiences, such as the LG Uplus CISO presenting business strategies that translate security risks into management decision language; the Samsung Life CISO sharing governance methods for balancing innovation and risk in the AI era; and the GS Retail CISO emphasizing the importance of establishing 'Cyber Resilience' and threat asset platforms to minimize business disruption caused by security incidents. The event highlighted that the CISO role has moved beyond the technical layer, requiring comprehensive management, strategic, and governance capabilities to drive overall corporate development.",
    tags_en: ["CISO", "Cyber Resilience", "AI Governance", "Corporate Governance", "Business Strategy", "South Korea"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144976&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-030",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "OWASP 首爾分會分享：參與 Defcon 等全球資安會議及通過 CFP 的策略",
    summary: "本文內容收錄了 OWASP 首爾分會（OWASP 서울 챕터）為國內資安專業人士分享的，關於如何參與全球頂尖資安會議（如 Defcon）及貢獻社群的策略。發言者們提出的，不僅限於單純參與 CTF 或觀摩，而是如何作為會議生態系統的一份子進行多維度的活動。核心策略強調，必須透過主動貢獻（Give & Take）——例如參與 Village 營運、擔任志工、主導工作坊——來為社群做出貢獻，從而建立信任。此外，關於如何通過 CFP（發表提案）的建議指出，不能僅僅羅列漏洞，而是必須明確呈現研究成果的「影響力與傳播力」，並透過將單一漏洞在核心（Kernel）與使用者空間（User）進行交叉連結的邏輯鏈接（Chaining），將其提升為致命的 Exploit 資料，這點至關重要。其實質的影響在於，能幫助國內資安專業人士擴展全球人脈網絡，並強化研究能力。",
    tags: ["OWASP", "Defcon", "CFP", "CTF", "Exploit Chain", "資安會議"],
    title_en: "OWASP Seoul Chapter Shares Strategies for Participating in Global Security Conferences like Defcon and Passing CFP",
    summary_en: "This article compiles strategies shared by the OWASP Seoul Chapter for domestic cybersecurity professionals on how to participate in and contribute to global top-tier security conferences (such as Defcon). The speakers emphasized that participation should go beyond merely taking part in CTFs or observing; rather, it involves multi-dimensional engagement within the conference ecosystem. The core strategy stresses that professionals must actively contribute (Give & Take)—for example, by participating in Village operations, volunteering, or leading workshops—to build trust within the community. Furthermore, regarding how to pass a CFP (Call for Papers), the advice highlights that one cannot simply list vulnerabilities. Instead, one must clearly present the 'impact and propagation potential' of the research findings. A crucial technique mentioned is elevating a single vulnerability into a fatal Exploit by establishing a logical chain connection that links the core (Kernel) and user space. The practical impact of these strategies is that they help domestic cybersecurity professionals expand their global network and strengthen their research capabilities.",
    tags_en: ["OWASP", "Defcon", "CFP", "CTF", "Exploit Chain", "Cybersecurity Conference"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144977&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260802-031",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "個人資訊保護委員會主導：2026年CPO工作坊舉辦，深入探討AI應用與數據生命週期可視化",
    summary: "本次工作坊由CPO工作坊營運事務局主辦，並由個人情報保護委員會後援，旨在提升公私部門最高個人資訊負責人（CPO）及資安人員的實務能力。活動內容涵蓋政策方向、技術應用與實戰案例，特別聚焦於「數據全生命週期可視化」（Data Lineage）和「AI應用於個人資訊保護管理體系改善」。演講內容包括個人情報保護委員會對「2026年個人情報保護政策方向」的指引，以及如何利用AI技術提升保護治理。此外，亦有業界代表分享利用生成式AI和開源資源，為中小企業提供實質的個人資訊保護強化方案，強調在兼顧開發生產力與安全合規之間的平衡。",
    tags: ["個人情報保護委員会", "CPO", "AI", "數據生命週期", "個人資訊保護", "工作坊"],
    title_en: "Led by the Personal Information Protection Commission: 2026 CPO Workshop to Deeply Explore AI Applications and Data Lifecycle Visualization",
    summary_en: "This workshop is organized by the CPO Workshop Operations Office and supported by the Personal Information Protection Commission. Its aim is to enhance the practical capabilities of Chief Privacy Officers (CPOs) and cybersecurity personnel in both the public and private sectors. The content covers policy direction, technical applications, and practical case studies, with a special focus on 'Data Lineage' and 'Improving Privacy Management Systems using AI Applications.' The presentations include the Personal Information Protection Commission's guidance on the '2026 Personal Information Protection Policy Direction,' and how to utilize AI technology to enhance protective governance. Furthermore, industry representatives will share practical privacy enhancement solutions for SMEs using generative AI and open-source resources, emphasizing the balance between maintaining development productivity and ensuring security compliance.",
    tags_en: ["Personal Information Protection Commission", "CPO", "AI", "Data Lineage", "Privacy", "Workshop"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=144971&kind=&sub_kind=", lang: "EN" }
    ]
  }
];
