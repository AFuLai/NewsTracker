// data-20260913.js — 2026-09-13
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-13"] = [
  {
    id: "20260913-11910",
    trackers: ["os"],
    category: "Linux",
    title: "Kernel prepatch 7.3-rc3 發布：提供較大的檔案系統足跡",
    summary: "本文僅宣布 Kernel prepatch 7.3-rc3 的發布，指出這是一個相當大型的預發行版（rc release）。該版本的主要特點是其檔案系統足跡（filesystem footprint）較大，這通常是開發過程中的正常現象。文章未提供具體的漏洞細節、CVSS 分數或修補建議，僅作為開發者和系統維護者了解新版本特性和大小的資訊。建議使用者關注官方的發布渠道，並根據自身系統需求評估升級的必要性。",
    tags: ["Kernel", "prepatch", "7.3-rc3", "Linux 核心", "檔案系統"],
    title_en: "Kernel prepatch 7.3-rc3 Released: Featuring Larger Filesystem Footprint",
    summary_en: "This article announces the release of Kernel prepatch 7.3-rc3, noting that it is a relatively large pre-release (rc release). The main characteristic of this version is its larger filesystem footprint, which is typically normal during the development process. The article does not provide specific vulnerability details, CVSS scores, or patch recommendations; it serves only to inform developers and system maintainers about the new version's features and size. Users are advised to monitor official release channels and assess the necessity of upgrading based on their specific system requirements.",
    tags_en: ["Kernel", "prepatch", "7.3-rc3", "Linux Kernel", "Filesystem"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1093962", lang: "EN" }
    ]
  },
  {
    id: "20260913-11915",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc3 版本發布：包含 XFS、SMB 客戶端及多個核心驅動程式修復",
    summary: "Linux 核心開發持續進行，最新發布了 Linux 7.3 的第三個預發候選版本（rc3）。此版本旨在邁向十月下半段的穩定版發布。本次更新的修復內容豐富，特別提到了透過 AI/LLMs 引入的修復。其中一個值得注意的修復是 EROFS 針對 LZ4 滾動解壓縮功能進行了禁用，以避免潛在的資料損壞問題。本次 rc3 的主要修補內容涵蓋了 XFS 和 SMB 客戶端等檔案系統，以及多個網路檔案系統（netfs）和 AFS 的修復。此外，核心驅動程式方面，本次主要更新了音訊和網路驅動程式，同時也包含了 GPU 驅動程式和針對 s390、powerpc 等架構的修復。",
    tags: ["Linux 7.3", "Linux 核心", "XFS", "SMB 客戶端", "EROFs", "驅動程式"],
    title_en: "Linux 7.3-rc3 Version Released: Includes XFS, SMB Client, and Multiple Kernel Driver Fixes",
    summary_en: "Linux kernel development is ongoing, with the latest release being the third release candidate (rc3) of Linux 7.3. This version aims toward a stable release scheduled for the latter half of October. The updates include numerous fixes, notably mentioning patches introduced via AI/LLMs. One notable fix is the disabling of EROFS's LZ4 rolling decompression feature to prevent potential data corruption issues. The main patches in this rc3 cover file systems such as XFS and the SMB client, as well as multiple network file system (netfs) and AFS fixes. Furthermore, the kernel drivers are updated, primarily focusing on audio and network drivers, while also including fixes for GPU drivers and support for architectures such as s390 and powerpc.",
    tags_en: ["Linux 7.3", "Linux Kernel", "XFS", "SMB Client", "EROFS", "Drivers"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc3-Released", lang: "EN" }
    ]
  },
  {
    id: "20260913-11916",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 Zstd 壓縮優化：修補冗餘初始化，提升壓縮與解壓縮效能",
    summary: "資安研究人員 Usama Arif 為 Linux 核心的 Zstd 壓縮程式碼發布了新的補丁系列。此補丁旨在解決 Zstd 壓縮/解壓縮過程中的效率問題，特別是避免冗餘的初始化步驟。原先的設計存在一個問題，即第一次初始化會被丟棄，且未處理任何資料。透過新的補丁，流（stream）的初始化被延遲到第一次處理資料的迭代（walk iteration）時執行。\n\n根據補丁的說明，這些優化在 4KB 的 crypto_acomp 基準測試中展現了顯著的性能提升。具體而言，Zstd 壓縮速度有單位數的提升，在裸機（bare metal）上可實現 13% 的解壓縮速度提升，而在虛擬機（VM）環境中甚至可達到 35% 的提升。\n\n這些補丁已在本週被納入 cryptodev Git 分支，預計將提交到即將到來的 Linux 7.4 合併窗口，預計能提升 Linux 核心的整體效能。",
    tags: ["Linux 核心", "Zstd", "Usama Arif", "Linux 7.4", "壓縮效能"],
    title_en: "Linux Kernel Zstd Compression Optimization: Fixing Redundant Initialization to Boost Compression and Decompression Efficiency",
    summary_en: "Cybersecurity researcher Usama Arif has released a new series of patches for the Zstd compression code within the Linux kernel. These patches aim to address efficiency issues during the Zstd compression/decompression process, specifically by avoiding redundant initialization steps. The original design had a flaw where the first initialization was discarded and did not process any data. Through the new patches, the stream initialization is delayed until the first data processing iteration (walk iteration). According to the patch description, these optimizations demonstrated significant performance improvements in the 4KB crypto_acomp benchmark. Specifically, Zstd compression speed saw unit increases, achieving a 13% decompression speed boost on bare metal and even up to a 35% boost in a virtual machine (VM) environment. These patches were included in the cryptodev Git branch this week and are expected to be submitted to the upcoming Linux 7.4 merge window, which is anticipated to improve the overall performance of the Linux kernel.",
    tags_en: ["Linux Kernel", "Zstd", "Usama Arif", "Linux 7.4", "Compression Performance"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Zstd-Linux-7.4-Avoid-Redundant", lang: "EN" }
    ]
  },
  {
    id: "20260913-11917",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心移除 BFS 文件系統：清理過時技術債，簡化核心結構",
    summary: "Linux 核心正在持續清理過時且使用率極低的檔案系統驅動。本次移除的 BFS 文件系統，此前曾用於 SCO UnixWare OS 的啟動分區。該文件系統功能極度受限，僅支援連續檔案儲存，且不具備子目錄結構。移除此類過時檔案系統（如前次移除的 EFS 和 FreeVxFS）的目的是為了減輕 Linux 核心樹的維護負擔，並遵循新的核心檔案系統接受指南。開發者認為，由於該分區主要用於儲存核心和引導載入器設定，且極少有用戶會從 Linux 存取，故移除 BFS 是合理的。此舉體現了 Linux 核心朝向簡化、精簡和維護更嚴謹的趨勢。",
    tags: ["Linux 核心", "BFS", "文件系統", "技術債", "UnixWare OS"],
    title_en: "Linux Kernel Removes BFS Filesystem: Cleaning Up Legacy Technical Debt and Simplifying Core Structure",
    summary_en: "The Linux kernel is continuously cleaning up outdated and rarely used filesystem drivers. The removal of the BFS filesystem, which was previously used for the boot partition of SCO UnixWare OS, is part of this effort. This filesystem had extremely limited functionality, only supporting contiguous file storage and lacking subdirectory structure. The goal of removing such legacy filesystems (such as the previously removed EFS and FreeVxFS) is to reduce the maintenance burden on the Linux kernel tree and comply with new kernel filesystem acceptance guidelines. Developers argue that removing BFS is reasonable because the partition was primarily used for storing kernel and bootloader configurations, and very few users access it from Linux. This action reflects the Linux kernel's trend toward simplification, streamlining, and stricter maintenance.",
    tags_en: ["Linux Kernel", "BFS", "Filesystem", "Technical Debt", "UnixWare OS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/BFS-Filesystem-To-Be-Removed", lang: "EN" }
    ]
  },
  {
    id: "20260913-11918",
    trackers: ["os"],
    category: "Linux",
    title: "ARCTIC 風扇控制器驅動程式雙重授權 BSD-2-Clause，利於跨平台支援",
    summary: "硬體製造商 ARCTIC 發布的「arctic_fan_controller」風扇控制器驅動程式，現已將授權條款從 GPLv2+ 擴展至包含 BSD-2-Clause。此舉對於希望將該驅動程式移植到 BSD 或其他不偏好 GNU GPL 的作業系統平台的使用者極為重要。該驅動程式已納入 hwmon-next Git 分支，預計將在今年稍晚的 Linux 7.4 核心週期中實現。這使得 ARCTIC 風扇控制器成為一款具備官方 Linux 支援、且價格親民的桌面風扇控制器。此更新有助於擴大風扇控制器的應用範圍，讓使用者能更廣泛地管理桌面電腦的風扇速度，而不僅限於 Linux 或 Windows 環境。",
    tags: ["ARCTIC", "arctic_fan_controller", "Linux 核心", "BSD-2-Clause", "hwmon-next", "GPLv2+"],
    title_en: "ARCTIC Fan Controller Driver Dual-Licenses BSD-2-Clause, Facilitating Cross-Platform Support",
    summary_en: "The 'arctic_fan_controller' fan controller driver, released by hardware manufacturer ARCTIC, has expanded its licensing terms from GPLv2+ to include BSD-2-Clause. This change is highly beneficial for users who plan to port the driver to BSD or other operating system platforms that do not prefer the GNU GPL. The driver has been incorporated into the hwmon-next Git branch and is expected to be implemented in the Linux 7.4 kernel cycle later this year. This makes the ARCTIC fan controller an affordable desktop fan controller with official Linux support. This update helps expand the application scope of fan controllers, allowing users to manage desktop computer fan speeds more broadly, not limited only to Linux or Windows environments.",
    tags_en: ["ARCTIC", "arctic_fan_controller", "Linux Kernel", "BSD-2-Clause", "hwmon-next", "GPLv2+"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ARCTIC-Fan-Controller-BSD", lang: "EN" }
    ]
  },
  {
    id: "20260913-11919",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME Shotwell 33 照片管理工具發布，全面升級至 GTK4 介面",
    summary: "GNOME 的 Shotwell 照片管理工具發布了版本 33.0。這是自 2023 年 4 月發布 0.32 版本以來的一次重大更新。本次升級最重要的變動是其使用者介面（UI）從 GTK3 遷移至 GTK4。除了介面升級外，Shotwell 33 還增加了在檢視器內開啟 URI 的支援功能，重構了列印功能，並修復了多個記憶體洩漏和潛在崩潰問題。此外，版本中還包含許多其他小幅增強和錯誤修復。本次發布時間點，正好在 GNOME 51 桌面版發布之前，為使用者提供了更現代化的照片管理體驗。使用者可以在 GNOME GitLab 取得 Shotwell 33.0。",
    tags: ["GNOME", "Shotwell", "GTK4", "Linux", "照片管理", "GNOME 51"],
    title_en: "GNOME Shotwell 33 Photo Management Tool Released with Full Upgrade to GTK4 Interface",
    summary_en: "GNOME's Shotwell photo management tool has released version 33.0. This represents a major update since the 0.32 version released in April 2023. The most significant change in this upgrade is the transition of its user interface (UI) from GTK3 to GTK4. In addition to the interface upgrade, Shotwell 33 adds support for opening URIs within the viewer, refactors the printing functionality, and fixes multiple memory leaks and potential crash issues. Furthermore, the version includes many other minor enhancements and bug fixes. This release timing provides users with a more modernized photo management experience just before the release of the GNOME 51 desktop edition. Users can obtain Shotwell 33.0 from GNOME GitLab.",
    tags_en: ["GNOME", "Shotwell", "GTK4", "Linux", "Photo Management", "GNOME 51"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Shotwell-33", lang: "EN" }
    ]
  },
  {
    id: "20260913-11920",
    trackers: ["os", "security"],
    category: "Linux",
    title: "EROFS 禁用 LZ4 滾動解壓縮功能，避免資料損壞風險",
    summary: "用於嵌入式系統和容器的唯讀檔案系統 EROFS，因發現使用 LZ4 滾動解壓縮功能可能導致資料損壞，決定暫時禁用此功能。此變更已在 Linux 7.3-rc3 核心版本前夕實施。根據分析，問題根源在於目前 LZ4 的實作中存在不受控制的「向後記憶體複製」（backward memory copies）行為。這種行為破壞了滾動解壓縮所依賴的假設，使得資料正確性無法保證。雖然滾動解壓縮能有效減少臨時記憶體佔用（例如，可節省大量臨時頁面），但由於上游 LZ4 程式碼不在 EROFS 的控制範圍內，為確保資料的正確性，開發團隊選擇暫時禁用。此變更的主要影響是運行時記憶體佔用增加，但開發者建議未來需確保官方 LZ4 程式碼只進行向前複製，或在 EROFS 內部維護自己的 LZ4 實作，才能恢復此優化功能。",
    tags: ["EROFS", "LZ4", "Linux 7.3", "唯讀檔案系統", "核心漏洞", "記憶體管理"],
    title_en: "EROFs Disables LZ4 Rolling Decompression Feature to Mitigate Data Corruption Risk",
    summary_en: "EROFs, a read-only file system used in embedded systems and containers, has temporarily disabled its LZ4 rolling decompression feature after discovering that its use could lead to data corruption. This change was implemented just before the Linux 7.3-rc3 kernel version. Analysis revealed that the root cause of the issue lies in uncontrolled 'backward memory copies' within the current LZ4 implementation. This behavior violates the assumptions required for rolling decompression, making data integrity impossible to guarantee. Although rolling decompression effectively reduces temporary memory usage (for example, saving a large number of temporary pages), the development team chose to temporarily disable the feature to ensure data correctness, as the upstream LZ4 code is outside of EROFS's control. The primary impact of this change is increased runtime memory consumption, but developers suggest that to restore this optimization feature in the future, official LZ4 code must be ensured to only perform forward copies, or EROFS must maintain its own LZ4 implementation internally.",
    tags_en: ["EROFs", "LZ4", "Linux 7.3", "Read-Only File System", "Kernel Vulnerability", "Memory Management"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/EROFS-Disabled-LZ4-Rolling", lang: "EN" }
    ]
  },
  {
    id: "20260913-11962",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 內建「了解更多」連結漏洞，提供無需 MSA 的本地帳戶繞過方法",
    summary: "本文揭露了一種在 Windows 11 Home 系統安裝過程中，無需使用 Microsoft Account (MSA) 即可建立本地帳戶的繞過方法。使用者只需在到達「加入 Microsoft 帳戶」頁面後，尋找「Sign-in options」下方的「Learn more」小連結點擊，即可意外地進入本地帳戶建立介面。此方法極為簡單，無需使用 Command Prompt、修改 Registry 或斷開 Wi-Fi 連線。作者推測這是一個 Microsoft 未經意留下的 Bug。此漏洞的發現，讓使用者得以繞過 Microsoft 逐步收緊的 MSA 限制。過去，Windows 11 曾多次修補了如 oobe\\bypassnro 命令行技巧和 Registry-based BypassNRO 等繞過機制。雖然此方法尚未經官方支援，但其極大的便利性，使其成為目前最簡單的本地帳戶建立替代方案。",
    tags: ["Windows 11", "MSA", "本地帳戶", "OOBE", "漏洞", "Windows 系統更新"],
    title_en: "Windows 11 Built-in 'Learn More' Link Vulnerability Allows Local Account Bypass Without MSA",
    summary_en: "This article reveals a bypass method for creating a local account during the Windows 11 Home system installation process, eliminating the need for a Microsoft Account (MSA). Users simply need to find and click the 'Learn more' link located under 'Sign-in options' on the 'Join Microsoft Account' page, which inadvertently directs them to the local account creation interface. This method is extremely simple, requiring no use of Command Prompt, Registry modifications, or Wi-Fi disconnection. The author speculates that this is a bug unintentionally left by Microsoft. The discovery of this vulnerability allows users to bypass Microsoft's increasingly strict MSA requirements. Previously, Windows 11 has seen multiple patches for bypass mechanisms, such as the oobe\\bypassnro command-line trick and Registry-based BypassNRO. Although this method has not been officially supported, its immense convenience makes it the simplest alternative for establishing a local account currently available.",
    tags_en: ["Windows 11", "MSA", "Local Account", "OOBE", "Vulnerability", "Windows System Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/13/microsoft-blocked-every-windows-11-account-bypass-except-the-most-boring-link-on-its-own-page", lang: "EN" }
    ]
  },
  {
    id: "20260913-11786",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 Passkey 社交工程與第三方郵件基礎設施，實施金融詐騙及雲端入侵攻擊",
    summary: "微軟披露了兩場複雜的網路攻擊活動。第一場詐騙活動透過第三方電子郵件基礎設施，發送超過百萬封郵件，冒充目標公司高階主管，誘騙財務部門為虛假的 ServiceNow 年度訂閱服務進行 ACH 轉帳。攻擊者利用生成式 AI 製作客製化郵件模板，並在郵件中嵌入偽造發票和完整的電子郵件對話紀錄，以增加欺騙的真實性。第二場攻擊則專注於雲端環境，透過身份認同社交工程，誘騙使用者更新 Passkey 或 MFA 設定。攻擊者會引導受害者至模仿微軟登入介面的偽造網站，進行中間人攻擊（AitM），最終竊取憑證或在受害者不知情下授予存取權限。攻擊者會註冊大量與 Passkey、SSO 相關的惡意網域，並將目標公司名稱作為子網域，顯示出高度的預先研究和協調性。",
    tags: ["Microsoft", "Passkey", "社交工程", "ACH 轉帳", "雲端入侵", "生成式 AI"],
    title_en: "Hackers Exploit Passkeys and Third-Party Email Infrastructure for Financial Fraud and Cloud Intrusion Attacks",
    summary_en: "Microsoft disclosed two complex cyber attack campaigns. The first fraudulent campaign utilized third-party email infrastructure to send over a million emails, impersonating high-ranking executives of target companies to trick finance departments into making ACH transfers for fake ServiceNow annual subscriptions. The attackers used generative AI to create customized email templates, embedding fabricated invoices and complete email conversation records to enhance the deception's authenticity. The second attack focused on cloud environments, employing identity social engineering to trick users into updating Passkey or MFA settings. Attackers would guide victims to spoofed websites mimicking the Microsoft login interface to perform an Adversary-in-the-Middle (AitM) attack, ultimately stealing credentials or granting unauthorized access without the victim's knowledge. The attackers registered numerous malicious domains related to Passkeys and SSO, using the target company's name as subdomains, demonstrating a high degree of prior research and coordination.",
    tags_en: ["Microsoft", "Passkey", "Social Engineering", "ACH Transfer", "Cloud Intrusion", "Generative AI"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-use-passkey-phishing-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260913-11804",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 Tencent Sogou 輸入法漏洞 (CVE-2026-51990) 部署 GrayRabbit 後門",
    summary: "資安公司 Gen Digital 研究人員警告，駭客利用 Tencent Sogou 輸入法在 Windows 上的關鍵漏洞 (CVE-2026-51990) 進行一鍵式遠端程式碼執行 (RCE)。該攻擊鏈由 UNC3569 威脅群組在野外積極利用。Sogou 輸入法是一個廣受使用的 Windows 應用程式，其漏洞利用了三個弱點：首先是未經驗證的命令列參數注入，其次是基於 CEF 的網頁檢視器允許不受限制的 URL 導航，最後是利用 Sogou 內建的過時、未沙盒化的 Chromium 瀏覽器引擎。攻擊者透過惡意自訂 URI 觸發 Sogou 的協議處理器，注入參數，進而讓嵌入的網頁檢視器載入惡意 URL。最終，惡意網頁利用 Chromium 80 的已知漏洞，由於瀏覽器缺乏沙盒保護和關鍵網頁安全保護功能，成功執行程式碼並植入 GrayRabbit 後門。Gen Threat Labs 已向 Tencent 報告，該軟體供應商於 4 月 21 日發布了 Sogou 輸入法 16.3.0.3498 版本修補程式，該修補程式透過驗證協議處理器接受的 URL 參數、限制為 HTTPS 協定，並限制導航至指定網域。然而，研究人員警告，底層瀏覽器仍過時且缺乏沙盒保護。",
    tags: ["Tencent", "Sogou Input Method", "CVE-2026-51990", "GrayRabbit", "RCE", "Windows"],
    title_en: "Hackers Exploit Tencent Sogou Input Method Vulnerability (CVE-2026-51990) to Deploy GrayRabbit Backdoor",
    summary_en: "Security firm Gen Digital researchers warn that hackers are exploiting a critical vulnerability (CVE-2026-51990) in Tencent Sogou Input Method on Windows to achieve one-click Remote Code Execution (RCE). The attack chain is actively being exploited in the wild by the threat group UNC3569. Sogou Input Method is a widely used Windows application whose vulnerability leverages three weaknesses: first, unvalidated command-line parameter injection; second, a CEF-based web viewer allowing unrestricted URL navigation; and third, the use of Sogou's built-in, outdated, and unsandboxed Chromium browser engine. Attackers trigger Sogou's protocol handler using a malicious custom URI, inject parameters, and subsequently cause the embedded web viewer to load a malicious URL. Finally, the malicious webpage exploits a known vulnerability in Chromium 80. Due to the browser lacking sandbox protection and critical web security features, code execution is successfully achieved, leading to the deployment of the GrayRabbit backdoor. Gen Threat Labs reported this to Tencent, and the software vendor released a patch for Sogou Input Method version 16.3.0.3498 on April 21. This patch validates the URL parameters accepted by the protocol handler, restricts it to the HTTPS protocol, and limits navigation to specified domains. However, researchers warn that the underlying browser remains outdated and lacks sandbox protection.",
    tags_en: ["Tencent", "Sogou Input Method", "CVE-2026-51990", "GrayRabbit", "RCE", "Windows"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-exploit-tencent-app-flaw-to-deploy-grayrabbit-malware", lang: "EN" }
    ]
  },
  {
    id: "20260913-11808",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Storm 曝 CVE-2026-82434：僅具讀取權限用戶可竊取 ZooKeeper 憑證",
    summary: "Apache Storm 相關組件（包括 Nimbus 伺服器和 Client）存在 CVE-2026-82434 漏洞。當系統配置使用 ZooKeeper 進行身份驗證時，Storm 會將 `storm.zookeeper.topology.auth.payload` 憑證保留在拓撲配置中。問題出在 Nimbus 伺服器會將此配置原封不動地提供給任何擁有「讀取權限」的呼叫者，即使該用戶僅有檢視拓撲的權限，也會意外取得 ZooKeeper 憑證。此憑證並非只讀，因為叢集狀態實作使用寫入能力的 ACLs 來處理工作節點的心跳、背壓和錯誤狀態，使得攻擊者可以偽造或移除相關狀態。此外，提交客戶端在每次生成憑證時，也會將其記錄在 INFO 級別的日誌中，而 SASL 處理器則在 DEBUG 級別記錄，導致憑證可能被收集到任何日誌聚合或支援資料包中。\n\n修復建議是升級到 3.1.0 版本。對於無法立即升級的用戶，應輪換現有拓撲的 `storm.zookeeper.topology.auth.payload`，檢查保留的日誌和支援資料包以尋找該憑證值，並嚴格限制「讀取拓撲」的權限僅限於信任的主體。",
    tags: ["Apache Storm", "CVE-2026-82434", "ZooKeeper", "Nimbus", "憑證竊取", "Apache Storm Client"],
    title_en: "Apache Storm Exposed to CVE-2026-82434: Read-Only Users Can Steal ZooKeeper Credentials",
    summary_en: "Apache Storm components (including the Nimbus server and Client) contain the CVE-2026-82434 vulnerability. When the system is configured to use ZooKeeper for authentication, Storm retains the `storm.zookeeper.topology.auth.payload` credential within the topology configuration. The issue is that the Nimbus server provides this configuration unchanged to any caller with 'read' permissions. Even if the user only has permission to view the topology, they can inadvertently obtain the ZooKeeper credential. This credential is not read-only, as the cluster state implementation uses write-capable ACLs to handle worker node heartbeats, backpressure, and error states, allowing an attacker to forge or remove related states. Furthermore, the submitting client also logs the credential at the INFO level whenever it generates it, and the SASL processor logs it at the DEBUG level, potentially allowing the credential to be collected in any log aggregation or support package. The recommended fix is to upgrade to version 3.1.0. For users who cannot immediately upgrade, they should rotate the existing topology's `storm.zookeeper.topology.auth.payload`, check retained logs and support packages for the credential value, and strictly limit 'read topology' permissions to trusted principals.",
    tags_en: ["Apache Storm", "CVE-2026-82434", "ZooKeeper", "Nimbus", "Credential Theft", "Apache Storm Client"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/13/23", lang: "EN" }
    ]
  },
  {
    id: "20260913-11811",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Storm Nimbus/UI 存在 CVE-2026-84179 漏洞，可能洩露未經遮蔽的密鑰與密碼",
    summary: "Apache Storm 的 Nimbus daemon 和 UI 組件在版本 3.0.0 至 3.1.0 之前存在一個資訊洩露漏洞 (CVE-2026-84179)。該漏洞源於 getTopologyPageInfo 函式在獲取拓撲頁面資訊時，未對合併的 Nimbus daemon 配置進行遮蔽，導致敏感的叢集密鑰和密碼被完整回傳。受影響的密鑰包括 `storm.zookeeper.auth.payload`、Thrift、Netty 和 ZooKeeper 的 TLS 配置密碼，以及任何標記為秘密的插件密鑰。攻擊者若能透過 SimpleACLAuthorizer 讀取拓撲頁面，便可獲取這些本應被專用叢集配置 API (getNimbusConf) 遮蔽的憑證。修復建議是升級到 3.1.0 版本，新版本已在 Nimbus API 服務配置時實施了憑證遮蔽機制。若無法立即升級，應移除所有不信任叢集憑證的 Principal，並輪換 ZooKeeper 認證載荷和所有 TLS 密鑰/信任儲存密碼。",
    tags: ["Apache Storm", "CVE-2026-84179", "Nimbus", "資訊洩露", "密碼", "TLS"],
    title_en: "Apache Storm Nimbus/UI Vulnerable to CVE-2026-84179, Potentially Exposing Unmasked Keys and Passwords",
    summary_en: "The Nimbus daemon and UI components of Apache Storm, in versions prior to 3.1.0, contain an information disclosure vulnerability (CVE-2026-84179). This vulnerability stems from the getTopologyPageInfo function failing to mask the merged Nimbus daemon configuration when retrieving topology page information, resulting in the complete return of sensitive cluster keys and passwords. Exposed credentials include `storm.zookeeper.auth.payload`, TLS configuration passwords for Thrift, Netty, and ZooKeeper, as well as any plugin keys marked as secret. An attacker who can read the topology page via SimpleACLAuthorizer can obtain these credentials, which should have been masked by the dedicated cluster configuration API (getNimbusConf). The recommended fix is to upgrade to version 3.1.0, as the new version implements a credential masking mechanism when configuring the Nimbus API service. If immediate upgrading is not possible, users should remove all principals with untrusted cluster credentials and rotate the ZooKeeper authentication payload and all TLS keys/truststore passwords.",
    tags_en: ["Apache Storm", "CVE-2026-84179", "Nimbus", "Information Disclosure", "Password", "TLS"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/13/20", lang: "EN" }
    ]
  },
  {
    id: "20260913-11812",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Storm Nimbus 存在 CVE-2026-82441 漏洞：可透過跨租戶刪除 Blob 或造成叢集服務中斷",
    summary: "Apache Storm Nimbus 服務存在 CVE-2026-82441 漏洞，屬於中等風險（moderate）。該漏洞主要涉及拓撲（topology）的依賴鍵（dependency keys）處理機制。攻擊者可以利用此機制，在提交拓撲時，若列出屬於其他拓撲的 Blobstore 鍵，當自身拓撲完成清理時，可導致其他拓撲的 Blob 被意外刪除，造成跨租戶資料洩露或服務中斷。此外，攻擊者還可利用單一不存在的依賴鍵，導致 Nimbus 在獲取領導權（leadership）後，不斷嘗試比較所有活躍拓撲的依賴鍵，若發現任何鍵缺失，將導致所有 Nimbus 輪流獲取並放棄領導權，使整個叢集無法選出領導者，進而無法排程、清理或接受新的提交。修補建議是升級到 3.1.0 版本，新版本要求提交的依賴鍵必須是 Blobstore 中存在的依賴 Blob 鍵，從而防止未經驗證的鍵被使用。若無法立即升級，建議限制拓撲提交權限給可信的實體。",
    tags: ["Apache Storm", "Nimbus", "CVE-2026-82441", "Blobstore", "跨租戶攻擊", "DoS"],
    title_en: "Apache Storm Nimbus Vulnerable to CVE-2026-82441: Cross-Tenant Blob Deletion or Cluster Service Disruption Possible",
    summary_en: "The Apache Storm Nimbus service contains a vulnerability, CVE-2026-82441, rated as moderate risk. This vulnerability primarily involves the handling mechanism for topology dependency keys. An attacker can exploit this mechanism by submitting a topology that lists Blobstore keys belonging to other topologies. When the attacker's own topology completes its cleanup, it can unintentionally delete Blobs belonging to other topologies, leading to cross-tenant data leakage or service disruption. Furthermore, an attacker can utilize a single non-existent dependency key, causing Nimbus, after acquiring leadership, to continuously attempt to compare dependency keys for all active topologies. If any key is found to be missing, this results in all Nimbus instances repeatedly acquiring and relinquishing leadership, preventing the cluster from electing a leader. Consequently, scheduling, cleanup, or accepting new submissions become impossible. The recommended fix is to upgrade to version 3.1.0, which requires that submitted dependency keys must be existing dependency Blob keys in the Blobstore, thereby preventing the use of unverified keys. If immediate upgrading is not possible, it is recommended to restrict topology submission permissions to trusted entities.",
    tags_en: ["Apache Storm", "Nimbus", "CVE-2026-82441", "Blobstore", "Cross-Tenant Attack", "DoS"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/13/19", lang: "EN" }
    ]
  },
  {
    id: "20260913-11813",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Storm DRPC 存在 CVE-2026-82439 漏洞：未經身份驗證的記憶體增長風險",
    summary: "Apache Storm 的 DRPC 伺服器（org.apache.storm:storm-server）在版本 3.0.0 至 3.1.0 之前存在一個嚴重漏洞 CVE-2026-82439。該漏洞允許攻擊者在未經身份驗證的情況下，透過不斷向 DRPC 伺服器發送不同的函數名稱，導致伺服器內部維護的函數名稱到請求佇列的映射（map）持續累積，造成記憶體（heap）耗盡。由於預設的 `drpc.authorizer` 未設定，攻擊者無需憑證即可觸發此問題。此種狀態累積的記憶體洩漏是永久性的，而非暫時的負載尖峰。修復建議是升級到 3.1.0 版本，新版本已修復了函數佇列在無等待請求時移除的邏輯。若無法立即升級，使用者應配置 `drpc.authorizer`，限制只有受信任的主體才能存取 DRPC 端點，並確保 DRPC 埠無法從不受信任的網路到達。",
    tags: ["Apache Storm", "CVE-2026-82439", "DRPC", "記憶體洩漏", "未經身份驗證"],
    title_en: "Apache Storm DRPC Contains CVE-2026-82439 Vulnerability: Unauthenticated Memory Growth Risk",
    summary_en: "The DRPC server in Apache Storm (org.apache.storm:storm-server), versions prior to 3.1.0, contains a critical vulnerability, CVE-2026-82439. This vulnerability allows an attacker to cause memory exhaustion by continuously sending different function names to the DRPC server. This action leads to the persistent accumulation of function names in the internal map that maintains the mapping of function names to the request queue. Because the default `drpc.authorizer` is not configured, an attacker can trigger this issue without credentials. This accumulated memory leak is permanent, not a temporary load spike. The recommended fix is to upgrade to version 3.1.0, which has corrected the logic for removing function names from the queue when there are no waiting requests. If immediate upgrading is not possible, users should configure `drpc.authorizer` to restrict access to the DRPC endpoint to only trusted principals, and ensure the DRPC port is unreachable from untrusted networks.",
    tags_en: ["Apache Storm", "CVE-2026-82439", "DRPC", "Memory Leak", "Unauthenticated"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/13/18", lang: "EN" }
    ]
  },
  {
    id: "20260913-11814",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Storm Webapp 曝 CVE-2026-82438：跨站讀取認證用戶的叢集與日誌資料",
    summary: "Apache Storm Webapp (org.apache.storm:storm-webapp) 在 3.0.0 到 3.1.0 版本之間存在 CVE-2026-82438 漏洞。此漏洞允許來自任意來源（unrelated origin）的網頁，在未經授權的情況下讀取原本應僅供認證用戶存取的叢集、拓撲和日誌資料。漏洞的根源是三個獨立的機制：Logviewer 反射了 `Origin` header 到 `Access-Control-Allow-Origin`，同時也發送了 `Access-Control-Allow-Credentials: true`；共享的 CORS filter 預設允許憑證；以及 UI 和 Logviewer 對每個 GET 請求都使用呼叫方提供的 JSONP callback 進行包裹，從而繞過了同源策略（same-origin policy）。攻擊者無需進行同源協商，即可透過任何來源的腳本載入響應，竊取認證用戶的資料。修補建議是升級到 3.1.0 版本，新版本已修復 Logviewer 的行為，明確配置了 CORS filter，並讓 JSONP 的使用由 `ui.enable.jsonp` 控制（預設為 false）。若無法立即升級，應將 UI、Logviewer 和 DRPC 的 HTTP 端點置於反向代理後，該代理必須移除響應中的 `Access-Control-Allow-Origin` 和 `Access-Control-Allow-Credentials` 標頭，並拒絕帶有 `callback` 參數的請求。",
    tags: ["Apache Storm", "CVE-2026-82438", "CORS", "JSONP", "Web應用程式漏洞", "跨站腳本攻擊"],
    title_en: "Apache Storm Webapp Exposed to CVE-2026-82438: Cross-Site Reading of Authenticated Cluster and Log Data",
    summary_en: "The Apache Storm Webapp (org.apache.storm:storm-webapp) contains CVE-2026-82438 in versions between 3.0.0 and 3.1.0. This vulnerability allows a webpage from an unrelated origin to read cluster, topology, and log data that should only be accessible to authenticated users, without authorization. The root cause involves three independent mechanisms: Logviewer reflects the `Origin` header into `Access-Control-Allow-Origin` while also sending `Access-Control-Allow-Credentials: true`; a shared CORS filter defaults to allowing credentials; and the UI and Logviewer wrap every GET request using a JSONP callback provided by the caller, thereby bypassing the same-origin policy. An attacker can load the response using a script from any origin, stealing authenticated user data, without needing to perform cross-origin negotiation. The recommended fix is to upgrade to version 3.1.0, which has corrected the behavior of Logviewer, explicitly configured the CORS filter, and makes JSONP usage controllable via `ui.enable.jsonp` (defaulting to false). If immediate upgrade is not possible, the HTTP endpoints for UI, Logviewer, and DRPC should be placed behind a reverse proxy. This proxy must remove the `Access-Control-Allow-Origin` and `Access-Control-Allow-Credentials` headers from the response and reject requests containing the `callback` parameter.",
    tags_en: ["Apache Storm", "CVE-2026-82438", "CORS", "JSONP", "Web Application Vulnerability", "Cross-Site Scripting"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/13/17", lang: "EN" }
    ]
  },
  {
    id: "20260913-11815",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Storm Logviewer 存在 CVE-2026-82437 漏洞：未強制執行日誌存取控制",
    summary: "Apache Storm Logviewer (org.apache.storm:storm-webapp) 在版本 3.0.0 至 3.1.0 之前存在一個嚴重漏洞 CVE-2026-82437。該漏洞導致日誌存取控制機制失效，使得任何能夠通過配置的 servlet filter 的使用者，都能讀取到所有節點上的 daemon 日誌（如 nimbus.log, supervisor.log）以及其他租戶的拓撲名稱、所有者和配置片段。此外，日誌列表端點（/listLogs 和 /searchLogs）也未正確應用使用者參數，導致無論呼叫者身份為何，都能獲取到所有租戶的拓撲和工作日誌檔案名稱的元數據。此漏洞的實務影響是敏感的營運日誌和租戶元數據可能被未授權的外部使用者讀取。修補建議是立即升級到 3.1.0 版本，新版本已確保 daemon 日誌路徑評估與工作日誌路徑使用相同的使用者和群組清單，並限制了列表端點的過濾。若無法立即升級，建議將 Logviewer 置於反向代理後方，並限制 daemon 日誌端點的存取。",
    tags: ["Apache Storm", "CVE-2026-82437", "Logviewer", "日誌存取控制", "Apache Storm Logviewer"],
    title_en: "Apache Storm Logviewer Contains CVE-2026-82437 Vulnerability: Lack of Enforced Log Access Control",
    summary_en: "Apache Storm Logviewer (org.apache.storm:storm-webapp) has a critical vulnerability, CVE-2026-82437, present in versions prior to 3.1.0, specifically from 3.0.0. This vulnerability causes the log access control mechanism to fail, allowing any user who can pass through a configured servlet filter to read daemon logs (such as nimbus.log, supervisor.log) and other tenants' topology names, owners, and configuration snippets. Furthermore, the log listing endpoints (/listLogs and /searchLogs) fail to correctly apply user parameters, allowing the retrieval of metadata for all tenants' topology and working log file names regardless of the caller's identity. The practical impact of this vulnerability is that sensitive operational logs and tenant metadata may be readable by unauthorized external users. The recommended fix is to immediately upgrade to version 3.1.0, which ensures that daemon log path evaluation and working log path usage utilize the same user and group list, and restricts the filtering of the listing endpoints. If immediate upgrading is not possible, it is recommended to place the Logviewer behind a reverse proxy and restrict access to the daemon log endpoint.",
    tags_en: ["Apache Storm", "CVE-2026-82437", "Logviewer", "Log Access Control", "Apache Storm Logviewer"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/13/16", lang: "EN" }
    ]
  },
  {
    id: "20260913-11819",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "CISA發布《2026內部威脅緩解指南》，提供預防員工帶來的安全與資安風險框架",
    summary: "美國網路安全與基礎設施安全局（CISA）發布了《2026內部威脅緩解指南》，旨在協助所有規模的基礎設施擁有者和營運者，預先應對源自內部人員的資安與物理威脅。指南指出，內部威脅不僅會造成巨大的經濟損失，甚至可能導致人身傷害。內部威脅分為「蓄意威脅」（如破壞、間諜行為、暴力）和「非蓄意威脅」（如疏忽、誤操作）。CISA建議建立一個包含「偵測與識別」、「評估」和「管理」三個階段的綜合框架。在偵測階段，應結合鼓勵員工積極報告的文化，以及利用資料外洩防護（DLP）等技術監控。評估階段，需由跨學科專家組成的團隊，根據客觀標準深入分析個體是否構成實際威脅。管理階段則強調，應超越單純的懲戒，採取包含心理諮詢、安全強化和目標保護等個人與組織雙方保護的客製化介入策略。指南強調，成功的內部威脅管理必須建立在支持和保護員工的文化基礎上，兼顧個人隱私與組織風險的平衡。",
    tags: ["CISA", "內部威脅", "Insider Threat", "DLP", "資安風險", "基礎設施安全"],
    title_en: "CISA Releases '2026 Insider Threat Mitigation Guide,' Providing a Framework for Preventing Employee-Related Security and Cyber Risks",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has released the '2026 Insider Threat Mitigation Guide,' designed to assist infrastructure owners and operators of all sizes in proactively addressing cyber and physical threats originating from internal personnel. The guide notes that insider threats can cause massive economic losses and may even lead to physical injury. Insider threats are categorized into 'malicious threats' (such as sabotage, espionage, and violence) and 'non-malicious threats' (such as negligence or operational error). CISA recommends establishing a comprehensive framework comprising three stages: 'Detection and Identification,' 'Assessment,' and 'Mitigation.' During the detection stage, organizations should combine a culture that encourages employees to actively report issues with technical monitoring tools like Data Loss Prevention (DLP). The assessment stage requires a cross-disciplinary expert team to deeply analyze whether an individual constitutes an actual threat based on objective standards. The mitigation stage emphasizes moving beyond mere disciplinary action, adopting customized intervention strategies that protect both the individual and the organization, including psychological counseling, security reinforcement, and target protection. The guide stresses that successful insider threat management must be built upon a culture of support and protection for employees, balancing individual privacy with organizational risk.",
    tags_en: ["CISA", "Insider Threat", "Insider Threat", "DLP", "Cybersecurity Risk", "Infrastructure Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145803", lang: "EN" }
    ]
  },
  {
    id: "20260913-11849",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 高階主管討論 iPhone Duo 與 iPad 之間的潛在功能重疊性",
    summary: "Apple 軟體工程資深副總裁 Craig Federighi 在接受 MKBHD 採訪時，討論了新型 iPhone Duo 與 iPad 之間的潛在功能重疊區域。Federighi 認為，使用者在決定使用 iPad 或 iPhone Duo 時，可能會出現類似 iPad 與 Mac 之間的「自然使用模式」。他特別指出，iPad mini 的使用情境，可能與 iPhone Duo 產生重疊。Federighi 強調，Apple 在設計 iPhone Duo 的 iOS 體驗時，採取了從最初階段就進行整體設計，而非僅將其他體驗「拉伸或塞入」新外型尺寸，這顯示了 Apple 在軟體層面為新設備進行了深度優化。整體而言，Apple 正在透過軟體設計，確保 iPhone Duo 能夠提供獨特的用戶體驗，以區隔與現有產品線的差異。",
    tags: ["Apple", "iPhone Duo", "iPad", "iOS", "Craig Federighi", "產品定位"],
    title_en: "Apple Senior Executive Discusses Potential Feature Overlap Between iPhone Duo and iPad",
    summary_en: "During an interview with MKBHD, Apple Senior Vice President of Software Engineering, Craig Federighi, discussed the potential areas of feature overlap between the new iPhone Duo and the iPad. Federighi noted that users might encounter a 'natural usage pattern' when deciding between using an iPad or an iPhone Duo, similar to the pattern between an iPad and a Mac. He specifically pointed out that the use case for the iPad mini might overlap with the iPhone Duo. Federighi emphasized that Apple approached the iOS experience for the iPhone Duo with a holistic design from the outset, rather than merely 'stretching or fitting' existing experiences into a new form factor. This demonstrates that Apple has deeply optimized the software layer for the new device. Overall, Apple is ensuring that the iPhone Duo provides a unique user experience through its software design, thereby differentiating it from existing product lines.",
    tags_en: ["Apple", "iPhone Duo", "iPad", "iOS", "Craig Federighi", "Product Positioning"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/13/craig-federighi-addresses-iphone-duo-and-ipad-overlap", lang: "EN" }
    ]
  },
  {
    id: "20260913-11850",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27重大介面變動：通知中心開啟方式改變，影響用戶習慣",
    summary: "Apple在iOS 27版本中，對iPhone和iPad的通知中心（Notification Center）開啟方式進行了重大介面調整。自2011年iOS 5以來，通知中心一直是應用程式通知的集中顯示區。本次更新改變了用戶開啟通知中心的操作習慣，這可能讓長期使用Apple設備的用戶感到不適應。雖然文章未提供具體技術細節或漏洞資訊，但此變動屬於系統級的用戶體驗（UX）更新，預計在正式發布後，會影響大量用戶的日常操作流程。建議用戶在適應新介面流程的同時，留意Apple後續發布的相關操作指南。",
    tags: ["iOS 27", "Apple", "通知中心", "iPhone", "iPadOS", "用戶介面"],
    title_en: "Major UI Changes in iOS 27: Notification Center Access Method Altered, Affecting User Habits",
    summary_en: "In iOS 27, Apple has implemented significant interface adjustments to how the Notification Center is accessed on iPhones and iPads. Since iOS 5 in 2011, the Notification Center has served as the centralized display area for application notifications. This update changes the user's established method for opening the Notification Center, which may cause discomfort for users who have been long-time Apple device owners. Although the article does not provide specific technical details or vulnerability information, this change constitutes a system-level User Experience (UX) update that is expected to impact the daily workflow of a large number of users after its official release. Users are advised to pay attention to subsequent operational guides released by Apple while adapting to the new interface flow.",
    tags_en: ["iOS 27", "Apple", "Notification Center", "iPhone", "iPadOS", "User Interface"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/13/ios-27-just-broke-15-years-of-muscle-memory-on-iphone-and-ipad", lang: "EN" }
    ]
  },
  {
    id: "20260913-11851",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iPhone 18 Pro 與 iPhone 18 Pro Max 預購資訊：發布日與交貨時間預估",
    summary: "本文提供 Apple 新推出的 iPhone 18 Pro 和 iPhone 18 Pro Max 系列的預購資訊。雖然該系列已開放預購，但交貨時間預估顯示部分配置的交貨日期已延至十月，特別是 iPhone 18 Pro Max。不過，所有顏色和型號的 2TB 配置仍可於發布日送達。此外，文章特別提醒，今年的 iPhone 發布週期與往年不同，因為 Apple 的第一款折疊式 iPhone（iPhone Duo）將在十月十六日才開放預購，並定於十月二十三日發布，部分購買者可能會選擇等待該產品。建議消費者留意各零售商的交貨時間預估，並根據個人需求選擇最適合的型號和配置。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "iOS", "預購", "折疊式 iPhone"],
    title_en: "Apple iPhone 18 Pro and iPhone 18 Pro Max Pre-order Information: Estimated Release and Delivery Dates",
    summary_en: "This article provides pre-order information for Apple's newly released iPhone 18 Pro and iPhone 18 Pro Max series. Although the series is now available for pre-order, the estimated delivery dates indicate that some configurations, particularly the iPhone 18 Pro Max, have been delayed until October. However, the 2TB configuration in all colors and models can still be delivered on the release date. Furthermore, the article specifically notes that this year's iPhone release cycle differs from previous years because Apple's first foldable iPhone (iPhone Duo) will not be available for pre-order until October 16th and is scheduled for release on October 23rd. Some buyers may choose to wait for this product. Consumers are advised to monitor the estimated delivery times from various retailers and select the model and configuration that best suits their needs.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "iOS", "Pre-order", "Foldable iPhone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/12/iphone-18-pro-pre-orders-heres-what-still-arrives-on-launch-day", lang: "EN" }
    ]
  },
  {
    id: "20260913-11776",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic CEO警告AI發展需放緩，避免超智慧系統失控帶來的全球風險",
    summary: "Anthropic 執行長 Dario Amodei 警告，人工智慧產業的發展速度過快，安全措施無法及時跟上。他指出，若不放緩，AI在六到十二個月內可能發展出能接管整個網際網路的代理人群體（swarm of agents）。這項警告在業界引起廣泛關注，OpenAI 執行長 Sam Altman 也表示，公司將推遲首次公開募股（IPO）以專注於安全。多位業界專家，包括 Future of Life Institute 的代表，都呼籲產業放慢腳步，進行更深入的對齊（alignment）研究。Amodei 建議的措施包括要求所有前沿 AI 公司提供「持續的、類似員工的存取權」給外部評估團隊進行監控。雖然業界普遍認可 AI 的巨大潛力，但對於其自我改進和控制能力失控的風險，已成為業界必須正視的重大議題。",
    tags: ["Anthropic", "OpenAI", "AI 安全", "Superintelligence", "Alignment", "Dario Amodei"],
    title_en: "Anthropic CEO warns AI development must slow down to mitigate global risks from superintelligence",
    summary_en: "Anthropic CEO Dario Amodei warned that the rapid pace of the artificial intelligence industry is outpacing safety measures. He pointed out that if development does not slow, AI could develop a swarm of agents capable of taking over the entire internet within six to twelve months. This warning has drawn widespread industry attention, with OpenAI CEO Sam Altman also stating that the company will delay its Initial Public Offering (IPO) to focus on safety. Several industry experts, including representatives from the Future of Life Institute, have called for the industry to slow its pace and conduct deeper alignment research. Amodei suggested measures including requiring all frontier AI companies to grant 'continuous, employee-like access' to external evaluation teams for monitoring. While the industry widely acknowledges the immense potential of AI, the risk of its self-improvement and loss of control has become a critical issue that the industry must address.",
    tags_en: ["Anthropic", "OpenAI", "AI Safety", "Superintelligence", "Alignment", "Dario Amodei"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/anthropic-ceo-dario-amodei-says-ai-industry-needs-to-give-safety-measures-time-to-catch-up", lang: "EN" }
    ]
  },
  {
    id: "20260913-11832",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple發表折疊手機 iPhone Duo：功能設計雖非革命性，但為Android陣營提供參考方向",
    summary: "本文報導了 Apple 首款折疊手機 iPhone Duo 的發表。文章指出，雖然這款設備在功能設計上並未達到「重新發明」的程度，但它成功掌握了折疊手機最關鍵的幾個面向。這不僅為 Apple 自身產品線帶來了新的市場競爭力，也為現有的 Android 陣營提供了重要的設計參考方向。具體技術細節和市場影響的深入分析，建議業界應關注其在人機介面、耐用性以及生態系統整合方面的設計取向，以利未來產品的迭代與優化。",
    tags: ["Apple", "iPhone Duo", "折疊手機", "Android", "產品發表", "人機介面"],
    title_en: "Apple Unveils Foldable Phone iPhone Duo: Not Revolutionary, But Offers Design Direction for Android Camp",
    summary_en: "This article reports on the launch of Apple's first foldable phone, the iPhone Duo. It points out that while the device's functional design does not reach the level of 're-invention,' it successfully captures several key aspects of foldable phone technology. This not only brings new market competitiveness to Apple's own product line but also provides significant design reference points for the existing Android ecosystem. A detailed analysis of the technical specifications and market impact suggests that the industry should pay attention to its design approach regarding human-computer interface, durability, and ecosystem integration to facilitate future product iteration and optimization.",
    tags_en: ["Apple", "iPhone Duo", "Foldable Phone", "Android", "Product Launch", "Human-Computer Interface"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/13/iphone-duo-didnt-reinvent-android-foldables", lang: "EN" }
    ]
  },
  {
    id: "20260913-11847",
    trackers: ["os"],
    category: "重點關注",
    title: "Wokyis G5 與 G7 推出復古風格擴充底座，為 Mac mini 與 Mac Studio 增添更多專業功能與顯示器",
    summary: "文章介紹 Wokyis 推出新款的復古風格擴充底座，適用於 Mac mini 和 Mac Studio。此產品延續了去年 M4 Mac mini 版本的成功，在保留懷舊外觀的同時，大幅提升了專業功能性。新推出的 Wokyis G5 和 G7 型號，增加了更多專業級的連接埠、更大的可使用觸覺按鈕，並整合了翻開式顯示器。此外，它還支援 Thunderbolt 5 介面和高達 8TB 的儲存空間。這款底座旨在為 Mac 用戶提供一個功能豐富、外觀獨特，且能擴展多樣化連接埠和顯示能力的解決方案，滿足專業工作流程的需求。",
    tags: ["Wokyis", "Mac mini", "Mac Studio", "Thunderbolt 5", "擴充底座", "硬體配件"],
    title_en: "Wokyis G5 and G7 Launch Retro-Style Expansion Bases for Mac mini and Mac Studio, Adding More Professional Functionality and Display Capabilities",
    summary_en: "This article introduces the new retro-style expansion bases from Wokyis, designed for the Mac mini and Mac Studio. Following the success of last year's M4 Mac mini version, this product maintains a nostalgic aesthetic while significantly enhancing professional functionality. The newly launched Wokyis G5 and G7 models feature more professional-grade ports, larger haptic buttons, and integrated folding displays. Furthermore, they support Thunderbolt 5 interfaces and up to 8TB of storage. This base is designed to provide Mac users with a feature-rich, uniquely styled solution that expands diverse connectivity and display capabilities, meeting the demands of professional workflows.",
    tags_en: ["Wokyis", "Mac mini", "Mac Studio", "Thunderbolt 5", "Expansion Base", "Hardware Accessories"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/13/this-unique-retro-dock-adds-a-flip-up-display-thunderbolt-5-8tb-storage-to-your-mac-wokyis-g5-g7-video", lang: "EN" }
    ]
  },
  {
    id: "20260913-11848",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果正設計專用遊戲控制器，目標搶佔 iPhone 遊戲周邊市場",
    summary: "根據彭博社 Mark Gurman 的報導，有消息指出蘋果正在為 iPhone 設計自家的遊戲控制器。目前蘋果已透過 Apple Store 銷售 Backbone One 和 SteelSeries Nimbus+ 等第三方控制器，但此舉顯示蘋果意圖將遊戲控制器市場納入其生態系統，成為新的常態。這項產品的推出，預計將為 iPhone 遊戲玩家提供更整合、更具品牌特色的遊戲體驗。雖然文章未提供具體技術細節或發布時間，但其市場佈局顯示蘋果正積極擴展其硬體周邊的控制權，以提升整體用戶黏著度。",
    tags: ["Apple", "iPhone", "遊戲控制器", "生態系統", "硬體周邊"],
    title_en: "Apple Designing Dedicated Game Controller to Capture iPhone Gaming Peripheral Market",
    summary_en: "According to reporting by Bloomberg's Mark Gurman, there are reports that Apple is developing its own game controller for the iPhone. While Apple currently sells third-party controllers like the Backbone One and SteelSeries Nimbus+ through the Apple Store, this move indicates Apple's intention to integrate the game controller market into its ecosystem, making it the new standard. The launch of this product is expected to provide iPhone gamers with a more integrated and brand-specific gaming experience. Although the article does not provide specific technical details or release dates, its market positioning suggests that Apple is actively expanding its control over hardware peripherals to increase overall user stickiness.",
    tags_en: ["Apple", "iPhone", "Game Controller", "Ecosystem", "Hardware Peripherals"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/13/apple-designing-iphone-game-controller", lang: "EN" }
    ]
  },
  {
    id: "20260913-11909",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安新聞內容，無法撰寫標題與摘要",
    summary: "提供的文章內容僅為 LWN 網站的訂閱價格提醒，不包含任何資安事件、漏洞或技術資訊，因此無法撰寫資安新聞摘要。",
    tags: ["LWN", "訂閱價格"],
    title_en: "No cybersecurity content available; unable to write title and summary",
    summary_en: "The provided article content is merely a subscription price reminder from the LWN website and does not contain any cybersecurity incidents, vulnerabilities, or technical information. Therefore, a cybersecurity news summary cannot be written.",
    tags_en: ["LWN", "Subscription Price"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1093929", lang: "EN" }
    ]
  },
  {
    id: "20260913-11939",
    trackers: ["os"],
    category: "重點關注",
    title: "回顧 ZX Spectrum 早期電腦的極限音訊表現與音樂創作技術",
    summary: "本文非資安新聞，而是回顧經典早期電腦系統 ZX Spectrum 的硬體限制與音樂創作技術。文章介紹了 Bumbershoot Software 的 Michael Martin 網站，深入探討了 ZX Spectrum 原始 16K 和 48K 型號的極限音訊能力。雖然其音訊硬體非常有限，但透過編程技術，可以實現複雜的音樂效果。文章提及了早期音樂的範例，包括使用 Spectrum BASIC 程式碼播放馬勒（Mahler）的片段，以及 Matt Westcott 的 Mahler Project。此外，文章還回顧了 1980 年代音樂大師 Tim Follin 的成就，他僅使用軟體編程，為《Agent X》等遊戲創作了令人驚嘆的音樂。這些技術展示了在極度資源受限的環境下，軟體工程師和藝術家所展現的創意與技術深度。",
    tags: ["ZX Spectrum", "早期電腦", "音訊編碼", "Tim Follin", "Bumbershoot Software"],
    title_en: "A Look Back at the Extreme Audio Capabilities and Music Composition Techniques of Early ZX Spectrum Computers",
    summary_en: "This article is not a cybersecurity news item, but rather a retrospective on the hardware limitations and music composition techniques of the classic early computer system, the ZX Spectrum. It introduces the Michael Martin website of Bumbershoot Software and delves into the extreme audio capabilities of the original 16K and 48K models of the ZX Spectrum. Although its audio hardware was extremely limited, complex musical effects could be achieved through programming techniques. The article mentions examples of early music, including playing excerpts of Mahler using Spectrum BASIC code, and Matt Westcott's Mahler Project. Furthermore, it reviews the achievements of music master Tim Follin in the 1980s, who created astonishing music for games like *Agent X* using only software programming. These techniques demonstrate the creativity and technical depth shown by software engineers and artists in extremely resource-constrained environments.",
    tags_en: ["ZX Spectrum", "Early Computers", "Audio Encoding", "Tim Follin", "Bumbershoot Software"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/09/13/the-improbable-music-of-the-zx-spectrums-one-bit-speaker/5295862", lang: "EN" }
    ]
  },
  {
    id: "20260913-11817",
    trackers: ["os", "security"],
    category: "產業動態",
    title: "CISA警告：GitLab API存在嚴重路徑越權漏洞，可遠端讀取核心機密文件",
    summary: "美國網路安全與基礎設施安全局（CISA）已將GitLab的一個致命漏洞（CVE-2026-85706）列入「已知惡用漏洞」（KEV）清單，發出最高級別警告。此漏洞是GitLab的Repository Commits API中存在的「路徑穿越」（Path Traversal）缺陷。攻擊者可利用缺乏適當路徑限制和身份驗證的機制，無需任何帳號或用戶互動，透過外部網路遠端讀取GitLab伺服器內任意文件。由於GitLab伺服器儲存了企業的專有原始碼、CI/CD配置、存取權杖和部署腳本等高度敏感資料，此漏洞極具破壞力，可能導致攻擊者獲取用於二次入侵的憑證或密鑰。受影響版本包括GitLab CE/EE 18.7~19.1.7, 19.2~19.2.5, 19.3~19.3.1。建議自建GitLab實例的組織應立即升級至支援版本，如19.1.8, 19.2.6, 19.3.2。CISA強烈建議，除了修補漏洞外，還必須徹底檢查GitLab和反向代理的日誌，並更換所有可能洩露的憑證、權杖和密鑰。",
    tags: ["GitLab", "CVE-2026-85706", "Path Traversal", "CISA", "CI/CD", "資安"],
    title_en: "CISA Warns: Critical Path Traversal Vulnerability Found in GitLab API Allows Remote Reading of Core Confidential Files",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has listed a critical vulnerability in GitLab (CVE-2026-85706) on its Known Exploited Vulnerabilities (KEV) catalog, issuing a high-level warning. This flaw is a Path Traversal defect within GitLab's Repository Commits API. Attackers can exploit the lack of proper path restriction and authentication mechanisms to remotely read arbitrary files from the GitLab server over the external network, without requiring any account or user interaction. Given that GitLab servers store highly sensitive data such as corporate proprietary source code, CI/CD configurations, access tokens, and deployment scripts, this vulnerability is highly destructive, potentially allowing attackers to obtain credentials or keys for secondary intrusion. Affected versions include GitLab CE/EE 18.7~19.1.7, 19.2~19.2.5, and 19.3~19.3.1. Organizations running self-hosted GitLab instances are advised to immediately upgrade to supported versions, such as 19.1.8, 19.2.6, and 19.3.2. CISA strongly recommends that, in addition to patching the vulnerability, organizations must thoroughly check the logs of GitLab and any reverse proxies, and change all potentially leaked credentials, tokens, and keys.",
    tags_en: ["GitLab", "CVE-2026-85706", "Path Traversal", "CISA", "CI/CD", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145804", lang: "EN" }
    ]
  }
];
