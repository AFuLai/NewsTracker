// data-20260822.js — 2026-08-22
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-22"] = [
  {
    id: "20260822-001",
    trackers: ["os"],
    category: "Linux",
    title: "Redox OS 升級至 EEVDF 排程器，性能與公平性大幅提升",
    summary: "Rust 語言撰寫的 Redox 作業系統（OS）已完成重大架構升級，將排程機制從 Deficit Weighted Round Robin (DWRR) 更換為 Earliest Eligible Virtual Deadline First (EEVDF)。此項改動由開發者 Akshit Gaur 在今年的 Redox Summer of Code 計畫中實作。測試結果顯示，採用 EEVDF 排程器後，Redox OS 的吞吐量（throughput）提升了 2.6 倍，公平性（fairness）提高了 782 倍，並且上下文切換時間（context switching time）降低了 82%。開發者認為這項升級極大地改善了桌面體驗，使 Redox OS 成為一個更流暢、性能更高的 Rust 作業系統。此更新主要針對作業系統的核心排程機制進行優化。",
    tags: ["Redox OS", "EEVDF", "DWRR", "Rust", "作業系統"],
    title_en: "Redox OS upgrades to EEVDF scheduler, significantly boosting performance and fairness",
    summary_en: "The Redox operating system (OS), written in the Rust language, has completed a major architectural upgrade by replacing its scheduling mechanism from Deficit Weighted Round Robin (DWRR) with Earliest Eligible Virtual Deadline First (EEVDF). This change was implemented by developer Akshit Gaur during this year's Redox Summer of Code program. Testing results show that adopting the EEVDF scheduler increased Redox OS throughput by 2.6 times, improved fairness by 782 times, and reduced context switching time by 82%. The developer believes this upgrade greatly improves the desktop experience, making Redox OS a smoother, higher-performance Rust operating system. This update primarily optimizes the core scheduling mechanism of the OS.",
    tags_en: ["Redox OS", "EEVDF", "DWRR", "Rust", "Operating System"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Redox-OS-Goes-EEVDF", lang: "EN" }
    ]
  },
  {
    id: "20260822-002",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心持續修補 Apple HFS/HFS+ 文件系統支援，提升相容性",
    summary: "儘管 Apple 在 macOS 10.6 (2009年) 已淘汰原始 HFS，並在 2017 年用 APFS 取代 HFS+，但 Linux 核心仍持續為這些舊版文件系統提供修補和支援。特別是在進行中的 Linux 7.3 合併週期中，開發者不斷將針對 HFS/HFS+ 的錯誤修正納入主線核心。這些更新包括了透過 Syzbot 和 xfstest 測試發現的問題修復，例如 b-tree 位圖損壞檢查、驗證改進、邏輯重構以及 KUnit 測試的清理工作。這顯示了儘管 Apple 已不再支援，但 HFS/HFS+ 在現代 Linux 發行版中仍有實際用途，並持續獲得維護和優化。",
    tags: ["Linux 核心", "HFS", "HFS+", "Linux 7.3", "文件系統", "Syzbot"],
    title_en: "Linux Kernel Continues Patching Support for Apple HFS/HFS+ File Systems to Enhance Compatibility",
    summary_en: "Although Apple deprecated original HFS in macOS 10.6 (2009) and replaced HFS+ with APFS in 2017, the Linux kernel continues to provide patches and support for these older file systems. Specifically, during the ongoing Linux 7.3 merge cycle, developers are continuously incorporating fixes for HFS/HFS+ into the mainline kernel. These updates include bug fixes discovered through Syzbot and xfstest testing, such as b-tree bitmap corruption checks, validation improvements, logical restructuring, and cleanup of KUnit tests. This demonstrates that despite Apple no longer supporting them, HFS/HFS+ still have practical use in modern Linux distributions and continue to receive maintenance and optimization.",
    tags_en: ["Linux Kernel", "HFS", "HFS+", "Linux 7.3", "File System", "Syzbot"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Apple-HFS-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260822-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "NTFS3 驅動程式漏洞：透過預先製作的檔案系統映像，可於 Linux 上達成 Root 權限提升",
    summary: "本篇報導指出一個針對 NTFS3 核心驅動程式的安全漏洞。該漏洞允許攻擊者使用一個預先製作（pre-crafted）的 NTFS 格式影像（例如 USB 隨身碟），在掛載到 Linux 系統時，導致本地權限提升 (local privilege escalation)，最終可獲得 root 權限。問題的核心根源位於 `fs/ntfs3/xattr.c` 的某個函式中，該程式碼直接從不受信任的磁碟資料（on-disk data）載入 inode 的模式位元（i_mode），包括 SUID 和 SGID 位元。當桌面自動掛載工具 (udisks) 預設以 suid 方式掛載 NTFS 檔案系統時，若插入了惡意製作的 USB，任何本地使用者都可能被賦予 euid=0 的權限。發現此漏洞的研究人員已提供 PoC 和演示，但截至目前，主線 NTFS3 核心驅動程式尚未修復此問題。建議的臨時修補方式是在載入 i_mode 時，額外加入位元遮罩 `& ~(S_ISUID | S_ISGID)` 來清除 SUID/SGID 位元。",
    tags: ["NTFS3", "Linux 核心", "本地權限提升", "SUID", "USB 安全"],
    title_en: "NTFS3 Driver Vulnerability Allows Root Privilege Escalation via Pre-crafted File System Image on Linux",
    summary_en: "This report details a security vulnerability in the NTFS3 kernel driver. The flaw allows an attacker to use a pre-crafted NTFS formatted image (such as a USB flash drive) that, when mounted to a Linux system, results in local privilege escalation, ultimately granting root privileges. The core issue resides within a function in `fs/ntfs3/xattr.c`, which directly loads the inode's mode bits (i_mode) from untrusted on-disk data, including SUID and SGID bits. When desktop auto-mounting tools (udisks) default to mounting NTFS file systems with suid permissions, inserting a maliciously crafted USB could grant any local user euid=0 privileges. Researchers who discovered this vulnerability have provided a PoC and demonstration, but as of yet, the main NTFS3 kernel driver has not patched this issue. A suggested temporary mitigation is to add a bitmask `& ~(S_ISUID | S_ISGID)` when loading i_mode to clear the SUID/SGID bits.",
    tags_en: ["NTFS3", "Linux Kernel", "Local Privilege Escalation", "SUID", "USB Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NTFS3-Vulnerability-For-Root", lang: "EN" }
    ]
  },
  {
    id: "20260822-004",
    trackers: ["os"],
    category: "Linux",
    title: "AMD RDNA 4m 圖形晶片韌體已上游化，Linux 開源驅動堆疊準備就緒",
    summary: "AMD 已將其下一代 RDNA 4m (GFX 11.7) 的圖形晶片韌體二進位檔案（firmware binaries）提交至 linux-firmware.git 儲存庫。這標誌著開源 Linux 驅動支援的關鍵一步，使各 Linux 發行版能夠將這些資源整合到系統更新中。\n本次上游化的內容包括 GFX 11.7.0 和 GFX 11.7.1 的韌體，以及 PSP 15.0.0/15.0.9 安全韌體、SDMA 6.1.4 和 VPE 2.0.0 引擎韌體，同時也包含了 DCN 4.2。這些更新顯示 RDNA 4m 硬體將具備新的 VPE 2.0 影像處理引擎和 DCN 4.2 顯示核心能力。\n從軟體基礎來看，除了韌體外，Linux 7.3 核心和 Mesa 26.2~26.3 也構成了支援 RDNA 4m 的良好基準線。這使得整個開源 Linux 驅動堆疊已為即將推出的 RDNA 4m 圖形晶片做好準備。",
    tags: ["AMD", "RDNA 4m", "GFX 11.7", "linux-firmware.git", "Linux 核心", "Mesa"],
    title_en: "AMD RDNA 4m Graphics Chip Firmware Upstreamed; Open Source Driver Stack Ready",
    summary_en: "AMD has submitted the firmware binaries for its next-generation RDNA 4m (GFX 11.7) graphics chip to the linux-firmware.git repository. This marks a critical step toward open-source Linux driver support, enabling various Linux distributions to integrate these resources into system updates.\n\nThe upstreamed content includes firmware for GFX 11.7.0 and GFX 11.7.1, along with security firmware for PSP 15.0.0/15.0.9, engine firmware for SDMA 6.1.4 and VPE 2.0.0, and DCN 4.2. These updates indicate that the RDNA 4m hardware will feature a new VPE 2.0 image processing engine and DCN 4.2 display core capabilities.\n\nFrom a software foundation perspective, in addition to the firmware, Linux kernel 7.3 and Mesa 26.2~26.3 also form a solid baseline for supporting RDNA 4m. This means that the entire open-source Linux driver stack is now prepared for the upcoming RDNA 4m graphics chip.",
    tags_en: ["AMD", "RDNA 4m", "GFX 11.7", "linux-firmware.git", "Linux Kernel", "Mesa"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-RDNA-4m-Firmware-Published", lang: "EN" }
    ]
  },
  {
    id: "20260822-005",
    trackers: ["os"],
    category: "Linux",
    title: "Mesa 26.3整合NVK Vulkan Video支援：H.264解碼功能現已可用",
    summary: "開源的NVIDIA Vulkan驅動程式「NVK」在Mesa 26.3版本中加入了Vulkan Video支援。此更新初期僅支持H.264編解碼，其實現過程涉及對NVIDIA視訊加速處理的逆向工程（reverse engineering），並需等待Rust程式語言驅動基礎設施的完善。\n\n目前雖然已開始進行H.265編解碼的支援工作，但由於依賴於NVIDIA GPU System Processor (GSP)，現階段僅能使用H.264解碼功能。此外，此Vulkan Video支援需要依賴NVIDIA GSP，因此僅適用於Turing及更新型號的GPU。\n\n該NVK支援已合併至Mesa 26.3-devel，預計在第四季度（Q4）穩定發布，並與Linux 7.3的穩定版本同步。開發者應注意，此用戶空間驅動程式代碼還需要依賴一個針對Linux 7.3核心的Nouveau補丁。\n\n對於感興趣的開發者，可查閱相關文件了解如何為Mesa編譯包含NVK Vulkan Video支援的版本。",
    tags: ["Mesa 26.3", "NVIDIA", "Vulkan", "Vulkan Video", "H.264", "Linux 7.3"],
    title_en: "Mesa 26.3 Integrates NVK Vulkan Video Support: H.264 Decoding Functionality Now Available",
    summary_en: "The open-source NVIDIA Vulkan driver, \"NVK,\" has incorporated Vulkan Video support in Mesa 26.3. This initial update only supports H.264 encoding and decoding; its implementation involved reverse engineering of NVIDIA's video acceleration processing and requires further refinement of the Rust programming language driver infrastructure.\n\nAlthough work on H.265 encoding and decoding has begun, current functionality is limited to H.264 decoding due to reliance on the NVIDIA GPU System Processor (GSP). Furthermore, because this Vulkan Video support depends on the NVIDIA GSP, it is only applicable to Turing and newer model GPUs.\n\nThe NVK support has been merged into Mesa 26.3-devel and is scheduled for stable release in Q4, synchronized with the stable version of Linux 7.3. Developers should note that this user-space driver code still requires a Nouveau patch targeting the Linux 7.3 kernel.\n\nDevelopers interested in this feature can consult related documentation to learn how to compile a version of Mesa that includes NVK Vulkan Video support.",
    tags_en: ["Mesa 26.3", "NVIDIA", "Vulkan", "Vulkan Video", "H.264", "Linux 7.3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVK-Vulkan-Video-Mesa-26.3", lang: "EN" }
    ]
  },
  {
    id: "20260822-006",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心升級至 7.3：擴展排程器 (sched_ext) 支援子排程器功能完整",
    summary: "本次更新主要針對 Linux 核心的排程框架 `sched_ext`，引入了完整的「子排程器」（sub-scheduler）支援。此功能允許在 cgroup 層級結構中附加多個排程實例，讓每個應用程式域都能擁有專屬且客製化的 BPF 排程器來處理不同的工作負載。\n\n技術上，這項重大進展使得根 BPF 排程器可以將一個 cgroup 子樹交給嵌套的子排程器，並附帶可撤銷的 CPU 配額。子排程器將完全擁有這些 CPU 上的所有排程決策權。此外，本次更新還修復了多個核心問題，包括：提升了父排程器對子排程器的 CPU 授予與撤銷能力（包含 enqueueing、preemption 等），修正了任務跨越子排程器邊界時的 cgroup 歸屬錯誤和 use-after-free 問題；並強化了 BPF 記憶體驗證，修補了多個潛在的死鎖和硬鎖定問題。\n\n實務上，這極大地提升了 Linux 系統對複雜、異質工作負載的管理能力，讓排程決策可以更精細化。建議使用或關注升級至 Linux 7.3 或更高版本的用戶。",
    tags: ["Linux 核心", "sched_ext", "子排程器", "BPF", "cgroup"],
    title_en: "Linux Kernel Upgrade to 7.3: Full Support for Scheduler Extension (sched_ext) Sub-Schedulers",
    summary_en: "This update primarily targets the Linux kernel's scheduling framework, `sched_ext`, introducing full support for 'sub-schedulers.' This feature allows multiple scheduling instances to be attached within a cgroup hierarchy, enabling each application domain to possess dedicated and customized BPF schedulers to handle different workloads.\n\nTechnically, this major advancement allows the root BPF scheduler to delegate a cgroup subtree to nested sub-schedulers, complete with revocable CPU quotas. The sub-scheduler gains full authority over all scheduling decisions for these CPUs. Furthermore, this update fixes multiple kernel issues, including: enhancing the parent scheduler's ability to grant and revoke CPU resources from sub-schedulers (including enqueueing and preemption), correcting cgroup ownership errors and use-after-free issues when tasks cross sub-scheduler boundaries; and strengthening BPF memory validation by patching several potential deadlock and hard-locking problems.\n\nPractically, this significantly improves Linux system's ability to manage complex, heterogeneous workloads, allowing for more granular scheduling decisions. Users are advised to use or monitor upgrading to Linux 7.3 or higher versions.",
    tags_en: ["Linux Kernel", "sched_ext", "Sub-scheduler", "BPF", "cgroup"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-sched-ext", lang: "EN" }
    ]
  },
  {
    id: "20260822-007",
    trackers: ["os"],
    category: "Linux",
    title: "Red Hat發布 Tuned 2.28，改善 Fedora 等系統的開箱 WiFi 省電效能",
    summary: "Red Hat 發布了其調校設定工具 Tuned 的最新版本 2.28。Tuned 是 Linux 用於監控和適應性調校系統的核心機制，特別常在 Fedora Linux 上使用。本次更新的主要改動之一是解決了先前因依賴的 iwpriv 套件已從 Fedora 中移除而導致的 WiFi 省電問題。Tuned 2.28 將 WiFi 電源管理處理切換至僅使用 `iw` 工具，並將其設為 Tuned 的 RPM 建構依賴項。雖然保留了對 iwpriv 的支援以應對舊系統需求，但這能確保現代的 Fedora 等系統能夠恢復開箱即用的 WiFi 省電功能。\n此外，本次版本還針對網路延遲配置（network-latency profile）進行調整，將 AVC 快取閾值從預設的 512 提高至 8192。此改動特別適用於 RHEL9 和 RHEL10 等系統，因為原有的低設定已被觀察到會導致網路工作負載出現延遲尖峰。\nTuned 2.28 也帶來了錯誤訊息改善、額外的建構文件、systemd 整合變更以及更多網路合併選項等諸多優化。",
    tags: ["Red Hat", "Fedora Linux", "Tuned", "WiFi 電源管理", "RHEL9", "iwpriv", "Linux 核心元件"],
    title_en: "Red Hat Releases Tuned 2.28 to Improve Out-of-Box WiFi Power Efficiency on Systems like Fedora",
    summary_en: "Red Hat has released the latest version of its tuning utility, Tuned, version 2.28. Tuned is a core mechanism in Linux used for monitoring and adaptive system tuning, frequently utilized on Fedora Linux. One of the main changes in this update addresses previous WiFi power efficiency issues caused by the removal of the dependency package `iwpriv` from Fedora. Tuned 2.28 switches the WiFi power management handling to rely solely on the `iw` tool, making it an RPM build dependency for Tuned. While retaining support for iwpriv to accommodate older system requirements, this change ensures that modern systems like Fedora can restore out-of-box WiFi power efficiency.\n\nFurthermore, this version adjusts the network latency configuration (network-latency profile), raising the AVC cache threshold from the default of 512 to 8192. This modification is particularly relevant for systems such as RHEL9 and RHEL10, as the original low setting was observed to cause latency spikes under network workloads.\n\nTuned 2.28 also includes various other optimizations, including improved error messaging, additional build documentation, systemd integration changes, and more network merge options.",
    tags_en: ["Red Hat", "Fedora Linux", "Tuned", "WiFi Power Management", "RHEL9", "iwpriv", "Linux Kernel Component"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Red-Hat-Tuned-2.28", lang: "EN" }
    ]
  },
  {
    id: "20260822-008",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：修補 TLB Flushing 流程，大幅改善低延遲工作負載的效能",
    summary: "本篇報導指出 Linux 7.3 核心針對 x86/mm 架構進行了重要修補，主要目標是減少在執行 TLB flushing 程式碼時禁用中斷（interrupts disabled）的時間。此改動對於延遲敏感型工作負載（如 DPDK）的效能提升極為關鍵。\n\n根據 Bytedance 工程師 Chuyi Zhou 的說明，傳統上，當處理程序退出或回收已映射頁面時，系統必須等待大量 IPI (Inter-Processor Interrupts) 操作完成。由於這些操作在整個過程中禁用了搶佔（preemption disabled），導致排程延遲急劇增加。在他們的生產環境中，觀察到 IPI 等待引起的排程延遲曾高達 16ms。\n\n修補後的目標是允許在等待 IPI 完成時進行搶佔，從而改善即時效能。應用此套件後，他們發現 `arch_tlbbatch_flush/flush_tlb_mm_range` 路徑上禁用搶佔的時間不再超過 1ms，整體 P99 的最大禁用事件時間已降至約 1.5ms。\n\n修補內容已合併到 Linux 7.3 版本，建議使用此版本或更高版本以獲得更佳的低延遲效能。然而，開發者仍需留意潛在的回歸（regressions）問題。",
    tags: ["Linux 7.3", "x86/mm", "TLB flushing", "IPI", "低延遲", "核心優化"],
    title_en: "Linux 7.3 Kernel Update: Patches TLB Flushing Process to Significantly Improve Low-Latency Workload Performance",
    summary_en: "This report highlights a significant patch in the Linux 7.3 kernel for the x86/mm architecture, primarily aimed at reducing the duration of disabled interrupts during TLB flushing operations. This modification is crucial for improving performance in latency-sensitive workloads (such as DPDK).\n\nAccording to Bytedance engineer Chuyi Zhou, traditionally, when a process exits or unmaps pages, the system must wait for numerous IPI (Inter-Processor Interrupts) operations to complete. Because these operations disable preemption throughout the process, scheduling latency significantly increases. In their production environment, they observed that scheduling delay caused by IPI waiting could reach up to 16ms.\n\nThe patch aims to allow preemption while waiting for IPI completion, thereby improving real-time performance. After applying this package, they found that the time spent with preemption disabled in the `arch_tlbbatch_flush/flush_tlb_mm_range` path no longer exceeds 1ms, and the overall P99 maximum disable event time has dropped to approximately 1.5ms.\n\nThe patch content has been merged into the Linux 7.3 version, and it is recommended to use this version or higher for better low-latency performance. However, developers should still be aware of potential regressions.",
    tags_en: ["Linux 7.3", "x86/mm", "TLB flushing", "IPI", "low latency", "kernel optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-x86-mm-Latency", lang: "EN" }
    ]
  },
  {
    id: "20260822-009",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 更新：提升效能與多語言支援，優化系統設定及螢幕錄影體驗",
    summary: "本文介紹了 KDE Plasma 6.8 版本在開發階段的最新性能優化和功能改進。本次更新主要著重於使用者體驗的提升，包括新增了跨語言搜尋功能：即使系統非英文配置，用戶仍可使用英文關鍵字搜尋「系統設定」頁面。\n\n此外，多項核心元件也進行了升級與優化：KWin 螢幕截圖和螢幕錄影功能將更快速、更流暢，特別是在高刷新率顯示器上；KWin 的 GPU 重置通知現在會針對所有 GPU 而非僅限主要 GPU；KDE Discover 背景通知器的記憶體使用量也大幅降低。\n\n在框架層面，KDE Frameworks 6.30 提升了 SVG 快取機制，改善了速度並減少了 vRAM 使用。這些改動預計將使 Plasma 6.8 的啟動速度更快，整體系統效能更佳。",
    tags: ["KDE Plasma", "Plasma 6.8", "KWin", "Linux", "kdenabledesktop", "SVG caching"],
    title_en: "KDE Plasma 6.8 Update: Enhanced Performance and Multilingual Support, Optimized System Settings and Screen Recording Experience",
    summary_en: "This article introduces the latest performance optimizations and feature improvements in the developmental KDE Plasma 6.8 version. This update primarily focuses on enhancing user experience, including adding cross-language search functionality: users can now use English keywords to search 'System Settings' even if the system is not configured in English.\n\nFurthermore, several core components have been upgraded and optimized: KWin screen capture and screen recording features will be faster and smoother, especially on high refresh rate displays; KWin's GPU reset notifications will now target all GPUs instead of just the primary GPU; and KDE Discover background notification memory usage has been significantly reduced.\n\nAt the framework level, KDE Frameworks 6.30 improves the SVG caching mechanism, enhancing speed and reducing vRAM consumption. These changes are expected to make Plasma 6.8 faster to start up and improve overall system performance.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "KWin", "Linux", "kdenabledesktop", "SVG caching"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-More-Performance", lang: "EN" }
    ]
  },
  {
    id: "20260822-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "OpenZFS 2.4.4 重磅發布，支援 Linux 7.2 核心並修補多項安全與穩定性漏洞",
    summary: "OpenZFS 發布了最新的穩定版本 OpenZFS 2.4.4。本次更新最大的亮點是新增了對近期穩定的 Linux 7.2 核心的完整支援，確保了其外掛式檔案系統能夠順暢地與上游 Linux 7.2 核心狀態協同工作。此外，OpenZFS 2.4.4 還包含數十個錯誤修復，包括更新的測試案例、多項安全策略改進，並將 systemd-udev-settle 對於匯入單元（import units）的要求設為可選。除了主版本，本次也同時發布了 OpenZFS 2.3.9 和 OpenZFS 2.2.11 的修補版，分別針對這兩個舊穩定分支進行了錯誤回溯修復。OpenZFS 支援的系統範圍涵蓋 Linux（可追溯至 4.18）和 FreeBSD 13.3+。\n\n建議使用者應根據自身環境需求，升級到 OpenZFS 2.4.4 或其後續穩定版本，以確保最佳的系統相容性與安全性。",
    tags: ["OpenZFS", "Linux 7.2", "檔案系統", "systemd-udev-settle", "FreeBSD", "安全修補"],
    title_en: "OpenZFS 2.4.4 Major Release Supports Linux 7.2 Kernel and Patches Multiple Security and Stability Vulnerabilities",
    summary_en: "OpenZFS has released the latest stable version, OpenZFS 2.4.4. The biggest highlight of this update is the addition of full support for the recently stable Linux 7.2 kernel, ensuring that its file system can cooperate smoothly with the upstream Linux 7.2 kernel state. Furthermore, OpenZFS 2.4.4 includes dozens of bug fixes, including updated test cases and multiple security policy improvements, and makes the requirement for systemd-udev-settle regarding import units optional. In addition to the main version, patch versions OpenZFS 2.3.9 and OpenZFS 2.2.11 were also released, providing backward bug fixes for these two older stable branches. OpenZFS supports systems ranging from Linux (traceable back to 4.18) and FreeBSD 13.3+. Users are advised to upgrade to OpenZFS 2.4.4 or later stable versions according to their environment's needs, ensuring optimal system compatibility and security.",
    tags_en: ["OpenZFS", "Linux 7.2", "File System", "systemd-udev-settle", "FreeBSD", "Security Patch"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenZFS-2.4.4-Released", lang: "EN" }
    ]
  },
  {
    id: "20260822-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：RDMA/bnxt_re 驅動程式未初始化共享頁面，可能洩露核心記憶體內容",
    summary: "本漏洞存在於 Linux 核心的 RDMA 相關元件 `bnxt_re` 驅動程式中。問題出在 `bnxt_re_alloc_ucontext()` 函式呼叫 `__get_free_page(GFP_KERNEL)` 分配共享頁面 (`uctx->shpg`) 時，由於 buddy allocator 未使用 `__GFP_ZERO` 標誌，導致該頁面保留了先前釋放物件的「陳舊核心資料」。隨後，此未經清理的頁面透過 `vm_insert_page()` 映射到使用者空間。攻擊者只需擁有在搭載 `bnxt_re` 設備的主機上存取 `/dev/infiniband/uverbsX` 的權限（通常是 `rdma` 群組成員），即可執行單一的 `mmap()` 呼叫，從而讀取到未經清理的、包含核心記憶體內容的資料。其他同檔案中的共享頁面已正確使用 `get_zeroed_page()` 進行初始化，但 `uctx->shpg` 是例外。修補建議是將其分配機制改為使用 `get_zeroed_page()`。",
    tags: ["Linux 核心", "RDMA", "bnxt_re", "內存洩露", "infiniband", "CVE-2026-74584"],
    title_en: "Linux Kernel Vulnerability: RDMA/bnxt_re Driver Fails to Initialize Shared Pages, Potentially Leaking Kernel Memory Content",
    summary_en: "This vulnerability resides in the `bnxt_re` driver, an RDMA-related component within the Linux kernel. The issue occurs when the function `bnxt_re_alloc_ucontext()` calls `__get_free_page(GFP_KERNEL)` to allocate a shared page (`uctx->shpg`). Because the buddy allocator is not using the `__GFP_ZERO` flag, this allocated page retains 'stale kernel data' from previously released objects. Subsequently, this uninitialized page is mapped into user space via `vm_insert_page()`. An attacker only needs access to `/dev/infiniband/uverbsX` on a host equipped with the `bnxt_re` device (typically by being a member of the `rdma` group) and can execute a single `mmap()` call, thereby reading uninitialized data containing kernel memory contents. While other shared pages in the same file correctly use `get_zeroed_page()` for initialization, `uctx->shpg` is an exception. The suggested fix is to change its allocation mechanism to use `get_zeroed_page()`.",
    tags_en: ["Linux Kernel", "RDMA", "bnxt_re", "Memory Leakage", "infiniband", "CVE-2026-74584"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74584", lang: "EN" }
    ]
  },
  {
    id: "20260822-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：Thunderbolt 設備可利用越界讀寫，NIST 發布修復資訊",
    summary: "本篇報告指出 Linux 核心中存在一項與 Thunderbolt 相關的潛在安全問題。該漏洞位於 `drivers/thunderbolt/eeprom.c` 文件，攻擊者若使用惡意或格式錯誤的 Thunderbolt 設備，可利用一個越界讀寫（Out-of-bounds）的缺陷。具體來說，雖然 `tb_drom_parse_entry_port()` 函數會驗證 `header->index` 對應到 `sw->config.max_port_number` 的限制，但同級別的欄位 `entry->dual_link_port_nr`（一個從 DROM 讀取的 6 位元值）卻沒有進行相同的檢查。這使得攻擊者可以設定超出分配範圍的 `dual_link_port_nr`，進而產生越界指向 `tb_port` 指標，並導致系統儲存和後續解引用此指標時發生問題。\n\nNIST 已經將此 CVE 記錄發布至公開資料庫，並提供了多個修補的 Git Commit ID。開發者應升級到列出的最新核心版本（例如 `6c892ed9f4129ae40ef0f92e1bb31aa0b0ddc72c` 或更新的版本）以修復此漏洞，避免使用受影響的舊版 Linux 核心。",
    tags: ["CVE-2026-74585", "Linux 核心", "Thunderbolt", "越界讀寫", "NIST"],
    title_en: "Linux Kernel Vulnerability: Thunderbolt Devices Can Exploit Out-of-bounds Read/Write, NIST Issues Fix Information",
    summary_en: "This report details a potential security vulnerability in the Linux kernel related to Thunderbolt. The flaw resides in the `drivers/thunderbolt/eeprom.c` file and can be exploited by an attacker using malicious or malformed Thunderbolt devices. Specifically, while the `tb_drom_parse_entry_port()` function validates that `header->index` corresponds to the limit set by `sw->config.max_port_number`, a similarly level field, `entry->dual_link_port_nr` (a 6-bit value read from DROM), lacks this same check. This allows an attacker to set a `dual_link_port_nr` exceeding the allocated range, subsequently causing an out-of-bounds pointer to `tb_port`, which leads to issues when the system stores and later dereferences this pointer.\n\nNIST has published this CVE record in its public database and provided multiple Git Commit IDs for patches. Developers should upgrade to the listed latest kernel versions (e.g., `6c892ed9f4129ae40ef0f92e1bb31aa0b0ddc72c` or newer) to remediate this vulnerability and avoid using affected older Linux kernels.",
    tags_en: ["CVE-2026-74585", "Linux Kernel", "Thunderbolt", "Out-of-bounds Read/Write", "NIST"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74585", lang: "EN" }
    ]
  },
  {
    id: "20260822-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux SCTP 核心漏洞：未清除對等點移除後的新傳輸，導致 Use-After-Free",
    summary: "本漏洞位於 Linux 核心的 SCTP (Stream Control Transmission Protocol) 組件中。攻擊者透過一個經過驗證（authenticated）的 ASCONF 訊息，可以利用特定參數組合在同一個資料塊內新增並移除傳輸點（transport）。當發生這種操作時，系統未能正確清除 `asoc->new_transport` 指標，導致後續建立 HEARTBEAT 時指向已釋放或被移除的傳輸資源。這最終會在執行本地位址替換（local address replacement）流程時，觸發一個 Use-After-Free (UAF) 條件。該漏洞的修補建議是：在對等點被移除之前，必須清除 `new_transport` 指標，以防止其指向已無效的資源，從而避免後續使用此指標建立 HEARTBEAT。",
    tags: ["Linux 核心", "SCTP", "Use-After-Free", "CVE-2026-74586", "netdev/main"],
    title_en: "Linux SCTP Core Vulnerability: New Transmission After Peer Removal Leads to Use-After-Free",
    summary_en: "This vulnerability resides in the Stream Control Transmission Protocol (SCTP) component of the Linux kernel. An attacker can exploit a specific combination of parameters using an authenticated ASCONF message to add and then remove transports within the same data chunk. When this operation occurs, the system fails to correctly clear the `asoc->new_transport` pointer, causing subsequent HEARTBEAT establishment attempts to point to released or removed transport resources. This ultimately triggers a Use-After-Free (UAF) condition during the local address replacement process. The patch recommendation is that the `new_transport` pointer must be cleared before the peer is removed, preventing it from pointing to invalid resources and thus avoiding subsequent use of this pointer for HEARTBEAT establishment.",
    tags_en: ["Linux Kernel", "SCTP", "Use-After-Free", "CVE-2026-74586", "netdev/main"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74586", lang: "EN" }
    ]
  },
  {
    id: "20260822-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux sctp 核心修復 use-after-free：防範 ASCONF 區塊管理與計時器關閉的競態條件",
    summary: "本漏洞位於 Linux 核心的 SCTP (Stream Control Transmission Protocol) 協定實作中，涉及一個使用後釋放（use-after-free）的記憶體安全問題。當處理對等點重啟（peer restart handling）時，`sctp_asconf_queue_teardown()` 會釋放快取區塊，但未能清除 `addip_last_asconf` 指標，導致指標懸空（dangling）。隨後到達的延遲認證 ASCONF-ACK 訊息會嘗試存取這個過時的區塊，進而造成 use-after-free 和第二次釋放。此外，在處理 T4 過期計時器時，如果未正確清除指標，還存在與 Purge 流程競態的風險，可能導致 `sctp_sf_t4_timer_expire()` 在空指針上解引用（dereference NULL）。修復建議包括：在釋放快取區塊後清除 `addip_last_asconf` 指標；並修改 `sctp_sf_t4_timer_expire()` 函數，使其能夠處理沒有未完成 ASCONF 的過時 T4 計時器。",
    tags: ["Linux 核心", "SCTP", "use-after-free", "CVE-2026-74587", "記憶體安全"],
    title_en: "Linux sctp Core Fix for Use-After-Free: Preventing Race Conditions in ASCONF Block Management and Timer Shutdown",
    summary_en: "This vulnerability resides within the Linux kernel's implementation of the SCTP (Stream Control Transmission Protocol) protocol, involving a memory safety issue known as use-after-free. When handling peer restart, `sctp_asconf_queue_teardown()` releases cached blocks but fails to clear the `addip_last_asconf` pointer, resulting in a dangling pointer. Subsequently arriving delayed ASCONF-ACK messages attempt to access this stale block, causing use-after-free and double freeing. Furthermore, when handling T4 expired timers, if pointers are not correctly cleared, there is also a risk of race conditions with the Purge process, potentially leading to `sctp_sf_t4_timer_expire()` dereferencing NULL. Recommended fixes include: clearing the `addip_last_asconf` pointer after releasing cached blocks; and modifying the `sctp_sf_t4_timer_expire()` function to handle expired T4 timers without pending ASCONF.",
    tags_en: ["Linux Kernel", "SCTP", "use-after-free", "CVE-2026-74587", "Memory Safety"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74587", lang: "EN" }
    ]
  },
  {
    id: "20260822-015",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 SCTP 漏洞：未更新傳輸層指針導致 Use-After-Free",
    summary: "本漏洞存在於 Linux 核心的 SCTP (Stream Control Transmission Protocol) 組件中。問題點出在 `__sctp_outq_flush_rtx()` 函數，當一個已進行間隙確認 (gap-acked) 的資料塊被移動到另一個傳輸層的發送清單時，沒有同步更新該資料塊的 `chunk->transport` 指針。如果此後發生了相關的傳輸層移除操作（例如透過 `sctp_assoc_rm_peer()` 或 `sctp_transport_free()`），系統會使用 RCU 釋放記憶體，導致該資料塊留下一個懸空指針 (dangling pointer)。當接收到 SACK (Selective Acknowledgment) 時，程式碼會在已釋放的傳輸層內執行操作，最終在 `sctp_check_transmitted()` 中觸發 KASAN 報告的 slab-use-after-free 讀取錯誤。此漏洞的修復建議是確保在資料塊移動時同步更新其所屬的 `chunk->transport` 指針。",
    tags: ["Linux 核心", "SCTP", "Use-After-Free", "CVE-2026-74588", "sctp_assoc_rm_peer()"],
    title_en: "Linux Kernel SCTP Vulnerability: Use-After-Free Due to Unupdated Transport Pointer",
    summary_en: "This vulnerability exists in the Stream Control Transmission Protocol (SCTP) component of the Linux kernel. The issue is located in the `__sctp_outq_flush_rtx()` function, where a data chunk that has been gap-acknowledged and moved to another transport layer's send queue fails to synchronously update the chunk's `chunk->transport` pointer. If a subsequent related transport layer removal operation occurs (such as via `sctp_assoc_rm_peer()` or `sctp_transport_free()`), the system uses RCU to free memory, leaving behind a dangling pointer for that data chunk. When receiving SACK (Selective Acknowledgment), the code attempts operations within the already freed transport layer, ultimately triggering a slab-use-after-free read error reported by KASAN in `sctp_check_transmitted()`. The recommended fix is to ensure synchronous updating of the chunk's associated `chunk->transport` pointer when the data chunk moves.",
    tags_en: ["Linux Kernel", "SCTP", "Use-After-Free", "CVE-2026-74588", "sctp_assoc_rm_peer()"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74588", lang: "EN" }
    ]
  },
  {
    id: "20260822-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 bpf/sockmap 用戶後使用問題：防止 send 判決的記憶體釋放錯誤",
    summary: "本漏洞位於 Linux 核心的 BPF (Berkeley Packet Filter) 和 sockmap 功能中，具體影響 `sk_redir` 的使用。當透過 `tcp_bpf_sendmsg_redir()` 函式傳送訊息時，如果應用程式保持了快取判決（cached verdict）的有效狀態，而另一個執行緒在釋放源 Socket Lock 後進行操作，可能導致原始指標 (`sk_redir`) 在第一個執行緒還在使用它時被提前釋放。這是一個典型的 Use-After-Free (UAF) 漏洞。\n\nKASAN 報告確認了此問題，指出 `tcp_bpf_sendmsg_redir` 函式在未正確管理 Socket 參考計數（reference counting）的情況下，可能導致指標過早釋放。修補建議是：在呼叫 `tcp_bpf_sendmsg_redir()` 之前，必須取得一個臨時的 Socket 參考，並確保該參考在使用完畢後才釋放，以將每個未鎖定使用（unlocked use）與快取判決的所有權分離。\n\n此修復旨在提高 Linux 核心在處理網路封包和 BPF 過濾時的記憶體安全性和穩定性。",
    tags: ["Linux 核心", "bpf", "sockmap", "Use-After-Free", "tcp_bpf_sendmsg_redir", "CVE-2026-74589"],
    title_en: "Linux Kernel Fix for bpf/sockmap Use-After-Free Issue: Preventing Memory Release Errors in send Decisions",
    summary_en: "This vulnerability resides within the Linux kernel's BPF (Berkeley Packet Filter) and sockmap functionalities, specifically affecting the use of `sk_redir`. When sending messages via the `tcp_bpf_sendmsg_redir()` function, if an application maintains a valid cached verdict state while another thread operates after releasing the source Socket Lock, it may cause the original pointer (`sk_redir`) to be prematurely freed while the first thread is still using it. This constitutes a classic Use-After-Free (UAF) vulnerability.\n\nKASAN reports confirmed this issue, pointing out that `tcp_bpf_sendmsg_redir` can lead to premature pointer release due to improper management of Socket reference counting. The suggested fix mandates acquiring a temporary Socket reference before calling `tcp_bpf_sendmsg_redir()`, and ensuring that this reference is only released after its use is complete, thereby separating the ownership of every unlocked use from the cached verdict.\n\nThis patch aims to enhance the memory safety and stability of the Linux kernel when processing network packets and BPF filtering.",
    tags_en: ["Linux Kernel", "bpf", "sockmap", "Use-After-Free", "tcp_bpf_sendmsg_redir", "CVE-2026-74589"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74589", lang: "EN" }
    ]
  },
  {
    id: "20260822-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：解決 fsverity 中 bpf_get_fsverity_digest() 的競態條件漏洞",
    summary: "本次更新針對 Linux 核心中的一個安全問題，涉及 `fsverity` 功能。該漏洞存在於 `bpf_get_fsverity_digest()` 函式中，由於其在處理參數 `arg->digest_size` 時未能正確遵循記憶體操作的同步機制，可能導致在發生併發修改時系統崩潰（crash）。\n修補措施建議開發者應改用已知的安全值 `hash_alg->digest_size` 來取代不穩定的參數讀取。此外，為了確保類型匹配和程式碼健壯性，還將相關變數如 `'dynptr_sz'` 和 `'out_digest_sz'` 擴展至 `u64` 型別，以與 `__bpf_dynptr_size()` 的回傳型別一致。\n此修補旨在強化 BPF 驗證器和 dynptr 抽象層的記憶體安全性和穩定性。",
    tags: ["Linux 核心", "fsverity", "bpf_get_fsverity_digest()", "競態條件", "BPF"],
    title_en: "Linux Kernel Patch: Resolving Race Condition Vulnerability in bpf_get_fsverity_digest()",
    summary_en: "This update addresses a security issue within the Linux kernel related to the `fsverity` feature. The vulnerability resides in the `bpf_get_fsverity_digest()` function, which could potentially cause system crashes when concurrent modifications occur because it fails to correctly follow memory operation synchronization mechanisms when handling the parameter `arg->digest_size`. The patch advises developers to replace the unstable parameter reading with the known safe value `hash_alg->digest_size`. Furthermore, to ensure type matching and code robustness, related variables such as `'dynptr_sz'` and `'out_digest_sz'` have been expanded to the `u64` data type, aligning them with the return type of `__bpf_dynptr_size()`. This fix aims to enhance the memory safety and stability of the BPF verifier and dynptr abstraction layer.",
    tags_en: ["Linux Kernel", "fsverity", "bpf_get_fsverity_digest()", "Race Condition", "BPF"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74590", lang: "EN" }
    ]
  },
  {
    id: "20260822-018",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 mm/filemap 中的索引恢復漏洞，避免不正確的 folio 寫入",
    summary: "本篇公告描述了 Linux 核心中 `mm/filemap` 文件映射相關的一個潛在競爭條件和邏輯錯誤。該問題發生在 `__filemap_add_folio()` 的衝突解決循環中。當系統嘗試為新的 folio 分配資源，但首次的 GFP_NOWAIT 分配失敗後，釋放鎖定並重試時，如果此期間有其他執行緒修改了同一個 xarray 區塊，可能會導致本流程將新分配的 folio 寫入到一個被「四捨五入」後的、不正確的中間索引位置。這類錯誤可能在啟用 `CONFIG_DEBUG_VM=y` 的除錯模式下觸發 `!folio_contains()` 漏洞檢查。實際生產環境中，該缺陷曾導致罕見的 SIGILL 和 SIGSEGVs 崩潰訊號，表現為可執行程式碼位於其應屬位置之外。修復方案是在循環底部增加一個 `xas_set_order()` 來恢復原始的 xarray 索引 (`xas.xa_index`)，確保在重新獲取鎖定後能進行完整的重新評估，從而防止使用錯誤的索引寫入 folio。",
    tags: ["Linux 核心", "mm/filemap", "CVE-2026-74591", "SIGILL", "SIGSEGVs", "folio"],
    title_en: "Linux Kernel Fixes Index Recovery Vulnerability in mm/filemap to Prevent Incorrect Folio Writes",
    summary_en: "This announcement describes a potential race condition and logic error related to the `mm/filemap` file mapping within the Linux kernel. The issue occurs during the conflict resolution loop of `__filemap_add_folio()`. When the system attempts to allocate resources for a new folio, but the initial GFP_NOWAIT allocation fails, releasing the lock and retrying, if another thread modifies the same xarray block during this period, it could cause the process to write the newly allocated folio into an incorrect intermediate index location that has been 'rounded'. Such errors might trigger the `!folio_contains()` vulnerability check when running in debug mode with `CONFIG_DEBUG_VM=y`. In actual production environments, this defect has previously led to rare SIGILL and SIGSEGVs crash signals, manifesting as executable code being located outside its intended position. The fix involves adding an `xas_set_order()` at the bottom of the loop to restore the original xarray index (`xas.xa_index`), ensuring that a complete re-evaluation can occur after reacquiring the lock, thereby preventing the use of incorrect indices when writing folios.",
    tags_en: ["Linux Kernel", "mm/filemap", "CVE-2026-74591", "SIGILL", "SIGSEGVs", "folio"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74591", lang: "EN" }
    ]
  },
  {
    id: "20260822-019",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 CVE-2026-74592：強化檔案截斷（truncate）的安全性與稽核機制",
    summary: "本漏洞CVE-2026-74592存在於 Linux kernel 的安全模組 (LSM) 機制中。修補內容主要針對 `file_truncate` 和 `path_truncate` hooks，目的是在執行檔案截斷操作時，能立即重置動作快取旗標（IMA_DONE_MASK）。透過此機制，系統可以確保受影響的檔案在下次存取時，會根據既定策略重新收集、重新測量、重新稽核和重新評估其狀態。這項修補顯著提升了 Linux 核心對檔案操作的完整性檢查能力，特別是在處理截斷等敏感操作後，能更有效地防止資訊洩漏或權限繞過。\n\n由於原文未提供具體的 CVSS 分數、受影響版本範圍或實務修補建議，使用者應密切關注主流 Linux 發行版（如 Red Hat, Ubuntu 等）的官方安全公告，並儘速更新至包含此修補的最新核心版本。這類核心層級的漏洞修補，對系統穩定性和安全性皆有重大影響。",
    tags: ["CVE-2026-74592", "Linux kernel", "LSM hooks", "file_truncate", "IMA_DONE_MASK", "系統核心"],
    title_en: "Linux Kernel Patch for CVE-2026-74592: Enhancing File Truncation Security and Auditing Mechanisms",
    summary_en: "This vulnerability, CVE-2026-74592, resides within the Linux kernel's Security Module (LSM) mechanism. The patch primarily targets the `file_truncate` and `path_truncate` hooks. Its purpose is to immediately reset the action cache flag (IMA_DONE_MASK) when a file truncation operation is performed. Through this mechanism, the system can ensure that affected files will re-collect, re-measure, re-audit, and re-evaluate their status upon subsequent access according to established policies. This patch significantly improves the Linux kernel's integrity checking capabilities for file operations, particularly after sensitive actions like truncation, thereby more effectively preventing information leakage or privilege bypass.\n\nSince the original text does not provide specific CVSS scores, affected version ranges, or practical mitigation advice, users should closely monitor official security announcements from major Linux distributions (such as Red Hat and Ubuntu) and promptly update to the latest kernel version containing this patch. Core-level vulnerability patches like this have significant implications for both system stability and security.",
    tags_en: ["CVE-2026-74592", "Linux kernel", "LSM hooks", "file_truncate", "IMA_DONE_MASK", "Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74592", lang: "EN" }
    ]
  },
  {
    id: "20260822-020",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 Deadlock：scx_cgroup_lock() 順序問題導致的 cgroup 鎖定衝突",
    summary: "本漏洞存在於 Linux 核心中，涉及 `sched_ext` 功能。其根本原因在於 `scx_cgroup_lock()` 函數內部鎖定順序錯誤：它先寫入鎖定 `scx_cgroup_ops_rwsem`，然後再取得 `cgroup_lock()`。這種不當的鎖定順序可能導致系統發生死鎖（deadlock），特別是在透過 kernfs 進行操作時。\n\n具體來說，當執行 `scx enable/disable` 路徑時，它會等待 `cgroup rmdir` 操作釋放 `cgroup_mutex`；而 `cgroup rmdir` 在停用 CPU 控制器檔案時，又會在 `kernfs_drain()` 中等待寫入操作的活躍參考計數。進一步地，寫入操作在執行 `scx_group_set_weight()` 時，會等待位於待處理寫入者後方的 `rwsem`。\n\n修復建議是改變鎖定順序，讓程式碼先取得 `cgroup_lock()`，再進行其他操作。由於 set_* 路徑的讀取端不會在內部使用 cgroup 鎖，因此調整順序可以確保待處理寫入鎖只會等待總是能完成的讀取區段，從而消除了 `rwsem` 回到 `cgroup_mutex` 的依賴性。",
    tags: ["Linux 核心", "sched_ext", "cgroup", "Deadlock", "CVE-2026-74593"],
    title_en: "Linux Kernel Fixes Deadlock in `scx_cgroup_lock()` Due to cgroup Locking Order Issue",
    summary_en: "This vulnerability exists within the Linux kernel and involves the `sched_ext` functionality. The root cause is an incorrect locking order inside the `scx_cgroup_lock()` function: it first writes to the lock `scx_cgroup_ops_rwsem`, and then acquires `cgroup_lock()`. This improper locking sequence can lead to a system deadlock, particularly when performing operations via kernfs.\n\nSpecifically, when executing the `scx enable/disable` path, it waits for the `cgroup rmdir` operation to release `cgroup_mutex`; meanwhile, `cgroup rmdir`, when disabling the CPU controller file, waits for an active reference count of write operations within `kernfs_drain()`. Furthermore, write operations executing `scx_group_set_weight()` wait on the `rwsem` located behind the pending writer. \n\nThe suggested fix is to change the locking order, having the code first acquire `cgroup_lock()` before performing other operations. Since the read side of the set_* path does not internally use the cgroup lock, adjusting the order ensures that the pending write lock only waits for a readable segment that can always complete, thereby eliminating the dependency from `rwsem` back to `cgroup_mutex`.",
    tags_en: ["Linux Kernel", "sched_ext", "cgroup", "Deadlock", "CVE-2026-74593"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74593", lang: "EN" }
    ]
  },
  {
    id: "20260822-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復競態條件：psi_schedule_rtpoll_work 與 rtpoll_trigger_destroy 的資料競爭問題",
    summary: "本漏洞涉及 Linux 核心的 sched/psi 機制，存在一個在 `psi_cgroup_free()` 函數中關閉 rtpoll_timer 時可能發生的競態條件。當 `psi_schedule_rtpoll_work()` 從排程熱路徑（scheduler hotpath）無鎖呼叫時，與執行 `psi_trigger_destroy()` 的操作發生資料競爭。具體來說，如果組別被釋放（freed），但計時器仍處於待定狀態，`poll_timer_fn()` 可能會在已釋放的記憶體上運行。此問題導致核心元件在處理資源清理和排程機制時出現不穩定性。\n\n修復建議是將計時器的綁定生命週期與組別（group）本身掛鉤，並在 `psi_cgroup_free()` 函數中執行關閉操作。這確保了當組別被釋放時，相關的排程工作和資源能夠同步、安全地清理，避免使用已失效或已被重用記憶體。\n\n開發者應關注核心元件的生命週期管理和多線程環境下的資源清理機制。",
    tags: ["Linux 核心", "sched/psi", "rtpoll_timer", "競態條件", "cgroup", "資安修復"],
    title_en: "Linux Kernel Fixes Race Condition in `psi_schedule_rtpoll_work` and `rtpoll_trigger_destroy` Data Race",
    summary_en: "This vulnerability involves the Linux kernel's sched/psi mechanism, presenting a race condition that can occur when closing an rtpoll_timer within the `psi_cgroup_free()` function. A data race occurs between calling `psi_schedule_rtpoll_work()` from the scheduler hotpath without locks and executing `psi_trigger_destroy()`. Specifically, if a cgroup is freed but the timer remains pending, `poll_timer_fn()` may execute on already released memory. This issue causes instability in core components when handling resource cleanup and scheduling mechanisms.\n\nThe recommended fix is to tie the timer's binding lifecycle directly to the group itself and perform the closing operation within the `psi_cgroup_free()` function. This ensures that when a cgroup is freed, the related scheduling work and resources are cleaned up synchronously and safely, preventing the use of invalid or reused memory.\n\nDevelopers should focus on core component lifecycle management and resource cleanup mechanisms in multi-threaded environments.",
    tags_en: ["Linux Kernel", "sched/psi", "rtpoll_timer", "Race Condition", "cgroup", "Security Fix"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74594", lang: "EN" }
    ]
  },
  {
    id: "20260822-022",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 fscrypt 漏洞：掛載 IDMap 未正確檢查，可能導致權限誤判",
    summary: "本漏洞存在於 Linux 核心的 fscrypt 功能中。問題出在 `fscrypt_ioctl_set_policy()` 函式呼叫時，它使用 `&nop_mnt_idmap` 來執行 inode 所有者或能力檢查，而不是使用發出 ioctl 指令掛載點（mount）的 IDMap。這導致當 fscrypt 用於支援 idmapped 掛載的檔案系統（如 ext4, f2fs）上時，它會錯誤地比較呼叫者的 fsuid 與未映射的磁碟上的所有者，而非實際已映射的所有者。實務影響是：原本應被拒絕存取的用戶可能會被誤判為允許存取，或相反地，實際擁有者可能因權限檢查失敗而被錯誤地拒絕存取（-EACCES）。建議系統管理員升級到修補了此問題的 Linux 核心版本以解決此安全隱患。",
    tags: ["Linux 核心", "fscrypt", "CVE-2026-74595", "ioctl", "權限控制"],
    title_en: "Linux Kernel fscrypt Vulnerability: Incorrect IDMap Check on Mount Leads to Potential Permission Misjudgment",
    summary_en: "This vulnerability exists within the fscrypt functionality of the Linux kernel. The issue arises during the call to `fscrypt_ioctl_set_policy()`, where it uses `&nop_mnt_idmap` for performing inode owner or capability checks, instead of using the IDMap associated with the mount point that issued the ioctl command. This results in a scenario where, when fscrypt is used on file systems supporting idmapped mounts (such as ext4 or f2fs), it incorrectly compares the caller's fsuid against the owner on an unmapped disk, rather than the actual mapped owner. The practical impact is that users who should be denied access might be mistakenly granted access, or conversely, the actual owner might be erroneously denied access due to a failed permission check (-EACCES). System administrators are advised to upgrade to a Linux kernel version patched against this issue to mitigate this security risk.",
    tags_en: ["Linux Kernel", "fscrypt", "CVE-2026-74595", "ioctl", "Permission Control"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74595", lang: "EN" }
    ]
  },
  {
    id: "20260822-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 fsverity 檢查邏輯，修正 setattr_prepare() 中的不必要判斷",
    summary: "本安全公告指出 Linux 核心在處理文件系統屬性時存在一個潛在的邏輯問題。具體來說，在 `setattr_prepare()` 函數中，原先過度依賴 fs-verity 是否啟用來進行檢查。此限制導致即使檔案系統本身有包含 fsverity 相關檔案，但未明確啟用該功能，仍可能無法正確執行截斷（truncate）操作。\n修補的目的是移除這個不必要的檢查機制。這樣做能確保文件系統能夠更穩健地處理所有情況下的屬性設定和修改，提升核心元件的可靠性和兼容性。受影響產品為 Linux 核心，建議使用者應更新到包含最新修復程式碼的版本以避免此邏輯缺陷。",
    tags: ["Linux 核心", "fsverity", "setattr_prepare()", "NIST NVD", "文件系統"],
    title_en: "Linux Kernel Patch Fixes fsverity Check Logic in setattr_prepare()",
    summary_en: "This security advisory points out a potential logical flaw within the Linux kernel when handling file system attributes. Specifically, the `setattr_prepare()` function previously over-relied on whether fs-verity was enabled to perform checks. This limitation meant that even if the file system contained files related to fsverity but did not explicitly enable the feature, truncation operations might fail incorrectly.\n\nThe patch aims to remove this unnecessary checking mechanism. Doing so ensures that the file system can handle attribute setting and modification more robustly across all scenarios, thereby enhancing the reliability and compatibility of core components. The affected product is the Linux kernel, and users are advised to update to a version containing the latest fix to avoid this logical defect.",
    tags_en: ["Linux Kernel", "fsverity", "setattr_prepare()", "NIST NVD", "File System"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74596", lang: "EN" }
    ]
  },
  {
    id: "20260822-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：ip6_tunnel 處理 ICMPv6 錯誤時，防止外層封包元數據殘留導致的記憶體溢出",
    summary: "本漏洞存在於 Linux 核心的 `ip6_tunnel` 功能中。當系統使用 `ip6ip6_err()` 函數複製和傳遞外部 IPv6 ICMP 錯誤封包時，如果原始外層封包包含 Home Address Option (HAO)，其相關元數據（如 `inet6_skb_parm`）可能會殘留在內部封包的結構中。當後續呼叫 `icmpv6_send()` 並執行地址交換 (`mip6_addr_swap()`) 時，如果內層目標選項標頭格式錯誤，系統會使用這些過時的 HAO 位移值，導致查找和地址交換操作超出內層封包的範圍，進而破壞了 `skb_shared_info` 結構。修補措施要求在從外層 IPv6 ICMP 錯誤封包中提取（pull）內部 IPv6 封包之前，必須清除目標封包的相關元數據 (`skb2->cb[]`)，以確保回覆路徑不會重複使用外層堆疊留下的殘餘資料。此修補旨在增強 Linux 核心在處理複雜隧道和 ICMPv6 錯誤時的記憶體安全性和穩定性。",
    tags: ["Linux 核心", "ip6_tunnel", "ICMPv6", "CVE-2026-74597", "skb_shared_info", "記憶體安全"],
    title_en: "Linux Kernel Patch: Memory Overflow Due to Outer Packet Metadata Residue During ICMPv6 Error Handling in ip6_tunnel",
    summary_en: "This vulnerability resides within the `ip6_tunnel` functionality of the Linux kernel. When a system uses the `ip6ip6_err()` function to copy and forward external IPv6 ICMP error packets, if the original outer packet contains a Home Address Option (HAO), its associated metadata (such as `inet6_skb_parm`) may remain in the internal packet structure. Subsequently, when `icmpv6_send()` is called and an address swap (`mip6_addr_swap()`) is performed, if the inner target option header format is incorrect, the system uses these stale HAO offset values. This leads to lookups and address swap operations exceeding the bounds of the internal packet, thereby corrupting the `skb_shared_info` structure. The patch requires that the relevant metadata (`skb2->cb[]`) must be cleared before extracting (pulling) the inner IPv6 packet from the outer IPv6 ICMP error packet, ensuring that the reply path does not reuse residual data left by the outer stack. This fix aims to enhance the memory safety and stability of the Linux kernel when handling complex tunnels and ICMPv6 errors.",
    tags_en: ["Linux Kernel", "ip6_tunnel", "ICMPv6", "CVE-2026-74597", "skb_shared_info", "Memory Safety"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74597", lang: "EN" }
    ]
  },
  {
    id: "20260822-025",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 IPv6 路徑資訊選項驗證漏洞：防止讀取越界資料",
    summary: "本更新針對 Linux 核心中的一個 IPv6 相關漏洞，涉及 `rt6_route_rcv()` 函數對路徑資訊選項（Route Information option, RFC 4191）長度驗證的缺陷。原程式碼在檢查選項長度時存在「差一」的邏輯錯誤。當接收到的 Router Advertisement (RA) 包含特定配置（例如 `prefix_len=128, length=2` 或 `prefix_len=64, length=1`）時，核心會嘗試複製超出實際選項範圍的位元組數資料。這導致了越界讀取（Out-of-bounds read），使得原本不應被用戶空間看到的額外資料（如後續的鏈路層地址選項）被錯誤地寫入到路由前綴中，並暴露給用戶空間。修復措施要求嚴格拒絕 RFC 4191 未允許的選項長度組合，確保數據處理符合標準規範。",
    tags: ["Linux 核心", "IPv6", "CVE-2026-74598", "rt6_route_rcv()", "路徑資訊選項", "越界讀取"],
    title_en: "Linux Kernel Fixes IPv6 Path Option Validation Vulnerability: Prevents Out-of-Bounds Data Read",
    summary_en: "This update addresses an IPv6 vulnerability in the Linux kernel related to insufficient validation of the length of Route Information options (RFC 4191) within the `rt6_route_rcv()` function. The original code contained an off-by-one logical error when checking option lengths. When a received Router Advertisement (RA) included specific configurations (e.g., `prefix_len=128, length=2` or `prefix_len=64, length=1`), the kernel would attempt to copy more bytes than were actually available in the options. This resulted in an Out-of-bounds read, incorrectly writing additional data—such as subsequent link-layer address options that should not be visible to user space—into the route prefix and exposing it to user space. The fix mandates strict rejection of option length combinations not permitted by RFC 4191, ensuring that data processing adheres to standard specifications.",
    tags_en: ["Linux Kernel", "IPv6", "CVE-2026-74598", "rt6_route_rcv()", "Route Information Option", "Out-of-bounds read"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74598", lang: "EN" }
    ]
  },
  {
    id: "20260822-026",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復：解決 ptdump 與頁表釋放過程中的競態條件漏洞",
    summary: "本更新針對 Linux 核心內部的記憶體管理元件，特別是涉及 `mm/ptdump` 功能的競態條件（Race Condition）問題。先前已確保在處理 `init_mm` 時，頁表釋放操作會持有 mmap read lock；然而，由於 x86 和 arm64 架構允許透過 `ptdump_walk_pgd()` 在非 `init_mm` 的記憶體管理區（mm）上執行 ptdump，且核心記憶體範圍在非核心 mm 中是共享的，因此該競態條件仍存在。修復方案是在 `ptdump_walk_pgd()` 函數中取得一個巢狀的 mmap write lock 來解決此問題。此外，還更新了 `walk_page_range_debug()` 以確保對 `init_mm` 的寫入鎖定檢查，並簡化了相關程式碼。\n\n修補旨在防止 ptdump 與核心頁表釋放過程發生競態，這對於維持系統記憶體狀態的完整性至關重要。開發者應留意此類涉及底層記憶體操作和多執行緒同步機制（如 mmap lock）的更新。",
    tags: ["Linux 核心", "mm/ptdump", "競態條件", "init_mm", "x86", "arm64"],
    title_en: "Linux Kernel Fix: Addressing Race Condition Vulnerability in ptdump and Page Table Release Process",
    summary_en: "This update addresses a race condition within the Linux kernel's memory management components, specifically involving the `mm/ptdump` functionality. Previously, it was ensured that page table release operations held an mmap read lock when processing `init_mm`. However, because x86 and arm64 architectures allow ptdump to execute on memory management areas (mm) other than those associated with `init_mm` via `ptdump_walk_pgd()`, and the core kernel memory range is shared in non-core mm, this race condition persists. The fix involves acquiring a nested mmap write lock within the `ptdump_walk_pgd()` function to resolve this issue. Additionally, `walk_page_range_debug()` has been updated to ensure write locking checks for `init_mm` and related code has been simplified.\n\nThe patch aims to prevent races between ptdump and core page table release processes, which is crucial for maintaining the integrity of system memory state. Developers should pay attention to updates involving low-level memory operations and multi-threaded synchronization mechanisms (such as mmap locks).",
    tags_en: ["Linux Kernel", "mm/ptdump", "Race Condition", "init_mm", "x86", "arm64"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74599", lang: "EN" }
    ]
  },
  {
    id: "20260822-027",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復：防止特權程序利用零頁映射溢出導致的資訊洩漏漏洞",
    summary: "本漏洞存在於 Linux 核心的記憶體管理機制中，具體涉及 `mm/page_table_check` 功能。當系統處理共享零頁 PTEs 和巨大零 PMDs 等特殊映射時，原有的 page_table_check 機制仍會將其計入檔案後支援頁面數（file-backed pages）。這使得未特權程序可以透過填充足夠的零映射，導致 `file_map_count` 溢出並觸發現有的 BUG_ON() 檢查。攻擊者可利用共享零頁或巨大零映射的路徑來達成此目的。\n\n修復方案是修改用戶級別的頁表計數路徑，使其跳過對特殊零映射的計算。新的機制保留了 PTE 端的 `pte_special()` 檢查，並改為從已映射的 folio 中識別巨大的零 PMDs，而非依賴 `pmd_special()`。此修復旨在提高通用計數輔助函數的安全性，同時兼容各種架構。",
    tags: ["Linux 核心", "CVE-2026-74600", "記憶體管理", "page_table", "零頁映射"],
    title_en: "Linux Kernel Fix: Preventing Information Leakage Vulnerability via Zero Page Mapping Overflow",
    summary_en: "This vulnerability resides within the Linux kernel's memory management mechanism, specifically involving the `mm/page_table_check` function. When the system processes special mappings such as shared zero page PTEs and huge zero PMDs, the existing `page_table_check` mechanism incorrectly counts them towards file-backed pages. This allows unprivileged processes to trigger a `file_map_count` overflow by filling sufficient zero mappings, thereby triggering an existing BUG_ON() check. An attacker can exploit paths involving shared zero pages or huge zero mappings to achieve this goal.\n\nThe fix involves modifying the user-level page table counting path to skip calculation for special zero mappings. The new mechanism retains the PTE-side `pte_special()` check and instead identifies huge zero PMDs from already mapped folios, rather than relying on `pmd_special()`. This patch aims to enhance the security of general counting helper functions while maintaining compatibility across various architectures.",
    tags_en: ["Linux Kernel", "CVE-2026-74600", "Memory Management", "page_table", "Zero Page Mapping"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74600", lang: "EN" }
    ]
  },
  {
    id: "20260822-028",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復環狀緩衝區競態條件：解決 `ring-buffer` 的 CPU 緩衝區交換漏洞",
    summary: "本篇公告指出 Linux 核心中存在一個名為 ring-buffer 的環狀緩衝區（ring_buffer）的競態條件漏洞。該漏洞源於 `ring_buffer_swap_cpu()` 函數在執行緩衝區交換時，僅依賴檢查每 CPU 的提交計數器來判斷緩衝區是否正在被寫入。然而，攻擊者可以在一個特定的時間窗口內（特別是在 `rb_move_tail` 內部），使該提交計數器暫時歸零，從而繞過原本的保護機制。\n這導致在寫入操作進行中，交換操作仍可能成功執行，造成緩衝區狀態不一致。修復方案是將原有的提交計數器檢查替換為使用 `current_context` 檢查。新的上下文檢查可以在 `ring_buffer_lock_reserve()` 入口設置，並確保在整個寫入操作過程中保持有效性，從而提供一個可靠的指標來判斷緩衝區是否忙碌，防止不當交換發生。",
    tags: ["Linux 核心", "ring-buffer", "競態條件", "CVE-2026-74601", "CPU 緩衝區"],
    title_en: "Linux Kernel Fixes Ring Buffer Race Condition: Addressing the CPU Cache Swap Vulnerability in `ring-buffer`",
    summary_en: "This announcement details a race condition vulnerability found in the Linux kernel's ring buffer (`ring_buffer`). The flaw arises because the `ring_buffer_swap_cpu()` function, when performing a buffer swap, only relies on checking the commit counter of each CPU to determine if the buffer is currently being written to. However, an attacker can temporarily force this commit counter to zero within a specific time window (especially inside `rb_move_tail`), thereby bypassing the original protection mechanism.\n\nThis allows the swap operation to potentially succeed even while write operations are in progress, leading to inconsistent buffer state. The fix replaces the existing commit counter check with a use of `current_context` checking. This new context check is set up at the entry point of `ring_buffer_lock_reserve()` and ensures validity throughout the entire write operation, providing a reliable indicator of whether the buffer is busy and preventing improper swaps.",
    tags_en: ["Linux Kernel", "ring-buffer", "Race Condition", "CVE-2026-74601", "CPU Cache"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74601", lang: "EN" }
    ]
  },
  {
    id: "20260822-029",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心環形緩衝區 (ring-buffer) 漏洞：初始讀取頁面順序處理不當",
    summary: "本漏洞位於 Linux 核心的 `kernel/trace/ring_buffer.c` 文件，涉及 ring-buffer 的初始化流程。問題出在 `rb_allocate_cpu_buffer()` 函數中，缺少了對 bpage->order 的設定，導致其預設為 0。當使用此環形緩衝區且子緩衝區大小超過 PAGE_SIZE 時，若執行釋放操作 (`free_buffer_page()`)，將會依賴這個未正確設定的值，可能造成系統不穩定或安全風險。\n\n修補建議是確保在分配時，`bpage->order` 的值與實際的分配大小（即 `buffer::subbuf_order`）保持一致。開發者應參考 Linux 核心的最新提交紀錄進行升級和修復。NVD 頁面提供了詳細的版本影響分析，使用者應檢查其當前運行的 Linux 核心版本是否受到此漏洞影響。",
    tags: ["Linux 核心", "ring-buffer", "kernel/trace/ring_buffer.c", "bpage->order", "CVE-2026-74602"],
    title_en: "Linux Kernel Ring Buffer Vulnerability: Improper Handling of Initial Read Page Order",
    summary_en: "This vulnerability resides in the `kernel/trace/ring_buffer.c` file within the Linux kernel, affecting the ring-buffer initialization process. The issue lies in the `rb_allocate_cpu_buffer()` function, which fails to set `bpage->order`, causing it to default to 0. When this ring buffer is used and its sub-buffer size exceeds PAGE_SIZE, performing a release operation (`free_buffer_page()`) relies on this incorrectly set value, potentially leading to system instability or security risks.\n\nThe suggested fix is to ensure that during allocation, the value of `bpage->order` matches the actual allocated size (i.e., `buffer::subbuf_order`). Developers should refer to the latest Linux kernel commit history for upgrading and patching. The NVD page provides a detailed version impact analysis; users should check if their currently running Linux kernel version is affected by this vulnerability.",
    tags_en: ["Linux Kernel", "ring-buffer", "kernel/trace/ring_buffer.c", "bpage->order", "CVE-2026-74602"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74602", lang: "EN" }
    ]
  },
  {
    id: "20260822-030",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全公告：修復 ptp OCP 驅動程式的緩衝區溢出風險",
    summary: "本篇公告指出 Linux 核心中 `ptp` (Precision Time Protocol) 的 OCP 相關驅動程式存在一個潛在的安全漏洞。該問題發生於處理 EEPROM 板卡 ID 時，由於板卡 ID 是一個固定的 13 位元組欄位且不保證包含 NUL 終止符，若直接將其傳遞給 `devlink_info_version_fixed_put()` 函數，可能會導致讀取超出預期的欄位範圍，造成緩衝區溢出或資訊洩漏的風險。此漏洞已在 Linux 核心中得到修復。建議系統管理員應升級到最新的 Linux 核心版本，特別是那些包含修補程式的 git commit ID（如 `72ef3ce80078199bfad32f98d055f44ba7cd0c3d` 等）的版本。建議使用編譯器提供的最新安全版本來修復此問題，以確保系統穩定性與安全性。",
    tags: ["Linux 核心", "ptp", "OCP", "緩衝區溢出", "CVE-2026-74603"],
    title_en: "Linux Kernel Security Advisory: Buffer Overflow Vulnerability Fixed in ptp OCP Driver",
    summary_en: "This advisory points out a potential security vulnerability within the Linux kernel's `ptp` (Precision Time Protocol) OCP-related driver. The issue occurs when processing EEPROM board card IDs. Because the board card ID is a fixed 13-byte field and is not guaranteed to contain a NUL terminator, passing it directly to the `devlink_info_version_fixed_put()` function could lead to reading beyond the expected field range, causing a buffer overflow or information leakage risk. This vulnerability has been patched in the Linux kernel. System administrators are advised to upgrade to the latest Linux kernel version, especially those versions containing the patch commit ID (such as `72ef3ce80078199bfad32f98d055f44ba7cd0c3d`). It is recommended that users utilize the latest secure version provided by their compiler to remediate this issue, ensuring both system stability and security.",
    tags_en: ["Linux Kernel", "ptp", "OCP", "Buffer Overflow", "CVE-2026-74603"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74603", lang: "EN" }
    ]
  },
  {
    id: "20260822-031",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：熱管理驅動程式 (thermal/drivers/hwmon) 存在使用後釋放漏洞，已修復",
    summary: "本安全公告指出 Linux 核心中 `drivers/thermal/hwmon` 相關的熱管理驅動程式路徑存在一個「使用後釋放」（Use-After-Free）漏洞。此漏洞源於移除了一個有效的檢查機制，導致在錯誤處理路徑（error path）下發生記憶體操作失誤。\n\n該問題已透過回滾提交 (Revert commit 030a48b0f6ce) 的方式修復。受影響的產品為所有使用相關熱管理驅動程式的 Linux 核心版本。攻擊向量資訊顯示，此漏洞屬於低複雜度（L/AC:L）和低權限要求（PR:N），但可能導致高機密性洩露（C:H）、高完整性損害（I:H）和高可用性影響（A:H）。\n\n修補建議是升級到已包含此回滾修復的 Linux 核心版本。使用者應特別注意檢查其當前核心版本是否受到該漏洞影響，並盡快進行系統更新以確保安全。",
    tags: ["Linux 核心", "Use-After-Free", "thermal/drivers/hwmon", "CVE-2026-74604", "NIST NVD"],
    title_en: "Linux Kernel: Use-After-Free Vulnerability in Thermal Management Driver (thermal/drivers/hwmon) Patched",
    summary_en: "This security advisory reports a 'Use-After-Free' vulnerability found within the thermal management driver path `drivers/thermal/hwmon` in the Linux kernel. The flaw stems from the removal of an effective checking mechanism, leading to memory operation errors when traversing an error handling path.\n\nThe issue has been resolved by reverting commit 030a48b0f6ce. All Linux kernel versions utilizing the affected thermal management driver are vulnerable. Attack vector information indicates that this vulnerability is low complexity (L/AC:L) and requires no privileges (PR:N), but could potentially lead to high confidentiality loss (C:H), high integrity damage (I:H), and high availability impact (A:H).\n\nThe recommended mitigation is upgrading to a Linux kernel version that includes this revert fix. Users should pay special attention to checking if their current kernel version is affected by this vulnerability and perform system updates promptly to ensure security.",
    tags_en: ["Linux Kernel", "Use-After-Free", "thermal/drivers/hwmon", "CVE-2026-74604", "NIST NVD"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74604", lang: "EN" }
    ]
  },
  {
    id: "20260822-032",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 eventfs 漏洞修復：防止 rcu 列表迭代時讀取到損壞的目標資料",
    summary: "本篇公告指出 Linux 核心中的 eventfs 元件存在一個記憶體安全漏洞。當 eventfs inode 被釋放（freed）時，它會設定 `ei->is_freed` 標記並使用其 `ei->list` 將其加入到 SRCU (Synchronous Read-Copy Update) 鏈結串列中。然而，由於 `ei->list` 欄位是一個與 rcu list head 共用的聯合體（union），在沒有取得 eventfs_mutex 的情況下迭代該列表時，程式可能會錯誤地讀取到 `ei->rcu` 而非 `ei->list`，從而導致讀取到損壞的目標資料。為修復此問題，開發者需要修改 rcu list head 與 children list 的聯合體定義；在釋放 eventfs inode 時，必須設定 `is_free` 標記並執行 `smp_wmb()` memory barrier；此外，在迭代 `ei->children` 列表時，應於開始處執行 `smp_rmb()`，並檢查 `ei->is_freed`。如果該標記已設置，則表示子節點列表無效，循環必須立即退出。",
    tags: ["Linux 核心", "eventfs", "RCU", "記憶體安全", "smp_wmb()"],
    title_en: "Linux Kernel eventfs Vulnerability Fix: Preventing Reading Corrupted Target Data During rcu List Iteration",
    summary_en: "This announcement points out a memory safety vulnerability in the eventfs component of the Linux kernel. When an eventfs inode is freed, it sets the `ei->is_freed` flag and adds it to the SRCU (Synchronous Read-Copy Update) linked list using its `ei->list`. However, because the `ei->list` field is a union shared with the rcu list head, iterating this list without acquiring the eventfs_mutex can cause the program to incorrectly read `ei->rcu` instead of `ei->list`, leading to the reading of corrupted target data. To fix this issue, developers must modify the union definition for the rcu list head and children list; when freeing an eventfs inode, it is necessary to set the `is_free` flag and execute `smp_wmb()` memory barrier. Furthermore, when iterating the `ei->children` list, `smp_rmb()` should be executed at the start of the iteration, and `ei->is_freed` must be checked. If this flag is set, it indicates that the child node list is invalid, and the loop must exit immediately.",
    tags_en: ["Linux Kernel", "eventfs", "RCU", "Memory Safety", "smp_wmb()"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74605", lang: "EN" }
    ]
  },
  {
    id: "20260822-033",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：eventfs 模組存在 Use-After-Free 漏洞，可能導致系統崩潰或資訊洩露",
    summary: "本篇公告指出 Linux 核心的 eventfs 模組中存在一個使用後釋放（Use-After-Free）的安全漏洞。該漏洞發生在 `eventfs_remove_rec()` 函數內，當遞迴移除子節點時，如果最終參考計數被釋放，可能會導致底層資源（list/rcu union）被重用，而此時的讀取操作可能已經指向已被釋放的記憶體。雖然 eventfs_mutex 會序列化列表更新，但它無法保證已移除子節點的存活狀態或阻止 SRCU 回呼執行。\n\n該漏洞的攻擊向量為本地（Local），權限要求低（Low），且影響程度高（High）。修補建議是使用 `list_for_each_entry_safe()` 來安全地儲存下一個兄弟節點，以避免在遞迴移除過程中發生記憶體操作錯誤。使用者應升級到已修復的 Linux 核心版本，例如至少達到 6.8 或更新的版本。",
    tags: ["Linux 核心", "eventfs", "Use-After-Free", "CVE", "kernel", "NIST"],
    title_en: "Linux Kernel: Use-After-Free Vulnerability Found in eventfs Module, Potentially Leading to System Crash or Information Leakage",
    summary_en: "This announcement details a Use-After-Free security vulnerability found within the `eventfs` module of the Linux kernel. The flaw occurs in the `eventfs_remove_rec()` function; when recursively removing subdirectories, if the final reference count is released, it may lead to underlying resources (list/rcu union) being reused. A subsequent read operation might then point to already freed memory. Although `eventfs_mutex` serializes list updates, it cannot guarantee the liveness of removed subdirectories or prevent SRCU callbacks from executing.\n\nThe vulnerability's attack vector is Local, requiring Low privileges, and has a High impact severity. The recommended patch involves using `list_for_each_entry_safe()` to safely store the next sibling node, thereby preventing memory operation errors during recursive removal. Users should upgrade to a patched Linux kernel version, such as at least 6.8 or newer.",
    tags_en: ["Linux Kernel", "eventfs", "Use-After-Free", "CVE", "kernel", "NIST"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74606", lang: "EN" }
    ]
  },
  {
    id: "20260822-034",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 KVM 漏洞揭露：跨 VM Context 移動與銷毀時的競態條件問題",
    summary: "本漏洞存在於 Linux 核心的虛擬機管理（KVM）功能中，涉及 `sev_migrate_from()` 和 `sev_vm_destroy()` 等函數。當 KVM 執行 VM 的上下文移動或銷毀操作時，如果沒有正確持有鎖定機制，可能會導致資料結構列表被破壞。具體而言，在目標 KVM 為鏡像（mirror）的情況下，`sev_migrate_from()` 移動鏡像條目時，未能如其他寫入函數般持有所有者（owner）的鎖。此外，在 `sev_vm_destroy()` 過程中，如果主機 VM 仍在活動狀態並接收到上下文移動請求，可能導致錯誤的虛擬機接收到資源釋放呼叫 (`kvm_put_kvm()`)。開發人員指出，由於競態條件窗口極小且複雜，無法在不使用 SLAB_TYPESAFE_BY_RCU 的情況下進行安全檢查。修補建議是採用一個全局鎖定機制來保護關鍵區段，以確保資料一致性。",
    tags: ["Linux 核心", "KVM", "CVE-2026-74607", "虛擬化", "競態條件"],
    title_en: "Linux Kernel KVM Vulnerability Exposed: Race Condition During Cross-VM Context Migration and Destruction",
    summary_en: "This vulnerability resides in the Linux kernel's Virtual Machine Management (KVM) functionality, affecting functions such as `sev_migrate_from()` and `sev_vm_destroy()`. If proper locking mechanisms are not held when KVM performs VM context migration or destruction operations, it can lead to corruption of data structure lists. Specifically, when migrating a mirror entry using `sev_migrate_from()`, the owner's lock is not acquired as required by other write functions. Furthermore, during `sev_vm_destroy()`, if the host VM remains active and receives a context migration request, it may result in an incorrect virtual machine receiving resource release calls (`kvm_put_kvm()`). Developers noted that due to the extremely small and complex race condition window, implementing safety checks without using SLAB_TYPESAFE_BY_RCU is not feasible. The suggested fix involves adopting a global locking mechanism to protect critical sections, thereby ensuring data consistency.",
    tags_en: ["Linux Kernel", "KVM", "CVE-2026-74607", "Virtualization", "Race Condition"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74607", lang: "EN" }
    ]
  },
  {
    id: "20260822-035",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 smb 客戶端修復 use-after-free 漏洞，防止資料殘留與記憶體操作錯誤",
    summary: "本公告指出 Linux 核心中的 SMB 客戶端元件存在一個使用後釋放 (use-after-free) 的安全漏洞。該漏洞發生在 `cifs_try_adding_channels()` 函數中，當建立通道失敗時，程式碼會不當地處理資源參考計數器，可能導致在執行完畢後存取已釋放的記憶體區域。攻擊者若能利用此缺陷，理論上可能造成系統崩潰或執行惡意代碼。\n\n修復措施要求在增加 `weight_fulfilled` 之前，先將臨時資源參考計數器移除，以確保目標結構體 (iface) 在最終存取時仍保持有效。NIST 已提供多個 Git Commit ID 和版本範圍的更新資訊，建議所有使用 Linux 核心環境的系統管理員應立即根據官方指引進行升級。\n\n修補建議：請將您的 Linux 核心升級至受影響版本所指定的最新安全版本，以避免利用此類記憶體操作錯誤。",
    tags: ["Linux 核心", "smb", "use-after-free", "cifs_try_adding_channels", "NIST", "CVE-2026-74608"],
    title_en: "Linux Kernel SMB Client Patches Use-After-Free Vulnerability to Prevent Data Leakage and Memory Manipulation Errors",
    summary_en: "This advisory reports a use-after-free vulnerability in the SMB client component of the Linux kernel. The flaw resides within the `cifs_try_adding_channels()` function, where improper handling of resource reference counters can occur when channel creation fails. This may lead to accessing already freed memory regions after execution completes. An attacker exploiting this defect could theoretically cause a system crash or execute malicious code.\n\nThe remediation requires removing the temporary resource reference counter before incrementing `weight_fulfilled`, ensuring that the target structure (iface) remains valid during final access. NIST has provided multiple Git Commit IDs and version ranges for updates, advising all system administrators using Linux kernel environments to upgrade immediately following official guidelines.\n\nPatch Recommendation: System administrators should upgrade their Linux kernel to the latest secure version specified for the affected release to prevent exploitation of this type of memory manipulation error.",
    tags_en: ["Linux Kernel", "smb", "use-after-free", "cifs_try_adding_channels", "NIST", "CVE-2026-74608"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74608", lang: "EN" }
    ]
  },
  {
    id: "20260822-036",
    trackers: ["security"],
    category: "法規與標準",
    title: "TikTok 支付 4 億美元和解金，解決美國違反兒童隱私法案指控",
    summary: "美國司法部（DoJ）宣布，旗下擁有 TikTok 的 ByteDance 將支付 4 億美元以了結一項 2024 年的訴訟。該訴訟的核心指控是 TikTok 嚴重違反美國《兒童線上隱私保護法》（COPPA），被指控知情允許未滿 13 歲的兒童創建帳號，並非法收集使用「Kids Mode」功能數據。此外，DoJ 還指出 TikTok 和其母公司 ByteDance 未能履行處理父母要求刪除兒童帳號和資訊的義務。\n\n本次和解金被 DoJ 定性為在美國聯邦兒童隱私法方面取得的重大回收。文章提到，TikTok 隨後已實施了廣泛措施，以加強對年輕用戶的安全保護、強化年齡相關控制以及改善父母監督機制。\n\n值得注意的是，這並非 TikTok 首次面臨監管壓力。早在 2023 年 9 月，TikTok 就曾因處理兒童個人資料違反歐盟《通用數據保護條例》（GDPR），被處以高額罰款。",
    tags: ["TikTok", "ByteDance", "COPPA", "GDPR", "兒童隱私", "美國司法部 (DoJ)"],
    title_en: "TikTok Pays $400 Million Settlement to Resolve US Allegations of Violating Children's Privacy Law",
    summary_en: "The U.S. Department of Justice (DoJ) announced that ByteDance, the parent company of TikTok, will pay $400 million to settle a 2024 lawsuit. The core allegation in the suit was that TikTok severely violated the US Children's Online Privacy Protection Act (COPPA), accused of knowingly allowing minors under 13 to create accounts and illegally collecting data using its 'Kids Mode' feature. Furthermore, the DoJ noted that both TikTok and ByteDance failed to fulfill their obligations regarding the processing of parental requests to delete child accounts and information.\n\nThis settlement is characterized by the DoJ as a significant recovery in US federal children's privacy law enforcement. The article mentions that TikTok has since implemented extensive measures to enhance safety protections for young users, strengthen age-appropriate controls, and improve parental supervision mechanisms.\n\nIt is noteworthy that this is not the first time TikTok has faced regulatory pressure. As early as September 2023, TikTok was fined a substantial amount for mishandling children's personal data in violation of the EU General Data Protection Regulation (GDPR).",
    tags_en: ["TikTok", "ByteDance", "COPPA", "GDPR", "Children's Privacy", "DoJ"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/tiktok-agrees-to-400-million-settlement.html", lang: "EN" }
    ]
  },
  {
    id: "20260822-037",
    trackers: ["os"],
    category: "Windows",
    title: "微軟推出「Outlook Classic」主題，協助用戶平穩過渡至 New Outlook",
    summary: "為幫助習慣使用傳統介面的用戶順利轉移到新版電子郵件客戶端 New Outlook，微軟宣布在 Outlook for Windows 和 Outlook on the web 中新增了可選的「Outlook Classic」主題功能。透過啟用此主題，New Outlook 的視覺風格、佈局、字體和圖示將會模仿經典版本的樣貌，以增加用戶的熟悉感。\n\n然而，文章強調這僅是一個「主題」（theme）更新，而非底層功能的重構或原生應用程式的重建。Outlook Classic 是原生的 Win32 應用程式，而 New Outlook 基於 WebView2 技術。因此，儘管視覺上相似，但其核心功能和行為仍屬於現代化的 Web App 架構。\n\n微軟表示，此主題將作為過渡策略的一部分，可能會預設為部分從 Classic Outlook 遷移的用戶啟用，以提供更平滑的使用體驗。該功能不會強制使用者使用 New Outlook，也不會覆蓋現有的管理員配置。儘管微軟仍計劃在 2027 年逐步推動用戶轉向 New Outlook，但提供了明確的可選擇退出（opt-out）選項。",
    tags: ["Microsoft", "Outlook", "New Outlook", "WebView2", "Win32"],
    title_en: "Microsoft Launches 'Outlook Classic' Theme to Facilitate Transition to New Outlook",
    summary_en: "To help users accustomed to the traditional interface smoothly transition to the new email client, New Outlook, Microsoft has announced an optional 'Outlook Classic' theme feature in both Outlook for Windows and Outlook on the web. By enabling this theme, New Outlook's visual style, layout, fonts, and icons will mimic those of the classic version, enhancing user familiarity.\n\nHowever, the article emphasizes that this is merely a 'theme' update, not an underlying functional refactoring or native application rebuild. Since Outlook Classic is a native Win32 application while New Outlook is built on WebView2 technology, its core functionality and behavior remain within a modernized Web App architecture, despite visual similarities.\n\nMicrosoft stated that this theme will be part of a transition strategy and may be enabled by default for users partially migrating from Classic Outlook to provide a smoother user experience. The feature does not force users to use New Outlook, nor does it override existing administrator configurations. Although Microsoft still plans to gradually guide users toward New Outlook in 2027, it provides clear opt-out options.",
    tags_en: ["Microsoft", "Outlook", "New Outlook", "WebView2", "Win32"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/23/microsoft-built-a-classic-outlook-skin-for-new-outlook-to-win-over-users-who-wont-switch", lang: "EN" }
    ]
  },
  {
    id: "20260822-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl Punk::OAuth2::Server 存在 CVE-2026-75866 漏洞，允許未經授權的範圍（Scope）獲取存取令牌",
    summary: "CPAN Security Group 發布關於 Punk::OAuth2::Server 的安全公告，揭露了版本透過 0.03 的 CVE-2026-75866 漏洞。此漏洞屬於 CWE-862 Missing Authorization，其本質在於 OAuth2 授權流程中缺乏足夠的授權路徑檢查。\n\n受影響的系統允許攻擊者即使客戶端（client）僅註冊了某種授權類型（grant_type），仍能透過請求其他未註冊的 grant_type，將任意指定的 Scope 傳遞給簽發方。由於 Punk::OAuth2::Server 的 `authorize` 和 `token` 處理邏輯未能充分比較和驗證所要求的 Scope 與客戶端實際註冊的範圍，攻擊者可以取得攜帶任何指定 Scope 的有效存取令牌（access token）。\n\n實務影響上，這意味著一個已註冊的客戶端可以獲得比其權限更廣泛、包含任意 Scope 的 Token。若資源伺服器運行 Punk::OAuth2::Checker 並信任該 Token，則會授權攻擊者執行超出預期範圍的操作。\n\n修補建議是立即升級到 Punk-OAuth2 0.04 或更高版本。此外，在 Proxy 層面實作工作區（Workarounds）的防禦措施，即拒絕要求未註冊 grant_type 或 Scope 的 Token/授權請求。",
    tags: ["CVE-2026-75866", "Punk::OAuth2::Server", "Perl", "OAuth2", "CWE-862", "存取令牌"],
    title_en: "CVE-2026-75866 Vulnerability in Perl Punk::OAuth2::Server Allows Unauthorized Scope Acquisition for Access Tokens",
    summary_en: "The CPAN Security Group has issued a security advisory regarding Punk::OAuth2::Server, revealing the CVE-2026-75866 vulnerability in versions prior to 0.03. This flaw falls under CWE-862 Missing Authorization, stemming from insufficient authorization path checking within the OAuth2 authorization flow.\n\nThe affected system allows an attacker to pass any specified Scope by requesting an unregistered `grant_type`, even if the client has only registered for a specific grant type. Because Punk::OAuth2::Server's `authorize` and `token` handling logic fails to adequately compare and validate the requested Scope against the scopes actually registered by the client, an attacker can obtain a valid access token carrying any specified scope.\n\nIn practical terms, this means a registered client can acquire a Token with a broader scope than its authorized permissions, including arbitrary scopes. If a resource server runs Punk::OAuth2::Checker and trusts such a Token, it will authorize the attacker to perform operations beyond the expected scope.\n\nThe recommended fix is to immediately upgrade to Punk-OAuth2 0.04 or higher. Additionally, implementing defensive measures at the Proxy layer—specifically rejecting Token/authorization requests that require unregistered grant types or scopes—is advised.",
    tags_en: ["CVE-2026-75866", "Punk::OAuth2::Server", "Perl", "OAuth2", "CWE-862", "access token"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/22/6", lang: "EN" }
    ]
  },
  {
    id: "20260822-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CVE-2026-75870：Perl Punk 函式庫版本低於 0.18，因預設 HMAC 金鑰空值導致會話 Cookie 可偽造",
    summary: "資安研究指出 Perl 的 Punk 模組（版本低於 0.18）存在一個嚴重的安全漏洞 CVE-2026-75870。此漏洞的根本原因是在宣告會話時，若未提供密鑰 (secret)，系統將預設使用空字串作為 HMAC-SHA256 金鑰進行簽署與驗證。這使得攻擊者僅需了解 Cookie 格式，即可離線偽造包含任何內容（例如使用者識別碼或角色）的有效會話 Cookie。由於此類錯誤配置在運行時不會觸發警告或拒絕啟動，導致風險極高。\n\n修復建議方面，開發人員應立即升級 Punk 到 0.18 或更高版本。若無法即時升級，可透過在宣告 `session` 時明確指定一個非空字串作為密鑰 (secret)，因為此方法會強制系統失敗關閉（fail closed），能將缺失的配置路徑或未設定的環境變數轉化為啟動錯誤，從而提高安全性。",
    tags: ["CVE-2026-75870", "Punk", "Perl", "會話偽造", "HMAC-SHA256", "CWE-1394"],
    title_en: "CVE-2026-75870: Session Cookie Forgery in Perl Punk Library Versions Below 0.18 Due to Default Empty HMAC Key",
    summary_en: "Security research has identified a critical vulnerability, CVE-2026-75870, in the Perl Punk module (versions below 0.18). The root cause of this vulnerability is that when declaring a session without providing a secret key, the system defaults to using an empty string as the HMAC-SHA256 key for signing and verification. This allows attackers who only understand the cookie format to forge valid session cookies containing any arbitrary content (such as user IDs or roles) offline. Because this type of misconfiguration does not trigger warnings or prevent startup during runtime, the risk is extremely high.\n\nFor remediation, developers should immediately upgrade Punk to version 0.18 or higher. If immediate upgrading is not possible, they can explicitly specify a non-empty string as the secret key when declaring `session`. This method forces the system to fail closed, converting missing configuration paths or unset environment variables into startup errors, thereby enhancing security.",
    tags_en: ["CVE-2026-75870", "Punk", "Perl", "Session Forgery", "HMAC-SHA256", "CWE-1394"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/22/5", lang: "EN" }
    ]
  },
  {
    id: "20260822-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CHIRP應用程式Kenwood ITM驅動程式存在評估注入漏洞，可透過惡意無線電檔案執行任意代碼",
    summary: "開源的愛好電台編程應用 CHIRP 的 Kenwood ITM 檔案格式驅動程式存在一個評估注入（Eval Injection）漏洞 (NotCVE-2026-0013)。攻擊者只需誘騙使用者開啟一個經過精心製作的惡意無線電檔案，即可在不需任何對話框或確認的情況下執行任意 Python 代碼。此漏洞源於 `chirp/drivers/kenwood_itm.py` 檔案中，ITMRadio._clean_tmode() 方法直接將從 CSV 欄位讀取的兩個攻擊者控制字串 (TXSIG, RXSIG) 傳遞給了內建的 Python eval() 函數。原始程式碼預期這些值為數值型 CTCSS 音調，但缺乏類型檢查或解析步驟，導致任何放置在該欄位的 Python 表達式都會在檔案載入時被執行。受影響版本包括但不限於 chirp-next 直到及包含 chirp-next-20260814。修補建議是移除所有 eval() 呼叫，並改用更安全的解析函數 kenwood_tone.parse_qtdqt() 來處理音調數據。",
    tags: ["CHIRP", "Kenwood", "ITM", "Eval Injection", "NotCVE-2026-0013", "Python"],
    title_en: "CHIRP Application's Kenwood ITM Driver Contains Eval Injection Vulnerability, Allowing Arbitrary Code Execution via Malicious Radio File",
    summary_en: "The open-source amateur radio programming application CHIRP's Kenwood ITM file format driver contains an Eval Injection vulnerability (NotCVE-2026-0013). An attacker only needs to trick a user into opening a specially crafted malicious radio file to execute arbitrary Python code without requiring any dialog box or confirmation. The vulnerability stems from the `chirp/drivers/kenwood_itm.py` file, where the ITMRadio._clean_tmode() method directly passes two attacker-controlled strings (TXSIG, RXSIG) read from CSV fields into the built-in Python eval() function. The original code expected these values to be numerical CTCSS tones but lacked type checking or parsing steps, allowing any Python expression placed in those fields to be executed upon file loading. Affected versions include, but are not limited to, chirp-next up to and including chirp-next-20260814. The recommended fix is to remove all eval() calls and use the more secure parsing function kenwood_tone.parse_qtdqt() for handling tone data.",
    tags_en: ["CHIRP", "Kenwood", "ITM", "Eval Injection", "NotCVE-2026-0013", "Python"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/22/4", lang: "EN" }
    ]
  },
  {
    id: "20260822-041",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Emacs 核心功能 TRAMP 存在零點擊本地命令執行漏洞，安全社群關注修復時程",
    summary: "資安研究人員指出 Emacs 編輯器中的 TRAMP 功能可能存在一個允許零點擊（zero-click）本地命令執行的嚴重安全漏洞。TRAMP (Templating and Remote Access Mechanism) 是 Emacs 用於處理模板和遠端存取的核心機制，若未經適當修復，攻擊者可能利用此功能在不需用戶互動的情況下執行系統指令。由於這類漏洞的性質，其潛在影響範圍極大，可能導致本地系統被完全控制。\n\n目前社群正在討論該問題是否會在 Emacs 31 版本中得到修復。雖然原文未提供具體的 CVE 編號、CVSS 分數或受影響版本列表，但此漏洞的本質屬於核心功能缺陷，若不加修補將構成重大的本地執行風險。\n\n建議使用者密切關注 Emacs 開發社群和官方安全公告，並留意是否有針對 TRAMP 機制的緊急修補程式釋出。對於開發者而言，應審慎評估使用 TRAMP 功能時的輸入驗證機制，以最小化潛在的命令注入風險。",
    tags: ["Emacs", "TRAMP", "本地命令執行", "零點擊攻擊", "核心功能缺陷"],
    title_en: "Emacs Core Feature TRAMP Vulnerable to Zero-Click Local Command Execution; Security Community Monitors Patch Timeline",
    summary_en: "Cybersecurity researchers have pointed out a severe vulnerability in the Emacs editor's TRAMP feature that could allow for zero-click local command execution. TRAMP (Templating and Remote Access Mechanism) is a core mechanism used by Emacs for handling templates and remote access. If not properly patched, an attacker could exploit this function to execute system commands without requiring user interaction. Due to the nature of such vulnerabilities, the potential impact range is vast, potentially leading to complete local system compromise.\n\nThe community is currently discussing whether this issue will be addressed in Emacs version 31. Although the original text does not provide a specific CVE ID, CVSS score, or list of affected versions, the vulnerability's nature is that of a core functional flaw; without patching, it constitutes a significant local execution risk.\n\nUsers are advised to closely monitor the Emacs development community and official security announcements for any emergency patches targeting the TRAMP mechanism. For developers, it is recommended to carefully evaluate input validation mechanisms when using TRAMP functionality to minimize potential command injection risks.",
    tags_en: ["Emacs", "TRAMP", "Local Command Execution", "Zero-Click Attack", "Core Feature Flaw"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/22/3", lang: "EN" }
    ]
  },
  {
    id: "20260822-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl 模組 Tie::Hash::Regex 發佈 CVE-2026-77781：舊版在處理無效查找鍵時會拋出異常",
    summary: "CPAN Security Group 發布了關於 Perl 模組 Tie::Hash::Regex 的安全公告，編號為 CVE-2026-77781。受影響的版本是所有早於 2.0.0 的版本。該漏洞的描述指出，當使用 FETCH、EXISTS 或 DELETE 等方法時，如果查找鍵包含格式錯誤的正規表達式（malformed regular expressions），程式將會拋出未捕獲的異常（Uncaught Exception）。這是因為這些方法在找不到鍵時，會嘗試使用呼叫者的鍵與裸露的 `qr//` 進行匹配，而這個過程沒有執行保護（eval guard）。如果輸入的鍵不是有效的正規表達式模式（例如單個不匹配的括號），應用程式將會崩潰。此問題主要影響那些依賴外部供應字串作為查找鍵的應用程式。修復建議是立即升級到 Tie::Hash::Regex 2.0.0 或更高版本。對於無法升級的部署，應確保所有檢查鍵存在、獲取值或刪除鍵的操作都用 `eval` 區塊包裹，以防止異常導致系統崩潰。",
    tags: ["CVE-2026-77781", "Tie::Hash::Regex", "Perl", "CPAN Security Group", "Uncaught Exception", "正規表達式"],
    title_en: "Perl Module Tie::Hash::Regex Issues CVE-2026-77781: Older Versions Throw Exceptions When Handling Invalid Lookup Keys",
    summary_en: "The CPAN Security Group has issued a security advisory regarding the Perl module Tie::Hash::Regex, assigned CVE-2026-77781. All versions prior to 2.0.0 are affected. The vulnerability description notes that when methods such as FETCH, EXISTS, or DELETE are used with lookup keys containing malformed regular expressions, the program will throw an Uncaught Exception. This occurs because these methods attempt to match the caller's key against a bare `qr//` when the key is not found, and this process lacks execution protection (eval guard). If the input key is not a valid regular expression pattern (for example, a single unmatched parenthesis), the application will crash. This issue primarily affects applications that rely on external supply strings as lookup keys. The recommended fix is to immediately upgrade to Tie::Hash::Regex 2.0.0 or later. For deployments that cannot be upgraded, it is advised to wrap all operations involving checking for key existence, retrieving values, or deleting keys within an `eval` block to prevent exceptions from causing system crashes.",
    tags_en: ["CVE-2026-77781", "Tie::Hash::Regex", "Perl", "CPAN Security Group", "Uncaught Exception", "Regular Expression"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/22/2", lang: "EN" }
    ]
  },
  {
    id: "20260822-043",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux核心Open vSwitch資料路徑漏洞 (CVE-2026-64531)：允許未授權使用者執行Root程式碼",
    summary: "本漏洞為Linux核心的Open vSwitch（OVS）資料路徑中的一個本地Root權限提升漏洞，編號為CVE-2026-64531。攻擊者利用此缺陷，可以在未特權使用者環境下取得root級別的程式碼執行權限。受影響條件包括：系統必須具備OVS核心資料路徑和conntrack/FTP-helper支援；且需啟用未特權使用者命名空間（unprivileged user namespaces），或攻擊者擁有CAP_NET_ADMIN權限。\n\n漏洞本質在於Open vSwitch處理用戶空間動作清單時，將其重寫為內部sw_flow_actions串。當生成的動作超過65,535位元組時，儲存該長度的16位元組nla_len欄位會發生環繞（wrap），導致後續解析器信任這個被環繞的短長度，並從數據流內部繼續解析。攻擊者可植入偽造動作，進而實現核心指標洩漏、記憶體讀取和目標遞減原語，最終達到覆寫主機程序憑證並寫入sudoers規則以執行root程式碼。\n\n修補建議：相關的穩定版本已發布修復。包括5.15.212, 6.1.178, 6.6.145, 6.12.97, 6.18.40，以及7.1.5等。\n\n受影響的發行版涵蓋AlmaLinux、Alpine Linux、Amazon Linux、Arch Linux、CentOS Stream、Debian和Fedora等多個主流Linux作業系統。",
    tags: ["CVE-2026-64531", "Open vSwitch", "Linux kernel", "Root權限提升", "未特權使用者命名空間"],
    title_en: "Linux Kernel Open vSwitch Data Path Vulnerability (CVE-2026-64531): Allows Unauthorized User to Execute Root Code",
    summary_en: "This vulnerability is a local root privilege escalation flaw in the data path of Open vSwitch (OVS) within the Linux kernel, designated as CVE-2026-64531. An attacker can exploit this defect to gain root-level code execution from an unprivileged user environment. Affected conditions include: the system must have OVS kernel data path and conntrack/FTP-helper support; and either unprivileged user namespaces must be enabled, or the attacker must possess CAP_NET_ADMIN capability.\n\nThe core of the vulnerability lies in how Open vSwitch rewrites user-space action lists into an internal `sw_flow_actions` array. When the generated actions exceed 65,535 bytes, the 16-bit `nla_len` field storing this length overflows (wraps), causing subsequent parsers to trust this wrapped short length and continue parsing from within the data stream. An attacker can inject fabricated actions, thereby achieving kernel pointer leakage, memory read primitives, and a target decrement primitive, ultimately leading to overwriting host process credentials and writing to sudoers rules to execute root code.\n\nMitigation: Relevant stable versions have been released with fixes, including 5.15.212, 6.1.178, 6.6.145, 6.12.97, 6.18.40, and 7.1.5.\n\nThe affected distributions cover multiple mainstream Linux operating systems, including AlmaLinux, Alpine Linux, Amazon Linux, Arch Linux, CentOS Stream, Debian, and Fedora.",
    tags_en: ["CVE-2026-64531", "Open vSwitch", "Linux kernel", "Privilege Escalation", "Unprivileged User Namespaces"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/22/1", lang: "EN" }
    ]
  },
  {
    id: "20260822-044",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳推出首款觸控螢幕MacBook Pro，搭載Tandem OLED與Dynamic Island",
    summary: "根據市場傳聞，蘋果（Apple）預計將在今年十月推出第一款具備觸控功能的MacBook MacBook Pro。這款設備除了支援觸控介面外，還將採用類似iPad Pro的Tandem OLED顯示器，提供極佳的色彩和對比度。此外，它也可能配備較小的Dynamic Island功能區塊。\n在軟體層面，macOS 27預計會針對觸控操作進行優化，例如當用戶點擊按鈕或控制項時，介面周圍會彈出提供更多相關選項的選單。硬體方面，雖然最初有傳聞搭載M6 Pro/Max晶片，但蘋果目前選擇跳過此代次，直接使用現有的M5 Pro和M5 Max晶片。\n設計上，新機型預計會比前代更纖薄輕巧。儘管這款觸控MacBook的發布時間點（十月）與後續傳聞中的M7晶片版本（三至五月）存在時間差，但整體而言，它被視為一次令人期待的重大升級。",
    tags: ["Apple", "MacBook Pro", "觸控螢幕", "Tandem OLED", "Dynamic Island", "macOS 27"],
    title_en: "Apple rumored to launch first touchscreen MacBook Pro featuring Tandem OLED and Dynamic Island",
    summary_en: "According to market rumors, Apple is expected to release the first touch-enabled MacBook Pro this October. In addition to supporting a touch interface, the device will adopt a Tandem OLED display similar to the iPad Pro, offering excellent color and contrast. Furthermore, it may be equipped with a smaller Dynamic Island feature area. On the software front, macOS 27 is expected to be optimized for touch operations; for example, when users tap a button or control, a menu providing more relevant options will pop up around the interface. Regarding hardware, although initial rumors suggested the inclusion of M6 Pro/Max chips, Apple has reportedly skipped this generation and will directly use the existing M5 Pro and M5 Max chips. In terms of design, the new model is expected to be thinner and lighter than its predecessor. Although there is a time gap between the rumored launch date of the touchscreen MacBook (October) and the subsequent rumored M7 chip version (March to May), overall, it is considered an exciting major upgrade.",
    tags_en: ["Apple", "MacBook Pro", "Touchscreen", "Tandem OLED", "Dynamic Island", "macOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/22/touchscreen-macbook-ultra-coming-soon-heres-whats-coming", lang: "EN" }
    ]
  },
  {
    id: "20260822-045",
    trackers: ["os"],
    category: "Android",
    title: "Google 推出 Android Pulse App：用於系統資源異常偵測的診斷工具",
    summary: "Google 近期在 Google Play Store 上推出了名為「Android Pulse」的第一方應用程式。該應用程式（套件名稱為 com.google.android.apps.pulse）並非惡意軟體，而是專門用於系統層級的診斷與除錯工具。根據 Google 的說明，它能協助進行 Android 作業系統及已安裝應用程式在關鍵系統資源消耗方面的異常偵測和規則分發。實務上，「關鍵系統資源」可能指電池、CPU 或記憶體使用情況等。該 App 已預裝於 Pixel 裝置上，並在系統設定中顯示為「Pulse」。雖然此功能沒有使用者介面供操作，但它對於開發者或資安人員診斷 OS 本身及應用程式的效能異常具有潛力。目前有觀察到其作為可手動更新的 App 出現於 Play Store，這代表 Google 在系統服務更新機制上進行了變更。",
    tags: ["Google", "Android Pulse", "診斷工具", "系統資源監控", "Pixel"],
    title_en: "Google Launches Android Pulse App: A Diagnostic Tool for Detecting System Resource Anomalies",
    summary_en: "Google recently launched a first-party application on the Google Play Store called \"Android Pulse.\" This application (package name com.google.android.apps.pulse) is not malware, but rather a specialized diagnostic and debugging tool designed for system-level use. According to Google's description, it assists in detecting anomalies and distributing rules regarding key system resource consumption within the Android operating system and installed applications. Practically speaking, \"key system resources\" may refer to usage patterns such as battery, CPU, or memory. The App is pre-installed on Pixel devices and appears in system settings as \"Pulse.\" Although this feature lacks a user interface for direct operation, it holds potential for developers or security professionals diagnosing performance anomalies of the OS itself and installed applications. It has been observed that the app appears in the Play Store as a manually updatable application, indicating changes Google has made to its system service update mechanism.",
    tags_en: ["Google", "Android Pulse", "Diagnostic Tool", "System Resource Monitoring", "Pixel"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/22/android-pulse-app-google-play", lang: "EN" }
    ]
  },
  {
    id: "20260822-046",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列推出新相機處理功能，提升用戶對照片外觀的控制權",
    summary: "本文介紹 Google 最新發布的 Pixel 11 手機系列。雖然與前代 Pixel 10 機型相比，整體設計變化不大，但它提供了一項顯著的「生活品質改善」——一套全新的相機處理選項。這讓用戶能夠更精細地控制照片最終的外觀效果。作者在提及即將到來的 iPhone 18 Pro 發布活動時，表達了希望 Apple 能推出類似此類提升攝影體驗、增加使用者控制權的功能。",
    tags: ["Google Pixel 11", "相機處理", "Pixel 10", "Apple"],
    title_en: "Google Pixel 11 Series Introduces New Camera Processing Features, Enhancing User Control Over Photo Appearance",
    summary_en: "This article introduces Google's latest Pixel 11 smartphone series. Although the overall design hasn't changed significantly compared to the previous generation Pixel 10 model, it offers a notable 'quality-of-life improvement': an entirely new set of camera processing options. This allows users to control the final appearance and effect of photos with greater precision. The author mentions the upcoming iPhone 18 Pro launch event, expressing hope that Apple will introduce similar features that enhance the photography experience and increase user control.",
    tags_en: ["Google Pixel 11", "Camera Processing", "Pixel 10", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/22/pixel-11-new-camera-feature-apple-should-copy", lang: "EN" }
    ]
  },
  {
    id: "20260822-047",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple iPhone 18 Pro 系列與首款折疊機預計於 2026 年九月發表，重點關注新產品線規劃",
    summary: "本文非資安新聞，而是科技趨勢分析。文章推測 Apple 的下一場 iPhone 活動將在 2026 年 9 月舉行，並預計發布三款旗艦機型：iPhone 18 Pro、iPhone 18 Pro Max，以及首款折疊式手機 iPhone Ultra。值得注意的是，標準的 iPhone 18 機型被預期會延後至 2027 年春季發表。\n\n根據 Apple 近年的活動紀錄，若遵循其「提前兩週宣布」的模式，本次活動邀請函最有可能在 2026 年 8 月 26 日發出。此次活動除了新手機外，也預計會同步展示新款 Apple Watch 硬體和 AirPods。\n\n此外，文章提及了公司高層變動：John Ternus 將於 9 月 1 日接任 CEO，這將標誌著蘋果史上首場「Ternus 時代」的 iPhone 活動。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone Ultra", "折疊手機", "產品發表", "科技趨勢"],
    title_en: "Apple iPhone 18 Pro Series and First Foldable Phone Expected to Launch in September 2026, Focusing on New Product Line Planning",
    summary_en: "This article is a technology trend analysis, not a cybersecurity news report. It speculates that Apple's next iPhone event will take place in September 2026, where it is expected to unveil three flagship models: the iPhone 18 Pro, the iPhone 18 Pro Max, and the first foldable phone, the iPhone Ultra. Notably, the standard iPhone 18 model is anticipated to be delayed until Spring 2027.\n\nBased on Apple's recent event history, if they follow their pattern of announcing two weeks in advance, the invitation for this event is most likely to be issued on August 26, 2026. In addition to new phones, the event is also expected to showcase updated Apple Watch hardware and AirPods.\n\nFurthermore, the article mentions executive changes: John Ternus will take over as CEO on September 1st, marking the start of an 'Apple's first Ternus era' iPhone event.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone Ultra", "Foldable Phone", "Product Launch", "Tech Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/22/iphone-18-pro-event-date-when-announcement", lang: "EN" }
    ]
  },
  {
    id: "20260822-048",
    trackers: ["os"],
    category: "重點關注",
    title: "IT領導者期待AI管理Mac設備，但新報告顯示許多企業尚未準備就緒",
    summary: "根據Fleet發布的最新調查報告，該報告針對超過500位負責大型企業（員工2,000人以上）設備管理的IT決策者進行了問卷調查。結果指出，儘管許多公司和IT領導者普遍期望將人工智慧（AI）應用於Mac設備管理，但他們認為目前大多數組織在實際部署和使用這項技術方面仍處於非常初期的階段。\n\n報告強調了企業對未來AI化IT管理的期待與現實之間的落差。對於尋求提升效率、自動化流程的IT部門而言，了解當前成熟度至關重要。雖然原文未提供具體的漏洞或安全細節，但此趨勢顯示出Apple生態系統在設備管理和營運層面正朝向AI驅動的自動化方向發展。",
    tags: ["Apple", "Mac", "AI", "IT管理", "企業設備管理"],
    title_en: "IT Leaders Expect AI to Manage Mac Devices, But New Report Shows Many Enterprises Are Not Yet Ready",
    summary_en: "According to the latest survey report released by Fleet, which surveyed over 500 IT decision-makers responsible for managing devices in large enterprises (with more than 2,000 employees), the findings indicate that although many companies and IT leaders generally expect to apply Artificial Intelligence (AI) to Mac device management, they believe most organizations are still in a very early stage regarding the actual deployment and use of this technology.\n\nThe report highlights the gap between corporate expectations for future AI-driven IT management and current reality. Understanding the current maturity level is crucial for IT departments seeking to improve efficiency and automate processes. While the original text does not provide specific vulnerabilities or security details, this trend suggests that the Apple ecosystem is moving toward an AI-driven automation direction in terms of device management and operations.",
    tags_en: ["Apple", "Mac", "AI", "IT Management", "Enterprise Device Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/22/apple-work-most-it-leaders-want-ai-to-manage-their-macs-but-few-are-ready-for-it", lang: "EN" }
    ]
  },
  {
    id: "20260822-049",
    trackers: ["os"],
    category: "重點關注",
    title: "美國政府擬撤銷「無路區規則」威脅，可能擾亂阿拉斯加等地的野生動物與水資源生態",
    summary: "本文討論了美國國家森林系統中剩餘的「無路區」（Roadless Area）面臨的重大威脅。該規則最初於 2001 年由總統 Bill Clinton 發布，旨在保護全國森林系統內已列入清單的無路區，禁止進行道路建設、維護和商業伐木。目前，美國政府（文中提及 Trump administration）提議撤銷此項規則，主張移除限制將加速經濟發展，並涉及近 5900 萬英畝國家森林。\n\n生態學家指出，保留無路區對於環境健康、潔淨水源、野生動物生存和人類福祉具有極大價值。除了聯邦層面的提議外，國會也正在透過修訂《Wildfire Prevention Act》等方式，尋求立法移除該規則並防止其未來恢復。\n\n這項政策的變動將對如阿拉斯加 Tongass National Forest 等地的生態系統產生實質影響，可能威脅到熊、老鷹和鮭魚等物種賴以生存的原生林棲地。",
    tags: ["Roadless Rule", "國家森林系統", "環境保護", "阿拉斯加", "野生動物"],
    title_en: "US Government Proposed Repeal of 'Roadless Area Rule' Threatens Wildlife and Water Resources in Alaska",
    summary_en: "This article discusses the significant threat facing remaining 'Roadless Areas' within the U.S. National Forest System. The rule was originally established in 2001 by President Bill Clinton to protect designated roadless areas across the national forest system, prohibiting road construction, maintenance, and commercial logging. Currently, the US government (as mentioned in the text, referencing the Trump administration) has proposed repealing this rule, arguing that removing restrictions will accelerate economic development and affects nearly 59 million acres of national forest.\n\nEcologists point out that preserving these roadless areas holds immense value for environmental health, clean water sources, wildlife survival, and human well-being. Beyond federal proposals, Congress is also seeking to legislatively remove the rule and prevent its future reinstatement through amendments like the Wildfire Prevention Act.\n\nThis policy change could have substantial impacts on ecosystems in places like Alaska's Tongass National Forest, potentially threatening native forest habitats crucial for species such as bears, eagles, and salmon.",
    tags_en: ["Roadless Rule", "National Forest System", "Environmental Protection", "Alaska", "Wildlife"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/science/2026/08/dismantling-the-roadless-rule-threatens-to-disrupt-wildlife-and-water-in-us", lang: "EN" }
    ]
  },
  {
    id: "20260822-050",
    trackers: ["os"],
    category: "重點關注",
    title: "開源 Etnaviv 驅動程式支援 YOLOX 物件偵測模型，提升 Vivante NPU 的 AI 運算能力",
    summary: "由開源開發者 Tomeu Vizoso 主導的 Etnaviv 驅動程式堆疊，最初用於提供 Vivante GPU IP 加速圖形支援，現已擴展至處理 Vivante NPU。該驅動程式目前成功導入並運行了 YOLOX 物件偵測模型。\n\nYOLOX 模型相較於先前支援的 SSDLite MobileDet 模型更具能力，這代表 Etnaviv 驅動程式堆疊已經足夠成熟，能夠將其作為旗艦模型運作。此項工作利用了 Vivante VIP 系列 NPU（例如 NXP i.MX8M Plus 中所搭載）的資源。\n\nEtnaviv 的進展與 Mesa 的 Teflon framework 等開源專案相關，顯示在 AI/NPU 支援方面持續有重大突破。這對於需要高效能邊緣運算和物聯網應用的開發者具有實質意義。",
    tags: ["Etnaviv", "YOLOX", "Vivante NPU", "Tomeu Vizoso", "Mesa", "AI 運算"],
    title_en: "Open-Source Etnaviv Driver Supports YOLOX Object Detection Model, Enhancing Vivante NPU's AI Computing Capabilities",
    summary_en: "The Etnaviv driver stack, spearheaded by open-source developer Tomeu Vizoso, was initially designed to provide graphics acceleration support for Vivante GPU IP. It has since been expanded to handle the Vivante NPU. This driver is currently successfully running and implementing the YOLOX object detection model.\n\nThe YOLOX model represents an upgrade in capability compared to the previously supported SSDLite MobileDet model, indicating that the Etnaviv driver stack is sufficiently mature to operate it as a flagship model. This work utilizes resources from the Vivante VIP series NPU (such as those integrated into the NXP i.MX8M Plus).\n\nEtnaviv's progress aligns with other open-source projects like Mesa's Teflon framework, demonstrating continuous major breakthroughs in AI/NPU support. This holds significant practical value for developers requiring high-performance edge computing and IoT applications.",
    tags_en: ["Etnaviv", "YOLOX", "Vivante NPU", "Tomeu Vizoso", "Mesa", "AI Computing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Etnaviv-YOLOX", lang: "EN" }
    ]
  },
  {
    id: "20260822-051",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 代理人（Agents）成為新型攻擊面：專家警告企業必須進行主動紅隊演練防禦威脅",
    summary: "隨著 AI 從內容生成轉向執行實際行動，AI 代理人（agents）已成為組織最大的安全挑戰。資安專家 Matt Hartman 指出，這些非人類身份的代理人能透過新的資料整合通道和高度個人化的社會工程學攻擊，繞過傳統靜態安全政策。\n\n攻擊者利用 AI 進行自動化偵察、偽造身分及提升釣魚攻擊的效率，使得傳統信任指標越來越不可靠。因此，防禦方必須持續專注於強化身份驗證（phishing-resistant authentication）、行為訊號分析和零信任原則。\n\n為應對此趨勢，專家建議企業應主動利用 AI 代理人進行「紅隊演練」（red teaming）或滲透測試。Mandiant 創辦公司 Armadin 近期展示了其能力：他們執行了一次被稱為「有記錄的最大受控實時 AI 網路攻擊」，透過 AI 代理群生成了大量攻擊行為，並發現了多個驗證的攻擊路徑。\n\n這類自動化、可擴展的 AI 攻擊模擬，能讓組織在外部威脅來臨前，主動找出系統漏洞和安全盲點。",
    tags: ["AI Agents", "紅隊演練", "零信任", "社會工程學", "Mandiant", "Armadin"],
    title_en: "AI Agents as a New Attack Surface: Experts Warn Enterprises Must Conduct Proactive Red Teaming to Defend Against Threats",
    summary_en: "As AI shifts from content generation to executing real-world actions, AI agents have become the largest security challenge for organizations. Cybersecurity expert Matt Hartman points out that these non-human identities can bypass traditional static security policies through new data integration channels and highly personalized social engineering attacks.\n\nAttackers are leveraging AI for automated reconnaissance, identity spoofing, and increased phishing attack efficiency, making traditional trust indicators increasingly unreliable. Therefore, defenders must continuously focus on strengthening phishing-resistant authentication, behavioral signal analysis, and zero trust principles.\n\nTo address this trend, experts recommend that enterprises proactively utilize AI agents for 'red teaming' or penetration testing. Mandiant founder Armadin recently demonstrated its capabilities: they conducted a 'record maximum controlled live AI network attack,' generating a large volume of attack behaviors using an AI agent swarm and discovering multiple validated attack paths.\n\nSuch automated, scalable AI attack simulations allow organizations to proactively identify system vulnerabilities and security blind spots before external threats materialize.",
    tags_en: ["AI Agents", "Red Teaming", "Zero Trust", "Social Engineering", "Mandiant", "Armadin"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/22/if-youre-not-using-ai-to-attack-your-own-systems-your-adversaries-will/5291346", lang: "EN" }
    ]
  },
  {
    id: "20260822-052",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "AI生成程式碼的「雜質」浪潮：專家警告缺乏紀律的應用開發風險",
    summary: "隨著大型語言模型（LLM）和編程代理（coding agents）的普及，許多使用者利用AI輔助快速建構軟體，導致大量品質參差不齊、難以維護的「vibe-coded apps」（雜質代碼應用）。資安顧問Redwerk創辦人Konstantin Klyagin指出，這類應用不僅在程式碼量上存在問題，更關鍵的是其業務邏輯實現、使用者行為處理以及安全性驗證環節。他舉例說明，這些「vibe-coded apps」常出現代碼重複、權限處理漏洞（如可跳過建立個人資料直接進入支付頁面）、表單無障礙性不足，以及測試覆蓋率不完整等問題。Klyagin強調，雖然AI提高了開發速度，但企業和創業者必須學會「紀律」，主動進行程式碼審查（code review）與重構（refactoring），確保應用架構的健全性和安全性，才能讓產品真正達到可投入生產環境的標準。",
    tags: ["AI開發", "LLM", "程式碼品質", "Redwerk", "安全漏洞", "軟體架構"],
    title_en: "The 'Flaws' in AI-Generated Code: Experts Warn of Risks from Undisciplined Application Development",
    summary_en: "With the proliferation of Large Language Models (LLMs) and coding agents, many users are leveraging AI assistance to rapidly build software, resulting in a large volume of poorly quality and difficult-to-maintain 'vibe-coded apps.' Cybersecurity consultant Konstantin Klyagin of Redwerk points out that these applications have problems not only with code quantity but more critically with business logic implementation, user behavior handling, and security validation. He cites examples where these 'vibe-coded apps' often exhibit code duplication, authorization flaws (such as bypassing personal data creation to directly access payment pages), insufficient form accessibility, and incomplete test coverage. Klyagin emphasizes that while AI accelerates development speed, enterprises and founders must learn 'discipline,' proactively conducting code reviews and refactoring to ensure the application architecture is sound and secure enough to meet production-ready standards.",
    tags_en: ["AI Development", "LLM", "Code Quality", "Redwerk", "Security Vulnerability", "Software Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/22/ai-slop-is-good-for-business-if-you-know-what-youre-doing/5291382", lang: "EN" }
    ]
  },
  {
    id: "20260822-053",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "Bitdefender揭露「SilkParasite」：針對中亞政府機構的複雜網路間諜活動分析",
    summary: "資安公司Bitdefender公開了大規模網路間諜行動「SilkParasite」，該攻擊目標鎖定中央亞洲地區的主要政府機構。攻擊者使用了包含DriveSilkRAT和GoginRAT在內的七個惡意程式家族，並疑似利用過去由中國相關駭客組織使用的BLOODALCHEMY和SpiceRAT等工具。\n\n此次攻擊的特點是結合了AI開發工具與專業軟體設計，快速大量生產多種語言的客製化惡意工具。攻擊流程首先透過偽裝成當地政府部門的Spear-phishing郵件進行初步滲透。當受害者開啟附件時，惡性巨集會執行，並巧妙地檢查目標是否運行Kaspersky等本地防毒軟體後方可繼續。\n\n核心入侵路徑是利用DLL Sideloading技術，透過導入正常的數位簽名程式來執行惡意DLL。此外，攻擊者還將Google Drive、HTTP Cookie和ETag Header等正常網路傳輸規範偽裝成命令與控制（C2）通訊通道進行濫用。所有惡意程式均採用插件模組化結構，可根據現場環境實時擴展功能。專家指出，傳統基於惡意檔案模式的防毒偵測已面臨極限，建議應導入能綜合追蹤程序異常運作和非正常網路流量行為的行為分析安全體系。",
    tags: ["Bitdefender", "SilkParasite", "RAT", "Spear-phishing", "DLL Sideloading", "C2 通訊"],
    title_en: "Bitdefender Unveils 'SilkParasite': Analysis of Complex Cyber Espionage Targeting Central Asian Government Agencies",
    summary_en: "Cybersecurity firm Bitdefender has disclosed a large-scale cyber espionage operation dubbed 'SilkParasite,' which targeted major government agencies in the Central Asian region. The attackers utilized seven malicious program families, including DriveSilkRAT and GoginRAT, and are suspected of leveraging tools such as BLOODALCHEMY and SpiceRAT, previously used by Chinese-affiliated hacking groups. A key characteristic of this attack was its combination of AI development tools with professional software design to rapidly mass-produce customized malware in multiple languages. The attack process began with initial penetration via spear-phishing emails disguised as local government departments. When the victim opened the attachment, a malicious macro executed, which then cleverly checked if the target was running local antivirus software like Kaspersky before proceeding. The core intrusion path involved exploiting DLL Sideloading techniques by executing malicious DLLs through the introduction of normally digitally signed programs. Furthermore, the attackers abused normal network transmission protocols such as Google Drive, HTTP Cookies, and ETag Headers to masquerade as Command and Control (C2) communication channels. All malware employed a plugin modular structure, allowing for real-time functional expansion based on the environment. Experts suggest that traditional anti-malware detection models based on malicious file patterns are reaching their limits, recommending the adoption of behavioral analysis security systems capable of comprehensively tracking abnormal process operation and unusual network traffic behavior.",
    tags_en: ["Bitdefender", "SilkParasite", "RAT", "Spear-phishing", "DLL Sideloading", "C2 Communication"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145306", lang: "EN" }
    ]
  },
  {
    id: "20260822-054",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "企業PQC轉型面臨挑戰：缺乏總負責人與實戰驗證，HNDL威脅迫使加速",
    summary: "根據安全公司 Axiad 的報告指出，許多企業在應對量子計算帶來的資安威脅時，正經歷從後量子加密（PQC）轉型的重大困難。受訪企業中，有高比例的企業尚未指定專責總負責人來主導 PQC 轉換工作。雖然大部分公司已管理加密金鑰和憑證清單，但缺乏明確責任人與實戰驗證機制，使得實際準備程度仍顯不足。\n\n報告強調，這種內部職能上的分散化導致了在規劃長期 PQC 專案時的預算爭取和時間管理困難。更嚴峻的是，「現在收割、未來解密」（HNDL: Harvest Now, Decrypt Later）威脅的存在，迫使企業必須加速轉型。\n\n此外，高層管理者對量子安全準備抱持過度樂觀態度，與實際處理加密系統的實務人員之間存在顯著認知落差。這種內部溝通障礙和缺乏明確政府規範指引，是阻礙 PQC 轉換路徑規劃的主要內在風險。\n\n建議企業應建立專責領導職位、強化跨部門協作，並將 HNDL 風險納入最高優先級考量，以確保關鍵長期機密數據的安全性。",
    tags: ["PQC", "量子計算", "後量子加密", "Axiad", "HNDL", "PKI"],
    title_en: "Corporate PQC Transition Faces Challenges: Lack of Dedicated Leadership and Practical Validation Accelerates HNDL Threat",
    summary_en: "According to a report by security firm Axiad, many enterprises are experiencing significant difficulties in transitioning to Post-Quantum Cryptography (PQC) when addressing the cybersecurity threats posed by quantum computing. Among surveyed companies, a high proportion have not yet designated a dedicated executive leader to spearhead PQC migration efforts. Although most companies manage encryption keys and certificate inventories, the lack of clear ownership and practical validation mechanisms means that actual readiness remains insufficient.\n\nThe report emphasizes that this internal functional dispersion leads to difficulties in securing budgets and managing timelines when planning long-term PQC projects. More critically, the existence of the \"Harvest Now, Decrypt Later\" (HNDL) threat forces companies to accelerate their transition.\n\nFurthermore, senior management often holds an overly optimistic view regarding quantum security preparedness, creating a significant knowledge gap with the practical personnel managing encryption systems. This internal communication barrier and lack of clear government regulatory guidance are major internal risks hindering PQC transition roadmap planning.\n\nThe report advises that companies should establish dedicated leadership roles, strengthen cross-departmental collaboration, and incorporate HNDL risk into their highest priority considerations to ensure the security of critical long-term confidential data.",
    tags_en: ["PQC", "Quantum Computing", "Post-Quantum Cryptography", "Axiad", "HNDL", "PKI"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145340", lang: "EN" }
    ]
  },
  {
    id: "20260822-055",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "加拿大兒童醫院發生資料外洩：員工個人資訊遭竊，警惕醫療產業供應鏈風險",
    summary: "加拿大最大的兒科專業機構 The Hospital for Sick Children（俗稱 SickKids）近日宣布發生資料外洩事件，導致前、現任員工的個人資訊遭到盜取。該院方已正式發布聲明，強調此次入侵並未影響到其診治或臨床系統，亦未波及病患的醫療資訊。\n為應對此安全事件，醫院決定向潛在受害者個別通知，並提供兩年免費信用監控服務。\n值得注意的是，SickKids曾在 2022 年聖誕假期前夕遭受過一次大規模勒索軟體攻擊，導致藥品和影像診斷系統停擺數週。近期美國醫療機構也接連爆出資安事件，例如 Baylor Genetics 的臨床檢測結果、健康保險資訊及社會安全號碼（SSN）外洩；以及 EHR 專業公司 CareCloud 因網路入侵，造成高達 370 萬人的個人資料流失。\n專家警告，駭客威脅已從醫院的內部網路擴散至第三方外部供應鏈，使得整個醫療保健產業面臨系統性的資安風險。",
    tags: ["The Hospital for Sick Children", "SickKids", "勒索軟體", "個人資料外洩", "醫療資訊安全", "供應鏈風險"],
    title_en: "Data Breach at Canadian Children's Hospital: Employee Personal Information Stolen; Beware of Healthcare Supply Chain Risks",
    summary_en: "The Hospital for Sick Children, Canada’s largest specialized pediatric institution (commonly known as SickKids), recently announced a data breach that resulted in the theft of personal information belonging to both former and current employees. The hospital has issued an official statement emphasizing that this intrusion did not affect its diagnostic or clinical systems, nor did it compromise patient medical records.\nTo address this security incident, the hospital decided to individually notify potential victims and provide two years of free credit monitoring services.\nIt is noteworthy that SickKids previously suffered a large-scale ransomware attack in late 2022, which caused drug and imaging diagnostic systems to be offline for several weeks. Recently, US healthcare institutions have also experienced successive security incidents, such as the leakage of clinical test results, health insurance information, and Social Security Numbers (SSN) from Baylor Genetics; and a data leak affecting up to 3.7 million people due to a network intrusion at EHR professional company CareCloud.\nExperts warn that hacker threats have spread from internal hospital networks to third-party external supply chains, exposing the entire healthcare industry to systemic cybersecurity risks.",
    tags_en: ["The Hospital for Sick Children", "SickKids", "Ransomware", "Personal Data Leakage", "Medical Information Security", "Supply Chain Risk"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145339", lang: "EN" }
    ]
  }
];
