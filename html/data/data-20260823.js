// data-20260823.js — 2026-08-23
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-23"] = [
  {
    id: "20260823-9167",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心發行新版本：多個穩定版 Kernel 修補重要漏洞",
    summary: "本次更新涵蓋了多個 Linux 發行版的穩定核心（stable kernels），包括但不限於 7.1.10、6.18.46、6.12.105、6.6.153、6.1.184、5.15.217 和 5.10.266 等版本。這些新版本的核心都包含了多組重要的修補程式，旨在解決系統穩定性與安全相關的漏洞。由於原文僅列出版本號並指出「包含另一組重要修補」，未提供具體的 CVE 編號、CVSS 分數或攻擊向量細節。實務上，所有使用這些舊版核心的用戶應立即升級至公告的新版本，以確保系統的安全性和穩定性。建議使用者查閱各發行版的官方安全公告（如 Ubuntu, Debian, RHEL 等）獲取完整的修補清單與安裝指南。",
    tags: ["Linux 核心", "Kernel 更新", "穩定版 Kernel", "資安修補", "CVE"],
    title_en: "Linux Core Releases New Versions: Multiple Stable Kernels Patch Critical Vulnerabilities",
    summary_en: "This update covers stable kernels for multiple Linux distributions, including but not limited to versions such as 7.1.10, 6.18.46, 6.12.105, 6.6.153, 6.1.184, 5.15.217, and 5.10.266. These new kernel versions incorporate multiple critical patches aimed at addressing vulnerabilities related to system stability and security. Since the original text only lists version numbers and states that they 'contain another set of important patches,' it does not provide specific CVE IDs, CVSS scores, or attack vector details. In practice, all users running these older kernels should upgrade immediately to the announced new versions to ensure system security and stability. Users are advised to consult the official security announcements for each distribution (such as Ubuntu, Debian, RHEL, etc.) to obtain a complete list of patches and installation guides.",
    tags_en: ["Linux Kernel", "Kernel Update", "Stable Kernel", "Security Patch", "CVE"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1090099", lang: "EN" }
    ]
  },
  {
    id: "20260823-9182",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 7.3 核心新增 EFI 服務超時機制，防止有缺陷的韌體導致系統掛起",
    summary: "本次更新針對 Linux 7.3 核心中的 EFI (Extensible Firmware Interface) 運行時間服務（runtime service）進行了重大改進。以往若遇到有缺陷或卡住的 EFI/韌體呼叫，作業系統會無限期等待其完成，導致整個使用者空間（user-space）元件掛起（wedged），影響所有依賴該服務的功能。\n\n透過新增超時機制，當 EFI 運行時間服務呼叫超過預設的 120 秒閾值時，核心將判定韌體故障並宣告其為「卡住」（wedged）。這項改動由 Debian 開發人員 Breno Leitao 推動，源於在 NVIDIA Grace 伺服器上遇到的實際問題。此機制不修復底層的韌體 Bug，但能有效阻止單一掛起的 EFI 呼叫癱瘓整個系統資源。\n\n實務影響方面，這讓系統管理員能夠更明確地識別出故障來源是「EFI 韌體本身有誤」，而非其他未知的作業系統停頓問題。此安全強化對於大規模的設備群組（fleet scale）維護至關重要。",
    tags: ["Linux 7.3", "EFI", "韌體 (Firmware)", "核心漏洞", "Breno Leitao", "NVIDIA Grace"],
    title_en: "Linux 7.3 Kernel Adds EFI Service Timeout Mechanism to Prevent Faulty Firmware from Causing System Hangs",
    summary_en: "This update introduces significant improvements to the Extensible Firmware Interface (EFI) runtime service within the Linux 7.3 kernel. Previously, encountering a faulty or stalled EFI/firmware call would cause the operating system to wait indefinitely for its completion, resulting in the entire user-space component becoming wedged and affecting all functions dependent on that service.\n\nBy adding a timeout mechanism, if an EFI runtime service call exceeds a default threshold of 120 seconds, the kernel will detect firmware failure and declare it as 'wedged.' This change was championed by Debian developer Breno Leitao, stemming from real-world issues encountered on NVIDIA Grace servers. While this mechanism does not fix underlying firmware bugs, it effectively prevents a single stalled EFI call from paralyzing system resources.\n\nIn practical terms, this allows system administrators to more accurately identify the source of failure as being 'the EFI firmware itself is faulty,' rather than other unknown operating system stalls. This security enhancement is crucial for large-scale device fleet maintenance.",
    tags_en: ["Linux 7.3", "EFI", "Firmware", "Kernel Vulnerability", "Breno Leitao", "NVIDIA Grace"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-EFI", lang: "EN" }
    ]
  },
  {
    id: "20260823-9183",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 更新：DRM 子系統大幅提升圖形驅動支援，涵蓋老舊至新一代硬體",
    summary: "本次 Linux 7.3 的核心更新主要集中在 Direct Rendering Manager (DRM) 子系統的圖形驅動改善。此次升級為使用者帶來了廣泛的硬體兼容性提升：AMDGPU 驅動支援新增了對現代 AMD APU 第二個圖形管線、8K 顯示修復，並強化了舊硬體的 GPU 重置恢復能力；Intel 端則宣布 Xe3P Nova Lake 圖形已穩定化，並預設啟用。此外，Valve 的貢獻包括 DMEMCG 驅動的淘汰機制優化，旨在提升超過 vRAM 容量時的 Linux 遊戲效能，此功能適用於 AMDGPU 和 Intel 繪圖。對於老舊的 GCN 時代 AMD GPU，也增加了 DRM 格式修改器支援。同時，Rust 驅動能力持續建構，NVIDIA Nova 驅動在 Blackwell 和 Hopper 等新架構上進行了修復與提升。\n\n這些更新顯示 Linux 在圖形硬體層面的兼容性與效能優化趨勢明顯，特別是針對遊戲和高解析度顯示的支援加強。建議使用最新版本的 Linux 核心以獲取最佳的圖形驅動性能。",
    tags: ["Linux 7.3", "DRM", "AMDGPU", "Intel", "Nova Lake", "vRAM", "圖形驅動"],
    title_en: "Linux 7.3 Update: Significant Enhancements to DRM Subsystem Graphics Driver Support, Covering Legacy to Next-Gen Hardware",
    summary_en: "The core updates in Linux 7.3 primarily focus on graphics driver improvements within the Direct Rendering Manager (DRM) subsystem. This upgrade brings widespread hardware compatibility enhancements to users: AMDGPU driver support now includes support for modern AMD APUs' second graphics pipeline, 8K display fixes, and enhanced GPU reset recovery capabilities for older hardware; Intel announced the stabilization and default enablement of Xe3P Nova Lake graphics. Furthermore, Valve contributed optimizations to the DMEMCG driver's deprecation mechanism, aiming to improve Linux gaming performance when exceeding vRAM capacity. This feature applies to both AMDGPU and Intel graphics. Additionally, support for DRM format modifiers has been added for older GCN-era AMD GPUs. Concurrently, Rust driver capabilities continue to be built out, and the NVIDIA Nova driver received fixes and enhancements for new architectures like Blackwell and Hopper.\n\nThese updates demonstrate a clear trend of improved compatibility and performance optimization in Linux's graphics hardware layer, particularly strengthening support for gaming and high-resolution displays. Users are advised to use the latest version of the Linux kernel to achieve optimal graphics driver performance.",
    tags_en: ["Linux 7.3", "DRM", "AMDGPU", "Intel", "Nova Lake", "vRAM", "Graphics Driver"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-DRM", lang: "EN" }
    ]
  },
  {
    id: "20260823-9185",
    trackers: ["os"],
    category: "Linux",
    title: "Micron 專用檔案系統 FAMFS 為 Linux 7.3 進行準備，助力 CXL 與大容量記憶體應用",
    summary: "本篇報導指出，Micron 的特殊用途檔案系統 FAMFS（Fabric-Attached Memory File-System）已為 Linux 7.3 版本進行了相關的整合與修補。FAMFS 是專門設計用於處理大型共享/分散式記憶體應用場景，特別適用於超過 100TB 的記憶體範圍，而非一般用途檔案系統。它旨在透過文件級別、位元組級別的存取方式，支援現代 CXL（Compute Express Link）伺服器對高容量、高速記憶體的需求。\n\n雖然 FAMFS 目前尚未提交至上游核心版本，但其相關修補程式已經歷了十三輪的審查。開發團隊評估後，決定採用獨立的檔案系統核心驅動作為最佳實作方案，而非使用使用者空間的 FUSE 介面。Linux 7.3 的本次整合包含了 NVDIMM 和 DAX（Direct Access）等相關修補程式。\n\n對於開發者和資安人員而言，FAMFS 代表了 Linux 核心在處理超大規模、分散式記憶體資源方面的重大進展。雖然文章未提供具體的 CVSS 分數或版本號，但其趨勢顯示系統正在朝向更專業化、專用化的檔案管理架構發展。",
    tags: ["Micron", "FAMFS", "Linux 7.3", "CXL", "NVDIMM", "DAX"],
    title_en: "Micron's Specialized File System FAMFS Prepares for Linux 7.3, Boosting CXL and High-Capacity Memory Applications",
    summary_en: "This report indicates that Micron's specialized file system, FAMFS (Fabric-Attached Memory File-System), has undergone integration and patching for the Linux 7.3 version. FAMFS is specifically designed to handle large shared/distributed memory application scenarios, particularly suited for memory ranges exceeding 100TB, rather than being a general-purpose file system. It aims to support the high capacity and high speed demands of modern CXL (Compute Express Link) servers through file-level and byte-level access methods.\n\nAlthough FAMFS has not yet been submitted to the upstream core version, its related patches have undergone thirteen rounds of review. After evaluation by the development team, they decided that adopting an independent file system kernel driver is the optimal implementation approach, rather than using a user-space FUSE interface. This Linux 7.3 integration includes related patches for NVDIMM and DAX (Direct Access).\n\nFor developers and security professionals, FAMFS represents a significant advancement in how the Linux kernel handles ultra-large scale, distributed memory resources. While the article does not provide specific CVSS scores or version numbers, its trajectory shows the system moving toward more specialized and dedicated file management architectures.",
    tags_en: ["Micron", "FAMFS", "Linux 7.3", "CXL", "NVDIMM", "DAX"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Preps-Toward-FAMFS", lang: "EN" }
    ]
  },
  {
    id: "20260823-9187",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 新增 AES 加密 API，預期提升核心效能並簡化程式碼",
    summary: "Google 開發人員 Eric Biggers 為 Linux 核心（kernel）在版本 7.3 中整合了針對多種 AES 加密模式的新函式庫 API。這些新增的 API 涵蓋 ECB、CBC、CBC-CTS、CTR、XCTR、XTS、GCM 和 CCM 等常用模式，旨在取代目前難用且效率不高的 `crypto_skcipher` 或 `crypto_aead` 舊有介面。\n\n這次更新的主要目標是為後續遷移到架構優化（architecture-optimized）的 AES 程式碼鋪路。透過將這些功能移入函式庫層，可以大幅減少重複的「黏合」代碼（glue code），並提升整體效能。雖然本次整合尚未包含所有架構優化的實作，但它為後續的性能升級奠定了基礎。\n\n開發者應注意，使用這些新 API 的應用程式將受益於更乾淨、更高效的加密模組，預計在未來的核心版本中看到完整的效能提升。此更新屬於 Linux 核心元件的重大優化。",
    tags: ["Linux kernel", "AES", "API", "Eric Biggers", "LTS", "加密"],
    title_en: "Linux 7.3 Adds AES Encryption API to Improve Core Performance and Simplify Code",
    summary_en: "Google developer Eric Biggers has integrated a new library API for multiple AES encryption modes into the Linux kernel in version 7.3. These newly added APIs cover common modes such as ECB, CBC, CBC-CTS, CTR, XCTR, XTS, GCM, and CCM, aiming to replace the current difficult-to-use and inefficient `crypto_skcipher` or `crypto_aead` interfaces.\n\nThe primary goal of this update is to pave the way for subsequent migration to architecture-optimized AES code. By moving these functionalities into a library layer, it significantly reduces redundant \"glue code\" and improves overall performance. Although this integration does not yet include all architecture-optimized implementations, it lays the foundation for future performance upgrades.\n\nDevelopers should note that applications using these new APIs will benefit from cleaner, more efficient cryptographic modules, with full performance enhancements expected in future kernel versions. This update represents a major optimization to a Linux kernel component.",
    tags_en: ["Linux kernel", "AES", "API", "Eric Biggers", "LTS", "Cryptography"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-New-Crypto-AES-APIs", lang: "EN" }
    ]
  },
  {
    id: "20260823-9188",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心輸入子系統更新：修補 psmouse 用戶後使用型別錯誤，並加入多款新硬體驅動支援",
    summary: "本次為 Linux 7.3 版本週期進行的輸入子系統（input subsystem）大型更新。此次更新包含多項功能增進與安全修復，部分改進源自 AI/LLM 生成的發現。\n在安全性方面，Linux psmouse 驅動程式已加固，以防禦協議斷開代碼中潛在的 after use-after-free（使用後釋放）漏洞。此外，PS/2 驅動程式也修復了 FocalTech PS/2 驅動中的可能 under-flows。\n功能更新方面，Synaptics RMI4 驅動已升級至 Linux 7.3，可利用平台資料獲取觸控螢幕尺寸；該驅動亦為 Dell Inspiron 3521 筆電啟用 InterTouch SMBus 模式。此外，還新增了用於 Imagis ISA1200 震動馬達驅動 IC 的新驅動程式，此晶片應用於 Samsung Galaxy Tab 10.1 等行動裝置。\n核心輸入代碼也進行了優化，以確保設備在傳送事件前已完全準備就緒。開發者應關注這些針對多種輸入硬體的修復與加固。",
    tags: ["Linux 7.3", "input subsystem", "psmouse", "after use-after-free", "Synaptics RMI4", "PS/2 driver"],
    title_en: "Linux Kernel Input Subsystem Update: Patches psmouse for Use-After-Type Error and Adds Support for Multiple New Hardware Drivers",
    summary_en: "This is a major update to the input subsystem within the Linux 7.3 release cycle. This update includes multiple functional enhancements and security fixes, some of which are improvements derived from AI/LLM generated findings.\n\nIn terms of security, the Linux psmouse driver has been hardened to defend against potential after use-after-free vulnerabilities in protocol disconnection code. Furthermore, the PS/2 driver also fixed possible under-flows within the FocalTech PS/2 driver.\n\nRegarding functional updates, the Synaptics RMI4 driver has been upgraded to Linux 7.3 and can utilize platform data to retrieve touchscreen dimensions; this driver also enables InterTouch SMBus mode for the Dell Inspiron 3521 laptop. Additionally, a new driver has been added for the Imagis ISA1200 vibration motor driver IC, a chip used in mobile devices such as the Samsung Galaxy Tab 10.1.\n\nThe core input code was also optimized to ensure that devices are fully prepared before transmitting events. Developers should pay attention to these fixes and hardening measures targeting various input hardware.",
    tags_en: ["Linux 7.3", "input subsystem", "psmouse", "after use-after-free", "Synaptics RMI4", "PS/2 driver"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Input", lang: "EN" }
    ]
  },
  {
    id: "20260823-9189",
    trackers: ["os"],
    category: "Linux",
    title: "資深 Linux CIFS/SMB3 維護者 Steve French 逝世，維護職責交接給 Paulo Alcantara 與 Namjae Jeon",
    summary: "本文報導了長期參與 Linux 核心檔案系統（CIFS/SMB3）開發的資深工程師 Steve French 的離世消息。Steve French 自 2002 年開始為 CIFS VFS client 貢獻，曾是 IBM 工程師，自 2018 年起任職於 Microsoft，負責 Azure Storage 及 CIFS 核心程式碼的上游維護工作，並參與了 KSMBD 等內核 SMB 伺服器實作。\n\n由於其離世，CIFS/SMB3 的維護職責已由 Paulo Alcantara 和 Namjae Jeon 接任為新的共同維護者。這對 Linux 社群是一個重大損失，因為 French 在 CIFS/SMB2/SMB3 領域累積了深厚的經驗。\n\n此事件屬於社群人物變動與技術維護職責的交接，對於使用 SMB3 協定進行檔案共享和存取系統的企業環境具有重要的背景資訊價值。目前文章未提供任何漏洞或修補建議。",
    tags: ["Steve French", "CIFS", "SMB3", "Linux 核心", "Microsoft", "Paulo Alcantara", "Namjae Jeon"],
    title_en: "Veteran Linux CIFS/SMB3 Maintainer Steve French Passes Away; Maintenance Responsibilities Transition to Paulo Alcantara and Namjae Jeon",
    summary_en: "This article reports the passing of veteran engineer Steve French, who has been a long-time contributor to the Linux kernel file system (CIFS/SMB3) development. Steve French began contributing to the CIFS VFS client in 2002. He was previously an IBM engineer and worked at Microsoft starting in 2018, where he managed upstream maintenance for Azure Storage and CIFS core code, and participated in kernel SMB server implementations like KSMBD.\n\nFollowing his passing, the maintenance responsibilities for CIFS/SMB3 have been assumed by Paulo Alcantara and Namjae Jeon as the new co-maintainers. This represents a significant loss to the Linux community, given French's deep experience in the CIFS/SMB2/SMB3 domain.\n\nThis incident pertains to changes in community personnel and the handover of technical maintenance duties, providing important background information for enterprise environments utilizing SMB3 protocol for file sharing and system access. The article currently provides no vulnerability or patch recommendations.",
    tags_en: ["Steve French", "CIFS", "SMB3", "Linux Kernel", "Microsoft", "Paulo Alcantara", "Namjae Jeon"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/SMB3-CIFS-Maintainer-Change", lang: "EN" }
    ]
  },
  {
    id: "20260823-9190",
    trackers: ["os", "security"],
    category: "Linux",
    title: "eCryptfs 為 Linux 核心修補多項漏洞，強化對惡意資料和系統通訊的防禦",
    summary: "Linux 核心中的 eCryptfs（加密檔案系統）實作已針對版本 7.3 進行了多項錯誤修正與安全加固。eCryptfs 用於透明地加密檔案，其修補內容涵蓋了自 2006 年引入以來累積的潛在漏洞。\n本次更新特別強化了對惡意構造的元資料（metadata）的防禦，尤其是在底層加密檔案中。此外，也針對惡意的核心與使用者空間 miscdev 通訊進行了加固和修復。其他改善包括鎖定機制修正、顯示加密檔名相關掛載選項的錯誤處理，以及避免不必要的記憶體分配。\n這些安全漏洞部分可追溯至 eCryptfs 首次進入主線核心（mainline kernel）時期的提交紀錄。文章指出，至少有些漏洞是利用 AI 工具才被發現的。建議使用更新後的 Linux 7.3 版本以修補這些潛在的安全風險。",
    tags: ["eCryptfs", "Linux 核心", "Linux 7.3", "加密檔案系統", "CVE", "安全加固"],
    title_en: "eCryptfs Patches Multiple Vulnerabilities in Linux Kernel, Strengthening Defense Against Malicious Data and System Communication",
    summary_en: "The implementation of eCryptfs (encrypted file system) within the Linux kernel has received multiple bug fixes and security enhancements for version 7.3. eCryptfs is used to transparently encrypt files, and the patches address cumulative potential vulnerabilities since its introduction in 2006. This update specifically strengthens defense against malicious metadata, particularly within underlying encrypted files. Furthermore, it hardens and fixes communications between the kernel and user-space miscdev. Other improvements include lock mechanism corrections, error handling for mount options related to displaying encrypted filenames, and preventing unnecessary memory allocation. Some of these security vulnerabilities can be traced back to commit records from when eCryptfs first entered the mainline kernel. The article notes that some vulnerabilities were discovered using AI tools. Users are advised to use the updated Linux 7.3 version to patch these potential security risks.",
    tags_en: ["eCryptfs", "Linux Kernel", "Linux 7.3", "Encrypted File System", "CVE", "Security Hardening"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-eCryptfs", lang: "EN" }
    ]
  },
  {
    id: "20260823-9230",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 所有權法律爭議接近尾聲：法院裁定 IBM 與 Red Hat 的相關主張無效",
    summary: "這篇報導討論了圍繞 Linux 核心所有權的長期法律糾紛。該案可追溯至 1998 年，當時 IBM 為創建可在多處理器架構上運行的單一 UNIX 版本而與 Santa Cruz Operation (SCO) 等公司合作進行「Project Monterey」。由於 Linux 的出現並提供了在多個處理器上運行的 *nix 作業系統，導致 SCO及其法律繼承者聲稱擁有這些代碼，進而對 Linux 提出所有權主張。過去曾有相關訴訟發生，例如 2021 年 SCO 的一個後裔與 IBM 和解，但隨後又出現新的法律挑戰。\n\n最新的發展是，SCO 的另一個繼承者 Xinuos 在美國地方法院提起訴訟，指控 IBM 在貢獻 Project Monterey 代碼給 Linux 時違反了非獨家授權。然而，該案最終在美國第二巡迴上訴法院（United States Court of Appeals for the Second Circuit）的裁決下趨於終結。法院同意原先關於 Project Monterey 的法律規定已經過時，無法再進行審理。這使得 Linux 核心所有權爭議迎來了接近最終解決的局面。",
    tags: ["Linux", "SCO", "IBM", "Red Hat", "Project Monterey", "法律糾紛"],
    title_en: "Linux Ownership Legal Dispute Nears End: Court Rules Out Claims by IBM and Red Hat",
    summary_en: "This report discusses the long-running legal dispute surrounding Linux kernel ownership. The case dates back to 1998, when IBM collaborated with companies like Santa Cruz Operation (SCO) on 'Project Monterey' to create a single UNIX version capable of running on multi-processor architectures. Due to the emergence of Linux and its provision of an *nix operating system that runs on multiple processors, SCO and its legal successors claimed ownership of this code, subsequently making ownership claims against Linux. Previous lawsuits occurred, such as in 2021 when one descendant of SCO settled with IBM, but new legal challenges have since emerged.\n\nThe latest development involves another successor of SCO, Xinuos, filing a lawsuit in a U.S. district court, alleging that IBM violated non-exclusive licensing when contributing Project Monterey code to Linux. However, the case has now reached an end following a ruling by the United States Court of Appeals for the Second Circuit. The court agreed that the original legal provisions regarding Project Monterey are outdated and no longer subject to review. This brings the dispute over Linux kernel ownership to a near conclusion.",
    tags_en: ["Linux", "SCO", "IBM", "Red Hat", "Project Monterey", "Legal Dispute"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/08/24/ancient-who-owns-linux-case-now-has-one-foot-very-deep-in-the-grave/5291513", lang: "EN" }
    ]
  },
  {
    id: "20260823-9258",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 File Explorer 新增「Preview anyway」功能，改善下載檔案預覽體驗",
    summary: "由於安全考量，Microsoft 自 2025 年 10 月起已限制 File Explorer 對於從網際網路下載的檔案在 Preview pane 中的預覽功能。此限制旨在修補一個潛在漏洞：如果使用者預覽包含外部路徑參考的 HTML 標籤（如 `<a>` 或 `<script>`）的檔案，可能導致 NTLM hash 外洩。\n\n為改善用戶體驗，Microsoft 正測試並計畫推出「Preview anyway」按鈕。此功能允許使用者在 File Explorer 顯示警告後，仍可手動覆蓋安全限制，直接預覽信任的下載檔案，而無需透過右鍵 > 屬性 > 解除封鎖（Unblock）等繁瑣步驟。\n\n這項更新旨在維持系統預設的安全保護機制，同時大幅提升用戶在處理本地和網路來源文件時的便利性。建議使用者留意 Windows Insiders 的最新版本更新，以使用此新功能。",
    tags: ["Windows 11", "File Explorer", "Preview pane", "NTLM hash", "Microsoft", "安全漏洞修補"],
    title_en: "Windows 11 File Explorer Adds 'Preview anyway' Feature to Improve Downloaded File Preview Experience",
    summary_en: "Due to security considerations, Microsoft has restricted the ability of File Explorer to preview files downloaded from the internet in the Preview pane starting October 2025. This restriction aims to patch a potential vulnerability: if a user previews an HTML file containing external path references (such as `<a>` or `<script>`), it could potentially lead to NTLM hash leakage.\n\nTo improve the user experience, Microsoft is testing and planning to introduce a 'Preview anyway' button. This feature will allow users to manually override the security restriction and directly preview trusted downloaded files after seeing a warning in File Explorer, eliminating the need for cumbersome steps like right-clicking > Properties > Unblock.\n\nThis update aims to maintain the system's default security protections while significantly enhancing user convenience when handling both local and network-sourced files. Users are advised to monitor Windows Insiders for the latest version updates to utilize this new feature.",
    tags_en: ["Windows 11", "File Explorer", "Preview pane", "NTLM hash", "Microsoft", "Security Vulnerability Patch"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/24/windows-11s-file-explorer-is-restoring-a-feature-it-disabled-for-security-thanks-to-preview-anyway", lang: "EN" }
    ]
  },
  {
    id: "20260823-9261",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 更新：現代化滑鼠指示器與 WinUI 重塑多個核心功能，提升用戶體驗",
    summary: "本文介紹了 Windows 11 在使用者介面（UI/UX）上的重大更新趨勢。其中一個亮點是「滑鼠指示器」（Mouse Indicator）功能，它取代了自 Windows XP 以來未變的傳統實現。新版不僅外觀更現代化、動畫更流暢，還新增了「保持指示器可見直到關閉」的選項（透過 Win+Ctrl+Shift+M 觸發）。此外，Windows 11 還在全面現代化其他核心功能：\n\n1. **AutoPlay 對話框**：改用基於 WinUI 的新介面，更具響應性、一致性，並恢復了記憶用戶偏好的功能。\n2. **屬性表（Properties sheet）**：正在使用現代化的 WinUI 重設計圖，支援顯示縮放和深色模式，使其與整體 Windows 介面風格統一。\n3. **列印管理應用程式 (Print Management)**：也將推出現代化版本。\n\n這些改動表明 Microsoft 正積極投入資源重塑 Windows 11 的一致性與設計感，預計未來更多功能將迎來現代化的升級。",
    tags: ["Windows 11", "WinUI", "Mouse Indicator", "AutoPlay", "Properties sheet", "Microsoft"],
    title_en: "Windows 11 Update: Modernized Mouse Pointer and WinUI Overhaul Core Features to Enhance User Experience",
    summary_en: "This article introduces major trends in the user interface (UI/UX) updates for Windows 11. A highlight is the 'Mouse Indicator' feature, which replaces the traditional implementation that has remained unchanged since Windows XP. The new version not only features a more modernized appearance and smoother animations but also adds an option to 'keep indicator visible until closed' (triggered via Win+Ctrl+Shift+M). Furthermore, Windows 11 is modernizing other core functions:\n\n1. **AutoPlay Dialog**: Adopting a new WinUI-based interface that is more responsive and consistent, and restores the ability to remember user preferences.\n2. **Properties Sheet**: Is being redesigned using modernized WinUI blueprints, supporting display scaling and dark mode, ensuring consistency with the overall Windows interface style.\n3. **Print Management Application**: Will also be rolled out in a modernized version.\n\nThese changes indicate that Microsoft is actively investing resources into reshaping the consistency and design aesthetic of Windows 11, suggesting that more features are expected to receive modernization upgrades in the future.",
    tags_en: ["Windows 11", "WinUI", "Mouse Indicator", "AutoPlay", "Properties sheet", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/23/windows-11-is-modernizing-a-mouse-indicator-that-hasnt-changed-since-the-windows-xp", lang: "EN" }
    ]
  },
  {
    id: "20260823-8983",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕 DBD::Pg 3.21.0 版本：Perl 庫存在堆疊越界寫入漏洞 (CVE-2026-78183)",
    summary: "資安研究指出，用於 Perl 的資料庫驅動程式 DBD::Pg 版本 3.21.0 存在一個嚴重的堆疊越界寫入（heap out-of-bounds write）漏洞，編號為 CVE-2026-78183。此漏洞源於 `quote_float()` 函式在處理特殊字面量（如 NaN, Inf, Infinity 等）時的邏輯缺陷。當使用 `$dbh->quote` 方法並傳入這些特殊數值時，程式會誤判長度，導致實際輸出的資料比預期多出 2 個位元組，進而造成記憶體溢寫。\n此問題是從 3.21.0 版本引入的。若系統使用該版本或更早版本，且在處理包含特殊浮點數值的 SQL 查詢時，可能被攻擊者利用執行惡意代碼。修補建議是立即升級到 DBD-Pg 的 3.21.1 或更高版本。\n（備註：原文未提供 CVSS 分數、影響台數或外洩筆數等具體數字。）",
    tags: ["CVE-2026-78183", "DBD::Pg", "Perl", "堆疊越界寫入", "Out-of-bounds Write", "DBI"],
    title_en: "Warning for DBD::Pg Version 3.21.0: Heap Out-of-Bounds Write Vulnerability in Perl Library (CVE-2026-78183)",
    summary_en: "Cybersecurity research has identified a critical heap out-of-bounds write vulnerability, designated CVE-2026-78183, in the DBD::Pg database driver for Perl. The flaw originates from a logical defect within the `quote_float()` function when handling special literals (such as NaN, Inf, or Infinity). When the `$dbh->quote` method is used with these special numeric values, the program incorrectly calculates the length, resulting in the actual output data being two bytes longer than expected. This discrepancy leads to a memory overflow write.\n\nThis issue was introduced starting with version 3.21.0. Systems using this version or earlier versions that process SQL queries containing special floating-point values may be vulnerable to malicious code execution by an attacker. The recommended remediation is to immediately upgrade to DBD-Pg version 3.21.1 or later.\n(Note: The original text did not provide specific metrics such as CVSS scores, number of affected systems, or number of leaked records.)",
    tags_en: ["CVE-2026-78183", "DBD::Pg", "Perl", "Heap Out-of-bounds Write", "Out-of-bounds Write", "DBI"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/23/5", lang: "EN" }
    ]
  },
  {
    id: "20260823-8984",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CVE-2026-19565：Apache::AppSamurai Perl模組生成可預測的會話認證金鑰，可能導致身份驗證繞過",
    summary: "資安研究人員發現 Apache::AppSamurai 的 `Apache::AppSamurai::Util` 版本 1.01 及更早版本存在 CVE-2026-19565 漏洞。此漏洞屬於預測性會話憑證偽造，允許攻擊者透過掌握會話建立的秒數和工作進程 ID (process id)，來推導出受害者瀏覽器接收到的會話 Cookie 金鑰。\n\n該模組在 `CreateSessionAuthKey` 函式中生成金鑰時，依賴了時間（Time::HiRes）和工作進程 ID。由於這些資訊的範圍有限且可預測，攻擊者可以列舉候選金鑰，從而繞過受保護資源的身份驗證。\n\n此漏洞影響 CWE-341 (Predictable from Observable State) 和 CAPEC-59/CAPEC-115。由於 Apache::AppSamurai 模組自 2008 年後未再發布，建議使用者應立即遷移至替代的解決方案以修復。\n\n（原文未提供 CVSS 分數、影響台數或外洩筆數。）",
    tags: ["CVE-2026-19565", "Apache::AppSamurai", "Perl", "會話管理", "身份驗證繞過", "CWE-341"],
    title_en: "CVE-2026-19565: Apache::AppSamurai Perl Module Generates Predictable Session Authentication Key, Potentially Leading to Authentication Bypass",
    summary_en: "Security researchers have discovered CVE-2026-19565 in versions 1.01 and earlier of `Apache::AppSamurai::Util`. This vulnerability is a predictable session credential forgery flaw that allows an attacker to deduce the session cookie key received by the victim's browser by knowing the seconds elapsed during session creation and the process ID (PID) of the working process.\n\nThe module relies on time (`Time::HiRes`) and the working process ID when generating keys in the `CreateSessionAuthKey` function. Because these pieces of information have a limited and predictable range, an attacker can enumerate candidate keys, thereby bypassing authentication for protected resources.\n\nThis vulnerability affects CWE-341 (Predictable from Observable State) and CAPEC-59/CAPEC-115. Since the Apache::AppSamurai module has not been released since 2008, users are advised to immediately migrate to an alternative solution for remediation.\n\n(CVSS score, affected count, or leaked record count were not provided in the original text.)",
    tags_en: ["CVE-2026-19565", "Apache::AppSamurai", "Perl", "Session Management", "Authentication Bypass", "CWE-341"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/23/4", lang: "EN" }
    ]
  },
  {
    id: "20260823-8985",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Kata Containers 運行時發現 CVE-2026-50540 漏洞，影響 Rust 與 Go 版本",
    summary: "安全研究人員發布了關於 Kata Containers 運行時的漏洞資訊，編號為 CVE-2026-50540。此漏洞已於 2026 年 7 月 20 日公開。Kata Containers 是用於容器隔離和虛擬化技術的重要組件，其運行時支援 Rust 和 Go 兩種語言版本。由於該漏洞的性質，建議所有使用 Kata Containers 的開發者和系統管理員應立即採取修補措施或升級到安全版本以防止潛在的攻擊風險。具體修補細節需參考官方公告。",
    tags: ["Kata Containers", "CVE-2026-50540", "容器運行時", "Rust", "Go語言"],
    title_en: "Vulnerability Found in Kata Containers Runtime: CVE-2026-50540 Affects Rust and Go Versions",
    summary_en: "Security researchers have disclosed a vulnerability, identified as CVE-2026-50540, affecting the Kata Containers runtime. This vulnerability was made public on July 20, 2026. Kata Containers is a critical component used for container isolation and virtualization technology, with its runtime supporting both Rust and Go language versions. Due to the nature of this flaw, all developers and system administrators using Kata Containers are advised to immediately apply patches or upgrade to a secure version to prevent potential attack risks. Specific patching details should be referenced from official announcements.",
    tags_en: ["Kata Containers", "CVE-2026-50540", "Container Runtime", "Rust", "Go"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/23/3", lang: "EN" }
    ]
  },
  {
    id: "20260823-8986",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl的Reverse::Proxy套件存在CVE-2026-75922，允許透過HTTP請求竊取資訊",
    summary: "CPAN Security Group發布了關於`Reverse::Proxy`套件（版本早於 0.04）的安全公告。該漏洞屬於HTTP請求竊取資訊（HTTP request smuggling），攻擊者可以利用路徑資訊（PATH_INFO）的百分比解碼機制，將惡意的CRLF序列寫入未經編碼的上游請求行。\n\n具體而言，當客戶端發送包含`%0d%0a`的路徑時，它會在上游伺服器處被解析為結束請求行的CRLF。隨後，攻擊者在CRLF之後附加的任何內容都會被上游系統視為第二個獨立的HTTP請求。這使得攻擊者能夠將流量導向代理本身路由未暴露的上游路徑。\n\n此問題涉及CWE-444（不一致地解釋HTTP請求）和CWE-93（不當清除CRLF序列）。修復建議是立即升級至 `Reverse::Proxy` 0.04 或更高版本，以確保正確處理未經編碼的請求內容。",
    tags: ["CVE-2026-75922", "Reverse::Proxy", "Perl", "HTTP request smuggling", "CPAN"],
    title_en: "Perl's Reverse::Proxy module has CVE-2026-75922 vulnerability allowing information theft via HTTP requests",
    summary_en: "The CPAN Security Group issued a security advisory regarding the `Reverse::Proxy` module (versions prior to 0.04). This vulnerability is an HTTP request smuggling flaw, which allows attackers to utilize the percentage decoding mechanism of the PATH_INFO to inject malicious CRLF sequences into unencoded upstream request lines.\n\nSpecifically, when a client sends a path containing `%0d%0a`, it is parsed as a CRLF ending the request line at the upstream server. Subsequently, any content appended by the attacker after this CRLF will be treated by the upstream system as a second independent HTTP request. This enables attackers to redirect traffic to unexposed upstream paths via the proxy itself.\n\nThis issue relates to CWE-444 (Inconsistent interpretation of HTTP requests) and CWE-93 (Improper clearing of CRLF sequences). The recommended fix is to immediately upgrade to `Reverse::Proxy` version 0.04 or higher, ensuring correct handling of unencoded request content.",
    tags_en: ["CVE-2026-75922", "Reverse::Proxy", "Perl", "HTTP request smuggling", "CPAN"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/23/2", lang: "EN" }
    ]
  },
  {
    id: "20260823-8987",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CVE-2026-41992：gzip 函式庫存在越界記憶體緩衝區存取漏洞，需升級至 1.15 版本",
    summary: "本公告揭露了 gzip 壓縮工具的 CVE-2026-41992 漏洞。此為一種越界記憶體緩衝區存取（Out-of-bounds memory buffer access）問題，影響版本為 gzip 1.14 及更早版本。攻擊者若能讓單一 gzip -d 實例解壓縮經過特殊構造的 LZW 資料後接上特殊構造的 LZH 資料，便可能觸發此漏洞。\n\n該漏洞的修復建議是立即套用提供的補丁，或升級至最新的 gzip 1.15 版本。由於這類底層函式庫漏洞具有廣泛影響性，所有使用 gzip 的系統和應用程式都應儘速進行安全更新，以防止潛在的資料處理攻擊。",
    tags: ["CVE-2026-41992", "gzip", "越界緩衝區", "LZH/LZW", "函式庫漏洞"],
    title_en: "CVE-2026-41992: Out-of-bounds memory buffer access vulnerability in gzip library, requires upgrade to version 1.15",
    summary_en: "This advisory reveals CVE-2026-41992, a vulnerability in the gzip compression tool. This is an out-of-bounds memory buffer access issue affecting versions of gzip 1.14 and earlier. An attacker could trigger this vulnerability by having a single `gzip -d` instance decompress specially crafted LZW data followed by specially crafted LZH data.\n\nThe recommended fix for this vulnerability is to immediately apply the provided patch or upgrade to the latest gzip 1.15 version. Due to the widespread impact of such low-level library vulnerabilities, all systems and applications using gzip should prioritize security updates to prevent potential data processing attacks.",
    tags_en: ["CVE-2026-41992", "gzip", "Out-of-bounds buffer", "LZH/LZW", "Library vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/23/1", lang: "EN" }
    ]
  },
  {
    id: "20260823-9099",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳將推出 M6 晶片 iMac，並搭配全新顏色選項",
    summary: "根據 Bloomberg 的 Mark Gurman 報導，蘋果（Apple）預計在今年底前會發布新款搭載 M6 晶片的 iMac。這款 iMAC 在過去兩年間尚未更新，且此前已跳過 M2 和 M5 系列晶片。雖然文章未透露具體的硬體升級細節，但指出這次刷新將包含「一些新的顏色選項」。此外，蘋果在今年秋季的 Mac 生態系預計會非常活躍，除了新款 iMAC 外，還可能推出配備觸控螢幕和 Tandem OLED 的 MacBook Pro 型號、基礎款 M6 晶片的 14 吋 MacBook Pro，以及全新的 M5 Max 和 M5 Ultra Mac Studio。值得注意的是，M6 將是首個基於全新 2nm 製程的 Mac 晶片，但據傳不會有 M6 Pro、M6 Max 或 M6 Ultra 等高階版本，蘋果反而正加速推出 M7 系列。",
    tags: ["Apple", "iMac", "M6", "M5", "macOS", "2nm"],
    title_en: "Apple rumored to launch M6 chip iMac with new color options",
    summary_en: "According to Bloomberg's Mark Gurman, Apple is expected to release a new iMac featuring the M6 chip before the end of this year. This iMAC has not been updated in the past two years and previously skipped both the M2 and M5 series chips. Although the article does not reveal specific hardware upgrade details, it points out that this refresh will include 'some new color options.' Furthermore, Apple's Mac ecosystem is expected to be very active this autumn; besides the new iMac, there may also be a MacBook Pro model featuring a touchscreen and Tandem OLED, a base M6 chip 14-inch MacBook Pro, and brand new M5 Max and M5 Ultra Mac Studio. Notably, the M6 will be the first Mac chip based on the new 2nm process, but reports suggest there will not be high-end versions like M6 Pro, M6 Max, or M6 Ultra; instead, Apple is reportedly accelerating the launch of the M7 series.",
    tags_en: ["Apple", "iMac", "M6", "M5", "macOS", "2nm"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/23/apple-refreshed-imac-m6-chip-new-colors", lang: "EN" }
    ]
  },
  {
    id: "20260823-9101",
    trackers: ["os"],
    category: "Apple",
    title: "Apple準備推出全新智慧家庭中樞、HomePod mini與Apple TV 4K，整合Siri AI功能",
    summary: "根據報導，蘋果公司（Apple）正為即將推出的多款家用產品進行重大零售店鋪的佈置調整。這些更新預計包括煥新版的HomePod mini和Apple TV 4K，但更引人注目的是一個全新的智慧家庭中樞（smart home hub）。該中樞據傳具備7吋方形螢幕，並將運行新的作業系統，支援小工具（widgets）、FaceTime通話功能，同時作為所有智慧家居配件的控制中心，並整合A18晶片。這些新產品預計與Siri AI功能深度整合。此外，文章也提到Apple TV 4K可能配備更新的Siri Remote。這些重大變動暗示了蘋果正在重新定義其家庭生態系統的核心體驗，為用戶提供更強大、更集成的智慧家居解決方案。",
    tags: ["Apple", "HomePod mini", "Apple TV 4K", "smart home hub", "Siri AI", "A18"],
    title_en: "Apple prepares to launch new smart home hub, HomePod mini, and Apple TV 4K, integrating Siri AI features",
    summary_en: "According to reports, Apple is making significant retail store layout adjustments for several upcoming household products. These updates are expected to include refreshed versions of the HomePod mini and Apple TV 4K, but most notably, a brand new smart home hub. This hub reportedly features a 7-inch square screen, will run a new operating system, support widgets and FaceTime calling, and serve as the central control for all smart home accessories, while integrating the A18 chip. These new products are expected to integrate deeply with Siri AI functionality. Furthermore, the article mentions that the Apple TV 4K might be equipped with an updated Siri Remote. These major changes suggest that Apple is redefining the core experience of its home ecosystem, offering users a more powerful and integrated smart home solution.",
    tags_en: ["Apple", "HomePod mini", "Apple TV 4K", "smart home hub", "Siri AI", "A18"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/23/apple-preparing-for-homepod-mini-apple-tv-smart-home-launches", lang: "EN" }
    ]
  },
  {
    id: "20260823-9339",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "惡意軟體 ToxicPanda 進化，利用 VPN 與 ADB 權限竊取資料並繞過系統防護",
    summary: "安全公司 Zimperium 分析發現，名為 ToxicPanda 的 Android 惡意軟體已升級至 2.0 版本。此版本擴大了攻擊範圍，支援 349 個應用程式和 167 個遠端指令，目標涵蓋銀行、金融及加密貨幣等領域。\n\n該惡意軟體利用請求 VPN 服務權限來建立本地介面，從而攔截網路流量，特別是針對 Google Play 和 Google Play Services 的通訊。此外，它還會要求 Accessibility Service 權限，並自動濫用 Android Debug Bridge (ADB) 來取得 Shell 層級的存取權。\n\n透過這些高權限操作，ToxicPanda 能夠繞過標準的 Android 執行時同意提示，實施持久性機制（如『autoBoot』指令），並竊取設備 PIN、解鎖圖案和密碼。攻擊者甚至能使用假系統更新畫面來隱藏惡意活動。\n\n修補建議方面，用戶應提高警覺，留意來自未知來源的應用程式權限請求，特別是 VPN 或 Accessibility Service 相關的權限；同時，安全廠商需持續監測和修補 Android OS 在高權限操作（如 ADB）上的漏洞。",
    tags: ["ToxicPanda", "Android Malware", "VPN Permissions", "ADB", "Accessibility Service", "Zimperium"],
    title_en: "Malware ToxicPanda Evolves, Stealing Data and Bypassing Defenses Using VPN and ADB Permissions",
    summary_en: "Analysis by security firm Zimperium reveals that the Android malware named ToxicPanda has upgraded to version 2.0. This version expands the attack surface, supporting 349 applications and 167 remote commands, targeting sectors including banking, finance, and cryptocurrency.\n\nThe malware utilizes the request for VPN service permissions to establish a local interface, thereby intercepting network traffic, particularly communications related to Google Play and Google Play Services. Furthermore, it requests Accessibility Service permissions and automatically abuses the Android Debug Bridge (ADB) to gain shell-level access.\n\nThrough these high-privilege operations, ToxicPanda can bypass standard Android runtime consent prompts, implement persistence mechanisms (such as the 'autoBoot' command), and steal device PINs, unlock patterns, and passwords. Attackers can even use fake system update screens to conceal malicious activities.\n\nIn terms of remediation, users are advised to remain vigilant and pay attention to application permission requests from unknown sources, especially those related to VPN or Accessibility Services; simultaneously, security vendors must continuously monitor and patch vulnerabilities in the Android OS concerning high-privilege operations (such as ADB).",
    tags_en: ["ToxicPanda", "Android Malware", "VPN Permissions", "ADB", "Accessibility Service", "Zimperium"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/toxicpanda-android-malware-uses-vpn-permissions-to-block-google-play", lang: "EN" }
    ]
  },
  {
    id: "20260823-9047",
    trackers: ["os"],
    category: "Android",
    title: "三星傳回歸「相機條」設計：Galaxy S27 Ultra預計採用全新外觀",
    summary: "根據洩漏資訊，三星（Samsung）計劃在 Galaxy S27 系列中重新引入一款先前已流出的設計。據信該設計將主要應用於 Galaxy S27 Ultra。這款新機型預計會採用一個相機條式的後置鏡頭配置，此風格曾被傳聞用於取消的 Galaxy S26 Edge。具體外觀描述為左側有兩個鏡頭、一個包含第三個鏡頭的膠囊狀結構（據傳 Ultra 今年將移除次級望遠鏡頭），以及閃光燈。整個相機模組位於一個延伸至兩側的平臺上，風格類似於 Apple iPhone 17 系列的設計語言。\n此外，有消息指出 Galaxy S27 系列預計將提供黑色、白色、藍色、紫色和粉紅色等多種顏色選擇。該系列預計在明年年初發布。",
    tags: ["Samsung", "Galaxy S27 Ultra", "手機設計", "相機模組", "洩漏資訊"],
    title_en: "Samsung to Reintroduce 'Camera Bar' Design for Galaxy S27 Ultra: New Look Expected",
    summary_en: "According to leaked information, Samsung plans to reintroduce a previously rumored design into the Galaxy S27 series. This design is expected to be primarily featured on the Galaxy S27 Ultra. The new model is anticipated to adopt a camera bar-style rear camera configuration—a style once rumored for the canceled Galaxy S26 Edge. Specific external descriptions include two lenses on the left, a pill-shaped structure containing a third lens (as the secondary telephoto lens is reportedly being removed from the Ultra this year), and a flash unit. The entire camera module rests on a platform that extends to both sides, resembling the design language of the Apple iPhone 17 series. Furthermore, reports indicate that the Galaxy S27 series is expected to offer multiple color options, including black, white, blue, purple, and pink. The series is anticipated to be released early next year.",
    tags_en: ["Samsung", "Galaxy S27 Ultra", "Mobile Design", "Camera Module", "Leak Information"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/23/samsung-galaxy-s27-redesign-leaks", lang: "EN" }
    ]
  },
  {
    id: "20260823-9048",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 傳出 Pixel Watch Ultra 概念，預期將參考 Fitbit Air 的設計與功能",
    summary: "本文為一篇關於科技趨勢的觀察文章，討論了 Google 可能推出「Pixel Watch Ultra」這款智慧手錶的概念。作者認為，隨著市場對「Ultra」型號的追捧，Google 很可能會發布此類產品。從內容推測，該新機型的設計與功能預期將參考 Fitbit Air 的風格和特性。文章主要為趨勢分析而非技術公告，未提及任何具體的漏洞、CVE 編號或修補建議。因此，實務影響屬於市場期待層面。",
    tags: ["Google", "Pixel Watch Ultra", "Fitbit Air", "智慧手錶", "產品趨勢"],
    title_en: "Google Rumored to Launch 'Pixel Watch Ultra' Concept, Expected to Reference Fitbit Air Design and Features",
    summary_en: "This article is a tech trend observation discussing the potential concept of Google releasing a 'Pixel Watch Ultra' smartwatch. The author suggests that given the market's enthusiasm for 'Ultra' models, Google may launch such a product. Based on the content, the new model is expected to reference the style and features of the Fitbit Air. This article serves as trend analysis rather than a technical announcement, and does not mention any specific vulnerabilities, CVE IDs, or patch recommendations. Therefore, its practical impact lies in market anticipation.",
    tags_en: ["Google", "Pixel Watch Ultra", "Fitbit Air", "Smartwatch", "Product Trend"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/23/google-pixel-watch-ultra-ideas", lang: "EN" }
    ]
  },
  {
    id: "20260823-9168",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安新聞內容：悼念 Steve French",
    summary: "本文為一篇個人悼文，旨在紀念一位名為 Steve 的社群人物。文章未包含任何關於軟體漏洞、安全事件或技術更新的資訊。因此無法提供受影響產品、CVE 或修補建議。",
    tags: ["無資安內容", "悼念"],
    title_en: "Non-Cybersecurity News Content: Remembering Steve French",
    summary_en: "This article is a personal tribute intended to commemorate a community figure named Steve. It does not contain any information regarding software vulnerabilities, security incidents, or technical updates. Therefore, we cannot provide affected products, CVEs, or patch recommendations.",
    tags_en: ["Non-Cybersecurity Content", "Tribute"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1090098", lang: "EN" }
    ]
  },
  {
    id: "20260823-9184",
    trackers: ["os"],
    category: "重點關注",
    title: "ReactOS整合 Job Objects支援，邁向運行現代Windows應用程式的重要里程碑",
    summary: "開源作業系統 ReactOS 近期在核心層面取得了重大進展，成功將對 Job Objects 的基本支援合併到其代碼庫。Job Objects 是 Windows 核心中的關鍵原始功能（kernel primitives），用於將一組程序群組化管理和控制，使其能作為單一單位運作。這對於現代應用程式至關重要，特別是在處理網頁瀏覽器所需的沙盒機制、資源限制管理以及集體終止等安全與效能需求。\n\n本次整合的 Job Objects 支援主要針對 Windows 8 之前的功能，雖然仍有部分進階特性待實作，但已成功實現了基本運作。這項工作是 ReactOS 長期以來持續努力的目標之一。ReactOS 的此舉標誌著其在提升與現代 Windows 軟體兼容性方面邁出了重要一步，此前它也曾達成支援 Windows NT6 系統呼叫和運行《Half-Life 2》等里程碑。\n\n對於開發者而言，這代表 ReactOS 在模擬複雜的作業系統環境和執行現代應用程式的能力上有了顯著提升。",
    tags: ["ReactOS", "Job Objects", "Windows 兼容性", "開源作業系統", "核心元件", "沙盒機制"],
    title_en: "ReactOS Integrates Job Object Support, Marking Key Milestone Towards Running Modern Windows Applications",
    summary_en: "The open-source operating system ReactOS has recently achieved a major advancement at the kernel level by successfully merging basic support for Job Objects into its codebase. Job Objects are critical kernel primitives in Windows used to group and manage a set of processes, allowing them to operate as a single unit. This capability is crucial for modern applications, especially for security and performance requirements such as sandboxing mechanisms, resource limitation management, and collective termination needed by web browsers.\n\nThis integrated Job Object support primarily targets functionality predating Windows 8. While some advanced features still require implementation, the basic operation has been successfully achieved. This work represents one of ReactOS' long-term goals. ReactOS' move marks a significant step in enhancing compatibility with modern Windows software, following previous milestones such as supporting Windows NT6 system calls and running applications like *Half-Life 2*.\n\nFor developers, this signifies a notable improvement in ReactOS' ability to simulate complex operating system environments and execute modern applications.",
    tags_en: ["ReactOS", "Job Objects", "Windows Compatibility", "Open Source OS", "Kernel Component", "Sandboxing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ReactOS-Job-Objects", lang: "EN" }
    ]
  },
  {
    id: "20260823-9186",
    trackers: ["os"],
    category: "重點關注",
    title: "AMD透過調整GCC編譯器中的分支誤預測成本，為Zen 5與Zen 4處理器帶來效能提升",
    summary: "AMD的工程師Venkataramanan Kumar於本週發布了一項針對GNU Compiler Collection (GCC) 的補丁。此補丁旨在提高Zen 4和Zen 5處理器在編譯器成本表中的分支誤預測（branch misprediction）比例，透過調整該成本，成功讓SPEC CPU的544.nab_r基準測試在Zen 5上提升了12%，在Zen 4上提升了9%。此項優化主要針對使用「-O3 -march=native -flto」最佳化的建構。雖然這類調整可能對其他工作負載也有益，但目前主要的測試場域仍是SPEC CPU。該補丁已提交至GCC郵件列表審查，預計將納入明年發布的GCC 17功能版本，並有可能回溯應用於GCC 16.3點版本。AMD在將新的CPU編譯器目標（如Zen 6）上游化方面進步顯著，但在成本表調校和優化方面仍有提升空間，這對於長週期發布的GCC來說是重要的效能調整。",
    tags: ["AMD", "GCC", "Zen 5", "Zen 4", "編譯器優化", "SPEC CPU"],
    title_en: "AMD Boosts Performance in Zen 5 and Zen 4 Processors by Adjusting Branch Misprediction Cost in GCC Compiler",
    summary_en: "AMD engineer Venkataramanan Kumar released a patch this week targeting the GNU Compiler Collection (GCC). This patch aims to improve the branch misprediction ratio of Zen 4 and Zen 5 processors within the compiler's cost model. By adjusting this cost, the optimization successfully boosted performance in the SPEC CPU 544.nab_r benchmark by 12% on Zen 5 and 9% on Zen 4. This optimization primarily targets builds optimized using \"-O3 -march=native -flto.\" While such adjustments may benefit other workloads, the primary testing ground remains SPEC CPU. The patch has been submitted to the GCC mailing list for review and is expected to be included in the GCC 17 feature release next year, with potential backporting to GCC 16.3. AMD has made significant progress in upstreaming new CPU compiler targets (such as Zen 6), but there remains room for improvement in cost model tuning and optimization—a crucial performance adjustment for a long-cycle release like GCC.",
    tags_en: ["AMD", "GCC", "Zen 5", "Zen 4", "Compiler Optimization", "SPEC CPU"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-Zen-5-Mispredict-Cost", lang: "EN" }
    ]
  },
  {
    id: "20260823-9231",
    trackers: ["os"],
    category: "重點關注",
    title: "Cursor 推出 Origin，改用物件儲存解決大規模 Git 版本控制的擴展性瓶頸",
    summary: "本文介紹了 Cursor 公司如何為其名為 Origin 的 Git 基礎倉庫服務設計了一種新架構。由於傳統 Git 系統（由 Linus Torvalds 設計）將每個提交視為有向無環圖 (DAG)，在處理數百萬個大型儲存庫時，伺服器必須進行複雜的 DAG 遍歷才能完成拉取或克隆等操作，這極大地限制了其擴展性。傳統業界解決方案如 GitHub 的 Spokes 方法（維護多份同步副本）雖然曾是標準做法，但隨著規模增大和「最終一致性」的要求，同步耗時成為主要瓶頸。\nCursor 採用物件儲存 (Object Storage) 作為核心基礎設施，特別利用 Amazon Web Services 的 Simple Storage Service (S3)。所有推送變更首先會寫入一個寫前日誌 (Write-Ahead Log, WAL)，將所有變更作為不可變的物件捕獲。這種方法將同步需求從需要協調多個副本（Quorum of replicas）轉移到只需與單一本地參考副本進行同步，極大地提高了數據攝取速度。\n雖然 Git 的某些操作仍需 DAG 遍歷，但透過在高速固態硬碟上本地執行這些操作，而非跨網路傳輸，顯著提升了效率。這項架構展示了利用物件儲存作為「事實來源」(Source of truth) 來管理分散式版本控制系統的潛力。",
    tags: ["Cursor", "Origin", "Git", "Object Storage", "S3", "DAG", "擴展性"],
    title_en: "Cursor Launches Origin, Utilizing Object Storage to Resolve Scalability Bottlenecks in Large-Scale Git Version Control",
    summary_en: "This article introduces a new architecture designed by Cursor for its Git-based repository service called Origin. Because traditional Git systems (designed by Linus Torvalds) treat every commit as a Directed Acyclic Graph (DAG), handling millions of large repositories requires the server to perform complex DAG traversals just to complete operations like pull or clone, severely limiting scalability. Traditional industry solutions, such as GitHub's Spokes method (maintaining multiple synchronized copies), were once standard practice, but as scale increases and 'eventual consistency' requirements grow, synchronization time becomes a major bottleneck.\n\nCursor adopts Object Storage as its core infrastructure, specifically utilizing Amazon Web Services' Simple Storage Service (S3). All pushed changes are first written to a Write-Ahead Log (WAL), capturing all changes as immutable objects. This approach shifts the synchronization requirement from coordinating multiple replicas (Quorum of replicas) to synchronizing only with a single local reference copy, significantly boosting data ingestion speed.\n\nWhile some Git operations still require DAG traversal, performing these locally on high-speed solid-state drives rather than across a network dramatically improves efficiency. This architecture demonstrates the potential of using object storage as the 'Source of truth' for managing distributed version control systems.",
    tags_en: ["Cursor", "Origin", "Git", "Object Storage", "S3", "DAG", "Scalability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/08/23/how-cursor-beat-gits-scalability-shortcomings/5291421", lang: "EN" }
    ]
  },
  {
    id: "20260823-9232",
    trackers: ["os"],
    category: "重點關注",
    title: "回顧歷史：揭秘早期版 Windows 娛樂套件與 Windows 95 的收藏品軼事",
    summary: "本文非資安新聞，而是探討 Microsoft 早期的產品歷史和收藏價值。文章回溯了 1990 年首次推出的「Microsoft Entertainment Pack for Windows」，該套件在 Windows 3.0 發布當年出現，包含卡牌遊戲、Minesweeper 和 Tetris 等經典遊戲。早期版本因版權協商未完成而使用貼紙標示 Tetris 的促銷內容，而非直接印刷，這使得原始的「無貼紙」版本具有收藏價值。\n此外，文章也提及了 Windows 95 的一個歷史事件：早期的防盜版全息圖案描繪了一個赤裸上身的兒童。由於引起爭議，Microsoft 後續改用了穿著衣服的新全息圖案。這些早期、有瑕疵或特殊版本的產品，成為資深工程師 Raymond Chen 等人關注的收藏品。",
    tags: ["Microsoft", "Windows 95", "Entertainment Pack for Windows", "歷史回顧", "收藏品"],
    title_en: "Historical Review: Unveiling Collectible Anecdotes from Early Windows Entertainment Packs and Windows 95",
    summary_en: "This article is not a cybersecurity news item, but rather an exploration of Microsoft's early product history and collectible value. It traces back to the 'Microsoft Entertainment Pack for Windows,' first launched in 1990. This pack appeared upon the release of Windows 3.0 and included classic games such as card games, Minesweeper, and Tetris. Due to incomplete copyright negotiations, early versions used sticker labels for promotional content like Tetris instead of direct printing, giving original 'sticker-free' versions collectible value.\n\nFurthermore, the article mentions a historical incident involving Windows 95: early anti-piracy holograms depicted a child with a bare torso. Because this caused controversy, Microsoft later switched to new holographic designs featuring clothed individuals. These early, flawed, or special edition products have become collectibles of interest to seasoned engineers like Raymond Chen.",
    tags_en: ["Microsoft", "Windows 95", "Entertainment Pack for Windows", "Historical Review", "Collectibles"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/23/an-ultra-rare-piece-of-microsoft-history-could-be-hiding-on-your-shelf/5291118", lang: "EN" }
    ]
  },
  {
    id: "20260823-9026",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Wiz深度解析韓企雲端AI安全趨勢：強調Agentless掃描與可視性提升",
    summary: "本文引用Wiz副總裁Kaiyang Cai的觀點，指出在韓國追求成為AI全球領導者的過程中，資訊安全不應是阻礙創新（Trade-off），而應是加速業務發展的助力。隨著韓國推動雲端基礎設施導入和法規現代化，市場對整合式、高可視性的平台需求日益增加。\nWiz AI Application Protection Platform (AI-APP) 旨在滿足此需求，其核心技術包括：1. **Agentless Scanning（無代理掃描）**：解決傳統安全工具在雲端環境部署困難和資源消耗的問題，透過連接雲端API即可進行掃描。\n2. **Security Graph（安全圖譜）**：提供超越單一漏洞的「情境化」分析能力，能將漏洞、過度權限身份及網路暴露等要素關聯起來，找出實際可利用的「毒性組合」（Toxic Combination）。\n3. **AI-BOM (AI 명세서)**：為AI應用程式提供即時的可視性。這有助於企業進行「安全民主化」，讓開發和業務部門能主動管理風險。\nWiz強調，在多雲生態系中，透過無代理掃描確保全面可視性，是防止攻擊橫向移動的關鍵。他們也呼籲產業應克服過時的物理安全思維模式，轉向協作式、整合性的雲端原生安全策略。",
    tags: ["Wiz", "CNAPP", "Agentless Scanning", "AI-BOM", "雲端安全", "韓國市場"],
    title_en: "Wiz Deep Dive Analysis of Korean Cloud AI Security Trends: Emphasizing Agentless Scanning and Enhanced Visibility",
    summary_en: "Quoting Wiz Vice President Kaiyang Cai, the article posits that as South Korea strives to become a global AI leader, information security should not be viewed as an impediment to innovation (a trade-off), but rather as an accelerator for business development. With South Korea promoting cloud infrastructure adoption and regulatory modernization, market demand is increasing for integrated, high-visibility platforms. The Wiz AI Application Protection Platform (AI-APP) aims to meet this need, featuring core technologies including: 1. **Agentless Scanning**: Solving the issues of traditional security tools' deployment difficulty and resource consumption in cloud environments by scanning through cloud APIs. 2. **Security Graph**: Providing",
    tags_en: ["Wiz", "CNAPP", "Agentless Scanning", "AI-BOM", "Cloud Security", "South Korea Market"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145321", lang: "EN" }
    ]
  },
  {
    id: "20260823-9027",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "前NSA國長폴 나카소네成立「Nakasone Group」，將國家級資安戰略推向私人市場",
    summary: "前美國國家安全局（NSA）局長兼網路司令官的退役將軍폴 나카소네，創立了專業的資安顧問公司「Nakasone Group」。該集團旨在為政府高層、企業界菁英、名流家庭及VIP私人客戶提供全面的資安諮詢服務。其核心業務涵蓋個人數位防護、家用網路安全、防止詐騙與冒充、海外出差竊聽應對，以及高階主管的資安簡報等。\n\nNakasone Group將過去專供政府最高層級的安全戰略，轉化為可客製化的私人服務。公司團隊匯集了多位前軍方及情報機構的高層專家，包括前DEA局長、前網路司令部副司令官等，具備國家級的情報分析與資安應對能力。\n\n市場觀察指出，隨著國家背景駭客的攻擊目標已從國家關鍵基礎設施擴展至企業高管和政界個人的設備及家庭網路，Nakasone Group的成立標誌著一個重大轉變：即原本專屬於國家安全機構的頂級資安戰略與情報分析能力，正大規模進入私人高端市場，預計將推動「國家級個人資安」的新範式。",
    tags: ["Nakasone Group", "NSA", "폴 나카소네", "網路安全諮詢", "高階主管保護", "數位防護"],
    title_en: "Former NSA Director Paul Nakasone Establishes 'Nakasone Group,' Bringing National-Level Cyber Strategy to the Private Market",
    summary_en: "Retired General Paul Nakasone, former Director of the U.S. National Security Agency (NSA) and Cyber Commander, has founded a professional cybersecurity consulting firm called 'Nakasone Group.' The group aims to provide comprehensive cybersecurity consultation services to government officials, corporate elites, prominent families, and VIP private clients. Its core services include personal digital defense, home network security, fraud and impersonation prevention, countermeasures for overseas eavesdropping, and executive-level security briefings.\n\nNakasone Group is transforming what was previously restricted to the highest levels of government security strategy into customizable private services. The company team comprises numerous former high-ranking experts from military and intelligence agencies, including a former DEA Director and a former Subcommander of Cyber Command, possessing national-level intelligence analysis and cybersecurity response capabilities.\n\nMarket observers point out that as state-sponsored hackers have expanded their targets from critical national infrastructure to the devices and home networks of corporate executives and political figures, the establishment of Nakasone Group marks a significant shift: namely, that top-tier cybersecurity strategies and intelligence analysis capabilities, previously exclusive to national security agencies, are now entering the private high-end market. This is expected to drive a new paradigm of 'national-level personal cybersecurity.'",
    tags_en: ["Nakasone Group", "NSA", "Cybersecurity Consulting", "Executive Protection", "Digital Defense"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145360", lang: "EN" }
    ]
  },
  {
    id: "20260823-9028",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "疑似伊朗背景的網路攻擊導致英國發電廠停機，國家基礎設施面臨威脅",
    summary: "根據當地媒體報導，一處位於英國的發電廠在一次被懷疑與伊朗相關的網路攻擊中，被迫停機了四天時間。雖然英國當局未透露具體地點以維護安全，但該事件被認為是首次發生由疑似伊朗背景進行的、導致國家電力設施停運的案例。\n\n此次事件引起英國政府的高度關注，相關資訊已傳達給主要電力公司執行長，並發送了後續行動建議。此外，負責海外駭客威脅防禦的機構 NCSC 也收到了受害報告。\n\n報導指出，這次攻擊發生在一個由數十個小型發電廠（多為輔助風能的燃氣發電）組成的電力網絡中。此類國家基礎設施遭受網路攻擊的情況並非首次，此前美國部分州的水務系統也曾遭遇類似事件，當時媒體將矛頭指向伊朗。\n\n專家推測，此次攻擊的目的可能不是造成實際的人道災難，而是旨在證明駭客能夠滲透英國的敏感基礎設施，從而達到展示威懾效果。這反映出伊朗自今年二月美國和以色列開始空襲後，對西方國家進行網路攻擊活動急劇升級。",
    tags: ["英國電力網", "網路攻擊", "伊朗", "國家基礎設施", "GCHQ", "NCSC"],
    title_en: "Suspected Iran-Linked Cyberattack Causes UK Power Plant Shutdown, Threatening National Infrastructure",
    summary_en: "According to local media reports, a power plant in the UK was forced to shut down for four days following a suspected cyberattack linked to Iran. Although British authorities have not disclosed the specific location to maintain security, this incident is considered the first case of a national power facility shutdown caused by a suspected Iranian-backed attack.\n\nThe event has drawn significant attention from the UK government, and relevant information has been relayed to CEOs of major power companies, along with recommendations for subsequent actions. Furthermore, the National Cyber Security Centre (NCSC), which is responsible for defending against overseas cyber threats, received the incident report.\n\nReports indicate that the attack occurred within a power grid composed of dozens of small-scale power plants (mostly gas-fired auxiliary wind energy). While national infrastructure has not been targeted by cyberattacks before, this is not unprecedented; similar incidents previously affected water systems in parts of the US, with media attention at the time pointing fingers at Iran.\n\nExperts speculate that the goal of this attack may not have been to cause actual humanitarian disaster, but rather to demonstrate that hackers could penetrate Britain's sensitive infrastructure, thereby achieving a deterrent effect. This reflects a sharp escalation in cyberattack activities against Western nations by Iran, following US and Israeli airstrikes starting in February of this year.",
    tags_en: ["UK power grid", "cyberattack", "Iran", "national infrastructure", "GCHQ", "NCSC"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145356", lang: "EN" }
    ]
  },
  {
    id: "20260823-9030",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "全球物理安全巨頭 Genetec 闡述 AI 與混合 SaaS 戰略，推動大型企業數位轉型",
    summary: "本文介紹了總部位於加拿大蒙特婁的全球物聯網安全軟體公司 Genetec。該公司提供整合式平台解決方案，涵蓋視訊監控（VMS）、門禁控制（ACS）、入侵偵測、車牌辨識等多種功能，能將所有系統整合至單一平台運行。\nGenetec 強調其 AI 技術應作為提升監控效率的「工具」，而非過度依賴。他們採用「智慧自動化」（Intelligent Automation, IA）概念，專注於減少營運人員的工作負擔，例如事件自動篩選和威脅偵測。\n面對客戶對雲端服務的需求與既有基礎設施投資保護之間的矛盾，Genetec 與 Axsys Communications 共同推動了「混合 SaaS」模式。此模型允許企業在保留現有本地部署（On-premise）環境的同時，逐步導入雲端的管理、監控和遠端營運等優勢，無需更換設備即可提升營運效率。\n公司核心平台包括 Security Center 和 Security Center SaaS，旨在支持從傳統本地到混合或完全雲端的多階段數位轉型。Genetec 認為，缺乏明確標準協議與規範是企業猶豫轉型的主要原因。",
    tags: ["Genetec", "物理安全", "VMS", "ACS", "SaaS", "混合雲"],
    title_en: "Global Physical Security Giant Genetec Outlines AI and Hybrid SaaS Strategy to Drive Enterprise Digital Transformation",
    summary_en: "This article introduces Genetec, a global IoT security software company headquartered in Montreal, Canada. The company provides integrated platform solutions covering various functions such as Video Management Systems (VMS), Access Control Systems (ACS), intrusion detection, and Automatic License Plate Recognition, allowing all systems to operate on a single unified platform. Genetec emphasizes that AI technology should serve as a 'tool' for enhancing monitoring efficiency, rather than being overly relied upon. They adopt the concept of 'Intelligent Automation' (IA), focusing on reducing the operational burden on staff, such as automated event filtering and threat detection. Addressing the conflict between customer demand for cloud services and protection of existing infrastructure investments, Genetec and Axsys Communications are jointly promoting a 'Hybrid SaaS' model. This model allows enterprises to gradually adopt cloud advantages—such as management, monitoring, and remote operations—while retaining their current on-premise environment, thereby improving operational efficiency without requiring equipment replacement. The company’s core platforms include Security Center and Security Center SaaS, designed to support multi-stage digital transformation from traditional local deployments to hybrid or fully cloud environments. Genetec believes that the lack of clear standard protocols and regulations is the primary reason for enterprise hesitation in transforming.",
    tags_en: ["Genetec", "Physical Security", "VMS", "ACS", "SaaS", "Hybrid Cloud"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145338", lang: "EN" }
    ]
  }
];
