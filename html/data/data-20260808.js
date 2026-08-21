// data-20260808.js — 2026-08-08
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-08"] = [
  {
    id: "20260808-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Metabase 爆發 CVSS 10.0 零日漏洞遭大規模利用，Framework 與 n8n 等企業受害",
    summary: "商業智慧軟體 Metabase 警告其產品存在未賦予 CVE 編號的極危險零日漏洞（CVSS 10.0）。未授權的遠端攻擊者可藉此進行 SQL 注入，奪取管理員權限並竊取資料庫憑證或匯出資料。已知版本 x.58 至 x.63 之多個分支受影響，Metabase Cloud 已完成更新，自建版本應立即升級至相應修補版本（如 x.58.24、x.63.5 等），臨時可封鎖 /api/session/reset_password 端點。此漏洞已導致 Framework 顧客個人資料外洩、n8n 部分使用者資料與雜湊密碼遭存取，以及 Kilo Code 的 Slack Token 洩漏。建議管理者修補後撤銷所有會話、重設 API 金鑰與連線憑證。",
    tags: ["Metabase", "零日漏洞", "SQL 注入", "n8n", "Framework", "Kilo Code", "資料外洩"],
    title_en: "Metabase Exposed to CVSS 10.0 Zero-Day Vulnerability, Exploited in Large-Scale Attacks Affecting Framework and n8n",
    summary_en: "The business intelligence software Metabase has warned of a critical, unassigned CVE zero-day vulnerability (CVSS 10.0) in its product. Unauthorized remote attackers can exploit this vulnerability to perform SQL injection, thereby gaining administrator privileges and exfiltrating database credentials or data. Multiple branches, including versions x.58 through x.63, are affected. Metabase Cloud has completed the update, and self-hosted instances should immediately upgrade to the corresponding patched versions (such as x.58.24, x.63.5, etc). As a temporary measure, blocking the /api/session/reset_password endpoint is recommended. This vulnerability has already led to the leakage of customer data from Framework, user data and hashed passwords from n8n, and the leakage of Kilo Code's Slack Token. Administrators are advised to patch the vulnerability, revoke all sessions, and reset API keys and connection credentials.",
    tags_en: ["Metabase", "Zero-Day Vulnerability", "SQL Injection", "n8n", "Framework", "Kilo Code", "Data Leakage"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/metabase-zero-day-exploited-in-wild.html", lang: "EN" }
    ]
  },
  {
    id: "20260808-002",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客利用 TrueConf 伺服器漏洞植入木馬化用戶端安裝程式與後門",
    summary: "黑客行動組織 Head Mare 利用未修補的 TrueConf 視訊會議伺服器漏洞（KLCERT-26-057 與 KLCERT-26-058），未授權連線至預設開啟的 TCP 通訊埠 4307 並逃脫沙盒取得 SYSTEM 權限。攻擊者隨後部署 Web Shell 篡改伺服器上的官方用戶端安裝程式，使使用者更新時下載含 PhantomCore 後門的木馬化版本。此外，攻擊者亦部署以 OneDrive 進行 Command and Control 通訊的 PhantomGraph 後門，進行憑證傾印與建立反向 SSH 隧道。卡巴斯基指出該攻擊波及俄羅斯多個關鍵領域。 TrueConf 已於 2026 年 6 月 18 日發布 5.3.9、5.4.9 及 5.5.5 等修補版本，建議管理員儘速更新至最新版本並檢查用戶端數位簽章。",
    tags: ["Head Mare", "TrueConf", "PhantomCore", "PhantomGraph", "Kaspersky", "CVE-2026-3502", "供應鏈攻擊", "視訊會議漏洞"],
    title_en: "Hackers Exploit TrueConf Server Vulnerability to Implant Malware Client Installer and Backdoor",
    summary_en: "The threat actor group Head Mare exploited unpatched TrueConf video conferencing server vulnerabilities (KLCERT-26-057 and KLCERT-26-058) to establish unauthorized connections to the default open TCP port 4307 and escape the sandbox, achieving SYSTEM privileges. The attacker subsequently deployed a Web Shell to tamper with the official client installer on the server, causing users to download a malware-laden version containing the PhantomCore backdoor during updates. Furthermore, the attacker deployed the PhantomGraph backdoor, which uses OneDrive for Command and Control communication, to perform credential dumping and establish reverse SSH tunnels. Kaspersky noted that this attack affected multiple critical sectors in Russia. TrueConf released patched versions, including 5.3.9, 5.4.9, and 5.5.5, on June 18, 2026, advising administrators to update to the latest version immediately and verify client digital signatures.",
    tags_en: ["Head Mare", "TrueConf", "PhantomCore", "PhantomGraph", "Kaspersky", "CVE-2026-3502", "Supply Chain Attack", "Video Conferencing Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-breach-trueconf-to-trojanize-client-installers-with-backdoors", lang: "EN" }
    ]
  },
  {
    id: "20260808-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心將迎入 Intel 混合式 CPU 叢集負載平衡與排程改進",
    summary: "Intel 工程師 Ricardo Neri 針對具備非對稱核心容量的現代 Intel 混合式處理器（如 Alder Lake、Lunar Lake 與 Panther Lake 等），提出了一系列旨在改善叢集感知排程（cluster-aware scheduling）的修補程式。過去在具有大核心與小核心叢集的拓撲架構上，叢集排程往往無法如預期般均勻分攤任務，導致效能表現未達最佳狀態。這組新修補程式修復了相關問題，確保未適配任務能在小核心叢集間正確進行負載平衡，並已排入候選合併分支中，預計將於 Linux 7.3 開發視窗期間正式合併。受影響產品為 Intel 混合式架構處理器，詳細的攻擊向量、CVSS 分數與具體效能數據均未公開，建議開發人員與系統管理者關注後續核心版本更新以評估效能影響。",
    tags: ["Linux 7.3", "Intel", "Core Ultra", "排程器", "負載平衡", "Ricardo Neri"],
    title_en: "Linux 7.3 Kernel to Incorporate Intel Hybrid CPU Cluster Load Balancing and Scheduling Improvements",
    summary_en: "Intel engineer Ricardo Neri has proposed a series of patches aimed at improving cluster-aware scheduling for modern Intel hybrid processors with asymmetric core capacities (such as Alder Lake, Lunar Lake, and Panther Lake). Previously, on topological architectures featuring clusters of large and small cores, cluster scheduling often failed to distribute tasks as evenly as expected, leading to suboptimal performance. This set of new patches resolves these issues, ensuring that unsuited tasks are correctly load-balanced across small core clusters. They have been merged into the candidate merge branch and are expected to be officially merged during the Linux 7.3 development window. Affected products are Intel hybrid architecture processors. As detailed attack vectors, CVSS scores, and specific performance data have not been disclosed, developers and system administrators are advised to monitor subsequent kernel version updates to assess potential performance impacts.",
    tags_en: ["Linux 7.3", "Intel", "Core Ultra", "Scheduler", "Load Balancing", "Ricardo Neri"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Better-Intel-Hybrid", lang: "EN" }
    ]
  },
  {
    id: "20260808-004",
    trackers: ["os"],
    category: "Linux",
    title: "Polychromatic 0.9.8 發布，支援 Razer Blade 16 2023 型號，優化 Linux RGB 燈光管理",
    summary: "Polychromatic 0.9.8 版本已發布，這是一個用於 Linux 環境的 UI 前端，旨在透過 OpenRazer 核心驅動程式，為使用者提供非官方但實用的 Razer 設備配置體驗。本次更新的主要亮點是新增了針對 Razer Blade 16 2023 型號的設備地圖（device map），使用戶能更輕鬆地配置鍵盤 LED 燈光等功能。此外，0.9.8 版本也包含了更新的翻譯支援，以及對 AppStream 元資訊翻譯的支援。其他優化包括修復了亮度滑桿的延遲問題、優化了應用程式圖示查找，並修復了從控制台應用程式啟動托盤應用程式時的殭屍程序（zombie process）問題。文章提及，Razer 正在與 Canonical 合作，將 Razer Blade 18 2026 型號認證為首款適用於 Ubuntu Linux 的筆記型電腦。",
    tags: ["Polychromatic", "Razer", "Linux", "OpenRazer", "Ubuntu", "RGB 燈光"],
    title_en: "Polychromatic 0.9.8 Released, Supporting Razer Blade 16 2023 Model and Optimizing Linux RGB Lighting Management",
    summary_en: "Polychromatic version 0.9.8 has been released. This is a UI frontend designed for Linux environments, aiming to provide users with an unofficial yet practical Razer device configuration experience via the OpenRazer core driver. The main highlight of this update is the addition of a device map for the Razer Blade 16 2023 model, allowing users to more easily configure features such as keyboard LED lighting. Furthermore, version 0.9.8 includes updated translation support and support for AppStream metadata translation. Other optimizations include fixing a delay issue with the brightness slider, optimizing application icon search, and resolving a zombie process issue when launching the tray application from the command line. The article also mentions that Razer is collaborating with Canonical to certify the Razer Blade 18 2026 model as the first laptop compatible with Ubuntu Linux.",
    tags_en: ["Polychromatic", "Razer", "Linux", "OpenRazer", "Ubuntu", "RGB Lighting"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Polychromatic-0.9.8-Released", lang: "EN" }
    ]
  },
  {
    id: "20260808-005",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 獲得 Sovereign Tech Agency 資助，設計團隊將專注於設計與社群發展",
    summary: "GNOME 宣布與 Sovereign Tech Agency 合作，為期兩年的設計學員計畫將為其帶來額外的設計支援。GNOME 設計團隊成員 Philipp Sauberzweig 成為該機構的學員，未來兩年將專責提供設計回饋、審查、製作模型，並協助開發者標準化設計模式。Sauberzweig 表示，他將透過擴大設計社群和提升設計工具鏈來進行長期改善。此外，GNOME 的其他開發進展包括 Nautilus 的 Sushi 文件預覽器持續優化、Papers 51 Beta 版本新增 PDF 可視簽名功能，以及新的 GNOME Boxes 應用程式已進入 Beta 階段。此項資助預計將使 GNOME 設計工作能投入更多時間，加速產品的設計成熟度與使用者體驗的提升。",
    tags: ["GNOME", "Sovereign Tech Agency", "Linux", "設計", "開發"],
    title_en: "GNOME Receives Funding from Sovereign Tech Agency to Focus on Design and Community Development",
    summary_en: "GNOME announced a collaboration with the Sovereign Tech Agency. A two-year design fellowship program will provide additional design support. GNOME design team member Philipp Sauberzweig has become a fellow at the agency. Over the next two years, he will be responsible for providing design feedback, reviewing, creating models, and assisting developers in standardizing design patterns. Sauberzweig stated that he plans to achieve long-term improvements by expanding the design community and enhancing the design toolchain. Furthermore, other GNOME development progress includes continuous optimization of the Nautilus Sushi file previewer, the addition of PDF visual signing functionality in Papers 51 Beta, and the new GNOME Boxes application entering the Beta phase. This funding is expected to allow the GNOME design team to dedicate more time to design work, accelerating product design maturity and improving user experience.",
    tags_en: ["GNOME", "Sovereign Tech Agency", "Linux", "Design", "Development"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Design-Fellowship", lang: "EN" }
    ]
  },
  {
    id: "20260808-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux HWMON 子系統修復多項高風險錯誤，應對 AI 輔助工具發現的漏洞",
    summary: "本次修補集中於 Linux 核心的 HWMON（硬體監控）子系統，旨在修復多個被報告為關鍵或高嚴重性（critical or high severity）的錯誤。這些修補主要源於 AI 輔助工具 Sashiko 的發現，涵蓋了競態條件（race conditions）、計算錯誤、可能的越界存取（out-of-bounds accesses）和可能的溢位（overflows）等問題。HWMON 維護者 Guenter Roeck 表示，這些修補已合併至 Linux 7.2-rc7 版本，並在穩定版發布前持續進行修補活動。這反映了在 AI/LLM 輔助下，開源程式碼庫持續發現並修復缺陷的「新常態」。建議使用者關注 Linux 7.2 的穩定版發布，並留意相關核心元件的更新。",
    tags: ["Linux 核心", "HWMON", "Linux 7.2", "Sashiko", "競態條件", "開源程式碼"],
    title_en: "Linux HWMON Subsystem Patches Multiple High-Risk Bugs, Addressing Vulnerabilities Found by AI Assistance Tools",
    summary_en: "This patch focuses on the HWMON (Hardware Monitoring) subsystem within the Linux kernel, aiming to fix multiple bugs reported as critical or high severity. These fixes primarily originated from the AI assistance tool Sashiko, covering issues such as race conditions, arithmetic errors, potential out-of-bounds accesses, and possible overflows. HWMON maintainer Guenter Roeck stated that these patches have been merged into the Linux 7.2-rc7 version and that patching efforts will continue before the stable release. This reflects a 'new normal' of continuous defect discovery and remediation in open-source codebases with the aid of AI/LLMs. Users are advised to monitor the stable release of Linux 7.2 and pay attention to updates for related kernel components.",
    tags_en: ["Linux Kernel", "HWMON", "Linux 7.2", "Sashiko", "Race Conditions", "Open Source Code"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc7-HWMON", lang: "EN" }
    ]
  },
  {
    id: "20260808-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 7.2-rc7 更新：擴充 XPad 驅動支援 Zenaim Leverless 遊戲控制器，並修復多個輸入子系統漏洞",
    summary: "本次 Linux 7.2-rc7 的輸入子系統更新，主要為修補多個資訊洩漏、越界存取、驗證錯誤以及使用後釋放（use-after-free）等編碼問題。在功能擴充方面，本次更新為 XPad Linux 驅動加入了對 Zenaim Leverless 遊戲控制器的支援。Zenaim Leverless 是一款專為格鬥遊戲設計的 15 鍵控制器，此前已支援 Windows，現在可在 Linux 環境下透過 XPad 驅動使用。此外，本次輸入子系統的 Pull Request 也為 ATKBD 驅動增加了額外的「怪癖」（quirks）修復，以確保 HONOR ZQC-P 和 Xiaomi Book Pro 14 等筆電鍵盤在 Linux 上能正常運作。這些修補旨在提升多種輸入驅動的穩定性和兼容性，確保硬體設備在不同作業系統上的支援。",
    tags: ["Linux", "Linux 7.2-rc7", "輸入子系統", "XPad 驅動", "Zenaim Leverless", "ATKBD"],
    title_en: "Linux 7.2-rc7 Update: Expands XPad Driver Support for Zenaim Leverless Game Controller and Fixes Multiple Input Subsystem Vulnerabilities",
    summary_en: "This Linux 7.2-rc7 input subsystem update primarily addresses multiple coding issues, including information leaks, out-of-bounds accesses, validation errors, and use-after-free vulnerabilities. In terms of feature expansion, this update adds support for the Zenaim Leverless game controller to the XPad Linux driver. The Zenaim Leverless is a 15-key controller designed for fighting games, which previously supported Windows and can now be used on Linux via the XPad driver. Furthermore, the input subsystem's Pull Request includes additional 'quirks' fixes for the ATKBD driver, ensuring proper operation of laptop keyboards such as the HONOR ZQC-P and Xiaomi Book Pro 14 on Linux. These patches aim to enhance the stability and compatibility of various input drivers, ensuring hardware device support across different operating systems.",
    tags_en: ["Linux", "Linux 7.2-rc7", "Input Subsystem", "XPad Driver", "Zenaim Leverless", "ATKBD"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc7-Input-Changes", lang: "EN" }
    ]
  },
  {
    id: "20260808-008",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 更新：提升使用者介面體驗與修復內建遠端桌面伺服器問題",
    summary: "KDE 開發團隊發布了 Plasma 6.8 版本，旨在提升桌面環境的整體使用者體驗與穩定性。本次更新包含多項介面優化，例如當嘗試列印到無法使用的印表機時，系統將會發出通知而非靜默失敗。此外，任務管理員的縮圖（Task Manager thumbnails）周圍的標籤間距已優化，並改善了新使用者帳號建立時關於使用者名稱和密碼限制的介面報告清晰度。在系統功能層面，Plasma 6.8 針對內建的遠端桌面伺服器（built-in remote desktop server）修復了可能導致部分客戶端出現黑畫面（black screen）的問題。同時，該伺服器也進行了調整，以在網路連線條件不理想時，展現出更低的延遲（latency）和更佳的效能。另一個優化是，剪貼簿彈出視窗（clipboard pop-up）現在會根據需求（on demand）載入，而非在啟動時即載入，從而降低了系統的記憶體使用量。這些更新主要著重於使用者體驗的提升與核心元件的穩定性修復，建議使用者關注 KDE Plasma 的最新版本更新。",
    tags: ["KDE Plasma", "Plasma 6.8", "Linux", "遠端桌面", "UI 優化", "系統更新"],
    title_en: "KDE Plasma 6.8 Update: Enhancing User Interface Experience and Fixing Built-in Remote Desktop Server Issues",
    summary_en: "The KDE development team has released the Plasma 6.8 version, aiming to enhance the overall user experience and stability of the desktop environment. This update includes multiple interface optimizations, such as issuing a notification when attempting to print to an unusable printer, rather than failing silently. Additionally, the spacing around Task Manager thumbnails has been optimized, and the clarity of interface reports regarding username and password restrictions during new user account creation has been improved. On the system functionality level, Plasma 6.8 addresses an issue with the built-in remote desktop server that could cause some clients to display a black screen. Furthermore, the server has been adjusted to exhibit lower latency and better performance under suboptimal network connection conditions. Another optimization is that the clipboard pop-up window now loads on demand, rather than loading at startup, thereby reducing system memory usage. These updates primarily focus on improving user experience and fixing core component stability, and users are advised to pay attention to the latest KDE Plasma version updates.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "Linux", "Remote Desktop", "UI Optimization", "System Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-Remote-Desktop", lang: "EN" }
    ]
  },
  {
    id: "20260808-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 KVM/nVMX 漏洞：嵌套虛擬化環境下 VMCS12 頁面洩漏風險",
    summary: "本漏洞影響 Linux 核心的 KVM (Kernel-based Virtual Machine) 虛擬化元件，特別是在處理嵌套虛擬化 (nested VM) 退出 (VM-Exit) 流程時。問題出在 KVM 模擬 VMLAUNCH 或 VMRESUME 過程中，當由於無效的 Guest 狀態導致嵌套 VM-Exit 時，如果 L2 (第二層虛擬化) 處於活動狀態，原始程式碼未能正確地儲存 (put) vmcs12 頁面。這導致在 L1 (第一層虛擬化) 嘗試重試 VMLAUNCH/VMRESUME 時，任何被固定 (pinned) 的頁面或映射資訊可能會洩漏給攻擊者。此漏洞的修復已包含在 Linux 核心的特定提交版本中。建議使用更新的 Linux 核心版本，以修補此頁面洩漏的風險，確保虛擬化環境的機密性。",
    tags: ["Linux 核心", "KVM", "nVMX", "嵌套虛擬化", "VMCS12", "CVE"],
    title_en: "Linux Kernel KVM/nVMX Vulnerability: VMCS12 Page Leakage Risk in Nested Virtualization Environments",
    summary_en: "This vulnerability affects the KVM (Kernel-based Virtual Machine) virtualization component in the Linux kernel, particularly during the handling of nested virtualization (nested VM) VM-Exit processes. The issue arises in KVM's simulation of VMLAUNCH or VMRESUME. When a nested VM-Exit occurs due to an invalid Guest state, and L2 (second-layer virtualization) is active, the original code fails to correctly save (put) the vmcs12 page. This can lead to the leakage of any pinned pages or mapping information to an attacker when L1 (first-layer virtualization) attempts to retry VMLAUNCH/VMRESUME. A fix for this vulnerability has been included in specific commit versions of the Linux kernel. Users are advised to use an updated Linux kernel version to patch this page leakage risk and ensure the confidentiality of the virtualization environment.",
    tags_en: ["Linux Kernel", "KVM", "nVMX", "Nested Virtualization", "VMCS12", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68081", lang: "EN" }
    ]
  },
  {
    id: "20260808-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全修補：Ceph 協議中的兩個不安全解碼操作導致 OOB 讀取漏洞",
    summary: "本修補針對 Linux 核心中 Ceph 相關元件的 `decode_lockers()` 函數，修復了兩個不安全的裸解碼（bare decode）操作，防止惡意或受損的 OSD 觸發緩存區塊越界讀取（slab-out-of-bounds reads）。第一個漏洞發生在 `num_lockers` 欄位解碼時，由於缺乏邊界檢查，允許 OSD 傳送 `struct_len=0`，導致後續的 `ceph_decode_32(p)` 讀取了超出有效緩衝區邊界 4 位元組的垃圾值，並將其作為鎖定器計數傳遞給 `kzalloc_objs()`。第二個漏洞發生在 `decode_locker()` 迴圈之後，`ceph_decode_8(p)` 缺乏邊界檢查，如果 OSD 精確控制 `num_lockers` 使迴圈指標 `p` 達到緩衝區末尾，後續的解碼將讀取超出邊界 1 位元組的資料，並直接影響到鎖定類型判別器（lock type discriminator）。修補建議是將所有裸解碼操作替換為其安全的變體（如 `ceph_decode_32_safe()` 和 `ceph_decode_8_safe()`），確保在解碼過程中執行嚴格的邊界檢查，從而防止 OSD 惡意輸入導致的資訊洩漏。攻擊模型為在多租戶 Ceph 部署中，惡意 OSD 針對執行 `lock.get_info` 類方法（例如執行 RBD 獨佔鎖定）的任何核心客戶端。",
    tags: ["Linux 核心", "Ceph", "CVE-2026-68082", "OOB 讀取", "slab-out-of-bounds", "kernel"],
    title_en: "Linux Kernel Security Patch: Two Insecure Decoding Operations in Ceph Protocol Lead to OOB Read Vulnerability",
    summary_en: "This patch addresses the `decode_lockers()` function within the Linux kernel's Ceph components, fixing two insecure bare decode operations. These vulnerabilities prevent malicious or corrupted OSDs from triggering slab out-of-bounds reads. The first vulnerability occurs during the decoding of the `num_lockers` field. Due to a lack of boundary checking, an OSD could send `struct_len=0`, causing the subsequent `ceph_decode_32(p)` to read 4 bytes of garbage data beyond the effective buffer boundary, and pass this value as the locker count to `kzalloc_objs()`. The second vulnerability occurs after the `decode_locker()` loop. The `ceph_decode_8(p)` lacks boundary checks. If an OSD precisely controls `num_lockers` such that the loop index `p` reaches the end of the buffer, subsequent decoding will read 1 byte of data beyond the boundary, directly affecting the lock type discriminator. The recommended fix is to replace all bare decode operations with their safe variants (such as `ceph_decode_32_safe()` and `ceph_decode_8_safe()`), ensuring strict boundary checks are performed during decoding, thereby preventing information leakage caused by malicious OSD input. The attack model involves a malicious OSD targeting any core client executing methods like `lock.get_info` (for example, executing an RBD exclusive lock) in a multi-tenant Ceph deployment.",
    tags_en: ["Linux Kernel", "Ceph", "CVE-2026-68082", "OOB Read", "slab-out-of-bounds", "kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68082", lang: "EN" }
    ]
  },
  {
    id: "20260808-011",
    trackers: ["os"],
    category: "Windows",
    title: "微軟確認 Windows 11 性能優化：提升速度、減少記憶體佔用並移除廣告內容",
    summary: "微軟資深工程師公開證實 Windows 11 系統正在進行全面性的性能優化，以改善用戶長期抱怨的卡頓問題。此次優化重點包括提升系統整體速度、降低記憶體佔用，並逐步移除系統內部的廣告內容。微軟已承諾在 2026 年底前，為 8GB RAM 及以上配置的 PC 進行優化。性能提升的技術細節包括導入「低延遲配置」（Low Latency Profile），這是一種在用戶與核心 Shell 元素互動時，能將 CPU 瞬間提升至最高頻率的排程級增強。此外，系統正在透過 WinUI 3 框架取代舊有的 Win32 和 WebView2 程式碼，大幅減少記憶體佔用。具體優化範圍涵蓋了檔案總管（File Explorer）的碎片化檔案刪除速度、本機搜尋功能、右鍵選單，以及應用程式介面（如 Print Management 和 Widgets）的重構。這些修補旨在讓用戶體驗更流暢，並讓系統更接近原生操作系統的效能。",
    tags: ["Windows 11", "WinUI 3", "性能優化", "Low Latency Profile", "Microsoft", "WebView2"],
    title_en: "Microsoft Confirms Windows 11 Performance Optimization: Boosting Speed, Reducing Memory Usage, and Removing Ads",
    summary_en: "Senior Microsoft engineers have publicly confirmed that Windows 11 is undergoing comprehensive performance optimizations to address long-standing user complaints about sluggishness. Key focus areas for this optimization include boosting overall system speed, reducing memory consumption, and gradually removing internal system advertisements. Microsoft has committed to optimizing PCs with 8GB of RAM or more by the end of 2026. Technical details of the performance boost include the introduction of a \"Low Latency Profile,\" a scheduling-level enhancement that can instantly boost the CPU to its maximum frequency when the user interacts with core Shell elements. Furthermore, the system is replacing older Win32 and WebView2 code with the WinUI 3 framework, significantly reducing memory usage. Specific optimization areas include the speed of fragmented file deletion in File Explorer, the local search function, the right-click context menu, and the refactoring of application interfaces (such as Print Management and Widgets). These fixes aim to provide users with a smoother experience and bring the system closer to the performance of a native operating system.",
    tags_en: ["Windows 11", "WinUI 3", "Performance Optimization", "Low Latency Profile", "Microsoft", "WebView2"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/08/microsoft-admits-windows-11-needs-to-be-faster-and-drop-ads-and-some-fixes-are-already-shipping", lang: "EN" }
    ]
  },
  {
    id: "20260808-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PortSwigger 揭露新 CSS 跨域攻擊技術：可威脅 Gmail 與 Outlook 等 Webmail 並外洩 Token 及密碼",
    summary: "PortSwigger 研究員 Gareth Heyes 於 Black Hat USA 2026 展示多種 CSS 隔離突破與變異漏洞攻擊鏈，影響 Outlook、Gmail、Fastmail、Proton Mail 及 Yahoo Mail 等 Webmail 服務。攻擊者可利用特製 HTML/CSS 逃逸郵件邊界並控制外部 UI，進而偽造微軟登入頁面竊取密碼、透過貼上競態條件擷取 Medium 登入 Token、利用間接提示詞注入（Indirect Prompt Injection）外洩 Slack Token，甚至結合 AI 助理（如 Anthropic Claude Cowork 及 OpenAI Atlas）進行資料竊取。研究建議 Webmail 業者應將 HTML 郵件隔離於沙盒化 iframe 中，並嚴格限制 CSS、自訂屬性與外連圖片請求。",
    tags: ["PortSwigger", "Gareth Heyes", "Webmail", "CSS 攻擊", "Outlook", "Gmail", "提示詞注入", "Black Hat USA 2026"],
    title_en: "PortSwigger Unveils New CSS Cross-Site Attack Techniques: Threatening Webmail Services like Gmail and Outlook for Token and Password Exfiltration",
    summary_en: "PortSwigger researcher Gareth Heyes presented multiple CSS isolation bypass and mutation vulnerability attack chains at Black Hat USA 2026, affecting webmail services including Outlook, Gmail, Fastmail, Proton Mail, and Yahoo Mail. Attackers can utilize custom HTML/CSS to escape email boundaries and control external UIs, subsequently forging Microsoft login pages to steal passwords, capturing Medium login tokens via paste race conditions, exfiltrating Slack tokens using Indirect Prompt Injection, and even combining these techniques with AI assistants (such as Anthropic Claude Cowork and OpenAI Atlas) for data theft. The research recommends that webmail providers sandbox HTML emails within iframes and strictly limit CSS, custom attributes, and external image requests.",
    tags_en: ["PortSwigger", "Gareth Heyes", "Webmail", "CSS Attack", "Outlook", "Gmail", "Prompt Injection", "Black Hat USA 2026"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/new-css-attacks-can-break-webmail.html", lang: "EN" }
    ]
  },
  {
    id: "20260808-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "N-able N-central 遭零日漏洞漏洞鏈攻擊，官方釋出 Hotfix 2 修補身份驗證繞過缺陷",
    summary: "N-able 發布 N-central 最新 Hotfix 2，以因應駭客持續利用近期披露的遠端監控與管理（RMM）漏洞。事件源於 2026 年 7 月 31 日發現駭客利用當時為零日漏洞的 CVE-2026-18577（CVSS 8.2，影響 2026.3.1.7 之前的版本），該漏洞係對先前 CVE-2026-18556（CVSS 8.2）修補不完全所致，兩者皆允許遠端繞過身份驗證並奪取帳號權限，且已遭 CISA 警示被積極利用。攻擊者取得管理權限後，利用 Take Control 功能連線至受管系統，並註冊 Cloudflare Tunnel 服務以維持長期控制。N-able 確認有少數客戶受害，強烈建議地端用戶立即升級至 2026.3.1.10 版本並套用 Hotfix 2，同時提供自動化服務範本供檢測已知 IoCs。",
    tags: ["N-able", "N-central", "CVE-2026-18577", "CVE-2026-18556", "RMM", "身份驗證繞過", "CISA KEV", "Cloudflare Tunnel"],
    title_en: "N-able N-central Targeted by Zero-Day Vulnerability Chain Attack; Official Releases Hotfix 2 to Patch Authentication Bypass Flaw",
    summary_en: "N-able has released N-central Hotfix 2 to address ongoing exploitation of recently disclosed Remote Monitoring and Management (RMM) vulnerabilities. The incident stems from a zero-day vulnerability, CVE-2026-18577 (CVSS 8.2, affecting versions prior to 2026.3.1.7), which was exploited by attackers. This vulnerability is due to incomplete patching of a previous flaw, CVE-2026-18556 (CVSS 8.2). Both vulnerabilities allow for remote authentication bypass and account takeover, and have been flagged by CISA as being actively exploited. After gaining administrative privileges, attackers utilize the Take Control function to connect to managed systems and register Cloudflare Tunnel services to maintain persistent control. N-able confirmed that a small number of customers were affected and strongly recommends that end-users immediately upgrade to version 2026.3.1.10 and apply Hotfix 2. N-able also provides automated service templates for detecting known IoCs.",
    tags_en: ["N-able", "N-central", "CVE-2026-18577", "CVE-2026-18556", "RMM", "Authentication Bypass", "CISA KEV", "Cloudflare Tunnel"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/n-central-attackers-reach-managed.html", lang: "EN" }
    ]
  },
  {
    id: "20260808-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將Progress Kemp LoadMaster高危指令注入漏洞CVE-2026-8037列入已遭利用漏洞目錄",
    summary: "美國網路安全暨基礎設施安全局（CISA）將 Progress Kemp LoadMaster 負載均衡器的嚴重漏洞 CVE-2026-8037 列入已知遭利用漏洞（KEV）目錄。該漏洞 CVSS 評分為 9.6，屬於命令注入漏洞。未經身份驗證的遠端攻擊者可透過未經適當過濾的輸入端點，在受影響設備上執行任意命令。技術分析指出問題出在 escape_quotes() 函數對使用者輸入處理不當。已有來自 18 個國家的多個 IP 發起數百次攻擊嘗試。CISA 要求聯邦機構依 BOD 26-04 指令於 2026 年 8 月 10 日前完成修補。",
    tags: ["CISA", "KEV", "Progress Kemp LoadMaster", "CVE-2026-8037", "命令注入", "watchTowr Labs"],
    title_en: "CISA Lists Progress Kemp LoadMaster High-Severity Command Injection Vulnerability CVE-2026-8037 in Known Exploited Vulnerabilities Catalog",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added a critical vulnerability, CVE-2026-8037, in the Progress Kemp LoadMaster load balancer to its Known Exploited Vulnerabilities (KEV) catalog. This vulnerability, which has a CVSS score of 9.6, is a command injection flaw. An unauthenticated remote attacker can execute arbitrary commands on an affected device by exploiting an input endpoint that does not properly filter user input. Technical analysis indicates the issue lies in the improper handling of user input by the escape_quotes() function. Multiple attack attempts have been observed from numerous IPs originating in 18 countries. CISA mandates that federal agencies complete remediation by August 10, 2026, following directive BOD 26-04.",
    tags_en: ["CISA", "KEV", "Progress Kemp LoadMaster", "CVE-2026-8037", "Command Injection", "watchTowr Labs"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/progress-kemp-loadmaster-flaw-hits-cisa.html", lang: "EN" }
    ]
  },
  {
    id: "20260808-015",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 釋出 iOS 27 開發者測試版，帶來高穩定性與 Siri AI 等新功能",
    summary: "文章報導了 Apple 旗下 iOS 27 作業系統測試版的最新動態與使用體驗。該版本在經過約兩個月的測試後展現出極高的穩定性，未出現顯著的電池耗盡、發熱或隨機當機等傳統測試版常見問題，並帶來速度提升、錯誤修正以及 Siri AI、AirPods EQ、Safari 錢包票券等新功能。相較於前一代 iOS 26 早期版本可能較不穩定，iOS 27 在效能與日常體驗上獲得改善，預計將支援與前一代相同的 iPhone 機型。文章未提及具體的安全漏洞、CVE 編號或修補建議，建議開發者與使用者持續關注官方後續釋出的更新與安全性公告。",
    tags: ["Apple", "iOS 27", "Siri AI", "iPhone", "測試版"],
    title_en: "Apple Releases iOS 27 Developer Beta, Featuring High Stability and New Features like Siri AI",
    summary_en: "This article reports on the latest developments and user experience of the Apple iOS 27 operating system beta. After approximately two months of testing, this version has demonstrated extremely high stability, without the common issues found in early betas such as significant battery drain, overheating, or random crashes. It also introduces new features, including speed improvements, bug fixes, Siri AI, AirPods EQ, and Safari Wallet tickets. Compared to the potentially less stable early versions of iOS 26, iOS 27 offers improvements in performance and daily user experience, and is expected to support the same iPhone models as the previous generation. The article does not mention specific security vulnerabilities, CVE IDs, or patch recommendations, advising developers and users to continue monitoring official subsequent updates and security announcements.",
    tags_en: ["Apple", "iOS 27", "Siri AI", "iPhone", "Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/08/ios-27-the-easiest-beta-to-forget-about", lang: "EN" }
    ]
  },
  {
    id: "20260808-016",
    trackers: ["os"],
    category: "Apple",
    title: "傳聞 iPhone 18 Pro 售價將調漲，分析師建議現階段可考慮購買 iPhone 17 Pro",
    summary: "根據最新傳聞指出，即將發布的 iPhone 18 Pro 與 iPhone 18 Pro Max 可能面臨價格調漲。由於預期新機型在硬體與功能上的重大變革有限，且記憶體配置與現行版本相同，專家建議消費者若有換機需求，可趁目前購買 iPhone 17 Pro 以節省開支。受影響產品包含 Apple 的 iPhone 17 Pro 與 iPhone 18 Pro 系列，具體價格漲幅與技術細節尚未完全公開。修補建議為依據自身實際需求評估換機時機，不需盲目等待尚未確定的新機上市。",
    tags: ["Apple", "iPhone 17 Pro", "iPhone 18 Pro", "iOS", "A20 Pro", "智慧型手機"],
    title_en: "Rumors Suggest iPhone 18 Pro Price Hike; Analysts Advise Considering iPhone 17 Pro Now",
    summary_en: "According to the latest rumors, the upcoming iPhone 18 Pro and iPhone 18 Pro Max may face price increases. Since the expected new models are anticipated to have limited major changes in hardware and functionality, and the memory configuration remains the same as the current versions, experts advise consumers with upgrade needs to consider purchasing the iPhone 17 Pro now to save costs. Affected products include Apple's iPhone 17 Pro and iPhone 18 Pro series. The specific price increase and technical details have not been fully disclosed. The recommendation is to assess the timing of an upgrade based on personal needs, rather than blindly waiting for unconfirmed new models to launch.",
    tags_en: ["Apple", "iPhone 17 Pro", "iPhone 18 Pro", "iOS", "A20 Pro", "Smartphone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/08/buy-iphone-17-pro-vs-iphone-18-pro", lang: "EN" }
    ]
  },
  {
    id: "20260808-017",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV 推出泰德拉索第四季宣傳廣告，結合多部平台熱門影集",
    summary: "Apple TV 於本週配合《泰德拉索》第四季首播，推出名為「歡迎回歸」的全新宣傳廣告。這支廣告巧妙地將主角教練拉索融入其他多部 Apple TV 熱門原創節目中，包含《人生切割術》、《末日地堡》與《晨間直播秀》等作品。隨著第四季採每週三更新並將持續播映至十月初，該劇目前已迅速登上全球電視 App 排行榜首位。Apple 希望藉此吸引觀眾重回平台，同時帶動其他原創影集的關注度，後續收視表現仍有待 Nielsen 等分析機構進一步評估。",
    tags: ["Apple", "Apple TV", "Ted Lasso", "Severance", "Silo", "The Morning Show"],
    title_en: "Apple TV launches Ted Lasso Season 4 promotional ad, featuring multiple popular streaming series",
    summary_en: "This week, Apple TV released a new promotional advertisement titled \"Welcome Back\" to coincide with the premiere of Ted Lasso Season 4. The ad cleverly integrates the main character, Coach Lasso, into several other popular Apple TV original series, including titles such as *Severance*, *Silo*, and *The Morning Show*. With the fourth season airing weekly on Wednesdays and scheduled to run until early October, the show has quickly reached the top of global TV app charts. Apple aims to draw viewers back to the platform while simultaneously boosting interest in other original series. Future viewership performance remains subject to further evaluation by analysis firms like Nielsen.",
    tags_en: ["Apple", "Apple TV", "Ted Lasso", "Severance", "Silo", "The Morning Show"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/08/apple-tv-welcomes-back-ted-lasso-with-a-clever-new-commercial", lang: "EN" }
    ]
  },
  {
    id: "20260808-018",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳為加速 AI 發展將跳過 M6 高階晶片，轉而專注開發 M7 晶片",
    summary: "根據外媒報導，Apple 為了全力加速終端人工智慧（AI）任務的發展，計劃跳過 M6 Pro、M6 Max 與 M6 Ultra 晶片系列，僅保留基本款 M6，並將下一代 M7 晶片的推出時程提前。此舉旨在大幅升級神經處理單元（Neural Engine）效能，使其效能表現拉近至如 Nvidia Blackwell 等專用 AI 加速器的水準。預計首款搭載 M7 晶片的 Mac 產品將於春季亮相，高階與 Ultra 型號則會陸續推出，並傳出 M7 Ultra 最高可支援大容量記憶體。",
    tags: ["Apple", "M6", "M7", "MacBook Pro", "人工智慧", "神經處理單元"],
    title_en: "Apple reportedly skipping M6 high-end chips to accelerate AI development, focusing instead on M7 chips",
    summary_en: "According to foreign media reports, Apple plans to skip the M6 Pro, M6 Max, and M6 Ultra chip series to fully accelerate the development of on-device artificial intelligence (AI) tasks. It will retain only the basic M6 model and advance the release timeline for the next-generation M7 chip. This move aims to significantly upgrade the Neural Engine performance, bringing its capabilities closer to dedicated AI accelerators like Nvidia Blackwell. The first Mac product featuring the M7 chip is expected to debut in the spring, with high-end and Ultra models following sequentially. Furthermore, reports suggest that the M7 Ultra may support large memory capacities.",
    tags_en: ["Apple", "M6", "M7", "MacBook Pro", "Artificial Intelligence", "Neural Engine"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/08/apple-m7-chip-heres-why-it-matters-ai", lang: "EN" }
    ]
  },
  {
    id: "20260808-019",
    trackers: ["os"],
    category: "Apple",
    title: "WhatsApp 於 iPhone 推出專屬家長監護設定，簡化管理帳號流程",
    summary: "通訊軟體 WhatsApp 正在 iPhone 上推出專屬的「家長監護」設定專區，旨在讓家長更容易尋找並設定家長監護功能。該功能允許特定地區的家長或監護人決定誰能聯繫受管理的帳號，以及該帳號可加入的群組。此功能會限制頻道和動態等功能的存取，並讓家長能掌握帳號活動與變更，例如新聯絡人、封鎖用戶及個人檔案更新。設定過程採用家長 PIN 碼保護，且介面設計簡單，家長僅需使用小孩的手機並透過掃描 QR 碼或接受邀請即可完成設定。此外，針對未達法定使用年齡的用戶，Meta 表示 Apple 可能會直接提供小孩的年齡範圍，無須由家長在設定時手動提供。建議家長透過最新版本的 WhatsApp 應用程式來尋找並設定相關監護選項。",
    tags: ["WhatsApp", "iPhone", "Meta", "家長監護", "iOS", "隱私設定"],
    title_en: "WhatsApp introduces dedicated parental supervision settings on iPhone, simplifying account management",
    summary_en: "The messaging application WhatsApp is rolling out a dedicated \"Parental Supervision\" setting area on iPhone, designed to make it easier for parents to find and configure parental controls. This feature allows parents or guardians in specific regions to determine who can contact the supervised account and which groups the account can join. It restricts access to features like Channels and Status, and allows parents to monitor account activity and changes, such as new contacts, blocked users, and profile updates. The setup process is protected by a parental PIN, and the interface is designed to be simple, requiring parents only to use the child's phone and complete the setup by scanning a QR code or accepting an invitation. Furthermore, Meta stated that for users who have not reached the legal age of use, Apple may directly provide the child's age range, eliminating the need for parents to manually input it during setup. Parents are advised to use the latest version of the WhatsApp application to find and configure these supervision options.",
    tags_en: ["WhatsApp", "iPhone", "Meta", "Parental Supervision", "iOS", "Privacy Settings"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/whatsapp-makes-parent-managed-accounts-easier-to-set-up-on-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260808-020",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 更新 Made for iPhone (MFi) 聽力輔助設備清單，支援超過 600 款設備",
    summary: "Apple 近日更新了其 Made for iPhone (MFi) 聽力輔助設備的官方支援清單，將支援的設備總數擴增至 623 款，涵蓋 104 個品牌。此更新擴展了 Apple 生態系統的音訊支援範圍，除了智慧家庭產品、耳機和遊戲控制器外，聽力輔助設備也納入支援名單。\n透過 MFi 支援，用戶可將相容的聽力設備與 iPhone、iPad、Mac 或 Apple Vision Pro 配對，實現音訊串流。Apple 解釋，雙向串流（bidirectional streaming）功能允許用戶進行免提通話，這對於聽力輔助設備的使用者極具實用性。\n本次更新新增了多個品牌和型號，例如 Afflelou、Audibel、Starkey 等，並更新了部分現有產品的支援狀態，使其支援雙向串流。此外，Apple 還宣布 MacBook Neo 將被納入系統要求，支援 macOS Tahoe 26 上的單向和雙向串流。這大幅提升了 Apple 生態系統在輔助科技產品整合方面的能力。",
    tags: ["Apple", "Made for iPhone (MFi)", "聽力輔助設備", "macOS Tahoe 26", "音訊串流", "Apple Vision Pro"],
    title_en: "Apple Updates Made for iPhone (MFi) Hearing Aid Device List, Supporting Over 600 Devices",
    summary_en: "Apple recently updated its official Made for iPhone (MFi) hearing aid device support list, expanding the total number of supported devices to 623, covering 104 brands. This update extends the audio support range of the Apple ecosystem, incorporating hearing aids alongside smart home products, headphones, and game controllers. With MFi support, users can pair compatible hearing devices with iPhone, iPad, Mac, or Apple Vision Pro to achieve audio streaming. Apple explained that the bidirectional streaming feature allows users to make hands-free calls, which is extremely practical for hearing aid users. This update added multiple brands and models, such as Afflelou, Audibel, and Starkey, and updated the support status of existing products to enable bidirectional streaming. Furthermore, Apple announced that the MacBook Neo will be included in system requirements, supporting both unidirectional and bidirectional streaming on macOS Tahoe 26. This significantly enhances Apple's ecosystem capability in integrating assistive technology products.",
    tags_en: ["Apple", "Made for iPhone (MFi)", "Hearing Aid Devices", "macOS Tahoe 26", "Audio Streaming", "Apple Vision Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/apple-adds-nearly-45-hearing-devices-to-its-made-for-iphone-compatibility-list", lang: "EN" }
    ]
  },
  {
    id: "20260808-021",
    trackers: ["os"],
    category: "Apple",
    title: "Apple CarPlay 連線異常頻繁中斷，專家指出可能源自無線電干擾",
    summary: "近期有報導指出，部分駕駛在特定地點行駛時，Apple CarPlay 或 Android Auto 連線會無預警中斷。由於 CarPlay 依賴 iPhone 與車載主機之間的藍牙或 Wi-Fi 無線連接來進行投影與數據傳輸，當行經特定區域時，可能受到當地廣播天線、點對點微波鏈路或未授權發射器等 2.4GHz 頻段的強烈無線電干擾，導致無線連結中斷。專家建議，若在固定路段頻繁遭遇連線失效，多半屬於環境干擾因素，使用者無需過度盲目進行裝置重設或預約車輛檢修，以避免不必要的除錯時間與困擾。",
    tags: ["Apple", "CarPlay", "Android Auto", "Bluetooth", "Wi-Fi", "無線電干擾"],
    title_en: "Apple CarPlay Connection Drops Frequently; Experts Point to Potential Radio Interference",
    summary_en: "Recent reports indicate that some drivers experience unexpected disconnections of Apple CarPlay or Android Auto when driving in specific locations. Since CarPlay relies on Bluetooth or Wi-Fi wireless connections between the iPhone and the vehicle head unit for projection and data transfer, passing through certain areas may expose it to strong radio interference in the 2.4GHz band, such as from local broadcast antennas, point-to-point microwave links, or unauthorized transmitters, leading to wireless link interruptions. Experts suggest that if connection failures are frequently encountered on fixed routes, the cause is most likely environmental interference, and users should avoid excessive or blind device resets or scheduled vehicle maintenance to prevent unnecessary troubleshooting time and inconvenience.",
    tags_en: ["Apple", "CarPlay", "Android Auto", "Bluetooth", "Wi-Fi", "Radio Interference"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/07/carplay-connection-issues", lang: "EN" }
    ]
  },
  {
    id: "20260808-022",
    trackers: ["os"],
    category: "Android",
    title: "Google Messages 多項功能更新測試與功能調整動態",
    summary: "Google Messages（訊息）針對 Android 平台進行多項功能測試與正式釋出更新。本次更新重點包含全新可自訂的「聊天主題」（提供 9 種氣泡顏色與多款桌布）、長按懸浮選單與局部文字複製、全新附件網格，以及簡訊／RCS 自動儲存草稿機制（Tap to draft）。此外，網頁版 Google Messages 將逐步取消 QR code 配對，改為全面強制使用 Google 帳號登入；在跨平台 RCS 互動方面，隨著 iOS 27 推出，Android 與 iPhone 間的 RCS 對話將支援引用回覆與圖片貼圖回應。本篇文章未揭露相關 CVE 漏洞編號與 CVSS 攻擊風險評分。使用者可透過應用程式商店更新至最新版本或參與 Beta 計畫以體驗新功能。",
    tags: ["Google Messages", "Android", "RCS", "Google", "iOS 27"],
    title_en: "Google Messages Rolls Out Multiple Feature Updates and Adjustments",
    summary_en: "Google Messages is rolling out a major update for the Android platform, featuring multiple functional tests and formal releases. Key highlights of this update include customizable 'Chat Themes' (offering 9 bubble colors and multiple wallpapers), long-press floating menus with partial text copying, a new attachment grid, and an automatic draft saving mechanism for SMS/RCS (Tap to draft). Furthermore, the web version of Google Messages will gradually discontinue QR code pairing, mandating full use of Google Account login. Regarding cross-platform RCS interaction, with the release of iOS 27, RCS conversations between Android and iPhone will support quoted replies and image sticker responses. This article does not disclose any related CVE vulnerability IDs or CVSS attack risk scores. Users can update to the latest version via the app store or participate in the Beta program to experience the new features.",
    tags_en: ["Google Messages", "Android", "RCS", "Google", "iOS 27"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/08/new-google-messages-features", lang: "EN" }
    ]
  },
  {
    id: "20260808-023",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 Pro XL 實機照與外盒包裝於發表會前夕曝光",
    summary: "Google 即將舉辦 Pixel 11 系列發表會，社群平台 X 上帳號 @PixelNewsHub 釋出據稱為電信商展示機的 Pixel 11 Pro XL 實機與外盒照。曝光照片展示消光黑機身，其鏡頭設計更為顯眼，且新配備的「HiLight」LED 閃光燈區域比傳統閃光燈更大。此外，外盒包裝延續上一代設計，預計推出名為「Dune」或「Canyon」的新配色。本次洩漏主要涉及消費性硬體產品資訊，未提及任何資訊安全漏洞、CVE 編號或修補建議。",
    tags: ["Google", "Pixel 11 Pro XL", "Android", "HiLight", "硬體洩漏"],
    title_en: "Google Pixel 11 Pro XL physical photos and packaging leaked ahead of launch event",
    summary_en: "Google is set to hold the Pixel 11 series launch event. The account @PixelNewsHub on the social platform X released photos of the Pixel 11 Pro XL, which are reportedly carrier display models, along with its packaging. The exposed photos show a matte black body, featuring a more prominent camera design, and a larger 'HiLight' LED flash area than traditional flashes. Furthermore, the packaging continues the previous generation's design and is expected to launch with a new colorway named 'Dune' or 'Canyon.' This leak primarily concerns consumer hardware product information and does not mention any information security vulnerabilities, CVE numbers, or patch recommendations.",
    tags_en: ["Google", "Pixel 11 Pro XL", "Android", "HiLight", "Hardware Leak"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/08/google-pixel-11-pro-xl-hands-on-leak", lang: "EN" }
    ]
  },
  {
    id: "20260808-024",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列選前終極外洩：採用台積電 2nm Tensor G6 晶片與全新硬體升級",
    summary: "Google 即將發布最新 Pixel 11 系列手機（包含 Pixel 11、Pro、Pro XL、Pro Fold）及 Pixel Watch 5、Pixel Tag 等裝置。最新外洩資料顯示，Tensor G6 處理器改由台積電 2nm 製程代工，並搭配 MediaTek M90 通訊晶片，提升效能與能源效率。儲存容量全系列改由 256GB 起跳，螢幕峰值亮度提升至 3,000 至 3,600 nits。此外，相機外觀設計微調，完全移除溫度感測器，部分機種採用全新色系與 RGB 閃光燈設計。",
    tags: ["Google", "Pixel 11", "Tensor G6", "TSMC", "Android", "MediaTek"],
    title_en: "Google Pixel 11 Series Leaked Specs: Adopting TSMC 2nm Tensor G6 Chip and New Hardware Upgrades",
    summary_en: "Google is preparing to release the latest Pixel 11 series phones (including Pixel 11, Pro, Pro XL, and Pro Fold), along with devices like the Pixel Watch 5 and Pixel Tag. Latest leaked data indicates that the Tensor G6 processor will be fabricated using TSMC's 2nm process, paired with a MediaTek M90 communication chip to boost performance and energy efficiency. All models will start with 256GB storage, and the screen peak brightness will be upgraded to 3,000 to 3,600 nits. Additionally, the camera design has been subtly refined, removing the temperature sensor entirely, while some models will feature new color schemes and RGB flash designs.",
    tags_en: ["Google", "Pixel 11", "Tensor G6", "TSMC", "Android", "MediaTek"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/08/pixel-11-all-of-the-last-minute-leaks-video", lang: "EN" }
    ]
  },
  {
    id: "20260808-025",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel Watch 5 爆料推出 Stephen Curry 特別版並採用 Fitbit Air 設計防潑水錶帶",
    summary: "最新流出的行銷資料與圖片顯示，Google 計劃推出與 NBA 球星 Stephen Curry 合作的 Pixel Watch 5 特別版款式。該版本延續今年早先在 Fitbit Air 首發的設計風格，採用配有橘色點綴的棕色特殊織物錶帶，並印有個人專屬標籤。行銷文件指出該錶帶具備防潑水塗層，但也特別警示防護效果會隨日常磨損與環境暴露而逐漸減弱。此特別版 45mm LTE 機型預估售價為 579.99 歐元，目前尚不確定是否推出 41mm 或僅支援藍牙的版本。",
    tags: ["Google", "Pixel Watch 5", "Fitbit Air", "Stephen Curry", "可穿戴設備", "智慧手錶"],
    title_en: "Google Pixel Watch 5 rumored to launch Stephen Curry special edition featuring Fitbit Air splash-resistant band",
    summary_en: "Latest leaked marketing materials and images suggest that Google plans to release a special edition Pixel Watch 5 in collaboration with NBA star Stephen Curry. This version continues the design aesthetic first seen on the Fitbit Air, featuring a brown special woven band with orange accents and a personalized label. The marketing documents indicate that the band has a splash-resistant coating, but also caution that the protective effect will gradually diminish with daily wear and environmental exposure. This special edition 45mm LTE model is estimated to retail for €579.99, though it is currently uncertain if 41mm or Bluetooth-only versions will be offered.",
    tags_en: ["Google", "Pixel Watch 5", "Fitbit Air", "Stephen Curry", "Wearable Device", "Smartwatch"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/08/googles-pixel-watch-5-takes-notes-from-the-fitbit-air-in-latest-leak", lang: "EN" }
    ]
  },
  {
    id: "20260808-026",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Atlassian Rovo AI 助手爆發提示詞注入漏洞，駭客可誘使系統外洩 Jira 與 Confluence 敏感資料",
    summary: "PromptArmor 與 Varonis Threat Labs 分別發現 Atlassian Rovo AI 助手存在提示詞注入攻擊路徑。攻擊者可透過將惡意指令隱藏於上傳文件中（間接提示詞注入），或利用 rovoChatPrompt URL 參數構造惡意連結（被稱為 RovoBlast），誘使登入用戶在正常操作或一次點擊下，執行未經授權的指令。Rovo 會讀取用戶權限可及的 Jira、Confluence 甚至第三方連線工具（如 SharePoint、Outlook）中的內部資料與 API 金鑰，並將其附加於外部 URL 或 Markdown 圖片請求發送至攻擊者伺服器。Varonis 發現的連結漏洞已於 2026 年 7 月 8 日獲官方伺服器端修復，並獲得 Bugcrowd 6,000 美元賞金；間接提示詞注入路徑尚無用戶端修復補丁，管理者需透過控制 Rovo 對特定應用程式與用戶群組的存取權限來因應。兩項漏洞目前皆未核發 CVE 編號。",
    tags: ["Atlassian", "Rovo", "Jira", "Confluence", "提示詞注入", "Prompt Injection", "RovoBlast", "AI安全"],
    title_en: "Atlassian Rovo AI Assistant Exposed to Prompt Injection Vulnerability, Allowing Hackers to Exfiltrate Sensitive Jira and Confluence Data",
    summary_en: "PromptArmor and Varonis Threat Labs independently discovered prompt injection attack vectors within the Atlassian Rovo AI Assistant. Attackers can trick the system by embedding malicious instructions within uploaded files (indirect prompt injection), or by exploiting the rovoChatPrompt URL parameter to construct malicious links (dubbed RovoBlast). These methods can induce logged-in users to execute unauthorized commands through normal operation or a single click. Rovo reads internal data and API keys from Jira, Confluence, and even third-party connected tools (such as SharePoint and Outlook) that the user has access to, and then transmits this data as an attachment to an external URL or Markdown image request to an attacker's server. The link vulnerability discovered by Varonis was officially patched on the server side on July 8, 2026, earning a $6,000 Bugcrowd bounty. However, the indirect prompt injection path currently lacks a client-side patch, requiring administrators to mitigate the risk by controlling Rovo's access permissions to specific applications and user groups. Neither vulnerability has been assigned a CVE ID yet.",
    tags_en: ["Atlassian", "Rovo", "Jira", "Confluence", "Prompt Injection", "Prompt Injection", "RovoBlast", "AI Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/atlassian-rovo-can-be-tricked-into.html", lang: "EN" }
    ]
  },
  {
    id: "20260808-027",
    trackers: ["os"],
    category: "重點關注",
    title: "IDC數據顯示PC市場整體下滑，Apple Mac系列仍保持出貨增長",
    summary: "本文分析了當前的企業電腦採購市場經濟週期，指出全球PC設備出貨量普遍下降約5%。然而，在整體市場低迷的背景下，Apple卻是唯一報告出貨量增長的主要電腦製造商。這項現象的背後，市場的整體收入增長主要歸因於各類產品的價格上漲，而非銷量擴大。市場的供需結構受到AI資料中心帶動的全球需求和政府支出影響，導致記憶體分配被大量消耗，推高了整個產業的價格。對於企業採購者而言，這意味著儘管設備出貨量可能放緩，但由於AI等高需求領域的推動，相關硬體（如記憶體）的價格將持續上漲，影響了整體IT預算規劃。",
    tags: ["Apple", "IDC", "PC市場", "企業採購", "AI資料中心", "MacBook"],
    title_en: "IDC Data Shows Overall PC Market Decline, Apple Mac Line Maintains Shipment Growth",
    summary_en: "This article analyzes the current economic cycle for enterprise computer procurement, noting that global PC equipment shipments have generally declined by about 5%. However, against the backdrop of an overall sluggish market, Apple is the only major computer manufacturer reporting shipment growth. The primary driver of overall market revenue growth is attributed to price increases across various product lines, rather than increased sales volume. The market's supply and demand structure is influenced by global demand and government spending driven by AI data centers, leading to heavy consumption of memory allocation and driving up the entire industry's prices. For enterprise purchasers, this means that even if equipment shipments slow down, the prices of related hardware (such as memory) will continue to rise due to the push from high-demand areas like AI, impacting overall IT budget planning.",
    tags_en: ["Apple", "IDC", "PC Market", "Enterprise Procurement", "AI Data Center", "MacBook"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/08/apple-work-what-idcs-latest-shipments-mean-for-the-macbook-neo-and-air-in-the-enterprise", lang: "EN" }
    ]
  },
  {
    id: "20260808-028",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Wine 11.15 重磅發布：修復 Wayland 顯示問題，並解決 2006 年的 MSXML3 舊漏洞",
    summary: "Wine 11.15 作為開源軟體，是讓 Windows 遊戲和應用程式能在 Linux 環境下運行的重要工具。本次更新帶來多項重大改進，包括在 BCrypt 中實作更多 KDF 演算法，支援具備 MinGW 模式的 ARM64EC 建構，並擴充了 WindowsCodex 的格式轉換支援。在安全與認證方面，Wine 11.15 增加了對本地 NTLM 認證的支援，其中 msv1_0 代碼現可支援流程內 NTLM 認證，若發生問題則可回退至使用 ntlm_auth 工具。在修復方面，本次更新特別修復了 Bug 4811，這是一個可追溯到 2006 年 3 月的 MSXML3 相關漏洞。此外，Wine 11.15 還包含兩項 Wayland 相關修復，分別解決了因雙重 sRGB 轉換導致的顏色失真，以及 Wayland 環境下 4:3 全螢幕應用程式內容偏移的問題。這些更新顯著提升了 Wine 在跨平台兼容性、顯示穩定性及處理老舊系統漏洞方面的能力。",
    tags: ["Wine", "Linux", "Wayland", "MSXML3", "NTLM", "開源軟體"],
    title_en: "Wine 11.15 Major Release: Fixes Wayland Display Issues and Addresses 2006 MSXML3 Vulnerability",
    summary_en: "Wine 11.15, an open-source tool, is crucial for running Windows games and applications on Linux. This update introduces several major improvements, including implementing more KDF algorithms in BCrypt, supporting ARM64EC builds with MinGW mode, and expanding format conversion support in WindowsCodex. In terms of security and authentication, Wine 11.15 adds support for local NTLM authentication; specifically, the msv1_0 code can now support in-process NTLM authentication, with a fallback to the ntlm_auth tool if issues occur. Regarding fixes, this update notably addresses Bug 4811, an MSXML3-related vulnerability traceable back to March 2006. Furthermore, Wine 11.15 includes two Wayland-related fixes: one resolving color distortion caused by double sRGB conversion, and another fixing content offset issues for 4:3 full-screen applications in Wayland environments. These updates significantly enhance Wine's capabilities in cross-platform compatibility, display stability, and handling legacy system vulnerabilities.",
    tags_en: ["Wine", "Linux", "Wayland", "MSXML3", "NTLM", "Open Source"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.15-Released", lang: "EN" }
    ]
  },
  {
    id: "20260808-029",
    trackers: ["os"],
    category: "重點關注",
    title: "Triton 驅動程式：透過 DDI 提升 QEMU 虛擬機的 DirectX 11 繪圖加速",
    summary: "開源開發者 Osy 宣布開發了 Triton 驅動程式，旨在為在 QEMU 虛擬機中運行的 Microsoft Windows 客體提供 DirectX 11 繪圖加速。此驅動程式利用了 Mesa 和 virglrenderer 等元件，並結合了 AI 輔助開發的成果。相較於早期依賴 DXVK/Vulkan 的 Neptune 驅動程式，Triton 採取了更底層的策略，直接實作 DirectX Device Driver Interface (DDI)，而非僅限於 DirectX API 層級。這種架構的優點是解決了先前版本需要將驅動程式二進位檔複製到每個遊戲目錄，以及容易遭遇反作弊/遊戲保護機制限制的問題。目前，多款遊戲和基準測試已使用此 Triton 驅動程式進行運行，顯著提升了虛擬環境的圖形性能。開發者已提供詳細的部落格文章和 GitHub 儲存庫，供使用者參考建置說明並嘗試使用。",
    tags: ["QEMU", "DirectX 11", "Triton", "DDI", "虛擬化", "Mesa"],
    title_en: "Triton Driver: Enhancing DirectX 11 Graphics Acceleration for QEMU Virtual Machines via DDI",
    summary_en: "Open-source developer Osy has announced the development of the Triton driver, which aims to provide DirectX 11 graphics acceleration for Microsoft Windows guests running within QEMU virtual machines. This driver leverages components such as Mesa and virglrenderer, incorporating results from AI-assisted development. Compared to the earlier Neptune driver, which relied on DXVK/Vulkan, Triton adopts a deeper, more foundational strategy by directly implementing the DirectX Device Driver Interface (DDI), rather than being limited to the DirectX API layer. The advantage of this architecture is that it solves previous issues, such as the need to copy driver binaries to every game directory, and mitigates the risk of encountering anti-cheat/game protection mechanism restrictions. Currently, multiple games and benchmarks have been run using the Triton driver, showing significant improvements in graphical performance within virtual environments. The developer has provided a detailed blog post and a GitHub repository for users to reference build instructions and attempt usage.",
    tags_en: ["QEMU", "DirectX 11", "Triton", "DDI", "Virtualization", "Mesa"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Triton-DirectX-11-QEMU-Driver", lang: "EN" }
    ]
  }
];
