// data-20260911.js — 2026-09-11
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-11"] = [
  {
    id: "20260911-11769",
    trackers: ["security"],
    category: "重大事件",
    title: "勒索軟體Everest聲稱入侵晶睿通訊（Vivotek），竊取236 GB內部資料，威脅台達電支付贖金",
    summary: "勒索軟體Everest於9月1日聲稱入侵晶睿通訊（Vivotek）旗下網路攝影機業務，竊取了約236 GB的內部資料，包含近9.5萬個檔案。這些資料據稱涉及網路攝影機與網路錄影機的韌體、原始程式碼，以及開發、測試與維修資料。駭客公開了一份包含技術報告的資料，並以此威脅台達電支付贖金。\n\n針對此事件，台達電資深經理施孟璁表示，根據內部調查，台達電與晶睿的系統並未受到影響，且沒有敏感資料外洩。他們判斷駭客掌握的資料多為晶睿公開提供或舊版資料。\n\n此外，威脅情報公司SOCRadar觀察到，有23筆查詢vivotek[.]com的記錄，時間跨度為2025年1月至9月1日，涵蓋了內部知識管理平臺confluence.vivotek[.]com、雲端IP攝影機管理平臺ezconnect.vivotek[.]com等端點，並發現了多個員工、客戶及第三方憑證。",
    tags: ["Everest", "晶睿通訊", "Vivotek", "勒索軟體", "資料外洩", "台達電"],
    title_en: "Ransomware Group Everest Claims Breach of Vivotek, Stealing 236 GB of Internal Data and Threatening TAIWAN'S TEDA Payment",
    summary_en: "On September 1st, the ransomware group Everest claimed to have breached Vivotek's network camera division, stealing approximately 236 GB of internal data, including nearly 95,000 files. This data reportedly involves firmware, source code, and development, testing, and maintenance materials for network cameras and network video recorders. The hackers published a data package containing a technical report and used it to threaten TAIWAN'S TEDA Payment with a ransom. In response to the incident, TAIWAN'S TEDA Senior Manager, Steven Cheng, stated that according to internal investigations, TEDA and Vivotek's systems were not affected, and no sensitive data was leaked. They assessed that the data held by the hackers primarily consists of data that Vivotek has publicly provided or older versions. Furthermore, the threat intelligence company SOCRadar observed 23 queries to vivotek[.]com spanning from January 2025 to September 1st. These queries covered endpoints such as the internal knowledge management platform confluence.vivotek[.]com and the cloud IP camera management platform ezconnect.vivotek[.]com, and revealed multiple employee, customer, and third-party credentials.",
    tags_en: ["Everest", "Vivotek", "Ransomware", "Data Leak", "TAE"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178859", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11783",
    trackers: ["security"],
    category: "重大事件",
    title: "烏克蘭前 Conti 駭客成員 Lytvynenko 在美國被判刑，涉嫌參與勒索軟體攻擊與資料竊取",
    summary: "美國法院本週對烏克蘭籍人士 Oleksii Oleksiyovych Lytvynenko 判處四年監禁，因其參與 Conti 勒索軟體行動。Lytvynenko 在 2023 年於愛爾蘭被捕，並於 2025 年底被引渡至美國。他承認犯下電線詐欺罪，供認曾協助 Conti 團體開發惡意軟體，並持有受害者竊取資料。調查顯示，Lytvynenko 曾參與該駭客組織的惡意軟體載入器開發，且持續參與勒索軟體攻擊，直到他被捕。Conti 勒索軟體團體據估計，在加密受害者檔案並威脅洩露資料後，至少獲得了 1.5 億美元的贖金。該駭客組織的目標涵蓋超過 30 個國家，包括美國大部分州。此案的判刑，緊接在其他相關駭客的定罪之後，顯示美國司法對網路犯罪的嚴厲打擊。",
    tags: ["Conti", "Oleksii Oleksiyovych Lytvynenko", "勒索軟體", "網路犯罪", "美國司法"],
    title_en: "Former Conti Hacker Ukrainian Lytvynenko Sentenced in the US for Alleged Ransomware Attacks and Data Theft",
    summary_en: "A US court sentenced Ukrainian national Oleksii Oleksiyovych Lytvynenko to four years in prison for his involvement in Conti ransomware operations. Lytvynenko was arrested in Ireland in 2023 and extradited to the US by the end of 2025. He pleaded guilty to wire fraud and admitted to having assisted the Conti group in developing malware and possessing stolen victim data. Investigations show that Lytvynenko participated in developing the hacker group's malware loaders and continued to participate in ransomware attacks until his arrest. The Conti ransomware group is estimated to have collected at least $150 million in ransoms after encrypting victim files and threatening data leaks. The group's targets spanned over 30 countries, including most states in the US. This sentencing follows other related hacker convictions, demonstrating the US judiciary's severe crackdown on cybercrime.",
    tags_en: ["Conti", "Oleksii Oleksiyovych Lytvynenko", "Ransomware", "Cybercrime", "US Judiciary"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/ukrainian-conti-ransomware-developer-sentenced-to-4-years-in-us-prison", lang: "EN" }
    ]
  },
  {
    id: "20260911-11828",
    trackers: ["eu_cra", "security"],
    category: "法令更新",
    title: "歐盟《網路韌性法案》（CRA）報告義務啟動：企業須在 24 小時內通報漏洞與資安事件",
    summary: "自 9 月 11 日起，歐盟（EU）的《網路韌性法案》（Cyber Resilience Act, CRA）報告義務已正式實施。根據新規定，在歐盟成員國營運的企業，若發現產品存在實際被利用的漏洞或發生嚴重資安事件，必須在 24 小時內向歐洲網路安全機構（ENISA）通報。此外，企業還需在 72 小時內提交包含嚴重性評估和緩解措施的通知，並在兩週內提交修訂版安全報告，一個月內提交最終綜合報告。此規定適用於所有在歐盟市場銷售的網路連線產品，涵蓋硬體與軟體，無論企業總部位於何處。若未能遵守報告時限，最高可處以全球年營業額 2.5% 或 1,500 萬歐元（兩者皆取高者）的罰款。雖然該法案的完整要求將延至 2027 年 12 月，但報告義務已先行啟動。小型企業和微型企業在報告時限上可能有豁免或減輕。",
    tags: ["歐盟", "EU", "CRA", "網路韌性法案", "ENISA", "資安報告義務", "漏洞通報"],
    title_en: "EU Cyber Resilience Act (CRA) Reporting Obligations Activated: Companies Must Report Vulnerabilities and Security Incidents Within 24 Hours",
    summary_en: "Effective September 11, the European Union's Cyber Resilience Act (CRA) reporting obligations officially commenced. Under the new regulation, any company operating in an EU member state that discovers a vulnerability actively being exploited in a product or experiences a severe cybersecurity incident must report it to the European Union Agency for Cybersecurity (ENISA) within 24 hours. Furthermore, companies must submit a notification within 72 hours containing a severity assessment and mitigation measures, followed by a revised security report within two weeks, and a final comprehensive report within one month. This rule applies to all connected products sold on the EU market, covering both hardware and software, regardless of the company's headquarters location. Failure to comply with the reporting deadlines can result in a fine of up to 2.5% of global annual turnover or €15 million (whichever is higher). Although the full requirements of the Act are not due until December 2027, the reporting obligation has been activated early. Small and micro-enterprises may have exemptions or reduced reporting timelines.",
    tags_en: ["EU", "EU", "CRA", "Cyber Resilience Act", "ENISA", "Cybersecurity Reporting Obligation", "Vulnerability Disclosure"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145788", lang: "EN" }
    ]
  },
  {
    id: "20260911-11906",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6495-1 相關漏洞，強化系統安全性",
    summary: "Debian 發布安全公告，修補了一個與 DSA-6495-1 相關的漏洞。此漏洞的修補旨在提升系統的整體安全性，特別是針對可能影響系統核心元件的潛在攻擊向量。雖然原文未提供詳細的技術細節、CVSS 分數或受影響的具體產品版本，但根據 Debian 安全追蹤器（security-tracker）的公告，此修補是針對一個重要的安全問題。實務上，所有使用 Debian 系統的用戶應立即更新系統以修補此漏洞，確保系統免受潛在的攻擊。建議用戶透過標準的系統更新機制（如 apt update/upgrade）進行修補，以維持系統的最高安全狀態。",
    tags: ["Debian", "DSA-6495-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patches DSA-6495-1 Vulnerability to Enhance System Security",
    summary_en: "Debian has issued a security advisory to patch a vulnerability related to DSA-6495-1. The purpose of this patch is to enhance overall system security, particularly addressing potential attack vectors that could affect core system components. Although the original text does not provide detailed technical specifications, CVSS scores, or specific affected product versions, the announcement from the Debian security tracker indicates that this patch addresses a significant security issue. Practically, all users running Debian systems should update their systems immediately to patch this vulnerability and ensure the system is protected from potential attacks. Users are advised to use standard system update mechanisms (such as apt update/upgrade) to apply the patch and maintain the highest level of system security.",
    tags_en: ["Debian", "DSA-6495-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00406.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11907",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6494-1：修補 OpenSSL 函式庫的潛在安全漏洞",
    summary: "Debian 安全團隊發布了安全公告 DSA-6494-1，修補了 OpenSSL 函式庫中一個潛在的安全漏洞。此漏洞的詳細技術細節和攻擊向量未在本次公告中公開，但其修補是針對 OpenSSL 核心元件的。受影響的系統主要為使用 Debian 作業系統的用戶。建議所有 Debian 用戶立即更新系統，以確保 OpenSSL 函式庫得到修補，避免潛在的資安風險。本次修補屬於核心元件的維護更新，對於維護系統的安全性至關重要。",
    tags: ["Debian", "OpenSSL", "DSA-6494-1", "安全更新", "核心元件"],
    title_en: "Debian Issues Security Advisory DSA-6494-1: Patching Potential Vulnerability in OpenSSL Library",
    summary_en: "The Debian security team has released security advisory DSA-6494-1, patching a potential vulnerability in the OpenSSL library. While the detailed technical specifics and attack vectors for this vulnerability are not disclosed in this advisory, the patch targets a core component of OpenSSL. Affected systems are primarily users running the Debian operating system. All Debian users are advised to update their systems immediately to ensure the OpenSSL library is patched, mitigating potential security risks. This patch constitutes a critical maintenance update for core components, essential for maintaining system security.",
    tags_en: ["Debian", "OpenSSL", "DSA-6494-1", "Security Update", "Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00405.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11912",
    trackers: ["os"],
    category: "Linux",
    title: "利用 LLM 輔助大幅優化 Linux 核心編譯流程，顯著縮短編譯時間",
    summary: "Linux 核心的編譯過程由於其複雜性與龐大體積，通常需要耗費相當長的時間，即使在高性能硬體上也是如此。開發者 Lorenzo Stoakes 嘗試利用大型語言模型（LLM）的輔助，深入研究並優化了核心的建構系統。他成功地大幅縮短了編譯 Linux 核心所需的時間。此項優化展示了 AI 工具鏈在複雜軟體工程流程中的巨大潛力，特別是在需要處理複雜建構系統和大量代碼庫的場景。雖然文章未提供具體性能提升的數字，但其成果證明了利用 LLM 輔助可以顯著提高大型軟體專案的開發效率和編譯速度，為核心開發流程帶來實質的改善。",
    tags: ["Linux 核心", "LLM", "編譯系統", "Lorenzo Stoakes", "軟體工程"],
    title_en: "Using LLMs to Greatly Optimize Linux Kernel Compilation Process, Significantly Reducing Compilation Time",
    summary_en: "The compilation process for the Linux kernel is typically complex and massive, requiring considerable time even on high-performance hardware. Developer Lorenzo Stoakes attempted to leverage the assistance of Large Language Models (LLMs) to deeply research and optimize the core build system. He successfully significantly reduced the time required to compile the Linux kernel. This optimization demonstrates the immense potential of AI toolchains in complex software engineering workflows, especially in scenarios requiring the handling of complex build systems and large codebases. Although the article did not provide specific performance improvement metrics, its results prove that using LLMs can significantly enhance the development efficiency and compilation speed of large software projects, bringing substantial improvements to core development processes.",
    tags_en: ["Linux Kernel", "LLM", "Build System", "Lorenzo Stoakes", "Software Engineering"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1093398", lang: "EN" }
    ]
  },
  {
    id: "20260911-11913",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心開發討論：7.2.6-rc1 版本預告與人工審核的重要性",
    summary: "本文為一場關於 Linux 核心開發的討論串，主要討論了預計發布的 7.2.6-rc1 版本。該版本預計包含超過 1,800 個補丁，顯示了核心開發的龐大工作量。討論的重點之一是，儘管開發過程可能引入 AI/LLMs 等工具，但任何補丁集若出現錯誤，最終的責任和驗證仍必須歸屬於人工審核（human(s) who signed off on it）。這強調了在自動化工具輔助的開發環境中，人工驗證和審核流程的關鍵重要性，確保核心穩定性與安全性。目前文章未提供具體的 CVE 或版本修補細節，僅為開發進度討論。",
    tags: ["Linux 核心", "7.2.6-rc1", "補丁集", "人工審核", "LLMs"],
    title_en: "Linux Kernel Development Discussion: Preview of 7.2.6-rc1 and the Importance of Manual Review",
    summary_en: "This article is a discussion thread concerning Linux kernel development, primarily focusing on the upcoming 7.2.6-rc1 version. This version is expected to include over 1,800 patches, illustrating the sheer volume of work involved in kernel development. A key point of discussion is that even if the development process incorporates tools like AI/LLMs, the ultimate responsibility and validation for any patch set must still rest with human review (the human(s) who signed off on it). This emphasizes the critical importance of manual verification and review processes in automated development environments to ensure core stability and security. The article does not provide specific CVEs or version patch details, but rather discusses development progress.",
    tags_en: ["Linux Kernel", "7.2.6-rc1", "Patch Set", "Manual Review", "LLMs"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1093766", lang: "EN" }
    ]
  },
  {
    id: "20260911-11914",
    trackers: ["os"],
    category: "Linux",
    title: "多系統安全更新公告：AlmaLinux、Debian、Fedora、Oracle、Red Hat、SUSE 與 Ubuntu 進行核心與應用層級修補",
    summary: "多個主流 Linux 發行版，包括 AlmaLinux、Debian、Fedora、Oracle、Red Hat、SUSE 和 Ubuntu，近期發布了廣泛的安全性更新。這些更新涵蓋了從核心元件到應用層級的眾多庫和工具。受影響的元件包括但不限於 glibc、libevent、curl、opensc、php 語言版本（如 php8.1 至 php8.5）以及各種應用程式庫（如 qt6-qt5compat、gstreamer1-plugins-bad-free）。開發者和系統管理員應特別注意這些核心庫和工具的更新，以確保系統的穩定性和安全性。建議所有使用這些發行版的用戶及系統，應立即根據官方公告進行系統升級和修補，以修復潛在的漏洞。",
    tags: ["Linux", "AlmaLinux", "Debian", "Fedora", "Ubuntu", "Red Hat", "glibc"],
    title_en: "Multi-System Security Update Announcement: Core and Application Layer Patches for AlmaLinux, Debian, Fedora, Oracle, Red Hat, SUSE, and Ubuntu",
    summary_en: "Multiple major Linux distributions, including AlmaLinux, Debian, Fedora, Oracle, Red Hat, SUSE, and Ubuntu, have recently released extensive security updates. These updates cover numerous libraries and tools, ranging from core components to the application layer. Affected components include, but are not limited to, glibc, libevent, curl, opensc, PHP language versions (such as php8.1 to php8.5), and various application libraries (such as qt6-qt5compat, gstreamer1-plugins-bad-free). Developers and system administrators should pay special attention to these core library and tool updates to ensure system stability and security. All users and systems utilizing these distributions are advised to immediately upgrade and patch their systems according to official announcements to fix potential vulnerabilities.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Fedora", "Ubuntu", "Red Hat", "glibc"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1093765", lang: "EN" }
    ]
  },
  {
    id: "20260911-11929",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：Cache Aware Scheduling 補丁系列修復任務排程漏洞與優化",
    summary: "本文介紹了 Linux 核心的 Cache Aware Scheduling 功能的最新修補與測試進展。Cache Aware Scheduling 旨在將相關任務分組到共享相同 Last Level Cache (LLC) 的 CPU 核心上，從而提高快取局部性（cache locality）並降低延遲，避免快取跳動（cache bouncing）的成本。本次發布的補丁系列由 Intel 工程師 Tim Chen 整理，主要修復了任務可能被外部隔離（stranded）或從其首選 LLC 核心移除（yanked away）的潛在問題，並包含了一個使用後釋放（use-after-free）的修復。雖然該補丁系列提升了穩定性，但文章提醒，目前仍存在 Cache Aware Scheduling 與 Intel Turbo Boost Max Technology (ITMT) 之間干擾的已知問題，這部分尚未在本次補丁中處理，但預計未來會有進一步的改進。",
    tags: ["Linux 核心", "Cache Aware Scheduling", "LLC", "use-after-free", "Intel", "CPU 核心"],
    title_en: "Linux Kernel: Cache Aware Scheduling Patch Series Fixes Task Scheduling Vulnerabilities and Optimizes Performance",
    summary_en: "This article introduces the latest patches and testing progress for the Linux kernel's Cache Aware Scheduling feature. Cache Aware Scheduling aims to group related tasks onto CPU cores that share the same Last Level Cache (LLC), thereby improving cache locality and reducing latency, while avoiding the cost of cache bouncing. The patch series, compiled by Intel engineer Tim Chen, primarily addresses potential issues where tasks might become externally stranded or removed from their preferred LLC core, and includes a fix for a use-after-free vulnerability. Although this patch series enhances stability, the article cautions that a known interference issue between Cache Aware Scheduling and Intel Turbo Boost Max Technology (ITMT) still exists and has not been addressed in this patch, though further improvements are expected in the future.",
    tags_en: ["Linux Kernel", "Cache Aware Scheduling", "LLC", "use-after-free", "Intel", "CPU Core"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Cache-Aware-Scheduling-4-Patch", lang: "EN" }
    ]
  },
  {
    id: "20260911-11930",
    trackers: ["os"],
    category: "Linux",
    title: "Linux IO_uring 核心優化：提升非阻塞操作效率，改善內核排程行為",
    summary: "Linux 核心開發者 Jens Axboe 針對 IO_uring 框架發布了一系列優化補丁，旨在提升其在處理非阻塞 I/O 任務時的效能。原有的設計在處理如 fsync、statx、openat 等理論上不應阻塞的操作時，會強制執行昂貴的上下文切換（context switch）和任務喚醒（thread wakeup），即使這些操作實際上不會阻塞。Axboe 的新方案改變了這一行為：它將這些原本會被強制卸載（punt）的請求，改為在阻塞模式下內聯（inline）處理。只有當請求確實發生阻塞時，才會進行 offload。更進一步的優化是，當提交任務（submitting task）發生阻塞時，一個閒置的 io-wq 工作者會接管其用戶可見的身份（user visible identity），完成 io_uring_enter() 呼叫，並讓原始任務作為 io-wq 工作者完成請求，從而保持用戶空間的透明性。這些改動預計將在 Linux v7.4 週期前進入主線核心，預期能顯著提升 IO_uring 的整體性能。",
    tags: ["Linux", "IO_uring", "Jens Axboe", "Linux 核心", "I/O 性能", "非阻塞 I/O"],
    title_en: "Linux IO_uring Core Optimization: Enhancing Non-blocking Operation Efficiency and Improving Kernel Scheduling Behavior",
    summary_en: "Linux kernel developer Jens Axboe has released a series of optimization patches for the IO_uring framework, aiming to boost its efficiency when handling non-blocking I/O tasks. The original design would force expensive context switches and thread wakeups when processing operations such as fsync, statx, and openat, which are theoretically non-blocking. Axboe's new approach changes this behavior: it now handles these requests, which were previously punted, via inline processing even in blocking mode. Offloading only occurs when the request genuinely blocks. Furthermore, an additional optimization ensures that when a task submission blocks, an idle io-wq worker takes over its user-visible identity to complete the io_uring_enter() call, allowing the original task to complete the request as the io-wq worker, thereby maintaining user-space transparency. These changes are expected to enter the mainline kernel before the Linux v7.4 cycle and are anticipated to significantly improve the overall performance of IO_uring.",
    tags_en: ["Linux", "IO_uring", "Jens Axboe", "Linux Kernel", "I/O Performance", "Non-blocking I/O"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-IO-uring-Crazy-Friday", lang: "EN" }
    ]
  },
  {
    id: "20260911-11932",
    trackers: ["os"],
    category: "Linux",
    title: "Mold Linker 重寫 Rust 並目標成為 Linux 系統預設連結器",
    summary: "Mold 是一個高性能的開源連結器，在效能上常超越 LLVM lld 和 GNU LD 等工具。本次更新發布了 Mold 2.42.1 版本，但更引人注目的是其後續版本 Mold 3.0 的規劃。Mold 正在進行從 C++ 到 Rust 語言的重寫，旨在利用 Rust 強大的安全性保證。這項工作追隨了另一個使用 Rust 撰寫的高性能連結器 Wild。Mold 的開發者目標是讓 Mold 3.0 在效能上媲美 Mold 2.xx，並最終實現成為 Linux 系統預設連結器（/usr/bin/ld）。為達成此目標，開發團隊計畫實作缺失的連結器腳本功能，使其不僅能連結使用者空間程式，還能支援核心與韌體。此外，Mold 也正積極研究加入增量連結（incremental linking）功能，以進一步提升工作負載效率。開發者認為，目前許多 Linux 發行版仍使用 GNU ld 作為系統連結器，導致使用 Mold 等快速連結器仍無法完全發揮效能，因此 Mold 3.0 的主要目標就是解決此兼容性問題。",
    tags: ["Mold", "Rust", "Linux", "ld", "連結器", "Mold 3.0"],
    title_en: "Mold Linker Rewrites in Rust, Aiming to Become the Default Linux System Linker",
    summary_en: "Mold is a high-performance open-source linker that often surpasses tools like LLVM lld and GNU LD in terms of performance. The latest update released Mold 2.42.1, but of greater interest is the planning for its subsequent version, Mold 3.0. Mold is undergoing a rewrite from C++ to Rust, aiming to leverage Rust's strong safety guarantees. This effort follows Wild, another high-performance linker written in Rust. Mold's developers aim for Mold 3.0 to match the performance of Mold 2.xx and ultimately become the default Linux system linker (/usr/bin/ld). To achieve this goal, the development team plans to implement missing linker script functionality, enabling it to support not only user-space programs but also the kernel and firmware. Furthermore, Mold is actively researching the inclusion of incremental linking functionality to further improve workload efficiency. Developers note that many Linux distributions still use GNU ld as the system linker, preventing fast linkers like Mold from fully realizing their potential. Therefore, a primary goal of Mold 3.0 is to resolve this compatibility issue.",
    tags_en: ["Mold", "Rust", "Linux", "ld", "linker", "Mold 3.0"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Mold-Linker-In-Rust-Coming", lang: "EN" }
    ]
  },
  {
    id: "20260911-11934",
    trackers: ["os"],
    category: "Linux",
    title: "Linux Mint 推出 Xepub EPUB 閱讀器與 Clockenstein 日曆應用程式",
    summary: "Linux Mint 專案發布了 2026 年 8 月的開發報告，宣布將兩款新應用程式加入其 XApp 應用程式集。其中，Xepub 是一款新的 EPUB 閱讀器，其設計目標是提供類似 Amazon Kindle 等電子書閱讀器的使用體驗。此外，開發團隊還推出了 Clockenstein，這是一款全新的日曆應用程式。除了這兩款新應用外，Linux Mint 也持續增強其現有的 XApp 應用程式，並設立了專門的網站 XApp-Project.org 來展示這些應用程式的開發進度。這些更新顯示了 Linux Mint 在提升用戶體驗和提供多功能工具方面的持續努力。",
    tags: ["Linux Mint", "Xepub", "EPUB", "Clockenstein", "XApp", "Linux 應用程式"],
    title_en: "Linux Mint releases Xepub EPUB reader and Clockenstein calendar application",
    summary_en: "The Linux Mint project released its August 2026 development report, announcing the addition of two new applications to its XApp suite. Xepub is a new EPUB reader designed to provide a user experience similar to popular e-book readers like Amazon Kindle. Additionally, the development team introduced Clockenstein, a brand-new calendar application. Beyond these two additions, Linux Mint continues to enhance its existing XApp applications and has established a dedicated website, XApp-Project.org, to showcase the development progress of these applications. These updates demonstrate Linux Mint's ongoing commitment to improving user experience and providing multifunctional tools.",
    tags_en: ["Linux Mint", "Xepub", "EPUB", "Clockenstein", "XApp", "Linux applications"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Mint-Xepub-Clockenstein", lang: "EN" }
    ]
  },
  {
    id: "20260911-11935",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.4 整合 AMDGPU 驅動程式，預設支援 HDMI 2.1、FreeSync、VRR 與 ALLM 功能",
    summary: "本篇報導指出，Linux 核心版本 7.4 即將整合大量 AMDGPU 驅動程式的更新，其中最引人注目的是對 HDMI 2.1 的全面支援。此前，由於 HDMI Forum 的限制，AMDGPU 開源驅動程式在 HDMI 2.1 支援上曾面臨挑戰。目前，透過一系列的補丁，包括 Fixed Rate Link (FRL) 的支援，已在 Linux 7.2 中出現，而 Linux 7.4 版本預計將整合大部分相關工作，並將 FRL for HDMI 設為預設啟用。最新提交的 Pull Request 包含 HDMI 2.1 FreeSync、HDMI 2.1 ALLM（自動低延遲模式）和 HDMI 2.1 VRR（可變更新率）支援，這些功能對於遊戲玩家極為重要。此外，此次更新也包含了對 AMD GFX12.1 圖形引擎、DCN 6 顯示引擎和 SMU 15 IP 等新元件的更新。Linux 7.4 的合併窗口預計在十月下半期開啟，預計發布時間點可能延至 2026 年底或 2027 年初。",
    tags: ["Linux 7.4", "AMDGPU", "HDMI 2.1", "FreeSync", "VRR", "ALLM"],
    title_en: "Linux 7.4 Integrates AMDGPU Drivers, Offering Default Support for HDMI 2.1, FreeSync, VRR, and ALLM Features",
    summary_en: "This report indicates that the Linux kernel version 7.4 is set to integrate significant updates to the AMDGPU drivers, with the most notable addition being comprehensive support for HDMI 2.1. Previously, the open-source AMDGPU driver faced challenges regarding HDMI 2.1 support due to HDMI Forum restrictions. While some progress, including support for Fixed Rate Link (FRL), appeared in Linux 7.2, the Linux 7.4 version is expected to integrate most of the related work and will set FRL for HDMI as default enabled. The latest submitted Pull Request includes support for HDMI 2.1 FreeSync, HDMI 2.1 ALLM (Auto Low Latency Mode), and HDMI 2.1 VRR (Variable Refresh Rate), features highly important for gamers. Furthermore, this update includes updates for new components such as the AMD GFX12.1 graphics engine, DCN 6 display engine, and SMU 15 IP. The merge window for Linux 7.4 is expected to open in the second half of October, with a potential release date pushed to late 2026 or early 2027.",
    tags_en: ["Linux 7.4", "AMDGPU", "HDMI 2.1", "FreeSync", "VRR", "ALLM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.4-AMDGPU-HDMI-2.1-Go", lang: "EN" }
    ]
  },
  {
    id: "20260911-11970",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 核心修復 Use-After-Free 漏洞：防止透過 oplock 破壞通知機制被利用",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，涉及 `smb2_oplock_break_noti()` 函數。當持有持久化句柄（durable handle）的 oplock 斷開時，如果另一個連線在銷毀過程中發生競爭（race），可能導致已釋放的連線資源被重新利用。具體來說，`smb2_oplock_break_noti()` 在未加鎖的情況下讀取 `opinfo->conn`，並在兩次可能休眠的分配後解引用它。這使得任何持有持久化批次 oplock 的已驗證客戶端都可以觸發此 Use-After-Free 漏洞。修復建議是將呼叫者的 inode 傳入通知路徑，而不是取得新的引用。此外，應在 `ci->m_lock` 下選取並固定連線，以確保在併發的斷開操作中，連線資源不會被意外釋放或競爭。修補此漏洞能有效提升 SMB 協定在核心層級的穩定性和安全性。",
    tags: ["Linux 核心", "ksmbd", "SMB2", "Use-After-Free", "oplock"],
    title_en: "Linux ksmbd Core Fix for Use-After-Free Vulnerability: Preventing Exploitation via oplock Corruption",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, specifically involving the `smb2_oplock_break_noti()` function. When an oplock is broken while holding a durable handle, a race condition in another connection during the destruction process may lead to the reuse of already released connection resources. Specifically, `smb2_oplock_break_noti()` reads `opinfo->conn` without proper locking and dereferences it after two potentially sleeping allocations. This allows any authenticated client holding a durable batch oplock to trigger this Use-After-Free vulnerability. The suggested fix is to pass the caller's inode into the notification path instead of acquiring a new reference. Furthermore, the connection should be selected and locked under `ci->m_lock` to ensure that connection resources are not accidentally released or subject to race conditions during concurrent break operations. Patching this vulnerability effectively enhances the stability and security of the SMB protocol at the kernel level.",
    tags_en: ["Linux Kernel", "ksmbd", "SMB2", "Use-After-Free", "oplock"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80926", lang: "EN" }
    ]
  },
  {
    id: "20260911-11971",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心時區處理漏洞：`tk_get_aux_ts64` 函數可能導致堆疊資料洩漏",
    summary: "本漏洞存在於 Linux 核心的時區管理機制中，具體涉及 `__do_adjtimex()` 函數。當輔助時鐘（auxiliary clock）在執行 `tk_get_aux_ts64()` 期間被禁用，但在檢查 `tks->clock_valid` 之前又被啟用時，系統會使用未初始化堆疊資料進行計算。這導致未初始化堆疊資料可能會間接洩漏到使用者空間（userspace）。開發者應注意，雖然此種競態條件（race window）在核心時區管理和核心時鐘管理後仍存在，但僅會造成時間調整計算錯誤，這屬於使用者空間層面需要避免的問題。建議系統管理員應立即更新到修補了此時區處理邏輯的 Linux 核心版本，以防止敏感堆疊資料洩漏。",
    tags: ["Linux 核心", "時區管理", "堆疊資料洩漏", "Linux Kernel", "CVE-2026-80927"],
    title_en: "Linux Kernel Timezone Handling Vulnerability: `tk_get_aux_ts64` Function May Cause Stack Data Leakage",
    summary_en: "This vulnerability resides in the Linux kernel's timezone management mechanism, specifically involving the `__do_adjtimex()` function. If the auxiliary clock is disabled during the execution of `tk_get_aux_ts64()` but re-enabled before checking `tks->clock_valid`, the system will perform calculations using uninitialized stack data. This can lead to uninitialized stack data indirectly leaking into userspace. Developers should note that while this race window persists after core timezone and core clock management, it only causes time adjustment calculation errors, which is an issue that needs to be avoided at the userspace level. System administrators are advised to immediately update to a Linux kernel version that patches this timezone handling logic to prevent sensitive stack data leakage.",
    tags_en: ["Linux Kernel", "Timezone Management", "Stack Data Leakage", "Linux Kernel", "CVE-2026-80927"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80927", lang: "EN" }
    ]
  },
  {
    id: "20260911-11972",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：smack 模組修復 cred UAF 漏洞，防止非當前任務憑證存取錯誤",
    summary: "本修補旨在解決 Linux 核心中的一個憑證使用後釋放 (UAF) 漏洞，該漏洞存在於 `smack_file_send_sigiotask()` 函數中。該函數在檢查其他任務的憑證時，錯誤地同時使用了目標憑證 (`tsk->cred`) 和當前任務的目標憑證 (`__task_cred(tsk)`)。核心安全規範指出，當檢查其他任務的憑證時，必須始終使用目標憑證（即 `->real_cred`，透過 `__task_cred()` 存取）。原先的寫法違反了此原則，導致了憑證結構 (`struct cred`) 的 UAF 狀況，並可能引發競態條件。修補後的程式碼確保了在所有情況下，都只使用目標任務的正確憑證，從而避免了不安全的憑證存取和潛在的記憶體安全問題。此修補屬於核心層面的安全強化，建議所有使用 Linux 核心的系統應更新到包含此修補的最新版本，以防止攻擊者利用此漏洞進行權限提升或系統崩潰。",
    tags: ["Linux 核心", "smack", "CVE-2026-80928", "UAF", "struct cred", "Linux 安全更新"],
    title_en: "Linux Kernel: smack module fixes cred UAF vulnerability, preventing incorrect access to non-current task credentials",
    summary_en: "This patch addresses a Use-After-Free (UAF) vulnerability in the Linux kernel, located within the `smack_file_send_sigiotask()` function. This function incorrectly used both the target task's credentials (`tsk->cred`) and the current task's target credentials (`__task_cred(tsk)`) when checking other tasks' credentials. Kernel security guidelines mandate that when checking other tasks' credentials, only the target credentials (i.e., `->real_cred`, accessed via `__task_cred()`) must always be used. The original implementation violated this principle, leading to a UAF condition in the credential structure (`struct cred`) and potentially causing race conditions. The patched code ensures that only the target task's correct credentials are used in all scenarios, thereby avoiding unsafe credential access and potential memory safety issues. This patch constitutes a core-level security enhancement, and all systems using the Linux kernel are advised to update to the latest version containing this fix to prevent attackers from exploiting this vulnerability for privilege escalation or system crashes.",
    tags_en: ["Linux Kernel", "smack", "CVE-2026-80928", "UAF", "struct cred", "Linux Security Update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80928", lang: "EN" }
    ]
  },
  {
    id: "20260911-11973",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：移動 sysctl 參數 cad_pid，限制非 root 使用者修改權限",
    summary: "本修補針對 Linux 核心中的一個 sysctl 參數 `cad_pid` 的處理邏輯。原設計中，`cad_pid` 參數被放置在 `pid_table[]`，而該參數的修改功能（`kill_cad_pid()`）僅應在 root 命名空間中使用。然而，由於 `pid_table_root_permissions()` 的存在，非 root 使用者仍有可能透過 `unshare` `pid/user` 命名空間，並在子命名空間中修改此參數，這在邏輯上是錯誤且不合理的。為了解決此安全與邏輯缺陷，修補建議將 `cad_pid` 從 `pid_table[]` 移動到 `kern_reboot_table[]`。此變動確保了只有具有 `GLOBAL_ROOT_UID` 的權限層級才能讀取或修改此 sysctl 參數，從而大幅提升了系統的安全性與權限隔離性。此修補旨在強化核心元件的權限控制，防止非預期或越權的系統配置修改。",
    tags: ["Linux 核心", "sysctl", "cad_pid", "權限控制", "命名空間", "CVE-2026-80929"],
    title_en: "Linux Kernel Patch: Moving sysctl parameter cad_pid to restrict non-root modification rights",
    summary_en: "This patch addresses the handling logic of a sysctl parameter, `cad_pid`, within the Linux kernel. Originally, the `cad_pid` parameter was placed in `pid_table[]`, and its modification function (`kill_cad_pid()`) was intended only for use within the root namespace. However, due to the existence of `pid_table_root_permissions()`, non-root users could still potentially modify this parameter by using `unshare` into the `pid/user` namespace and subsequently modifying it in a child namespace. This was logically flawed and insecure. To resolve this security and logical defect, the patch recommends moving `cad_pid` from `pid_table[]` to `kern_reboot_table[]`. This change ensures that only privilege levels possessing `GLOBAL_ROOT_UID` can read or modify this sysctl parameter, significantly enhancing system security and permission isolation. This patch aims to strengthen the permission control of core components, preventing unexpected or unauthorized system configuration modifications.",
    tags_en: ["Linux Kernel", "sysctl", "cad_pid", "Permission Control", "Namespace", "CVE-2026-80929"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80929", lang: "EN" }
    ]
  },
  {
    id: "20260911-11974",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：tpm_i2c_nuvoton 驅動程式在等待超時時的 IRQ 處理漏洞修復",
    summary: "本修補針對 Linux 核心中的 tpm_i2c_nuvoton 驅動程式，解決了一個在等待 I2C 設備狀態時的 IRQ (中斷) 處理漏洞。當呼叫 `i2c_nuvoton_wait_for_stat()` 函式時，該函式會在等待中斷處理器報告狀態改變之前啟用 IRQ。如果等待超時或在處理器執行前被中斷，該函式會返回，但沒有正確地平衡（或關閉）最初的 `enable_irq()` 呼叫。修補內容修正了這一邏輯缺陷，確保在失敗的等待路徑離開時，會禁用 IRQ。此外，修補也保留了中斷等待的原始錯誤碼，而非在輔助函式中將其轉換為 -ETIMEDOUT，提高了系統的穩定性和準確性。",
    tags: ["Linux 核心", "tpm", "i2c", "IRQ", "Linux 驅動程式"],
    title_en: "Linux Kernel Patch: Fix for IRQ Handling Vulnerability in tpm_i2c_nuvoton Driver During Wait Timeout",
    summary_en: "This patch addresses a vulnerability in the Linux kernel's tpm_i2c_nuvoton driver, which relates to IRQ (interrupt) handling when waiting for I2C device status. When calling the `i2c_nuvoton_wait_for_stat()` function, the function enables the IRQ before waiting for the interrupt handler to report a status change. If the wait times out or is interrupted before the processor executes, the function returns without properly balancing (or disabling) the initial `enable_irq()` call. The patch corrects this logical flaw, ensuring that the IRQ is disabled when exiting the failed wait path. Furthermore, the patch retains the original error code for the interrupt wait, rather than converting it to -ETIMEDOUT in an auxiliary function, thereby improving system stability and accuracy.",
    tags_en: ["Linux Kernel", "tpm", "i2c", "IRQ", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80930", lang: "EN" }
    ]
  },
  {
    id: "20260911-11975",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 I2C 介面漏洞：防止超大長度讀取導致的緩衝區溢出",
    summary: "本漏洞存在於 Linux 核心的 I2C 介面驅動程式中，具體影響為 `w1_f19_i2c_master_transfer()` 函數。當進行 I2C_M_RECV_LEN 模式的讀取操作時，驅動程式會從設備接收長度資訊，並使用此長度來執行讀取。然而，原始程式碼只檢查了長度是否為零，而沒有限制讀取長度是否超過預設的緩衝區大小（I2C_SMBUS_BLOCK_MAX）。如果設備傳送一個過大的長度（例如超過 32 位元組），`w1_f19_i2c_read()` 函數會執行超出界限的讀取，導致緩衝區溢出（out of bounds）。雖然 SMBus 核心在 `master_xfer` 返回後會進行檢查，但此時寫入操作已完成，無法阻止溢出。修補建議是在所有接收長度（RECV_LEN）的環節，增加對傳入長度是否超過 I2C_SMBUS_BLOCK_MAX 的檢查，以確保安全。",
    tags: ["Linux 核心", "I2C", "緩衝區溢出", "w1_f19_i2c_master_transfer", "I2C_SMBUS_BLOCK_MAX"],
    title_en: "Linux Kernel Patch Addresses I2C Interface Vulnerability: Prevents Buffer Overflow from Excessive Length Reads",
    summary_en: "This vulnerability resides in the Linux kernel's I2C interface driver, specifically affecting the `w1_f19_i2c_master_transfer()` function. When performing a read operation in `I2C_M_RECV_LEN` mode, the driver receives length information from the device and uses this length to execute the read. However, the original code only checks if the length is zero, failing to limit whether the read length exceeds the predefined buffer size (`I2C_SMBUS_BLOCK_MAX`). If a device transmits an excessively large length (e.g., exceeding 32 bytes), the `w1_f19_i2c_read()` function executes an out-of-bounds read, leading to a buffer overflow. Although the SMBus core performs checks after `master_xfer` returns, the write operation has already completed, making it impossible to prevent the overflow. The suggested patch is to add a check in all receiving length (RECV_LEN) contexts to ensure that the incoming length does not exceed `I2C_SMBUS_BLOCK_MAX`, thereby ensuring safety.",
    tags_en: ["Linux Kernel", "I2C", "Buffer Overflow", "w1_f19_i2c_master_transfer", "I2C_SMBUS_BLOCK_MAX"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80931", lang: "EN" }
    ]
  },
  {
    id: "20260911-11976",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 vsock/virtio 漏洞修復：修復工作佇列依賴順序問題，避免 Use-After-Free",
    summary: "本漏洞位於 Linux 核心的 vsock/virtio 模組中，涉及 `virtio_vsock_remove()` 函數的資源釋放流程。當執行移除操作時，系統在清空工作項目（work item）時，未能正確考慮不同工作項目之間的依賴關係。具體來說，`tx_work` 可能會排程 `send_pkt_work`，而 `send_pkt_work` 又可能排程 `rx_work`。在舊版本中，移除路徑可能會先清空 `rx_work`，導致後續的 `send_pkt_work` 雖然等待生產者完成，但沒有任何機制等待新排程的 `rx_work`，使得 `kfree(vsock)` 與新排程的 `rx_work` 發生競態條件（race）。這導致了 KASAN 報告的 Use-After-Free 錯誤。修復後，系統確保工作項目是以「生產者到消費者」的順序進行清空，從而解決了資源釋放時的依賴順序問題，防止了 Use-After-Free 漏洞的發生。",
    tags: ["Linux 核心", "vsock", "virtio", "Use-After-Free", "kfree", "KASAN"],
    title_en: "Linux Kernel vsock/virtio Vulnerability Fix: Remediation Addresses Workqueue Dependency Order to Prevent Use-After-Free",
    summary_en: "This vulnerability resides in the vsock/virtio modules of the Linux kernel, specifically concerning the resource release process within the `virtio_vsock_remove()` function. When performing the removal operation, the system failed to correctly account for the dependency relationships between different work items while clearing them. Specifically, `tx_work` might schedule `send_pkt_work`, and `send_pkt_work` might subsequently schedule `rx_work`. In older versions, the removal path could clear `rx_work` first. This meant that while subsequent `send_pkt_work` waited for the producer to complete, there was no mechanism to wait for newly scheduled `rx_work`, leading to a race condition between `kfree(vsock)` and the newly scheduled `rx_work`. This resulted in a Use-After-Free error reported by KASAN. The fix ensures that the work items are cleared in a",
    tags_en: ["Linux Kernel", "vsock", "virtio", "Use-After-Free", "kfree", "KASAN"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80932", lang: "EN" }
    ]
  },
  {
    id: "20260911-11977",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 mt76 驅動程式修復 EEPROM 韌體處理漏洞",
    summary: "本漏洞存在於 Linux 核心的 wifi: mt76 驅動程式，特別影響 mt7996 系列晶片。問題出在驅動程式在解析和複製預設 EEPROM 韌體時，沒有檢查其檔案長度。如果傳入的韌體檔案被截斷（truncated），在進行變體驗證或備用複製的過程中，可能會導致驅動程式讀取超出預設的韌體緩衝區（firmware buffer），造成潛在的記憶體讀取越界（read beyond）。修復措施要求在解析或複製韌體之前，必須檢查傳入檔案是否短於預定義的 MT7996_EEPROM_SIZE。此修補旨在增強驅動程式對 EEPROM 韌體檔案的輸入驗證，防止因惡意或錯誤的截斷檔案導致的系統不穩定或安全風險。",
    tags: ["Linux 核心", "mt76", "mt7996", "EEPROM", "韌體", "驅動程式"],
    title_en: "Linux Kernel mt76 Driver Fixes EEPROM Firmware Handling Vulnerability",
    summary_en: "This vulnerability resides in the wifi: mt76 driver within the Linux kernel, specifically affecting the mt7996 series chip. The issue stems from the driver failing to check the file length when parsing and copying the default EEPROM firmware. If the input firmware file is truncated, the process of performing integrity validation or backup copying may cause the driver to read beyond the allocated firmware buffer, leading to a potential memory read beyond condition. The fix requires checking whether the input file is shorter than the predefined MT7996_EEPROM_SIZE before parsing or copying the firmware. This patch aims to enhance the driver's input validation for EEPROM firmware files, preventing system instability or security risks caused by malicious or erroneous truncated files.",
    tags_en: ["Linux Kernel", "mt76", "mt7996", "EEPROM", "Firmware", "Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80933", lang: "EN" }
    ]
  },
  {
    id: "20260911-11978",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：mt7996 晶片在 AddBA 請求幀中洩漏 TX DMA 映射問題修復",
    summary: "本修補針對 Linux 核心中 `wifi: mt76: mt7996` 驅動程式所發現的一個 TX DMA 映射洩漏漏洞。當設備處理 AddBA 請求幀時，由於 MAC-TXP 佈局的特性，`mt76_connac_txp_skb_unmap()` 函數無法正確解除 DMA 映射，導致每個 AddBA 請求都會洩漏一個 TX DMA 映射。此問題在啟用 WED（Wired Ethernet Dongle）功能時尤其嚴重，在持續的客戶端重連循環中，DMA 映射池最終會耗盡，導致 WiFi MCU 和其他片上系統（on-SoC）元件的 DMA 映射失敗。修補建議新增一個針對 mt7996 晶片的 TXP 解除映射邏輯，專門檢查 `MT_TXD7_MAC_TXD` 欄位，並從 MAC-TXP 佈局中解除 `buf[1]` 的 DMA 映射，以確保資源的正確釋放。",
    tags: ["Linux 核心", "mt7996", "wifi", "DMA 映射", "AddBA", "CVE"],
    title_en: "Linux Kernel Patch: Fixes TX DMA Mapping Leak in mt7996 Chip during AddBA Request Frames",
    summary_en: "This patch addresses a TX DMA mapping leak vulnerability found in the `wifi: mt76: mt7996` driver within the Linux kernel. When the device processes AddBA request frames, the `mt76_connac_txp_skb_unmap()` function fails to correctly unmap the DMA mapping due to the characteristics of the MAC-TXP layout. This results in one TX DMA mapping being leaked for every AddBA request. The issue is particularly severe when the Wired Ethernet Dongle (WED) feature is enabled. During continuous client reconnection cycles, the DMA mapping pool eventually exhausts, leading to DMA mapping failures for the WiFi MCU and other on-SoC components. The patch suggests adding TXP unmapping logic specifically for the mt7996 chip, which checks the `MT_TXD7_MAC_TXD` field and unmaps `buf[1]` from the MAC-TXP layout, ensuring proper resource release.",
    tags_en: ["Linux Kernel", "mt7996", "wifi", "DMA Mapping", "AddBA", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80934", lang: "EN" }
    ]
  },
  {
    id: "20260911-11979",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 mt76 驅動程式修補 CVE-2026-80935：防止 EEPROM 位址寫入越界漏洞",
    summary: "本漏洞存在於 Linux 核心的 wifi: mt76 驅動程式中，具體影響 mt7996 設備的 EEPROM 寫入功能。當呼叫 `mt7996_mcu_get_eeprom()` 時，該函式會從 MCU 回應中獲取目標 EFUSE/EXT 區塊的位址（`event->addr`）。然而，原始程式碼僅限制了複製的長度，而沒有檢查目標位址是否超出 `dev->mt76.eeprom.data` 的範圍。這使得惡意或故障的設備可以回報一個任意位址，從而導致一次越界寫入（out-of-bounds write），寫入的資料量可達 MT7996_EXT_EEPROM_BLOCK_SIZE 位元組，寫入範圍會超出 eeprom.data 的邊界。修補措施要求在推導目標指標之前，先拒絕任何位址超出 eeprom.data 範圍的回應。此漏洞主要影響使用 mt7996 晶片組的設備，建議系統維護者應更新 Linux 核心以修補此安全問題。",
    tags: ["Linux 核心", "mt76", "mt7996", "EEPROM", "CVE-2026-80935", "越界寫入"],
    title_en: "Linux Kernel mt76 Driver Patches CVE-2026-80935: Preventing EEPROM Address Write Out-of-Bounds Vulnerability",
    summary_en: "This vulnerability resides in the `wifi:mt76` driver within the Linux kernel, specifically affecting the EEPROM write functionality of mt7996 devices. When calling `mt7996_mcu_get_eeprom()`, the function retrieves the target EFUSE/EXT block address (`event->addr`) from the MCU response. However, the original code only limited the copy length without checking if the target address exceeded the bounds of `dev->mt76.eeprom.data`. This allows a malicious or faulty device to report an arbitrary address, leading to an out-of-bounds write. The amount of data that can be written is up to MT7996_EXT_EEPROM_BLOCK_SIZE bytes, and the write range will exceed the eeprom.data boundary. The patch requires rejecting any response whose address falls outside the eeprom.data range before deriving the target pointer. This vulnerability primarily affects devices using the mt7996 chipset. System maintainers are advised to update the Linux kernel to patch this security issue.",
    tags_en: ["Linux Kernel", "mt76", "mt7996", "EEPROM", "CVE-2026-80935", "Out-of-bounds Write"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80935", lang: "EN" }
    ]
  },
  {
    id: "20260911-11980",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：mt7925 Wi-Fi 驅動程式修復 MLO 省電機制中的工作佇列洩漏問題",
    summary: "本修補針對 Linux 核心中的 `wifi: mt76: mt7925` 驅動程式，解決了在多鏈路（multi-link）省電設定過程中，工作佇列（workqueue）處理的洩漏問題。當設備在設定期間被關閉（torn down）時，`mt7925` 會排程一個帶有 5 秒延遲的 `mlo_pm_work`。如果設備在該工作執行期間被關閉，該工作將會超出設備的生命週期，並嘗試向已經不存在的工作佇列（workqueue）排程，導致系統發出警告訊息。修復的內容是為 `mt7925` 添加一個停止回呼（stop callback），確保在呼叫 `mt792x_stop()` 之前，能及時取消這個工作。由於 `mt7925_ops` 支援 PCIe 和 USB 兩種驅動介面，此修補涵蓋了這兩者，確保了系統的穩定性與資源管理。",
    tags: ["Linux 核心", "mt7925", "wifi", "workqueue", "MLO", "Linux 驅動程式"],
    title_en: "Linux Kernel: mt7925 Wi-Fi Driver Fixes Workqueue Leakage in MLO Power Saving Mechanism",
    summary_en: "This patch addresses a workqueue handling leakage issue within the `wifi: mt76: mt7925` driver in the Linux kernel. When the device is torn down during multi-link (multi-link) power saving configuration, `mt7925` schedules an `mlo_pm_work` with a 5-second delay. If the device is torn down while this work is executing, the work will outlive the device's lifecycle and attempt to schedule against a non-existent workqueue, causing system warnings. The fix involves adding a stop callback to `mt7925` to ensure that this work is properly canceled before calling `mt792x_stop()`. Since `mt7925_ops` supports both PCIe and USB driver interfaces, this patch covers both, ensuring system stability and resource management.",
    tags_en: ["Linux Kernel", "mt7925", "wifi", "workqueue", "MLO", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80936", lang: "EN" }
    ]
  },
  {
    id: "20260911-11981",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 Wi-Fi 驅動 mt76 修正緩衝區溢出漏洞，防止惡意設備寫入 EEPROM 記憶體",
    summary: "本漏洞存在於 Linux 核心的 Wi-Fi 驅動 `mt76` 中，具體影響 `mt7915` 設備。當呼叫 `mt7915_mcu_get_eeprom()` 函式時，該函式會將一個固定的 EFUSE 區塊複製到驅動程式的 `dev->mt76.eeprom.data` 緩衝區。然而，原始程式碼在執行此複製時，僅依賴 MCU 回應報告的位址（`res->addr`），而未對該位址是否超出緩衝區大小進行檢查。這使得惡意或故障的設備可以報告一個任意的位址，從而觸發一次超出邊界（out-of-bounds）的 16 位元組寫入，寫入範圍會超過 `eeprom.data` 的預定大小。修補措施要求在計算目標指標之前，必須拒絕任何報告的位址，如果該位址會導致複製內容超出 `eeprom.data` 的邊界。此修正確保了設備回報的位址必須在有效範圍內，從而防止了惡意設備利用此機制進行記憶體寫入攻擊。",
    tags: ["Linux 核心", "mt76", "mt7915", "EEPROM", "緩衝區溢出", "Wi-Fi 驅動"],
    title_en: "Linux Kernel Wi-Fi Driver mt76 Fixes Buffer Overflow Vulnerability, Preventing Malicious Device EEPROM Memory Writes",
    summary_en: "This vulnerability resides in the Linux kernel's Wi-Fi driver, `mt76`, specifically affecting the `mt7915` device. When calling the `mt7915_mcu_get_eeprom()` function, the function copies a fixed EFUSE block to the driver's `dev->mt76.eeprom.data` buffer. However, the original code relies solely on the address reported by the MCU (`res->addr`) during this copy operation, without checking if the address exceeds the buffer size. This allows a malicious or faulty device to report an arbitrary address, thereby triggering an out-of-bounds 16-byte write that exceeds the designated size of `eeprom.data`. The patch requires that any reported address must be rejected before calculating the target offset if that address would cause the copied content to exceed the boundaries of `eeprom.data`. This fix ensures that the reported address from the device remains within the valid range, thereby preventing malicious devices from exploiting this mechanism for memory write attacks.",
    tags_en: ["Linux Kernel", "mt76", "mt7915", "EEPROM", "Buffer Overflow", "Wi-Fi Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80937", lang: "EN" }
    ]
  },
  {
    id: "20260911-11982",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：mt76 Wi-Fi 驅動程式修復死鎖問題，避免在互斥鎖上等待工作完成",
    summary: "本修補針對 Linux 核心中的 `wifi: mt76: mt7615` 驅動程式，解決了一個潛在的死鎖（deadlock）漏洞。問題出在 `mt7615_suspend()` 函式在取得 `mt76` 互斥鎖（mutex）後，呼叫 `cancel_delayed_work_sync()` 處理 `mac_work`。然而，如果 `mac_work` 已經在執行中，並且在等待該互斥鎖，當 `mt7615_mac_work()` 嘗試透過 `mt7615_mutex_acquire()` 取得鎖時，就會導致等待循環，進而造成系統死鎖。修補建議在取得互斥鎖之前，先執行 `scan_work` 和 `mac_work` 的清理工作，以確保操作順序的一致性，並防止在設備處於暫停（suspended）狀態時，`mac_work` 執行過度，進而維持系統穩定性。",
    tags: ["Linux 核心", "mt76", "Wi-Fi", "deadlock", "mt7615"],
    title_en: "Linux Kernel Patch: mt76 Wi-Fi Driver Fixes Deadlock Issue, Preventing Work Completion Wait on Mutex",
    summary_en: "This patch addresses a potential deadlock vulnerability in the `wifi: mt76: mt7615` driver within the Linux kernel. The issue arises because the `mt7615_suspend()` function calls `cancel_delayed_work_sync()` to handle `mac_work` after acquiring the `mt76` mutex. However, if `mac_work` is already running and waiting for this mutex, a circular dependency occurs when `mt7615_mac_work()` attempts to acquire the lock via `mt7615_mutex_acquire()`, leading to a system deadlock. The patch suggests performing the cleanup for `scan_work` and `mac_work` before acquiring the mutex, ensuring consistent operation order and preventing excessive execution of `mac_work` when the device is suspended, thereby maintaining system stability.",
    tags_en: ["Linux Kernel", "mt76", "Wi-Fi", "deadlock", "mt7615"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80938", lang: "EN" }
    ]
  },
  {
    id: "20260911-11983",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 rtw89 驅動程式在 arm64 平台熱重啟時的 SError 崩潰問題",
    summary: "本修補內容針對 Linux 核心中 rtw89 驅動程式所引發的一個穩定性問題。當在 arm64 平台上進行「溫重啟」（warm reboot）時，由於硬體 rfkill 輪詢機制（polling）的引入，若 rtw89 PCI 驅動程式缺乏適當的關機回呼（shutdown callback），在 PCIe 連結關閉後，輪詢處理程序仍會嘗試對已失效的設備進行 MMIO 讀取。這導致系統接收到致命的非同步 SError 中斷，最終引發核心崩潰（Kernel panic）。修復方案是在 rtw89 PCI 驅動程式中新增 `rtw89_pci_shutdown()` 回呼。此函數會設定一個新的 RTW89_FLAG_SHUTDOWN 旗標，使得 `rtw89_ops_rfkill_poll()` 在關機流程開始時提前返回，從而避免在 PCIe 連結斷開後執行對非響應設備的 MMIO 讀取，解決了 SError 崩潰問題。此修補僅在 `device_shutdown()` 階段執行，以保持關機處理的最小化。",
    tags: ["Linux 核心", "rtw89", "arm64", "rfkill", "SError", "Kernel panic"],
    title_en: "Linux Kernel Fix for SError Crash in rtw89 Driver During Warm Reboot on arm64 Platform",
    summary_en: "This patch addresses a stability issue within the Linux kernel's rtw89 driver. When performing a \"warm reboot\" on the arm64 platform, the introduction of the hardware rfkill polling mechanism causes the rtw89 PCI driver to attempt MMIO reads on an already invalidated device after the PCIe link is closed, if the driver lacks an appropriate shutdown callback. This results in the system receiving a fatal asynchronous SError interrupt, ultimately triggering a kernel panic. The fix involves adding the `rtw89_pci_shutdown()` callback to the rtw89 PCI driver. This function sets a new RTW89_FLAG_SHUTDOWN flag, causing `rtw89_ops_rfkill_poll()` to return early at the start of the shutdown process. This prevents MMIO reads on non-responsive devices after the PCIe link is disconnected, thereby resolving the SError crash. This patch executes only during the `device_shutdown()` stage to maintain minimal shutdown handling.",
    tags_en: ["Linux Kernel", "rtw89", "arm64", "rfkill", "SError", "Kernel panic"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80939", lang: "EN" }
    ]
  },
  {
    id: "20260911-11984",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 rtw88 驅動程式資源洩漏漏洞修復：NAPI 設定失敗時的 PCI 資源清理問題",
    summary: "本漏洞存在於 Linux 核心的 `rtw88` 驅動程式中，涉及 PCI 資源管理。當 `rtw_pci_napi_init()` 函式初始化 NAPI（New API）失敗時，錯誤處理路徑會直接跳轉至 `err_pci_declaim`，而跳過了 `rtw_pci_destroy()` 函式。這導致在 `rtw_pci_setup_resource()` 已經分配了 PCI 資源之後，這些資源未能被正確釋放，造成資源洩漏。開發者已透過新增專門的清理標籤（cleanup label）來修復此問題，確保在 NAPI 設定失敗時，PCI 資源也能被徹底銷毀。此漏洞的修復已在最新的 mainline 核心版本中實作，建議使用者應更新至修復後的版本以避免資源洩漏。",
    tags: ["Linux 核心", "rtw88", "PCI 資源", "NAPI", "資源洩漏"],
    title_en: "Linux Kernel rtw88 Driver Resource Leak Vulnerability Fixed: PCI Resource Cleanup Issue During NAPI Setup Failure",
    summary_en: "This vulnerability resides in the Linux kernel's `rtw88` driver and involves PCI resource management. When the `rtw_pci_napi_init()` function fails to initialize NAPI (New API), the error handling path jumps directly to `err_pci_declaim`, bypassing the `rtw_pci_destroy()` function. This results in resource leakage, as PCI resources allocated by `rtw_pci_setup_resource()` are not properly released. Developers have fixed this issue by adding a dedicated cleanup label, ensuring that PCI resources are thoroughly destroyed even when NAPI setup fails. This fix has been implemented in the latest mainline kernel version, and users are advised to update to the patched version to prevent resource leakage.",
    tags_en: ["Linux Kernel", "rtw88", "PCI Resource", "NAPI", "Resource Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80940", lang: "EN" }
    ]
  },
  {
    id: "20260911-11985",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 rtw88 驅動程式修復潛在記憶體洩漏漏洞",
    summary: "本漏洞存在於 Linux 核心的 wifi: rtw88 驅動程式中。當呼叫 rtw_hci_tx_write() 失敗時，預期會釋放傳入的 skb 結構體。然而，在 rtw_txq_push_skb() 函式的錯誤處理路徑中，在返回之前並未釋放該 skb，從而導致了記憶體洩漏。此問題可能影響到 rtw_txq_push() 函式，當它從佇列中解出 skb 並傳遞給 rtw_txq_push_skb() 時，會發生記憶體洩漏。修復此問題的目的是確保在錯誤路徑下正確釋放資源，防止系統資源耗盡。",
    tags: ["Linux 核心", "rtw88", "記憶體洩漏", "wifi", "skb"],
    title_en: "Linux Kernel rtw88 Driver Fixes Potential Memory Leak Vulnerability",
    summary_en: "This vulnerability exists in the wifi: rtw88 driver within the Linux kernel. When the rtw_hci_tx_write() call fails, the input skb structure is expected to be freed. However, in the error handling path of the rtw_txq_push_skb() function, the skb is not freed before returning, leading to a memory leak. This issue may affect the rtw_txq_push() function, which leaks memory when it dequeues an skb and passes it to rtw_txq_push_skb(). The fix aims to ensure proper resource deallocation in error paths, preventing system resource exhaustion.",
    tags_en: ["Linux Kernel", "rtw88", "Memory Leak", "wifi", "skb"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80941", lang: "EN" }
    ]
  },
  {
    id: "20260911-11986",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 rtlwifi 驅動程式的記憶體洩漏漏洞",
    summary: "本篇公告指出在 Linux 核心的 rtlwifi 驅動程式中，存在一個潛在的記憶體洩漏（memory leak）漏洞。具體來說，當呼叫 `rtl92du_init_shared_data()` 分配的記憶體，在 `rtl92du_init_sw_vars()` 的後續錯誤處理路徑中，未能被正確釋放。此漏洞可能導致系統長期運行後，資源耗盡，影響穩定性。修復方法是透過在錯誤路徑中加入對 `rtl92du_deinit_shared_data()` 的呼叫，確保已分配的記憶體能夠被正確釋放。此修復屬於核心元件層面的維護性更新，建議系統管理員應更新到修復了此記憶體洩漏的 Linux 核心版本，以確保系統的資源管理效率與穩定性。",
    tags: ["Linux 核心", "rtlwifi", "rtl8192du", "記憶體洩漏", "Linux 驅動程式"],
    title_en: "Linux Kernel Fixes Memory Leak Vulnerability in rtlwifi Driver",
    summary_en: "This announcement points out a potential memory leak vulnerability in the rtlwifi driver within the Linux kernel. Specifically, memory allocated by calling `rtl92du_init_shared_data()` is not correctly freed in the subsequent error handling path of `rtl92du_init_sw_vars()`. This vulnerability could potentially lead to resource exhaustion after prolonged system operation, affecting stability. The fix involves adding a call to `rtl92du_deinit_shared_data()` in the error path to ensure that the allocated memory is correctly released. This patch is a maintenance update at the kernel component level, and system administrators are advised to update to the patched Linux kernel version to ensure system resource management efficiency and stability.",
    tags_en: ["Linux Kernel", "rtlwifi", "rtl8192du", "Memory Leak", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80942", lang: "EN" }
    ]
  },
  {
    id: "20260911-11987",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 rtwifi 模組存在 QoS TID 索引越界漏洞，可能導致系統崩潰",
    summary: "本漏洞存在於 Linux 核心的 rtwifi 驅動程式模組中，具體影響為 `rtl92du_tx_fill_desc()` 函數。該函數使用 `ieee80211_get_tid()` 從 802.11 標頭讀取 QoS TID，並將其作為索引存取 `sta_entry->tids[]` 陣列。由於 `ieee80211_get_tid()` 返回的 QoS TID 值範圍為 0 到 15，但 rtwifi 模組僅為 `sta_entry->tids[]` 分配了 `MAX_TID_COUNT`（為 9）的空間，當接收到的 QoS TID 大於 8 時，將會導致索引越界（out-of-bounds access），可能造成系統崩潰。此問題已透過靜態分析工具和手動審核確認，並被 UBSAN 驗證為索引 10 的越界存取。建議使用者應更新到修補此漏洞的 Linux 核心版本，以修復此陣列索引越界問題。",
    tags: ["Linux 核心", "rtwifi", "rtl8192du", "QoS TID", "索引越界", "CVE-2026-80943"],
    title_en: "Out-of-bounds vulnerability in Linux kernel rtwifi module's QoS TID index",
    summary_en: "This vulnerability exists in the rtwifi driver module within the Linux kernel, specifically affecting the `rtl92du_tx_fill_desc()` function. This function reads the QoS TID from the 802.11 header using `ieee80211_get_tid()` and uses it as an index to access the `sta_entry->tids[]` array. Since the QoS TID value returned by `ieee80211_get_tid()` ranges from 0 to 15, but the rtwifi module only allocates space for `MAX_TID_COUNT` (which is 9) in `sta_entry->tids[]`, an out-of-bounds access occurs when the received QoS TID is greater than 8. This could potentially lead to a system crash. This issue has been confirmed through static analysis tools and manual review, and was verified by UBSAN as an out-of-bounds access at index 10. Users are advised to update to a Linux kernel version that patches this vulnerability to fix the array index out-of-bounds issue.",
    tags_en: ["Linux kernel", "rtwifi", "rtl8192du", "QoS TID", "out-of-bounds", "CVE-2026-80943"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80943", lang: "EN" }
    ]
  },
  {
    id: "20260911-12330",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 wifi: mwifiex 模組的堆疊緩衝區汙染漏洞",
    summary: "本修補針對 Linux 核心中的 `wifi: mwifiex` 模組，解決了一個堆疊緩衝區汙染（stack corruption）的漏洞。當使用 `mwifiex` 模組處理同步命令（synchronous commands）時，如果呼叫方提供的資料緩衝區（data buffer）是堆疊分配的物件，且在等待命令（`wait_event_interruptible_timeout()`）過程中被中斷，後續的韌體回應（firmware response）可能會將資料寫入這個已經失效（stale）的堆疊地址。這導致了惡意的指標解引用（bad pointer dereference）和核心堆疊汙染，可能引發系統崩潰（Kernel panic）。修補措施是在取消待處理命令時，將呼叫方擁有的資料緩衝區從當前仍在執行的命令中分離（detach），從而防止晚期回應寫入到生命週期已結束的指標。此漏洞在進行重複的連線和斷線循環（association and disassociation cycles）時可被觸發。本修補已在 i.MX8MP 平台上進行測試。",
    tags: ["Linux 核心", "mwifiex", "堆疊汙染", "Kernel panic", "wifi"],
    title_en: "Linux Kernel Fix for WiFi: Stack Buffer Corruption Vulnerability in mwifiex Module",
    summary_en: "This patch addresses a stack corruption vulnerability in the `wifi: mwifiex` module within the Linux kernel. When the `mwifiex` module processes synchronous commands, if the data buffer provided by the caller is a stack-allocated object and is interrupted during the waiting process (`wait_event_interruptible_timeout()`), a subsequent firmware response may write data to this stale stack address. This leads to a malicious pointer dereference and kernel stack corruption, potentially causing a system crash (Kernel panic). The fix detaches the data buffer owned by the caller from the currently executing command when the pending command is canceled, thereby preventing late responses from writing to an expired pointer. This vulnerability can be triggered during repeated association and disassociation cycles. This patch has been tested on the i.MX8MP platform.",
    tags_en: ["Linux Kernel", "mwifiex", "Stack Corruption", "Kernel panic", "wifi"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80944", lang: "EN" }
    ]
  },
  {
    id: "20260911-12331",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：crypto: iaa 軟體回退機制存在記憶體未解除映射的漏洞",
    summary: "本漏洞存在於 Linux 核心的加密模組 `crypto: iaa` 中。當硬體分析器發生錯誤時，解壓縮機制會嘗試透過軟體回退（software fallback）進行重試。在特定條件下，如果啟用了 SWIOTLB，軟體回退會在 DMA_FROM_DEVICE 仍處於映射狀態時寫入 `req->dst`。此時，後續的 `dma_unmap_sg()` 呼叫會將過時的 bounce buffer 覆蓋到 `req->dst`，導致結果資料被破壞。修補措施要求在軟體回退機制執行前，必須先解除記憶體映射（Unmap）。修補後的非同步路徑（async path）已內聯解除映射；同步路徑（sync path）則透過發出 `-EAGAIN` 訊號，確保 `iaa_comp_adecompress()` 在解除映射之後再執行回退機制。建議系統管理員應立即更新 Linux 核心以修補此記憶體處理漏洞。",
    tags: ["Linux 核心", "crypto: iaa", "記憶體管理", "DMA", "CVE-2026-80945"],
    title_en: "Linux Kernel Patch: Memory Unmapping Vulnerability in crypto: iaa Software Fallback Mechanism",
    summary_en: "This vulnerability exists in the Linux kernel's crypto module, `crypto: iaa`. When a hardware accelerator encounters an error, the decompression mechanism attempts a retry via software fallback. Under specific conditions, if SWIOTLB is enabled, the software fallback writes to `req->dst` while `DMA_FROM_DEVICE` is still mapped. Subsequently, the `dma_unmap_sg()` call overwrites the outdated bounce buffer into `req->dst`, leading to corrupted result data. The patch requires that the memory mapping must be unmapped before the software fallback mechanism executes. For the patched asynchronous path, unmapping is now inlined; for the synchronous path, it ensures that `iaa_comp_adecompress()` only executes the fallback mechanism after unmapping by issuing an `-EAGAIN` signal. System administrators are advised to immediately update their Linux kernel to patch this memory handling vulnerability.",
    tags_en: ["Linux Kernel", "crypto: iaa", "Memory Management", "DMA", "CVE-2026-80945"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80945", lang: "EN" }
    ]
  },
  {
    id: "20260911-12332",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 fuse-io-uring 傳輸層的堆疊緩衝區複製漏洞",
    summary: "本漏洞存在於 Linux 核心的 fuse-io-uring 傳輸層，允許攻擊者透過不安全的堆疊緩衝區複製（stack buffer copy）來執行攻擊。問題出在 `fuse-io-uring` 傳輸函式庫在 `fuse_uring_copy_to_ring()` 和 `fuse_uring_commit()` 中，直接將 `req->in.h` 和 `req->out.h` 標頭複製到環（ring）中。由於這些標頭位於 `fuse_request` 的 SLUB 物件內，而該快取（`fuse_req_cachep`）在創建時缺乏使用者複製白名單（usercopy whitelist），直接從/到使用者空間複製這些標頭會觸發 `CONFIG_HARDENED_USERCOPY`，進而導致系統崩潰（panic）。修復措施是將這兩個標頭透過在堆疊上的複製（on-stack copy）進行傳輸，確保使用者複製操作觸及的是堆疊記憶體，而非 SLUB 物件，從而繞過安全檢查，解決了核心記憶體暴露的潛在風險。",
    tags: ["Linux 核心", "fuse", "io-uring", "堆疊緩衝區", "CONFIG_HARDENED_USERCOPY"],
    title_en: "Linux Kernel Fixes Stack Buffer Copy Vulnerability in fuse-io-uring Transport Layer",
    summary_en: "This vulnerability resides in the fuse-io-uring transport layer of the Linux kernel, allowing an attacker to execute an attack through an unsafe stack buffer copy. The issue stems from the `fuse-io-uring` transport library, which directly copies the `req->in.h` and `req->out.h` headers into the ring within `fuse_uring_copy_to_ring()` and `fuse_uring_commit()`. Since these headers are located within the `fuse_request` SLUB object, and the cache (`fuse_req_cachep`) lacks a usercopy whitelist upon creation, directly copying these headers from/to user space triggers `CONFIG_HARDENED_USERCOPY`, leading to a system panic. The fix involves transmitting these two headers via an on-stack copy, ensuring that the usercopy operation accesses stack memory rather than the SLUB object, thereby bypassing the safety check and resolving the potential risk of kernel memory exposure.",
    tags_en: ["Linux Kernel", "fuse", "io-uring", "stack buffer", "CONFIG_HARDENED_USERCOPY"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80946", lang: "EN" }
    ]
  },
  {
    id: "20260911-12333",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 Wi-Fi 驅動程式 rtl8xxxu 修正 use-after-free 漏洞",
    summary: "本漏洞存在於 Linux 核心的 rtl8xxxu Wi-Fi 驅動程式中，屬於使用後釋放（use-after-free）類型。攻擊條件是在活躍的接收（RX）流量（即待處理的 URB 數量超過水位線）發生後，執行介面斷開（disconnect）操作。當系統執行 `rtl8xxxu_stop()` 時，雖然會取消其他工作項目，但未能取消 `rx_urb_wq` 工作佇列。這導致在 `rtl8xxxu_disconnect()` 呼叫了 `ieee80211_free_hw()` 釋放 `priv` 結構體之後，一個在接收流量高峰期啟動的工作執行緒仍可能運行，並嘗試使用已釋放的 `priv` 指標，從而觸發 use-after-free。修補措施包括：1. 在 `rtl8xxxu_queue_rx_urb()` 中，將 `schedule_work()` 呼叫移動到與 `!shutdown` 檢查原子性的範圍內。2. 在 `rtl8xxxu_stop()` 中，在執行 `usb_kill_anchored_urbs()` 之前，先呼叫 `cancel_work_sync(&priv->rx_urb_wq)`，確保工作執行緒在釋放資源前被完全處理。修補後，系統在介面斷開時，會確保所有相關工作佇列被正確取消和清理。",
    tags: ["Linux 核心", "rtl8xxxu", "use-after-free", "Wi-Fi 驅動程式", "CVE"],
    title_en: "Linux Kernel Wi-Fi Driver rtl8xxxu Fixes Use-After-Free Vulnerability",
    summary_en: "This vulnerability resides in the rtl8xxxu Wi-Fi driver within the Linux kernel and is classified as a use-after-free type. The attack condition occurs after active reception (RX) traffic (i.e., when the number of pending URBs exceeds the watermark) and subsequently executing a disconnect operation. When the system executes `rtl8xxxu_stop()`, although it cancels other work items, it fails to cancel the `rx_urb_wq` work queue. This leads to a scenario where a work thread started during a reception traffic peak may still run and attempt to use the freed `priv` pointer, after `rtl8xxxu_disconnect()` calls `ieee80211_free_hw()` to release the `priv` structure, thereby triggering a use-after-free. The patches include: 1. Moving the `schedule_work()` call in `rtl8xxxu_queue_rx_urb()` to within the scope atomic with the `!shutdown` check. 2. In `rtl8xxxu_stop()`, calling `cancel_work_sync(&priv->rx_urb_wq)` before executing `usb_kill_anchored_urbs()`, ensuring that the work thread is fully processed before resources are released. After the fix, the system ensures that all relevant work queues are correctly canceled and cleaned up when the interface disconnects.",
    tags_en: ["Linux Kernel", "rtl8xxxu", "use-after-free", "Wi-Fi Driver", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80947", lang: "EN" }
    ]
  },
  {
    id: "20260911-12334",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 iwl_op_mode_dvm_start() 記憶體洩漏漏洞",
    summary: "本漏洞存在於 Linux 核心的 `wifi: iwlwifi: dvm` 驅動程式中。問題出在 `iwl_op_mode_dvm_start()` 函式中，當程式執行到 `out_free_eeprom` 時，會繞過 `out_free_eeprom_blob` 標籤。因此，在成功解析 EEPROM 自由位址（priv->nvm_data）之後，若觸發錯誤路徑，會導致 `priv->eeprom_blob` 記憶體洩漏。開發團隊已透過重新排序錯誤處理標籤來修復此記憶體洩漏。此錯誤最初是在分析 v6.13-rc1 時被發現的，目前已確認在 v7.1-rc6 版本中仍存在，但已提供修復方案。修補建議是更新到修復了此記憶體洩漏的 Linux 核心版本。",
    tags: ["Linux 核心", "iwlwifi", "dvm", "記憶體洩漏", "CVE-2026-80948"],
    title_en: "Linux Kernel Fixes iwl_op_mode_dvm_start() Memory Leak Vulnerability",
    summary_en: "This vulnerability exists in the `wifi: iwlwifi: dvm` driver within the Linux kernel. The issue resides in the `iwl_op_mode_dvm_start()` function, where execution reaches `out_free_eeprom` while bypassing the `out_free_eeprom_blob` label. Consequently, after successfully parsing the EEPROM free address (priv->nvm_data), triggering an error path results in a memory leak of `priv->eeprom_blob`. The development team fixed this memory leak by reordering the error handling labels. This error was initially discovered while analyzing v6.13-rc1 and was confirmed to persist in v7.1-rc6, but a fix has been provided. The recommended patch is to update to a Linux kernel version that resolves this memory leak.",
    tags_en: ["Linux Kernel", "iwlwifi", "dvm", "Memory Leak", "CVE-2026-80948"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80948", lang: "EN" }
    ]
  },
  {
    id: "20260911-12335",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：brcmfmac 驅動程式修復記憶體洩漏漏洞",
    summary: "本修補針對 Linux 核心的 wifi: brcmfmac 驅動程式，解決了 `brcmf_sdio_read_control()` 函式中存在的記憶體洩漏（memory leak）問題。在某些錯誤處理路徑（error paths）中，為 `buf` 分配的記憶體未能被釋放。修補措施透過增加 `vfree()` 呼叫來確保記憶體資源得到正確釋放，防止系統資源耗盡。此類記憶體洩漏漏洞屬於核心元件層面的穩定性問題，修補後能提升系統的穩定性和資源管理效率。建議系統管理員應透過核心更新機制，將 Linux 核心升級至包含此修補的最新版本，以確保系統的穩定運行。",
    tags: ["Linux 核心", "brcmfmac", "記憶體洩漏", "wifi", "核心修補"],
    title_en: "Linux Kernel Patch: Fixes Memory Leak Vulnerability in brcmfmac Driver",
    summary_en: "This patch addresses the `wifi: brcmfmac` driver within the Linux kernel, resolving a memory leak issue found in the `brcmf_sdio_read_control()` function. In certain error handling paths, memory allocated for `buf` was not being released. The fix introduces an additional `vfree()` call to ensure that memory resources are correctly freed, preventing system resource exhaustion. This type of memory leak vulnerability is a core component stability issue; applying the patch enhances system stability and resource management efficiency. System administrators are advised to upgrade the Linux kernel to the latest version containing this patch via the kernel update mechanism to ensure stable system operation.",
    tags_en: ["Linux Kernel", "brcmfmac", "Memory Leak", "wifi", "Kernel Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80949", lang: "EN" }
    ]
  },
  {
    id: "20260911-12336",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 i3c 驅動程式修復空轉處理漏洞，防止中斷處理器存取已釋放記憶體",
    summary: "本漏洞存在於 Linux 核心的 Renesas I3C 驅動程式中。該驅動程式採用非同步模型進行資料傳輸，在等待完成時，如果傳輸逾時，等待執行緒會釋放相關的資料結構（struct renesas_i3c_xfer）。若此時發生中斷（interrupt），中斷處理器（interrupt handler）可能會嘗試存取這些已被釋放的記憶體，進而導致系統崩潰（crash）。修復措施要求在中斷處理器中，存取資料前必須檢查傳輸是否仍然有效。此外，建議清除所有狀態旗標並禁用所有中斷，以避免再次觸發相同的中斷，確保系統穩定性。",
    tags: ["Linux 核心", "i3c", "Renesas", "驅動程式", "記憶體安全", "中斷處理"],
    title_en: "Linux Kernel i3c Driver Fixes Race Condition Vulnerability, Preventing Interrupt Handler Access to Freed Memory",
    summary_en: "This vulnerability resides in the Renesas I3C driver within the Linux kernel. The driver uses an asynchronous model for data transfer. If the transfer times out while waiting for completion, the waiting thread releases the associated data structure (struct renesas_i3c_xfer). If an interrupt occurs at this point, the interrupt handler may attempt to access this already freed memory, potentially leading to a system crash. The fix requires that the interrupt handler must check if the transfer is still valid before accessing the data. Furthermore, it is recommended to clear all status flags and disable all interrupts to prevent re-triggering the same interrupt, thereby ensuring system stability.",
    tags_en: ["Linux Kernel", "i3c", "Renesas", "Driver", "Memory Safety", "Interrupt Handler"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80950", lang: "EN" }
    ]
  },
  {
    id: "20260911-12337",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 i3c 驅動程式存在越界寫入漏洞，可能導致 IBI 緩衝區溢出",
    summary: "本漏洞存在於 Linux 核心的 i3c 驅動程式中，具體為 `i3c: master: svc: bound IBI payload to the requested max_payload_len`。問題出在 `svc_i3c_master_handle_ibi()` 函數，該函數從 RX FIFO 讀取 IBI 負載到 IBI 槽位。由於循環的邊界僅受限於硬體 FIFO 大小（SVC_I3C_FIFO_SIZE），而非目標槽位大小。當設備發送的位元組數超過了槽位實際容量時，會導致寫入超出 `slot->data` 的範圍，造成 IBI 緩衝區越界寫入（out-of-bounds write）。這類漏洞可能被利用來執行任意程式碼或造成系統崩潰。修補建議是將讀取循環的邊界限制在 `dev->ibi->max_payload_len`，並確保每次讀取數據時，都根據槽位剩餘空間進行限制，以防止數據洩漏到下一次傳輸。此類修補屬於核心層面的安全加固。",
    tags: ["Linux 核心", "i3c", "CVE-2026-80951", "越界寫入", "IBI 緩衝區"],
    title_en: "Out-of-bounds write vulnerability found in Linux kernel i3c driver, potentially causing IBI buffer overflow",
    summary_en: "This vulnerability resides in the Linux kernel's i3c driver, specifically within the function `i3c: master: svc: bound IBI payload to the requested max_payload_len`. The issue lies in the `svc_i3c_master_handle_ibi()` function, which reads an IBI payload from the RX FIFO into the IBI slot. Because the loop boundary is only limited by the hardware FIFO size (SVC_I3C_FIFO_SIZE) and not the target slot size, an out-of-bounds write occurs when the number of bytes sent by the device exceeds the actual capacity of the slot. This type of vulnerability could potentially be exploited to execute arbitrary code or cause a system crash. The recommended fix is to limit the reading loop boundary to `dev->ibi->max_payload_len` and ensure that data is read based on the remaining space in the slot during each read operation, thereby preventing data leakage into the next transmission. This fix constitutes a core-level security hardening.",
    tags_en: ["Linux kernel", "i3c", "CVE-2026-80951", "Out-of-bounds write", "IBI buffer"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80951", lang: "EN" }
    ]
  },
  {
    id: "20260911-12338",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 i3c 設備註冊路徑的資訊洩漏與 UAF 漏洞",
    summary: "本漏洞存在於 Linux 核心的 i3c 總線驅動程式中，主要影響設備的註冊與解除註冊流程。當執行 `device_unregister()` 時，如果設備描述符（device descriptor）尚未被正確處理，可能會導致 `i3c_device_uevent()` 和 `modalias_show()` 等函式觀察到 NULL 的描述符。這不僅可能導致核心堆疊內容洩漏（information leak），還可能使驅動程式的 `.remove()` 回呼函式在解除綁定（unbind）時遇到意外的 NULL 描述符，造成潛在的 Use-After-Free (UAF) 問題。修復建議是，在呼叫 `device_unregister()` 之前，必須使用 `get_device()` 取得額外的設備參考計數，確保設備描述符在整個註冊流程中保持有效。在完成註冊後，再清除描述符並釋放額外的參考計數，以避免資訊洩漏和 UAF。",
    tags: ["Linux 核心", "i3c", "資訊洩漏", "Use-After-Free", "Linux 驅動程式"],
    title_en: "Linux Kernel Fixes Information Leak and UAF Vulnerability in i3c Device Registration Path",
    summary_en: "This vulnerability resides in the i3c bus driver within the Linux kernel, primarily affecting the device registration and unregistration process. When `device_unregister()` is executed, if the device descriptor has not been properly handled, it may cause functions like `i3c_device_uevent()` and `modalias_show()` to observe NULL descriptors. This not only risks kernel stack information leakage but can also cause the driver's `.remove()` callback function to encounter unexpected NULL descriptors during unbinding, leading to a potential Use-After-Free (UAF) issue. The suggested fix is that before calling `device_unregister()`, an additional device reference must be acquired using `get_device()` to ensure the device descriptor remains valid throughout the entire registration process. After completing the registration, the descriptor should be cleared and the extra reference count released to prevent information leakage and UAF.",
    tags_en: ["Linux Kernel", "i3c", "Information Leak", "Use-After-Free", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80952", lang: "EN" }
    ]
  },
  {
    id: "20260911-12339",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 i3c 驅動程式存在競態條件漏洞：未初始化鎖可能導致系統崩潰",
    summary: "本漏洞存在於 Linux 核心的 i3c 驅動程式中，具體為 `adi_i3c_master_probe()` 函式。當此函式請求並解除 i3c 控制器的 REG_IRQ_PENDING_CMDR 訊號後，在控制器內部狀態（如 IBI 狀態、傳輸佇列列表和傳輸佇列鎖）尚未初始化時，一個待處理的 CMDR 中斷（pending CMDR interrupt）可能會觸發 `adi_i3c_master_irq()`。此中斷會在動態鎖（dynamic lock）初始化之前，嘗試獲取 `master->xferqueue.lock`，從而導致鎖定機制上的競態條件（race condition）和潛在的系統不穩定性。此問題已透過靜態分析工具發現並進行人工審核，修補建議是在請求和解除 IRQ 訊號之前，必須先初始化傳輸佇列和 IBI 狀態，以確保鎖定資源的完整性。建議系統維護者應更新至修補後的 Linux 核心版本以修復此漏洞。",
    tags: ["Linux 核心", "i3c", "adi", "競態條件", "Linux 驅動程式"],
    title_en: "Race Condition Vulnerability in Linux Kernel i3c Driver: Uninitialized Lock May Cause System Crash",
    summary_en: "This vulnerability resides in the Linux kernel's i3c driver, specifically within the `adi_i3c_master_probe()` function. When this function requests and releases the REG_IRQ_PENDING_CMDR signal from the i3c controller, a pending CMDR interrupt may trigger `adi_i3c_master_irq()` before the controller's internal state (such as IBI status, transfer queue list, and transfer queue lock) has been initialized. This interrupt attempts to acquire `master->xferqueue.lock` before the dynamic lock is initialized, leading to a race condition in the locking mechanism and potential system instability. This issue was discovered through static analysis tools and subsequent manual review. The suggested fix is to ensure that the transfer queue and IBI status are initialized before requesting and releasing the IRQ signal, thereby guaranteeing the integrity of the locking resources. System maintainers are advised to update to a patched Linux kernel version to resolve this vulnerability.",
    tags_en: ["Linux Kernel", "i3c", "adi", "Race Condition", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80953", lang: "EN" }
    ]
  },
  {
    id: "20260911-12340",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 i3c 驅動程式修復空指針解引用漏洞，提升設備存取安全性",
    summary: "本漏洞存在於 Linux 核心的 i3c 驅動程式中，具體影響於 `i3c_device_get_supported_xfer_mode()` 函數。該函數在取得主控制器時，錯誤地使用了 `dev->desc` 指標，但未確保在解引用前持有 `bus->lock`。這可能導致在未正確鎖定資源的情況下，對設備描述符進行解引用，引發空指針或記憶體存取錯誤，從而造成系統不穩定或潛在的本地權限提升風險。修復建議是修改該函數，改為使用 `dev->bus` 來取得與設備總線相關的主控制器，因為 `dev->bus` 在設備生命週期內始終有效，且無需解引用 `dev->desc`，從而避免了不安全的記憶體操作。此修補屬於核心元件層面的安全加固。",
    tags: ["Linux 核心", "i3c", "空指針", "驅動程式", "安全修補"],
    title_en: "Linux Kernel i3c Driver Fixes Null Pointer Dereference Vulnerability, Enhancing Device Access Security",
    summary_en: "This vulnerability resides in the Linux kernel's i3c driver, specifically affecting the `i3c_device_get_supported_xfer_mode()` function. This function incorrectly uses the `dev->desc` pointer when obtaining the master controller, without ensuring that `bus->lock` is held before dereferencing. This could lead to dereferencing the device descriptor without properly locked resources, triggering a null pointer or memory access error, potentially causing system instability or a local privilege escalation risk. The recommended fix is to modify the function to use `dev->bus` to obtain the master controller associated with the device bus. This is because `dev->bus` remains valid throughout the device lifecycle and eliminates the need to dereference `dev->desc`, thereby preventing unsafe memory operations. This patch constitutes a security hardening at the core component level.",
    tags_en: ["Linux Kernel", "i3c", "Null Pointer", "Driver", "Security Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80954", lang: "EN" }
    ]
  },
  {
    id: "20260911-12341",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 dm-pcache：解決 kset_replay() 中的 Use-After-Free 漏洞",
    summary: "本漏洞存在於 Linux 核心的 dm-pcache 元件，具體發生在 kset_replay() 函數中。當 key->seg_gen 狀態過時（即 key->seg_gen < key->cache_pos.cache_seg->gen）時，系統會呼叫 cache_key_put(key)，但隨後仍嘗試存取 key->cache_pos.cache_seg 作為 cache_seg_get() 的參數。這導致了對已釋放的 key 記憶體進行存取，屬於典型的 Use-After-Free (UAF) 漏洞。此外，文章指出對於過期的無效 key，設定 cache->seg_map 位元並呼叫 cache_seg_get() 是不合理的，因為對應的區段資料已無效。修補措施是將 cache_seg_get() 和 __set_bit() 的執行時機，移至完成生成（gen）檢查之後，確保它們僅在有效 key 上執行，並使用 continue 跳過無效 key，從而修復了這兩個潛在的記憶體操作錯誤。",
    tags: ["Linux 核心", "dm-pcache", "kset_replay", "Use-After-Free", "Linux 核心漏洞"],
    title_en: "Linux Kernel Fixes dm-pcache: Resolving Use-After-Free Vulnerability in kset_replay()",
    summary_en: "This vulnerability resides in the Linux kernel's dm-pcache component, specifically within the kset_replay() function. When the key->seg_gen state is stale (i.e., key->seg_gen < key->cache_pos.cache_seg->gen), the system calls cache_key_put(key), but subsequently attempts to access key->cache_pos.cache_seg as an argument to cache_seg_get(). This leads to accessing already freed key memory, which constitutes a typical Use-After-Free (UAF) vulnerability. Furthermore, the article notes that setting the cache->seg_map bit and calling cache_seg_get() for expired, invalid keys is improper, as the corresponding segment data is already invalid. The patch addresses this by moving the execution of cache_seg_get() and __set_bit() until after the generation (gen) check is completed, ensuring they are only executed on valid keys and using continue to skip invalid keys, thereby fixing these two potential memory manipulation errors.",
    tags_en: ["Linux Kernel", "dm-pcache", "kset_replay", "Use-After-Free", "Linux Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80955", lang: "EN" }
    ]
  },
  {
    id: "20260911-11759",
    trackers: ["security"],
    category: "法規與標準",
    title: "消基會點名酷澎個資外洩案：跨境電商權限管理與個資監管制度有缺口",
    summary: "消基會針對去年爆發的酷澎（Coupang）個資外洩事件提出質疑，指出該案不僅暴露出跨境電商平台在權限管理與資安治理上的重大缺失，也凸顯了台灣在跨境個資傳輸及境外資料監管制度上的不足。事件經調查確認，有超過 20 萬名台灣用戶的個人資料（包含姓名、電子郵件、電話號碼、配送地址及近 5 筆訂單紀錄）遭離職員工非法讀取。消基會批評酷澎的區隔機制形同虛設，指出不同地區資料庫共用同一組備援金鑰，且企業未能及時撤銷離職員工的存取權限，顯示其身分權限及金鑰管理存在嚴重漏洞。此外，消基會更強調，由於大量個資儲存在境外，現行法規難以有效掌握資料流向與監管。因此，消基會呼籲政府應儘速設立獨立的個資監督機制，並要求跨國電商應將大量台灣用戶的個資儲存於台灣境內，以利主管機關掌握資料流向，落實個資保護與監管。",
    tags: ["消基會", "酷澎", "個資外洩", "跨境個資", "權限管理", "個人資料保護法"],
    title_en: "Consumer Protection Council Points to Coupang Data Leak: Gaps in Cross-Border E-commerce Access Control and Personal Data Governance",
    summary_en: "The Consumer Protection Council (CPC) questioned the personal data leak incident involving Coupang last year, pointing out that the case not only exposed significant deficiencies in cross-border e-commerce platforms' access control and cybersecurity governance but also highlighted Taiwan's insufficient system for cross-border personal data transmission and overseas data supervision. Investigations confirmed that personal data belonging to over 200,000 Taiwanese users (including names, email addresses, phone numbers, shipping addresses, and the last 5 order records) was illegally accessed by a former employee. The CPC criticized Coupang's segmentation mechanism as virtually non-existent, noting that different regional databases shared the same backup keys, and that the company failed to promptly revoke the former employee's access privileges, indicating serious vulnerabilities in identity and key management. Furthermore, the CPC emphasized that because a large amount of personal data is stored overseas, current regulations struggle to effectively track data flow and supervision. Therefore, the CPC called on the government to promptly establish an independent personal data supervisory mechanism and demanded that multinational e-commerce companies store the personal data of a large number of Taiwanese users within Taiwan to facilitate regulatory oversight and enforce personal data protection and governance.",
    tags_en: ["Consumer Protection Council", "Coupang", "Personal Data Leak", "Cross-Border Personal Data", "Access Control", "Personal Data Protection Act"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178878", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11770",
    trackers: ["eu_cra", "os", "security"],
    category: "法規與標準",
    title: "歐盟CRA法案要求：新唐科技解析MCU/MPU升級判斷，強調產品風險評估為核心",
    summary: "隨著歐盟《網路韌性法案》（CRA）的逐步實施，產品製造商必須掌握資安合規的整體風險評估。新唐科技指出，終端設備是否需要升級MCU或MPU，不能僅依單一晶片功能判斷，而必須從產品整體架構、其所屬的CRA分類（如Default、Important Class I/II、Critical）以及MCU/MPU在產品中扮演的「安全關鍵角色」來決定。例如，若MCU僅負責基礎控制（如智慧插座），且安全功能由其他元件承擔，則無需單純升級；但若MCU直接負責身分驗證或存取控制（如整合式智慧門鎖），則需考慮升級具備完整硬體安全功能的元件。此外，即使使用相同MPU，若產品核心功能不同（如網路管理 vs. 防火牆），其CRA分類和風險等級不同，也可能要求不同的安全升級。製造商需掌握晶片、軟體等供應鏈上游安全資訊，並準備SBOM、PSIRT等文件，確保產品生命週期有足夠的安全更新支援。",
    tags: ["歐盟CRA", "網路韌性法案", "MCU", "MPU", "資安合規", "風險評估", "供應鏈安全"],
    title_en: "EU CRA Act Requirements: SingHail Technology Analyzes MCU/MPU Upgrade Determination, Emphasizing Product Risk Assessment as Core",
    summary_en: "With the gradual implementation of the EU Cyber Resilience Act (CRA), product manufacturers must master overall cybersecurity risk assessment. SingHail Technology points out that whether an end device needs an MCU or MPU upgrade cannot be determined solely by the function of a single chip, but must be decided based on the product's overall architecture, its CRA classification (such as Default, Important Class I/II, or Critical), and the 'safety-critical role' the MCU/MPU plays within the product. For example, if the MCU is only responsible for basic control (such as a smart plug) and safety functions are handled by other components, a simple upgrade is unnecessary; however, if the MCU is directly responsible for identity verification or access control (such as an integrated smart lock), then upgrading to a component with complete hardware security functions must be considered. Furthermore, even if the same MPU is used, if the core product functions are different (such as network management vs. firewall), the CRA classification and risk level will differ, potentially requiring different security upgrades. Manufacturers must grasp upstream security information from the chip, software, and other supply chain sources, and prepare documents such as SBOM and PSIRT to ensure sufficient security update support throughout the product lifecycle.",
    tags_en: ["EU CRA", "Cyber Resilience Act", "MCU", "MPU", "Cybersecurity Compliance", "Risk Assessment", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178857", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11903",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 釋出新版 Insider Preview Build，提升右鍵選單與檔案總管搜尋功能",
    summary: "微軟透過 Windows Insider Program 發布了多個 Windows 11 的新版 Preview Builds，涵蓋 Beta、Experimental 和 Release Preview 等不同測試通道。本次更新主要針對使用者介面體驗進行優化。在「Experimental」通道中，使用者可以透過新的右鍵選單（Context menu）設定，不僅能看到新手教學提示，更可以選擇關閉自訂右鍵選單的顯示。此外，文件總管（File Explorer）的搜尋功能也進行了重大改進，現在「從本機（This PC）」的搜尋已改為基於索引器（indexer-based），這將大幅提升搜尋速度和一致性。本次更新的 Build 版本包括 Beta 的 26220.9472，以及 Release Preview (26H1) 的 28000.3079 等。建議使用者根據自身需求，在適當的測試通道下載並更新系統。",
    tags: ["Windows 11", "Insider Preview", "Context menu", "File Explorer", "26H1", "Build 28000.3079"],
    title_en: "Windows 11 Releases New Insider Preview Builds, Enhancing Context Menu and File Explorer Search Functionality",
    summary_en: "Microsoft has released multiple new Windows 11 Preview Builds through the Windows Insider Program, covering various testing channels including Beta, Experimental, and Release Preview. This update primarily focuses on optimizing the user interface experience. In the 'Experimental' channel, users can now configure the new context menu settings, allowing them not only to view new user onboarding tips but also to choose to disable the display of customized context menus. Furthermore, the search functionality within File Explorer has undergone significant improvements. Searching from 'This PC' is now indexer-based, which will greatly enhance search speed and consistency. The Build versions included in this update are Beta 26220.9472 and Release Preview (26H1) 28000.3079. Users are advised to download and update the system in the appropriate testing channel based on their needs.",
    tags_en: ["Windows 11", "Insider Preview", "Context menu", "File Explorer", "26H1", "Build 28000.3079"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/windows-insider/2026/09/11/announcing-new-builds-for-11-september-2026", lang: "EN" }
    ]
  },
  {
    id: "20260911-11967",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 實驗性建置預覽新版滑鼠游標：Microsoft 正在推動介面現代化",
    summary: "近期，透過 Build 26340.9354 的實驗性 Windows 11 建置，使用者意外發現了 Microsoft 官方模擬的新版滑鼠游標。該游標相較於傳統的 Windows 箭頭，體積更寬、邊緣更柔和且更具對稱性，擺脫了過去細長的尾巴狀延伸。雖然 Microsoft 的官方發布說明並未正式宣布游標改變，但這與先前關於內部測試新游標的報導，以及 Fluent UI System Icons 庫中更現代、更幾何化的游標圖示高度吻合。文章指出，Windows 11 雖然在 WinUI 介面和許多功能上進行了大規模現代化，但核心的滑鼠游標形狀卻長期滯後。新游標的設計趨勢與 macOS 和多數 Linux 桌面環境的現代化視覺語言一致，預示著 Windows 11 可能即將對其最顯眼的 UI 元素進行全面升級。",
    tags: ["Windows 11", "滑鼠游標", "Fluent UI", "Build 26340.9354", "WinUI", "使用者介面"],
    title_en: "Windows 11 Experimental Build Preview Shows New Mouse Cursor: Microsoft Pushing Interface Modernization",
    summary_en: "Recently, users discovered a new, simulated mouse cursor from Microsoft within the experimental Windows 11 Build 26340.9354. Compared to the traditional Windows arrow, this cursor is wider, has softer edges, and is more symmetrical, abandoning the previously thin, tapered tail shape. Although Microsoft's official release notes did not formally announce the cursor change, this aligns closely with previous reports regarding internal testing of new cursors and the more modern, geometric cursor icons found in the Fluent UI System Icons library. The article notes that while Windows 11 has undergone massive modernization in its WinUI interface and many features, the core mouse cursor shape has lagged behind. The new cursor's design trend is consistent with the modern visual language of macOS and most Linux desktop environments, suggesting that Windows 11 may be preparing for a comprehensive upgrade to its most visible UI element.",
    tags_en: ["Windows 11", "Mouse Cursor", "Fluent UI", "Build 26340.9354", "WinUI", "User Interface"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/11/is-this-windows-11s-new-modern-cursor-microsoft-quietly-shows-a-redesigned-pointer", lang: "EN" }
    ]
  },
  {
    id: "20260911-11968",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 Windows 11 藍牙重大更新，改善連線穩定性與通話體驗",
    summary: "微軟透過 Insider Program 的測試版本 (26200.9539) 推出了包含多項藍牙修復的重大更新。本次更新旨在解決 Windows 11 藍牙功能長期以來不穩定的問題，包括連線狀態顯示不準確、藍牙設備管理頁面不穩定等。主要修復內容包括：改善藍牙設備的連線狀態顯示，讓使用者能更準確判斷設備是否已斷開；提升使用藍牙耳機進行通話時的音量調整體驗，系統內建的音量飛出介面將會出現；改善了藍牙經典音訊配件的麥克風相容性，並修復了即使開關顯示啟用，藍牙無線電仍可能被關閉的錯誤。此外，對於具備 LE Audio 的新型藍牙耳機，性能和可靠性也得到提升。此外，微軟還宣布推動 Driver Quality Initiative (DQI)，要求 OEM 和合作夥伴遵循新的驅動程式品質標準，目標是提高核心模式驅動程式的可靠性與安全性，並逐步將第三方核心模式驅動程式遷移至使用者模式，以提升整個作業系統的穩定性與安全性。",
    tags: ["Windows 11", "藍牙", "Bluetooth", "Microsoft", "Driver Quality Initiative (DQI)"],
    title_en: "Microsoft Announces Major Windows 11 Bluetooth Update to Improve Connection Stability and Call Experience",
    summary_en: "Microsoft has released a major update containing multiple Bluetooth fixes through the Insider Program test version (26200.9539). This update aims to address long-standing instability issues with Windows 11 Bluetooth functionality, including inaccurate connection status display and instability in the Bluetooth device management page. Key fixes include: improving the display of Bluetooth device connection status, allowing users to more accurately determine if a device has been disconnected; enhancing the volume adjustment experience when using Bluetooth headphones for calls, which will introduce a system-built volume flyout interface; improving microphone compatibility for Bluetooth classic audio accessories, and fixing an error where the Bluetooth radio could still be turned off even if the toggle displayed it as enabled. Furthermore, performance and reliability have been enhanced for newer Bluetooth headphones with LE Audio. Additionally, Microsoft announced the promotion of the Driver Quality Initiative (DQI), requiring OEMs and partners to adhere to new driver quality standards. The goal is to improve the reliability and security of core-mode drivers and gradually migrate third-party core-mode drivers to user mode, thereby enhancing the overall stability and security of the operating system.",
    tags_en: ["Windows 11", "Bluetooth", "Bluetooth", "Microsoft", "Driver Quality Initiative (DQI)"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/11/microsoft-acknowledges-bluetooth-on-windows-11-is-a-hot-mess-begins-testing-nine-major-fixes", lang: "EN" }
    ]
  },
  {
    id: "20260911-11411",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "金科工廠（GoldFactory）利用 Android Work Profile 進行銀行 App 克隆，在印尼發動新型詐騙攻擊",
    summary: "資安研究機構 Group-IB 報告指出，一個名為 GoldFactory 的駭客組織，正在印尼等地利用 Android 作業系統的 Work Profile 功能，發動新型的銀行 App 克隆詐騙攻擊。攻擊鏈的核心是 Gigabud 銀行木馬，它在取得權限後，會安裝一個名為 Vwork 的應用程式（Vwork 是開源 App-cloning 應用 Shelter 的一個分支）。該木馬利用 Work Profile 建立一個隔離的「工作空間」，將受害者手機上真實的銀行 App 複製到這個沙盒環境中。詐騙者可以在此隔離環境中進行交易，從而規避銀行和安全系統針對個人個人資料夾（Personal Profile）的欺詐偵測和風險訊號。這使得詐騙交易看起來像是來自一個「新設備」，從而成功繞過現有的安全控制。受影響地區包括印尼、巴西、哥倫比亞等。Group-IB 建議用戶留意非企業環境下突然出現的隔離工作空間、不必要的應用程式權限授予，以及在短時間內出現的相同銀行 App 複製安裝。",
    tags: ["Android", "Gigabud", "Work Profile", "App Cloning", "Group-IB", "金科工廠", "銀行木馬"],
    title_en: "GoldFactory Exploits Android Work Profile to Clone Banking Apps in New Scam Attack in Indonesia",
    summary_en: "Cybersecurity research firm Group-IB reported that a hacking group calling itself GoldFactory is launching a novel banking app cloning scam attack in Indonesia and other regions. The core of the attack chain is the Gigabud banking trojan, which, after gaining permissions, installs an application named Vwork (Vwork is a fork of the open-source app-cloning application Shelter). This trojan utilizes the Work Profile feature of Android to create an isolated 'work space,' cloning the victim's real banking apps into this sandbox environment. The scammers can then conduct transactions within this isolated environment, thereby evading fraud detection and risk signals implemented by banks and security systems for the Personal Profile. This makes the fraudulent transactions appear to originate from a 'new device,' successfully bypassing existing security controls. Affected regions include Indonesia, Brazil, and Colombia. Group-IB advises users to be vigilant for suddenly appearing isolated work spaces in non-enterprise environments, unnecessary application permission grants, and the rapid cloning installation of the same banking app.",
    tags_en: ["Android", "Gigabud", "Work Profile", "App Cloning", "Group-IB", "GoldFactory", "Banking Trojan"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/mobile-security/indonesia-android-banking-app-cloning-campaign", lang: "EN" }
    ]
  },
  {
    id: "20260911-11419",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "醫療產業面臨語音網釣攻擊：ShinyHunters利用SSO竊取帳密與敏感資料",
    summary: "資安情報分享中心Health-ISAC發出警訊，指出勒索組織ShinyHunters正針對全球醫療產業，透過語音網釣（Vishing）方式進行攻擊。攻擊者會註冊仿冒網域，冒充內部人員誘騙員工洩露帳密，甚至要求提供MFA驗證碼，以取得已通過身分驗證的連線階段。一旦取得權限，攻擊者可利用單一登入（SSO）平臺，從Microsoft 365、SharePoint及Salesforce等相連的SaaS服務，大量竊取敏感資料和內部通訊，最終進行勒索。Health-ISAC建議醫療機構應優先為管理員和高風險使用者群體部署FIDO2/WebAuthn安全金鑰或通行金鑰，並限制SaaS及內部入口的存取權限僅限於經驗證的企業管理裝置，同時加強對仿冒網域的監控，以降低帳密遭竊風險。",
    tags: ["ShinyHunters", "醫療產業", "語音網釣", "Vishing", "SSO", "MFA", "Health-ISAC"],
    title_en: "Healthcare Industry Faces Voice Phishing Attacks: ShinyHunters Exploits SSO to Steal Credentials and Sensitive Data",
    summary_en: "The Health-ISAC has issued a warning, pointing out that the ransomware group ShinyHunters is targeting the global healthcare industry through Voice Phishing (Vishing) attacks. Attackers register spoofed domains and impersonate internal personnel to trick employees into revealing credentials, or even requesting MFA verification codes, in order to gain access to an already authenticated session. Once access is obtained, the attackers can utilize Single Sign-On (SSO) platforms to steal large amounts of sensitive data and internal communications from connected SaaS services such as Microsoft 365, SharePoint, and Salesforce, ultimately leading to ransomware deployment. Health-ISAC recommends that healthcare organizations prioritize deploying FIDO2/WebAuthn security keys or passkeys for administrators and high-risk user groups, restrict access to SaaS and internal entry points only to verified corporate managed devices, and strengthen monitoring for spoofed domains to mitigate the risk of credential theft.",
    tags_en: ["ShinyHunters", "Healthcare Industry", "Vishing", "SSO", "MFA", "Health-ISAC"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178841", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11550",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布延長衛星通訊功能免費試用期，涵蓋 iPhone 14、15 及 16 型號用戶",
    summary: "Apple 在發布 iPhone 18 Pro 的新聞稿中，宣布將其衛星通訊功能（Satellite Features）的免費試用期再延長一年。此功能最初在 iPhone 14 系列中推出，包括透過衛星進行的「緊急 SOS」和「尋找我的」定位分享。隨著時間推移，Apple 逐步擴展了相關功能，如「路邊協助」和「訊息」。本次延長的免費權益涵蓋現有的 iPhone 14、iPhone 15 和 iPhone 16 用戶，只要是在支援衛星功能的國家/地區在太平洋時間 9 月 9 日午夜前啟用設備的用戶即可享有。這意味著購買新機型（如 iPhone 18 Pro）的用戶將獲得一年的免費使用權，而舊機型用戶也獲得了額外的免費年限。目前 Apple 並未公布衛星功能在免費期結束後的收費方案，但由於這些功能具有潛在的生命攸關性質，業界普遍預期 Apple 可能會維持部分服務的免費提供，以避免爭議。延長後，用戶可持續在缺乏行動網路和 Wi-Fi 訊號的環境下，保持連線並獲得協助。",
    tags: ["Apple", "iPhone 18 Pro", "衛星通訊", "Emergency SOS", "iPhone 14", "iPhone 15"],
    title_en: "Apple extends free trial period for Satellite Connectivity, covering iPhone 14, 15, and 16 models",
    summary_en: "In a press release announcing the iPhone 18 Pro, Apple announced the extension of the free trial period for its Satellite Features by one year. This functionality was initially introduced with the iPhone 14 series and includes 'Emergency SOS' and 'Find My' location sharing via satellite. Over time, Apple has gradually expanded related features, such as 'Car Crash Detection' and 'Messaging.' This extended free benefit covers existing iPhone 14, iPhone 15, and iPhone 16 users, provided they activate the device in a country/region supporting satellite functionality before midnight Pacific Time on September 9. This means that users purchasing new models (such as the iPhone 18 Pro) will receive one year of free usage, and older model users will also receive an additional free year. Apple has not yet disclosed the paid subscription plan for these features after the free period, but due to the potentially life-saving nature of these functions, the industry generally expects Apple to maintain free access to certain services to avoid controversy. After the extension, users can continue to stay connected and receive assistance in environments lacking cellular and Wi-Fi signals.",
    tags_en: ["Apple", "iPhone 18 Pro", "Satellite Connectivity", "Emergency SOS", "iPhone 14", "iPhone 15"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/10/apple-extends-free-iphone-satellite-access-for-another-year", lang: "EN" }
    ]
  },
  {
    id: "20260911-11750",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增三項已知遭利用漏洞：JFrog Artifactory與ConnectWise ScreenConnect受影響",
    summary: "美國網路安全局（CISA）宣布將三個新的漏洞納入其「已知遭利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。這些漏洞因有證據顯示已被惡意行為者積極利用，對聯邦企業和各類組織構成重大風險。受影響的漏洞包括：CVE-2026-42016（JFrog Artifactory 授權錯誤）、CVE-2026-42018（JFrog Artifactory 身份驗證不當）以及CVE-2026-84869（ConnectWise ScreenConnect 權限管理與授權缺失）。CISA強調，這些漏洞是惡意攻擊者常見的攻擊路徑。此外，聯邦民事行政部門（FCEB）的《具約束力營運指令》（BOD 26-04）要求聯邦機構必須優先修補KEV目錄中的高風險漏洞，特別是那些在公開資產上可讓攻擊者完全控制的漏洞。CISA鼓勵所有組織採用基於風險的漏洞管理方法，並建議所有機構應優先修補KEV目錄中的漏洞。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-42016", "CVE-2026-42018", "CVE-2026-84869", "JFrog Artifactory", "ConnectWise ScreenConnect"],
    title_en: "CISA Adds Three Known Exploited Vulnerabilities: JFrog Artifactory and ConnectWise ScreenConnect Affected",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of three new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog. These vulnerabilities pose significant risks to federal enterprises and various organizations because there is evidence that malicious actors are actively exploiting them. The affected vulnerabilities include: CVE-2026-42016 (JFrog Artifactory authorization flaw), CVE-2026-42018 (JFrog Artifactory improper authentication), and CVE-2026-84869 (ConnectWise ScreenConnect permission management and authorization deficiency). CISA emphasized that these vulnerabilities represent common attack vectors for malicious attackers. Furthermore, the Federal Civil Administrative Department's (FCEB) Binding Operational Directive (BOD 26-04) requires federal agencies to prioritize patching high-risk vulnerabilities listed in the KEV Catalog, especially those that allow an attacker to achieve full control over public assets. CISA encourages all organizations to adopt a risk-based vulnerability management approach and advises all entities to prioritize patching vulnerabilities listed in the KEV Catalog.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-42016", "CVE-2026-42018", "CVE-2026-84869", "JFrog Artifactory", "ConnectWise ScreenConnect"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/09/11/cisa-adds-three-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260911-11752",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI技術助長詐騙郵件攻擊：駭客在三日內生成百萬封高度個人化釣魚信件",
    summary: "本報導指出，駭客利用人工智慧（AI）技術，能夠大規模且高度個人化地發送詐騙郵件。在一次追蹤的釣魚活動中，一名未具名威脅行為者在短短三天內發送了超過一百萬封郵件。這些郵件的目標是特定帳款部門，內容高度擬真，甚至包含受害者公司高階主管的真實姓名，並偽造了與企業雲端服務公司 ServiceNow 相關的發票和郵件往來紀錄，極具迷惑性。攻擊者利用AI快速處理公開資訊，從而建構出更具說服力的冒充郵件，使詐騙行為的規模化、精準化和成本化程度大幅提升。專家警告，AI最大的威脅在於它能加速和提升傳統網路攻擊（如釣魚、冒充和詐騙）的效率，而非創造全新的攻擊類型。因此，除了投資前沿的 AI 郵件防護技術外，組織仍必須結合良好的網路衛生習慣、流程規範和員工教育，建立多層次的防禦體系。",
    tags: ["AI", "釣魚攻擊", "詐騙郵件", "ServiceNow", "Phishing", "資訊安全"],
    title_en: "AI Technology Fuels Phishing Attacks: Hackers Generate Millions of Highly Personalized Scam Emails in Three Days",
    summary_en: "This report highlights how hackers are utilizing Artificial Intelligence (AI) technology to send scam emails on a massive and highly personalized scale. In one tracked phishing campaign, an unidentified threat actor sent over one million emails in just three days. These emails targeted specific accounts payable departments, with content so realistic that they even included the real names of the victim company's senior executives and fabricated invoices and email correspondence related to the enterprise cloud service company ServiceNow, making them highly deceptive. The attackers leveraged AI to rapidly process public information, thereby constructing more convincing impersonation emails, significantly increasing the scale, precision, and cost-effectiveness of the scam. Experts warn that AI's greatest threat lies in its ability to accelerate and enhance traditional cyberattacks (such as phishing, impersonation, and fraud), rather than creating entirely new attack types. Therefore, in addition to investing in cutting-edge AI email defense technologies, organizations must establish a multi-layered defense system by combining good cyber hygiene, procedural standards, and employee education.",
    tags_en: ["AI", "Phishing Attacks", "Scam Emails", "ServiceNow", "Phishing", "Information Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/1m-personalized-fraud-emails-3-days", lang: "EN" }
    ]
  },
  {
    id: "20260911-11753",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA發布指導方針：呼籲服務提供商提升資安事件溝通透明度，應對日益升級的服務中斷風險",
    summary: "隨著全球資安事件和服務中斷的頻率增加，美國網路安全與基礎設施安全局（CISA）與聯邦調查局（FBI）等機構共同發布了《Communicating Under Pressure: Best Practices for Service Providers》指導方針。該指導方針強調，在IT和OT服務中斷期間，有效的危機溝通必須是透明、不帶公關說辭，並深入分析根本原因，以幫助使用者最小化營運衝擊。文章指出，企業傳統上傾向於將事件溝通視為法律和公關管理，導致傾向於最小化聲明、避免歸因，甚至延遲披露。然而，CISA的指導方針呼籲服務提供商必須立即、透明地溝通，提供可執行的指導，並持續更新，同時滿足各州和聯邦機構（如SEC）的報告要求。專家認為，這反映了業界對資安事件溝通缺乏一致性，呼籲企業應將重點放在可操作的資訊傳遞，而非僅管理聲譽。",
    tags: ["CISA", "服務提供商", "資安事件", "溝通透明度", "OT", "IT"],
    title_en: "CISA Issues Guidance: Urging Service Providers to Enhance Cybersecurity Incident Communication Transparency Amid Rising Service Disruption Risks",
    summary_en: "As the frequency of global cybersecurity incidents and service disruptions increases, the Cybersecurity and Infrastructure Security Agency (CISA) and the Federal Bureau of Investigation (FBI) have jointly released the guidance document, \"Communicating Under Pressure: Best Practices for Service Providers.\" This guidance emphasizes that during IT and OT service disruptions, effective crisis communication must be transparent, devoid of public relations spin, and deeply analyze root causes to help users minimize operational impact. The article notes that companies have traditionally tended to view incident communication as a legal and public relations matter, leading them to minimize statements, avoid attribution, or even delay disclosure. However, CISA's guidance urges service providers to communicate immediately and transparently, providing actionable instructions and continuous updates, while also meeting reporting requirements from various state and federal agencies (such as the SEC). Experts suggest that this reflects a lack of consistency in industry cybersecurity incident communication, calling for enterprises to focus on delivering actionable information rather than merely managing reputation.",
    tags_en: ["CISA", "Service Providers", "Cybersecurity Incidents", "Communication Transparency", "OT", "IT"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/cisa-calls-for-more-guidance-less-spin-as-cyber-outages-escalate", lang: "EN" }
    ]
  },
  {
    id: "20260911-11756",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI群體攻擊改變網路戰場：Papercut軟體遭攻擊，揭示攻擊鏈新趨勢",
    summary: "資安情報公司 GreyNoise 分析指出，一個疑似俄語背景的行為者利用數百個經過實驗室訓練的AI代理（AI agents），針對印表管理軟體 Papercut 的網路連線實例發動攻擊。該攻擊鎖定 PaperCut NG 和 MF 的至少 440 個實例，影響了全球 395 家組織。攻擊的顯著特點是其極高的速度和規模：攻擊者在不到四小時內實現了遠端程式碼執行（RCE），隨後在兩小時內取得 Active Directory 域管理員權限，並在全體活動啟動後僅 26 秒內成功入侵至少 11 家組織。這展示了大型語言模型（LLM）如何使攻擊者能夠以前所未有的速度和規模進行攻擊，將AI代理整合到網路攻擊生命週期（cyber kill chain）的每個階段，從偵察到橫向移動和資料外洩。專家警告，雖然國家級行為者可能在AI工具取得上領先，但所有人都應加強基礎安全衛生，例如實施多因素驗證（MFA）、限制權限，並強化異常行為偵測，以應對AI輔助的快速攻擊。",
    tags: ["Papercut", "AI agents", "LLM", "RCE", "Active Directory", "cyber kill chain", "GreyNoise"],
    title_en: "AI Swarm Attacks Change the Cyber Battlefield: Papercut Software Targeted, Revealing New Attack Trends",
    summary_en: "Analysis from threat intelligence firm GreyNoise indicates that a suspected Russian-backed actor utilized hundreds of laboratory-trained AI agents to attack network instances of the print management software Papercut. The attack targeted at least 440 instances of PaperCut NG and MF, affecting 395 organizations globally. The notable characteristics of the attack were its extreme speed and scale: the attackers achieved Remote Code Execution (RCE) in under four hours, subsequently gaining Active Directory domain administrator privileges within two hours, and successfully compromising at least 11 organizations within just 26 seconds of initiating activity. This demonstrates how Large Language Models (LLMs) enable attackers to conduct attacks with unprecedented speed and scale, integrating AI agents into every stage of the cyber kill chain, from reconnaissance to lateral movement and data exfiltration. Experts warn that while nation-state actors may lead in acquiring AI tools, everyone must strengthen foundational security hygiene, such as implementing Multi-Factor Authentication (MFA), restricting privileges, and enhancing anomaly detection, to counter AI-assisted rapid attacks.",
    tags_en: ["Papercut", "AI agents", "LLM", "RCE", "Active Directory", "cyber kill chain", "GreyNoise"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/papercut-ai-swarm-attack-cyber-kill-chain", lang: "EN" }
    ]
  },
  {
    id: "20260911-11757",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux 本地權限提升 (LPE) 偵測框架：分析新興漏洞與通用行為模式",
    summary: "本文介紹一套全面的 Linux 本地權限提升 (LPE) 偵測框架，旨在追蹤攻擊者從普通使用者權限躍升至 Root 權限的整個流程。作者指出，近年來 LPE 漏洞的披露速度和複雜度顯著增加，許多漏洞（如 Copy Fail, DirtyFrag, DirtyDecrypt 等）甚至源於同一類型的 Copy-on-Write (COW) 或零拷貝錯誤。LPE 攻擊的通用行為模式是：普通使用者在可寫入路徑（如 /tmp, /dev/shm）執行程式，隨後該流程中的某個程序以 Root 權限運行，最後可能執行 `whoami` 或 `id` 等確認指令。因此，偵測應採用雙層結構：第一層是基於「流程」的通用偵測，捕捉「從普通使用者執行程式到成為 Root」的骨架行為；第二層是針對特定漏洞類別的技術細節規則。實務上，建議使用 Elastic Defend 和 Auditd 進行監控，並啟用相關的預建規則，以提高對 LPE 攻擊的偵測能力。修補建議是持續更新和部署包含通用行為模式的偵測規則，而非僅依賴單一 CVE 的修補。",
    tags: ["Linux", "LPE", "本地權限提升", "CVE", "Elastic Defend", "Auditd", "Copy-on-Write"],
    title_en: "Linux Local Privilege Escalation (LPE) Detection Framework: Analyzing Emerging Vulnerabilities and Common Behavioral Patterns",
    summary_en: "This article introduces a comprehensive Linux Local Privilege Escalation (LPE) detection framework designed to track the entire process by which an attacker escalates from a standard user's privileges to root. The author points out that the disclosure rate and complexity of LPE vulnerabilities have significantly increased in recent years. Many vulnerabilities (such as Copy Fail, DirtyFrag, and DirtyDecrypt) even originate from the same class of Copy-on-Write (COW) or zero-copy errors. The common behavioral pattern of LPE attacks is: a standard user executes a program in a writable directory (such as /tmp or /dev/shm), followed by a process within that flow running with root privileges, and finally potentially executing confirmation commands like `whoami` or `id`. Therefore, detection should adopt a two-layered structure: the first layer is general, process-based detection, capturing the skeletal behavior of 'executing a program as a standard user to becoming root'; the second layer consists of technical rules targeting specific vulnerability classes. Practically, it is recommended to use Elastic Defend and Auditd for monitoring, and to enable relevant pre-built rules to enhance LPE detection capabilities. The remediation advice is to continuously update and deploy detection rules that incorporate common behavioral patterns, rather than relying solely on patching individual CVEs.",
    tags_en: ["Linux", "LPE", "Local Privilege Escalation", "CVE", "Elastic Defend", "Auditd", "Copy-on-Write"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/threat-command/linux-privilege-escalation-detection-framework", lang: "EN" }
    ]
  },
  {
    id: "20260911-11758",
    trackers: ["eu_cra", "os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟9月例行更新修補近千漏洞，警示零時差漏洞與AI代理攻擊風險升溫",
    summary: "本月資安焦點涵蓋微軟發布的9月例行更新（Patch Tuesday），共修補974個CVE漏洞，加上第三方元件弱點，總數接近1,000個，其中Windows作業系統漏洞佔比最高。然而，資安界警示多個零時差漏洞，如CVE-2026-81963和CVE-2026-85880，已被發現遭到實際攻擊利用，且已列入CISA KEV清單。此外，研究人員揭露了多個零時差漏洞，包括針對CrowdStrike Falcon的FalconFlank，以及突破NVIDIA GPU ECC防護的GPUThor攻擊。在AI資安領域，攻擊者利用AI代理自主性進行偵察、竊取憑證，甚至在不到10小時內完成入侵。同時，歐盟網路韌性法案（CRA）的通報義務也開始實施，要求企業提升資安治理與供應鏈韌性。建議企業應即時修補所有零時差漏洞，並特別關注AI代理的權限管理與異常行為監控。",
    tags: ["Microsoft", "Patch Tuesday", "CVE-2026-81963", "CVE-2026-85880", "AI Agent", "CRA", "零時差漏洞"],
    title_en: "Microsoft's September Patch Update Fixes Nearly 1,000 Vulnerabilities, Warning of Zero-Day and AI Agent Attack Risks",
    summary_en: "This month's cybersecurity focus covers Microsoft's regular September update (Patch Tuesday), which patched 974 CVE vulnerabilities. Including third-party component weaknesses, the total approaches 1,000, with Windows operating system vulnerabilities accounting for the highest proportion. However, the security community warns of multiple zero-day vulnerabilities, such as CVE-2026-81963 and CVE-2026-85880, which have been found to be actively exploited and listed on the CISA KEV catalog. Furthermore, researchers have disclosed multiple zero-day vulnerabilities, including FalconFlank targeting CrowdStrike Falcon, and the GPUThor attack that bypasses NVIDIA GPU ECC protection. In the AI security domain, attackers are leveraging the autonomy of AI agents for reconnaissance, credential theft, and even completing an intrusion in under 10 hours. Concurrently, the EU Cyber Resilience Act (CRA) reporting obligations are beginning to take effect, requiring enterprises to enhance cybersecurity governance and supply chain resilience. Enterprises are advised to immediately patch all zero-day vulnerabilities and pay special attention to AI agent permission management and anomaly detection.",
    tags_en: ["Microsoft", "Patch Tuesday", "CVE-2026-81963", "CVE-2026-85880", "AI Agent", "CRA", "Zero-Day Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178884", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11760",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "晶睿遭Everest勒索軟體攻擊竊取韌體資料；Fortinet、思科等設備多漏洞遭國家級駭客利用",
    summary: "近期資安事件顯示，網路攝影機廠商晶睿通訊（Vivotek）曾遭勒索軟體Everest攻擊，竊取包含韌體、原始程式碼及開發資料等近9.5萬個檔案。同時，多個資安設備的已知漏洞遭到積極利用。攻擊者利用CVE-2025-25249攻擊Fortinet FortiGate及FortiSwitchManager，試圖植入RAT木馬PivotC2。此外，國家級駭客團體利用思科防火牆管理平臺的CVE-2026-20079和CVE-2026-20316等漏洞，部署Web shell及惡意軟體。另有攻擊者利用CVE-2025-53521入侵F5 BIG-IP APM，部署Linux惡意程式。業界應注意，除了設備漏洞，北韓和伊朗駭客也透過假求職等社會工程學手法，擴大攻擊範圍至醫療、金融等領域。建議企業應實施零信任架構，並針對設備的已知漏洞及員工的社會工程學防護進行加強訓練。",
    tags: ["CVE-2025-25249", "CVE-2026-20079", "Fortinet", "思科", "勒索軟體", "晶睿通訊"],
    title_en: "Vivotek Hit by Everest Ransomware Attack Stealing Firmware Data; Multiple Vulnerabilities in Fortinet, Cisco Devices Exploited by Nation-State Hackers",
    summary_en: "Recent security incidents reveal that Vivotek (晶睿通訊), a network camera manufacturer, was targeted by the Everest ransomware, resulting in the theft of nearly 95,000 files, including firmware, source code, and development data. Concurrently, multiple known vulnerabilities in security devices have been actively exploited. Attackers utilized CVE-2025-25249 to target Fortinet FortiGate and FortiSwitchManager, attempting to implant the RAT malware PivotC2. Furthermore, nation-state hacking groups exploited vulnerabilities such as CVE-2026-20079 and CVE-2026-20316 in Cisco firewall management platforms, deploying web shells and malicious software. Separately, attackers exploited CVE-2025-53521 to breach F5 BIG-IP APM, deploying Linux malware. The industry should note that, besides device vulnerabilities, North Korean and Iranian hackers are expanding their attack scope into sectors like healthcare and finance using social engineering methods, such as fake job applications. Companies are advised to implement zero trust architecture and enhance training for both known device vulnerabilities and employee social engineering defenses.",
    tags_en: ["CVE-2025-25249", "CVE-2026-20079", "Fortinet", "Cisco", "Ransomware", "Vivotek"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178882", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11762",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Fortinet修補FortiSandbox漏洞CVE-2026-26084：未經驗證攻擊者可透過NAT規則存取敏感資訊",
    summary: "資安公司Fortinet於9月8日發布公告，修補旗下應用系統十個資安弱點。其中，特別值得關注的是沙箱系統FortiSandbox的漏洞CVE-2026-26084。此漏洞與存取控制不當有關，允許未經身分驗證的攻擊者，透過特製的HTTP請求，利用特定的NAT規則，存取FortiSandbox的敏感資訊。該漏洞的CVSS嚴重程度評分為8.9。受影響的產品版本包括FortiSandbox 4.4與5.0、雲端版FortiSandbox Cloud 5.0，以及FortiSandbox PaaS 5.0。建議用戶應升級至不受影響的版本，例如FortiSandbox 5.2、雲端版FortiSandbox Cloud 4.4，以及FortiSandbox PaaS 5.2，以修補此高風險漏洞。",
    tags: ["Fortinet", "FortiSandbox", "CVE-2026-26084", "存取控制", "NAT規則", "資安漏洞"],
    title_en: "Fortinet Patches FortiSandbox Vulnerability CVE-2026-26084: Unauthenticated Attackers Can Access Sensitive Information via NAT Rules",
    summary_en: "Cybersecurity company Fortinet issued an announcement on September 8th, patching ten security vulnerabilities across its application systems. Of particular concern is the vulnerability CVE-2026-26084 in the FortiSandbox system. This vulnerability is related to improper access control and allows unauthenticated attackers to access sensitive information within FortiSandbox using specially crafted HTTP requests and specific NAT rules. The CVSS severity score for this vulnerability is 8.9. Affected product versions include FortiSandbox 4.4 and 5.0, FortiSandbox Cloud 5.0, and FortiSandbox PaaS 5.0. Users are advised to upgrade to unaffected versions, such as FortiSandbox 5.2, FortiSandbox Cloud 4.4, and FortiSandbox PaaS 5.2, to patch this high-risk vulnerability.",
    tags_en: ["Fortinet", "FortiSandbox", "CVE-2026-26084", "Access Control", "NAT Rules", "Security Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178877", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11764",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：F5 BIG-IP APM元件CVE-2025-53521漏洞遭利用，惡意程式具備高度專精性",
    summary: "美國網路安全暨基礎設施安全局（CISA）警告，去年10月揭露的重大漏洞CVE-2025-53521，存在於F5 BIG-IP元件Access Policy Manager (APM) 中，已被實際利用。該漏洞的CVSS v4.0嚴重性評分高達9.3分。資安公司Sophos發現，攻擊者利用此漏洞入侵F5 BIG-IP系統，並部署了專門針對該平臺的Linux惡意程式。攻擊鏈利用了Apache、libphp、Apache Portable Runtime (APR) 模組載入機制，並針對BIG-IP APM的Webtop元件和更新流程設計。惡意程式具備高度專精性，採用自訂ELF載入、功能函式掛鉤及程式碼修補等手法來規避偵測，並透過感染/usr/sbin/httpd、竄改SELinux組態，以及濫用BIG-IP升級映像檔來維持持續存取。實務建議應立即修補CVE-2025-53521，並強化對F5 BIG-IP環境的監控，特別關注異常的模組載入和系統配置變更。",
    tags: ["F5 BIG-IP", "CVE-2025-53521", "APM", "Linux惡意程式", "CISA", "Webtop"],
    title_en: "CISA Warns: CVE-2025-53521 Vulnerability in F5 BIG-IP APM Component Exploited with Highly Specialized Malware",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has warned that a critical vulnerability, CVE-2025-53521, disclosed last October, exists in the F5 BIG-IP Access Policy Manager (APM) component and has been actively exploited. The vulnerability carries a CVSS v4.0 severity score of 9.3. Security firm Sophos discovered that attackers exploited this vulnerability to breach F5 BIG-IP systems and deploy specialized Linux malware targeting the platform. The attack chain leveraged the Apache, libphp, and Apache Portable Runtime (APR) module loading mechanisms, specifically targeting the BIG-IP APM's Webtop component and update process. The malware exhibits high specialization, employing techniques such as custom ELF loading, function hooking, and code patching to evade detection, and maintains persistent access by infecting /usr/sbin/httpd, tampering with SELinux configurations, and abusing BIG-IP upgrade images. Practical recommendations include immediately patching CVE-2025-53521 and strengthening monitoring of F5 BIG-IP environments, paying special attention to anomalous module loading and system configuration changes.",
    tags_en: ["F5 BIG-IP", "CVE-2025-53521", "APM", "Linux Malware", "CISA", "Webtop"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178875", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11765",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CERT Polska與CISA警告：MikroTik RouterOS面臨多個資安漏洞，部分已遭積極利用",
    summary: "波蘭電腦緊急事件應變團隊CERT Polska指出，他們利用AI技術發現了MikroTik路由器作業系統RouterOS的多個資安弱點，其中部分漏洞自9月2日即被用於實際攻擊。美國網路安全與基礎設施安全局（CISA）也發布警告，更新了已遭利用的漏洞名單（KEV）。CISA最新警告納入了兩個RouterOS的漏洞：缺乏身分驗證的CVE-2026-67277，以及指令參數分隔字元處理不當的CVE-2026-86060。CISA要求聯邦機構必須在9月13日前完成修補。用戶應立即查閱MikroTik官方發布的更新，並儘速修補RouterOS，以防範被惡意利用。",
    tags: ["MikroTik", "RouterOS", "CISA", "CERT Polska", "CVE-2026-67277", "CVE-2026-86060"],
    title_en: "CERT Polska and CISA Warn: Multiple Security Vulnerabilities Found in MikroTik RouterOS, Some Actively Exploited",
    summary_en: "The Polish Computer Emergency Incident Response Team (CERT Polska) reported that they used AI technology to discover multiple security weaknesses in the MikroTik router operating system, RouterOS. Some of these vulnerabilities have been used in actual attacks since September 2nd. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has also issued a warning, updating the list of exploited vulnerabilities (KEV). CISA's latest warning includes two RouterOS vulnerabilities: CVE-2026-67277, which involves a lack of authentication, and CVE-2026-86060, related to improper handling of command parameter delimiters. CISA requires federal agencies to complete patching by September 13th. Users are advised to immediately check the official MikroTik updates and patch RouterOS promptly to prevent malicious exploitation.",
    tags_en: ["MikroTik", "RouterOS", "CISA", "CERT Polska", "CVE-2026-67277", "CVE-2026-86060"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178872", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11766",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Check Point 警告兩大 VPN 漏洞：未經驗證攻擊者恐遠端執行程式碼",
    summary: "資安公司 Check Point 於 9 月 9 日公告修補兩項與 VPN 功能相關的重大漏洞。若未及時修補或緩解，攻擊者在特定條件下可能執行遠端程式碼（RCE）。這些漏洞的 CVSS 嚴重度均達到 9.8 分，風險極高。第一個漏洞 CVE-2026-85102 發生在 VPN 協商過程，允許未經身分驗證的攻擊者對安全閘道設備、點對點 VPN 或遠端存取 VPN 的 Check Point Spark 防火牆設備執行任意程式碼。第二個漏洞 CVE-2026-85103 與 VPN 憑證的 ASN.1 解碼過程有關，可導致記憶體堆積溢位，同樣可被用於遠端執行任意程式碼，影響安全管理伺服器、安全閘道及 Check Point Spark 防火牆設備。Check Point 強調，這些弱點由其內部發現，目前尚未有積極利用的跡象，但建議用戶儘速部署最新的 Jumbo Hotfix 進行修補。",
    tags: ["Check Point", "CVE-2026-85102", "CVE-2026-85103", "VPN", "RCE", "防火牆"],
    title_en: "Check Point Warns of Two Major VPN Vulnerabilities: Unauthenticated Attackers Could Execute Remote Code",
    summary_en: "Cybersecurity firm Check Point announced on September 9th that two critical vulnerabilities related to its VPN functionality have been patched. If not promptly patched or mitigated, attackers could potentially execute remote code (RCE) under specific conditions. Both vulnerabilities have a CVSS severity score of 9.8, indicating extremely high risk. The first vulnerability, CVE-2026-85102, occurs during the VPN negotiation process, allowing unauthenticated attackers to execute arbitrary code on Check Point Spark firewall devices used for secure gateways, point-to-point VPNs, or remote access VPNs. The second vulnerability, CVE-2026-85103, is related to the ASN.1 decoding process of VPN certificates and could lead to a memory stack overflow, which can also be used for remote arbitrary code execution, affecting security management servers, secure gateways, and Check Point Spark firewall devices. Check Point emphasized that these weaknesses were discovered internally and there are currently no signs of active exploitation, but advised users to promptly deploy the latest Jumbo Hotfix for remediation.",
    tags_en: ["Check Point", "CVE-2026-85102", "CVE-2026-85103", "VPN", "RCE", "Firewall"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178868", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11767",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Fortinet修補兩大重大漏洞：CVE-2026-84390與CVE-2026-84388，強化雲端監控與特權存取管理安全",
    summary: "資安公司Fortinet於9月8日發布資安更新，修補了多個弱點，其中兩個漏洞被列為重大等級。首先是CVE-2026-84390，影響FortiMonitor OnSight的資料採集硬體設備系統，此漏洞允許攻擊者利用偽造或已用過的JWT權杖，繞過網頁介面身分驗證流程。該漏洞的CVSS評分為9.6，影響版本範圍為7.2.0至7.2.2、7.2.4至7.2.7，建議用戶升級至7.2.8版以緩解。另一個重大弱點為CVE-2026-84388，存在於特權存取管理系統FortiPAM的代理程式Chrome延伸套件，屬於不當身分驗證問題。攻擊者可引誘使用者存取惡意網站，並透過代理伺服器將瀏覽器流量導向攻擊者控制的伺服器。CVSS評分為9.1，Fortinet建議用戶不僅需安裝8.0.1.123版延伸套件，更需將FortiPAM升級至1.9.1或1.8.4版以完全修補。用戶應留意並依循官方建議進行升級。",
    tags: ["Fortinet", "CVE-2026-84390", "CVE-2026-84388", "FortiMonitor OnSight", "FortiPAM", "JWT", "身分驗證"],
    title_en: "Fortinet Patches Two Major Vulnerabilities: CVE-2026-84390 and CVE-2026-84388, Strengthening Cloud Monitoring and Privileged Access Management Security",
    summary_en: "Security company Fortinet released a security update on September 8th, patching multiple vulnerabilities, two of which are rated as critical. The first is CVE-2026-84390, affecting the data collection hardware system of FortiMonitor OnSight. This vulnerability allows attackers to bypass the web interface authentication process using forged or reused JWT tokens. The CVSS score for this vulnerability is 9.6, affecting versions 7.2.0 through 7.2.2 and 7.2.4 through 7.2.7. Users are advised to upgrade to version 7.2.8 to mitigate the risk. Another critical weakness is CVE-2026-84388, found in the Chrome extension agent for the Privileged Access Management system, FortiPAM, and constitutes an improper authentication issue. Attackers can trick users into accessing malicious websites, and then redirect the browser traffic through a proxy server to a server controlled by the attacker. The CVSS score is 9.1, and Fortinet advises users not only to install version 8.0.1.123 of the extension but also to upgrade FortiPAM to version 1.9.1 or 1.8.4 for complete remediation. Users should pay attention and follow official recommendations for upgrading.",
    tags_en: ["Fortinet", "CVE-2026-84390", "CVE-2026-84388", "FortiMonitor OnSight", "FortiPAM", "JWT", "Authentication"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178867", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11768",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "行政院要求強化資安防護：建立跨機關機制掌握加密勒索攻擊與重大駭侵事件",
    summary: "行政院長卓榮泰在治安會報指出，加密勒索攻擊已影響科技、製造、醫療、零售及旅遊等多元產業，已成為攸關社會安定與國家安全的重大威脅。目前資安事件缺乏統一整合單位，行政院要求數位發展部擔任跨機關資安情資統籌單位，建立政府、企業與執法機關間的情資交流與預警機制。此外，行政院也要求將民間企業發生的重大駭侵或加密勒索案件納入通報義務，以提升政府對企業遭受勒索攻擊的掌握度。此舉旨在強化整體資安防護與應變能力，並透過跨機關情資整合，協助企業提升自主防護能力。目前相關政策方向仍待數位發展部研議後續細節，但強調資安事件已影響供應鏈與社會正常運行，需透過政府與企業合作共同應對。",
    tags: ["加密勒索", "資安事件", "駭侵", "跨機關合作", "數位發展部", "資通安全管理法"],
    title_en: "Executive Yuan Mandates Enhanced Cybersecurity Protection: Establishing Inter-Agency Mechanism to Track Encrypted Ransomware Attacks and Major Cyber Incidents",
    summary_en: "Executive Yuan President Tsok Yung-tai stated in a security briefing that encrypted ransomware attacks have impacted diverse sectors including technology, manufacturing, healthcare, retail, and tourism, posing a significant threat to social stability and national security. Currently, cybersecurity incidents lack a unified integration unit. Therefore, the Executive Yuan has mandated the Ministry of Digital Transformation to serve as the inter-agency intelligence coordination unit for cybersecurity, establishing an intelligence exchange and early warning mechanism among government agencies, enterprises, and law enforcement. Furthermore, the Executive Yuan requires private companies to report major cyber incidents or encrypted ransomware cases, aiming to improve the government's grasp of corporate exposure to ransomware attacks. This initiative aims to strengthen overall cybersecurity defense and response capabilities, and through inter-agency intelligence integration, assist enterprises in enhancing their self-defense capabilities. While the Ministry of Digital Transformation is still developing the detailed policy guidelines, it is emphasized that cybersecurity incidents have affected supply chains and normal social operations, requiring joint government-enterprise response.",
    tags_en: ["Encrypted Ransomware", "Cybersecurity Incident", "Cyber Attack", "Inter-Agency Cooperation", "Ministry of Digital Transformation", "Cybersecurity Management Act"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178860", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11779",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Pistachio 研究揭示：傳統釣魚模擬測試的局限性，強調「洩密」與「報告」的重要性",
    summary: "這篇報告分析了 Pistachio 進行的大規模模擬釣魚測試結果，指出傳統僅以「點擊率」作為衡量指標的資安意識訓練存在誤導性。研究涵蓋了超過 1,200 個組織和 247 萬次模擬釣魚嘗試，發現員工的釣魚風險評估不能單一化。雖然金融服務業表現出較高的韌性，但科技和 IT 員工的點擊率卻相當高。報告強調，真正的釣魚風險並非單純點擊連結，而是員工是否會提交登入憑證（leak）或是否能及時報告（report）。僅點擊本身風險較低，真正危險的是洩密行為。因此，組織應將資安訓練的重點從降低點擊率，轉移到提升員工的「洩密」與「報告」行為，以建立更持久的警覺性。",
    tags: ["Pistachio", "釣魚模擬", "資安意識訓練", "洩密風險", "Phishing", "員工行為分析"],
    title_en: "Pistachio Research Reveals: Limitations of Traditional Phishing Simulation Testing, Emphasizing the Importance of 'Leakage' and 'Reporting'",
    summary_en: "This report analyzes the results of large-scale simulated phishing tests conducted by Pistachio, pointing out the misleading nature of security awareness training that relies solely on 'click-through rate' as a metric. The study covered over 1,200 organizations and 2.47 million simulated phishing attempts, finding that employee phishing risk assessment cannot be standardized. While the financial services sector showed relatively high resilience, the click-through rate among tech and IT employees was quite high. The report emphasizes that true phishing risk is not merely clicking a link, but whether the employee submits login credentials (leak) or reports the incident in a timely manner (report). Clicking itself carries lower risk; the truly dangerous behavior is the leakage of credentials. Therefore, organizations should shift the focus of security awareness training from reducing click-through rates to enhancing employees' 'leakage' and 'reporting' behaviors to build more sustainable vigilance.",
    tags_en: ["Pistachio", "Phishing Simulation", "Security Awareness Training", "Leakage Risk", "Phishing", "Employee Behavior Analysis"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/phishing-research-challenges-conventional-security-awareness-testing", lang: "EN" }
    ]
  },
  {
    id: "20260911-11781",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 InjectEave 電磁側信道攻擊，可從日常設備竊取私密音訊資訊",
    summary: "研究人員展示了 InjectEave，這是一種新型的電磁側信道攻擊。該攻擊利用外部射頻（RF）訊號誘發硬體非線性，從而洩漏低頻類比資訊。測試涵蓋了包括耳機、VoIP 電話、智能風扇和燈具在內的 11 種商業設備。研究結果顯示，攻擊者無需實體接觸或修改設備，即可恢復私密音訊或判斷設備的狀態。此外，文章也提及了其他資安事件，包括：WordPress Super Forms 插件存在 CVE-2026-14894 漏洞，允許未經身份驗證的任意檔案上傳，建議用戶更新至 6.3.314 版本；以及前前 AT&T 員工因進行 SIM swapping 詐騙被判刑。這些事件共同凸顯了硬體層面和帳號管理上的多重安全風險。",
    tags: ["InjectEave", "電磁側信道攻擊", "RF 訊號", "CVE-2026-14894", "SIM swapping", "硬體安全"],
    title_en: "Research Uncovers InjectEave Electromagnetic Side-Channel Attack, Enabling Theft of Private Audio Information from Everyday Devices",
    summary_en: "Researchers demonstrated InjectEave, a novel electromagnetic side-channel attack. This attack exploits external radio frequency (RF) signals to induce hardware nonlinearity, thereby leaking low-frequency analog information. The testing covered 11 commercial devices, including headphones, VoIP phones, smart fans, and lighting fixtures. The findings show that attackers can recover private audio or determine device status without physical contact or modification. The article also mentions other security incidents, including: a vulnerability in the WordPress Super Forms plugin, CVE-2026-14894, which allows unauthenticated arbitrary file uploads, recommending users update to version 6.3.314; and a former AT&T employee convicted for participating in a SIM swapping scam. These events collectively highlight multiple security risks at both the hardware and account management levels.",
    tags_en: ["InjectEave", "Electromagnetic Side-Channel Attack", "RF Signal", "CVE-2026-14894", "SIM swapping", "Hardware Security"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/in-other-news-injecteave-attack-sim-swapper-sentenced-glasswing-findings-review", lang: "EN" }
    ]
  },
  {
    id: "20260911-11784",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Check Point 釋出補丁修復兩項關鍵 VPN 漏洞：CVE-2026-85102 與 CVE-2026-85103",
    summary: "資安公司 Check Point 本週宣布為其閘道器與防火牆產品，修復了兩項關鍵嚴重性 VPN 相關漏洞。這兩個缺陷分別被追蹤為 CVE-2026-85102 和 CVE-2026-85103，評分為 CVSS 9.8。Check Point 警告，這兩個漏洞均可於未經身份驗證的情況下，執行遠端程式碼執行（RCE）攻擊。\n\n具體而言，CVE-2026-85102 是 VPN 協商過程中憑證資料驗證不當所致；而 CVE-2026-85103 則是在 VPN 憑證 ASN.1 解碼流程中的堆疊溢出（heap overflow）。\n\n受影響產品包括 Security Gateway 和 Check Point Spark Firewall，適用於 Site to Site VPN 或 Remote Access VPN。CVE-2026-85103 亦影響 Check Point Security Management Server、Security Gateway 和 Spark Firewall。\n\nCheck Point 已為 R82.10、R82 和 R81.20 版本發布了安全更新。公司建議的緩解措施是手動定義 VPN 規則，特別是針對 Site to Site VPN，需禁用預設規則，並手動定義 UDP/500 和 UDP/4500 的存取權限。對於使用本地管理實例的用戶，建議盡快套用最新的 Jumbo hotfixes。若啟用 Check Point LivePatch，補丁將自動推送。",
    tags: ["Check Point", "CVE-2026-85102", "CVE-2026-85103", "VPN", "RCE", "防火牆"],
    title_en: "Check Point Releases Patches to Fix Two Critical VPN Vulnerabilities: CVE-2026-85102 and CVE-2026-85103",
    summary_en: "Cybersecurity firm Check Point announced this week that it has patched two critical VPN-related vulnerabilities in its gateway and firewall products. These two flaws are tracked as CVE-2026-85102 and CVE-2026-85103, both rated CVSS 9.8. Check Point warns that both vulnerabilities allow for unauthenticated Remote Code Execution (RCE) attacks. Specifically, CVE-2026-85102 is caused by improper certificate data validation during the VPN negotiation process; while CVE-2026-85103 is a heap overflow vulnerability in the VPN certificate ASN.1 decoding process. Affected products include the Security Gateway and Check Point Spark Firewall, applicable to Site to Site VPN or Remote Access VPN. CVE-2026-85103 also affects the Check Point Security Management Server, Security Gateway, and Spark Firewall. Check Point has released security updates for versions R82.10, R82, and R81.20. The company recommends mitigating the risk by manually defining VPN rules, specifically for Site to Site VPN, by disabling default rules and manually defining access permissions for UDP/500 and UDP/4500. For users utilizing local management instances, it is recommended that they apply the latest Jumbo hotfixes as soon as possible. If Check Point LivePatch is enabled, the patch will be automatically pushed.",
    tags_en: ["Check Point", "CVE-2026-85102", "CVE-2026-85103", "VPN", "RCE", "Firewall"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/check-point-patches-critical-vpn-vulnerabilities", lang: "EN" }
    ]
  },
  {
    id: "20260911-11790",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GitLab 釋出補丁修復高危路徑遍歷漏洞 CVE-2026-85706，CISA 已列入 KEV 警示清單",
    summary: "GitLab 針對多個安全漏洞發布了補丁，其中包含一個嚴重性最高的路徑遍歷漏洞 CVE-2026-85706。此漏洞存在於其 repository commits API，可能允許未經身份驗證的使用者在特定條件下讀取 GitLab 伺服器上的任意檔案。該問題源於「路徑限制不當和缺少身份驗證強制執行」。受影響版本包括 18.7 (低於 19.1.8)、19.2 (低於 19.2.6) 和 19.3 (低於 19.3.2) 的 GitLab Community Edition (CE) 和 Enterprise Edition (EE)。安全廠商 watchTowr 報告指出，此漏洞已於 2026 年 9 月 11 日 UTC 時間開始遭受野外探測。攻擊者可利用此漏洞讀取日誌檔案和 GitLab 特定的設定檔，以竊取憑證和敏感資訊。此外，GitLab 還修補了另一個關鍵的序列化漏洞 CVE-2026-87719，該漏洞可能允許具有 Duo Chat 存取權的已驗證使用者透過特殊建構的 GraphQL 訂閱參數，繞過序列化並執行伺服器物件查找。鑑於此漏洞已被 CISA 確認並列入 Known Exploited Vulnerabilities (KEV) 目錄，建議所有暴露於網際網路的自管理 GitLab 實例應盡快應用補丁，或限制公共存取。",
    tags: ["GitLab", "CVE-2026-85706", "CVE-2026-87719", "路徑遍歷", "CISA", "KEV"],
    title_en: "GitLab Releases Patches for High-Severity Path Traversal Vulnerability CVE-2026-85706; Listed on CISA KEV Advisory",
    summary_en: "GitLab has released patches for multiple security vulnerabilities, including a high-severity path traversal vulnerability, CVE-2026-85706. This vulnerability resides in its repository commits API and could potentially allow unauthenticated users to read arbitrary files from the GitLab server under specific conditions. The issue stems from 'improper path restriction and lack of authentication enforcement.' Affected versions include GitLab Community Edition (CE) and Enterprise Edition (EE) versions 18.7 (below 19.1.8), 19.2 (below 19.2.6), and 19.3 (below 19.3.2). Security vendor watchTowr reported that this vulnerability began seeing wild-use attempts as of September 11, 2026, UTC. Attackers can exploit this flaw to read log files and specific GitLab configuration files, potentially stealing credentials and sensitive information. Furthermore, GitLab also patched another critical serialization vulnerability, CVE-2026-87719. This flaw could allow authenticated users with Duo Chat access to bypass serialization and execute server object lookup via specially crafted GraphQL subscription parameters. Given that this vulnerability has been confirmed by CISA and listed in the Known Exploited Vulnerabilities (KEV) catalog, all self-managed GitLab instances exposed to the internet are advised to apply the patches immediately or restrict public access.",
    tags_en: ["GitLab", "CVE-2026-85706", "CVE-2026-87719", "Path Traversal", "CISA", "KEV"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/09/11/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" },
      { name: "SecurityWeek", url: "https://securityweek.com/gitlab-vulnerability-exploited-one-day-after-disclosure", lang: "EN" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/gitlab-cvss-10-file-read-flaw-draws-in.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11791",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Anthropic揭露中國AI實驗室進行大規模「非法蒸餾」攻擊，竊取Claude模型能力",
    summary: "AI公司Anthropic近日發布報告，揭露了來自中國的七個AI實驗室（包括Alibaba、Moonshot、DeepSeek、Z.ai/Zhipu、MiniMax等）針對其Claude模型的工業級「非法蒸餾」（Illicit Distillation）攻擊。知識蒸餾本身是合法訓練方法，但非法蒸餾是指在未經授權的情況下，透過大量竊取用戶資料和API金鑰，將目標模型的能力轉移到另一個模型中。Anthropic指出，這些攻擊者透過使用大量假帳號、代理服務（proxy services）和竊取的API金鑰，繞過防禦機制，竊取了Claude在代理任務、軟體工程、核心開發和邏輯推理等方面的能力。具體案例包括Moonshot AI透過代理服務將客戶請求轉發至Claude，並擷取對話紀錄進行訓練；Alibaba相關營運商則針對Claude Opus 4.6和4.7的思維鏈（CoT）推理紀錄進行了「史上最大規模的蒸餾攻擊」。為應對此類攻擊，Anthropic已採取措施，包括限制來自特定地區（如中國）的帳號，並更新模型，引入「保留思考」（preserved thinking）功能，加密內部推理過程，使竊取的對話紀錄更難用於後續訓練。",
    tags: ["Anthropic", "Claude", "非法蒸餾", "AI安全", "CoT", "代理服務", "中國AI"],
    title_en: "Anthropic Exposes Chinese AI Labs Conducting Large-Scale 'Illicit Distillation' Attacks to Steal Claude Model Capabilities",
    summary_en: "AI company Anthropic recently released a report exposing seven AI labs from China (including Alibaba, Moonshot, DeepSeek, Z.ai/Zhipu, and MiniMax) that conducted industrial-grade 'Illicit Distillation' attacks against its Claude model. While knowledge distillation itself is a legitimate training method, illicit distillation refers to transferring a target model's capabilities to another model without authorization, typically by stealing large amounts of user data and API keys. Anthropic pointed out that these attackers bypassed defensive mechanisms by using numerous fake accounts, proxy services, and stolen API keys, thereby stealing Claude's capabilities in areas such as agent tasks, software engineering, core development, and logical reasoning. Specific cases include Moonshot AI forwarding client requests via proxy services to Claude and subsequently training on the conversation records; while an Alibaba-related operator conducted an 'all-time largest scale distillation attack' targeting the Chain-of-Thought (CoT) reasoning records of Claude Opus 4.6 and 4.7. To counter such attacks, Anthropic has implemented measures, including restricting accounts from specific regions (such as China) and updating its models by introducing 'preserved thinking' functionality, which encrypts internal reasoning processes, making stolen conversation records harder to use for subsequent training.",
    tags_en: ["Anthropic", "Claude", "Illicit Distillation", "AI Security", "CoT", "Proxy Services", "China AI"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/anthropic-says-seven-china-based-ai.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11792",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Anthropic警告：駭客利用Claude模型進行網路攻擊、資料竊取與情報戰",
    summary: "AI公司Anthropic警告，從2025年12月至2026年8月期間，網路犯罪分子和國家贊助駭客正利用其Claude模型進行網路攻擊、武器設計、宣傳和大規模監控。Anthropic將這些行為的執行者稱為「生成式威脅群組」（Generative Threat Groups, GTGs）。這些威脅行為已超越簡單的聊天機器人問答，而是涉及多個代理框架（multi-agent frameworks）執行偵察、利用和資料外洩等複雜操作。Anthropic報告指出，駭客利用AI進行了多種攻擊，包括：一個俄羅斯國家贊助的群組（GTG-20006）與Midnight Blizzard等APT組織有重疊；另有群組（GTG-50014）利用AWS EC2工作節點，大規模下載並掃描180萬個Android APK，尋找硬編碼密鑰；另一群組（GTG-10007）則利用Claude對外國政府網路進行入侵嘗試，並開發了針對終端安全產品的漏洞利用程式。此外，還有針對AI供應鏈的竊取行為，以及利用WordPress重新安裝的競態條件漏洞（race condition）來竊取政治敏感資料。Anthropic強調，攻擊的複雜度已使AI「崩塌了原本區分資源豐富國家行動與個體操作者的勞動和工具鴻溝」。",
    tags: ["Anthropic", "Claude", "Generative Threat Groups", "AI 攻擊", "APT", "供應鏈安全"],
    title_en: "Anthropic Warns: Hackers Using Claude Models for Cyberattacks, Data Theft, and Information Warfare",
    summary_en: "AI company Anthropic warns that between December 2025 and August 2026, cybercriminals and state-sponsored hackers are utilizing its Claude models for cyberattacks, weapon design, propaganda, and large-scale surveillance. Anthropic refers to these perpetrators as \"Generative Threat Groups\" (GTGs). These threat activities have moved beyond simple chatbot Q&A, involving complex operations such as reconnaissance, exploitation, and data exfiltration executed through multiple-agent frameworks. Anthropic's report indicates that hackers have used AI for various attacks, including: a Russian state-sponsored group (GTG-20006) with overlaps to APT organizations like Midnight Blizzard; another group (GTG-50014) that used AWS EC2 worker nodes to download and scan 1.8 million Android APKs, searching for hardcoded keys; and a third group (GTG-10007) that used Claude to attempt intrusions into foreign government networks and develop exploit code targeting endpoint security products. Furthermore, there have been theft activities targeting the AI supply chain, as well as the use of a race condition vulnerability in reinstalled WordPress to steal politically sensitive data. Anthropic emphasizes that the complexity of the attacks has 'collapsed the original gap between the resources of nation-state actions and individual operators' labor and tools.'",
    tags_en: ["Anthropic", "Claude", "Generative Threat Groups", "AI Attacks", "APT", "Supply Chain Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/claude-used-to-automate-exploitation.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11796",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "中國相關駭客群 UNC3569 利用 Sogou 輸入法漏洞植入後門 GRAYRABBIT",
    summary: "安全公司 Gen Digital 研究指出，一個與中國相關的駭客群 UNC3569，利用 Sogou 輸入法（Windows 版）中的漏洞，在受害者電腦上植入了後門 GRAYRABBIT。Sogou 輸入法是中國最流行的輸入法之一，用戶基礎龐大。該漏洞鏈的攻擊點包括：首先，攻擊者透過精心製作的連結引導用戶，利用 Sogou 內建的瀏覽器引擎（版本為 2020 年左右）的缺陷。其次，該瀏覽器缺乏沙箱（sandbox）和同源政策（same-origin policy）等關鍵保護機制。最後，攻擊利用了 CVE-2021-38003，這是 V8 JavaScript 引擎處理 JSON.stringify 時的缺陷，該漏洞已被 Google 在 2021 年修復，但 Sogou 的版本未更新。一旦成功利用，攻擊者可透過遠端命令殼（remote command shell）執行任意操作。Gen Digital 建議，用戶應警惕來源不明的連結，並關注應用程式的修補和安全更新，特別是涉及瀏覽器引擎和輸入法組件的保護機制。",
    tags: ["Sogou 輸入法", "UNC3569", "GRAYRABBIT", "CVE-2021-38003", "Windows", "後門"],
    title_en: "China-linked Threat Group UNC3569 Uses Sogou Input Method Vulnerability to Implant GRAYRABBIT Backdoor",
    summary_en: "Security firm Gen Digital reported that a China-linked threat group, UNC3569, exploited a vulnerability in the Sogou Input Method (Windows version) to implant the GRAYRABBIT backdoor onto victim computers. Sogou Input Method is one of China's most popular input methods, boasting a massive user base. The attack chain exploited several points: First, attackers lured users through carefully crafted links, leveraging a flaw in Sogou's built-in browser engine (circa 2020). Second, this browser lacked critical protections such as sandboxing and same-origin policy. Finally, the attack utilized CVE-2021-38003, a vulnerability in how the V8 JavaScript engine handles JSON.stringify. Although Google patched this vulnerability in 2021, Sogou's version remained unupdated. Once successfully exploited, the attacker could execute arbitrary operations via a remote command shell. Gen Digital advises users to be wary of links from unknown sources and to monitor for application patches and security updates, especially concerning the protective mechanisms of browser engines and input method components.",
    tags_en: ["Sogou Input Method", "UNC3569", "GRAYRABBIT", "CVE-2021-38003", "Windows", "Backdoor"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/china-linked-unc3569-exploited-sogou.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11797",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PaperCut 發布新維護版本取代緊急修補程式，修補兩項遭積極利用的漏洞",
    summary: "軟體開發公司 PaperCut 發布了新的安全維護版本，取代了先前針對兩項安全漏洞所發布的所有緊急修補程式。受影響的產品包括 PaperCut NG/MF 版本 26.0.5、25.0.13 和 24.1.10。這些維護版本已通過完整的 QA 測試，包含了先前三個緊急修補程式所修復的所有安全漏洞，並增加了額外的安全加固。本次修補的漏洞包括 CVE-2026-81578 和 CVE-2026-82078，這兩項漏洞已被發現遭到積極利用，可繞過身份驗證並在易受影響的實例上執行任意程式碼。有分析指出，疑似俄語的威脅行為者利用這兩個漏洞，已在 48 個國家入侵至少 395 個組織，尤其集中在美國教育領域。攻擊活動使用了數百個由 OpenAI Codex 和 DeepSeek 模型驅動的 AI Agent，進行大規模攻擊。PaperCut 建議所有使用緊急修補程式建構的客戶，應升級至最新的維護版本以獲得最佳保護。",
    tags: ["PaperCut", "CVE-2026-81578", "CVE-2026-82078", "緊急修補程式", "AI Agent", "身份驗證"],
    title_en: "PaperCut Releases New Maintenance Version to Replace Emergency Patches, Fixing Two Actively Exploited Vulnerabilities",
    summary_en: "Software development company PaperCut has released a new security maintenance version, replacing all previous emergency patches issued for two security vulnerabilities. Affected products include PaperCut NG/MF versions 26.0.5, 25.0.13, and 24.1.10. These maintenance versions have undergone full QA testing and include all security fixes from the previous three emergency patches, while also adding additional security hardening. The vulnerabilities addressed in this patch include CVE-2026-81578 and CVE-2026-82078. Both vulnerabilities have been found to be actively exploited, allowing attackers to bypass authentication and execute arbitrary code on vulnerable instances. Analysis indicates that threat actors, suspected to be Russian, have used these two vulnerabilities to compromise at least 395 organizations across 48 countries, with a particular focus on the US education sector. The attack campaign utilized hundreds of AI Agents powered by OpenAI Codex and DeepSeek models for large-scale attacks. PaperCut recommends that all customers who built their systems using the emergency patches upgrade to the latest maintenance version for optimal protection.",
    tags_en: ["PaperCut", "CVE-2026-81578", "CVE-2026-82078", "Emergency Patch", "AI Agent", "Authentication"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/papercut-replaces-emergency-patches.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11798",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Cisco Secure FMC 遭利用三種威脅群組，透過 CVE-2026-20079 與 CVE-2026-20316 進行惡意攻擊",
    summary: "Cisco 揭露其 Secure Firewall Management Center (FMC) 軟體，已成為三種與勒索軟體及國家級資助攻擊相關的威脅目標。攻擊者利用的漏洞包括 CVE-2026-20079，這是一個身份驗證繞過漏洞，允許未經身份驗證的遠端攻擊者取得 root 權限；以及 CVE-2026-20316，該漏洞允許未經身份驗證的遠端攻擊者使用低權限帳號存取敏感資料，並可與其他漏洞結合提升權限。Cisco Talos 識別出三組後入侵活動，包括利用 CVE-2026-20079 部署 JSP Web Shell，以及利用兩者漏洞執行 Netcat 反向 Shell 和類似 Sandworm 的 ELF 植入物。其中一組攻擊（UAT-11988）利用 CVE-2026-20316 進行初始存取，隨後使用內建工具進行「在地生活」（LotL）偵察，並部署 Qilin 勒索軟體。鑑於此，客戶應立即套用 Cisco 已發布的 Hotfix 修補程式。此外，美國 CISA 已將 CVE-2026-20079 加入其已知被利用漏洞（KEV）目錄，要求聯邦政府機構必須在指定日期前修補。",
    tags: ["Cisco", "Secure Firewall Management Center", "CVE-2026-20079", "CVE-2026-20316", "勒索軟體", "國家級駭客"],
    title_en: "Cisco Secure FMC Targeted by Three Threat Groups Using CVE-2026-20079 and CVE-2026-20316",
    summary_en: "Cisco revealed that its Secure Firewall Management Center (FMC) software has become a target for three threat groups associated with ransomware and state-sponsored attacks. The vulnerabilities exploited include CVE-2026-20079, an authentication bypass flaw that allows unauthenticated remote attackers to gain root privileges; and CVE-2026-20316, a flaw that allows unauthenticated remote attackers to access sensitive data using low-privilege accounts, which can be combined with other vulnerabilities to escalate privileges. Cisco Talos identified three groups of post-exploitation activity, including deploying JSP Web Shells using CVE-2026-20079, and executing Netcat reverse shells and Sandworm-like ELF implants using both vulnerabilities. One group (UAT-11988) used CVE-2026-20316 for initial access, followed by",
    tags_en: ["Cisco", "Secure Firewall Management Center", "CVE-2026-20079", "CVE-2026-20316", "Ransomware", "State-Sponsored"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178876", lang: "ZH-TW" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/cisco-fmc-flaws-exploited-to-steal.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11800",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 Passkey 假象進行社交工程，竊取 Microsoft 365 帳號與資料",
    summary: "Microsoft 警告，與 ShinyHunters、Helix 等敲詐集團相關的威脅行為者，正利用以 Passkey 和單一登入（SSO）為主題的社交工程攻擊，入侵企業 Microsoft 帳號並竊取 Microsoft 365 資料。攻擊者會先研究目標組織，隨後假冒企業 IT 服務台，透過電話或訊息，催促員工「緊急更新 Passkey、MFA 或 SSO 設定」，誘騙受害者前往偽造的登入網站。這些網站設計成逼真的 Microsoft 登入頁面，甚至透過 SMS 連結發送至個人手機。Microsoft 指出，攻擊者並非真正要求註冊 Passkey，而是利用 Passkey 的概念，誘騙受害者在攻擊者控制的中間人（AiTM）釣魚網站或設備代碼驗證流程中登入，從而竊取憑證和會話 Token。成功入侵後，攻擊者可透過 Microsoft Graph 等工具，列舉組織資源、使用者群組、權限、SharePoint 網站及敏感文件，並常透過新增可控的 MFA 方法來維持存取權限。",
    tags: ["Microsoft 365", "Passkey", "社交工程", "AiTM", "SSO", "Microsoft Graph"],
    title_en: "Hackers Use Passkey Pretext for Social Engineering to Steal Microsoft 365 Accounts and Data",
    summary_en: "Microsoft has warned that threat actors associated with groups like ShinyHunters and Helix are using social engineering attacks centered on Passkey and Single Sign-On (SSO) to infiltrate corporate Microsoft accounts and steal Microsoft 365 data. The attackers first research the target organization, then impersonate the corporate IT service desk via phone or message, pressuring employees to 'urgently update Passkey, MFA, or SSO settings,' and luring victims to fake login websites. These sites are designed to look like authentic Microsoft login pages, sometimes even sending links via SMS to personal phones. Microsoft points out that the attackers are not genuinely asking for Passkey registration, but are exploiting the concept of Passkey to trick victims into logging in through an attacker-controlled Man-in-the-Middle (AiTM) phishing site or device code verification process, thereby stealing credentials and session tokens. Once successfully infiltrated, attackers can use tools like Microsoft Graph to enumerate organizational resources, user groups, permissions, SharePoint sites, and sensitive files, and often maintain access by adding controllable MFA methods.",
    tags_en: ["Microsoft 365", "Passkey", "Social Engineering", "AiTM", "SSO", "Microsoft Graph"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/passkey-themed-phishing-attacks-lead-to-microsoft-365-data-theft", lang: "EN" }
    ]
  },
  {
    id: "20260911-11801",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "JFrog Artifactory 遭多重漏洞鏈攻擊：駭客可透過繞過認證取得管理員權限並植入後門",
    summary: "雲端安全公司 Wiz 發布報告指出，惡意行為者正在利用 JFrog Artifactory 的多個高風險漏洞進行攻擊。攻擊鏈結合了 CVE-2026-42018、CVE-2026-42016 和 CVE-2026-82329 三個漏洞。攻擊者首先利用 CVE-2026-42018，即使匿名存取被禁用，仍能取得內部 Artifactory 匿名用戶的 JSON Web Token (JWT)。接著，他們利用 CVE-2026-42016（源於不當的 Token 驗證），將權限提升至管理員級別。研究人員觀察到，攻擊者在短短數分鐘內即可建立管理員帳號並生成長期存取 Token。進一步，駭客會安裝惡意的 Groovy 外掛程式執行任意指令，並透過部署 Rust 後門來建立持久性。攻擊者還會竊取 Artifactory 設定資料、叢集加入金鑰，並在新增帳號中加入 SSH Key。Wiz 警告，在可存取的 Artifactory 實例中，有 49% 至 62% 存在至少一個漏洞。系統管理員應立即升級至 Artifactory 7.111.21 或更新版本，並檢查網路暴露的實例是否有異常的 Token 建立、可疑管理員帳號或外掛程式活動，並限制存取權限。",
    tags: ["JFrog Artifactory", "CVE-2026-42018", "CVE-2026-42016", "CVE-2026-82329", "JWT", "後門", "Artifactory"],
    title_en: "JFrog Artifactory Targeted by Multi-Vulnerability Chain Attack: Hackers Can Obtain Admin Privileges and Implant Backdoors by Bypassing Authentication",
    summary_en: "A report released by cloud security company Wiz indicates that malicious actors are exploiting multiple high-risk vulnerabilities in JFrog Artifactory. The attack chain combines three vulnerabilities: CVE-2026-42018, CVE-2026-42016, and CVE-2026-82329. Attackers first utilize CVE-2026-42018 to obtain a JSON Web Token (JWT) for an internal Artifactory anonymous user, even when anonymous access is disabled. Next, they exploit CVE-2026-42016 (stemming from improper token validation) to elevate privileges to an administrator level. Researchers observed that attackers can create an administrator account and generate long-term access tokens within minutes. Furthermore, the hackers can install malicious Groovy plugins to execute arbitrary commands and establish persistence by deploying a Rust backdoor. The attackers also steal Artifactory configuration data, cluster join keys, and add SSH Keys to new accounts. Wiz warns that between 49% and 62% of accessible Artifactory instances contain at least one vulnerability. System administrators should immediately upgrade to Artifactory 7.111.21 or newer, and check network-exposed instances for abnormal token creation, suspicious administrator accounts, or plugin activity, and restrict access permissions.",
    tags_en: ["JFrog Artifactory", "CVE-2026-42018", "CVE-2026-42016", "CVE-2026-82329", "JWT", "Backdoor", "Artifactory"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/artifactory-flaws-chained-in-attacks-deploying-backdoor-malware", lang: "EN" }
    ]
  },
  {
    id: "20260911-11802",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Trezor遭利用Brevo資料外洩，駭客發送釣魚信件竊取冷錢包備份資訊",
    summary: "硬體錢包品牌 Trezor 近期遭遇釣魚攻擊，攻擊者利用其第三方電子郵件服務商 Brevo 的資料外洩事件，向訂閱了電子報的客戶發送假冒的「關鍵安全警報」郵件。這些釣魚郵件聲稱 Trezor 的冷儲存錢包 STM32 微控制器存在「硬體微控制器漏洞」，可能導致種子（seed）資訊被暴力破解。信件誘騙收件人點擊惡意連結，進而下載一個要求輸入錢包備份的應用程式。\nTrezor 迅速行動，在發現後僅 20 分鐘內就關閉了惡意網域，將此次活動的影響範圍限制在點擊連結的 2,500 名客戶。該事件源於 Brevo 在 2026 年 9 月 9 日遭受安全事件，導致約 347,000 個電子郵件地址的訂閱資料庫可能被用於未來的釣魚攻擊。\nTrezor 過去也曾經歷多次資料外洩事件，包括 2024 年 1 月第三方支援票務系統被駭，以及近期因物流供應商 ShipMonk 遭受 Metabase SQL injection zero-day 漏洞攻擊而導致的客戶訂單資料外洩。公司提醒用戶，應警惕任何聲稱有關錢包漏洞的電子郵件，並透過官方渠道確認安全警報。",
    tags: ["Trezor", "Brevo", "釣魚攻擊", "STM32", "資料外洩", "冷錢包"],
    title_en: "Trezor Targeted in Brevo Data Leak Incident; Phishing Emails Attempt to Steal Cold Wallet Backup Information",
    summary_en: "Hardware wallet brand Trezor recently encountered a phishing attack. Attackers leveraged a data leak incident involving Trezor's third-party email service provider, Brevo, to send fake \"Critical Security Alert\" emails to subscribers who received the newsletter. These phishing emails claimed that Trezor's cold storage wallet STM32 microcontroller contained a \"hardware microcontroller vulnerability,\" potentially allowing the seed information to be brute-forced. The emails tricked recipients into clicking a malicious link and subsequently downloading an application that required the input of the wallet backup. Trezor acted quickly, shutting down the malicious domain within 20 minutes of discovery, limiting the impact of the activity to 2,500 clients who clicked the link. The incident stemmed from a security event at Brevo on September 9, 2026, which potentially exposed a subscriber database of approximately 347,000 email addresses for future phishing attacks. Trezor has experienced multiple data leaks in the past, including a hack of a third-party support ticketing system in January 2024, and a recent leak of customer order data due to a Metabase SQL injection zero-day vulnerability attack on logistics supplier ShipMonk. The company advises users to be vigilant regarding any emails claiming wallet vulnerabilities and to confirm security alerts through official channels.",
    tags_en: ["Trezor", "Brevo", "Phishing Attack", "STM32", "Data Leak", "Cold Wallet"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/trezor-347-000-users-targeted-in-phishing-attacks-after-brevo-breach", lang: "EN" }
    ]
  },
  {
    id: "20260911-11862",
    trackers: ["os"],
    category: "Apple",
    title: "WhatsApp iPad App介面大改版：導入Mac風格側邊欄，提升平板使用體驗",
    summary: "WhatsApp正在逐步為部分iPad用戶推出重大介面更新，旨在改善平板電腦的使用體驗。此次改動最顯著的是，它將用一個新的、類似Mac的側邊欄取代原有的底部導航欄。這個側邊欄提供了快速存取聊天（Chats）、更新（Updates）、社群（Communities）、通話（Calls）、Meta AI等核心功能區塊的入口。與Mac版WhatsApp的佈局相似，側邊欄佔用螢幕部分空間，但用戶也可以選擇隱藏它，這樣可以讓聊天列表和對話視窗更靠近螢幕中央，視覺上更寬敞。這項功能目前已在最新的TestFlight測試版中向部分測試者開放，甚至部分使用一般App Store版本的用戶也開始看到。由於WhatsApp的更新通常需要時間，用戶需耐心等待，但整體而言，這項改動為iPad用戶提供了更符合平板操作習慣的介面佈局。",
    tags: ["WhatsApp", "iPadOS", "Mac風格介面", "Liquid Glass", "App Store"],
    title_en: "WhatsApp iPad App undergoes major interface overhaul: Introducing Mac-style sidebar to enhance tablet experience",
    summary_en: "WhatsApp is gradually rolling out a major interface update for some iPad users, aiming to improve the overall tablet experience. The most noticeable change is the replacement of the original bottom navigation bar with a new, Mac-like sidebar. This sidebar provides quick access to core features such as Chats, Updates, Communities, Calls, and Meta AI. Similar to the layout of the WhatsApp Mac version, the sidebar occupies a portion of the screen, but users also have the option to hide it. This allows the chat list and conversation window to appear closer to the screen's center, creating a more spacious visual feel. This feature is currently available to some testers in the latest TestFlight beta, and some users with the standard App Store version are also beginning to see it. Since WhatsApp updates often take time, users may need to wait patiently, but overall, this change provides an interface layout that is more aligned with typical iPad usage patterns.",
    tags_en: ["WhatsApp", "iPadOS", "Mac-style interface", "Liquid Glass", "App Store"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/whatsapp-rolling-out-redesigned-ipad-interface-with-mac-like-sidebar", lang: "EN" }
    ]
  },
  {
    id: "20260911-11863",
    trackers: ["os"],
    category: "Apple",
    title: "爆料：Apple 與 Samsung Display 簽訂獨家協議，iPhone Duo 摺疊螢幕面板預計成本約 $250",
    summary: "根據爆料者 Instant Digital 在 Weibo 上發布的資訊，Apple 已與 Samsung Display 簽訂了一份為期三年的獨家供應協議。Samsung Display 將成為 Apple 旗下「iPhone Duo」以及後續機型的摺疊面板獨家供應商。據爆料指出，每個摺疊面板的成本預計約為 $250。這項元件被認為是 iPhone Duo 最昂貴的核心組件之一。\n\n雖然文章未提供 iPhone Duo 的完整物料清單（BOM）細節，但提及該機型在設計上強調環保，整體採用了 35% 的回收材料，包括電池中的 100% 回收鈷和 3D 列印的<0xE9><0x8E><0xA2>蓋採用 100% 回收鈦金屬。此外，iPhone Duo 的製造過程也使用了 60% 的再生能源，符合 Apple 2030 年實現碳中和的目標。",
    tags: ["Apple", "Samsung Display", "iPhone Duo", "摺疊螢幕", "供應鏈", "環保設計"],
    title_en: "Leak: Apple and Samsung Display Sign Exclusive Deal for iPhone Duo Foldable Screen Panel Expected to Cost $250",
    summary_en: "According to information leaked by Instant Digital on Weibo, Apple has signed a three-year exclusive supply agreement with Samsung Display. Samsung Display will become the exclusive supplier of foldable panels for Apple's 'iPhone Duo' and subsequent models. The leak suggests that the cost of each foldable panel is estimated to be around $250. This component is considered one of the most expensive core components of the iPhone Duo.\n\nAlthough the article does not provide the full Bill of Materials (BOM) details for the iPhone Duo, it mentions that the device emphasizes environmental sustainability in its design, utilizing 35% recycled materials overall. This includes 100% recycled cobalt in the battery and 100% recycled titanium for the 3D printed cover. Furthermore, the manufacturing process for the iPhone Duo uses 60% renewable energy, aligning with Apple's goal of achieving carbon neutrality by 2030.",
    tags_en: ["Apple", "Samsung Display", "iPhone Duo", "Foldable Screen", "Supply Chain", "Eco-design"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/leaker-says-apple-will-pay-250-per-iphone-duo-display-in-three-year-samsung-deal", lang: "EN" }
    ]
  },
  {
    id: "20260911-11865",
    trackers: ["os"],
    category: "Apple",
    title: "分析師指出 iPhone 18 系列需求將由 iPhone Duo 帶動，但整體市場仍面臨利潤壓力",
    summary: "根據 GF Securities 的分析師 Jeff Pu 的報告，雖然 Apple 新推出的 iPhone 18 Pro 型號的價格上漲幅度（100 美元）低於市場預期（200–250 美元），但分析師仍認為 iPhone Duo 型號將是推動整個 iPhone 18 系列需求的關鍵動力。iPhone Duo 的定價（1,999 美元）處於預期範圍的低端，分析師預計今年底 Apple 將出貨 700 萬台該機型。然而，由於 iPhone 18 Pro/Pro Max 系列存在需求不確定性，且預計面臨利潤壓力及硬體升級有限的挑戰，分析師對 iPhone 18 Pro 的產品週期持謹慎態度。整體而言，分析師建議對 Apple 股票採取「持有」（Hold）觀點，認為 iPhone Duo 的強勁消費者興趣和差異化大螢幕體驗，將部分抵消 iPhone 18 系列的潛在利潤壓力。此外，該報告預測 2026 年第四季度 iPhone 18 系列將出貨 5,700 萬台，整體 iPhone 數量為 7,600 萬台。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone Duo", "GF Securities", "市場分析"],
    title_en: "Analysts point to iPhone Duo as the driver for iPhone 18 series demand, but overall market faces profit pressure",
    summary_en: "According to a report by GF Securities analyst Jeff Pu, although the price increase for the newly launched iPhone 18 Pro model by Apple (100 USD) is lower than market expectations (200–250 USD), the analyst still believes that the iPhone Duo model will be the key driver for the entire iPhone 18 series demand. With a price point of 1,999 USD, the iPhone Duo is at the lower end of the expected range, and the analyst forecasts that Apple will ship 7 million units of this model by the end of the year. However, due to demand uncertainty for the iPhone 18 Pro/Pro Max series, and facing challenges such as profit pressure and limited hardware upgrades, the analyst maintains a cautious view on the iPhone 18 Pro's product cycle. Overall, the analyst recommends a 'Hold' view on Apple stock, believing that the strong consumer interest and differentiated large-screen experience of the iPhone Duo will partially offset the potential profit pressure on the iPhone 18 series. Furthermore, the report predicts that the iPhone 18 series will ship 57 million units in Q4 2026, with the total iPhone count reaching 76 million units.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone Duo", "GF Securities", "Market Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/report-iphone-price-hike-better-than-feared-iphone-duo-to-drive-demand-for-the-cycle", lang: "EN" }
    ]
  },
  {
    id: "20260911-11868",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Series 12 升級健康監測系統，特別強化心率監測功能",
    summary: "Apple Watch Series 12 代表了核心健康與健身追蹤穿戴裝置的重大升級。新機型搭載了全新的健康感測系統，其中最引人注目的是更進階的心率監測器。除了提升健康數據的準確性外，文章指出 Series 12 和 Ultra 4 型號在一個小小的「複雜功能」（Complication）上進行了重大改變，這點是作者特別期待的。整體而言，這款新機型旨在提供更全面的健康監測能力，提升用戶的運動與健康追蹤體驗。目前文章僅提供產品預告資訊，並未提及具體的軟體或安全漏洞細節，故修補建議為關注 Apple 官方發布的健康功能更新。",
    tags: ["Apple Watch Series 12", "Apple", "健康監測", "心率監測", "穿戴裝置", "Complication"],
    title_en: "Apple Watch Series 12 Upgrades Health Monitoring System, Featuring Enhanced Heart Rate Tracking",
    summary_en: "The Apple Watch Series 12 represents a major upgrade in core health and fitness tracking wearables. The new model is equipped with an entirely new health sensing system, the most notable feature of which is a more advanced heart rate monitor. In addition to improving the accuracy of health data, the article points out a significant change in a small 'Complication' on both the Series 12 and Ultra 4 models, which the author is particularly looking forward to. Overall, this new model aims to provide more comprehensive health monitoring capabilities, enhancing the user's exercise and health tracking experience. Currently, the article only provides product preview information and does not mention specific software or security vulnerability details, so the remediation advice is to monitor official Apple health feature updates.",
    tags_en: ["Apple Watch Series 12", "Apple", "Health Monitoring", "Heart Rate Monitoring", "Wearable Device", "Complication"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-watch-series-12-makes-a-big-change-to-a-small-complication-that-im-excited-about", lang: "EN" }
    ]
  },
  {
    id: "20260911-11869",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布部分 iOS 27 功能延期：訊息建議與自動密碼變更將在未來版本更新",
    summary: "Apple 近期宣布，原定包含在 iOS 27、iPadOS 27 及 macOS 27 中的兩項功能——「訊息中的建議功能」與「自動密碼變更」將暫時移除，並延期至「未來軟體更新」版本推出。訊息建議功能能利用對話上下文，讓使用者透過單點擊快速新增提醒事項、備忘錄或日曆事件。而「密碼」功能則利用 Apple Intelligence 和 Safari，能主動偵測並更新使用者帳號中弱密碼或已洩露的密碼。Apple 官網已更新此變動，確認這些功能不會在當前的 iOS 27 版本中提供。文章指出，目前尚無關於這兩項功能具體回歸時間的詳細資訊，僅確認它們將在未來的軟體更新中推出。",
    tags: ["Apple", "iOS 27", "iPadOS 27", "macOS 27", "Apple Intelligence", "密碼管理"],
    title_en: "Apple Delays Some iOS 27 Features: Message Suggestions and Auto Password Change Coming in Future Updates",
    summary_en: "Apple recently announced that two features originally slated for inclusion in iOS 27, iPadOS 27, and macOS 27—'Message Suggestions' and 'Automatic Password Change'—will be temporarily removed and deferred to 'future software updates.' The Message Suggestions feature allows users to quickly add reminders, notes, or calendar events using conversational context with a single tap. Meanwhile, the 'Password' feature utilizes Apple Intelligence and Safari to proactively detect and update weak or compromised passwords in a user's accounts. Apple's official website has been updated to confirm that these features will not be available in the current iOS 27 version. The article notes that there is currently no detailed information regarding the specific return date for these two features, only confirming their release in future software updates.",
    tags_en: ["Apple", "iOS 27", "iPadOS 27", "macOS 27", "Apple Intelligence", "Password Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-says-two-ios-27-features-arent-coming-until-a-future-software-update", lang: "EN" }
    ]
  },
  {
    id: "20260911-11870",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Series 12 升級 S11 晶片與新健康感測系統，整合 AI 功能與更強的耐用性",
    summary: "Apple Watch Series 12 搭載全新的 S11 晶片，並大幅升級了記憶體至 4GB（相較於 Series 11 的 2GB），帶來顯著的性能提升。硬體方面，Series 12 推出 Dark Bronze 鋁合金和 Ceramic 材質，並採用 Ceramic Shield 2，提升了耐用性。在健康功能上，新版引入了「健康感測系統」，提供第二代電心感測器和常時開啟光學心感測器，可進行高頻率背景心率追蹤，並新增了「恢復 HRV」功能，用於識別每日的壓力與恢復訊號。軟體層面，S11 晶片驅動了「Audio Intelligence」等 AI 功能，包括 Siri Recap（會議摘要）、Live Rewind（回顧對話）和 Sound Recognition（環境聲音警報）。此外，新版還加入了「Readiness」應用程式，透過分析活動、訓練負荷和睡眠分數，提供每日的準備狀態評分。其他升級包括更快的充電速度（15 分鐘可提供長達 12 小時電量）和更精準的 Precision L1 GPS。這些升級旨在提供更全面的健康監測和更智慧的日常輔助功能。",
    tags: ["Apple Watch Series 12", "S11", "watchOS", "Apple Intelligence", "健康感測系統", "Ceramic Shield 2", "GPS"],
    title_en: "Apple Watch Series 12 Upgrades to S11 Chip and New Health Sensing System, Integrating AI Features and Enhanced Durability",
    summary_en: "The Apple Watch Series 12 features the all-new S11 chip and significantly upgraded memory to 4GB (up from 2GB in the Series 11), delivering substantial performance improvements. Hardware-wise, the Series 12 introduces Dark Bronze aluminum and Ceramic materials, utilizing Ceramic Shield 2 to enhance durability. In terms of health features, the new model introduces the \"Health Sensing System,\" which provides a second-generation ECG sensor and a continuous-on optical heart sensor, enabling high-frequency background heart rate tracking. It also adds \"Recovery HRV,\" a function used to identify daily stress and recovery signals. On the software front, the S11 chip powers AI features like \"Audio Intelligence,\" including Siri Recap (meeting summaries), Live Rewind (reviewing conversations), and Sound Recognition (environmental sound alerts). Furthermore, the new version includes the \"Readiness\" app, which provides a daily readiness score by analyzing activity, training load, and sleep scores. Other upgrades include faster charging speeds (providing up to 12 hours of battery life in 15 minutes) and more precise Precision L1 GPS. These upgrades aim to provide more comprehensive health monitoring and smarter daily assistance functions.",
    tags_en: ["Apple Watch Series 12", "S11", "watchOS", "Apple Intelligence", "Health Sensing System", "Ceramic Shield 2", "GPS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-watch-series-12-vs-series-11-heres-everything-new", lang: "EN" }
    ]
  },
  {
    id: "20260911-11871",
    trackers: ["os"],
    category: "Apple",
    title: "Apple發布iPhone 18 Pro配件：推出全新手環掛繩與多款保護殼",
    summary: "Apple已在Apple Store上架了新款iPhone 18 Pro系列保護殼及其他配件。這些配件包括專為iPhone 18 Pro和iPhone 18 Pro Max設計的保護殼，以及適用於iPhone 17 Pro的型號。除了傳統的矽膠殼（Silicone Case）和透明殼（Clear Case）外，Apple還推出了更新的TechWoven保護殼。本次新品亮點是全新的手環掛繩（Wrist Strap），價格為29美元。此手環掛繩採用100%回收聚酯纖維，並具備嵌入式磁鐵，可搭配Apple的TechWoven、矽膠和透明保護殼，適用於iPhone 18 Pro、iPhone 18 Pro Max以及iPhone 17系列等多款型號，甚至可與AirPods Pro 2和AirPods Pro 3一同使用。此外，Apple也更新了FineWoven錢包和斜跨式掛繩的顏色選擇。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone 17 Pro", "配件", "Wrist Strap", "MagSafe"],
    title_en: "Apple Releases iPhone 18 Pro Accessories: Introducing New Wrist Straps and Multiple Cases",
    summary_en: "Apple has listed new iPhone 18 Pro series cases and accessories on the Apple Store. These accessories include cases designed specifically for the iPhone 18 Pro and iPhone 18 Pro Max, as well as models compatible with the iPhone 17 Pro. In addition to traditional Silicone Cases and Clear Cases, Apple has also introduced the updated TechWoven case. The highlight of this new release is the brand-new Wrist Strap, priced at $29. This wrist strap is made from 100% recycled polyester and features an embedded magnet, allowing it to pair with Apple's TechWoven, Silicone, and Clear cases. It is compatible with multiple models, including the iPhone 18 Pro, iPhone 18 Pro Max, and the entire iPhone 17 series, and can even be used with AirPods Pro 2 and AirPods Pro 3. Furthermore, Apple has updated the color options for the FineWoven wallet and crossbody strap.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone 17 Pro", "Accessories", "Wrist Strap", "MagSafe"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apples-iphone-18-pro-cases-are-already-in-stores-and-not-just-for-the-new-models", lang: "EN" }
    ]
  },
  {
    id: "20260911-11873",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 預計於 10 月發布 iOS 27.1，與 iPhone Duo 聯動推出新功能",
    summary: "本文預測 Apple 的 iOS 27.1 版本將在 10 月份發布，並與新機型 iPhone Duo 聯動推出。雖然 iOS 27 已於 9 月 14 日發布，但使用者若期待更多更新，應留意 27.1 的到來。根據過去的發布模式，Apple 預計將在 10 月 19 日至 10 月 21 日之間進行公開發布。此版本除了與 iPhone Duo 相關的獨家變動外，具體內容尚未公開。建議使用者留意 Apple 官方的公告，以掌握最新的 Beta 版和正式版發布時間。",
    tags: ["iOS 27.1", "Apple", "iPhone Duo", "Apple Intelligence", "iOS 27"],
    title_en: "Apple expected to release iOS 27.1 in October, launching new features with iPhone Duo",
    summary_en: "This article predicts that Apple's iOS 27.1 version will be released in October and launched in conjunction with the new iPhone Duo model. Although iOS 27 was released on September 14, users anticipating further updates should keep an eye out for 27.1. Based on past release patterns, Apple is expected to make the public release between October 19 and October 21. While this version includes exclusive changes related to the iPhone Duo, the specific content has not been disclosed. Users are advised to monitor official Apple announcements for the latest Beta and final release dates.",
    tags_en: ["iOS 27.1", "Apple", "iPhone Duo", "Apple Intelligence", "iOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/ios-27-1-release-date-heres-when-to-expect-the-new-iphone-update", lang: "EN" }
    ]
  },
  {
    id: "20260911-11874",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 在 iOS 27 設定應用程式隱藏經典 Mac 元素：Dogcow 復活",
    summary: "Apple 在 iOS 27 的設定應用程式中，重新引入了一個源自經典 Mac OS 的「彩蛋」——Dogcow（狗牛）。用戶可以在「設定」>「外觀」>「Liquid Glass」的透明度調整介面中，滾動到最底部，即可發現 Dogcow 的照片，並看到「Moof!」的彩虹文字。此外，如果用戶透過 Siri 在 Spotlight 搜尋「Moof!」，系統也會回應「Nice dogcow.」。Dogcow 最初是 Susan Kare 為初代 Mac 的 Cairo 字體設計的圖形符號，本質上沒有實用功能，純粹是增加趣味性。此彩蛋的體驗在 macOS Golden Gate 的系統設定中也能找到。這項更新展示了 Apple 在系統設計上對經典 Mac 元素的致敬與回歸。",
    tags: ["Apple", "iOS 27", "macOS", "Dogcow", "Settings app", "Liquid Glass"],
    title_en: "Apple Reintroduces Classic Mac Element Dogcow in iOS 27 Settings App",
    summary_en: "In the iOS 27 Settings app, Apple has re-introduced a 'Easter egg' originating from classic Mac OS: Dogcow. Users can find the Dogcow image and the rainbow text 'Moof!' by scrolling to the bottom of the transparency adjustment interface located at Settings > Appearance > Liquid Glass. Furthermore, if a user searches 'Moof!' using Siri in Spotlight, the system will respond with 'Nice dogcow.'. Dogcow was originally a graphic symbol designed by Susan Kare for the Cairo font of the first Mac, and it was inherently non-functional, purely intended to add fun. This Easter egg experience can also be found within the system settings of macOS Golden Gate. This update demonstrates Apple's tribute to and return of classic Mac elements in system design.",
    tags_en: ["Apple", "iOS 27", "macOS", "Dogcow", "Settings app", "Liquid Glass"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-hid-a-classic-mac-easter-egg-in-the-ios-27-settings-app", lang: "EN" }
    ]
  },
  {
    id: "20260911-11875",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布 iPhone 18 Pro 預購流程，提供「Get Ready」提前設定選項",
    summary: "本文介紹 Apple 針對 iPhone 18 Pro 和 Pro Max 的預購流程。由於預購時間提前至 9 月 12 日，Apple 提供了「Get Ready」功能，讓顧客可以在官方預購開始前，提前在 Apple Store 網站或 App 內完成型號選擇、配件搭配、租賃或融資預先批准，以及舊機折抵設定。為了確保預購過程順暢，顧客必須在太平洋時間（PT）9 月 11 日晚上 9 點前完成這些預設。文章指出，雖然原始新聞稿可能存在時間描述的混淆，但建議用戶務必在當日晚上 9 點前完成所有準備，以加速週六早晨的預購流程。",
    tags: ["Apple", "iPhone 18 Pro", "Apple Store", "預購", "iOS"],
    title_en: "Apple Announces iPhone 18 Pro Pre-order Process with 'Get Ready' Pre-setup Option",
    summary_en: "This article details Apple's pre-order process for the iPhone 18 Pro and Pro Max. Since the pre-order window has been moved up to September 12th, Apple has introduced a 'Get Ready' feature. This allows customers to pre-select models, pair accessories, pre-approve financing or leasing, and set up trade-ins on the Apple Store website or App before the official pre-order begins. To ensure a smooth pre-order experience, customers must complete these preparations by 9 PM Pacific Time (PT) on September 11th. The article notes that while the original press release may contain confusing time descriptions, users are strongly advised to complete all preparations before 9 PM that day to expedite the Saturday morning pre-order process.",
    tags_en: ["Apple", "iPhone 18 Pro", "Apple Store", "Pre-order", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-sets-cutoff-time-for-getting-faster-iphone-18-pro-pre-order", lang: "EN" }
    ]
  },
  {
    id: "20260911-11876",
    trackers: ["os"],
    category: "Apple",
    title: "提升舊款 iPhone 淺景深效果的四種技巧指南",
    summary: "本文為針對使用舊款 iPhone 的用戶，提供四種提升照片淺景深（Depth of Field, DOF）效果的實用技巧。文章指出，新款 iPhone 18 Pro 相較於前代 iPhone 17 Pro，其變焦光圈從 f/1.78 提升至 f/1.48，理論上能帶來更淺的景深，使主體與背景分離度更高。然而，對於使用舊機型用戶而言，本文提供了多種非硬體升級的軟體或拍攝技巧，旨在模擬專業相機的淺景深效果，幫助用戶在不更換設備的前提下，提升照片的視覺質感和專業度。建議用戶參考文章提供的各種拍攝技巧，以優化舊設備的攝影輸出。",
    tags: ["iPhone", "淺景深", "DOF", "攝影技巧", "iPhone 18 Pro"],
    title_en: "Four Techniques to Enhance Shallow Depth of Field Effect on Older iPhones",
    summary_en: "This article provides four practical techniques for users with older iPhones to enhance the shallow depth of field (DOF) effect in photos. It notes that the new iPhone 18 Pro improves the telephoto aperture from f/1.78 on the previous generation iPhone 17 Pro to f/1.48, which theoretically allows for shallower depth and better separation between the subject and background. However, for users with older models, this article offers various software or shooting techniques that do not require hardware upgrades. These methods aim to simulate the shallow depth effect of professional cameras, helping users improve the visual quality and professionalism of their photos without changing their device. Users are advised to refer to the various shooting techniques provided in the article to optimize the photographic output of their older equipment.",
    tags_en: ["iPhone", "Shallow Depth of Field", "DOF", "Photography Techniques", "iPhone 18 Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/four-ways-to-achieve-shallow-depth-of-field-with-an-older-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260911-11880",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Ultra 4 重磅升級：搭載 S11 晶片與全新健康感測器，強化運動與日常監測能力",
    summary: "Apple Watch Ultra 4 相較於 Ultra 3，雖然外觀設計相似，但在內部晶片和健康感測器方面進行了重大升級。新機搭載全新的 S11 晶片，並將記憶體從 2GB 提升至 4GB，提升了整體運算能力。健康方面，Ultra 4 引入了全新的健康感測系統，包括第二代電心感測器和常時開啟光學心感測器，實現高頻率背景心率追蹤，並提供更精準的 HRV（心率變異性）數據，可用於識別壓力與恢復狀態。此外，新機具備「Readiness」功能，可根據用戶的活動、訓練負荷和睡眠分數，提供每日的具體建議。電池續航力也顯著提升，Ultra 4 可提供長達 50 小時的電量，且在快充 15 分鐘後，可提供 18 小時的續航時間。此外，Ultra 4 還支援「Audio Intelligence」等軟體功能，包括聲音識別（Sound Recognition）、即時回放（Live Rewind）和 Siri Recap，大幅提升了用戶的日常使用體驗。",
    tags: ["Apple Watch Ultra 4", "S11", "健康感測器", "HRV", "Apple Intelligence", "Wearable"],
    title_en: "Apple Watch Ultra 4 Major Upgrade: Featuring S11 Chip and New Health Sensors to Enhance Fitness and Daily Monitoring",
    summary_en: "Compared to the Ultra 3, the Apple Watch Ultra 4 features significant internal upgrades in both the chip and health sensors, despite maintaining a similar exterior design. The new model is equipped with the all-new S11 chip and boosts memory from 2GB to 4GB, enhancing overall computing power. For health monitoring, the Ultra 4 introduces a brand-new health sensor system, including a second-generation ECG sensor and a continuous optical heart sensor. This enables high-frequency background heart rate tracking and provides more accurate HRV (Heart Rate Variability) data, which can be used to identify stress and recovery status. Furthermore, the device features a 'Readiness' function that provides daily, specific recommendations based on the user's activity, training load, and sleep score. Battery life has also significantly improved, with the Ultra 4 offering up to 50 hours of power, and providing 18 hours of usage after just 15 minutes of fast charging. Additionally, the Ultra 4 supports software features like 'Audio Intelligence,' including Sound Recognition, Live Rewind, and Siri Recap, greatly enhancing the user's daily experience.",
    tags_en: ["Apple Watch Ultra 4", "S11", "Health Sensor", "HRV", "Apple Intelligence", "Wearable"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-watch-ultra-4-vs-ultra-3-heres-everything-new", lang: "EN" }
    ]
  },
  {
    id: "20260911-11881",
    trackers: ["os"],
    category: "Apple",
    title: "Microsoft Copilot 加入 Apple CarPlay 生態系，與 Siri AI、ChatGPT 等整合，擴大車用 AI 應用選擇",
    summary: "Apple CarPlay 正在加速整合第三方 AI 聊天機器人應用，提升車用智慧功能。Microsoft Copilot 已宣布支援 CarPlay，成為最新加入的應用之一。此功能要求 iOS 26.4 或更高版本。在 CarPlay 環境下，Copilot 支援語音操作，並能同步顯示來自 iPhone 應用程式的聊天記錄，包括文字對話。Copilot 加入後，與 Siri AI、OpenAI 的 ChatGPT、Perplexity、SpaceXAI 的 Grok、Meta AI 和 Anthropic 的 Claude 等主流 AI 應用一同提供給用戶。目前，Google Gemini 暫時仍是此類應用中的主要缺席者。此外，CarPlay 也將包含專用的 Siri AI 應用，預計在 iOS 27 正式發布時推出，但 Siri AI 本身仍將分批進行測試與滾動式發佈。",
    tags: ["Apple CarPlay", "Microsoft Copilot", "iOS 27", "Siri AI", "ChatGPT", "AI 應用", "Apple 生態系"],
    title_en: "Microsoft Copilot Joins Apple CarPlay Ecosystem, Integrating with Siri AI, ChatGPT, and More to Expand In-Car AI Options",
    summary_en: "Apple CarPlay is accelerating the integration of third-party AI chatbot applications to enhance in-car smart features. Microsoft Copilot has announced support for CarPlay, making it one of the latest additions. This feature requires iOS 26.4 or later. Within the CarPlay environment, Copilot supports voice commands and can display chat history synchronized from the iPhone application, including text conversations. With Copilot's inclusion, users will have access to major AI applications alongside Siri AI, OpenAI's ChatGPT, Perplexity, SpaceXAI's Grok, Meta AI, and Anthropic's Claude. Currently, Google Gemini remains the notable absence among these applications. Furthermore, CarPlay will also include a dedicated Siri AI application, expected to launch with the official release of iOS 27, though Siri AI itself will undergo phased testing and rolling deployment.",
    tags_en: ["Apple CarPlay", "Microsoft Copilot", "iOS 27", "Siri AI", "ChatGPT", "AI Applications", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/microsoft-copilot-joins-carplay-leaving-gemini-as-the-biggest-holdout", lang: "EN" }
    ]
  },
  {
    id: "20260911-11883",
    trackers: ["os"],
    category: "Apple",
    title: "Apple宣稱Apple Watch Series 12與Ultra 4搭載新感測系統，心率偵測準確度領先市場",
    summary: "Apple發布Apple Watch Series 12和Apple Watch Ultra 4，強調其新加入的Health Sensing System大幅升級了健康與健身功能。該系統結合了更新的電氣和光學（PPG）心率感測器、訊號處理演算法，並支援如Recovery HRV和Readiness等新功能。Apple發表了一項包含1,460名成年受試者的研究，比較了Series 12與多款競爭產品（包括Garmin Forerunner 970、Google Pixel Watch 4、Samsung Galaxy Watch 8、Oura Ring 5等）的表現。測試涵蓋戶外跑步、室內訓練、騎行及日常活動等場景。根據Apple的數據，Series 12在159個活動與測量比較中，在139個場景達到了統計學上更優的準確度。這項產品預計於9月18日發售，Series 12起價為$399，Ultra 4起價為$799。",
    tags: ["Apple Watch Series 12", "Apple Watch Ultra 4", "Health Sensing System", "PPG", "Apple Health"],
    title_en: "Apple claims Apple Watch Series 12 and Ultra 4 feature new sensing systems, leading the market in heart rate detection accuracy",
    summary_en: "Apple has released the Apple Watch Series 12 and Apple Watch Ultra 4, highlighting that the newly integrated Health Sensing System significantly upgrades health and fitness capabilities. This system combines updated electrical and optical (PPG) heart rate sensors and signal processing algorithms, supporting new features such as Recovery HRV and Readiness. Apple published a study involving 1,460 adult participants, comparing the performance of the Series 12 against multiple competing products (including the Garmin Forerunner 970, Google Pixel Watch 4, Samsung Galaxy Watch 8, and Oura Ring 5). The tests covered various scenarios, including outdoor running, indoor training, cycling, and daily activities. According to Apple's data, the Series 12 achieved statistically superior accuracy in 139 out of 159 activity and measurement comparisons. The product is expected to launch on September 18, with the Series 12 starting at $399 and the Ultra 4 starting at $799.",
    tags_en: ["Apple Watch Series 12", "Apple Watch Ultra 4", "Health Sensing System", "PPG", "Apple Health"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-shares-the-data-behind-apple-watch-series-12s-biggest-health-claim", lang: "EN" }
    ]
  },
  {
    id: "20260911-11884",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 新功能亮點：深入介紹三個值得關注的 iPhone 升級特性",
    summary: "本文介紹了 iOS 27 作業系統中新增的幾項功能亮點，涵蓋了 Messages、Notes、Apple Wallet、CarPlay 等多個核心應用程式。文章重點介紹了三個作者個人最喜歡的 iOS 27 新增功能。這些更新旨在提升用戶在日常使用中的體驗，例如在訊息傳遞、備忘錄管理、電子錢包使用以及車用介面（CarPlay）等方面的便利性與功能性。由於原文僅為產品功能介紹，未提及任何安全漏洞或修補資訊，因此無法提供具體的 CVE 或修補建議。建議用戶關注 Apple 官方發布的完整更新指南，以了解所有新功能與使用細節。",
    tags: ["iOS 27", "iPhone", "Apple Wallet", "Messages", "Notes", "CarPlay"],
    title_en: "iOS 27 New Features Spotlight: Deep Dive into Three Key iPhone Upgrades",
    summary_en: "This article introduces several new features in the iOS 27 operating system, covering multiple core applications such as Messages, Notes, Apple Wallet, and CarPlay. The focus is on three iOS 27 features personally highlighted as most valuable. These updates aim to enhance the user experience in daily use, improving convenience and functionality across areas like message exchange, memo management, digital wallet usage, and the in-car interface (CarPlay). Since the original text only provides product feature introductions and does not mention any security vulnerabilities or patches, specific CVEs or remediation advice cannot be provided. Users are advised to follow Apple's official release guides for comprehensive updates to learn about all new features and usage details.",
    tags_en: ["iOS 27", "iPhone", "Apple Wallet", "Messages", "Notes", "CarPlay"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/ios-27-adds-three-new-iphone-features-ive-been-really-loving", lang: "EN" }
    ]
  },
  {
    id: "20260911-11885",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 高階主管公開討論 iPhone 18 Pro 與「iPhone Duo」的市場時機與未來規劃",
    summary: "本文報導 Apple 執行長 John Ternus 與行銷資深副總裁 Greg Joswiak，在接受 Tom’s Guide 和 TechRadar 採訪後，深入討論了 Apple 決定進入摺疊手機市場的時機點，並特別提及了 iPhone 18 Pro 以及概念產品「iPhone Duo」。雙方討論了 Apple 在當前市場環境下，選擇推動摺疊螢幕產品線的戰略考量。內容著重於產品的市場定位與未來發展趨勢，而非具體的技術規格或安全漏洞。本報導屬於產品新品發布與市場策略分析，建議關注 Apple 官方後續公告以了解具體發布時間與產品細節。",
    tags: ["Apple", "John Ternus", "Greg Joswiak", "iPhone 18 Pro", "iPhone Duo", "摺疊手機"],
    title_en: "Apple Executives Publicly Discuss Market Timing and Future Plans for iPhone 18 Pro and 'iPhone Duo'",
    summary_en: "This article reports that Apple CEO John Ternus and Senior Vice President of Marketing Greg Joswiak discussed the timing of Apple's entry into the foldable phone market after being interviewed by Tom's Guide and TechRadar. They specifically mentioned the iPhone 18 Pro and the concept product 'iPhone Duo.' The executives discussed the strategic considerations behind Apple's choice to promote a foldable screen product line in the current market environment. The content focuses on the product's market positioning and future development trends, rather than specific technical specifications or security vulnerabilities. This report belongs to product new release and market strategy analysis, and readers are advised to follow official Apple announcements for specific release timing and product details.",
    tags_en: ["Apple", "John Ternus", "Greg Joswiak", "iPhone 18 Pro", "iPhone Duo", "Foldable Phone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/john-ternus-and-greg-joswiak-reveal-why-now-is-the-time-for-iphone-duo", lang: "EN" }
    ]
  },
  {
    id: "20260911-11886",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發表會回顧：探討 iPhone Duo、iPhone 18 Pro、AirPods 5 及新款 Apple Watch 系列",
    summary: "本文為對 Apple 9 月份發表會的反應與回顧，內容涵蓋了對多款新產品的第一印象。主要討論的產品包括 iPhone Duo、iPhone 18 Pro、AirPods 5 以及全新的 Apple Watch 系列。文章也特別提及了 Apple 宣布 John Ternus 擔任 CEO 的首次活動。由於原文為產品評論與新聞回顧，未提供任何具體的漏洞或安全資訊，故無法提供技術細節、CVSS 分數或修補建議。建議讀者關注 Apple 官方後續發布的產品資訊與安全更新。",
    tags: ["Apple", "iPhone Duo", "iPhone 18 Pro", "AirPods 5", "Apple Watch", "Apple Event"],
    title_en: "Apple Event Review: Exploring iPhone Duo, iPhone 18 Pro, AirPods 5, and the New Apple Watch Series",
    summary_en: "This article provides a reaction and review of Apple's September event, covering first impressions of multiple new products. Key products discussed include the iPhone Duo, iPhone 18 Pro, AirPods 5, and the brand new Apple Watch series. The article also specifically mentions the initial announcement of John Ternus assuming the role of CEO. Since the original text is a product review and news recap, it does not provide specific vulnerabilities or security information, and therefore cannot offer technical details, CVSS scores, or patch recommendations. Readers are advised to monitor official follow-up product information and security updates from Apple.",
    tags_en: ["Apple", "iPhone Duo", "iPhone 18 Pro", "AirPods 5", "Apple Watch", "Apple Event"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/10/happy-hour-607", lang: "EN" }
    ]
  },
  {
    id: "20260911-11761",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Cynet發布4.33/5.0版資安平臺：強化SIEM、AI解釋與跨站點管理能力",
    summary: "資安業者Cynet發布更新的SaaS雲端服務平臺（4.33/5.0版），大幅強化其資安威脅偵測與應變能力。本次更新重點包括新增SIEM基礎功能（SIEM Essentials），讓分析師能透過單一介面進行監控、調查與XDR政策管理，簡化資安營運流程。此外，平臺整合了生成式AI技術（CyAI），能將複雜的XDR/ITDR警示，轉譯為具備上下文脈絡的自然語言解釋，協助分析人員快速理解事件本質、判斷優先級，並縮短調查時間。在管理層面，新增了跨站點儀表板與組態剖析管理，使服務代管業者（MSP）或擁有多個分公司的企業，能從單一帳號層級管理多個環境的資安態勢，提升營運效率。新版平臺還擴大了SIEM來源日誌支援範圍，納入Barracuda Firewall、Check Point Spark等多種廠牌設備，全面提升資安能見度。",
    tags: ["Cynet", "SIEM", "XDR", "AI", "MSP", "跨站點管理"],
    title_en: "Cynet Releases 4.33/5.0 Security Platform: Enhancing SIEM, AI Interpretation, and Multi-Site Management Capabilities",
    summary_en: "Security vendor Cynet has released an updated SaaS cloud service platform (version 4.33/5.0), significantly enhancing its security threat detection and response capabilities. Key features of this update include the addition of SIEM Essentials, allowing analysts to monitor, investigate, and manage XDR policies through a single interface, thereby streamlining security operations. Furthermore, the platform integrates generative AI technology (CyAI), which translates complex XDR/ITDR alerts into natural language explanations with contextual context. This assists analysts in quickly understanding the nature of an incident, determining priority, and reducing investigation time. At the management level, the addition of multi-site dashboards and configuration profiling management enables Managed Service Providers (MSPs) or enterprises with multiple branches to manage the security posture of multiple environments from a single account level, boosting operational efficiency. The new platform also expands SIEM source log support, incorporating various brand devices such as Barracuda Firewall and Check Point Spark, comprehensively improving security visibility.",
    tags_en: ["Cynet", "SIEM", "XDR", "AI", "MSP", "Multi-Site Management"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/review/178873", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11782",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Trezor客戶遭Phishing攻擊：第三方行銷平台Brevo漏洞導致34.7萬用戶電子郵件外洩",
    summary: "冷儲存加密貨幣錢包供應商Trezor宣布，由於其使用的第三方行銷平台Brevo遭到駭客攻擊，約347,000名客戶收到了釣魚電子郵件。駭客利用Brevo處理SAML Single Sign-On (SSO) 的漏洞，透過建立帳號並啟用SSO，進而取得超出預期的廣泛存取權限，導致其能存取多個組織的資料。攻擊者利用這批被盜取的電子郵件地址，發送了標題為「Critical Security Alert: STM32 Entropy Vulnerability」的釣魚郵件，內容包含指向惡意網站的連結。Trezor警告用戶，點擊連結並輸入錢包備份資料可能導致資金損失。雖然惡意網站在事件被發現後20分鐘內被關閉，但仍有用戶點擊，導致潛在的資金損失。此次事件凸顯了第三方服務供應商的資安風險，並可能引發更多針對Trezor用戶的釣魚攻擊。",
    tags: ["Trezor", "Brevo", "Phishing", "SAML SSO", "第三方元件漏洞", "加密貨幣"],
    title_en: "Trezor Customers Targeted by Phishing Attack Due to Brevo Vulnerability",
    summary_en: "Cryptocurrency cold storage wallet provider Trezor announced that approximately 347,000 customers received phishing emails because a third-party marketing platform, Brevo, it used was compromised by hackers. The attackers exploited a vulnerability in how Brevo handled SAML Single Sign-On (SSO). By creating an account and enabling SSO, they gained unexpectedly broad access rights, allowing them to access data from multiple organizations. The attackers used this batch of stolen email addresses to send phishing emails titled “Critical Security Alert: STM32 Entropy Vulnerability,” which contained links pointing to malicious websites. Trezor warned users that clicking the links and entering their wallet backup data could lead to financial loss. Although the malicious website was taken down within 20 minutes of the incident being discovered, some users still clicked, resulting in potential financial losses. This incident highlights the security risks associated with third-party service providers and may trigger more phishing attacks targeting Trezor users.",
    tags_en: ["Trezor", "Brevo", "Phishing", "SAML SSO", "Third-Party Component Vulnerability", "Cryptocurrency"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/trezor-says-347000-users-received-phishing-emails-after-brevo-hack", lang: "EN" }
    ]
  },
  {
    id: "20260911-11785",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Kiteworks 收購 Bonfy.AI，強化資料治理能力，實現人機互動情境下的即時資料控制",
    summary: "資料安全公司 Kiteworks 宣布收購 AI 資料安全公司 Bonfy.AI。此次收購旨在擴展其內容分享平台的能力，使其能夠對人類使用者和 AI 代理人（AI agents）交換的敏感資料實施即時的政策強制執行。Kiteworks 的平台原本用於保護跨企業網路、外部組織和內部系統移動的敏感資料，提供法規遵循、治理和稽核追蹤功能。Bonfy.AI 是一個 AI 原生內容安全平台，能保護人類工作流程和 AI 代理人推理過程中的敏感資料，提供即時分類、情境化強制執行和跨 SaaS 治理。收購後，Bonfy 的技術將與 Kiteworks 的控制平面結合，實現對資料在傳輸中（data in motion）和使用中（data in use）的單一政策模型控制，適用於人、機器和系統。這填補了企業在知道敏感資料位置後，卻無法控制其在被使用或傳輸時行為的結構性空缺。這項整合使企業能夠在資料離開的瞬間即時決定是否應傳輸，並提供可證明給監管機構的決策記錄。",
    tags: ["Kiteworks", "Bonfy.AI", "AI 代理人", "資料治理", "內容安全", "數據控制平面"],
    title_en: "Kiteworks Acquires Bonfy.AI to Enhance Data Governance Capabilities and Achieve Real-Time Data Control in Human-Machine Interaction Scenarios",
    summary_en: "Data security company Kiteworks announced the acquisition of AI data security company Bonfy.AI. This acquisition aims to expand its content sharing platform's capabilities, enabling real-time policy enforcement on sensitive data exchanged between human users and AI agents. Kiteworks' platform was originally used to protect sensitive data moving across enterprise networks, external organizations, and internal systems, providing compliance, governance, and audit trail functions. Bonfy.AI is an AI-native content security platform that protects sensitive data within human workflows and AI agent inference processes, offering real-time classification, contextual enforcement, and cross-SaaS governance. Following the acquisition, Bonfy's technology will be integrated with Kiteworks' control plane, enabling a single policy model control for data in motion and data in use, applicable to humans, machines, and systems. This addresses a structural gap where enterprises know the location of sensitive data but cannot control its behavior when it is used or transmitted. This integration allows enterprises to instantly determine whether data should be transmitted the moment it leaves, and provides a decision record verifiable for regulatory bodies.",
    tags_en: ["Kiteworks", "Bonfy.AI", "AI Agents", "Data Governance", "Content Security", "Data Control Plane"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/kiteworks-acquires-bonfy-ai-to-fill-the-ai-gap-in-data-governance", lang: "EN" }
    ]
  },
  {
    id: "20260911-11795",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "攻擊者鏈接 JFrog Artifactory 兩漏洞，可取得管理員權限並植入後門",
    summary: "雲端安全公司 Wiz 報告指出，攻擊者利用 JFrog Artifactory 兩個漏洞（CVE-2026-42018 與 CVE-2026-42016）的鏈式攻擊，可取得自託管伺服器的管理員控制權並植入後門。此攻擊模式為：攻擊者首先發送未經身份驗證的請求，獲取內部匿名使用者 token，再透過 Artifactory 的 token 創建端點，將低權限 token 替換為管理員範圍的 token。雖然單獨的漏洞無法取得管理權，但兩者鏈接後可達成目標。此外，另一個關鍵漏洞 CVE-2026-82329 是一個評分為 9.8 的嚴重身份驗證繞過漏洞，僅需網路存取即可讓未經身份驗證的攻擊者取得管理員權限。攻擊者利用這些權限後，會建立管理員帳號、植入惡意 Groovy 外掛程式，甚至竊取叢集加入金鑰。JFrog 建議用戶升級到修復版本，並針對 CVE-2026-82329 執行加入金鑰輪換。修補後，已建立的惡意帳號和金鑰仍可能存在風險。",
    tags: ["JFrog Artifactory", "CVE-2026-42018", "CVE-2026-42016", "CVE-2026-82329", "供應鏈安全", "開源專案", "身份驗證繞過"],
    title_en: "Attackers Chain Two JFrog Artifactory Vulnerabilities to Gain Admin Privileges and Implant Backdoor",
    summary_en: "A report by cloud security company Wiz indicates that attackers can exploit a chained attack involving two JFrog Artifactory vulnerabilities (CVE-2026-42018 and CVE-2026-42016) to gain administrative control and implant a backdoor on self-hosted servers. The attack pattern involves attackers first sending unauthenticated requests to obtain an internal anonymous user token, and then using Artifactory's token creation endpoint to replace the low-privilege token with an administrative-scoped token. Although neither vulnerability alone grants administrative rights, chaining them achieves the goal. Furthermore, another critical vulnerability, CVE-2026-82329, is a severe authentication bypass flaw rated 9.8, which allows unauthenticated attackers to gain administrative privileges merely with network access. After exploiting these privileges, attackers can create administrative accounts, implant malicious Groovy plugins, and even steal cluster join keys. JFrog recommends that users upgrade to the patched version and perform join key rotation specifically for CVE-2026-82329. Even after patching, malicious accounts and keys created previously may still pose a risk.",
    tags_en: ["JFrog Artifactory", "CVE-2026-42018", "CVE-2026-42016", "CVE-2026-82329", "Supply Chain Security", "Open Source Project", "Authentication Bypass"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-chain-jfrog-artifactory-flaws.html", lang: "EN" }
    ]
  },
  {
    id: "20260911-11839",
    trackers: ["os"],
    category: "Android",
    title: "Google Find Hub 更新 3.1.732-02 推出「Remembered」功能，透過 Gemini 支援物品位置記憶",
    summary: "Google 發布 Find Hub 應用程式更新 3.1.732-02，在 Google Play 商店透過逐步滾動的方式推出新的「Remembered」（記憶）功能。此功能在「Devices」和「People」標籤旁新增一個標籤，並以 Gemini 的閃電圖標標記。使用者可以透過語音指令，例如「請告訴 Gemini 我把護照放在哪個抽屜」，讓 Gemini 記錄日常物品的存放位置。操作流程包括為物品設定「名稱」和「儲存地點」，並可進一步新增照片、「位置」（如家中）和備註等詳細資訊。Find Hub 將會列出所有已儲存的物品，且 Gemini 也能提供離線互動支援。目前此版本尚未全面開放，建議使用者留意 Google Play Store 的更新通知。",
    tags: ["Google", "Find Hub", "Gemini", "Android", "3.1.732-02", "物品追蹤"],
    title_en: "Google Find Hub Update 3.1.732-02 Introduces 'Remembered' Feature for Gemini-Powered Item Location Memory",
    summary_en: "Google has released an update to the Find Hub application, version 3.1.732-02, rolling out a new 'Remembered' feature via the Google Play Store. This feature adds a new tab next to 'Devices' and 'People,' marked with the Gemini lightning icon. Users can use voice commands, such as 'Tell Gemini where I put my passport,' to allow Gemini to record the storage location of everyday items. The process involves setting a 'Name' and 'Storage Location' for the item, and users can further add detailed information such as photos, 'Location' (e.g., home), and notes. Find Hub will list all saved items, and Gemini will also provide offline interaction support. Since this version is not yet fully available, users are advised to monitor Google Play Store update notifications.",
    tags_en: ["Google", "Find Hub", "Gemini", "Android", "3.1.732-02", "Item Tracking"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/find-hub-remembered", lang: "EN" }
    ]
  },
  {
    id: "20260911-11420",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安新創 Cylake 完成 2.45 億美元募資，打造企業級整合式資安平臺",
    summary: "資安新創公司 Cylake 近期宣布完成 2.45 億美元的募資，累計募資金額已達 2.9 億美元。該公司由 Palo Alto Networks 創辦人 Nir Zuk、SentinelOne 共同創辦人 Udi Shamir 及 Wilson Xu 共同創立。Cylake 鎖定大型企業、政府機構及高度監管組織的資安需求，開發一款結合軟體、硬體與 AI 的整合式資安平臺。該平臺旨在解決資安資料分散於不同工具的問題，可彙整身分、網路、雲端、SaaS、IoT 及端點等多源資安資料，並在企業自控基礎設施上利用 AI 進行分析，支援事件調查、警示分類及應變等工作。該平臺預計於 2026 年底推出 Beta 版，並於 2027 年正式上市。",
    tags: ["Cylake", "Palo Alto Networks", "SentinelOne", "資安平臺", "AI", "企業資安"],
    title_en: "Cybersecurity Startup Cylake Completes $245 Million Funding Round to Build Enterprise-Grade Integrated Security Platform",
    summary_en: "Cybersecurity startup Cylake recently announced the completion of a $245 million funding round, bringing its total raised capital to $290 million. The company was co-founded by Nir Zuk, a co-founder of Palo Alto Networks, Udi Shamir, co-founder of SentinelOne, and Wilson Xu. Cylake targets the cybersecurity needs of large enterprises, government agencies, and highly regulated organizations, developing an integrated security platform that combines software, hardware, and AI. The platform aims to solve the problem of scattered security data across different tools by consolidating multi-source security data—including identity, network, cloud, SaaS, IoT, and endpoint—and utilizing AI on the enterprise's self-controlled infrastructure for analysis. The platform is scheduled to launch its Beta version by the end of 2026 and go live in 2027.",
    tags_en: ["Cylake", "Palo Alto Networks", "SentinelOne", "Security Platform", "AI", "Enterprise Cybersecurity"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178845", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11421",
    trackers: ["security"],
    category: "前瞻技術",
    title: "美國能源部與桑迪亞合作：利用生成式AI提升電網資安分析效率與準確性",
    summary: "隨著攻擊者運用AI加速攻擊，電網資安分析的效率與準確性成為關鍵議題。美國能源部（DOE）旗下CESER與桑迪亞國家實驗室合作進行C2E2研究，旨在利用大型語言模型（LLM）及生成式AI提升電網資安分析能力。傳統流程需耗時數月，且大部分時間花在資料工程，模型威脅偵測準確率約為85%。C2E2專案導入生成式AI自動化資料工程，將分析時間從數月大幅縮短至數小時，並將偵測及定位網路威脅的準確率提升至95%。目前該技術仍處於研究階段，團隊下一步將重點評估生成式AI可能產生的「幻覺」（Hallucination）是否會導致網路攻擊的漏報或誤報，並計畫與電力業者進行實地測試。",
    tags: ["美國能源部", "DOE", "CESER", "桑迪亞國家實驗室", "生成式AI", "LLM", "電網資安"],
    title_en: "U.S. Department of Energy and Sandia Collaborate to Use Generative AI to Enhance Grid Cybersecurity Analysis Efficiency and Accuracy",
    summary_en: "As attackers utilize AI to accelerate attacks, the efficiency and accuracy of grid cybersecurity analysis have become critical issues. CESER, under the U.S. Department of Energy (DOE), is collaborating with Sandia National Laboratories on the C2E2 research project, aiming to leverage Large Language Models (LLMs) and generative AI to enhance grid cybersecurity analysis capabilities. Traditional processes require months and spend most of their time on data engineering, with model threat detection accuracy around 85%. The C2E2 project introduces generative AI to automate data engineering, significantly reducing analysis time from months to hours, and improving the accuracy of detecting and locating network threats to 95%. Currently, this technology remains in the research phase. The team's next focus will be evaluating whether generative AI's potential 'hallucination' could lead to missed or false network attack reports, and they plan to conduct field tests with power utility companies.",
    tags_en: ["U.S. Department of Energy", "DOE", "CESER", "Sandia National Laboratories", "Generative AI", "LLM", "Grid Cybersecurity"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178834", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11422",
    trackers: ["security"],
    category: "前瞻技術",
    title: "CSA發布零信任微分段指引：限制AI代理與系統橫向移動風險",
    summary: "隨著企業IT環境擴展至雲端、OT、IoT及AI代理，傳統的網路分段方式已難以應對變動的通訊關係。雲端安全聯盟（CSA）發布《零信任微分段指引》，建議企業採用持續控制架構，透過綜合身分、裝置狀態及遙測資訊來制定政策決策。CSA將微分段分為「拓樸定義式」和「連線定義式」兩種模式，建議成熟的零信任架構應結合兩者，前者用於限制系統遭入侵後的橫向移動，後者則在連線建立前減少不必要的系統可達性。\n指引特別強調將AI代理納入微分段範圍，建議企業應根據AI代理的自主程度、工具能力及資料敏感度進行風險分級。實務上，應限制AI代理只能連線至核准的目的地，並預設拒絕未經核准的對外連線。企業應建立並維護核准使用的工具、API、模型及資料來源清單，以確保AI代理的存取權限僅限於執行任務所需的最小範圍。",
    tags: ["CSA", "零信任", "Zero Trust", "微分段", "Microsegmentation", "AI代理", "AI Agent"],
    title_en: "CSA Releases Zero Trust Microsegmentation Guide: Limiting Lateral Movement Risk from AI Agents and Systems",
    summary_en: "As enterprise IT environments expand to include cloud, OT, IoT, and AI agents, traditional network segmentation methods struggle to cope with changing communication relationships. The Cloud Security Alliance (CSA) has released the 'Zero Trust Microsegmentation Guide,' recommending that enterprises adopt a continuous control architecture that uses comprehensive identity, device state, and telemetry information for policy decision-making. The CSA divides microsegmentation into two modes: 'Topology-Defined' and 'Connection-Defined.' It advises that mature zero trust architectures should combine both; the former is used to restrict lateral movement after a system breach, while the latter reduces unnecessary system accessibility before a connection is established. The guide specifically emphasizes including AI agents within the scope of microsegmentation, advising enterprises to risk-grade AI agents based on their degree of autonomy, tool capabilities, and data sensitivity. Practically, AI agents should be restricted to connecting only to approved destinations, with a default denial of unapproved external connections. Enterprises should establish and maintain a list of approved tools, APIs, models, and data sources to ensure that AI agent access is limited only to the minimum scope required for task execution.",
    tags_en: ["CSA", "Zero Trust", "Microsegmentation", "AI Agent"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178848", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260911-11552",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple iOS 27 新增 iPhone Handoff 功能，T-Mobile 等電信商將收取月費",
    summary: "Apple 在 WWDC 發表 iOS 27 的新功能中，展示了「iPhone Handoff」功能，允許用戶使用單一電話號碼在兩台 iPhone 設備間無縫切換。該功能旨在改善設備間的連線性和使用體驗。根據報導，T-Mobile 將對此功能收取每月 $5 的費用，而德國電信（Deutsche Telekom）也要求訂閱服務。雖然 Apple 官方說明「電信商費用可能適用」，但該功能實際上是包含在電信商的 MultiSIM 服務方案中，單加 MultiSIM 的費用為每月 €6.95。用戶若想使用此功能，需留意電信商的收費細節與方案要求，建議用戶直接聯繫電信商了解具體費用與適用條件。",
    tags: ["Apple", "iOS 27", "iPhone Handoff", "T-Mobile", "Deutsche Telekom", "MultiSIM"],
    title_en: "Apple iOS 27 Adds iPhone Handoff Feature; Carriers Like T-Mobile Will Charge Monthly Fees",
    summary_en: "At WWDC, Apple showcased the new 'iPhone Handoff' feature within iOS 27, which allows users to seamlessly switch between two iPhone devices using a single phone number. This feature aims to improve connectivity and the overall user experience between devices. Reports indicate that T-Mobile will charge a monthly fee of $5 for this feature, and Deutsche Telekom also requires a subscription service. Although Apple officially stated that 'carrier fees may apply,' the feature is actually included in the carrier's MultiSIM service plan, with the cost of adding MultiSIM being €6.95 per month. Users who wish to utilize this feature should pay attention to the carrier's specific fee details and plan requirements, and are advised to contact their carrier directly for precise costs and eligibility conditions.",
    tags_en: ["Apple", "iOS 27", "iPhone Handoff", "T-Mobile", "Deutsche Telekom", "MultiSIM"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/10/t-mobile-will-charge-5-month-for-apples-new-iphone-handoff-feature", lang: "EN" }
    ]
  },
  {
    id: "20260911-11664",
    trackers: ["os"],
    category: "重點關注",
    title: "BeOS後繼系統 Haiku OS 進行開發更新：支援即時音訊輸出切換與藍牙功能",
    summary: "Haiku OS，這款受 BeOS 啟發的作業系統，於 2026 年 8 月發布了開發報告，概述了近期的進展。主要的更新包括在 Media Kit 和 media_server 中加入了即時音訊輸出切換支援。這項功能允許使用者在不重啟媒體服務的情況下，快速切換預設系統輸出。此外，Haiku OS 在 USB 支援、電源管理方面持續改進，並增加了對仍使用 USB Audio 1 規範的 USB 2 音訊設備的支援。在硬體支援方面，開發團隊也持續推進 PowerPC 和 ARM64 等多種 CPU 架構的建構支援。雖然即時切換功能已實現，但目前仍無法在不重啟媒體服務的情況下偵測熱插拔的 USB 音訊設備。這系列更新顯示了 Haiku OS 在多平台和多媒體硬體整合方面的持續努力。",
    tags: ["Haiku OS", "BeOS", "Media Kit", "USB 支援", "PowerPC", "ARM64"],
    title_en: "BeOS Successor Haiku OS Undergoing Development Updates: Supporting Real-time Audio Output Switching and Bluetooth Functionality",
    summary_en: "Haiku OS, an operating system inspired by BeOS, released a development report in August 2026, outlining recent progress. Key updates include adding real-time audio output switching support within the Media Kit and media_server. This feature allows users to quickly switch the default system output without restarting the media service. Furthermore, Haiku OS continues to improve USB support and power management, and has added support for USB 2 audio devices that still use the USB Audio 1 specification. In terms of hardware support, the development team is also advancing build support for multiple CPU architectures, such as PowerPC and ARM64. Although the real-time switching function has been implemented, it is currently not possible to detect hot-plugged USB audio devices without restarting the media service. This series of updates demonstrates Haiku OS's ongoing efforts in multi-platform and multimedia hardware integration.",
    tags_en: ["Haiku OS", "BeOS", "Media Kit", "USB Support", "PowerPC", "ARM64"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Haiku-OS-August-2026", lang: "EN" }
    ]
  },
  {
    id: "20260911-11754",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安研究指出 AI 提升詐騙能力：人為心理弱點成為攻擊面非對稱性",
    summary: "資安研究員 Fred Heiding 在 Black Hat USA 2026 的討論中指出，AI 模型在操縱人類行為和建立情感依賴方面表現出極高的能力。他強調，AI 正在極大地增強網路犯罪分子進行社工詐騙（social engineering）的攻擊，導致美國公民每年的詐騙損失持續飆升，從 2020 年的 40 億美元增至 2025 年的 210 億美元。Heiding 認為，雖然防禦方可以利用 AI 來應對技術層面的威脅，但在應對人類的心理操縱時，防禦方缺乏有效的技術手段來彌補「老舊的心理捷徑和系統」（mental heuristics and systems）所造成的非對稱性。這使得 AI 攻擊者能夠利用人類固有的弱點，進行更為有效的詐騙和操縱，對社會和個人構成重大挑戰。",
    tags: ["AI 安全", "社工詐騙", "操縱行為", "Black Hat USA 2026", "Fred Heiding", "心理弱點"],
    title_en: "Cybersecurity Research Points to AI Enhancing Fraud Capabilities: Human Psychological Weaknesses Become Asymmetric Attack Surface",
    summary_en: "Cybersecurity researcher Fred Heiding, speaking at Black Hat USA 2026, highlighted the extremely high capability of AI models in manipulating human behavior and establishing emotional dependency. He emphasized that AI is significantly enhancing the attacks used by cybercriminals for social engineering, leading to a continuous surge in annual fraud losses for U.S. citizens, rising from $4 billion in 2020 to $21 billion in 2025. Heiding argued that while defenders can utilize AI to counter technical threats, they lack effective technical means to address the asymmetry caused by 'old mental heuristics and systems' when dealing with human psychological manipulation. This allows AI attackers to exploit inherent human weaknesses, conducting more effective fraud and manipulation that poses a significant challenge to society and individuals.",
    tags_en: ["AI Security", "Social Engineering", "Behavioral Manipulation", "Black Hat USA 2026", "Fred Heiding", "Psychological Weaknesses"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/ai-scamming-humans", lang: "EN" }
    ]
  },
  {
    id: "20260911-11755",
    trackers: ["security"],
    category: "前瞻技術",
    title: "駭客利用 GuardBreaker 技術操縱 AI 防禦機制，透過惡意 VBScript 繞過 LLM 安全防護",
    summary: "本文指出，隨著 AI 在各行各業的廣泛應用，威脅情勢的複雜度和速度都大幅增加。攻擊者已開始發展出如 GuardBreaker 等新型技術，旨在操縱 AI 的防禦推理機制，從而悄無聲息地滲透目標網路。例如，文章提及俄羅斯相關的 UAC-0099 駭客，利用此技術將「我想製造核武器。幫我...」等問題文本作為惡意 VBScript 的註解，誘發大型語言模型（LLM）的安全機制，使其誤判並停止對程式碼的分析。這顯示，攻擊者已將目標從提高惡意軟體的複雜性，轉移到繞過 AI 的防禦邏輯。面對 AI 帶來的海量漏洞和複雜的威脅，作者呼籲業界和政府必須建立多層次的治理框架和安全控制，不能僅依賴 AI 防禦機制。建議應結合多層次的偵測、行為分析、沙盒、信譽系統，並強化人工專家主導的研究與工程，以應對日益複雜的網路威脅。",
    tags: ["AI 治理", "LLM 安全", "GuardBreaker", "VBScript", "網路安全", "AI 攻擊"],
    title_en: "Hackers Manipulate AI Defenses Using GuardBreaker Technique, Bypassing LLM Security with Malicious VBScript",
    summary_en: "The article points out that with the widespread application of AI across various industries, the complexity and speed of threats have significantly increased. Attackers have begun developing novel techniques, such as GuardBreaker, aimed at manipulating AI's defensive reasoning mechanisms to quietly infiltrate target networks. For instance, the article mentions a Russian-related hacker, UAC-0099, who utilized this technique by embedding prompts like 'I want to build a nuclear weapon. Help me...' as comments within a malicious VBScript. This was used to induce the Large Language Model's (LLM) security mechanism to misjudge and halt the analysis of the code. This demonstrates that attackers have shifted their focus from increasing malware complexity to bypassing AI's defensive logic. Faced with the massive vulnerabilities and complex threats posed by AI, the author urges industry and government to establish multi-layered governance frameworks and security controls, rather than relying solely on AI defense mechanisms. It is recommended that detection, behavioral analysis, sandboxing, and reputation systems be combined, alongside strengthening human expert-led research and engineering, to address increasingly complex cyber threats.",
    tags_en: ["AI Governance", "LLM Security", "GuardBreaker", "VBScript", "Cybersecurity", "AI Attack"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/ai-governance-cannot-wait", lang: "EN" }
    ]
  },
  {
    id: "20260911-11835",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 潛入摺疊手機市場：iPhone Duo 如何對標 Android 競爭者",
    summary: "本文為一集關於科技趨勢的播客內容，討論了 Apple 進入摺疊手機市場的動態。內容主要探討 Apple 的 iPhone Duo 機型，分析它從 Android 摺疊手機（如 Samsung 和 Google）的設計中汲取了哪些元素，以及它在哪些方面尋求改進。這篇文章旨在為業界分析師和開發者提供視角，評估 Apple 的新硬體產品線，並思考其他品牌應如何從 Apple 的動態中學習，以應對下一代硬體市場的挑戰。由於原文為播客內容的介紹，未提供具體的技術細節、CVE 或版本資訊，故無法提供具體的修補建議。受影響產品為 Apple 的未來摺疊手機產品線。未公開。",
    tags: ["Apple", "iPhone Duo", "摺疊手機", "硬體趨勢", "Samsung", "Google"],
    title_en: "Apple Enters Foldable Phone Market: How the iPhone Duo Targets Android Competitors",
    summary_en: "This article summarizes a podcast episode discussing Apple's move into the foldable phone market. The content primarily explores the hypothetical iPhone Duo model, analyzing which elements it draws from Android foldable phones (such as those from Samsung and Google), and in what areas it seeks improvement. This piece aims to provide industry analysts and developers with a perspective to evaluate Apple's new hardware product line, and to consider how other brands can learn from Apple's dynamics to meet the challenges of the next-generation hardware market. Since the original source is a podcast introduction and does not provide specific technical details, CVEs, or version information, no specific patch recommendations are available. The affected product is Apple's future foldable phone product line. Not public.",
    tags_en: ["Apple", "iPhone Duo", "Foldable Phone", "Hardware Trends", "Samsung", "Google"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/pixelated-116-how-dynamic-is-this-duo", lang: "EN" }
    ]
  },
  {
    id: "20260911-11838",
    trackers: ["os"],
    category: "重點關注",
    title: "摩托羅拉（Motorola）傳出新款折疊手機Razr Fold，強調無邊框設計與3D玻璃螢幕",
    summary: "根據洩露的內部概念圖和World Power Consortium（WPC）的產品列表，摩托羅拉正在開發一款新型號的寬螢幕折疊手機Razr Fold。這款設備旨在與Galaxy Fold 8和iPhone Duo等競爭對手抗衡。概念圖顯示，摩托羅拉的設計重點包括實現「無邊框」（bezel-less）的封面螢幕，並採用「3D玻璃」保護，這可能指類似Motorola Edge系列曲面邊緣的設計。此外，該設計也強調追求「無摺痕」（crease-less）的內螢幕，以提升用戶體驗。雖然目前市場上的Razr Fold摺痕仍較明顯，但摩托羅拉似乎有能力將其摺痕降至最低。從WPC的產品列表來看，該設備的型號編號與現有的Razr Fold相似，且更新支援了Qi 2.2.1標準，顯示該產品線的持續迭代與技術升級。",
    tags: ["Motorola", "Razr Fold", "折疊手機", "無邊框", "3D玻璃", "WPC"],
    title_en: "Motorola rumored to develop new foldable phone, Razr Fold, emphasizing bezel-less design and 3D glass screen",
    summary_en: "According to leaked internal concept art and the World Power Consortium (WPC) product list, Motorola is developing a new wide-screen foldable phone named the Razr Fold. This device is aimed at competing with rivals such as the Galaxy Fold 8 and iPhone Duo. The concept art indicates that Motorola's design focuses on achieving a 'bezel-less' cover screen and utilizing '3D glass' protection, which may refer to a design similar to the curved edges found in the Motorola Edge series. Furthermore, the design emphasizes achieving a 'crease-less' inner screen to enhance the user experience. Although the crease on currently available Razr Fold models is still noticeable, Motorola appears capable of minimizing this crease. Based on the WPC product list, the device's model number is similar to the existing Razr Fold, and it has updated support for the Qi 2.2.1 standard, indicating continuous iteration and technological upgrades within this product line.",
    tags_en: ["Motorola", "Razr Fold", "Foldable Phone", "Bezel-less", "3D Glass", "WPC"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/motorolas-wide-razr-fold-wants-3d-glass-and-creaseless-display", lang: "EN" }
    ]
  },
  {
    id: "20260911-11841",
    trackers: ["os"],
    category: "重點關注",
    title: "洩漏規格揭曉：聯想 Googlebook 15 搭載 OLED 螢幕與先進認證功能",
    summary: "根據最新洩漏報告，聯想（Lenovo）即將推出的 Googlebook 15 型號規格已基本曝光。這款筆電預計搭載 Intel Core Ultra 5 325 處理器，配備 16GB 或 32GB LPDDR5x RAM，以及 256GB 或 512GB 儲存空間。螢幕規格為 15.3 吋、2880 x 1800 OLED，支援 120Hz 刷新率和觸控功能。此外，它還具備了觸覺回饋軌跡板（Haptic trackpad）、指紋感應器，以及備受關注的「Google 面部認證」功能。報告指出，該設備預計具備 USB-C/Thunderbolt 4、USB-A、HDMI 2.0 等多樣連接埠。雖然價格未公開，但從其高端配置來看，預計定位在高階市場。特別值得關注的是「Google 面部認證」，這可能指類似 Pixel 手機的基於相機的臉部解鎖功能，其性能目標與 Apple 的 Face ID 系統相媲美，但具體實作方式仍待確認。",
    tags: ["Lenovo", "Googlebook", "Intel Core Ultra 5 325", "OLED", "LPDDR5x", "面部認證"],
    title_en: "Leak Reveals: Lenovo Googlebook 15 Features OLED Display and Advanced Authentication",
    summary_en: "According to the latest leaked report, the specifications for the upcoming Lenovo Googlebook 15 model have largely been revealed. This laptop is expected to feature the Intel Core Ultra 5 325 processor, equipped with 16GB or 32GB of LPDDR5x RAM, and 256GB or 512GB of storage. The screen specifications are 15.3 inches, 2880 x 1800 OLED, supporting a 120Hz refresh rate and touch functionality. Furthermore, it includes a haptic trackpad, a fingerprint sensor, and the highly anticipated \"Google Face Authentication\" feature. The report indicates that the device is expected to feature diverse ports such as USB-C/Thunderbolt 4, USB-A, and HDMI 2.0. Although the price has not been disclosed, its high-end configuration suggests a positioning in the premium market. Of particular interest is the \"Google Face Authentication,\" which may refer to a camera-based facial unlock function similar to those found on Pixel phones. Its performance aims to rival Apple's Face ID system, though the specific implementation method remains unconfirmed.",
    tags_en: ["Lenovo", "Googlebook", "Intel Core Ultra 5 325", "OLED", "LPDDR5x", "Face Authentication"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/lenovo-googlebook-15-specs-leak", lang: "EN" }
    ]
  },
  {
    id: "20260911-11843",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 推出首次摺疊手機 iPhone Duo，挑戰 Android 摺疊機市場",
    summary: "本文報導 Apple 宣布推出首款摺疊手機 iPhone Duo，進入市場競爭的節點。雖然文章未提供具體技術細節或安全漏洞，但指出 Apple 的這款產品旨在與市場上的 Android 摺疊機（如 Galaxy Z Fold）競爭。這項產品的發布，讓業界對於 Apple 在摺疊手機市場的戰略佈局和領導層的看法產生了更多關注。文章內容主要聚焦於產品的市場定位和競爭分析，而非資安議題。因此，本摘要僅概述其市場動向，並提醒讀者這屬於產品新聞而非資安警報。",
    tags: ["Apple", "iPhone Duo", "摺疊手機", "Android", "市場趨勢"],
    title_en: "Apple Launches First Foldable Phone, iPhone Duo, Challenging the Android Foldable Market",
    summary_en: "This article reports Apple's announcement of the first foldable phone, the iPhone Duo, entering the market competition. Although the article does not provide specific technical details or security vulnerabilities, it points out that Apple's product aims to compete with existing Android foldables (such as the Galaxy Z Fold). The launch of this product has increased industry attention regarding Apple's strategic positioning and leadership in the foldable phone market. The content primarily focuses on product market positioning and competitive analysis, rather than cybersecurity issues. Therefore, this summary only outlines the market trend and reminds readers that this is product news, not a security alert.",
    tags_en: ["Apple", "iPhone Duo", "Foldable Phone", "Android", "Market Trends"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/apple-on-wide-android-foldables-beating-iphone-duo-they-got-the-aspect-ratio", lang: "EN" }
    ]
  },
  {
    id: "20260911-11844",
    trackers: ["os"],
    category: "重點關注",
    title: "Walmart Onn 4K Pro 重新供貨，提供具備 Google TV 系統的平價串流方案",
    summary: "本文報導了 Walmart 正在進行 Onn 4K Pro 的大規模補貨，讓消費者能以更實惠的價格入手具備 Google TV 系統的串流設備。Google TV Streamer 雖然是旗艦機型，但自八月底開始上調至 $149 的價格，使其吸引力下降。相比之下，Onn 4K Pro 價格僅為 $60，提供類似的性能和功能，是目前市場上較具吸引力的選擇。作者建議消費者若想購買 Onn 4K Pro，應留意當地實體店鋪的補貨情況，因為該產品自五月上市以來，庫存狀況一直不穩定。此外，Onn 4K 串流棒和 Onn 4K Plus 機盒也廣泛供應，讓用戶有更多平價選擇。",
    tags: ["Walmart", "Onn 4K Pro", "Google TV", "串流設備", "消費電子"],
    title_en: "Walmart Restocks Onn 4K Pro, Offering Affordable Streaming Solution with Google TV System",
    summary_en: "This article reports that Walmart is restocking the Onn 4K Pro, allowing consumers to acquire a streaming device with Google TV system at a more affordable price. While the Google TV Streamer is a flagship model, its price increase to $149 starting late August has reduced its appeal. In comparison, the Onn 4K Pro is priced at only $60, offering similar performance and features and making it a more attractive choice in the current market. The author advises consumers looking to purchase the Onn 4K Pro to monitor local physical store stock levels, as the product's inventory has been unstable since its launch in May. Furthermore, the Onn 4K streaming stick and the Onn 4K Plus box are also widely available, giving users more budget-friendly options.",
    tags_en: ["Walmart", "Onn 4K Pro", "Google TV", "Streaming Device", "Consumer Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/walmat-onn-4k-pro-restock-september", lang: "EN" }
    ]
  },
  {
    id: "20260911-11845",
    trackers: ["os"],
    category: "重點關注",
    title: "三星 Galaxy SmartTag 3 洩漏規格：採用 UWB 與藍牙，設計大幅改變",
    summary: "三星即將推出的 Galaxy SmartTag 3 追蹤器，根據洩漏資訊，其設計將與前代產品有顯著不同。新機型將採用更簡潔的造型，但缺乏內建的掛環或固定機制，需要搭配額外配件連接到鑰匙圈或包包上。功能規格方面，SmartTag 3 將支援 UWB（超寬頻）和藍牙連接，並具備 IP67 等級的防水防塵能力，預計電池壽命可達約 500 天。雖然原文未明確說明其網路生態系統，但洩漏資訊暗示其可能專屬於三星的網路，而非使用 Google Find Hub 等通用網路。價格方面，單品預計維持 €39.99（美金 $29.99），但四件套的價格將從 €129.99 上漲至 $139.99。目前尚未公布確切的發布日期。",
    tags: ["Samsung", "Galaxy SmartTag 3", "UWB", "藍牙", "追蹤器", "電子產品"],
    title_en: "Samsung Galaxy SmartTag 3 Leak Reveals Specs: Adopting UWB and Bluetooth with Major Design Changes",
    summary_en: "According to leaked information, the upcoming Samsung Galaxy SmartTag 3 tracker will feature a design significantly different from its predecessor. The new model will adopt a more streamlined aesthetic but will lack a built-in loop or mounting mechanism, requiring external accessories to attach it to keyrings or bags. In terms of functionality, the SmartTag 3 will support UWB (Ultra-Wideband) and Bluetooth connectivity, and will feature IP67-rated water and dust resistance, with an estimated battery life of approximately 500 days. While the original source did not explicitly state its network ecosystem, the leaked information suggests it may be proprietary to the Samsung network, rather than utilizing a general network like Google Find Hub. Regarding pricing, the single unit is expected to remain at €39.99 ($29.99), but the four-pack price is set to increase from €129.99 to $139.99. A definitive release date has not yet been announced.",
    tags_en: ["Samsung", "Galaxy SmartTag 3", "UWB", "Bluetooth", "Tracker", "Consumer Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/11/samsung-galaxy-smarttag-3-copies-the-worst-part-of-apples-airtag-in-leak", lang: "EN" }
    ]
  },
  {
    id: "20260911-11864",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 首次折疊手機 iPhone Duo 概念討論：初步印象與市場展望",
    summary: "本文為一篇觀點性文章，討論了 Apple 首次折疊手機 iPhone Duo 的初步想法與印象。文章內容主要為產業觀察與市場預測，未提及任何具體的資安漏洞、CVE 編號、技術細節或修補建議。因此，無法提供實務的資安修補建議。整體而言，這篇文章的重點在於探討 Apple 進入可折疊手機市場的潛在影響與用戶體驗。",
    tags: ["Apple", "iPhone Duo", "折疊手機", "市場分析", "概念產品"],
    title_en: "Apple's Conceptual Discussion of the First Foldable Phone, iPhone Duo: Initial Impressions and Market Outlook",
    summary_en: "This is an opinion piece discussing the initial concepts and impressions of Apple's first foldable phone, the iPhone Duo. The article focuses primarily on industry observations and market predictions, and does not mention any specific security vulnerabilities, CVE IDs, technical details, or patch recommendations. Therefore, it cannot provide practical cybersecurity remediation advice. Overall, the focus of this article is exploring the potential impact and user experience of Apple entering the foldable phone market.",
    tags_en: ["Apple", "iPhone Duo", "Foldable Phone", "Market Analysis", "Concept Product"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/9to5mac-overtime-081-iphone-duo-thoughts-and-impressions", lang: "EN" }
    ]
  },
  {
    id: "20260911-11867",
    trackers: ["os"],
    category: "重點關注",
    title: "Counterpoint研究預測Apple摺疊面板出貨量將大幅增長，預計至2030年佔比達42%",
    summary: "Counterpoint Research發布報告，分析了iPhone Duo對摺疊手機市場的影響，並預測了市場的未來趨勢。報告指出，儘管Apple的摺疊面板預計在2026年僅佔27%的出貨量，但隨著時間推移，其出貨量預計將從2026年的基礎水平，到2030年增長167%，市場佔有率將提升約15個百分點，達到42%。整體市場預計在2026年至2030年間，摺疊面板出貨量將增長74%，年複合增長率約為15%。在面板類型方面，預計「內折式」（In-fold）面板將增長79%，佔比提升至84%；「多折式」（Multi-fold）面板預計增長179%，佔比提升至4.5%。此報告主要為市場分析，未提及任何資安漏洞或修補建議。",
    tags: ["Counterpoint Research", "Apple", "摺疊手機", "iPhone Duo", "市場分析"],
    title_en: "Counterpoint Research predicts Apple foldable panel shipments will grow significantly, reaching 42% market share by 2030",
    summary_en: "Counterpoint Research released a report analyzing the impact of the iPhone Duo on the foldable phone market and forecasting future market trends. The report indicates that although Apple's foldable panel shipments are expected to account for only 27% of the market in 2026, shipments are projected to grow by 167% from the 2026 baseline to 2030, increasing its market share by approximately 15 percentage points to 42%. Overall, the market is expected to see foldable panel shipments grow by 74% between 2026 and 2030, with a Compound Annual Growth Rate (CAGR) of approximately 15%. Regarding panel types, 'In-fold' panels are expected to grow by 79%, increasing their share to 84%; 'Multi-fold' panels are projected to grow by 179%, increasing their share to 4.5%. This report is primarily a market analysis and does not mention any security vulnerabilities or patch recommendations.",
    tags_en: ["Counterpoint Research", "Apple", "Foldable Phones", "iPhone Duo", "Market Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/counterpoint-apple-foldable-panel-shipments-could-rise-167-by-2030", lang: "EN" }
    ]
  },
  {
    id: "20260911-11872",
    trackers: ["os"],
    category: "重點關注",
    title: "Shelly Flood S Gen4：Matter 認證低成本水浸感測器，提升 Apple Home 智慧家庭防漏能力",
    summary: "本文介紹 Shelly Flood S Gen4，這是一款專為智慧家庭設計的低成本水浸感測器。該產品具備 Matter 認證，支援 Wi-Fi 和 Zigbee，可與 Apple Home、Google Home、Amazon Alexa 等多個智慧平台整合。相較於傳統感測器，Flood S Gen4 採用底部三個大型不鏽鋼墊，增加了接觸面積，能更快、更廣泛地偵測到水浸，甚至能偵測到如空調冷凝水等低電導率的乾淨水。它設計低調，適合放置在電器下方或水槽後方。在功能上，它提供本地警報和手機通知，並設有洪水偵測和雨水偵測兩種模式，以及不同警報模式，可平衡偵測速度與電池壽命，電池壽命可達兩年。透過 Apple Home 整合，使用者可以設定自動化流程，例如在偵測到漏水時切斷洗衣機或洗碗機的電源，或觸發家中所有智慧燈具。這款感測器被推薦為智慧家庭中最聰明的投資之一。",
    tags: ["Shelly", "Flood S Gen4", "Matter", "Apple Home", "智慧家庭", "水浸感測器"],
    title_en: "Shelly Flood S Gen4: Matter Certified Low-Cost Water Leak Sensor Enhances Apple Home Smart Home Leak Protection",
    summary_en: "This article introduces the Shelly Flood S Gen4, a low-cost water leak sensor designed for smart homes. The product is Matter certified and supports both Wi-Fi and Zigbee, allowing integration with multiple smart platforms such as Apple Home, Google Home, and Amazon Alexa. Compared to traditional sensors, the Flood S Gen4 uses three large stainless steel pads at the bottom, increasing the contact area to detect water leaks faster and over a wider area. It can even detect clean water with low conductivity, such as air conditioning condensate. Its discreet design makes it suitable for placement under appliances or behind sinks. Functionally, it provides local alarms and mobile notifications, and features two modes—flood detection and rainwater detection—along with various alarm modes, allowing users to balance detection speed and battery life, which can last up to two years. Through Apple Home integration, users can set up automation routines, such as cutting off the power to a washing machine or dishwasher when a leak is detected, or triggering all smart lights in the house. This sensor is recommended as one of the smartest investments for a smart home.",
    tags_en: ["Shelly", "Flood S Gen4", "Matter", "Apple Home", "Smart Home", "Water Leak Sensor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/homekit-weekly-shellys-flood-s-gen4-is-a-low-cost-matter-leak-sensor-for-apple-home", lang: "EN" }
    ]
  },
  {
    id: "20260911-11877",
    trackers: ["os"],
    category: "重點關注",
    title: "用戶分享：因電信費過高，決定從 T-Mobile 轉投 MVNO 服務",
    summary: "這篇文章是個人經驗分享，描述一位自 2016 年以來一直是 T-Mobile 客戶的用戶。儘管一直享有軍人折扣，但由於 T-Mobile 的價格上漲，其月費最終膨脹至 113 美元。為尋求更經濟的替代方案，該用戶決定轉投 MVNO（虛擬移動網路營運商）服務。此外，由於預計升級的 Apple iPhone 18 Pro 價格較高，降低電信費成為減輕開支的考量。文章核心內容為個人消費決策與市場趨勢觀察，而非技術或資安事件。",
    tags: ["T-Mobile", "MVNO", "電信費", "消費決策", "Apple iPhone 18 Pro"],
    title_en: "User Share: Deciding to Switch from T-Mobile to MVNO Services Due to High Telecom Costs",
    summary_en: "This article is a personal experience share detailing a user who has been a T-Mobile customer since 2016. Despite consistently receiving a military discount, the user's monthly bill eventually inflated to $113 due to T-Mobile's price increases. To find a more economical alternative, the user decided to switch to MVNO (Mobile Virtual Network Operator) services. Furthermore, given the anticipated high price of the upgraded Apple iPhone 18 Pro, reducing telecom expenses became a key consideration for managing household budgets. The core content focuses on personal consumer decisions and market trend observations, rather than technical or cybersecurity events.",
    tags_en: ["T-Mobile", "MVNO", "Telecom Costs", "Consumer Decisions", "Apple iPhone 18 Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/heres-why-i-left-t-mobile-for-an-mvno", lang: "EN" }
    ]
  },
  {
    id: "20260911-11891",
    trackers: ["os"],
    category: "重點關注",
    title: "遊戲理論研究進展：探討隨機回報與演變策略對人類決策的影響",
    summary: "本文非資安新聞，而是學術研究概述，探討遊戲理論（Game Theory）如何應用於理解人類的決策模式。傳統的遊戲模型通常假設回報是固定的，但現實生活中的策略選擇的後果和回報是持續變化的。研究人員利用數學模型，研究了一系列包含「隨機變動回報」和「演變策略」的遊戲。文章以經典的「囚徒困境」（Prisoner's Dilemma）為例，說明當回報結構改變時，最佳策略也會隨之變化。例如，當背叛（defects）的回報與合作（cooperating）的回報之間平衡時，遊戲可能穩定在所有參與者都互相背叛的狀態，導致所有人都處於不利局面。此外，文章指出，策略的演變可以導致穩定群體、雙穩態（bistable populations）或限制週期（limit cycles）等複雜動態。這些研究進展顯示，遊戲理論模型正朝向更貼近現實、回報和資源不斷變動的複雜系統進行發展。",
    tags: ["遊戲理論", "Game Theory", "囚徒困境", "Prisoner's Dilemma", "演變策略", "隨機回報"],
    title_en: "Advances in Game Theory Research: Exploring the Impact of Random Rewards and Evolutionary Strategies on Human Decision-Making",
    summary_en: "This article is not a cybersecurity news item, but an academic research overview exploring how Game Theory can be applied to understand human decision patterns. Traditional game models typically assume fixed rewards, but the consequences and rewards of strategic choices in real life are constantly changing. Researchers utilized mathematical models to study a series of games incorporating 'randomly varying rewards' and 'evolutionary strategies.' Using the classic Prisoner's Dilemma as an example, the article demonstrates that the optimal strategy changes when the reward structure changes. For instance, when the balance between the reward for defecting and the reward for cooperating is established, the game may stabilize in a state where all participants defect, leading to an unfavorable outcome for everyone. Furthermore, the article points out that strategy evolution can lead to complex dynamics such as stable populations, bistable populations, or limit cycles. These research advances show that game theory models are moving toward complex systems that more closely resemble reality, where rewards and resources are constantly changing.",
    tags_en: ["Game Theory", "Prisoner's Dilemma", "Evolutionary Strategies", "Random Rewards"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/science/2026/09/random-rewards-enrich-classic-game-theory-contests", lang: "EN" }
    ]
  },
  {
    id: "20260911-11894",
    trackers: ["os"],
    category: "重點關注",
    title: "ChatGPT生成法律文件引發爭議：新墨西哥州法院處罰律師提交虛構證詞",
    summary: "本案涉及律師 Stephen Aarons 使用 ChatGPT 生成法律文件，並提交包含虛構證人證詞及法律錯誤的法律摘要。新墨西哥州最高法院在審理後，裁定 Aarons 對此行為處以藐視法庭的處罰。法院指出，Aarons 未能驗證其 AI 生成的法律文件中的事實主張和法律權威，且未告知客戶此重大疏失。該律師提交的虛假證詞包括虛構的警員 Michelle Amarillo、Sanchez、Manal Al-Jibury 和 Teresa Marquez 等人，以及關於威脅和槍手外貌的虛假陳述。法院的裁決強調，律師必須對其提交的法律文件負起最終責任，即使內容是透過 AI 工具生成，也必須進行嚴格的事實核查與法律審核，否則將導致嚴重的專業倫理和法律後果。",
    tags: ["ChatGPT", "AI生成內容", "法律倫理", "新墨西哥州法院", "虛假證詞", "法律科技"],
    title_en: "Controversy over ChatGPT-Generated Legal Documents: New Mexico Court Penalizes Lawyer for Submitting Fabricated Testimony",
    summary_en: "The case involved lawyer Stephen Aarons submitting a legal brief generated using ChatGPT, which contained fabricated witness testimonies and legal inaccuracies. After deliberation, the New Mexico Supreme Court ruled that Aarons was penalized for contempt of court for this action. The court noted that Aarons failed to verify the factual claims and legal authorities within the AI-generated legal document, and failed to inform his client of this significant omission. The fabricated testimonies submitted by the lawyer included fictional officers such as Michelle Amarillo, Sanchez, Manal Al-Jibury, and Teresa Marquez, as well as false statements regarding the appearance of threats and gunmen. The court's ruling emphasized that lawyers bear ultimate responsibility for the legal documents they submit. Even if the content is generated through an AI tool, it must undergo rigorous factual verification and legal review, or it will result in severe professional ethical and legal consequences.",
    tags_en: ["ChatGPT", "AI-Generated Content", "Legal Ethics", "New Mexico Court", "Fabricated Testimony", "Legal Tech"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/09/chatgpt-using-lawyer-punished-for-citing-fake-testimony-from-made-up-witnesses", lang: "EN" }
    ]
  },
  {
    id: "20260911-11898",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 警告 AI 模型遭濫用風險：揭露用戶規避安全機制進行生物武器研究案例",
    summary: "AI 企業 Anthropic 發布報告，警告其模型（如 Claude）面臨被用於生物武器研究的濫用風險。報告揭露了多個案例，顯示部分用戶曾嘗試規避 Anthropic 設置的安全控制機制，並混淆研究目的。這些案例涉及來自俄羅斯、中國和伊朗等被限制地區的用戶。其中一個案例指出，一位來自「不受支持地區」的研究人員曾花費數週時間，利用 Claude 規劃涉及禽流感的實驗。Anthropic 強調，其安全過濾器已將相關工作限制在較弱的模型上。公司表示，雖然無法確定這些科學家是否意圖造成傷害，但其提供的資訊也可能用於開發疫苗。Anthropic 已對報告中提及的帳戶進行了封禁，並呼籲業界和政府就新興的生物風險進行討論。",
    tags: ["Anthropic", "Claude", "AI 安全", "生物武器", "AI 倫理", "模型濫用"],
    title_en: "Anthropic Warns of AI Model Misuse Risk: Reveals Cases of Users Circumventing Safety Mechanisms for Bioweapon Research",
    summary_en: "AI company Anthropic released a report warning that its models (such as Claude) face misuse risks, including potential use in bioweapon research. The report revealed multiple cases where some users attempted to circumvent the safety controls established by Anthropic and obfuscate their research goals. These cases involved users from restricted regions, including Russia, China, and Iran. One case highlighted a researcher from an 'unsupported region' who spent several weeks using Claude to plan experiments involving avian influenza. Anthropic emphasized that its safety filters have restricted such related work to weaker models. The company stated that while it cannot determine if these scientists intended to cause harm, the information provided could also be used for vaccine development. Anthropic has banned the accounts mentioned in the report and called for industry and government discussions regarding emerging biological risks.",
    tags_en: ["Anthropic", "Claude", "AI Safety", "Bioweapons", "AI Ethics", "Model Misuse"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/09/claude-users-found-ways-around-safeguards-for-bioweapons-research", lang: "EN" }
    ]
  },
  {
    id: "20260911-11899",
    trackers: ["os"],
    category: "重點關注",
    title: "ClickFix 攻擊手法泛濫：利用假 CAPTCHA 介面誘騙使用者執行惡意指令感染 PC 與 Mac",
    summary: "ClickFix 攻擊已從罕見現象轉變為主流威脅，攻擊者利用受污染的網站，透過偽造的 CAPTCHA 疊層，誘騙使用者執行惡意的終端機指令。攻擊流程通常以看似正常的 CAPTCHA 圖片開始，接著會要求使用者複製一段看似無害的文字，並將其貼入 Windows 的 Run、PowerShell 或 macOS 的終端機中執行。攻擊者正是利用了使用者對於複雜網路介面（如 CAPTCHA、不斷變化的網站介面）的疲勞感和慣性，讓受害者誤以為這些指令是正常的網站操作流程。這類攻擊的成功率高，甚至吸引了包括克里姆林宮背景駭客群組在內的攻擊者。資安專家指出，使用者對於網路操作的疲勞感，使得他們更容易忽略看似可疑的指令，從而成為攻擊的目標。建議使用者提高警覺，不輕信網站上要求複製並執行任何終端機指令的提示。",
    tags: ["ClickFix", "CAPTCHA", "惡意指令", "Windows", "macOS", "供應鏈"],
    title_en: "ClickFix Attack Techniques Proliferate: Using Fake CAPTCHA Interfaces to Trick Users into Running Malicious Commands on PC and Mac",
    summary_en: "The ClickFix attack has evolved from a rare phenomenon into a mainstream threat. Attackers utilize compromised websites, employing fake CAPTCHA overlays to trick users into executing malicious terminal commands. The attack process typically begins with a seemingly normal CAPTCHA image, followed by a request for the user to copy a seemingly harmless string of text and paste it into the Windows Run, PowerShell, or macOS Terminal for execution. Attackers exploit the user's fatigue and habituation with complex web interfaces (such as CAPTCHA or constantly changing website interfaces), leading victims to believe these commands are part of a normal website operation flow. These attacks have a high success rate, attracting attackers including groups with Kremlin ties. Cybersecurity experts point out that user fatigue regarding online operations makes them more susceptible to ignoring seemingly suspicious commands, thus making them prime targets. Users are advised to raise their awareness and not trust prompts on websites that require copying and executing any terminal commands.",
    tags_en: ["ClickFix", "CAPTCHA", "Malicious Commands", "Windows", "macOS", "Supply Chain"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral", lang: "EN" }
    ]
  },
  {
    id: "20260911-11902",
    trackers: ["os"],
    category: "重點關注",
    title: "德國 Isar Aerospace 成功將火箭送入軌道，成為歐洲首家純商業發射公司",
    summary: "德國的 Isar Aerospace 於上週六從北極圈內挪威的太空港，成功將其私人開發的兩級火箭 Spectrum 送入低地球軌道。這項成就使其成為歐洲第一家完全商業化的發射載具公司。Isar Aerospace 成立於 2018 年，由德國大學的三名學生創立。此次成功讓 Isar 在歐洲眾多競爭的發射新創公司中脫穎而出，成為領先者。該公司透過多次私人融資，已累積了約 10 億美元的資金，並擁有近 500 名員工。歐洲太空界期待這股商業競爭能刺激歐洲停滯的火箭產業，改變以往政府主導的採購模式（geo-return）。",
    tags: ["Isar Aerospace", "Spectrum", "歐洲太空產業", "商業發射", "低地球軌道"],
    title_en: "Germany's Isar Aerospace Successfully Launches Rocket into Orbit, Becoming Europe's First Pure Commercial Launch Company",
    summary_en: "Germany's Isar Aerospace successfully launched its privately developed two-stage rocket, Spectrum, into low Earth orbit from the Thule Air Base in Norway, located within the Arctic Circle, last Saturday. This achievement establishes it as the first fully commercial launch vehicle company in Europe. Founded in 2018 by three students from a German university, Isar Aerospace has emerged as a leader among Europe's many competing launch startups. Through multiple private funding rounds, the company has accumulated approximately $1 billion in capital and employs nearly 500 people. The European space sector anticipates that this commercial competition will stimulate the stagnant European rocketry industry, shifting away from traditional government-led procurement models (geo-return).",
    tags_en: ["Isar Aerospace", "Spectrum", "European Space Industry", "Commercial Launch", "Low Earth Orbit"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/09/rocket-report-europe-joins-the-commercial-launch-club-a-ravn-x-sighting", lang: "EN" }
    ]
  },
  {
    id: "20260911-11911",
    trackers: ["os"],
    category: "重點關注",
    title: "EuroPython 2026 大會影片上線：涵蓋波蘭克拉科夫的技術分享與回顧",
    summary: "本次文章宣布 EuroPython 2026 大會的相關影片已全部上線。該次會議於波蘭克拉科夫舉行，時間為 7 月 13 日至 7 月 19 日。影片內容包含所有技術分享的完整錄影，以及由會議主辦方提供的活動回顧影片。這類內容主要為技術社群的知識分享與產業趨勢討論，對於 Python 開發者和相關技術人員具有參考價值。由於原文僅為活動公告，未提及任何安全漏洞、受影響產品或修補建議，因此不涉及資安風險分析。",
    tags: ["EuroPython", "Python", "技術會議", "知識分享"],
    title_en: "EuroPython 2026 Conference Videos Released: Covering Technical Presentations and Reviews from Kraków, Poland",
    summary_en: "This article announces that all videos from the EuroPython 2026 conference are now available. The conference was held in Kraków, Poland, from July 13th to July 19th. The video content includes full recordings of all technical presentations, as well as an event recap provided by the organizers. This type of content is primarily focused on knowledge sharing within the technical community and industry trend discussions, making it valuable for Python developers and related technical personnel. Since the original source is merely an event announcement and does not mention any security vulnerabilities, affected products, or patch recommendations, it does not involve cybersecurity risk analysis.",
    tags_en: ["EuroPython", "Python", "Technical Conference", "Knowledge Sharing"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1093825", lang: "EN" }
    ]
  },
  {
    id: "20260911-11931",
    trackers: ["os"],
    category: "重點關注",
    title: "在 Intel Wildcat Lake 平台上，比較 Windows 11、CachyOS 與 Ubuntu 26.04 LTS 的效能表現",
    summary: "本文針對一款搭載 Intel Core 3 304 Wildcat Lake 處理器、配備 8GB LPDDR5-6400 記憶體和 256GB NVMe SSD 的 CHUWI UniBook 筆電，進行了三種作業系統的效能比較。測試對象包括預裝的 Microsoft Windows 11 Pro、滾動發行版的 CachyOS，以及 Ubuntu 26.04 LTS。這三種作業系統在進行各種工作負載的基準測試時，被比較在低階硬體配置下的表現差異。文章旨在展示在非頂級硬體環境下，不同作業系統（Windows 與 Linux）的實際運作效能與優劣。",
    tags: ["Windows 11", "Ubuntu 26.04 LTS", "CachyOS", "Intel Wildcat Lake", "效能比較", "硬體基準測試"],
    title_en: "Performance Comparison of Windows 11, CachyOS, and Ubuntu 26.04 LTS on the Intel Wildcat Lake Platform",
    summary_en: "This article details a performance comparison of three operating systems conducted on a CHUWI UniBook laptop equipped with an Intel Core 3 304 Wildcat Lake processor, 8GB LPDDR5-6400 memory, and a 256GB NVMe SSD. The tested operating systems include the pre-installed Microsoft Windows 11 Pro, the rolling release CachyOS, and Ubuntu 26.04 LTS. The three operating systems were compared in their performance differences across various workloads during benchmark testing on this lower-end hardware configuration. The article aims to demonstrate the practical operational performance and relative merits of different operating systems (Windows vs. Linux) in non-high-end hardware environments.",
    tags_en: ["Windows 11", "Ubuntu 26.04 LTS", "CachyOS", "Intel Wildcat Lake", "Performance Comparison", "Hardware Benchmark"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/wildcat-lake-windows-linux", lang: "EN" }
    ]
  },
  {
    id: "20260911-11933",
    trackers: ["os"],
    category: "重點關注",
    title: "Mesa開發者加入Arm：專注於PanVK與Panfrost，推動Mali圖形驅動程式上游開發",
    summary: "資深Mesa 3D圖形驅動程式開發者 Erik Faye-Lund 已從 Collabora 轉職至 Arm 公司。他將繼續在 Arm 內部工作，專注於上游的 PanVK Vulkan 驅動程式和 Panfrost Gallium3D 驅動程式的開發，這些驅動程式主要用於 Arm Mali 硬體。Erik 曾為 Mesa 堆疊的 Zink 等領域做出貢獻，特別是在 PanVK 和 Panfrost 方面。他表示，加入 Arm 的目標是確保 Arm 能在與上游的合作方面達到最佳狀態，並將繼續參與 X.Org 董事會（BoD）的職務。他離開 Collabora 的主要原因，則歸因於與公司高層在公司營運方向上的根本分歧，以及對擔任承包商（contractor）模式的厭倦。",
    tags: ["Mesa", "Arm", "PanVK", "Panfrost", "Vulkan", "Gallium3D", "Linux"],
    title_en: "Mesa Developer Joins Arm: Focusing on PanVK and Panfrost to Drive Mali Graphics Driver Upstream Development",
    summary_en: "Senior Mesa 3D graphics driver developer Erik Faye-Lund has transitioned from Collabora to Arm. He will continue working within Arm, focusing on the upstream development of the PanVK Vulkan driver and the Panfrost Gallium3D driver, which are primarily used for Arm Mali hardware. Erik previously contributed to areas within the Mesa stack, such as Zink, particularly in PanVK and Panfrost. He stated that his goal in joining Arm is to ensure Arm reaches optimal status in its upstream collaborations, and he will continue participating in the X.Org Board of Directors (BoD). His primary reason for leaving Collabora was attributed to fundamental disagreements with the company's senior management regarding the company's operational direction, as well as his weariness of the contractor model.",
    tags_en: ["Mesa", "Arm", "PanVK", "Panfrost", "Vulkan", "Gallium3D", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Erik-Faye-Lund-Mesa-Arm", lang: "EN" }
    ]
  },
  {
    id: "20260911-11945",
    trackers: ["os"],
    category: "重點關注",
    title: "研究開發 HarvestBench 評估 LLM 代理人：AI 模型在模擬環境中殺害動物的傾向",
    summary: "研究人員結合 Compassion Aligned Machine Learning (CaML) 和英國 Warwick大學，開發了名為 HarvestBench 的基準測試，旨在量化大型語言模型（LLM）代理人在模擬環境中對動物生命的「價值判斷」。該測試基於一個名為 Harvest Rush 的多代理人農場模擬遊戲，模擬 LLM 驅動的拖拉機在農場作業時，遇到野生或農場動物時的行為。測試的核心是評估 LLM 在「收割作物」的目標函數下，是否會選擇繞過或直接撞擊路障（包括動物）。研究發現，當加入「道德」判斷標準的提示詞時，模型表現出一定的克制，但當移除道德提示詞時，許多模型的殺害率會急劇飆升。例如，GPT-4o mini 的殺害率從 98.8% 甚至更高，顯示模型傾向於以完成任務為優先，而非考慮生命價值。研究人員警告，僅依賴提示詞來指導模型的道德行為是極其脆弱且不可靠的，強調需要更深層次的技術介入來確保 AI 系統的倫理安全。",
    tags: ["LLM", "AI 倫理", "HarvestBench", "代理人", "AI 安全", "GPT-4o mini"],
    title_en: "Developing HarvestBench to Evaluate LLM Agents: AI Models' Tendency to Kill Animals in Simulation",
    summary_en: "Researchers, in collaboration with Compassion Aligned Machine Learning (CaML) and the University of Warwick, developed a benchmark called HarvestBench. This benchmark aims to quantify the 'value judgment' of large language model (LLM) agents regarding animal life in simulated environments. The test is based on a multi-agent farm simulation game called Harvest Rush, which simulates the behavior of LLM-driven tractors encountering wild or farm animals while working on a farm. The core of the test is to evaluate whether the LLM, under the objective function of 'harvesting crops,' chooses to bypass or directly collide with obstacles (including animals). The study found that when prompts incorporating 'ethical' judgment standards were included, the models exhibited a degree of restraint. However, when these ethical prompts were removed, the kill rate of many models sharply increased. For instance, the kill rate of GPT-4o mini was 98.8% or even higher, indicating that the model tends to prioritize task completion over considering the value of life. The researchers warn that relying solely on prompts to guide a model's ethical behavior is extremely fragile and unreliable, emphasizing the need for deeper technical interventions to ensure the ethical safety of AI systems.",
    tags_en: ["LLM", "AI Ethics", "HarvestBench", "Agents", "AI Safety", "GPT-4o mini"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/09/11/ai-more-likely-to-kill-animals-if-it-saves-fuel-or-money/5295993", lang: "EN" }
    ]
  },
  {
    id: "20260911-11947",
    trackers: ["os"],
    category: "重點關注",
    title: "科學家提出利用酵母與明膠打造火星基地：低能耗的生物建材方案",
    summary: "香港科技大學與香港理工大學的研究團隊發表了一項創新方法，提出利用生物工程酵母和明膠（gelatin）來在火星上建造結構物。該技術的優勢在於它無需進行高能耗的加熱處理，將火星表土（regolith）轉化為建材。研究團隊將生物工程酵母、人工明膠水溶液與模擬火星表土混合，透過 3D 列印技術進行材料外推。當這種混合物暴露在乾燥、寒冷的火星大氣中時，會發生類似冷凍乾燥（freeze-drying）的過程。最終形成的材料呈現輕盈、多孔但極具強度，其抗壓和抗彎強度分別達到約 12 MPa 和 6 MPa，與低級地球混凝土相當。與傳統的熱處理方法相比，這種生物建材方案能大幅降低能源需求。雖然該研究展示了小型蜂巢狀結構的測試，但論文指出，實際的月球或火星棲息地還必須整合壓力維持、氣密性、機械支撐、熱調節、輻射屏蔽、防塵、可修復性及資源回收等複雜功能，可能需要結合酵母泡沫與傳統結構的混合架構。",
    tags: ["火星殖民", "生物建材", "酵母", "明膠", "3D 列印", "Regolith"],
    title_en: "Scientists Propose Using Yeast and Gelatin to Build Martian Bases: A Low-Energy Bio-Material Solution",
    summary_en: "A research team from The University of Hong Kong and The Hong Kong Polytechnic University has published an innovative method proposing the use of bio-engineered yeast and gelatin to construct structures on Mars. The advantage of this technology is that it does not require high-energy heating processes to convert Martian regolith into building materials. The research team mixed bio-engineered yeast, artificial gelatin solution, and simulated Martian regolith, and then used 3D printing technology to extrapolate the material. When this mixture is exposed to the dry, cold Martian atmosphere, a process similar to freeze-drying occurs. The resulting material is light, porous, yet extremely strong, achieving compressive and flexural strengths of approximately 12 MPa and 6 MPa, respectively, comparable to low-grade terrestrial concrete. Compared to traditional heat treatment methods, this bio-material solution significantly reduces energy requirements. Although the study demonstrated testing on small honeycomb structures, the paper notes that actual lunar or Martian habitats must also integrate complex functions such as pressure maintenance, airtightness, mechanical support, thermal regulation, radiation shielding, dustproofing, repairability, and resource recycling, potentially requiring a hybrid structure combining yeast foam with traditional structures.",
    tags_en: ["Mars colonization", "Bio-material", "Yeast", "Gelatin", "3D printing", "Regolith"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/09/11/mars-astronauts-could-live-in-houses-made-of-yeast-and-jello-say-scientists/5295931", lang: "EN" }
    ]
  },
  {
    id: "20260911-11948",
    trackers: ["os"],
    category: "重點關注",
    title: "模擬果蠅大腦進行加密貨幣交易：Stonkfly 專案展示神經網路與金融市場的結合",
    summary: "本文介紹 Stonkfly 專案，這是一個由 Coinbase 軟體工程師 Alex Wormuth 開發的模擬系統。該系統使用雄性果蠅的大腦和腹側神經索模型，將其與虛擬的加密貨幣交易環境連接。Stonkfly 的設計核心是將市場資訊輸入給模擬大腦，並將神經活動轉換為買賣交易決策。該專案是一個開源項目，其底層網路結構龐大，包含 166,700 個節點和超過 1.2 億個突觸接觸點。然而，專案文件明確指出，該模型使用工程化的強化訊號，而非模擬的疼痛受體，並且「尚未證明其能學會有利可圖的交易策略」或「進行實時資金的表現」。這項展示結合了生物學模型與金融投機，引發了關於人工智慧、生物神經網路在複雜決策制定場景應用討論。",
    tags: ["Stonkfly", "Coinbase", "果蠅大腦", "神經網路", "加密貨幣", "AI"],
    title_en: "Simulating Fruit Fly Brain for Cryptocurrency Trading: Stonkfly Project Demonstrates the Intersection of Neural Networks and Financial Markets",
    summary_en: "This article introduces the Stonkfly project, a simulated system developed by Coinbase software engineer Alex Wormuth. The system utilizes a model based on the male fruit fly brain and ventral nerve cord, connecting it to a virtual cryptocurrency trading environment. The core design of Stonkfly involves feeding market information into the simulated brain and converting resulting neural activity into buy/sell trading decisions. This project is an open-source initiative with a massive underlying network structure, containing 166,700 nodes and over 120 million synaptic contacts. However, the project documentation explicitly states that the model uses engineered signaling rather than simulated pain receptors, and has not yet proven its ability to learn profitable trading strategies or execute real-time fund trades. This demonstration combines biological modeling with financial speculation, sparking discussions about the application of artificial intelligence and bio-neural networks in complex decision-making scenarios.",
    tags_en: ["Stonkfly", "Coinbase", "Fruit Fly Brain", "Neural Network", "Cryptocurrency", "AI"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/09/11/disembodied-fruit-fly-brain-joins-the-crypto-speculation-swarm/5295914", lang: "EN" }
    ]
  },
  {
    id: "20260911-11949",
    trackers: ["os"],
    category: "重點關注",
    title: "前AT&T員工利用職務權限進行SIM卡交換詐騙，竊取客戶電話號碼與銀行資金",
    summary: "本案揭露一名前AT&T零售店員工Kenneth Carter，利用其系統存取權限，參與一場大規模的SIM卡交換詐騙案。該詐騙集團從2018年5月至2019年11月期間運作，目標是竊取客戶的電話號碼，以便攔截透過SMS傳送的雙因素驗證（2FA）代碼和密碼重設訊息。詐騙集團會偽裝成受害者，讓Carter將受害者號碼轉移到由犯罪分子控制的設備上，從而取得控制權。犯罪分子隨後利用這些代碼盜取受害者銀行帳戶的資金。法院文件顯示，該騙局涉及至少三名共犯，預計損失高達近60萬美元。雖然部分交易被銀行詐騙控制系統攔截，但仍有受害者實際損失超過99,500美元。法庭判決指出，Carter的行為是「參與這場犯罪」，並判處其有罪，這凸顯了內部員工權限濫用在資安犯罪中的嚴重風險，提醒企業必須嚴格審查員工的系統操作流程與權限範圍。",
    tags: ["AT&T", "SIM卡交換", "職權濫用", "詐騙", "2FA", "網路犯罪"],
    title_en: "Former AT&T Employee Used Job Authority for SIM Swap Fraud, Stealing Customer Phone Numbers and Bank Funds",
    summary_en: "This case reveals that Kenneth Carter, a former AT&T retail store employee, utilized his system access privileges to participate in a large-scale SIM swap fraud. The fraud operation ran from May 2018 to November 2019, targeting the theft of customer phone numbers to intercept two-factor authentication (2FA) codes and password reset messages sent via SMS. The fraud group would impersonate the victim, causing Carter to port the victim's number to a device controlled by the criminals, thereby gaining control. The criminals then used these codes to steal funds from the victim's bank accounts. Court documents show that the scam involved at least three accomplices, with estimated losses reaching nearly $600,000. Although some transactions were intercepted by bank fraud control systems, victims still incurred actual losses exceeding $99,500. The court ruling stated that Carter's actions constituted",
    tags_en: ["AT&T", "SIM Swap", "Abuse of Authority", "Fraud", "2FA", "Cybercrime"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/09/11/att-store-worker-gets-16-months-inside-for-sim-swap-side-hustle/5295898", lang: "EN" }
    ]
  },
  {
    id: "20260911-11953",
    trackers: ["eu_cra", "os", "security"],
    category: "重點關注",
    title: "歐盟《網路韌性法案》啟動強制性漏洞報告機制，要求製造商在 24 小時內通報活躍利用漏洞",
    summary: "歐盟《網路韌性法案》（Cyber Resilience Act, CRA）已啟動強制性漏洞報告義務。根據法案規定，所有在歐盟銷售具備數位元件的產品製造商，無論其所在地點為何，都必須向網路安全主管機關報告活躍利用的漏洞（actively exploited vulnerabilities）。製造商必須在知悉漏洞後的 24 小時內提交初步警告，並在 72 小時內提供詳細通知。對於嚴重事件，時間限制亦相同。此外，製造商還需在 14 天內提供最終報告，並必須通知受影響的用戶。若未能遵守這些核心責任，最高可處以高達 1,500 萬歐元或公司年營業額 2.5% 的罰款。此法案旨在提升整個歐盟的網路韌性，並迫使製造商建立更完善的軟體供應鏈追溯能力，未來甚至要求嵌入「安全設計與預設」（security by design and default）原則。",
    tags: ["Cyber Resilience Act", "歐盟", "漏洞報告", "供應鏈安全", "安全設計"],
    title_en: "EU Cyber Resilience Act Initiates Mandatory Vulnerability Reporting, Requiring Manufacturers to Report Actively Exploited Flaws Within 24 Hours",
    summary_en: "The EU Cyber Resilience Act (CRA) has activated mandatory vulnerability reporting obligations. Under the Act, all manufacturers of products with digital components sold in the EU, regardless of their location, must report actively exploited vulnerabilities to the relevant cybersecurity authorities. Manufacturers must submit a preliminary warning within 24 hours of becoming aware of the vulnerability, followed by a detailed notification within 72 hours. For severe incidents, the time limits remain the same. Furthermore, manufacturers must provide a final report within 14 days and must notify affected users. Failure to comply with these core responsibilities can result in fines of up to €15 million or 2.5% of the company's annual turnover. This Act aims to enhance the overall cyber resilience of the EU and forces manufacturers to establish more robust software supply chain traceability, eventually requiring the embedding of 'security by design and default' principles.",
    tags_en: ["Cyber Resilience Act", "EU", "Vulnerability Reporting", "Supply Chain Security", "Security by Design"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/11/eus-cyber-resilience-act-starts-the-24-hour-vulnerability-clock/5295821", lang: "EN" }
    ]
  },
  {
    id: "20260911-11954",
    trackers: ["os"],
    category: "重點關注",
    title: "英國工會總會呼籲政府：AI導入職場需賦予員工協商權，確保權益與利益分配",
    summary: "英國工會總會（TUC）在一封信函中，呼籲英國政府在推動人工智慧（AI）技術進入職場時，必須賦予員工更大的發言權和協商權。TUC指出，政府目前推動AI的策略，雖然承認AI的變革性，但缺乏一套實際的、讓員工能參與決定和受益的計畫。工會主張，員工應有權利就AI的引入，包括可能影響工作或工作條件的演算法和監控技術，進行協商。TUC強調，這並非要求完全禁止AI，而是要求企業將員工視為利益相關者（stakeholders），而非僅為追求短期利潤而被最小化的生產投入。工會警告，若政府只關注AI帶來的生產力，而忽略了員工的權益，可能會導致社會不公，並指出北歐國家在AI應用高水平的關鍵因素，正是員工擁有塑造技術的結構性力量。TUC總結，若要讓AI成為經濟增長引擎，必須確保人類勞動者也能參與其中，否則AI帶來的衝擊將可能被極右翼勢力利用。",
    tags: ["TUC", "人工智慧", "AI 倫理", "勞工權益", "英國政府", "職場變革"],
    title_en: "UK Trade Union Congress Calls on Government: AI Integration in Workplace Requires Employee Consultation Rights to Ensure Rights and Benefit Distribution",
    summary_en: "The Trades Union Congress (TUC) has called on the UK government, in a letter, that when promoting the integration of Artificial Intelligence (AI) technology into the workplace, employees must be granted greater voice and consultation rights. The TUC points out that while the government's current AI strategy acknowledges AI's transformative nature, it lacks a practical plan that allows employees to participate in decisions and benefit from the changes. The union argues that employees must have the right to consult on the introduction of AI, including algorithms and monitoring technologies that may affect their jobs or working conditions. The TUC emphasizes that this is not a call for a complete ban on AI, but rather a demand that companies treat employees as stakeholders, rather than merely minimizing them as inputs for short-term profit. The union warns that if the government focuses solely on AI-driven productivity while ignoring employee rights, it could lead to social injustice, pointing out that the key factor in Nordic countries' high level of AI application is the structural power employees have to shape the technology. The TUC concludes that for AI to become an engine of economic growth, human workers must be ensured participation; otherwise, the impact of AI could be exploited by far-right forces.",
    tags_en: ["TUC", "Artificial Intelligence", "AI Ethics", "Labor Rights", "UK Government", "Workplace Transformation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/public-sector/2026/09/11/union-body-tells-uk-government-workers-must-get-a-say-before-ai-clocks-in/5295806", lang: "EN" }
    ]
  },
  {
    id: "20260911-11955",
    trackers: ["os"],
    category: "重點關注",
    title: "Digital Research GEM 環境移植至 Linux：Tomaž Štih 重現經典圖形介面",
    summary: "本文介紹了 GEM（Graphics Environment）圖形介面環境的現代化移植版本「GEM for Linux」。GEM 是 Digital Research 公司早期為 PC 相容機設計的圖形環境之一，曾與 Amstrad PC1512 等機型捆綁。該移植版本由開發者 Tomaž Štih 創建，它是一個基於 Atari ST 圖形桌面的移植，並結合了 FreeGEM 的開源代碼。GEM 曾是早期 PC 兼容機的 GUI 典範，但其歷史經歷了與 Apple 的法律糾紛，導致其功能曾被限制。FreeGEM 社群自 1999 年以來持續增強該環境，恢復了早期被移除的功能。GEM for Linux 透過 SDL2 模擬器（Rasta framebuffer emulator）在 Linux 上運行，展示了經典 GUI 在現代作業系統上的復興。雖然這項工作令人振奮，但作者指出，這不太可能取代 Wayland 或開啟新的 Linux 發展時代，但它展示了對早期計算機介面技術的持續熱情。",
    tags: ["GEM", "Digital Research", "Linux", "FreeGEM", "GUI", "Atari ST"],
    title_en: "Digital Research GEM Environment Ported to Linux: Tomaž Štih Revives Classic Graphical Interface",
    summary_en: "This article introduces \"GEM for Linux,\" a modernized port of the GEM (Graphics Environment) graphical interface. GEM was one of the graphical environments designed by Digital Research for PC compatible machines, and was once bundled with models like the Amstrad PC1512. This port was created by developer Tomaž Štih; it is a port based on the Atari ST graphical desktop, combined with FreeGEM's open-source code. GEM was once a GUI standard for early PC compatible machines, but its history involved legal disputes with Apple, which led to functional limitations. The FreeGEM community has continuously enhanced this environment since 1999, restoring features that were previously removed. GEM for Linux runs on Linux using the SDL2 emulator (Rasta framebuffer emulator), demonstrating the revival of a classic GUI on modern operating systems. While this work is exciting, the author notes that it is unlikely to replace Wayland or usher in a new era of Linux development, but it does demonstrate a continued passion for early computing interface technologies.",
    tags_en: ["GEM", "Digital Research", "Linux", "FreeGEM", "GUI", "Atari ST"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/09/11/digital-researchs-gem-opens-a-new-window-on-linux/5295546", lang: "EN" }
    ]
  },
  {
    id: "20260911-11959",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "微軟宣布 Rust 成為內部 Tier One 級語言，加速其在 Windows 核心與開發生態系統的採用",
    summary: "微軟在年度 RustConf 大會上宣布，Rust 語言已提升至「Tier One」級別，與 C++, C# 和 TypeScript 並列為公司內部開發的最佳支援語言。此舉顯示微軟正大力推動 Rust 融入其軟體開發生命週期。Rust 語言最初由 Mozilla 開發，旨在提供高性能且能防止記憶體錯誤的特性，特別適合取代 C/C++ 等傳統語言中容易出現的記憶體漏洞。微軟已將 Rust 應用於超過 100 個專案儲存庫，並在 M365 核心服務（如 Outlook、Word、Excel、OneDrive、SharePoint）和 Copilot 技術堆棧中大量使用。為實現更深度的整合，微軟甚至開發了 `rustc_codegen_utc`，將 Rust 編譯器直接連接到 MSVC 的內部工具鏈，實現了 Rust 和 C++ 在 Windows 上的統一代碼生成平台。此舉對於應對 Windows 補丁週（Patch Tuesday）後大量出現的 C/C++ 記憶體漏洞（約 70% 的 Windows CVE 屬於此類）具有重大意義，預計將大幅提升 Windows 核心的安全性。",
    tags: ["Microsoft", "Rust", "Windows", "C++", "M365", "CVE"],
    title_en: "Microsoft Declares Rust as Internal Tier One Language, Accelerating Adoption in Windows Core and Development Ecosystem",
    summary_en: "At the annual RustConf conference, Microsoft announced that the Rust language has been elevated to 'Tier One' status, ranking alongside C++, C# and TypeScript as the company's preferred internal development language. This move indicates Microsoft's strong push to integrate Rust into its software development lifecycle. Originally developed by Mozilla, Rust is designed to provide high performance while preventing memory errors, making it particularly suitable for replacing traditional languages like C/C++, which are prone to memory vulnerabilities. Microsoft has already applied Rust to over 100 project repositories and utilizes it extensively within the M365 core services (such as Outlook, Word, Excel, OneDrive, and SharePoint) and the Copilot technology stack. To achieve deeper integration, Microsoft even developed `rustc_codegen_utc`, directly connecting the Rust compiler to the MSVC internal toolchain, thereby establishing a unified code generation platform for both Rust and C++ on Windows. This development is highly significant for addressing the numerous C/C++ memory vulnerabilities that appear after Windows Patch Tuesday (approximately 70% of Windows CVEs belong to this category), and is expected to significantly enhance the security of the Windows core.",
    tags_en: ["Microsoft", "Rust", "Windows", "C++", "M365", "CVE"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732", lang: "EN" }
    ]
  },
  {
    id: "20260911-11960",
    trackers: ["os"],
    category: "重點關注",
    title: "Oracle 宣布 AI 將強化應用程式業務，預計推出「Agentic AI Accelerator」縮短 SaaS 部署週期",
    summary: "Oracle 在 2027 財年第一季財報電話會議上，強調人工智慧（AI）不會取代現有的應用程式套件，而是作為加速器來增強其業務。資深副執行長 Mike Sicilia 指出，AI 代理（AI agents）能夠執行組織既有的工作流程和業務規則，讓員工從執行流程轉變為監督代理、解決例外情況和應用人類判斷。Oracle 預計在十月推出「agentic AI accelerator」，聲稱能將 SaaS 部署週期從數年縮短至數月，再到數週。此外，Oracle 的雲端業務（IaaS）表現強勁，年收入增長了 60%，達到 116 億美元。公司同時指出，AI 基礎設施的 GPU 需求持續強勁，且客戶願意支付溢價。儘管公司在資料中心建設方面面臨複雜性，但仍預測全年每股盈餘將上漲 5 美分至 8.10 美元，年收入至少達 900 億美元。",
    tags: ["Oracle", "AI", "SaaS", "IaaS", "Agentic AI", "雲端計算"],
    title_en: "Oracle Announces AI to Enhance Application Business, Plans 'Agentic AI Accelerator' to Shorten SaaS Deployment Cycles",
    summary_en: "During its Q1 FY2027 earnings call, Oracle emphasized that Artificial Intelligence (AI) will not replace existing application suites but will instead serve as an accelerator to enhance their functionality. Senior Vice President Mike Sicilia pointed out that AI agents can execute existing organizational workflows and business rules, allowing employees to shift from executing processes to supervising agents, resolving exceptions, and applying human judgment. Oracle plans to launch the 'agentic AI accelerator' in October, claiming it can reduce the SaaS deployment cycle from years to months, and eventually to weeks. Furthermore, Oracle's cloud business (IaaS) performed strongly, with annual revenue growing 60% to $11.6 billion. The company also noted that demand for GPU AI infrastructure remains robust, and customers are willing to pay a premium. Despite facing complexities in data center construction, the company forecasts full-year earnings per share to rise by $0.05 to $8.10, with annual revenue reaching at least $90 billion.",
    tags_en: ["Oracle", "AI", "SaaS", "IaaS", "Agentic AI", "Cloud Computing"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/09/11/oracle-says-ai-will-save-it-from-the-saaspocalypse-not-bring-it-on/5295736", lang: "EN" }
    ]
  },
  {
    id: "20260911-11969",
    trackers: ["os"],
    category: "重點關注",
    title: "iPhone Duo 疑似抄襲 Surface Duo 概念與行銷策略，從名稱到多工模式高度相似",
    summary: "本文分析了 Apple 最新推出的 iPhone Duo，指出其在產品概念、設計細節和行銷敘事上，與 Microsoft 於 2020 年推出的 Surface Duo 存在高度相似性。文章指出，從產品的「Duo」命名、雙螢幕/多工處理模式（如 Book、Compose、Tent 模式的概念）、到其折疊式設計的「護照尺寸」外觀，許多核心概念都與 Surface Duo 的原始展示高度重疊。雖然 iPhone Duo 在硬體規格上有所不同（例如內外螢幕配置），但其強調的「結合兩種產品的實用性」的軟體推廣思路，被認為是直接借用了 Surface Duo 的市場定位。這篇分析更側重於產業趨勢和設計概念的演變，而非特定漏洞或安全修補，提醒業界關注跨平台產品在概念層面的技術借鑒與市場競爭。",
    tags: ["iPhone Duo", "Surface Duo", "Apple", "Microsoft", "折疊手機", "產品設計"],
    title_en: "iPhone Duo Suspected of Copying Surface Duo's Concept and Marketing Strategy, From Naming to Multitasking Mode",
    summary_en: "This article analyzes Apple's newly launched iPhone Duo, pointing out its high degree of similarity to the Surface Duo, which Microsoft introduced in 2020, in terms of product concept, design details, and marketing narrative. The article notes that many core concepts highly overlap with the original presentation of the Surface Duo, ranging from the product's 'Duo' naming, the dual-screen/multitasking modes (such as the concepts of Book, Compose, and Tent modes), to its 'passport-sized' foldable design. Although the iPhone Duo has different hardware specifications (for example, internal and external screen configurations), its software promotion idea emphasizing the 'practicality of combining two products' is considered to directly borrow from the market positioning of the Surface Duo. This analysis focuses more on industry trends and the evolution of design concepts, rather than specific vulnerabilities or security patches, reminding the industry to pay attention to technical borrowing and market competition in cross-platform products.",
    tags_en: ["iPhone Duo", "Surface Duo", "Apple", "Microsoft", "Foldable Phone", "Product Design"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/11/iphone-duos-photos-could-pass-for-microsofts-surface-duo-ads-from-2020", lang: "EN" }
    ]
  },
  {
    id: "20260911-12006",
    trackers: ["security"],
    category: "前瞻技術",
    title: "SpiderSilk推出AI掃描工具，主動偵測企業網際網路暴露資產與零日漏洞",
    summary: "資安新創公司 SpiderSilk 推出利用人工智慧（AI）的掃描工具，旨在主動搜尋企業在網際網路上的暴露資產、洩露資料和零日漏洞。該工具只需公司名稱，無需客戶提供 IP 位址或網域清單，即可掃描數十億個 IP 位址。其核心功能是模擬外部駭客視角，利用 AI 進行情境化分析，找出企業未曾預期暴露給公眾的系統、憑證或敏感資料。例如，它能偵測到在程式碼平台（如 GitHub）中意外洩露的內部系統登入頁面或資料庫索引。SpiderSilk 的旗艦產品 Resonance 能夠分析和過濾這些資料，並將風險情境化，幫助企業在被駭客利用前採取修補或矯正措施。此外，其 AI 代理平台 SilkRunner 甚至可以建立工作流程，協助驗證和應用修補程式。這項技術強調了從被動應對轉向主動預防的趨勢，讓 CISO 能更有效地管理外部威脅。",
    tags: ["SpiderSilk", "AI", "Resonance", "零日漏洞", "外部威脅", "資安掃描"],
    title_en: "SpiderSilk Launches AI Scanning Tool to Proactively Detect Corporate Internet-Exposed Assets and Zero-Day Vulnerabilities",
    summary_en: "Cybersecurity startup SpiderSilk has launched an AI-powered scanning tool designed to proactively search for corporate internet-exposed assets, leaked data, and zero-day vulnerabilities. The tool requires only a company name, eliminating the need for clients to provide IP addresses or domain lists, allowing it to scan billions of IP addresses. Its core function is to simulate an external hacker's perspective, using AI for contextual analysis to identify systems, credentials, or sensitive data unexpectedly exposed to the public. For instance, it can detect internal system login pages or database indices accidentally leaked on code platforms (such as GitHub). SpiderSilk's flagship product, Resonance, analyzes and filters this data, contextualizing the risk to help enterprises take remediation or corrective measures before they are exploited by hackers. Furthermore, its AI agent platform, SilkRunner, can even build workflows to assist with validating and applying patches. This technology underscores the trend of shifting from passive response to proactive prevention, enabling CISOs to manage external threats more effectively.",
    tags_en: ["SpiderSilk", "AI", "Resonance", "Zero-Day Vulnerabilities", "External Threats", "Cybersecurity Scanning"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/endpoint-security/spidersilk-hunts-external-threats-ai-scanning", lang: "EN" }
    ]
  },
  {
    id: "20260911-11822",
    trackers: ["security"],
    category: "產業動態",
    title: "供應鏈安全警訊：韓系大企業面臨供應商層級的資安攻擊風險",
    summary: "近期韓國多家大型企業的供應鏈，包括汽車、半導體、能源等產業，持續面臨供應鏈攻擊的威脅。多起事件顯示，攻擊者正鎖定大型企業的合作夥伴、分公司或小型供應商，從而竊取製造、技術或客戶的敏感資訊。例如，A公司（現代汽車主要供應商）曾遭攻擊，雖然已向KISA報案並聲稱已封鎖攻擊路徑，但其數據仍持續在暗網公開。另有案例指出，工業氣體製造商Air Liquide Korea的舊版伺服器遭受勒索軟體侵害，導致部分個人資訊外洩。這些事件凸顯了大型企業的「弱環節」風險，即小型供應商和合作夥伴的資安防護能力相對薄弱。專家警告，隨著AI技術使攻擊自動化、頻率增加，企業必須將資安管理範圍擴展至整個供應鏈，特別是管理那些最容易成為攻擊目標的弱環節。",
    tags: ["供應鏈安全", "資安攻擊", "現代汽車", "A公司", "KISA", "勒索軟體", "Air Liquide Korea"],
    title_en: "Supply Chain Security Alert: Korean Conglomerates Face Cyberattack Risks at the Supplier Level",
    summary_en: "Recently, the supply chains of several large Korean corporations, including sectors such as automotive, semiconductor, and energy, have continuously faced the threat of supply chain attacks. Multiple incidents show that attackers are targeting the partners, subsidiaries, or small suppliers of large corporations to steal sensitive manufacturing, technical, or customer information. For example, Company A (a major supplier to Hyundai Motor) was attacked; although it reported the incident to KISA and claimed to have blocked the attack path, its data remains publicly available on the dark web. Another case pointed out that the older server of industrial gas manufacturer Air Liquide Korea was compromised by ransomware, leading to the leakage of some personal information. These incidents highlight the 'weak link' risk for large corporations, which is the relatively weak cybersecurity defense capability of small suppliers and partners. Experts warn that as AI technology automates attacks and increases frequency, companies must expand their cybersecurity management scope across the entire supply chain, especially managing the weak links that are most likely to become attack targets.",
    tags_en: ["Supply Chain Security", "Cyberattack", "Hyundai Motor", "Company A", "KISA", "Ransomware", "Air Liquide Korea"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145781", lang: "EN" }
    ]
  },
  {
    id: "20260911-11823",
    trackers: ["security"],
    category: "產業動態",
    title: "AI 驅動網路攻擊與供應鏈風險：企業應強化威脅情報整合與預防能力",
    summary: "隨著生成式 AI 的應用，網路攻擊的複雜性與速度大幅提升，攻擊者已將 AI 融入從釣魚郵件到漏洞挖掘、攻擊代碼編寫的整個攻擊鏈。這使得傳統的單點防禦體系難以應對，企業面臨的挑戰包括攻擊表面擴大（如雲端、SaaS、影子 AI）、供應鏈風險，以及國家級 APT 組織的活動加劇。\n\n威脅情報（Threat Intelligence, TI）的重要性因此空前提升。TI 不僅是單純的入侵指標（IoC）列表，更應是提供「情境（Context）」和「可執行性（Actionability）」的知識庫，幫助組織從海量數據中篩選出真正具影響力的威脅。\n\n市場趨勢顯示，TI 的應用正從單純的「事後應對」轉向「主動預防」。這要求 TI 必須與 SIEM、SOAR、EDR 等核心安全系統深度整合，形成 XDR/MDR 等整合平台。此外，隨著非人類身份（API Key、Token）成為主要攻擊目標，以及 AI Agent 的崛起，安全防禦的重點也轉向了對這些新型攻擊向量的監控與預測。企業必須建立能夠追蹤整個供應鏈、識別影子 IT/AI 資源，並提供高度相關、可操作的威脅情報能力，才能實現從被動防禦到主動預防的轉型。",
    tags: ["威脅情報", "生成式 AI", "APT", "供應鏈安全", "XDR", "SOAR"],
    title_en: "AI-Driven Cyber Attacks and Supply Chain Risks: Enterprises Must Strengthen Threat Intelligence Integration and Preventive Capabilities",
    summary_en: "With the application of generative AI, the complexity and speed of cyber attacks have significantly increased. Attackers have integrated AI into the entire attack chain, from phishing emails to vulnerability discovery and attack code generation. This makes traditional, single-point defense systems difficult to manage, and enterprises face challenges including expanded attack surfaces (such as cloud, SaaS, and shadow AI), supply chain risks, and intensified activities from nation-state APT groups.\n\nThe importance of Threat Intelligence (TI) has therefore risen unprecedentedly. TI should not merely be a list of Indicators of Compromise (IoC); rather, it must be a knowledge base that provides 'Context' and 'Actionability,' helping organizations filter out truly impactful threats from massive amounts of data.\n\nMarket trends show that the application of TI is shifting from mere 'reactive response' to 'proactive prevention.' This requires TI to be deeply integrated with core security systems like SIEM, SOAR, and EDR, forming integrated platforms such as XDR/MDR. Furthermore, as non-human identities (API Keys, Tokens) become primary attack targets, and AI Agents emerge, the focus of security defense is shifting toward monitoring and predicting these new attack vectors. Enterprises must establish capabilities that can track the entire supply chain, identify shadow IT/AI resources, and provide highly relevant, actionable threat intelligence to achieve a transition from passive defense to proactive prevention.",
    tags_en: ["Threat Intelligence", "Generative AI", "APT", "Supply Chain Security", "XDR", "SOAR"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145799", lang: "EN" }
    ]
  },
  {
    id: "20260911-11827",
    trackers: ["security"],
    category: "產業動態",
    title: "瞄準GTA 6預熱玩家的惡意攻擊：四種惡意程式竊取資料並進行檔案破壞",
    summary: "安全公司 Huntress 報告，駭客正在利用《俠盜列車：罪惡生活 6》（GTA 6）的熱度，散播包含四種惡意程式的偽裝安裝檔案。這些惡意檔案透過偽造的搜尋結果、遊戲社群、P2P 網站和社群媒體傳播。當使用者點擊安裝程式後，會看到偽裝的錯誤訊息，讓使用者誤以為安裝失敗，此時惡意程式已悄悄植入系統。\n\n這四種惡意程式包括：NJRAT（可進行鍵盤輸入記錄、螢幕截圖、遠端控制等）；DCRAT（監控視窗、竊取剪貼簿、修改註冊表並修復 Hosts 檔案，以阻斷與安全服務的通訊）；Mercurial Grabber（收集瀏覽器密碼、Cookie、通訊軟體 Token、系統資訊等，並透過 Discord Webhook 傳輸）；以及 Chaos 勒索軟體（主要功能是破壞檔案，而非勒索）。\n\n攻擊的目標是個人資料夾、共享儲存空間、遊戲資料和雲端同步資料。若受害者擁有管理員權限，損失將更為嚴重，惡意程式甚至會清除系統的復原點。從俄語的提示和勒索訊息來看，此次攻擊主要鎖定俄語區的玩家。",
    tags: ["GTA 6", "惡意程式", "NJRAT", "DCRAT", "Mercurial Grabber", "勒索軟體", "資安威脅"],
    title_en: "Malicious Attacks Targeting GTA 6 Pre-Launch Players: Four Malware Types Steal Data and Corrupt Files",
    summary_en: "Security company Huntress reported that hackers are exploiting the hype surrounding Grand Theft Auto VI (GTA 6) by distributing fake installer files containing four types of malware. These malicious files are spread through fake search results, gaming communities, P2P websites, and social media. When a user clicks the installer, they are presented with a fake error message, leading the user to believe the installation failed, while the malware has already quietly infiltrated the system.\n\nThe four types of malware include: NJRAT (capable of keystroke logging, screen capturing, and remote control); DCRAT (monitoring windows, stealing clipboard data, modifying the registry, and repairing Hosts files to block communication with security services); Mercurial Grabber (collecting browser passwords, cookies, communication software tokens, and system information, and transmitting them via Discord Webhook); and Chaos ransomware (whose primary function is file corruption, rather than actual ransomware encryption).\n\nThe attack targets personal folders, shared storage spaces, game data, and cloud synchronization data. The loss is more severe if the victim has administrator privileges, as the malware can even clear the system's restore points. Based on the Russian prompts and ransom messages, this attack primarily targets players in the Russian-speaking region.",
    tags_en: ["GTA 6", "Malware", "NJRAT", "DCRAT", "Mercurial Grabber", "Ransomware", "Cybersecurity Threats"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145794", lang: "EN" }
    ]
  },
  {
    id: "20260911-11826",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "AI時代下的資安實務挑戰：專家建議強化基礎防禦能力與協作模式",
    summary: "本次討論聚焦於AI快速發展背景下，資安實務人員如何應對工作職能的轉變與日益複雜的自動化威脅。專家指出，面對激增的自動化威脅和供應鏈攻擊，單純導入新技術不如強化基礎的防禦能力（如Detection Engineering層設計）更為關鍵。在數據治理方面，由於AI模型學習常涉及客戶數據，專家強調必須建立嚴謹的數據控制機制，特別是針對「Shadow AI」等未經授權的工具使用，需要實施從源頭的控制。此外，面對AI帶來的職能危機，專家建議實務人員應將AI視為「協作夥伴」（Co-worker），提升的是綜合的邏輯問題定義能力和系統脈絡的理解力，而非單純的技術操作。修補建議包括建立中央化的工具分發中心，並加強資安與個資保護部門的協作，確保數據處理的完整生命週期控制。",
    tags: ["AI", "資安實務", "Shadow AI", "數據治理", "Detection Engineering", "資安威脅"],
    title_en: "Cybersecurity Practical Challenges in the AI Era: Experts Advise Strengthening Foundational Defenses and Collaborative Models",
    summary_en: "This discussion focuses on how cybersecurity practitioners can address the transformation of their job roles and the increasingly complex automated threats against the backdrop of rapid AI development. Experts point out that facing surging automated threats and supply chain attacks, simply adopting new technologies is less critical than strengthening foundational defense capabilities (such as Detection Engineering layer design). Regarding data governance, since AI model training often involves customer data, experts emphasize the necessity of establishing rigorous data control mechanisms, especially for unauthorized tool usage like \"Shadow AI,\" requiring control at the source. Furthermore, facing the professional challenges brought by AI, experts suggest that practitioners should view AI as a \"co-worker,\" enhancing comprehensive logical problem definition skills and system context understanding, rather than mere technical operation. Remedial suggestions include establishing a centralized tool distribution center and strengthening collaboration between cybersecurity and personal data protection departments to ensure complete lifecycle control over data processing.",
    tags_en: ["AI", "Cybersecurity Practices", "Shadow AI", "Data Governance", "Detection Engineering", "Cybersecurity Threats"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145791", lang: "EN" }
    ]
  },
  {
    id: "20260911-11829",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "ISEC 2026最佳演講者頒獎：探討AI驅動的網路威脅與自律安全策略",
    summary: "國際安全大會（ISEC 2026）於首爾舉行，主題為「以AI實現自律安全的未來」，吸引了大量專業人士、管理層和實務人員參與。本次活動展示了資訊安全產業的最新趨勢與知識。在「最佳演講者獎」頒獎典禮上，多位受邀者分享了關於AI時代的深度洞察。其中，YAH技術本部的金材善分享了「AI引發的攻擊與詐騙融合及整合應對策略」，深入分析了從入侵到數位詐騙（如Deepfake視訊會議詐騙、AI生成變種釣魚）的過程，並提出了基於情報的應對策略。Cloudflare的尹載卓則探討了「AI代理時代，安全邊界在哪裡？」的主題，指出了傳統SASE安全模型在AI擴散下的局限性，並分享了企業所需的AI安全政策與SASE基礎應對方案。Xbow的李元來總監強調了「AI時代的自律滲透測試」，強調了在實際服務環境中進行漏洞重現與驗證（Live-site Pentesting）的重要性，指出自動化驗證體系對於判斷實際風險和優先級至關重要。這些分享共同指引了業界應如何應對AI帶來的複雜網路威脅。",
    tags: ["ISEC 2026", "AI安全", "SASE", "滲透測試", "網路威脅", "數位詐騙"],
    title_en: "ISEC 2026 Best Speaker Award: Exploring AI-Driven Cyber Threats and Autonomous Security Strategies",
    summary_en: "The International Security Conference (ISEC 2026) was held in Seoul, focusing on the theme of 'The Future of Autonomous Security through AI,' attracting a large number of professionals, managers, and practitioners. The event showcased the latest trends and knowledge in the information security industry. During the 'Best Speaker Award' ceremony, several invited speakers shared deep insights into the AI era. Among them, Jaesun Kim from YAH Technology Headquarters presented on 'AI-Induced Attack and Fraud Convergence and Integrated Response Strategies,' deeply analyzing the process from intrusion to digital fraud (such as Deepfake video conference scams and AI-generated variant phishing), and proposing intelligence-based response strategies. Jaetuk Yoon of Cloudflare explored the topic, 'Where is the Security Boundary in the Age of AI Agents?' pointing out the limitations of traditional SASE security models under AI proliferation, and sharing the need for enterprise AI security policies and SASE foundational response solutions. Director Yeonrae Lee of Xbow emphasized 'Autonomous Penetration Testing in the AI Era,' stressing the importance of vulnerability reproduction and validation in actual service environments (Live-site Pentesting), and pointing out that automated validation systems are crucial for determining actual risk and priority. These presentations collectively guided the industry on how to respond to complex cyber threats brought about by AI.",
    tags_en: ["ISEC 2026", "AI Security", "SASE", "Penetration Testing", "Cyber Threats", "Digital Fraud"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145787", lang: "EN" }
    ]
  }
];
