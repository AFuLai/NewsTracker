// data-20260702.js — 2026-07-02
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-02"] = [
  {
    id: "20260702-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6375-1：修補 OpenSSH 服務中的潛在資訊洩漏漏洞",
    summary: "Debian 發布安全公告 DSA-6375-1，修補了 OpenSSH 服務中一個潛在的資訊洩漏漏洞。此漏洞可能允許攻擊者在特定條件下，透過觀察服務的行為，竊取敏感的系統資訊。雖然原文未提供具體的 CVSS 分數或影響範圍，但此類資訊洩漏漏洞通常被視為提升攻擊者橫向移動或進行進一步攻擊的跳板。修補建議是立即更新系統的 OpenSSH 套件至 Debian 提供的修補版本。建議所有使用 Debian 系統的用戶和系統管理員應密切關注 Debian 安全公告，確保系統核心元件的修補狀態，以防範未公開的資安風險。",
    tags: ["Debian", "OpenSSH", "DSA-6375-1", "資訊洩漏", "Linux 核心元件"],
    title_en: "Debian Releases DSA-6375-1: Patching Potential Information Leak Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6375-1, which patches a potential information leak vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to steal sensitive system information by observing the service's behavior. Although the original text does not provide specific CVSS scores or impact scope, such information leak vulnerabilities are typically considered a stepping stone for attackers to enhance lateral movement or conduct further attacks. The recommended fix is to immediately update the system's OpenSSH package to the patched version provided by Debian. All users and system administrators utilizing Debian systems are advised to closely monitor Debian security advisories and ensure the patching status of core system components to prevent undisclosed security risks.",
    tags_en: ["Debian", "OpenSSH", "DSA-6375-1", "Information Leak", "Linux Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00286.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-002",
    trackers: ["os"],
    category: "Linux",
    title: "AlmaLinux、Debian、Fedora與Ubuntu發布多項安全更新，涵蓋核心、網路服務與應用程式元件",
    summary: "本文彙整了主要 Linux 發行版（包括 AlmaLinux、Debian、Fedora、SUSE、Ubuntu）近期發布的安全更新資訊。這些更新涵蓋了從作業系統核心（kernel）到各種應用程式層面的元件，例如 glibc、OpenSSH、MariaDB、Python 函式庫、Web 伺服器相關模組等。受影響的產品範圍極廣，涵蓋了雲端環境（AWS、GCP、Azure、IBM）的特定核心版本，以及大量常用的開發與系統工具。實務上，系統管理員應特別關注核心層級的更新，以修補潛在的系統漏洞。建議所有使用這些發行版的用戶，應立即檢查並應用官方提供的安全補丁，確保系統的穩定性與安全性。",
    tags: ["AlmaLinux", "Debian", "Fedora", "Ubuntu", "Linux 核心", "安全更新", "CVE"],
    title_en: "AlmaLinux, Debian, Fedora, and Ubuntu Release Multiple Security Updates Covering Kernel, Network Services, and Application Components",
    summary_en: "This article compiles recent security update information for major Linux distributions (including AlmaLinux, Debian, Fedora, SUSE, and Ubuntu). These updates cover components ranging from the operating system kernel to various application layers, such as glibc, OpenSSH, MariaDB, Python libraries, and web server modules. The scope of affected products is extremely broad, covering specific kernel versions in cloud environments (AWS, GCP, Azure, IBM), as well as numerous commonly used development and system tools. In practice, system administrators should pay special attention to kernel-level updates to patch potential system vulnerabilities. All users utilizing these distributions are advised to immediately check and apply the official security patches to ensure system stability and security.",
    tags_en: ["AlmaLinux", "Debian", "Fedora", "Ubuntu", "Linux Kernel", "Security Update", "CVE"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1080956", lang: "EN" }
    ]
  },
  {
    id: "20260702-003",
    trackers: ["os"],
    category: "Linux",
    title: "Git 2.55 版本發布：包含多項核心硬化與安全修補，提升開發環境穩定性",
    summary: "本週的 LWN.net 新聞匯總涵蓋了多個開發與系統層面的更新。其中，Git 2.55 版本是重點關注的內容，它包含了多項核心硬化與安全修補，旨在提升版本控制系統的穩定性與安全性。此外，文章也提及了關於 Linux 核心的進展，例如 LSFMM+BPF 的覆蓋範圍擴大，以及 7.2 版本合併窗口的資訊。在系統安全方面，也提醒了 Secure Boot 憑證的到期問題，這對於使用安全啟動機制的主機至關重要。其他更新內容包括 Xsnow protestware、Rhombus、Ceph 與 Garage 等，共同描繪了當前 Linux 生態系統的開發動態。",
    tags: ["Git", "Linux 核心", "安全硬化", "Secure Boot", "LWN.net", "版本控制"],
    title_en: "Git 2.55 Released: Includes Multiple Core Hardening and Security Patches, Enhancing Development Environment Stability",
    summary_en: "This week's LWN.net news roundup covers various updates across development and system layers. The Git 2.55 release is a key focus, incorporating multiple core hardening and security patches aimed at enhancing the stability and security of the version control system. Additionally, the article mentions progress regarding the Linux kernel, such as the expanded coverage of LSFMM+BPF, and information regarding the 7.2 version merge window. In system security, there is also a reminder about the expiration of Secure Boot certificates, which is critical for hosts utilizing secure boot mechanisms. Other updates include Xsnow protestware, Rhombus, Ceph, and Garage, collectively painting a picture of the current development dynamics within the Linux ecosystem.",
    tags_en: ["Git", "Linux Kernel", "Security Hardening", "Secure Boot", "LWN.net", "Version Control"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1079457", lang: "EN" }
    ]
  },
  {
    id: "20260702-004",
    trackers: ["os"],
    category: "Linux",
    title: "Fedora 45 預計預設啟用 x86_64 Shadow Stack，強化防禦 ROP 攻擊",
    summary: "Fedora Linux 45 正在考慮一項變更提案，旨在預設為 x86_64 架構啟用 Shadow Stack 保護。此功能透過動態連結器或啟動例程自動激活，保護所有依賴於支援 Shadow Stack 的二進位檔和共享函式庫的程序。Shadow Stack 是現代 Intel 和 AMD CPU 硬體強制執行的安全機制，主要用於抵禦回指式程式設計（ROP）攻擊。此變更提案的目標是提升系統安全性，同時聲稱性能開銷極小甚至可忽略。此外，Fedora 也正在規劃在後續版本中啟用間接分支追蹤（IBT），以實現完整的控制流強制技術（CET）保護。此變更與現有編譯流程相容性高，但若 Shadow Stack 啟用程序嘗試載入不相容的共享物件，可能會導致 `dlopen` 錯誤。建議使用者關注 Fedora Wiki 的詳細說明，並留意未來完整的 CET 保護實施進度。",
    tags: ["Fedora Linux", "Shadow Stack", "x86_64", "ROP 攻擊", "Intel CET", "Linux 核心"],
    title_en: "Fedora 45 to Enable x86_64 Shadow Stack by Default, Strengthening Defense Against ROP Attacks",
    summary_en: "Fedora Linux 45 is considering a change proposal to enable Shadow Stack protection by default for the x86_64 architecture. This feature will automatically activate via the dynamic linker or startup routine, protecting all programs that rely on binaries and shared libraries supporting Shadow Stack. Shadow Stack is a security mechanism enforced by modern Intel and AMD CPUs, primarily used to defend against Return-Oriented Programming (ROP) attacks. The goal of this change proposal is to enhance system security while claiming minimal, if negligible, performance overhead. Furthermore, Fedora is planning to enable Indirect Branch Tracking (IBT) in subsequent versions to achieve full Control-Flow Enforcement Technology (CET) protection. This change is highly compatible with existing compilation workflows, but if the Shadow Stack activation process attempts to load incompatible shared objects, it may result in a `dlopen` error. Users are advised to follow the detailed documentation on the Fedora Wiki and monitor the progress of full CET protection implementation in the future.",
    tags_en: ["Fedora Linux", "Shadow Stack", "x86_64", "ROP Attacks", "Intel CET", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Fedora-45-Consider-Shadow-Stack", lang: "EN" }
    ]
  },
  {
    id: "20260702-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心移除 EFS 文件系統驅動：資安維護考量下淘汰過時元件",
    summary: "Linux 核心包含了一個用於 EFS 文件系統的只讀驅動程式，該驅動程式最初用於 SGI IRIX 上的非 ISO9660 CD-ROM 和磁碟分割區。該驅動程式已超過二十年未經維護，且其原始文件系統技術已在數十年前被取代。由於缺乏實際使用和維護，Linux 核心開發者決定移除此過時元件。Christian Brauner 已將移除 EFS 文件系統驅動的修補程式提交至 vfs/vfs.git 的 vfs-7.3.efs 分支，預計將在 Linux 7.3 版本中移除。開發者指出，保留此驅動程式只會增加核心的維護負擔，且其功能已過時，建議徹底移除，以確保核心的簡潔與安全性。",
    tags: ["Linux 核心", "EFS 文件系統", "vfs", "Linux 7.3", "核心維護"],
    title_en: "Linux Kernel Removes EFS Filesystem Driver: Deprecating Legacy Component for Security Maintenance",
    summary_en: "The Linux kernel contains a read-only driver for the EFS filesystem, which was originally used for non-ISO9660 CD-ROM and disk partitions on SGI IRIX. This driver has been unmaintained for over twenty years, and its original filesystem technology was replaced decades ago. Due to lack of practical use and maintenance, Linux kernel developers have decided to remove this legacy component. Christian Brauner submitted a patch to remove the EFS filesystem driver in the vfs/vfs.git vfs-7.3.efs branch, which is expected to be removed in Linux 7.3. The developer noted that retaining this driver only increases the kernel's maintenance burden, and since its functionality is obsolete, it recommends complete removal to ensure the kernel's simplicity and security.",
    tags_en: ["Linux Kernel", "EFS Filesystem", "vfs", "Linux 7.3", "Kernel Maintenance"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/EFS-File-System-Removal-Coming", lang: "EN" }
    ]
  },
  {
    id: "20260702-006",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心開發者討論是否移除 AI/LLM 輔助提交的歸屬標記",
    summary: "本次討論聚焦於 Linux 核心開發流程中，關於使用生成式 AI/LLM 輔助撰寫或測試補丁（patch）時，必須加入的「Assisted-by」歸屬標籤的必要性。目前規範要求該標籤需詳細包含 LLM 名稱、模型版本等資訊。然而，開發者如 Christian Brauner 和 Jeff Layton 提出，現行要求存在多重問題：首先，它被認為是為商業 AI 公司進行「免費廣告」；其次，開發者群體普遍未能完全遵循此指南；再者，標籤本身增加了閱讀補丁訊息的雜亂度，且缺乏明確的上下文說明 AI 是如何輔助的（例如僅用於測試或程式碼審查）。Jeff Layton 甚至提出了移除此歸屬要求的補丁。目前，該討論仍在 Linux 核心郵件清單（LKML）進行，尚未有 Linus Torvalds 的最終定論，預計未來將會持續討論是否精簡或完全移除此歸屬指南。",
    tags: ["Linux 核心", "AI/LLM", "Assisted-by", "開發流程", "Open Source", "Jeff Layton"],
    title_en: "Linux Kernel Developers Discuss Whether to Remove Attribution Tag for AI/LLM Assisted Submissions",
    summary_en: "This discussion focuses on the necessity of including an \"Assisted-by\" attribution tag when using generative AI/LLMs to write or test patches within the Linux kernel development process. Current guidelines mandate that this tag must include detailed information such as the LLM name and model version. However, developers such as Christian Brauner and Jeff Layton have raised multiple issues with the current requirement: first, it is perceived as providing \"free advertising\" for commercial AI companies; second, the developer community has generally failed to fully comply with this guideline; and third, the tag itself adds clutter to reading patch messages, and lacks clear context explaining how the AI was used (e.g., only for testing or code review). Jeff Layton even proposed a patch to remove this attribution requirement. Currently, this discussion is ongoing on the Linux Kernel Mailing List (LKML), and there has been no final decision from Linus Torvalds. It is expected that the debate over whether to streamline or completely remove this attribution guideline will continue in the future.",
    tags_en: ["Linux Kernel", "AI/LLM", "Assisted-by", "Development Process", "Open Source", "Jeff Layton"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-AI-Attribution-Again", lang: "EN" }
    ]
  },
  {
    id: "20260702-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復藍牙 L2CAP 服務的 Use-After-Free 漏洞 (CVE-2026-53357)",
    summary: "本漏洞為 Linux 核心中的藍牙（Bluetooth）子系統所發現的 Use-After-Free (UAF) 缺陷，主要發生在 `l2cap_sock_cleanup_listen()` 與 `l2cap_conn_del()` 函數之間的競態條件。當系統在監聽 Socket 關閉的過程中，如果同時發生了 HCI (Host Controller Interface) 斷開連線，可能導致子 Socket (child sk) 在被釋放前，被多個路徑（特別是 `l2cap_sock_kill`）重複處理或釋放，造成記憶體資源的誤用。此問題影響了使用藍牙功能的 Linux 系統。修復後，系統能更安全地處理監聽 Socket 關閉與 HCI 斷連的競態情況。開發者應確保使用最新版本的 Linux 核心來修補此漏洞，以避免潛在的系統不穩定性或安全風險。",
    tags: ["Linux 核心", "Bluetooth", "L2CAP", "Use-After-Free", "CVE-2026-53357", "KASAN"],
    title_en: "Linux Kernel Fixes Use-After-Free Vulnerability in Bluetooth L2CAP Service (CVE-2026-53357)",
    summary_en: "This vulnerability is a Use-After-Free (UAF) flaw found in the Bluetooth subsystem of the Linux kernel, primarily occurring due to a race condition between the `l2cap_sock_cleanup_listen()` and `l2cap_conn_del()` functions. When the system is in the process of monitoring a socket closure, if an HCI (Host Controller Interface) disconnection occurs simultaneously, it may lead to the child socket (child sk) being redundantly processed or freed by multiple paths (especially `l2cap_sock_kill`) before it is properly released, causing memory resource misuse. This issue affects Linux systems utilizing Bluetooth functionality. After the fix, the system can more safely handle the race condition between socket closure monitoring and HCI disconnection. Developers should ensure the use of the latest Linux kernel version to patch this vulnerability, thereby avoiding potential system instability or security risks.",
    tags_en: ["Linux Kernel", "Bluetooth", "L2CAP", "Use-After-Free", "CVE-2026-53357", "KASAN"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53357", lang: "EN" }
    ]
  },
  {
    id: "20260702-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：藍牙 L2CAP 服務的通道關閉時序競態漏洞 (CVE-2026-53358)",
    summary: "本漏洞存在於 Linux 核心的藍牙 L2CAP 服務中，涉及通道（channel）在清理（cleanup）過程中的時序競態問題。當呼叫 `l2cap_chan_close()` 移除通道時，必須在 `conn->lock` 保護下執行。然而，`cleanup_listen()` 函數是在父級的 `sk_lock` 下運行的，直接呼叫 `l2cap_chan_close()` 會導致鎖定順序被反轉，違反了既定的 `conn->lock` -> `chan->lock` -> `sk_lock` 順序。修補方案是改為使用 `l2cap_chan_timeout` 搭配零延遲排程，以非同步方式關閉通道。由於計時器處理程序已經正確地獲取了 `conn->lock` 和 `chan->lock`，從而解決了鎖定順序問題。此修補確保了在通道關閉和資源清理的過程中，多個執行緒間的協調和資源釋放是正確且安全的。",
    tags: ["Linux 核心", "藍牙", "L2CAP", "CVE-2026-53358", "時序競態", "Kernel"],
    title_en: "Linux Kernel Patch: Race Condition Vulnerability in Bluetooth L2CAP Service Channel Closure (CVE-2026-53358)",
    summary_en: "This vulnerability exists in the Bluetooth L2CAP service within the Linux kernel, involving a race condition during the channel cleanup process. When calling `l2cap_chan_close()` to remove a channel, this operation must be performed under the protection of `conn->lock`. However, the `cleanup_listen()` function operates under the parent's `sk_lock`, and directly calling `l2cap_chan_close()` results in an inversion of the locking order, violating the established `conn->lock` -> `chan->lock` -> `sk_lock` sequence. The patch solution is to use `l2cap_chan_timeout` combined with zero-delay scheduling to asynchronously close the channel. Since the timer procedure correctly acquires both `conn->lock` and `chan->lock`, this resolves the locking order issue. This fix ensures that coordination and resource release between multiple threads are correct and safe during channel closure and resource cleanup.",
    tags_en: ["Linux Kernel", "Bluetooth", "L2CAP", "CVE-2026-53358", "Race Condition", "Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53358", lang: "EN" }
    ]
  },
  {
    id: "20260702-009",
    trackers: ["security"],
    category: "法規與標準",
    title: "澳洲個體網路犯罪風險降低，但中小企業面臨法律與人力資源壓力增加",
    summary: "根據澳洲犯罪學協會（AIC）的調查，2025年澳洲個體遭受網路犯罪的比例（45.1%）相較前一年有所下降，且受害者普遍報告的經濟損失較低。這歸因於銀行、作業系統和大型平台等機構提升了背景防禦機制（如瀏覽器沙盒、自動修補和帳戶監控）。然而，文章指出，保護的責任正在從個人轉移到平台層面。對於經營或管理中小企業（SMBs）的個人而言，網路犯罪的後果卻更為嚴重。受訪者報告，網路犯罪導致的法律問題和人力資源成本顯著增加。專家分析指出，這主要是由於法律和監管壓力（如Medibank事件和《網路安全法案》的72小時勒索軟體報告規定）的收緊，迫使企業必須證明其在事件發生時的預防和應對能力，使得企業的「不當行為」難以隱藏，從而提高了營運風險。",
    tags: ["澳洲", "中小企業", "網路犯罪", "法律責任", "監管壓力", "AIC"],
    title_en: "Australian Individual Cybercrime Risk Decreases, But SMEs Face Increased Legal and Human Resource Pressure",
    summary_en: "According to a survey by the Australian Institute of Criminology (AIC), the proportion of Australian individuals experiencing cybercrime in 2025 (45.1%) has decreased compared to the previous year, and victims generally report lower economic losses. This is attributed to institutions such as banks, operating systems, and large platforms enhancing background defense mechanisms (such as browser sandboxing, automatic patching, and account monitoring). However, the article points out that the responsibility for protection is shifting from the individual to the platform level. For individuals who operate or manage Small to Medium-sized Businesses (SMBs), the consequences of cybercrime are even more severe. Interviewees report a significant increase in legal issues and human resource costs resulting from cybercrime. Experts analyze that this is primarily due to tightening legal and regulatory pressures (such as the Medibank incident and the 72-hour ransomware reporting requirement under the Cybersecurity Act), forcing businesses to prove their prevention and response capabilities at the time of an incident, making it difficult for corporate 'misconduct' to be hidden, thereby increasing operational risk.",
    tags_en: ["Australia", "SMB", "Cybercrime", "Legal Liability", "Regulatory Pressure", "AIC"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-analytics/aussies-face-reduced-cybercrime-risk-pressure-shifts-smbs", lang: "EN" }
    ]
  },
  {
    id: "20260702-010",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟確認 SharePoint RCE 漏洞已納入 CISA KEV 清單，強調利用風險雖低但仍需高度警惕",
    summary: "美國網路安全和基礎設施安全局（CISA）已將針對 SharePoint 的遠端程式碼執行（RCE）漏洞納入其關鍵漏洞與擴散（KEV）清單。儘管微軟（Microsoft）先前曾表示該漏洞的利用可能性較低，但 CISA 的行動提升了業界對此漏洞的關注度。此漏洞影響的產品為 SharePoint，屬於嚴重的遠端程式碼執行漏洞，攻擊者可利用此漏洞在未經授權的情況下執行程式碼。實務上，這提醒企業必須對內部部署的 SharePoint 系統進行最高級別的修補和監控，即使廠商評估的風險較低，也應將其視為高優先級的資安威脅。建議組織應立即檢查並修補所有受影響的 SharePoint 實例，並強化網路邊界防禦，以應對潛在的零日攻擊。",
    tags: ["Microsoft", "SharePoint", "RCE", "CISA", "KEV", "漏洞"],
    title_en: "Microsoft Confirms SharePoint RCE Vulnerability Added to CISA KEV List, Emphasizing High Vigilance Despite Low Exploitation Risk",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has added a Remote Code Execution (RCE) vulnerability affecting SharePoint to its Known Exploited Vulnerabilities (KEV) catalog. Although Microsoft previously stated that the exploitability of this vulnerability was low, CISA's action has heightened industry concern regarding this flaw. The vulnerability affects SharePoint and constitutes a severe RCE flaw, allowing attackers to execute code without authorization. Practically, this serves as a reminder that enterprises must apply the highest level of patching and monitoring to their internally deployed SharePoint systems. Even if the vendor assesses the risk as low, it should be treated as a high-priority cybersecurity threat. Organizations are advised to immediately check and patch all affected SharePoint instances, and to strengthen network perimeter defenses to counter potential zero-day attacks.",
    tags_en: ["Microsoft", "SharePoint", "RCE", "CISA", "KEV", "vulnerability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/02/microsoft-said-exploitation-was-less-likely-but-cisa-just-added-sharepoint-rce-to-kev-list/5265886", lang: "EN" }
    ]
  },
  {
    id: "20260702-011",
    trackers: ["os"],
    category: "Windows",
    title: "微軟Copilot鍵引發爭議：用戶反彈要求移除，官方承認可重新映射為右Ctrl",
    summary: "微軟近期在社群媒體上宣傳Copilot鍵具備「萬能」功能，但此舉引發了用戶強烈反彈。用戶群體普遍認為此按鍵是多餘的「AI垃圾」，並要求微軟移除它，甚至呼籲恢復右Ctrl鍵的功能。事實上，微軟此前已承認Copilot鍵對部分用戶的生產力與無障礙工作流程造成了「中斷」。微軟的修補建議是透過預計於今年晚些時候的Windows 11更新，允許用戶將Copilot鍵重新映射（remap）為右Ctrl或上下文選單鍵。文章指出，Copilot鍵的爭議已持續多年，且其功能目前只是開啟一個依賴完整Edge瀏覽器的網頁應用程式，不如Apple正在為macOS重構的Siri或Android上的Gemini等原生體驗。建議用戶若未體驗到Copilot的實用性，應考慮將其重新映射為更符合傳統工作流程的按鍵。",
    tags: ["Microsoft", "Copilot", "Windows 11", "右Ctrl", "按鍵映射", "AI 介面"],
    title_en: "Microsoft Copilot Key Sparks Controversy: Users Demand Removal, Official Acknowledges Remapping to Right Ctrl",
    summary_en: "Microsoft recently promoted the Copilot key on social media, claiming it has 'universal' functionality, but this move has sparked strong user backlash. Users generally view this key as superfluous 'AI clutter' and are demanding Microsoft remove it, even calling for the restoration of the right Ctrl key's function. In fact, Microsoft has previously acknowledged that the Copilot key has caused 'disruption' to the productivity and accessibility workflow for some users. Microsoft's proposed fix is to allow users to remap the Copilot key to right Ctrl or the context menu key through an expected Windows 11 update later this year. The article notes that the controversy surrounding the Copilot key has persisted for years, and its current function merely opens a web application dependent on the full Edge browser, making it less robust than native experiences like Apple's Siri or Gemini on Android, which are being rebuilt for macOS. It is recommended that users who have not found Copilot useful consider remapping it to a key that aligns better with traditional workflows.",
    tags_en: ["Microsoft", "Copilot", "Windows 11", "Right Ctrl", "Key Mapping", "AI Interface"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/02/microsoft-brags-copilot-key-has-main-character-energy-on-windows-11-but-you-can-soon-remap-it", lang: "EN" }
    ]
  },
  {
    id: "20260702-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CubeSpace CW0057反應輪韌體漏洞：物理存取可植入惡意韌體，建議升級至 5.0.20",
    summary: "CubeSpace 的 CW0057 反應輪設備，其韌體版本早於 5.0.20，存在「不當驗證加密簽章」（CVE-2026-13743）的漏洞。此漏洞屬於 CWE-347，若攻擊者能取得實體存取權，可繞過驗證機制，在設備上上傳任意惡意韌體。該漏洞的 CVSS 3.1 分數為 6.1（中等），CVSS 4.0 分數為 3.3（低）。由於攻擊必須具備物理存取權，且設備的 Bootloader 獨立運作並可恢復，實務風險評估為低。CubeSpace 已發布 5.0.20 版本，該版本引入了加密驗證的安全啟動功能，但用戶必須手動啟用此功能。建議用戶立即升級至 5.0.20 或更高版本，並務必啟用 signed-boot 功能，特別是完全不可變的模式，以確保設備的韌體完整性。",
    tags: ["CubeSpace", "CW0057 Reaction Wheel", "CVE-2026-13743", "韌體漏洞", "物理存取", "加密簽章"],
    title_en: "CubeSpace CW0057 Reaction Wheel Firmware Vulnerability: Physical Access Allows Malicious Firmware Injection, Upgrade to 5.0.20 Recommended",
    summary_en: "CubeSpace CW0057 Reaction Wheel devices with firmware versions prior to 5.0.20 contain a vulnerability, 'Improper Validation of Cryptographic Signature' (CVE-2026-13743). This vulnerability falls under CWE-347. If an attacker gains physical access, they can bypass the validation mechanism and upload arbitrary malicious firmware onto the device. The CVSS 3.1 score for this vulnerability is 6.1 (Medium), and the CVSS 4.0 score is 3.3 (Low). Because the attack requires physical access and the device's Bootloader operates independently and is recoverable, the practical risk assessment is low. CubeSpace has released version 5.0.20, which introduces a secure boot function with cryptographic validation, but users must manually enable this feature. Users are advised to immediately upgrade to version 5.0.20 or higher, and must ensure the signed-boot function is enabled, especially in the immutable mode, to guarantee the device's firmware integrity.",
    tags_en: ["CubeSpace", "CW0057 Reaction Wheel", "CVE-2026-13743", "Firmware Vulnerability", "Physical Access", "Cryptographic Signature"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-183-02", lang: "EN" }
    ]
  },
  {
    id: "20260702-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Gardyn IoT Hub 遭多重漏洞攻擊：硬編碼密鑰、日誌外洩及遠端控制風險",
    summary: "資安機構發佈警示，指出 Gardyn IoT Hub 設備面臨多個嚴重漏洞，可能允許未經身份驗證的使用者存取並控制設備。受影響的產品包括 Gardyn Home Firmware、Studio Firmware 及 Cloud API 版本低於 2.12.2026。其中，CVE-2026-13768 漏洞因使用硬編碼憑證（Hard-coded Credentials），允許攻擊者透過竊取特權 iothubowner 密鑰，執行任意指令，甚至可能橫向移動至用戶網路的其他設備。另有 CVE-2026-55726 漏洞，導致用於設備日誌的 Azure Blob Storage 容器可公開列出，使攻擊者能存取所有設備日誌。所有漏洞均被評為極高風險（CVSS 3.1 分數為 10）。Gardyn 已更新其 IoT Hub 基礎設施以修復這些漏洞，建議用戶確保設備具備網路連線，以便自動下載最新的韌體更新，並更新相關行動應用程式。",
    tags: ["Gardyn", "IoT Hub", "CVE-2026-13768", "CVE-2026-55726", "硬編碼憑證", "OT/ICS"],
    title_en: "Gardyn IoT Hub Targeted by Multiple Vulnerabilities: Hardcoded Keys, Log Leakage, and Remote Control Risks",
    summary_en: "A cybersecurity organization has issued an alert regarding multiple severe vulnerabilities in Gardyn IoT Hub devices, which could allow unauthenticated users to access and control the devices. Affected products include Gardyn Home Firmware, Studio Firmware, and Cloud API versions lower than 2.12.2026. Specifically, CVE-2026-13768, due to the use of hardcoded credentials, allows attackers to execute arbitrary commands by stealing the privileged iothubowner key, potentially enabling lateral movement to other devices on the user's network. Additionally, CVE-2026-55726 causes the Azure Blob Storage container used for device logging to be publicly listable, allowing attackers to access all device logs. All vulnerabilities are rated as critical (CVSS 3.1 score of 10). Gardyn has updated its IoT Hub infrastructure to fix these vulnerabilities and recommends that users ensure the device has network connectivity to automatically download the latest firmware updates, and to update related mobile applications.",
    tags_en: ["Gardyn", "IoT Hub", "CVE-2026-13768", "CVE-2026-55726", "Hardcoded Credentials", "OT/ICS"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-183-03", lang: "EN" }
    ]
  },
  {
    id: "20260702-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕！ST Engineering iDirect iQ-Series 終端機面臨兩大漏洞，可能遭未授權存取或服務中斷",
    summary: "ST Engineering iDirect 發布警示，指出其 iQ-Series 終端機（包含 Evolution、3315 及 9 系列）的舊版本（<=4.5.2.1）存在兩項關鍵漏洞：CVE-2026-38059 與 CVE-2026-38057。CVE-2026-38059 允許未經身份驗證的攻擊者透過 /api/identity 等 API 端點，竊取設備的序列號、MAC 位址、DID 及 TPK 等敏感資訊，可能導致終端機偽裝或網路偵察。而 CVE-2026-38057 則因缺乏 CSRF token 驗證，允許遠端攻擊者透過惡意網頁，強制執行跨站 POST 請求，造成設備立即重啟，持續造成服務中斷（DoS）。建議使用者務必升級軟體至 4.5.2.2 或更高版本，並限制管理介面僅供信任網路使用，以降低被攻擊風險。",
    tags: ["ST Engineering iDirect", "iQ-Series Terminals", "CVE-2026-38059", "CVE-2026-38057", "CSRF", "OT/ICS 設備漏洞"],
    title_en: "Warning! ST Engineering iDirect iQ-Series Terminals Face Two Vulnerabilities, Potentially Leading to Unauthorized Access or Service Disruption",
    summary_en: "ST Engineering iDirect has issued a warning regarding two critical vulnerabilities in older versions (<=4.5.2.1) of its iQ-Series terminals (including Evolution, 3315, and 9 series): CVE-2026-38059 and CVE-2026-38057. CVE-2026-38059 allows unauthenticated attackers to steal sensitive device information such as serial numbers, MAC addresses, DID, and TPK via API endpoints like /api/identity, potentially leading to device spoofing or network reconnaissance. Meanwhile, CVE-2026-38057, due to the lack of CSRF token validation, allows remote attackers to force Cross-Site POST requests through malicious web pages, causing the device to immediately reboot and continuously causing service disruption (DoS). Users are strongly advised to upgrade the software to version 4.5.2.2 or higher, and to restrict the management interface to trusted networks to mitigate the risk of attack.",
    tags_en: ["ST Engineering iDirect", "iQ-Series Terminals", "CVE-2026-38059", "CVE-2026-38057", "CSRF", "OT/ICS 設備漏洞"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-183-01", lang: "EN" }
    ]
  },
  {
    id: "20260702-015",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "蘋果回應 AI 攻擊加速趨勢，改變傳統修補政策，推動更頻繁的資安更新",
    summary: "隨著人工智慧（AI）技術加速惡意駭客工具的開發，蘋果公司（Apple）正在調整其傳統的資安修補政策。過去，蘋果傾向將大型的漏洞修補集中在作業系統（OS）的主要版本更新中。然而，鑑於 AI 使得攻擊者能夠在補丁公開前就常規地利用零日漏洞（Zero-days），蘋果決定開始更頻繁地發布與主要版本更新脫鉤的資安更新，以縮短補丁發布與用戶手中實際部署之間的時間間隔。專家指出，雖然更快的修補週期是必要的，但這僅是單點防禦，無法完全彌補漏洞被利用的風險。此外，文章也指出，當前 iOS 的資安模型缺乏類似 XDR 或 EDR 等可供第三方建構的完整安全框架，且許多企業仍傾向採用 N-1 修補策略，使得設備在資安層面仍存在結構性漏洞。",
    tags: ["Apple", "AI 攻擊", "資安修補", "零日漏洞", "iOS", "修補週期"],
    title_en: "Apple Responds to Accelerating AI Attack Trends by Changing Traditional Patching Policy and Promoting More Frequent Security Updates",
    summary_en: "As Artificial Intelligence (AI) technology accelerates the development of malicious hacking tools, Apple is adjusting its traditional security patching policy. Previously, Apple tended to consolidate large vulnerability patches into major operating system (OS) version updates. However, given that AI enables attackers to routinely exploit Zero-day vulnerabilities even before patches are publicly available, Apple has decided to begin issuing more frequent security updates decoupled from major version updates, aiming to shorten the time gap between patch release and actual deployment on user devices. Experts point out that while a faster patching cycle is necessary, this only constitutes point defense and cannot fully mitigate the risk of vulnerabilities being exploited. Furthermore, the article notes that the current iOS security model lacks a comprehensive security framework for third-party construction, similar to XDR or EDR, and that many enterprises still favor an N-1 patching strategy, leaving structural security vulnerabilities in devices.",
    tags_en: ["Apple", "AI Attacks", "Security Patching", "Zero-day Vulnerabilities", "iOS", "Patch Cycle"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/apple-patch-policy-ai", lang: "EN" }
    ]
  },
  {
    id: "20260702-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FortiBleed 攻擊鏈揭露：駭客利用 FortiGate 憑證，與 Inc、Lynx 勒索軟體集團合作進行攻擊",
    summary: "安全研究機構 SOCRadar 揭露一項名為「FortiBleed」的全球性攻擊活動。該活動最初鎖定數千台 Fortinet FortiGate 防火牆，透過 Golang 嗅探器竊取憑證，並建立初始存取點（IAB）。研究發現，執行此活動的駭客群組，正與 Inc Ransom 和 Lynx 兩家勒索軟體即服務（RaaS）集團合作。駭客利用這些竊取的憑證，已在 409 個目標上達成管理員級別存取，其中 354 個目標完成了完整的攻擊鏈，包括 VPN 滲透、存取網域控制器及網域管理員權限。此外，攻擊者還被發現正在利用 Nextcloud 的一個未公開零日漏洞，以擴展其入侵範圍。這顯示攻擊者正在將竊取的邊界安全設備存取權，轉化為高度可變現的勒索軟體部署風險，組織應將此視為嚴重的「前勒索入侵風險」。",
    tags: ["FortiGate", "FortiBleed", "SOCRadar", "Inc Ransom", "Lynx", "勒索軟體", "零日漏洞"],
    title_en: "FortiBleed Attack Chain Revealed: Hackers Use FortiGate Credentials in Collaboration with Inc and Lynx Ransomware Groups",
    summary_en: "Security research firm SOCRadar has uncovered a global attack campaign dubbed \"FortiBleed.\" This campaign initially targeted thousands of Fortinet FortiGate firewalls, using a Golang sniffer to steal credentials and establish initial access points (IAB). The research found that the threat actors executing this campaign are collaborating with two Ransomware-as-a-Service (RaaS) groups: Inc Ransom and Lynx. Using these stolen credentials, the attackers achieved administrator-level access on 409 targets, with 354 targets completing a full attack chain, including VPN penetration, access to domain controllers, and domain administrator privileges. Furthermore, attackers were found exploiting an undisclosed zero-day vulnerability in Nextcloud to expand their intrusion scope. This demonstrates that the attackers are converting stolen edge security device access into highly monetizable ransomware deployment risk, which organizations should view as a severe \"pre-ransomware intrusion risk.\"",
    tags_en: ["FortiGate", "FortiBleed", "SOCRadar", "Inc Ransom", "Lynx", "Ransomware", "Zero-day vulnerability"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/fortibleed-actors-inc-lynx-ransomware-gangs", lang: "EN" }
    ]
  },
  {
    id: "20260702-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客冒充國際刑警發送釣魚郵件，以「調查證據」為誘餌攻擊小型企業",
    summary: "一場新型勒索軟體活動正在全球範圍內，特別是針對小型企業（SMBs），利用社交工程手法進行攻擊。攻擊者會發送冒充國際刑警（Interpol）的釣魚郵件，聲稱受害者組織正因可疑活動接受調查，並要求受害者下載一個偽裝成證據的密碼保護壓縮檔。一旦開啟，該壓縮檔會釋放一個勒索軟體載荷，該載荷會加密本地系統，並引導受害者透過 Tox 平台聯繫攻擊者進行贖金談判。分析指出，該勒索軟體樣本雖然基礎，但已具備高度的欺騙性。此次攻擊凸顯了攻擊者不再需要複雜的工具，僅憑結合「緊急性」和「權威性」的社交工程，就能對小型企業造成重大威脅。文章提醒，小型企業因缺乏專業資安團隊和預算，極易成為目標，應提高警覺，警惕任何要求下載「調查證據」的外部通知。",
    tags: ["勒索軟體", "社交工程", "國際刑警", "釣魚郵件", "小型企業", "Tox 平台", "Bitdefender"],
    title_en: "Hackers Impersonating Interpol Send Phishing Emails Using 'Evidence Investigation' as Bait to Attack Small Businesses",
    summary_en: "A new ransomware campaign is operating globally, particularly targeting small businesses (SMBs), utilizing social engineering techniques. Attackers send phishing emails impersonating Interpol, claiming the victim organization is under investigation for suspicious activity, and demanding the victim download a password-protected compressed file disguised as evidence. Once opened, the compressed file releases a ransomware payload that encrypts the local system and directs the victim to contact the attackers via the Tox platform for ransom negotiation. Analysis indicates that while the ransomware sample is basic, it possesses a high degree of deception. This attack highlights that attackers no longer require complex tools; merely combining 'urgency' and 'authority' through social engineering is enough to pose a significant threat to small businesses. The article reminds readers that small businesses, due to a lack of professional cybersecurity teams and budget, are extremely vulnerable targets and should raise awareness, being wary of any external notification demanding the download of 'investigation evidence'.",
    tags_en: ["Ransomware", "Social Engineering", "Interpol", "Phishing Email", "Small Business", "Tox Platform", "Bitdefender"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/attackers-use-interpol-lure-target-small-businesses", lang: "EN" }
    ]
  },
  {
    id: "20260702-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "MariaDB 叢集狀態變更漏洞 CVE-2026-49261 評分滿分，可透過外部指令接管資料庫",
    summary: "資安研究人員詳細揭露了關聯式資料庫 MariaDB 的重大漏洞 CVE-2026-49261。此漏洞的 CVSS 嚴重性評分達到滿分 10.0。該漏洞源於 MariaDB 叢集狀態變更時，執行外部通知指令碼的機制 `wsrep_notify_cmd`。攻擊者可能透過嵌入惡意 Shell 指令到新加入節點的名稱中，從而執行指令，進而接管整個資料庫系統。雖然 MariaDB 已於六月初修補，但當時僅簡要說明，直到近期才補充完整漏洞細節。用戶應立即升級至已修補版本，包括 10.6.27、10.11.18、11.4.12、11.8.8 或 12.3.2 等。若無法立即升級，建議停用 `wsrep_notify_cmd` 功能，並嚴格限制資料庫叢集節點的存取權限，同時持續監控是否有非授權的指令執行或可疑的節點加入叢集。",
    tags: ["MariaDB", "CVE-2026-49261", "資料庫", "叢集", "wsrep_notify_cmd", "SQL 注入"],
    title_en: "MariaDB Cluster State Change Vulnerability CVE-2026-49261 Scores Full Marks, Allows Database Takeover via External Commands",
    summary_en: "Security researchers have detailed a critical vulnerability, CVE-2026-49261, in the relational database MariaDB. This vulnerability achieved a CVSS severity score of 10.0. The flaw originates from the `wsrep_notify_cmd` mechanism, which executes external notification scripts during MariaDB cluster state changes. An attacker could potentially execute commands by embedding malicious Shell instructions into the name of a newly joined node, thereby taking over the entire database system. Although MariaDB patched this in early June, the details were initially only briefly mentioned, with full vulnerability details only added recently. Users should immediately upgrade to patched versions, including 10.6.27, 10.11.18, 11.4.12, 11.8.8, or 12.3.2. If immediate upgrading is not possible, it is recommended to disable the `wsrep_notify_cmd` feature, strictly limit access permissions to the database cluster nodes, and continuously monitor for unauthorized command execution or suspicious node joining the cluster.",
    tags_en: ["MariaDB", "CVE-2026-49261", "Database", "Cluster", "wsrep_notify_cmd", "SQL Injection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177049", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260702-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安警訊：駭客利用Azure CLI與ROPC程序，對Microsoft 365進行大規模密碼噴灑攻擊",
    summary: "資安業者Huntress發布報告，揭露一場大規模針對Microsoft 365帳號的密碼噴灑攻擊。在6月12日至26日期間，Huntress偵測到超過8,100萬次登入嘗試，並確認駭客成功入侵了64個機構至少78個帳號。攻擊者利用已外洩的帳號密碼，透過Azure CLI工具，並藉由ROPC（Resource Owner Password Credentials）OAuth驗證流程，對M365帳號進行登入嘗試。此攻擊的關鍵在於，攻擊者能夠繞過部分企業設置的多因素驗證（MFA）與條件式存取政策（CAP）。Huntress指出，此次事件凸顯了許多企業MFA配置的漏洞，例如僅針對特定應用程式或用戶群組啟用MFA，或條件式存取政策未強制執行。建議企業應強制且正確配置MFA，並審視OAuth流程，以大幅降低被攻擊的風險。",
    tags: ["Microsoft 365", "Azure CLI", "密碼噴灑", "ROPC", "MFA", "條件式存取"],
    title_en: "Cybersecurity Alert: Hackers Use Azure CLI and ROPC to Launch Large-Scale Password Spraying Attack Against Microsoft 365",
    summary_en: "Security firm Huntress released a report revealing a large-scale password spraying attack targeting Microsoft 365 accounts. Between June 12 and June 26, Huntress detected over 81 million login attempts and confirmed that hackers successfully compromised at least 78 accounts across 64 organizations. The attackers utilized leaked account credentials, employing the Azure CLI tool and the ROPC (Resource Owner Password Credentials) OAuth authentication flow to attempt logins to M365 accounts. The critical aspect of this attack is that the attackers were able to bypass certain enterprise-configured Multi-Factor Authentication (MFA) and Conditional Access Policies (CAP). Huntress points out that this incident highlights vulnerabilities in many corporate MFA configurations, such as enabling MFA only for specific applications or user groups, or the failure to enforce Conditional Access Policies. It is recommended that enterprises enforce and correctly configure MFA, and review their OAuth processes, to significantly reduce the risk of attack.",
    tags_en: ["Microsoft 365", "Azure CLI", "Password Spraying", "ROPC", "MFA", "Conditional Access"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177044", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260702-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕！Progress LoadMaster 遭利用重大漏洞 CVE-2026-8037，遠端指令注入風險極高",
    summary: "資安業者 eSentire 於 6 月 30 日發出警示，指出 Progress 的負載平衡與應用交付控制器產品 Kemp LoadMaster 存在重大漏洞 CVE-2026-8037。此漏洞屬於作業系統指令注入類型的安全缺陷，CVSS 嚴重性評分高達 9.8 分。問題根源在於 LoadMaster 對使用者輸入的過濾機制不足，使得未經身分驗證的遠端攻擊者能夠在設備上執行任意系統指令。由於該產品廣泛用於企業網路的對外入口，一旦被利用，極易成為攻擊者進行橫向移動的跳板。eSentire 自 6 月 29 日起已觀察到攻擊者嘗試利用此漏洞，顯示其已進入實際攻擊階段。Progress 已於 6 月初發布修補版本，建議用戶應立即將系統升級至 7.2.63.2 (GA版) 或 7.2.54.18 (LTSF版)，以降低遭受攻擊的風險。",
    tags: ["Progress", "Kemp LoadMaster", "CVE-2026-8037", "指令注入", "負載平衡", "遠端攻擊"],
    title_en: "Warning! Progress LoadMaster has critical vulnerability CVE-2026-8037, posing high risk of remote command injection",
    summary_en: "Cybersecurity firm eSentire issued an alert on June 30th, pointing out a critical vulnerability, CVE-2026-8037, in Progress's Kemp LoadMaster product, which is a load balancing and application delivery controller. This vulnerability is an operating system command injection type security flaw, with a CVSS severity score of 9.8. The root cause is insufficient filtering of user input by LoadMaster, allowing unauthenticated remote attackers to execute arbitrary system commands on the device. Since this product is widely used as the external entry point for enterprise networks, exploitation could easily turn it into a jumpboard for attackers performing lateral movement. eSentire has observed attackers attempting to exploit this vulnerability since June 29th, indicating that it has entered the active attack phase. Progress released a patch version in early June, and users are advised to immediately upgrade their systems to 7.2.63.2 (GA version) or 7.2.54.18 (LTSF version) to mitigate the risk of attack.",
    tags_en: ["Progress", "Kemp LoadMaster", "CVE-2026-8037", "Command Injection", "Load Balancing", "Remote Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177042", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260702-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FortiBleed憑證外洩活動被勒索軟體INC Ransom與Lynx利用，警惕憑證竊取風險",
    summary: "資安公司InfoStealers揭露大規模憑證外洩事件FortiBleed，竊取了全球約7.4萬臺Fortinet防火牆與VPN設備的登入憑證。威脅情資公司SOCRadar觀察到，利用FortiBleed憑證的攻擊者，積極登入INC Ransom與Lynx兩款勒索軟體的談判介面，與受害組織討論贖金細節。此外，攻擊者使用的目標與受害者資料，甚至與INC Ransom公開的資料集中的受害者名單一致。此事件顯示，憑證竊取活動已直接轉化為實質的勒索攻擊，攻擊者利用這些外洩憑證進行目標識別與威脅擴散。建議用戶應立即審查並更換所有可能受影響的設備憑證，並強化多因素驗證機制，以降低憑證被竊取後的風險。",
    tags: ["FortiBleed", "憑證竊取", "勒索軟體", "INC Ransom", "Lynx", "Fortinet"],
    title_en: "FortiBleed Certificate Leak Used by Ransomware INC Ransom and Lynx; Beware of Credential Theft Risks",
    summary_en: "Security firm InfoStealers revealed a large-scale certificate leak event called FortiBleed, which compromised login credentials for approximately 74,000 Fortinet firewalls and VPN devices globally. Threat intelligence firm SOCRadar observed attackers actively logging into the negotiation interfaces of two ransomware strains, INC Ransom and Lynx, using the FortiBleed credentials. Furthermore, the targets and victim data used by the attackers matched the victim list published by INC Ransom. This incident demonstrates that credential theft has directly translated into tangible ransomware attacks, with attackers utilizing these leaked credentials for target identification and threat expansion. Users are advised to immediately review and change all potentially affected device certificates, and to strengthen multi-factor authentication mechanisms to mitigate the risk following credential theft.",
    tags_en: ["FortiBleed", "Credential Theft", "Ransomware", "INC Ransom", "Lynx", "Fortinet"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177041", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260702-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FBI與Google聯手沒收NetNut代理服務平台，打擊Popa殭屍網路",
    summary: "聯邦調查局（FBI）宣布與產業夥伴合作，沒收了與NetNut相關的數百個網域，該服務是一個由以色列公司Alarum Technologies運營的龐大住宅代理服務。此行動發生在安全公司指出NetNut與Popa殭屍網路有關之後。Popa殭屍網路由至少兩百萬台設備組成，這些設備（包括智慧電視和串流盒）被惡意軟體感染，成為「隨時開啟」的住宅代理節點。攻擊者利用NetNut的服務來傳輸濫用和侵入性的網路流量，例如內容爬取、廣告詐欺和帳號接管。Google威脅情報小組（GTIG）指出，這些惡意行為者利用NetNut來隱藏其原始IP地址，進行密碼噴灑攻擊，甚至可能透過受感染的設備存取同一家庭網路中的其他私有設備。Google已禁用NetNut用於惡意軟體命令與控制的帳號和服務，並分享了技術情報。專家認為，此次沒收行動對Popa殭屍網路和NetNut代理網路造成了重大打擊，但代理網路生態系統具有高度的韌性，可能透過從競爭對手處購買容量來重建。",
    tags: ["NetNut", "Popa botnet", "Alarum Technologies", "住宅代理服務", "殭屍網路", "FBI", "Google Threat Intelligence Group"],
    title_en: "FBI and Google Seize NetNut Proxy Service Platform to Combat Popa Botnet",
    summary_en: "The Federal Bureau of Investigation (FBI) announced a collaboration with industry partners to seize hundreds of domains associated with NetNut, a massive residential proxy service operated by the Israeli company Alarum Technologies. This action followed security company reports linking NetNut to the Popa botnet. The Popa botnet comprises at least two million devices, including smart TVs and streaming boxes, which have been infected with malware and used as 'always-on' residential proxy nodes. Attackers utilized NetNut's service to transmit abusive and intrusive network traffic, such as content scraping, ad fraud, and account takeover. Google Threat Intelligence Group (GTIG) noted that these malicious actors used NetNut to mask their original IP addresses, conduct password spraying attacks, and potentially access other private devices within the same home network via compromised equipment. Google has disabled NetNut accounts and services used for malware command and control, and shared technical intelligence. Experts believe that this seizure significantly disrupts the Popa botnet and NetNut's proxy network, but the proxy network ecosystem is highly resilient and may rebuild by purchasing capacity from competitors.",
    tags_en: ["NetNut", "Popa botnet", "Alarum Technologies", "Residential Proxy Service", "Botnet", "FBI", "Google Threat Intelligence Group"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet", lang: "EN" }
    ]
  },
  {
    id: "20260702-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google 聯手 FBI 癱瘓 NetNut 住宅代理網路，限制駭客利用家庭設備進行流量轉發",
    summary: "Google 威脅情報小組（GTIG）與 FBI 等合作，成功大幅縮減了大型住宅代理網路 NetNut（亦稱 Popa）的可用設備池。NetNut 是一個透過家庭設備（如智慧電視、串流盒子）建立的網路，駭客可付費利用這些真實家庭 IP 位址來轉發流量，使攻擊行為看起來像正常的家庭瀏覽，規避安全工具的偵測。這些設備一旦成為「出口節點」，不僅讓陌生人透過你的網路進行流量，還可能成為大型攻擊殭屍網路（如 Mirai）的組成部分。Google 警告，用戶若看到任何要求「分享閒置頻寬」的應用程式，應高度警惕。修補建議包括：僅使用官方應用商店，檢查 VPN 或代理程式的權限；啟用 Google Play Protect；並購買知名品牌的智慧設備，避免使用不知名品牌產品。",
    tags: ["Google", "NetNut", "Popa", "住宅代理網路", "殭屍網路", "家庭設備"],
    title_en: "Google and FBI Collaborate to Cripple NetNut Residential Proxy Network, Limiting Hacker Use of Home Devices for Traffic Forwarding",
    summary_en: "Google's Threat Intelligence Group (GTIG), in cooperation with the FBI and others, successfully significantly reduced the available device pool of NetNut (also known as Popa), a large residential proxy network. NetNut is a network established using home devices (such as smart TVs and streaming boxes) that hackers can pay to utilize real home IP addresses for traffic forwarding. This allows malicious activity to appear like normal home browsing, bypassing the detection of security tools. Once these devices become 'exit nodes,' they not only allow strangers to route traffic through your network but can also become part of large attack botnets (such as Mirai). Google warns users to be highly vigilant regarding any applications that request 'sharing idle bandwidth.' Remediation suggestions include: only using official app stores, checking the permissions of VPN or proxy applications; enabling Google Play Protect; and purchasing smart devices from reputable brands to avoid unknown products.",
    tags_en: ["Google", "NetNut", "Popa", "Residential Proxy Network", "Botnet", "Home Devices"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/google-disrupts-netnut-residential.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Anubis勒索軟體集團利用Citrix Bleed 2漏洞（CVE-2025-5777）進行初始入侵，並透過RMM工具進行橫向移動",
    summary: "資安研究報告揭示，與Anubis勒索軟體營運相關的駭客群組，正利用Citrix Bleed 2漏洞（CVE-2025-5777，CVSS 9.3）來取得初始存取權。該漏洞影響Citrix NetScaler ADC和Gateway，可讓攻擊者在設備配置為Gateway或AAA虛擬伺服器時繞過身份驗證。駭客利用此漏洞後，會結合使用合法遠端管理與監控（RMM）工具，如ScreenConnect、Zoho Assist等，來偽裝正常IT活動，進行橫向移動。攻擊鏈的後續步驟包括使用RDP和PsExec進行橫向移動、部署RMM工具、竊取憑證，並透過S3 Browser、rclone等工具進行資料外洩。此外，駭客還會清除或操縱系統日誌，甚至刪除加密程式，以阻礙事後分析。報告指出，Anubis作為一個RaaS集團，除了利用CVE-2025-5777外，還會利用有效的VPN憑證，並結合其他進階技術，如BYOVD零日漏洞，來擴大攻擊範圍，威脅範圍涵蓋醫療、金融、製造等關鍵產業。",
    tags: ["Anubis", "CVE-2025-5777", "Citrix", "RMM", "勒索軟體", "橫向移動"],
    title_en: "Anubis Ransomware Group Exploits Citrix Bleed 2 Vulnerability (CVE-2025-5777) for Initial Access and Lateral Movement via RMM Tools",
    summary_en: "A cybersecurity research report reveals that a hacking group associated with the Anubis ransomware operation is exploiting the Citrix Bleed 2 vulnerability (CVE-2025-5777, CVSS 9.3) to gain initial access. This vulnerability affects Citrix NetScaler ADC and Gateway, allowing attackers to bypass authentication when the device is configured as a Gateway or AAA virtual server. After exploiting this vulnerability, the attackers combine it with legitimate Remote Monitoring and Management (RMM) tools, such as ScreenConnect and Zoho Assist, to mask normal IT activity and perform lateral movement. Subsequent steps in the attack chain include using RDP and PsExec for lateral movement, deploying RMM tools, stealing credentials, and exfiltrating data using tools like S3 Browser and rclone. Furthermore, the attackers clear or manipulate system logs, and even delete encryption programs, to impede post-mortem analysis. The report indicates that Anubis, as a RaaS group, not only exploits CVE-2025-5777 but also utilizes valid VPN credentials and combines other advanced techniques, such as BYOVD zero-day vulnerabilities, to expand its attack scope, threatening critical sectors including healthcare, finance, and manufacturing.",
    tags_en: ["Anubis", "CVE-2025-5777", "Citrix", "RMM", "Ransomware", "Lateral Movement"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/ransomware-groups-turn-to-citrix-bleed.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apple「Hide My Email」服務漏洞曝光：研究人員指出隱私保護機制可被繞過",
    summary: "本週資安新聞涵蓋多種弱點，其中一項重點是 Apple 的「Hide My Email」服務存在漏洞。研究人員發現，該服務的隱私保護機制可以被繞過，導致用戶真實的電子郵件地址可能被未經授權地揭露。雖然原文未提供具體的漏洞細節或CVSS評分，但研究人員指出，在有限的測試中，所有使用此服務的地址都可被利用。此漏洞已存在一段時間，但至今仍未得到修補。用戶應留意相關安全公告，並考慮使用多層次的電子郵件驗證或專業的電子郵件隱私服務來降低風險。此外，新聞也提及了針對小企業的勒索軟體釣魚活動，以及其他如 Claude Cowork 沙盒逃逸和 GPT-5.6 Sol 攻擊能力等趨勢。",
    tags: ["Apple", "Hide My Email", "電子郵件隱私", "漏洞", "資安"],
    title_en: "Apple's 'Hide My Email' Service Vulnerability Exposed: Researchers Point Out Privacy Protection Mechanism Can Be Bypassed",
    summary_en: "This week's cybersecurity news covers various vulnerabilities, one key focus being a flaw in Apple's 'Hide My Email' service. Researchers found that the service's privacy protection mechanism can be bypassed, potentially leading to the unauthorized disclosure of a user's real email address. Although the original text does not provide specific vulnerability details or CVSS scores, researchers noted that in limited testing, all addresses using this service were exploitable. This vulnerability has existed for some time but remains unpatched. Users should pay attention to relevant security announcements and consider using multi-layered email authentication or professional email privacy services to mitigate risk. Furthermore, the news also mentions ransomware phishing campaigns targeting small businesses, as well as trends like Claude Cowork sandbox escape and GPT-5.6 Sol attack capabilities.",
    tags_en: ["Apple", "Hide My Email", "Email Privacy", "Vulnerability", "Cybersecurity"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/threatsday-ai-compute-hijacking-apple.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "APT 駭客 ToddyCat 利用 Umbrij 惡意程式，透過遠端偵錯埠竊取 Gmail OAuth 授權代碼",
    summary: "資安公司卡巴斯基（Kaspersky）發布報告指出，一個名為 ToddyCat 的進階持續性威脅（APT）駭客組織，利用名為 Umbrij 的惡意程式，專門針對企業的 Gmail 郵件通訊進行攻擊。 Umbrij 的攻擊手法是透過 OAuth 2.0 協定，在受害者已登入的 Chromium 瀏覽器會話中進行竊取。攻擊者會啟動瀏覽器進入無頭模式（headless mode），並透過遠端偵錯埠（remote debugging port）取得控制權。接著，它會模擬流程，要求一個 OAuth 授權代碼，並將其交換為存取代碼，從而獲取對 Google 帳戶資源的完整存取權限。該惡意程式的攻擊鏈利用了 DLL side-loading 等技術，透過濫用 Bitdefender 或 Visual Studio 等合法應用程式的元件來執行。 Umbrij 具備高度的偵察能力，能複製用戶的登入資料、瀏覽器快取，並利用 Puppeteer 庫模擬使用者點擊，最終從授權流程中竊取 OAuth 授權代碼。修補建議是提高對瀏覽器遠端偵錯埠的監控，並限制應用程式對敏感 API 的存取權限。",
    tags: ["ToddyCat", "Umbrij", "OAuth 2.0", "Gmail", "APT", "DLL side-loading", "Chromium"],
    title_en: "APT Hacker ToddyCat Uses Umbrij Malware to Steal Gmail OAuth Authorization Codes via Remote Debugging Port",
    summary_en: "A report released by cybersecurity company Kaspersky indicates that an Advanced Persistent Threat (APT) group named ToddyCat is utilizing malware called Umbrij, which specifically targets corporate Gmail email communications. Umbrij exploits the OAuth 2.0 protocol by stealing credentials within a victim's logged-in Chromium browser session. The attackers initiate the browser into headless mode and gain control through the remote debugging port. Subsequently, the malware simulates the process, requesting an OAuth authorization code and exchanging it for an access token, thereby obtaining full access rights to the Google account resources. The malware's attack chain utilizes techniques such as DLL side-loading, executing by abusing components of legitimate applications like Bitdefender or Visual Studio. Umbrij possesses high reconnaissance capabilities, capable of replicating user login data and browser cache, and using the Puppeteer library to simulate user clicks, ultimately stealing the OAuth authorization code from the authorization flow. Mitigation recommendations include enhancing monitoring of browser remote debugging ports and restricting application access to sensitive APIs.",
    tags_en: ["ToddyCat", "Umbrij", "OAuth 2.0", "Gmail", "APT", "DLL side-loading", "Chromium"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/toddycat-linked-umbrij-malware-abuses.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FortiBleed大規模憑證竊取活動曝光：駭客利用FortiGate設備進行勒索軟體入侵",
    summary: "資安廠商SOCRadar揭露一場名為FortiBleed的大規模網路攻擊活動，該活動被歸因於INC和Lynx等勒索軟體組織。攻擊者系統性地掃描全球暴露的FortiGate防火牆設備，試圖利用已知憑證組合進行入侵。活動範圍龐大，目標包括全球約43萬台FortiGate防火牆，竊取了超過1.1億個憑證。攻擊者透過客製化封包嗅探器收集憑證和身份驗證資料，並將這些憑證直接用於後續的勒索軟體部署。受影響組織的實務影響包括數百個終端設備被加密。為防禦，建議組織應立即檢查網路邊界設備的身份驗證日誌，主動輪換所有暴露在網際網路上的管理員憑證，並強制實施多因素驗證（MFA）。此外，由於攻擊者可能利用零日漏洞，應提高警覺，並特別關注其他遠端存取技術（如Citrix）的異常登入活動。",
    tags: ["FortiGate", "FortiBleed", "憑證竊取", "勒索軟體", "SOCRadar", "網路入侵"],
    title_en: "FortiBleed Large-Scale Credential Theft Campaign Exposed: Hackers Exploit FortiGate Devices for Ransomware Intrusion",
    summary_en: "Security vendor SOCRadar has revealed a large-scale cyber attack campaign named FortiBleed, which is attributed to ransomware groups such as INC and Lynx. The attackers systematically scanned globally exposed FortiGate firewall devices, attempting to gain access using known credential combinations. The campaign scope was massive, targeting approximately 430,000 FortiGate firewalls worldwide, and resulting in the theft of over 110 million credentials. The attackers collected credentials and authentication data using custom packet sniffers, which were then directly used for subsequent ransomware deployment. The practical impact on affected organizations included the encryption of hundreds of endpoints. For defense, organizations are advised to immediately check the authentication logs of network boundary devices, proactively rotate all administrator credentials exposed to the internet, and enforce Multi-Factor Authentication (MFA). Furthermore, due to the possibility of zero-day exploits being utilized, heightened vigilance is recommended, with special attention paid to anomalous login activity on other remote access technologies (such as Citrix).",
    tags_en: ["FortiGate", "FortiBleed", "Credential Theft", "Ransomware", "SOCRadar", "Network Intrusion"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕 PoC 陷阱：ChocoPoC 惡意程式透過 Python 依賴庫竊取資安研究人員憑證",
    summary: "資安研究人員是駭客的目標，新型惡意程式 ChocoPoC 透過偽造的 PoC 程式碼進行攻擊。攻擊者將惡意程式藏在 PoC 專案的 Python 依賴庫中，使得程式碼看似乾淨，能繞過快速的程式碼審查。攻擊鏈是：使用者執行 PoC 專案時，會自動安裝一個名為 `frint` 的依賴庫，進而拉入 `skytext`。`skytext` 隨後會執行一個編譯檔案，在偵測到特定 PoC 檔案時，解包並下載完整的遠端存取木馬 ChocoPoC。一旦運行，ChocoPoC 可竊取 Chrome、Brave、Edge、Firefox 等瀏覽器的密碼、Cookie、歷史記錄，並執行任意 Shell 指令。研究機構已發現至少七個與高知名度漏洞（如 CVE-2025-64446、CVE-2026-0257 等）相關的假 PoC 儲存庫。修補建議是將所有 PoC 視為惡意，避免執行來自新或未知帳號的程式碼，並徹底檢查系統中是否存在相關的惡意依賴庫，若有執行過，應立即輪換憑證並重建主機。",
    tags: ["ChocoPoC", "PoC", "Python", "依賴庫", "資安研究", "CVE", "遠端存取木馬"],
    title_en: "Beware of PoC Traps: ChocoPoC Malware Steals Cybersecurity Researcher Credentials via Python Dependencies",
    summary_en: "Cybersecurity researchers are prime targets for hackers, and a new piece of malware, ChocoPoC, attacks through fabricated Proof-of-Concept (PoC) code. Attackers embed the malicious code within a PoC project's Python dependency library, making the code appear clean and bypassing rapid code reviews. The attack chain is as follows: when a user executes the PoC project, it automatically installs a dependency library named `frint`, which subsequently pulls in `skytext`. `skytext` then executes a compiled file, and upon detecting a specific PoC file, it unpacks and downloads the full remote access trojan, ChocoPoC. Once running, ChocoPoC can steal passwords, cookies, and browsing history from browsers like Chrome, Brave, Edge, and Firefox, and execute arbitrary shell commands. Research institutions have discovered at least seven fake PoC repositories related to high-profile vulnerabilities (such as CVE-2025-64446, CVE-2026-0257, etc.). The remediation advice is to treat all PoC code as potentially malicious, avoid executing code from new or unknown accounts, and thoroughly check the system for any related malicious dependencies. If execution has occurred, credentials must be immediately rotated and the host rebuilt.",
    tags_en: ["ChocoPoC", "PoC", "Python", "Dependency Library", "Cybersecurity Research", "CVE", "Remote Access Trojan"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-chocopoc-rat-targets-vulnerability.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA升級 SharePoint 漏洞為已知利用漏洞，提醒機構注意遠端代碼執行風險",
    summary: "美國網路安全與基礎設施安全局（CISA）已將一個影響 Microsoft SharePoint Server 的高嚴重性漏洞（CVE-2026-45659，CVSS 8.8）納入其已知利用漏洞（KEV）目錄，指出該漏洞已被積極利用。此漏洞屬於由於反序列化不受信任資料所導致的遠端代碼執行（RCE）問題，可被已驗證的攻擊者透過網路觸發。攻擊者只需具備 Site Member 權限即可執行遠端代碼，無需管理員權限。鑑於積極利用的證據，CISA建議聯邦民事行政部門（FCEB）機構務必在 2026 年 7 月 4 日前修補。此外，微軟還揭露了兩組並行威脅活動：第一組歸因於 Storm-2603，該行為者利用 CVE-2025-11371 攻擊 Gladinet Triofox，並透過 Cloudflare 隧道、SSH 等建立持久存取，甚至利用了有漏洞的驅動程式（NSecKrnl.sys）來規避端點安全。這顯示了攻擊鏈的複雜性，單一事件可能涉及多個行為者和多個目標。",
    tags: ["CISA", "SharePoint Server", "CVE-2026-45659", "RCE", "遠端代碼執行", "Storm-2603"],
    title_en: "CISA Elevates SharePoint Vulnerability to Known Exploited Vulnerability, Warns Organizations of Remote Code Execution Risk",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has added a high-severity vulnerability affecting Microsoft SharePoint Server (CVE-2026-45659, CVSS 8.8) to its Known Exploited Vulnerability (KEV) catalog, indicating that the flaw is actively being exploited. This vulnerability is a Remote Code Execution (RCE) issue caused by deserializing untrusted data, which can be triggered over the network by an authenticated attacker. Attackers only require Site Member privileges to execute remote code, without needing administrator privileges. Given the evidence of active exploitation, CISA recommends that Federal Civilian Executive Branch (FCEB) agencies patch the vulnerability by July 4, 2026. Furthermore, Microsoft also disclosed two parallel threat activities: the first attributed to Storm-2603, which exploited CVE-2025-11371 against Gladinet Triofox, establishing persistent access through Cloudflare tunnels, SSH, and even utilizing a vulnerable driver (NSecKrnl.sys) to evade endpoint security. This demonstrates the complexity of the attack chain, where a single event may involve multiple actors and multiple targets.",
    tags_en: ["CISA", "SharePoint Server", "CVE-2026-45659", "RCE", "Remote Code Execution", "Storm-2603"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/sharepoint-rce-cve-2026-45659-added-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-030",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27引入Trust Insights框架，透過分析行為模式協助應用程式即時偵測社交工程詐騙",
    summary: "蘋果在iOS 27版本中推出Trust Insights框架，旨在幫助應用程式即時識別使用者可能遭受社交工程詐騙的行為。由於詐騙行為（如技術支援詐騙、權威冒充）越來越難以自動偵測，特別是隨著AI深度偽造技術的普及，蘋果設計了此框架。Trust Insights主要在裝置端運行，分析「互動模式、時間點、上下文和基本感測器數據」，而非檢查照片、訊息或郵件的內容。若偵測到可疑行為，系統會評定中或高風險，允許應用程式加入警告、延遲或額外驗證步驟。雖然使用者可在設定中停用，但蘋果強調其設計考量了防止使用者被詐騙誘導關閉此功能。該框架初期涵蓋支付、帳戶更新、資源使用、通訊和其他五大操作類別，能大幅提升iOS生態系統對新型詐騙的防禦能力。",
    tags: ["iOS 27", "Trust Insights", "社交工程", "詐騙防禦", "蘋果", "行為分析"],
    title_en: "iOS 27 introduces Trust Insights framework to help applications detect social engineering scams in real-time by analyzing behavioral patterns",
    summary_en: "Apple is launching the Trust Insights framework in iOS 27, designed to help applications identify behaviors that may indicate a user is falling victim to social engineering scams. Because scamming behaviors (such as tech support scams or impersonation) are becoming increasingly difficult to detect automatically, especially with the proliferation of AI deepfake technology, Apple designed this framework. Trust Insights operates primarily on the device side, analyzing 'interaction patterns, timing, context, and basic sensor data,' rather than checking the content of photos, messages, or emails. If suspicious behavior is detected, the system will assign a medium or high risk rating, allowing the application to implement warnings, delays, or additional verification steps. Although users can disable it in settings, Apple emphasized that its design considers preventing users from being tricked into turning off this feature. Initially, the framework covers five major operation categories: payments, account updates, resource usage, communication, and others, significantly enhancing the iOS ecosystem's defense capabilities against new types of scams.",
    tags_en: ["iOS 27", "Trust Insights", "Social Engineering", "Scam Prevention", "Apple", "Behavioral Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/ios-27-helps-apps-detect-when-a-user-may-be-getting-scammed-in-real-time", lang: "EN" }
    ]
  },
  {
    id: "20260702-031",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果公司預計於 7 月 30 日公布 2026 財年第三季財報，市場關注營收成長與供應鏈挑戰",
    summary: "蘋果公司宣布將於太平洋時間 7 月 30 日公布 2026 財年第三季的財報。分析指出，本次財報的重點將不在於近期宣布的價格上漲，因為這些調整是在季度結束前不久發布，對整體需求和營收的影響難以直接評估。市場更關注的焦點是部分 Mac 型號，特別是 MacBook Neo，在整個季度期間供應短缺的情況，以及蘋果為應對需求而向 TSMC 訂購更多 A18 Pro 晶片的狀況。在財報電話會議上，預計蘋果執行長 Tim Cook 將參與，並會提供公司未來路徑的展望。過去的財報顯示，蘋果曾預期營收年增長 14% 至 17%。",
    tags: ["Apple", "財報", "Q3 2026", "MacBook Neo", "A18 Pro", "TSMC"],
    title_en: "Apple expected to release Q3 2026 earnings report on July 30, market focuses on revenue growth and supply chain challenges",
    summary_en: "Apple announced it will release its Q3 2026 earnings report on July 30, Pacific Time. Analysis suggests that the focus of this report will not be on the recently announced price increases, as these adjustments were released shortly before the quarter ended, making it difficult to directly assess their impact on overall demand and revenue. The market is more focused on the supply shortages of certain Mac models, particularly the MacBook Neo, throughout the quarter, and Apple's order for additional A18 Pro chips from TSMC to meet demand. Apple CEO Tim Cook is expected to participate in the earnings call and provide an outlook on the company's future trajectory. Past earnings reports have shown that Apple had anticipated year-over-year revenue growth of 14% to 17%.",
    tags_en: ["Apple", "Earnings Report", "Q3 2026", "MacBook Neo", "A18 Pro", "TSMC"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/apple-sets-q3-2026-earnings-release-for-july-30", lang: "EN" }
    ]
  },
  {
    id: "20260702-032",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Silicon 晶片路線圖更新：M7系列加速，可能影響M6產品發布",
    summary: "本文根據報導內容，討論了Apple在晶片路線圖上的最新動態。據Mark Gurman的報導，Apple正在加速M7系列Apple Silicon晶片的開發進度，這可能導致原本預計發布的M6系列產品線的規劃受到影響。這代表Apple在處理其晶片產品的迭代速度和重點上，可能進行了戰略調整。此外，文章也預告了關於visionOS 27的最新功能解析，並涵蓋了iOS 27 WWDC的重點回顧。這類晶片和作業系統的更新，對於開發者和產業鏈的產品規劃至關重要，需持續關注Apple的官方公告與產品發布時間表，以掌握最新的技術趨勢。",
    tags: ["Apple", "Apple Silicon", "M7", "M6", "visionOS 27", "iOS 27"],
    title_en: "Apple Silicon Chip Roadmap Update: M7 Series Acceleration May Impact M6 Product Launch",
    summary_en: "This article discusses the latest developments in Apple's chip roadmap based on reports. According to Mark Gurman's report, Apple is accelerating the development of the M7 series Apple Silicon chips, which may affect the planning for the originally scheduled M6 product line. This suggests that Apple may be making strategic adjustments regarding the iteration speed and focus of its chip products. Furthermore, the article also previews new features for visionOS 27 and covers key takeaways from the iOS 27 WWDC. These updates to chips and operating systems are crucial for developers and industry supply chain product planning, requiring continuous monitoring of Apple's official announcements and product release schedules to grasp the latest technological trends.",
    tags_en: ["Apple", "Apple Silicon", "M7", "M6", "visionOS 27", "iOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/happy-hour-597", lang: "EN" }
    ]
  },
  {
    id: "20260702-033",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 26 新增 CarPlay「智慧顯示縮放」（Smart Display Zoom）功能，優化車載螢幕顯示體驗",
    summary: "本文介紹 iOS 26 針對 CarPlay 增添了「智慧顯示縮放」（Smart Display Zoom）設定。此功能位於 CarPlay 的「顯示」設定中，能讓 CarPlay 介面自動優化以適應用戶車輛的特定顯示器尺寸和形狀。作者測試發現，開啟此功能後，CarPlay 介面能更好地利用顯示空間，讓部分應用程式能顯示更多內容，顯著提升了在不同車載資訊娛樂系統上的使用體驗。雖然此功能在 iOS 26 中已推出，但作者認為它本應更早存在。建議用戶若尚未嘗試，應開啟此設定，以獲得最佳的車載介面顯示效果。",
    tags: ["iOS 26", "CarPlay", "Smart Display Zoom", "Apple", "車載系統", "iOS 更新"],
    title_en: "iOS 26 Adds 'Smart Display Zoom' Feature to CarPlay, Optimizing In-Car Screen Display Experience",
    summary_en: "This article introduces the 'Smart Display Zoom' setting added to CarPlay in iOS 26. This feature is located within the CarPlay 'Display' settings and allows the CarPlay interface to automatically optimize itself to fit the specific display size and shape of the user's vehicle. The author tested and found that enabling this feature allows the CarPlay interface to better utilize the display space, enabling some applications to display more content, significantly enhancing the user experience across different in-car infotainment systems. Although this feature is available in iOS 26, the author believes it should have been introduced earlier. Users who have not yet tried it are advised to enable this setting to achieve the best in-car interface display effect.",
    tags_en: ["iOS 26", "CarPlay", "Smart Display Zoom", "Apple", "In-Car System", "iOS Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/carplay-in-ios-26-added-new-setting-that-should-have-always-existed", lang: "EN" }
    ]
  },
  {
    id: "20260702-034",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple Arcade擴充內容：新增四款遊戲，包含城市建造與釣魚主題作品",
    summary: "Apple Arcade服務持續擴充其遊戲目錄，除了近期加入的《Family Feud Pocket》外，本週又新增了四款遊戲。這些遊戲涵蓋了城市建造、地下城探險、釣魚和繪圖挑戰等不同類型。新增的遊戲包括《Creatures of the Deep+》（釣魚探險）、《Dungeon Clawler+》（Roguelike卡牌建造與夾娃娃機結合）、《Draw It+》（繪圖挑戰）、以及《Pocket City 2+》（城市建造）。這些遊戲均可在Apple Arcade的訂閱服務中遊玩，該服務提供無廣告、無內購的遊戲體驗。其中，《Pocket City 2+》特別強調了其在多平台（iPhone, iPad, iPod touch, Mac, Apple Vision Pro, Apple TV）的可用性，適合不同年齡層的玩家。Apple Arcade目前提供超過270款遊戲，每月訂閱費用為$6.99，或可包含在Apple One套裝服務中。",
    tags: ["Apple Arcade", "Pocket City 2+", "Apple Vision Pro", "遊戲服務", "iOS", "macOS"],
    title_en: "Apple Arcade Expands Content: Four New Games Added, Including City Building and Fishing Themes",
    summary_en: "The Apple Arcade service continues to expand its game catalog. In addition to the recently added *Family Feud Pocket*, four new games were added this week. These games cover various genres, including city building, dungeon exploration, fishing, and drawing challenges. The new additions include *Creatures of the Deep+* (fishing adventure), *Dungeon Clawler+* (combining Roguelike card building and claw machine mechanics), *Draw It+* (drawing challenge), and *Pocket City 2+* (city building). All these games are available through the Apple Arcade subscription service, which offers an ad-free and in-app purchase-free gaming experience. Notably, *Pocket City 2+* emphasizes its availability across multiple platforms (iPhone, iPad, iPod touch, Mac, Apple Vision Pro, Apple TV), making it suitable for players of all ages. Apple Arcade currently offers over 270 games, with a monthly subscription fee of $6.99, or it may be included in the Apple One bundle.",
    tags_en: ["Apple Arcade", "Pocket City 2+", "Apple Vision Pro", "Gaming Service", "iOS", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/apple-arcade-gets-four-new-games-including-pocket-city-2", lang: "EN" }
    ]
  },
  {
    id: "20260702-035",
    trackers: ["os"],
    category: "Apple",
    title: "tvOS 27 重磅升級：Apple TV 4K 搭載更多影音功能，包含高解析度無損音訊與動態字體支援",
    summary: "本文介紹 tvOS 27 的多項新功能，主要針對 Apple TV 4K 設備進行升級。在影音娛樂方面，Apple Podcasts 進行了重新設計，新增了影片播客功能和側邊導航；Apple Music 則加入了 AutoMix 轉場效果和 Hi-Res Lossless Audio，讓用戶能透過外部喇叭享受工作室級音質。此外，用戶現在可以在 iPhone 的「家庭」App 中更新 Apple TV 的系統軟體，提升了便利性。另有兩項重要更新：系統級的 Dynamic Type 支援，讓使用者可以調整文字大小以提高介面可讀性；以及一個名為「Smart Downloads」的待定功能。這些更新旨在擴展 Apple TV 的內容消費體驗，並提升其作為家庭娛樂中心的功能性。",
    tags: ["tvOS 27", "Apple TV 4K", "Apple Music", "Apple Podcasts", "Dynamic Type", "HomeKit"],
    title_en: "tvOS 27 Major Upgrade: Apple TV 4K Features Enhanced Multimedia Capabilities, Including High-Resolution Lossless Audio and Dynamic Type Support",
    summary_en: "This article introduces several new features in tvOS 27, primarily targeting the Apple TV 4K device. In the area of multimedia entertainment, Apple Podcasts has been redesigned with the addition of video podcasting and sidebar navigation; Apple Music has incorporated AutoMix transitions and Hi-Res Lossless Audio, allowing users to enjoy studio-grade sound quality through external speakers. Furthermore, users can now update the Apple TV's system software directly from the \"Home\" app on an iPhone, improving convenience. There are also two other important updates: system-level Dynamic Type support, which allows users to adjust text size to improve interface readability; and a pending feature called \"Smart Downloads.\" These updates aim to expand Apple TV's content consumption experience and enhance its functionality as a home entertainment hub.",
    tags_en: ["tvOS 27", "Apple TV 4K", "Apple Music", "Apple Podcasts", "Dynamic Type", "HomeKit"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/tvos-27-four-new-features-coming-soon-to-apple-tv-4k", lang: "EN" }
    ]
  },
  {
    id: "20260702-036",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Wallet 擴大車鑰匙支援：預計將加入福斯汽車（Volkswagen）品牌",
    summary: "Apple Wallet持續擴展其支援的車鑰匙品牌，近期已新增了豐田（Toyota）和保時捷（Porsche）等品牌。根據觀察，Apple的後端伺服器程式碼已更新，顯示福斯汽車（Volkswagen, VW）預計將很快加入Apple Wallet的車鑰匙功能支援名單。這類支援通常會先在後端系統中預留或更新，然後再逐步推出。目前文章未提供具體車款或正式發布時間，但預計VW的支援可能在未來數週或數月內逐步推出。此功能對於車主而言，能提供更便捷的數位鑰匙管理體驗。",
    tags: ["Apple Wallet", "Volkswagen", "車鑰匙", "Apple 生態系", "汽車科技", "Apple 更新"],
    title_en: "Apple Wallet expands car key support: Volkswagen expected to join",
    summary_en: "Apple Wallet continues to expand its supported car key brands, recently adding brands such as Toyota and Porsche. Observations indicate that Apple's backend server code has been updated, suggesting that Volkswagen (VW) is expected to soon join the car key feature support list in Apple Wallet. This type of support is typically reserved or updated in the backend system before being gradually rolled out. While the article does not provide specific models or official release dates, VW support is anticipated to be rolled out gradually within the coming weeks or months. This feature offers car owners a more convenient digital key management experience.",
    tags_en: ["Apple Wallet", "Volkswagen", "Car Key", "Apple Ecosystem", "Automotive Technology", "Apple Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/car-keys-in-apple-wallet-coming-to-major-new-vehicle-brand-report", lang: "EN" }
    ]
  },
  {
    id: "20260702-037",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 確認 iOS 27 公開 Beta 版本將於七月發布，預計帶來 Siri AI 等新功能",
    summary: "Apple 預計將在七月推出 iOS 27 的公開 Beta 版本，讓用戶能提前體驗新功能。雖然 iOS 27 的正式發布時間仍定在九月，但透過此公開測試版，用戶可以搶先使用新系統。iOS 27 的最大亮點是整合了 Siri AI 功能，此功能僅限於相容的 iPhone 機型。此外，系統還帶來 Liquid Glass 的設計優化、多數應用程式（如 Messages、Photos、Safari 等）的更新，以及針對 CarPlay 和 AirPods 的升級。需要注意的是，許多核心功能都依賴 Apple Intelligence，因此只有較新的 iPhone 機型才能使用這些旗艦功能。建議用戶在測試新系統前，應留意相關的系統穩定性與兼容性問題。",
    tags: ["iOS 27", "Apple", "Siri AI", "Beta 版本", "iPhone", "Apple Intelligence"],
    title_en: "Apple Confirms iOS 27 Public Beta Release in July, Expected to Bring New Features like Siri AI",
    summary_en: "Apple is expected to release the public Beta version of iOS 27 in July, allowing users to experience new features early. Although the official release of iOS 27 is still scheduled for September, this public test version allows users to get a head start on the new system. The biggest highlight of iOS 27 is the integration of Siri AI, a feature limited to compatible iPhone models. Additionally, the system brings design optimizations like Liquid Glass, updates to many applications (such as Messages, Photos, and Safari), and upgrades for CarPlay and AirPods. It should be noted that many core functions rely on Apple Intelligence, meaning only newer iPhone models can utilize these flagship features. Users are advised to pay attention to system stability and compatibility issues before testing the new system.",
    tags_en: ["iOS 27", "Apple", "Siri AI", "Beta Version", "iPhone", "Apple Intelligence"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/ios-27-public-beta-release-date-when-you-can-install-the-new-iphone-update", lang: "EN" }
    ]
  },
  {
    id: "20260702-038",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 18 Pro Max 傳聞電池容量曝光：eSIM版達 5,425 mAh，預計大幅提升續航力",
    summary: "本文根據 Macworld 彙整的社交媒體洩漏資訊，報導了關於 iPhone 18 Pro Max 的電池容量傳聞。傳聞指出，配備 eSIM 的版本電池容量為 5,425 mAh，而配備實體 SIM 卡的版本為 5,235 mAh。相較於 iPhone 17 Pro Max 的電池容量（eSIM 版 5,088 mAh，實體 SIM 版 4,823 mAh），這兩款機型預計將有顯著的提升。除了更大的電池容量外，文章也提到 iPhone 18 Pro Max 預計將搭載 A20 Pro 晶片，進一步提升能效。然而，文章同時提醒，這些電池數據的來源具有可疑性，且其洩漏時間點與 Apple 供應商 Tata Electronics 近期發生的資料外洩事件存在時間上的巧合。若傳聞屬實，預計 iPhone 18 Pro Max 的續航力將會非常出色。修補建議方面，由於此為傳聞資訊，目前無實質修補建議，但建議用戶關注 Apple 官方的正式發布資訊。",
    tags: ["iPhone 18 Pro Max", "電池容量", "A20 Pro", "Macworld", "傳聞"],
    title_en: "iPhone 18 Pro Max Rumored Battery Capacity Revealed: eSIM Version Reaches 5,425 mAh, Expected to Greatly Improve Battery Life",
    summary_en: "This article compiles social media leaks from Macworld regarding the rumored battery capacity of the iPhone 18 Pro Max. The rumors suggest that the version equipped with eSIM will have a battery capacity of 5,425 mAh, while the version with a physical SIM card will have a capacity of 5,235 mAh. Compared to the iPhone 17 Pro Max's battery capacities (5,088 mAh for eSIM, 4,823 mAh for physical SIM), these two models are expected to show a significant increase. In addition to the larger battery capacity, the article also mentions that the iPhone 18 Pro Max is expected to feature the A20 Pro chip, further enhancing energy efficiency. However, the article cautions that the source of these battery data is questionable, and the timing of the leak coincides with a recent data leak incident involving Apple supplier Tata Electronics. If the rumors prove true, the iPhone 18 Pro Max is expected to have excellent battery life. Regarding remediation advice, since this is rumored information, there are no concrete remediation suggestions at this time, but users are advised to monitor official announcements from Apple.",
    tags_en: ["iPhone 18 Pro Max", "Battery Capacity", "A20 Pro", "Macworld", "Rumor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/iphone-18-pro-maxs-huge-battery-size-reportedly-leaked", lang: "EN" }
    ]
  },
  {
    id: "20260702-039",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV排片公布：五部新電影包括《Mayday》與《Tenzing》等，涵蓋動作、歷史與勵志主題",
    summary: "本文介紹Apple TV平台近期排定的五部新電影，內容涵蓋多樣化的類型，包括動作喜劇、歷史傳記和家庭勵志劇。電影《Mayday》由Ryan Reynolds和Kenneth Branagh主演，設定在冷戰時期，講述一名美國海軍飛行員被困於敵國，與前KGB特工之間展開的生死與友誼故事。另一部《Tenzing》則以真實事件為藍本，描寫了西藏登山家Tenzing Norgay與紐西蘭登山家Edmund Hillary首次登頂珠穆朗瑪峰的歷史，探討了文化、階級與精神追求的衝突。此外，還有關於泡泡棒玩具的《Matchbox The Movie》、關於SEAL訓練的《Way of the Warrior Kid》以及《The Dink》等。這些電影的上映日期分別為7月24日、9月4日、10月9日、10月16日和11月25日。Apple TV目前每月收費$12.99，或可透過Apple One組合包訂閱。",
    tags: ["Apple TV", "電影排片", "Ryan Reynolds", "Kenneth Branagh", "Tenzing Norgay", "Apple One"],
    title_en: "Apple TV Lineup Announced: Five New Films Including 'Mayday' and 'Tenzing' Cover Action, Historical, and Inspirational Themes",
    summary_en: "This article introduces five new films recently scheduled for the Apple TV platform, covering diverse genres including action-comedy, historical biopics, and family inspirational dramas. The film 'Mayday,' starring Ryan Reynolds and Kenneth Branagh, is set during the Cold War and tells a story of a US Navy pilot stranded in an enemy country, exploring themes of survival and friendship with a former KGB agent. Another film, 'Tenzing,' is based on a true event, depicting the historical first ascent of Mount Everest by Tibetan mountaineer Tenzing Norgay and New Zealander Edmund Hillary, and examining the conflicts between culture, class, and spiritual pursuit. Additionally, there are 'Matchbox The Movie,' about bubble gum toys; 'Way of the Warrior Kid,' about SEAL training; and 'The Dink.' These films are scheduled to premiere on July 24, September 4, October 9, October 16, and November 25, respectively. Apple TV currently costs $12.99 per month, or can be subscribed to through the Apple One bundle.",
    tags_en: ["Apple TV", "Film Lineup", "Ryan Reynolds", "Kenneth Branagh", "Tenzing Norgay", "Apple One"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/apple-tv-has-five-new-movies-premiering-soon-heres-whats-coming", lang: "EN" }
    ]
  },
  {
    id: "20260702-040",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重點升級：AI 整合強化 Siri 體驗，促使用戶考慮升級至新一代 iPhone",
    summary: "本文討論 iOS 27 的主要亮點，指出新版本圍繞「Apple Intelligence」和 AI 功能進行深度整合。雖然 iOS 27 技術上支援舊款 iPhone 11 等型號，但文章強調，若設備無法支援 Apple Intelligence，則新功能帶來的吸引力有限。iOS 27 最大的升級點在於其強化的 Siri AI，這不僅提升了日常任務處理能力，更強調了隱私保護。此外，版本還新增了訊息中的一鍵建議、日曆和提醒事項的自然語言輸入、郵件搜尋優化，以及相簿的強大編輯工具等。對於歐洲用戶，由於 Siri AI 不可用，iOS 27 則著重於修復 Bug 與提升效能，這為舊機型提供了更好的使用體驗。整體而言，AI 功能的全面整合，為用戶提供了一個考慮升級的有力理由。",
    tags: ["iOS 27", "Apple Intelligence", "Siri AI", "iPhone", "Apple", "作業系統更新"],
    title_en: "iOS 27 Key Upgrades: AI Integration Enhances Siri Experience, Encouraging Users to Consider Upgrading to the New Generation iPhone",
    summary_en: "This article discusses the main highlights of iOS 27, pointing out that the new version is deeply integrated with \"Apple Intelligence\" and AI features. Although iOS 27 technically supports older models like the iPhone 11, the article emphasizes that if a device cannot support Apple Intelligence, the appeal of the new features is limited. The biggest upgrade in iOS 27 is its enhanced Siri AI, which not only improves daily task handling but also emphasizes privacy protection. Additionally, the version adds one-tap suggestions in Messages, natural language input for Calendar and Reminders, optimized email search, and powerful editing tools for Photos. For European users, since Siri AI is unavailable, iOS 27 focuses on bug fixes and performance improvements, offering a better user experience for older models. Overall, the comprehensive integration of AI features provides a strong reason for users to consider upgrading.",
    tags_en: ["iOS 27", "Apple Intelligence", "Siri AI", "iPhone", "Apple", "Operating System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/ios-27-makes-a-very-strong-case-for-upgrading-to-a-new-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260702-041",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Jamf發現X平台廣告投放的Mac惡意軟體：模擬Dynamic Island的應用程式遭利用",
    summary: "資安公司 Jamf Threat Labs 發現了一種透過 X 平台贊助廣告傳播的 ClickFix 式攻擊。該廣告偽裝成名為 DynamicLake 的 Mac 實用工具，聲稱能將 MacBook 的瀏海改造成功能完整的 Dynamic Island。然而，該廣告的連結實際導向一個惡意的仿冒網域 dynamicmacisland[.]com。受害者若點擊後，會被引導至輸入 Terminal 並貼上安裝程式碼，從而悄悄在 Mac 上安裝惡意軟體。Jamf 確認該負載為近期變種的 Atomic Stealer，甚至有 DigitStealer 的案例。此次攻擊的危險性加劇於廣告來自一個擁有大量追蹤者的已驗證帳號，利用了用戶對信任的依賴。文章指出，此類攻擊利用仿冒網域和單一重定向來規避 X 平台的自動掃描。雖然該廣告已被移除，但事件凸顯了社交工程攻擊的風險，以及大型平台在內容審核和廣告安全機制上的漏洞。",
    tags: ["Jamf Threat Labs", "X 平台", "Mac OS", "ClickFix", "Atomic Stealer", "社交工程"],
    title_en: "Jamf discovers Mac malware distributed via X platform ads: Application simulating Dynamic Island exploited",
    summary_en: "Security company Jamf Threat Labs discovered a ClickFix-style attack spread through sponsored ads on the X platform. The ad disguised itself as a Mac utility named DynamicLake, claiming to transform a MacBook's notch into a fully functional Dynamic Island. However, the link in the ad actually directed users to a malicious spoofed domain, dynamicmacisland[.]com. If a victim clicked the link, they would be prompted to input Terminal and paste installation code, thereby silently installing malware on the Mac. Jamf confirmed that the payload was a recent variant of Atomic Stealer, with instances of DigitStealer also observed. The danger of this attack is amplified because the ad originated from a verified account with a large following, exploiting user trust. The article points out that this type of attack utilizes spoofed domains and single redirects to bypass X platform's automatic scanning. Although the ad has been removed, the incident highlights the risks of social engineering attacks and the vulnerabilities in large platforms' content moderation and ad safety mechanisms.",
    tags_en: ["Jamf Threat Labs", "X platform", "Mac OS", "ClickFix", "Atomic Stealer", "Social Engineering"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/malware-found-spreading-through-sponsored-ads-on-x", lang: "EN" }
    ]
  },
  {
    id: "20260702-042",
    trackers: ["os"],
    category: "Apple",
    title: "Apple MacBook Pro 系列設計更新：入門款機型或將沿用 MacBook Ultra 的新外觀風格",
    summary: "根據最新報導，Apple 傳出下一年度初推出的入門款 MacBook Pro 機型，其設計風格可能會與高階的 MacBook Ultra 系列保持一致。先前市場一直期待 MacBook Ultra 將進行大幅度重新設計，並具備更纖薄的機身和觸控螢幕等特色。雖然此設計更新原本被認為是區分高階與標準機型的關鍵，但目前的消息指出，這種新的外觀趨勢可能會擴展到入門級的 MacBook Pro 系列。這暗示 Apple 可能正在推動一套統一的設計語言，讓不同階層的 Mac 產品線在視覺上更具連貫性。對於潛在購買者而言，建議關注 Apple 官方的正式發布資訊，以了解具體的設計差異、功能升級以及產品定位。",
    tags: ["Apple", "MacBook Pro", "MacBook Ultra", "設計更新", "產品傳聞"],
    title_en: "Apple MacBook Pro Series Design Update: Entry-Level Models May Adopt the New MacBook Ultra Aesthetic",
    summary_en: "According to the latest reports, the entry-level MacBook Pro model, expected to launch early next year, may adopt a design aesthetic consistent with the high-end MacBook Ultra series. Previously, the market anticipated that the MacBook Ultra would undergo a major redesign, featuring characteristics such as a thinner body and a touch screen. Although this design update was initially thought to be key to differentiating high-end from standard models, current news suggests that this new aesthetic trend might extend to the entry-level MacBook Pro series. This implies that Apple may be promoting a unified design language, making the various tiers of Mac products more visually cohesive. For potential buyers, it is recommended to monitor official Apple announcements for specific details regarding design differences, functional upgrades, and product positioning.",
    tags_en: ["Apple", "MacBook Pro", "MacBook Ultra", "Design Update", "Product Rumor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/macbook-pro-models-sharing-the-macbook-ultra-redesign-is-and-isnt-surprising", lang: "EN" }
    ]
  },
  {
    id: "20260702-043",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳增產 1000 萬款折疊式 iPhone Ultra，預計售價高達 2500 美元",
    summary: "根據《日經亞洲》的報導，蘋果公司已將折疊式 iPhone 的年產目標提高至約 1000 萬台，高於先前預估的 700 萬至 800 萬台。這款預計命名為 iPhone Ultra 的旗艦機型，預計將在今年推出，並與 iPhone 18 Pro、iPhone 18 Pro Max 等新機型一同亮相。報導指出，該折疊機型的平均售價預計為 2500 美元，儲存選項甚至可能高達 3000 美元。此外，蘋果還預計將在 2026 年下半年推出多達 8500 萬台的新 iPhone 訂單。業界預測，蘋果將在今年秋季推出 iPhone 18 Pro、iPhone 18 Pro Max 和折疊式 iPhone Ultra，並可能延長標準 iPhone 17 的市場生命週期至約 18 個月。",
    tags: ["Apple", "iPhone Ultra", "折疊手機", "iPhone 18 Pro", "Apple 生產目標", "2026"],
    title_en: "Apple reportedly increases production of 10 million units of foldable iPhone Ultra, with an estimated price of up to $2,500",
    summary_en: "According to a report by Nikkei Asia, Apple has raised its annual production target for foldable iPhones to approximately 10 million units, exceeding the previous estimate of 7 to 8 million units. This flagship model, expected to be named iPhone Ultra, is anticipated to launch this year and debut alongside new models such as the iPhone 18 Pro and iPhone 18 Pro Max. The report indicates that the average selling price for the foldable model is expected to be $2,500, with storage options potentially reaching as high as $3,000. Furthermore, Apple is projected to receive new iPhone orders totaling up to 85 million units in the second half of 2026. Industry speculation suggests that Apple will launch the iPhone 18 Pro, iPhone 18 Pro Max, and the foldable iPhone Ultra this autumn, potentially extending the market lifecycle of the standard iPhone 17 to about 18 months.",
    tags_en: ["Apple", "iPhone Ultra", "Foldable Phone", "iPhone 18 Pro", "Apple Production Target", "2026"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/01/apple-reportedly-orders-10m-foldable-iphone-ultra-models-which-could-sell-for-around-2500", lang: "EN" }
    ]
  },
  {
    id: "20260702-044",
    trackers: ["os", "security"],
    category: "Apple",
    title: "研究發現新型 macOS 惡意軟體 PamStealer：結合 AppleScript 與 PAM 提升竊密隱蔽性",
    summary: "研究人員發現一種新型的 macOS 惡意軟體 PamStealer。該惡意軟體採用多階段交付機制，首先偽裝成名為 Maccy 的剪貼簿管理器的磁碟映像檔，並使用 AppleScript 進行初步執行。其獨特之處在於，它不依賴傳統的 shell 指令（如 curl 或 zsh），而是執行一個自包含的 JavaScript for Automation (JXA) 下載器，利用原生 Objective-C API 進行載荷準備。第二階段的 Rust 程式碼利用 macOS 內建的 Pluggable Authentication Modules (PAM) 介面，在將目標登入密碼傳送給攻擊者伺服器前，先進行本地驗證，極大地提升了竊密流程的隱蔽性。此外，它還能繞過 `com.apple.quarantine` 屬性，並偽裝成 macOS 系統核心元件（如 Finder 或 Software Update），甚至能延遲顯示「完整磁碟存取權」的請求，使活動紀錄難以追蹤。這類進化顯示了 macOS 竊密工具正在朝向更安靜、更原生、更難被傳統防禦機制偵測的方向發展。",
    tags: ["macOS", "PamStealer", "AppleScript", "Rust", "PAM", "JXA", "macOS 惡意軟體"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/07/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy", lang: "EN" }
    ]
  },
  {
    id: "20260702-045",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "AI 漏洞發現加速超乎修補能力，IBM與紅帽推出 Project Lightwell 服務強化開源軟體供應鏈安全",
    summary: "隨著 Anthropic 的 Mythos 等 AI 工具能夠以極快速度掃描和發現開源軟體中的漏洞，業界已面臨漏洞發現速度遠超修補速度的挑戰。Cloud Security Alliance 的研究指出，Anthropic 在一個月內掃描了 1,000 個程式碼庫，但修補率僅約 6%。為了解決此痛點，IBM 與 Red Hat 投入 50 億美元，推出 Project Lightwell 服務。該服務旨在為無法承受更新中斷的企業，提供針對生產環境特定版本的開源軟體修補程式，並提供簽署、驗證的補丁，無需強制客戶升級或重新認證。此舉特別針對金融、醫療等高度監管產業。IBM 甚至加入了 Anthropic 的 Project Glasswing 聯盟，共同強化生態系統。此趨勢凸顯了在開源軟體供應鏈中，如何快速、可靠地修補漏洞，已成為企業的關鍵安全需求。",
    tags: ["Anthropic", "Project Lightwell", "開源軟體", "供應鏈安全", "AI 漏洞發現", "SBOM"],
    title_en: "AI accelerates vulnerability discovery beyond patching capacity: IBM and Red Hat launch Project Lightwell service to strengthen open-source software supply chain security",
    summary_en: "As AI tools like Anthropic's Mythos can scan and discover vulnerabilities in open-source software at extremely fast speeds, the industry faces a challenge where the rate of vulnerability discovery far exceeds the patching rate. Research from the Cloud Security Alliance indicates that Anthropic scanned 1,000 code repositories in one month, but the patching rate was only about 6%. To address this pain point, IBM and Red Hat have invested $5 billion to launch the Project Lightwell service. This service aims to provide open-source software patches for specific versions in production environments for enterprises that cannot afford update disruptions, offering signed and validated patches without forcing customers to upgrade or re-certify. This initiative is particularly targeted at highly regulated industries such as finance and healthcare. IBM has even joined Anthropic's Project Glasswing alliance to jointly strengthen the ecosystem. This trend highlights that how to quickly and reliably patch vulnerabilities within the open-source software supply chain has become a critical security requirement for enterprises.",
    tags_en: ["Anthropic", "Project Lightwell", "Open-Source Software", "Supply Chain Security", "AI Vulnerability Discovery", "SBOM"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/anthropic-s-ai-finds-bugs-ibm-bets-5b-it-can-fix-them-", lang: "EN" }
    ]
  },
  {
    id: "20260702-046",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安業者揭露 Argo CD 儲存庫伺服器重大漏洞：未經驗證可遠端執行程式碼並入侵 Kubernetes 叢集",
    summary: "資安業者 Synacktiv 於 7 月 1 日發布報告，公開研究 Argo CD 儲存庫伺服器（Repo Server）的一個重大漏洞。該漏洞源於 Argo CD 處理 Git 儲存庫內容時的安全機制缺陷。攻擊者可利用特製的 Git 儲存庫，在未經身分驗證的情況下，誘使儲存庫伺服器執行遠端程式碼（RCE），進而取得伺服器控制權。更嚴重的是，攻擊者還可藉此漏洞鏈，觸發 2024 年已發現的 Argo CD 另一個重大漏洞 CVE-2024-31989，進而可能接管整個 Kubernetes 叢集。由於 Argo CD 專案目前尚未提供正式修補版本，建議用戶應採取網路隔離等緩解措施，限制存取 Argo CD 儲存庫伺服器的元件，以降低整體風險。",
    tags: ["Argo CD", "Synacktiv", "Git 儲存庫", "RCE", "Kubernetes", "CVE-2024-31989"],
    title_en: "Cybersecurity Firm Discloses Critical Vulnerability in Argo CD Repo Server: Unauthenticated Remote Code Execution and Kubernetes Cluster Compromise",
    summary_en: "Cybersecurity firm Synacktiv released a report on July 1, disclosing a critical vulnerability in the Argo CD Repo Server. The vulnerability stems from a security mechanism flaw in how Argo CD processes Git repository content. An attacker can utilize a specially crafted Git repository to induce the Repo Server to execute remote code (RCE) without authentication, thereby gaining control of the server. More critically, attackers can also use this vulnerability chain to trigger another major, previously discovered Argo CD vulnerability, CVE-2024-31989, potentially leading to the compromise of the entire Kubernetes cluster. Since the Argo CD project has not yet provided an official patch version, users are advised to implement mitigation measures such as network isolation and restrict access to the Argo CD Repo Server components to lower overall risk.",
    tags_en: ["Argo CD", "Synacktiv", "Git Repository", "RCE", "Kubernetes", "CVE-2024-31989"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177046", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260702-047",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "微軟揭露冒用 Perplexity AI 品牌的惡意擴充功能，竊取使用者搜尋內容與個人資訊",
    summary: "微軟於 6 月 29 日揭露一款名為「Search for perplexity ai」的惡意 Chromium 擴充功能。該擴充功能冒用 Perplexity AI 的品牌，並註冊類似的網域，意圖混淆使用者。該惡意程式採用 Manifest V3，並透過設定預設搜尋服務，使得使用者在 Chrome 或 Edge 等 Chromium 瀏覽器輸入任何搜尋查詢時，都會先被攔截到該擴充功能的伺服器。除了竊取完整的搜尋字串外，它還能收集使用者輸入過程中的即時搜尋建議，並記錄包括 IP 位址、User-Agent 及 HTTP 標頭等敏感資訊。雖然微軟已通報 Google 並促使其下架，但該擴充功能仍可於 Chrome Web Store 存取，且仍有大量使用者安裝。使用者應警惕安裝來源不明的擴充功能，並定期檢查瀏覽器的預設搜尋設定，以防範個人資料被竊取。",
    tags: ["微軟", "Perplexity AI", "Chromium 擴充功能", "惡意程式", "資料竊取", "Manifest V3"],
    title_en: "Microsoft reveals malicious extension impersonating Perplexity AI to steal user search content and personal information",
    summary_en: "On June 29, Microsoft revealed a malicious Chromium extension named \"Search for perplexity ai.\" This extension impersonates the Perplexity AI brand and registered similar domains to confuse users. The malware utilizes Manifest V3 and, by setting itself as the default search service, intercepts any search query entered by the user in Chromium browsers like Chrome or Edge. In addition to stealing the complete search string, it also collects real-time search suggestions during the user's input process, and records sensitive information including IP addresses, User-Agent, and HTTP headers. Although Microsoft has notified Google and urged its removal, the extension remains accessible on the Chrome Web Store and has been installed by a large number of users. Users should be vigilant about installing extensions from unknown sources and regularly check their browser's default search settings to prevent personal data theft.",
    tags_en: ["Microsoft", "Perplexity AI", "Chromium extension", "Malware", "Data theft", "Manifest V3"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177045", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260702-048",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "微軟強化合作夥伴生態系安全：管理雲端服務供應商（CSP）的風險與資安標準",
    summary: "本文探討微軟（Microsoft）如何管理其龐大的合作夥伴生態系統所面臨的資安風險。文章指出，合作夥伴，特別是雲端服務供應商（CSPs），常被國家級駭客視為攻擊客戶的潛在攻擊向量。若CSP的租戶（tenant）遭到入侵，可能導致大量客戶資料外洩或資源被盜用。微軟的應對策略是建立「共同責任制」，透過多層次保護。首先，微軟透過「合作夥伴審核」（Partner vetting）機制，確保進入生態系的組織是合法且有效的。其次，微軟在平台層面實施控制，例如使用「細粒度委派管理權限」（GDAP）。最重要的是，微軟已將維持強大的安全態勢（security posture）納為取得和保留CSP授權的強制性先決條件，確保所有合作夥伴必須持續提升自身的資安標準，以應對不斷演變的威脅。",
    tags: ["Microsoft", "CSP", "雲端安全", "合作夥伴生態系", "資安風險", "GDAP"],
    title_en: "Microsoft Strengthens Partner Ecosystem Security: Managing Risks and Security Standards for Cloud Service Providers (CSPs)",
    summary_en: "This article explores how Microsoft manages the security risks inherent in its vast partner ecosystem. It points out that partners, especially Cloud Service Providers (CSPs), are often viewed by nation-state hackers as potential attack vectors targeting clients. If a CSP's tenant is compromised, it could lead to massive client data leakage or resource theft. Microsoft's response strategy is to establish a 'shared responsibility model' through multi-layered protection. First, Microsoft implements a 'Partner vetting' mechanism to ensure that organizations entering the ecosystem are legitimate and effective. Second, Microsoft enforces controls at the platform level, such as using 'Granular Delegated Administration Permissions' (GDAP). Most importantly, Microsoft has made maintaining a strong security posture a mandatory prerequisite for obtaining and retaining CSP authorization, ensuring that all partners must continuously elevate their own security standards to address evolving threats.",
    tags_en: ["Microsoft", "CSP", "Cloud Security", "Partner Ecosystem", "Security Risks", "GDAP"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/07/02/improving-security-posture-across-the-microsoft-partner-ecosystem", lang: "EN" }
    ]
  },
  {
    id: "20260702-049",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy S26 Ultra 促銷資訊：512GB 型號可享 $949 優惠，提供多重折扣方案",
    summary: "本文報導了三星（Samsung）Galaxy S26 Ultra 的兩項疊加促銷活動。第一項是普遍適用、$350 的即時折扣，使 256GB 型號降至 $949，512GB 型號為 $1,149。第二項是針對特定用戶提供的 $200 儲存升級點數，能將 512GB 型號降至 $949。報導指出，此 $200 優惠似乎有特定的觸發條件，因為在無登入或使用無痕模式時，該折扣會消失。此外，此 $200 的激勵點數在包含換購（trade-ins）的交易中依然有效。這類資訊主要為消費者的購買指南，未涉及任何資安漏洞或技術細節。",
    tags: ["Samsung", "Galaxy S26 Ultra", "Android", "促銷", "消費電子"],
    title_en: "Samsung Galaxy S26 Ultra Promotion Details: 512GB Model Available for $949 with Multiple Discounts",
    summary_en: "This article reports on two stacked promotions for the Samsung Galaxy S26 Ultra. The first is a universal $350 instant discount, bringing the 256GB model down to $949, and the 512GB model to $1,149. The second is a $200 storage upgrade credit offered to specific users, which can bring the 512GB model down to $949. The report notes that this $200 discount appears to have specific trigger conditions, as the discount disappears when logged out or when using incognito mode. Furthermore, this $200 incentive credit remains valid even in transactions that include trade-ins. This information is primarily a consumer purchasing guide and does not involve any cybersecurity vulnerabilities or technical details.",
    tags_en: ["Samsung", "Galaxy S26 Ultra", "Android", "Promotion", "Consumer Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/samsung-galaxy-s26-ultra-950-deal", lang: "EN" }
    ]
  },
  {
    id: "20260702-050",
    trackers: ["os"],
    category: "Android",
    title: "Android Auto 媒體應用程式更新：Spotify 與 YouTube Music 介面設計全面優化",
    summary: "Android Auto 正在逐步為多個媒體應用程式（如 Spotify 和 YouTube Music）推送介面更新。Spotify 的音樂播放器經過長時間的 Beta 測試後，現已更廣泛地推出更新設計，包含背景模糊的專輯封面、Material 3 Expressive 追蹤欄以及重新組織的按鈕。此設計更新預計也會應用於 YouTube Music 和 Pocket Casts 等其他應用程式。此外，用戶也注意到 Google 的音樂串流服務增加了更顯眼的「縮指向下」圖標。然而，在 YouTube Music 上，部分用戶報告了「Library」分頁會消失的問題，目前暫時的解決方案是重置手機上的應用程式。文章也提及了 Android Auto 的其他更新，包括 Motorola MA2 無線轉接器的發布細節，以及 Google Meet 和 Google 地圖在 Android Auto 上的新功能推送。",
    tags: ["Android Auto", "Spotify", "YouTube Music", "Material 3", "介面優化", "Android 應用程式"],
    title_en: "Android Auto Media App Updates: Comprehensive Interface Redesign for Spotify and YouTube Music",
    summary_en: "Android Auto is gradually rolling out interface updates for several media applications, including Spotify and YouTube Music. Following extensive Beta testing, Spotify's music player has now rolled out an updated design, featuring blurred album art backgrounds, a Material 3 Expressive scrubber, and reorganized buttons. This design update is expected to be applied to other applications such as YouTube Music and Pocket Casts. Furthermore, users have noticed that Google's music streaming service has added a more prominent 'swipe down' icon. However, some users on YouTube Music have reported an issue where the 'Library' tab disappears, with the current temporary workaround being to reset the application on the phone. The article also mentions other Android Auto updates, including the release details for the Motorola MA2 wireless adapter, and new feature rollouts for Google Meet and Google Maps on Android Auto.",
    tags_en: ["Android Auto", "Spotify", "YouTube Music", "Material 3", "Interface Optimization", "Android Applications"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/android-auto-more-widely-rolling-out-updates-for-spotify-and-youtube-music-apps", lang: "EN" }
    ]
  },
  {
    id: "20260702-051",
    trackers: ["os"],
    category: "Android",
    title: "三星Android XR Galaxy Glasses外洩影片曝光：設計與功能細節分析",
    summary: "本文根據洩露的影片內容，詳細介紹了三星Android XR Galaxy Glasses的設計與操作機制。該款眼鏡的外觀設計類似Warby Parker，與Meta Ray-Ban款式有相似之處，但相較於Meta的顯示版本，三星的設計顯得更纖薄，可能得益於未採用波導式顯示器。功能上，眼鏡配備了右臂上的觸控板感應器，支援單指或雙指的滑動操作來控制音量和媒體。此外，右臂頂部設有快門按鈕，可進行拍照和錄影，錄影時會亮起LED警示。Galaxy Glasses設計為與任何Android設備協作，但與三星Galaxy系列搭配能提供最佳體驗，甚至可整合Now Bar功能，將拍攝的影像和影片顯示在配對的Galaxy手機上。這些資訊補充了先前從Galaxy Glasses伴侶App和充電盒洩露的內容，為市場對Android XR設備的期待提供了更完整的視覺參考。",
    tags: ["三星", "Galaxy Glasses", "Android XR", "可穿戴裝置", "智慧眼鏡", "One UI XR"],
    title_en: "Leaked Video of Samsung Android XR Galaxy Glasses Exposed: Analysis of Design and Features",
    summary_en: "Based on the leaked video content, this article provides a detailed introduction to the design and operational mechanisms of the Samsung Android XR Galaxy Glasses. The glasses' appearance is similar to Warby Parker and shares some resemblance with the Meta Ray-Ban style. However, compared to Meta's display version, Samsung's design appears more slender, possibly due to not adopting a waveguide display. Functionally, the glasses are equipped with a touchpad sensor on the right arm, supporting single or dual-finger swiping gestures to control volume and media. Furthermore, a shutter button is located on the top of the right arm, enabling photo and video capture. An LED warning light illuminates during video recording. The Galaxy Glasses are designed to cooperate with any Android device, but pairing them with a Samsung Galaxy series device provides the optimal experience, even integrating a Now Bar function to display captured images and videos on the paired Galaxy smartphone. This information supplements previously leaked content from the Galaxy Glasses companion App and charging case, offering a more complete visual reference for market expectations regarding Android XR devices.",
    tags_en: ["Samsung", "Galaxy Glasses", "Android XR", "Wearable Devices", "Smart Glasses", "One UI XR"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/leaked-galaxy-glasses-videos-detail-more-design", lang: "EN" }
    ]
  },
  {
    id: "20260702-052",
    trackers: ["os"],
    category: "Android",
    title: "三星宣布停用 Galaxy Watch 的「血管負荷」功能，轉向支援血壓趨勢監測",
    summary: "三星宣布，從 One UI 9 Watch (Wear OS 7) 和 Samsung Health 7.0 更新開始，將停止在美國地區支援「血管負荷」（Vascular Load）功能。此功能先前透過測量 PPG 波形，分析用戶睡眠期間的血容量和血管僵硬度，用以評估心血管風險。用戶需注意，停用後，相關數據將不會出現在 Samsung Health 中，但仍可透過「更多選項 > 設定 > 下載個人資料」下載。作為替代，三星將引入「血壓趨勢」（Blood pressure trend）功能。此新功能旨在定期檢查血壓，並呈現時間趨勢，同時提供健康習慣建議。使用此功能需要搭配傳統血壓計（blood pressure cuff）進行設置。此變動預計在七月下旬，作為 One UI 9 Watch 更新的一部分生效。所有健康監測功能均僅供健康參考，不能用於診斷或治療任何疾病，建議用戶如有健康疑慮應諮詢專業醫療人員。",
    tags: ["Samsung", "Galaxy Watch", "One UI 9 Watch", "Samsung Health", "Vascular Load", "血壓趨勢", "Wear OS 7"],
    title_en: "Samsung announces discontinuation of Galaxy Watch's 'Vascular Load' feature, transitioning to support blood pressure trend monitoring",
    summary_en: "Samsung announced that starting with the One UI 9 Watch (Wear OS 7) and Samsung Health 7.0 updates, it will cease supporting the 'Vascular Load' feature in the US region. This feature previously analyzed blood volume and vascular stiffness during user sleep by measuring the PPG waveform, used to assess cardiovascular risk. Users should note that after discontinuation, the related data will no longer appear in Samsung Health, but it can still be downloaded via 'More options > Settings > Download personal data.' As an alternative, Samsung will introduce the 'Blood pressure trend' feature. This new function aims to regularly check blood pressure and display time trends, while also providing healthy habit recommendations. Using this feature requires pairing with a traditional blood pressure cuff. This change is expected to take effect in late July as part of the One UI 9 Watch update. All health monitoring functions are for reference only and cannot be used for diagnosing or treating any disease; users with health concerns are advised to consult a professional medical practitioner.",
    tags_en: ["Samsung", "Galaxy Watch", "One UI 9 Watch", "Samsung Health", "Vascular Load", "Blood pressure trend", "Wear OS 7"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/samsung-galaxy-watch-vascular-load", lang: "EN" }
    ]
  },
  {
    id: "20260702-053",
    trackers: ["os"],
    category: "Android",
    title: "Android 17穩定版發布後，Google Pixel用戶回報Wi-Fi連線不穩與遊戲效能下降問題",
    summary: "Google Pixel手機已發布穩定版的Android 17系統更新。然而，部分用戶回報該更新導致了多項使用問題。主要問題包括Wi-Fi連線不穩定，用戶報告連線會間歇性中斷或表現不佳，網路性能出現異常。此外，另有用戶指出在Android 17更新後，部分遊戲（如Clash Royale、Brawl Stars等中階遊戲）出現卡頓和延遲現象，疑似與GPU性能限制有關。雖然這些問題的影響範圍似乎不甚普遍，但由於用戶回報數量較多，值得關注。文章指出，遊戲性能問題可能與最新的Google Play System更新有關，但尚未提供確切技術細節。建議用戶留意自身設備的網路和遊戲體驗，並關注Google後續的系統修補或官方公告。",
    tags: ["Google Pixel", "Android 17", "Wi-Fi", "遊戲效能", "系統更新", "Android 平台"],
    title_en: "After Android 17 Stable Release, Google Pixel Users Report Wi-Fi Instability and Gaming Performance Degradation",
    summary_en: "Google Pixel phones have received the stable release of the Android 17 operating system update. However, some users have reported multiple issues following this update. The primary problems include unstable Wi-Fi connectivity; users report intermittent disconnections or poor performance, leading to abnormal network performance. Furthermore, some users have pointed out that after the Android 17 update, certain games (such as Clash Royale and Brawl Stars, mid-tier games) experience stuttering and latency, which is suspected to be related to GPU performance limitations. Although the impact of these issues does not appear to be widespread, the high volume of user reports warrants attention. The article notes that the gaming performance issue might be related to the latest Google Play System update, but specific technical details have not been provided. Users are advised to monitor their device's network and gaming experience, and to follow Google's subsequent system patches or official announcements.",
    tags_en: ["Google Pixel", "Android 17", "Wi-Fi", "Gaming Performance", "System Update", "Android Platform"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/google-pixel-android-17-wi-fi-game-performance-issues-reports", lang: "EN" }
    ]
  },
  {
    id: "20260702-054",
    trackers: ["os"],
    category: "Android",
    title: "三星訊息應用程式（Samsung Messages）將於 7 月 6 日停用，用戶將自動轉移至 Google Messages",
    summary: "三星訊息應用程式（Samsung Messages）作為 Galaxy 手機預裝多年的 SMS 應用，宣布將於 7 月 6 日正式停用。此變動是受 RCS 訊息功能推動，以及 Google Messages 逐漸成為 Galaxy 手機預設的趨勢所致。對於運行 Android 14 或更高版本的 Galaxy 設備，Samsung Messages 將會「自動轉移」至 Google Messages，包括主畫面圖示的變更。只有運行舊版 Android 系統的舊型 Galaxy 設備，仍可繼續使用 Samsung Messages。文章指出，用戶不願轉移的主要原因是偏好 Samsung 應用程式的佈局和特色。此變動代表了手機作業系統生態系中，預設通訊應用程式的整合與標準化趨勢。",
    tags: ["Samsung Messages", "Google Messages", "Android 14", "SMS", "RCS", "Galaxy"],
    title_en: "Samsung Messages will be decommissioned on July 6, users will automatically transition to Google Messages",
    summary_en: "Samsung Messages, the SMS application pre-installed on Galaxy phones for many years, has announced its official decommissioning on July 6. This change is driven by the push for RCS messaging features and the trend of Google Messages becoming the default application on Galaxy phones. For Galaxy devices running Android 14 or higher, Samsung Messages will 'automatically transition' to Google Messages, including changes to the main screen icon. Only older Galaxy devices running older Android operating systems can continue to use Samsung Messages. The article notes that the main reason users do not want to transition is their preference for the layout and features of the Samsung application. This change represents a trend toward integration and standardization of default communication applications within the mobile operating system ecosystem.",
    tags_en: ["Samsung Messages", "Google Messages", "Android 14", "SMS", "RCS", "Galaxy"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/samsung-messages-july-shut-down-reminder", lang: "EN" }
    ]
  },
  {
    id: "20260702-055",
    trackers: ["os"],
    category: "Android",
    title: "CalyxOS 宣布重啟開發流程，採用新版 HSM 簽名機制發布 7.2.2.0 版本",
    summary: "隱私導向的 Android 發行版 CalyxOS 宣布暫停所有發布，以重構其發布流程、安全協議，並更換簽名金鑰。在經歷了重大的基礎設施升級後，CalyxOS 隨後宣布正式恢復開發，並發布了 7.2.2.0 版本。新版本最大的安全改動是採用了自研的、基於 HSM（硬體安全模組）的開源簽名解決方案。此舉旨在提升整個簽名流程的安全性，確保備援性，並消除單點故障。此外，CalyxOS 也改善了伺服器結構，並開發了腳本來減少應用每月補丁和更新的開銷。然而，由於 AOSP 原始碼發布頻率較低，仍需要手動步驟，例如為每次更新請求和儲存核心原始碼。開發團隊目前持續維護 LineageOS 和 CalyxOS 的基礎設備樹，以彌補 Google Pixel 設備樹缺失造成的空缺。",
    tags: ["CalyxOS", "Android", "HSM", "AOSP", "設備樹", "安全簽名"],
    title_en: "CalyxOS Announces Restarted Development Process, Releases 7.2.2.0 Version with New HSM Signing Mechanism",
    summary_en: "The privacy-focused Android distribution CalyxOS announced a temporary halt to all releases to restructure its release process and security protocols, and to change its signing keys. Following major infrastructure upgrades, CalyxOS subsequently announced the formal resumption of development and released version 7.2.2.0. The most significant security change in the new version is the adoption of a proprietary, open-source signing solution based on HSM (Hardware Security Module). This measure aims to enhance the security of the entire signing process, ensure redundancy, and eliminate single points of failure. Furthermore, CalyxOS improved its server structure and developed scripts to reduce the overhead of monthly application patching and updates. However, due to the low release frequency of AOSP source code, manual steps are still required, such as requesting and storing core source code for each update. The development team continues to maintain the base device trees for LineageOS and CalyxOS to compensate for the gaps left by the lack of Google Pixel device trees.",
    tags_en: ["CalyxOS", "Android", "HSM", "AOSP", "Device Tree", "Secure Signing"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081038", lang: "EN" }
    ]
  },
  {
    id: "20260702-056",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Elastic推出Agentic SOC：利用工作流與ES|QL自動化警報初篩，大幅提升資安分析效率",
    summary: "隨著AI攻擊時間線縮短，傳統的手動警報初篩已難以跟上警報量。Elastic InfoSec團隊開發了Agentic SOC模式，利用其原生堆疊（Workflows, Agent Builder, Elastic Inference Service, Kibana Cases）自動化警報調查工作。該系統的核心優勢在於，它將可透過查詢（Query）解決的誤報模式，優先使用確定性、零成本的ES|QL查詢進行關閉，而非耗費資源的LLM呼叫。對於IP來源的警報，工作流可自動執行多達16個ES|QL查詢，檢查來源IP是否與已知企業基礎設施匹配，例如檢查Okta是否有低風險的MFA登入紀錄。若查詢成功，警報將立即關閉，無需人工介入。這大幅縮短了調查時間，將原本需數十分鐘的手動調查縮短至數分鐘，讓分析師能專注於真正需要判斷的警報。",
    tags: ["Elastic Security", "Agentic SOC", "ES|QL", "Workflows", "SIEM", "警報初篩"],
    title_en: "Elastic Launches Agentic SOC: Automating Initial Alert Triage with Workflows and ES|QL to Greatly Enhance Security Analysis Efficiency",
    summary_en: "As AI attack timelines shorten, traditional manual alert triage struggles to keep pace with the volume of alerts. The Elastic InfoSec team has developed the Agentic SOC model, which utilizes its native stack (Workflows, Agent Builder, Elastic Inference Service, Kibana Cases) to automate alert investigation workflows. The core advantage of this system is that it prioritizes closing false positive patterns—which could otherwise be solved via a Query—using deterministic, zero-cost ES|QL queries, rather than resource-intensive LLM calls. For alerts related to IP sources, the workflow can automatically execute up to 16 ES|QL queries to check if the source IP matches known corporate infrastructure, such as checking Okta for low-risk MFA login records. If the query is successful, the alert is immediately closed without manual intervention. This significantly reduces investigation time, shrinking manual investigations that once took tens of minutes down to mere minutes, allowing analysts to focus on alerts that truly require judgment.",
    tags_en: ["Elastic Security", "Agentic SOC", "ES|QL", "Workflows", "SIEM", "Alert Triage"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/alert-triage-agentic-soc-elastic-workflows", lang: "EN" }
    ]
  },
  {
    id: "20260702-057",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI 代理人挑戰傳統身份生命週期管理：企業治理模型面臨結構盲點",
    summary: "傳統的身份生命週期管理（Identity Lifecycle Management, ILM）模型，其核心假設是所有身份都與人類員工掛鉤，並由人力資源（HR）系統作為權威來源，透過「入職者」、「異動者」和「離職者」等事件來控制存取權限。這種模型依賴於角色權限控制（RBAC）和審計追蹤，能有效管理人類主體（Human Principal）的存取。然而，隨著自主式 AI 代理人（AI Agents）的普及，傳統的 ILM 治理模型面臨結構性盲點。AI 代理人並非透過 HR 系統生成，其存取權限通常來自開發者提交的配置檔、平台 API 呼叫或自動化編排層（如 LangChain、AutoGen），這些事件無法觸及傳統的身份治理平台。代理人通常攜帶的是靜態的服務帳號、API Key 或 OAuth 權限，但其行為卻是動態的，可能透過工具呼叫或 RAG 檢索，跨越原始設計範圍，累積超出預期範圍的存取權限，使得傳統的權限控制和審計機制失效。",
    tags: ["AI 代理人", "身份生命週期管理", "IGA", "RBAC", "企業治理", "自動化系統"],
    title_en: "AI Agents Challenge Traditional Identity Lifecycle Management: Enterprise Governance Models Face Structural Blind Spots",
    summary_en: "Traditional Identity Lifecycle Management (ILM) models operate on the core assumption that all identities are tied to human employees and that Human Resources (HR) systems serve as the authoritative source for controlling access through events such as 'onboarding,' 'transfer,' and 'offboarding.' This model relies on Role-Based Access Control (RBAC) and audit trails, effectively managing the access of Human Principals. However, with the proliferation of autonomous AI Agents, traditional ILM governance models face structural blind spots. AI Agents are not generated through HR systems; their access rights typically originate from configuration files submitted by developers, platform API calls, or automation orchestration layers (such as LangChain or AutoGen). These events are inaccessible to traditional identity governance platforms. Agents usually carry static service accounts, API Keys, or OAuth permissions, but their behavior is dynamic. They may utilize tool calls or RAG retrieval, crossing beyond their original design scope and accumulating access rights that exceed expectations, thereby rendering traditional access control and auditing mechanisms ineffective.",
    tags_en: ["AI Agents", "Identity Lifecycle Management", "IGA", "RBAC", "Enterprise Governance", "Automation Systems"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/identity-lifecycle-management.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-058",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI代理執行勒索軟體攻擊：Sysdig揭露JADEPUFFER利用Langflow漏洞入侵企業資料庫",
    summary: "資安公司Sysdig揭露，其研究團隊發現了由AI代理（AI agent）從頭到尾執行的首例勒索軟體攻擊，代號JADEPUFFER。此次攻擊利用了Langflow的未經身份驗證的遠端代碼執行漏洞（CVE-2025-3248），該漏洞允許攻擊者無需登入即可在伺服器上運行自定義Python代碼。Langflow作為建構AI應用和代理工作流的開源工具，因常暴露於網際網路且包含API金鑰和雲端憑證，成為誘人目標。攻擊代理進入系統後，迅速掃描了AI服務（如OpenAI、Anthropic等）和雲端服務（AWS、Azure、阿里、騰訊等）的密鑰和憑證。隨後，它利用MinIO的預設登入帳密，並透過一個2021年的認證繞過漏洞（CVE-2021-29441）進入Nacos服務，最終加密並刪除了Nacos的設定資料，並留下無法解密的勒索備忘錄。Sysdig警告，AI代理使攻擊的門檻極低，建議修補Langflow，並將所有AI工具的秘密憑證儲存在專門的密鑰管理器中，同時應加強Nacos等服務的安全性，避免使用預設密碼和Root權限。",
    tags: ["AI代理", "勒索軟體", "Langflow", "CVE-2025-3248", "Sysdig", "雲端憑證"],
    title_en: "AI Agent Executes Ransomware Attack: Sysdig Reveals JADEPUFFER Exploiting Langflow Vulnerability to Breach Corporate Databases",
    summary_en: "Security company Sysdig's research team discovered the first ransomware attack executed end-to-end by an AI agent, codenamed JADEPUFFER. This attack exploited an unauthenticated Remote Code Execution (RCE) vulnerability (CVE-2025-3248) in Langflow, which allows attackers to run custom Python code on a server without logging in. Because Langflow is an open-source tool for building AI applications and agent workflows, and is often exposed to the internet and contains API keys and cloud credentials, it became an attractive target. After the attack agent entered the system, it quickly scanned for keys and credentials for AI services (such as OpenAI, Anthropic, etc.) and cloud services (AWS, Azure, Alibaba, Tencent, etc.). Subsequently, it utilized the default credentials of MinIO and gained access to the Nacos service via a 2021 authentication bypass vulnerability (CVE-2021-29441). Finally, it encrypted and deleted Nacos configuration data, leaving behind an unrecoverable ransomware note. Sysdig warns that AI agents significantly lower the barrier to entry for attacks, recommending patching Langflow, storing all AI tool secret credentials in dedicated key managers, and strengthening the security of services like Nacos to avoid using default passwords and root privileges.",
    tags_en: ["AI Agent", "Ransomware", "Langflow", "CVE-2025-3248", "Sysdig", "Cloud Credentials"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260702-059",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta宣布Meta One Premium訂閱服務，限制AI眼鏡功能使用，影響用戶體驗",
    summary: "Meta宣布推出Meta One Premium訂閱服務，價格為每月20美元，該服務將提供更廣泛的AI功能存取權，特別是針對其智慧眼鏡上的「Conversation Focus」功能。雖然Meta聲稱該訂閱費用於支持AI的持續開發和提供高級設備支援，但文章指出，該功能似乎是完全在設備本地運行的，而非依賴雲端連接。目前，未訂閱用戶每月使用Conversation Focus的時長限制為3小時，而付費訂閱用戶的限制則為15小時，這顯示該功能的使用權限被商業化和限制化。這項策略讓原本可能被視為設備內建核心功能的AI能力，必須透過訂閱服務才能獲得更長的使用時長，實質上增加了用戶的營運成本和使用門檻。",
    tags: ["Meta", "Meta One Premium", "AI眼鏡", "Conversation Focus", "訂閱服務", "使用限制"],
    title_en: "Meta announces Meta One Premium subscription service, restricting AI glasses functionality and impacting user experience",
    summary_en: "Meta has announced the launch of Meta One Premium, a subscription service priced at $20 per month. This service will provide broader access to AI features, particularly for the \"Conversation Focus\" function on its smart glasses. Although Meta claims the subscription fee supports continuous AI development and advanced device support, the article points out that this function appears to operate entirely on the device locally, rather than relying on cloud connectivity. Currently, non-subscribing users are limited to 3 hours of monthly use for Conversation Focus, while paid subscribers are limited to 15 hours, indicating that the usage rights for this feature are being commercialized and restricted. This strategy means that AI capabilities, which might otherwise be considered core built-in device features, must be acquired through a subscription service to achieve longer usage times, effectively increasing the user's operational cost and usage threshold.",
    tags_en: ["Meta", "Meta One Premium", "AI glasses", "Conversation Focus", "Subscription service", "Usage limit"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/meta-glasses-get-premium-usage-limits", lang: "EN" }
    ]
  },
  {
    id: "20260702-060",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 停止銷售 Nest x Yale Lock，轉向推薦 Yale Matter Smart Lock 替代品",
    summary: "Google 官方已從 Google Store 完全移除 Nest x Yale Lock 的銷售頁面，標誌著這款曾是知名的智慧門鎖產品線的終結。雖然 Nest x Yale Lock 於 2025 年初已正式停產，但其支援仍持續到今年，例如 Google Home App 仍提供完整支援。Google 的替代方案是 Yale Matter Smart Lock，該產品於 2025 年宣布，旨在取代 Nest x Yale Lock 的功能，並設計風格與 Google Nest Doorbell 匹配。值得注意的是，Google Store 現在僅將潛在購買者導向 Yale 官方網站購買，這是 Google Store 首次不直接銷售智慧門鎖產品。此外，該替代產品在 Amazon 等其他平台也廣泛販售，價格更具競爭力。",
    tags: ["Google Store", "Nest x Yale Lock", "Yale Matter Smart Lock", "智慧門鎖", "Matter 協議", "Google Home"],
    title_en: "Google Discontinues Sales of Nest x Yale Lock, Recommends Yale Matter Smart Lock Alternative",
    summary_en: "Google has completely removed the sales page for the Nest x Yale Lock from the Google Store, marking the end of this well-known smart lock product line. Although the Nest x Yale Lock officially ceased production in early 2025, its support continues until this year, for example, the Google Home App still provides full support. Google's alternative is the Yale Matter Smart Lock, a product announced in 2025, designed to replace the functionality of the Nest x Yale Lock and match the design aesthetic of the Google Nest Doorbell. Notably, the Google Store now only directs potential buyers to the official Yale website for purchase, which is the first time the Google Store has not directly sold a smart lock product. Furthermore, this alternative product is widely available on other platforms like Amazon, offering more competitive pricing.",
    tags_en: ["Google Store", "Nest x Yale Lock", "Yale Matter Smart Lock", "Smart Lock", "Matter Protocol", "Google Home"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/google-stops-selling-nest-x-yale-lock", lang: "EN" }
    ]
  },
  {
    id: "20260702-061",
    trackers: ["os"],
    category: "重點關注",
    title: "分析報告預測：蘋果進入摺疊手機市場，將推升平均售價，預計提升 18%",
    summary: "根據 Counterpoint Research 的報告，預計蘋果進入摺疊手機市場，將是推動該品類平均售價（ASP）上漲的主要因素。報告指出，到 2026 年，摺疊手機的平均售價預計達到 1,485 美元，較 2025 年增長 18%。其中，預期具備「書本式」（Book-type）外形的摺疊機型，如傳聞中的 iPhone Fold，將持續保持高價位，而「封閉式」（Clamshell）機型則預計將趨於平價化。由於書本式機型佔據了更高的市場份額，並整合了更大的螢幕、更佳的鉸鏈、更大的電池和更多生產力功能，推動了整體 ASP 上升。報告預測，價格介於 1,600 至 2,000 美元之間的機型份額將從 2025 年的 30% 增至 2026 年的 58%。蘋果的加入，預計將持續提升市場對高價區間的關注，並推動產業對軟體連續性與生產力支援的興趣。",
    tags: ["Apple", "摺疊手機", "Counterpoint Research", "iPhone Fold", "平均售價", "市場趨勢"],
    title_en: "Analysis Report Forecast: Apple's Entry into the Foldable Phone Market Will Boost Average Selling Price, Expected to Increase by 18%",
    summary_en: "According to a Counterpoint Research report, Apple's entry into the foldable phone market is expected to be the main driver pushing up the Average Selling Price (ASP) of the category. The report indicates that by 2026, the ASP for foldable phones is projected to reach $1,485, representing an 18% increase from 2025. Specifically, book-type foldable models, such as the rumored iPhone Fold, are expected to maintain high price points, while clamshell models are anticipated to become more affordable. Since book-type models account for a larger market share and integrate larger screens, better hinges, larger batteries, and more productivity features, they are driving the overall ASP increase. The report forecasts that the share of models priced between $1,600 and $2,000 will increase from 30% in 2025 to 58% in 2026. Apple's addition is expected to sustain market focus on the high-end segment and drive industry interest in software continuity and productivity support.",
    tags_en: ["Apple", "Foldable Phone", "Counterpoint Research", "iPhone Fold", "Average Selling Price", "Market Trend"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/iphone-fold-could-help-raise-average-foldable-phone-prices-by-18-per-report", lang: "EN" }
    ]
  },
  {
    id: "20260702-062",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 股價反彈：市場樂觀其未來產品線與銷量預測",
    summary: "本文報導 Apple 股價在先前因產品價格上漲而下跌後，於假日週末前夕反彈，上漲 5%。市場的樂觀情緒主要來自於市場傳聞，Apple 正在要求供應商增加可折疊式 iPhone Ultra 型號的產量。根據 Nikkei Asia 的報導，Apple 已將銷量預測從 700 萬至 800 萬台提升至約 1,000 萬台。儘管這款超高價的 iPhone 仍佔 Apple 年度總銷量的極小部分，但 IDC 預計 Apple 在 2026 年的總銷量仍可達 2.4 億台。投資者對 Apple 的未來產品線和市場表現抱持積極態度。",
    tags: ["Apple", "AAPL", "股價", "iPhone", "市場分析", "產品線"],
    title_en: "Apple Stock Rebounds: Market Optimistic on Future Product Line and Sales Forecast",
    summary_en: "This article reports that Apple's stock rebounded by 5% just before the holiday weekend, after falling previously due to product price increases. The market's optimism stems mainly from rumors that Apple is asking suppliers to increase production of the foldable iPhone Ultra model. According to Nikkei Asia, Apple has raised its sales forecast for this model from 7 million to 8 million units to approximately 10 million units. Although this ultra-high-priced iPhone still accounts for a very small portion of Apple's annual total sales, IDC predicts that Apple's total sales in 2026 will still reach 240 million units. Investors maintain a positive outlook on Apple's future product line and market performance.",
    tags_en: ["Apple", "AAPL", "Stock Price", "iPhone", "Market Analysis", "Product Line"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/apples-stock-recovers-after-hit-from-unprecedented-price-hikes-on-products", lang: "EN" }
    ]
  },
  {
    id: "20260702-063",
    trackers: ["os"],
    category: "重點關注",
    title: "iFixit 發布影片揭露 iPhone 電池組裝與測試的製造流程",
    summary: "資安新聞編輯閱讀此文後，判斷此文章內容為產品拆解與製造流程展示，與資安議題無關。文章內容介紹 iFixit 在 YouTube 上發布了一支影片，展示了 iPhone 電池從裸電池到成品組裝的完整製造過程。影片詳細涵蓋了電池管理系統（BMS）的編程、電路板的組裝、品質檢測，以及最終將電池安裝到 iPhone 並開機的步驟。這類內容屬於硬體維修與產品知識分享，不涉及任何作業系統、韌體、軟體漏洞或資安威脅資訊。因此，本摘要僅描述內容性質，並強調其非資安相關性。",
    tags: ["iFixit", "iPhone", "電池組裝", "硬體維修", "產品知識"],
    title_en: "iFixit releases video revealing the manufacturing process of iPhone battery assembly and testing",
    summary_en: "After reading this article, a cybersecurity news editor would determine that the content is a product teardown and manufacturing process display, unrelated to cybersecurity issues. The article introduces a video published by iFixit on YouTube, which demonstrates the complete manufacturing process of an iPhone battery, from the bare cell to the finished assembly. The video details the programming of the Battery Management System (BMS), the assembly of the circuit board, quality inspection, and the final steps of installing the battery into the iPhone and powering it on. This type of content belongs to hardware repair and product knowledge sharing, and does not involve operating system, firmware, software vulnerabilities, or cybersecurity threat information. Therefore, this summary only describes the nature of the content and emphasizes its non-cybersecurity relevance.",
    tags_en: ["iFixit", "iPhone", "Battery Assembly", "Hardware Repair", "Product Knowledge"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/new-ifixit-video-shows-how-an-iphone-battery-is-made", lang: "EN" }
    ]
  },
  {
    id: "20260702-064",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 產品促銷資訊：AirPods 4、M5 iPad Pro 與 M4 iPad Air 優惠詳情",
    summary: "本文為科技產品的促銷資訊彙整，而非資安新聞。內容主要介紹了多項 Apple 產品的折扣優惠，包括 AirPods 4、M5 iPad Pro 和 M4 iPad Air 等。目前可透過 Amazon 購買到 AirPods 4 的折扣，以及 M5 iPad Pro 和 M4 iPad Air 的大幅折扣。此外，文章也列出了其他官方配件的促銷資訊，如 AirTag 2、Magic Keyboard 等。讀者應注意，此為消費性資訊，不涉及任何安全漏洞、修補或資安風險。",
    tags: ["Apple", "AirPods 4", "M5 iPad Pro", "M4 iPad Air", "促銷", "消費電子"],
    title_en: "Apple Product Promotion Information: Details on Discounts for AirPods 4, M5 iPad Pro, and M4 iPad Air",
    summary_en: "This article compiles promotional information for consumer technology products, and is not a cybersecurity news report. The content primarily introduces discount offers for various Apple products, including AirPods 4, M5 iPad Pro, and M4 iPad Air. Currently, readers can find discounts on AirPods 4, as well as significant discounts on the M5 iPad Pro and M4 iPad Air, available through Amazon. Furthermore, the article lists promotional details for other official accessories, such as AirTag 2 and Magic Keyboard. Readers should note that this is consumer information and does not involve any security vulnerabilities, patches, or cybersecurity risks.",
    tags_en: ["Apple", "AirPods 4", "M5 iPad Pro", "M4 iPad Air", "Promotion", "Consumer Electronics"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/deals-airpods-4-m5-ipad-pro-m4-ipad-air-airtag-2", lang: "EN" }
    ]
  },
  {
    id: "20260702-065",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple與Epic Games協商延期App Store訴訟程序，等待最高法院裁決",
    summary: "本案涉及Apple與Epic Games之間關於App Store規則的長期法律糾紛。美國最高法院已同意審理Apple關於外部連結購買是否可處「藐視法庭」（contempt）的質疑，但拒絕審理禁令的廣泛適用範圍。原定在地區法院進行的審理程序，包括Apple提出實施方案（預計於7月6日）和提供文件（預計於7月16日），原定與最高法院的審理進度同步進行。為此，雙方已共同向地區法院申請短期延期，旨在等待最高法院就Apple提出的暫停（stay）訴請做出裁決。新的提議排程為：Apple於7月6日提交暫停動議，Epic於7月10日回應，Apple於7月13日提交回覆。此延期排程仍需法官Yvonne Gonzalez Rogers簽署方可生效，目前原定期限技術上仍有效。",
    tags: ["Apple", "Epic Games", "App Store", "法律訴訟", "最高法院", "美國法律"],
    title_en: "Apple and Epic Games Negotiate Extension for App Store Lawsuit Proceedings, Awaiting Supreme Court Ruling",
    summary_en: "This case involves a long-standing legal dispute between Apple and Epic Games regarding App Store rules. The U.S. Supreme Court has agreed to hear Apple's challenge regarding whether external link purchases can constitute 'contempt,' but declined to hear the scope of the injunction. The original trial schedule in the district court, which included Apple submitting an implementation plan (scheduled for July 6) and providing documents (scheduled for July 16), was set to proceed concurrently with the Supreme Court proceedings. Therefore, both parties have jointly applied to the district court for a short extension, aiming to await the Supreme Court's ruling on Apple's motion for a stay. The new proposed schedule is: Apple submits the motion for stay on July 6, Epic responds on July 10, and Apple submits a reply on July 13. This extension schedule remains effective only upon signature by Judge Yvonne Gonzalez Rogers; currently, the original deadline remains technically valid.",
    tags_en: ["Apple", "Epic Games", "App Store", "Lawsuit", "Supreme Court", "US Law"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/01/apple-to-ask-court-to-halt-epic-games-proceedings-pending-supreme-court-ruling", lang: "EN" }
    ]
  },
  {
    id: "20260702-066",
    trackers: ["os"],
    category: "重點關注",
    title: "歐盟法院維持 Google 濫用 Android 壟斷地位的鉅額罰款，罰款總額達 41 億歐元",
    summary: "Google 曾就其在 Android 系統上的壟斷行為，在歐洲面臨鉅額罰款。該案最初於 2018 年被處以 43.4 億歐元的罰款，後經減額至 41 億歐元。歐盟法院（Court of Justice of the European Union）已駁回 Google 及其母公司 Alphabet 的上訴，正式確認了這項罰款。罰款的根源在於 Google 將其搜尋引擎和 Chrome 等服務作為預設選項，透過 Android 授權協議，讓包括三星、小米等其他製造商的設備也必須預設包含 Google 應用程式，這被歐盟反壟斷監管機構視為給予 Google 不公平的市場優勢。此判決與過去歐盟對微軟（Microsoft）限制其瀏覽器壟斷的案例有相似之處。Google 的市場地位雖然仍穩固，但此判決再次強調了其在 Android 生態系統中壟斷行為的法律風險。",
    tags: ["Google", "Android", "歐盟", "反壟斷", "Court of Justice of the European Union", "壟斷"],
    title_en: "EU Court Upholds Massive Fine Against Google for Abusing Android Dominance, Totaling €4.1 Billion",
    summary_en: "Google has faced massive fines in Europe regarding its monopolistic practices within the Android system. The case was initially fined €4.34 billion in 2018, which was later reduced to €4.1 billion. The Court of Justice of the European Union has dismissed the appeal filed by Google and its parent company Alphabet, formally confirming this fine. The root of the fine lies in Google making its search engine and services like Chrome mandatory default options. Through the Android licensing agreement, devices from other manufacturers, including Samsung and Xiaomi, were required to pre-install Google applications. The EU antitrust regulator viewed this as granting Google an unfair market advantage. This ruling is similar to past EU cases restricting Microsoft's browser monopoly. Although Google's market position remains strong, this judgment once again highlights the legal risks associated with its monopolistic behavior within the Android ecosystem.",
    tags_en: ["Google", "Android", "EU", "Antitrust", "Court of Justice of the European Union", "Monopoly"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/07/google-loses-long-running-appeal-of-record-eu-fine-will-have-to-cough-up-4-7-billion", lang: "EN" }
    ]
  },
  {
    id: "20260702-067",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 洽談美國政府投資：探討透過股權讓公眾參與 AI 產業的模式",
    summary: "本文報導指出 OpenAI 執行長 Sam Altman 正在與川普政府進行初步洽談，討論美國是否可能取得該領先 AI 公司的 5% 股權。Altman 認為，讓公眾在公司擁有財務股權，是分享 AI 產業潛在收益的最佳方式。此概念受到川普的支持，且政府據稱已與 Google 和 Meta 等多家 AI 公司討論類似的股權分享可能性。然而，Meta 尚未主動同意與政府分享前沿 AI 模型進行安全測試。目前，AI 產業正努力應對公眾對 AI 的負面情緒，甚至有研究指出美國民眾對 AI 的看法傾向負面。為此，OpenAI 甚至建議美國設立類似阿拉斯加永久基金的國有財富基金，以鼓勵公眾接受 AI 技術。此舉顯示 AI 產業正積極尋求與政府合作，以應對監管壓力與社會接受度挑戰。",
    tags: ["OpenAI", "Sam Altman", "AI 產業", "美國政府", "股權投資", "AI 監管", "國有財富基金"],
    title_en: "OpenAI Discusses Potential US Government Investment: Exploring Public Participation in the AI Industry via Equity",
    summary_en: "This report indicates that OpenAI CEO Sam Altman is in preliminary discussions with the Trump administration regarding the possibility of the U.S. government acquiring a 5% stake in the leading AI company. Altman believes that allowing the public to hold financial equity in the company is the best way to share the potential returns of the AI industry. This concept has received support from Trump, and the government has reportedly discussed similar equity sharing possibilities with several other AI companies, including Google and Meta. However, Meta has not yet proactively agreed to share its cutting-edge AI models for safety testing with the government. Currently, the AI industry is working to address public negative sentiment toward AI, with some studies even suggesting that American public opinion tends to be negative regarding AI. To address this, OpenAI has even suggested the establishment of a state-owned wealth fund in the U.S., similar to the Alaska Permanent Fund, to encourage public acceptance of AI technology. This move demonstrates the AI industry's proactive efforts to collaborate with the government to manage regulatory pressure and social acceptance challenges.",
    tags_en: ["OpenAI", "Sam Altman", "AI Industry", "US Government", "Equity Investment", "AI Regulation", "State-Owned Wealth Fund"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/openai-floats-giving-us-5-stake-to-win-over-ai-haters", lang: "EN" }
    ]
  },
  {
    id: "20260702-068",
    trackers: ["os"],
    category: "重點關注",
    title: "隱私倡議者警告：X平台（原Twitter）的資料處理風險，呼籲聯邦貿易委員會（FTC）持續監管",
    summary: "多位隱私與消費者保護倡議組織，包括電子前沿基金會（EFF）等，警告聯邦貿易委員會（FTC）必須持續嚴密監控Elon Musk旗下的X平台。此前，X曾向FTC提出申請，主張由於平台已進行重大改動，原有的資料處理監管令已不再必要。該監管令最初是因FTC發現原Twitter因程式錯誤，不當分享了用戶用於雙重驗證的聯絡資訊，以用於廣告定位。目前，X主張該監管令成本過高且要求重複，並以歐盟GDPR的義務為例。然而，倡議者們反駁稱，X的行為對美國民眾的隱私和資料安全構成嚴重風險，強調FTC必須拒絕X逃避問責的企圖，並維持持續的監管力度。",
    tags: ["X平台", "FTC", "資料隱私", "聯邦貿易委員會", "數據安全", "GDPR"],
    title_en: "Privacy Advocates Warn: X Platform's Data Processing Risks, Urge FTC to Maintain Oversight",
    summary_en: "Multiple privacy and consumer protection advocacy groups, including the Electronic Frontier Foundation (EFF), have warned that the Federal Trade Commission (FTC) must continue to closely monitor the X platform, owned by Elon Musk. Previously, X applied to the FTC, arguing that the existing data processing consent decree was no longer necessary due to significant platform changes. The consent decree was originally issued after the FTC discovered that the original Twitter had improperly shared user contact information used for two-factor authentication for ad targeting purposes. Currently, X argues that the consent decree is too costly and redundant, citing the EU's GDPR obligations as an example. However, advocates counter that X's actions pose a serious risk to the privacy and data security of American citizens, emphasizing that the FTC must reject X's attempts to evade accountability and maintain continuous regulatory oversight.",
    tags_en: ["X Platform", "FTC", "Data Privacy", "Federal Trade Commission", "Data Security", "GDPR"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/musks-x-poses-serious-risk-to-americans-privacy-advocates-warn-ftc", lang: "EN" }
    ]
  },
  {
    id: "20260702-069",
    trackers: ["os"],
    category: "重點關注",
    title: "Tesla 宣布 2026 年第二季度銷售數據：電動車銷量年增 25%，Model 3/Y 仍佔主導",
    summary: "本文報導特斯拉（Tesla）發布 2026 年第二季度的銷售與產能數據。總計在第二季度售出 480,126 輛電動車（EV），較去年同期增長 25%。其中，Model 3 和 Model Y 仍佔絕大部分銷售，共計 467,762 輛，增長 25.2%。雖然公司在第一季度曾面臨庫存過剩問題，但在第二季度總產量為 451,758 輛，雖然年增 10%，但比銷量減少了近 30,000 輛，顯示公司正在改善過度生產的狀況。此外，特斯拉的能源儲存銷售也表現良好，第二季度部署了 13.5 GWh，較去年同期增長 40%。銷售增長的主要動力來自歐洲市場。",
    tags: ["Tesla", "電動車", "Model 3", "Model Y", "能源儲存", "銷售數據"],
    title_en: "Tesla Announces Q2 2026 Sales Data: EV Sales Increase 25% Year-Over-Year, Model 3/Y Remain Dominant",
    summary_en: "This article reports on Tesla's sales and production data for the second quarter of 2026. A total of 480,126 electric vehicles (EVs) were sold in Q2, representing a 25% increase year-over-year. Among these, the Model 3 and Model Y accounted for the vast majority of sales, totaling 467,762 units, an increase of 25.2%. Although the company faced inventory surplus issues in Q1, the total production in Q2 reached 451,758 units. While this represents a 10% year-over-year increase, it is nearly 30,000 units less than the sales volume, indicating the company is improving its overproduction situation. Furthermore, Tesla's energy storage sales performed well, with 13.5 GWh deployed in Q2, a 40% increase year-over-year. The primary driver for the sales growth came from the European market.",
    tags_en: ["Tesla", "EV", "Model 3", "Model Y", "Energy Storage", "Sales Data"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/cars/2026/07/tesla-sales-increase-by-25-in-q2-2026", lang: "EN" }
    ]
  },
  {
    id: "20260702-070",
    trackers: ["os"],
    category: "重點關注",
    title: "核心開發社群評估 LLM 輔助的補丁集：探討人工智慧對作業系統安全開發的影響",
    summary: "本次討論聚焦於作業系統核心（kernel）開發社群，特別是記憶體管理領域的開發人員。社群觀察到，隨著大型語言模型（LLMs）的普及，許多自由軟體專案（如核心開發）開始接收到大量由 LLM 輔助開發的補丁。這些補丁來源往往來自社群內此前不為人知的開發者。目前，記憶體管理開發人員正在評估兩組由資深且受人尊敬的開發者提交、並利用 LLM 輔助開發的大規模補丁集。核心社群對這類貢獻的接收方式差異，預計將為未來 LLM 生成的程式碼貢獻如何被處理提供重要洞察。這顯示了軟體供應鏈和開發流程正處於轉型期，開發者和資安人員需關注 AI 工具在程式碼審核與安全驗證中的角色。",
    tags: ["LLMs", "Linux 核心", "軟體供應鏈", "程式碼審核", "AI 輔助開發", "記憶體管理"],
    title_en: "Core Development Communities Evaluate LLM-Assisted Patch Sets: Exploring AI's Impact on OS Security Development",
    summary_en: "This discussion focuses on the operating system kernel development community, particularly developers in the memory management domain. The community has observed that with the proliferation of Large Language Models (LLMs), many open-source projects (such as kernel development) are starting to receive a large volume of patches developed with LLM assistance. These patches often originate from developers within the community who were previously unknown. Currently, memory management developers are evaluating two large patch sets submitted by senior and respected developers, which utilized LLM assistance. The core community's differing reception to these types of contributions is expected to provide critical insights into how future LLM-generated code contributions will be handled. This highlights that the software supply chain and development processes are undergoing a period of transition, requiring developers and security professionals to pay attention to the role of AI tools in code review and security validation.",
    tags_en: ["LLMs", "Linux Kernel", "Software Supply Chain", "Code Review", "AI-Assisted Development", "Memory Management"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1080162", lang: "EN" }
    ]
  },
  {
    id: "20260702-071",
    trackers: ["os"],
    category: "重點關注",
    title: "SpacemiT K3 SoC 性能評測：深入分析 RISC-V RVV 1.0 向量擴展的效能影響",
    summary: "本文針對 SpacemiT K3 RISC-V SoC 進行效能基準測試，特別聚焦於其支援的 RISC-V 向量擴展 (RVV) 1.0 的性能表現。K3 是一款支援 RVA23 profile 的 RISC-V 晶片，搭載 X100/A100 核心。測試環境為運行 Bianbu 4.0、Linux 6.18 核心和 GCC 15.2 編譯器。測試初期嘗試透過修改 `/proc/sys/abi/riscv_v_default_allow` 系統介面來切換 RVV 支援，但發現此方法不可行，因為系統會因非法指令而無法運作。因此，測試改為透過手動調整相關軟體包的編譯選項或補丁，以比較啟用與禁用 RVV 支援時的性能差異。本次評測僅著重於性能量化，未涵蓋功耗指標。這顯示了 RISC-V 生態系在向量擴展的應用和系統層級的配置管理上，仍存在實務上的複雜度和挑戰。",
    tags: ["RISC-V", "RVV", "SpacemiT K3", "Linux 6.18", "向量擴展", "性能基準測試"],
    title_en: "SpacemiT K3 SoC Performance Evaluation: In-depth Analysis of RISC-V RVV 1.0 Vector Extension Performance Impact",
    summary_en: "This article conducts performance benchmarking on the SpacemiT K3 RISC-V SoC, specifically focusing on the performance characteristics of its supported RISC-V Vector Extension (RVV) 1.0. The K3 is a RISC-V chip supporting the RVA23 profile and equipped with X100/A100 cores. The testing environment utilized Bianbu 4.0, Linux 6.18 kernel, and GCC 15.2 compiler. Initially, the test attempted to switch RVV support by modifying the system interface `/proc/sys/abi/riscv_v_default_allow`, but this method proved infeasible because the system failed due to illegal instructions. Therefore, the test shifted to comparing performance differences by manually adjusting the compilation options or applying patches to relevant software packages, comparing the states with and without RVV support. This evaluation focused solely on quantitative performance metrics and did not cover power consumption indicators. This highlights that the RISC-V ecosystem still faces practical complexities and challenges in the application and system-level configuration management of vector extensions.",
    tags_en: ["RISC-V", "RVV", "SpacemiT K3", "Linux 6.18", "Vector Extension", "Performance Benchmarking"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/risc-v-rvv-vector-benchmarks", lang: "EN" }
    ]
  },
  {
    id: "20260702-072",
    trackers: ["os"],
    category: "重點關注",
    title: "Intel 為 AI 計算擴展 (ACE) 提供 GCC 編譯器初步補丁，推動 x86 平台 AI 運算能力",
    summary: "Intel 透過其工程師在 GCC 郵件清單上發布了初步的 GNU 編譯器集合（GCC）補丁，以支援新的 AI 計算擴展 (ACE)。ACE 擴展是 x86 生態系統諮詢小組定義的標準，旨在優化 x86 架構用於 AI 運算任務，特別是矩陣乘法等機器學習工作負載。ACEv1 擴展定義了增強 Advanced Vector Extensions (AVX) 和純量程式碼的矩陣乘法原始功能，新增了 ACE 暫存器狀態、處理資料操作以及在 AVX 暫存器和 ACE 暫存器之間移動資料的功能。此編譯器支援的開發工作部分基於 Intel 現有的 AMX-TILE 編譯器程式碼和 AVX-512 元素。Intel 希望此初步的 ACEv1 支援能夠納入明年（2025 年）的 GCC 17 穩定版編譯器中。這代表了 x86 平台在硬體支援和編譯器層面，持續強化其處理 AI 相關高密度運算的能力。",
    tags: ["Intel", "GCC", "AI Compute Extensions (ACE)", "x86", "AMX", "AVX-512", "編譯器"],
    title_en: "Intel Releases Preliminary GCC Compiler Patch for AI Compute Extensions (ACE), Boosting AI Computing Capabilities on x86 Platform",
    summary_en: "Intel's engineers have published preliminary GNU Compiler Collection (GCC) patches on the GCC mailing list to support the new AI Compute Extensions (ACE). The ACE extension is a standard defined by the x86 Ecosystem Advisory Group, designed to optimize the x86 architecture for AI computing tasks, particularly machine learning workloads such as matrix multiplication. The ACEv1 extension defines matrix multiplication primitives for enhanced Advanced Vector Extensions (AVX) and scalar code, adding ACE register state, processing data operations, and functionality for moving data between AVX and ACE registers. This compiler support development is partially based on Intel's existing AMX-TILE compiler code and AVX-512 elements. Intel aims for this preliminary ACEv1 support to be included in the GCC 17 stable release compiler next year (2025). This signifies the continuous strengthening of the x86 platform's ability to handle high-density AI-related computing at both the hardware and compiler levels.",
    tags_en: ["Intel", "GCC", "AI Compute Extensions (ACE)", "x86", "AMX", "AVX-512", "Compiler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-GCC-ACE-AI-Patches", lang: "EN" }
    ]
  },
  {
    id: "20260702-073",
    trackers: ["os"],
    category: "重點關注",
    title: "Rust 撰寫的 YSERVER X11 伺服器 1.3 版本發布，支援 FreeBSD 與 Xinerama 等新功能",
    summary: "YSERVER 是一個使用 Rust 語言開發的現代 X11 伺服器。開發者 Jos Dehaes 發布了 1.3 版本，大幅提升了其功能性。新版本支援 FreeBSD 系統，並加入了 Xinerama 擴充功能支援、直式模式 VT 切換、顯示熱插拔支援等。在功能層面，它還增加了 XFIXES 指標屏障和 XC-MISC XID 回收，並支援 RANDR gamma 校正。YSERVER 已成功在 MATE、Xfce、Cinnamon 等完整桌面環境，以及 Compiz、Openbox 等各種窗口管理器上進行了測試。硬體支援方面，其測試範圍涵蓋了 AMD、Intel、Snapdragon 和 Apple Silicon 等多種圖形晶片組。這款伺服器展示了 Rust 在底層系統組件開發上的潛力，對於尋求現代化、跨平台 X11 解決方案的開發者具有參考價值。",
    tags: ["YSERVER", "Rust", "X11", "FreeBSD", "Xinerama", "桌面環境", "跨平台"],
    title_en: "YSERVER X11 Server Version 1.3 Released, Supporting FreeBSD and New Features like Xinerama",
    summary_en: "YSERVER is a modern X11 server developed using the Rust language. Developer Jos Dehaes has released version 1.3, significantly enhancing its functionality. The new version supports the FreeBSD operating system and incorporates features such as Xinerama extension support, vertical mode VT switching, and display hot-plugging support. Functionally, it also adds XFIXES indicator barrier and XC-MISC XID recovery, and supports RANDR gamma correction. YSERVER has been successfully tested on complete desktop environments such as MATE, Xfce, and Cinnamon, as well as various window managers like Compiz and Openbox. In terms of hardware support, its testing scope covers multiple graphics chipsets including AMD, Intel, Snapdragon, and Apple Silicon. This server demonstrates the potential of Rust in developing low-level system components, offering valuable reference material for developers seeking a modern, cross-platform X11 solution.",
    tags_en: ["YSERVER", "Rust", "X11", "FreeBSD", "Xinerama", "Desktop Environment", "Cross-platform"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/YSERVER-1.3-Released", lang: "EN" }
    ]
  },
  {
    id: "20260702-074",
    trackers: ["os"],
    category: "重點關注",
    title: "Google帳戶盜用事件：開發者指控Google警告後仍收取高額費用",
    summary: "本文報導了一位開發者與Google之間發生的一起爭議事件。該開發者在嘗試使用Google服務時，曾被Google方面警告關於帳戶盜用的風險。然而，儘管收到了警告，該開發者仍被收取了高達 11,000 美元的費用。這起事件凸顯了在使用大型科技平台服務時，用戶在帳戶安全與費用責任之間的潛在風險。雖然文章未提供具體的技術漏洞或CVE資訊，但它強調了帳戶管理和服務使用規範的嚴謹性。對於開發者和用戶而言，應特別注意帳戶的安全性，並在涉及高額費用或敏感操作前，仔細閱讀服務條款與警告訊息，以避免不必要的經濟損失。",
    tags: ["Google", "帳戶安全", "開發者", "費用爭議", "資安風險"],
    title_en: "Google Account Misuse Incident: Developer Claims High Fees Charged Despite Google Warnings",
    summary_en: "This article reports on a dispute between a developer and Google. The developer was warned by Google regarding the risk of account misuse while attempting to use Google services. However, despite receiving the warning, the developer was charged fees as high as $11,000. This incident highlights the potential risks users face regarding account security and financial liability when utilizing large technology platform services. Although the article does not provide specific technical vulnerabilities or CVE information, it emphasizes the strictness required in account management and service usage protocols. For developers and users alike, it is crucial to pay special attention to account security and to carefully read service terms and warning messages before engaging in high-cost or sensitive operations, thereby avoiding unnecessary financial losses.",
    tags_en: ["Google", "Account Security", "Developer", "Fee Dispute", "Cybersecurity Risk"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/03/dev-says-google-warned-him-about-account-hijack-then-charged-him-11000-anyway/5266234", lang: "EN" }
    ]
  },
  {
    id: "20260702-075",
    trackers: ["os"],
    category: "重點關注",
    title: "AI生成報告誤指控：初創公司起訴Palo Alto Networks，指控其將虛假情報與中國間諜活動關聯",
    summary: "本事件涉及一間初創公司對Palo Alto Networks提起的法律訴訟。訴訟的核心爭議點在於，Palo Alto Networks的報告中，錯誤地將該初創公司與中國間諜活動進行了關聯。這類誤指控的資訊來源，被指為由人工智慧（AI）模型「幻覺」（hallucinated）所生成，導致了嚴重的聲譽和法律風險。事件強調了在資安報告和情報分析中使用AI時，必須極度謹慎，必須對AI輸出的準確性進行人工驗證。實務影響提醒業界，不能盲信AI生成或來源不明的資安報告，特別是涉及國家級或個人聲譽的指控。修補建議是，資安機構在發布情報時，應增加人工審核機制，並明確標註情報來源的可靠性。",
    tags: ["Palo Alto Networks", "AI幻覺", "情報誤指控", "資安報告", "法律訴訟", "中國間諜"],
    title_en: "AI-Generated Report Misidentifies: Startup Sues Palo Alto Networks, Alleging Misassociation with China Espionage",
    summary_en: "This incident involves a lawsuit filed by a startup against Palo Alto Networks. The core dispute is that Palo Alto Networks' report incorrectly associated the startup with Chinese espionage activities. The source of this misidentification is alleged to be generated by an Artificial Intelligence (AI) model's 'hallucination,' leading to severe reputational and legal risks. The incident underscores the critical need for extreme caution when using AI in cybersecurity reporting and intelligence analysis, requiring manual verification of AI output accuracy. The practical implication reminds the industry not to blindly trust AI-generated or unverified cybersecurity reports, especially those involving national-level or personal reputation accusations. The remediation suggestion is that cybersecurity organizations should implement manual review mechanisms when publishing intelligence, and clearly label the reliability of the intelligence source.",
    tags_en: ["Palo Alto Networks", "AI Hallucination", "Intelligence Misidentification", "Cybersecurity Report", "Lawsuit", "China Espionage"],
    sources: [
      { name: "The Register", url: "https://theregister.com/legal/2026/07/02/startup-sues-palo-alto-networks-koi-security-saying-an-ai-hallucinated-report-falsely-linked-it-to-chinese-espionage/5266201", lang: "EN" }
    ]
  },
  {
    id: "20260702-076",
    trackers: ["os"],
    category: "重點關注",
    title: "NVIDIA推出「雙重計費」資料中心融資方案，旨在擴大AI基礎設施投資",
    summary: "本文報導了NVIDIA推出了一種創新的資料中心融資方案，該方案允許客戶在AI基礎設施的建置過程中，獲得兩次收入流。此舉旨在刺激全球對AI運算能力的需求，並加速資料中心市場的資本支出。雖然文章未提供具體的技術細節或CVE資訊，但其核心影響在於提供了一個具備「雙重計費」特性的商業模式，吸引企業將更多資金投入到AI訓練和運算基礎設施的建置。對於資料中心營運商和AI開發者而言，這代表著市場對AI算力需求的持續高漲，應關注相關的資本支出週期和能源供應鏈的規劃。建議關注NVIDIA在AI硬體和基礎設施層面的後續產品發布與合作模式。",
    tags: ["NVIDIA", "AI", "資料中心", "融資方案", "AI基礎設施", "資本支出"],
    title_en: "NVIDIA Launches 'Dual Billing' Data Center Financing Scheme to Boost AI Infrastructure Investment",
    summary_en: "This article reports on an innovative data center financing scheme launched by NVIDIA, which allows clients to generate two streams of revenue during the construction of AI infrastructure. This move aims to stimulate global demand for AI computing power and accelerate capital expenditure in the data center market. Although the article does not provide specific technical details or CVE information, its core impact lies in offering a 'dual billing' business model that encourages companies to invest more capital in building AI training and computing infrastructure. For data center operators and AI developers, this signals sustained high market demand for AI compute power, necessitating attention to related capital expenditure cycles and energy supply chain planning. It is recommended to monitor NVIDIA's subsequent product releases and cooperation models in the AI hardware and infrastructure layers.",
    tags_en: ["NVIDIA", "AI", "Data Center", "Financing Scheme", "AI Infrastructure", "Capital Expenditure"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/02/nvidia-floats-double-dipping-datacenter-financing-scheme/5266184", lang: "EN" }
    ]
  },
  {
    id: "20260702-077",
    trackers: ["os"],
    category: "重點關注",
    title: "AI與企業擴張趨勢分析：企業增加AI能力與人力配置的挑戰",
    summary: "本文不涉及特定資安漏洞或修補資訊，而是分析當前AI與機器學習（ML）的產業趨勢。文章指出，隨著企業積極導入AI技術，其擴張的趨勢不僅體現在技術能力的增加，也伴隨著大量人力資源的配置。然而，這種「增加AI能力」與「增加人力」的結合，並不一定能直接滿足企業的實際業務需求。此外，文章也提及了全球治理的必要性，警告AI能力的發展速度正在超越相關的規範與規則，呼籲業界和政府應建立全球性的治理框架，以確保AI技術的發展是安全且負責任的。這對開發者和企業管理者而言，代表著在追求技術領先的同時，必須同步關注法規遵循、倫理規範和風險管理。",
    tags: ["AI", "機器學習", "企業擴張", "全球治理", "技術趨勢", "風險管理"],
    title_en: "Analyzing AI and Enterprise Expansion Trends: Challenges in Increasing AI Capabilities and Human Resource Allocation",
    summary_en: "This article does not concern specific cybersecurity vulnerabilities or patching information, but rather analyzes current industry trends in Artificial Intelligence (AI) and Machine Learning (ML). It points out that as enterprises actively adopt AI technology, its expansion trend is reflected not only in the increase of technical capabilities but also in the allocation of significant human resources. However, this combination of 'increasing AI capabilities' and 'increasing human resources' does not necessarily directly meet the enterprise's actual business needs. Furthermore, the article mentions the necessity of global governance, warning that the pace of AI capability development is outpacing relevant regulations and rules. It calls on the industry and government to establish a global governance framework to ensure that the development of AI technology is safe and responsible. For developers and corporate managers, this means that while pursuing technological leadership, they must simultaneously pay attention to regulatory compliance, ethical standards, and risk management.",
    tags_en: ["AI", "Machine Learning", "Enterprise Expansion", "Global Governance", "Technology Trends", "Risk Management"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/02/companies-that-add-more-ai-also-add-more-people/5266134", lang: "EN" }
    ]
  },
  {
    id: "20260702-078",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "AI驅動的「代理式」勒索軟體攻擊：Smooth AI展示端到端攻擊新範式",
    summary: "文章報導了Smooth AI展示了一種新型的「代理式」（agentic）勒索軟體攻擊，這代表攻擊不再是單純的程式執行，而是由一個具備自主決策和多步驟操作能力的AI代理來主導。這種攻擊模式的實務影響極為重大，因為它能夠模擬人類攻擊者的複雜行為，實現從初始入侵到最終資料加密或竊取的整個端到端流程。雖然原文未提供具體的CVE編號或CVSS分數，但其核心威脅在於AI技術被用於提升惡意軟體的自主性和複雜性，使得傳統的防禦機制難以應對。資安專業人員和企業應高度關注AI在攻擊鏈中的應用趨勢，並加強對行為異常、多階段攻擊的監控能力，考慮導入AI驅動的防禦系統來應對這種進化中的威脅。",
    tags: ["AI", "勒索軟體", "代理式攻擊", "Smooth AI", "資安威脅", "端到端攻擊"],
    title_en: "AI-Driven 'Agentic' Ransomware Attacks: Smooth AI Demonstrates New Attack Paradigm",
    summary_en: "The article reports that Smooth AI demonstrated a new type of 'agentic' ransomware attack. This signifies that attacks are no longer merely simple program executions, but are instead orchestrated by an AI agent possessing autonomous decision-making and multi-step operational capabilities. The practical implications of this attack pattern are extremely significant, as it can simulate the complex behavior of human attackers, achieving an entire end-to-end process from initial intrusion to final data encryption or exfiltration. Although the original text did not provide specific CVE IDs or CVSS scores, its core threat lies in the use of AI technology to enhance the autonomy and complexity of malicious software, making it difficult for traditional defense mechanisms to cope. Cybersecurity professionals and enterprises should pay close attention to the trend of AI application in the attack chain, and strengthen monitoring capabilities for behavioral anomalies and multi-stage attacks, considering the adoption of AI-driven defense systems to counter this evolving threat.",
    tags_en: ["AI", "Ransomware", "Agentic Attack", "Smooth AI", "Cybersecurity Threat", "End-to-End Attack"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/02/smooth-ai-criminal-drives-first-end-to-end-agentic-ransomware-attack/5266073", lang: "EN" }
    ]
  },
  {
    id: "20260702-079",
    trackers: ["os"],
    category: "重點關注",
    title: "SoftBank 進入 GPU 租賃市場，應對 AI 訓練需求與美國基礎設施佈局",
    summary: "本文報導了日本科技巨頭 SoftBank 在全球 AI 訓練需求激增的背景下，積極參與 GPU 租賃市場的佈局。隨著 AI 模型的發展，對高性能運算資源的需求呈爆炸性增長。SoftBank 正在利用其在美國建設的 10 GW 級伺服器農場，尋找將這些龐大運算能力轉化為商業價值的途徑。這場「租賃 GPU」的競爭，反映了全球科技產業在 AI 基礎設施層面的激烈角逐。對於開發者和企業而言，這意味著高性能運算資源的獲取將更加依賴雲端或租賃服務，需要關注供應鏈和成本效益的考量。雖然文章未提供具體技術細節或漏洞資訊，但其核心趨勢警示了 AI 算力資源的稀缺性與高昂成本，建議相關企業應提前規劃其 AI 模型的運算資源調配與成本管理。",
    tags: ["SoftBank", "AI", "GPU", "算力基礎設施", "雲端運算", "AI 訓練"],
    title_en: "SoftBank Enters GPU Rental Market to Meet AI Training Demands and US Infrastructure Deployment",
    summary_en: "This article reports on Japanese tech giant SoftBank's active participation in the GPU rental market amid surging global AI training demand. As AI models develop, the demand for high-performance computing resources is growing exponentially. SoftBank is leveraging its 10 GW-scale server farm constructed in the US to find ways to monetize this massive computing capacity. This 'GPU rental' competition reflects the intense global struggle for AI infrastructure at the technology industry level. For developers and enterprises, this means that accessing high-performance computing resources will increasingly rely on cloud or rental services, requiring consideration of supply chain and cost efficiency. Although the article does not provide specific technical details or vulnerability information, its core trend warns of the scarcity and high cost of AI computing power, advising relevant companies to plan their AI model computing resource allocation and cost management in advance.",
    tags_en: ["SoftBank", "AI", "GPU", "Computing Infrastructure", "Cloud Computing", "AI Training"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/02/softbank-enters-the-rent-a-gpu-race-as-america-looks-for-support-for-ai-training/5265998", lang: "EN" }
    ]
  },
  {
    id: "20260702-080",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "無",
    tags: [],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/02/sap-snaps-wallet-shut-for-travel-and-hiring-so-it-can-keep-shoveling-cash-into-ai/5265875", lang: "EN" }
    ]
  },
  {
    id: "20260702-081",
    trackers: ["os"],
    category: "重點關注",
    title: "Ctrl-Alt-Ops 揭露：犯罪分子如何利用兩大幫派的帳號，進行網路活動",
    summary: "本報導分析了 Ctrl-Alt-Ops 的調查結果，揭示了犯罪分子如何透過竊取的帳號進行網路活動。調查指出，犯罪組織並非單純地使用單一來源的帳號，而是將來自不同幫派的帳號進行「拼接」（stitch）使用。這意味著攻擊者能夠更有效地偽裝身份，擴大其活動範圍和影響力。雖然文章未提供具體的 CVE 或技術細節，但其實務影響在於，網路安全人員必須提高警覺，意識到攻擊者可能利用多源頭、多身份的帳號組合進行更複雜、更難以追蹤的攻擊鏈。修補建議是加強帳號生命週期管理、實施行為分析（Behavioral Analysis）和多因素驗證（MFA），以偵測異常的帳號組合使用模式。",
    tags: ["Ctrl-Alt-Ops", "網路犯罪", "帳號盜用", "身份偽裝", "資安調查"],
    title_en: "Ctrl-Alt-Ops Reveals: How Criminals Use Accounts from Two Major Syndicates for Cyber Activities",
    summary_en: "This report analyzes Ctrl-Alt-Ops' investigation findings, revealing how criminals conduct cyber activities using stolen accounts. The investigation points out that criminal organizations do not simply use accounts from a single source, but rather 'stitch' together accounts from different syndicates. This means attackers can more effectively disguise their identities, expanding their scope and influence. Although the article does not provide specific CVEs or technical details, its practical implication is that cybersecurity personnel must heighten their vigilance, realizing that attackers may use complex, hard-to-trace attack chains utilizing combinations of multi-source, multi-identity accounts. Remediation suggestions include strengthening account lifecycle management, implementing Behavioral Analysis, and Multi-Factor Authentication (MFA) to detect abnormal account combination usage patterns.",
    tags_en: ["Ctrl-Alt-Ops", "Cybercrime", "Account Theft", "Identity Spoofing", "Security Investigation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/02/ctrlaltoops-fortibleed-criminals-logins-stitch-two-gangs-together/5265912", lang: "EN" }
    ]
  },
  {
    id: "20260702-082",
    trackers: ["os"],
    category: "重點關注",
    title: "醫療設備製造商 Medtronic 警告：植入式心臟起搏器患者資料可能遭駭客盜取",
    summary: "醫療設備製造商 Medtronic 透過安全公告警告，植入式心臟起搏器（pacemaker）的患者資料可能面臨網路竊取風險。雖然文章未提供具體的 CVE 編號或 CVSS 分數，但指出攻擊的本質是針對這些醫療設備所儲存的個人健康資訊。實務影響包括患者的敏感醫療資料（如病歷、生理數據）可能被未經授權的第三方取得，造成隱私洩露和身份盜用風險。建議患者和醫療機構應提高警覺性，定期更新設備韌體，並確保所有與醫療設備相關的網路連線和資料傳輸都經過加密和嚴格的存取控制，以降低被惡意攻擊的機率。",
    tags: ["Medtronic", "心臟起搏器", "醫療設備", "網路安全", "資料洩露", "醫療資訊"],
    title_en: "Medical Device Manufacturer Medtronic Warns: Patient Data from Implantable Cardiac Pacemakers May Be Subject to Hacking",
    summary_en: "Medical device manufacturer Medtronic issued a security advisory warning that patient data from implantable cardiac pacemakers may face the risk of cyber theft. Although the article does not provide specific CVE IDs or CVSS scores, it points out that the nature of the attack targets the personal health information stored within these medical devices. Practical impacts include the potential for unauthorized third parties to obtain sensitive patient medical data (such as medical records and physiological data), leading to privacy breaches and identity theft risks. It is recommended that patients and medical institutions increase their vigilance, regularly update device firmware, and ensure that all network connections and data transmissions related to medical devices are encrypted and subject to strict access control to reduce the probability of malicious attacks.",
    tags_en: ["Medtronic", "Cardiac Pacemaker", "Medical Device", "Cybersecurity", "Data Leakage", "Medical Information"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/02/pacemaker-manufacturer-medtronic-warns-patients-cybercrooks-may-have-swiped-health-data/5265768", lang: "EN" }
    ]
  },
  {
    id: "20260702-083",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "印度向 WhatsApp 提出用戶名安全疑慮，關注帳號安全與隱私保護",
    summary: "本文報導印度政府就 WhatsApp 的用戶名（username）安全機制提出關注與疑慮。雖然原文未提供具體的技術漏洞或CVE編號，但其核心議題圍繞在用戶名作為帳號識別的安全性、隱私保護，以及帳號被盜用的風險。這類安全關注點對於所有使用 WhatsApp 的用戶和平台營運商都是重要的提醒。實務上，用戶應定期檢查和修改其帳號的用戶名，並確保其設置了強大的密碼和雙重驗證機制，以降低帳號被未經授權存取的風險。平台方應持續加強用戶名和帳號的驗證流程，以應對日益複雜的帳號盜用和釣魚攻擊。本事件提醒業界，即使是看似簡單的用戶名，也可能成為攻擊者利用的攻擊向量。",
    tags: ["WhatsApp", "印度", "用戶名安全", "帳號安全", "隱私保護", "資安公告"],
    title_en: "India Raises Concerns Over Username Security for WhatsApp, Focusing on Account Safety and Privacy Protection",
    summary_en: "This article reports on concerns and doubts raised by the Indian government regarding WhatsApp's username security mechanism. Although the original text does not provide specific technical vulnerabilities or CVE IDs, the core issue revolves around the security and privacy protection of usernames as account identifiers, as well as the risk of account theft. These security concerns are important reminders for all WhatsApp users and platform operators. Practically, users should regularly check and modify their account usernames, and ensure they have set strong passwords and two-factor authentication mechanisms to reduce the risk of unauthorized account access. Platform operators should continuously strengthen username and account verification processes to cope with increasingly complex account theft and phishing attacks. This incident reminds the industry that even seemingly simple usernames can become attack vectors exploited by attackers.",
    tags_en: ["WhatsApp", "India", "Username Security", "Account Security", "Privacy Protection", "Cybersecurity Announcement"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/02/india-writes-to-whatsapp-over-usernames-security-concerns/5265744", lang: "EN" }
    ]
  },
  {
    id: "20260702-084",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Oracle E-Business Suite 面臨攻擊，安全漏洞在公開利用代碼前即遭鎖定",
    summary: "本文報導指出，Oracle E-Business Suite 曾面臨攻擊，攻擊者在公開利用代碼（exploit code）發布之前，就已經鎖定了該系統的關鍵漏洞。這類攻擊行為顯示了攻擊者在零日漏洞（zero-day）階段的偵測與利用能力。雖然文章未提供具體的 CVE 編號、CVSS 分數或受影響版本，但強調了該系統的安全性風險，並提醒使用者應高度警惕針對核心業務應用程式的攻擊。對於使用 Oracle E-Business Suite 的組織，建議應即時監控安全公告，並考慮實施更嚴格的網路分段與入侵偵測系統，以降低被利用的風險。",
    tags: ["Oracle", "E-Business Suite", "零日漏洞", "資安攻擊", "應用層安全"],
    title_en: "Oracle E-Business Suite Targeted by Attacks; Key Vulnerabilities Locked Down Before Public Exploit Code Release",
    summary_en: "This report indicates that Oracle E-Business Suite has been targeted by attacks, with key vulnerabilities in the system being locked down before the release of public exploit code. This type of attack behavior demonstrates the attacker's ability to detect and exploit zero-day vulnerabilities. Although the article does not provide specific CVE IDs, CVSS scores, or affected versions, it emphasizes the security risks of the system and advises users to remain highly vigilant against attacks targeting core business applications. Organizations using Oracle E-Business Suite are advised to monitor security announcements immediately and consider implementing stricter network segmentation and intrusion detection systems to mitigate the risk of exploitation.",
    tags_en: ["Oracle", "E-Business Suite", "Zero-day Vulnerability", "Cybersecurity Attack", "Application Layer Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/02/oracle-e-business-suite-was-under-attack-via-critical-flaw-before-the-public-exploit-code-was-even-released/5265710", lang: "EN" }
    ]
  },
  {
    id: "20260702-085",
    trackers: ["os"],
    category: "重點關注",
    title: "聯合國警告AI發展需全球治理，避免「AI末日」風險",
    summary: "聯合國（UN）的科學小組指出，人工智慧（AI）的能力發展速度已遠超現有的規範和治理框架。報告強調，隨著AI技術的快速進展，若缺乏全球性的協調與監管，可能導致嚴重的社會、倫理和安全風險，甚至被比喻為「AI末日」。這項警告呼籲國際社會必須建立一套全面的全球治理機制，確保AI技術的發展能夠安全、負責任地應用。雖然文章未提供具體的技術漏洞或CVE資訊，但其核心實務影響在於提醒企業和開發者，必須將「治理」和「風險評估」納入AI產品的生命週期管理，從源頭建立倫理規範和安全防護措施，以應對未知的、系統性的AI風險。",
    tags: ["聯合國", "AI", "全球治理", "風險管理", "AI倫理"],
    title_en: "UN Warns Global Governance Needed for AI Development to Avoid 'AI Apocalypse' Risks",
    summary_en: "A scientific group from the United Nations (UN) has pointed out that the pace of development in Artificial Intelligence (AI) capabilities far exceeds existing regulatory and governance frameworks. The report emphasizes that without global coordination and supervision, the rapid advancement of AI technology could lead to severe social, ethical, and security risks, even being likened to an 'AI apocalypse.' This warning calls on the international community to establish a comprehensive global governance mechanism to ensure that AI technology develops and is applied safely and responsibly. Although the article does not provide specific technical vulnerabilities or CVE information, its core practical implication is to remind enterprises and developers that they must integrate 'governance' and 'risk assessment' into the AI product lifecycle management, establishing ethical norms and security safeguards from the source to address unknown, systemic AI risks.",
    tags_en: ["United Nations", "AI", "Global Governance", "Risk Management", "AI Ethics"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/02/un-warns-of-need-for-global-governance-to-avoid-an-ai-pocalypse/5265188", lang: "EN" }
    ]
  },
  {
    id: "20260702-086",
    trackers: ["os"],
    category: "重點關注",
    title: "駭客利用社會工程學手法，透過假冒「雪」資源獲取企業內部網路管理員權限",
    summary: "本文報導了一起資安事件，駭客利用社會工程學（Social Engineering）手法，假冒提供「雪」資源的行為，成功從目標企業獲取了網路管理員（Network Admin）的權限。這類攻擊的本質是利用人為弱點，而非技術漏洞。攻擊者透過偽裝的誘餌（如「雪」資源）來誘騙員工或系統人員，使其自願洩露敏感的憑證或資訊。實務影響顯示，即使目標企業的技術防禦系統健全，若員工缺乏足夠的資安意識，仍可能成為攻擊鏈中最薄弱的環節。修補建議的核心在於提升員工的資安意識，特別是對於任何涉及「免費」或「意外」的外部資源提供，應提高警覺性，並建立嚴格的身份驗證與權限管理流程，避免單憑誘餌就授予高權限存取。原文未提供具體漏洞或CVSS分數。",
    tags: ["社會工程學", "網路管理員權限", "資安意識", "企業安全", "駭客攻擊"],
    title_en: "Hackers Exploit Social Engineering Techniques by Impersonating 'Snow' Resource to Obtain Corporate Internal Network Administrator Privileges",
    summary_en: "This article reports a cybersecurity incident where hackers utilized Social Engineering techniques, impersonating the provision of a 'Snow' resource, to successfully obtain Network Administrator privileges from a target corporation. The nature of this attack exploits human weaknesses rather than technical vulnerabilities. Attackers use disguised bait (such as the 'Snow' resource) to deceive employees or system personnel into voluntarily disclosing sensitive credentials or information. Practical implications show that even if a target company's technical defense systems are robust, employees lacking sufficient cybersecurity awareness can still become the weakest link in the attack chain. The core remediation advice is to enhance employee cybersecurity awareness, particularly regarding any external resources offered as 'free' or 'accidental,' and to establish strict identity verification and privilege management processes to prevent granting high-level access based solely on bait. The original text did not provide specific vulnerabilities or CVSS scores.",
    tags_en: ["Social Engineering", "Network Administrator Privileges", "Cybersecurity Awareness", "Corporate Security", "Hacker Attack"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/02/hackers-shoveled-snow-for-company-were-rewarded-with-network-admin-access/5265240", lang: "EN" }
    ]
  },
  {
    id: "20260702-087",
    trackers: ["os"],
    category: "重點關注",
    title: "Supermicro伺服器出貨疑遭警方關注：台灣與新加坡發現異常伺服器批次",
    summary: "本報導指出，在台灣和新加坡，有異常的伺服器批次引起了警方的關注。這些伺服器批次與 Supermicro 公司相關，內容暗示這些設備的運輸或出貨過程存在可疑之處。雖然原文未提供具體的技術漏洞或CVE資訊，但事件的本質在於對硬體供應鏈和設備流向的監控。這類事件對於資安人員和供應鏈管理方具有重要警示意義，提醒業界必須高度關注伺服器設備的來源、運輸路徑，以及是否存在被用於非法或惡意目的的風險。建議相關企業應強化對其採購和運送設備的審核機制，特別是涉及大量或高敏感度硬體設備時，以確保供應鏈的完整性與安全。",
    tags: ["Supermicro", "伺服器", "供應鏈安全", "硬體設備", "台灣", "新加坡"],
    title_en: "Supermicro Server Shipment Under Police Scrutiny: Abnormal Server Batches Found in Taiwan and Singapore",
    summary_en: "This report indicates that abnormal batches of servers have drawn the attention of law enforcement in Taiwan and Singapore. These server batches are associated with Supermicro and suggest that there are suspicious aspects regarding the transportation or shipment process of these equipment. Although the original text does not provide specific technical vulnerabilities or CVE information, the core nature of the incident relates to the monitoring of hardware supply chains and equipment flow. Such events hold significant warning value for cybersecurity professionals and supply chain managers, reminding the industry to pay close attention to the origin, transport routes, and potential risks of server equipment, especially concerning illegal or malicious use. It is recommended that relevant companies strengthen their review mechanisms for purchasing and transporting equipment, particularly when dealing with large quantities or highly sensitive hardware, to ensure supply chain integrity and security.",
    tags_en: ["Supermicro", "Server", "Supply Chain Security", "Hardware Equipment", "Taiwan", "Singapore"],
    sources: [
      { name: "The Register", url: "https://theregister.com/legal/2026/07/02/trouble-keeps-finding-supermicro-as-strange-server-shipments-attract-police-attention-in-taiwan-and-singapore/5265520", lang: "EN" }
    ]
  },
  {
    id: "20260702-088",
    trackers: ["os"],
    category: "重點關注",
    title: "索尼宣布PS遊戲實體光碟生產於 2028 年停產，引發玩家轉向 PC 與 Xbox 平台討論",
    summary: "索尼（Sony）宣布，自 2028 年 1 月起，所有新 PlayStation 遊戲將不再生產實體光碟，無論透過 PlayStation Store 購買或在零售店領取，都將僅包含下載代碼。此消息引發了大量玩家的反彈，許多忠實粉絲表示，他們將轉向 PC 或 Xbox 平台。玩家指出，數位發行模式的真正問題並非缺乏實體光碟，而是被單一公司鎖定在數位內容庫的風險。相較之下，PC 平台（如 Steam）提供更開放的生態系統，例如提供退款機制，以及 GOG 平台提供無 DRM 的遊戲，讓玩家擁有更持久的遊戲所有權。此外，文章指出，競爭對手 Xbox 雖然是玩家的潛在選擇，但其下一代主機（Project Helix）據傳也將取消光碟機，使得玩家的選擇空間依然存在不確定性。",
    tags: ["Sony", "PlayStation", "PC Gaming", "Xbox", "數位發行", "實體媒體", "2028年"],
    title_en: "Sony Announces End of Physical PS Game Disc Production in 2028, Sparking Discussion of Player Shift to PC and Xbox Platforms",
    summary_en: "Sony has announced that starting in January 2028, all new PlayStation games will no longer be produced on physical discs. Whether purchased through the PlayStation Store or acquired at retail stores, the content will only include download codes. This news has sparked significant backlash among players, with many loyal fans stating their intention to switch to PC or Xbox platforms. Players argue that the real issue with digital distribution models is not the lack of physical discs, but the risk of being locked into a single company's digital content library. In contrast, the PC platform (such as Steam) offers a more open ecosystem, providing features like refund mechanisms, while the GOG platform offers DRM-free games, giving players more enduring ownership of their games. Furthermore, the article points out that while Xbox is a potential alternative for players, its next-generation console (Project Helix) is also rumored to eliminate disc drives, leaving players' choices uncertain.",
    tags_en: ["Sony", "PlayStation", "PC Gaming", "Xbox", "Digital Distribution", "Physical Media", "2028"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/03/playstation-fans-brutally-reject-sonys-disc-decision-eye-windows-11-pcs-over-xbox", lang: "EN" }
    ]
  },
  {
    id: "20260702-089",
    trackers: ["os"],
    category: "重點關注",
    title: "洩露資料揭示微軟「Project Aion」概念作業系統：AI驅動的Copilot OS將取代傳統Windows介面",
    summary: "根據洩露的影片資料，微軟曾開發名為「Project Aion」的Copilot專用作業系統，該系統預計將取代傳統的Windows 11介面。此系統的核心概念是「代理式」（agentic）作業系統，並以Microsoft Edge為基礎。Project Aion最大的變革是移除傳統的「開始選單」（Start menu）和桌面圖示，取而代之的是一個以Copilot啟動器為中心的介面。使用者互動將透過Copilot啟動器中的動態小工具和「問我任何事」（Ask me anything）的文字框進行，系統能根據用戶的目標來組織資訊，而非傳統的應用程式分類。此外，該系統能夠執行「DOM爬取」（DOM crawling），直接讀取網站的HTML結構以理解內容全貌，而非僅依賴螢幕截圖。這顯示Project Aion高度優化於企業級使用情境，能整合SharePoint和M365等企業資料，實現更深層次的上下文理解與多任務處理。雖然該系統尚未正式發布，但其趨勢顯示AI將深度整合到作業系統的核心層面，改變用戶與電腦的互動模式。",
    tags: ["Microsoft", "Copilot OS", "Project Aion", "AI作業系統", "Edge", "M365", "代理式系統"],
    title_en: "Leaked Data Reveals Microsoft's 'Project Aion' Concept OS: AI-Driven Copilot OS to Replace Traditional Windows Interface",
    summary_en: "According to leaked video data, Microsoft once developed a dedicated Copilot operating system called 'Project Aion,' which is expected to replace the traditional Windows 11 interface. The core concept of this system is an 'agentic' operating system, built upon Microsoft Edge. The biggest change in Project Aion is the removal of the traditional 'Start menu' and desktop icons, replacing them with an interface centered around a Copilot launcher. User interaction will occur through dynamic widgets and an 'Ask me anything' text box within the Copilot launcher, allowing the system to organize information based on the user's goal, rather than traditional application categorization. Furthermore, the system is capable of 'DOM crawling,' directly reading a website's HTML structure to understand the full context, rather than relying solely on screenshots. This suggests Project Aion is highly optimized for enterprise use cases, capable of integrating corporate data such as SharePoint and M365 to achieve deeper contextual understanding and multi-tasking. Although the system has not been officially released, its trajectory indicates that AI will be deeply integrated into the core layer of the operating system, changing the way users interact with their computers.",
    tags_en: ["Microsoft", "Copilot OS", "Project Aion", "AI Operating System", "Edge", "M365", "Agentic System"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/02/watch-leak-from-2024-shows-off-microsofts-copilot-os-for-pcs-and-its-nothing-like-windows-11", lang: "EN" }
    ]
  },
  {
    id: "20260702-090",
    trackers: ["security"],
    category: "產業動態",
    title: "Citrix NetScaler 產品曝多重漏洞：可讀取任意檔案、造成服務中斷及洩露記憶體內容",
    summary: "Citrix 發布安全更新，修復了影響 NetScaler ADC 和 NetScaler Gateway 的多個漏洞。這些漏洞包括 CVE-2026-8451、CVE-2026-8452、CVE-2026-8655、CVE-2026-10816、CVE-2026-10817 和 CVE-2026-13474。攻擊者可利用這些漏洞，在特定配置下觸發記憶體過讀（如 CVE-2026-8451），洩露敏感記憶體內容；或因記憶體溢出（如 CVE-2026-8452、CVE-2026-8655）導致服務不可預測或服務中斷；此外，還可執行任意檔案讀取（CVE-2026-10816）或透過惡意 HTTP/2 請求造成服務中斷（CVE-2026-13474）。受影響產品版本包括 14.1 之前 14.1-72.61，以及 13.1 之前 13.1-63.18 等。建議所有使用者立即更新至最新版本，並針對 CVE-2026-13474，應將 Http2SmallWndTimeout 參數設定為 30 秒。",
    tags: ["Citrix", "NetScaler", "CVE-2026-8451", "CVE-2026-8452", "CVE-2026-8655", "記憶體溢出", "安全更新"],
    title_en: "Multiple Vulnerabilities Exposed in Citrix NetScaler Product: Allows Arbitrary File Read, Service Disruption, and Memory Content Leakage",
    summary_en: "Citrix has released a security update to patch multiple vulnerabilities affecting NetScaler ADC and NetScaler Gateway. These vulnerabilities include CVE-2026-8451, CVE-2026-8452, CVE-2026-8655, CVE-2026-10816, CVE-2026-10817, and CVE-2026-13474. Attackers can exploit these flaws to trigger memory over-reads (such as CVE-2026-8451), leaking sensitive memory content; or cause unpredictable service disruption or service downtime due to memory overflow (such as CVE-2026-8452 and CVE-2026-8655). Furthermore, arbitrary file read is possible (CVE-2026-10816), or service disruption can be caused via malicious HTTP/2 requests (CVE-2026-13474). Affected product versions include 14.1 prior to 14.1-72.61, and 13.1 prior to 13.1-63.18. All users are advised to update immediately to the latest version, and specifically for CVE-2026-13474, the Http2SmallWndTimeout parameter should be set to 30 seconds.",
    tags_en: ["Citrix", "NetScaler", "CVE-2026-8451", "CVE-2026-8452", "CVE-2026-8655", "Memory Overflow", "Security Update"],
    sources: [
      { name: "新加坡 CSA", url: "https://csa.gov.sg/alerts-and-advisories/alerts/al-2026-082", lang: "EN" }
    ]
  }
];
