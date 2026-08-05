// data-20260704.js — 2026-07-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-04"] = [
  {
    id: "20260704-001",
    trackers: ["security"],
    category: "重大事件",
    title: "美國縣政府支付百萬美元阻止資料外洩：揭示現代勒索威脅的轉變",
    summary: "本案報導指出，一個美國政府實體（Union County, Ohio）為阻止敏感資料外洩，向一個自稱 Kairos 的駭客組織支付了約 100 萬美元。該組織的威脅模式顯示，現代的勒索攻擊已不再依賴傳統的加密鎖機，而是轉向純粹的「資料竊取勒索」（Data-Theft Extortion）。攻擊者利用竊取的敏感文件（如包含社會安全碼、指紋和護照號碼的記錄）作為壓力點，威脅受害者公開這些資料。雖然該事件被稱為勒索軟體事件，但實際上沒有證據顯示任何設備被加密。這類攻擊模式已成為趨勢，甚至比傳統加密攻擊更普遍。對於小型政府網路，建議採取多因素驗證（MFA）、監控異常的大量資料傳輸，並將法律、人力資源和公民記錄等敏感資料隔離，同時應對任何關於資料刪除的承諾保持高度懷疑。",
    tags: ["Union County", "Kairos", "資料外洩", "勒索軟體", "政府網路", "資料竊取勒索"],
    title_en: "US County Government Pays Millions of Dollars to Prevent Data Leak: Revealing the Shift in Modern Ransomware Threats",
    summary_en: "This report indicates that a US government entity (Union County, Ohio) paid approximately $1 million to a hacking group calling itself Kairos to prevent the leakage of sensitive data. The group's threat model shows that modern ransomware attacks no longer rely on traditional device encryption, but are shifting towards pure \"Data-Theft Extortion.\" The attackers used stolen sensitive files (such as records containing social security numbers, fingerprints, and passport numbers) as leverage, threatening to publicly release this data to the victim. Although this incident was labeled a ransomware event, there is no evidence that any devices were encrypted. This type of attack pattern has become a trend, and is even more common than traditional encryption attacks. For small government networks, it is recommended to implement Multi-Factor Authentication (MFA), monitor for abnormal large-volume data transfers, and isolate sensitive data such as legal, human resources, and citizen records, while remaining highly skeptical of any promises regarding data deletion.",
    tags_en: ["Union County", "Kairos", "Data Leakage", "Ransomware", "Government Network", "Data-Theft Extortion"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/us-government-entity-paid-kairos-group.html", lang: "EN" }
    ]
  },
  {
    id: "20260704-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6377-1：修補 OpenSSH 服務中的憑證驗證漏洞",
    summary: "Debian 安全公告 DSA-6377-1 針對 OpenSSH 服務發布了安全修補。該漏洞涉及 OpenSSH 在處理憑證驗證時的邏輯缺陷，可能允許遠端攻擊者在特定條件下執行未經授權的遠端代碼執行（RCE）。修補建議是立即升級 OpenSSH 服務至修補後的版本，以防止攻擊者利用此漏洞進行系統入侵。由於原文未提供具體 CVSS 分數或受影響版本範圍，建議使用者應參考 Debian 官方公告，並確保系統的 OpenSSH 服務保持在最新、安全的狀態，以維護系統的完整性與安全性。",
    tags: ["Debian", "OpenSSH", "DSA-6377-1", "憑證驗證", "RCE", "Linux 核心元件"],
    title_en: "Debian Releases DSA-6377-1: Patching Certificate Authentication Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6377-1 has released a security patch for the OpenSSH service. The vulnerability involves a logical flaw in OpenSSH's handling of certificate authentication, which could potentially allow a remote attacker to execute unauthorized Remote Code Execution (RCE) under specific conditions. The patch recommends immediately upgrading the OpenSSH service to the patched version to prevent attackers from exploiting this vulnerability for system intrusion. Since the original text did not provide specific CVSS scores or affected version ranges, users are advised to refer to the official Debian announcement and ensure that the system's OpenSSH service remains in the latest, secure state to maintain system integrity and security.",
    tags_en: ["Debian", "OpenSSH", "DSA-6377-1", "Certificate Authentication", "RCE", "Linux Kernel Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00288.html", lang: "EN" }
    ]
  },
  {
    id: "20260704-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心更新：修補 IPv6 容器逃逸與 KVM Use-After-Free 漏洞",
    summary: "Linux 核心開發者 Greg Kroah-Hartman 發布了多個穩定核心版本，包括 7.1.3、6.18.38、6.12.95、6.6.144、6.1.177、5.15.211 和 5.10.260 等。本次更新包含兩項重大修補：一項修補了 6.0 核心中 IPv6 引入的漏洞（CVE-2026-53362），該漏洞可能允許攻擊者逃逸容器並取得 root 權限。另一項修補了 KVM 中的 Use-After-Free 錯誤（CVE-2026-53359），此錯誤源於 2.6.36 核心。由於核心穩定版本通常包含多個修補，建議所有使用者應立即升級至最新版本，以確保系統安全。",
    tags: ["Linux 核心", "CVE-2026-53362", "CVE-2026-53359", "IPv6", "KVM", "容器逃逸"],
    title_en: "Linux Kernel Update: Patching IPv6 Container Escape and KVM Use-After-Free Vulnerabilities",
    summary_en: "Linux kernel developer Greg Kroah-Hartman released multiple stable kernel versions, including 7.1.3, 6.18.38, 6.12.95, 6.6.144, 6.1.177, 5.15.211, and 5.10.260. This update includes two major patches: one addressing an IPv6 vulnerability introduced in the 6.0 kernel (CVE-2026-53362), which could potentially allow an attacker to escape containers and gain root privileges. The other patch fixes a Use-After-Free error in KVM (CVE-2026-53359), originating from the 2.6.36 kernel. Since stable kernels often contain multiple patches, all users are advised to upgrade immediately to the latest version to ensure system security.",
    tags_en: ["Linux Kernel", "CVE-2026-53362", "CVE-2026-53359", "IPv6", "KVM", "Container Escape"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081230", lang: "EN" }
    ]
  },
  {
    id: "20260704-004",
    trackers: ["os"],
    category: "Linux",
    title: "Linux DRM 核心排程器修補：改善高負載下工作提交延遲",
    summary: "本次修補針對 Linux 核心的 Direct Rendering Manager (DRM) 排程器提出改進，旨在解決在系統處於高 CPU 負載（runnable CPU processes）時，高優先級 DRM 客戶端可能因排程器使用 kernel workqueues 而遭受延遲注入的問題。提案的修補方案是將排程器中原先使用 workqueues 的部分，替換為 kthread_work 進行非同步任務執行。此改動被認為能顯著提升工作提交的效率，特別對於 Panthor Arm Mali 驅動程式等，有助於預防合成器（compositors）錯過畫面幀（missing frames）。目前，Intel Xe 和 Panthor 已經採用了此 RFC 修補；而 AMDGPU 等將 DRM 排程器視為硬體排程器的驅動程式，預計不會看到與 Panthor 相當顯著的差異。開發者可於 dri-devel 列表找到相關的 RFC 修補內容。",
    tags: ["Linux 核心", "DRM", "kthread_work", "workqueues", "Panthor", "Intel Xe"],
    title_en: "Linux DRM Core Scheduler Patch: Improving Work Submission Latency under High Load",
    summary_en: "This patch addresses the Direct Rendering Manager (DRM) scheduler in the Linux kernel, aiming to resolve an issue where high-priority DRM clients might suffer from latency injection when the system is under high CPU load (runnable CPU processes), specifically due to the scheduler's use of kernel workqueues. The proposed fix replaces the parts of the scheduler that previously used workqueues with kthread_work for asynchronous task execution. This change is expected to significantly improve work submission efficiency, particularly for drivers like Panthor Arm Mali, helping to prevent compositors from missing frames. Intel Xe and Panthor have already adopted this RFC patch; however, since AMDGPU treats the DRM scheduler as a hardware scheduler driver, a difference comparable to Panthor is not expected. Developers can find the relevant RFC patch details on the dri-devel mailing list.",
    tags_en: ["Linux Kernel", "DRM", "kthread_work", "workqueues", "Panthor", "Intel Xe"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/DRM-Scheduler-Lower-Job-Submit", lang: "EN" }
    ]
  },
  {
    id: "20260704-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新改善 4K 60 FPS USB 影像擷取穩定性，多款設備可穩定運作",
    summary: "本文討論了在 Linux 環境下，使用 USB 影像擷取卡進行 4K @ 60 FPS 錄影的技術難點。過去，即使是使用 UVC 標準的 USB 設備，在嘗試達到 4K @ 60 FPS 時，常會出現頻寬從 10 Gbps 降級至 5 Gbps 的問題，導致無法穩定擷取高幀率內容。此問題透過 Linux 核心的更新與一個名為 `USB_QUIRK_NO_BOS` 的新 quirk path 得到改善。該 quirk path 最初由 Johannes Brüderl 在 Linux 6.19 版本中為 Elgato 4K X 設備貢獻，解決了設備在 BOS descriptor 請求時掛起並降頻的問題。此後，其他多款 USB 影像擷取卡，包括 AverMedia Live Gamer Ultra 2.1、ASUS TUF 4K PRO 等，也受益於此類核心修正。使用者建議若使用最新上游 Linux 7.1 核心，應能順利使用這些設備，但仍需注意個別設備可能需要此類 quirk 修正。",
    tags: ["Linux 核心", "USB 影像擷取", "4K 60 FPS", "USB_QUIRK_NO_BOS", "Linux 7.1", "UVC"],
    title_en: "Linux Kernel Update Improves 4K 60 FPS USB Video Capture Stability, Supporting Multiple Devices",
    summary_en: "This article discusses the technical challenges of performing 4K @ 60 FPS video recording using USB video capture cards in a Linux environment. Previously, even USB devices adhering to the UVC standard often experienced bandwidth degradation from 10 Gbps down to 5 Gbps when attempting 4K @ 60 FPS, making stable high-frame-rate capture difficult. This issue has been resolved through a Linux kernel update and a new quirk path called `USB_QUIRK_NO_BOS`. This quirk path was initially contributed by Johannes Brüderl in Linux 6.19 for the Elgato 4K X device, addressing the issue where the device would hang and downshift during BOS descriptor requests. Subsequently, other USB video capture cards, including the AverMedia Live Gamer Ultra 2.1 and ASUS TUF 4K PRO, have benefited from this type of kernel fix. Users are advised that using the latest upstream Linux 7.1 kernel should allow smooth operation with these devices, but individual equipment may still require such quirk corrections.",
    tags_en: ["Linux Kernel", "USB Video Capture", "4K 60 FPS", "USB_QUIRK_NO_BOS", "Linux 7.1", "UVC"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/4K-60-FPS-USB-Video-Capture", lang: "EN" }
    ]
  },
  {
    id: "20260704-006",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 51 與 Plasma 6.7 支援 Wayland 的 ext-background-effect-v1，實現背景模糊效果",
    summary: "本篇新聞報導 GNOME 桌面環境和 KDE Plasma 桌面環境在 Wayland 協定層面增加了對背景模糊（Background Blur）效果的支援。該功能透過 `ext-background-effect-v1` 協定實現，該協定自 2025 年 5 月加入 Wayland Protocols 儲存庫，並自 2024 年初開始討論。GNOME 51 已將此支援合併到最新的 Mutter 程式碼中，而 Plasma 6.7 也已加入此功能。此支援允許應用程式或工具套件在 Wayland 客戶端下，透過 Mutter 暴露背景模糊能力，讓開發者能夠為應用程式實現類似「磨砂玻璃」（frosted glass）的視覺效果。這屬於桌面環境的視覺功能更新，而非資安漏洞修補。開發者可透過相關的 Git 合併請求獲取更多細節和演示。",
    tags: ["GNOME", "Plasma", "Wayland", "Mutter", "ext-background-effect-v1", "Linux 桌面環境"],
    title_en: "GNOME 51 and Plasma 6.7 Support Wayland's ext-background-effect-v1 for Background Blur Effect",
    summary_en: "This news report details the addition of support for Background Blur effects in both the GNOME and KDE Plasma desktop environments at the Wayland protocol level. This functionality is implemented via the `ext-background-effect-v1` protocol, which was added to the Wayland Protocols repository in May 2025 and began discussions in early 2024. GNOME 51 has merged this support into the latest Mutter codebase, and Plasma 6.7 has also incorporated this feature. This support allows applications or toolkits running as Wayland clients to expose background blur capabilities through Mutter, enabling developers to implement 'frosted glass'-like visual effects for their applications. This constitutes a visual feature update for the desktop environment, not a security vulnerability patch. Developers can find more details and demonstrations through the relevant Git pull requests.",
    tags_en: ["GNOME", "Plasma", "Wayland", "Mutter", "ext-background-effect-v1", "Linux Desktop Environment"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Mutter-Background-Blur", lang: "EN" }
    ]
  },
  {
    id: "20260704-007",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 更新：Intel Xe 驅動程式新增 Nova Lake S 顯示卡 PCI ID，並移除對 HuC 韌體的依賴",
    summary: "本篇報導指出，Linux 7.3 的 Intel Xe 驅動程式正在積極整合 Intel Nova Lake S 的支援。本次更新主要增加了用於整合 Xe3P 圖形的 Nova Lake S PCI 設備 ID，特別新增了 0xD74A 和 0xD74B 兩個 ID，使 Xe Linux 驅動程式目前識別 Nova Lake S 的 PCI 設備 ID 達到七個。同時，針對 Nova Lake 上的 Media 35 引擎，受保護的 Xe 路徑（PXP）功能已不再要求使用 HuC 韌體。這是因為從下一代 Intel 硬體開始，HuC 韌體將由使用者空間而非核心載入，從根本上消除了 PXP 使用對該韌體的依賴。這些修補程式和功能更新預計將在 Linux 7.3 於八月下旬合併窗口前持續陸續推出。",
    tags: ["Linux 7.3", "Intel", "Nova Lake S", "Xe 驅動程式", "PCI ID", "PXP", "HuC 韌體"],
    title_en: "Linux 7.3 Update: Intel Xe Driver Adds Nova Lake S GPU PCI ID and Removes Dependency on HuC Firmware",
    summary_en: "This report indicates that the Intel Xe driver for Linux 7.3 is actively integrating support for Intel Nova Lake S. This update primarily adds Nova Lake S PCI device IDs for integrating Xe3P graphics, specifically adding two IDs: 0xD74A and 0xD74B. This brings the total number of PCI device IDs recognized by the Xe Linux driver for Nova Lake S to seven. Furthermore, for the Media 35 engine on Nova Lake, the protected Xe path (PXP) function no longer requires the use of HuC firmware. This is because, starting with next-generation Intel hardware, HuC firmware will be loaded from user space rather than the kernel, fundamentally eliminating the dependency of PXP on this firmware. These patches and feature updates are expected to be rolled out incrementally leading up to the Linux 7.3 merge window in late August.",
    tags_en: ["Linux 7.3", "Intel", "Nova Lake S", "Xe Driver", "PCI ID", "PXP", "HuC Firmware"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-More-Nova-Lake-S-IDs", lang: "EN" }
    ]
  },
  {
    id: "20260704-008",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc2 預設提升 RISC-V 64 位元 CPU 核心支援上限至 256 個",
    summary: "Linux 核心在準備發布 7.2-rc2 版本時，透過一次後合併窗口的變更，提高了 RISC-V 64 位元架構的預設 CPU 核心支援上限（NR_CPUS）。此前，RISC-V 64 位元的預設上限為 64 個核心。本次更新將預設值提升至 256 個核心/執行緒。此變更旨在滿足如 SpacemiT 等廠商所使用的高核心數伺服器需求，例如具備 128 個核心的伺服器。雖然提升 NR_CPUS 會影響靜態記憶體分配大小，並略微增加核心記憶體消耗，但開發者認為此增加是必要的平衡。值得注意的是，其他架構如 x86_64 和 AArch64 的核心支援上限已分別達到 8192 和 512，顯示業界對高核心數的需求持續增長。此變更已合併至 Linux Git，並被 Linus Torvalds 接受，預計在 Linux 7.2 核心中生效。",
    tags: ["Linux 核心", "RISC-V", "Linux 7.2", "NR_CPUS", "CPU 核心", "SpacemiT"],
    title_en: "Linux 7.2-rc2 Defaults Increase RISC-V 64-bit CPU Core Support Limit to 256",
    summary_en: "When preparing to release the Linux 7.2-rc2 version, the Linux kernel increased the default CPU core support limit (NR_CPUS) for the RISC-V 64-bit architecture through a change in the backport window. Previously, the default limit for RISC-V 64-bit was 64 cores. This update raises the default value to 256 cores/threads. This change is intended to meet the high core count server requirements of vendors such as SpacemiT, for example, servers equipped with 128 cores. Although increasing NR_CPUS affects the static memory allocation size and slightly increases core memory consumption, developers believe this increase is a necessary balance. It is worth noting that other architectures, such as x86_64 and AArch64, already have core support limits of 8192 and 512, respectively, demonstrating the industry's continuous demand for high core counts. This change has been merged into the Linux Git and accepted by Linus Torvalds, expected to take effect in the Linux 7.2 kernel.",
    tags_en: ["Linux Kernel", "RISC-V", "Linux 7.2", "NR_CPUS", "CPU Core", "SpacemiT"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-RISC-V-256-Cores", lang: "EN" }
    ]
  },
  {
    id: "20260704-009",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 核心變動：KWin 合成器移除桌面 OpenGL 支援，改採 OpenGL ES",
    summary: "KDE 開發團隊在 Plasma 6.8 版本中進行了重大介面技術調整。最主要的變動是 KWin 合成器（compositor）已移除對桌面 OpenGL (desktop OpenGL) 的支援，轉而僅使用 OpenGL ES。此舉的目的並非因為 Vulkan 渲染器已就緒，而是因為在 Vulkan 支援完善之前，OpenGL ES 能提供 KWin 所需的所有功能，且對於部分舊硬體，OpenGL ES 的相容性優於受限的桌面 OpenGL 設定。KWin 開發者指出，桌面 GL 與 OpenGL ES 之間存在多種不相容性，導致程式碼難以維護。此變動僅限於 KWin 合成器內部使用，不會影響或限制在合成器外部使用桌面 OpenGL 的功能。此外，Plasma 6.8 還增加了 Emulated Input v1.6 的支援，並修復了與多螢幕處理相關的常見崩潰問題。",
    tags: ["KDE Plasma", "KWin", "OpenGL ES", "桌面 OpenGL", "Linux 核心", "Plasma 6.8"],
    title_en: "KDE Plasma 6.8 Core Changes: KWin Compositor Removes Desktop OpenGL Support, Adopts OpenGL ES",
    summary_en: "The KDE development team has implemented significant interface technology adjustments in the Plasma 6.8 version. The main change is that the KWin compositor has removed support for desktop OpenGL, adopting OpenGL ES instead. The purpose of this change is not because the Vulkan renderer is ready, but because OpenGL ES can provide all the necessary functions for KWin before Vulkan support is fully mature, and for some older hardware, OpenGL ES offers better compatibility than the restricted desktop OpenGL settings. KWin developers noted that there are multiple incompatibilities between desktop GL and OpenGL ES, making the code difficult to maintain. This change is limited to internal use within the KWin compositor and will not affect or restrict the use of desktop OpenGL outside the compositor. Additionally, Plasma 6.8 adds support for Emulated Input v1.6 and fixes common crashes related to multi-monitor handling.",
    tags_en: ["KDE Plasma", "KWin", "OpenGL ES", "Desktop OpenGL", "Linux Kernel", "Plasma 6.8"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Plasma-6.8-KWin-No-Desktop-GL", lang: "EN" }
    ]
  },
  {
    id: "20260704-010",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME Mutter 提升穩定性：實現 GPU 重置後的會話恢復功能",
    summary: "本篇報導介紹 GNOME 桌面環境的 Mutter 合成器（compositor）正在進行一項重要的穩定性提升。透過 Google Summer of Code (GSoC) 專案，開發者 Toluwaleke Ogundipe 正在整合穩健的 GPU 重置恢復機制。以往在 Linux 環境下遇到 GPU 重置時，GNOME 會導致整個會話崩潰或凍結。目前開發成果顯示，Mutter 已經能夠在發生 GPU 重置後，保持會話穩定，系統輸入仍能正常響應，且不會崩潰。此功能是利用 OpenGL 的 GL_EXT_robustness 擴充功能等基礎設施實現的。儘管目前已達到初步穩定，但仍有待解決的問題，包括畫面緩衝區（frame-buffer）自動重建、桌面背景渲染錯誤，以及一些殘留的 OpenGL 錯誤。這些功能尚未準備好提交上游合併請求，但預計將持續優化，以提升 GNOME 在硬體層面的可靠性。",
    tags: ["GNOME", "Mutter", "GPU 重置", "OpenGL", "GSoC", "Linux 穩定性"],
    title_en: "GNOME Mutter Improves Stability: Implementing Session Recovery After GPU Reset",
    summary_en: "This report introduces a significant stability enhancement being implemented in the GNOME desktop environment's Mutter compositor. Through a Google Summer of Code (GSoC) project, developer Toluwaleke Ogundipe is integrating a robust GPU reset recovery mechanism. Previously, encountering a GPU reset in a Linux environment would cause GNOME to crash or freeze the entire session. Current development results show that Mutter can now maintain session stability after a GPU reset, allowing system input to respond normally without crashing. This functionality is achieved using infrastructure such as the OpenGL GL_EXT_robustness extension. Although preliminary stability has been achieved, there are still issues to resolve, including automatic frame-buffer reconstruction, desktop background rendering errors, and some residual OpenGL bugs. These features are not yet ready for upstream merge requests, but continuous optimization is expected to enhance GNOME's hardware-level reliability.",
    tags_en: ["GNOME", "Mutter", "GPU Reset", "OpenGL", "GSoC", "Linux Stability"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-GPU-Reset-Recovery-2026", lang: "EN" }
    ]
  },
  {
    id: "20260704-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 KVM 漏洞：x86 架構的 Shadow Paging Use-After-Free 問題修復",
    summary: "本漏洞存在於 Linux 核心的 KVM（Kernel-based Virtual Machine）虛擬化元件中，涉及 x86 架構的 Shadow Paging 機制。該問題是一個 Use-After-Free 漏洞，可能因外部改變 PDE 映射後刪除 memslot 而觸發。核心問題點在於，當 PDE 改變後，`rmap_remove()` 呼叫會遺漏某些新建立的條目，因為葉子 SPTE 的 GFN 與 `kvm_mmu_page` 結構的 GFN 不匹配。更複雜的狀況是，即使 GFN 匹配，角色（role）不匹配也會導致問題。當 memslot 被移除時，影子頁面（shadow page）會被釋放，但 rmap 條目卻會存活，導致後續嘗試使用該 GFN 進行操作（如 dirty logging 或 MMU notifier invalidation）時，會解引用已釋放的頁面，從而造成 Use-After-Free。此漏洞已透過核心修補程式修復，建議系統管理員應立即更新至修復版本以防禦。",
    tags: ["Linux 核心", "KVM", "x86", "Shadow Paging", "Use-After-Free", "CVE-2026-53359"],
    title_en: "Linux Kernel KVM Vulnerability: Fix for x86 Architecture Shadow Paging Use-After-Free Issue",
    summary_en: "This vulnerability exists in the KVM (Kernel-based Virtual Machine) virtualization component of the Linux kernel, involving the x86 architecture's Shadow Paging mechanism. The issue is a Use-After-Free vulnerability that can be triggered by deleting a memslot after external changes to the PDE mapping. The core problem is that after a PDE change, the `rmap_remove()` call fails to remove certain newly created entries because the GFN of the leaf SPTE does not match the GFN of the `kvm_mmu_page` structure. A more complex scenario is that even if the GFN matches, a role mismatch can also cause the issue. When the memslot is removed, the shadow page is freed, but the rmap entry remains, leading to a Use-After-Free when subsequent operations attempt to use that GFN (such as dirty logging or MMU notifier invalidation) by dereferencing the already freed page. This vulnerability has been fixed via a kernel patch, and system administrators are advised to immediately update to the patched version for defense.",
    tags_en: ["Linux Kernel", "KVM", "x86", "Shadow Paging", "Use-After-Free", "CVE-2026-53359"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53359", lang: "EN" }
    ]
  },
  {
    id: "20260704-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：KVM SEV-SNP 允許惡意 Guest 進行堆記憶體讀寫與資訊洩露",
    summary: "本漏洞存在於 Linux 核心的 KVM SEV-SNP 虛擬化功能中。攻擊者可以透過惡意設計的 SNP Guest，利用 `setup_vmgexit_scratch()` 函式和 `snp_begin_psc()` 邏輯缺陷，執行越界讀取（OOB Read）和越界寫入（OOB Write）。具體而言，`snp_begin_psc()` 函式在驗證 `end_entry` 時，僅檢查是否超過最大計數（VMGEXIT_PSC_MAX_COUNT），卻未檢查實際分配的緩衝區大小。這使得 Guest 可以設定超出實際緩衝區範圍的索引，導致主機核心迭代到越界位置，從而讀取或寫入相鄰的 kmalloc-cg-32 堆物件。攻擊者可以利用此機制洩露主機堆佈局資訊，並對相鄰物件進行寫入，甚至觸發使用後釋放（Use-After-Free）條件。修補建議是確保在處理 PSC 請求時，對索引範圍的驗證必須同時考慮實際的緩衝區大小限制，而非僅依賴固定最大計數。此漏洞的利用方式涉及控制分配大小、進入範圍和發起無限制的 VMGEXIT，實務影響極大，可能導致核心堆記憶體被破壞。",
    tags: ["Linux 核心", "KVM", "SEV-SNP", "CVE", "堆記憶體", "OOB", "虛擬化"],
    title_en: "Linux Kernel Vulnerability: KVM SEV-SNP Allows Malicious Guest to Perform Heap Read/Write and Information Leakage",
    summary_en: "This vulnerability exists in the KVM SEV-SNP virtualization feature of the Linux kernel. An attacker can utilize a maliciously designed SNP Guest, exploiting flaws in the `setup_vmgexit_scratch()` function and the `snp_begin_psc()` logic, to perform Out-of-Bounds (OOB) Reads and Out-of-Bounds (OOB) Writes. Specifically, the `snp_begin_psc()` function, when validating the `end_entry`, only checks if the count exceeds the maximum count (VMGEXIT_PSC_MAX_COUNT) but fails to check the actual allocated buffer size. This allows the Guest to set an index exceeding the actual buffer range, causing the host kernel to iterate to an out-of-bounds position, thereby reading or writing adjacent kmalloc-cg-32 heap objects. An attacker can use this mechanism to leak host heap layout information and write to adjacent objects, potentially even triggering a Use-After-Free condition. The suggested patch is to ensure that when processing PSC requests, the validation of the index range must simultaneously consider the actual buffer size limit, rather than relying solely on a fixed maximum count. Exploiting this vulnerability involves controlling the allocated size, the entry range, and initiating unlimited VMGEXITs, posing a significant practical impact that could lead to corruption of the kernel heap memory.",
    tags_en: ["Linux Kernel", "KVM", "SEV-SNP", "CVE", "Heap", "OOB", "Virtualization"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53360", lang: "EN" }
    ]
  },
  {
    id: "20260704-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 af_unix 模組中資源回收狀態判斷錯誤的競態條件漏洞",
    summary: "本漏洞存在於 Linux 核心的 af_unix 模組中，涉及資源回收（Garbage Collection, GC）的狀態管理。攻擊者若能在工作排程（work scheduling）期間，利用多執行緒環境，使得 `unix_gc()` 函數在 `gc_in_progress` 狀態被錯誤判斷為 `false` 的情況下執行，可能導致資源回收機制混亂或狀態不一致。具體來說，`unix_peek_fpl()` 函數依賴於 `gc_in_progress` 狀態的準確性來避免被訊息（MSG_PEEK）混淆。修補建議是在 `unix_gc()` 函數內部，強制將 `gc_in_progress` 狀態設為 `true`，以確保在執行資源回收操作時，其狀態標記是正確且一致的，從而解決此競態條件（Race Condition）問題。",
    tags: ["Linux 核心", "af_unix", "gc_in_progress", "競態條件", "資源回收"],
    title_en: "Linux Kernel Patch: Fixes Race Condition Vulnerability in af_unix Module's Resource Reclamation State Check",
    summary_en: "This vulnerability resides in the Linux kernel's af_unix module, concerning state management for resource reclamation (Garbage Collection, GC). If an attacker, utilizing a multi-threaded environment during work scheduling, can cause the `unix_gc()` function to execute when the `gc_in_progress` state is incorrectly determined as `false`, it may lead to resource reclamation mechanism confusion or state inconsistency. Specifically, the `unix_peek_fpl()` function relies on the accuracy of the `gc_in_progress` state to prevent confusion by messages (MSG_PEEK). The suggested patch is to forcibly set the `gc_in_progress` state to `true` within the `unix_gc()` function, ensuring that the state flag is correct and consistent while performing resource reclamation operations, thereby resolving this Race Condition issue.",
    tags_en: ["Linux Kernel", "af_unix", "gc_in_progress", "Race Condition", "Resource Reclamation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53361", lang: "EN" }
    ]
  },
  {
    id: "20260704-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞 CVE-2026-53362：IPv6 封裝處理中的記憶體寫入越界風險",
    summary: "本漏洞位於 Linux 核心的 IPv6 封裝處理路徑，具體影響 `__ip6_append_data()` 函式。當使用 UDPv6 socket 搭配 `MSG_MORE` 和 `MSG_SPLICE_PAGES` 參數時，系統在計算封包長度（`alloclen` 和 `pagedlen`）時，未能正確計入碎片間的間隙（fraggap）。這導致資料複製操作會寫入超出原始 SKB 邊界（`skb->end`）的記憶體區域，進而覆寫到尾隨的 `skb_shared_info` 結構體。攻擊者無需特權即可透過此機制觸發，實務上可能導致系統崩潰或執行任意程式碼。該問題源於核心提交記錄的變動，修補建議是更新到已修復的 Linux 核心版本，確保正確處理 paged 封裝路徑的長度計算。",
    tags: ["Linux 核心", "CVE-2026-53362", "IPv6", "MSG_SPLICE_PAGES", "記憶體越界"],
    title_en: "Linux Kernel Vulnerability CVE-2026-53362: Memory Write Out-of-Bounds Risk in IPv6 Encapsulation Handling",
    summary_en: "This vulnerability resides in the IPv6 encapsulation handling path of the Linux kernel, specifically affecting the `__ip6_append_data()` function. When using a UDPv6 socket with `MSG_MORE` and `MSG_SPLICE_PAGES` parameters, the system fails to correctly account for the fragment gap (fraggap) when calculating the packet length (`alloclen` and `pagedlen`). This causes data copy operations to write into memory regions exceeding the original SKB boundary (`skb->end`), thereby overwriting the trailing `skb_shared_info` structure. An attacker can trigger this mechanism without requiring special privileges, which could practically lead to system crashes or arbitrary code execution. The issue stems from changes in the kernel commit history, and the recommended fix is to update to a patched Linux kernel version to ensure correct length calculation for paged encapsulation paths.",
    tags_en: ["Linux Kernel", "CVE-2026-53362", "IPv6", "MSG_SPLICE_PAGES", "Memory Out-of-Bounds"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53362", lang: "EN" }
    ]
  },
  {
    id: "20260704-015",
    trackers: ["os", "security"],
    category: "Windows",
    title: "重現經典：前微軟工程師打造 2.5KB 極簡版記事本，揭示現代應用程式的膨脹問題",
    summary: "本文介紹退役微軟工程師 Dave Plummer 打造的 TinyRetroPad，這是一個極度精簡的記事本應用程式，功能包括開、存、找、換、列印等，但體積僅約 2.5KB。Plummer 指出，現代作業系統如 Windows 已經內建了大部分應用程式所需的功能（如視窗管理器、剪貼簿處理、字體選擇等），一個原生應用程式無需攜帶完整的「文明」。TinyRetroPad 透過呼叫作業系統的內建資源，實現了極小的體積。文章進一步批評了現代 Notepad 的「功能蔓延」（feature creep），指出 Windows 11 的 Notepad 體積龐大，且增加了 Markdown 格式、Copilot 等功能。這種功能擴增的代價是安全風險，例如 Microsoft 確認的 CVE-2026-20841，指出惡意 Markdown 連結可能導致遠端程式碼執行（RCE）。作者強調，真正的討論點在於 Windows 平台本身，而非記事本，並指出 LTSC 版本仍保留了經典的簡潔模式。",
    tags: ["Windows 11", "Notepad", "TinyRetroPad", "CVE-2026-20841", "RCE", "功能蔓延", "Windows 平台"],
    title_en: "Recreating a Classic: Former Microsoft Engineer Builds 2.5KB Minimal Notepad, Exposing Modern Application Bloat",
    summary_en: "This article introduces TinyRetroPad, created by retired Microsoft engineer Dave Plummer. This is an extremely streamlined notepad application with basic functions such as opening, saving, finding, replacing, and printing, yet its size is only about 2.5KB. Plummer points out that modern operating systems like Windows already include most of the functionality required by applications (such as window management, clipboard handling, and font selection), meaning a native application does not need to carry an entire 'civilization.' TinyRetroPad achieves its minimal size by calling upon built-in operating system resources. The article further criticizes the 'feature creep' of modern Notepad, noting that the Windows 11 Notepad is large and has added features like Markdown formatting and Copilot. The cost of this functional expansion is security risk, such as Microsoft-confirmed CVE-2026-20841, which indicates that malicious Markdown links could lead to Remote Code Execution (RCE). The author emphasizes that the real discussion point is the Windows platform itself, not the notepad, and points out that the LTSC version still retains the classic, simple mode.",
    tags_en: ["Windows 11", "Notepad", "TinyRetroPad", "CVE-2026-20841", "RCE", "Feature Creep", "Windows Platform"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/04/ex-microsoft-engineer-rebuilds-notepad-in-2-5kb-using-nothing-but-stuff-windows-already-had", lang: "EN" }
    ]
  },
  {
    id: "20260704-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "跨國執法行動Operation Endgame揭露：惡意程式傳遞工具Amadey的犯罪基礎設施分析",
    summary: "日本資安公司三井物產安全指引（MBSD）透露，在跨國執法行動Operation Endgame的追蹤下，成功破壞了包括SocGholish、Amadey和StealC在內的惡意程式傳遞基礎設施。MBSD的調查顯示，惡意程式傳遞工具Amadey自2022年開始廣泛使用，並在近年來呈指數級增長。利用Amadey的惡意程式種類從2019年的66種，一路增長至2023年達到8,360種，預計在2025年達到11,635種。這代表Amadey已成為主要的惡意程式散布基礎設施。此外，MBSD還發現了741臺C2伺服器，雖然大部分伺服器運作時間較短，但仍有極少數伺服器運作時間超過兩年。這項調查警示了惡意程式散播的複雜性與持續性，建議企業應提高警覺，加強網路監控與基礎設施安全防禦。",
    tags: ["Operation Endgame", "Amadey", "MBSD", "惡意程式", "C2伺服器", "犯罪基礎設施"],
    title_en: "Operation Endgame Reveals: Analysis of the Criminal Infrastructure Behind the Malicious Payload Delivery Tool Amadey",
    summary_en: "Mitsui & Co. Security Advisory (MBSD) revealed that following the international law enforcement operation Operation Endgame, it successfully dismantled a malicious payload delivery infrastructure including SocGholish, Amadey, and StealC. MBSD's investigation shows that the malicious payload delivery tool Amadey has been widely used since 2022, exhibiting exponential growth in recent years. The types of malicious payloads utilizing Amadey increased from 66 types in 2019 to 8,360 types in 2023, and are projected to reach 11,635 types in 2025. This indicates that Amadey has become a major malicious payload distribution infrastructure. Furthermore, MBSD discovered 741 C2 servers; although most servers operated for short periods, a small number operated for over two years. This investigation warns of the complexity and persistence of malicious payload distribution, advising enterprises to heighten vigilance and strengthen network monitoring and infrastructure security defenses.",
    tags_en: ["Operation Endgame", "Amadey", "MBSD", "Malicious Payload", "C2 Server", "Criminal Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177087", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260704-017",
    trackers: ["os"],
    category: "Apple",
    title: "三星 Galaxy Z Fold 8 系列價格洩漏：新「Wide」機型價格維持不變，但「Ultra」版本大幅漲價",
    summary: "根據 WinFuture 的報導，三星的 Galaxy Z Fold 8 系列機型價格已洩漏。新推出的「Wide」外形機型（Galaxy Z Fold 8）的起價預計維持在 €1,999，與前代產品持平。然而，相對而言，功能幾乎未變動的「Ultra」版本（Galaxy Z Fold 8 Ultra）預計將上漲 €100，起價達到 €2,199。此外，Galaxy Z Flip 8 和 Galaxy Watch 9 系列也預計將進行價格調漲。報導詳細列出了不同容量和型號的價格變動，例如 Z Fold 8 Ultra 512GB 的價格將增加 €180。這顯示了三星在旗艦摺疊手機產品線中，對「Ultra」版本進行了顯著的價格區隔化和提升。雖然「Ultra」版本在硬體上增加了第三顆鏡頭和更大的電池，但相較於新推出的「Wide」機型，其價格上漲幅度顯得較為突兀，引起了市場關注。",
    tags: ["三星", "Samsung", "Galaxy Z Fold 8", "摺疊手機", "價格洩漏", "WinFuture"],
    title_en: "Samsung Galaxy Z Fold 8 Series Pricing Leak: New 'Wide' Model Price Unchanged, but 'Ultra' Version Significantly Increases",
    summary_en: "According to WinFuture's report, the pricing for the Samsung Galaxy Z Fold 8 series has been leaked. The starting price for the newly introduced 'Wide' model (Galaxy Z Fold 8) is expected to remain at €1,999, matching the previous generation. Conversely, the 'Ultra' version (Galaxy Z Fold 8 Ultra), which reportedly has almost no functional changes, is expected to increase by €100, bringing the starting price to €2,199. Furthermore, the Galaxy Z Flip 8 and Galaxy Watch 9 series are also anticipated to see price increases. The report details price changes across various capacities and models; for instance, the price of the Z Fold 8 Ultra 512GB will increase by €180. This indicates that Samsung is implementing significant price segmentation and increases for the 'Ultra' version within its flagship foldable phone product line. Although the 'Ultra' version includes hardware upgrades such as a third camera and a larger battery, its price increase compared to the newly launched 'Wide' model appears quite abrupt, drawing market attention.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Foldable Phone", "Pricing Leak", "WinFuture"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/04/samsung-galaxy-z-fold-8-price-leak", lang: "EN" }
    ]
  },
  {
    id: "20260704-018",
    trackers: ["os"],
    category: "Apple",
    title: "【App 開發工具】PulseKit：一鍵整合 iPhone 關鍵數據分析，提升開發者效率",
    summary: "本文介紹一款名為 PulseKit 的獨立開發應用程式，專為 iPhone 使用者設計。它是一個一體化的分析工具，旨在讓使用者無需編寫任何程式碼，即可輕鬆追蹤和監控所有重要的應用程式數據分析指標。PulseKit 的特色是將所有關鍵數據都整合顯示在手機主畫面和鎖定畫面上的小工具（widgets）中，極大地提升了數據的可視化和監控效率。這類工具對於需要快速了解應用程式表現、用戶行為或業務指標的開發者和產品經理極具實用價值。本應用程式屬於開發輔助工具類別，主要提供數據彙整與展示功能，無涉及特定的資安漏洞或修補建議。",
    tags: ["PulseKit", "iPhone", "App 開發", "數據分析", "Widget", "iOS"],
    title_en: "[App Development Tool] PulseKit: One-Click Integration of iPhone Key Data Analytics to Boost Developer Efficiency",
    summary_en: "This article introduces an independent development application called PulseKit, designed for iPhone users. It is an all-in-one analytics tool aimed at allowing users to easily track and monitor all important application data metrics without writing any code. PulseKit's feature is integrating all key data into widgets displayed on the phone's home screen and lock screen, greatly enhancing data visualization and monitoring efficiency. This type of tool is highly valuable for developers and product managers who need to quickly understand application performance, user behavior, or business metrics. This application falls under the category of development assistance tools, primarily offering data aggregation and display functions, and does not involve specific security vulnerabilities or patch recommendations.",
    tags_en: ["PulseKit", "iPhone", "App Development", "Data Analytics", "Widget", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/indie-app-spotlight-pulsekit-makes-it-easy-to-monitor-all-of-your-key-analytics-on-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260704-019",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 企業級部署挑戰：強調穩定性與核心功能不被安全修補破壞",
    summary: "本文討論了 Apple 在企業級市場的發展趨勢，指出隨著 Apple Business 和現代設備管理工具的普及，Mac 在企業部署和管理方面變得越來越容易。然而，隨著 Apple 在企業供應商中的地位提升，其面臨的挑戰是必須提供更高的運營穩定性。文章強調，在發布安全修補程式時，絕對不能破壞核心辦公室功能。如果發生此類問題，Apple 必須立即進行修復，以滿足企業客戶對穩定性的極高要求。這代表 Apple 在後續的軟體更新與安全補丁開發中，必須將維護核心功能穩定性置於首位。",
    tags: ["Apple", "企業級部署", "Mac", "Apple Business", "安全修補", "運營穩定性"],
    title_en: "Apple Enterprise Deployment Challenges: Emphasizing Stability and Preventing Core Functionality Damage During Security Patches",
    summary_en: "This article discusses Apple's development trends in the enterprise market, noting that with the proliferation of Apple Business and modern device management tools, deploying and managing Macs in corporate environments is becoming increasingly easier. However, as Apple's position among enterprise vendors grows, the challenge it faces is the need to provide higher operational stability. The article emphasizes that when releasing security patches, core office functionality must absolutely not be broken. If such issues occur, Apple must fix them immediately to meet the extremely high stability demands of enterprise customers. This means that in subsequent software updates and security patch development, Apple must prioritize maintaining core functional stability.",
    tags_en: ["Apple", "Enterprise Deployment", "Mac", "Apple Business", "Security Patch", "Operational Stability"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/apple-work-as-apple-grows-in-the-enterprise-these-are-the-kind-of-update-bugs-it-has-to-squash-immediately", lang: "EN" }
    ]
  },
  {
    id: "20260704-020",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果預計於 2027 年推出 M7 MacBook Pro：結合全新設計與觸控螢幕的入門級機型",
    summary: "根據報導，蘋果（Apple）正在規劃一款搭載 M7 晶片的入門級 MacBook Pro，預計於 2027 年春季推出。這款機型將首次將全新的設計帶入入門級產品線，大幅縮短了設計迭代的時間週期。該機型預計將具備更纖薄的機身、支援觸控的 OLED 顯示器，甚至可能整合 Dynamic Island。蘋果的產品線更新規劃為：2026 年秋季推出搭載 M6/舊設計的入門機型，以及搭載 M5 Pro/Max 和新設計的高階機型；隨後在 2027 年春季推出 M7 入門機型；最後在 2027 年秋季更新高階機型至 M7 Pro/M7 Max。這系列更新顯示蘋果正在加速晶片世代的迭代，並將新設計快速推廣至各級產品，為消費者提供了更具成本效益的選擇。",
    tags: ["Apple", "MacBook Pro", "M7", "M5 Pro", "OLED", "MacBook Ultra"],
    title_en: "Apple expected to launch M7 MacBook Pro in 2027: Combining new design with touch screen for entry-level model",
    summary_en: "According to reports, Apple is planning an entry-level MacBook Pro featuring the M7 chip, expected to launch in Spring 2027. This model will introduce a brand new design to the entry-level product line, significantly shortening the design iteration cycle. The model is expected to feature a thinner chassis, a touch-enabled OLED display, and may even integrate Dynamic Island. Apple's product line update plan is: launching an entry-level model with M6/old design in Fall 2026, and a high-end model with M5 Pro/Max and new design; followed by the M7 entry-level model in Spring 2027; and finally updating the high-end model to M7 Pro/M7 Max in Fall 2027. This series of updates indicates that Apple is accelerating chip generation iteration, rapidly rolling out new designs across all product tiers, providing consumers with more cost-effective options.",
    tags_en: ["Apple", "MacBook Pro", "M7", "M5 Pro", "OLED", "MacBook Ultra"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/apple-introducing-m7-macbook-pro-with-touchscreen-redesign-in-early-2027", lang: "EN" }
    ]
  },
  {
    id: "20260704-021",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 2 洩漏：傳聞中的帶攝像頭 AirPods Pro 3 (代號 B790) 功能預覽",
    summary: "資安開發者 Sam Henri Gold 在 iOS 27 Beta 2 版本中發現了代號 B790 的系統提示，強烈暗示了傳聞中的帶攝像頭 AirPods Pro 3 的功能。這款產品預計將整合「視覺智慧」（Visual Intelligence）功能，允許用戶無需拿出 iPhone，即可透過耳機的雙攝像頭，向 Siri 提出關於周遭環境的語境化問題。雖然洩漏的代號 B790 與彭博社報導的 B798 不同，但開發階段的差異是可能的。該產品原定今年發布，現已延期至今年秋季，預計與 20 週年 iPhone 同時上市。此功能代表了 Apple 正在將 AI 助理的應用場景從單純的語音輸入，擴展到包含環境視覺輸入的跨設備互動。",
    tags: ["Apple", "iOS 27", "AirPods Pro 3", "Visual Intelligence", "B790", "AI 助理"],
    title_en: "iOS 27 Beta 2 Leak: Feature Preview of Rumored Camera-Equipped AirPods Pro 3 (Codename B790)",
    summary_en: "Cybersecurity developer Sam Henri Gold discovered system prompts for codename B790 within the iOS 27 Beta 2 version, strongly suggesting features for the rumored camera-equipped AirPods Pro 3. This product is expected to integrate 'Visual Intelligence,' allowing users to ask Siri contextual questions about their surroundings using the earbuds' dual cameras, without needing to take out an iPhone. Although the leaked codename B790 differs from the B798 reported by Bloomberg, differences in development stages are possible. The product was originally slated for release this year but has been postponed until this autumn, expected to launch alongside the 20th Anniversary iPhone. This feature represents Apple expanding the application scenarios for its AI assistant from purely voice input to cross-device interaction that includes environmental visual input.",
    tags_en: ["Apple", "iOS 27", "AirPods Pro 3", "Visual Intelligence", "B790", "AI 助理"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/airpods-pro-with-cameras-leaked-in-ios-27-beta-2-code", lang: "EN" }
    ]
  },
  {
    id: "20260704-022",
    trackers: ["os"],
    category: "Apple",
    title: "專家提醒：網頁相機遮罩（Webcam Covers）並非有效隱私保護，甚至可能損壞設備功能與螢幕",
    summary: "文章探討了自2010年代以來流行的塑膠網頁相機遮罩（webcam covers）的有效性。最初，人們使用這些遮罩是出於對設備被駭客竊聽的擔憂。然而，文章指出，隨著時間的推移，這些遮罩並不能實質性地提升隱私保護，且可能造成更多問題。具體而言，使用遮罩可能會導致如 True Tone 等內建功能無法正常運作，並且更有可能對 MacBook 的顯示器造成物理損害。專家建議，用戶應放棄使用這類低科技的遮罩，轉而關注更可靠的隱私保護措施，而非僅依賴物理遮擋。",
    tags: ["Apple", "Webcam Covers", "True Tone", "隱私保護", "MacBook"],
    title_en: "Expert Warning: Webcam Covers Are Not Effective Privacy Protection and May Damage Device Functionality and Screen",
    summary_en: "This article discusses the effectiveness of plastic webcam covers, which have been popular since the 2010s. Initially, people used these covers due to concerns about their devices being hacked and eavesdropped on. However, the article points out that over time, these covers do not substantially enhance privacy protection and may cause more problems. Specifically, using covers can prevent built-in features, such as True Tone, from operating correctly, and are more likely to cause physical damage to a MacBook's display. Experts recommend that users abandon these low-tech covers and instead focus on more reliable privacy protection measures, rather than relying solely on physical blocking.",
    tags_en: ["Apple", "Webcam Covers", "True Tone", "Privacy Protection", "MacBook"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/security-bite-why-i-stopped-using-camera-covers-and-you-should-too", lang: "EN" }
    ]
  },
  {
    id: "20260704-023",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "北韓駭客「Contagious Interview」活動擴大：透過 npm、Go 等開源套件植入惡意程式碼",
    summary: "北韓相關駭客組織正在進行一場名為 PolinRider 的持續性活動，透過惡意植入開源套件和瀏覽器擴充功能來攻擊軟體開發者和加密貨幣產業人士。該活動利用「Contagious Interview」的招募幌子，誘騙目標執行惡意程式碼。駭客已在 npm、Packagist、Go 等多個生態系中發布了大量惡意套件，並透過偽造的職位面試建立信任。攻擊鏈的技術細節包括：駭客接管維護者帳號，在公共 GitHub 儲存庫植入混淆的 JavaScript 載入器，並利用 VS Code 的工作區開啟任務（`folderOpen`）觸發任意程式碼執行。一旦執行，惡意程式會搜尋並修改開發專案的設定檔（如 `tailwind.config.js`），並使用批次腳本偽造 Git 提交歷史。最終的惡意載荷會連線至區塊鏈基礎設施（如 TRON、Aptos），下載並執行 DEV#POPPER RAT 和 OmniStealer 等後續惡意程式。受影響的開發者應將環境視為已遭入侵，立即輪換所有暴露的密鑰，並仔細審核開發工作站和儲存庫中所有修改的設定檔和 Git 歷史記錄。",
    tags: ["北韓駭客", "Contagious Interview", "PolinRider", "npm", "開源套件", "GitHub", "DEV#POPPER RAT"],
    title_en: "North Korean Hackers Expand 'Contagious Interview' Campaign: Injecting Malicious Code via Open-Source Packages like npm and Go",
    summary_en: "North Korea-affiliated hacking groups are conducting an ongoing campaign named PolinRider, targeting software developers and cryptocurrency industry professionals by injecting malicious code into open-source packages and browser extensions. This campaign utilizes the guise of a 'Contagious Interview' to trick targets into executing malicious code. The hackers have published a large number of malicious packages across multiple ecosystems, including npm, Packagist, and Go, by establishing trust through fake job interviews. Technical details of the attack chain include: the hackers taking over maintainer accounts, injecting obfuscated JavaScript loaders into public GitHub repositories, and triggering arbitrary code execution by exploiting the `folderOpen` task in VS Code workspaces. Once executed, the malicious code searches for and modifies development project configuration files (such as `tailwind.config.js`) and uses batch scripts to forge Git commit history. The final malicious payload then connects to blockchain infrastructure (such as TRON and Aptos), downloading and executing subsequent malware like DEV#POPPER RAT and OmniStealer. Affected developers should treat their environment as compromised, immediately rotate all exposed keys, and meticulously audit all modified configuration files and Git history within their development workstations and repositories.",
    tags_en: ["North Korean Hackers", "Contagious Interview", "PolinRider", "npm", "Open-Source Packages", "GitHub", "DEV#POPPER RAT"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/north-korean-hackers-publish-108.html", lang: "EN" }
    ]
  },
  {
    id: "20260704-024",
    trackers: ["os"],
    category: "Android",
    title: "Nothing 官方宣布 Phone (1) 終止軟體支援，完成最後一次更新",
    summary: "Nothing 公司於本週確認，其初代 Nothing Phone (1) 已結束軟體生命週期，並發布了最後一次軟體更新。該更新為 2026 年 7 月的安全補丁和一些錯誤修復。Phone (1) 最初搭載 Android 12，並在 2025 年初升級至 Android 15。雖然這標誌著該機型的軟體支援終結，但 Nothing 強調該設備仍具備高度可用性。公司指出 Phone (1) 是 Nothing OS 的起點，奠定了其設計理念。對於現有用戶，Nothing 建議考慮升級至後續機型，例如 Phone (4a) Pro。本事件屬於產品生命週期管理與支援終止的公告，無重大漏洞或攻擊向量，主要影響是用戶需規劃設備升級。",
    tags: ["Nothing", "Nothing Phone (1)", "Android", "軟體支援終止", "產品生命週期"],
    title_en: "Nothing Officially Announces End of Software Support for Phone (1), Completing Final Update",
    summary_en: "Nothing confirmed this week that its original Nothing Phone (1) has reached the end of its software lifecycle, and has released its final software update. This update includes a July 2026 security patch and various bug fixes. The Phone (1) initially launched with Android 12 and was upgraded to Android 15 in early 2025. Although this marks the end of software support for the model, Nothing emphasized that the device retains high usability. The company noted that the Phone (1) was the starting point for Nothing OS, establishing its design philosophy. For current users, Nothing recommends considering an upgrade to a subsequent model, such as the Phone (4a) Pro. This event is a product lifecycle management and support termination announcement, with no major vulnerabilities or attack vectors; the primary impact is on users needing to plan for device upgrades.",
    tags_en: ["Nothing", "Nothing Phone (1)", "Android", "End of Software Support", "Product Lifecycle"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/04/nothing-officially-ends-phone-1-software-updates-with-a-final-farewell", lang: "EN" }
    ]
  },
  {
    id: "20260704-025",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AWS Graviton5 處理器與 M9g/C9g 雲端執行個體正式上線，大幅提升運算與儲存效能",
    summary: "AWS 在其雲端運算產品線推出搭載自研 Graviton5 處理器的最新一代 EC2 執行個體，包括 M9g（一般用途）和 C9g（運算最佳化）。Graviton5 採用 3 奈米製程，內建 192 顆運算核心，並支援 DDR5-8800 與 PCIe 6.0 等先進規格。M9g 相較於前代產品 M8g，運算效能提升達 25%，網站應用程式和機器學習等工作負載的存取速度分別增加 35% 及 30%。此外，M9gd 和 C9gd 透過搭配 NVMe SSD，其 IOPS 效能相較於前代產品提升 30%。AWS 更在 Nitro System 中引入 Nitro Isolation Engine，利用形式驗證技術，提供數學層面的隔離保證，為雲端安全設定新標準。",
    tags: ["AWS", "Graviton5", "EC2", "雲端運算", "Nitro System", "形式驗證"],
    title_en: "AWS Graviton5 Processor and M9g/C9g Cloud Instances Officially Launched, Significantly Boosting Compute and Storage Performance",
    summary_en: "AWS has launched a new generation of EC2 instances powered by its proprietary Graviton5 processor, including M9g (general purpose) and C9g (compute optimized). Graviton5 utilizes a 3nm process and features 192 compute cores, supporting advanced specifications such as DDR5-8800 and PCIe 6.0. Compared to the previous generation M8g, the M9g offers a 25% boost in compute performance, with access speeds increasing by 35% for web application workloads and 30% for machine learning workloads. Furthermore, M9gd and C9gd, when paired with NVMe SSDs, see a 30% improvement in IOPS performance compared to their predecessors. AWS has also introduced the Nitro Isolation Engine within the Nitro System, which uses formal verification technology to provide mathematically proven isolation guarantees, setting a new standard for cloud security.",
    tags_en: ["AWS", "Graviton5", "EC2", "Cloud Computing", "Nitro System", "Formal Verification"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/review/176974", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260704-026",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Gemini 升級方案詳解：AI Plus 與 AI Pro 提升用戶權限與內容處理能力",
    summary: "Google Gemini 應用程式已實施基於運算量的使用限制，用戶的限制取決於提示的複雜度、使用的模型和功能，並每 5 小時刷新一次。免費用戶的限制為「標準限制」，而訂閱 AI Plus 或 AI Pro 可提供更高的使用額度。升級方案的主要提升包括：大幅增加的上下文窗口（Context Window），免費帳戶限制為 32,000 tokens，AI Plus 可達 128,000 tokens，AI Pro 更高達 100 萬 tokens；文件上傳限制也隨之提升，例如影片長度從 5 分鐘增加到 AI Pro 的 1 小時；此外，AI Pro 還提供更強大的圖像生成模型（Nano Banana Pro）和更長的音訊上傳時間。進階功能如「個人智慧」（Personal Intelligence）的每日摘要、排程行動（Scheduled actions）等，也需要訂閱。這些升級旨在提供更專業、更全面的 AI 輔助體驗，特別適合需要處理大量資料或進行複雜專案規劃的用戶。",
    tags: ["Google Gemini", "AI Plus", "AI Pro", "上下文窗口", "LLM", "生成式 AI", "使用限制"],
    title_en: "Google Gemini Upgrade Details: AI Plus and AI Pro Enhance User Capabilities and Content Processing",
    summary_en: "The Google Gemini application has implemented usage limits based on computational load. User limits depend on prompt complexity, models used, and features, and refresh every 5 hours. Free users are subject to 'standard limits,' while subscribing to AI Plus or AI Pro provides higher usage quotas. Key enhancements in the upgrade plans include a significantly increased Context Window: free accounts are limited to 32,000 tokens, AI Plus reaches 128,000 tokens, and AI Pro reaches up to 1 million tokens. File upload limits are also increased; for example, video length increases from 5 minutes to 1 hour with AI Pro. Furthermore, AI Pro offers a more powerful image generation model (Nano Banana Pro) and longer audio upload times. Advanced features such as daily summaries for 'Personal Intelligence' and Scheduled actions also require a subscription. These upgrades aim to provide a more professional and comprehensive AI assistance experience, especially for users who need to process large amounts of data or conduct complex project planning.",
    tags_en: ["Google Gemini", "AI Plus", "AI Pro", "Context Window", "LLM", "Generative AI", "Usage Limits"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/04/gemini-app-free-plus-pro-features", lang: "EN" }
    ]
  },
  {
    id: "20260704-027",
    trackers: ["os"],
    category: "重點關注",
    title: "BenQ MA270S 發表：27吋 5K 螢幕，具備 Mac 友善的亮面設計與多功能擴充性",
    summary: "本文介紹 BenQ 新推出的 MA270S 顯示器，這款 27 吋 5K 螢幕主打具備亮面（glossy）塗層，這與目前市場上主流的霧面（matte）設計不同，使其更符合 Apple 產品的視覺風格。MA270S 具備極簡邊框、多樣化的連接埠配置，包括四個 USB-C、兩個 USB-A 和兩個 HDMI 埠，支援單一 USB-C 線材供電，可同時連接 MacBook 及周邊設備。此外，它還提供 Display Pilot 2 應用程式來管理顯示器亮度，並具備 KVM 功能，可讓使用者在 Mac 與 Windows PC 間無縫切換使用同一鍵盤滑鼠。螢幕支援 99% P3 色域覆蓋和 HDR400，雖然其亮度（400 nit）和材質（部分為塑膠）相較於 Apple Studio Display 有落差，但其價格（$999）遠低於對手，且提供了市場稀缺的 5K 亮面選擇，是 Mac 使用者的具吸引力的替代方案。",
    tags: ["BenQ", "MA270S", "5K 螢幕", "Mac 友善", "KVM", "亮面塗層"],
    title_en: "BenQ MA270S Launch: 27-inch 5K Display with Mac-Friendly Glossy Design and Multi-function Expandability",
    summary_en: "This article introduces the newly launched BenQ MA270S monitor. This 27-inch 5K display features a glossy coating, which differs from the mainstream matte designs currently available on the market, making it more aligned with the visual aesthetic of Apple products. The MA270S boasts a minimalist bezel and diverse connectivity options, including four USB-C, two USB-A, and two HDMI ports. It supports single USB-C cable power delivery, allowing simultaneous connection of a MacBook and peripheral devices. Furthermore, it provides the Display Pilot 2 application for managing display brightness and features KVM functionality, enabling users to seamlessly switch between a Mac and a Windows PC using the same keyboard and mouse. The screen supports 99% P3 color gamut coverage and HDR400. Although its brightness (400 nit) and material (partially plastic) fall short compared to the Apple Studio Display, its price ($999) is significantly lower than its competitor, while offering the market-rare 5K glossy option, making it an attractive alternative for Mac users.",
    tags_en: ["BenQ", "MA270S", "5K Display", "Mac-Friendly", "KVM", "Glossy Coating"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/benq-ma270s-hands-on-for-mac-27-inch-5k-monitor", lang: "EN" }
    ]
  },
  {
    id: "20260704-028",
    trackers: ["os"],
    category: "重點關注",
    title: "FEX 2607 更新：強化 ARM 平台 x86/x86_64 模擬能力，支援 SVE2 與 CUDA Thunking",
    summary: "FEX 模擬器發布了 2607 版本更新，旨在提升其在 ARM64 系統上運行 x86/x86_64 軟體（如 Wine/Proton 遊戲）的效能與兼容性。本次更新的重點包括為未發布的 256 位元 SVE2 ARM 處理器實作 Advanced Vector Extensions (AVX) 指令的支援，以提高性能。此外，FEX 2607 也增強了 JIT 相關的修復與改進。在硬體加速方面，它開始支援 CUDA thunking，這對於在 DGX Spark 或 NVIDIA GB10 等系統上使用 FEX 運行動態連結的 CUDA x86_64 軟體具有潛力。更重要的是，FEX 開始實作支援 Unixlib，這將解決目前將 FEX 完整編譯為 DLL 檔案所面臨的工程限制，預計能為未來的開發帶來更多改善。",
    tags: ["FEX Emulator", "ARM64", "x86/x86_64", "SVE2", "CUDA", "Proton", "Wine"],
    title_en: "FEX 2607 Update: Enhancing ARM Platform x86/x86_64 Emulation with SVE2 and CUDA Thunking Support",
    summary_en: "The FEX emulator has released a 2607 version update, aimed at improving the performance and compatibility of running x86/x86_64 software (such as Wine/Proton games) on ARM64 systems. Key highlights of this update include implementing support for Advanced Vector Extensions (AVX) instructions for unreleased 256-bit SVE2 ARM processors to boost performance. Furthermore, FEX 2607 has enhanced JIT-related fixes and improvements. In terms of hardware acceleration, it now supports CUDA thunking, which holds potential for dynamically linking CUDA x86_64 software using FEX on systems like DGX Spark or NVIDIA GB10. Crucially, FEX has begun implementing support for Unixlib, which will resolve current engineering limitations encountered when compiling FEX entirely as a DLL file, and is expected to bring further improvements to future development.",
    tags_en: ["FEX Emulator", "ARM64", "x86/x86_64", "SVE2", "CUDA", "Proton", "Wine"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FEX-2607-Emulator", lang: "EN" }
    ]
  },
  {
    id: "20260704-029",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "研究揭露「機密運算」核心信任機制缺陷：Attested TLS 協議存在繞過風險",
    summary: "機密運算（Confidential Computing）被視為歐洲主權雲的技術支柱，其核心機制是遠端證明（remote attestation），用於在敏感資料傳輸前，加密證明伺服器運行於真實的受信任執行環境（TEE）內。然而，獨立研究指出，用於證明加密信任的 Attested TLS 協議存在根本的架構缺陷。研究人員發現，攻擊者可以利用協議僅檢查軟體完整性而非位置的盲點，將原本指向一個伺服器的連線，靜默地重定向到一個不同的、惡意的機器。這類「中繼攻擊」（relay attacks）甚至可以發生在 TLS 握手過程中，使客戶端無法察覺。雖然目前最好的修補方案只能證明連線開始時的對象，但無法保證數分鐘後傳輸的資料仍指向最初的目標。此漏洞已導致 CVE-2026-33697，評級為高嚴重性（CVSS 7.5）。受影響的產品包括 Meta 的 WhatsApp 私有處理系統、Edgeless Systems 的 Contrast 以及 Cocos AI 平台等，建議業界應關注協議層面的修補，並理解目前修補的局限性。",
    tags: ["機密運算", "Confidential Computing", "Attested TLS", "遠端證明", "CVE-2026-33697", "TLS 1.3", "TEE"],
    title_en: "Research Reveals Core Trust Mechanism Flaw in 'Confidential Computing': Attested TLS Protocol Faces Bypass Risk",
    summary_en: "Confidential Computing is viewed as a technological pillar for European sovereign cloud, with its core mechanism being remote attestation. This process is used to cryptographically prove that a server is running within a genuine Trusted Execution Environment (TEE) before sensitive data transmission. However, independent research points out a fundamental architectural flaw in the Attested TLS protocol used to prove cryptographic trust. Researchers found that an attacker can exploit the protocol's blind spot—which only checks software integrity, not location—to silently redirect a connection originally intended for one server to a different, malicious machine. These 'relay attacks' can even occur during the TLS handshake process, remaining undetected by the client. Although the best current patch can only prove the target at the start of the connection, it cannot guarantee that data transmitted minutes later still points to the original destination. This vulnerability has resulted in CVE-2026-33697, rated as High severity (CVSS 7.5). Affected products include Meta's WhatsApp private processing system, Edgeless Systems' Contrast, and the Cocos AI platform. The industry is advised to focus on protocol-level patches and understand the limitations of current remediation efforts.",
    tags_en: ["Confidential Computing", "Confidential Computing", "Attested TLS", "remote attestation", "CVE-2026-33697", "TLS 1.3", "TEE"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/04/confidential-computings-core-trust-mechanism-is-broken-the-fix-may-not-exist/5266056", lang: "EN" }
    ]
  },
  {
    id: "20260704-030",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟Teams增強會議AI控制權：提供開場者/主辦人開關切換Copilot、Facilitator等功能",
    summary: "為回應市場對AI功能控制權的需求，微軟宣布將在Teams會議中新增「Meeting AI」開關。此功能允許授權的主辦人或報告者在即時會議中，獨立開啟或關閉Copilot、Facilitator、會議摘要（recap）等AI功能。此更新旨在賦予使用者對AI功能的精細控制，使其成為行業標準。該功能預計於2026年7月上旬開始分階段推出，並將在Windows、macOS、行動裝置和網頁等所有設備上可用。使用者可根據需求，選擇完全關閉所有AI功能，或僅保留特定功能。若要完全避免AI干擾，必須同時關閉「轉錄（transcription）」和「Meeting AI」。此外，微軟也正在測試AI自動監聽會議並主動填補知識空缺的功能，但考慮到隱私顧慮，該功能不會預設開啟，且Meeting AI開關將提供關閉選項。此更新將顯著提升使用者在利用AI輔助協作時的自主權。",
    tags: ["Microsoft Teams", "Copilot", "Meeting AI", "AI功能控制", "協作工具", "Windows"],
    title_en: "Microsoft Teams enhances meeting AI control: Offering toggles for Copilot, Facilitator, and other features for openers/hosts",
    summary_en: "In response to market demand for control over AI features, Microsoft announced the addition of a 'Meeting AI' toggle in Teams meetings. This feature allows authorized hosts or presenters to independently turn on or off AI functions such as Copilot, Facilitator, and meeting summaries (recap) during a live meeting. This update aims to give users granular control over AI features, setting an industry standard. The feature is expected to roll out in phases starting in early July 2026, and will be available across all devices, including Windows, macOS, mobile, and web. Users can choose to completely disable all AI features or retain only specific functions as needed. To completely avoid AI interference, both 'transcription' and 'Meeting AI' must be disabled simultaneously. Furthermore, Microsoft is testing a feature where AI automatically listens to meetings and proactively fills knowledge gaps, but due to privacy concerns, this feature will not be enabled by default, and the Meeting AI toggle will provide an option to turn it off. This update will significantly enhance user autonomy when utilizing AI-assisted collaboration.",
    tags_en: ["Microsoft Teams", "Copilot", "Meeting AI", "AI Feature Control", "Collaboration Tools", "Windows"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/05/microsoft-caves-after-teams-ai-backlash-will-let-you-turn-off-copilot-facilitator-and-recap-mid-meeting", lang: "EN" }
    ]
  }
];
