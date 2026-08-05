// data-20260726.js — 2026-07-26
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-26"] = [
  {
    id: "20260726-001",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心預修補程式 7.2-rc5 內容評估：無明顯重大安全風險",
    summary: "本文內容為對 Linux 核心預修補程式 7.2-rc5 的初步評估。作者指出該修補程式的體積過大，但經過審閱後，未發現任何特別奇怪或令人擔憂的重大安全漏洞或異常行為。這類核心預修補程式通常包含多個功能性更新和修復，對於開發者和資安人員而言，需要仔細審核其新增的程式碼和變更。雖然目前評估未發現明顯風險，但由於其規模龐大，建議使用者在整合前仍需進行全面的功能和安全測試，以確保系統穩定性與安全性。",
    tags: ["Linux 核心", "7.2-rc5", "預修補程式", "核心安全", "Linux Kernel"],
    title_en: "Evaluation of Linux Kernel Pre-patch 7.2-rc5: No Obvious Major Security Risks",
    summary_en: "This article provides a preliminary evaluation of the Linux Kernel pre-patch 7.2-rc5. The author notes that the patch size is quite large, but after review, no particularly strange or concerning major security vulnerabilities or abnormal behaviors were found. Such kernel pre-patches typically contain multiple functional updates and fixes, requiring developers and security professionals to carefully review the added code and changes. Although no obvious risks were found in the current evaluation, due to its large scale, users are advised to conduct comprehensive functional and security testing before integration to ensure system stability and security.",
    tags_en: ["Linux Kernel", "7.2-rc5", "Pre-patch", "Kernel Security", "Linux Kernel"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1085422", lang: "EN" }
    ]
  },
  {
    id: "20260726-002",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc5 版本發布：包含多項核心修復與網路驅動更新，持續提升穩定性",
    summary: "本次發布的 Linux 7.2-rc5 是朝向穩定版 Linux 7.2 邁進的測試版本。該版本整合了多樣化的錯誤修復，其中許多修復甚至源自於 AI/LLM 代理的發現。技術亮點包括全面性的音訊修復，以及修復了自 2009 年以來在主線 Linux 核心中存在的 IEEE-1394 Firewire IPv4 網路問題。根據 Linus Torvalds 的說明，本次修補集中在網路樹，特別是驅動程式層面，此外還包含 USB、音訊、tty、block、Firewire 等多個驅動程式的更新，以及文件系統（如 smb, btrfs）、Rust 和 Arch 相關的修復。開發者應持續關注此類預發行版本，以測試新功能和修復的穩定性。預計 Linux 7.2 穩定版將在三週後（8 月 16 日）正式推出。",
    tags: ["Linux 7.2", "Linux 核心", "rc5", "IEEE-1394", "Firewire", "驅動程式"],
    title_en: "Linux 7.2-rc5 Release: Includes Multiple Kernel Fixes and Network Driver Updates, Continuously Enhancing Stability",
    summary_en: "The Linux 7.2-rc5 released this time is a testing version moving towards the stable Linux 7.2. This version integrates diverse bug fixes, many of which originated from AI/LLM agents. Technical highlights include comprehensive audio fixes, and the resolution of an IEEE-1394 Firewire IPv4 network issue that has existed in the mainline Linux kernel since 2009. According to Linus Torvalds, this patch focuses on the networking tree, especially at the driver level. Additionally, it includes updates for multiple drivers such as USB, audio, tty, block, and Firewire, along with fixes for file systems (such as smb, btrfs), Rust, and Arch. Developers are advised to continue monitoring such pre-release versions to test the stability of new features and fixes. The stable Linux 7.2 is expected to be officially released in three weeks (August 16th).",
    tags_en: ["Linux 7.2", "Linux Kernel", "rc5", "IEEE-1394", "Firewire", "Driver"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc5-Released", lang: "EN" }
    ]
  },
  {
    id: "20260726-003",
    trackers: ["os"],
    category: "Linux",
    title: "KVM 核心重大重構：Linux 7.3 將拆分 kvm_mmu 結構，優化虛擬化記憶體管理",
    summary: "本篇報導指出，一系列代號為「KVM Chainsaw」的程式碼清理工作，預計將在即將到來的 Linux 7.3 版本中實施。此重構主要針對 KVM 核心中的 `kvm_mmu` 結構，該結構目前被描述為一個「神級資料結構」（god data structure），過度承載了多種功能。該工作旨在將 `kvm_mmu` 拆分為三個獨立部分：`kvm_pagewalk`（頁表遍歷器）、`kvm_mmu`（保留頁表建構功能）和 `kvm_page_format`（處理已存在的 PTE）。重構的實務影響包括簡化了虛擬機的記憶體管理邏輯，特別是統一了頁表遍歷的機制，並改善了 `guest_mmu` 與 `nested_mmu` 之間的混淆。此外，此更新還為支援新的記憶體屬性（如 XS!=XU）提供了基礎，提升了 KVM 的虛擬化能力。開發者應關注 Linux 7.3 的合併窗口，以了解這些核心優化帶來的架構變動。",
    tags: ["KVM", "Linux 7.3", "kvm_mmu", "虛擬化", "核心重構", "Linux 核心"],
    title_en: "Major KVM Core Refactoring: Linux 7.3 Will Split kvm_mmu Structure to Optimize Virtualization Memory Management",
    summary_en: "This report highlights a series of code cleanup efforts, codenamed \"KVM Chainsaw,\" scheduled for implementation in the upcoming Linux 7.3 version. This refactoring primarily targets the `kvm_mmu` structure within the KVM core, which is currently described as a \"god data structure\" due to its excessive burden of multiple functionalities. The work aims to split `kvm_mmu` into three independent components: `kvm_pagewalk` (page table walker), `kvm_mmu` (retaining page table construction functionality), and `kvm_page_format` (handling existing PTEs). Practical implications of the refactoring include simplifying the virtual machine memory management logic, particularly by unifying the page table walking mechanism, and improving the distinction between `guest_mmu` and `nested_mmu`. Furthermore, this update provides a foundation for supporting new memory attributes (such as XS!=XU), enhancing KVM's virtualization capabilities. Developers should monitor the Linux 7.3 merge window for details on these core architectural changes.",
    tags_en: ["KVM", "Linux 7.3", "kvm_mmu", "Virtualization", "Core Refactoring", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KVM-Chainsaw-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260726-004",
    trackers: ["os"],
    category: "Linux",
    title: "FreeBSD 音訊支援面臨「悲劇狀態」：用戶抱怨系統不穩定與隨機音效問題",
    summary: "本篇報導聚焦於 FreeBSD 桌面用戶群體對於系統音訊（Audio/Sound）支援的困擾。用戶在 FreeBSD 14 系列及更高版本（至少包括 FreeBSD 15.1）中，遇到了音訊播放的重大回歸（regression）問題，表現為來自未知來源的隨機音效（如「boozing sounds」）和各種音訊播放故障。這些問題甚至出現在使用十年前老舊硬體（如 ThinkPad T480）的設備上。用戶社群討論指出，問題可能源於系統底層的音訊驅動程式改動，或與 PulseAudio 的使用有關。雖然 FreeBSD 基金會正在資助改善音訊驅動支援的開發工作，但由於修補程式是逐步上線，而非一次性完成大型重構，導致用戶認為近期音訊相關問題有所增加。開發者目前正積極改善音訊支援，以提升 FreeBSD 在筆記型電腦上的桌面體驗。",
    tags: ["FreeBSD", "音訊驅動", "FreeBSD 15.1", "桌面體驗", "系統穩定性"],
    title_en: "FreeBSD Audio Support in 'Tragic State': Users Complain of System Instability and Random Sound Issues",
    summary_en: "This report focuses on the difficulties faced by the FreeBSD desktop user community regarding system audio (Sound) support. Users have encountered significant audio playback regression issues in FreeBSD 14 series and higher versions (at least including FreeBSD 15.1), manifesting as random sounds from unknown sources (such as 'boozing sounds') and various audio playback failures. These issues even appear on devices using decade-old hardware (such as the ThinkPad T480). User community discussions suggest that the problem may stem from changes in the system's underlying audio drivers or relate to the use of PulseAudio. Although the FreeBSD Foundation is funding development work to improve audio driver support, the gradual rollout of patches, rather than a single large-scale refactoring, has led users to perceive an increase in recent audio-related issues. Developers are currently actively improving audio support to enhance the desktop experience on FreeBSD.",
    tags_en: ["FreeBSD", "Audio Driver", "FreeBSD 15.1", "Desktop Experience", "System Stability"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Tragic-FreeBSD-Audio-Support", lang: "EN" }
    ]
  },
  {
    id: "20260726-005",
    trackers: ["os"],
    category: "Linux",
    title: "開源 CPU 效能優化工具 Auto-CPUFreq 3.1 發布，增添 GUI 監控與藍牙控制功能",
    summary: "Auto-CPUFreq 是一個開源專案，旨在為 Linux 系統提供 CPU 速度與功耗優化，以提升電池續航力，同時不犧牲使用者體驗。最新發布的 v3.1 版本，主要在圖形介面（GUI）上進行了重大升級。新增的 GUI 監控模式，提供與其命令行介面（CLI）相似的基礎監控佈局。此外，使用者現在可以在 GUI 中控制藍牙功能，方便在節能時關閉藍牙無線電。本版本也擴展了對更多 Lenovo 系統型號的節能模式檢查，並新增了「強制平台設定檔」配置選項，同時增加了對缺乏 `/sys/class/power_supply/` sysfs 介面的系統的支援，並修復了多個錯誤。",
    tags: ["Auto-CPUFreq", "Linux", "CPU 效能優化", "開源專案", "GUI", "功耗管理"],
    title_en: "Open-Source CPU Performance Optimization Tool Auto-CPUFreq 3.1 Released with GUI Monitoring and Bluetooth Control Features",
    summary_en: "Auto-CPUFreq is an open-source project designed to optimize CPU speed and power consumption for Linux systems, thereby extending battery life without sacrificing user experience. The newly released v3.1 version features major upgrades to the Graphical User Interface (GUI). The added GUI monitoring mode provides a basic monitoring layout similar to its Command Line Interface (CLI). Furthermore, users can now control Bluetooth functionality within the GUI, making it convenient to disable the Bluetooth radio during power-saving operations. This version also expands power-saving mode checks for more Lenovo system models and introduces a 'Forced Platform Profile' configuration option, while also adding support for systems lacking the `/sys/class/power_supply/` sysfs interface, along with fixing multiple bugs.",
    tags_en: ["Auto-CPUFreq", "Linux", "CPU Performance Optimization", "Open-Source Project", "GUI", "Power Management"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Auto-CPUFreq-3.1", lang: "EN" }
    ]
  },
  {
    id: "20260726-006",
    trackers: ["os"],
    category: "Linux",
    title: "Realtek RTL8723B/RTL8723BS 晶片支援：RTW88 Linux 驅動程式進行整合更新",
    summary: "本文討論 Realtek 802.11n WiFi 晶片組 RTL8723B 與其 SDIO 變體 RTL8723BS 的驅動程式支援進度。目前，開發者 Luka Gejak 正在將這兩款晶片的支援功能，整合到更成熟的 RTW88 Linux 驅動程式中。此更新增加了約 5.6k 行新程式碼，使 RTW88 驅動程式能夠支援 RTL8723B 和 RTL8723BS 晶片。然而，目前測試範圍僅限於 SDIO 配置，PCIe 和 USB 變體尚未測試或啟用。此外，該驅動程式目前僅在 STA 模式下進行測試，AP 和 IBSS 模式尚未驗證，且仍存在 WiFi 與藍牙共存的已知硬體/韌體問題。對於仍使用這兩款 802.11n 晶片的用戶，此補丁系列是將硬體支援整合到 RTW88 驅動程式的最新進展，未來若能成熟並進入主線，有望取代長期處於預備狀態的 RTL8723BS 驅動程式。",
    tags: ["Realtek", "RTL8723B", "RTL8723BS", "RTW88", "Linux 驅動程式", "802.11n", "WiFi"],
    title_en: "Realtek RTL8723B/RTL8723BS Chip Support: Integration Update for RTW88 Linux Driver",
    summary_en: "This article discusses the driver support progress for the Realtek 802.11n WiFi chipset, RTL8723B, and its SDIO variant, RTL8723BS. Currently, developer Luka Gejak is integrating support for these two chipsets into the more mature RTW88 Linux driver. This update adds approximately 5.6k lines of new code, enabling the RTW88 driver to support the RTL8723B and RTL8723BS chips. However, current testing is limited to the SDIO configuration; PCIe and USB variants have not yet been tested or enabled. Furthermore, the driver is currently only tested in STA mode; AP and IBSS modes have not been validated, and known hardware/firmware issues regarding WiFi and Bluetooth coexistence still exist. For users still utilizing these two 802.11n chipsets, this patch series represents the latest progress in integrating hardware support into the RTW88 driver. If it matures and enters the main branch in the future, it is expected to replace the RTL8723BS driver, which has been in a long-term preparatory state.",
    tags_en: ["Realtek", "RTL8723B", "RTL8723BS", "RTW88", "Linux Driver", "802.11n", "WiFi"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Realtek-RTL8723B-RTW88-Patches", lang: "EN" }
    ]
  },
  {
    id: "20260726-007",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc5 修復 IPv4 透過 Firewire 的長期資料包重組錯誤",
    summary: "本篇報導指出，Linux 核心在處理透過 IEEE-1394 Firewire 傳輸的 IPv4 資料包時，存在一個長期未修復的 Bug。該功能依據 RFC 2734 標準，並自 2009 年以來已整合至核心，透過 \"fw-ipv4\" 驅動提供支援。問題點在於，當一個完整的資料包跨越了多個緩衝區範圍（multiple buffer ranges）儲存時，驅動程式無法正確地重新組裝整個資料包。此漏洞由開源開發者 Ruoyu Wang 發現並修補，修補內容主要修正了鄰居查找邏輯和邊界檢查，確保能正確判斷資料包是否完整。此修補已合併至 Linux 7.2-rc5，預計在 Linux 7.2-rc5 發布前夕提供修復。雖然開發者指出目前似乎沒有人實際使用此功能，但對於未來仍可能使用 IPv4 Firewire 的系統，此修復至關重要。",
    tags: ["Linux", "IPv4", "Firewire", "IEEE-1394", "Linux 核心", "Linux 7.2-rc5"],
    title_en: "Linux 7.2-rc5 Fixes Long-Standing IPv4 Packet Reassembly Error over Firewire",
    summary_en: "This report points out a long-standing bug in the Linux kernel when handling IPv4 packets transmitted via IEEE-1394 Firewire. This feature, based on RFC 2734, has been integrated into the kernel since 2009 and is supported by the \"fw-ipv4\" driver. The issue is that when a complete packet is stored across multiple buffer ranges, the driver fails to correctly reassemble the entire packet. This vulnerability was discovered and patched by open-source developer Ruoyu Wang. The patch primarily corrects the neighbor lookup logic and boundary checks, ensuring that the packet's completeness can be accurately determined. This fix has been merged into Linux 7.2-rc5 and is expected to provide the patch before the release of Linux 7.2-rc5. Although the developer noted that this feature appears to be unused currently, this fix is crucial for systems that may use IPv4 Firewire in the future.",
    tags_en: ["Linux", "IPv4", "Firewire", "IEEE-1394", "Linux Kernel", "Linux 7.2-rc5"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Fix-IPv4-Firewire", lang: "EN" }
    ]
  },
  {
    id: "20260726-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：提升 nexthop 權重欄位位寬至 u16，支援大型 CLOS 網路部署",
    summary: "本修補旨在解決 Linux 核心網路功能中，傳統 nexthop 權重（weight）欄位僅為 8 位元（u8）的限制。在大型 CLOS 網路架構中，當發生鏈路故障時，需要調整 ECMP 權重來進行負載均衡。當涉及的節點數量和扇出（fan-out）過高時，所需的權重比率可能超過 8 位元的範圍（例如，需要 1000:999）。為了解決此限制，核心開發者將 nexthop 權重欄位從 u8 提升至 u16。技術上，這涉及修改 `struct nexthop_grp` 結構，將原本的 `resvd1` 欄位重新定義為 `weight_high`，從而將權重資訊拆分到兩個欄位。此變更確保了向後兼容性：舊版使用者空間仍可配置 8 位元權重，而新版使用者空間則可利用新增的 `weight_high` 欄位來設定高位元權重，從而支援更複雜、更大規模的網路部署。修補過程經過兩階段轉換，確保了類型正確性。",
    tags: ["Linux 核心", "nexthop", "ECMP", "u16", "CLOS 網路", "網路協議"],
    title_en: "Linux Kernel Patch: Increasing nexthop Weight Field Bitwidth to u16 to Support Large-Scale CLOS Network Deployments",
    summary_en: "This patch addresses a limitation in the traditional 8-bit (u8) nexthop weight field within Linux kernel networking functionality. In large-scale CLOS network architectures, adjusting ECMP weights is necessary for load balancing during link failures. When the number of involved nodes and fan-out are high, the required weight ratio may exceed the 8-bit range (e.g., requiring 1000:999). To resolve this limitation, core developers have upgraded the nexthop weight field from u8 to u16. Technically, this involves modifying the `struct nexthop_grp` structure, redefining the original `resvd1` field as `weight_high`, thereby splitting the weight information across two fields. This change ensures backward compatibility: older user space can still configure 8-bit weights, while newer user space can utilize the newly added `weight_high` field to set higher-bit weights, thus supporting more complex and larger-scale network deployments. The patching process underwent a two-stage conversion to ensure type correctness.",
    tags_en: ["Linux Kernel", "nexthop", "ECMP", "u16", "CLOS Network", "Networking Protocol"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2024-14040", lang: "EN" }
    ]
  },
  {
    id: "20260726-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 UAF：處理 tcf_qevent_handle 時的 TC_ACT_CONSUMED 異常",
    summary: "本漏洞存在於 Linux 核心的網路排程（net/sched）元件中，具體影響 tcf_qevent_handle 函數。當 tcf_classify() 返回 TC_ACT_CONSUMED 狀態，且相關的 skb（socket buffer）正被碎片化引擎（如 act_ct）持有時，原始程式碼未能正確處理此狀態。這導致 red_enqueue() 等後續操作在 skb 已非呼叫者所有權的情況下繼續執行，進而造成使用後釋放（Use-After-Free, UAF）的漏洞。攻擊者若能利用此漏洞，可能導致系統崩潰或執行惡意代碼。修補建議是修改 tcf_qevent_handle()，使其在遇到 TC_ACT_CONSUMED 時，如同入口和出口快速路徑一樣，將其視為被竊取（stolen）的狀態，並返回 NULL，且不得釋放或修改該 skb。此修補旨在確保在 skb 所有權不明確時，網路處理流程能安全地跳過，避免記憶體操作錯誤。",
    tags: ["Linux 核心", "net/sched", "tcf_qevent_handle", "UAF", "CVE-2026-64530", "網路排程"],
    title_en: "Linux Kernel Fixes UAF: Handling TC_ACT_CONSUMED during tcf_qevent_handle",
    summary_en: "This vulnerability exists in the network scheduling (net/sched) component of the Linux kernel, specifically affecting the tcf_qevent_handle function. When tcf_classify() returns the TC_ACT_CONSUMED status, and the related skb (socket buffer) is held by the fragmentation engine (such as act_ct), the original code failed to correctly handle this state. This causes subsequent operations, such as red_enqueue(), to continue executing even when the skb is no longer in the caller's ownership, leading to a Use-After-Free (UAF) vulnerability. If an attacker can exploit this vulnerability, it may lead to system crashes or arbitrary code execution. The suggested fix is to modify tcf_qevent_handle() to treat the TC_ACT_CONSUMED state as a stolen state, similar to the ingress and egress fast paths, by returning NULL and ensuring the skb is neither freed nor modified. This patch aims to ensure that the network processing flow can safely skip when skb ownership is ambiguous, preventing memory operation errors.",
    tags_en: ["Linux Kernel", "net/sched", "tcf_qevent_handle", "UAF", "CVE-2026-64530", "Network Scheduling"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-64530", lang: "EN" }
    ]
  },
  {
    id: "20260726-010",
    trackers: ["os"],
    category: "Windows",
    title: "微軟承認 WinUI 性能瓶頸：強調優化記憶體使用與系統合成器整合，為 Windows 11 核心元件重寫做準備",
    summary: "本文報導指出，Windows 11 的內建應用程式和 WinUI 框架在效能和記憶體管理上存在明顯問題，曾讓使用者感受到卡頓和資源消耗過高。微軟已承認此瓶頸，並正在進行重大優化。工程師 Chris Anderson 表示，微軟正著重於提升 WinUI 的記憶體使用效率，並計畫將 WinUI 遷移至 Windows 系統合成器（system compositor），預計能帶來更佳的效能提升。此外，為吸引企業開發者，微軟還將加入 DataGrid 和 Charting 等核心企業級控制項。這些優化是為了讓 WinUI 框架穩固，以便將 Start Menu 和通知中心等核心 Windows 11 元件成功重寫並整合到原生框架中。雖然目前無法提供具體的記憶體節省數字，但這些修補旨在讓 WinUI 在低階電腦上運行更流暢，並為未來更多第一方功能和第三方開發者採用 WinUI 奠定基礎。",
    tags: ["Microsoft", "WinUI", "Windows 11", "記憶體管理", "系統合成器", "性能優化"],
    title_en: "Microsoft Acknowledges WinUI Performance Bottleneck: Focuses on Memory Optimization and System Compositor Integration to Prepare for Windows 11 Core Component Rewrite",
    summary_en: "This report indicates that Windows 11's built-in applications and the WinUI framework have noticeable issues regarding performance and memory management, which have previously caused users to experience stuttering and excessive resource consumption. Microsoft has acknowledged this bottleneck and is undertaking major optimizations. Engineer Chris Anderson stated that Microsoft is focusing on improving WinUI's memory usage efficiency and plans to migrate WinUI to the Windows system compositor, which is expected to bring better performance improvements. Furthermore, to attract enterprise developers, Microsoft will be adding core enterprise-grade controls such as DataGrid and Charting. These optimizations aim to stabilize the WinUI framework, enabling the successful rewriting and integration of core Windows 11 components like the Start Menu and Notification Center into the native framework. Although specific memory saving figures are not yet available, these patches are designed to allow WinUI to run more smoothly on lower-end computers and lay the foundation for future first-party features and third-party developer adoption of WinUI.",
    tags_en: ["Microsoft", "WinUI", "Windows 11", "Memory Management", "System Compositor", "Performance Optimization"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/27/microsoft-admits-windows-11-native-apps-hog-ram-promises-a-winui-performance-boost-before-start-menu-rewrite", lang: "EN" }
    ]
  },
  {
    id: "20260726-011",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 KMS 硬體安全機制：僅影響企業 KMS 伺服器，非針對一般盜版用戶",
    summary: "微軟於 7 月 22 日發布文件，宣布實施「KMS 硬體安全」（KMS Hardware-Secured）要求，將強制要求 Windows 體積啟用伺服器（KMS host）必須綁定 TPM 晶片。此機制旨在防止攻擊者利用偽造或克隆的 KMS 伺服器，在企業內部非法啟用未授權的 Windows 機器。新規定要求 KMS 主機必須透過 TPM 證明其硬體身份和平台未被篡改。此變更預計在微軟發布下一代 Windows Server LTSC 版本後強制執行，Windows Server 2025 將於 2026 年 8 月開始顯示準備狀態。文章強調，此機制僅影響運行自有 KMS 伺服器的企業組織，不會追蹤或阻止一般個人用戶的盜版 Windows 11 啟用。因此，用戶無需擔心個人設備的啟用狀態，但企業 IT 管理員需確認實體或虛擬 KMS 主機的 TPM 支援與認證狀態。",
    tags: ["Microsoft", "Windows Server 2025", "KMS", "TPM", "硬體安全", "企業 IT"],
    title_en: "Microsoft Announces KMS Hardware Security Mechanism: Affecting Enterprise KMS Servers Only, Not General Piracy Users",
    summary_en: "On July 22, Microsoft released documentation announcing the implementation of 'KMS Hardware-Secured' requirements. This mandates that servers used for Windows volume activation (KMS hosts) must be bound to a TPM chip. This mechanism aims to prevent attackers from using fabricated or cloned KMS servers to illegally activate unauthorized Windows machines within corporate environments. The new regulation requires KMS hosts to use TPM to prove their hardware identity and platform integrity. This change is expected to be enforced after Microsoft releases the next generation of Windows Server LTSC, with Windows Server 2025 showing readiness starting in August 2026. The article emphasizes that this mechanism only affects enterprise organizations running their own KMS servers and will not track or block general individual users activating pirated Windows 11. Therefore, users do not need to worry about the activation status of personal devices, but enterprise IT administrators must confirm the TPM support and certification status of physical or virtual KMS hosts.",
    tags_en: ["Microsoft", "Windows Server 2025", "KMS", "TPM", "Hardware Security", "Enterprise IT"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/27/you-heard-wrong-microsoft-isnt-ending-pirated-windows-11-with-tpm-and-the-new-rule-only-affects-enterprise-kms-servers", lang: "EN" }
    ]
  },
  {
    id: "20260726-012",
    trackers: ["os"],
    category: "Windows",
    title: "微軟強制推動新版 Outlook：用戶反饋與 2027 年強制轉換時間表分析",
    summary: "本文討論微軟持續推動其新版 Outlook (New Outlook) 的計畫，儘管許多用戶認為其使用體驗「痛苦」且偏好經典版 Outlook (Outlook Classic)。根據微軟的路線圖，所有經典版用戶預計將在 2027 年 3 月開始強制轉換至新版。雖然新版 Outlook 在功能上持續改進，例如增加了對 .PST 檔案的支援和自動化分類規則，但許多經典版 Outlook 長年來具備的功能，如完整的離線支援和某些自動化功能，在初期仍有缺失。微軟強調，新版 Outlook 的發展方向是不可逆的，特別是為了更好地整合 Copilot 等新功能。雖然微軟承諾會支援經典版至少到 2029 年，但用戶仍需注意，在 2027 年 3 月後，即使選擇繼續使用經典版，也可能面臨自動重定向至新版 Outlook 的情況。企業用戶應提前規劃，利用這段時間適應新介面與功能。",
    tags: ["Microsoft", "Outlook", "New Outlook", "Outlook Classic", "Windows", "Copilot"],
    title_en: "Microsoft's Forced Push of New Outlook: User Feedback and Analysis of the 2027 Mandatory Migration Timeline",
    summary_en: "This article discusses Microsoft's ongoing push for its New Outlook, despite significant user feedback suggesting that its user experience is 'painful' and that many users prefer the classic Outlook. According to Microsoft's roadmap, all Classic users are expected to begin mandatory migration to the new version in March 2027. Although New Outlook continues to improve functionally—for instance, by adding support for .PST files and automated classification rules—many features that have been standard in Classic Outlook for years, such as full offline support and certain automation functions, are still missing in the initial rollout. Microsoft emphasizes that the development direction for New Outlook is irreversible, particularly to better integrate new features like Copilot. While Microsoft has committed to supporting Classic mode until at least 2029, users should be aware that after March 2027, even if they choose to continue using Classic mode, they may face automatic redirection to New Outlook. Enterprise users should plan ahead to adapt to the new interface and functionality during this period.",
    tags_en: ["Microsoft", "Outlook", "New Outlook", "Outlook Classic", "Windows", "Copilot"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/26/microsoft-still-wants-to-force-new-outlook-on-everyone-by-2027-even-as-users-call-it-painful-and-prefer-outlook-classic", lang: "EN" }
    ]
  },
  {
    id: "20260726-013",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 KMS 硬體安全機制：新規定僅影響企業 KMS 伺服器，不針對一般用戶盜版 Windows 11",
    summary: "微軟於 7 月 22 日發布文件，宣布實施「KMS 硬體安全機制」（KMS Hardware-Secured）。此機制要求將 Windows 體積啟用伺服器（KMS）綁定到信任根（TPM）晶片。此舉的目的是防止攻擊者利用偽造或克隆的 KMS 伺服器，在企業內部竊取未授權的 Windows 授權。新規定要求 KMS 主機必須透過 TPM 證明其硬體身份和平台未被篡改。此機制預計在微軟發布下一代 Windows Server LTSC 版本後強制執行，Windows Server 2025 將於 2026 年 8 月開始顯示準備狀態。文章澄清，此安全強化僅針對企業級的 KMS 伺服器，不會影響一般用戶的盜版 Windows 11 安裝，也與先前關閉的 KMS38 盜版方法無關。企業管理員可透過 PowerShell 檢查 TPM 支援度，目前現有 KMS 部署可正常運作，無需立即恐慌。",
    tags: ["Microsoft", "Windows Server", "KMS", "TPM", "Windows 11", "企業安全"],
    title_en: "Microsoft Announces KMS Hardware Security Mechanism: New Regulations Affect Enterprise KMS Servers, Not General User Pirated Windows 11",
    summary_en: "On July 22, Microsoft released documentation announcing the implementation of a \"KMS Hardware-Secured\" mechanism. This mechanism requires that Volume Licensed Activation Servers (KMS) be bound to a Trusted Platform Module (TPM) chip. The purpose of this measure is to prevent attackers from using fabricated or cloned KMS servers to steal unauthorized Windows licenses within corporate environments. The new regulation mandates that KMS hosts must use the TPM to prove their hardware identity and platform integrity. This mechanism is expected to be enforced after Microsoft releases the next generation of Windows Server LTSC, with Windows Server 2025 showing readiness starting in August 2026. The article clarifies that this security enhancement only targets enterprise-grade KMS servers and will not affect general user installations of pirated Windows 11, nor is it related to the previously closed KMS38 cracking method. Enterprise administrators can check TPM support via PowerShell; current KMS deployments can operate normally, eliminating the need for immediate concern.",
    tags_en: ["Microsoft", "Windows Server", "KMS", "TPM", "Windows 11", "Enterprise Security"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/27/you-heard-wrong-microsoft-isnt-ending-pirated-windows-11-with-tpm-and-the-new-rule-only-affects-enterprise-servers", lang: "EN" }
    ]
  },
  {
    id: "20260726-014",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Series 12 與 Ultra 4 預計九月發表，重點將聚焦於健康功能與晶片升級",
    summary: "根據彭博社記者 Mark Gurman 的報導，Apple 正在進行下一代 Apple Watch 系列的「後期測試」，預計將在九月發表 Apple Watch Series 12 和 Apple Watch Ultra 4。報導指出，今年的機型預計不會有「重大設計革新」，而是將著重於提升健康與健身追蹤功能，以及晶片性能的升級。具體而言，Series 12 和 Ultra 4 預計將搭載具備更好性能的新晶片。雖然 Apple 過去幾年已多次更新晶片，但這次的升級仍是重點關注點。此外，Apple 也在長期規劃導入血糖偵測功能，預計將在未來幾年內實現。目前尚未有關於 Apple Watch SE 型號的計畫。建議用戶關注 Apple 官方在九月的發表活動，以獲取最新的功能與性能資訊。",
    tags: ["Apple Watch", "Apple Watch Series 12", "Apple Watch Ultra 4", "Apple", "健康追蹤", "晶片升級"],
    title_en: "Apple Watch Series 12 and Ultra 4 Expected to Launch in September, Focusing on Health Features and Chip Upgrades",
    summary_en: "According to Bloomberg reporter Mark Gurman, Apple is conducting 'late-stage testing' for the next generation of Apple Watch. The Apple Watch Series 12 and Apple Watch Ultra 4 are expected to be announced in September. The report indicates that this year's models are not expected to feature 'major design overhauls,' but rather will focus on enhancing health and fitness tracking capabilities, as well as chip performance upgrades. Specifically, the Series 12 and Ultra 4 are anticipated to be equipped with new, higher-performance chips. Although Apple has updated its chips multiple times in recent years, this upgrade remains a key point of focus. Furthermore, Apple is also planning the long-term introduction of blood glucose detection, which is expected to be realized within the next few years. There are currently no plans for the Apple Watch SE model. Users are advised to follow Apple's official announcements in September for the latest feature and performance information.",
    tags_en: ["Apple Watch", "Apple Watch Series 12", "Apple Watch Ultra 4", "Apple", "Health Tracking", "Chip Upgrade"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/26/apple-watch-series-12-and-ultra-4-what-to-expect", lang: "EN" }
    ]
  },
  {
    id: "20260726-015",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果AI智慧眼鏡預計於WWDC 2027發表，強調隱私保護與開發者生態系",
    summary: "根據報導，蘋果（Apple）備受期待的AI智慧眼鏡預計將延遲至下一屆全球開發者大會（WWDC 2027）才向公眾揭曉。此時間點的調整，可能意味著蘋果將會建立一個完整的開發者生態系統，讓第三方應用程式能整合數據與功能，類似Vision Pro的推出模式。為應對市場對隱私的擔憂，蘋果正在多方探索解決方案，除了開發無相機的設備外，也考慮了僅用於環境感知、不允許錄影或拍照的相機系統，將數據輸入AI工具進行物體或地點識別。此外，蘋果還在原型設計一系列全新的硬體與軟體隱私功能。該設備預計具備拍照、聽音樂、通話和與Siri互動等功能，但不會包含顯示螢幕。",
    tags: ["Apple", "AI智慧眼鏡", "WWDC", "隱私保護", "開發者生態系", "Vision Pro"],
    title_en: "Apple AI Smart Glasses Expected to Debut at WWDC 2027, Emphasizing Privacy and Developer Ecosystem",
    summary_en: "According to reports, Apple's highly anticipated AI smart glasses are expected to be unveiled to the public at the next Worldwide Developers Conference (WWDC 2027). This timing adjustment may indicate that Apple plans to build a complete developer ecosystem, allowing third-party applications to integrate data and functionality, similar to the launch model of the Vision Pro. To address market concerns regarding privacy, Apple is exploring various solutions. In addition to developing devices without cameras, the company is also considering camera systems solely for environmental sensing, which would not allow recording or photography, using the data input to an AI tool for object or location identification. Furthermore, Apple is prototyping a series of entirely new hardware and software privacy features. The device is expected to feature functions such as taking photos, listening to music, making calls, and interacting with Siri, but will not include a display screen.",
    tags_en: ["Apple", "AI Smart Glasses", "WWDC", "Privacy Protection", "Developer Ecosystem", "Vision Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/26/apples-ai-glasses-to-be-unveiled-at-wwdc27-report", lang: "EN" }
    ]
  },
  {
    id: "20260726-016",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "GitHub與PyPI強化供應鏈防禦：導入時間延遲機制限制惡意套件傳播",
    summary: "為應對近年來頻發的供應鏈攻擊，GitHub和PyPI（Python Package Index）分別推出了時間延遲機制，以限制惡意套件的傳播和利用。GitHub在其Dependabot依賴更新服務中，新增了預設三天的「冷卻期」（cooldown），旨在延遲自動更新套件的過程，從而降低自動採納新發布惡意套件的風險。此舉旨在平衡安全性和開發效率，但建議用戶仍應搭配使用鎖定檔案（lockfiles）和限制作用域的Token等措施。同時，PyPI也實施了預防措施，規定超過14天已發布的套件版本，將無法再新增任何檔案，以阻止攻擊者利用被盜取的發布權限污染舊版、信任的套件。這些措施共同加強了開發生態系統的韌性，旨在防止攻擊者透過污染或利用時間窗口進行攻擊。",
    tags: ["GitHub", "PyPI", "Dependabot", "供應鏈攻擊", "開源安全", "SBOM"],
    title_en: "GitHub and PyPI Strengthen Supply Chain Defense: Introducing Time Delay Mechanisms to Limit Malicious Package Propagation",
    summary_en: "In response to frequent supply chain attacks in recent years, GitHub and PyPI (Python Package Index) have each introduced time delay mechanisms to limit the propagation and exploitation of malicious packages. GitHub has added a default three-day \"cooldown\" period to its Dependabot dependency update service. This aims to delay the automatic updating process of packages, thereby reducing the risk of automatically adopting newly released malicious packages. While this measure aims to balance security and development efficiency, users are still advised to use measures such as lockfiles and scope-restricted tokens. Concurrently, PyPI has implemented preventative measures, stipulating that package versions published more than 14 days ago cannot have any new files added. This prevents attackers from using stolen publishing credentials to pollute older, trusted packages. These measures collectively enhance the resilience of the open-source ecosystem, aiming to prevent attackers from launching attacks by polluting or exploiting time windows.",
    tags_en: ["GitHub", "PyPI", "Dependabot", "Supply Chain Attack", "Open Source Security", "SBOM"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/github-pypi-add-time-absed-defenses-against-supply-chain-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260726-017",
    trackers: ["os"],
    category: "Android",
    title: "Ubuntu Touch 24.04-2.0 發布：支援螢幕瀏海與圓角設計，並升級 Chromium 引擎至 134",
    summary: "Ubuntu Touch 24.04-2.0 作為最新的功能版本發布，適用於多款智慧型手機和平板電腦。本次更新的主要技術亮點包括：大幅升級 Morph 網頁瀏覽器所依賴的 Chromium 引擎，版本從舊的 Chromium 87 提升至 134。此外，系統現已具備支援帶有「瀏海」（Notches）和圓角螢幕的設備，解決了現代手機介面設計的長期痛點。使用者介面方面，增加了 Lomiri shell 的螢幕截圖編輯器，並提升了行動數據連接的可靠性。系統層面也進步了，支援 FSCRYPT v2 的設備，使用者資料加密功能已不再是實驗性質。本次更新支援的設備清單包括 Zinwa Q25、Asus Zenfone Max Pro M1、Fairphone 4/5 等多品牌型號。開發團隊持續朝著基於 Ubuntu 26.04 LTS 的重大里程碑邁進。",
    tags: ["Ubuntu Touch", "24.04-2.0", "Chromium 134", "Linux", "Android", "Notch"],
    title_en: "Ubuntu Touch 24.04-2.0 Released: Supports Screen Notches and Rounded Corners, Upgrades Chromium Engine to 134",
    summary_en: "Ubuntu Touch 24.04-2.0 has been released as the latest feature version, applicable to multiple smartphones and tablets. Key technical highlights of this update include: a major upgrade of the Chromium engine used by the Morph web browser, increasing the version from the older Chromium 87 to 134. Furthermore, the system now supports devices with 'Notches' and rounded corner screens, addressing a long-standing pain point in modern mobile device design. On the user interface side, a screenshot editor for the Lomiri shell has been added, and the reliability of mobile data connectivity has been improved. System-level improvements include support for FSCRYPT v2 devices, making user data encryption a standard feature rather than an experimental one. Devices supported by this update include multiple brand models such as the Zinwa Q25, Asus Zenfone Max Pro M1, and Fairphone 4/5. The development team continues to move toward the major milestone based on Ubuntu 26.04 LTS.",
    tags_en: ["Ubuntu Touch", "24.04-2.0", "Chromium 134", "Linux", "Android", "Notch"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Ubuntu-Touch-24.04-2.0-Release", lang: "EN" }
    ]
  },
  {
    id: "20260726-018",
    trackers: ["os"],
    category: "重點關注",
    title: "三星 Galaxy Z Fold 8 系列發表後，市場前景面臨挑戰，市場分析指出折疊手機市場進入不確定期",
    summary: "本文為科技評論文章，非資安新聞。文章討論三星在最新 Unpacked 活動上發表的 Galaxy Z Fold 8 系列，指出折疊手機市場在經歷七年發展後，面臨進入不確定且充滿挑戰的階段。文章的重點是市場趨勢與產品前景分析，而非任何資安漏洞或安全更新。因此，無法提供任何關於 CVE、CVSS 分數或修補建議的資安資訊。",
    tags: ["三星", "Galaxy Z Fold 8", "折疊手機", "市場分析", "科技趨勢"],
    title_en: "Following the launch of the Samsung Galaxy Z Fold 8 series, the market faces challenges, with market analysis pointing to the foldable phone market entering an uncertain period",
    summary_en: "This article is a technology review, not a cybersecurity news item. It discusses the Galaxy Z Fold 8 series launched by Samsung at its latest Unpacked event, pointing out that the foldable phone market, after seven years of development, is facing an uncertain and challenging phase. The focus of the article is on market trends and product outlook analysis, not any security vulnerabilities or patches. Therefore, no cybersecurity information regarding CVEs, CVSS scores, or remediation suggestions can be provided.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Foldable Phone", "Market Analysis", "Tech Trends"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/26/samsung-galaxy-z-fold-8-preparing-for-battle", lang: "EN" }
    ]
  },
  {
    id: "20260726-019",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV+ 宣布改編《Neuromancer》系列，預計於 2027 年 1 月 22 日首播",
    summary: "Apple TV+ 在聖地牙哥國際漫畫展（SDCC）上釋出《Neuromancer》的短片預告，該系列改編自威廉·吉布森（William Gibson）於 1984 年的經典賽博龐克小說。該劇集預計將聚焦於主角 Case，一位受損的頂級超級駭客，與他的搭檔 Molly（一位擁有鏡面眼睛的刺客）一同捲入數位間諜活動，目標是對一個擁有無數秘密的企業王朝進行一次大盜行動。本系列由 Callum Taylor 飾演 Case，Briana Middleton 飾演 Molly。除了《Neuromancer》，文章也提到了 Prime Video 正在製作的《Carrie》迷你劇集，以及其他多部影集和電影的預告。所有內容均屬於影視娛樂產業的內容更新，並未涉及任何資安或技術漏洞。",
    tags: ["Apple TV+", "Neuromancer", "William Gibson", "賽博龐克", "影視娛樂", "SDCC"],
    title_en: "Apple TV+ Announces Adaptation of Neuromancer Series, Premiering January 22, 2027",
    summary_en: "At San Diego Comic-Con (SDCC), Apple TV+ released a short trailer for its adaptation of *Neuromancer*, a classic cyberpunk novel by William Gibson from 1984. The series is expected to focus on the protagonist Case, a damaged top-tier superhacker, and his partner Molly (an assassin with mirrored eyes), as they get entangled in digital espionage, aiming to pull off a major heist against a corporate dynasty holding countless secrets. Callum Taylor stars as Case, and Briana Middleton stars as Molly. In addition to *Neuromancer*, the article also mentioned the *Carrie* miniseries currently being produced by Prime Video, along with trailers for several other series and films. All content pertains to updates in the film and television entertainment industry and does not involve any cybersecurity or technical vulnerabilities.",
    tags_en: ["Apple TV+", "Neuromancer", "William Gibson", "Cyberpunk", "Entertainment", "SDCC"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/culture/2026/07/first-teaser-for-apple-tvs-neuromancer-debuts-at-sdcc", lang: "EN" }
    ]
  },
  {
    id: "20260726-020",
    trackers: ["os"],
    category: "重點關注",
    title: "GNU Binutils 2.47 發布：新增 RISC-V 擴展支援與編譯器工具鏈功能升級",
    summary: "GNU Binutils 2.47 版本已發布，這套工具集是 Linux 系統及其他使用 GNU 工具鏈的平台所共用的重要二進位工具。本次更新主要在功能層面進行擴展，包括新增支援多個最新的 RISC-V 標準擴展，例如 zalasr v1.0、zvabd v1.0 等，擴展了其跨平台兼容性。在功能細節上，新增了 --reloc-section-sym=[all|internal|none] 參數來控制重定位的行為；Objdump 和 readelf 增加了 --debug-dir=[DIR] 選項，用於定位獨立的除錯資訊檔案；Objdump 也新增了 -map-global-vars 選項，用於顯示全域變數的位置與類型。此外，連結器支援了新的 --start-lib 和 --end-lib 選項，並增加了 BFD 連結器在 -O 0 級別的優化選項，可加快連結速度但可能導致二進位檔案增大。本次版本也棄用了 32 位元的 s390 目標支援，但仍維護了 64 位元的 s390x 目標。建議開發者關注這些工具鏈的更新，以確保其編譯環境與目標架構的兼容性。",
    tags: ["GNU Binutils", "RISC-V", "Linux 工具鏈", "編譯器", "Objdump", "開發工具"],
    title_en: "GNU Binutils 2.47 Released: Adding RISC-V Extension Support and Compiler Toolchain Functionality Upgrades",
    summary_en: "GNU Binutils version 2.47 has been released. This toolset is a crucial binary utility shared by Linux systems and other platforms using the GNU toolchain. This update primarily expands functionality, including adding support for multiple latest RISC-V standard extensions, such as zalasr v1.0 and zvabd v1.0, thereby expanding its cross-platform compatibility. In terms of functional details, a new parameter --reloc-section-sym=[all|internal|none] has been added to control relocation behavior. Objdump and readelf have added the --debug-dir=[DIR] option, used for locating independent debugging information files. Objdump also introduced the -map-global-vars option, which displays the location and type of global variables. Furthermore, the linker supports new --start-lib and --end-lib options, and BFD linker added an optimization option at -O 0 level, which can speed up linking but may increase the size of the binary file. This version also deprecates 32-bit s390 target support but maintains 64-bit s390x target support. Developers are advised to pay attention to these toolchain updates to ensure compatibility between their compilation environment and target architecture.",
    tags_en: ["GNU Binutils", "RISC-V", "Linux Toolchain", "Compiler", "Objdump", "Development Tools"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNU-Binutils-2.47", lang: "EN" }
    ]
  }
];
