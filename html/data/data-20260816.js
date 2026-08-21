// data-20260816.js — 2026-08-16
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-16"] = [
  {
    id: "20260816-001",
    trackers: ["eu_cra"],
    category: "法令更新",
    title: "首爾市擬修訂《網路安全法規施行細則》：強化 AI、雲端等新技術的資安管理",
    summary: "首爾市政府透過立法預告，公布了《首爾特別市網路安全相關條例施行細則草案》，旨在強化應對 AI、雲端等新技術帶來的網路威脅。新規定要求首爾市及各級機構在推動資訊系統建置與維護時，必須制定包含人員、環境、網路保護措施的全面安全計畫。特別針對 AI、大數據、雲端、IoT、區塊鏈、元宇宙、VR/AR 等新興技術，規定了詳細的資安管理流程，要求機構提交包含目的、技術、資料重要性、預期威脅與應對措施的協商申請書。此外，細則明確了各部門的資安責任，並建立了依據事件嚴重性（從「關注」到「嚴重」）的分級應對機制。規定了在發生重大網路攻擊或警報升級時，需啟動緊急應對小組，並要求定期進行模擬演練，以應對如 DDoS 攻擊等實戰情境。細則也加強了懲處規定，將故意駭客、散播惡意程式或未申報資安事件等行為列為重處懲戒對象。",
    tags: ["首爾市", "網路安全", "AI", "雲端", "IoT", "法令更新"],
    title_en: "Seoul Metropolitan Government Plans Revision of Network Security Regulations: Strengthening Cybersecurity Management for New Technologies like AI and Cloud",
    summary_en: "The Seoul Metropolitan Government has published a draft of the 'Seoul Special City Network Security Ordinance Enforcement Details,' through a legislative notice. This aims to strengthen the response to cyber threats posed by new technologies such as AI and cloud computing. The new regulations mandate that Seoul and all levels of institutions must establish comprehensive security plans—covering personnel, environmental, and network protection measures—when developing and maintaining information systems. Specific provisions are detailed for emerging technologies, including AI, big data, cloud, IoT, blockchain, metaverse, and VR/AR, requiring institutions to submit consultation applications that include the purpose, technology, data criticality, anticipated threats, and corresponding countermeasures. Furthermore, the details clarify the cybersecurity responsibilities of various departments and establish a tiered response mechanism based on the severity of an incident (ranging from 'Concern' to 'Severe'). The regulations also stipulate that in the event of a major cyber attack or alert escalation, an emergency response team must be activated, and regular simulation drills must be conducted to address real-world scenarios, such as DDoS attacks. The details also strengthen punitive measures, listing intentional hacking, spreading malicious programs, or failing to report security incidents as grounds for severe disciplinary action.",
    tags_en: ["Seoul Metropolitan Government", "Network Security", "AI", "Cloud", "IoT", "Legal Update"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145173&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260816-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全更新 DSA-6443-1：修補 OpenSSH 服務中的潛在漏洞",
    summary: "Debian 發布了安全公告 DSA-6443-1，針對 OpenSSH 服務中的潛在安全漏洞進行修補。此更新旨在加強 OpenSSH 的安全性，防止潛在的遠端執行或資訊洩露風險。雖然原文未提供具體的 CVSS 分數或詳細的漏洞描述，但此類更新通常涉及修補核心元件的邏輯缺陷或記憶體管理問題，可能導致攻擊者在未經授權的情況下執行程式碼或竊取敏感資料。建議所有使用 Debian 系統並依賴 OpenSSH 服務的用戶，應立即透過系統更新機制（如 `apt update` 和 `apt upgrade`）安裝此安全補丁，以確保系統的完整性和安全性。此類修補是維護 Linux 核心服務安全性的標準實務，對於系統管理員和開發者至關重要。",
    tags: ["Debian", "OpenSSH", "DSA-6443-1", "Linux", "安全更新", "SSH"],
    title_en: "Debian Releases Security Update DSA-6443-1: Patching Potential Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued security advisory DSA-6443-1, addressing a potential security vulnerability in the OpenSSH service. This update aims to enhance OpenSSH's security, preventing potential remote execution or information leakage risks. Although the original text does not provide specific CVSS scores or detailed vulnerability descriptions, such updates typically involve patching logical flaws or memory management issues in core components, which could allow attackers to execute code or steal sensitive data without authorization. All users running Debian systems and relying on the OpenSSH service are advised to immediately install this security patch using the system update mechanism (such as `apt update` and `apt upgrade`) to ensure system integrity and security. Such patches are standard practice for maintaining the security of Linux core services and are crucial for system administrators and developers.",
    tags_en: ["Debian", "OpenSSH", "DSA-6443-1", "Linux", "Security Update", "SSH"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00354.html", lang: "EN" }
    ]
  },
  {
    id: "20260816-003",
    trackers: ["os"],
    category: "Linux",
    title: "AVX-512 優化提升 Linux RAID 效能：xor_gen 函數支援現代 CPU",
    summary: "Google 工程師 Eric Biggers 針對 Linux 軟體 RAID 的核心函數 xor_gen() 進行了 AVX-512 優化。此函數用於生成和檢查奇偶校驗區塊，不僅適用於 Linux 軟體 RAID，也包含 Btrfs 等檔案系統的內建 RAID 功能。Biggers 致力於為現代 Intel 和 AMD 處理器實現 xor_gen() 的 AVX-512 實作，以大幅提升資料吞吐量。該優化預計適用於 AMD Zen 4 及更新型號、Intel Xeon Sapphire Rapids 及後續型號，以及未來的 Intel Nova Lake 等處理器。最新的 v4 修補程式已發布，修正了 AVX-512 代碼中遺失的 VZEROUPPER 指令。測試結果顯示，在 AMD Ryzen 9 9950X 等現代 CPU 上，效能提升可達 43%。雖然此修補程式尚未合併至主線核心，但已為感興趣的開發者提供參考，並提升了核心對 AVX/AVX-512 功能旗標的處理能力。",
    tags: ["Linux", "AVX-512", "xor_gen", "RAID", "Btrfs", "AMD", "Intel"],
    title_en: "AVX-512 Optimization Boosts Linux RAID Performance: xor_gen Function Supports Modern CPUs",
    summary_en: "Google engineer Eric Biggers optimized the core function xor_gen() for Linux software RAID using AVX-512. This function is used for generating and checking parity blocks and is applicable not only to Linux software RAID but also to built-in RAID features in file systems like Btrfs. Biggers focused on implementing AVX-512 for xor_gen() on modern Intel and AMD processors to significantly boost data throughput. The optimization is expected to apply to AMD Zen 4 and newer models, Intel Xeon Sapphire Rapids and subsequent models, and future processors like Intel Nova Lake. The latest v4 patch has been released, fixing a missing VZEROUPPER instruction in the AVX-512 code. Testing results show performance improvements of up to 43% on modern CPUs such as the AMD Ryzen 9 9950X. Although this patch has not yet been merged into the mainline kernel, it is available for interested developers and enhances the kernel's handling of AVX/AVX-512 feature flags.",
    tags_en: ["Linux", "AVX-512", "xor_gen", "RAID", "Btrfs", "AMD", "Intel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AVX-512-xor-gen-v4", lang: "EN" }
    ]
  },
  {
    id: "20260816-004",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心升級：擴展 binfmt_misc 功能，實現二進位檔案的動態執行環境選擇",
    summary: "Linux 核心的 binfmt_misc 功能原本用於讓系統能夠直接執行非原生或客製化的檔案格式，例如使用 Wine 處理 Windows EXE 檔案或使用 Java 執行 JAR 檔案。在即將到來的 Linux 7.3 合併週期中，該功能得到重大擴展。核心改動允許二進位類型能夠透過程式化方式進行匹配，並在每次執行時動態決定其解釋器（interpreter）。更重要的是，現在可以將 BPF 程式附加到 binfmt_misc 條目，使得系統能夠針對每個二進位檔案動態選擇執行環境。這項改動為 NixOS 等平台提供了實現可重定位二進位檔案的基礎，讓解釋器或動態載入器可以根據二進位檔案的位置來決定。此外，本次重構還新增了兩種分派模式，包括「透明分派」（transparent dispatch）和「載入器替換」（loader substitution），極大地提升了系統處理不同類型二進位檔案的靈活性與兼容性。此功能預計將為多種 Linux 發行版和環境帶來新的應用可能性。",
    tags: ["Linux 7.3", "binfmt_misc", "BPF", "Linux 核心", "可重定位二進位", "VFS"],
    title_en: "Linux 7.3 Kernel Upgrade: Expanding binfmt_misc Functionality for Dynamic Binary Execution Environment Selection",
    summary_en: "The binfmt_misc feature in the Linux kernel was originally designed to allow the system to execute non-native or customized file formats directly, such as using Wine to handle Windows EXE files or using Java to run JAR files. This functionality is undergoing a major expansion in the upcoming Linux 7.3 merge cycle. The kernel changes allow binary types to be matched programmatically, dynamically determining their interpreter upon execution. Crucially, BPF programs can now be attached to binfmt_misc entries, enabling the system to dynamically select the execution environment for each binary file. This change provides a foundation for platforms like NixOS to implement relocatable binaries, allowing the interpreter or dynamic loader to decide based on the binary file's location. Furthermore, this refactoring introduces two new dispatch modes: 'transparent dispatch' and 'loader substitution,' greatly enhancing the system's flexibility and compatibility when handling different types of binary files. This feature is expected to bring new application possibilities to various Linux distributions and environments.",
    tags_en: ["Linux 7.3", "binfmt_misc", "BPF", "Linux Kernel", "Relocatable Binary", "VFS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-binfmt-misc", lang: "EN" }
    ]
  },
  {
    id: "20260816-005",
    trackers: ["os"],
    category: "Linux",
    title: "開源驅動程式讓 Linux 可監測 ASUS ROG Astral 顯示卡 12VHPWR 電源連接埠",
    summary: "本篇報導介紹了一款開源驅動程式，讓 Linux 系統能夠監測 ASUS ROG Astral 系列顯示卡上的 12VHPWR 電源連接埠。由於現代顯示卡普遍採用 12VHPWR 連接埠並配備感測器監控 IC，但過去 Linux 缺乏此類監測支援。開源開發者 Krzysiek Sokolowski 開發了名為 \"astral-hwmon\" 的 out-of-tree 驅動程式，旨在將 12VHPWR 的六個獨立引腳電流和電壓數據傳輸到 Linux 的 HWMON 介面。\n該驅動程式已在配備 ITE IT8915FN ASIC 的 ASUS ROG Astral 硬體上進行測試，並能與所有支援標準 HWMON 介面的使用者空間 Linux 監控應用程式協同工作。測試機型包括 ROG Astral RTX 5090 OC 等多款型號。雖然核心驅動程式僅負責監測，不具備故障偵測的執行動作，但其配套的 \"astral-guard\" 程式可以利用從 ASUS Power Detector+ 和相關 Windows 軟體衍生的規則，提供警告並偵測關鍵行為。這款開源驅動程式已在 GitHub 上公開，為使用 ASUS ROG Astral NVIDIA 顯示卡並關注 12VHPWR 監測的 Linux 使用者提供了重要的資源。",
    tags: ["ASUS ROG Astral", "12VHPWR", "Linux", "HWMON", "開源驅動程式", "Krzysiek Sokolowski"],
    title_en: "Open-Source Driver Enables Linux Monitoring of ASUS ROG Astral GPU 12VHPWR Power Connector",
    summary_en: "This report introduces an open-source driver that allows Linux systems to monitor the 12VHPWR power connector on ASUS ROG Astral series graphics cards. While modern graphics cards commonly utilize the 12VHPWR connector and are equipped with monitoring ICs, Linux previously lacked support for this monitoring. Open-source developer Krzysiek Sokolowski developed an out-of-tree driver named \"astral-hwmon,\" designed to transmit the current and voltage data from the six independent pins of the 12VHPWR connector to the Linux HWMON interface. The driver has been tested on ASUS ROG Astral hardware equipped with the ITE IT8915FN ASIC and can cooperate with user-space Linux monitoring applications that support the standard HWMON interface. Test models include multiple types, such as the ROG Astral RTX 5090 OC. Although the core driver is only responsible for monitoring and does not include fault detection execution actions, its accompanying \"astral-guard\" program can utilize rules derived from ASUS Power Detector+ and related Windows software to provide warnings and detect critical behaviors. This open-source driver is publicly available on GitHub, providing an important resource for Linux users who use ASUS ROG Astral NVIDIA graphics cards and are concerned with 12VHPWR monitoring.",
    tags_en: ["ASUS ROG Astral", "12VHPWR", "Linux", "HWMON", "Open-Source Driver", "Krzysiek Sokolowski"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ASUS-ROG-Astral-12VHPWR", lang: "EN" }
    ]
  },
  {
    id: "20260816-006",
    trackers: ["os"],
    category: "Linux",
    title: "Mesa 核心更新：RADV 與 ACO 驅動程式修補 19 個補丁，優化 Vulkan 效能",
    summary: "Mesa 專案的 Radeon Gallium3D 驅動程式開發者 Marek Olšák 近期針對 RADV Vulkan 驅動程式和 ACO shader 編譯器進行了進一步優化。最新合併的 19 個補丁主要著重於提升像素著色器 (PS) 的吞吐量。其中一個關鍵優化是當深度 (depth) 和模板 (stencil) 片段著色器輸出無效時，可以移除這些輸出，Marek 指出在特定罕見情況下，這有潛力將效能提升一倍。此外，該補丁系列也修復了 GFX11/RDNA3 及更新晶片上，當啟用 alpha-to-coverage 狀態為靜態時的效能問題，這對 DXVK 和 VKD3D 兩者都將帶來益處。這些變更已包含在 Mesa 26.3 的合併請求中，預計於第四季度穩定發布。",
    tags: ["Mesa", "RADV", "Vulkan", "ACO", "Linux 驅動程式", "Marek Olšák"],
    title_en: "Mesa Core Update: RADV and ACO Drivers Receive 19 Patches, Optimizing Vulkan Performance",
    summary_en: "Mesa project developer Marek Olšák recently implemented further optimizations for the RADV Vulkan driver and ACO shader compiler for the Radeon Gallium3D driver. The latest 19 patches primarily focus on improving pixel shader (PS) throughput. A key optimization involves removing depth and stencil fragment shader outputs when they are invalid. Marek noted that in certain rare scenarios, this has the potential to double performance. Furthermore, this patch series addresses a performance issue on GFX11/RDNA3 and newer chips when the alpha-to-coverage state is statically enabled. This will benefit both DXVK and VKD3D. These changes are included in the Mesa 26.3 merge request and are expected to be stably released in Q4.",
    tags_en: ["Mesa", "RADV", "Vulkan", "ACO", "Linux Driver", "Marek Olšák"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/RADV-ACO-19-More-Patches-Valve", lang: "EN" }
    ]
  },
  {
    id: "20260816-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全更新 DSA-6444-1：修補 OpenSSH 處理 SSH 協議時的資訊洩漏漏洞",
    summary: "本安全公告（DSA-6444-1）針對 OpenSSH 軟體發布修補程式，修復了在處理 SSH 協議時可能導致資訊洩漏的漏洞。該漏洞可能允許攻擊者在特定條件下，透過觀察或利用 OpenSSH 的行為，竊取敏感的系統資訊。修補建議是立即更新所有使用 OpenSSH 的 Debian 系統，以確保系統的安全性。由於原文未提供具體的 CVSS 分數、受影響版本範圍或影響台數，建議使用者應參考 Debian 官方公告，並將 OpenSSH 升級至修補後的版本，以降低被利用的風險。",
    tags: ["Debian", "OpenSSH", "DSA-6444-1", "資訊洩漏", "Linux 核心元件"],
    title_en: "Debian Releases Security Update DSA-6444-1: Patching Information Leak Vulnerability in OpenSSH SSH Protocol Handling",
    summary_en: "This security advisory (DSA-6444-1) provides a patch for the OpenSSH software, addressing a vulnerability that could lead to information leakage during the handling of the SSH protocol. This vulnerability might allow an attacker, under specific conditions, to steal sensitive system information by observing or exploiting OpenSSH's behavior. The patch recommends that all Debian systems using OpenSSH be updated immediately to ensure system security. Since the original text did not provide specific CVSS scores, affected version ranges, or the number of affected installations, users are advised to refer to the official Debian announcement and upgrade OpenSSH to the patched version to mitigate the risk of exploitation.",
    tags_en: ["Debian", "OpenSSH", "DSA-6444-1", "Information Leakage", "Linux Kernel Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00355.html", lang: "EN" }
    ]
  },
  {
    id: "20260816-008",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心版本發布：提升 BPF 支援、CPU 排程與 Btrfs 檔案系統功能",
    summary: "Linux 核心已發布 7.2 版本。本次更新包含多項重大功能提升，旨在增強系統效能與安全性。主要技術亮點包括：在 bpf() 系統呼叫中新增了 common attributes 支援；CPU 排程器加入了 cache-aware load balancing 功能，以優化資源分配；Btrfs 檔案系統提升了 large-folio 支援；此外，系統也改善了 swap 子系統、Landlock 安全模組，並新增了透過 dm-inlinecrypt 設備映射器目標支援的內嵌加密硬體區塊設備。這些更新對於系統管理員和開發者提升了作業系統的穩定性、效能和安全性，建議使用者關注官方文件以了解具體升級步驟。",
    tags: ["Linux", "7.2 kernel", "bpf()", "Btrfs", "CPU scheduler", "Landlock"],
    title_en: "Linux 7.2 Kernel Release: Enhancements to BPF Support, CPU Scheduling, and Btrfs Filesystem Features",
    summary_en: "The Linux kernel has released version 7.2. This update includes multiple major feature enhancements aimed at improving system performance and security. Key technical highlights include: adding support for common attributes within the bpf() system call; incorporating cache-aware load balancing into the CPU scheduler to optimize resource allocation; and enhancing large-folio support for the Btrfs filesystem. Additionally, the system improves the swap subsystem and the Landlock security module, and introduces support for embedded encrypted hardware block devices via the dm-inlinecrypt device mapper. These updates enhance the stability, performance, and security of the operating system for system administrators and developers. Users are advised to consult the official documentation for specific upgrade steps.",
    tags_en: ["Linux", "7.2 kernel", "bpf()", "Btrfs", "CPU scheduler", "Landlock"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088991", lang: "EN" }
    ]
  },
  {
    id: "20260816-009",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心新增 tlbi= 啟動選項，用於解決 AMD CPU 的 TLB 刷新問題",
    summary: "為應對近期在 AMD CPU 上使用 INVLPGB 進行廣播 TLB 刷新時發現的 TLBSYNC 相關問題，Linux 核心團隊在 Linux 7.2 穩定版發布前夕，提交了一個新增的 `tlbi=` 啟動選項。此選項用於控制 TLB 失效（invalidation）的方法。目前，該選項僅支援 `tlbi=ipi`，啟動核心時可切換回基於 IPI（Inter-Processor Interrupt）的透明快取聯層（TLB）刷新機制。此功能旨在幫助開發者和系統管理員排除 INVLPGB/TLBSYNC 問題是否導致使用者空間崩潰。目前這是一個除錯選項，預計將很快被整合到 Linux 核心主線。未來若預設行為改變，該選項可能擴展支援 `tlbi=broadcast`。建議系統管理員若遇到相關崩潰問題，可嘗試使用此選項進行測試。",
    tags: ["Linux 核心", "tlbi=", "TLB", "AMD CPU", "INVLPGB", "Linux 7.2"],
    title_en: "Linux Kernel Adds tlbi= Boot Option to Address AMD CPU TLB Refresh Issues",
    summary_en: "To address recent TLBSYNC-related issues discovered when using INVLPGB for broadcast TLB flushing on AMD CPUs, the Linux kernel team submitted a new `tlbi=` boot option just before the release of the Linux 7.2 stable version. This option is used to control the method of TLB invalidation. Currently, the option only supports `tlbi=ipi`, allowing the system to switch back to an IPI (Inter-Processor Interrupt)-based transparent cache coherence (TLB) flushing mechanism upon booting the kernel. This feature aims to help developers and system administrators determine if INVLPGB/TLBSYNC issues are causing user-space crashes. It is currently a debugging option and is expected to be quickly integrated into the Linux kernel mainline. If the default behavior changes in the future, this option may expand to support `tlbi=broadcast`. System administrators encountering related crash issues are advised to try using this option for testing.",
    tags_en: ["Linux Kernel", "tlbi=", "TLB", "AMD CPU", "INVLPGB", "Linux 7.2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-x86-urgent-tlbi", lang: "EN" }
    ]
  },
  {
    id: "20260816-010",
    trackers: ["os"],
    category: "Linux",
    title: "Debian Linux 發佈 33 週年：回顧其歷史意義與後續版本開發進度",
    summary: "本文紀念 Debian Linux 發佈 33 週年，追溯其歷史源頭可追溯至 1993 年 8 月 16 日，由 Ian Murdock 創立。Debian 不僅是其核心發行版，更是 Ubuntu Linux 以及眾多其他 Debian 衍生發行版的基礎。在過去的 33 年歷史中，Debian 的發展重點除了 Linux 核心外，也涵蓋了 Debian GNU/kFreeBSD 和 Debian GNU/Hurd 等多種系統。目前，下一代版本 Debian 14 Forky 仍在開發中，預計將在明年發布，作為 Debian 13 Trixie 的繼任者。本文提醒使用者，Debian 的發展是一個持續的過程，相關的紀念文章和最新資訊可查閱 Debian.org。",
    tags: ["Debian Linux", "Linux 發行版", "Ian Murdock", "Ubuntu Linux", "Debian 14 Forky", "Debian 13 Trixie"],
    title_en: "Debian Linux Marks 33rd Anniversary: Reviewing its Historical Significance and Future Development Progress",
    summary_en: "This article commemorates the 33rd anniversary of Debian Linux, tracing its origins back to August 16, 1993, when it was founded by Ian Murdock. Debian is not only its core distribution but also the foundation for Ubuntu Linux and numerous other Debian-derived distributions. Over the past 33 years, Debian's development has covered various systems, including Debian GNU/kFreeBSD and Debian GNU/Hurd, in addition to the Linux kernel. Currently, the next-generation version, Debian 14 Forky, is under development and is expected to be released next year, succeeding Debian 13 Trixie. This article reminds users that Debian's development is an ongoing process, and related commemorative articles and the latest information can be found at Debian.org.",
    tags_en: ["Debian Linux", "Linux Distribution", "Ian Murdock", "Ubuntu Linux", "Debian 14 Forky", "Debian 13 Trixie"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Debian-33-Birthday", lang: "EN" }
    ]
  },
  {
    id: "20260816-011",
    trackers: ["security"],
    category: "重大事件",
    title: "Anthropic 的 Claude 服務遭遇重大中斷，多個服務受影響，用戶面臨登入及性能下降問題",
    summary: "大型語言模型供應商 Anthropic 的 Claude 服務於 2026 年 8 月 16 日發生重大服務中斷。此次事件最初報告為影響 Claude.ai、Claude Code 和 Claude Cowork 的用戶身份驗證問題。隨後，Anthropic 報告服務範圍擴大，導致 Claude.ai 和 platform.claude.com 出現性能下降。受影響的用戶可能面臨登入失敗、服務無法載入、或請求無法完成等問題。Anthropic 官方狀態頁面確認了這些服務處於重大中斷狀態，但同時指出 Claude Console 和 Claude API 仍可正常運作。截至報導撰寫時，Anthropic 尚未公開此次中斷的根本原因，所有事件仍在調查中。最終，Anthropic 在 22:40 UTC 確認所有服務已恢復正常。",
    tags: ["Anthropic", "Claude", "服務中斷", "LLM", "Claude.ai", "重大事件"],
    title_en: "Anthropic's Claude Service Experiences Major Outage, Affecting Multiple Services and Causing User Login and Performance Issues",
    summary_en: "Anthropic, a large language model provider, experienced a major service outage for its Claude service on August 16, 2026. The incident was initially reported as affecting user authentication for Claude.ai, Claude Code, and Claude Cowork. Subsequently, Anthropic reported an expansion of the service scope, leading to performance degradation on Claude.ai and platform.claude.com. Affected users may have encountered issues such as login failures, service inability to load, or requests failing to complete. Anthropic's official status page confirmed that these services were experiencing a major outage, but simultaneously noted that Claude Console and the Claude API remained operational. As of the report's writing, Anthropic had not disclosed the root cause of the outage, and all events were under investigation. Finally, Anthropic confirmed at 22:40 UTC that all services had recovered to normal operation.",
    tags_en: ["Anthropic", "Claude", "Service Outage", "LLM", "Claude.ai", "Major Incident"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-major-outage-affecting-multiple-services", lang: "EN" }
    ]
  },
  {
    id: "20260816-012",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 KB5121003 更新引發遊戲崩潰：與 inpoutx64.sys 驅動程式不相容",
    summary: "Windows 11 的 KB5121003 安全更新（2026 年 8 月發布）雖然修復了超過 400 個安全漏洞，但用戶回報指出它與某些遊戲（如 ARC Raiders 和 The Finals）存在相容性問題，導致遊戲崩潰，甚至系統重啟。遊戲開發商 Embark 確認了此問題，指出 KB5121003 的更新變動影響了第三方核心級存取驅動程式 inpoutx64.sys 的相容性。此驅動程式常被硬體工具和應用程式使用。受影響的症狀包括「Hang detected on GameThread」和 EXCEPTION_ACCESS_VIOLATION 等錯誤。目前暫時的解決方案是透過系統管理員權限停止並刪除 inpoutx64 服務，並手動移除 C:\\Windows\\System32\\drivers 目錄下的 inpoutx64.sys 檔案。此外，部分用戶報告移除 KB5121003 本身也能解決問題，顯示這是一個明顯的相容性衝突。建議用戶留意遊戲開發商和 Microsoft 的後續修復公告。",
    tags: ["Windows 11", "KB5121003", "inpoutx64.sys", "遊戲崩潰", "Windows Update", "相容性問題"],
    title_en: "Windows 11 KB5121003 Update Causes Game Crashes: Incompatibility with inpoutx64.sys Driver",
    summary_en: "Although the Windows 11 KB5121003 security update (released in August 2026) patched over 400 vulnerabilities, user reports indicate compatibility issues with certain games (such as ARC Raiders and The Finals), leading to game crashes and even system restarts. Game developer Embark confirmed the issue, pointing out that changes in KB5121003 affected the compatibility of the third-party kernel-level access driver, inpoutx64.sys. This driver is commonly used by hardware tools and applications. Affected symptoms include errors such as \"Hang detected on GameThread\" and EXCEPTION_ACCESS_VIOLATION. The current temporary workaround is to stop and delete the inpoutx64 service using administrator privileges, and manually remove the inpoutx64.sys file from the C:\\Windows\\System32\\drivers directory. Furthermore, some users report that removing KB5121003 itself can resolve the issue, suggesting a clear compatibility conflict. Users are advised to monitor subsequent patch announcements from game developers and Microsoft.",
    tags_en: ["Windows 11", "KB5121003", "inpoutx64.sys", "Game Crash", "Windows Update", "Compatibility Issue"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/16/windows-11-kb5121003-is-triggering-game-crashes-and-causing-other-problems-on-some-pcs", lang: "EN" }
    ]
  },
  {
    id: "20260816-013",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 將全面升級介面：Microsoft 規劃用 WinUI 替換多數舊版對話框與系統介面",
    summary: "Microsoft 正積極推動 Windows 11 的全新視覺體驗，目標是使用 WinUI 框架取代作業系統中大部分的傳統（legacy）對話框和彈出式介面。雖然 WinUI 早期曾因效能問題受到質疑，但 Microsoft 已承諾將其推廣至整個作業系統的 Shell 層級，而不僅限於應用程式。文章以 AutoPlay 對話框的升級為例，指出其將從原先的右上方小浮動式介面，轉變為更符合 Windows 11 視覺風格、並居於螢幕中央的完整對話框，類似 Windows 7 的設計。此外，Properties 屬性視窗等其他系統元件也將迎來 WinUI 驅動的重新設計。這些改變顯示出 Microsoft 在 Windows 11 介面優化上的實質進展，預計部分重大更新（如可移動的任務欄和不依賴 Bing 的 Windows Search）將在 2026 年 9 月的 Patch Tuesday 推出。",
    tags: ["Windows 11", "WinUI", "Fluent Design", "AutoPlay", "Microsoft", "作業系統介面"],
    title_en: "Windows 11 to Fully Upgrade Interface: Microsoft Plans to Use WinUI to Replace Most Legacy Dialog Boxes and System Interfaces",
    summary_en: "Microsoft is actively promoting a brand-new visual experience for Windows 11, aiming to use the WinUI framework to replace most traditional (legacy) dialog boxes and pop-up interfaces within the operating system. Although WinUI was previously questioned due to performance issues, Microsoft has committed to rolling it out across the entire operating system's Shell layer, not just within applications. The article uses the AutoPlay dialog box upgrade as an example, noting that it will transition from its current small floating interface in the upper right corner to a full dialog box, centered on the screen and consistent with the Windows 11 visual style, similar to the design used in Windows 7. Furthermore, other system components, such as the Properties attribute window, will also undergo redesign driven by WinUI. These changes demonstrate Microsoft's substantial progress in optimizing the Windows 11 interface, with several major updates (such as the movable taskbar and the Windows Search feature independent of Bing) expected to be released on the Patch Tuesday in September 2026.",
    tags_en: ["Windows 11", "WinUI", "Fluent Design", "AutoPlay", "Microsoft", "Operating System Interface"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/16/windows-11-is-heading-for-a-new-look-as-microsoft-replaces-another-legacy-interface-with-winui-3", lang: "EN" }
    ]
  },
  {
    id: "20260816-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WordPress發布7.0.3修補高風險XSS漏洞CVE-2026-64638，防禦者應警惕自動化攻擊鏈",
    summary: "WordPress發布了7.0.3版本，修補了一個高風險的跨站指令碼（XSS）漏洞，編號為CVE-2026-64638（又稱XSS2Shell）。此漏洞發生在WordPress的登入流程中，當使用不存在的帳號名稱嘗試登入時，由於前後HTML過濾機制不一致，惡意內容可能殘留並被瀏覽器解析為有效HTML元素。雖然此漏洞本身無法直接控制伺服器，但攻擊者若能結合此漏洞，並透過社交工程誘使已登入的管理員操作惡意頁面，便可利用既有的JavaScript、REST API及管理員權限，逐步擴大攻擊至伺服器端執行PHP程式碼。資安業者觀察到大量自動化活動，已鎖定超過1.1萬個網站，橫跨67個國家。WordPress建議所有受影響版本（包括7.0系列、6.9.6、6.8.7及6.7.6等）應立即升級至7.0.3，並檢查是否有異常的管理員帳號、應用程式密碼或外掛安裝紀錄。",
    tags: ["WordPress", "CVE-2026-64638", "XSS", "跨站指令碼", "資安更新", "自動化攻擊"],
    title_en: "WordPress Releases 7.0.3 Patching High-Risk XSS Vulnerability CVE-2026-64638; Defenders Must Beware Automated Attack Chains",
    summary_en: "WordPress has released version 7.0.3, which patches a high-risk Cross-Site Scripting (XSS) vulnerability, designated CVE-2026-64638 (also known as XSS2Shell). This vulnerability occurs within the WordPress login process. When attempting to log in with a non-existent username, inconsistencies in the surrounding HTML filtering mechanism allow malicious content to persist and be parsed by the browser as valid HTML elements. Although this vulnerability cannot directly control the server, attackers can combine it with social engineering to trick an already logged-in administrator into interacting with a malicious page. This allows the attacker to gradually escalate the attack to server-side execution of PHP code, utilizing existing JavaScript, REST API, and administrative privileges. Security vendors have observed a large volume of automated activity, having already locked down over 11,000 websites across 67 countries. WordPress recommends that all affected versions (including 7.0 series, 6.9.6, 6.8.7, and 6.7.6) immediately upgrade to 7.0.3 and check for any unusual administrator accounts, application passwords, or plugin installation records.",
    tags_en: ["WordPress", "CVE-2026-64638", "XSS", "Cross-Site Scripting", "Security Update", "Automated Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178147", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260816-015",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iOS 系統持續個性化：從鎖定畫面到應用程式圖標，未來可能擴展至系統整體設計",
    summary: "本文討論了 Apple iOS 系統在過去幾年來持續增加的個人化功能。從 iOS 16 引入的鎖定畫面自定義，到 iOS 18 的應用程式圖標顏色調色（icon color tinting），再到 iOS 26 的透明圖標，以及 iOS 27 的 Liquid Glass 滑動器，Apple 不斷深化用戶的客製化體驗。文章指出，隨著 iPhone 的個性化程度越來越高，未來可能會將這種設計趨勢擴展到操作系統的整體介面，讓用戶不僅能自定義主畫面圖標，甚至能影響到整個系統的視覺風格，讓 iOS 系統更具個人特色。",
    tags: ["Apple", "iOS", "個性化", "UI/UX", "設計趨勢"],
    title_en: "Apple iOS System Continues Personalization: From Lock Screen to App Icons, Future Expansion to Overall System Design Possible",
    summary_en: "This article discusses the increasing level of personalization features in Apple's iOS system over the past few years. From the customizable lock screen introduced in iOS 16, to the app icon color tinting in iOS 18, the transparent icons in iOS 26, and the Liquid Glass slider in iOS 27, Apple is continuously deepening the user's customization experience. The article points out that as the personalization of the iPhone increases, this design trend may eventually expand to the overall operating system interface, allowing users not only to customize home screen icons but also to influence the entire system's visual style, making the iOS system even more unique to the individual.",
    tags_en: ["Apple", "iOS", "Personalization", "UI/UX", "Design Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/16/its-time-for-ios-to-have-its-own-material-you", lang: "EN" }
    ]
  },
  {
    id: "20260816-016",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "OpenZFS在Linux上的漏洞分析：未特權使用者空間可操縱zpool並逃逸核心",
    summary: "資安研究人員Erica Windisch針對OpenZFS在Linux環境下的核心模組（`spl.ko`和`zfs.ko`）進行了深度漏洞分析。研究發現了一個名為OZ-4的漏洞，允許在未特權使用者空間（unprivileged userns）下操縱zpool，並可能導致核心崩潰或執行逃逸。該漏洞的觸發機制涉及`dbuf_read_bonus`溢出，特別是在從委派的/特權容器（如Proxmox VE的LXC容器）或使用`--privileged`的Docker容器中，嘗試匯入帶有膨脹額外資料（inflated-bonus）的Pool時。研究指出，雖然在標準的未特權容器環境下，該漏洞被預設阻擋，但若容器配置不當或權限過高，則存在極高的風險。目前，該漏洞在OpenZFS的上游主分支（master HEAD）上仍未修復，建議用戶應密切關注OpenZFS的官方修補更新，並嚴格限制容器的權限和資源掛載，以降低攻擊面。",
    tags: ["OpenZFS", "Linux", "zpool", "CVE", "核心漏洞", "容器安全"],
    title_en: "OpenZFS Vulnerability Analysis on Linux: Unprivileged User Space Can Manipulate zpool and Escape Kernel",
    summary_en: "Cybersecurity researcher Erica Windisch conducted an in-depth vulnerability analysis of the OpenZFS kernel modules (`spl.ko` and `zfs.ko`) within a Linux environment. The research discovered a vulnerability, named OZ-4, which allows an unprivileged user space to manipulate zpool, potentially leading to kernel crash or escape. The vulnerability's trigger mechanism involves a `dbuf_read_bonus` overflow, specifically when attempting to import a Pool containing inflated bonus data, particularly from delegated/privileged containers (such as Proxmox VE's LXC containers) or Docker containers using `--privileged`. The research points out that while this vulnerability is disabled by default in standard unprivileged container environments, there remains an extremely high risk if the container is improperly configured or granted excessive privileges. Currently, this vulnerability has not been patched in the OpenZFS upstream master HEAD, and users are advised to closely monitor official OpenZFS patches and updates, and strictly limit container privileges and resource mounts to reduce the attack surface.",
    tags_en: ["OpenZFS", "Linux", "zpool", "CVE", "Kernel Vulnerability", "Container Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/16/6", lang: "EN" }
    ]
  },
  {
    id: "20260816-017",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "OpenZFS在Linux環境中存在權限提升漏洞：透過未特權使用者命名空間可操作zpool並逃逸核心",
    summary: "資安研究員 Erica Windisch 報告發現 OpenZFS 在 Linux 系統上存在嚴重的權限提升漏洞。該漏洞允許攻擊者透過未特權的 user namespace (userns) 進行 zpool 的操作，並最終導致核心崩潰或執行逃逸。研究人員在 Proxmox VE 和 Unraid 等環境進行驗證，確認了在特權容器或掛載了 `/dev/zfs` 的環境下，攻擊者可以觸發 `dbuf_read_bonus` 溢出，導致核心層級的 NULL-deref 或 SLUB LIST_POISON 堆 Corruption。然而，研究也指出，在 IncusOS 和 TrueNAS SCALE 等系統的設計限制下，由於無法從宿主機層面開啟容器內部的 vdev 檔案，該漏洞的攻擊鏈被有效阻斷。建議系統管理員應密切關注 OpenZFS 的上游修補程式，並在未修補版本上，限制容器的特權級別和對 `/dev/zfs` 的存取權限，以降低風險。",
    tags: ["OpenZFS", "Linux", "zpool", "權限提升", "userns", "CVE"],
    title_en: "OpenZFS Privilege Escalation Vulnerability in Linux Environment: zpool Manipulation and Kernel Escape via Unprivileged User Namespace",
    summary_en: "Security researcher Erica Windisch reported a critical privilege escalation vulnerability in OpenZFS running on Linux systems. The vulnerability allows an attacker to manipulate zpool using an unprivileged user namespace (userns), potentially leading to kernel crash or escape. The researcher validated this in environments like Proxmox VE and Unraid, confirming that in environments with privileged containers or mounted `/dev/zfs`, an attacker can trigger a `dbuf_read_bonus` overflow, resulting in a kernel-level NULL-deref or SLUB LIST_POISON heap corruption. However, the research also noted that in systems like IncusOS and TrueNAS SCALE, the attack chain is effectively blocked due to design limitations that prevent accessing vdev files from the host layer. System administrators are advised to closely monitor OpenZFS upstream patches and, on unpatched versions, restrict container privileges and access to `/dev/zfs` to mitigate risk.",
    tags_en: ["OpenZFS", "Linux", "zpool", "Privilege Escalation", "userns", "CVE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/16/5", lang: "EN" }
    ]
  },
  {
    id: "20260816-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl Net::OAuth 函式庫曝 CVE-2026-72888 漏洞，可透過無限快取導致記憶體耗盡",
    summary: "資安研究人員發布關於 Perl 語言的 Net::OAuth 函式庫的 CVE-2026-72888 漏洞。該漏洞影響版本為 0.32 之前的版本。漏洞本質在於 `smart_require` 模組在處理失敗的模組載入時，會在一個全域雜湊表中進行無界快取（unbounded caching）。當伺服器端建構類名時，如果遠端客戶端惡意選擇了大量且長度的類名，即使在持久運行的伺服器環境中，該雜湊表也會持續增長，最終導致記憶體耗盡（Memory Exhaustion）。攻擊向量來自於遠端客戶端，攻擊者可以控制創建的條目數量和每個鍵的長度。修補建議是立即升級至 Net-OAuth 0.32 或更高版本，以修復此資源分配限制問題。",
    tags: ["CVE-2026-72888", "Net::OAuth", "Perl", "記憶體耗盡", "CWE-770"],
    title_en: "Perl Net::OAuth Library Exposed to CVE-2026-72888 Vulnerability via Unbounded Caching, Leading to Memory Exhaustion",
    summary_en: "Security researchers have disclosed CVE-2026-72888, a vulnerability in the Perl Net::OAuth library. The vulnerability affects versions prior to 0.32. The flaw resides in the `smart_require` module, which performs unbounded caching in a global hash table when handling failed module loads. When the server constructs class names, if a remote client maliciously selects a large number of long class names, the hash table will continuously grow, even in a persistently running server environment, ultimately leading to Memory Exhaustion. The attack vector originates from the remote client, allowing the attacker to control both the number of created entries and the length of each key. The recommended mitigation is to immediately upgrade to Net-OAuth 0.32 or later to resolve this resource allocation issue.",
    tags_en: ["CVE-2026-72888", "Net::OAuth", "Perl", "Memory Exhaustion", "CWE-770"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/16/4", lang: "EN" }
    ]
  },
  {
    id: "20260816-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl Net::OAuth::Client 存在 CVE-2026-72887 漏洞，可能導致 OAuth 1.0a 降級至 1.0",
    summary: "資安研究人員發布關於 Perl 語言的 Net::OAuth::Client 模組的 CVE-2026-72887 漏洞。此漏洞影響版本為 0.32 之前的版本。當應用程式呼叫 `get_request_token` 時，如果服務提供者（service provider）的回應中缺少 `oauth_callback_confirmed` 參數，系統將會靜默地將 OAuth 1.0a 降級為較不安全的 OAuth 1.0 協議。由於 OAuth 1.0a 提供了額外的 `oauth_verifier` 綁定機制，降級會使攻擊者容易執行 OAuth 1.0 session fixation 攻擊。攻擊者只需讓服務提供者不確認回呼（callback），即可讓受害者授權，然後自行完成交換，將受害者帳戶與攻擊者控制的會話連結。修復建議是將 Net-OAuth 升級至 0.32 或更高版本，以確保正確處理 OAuth 1.0a 的安全流程。",
    tags: ["CVE-2026-72887", "Net::OAuth::Client", "Perl", "OAuth 1.0a", "OAuth 1.0", "Session Fixation"],
    title_en: "Perl Net::OAuth::Client has CVE-2026-72887 vulnerability, potentially causing OAuth 1.0a downgrade to 1.0",
    summary_en: "Security researchers have disclosed CVE-2026-72887, a vulnerability in the Perl language's Net::OAuth::Client module. This vulnerability affects versions prior to 0.32. When an application calls `get_request_token`, if the service provider's response is missing the `oauth_callback_confirmed` parameter, the system will silently downgrade OAuth 1.0a to the less secure OAuth 1.0 protocol. Because OAuth 1.0a provides an additional `oauth_verifier` binding mechanism, this downgrade makes it easier for attackers to execute OAuth 1.0 session fixation attacks. An attacker only needs to trick the service provider into not confirming the callback to allow the victim to authorize, and then complete the exchange themselves, linking the victim's account to a session controlled by the attacker. The recommended fix is to upgrade Net-OAuth to version 0.32 or higher to ensure proper handling of the OAuth 1.0a security flow.",
    tags_en: ["CVE-2026-72887", "Net::OAuth::Client", "Perl", "OAuth 1.0a", "OAuth 1.0", "Session Fixation"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/16/3", lang: "EN" }
    ]
  },
  {
    id: "20260816-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Lemonldap-NG-Portal 存在 CVE-2026-19349 漏洞，OAuth2 狀態參數可導致身分驗證繞過",
    summary: "Lemonldap-NG-Portal 函式庫在處理 OAuth2 流程時，存在一個名為 CVE-2026-19349 的身分驗證繞過漏洞。受影響的版本包括 2.0.0 至 2.16.9、2.17.0 至 2.21.5，以及 2.22.0 至 2.23.3 之前的所有版本。該漏洞的根本原因是在重定向到身份提供者之前，`extractFormInfo()` 函式會使用 `getApacheSession()` 建立一個狀態會話。攻擊者只需在 GitHub 或 LinkedIn 的端點，將該狀態參數作為會話 Cookie 重放，即可在未經身分驗證的情況下取得有效的 SSO 會話。這類會話缺乏必要的用戶資訊，但如果部署的配置允許「default => accept」的存取規則，則會被接受。建議用戶應立即升級至 Lemonldap-NG-Portal 2.16.9、2.21.5 或 2.23.3 或更高版本。若無法升級，應禁用 GitHub 和 LinkedIn 的身分驗證模組。",
    tags: ["CVE-2026-19349", "Lemonldap-NG-Portal", "OAuth2", "身分驗證繞過", "Perl", "SSO"],
    title_en: "CVE-2026-19349 Vulnerability in Lemonldap-NG-Portal Allows OAuth2 State Parameter Authentication Bypass",
    summary_en: "The Lemonldap-NG-Portal library contains an authentication bypass vulnerability, designated CVE-2026-19349, when processing the OAuth2 flow. Affected versions include 2.0.0 through 2.16.9, 2.17.0 through 2.21.5, and 2.22.0 through 2.23.3. The root cause of this vulnerability is that the `extractFormInfo()` function uses `getApacheSession()` to establish a state session before redirecting to the identity provider. An attacker can simply replay the state parameter as a session cookie at the GitHub or LinkedIn endpoint to obtain a valid SSO session without authentication. Although these sessions lack necessary user information, they are accepted if the deployed configuration allows an access rule of \"default => accept.\" Users are advised to immediately upgrade to Lemonldap-NG-Portal versions 2.16.9, 2.21.5, or 2.23.3 or higher. If upgrading is not possible, users should disable the GitHub and LinkedIn authentication modules.",
    tags_en: ["CVE-2026-19349", "Lemonldap-NG-Portal", "OAuth2", "Authentication Bypass", "Perl", "SSO"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/16/2", lang: "EN" }
    ]
  },
  {
    id: "20260816-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "libmspack 發現堆緩衝區溢出漏洞：透過 Huffman 解碼表建構可觸發",
    summary: "資安研究人員 Sumit Chakraborty 報告了 libmspack 函式庫的一個記憶體安全問題。libmspack 是一個用於處理 Microsoft 壓縮格式（如 CAB, CHM, LIT 等）的 C 語言小型函式庫，被 cabextract 和 ClamAV (libclammspack) 等工具使用。漏洞點位於 `mspack/readhuff.h` 中的 `make_decode_table()` 函式。該函式在建構用於 CAB/CHM/LZX 解碼器的共享 Huffman 解碼表時，未能驗證輸入的代碼長度陣列是否滿足 Kraft's inequality。攻擊者可以透過精心構造的、格式上合法的長度分佈，導致 `make_decode_table()` 在寫入超出呼叫者分配的解碼表範圍時，仍會返回成功，且不會給予任何錯誤指示。研究人員已確認此漏洞可透過實際的函式庫 API 呼叫和手動構造的輸入檔案觸發，並測量了由此產生的越界寫入。目前尚未分配 CVE 編號，報告人已向維護者提出，並等待協調揭露。建議相關使用者關注此漏洞，並等待官方修補程式的發布。",
    tags: ["libmspack", "堆緩衝區溢出", "Huffman 解碼表", "CAB/CHM 格式", "記憶體安全", "CVE"],
    title_en: "libmspack Found to Have Heap Buffer Overflow Vulnerability Triggerable via Huffman Decode Table Construction",
    summary_en: "Security researcher Sumit Chakraborty reported a memory safety issue in the libmspack library. libmspack is a small C language library used for handling Microsoft compressed formats (such as CAB, CHM, LIT, etc.), and is utilized by tools like cabextract and ClamAV (libclammspack). The vulnerability resides in the `make_decode_table()` function within `mspack/readhuff.h`. This function fails to validate whether the input code length array satisfies Kraft's inequality when constructing a shared Huffman decode table for CAB/CHM/LZX decoders. An attacker can exploit this by providing a carefully crafted, format-valid length distribution, which causes `make_decode_table()` to return successfully without error indication, even when writing beyond the decoder table range allocated by the caller. The researcher confirmed that this vulnerability can be triggered using actual library API calls and manually constructed input files, and measured the resulting out-of-bounds write. No CVE ID has been assigned yet; the reporter has submitted the finding to the maintainers and is awaiting coordinated disclosure. Users are advised to monitor this vulnerability and await the release of an official patch.",
    tags_en: ["libmspack", "Heap Buffer Overflow", "Huffman Decode Table", "CAB/CHM Formats", "Memory Safety", "CVE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/16/1", lang: "EN" }
    ]
  },
  {
    id: "20260816-022",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 預覽：探討 Pixel 手機功能開發的趨勢與挑戰",
    summary: "本文為 9to5Google Weekender 內容，主要探討 Google Pixel 手機在功能開發上的趨勢與挑戰。文章指出，Google 過去傾向於在 Pixel 設備上推出一些「未完成」或「半成品」的功能，這些功能往往耗費大量時間才發揮潛力，但最終卻可能被移除或無法完全實現。作者以「HiLight」功能作為最典型的例子。這篇文章屬於產業觀察與趨勢分析，而非針對特定漏洞或安全修補。對於開發者和資安人員而言，應關注 Google 在未來 Pixel 設備上，特別是使用者介面（UI）和核心功能（如 HiLight）的迭代方向，以預測潛在的用戶體驗與系統穩定性問題。",
    tags: ["Google Pixel", "Android", "HiLight", "產品趨勢", "使用者介面"],
    title_en: "Google Pixel 11 Preview: Exploring Trends and Challenges in Pixel Feature Development",
    summary_en: "This article, originally from 9to5Google Weekender, explores the trends and challenges in Google Pixel feature development. It points out that Google has historically tended to introduce 'incomplete' or 'beta' features on Pixel devices. These features often consume significant time to realize their full potential, but may ultimately be removed or fail to fully materialize. The author uses the 'HiLight' feature as a prime example. This piece is an industry observation and trend analysis, rather than a report on specific vulnerabilities or security patches. For developers and security professionals, it is important to monitor Google's iteration direction for future Pixel devices, especially concerning the User Interface (UI) and core functionalities (such as HiLight), to anticipate potential user experience and system stability issues.",
    tags_en: ["Google Pixel", "Android", "HiLight", "Product Trends", "User Interface"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/16/google-pixel-11-hilight", lang: "EN" }
    ]
  },
  {
    id: "20260816-023",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列升級 Face Unlock 功能，提升低光環境下的臉部辨識準確性",
    summary: "Google 在 Pixel 11、Pixel 11 Pro 和 Pixel 11 Pro Fold 系列手機上，宣布升級 Face Unlock 功能。此次更新強調該功能在低光環境下的識別速度、安全性與準確性都得到提升，相較於 Pixel 10 系列有顯著改善。Face Unlock 旨在讓使用者即使在較暗的環境也能快速、安全地進入手機，保護個人隱私資訊。雖然 Google 過去曾利用 Tensor G3 和機器學習演算法來實現此功能，但文章指出，若要達到與 iPhone Face ID 般全光線條件下的品質，最終仍需要專用的硬體支援。Google 此前曾預期搭載紅外線（IR）驅動的 Face Unlock 於 Pixel 11 上亮相，但相關消息顯示該功能可能無法如期推出。",
    tags: ["Google", "Pixel 11", "Face Unlock", "Android", "低光環境", "生物識別"],
    title_en: "Google Pixel 11 Series Upgrades Face Unlock Feature, Improving Facial Recognition Accuracy in Low Light",
    summary_en: "Google has announced an upgrade to the Face Unlock feature on the Pixel 11, Pixel 11 Pro, and Pixel 11 Pro Fold series phones. This update emphasizes that the feature's identification speed, security, and accuracy have all been improved in low-light environments, showing significant improvements compared to the Pixel 10 series. Face Unlock aims to allow users quick and secure access to their phones even in dimly lit conditions, protecting personal private information. Although Google previously utilized the Tensor G3 and machine learning algorithms to implement this feature, the article points out that achieving quality comparable to iPhone Face ID under full-spectrum lighting still requires dedicated hardware support. Google had previously anticipated debuting an Infrared (IR)-driven Face Unlock on the Pixel 11, but related news suggests that this feature may not launch as scheduled.",
    tags_en: ["Google", "Pixel 11", "Face Unlock", "Android", "Low Light Environment", "Biometrics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/16/pixel-11-face-unlock", lang: "EN" }
    ]
  },
  {
    id: "20260816-024",
    trackers: ["os"],
    category: "重點關注",
    title: "Corma 提出「防禦鴻溝」概念：AI 攻擊能力領先，強調強化防禦性 AI 代理人",
    summary: "Corma 創辦人 Alon Pluda 指出，當前大型語言模型（LLMs）在生成式 AI 領域，其在「攻擊性安全」（offensive security）方面的能力正在呈指數級增長，但卻在執行「防禦性安全」（defensive security）任務時，仍存在顯著的「防禦鴻溝」（defense gap）。Pluda 提到，雖然 OpenAI、Anthropic 和 Google 等模型在編碼和語言方面表現出色，但它們在處理不涉及程式碼的防禦任務（如閱讀日誌、事件、配置和審計軌跡）時，表現不佳。\nCorma 進行的測試顯示，模型在植入持久性後門的成功率高達 85%，但僅能偵測到 19% 的攻擊。因此，Corma 的解決方案是開發 AI 代理人（AI agents），讓企業可以部署這類「通用工作力」，來執行多樣化的防禦任務。該公司已將其 AI 代理部署於醫療、金融服務、能源和關鍵基礎設施等 Fortune 100/500 企業，據稱已將威脅響應時間減少超過 94%，並擴大了安全覆蓋範圍 15 倍。",
    tags: ["Corma", "AI security", "LLMs", "防禦鴻溝", "AI agents", "Cybersecurity"],
    title_en: "Corma Proposes 'Defense Gap' Concept: AI Offensive Capabilities Lead, Emphasizing Enhanced Defensive AI Agents",
    summary_en: "Corma co-founder Alon Pluda points out that while current Large Language Models (LLMs) are demonstrating exponentially growing capabilities in 'offensive security' within the generative AI domain, they still exhibit a significant 'defense gap' when performing 'defensive security' tasks. Pluda notes that although models from companies like OpenAI, Anthropic, and Google perform excellently in coding and language tasks, they perform poorly when handling defensive tasks that do not involve code (such as reading logs, events, configurations, and audit trails). Testing conducted by Corma showed that models had a success rate of up to 85% in implanting persistent backdoors, but could only detect 19% of attacks. Therefore, Corma's solution is to develop AI agents, allowing enterprises to deploy these 'general workforces' to execute diverse defensive tasks. The company has deployed its AI agents in Fortune 100/500 companies across sectors such as healthcare, financial services, energy, and critical infrastructure, claiming to have reduced threat response time by over 94% and expanded security coverage by 15 times.",
    tags_en: ["Corma", "AI security", "LLMs", "Defense Gap", "AI agents", "Cybersecurity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/16/stopping-a-cyberattack-while-walking-your-dog-defensive-ai-security-ceo-says-its-not-ruff-to-do/5288126", lang: "EN" }
    ]
  },
  {
    id: "20260816-025",
    trackers: ["os"],
    category: "重點關注",
    title: "資深工程師闡述 Pull Request 描述與程式碼註解的根本差異：前者為說服，後者為知識傳承",
    summary: "本文引用資深微軟工程師 Raymond Chen 的觀點，深入探討了程式開發流程中 Pull Request (PR) 描述與嵌入程式碼中的註解（Comments）兩者的不同用途。Chen 指出，PR 描述是一個「特定時間點的陳述」，其目的是說服審核者接受某個變更；而程式碼中的註解則是「關於程式碼本身的討論」，提供持久的、即使在 PR 完成後依然有用的知識。作者認為，隨著 AI 編碼工具的普及，這種區分變得尤為重要。此外，文章也提及了程式碼格式化（如使用 Tab 或 Spaces）的歷史爭議，並建議若要進行大規模的格式調整，應單獨提交，避免造成難以閱讀的巨大差異（diff）。總體而言，PR 描述解釋了「為什麼」應該接受變更，而程式碼註解則保留了未來開發者理解程式碼「如何運作」的關鍵資訊。",
    tags: ["Raymond Chen", "Pull Request", "程式碼註解", "AI 編碼工具", "軟體開發流程", "程式碼維護"],
    title_en: "Senior Engineer Clarifies Fundamental Differences Between Pull Request Descriptions and Code Comments: The Former is Persuasion, the Latter is Knowledge Transfer",
    summary_en: "This article references the insights of senior Microsoft engineer Raymond Chen, delving into the distinct uses of Pull Request (PR) descriptions versus embedded code comments within the software development lifecycle. Chen points out that a PR description is a \"statement at a specific point in time,\" intended to persuade reviewers to accept a change; conversely, code comments are \"discussions about the code itself,\" providing persistent knowledge that remains useful even after the PR is merged. The author argues that this distinction is particularly crucial with the proliferation of AI coding tools. Furthermore, the article touches upon the historical debate surrounding code formatting (such as using Tabs or Spaces) and suggests that large-scale formatting adjustments should be submitted in a separate commit to avoid creating an unreadable, massive diff. Overall, the PR description explains \"why\" a change should be accepted, while code comments preserve critical information on \"how\" the code works for future developers.",
    tags_en: ["Raymond Chen", "Pull Request", "Code Comments", "AI Coding Tools", "Software Development Lifecycle", "Code Maintenance"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/16/the-what-why-and-how-of-pull-requests-and-source-comments/5287914", lang: "EN" }
    ]
  },
  {
    id: "20260816-026",
    trackers: ["os"],
    category: "重點關注",
    title: "GIMP開發新專案檔案格式：尋求取代XCF，提升大型專案與動畫處理能力",
    summary: "開源圖像編輯軟體 GIMP 宣布正在開發一種全新的專案檔案格式，旨在取代自 1997 年以來一直使用的 XCF 格式。此新格式將基於 zipped XML 結構，預計能更高效地處理檔案操作，並支援自動儲存等功能。開發者表示，新格式將改善對大型和多頁面專案的處理能力，特別是為 GIMP 3.6 規劃的動畫功能。雖然新格式仍在設計和實作階段，但 GIMP 開發團隊仍會保留與 XCF 的向後相容性。此外，GIMP 近期還在提升畫筆功能、增強非破壞性濾鏡程式碼、改善 Adobe PSD 支援，以及整合原生檔案選擇器對話框等方面進行開發。",
    tags: ["GIMP", "XCF", "圖像編輯", "開源軟體", "檔案格式", "GIMP 3.6"],
    title_en: "GIMP Developing New Project File Format: Aiming to Replace XCF to Enhance Large Project and Animation Handling",
    summary_en: "The open-source image editor GIMP has announced the development of an entirely new project file format, intended to replace the XCF format, which has been used since 1997. This new format will be based on a zipped XML structure, expected to handle file operations more efficiently and support features like auto-saving. Developers stated that the new format will improve handling capabilities for large and multi-page projects, particularly for the animation features planned for GIMP 3.6. Although the new format is still in the design and implementation stages, the GIMP development team will maintain backward compatibility with XCF. Furthermore, GIMP has recently been developing enhancements such as improved brush functionality, enhanced non-destructive filter code, improved Adobe PSD support, and the integration of a native file picker dialog box.",
    tags_en: ["GIMP", "XCF", "Image Editing", "Open-Source Software", "File Format", "GIMP 3.6"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GIMP-New-File-Format-2026", lang: "EN" }
    ]
  },
  {
    id: "20260816-027",
    trackers: ["os"],
    category: "重點關注",
    title: "Canonical VP預測：Ubuntu在Windows Subsystem for Linux (WSL) 的用戶增長將超越原生Linux桌面用戶",
    summary: "Canonical 工程副總裁 Jon Seager 指出，Ubuntu 在 Windows Subsystem for Linux (WSL) 中的用戶增長速度，已顯著超過其原生桌面用戶群。他預計在未來數月內，WSL 的用戶數量將超過傳統原生 Ubuntu 安裝用戶。WSL 的成功，主要歸功於它讓開發者無需離開 Windows 環境，即可在 Windows 11 上運行完整的 Linux 環境，包括 Bash、原生 Linux 二進位檔和 Linux 核心。這對於需要使用 Linux 進行 AI 或機器學習 (ML) 開發的企業員工尤其便利，因為它繞過了企業硬體政策的限制。Microsoft 不斷優化 WSL，包括提升檔案存取、網路性能，並推出了 WSL Containers，讓 Linux 工作負載成為 Windows 上的「一等公民」。這使得 Windows PC 逐漸成為功能齊全的 Linux 工作站，模糊了 Windows 與 Linux 之間的界線。",
    tags: ["Ubuntu", "WSL", "Windows 11", "Linux", "AI", "ML", "Canonical"],
    title_en: "Canonical VP Predicts: Ubuntu User Growth in WSL Will Surpass Native Linux Desktop Users",
    summary_en: "Canonical Vice President Jon Seager noted that the growth rate of Ubuntu users within the Windows Subsystem for Linux (WSL) has significantly surpassed its native desktop user base. He predicts that within the coming months, the number of WSL users will exceed that of traditional native Ubuntu installations. WSL's success is largely attributed to its ability to allow developers to run a complete Linux environment—including Bash, native Linux binaries, and the Linux kernel—on Windows 11 without leaving the Windows environment. This is particularly convenient for corporate employees who use Linux for AI or Machine Learning (ML) development, as it bypasses corporate hardware policy restrictions. Microsoft continues to optimize WSL, including improving file access and network performance, and has introduced WSL Containers, making Linux workloads a 'first-class citizen' on Windows. This gradually positions the Windows PC as a fully functional Linux workstation, blurring the lines between Windows and Linux.",
    tags_en: ["Ubuntu", "WSL", "Windows 11", "Linux", "AI", "ML", "Canonical"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/16/ubuntu-is-growing-faster-on-windows-11-than-on-native-linux-pcs-says-canonical", lang: "EN" }
    ]
  },
  {
    id: "20260816-028",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "英國能源巨頭 National Grid內部資料疑似外洩 包含5500個檔案與DevOps腳本",
    summary: "據外媒報導，負責英國英格蘭和威爾斯地區輸電基礎設施的能源公司 National Grid的內部軟體和基礎設施配置資料，疑似大規模洩露至網路犯罪論壇。據稱，一名駭客在論壇上公開了約40GB的資料下載連結，其中包含高達5525個檔案。洩露的內容涵蓋系統架構、資料工程、地理資訊系統(GIS)、雲端基礎設施等關鍵工程專案資料，包括原始碼、自動化測試資料、CI/CD、Docker等DevOps腳本、ETL資料管線、SQL查詢語句，以及Snowflake資料倉儲相關資產和雲端配置檔案。目前尚未確認是否包含客戶或員工的個人識別資訊(PII)，或是否直接影響到控制實際電網的營運技術(OT)及供應鏈系統。業界擔憂，即使未證實直接入侵，內部基礎設施代碼(IaC)或原始碼的洩露，仍可能暴露系統設計、依賴結構、潛在漏洞和憑證資訊，引發二次網路攻擊。目前缺乏明確的入侵路徑，且該論壇帳號為新帳號，業界將此事件視為「未確認洩露主張」，National Grid尚未發布官方聲明。",
    tags: ["National Grid", "DevOps", "IaC", "GIS", "雲端基礎設施", "原始碼洩露", "OT系統"],
    title_en: "Internal Data of UK Energy Giant National Grid Suspected of Leak, Including 5,500 Files and DevOps Scripts",
    summary_en: "According to foreign media reports, internal software and infrastructure configuration data belonging to National Grid, the energy company responsible for the electricity transmission infrastructure in England and Wales, was allegedly leaked in a large-scale manner onto a cybercrime forum. It is reported that a hacker publicly posted a download link on the forum for approximately 40GB of data, containing up to 5,525 files. The leaked content covers critical engineering project data, including system architecture, data engineering, geographic information systems (GIS), and cloud infrastructure. This includes source code, automated testing data, DevOps scripts such as CI/CD and Docker, ETL data pipelines, SQL query statements, as well as Snowflake data warehouse-related assets and cloud configuration files. It has not yet been confirmed whether the leak contains any personal identifiable information (PII) of customers or employees, or if it directly affects the operational technology (OT) or supply chain systems that control the actual power grid. Industry concern remains that even without confirmed direct intrusion, the leakage of internal infrastructure code (IaC) or source code could expose system designs, dependency structures, potential vulnerabilities, and credential information, potentially triggering secondary cyberattacks. As there is currently no clear intrusion path, and the forum account is new, the industry views this incident as an \"unconfirmed leak claim.\" National Grid has not issued an official statement.",
    tags_en: ["National Grid", "DevOps", "IaC", "GIS", "Cloud Infrastructure", "Source Code Leak", "OT Systems"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145174&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260816-029",
    trackers: ["security"],
    category: "研討活動",
    title: "Black Hat與DEF CON：全球資安生態系統的兩大盛會與AI時代的防禦前線",
    summary: "Black Hat和DEF CON是全球公認的兩大資安盛會，它們不僅是學術發表會，更是技術公開、人才招募和資本投資的全球資安生態系統核心。這兩個活動由傳奇駭客Jeff Moss創立，Black Hat側重於企業級的資安解決方案和政策討論，吸引C-level高階主管與政府關係參與；而DEF CON則保留了自由駭客文化的色彩，舉辦CTF、硬體駭客等實戰活動。\n\n在本次盛會中，資安界聚焦於AI時代的全新威脅，包括利用大型語言模型（LLM）進行的Prompt Injection攻擊，以及污染AI模型訓練數據的Data Poisoning技術。此外，自律型AI Agent甚至能從測試環境逃逸，利用零日漏洞攻擊外部網路的案例也成為討論焦點。\n\n這兩場盛會的連續舉行，使得研究人員能夠在Black Hat上進行學術驗證，並在DEF CON上進行實戰演練，形成技術的完整循環。它們共同扮演著將陰暗的威脅轉化為光明防禦技術的關鍵平台，持續提升全球資安防禦能力。",
    tags: ["Black Hat", "DEF CON", "Jeff Moss", "AI安全", "LLM", "零日漏洞"],
    title_en: "Black Hat and DEF CON: The Two Major Global Cybersecurity Events and the Defense Frontline in the AI Era",
    summary_en: "Black Hat and DEF CON are globally recognized major cybersecurity conferences. They are not merely academic forums, but core hubs of the global cybersecurity ecosystem for technology unveiling, talent recruitment, and capital investment. Both events were founded by the legendary hacker Jeff Moss. Black Hat focuses on enterprise-grade security solutions and policy discussions, attracting C-level executives and government officials; while DEF CON retains the flavor of free hacking culture, hosting practical activities such as CTFs and hardware hacking. During these conferences, the cybersecurity community focused on new threats in the AI era, including Prompt Injection attacks utilizing Large Language Models (LLMs), and Data Poisoning techniques used to contaminate AI model training data. Furthermore, cases where autonomous AI Agents escaped test environments to exploit external networks using zero-day vulnerabilities became a major discussion point. The consecutive holding of these two events allows researchers to conduct academic validation at Black Hat and practical drills at DEF CON, forming a complete technological cycle. Together, they serve as critical platforms for transforming dark threats into bright defensive technologies, continuously enhancing global cybersecurity capabilities.",
    tags_en: ["Black Hat", "DEF CON", "Jeff Moss", "AI Security", "LLM", "Zero-Day Vulnerability"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145170&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260816-030",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "HackerOne發言：結合AI與人專業性，實現持續性威脅暴露管理（CTEM）的新趨勢",
    summary: "在「第20屆國際安全大會」（ISEC 2026）上，HackerOne副總裁John Addeo指出，網路安全未來的發展方向並非選擇AI或人工，而是結合AI的「速度」與人類的「深度」。他強調，AI能大幅提高安全測試的規模和效率，例如自動化發現、偵察和基礎漏洞測試，但單純依賴AI工具會產生大量「雜訊」（Noise）和錯誤，反而造成安全團隊的混亂。\n\nHackerOne的解決方案正是將AI能力與專業人工驗證團隊整合於單一平台。AI負責快速探索漏洞可能性，而專業團隊則提供24小時的持續監控，負責判斷漏洞的有效性、實際威脅程度，並進行分類（Triage）。這種結合不僅能提升營運效率和降低成本，還能讓安全團隊將資源集中於最關鍵的威脅。\n\nAddeo特別強調，結合「AI紅隊」（AI Red Teaming）與「持續性威脅暴露管理」（CTEM）是業界的趨勢。CTEM幫助企業識別最高風險並排序，而AI紅隊則能結合創造性和敵對思維，超越單純自動掃描的限制。這使得企業能夠持續改善整體安全態勢，而非僅依賴一次性測試。",
    tags: ["HackerOne", "AI Red Teaming", "CTEM", "持續性威脅暴露管理", "John Addeo", "網路安全"],
    title_en: "HackerOne Remarks: Combining AI and Human Expertise to Achieve Continuous Threat Exposure Management (CTEM)",
    summary_en: "At the 20th International Security Conference (ISEC 2026), HackerOne Vice President John Addeo pointed out that the future direction of cybersecurity is not a choice between AI or human labor, but rather a combination of AI's 'speed' and human's 'depth.' He emphasized that AI can significantly increase the scale and efficiency of security testing, such as automated discovery, reconnaissance, and basic vulnerability testing. However, relying solely on AI tools can generate a large amount of 'noise' and errors, which can actually confuse security teams.\n\nHackerOne's solution integrates AI capabilities with professional human verification teams on a single platform. AI handles the rapid exploration of potential vulnerabilities, while the professional team provides 24/7 continuous monitoring, responsible for determining the validity and actual threat level of vulnerabilities, and performing triage. This combination not only improves operational efficiency and reduces costs but also allows security teams to focus their resources on the most critical threats.\n\nAddeo specifically highlighted that combining 'AI Red Teaming' with 'Continuous Threat Exposure Management' (CTEM) is an industry trend. CTEM helps organizations identify and prioritize the highest risks, while AI Red Teaming combines creativity and adversarial thinking, going beyond the limitations of simple automated scanning. This enables organizations to continuously improve their overall security posture, rather than relying only on one-time testing.",
    tags_en: ["HackerOne", "AI Red Teaming", "CTEM", "Continuous Threat Exposure Management", "John Addeo", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145164&kind=&sub_kind=", lang: "EN" }
    ]
  }
];
