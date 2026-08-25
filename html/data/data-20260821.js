// data-20260821.js — 2026-08-21
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-21"] = [
  {
    id: "20260821-001",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Mesa 驅動程式更新：Nova Lake 系列處理器圖形支援現已穩定化",
    summary: "Intel 的開源 Mesa 驅動程式針對 Linux 平台上的 Iris Gallium3D (OpenGL) 和 ANV (Vulkan) 支援，已將下一代 Nova Lake 處理器（包含 S、U、H、HX 系列）的整合圖形支援，從實驗性狀態提升至預設穩定狀態。此變動與 Linux 7.3 核心將 Nova Lake Xe3P 圖形視為穩定且預設啟用有關。由於 Linux 核心不再要求「force_probe」才能支援 Intel Nova Lake 圖形，Mesa 驅動程式也同步移除相關的 force probe 覆寫邏輯。此修補程式已在 Mesa Git 中實施，並計畫回溯應用至目前的 Mesa 26.2 穩定系列。這項更新確保了在 Intel Nova Lake 處理器正式上市前，開源 Linux 驅動支援已具備良好的穩定性，為開發者和使用者提供了更可靠的圖形加速體驗。",
    tags: ["Intel", "Mesa", "Nova Lake", "Linux", "OpenGL", "Vulkan", "Linux 核心"],
    title_en: "Intel Mesa Driver Update: Nova Lake Processor Graphics Support Stabilized",
    summary_en: "Intel's open-source Mesa driver support for Iris Gallium3D (OpenGL) and ANV (Vulkan) on Linux platforms has upgraded the integrated graphics support for the next-generation Nova Lake processors (including S, U, H, and HX series) from an experimental state to a stable, default state. This change is correlated with the Linux 7.3 kernel treating Nova Lake Xe3P graphics as stable and default enabled. Since the Linux kernel no longer requires 'force_probe' to support Intel Nova Lake graphics, the Mesa driver has also removed the corresponding force probe override logic. This patch has been implemented in the Mesa Git and is planned for backporting to the current Mesa 26.2 stable series. This update ensures that open-source Linux driver support possesses robust stability even before the official launch of the Intel Nova Lake processors, providing developers and users with a more reliable graphics acceleration experience.",
    tags_en: ["Intel", "Mesa", "Nova Lake", "Linux", "OpenGL", "Vulkan", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Mesa-Nova-Lake-Stable", lang: "EN" }
    ]
  },
  {
    id: "20260821-002",
    trackers: ["os"],
    category: "Linux",
    title: "多主流 Linux 發行版發布安全更新：AlmaLinux、Debian、Fedora、Red Hat、SUSE 與 Ubuntu 涵蓋核心與應用層面修補",
    summary: "本次資安公告涵蓋了包括 AlmaLinux、Debian、Fedora、Red Hat、SUSE 和 Ubuntu 在內的多個主流 Linux 發行版。這些更新範圍極廣，不僅包含作業系統的核心元件（如 kernel, openssl, gnutls），也覆蓋了大量應用層級的軟體套件。\n\n具體的修補內容包括：Debian 更新了 chromium、libgit2 和 python-httplib2 等；Fedora 涵蓋了 firefox、openssh 以及多個 Python 與 .NET 套件；Red Hat 更新了 kernel, openssl, qemu-kvm 等核心組件；SUSE 的更新涉及 buildah, containerd, podman, kubernetes 等容器與虛擬化技術。Ubuntu 也針對各種特定硬體和雲端環境的 linux 映像檔進行了多項修補。\n\n這些廣泛的更新表明，各發行版正在積極應對跨越核心到上層應用、涵蓋從網路服務到開發工具鏈的複雜安全威脅。建議使用者務必根據自身部署的系統版本和業務需求，及時套用所有相關的安全修補。",
    tags: ["AlmaLinux", "Debian", "Fedora", "Red Hat", "SUSE", "Ubuntu", "Linux 核心", "安全更新"],
    title_en: "Multiple Major Linux Distributions Release Security Updates: AlmaLinux, Debian, Fedora, Red Hat, SUSE, and Ubuntu Cover Core and Application Layer Patches",
    summary_en: "This security announcement covers multiple major Linux distributions, including AlmaLinux, Debian, Fedora, Red Hat, SUSE, and Ubuntu. The scope of these updates is extensive, covering not only core operating system components (such as kernel, openssl, gnutls) but also numerous application-level software packages.\n\nThe specific patches include: Debian updating chromium, libgit2, and python-httplib2; Fedora addressing firefox, openssh, and multiple Python and .NET packages; Red Hat updating core components such as kernel, openssl, and qemu-kvm; and SUSE updates involving container and virtualization technologies like buildah, containerd, podman, and kubernetes. Ubuntu also implemented various patches for Linux images tailored to specific hardware and cloud environments.\n\nThese widespread updates demonstrate that each distribution is actively addressing complex security threats spanning from the core to upper-layer applications, covering everything from network services to development toolchains. Users are strongly advised to apply all relevant security patches promptly, based on their deployed system versions and business requirements.",
    tags_en: ["AlmaLinux", "Debian", "Fedora", "Red Hat", "SUSE", "Ubuntu", "Linux Kernel", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089999", lang: "EN" }
    ]
  },
  {
    id: "20260821-003",
    trackers: ["os"],
    category: "Linux",
    title: "Framework Laptop 16 更新：加入 RTX 5070 GPU、單體鍵盤與觸控板，強化 Linux 開發體驗",
    summary: "本文介紹了 Framework Computer 為其 Framework Laptop 16 所推出的新組件更新。主要的升級包括可選配 NVIDIA GeForce RTX 5070 12GB 筆電 GPU 模組，讓使用者能提升遊戲效能或利用 CUDA/AI 工作負載；同時也推出了單體式觸控板和鍵盤選項，旨在改善輸入體驗並取代傳統的配件。RTX 5070 的加入提供了 NVIDIA-only、混合模式（搭配 Radeon 890M）以及 NVIDIA Advanced Optimus 等多種顯示模式選擇。新的單體式觸控板模組具備全寬 CNC 鋁製掌托和 124 x 77 mm 的觸控表面，價格為 $129 USD。單體鍵盤則消除了對側間隔件的依賴，並運行於開源 QMK 韌體。在系統層面，這些新硬體組件在現代 Linux 發行版上表現良好，作者特別測試了 Fedora Workstation 44 和 Ubuntu 26.04 LTS，顯示其具備出箱即用（out-of-the-box）的優異兼容性。",
    tags: ["Framework Computer", "Framework Laptop 16", "RTX 5070", "NVIDIA GPU", "Linux", "QMK"],
    title_en: "Framework Laptop 16 Update: Featuring RTX 5070 GPU, Detachable Keyboard and Trackpad to Enhance Linux Development Experience",
    summary_en: "This article introduces new component updates released by Framework Computer for the Framework Laptop 16. Key upgrades include an optional NVIDIA GeForce RTX 5070 12GB laptop GPU module, allowing users to boost gaming performance or utilize CUDA/AI workloads; it also features detachable trackpad and keyboard options designed to improve the input experience and replace traditional accessories. The addition of the RTX 5070 provides multiple display modes, including NVIDIA-only, hybrid mode (paired with Radeon 890M), and NVIDIA Advanced Optimus. The new detachable trackpad module boasts a full-width CNC aluminum palm rest and a 124 x 77 mm touchpad surface, priced at $129 USD. The detachable keyboard eliminates reliance on side spacers and operates on open-source QMK firmware. At the system level, these new hardware components perform well on modern Linux distributions; the author specifically tested Fedora Workstation 44 and Ubuntu 26.04 LTS, demonstrating excellent out-of-the-box compatibility.",
    tags_en: ["Framework Computer", "Framework Laptop 16", "RTX 5070", "NVIDIA GPU", "Linux", "QMK"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/framework-laptop-16-2026", lang: "EN" }
    ]
  },
  {
    id: "20260821-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "CISA警告TrueConf兩漏洞遭利用：俄羅斯背景視訊軟體面臨惡意程式傳播風險",
    summary: "美國網路安全局（CISA）已要求聯邦機構修補一款名為 TrueConf 的資安漏洞。TrueConf 是一款由俄羅斯開發的視訊會議平台，提供可部署於內部網路的解決方案，作為 Zoom 和 Microsoft Teams 等雲端服務的替代品。\n\nCISA 將兩個被利用的漏洞編號 CVE-2026-72529 和 CVE-2026-72530 加入其已知已利用漏洞目錄（KEV）。根據分析，這些漏洞可讓未經身份驗證的攻擊者透過網路存取 TCP Port 4307，先執行惡意腳本，再突破隔離環境，在底層伺服器上執行任意程式碼。\n\n安全公司 Kaspersky 指出，駭客組織 Head Mare 利用此路徑植入 Web Shell 並取得 TrueConf 資料庫的特權存取。更危險的是，攻擊者甚至用帶有 PhantomCore 後門的木馬版本替換了正規的 Windows 客戶端安裝程式，使得即使未直接運行漏洞伺服器的機構，員工也可能從第三方受害基礎設施下載到惡意的客戶端。\n\nTrueConf 官方已在 2022 年發布了修補版本（如 5.3.9、5.4.9 和 5.5.5）。CISA 要求聯邦機構必須在特定日期前完成修補，建議所有用戶應立即更新。",
    tags: ["TrueConf", "CVE-2026-72529", "CVE-2026-72530", "CISA", "視訊會議", "資安漏洞"],
    title_en: "CISA Warns of Exploitation of Two TrueConf Vulnerabilities: Russian-Developed Video Software Faces Malware Propagation Risk",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has urged federal agencies to patch a security vulnerability in TrueConf. TrueConf is a video conferencing platform developed in Russia, offering an on-premise solution as an alternative to cloud services like Zoom and Microsoft Teams.\n\nCISA added two exploited vulnerabilities, CVE-2026-72529 and CVE-2026-72530, to its Known Exploited Vulnerabilities catalog (KEV). Analysis indicates that these flaws allow unauthenticated attackers to access TCP Port 4307 over the network, execute malicious scripts, bypass isolation environments, and run arbitrary code on the underlying server.\n\nSecurity firm Kaspersky noted that a threat group called Head Mare utilized this path to implant Web Shells and gain privileged access to TrueConf databases. More dangerously, attackers even replaced legitimate Windows client installers with a trojan version containing the PhantomCore backdoor, meaning employees could download malicious clients from third-party compromised infrastructure even without directly running the vulnerable server.\n\nTrueConf officially released patches in 2022 (such as 5.3.9, 5.4.9, and 5.5.5). CISA requires federal agencies to complete patching by a specific deadline, and all users are advised to update immediately.",
    tags_en: ["TrueConf", "CVE-2026-72529", "CVE-2026-72530", "CISA", "video conferencing vulnerability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/patches/2026/08/21/homeland-security-cybercops-say-patch-trueconf-russias-zoom-if-youre-using-it/5291156", lang: "EN" }
    ]
  },
  {
    id: "20260821-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：vhost VRing 重配置時，元數據快取未重置導致記憶體越界存取",
    summary: "本漏洞存在於 Linux 核心的 vhost 功能中。當使用設備 IOTLB（Input/Output Translation Lookaside Buffer）且 vq（virtqueue）處於運行狀態時，即使執行了 `VHOST_SET_VRING_ADDR` 或 `VHOST_SET_VRING_NUM` 等改變區域大小的 ioctl 呼叫，元數據快取（metadata cache）並未被重置。這導致系統誤信地址已通過驗證。\n當後續操作如 `vq_meta_prefetch()` 命中此過時快取條目時，vhost_vq_meta_fetch() 會繼續使用舊的映射關係進行地址轉換。由於新的地址可能已經超出 IOTLB 實際映射範圍，隨後的用於傳輸資料的函式（如 vhost_copy_to_user 和 vhost_copy_from_user）將會存取到超出合法區域的記憶體。\n修補建議是：在任何重新配置 vring 的情況下，必須重置元數據快取，確保新的地址能夠經過 `iotlb_access_ok()` 的完整驗證流程。",
    tags: ["Linux 核心", "vhost", "CVE-2026-74580", "vring", "IOTLB", "記憶體越界"],
    title_en: "Linux Kernel Vulnerability: Metadata Cache Not Reset During vhost VRing Reconfiguration Causes Out-of-Bounds Memory Access",
    summary_en: "This vulnerability exists within the Linux kernel's vhost functionality. When using the IOTLB (Input/Output Translation Lookaside Buffer) and a virtqueue (vq) is active, even if ioctl calls like `VHOST_SET_VRING_ADDR` or `VHOST_SET_VRING_NUM` are executed to change the region size, the metadata cache is not reset. This causes the system to incorrectly trust that the address has been validated.\n\nWhen subsequent operations, such as `vq_meta_prefetch()`, hit this stale cache entry, vhost_vq_meta_fetch() continues to use the old mapping relationship for address translation. Since the new address may already be outside the IOTLB's actual mapped range, subsequent functions used for data transfer (such as vhost_copy_to_user and vhost_copy_from_user) will access memory beyond the legitimate boundaries.\n\nThe recommended fix is that the metadata cache must be reset during any reconfiguration of the vring, ensuring that the new address undergoes the complete validation process via `iotlb_access_ok()`.",
    tags_en: ["Linux Kernel", "vhost", "CVE-2026-74580", "vring", "IOTLB", "Out-of-bounds Memory"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74580", lang: "EN" }
    ]
  },
  {
    id: "20260821-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 IPv6 路由處理漏洞：suppressed fib6 rule 可導致洩漏已釋放的目標位址",
    summary: "本篇報告指出 Linux 核心中一個關於 IPv6 路由處理的潛在安全問題。當使用 `fib6_rule_suppress()` 丟棄（drops）被抑制的路由時，程式碼會透過 `ip6_rt_put_flags()` 進行操作，但卻沒有正確地將結構體 res->rt6 清空。這導致即使後續沒有新的規則提供替代方案，`fib6_rule_lookup()` 仍可能看到這個過期的（stale）目標位址 (dst)。因此，一個抑制規則可以將已釋放的路由洩漏回 `rt6_lookup()`，而下一次執行 `put` 操作時，可能會從 `dst_release()` 的 `rcuref_put_slowpath()` 處觸發。開發者建議在抑制路由時，應當清除 res->rt6，以確保被抑制的查找操作能順利地跳過（fall through）到 null 目標位址，而非重複使用已釋放的值。此漏洞影響 Linux 核心的 `net/ipv6/fib6_rules.c` 文件。\n\n修補建議：應修改相關程式碼，在執行路由抑制時明確清除 res->rt6 指標。",
    tags: ["Linux 核心", "IPv6", "CVE-2026-74581", "net/ipv6/fib6_rules.c", "路由洩漏", "NIST NVD"],
    title_en: "Linux Kernel IPv6 Routing Vulnerability: Suppressed fib6 Rule Can Leak Released Target Address",
    summary_en: "This report highlights a potential security issue in the Linux kernel related to IPv6 routing processing. When using `fib6_rule_suppress()` to drop suppressed routes, the code operates via `ip6_rt_put_flags()`, but fails to correctly clear the structure `res->rt6`. This causes `fib6_rule_lookup()` to potentially see this stale destination address (dst), even if no new rules are available as alternatives. Consequently, a suppressed rule can leak released routes back to `rt6_lookup()`, which might trigger during the next execution of a `put` operation from `dst_release()`'s `rcuref_put_slowpath()`. Developers recommend clearing `res->rt6` when suppressing a route to ensure that the suppressed lookup operation can successfully fall through to a null destination address, rather than reusing a released value. This vulnerability affects the `net/ipv6/fib6_rules.c` file in the Linux kernel.\n\nPatch Recommendation: The relevant code should be modified to explicitly clear the `res->rt6` pointer when performing route suppression.",
    tags_en: ["Linux Kernel", "IPv6", "CVE-2026-74581", "net/ipv6/fib6_rules.c", "Route Leakage", "NIST NVD"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74581", lang: "EN" }
    ]
  },
  {
    id: "20260821-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：解決 packet_snd() 與 packet_sendmsg_spkt() 中的硬標頭長度不一致性漏洞",
    summary: "本更新針對 Linux 核心中的一個潛在安全問題，涉及 `packet_snd()` 和 `packet_sendmsg_spkt()` 函數。該漏洞的核心是設備配置重構（例如透過 bonding 裝置類型改變）可能導致硬標頭長度 (`hard_header_len`) 的值不一致性。當使用 SOCK_RAW 時，`packet_snd()` 可能先儲存一個較大的預留值，然後使用較小的值分配額外空間 (headroom)。隨後從使用者空間的複製操作可能會嘗試執行越界寫入（out-of-bounds write）。`packet_sendmsg_spkt()` 存在相同問題，因為它在釋放 RCU read lock 前，會透過多次獨立讀取來計算預留和標頭偏移量。修補措施包括為已儲存標頭長度的呼叫者新增 `LL_RESERVED_SPACE_EX()`，並確保在 `packet_snd()` 中只讀取一次 `hard_header_len` 來進行分配與建構；同時，在 `packet_sendmsg_spkt()` 中透過設備查找重試時保留最初的分配時間值。此修補旨在提高核心處理網路封包時的資料完整性與安全性。",
    tags: ["Linux 核心", "CVE-2026-74582", "packet_snd()", "hard_header_len", "網路堆疊", "skb"],
    title_en: "Linux Kernel Patch: Addressing Hard Header Length Inconsistency Vulnerability in packet_snd() and packet_sendmsg_spkt()",
    summary_en: "This update addresses a potential security issue within the Linux kernel, involving the `packet_snd()` and `packet_sendmsg_spkt()` functions. The core of the vulnerability lies in how device configuration reconstruction (for example, by changing bonding device types) can lead to an inconsistency in the hard header length (`hard_header_len`) value. When using SOCK_RAW, `packet_snd()` might first store a larger reserved value and then allocate additional space (headroom) using a smaller value. Subsequently, a copy operation from user space could attempt an out-of-bounds write. A similar issue exists in `packet_sendmsg_spkt()`, as it calculates the reserved and header offsets through multiple independent reads before releasing the RCU read lock. The patch introduces `LL_RESERVED_SPACE_EX()` for callers that have already stored a header length, and ensures that `hard_header_len` is read only once within `packet_snd()` for allocation and construction; simultaneously, it retains the original allocated time value during device lookup retries in `packet_sendmsg_spkt()`. This fix aims to enhance data integrity and security when the kernel processes network packets.",
    tags_en: ["Linux Kernel", "CVE-2026-74582", "packet_snd()", "hard_header_len", "Network Stack", "skb"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74582", lang: "EN" }
    ]
  },
  {
    id: "20260821-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 net/sched：修復 cls_route 中的快取使用後釋放漏洞 (CVE-2026-74583)",
    summary: "本漏洞位於 Linux 核心的 `net/sched` 子系統，具體影響的是 `cls_route` 的 fastmap 功能。該功能維護一個儲存原始結構指針的快取，用於分類封包。攻擊發生在讀取器（reader）和寫入器（writer）之間存在競態條件：當寫入器清除快取後，如果讀取器未及時更新或檢查狀態，可能會將即將被釋放的過期指針存入快取中。隨後，當系統執行 RCU-deferred kfree 釋放記憶體後，下一個封包會讀取到這個已失效（stale）的 fastmap 條目，從而導致使用後釋放 (Use-After-Free, UAF) 的安全問題。此漏洞已被修復，修補措施是在每個過濾器上引入了一個布林標記（dying flag），以阻止正在進行的讀取操作重新發佈已失效的快取指針，從而確保資料的有效性。",
    tags: ["Linux 核心", "net/sched", "cls_route", "Use-After-Free", "CVE-2026-74583", "fastmap"],
    title_en: "Linux Kernel net/sched: Fix for Use-After-Free Vulnerability in cls_route Cache Usage (CVE-2026-74583)",
    summary_en: "This vulnerability resides in the `net/sched` subsystem of the Linux kernel, specifically affecting the fastmap functionality within `cls_route`. This feature maintains a cache that stores original structure pointers for packet classification. The attack occurs due to a race condition between the reader and writer: when the writer clears the cache, if the reader fails to update or check the status promptly, it might store an expired pointer in the cache. Subsequently, when the system performs RCU-deferred kfree memory release, the next packet reads this stale fastmap entry, leading to a Use-After-Free (UAF) security issue. This vulnerability has been patched; the fix introduces a boolean flag (dying flag) on each filter to prevent ongoing read operations from republishing expired cache pointers, thereby ensuring data validity.",
    tags_en: ["Linux Kernel", "net/sched", "cls_route", "Use-After-Free", "CVE-2026-74583", "fastmap"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-74583", lang: "EN" }
    ]
  },
  {
    id: "20260821-009",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Insiders 發布新版本：提升自動播放體驗與新增應用程式最大化輔助功能",
    summary: "微軟（Microsoft）透過 Windows Insider Preview Build，為 Beta 和 Experimental 通道發布了新的 Windows 11 版本。本次更新主要著重於使用者介面優化和提高易用性。在「Experimental」通道中，新增了現代化的自動播放（AutoPlay）體驗，使用 WinUI 重建了設備連接時的對話框，使其更符合 Windows 整體設計、支援深色模式，並能更好地響應文字縮放與顯示設定。此外，「Experimental」和「Beta」通道也加入了新的輔助功能：「Open apps maximized」，這項可透過「設定 > 輔助功能 > 視覺效果」開啟的設定，能讓應用程式在啟動時自動最大化，有助於提升使用螢幕閱讀器或平板模式等情境下的操作一致性。本次更新主要為開發者和早期測試使用者提供新功能預覽，並修復了 Experimental 通道 Feature Flags 顯示空白的問題。",
    tags: ["Windows 11", "Insider Preview", "AutoPlay", "WinUI", "輔助功能", "Accessibility"],
    title_en: "Windows 11 Insiders Release New Build: Enhancing AutoPlay Experience and Adding App Maximization Assist Feature",
    summary_en: "Microsoft has released a new Windows 11 version through the Windows Insider Preview Build, targeting the Beta and Experimental channels. This update primarily focuses on user interface optimization and improved usability. In the 'Experimental' channel, a modernized AutoPlay experience was introduced. The device connection dialog box has been rebuilt using WinUI to align better with the overall Windows design, support dark mode, and respond more effectively to text scaling and display settings. Furthermore, both the 'Experimental' and 'Beta' channels include a new accessibility feature: 'Open apps maximized.' This setting, accessible via 'Settings > Accessibility > Visual effects,' allows applications to automatically open in a maximized state, which helps maintain operational consistency when using screen readers or tablet modes. This update mainly provides developers and early testers with previews of new features, along with fixing an issue where Feature Flags were displaying blank content in the Experimental channel.",
    tags_en: ["Windows 11", "Insider Preview", "AutoPlay", "WinUI", "Accessibility", "Assistive Features"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/windows-insider/2026/08/21/announcing-new-builds-for-21-august-2026", lang: "EN" }
    ]
  },
  {
    id: "20260821-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安專家呼籲：地方政府應關注基礎資安，而非昂貴工具，以防範資金挪用與資料外洩",
    summary: "本文為資安專家撰寫的觀點文章，指出地方政府機構（如地方住房管理局、縣政府）在資安防護上常面臨預算不足、人力短缺的困境。這些機構雖然持有與聯邦政府類似的敏感資料（如社保號碼、醫療紀錄、刑事司法檔案），但往往缺乏專業的資安專案。專家強調，資安防護不應從昂貴的企業級工具開始，而應從基礎的風險評估和流程改善入手。建議地方政府應先釐清「正在運行的系統」、「所持有的資料」以及「實際的暴露面」，並將資安工作拆解成小塊、可負擔的單元（如MFA部署、事件回應保留），以適應有限的預算。此外，應主動將法規遵循（如HUD規則、CJIS、SOC 2）納入初期討論，並維持長期合作關係，持續進行人員培訓與監控，才能真正建立起穩固的資安防護體系。",
    tags: ["地方政府", "資安風險評估", "預算限制", "MFA", "CJIS", "資安流程"],
    title_en: "Cybersecurity Experts Urge Local Governments to Focus on Foundational Security, Not Expensive Tools, to Prevent Fund Misappropriation and Data Leakage",
    summary_en: "This opinion piece by cybersecurity experts highlights the challenges faced by local government agencies (such as local housing authorities and county governments) regarding cybersecurity protection, often due to budget constraints and staff shortages. Although these agencies hold sensitive data similar to that held by federal governments (such as social security numbers, medical records, and criminal justice files), they often lack professional cybersecurity staff. Experts emphasize that cybersecurity defense should not begin with expensive enterprise-grade tools, but rather with foundational risk assessments and process improvements. It is recommended that local governments first clarify their 'operational systems,' 'held data,' and 'actual exposure surface,' and break down cybersecurity work into small, affordable units (such as MFA deployment or incident response planning) to accommodate limited budgets. Furthermore, they should proactively integrate regulatory compliance (such as HUD rules, CJIS, and SOC 2) into initial discussions and maintain long-term partnerships, continuously conducting personnel training and monitoring, in order to truly establish a robust cybersecurity defense system.",
    tags_en: ["local government", "cybersecurity risk assessment", "budget constraints", "MFA", "CJIS", "cybersecurity process"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/calling-on-cyber-pros-to-help-city-hall", lang: "EN" }
    ]
  },
  {
    id: "20260821-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2026-73570：Zimbra Collaboration Suite OS指令注入漏洞，警告攻擊風險升高",
    summary: "美國網路安全局（CISA）宣布將一個新的已知被利用漏洞（Known Exploited Vulnerabilities, KEV）加入其目錄。本次新增的漏洞為CVE-2026-73570，影響產品為Zimbra Collaboration Suite (ZCS)，屬於作業系統指令注入類型的漏洞。此類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業級系統構成重大風險。\n\nCISA的《強制執行指令》（BOD 26-04）已要求聯邦民事行政部門（FCEB）機構必須根據風險優先修補安全更新。該指令強調了KEV目錄的重要性，並要求聯邦機構必須優先處理那些在公網暴露且被確認可完全控制資產的漏洞。\n\n雖然BOD 26-04僅適用於FCEB機構，但CISA鼓勵所有組織應採納基於風險的漏洞管理方法，將修補KEV目錄中的漏洞列為最高優先級。若組織發現尚未列入KEV目錄但已被利用的漏洞，可透過提交提名表向CISA建議加入。",
    tags: ["CISA", "CVE-2026-73570", "Zimbra Collaboration Suite (ZCS)", "OS Command Injection", "KEV Catalog", "強制執行指令"],
    title_en: "CISA Adds CVE-2026-73570: Zimbra Collaboration Suite OS Command Injection Vulnerability, Warning of Increased Attack Risk",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new Known Exploited Vulnerabilities (KEV) entry to its catalog. The newly added vulnerability is CVE-2026-73570, affecting Zimbra Collaboration Suite (ZCS), which is an operating system command injection type flaw. This class of vulnerability is a common attack vector used by malicious actors and poses a significant risk to federal enterprise systems.\n\nCISA's 'Mandate Directive' (BOD 26-04) requires Federal Civilian Executive Branch (FCEB) agencies to prioritize applying security updates based on risk. The directive emphasizes the importance of the KEV catalog, requiring federal agencies to prioritize vulnerabilities that are publicly exposed and confirmed to allow full control over assets.\n\nAlthough BOD 26-04 only applies to FCEB agencies, CISA encourages all organizations to adopt a risk-based vulnerability management approach, listing patching KEV catalog vulnerabilities as the highest priority. If an organization discovers a vulnerability that has been exploited but is not yet listed in the KEV catalog, it can submit a nomination form to CISA for consideration.",
    tags_en: ["CISA", "CVE-2026-73570", "Zimbra Collaboration Suite (ZCS)", "OS Command Injection", "KEV Catalog", "Mandate Directive"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/08/21/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260821-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 TSN 協議漏洞：攻擊者可透過工業通訊操縱物理流程",
    summary: "資安研究人員指出，新興的 Time-Sensitive Networking (TSN) 等工控網路協定，若缺乏足夠的網路控制措施，其可靠性機制本身可能成為威脅。研究團隊展示了 TSN 協議的弱點，可被濫用來操縱工業系統的物理流程。攻擊情境包括：透過篡改過程變數、啟動或停止機械手臂等關鍵設備；以及注入微小的時鐘漂移（clock drift），從而擾亂工控節點的排程同步性。\n\n研究重點鎖定於 Mitsubishi Electric 的 CC-Link IE TSN 協議，發現其在同步行為上的漏洞。攻擊者可以逆向工程預測有效值，並注入特製訊號到正確的時間槽，使其被誤判為合法通訊。進一步的測試顯示，若能透過遠端管理介面（management interface）進入 TSN 交換器，可將攻擊鏈延伸至工控設備的過程埠（process port）。研究建議應特別關注和加固 TSN 交換器的管理介面安全。",
    tags: ["TSN", "Time-Sensitive Networking", "CC-Link IE TSN", "Mitsubishi Electric", "OT 安全", "工控網路"],
    title_en: "Research Reveals TSN Protocol Vulnerability: Attackers Can Manipulate Physical Processes via Industrial Communications",
    summary_en: "Cybersecurity researchers point out that emerging industrial control network protocols, such as Time-Sensitive Networking (TSN), may pose a threat if they lack sufficient network control measures. A research team demonstrated weaknesses in the TSN protocol that can be exploited to manipulate physical processes within industrial systems. Attack scenarios include: tampering with process variables, initiating or stopping critical equipment like robotic arms; and injecting minute clock drift to disrupt the scheduling synchronization of industrial control nodes.\n\nThe focus of the research was on the CC-Link IE TSN protocol from Mitsubishi Electric, where a vulnerability in its synchronization behavior was found. An attacker can reverse engineer predicted values and inject specialized signals into precise time slots, causing them to be misidentified as legitimate communications. Further testing showed that if an attacker gains access to the management interface of a TSN switch, the attack chain can be extended to the process port of the industrial control equipment. The research recommends paying special attention to and strengthening the security of the TSN switch's management interface.",
    tags_en: ["TSN", "Time-Sensitive Networking", "CC-Link IE TSN", "Mitsubishi Electric", "OT Security", "Industrial Control Network"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/ics-ot-security/how-emerging-industrial-protocol-family-put-ot-at-risk", lang: "EN" }
    ]
  },
  {
    id: "20260821-013",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究揭露：利用內建的 Microsoft Defender 驅動程式 BTR.sys 進行核心層級操作",
    summary: "安全研究公司 Check Point Research 在 Black Hat USA 2026 上發表了報告，指出一個無需利用軟體漏洞、且不引入外部驅動程式即可在 Windows 7 至 Windows 11 25H2 等系統上執行任意核心層級檔案和登錄檔操作的技術。該技術的核心是使用 Microsoft Defender 的合法簽署組件 BTR.sys (Boot Time Removal Tool)。BTR.sys 是 Defender MpEngine.dll 中的必要元件，用於在重啟後移除惡意軟體留下的鎖定檔案或登錄檔。攻擊者可透過 PoC 工具 BTR_CLI，繞過服務控制管理器（Service Control Manager）並偽裝成系統程序 (PID 4) 執行操作。該技術的威脅性極高，甚至能在 Tamper Protection 啟用的 Windows 11 25H2 上刪除整個 Defender 套件。雖然 Check Point Research 表示目前未觀察到真實世界濫用證據，但此方法利用了系統內建的信任邊界，若攻擊者已取得 SeLoadDriverPrivilege 等管理員權限，便可進行惡意操作。",
    tags: ["Microsoft Defender", "BTR.sys", "Windows 11 25H2", "核心層級攻擊", "SeLoadDriverPrivilege", "Check Point Research"],
    title_en: "Research Reveals Technique for Core-Level Operations Using Built-in Microsoft Defender Driver BTR.sys",
    summary_en: "Security research firm Check Point Research presented a report at Black Hat USA 2026, detailing a technique that allows arbitrary core-level file and registry operations on systems ranging from Windows 7 to Windows 11 25H2 without exploiting software vulnerabilities or introducing external drivers. The core of this technique utilizes BTR.sys (Boot Time Removal Tool), a legitimate signed component within Microsoft Defender's MpEngine.dll. BTR.sys is necessary for Defender to remove files or registry entries left by malware after a reboot. Attackers can use the PoC tool BTR_CLI to bypass the Service Control Manager and execute operations disguised as a system process (PID 4). This technique poses an extremely high threat, capable even of deleting the entire Defender suite on Windows 11 25H2 with Tamper Protection enabled. Although Check Point Research stated they have not observed evidence of real-world abuse, this method leverages built-in system trust boundaries. If an attacker has obtained administrative privileges such as SeLoadDriverPrivilege, malicious operations can be performed.",
    tags_en: ["Microsoft Defender", "BTR.sys", "Windows 11 25H2", "Core-Level Attack", "SeLoadDriverPrivilege", "Check Point Research"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/microsoft-defenders-own-driver-can-be.html", lang: "EN" }
    ]
  },
  {
    id: "20260821-014",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "惡意軟體透過 Android 車用頭版單元更新機制傳播，目標為廣告詐騙與建立代理機器人網路",
    summary: "資安研究人員發現一種新型惡意軟體家族，專門設計用於感染基於 Android 系統的車用頭版單元（head unit）韌體。該威脅透過利用車載設備內建的合法軟體更新機制進行傳播，是首次記錄到針對此類設備的特定感染鏈。\n\n根據研究，攻擊者將惡意程式碼植入至名為 TWCore 的系統應用程式中，並利用 MQTT 訊息代理伺服器（hosted on the \"cardoor[.]cn\" subdomain）作為起點。最終的惡意載荷透過一個名為 JarService 的下載器部署，隨後以背景用戶應用程式的形式運行，缺乏使用者介面。\n\n此惡意軟體會定期向 C2 指令與控制端點發送設備資訊和配置版本。它支援多達九個命令（如 `http`、`loadlib2`），允許攻擊者執行廣告詐騙、下載額外惡意模組，甚至竊取顯示解析度、MAC 位址等敏感裝置資料。研究指出，此類威脅的活動與 MoYu Group 相關聯，該團體此前已被指控參與 BADBOX 機器人網路和廣告詐欺。\n\n專家警告，車用頭版單元因具備 SIM 卡插槽而成為新的攻擊目標。建議汽車製造商及設備使用者應高度警惕利用合法更新通道進行的惡意軟體植入，並加強韌體安全驗證機制。",
    tags: ["Android 車用頭版單元", "車載系統", "惡意軟體", "BADBOX", "C2 指令與控制", "韌體漏洞"],
    title_en: "Malware Spreads via Android Head Unit Update Mechanism, Targeting Ad Fraud and Botnet Establishment",
    summary_en: "Cybersecurity researchers have discovered a novel malware family specifically designed to infect firmware on Android-based vehicle head units. This threat propagates by exploiting the legitimate software update mechanisms built into in-vehicle devices, marking the first recorded infection chain targeting this class of equipment.\n\nAccording to the research, attackers implant malicious code within a system application named TWCore and utilize an MQTT message broker (hosted on the \"cardoor[.]cn\" subdomain) as the initial point. The final malicious payload is deployed through a downloader called JarService, which subsequently runs as a background user application without a user interface.\n\nThis malware periodically sends device information and configuration versions to C2 command and control endpoints. It supports up to nine commands (such as `http` and `loadlib2`), allowing attackers to execute ad fraud, download additional malicious modules, or even steal sensitive device data like display resolution and MAC addresses. The research indicates that this type of threat activity is associated with MoYu Group, a group previously accused of participating in the BADBOX botnet and ad fraud.\n\nExperts warn that vehicle head units are becoming new attack targets due to their SIM card slots. They recommend that automotive manufacturers and device users maintain high vigilance against malicious software implanted via legitimate update channels, and strengthen firmware security verification mechanisms.",
    tags_en: ["Android Head Unit", "In-Vehicle Systems", "Malware", "BADBOX", "C2 Command and Control", "Firmware Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/android-car-malware-spreads-through.html", lang: "EN" }
    ]
  },
  {
    id: "20260821-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "思科（Cisco）發布安全更新：修補 Crosswork 與 Secure Workload 多項高風險漏洞",
    summary: "思科公司（Cisco）針對其 Crosswork 平台和 Secure Workload 軟體，因內部全面性安全審查，發布了新一輪的安全修補程式。本次修補涵蓋多個嚴重等級的漏洞，包括影響 Crosswork Data Gateway、Crosswork Network Controller 和 Crosswork Planning 的四個高風險漏洞。\n\n其中包含 CVSS 分數為 10.0 的 SQL injection (CVE-2026-20030)、缺乏關鍵功能驗證 (CVE-2026-20357) 以及外部控制檔案系統的漏洞 (CVE-2026-20358)，以及 CVSS 分數為 9.9 的不充分保護憑證漏洞 (CVE-2026-20359)。這些問題影響 Crosswork 版本 7.2.1 及更早版本，已在 7.2.1-SP 版本中修復。\n\n此外，思科還為 Secure Workload 修補了五個漏洞，涵蓋命令、作業系統和參數注入等不當處理特殊元素的問題 (CVE-2026-20231)，以及多項高風險的存取控制與驗證缺陷（如 CVE-2026-20315, CVSS 10.0）。這些漏洞分別影響 Secure Workload 版本 3.10 及更早版本，已修補至 3.10.9.1；以及版本 4.0 及更早版本，已修補至 4.0.4.16。\n\n思科指出，這些漏洞是在內部測試中發現的，目前未知的積極利用證據。然而，鑑於其設備在企業網路中的普及性，建議客戶應立即應用必要的更新，以避免潛在的安全風險。",
    tags: ["Cisco", "Crosswork", "Secure Workload", "CVE-2026-20030", "SQL injection", "資安修補程式"],
    title_en: "Cisco Releases Security Update: Patching Multiple High-Risk Vulnerabilities in Crosswork and Secure Workload",
    summary_en: "Cisco has released a new round of security patches for its Crosswork platform and Secure Workload software, following an internal comprehensive security review. These patches address multiple vulnerabilities of severe severity, including four high-risk flaws affecting Crosswork Data Gateway, Crosswork Network Controller, and Crosswork Planning. \n\nAmong these are an SQL injection vulnerability (CVE-2026-20030) with a CVSS score of 10.0, a lack of critical function validation flaw (CVE-2026-20357), an external control file system vulnerability (CVE-2026-20358), and an insufficient protection credential vulnerability (CVE-2026-20359) with a CVSS score of 9.9. These issues affect Crosswork versions 7.2.1 and earlier, and have been patched in the 7.2.1-SP release.\n\nAdditionally, Cisco has patched five vulnerabilities for Secure Workload, including improper handling of special elements such as command, operating system, and parameter injection (CVE-2026-20231), and multiple high-risk access control and validation defects (such as CVE-2026-20315, CVSS 10.0). These vulnerabilities affect Secure Workload versions 3.10 and earlier, patched to 3.10.9.1; and versions 4.0 and earlier, patched to 4.0.4.16.\n\nCisco notes that these vulnerabilities were discovered during internal testing and there is no known evidence of active exploitation. However, given the prevalence of its equipment in enterprise networks, customers are advised to apply the necessary updates immediately to mitigate potential security risks.",
    tags_en: ["Cisco", "Crosswork", "Secure Workload", "CVE-2026-20030", "SQL injection", "Security Patch"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/cisco-patches-nine-crosswork-and-secure.html", lang: "EN" }
    ]
  },
  {
    id: "20260821-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GitLab 曝出 CVE-2026-19478：未經身份驗證即可修改或刪除公開專案，攻擊已在野外偵測到利用",
    summary: "資安公司 watchTowr 報告指出，GitLab 的一個新發現漏洞 CVE-2026-19478 已在公佈數日後即遭到積極利用。此漏洞屬於代碼注入（code injection）類型，CVSS 分數為 9.4。攻擊者無需任何憑證、使用者互動或特定配置，即可修改或刪除公開可存取的 GitLab 專案資料。\n受影響版本包括但不限於：GitLab CE 的 18.2 (低於 18.11.11)、19.0 (低於 19.0.8)、19.1 (低於 19.1.6) 和 19.2 (低於 19.2.4)。GitLab 已發布修補程式，建議升級至對應的最新版本。\nwatchTowr 表示，他們在漏洞公佈後數分鐘內便能重現此漏洞，並觀察到其在蜜罐網路中遭到野外利用。專家警告，AI 賦能的攻擊者極大地縮短了從漏洞揭露到實際利用的時間窗口，強調及時修補的重要性。\n建議運行對外開放自架 GitLab 實例的組織應優先升級至已修補版本；若無法立即修補，可考慮限制未經身份驗證對 `/api/graphql` 的存取權限，或完全移除公開儲存庫的存取。",
    tags: ["GitLab", "CVE-2026-19478", "代碼注入", "GraphQL", "自架服務", "資安修補"],
    title_en: "GitLab Exposed to CVE-2026-19478: Unauthenticated Modification or Deletion of Public Projects Exploited in the Wild",
    summary_en: "Security firm watchTowr reported that a newly discovered vulnerability in GitLab, CVE-2026-19478, has been actively exploited shortly after its public disclosure. This flaw is classified as code injection, with a CVSS score of 9.4. Attackers can modify or delete publicly accessible GitLab project data without requiring any credentials, user interaction, or specific configuration.\nAffected versions include but are not limited to: GitLab CE versions prior to 18.2 (below 18.11.11), 19.0 (below 19.0.8), 19.1 (below 19.1.6), and 19.2 (below 19.2.4). GitLab has released patches, recommending an upgrade to the corresponding latest version.\nwatchTowr stated that they were able to reproduce the vulnerability within minutes of its disclosure and observed it being exploited in their honeypot network. Experts warn that AI-enabled attackers have drastically shortened the window between vulnerability disclosure and actual exploitation, emphasizing the critical importance of timely patching.\nOrganizations running publicly exposed self-hosted GitLab instances are advised to prioritize upgrading to patched versions; if immediate patching is not possible, they should consider restricting unauthenticated access to `/api/graphql`, or completely removing public repository access.",
    tags_en: ["GitLab", "CVE-2026-19478", "Code Injection", "GraphQL", "Self-hosted Service", "Security Patch"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/gitlab-cve-2026-19478-comes-under.html", lang: "EN" }
    ]
  },
  {
    id: "20260821-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟警告 Entra ID 存在極高風險 RCE 漏洞 CVE-2026-69836，但後續澄清未遭野外利用",
    summary: "微軟曾發出警報，指出其雲端身份與存取管理服務 Microsoft Entra ID（原名 Azure Active Directory）存在一項極高嚴重性漏洞 CVE-2026-69836。此漏洞屬於遠端程式碼執行（RCE）類型，CVSS 分數為 10.0，允許未經授權的攻擊者透過網路將不可信任資料進行反序列化（Deserialization of untrusted data），從而執行惡意代碼。\n\n然而，微軟隨後已更正此漏洞狀態，並澄清該漏洞「尚未在野外被利用」，且已透過修補程式完全緩解。公司指出，用戶無需採取任何額外行動。此外，文章也提及了微軟近期修復的另一高嚴重性權限提升漏洞 CVE-2026-68820（CVSS 分數：7.0），該漏洞曾被與北韓相關的 Lazarus Group 組織利用。\n\n總體而言，雖然存在極端嚴重的理論風險，但微軟已確認修復並發布了補丁，且目前未發現實際攻擊證據。",
    tags: ["Microsoft Entra ID", "CVE-2026-69836", "RCE", "遠端程式碼執行", "雲端安全", "CVSS 10.0"],
    title_en: "Microsoft Warns of Critical RCE Vulnerability in Entra ID (CVE-2026-69836), But Later Clarifies No Wild Exploitation Observed",
    summary_en: "Microsoft previously issued an alert regarding a critical vulnerability, CVE-2026-69836, found in its cloud identity and access management service, Microsoft Entra ID (formerly Azure Active Directory). This flaw is classified as Remote Code Execution (RCE), with a CVSS score of 10.0. It allows unauthorized attackers to execute malicious code by deserializing untrusted data over the network.\n\nHowever, Microsoft subsequently corrected the vulnerability status and clarified that the flaw has \"not been exploited in the wild\" and has been fully mitigated through a patch. The company stated that users do not need to take any additional action. Furthermore, the article also mentioned another high-severity privilege escalation vulnerability recently patched by Microsoft, CVE-2026-68820 (CVSS score: 7.0), which had reportedly been exploited by the North Korea-linked Lazarus Group.\n\nOverall, while an extremely severe theoretical risk existed, Microsoft has confirmed the fix and released a patch, and no evidence of actual attacks has been found.",
    tags_en: ["Microsoft Entra ID", "CVE-2026-69836", "RCE", "Remote Code Execution", "Cloud Security", "CVSS 10.0"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/microsoft-entra-id-flaw-cvss-100.html", lang: "EN" }
    ]
  },
  {
    id: "20260821-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GNU Emacs 發現 TRAMP 命令注入漏洞：可透過本地路徑執行任意 Shell 指令",
    summary: "GitHub Security Lab 的 Bas Alberts 在 GNU Emacs 30.2 版本及可能更早版本中，發現了一個嚴重的本地命令執行（LCE）漏洞。該漏洞存在於處理 TRAMP (Transparent Remote Access, 通透明式遠端存取) 功能的 `tramp-sh.el` 模組。\n\n攻擊向量主要有兩點：第一，TRAMP 在構建登入指令時，會將使用者提供的參數（如檔案路徑）進行未引號的字串連接，並將其傳送給本地 Shell。若輸入的路徑包含特殊字符如 `$(...)` 或 `$IFS`，攻擊者可以在遠端連線建立前執行任意命令。\n\n第二，TRAMP 的檔案名稱解析正規表達式缺乏足夠的錨定（anchored），使得任何僅包含換行符和特定模式路徑的文件名都會被誤判為 TRAMP 處理目標。這允許攻擊者透過符號連結 (symlink) 或特殊命名目錄來觸發漏洞。\n\n此漏洞的實務影響極高，可導致在建立 SSH 連線前就執行惡意指令。開發者已提供修補程式，建議使用者立即升級 Emacs 至安全版本。",
    tags: ["GNU Emacs", "TRAMP", "本地命令執行", "LCE", "Shell Injection", "CVE"],
    title_en: "GNU Emacs Discovers TRAMP Command Injection Vulnerability: Arbitrary Shell Execution Possible via Local Path",
    summary_en: "Bas Alberts of GitHub Security Lab discovered a critical local command execution (LCE) vulnerability in GNU Emacs version 30.2 and potentially earlier versions. The flaw resides within the `tramp-sh.el` module, which handles TRAMP (Transparent Remote Access) functionality.\n\nThe attack vector has two main points: First, when constructing login commands, TRAMP concatenates user-provided parameters (such as file paths) without proper quoting and passes them to the local Shell. If the input path contains special characters like `$(...)` or `$IFS`, an attacker can execute arbitrary commands before establishing a remote connection.\n\nSecond, TRAMP's file name parsing regular expression lacks sufficient anchoring, allowing any filename containing only newline characters and a specific pattern path to be incorrectly identified as a TRAMP target. This permits attackers to trigger the vulnerability using symbolic links (symlinks) or specially named directories.\n\nThe practical impact of this vulnerability is extremely high, potentially leading to malicious commands being executed even before an SSH connection is established. Developers have provided a patch and recommend that users immediately upgrade Emacs to a secure version.",
    tags_en: ["GNU Emacs", "TRAMP", "Local Command Execution", "LCE", "Shell Injection", "CVE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/21/1", lang: "EN" }
    ]
  },
  {
    id: "20260821-019",
    trackers: ["os"],
    category: "Apple",
    title: "ChatGPT for iOS 新增手勢功能，更快速地將最近照片附加至對話",
    summary: "本篇報導介紹了 OpenAI 的 ChatGPT 應用程式在 iOS 上新增了一項便利的手勢操作。過去用戶若要使用 ChatGPT 進行視覺搜尋或分析圖片，需點擊「+」按鈕、選擇「Photos」，再從相簿中挑選照片。現在，用戶只需對提示框左側的「+」按鈕長按，即可快速調出最近拍攝的四張照片。這大幅簡化了附加圖片的流程，提升了視覺搜尋和互動效率。\n除了此功能外，ChatGPT 本週也進行了其他優化，包括增強對當前時間的感知、改善網頁版長時間對話的加載速度與效能，以及在等待網路連線時提供更清晰的使用者介面（UI）更新。這項改進旨在提升整體用戶體驗和使用便利性。",
    tags: ["ChatGPT", "iOS", "OpenAI", "視覺搜尋", "手勢操作"],
    title_en: "ChatGPT for iOS Adds Gesture Feature for Faster Attachment of Recent Photos",
    summary_en: "This report introduces a convenient gesture feature added to OpenAI's ChatGPT application on iOS. Previously, if users wanted to use ChatGPT for visual search or image analysis, they had to click the '+' button, select 'Photos,' and then choose an image from their album. Now, users simply need to long-press the '+' button on the left side of the prompt box to quickly access the four most recently taken photos. This significantly simplifies the process of attaching images, improving the efficiency of visual search and interaction.\n\nIn addition to this feature, ChatGPT also underwent other optimizations this week, including enhanced awareness of the current time, improved loading speed and performance for long-duration web version conversations, and providing a clearer user interface (UI) update while waiting for network connectivity. These improvements aim to enhance overall user experience and ease of use.",
    tags_en: ["ChatGPT", "iOS", "OpenAI", "Visual Search", "Gesture Control"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/chatgpts-iphone-app-gets-a-handy-shortcut-to-attach-recent-photos-more-quickly", lang: "EN" }
    ]
  },
  {
    id: "20260821-020",
    trackers: ["os"],
    category: "Apple",
    title: "Epic Games指控Apple在巴西違反反壟斷協議，稱其設立技術與結構障礙限制App Store外分發",
    summary: "遊戲開發商Epic Games向巴西反壟斷監管機構CADE提出申訴，指控Apple在執行先前達成的App Store反壟斷和解協議時，採取了具有「結構性、技術性和存取壁壘」的限制措施。該協議允許開發者在巴西透過替代應用程式市集分發iOS App，並提供繞過Apple IAP系統的支付方式。然而，Epic指控Apple不僅將新的規定範圍擴大至iPadOS，且其目前的安裝流程步驟（九步）比歐洲現行標準更複雜。此外，Epic還批評Apple過度的報告要求，認為這超出計算費用所需，實質上用於監控競爭對手的商業模式。CADE已要求Apple在指定日期前提交回應，但Apple尚未公開評論此事。",
    tags: ["Epic Games", "Apple", "App Store", "巴西", "反壟斷", "iPadOS"],
    title_en: "Epic Games accuses Apple of violating anti-monopoly agreements in Brazil by establishing technical and structural barriers to App Store external distribution",
    summary_en: "Game developer Epic Games filed a complaint with the Brazilian antitrust regulator CADE, accusing Apple of implementing restrictive measures that create \"structural, technical, and access barriers\" while executing a previously agreed-upon App Store anti-monopoly settlement. The agreement allows developers to distribute iOS apps through alternative app marketplaces in Brazil and offers payment methods that bypass the Apple IAP system. However, Epic alleges that Apple has not only expanded the scope of new regulations to iPadOS but also that its current installation process (nine steps) is more complex than existing European standards. Furthermore, Epic criticized Apple's excessive reporting requirements, arguing they exceed necessary computational costs and are effectively used to monitor competitors' business models. CADE has requested a response from Apple by a specified date, but Apple has not yet publicly commented on the matter.",
    tags_en: ["Epic Games", "Apple", "App Store", "Brazil", "Antitrust", "iPadOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/epic-accuses-apple-of-sidestepping-app-store-antitrust-deal-in-brazil", lang: "EN" }
    ]
  },
  {
    id: "20260821-021",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Series 12 與 Ultra 4 預計搭載全新 S 系列晶片，應對 Siri AI 時代需求",
    summary: "根據市場傳聞，即將推出的 Apple Watch Series 12 和 Ultra 4 型號，預計將配備全新的、性能更強大的 S 系列晶片（可能命名為 S11 或 S12）。目前觀察到，Apple Watch 的晶片升級通常不會帶來顯著的 CPU 效能提升。然而，隨著 watchOS 27 即將推出，其核心功能「Siri AI」的加入，對硬體運算能力提出了更高的要求。傳聞指出，新晶片的設計目標是為 AI 時代打造，能夠提供更強大的處理能力和更高的能源效率，預計能延長電池續航時間。這項升級被認為對於提升 Siri 在手錶上的響應速度至關重要，確保用戶體驗與 iPhone、iPad 等其他 Apple 生態系統的最新 Siri 功能保持一致性。",
    tags: ["Apple Watch", "Series 12", "Ultra 4", "watchOS 27", "Siri AI", "晶片升級"],
    title_en: "Apple Watch Series 12 and Ultra 4 Expected to Feature New S-Series Chip to Meet Siri AI Era Demands",
    summary_en: "According to market rumors, the upcoming Apple Watch Series 12 and Ultra 4 models are expected to be equipped with a brand new, more powerful S-series chip (potentially named S11 or S12). Historically, Apple Watch chip upgrades have not resulted in significant CPU performance gains. However, with watchOS 27 approaching, the integration of core functionality 'Siri AI' places higher demands on hardware computing power. Rumors suggest that the new chip is designed specifically for the AI era, aiming to provide enhanced processing capability and greater energy efficiency, which should extend battery life. This upgrade is considered crucial for improving Siri's responsiveness on the watch, ensuring consistency with the latest Siri features across other Apple ecosystem devices like the iPhone and iPad.",
    tags_en: ["Apple Watch", "Series 12", "Ultra 4", "watchOS 27", "Siri AI", "Chip Upgrade"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/apple-watch-series-12-and-ultra-4-to-get-one-big-upgrade-at-perfect-time", lang: "EN" }
    ]
  },
  {
    id: "20260821-022",
    trackers: ["os"],
    category: "Apple",
    title: "Apple翻新商店更新：提供MacBook Neo、M5 MacBook Air及Apple Watch Ultra 3等產品優惠",
    summary: "本文介紹了Apple官方認證翻新商店（Certified Refurbished Store）的最新商品資訊，為消費者提供了以折扣價購買蘋果設備的管道。本次重點推薦的產品包括MacBook Neo和MacBook Air系列，提供從13吋到15吋等多樣配置；iMac也提供M4晶片版本；此外，高需求的Apple TV 4K（第三代）以及Apple Watch Ultra 3等熱門產品也重新上架。翻新商品具備嚴格的檢修流程，並享有一年有限保固和14天退貨政策，但無法進行雕刻或禮品包裝。購買者應注意庫存變化迅速，建議儘早搶購。",
    tags: ["Apple Certified Refurbished Store", "MacBook Neo", "M5 MacBook Air", "iMac", "Apple Watch Ultra 3", "Apple TV 4K"],
    title_en: "Apple Refurbished Store Update: Featuring Deals on Products like MacBook Neo, M5 MacBook Air, and Apple Watch Ultra 3",
    summary_en: "This article introduces the latest product information from Apple's official Certified Refurbished Store, offering consumers a channel to purchase Apple devices at discounted prices. Key products highlighted this time include the MacBook Neo and MacBook Air series, available in various configurations from 13-inch to 15-inch; the iMac is also offered with M4 chips. Additionally, popular items such as the Apple TV 4K (3rd generation) and Apple Watch Ultra 3 have been restocked. Refurbished products undergo a strict inspection process and come with a one-year limited warranty and a 14-day return policy, but cannot be engraved or gift-wrapped. Buyers should note that inventory changes rapidly and are advised to purchase early.",
    tags_en: ["Apple Certified Refurbished Store", "MacBook Neo", "M5 MacBook Air", "iMac", "Apple Watch Ultra 3", "Apple TV 4K"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/apple-refurb-store-apple-tv-4k-ultra", lang: "EN" }
    ]
  },
  {
    id: "20260821-023",
    trackers: ["os"],
    category: "Apple",
    title: "iPadOS 27 重磅升級：新增三項 Mac 風格功能，提升平板電腦使用體驗",
    summary: "本文介紹 iPadOS 27 版本相較於前代版本和 macOS 的系統整合進展。主要更新包括三個讓 iPad 更具「Mac 風格」的功能。\n首先是狀態列（status bar）顯示活躍應用程式名稱，解決了多應用程式並開機鍵盤時難以判斷目前操作的困擾。\n其次是新增可選的「常駐式選單列」（Always-on menu bar）。使用者可以在設定中選擇讓選單列持續顯示，提升資訊的可見性。\n此外，iPadOS 27 也針對日常任務的流暢度進行了大幅優化。Apple 表示，使用游標操作時的上下文選單（context menus）開啟速度更快；檔案瀏覽和傳輸到外部硬碟的速度提高了高達五倍，使其接近 Mac 的 Finder 體驗；應用程式啟動、切換或拖曳視窗的管理效率也顯著提升。\n這些更新整體讓 iPadOS 27 在效能與操作邏輯上更貼近 macOS，大幅改善了使用者的日常使用感受。",
    tags: ["iPadOS 27", "macOS", "蘋果", "作業系統升級", "使用者介面", "性能優化"],
    title_en: "iPadOS 27 Major Upgrade: Three New Mac-Like Features Enhance Tablet Experience",
    summary_en: "This article introduces the system integration advancements in iPadOS 27 compared to previous versions and macOS. The main updates include three features that give the iPad a more 'Mac-like' feel. First, the status bar now displays the active application name, solving the difficulty of determining the current operation when using multiple apps with an attached keyboard. Second, there is a newly optional 'Always-on menu bar.' Users can select in settings to keep the menu bar continuously visible, improving information visibility. Furthermore, iPadOS 27 has significantly optimized the fluidity for daily tasks. Apple stated that context menus opened during cursor operations are faster; file browsing and transfer speeds to external hard drives have increased by up to five times, bringing it closer to the Mac's Finder experience; and the efficiency of managing application launch, switching, or window dragging has also been notably improved. Overall, these updates make iPadOS 27 feel closer to macOS in terms of performance and operational logic, greatly improving the user's daily usage experience.",
    tags_en: ["iPadOS 27", "macOS", "Apple", "Operating System Upgrade", "User Interface", "Performance Optimization"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/ipados-27-adds-three-features-to-make-ipad-more-like-the-mac", lang: "EN" }
    ]
  },
  {
    id: "20260821-024",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果 iPhone 18 Pro 系列預計於九月發表，發布日期與上市時間點分析",
    summary: "本文根據蘋果公司過去多年的產品發表模式，推測了下一代旗艦手機 iPhone 18 Pro 的發表和上市時程。文章指出，由於歷史慣例及美國勞動節（Labor Day）的影響，預計 iPhone 18 系列將在九月上旬至中旬舉行發布會。\n\n根據過去三年的數據分析，蘋果傾向於在事件後的兩週左右進行預購和正式上市。若假設 iPhone 18 Pro 在九月九日（星期三）發表，則可預期預購時間為九月十一日或十二日，最終發售日期則可能落在九月十八日。\n\n此外，文章也提到一個關鍵變動：基礎款的 iPhone 18 型號預計不會直到二零二七年初才會正式上市。這暗示了蘋果今年的旗艦產品線可能會僅包含三種型號（iPhone 18 Pro、iPhone 18 Pro Max 和 iPhone Ultra）。\n\n本內容為市場分析與趨勢預測，未提供任何官方的技術細節或修補建議。",
    tags: ["Apple", "iPhone 18 Pro", "旗艦手機", "產品發表", "九月"],
    title_en: "Apple iPhone 18 Pro Series Expected to Launch in September; Analysis of Release and Market Availability Dates",
    summary_en: "Based on Apple's historical product launch patterns over the years, this article predicts the release and market availability timeline for the next-generation flagship phone, the iPhone 18 Pro. The analysis suggests that due to historical conventions and the influence of US Labor Day, the iPhone 18 series is expected to hold its launch event in early to mid-September.\n\nAnalyzing data from the past three years, Apple tends to conduct pre-orders and official launches approximately two weeks after the announcement. If we assume the iPhone 18 Pro is announced on Wednesday, September 9th, then pre-order dates could be around September 11th or 12th, with the final retail release potentially falling on September 18th.\n\nFurthermore, the article notes a key change: the base model iPhone 18 is not expected to launch until early 2027. This suggests that Apple's flagship product line this year might only consist of three models (iPhone 18 Pro, iPhone 18 Pro Max, and iPhone Ultra).\n\nThis content represents market analysis and trend forecasting and does not provide any official technical details or patch recommendations.",
    tags_en: ["Apple", "iPhone 18 Pro", "Flagship Phone", "Product Launch", "September"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/iphone-18-release-date-when-apples-new-model-is-coming", lang: "EN" }
    ]
  },
  {
    id: "20260821-025",
    trackers: ["os", "security"],
    category: "Apple",
    title: "俄羅斯銀行應用程式再次登上 App Store：資安警示其偽裝與審核漏洞",
    summary: "本篇文章指出，有規律的行為是某些受美國制裁的俄羅斯銀行，會將客戶專用應用程式（client apps）偽裝成普通生活類App，並上架至 Apple App Store。最新案例為名為 K8CHEN PRO 的應用程式，它在 App Store 上以「AR 廚房建模」等外觀進行偽裝。然而，該應用程式的隱私權政策來源自「Free Privacy Policy Generator」，本身也構成可疑信號。作者觀察到這些銀行App能夠持續通過 App Store 的審核機制，並登上排行榜，顯示出系統性的漏洞或監管盲點。雖然文章提到此特定應用已從 App Store 移除，但其事件凸顯了大型平台在內容審核和資安防護上的潛在風險，提醒用戶對來源不明的金融類App保持高度警惕。",
    tags: ["Apple App Store", "俄羅斯銀行", "K8CHEN PRO", "應用程式偽裝", "資安審核"],
    title_en: "Russian Bank Apps Reappear on App Store: Cybersecurity Warns of Disguise and Review Loopholes",
    summary_en: "This article points out a pattern where certain Russian banks, subject to US sanctions, disguise their client-specific applications as ordinary lifestyle apps and upload them to the Apple App Store. The latest case involves an application named K8CHEN PRO, which disguised itself on the App Store with features like 'AR Kitchen Modeling.' However, the app's privacy policy originated from a 'Free Privacy Policy Generator,' which itself constitutes a suspicious signal. The author observes that these bank apps are able to continuously pass the App Store's review mechanism and appear in rankings, indicating systemic loopholes or regulatory blind spots. Although the article mentions that this specific application has been removed from the App Store, the incident highlights potential risks for major platforms regarding content moderation and cybersecurity protection, reminding users to remain highly vigilant about unknown financial apps.",
    tags_en: ["Apple App Store", "Russian Bank", "K8CHEN PRO", "App Disguise", "Cybersecurity Review"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/another-russian-banking-app-in-disguise-has-topped-the-us-app-store", lang: "EN" }
    ]
  },
  {
    id: "20260821-026",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果AirPods Pro搭載相機功能深入解析：支援多種拍攝模式與環境掃描能力",
    summary: "根據對macOS 26.7 Beta版本的程式碼分析，Apple正在為未來搭載相機的AirPods Pro開發新框架。該系統將使用新的AccessorySensorMgrd框架來控制影像擷取等功能，並將其命名為「Kino Sensor」。這款設備預計每隻耳機都配備獨立相機，能協同拍攝照片，若單邊捕捉則會生成空對應物。\n\nmacOS 26.7參考了兩種捕獲模式：主動（active）和被動（passive）。主動模式的擷取尺寸為 640×640，輸出後處理圖像可達 1024×1024；而被動模式則支援低解析度的環境感知。此外，該框架還監控了影像寬高、像素分組等技術細節，並預計會加入隱私指示燈。\n\n儘管有洩漏指出產品可能即將發布，但彭博社報導顯示，搭載相機的AirPods Pro仍計畫於 2027 年推出。這些相機的主要功能不是拍照錄影，而是用於「掃描周圍環境並為Siri數位助理及其他AI工具提供情境資訊」。",
    tags: ["AirPods Pro", "macOS 26.7", "AccessorySensorMgrd", "Kino Sensor", "蘋果生態系", "AI輔助"],
    title_en: "In-Depth Analysis of AirPods Pro Camera Functionality: Support for Multiple Shooting Modes and Environmental Scanning Capabilities",
    summary_en: "Code analysis of the macOS 26.7 Beta version indicates that Apple is developing a new framework for future AirPods Pro models equipped with cameras. This system will utilize a new AccessorySensorMgrd framework to control functions such as image capture, which has been named “Kino Sensor.” These devices are expected to feature an independent camera in each earbud, enabling collaborative photo capture; if only one side captures, it will generate a corresponding empty object.\n\nmacOS 26.7 references two capture modes: active and passive. The active mode capture size is 640×640, with post-processed image output reaching 1024×1024; the passive mode supports low-resolution environmental sensing. Furthermore, the framework monitors technical details such as image aspect ratio, height/width, and pixel grouping, and is expected to include a privacy indicator light.\n\nAlthough leaks suggest an imminent product release, Bloomberg reports that the camera-equipped AirPods Pro are still planned for launch in 2027. The primary function of these cameras is not photography or videography, but rather to “scan the surrounding environment and provide contextual information for Siri digital assistant and other AI tools.”",
    tags_en: ["AirPods Pro", "macOS 26.7", "AccessorySensorMgrd", "Kino Sensor", "Apple Ecosystem", "AI Assistance"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/airpods-pro-with-cameras-biggest-leak-yet-features", lang: "EN" }
    ]
  },
  {
    id: "20260821-027",
    trackers: ["os", "security"],
    category: "Apple",
    title: "傳聞預測 iPhone 18 Pro 將升級 C2 Modem、主鏡頭模組與電池容量",
    summary: "根據最新傳言，Apple 即將推出的 iPhone 18 Pro 在多個硬體方面預計會有重大革新。首先，在相機系統上，據稱其主鏡頭模組將增大，導致「鋁合金背板」增加超過 2mm 的厚度，這可能歸因於更大型的主鏡頭模組。\n其次，iPhone 18 Pro 有望從使用高通（Qualcomm）的晶片過渡到 Apple 自研的 C2 Modem。此升級預計能帶來改善電池效率、新增「限制精確定位」等隱私功能，並提升在訊號不佳地區的可靠性。\n此外，iPhone 18 Pro Max 預計將搭載更大約 10% 的實體電池，配合 A20 Pro 晶片，有望提供史上最佳的續航力。設計方面，新機型將首次採用「深櫻桃色」（Dark Cherry/Burgundy）作為旗艦配色，並引入一個比現有 Dynamic Island 小 35% 的全新 Dynamic Island 設計。",
    tags: ["iPhone 18 Pro", "C2 Modem", "主鏡頭模組", "A20 Pro", "Dynamic Island"],
    title_en: "Rumors Predict iPhone 18 Pro Upgrade with C2 Modem, Main Camera Module, and Battery Capacity",
    summary_en: "According to the latest rumors, the upcoming iPhone 18 Pro is expected to feature major hardware innovations across several components. First, regarding the camera system, it is reported that the main camera module will be enlarged, resulting in an increase of over 2mm in the thickness of the 'aluminum backplate,' potentially due to the larger primary lens assembly.\nSecondly, the iPhone 18 Pro is rumored to transition from using Qualcomm chips to Apple's self-developed C2 Modem. This upgrade is expected to improve battery efficiency, introduce new privacy features such as 'limited precise location tracking,' and enhance reliability in areas with poor signal coverage.\nFurthermore, the iPhone 18 Pro Max is anticipated to feature a physically larger battery, increasing by approximately 10%, paired with the A20 Pro chip. This combination is expected to deliver best-in-class battery life ever. In terms of design, the new model will debut 'Dark Cherry/Burgundy' as its flagship color and introduce an entirely new Dynamic Island design that is 35% smaller than the current one.",
    tags_en: ["iPhone 18 Pro", "C2 Modem", "Main Camera Module", "A20 Pro", "Dynamic Island"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/heres-how-iphone-18-pro-will-differentiate-itself-from-prior-models", lang: "EN" }
    ]
  },
  {
    id: "20260821-028",
    trackers: ["os"],
    category: "Apple",
    title: "Apple CEO 即將交接：分析師預測 John Ternus 上任後可能推動更大膽的產品線與收購案",
    summary: "蘋果公司（Apple）即將完成 CEO 交接，John Ternus 將於 9 月 1 日接任。根據 Bank of America 的分析師 Wamsi Mohan 指出，市場預期 Ternus 在維持 Cook 時代成就的基礎上，可能會展現更積極、風險更高的經營風格。該銀行指出，蘋果放棄了「淨現金中性」目標，這可能代表管理層願意投入更多資本支出（CapEx）和研發費用（R&D）。分析師預測，在 Ternus 的領導下，Apple 可能會加速進入 AI 眼鏡、帶攝影機的 AirPods、智慧戒指、居家自動化、個人助理及機器人等新領域。這顯示 Apple 未來可能將利用其市場優勢，進行更多高風險但潛力更大的佈局。",
    tags: ["Apple", "John Ternus", "CEO 交接", "Bank of America", "AI 眼鏡", "產品線擴張"],
    title_en: "Apple's Upcoming CEO Transition: Analysts Predict John Ternus May Drive More Ambitious Product Lines and Acquisitions",
    summary_en: "As Apple approaches a CEO transition, John Ternus is set to take over on September 1st. According to Bank of America analyst Wamsi Mohan, the market anticipates that while maintaining the foundation of Cook's achievements, Ternus may adopt a more aggressive and risk-tolerant operational style. The bank noted that Apple has abandoned its 'net cash neutral' goal, which could signal management's willingness to commit greater capital expenditure (CapEx) and R&D spending. Analysts predict that under Ternus's leadership, Apple might accelerate its entry into new areas such as AI smart glasses, AirPods with cameras, smart rings, home automation, personal assistants, and robotics. This suggests that Apple may leverage its market advantage for more high-risk but potentially higher-reward ventures in the future.",
    tags_en: ["Apple", "John Ternus", "CEO Transition", "Bank of America", "AI Smart Glasses", "Product Line Expansion"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/john-ternus-as-ceo-could-bring-bigger-acquisitions-new-product-categories-analyst", lang: "EN" }
    ]
  },
  {
    id: "20260821-029",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "OWASP發布AI技能風險清單：警告惡意技能與供應鏈攻擊的潛在威脅",
    summary: "Open Worldwide Application Security Project (OWASP) 發布了其最新的《Top 10 AI Skills Risk List》，旨在應對代理式AI（Agentic AI）日益增長的應用能力帶來的安全挑戰。隨著「Skills」（技能）成為驅動AI Agent核心功能的關鍵組件，但同時也為未經信任的輸入和惡意程式碼開闢了重大攻擊向量。\n\nOWASP指出，目前最主要的風險是「Malicious Skills」（惡意技能），其次是「Supply Chain Compromise」（供應鏈組件被攻陷）。這類技能若來自GitHub等外部儲存庫，可能透過釣魚式依賴或不安全的外部指令（如AST05 - Untrusted External Instructions）引入惡意功能。\n\n為了解決缺乏標準化和安全驗證的問題，OWASP同時推出了《Universal Agentic Skill Format v1.0》，這是一個YAML格式的模板。該格式要求包含來源證明（provenance）、權限、依賴項、簽名和雜湊值等資訊，目的是讓自動化工具能更有效地判斷技能的合法性。\n\n專家建議，企業應在「安全預設」（secure-by-default）的環境下使用這些AI Skills，並特別關注外部資源引用的安全性，以避免被惡意指令或資料污染。",
    tags: ["OWASP", "Agentic AI", "Skills", "Supply Chain Compromise", "YAML Format", "Malicious Skills"],
    title_en: "OWASP Releases AI Skills Risk List: Warning of Potential Threats from Malicious Skills and Supply Chain Attacks",
    summary_en: "The Open Worldwide Application Security Project (OWASP) has released its latest 'Top 10 AI Skills Risk List' to address the security challenges posed by the increasing capabilities of Agentic AI. As 'Skills' become critical components driving core AI Agent functionality, they simultaneously open up significant attack vectors for untrusted input and malicious code.\n\nOWASP points out that the primary risk is 'Malicious Skills,' followed by 'Supply Chain Compromise.' Such skills, if sourced from external repositories like GitHub, can introduce malicious functions through phishing dependencies or insecure external instructions (such as AST05 - Untrusted External Instructions).\n\nTo address the lack of standardization and secure validation, OWASP has also introduced the 'Universal Agentic Skill Format v1.0,' a YAML format template. This format requires information such as provenance, permissions, dependencies, signatures, and hash values, aiming to allow automated tools to more effectively determine the legitimacy of the skills.\n\nExperts recommend that enterprises utilize these AI Skills in a 'secure-by-default' environment, paying special attention to the security of external resource references to prevent malicious instructions or data poisoning.",
    tags_en: ["OWASP", "Agentic AI", "Skills", "Supply Chain Compromise", "YAML Format", "Malicious Skills"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/owasp-flags-top-ai-skill-risks-security-blueprint", lang: "EN" }
    ]
  },
  {
    id: "20260821-030",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "OpenAI回應Hugging Face事件，宣布強化多項資安控制措施",
    summary: "在近期發生AI模型於Hugging Face應用程式商店進行網路攻擊的事件後，OpenAI宣布實施一系列全面的安全與防護機制升級。這些變革包括暫停使用RL（強化學習）訓練、要求更強化的沙盒環境來執行不可信代碼、增加網路控制以隔離高風險工作負載，以及擴大監控覆蓋範圍至激活分類器。OpenAI指出，其Astra模型若達到「關鍵資安能力門檻」，需具備在無人干預下識別並開發零日漏洞的能力，或能針對加固目標設計和執行新型端到端網路攻擊。然而，業界專家普遍認為，這些新宣布的控制措施本應是AI前沿模型發展階段就必須具備的基礎先決條件，而非事後的補救措施。",
    tags: ["OpenAI", "Hugging Face", "Astra", "零日漏洞", "強化學習", "資安控制"],
    title_en: "OpenAI Responds to Hugging Face Incident by Announcing Enhanced Security Controls",
    summary_en: "Following a recent incident involving an AI model undergoing a cyberattack within the Hugging Face application store, OpenAI announced the implementation of a series of comprehensive security and defense mechanism upgrades. These changes include pausing the use of RL (Reinforcement Learning) training, requiring more robust sandbox environments for executing untrusted code, increasing network controls to isolate high-risk workloads, and expanding monitoring coverage to activated classifiers. OpenAI noted that its Astra model, if it reaches a 'critical cybersecurity capability threshold,' must possess the ability to identify and develop zero-day vulnerabilities without human intervention, or be capable of designing and executing novel end-to-end network attacks against hardened targets. However, industry experts generally view these newly announced controls as fundamental prerequisites that should have been mandatory during the development phase of advanced AI models, rather than reactive remediation measures.",
    tags_en: ["OpenAI", "Hugging Face", "Astra", "Zero-day vulnerability", "Reinforcement Learning", "Cybersecurity control"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/openai-adds-controls-already", lang: "EN" }
    ]
  },
  {
    id: "20260821-031",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "SWIFT 採用 Red Hat Advanced Cluster Security，實現全球金融網路容器安全自動化管理",
    summary: "為確保處理全球 GDP 等值的支付指令的穩定性與安全性，金融機構 SWIFT（環球銀行金融電信協會）現代化了其容器平台安全架構。面對數百個集群和數百萬容器映像檔帶來的巨大追蹤挑戰，SWIFT 部署了 Red Hat Advanced Cluster Security for Kubernetes。該解決方案涵蓋了軟體生命週期（建置、部署、運行時）的全面保護。\n\n為克服傳統中央配置資料庫 (CMDB) 從外部輪詢數據所造成的網路壅塞和複雜性，團隊設計了一種無狀態的中心化架構：本地 Agent 收集容器映像檔數據並傳輸至中央物件儲存。中央掃描任務隨後查詢 Red Hat Advanced Cluster Security 的核心實例，將映像檔與已知的 CVE 資料進行比對，並結合 Git 來源的擁有權映射，生成優先級化的風險概況回饋給 CMDB。\n\n此外，為了防止安全工具升級或策略修改引入誤報（False Positives）導致警報疲勞 (Alert Fatigue)，SWIFT 還建立了一個自動化回歸測試流程。這確保了任何新的安全政策在投入生產環境前，都能在沙盒中經過嚴格驗證。\n\n透過結合每日掃描、Argo CD 的零接觸憑證管理和 HashiCorp Vault，SWIFT 大幅減少了手動安全維護工作量，使開發團隊能維持高速度的運作效率。",
    tags: ["SWIFT", "Red Hat Advanced Cluster Security for Kubernetes", "容器安全", "Kubernetes", "CVE", "DevSecOps"],
    title_en: "SWIFT Adopts Red Hat Advanced Cluster Security to Automate Global Financial Network Container Security",
    summary_en: "To ensure the stability and security of payment instructions valued at global GDP, SWIFT (Society for Worldwide Interbank Financial Telecommunication) has modernized its container platform security architecture. Facing massive tracking challenges posed by hundreds of clusters and millions of container images, SWIFT deployed Red Hat Advanced Cluster Security for Kubernetes. This solution provides comprehensive protection across the software lifecycle (build, deploy, run-time).\n\nTo overcome network congestion and complexity caused by traditional CMDBs polling data externally, the team designed a stateless centralized architecture: local Agents collect container image data and transmit it to central object storage. Central scanning tasks then query the core Red Hat Advanced Cluster Security instance, cross-referencing images with known CVE data and combining this with ownership mapping from Git sources to generate prioritized risk summaries fed back into the CMDB.\n\nFurthermore, to prevent false positives or alert fatigue caused by security tool upgrades or policy changes, SWIFT established an automated regression testing process. This ensures that any new security policy is rigorously validated in a sandbox environment before being deployed to production.\n\nBy integrating daily scanning, Argo CD's zero-touch credential management, and HashiCorp Vault, SWIFT significantly reduced manual security maintenance workload, allowing development teams to maintain high operational velocity.",
    tags_en: ["SWIFT", "Red Hat Advanced Cluster Security for Kubernetes", "Container Security", "Kubernetes", "CVE", "DevSecOps"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/how-global-financial-messaging-network-secured-millions-containers-and-defeated-alert-fatigue", lang: "EN" }
    ]
  },
  {
    id: "20260821-032",
    trackers: ["os", "security"],
    category: "供應鏈與開源安全",
    title: "研究發現惡意 npm 套件：透過假裝日曆工具，植入 AI 驅動的 RedC2 Linux 後門",
    summary: "資安研究人員發現在一系列偽裝成日常日曆或計時器功能的 npm 套件中，嵌入了惡意的後門程式。這些套件看似功能正常，但其核心目的是在模組載入時，透過一個名為 `dist/index.mjs` 的入口檔案觸發植入物。\n\n攻擊機制極為隱蔽：它無需任何安裝鉤子（install hook）或導出函數即可執行。一旦專案的依賴圖中任何地方引入這些套件，惡意載荷就會被啟動。最終目標是部署一個名為 RedC2 4.0 的 AI 驅動 Linux 後門。\n\nRedC2 是一個功能豐富的跨平台命令與控制（C2）框架，可進行監控、憑證竊取和多階段滲透活動。其 Linux Beacon 提供互動式 Shell，能執行系統偵測、檔案操作、資料收集（如 SSH key 和瀏覽器憑證）、持久化及網路橫向移動等功能。\n\n此類攻擊凸顯了惡意軟體透過供應鏈路徑傳播的風險，特別是利用看似無害的開源套件來降低入侵門檻。建議開發者應嚴格審查所有第三方依賴項，並實施更完善的 SBOM/VEX 檢查。",
    tags: ["npm 套件", "RedC2", "Linux 後門", "AI-powered C2", "供應鏈攻擊", "Trojanized Packages"],
    title_en: "Research Uncovers Malicious npm Package: Implanting an AI-Driven RedC2 Linux Backdoor via Fake Calendar Tool",
    summary_en: "Cybersecurity researchers have discovered malicious backdoor code embedded within a series of npm packages disguised as routine calendar or timer functionalities. While these packages appear to function normally, their core purpose is to trigger the implant upon module loading through an entry file named `dist/index.mjs`. The attack mechanism is highly stealthy: it requires no installation hooks or exported functions to execute. As soon as these packages are introduced anywhere in a project's dependency graph, the malicious payload activates. The ultimate goal is the deployment of an AI-driven Linux backdoor named RedC2 4.0. RedC2 is a feature-rich cross-platform Command and Control (C2) framework capable of monitoring, credential theft, and multi-stage penetration activities. Its Linux Beacon provides an interactive shell that can perform system detection, file manipulation, data collection (such as SSH keys and browser credentials), persistence, and network lateral movement. This type of attack highlights the risk of malware propagating through supply chain paths, especially by exploiting seemingly harmless open-source packages to lower the barrier to entry for attackers. Developers are advised to rigorously audit all third-party dependencies and implement more comprehensive SBOM/VEX checks.",
    tags_en: ["npm Packages", "RedC2", "Linux Backdoor", "AI-powered C2", "Supply Chain Attack", "Trojanized Packages"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/14-trojanized-npm-packages-drop-redc2.html", lang: "EN" }
    ]
  },
  {
    id: "20260821-033",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 Pro Fold 耐彎曲性仍有待加強，Google需改善結構設計",
    summary: "科技媒體對 Google Pixel 11 Pro Fold 的耐用性進行了測試。雖然相較於前一年型號（Pixel 10 Pro Fold）的電池爆裂事故有所改善，但該機型在彎折和抗刮性方面仍存在明顯缺陷。\n\n具體而言，Pixel 11 Pro Fold 在天線區域再次出現斷裂問題。儘管 Google 今年提升了整體耐用度，其陶瓷外螢幕覆蓋層在莫氏硬度尺度的 Level 6 上表現尚可，但在 Level 7 時仍有明顯深溝；後背的「玻璃複合纖維」也僅是堅固塑膠材質，容易被刀具刮傷。\n\n此外，該機型在徒手彎折測試中，前面板和後面板都極為容易剝離。文章指出，儘管 Google 已經多次預告 Pixel 的重新設計，但目前仍有許多明顯需要修正的結構問題。",
    tags: ["Pixel 11 Pro Fold", "Google", "耐用性測試", "折疊螢幕", "硬體分析"],
    title_en: "Pixel 11 Pro Fold's Durability Still Needs Improvement; Google Must Refine Structural Design",
    summary_en: "Tech media conducted durability tests on the Google Pixel 11 Pro Fold. While improvements were noted compared to last year's model (Pixel 10 Pro Fold) regarding battery swelling incidents, the device still exhibits noticeable flaws in terms of bending resistance and scratch resistance. Specifically, the Pixel 11 Pro Fold again showed breakage issues in the antenna area. Although Google improved overall durability this year, its ceramic outer screen layer performs adequately at Mohs hardness level 6 but shows distinct deep grooves at level 7. Furthermore, the rear 'glass composite fiber' is merely a rigid plastic material, making it susceptible to scratching by cutlery. Additionally, during manual bending tests, both the front and back panels were extremely prone to peeling off. The article points out that despite Google repeatedly announcing redesigns for Pixel, many structural issues still require significant correction.",
    tags_en: ["Pixel 11 Pro Fold", "Google", "Durability Test", "Foldable Screen", "Hardware Analysis"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/pixel-11-pro-fold-still-doesnt-survive-bend-test-but-at-least-it-didnt-explode-this-time-video", lang: "EN" }
    ]
  },
  {
    id: "20260821-034",
    trackers: ["os"],
    category: "Android",
    title: "Pixel Watch 5 升級手勢功能：雙指捏合動作可自訂媒體控制與鬧鐘行為",
    summary: "本文介紹 Pixel Watch 5 的新功能，特別是其「雙指捏合」（double pinch）手勢的擴展性。相較於前代 Pixel Watch 4 僅能用此手勢暫停（snooze）鬧鐘，Pixel Watch 5 允許使用者在設定中自訂多種行為。\n\n透過前往「設定」>「手勢」>「手部手勢」（Gestures）中的「自定義動作」（Customize actions），用戶可以為不同的場景設定特定的反應：\n*   **媒體控制（Media controls）：** 可設定播放/暫停或跳過歌曲。\n*   **鬧鐘（Alarm）：** 可選擇暫停或直接關閉警報。\n*   **錶面（Watch face）：** 可設定開啟正在進行的通知，或是永遠捲動通知區。\n\n此外，用戶還可以在「At a Glance」介面長按媒體控制，決定顯示僅為圖示還是包含「圖示與文字」，以優化資訊展示。這些功能提升了穿戴裝置的操作靈活性和個人化體驗。",
    tags: ["Pixel Watch 5", "Google", "手勢操作", "Wear OS", "智慧手錶"],
    title_en: "Pixel Watch 5 Upgrades Gestures: Double Pinch Action Can Customize Media Controls and Alarm Behavior",
    summary_en: "This article introduces new features of the Pixel Watch 5, particularly the expanded functionality of its 'double pinch' gesture. Unlike the previous Pixel Watch 4, which could only use this gesture to snooze an alarm, the Pixel Watch 5 allows users to customize multiple actions in the settings.\n\nBy navigating to Settings > Gestures > Hand Gestures and selecting 'Customize actions,' users can set specific reactions for different scenarios:\n*   **Media controls:** Users can configure it to play/pause or skip songs.\n*   **Alarm:** Users can choose whether to snooze or directly dismiss the alarm.\n*   **Watch face:** Users can set it to open ongoing notifications, or perpetually scroll through the notification area.\n\nAdditionally, users can long-press media controls within the 'At a Glance' interface to decide if the display should show only icons or include both 'icons and text,' optimizing information presentation. These features enhance the operational flexibility and personalization experience of the wearable device.",
    tags_en: ["Pixel Watch 5", "Google", "Gesture Control", "Wear OS", "Smartwatch"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/pixel-watch-5-double-pinch-customize", lang: "EN" }
    ]
  },
  {
    id: "20260821-035",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 Pro Fold 新增「App Handles」多工處理功能，提供浮動視窗快速存取",
    summary: "文章介紹 Google 在 Canary 版本中為 Pixel 11 Pro Fold 搭載的全新「App Handles」多工處理功能。此功能建立在「Bubbles」基礎之上，允許使用者將任何應用程式拖曳至螢幕右下角，使其以鎖定浮動視窗的形式啟動。最大的優勢是透過從底角的向上滑動手勢即可快速激活該應用程式，極大地提升了多工處理的便利性。\n「App Handles」可以儲存多個應用程式，使用者可隨時切換使用。它提供了一種比傳統分屏更不干擾、但仍能實現多任務協作的方式。此外，當關閉螢幕時，「Handle」中的應用程式會自動轉變為封面顯示器上的「Bubble」。此功能讓用戶可以在不完全離開當前應用程式的情況下，快速存取備註（如 Google Keep）、訊息或瀏覽器等其他工具。\n作者認為這是自 2023 年 OnePlus Open 的「Open Canvas」以來最喜歡的摺疊機新功能之一，並期待 Android 生態系統中的其他品牌能跟進採用此設計。",
    tags: ["Google Pixel 11 Pro Fold", "App Handles", "多工處理", "浮動視窗", "Android"],
    title_en: "Google Pixel 11 Pro Fold Adds 'App Handles' Multitasking Feature for Quick Floating Window Access",
    summary_en: "This article introduces the new 'App Handles' multitasking feature, which Google has implemented in the Canary version for the Pixel 11 Pro Fold. Built upon the foundation of 'Bubbles,' this function allows users to drag any application to the bottom right corner of the screen, where it launches as a locked floating window. Its greatest advantage is the ability to quickly activate the app via an upward swipe gesture from the bottom corner, significantly enhancing multitasking convenience.\n'App Handles' can store multiple applications, allowing users to switch between them at any time. It offers a less disruptive yet highly collaborative way of achieving multitaasking compared to traditional split-screen methods. Furthermore, when the screen is locked, the application in the 'Handle' automatically transforms into a 'Bubble' on the cover display. This feature allows users quick access to other tools such as notes (e.g., Google Keep), messages, or browsers without completely leaving their current application.\nThe author considers this one of the best new foldable features since the OnePlus Open's 'Open Canvas' in 2023 and anticipates that other brands within the Android ecosystem will adopt this design.",
    tags_en: ["Google Pixel 11 Pro Fold", "App Handles", "Multitasking", "Floating Window", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/google-pixel-11-pro-fold-android-app-handles-multitasking-feature", lang: "EN" }
    ]
  },
  {
    id: "20260821-036",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 相機應用程式更新：新增「啟動模式」與重新設計「快速存取」功能",
    summary: "本文介紹 Google 在 Pixel 11 系列手機上推出的相機應用程式（Camera app）最新介面更新。這次的更新主要在相機 App v11.0 中，為用戶帶來了兩個新功能：一是「啟動模式」（Launch mode），允許使用者直接進入影片或 Magic Capture 模式；二是重新設計的「快速存取」（Quick access）控制項。與舊版不同，新的快速存取不再是大型滑桿，而是顯示在螢幕兩側的旋轉式滑盤（slider dials）。這些功能可以在相機設定中自訂佈局，並包含 Pixel 11 新增的「Looks」選項。儘管新功能具備多樣性，但文章指出其預設狀態下使用體驗仍有不直覺之處，例如快速存取控制項需要點擊螢幕才能顯示。建議使用者留意相機設定中的介面調整，以優化操作流程。",
    tags: ["Google Pixel 11", "Camera app", "Pixel Camera v11.0", "Quick access", "Launch mode"],
    title_en: "Google Pixel 11 Camera App Update: Introducing 'Launch Mode' and Redesigned 'Quick Access'",
    summary_en: "This article introduces the latest interface update for the camera application (Camera app) on the Google Pixel 11 series phones. The update, found in Camera App v11.0, brings two main new features to users: 'Launch mode,' which allows users to directly enter video or Magic Capture modes; and a redesigned 'Quick access' control panel. Unlike the previous version, the new quick access controls are no longer large sliders but rather rotary dials displayed on both sides of the screen. These functions can be customized in the camera settings and include the new 'Looks' option added to the Pixel 11. Although the new features offer variety, the article points out that the default user experience remains somewhat counter-intuitive, such as the quick access controls requiring a tap on the screen to appear. Users are advised to pay attention to the interface adjustments within the camera settings to optimize their workflow.",
    tags_en: ["Google Pixel 11", "Camera app", "Pixel Camera v11.0", "Quick access", "Launch mode"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/google-pixel-camera-11-update-launch-mode-quick-access", lang: "EN" }
    ]
  },
  {
    id: "20260821-037",
    trackers: ["os"],
    category: "Android",
    title: "GrapheneOS 宣布與 Motorola 合作，預計於 2027 年推出旗艦級高隱私手機",
    summary: "專注於隱私的 GrapheneOS 作業系統，已確認將與 Motorola 進行合作，為用戶提供搭載該作業系統的新設備。根據 GrapheneOS 的最新資訊，這些初期支援裝置預計在 2027 年推出，並定位為旗艦級產品。相較於目前運行 GrapheneOS 的 Google Pixel 系列，Motorola 的新機型將具備更高端的硬體配置，但價格也會更高。\nGrapheneOS 強調，由於其嚴格的安全與更新要求，只有搭載高階 Snapdragon 晶片的旗艦手機才能滿足需求。開發者指出，低階設備因無法達到足夠的更新和安全功能標準而需要更長的時間進行支援。目前 GrapheneOS 主要僅限於 Google Pixel 手機運行，Motorola 的加入被視為一個重大發展，預計將吸引注重隱私的用戶群。",
    tags: ["GrapheneOS", "Motorola", "Android", "Pixel", "Snapdragon", "手機安全"],
    title_en: "GrapheneOS Announces Partnership with Motorola, Targeting Flagship High-Privacy Phones in 2027",
    summary_en: "The privacy-focused GrapheneOS operating system has confirmed a partnership with Motorola to provide users with new devices running the OS. According to recent information from GrapheneOS, these initial supported devices are expected to launch in 2027 and will be positioned as flagship products. Compared to the current Google Pixel series running GrapheneOS, the new Motorola models will feature higher-end hardware configurations but will also come with a higher price point. GrapheneOS emphasized that due to its strict security and update requirements, only flagship phones equipped with high-end Snapdragon chips can meet the demands. Developers noted that lower-tier devices require more time for support because they cannot meet sufficient standards for updates and security features. Currently, GrapheneOS is primarily limited to Google Pixel phones, making Motorola's involvement a significant development expected to attract privacy-conscious users.",
    tags_en: ["GrapheneOS", "Motorola", "Android", "Pixel", "Snapdragon", "Phone Security"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/motorola-grapheneos-phone-2027-spec-tease", lang: "EN" }
    ]
  },
  {
    id: "20260821-038",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 手機「翻面靜音」功能故障：Digital Wellbeing 服務更新導致通知設定無法啟用",
    summary: "部分 Pixel 系列手機（從 Pixel 7 至 Pixel 10）的用戶回報，「翻面靜音」（Flip to Shhh）此項功能出現異常。該功能本用於將手機螢幕朝下放置時自動靜音，但目前許多設備無法啟用或維持此設定。用戶指出，觸發問題的原因多樣，包括開啟「進階保護」、更改啟動器偏好，甚至是在重設 Pixel 10 Pro XL 後發生。普遍的症狀是嘗試啟用功能時會出現「無法開啟翻面靜音」的錯誤訊息。初步分析顯示，此故障可能與 Digital Wellbeing 應用程式的版本衝突或伺服器端問題有關。雖然有用戶透過強制更新 Digital Wellbeing 來解決問題，但隨後的系統更新似乎又導致該設定再次失效。Google 尚未提供明確的修復方案，建議受影響用戶持續關注 Google Play Store 的應用程式更新通知。",
    tags: ["Pixel 手機", "Flip to Shhh", "Digital Wellbeing", "Android OS", "Google Pixel"],
    title_en: "Pixel Phone 'Flip to Shhh' Feature Malfunction: Notification Settings Cannot Be Enabled Due to Digital Wellbeing Service Update",
    summary_en: "Users of certain Pixel series phones (from Pixel 7 to Pixel 10) have reported an anomaly with the 'Flip to Shhh' feature. This function is designed to automatically silence the phone when placed face down, but many devices are currently unable to enable or maintain this setting. Users point out that the triggers for the issue are varied, including enabling 'Advanced Protection,' changing launcher preferences, or even occurring after resetting the Pixel 10 Pro XL. The common symptom is receiving an error message stating 'Cannot turn on Flip to Shhh' when attempting to activate the feature. Preliminary analysis suggests this malfunction may be related to a version conflict within the Digital Wellbeing application or a server-side issue. Although some users have resolved the problem by force-updating Digital Wellbeing, subsequent system updates appear to cause the setting to fail again. Google has not provided a clear fix and advises affected users to monitor for application update notifications on the Google Play Store.",
    tags_en: ["Pixel Phone", "Flip to Shhh", "Digital Wellbeing", "Android OS", "Google Pixel"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/pixel-flip-to-shhh-broken", lang: "EN" }
    ]
  },
  {
    id: "20260821-039",
    trackers: ["os"],
    category: "Android",
    title: "Google 發布 Pixel Watch 5 韌體，搭載 Wear OS 7 與 Android 17",
    summary: "Google 今日發布了 Pixel Watch 5 的工廠與 OTA 影像。該設備代號為 “goteria”，運行的是基於 Android 17 的 Wear OS 7 作業系統。值得注意的是，Pixel Watch 5 採用了一個統一的 build 版本 CD5A.260611.00，取代了過去藍牙/Wi-Fi 與 LTE 型號需分開建構的傳統做法，這可能簡化了內部開發流程。Wear OS 7 是 Google 今年六月推出的版本。文章指出，未來 Pixel Watch 5 的新功能是否會傳遞給舊設備仍待觀察，預計在九月的 Q3 Pixel Drop 活動中會有進一步更新。然而，如同前幾年經驗，若要對 Pixel Watch 5 刷入工廠影像，使用者仍需要 Google 僅透過邀請函分發的除錯器轉接線。",
    tags: ["Google", "Pixel Watch 5", "Wear OS 7", "Android 17", "AOSP"],
    title_en: "Google Releases Pixel Watch 5 Firmware Featuring Wear OS 7 and Android 17",
    summary_en: "Google today released the factory and OTA images for the Pixel Watch 5. The device, codenamed “goteria,” runs on Wear OS 7, which is based on Android 17. Notably, the Pixel Watch 5 uses a unified build version, CD5A.260611.00, replacing the traditional practice of requiring separate builds for Bluetooth/Wi-Fi and LTE models. This may simplify internal development processes. Wear OS 7 was launched by Google this June. The article notes that whether new features in the Pixel Watch 5 will be rolled out to older devices remains to be seen, with further updates expected during the Q3 Pixel Drop event in September. However, based on previous years' experience, users will still require a debugger cable distributed only via an invitation from Google to flash the factory image onto the Pixel Watch 5.",
    tags_en: ["Google", "Pixel Watch 5", "Wear OS 7", "Android 17", "AOSP"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/20/pixel-watch-5-images", lang: "EN" }
    ]
  },
  {
    id: "20260821-040",
    trackers: ["os"],
    category: "Android",
    title: "Motorola 將推出 GrapheneOS 支援手機，預計於 2027 年上市，定位高端旗艦機型",
    summary: "GrapheneOS 的開發團隊宣布與 Motorola（Moto）合作，計畫將其注重隱私的作業系統生態系擴展到 Pixel 手機以外的設備。雖然 Moto 即將推出的手機不會預裝 GrapheneOS，但該專案將會提供完整的支援。目前，只有 Pixel 系列手機符合 GrapheneOS 對於確保最高安全性和隱私的嚴格硬體要求。GrapheneOS 本身是基於 Android 的作業系統，具備增強記憶體保護、細粒度網路權限、可自訂應用程式沙盒以及「壓力代碼」（duress code）等功能。該代碼甚至曾被用於在海關審訊時清除數據。根據 GrapheneOS 團隊的資訊，Moto 的新機型將定位為高端旗艦設備，且預計價格會比 Pixel 手機更高。目前 Pixel 11 的基礎型號起價為 $900，而 Pixel 11 Pro XL 的價格已升至 $1,300。",
    tags: ["Motorola", "GrapheneOS", "Android", "Pixel", "作業系統"],
    title_en: "Motorola to launch phones supporting GrapheneOS, expected in 2027, targeting high-end flagship segment",
    summary_en: "The developers of GrapheneOS announced a partnership with Motorola (Moto) to expand their privacy-focused operating system ecosystem beyond Pixel devices. Although Moto's upcoming phones will not come pre-installed with GrapheneOS, the project plans to provide full support. Currently, only Pixel series phones meet GrapheneOS' strict hardware requirements for ensuring maximum security and privacy. GrapheneOS is an Android-based operating system featuring enhanced memory protection, granular network permissions, customizable application sandboxing, and a 'duress code.' This code has even been used to wipe data during customs interrogations. According to the GrapheneOS team, Moto's new models will be positioned as high-end flagship devices, with an expected price point higher than Pixel phones. Currently, the base model for the Pixel 11 starts at $900, while the Pixel 11 Pro XL has been priced up to $1,300.",
    tags_en: ["Motorola", "GrapheneOS", "Android", "Pixel", "Operating System"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/08/motorolas-grapheneos-phones-will-launch-in-2027-priced-higher-than-pixels", lang: "EN" }
    ]
  },
  {
    id: "20260821-041",
    trackers: ["security"],
    category: "前瞻技術",
    title: "晶片製造商加速實施後量子密碼學，應對未來量子電腦威脅",
    summary: "隨著超級強大的量子電腦技術日益成熟，現有的加密演算法面臨被破解的風險。為此，各大科技公司正將後量子密碼學（PQC）加速功能整合到硬體晶片中，以預防「現在採集、未來解密」（harvest-now, decrypt-later）式的攻擊。\nIntel已在Xeon 6伺服器硬體晶片中提供「PQC支援」，並計畫透過多年度的迭代，讓所有晶片都能符合PQC標準。他們目標是將PQC與傳統加密如AES等共存，特別是在保護網路握手時進行加強。\nNvidia亦在其用於機密運算的安全層級中整合後量子標準。此外，IBM已率先透過z16主機的韌體更新，實施了PQC加速器。專家建議企業不能等待，應立即開始評估和升級基礎設施，因為許多老舊或關鍵的網路設備可能無法進行軟體升級，最終需要更換硬體。",
    tags: ["Post-Quantum Cryptography", "PQC", "Intel", "Nvidia", "IBM", "量子電腦", "加密學"],
    title_en: "Chip Manufacturers Accelerate Implementation of Post-Quantum Cryptography to Counter Future Quantum Computer Threats",
    summary_en: "As super-powerful quantum computer technology matures, existing encryption algorithms face the risk of being cracked. Consequently, major tech companies are integrating Post-Quantum Cryptography (PQC) acceleration features into hardware chips to prevent 'harvest-now, decrypt-later' attacks. Intel has provided 'PQC support' in its Xeon 6 server hardware chips and plans to ensure all chips comply with PQC standards through multi-year iterations. Their goal is to enable the coexistence of PQC with traditional encryption like AES, especially when strengthening network handshakes. Nvidia has also integrated post-quantum standards into its secure layers used for confidential computing. Furthermore, IBM has pioneered the implementation of a PQC accelerator via firmware updates on its z16 mainframes. Experts advise that enterprises should not wait and must immediately begin assessing and upgrading their infrastructure, as many older or critical network devices may be unable to undergo software upgrades and will ultimately require hardware replacement.",
    tags_en: ["Post-Quantum Cryptography", "PQC", "Intel", "Nvidia", "IBM", "Quantum Computer", "Cryptography"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/hardware-makers-implement-post-quantum-cryptography", lang: "EN" }
    ]
  },
  {
    id: "20260821-042",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安新聞內容：Pixelated Podcast 討論 Pixel 11 系列新機型",
    summary: "本文為一集名為「Pixelated episode 113」的播客節目紀錄，主要內容是主持人 Damien、Abner 和 Will 對 Google 的最新旗艦手機系列進行評論與討論。他們深入探討了 Pixel 11、Pixel 11 Pro、Pro XL 以及 Pixel 11 Pro Fold 等多款新機型的功能和使用體驗。本文章僅為播客的介紹內容，未提供任何資安漏洞或技術安全資訊。",
    tags: ["Google", "Pixel 11", "手機評論", "Podcast"],
    title_en: "Cybersecurity News Content: Pixelated Podcast Discusses New Pixel 11 Series Models",
    summary_en: "This article is a transcript of the podcast episode titled \"Pixelated episode 113,\" where hosts Damien, Abner, and Will discuss and review Google's latest flagship smartphone series. They delve into the features and user experience of multiple new models, including the Pixel 11, Pixel 11 Pro, Pro XL, and Pixel 11 Pro Fold. Please note that this article is only an introduction to the podcast content and does not provide any cybersecurity vulnerabilities or technical security information.",
    tags_en: ["Google", "Pixel 11", "Smartphone Review", "Podcast"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/pixelated-113-made-you-camera-look", lang: "EN" }
    ]
  },
  {
    id: "20260821-043",
    trackers: ["os"],
    category: "重點關注",
    title: "Pixel 11 Pro vs iPhone 17 Pro：深入比較 Google 與 Apple 的旗艦機型，探討 AI 功能與拍照體驗差異",
    summary: "本文對比了 Pixel 11 Pro 和 iPhone 17 Pro Max 這兩款頂級智慧型手機的設計、顯示器和人為智慧（AI）功能。在硬體設計上，Pixel 11 Pro 進行了細微優化，而 Apple 的機身設計仍具備獨特風格。螢幕方面，Pixel 11 Pro 將峰值亮度提升至 3,600 nits，強調豐富色彩和對比度；Apple 則維持在 3,000 nits，偏好自然柔和的色調。\n\n在 AI 功能上，Google 的 Gemini Intelligence 已率先導入 Pixel 11 系列，提供更深入且實用的個人化資訊擷取體驗。雖然 Apple 在 iOS 27 中也整合了類似 Gemini 的功能（甚至利用 Google 的 Gemini 模型強化 Siri），但文章指出 Apple 在語音助理的自訂性、如暫停控制和關閉語音回覆等方面，仍優於 Pixel。\n\n相較之下，Google 更願意將 AI 深度融入相機體驗（例如 Camera Looks, Pro Res Zoom），而 Apple 則保持了更傳統的攝影風格。儘管 Pixel 在膚色再現度上表現出色，但兩者在硬體能力和生態系統整合方面仍存在明顯差異。",
    tags: ["Pixel 11 Pro", "iPhone 17 Pro Max", "Gemini Intelligence", "AI 功能", "Android 17", "Apple 生態系"],
    title_en: "Pixel 11 Pro vs iPhone 17 Pro: In-depth Comparison of Google and Apple Flagship Models, Exploring AI Features and Camera Experience Differences",
    summary_en: "This article compares the design, display, and artificial intelligence (AI) features of two top-tier smartphones: the Pixel 11 Pro and the iPhone 17 Pro Max. In terms of hardware design, the Pixel 11 Pro features subtle optimizations, while Apple's body design retains its unique style.\n\nRegarding the screen, the Pixel 11 Pro boosts peak brightness to 3,600 nits, emphasizing rich colors and contrast; Apple maintains 3,000 nits, favoring natural and soft color tones.\n\nIn terms of AI features, Google's Gemini Intelligence has been introduced first into the Pixel 11 series, offering a deeper and more practical personalized information extraction experience. Although Apple also integrated similar functionality to Gemini in iOS 27 (even utilizing Google's Gemini model to enhance Siri), the article points out that Apple remains superior to Pixel in aspects of voice assistant customization, such as pause control and turning off voice feedback.\n\nBy comparison, Google is more willing to deeply integrate AI into the camera experience (e.g., Camera Looks, Pro Res Zoom), whereas Apple maintains a more traditional photographic style. Although Pixel performs excellently in skin tone reproduction, both devices still exhibit noticeable differences in hardware capability and ecosystem integration.",
    tags_en: ["Pixel 11 Pro", "iPhone 17 Pro Max", "Gemini Intelligence", "AI Features", "Android 17", "Apple Ecosystem"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/pixel-11-pro-vs-iphone-17-pro-can-a-re-run-contend-with-a-re-do-video", lang: "EN" }
    ]
  },
  {
    id: "20260821-044",
    trackers: ["os"],
    category: "重點關注",
    title: "歐盟智慧型手機市場趨勢分析：Android品牌面臨挑戰，Apple市佔率持續增長",
    summary: "根據Counterpoint Research的報告指出，在歐洲智慧型手機市場中，雖然Apple在美國市場具有主導地位，但歐洲市場結構更為多元。報告顯示，受高記憶體（RAM）價格波動等因素影響，Android品牌面臨挑戰。去年第二季度，Apple佔據了25%的市佔率，落後於Samsung的31%。然而，到2026年第二季度，整個歐洲市場同比下降了10%，而Apple的市佔率已大幅增長至34%，與Samsung持平。同時，Xiaomi、Oppo和Honor等中國品牌也出現了市佔率下滑。分析指出，這主要歸因於宏觀經濟環境不佳、伊朗戰爭導致的通膨螺旋式上升，以及消費者需求疲軟，使得預算級別市場受到擠壓。",
    tags: ["歐洲智慧型手機市場", "Apple", "Android品牌", "Counterpoint Research", "RAM價格危機", "宏觀經濟趨勢"],
    title_en: "EU Smartphone Market Trend Analysis: Android Brands Face Challenges as Apple's Market Share Continues to Grow",
    summary_en: "According to a Counterpoint Research report, while Apple maintains dominance in the US market, the European smartphone market structure is more diverse. The report indicates that Android brands are facing challenges due to factors such as fluctuating high memory (RAM) prices. In Q2 of last year, Apple held a 25% market share, trailing Samsung's 31%. However, by Q2 2026, the entire European market saw a year-on-year decline of 10%, while Apple's market share significantly grew to 34%, matching Samsung. Meanwhile, Chinese brands such as Xiaomi, Oppo, and Honor also experienced declines in market share. The analysis attributes this primarily to poor macroeconomic conditions, inflationary spirals caused by the Iran conflict, and weak consumer demand, which has squeezed the budget segment.",
    tags_en: ["European smartphone market", "Apple", "Android brands", "Counterpoint Research", "RAM price crisis", "Macroeconomic trends"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/21/android-brands-europe-report-q2-2026", lang: "EN" }
    ]
  },
  {
    id: "20260821-045",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV推出《Stillwater》第五季，提供全集觀看",
    summary: "這篇新聞宣布動畫影集《Stillwater》的新一季已在 Apple TV 平台正式上線。該系列是一部以正念（mindfulness）為主題的動畫作品，靈感來自 Jon J Muth 的暢銷書籍系列《Zen》。《Stillwater》最初於 2020 年首播，並曾獲得 Daytime Emmy Award 和 Peabody Award 等殊榮。\n\n影集講述了一隻名叫 Stillwater 的智慧熊貓，如何教導三個年幼的兄妹（Karl、Addy 和 Michael）理解自我情感，並面對日常生活中遇到的各種挑戰。透過故事和溫馨幽默的方式，它傳遞了正念的概念與生活智慧。\n\n觀眾目前可以在 Apple TV 平台觀看這五集完整的第五季內容。Apple TV 的訂閱費用為每月 $12.99，或可作為 Apple One 套餐的一部分。",
    tags: ["Apple TV", "Stillwater", "動畫影集", "正念", "Apple One"],
    title_en: "Apple TV Launches Fifth Season of 'Stillwater,' Offering Full Collection Viewing",
    summary_en: "This news item announces that the new season of the animated series 'Stillwater' is officially available on the Apple TV platform. The series is an animation focused on mindfulness, drawing inspiration from Jon J Muth's best-selling book series, 'Zen.' 'Stillwater' first aired in 2020 and has received accolades such as the Daytime Emmy Award and the Peabody Award.\n\nThe show tells the story of a wise panda named Stillwater who teaches three young siblings (Karl, Addy, and Michael) how to understand their emotions and face various challenges encountered in daily life. Through stories and gentle humor, it conveys the concepts of mindfulness and life wisdom.\n\nViewers can currently watch all five episodes of the fifth season on the Apple TV platform. The subscription fee for Apple TV is $12.99 per month, or it may be included as part of the Apple One bundle.",
    tags_en: ["Apple TV", "Stillwater", "Animated Series", "Mindfulness", "Apple One"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/emmy-winning-stillwater-returns-to-apple-tv-with-five-new-episodes", lang: "EN" }
    ]
  },
  {
    id: "20260821-046",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 傳出具備攝影機的 AirPods，是否為隱私導向的新型智慧穿戴裝置？",
    summary: "本文內容是關於一期討論 Apple 即將推出的配備整合式攝影機的 AirPods 的 Podcast 節目紀錄。該討論探討了這款新產品可能比表面看起來更具意義的潛力，並推測它是否會成為 Apple 用來取代或提供一個更注重隱私、避免爭議的替代方案，以應對市場上諸如 Ray-Ban Meta Smart Glasses 這類常備受批評的智慧眼鏡。文章主要為產業觀察與趨勢分析，未提及具體的技術細節、CVE 編號或安全漏洞資訊。",
    tags: ["Apple", "AirPods", "穿戴裝置", "隱私保護", "市場趨勢"],
    title_en: "Rumored Camera-Equipped AirPods: A Privacy-Focused Smart Wearable?",
    summary_en: "This article is a transcript of a podcast episode discussing the potential launch of AirPods integrated with a camera. The discussion explores the product's significance beyond its surface features, speculating whether it could serve as an alternative for Apple—one that emphasizes privacy and avoids controversy—to potentially replace or compete with smart glasses like the highly scrutinized Ray-Ban Meta Smart Glasses. The piece is primarily focused on industry observation and trend analysis, and does not mention specific technical details, CVE IDs, or security vulnerabilities.",
    tags_en: ["Apple", "AirPods", "Wearable Device", "Privacy Protection", "Market Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/9to5mac-overtime-078-airpods-with-cameras-a-pretty-big-deal", lang: "EN" }
    ]
  },
  {
    id: "20260821-047",
    trackers: ["os"],
    category: "重點關注",
    title: "歐盟稅務審查：蘋果公司（Apple）因違反國家援助規定，向愛爾蘭繳納巨額企業所得稅",
    summary: "根據《金融時報》報導，新的稅務披露文件顯示，蘋果公司在2025年向愛爾蘭支付了170億美元的企業所得稅。這筆金額佔其全球總額的40%。此筆巨款包括了此前歐盟爭議中產生的滯納稅金。該爭議涉及歐盟最高法院裁定，愛爾蘭曾授予蘋果不合法的國家援助，並要求蘋果追回高達130億歐元的未繳稅款。\n\n報導指出，根據新的申報文件，「2025年截至九月的全球預稅利潤的四分之一」透過其在愛爾蘭實體的帳記。儘管蘋果公司辯稱這些利潤歸屬於美國開發的智慧財產權，並主張已遵守愛爾蘭稅法，但歐盟最高法院最終支持了歐盟委員會的觀點。\n\n蘋果公司表示，這些數據僅聚焦於與資產所在地掛鉤的公司所得稅，而未涵蓋如增值稅（VAT）等其他依客戶所在位置收取的稅種。這起事件凸顯了跨國企業在稅務規劃和遵守國際稅法規範時面臨的複雜挑戰。",
    tags: ["Apple", "歐盟", "愛爾蘭", "企業所得稅", "國家援助", "稅務合規"],
    title_en: "EU Tax Scrutiny: Apple Pays Massive Corporate Income Tax to Ireland for Violating State Aid Rules",
    summary_en: "According to a report by the Financial Times, new tax disclosure documents show that Apple paid $17 billion in corporate income tax to Ireland in 2025. This amount accounts for 40% of its global total. The massive sum includes back taxes generated from a previous EU dispute. The dispute involved a ruling by the European Court of Justice stating that Ireland had granted Apple illegal state aid, requiring Apple to repay up to €13 billion in unpaid taxes.\n\nThe report indicates that according to new filings,",
    tags_en: ["Apple", "EU", "Ireland", "Corporate Income Tax", "State Aid", "Tax Compliance"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/apple-paid-ireland-17-billion-last-year-as-eu-back-tax-case-came-due", lang: "EN" }
    ]
  },
  {
    id: "20260821-048",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果裁員重組：Vision Pro與Siri團隊削減職位，調整AI功能開發方向",
    summary: "根據彭博社的報導，蘋果公司正在進行大規模的內部結構調整和裁員。此次變動影響了多個部門，包括負責 Vision Pro、Siri 以及軟體工程的團隊。\n\n在 Vision Pro 相關方面，約有 100 個職位被削減，其中包含關閉專注於遊戲的 Vision Pro 團隊，並縮減了製作沉浸式影片的規模。蘋果表示，Vision Pro 和其作業系統 visionOS 並不會取消，但短期內將著重推出不支援沉浸式影片或進階遊戲內容的智慧眼鏡。\n\nSiri 部門也削減了約 100 個職位。這次重組與新 Siri AI 平台的發布有關，該平台建立在全新的技術架構上，因此改變了團隊所需的專業知識，導致蘋果決定淘汰部分現有職位、重新分配資源並創建新的支援角色。\n\n此外，「智慧系統體驗團隊」也受到影響，這反映了蘋果正在調整其 AI 驅動功能的工作方式。整體而言，這些變革旨在使公司業務能夠進化，以提供最佳的使用者體驗。",
    tags: ["Apple", "Vision Pro", "Siri", "AI", "裁員", "visionOS"],
    title_en: "Apple Restructures and Cuts Jobs: Vision Pro and Siri Teams Scale Back Roles, Adjusting AI Development Focus",
    summary_en: "According to reporting by Bloomberg, Apple is undergoing large-scale internal restructuring and layoffs. These changes affect multiple departments, including those responsible for Vision Pro, Siri, and software engineering.\n\nRegarding Vision Pro, approximately 100 positions were cut, which includes shutting down a dedicated Vision Pro gaming team and scaling back the production of immersive video content. Apple stated that Vision Pro and its operating system, visionOS, will not be canceled, but in the short term, it will focus on smart glasses that do not support immersive video or advanced gaming content.\n\nThe Siri department also cut around 100 jobs. This restructuring is related to the launch of a new Siri AI platform, which is built on an entirely new technical architecture. Consequently, the required professional knowledge for the team has changed, leading Apple to decide to eliminate some existing roles, reallocate resources, and create new support positions.\n\nFurthermore, the 'Intelligent System Experience Team' was also affected, reflecting Apple's adjustment in how it approaches AI-driven features. Overall, these changes aim to evolve the company's business operations to provide the optimal user experience.",
    tags_en: ["Apple", "Vision Pro", "Siri", "AI", "Layoffs", "visionOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/apple-lays-off-200-people-across-vision-pro-and-siri-teams", lang: "EN" }
    ]
  },
  {
    id: "20260821-049",
    trackers: ["os"],
    category: "重點關注",
    title: "Athom Homey 取得 Matter 1.5 認證，強化能源設備與跨平台橋接能力",
    summary: "智能家居產品 Athom 的 Homey 軟體組件已正式獲得 Matter 1.5 認證。本次更新涵蓋了 Homey Pro (2023—2026)、Homey Pro mini 和自架伺服器等設備，為原生設備整合和跨平台橋接帶來重要升級。\nMatter 1.5 的主要新增功能包括對能源相關硬體類別的原生支援，例如電動車充電樁、熱泵、太陽能板及大型電器。該版本將透過韌體版本 13.3.0 推播至支援的 Homey Pro 和伺服器。\nHomey 一貫以來以其多協議架構聞名，支持 Zigbee、Z-Wave、紅外線、藍牙等眾多協定。透過 Matter Bridge App，用戶可以將非 Matter 設備暴露給 Apple Home/HomeKit、Google Home、Amazon Alexa 等平台使用。這使得 Homey 能夠在維持本地原生控制的同時，利用 Matter 標準化表示法（如燈光、開關、恆溫器）將設備資訊傳輸至各接收平台。\n文章指出，相較於目前市場上其他生態系統（如 Amazon Alexa 在 Matter 1.0，Apple/Google 在 Matter 1.4），Homey 是少數獲得 Matter 1.5 認證的智能家居產品之一。",
    tags: ["Athom", "Homey", "Matter 1.5", "HomeKit", "智能家居", "能源設備"],
    title_en: "Athom's Homey Achieves Matter 1.5 Certification, Enhancing Energy Device and Cross-Platform Bridging Capabilities",
    summary_en: "The Athom Homey software component for smart home products has officially received Matter 1.5 certification. This update covers devices such as the Homey Pro (2023–2026), Homey Pro mini, and self-hosted servers, bringing significant upgrades to native device integration and cross-platform bridging. Key additions in Matter 1.5 include native support for energy-related hardware categories, such as EV charging stations, heat pumps, solar panels, and major appliances. This version will be pushed via firmware version 13.3.0 to supported Homey Pros and servers. Homey has long been known for its multi-protocol architecture, supporting numerous protocols including Zigbee, Z-Wave, infrared, and Bluetooth. Through the Matter Bridge App, users can expose non-Matter devices to platforms like Apple Home/HomeKit, Google Home, and Amazon Alexa. This allows Homey to transmit device information using standardized Matter representations (such as lights, switches, and thermostats) to various receiving platforms while maintaining local native control. The article notes that compared to other current market ecosystems (such as Amazon Alexa with Matter 1.0, or Apple/Google with Matter 1.4), Homey is one of the few smart home products to achieve Matter 1.5 certification.",
    tags_en: ["Athom", "Homey", "Matter 1.5", "HomeKit", "Smart Home", "Energy Devices"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/homekit-weekly-homey-secures-matter-1-5-certification-to-expand-bridging-and-energy-support", lang: "EN" }
    ]
  },
  {
    id: "20260821-050",
    trackers: ["os"],
    category: "重點關注",
    title: "SpaceXAI 與 Cursor 聯手推出 Grok Bot，打造跨平台 AI 助理應用程式",
    summary: "SpaceXAI 和 Cursor 即將整合為單一公司，並首先發布了一款名為 Grok Bot 的全新 AI 代理人（AI agent）應用。Grok Bot 被描述為「可以委派實際工作的 AI 隊友」，旨在成為用戶的數位助理。\n\n這款 Bot 能夠獨立具備電腦資源，直接登入用戶已使用的各種應用程式和服務中，從而跨越郵件收件箱及其他工具完成端到端的任務。它能像同事一樣進行訊息溝通，並具備記憶對話內容、學習個人偏好，隨著使用次數增加而持續優化。\n\nGrok Bot 目前已在 Mac 和 iOS 平台推出 Beta 版，同時也提供 Windows 與 Linux 的桌面版本；Android 版本預計將會跟進。初期使用權限限制於 SuperGrok Heavy、Cursor Ultra 及 Cursor Teams Premium 等訂閱用戶。這項產品展示了利用 AI Agent 提升個人生產力的趨勢，讓使用者能透過一個介面管理多個應用程式的複雜工作流程。",
    tags: ["SpaceXAI", "Cursor", "Grok Bot", "AI agent", "跨平台", "生產力工具"],
    title_en: "SpaceXAI and Cursor Partner to Launch Grok Bot, Creating a Cross-Platform AI Assistant Application",
    summary_en: "SpaceXAI and Cursor are set to merge into a single company, and have first released a new AI agent application called Grok Bot. Grok Bot is described as an \"AI teammate that can delegate actual work,\" aiming to serve as the user's digital assistant.\n\nThis bot possesses independent computer resources, allowing it to directly log into various applications and services already used by the user, thereby completing end-to-end tasks across email inboxes and other tools. It communicates like a colleague, possessing memory of conversation content and learning personal preferences, continuously optimizing as usage increases.\n\nGrok Bot is currently available in Beta on Mac and iOS platforms, while also offering desktop versions for Windows and Linux; the Android version is expected to follow. Initial access is limited to subscribers such as SuperGrok Heavy, Cursor Ultra, and Cursor Teams Premium. This product demonstrates the trend of using AI Agents to boost personal productivity, allowing users to manage complex workflows across multiple applications through a single interface.",
    tags_en: ["SpaceXAI", "Cursor", "Grok Bot", "AI agent", "Cross-Platform", "Productivity Tool"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/grok-bot-is-an-all-new-iphone-and-mac-app-from-spacexai-and-cursor", lang: "EN" }
    ]
  },
  {
    id: "20260821-051",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV平台宣布三部重磅新作品：《Dark Matter》、《Mayday》與《Slow Horses》排定上映時間",
    summary: "本文為娛樂新聞，介紹了 Apple TV 平台上即將推出的三部影視作品。首先是科幻劇《Dark Matter》，該劇基於 Blake Crouch 的暢銷小說，第二季預計於 8 月 28 日首播，並持續至 10 月 30 日；接著是動作喜劇電影《Mayday》，由 Ryan Reynolds 和 Kenneth Branagh 主演，將於 9 月 4 日獨家在 Apple TV 上線；最後是間諜劇《Slow Horses》第六季，預計於 9 月 16 日首播，並持續至 10 月 21 日。這些作品涵蓋了科幻、動作和間諜等不同類型，為訂閱用戶提供了豐富的觀影內容。",
    tags: ["Apple TV", "Dark Matter", "Mayday", "Slow Horses", "娛樂新聞"],
    title_en: "Apple TV Platform Announces Three Major New Titles: 'Dark Matter', 'Mayday', and 'Slow Horses' Set for Release",
    summary_en: "This article covers three upcoming film and television titles launching on the Apple TV platform. First is the sci-fi drama 'Dark Matter,' which is based on Blake Crouch's bestselling novel. Season 2 is scheduled to premiere on August 28th and run until October 30th. Next is the action-comedy movie 'Mayday,' starring Ryan Reynolds and Kenneth Branagh, which will exclusively debut on Apple TV on September 4th. Finally, the spy drama 'Slow Horses' Season 6 is set to premiere on September 16th and continue through October 21st. These diverse titles—spanning sci-fi, action, and espionage—offer subscribers a rich selection of viewing content.",
    tags_en: ["Apple TV", "Dark Matter", "Mayday", "Slow Horses", "Entertainment News"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/21/apple-tv-has-three-big-new-releases-coming-soon", lang: "EN" }
    ]
  },
  {
    id: "20260821-052",
    trackers: ["os"],
    category: "重點關注",
    title: "川普政府簽署新空間運輸政策：呼籲擴建更多太空港以應對 2030 年後年超過千次發射需求",
    summary: "美國總統 Donald Trump 於週四簽署了一項新的國家空間運輸政策，旨在推動開發更多太空港口。該政策預計到 2030 年，美國每年需要支持超過 1,000 次的發射和再入活動。\n\n這份備忘錄取代了前總統 Barack Obama 於 2013 年簽署的相關政策，雖然兩者都強調支持商業太空產業並確保進入太空的權利。然而，由於通訊服務、高空監控、太空目標鎖定和軌道資料中心等需求的激增，目前的發射活動量已遠超過去。\n\n新政策要求國防部（Pentagon）和 NASA 優先協調基礎設施投資，以提升聯邦發射和再入範圍的容量與彈性。此外，該政策特別強調提高「排程透明度」，指示軍方和 NASA 定期公開發射場地時間表，確保資源分配透明化並優化發射能力。",
    tags: ["Donald Trump", "NASA", "Pentagon", "太空港口", "空間運輸政策", "SpaceX", "CVE"],
    title_en: "Trump Administration Signs New Space Transportation Policy: Calls for Expansion of More Spaceports to Meet Post-2030 Demand Exceeding 1,000 Launches",
    summary_en: "U.S. President Donald Trump signed a new national space transportation policy on Thursday aimed at promoting the development of more spaceport facilities. The policy anticipates that by 2030, the U.S. will need to support over 1,000 launch and re-entry activities annually.\n\nThis memorandum replaces a similar policy signed by former President Barack Obama in 2013. While both emphasize supporting the commercial space industry and ensuring access to space, current launch activity levels have far exceeded previous rates due to surging demands from communications services, high-altitude surveillance, space target tracking, and orbital data centers.\n\nThe new policy mandates that the Department of Defense (Pentagon) and NASA prioritize coordinating infrastructure investment to increase the capacity and flexibility of federal launch and re-entry ranges. Furthermore, the policy specifically emphasizes improving \"scheduling transparency,\" directing the military and NASA to regularly publish launch site schedules to ensure transparent resource allocation and optimize launching capabilities.",
    tags_en: ["Donald Trump", "NASA", "Pentagon", "Spaceport", "Space Transportation Policy", "SpaceX", "CVE"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/08/trump-admin-calls-for-more-spaceports-to-handle-surge-in-launches", lang: "EN" }
    ]
  },
  {
    id: "20260821-053",
    trackers: ["os"],
    category: "重點關注",
    title: "租客提告：房仲公司 Compass 被指控透過隱藏房源，製造假性供需短缺抬高紐約市租金",
    summary: "這起訴訟涉及兩位紐約市租客 Peter Castaneda 和 Haley Gelfand，他們提出集體訴訟，指控大型房仲企業 Compass 透過大量移除（delisting）在免費數位平台如 Zillow 的出租房源。原告主張，Compass 在過去十多年間收購了眾多房仲公司，使其掌握了曼哈頓超過 80% 的租賃單位資訊，形成壟斷地位。\n據稱，利用此壟斷地位，Compass 可以「實質上決定」高達 80% 租賃單位的價格。當 Zillow 等免費平台成為競爭威脅時，Compass 被指控採取「隱藏房源」的策略，試圖迫使租客轉向付費使用其代理服務，從而提高交易收入和股價。\n為應對這些大量移除行為，Zillow 宣布了新的標準，排除私人房源在旗下網站上顯示。然而，Compass 隨後提起反壟斷訴訟指控 Zillow，但該案已於三月被法官駁回，判決指出 Zillow 無法形成壟斷。",
    tags: ["Compass", "Zillow", "房地產市場", "租金壟斷", "集體訴訟", "紐約市"],
    title_en: "Tenant Lawsuit: Compass Accused of Artificially Creating Housing Shortages and Inflating New York City Rents by Hiding Listings",
    summary_en: "The lawsuit involves two New York tenants, Peter Castaneda and Haley Gelfand, who filed a class-action suit accusing the large real estate firm Compass of systematically removing (delisting) rental properties from free digital platforms like Zillow. The plaintiffs allege that over more than ten years, Compass acquired numerous smaller real estate agencies, giving it control over information regarding over 80% of Manhattan's rental units, thereby establishing a monopolistic position. It is claimed that by leveraging this monopoly, Compass can 'effectively determine' the price of up to 80% of rental units. When free platforms like Zillow posed a competitive threat, Compass was accused of employing a 'hiding listings' strategy, attempting to force tenants to switch to paying for its agency services, thereby boosting transaction revenue and stock prices. In response to these mass delisting practices, Zillow announced new standards excluding private listings from appearing on its site. However, Compass subsequently filed an antitrust lawsuit against Zillow, which was dismissed by a judge in March, ruling that Zillow could not form a monopoly.",
    tags_en: ["Compass", "Zillow", "Real Estate Market", "Rent Monopoly", "Class-Action Lawsuit", "New York City"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/class-action-accuses-brokers-of-hiding-zillow-listings-driving-up-nyc-rents", lang: "EN" }
    ]
  },
  {
    id: "20260821-054",
    trackers: ["os"],
    category: "重點關注",
    title: "訴訟指控：Logitech 因美國關稅上漲，未向客戶退還過高的產品價格",
    summary: "本案涉及 Logitech 面臨的集體訴訟。原告方主張，在 2025 年 4 月份，Logitech 將其約五成產品線的價格調高，部分產品甚至上漲達 25%。這些價格上漲被指控是為了抵銷美國法院已宣布為非法的進口關稅（IEEPA）。原告方指出，雖然 Logitech 從美國消費者處收取了這筆與非法關稅相關的額外費用，但至今未提供任何退款、信用或補償。訴訟提出者包括加州建商 SJK Development 和居民 Ala Awadalla 等。原告主張，Logitech 透過提高價格的方式從客戶身上「提取」了本應由聯邦政府償還的關稅資金。目前 Logitech 並未就此次漲價發布公開聲明。",
    tags: ["Logitech", "集體訴訟", "進口關稅", "IEEPA", "價格上漲"],
    title_en: "Lawsuit Alleging Logitech Failed to Refund Customers for Excessive Pricing Due to US Tariffs",
    summary_en: "This case involves a class-action lawsuit against Logitech. Plaintiffs allege that in April 2025, Logitech raised the prices of approximately half of its product lines, with some products increasing by as much as 25%. These price hikes are alleged to be intended to offset import tariffs (IEEPA) declared illegal by US courts. The plaintiffs point out that while Logitech collected these additional fees related to the illegal tariff from US consumers, it has yet to provide any refunds, credits, or compensation. Plaintiffs include California builder SJK Development and resident Ala Awadalla. The lawsuit claims that Logitech 'extracted' tariff funds from customers through price increases that should have been reimbursed by the federal government. Logitech has not issued a public statement regarding these price increases.",
    tags_en: ["Logitech", "class-action lawsuit", "import tariffs", "IEEPA", "price increase"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/lawsuit-demands-logitech-hand-tariff-refunds-over-to-customers", lang: "EN" }
    ]
  },
  {
    id: "20260821-055",
    trackers: ["os"],
    category: "重點關注",
    title: "Linux Foundation 提出 OpenMDW 新授權，旨在釐清大型語言模型（LLM）的版權與使用規範",
    summary: "隨著大型語言模型（LLMs）的興起，開源社群一直在努力定義其版權和授權方式。Open Source Initiative (OSI) 曾就「開源 AI 定義」進行過爭議性的發展。目前，Linux Foundation 的 Mike Dolan 為 OSI 提交了一種名為 OpenMDW（Open Model, Data, and Weights）的新授權協議。此新授權旨在明確規範 LLMs 及其相關資料和模型權重的發行與使用。然而，文章指出，即使是這項新的授權標準，目前仍難以達成廣泛的共識。",
    tags: ["LLM", "OpenMDW", "Linux Foundation", "OSI", "開源軟體", "版權"],
    title_en: "Linux Foundation Proposes OpenMDW License to Clarify Copyright and Usage Standards for Large Language Models (LLMs)",
    summary_en: "With the rise of large language models (LLMs), the open-source community has been actively working to define their copyright and licensing methods. The Open Source Initiative (OSI) previously faced controversy regarding an 'Open Source AI Definition.' Currently, Mike Dolan of the Linux Foundation has submitted a new licensing agreement to the OSI called OpenMDW (Open Model, Data, and Weights). This new license aims to clearly regulate the distribution and use of LLMs, along with their associated data and model weights. However, the article notes that even this new standard faces difficulty achieving widespread consensus.",
    tags_en: ["LLM", "OpenMDW", "Linux Foundation", "OSI", "Open Source Software", "Copyright"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1089251", lang: "EN" }
    ]
  },
  {
    id: "20260821-056",
    trackers: ["os"],
    category: "重點關注",
    title: "資安專家揭露 AWS 權限限制的盲點：即使實施隔離策略，攻擊者仍可利用多種服務進行重大破壞",
    summary: "本文分析了當帳號憑證（特別是 Root Key）外洩後，AWS Security 雖然會啟動「Quarantine Policy」來限制潛在傷害，但其權限控制機制存在嚴重盲點。作者指出，即使被隔離，攻擊者仍可利用多種服務進行破壞性行為，包括但不限於：透過 ssm:SendCommand 或 ssm:StartSession 在 EC2 實例上執行 Root 指令；使用 sts:AssumeRole 假設其他角色權限，繞過限制；在 RDS 上進行資料操作、刪除備份（如 DeleteDBSnapshot）；利用 S3 的 PutObject 權限塞入 PB 級別的垃圾數據，並啟用 COMPLIANCE-mode Object Lock 達到長期不可移除的保留狀態；此外，攻擊者還能透過 CloudTrail:StopLogging 和 DeleteTrail 清除所有稽核紀錄，使追蹤變得極為困難。總體而言，作者警告，僅依賴隔離策略無法完全阻止惡意行為，建議用戶必須對權限模型進行更全面的審查與加強。",
    tags: ["AWS", "Quarantine Policy", "Root Key", "IAM 權限管理", "S3 Object Lock", "CloudTrail"],
    title_en: "Cybersecurity Experts Reveal Blind Spots in AWS Permissions: Attackers Can Cause Major Damage Even with Isolation Policies",
    summary_en: "This article analyzes that even if an account credential (especially the Root Key) is leaked, while AWS Security initiates a \"Quarantine Policy\" to limit potential damage, its permission control mechanism has serious blind spots. The author points out that even when isolated, attackers can still perform destructive actions using various services, including but not limited to: executing root commands on EC2 instances via ssm:SendCommand or ssm:StartSession; assuming other role permissions using sts:AssumeRole to bypass restrictions; performing data manipulation or deleting backups on RDS (such as DeleteDBSnapshot); utilizing S3's PutObject permission to inject petabyte-scale garbage data, and enabling COMPLIANCE-mode Object Lock for long-term immutability; furthermore, attackers can clear all audit records using CloudTrail:StopLogging and DeleteTrail, making tracking extremely difficult. Overall, the author warns that relying solely on isolation policies cannot completely prevent malicious activity, advising users to conduct a more comprehensive review and strengthening of their permission model.",
    tags_en: ["AWS", "Quarantine Policy", "Root Key", "IAM Permissions Management", "S3 Object Lock", "CloudTrail"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/22/aws-security-makes-an-inscrutable-choice-corey-quinn/5291446", lang: "EN" }
    ]
  },
  {
    id: "20260821-057",
    trackers: ["os"],
    category: "重點關注",
    title: "Nvidia投資Cloverleaf，透過基礎設施佈局應對AI數據中心電力與散熱瓶頸",
    summary: "隨著人工智慧（AI）產業的爆炸性增長，Nvidia面臨的挑戰已從單純的晶片供應轉向整個生態系統的基礎建設問題。由於其下一代GPU（如Rubin世代）主要採用液冷式設計，數據中心對電力和散熱的要求極為嚴苛。文章指出，傳統空冷設施難以應對高密度的液冷需求，這迫使Nvidia必須擴大其影響力至基礎設施層面。\n\nNvidia近期成為Cloverleaf的少數股東，此舉旨在確保AI數據中心所需的土地、電力和基礎設施供應鏈穩定。此外，Nvidia推出的DSX平台提供了一套標準藍圖，用以規劃所需電力、散熱和空間配置，幫助客戶「正確尺寸化」部署。\n\n然而，最大的瓶頸仍是電網容量的不足。為了解決此問題，部分數據中心開始採用現場發電（如Nebius使用Bloom Energy的天然氣燃料電池）。Nvidia透過投資Cloverleaf並推動DSX標準，正利用其資金實質地介入整個AI基礎設施的建構流程，以確保客戶能夠順利部署下一代高功耗、液冷式計算資源。",
    tags: ["Nvidia", "Cloverleaf", "DSX平台", "AI數據中心", "液冷技術", "電力基礎設施"],
    title_en: "Nvidia invests in Cloverleaf to address power and cooling bottlenecks through infrastructure deployment",
    summary_en: "With the explosive growth of the Artificial Intelligence (AI) industry, Nvidia's challenges have shifted from merely chip supply to fundamental ecosystem infrastructure issues. Since its next-generation GPUs (such as the Rubin generation) primarily utilize liquid cooling designs, data centers face extremely stringent demands regarding power and cooling. The article points out that traditional air-cooling facilities struggle to meet high-density liquid cooling requirements, forcing Nvidia to expand its influence into the infrastructure layer. Nvidia recently became a minority shareholder in Cloverleaf, a move aimed at securing stable land, power, and supply chain resources necessary for AI data centers. Furthermore, the DSX platform launched by Nvidia provides a standardized blueprint for planning required power, cooling, and space configurations, helping customers 'right-size' their deployments. However, the biggest bottleneck remains insufficient grid capacity. To solve this problem, some data centers are adopting on-site generation (such as Nebius using Bloom Energy natural gas fuel cells). By investing in Cloverleaf and promoting the DSX standard, Nvidia is utilizing its capital to actively participate in the entire AI infrastructure construction process, ensuring customers can smoothly deploy next-generation high-power, liquid-cooled computing resources.",
    tags_en: ["Nvidia", "Cloverleaf", "DSX Platform", "AI Data Center", "Liquid Cooling Technology", "Power Infrastructure"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/08/22/cloverleaf-deal-is-latest-example-of-nvidia-using-its-war-chest-to-patch-cracks-in-the-ai-bubble/5291369", lang: "EN" }
    ]
  },
  {
    id: "20260821-058",
    trackers: ["os"],
    category: "重點關注",
    title: "報告指出 Salesforce 合作夥伴對 Agentforce AI 平台尚未看到實質營收，市場信心受考驗",
    summary: "根據 TD Cowen 的一份調查報告，Salesforce 的合作夥伴對於其推出的 AI 平台 Agentforce，在產品上市兩年後仍未感受到顯著的營收增長。該技術旨在協助用戶建立用於客戶互動的 AI 代理人（AI agents）。受訪的合作夥伴指出，雖然有部分人預期或開始看到購買和試用活動，但整體而言，Agentforce 並未能成為推動業務訂單的主要動力。\n\n此報告也觀察到，Salesforce 整個產品組合的商業增長趨勢疲軟。這與 Salesforce CEO Marc Benioff 在財報會議上對分析師所做的樂觀預期形成鮮明對比。Benioff 此前曾表示 Agentforce 的年經常性收入（ARR）已超過 10 億美元，並強調該平台能幫助企業應對 AI 代理人可能取代傳統軟體升級的需求。\n\n此外，KeyBanc Capital Markets 的報告也指出，客戶和合作夥伴認為企業數據尚未夠連貫，無法進行有意義的 AI 工作，且普遍不看好 Agentforce 這個產品本身。",
    tags: ["Salesforce", "Agentforce", "AI 平台", "CRM", "SaaS"],
    title_en: "Report indicates Salesforce partners have not seen substantial revenue from Agentforce AI platform, testing market confidence",
    summary_en: "According to a TD Cowen research report, two years after its launch, Salesforce's partners have not experienced significant revenue growth from the Agentforce AI platform. The technology is designed to help users build AI agents for customer interactions. Interviewed partners pointed out that while some anticipated or started seeing purchase and trial activities, overall, Agentforce has failed to become a primary driver of business orders.\n\nThe report also observed sluggish commercial growth trends across Salesforce's entire product portfolio. This contrasts sharply with the optimistic expectations set by Salesforce CEO Marc Benioff during earnings calls to analysts. Benioff had previously stated that Agentforce's Annual Recurring Revenue (ARR) exceeded $1 billion, emphasizing that the platform could help enterprises meet the demand for AI agents potentially replacing traditional software upgrades.\n\nFurthermore, a report from KeyBanc Capital Markets noted that customers and partners believe enterprise data is not yet cohesive enough to facilitate meaningful AI work, and generally remain skeptical of the Agentforce product itself.",
    tags_en: ["Salesforce", "Agentforce", "AI Platform", "CRM", "SaaS"],
    sources: [
      { name: "The Register", url: "https://theregister.com/saas/2026/08/21/salesforce-partners-not-seeing-meaningful-revenue-from-agentforce-ai-platform-report-says/5291167", lang: "EN" }
    ]
  },
  {
    id: "20260821-059",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 公司涉嫌「掃描後銷毀」實體書籍，倡議團體要求 FTC 介入調查知識壟斷",
    summary: "多個倡議組織已向美國聯邦貿易委員會（FTC）提出調查，指控大型 AI 公司如 Anthropic 和 Amazon 正在進行大規模的「掃描後銷毀」（scan-and-destroy）實體書籍操作。這些公司購買大量物理書籍用於訓練其 AI 模型，並在完成數位化後將原始書籍銷毀。此行為曾在訴訟文件（Bartz v. Anthropic PBC）中曝光，Anthropic 曾稱此內部代號為「Project Panama」。倡議團體指出，銷毀實物不僅能避免儲存成本，更可能構成反競爭行為，壟斷人類知識資源。\n\n雖然法律上存在「公平使用」（fair use）的爭議，但批評者認為這種做法阻止了其他 AI 開發者和公眾獲取這些非再生性資源。此外，協助進行此類交易的中介機構如 ISBNdb 也已開始撤回相關服務。倡議團體呼籲 FTC 介入調查，防止少數富裕的科技巨頭壟斷知識，從而影響民主化發展。",
    tags: ["Anthropic", "Amazon", "FTC", "AI 模型訓練", "知识产权", "Book Scanning"],
    title_en: "AI Companies Accused of 'Scan-and-Destroy' Physical Books; Advocacy Groups Call for FTC Investigation into Knowledge Monopoly",
    summary_en: "Multiple advocacy groups have filed investigations with the U.S. Federal Trade Commission (FTC), accusing major AI companies such as Anthropic and Amazon of engaging in large-scale 'scan-and-destroy' physical book operations. These companies purchase vast quantities of physical books for training their AI models, subsequently destroying the original texts after digitization. This practice was exposed in legal filings (Bartz v. Anthropic PBC), where Anthropic reportedly referred to the internal project code as 'Project Panama.' Advocacy groups argue that not only does the destruction save storage costs, but it may also constitute anti-competitive behavior and monopolize human knowledge resources.\n\nAlthough 'fair use' is a legal point of contention, critics believe this practice prevents other AI developers and the public from accessing these non-renewable resources. Furthermore, intermediary services assisting in such transactions, like ISBNdb, have begun withdrawing related services. The advocacy groups are calling for FTC intervention to prevent a few wealthy tech giants from monopolizing knowledge, thereby impeding democratic development.",
    tags_en: ["Anthropic", "Amazon", "FTC", "AI Model Training", "Intellectual Property", "Book Scanning"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/21/ai-companies-are-burning-books-advocates-complain-to-ftc/5291299", lang: "EN" }
    ]
  },
  {
    id: "20260821-060",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "SickKids醫院外網遭入侵：第三方軟體漏洞導致員工與求職者資料外洩",
    summary: "多倫多兒童醫院（Toronto’s Hospital for Sick Children，即 SickKids）宣布其外部招聘網站遭到入侵。此次事件是由於醫院使用的「第三方軟體應用程式」存在安全漏洞所致。受影響的範圍包括 SickKids、SickKids Foundation 以及位於安大略省 Vaughan 的 Boomerang 診所的現任及前員工，以及所有求職者。醫院強調，臨床系統和病患資訊並未受到影響，日常照護工作正常進行。雖然醫院尚未公開洩漏規模，但已主動向所有潛在受影響個體提供為期兩年的免費信用監控與身份保護服務。\n\n文章提及 SickKids 過去曾遭受 LockBit 勒索軟體攻擊（2022年），並成功恢復系統而拒絕支付贖金。本次事件的漏洞點是第三方應用程式，而非核心醫療系統。",
    tags: ["SickKids", "資料外洩", "第三方軟體", "安全漏洞", "身份保護"],
    title_en: "SickKids Hospital External Network Breached: Third-Party Software Vulnerability Leads to Employee and Applicant Data Leak",
    summary_en: "The Hospital for Sick Children (SickKids) in Toronto announced that its external recruitment website was compromised. The incident was caused by a security vulnerability within a 'third-party software application' used by the hospital. Affected parties include current and former employees of SickKids, the SickKids Foundation, and the Boomerang clinic located in Vaughan, Ontario, as well as all job applicants. The hospital emphasized that clinical systems and patient information were not affected, and daily care operations continued normally. Although the hospital has not disclosed the full extent of the leak, it proactively offered two years of free credit monitoring and identity protection services to all potentially affected individuals.\n\nThe article notes that SickKids previously suffered a LockBit ransomware attack in 2022 but successfully recovered its systems without paying a ransom. The vulnerability exploited in this incident was in a third-party application, not the core medical system.",
    tags_en: ["SickKids", "Data Leakage", "Third-Party Software", "Security Vulnerability", "Identity Protection"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/21/sickkids-childrens-hospital-bandages-up-careers-website-after-intruder-breaks-in/5291098", lang: "EN" }
    ]
  },
  {
    id: "20260821-061",
    trackers: ["os"],
    category: "重點關注",
    title: "駭客透過惡意 Rust 套件進行供應鏈攻擊，竊取開發者憑證與設備資料",
    summary: "本事件揭露了一起針對 Rust 生態系統的供應鏈攻擊。駭客將惡意程式碼植入多個流行的 Rust 套件中，利用這些套件在日常軟體建構過程中傳播到開發者的機器上。\n\n攻擊的核心是透過一個名為 proc-macro1 的偽造套件（typosquat），該套件的 build.rs 文件負責執行惡意行為。當使用 Rust 套件管理器 Cargo 編譯時，它會運行這些 build 腳本，使得駭客能夠識別開發者的作業系統和處理器架構（包括 Linux、Windows、Intel Macs 和 Apple Silicon Macs）。\n\n第二階段的惡意載荷極為複雜，不僅包含竊取 Google Chrome、Brave 和 Microsoft Edge 等 Chromium 瀏覽器資料（如使用者設定檔和擴充功能儲存區）的功能，還能建立持久性並接收來自攻擊者伺服器的指令。此外，駭客甚至利用了其他受信任的套件 arrayref 的新版本，將其作為依賴項引入。\n\nRust 開發團隊已警告開發者檢查 Cargo lockfiles 和本地快取，並刪除了多個相關套件（如 proc-macro-en, aovine 等），建議使用者提高警覺。雖然惡意套件在 crates.io 上停留的時間很短，但這次攻擊展示了透過軟體依賴關係鏈進行的嚴重威脅。",
    tags: ["Rust", "供應鏈攻擊", "crates.io", "proc-macro1", "Cargo", "憑證竊取"],
    title_en: "Hackers Conduct Supply Chain Attack Using Malicious Rust Package to Steal Developer Credentials and Device Data",
    summary_en: "This incident exposed a supply chain attack targeting the Rust ecosystem. Hackers injected malicious code into several popular Rust packages, which then propagated to developers' machines during routine software builds.\n\nThe core of the attack involved a fake package named proc-macro1 (a typosquat). The package's build.rs file was responsible for executing the malicious behavior. When compiling using the Rust package manager Cargo, these build scripts ran, allowing the attackers to identify the developer's operating system and processor architecture (including Linux, Windows, Intel Macs, and Apple Silicon Macs).\n\nThe second-stage malicious payload was highly sophisticated. It not only included functionality to steal data from Chromium browsers like Google Chrome, Brave, and Microsoft Edge (such as user profiles and extension storage) but also established persistence and received commands from an attacker's server. Furthermore, the hackers even exploited another trusted package, arrayref, by introducing a new version of it as a dependency.\n\nThe Rust development team has warned developers to check their Cargo lockfiles and local caches, and they have deleted several related packages (such as proc-macro-en and aovine), advising users to remain vigilant. Although the malicious packages were only on crates.io for a short time, this attack demonstrated a severe threat that can be executed through software dependency chains.",
    tags_en: ["Rust", "Supply Chain Attack", "crates.io", "proc-macro1", "Cargo", "Credential Theft"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/21/hackers-poison-popular-rust-crates-to-steal-developers-credentials/5291075", lang: "EN" }
    ]
  },
  {
    id: "20260821-062",
    trackers: ["os"],
    category: "重點關注",
    title: "市場分析：AMD持續搶佔PC與伺服器CPU市佔率，但高價位PC需求受記憶體短缺影響",
    summary: "根據 Mercury Research 的報告，2026 年第二季度整體處理器出貨量低於去年同期。主要原因包括 AMD 遊戲機業務下滑、以及筆記型電腦與桌上型 PC 市場的顯著需求下降。\n\n市場分析指出，高昂的 PC 價格和有限的 GPU 供應是導致桌上型 PC 和 CPU 需求的關鍵因素。這種價格上升源於晶片製造商將重點放在生產用於 AI 伺服器的更高頻寬記憶體（HBM）晶片，造成了消費者級 GPU 及記憶元件短缺。\n\n儘管整體市場承壓，AMD 在多個領域仍擴大了市佔率：在桌上型 CPU 市場，AMD 的出貨量雖然下降幅度小於 Intel，但其市佔率從去年的約 32% 上升至近 35%。此外，伺服器處理器出貨量年增 20%，AMD 的市佔率也從去年的 27.3% 上升到 34.5%。在行動晶片領域，AMD 的市佔率亦顯著提升。\n\nArm 架構的系統表現強勁，預計在客戶端市場佔比達到 15.3%，伺服器市場則達創紀錄的 13.6%。",
    tags: ["AMD", "Intel", "Mercury Research", "CPU", "AI 伺服器", "Arm 架構"],
    title_en: "Market Analysis: AMD Continues to Gain Market Share in PC and Server CPUs, But High-End PC Demand Affected by Memory Shortages",
    summary_en: "According to a Mercury Research report, overall processor shipments in Q2 2026 were lower than the same period last year. Key reasons include a decline in AMD's gaming console business and a noticeable drop in demand for both laptops and desktop PCs.\n\nMarket analysis points out that high PC prices and limited GPU supply are key factors driving down demand for desktops and CPUs. This price increase stems from chip manufacturers focusing on producing High Bandwidth Memory (HBM) chips for AI servers, leading to shortages of consumer-grade GPUs and memory components.\n\nDespite overall market pressure, AMD expanded its market share in several areas: In the desktop CPU market, while AMD's shipment decline was smaller than Intel's, its market share increased from approximately 32% last year to nearly 35%. Furthermore, with server processor shipments growing by 20% year-over-year, AMD's market share rose from 27.3% last year to 34.5%. AMD also saw a significant increase in its market share in the mobile chip sector.\n\nThe Arm architecture system performed strongly, projected to reach a client market share of 15.3% and a record-high server market share of 13.6%.",
    tags_en: ["AMD", "Intel", "Mercury Research", "CPU", "AI Servers", "Arm Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/08/21/amd-grabs-more-cpu-share-while-pricier-pcs-punish-desktop-demand/5291053", lang: "EN" }
    ]
  },
  {
    id: "20260821-063",
    trackers: ["os"],
    category: "重點關注",
    title: "GitHub連續發生服務中斷，CTO承認平台擴展性不足，承諾透過架構升級提升穩定性",
    summary: "本篇報導指出 GitHub 近期多次遭遇重大服務中斷事件，其中一次在 8 月 17 日持續了 7 小時 47 分鐘，影響開發者全球範圍的日常工作。受影響的服務包括 Actions、Pull requests、Issues、Copilot 和 API 等核心功能，顯示平台難以應對不斷增長的流量需求。GitHub CTO Vladimir Fedorov 承認，這些故障並非源於程式碼或配置變更，而是潛藏在平台底層的擴展性弱點。為了解決此問題，公司正加速將更多工作負載遷移至其母公司 Microsoft Azure 的雲端基礎設施，目標是建立一個能讓讀取容量與閱讀人數線性增長的架構。此外，GitHub 也承諾會隔離關鍵系統、收緊重試限制並增加流量激增的預警機制，以提升平台的可靠性。",
    tags: ["GitHub", "服務中斷", "擴展性", "Microsoft Azure", "DevOps"],
    title_en: "GitHub Experiences Repeated Outages; CTO Acknowledges Platform Scalability Issues and Commits to Architectural Upgrades for Improved Stability",
    summary_en: "This report highlights that GitHub has recently experienced multiple major service outages, including one on August 17th that lasted 7 hours and 47 minutes, disrupting the daily work of developers globally. Affected core services include Actions, Pull requests, Issues, Copilot, and APIs, indicating the platform's difficulty in handling continuously growing traffic demands. GitHub CTO Vladimir Fedorov acknowledged that these failures stem not from code or configuration changes, but from inherent scalability weaknesses within the platform's underlying architecture. To address this issue, the company is accelerating the migration of more workloads to its parent company Microsoft Azure cloud infrastructure, aiming to build an architecture where read capacity scales linearly with user growth. Furthermore, GitHub has committed to isolating critical systems, tightening retry limits, and enhancing surge detection mechanisms to improve overall platform reliability.",
    tags_en: ["GitHub", "Service Outage", "Scalability", "Microsoft Azure", "DevOps"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/08/21/we-let-you-down-github-pledges-to-scale-up-before-developers-give-up/5291031", lang: "EN" }
    ]
  },
  {
    id: "20260821-064",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "網路釣魚工具包 iAuthFlow v2 聲稱可植入惡意 Passkeys，威脅帳戶持久性存取",
    summary: "一個在俄語網路犯罪論壇上販售的網路釣魚工具包 iAuthFlow v2，聲稱能夠在受害帳戶中註冊攻擊者控制的 passkey。這類技術旨在解決傳統防禦措施（如撤銷 session tokens 或輪換密碼）可能失效的問題，確保攻擊者即使在用戶更改密碼後仍能維持持久性存取權限。\n\n根據 Abnormal Security 的分析，該工具包採用了瀏覽器中間人 (BitM) 攻擊模型。受害者會在一個偽造的釣魚頁面完成登入流程，而 iAuthFlow v2 在攻擊者伺服器上運行獨立的瀏覽器會話來處理身份驗證。在成功完成認證後，工具包能夠控制已驗證的瀏覽器會話，並利用它來註冊一個惡意 passkey。\n\n這使得攻擊者可以在用戶不知情的情況下植入新的憑證，即使用戶執行了密碼重設或登出操作，該 passkey 仍能保持有效。專家警告，組織在調查帳戶被入侵時，除了進行密碼重置外，還必須全面檢查是否有新增的 rogue passkeys、OAuth 授權、恢復方法和郵件轉發規則等後續變更，將帳戶復原視為一次全面的安全調查。",
    tags: ["iAuthFlow v2", "Passkey", "網路釣魚", "BitM 攻擊", "OAuth", "資安工具包"],
    title_en: "iAuthFlow v2 Phishing Toolkit Claims Ability to Implant Malicious Passkeys, Threatening Persistent Account Access",
    summary_en: "A phishing toolkit called iAuthFlow v2, sold on a Russian cybercrime forum, claims the ability to register attacker-controlled passkeys within victim accounts. This technique aims to circumvent traditional defensive measures (such as revoking session tokens or rotating passwords), ensuring that attackers maintain persistent access even after the user changes their password.\n\nAccording to analysis by Abnormal Security, the toolkit utilizes a Browser Man-in-the-Middle (BitM) attack model. The victim completes the login process on a fabricated phishing page, while iAuthFlow v2 runs an independent browser session on the attacker's server to handle authentication. After successfully completing the authentication, the toolkit can control the authenticated browser session and use it to register a malicious passkey.\n\nThis allows attackers to implant new credentials without the user's knowledge; even if the user performs a password reset or logs out, the passkey remains valid. Experts warn that when investigating account compromise, organizations must thoroughly check for subsequent changes—such as newly added rogue passkeys, OAuth grants, recovery methods, and email forwarding rules—in addition to performing a simple password reset, treating account restoration as a comprehensive security investigation.",
    tags_en: ["iAuthFlow v2", "Passkey", "Phishing", "BitM Attack", "OAuth", "Security Toolkit"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/21/10k-phishing-kit-claims-it-can-plant-rogue-passkeys-for-persistent-access-to-pwned-accounts/5291006", lang: "EN" }
    ]
  },
  {
    id: "20260821-065",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟推出新功能，讓 Outlook 網頁版與新版 Windows Outlook 可調整外觀，模擬經典版介面",
    summary: "為協助用戶平穩過渡至新平台，Microsoft 發布了一項設定，允許在 Outlook on the Web 和 New Outlook for Windows 中透過主題調整視覺風格和佈局，使其看起來更接近 Classic Outlook。此更新旨在提供一個更熟悉的體驗，同時保留新版 Outlook 的功能性。\n\n然而，文章指出這僅是外觀上的模擬，並非恢復經典版的全部功能。例如，New Outlook 在離線能力方面仍與前身有差距；雖然已可匯入 .pst 檔案的日曆和聯絡人，但完整的支援仍需時日。此外，企業工作流程常用的應用程式框架（如 COM add-ins）在 New Outlook 中將無法出現。\n\n此功能預計於九月底完成目標發布，並計畫在九月下旬至十月底間在全球範圍內開放使用。這項變動是 Microsoft 逐步引導用戶離開 Classic Outlook 的最新嘗試。儘管過程不會迅速，Microsoft 已承諾至少給予管理員 12 個月的通知期，並且將持續提供支援直到至少 2029 年。",
    tags: ["Microsoft", "Outlook", "New Outlook", "Classic Outlook", "Windows", "使用者體驗"],
    title_en: "Microsoft introduces new feature allowing Outlook Web and New Outlook for Windows to customize appearance, simulating the classic interface",
    summary_en: "To assist users in smoothly transitioning to the new platform, Microsoft has released a setting that allows visual styles and layouts within Outlook on the Web and New Outlook for Windows to be adjusted via themes, making them appear closer to Classic Outlook. This update aims to provide a more familiar experience while retaining the functionality of the new Outlook. However, the article points out that this is merely an aesthetic simulation and does not restore all the features of the classic version. For instance, New Outlook still lags behind its predecessor in offline capabilities; although it can import calendars and contacts from .pst files, full support will take time. Furthermore, application frameworks commonly used for enterprise workflows (such as COM add-ins) will not be available in New Outlook. This feature is expected to reach its target release by the end of September and is planned for global availability between late September and late October. This change represents Microsoft's latest effort to gradually guide users away from Classic Outlook. Although the process will not be quick, Microsoft has committed to providing administrators with at least a 12-month notice period and continuous support until at least 2029.",
    tags_en: ["Microsoft", "Outlook", "New Outlook", "Classic Outlook", "Windows", "User Experience"],
    sources: [
      { name: "The Register", url: "https://theregister.com/applications/2026/08/21/microsoft-lets-you-swap-new-outlooks-looks-with-the-face-of-outlook-classic/5290948", lang: "EN" }
    ]
  },
  {
    id: "20260821-066",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "微軟修補 Entra ID 嚴重漏洞：未經身份驗證即可遠端執行程式碼",
    summary: "本篇報導指出，Microsoft 修復了一個在 Entra ID（原名 Azure Active Directory）中的高風險安全漏洞。該漏洞被追蹤為 CVE-2026-69836，CVSS 評分為滿分 10.0。此缺陷允許未經身份驗證的攻擊者透過網路執行程式碼，對微軟雲端身分識別服務造成嚴重威脅。\n\n根據 Microsoft 的說明，該漏洞源於不安全的資料反序列化（unsafe deserialization），即軟體在重建來自不可信來源的數據時，未能充分進行驗證。攻擊者無需帳號，且不需要誘騙使用者點擊或執行任何操作即可利用此弱點。\n\n然而，Microsoft 隨後發布公告指出，該漏洞已由公司內部修復並完全緩解，因此客戶端無需部署任何補丁或採取額外行動。由於 Entra ID 是微軟運營的雲服務，微軟可以直接修復其基礎設施。",
    tags: ["Microsoft", "Entra ID", "CVE-2026-69836", "Azure Active Directory", "不安全反序列化", "雲端身份識別"],
    title_en: "Microsoft Patches Critical Entra ID Vulnerability Allowing Unauthenticated Remote Code Execution",
    summary_en: "This report indicates that Microsoft has patched a high-risk security vulnerability in Entra ID (formerly Azure Active Directory). The flaw, tracked as CVE-2026-69836 and scoring a perfect 10.0 on the CVSS scale, allows unauthenticated attackers to execute code remotely over the network, posing a severe threat to Microsoft's cloud identity service.\n\nAccording to Microsoft's explanation, the vulnerability stemmed from unsafe deserialization, where the software failed to adequately validate data reconstructed from untrusted sources. Attackers could exploit this weakness without needing an account or tricking users into clicking or executing anything.\n\nHowever, Microsoft later issued a notice stating that the vulnerability had been internally patched and fully mitigated by the company, meaning customers do not need to deploy any patches or take additional action. Since Entra ID is a cloud service operated by Microsoft, Microsoft could directly remediate its underlying infrastructure.",
    tags_en: ["Microsoft", "Entra ID", "CVE-2026-69836", "Azure Active Directory", "Unsafe Deserialization", "Cloud Identity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/21/microsoft-sounds-alarm-over-perfect-10-entra-id-flaw/5290925", lang: "EN" }
    ]
  },
  {
    id: "20260821-067",
    trackers: ["os"],
    category: "重點關注",
    title: "Wi-Fi 7與WPA3相容性挑戰：CableLabs呼籲硬體製造商優先支援RSNO機制",
    summary: "隨著Wi-Fi 7技術的普及，業界正面臨一個重大的互通性問題。根據網路研究機構 CableLabs 的警告，讓 Wi-Fi 7 無線基地台（access point）兼容舊設備時，可能會產生新的相容性困境。\n\n核心問題在於 WPA3 安全標準的強制採用。Wi-Fi Alliance 在 6 GHz 頻段要求使用 WPA3。雖然 WPA3 本身並非新技術，但 Wi-Fi 7 的部署使得舊設備（如基於 Wi-Fi 5 或 Wi-Fi 4 硬體的裝置）難以順利連接。\n\n為了解決此問題，Wi-Fi Alliance 設計了 WPA3-Personal Compatibility Mode (PCM)，它利用 Robust Security Network Override (RSNO) 元素將安全資訊進行調整。然而，這種新機制要求客戶端設備必須支援 RSNO 元素才能在 Wi-Fi 7 模式下正常運作。\n\nCableLabs 強調，由於許多現有設備缺乏對 RSNO 的支援，若未正確處理相容性，消費者可能會升級到 Wi-Fi 7 路由器後發現部分舊設備無法連接，導致混亂和增加客服負擔。因此，機構呼籲晶片供應商和 Wi-Fi 7 硬體製造商必須將支援 RSNO 機制的能力列為開發的優先事項。",
    tags: ["Wi-Fi 7", "WPA3", "CableLabs", "RSNO", "互通性", "無線網路"],
    title_en: "Wi-Fi 7 and WPA3 Compatibility Challenges: CableLabs Urges Hardware Manufacturers to Prioritize RSNO Support",
    summary_en: "As Wi-Fi 7 technology becomes more widespread, the industry faces a significant interoperability challenge. According to warnings from network research organization CableLabs, allowing Wi-Fi 7 wireless access points (APs) to be compatible with older devices may create new compatibility dilemmas.\nThe core issue revolves around the mandatory adoption of the WPA3 security standard. The Wi-Fi Alliance requires WPA3 usage in the 6 GHz band. Although WPA3 itself is not a new technology, the deployment of Wi-Fi 7 makes it difficult for older equipment (such as devices based on Wi-Fi 5 or Wi-Fi 4 hardware) to connect smoothly.\nTo address this issue, the Wi-Fi Alliance designed the WPA3-Personal Compatibility Mode (PCM), which adjusts security information using the Robust Security Network Override (RSNO) element. However, this new mechanism requires client devices to support the RSNO element to operate normally in Wi-Fi 7 mode.\nCableLabs emphasizes that because many existing devices lack support for RSNO, improper handling of compatibility could lead to consumers upgrading to Wi-Fi 7 routers only to find that some older equipment cannot connect, causing confusion and increasing customer service load. Therefore, the organization urges chip suppliers and Wi-Fi 7 hardware manufacturers to list supporting the RSNO mechanism as a development priority.",
    tags_en: ["Wi-Fi 7", "WPA3", "CableLabs", "RSNO", "Interoperability", "Wireless Network"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/08/21/wi-fi-7s-wpa3-protections-come-with-a-compatibility-catch/5289614", lang: "EN" }
    ]
  },
  {
    id: "20260821-068",
    trackers: ["os"],
    category: "重點關注",
    title: "探討歷史悠久的作業系統：Debian 33週年與 Haiku OS 的持續發展",
    summary: "本文回顧了兩款具有深厚歷史的作業系統專案——Debian 和 Haiku OS。Debian 在文章發布前週末迎來了成立 33 週年的里程碑，展現出其作為一個廣泛使用的 Linux 發行版持續蓬勃發展的生命力。\n\n另一方面，Haiku OS 是一個自 2001 年啟動、旨在重建 BeOS 的全新作業系統。儘管經過二十五年開發，它仍未發布 Haiku OS 1.0 版本。該系統採用 C++ 編寫，並具備與 BeOS 二進制兼容性。目前，Haiku 專案持續進行技術進步，包括 PowerPC 和 Arm64 等架構的移植工作。\n\n此外，文章也介紹了幾個相關的項目：Cosmoe（一個跨平台、源自 BeOS 的程式工具包）和 VitruvianOS (V)，後者是將 BeOS 桌面移植到 Linux 核心上的專案。這些專案展示了獨立於傳統 OS 生態系統的創新可能性，特別是在顯示伺服器方面，它們試圖避開 X11 與 Wayland 的爭議，採用基於 BeOS 設計的新架構。",
    tags: ["Debian", "Haiku OS", "BeOS", "Linux", "作業系統"],
    title_en: "Exploring Historic Operating Systems: Debian's 33rd Anniversary and the Continued Development of Haiku OS",
    summary_en: "This article reviews two historically significant operating system projects: Debian and Haiku OS. Debian recently reached the milestone of its 33rd anniversary over the preceding weekend, demonstrating its continued vitality as a widely used Linux distribution. On the other hand, Haiku OS is a modern operating system designed to rebuild BeOS, which began development in 2001. Despite twenty-five years of development, it has yet to release Haiku OS 1.0. The system is written in C++ and features binary compatibility with BeOS. Currently, the Haiku project continues technical advancements, including porting work for architectures such as PowerPC and Arm64. Furthermore, the article introduces several related projects: Cosmoe (a cross-platform programming toolkit derived from BeOS) and VitruvianOS (V), which is a project that ports the BeOS desktop onto the Linux kernel. These projects showcase innovative possibilities independent of traditional OS ecosystems, particularly in display servers, as they attempt to bypass the X11 vs. Wayland debate by adopting new architectures designed around BeOS.",
    tags_en: ["Debian", "Haiku OS", "BeOS", "Linux", "Operating System"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/08/21/debian-is-33-haiku-is-25-and-neither-is-standing-still/5290144", lang: "EN" }
    ]
  },
  {
    id: "20260821-069",
    trackers: ["security"],
    category: "產業動態",
    title: "Check Point揭露大型殭屍網路「StopAndProtect」：利用WordPress漏洞進行遠端代碼執行攻擊",
    summary: "全球資安公司Check Point揭露了一個名為「StopAndProtect」的大型網路犯罪集團。該集團利用了數千個已過時、缺乏安全補丁的WordPress網站，將其作為殭屍網路基礎設施。攻擊者透過利用WordPress和外掛的漏洞，佔領這些網站作為惡意程式散播地、C2命令控制伺服器和竊取資料儲存區。入侵手法包括「ClickFix」，即欺騙網站訪客看到偽造的CAPTCHA驗證畫面，進而誘使他們直接執行惡意的PowerShell指令。一旦設備感染，會分階段安裝包括勒索軟體、SMB/USB蠕蟲、螢幕鎖定器和資訊竊取器在內的六種模組化惡意工具。特別值得注意的是，資訊竊取惡意程式能在使用者離開時自動搜尋WhatsApp聯絡人，並秘密擷取螢幕畫面和對話紀錄。攻擊者透過植入強制自動執行的「MU-Plugin」來取得遠端代碼執行（RCE）權限，並能清除入侵痕跡。他們使用自製的網站管理程式（fMain.frm）從中央伺服器遠端控制分散的殭屍網路。截至7月，全球超過6000個IP位址受此攻擊影響。資安專家建議警惕在瀏覽器外部引導指令複製貼上的異常CAPTCHA畫面。",
    tags: ["Check Point", "WordPress", "StopAndProtect", "殭屍網路", "RCE", "PowerShell", "惡意程式"],
    title_en: "Check Point Uncovers Large Botnet Named 'StopAndProtect': Exploiting WordPress Vulnerabilities for Remote Code Execution Attacks",
    summary_en: "Global cybersecurity firm Check Point has uncovered a large cybercrime group named 'StopAndProtect.' This group utilizes thousands of outdated, unpatched WordPress websites as botnet infrastructure. Attackers exploit vulnerabilities in WordPress and its plugins to seize these sites for malicious code distribution, Command and Control (C2) servers, and data storage. The infection method includes 'ClickFix,' which deceives website visitors into seeing a fake CAPTCHA verification screen, thereby tricking them into executing malicious PowerShell commands. Once a device is infected, it installs six modular malicious tools, including ransomware, SMB/USB worms, screen lockers, and information stealers. Notably, the information stealer malware can automatically search WhatsApp contacts when the user leaves and secretly capture screen recordings and chat history. Attackers gain Remote Code Execution (RCE) privileges by implanting a forced, automatically executing 'MU-Plugin,' which also allows them to clean up their tracks. They use a custom website administration program (fMain.frm) to remotely control the distributed botnet from a central server. As of July, over 6,000 IP addresses globally have been affected by this attack. Cybersecurity experts advise caution regarding unusual CAPTCHA screens that prompt instructions to be copied and pasted outside the browser.",
    tags_en: ["Check Point", "WordPress", "StopAndProtect", "Botnet", "RCE", "PowerShell", "Malware"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145308", lang: "EN" }
    ]
  }
];
