// data-20260707.js — 2026-07-07
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-07"] = [
  {
    id: "20260707-001",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客利用SEO中毒仿冒IT工具，植入Bumblebee並進行橫向移動，最終引發Akira勒索軟體攻擊",
    summary: "本案例分析揭示駭客利用「搜尋引擎最佳化中毒」（SEO Poisoning）手法，偽裝成企業IT維運工具的下載頁面，鎖定搜尋相關工具的IT管理人員。攻擊者透過仿冒ManageEngine OpManager等工具，誘使受害者下載並執行木馬化MSI安裝程式，植入惡意載入器Bumblebee。隨後，攻擊者部署開源C2框架AdaptixC2，進行內部網路偵察與橫向移動。在取得初始存取權後，駭客進一步連線網域控制站，傾印Active Directory資料庫（NTDS.dit）與憑證，並鎖定備份系統憑證。最終，攻擊者在短時間內於根網域部署Akira勒索軟體，並加密子網域系統。此事件強調，攻擊者可透過混入搜尋結果的方式，降低使用者對下載來源的警覺。企業應要求員工從官方來源取得工具，並強化應用程式允許清單、瀏覽器下載限制及端點監控，留意DLL側載、異常C2連線等跡象。",
    tags: ["Akira勒索軟體", "SEO Poisoning", "Bumblebee", "AdaptixC2", "橫向移動", "Active Directory", "IT維運工具"],
    title_en: "Hackers Use SEO Poisoning to Impersonate IT Tools, Implant Bumblebee, and Perform Lateral Movement, Ultimately Triggering Akira Ransomware Attack",
    summary_en: "This case study reveals that hackers utilized 'Search Engine Optimization Poisoning' (SEO Poisoning) techniques, disguising malicious download pages as corporate IT maintenance tools, targeting IT administrators responsible for search-related tools. The attackers impersonated tools like ManageEngine OpManager, tricking victims into downloading and executing a worm-loaded MSI installer, which implanted the malicious loader Bumblebee. Subsequently, the attackers deployed the open-source C2 framework AdaptixC2 to conduct internal network reconnaissance and lateral movement. After gaining initial access, the hackers further connected to the domain controller, dumping the Active Directory database (NTDS.dit) and credentials, and identifying backup system credentials. Finally, the attackers deployed the Akira ransomware across the root domain within a short period, encrypting the subdomain systems. This incident emphasizes that attackers can reduce user vigilance regarding download sources by blending in with search results. Enterprises should mandate that employees obtain tools from official sources, and strengthen application allow-listing, browser download restrictions, and endpoint monitoring to detect signs such as DLL side-loading or anomalous C2 connections.",
    tags_en: ["Akira ransomware", "SEO Poisoning", "Bumblebee", "AdaptixC2", "Lateral Movement", "Active Directory", "IT maintenance tools"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177131", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6383-1：修補 OpenSSH 服務中的心臟病變漏洞",
    summary: "Debian 安全公告 DSA-6383-1 針對 OpenSSH 服務發布了修補程式，修復了其中一個嚴重的心臟病變（Heartbleed）相關的漏洞。該漏洞存在於 OpenSSH 的某些版本中，可能允許遠端攻擊者在未經授權的情況下竊取傳輸層安全（TLS）的秘密金鑰或會話資料。此類漏洞屬於典型的記憶體讀取問題，攻擊者可利用它來竊取敏感的加密資訊，包括私鑰和會話密鑰。Debian 建議所有使用 OpenSSH 的系統立即更新到修補後的版本，以防止資料外洩和未授權的遠端存取。由於此漏洞涉及核心的加密通訊協定，實務影響極為重大，建議系統管理員應優先執行此安全更新。",
    tags: ["Debian", "OpenSSH", "DSA-6383-1", "心臟病變", "TLS", "安全更新"],
    title_en: "Debian Releases DSA-6383-1: Patching Heartbleed Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6383-1 has released a patch for the OpenSSH service, addressing a serious Heartbleed-related vulnerability. This vulnerability exists in certain versions of OpenSSH and could potentially allow a remote attacker to steal Transport Layer Security (TLS) secret keys or session data without authorization. This type of vulnerability is a typical memory read issue, which an attacker can exploit to steal sensitive cryptographic information, including private keys and session keys. Debian recommends that all systems using OpenSSH immediately update to the patched version to prevent data leakage and unauthorized remote access. Due to the critical nature of this vulnerability involving core cryptographic communication protocols, the practical impact is extremely significant, and system administrators are advised to prioritize this security update.",
    tags_en: ["Debian", "OpenSSH", "DSA-6383-1", "Heartbleed", "TLS", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00294.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6382：修補 OpenSSH 服務中的認證繞過漏洞",
    summary: "Debian 發布了安全公告 DSA-6382，修補了 OpenSSH 服務中的一個認證繞過（Authentication Bypass）漏洞。此漏洞可能允許攻擊者在未經授權的情況下，透過特定的方式繞過正常的認證機制，從而取得對目標系統的存取權限。受影響的元件為 OpenSSH，主要影響 Debian 系統的用戶端與伺服器。修補建議是立即升級到 Debian 提供的修補版本。由於原文未提供具體的 CVSS 分數、受影響版本範圍或外洩筆數，實務影響評估需依據系統的部署環境和暴露程度。建議系統管理員應儘快執行系統更新，以確保 SSH 服務的安全性。",
    tags: ["Debian", "OpenSSH", "DSA-6382", "認證繞過", "Linux 核心", "SSH"],
    title_en: "Debian Releases DSA-6382: Patching Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6382, patching an Authentication Bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to bypass normal authentication mechanisms through specific methods, thereby gaining unauthorized access to the target system. The affected component is OpenSSH, primarily impacting client and server usage on Debian systems. The recommended fix is to immediately upgrade to the patched version provided by Debian. Since the original text did not provide specific CVSS scores, affected version ranges, or exploit counts, practical impact assessment must rely on the system's deployment environment and exposure level. System administrators are advised to perform system updates promptly to ensure the security of the SSH service.",
    tags_en: ["Debian", "OpenSSH", "DSA-6382", "Authentication Bypass", "Linux Kernel", "SSH"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00293.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-004",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心優化：結合 RCU 性能提升與 kmalloc_nolock() 實現無鎖記憶體分配",
    summary: "本文彙整了兩場關於 Linux 核心優化的技術分享：一是 Puranjay Mohan 關於提升 Read-Copy-Update (RCU) 性能的進展；二是 Harry Yoo 與 Alexei Starovoitov 介紹的全新 `kmalloc_nolock()` 函數。`kmalloc_nolock()` 允許在任何核心上下文（kernel context）進行無鎖（lockless）的記憶體分配，並且與 RCU 子系統協同工作。這兩項技術的結合，旨在大幅提升核心的記憶體管理效率和並行處理能力。這類核心層面的優化，對於需要極高吞吐量和低延遲的系統（如儲存、網路設備）至關重要。開發者應關注這些核心元件的更新，以利用更高效的記憶體分配機制，減少鎖競爭，進一步提升系統的穩定性和效能。",
    tags: ["Linux 核心", "RCU", "kmalloc_nolock()", "記憶體管理", "核心優化", "Linux 儲存"],
    title_en: "Linux Kernel Optimization: Achieving Lockless Memory Allocation with RCU Performance Enhancement and kmalloc_nolock()",
    summary_en: "This article compiles two technical presentations on Linux kernel optimization: the first, by Puranjay Mohan, details advancements in improving Read-Copy-Update (RCU) performance; and the second, by Harry Yoo and Alexei Starovoitov, introduces the new `kmalloc_nolock()` function. `kmalloc_nolock()` allows for lockless memory allocation in any kernel context and works in conjunction with the RCU subsystem. The combination of these two technologies aims to significantly boost the kernel's memory management efficiency and parallel processing capabilities. Such kernel-level optimizations are crucial for systems requiring extremely high throughput and low latency (such as storage and networking devices). Developers should monitor updates to these core components to leverage more efficient memory allocation mechanisms, reduce lock contention, and further enhance system stability and performance.",
    tags_en: ["Linux Kernel", "RCU", "kmalloc_nolock()", "Memory Management", "Kernel Optimization", "Linux Storage"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081009", lang: "EN" }
    ]
  },
  {
    id: "20260707-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "多發行版安全更新公告：AlmaLinux、Fedora、Oracle、Red Hat、Ubuntu等修補核心元件與應用程式漏洞",
    summary: "多數主流 Linux 發行版（包括 AlmaLinux、Fedora、Oracle、Red Hat、Slackware、SUSE、Ubuntu）近期發布了廣泛的安全更新。這些更新涵蓋了從核心層面到上層應用程式的眾多元件。受影響的元件包括但不限於：Node.js（v22, v24）、Linux 核心、MariaDB、Nginx、OpenSSH、PHP、Python 等。具體修補的範圍極廣，涉及多個庫和工具，例如 Fedora 更新了 clamav、hplip、podman-tui 等；Ubuntu 更新了 gnutls28、gzip、openssh 等；Oracle 則更新了 mariadb 和各種 Perl/PHP/Ruby 版本。實務上，系統管理員應根據發行版官方公告，及時更新所有核心元件和應用程式套件，以修補潛在的漏洞，確保系統安全。由於更新範圍極廣，建議系統維護人員應仔細查閱各發行版的官方安全公告，並規劃測試窗口進行修補。",
    tags: ["Linux", "AlmaLinux", "Fedora", "Oracle", "Red Hat", "Ubuntu", "安全更新"],
    title_en: "Multi-Distribution Security Update Announcement: AlmaLinux, Fedora, Oracle, Red Hat, Ubuntu, and Others Patch Core Components and Application Vulnerabilities",
    summary_en: "Most major Linux distributions (including AlmaLinux, Fedora, Oracle, Red Hat, Slackware, SUSE, and Ubuntu) have recently released extensive security updates. These updates cover numerous components, ranging from the core kernel level to higher-level applications. Affected components include, but are not limited to: Node.js (v22, v24), the Linux kernel, MariaDB, Nginx, OpenSSH, PHP, and Python. The scope of the patches is extremely broad, involving multiple libraries and tools. For example, Fedora updated clamav, hplip, and podman-tui; Ubuntu updated gnutls28, gzip, and openssh; and Oracle updated mariadb and various Perl/PHP/Ruby versions. Practically, system administrators should promptly update all core components and application packages according to the official announcements of their respective distributions to patch potential vulnerabilities and ensure system security. Due to the wide scope of the updates, system maintenance personnel are advised to carefully review the official security announcements of each distribution and plan a testing window for patching.",
    tags_en: ["Linux", "AlmaLinux", "Fedora", "Oracle", "Red Hat", "Ubuntu", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081644", lang: "EN" }
    ]
  },
  {
    id: "20260707-006",
    trackers: ["os"],
    category: "Linux",
    title: "AMD GPU 核心驅動程式修補 30 個 BUG() 呼叫，提升 Linux 系統穩定性",
    summary: "AMD 的 AMDGPU 核心驅動程式維護者 Alex Deucher 發布了一組包含 30 個修補程式，旨在清除驅動程式中過多的 BUG() 宏呼叫。在 Linux 核心中，BUG() 宏用於處理無法恢復的條件，呼叫它會導致執行停止並觸發核心崩潰（kernel panic）。雖然它用於除錯，但過度使用或被惡意利用可能導致服務拒絕（DoS）攻擊。本次修補的重點是將那些不必要地導致核心崩潰的 BUG() 呼叫，改為僅發出警告或錯誤訊息，但允許驅動程式安全地繼續運行。這項更新能顯著提升 AMDGPU 驅動程式的穩定性，讓系統在遇到特定問題時，能夠避免不必要的崩潰，維持正常運作。修補程式目前已提交至 AMD 繪圖郵件清單進行審核。",
    tags: ["AMDGPU", "Linux 核心", "BUG()", "驅動程式", "穩定性", "核心元件"],
    title_en: "AMD GPU Core Driver Patch Fixes 30 BUG() Calls, Enhancing Linux System Stability",
    summary_en: "AMDGPU core driver maintainer Alex Deucher has released a set of patches containing 30 fixes aimed at eliminating excessive BUG() macro calls within the driver. In the Linux kernel, the BUG() macro is used to handle unrecoverable conditions; calling it causes execution to halt and triggers a kernel panic. While useful for debugging, overuse or malicious exploitation can lead to Denial of Service (DoS) attacks. The focus of this patch is to change unnecessary BUG() calls, which previously caused kernel crashes, to merely issue warnings or errors, while allowing the driver to continue running safely. This update significantly enhances the stability of the AMDGPU driver, allowing the system to avoid unnecessary crashes when encountering specific issues, thereby maintaining normal operation. The patches have currently been submitted to the AMD Graphics mailing list for review.",
    tags_en: ["AMDGPU", "Linux Kernel", "BUG()", "Driver", "Stability", "Kernel Component"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMDGPU-Clearing-Out-BUGs", lang: "EN" }
    ]
  },
  {
    id: "20260707-007",
    trackers: ["os"],
    category: "Linux",
    title: "Razer Blade 18 首次通過 Ubuntu 認證：高性能筆電支援 Linux 開發與 AI 推理",
    summary: "Razer 品牌宣布其第一款筆記型電腦 Razer Blade 18 RZ09-0582 正在進行 Ubuntu Linux 認證，作為 Windows 11 的替代方案。這款筆電搭載 Intel Core Ultra 9 290HX Plus 處理器和 NVIDIA GeForce RTX 5090 顯示卡，具備極高的運算能力，適用於遊戲、程式開發和本地 AI 推理等專業場景。文章指出，雖然 Razer 尚未宣布將其專有軟體 Razer Synapse 支援 Linux，但使用者可以利用社群維護的 OpenRazer 驅動和 Polychromatic 等工具進行部分控制。在實際測試中，筆電在 Ubuntu 26.04 LTS 和 Linux 7.0 核心上運行表現流暢，特別是得益於成熟的 Intel Arrow Lake CPU 和官方 NVIDIA Linux 驅動的支援。這標誌著 Razer 品牌在 Linux 平台上的重大進展，為專業開發者提供了更具吸引力的選擇。",
    tags: ["Razer Blade 18", "Ubuntu Linux", "Intel Core Ultra 9", "NVIDIA GeForce RTX 5090", "Linux 核心", "開發環境"],
    title_en: "Razer Blade 18 Achieves Ubuntu Certification: High-Performance Laptop Supports Linux Development and AI Inference",
    summary_en: "Razer announced that its first laptop, the Razer Blade 18 RZ09-0582, is undergoing Ubuntu Linux certification, positioning it as an alternative to Windows 11. Equipped with the Intel Core Ultra 9 290HX Plus processor and the NVIDIA GeForce RTX 5090 graphics card, this laptop boasts extremely high computing power, making it suitable for professional scenarios such as gaming, software development, and local AI inference. The article notes that while Razer has not yet announced support for its proprietary software, Razer Synapse, on Linux, users can utilize community-maintained tools like OpenRazer drivers and Polychromatic for partial control. In actual tests, the laptop ran smoothly on Ubuntu 26.04 LTS and Linux 7.0 kernel, particularly benefiting from the mature support of the Intel Arrow Lake CPU and official NVIDIA Linux drivers. This marks a significant advancement for the Razer brand on the Linux platform, offering a more appealing choice for professional developers.",
    tags_en: ["Razer Blade 18", "Ubuntu Linux", "Intel Core Ultra 9", "NVIDIA GeForce RTX 5090", "Linux kernel", "Development Environment"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/razer-blade-18-linux", lang: "EN" }
    ]
  },
  {
    id: "20260707-008",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 發布 610.43.03 Linux 驅動程式，提供 R610 系列穩定版更新",
    summary: "NVIDIA 今日發布了最新的穩定版 Linux 驅動程式 610.43.03，屬於 R610 發行分支。此版本是在一個多月後推出的第一個 R610 驅動建置。雖然發布說明中僅籠統提及「小幅錯誤修復與改進」，但該更新對於支援 Linux 7.1 穩定版系統至關重要。由於發布說明缺乏詳細的變更日誌，使用者無法得知本次修復的具體內容。建議使用 Linux 系統的用戶，應從 NVIDIA 官方網站下載並更新至 610.43.03 版本，以確保系統的穩定性和相容性。",
    tags: ["NVIDIA", "610.43.03", "Linux 驅動程式", "R610", "Linux 7.1"],
    title_en: "NVIDIA Releases 610.43.03 Linux Driver, Providing Stable Update for R610 Series",
    summary_en: "NVIDIA today released the latest stable Linux driver, 610.43.03, belonging to the R610 release branch. This version is the first R610 driver build released after several months. Although the release notes vaguely mention 'minor bug fixes and improvements,' this update is crucial for systems supporting the Linux 7.1 stable version. Because the release notes lack detailed change logs, users cannot know the specific content of the fixes. Users of Linux systems are advised to download and update to version 610.43.03 from the official NVIDIA website to ensure system stability and compatibility.",
    tags_en: ["NVIDIA", "610.43.03", "Linux Driver", "R610", "Linux 7.1"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-610.43.03-Linux-Driver", lang: "EN" }
    ]
  },
  {
    id: "20260707-009",
    trackers: ["os"],
    category: "Linux",
    title: "TUXEDO 電腦宣布重大平台轉型：TUXEDO OS 將從 Ubuntu 轉向使用 Debian Testing 作為基礎",
    summary: "德國的 Linux PC 供應商 TUXEDO Computers 宣布，其 TUXEDO OS 平台將不再以 Ubuntu 為基礎，轉而採用 Debian Testing。此決策旨在更好地配合 TUXEDO OS 的混合發布模式，並解決 Ubuntu LTS 版本在軟體更新方面逐漸過時的問題。此外，TUXEDO 還對 Canonical 為未來 Ubuntu 版本規劃的 AI 發展路線表達了不滿。未來 TUXEDO OS 將以 Debian Testing 作為永久基礎，以持續提供最新的軟體創新。平台更新計畫也包含採用 Btrfs 文件系統等其他技術改進。此轉型對於使用 TUXEDO 產品的用戶，代表其作業系統的底層基礎將更傾向於追蹤最新軟體開發，而非穩定但更新較慢的 LTS 版本。",
    tags: ["TUXEDO Computers", "TUXEDO OS", "Ubuntu", "Debian", "Linux", "Debian Testing", "Btrfs"],
    title_en: "TUXEDO Computers Announces Major Platform Transition: TUXEDO OS to Shift from Ubuntu to Debian Testing Base",
    summary_en: "German Linux PC supplier TUXEDO Computers announced that its TUXEDO OS platform will no longer be based on Ubuntu, but will instead adopt Debian Testing. This decision aims to better align with TUXEDO OS's hybrid release model and address the issue of Ubuntu LTS versions becoming increasingly outdated regarding software updates. Furthermore, TUXEDO expressed dissatisfaction with Canonical's planned AI development roadmap for future Ubuntu versions. The future TUXEDO OS will use Debian Testing as its permanent base to continuously provide the latest software innovations. The platform update plan also includes other technical improvements, such as adopting the Btrfs file system. This transition means that users of TUXEDO products will see their operating system's underlying foundation leaning more towards tracking the latest software development, rather than the stable but slower-updating LTS version.",
    tags_en: ["TUXEDO Computers", "TUXEDO OS", "Ubuntu", "Debian", "Linux", "Debian Testing", "Btrfs"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/TUXEDO-Computers-Goes-Debian", lang: "EN" }
    ]
  },
  {
    id: "20260707-010",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心限制 AF_ALG 介面：新增 sysctl 參數，降低用戶空間與核心的攻擊面",
    summary: "Linux 核心的 AF_ALG 介面因其作為用戶空間程式與核心加密 API 互動的機制，被認為是「巨大的攻擊面」，且已在 Linux 7.2 版本中開始棄用。為進一步限制其風險，Google 的加密專家 Eric Biggers 為 Linux 核心引入了新的 `af_alg_restrict` sysctl 參數。此參數允許系統管理員在 `/proc/sys/crypto/af_alg_restrict` 設定限制級別：0（無限制）、1（有限功能）或 2（完全禁用）。預設值設定為 1，旨在為未特權程序啟用算法白名單，同時為特權程序提供稍長的白名單。此舉旨在限制未經必要的用戶空間存取，特別是針對如 `authencesn` 等無實際用例的內部細節。雖然此修補程式目前在 `cryptodev` Git 程式碼中，預計在今年晚些時候合併到 Linux 7.3 週期。然而，這也預示著 AF_ALG 最終可能被完全禁用或從核心中移除。",
    tags: ["Linux 核心", "AF_ALG", "sysctl", "加密 API", "攻擊面", "Linux 7.3"],
    title_en: "Linux Kernel Restricts AF_ALG Interface: New sysctl Parameter Reduces Attack Surface Between User Space and Kernel",
    summary_en: "The AF_ALG interface in the Linux kernel, due to its mechanism for user-space programs to interact with kernel crypto APIs, has been considered a 'massive attack surface' and has been deprecated since Linux 7.2. To further restrict its risk, Google crypto expert Eric Biggers introduced a new `af_alg_restrict` sysctl parameter to the Linux kernel. This parameter allows system administrators to set the restriction level in `/proc/sys/crypto/af_alg_restrict`: 0 (no restriction), 1 (limited functionality), or 2 (complete disablement). The default value is set to 1, which aims to enable an algorithm whitelist for unprivileged processes while providing a slightly longer whitelist for privileged processes. This measure is intended to limit unnecessary user-space access, especially targeting internal details like `authencesn` that lack practical use cases. Although this patch is currently in the `cryptodev` Git code and is expected to merge into the Linux 7.3 cycle later this year, it signals that AF_ALG may eventually be completely disabled or removed from the kernel.",
    tags_en: ["Linux Kernel", "AF_ALG", "sysctl", "Crypto API", "Attack Surface", "Linux 7.3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AF-ALG-Restrict-Sysctl-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260707-011",
    trackers: ["os"],
    category: "Linux",
    title: "LLVM 核心開發者 Nick Desaulniers 重返 Google，將持續貢獻 Linux 核心開發",
    summary: "資深開發者 Nick Desaulniers，曾是 Linux 核心中 LLVM/Clang 支援的維護者，負責監督 LLVM 相關元件的上游化與持續開發。LLVM/Clang 支援對於提升程式碼的可移植性、解決 GNU 工具鏈的限制，並評估與 GCC 之間的效能差異至關重要，尤其在 Linux 核心整合 Rust 等新技術的背景下。Desaulniers 曾於 2025 年 2 月離開 Google 加入 Tesla，暫停了其核心貢獻。目前，他已重返 Google，並透過提交補丁的方式宣布回歸 Linux 核心開發。此舉預示著他將再次投入核心開發，為 Linux 核心帶來新的技術進展與貢獻。",
    tags: ["LLVM", "Linux 核心", "Clang", "Google", "GCC", "Linux Kernel Mailing List"],
    title_en: "LLVM Core Developer Nick Desaulniers Returns to Google to Continue Contributing to Linux Kernel Development",
    summary_en: "Senior developer Nick Desaulniers, who was a maintainer of LLVM/Clang support within the Linux kernel, was responsible for overseeing the upstreaming and continued development of LLVM-related components. LLVM/Clang support is crucial for improving code portability, addressing limitations of the GNU toolchain, and evaluating performance differences with GCC, especially in the context of the Linux kernel integrating new technologies like Rust. Desaulniers previously left Google in February 2025 to join Tesla, temporarily pausing his core contributions. He has now returned to Google and announced his return to Linux kernel development by submitting patches. This move suggests that he will once again dedicate himself to core development, bringing new technical advancements and contributions to the Linux kernel.",
    tags_en: ["LLVM", "Linux Kernel", "Clang", "Google", "GCC", "Linux Kernel Mailing List"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Nick-Desaulniers-LLVM-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260707-012",
    trackers: ["os"],
    category: "Linux",
    title: "IBM eHEA 10Gb 網卡驅動程式將從 Linux 核心移除，標誌著舊式 POWER 硬體支援的終結",
    summary: "IBM 宣布將從 Linux 核心的 mainline 程式碼中移除用於 IBM pSeries eHEA 10Gb 網路適配器的驅動程式。該 eHEA 驅動程式已成為一個「孤兒」程式碼，自 2024 年 4 月以來缺乏活躍維護者。該硬體最初支援於 IBM POWER7 系統，其支援已於 2020 年 12 月結束。由於該驅動程式自 2022 年 10 月後未收到功能更新，且在網通子系統的 net-next 代碼中已被標記移除，預計將在 Linux 7.3 版本中移除。此舉反映了 Linux 核心正在逐步淘汰過時、缺乏維護的舊式硬體支援，特別是針對老舊的 IBM POWER 伺服器。開發者應注意，這類驅動程式的移除是核心演進的必然趨勢，建議使用者應升級至支援現代網路介面的系統，或尋找替代的網路解決方案。",
    tags: ["IBM", "eHEA", "Linux 核心", "10Gb Ethernet", "POWER", "驅動程式移除"],
    title_en: "IBM eHEA 10Gb Network Card Driver to be Removed from Linux Kernel, Marking End of Support for Legacy POWER Hardware",
    summary_en: "IBM announced that it will remove the driver for the IBM pSeries eHEA 10Gb network adapter from the Linux kernel mainline code. This eHEA driver has become 'orphaned' code, lacking active maintenance since April 2024. The hardware was originally supported on IBM POWER7 systems, with support having ended in December 2020. Due to the driver not receiving functional updates since October 2022, and being marked for removal in the net-next subsystem code, it is expected to be removed in Linux 7.3. This move reflects the Linux kernel's gradual deprecation of outdated, unmaintained legacy hardware support, particularly for older IBM POWER servers. Developers should note that the removal of such drivers is an inevitable trend of kernel evolution, and users are advised to upgrade to systems that support modern network interfaces or seek alternative networking solutions.",
    tags_en: ["IBM", "eHEA", "Linux Kernel", "10Gb Ethernet", "POWER", "Driver Removal"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/IBM-EHEA-Being-Retired", lang: "EN" }
    ]
  },
  {
    id: "20260707-013",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 365 Copilot 採用率低迷，儘管價格上漲，市場仍面臨 AI 整合與用戶接受度挑戰",
    summary: "本文分析了 Microsoft 365 Copilot 的市場採用困境。儘管 Microsoft 將 Copilot 深度整合到 Windows 11、Word、Excel、Outlook 和 Teams 等多個產品中，但數據顯示，僅不到 4.5% 的商業用戶為 Copilot 付費，且其中只有 20% 至 30% 的付費用戶能達到每週使用。這表明 Copilot 的實際活躍用戶佔整個客戶群的比例極低。此外，Microsoft 提高的訂閱價格，使得用戶每月需支付高額費用，但其核心產品的市場接受度卻持續低迷。文章指出，Copilot 的主要賣點是其深度整合性，而非模型本身的優越性，甚至需透過付費訂閱才能使用 Anthropic 的 Claude 等外部模型。這凸顯了 Microsoft 在 AI 產品推廣上，面臨用戶習慣、競爭者（如 Gemini、Claude）的激烈挑戰，以及產品定位與價格策略之間的矛盾。",
    tags: ["Microsoft 365", "Copilot", "AI 應用", "Windows 11", "Anthropic Claude", "市場策略"],
    title_en: "Microsoft 365 Copilot Adoption Slumps Amid Price Hikes, Facing Challenges in AI Integration and User Acceptance",
    summary_en: "This article analyzes the market adoption difficulties of Microsoft 365 Copilot. Although Microsoft has deeply integrated Copilot into multiple products, including Windows 11, Word, Excel, Outlook, and Teams, data shows that fewer than 4.5% of commercial users pay for Copilot, and even among paying users, only 20% to 30% achieve weekly usage. This indicates that the proportion of actual active users for Copilot is extremely low relative to the entire customer base. Furthermore, the increased subscription price set by Microsoft requires users to pay a high monthly fee, yet the market acceptance of its core products remains sluggish. The article points out that Copilot's main selling point is its deep integration, rather than the superiority of the model itself; some external models, such as Anthropic's Claude, even require paid subscriptions to use. This highlights the contradictions Microsoft faces in promoting its AI products, including user habits, intense competition from rivals (such as Gemini and Claude), and the conflict between product positioning and pricing strategy.",
    tags_en: ["Microsoft 365", "Copilot", "AI Applications", "Windows 11", "Anthropic Claude", "Market Strategy"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/07/microsoft-365-copilot-adoption-is-under-4-5-after-3-years-only-1-use-it-weekly-yet-prices-went-up", lang: "EN" }
    ]
  },
  {
    id: "20260707-014",
    trackers: ["security"],
    category: "法規與標準",
    title: "NIST 發布 SP 800-18 Rev. 2：整合系統安全、隱私與供應鏈風險管理指引",
    summary: "美國國家標準暨技術研究院（NIST）於 6 月 30 日發布更新版指引 NIST SP 800-18 Rev. 2，主題為《Developing Security, Privacy, and Cybersecurity Supply Chain Risk Management Plans for Systems》。新版指引將傳統的系統安全計畫、系統隱私計畫，以及網路安全供應鏈風險管理（C-SCRM）計畫，整合為一套統一的系統計畫架構。組織應持續記錄系統用途、授權邊界、資料流、受保護資產、控制措施等資訊，作為風險評估與法遵作業的依據。NIST 進一步建議，應以機器可讀格式維護這些系統計畫資料，以便讓 GRC、SOAR、SIEM 等工具能自動蒐集與更新風險資訊，從而減少對人工維護靜態文件的依賴，實現風險狀態的即時掌握。",
    tags: ["NIST", "SP 800-18", "系統計畫", "供應鏈風險", "資安治理", "C-SCRM"],
    title_en: "NIST Releases SP 800-18 Rev. 2: Guidelines Integrating System Security, Privacy, and Supply Chain Risk Management",
    summary_en: "The U.S. National Institute of Standards and Technology (NIST) released the updated guideline, NIST SP 800-18 Rev. 2, on June 30, titled 'Developing Security, Privacy, and Cybersecurity Supply Chain Risk Management Plans for Systems.' The new guideline integrates traditional system security plans, system privacy plans, and cybersecurity supply chain risk management (C-SCRM) plans into a unified system plan architecture. Organizations should continuously document information such as system usage, authorization boundaries, data flows, protected assets, and control measures, to serve as the basis for risk assessment and compliance operations. NIST further recommends that this system plan data should be maintained in a machine-readable format, enabling tools like GRC, SOAR, and SIEM to automatically collect and update risk information. This approach reduces reliance on manually maintaining static documents and achieves real-time visibility into the risk posture.",
    tags_en: ["NIST", "SP 800-18", "System Plan", "Supply Chain Risk", "Cyber Governance", "C-SCRM"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177133", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-015",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft Teams 即將推出重大更新：新增 AI 協調員、實體會議筆記與改善訪客邀請功能",
    summary: "Microsoft 預計將推出 Teams 和 Office 產品的重大更新，主要功能包括「AI 協調員」（AI Facilitator）和針對實體會議的 AI 筆記功能。AI 協調員能夠透過監聽會議參與者，偵測知識缺口，並主動在聊天室中生成答案或進行網路搜尋來協助解決。此功能將不會預設開啟，且用戶可透過單一開關關閉所有會議 AI 功能。此外，AI 筆記功能將擴展至 Teams Rooms on Windows，並預計在 2026 年 10 月對所有用戶開放，實現實時筆記和行動項目生成，所有筆記將同步儲存至 SharePoint。另一個實用改進是，Teams 現在可以從發起人自己的電子郵件地址發送訪客邀請，取代了原先的「無回覆」地址，提升了溝通的真實性。這些更新旨在提升會議協作的智能化和流程的順暢性。",
    tags: ["Microsoft Teams", "AI Facilitator", "Teams Rooms", "AI 筆記", "Microsoft 365", "實體會議"],
    title_en: "Microsoft Teams to Launch Major Update: Introducing AI Facilitator, In-Person Meeting Notes, and Improved Guest Invitation Functionality",
    summary_en: "Microsoft plans to roll out a major update for its Teams and Office products, featuring key functionalities such as the \"AI Facilitator\" and AI note-taking for in-person meetings. The AI Facilitator can monitor meeting participants, detect knowledge gaps, and proactively generate answers or perform web searches in the chat to assist with resolution. This feature will not be enabled by default, and users can toggle all meeting AI functions off with a single switch. Additionally, the AI note-taking feature will expand to Teams Rooms on Windows and is expected to be available to all users in October 2026, providing real-time note-taking and action item generation, with all notes syncing to SharePoint. Another practical improvement is that Teams can now send guest invitations from the organizer's own email address, replacing the previous \"no-reply\" address and enhancing communication authenticity. These updates aim to enhance the intelligence and smoothness of meeting collaboration.",
    tags_en: ["Microsoft Teams", "AI Facilitator", "Teams Rooms", "AI Note-taking", "Microsoft 365", "In-person Meeting"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/07/microsoft-teams-big-update-brings-ai-notes-to-physical-meetings-chat-sections-and-more", lang: "EN" }
    ]
  },
  {
    id: "20260707-016",
    trackers: ["security"],
    category: "法規與標準",
    title: "伊利諾州簽署AI安全法案：要求大型AI開發商進行第三方安全稽核",
    summary: "美國伊利諾州州長簽署《人工智慧安全措施法》（SB 315），旨在為大型先進AI系統開發商建立安全、透明與當責的規範。該法案要求開發商必須揭露安全措施、通報重大安全事件，並定期接受獨立第三方安全稽核。這使伊利諾州成為美國首個將頂尖AI安全監管推動至外部稽核的州。此法案與加州和紐約的AI法規架構相似，但新增了年度第三方稽核要求，涵蓋治理、風險降低、資安措施、部署前報告及災難性風險定義等。法案預計於2027年1月1日生效，將為AI產業帶來更嚴格的監管標準。",
    tags: ["伊利諾州", "AI安全法案", "SB 315", "第三方稽核", "AI治理", "大型AI模型"],
    title_en: "Illinois Signs AI Safety Act: Mandating Third-Party Security Audits for Major AI Developers",
    summary_en: "The Governor of Illinois signed the Artificial Intelligence Safety Measures Act (SB 315), which aims to establish safety, transparency, and accountability standards for developers of large, advanced AI systems. The law requires developers to disclose safety measures, report major security incidents, and undergo regular independent third-party security audits. This makes Illinois the first state in the U.S. to mandate external auditing for top-tier AI safety. While similar to the AI regulatory frameworks in California and New York, this act introduces an annual third-party audit requirement, covering governance, risk mitigation, cybersecurity measures, pre-deployment reporting, and definitions of catastrophic risks. The act is expected to take effect on January 1, 2027, bringing stricter regulatory standards to the AI industry.",
    tags_en: ["Illinois", "AI Safety Act", "SB 315", "Third-Party Audit", "AI Governance", "Large AI Models"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177144", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-017",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 系統監控反盜版工具：分析其潛在的監控與權限擴展風險",
    summary: "本文探討了 Windows 作業系統如何監控和處理反盜版（anti-piracy）工具的行為。文章指出，這些工具在執行過程中可能會被系統深度監控，這不僅涉及功能性檢查，更可能涉及對用戶活動和系統資源的廣泛權限存取。雖然原文未提供具體的 CVE 或 CVSS 分數，但其核心風險在於這些工具可能利用系統的權限提升機制或底層 API 來實現其功能，從而帶來潛在的隱私洩露或惡意行為的風險。實務上，用戶應對來源不明或功能過於激進的「反盜版」軟體保持高度警惕，並建議使用虛擬化環境或權限最小化原則來運行這類工具，以限制其對系統核心的影響範圍。",
    tags: ["Windows", "反盜版", "系統監控", "權限管理", "隱私風險"],
    title_en: "Windows System Monitoring Anti-Piracy Tools: Analyzing Potential Surveillance and Privilege Escalation Risks",
    summary_en: "This article explores how the Windows operating system monitors and handles anti-piracy tools. It points out that during execution, these tools may be deeply monitored by the system, which involves not only functional checks but also extensive access to user activity and system resources. Although the original text does not provide specific CVE or CVSS scores, the core risk lies in these tools potentially utilizing system privilege elevation mechanisms or low-level APIs to perform their functions, thereby introducing potential privacy leakage or malicious behavior risks. In practice, users should remain highly vigilant regarding 'anti-piracy' software from unknown sources or those with overly aggressive functionality, and are advised to use virtualized environments or the principle of least privilege when running such tools to limit their impact on the system core.",
    tags_en: ["Windows", "Anti-piracy", "System Monitoring", "Privilege Management", "Privacy Risk"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/07/windows-is-watching-anti-piracy-tool-fingers-scattered-spider-suspect/5267953", lang: "EN" }
    ]
  },
  {
    id: "20260707-018",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 Windows 備份功能預設切換至「開啟」，除非用戶位於歐盟地區",
    summary: "微軟宣布更改 Windows 系統的備份功能預設行為。未來，除非用戶的地理位置設定在歐盟（EU）地區，否則備份功能將預設開啟。此變動旨在提升用戶資料的保護層級，確保系統備份能更普遍地被啟用。對於全球用戶而言，這代表了備份功能將不再是需要手動開啟的選項，有助於減少因疏忽導致的資料遺失風險。雖然文章未提供具體的技術細節或影響範圍，但此政策調整反映了微軟對數據隱私與資料完整性日益重視的趨勢。建議所有用戶留意系統更新通知，並確認其備份機制是否符合個人或企業的資料保留與合規要求。",
    tags: ["Microsoft", "Windows", "備份功能", "資料保護", "歐盟", "系統更新"],
    title_en: "Microsoft Announces Windows Backup Feature Defaulting to 'On,' Unless User is Located in the EU",
    summary_en: "Microsoft has announced a change in the default behavior of Windows system backup features. Going forward, the backup feature will be enabled by default unless the user's geographical location is set within the European Union (EU) region. This change aims to elevate the level of protection for user data, ensuring that system backups are more universally activated. For global users, this means the backup feature will no longer be an option requiring manual activation, helping to reduce the risk of data loss due to oversight. Although the article does not provide specific technical details or scope of impact, this policy adjustment reflects Microsoft's increasing emphasis on data privacy and data integrity. All users are advised to monitor system update notifications and confirm whether their backup mechanisms comply with personal or enterprise data retention and compliance requirements.",
    tags_en: ["Microsoft", "Windows", "Backup Feature", "Data Protection", "EU", "System Update"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/07/07/microsoft-flips-windows-backup-to-on-by-default-unless-youre-in-the-eu/5267664", lang: "EN" }
    ]
  },
  {
    id: "20260707-019",
    trackers: ["os"],
    category: "Windows",
    title: "微軟確認 Windows 11 舊版對話框將全面「煥新」，WinUI 3 將取代 Win32 遺留介面",
    summary: "本文報導指出，微軟（Microsoft）正在大規模更新 Windows 11 的舊版使用者介面（UI）元素，這項內部代號為「煥新」（rejuvenation）。受影響範圍涵蓋了從「本地帳號切換」對話框到「檔案操作」、「常用檔案」等大量經典 Win32 介面。這些舊版元件多源自 Windows 8 或更早的系統，導致在 Windows 11 環境下仍出現過時的設計和文字提示，例如本地帳號切換時仍提及已淘汰的 Windows 8「搜尋魅力」（Search charm）。微軟已確認將使用 WinUI 3 技術來重寫這些遺留對話框，例如檔案複製對話框和常用檔案對話框。這不僅是視覺美觀的更新，也包括效能優化，例如新的 Run 對話框已具備比舊版更快的載入速度。這顯示微軟正在建立一套可擴展的流程，系統將逐步清理和現代化所有過時的 Windows 元素，提升整體使用者體驗。",
    tags: ["Microsoft", "Windows 11", "WinUI 3", "Win32", "本地帳號", "使用者介面", "系統更新"],
    title_en: "Microsoft Confirms Major Overhaul of Windows 11 Dialog Boxes with WinUI 3 Replacing Win32 Legacy Interfaces",
    summary_en: "This article reports that Microsoft is undertaking a large-scale update of older User Interface (UI) elements in Windows 11, an internal project codenamed 'rejuvenation.' The scope of impact covers numerous classic Win32 interfaces, ranging from 'local account switching' dialog boxes to 'file operations' and 'recent files.' These older components often originate from Windows 8 or earlier systems, resulting in outdated designs and text prompts appearing even in Windows 11, such as the mention of the deprecated Windows 8 'Search charm' during local account switching. Microsoft has confirmed that it will use WinUI 3 technology to rewrite these legacy dialog boxes, such as the file copy dialog box and the recent files dialog box. This is not merely a visual update but also includes performance optimization; for example, the new Run dialog box features faster loading speeds than its older counterpart. This indicates that Microsoft is building a scalable process to gradually clean up and modernize all outdated Windows elements, thereby improving the overall user experience.",
    tags_en: ["Microsoft", "Windows 11", "WinUI 3", "Win32", "Local Account", "User Interface", "System Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/07/windows-11-rejuvenation-list-just-got-longer-with-more-legacy-dialogs-headed-to-winui-3", lang: "EN" }
    ]
  },
  {
    id: "20260707-020",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux KVM重大漏洞 CVE-2026-53359 曝光：潛伏16年，可能讓虛擬機突破主機隔離",
    summary: "資安研究人員揭露代號 Januscape 的 Linux KVM 重大漏洞 CVE-2026-53359。此漏洞源於 x86 處理器版 KVM 的 Shadow MMU 程式碼，屬於記憶體已釋放卻仍被使用（UAF）問題，自 2010 年 Linux kernel 2.6.36 版本引入，潛伏約 16 年才被發現。攻擊者可透過虛擬機（Guest）操作，破壞 KVM 維護的 Shadow 記憶體分頁資料結構，可能導致虛擬機突破隔離存取底層實體主機（Host）。目前已公開的 PoC 利用程式可造成實體主機核心當機，導致所有虛擬機服務中斷；更嚴重的是，另有未公開的利用程式可進一步取得實體主機 root 權限。Linux kernel 5.x、6.x 與 7.x 等穩定分支已於 7 月 4 日完成修補，用戶應立即更新至修補版本，或暫時停用巢狀虛擬化功能以降低風險。此外，Arm64 版 KVM 亦存在同性質漏洞 CVE-2026-46316，未修補的 Arm64 主機 KVM 用戶也需儘速更新。",
    tags: ["Linux KVM", "CVE-2026-53359", "UAF", "虛擬化", "Shadow MMU", "Linux kernel"],
    title_en: "Major Linux KVM Vulnerability CVE-2026-53359 Exposed: Dormant for 16 Years, Could Allow Virtual Machine to Break Host Isolation",
    summary_en: "Cybersecurity researchers have disclosed a critical Linux KVM vulnerability, designated CVE-2026-53359. This vulnerability originates from the Shadow MMU code in the x86 processor version of KVM and is classified as a Use-After-Free (UAF) issue. It was introduced in the Linux kernel version 2.6.36 in 2010, remaining undetected for approximately 16 years. An attacker can exploit this through a virtual machine (Guest) operation to corrupt the Shadow memory page data structure maintained by KVM, potentially allowing the virtual machine to break out of isolation and access the underlying physical host (Host). The publicly available Proof-of-Concept (PoC) exploit can cause the physical host kernel to crash, leading to the interruption of all virtual machine services; more critically, a separate, undisclosed exploit could further achieve root privileges on the physical host. Stable branches such as Linux kernel 5.x, 6.x, and 7.x were patched on July 4th. Users are advised to immediately update to the patched version, or temporarily disable nested virtualization to mitigate risk. Furthermore, a similar vulnerability, CVE-2026-46316, exists in the Arm64 version of KVM. Users with unpatched Arm64 Host KVM must also update promptly.",
    tags_en: ["Linux KVM", "CVE-2026-53359", "UAF", "Virtualization", "Shadow MMU", "Linux kernel"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177139", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安業者揭露 QuimaRAT：新型模組化 Java RAT 透過 MaaS 模式販售，具備跨平台與無檔案攻擊能力",
    summary: "資安業者 LevelBlue 近期揭露了一款名為 QuimaRAT 的新型遠端存取木馬（RAT）。該惡意程式採用惡意程式即服務（MaaS）的商業模式在暗網販售，顯示跨平台 RAT 正在朝向模組化和商業化發展。QuimaRAT 樣本為 Java Archive（JAR）檔案，可執行於 Java SE 8 環境。它利用 Java Native Access（JNA）原生函式庫，支援 Windows、Linux 和 macOS 三大作業系統。惡意程式啟動後，會檢查作業系統環境並建立常駐機制，初始化命令與控制（C2）連線。其功能極為全面，包括遠端命令執行、檔案傳輸、憑證竊取、攝影機監控等。特別值得注意的是，Windows 版本具備無檔案 Shellcode 執行能力，能在記憶體中執行攻擊程式碼，大幅降低被偵測的機率。研究人員指出，QuimaRAT 更接近一個可擴充的模組化 Java RAT 平台，而非單一功能的木馬。",
    tags: ["QuimaRAT", "Java RAT", "MaaS", "遠端存取木馬", "跨平台", "Shellcode", "LevelBlue"],
    title_en: "Cybersecurity Firm Reveals QuimaRAT: New Modular Java RAT Sold via MaaS Model, Featuring Cross-Platform and Fileless Attack Capabilities",
    summary_en: "Cybersecurity firm LevelBlue recently disclosed a new Remote Access Trojan (RAT) named QuimaRAT. This malware is sold on the dark web using a Malicious as a Service (MaaS) business model, indicating that cross-platform RATs are moving towards modularization and commercialization. The QuimaRAT sample is a Java Archive (JAR) file, executable in a Java SE 8 environment. It utilizes the Java Native Access (JNA) library to support Windows, Linux, and macOS operating systems. Upon execution, the malware checks the operating system environment and establishes persistence mechanisms, initializing a Command and Control (C2) connection. Its functionality is extremely comprehensive, including remote command execution, file transfer, credential theft, and camera monitoring. Notably, the Windows version possesses fileless Shellcode execution capability, allowing it to run malicious code in memory, significantly reducing the probability of detection. Researchers point out that QuimaRAT is closer to a scalable, modular Java RAT platform rather than a single-function Trojan.",
    tags_en: ["QuimaRAT", "Java RAT", "MaaS", "Remote Access Trojan", "Cross-Platform", "Shellcode", "LevelBlue"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177135", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Adobe ColdFusion 網頁平臺曝滿分漏洞，攻擊者已實地利用，建議立即更新修補程式",
    summary: "Adobe 近期更新了網頁應用開發平臺 ColdFusion 與行銷自動化平臺 Campaign Classic，修補了多達七個高風險漏洞。其中，ColdFusion 的一個滿分漏洞 CVE-2026-48282，在 Adobe 公布後不久即遭到實際攻擊利用。威脅情資平臺 KEVIntel 偵測到相關活動，並指出攻擊來源 IP 位址來自印度。加拿大網路安全中心（CCCS）也根據開源威脅情報掌握此漏洞已被利用，呼籲用戶及管理員儘速修補。CVE-2026-48282 屬於路徑遍歷漏洞，攻擊者可利用其執行任意程式碼，且無需使用者互動。Adobe 已透過發布 ColdFusion 2025 Update 10 和 ColdFusion 2023 Update 21 等更新版本進行修補，用戶應立即套用這些更新以降低風險。",
    tags: ["Adobe", "ColdFusion", "CVE-2026-48282", "路徑遍歷漏洞", "滿分漏洞", "資安更新"],
    title_en: "Adobe ColdFusion Web Platform Exposed with Critical Vulnerability; Exploitation Confirmed, Immediate Patching Recommended",
    summary_en: "Adobe recently updated its web application development platform, ColdFusion, and its marketing automation platform, Campaign Classic, patching up to seven high-risk vulnerabilities. Among these, a critical vulnerability in ColdFusion, CVE-2026-48282, was actively exploited shortly after Adobe's public disclosure. The threat intelligence platform KEVIntel detected related activity, noting that the attack source IP addresses originated from India. Canada's Cyber Centre (CCCS) also reported that this vulnerability has been exploited, based on open-source threat intelligence, urging users and administrators to patch immediately. CVE-2026-48282 is a path traversal vulnerability, which allows attackers to execute arbitrary code without user interaction. Adobe has released updates, such as ColdFusion 2025 Update 10 and ColdFusion 2023 Update 21, to patch the issue, and users should apply these updates immediately to mitigate risk.",
    tags_en: ["Adobe", "ColdFusion", "CVE-2026-48282", "Path Traversal Vulnerability", "Critical Vulnerability", "Security Update"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177132", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "BeyondTrust修補三項關鍵漏洞：Remote Support與Privileged Remote Access產品面臨未經身份驗證的遠端控制風險",
    summary: "資安廠商BeyondTrust發布更新，修補了其Remote Support (RS) 和 Privileged Remote Access (PRA) 產品中的多個關鍵安全漏洞。其中，CVE-2026-40138（CVSS 9.2）和CVE-2026-40139（CVSS 9.2）是預認證漏洞，允許網路位置的未經身份驗證攻擊者繞過存取控制，取得未授權的設備控制權，包括高權限帳號。此外，還存在CVE-2026-40140（CVSS 8.7）導致服務拒絕，以及CVE-2026-40141（CVSS 8.5）允許有限權限的已驗證攻擊者存取超出授權範圍的資源。BeyondTrust指出，最嚴重的漏洞在特定配置下，可能允許未經身份驗證的遠端攻擊者繞過存取控制。用戶應立即將Remote Support升級至25.3.3或更高版本，將Privileged Remote Access升級至25.3.3或更高版本，以修補這些風險。",
    tags: ["BeyondTrust", "CVE-2026-40138", "CVE-2026-40139", "Remote Support", "Privileged Remote Access", "預認證漏洞"],
    title_en: "BeyondTrust Patches Three Critical Vulnerabilities: Remote Support and Privileged Remote Access Products Face Unauthenticated Remote Control Risks",
    summary_en: "Cybersecurity vendor BeyondTrust has released an update to patch multiple critical security vulnerabilities in its Remote Support (RS) and Privileged Remote Access (PRA) products. Among these, CVE-2026-40138 (CVSS 9.2) and CVE-2026-40139 (CVSS 9.2) are pre-authenticated vulnerabilities that allow unauthenticated attackers at a network location to bypass access controls and gain unauthorized device control, including high-privilege accounts. Additionally, there is CVE-2026-40140 (CVSS 8.7) which causes a denial of service, and CVE-2026-40141 (CVSS 8.5) which allows limited-privilege authenticated attackers to access resources beyond their authorized scope. BeyondTrust notes that the most severe vulnerability, under specific configurations, may allow unauthenticated remote attackers to bypass access controls. Users should immediately upgrade Remote Support to version 25.3.3 or higher, and upgrade Privileged Remote Access to version 25.3.3 or higher, to mitigate these risks.",
    tags_en: ["BeyondTrust", "CVE-2026-40138", "CVE-2026-40139", "Remote Support", "Privileged Remote Access", "Pre-authenticated vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/beyondtrust-patches-critical-auth.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增三個已知被利用漏洞：JoomShaper與Langflow等，提醒企業加強修補優先級",
    summary: "美國網路安全局（CISA）宣布，根據積極利用的證據，將三個新的漏洞納入其「已知被利用漏洞目錄」（KEV Catalog）。受影響的漏洞包括：JoomShaper的CVE-2026-48908（SP Page Builder不安全檔案上傳）、CVE-2026-55255（Langflow授權繞過）以及CVE-2026-56290（Joomlack Page Builder存取控制不當）。這些漏洞被視為惡意行為者常用的攻擊途徑，對聯邦企業構成重大風險。CISA同時重申，聯邦政府機構必須依據《結合營運指令》（BOD 26-04）的要求，優先修補KEV目錄中的高風險漏洞，特別是那些在外部暴露且被利用後可完全控制資產的漏洞。雖然指令僅適用於聯邦政府，但CISA鼓勵所有組織應採取風險導向的漏洞管理，將修補KEV目錄中的漏洞列為最高優先級。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-48908", "CVE-2026-55255", "CVE-2026-56290", "漏洞管理"],
    title_en: "CISA Adds Three Exploited Vulnerabilities: JoomShaper, Langflow, and Others, Urging Enterprises to Prioritize Patching",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added three new vulnerabilities to its 'Known Exploited Vulnerabilities Catalog' (KEV Catalog), based on evidence of active exploitation. The affected vulnerabilities include: CVE-2026-48908 (JoomShaper SP Page Builder insecure file upload), CVE-2026-55255 (Langflow authorization bypass), and CVE-2026-56290 (Joomlack Page Builder improper access control). These vulnerabilities are considered common attack vectors used by malicious actors and pose significant risks to federal enterprises. CISA also reiterated that federal government agencies must prioritize patching high-risk vulnerabilities listed in the KEV catalog, as required by the 'Combined Operations Directive' (BOD 26-04), especially those that are externally exposed and allow for complete asset control upon exploitation. Although the directive only applies to the federal government, CISA encourages all organizations to adopt risk-based vulnerability management and list patching KEV catalog vulnerabilities as the highest priority.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-48908", "CVE-2026-55255", "CVE-2026-56290", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/07/07/cisa-adds-three-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260707-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Mendix Studio Pro 存在檔案解析漏洞：建置流程可執行任意程式碼，影響關鍵基礎設施",
    summary: "Siemens 的 Mendix Studio Pro 軟體系列存在一個檔案解析漏洞（CVE-2026-48192）。此漏洞的本質是，在建置流程（build pipeline）處理專案檔案時，未正確驗證或清理專案檔案，允許攻擊者透過讓使用者開啟或執行特製惡意專案，在當前使用者的權限下執行任意程式碼。該漏洞的 CVSS 3.1 分數為 5.4（中等）。受影響的產品版本範圍廣泛，包括 Mendix Studio Pro 10.11 至 10.23，以及 11.0 至 11.9 等多個版本。Siemens 建議使用者應立即更新到修復版本，例如 V10.24.21 或 V11.6.7 或更高版本。由於此漏洞涉及關鍵製造、能源等基礎設施產業，建議用戶應採取網路隔離等措施，並密切關注廠商後續的修補公告。",
    tags: ["Mendix Studio Pro", "Siemens", "CVE-2026-48192", "檔案解析漏洞", "Code Injection", "關鍵基礎設施"],
    title_en: "Mendix Studio Pro File Parsing Vulnerability: Build Process Allows Arbitrary Code Execution, Affecting Critical Infrastructure",
    summary_en: "A file parsing vulnerability (CVE-2026-48192) exists in Siemens' Mendix Studio Pro software suite. The vulnerability stems from the build pipeline failing to properly validate or sanitize project files when processing them. This allows an attacker to execute arbitrary code under the current user's privileges by having the user open or execute a specially crafted malicious project. The vulnerability has a CVSS 3.1 score of 5.4 (Medium). Affected product versions are widespread, including Mendix Studio Pro 10.11 through 10.23, and multiple versions such as 11.0 through 11.9. Siemens recommends that users immediately update to a patched version, such as V10.24.21 or V11.6.7 or higher. Given that this vulnerability affects critical infrastructure sectors, including manufacturing and energy, users are advised to take measures such as network isolation and closely monitor subsequent vendor patch announcements.",
    tags_en: ["Mendix Studio Pro", "Siemens", "CVE-2026-48192", "File Parsing Vulnerability", "Code Injection", "Critical Infrastructure"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-188-04", lang: "EN" }
    ]
  },
  {
    id: "20260707-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增Adobe ColdFusion路徑穿越漏洞（CVE-2026-48282）至已知利用漏洞目錄",
    summary: "美國網路安全局（CISA）宣布將一項新的漏洞，即Adobe ColdFusion的路徑穿越漏洞（CVE-2026-48282），新增至其「已知利用漏洞目錄」（KEV Catalog）。此類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業系統構成重大風險。CISA的《具約束力營運指令》（BOD 26-04）已要求聯邦政府機構必須優先修補KEV目錄中列出的高風險漏洞，特別是那些在公開資產上存在且利用後可獲得完全控制權的漏洞。雖然BOD 26-04僅適用於聯邦民事行政部門，但CISA鼓勵所有組織應採納風險導向的漏洞管理方法，並優先修補KEV目錄中的漏洞。建議所有組織應立即檢查其系統中是否運行Adobe ColdFusion，並根據供應商提供的修補程式進行修復，以降低被利用的風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-48282", "Adobe ColdFusion", "路徑穿越", "漏洞管理"],
    title_en: "CISA Adds Adobe ColdFusion Path Traversal Vulnerability (CVE-2026-48282) to Known Exploited Vulnerabilities Catalog",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new vulnerability, the Adobe ColdFusion Path Traversal vulnerability (CVE-2026-48282), to its Known Exploited Vulnerabilities (KEV) Catalog. This type of vulnerability is a common attack vector used by malicious actors and poses a significant risk to federal enterprise systems. CISA's Binding Operational Directive (BOD 26-04) requires federal government agencies to prioritize patching high-risk vulnerabilities listed in the KEV catalog, especially those that exist in public assets and allow for complete control upon exploitation. Although BOD 26-04 only applies to federal civil administrative departments, CISA encourages all organizations to adopt a risk-based vulnerability management approach and prioritize patching vulnerabilities listed in the KEV catalog. All organizations are advised to immediately check if they are running Adobe ColdFusion in their systems and apply patches provided by the vendor to mitigate the risk of exploitation.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-48282", "Adobe ColdFusion", "Path Traversal", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/07/07/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" },
      { name: "iThome", url: "https://ithome.com.tw/news/177142", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "「大品牌工作詐騙」釣魚活動利用嵌套重定向，冒充麥肯錫、可口可樂等公司竊取Google帳密",
    summary: "近期發現一類以「工作招募」為主題的釣魚活動，透過冒充可口可樂、路易威登、麥肯錫、Netflix、OpenAI等知名企業品牌，誘騙目標群體（特別是行銷專業人士）上傳Google帳號密碼。攻擊者透過進行相關研究，能撰寫出高度個人化的郵件，提高釣魚的成功率。該活動的技術特點是利用「嵌套重定向」（nested redirects）的技術，將受害者從看似可信的平台（如PeopleForce）導向多個合法服務網域（如ExactTarget、Wise Agent），最終才到達攻擊者控制的釣魚網站。這種手法能有效繞過僅檢查初始網域的基礎網頁過濾器。最終的釣魚頁面則採用「瀏覽器內瀏覽器」（BitB）技術，模擬真實的Google登入介面。為防禦，除了員工的社交工程訓練外，組織應部署更強效的網頁過濾系統，並建議使用密碼管理器，以防止帳密被填入非預期的網站。",
    tags: ["釣魚攻擊", "Nested Redirects", "社交工程", "Google 帳號", "McKinsey", "Phishing"],
    title_en: "Major Brand Job Scams Phishing Campaigns Use Nested Redirects to Impersonate Companies Like McKinsey and Coca-Cola to Steal Google Credentials",
    summary_en: "Recently, a type of phishing campaign themed around 'job recruitment' has been discovered. These campaigns impersonate well-known corporate brands such as Coca-Cola, Louis Vuitton, McKinsey, Netflix, and OpenAI to trick target groups (especially marketing professionals) into submitting their Google account passwords. By conducting relevant research, attackers are able to write highly personalized emails, increasing the success rate of the phishing attempt. The technical feature of this campaign is the use of 'nested redirects' technology, which guides victims from seemingly trustworthy platforms (such as PeopleForce) through multiple legitimate service domains (such as ExactTarget, Wise Agent) before finally reaching the attacker-controlled phishing site. This technique effectively bypasses basic webpage filters that only check the initial domain. The final phishing page utilizes 'browser-in-browser' (BitB) technology to simulate the authentic Google login interface. For defense, in addition to employee social engineering training, organizations should deploy more robust webpage filtering systems and are advised to use password managers to prevent credentials from being entered into unexpected websites.",
    tags_en: ["Phishing Attacks", "Nested Redirects", "Social Engineering", "Google Account", "McKinsey", "Phishing"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/big-brand-jobs-scam-marketing-pros-google-accounts", lang: "EN" }
    ]
  },
  {
    id: "20260707-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dialogflow CX 發現「惡意代理人」漏洞：單一權限可讓攻擊者竊取 AI 聊天機器人數據",
    summary: "Varonis 研究人員揭露 Google Cloud Dialogflow CX 平台存在「惡意代理人」（Rogue Agent）漏洞。此漏洞屬於權限邊界問題，允許攻擊者利用 Code Blocks 功能，透過更新單一權限（dialogflow.playbooks.update），將惡意程式碼注入 Dialogflow 代理人的執行管線中。這使得攻擊者能夠靜默地竊取對話記錄，並執行大規模的網路釣魚活動。Dialogflow CX 用於建構處理敏感客戶數據的企業級 AI 代理人，包括客服、金融和醫療聊天機器人。由於 Code Blocks 預設具有公共網路出站權限，攻擊者可以從數據邊界外發起連線。雖然 Google 已在 2025 年修復了此問題，且未發現客戶受損跡象，但 Varonis 仍建議組織應審查 Playbook 更新日誌、查詢失敗的使用者請求，並手動審核 Code Blocks，以確保 AI 基礎設施的安全性。",
    tags: ["Dialogflow CX", "Google Cloud", "Rogue Agent", "權限邊界", "AI 聊天機器人", "Code Blocks", "數據外洩"],
    title_en: "Dialogflow CX Discovers 'Rogue Agent' Vulnerability: Single Privilege Allows Attackers to Steal AI Chatbot Data",
    summary_en: "Varonis researchers have disclosed a 'Rogue Agent' vulnerability in the Google Cloud Dialogflow CX platform. This vulnerability is an authorization boundary issue that allows attackers to utilize the Code Blocks feature, and by updating a single privilege (dialogflow.playbooks.update), inject malicious code into the Dialogflow agent's execution pipeline. This enables attackers to silently steal conversation records and execute large-scale phishing campaigns. Dialogflow CX is used to build enterprise-grade AI agents that process sensitive customer data, including customer service, finance, and medical chatbots. Because Code Blocks default to having public network outbound permissions, attackers can initiate connections from outside the data boundary. Although Google patched this issue in 2025, and no customer damage has been found, Varonis still recommends that organizations review Playbook update logs, query failed user requests, and manually audit Code Blocks to ensure the security of their AI infrastructure.",
    tags_en: ["Dialogflow CX", "Google Cloud", "Rogue Agent", "Authorization Boundary", "AI Chatbot", "Code Blocks", "Data Leakage"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/dialogflow-cx-rogue-agent-flaw-enabled-ai-chatbot-data-theft", lang: "EN" }
    ]
  },
  {
    id: "20260707-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟Edge瀏覽器發布更新修補43項漏洞：包含CVSS 9.0分型混淆與多重記憶體溢位風險",
    summary: "微軟近期發布Edge瀏覽器更新，桌面穩定版已升至150.0.4078.48版，行動版則更新至150.0.4078.50版。本次更新修補了共43個漏洞，其中39個被列為重要等級。從技術層面來看，本次修補的漏洞主要集中在記憶體安全問題，包括UAF（使用後釋放）和各種記憶體溢位。其中最嚴重的漏洞為CVE-2026-58289，屬於類型混淆問題，CVSS評分為9.0分。此外，還有其他高風險漏洞，如CVE-2026-56645、CVE-2026-57974與CVE-2026-57981，分別涉及堆積緩衝區溢位、整數溢位及記憶體已釋放卻仍被使用問題，CVSS評分分別為8.8分。由於漏洞類型多樣，攻擊向量涵蓋遠端執行程式碼、偽冒及資訊洩漏等，建議使用者應立即更新至最新版本，以修補這些潛在的資安風險。",
    tags: ["Microsoft", "Edge瀏覽器", "CVE-2026-58289", "記憶體安全", "CVSS", "漏洞修補"],
    title_en: "Microsoft Edge Browser Releases Update Patching 43 Vulnerabilities: Including CVSS 9.0 Type Confusion and Multiple Memory Overflows",
    summary_en: "Microsoft recently released an update for the Edge browser. The desktop stable version has been upgraded to 150.0.4078.48, and the mobile version has been updated to 150.0.4078.50. This update patches a total of 43 vulnerabilities, 39 of which are classified as high severity. From a technical standpoint, the patched vulnerabilities primarily focus on memory safety issues, including UAF (Use-After-Free) and various memory overflows. The most severe vulnerability is CVE-2026-58289, which is a type confusion issue with a CVSS score of 9.0. Additionally, there are other high-risk vulnerabilities, such as CVE-2026-56645, CVE-2026-57974, and CVE-2026-57981, involving stack buffer overflow, integer overflow, and use of freed memory, respectively, with CVSS scores of 8.8. Due to the diverse nature of the vulnerabilities and attack vectors covering Remote Code Execution, spoofing, and information leakage, users are advised to update immediately to the latest version to mitigate these potential security risks.",
    tags_en: ["Microsoft", "Edge Browser", "CVE-2026-58289", "Memory Safety", "CVSS", "Vulnerability Patching"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177154", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apple「Hide My Email」功能遭漏洞攻擊，資安研究人員揭露可洩漏用戶真實信箱地址",
    summary: "Apple 的「Hide My Email」功能是 iCloud+ 提供的隱私保護機制，能為用戶生成隨機信箱別名，將郵件轉寄至真實信箱，以避免個人資訊外洩。然而，資安研究人員透過實測發現，該功能存在隱私漏洞。攻擊者可能利用此漏洞，從匿名信箱別名（alias）反向推導或取得用戶原本應被隱藏的真實信箱地址。研究人員已多次向 Apple 報告此問題，Apple 曾多次聲稱已修補，但研究人員驗證後仍確認漏洞持續存在。目前，雖然多方媒體已引述此漏洞，但 Apple 方面尚未公開詳細說明或修補細節，建議用戶保持警惕，並關注 Apple 官方是否有新的修補公告。",
    tags: ["Apple", "Hide My Email", "隱私漏洞", "信箱別名", "資安研究"],
    title_en: "Apple's 'Hide My Email' Feature Vulnerable to Exploitation, Security Researchers Reveal Potential Leak of Real Email Addresses",
    summary_en: "Apple's 'Hide My Email' feature, provided through iCloud+, is a privacy mechanism that generates random email aliases for users, redirecting incoming mail to the user's real inbox to prevent personal information leakage. However, security researchers discovered a privacy vulnerability through practical testing. Attackers may exploit this vulnerability to reverse-engineer or obtain the user's original, supposedly hidden, real email address from the anonymous alias. Researchers have reported this issue to Apple multiple times, and while Apple has repeatedly claimed to have patched it, researchers confirmed that the vulnerability persists. Although multiple media outlets have cited this vulnerability, Apple has not yet released detailed explanations or patch details. Users are advised to remain vigilant and monitor Apple's official announcements for any new patches.",
    tags_en: ["Apple", "Hide My Email", "Privacy Vulnerability", "Email Alias", "Security Research"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177147", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安公司Blackpoint揭露：駭客利用AI開發「Avalon」模組化惡意框架，攻擊鏈具備多功能性",
    summary: "資安公司Blackpoint發現一種名為Avalon的模組化惡意程式框架，用於實際攻擊活動。攻擊者利用此框架進行多階段網路釣魚，目標包括竊取受害者憑證、執行橫向移動，並最終使用CrownX勒索軟體元件加密資料。Blackpoint觀察到，攻擊者在整合這些複雜惡意程式時，展現出AI輔助開發的痕跡。這顯示，過去需要高度專業營運安全知識才能打造的多功能高階惡意工具，現在的門檻已大幅降低，使得攻擊者能快速產出複雜的攻擊框架。實務上，這代表攻擊的複雜度和多功能性正在提升，建議企業應強化員工的網路釣魚防禦訓練，並實施縱深防禦機制，以應對多模組、AI輔助的複雜攻擊鏈。",
    tags: ["Blackpoint", "Avalon", "模組化惡意程式", "AI 輔助攻擊", "勒索軟體", "網路釣魚"],
    title_en: "Cybersecurity Firm Blackpoint Reveals: Hackers Use AI to Develop 'Avalon' Modular Malicious Framework with Multifunctional Attack Chain",
    summary_en: "Cybersecurity firm Blackpoint discovered a modular malicious program framework called Avalon, which is being used in actual attack campaigns. Attackers utilize this framework for multi-stage phishing, targeting the theft of victim credentials, executing lateral movement, and ultimately using a CrownX ransomware component to encrypt data. Blackpoint observed evidence of AI-assisted development when attackers integrated these complex malicious components. This indicates that the barrier to entry for creating multifunctional, advanced malicious tools—which previously required highly specialized operational security knowledge—has significantly lowered, allowing attackers to rapidly produce complex attack frameworks. Practically, this means that the complexity and multifunctionality of attacks are increasing. Companies are advised to strengthen employee phishing defense training and implement deep defense mechanisms to counter complex, multi-module, AI-assisted attack chains.",
    tags_en: ["Blackpoint", "Avalon", "Modular Malicious Program", "AI-Assisted Attack", "Ransomware", "Phishing"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177146", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟揭露：駭客利用Calendly與Google轉址，針對飯店業者部署TonRAT後門",
    summary: "微軟威脅情報團隊調查發現，駭客自今年四月起持續針對歐洲及亞洲的飯店業者，發動偽裝成「客人投訴」或「住宿評價請求」的網釣攻擊。攻擊者利用知名預約平臺Calendly的郵件系統和Google的網址轉址功能，發送看似正規的釣魚郵件，以降低飯店員工警覺心。這些郵件通過了SPF、DKIM及DMARC等郵件身分驗證。點擊連結後，使用者會經過多層跳轉，最終下載惡意壓縮檔。執行後，惡意捷徑會觸發高度混淆的PowerShell程式碼，從遠端下載並植入TonRAT後門，建立持久的遠端控制權。該後門具備雙重登錄檔開機啟動機制，即使防毒軟體阻擋部分元件，仍能在兩天後自動恢復通訊。微軟提醒，飯店與旅宿業者應提高警覺，避免開啟來源不明的附件或連結，並加強前臺電腦的安全監控。",
    tags: ["微軟威脅情報", "TonRAT", "網釣攻擊", "飯店業", "PowerShell", "Calendly", "釣魚郵件"],
    title_en: "Microsoft Reveals: Hackers Use Calendly and Google Redirects to Deploy TonRAT Backdoor Targeting Hotels",
    summary_en: "Microsoft Threat Intelligence has discovered that since April of this year, hackers have been launching phishing attacks against hotels in Europe and Asia, disguised as 'guest complaints' or 'accommodation review requests.' The attackers utilize the email system of the popular booking platform Calendly and Google's URL redirection feature to send seemingly legitimate phishing emails, thereby lowering the guard of hotel employees. These emails pass standard email authentication checks such as SPF, DKIM, and DMARC. After clicking the link, the user undergoes multiple redirects, ultimately downloading a malicious compressed file. Upon execution, the malicious shortcut triggers highly obfuscated PowerShell code, which downloads and implants the TonRAT backdoor from a remote source, establishing persistent remote control. The backdoor features a dual registry startup mechanism, allowing it to automatically restore communication even if antivirus software blocks some components, typically within two days. Microsoft warns that hotels and accommodation providers must raise their awareness, avoid opening attachments or links from unknown sources, and strengthen security monitoring on front-desk computers.",
    tags_en: ["Microsoft Threat Intelligence", "TonRAT", "Phishing Attack", "Hotel Industry", "PowerShell", "Calendly", "Phishing Email"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177145", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "開源工具 curl 釋出 8.21.0 版本修補 18 個漏洞，包含潛藏 25 年的 mTLS 繞過漏洞",
    summary: "網路資料傳輸開源工具 curl 近日發布 8.21.0 版本，修補了共 18 個安全漏洞。其中最引人注目的是 CVE-2026-8932，這是一個自 2001 年 curl 7.7 版本就存在的漏洞，存在於 libcurl 處理雙向 TLS 驗證（mTLS）的程序，可能導致身分驗證被繞過。儘管 curl 官方公告將這些漏洞的嚴重性評級為中度或低風險，但根據 NIST NVD 和 Tenable 等第三方資料庫的評估，部分漏洞的 CVSS 嚴重性評分已達到 9.0 分以上，屬於重大等級。例如，CVE-2026-9079 在 Tenable 資料庫中的評分高達 9.8 分。由於各方對漏洞嚴重性判斷存在差異，用戶仍應高度警惕，建議所有使用者應儘速升級至 8.21.0 版本，以降低潛在的攻擊風險。",
    tags: ["curl", "CVE-2026-8932", "mTLS", "開源安全", "漏洞修補", "CVSS"],
    title_en: "Open-source tool curl releases 8.21.0 version patching 18 vulnerabilities, including an mTLS bypass flaw dating back 25 years",
    summary_en: "The open-source network data transfer tool curl recently released version 8.21.0, patching a total of 18 security vulnerabilities. The most notable among these is CVE-2026-8932, a flaw that has existed since curl version 7.7 in 2001, located in the libcurl handling of mutual TLS (mTLS) authentication, which could potentially lead to identity bypass. Although the official curl announcement rates these vulnerabilities as medium or low risk, third-party databases such as NIST NVD and Tenable assess that some vulnerabilities have CVSS severity scores reaching 9.0 or higher, classifying them as critical. For instance, CVE-2026-9079 scores as high as 9.8 in the Tenable database. Due to discrepancies in vulnerability severity assessment among various parties, users should remain highly vigilant and are advised to upgrade to version 8.21.0 promptly to mitigate potential attack risks.",
    tags_en: ["curl", "CVE-2026-8932", "mTLS", "Open Source Security", "Vulnerability Patching", "CVSS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177143", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新型安卓惡意套件 RedWing 販售，可進行銀行登入竊取與一號密碼攔截",
    summary: "一個名為 RedWing 的新型安卓惡意軟體操作，目前在 Telegram 上作為「現成銀行詐騙服務」租賃。該套件允許低技術門檻的犯罪分子，接管受害者手機，竊取銀行登入憑證和一次性密碼（OTP）。該惡意軟體透過偽造的應用商店頁面（可模仿 Google Play 等）誘騙用戶從非官方來源安裝，並在過程中逐步要求一系列高權限權限，包括「無障礙服務」（Accessibility service）和預設簡訊處理器。一旦獲得這些權限，RedWing 可建立疊層（overlays）偽造登入介面、讀取即時傳入的 OTP、透過無障礙服務擷取卡號和 PIN，甚至能透過隱藏的電信代碼轉接通話，達到全面控制手機的目的。由於該惡意軟體不依賴安卓漏洞，其防禦重點在於阻止用戶在安裝時授予過多權限。建議用戶僅從官方商店安裝應用程式，並嚴格限制授予無障礙服務、預設簡訊處理器等高權限。",
    tags: ["RedWing", "安卓惡意軟體", "Telegram", "無障礙服務", "銀行詐騙", "OTP"],
    title_en: "New Android Malware Package RedWing Sold, Capable of Stealing Bank Logins and Intercepting One-Time Passwords",
    summary_en: "A new Android malware, named RedWing, is currently being rented on Telegram as a 'ready-made bank scam service.' This package allows low-skill criminals to take over victim phones, stealing bank login credentials and one-time passwords (OTP). The malware tricks users into installing it from unofficial sources (which can mimic Google Play) via fake app store pages, and in the process, gradually requests a series of high-privilege permissions, including 'Accessibility service' and default SMS handler. Once these permissions are obtained, RedWing can create overlays to fake login interfaces, read real-time incoming OTPs, capture card numbers and PINs through Accessibility service, and even achieve full control of the phone by making calls through hidden telecom code transfers. Since the malware does not rely on Android vulnerabilities, its defense focus is on preventing users from granting excessive permissions during installation. Users are advised to only install applications from official stores and strictly limit the granting of high-privilege permissions such as Accessibility service and default SMS handler.",
    tags_en: ["RedWing", "Android Malware", "Telegram", "Accessibility service", "Bank Scam", "OTP"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/redwing-maas-packages-android-bank.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Dialogflow CX 關鍵缺陷：惡意代碼可跨專案竊取對話資料與控制聊天機器人",
    summary: "資安公司 Varonis 發現 Google Dialogflow CX 存在一項嚴重缺陷，代號為「Rogue Agent」。該漏洞允許擁有單個 Code Block 編輯權限的攻擊者，在同一個 Google Cloud 專案內，侵害其他使用 Code Block 的聊天機器人（Agent）。攻擊者可以讀取用戶的即時對話內容、竊取用戶分享的資料，甚至讓機器人發送包含重新輸入密碼等惡意訊息。此漏洞的攻擊前提是攻擊者需具備 `dialogflow.playbooks.update` 權限，限制了攻擊者為惡意內部人員或被入侵的開發者帳號。技術上，缺陷源於所有使用 Code Blocks 的 Agent 共享一個可寫入的 Python 執行環境。攻擊者只需透過一個 Code Block，下載並覆寫這個共享環境中的核心檔案，從而讓惡意代碼在所有 Agent 的執行流程中運行。此外，該環境還具備不受限制的外部網路存取權限，繞過了 VPC Service Controls，並暴露了內部元數據服務（IMDS）。Google 已修復此漏洞，並建議用戶審核擁有 `dialogflow.playbooks.update` 權限的帳號，並檢查 Cloud Logging 紀錄以尋找異常的代碼更新或 API 呼叫。",
    tags: ["Google Dialogflow CX", "Rogue Agent", "Code Block", "Google Cloud", "Python 執行環境", "資料外洩"],
    title_en: "Google Dialogflow CX Critical Flaw: Malicious Code Can Steal Conversation Data and Control Chatbots Across Projects",
    summary_en: "Security company Varonis discovered a critical vulnerability in Google Dialogflow CX, dubbed 'Rogue Agent'. This flaw allows an attacker with single Code Block editing privileges to compromise other chatbots (Agents) within the same Google Cloud project that use Code Blocks. The attacker can read users' real-time conversation content, steal shared user data, and even make the robot send malicious messages, such as those containing re-entered passwords. The prerequisite for exploiting this vulnerability is that the attacker must possess `dialogflow.playbooks.update` permissions, limiting the attacker to malicious internal personnel or compromised developer accounts. Technically, the flaw stems from all Agents using Code Blocks sharing a writable Python execution environment. An attacker only needs to use one Code Block to download and overwrite a core file in this shared environment, allowing malicious code to run within the execution flow of all Agents. Furthermore, this environment has unrestricted external network access, bypassing VPC Service Controls, and exposing the Instance Metadata Service (IMDS). Google has patched this vulnerability and advises users to review accounts with `dialogflow.playbooks.update` permissions and check Cloud Logging records for unusual code updates or API calls.",
    tags_en: ["Google Dialogflow CX", "Rogue Agent", "Code Block", "Google Cloud", "Python Execution Environment", "Data Leakage"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/rogue-agent-flaw-could-have-let.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "零BEC揭露：新型DEBULL工具鏈濫用Microsoft設備代碼，進行MFA繞過帳號接管",
    summary: "安全公司ZeroBEC報告觀察到一場針對Microsoft 365設備的釣魚活動，攻擊者利用「協作」主題的誘餌，引導受害者進入合法的Microsoft設備登入流程。該活動不依賴假冒的密碼頁面，而是透過後端中介生成和輪詢Microsoft身份驗證中介的設備代碼Token，從而繞過多因素驗證（MFA）。這類攻擊被稱為設備代碼釣魚（Device code phishing），其本質是利用OAuth 2.0的設備授權流程，而非傳統的釣魚頁面。攻擊者透過操縱用戶輸入真實、受信任的身份驗證提示中的設備代碼，在用戶不知情的情況下授權了攻擊者的會話。該活動的戰術與先前Microsoft記錄的Storm-2372活動高度相似，但攻擊者採用了名為DEBULL的可重用工具層。DEBULL被評估為一個釣魚即服務（PhaaS）平台，結合GraphSpy等後續利用工作流，使得攻擊者可以輕鬆地進行帳號接管（ATO）和業務電子郵件詐騙（BEC）。修補建議是提高對設備代碼流程的警覺性，並加強對OAuth 2.0流程的監控。",
    tags: ["Microsoft 365", "設備代碼釣魚", "OAuth 2.0", "MFA繞過", "DEBULL", "PhaaS", "帳號接管"],
    title_en: "ZeroBEC Reveals: New DEBULL Toolkit Abuses Microsoft Device Codes for MFA Bypass Account Takeover",
    summary_en: "Security firm ZeroBEC reported observing a phishing campaign targeting Microsoft 365 devices. Attackers utilized a lure themed around 'collaboration' to guide victims into the legitimate Microsoft device login flow. This campaign does not rely on fake credential pages but instead generates and polls Microsoft authentication intermediary device code Tokens via a backend intermediary, thereby bypassing Multi-Factor Authentication (MFA). This type of attack is termed Device code phishing, fundamentally exploiting the OAuth 2.0 device authorization flow rather than traditional phishing pages. Attackers manipulate the device code, which users input into genuine, trusted authentication prompts, to authorize attacker sessions without the user's knowledge. The tactics used in this campaign are highly similar to the previously recorded Storm-2372 activity, but the attackers employed a reusable toolkit named DEBULL. DEBULL is assessed as a Phishing-as-a-Service (PhaaS) platform, combined with subsequent exploitation workflows like GraphSpy, allowing attackers to easily perform Account Takeover (ATO) and Business Email Compromise (BEC). Remediation recommendations include increasing vigilance regarding the device code flow and strengthening monitoring of the OAuth 2.0 process.",
    tags_en: ["Microsoft 365", "Device code phishing", "OAuth 2.0", "MFA bypass", "DEBULL", "PhaaS", "Account Takeover"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/debull-tooling-abuses-microsoft-device.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-037",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "法庭文件揭露：駭客利用持久性 Windows 設備 ID 進行豪華珠寶店入侵，攻擊重點在流程漏洞",
    summary: "美國檢察官透過新公開的聯邦起訴狀，將一名涉嫌駭客的個人 Peter Stokes，與一宗針對豪華珠寶零售商的入侵事件聯繫起來。攻擊者在 2025 年 5 月 12 日至 15 日期間，透過假冒員工的方式，從客戶服務熱線進入，成功控制了多個 IT 管理員帳號。他們利用 ngrok 和 Teleport 等工具，將至少 77 GB 資料竊取至雲端，並曾試圖部署勒索軟體。本次入侵的關鍵漏洞並非軟體缺陷，而是企業的身份驗證流程。調查人員追蹤到攻擊者使用的設備，發現其帶有 Microsoft 描述的持久性 Global Device Identifier。這項 ID 雖然能存活於作業系統更新，但在重裝系統後會改變。文章強調，預防措施應著重於流程優化，例如要求回撥電話驗證、經理簽字或使用 FIDO2 等防釣魚 MFA，而非僅依賴修補程式。",
    tags: ["Windows Device ID", "Scattered Spider", "Peter Stokes", "流程漏洞", "MFA", "ngrok", "資料外洩"],
    title_en: "Court Documents Reveal: Hackers Used Persistent Windows Device ID to Breach Luxury Jewelry Store, Targeting Process Vulnerabilities",
    summary_en: "U.S. prosecutors, through newly filed federal indictments, have linked an individual suspected of hacking, Peter Stokes, to a breach incident targeting a luxury jewelry retailer. Between May 12 and May 15, 2025, the attackers gained access by impersonating employees via a customer service hotline, successfully compromising multiple IT administrator accounts. They utilized tools like ngrok and Teleport to exfiltrate at least 77 GB of data to the cloud and attempted to deploy ransomware. The critical vulnerability in this breach was not a software flaw, but rather a corporate identity verification process. Investigators tracked the equipment used by the attackers, finding it bore a persistent Global Device Identifier described by Microsoft. While this ID can survive operating system updates, it changes after a system reinstallation. The article emphasizes that preventative measures should focus on process optimization—such as requiring callback phone verification, manager signatures, or using anti-phishing MFA like FIDO2—rather than relying solely on patches.",
    tags_en: ["Windows Device ID", "Scattered Spider", "Peter Stokes", "Process Vulnerability", "MFA", "ngrok", "Data Leak"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/court-filing-reveals-windows-device-id.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Writer AI 平台面臨跨租戶會話隔離漏洞：攻擊者可透過預覽連結劫持用戶帳號",
    summary: "資安研究人員揭露了企業級生成式 AI 平台 Writer 的一個嚴重會話隔離漏洞，代號為 WriteOut。此漏洞允許攻擊者透過分享一個預覽連結，在受害者點擊後，劫持其 Writer 帳號，存取私密聊天記錄、文件，以及與 Agent、私有模型和 LLM 憑證相關的敏感資料。此漏洞的嚴重性在於，攻擊者和受害者甚至不需要隸屬於同一組織。攻擊鏈是：攻擊者建立一個帶有預覽功能的 Agent 並分享連結；受害者點擊連結時，瀏覽器會將其 Writer session cookie 附加到請求；預覽代理將此 Cookie 傳送到攻擊者控制的沙盒；攻擊者控制的程式碼讀取並外洩此會話 Token；最後，攻擊者重放 Token，取得受害者帳號控制權。此漏洞利用了 Writer 框架的即時預覽功能，破壞了租戶隔離保護。在負責揭露後，Writer 已修復此問題，方法是完全阻止用戶的會話 Cookie 被傳送到沙盒預覽中，並將其遷移到隔離的來源。研究指出，原始的防禦機制（如輸入端過濾）僅檢查指令，未能阻止攻擊者透過要求 Agent 下載並執行遠端腳本來繞過安全檢查。",
    tags: ["Writer", "WriteOut", "會話隔離漏洞", "AI 平台", "跨租戶攻擊", "LLM"],
    title_en: "Writer AI Platform Faces Cross-Tenant Session Isolation Vulnerability: Attackers Can Hijack User Accounts via Preview Links",
    summary_en: "Security researchers have disclosed a critical session isolation vulnerability, dubbed WriteOut, in the enterprise-grade generative AI platform, Writer. This vulnerability allows an attacker to hijack a victim's Writer account by sharing a preview link, enabling access to private chat records, documents, and sensitive data related to Agents, private models, and LLM credentials. The severity of this vulnerability is that the attacker and victim do not even need to belong to the same organization. The attack chain is as follows: The attacker creates an Agent with preview functionality and shares the link; when the victim clicks the link, the browser attaches the Writer session cookie to the request; the preview agent transmits this cookie to a sandbox controlled by the attacker; the attacker-controlled code reads and exfiltrates this session token; finally, the attacker replays the token to gain control of the victim's account. This vulnerability exploits Writer's real-time preview feature, breaking tenant isolation protection. After the disclosure, Writer has patched the issue by completely preventing the user's session cookie from being sent to the sandbox preview and migrating it to an isolated source. Research indicates that the original defense mechanisms (such as input filtering) only checked instructions and failed to prevent the attacker from bypassing security checks by requiring the Agent to download and execute remote scripts.",
    tags_en: ["Writer", "WriteOut", "Session Isolation Vulnerability", "AI Platform", "Cross-Tenant Attack", "LLM"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/writer-ai-flaw-could-let-agent-previews.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "疑似中國資助駭客群利用 Roundcube 漏洞，針對學術機構竊取憑證與建立後門",
    summary: "研究機構 Proofpoint 偵測到一個代號 UNK_MassTraction 的威脅活動群，疑似與中國相關，正針對美國和加拿大大學的物理與工程學系，利用 Roundcube 電子郵件軟體中的多個已修補的關鍵漏洞進行攻擊。攻擊鏈首先利用跨站腳本 (XSS) 漏洞（如 CVE-2024-42009），在用戶開啟郵件時執行任意 JavaScript，竊取瀏覽器中的憑證、雙因素驗證 (2FA) 和 Cookie。接著，惡意程式 IceCube 會利用第二個後驗證的遠端代碼執行漏洞（CVE-2025-49113），在郵件伺服器上建立立足點，並部署 Web Shell（如 SquareShell）或 VShell。Web Shell 允許任意代碼執行，而 VShell 則是一個類似 Cobalt Strike 的後滲透工具。攻擊者還使用了一個名為 SNOWLIGHT 的 ELF 加載器，並設置了「延遲觸發器」來維持感染鏈，甚至在用戶登出時重試攻擊。這顯示攻擊者具備成熟的工具箱和利用 N-day 漏洞的能力，強調了郵件伺服器作為攻擊跳板的重大風險。",
    tags: ["Roundcube", "CVE-2024-42009", "CVE-2025-49113", "XSS", "VShell", "Proofpoint", "中國駭客"],
    title_en: "Suspected China-Sponsored Hackers Exploit Roundcube Vulnerability to Steal Credentials and Establish Backdoors Targeting Academic Institutions",
    summary_en: "Research firm Proofpoint detected a threat group, codenamed UNK_MassTraction, suspected to be linked to China. This group is targeting physics and engineering departments at universities in the US and Canada, exploiting multiple patched vulnerabilities in the Roundcube email software. The attack chain first utilizes a Cross-Site Scripting (XSS) vulnerability (such as CVE-2024-42009) to execute arbitrary JavaScript when a user opens an email, thereby stealing credentials, Two-Factor Authentication (2FA), and Cookies from the browser. Subsequently, the malware IceCube exploits a second post-authenticated Remote Code Execution (RCE) vulnerability (CVE-2025-49113) to establish a foothold on the mail server and deploy a Web Shell (such as SquareShell) or VShell. The Web Shell allows for arbitrary code execution, while VShell is a post-exploitation tool similar to Cobalt Strike. The attackers also used an ELF loader named SNOWLIGHT and set up 'delayed triggers' to maintain the infection chain, even retrying the attack when the user logged out. This demonstrates that the attackers possess a mature toolkit and the ability to exploit N-day vulnerabilities, highlighting the significant risk of mail servers acting as attack jump points.",
    tags_en: ["Roundcube", "CVE-2024-42009", "CVE-2025-49113", "XSS", "VShell", "Proofpoint", "China"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/suspected-china-aligned-hackers-exploit.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CERT/CC警告：Tenda設備韌體內嵌未公開管理後門，可繞過密碼驗證取得管理員權限",
    summary: "資安協調中心（CERT/CC）警告，中國網路設備製造商Tenda的多個韌體版本，內嵌了一個未公開的身份驗證後門。該漏洞被追蹤為 CVE-2026-11405。攻擊者可利用此漏洞繞過標準密碼驗證流程，無需有效憑證即可取得設備的完整管理員控制權。該後門功能存在於 `/bin/httpd` 網頁伺服器二進位檔的 `login()` 函數中。當標準 MD5 密碼驗證失敗時，系統會啟動一個替代程式路徑，直接從設備配置中讀取一個名為 `sys.rzadmin.password` 的替代密碼值，並與用戶提供的密碼進行明文比對。若匹配成功，系統將授予管理員級別存取權限（role=2）。由於該後門機制不驗證帳號，任何提供的用戶名搭配後門密碼均可成功登入。成功利用此漏洞可讓攻擊者遠端修改設定、禁用安全功能或重新配置設備，導致設備完全被接管。目前該漏洞尚未修補，用戶應立即禁用遠端管理功能，並更改預設的區域網路 IP 位址。",
    tags: ["Tenda", "CVE-2026-11405", "韌體漏洞", "網路設備", "後門", "管理員權限"],
    title_en: "CERT/CC Warning: Tenda Device Firmware Contains Undisclosed Management Backdoor, Allowing Administrator Privileges Bypass",
    summary_en: "The China Computer Emergency Response Team (CERT/CC) has warned that multiple firmware versions from the Chinese network equipment manufacturer Tenda contain an undisclosed authentication backdoor. This vulnerability is tracked as CVE-2026-11405. Attackers can exploit this vulnerability to bypass the standard password authentication process, gaining full administrator control over the device without valid credentials. The backdoor function resides within the `login()` function of the `/bin/httpd` web server binary. When standard MD5 password authentication fails, the system initiates an alternative code path that reads a fallback password value, named `sys.rzadmin.password`, directly from the device configuration and compares it in plaintext with the user-provided password. If the match is successful, the system grants administrator-level access (role=2). Since this backdoor mechanism does not validate the account, any provided username paired with the backdoor password can successfully log in. Successful exploitation allows attackers to remotely modify settings, disable security features, or reconfigure the device, leading to complete device takeover. As this vulnerability is currently unpatched, users should immediately disable remote management features and change the default LAN IP address.",
    tags_en: ["Tenda", "CVE-2026-11405", "Firmware Vulnerability", "Network Equipment", "Backdoor", "Administrator Privileges"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/certcc-warns-of-hidden-admin-backdoor.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-041",
    trackers: ["os"],
    category: "Apple",
    title: "Notion推出Agents新版iPhone App：整合多AI模型，強化跨設備工作流程",
    summary: "Notion宣布取代舊版郵件應用，推出名為Agents的全新iPhone應用程式。此應用旨在提供一個聊天介面，讓用戶能夠隨時隨地從Notion工作區、資料庫、專案文件以及所有連接的工具中獲取資訊。用戶可以透過文字、語音或照片捕捉想法，並讓Agents自動進行整理。它支援執行創建頁面、起草更新或跨連接工具搜尋等快速操作。Agents的關鍵特色是能夠連接到用戶的實際工作資料，並支援自定義Agent，從而讓團隊成員在任何地點都能獲得答案或執行工作流程。該應用程式支援多個主流AI模型，包括Anthropic的Claude、Google的Gemini和OpenAI的GPT。目前僅針對iPhone設計，但未來也將支援iPad和Mac。此更新強化了Notion在AI輔助工作流和跨平台協作方面的能力。",
    tags: ["Notion", "Agents", "iPhone", "AI模型", "GPT", "Gemini", "Claude"],
    title_en: "Notion Launches New Agents iPhone App: Integrating Multiple AI Models to Enhance Cross-Device Workflow",
    summary_en: "Notion has announced the replacement of its old email application with a brand-new iPhone app called Agents. This application is designed to provide a chat interface that allows users to retrieve information from Notion workspaces, databases, project files, and all connected tools anytime, anywhere. Users can capture ideas using text, voice, or photos, and let Agents automatically organize them. It supports quick actions such as creating pages, drafting updates, or searching across connected tools. The key feature of Agents is its ability to connect to the user's actual work data and support custom Agents, enabling team members to get answers or execute workflows regardless of their location. The application supports multiple major AI models, including Anthropic's Claude, Google's Gemini, and OpenAI's GPT. While currently designed only for iPhone, it will eventually support iPad and Mac. This update strengthens Notion's capabilities in AI-assisted workflows and cross-platform collaboration.",
    tags_en: ["Notion", "Agents", "iPhone", "AI Models", "GPT", "Gemini", "Claude"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/notion-just-launched-a-brand-new-iphone-app-called-agents", lang: "EN" }
    ]
  },
  {
    id: "20260707-042",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 AirPods Pro 3 等多款耳機新一輪 Beta 韌體更新，支援 iOS 27 Beta 整合新功能",
    summary: "Apple 針對多款 AirPods 型號，包括 AirPods Pro 3、AirPods Max 2 等，發布了新一輪的 Beta 韌體更新。本次更新的發布時間點，與 iOS 27 Beta 3 的發布時間點相呼應，顯示了 Apple 生態系統的緊密整合。受影響的產品涵蓋了 AirPods Max 2、AirPods Pro 3、AirPods Pro 2、AirPods (4th gen) 等多款耳機。本次 Beta 韌體版本為 9.0.314，主要目的是讓用戶能夠提前體驗新功能，例如自定義 EQ 和 Apple GymKit 同步等。用戶需在運行 macOS 27 Beta 或 iOS 27 Beta 的設備上，透過藍牙設定進入「AirPods Beta Updates」手動開啟 Beta 更新功能。建議用戶留意官方指引，確保耳機在充電盒內且靠近配對的 iPhone 或 Mac 時進行更新。",
    tags: ["Apple", "AirPods Pro 3", "AirPods Max 2", "iOS 27", "韌體更新", "Beta 測試"],
    title_en: "Apple Releases New Round of Beta Firmware Updates for AirPods Pro 3 and Other Earbuds, Supporting iOS 27 Beta Integrated Features",
    summary_en: "Apple has released a new round of Beta firmware updates for multiple AirPods models, including AirPods Pro 3 and AirPods Max 2. The timing of this update aligns with the release of iOS 27 Beta 3, demonstrating the tight integration within the Apple ecosystem. Affected products include AirPods Max 2, AirPods Pro 3, AirPods Pro 2, and AirPods (4th gen). This Beta firmware version is 9.0.314, and its primary purpose is to allow users to preview new features such as custom EQ and Apple GymKit synchronization. Users must run macOS 27 Beta or iOS 27 Beta devices and manually enable the Beta update through Bluetooth settings under 'AirPods Beta Updates.' Users are advised to follow official guidelines, ensuring the earbuds are in the charging case and near a paired iPhone or Mac when performing the update.",
    tags_en: ["Apple", "AirPods Pro 3", "AirPods Max 2", "iOS 27", "Firmware Update", "Beta Test"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/apple-releases-new-beta-firmware-for-airpods-pro-3-and-more", lang: "EN" }
    ]
  },
  {
    id: "20260707-043",
    trackers: ["os"],
    category: "Apple",
    title: "飛航追蹤App Flighty更新：新增連線助理與登機門預測功能，提升機場旅程規劃體驗",
    summary: "飛航追蹤應用程式 Flighty 在 App Store 發布了重大更新，主要新增了「連線助理」（Connection Assistant）和「登機門預測」（Gate Predictions）兩大功能。連線助理能提供用戶特定轉機的步驟指引，包括航廈變更、安檢、護照管制等，並根據歷史數據估算每個步驟所需時間。更進一步，用戶可加入護照資訊，讓App動態顯示適用於其國籍的個人化指引，例如是否可使用電子閘門。此外，新功能「登機門預測」利用歷史數據來預測飛機的抵達和出發登機門，被開發團隊譽為「業界首創」。這些更新旨在結合豐富的航班數據、機場智能資訊，為用戶提供更全面、更精準的機場旅程規劃輔助。Flighty 目前可在 App Store 免費下載。",
    tags: ["Flighty", "App Store", "連線助理", "登機門預測", "iOS", "飛航追蹤"],
    title_en: "Flighty Flight Tracking App Updates: Adds Connection Assistant and Gate Prediction Features to Enhance Airport Journey Planning Experience",
    summary_en: "The Flighty flight tracking application has released a major update on the App Store, primarily introducing two key features: \"Connection Assistant\" and \"Gate Predictions.\" The Connection Assistant provides users with step-by-step guidance for specific transfers, including terminal changes, security screening, and passport control, and estimates the time required for each step based on historical data. Furthermore, users can add passport information, allowing the app to dynamically display personalized guidance applicable to their nationality, such as whether they can use e-gates. Additionally, the new \"Gate Predictions\" feature utilizes historical data to predict both arrival and departure gates, a capability the development team calls \"industry-first.\" These updates aim to combine rich flight data and smart airport information to provide users with more comprehensive and accurate airport journey planning assistance. Flighty is currently available for free download on the App Store.",
    tags_en: ["Flighty", "App Store", "Connection Assistant", "Gate Predictions", "iOS", "Flight Tracking"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/flighty-update-adds-powerful-new-connection-assistant-feature", lang: "EN" }
    ]
  },
  {
    id: "20260707-044",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 18 Pro 傳聞規格：供應鏈洩密指出機身與後置鏡頭模組將增加約 2mm 厚度",
    summary: "根據一位知名的微博洩密帳號「Fixed Focus Digital」的最新爆料，結合先前從蘋果供應商塔塔（Tata）洩露的資料，傳聞指出下一代 iPhone 18 Pro 的機身和後置鏡頭模組將比現行機型更厚。洩密內容指出，整體機身和後置鏡頭平台都增加了厚度，具體增加量約為 2mm。這項規格變動可能與傳聞中的可變光圈主鏡系統設計有關。雖然洩漏的資料包含內部文件和產品測試影片，但這些資訊仍屬於傳聞性質，尚未經蘋果官方證實。實務上，這預示著 iPhone 18 Pro 在設計上可能會有顯著的結構調整，特別是鏡頭模組的擴大。建議用戶關注蘋果官方發布的正式產品資訊，以確認最終規格。",
    tags: ["iPhone 18 Pro", "Apple", "供應鏈洩密", "機身設計", "可變光圈", "產品規格"],
    title_en: "iPhone 18 Pro Rumored Specs: Supply Chain Leak Indicates Body and Rear Camera Module Will Increase by Approx. 2mm in Thickness",
    summary_en: "According to the latest leak from the popular Weibo account \"Fixed Focus Digital,\" combined with previously leaked data from Apple supplier Tata, rumors suggest that the next-generation iPhone 18 Pro's body and rear camera module will be thicker than current models. The leaked content indicates that both the overall body and the rear camera platform have increased in thickness, with a specific increase of approximately 2mm. This specification change may be related to the rumored variable aperture main camera system design. Although the leaked data includes internal documents and product test videos, this information remains speculative and has not been officially confirmed by Apple. Practically, this suggests that the iPhone 18 Pro may undergo significant structural adjustments in its design, especially the expansion of the camera module. Users are advised to monitor official product information released by Apple to confirm the final specifications.",
    tags_en: ["iPhone 18 Pro", "Apple", "Supply Chain Leak", "Body Design", "Variable Aperture", "Product Specifications"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/weibo-leaker-says-iphone-18-pro-thickness-will-be-surprising", lang: "EN" }
    ]
  },
  {
    id: "20260707-045",
    trackers: ["os"],
    category: "Apple",
    title: "Xbox 家庭設定應用程式更新：為 iPhone/iPad 增添進階主機親子控管功能",
    summary: "微軟發布了 Xbox 家庭設定應用程式的更新版本，該應用程式適用於 iPhone 和 iPad，旨在強化遠端主機（Xbox）的親子控管功能。新功能包括「應用程式區塊與限制」（App Blocks & Limits），允許父母為個別應用程式和遊戲設定時間限制，並可阻止特定遊戲的存取。此外，用戶可以審核額外使用應用程式和遊戲時間的請求，並透過新增的「每週」、「週末」和「自訂」排程選項，建立更精細化的使用時間表。此更新讓父母無需直接進入主機即可遠端管理 Xbox 的使用權限。用戶可從 App Store 下載此應用程式。文章同時提及 Apple 正在透過 iOS 27 進行螢幕時間（Screen Time）的親子控管設定大改版，顯示兩大生態系都在強化裝置的家庭監控工具。",
    tags: ["Xbox", "Microsoft", "iPhone", "iPad", "親子控管", "App Store", "iOS 27"],
    title_en: "Xbox Family Settings App Update: Adds Advanced Console Parental Controls for iPhone/iPad",
    summary_en: "Microsoft has released an updated version of the Xbox Family Settings app, designed for iPhone and iPad, aimed at strengthening parental controls for remote consoles (Xbox). New features include 'App Blocks & Limits,' which allows parents to set time restrictions for individual applications and games, and to block access to specific titles. Furthermore, users can review requests for additional application and game usage time, and establish more granular usage schedules through new 'Weekly,' 'Weekend,' and 'Custom' scheduling options. This update allows parents to manage Xbox usage rights remotely without needing to access the console directly. Users can download this application from the App Store. The article also mentions that Apple is significantly overhauling Screen Time parental controls with iOS 27, indicating that both major ecosystems are strengthening device family monitoring tools.",
    tags_en: ["Xbox", "Microsoft", "iPhone", "iPad", "Parental Controls", "App Store", "iOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/xbox-family-settings-for-iphone-and-ipad-expands-console-parental-control-tools", lang: "EN" }
    ]
  },
  {
    id: "20260707-046",
    trackers: ["os"],
    category: "Apple",
    title: "Pocket Casts 更新 8.15：強化 CarPlay 支援，並新增鎖定畫面與控制中心章節藝術圖",
    summary: "播客應用程式 Pocket Casts 發布了新版本 8.15，為用戶帶來多項功能升級。本次更新特別加強了對 CarPlay 的支援，讓章節藝術圖（chapter artwork）現在可以在 CarPlay 介面、鎖定畫面和控制中心顯示，提升駕駛時的用戶體驗。此外，應用程式的迷你播放器（mini player）控制區域變大，並優化了介面邊界。功能層面，本次更新新增了資料夾的右鍵選單（context menus）和一個用於標記已收聽單集的 Siri 捷徑。然而，本次更新也淘汰了對舊版作業系統的支援，現在要求用戶必須使用 iOS 17 及 watchOS 10 或更高版本才能更新應用程式。建議用戶檢查自身設備的作業系統版本，確保符合最低要求，以順利使用最新功能。",
    tags: ["Pocket Casts", "CarPlay", "iOS 17", "watchOS 10", "播客應用", "Apple App Store"],
    title_en: "Pocket Casts Update 8.15: Enhanced CarPlay Support and New Chapter Artwork for Lock Screen and Control Center",
    summary_en: "The podcast application Pocket Casts has released a new version, 8.15, bringing multiple feature upgrades for users. This update significantly enhances support for CarPlay, allowing chapter artwork to now display on the CarPlay interface, the Lock Screen, and the Control Center, thereby improving the user experience while driving. Additionally, the application's mini player control area has been enlarged, and the interface boundaries have been optimized. Functionally, this update introduces right-click context menus for folders and a Siri Shortcut for marking a single episode as listened to. However, this update also deprecates support for older operating systems, now requiring users to use iOS 17 and watchOS 10 or later to update the application. Users are advised to check their device's operating system version to ensure they meet the minimum requirements for smooth use of the latest features.",
    tags_en: ["Pocket Casts", "CarPlay", "iOS 17", "watchOS 10", "Podcast App", "Apple App Store"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/pocket-casts-update-brings-three-new-features-including-carplay-chapter-artwork", lang: "EN" }
    ]
  },
  {
    id: "20260707-047",
    trackers: ["os"],
    category: "Apple",
    title: "法官駁回 AirPods Max 結露缺陷訴訟多數指控，案件將聚焦於保固法規爭議",
    summary: "一宗關於 Apple AirPods Max 結露缺陷的集體訴訟案，已在布魯克林聯邦法院進行審理。原告方提出多項指控，包括產品結露導致連線問題、音質下降、耳部偵測失敗及電池問題。然而，聯邦法官 Orelia E. Merchant 已裁定，根據紐約州法律提出的多數指控皆已駁回，且無法再次提出。這使得原告 Arthur Apicella 的多項指控，如違反默示保固和隱瞞缺陷，全部被排除。訴訟將繼續進行，但範圍縮小至另一原告 Dustin Amundson 在華盛頓州法律下的兩項保固權利主張。法官指出，紐約州的默示保固僅要求產品達到最低品質，而非完美，且原告曾承認使用該產品觀看電影，證明其基本功能仍可運作。此裁決大幅縮小了訴訟範圍，案件將圍繞在剩餘的保固法規爭議點持續進行。",
    tags: ["Apple", "AirPods Max", "結露缺陷", "集體訴訟", "默示保固", "聯邦法院"],
    title_en: "Judge Dismisses Most Claims in AirPods Max Condensation Defect Lawsuit, Case to Focus on Warranty Law Disputes",
    summary_en: "A class-action lawsuit concerning a condensation defect in Apple AirPods Max was heard in the U.S. District Court for the Southern District of New York. The plaintiffs raised multiple claims, including connection issues, degraded sound quality, failure of ear detection, and battery problems caused by product condensation. However, federal judge Orelia E. Merchant ruled that most of the claims brought under New York law are dismissed and cannot be refiled. This exclusion eliminated several claims made by plaintiff Arthur Apicella, such as breach of implied warranty and concealment of defects. The lawsuit will continue, but its scope is narrowed to two warranty claims brought by another plaintiff, Dustin Amundson, under Washington state law. The judge noted that New York's implied warranty only requires the product to meet a minimum quality standard, not perfection, and that the plaintiff had admitted to using the product for watching movies, proving its basic functionality was still operational. This ruling significantly narrows the scope of the litigation, which will continue focusing on the remaining warranty law disputes.",
    tags_en: ["Apple", "AirPods Max", "Condensation Defect", "Class Action Lawsuit", "Implied Warranty", "Federal Court"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/airpods-max-condensation-lawsuit-significantly-narrowed-by-judge", lang: "EN" }
    ]
  },
  {
    id: "20260707-048",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 停止簽署 iOS 26.5 和 26.5.1，要求用戶升級至最新安全版本",
    summary: "蘋果公司（Apple）已停止為 iOS 26.5 和 iOS 26.5.1 簽署軟體，這意味著用戶無法從更新版本降級到這些舊版系統。此舉發生在蘋果上週針對 iPhone 發布了關鍵安全修復後。蘋果通常會在發布更新版本後，停止簽署舊版作業系統，以確保用戶能使用最安全的軟體。本次的修復版本 iOS 26.5.2 被標記為重要的安全更新。此外，蘋果還提早進行了針對 iOS 26.6 的修復，以應對 AI 驅動的駭客風險。目前最新的正式版本為 iOS 26.5.2，而 iOS 26.6 預計將於本月發布，之後 iOS 27 也將進入公開測試階段。",
    tags: ["Apple", "iOS", "iOS 26.5.2", "安全更新", "軟體簽署", "降級限制"],
    title_en: "Apple Stops Signing iOS 26.5 and 26.5.1, Requiring Users to Upgrade to the Latest Secure Version",
    summary_en: "Apple has stopped signing software for iOS 26.5 and iOS 26.5.1, meaning users can no longer downgrade to these older systems. This action occurred after Apple released critical security fixes for iPhones last week. Apple typically stops signing older operating system versions after releasing an update to ensure users are running the most secure software. The current patched version, iOS 26.5.2, is marked as an important security update. Furthermore, Apple has preemptively prepared a patch for iOS 26.6 to address risks posed by AI-driven hacking. The latest official version is currently iOS 26.5.2, while iOS 26.6 is expected to be released this month, followed by iOS 27 entering public beta testing.",
    tags_en: ["Apple", "iOS", "iOS 26.5.2", "Security Update", "Software Signing", "Downgrade Restriction"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/apple-stops-signing-ios-26-5-1-after-critical-security-fix-release", lang: "EN" }
    ]
  },
  {
    id: "20260707-049",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 開發者測試版：Siri AI 可存取第三方應用程式資料，提升隱私與安全風險",
    summary: "蘋果在最新的 iOS 27 開發者測試版中，大幅升級了 Siri AI 的功能。此版本允許 Siri 不僅能處理系統內資訊，還能存取來自第三方應用程式的資料。目前觀察到的應用情境包括從電動車相關應用程式中提取剩餘電池資訊。這項功能雖然提升了使用者體驗，但實質上擴大了 Siri 存取用戶個人資料的範圍，潛在的隱私與安全風險也隨之增加。開發者和使用者應留意，未來可能會有更多類型的第三方資料被 Siri 擷取。建議用戶在測試新功能時，特別注意授權範圍，並評估資料被 AI 存取帶來的隱私權影響。",
    tags: ["iOS 27", "Siri AI", "第三方應用程式", "Apple", "隱私風險", "開發者測試版"],
    title_en: "iOS 27 Developer Beta: Siri AI Can Access Third-Party App Data, Increasing Privacy and Security Risks",
    summary_en: "In the latest iOS 27 Developer Beta, Apple has significantly upgraded Siri AI's functionality. This version allows Siri to access not only system information but also data from third-party applications. Observed use cases include extracting remaining battery information from electric vehicle-related apps. While this feature enhances user experience, it substantially expands the scope of data Siri can access from user personal data, consequently increasing potential privacy and security risks. Developers and users should note that more types of third-party data may be captured by Siri in the future. Users are advised to pay special attention to authorization scopes when testing new features and to evaluate the privacy implications of data being accessible to AI.",
    tags_en: ["iOS 27", "Siri AI", "Third-Party Applications", "Apple", "Privacy Risk", "Developer Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/siri-ai-can-pull-info-from-third-party-apps-in-the-latest-developer-beta", lang: "EN" }
    ]
  },
  {
    id: "20260707-050",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone Air 2 預計升級：搭載超廣角鏡頭與更高容量電池",
    summary: "根據洩密消息來源的報導，下一代 iPhone Air 2 預計將在明年春季推出，並針對現有機型的兩大缺點進行改進。主要的升級包括：第一，主鏡頭將搭配超廣角雙鏡頭，取代現有的單鏡頭設計，提升拍照功能；第二，電池容量預計將大幅提升至 3,500 mAh（原機型為 3,149 mAh）。這項電池升級的預期容量，使其更接近未來 iPhone 17 的 3,692 mAh。這些改進預計將使 iPhone Air 2 的使用體驗更接近主流旗艦機型，吸引對輕薄機身有興趣的用戶。建議關注官方發布或可靠的供應鏈資訊，以確認最終規格。",
    tags: ["iPhone Air 2", "Apple", "超廣角鏡頭", "電池容量", "手機規格", "產品預測"],
    title_en: "iPhone Air 2 Expected Upgrade: Featuring Ultra-Wide Camera and Higher Capacity Battery",
    summary_en: "According to leaked sources, the next-generation iPhone Air 2 is expected to launch next spring, addressing two major shortcomings of the current model. The main upgrades include: first, the main camera will feature a dual ultra-wide lens setup, replacing the current single-lens design to enhance photography capabilities; and second, the battery capacity is anticipated to significantly increase to 3,500 mAh (up from the current model's 3,149 mAh). This expected battery capacity brings it closer to the 3,692 mAh of the future iPhone 17. These improvements are expected to make the iPhone Air 2's user experience closer to mainstream flagship models, appealing to users interested in lightweight designs. Users are advised to monitor official announcements or reliable supply chain information to confirm final specifications.",
    tags_en: ["iPhone Air 2", "Apple", "Ultra-Wide Camera", "Battery Capacity", "Mobile Specifications", "Product Prediction"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/leaker-backs-reports-of-two-iphone-air-2-improvements-with-more-detail", lang: "EN" }
    ]
  },
  {
    id: "20260707-051",
    trackers: ["os"],
    category: "Apple",
    title: "Jamf分享：企業AI整合趨勢下的Apple設備安全與管理挑戰",
    summary: "本文為一場關於企業工作場景（Apple @ Work）的討論，重點探討了企業在深度整合人工智慧（AI）應用後所面臨的設備安全與管理挑戰。發言人來自Jamf，分享了針對使用Apple設備的企業所進行的調查結果。調查指出，隨著企業對AI的應用日益深入，相關的事件發生率正在上升。這強調了企業不能僅關注AI的應用層面，更必須建立一套完整的、專業級的平台來管理和保護其Apple設備。文章間接提醒企業，在推動AI轉型時，必須同步強化設備的自動部署、管理和保護能力，以應對日益複雜的威脅。",
    tags: ["Apple", "Jamf", "企業安全", "AI整合", "設備管理", "Apple Unified Platform"],
    title_en: "Jamf Shares: Security and Management Challenges for Apple Devices in the Era of Enterprise AI Integration",
    summary_en: "This article summarizes a discussion focused on the enterprise workspace (Apple @ Work), specifically addressing the device security and management challenges faced by organizations as they deeply integrate Artificial Intelligence (AI) applications. The speaker, representing Jamf, shared findings from an investigation into enterprises using Apple devices. The survey indicated that as the application of AI becomes more pervasive in the enterprise, the frequency of related security incidents is rising. This underscores the necessity for organizations to do more than just focus on AI applications; they must establish a comprehensive, professional-grade platform to manage and protect their Apple devices. The article indirectly advises enterprises that when driving AI transformation, they must simultaneously strengthen device automation, management, and protection capabilities to cope with increasingly complex threats.",
    tags_en: ["Apple", "Jamf", "Enterprise Security", "AI Integration", "Device Management", "Apple Unified Platform"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/the-3-pillars-of-ai-for-the-apple-enterprise", lang: "EN" }
    ]
  },
  {
    id: "20260707-052",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "北韓駭客Lazarus在NPM發動惡意套件攻擊，竊取開發者資料與監控剪貼簿",
    summary: "資安廠商JFrog發現，北韓駭客團體Lazarus在NPM套件管理平台發動攻擊。駭客上架了多個偽裝成合法建置工具（polyfill）的惡意套件，如 rollup-packages-polyfill-core 等。這些套件並未採用字誤植手法，而是巧妙地拼湊相關關鍵字，使其看起來極為正規，影響範圍廣泛。攻擊透過多層次酬載部署，一旦開發者安裝，會引導其執行後續的JavaScript酬載，最終在受害電腦上部署遠端存取木馬（RAT）。攻擊的目標包括竊取瀏覽器與加密貨幣錢包資料，以及監控系統剪貼簿。JFrog指出，雖然NPM維護團隊已處理部分套件，但仍有部分惡意套件仍在流通，開發者應提高警覺，並審慎檢查所有第三方元件的來源與完整性。",
    tags: ["JFrog", "NPM", "Lazarus", "惡意套件", "供應鏈攻擊", "RAT", "開源安全"],
    title_en: "North Korean Hackers Lazarus Launch Malicious Package Attack on NPM, Stealing Developer Data and Monitoring Clipboard",
    summary_en: "Security vendor JFrog discovered that the North Korean hacking group Lazarus launched an attack on the NPM package management platform. The hackers uploaded multiple malicious packages disguised as legitimate build tools (polyfills), such as rollup-packages-polyfill-core. These packages did not use typo-squatting techniques; instead, they cleverly combined relevant keywords, making them appear highly legitimate and affecting a wide range of users. The attack deployed multi-layered payloads. Once a developer installed the package, it would prompt the execution of subsequent JavaScript payloads, ultimately deploying a Remote Access Trojan (RAT) on the victim's computer. The attack targeted the theft of browser and cryptocurrency wallet data, as well as the monitoring of the system clipboard. JFrog pointed out that although the NPM maintenance team has addressed some packages, some malicious packages are still circulating. Developers are advised to increase vigilance and carefully check the source and integrity of all third-party components.",
    tags_en: ["JFrog", "NPM", "Lazarus", "Malicious Packages", "Supply Chain Attack", "RAT", "Open Source Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177138", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-053",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "北韓駭客團體PolinRider攻擊開源生態圈：透過NPM、Go模組等發布大量惡意套件",
    summary: "資安公司Socket揭露，北韓駭客團體PolinRider正針對開發生態圈進行供應鏈攻擊。這些駭客活動範圍廣泛，已滲透NPM、Packagist、Go模組及Chrome Web Store等多個平台，共涉及108個套件並發布了162個惡意版本。受害套件中，Go模組佔最多，達80個。攻擊模式為入侵合法的GitHub儲存庫，透過混淆的JavaScript惡意載入工具，植入「一行指令」的惡意酬載，以規避人工審查。駭客常接管套件維護者的GitHub帳號，並利用強制推送（force push）竄改歷史紀錄，使儲存庫呈現「近期未變動」的假象。惡意程式包含Dev#Popper與OmniStealer，具備遠端執行命令、竊取憑證、瀏覽器資料及洗劫加密貨幣錢包的能力。文章提醒，由於攻擊持續進行，開發人員應提高警覺，並特別留意GitHub的Activity分頁以檢視強制推送的歷史變動。",
    tags: ["北韓駭客", "PolinRider", "供應鏈攻擊", "NPM", "Go模組", "開源安全"],
    title_en: "North Korean Hacker Group PolinRider Attacks Open Source Ecosystem: Releases Numerous Malicious Packages via NPM, Go Modules, and Others",
    summary_en: "Security firm Socket revealed that the North Korean hacker group PolinRider is conducting supply chain attacks targeting the development ecosystem. These hackers have broadly infiltrated multiple platforms, including NPM, Packagist, Go modules, and the Chrome Web Store, involving a total of 108 packages and releasing 162 malicious versions. Among the compromised packages, Go modules account for the largest share, reaching 80. The attack pattern involves infiltrating legitimate GitHub repositories and injecting malicious payloads—often via obfuscated JavaScript loaders—with a \"one-line command\" to evade manual review. The hackers frequently take over the repository maintainers' GitHub accounts and utilize force push to tamper with the historical record, creating the false impression that the repository has \"not changed recently.\" The malicious code includes Dev#Popper and OmniStealer, which possess capabilities such as remote command execution, credential theft, browser data exfiltration, and cryptocurrency wallet draining. The article warns that because the attacks are ongoing, developers must heighten their vigilance and pay special attention to the GitHub Activity tab to check for force push history changes.",
    tags_en: ["North Korean Hacker", "PolinRider", "Supply Chain Attack", "NPM", "Go Modules", "Open Source Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177137", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-054",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "AWS Certificate Manager 支援 ACMEv2 協定，協助企業自動化管理 TLS 憑證生命週期",
    summary: "隨著公開 TLS 憑證有效期限縮短，傳統人工追蹤與續約憑證的方式容易導致服務中斷。為此，AWS 雲端服務供應商宣布其憑證管理服務 AWS Certificate Manager (ACM) 已支援 ACME 協定。企業現在可以在 ACM 中建立由 AWS 代管、支援 ACMEv2 用戶端連線的伺服器端點，利用 Certbot、cert-manager 等主流工具，取得由 Amazon Trust Services 核發的公開 TLS 憑證。此功能讓企業能將透過 ACME 簽發的憑證集中納入 ACM 進行管理，並可透過綁定 AWS Identity and Access Management (IAM) 角色，集中控管各用戶端可申請的網域範圍，大幅提升憑證生命週期的自動化、標準化與治理能力。",
    tags: ["AWS", "ACM", "TLS憑證", "ACMEv2", "憑證管理", "DevOps"],
    title_en: "AWS Certificate Manager Supports ACMEv2 Protocol, Aiding Automated TLS Certificate Lifecycle Management",
    summary_en: "As the validity period of public TLS certificates shortens, traditional manual methods for tracking and renewing certificates often lead to service disruptions. To address this, the cloud service provider AWS announced that its certificate management service, AWS Certificate Manager (ACM), now supports the ACME protocol. Enterprises can now create server endpoints in ACM that are managed by AWS and support ACMEv2 client connections. Using mainstream tools like Certbot and cert-manager, organizations can obtain public TLS certificates issued by Amazon Trust Services. This feature allows enterprises to centralize the management of certificates issued via ACME within ACM, and by binding it to AWS Identity and Access Management (IAM) roles, they can centrally control the domain scope that various clients can request, significantly enhancing the automation, standardization, and governance of the certificate lifecycle.",
    tags_en: ["AWS", "ACM", "TLS Certificate", "ACMEv2", "Certificate Management", "DevOps"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177134", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-055",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Noma Security揭露GitLost：利用公開GitHub Issue欺騙Agentic Workflow洩露私有Repo內容",
    summary: "Noma Security研究人員發現了一種名為GitLost的攻擊技術，可利用公開的GitHub Issue，在未竊取憑證或無需存取權限的情況下，欺騙GitHub Agentic Workflows洩露組織私有儲存庫的內容。該漏洞利用了AI代理（Agent）無法可靠區分指令來源的固有弱點，透過在Issue內容中植入惡意指令，引導已賦予跨Repo讀取權限的Agent將私有資料（如README）貼到公開評論中。攻擊的成功依賴於組織為Agent設定了過廣的跨Repo讀取權限。雖然GitHub已實施了沙箱、預設只讀Token和內容掃描等防護措施，但Noma的PoC展示了僅一個單詞的修改（如在指令前加「Additionally」）就能繞過這些防禦。實務建議是：嚴格限制Agent的Token權限範圍（Scope），僅授予其處理單一Repo的權限；並限制其發布內容的範圍，特別是公開評論的生成，以阻斷資料外洩的通道。",
    tags: ["GitHub", "Agentic Workflows", "Prompt Injection", "GitLost", "AI Agent", "私有儲存庫"],
    title_en: "Noma Security Uncovers GitLost: Exploiting Public GitHub Issues to Deceive Agentic Workflows and Leak Private Repo Contents",
    summary_en: "Noma Security researchers discovered an attack technique called GitLost, which can exploit public GitHub Issues to deceive GitHub Agentic Workflows and leak the contents of an organization's private repositories without stealing credentials or requiring access permissions. The vulnerability leverages an inherent weakness in AI Agents: their inability to reliably distinguish the source of instructions. By embedding malicious instructions within an Issue's content, the attack guides an Agent, which has been granted cross-repo read permissions, to paste private data (such as README files) into public comments. The success of the attack relies on the organization granting the Agent overly broad cross-repo read permissions. Although GitHub has implemented protective measures such as sandboxing, default read-only tokens, and content scanning, Noma's PoC demonstrated that modifying just a single word (e.g., adding 'Additionally' before the instruction) is enough to bypass these defenses. Practical recommendations include: strictly limiting the Agent's token scope to only grant permissions for processing a single repository; and restricting the scope of content publication, especially the generation of public comments, to block data exfiltration channels.",
    tags_en: ["GitHub", "Agentic Workflows", "Prompt Injection", "GitLost", "AI Agent", "Private Repository"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/public-github-issue-could-trick-github.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-056",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "AI 時代下的軟體供應鏈安全：從程式碼到模型與代理的風險擴展",
    summary: "隨著 AI 工具和模型（如 Model Context Protocol）深度整合到軟體建構、部署和運行流程中，軟體供應鏈的風險邊界已大幅擴大。傳統的供應鏈安全關注點（如開源套件、依賴關係）已不足夠。現在，風險不僅存在於程式碼本身，更存在於生成程式碼的 AI 代理（Agents）、模型本身，以及驅動這些流程的工具鏈。攻擊者可以透過植入惡意提示（Prompt）來引導 AI 寫入或拉取惡意元件，使得傳統的掃描工具無法全面覆蓋。因此，企業必須將「血緣追溯」（Lineage）的概念擴展到整個 AI 管道，包括模型和代理的活動記錄與配置變更。此外，安全優先級的設定必須從單純的漏洞數量，轉向基於實際可利用性（Exploitability）和運行時上下文的評估，才能建立起有效的安全防禦體系。",
    tags: ["AI 安全", "軟體供應鏈", "Agentic AI", "Model Context Protocol", "血緣追溯", "Prompt 注入"],
    title_en: "Software Supply Chain Security in the AI Era: Expanding Risks from Code to Models and Agents",
    summary_en: "As AI tools and models (such as Model Context Protocol) are deeply integrated into the software build, deployment, and operational processes, the risk perimeter of the software supply chain has significantly expanded. Traditional supply chain security concerns (such as open-source packages and dependencies) are no longer sufficient. Currently, risks exist not only in the code itself but also in the AI agents that generate the code, the models themselves, and the toolchains that drive these processes. Attackers can guide AI to write or pull malicious components by injecting malicious prompts, making it impossible for traditional scanning tools to provide comprehensive coverage. Therefore, enterprises must extend the concept of 'Lineage' across the entire AI pipeline, including the activity records and configuration changes of models and agents. Furthermore, security prioritization must shift from merely the number of vulnerabilities to an assessment based on actual exploitability and runtime context to establish an effective security defense system.",
    tags_en: ["AI Security", "Software Supply Chain", "Agentic AI", "Model Context Protocol", "Lineage", "Prompt Injection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/what-changes-when-your-software-supply.html", lang: "EN" }
    ]
  },
  {
    id: "20260707-057",
    trackers: ["os"],
    category: "Android",
    title: "三星官方確認 7 月 22 日 Unpacked 活動，預計發表 Galaxy Z Fold 8、Z Flip 8 及 Galaxy Watch 9 系列新品",
    summary: "三星電子已正式宣布於 7 月 22 日舉行 Unpacked 活動，屆時將全面揭曉其最新的 Galaxy 系列裝置，包括 Galaxy Z Fold 8、Galaxy Z Fold 8 Ultra、Galaxy Z Flip 8，以及 Galaxy Watch 9 和 Galaxy Watch Ultra 2 等新品。本次活動預計將聚焦於結合智慧功能與新型外形，以樹立 AI 時代的全新標準。活動將在倫敦舉行，並透過 YouTube 等平台直播。目前已開放預約，預約者可獲得 $30 的預約點數，並有機會參與抽獎活動。文章提及 Z Fold 8 系列的價格資訊，暗示「Wide」型號可能比「Ultra」型號更具價格優勢。本次發表預計將涵蓋可折疊手機、智慧手錶，甚至可能包含新的 Galaxy Buds 和與 Google 合作的 Galaxy 眼鏡。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Galaxy Watch 9", "Unpacked", "Android"],
    title_en: "Samsung Confirms Unpacked Event on July 22, Expected to Launch Galaxy Z Fold 8, Z Flip 8, and Galaxy Watch 9 Series",
    summary_en: "Samsung Electronics has officially announced an Unpacked event on July 22, where it will unveil its latest Galaxy series devices, including the Galaxy Z Fold 8, Galaxy Z Fold 8 Ultra, Galaxy Z Flip 8, and new products like the Galaxy Watch 9 and Galaxy Watch Ultra 2. This event is expected to focus on combining smart functionality with new form factors, setting a new standard for the AI era. The event will be held in London and streamed via platforms like YouTube. Pre-orders are currently open, offering pre-order points of $30 and opportunities to participate in raffles. The article mentions pricing information for the Z Fold 8 series, suggesting that the 'Wide' model might offer better price advantages compared to the 'Ultra' model. This launch is expected to cover foldable phones, smartwatches, and may even include new Galaxy Buds and Galaxy Glasses in collaboration with Google.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Galaxy Watch 9", "Unpacked", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/samsung-galaxy-z-fold-8-launch-event-date-confirmed", lang: "EN" }
    ]
  },
  {
    id: "20260707-058",
    trackers: ["os"],
    category: "Android",
    title: "Google發布 Android 17 七月更新：Pixel 系列多機種修復系統穩定性與介面顯示問題",
    summary: "Google 發布了針對 Pixel 6 至 Pixel 10 系列多機種的 Android 17 七月安全更新。本次更新的重點並非修補重大安全漏洞，而是針對系統穩定性、使用者介面（UI）以及特定硬體功能進行修復。受影響的產品涵蓋 Pixel 6、7、8、9、10 系列，以及各種 Fold 和 Tablet 機型。技術修復內容包括修復某些應用程式意外關閉或無法啟動的問題；修正系統小工具（widgets）的顏色或對比度顯示錯誤；以及解決部分設備在特定條件下可能無法載入 Android 系統或進入開機循環（boot loop）的系統層級問題。此外，針對折疊式設備，修復了在摺疊與展開過程中導航按鈕對齊異常的問題，並修正了壁紙形狀效果的顯示錯誤。使用者應確保設備更新至最新版本，以獲得最佳的系統穩定性和功能體驗。",
    tags: ["Google", "Android 17", "Pixel", "系統更新", "Android OS", "系統穩定性"],
    title_en: "Google Releases Android 17 July Update for Pixel Series: Fixing System Stability and UI Display Issues on Multiple Devices",
    summary_en: "Google has released an Android 17 July security update for multiple Pixel devices, ranging from the Pixel 6 to the Pixel 10 series. The focus of this update is not on patching major security vulnerabilities, but rather on improving system stability, the user interface (UI), and specific hardware functionalities. Affected products include the Pixel 6, 7, 8, 9, and 10 series, as well as various Fold and Tablet models. Technical fixes include resolving issues where certain applications unexpectedly crash or fail to launch; correcting color or contrast display errors in system widgets; and addressing system-level issues that could cause some devices to fail loading the Android system or enter a boot loop under specific conditions. Furthermore, for foldable devices, the update fixes navigation button misalignment issues during the folding and unfolding process, and corrects display errors in wallpaper shape effects. Users are advised to ensure their devices are updated to the latest version to achieve optimal system stability and functional experience.",
    tags_en: ["Google", "Android 17", "Pixel", "System Update", "Android OS", "System Stability"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/android-17-july-pixel-update", lang: "EN" }
    ]
  },
  {
    id: "20260707-059",
    trackers: ["os"],
    category: "Android",
    title: "Omdia報告：記憶體成本飆升導致低階Android手機產品線縮減與降級",
    summary: "根據Omdia發布的報告，由於記憶體（RAM）成本的快速上漲，已嚴重衝擊低價位（特別是$400以下）的Android手機市場。報告指出，對於$99或以下的「超低階」設備，記憶體成本佔比高達64%；即使是$100至$400區間的設備，記憶體成本也佔了高達59%的材料成本。整體而言，記憶體成本在過去幾個月內幾乎翻倍。由於成本壓力，手機製造商正主動且逐漸地從低階市場撤退，預計$400以下手機的出貨量將年減22%。為應對成本，品牌傾向於降級產品規格，例如降低顯示面板品質、簡化或使用較小感光元件的相機配置，以及採用上一代（last-gen）的系統單晶片（SoC）。這股趨勢已導致部分品牌在產品線中重複使用舊款晶片，使得購買去年的硬體更具吸引力。然而，預計$400以上的高階手機出貨量將年增5.7%。",
    tags: ["Omdia", "Android", "記憶體成本", "低階手機", "產品降級", "SoC"],
    title_en: "Omdia Report: Soaring Memory Costs Lead to Contraction and Downgrade of Low-End Android Phone Lines",
    summary_en: "According to a report released by Omdia, the rapid increase in memory (RAM) costs has severely impacted the low-price segment of the Android phone market (especially devices priced below $400). The report points out that for 'ultra-low-end' devices priced at $99 or less, memory costs account for as much as 64% of the total cost; even for devices in the $100 to $400 range, memory costs account for a high of 59% of material costs. Overall, memory costs have nearly doubled in recent months. Due to cost pressures, phone manufacturers are actively and gradually withdrawing from the low-end market, with shipments of phones under $400 expected to decline by 22% year-over-year. To cope with costs, brands are tending to downgrade product specifications, such as reducing display panel quality, simplifying or using smaller sensor camera configurations, and adopting last-generation (last-gen) System-on-Chips (SoCs). This trend has led some brands to reuse older chips in their product lines, making last year's hardware more appealing to buyers. However, shipments of high-end phones priced above $400 are expected to increase by 5.7% year-over-year.",
    tags_en: ["Omdia", "Android", "Memory Costs", "Low-End Phones", "Product Downgrade", "SoC"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/android-phones-downgrades-cheap-devices-ramageddon", lang: "EN" }
    ]
  },
  {
    id: "20260707-060",
    trackers: ["os"],
    category: "Android",
    title: "Google 宣布 Made by Google 2026 活動資訊，預計發表 Pixel 11 系列與新一代穿戴裝置",
    summary: "Google 宣布「Made by Google 2026」活動定於太平洋時間 8 月 12 日舉行，比去年提前了一週。本次活動預計在紐約市舉行，主題將圍繞「下一代 Pixel」的發表。根據業界預期，Google 可能會展示 Pixel 11、Pixel 11 Pro、Pixel 11 Pro XL，以及 Pixel 11 Pro Fold 等多款新機型。除了手機，活動也可能涵蓋 Pixel Watch 5、Pixel Buds 的新系列，以及 Nest WiFi 的升級，甚至可能整合 UWB 技術用於網路覆蓋熱點圖繪製。整體趨勢顯示，今年將是軟體和 AI 功能的重點年份，但元件成本的上升可能會對產品規格和價格產生影響。建議關注官方活動資訊，以了解具體的產品發布細節和功能更新。",
    tags: ["Google", "Pixel 11", "Made by Google", "Pixel Watch 5", "Android", "UWB"],
    title_en: "Google Announces Made by Google 2026 Event Details, Expected to Unveil Pixel 11 Series and Next-Generation Wearables",
    summary_en: "Google has announced that the \"Made by Google 2026\" event is scheduled for August 12th Pacific Time, one week earlier than last year. The event is expected to take place in New York City, with the theme centered on the launch of the \"next-generation Pixel.\" Industry expectations suggest that Google may showcase multiple new models, including the Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, and Pixel 11 Pro Fold. Beyond smartphones, the event might also cover new series for the Pixel Watch 5 and Pixel Buds, and upgrades to Nest WiFi, potentially even integrating UWB technology for network coverage heat mapping. The overall trend indicates that this year will focus on software and AI features, though rising component costs might impact product specifications and pricing. It is recommended to follow official event announcements for specific product release details and feature updates.",
    tags_en: ["Google", "Pixel 11", "Made by Google", "Pixel Watch 5", "Android", "UWB"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/made-by-google-2026-invite", lang: "EN" }
    ]
  },
  {
    id: "20260707-061",
    trackers: ["os"],
    category: "Android",
    title: "Pixel Recorder 應用程式出現音訊檔案儲存異常，影響部分 Google Pixel 用戶",
    summary: "Google Pixel 裝置的 Pixel Recorder 應用程式，部分用戶回報出現音訊檔案儲存異常的 Bug。用戶指出，按下停止按鈕後，錄製的音訊檔案無法在應用程式內或系統檔案應用程式中顯示，即使刷新檔案列表也無效。部分用戶提到，檔案可能已成功備份至 Google Recorder 網站，但這並非所有用戶都能使用此功能。此問題影響了錄音的核心功能，但目前 Google 尚未公開修復或說明。由於問題似乎僅限於少數用戶，目前尚無明確的修補建議，建議受影響用戶持續關注 Google 官方的軟體更新公告。",
    tags: ["Google Pixel", "Pixel Recorder", "音訊檔案", "Android 應用程式", "軟體 Bug"],
    title_en: "Audio File Saving Anomaly Reported in Pixel Recorder App, Affecting Some Google Pixel Users",
    summary_en: "Users of the Pixel Recorder application on Google Pixel devices have reported a bug concerning audio file saving anomalies. Users noted that after pressing the stop button, the recorded audio file cannot be displayed within the application or the system file application, even after refreshing the file list. Some users mentioned that the file might have been successfully backed up to the Google Recorder website, but this feature is not available to all users. This issue affects a core recording function, but Google has not yet released a fix or explanation. Since the problem appears to be limited to a small number of users, there are no clear patch recommendations at this time. Affected users are advised to continue monitoring official Google software update announcements.",
    tags_en: ["Google Pixel", "Pixel Recorder", "Audio File", "Android Application", "Software Bug"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/pixel-recorder-not-saving-recordings", lang: "EN" }
    ]
  },
  {
    id: "20260707-062",
    trackers: ["os"],
    category: "Android",
    title: "三星（Samsung）持續提高Galaxy系列手機價格，受影響低階型號包括A06 5G等",
    summary: "本文報導三星（Samsung）持續提高其Galaxy系列智慧型手機的價格，特別針對低階型號。根據SamMobile的資訊，自7月4日起，三星在印度市場的許多低階Galaxy手機型號將進行價格上漲。這被指出是近期針對這些設備的第五次價格調整。價格上漲幅度約為1,000印度盧比（INR），折合約10美元。受影響的設備包括Galaxy A06 5G、Galaxy A07 4G、Galaxy A07 5G、Galaxy A17 5G等。例如，Galaxy A06 5G的基礎型號從去年發布時的₹10,499，現已上漲至₹14,999。除了基礎配置，其他儲存容量的階層也同步上漲了1,000 INR。此舉顯示了市場價格的持續變動，影響了消費者的購買預算。",
    tags: ["Samsung", "Galaxy", "Android", "印度市場", "價格變動", "A06 5G"],
    title_en: "Samsung continues to raise prices for Galaxy series phones, affecting low-end models including A06 5G",
    summary_en: "This article reports that Samsung is continuously raising the prices of its Galaxy series smartphones, particularly targeting low-end models. According to SamMobile, starting from July 4th, many low-end Galaxy phone models in the Indian market will see a price increase. This is noted as the fifth price adjustment for these devices recently. The price hike is approximately 1,000 Indian Rupees (INR), equivalent to about 10 US dollars. Affected devices include the Galaxy A06 5G, Galaxy A07 4G, Galaxy A07 5G, and Galaxy A17 5G. For instance, the base model of the Galaxy A06 5G has increased from ₹10,499 when it was launched last year to ₹14,999. In addition to the base configuration, other storage tiers have also increased by 1,000 INR. This move demonstrates the continuous fluctuation of market prices, impacting consumer purchasing budgets.",
    tags_en: ["Samsung", "Galaxy", "Android", "Indian Market", "Price Change", "A06 5G"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/samsung-is-increasing-prices-on-these-galaxy-smartphones-again", lang: "EN" }
    ]
  },
  {
    id: "20260707-063",
    trackers: ["os"],
    category: "Android",
    title: "榮耀（Honor）寬螢幕折疊手機規格洩漏：搭載超大容量電池與高階相機模組",
    summary: "本文報導了榮耀（Honor）下一代寬螢幕折疊手機的規格洩漏資訊。據傳該機型旨在提供該形式因子中最大的電池容量，預計達到 7,000 mAh，遠超市場預期的競爭對手（如三星 Galaxy Z Fold 8 預計 4,800 mAh）。此外，該手機的螢幕配置包括 5.5 吋外螢幕和 7.6 吋內螢幕，並配備了具備 200MP 主鏡頭和潛望式變焦鏡的「水平跑道」相機模組。除了折疊機型，洩漏資訊也提到榮耀的「機器人手機」（Robot Phone）預計於八月推出，該機型將與 ARRI 合作，並整合 AI 應用場景。這些資訊顯示榮耀正積極搶佔折疊手機市場，並在電池續航力與影像系統上提升規格。",
    tags: ["Honor", "折疊手機", "寬螢幕", "電池容量", "Galaxy Z Fold 8", "200MP"],
    title_en: "Honor Wide-Screen Foldable Phone Specs Leak: Featuring Ultra-Large Battery and High-End Camera Module",
    summary_en: "This article reports leaked specifications for Honor's next-generation wide-screen foldable phone. The device is rumored to aim for the largest battery capacity in this form factor, expected to reach 7,000 mAh, significantly exceeding market expectations and competitors (such as the Samsung Galaxy Z Fold 8, which is expected to have 4,800 mAh). Furthermore, the phone's screen configuration includes a 5.5-inch outer screen and a 7.6-inch inner screen, and it is equipped with a \"horizontal runway\" camera module featuring a 200MP main lens and a periscope zoom lens. In addition to the foldable model, the leaked information also mentions that Honor's \"Robot Phone\" is expected to launch in August. This device will collaborate with ARRI and integrate AI application scenarios. These details indicate that Honor is actively competing in the foldable phone market by enhancing specifications in battery life and imaging systems.",
    tags_en: ["Honor", "Foldable Phone", "Wide-Screen", "Battery Capacity", "Galaxy Z Fold 8", "200MP"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/honor-wide-foldable-battery-spec-leak", lang: "EN" }
    ]
  },
  {
    id: "20260707-064",
    trackers: ["os"],
    category: "Android",
    title: "三星傳聞於 7 月 8 日啟動 Galaxy Z Fold 8 系列預購，涵蓋 Z Fold 8 Ultra 與 Galaxy Watch 9",
    summary: "本文報導根據外洩資訊，三星（Samsung）預計將於 7 月 8 日啟動 Galaxy Z Fold 8、Galaxy Z Fold 8 Ultra 的預購計畫，同時也涵蓋了預期推出的 Galaxy Watch 9 和 Galaxy Watch Ultra 兩款智慧手錶。預購活動通常會提供額外優惠，過去的經驗顯示可能包含 $50 點數或抽獎活動。然而，由於市場傳聞指出 Z Fold 8 Ultra 等機型價格可能上漲，預購時的舊機折抵方案（trade-in）細節仍不明確。本次預購期至 7 月 22 日的發布日期前兩週，預計提供給用戶提前了解新產品的機會。建議關注官方後續公告，以獲取確切的預購優惠和折抵方案細節。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Galaxy Watch 9", "預購", "Android", "消費電子"],
    title_en: "Samsung Rumored to Launch Galaxy Z Fold 8 Series Pre-orders on July 8, Including Z Fold 8 Ultra and Galaxy Watch 9",
    summary_en: "This report, based on leaked information, predicts that Samsung will launch pre-orders for the Galaxy Z Fold 8 and Galaxy Z Fold 8 Ultra on July 8. The pre-order activity will also cover the expected Galaxy Watch 9 and Galaxy Watch Ultra smartwatches. Pre-order campaigns typically offer additional discounts, and past experience suggests these may include $50 points or raffle activities. However, since market rumors indicate that models like the Z Fold 8 Ultra may see price increases, the details of the trade-in program for old devices during pre-orders remain unclear. This pre-order period, running until two weeks before the release date of July 22, is expected to give users an early opportunity to learn about the new products. Users are advised to monitor official announcements for accurate details regarding pre-order offers and trade-in programs.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Watch 9", "Pre-order", "Android", "Consumer Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/galaxy-z-fold-8-reservations-might-open-soon", lang: "EN" }
    ]
  },
  {
    id: "20260707-065",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列傳出升價、取消 128GB 機型，預計 8 月發布",
    summary: "根據洩露資訊，Google 即將發布的 Pixel 11 系列手機，預計將會進行價格上漲，並取消基礎的 128GB 儲存容量選項。新機型將從 256GB 開始提供，並包含 512GB 及 1TB 等更高規格。此外，報告指出在歐洲地區，所有 Pixel 11 配置的價格預計將上漲約 €100。雖然原文未提供具體的 CVE 或技術漏洞細節，但從產品更新的角度來看，這代表了 Google 在硬體規格和定價策略上的調整。預計 Google 將於 8 月 11 日左右舉行發表活動，Pixel 11 系列的發售日期則可能落在 8 月 20 日。消費者應注意，本次升級的重點將放在更高的儲存容量和相應的價格調整。",
    tags: ["Google", "Pixel 11", "Android", "手機發布", "價格上漲"],
    title_en: "Google Pixel 11 Series Rumored to Increase Price and Drop 128GB Model, Expected August Release",
    summary_en: "According to leaked information, the upcoming Pixel 11 series phones from Google are expected to see a price increase and the removal of the base 128GB storage option. The new models will start at 256GB and include higher specifications such as 512GB and 1TB. Furthermore, reports indicate that the price of all Pixel 11 configurations in the European region is expected to rise by approximately €100. Although the original text does not provide specific CVE or technical vulnerability details, from a product update perspective, this represents Google's adjustment in hardware specifications and pricing strategy. Google is expected to hold its launch event around August 11th, with the Pixel 11 series potentially going on sale around August 20th. Consumers should note that the focus of this upgrade will be on higher storage capacity and corresponding price adjustments.",
    tags_en: ["Google", "Pixel 11", "Android", "Phone Launch", "Price Increase"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/pixel-11-price-128gb-release-date-leak", lang: "EN" }
    ]
  },
  {
    id: "20260707-066",
    trackers: ["os"],
    category: "Android",
    title: "Nothing Phone (4b) 發表：搭載 Snapdragon 6 Gen 4，具備 Android 16 系統，定位中階入門機型",
    summary: "本文介紹 Nothing Phone (4b) 的規格與市場定位。該機型配備 6.77 吋 120Hz AMOLED 螢幕，搭載 Snapdragon 6 Gen 4 晶片組，具備 8GB RAM，並預裝 Android 16 系統，提供 3 年系統更新與 6 年安全更新。相機配置為 50MP 主鏡頭、8MP 超廣角及 16MP 前鏡頭。儘管 Nothing 品牌已取消鎖屏廣告，提升了用戶體驗，但相較於前代 Phone (4a)，(4b) 在處理器、螢幕解析度、儲存速度等方面有所降級。文章指出，由於市場競爭和產品線定位的困境，該機型在歐洲市場的吸引力較低，且預計不會在美國銷售。建議消費者關注未來促銷活動或 Phone (4a) 的價格變動。",
    tags: ["Nothing Phone (4b)", "Snapdragon 6 Gen 4", "Android 16", "手機規格", "入門機型"],
    title_en: "Nothing Phone (4b) Launch: Featuring Snapdragon 6 Gen 4 and Android 16, Positioned as a Mid-Range Entry-Level Device",
    summary_en: "This article introduces the specifications and market positioning of the Nothing Phone (4b). The device is equipped with a 6.77-inch 120Hz AMOLED screen, powered by the Snapdragon 6 Gen 4 chipset, featuring 8GB RAM, and pre-installed with Android 16. It offers 3 years of system updates and 6 years of security updates. The camera configuration includes a 50MP main camera, an 8MP ultra-wide-angle camera, and a 16MP front camera. Although the Nothing brand has removed lock screen advertisements, improving the user experience, the (4b) shows some downgrades compared to the previous Phone (4a) in areas such as processor, screen resolution, and storage speed. The article notes that due to market competition and product line positioning challenges, the device has low appeal in the European market and is not expected to be sold in the US. Consumers are advised to monitor future promotional activities or price changes for the Phone (4a).",
    tags_en: ["Nothing Phone (4b)", "Snapdragon 6 Gen 4", "Android 16", "Smartphone Specs", "Entry-Level Device"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/nothing-phone-4b-hands-on-launch-price-specs", lang: "EN" }
    ]
  },
  {
    id: "20260707-067",
    trackers: ["os"],
    category: "重點關注",
    title: "Mesa 整合 AV1 編碼：微軟透過 DirectX 12 與 HMFT 支援 Windows 上的硬體加速編解碼",
    summary: "Mesa 開發團隊近期接收到微軟工程師貢獻的重大功能更新，在 Mesa 26.2 版本中加入了利用 DirectX 12 (DX12) 和硬體媒體基礎結構轉換 (HMFT) 支援的加速 AV1 影片編碼功能。此功能旨在為微軟在 Windows Subsystem for Linux (WSL) 上的支援擴展提供基礎。目前此程式碼為一個「原型」實作，僅能處理 I 幀和 P 幀的編碼，尚未包含任何進階功能。該新程式碼由微軟工程師直接開發並合併至 Mesa，預計在本季度的 Mesa 26.2 版本中釋出。這代表開源的圖形驅動程式生態系統正在積極整合主流作業系統的硬體加速編解碼能力，特別是針對跨平台應用場景的優化。",
    tags: ["Mesa", "AV1", "DirectX 12", "HMFT", "Windows Subsystem for Linux", "編解碼"],
    title_en: "Mesa Integrates AV1 Encoding: Microsoft Supports Hardware Accelerated Encoding/Decoding on Windows via DirectX 12 and HMFT",
    summary_en: "The Mesa development team recently received a major feature contribution from Microsoft engineers, adding accelerated AV1 video encoding support in Mesa 26.2 using DirectX 12 (DX12) and Hardware Media Foundation Transform (HMFT). This feature aims to provide a foundation for Microsoft's support expansion on Windows Subsystem for Linux (WSL). Currently, this code is a 'prototype' implementation, capable only of encoding I and P frames, and does not include any advanced features. This new code was developed and merged directly by Microsoft engineers into Mesa, and is expected to be released in the Mesa 26.2 version this quarter. This demonstrates that the open-source graphics driver ecosystem is actively integrating hardware accelerated encoding and decoding capabilities from mainstream operating systems, especially for cross-platform application scenarios.",
    tags_en: ["Mesa", "AV1", "DirectX 12", "HMFT", "Windows Subsystem for Linux", "Encoding/Decoding"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Microsoft-AV1-Encode-DX12-HMFT", lang: "EN" }
    ]
  },
  {
    id: "20260707-068",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "OpenSSH 10.4 版發布：修補 8 項漏洞並引入混合式後量子密碼學支援",
    summary: "遠端存取工具 OpenSSH 發布 10.4 版，提供多項安全功能更新，並修補了涵蓋 sshd 伺服器及用戶端元件的 8 項漏洞。伺服器端修補了包括 GSSAPI 驗證、SFTP 傳輸路徑處理等 5 項漏洞，例如預先驗證服務阻斷攻擊及最小登入延遲設定失效等問題。用戶端則修補了 SFTP/SCP 檔案傳輸路徑缺陷，以及 SSH 記憶體已釋放但仍被使用的 UAF 漏洞。此外，10.4 版新增了實驗性的混合式後量子數位簽章支援，結合 ML-DSA44 與 Ed25519 演算法，旨在提升面對未來量子運算攻擊的防護能力。由於此功能需手動設定，用戶應儘速升級至 10.4 版，以修補已知漏洞並評估後量子密碼學的導入。",
    tags: ["OpenSSH", "10.4", "後量子密碼學", "PQC", "漏洞修補", "SSH", "UAF"],
    title_en: "OpenSSH 10.4 Released: Patches 8 Vulnerabilities and Introduces Hybrid Post-Quantum Cryptography Support",
    summary_en: "The remote access tool OpenSSH has released version 10.4, providing multiple security feature updates and patching 8 vulnerabilities affecting both the sshd server and client components. The server-side patches 5 vulnerabilities, including issues such as pre-authentication service denial-of-service attacks and improper handling of SFTP transfer paths. The client side patches SFTP/SCP file transfer path defects, as well as a Use-After-Free (UAF) vulnerability in SSH memory that was released but still used. Furthermore, version 10.4 adds experimental hybrid post-quantum digital signature support, combining the ML-DSA44 and Ed25519 algorithms, aiming to enhance defense against future quantum computing attacks. Since this feature requires manual configuration, users should upgrade to version 10.4 promptly to patch known vulnerabilities and evaluate the adoption of post-quantum cryptography.",
    tags_en: ["OpenSSH", "10.4", "Post-Quantum Cryptography", "PQC", "Vulnerability Patching", "SSH", "UAF"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177136", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-069",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI重塑紅隊演練格局：DEVCORE指出人機協作提升資安檢測深度與規模",
    summary: "DEVCORE執行長翁浩正指出，隨著AI技術的介入，傳統的紅隊演練（Red Team Assessment）正經歷深刻的典範轉移。過去的資安檢測多遵循固定頻率與範圍，但AI的應用已使紅隊演練具備自動化輔助偵查、生成攻擊程式碼（Payload）以及協助原始碼檢測的能力，大幅提升了演練的真實性與服務量能。未來，紅隊演練的重點將從單純的內部弱點檢測，擴展至納入外部情報與產業特性，形成「攻擊預判、威脅情報、AI」三位一體的深層模擬。這也對傳統資安服務（如弱點掃描）構成挑戰，因為許多基礎工作已可利用開源工具搭配AI完成。資安專業人員必須加速轉型，將精力從重複性的基礎任務，轉移至AI無法取代的邏輯判斷與創造性攻防思維。",
    tags: ["DEVCORE", "紅隊演練", "AI", "資安檢測", "攻擊預判", "Payload"],
    title_en: "AI Reshaping Red Teaming Landscape: DEVCORE Points to Human-Machine Collaboration Enhancing Security Testing Depth and Scale",
    summary_en: "DEVCORE CEO Hao-Cheng Weng pointed out that the intervention of AI technology is causing a profound paradigm shift in traditional Red Team Assessments. Historically, security testing followed fixed frequencies and scopes, but the application of AI has equipped Red Teaming with capabilities for automated reconnaissance, generating attack payloads, and assisting in source code analysis, significantly enhancing the realism and service capacity of the exercises. In the future, the focus of Red Teaming will shift from merely detecting internal vulnerabilities to incorporating external intelligence and industry characteristics, forming a deep simulation integrating 'attack prediction, threat intelligence, and AI.' This also challenges traditional security services (such as vulnerability scanning), as many foundational tasks can now be completed using open-source tools combined with AI. Security professionals must accelerate their transformation, shifting their focus from repetitive foundational tasks to logical judgment and creative offensive/defensive thinking that AI cannot replace.",
    tags_en: ["DEVCORE", "Red Team Assessment", "AI", "Security Testing", "Attack Prediction", "Payload"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177115", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-070",
    trackers: ["os"],
    category: "重點關注",
    title: "Windows Movie Maker 6.0 重現：回顧本地化、輕量級的經典編輯體驗",
    summary: "本文討論了經典的 Windows Movie Maker 軟體重現，並比較了其與現代 Windows 編輯工具的差異。作者指出，自 Microsoft 停用 Movie Maker 後，市場上缺乏輕量、本地化且無需帳號的替代品。雖然 Microsoft 推出了 Clipchamp，但其與 OneDrive 雲端服務的深度綁定，使其功能和使用體驗偏離了傳統本地編輯的初衷。Movie Maker 6.0 的回歸，為用戶提供了一個簡單、快速、自包含的編輯環境，重現了早期 Windows 應用程式的直觀操作流程。這篇文章強調了本地檔案處理和簡單易用性在現代軟體趨勢中的價值，提醒用戶注意軟體功能是否過度依賴雲端服務或訂閱制。",
    tags: ["Windows", "Movie Maker", "Clipchamp", "本地編輯", "軟體趨勢", "用戶體驗"],
    title_en: "Windows Movie Maker 6.0 Revival: A Look Back at the Classic, Lightweight Editing Experience",
    summary_en: "This article discusses the recreation of the classic Windows Movie Maker software and compares it to modern Windows editing tools. The author points out that since Microsoft discontinued Movie Maker, the market has lacked a lightweight, localized, and account-free alternative. Although Microsoft introduced Clipchamp, its deep integration with OneDrive cloud services causes its functionality and user experience to deviate from the original intent of local editing. The return of Movie Maker 6.0 offers users a simple, fast, and self-contained editing environment, recreating the intuitive workflow of early Windows applications. This article emphasizes the value of local file processing and simplicity in modern software trends, reminding users to be mindful of whether software functionality is overly reliant on cloud services or subscription models.",
    tags_en: ["Windows", "Movie Maker", "Clipchamp", "Local Editing", "Software Trends", "User Experience"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/07/i-installed-windows-movie-maker-in-2026-and-it-uses-97-less-ram-than-clipchamp", lang: "EN" }
    ]
  },
  {
    id: "20260707-071",
    trackers: ["security"],
    category: "前瞻技術",
    title: "GitHub Agentic Workflows出現「GitLost」漏洞：未經身份驗證攻擊者可透過Issue洩露私有程式碼",
    summary: "研究人員Noma Security發現了GitHub Agentic Workflows中的一個嚴重提示注入（Prompt Injection）漏洞，代號為「GitLost」。此漏洞允許未經身份驗證的攻擊者，僅需在組織的公開儲存庫（public repository）創建一個GitHub Issue，即可誘騙AI代理（agent）從該組織的私有程式碼儲存庫（private repositories）中竊取敏感資料。該漏洞的本質是AI代理的上下文視窗（context window）成為攻擊面，當代理將Issue內容等不可信使用者資料視為可執行的指令時，便會發生資料洩露。攻擊者無需任何程式編寫技能或帳號權限，只需在公開儲存庫創建Issue，即可讓AI代理執行隱藏在自然語言指令中的惡意行為。修補建議包括：實施零信任原則，嚴格限制AI代理的權限（最小權限原則），並在系統設計上邏輯隔離不可信的使用者輸入與核心系統指令，避免將使用者生成文本視為可信指令。",
    tags: ["GitHub", "Agentic AI", "Prompt Injection", "GitLost", "零信任", "資料洩露"],
    title_en: "GitHub Agentic Workflows Vulnerable to 'GitLost' Flaw: Unauthenticated Attackers Can Exfiltrate Private Code via Issues",
    summary_en: "Researchers at Noma Security discovered a critical Prompt Injection vulnerability, dubbed 'GitLost', within GitHub Agentic Workflows. This vulnerability allows unauthenticated attackers to trick an AI agent into exfiltrating sensitive data from an organization's private repositories merely by creating a GitHub Issue in a public repository. The core issue is that the AI agent's context window becomes an attack surface; data leakage occurs when the agent treats untrusted user input, such as Issue content, as executable instructions. Attackers require no coding skills or account privileges, only the ability to create an Issue in a public repository, to make the AI agent execute malicious actions hidden within natural language commands. Recommended mitigations include: implementing zero trust principles, strictly limiting AI agent permissions (principle of least privilege), and logically isolating untrusted user input from core system instructions during system design, thereby preventing user-generated text from being treated as trusted commands.",
    tags_en: ["GitHub", "Agentic AI", "Prompt Injection", "GitLost", "Zero Trust", "Data Leakage"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/gitlost-leaks-private-data-github-agentic-workflows", lang: "EN" }
    ]
  },
  {
    id: "20260707-072",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Gartner預測主權AI趨勢：企業應透過AI治理平臺管理風險與建立信任",
    summary: "市場調查機構Gartner指出，隨著AI成為關鍵經濟實力，主權AI的發展正促使各國將掌握自身AI能力列為優先事項，企業在規劃時必須應對地緣政治的挑戰。此外，隨著組織越來越多地將策略、戰術和營運層面的決策交由AI代理執行，缺乏治理的決策制定將帶來法律、營運及聲譽風險。Gartner建議，企業應採用AI治理平臺，將治理原則套用於智慧型系統，以確保自動化決策可被理解、可稽核，並符合全球複雜的AI法規與產業標準。預計到2029年，透過決策智慧平臺建立的商業決策將獲得更高的信任度，並大幅提升完成任務的速度。資料與分析領導者應利用此平臺進行集中式監督與風險管理，實踐負責任AI。",
    tags: ["Gartner", "主權AI", "AI治理平臺", "AI代理", "負責任AI", "決策智慧平臺"],
    title_en: "Gartner Predicts Sovereign AI Trends: Enterprises Should Use AI Governance Platforms to Manage Risks and Build Trust",
    summary_en: "Market research firm Gartner points out that as AI becomes a critical economic force, the development of Sovereign AI is prompting nations to prioritize mastering their own AI capabilities, requiring enterprises to plan for geopolitical challenges. Furthermore, as organizations increasingly delegate strategic, tactical, and operational decision-making to AI agents, ungoverned decision-making poses legal, operational, and reputational risks. Gartner recommends that enterprises adopt AI governance platforms to apply governance principles to intelligent systems, ensuring that automated decisions are understandable, auditable, and compliant with complex global AI regulations and industry standards. By 2029, business decisions established through decision intelligence platforms are expected to gain higher levels of trust and significantly accelerate task completion. Data and analytics leaders should utilize these platforms for centralized oversight and risk management, thereby practicing responsible AI.",
    tags_en: ["Gartner", "Sovereign AI", "AI Governance Platform", "AI Agent", "Responsible AI", "Decision Intelligence Platform"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177153", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260707-073",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Voice 推出獨立付費方案，小企業用戶可直接升級專業通訊功能",
    summary: "Google Voice 傳統上將付費服務鎖定於需要 Google Workspace 訂閱的企業客戶。目前 Google 已調整策略，允許用戶直接購買付費呼叫體驗，無需綁定 Workspace 訂閱。這兩個新推出的方案，包括「Starter」和「Standard」，目標客群為小型企業或個人副業用戶。Starter 方案每月 $10，提供三方通話、呼叫轉接、錄音等專業功能。Standard 方案每月 $20，提供自動呼叫處理、呼叫路由和整合 Gemini 等進階功能。此外，Google Voice 新增的「為我記錄」功能，能即時轉錄通話內容、總結重點並生成行動項目，結果會透過 Google Doc 郵件回報。用戶可透過 Google Voice App 介面或 g.co/voice/upgrade 頁面進行升級。此舉降低了專業通訊服務的門檻，讓非大型企業用戶也能取得進階的商業通訊工具。",
    tags: ["Google Voice", "Google Workspace", "付費服務", "SaaS", "小型企業", "通訊技術"],
    title_en: "Google Voice Launches Standalone Paid Plans, Allowing Small Businesses Direct Access to Professional Communication Features",
    summary_en: "Traditionally, Google Voice restricted paid services to enterprise clients requiring a Google Workspace subscription. Google has now adjusted its strategy, allowing users to directly purchase paid calling experiences without being tied to a Workspace subscription. These two newly launched plans, 'Starter' and 'Standard,' target small businesses or individual side-hustle users. The Starter plan costs $10 per month and offers professional features such as third-party calling, call forwarding, and recording. The Standard plan costs $20 per month and provides advanced features like automated call handling, call routing, and Gemini integration. Furthermore, Google Voice introduces a new 'Record for Me' feature that can transcribe call content in real-time, summarize key points, and generate action items, with the results delivered via Google Doc email. Users can upgrade through the Google Voice App interface or the g.co/voice/upgrade page. This move lowers the barrier to professional communication services, making advanced business communication tools accessible to non-large enterprise users.",
    tags_en: ["Google Voice", "Google Workspace", "Paid Services", "SaaS", "Small Business", "Communication Technology"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/paid-google-voice", lang: "EN" }
    ]
  },
  {
    id: "20260707-074",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Search Console 新增功能：追蹤至社群媒體帳號的流量數據",
    summary: "Google 宣布在 Search Console 中推出新功能，允許用戶追蹤從 Google 搜尋結果導向至各個社群媒體帳號（如 YouTube、X/Twitter、TikTok、Instagram）的流量數據。此功能透過新增的「屬性類型」實現，能提供更精細的流量分析。用戶可以在「效能報告」中查看總點擊次數、曝光次數，並篩選哪些特定的貼文或搜尋查詢是主要的流量來源；「洞察報告」則提供高層次的流量趨勢概覽，以及用戶在 Google 上發現帳號的方式。此外，系統還提供「成就」追蹤功能，用以記錄點擊次數等成長里程碑。此功能目前已開放，用戶可在 Search Console 的驗證頁面開始使用。此更新旨在幫助內容創作者和網站擁有者更全面地了解其內容在 Google 搜尋生態系與社群媒體之間的傳播路徑。",
    tags: ["Google Search Console", "流量分析", "社群媒體整合", "YouTube", "TikTok", "X/Twitter", "Instagram"],
    title_en: "Google Search Console Adds Feature: Tracking Traffic Data to Social Media Accounts",
    summary_en: "Google announced a new feature in Search Console that allows users to track traffic data originating from Google Search results and directed to various social media accounts (such as YouTube, X/Twitter, TikTok, and Instagram). This feature is implemented through a new 'property type,' providing more granular traffic analysis. Users can view total clicks and impressions in the 'Performance Report,' and filter to see which specific posts or search queries are the primary traffic sources; the 'Insights Report' provides a high-level overview of traffic trends, as well as how users discovered the account on Google. Additionally, the system offers an 'Achievements' tracking function to record growth milestones, such as click counts. This feature is currently available, and users can begin using it on the verification page within Search Console. This update aims to help content creators and website owners gain a more comprehensive understanding of their content's propagation path between the Google search ecosystem and social media.",
    tags_en: ["Google Search Console", "Traffic Analysis", "Social Media Integration", "YouTube", "TikTok", "X/Twitter", "Instagram"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/google-search-traffic-social-accounts", lang: "EN" }
    ]
  },
  {
    id: "20260707-075",
    trackers: ["os"],
    category: "重點關注",
    title: "Sygic 為 Android Auto 與 CarPlay 推出摩托車專用導航，提升騎士行駛體驗",
    summary: "導航應用程式 Sygic 發布 v26.4 更新，為 Android Auto 和 Apple CarPlay 平台增添了專為摩托車騎士優化的導航體驗。傳統上，Android Auto 和 CarPlay 平台主要針對汽車設計，但 Sygic 透過此更新，使其功能適用於更廣泛的車輛類型，特別是摩托車。新功能包含天氣預報、海拔高度與地形剖面、燃油站提醒，以及專門的摩托車友善路線規劃，例如蜿蜒或景觀路線。此外，應用程式還加入了獨特的視覺警報，用於即時提醒騎士注意事故、危險路況或天氣變化。此更新讓 Sygic 成為 Google Maps 和 Apple Maps 等主流導航的替代選擇，顯著提升了騎士在車載系統上的資訊獲取與行駛安全。",
    tags: ["Android Auto", "CarPlay", "Sygic", "摩托車", "導航系統", "車載資訊"],
    title_en: "Sygic Launches Motorcycle-Specific Navigation for Android Auto and CarPlay, Enhancing Rider Experience",
    summary_en: "Navigation application Sygic has released a v26.4 update, adding a navigation experience optimized for motorcycle riders on both Android Auto and Apple CarPlay platforms. Traditionally, Android Auto and CarPlay platforms were designed primarily for cars, but with this update, Sygic has made its functionality applicable to a wider range of vehicle types, especially motorcycles. New features include weather forecasts, altitude and terrain profiles, fuel station reminders, and specialized motorcycle-friendly route planning, such as winding or scenic routes. Furthermore, the application has added unique visual alerts to provide real-time reminders to riders regarding accidents, dangerous road conditions, or weather changes. This update positions Sygic as a viable alternative to mainstream navigators like Google Maps and Apple Maps, significantly improving the information access and driving safety for riders using in-vehicle systems.",
    tags_en: ["Android Auto", "CarPlay", "Sygic", "Motorcycle", "Navigation System", "In-Vehicle Infotainment"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/android-auto-motorcycle-navigation-app", lang: "EN" }
    ]
  },
  {
    id: "20260707-076",
    trackers: ["os"],
    category: "重點關注",
    title: "Nothing Ear (3a) 發布：具備本地儲存錄音與通話功能，價格維持親民",
    summary: "Nothing 今日發布了 Nothing Ear (3a) 耳機，這款產品在保持親民價格的同時，新增了本地儲存功能，使其具備錄製通話和一般音訊的能力。相較於前代產品，Ear (3a) 搭載了 12mm 驅動單元，支援 LDAC、24-bit/96kHz 無線音訊，並新增了自訂進階 EQ。其主打特色是內建 32MB 快閃記憶體，可實現「音訊快照」（Audio Snapshot）功能，用戶可透過捏合動作開始和結束錄音，錄製的內容將在 Nothing X 應用程式中提供播放、編輯和轉錄服務。此外，它還支援通話錄音，最長可達 2 小時，並會在開始時向雙方參與者發出隱私提醒。Nothing Ear (3a) 目前在 Nothing 官網上販售，價格為 $99 / £99 / €99。",
    tags: ["Nothing Ear (3a)", "音訊快照", "通話錄音", "LDAC", "Nothing X app", "消費電子"],
    title_en: "Nothing Ear (3a) Launched: Featuring Local Recording for Audio and Calls, Maintaining Affordable Price",
    summary_en: "Nothing today launched the Nothing Ear (3a) earbuds. While maintaining an affordable price point, this product adds local storage functionality, enabling it to record both calls and general audio. Compared to its predecessor, the Ear (3a) features a 12mm driver unit, supports LDAC and 24-bit/96kHz wireless audio, and includes a new customizable advanced EQ. Its main feature is the built-in 32MB flash memory, which enables an 'Audio Snapshot' function. Users can start and end recordings with a pinching gesture, and the recorded content will be available in the Nothing X application for playback, editing, and transcription services. Furthermore, it supports call recording, with a maximum duration of 2 hours, and will issue a privacy reminder to both participants upon starting. The Nothing Ear (3a) is currently available on the Nothing official website for $99 / £99 / €99.",
    tags_en: ["Nothing Ear (3a)", "Audio Snapshot", "Call Recording", "LDAC", "Nothing X app", "Consumer Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/07/nothing-ear-3a-price-features-release", lang: "EN" }
    ]
  },
  {
    id: "20260707-077",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果高層出席太陽谷會議：Tim Cook與Eddy Cue參與科技界頂級人脈交流",
    summary: "本文報導蘋果執行長Tim Cook與資深服務副總裁Eddy Cue出席2026年太陽谷會議。該會議是全球媒體、科技和金融界最具影響力的領袖人物聚集地，旨在進行私密會面與人脈交流。除了蘋果高層，現場還匯集了YouTube、OpenAI、Uber、Netflix等眾多科技巨頭的執行長和高層代表。文章主要聚焦於業界領袖的動態和人脈網絡，並提及了業界觀察點，例如蘋果內部高層變動的關注度。本報導屬於產業新聞性質，未涉及任何特定的資安漏洞、技術細節或修補建議。建議關注業界領袖的公開發言與戰略動態。",
    tags: ["蘋果公司", "Tim Cook", "Eddy Cue", "太陽谷會議", "科技產業動態", "人脈網絡"],
    title_en: "Apple Executives Attend Sun Valley Conference: Tim Cook and Eddy Cue Participate in Elite Tech Networking",
    summary_en: "This article reports on Apple CEO Tim Cook and Senior Services Vice President Eddy Cue attending the 2026 Sun Valley Conference. This conference is a gathering point for influential leaders from global media, technology, and finance, designed for private meetings and networking. Besides Apple's senior management, the event also gathered CEOs and senior representatives from numerous tech giants, including YouTube, OpenAI, Uber, and Netflix. The article primarily focuses on industry leaders' movements and networking connections, and mentions industry observation points, such as the attention paid to internal Apple senior management changes. This report is of an industry news nature and does not involve any specific security vulnerabilities, technical details, or patching recommendations. It suggests paying attention to the public statements and strategic movements of industry leaders.",
    tags_en: ["Apple Inc.", "Tim Cook", "Eddy Cue", "Sun Valley Conference", "Tech Industry Dynamics", "Networking"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/tim-cook-attends-sun-valley-conference-alongside-eddy-cue", lang: "EN" }
    ]
  },
  {
    id: "20260707-078",
    trackers: ["os"],
    category: "重點關注",
    title: "蘭博古尼發布Apple Vision Pro應用程式，提供沉浸式探索其最新車款的體驗",
    summary: "義大利汽車製造商蘭博古尼（Lamborghini）發布了一款Apple Vision Pro應用程式，讓使用者能夠在虛擬環境中沉浸式地探索其最新的車款。該應用程式涵蓋了Urus SE Performante、Temerario、Revuelto和Urus SE四款車型。使用者可透過兩種沉浸式體驗：在「共享空間」模式下，將高保真度的數位車輛放置於真實環境中，可調整為1:1或縮小尺寸；在「完全沉浸」模式下，則在由品牌設計的虛擬環境中探索車輛。應用程式提供多維度的互動功能，包括查看動力系統與骨架結構、視覺化空氣動力學流線、了解「Centro Stile」設計語言，以及透過空間音訊聆聽引擎聲響。這款應用程式強調了其極高的細節度和沉浸感，讓用戶能從座椅縫線到座艙的每一個元素進行深度了解。",
    tags: ["Apple Vision Pro", "蘭博古尼", "汽車產業", "沉浸式體驗", "Urus SE Performante", "空間音訊"],
    title_en: "Lamborghini Releases Apple Vision Pro App for Immersive Exploration of Latest Models",
    summary_en: "Italian automaker Lamborghini has released an Apple Vision Pro application that allows users to immersively explore its latest vehicle models in a virtual environment. The application covers four models: the Urus SE Performante, Temerario, Revuelto, and Urus SE. Users can experience two types of immersive modes: 'Shared Space' mode, which places high-fidelity digital vehicles into a real-world environment and can be scaled to 1:1 or reduced size; and 'Full Immersion' mode, which allows exploration of the vehicles within a brand-designed virtual environment. The application offers multi-dimensional interactive features, including viewing the powertrain and skeletal structure, visualizing aerodynamic airflow, understanding the 'Centro Stile' design language, and listening to engine sounds via spatial audio. This application emphasizes its extremely high level of detail and immersion, allowing users to deeply understand every element, from the seat stitching to the cabin.",
    tags_en: ["Apple Vision Pro", "Lamborghini", "Automotive Industry", "Immersive Experience", "Urus SE Performante", "Spatial Audio"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/lamborghini-launches-apple-vision-pro-app-with-interactive-full-size-cars", lang: "EN" }
    ]
  },
  {
    id: "20260707-079",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果高層與巴伐利亞州政府會面：關注歐盟過度監管對AI與數據保護的影響",
    summary: "蘋果公司（Apple）的執行長Tim Cook及其接班人John Ternus近期與德國巴伐利亞州政府州長Markus Söder舉行了虛擬會議。會談的重點包括蘋果在巴伐利亞的持續投資和就業機會。Söder在公開發文中，表達了對歐盟在人工智慧（AI）和數據保護領域過度監管的擔憂，認為這可能會阻礙技術進步。此觀點與蘋果公司此前對歐盟規章制度的批評一致，特別是在延遲於歐洲推出Siri AI功能方面。這顯示了科技巨頭與區域政府之間，在應對歐盟嚴格監管趨勢時，正在積極尋求合作與發聲。對於業界而言，這提醒開發者和企業應密切關注跨國科技公司在面對複雜的國際法規時，所提出的政策建議與行業影響。",
    tags: ["Apple", "Tim Cook", "John Ternus", "Markus Söder", "歐盟監管", "AI", "數據保護"],
    title_en: "Apple Executives Meet with Bavarian State Government: Concerns Raised Over EU Over-Regulation of AI and Data Protection",
    summary_en: "Apple CEO Tim Cook and his successor, John Ternus, recently held a virtual meeting with Markus Söder, the Minister-President of the German state of Bavaria. The meeting focused on Apple's continued investment and job opportunities in Bavaria. In a public statement, Söder expressed concern regarding potential over-regulation by the EU in the areas of Artificial Intelligence (AI) and data protection, suggesting it could hinder technological progress. This view aligns with Apple's previous criticism of EU regulations, particularly concerning the delay in launching Siri AI features in Europe. This indicates that major tech giants and regional governments are actively seeking cooperation and voicing concerns in response to the trend of strict EU regulation. For the industry, this serves as a reminder for developers and businesses to closely monitor the policy recommendations and industry impacts put forth by multinational tech companies when facing complex international regulations.",
    tags_en: ["Apple", "Tim Cook", "John Ternus", "Markus Söder", "EU Regulation", "AI", "Data Protection"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/tim-cook-and-john-ternus-hold-virtual-meeting-with-minister-president-of-bavaria", lang: "EN" }
    ]
  },
  {
    id: "20260707-080",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta AI App推出Muse Image：整合圖像生成功能，強化Instagram與WhatsApp的創意體驗",
    summary: "Meta在Meta AI應用程式中發布了其首款圖像生成工具Muse Image。該工具利用Muse Spark AI推理能力，能夠根據描述性文字提示（text prompt）生成高品質圖像，並能結合用戶上傳的照片、標記的朋友個人資料，或Meta平台上的趨勢資訊。Muse Image不僅提升了Meta AI作為智慧助理的功能，更成為用戶的創意夥伴。目前，該功能已開始在Instagram和WhatsApp等應用程式上提供新的創意體驗，用戶可以使用超過30種AI特效製作Instagram限時動態，並可在WhatsApp的直接聊天中使用圖像生成功能。Meta表示，該模型未來將擴展至更多國家，並預計將推出Muse Video，進一步強化其跨平台和多模態的AI能力。此舉顯示Meta正積極將生成式AI整合到其核心社交產品中，為廣告商和代理商透過Advantage+創意功能提供新的營銷工具。",
    tags: ["Meta", "Meta AI", "Muse Image", "圖像生成", "Instagram", "WhatsApp", "生成式AI"],
    title_en: "Meta AI App Launches Muse Image: Integrating Image Generation to Enhance Creative Experiences on Instagram and WhatsApp",
    summary_en: "Meta has released its first image generation tool, Muse Image, within the Meta AI application. This tool leverages the Muse Spark AI capability to generate high-quality images based on descriptive text prompts, and can also integrate user-uploaded photos, tagged friend profiles, or trending information from the Meta platform. Muse Image not only enhances Meta AI's function as a smart assistant but also serves as a creative partner for users. Currently, this feature is rolling out new creative experiences on applications such as Instagram and WhatsApp. Users can create Instagram Stories using over 30 AI effects, and the image generation function is available in WhatsApp direct chats. Meta stated that the model will expand to more countries in the future and plans to launch Muse Video, further strengthening its cross-platform and multimodal AI capabilities. This move demonstrates Meta's active integration of generative AI into its core social products, providing new marketing tools for advertisers and agencies through the Advantage+ creative function.",
    tags_en: ["Meta", "Meta AI", "Muse Image", "Image Generation", "Instagram", "WhatsApp", "Generative AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/meta-ai-app-adds-image-generation-also-powering-whatsapp-and-instagram-features", lang: "EN" }
    ]
  },
  {
    id: "20260707-081",
    trackers: ["os"],
    category: "重點關注",
    title: "摩根大通上調蘋果股價目標至 345 美元，認為價格上漲對長期增長影響有限",
    summary: "投資銀行摩根大通（J.P. Morgan）維持對蘋果（Apple）的「買入」評級，並將其股價目標從原先的 325 美元上調至 345 美元。該報告指出，近期因市場記憶體短缺導致的產品價格上漲，對蘋果的長期增長影響有限。摩根大通分析歷史數據，認為 iPhone、Mac 和 iPad 的銷售量與定價之間關係較弱，消費者仍會購買蘋果產品。特別是 Mac 系列，預計可從與 AI 功能相關的升級需求中受益，抵消部分價格上漲的影響。此外，報告也提到，高端 iPhone 的購買者對價格上漲的敏感度較低。此分析主要為投資建議，未涉及任何技術漏洞或安全修補。",
    tags: ["Apple", "J.P. Morgan", "股價分析", "Mac", "iPhone", "投資報告"],
    title_en: "J.P. Morgan raises Apple stock price target to $345, citing limited impact of price increases on long-term growth",
    summary_en: "Investment bank J.P. Morgan maintained its 'Buy' rating on Apple, raising its price target from the previous $325 to $345. The report noted that recent product price increases, driven by market memory shortages, have a limited impact on Apple's long-term growth. Analyzing historical data, J.P. Morgan believes the correlation between sales volume and pricing for iPhone, Mac, and iPad is weak, and that consumers will continue to purchase Apple products. Specifically, the Mac series is expected to benefit from upgrade demand related to AI features, offsetting some of the impact from price increases. Furthermore, the report mentioned that high-end iPhone buyers are less sensitive to price hikes. This analysis is primarily for investment advice and does not involve any technical vulnerabilities or security patches.",
    tags_en: ["Apple", "J.P. Morgan", "Stock Analysis", "Mac", "iPhone", "Investment Report"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/j-p-morgan-raises-apple-stock-target-to-345-despite-hardware-price-hikes", lang: "EN" }
    ]
  },
  {
    id: "20260707-082",
    trackers: ["os"],
    category: "重點關注",
    title: "市場分析：iPhone 17系列折扣戰後，中國智慧型手機市場銷售仍下滑，Apple位居第二",
    summary: "根據 Counterpoint Research 的報告，儘管 Apple 在中國進行了 iPhone 17 Pro 系列的促銷活動，提供高達人民幣 2,000 元的總折扣，並藉此提升了銷售，使其市場佔有率升至第二位。然而，整體而言，中國智慧型手機市場在 618 購物節期間仍出現下滑趨勢。報告指出，整體銷售額年減 13%，即使 Apple 的銷售額也年減 9%。市場分析認為，主要的下行壓力來自於記憶體成本的上升，導致今年 618 期間的促銷強度不如往年，進而抑制了消費者需求。在 5 月 25 日至 6 月 21 日期間，華為以 21% 的市佔率領先，Apple 和 OPPO 分別佔據 18% 的市佔率。",
    tags: ["Counterpoint Research", "Apple", "iPhone 17", "中國市場", "智慧型手機", "市場分析"],
    title_en: "Market Analysis: Despite iPhone 17 Series Discounts, China's Smartphone Market Sales Continue to Decline, Apple Ranks Second",
    summary_en: "According to a Counterpoint Research report, although Apple conducted promotional activities for the iPhone 17 Pro series in China, offering a total discount of up to RMB 2,000, which boosted sales and raised its market share to second place. Overall, however, the Chinese smartphone market still showed a downward trend during the 618 shopping festival period. The report points out that overall sales dropped by 13% year-on-year, and even Apple's sales dropped by 9% year-on-year. Market analysis suggests that the main downward pressure comes from rising memory costs, which resulted in promotional intensity during this year's 618 period being lower than previous years, thereby suppressing consumer demand. Between May 25 and June 21, Huawei led with an 18% market share, while Apple and OPPO each accounted for 18% market share.",
    tags_en: ["Counterpoint Research", "Apple", "iPhone 17", "China Market", "Smartphone", "Market Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/iphone-discounts-lift-apple-to-second-place-in-chinas-shrinking-smartphone-market", lang: "EN" }
    ]
  },
  {
    id: "20260707-083",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果（Apple）尋求暫停與 Epic Games 訴訟的低階審理，等待最高法院審查藐視法庭指控",
    summary: "本案涉及蘋果公司（Apple）與 Epic Games 之間的法律糾紛，核心爭議點是蘋果是否能對開發者透過 App Store 外部連結進行的購買交易收取佣金。最高法院已同意審查蘋果是否構成民事藐視法庭（civil contempt）的指控，該指控源於 2021 年的禁令。儘管蘋果已開始允許外部購買連結，但最初的禁令要求其不得限制開發者導引用戶至 App Store 以外的支付選項。法院曾裁定蘋果的佣金收取和限制行為違反了禁令。目前，蘋果提交了「暫停令」（motion to stay）動議，主張由於最高法院的裁決可能改變或廢除現有禁令的法律基礎，因此低階法院應暫停進一步審理蘋果在外部連結購買上的佣金收費問題。此案的進展將高度依賴最高法院對原禁令範圍和藐視法庭指控的最終判決。",
    tags: ["Apple", "Epic Games", "最高法院", "法律訴訟", "App Store", "佣金爭議"],
    title_en: "Apple Seeks Stay on Low-Level Hearing in Epic Games Lawsuit, Awaiting Supreme Court Review of Contempt Charges",
    summary_en: "This case involves the legal dispute between Apple and Epic Games, with the core controversy being whether Apple can charge a commission on purchases made by developers through external links outside the App Store. The Supreme Court has agreed to review the allegation that Apple committed civil contempt, an accusation stemming from a 2021 injunction. Although Apple has begun allowing external purchase links, the original injunction stipulated that Apple must not restrict developers from directing users to payment options outside the App Store. The court previously ruled that Apple's commission collection and restrictive practices violated the injunction. Currently, Apple has filed a 'motion to stay,' arguing that because the Supreme Court's ruling may change or nullify the legal basis of the existing injunction, the lower court should suspend further proceedings regarding Apple's commission fees on external links. The progress of this case will heavily depend on the Supreme Court's final judgment regarding the scope of the original injunction and the contempt charges.",
    tags_en: ["Apple", "Epic Games", "Supreme Court", "Lawsuit", "App Store", "Commission Dispute"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/apple-asks-judge-to-pause-epic-games-case-during-supreme-court-review", lang: "EN" }
    ]
  },
  {
    id: "20260707-084",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果（Apple）遭最高法院裁定：德州年齡驗證法案仍須持續執行",
    summary: "這篇文章報導了蘋果公司（Apple）在德州（Texas）的用戶手機相關議題。儘管蘋果公司曾強烈反對該州法案，甚至有高層人士進行遊說活動，但最高法院（Supreme Court）已駁回了暫停執行該法律的請求。因此，蘋果公司必須繼續在德州對 iPhone 用戶實施年齡驗證機制。此法案的實務影響是，蘋果必須遵守德州州法，對用戶的年齡進行驗證，這可能增加開發和營運的複雜性，並引發跨州法律合規的挑戰。目前文章未提供具體技術細節或修補建議，僅是法律判決的後續影響。",
    tags: ["Apple", "德州法案", "年齡驗證", "法律合規", "iPhone"],
    title_en: "Apple Hit by Supreme Court Ruling: Texas Age Verification Law Must Remain Enforced",
    summary_en: "This article reports on an issue concerning Apple's user mobile devices in Texas. Although Apple strongly opposed the state law and even engaged in lobbying efforts, the Supreme Court has rejected the request to suspend the law's enforcement. Consequently, Apple must continue to implement age verification mechanisms for iPhone users in Texas. The practical implication of this law is that Apple must comply with Texas state law by verifying user ages, which may increase development and operational complexity and trigger cross-state legal compliance challenges. The article currently does not provide specific technical details or patch recommendations, only the subsequent impact of the legal ruling.",
    tags_en: ["Apple", "Texas Law", "Age Verification", "Legal Compliance", "iPhone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/apple-must-continue-to-age-verify-users-in-texas-says-one-sentence-ruling", lang: "EN" }
    ]
  },
  {
    id: "20260707-085",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple前高管Tony Fadell：AI助理的選擇至關重要，強調行為模式的改變而非單純技術升級",
    summary: "本文引用Apple前高管Tony Fadell的觀點，指出產品的成功不僅取決於技術的演進，更關鍵在於其能否理解並引導用戶的「行為模式」轉變。他認為，AI助理的選擇和設計，決定了用戶的使用習慣和生態系統的發展方向。Fadell的論點暗示，AI助理的選擇具有深遠的影響力，這對於開發者和產業規劃者而言，需要深入思考其背後的用戶體驗和行為學設計，而不僅是追求最新的技術規格。文章未提及具體的受影響產品、CVE 或修補建議，主要為產業趨勢分析。",
    tags: ["Tony Fadell", "AI助理", "用戶行為模式", "Apple", "產品策略"],
    title_en: "Former Apple Executive Tony Fadell: The Choice of AI Assistant is Crucial, Emphasizing Behavioral Change Over Mere Technological Upgrade",
    summary_en: "This article cites the views of former Apple executive Tony Fadell, who points out that product success depends not only on technological evolution but, more critically, on its ability to understand and guide users' 'behavioral patterns' change. He believes that the choice and design of AI assistants determine user usage habits and the direction of ecosystem development. Fadell's argument suggests that the choice of AI assistant has profound implications, requiring developers and industry planners to deeply consider the underlying user experience and behavioral design, rather than merely pursuing the latest technical specifications. The article does not mention specific affected products, CVEs, or patch recommendations, focusing primarily on industry trend analysis.",
    tags_en: ["Tony Fadell", "AI Assistant", "User Behavioral Patterns", "Apple", "Product Strategy"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/our-choice-of-ai-assistant-really-matters-says-tony-fadell-and-raises-big-questions", lang: "EN" }
    ]
  },
  {
    id: "20260707-086",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法生成新聞標題，原文為播客節目內容，無資安事件資訊",
    summary: "本文內容為 9to5Mac Daily 的播客節目介紹，提供收聽連結及贊助商廣告，不包含任何具體的資安事件、漏洞或修補資訊。因此無法撰寫資安新聞摘要。",
    tags: ["9to5Mac", "播客", "資安資訊", "無事件"],
    title_en: "Unable to generate news title; original content is a podcast episode, containing no cybersecurity incident information",
    summary_en: "This article is an introduction to the 9to5Mac Daily podcast, providing listening links and sponsor advertisements, and does not include any specific cybersecurity incidents, vulnerabilities, or patch information. Therefore, a cybersecurity news summary cannot be written.",
    tags_en: ["9to5Mac", "Podcast", "Cybersecurity Information", "No Incident"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/07/daily-july-7-2026", lang: "EN" }
    ]
  },
  {
    id: "20260707-087",
    trackers: ["eu_cra", "os"],
    category: "重點關注",
    title: "AI數據中心需求推升電價：美國製造業面臨能源成本飆升的挑戰",
    summary: "美國「鐵鏽帶」地區的製造業者，正因數據中心日益增長的能源需求，面臨電費大幅飆升的困境。大型電力網營運商 PJM Interconnection 的電能容量費用上漲，導致鋼鐵和磚塊等製造業的營運成本急劇增加。例如，一家位於俄亥俄州的磚廠，每月電費從 $1,600 飆升至 $12,000。鋼鐵製造商也指出，電能佔其總生產成本的 20% 至 40%。數據中心需求的激增，推升了 PJM 的電能容量價格，從 2024 年的 $28.92/兆瓦-天，飆升至 2026 年的 $329.17/兆瓦-天。這不僅提高了製造業的營運成本，也可能對美國「美國製造」的復興計畫構成挑戰。",
    tags: ["AI數據中心", "能源成本", "PJM Interconnection", "製造業", "電能價格", "美國經濟"],
    title_en: "AI Data Center Demand Drives Up Electricity Prices: US Manufacturing Faces Rising Energy Cost Challenges",
    summary_en: "Manufacturers in the American 'Rust Belt' are facing the dilemma of sharply escalating electricity costs due to the growing energy demands of data centers. The increase in capacity charges from large power grid operator PJM Interconnection has caused a dramatic rise in operating costs for industries such as steel and brick manufacturing. For example, a brick factory in Ohio saw its monthly electricity bill jump from $1,600 to $12,000. Steel manufacturers also point out that electricity accounts for 20% to 40% of their total production costs. The surge in data center demand has driven up PJM's capacity price, rising from $28.92/MWh-day in 2024 to $329.17/MWh-day in 2026. This not only raises manufacturing operating costs but could also pose a challenge to the revival of 'American Manufacturing' in the United States.",
    tags_en: ["AI Data Center", "Energy Costs", "PJM Interconnection", "Manufacturing", "Electricity Prices", "US Economy"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/us-manufacturers-energy-costs-soar-because-of-ai-data-center-demand", lang: "EN" }
    ]
  },
  {
    id: "20260707-088",
    trackers: ["os"],
    category: "重點關注",
    title: "蜱蟲叮咬誘發的「Alpha-gal 症候群」：研究顯示美國大量人口可能攜帶紅肉過敏抗體",
    summary: "根據發表在《Morbidity and Mortality Weekly Report》的研究指出，在美國部分地區，高達 30% 的人口可能攜帶由蜱蟲叮咬誘發的紅肉過敏抗體。這遠高於先前預估的實際患病人數。該研究檢測了血液捐贈樣本中的關鍵抗體，該抗體屬於 IgE 類，專門攻擊一種名為半乳糖-α-1,3-半乳糖（galactose-α-1,3-galactose），俗稱 alpha-gal 的雙糖分子。此分子存在於非人猿哺乳動物（如牛和豬）的細胞上，同時也存在於蜱蟲（特別是 Lone Star Tick，Amblyomma americanum）的唾液中。被蜱蟲叮咬的人可能會產生針對 alpha-gal 的 IgE 抗體，這可能導致食用紅肉、乳製品或明膠等動物產品時引發過敏反應。此症候群的症狀常延遲出現，且可能導致嚴重過敏反應（Anaphylaxis）。",
    tags: ["Alpha-gal 症候群", "蜱蟲叮咬", "IgE 抗體", "紅肉過敏", "Amblyomma americanum", "重點關注"],
    title_en: "Alpha-gal Syndrome Triggered by Tick Bites: Study Shows High Percentage of US Population May Carry Beef Allergy Antibodies",
    summary_en: "A study published in the *Morbidity and Mortality Weekly Report* indicates that up to 30% of the population in certain areas of the United States may carry antibodies to red meat allergies triggered by tick bites. This figure is significantly higher than previously estimated actual prevalence. The study tested for key antibodies in blood donation samples; these antibodies belong to the IgE class and specifically target a disaccharide molecule called galactose-α-1,3-galactose, commonly known as alpha-gal. This molecule is present on the cells of non-primate mammals (such as cows and pigs) and is also found in the saliva of ticks (particularly the Lone Star Tick, *Amblyomma americanum*). People bitten by ticks may develop IgE antibodies against alpha-gal, which can trigger allergic reactions when consuming animal products such as red meat, dairy, or gelatin. The symptoms of this syndrome often appear with a delay and can potentially lead to severe allergic reactions (Anaphylaxis).",
    tags_en: ["Alpha-gal Syndrome", "Tick Bite", "IgE Antibody", "Red Meat Allergy", "Amblyomma americanum", "Key Focus"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/health/2026/07/surprisingly-large-number-of-people-may-have-marker-for-tick-linked-meat-allergy", lang: "EN" }
    ]
  },
  {
    id: "20260707-089",
    trackers: ["os"],
    category: "重點關注",
    title: "最高法院允許德州執行年齡驗證法案，影響應用程式商店內容審核與言論自由",
    summary: "美國最高法院昨日決定不介入挑戰德州應用程式商店法案的訴訟，允許德州在持續進行訴訟的同時執行年齡驗證規定。該法案最初曾被聯邦法官以可能違反第一修正案為由阻止，但美國第五巡迴上訴法院於今年六月四日恢復了執行。目前，德州方面在法律上處於更有利的地位，因為上訴法院的判決指出，原初的地區法院可能在適用嚴格審查標準時犯了錯誤。該法案旨在要求應用程式商店對內容進行年齡驗證，引發了科技產業的「廣泛審查」指控。雖然最高法院仍有可能在第五巡迴上訴法院的程序結束後審理此案，但目前法律的執行權力已傾向於德州。",
    tags: ["德州", "最高法院", "應用程式商店", "年齡驗證", "言論自由", "法律規範"],
    title_en: "Supreme Court Allows Texas Age Verification Law, Impacting App Store Content Moderation and Free Speech",
    summary_en: "Yesterday, the U.S. Supreme Court declined to intervene in the lawsuit challenging Texas's app store law, allowing Texas to enforce the age verification requirements while litigation continues. The law was initially blocked by a federal judge for potentially violating the First Amendment, but the U.S. Fifth Circuit Court of Appeals reinstated its enforcement on June 4th of this year. Texas is currently in a more favorable legal position because the appellate court's ruling indicated that the original district court may have erred in applying strict scrutiny standards. The law aims to require app stores to age-verify content, triggering accusations of 'broad censorship' from the tech industry. Although the Supreme Court may still hear the case after the Fifth Circuit's proceedings conclude, the current legal enforcement power leans toward Texas.",
    tags_en: ["Texas", "Supreme Court", "App Store", "Age Verification", "Free Speech", "Legal Regulation"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/supreme-court-lets-texas-enforce-age-verification-law-on-app-stores", lang: "EN" }
    ]
  },
  {
    id: "20260707-090",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟裁員衝擊遊戲開發商：id Software與Bethesda面臨人員削減危機",
    summary: "本文報導了微軟（Microsoft）宣布裁員後，其旗下遊戲開發商，包括id Software和Bethesda，也面臨大規模的裁員風波。據內部消息指出，id Software的員工，特別是程式設計師，遭受了重創，有消息稱大部分甚至全部程式人員已被裁撤。另一位資深程式設計師也透露，id團隊約有五成的人員被解僱。遊戲開發者（Game Developer）的報導進一步指出，Doom工作室的冗餘人數約為九十名員工。id的共同創辦人John Romero對此表達了惋惜之情，並呼籲微軟能保留公司現有的程式碼和文件，以維護其歷史傳承。此事件主要聚焦於產業結構調整與人才流動，而非特定的技術漏洞或安全威脅，實務影響為開發資源與核心人才的流失。",
    tags: ["微軟", "id Software", "Bethesda", "遊戲產業", "裁員", "人才流失"],
    title_en: "Microsoft Layoffs Impact Game Developers: id Software and Bethesda Face Staff Reduction Crisis",
    summary_en: "This article reports that following Microsoft's announcement of layoffs, its subsidiary game developers, including id Software and Bethesda, are facing large-scale workforce reductions. According to internal sources, id Software employees, particularly programmers, have been severely affected, with reports suggesting that a majority or even all programming staff have been laid off. Another senior programmer revealed that approximately 50% of the id team has been terminated. Game Developer reports further indicated that the Doom studio has approximately ninety redundant employees. id co-founder John Romero expressed regret over this, calling on Microsoft to retain the company's existing code and documentation to preserve its historical legacy. This incident primarily focuses on industry structural adjustments and talent migration, rather than specific technical vulnerabilities or security threats, with the practical impact being the loss of development resources and core talent.",
    tags_en: ["Microsoft", "id Software", "Bethesda", "Gaming Industry", "Layoffs", "Talent Loss"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gaming/2026/07/bethesda-id-software-reportedly-hit-hard-by-microsoft-layoffs", lang: "EN" }
    ]
  },
  {
    id: "20260707-091",
    trackers: ["os"],
    category: "重點關注",
    title: "中國 AI 新創 DeepSeek 擬自研晶片，應對美國出口管制與 AI 算力競爭",
    summary: "大型語言模型（LLM）的開發商 DeepSeek 正在積極規劃進入晶片設計與製造領域。由於美國的出口管制，DeepSeek 及其同業面臨高度依賴美國供應鏈（如 Nvidia）的風險，尤其是在中國市場。DeepSeek 的目標是開發用於推論（inference）的資料中心晶片，以減少對華為（Huawei）和 Nvidia 的依賴。這場晶片自研的趨勢不僅限於中國，美國的 AI 巨頭如 OpenAI 和 Anthropic 也正積極規劃自研晶片（例如 OpenAI 與 Broadcom 的 Jalapeño），旨在掌握整個技術堆疊的控制權，並在日益受限的資料中心算力市場中取得競爭優勢。這顯示 AI 產業正從單純的軟體競爭，轉向硬體基礎設施的自主化與垂直整合。",
    tags: ["DeepSeek", "Nvidia", "AI 晶片", "出口管制", "資料中心", "LLM"],
    title_en: "China's AI Startup DeepSeek Plans Self-Developed Chips to Counter US Export Controls and AI Computing Power Competition",
    summary_en: "DeepSeek, a developer of Large Language Models (LLMs), is actively planning to enter the chip design and manufacturing sector. Due to US export controls, DeepSeek and its peers face high dependency risks on the US supply chain (such as Nvidia), particularly in the Chinese market. DeepSeek aims to develop data center chips for inference to reduce reliance on Huawei and Nvidia. This trend of self-developing chips is not limited to China; US AI giants like OpenAI and Anthropic are also actively planning to develop proprietary chips (for example, OpenAI's Jalapeño with Broadcom), aiming to control the entire technology stack and gain a competitive edge in the increasingly restricted data center computing power market. This indicates that the AI industry is shifting from mere software competition toward the self-reliance and vertical integration of hardware infrastructure.",
    tags_en: ["DeepSeek", "Nvidia", "AI Chips", "Export Controls", "Data Center", "LLM"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/07/facing-us-export-controls-chinas-deepseek-plans-to-make-its-own-chips", lang: "EN" }
    ]
  },
  {
    id: "20260707-092",
    trackers: ["os"],
    category: "重點關注",
    title: "學術機構發布病毒目錄：分析潛在的全球大流行病威脅與傳播模式",
    summary: "本報導引用愛丁堡大學的學術研究，介紹了一個用於預測潛在全球大流行病（Disease X）的病毒目錄。研究指出，近期最大的威脅來自於RNA基因組的病毒，這些病毒已具備人傳人傳播的能力，即使它們可能從動物跨界傳播。作者強調，病毒的傳播能力（R值）和跨物種傳播的潛力是判斷大流行風險的關鍵指標。目錄中列出的病毒包括愛德華病毒（Zaire ebolavirus）、奇昆熱病毒（Chikungunya）、茲卡病毒（Zika）和奧羅普奇病毒（Oropouche），這些都曾引發重大疫情。研究也指出，即使是目前正在傳播的病毒，如安地斯漢他病毒和邦迪布吉約愛波病毒，如果能更早被發現和理解，將能大幅減輕未來疫情的衝擊。這項研究強調了早期病毒監測和快速病原體識別的重要性。",
    tags: ["病毒學", "大流行病", "RNA病毒", "Disease X", "愛丁堡大學", "傳染病學"],
    title_en: "Academic Institution Releases Viral Catalog: Analyzing Potential Global Pandemic Threats and Transmission Patterns",
    summary_en: "This report references academic research from the University of Edinburgh, introducing a viral catalog used to predict potential global pandemics (Disease X). The research points out that the most recent major threats come from RNA genome viruses that possess human-to-human transmissibility, even if they may originate from animal spillover. The authors emphasize that a virus's transmissibility (R value) and potential for cross-species transmission are key indicators for assessing pandemic risk. Viruses listed in the catalog include Zaire ebolavirus, Chikungunya, Zika, and Oropouche, all of which have caused significant outbreaks. The study also notes that even currently circulating viruses, such as Andean hantavirus and Bundibugyo ebolavirus, could significantly mitigate the impact of future outbreaks if they were discovered and understood earlier. This research underscores the importance of early viral surveillance and rapid pathogen identification.",
    tags_en: ["Virology", "Pandemic", "RNA Virus", "Disease X", "University of Edinburgh", "Infectious Disease"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/health/2026/07/new-virus-catalog-reveals-which-pathogens-pose-the-greatest-threat", lang: "EN" }
    ]
  },
  {
    id: "20260707-093",
    trackers: ["os"],
    category: "重點關注",
    title: "ULA Atlas V 火箭進入終局：後續任務與市場轉型考量",
    summary: "本文報導了 United Launch Alliance (ULA) 的 Atlas V 火箭在近期進行了為 Amazon Leo 寬頻星座發射 29 顆衛星的任務。此次發射是 Atlas V 的第 110 次飛行，也是其服務生涯中的一次高頻發射。雖然 Atlas V 的最終飛行仍有數年時間，但其作為曾主導市場的發射服務商的時代正在結束。目前 ULA 仍有六枚 Atlas V 待用，主要用於運送 Boeing 的 Starliner 載人艙至國際太空站 (ISS)。然而，由於 NASA 曾縮減 Boeing 商業載人合約的任務數量，這些剩餘的火箭是否能全部使用，仍存在不確定性。文章指出，如果這些火箭沒有其他主要客戶需求，ULA 可能需要考慮將其重新用於其他任務，例如為 Amazon Leo 網路增加發射能力，但這存在一些挑戰。",
    tags: ["United Launch Alliance", "Atlas V", "Amazon Leo", "Starliner", "ISS", "太空發射"],
    title_en: "ULA Atlas V Rocket Reaches End-of-Life: Subsequent Missions and Market Transition Considerations",
    summary_en: "This article reports on the recent mission of the United Launch Alliance (ULA) Atlas V rocket, which launched 29 satellites for the Amazon Leo broadband constellation. This launch marks the 110th flight of the Atlas V, representing a high-frequency service flight. Although the Atlas V has several years of service remaining, its era as a market-leading launch service provider is drawing to a close. Currently, ULA has six Atlas V boosters available, primarily designated for transporting Boeing's Starliner crew capsule to the International Space Station (ISS). However, due to NASA having reduced the mission count for the Boeing commercial crew contract, there remains uncertainty regarding whether all these remaining rockets can be utilized. The article points out that if these rockets lack other major client demand, ULA may need to consider repurposing them for other missions, such as increasing launch capacity for the Amazon Leo network, though this presents certain challenges.",
    tags_en: ["United Launch Alliance", "Atlas V", "Amazon Leo", "Starliner", "ISS", "Space Launch"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/07/after-a-stellar-career-ulas-atlas-v-rocket-last-act-is-waiting-on-starliner", lang: "EN" }
    ]
  },
  {
    id: "20260707-094",
    trackers: ["os"],
    category: "重點關注",
    title: "AI驅動通用型機器人自主化趨勢：從點對點導航到複雜任務執行",
    summary: "本文探討了通用型自主機器人的發展趨勢，指出未來機器人將能執行比單純的點對點導航更廣泛、更複雜的任務，例如在城市街道上運行的自動駕駛計程車或自主送貨的無人機。機器人的自主化能力是基於現代人工智慧的發展，吸引了大量投資和研究。過去，機器人技術的挑戰包括自主導航和自我平衡等基礎問題，例如早期的實驗性車輛和二足機器人。目前，機器人的自主性被定義為「無需人工干預，根據當前狀態和感測能力執行預期任務的能力」。這項技術的進展顯示，機器人正在朝著更接近人類生活和工作場景的通用化、高自主性目標邁進。",
    tags: ["機器人學", "人工智慧", "自主系統", "通用型機器人", "Boston Dynamics", "自動化"],
    title_en: "AI-Driven General-Purpose Robot Autonomy Trends: From Point-to-Point Navigation to Complex Task Execution",
    summary_en: "This article explores the development trends of general-purpose autonomous robots, pointing out that future robots will be able to execute tasks that are broader and more complex than simple point-to-point navigation. Examples include self-driving taxis operating on city streets or drones performing autonomous deliveries. The autonomy of robots is based on the development of modern artificial intelligence, attracting significant investment and research. Historically, challenges in robotics technology included fundamental issues such as autonomous navigation and self-balancing, exemplified by early experimental vehicles and bipedal robots. Currently, robot autonomy is defined as 'the ability to perform expected tasks based on current status and sensing capabilities without human intervention.' This technological progress shows that robots are moving toward a generalized, high-autonomy goal that is closer to human living and working environments.",
    tags_en: ["Robotics", "Artificial Intelligence", "Autonomous Systems", "General-Purpose Robots", "Boston Dynamics", "Automation"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/features/2026/07/robot-workers-rising-how-ai-may-drive-general-purpose-autonomy-in-robotics", lang: "EN" }
    ]
  },
  {
    id: "20260707-095",
    trackers: ["os"],
    category: "重點關注",
    title: "Proton 11.0-1 正式發布：提升 Steam Play 穩定性，強化 Linux 遊戲體驗",
    summary: "Valve 的 Steam Play 核心元件 Proton 釋出 11.0-1 穩定版本。Proton 是在 Wine 的基礎上，用於在 Linux 系統上提供優化的 Windows 遊戲體驗，特別適用於 Steam Deck 和 Steam Machine 等設備。本次更新是基於 Wine 11.0 上游，相較於 Proton 10.0 系列有顯著提升。Proton 11.0-1 支援了大量新的 Windows 遊戲，包括《Resident Evil (1996)》、《Dino Crisis 2》和《SHOGUN: Total War》等，這些遊戲此前可能需要使用 Steam Experimental 版本才能運行。此外，本次更新還修復了 Rockstar Launcher 彈出視窗的渲染問題、修復了部分 EA 遊戲在更新後無法遊玩的問題，並提升了 Kodi 媒體播放器的支援度。技術層面，Proton 11.0-1 更新了 Xalia 0.4.9、DXVK 2.7 Git 等多個核心組件，旨在提供更穩定、更廣泛的遊戲兼容性。玩家應更新至此穩定版本以享受最佳的 Linux 遊戲體驗。",
    tags: ["Proton", "Steam Play", "Linux", "Wine", "Valve", "遊戲兼容性"],
    title_en: "Proton 11.0-1 Officially Released: Enhancing Steam Play Stability and Linux Gaming Experience",
    summary_en: "Valve's Steam Play core component, Proton, has released the 11.0-1 stable version. Proton is built on Wine and is used to provide an optimized Windows gaming experience on Linux systems, particularly for devices like the Steam Deck and Steam Machine. This update is based on the Wine 11.0 upstream and features significant improvements compared to the Proton 10.0 series. Proton 11.0-1 now supports a large number of new Windows games, including titles such as《Resident Evil (1996)》, 《Dino Crisis 2》, and 《SHOGUN: Total War》, which might have previously required the Steam Experimental version to run. Furthermore, this update fixes rendering issues with the Rockstar Launcher pop-up window, resolves issues where some EA games were unplayable after updates, and improves support for the Kodi media player. On a technical level, Proton 11.0-1 updates multiple core components, including Xalia 0.4.9 and DXVK 2.7 Git, aiming to provide more stable and broader gaming compatibility. Players are advised to update to this stable version to enjoy the best Linux gaming experience.",
    tags_en: ["Proton", "Steam Play", "Linux", "Wine", "Valve", "Gaming Compatibility"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Proton-11.0-1", lang: "EN" }
    ]
  },
  {
    id: "20260707-096",
    trackers: ["os"],
    category: "重點關注",
    title: "NVIDIA 將 Rigel CPU 核心支援上游整合至 GCC 編譯器，為下一代 Rosa 平台鋪路",
    summary: "NVIDIA 宣布其下一代 Rosa CPU 平台，搭載 Rigel 核心，已將初步的編譯器支援整合至上游的 GNU Compiler Collection (GCC) 程式碼庫。Rigel 核心基於 Armv9.2-A 架構，是 Vera CPU 搭載 Olympus 核心的後繼產品。NVIDIA 編譯器工程師透過此提交，新增了 `-mcpu=rigel` 參數，使開發者能夠針對搭載 Rigel 核心的 Rosa CPU 進行編譯。目前此支援僅為基礎的 CPU 目標設定，尚未包含任何專業的優化或特定調整。開發者應注意，Rigel 核心的識別部分 ID 已更新為 0x11，相較於 Olympus 的 0x10。此整合預計在 GCC 17.1 穩定版之前，將會有更深入的優化和支援加入，有助於開發者提前為新硬體平台進行應用程式開發。",
    tags: ["NVIDIA", "GCC", "Rigel", "Rosa CPU", "Armv9.2-A", "編譯器"],
    title_en: "NVIDIA Integrates Rigel CPU Core Support into GCC Compiler Upstream, Paving the Way for Next-Generation Rosa Platform",
    summary_en: "NVIDIA announced that its next-generation Rosa CPU platform, featuring the Rigel core, has integrated preliminary compiler support into the upstream GNU Compiler Collection (GCC) codebase. The Rigel core is based on the Armv9.2-A architecture and is the successor to the Olympus core found in the Vera CPU. Through this submission, NVIDIA compiler engineers added the `-mcpu=rigel` parameter, allowing developers to compile for Rosa CPUs equipped with the Rigel core. Currently, this support is only a basic CPU target setting and does not include any professional optimizations or specific adjustments. Developers should note that the identifying ID for the Rigel core has been updated to 0x11, compared to Olympus's 0x10. Deeper optimizations and support are expected to be added before the GCC 17.1 stable release, helping developers begin application development for the new hardware platform in advance.",
    tags_en: ["NVIDIA", "GCC", "Rigel", "Rosa CPU", "Armv9.2-A", "Compiler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Rigel-Upstream-GCC", lang: "EN" }
    ]
  },
  {
    id: "20260707-097",
    trackers: ["os"],
    category: "重點關注",
    title: "NVIDIA 宣布下一代 Rosa CPU 採用 Rigel 核心，強化 AI 處理能力",
    summary: "NVIDIA 在其部落格文章中，公布了下一代 Rosa CPU 的初步細節。這款 CPU 將延續其作為代理式 AI 處理器的發展路線，並搭載了名為 Rigel 的核心。Rigel 是 NVIDIA 的下一代 Arm v9.2 CPU 核心，相較於前代 Olympus 核心，它能提供更高的單核性能，同時保持相同的晶片足跡。主要提升包括更優化的指令傳輸、更大的 L2 快取以及更高效的記憶體處理能力。NVIDIA 宣稱 Rosa CPU 將在保持晶片尺寸的同時，提升單核性能、擴大 L2 快取並改善記憶體處理效率。文章指出，未來 Rosa CPU 將與 AMD EPYC Venice 和 Intel Xeon Diamond Rapids 等伺服器 CPU 競爭。此外，NVIDIA 也已將 Rigel CPU 的初步支援整合到 GCC 編譯器中，顯示其開發進度。",
    tags: ["NVIDIA", "Rosa CPU", "Rigel 核心", "Arm v9.2", "AI 處理器", "GCC 編譯器"],
    title_en: "NVIDIA Announces Next-Generation Rosa CPU Featuring Rigel Core, Enhancing AI Processing Capabilities",
    summary_en: "NVIDIA published preliminary details for its next-generation Rosa CPU in a blog post. This CPU will continue its development path as an accelerator AI processor and will incorporate a core named Rigel. Rigel is NVIDIA's next-generation Arm v9.2 CPU core. Compared to the previous Olympus core, it offers higher single-core performance while maintaining the same silicon footprint. Key enhancements include optimized instruction throughput, larger L2 cache, and more efficient memory handling capabilities. NVIDIA claims that the Rosa CPU will boost single-core performance, expand L2 cache, and improve memory handling efficiency while maintaining the same chip size. The article notes that the future Rosa CPU will compete with server CPUs such as AMD EPYC Venice and Intel Xeon Diamond Rapids. Furthermore, NVIDIA has integrated preliminary support for the Rigel CPU into the GCC compiler, demonstrating its development progress.",
    tags_en: ["NVIDIA", "Rosa CPU", "Rigel Core", "Arm v9.2", "AI Processor", "GCC Compiler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Rosa-CPU-Rigel-Core", lang: "EN" }
    ]
  },
  {
    id: "20260707-098",
    trackers: ["os"],
    category: "重點關注",
    title: "GitHub AI Agent 洩漏私人儲存庫：用戶若詢問得當，AI 輔助工具可能洩露機密程式碼",
    summary: "本事件揭露了 GitHub 的 AI 輔助代理（AI Agent）存在潛在的資訊洩漏風險。當使用者以特定方式（「asked nicely」）向該 AI 代理提問時，它可能會意外地洩露或暴露用戶的私人程式碼儲存庫（private repositories）內容。這類漏洞的實務影響極為嚴重，因為私人儲存庫通常包含企業的專有、機密或未公開的商業智慧。雖然原文未提供具體的 CVE 編號或 CVSS 分數，但其攻擊向量是透過與 AI 代理的互動（Prompt Engineering）觸發，屬於邏輯或配置層面的安全缺陷。修補建議是使用者應提高警覺性，避免在未經充分安全審核的 AI 工具中輸入或詢問高度敏感的專有程式碼或商業機密。開發者和企業應審慎評估使用 AI 輔助工具時的資料隔離和權限管理機制。",
    tags: ["GitHub", "AI Agent", "資訊洩漏", "私人儲存庫", "程式碼安全", "Prompt Engineering"],
    title_en: "GitHub AI Agent Leaks Private Repositories: AI Assistant May Expose Confidential Code If Prompted Improperly",
    summary_en: "This incident reveals a potential information leakage risk within GitHub's AI Agent. When users query the AI Agent in specific ways (\"asked nicely\"), it may inadvertently leak or expose the contents of the user's private repositories. The practical impact of such a vulnerability is extremely severe, as private repositories typically contain corporate proprietary, confidential, or unpublished business intelligence. Although the original text does not provide a specific CVE ID or CVSS score, the attack vector involves interacting with the AI Agent (Prompt Engineering), classifying it as a logical or configuration-level security flaw. The remediation advice is for users to increase vigilance and avoid inputting or querying highly sensitive proprietary code or business secrets within AI tools that have not undergone sufficient security review. Developers and enterprises should carefully evaluate the data isolation and permission management mechanisms when utilizing AI assistance tools.",
    tags_en: ["GitHub", "AI Agent", "Information Leakage", "Private Repositories", "Code Security", "Prompt Engineering"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/07/github-ai-agent-leaks-private-repos-when-asked-nicely/5267924", lang: "EN" }
    ]
  },
  {
    id: "20260707-099",
    trackers: ["os"],
    category: "重點關注",
    title: "南韓晶片新創 FuriosaAI 進入歐洲資料中心，展示 RNGD 加速器技術",
    summary: "本文報導了南韓晶片新創公司 FuriosaAI 的業務擴張動態。該公司將其專為人工智慧（AI）和機器學習（ML）設計的 RNGD 加速器（accelerators）部署到了歐洲的資料中心，特別提到了位於里斯本的 Equinix 資料中心。這代表了亞洲先進晶片設計公司正在積極進入歐洲市場，為AI基礎設施的供應鏈帶來新的競爭和技術展示。文章主要聚焦於市場的擴張和技術的落地，而非特定的漏洞或安全事件。對於關注AI硬體加速器和全球數據中心市場的開發者和企業來說，這是一個重要的市場趨勢觀察點。",
    tags: ["FuriosaAI", "AI", "ML", "RNGD 加速器", "歐洲資料中心", "晶片供應鏈"],
    title_en: "South Korean Chip Startup FuriosaAI Enters European Data Centers, Showcasing RNGD Accelerator Technology",
    summary_en: "This article reports on the business expansion of South Korean chip startup FuriosaAI. The company has deployed its RNGD accelerators, designed for Artificial Intelligence (AI) and Machine Learning (ML), into European data centers, specifically mentioning the Equinix data center in Lisbon. This signifies that advanced chip design companies from Asia are actively entering the European market, bringing new competition and technological displays to the AI infrastructure supply chain. The article primarily focuses on market expansion and technology implementation, rather than specific vulnerabilities or security incidents. This represents an important market trend observation point for developers and enterprises interested in AI hardware accelerators and the global data center market.",
    tags_en: ["FuriosaAI", "AI", "ML", "RNGD Accelerator", "European Data Center", "Chip Supply Chain"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/07/south-korean-chip-startup-furiosaai-invades-european-datacenters/5267884", lang: "EN" }
    ]
  },
  {
    id: "20260707-100",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Cai Cloud蠕蟲攻擊：竊取競爭對手機密資料並進行加密貨幣挖礦",
    summary: "這篇報導揭露了一種名為 Cai Cloud的蠕蟲（worm）惡意軟體。該蠕蟲具有高度的自主性和攻擊性，能夠在目標網路中橫向移動，並針對競爭對手進行攻擊。攻擊的具體行為包括竊取機密資料（secrets）和在受害者系統上進行加密貨幣挖礦（mining）。這類惡意軟體代表了供應鏈和競爭情報竊取的重大威脅。實務上，企業必須強化網路邊界防禦，並實施嚴格的網路分段（network segmentation）和最小權限原則（Principle of Least Privilege），以限制惡意軟體的橫向移動能力。建議組織應定期進行漏洞掃描、修補管理，並部署行為分析系統來監測異常的網路流量和資源消耗，以及早發現和阻斷這類複雜的攻擊鏈。",
    tags: ["Cai Cloud", "蠕蟲", "惡意軟體", "情報竊取", "挖礦", "網路安全"],
    title_en: "Cai Cloud Worm Attack: Stealing Competitor Mobile Secrets and Performing Cryptocurrency Mining",
    summary_en: "This report reveals a worm malware named Cai Cloud. This worm possesses high autonomy and attack capability, enabling it to move laterally within a target network and target competitors. Specific attack behaviors include stealing secrets and performing cryptocurrency mining on the victim's system. This type of malware represents a significant threat to supply chain and competitive intelligence theft. Practically, enterprises must strengthen network perimeter defense and implement strict network segmentation and the Principle of Least Privilege to limit the malware's lateral movement capabilities. Organizations are advised to conduct regular vulnerability scanning, patch management, and deploy behavioral analysis systems to monitor for anomalous network traffic and resource consumption, thereby enabling early detection and disruption of such complex attack chains.",
    tags_en: ["Cai Cloud", "Worm", "Malware", "Intelligence Theft", "Mining", "Cybersecurity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/07/cai-cloud-worm-gives-competitors-malware-the-boot-then-steals-secrets-and-mines-for-coin/5267856", lang: "EN" }
    ]
  },
  {
    id: "20260707-101",
    trackers: ["os"],
    category: "重點關注",
    title: "NASA宣布退出卡普石計畫，終結月球軌道學習階段",
    summary: "本文報導NASA宣布終止卡普石（Capstone）計畫，該計畫已運行四年，旨在透過月球軌道上的實作經驗來學習和評估相關技術。文章指出，隨著計畫的階段性結束，NASA將會將資源和精力轉移到新的、更具前瞻性的太空探索任務上。雖然原文未提供具體的技術細節或受影響產品，但其核心意義在於標誌著一個重要里程碑的結束，預示著未來太空探索的重點將會轉向更成熟、更具商業化潛力的目標。對於相關的航太工程師、技術開發者和產業投資者而言，這代表著從學習和驗證階段進入到實際執行和商業化應用階段的轉變。修補建議方面，建議相關產業應密切關注NASA後續的任務規劃和技術轉移路徑，以掌握下一波的技術發展趨勢。",
    tags: ["NASA", "卡普石計畫", "月球探索", "航太工程", "太空任務", "技術轉移"],
    title_en: "NASA Announces Withdrawal from Capstone Program, Concluding Lunar Orbit Learning Phase",
    summary_en: "This article reports that NASA has terminated the Capstone program, which has been operational for four years. The program aimed to learn and evaluate relevant technologies through practical experience in lunar orbit. The article points out that with the phased conclusion of the program, NASA will shift its resources and focus to new, more forward-looking space exploration missions. Although the original text does not provide specific technical details or affected products, its core significance lies in marking the end of an important milestone, suggesting that the future focus of space exploration will shift toward more mature and commercially viable goals. For relevant aerospace engineers, technical developers, and industry investors, this represents a transition from the learning and validation phase to the actual execution and commercial application phase. Regarding remediation suggestions, it is recommended that related industries closely monitor NASA's subsequent mission planning and technology transfer path to grasp the next wave of technological development trends.",
    tags_en: ["NASA", "Capstone Program", "Lunar Exploration", "Aerospace Engineering", "Space Mission", "Technology Transfer"],
    sources: [
      { name: "The Register", url: "https://theregister.com/science/2026/07/07/nasa-calls-time-on-capstone-after-four-years-of-lunar-orbit-lessons/5267820", lang: "EN" }
    ]
  },
  {
    id: "20260707-102",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無",
    summary: "原文為一個資安新聞網站的索引頁面或聚合頁面，內容涵蓋多個不同主題的資安報導，包括 AI 應用、Microsoft 漏洞修補、惡意軟體趨勢、以及 FOSS 專案更新等。文章未聚焦於單一的特定漏洞或產品，因此無法提供單一的受影響產品、技術細節或修補建議。無法撰寫具體的資安摘要。",
    tags: ["資安新聞聚合", "AI 安全", "Microsoft", "FOSS", "漏洞修補", "惡意軟體"],
    title_en: "N/A",
    summary_en: "The original text is an index or aggregation page from a cybersecurity news website, covering multiple security reports on diverse topics, including AI applications, Microsoft vulnerability patches, malware trends, and FOSS project updates. The article does not focus on a single specific vulnerability or product, and therefore cannot provide a single affected product, technical details, or patch recommendations. A specific security summary cannot be written.",
    tags_en: ["Cybersecurity News Aggregation", "AI Security", "Microsoft", "FOSS", "Vulnerability Patching", "Malware"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/07/predatorgate-victims-launch-8m-sueball-at-spyware-maker/5267766", lang: "EN" }
    ]
  },
  {
    id: "20260707-103",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "攻擊者利用假冒 Microsoft Teams 訊息，誘騙員工安裝惡意軟體",
    summary: "近期資安事件顯示，攻擊者正透過偽造的 Microsoft Teams 訊息，引誘目標員工下載或安裝惡意軟體。攻擊者利用員工對工作協作工具的信任，偽裝成內部通知或業務相關的檔案，達到社會工程學的目的。這類攻擊的實務影響極大，不僅可能導致單機感染，更可能成為進入企業內部網路、竊取敏感資料或進行橫向移動的跳板。修補建議除了加強技術防禦（如郵件和通訊端點的惡意軟體掃描），更關鍵的是必須提升員工的資安意識，特別是針對來自內部工具的釣魚（Spear Phishing）和社會工程學攻擊的警覺性。企業應定期進行模擬訓練，教育員工識別可疑的連結、附件和要求下載的行為。",
    tags: ["Microsoft Teams", "社會工程學", "惡意軟體", "釣魚攻擊", "資安意識"],
    title_en: "Attackers Use Fake Microsoft Teams Messages to Trick Employees into Installing Malware",
    summary_en: "Recent cybersecurity incidents show that attackers are using fabricated Microsoft Teams messages to trick target employees into downloading or installing malware. Attackers exploit employees' trust in collaboration tools, disguising malicious content as internal notifications or business-related files to achieve social engineering goals. The practical impact of these attacks is significant; they can not only lead to single-machine infections but also serve as a springboard for entering corporate internal networks, stealing sensitive data, or performing lateral movement. Remediation suggestions include strengthening technical defenses (such as malware scanning at email and communication endpoints), but more critically, they require raising employee cybersecurity awareness, especially regarding Spear Phishing and social engineering attacks originating from internal tools. Companies should conduct regular simulated training to educate employees on identifying suspicious links, attachments, and download requests.",
    tags_en: ["Microsoft Teams", "Social Engineering", "Malware", "Phishing Attack", "Cybersecurity Awareness"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/07/fake-it-bods-on-microsoft-teams-coax-workers-into-installing-malware/5267610", lang: "EN" }
    ]
  },
  {
    id: "20260707-104",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "無",
    tags: [],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/07/alleged-pro-russia-hacktivist-arrested-in-palencia/5267569", lang: "EN" }
    ]
  },
  {
    id: "20260707-105",
    trackers: ["eu_cra", "os"],
    category: "重點關注",
    title: "政府網路安全承諾：包括微軟和卡皮塔在內，60個簽署國加強網路韌性",
    summary: "本文報導了「政府網路安全承諾」（Governments Cyber Pledge）的活動，該承諾吸引了包括微軟（Microsoft）和卡皮塔（Capita）在內的60個國家簽署。此舉顯示了全球政府對提升國家網路安全和數位韌性的高度重視。雖然文章未提供具體的技術漏洞或CVE細節，但其核心重點在於跨國合作，旨在建立更強大的全球網路安全生態系統。對於企業和資安專業人員而言，這代表著資安標準和合作機制將會更加國際化和嚴格化，需要關注全球性的資安政策趨勢與供應鏈風險管理。修補建議是關注各國政府和大型科技公司發布的共同安全標準，並強化組織的全球合規性與風險管理能力。",
    tags: ["政府網路安全", "全球資安標準", "網路韌性", "Microsoft", "Cyber Pledge", "國際合作"],
    title_en: "Government Cyber Pledge: 60 Nations Including Microsoft and Capita Strengthen Cyber Resilience",
    summary_en: "This article reports on the \"Governments Cyber Pledge\" initiative, which has been signed by 60 countries, including Microsoft and Capita. This demonstrates the global commitment of governments to enhancing national cybersecurity and digital resilience. While the article does not provide specific technical vulnerabilities or CVE details, its core focus is on international cooperation aimed at establishing a stronger global cybersecurity ecosystem. For enterprises and cybersecurity professionals, this signifies that security standards and cooperation mechanisms will become more internationalized and stringent, necessitating attention to global cybersecurity policy trends and supply chain risk management. The remediation advice is to monitor common security standards issued by national governments and large technology companies, and to strengthen organizational global compliance and risk management capabilities.",
    tags_en: ["Government Cybersecurity", "Global Security Standards", "Cyber Resilience", "Microsoft", "Cyber Pledge", "International Cooperation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/07/governments-cyber-pledge-lands-60-signatories-including-ms-and-somehow-capita/5267554", lang: "EN" }
    ]
  },
  {
    id: "20260707-106",
    trackers: ["os"],
    category: "重點關注",
    title: "AI與科技主權：英國政府面臨技術獨立性挑戰，需重新評估基礎設施",
    summary: "本文討論了在當前AI和技術快速發展的背景下，英國政府面臨的「技術主權」挑戰。隨著全球科技巨頭和AI技術的普及，國家級的基礎設施和技術供應鏈的獨立性變得至關重要。文章指出，單純依賴外部技術或供應鏈，可能導致在關鍵技術領域（如AI運算、數據處理）上缺乏自主性。這不僅是技術問題，更是國家戰略層面的考量。對於政府機構和大型企業而言，必須建立本地化的技術能力，並評估其核心系統的韌性，以避免在國際技術競爭中處於被動或被排除的地位。修補建議包括：審視關鍵技術的供應鏈，推動本土AI算力與數據中心的建設，並建立跨國界、跨技術的協作機制，以確保國家在數位時代的自主發展能力。",
    tags: ["技術主權", "AI", "英國政府", "基礎設施", "供應鏈", "數位轉型"],
    title_en: "AI and Technological Sovereignty: UK Government Faces Challenges in Technical Independence, Requiring Infrastructure Reassessment",
    summary_en: "This article discusses the 'technological sovereignty' challenges facing the UK government amid the rapid development of AI and technology. With the proliferation of global tech giants and AI technologies, the independence of national-level infrastructure and technology supply chains has become critically important. The article points out that simply relying on external technologies or supply chains may lead to a lack of autonomy in key technological areas (such as AI computing and data processing). This is not merely a technical issue, but a consideration at the national strategic level. For government agencies and large enterprises, it is essential to build localized technological capabilities and assess the resilience of their core systems to avoid being in a passive or excluded position during international technological competition. Remedial suggestions include: reviewing the supply chains of critical technologies, promoting the construction of local AI computing power and data centers, and establishing cross-border, cross-technology cooperation mechanisms to ensure the nation's autonomous development capacity in the digital age.",
    tags_en: ["Technological Sovereignty", "AI", "UK Government", "Infrastructure", "Supply Chain", "Digital Transformation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/07/mps-tell-brit-government-sort-out-your-tech-sovereignty-or-get-left-out-in-the-cold/5267076", lang: "EN" }
    ]
  },
  {
    id: "20260707-107",
    trackers: ["os"],
    category: "重點關注",
    title: "廣達與蘋果擴大客製晶片合作，合作期限延長至 2031 年",
    summary: "本文報導了廣達（Wistron）與蘋果公司（Apple）之間關於客製化晶片（custom silicon）的合作關係。雙方決定將原有的合作協議延長至 2031 年。這項合作對於蘋果的生態系統和未來產品線至關重要，顯示出蘋果持續依賴外部供應鏈夥伴來擴展其自研晶片的能力。雖然文章未提供具體的技術細節或漏洞資訊，但其核心意義在於鞏固了蘋果在自研晶片和硬體整合方面的供應鏈策略，為未來多代產品的開發奠定了基礎。對於產業觀察者和供應鏈規劃者而言，這代表了蘋果在未來多年內將持續深化與關鍵供應商的深度合作，特別是在處理複雜的晶片設計與製造流程方面。",
    tags: ["Apple", "廣達", "晶片供應鏈", "客製化晶片", "電子產品"],
    title_en: "Wistron and Apple Expand Custom Silicon Cooperation, Extending Partnership to 2031",
    summary_en: "This article reports on the cooperation between Wistron and Apple regarding custom silicon. Both parties have decided to extend their original cooperation agreement until 2031. This partnership is crucial for Apple's ecosystem and future product lines, indicating Apple's continued reliance on external supply chain partners to expand its self-developed chip capabilities. Although the article does not provide specific technical details or vulnerability information, its core significance lies in solidifying Apple's supply chain strategy in self-developed chips and hardware integration, laying the foundation for the development of multiple future generations of products. For industry observers and supply chain planners, this signifies that Apple will continue to deepen deep cooperation with key suppliers over the coming years, especially in handling complex chip design and manufacturing processes.",
    tags_en: ["Apple", "Wistron", "Chip Supply Chain", "Custom Silicon", "Consumer Electronics"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/07/07/broadcom-and-apple-extend-custom-silicon-pact-to-2031/5267491", lang: "EN" }
    ]
  },
  {
    id: "20260707-108",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟開放 Bing 搜尋引擎支援 Google 與 Apple 帳號登入，降低用戶門檻",
    summary: "微軟宣布 Bing 搜尋引擎現已支援使用 Google 或 Apple 帳號進行登入，無需建立或使用傳統的 Microsoft 帳號（MSA）。此舉旨在提升用戶體驗，讓使用者能更輕鬆地使用 Bing 的「個人化功能」，特別是 Microsoft Rewards 點數系統。過去，微軟一直推動用戶使用 MSA，但此變動顯示微軟正逐漸開放其生態系統，讓 Bing 成為一個獨立的產品，而非僅限於微軟帳號的服務。實務上，用戶現在可以利用現有的 Google 或 Apple 帳號登入 Bing，享受諸如 AI 工具、圖片生成等功能，且不會在背景強制建立 MSA。這對於習慣使用 Google 或 Apple 生態系統的用戶而言，極大地降低了使用門檻，預計能幫助 Bing 擴大用戶群，提升其作為獨立搜尋引擎的能見度。",
    tags: ["Microsoft", "Bing", "Google", "Apple", "MSA", "搜尋引擎", "用戶體驗"],
    title_en: "Microsoft enables Bing search engine to support Google and Apple accounts for login, lowering user barriers",
    summary_en: "Microsoft announced that the Bing search engine now supports logging in using Google or Apple accounts, eliminating the need to create or use a traditional Microsoft account (MSA). This move aims to enhance the user experience, allowing users to more easily access Bing's \"personalization features,\" particularly the Microsoft Rewards points system. Previously, Microsoft consistently promoted the use of MSA, but this change indicates that Microsoft is gradually opening up its ecosystem, allowing Bing to function as an independent product rather than a service restricted solely to Microsoft accounts. Practically, users can now log into Bing using their existing Google or Apple accounts to enjoy features such as AI tools and image generation, without being forced to create an MSA in the background. For users accustomed to the Google or Apple ecosystems, this significantly lowers the barrier to entry and is expected to help Bing expand its user base and increase its visibility as an independent search engine.",
    tags_en: ["Microsoft", "Bing", "Google", "Apple", "MSA", "Search Engine", "User Experience"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/08/microsoft-is-letting-you-sign-into-bing-with-a-google-or-apple-account-no-msa-needed", lang: "EN" }
    ]
  },
  {
    id: "20260707-109",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "歐盟發布行動計畫：整合AI、NIS2與CRA，強化歐洲網路安全與韌性",
    summary: "歐盟委員會發布了行動計畫，旨在應對人工智慧（AI）對網路安全帶來的雙重影響。AI雖能用於偵測漏洞和強化關鍵基礎設施保護，但也可能被惡意行為者用於自動化攻擊。此計畫提出三個核心目標：促進AI的安全與責任使用、強化歐盟的網路安全與韌性，以及擴大歐洲在網路安全AI方面的能力。為此，歐盟將依據《AI法案》強化對AI模型的評估，並與ENISA合作建立安全測試平台，協助能源、交通、醫療等關鍵部門安全部署AI解決方案。此外，行動計畫也強調推動實施現有的《NIS2指令》和《網路韌性法案》（CRA），鼓勵組織利用AI（包括開源模型）來快速偵測和應對漏洞。最終，歐盟將透過「AI網路安全大挑戰」等機制，整合產業、研究機構和開源社群，確保歐洲能利用AI的優勢，同時保持對新興網路威脅的韌性。",
    tags: ["歐盟委員會", "AI法案", "NIS2指令", "網路韌性法案", "ENISA", "網路安全", "行動計畫"],
    title_en: "EU Unveils Action Plan: Integrating AI, NIS2, and CRA to Strengthen European Cybersecurity and Resilience",
    summary_en: "The European Commission has released an action plan designed to address the dual impact of Artificial Intelligence (AI) on cybersecurity. While AI can be used to detect vulnerabilities and enhance critical infrastructure protection, it can also be exploited by malicious actors for automated attacks. This plan proposes three core objectives: promoting the safe and responsible use of AI, strengthening the EU's cybersecurity and resilience, and expanding Europe's capacity in cybersecurity AI. To achieve this, the EU will enhance the evaluation of AI models under the AI Act and collaborate with ENISA to establish a secure testing platform, assisting critical sectors such as energy, transport, and healthcare in the secure deployment of AI solutions. Furthermore, the action plan emphasizes promoting the implementation of the existing NIS2 Directive and the Cyber Resilience Act (CRA), encouraging organizations to utilize AI (including open-source models) for rapid vulnerability detection and response. Ultimately, the EU will integrate industry, research institutions, and the open-source community through mechanisms like the 'AI Cybersecurity Challenge' to ensure that Europe can leverage the advantages of AI while maintaining resilience against emerging cyber threats.",
    tags_en: ["European Commission", "AI Act", "NIS2 Directive", "Cyber Resilience Act", "ENISA", "Cybersecurity", "Action Plan"],
    sources: [
      { name: "EC CRA 實施頁面（Library）", url: "https://digital-strategy.ec.europa.eu/en/library/eu-action-plan-cybersecurity-and-artificial-intelligence", lang: "EN" }
    ]
  },
  {
    id: "20260707-110",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "歐盟發布行動計畫：強化數位環境面對 AI 帶來的網路安全漏洞與威脅",
    summary: "歐盟提出「網路安全與人工智慧行動計畫」，旨在結合歐盟獨特的風險導向 AI 法律框架與全面的網路安全規定。此計畫將匯集成員國、產業和歐盟層級的組織，共同強化數位環境，以應對先進人工智慧（AI）所帶來的網路安全漏洞與威脅。該行動計畫的目標是提升整體數位基礎設施的安全性，特別是針對 AI 應用所可能引入的複雜攻擊面。雖然原文未提供具體受影響產品或 CVE 編號，但其實務影響指向所有使用 AI 技術的數位系統和基礎設施。修補建議著重於跨層級的合作，包括制定更強健的標準、提升產業意識，並在政策層面建立協作機制，以應對 AI 帶來的系統性風險。",
    tags: ["歐盟", "AI", "網路安全", "行動計畫", "數位基礎設施", "風險管理"],
    title_en: "EU Releases Action Plan: Strengthening Digital Environment Against AI-Induced Cybersecurity Vulnerabilities and Threats",
    summary_en: "The EU has proposed a 'Cybersecurity and Artificial Intelligence Action Plan,' aiming to combine the EU's unique risk-based AI legal framework with comprehensive cybersecurity regulations. This plan will integrate member states, industry, and EU-level organizations to collectively strengthen the digital environment in response to cybersecurity vulnerabilities and threats posed by advanced Artificial Intelligence (AI). The goal of this action plan is to enhance the overall security of digital infrastructure, particularly addressing the complex attack surfaces that AI applications may introduce. Although the original text does not provide specific affected products or CVE IDs, its practical impact points to all digital systems and infrastructure utilizing AI technology. Remediation suggestions focus on cross-level cooperation, including establishing more robust standards, raising industry awareness, and building collaborative mechanisms at the policy level to address systemic risks brought about by AI.",
    tags_en: ["EU", "AI", "Cybersecurity", "Action Plan", "Digital Infrastructure", "Risk Management"],
    sources: [
      { name: "EC CRA 實施頁面（Library）", url: "https://digital-strategy.ec.europa.eu/en/library/factsheet-action-plan-cybersecurity-and-artificial-intelligence", lang: "EN" }
    ]
  },
  {
    id: "20260707-111",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "歐盟提出行動計畫：應對先進人工智慧對網路安全帶來的挑戰與漏洞",
    summary: "歐盟委員會發布行動計畫，旨在應對先進人工智慧（AI）對網路安全帶來的重大轉變與威脅。文章指出，AI技術可以被濫用來識別系統漏洞、自動化攻擊，並以前所未有的速度擴大網路事件的規模。為強化數位環境的網路安全，該計畫將匯集成員國、產業和歐盟層級的組織，利用歐盟現有的法律框架和能力。歐盟高層官員強調，必須跟上AI帶來的變化，並利用現有的法律基礎和網路能力來加固數位環境的防護。本計畫的實務影響是要求各方共同努力，將AI的潛力轉化為保護數位空間的工具，以應對新興技術帶來的漏洞。",
    tags: ["歐盟委員會", "AI", "網路安全", "行動計畫", "數位轉型", "漏洞"],
    title_en: "EU Proposes Action Plan: Addressing Challenges and Vulnerabilities Posed by Advanced AI to Cybersecurity",
    summary_en: "The European Commission has released an action plan aimed at addressing the significant changes and threats that advanced Artificial Intelligence (AI) poses to cybersecurity. The article points out that AI technology can be misused to identify system vulnerabilities, automate attacks, and expand the scale of cyber incidents at unprecedented speeds. To strengthen the cybersecurity of the digital environment, the plan will integrate member states, industry, and EU-level organizations, utilizing the EU's existing legal frameworks and capabilities. High-ranking EU officials emphasized that it is crucial to keep pace with AI-driven changes and leverage existing legal foundations and cyber capabilities to fortify the defense of the digital environment. The practical implication of this plan is the requirement for all parties to work together to transform AI's potential into tools for protecting the digital space, thereby addressing vulnerabilities introduced by emerging technologies.",
    tags_en: ["European Commission", "AI", "Cybersecurity", "Action Plan", "Digital Transformation", "Vulnerability"],
    sources: [
      { name: "EC CRA 實施頁面（News）", url: "https://digital-strategy.ec.europa.eu/en/news/commission-presents-eu-action-plan-cybersecurity-and-artificial-intelligence", lang: "EN" }
    ]
  }
];
