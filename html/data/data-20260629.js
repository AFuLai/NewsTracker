// data-20260629.js — 2026-06-29
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-29"] = [
  {
    id: "20260629-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Palo Alto Unit 42追蹤中國駭客行動：鎖定東南亞政府與能源關鍵基礎設施",
    summary: "Palo Alto Networks的Unit 42追蹤到一個編號為CL-STA-1062的中國駭客攻擊行動，該行動的目標已延伸至東南亞的政府機關與能源關鍵基礎設施。研究指出，這批攻擊者與思科Talos先前揭露的UAT-7237行動源自同一批人，且活動時間可追溯至2022年3月。攻擊者在東南亞政府機關部署了可遠端下指令的網頁後門，並進行資料竊取與網路偵察。在能源關鍵基礎設施的受害案例中，攻擊者通常會先利用網頁應用程式弱點植入ASPX後門，執行系統命令，並下載SoftEther VPN元件。攻擊者還會利用惡意壓縮檔，透過合法簽章的執行檔（如chrome_setup.exe）誘騙使用者執行，進而讓.NET環境讀取惡意設定檔，下載並執行名為TinyRCT的Windows遠端控制木馬。TinyRCT是用C#撰寫，具備系統命令執行、檔案讀取、螢幕擷取等功能，並設有反分析機制。此行動屬於典型的APT攻擊，目標為關鍵基礎設施，建議相關機構應強化網頁應用程式安全、監控異常連線，並對可疑的執行檔執行行為提高警覺。",
    tags: ["Palo Alto Networks", "Unit 42", "CL-STA-1062", "東南亞", "能源關鍵基礎設施", "APT", "網頁後門"],
    title_en: "Palo Alto Unit 42 Tracks Chinese Hacker Activity: Targeting Southeast Asian Government and Energy Critical Infrastructure",
    summary_en: "Palo Alto Networks' Unit 42 has tracked a Chinese hacking campaign, designated CL-STA-1062, whose targets have expanded to government agencies and energy critical infrastructure in Southeast Asia. Research indicates that this group of attackers originates from the same source as the UAT-7237 campaign previously disclosed by Cisco Talos, with activity traceable back to March 2022. The attackers deployed remote command-and-control web backdoors in Southeast Asian government agencies, conducting data theft and network reconnaissance. In cases targeting energy critical infrastructure, the attackers typically first exploit web application vulnerabilities to implant ASPX backdoors, execute system commands, and download SoftEther VPN components. The attackers also utilize malicious compressed files, tricking users into executing them through legitimately signed executables (such as chrome_setup.exe). This process allows the .NET environment to read malicious configuration files, downloading and executing a Windows remote control Trojan named TinyRCT. TinyRCT is written in C# and possesses functionalities such as system command execution, file reading, and screen capture, and includes anti-analysis mechanisms. This activity constitutes a typical APT attack targeting critical infrastructure, and relevant organizations are advised to strengthen web application security, monitor for anomalous connections, and heighten vigilance regarding suspicious executable execution behavior.",
    tags_en: ["Palo Alto Networks", "Unit 42", "CL-STA-1062", "Southeast Asia", "Energy Critical Infrastructure", "APT", "Web Backdoor"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176945", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-002",
    trackers: ["security"],
    category: "重大事件",
    title: "Europol與微軟聯手打擊網路犯罪供應鏈：癱瘓惡意程式Amadey、StealC等基礎設施",
    summary: "歐洲刑警組織（Europol）近期發布了Operation Endgame的最新成果，與微軟等多國執法單位合作，成功破壞了多個惡意程式（如SocGholish、Amadey、StealC）背後的犯罪基礎設施。微軟強調，本次行動的重點已從單一惡意程式轉向整個網路攻擊的「組裝線」或供應鏈。攻擊者通常會同時使用Amadey來取得裝置存取權，再利用StealC竊取密碼和敏感資訊，這兩者構成了攻擊鏈的關鍵環節。微軟利用AI分析能力，將原本耗時的調查流程大幅縮短，並成功癱瘓了超過200個C2伺服器，阻止駭客控制受害電腦或竊取資料。此事件顯示，現代網路威脅已高度系統化，攻擊者依賴共享的基礎設施進行攻擊，建議企業應強化對整個攻擊鏈的監控與防禦，而非僅關注單一惡意程式。",
    tags: ["Europol", "微軟", "Operation Endgame", "Amadey", "StealC", "網路犯罪", "C2伺服器"],
    title_en: "Europol and Microsoft Collaborate to Combat Cybercrime Supply Chain: Disabling Malicious Infrastructure for Amadey and StealC",
    summary_en: "Europol recently released the latest findings from Operation Endgame, collaborating with Microsoft and multiple international law enforcement agencies to successfully dismantle the criminal infrastructure behind several malicious programs, including SocGholish, Amadey, and StealC. Microsoft emphasized that the focus of this operation has shifted from single malicious programs to the entire cyber attack 'assembly line' or supply chain. Attackers typically use Amadey to gain device access, and then utilize StealC to steal passwords and sensitive information; these two components form critical links in the attack chain. Microsoft leveraged AI analytics capabilities to significantly shorten the traditionally time-consuming investigation process, successfully disabling over 200 C2 servers and preventing hackers from controlling victim computers or exfiltrating data. This incident demonstrates that modern cyber threats are highly systematized, with attackers relying on shared infrastructure for their operations. It advises enterprises to strengthen monitoring and defense across the entire attack chain, rather than focusing solely on individual malicious programs.",
    tags_en: ["Europol", "Microsoft", "Operation Endgame", "Amadey", "StealC", "Cybercrime", "C2 Server"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176943", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-003",
    trackers: ["security"],
    category: "重大事件",
    title: "波蘭警方逮捕4名犯罪集團成員，揭露SIM Swap攻擊手法，竊取數百萬美元加密貨幣",
    summary: "波蘭中央網路犯罪局（CBZC）宣布，在美國聯邦調查局（FBI）和國土安全調查局（HSI）的協助下，成功逮捕了4名涉嫌從事SIM Swap（SIM卡置換）攻擊的犯罪集團成員。警方調查指出，該犯罪集團利用專業軟體和社交工程手法，入侵電信業者合作企業的資訊基礎設施及員工電子郵件，以竊取執行SIM Swap攻擊所需的敏感資料。SIM Swap攻擊的實質為非法將受害者手機門號轉移至攻擊者控制的SIM卡或eSIM，從而接管受害者門號。一旦取得門號控制權，攻擊者便能攔截受害者的SMS簡訊和電子郵件驗證訊息，進而登入或接管其加密貨幣交易所等帳號，並大量竊取數位資產。警方估計，此次竊取的贓款經由多個銀行帳戶、國際支付平臺及多幣別數位錢包轉移，總額超過數千萬波蘭幣（約500萬美元）。此事件凸顯了身份驗證機制（如雙重驗證）和電信基礎設施的重大安全風險，建議用戶應提高警覺，並考慮使用硬體金鑰或實體驗證方式，而非僅依賴SMS簡訊驗證。",
    tags: ["SIM Swap", "波蘭中央網路犯罪局", "FBI", "電信基礎設施", "加密貨幣", "社交工程"],
    title_en: "Polish Police Arrest 4 Crime Group Members, Exposing SIM Swap Attack Method and Stealing Millions of US Dollars in Cryptocurrency",
    summary_en: "The Polish Central Bureau of Cybercrime (CBZC) announced that, with assistance from the U.S. Federal Bureau of Investigation (FBI) and Homeland Security Investigations (HSI), they successfully arrested four members of a criminal group suspected of conducting SIM Swap attacks. Police investigations revealed that the criminal group utilized professional software and social engineering techniques to infiltrate the information infrastructure and employee emails of telecommunications carrier partners, in order to steal sensitive data required to execute SIM Swap attacks. A SIM Swap attack essentially involves illegally transferring a victim's mobile number to a SIM card or eSIM controlled by the attacker, thereby taking control of the victim's number. Once the attacker gains control of the number, they can intercept the victim's SMS messages and email verification messages, subsequently logging into or taking over accounts such as cryptocurrency exchanges, and stealing large amounts of digital assets. Police estimate that the stolen funds were transferred through multiple bank accounts, international payment platforms, and multi-currency digital wallets, totaling over tens of millions of Polish Złoty (approximately $5 million USD). This incident highlights significant security risks in identity verification mechanisms (such as two-factor authentication) and telecommunications infrastructure, advising users to increase vigilance and consider using hardware keys or physical verification methods, rather than relying solely on SMS verification.",
    tags_en: ["SIM Swap", "Polish Central Bureau of Cybercrime", "FBI", "Telecommunications Infrastructure", "Cryptocurrency", "Social Engineering"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176939", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-004",
    trackers: ["security"],
    category: "重大事件",
    title: "緬甸伊洛瓦底銀行（AYA Bank）舊版入口網站遭駭，客戶個資外洩引發勒索危機",
    summary: "緬甸主要私人銀行伊洛瓦底銀行（AYA Bank）於6月25日發布公告，證實其舊版應用程式入口網站曾遭未經授權存取，導致部分非財務性質的申請紀錄外洩。銀行強調，核心金融系統、AYA Pay支付系統以及信用卡管理系統均未與受影響的舊版網站直接連線，核心業務和財務資料安全無虞，所有金融服務持續正常運作。然而，後續有報導指出，駭客組織LAPSUS$聲稱已從該銀行竊取超過120 GB的資料，包含大量客戶個資，並以此威脅銀行支付贖金，否則將在特定日期前公開至暗網。銀行提醒客戶提高警覺，防範詐騙電話或釣魚郵件，並應注意資安風險。",
    tags: ["AYA Bank", "LAPSUS$", "個資外洩", "勒索軟體", "緬甸", "銀行資安"],
    title_en: "Myanmar's Ayarwady Bank (AYA Bank) Old Website Hacked, Customer Data Leak Triggers Ransomware Crisis",
    summary_en: "Ayarwady Bank (AYA Bank), a major private bank in Myanmar, issued a statement on June 25th confirming that its legacy application website was subjected to unauthorized access, resulting in the leakage of some non-financial application records. The bank emphasized that its core financial systems, AYA Pay payment system, and credit card management system were not directly connected to the affected legacy website, ensuring the safety of core business and financial data, and that all financial services continued to operate normally. However, subsequent reports indicated that the hacking group LAPSUS$ claimed to have stolen over 120 GB of data from the bank, including a large amount of customer personal information, and used this to threaten the bank with a ransom payment, warning that the data would be leaked onto the dark web before a specific date. The bank advised customers to raise their awareness, guard against fraudulent calls or phishing emails, and pay attention to cybersecurity risks.",
    tags_en: ["AYA Bank", "LAPSUS$", "Data Leak", "Ransomware", "Myanmar", "Bank Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176917", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-005",
    trackers: ["os"],
    category: "Linux",
    title: "Git 2.55.0 發布：新增 fsmonitor 守護程序與歷史紀錄指令，強化 Linux 系統整合",
    summary: "Git 維護者 Junio Hamano 發布了 Git 2.55.0 版本。此版本整合了來自 100 位貢獻者的非合併提交，其中包含 33 位首次參與專案的貢獻者。主要的技術更新包括為 Linux 系統新增了 `fsmonitor` 守護程序（daemon），這能讓 Git 更好地監控檔案系統的變動。此外，版本也加入了用於實驗性追蹤的 `<tt>git history</tt>` 指令。這些更新提升了 Git 在 Linux 環境下的系統整合能力和歷史追蹤的精細度，有助於開發者更有效地管理版本控制流程。使用者應考慮升級至 2.55.0 或更高版本，以利用這些新的功能和穩定性改進。",
    tags: ["Git", "Git 2.55.0", "Linux", "fsmonitor", "版本控制", "開發工具"],
    title_en: "Git 2.55.0 Released: Adds fsmonitor Daemon and History Command, Enhancing Linux System Integration",
    summary_en: "Git maintainer Junio Hamano has released Git version 2.55.0. This version integrates unmerged commits from 100 contributors, including contributions from 33 first-time project participants. Key technical updates include the addition of an `fsmonitor` daemon for Linux systems, which allows Git to better monitor file system changes. Furthermore, the version introduces the `<tt>git history</tt>` command for experimental tracking. These updates enhance Git's system integration capabilities and history tracking granularity within Linux environments, helping developers manage version control workflows more effectively. Users are advised to consider upgrading to 2.55.0 or later to utilize these new features and stability improvements.",
    tags_en: ["Git", "Git 2.55.0", "Linux", "fsmonitor", "Version Control", "Development Tools"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1080188", lang: "EN" }
    ]
  },
  {
    id: "20260629-006",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 7.2-rc1 發布：Linus Torvalds 關閉合併窗口，主線程式碼庫持續整合大量新功能與修復",
    summary: "Linux 核心開發版 7.2-rc1 已由 Linus Torvalds 發布，並於 6 月 28 日關閉了本次的合併窗口。本次主線程式碼庫（mainline）整合了總計 13,412 個非合併提交（non-merge commits）。這使得本次合併窗口成為自 2024 年 6.7 開發週期以來最繁忙的整合期。提交的內容涵蓋了大量修復（fixes），但同時也納入了許多新功能和重大變更。開發者應關注核心程式碼庫的持續整合進度，以了解最新的穩定功能和潛在的修復點。",
    tags: ["Linux 核心", "Linus Torvalds", "7.2-rc1", "主線程式碼庫", "核心開發"],
    title_en: "Linux Kernel 7.2-rc1 Released: Linus Torvalds Closes Merge Window, Mainline Repository Integrates Numerous New Features and Fixes",
    summary_en: "The Linux Kernel development version 7.2-rc1 has been released by Linus Torvalds, who closed the merge window on June 28. This mainline repository integrated a total of 13,412 non-merge commits. This makes the current merge window the busiest integration period since the 2024 6.7 development cycle. The commits include numerous fixes, but also incorporate many new features and major changes. Developers should monitor the continuous integration progress of the kernel repository to stay updated on the latest stable features and potential fixes.",
    tags_en: ["Linux Kernel", "Linus Torvalds", "7.2-rc1", "Mainline Repository", "Kernel Development"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1078539", lang: "EN" }
    ]
  },
  {
    id: "20260629-007",
    trackers: ["os"],
    category: "Linux",
    title: "Mageia 10 正式發布：搭載 6.18 Linux 核心與 DNF 5.4.0，更新後需支援 SSE2 硬體特性",
    summary: "Mageia 10 版本已正式發布，本次更新包含了 6.18 Linux 核心、DNF 5.4.0 以及 RPM 4.20.1 等多個核心元件的升級。使用者應注意，本次發行版增加了對 x86 32 位元系統的硬體要求，現在需要 CPU 具備 SSE2 特性。這代表了系統底層的重大更新，用戶應查閱官方的發行說明（release notes）以了解所有更新細節，並留意錯誤頁面（errata page）以掌握已知問題。雖然原文未提及具體漏洞或攻擊向量，但核心元件的升級通常會修補底層的資安漏洞，建議使用者應及時進行系統升級，確保系統的穩定性與安全性。",
    tags: ["Mageia 10", "Linux 核心", "6.18", "DNF", "RPM", "SSE2"],
    title_en: "Mageia 10 Officially Released: Featuring 6.18 Linux Kernel and DNF 5.4.0, Requires SSE2 Hardware Support After Update",
    summary_en: "Mageia 10 has been officially released. This update includes upgrades to multiple core components, such as the 6.18 Linux kernel, DNF 5.4.0, and RPM 4.20.1. Users should note that this release increases hardware requirements for x86 32-bit systems, now requiring the CPU to possess SSE2 features. This represents a significant underlying system update. Users should consult the official release notes for all update details and monitor the errata page for known issues. Although the original text does not mention specific vulnerabilities or attack vectors, core component upgrades typically patch underlying security flaws. It is recommended that users upgrade their systems promptly to ensure stability and security.",
    tags_en: ["Mageia 10", "Linux Kernel", "6.18", "DNF", "RPM", "SSE2"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1080143", lang: "EN" }
    ]
  },
  {
    id: "20260629-008",
    trackers: ["os"],
    category: "Linux",
    title: "多主流 Linux 發行版同步發布安全更新，涵蓋核心、應用程式與函式庫修補",
    summary: "本次安全更新涵蓋了 AlmaLinux、Debian、Fedora、Mageia、Oracle、Red Hat 和 SUSE 等多個主流 Linux 發行版。修補範圍極廣，包括作業系統核心（kernel）、核心函式庫（如 glibc, openssl, libpng）、以及大量應用程式和開發工具。受影響的元件包括 golang、nginx、python、docker-buildkit、openssl-3、libssh2 等。實務影響上，這類更新旨在修補系統層級的漏洞，確保系統的穩定性和安全性。建議使用者應根據發行版官方公告，及時更新所有核心元件和關鍵應用程式，特別是涉及網路服務和身份驗證的組件。",
    tags: ["Linux", "AlmaLinux", "Debian", "Fedora", "Red Hat", "SUSE", "安全更新"],
    title_en: "Multiple Major Linux Distributions Simultaneously Release Security Updates Covering Kernel, Applications, and Libraries",
    summary_en: "This security update covers multiple major Linux distributions, including AlmaLinux, Debian, Fedora, Mageia, Oracle, Red Hat, and SUSE. The scope of the patches is extensive, covering the operating system kernel (kernel), core libraries (such as glibc, openssl, libpng), and numerous applications and development tools. Affected components include golang, nginx, python, docker-buildkit, openssl-3, libssh2, and others. Practically, these updates aim to patch system-level vulnerabilities, ensuring system stability and security. Users are advised to update all core components and critical applications promptly, following official announcements from their respective distributions, especially components involved in network services and identity authentication.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Fedora", "Red Hat", "SUSE", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1080075", lang: "EN" }
    ]
  },
  {
    id: "20260629-009",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 在 Threadripper 平台上測試：顯示 I/O 性能提升與 Poll 速度改善，但仍有回歸現象",
    summary: "本文針對 Linux 7.2 的早期開發版本（rc1）進行性能評測，將其與穩定的 Linux 7.1 版本進行比較。測試平台採用搭載 96 核心 AMD Ryzen Threadripper PRO 9995WX 的工作站配置。測試重點在於評估新核心在 I/O 處理和 Poll 機制上的性能表現。結果顯示，Linux 7.2 在某些方面展現出優於 Linux 7.1 的性能提升，特別是在 I/O 方面。然而，文章也指出新核心在某些功能上仍存在回歸（regressions）現象。該新核心預計將在八月穩定發布，並將為 Ubuntu 26.10 和 Fedora 45 等發行版提供支援。此類早期核心測試對於系統整合商和開發者了解未來作業系統的底層架構變動至關重要。",
    tags: ["Linux 7.2", "Linux 7.1", "Threadripper", "AMD", "性能評測", "Linux 核心"],
    title_en: "Linux 7.2 Tested on Threadripper Platform: Improved I/O Performance and Poll Speed, but Regressions Still Present",
    summary_en: "This article conducts a performance evaluation of the early development version (rc1) of Linux 7.2, comparing it to the stable Linux 7.1 version. The testing platform utilized a workstation configured with a 96-core AMD Ryzen Threadripper PRO 9995WX. The focus of the tests was to assess the performance of the new kernel in I/O handling and the Poll mechanism. The results show that Linux 7.2 exhibits performance improvements over Linux 7.1 in certain areas, particularly in I/O. However, the article also points out that the new kernel still exhibits regression issues in some functionalities. This new kernel is expected to be released in a stable version in August and will support distributions such as Ubuntu 26.10 and Fedora 45. Such early kernel testing is crucial for system integrators and developers to understand the underlying architectural changes of future operating systems.",
    tags_en: ["Linux 7.2", "Linux 7.1", "Threadripper", "AMD", "Performance Evaluation", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/linux-72-threadripper", lang: "EN" }
    ]
  },
  {
    id: "20260629-010",
    trackers: ["os"],
    category: "Linux",
    title: "開發者推出 Infinity Scheduler：透過核心修補取代 sched_ext，改進 Linux CPU 排程行為",
    summary: "本次介紹的 Infinity Scheduler 是由開發者 Galih Tama 打造的，旨在改進 Linux 系統的 CPU 排程行為，作為現有 scx_flow sched_ext 的替代方案。它放棄了依賴 BPF 的 sched_ext 方法，而是直接修補 Linux 核心，修改了 CFS（Completely Fair Scheduler）和 RT（Real-Time）的行為。該排程器核心概念是使用指數移動平均（Exponential Moving Average, EMA）來追蹤每個任務的近期運行歷史。具體機制包括：CPU 密集型任務的時間片會縮小（最低至 400µs），而互動式任務則能保留完整的配額。此外，低 EMA 喚醒的任務會獲得更短的 vslice，並透過在 pick_eevdf() 中繞過 futex 等待，實現即時搶佔。目前這些修補程式針對主線 Linux 6.18 LTS、Linux 7.0 和 Linux 7.1 核心版本。這項開發為 Linux 核心排程機制帶來了原生 EEVDF 的修改，提升了系統在重負載下的公平性和響應性。",
    tags: ["Linux 核心", "Infinity Scheduler", "CFS", "sched_ext", "Linux 6.18 LTS", "CPU 排程"],
    title_en: "Developer Releases Infinity Scheduler: Replacing sched_ext with Core Patches to Improve Linux CPU Scheduling Behavior",
    summary_en: "The Infinity Scheduler, introduced here by developer Galih Tama, is designed to improve the CPU scheduling behavior of Linux systems, serving as an alternative to the existing scx_flow sched_ext. Instead of relying on the BPF-based sched_ext method, it directly patches the Linux kernel, modifying the behavior of the CFS (Completely Fair Scheduler) and RT (Real-Time). The core concept of this scheduler is to use Exponential Moving Average (EMA) to track the recent execution history of each task. Specific mechanisms include: reducing the time slice for CPU-intensive tasks (down to 400µs), while allowing interactive tasks to retain full quotas. Furthermore, tasks with low EMA wake-ups receive a shorter vslice and achieve immediate preemption by bypassing futex waiting within pick_eevdf(). Currently, these patches target the mainline Linux 6.18 LTS, Linux 7.0, and Linux 7.1 kernel versions. This development introduces native EEVDF modifications to the Linux kernel scheduling mechanism, enhancing system fairness and responsiveness under heavy load.",
    tags_en: ["Linux Kernel", "Infinity Scheduler", "CFS", "sched_ext", "Linux 6.18 LTS", "CPU Scheduling"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Infinity-Scheduler", lang: "EN" }
    ]
  },
  {
    id: "20260629-011",
    trackers: ["os"],
    category: "Linux",
    title: "AMD Linux 核心新增「低功耗」CPU核心類型，優化異質處理器功耗管理",
    summary: "AMD 在 Linux 核心層級發布了一系列補丁，為其異質處理器（heterogeneous processors）引入了新的「低功耗」（Low Power）CPU 核心類型。此更新擴展了 x86 位元拓撲 CPU 類型分類，除了現有的性能（Performance）和效率（Efficiency）核心外，增加了專門用於背景或閒置工作負載的低功耗核心。此變更主要透過 AMD 擴展 CPU 拓撲（Extended CPU Topology）報告，並透過 Linux x86 拓撲基礎設施進行正確報告。實務上，這對於使用者空間的暴露（如 /sys/kernel/debug/x86/topo/cpus/*）至關重要，因為目前低功耗核心可能被報告為「未知」類型。此外，此更新也修正了 `amd_get_boost_ratio_numerator()` 的計算邏輯，確保在支援 AMD/Hygon 的部分上，低功耗核心能夠正確地透過 `amd_get_highest_perf()` 進行縮放，而非使用固定上限，從而更精確地管理系統的功耗和性能。此補丁目前正在核心郵件列表進行審查。",
    tags: ["AMD", "Linux 核心", "x86 拓撲", "CPU 核心", "低功耗", "異質處理器"],
    title_en: "AMD Linux Kernel Adds 'Low Power' CPU Core Type, Optimizing Heterogeneous Processor Power Management",
    summary_en: "AMD has released a series of patches at the Linux kernel level, introducing a new 'Low Power' CPU core type for its heterogeneous processors. This update expands the x86 bit CPU type classification, adding a low power core specifically designed for background or idle workloads, in addition to the existing Performance and Efficiency cores. This change is primarily reported through the AMD Extended CPU Topology, and correctly reported via the Linux x86 topology infrastructure. Practically, this is crucial for user-space exposure (such as /sys/kernel/debug/x86/topo/cpus/*), as low power cores might currently be reported as 'unknown' types. Furthermore, this update also corrects the calculation logic for `amd_get_boost_ratio_numerator()`, ensuring that on platforms supporting AMD/Hygon, low power cores can be correctly scaled via `amd_get_highest_perf()` rather than using a fixed upper limit, thereby managing system power and performance more accurately. This patch is currently under review on the kernel mailing list.",
    tags_en: ["AMD", "Linux Kernel", "x86 Topology", "CPU Core", "Low Power", "Heterogeneous Processor"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-Low-Power-CPU-Core-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260629-012",
    trackers: ["os"],
    category: "Linux",
    title: "Mageia 10 正式發布：搭載 Linux 6.18 LTS 核心與 KDE Plasma 6.5，延續 Mandrake 傳統",
    summary: "Linux 發行版 Mageia 10 已於近期發布，這是自 Mageia 9 釋出近三年後的重大更新。本次版本延續了 Mageia 從 Mandriva Linux 和 Mandrake Linux 的歷史傳承。Mageia 10 採用了 Linux 6.18 LTS 核心，並整合了 Mesa 26.0 圖形驅動程式。對於使用 KDE Plasma 桌面環境的用戶，Mageia 10 搭載了 Plasma 6.5 版本。這是一個全面的軟體更新，旨在為用戶提供一個穩定且功能豐富的系統環境。建議用戶前往 Mageia.org 下載官方發布的 ISO 映像檔，以確保系統的穩定性和安全性。",
    tags: ["Mageia 10", "Linux 發行版", "Linux 6.18 LTS", "KDE Plasma 6.5", "Mandrake Linux", "開源系統"],
    title_en: "Mageia 10 Officially Released: Featuring Linux 6.18 LTS Kernel and KDE Plasma 6.5, Continuing the Mandrake Tradition",
    summary_en: "The Linux distribution Mageia 10 has been recently released, marking a major update nearly three years after the Mageia 9 release. This version continues Mageia's historical lineage from Mandriva Linux and Mandrake Linux. Mageia 10 utilizes the Linux 6.18 LTS kernel and integrates the Mesa 26.0 graphics driver. For users utilizing the KDE Plasma desktop environment, Mageia 10 features the Plasma 6.5 version. This represents a comprehensive software update designed to provide users with a stable and feature-rich system environment. Users are advised to download the official ISO image from Mageia.org to ensure system stability and security.",
    tags_en: ["Mageia 10", "Linux Distribution", "Linux 6.18 LTS", "KDE Plasma 6.5", "Mandrake Linux", "Open Source System"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Mageia-10-Released", lang: "EN" }
    ]
  },
  {
    id: "20260629-013",
    trackers: ["os"],
    category: "Linux",
    title: "Arch Linux Archinstall 4.4 發布：新增 Niri/DankMaterialShell 設定檔，提升安裝體驗",
    summary: "Arch Linux 發布了 Archinstall 4.4 版本，這是一個用於簡化 Arch Linux 安裝流程的文字介面工具。本次更新主要針對使用者體驗進行了多項優化與增強。技術亮點包括新增了控制台字體選擇選項、當配置有效時顯示安裝摘要、增加 IWD 獨立網路配置選項，並改善了安裝預覽文字的顏色編碼。對於桌面環境使用者而言，最值得注意的是新增了 Niri Wayland 合成器與 DankMaterialShell 的預設配置，提供更流暢的開箱使用體驗。此外，Archinstall 4.4 也加入了 Plymouth 配置支援，並修復了多個錯誤。這是一個增量式的穩定更新，旨在讓 Arch Linux 的安裝過程更加直觀與易用。",
    tags: ["Arch Linux", "Archinstall", "Niri", "Wayland", "DankMaterialShell", "Linux 核心"],
    title_en: "Arch Linux Archinstall 4.4 Released: Adds Niri/DankMaterialShell Configurations to Enhance Installation Experience",
    summary_en: "Arch Linux has released Archinstall 4.4, a command-line tool designed to simplify the Arch Linux installation process. This update focuses on multiple optimizations and enhancements to the user experience. Technical highlights include the addition of a console font selection option, displaying an installation summary when configuration is valid, adding an IWD independent network configuration option, and improving the color coding of the installation preview text. For desktop environment users, the most notable addition is the inclusion of default configurations for the Niri Wayland compositor and DankMaterialShell, providing a smoother out-of-the-box experience. Furthermore, Archinstall 4.4 now supports Plymouth configuration and fixes multiple bugs. This is an incremental stability update aimed at making the Arch Linux installation process more intuitive and user-friendly.",
    tags_en: ["Arch Linux", "Archinstall", "Niri", "Wayland", "DankMaterialShell", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Arch-Linux-Archinstall-4.4", lang: "EN" }
    ]
  },
  {
    id: "20260629-014",
    trackers: ["os"],
    category: "Linux",
    title: "Mageia 10 繼續支持 32 位元 Linux 環境，維持其在老舊系統上的應用價值",
    summary: "本文介紹 Mageia Linux 發行版持續維護對 32 位元架構的支援，這對於許多仍運行舊版硬體或特定應用程式的用戶群體至關重要。Mageia 10 的更新確保了其在 32 位元環境下的穩定性和兼容性。雖然業界趨勢正朝向 64 位元，但 Mageia 的此舉展現了對廣泛用戶群體需求的關注，特別是那些無法輕易升級作業系統的用戶。對於開發者和系統管理員而言，這提醒了我們在規劃系統升級時，必須考慮到老舊但仍活躍的 32 位元設備生態系統，並確保關鍵應用程式的兼容性。建議用戶應評估其設備的硬體限制與軟體依賴性，並規劃穩定的過渡方案，避免因過早棄用 32 位元支援而造成業務中斷。",
    tags: ["Mageia", "Linux", "32位元", "作業系統", "兼容性", "FOSS"],
    title_en: "Mageia 10 Continues Support for 32-bit Linux Environments, Maintaining Value for Legacy Systems",
    summary_en: "This article introduces the continued maintenance of 32-bit architecture support in the Mageia Linux distribution, which is crucial for user groups still running older hardware or specific applications. The Mageia 10 update ensures its stability and compatibility in 32-bit environments. Although industry trends are moving towards 64-bit, Mageia's action demonstrates attention to the needs of a broad user base, especially those who cannot easily upgrade their operating systems. For developers and system administrators, this reminds us that when planning system upgrades, we must consider the legacy but still active 32-bit device ecosystem and ensure the compatibility of critical applications. Users are advised to evaluate their equipment's hardware limitations and software dependencies, and plan stable transition solutions to avoid business disruption due to the premature abandonment of 32-bit support.",
    tags_en: ["Mageia", "Linux", "32-bit", "Operating System", "Compatibility", "FOSS"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/06/29/mageia-10-keeps-the-32-bit-linux-flame-alive/5263856", lang: "EN" }
    ]
  },
  {
    id: "20260629-015",
    trackers: ["security"],
    category: "法規與標準",
    title: "澳洲通訊局（ASD）宣布更新資安指引：Essential Eight框架將演進為Essentials系列",
    summary: "澳洲通訊局（ASD）旗下澳洲網路安全中心（ACSC）已發布公告，宣布針對現行Essential Eight資安框架的演進規劃。Essential Eight自2012年以來一直是澳洲政府與企業採用的資安基準，但由於企業環境轉向雲端服務（SaaS）和共同責任模型，其原有的控制措施難以直接適用。因此，ASD計畫在未來約兩年內逐步退役現行框架，改建一套以「安全成果」（security outcomes）為導向的新架構——Essentials系列。新版指引將涵蓋企業IT、營運技術（OT）及雲端環境，並考慮新增代理型AI（Agentic AI）專屬指引，以應對非人類實體存取管理和提示注入等新興威脅。此外，新架構將將防護控制與成熟度模型分開規劃，以提高未來調整的彈性，避免組織因框架更新而產生不必要的成熟度下降。",
    tags: ["澳洲通訊局", "ASD", "ACSC", "Essential Eight", "Essentials 系列", "資安指引", "雲端安全"],
    title_en: "Australian Signals Directorate (ASD) Announces Updated Cyber Security Guidelines: Essential Eight Framework to Evolve into Essentials Series",
    summary_en: "The Australian Cyber Security Centre (ACSC), under the Australian Signals Directorate (ASD), has issued an announcement detailing the planned evolution of the current Essential Eight cyber security framework. Since 2012, Essential Eight has been the adopted cyber security standard for Australian government and enterprises. However, due to the shift in enterprise environments towards cloud services (SaaS) and shared responsibility models, its original controls are difficult to apply directly. Therefore, ASD plans to gradually retire the current framework over the next two years, replacing it with a new architecture—the Essentials series—which is focused on 'security outcomes.' The new guidelines will cover enterprise IT, Operational Technology (OT), and cloud environments, and will consider adding dedicated guidance for Agentic AI to address emerging threats such as non-human entity access management and prompt injection. Furthermore, the new architecture will separate protective controls from the maturity model to enhance future adaptability, preventing organizations from experiencing unnecessary maturity degradation due to framework updates.",
    tags_en: ["Australian Signals Directorate", "ASD", "ACSC", "Essential Eight", "Essentials Series", "Cyber Security Guidelines", "Cloud Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176933", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-016",
    trackers: ["os"],
    category: "Windows",
    title: "微軟持續為 Windows Server 2022 實施熱修補，支援至 2027 年",
    summary: "本文報導微軟（Microsoft）將持續為 Windows Server 2022 進行熱修補（hotpatching），延長其安全支援至 2027 年。這對於使用該伺服器作業系統的企業和組織具有重要的實務影響，確保了其在較長時間內的安全性與穩定性。雖然文章未提供具體的 CVE 或 CVSS 分數，但其核心訊息是微軟透過持續的修補工作，延長了產品的生命週期和安全保障。建議使用該系統的用戶應關注微軟的官方安全公告，並確保系統能及時接收所有熱修補和更新，以維持最佳的安全性狀態。",
    tags: ["Microsoft", "Windows Server 2022", "熱修補", "安全支援", "MSRC"],
    title_en: "Microsoft to Continue Hotpatching for Windows Server 2022, Extending Support to 2027",
    summary_en: "This article reports that Microsoft will continue hotpatching Windows Server 2022, extending its security support until 2027. This has significant practical implications for enterprises and organizations using this server operating system, ensuring its security and stability over a longer period. Although the article does not provide specific CVE or CVSS scores, its core message is that Microsoft is extending the product's lifecycle and security assurance through continuous patching. Users of this system are advised to monitor Microsoft's official security announcements and ensure that the system receives all hotpatches and updates in a timely manner to maintain optimal security status.",
    tags_en: ["Microsoft", "Windows Server 2022", "Hotpatching", "Security Support", "MSRC"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/29/microsoft-keeps-windows-server-2022-hotpatching-alive-into-2027/5263688", lang: "EN" }
    ]
  },
  {
    id: "20260629-017",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布淘汰透過商店安裝的 Microsoft 365 應用程式，用戶需升級至 Click-to-Run",
    summary: "微軟宣布逐步淘汰透過 Microsoft Store 安裝的 Microsoft 365 應用程式版本。此變更對所有用戶（包括一般消費者）都產生影響，因為 Store 版本將在 2025 年 10 月停止接收新功能更新，並在 2026 年 12 月停止接收安全更新。若持續使用此版本，將面臨功能和保護落後風險。\n\n微軟建議所有用戶必須升級至 Click-to-Run（點擊執行）安裝類型。Store 版本使用 Appx 封裝，更新流程依賴 Windows Update，導致功能交付較慢；而 Click-to-Run 則採用更靈活的串流安裝器，能直接從微軟 CDN 進行背景更新，並支援多個更新通道。\n\n對於企業 IT 管理員而言，Store 版本缺乏 XML 設定、多用戶環境支援，且無法與 Intune 或 Configuration Manager 等企業管理工具整合，無法滿足 Copilot 等雲端增強功能快速部署的需求。用戶可透過開啟任何 Office 應用程式，在「檔案」>「帳戶」中檢查當前安裝類型。若為 Store 版本，可至微軟官方下載頁面，使用 Office Deployment Tool 進行自動移除與升級。",
    tags: ["Microsoft 365", "Microsoft Store", "Click-to-Run", "Windows 11", "Appx", "Intune", "Office Deployment Tool"],
    title_en: "Microsoft Announces Phasing Out Microsoft 365 Apps Installed via Store; Users Must Upgrade to Click-to-Run",
    summary_en: "Microsoft has announced the gradual deprecation of Microsoft 365 application versions installed via the Microsoft Store. This change affects all users, including general consumers, because Store versions will stop receiving new feature updates in October 2025 and will cease receiving security updates in December 2026. Continued use of this version poses risks of outdated features and protection. Microsoft recommends that all users upgrade to the Click-to-Run installation type. Store versions use Appx packaging, and their update process relies on Windows Update, which results in slower feature delivery; conversely, Click-to-Run uses a more flexible streaming installer that can perform background updates directly from the Microsoft CDN and supports multiple update channels. For enterprise IT administrators, the Store version lacks XML configuration, multi-user environment support, and cannot integrate with enterprise management tools like Intune or Configuration Manager, making it unsuitable for the rapid deployment of cloud-enhanced features such as Copilot. Users can check their current installation type by opening any Office application and navigating to 'File' > 'Account'. If it is the Store version, they can visit the official Microsoft download page and use the Office Deployment Tool to automatically remove and upgrade.",
    tags_en: ["Microsoft 365", "Microsoft Store", "Click-to-Run", "Windows 11", "Appx", "Intune", "Office Deployment Tool"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/30/microsoft-365-apps-downloaded-via-ms-store-is-losing-support-on-windows-11-verify-if-youre-affected", lang: "EN" }
    ]
  },
  {
    id: "20260629-018",
    trackers: ["os"],
    category: "Windows",
    title: "深入解析 Windows「檔案正在使用」錯誤：了解檔案句柄、DLL 鎖定與解決方案",
    summary: "本文由 Mark Russinovich 深入探討了 Windows 系統中長期存在的「無法完成操作，因為檔案正在被其他程式開啟」的錯誤現象。此錯誤的根本原因是 Windows 為了防止資料損壞，會為每個開啟的檔案建立一個「檔案句柄」（file handle）來追蹤存取權限。雖然一般關閉應用程式會釋放句柄，但實際操作中，檔案仍可能被鎖定，常見原因包括：防毒軟體在系統層級掃描、網路上的遠端程序存取，以及最複雜的 DLL 載入情境（此時鎖定是記憶體內的參考，無法透過標準句柄工具偵測）。為了解決此問題，文章推薦使用 Sysinternals 套件中的 Handle 或 Process Explorer 進行診斷，或利用 PowerToys 的 File Locksmith 介面。若無法立即終止鎖定程序，可嘗試「重新命名」檔案作為替代方案，之後再放置新副本，以繞過鎖定問題。",
    tags: ["Windows", "檔案句柄", "File Locksmith", "Sysinternals", "DLL", "Process Explorer"],
    title_en: "In-Depth Analysis of Windows 'File In Use' Error: Understanding File Handles, DLL Locking, and Solutions",
    summary_en: "This article by Mark Russinovich deeply explores the long-standing 'The operation cannot be completed because the file is being used by another program' error in Windows systems. The root cause of this error is that Windows creates a 'file handle' for every opened file to track access permissions, preventing data corruption. Although closing an application generally releases the handle, the file may still be locked in practice due to common causes, including: antivirus software performing system-level scans, remote processes accessing the network, and the most complex scenario: DLL loading (where the lock is a memory reference that cannot be detected by standard handle tools). To resolve this issue, the article recommends using Handle or Process Explorer from the Sysinternals suite for diagnosis, or utilizing the File Locksmith interface in PowerToys. If the locking process cannot be immediately terminated, attempting to 'rename' the file as an alternative solution, and then placing a new copy, can bypass the locking issue.",
    tags_en: ["Windows", "File Handle", "File Locksmith", "Sysinternals", "DLL", "Process Explorer"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/30/microsoft-reveals-why-windows-11-keeps-saying-a-file-is-in-use-after-you-close-the-app-plus-the-fix", lang: "EN" }
    ]
  },
  {
    id: "20260629-019",
    trackers: ["os"],
    category: "Windows",
    title: "主要 PC 廠商宣布 Windows 11 Secure Boot 憑證過期後更新指引：Dell、ASUS、Lenovo 等",
    summary: "隨著 Microsoft 2011 年的 Secure Boot 憑證（包括 KEK CA、UEFI CA 和 Windows Production PCA）將在 2026 年逐步過期，所有主要的 PC 製造商（包括 Dell、HP、ASUS、Lenovo 等）都已發布了詳細的更新指引。Secure Boot 是 UEFI 韌體功能，用於確保電腦開機時只載入受信任的軟體，防止惡意篡改。Microsoft 透過 Windows Update 推播 2023 年的替代憑證，但這取決於各 OEM 是否推送相容的 BIOS 更新。一般使用者通常已透過 Windows Update 收到更新。各廠商的指引各有側重：ASUS 提供 PowerShell 指令和手動登錄檔更新步驟；Lenovo 依產品家族提供 BIOS 更新下載連結；Dell 則按產品線（如 Latitude、XPS）詳細列出狀態，並宣布了雙憑證策略；HP 則針對商用和消費級 PC 設置了不同的更新流程，並提醒用戶注意早期 BIOS 更新可能導致的開機失敗風險。用戶應根據自身設備的品牌和型號，查閱官方網站，確保 BIOS 韌體及 Secure Boot 憑證已更新至最新版本，以維持系統安全。",
    tags: ["Secure Boot", "UEFI", "Windows 11", "BIOS", "Dell", "ASUS", "Lenovo", "Microsoft"],
    title_en: "Major PC Vendors Issue Update Guidelines for Windows 11 Secure Boot Certificate Expiration: Dell, ASUS, Lenovo, and Others",
    summary_en: "As Microsoft's Secure Boot certificates (including KEK CA, UEFI CA, and Windows Production PCA), originally issued in 2011, are scheduled to expire gradually by 2026, all major PC manufacturers (including Dell, HP, ASUS, and Lenovo) have released detailed update guidelines. Secure Boot is a UEFI firmware feature designed to ensure that only trusted software is loaded during computer startup, preventing malicious tampering. Microsoft is pushing alternative certificates via Windows Update, but this depends on whether each OEM pushes compatible BIOS updates. General users have typically received the update through Windows Update. Each vendor's guide has different focuses: ASUS provides PowerShell commands and manual registry update steps; Lenovo provides BIOS update download links based on product families; Dell details the status by product line (such as Latitude and XPS) and announced a dual-certificate strategy; and HP established different update processes for commercial and consumer PCs, warning users about the risk of startup failure associated with early BIOS updates. Users should consult the official websites based on their device's brand and model to ensure that the BIOS firmware and Secure Boot certificates are updated to the latest version, maintaining system security.",
    tags_en: ["Secure Boot", "UEFI", "Windows 11", "BIOS", "Dell", "ASUS", "Lenovo", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/29/dell-hp-lenovo-asus-acer-reveal-windows-11-secure-boot-certificate-fix-after-deadline", lang: "EN" }
    ]
  },
  {
    id: "20260629-020",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11新增兩項任務列自訂功能：可縮小任務列尺寸與圖示，提升使用者控制權",
    summary: "本文介紹Windows 11在任務列（Taskbar）方面獲得兩項重大優化，顯著提升了使用者自訂性。過去Windows 10提供單一的任務列尺寸調整開關，但Windows 11最初移除此功能。目前，透過測試版更新，Microsoft新增了「任務列尺寸」設定，允許使用者將任務列本身縮小變薄。此外，原有的「顯示較小的任務列按鈕」功能仍保留，專門用於縮小圖示大小，讓更多應用程式圖示能容納在任務列上。這兩項功能可以獨立使用，讓使用者可以選擇性地調整任務列的尺寸和圖示大小，提供了比Windows 10更全面的控制權。此外，Windows 11還預計推出「可移動任務列」功能，讓使用者能將任務列移動到螢幕任何位置，並將Start選單的控制權也擴展，甚至計畫移除Start選單中的廣告。",
    tags: ["Windows 11", "任務列", "Taskbar", "使用者介面", "UI/UX", "Microsoft"],
    title_en: "Windows 11 Adds Two New Taskbar Customization Features: Shrinkable Taskbar Size and Icons Enhance User Control",
    summary_en: "This article introduces two major enhancements to the Taskbar in Windows 11, significantly improving user customization. While Windows 10 previously offered a single toggle for adjusting the taskbar size, Windows 11 initially removed this feature. Currently, through a preview update, Microsoft has added a 'Taskbar Size' setting, allowing users to shrink and thin the taskbar itself. Furthermore, the original 'Show small taskbar buttons' function remains, specifically used to reduce the size of icons, allowing more application icons to fit on the taskbar. These two features can be used independently, giving users the option to adjust both the taskbar size and icon size, offering more comprehensive control than Windows 10. Additionally, Windows 11 is also expected to introduce a 'Movable Taskbar' feature, allowing users to place the taskbar anywhere on the screen, and it is expanding control over the Start menu, even planning to remove advertisements from the Start menu.",
    tags_en: ["Windows 11", "Taskbar", "Taskbar", "User Interface", "UI/UX", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/29/windows-11-gets-two-ways-to-shrink-taskbar-size-which-windows-10-never-had", lang: "EN" }
    ]
  },
  {
    id: "20260629-021",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "JFrog揭露Linux核心高風險漏洞DirtyClone (CVE-2026-43503)，無特權使用者可獲取root權限",
    summary: "軟體供應鏈平臺業者JFrog資安研究團隊，針對Linux核心的修補狀況進行稽核，發現了名為DirtyClone的本機權限提升漏洞。此漏洞由JFrog於5月19日通報Linux核心維護人員，並於5月21日修補並合併至Linux核心主線版本v7.1-rc5，指派了CVE-2026-43503。該漏洞的CVSS 3.1嚴重性評分為8.8分，屬於高風險，允許任何無特權的本機使用者操弄Linux頁面快取，進而獲取root存取權限。JFrog指出，攻擊者可經由XFRM/IPsec子系統中的另一條封包處理路徑進行利用。受影響的Linux發行版包括Debian、Ubuntu及Fedora等。JFrog建議用戶若無法立即修補，可將kernel.unprivileged_userns_clone設定為0，或將esp4、esp6、rxrpc等核心模組加入黑名單，以阻擋攻擊。此外，用戶必須確保完整套用DirtyFrag漏洞系列（CVE-2026-43284 和 CVE-2026-43500）的全部修補程式，以避免繞過攻擊。",
    tags: ["Linux核心", "CVE-2026-43503", "本機權限提升", "JFrog", "DirtyClone", "root權限"],
    title_en: "JFrog Discloses High-Risk Linux Kernel Vulnerability DirtyClone (CVE-2026-43503), Allowing Unprivileged Users to Obtain Root Privileges",
    summary_en: "JFrog's security research team audited the patching status of the Linux kernel and discovered a local privilege escalation vulnerability named DirtyClone. JFrog reported this vulnerability to Linux kernel maintainers on May 19 and patched it, merging it into the Linux kernel mainline version v7.1-rc5, assigning it CVE-2026-43503. The vulnerability has a CVSS 3.1 severity score of 8.8, classified as high risk. It allows any unprivileged local user to manipulate Linux page cache, thereby obtaining root access. JFrog points out that attackers can exploit this via another packet processing path in the XFRM/IPsec subsystem. Affected Linux distributions include Debian, Ubuntu, and Fedora. JFrog advises users that if immediate patching is not possible, they can set kernel.unprivileged_userns_clone to 0, or blacklist core modules such as esp4, esp6, and rxrpc, to block the attack. Furthermore, users must ensure they have fully applied all patches for the DirtyFrag vulnerability series (CVE-2026-43284 and CVE-2026-43500) to prevent bypass attacks.",
    tags_en: ["Linux Kernel", "CVE-2026-43503", "Local Privilege Escalation", "JFrog", "DirtyClone", "root privileges"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176913", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2026-48558：SimpleHelp認證繞過漏洞，提醒機構優先修補已知被利用的威脅",
    summary: "美國網路安全局（CISA）宣布將一個新的漏洞CVE-2026-48558（SimpleHelp認證繞過漏洞）新增至其「已知被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。此類漏洞是惡意網路行為者常見的攻擊途徑，對聯邦企業系統構成重大風險。CISA的《約束性操作指令》（BOD 26-04）已要求聯邦民事行政部門（FCEB）必須優先修補高風險漏洞，特別是那些已列入KEV Catalog、且在公開資產上可授予攻擊者完全控制權的CVE。雖然BOD 26-04僅適用於聯邦機構，但CISA鼓勵所有組織應採納風險導向的漏洞管理方法，將修補KEV Catalog中的漏洞列為最高優先級。組織應留意，若發現未列入目錄但已被利用的漏洞，可透過CISA的提名表提交審核。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-48558", "SimpleHelp", "認證繞過", "漏洞管理"],
    title_en: "CISA Adds CVE-2026-48558: SimpleHelp Authentication Bypass Vulnerability, Urging Organizations to Prioritize Patching of Known Exploited Threats",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new vulnerability, CVE-2026-48558 (SimpleHelp Authentication Bypass Vulnerability), to its Known Exploited Vulnerabilities (KEV) Catalog. Such vulnerabilities are common attack vectors used by malicious actors and pose a significant risk to federal enterprise systems. CISA's Binding Operational Directive (BOD 26-04) requires the Federal Civilian Executive Branch (FCEB) to prioritize patching high-risk vulnerabilities, especially those listed in the KEV Catalog that could grant an attacker full control over public assets. Although BOD 26-04 only applies to federal agencies, CISA encourages all organizations to adopt a risk-based vulnerability management approach, listing the patching of KEV Catalog vulnerabilities as the highest priority. Organizations should note that if they discover a vulnerability that has been exploited but is not listed in the catalog, they can submit it for review via CISA's nomination form.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-48558", "SimpleHelp", "Authentication Bypass", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/06/29/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260629-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "RMM工具SimpleHelp漏洞遭利用，Djinn Stealer竊取雲端、AI開發及供應鏈憑證",
    summary: "本次攻擊事件揭露，駭客利用SimpleHelp的CVE-2026-48558此一關鍵認證繞過漏洞，進入了RMM（遠端監控與管理）平台。RMM工具本應是IT管理員遠端維護系統的信任通道，一旦被攻陷，攻擊者便能獲得高權限的技術員會話，進而部署惡意載荷TaskWeaver。最終的第二階段惡意程式Djinn Stealer，設計用於一次性清除開發者設備上的所有高價值憑證。它特別針對雲端憑證、SSH金鑰、API金鑰，以及npm、PyPI等套件註冊庫的供應鏈憑證。更值得注意的是，Djinn Stealer能搜尋與AI開發工具和代理（如Claude, Gemini, Codex等）相關的本地配置檔案，這類憑證透過Model Context Protocol (MCP) 連結了資料庫、雲帳戶和內部API。安全廠商指出，攻擊者透過利用信任的行政基礎設施，將單一的入侵擴大為橫跨多個租戶和服務的廣泛存取。修補建議是立即修補SimpleHelp的漏洞，並強化對RMM和開發環境的憑證管理與監控。",
    tags: ["SimpleHelp", "CVE-2026-48558", "Djinn Stealer", "RMM", "憑證竊取", "AI開發", "供應鏈安全"],
    title_en: "SimpleHelp RMM Tool Vulnerability Exploited by Djinn Stealer to Steal Cloud, AI Development, and Supply Chain Credentials",
    summary_en: "This attack reveals that hackers exploited a critical authentication bypass vulnerability, CVE-2026-48558, in SimpleHelp, gaining access to the RMM (Remote Monitoring and Management) platform. The RMM tool is supposed to be a trusted channel for IT administrators performing remote maintenance; once compromised, attackers can obtain high-privilege technician sessions and deploy malicious payloads like TaskWeaver. The final stage malware, Djinn Stealer, is designed to wipe all high-value credentials from a developer's device. It specifically targets cloud credentials, SSH keys, API keys, and supply chain credentials from package registries like npm and PyPI. Notably, Djinn Stealer can search local configuration files related to AI development tools and agents (such as Claude, Gemini, Codex, etc.). These credentials are linked to databases, cloud accounts, and internal APIs via the Model Context Protocol (MCP). Security vendors point out that by exploiting trusted administrative infrastructure, the attackers expanded a single breach into widespread access across multiple tenants and services. The remediation advice is to immediately patch the SimpleHelp vulnerability and strengthen credential management and monitoring for RMM and development environments.",
    tags_en: ["SimpleHelp", "CVE-2026-48558", "Djinn Stealer", "RMM", "Credential Theft", "AI Development", "Supply Chain Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/djinn-stealer-targets-cloud-ai-credentials", lang: "EN" }
    ]
  },
  {
    id: "20260629-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露印度政府系統多處漏洞，包含教育與公務員招募平台，曝露大量公民敏感資料",
    summary: "獨立資安研究員 Sushant Bhardwaj 發現了多達 14 個影響印度政府 IT 系統的漏洞，其中包含兩處關鍵級（Critical）和四處高風險（High）的漏洞。這些漏洞影響了包括教育和公務員招募（UPSC）等國家級重要平台，使得公民的個人身份資訊（PII）面臨極大風險。受影響的資料包括學生的姓名、父母姓名、學校細節、考試成績，以及受助學生的銀行帳號等高度敏感資料。漏洞的根源多源於缺乏伺服器層級的存取控制（Access Control）、身份與存取管理（IAM）的薄弱，以及預測性的檔案結構。其中，UPSC 平台的管理介面完全開放給網際網路，極易被駭客接管。文章指出，這些問題多為配置弱點和存取控制不一致所致，而非複雜的攻擊。幸運的是，印度政府在研究員的提醒下，已在數週內修補了所有漏洞。",
    tags: ["印度政府", "Sushant Bhardwaj", "PII", "UPSC", "存取控制", "配置弱點"],
    title_en: "Research reveals multiple vulnerabilities in Indian government systems, including education and civil service recruitment platforms, exposing vast amounts of citizen sensitive data",
    summary_en: "Independent cybersecurity researcher Sushant Bhardwaj discovered up to 14 vulnerabilities affecting Indian government IT systems, including two Critical and four High-risk flaws. These vulnerabilities impact national-level critical platforms, such as education and civil service recruitment (UPSC), posing extreme risks to citizens' Personally Identifiable Information (PII). Affected data includes highly sensitive information such as students' names, parents' names, school details, examination scores, and bank accounts of scholarship recipients. The root cause of the vulnerabilities stems from weak server-level Access Control, poor Identity and Access Management (IAM), and predictable file structures. Notably, the UPSC platform's administrative interface was completely exposed to the internet, making it highly susceptible to hacker takeover. The article points out that these issues are primarily due to configuration weaknesses and inconsistent access controls, rather than complex exploits. Fortunately, the Indian government has patched all vulnerabilities within weeks following the researcher's alert.",
    tags_en: ["Indian government", "Sushant Bhardwaj", "PII", "UPSC", "Access Control", "Configuration weakness"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/vulnerabilities-private-data-indian-government-systems", lang: "EN" }
    ]
  },
  {
    id: "20260629-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究人員提出「服裝」混淆人臉辨識系統，挑戰監控技術的弱點",
    summary: "本文介紹了一種利用服裝圖案混淆人臉辨識（Facial Recognition）系統的理論與實作概念。文章指出，現有的監控系統，如 Clearview AI 和 ICE 的 Fortify 等，在缺乏個人同意的情況下大規模收集和使用生物識別數據，已成為一個「監控國家」的威脅。攻擊的弱點被鎖定在人臉辨識流程的早期階段，特別是「人體檢測」步驟，因為這通常在攝影機本身進行，且為了追求即時速度，準確度可能有所犧牲。研究人員 Bill Swearingen 提出，透過設計具有高頻率、複雜幾何圖案的服裝（如上衣、圍巾），可以干擾神經網路對邊緣、紋理和基本人體輪廓的判讀。這些圖案的目的是讓AI模型無法確定檢測到的目標是否為「人」，從而導致系統的偵測失敗。這是一種利用輸入數據混淆（Dazzle）AI模型的攻擊概念，尚未形成標準化產品，但展示了對現有監控技術的潛在挑戰。",
    tags: ["人臉辨識", "Facial Recognition", "AI 混淆", "監控技術", "Clearview AI", "生物識別"],
    title_en: "Researchers propose 'clothing' to confuse facial recognition systems, challenging surveillance technology's weaknesses",
    summary_en: "This article introduces a theoretical and practical concept for confusing Facial Recognition systems using clothing patterns. It points out that existing surveillance systems, such as Clearview AI and Fortify by ICE, collecting and using biometric data on a large scale without individual consent, pose a threat from a 'surveillance state.' The attack weakness is targeted at the early stages of the facial recognition process, specifically the 'human detection' step, because this is often performed by the camera itself, and accuracy may be sacrificed for real-time speed. Researcher Bill Swearingen proposes that by designing clothing with high-frequency, complex geometric patterns (such as shirts or scarves), it is possible to interfere with the neural network's interpretation of edges, textures, and basic human contours. The purpose of these patterns is to prevent the AI model from confirming whether the detected target is 'human,' thereby causing the system to fail detection. This is an attack concept that utilizes input data confusion (Dazzle) on AI models. While not yet a standardized product, it demonstrates a potential challenge to current surveillance technologies.",
    tags_en: ["Facial Recognition", "AI Confusion", "Surveillance Technology", "Clearview AI", "Biometrics"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/clothes-invisible-facial-recognition", lang: "EN" }
    ]
  },
  {
    id: "20260629-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "國家級駭客針對水系統的攻擊分析：伊朗、俄羅斯與中國的威脅模式與弱點利用",
    summary: "資安情報公司 DomainTools 的研究指出，國家級駭客持續針對水資源的監管、分配和保護系統進行攻擊。這些攻擊的目標並非複雜的惡意軟體，而是利用系統的弱點，如弱密碼、暴露的 PLC（可程式邏輯控制器）和缺乏網路分段。研究重點分析了伊朗、俄羅斯和中國這三個國家相關的威脅行為。伊朗相關的行為被認為是機會主義和宣傳性的，主要利用暴露的 PLC；俄羅斯相關的行為則更傾向於直接的破壞性，例如造成市政水箱溢流；而中國（透過 Volt Typhoon）的目標則是建立持久的存取權和戰略的預先部署。所有攻擊的初始存取點都非常相似，包括弱身份驗證、暴露的 PLC/HMI（人機介面）、遠端存取憑證的洩露，甚至透過計費系統或客戶入口網站。這顯示，攻擊者無需客製化的 ICS 惡意軟體，僅需利用基礎的網路弱點即可造成重大風險。",
    tags: ["水系統", "國家級駭客", "PLC", "HMI", "DomainTools", "OT/ICS"],
    title_en: "Analysis of State-Sponsored Attacks Targeting Water Systems: Threat Patterns and Vulnerability Exploitation from Iran, Russia, and China",
    summary_en: "Research from cybersecurity intelligence firm DomainTools indicates that state-sponsored hackers are continuously targeting systems for the regulation, distribution, and protection of water resources. These attacks do not focus on complex malware, but rather exploit systemic weaknesses such as weak passwords, exposed PLCs (Programmable Logic Controllers), and lack of network segmentation. The study analyzes the threat behaviors associated with three countries: Iran, Russia, and China. Iranian-related activities are considered opportunistic and propaganda-driven, primarily exploiting exposed PLCs; Russian-related activities tend toward direct destructive actions, such as causing municipal water tank overflows; while China's (via Volt Typhoon) goal is establishing persistent access and strategic pre-deployment. All attack initial access points are remarkably similar, including weak authentication, exposed PLCs/HMIs (Human-Machine Interfaces), leaked remote access credentials, and even through billing systems or customer portals. This suggests that attackers do not require customized ICS malware, but can inflict significant risk merely by exploiting fundamental network weaknesses.",
    tags_en: ["Water Systems", "State-Sponsored Hackers", "PLC", "HMI", "DomainTools", "OT/ICS"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/ics-ot-security/iran-russia-china-target-water-systems-sabotage", lang: "EN" }
    ]
  },
  {
    id: "20260629-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Amazon Q開發者擴充功能存在高風險漏洞，可透過惡意儲存庫竊取雲端憑證",
    summary: "研究人員Wiz發現Amazon Q開發者擴充功能存在高嚴重性漏洞（CVE-2026-12957）。該漏洞源於Amazon Q處理Model Context Protocol (MCP) 的機制，允許擴充功能在未經使用者明確同意的情況下，自動載入並執行工作區檔案中的MCP伺服器配置。攻擊者可植入惡意儲存庫，誘騙開發者開啟，從而觸發惡意配置的執行。由於這些衍生程序繼承了開發者的完整環境，攻擊者可以竊取開發者會話中所有敏感資訊，包括AWS憑證、API金鑰和SSH代理Socket。Wiz已向AWS披露，AWS已透過更新到Language Server版本1.65.0及以上修復了此問題。然而，專家指出，此漏洞揭示了AI編碼輔助工具和MCP生態系統的普遍風險，建議組織必須將所有具有環境存取權的AI工具視為潛在的憑證外洩路徑，並建立實時風險評分和監控的AI安全護欄。",
    tags: ["Amazon Q", "CVE-2026-12957", "AWS", "MCP", "AI安全", "開發環境"],
    title_en: "High-Risk Vulnerability Found in Amazon Q Developer Extension, Allowing Cloud Credential Theft via Malicious Repository",
    summary_en: "Security researchers at Wiz discovered a high-severity vulnerability (CVE-2026-12957) in the Amazon Q developer extension. The vulnerability stems from how Amazon Q processes the Model Context Protocol (MCP) mechanism, which allows extensions to automatically load and execute MCP server configurations from workspace files without explicit user consent. An attacker can implant a malicious repository to trick developers into opening it, thereby triggering the execution of the malicious configuration. Because these derived processes inherit the developer's full environment, attackers can steal all sensitive information from the developer's session, including AWS credentials, API keys, and SSH agent sockets. Wiz has disclosed this to AWS, which has patched the issue by updating to Language Server version 1.65.0 or later. However, experts point out that this vulnerability reveals a systemic risk across AI coding assistance tools and the MCP ecosystem, advising organizations that all AI tools with environment access must be treated as potential credential leakage paths, necessitating the establishment of real-time risk scoring and monitoring AI safety guardrails.",
    tags_en: ["Amazon Q", "CVE-2026-12957", "AWS", "MCP", "AI Security", "Development Environment"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cloud-security/amazon-q-vs-extension-flaw-leads-cloud-credential-theft", lang: "EN" }
    ]
  },
  {
    id: "20260629-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "pgAdmin 4 釋出 9.16 版修補 7 項漏洞：高權限資料庫管理工具面臨 XSS 與遠端代碼執行風險",
    summary: "PostgreSQL 資料庫管理工具 pgAdmin 4 近期發布了 9.16 版本，修補了多達 7 項資安漏洞。由於 pgAdmin 具備管理 PostgreSQL 資料庫的高權限，用戶應高度警覺並儘速更新。其中，CVSS 評分最高的漏洞為 CVE-2026-12048，這是一個儲存型跨網站指令碼（XSS）問題，評分達 9.3 分，可能讓攻擊者竊取用戶憑證並從遠端操作資料庫。此外，還有兩項嚴重漏洞，CVE-2026-12045 和 CVE-2026-12046，兩者 CVSS 評分皆為 9.0 分，分別存在於 AI 輔助功能與 SQL Editor 端點，可能導致遠端執行程式碼或未授權存取。建議所有使用 pgAdmin 4 的管理者應立即升級至 9.16 版本，並實施最小權限原則，限制對資料庫管理工具的存取範圍。",
    tags: ["pgAdmin 4", "PostgreSQL", "CVE-2026-12048", "XSS", "遠端執行程式碼", "資料庫管理"],
    title_en: "pgAdmin 4 Releases 9.16 Version Patching 7 Vulnerabilities: High-Privilege Database Tool Faces XSS and RCE Risks",
    summary_en: "The PostgreSQL database management tool pgAdmin 4 recently released version 9.16, patching up to 7 security vulnerabilities. Given that pgAdmin possesses high privileges for managing PostgreSQL databases, users should be highly vigilant and update promptly. Among these, the vulnerability with the highest CVSS score is CVE-2026-12048, a Stored Cross-Site Scripting (XSS) issue, scoring 9.3. This could potentially allow an attacker to steal user credentials and remotely operate the database. Additionally, there are two critical vulnerabilities, CVE-2026-12045 and CVE-2026-12046, both scoring 9.0 CVSS. These exist in the AI assistance feature and the SQL Editor endpoint, respectively, and could lead to Remote Code Execution (RCE) or unauthorized access. All administrators using pgAdmin 4 are advised to immediately upgrade to version 9.16 and implement the principle of least privilege, restricting the scope of access to the database management tool.",
    tags_en: ["pgAdmin 4", "PostgreSQL", "CVE-2026-12048", "Remote Code Execution", "Database Management"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176955", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "康乃爾大學揭露 WARP 攻擊：AI研究代理易受使用者生成內容（UGC）投毒誤導",
    summary: "美國康乃爾大學研究團隊發布報告，揭示新型攻擊手法 WARP（Web Agent Retrieval Poisoning）。此攻擊不需入侵AI模型或服務供應商，而是利用AI研究代理（如STORM、Co-STORM、OmniThink）對公開網路內容（UGC）的過度信任。駭客只需在Reddit、Wikipedia等高頻被AI檢索的UGC平臺，加入少量惡意文字，即可誤導AI將虛構產品、服務或投資標的納入最終報告。研究指出，AI研究代理高度依賴UGC，且在處理相近問題時，常會反覆查詢同一批來源。實驗證實，即使惡意內容僅佔頁面極小比例，AI代理仍有高機率將其納入報告。因此，如何建立來源可信度判斷機制，是未來AI代理安全的核心課題。",
    tags: ["WARP", "AI研究代理", "UGC", "Reddit", "資訊安全", "內容投毒"],
    title_en: "Cornell University Uncovers WARP Attack: AI Research Agents Vulnerable to User-Generated Content (UGC) Poisoning and Misdirection",
    summary_en: "A research team from Cornell University published a report revealing a novel attack technique called WARP (Web Agent Retrieval Poisoning). This attack does not require infiltrating AI models or service providers; instead, it exploits the over-reliance of AI research agents (such as STORM, Co-STORM, and OmniThink) on public web content (UGC). Hackers only need to introduce a small amount of malicious text on UGC platforms frequently indexed by AI, such as Reddit and Wikipedia, to mislead the AI into including fictional products, services, or investment targets in its final report. The research indicates that AI research agents highly depend on UGC and often repeatedly query the same sources when handling similar queries. Experiments demonstrated that even when malicious content constitutes a very small proportion of the page, the AI agent has a high probability of including it in the report. Therefore, establishing a mechanism for source credibility judgment is the core challenge for future AI agent security.",
    tags_en: ["WARP", "AI research agents", "UGC", "Reddit", "Information Security", "Content Poisoning"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176940", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "馬來西亞政府部門遭攻擊：Joomla JCE 擴充功能漏洞 CVE-2026-48907 已列 KEV，用戶須立即修補並清除後門",
    summary: "馬來西亞國家網路安全局（NACSA）旗下 NC4 於 6 月 26 日示警，觀察到多起利用 CVE-2026-48907 漏洞的攻擊事件，已影響多個政府部門網站，包括衛生部、合作社委員會等。此漏洞源於 Joomla 內容編輯器（JCE）擴充功能中的存取控制缺陷。該漏洞早在 6 月 5 日公開，且已在 JCE Pro 2.9.99.5 版（6 月 3 日）和 2.9.99.7 版（6 月 18 日）進行修補。美國 CISA 已將此漏洞列入已知漏洞利用清單（KEV）。安全廠商指出，隨著概念驗證程式（PoC）公開，更多未修補的網站將成為目標。除了立即升級至最新修補版本外，受影響用戶更需完整清查並移除殘留的 Webshell 與惡意後門。",
    tags: ["CVE-2026-48907", "Joomla", "JCE", "NACSA", "KEV", "存取控制漏洞"],
    title_en: "Malaysian Government Departments Attacked: Joomla JCE Extension Vulnerability CVE-2026-48907 Listed in KEV; Users Must Patch Immediately and Clear Backdoors",
    summary_en: "NC4, under the Malaysian National Cyber Security Agency (NACSA), issued a warning on June 26, observing multiple attacks utilizing the CVE-2026-48907 vulnerability, affecting several government department websites, including the Ministry of Health and the Cooperative Commission. This vulnerability stems from an access control flaw in the Joomla Content Editor (JCE) extension. The vulnerability was disclosed on June 5 and has since been patched in JCE Pro versions 2.9.99.5 (on June 3) and 2.9.99.7 (on June 18). The U.S. CISA has listed this vulnerability in the Known Exploited Vulnerabilities (KEV) catalog. Security vendors point out that with the public release of Proof-of-Concept (PoC) code, more unpatched websites will become targets. In addition to immediately upgrading to the latest patched version, affected users must thoroughly inspect and remove any residual Webshells and malicious backdoors.",
    tags_en: ["CVE-2026-48907", "Joomla", "JCE", "NACSA", "KEV", "Access Control Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176938", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-031",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux核心漏洞揭露：DirtyClone與pedit COW等高風險LPE，CVSS高達8.8分，需即時修補",
    summary: "多個Linux本機權限提升（LPE）漏洞在近期被揭露，其中最為嚴重的為DirtyClone（CVE-2026-43503），由JFrog發現，允許無特權本機使用者操弄Linux頁面快取，進而獲取root權限，CVSS 3.1嚴重性評分為8.8分。另有pedit COW（CVE-2026-46331），存在於Linux核心的流量控制子系統，亦可讓本機使用者繞過安全控制，獲得root權限，CVSS 嚴重性評分為7.3分。此外，Google也發布了Chrome和ChromeOS的更新，修補了多項記憶體相關的UAF及整數溢位漏洞。實務上，建議所有使用Linux核心的系統管理員應立即檢查並應用最新的核心修補程式，特別是針對v7.1-rc5及以上版本的系統。同時，應關注其他高風險的本機權限漏洞，以避免被攻擊者利用。",
    tags: ["Linux核心", "LPE", "CVE-2026-43503", "CVE-2026-46331", "root權限", "本機權限提升"],
    title_en: "Linux Kernel Vulnerabilities Exposed: High-Risk LPEs like DirtyClone and pedit COW, CVSS up to 8.8, Require Immediate Patching",
    summary_en: "Multiple Linux local privilege escalation (LPE) vulnerabilities have been recently disclosed. The most severe is DirtyClone (CVE-2026-43503), discovered by JFrog. It allows unprivileged local users to manipulate Linux page cache, thereby obtaining root privileges, with a CVSS 3.1 severity score of 8.8. Another vulnerability is pedit COW (CVE-2026-46331), located in the Linux kernel's traffic control subsystem. This also allows local users to bypass security controls and gain root privileges, with a CVSS severity score of 7.3. Furthermore, Google released updates for Chrome and ChromeOS, patching multiple memory-related UAF and integer overflow vulnerabilities. Practically, system administrators using Linux kernels are advised to immediately check and apply the latest kernel patches, especially for systems running v7.1-rc5 and above. Concurrently, attention should be paid to other high-risk local privilege vulnerabilities to prevent exploitation by attackers.",
    tags_en: ["Linux Kernel", "LPE", "CVE-2026-43503", "CVE-2026-46331", "root privileges", "Local Privilege Escalation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176936", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FBI與CISA警示：俄羅斯駭客組織透過偽裝Signal客服，竊取備份復原金鑰接管帳號",
    summary: "美國聯邦調查局（FBI）與網路安全與基礎設施安全局（CISA）更新警示，指出與俄羅斯情報機構相關的駭客組織，已調整攻擊手法，目標是Signal通訊軟體的用戶。攻擊者會偽裝成Signal客服帳號，誘騙受害者提供備份復原金鑰（Backup Recovery Key）。一旦受害者洩露此金鑰，攻擊者便能還原受害者的私人與群組對話紀錄，並接管帳號。FBI強調，即使受害者使用相同電話號碼重新建立帳號，舊金鑰仍可能持續被濫用。為防範，Signal用戶應立即透過「設定」選項重新產生新的備份復原金鑰，使舊金鑰失效。此次攻擊主要鎖定美國政府官員、軍人、政治人物及烏克蘭重要人士，用戶應警惕任何要求提供驗證碼、PIN碼或備份復原金鑰的訊息，並知悉Signal原廠不會透過對話訊息要求這些敏感資訊。",
    tags: ["Signal", "FBI", "CISA", "備份復原金鑰", "俄羅斯駭客", "帳號接管", "釣魚攻擊"],
    title_en: "FBI and CISA Warn: Russian Hacker Group Steals Backup Recovery Keys by Impersonating Signal Support to Take Over Accounts",
    summary_en: "The FBI and CISA have issued updated warnings, pointing out that a hacker group linked to Russian intelligence agencies has adjusted its attack methods, targeting users of the Signal communication software. The attackers impersonate Signal customer service accounts, tricking victims into providing their Backup Recovery Keys. Once the victim leaks this key, the attackers can restore the victim's private and group conversation records and take over the account. The FBI emphasized that even if the victim re-establishes the account using the same phone number, the old key may remain vulnerable to abuse. To prevent this, Signal users should immediately regenerate a new Backup Recovery Key via the 'Settings' option, invalidating the old key. This attack primarily targets US government officials, military personnel, political figures, and key individuals in Ukraine. Users should be vigilant against any messages requesting verification codes, PINs, or Backup Recovery Keys, and remember that Signal itself will never request such sensitive information through a chat message.",
    tags_en: ["Signal", "FBI", "CISA", "Backup Recovery Key", "Russian Hackers", "Account Takeover", "Phishing Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176929", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GlassWorm蠕蟲變種在VS Code延伸套件市集橫行，利用WASM惡意程式及Solana鏈進行遠端命令執行",
    summary: "資安公司Socket發現，駭客在Open VSX延伸套件市集植入了兩款惡意VS Code套件（exargd/vsblack@0.0.1、noellee-doc/flint-debug@0.1.1）。這些套件嵌入了WebAssembly惡意軟體GlassWASM，並利用Solana區塊鏈作為C2（命令與控制）通道，在開發環境執行遠端命令。攻擊者的高度偽裝性使其名稱、版本及說明資料與正規套件完全一致，難以察覺。惡意程式採用ChaCha20演算法加密所有資訊，並透過輪詢Solana的JSON-RPC API讀取攻擊者控制錢包的SPL Memo欄位來解析C2主機網域名稱，使得傳統的封鎖機制失效。Socket推測，本次攻擊的策略與目標，可能與開發GlassWorm的駭客團體有關。建議開發者應提高警覺，並考慮實施更深層的行為分析與監控，以應對利用區塊鏈作為C2通道的複雜威脅。",
    tags: ["GlassWorm", "VS Code", "Open VSX", "WebAssembly", "Solana", "C2", "蠕蟲"],
    title_en: "GlassWorm Worm Variant Spreads in VS Code Extension Marketplace, Exploiting WASM Malicious Code and Solana Chain for Remote Command Execution",
    summary_en: "Security firm Socket discovered that hackers have planted two malicious VS Code extensions (exargd/vsblack@0.0.1, noellee-doc/flint-debug@0.1.1) in the Open VSX extension marketplace. These extensions embed WebAssembly malicious software, GlassWASM, and utilize the Solana blockchain as a C2 (Command and Control) channel to execute remote commands within development environments. The attackers' high degree of camouflage—making the names, versions, and descriptions identical to legitimate extensions—makes them difficult to detect. The malicious code uses the ChaCha20 algorithm to encrypt all information and reads the attacker's control wallet's SPL Memo field by polling the Solana JSON-RPC API to resolve the C2 host domain name, bypassing traditional blocking mechanisms. Socket speculates that the strategy and targets of this attack may be related to the hacking group that developed GlassWorm. Developers are advised to increase vigilance and consider implementing deeper behavioral analysis and monitoring to address complex threats that utilize blockchain as a C2 channel.",
    tags_en: ["GlassWorm", "VS Code", "Open VSX", "WebAssembly", "Solana", "C2", "Worm"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176927", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google ChromeOS LTS-144 更新修補 24 項漏洞，包含高風險 UAF 與越界讀寫問題",
    summary: "Google 發布 ChromeOS 作業系統長期支援版 LTS-144 的更新版本 144.0.7559.256，修補了共 24 項安全漏洞。其中，有 5 項被評為重大風險，18 項為高風險，以及 1 項中度風險。本次修補的漏洞類型以記憶體安全問題為主，佔比超過八成。風險最高的漏洞為 CVE-2026-12440，屬於數位身分憑證元件 Digital Credentials 的記憶體已釋放卻仍被使用（UAF）問題，其 CVSS 嚴重性評分達 9.6 分。此外，還有 CVE-2026-13033、CVE-2026-12439 與 CVE-2026-12441 等三項漏洞，CVSS 評分皆達 8.8 分，分別涉及網頁核心引擎 Blink、數位身分憑證元件和檔案上傳元件，問題類型包括越界讀取和 UAF。由於漏洞多為記憶體相關，建議使用者應儘速更新至最新版本，以修補這些潛在的記憶體安全漏洞，避免遭受攻擊。",
    tags: ["Google", "ChromeOS", "CVE-2026-12440", "UAF", "記憶體安全", "LTS-144"],
    title_en: "Google ChromeOS LTS-144 Update Patches 24 Vulnerabilities, Including High-Risk UAF and Out-of-Bounds Read/Write Issues",
    summary_en: "Google has released an update for the ChromeOS Long-Term Support version LTS-144, version 144.0.7559.256, which patches a total of 24 security vulnerabilities. Of these, 5 are rated as critical, 18 as high-risk, and 1 as medium-risk. The majority of the patched vulnerabilities relate to memory safety issues, accounting for over 80%. The highest-risk vulnerability is CVE-2026-12440, which is a Use-After-Free (UAF) issue in the Digital Credentials component, achieving a CVSS severity score of 9.6. Additionally, three vulnerabilities—CVE-2026-13033, CVE-2026-12439, and CVE-2026-12441—each have a CVSS score of 8.8. These involve the Blink web core engine, the Digital Credentials component, and the file upload component, respectively, with issues including out-of-bounds read and UAF. Since most of the vulnerabilities are memory-related, users are advised to update to the latest version promptly to patch these potential memory safety flaws and prevent exploitation.",
    tags_en: ["Google", "ChromeOS", "CVE-2026-12440", "UAF", "Memory Safety", "LTS-144"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176925", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "卡巴斯基揭露中國駭客攻擊行動StrikeShark：利用多種漏洞滲透政府與企業",
    summary: "資安公司卡巴斯基揭露一場由中國駭客執行的攻擊行動StrikeShark。該行動利用惡意程式SharkLoader，目標是植入Cobalt Strike的Beacon，受害範圍涵蓋臺灣政府機構、印尼外交機構，以及多國軟體開發公司。攻擊者取得初期存取管道的方式包括利用網路應用程式的已知漏洞，或透過網路釣魚散播偽裝的軟體。駭客利用的漏洞類型多元，包括遠端程式碼執行（RCE）和身分驗證繞過。具體案例包括：針對臺灣政府機構利用Openfire的身分驗證繞過漏洞CVE-2023-32315；針對印尼外交機構則利用了包含ProxyLogon（CVE-2021-26855）在內的多項Exchange弱點。此外，攻擊者還利用了SharePoint、Zimbra、F5 BIG-IP、Fortinet防火牆作業系統等多個產品的RCE漏洞，以及思科IOS XE等身分驗證繞過漏洞。文章提醒，企業應高度警惕未修補的應用程式伺服器漏洞，並應及時修補所有已知的資安漏洞。",
    tags: ["卡巴斯基", "StrikeShark", "Cobalt Strike", "CVE-2023-32315", "CVE-2021-26855", "RCE", "政府機構"],
    title_en: "Kaspersky Uncovers Chinese Hacker Campaign StrikeShark: Exploiting Multiple Vulnerabilities to Infiltrate Governments and Enterprises",
    summary_en: "Cybersecurity company Kaspersky has uncovered an attack campaign named StrikeShark, executed by Chinese hackers. This campaign utilized the malicious program SharkLoader to implant Cobalt Strike Beacons, targeting Taiwanese government agencies, Indonesian diplomatic missions, and multiple multinational software development companies. The attackers gained initial access by exploiting known vulnerabilities in web applications or by distributing disguised software through phishing. The vulnerabilities exploited were diverse, including Remote Code Execution (RCE) and authentication bypass. Specific cases include: exploiting an Openfire authentication bypass vulnerability (CVE-2023-32315) targeting Taiwanese government agencies; and exploiting multiple Exchange weaknesses, including ProxyLogon (CVE-2021-26855), targeting Indonesian diplomatic missions. Furthermore, the attackers utilized RCE vulnerabilities in multiple products such as SharePoint, Zimbra, F5 BIG-IP, and Fortinet firewall operating systems, as well as authentication bypass vulnerabilities in Cisco IOS XE. The article warns that enterprises must be highly vigilant regarding unpatched application server vulnerabilities and should promptly patch all known security flaws.",
    tags_en: ["Kaspersky", "StrikeShark", "Cobalt Strike", "CVE-2023-32315", "CVE-2021-26855", "RCE", "Government Agencies"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176924", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國資安集團 Mustang Panda 濫用 Zoho WorkDrive 進行情報竊取，目標鎖定印度政府與水力發電設施",
    summary: "資安公司 Acronis 報告指出，與中國相關的間諜組織 Mustang Panda 正在針對印度政府和水力發電目標執行兩場活動。該組織利用 Zoho WorkDrive 這款常見於印度政府部門的雲端儲存服務，作為其命令與控制（C2）通道，來傳遞指令和竊取資料。攻擊者透過惡意 DLL 偽裝成合法簽署的二進位檔案（如 Solid PDF Creator 或 Citrix Receiver）進行側載（sideloading），並使用 ZOHOMURK 工具，利用硬編碼的 Zoho OAuth 憑證，將受害者控制的 WorkDrive 帳戶作為「死信箱」（dead drop）。攻擊的目的是竊取印度關於水力發電計畫和與台灣防務關係的情報。由於攻擊利用了合法雲端服務的流量特性，使得惡意流量能夠隱藏在日常的雲端活動中。由於此類攻擊屬於行為層面，目前沒有可直接修補的補丁。建議政府和能源機構應警惕地緣政治誘餌、來自簽署二進位檔案的側載行為，並監控任何沒有業務理由的端點程序呼叫雲端 API。",
    tags: ["Mustang Panda", "Zoho WorkDrive", "側載攻擊", "情報竊取", "印度政府", "DLL 惡意程式"],
    title_en: "China Cyber Group Mustang Panda Exploits Zoho WorkDrive for Intelligence Theft, Targeting Indian Government and Hydroelectric Facilities",
    summary_en: "Security company Acronis reported that the China-linked espionage group Mustang Panda is conducting two campaigns targeting Indian government and hydroelectric facilities. The group is utilizing Zoho WorkDrive, a cloud storage service common in Indian government departments, as its command and control (C2) channel to deliver commands and exfiltrate data. Attackers are performing sideloading by disguising malicious DLLs as legitimately signed binaries (such as Solid PDF Creator or Citrix Receiver), and using the ZOHOMURK tool to leverage hardcoded Zoho OAuth credentials. They use the victim's controlled WorkDrive account as a \"dead drop.\" The objective of the attack is to steal Indian intelligence regarding hydroelectric projects and defense relations with Taiwan. Because the attack utilizes the traffic characteristics of a legitimate cloud service, the malicious traffic can hide within routine cloud activity. Since this type of attack is behavioral, there are currently no directly patchable vulnerabilities. It is recommended that government and energy organizations be vigilant against geopolitical lures, sideloading from signed binaries, and monitor any endpoint process calling cloud APIs without a clear business justification.",
    tags_en: ["Mustang Panda", "Zoho WorkDrive", "Sideloading Attack", "Intelligence Theft", "Indian Government", "DLL Malware"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/mustang-panda-uses-zoho-workdrive-as.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-037",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "DirtyClone：新版 Linux 核心漏洞允許本地使用者透過偽造封包取得 Root 權限",
    summary: "本週資安研究人員揭露了 DirtyClone，這是 Dirty Frag Linux 核心漏洞的一個新變種。此漏洞（代號 CVE-2026-43503）允許本地使用者透過偽造封包（cloned packets）來提升至 Root 權限。該漏洞在預設命名空間配置的 Debian、Ubuntu 和 Fedora 系統上可成功利用。若本地使用者擁有或能取得 CAP_NET_ADMIN 能力，風險極高。這對多租戶雲端環境、Kubernetes 叢集和容器化工作負載構成最大威脅，尤其是在啟用使用者命名空間或部署特權容器的場景。修補建議是立即更新 Linux 核心至修補版本，並特別關注多租戶環境的配置安全。此外，文章也提及了 PTC Windchill PDMlink 和 PTC FlexPLM 存在可被利用的遠端程式碼執行漏洞（CVE-2026-12569），建議用戶應儘快安裝官方修補程式。",
    tags: ["DirtyClone", "CVE-2026-43503", "Linux Kernel", "Root 權限提升", "多租戶雲端", "CVE-2026-12569"],
    title_en: "DirtyClone: New Linux Kernel Vulnerability Allows Local Users to Obtain Root Privileges via Spoofed Packets",
    summary_en: "This week, security researchers disclosed DirtyClone, a new variant of the Dirty Frag Linux kernel vulnerability. This vulnerability (designated CVE-2026-43503) allows local users to escalate to Root privileges by using cloned packets. The vulnerability can be successfully exploited on Debian, Ubuntu, and Fedora systems with default namespace configurations. The risk is extremely high if a local user possesses or can acquire CAP_NET_ADMIN capability. This poses the greatest threat to multi-tenant cloud environments, Kubernetes clusters, and containerized workloads, especially in scenarios where user namespaces are enabled or privileged containers are deployed. The recommended mitigation is to immediately update the Linux kernel to the patched version, with special attention paid to configuration security in multi-tenant environments. Furthermore, the article also mentions exploitable Remote Code Execution (RCE) vulnerabilities in PTC Windchill PDMlink and PTC FlexPLM (CVE-2026-12569), advising users to install official patches as soon as possible.",
    tags_en: ["DirtyClone", "CVE-2026-43503", "Linux Kernel", "Privilege Escalation", "Multi-tenant Cloud", "CVE-2026-12569"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/weekly-recap-linux-kernel-flaws-ai.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "APT組織Gamaredon持續擴大對烏克蘭的網路攻擊，利用WinRAR漏洞及多種雲端服務進行持久化",
    summary: "網路安全公司ESET觀察到，俄羅斯APT組織Gamaredon在2025年持續對烏克蘭政府和軍事機構發動spear-phishing（魚叉式網路釣魚）攻擊。攻擊者利用HTML smuggling技術，透過壓縮檔或XHTML檔案傳遞惡意HTA下載器，進一步投送PteroSand等Payload。攻擊鏈中甚至武器化了WinRAR的一個已修補漏洞（CVE-2025-8088），將惡意下載器放置於受害者Windows啟動資料夾，以建立持久化機制。此外，Gamaredon還利用PteroLNK和PteroPaste等工具，透過感染USB或網路共用資料夾的LNK檔案來實現橫向移動。該組織還開發了多個新的PowerShell工具，並大量使用Telegra.ph、Dropbox、GoFile等合法線上服務作為C2伺服器和資料外洩的通道，使其操作更具彈性且難以追蹤。",
    tags: ["Gamaredon", "APT", "spear-phishing", "CVE-2025-8088", "烏克蘭", "持久化", "PowerShell"],
    title_en: "APT Group Gamaredon Continues Expanding Cyber Attacks Against Ukraine, Exploiting WinRAR Vulnerability and Various Cloud Services for Persistence",
    summary_en: "Cybersecurity company ESET observed that the Russian APT group Gamaredon has been continuously launching spear-phishing attacks against Ukrainian government and military institutions in 2025. The attackers utilize HTML smuggling techniques, delivering malicious HTA downloaders via compressed or XHTML files, and subsequently deploying payloads such as PteroSand. The attack chain even weaponized a patched WinRAR vulnerability (CVE-2025-8088), placing the malicious downloader in the victim's Windows startup folder to establish persistence. Furthermore, Gamaredon uses tools like PteroLNK and PteroPaste to achieve lateral movement through LNK files infected in USB drives or network shared folders. The group has also developed multiple new PowerShell tools and heavily utilizes legitimate online services such as Telegra.ph, Dropbox, and GoFile as C2 servers and data exfiltration channels, making their operations more flexible and difficult to trace.",
    tags_en: ["Gamaredon", "APT", "spear-phishing", "CVE-2025-8088", "Ukraine", "Persistence", "PowerShell"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/gamaredon-expands-ukraine-attacks-with.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Microsoft移除119個惡意Edge擴充功能：揭露StegoAd利用隱寫術竊取憑證與進行廣告詐騙",
    summary: "微軟（Microsoft）宣布關閉一個名為StegoAd的惡意擴充功能操作，該操作利用隱寫術（steganography）將惡意程式碼藏匿於看似正常的圖片和字體檔案中。該惡意擴充功能涉及119個類廣告攔截器、VPN等應用程式，可追溯至至少2021年。攻擊者利用PNG圖標的IEND標記、WebP圖片及WOFF2字體等方式隱藏程式碼，使其能逃避靜態掃描。其最終目的包括執行遠端程式碼（RCE）、竊取Google帳號憑證、WordPress管理員登入資訊，並進行廣告詐騙。微軟已移除所有相關擴充功能並暫停了相關開發者帳號。用戶應立即檢查已安裝的擴充功能，並為Google、銀行等敏感帳號更改密碼，同時啟用硬體安全金鑰作為雙因素驗證，以防範憑證被竊。",
    tags: ["Microsoft", "Edge 擴充功能", "StegoAd", "隱寫術", "憑證竊取", "RCE", "惡意軟體"],
    title_en: "Microsoft Removes 119 Malicious Edge Extensions: Exposing StegoAd's Use of Steganography to Steal Credentials and Commit Ad Fraud",
    summary_en: "Microsoft announced the shutdown of a malicious extension operation named StegoAd. This operation utilizes steganography to conceal malicious code within seemingly normal image and font files. The malicious extension affected approximately 119 applications, including ad blockers and VPNs, with activity traceable back to at least 2021. Attackers concealed code using methods such as the IEND marker in PNG icons, WebP images, and WOFF2 fonts, allowing the code to evade static scanning. The ultimate goals included executing Remote Code Execution (RCE), stealing Google account credentials, and compromising WordPress administrator login information, as well as conducting ad fraud. Microsoft has removed all related extensions and suspended the associated developer accounts. Users are advised to immediately check their installed extensions and change passwords for sensitive accounts, such as Google and banks. Furthermore, they should enable hardware security keys for two-factor authentication to prevent credential theft.",
    tags_en: ["Microsoft", "Edge Extensions", "StegoAd", "Steganography", "Credential Theft", "RCE", "Malware"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/microsoft-removes-119-edge-extensions.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "公開 PoC 揭露 libssh2 關鍵漏洞 CVE-2026-55200，可透過惡意 SSH 伺服器觸發記憶體溢出",
    summary: "libssh2 函式庫存在一個嚴重的記憶體錯誤，CVE-2026-55200，允許攻擊者透過惡意 SSH 伺服器，在未經使用者互動和憑證的情況下，觸發連線客戶端的記憶體損壞，並可能導致程式碼執行。此漏洞影響所有版本，直到 1.11.1 為止，CVSS 評分為 9.2。此函式庫本身是客戶端用，但被嵌入到 curl、Git、PHP 等眾多應用程式和設備韌體中。漏洞源於 `ssh2_transport_read()` 函數在解析 SSH 封包時，未對攻擊者控制的 `packet_length` 欄位設置上限，導致在進行大小計算時發生整數溢位，進而造成越界堆寫（CWE-680）。修補建議包括：全面盤點所有使用 libssh2 的應用程式，特別是靜態連結的副本；應立即升級到包含修補程式的建置版本；在修補完成前，應限制出站 SSH 連線至可信伺服器，並留意異常的超大封包或客戶端崩潰。",
    tags: ["libssh2", "CVE-2026-55200", "記憶體溢出", "SSH", "PoC", "CWE-680"],
    title_en: "Public PoC reveals critical libssh2 vulnerability CVE-2026-55200, exploitable via malicious SSH server memory overflow",
    summary_en: "The libssh2 library contains a critical memory error, CVE-2026-55200. This vulnerability allows an attacker to trigger memory corruption in a connecting client, potentially leading to code execution, without requiring user interaction or credentials, by utilizing a malicious SSH server. The vulnerability affects all versions up to and including 1.11.1, with a CVSS score of 9.2. While the library itself is client-side, it is embedded in numerous applications and device firmware, including curl, Git, and PHP. The flaw originates in the `ssh2_transport_read()` function, which fails to set an upper limit on the attacker-controlled `packet_length` field when parsing SSH packets. This results in an integer overflow during size calculation, leading to a buffer overflow (CWE-680). Remediation recommendations include: comprehensively inventorying all applications using libssh2, especially statically linked copies; immediately upgrading to a patched build version; and until patching is complete, restricting outbound SSH connections to trusted servers and monitoring for anomalous oversized packets or client crashes.",
    tags_en: ["libssh2", "CVE-2026-55200", "Memory Overflow", "SSH", "PoC", "CWE-680"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/public-poc-released-for-critical.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-041",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果加速發布 iOS/iPadOS/macOS 26.5.2 安全更新，應對 AI 驅動的駭客威脅",
    summary: "蘋果公司於今日發布了 iOS 26.5.2、iPadOS 26.5.2 和 macOS 26.5.2 的安全更新，其中包含針對核心（kernel）、WebKit 和 WebRTC 等元件的漏洞修補。這些修補內容原本計畫在 26.6 版本中釋出，但蘋果決定提前公開，以應對日益強大的人工智慧（AI）模型所帶來的駭客威脅。蘋果指出，由於 AI 能夠加速惡意駭客工具的開發，為了縮短從修補程式公開到用戶手中落實的時間差，公司選擇了提前發布。儘管目前沒有證據顯示這些新修補的漏洞已被利用，但蘋果仍認為提前修補是必要的預防措施。此舉反映了科技產業對 AI 提升網路攻擊能力的高度警覺，促使作業系統廠商必須加快安全修補的部署速度。",
    tags: ["Apple", "iOS", "iPadOS", "macOS", "安全更新", "AI 威脅", "WebKit", "WebRTC"],
    title_en: "Apple Accelerates Release of iOS/iPadOS/macOS 26.5.2 Security Update to Counter AI-Driven Hacker Threats",
    summary_en: "Apple today released security updates for iOS 26.5.2, iPadOS 26.5.2, and macOS 26.5.2. These updates include patches for components such as the kernel, WebKit, and WebRTC. Although these patches were originally scheduled for release in version 26.6, Apple decided to release them early to address the escalating hacker threats posed by increasingly powerful Artificial Intelligence (AI) models. Apple noted that because AI can accelerate the development of malicious hacking tools, the company chose to release the update early to shorten the time gap between patch publication and deployment to users. Although there is currently no evidence that these newly patched vulnerabilities have been exploited, Apple believes that proactive patching is necessary. This move reflects the technology industry's high awareness of AI's ability to enhance cyber attack capabilities, compelling operating system vendors to accelerate the deployment speed of security patches.",
    tags_en: ["Apple", "iOS", "iPadOS", "macOS", "Security Update", "AI Threat", "WebKit", "WebRTC"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/apple-accelerates-security-updates-in-response-to-ai-powered-hacking-risks", lang: "EN" }
    ]
  },
  {
    id: "20260629-042",
    trackers: ["os"],
    category: "Apple",
    title: "TrendForce報告預測：未來Apple OLED產品將支援更廣色域，目標達到BT.2020標準",
    summary: "根據TrendForce的報告，Apple在將OLED技術擴展至MacBook Pro、iPad Pro和iMac等產品線時，目標是採用能夠達到BT.2020色域覆蓋率95%的OLED面板。這代表Apple的OLED產品將涵蓋從iPhone到Mac等幾乎所有主要產品類別。BT.2020標準對色彩純度、光譜控制、發光效率和功耗提出了比現行DCI-P3更高的要求。為達成此目標，顯示器製造商正朝著提升色彩純度、能源效率和整體性能的平衡發展。技術進步包括使用多共振熱活化延遲螢光（MR-TADF）來提高色彩純度，以及利用超螢光（Hyperfluorescence）和磷光輔助熱活化感光螢光（pTSF）等先進材料架構來提升能源效率和延長壽命。這促使供應鏈重新思考材料採購，並將競爭重點從單純的效率提升轉向平衡成本、可製造性和智慧財產風險的材料平台開發。",
    tags: ["Apple", "OLED", "MacBook Pro", "iPad Pro", "BT.2020", "TADF", "顯示器技術"],
    title_en: "TrendForce Report Predicts: Future Apple OLED Products Will Support Wider Color Gamut, Targeting BT.2020 Standard",
    summary_en: "According to a TrendForce report, when expanding OLED technology to product lines such as MacBook Pro, iPad Pro, and iMac, Apple aims to adopt OLED panels capable of achieving 95% BT.2020 color gamut coverage. This means Apple's OLED products will cover nearly all major product categories, from the iPhone to the Mac. The BT.2020 standard sets higher requirements for color purity, spectral control, luminous efficiency, and power consumption compared to the current DCI-P3. To achieve this goal, display manufacturers are focusing on balancing improvements in color purity, energy efficiency, and overall performance. Technological advancements include using multi-resonant thermally activated delayed fluorescence (MR-TADF) to enhance color purity, and utilizing advanced material architectures such as hyperfluorescence and phosphorescent thermally activated sensitizing fluorescence (pTSF) to boost energy efficiency and extend lifespan. This prompts the supply chain to rethink material sourcing, shifting the competitive focus from mere efficiency gains toward developing material platforms that balance cost, manufacturability, and intellectual property risk.",
    tags_en: ["Apple", "OLED", "MacBook Pro", "iPad Pro", "BT.2020", "TADF", "Display Technology"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/future-oled-macs-and-ipads-could-support-a-much-wider-color-gamut-per-report", lang: "EN" }
    ]
  },
  {
    id: "20260629-043",
    trackers: ["os"],
    category: "Apple",
    title: "OpenClaw 推出官方 iOS/Android App，強化個人 AI 助理的設備整合與安全性",
    summary: "OpenClaw 宣布發布官方的行動應用程式，支援 iOS 和 Android 平台。這款應用程式定位為個人 AI 助理，允許使用者在自己的設備上運行和管理 AI 體驗。用戶可以透過 QR Code 或設定代碼將其配對至私有的 OpenClaw Gateway，從 iPhone 進行聊天、語音互動、審批動作、分享內容，並啟用設備的各種能力（如相機、位置、聯絡人等）。OpenClaw 強調「本地優先」（local-first）的設計理念，使用者完全控制其 Gateway、金鑰和權限，設備存取權限也需透過 iOS 權限管理。這使得用戶能夠在不依賴雲端服務的情況下，安全地使用 AI 助理功能，並接收工作流程的推送通知和節點狀態更新。",
    tags: ["OpenClaw", "AI 助理", "iOS", "Android", "本地化", "設備整合", "OpenAI"],
    title_en: "OpenClaw Launches Official iOS/Android App to Enhance Device Integration and Security for Personal AI Assistants",
    summary_en: "OpenClaw announced the release of its official mobile application, supporting both iOS and Android platforms. Positioned as a personal AI assistant, the app allows users to run and manage AI experiences directly on their own devices. Users can pair the app to a private OpenClaw Gateway using a QR Code or setup code, enabling features such as chatting, voice interaction, approving actions, and sharing content from an iPhone, while also activating various device capabilities (such as camera, location, and contacts). OpenClaw emphasizes a \"local-first\" design philosophy, ensuring that users maintain complete control over their Gateway, keys, and permissions. Device access permissions must also be managed through iOS permissions. This allows users to safely utilize AI assistant functions and receive workflow push notifications and node status updates without relying on cloud services.",
    tags_en: ["OpenClaw", "AI Assistant", "iOS", "Android", "Localization", "Device Integration", "OpenAI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/openclaw-just-launched-an-official-app-for-iphone-details-here", lang: "EN" }
    ]
  },
  {
    id: "20260629-044",
    trackers: ["os"],
    category: "Apple",
    title: "watchOS 27 預覽：Apple Watch 引入「動態 App 網格」作為全新預設主畫面",
    summary: "本文介紹 watchOS 27 的重大介面更新，Apple 為 Apple Watch 引入了第三種主畫面佈局——「動態 App 網格」（Dynamic app grid），並將其設為新的預設檢視。過去 Apple Watch 的主畫面主要有「網格檢視」（Grid view）和「列表檢視」（List view）。新的動態 App 網格旨在提升用戶體驗，它能自動突出顯示 Siri 建議的應用程式，包括最常用和最近使用的應用，並且將 Siri App 保持在中央。用戶透過點擊數位錶冠（Digital Crown）可直接進入此動態網格。雖然動態網格是新的預設，但舊有的網格和列表檢視仍可透過底部的快捷方式存取。這項更新的重點在於其應用程式建議的相關性，預計能更符合用戶主要透過複雜功能（Complications）或小工具（Widgets）互動的習慣。此為介面設計更新，無提及任何安全漏洞或修補建議。",
    tags: ["watchOS 27", "Apple Watch", "主畫面", "動態 App 網格", "介面更新"],
    title_en: "watchOS 27 Preview: Apple Watch Introduces 'Dynamic App Grid' as New Default Home Screen",
    summary_en: "This article introduces major interface updates for watchOS 27. Apple has introduced a third home screen layout for the Apple Watch: the 'Dynamic App Grid,' and set it as the new default view. Previously, the Apple Watch home screen primarily featured 'Grid view' and 'List view.' The new Dynamic App Grid aims to enhance user experience by automatically highlighting Siri-suggested applications, including frequently used and recently accessed apps, while keeping the Siri App centered. Users can access this dynamic grid directly by clicking the Digital Crown. Although the Dynamic Grid is the new default, the older Grid and List views remain accessible via shortcuts at the bottom. The focus of this update is the relevance of its app suggestions, which is expected to better align with user habits that primarily interact through Complications or Widgets. This is an interface design update and does not mention any security vulnerabilities or patch recommendations.",
    tags_en: ["watchOS 27", "Apple Watch", "Home Screen", "Dynamic App Grid", "Interface Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/watchos-27-has-brand-new-default-home-screen-for-apple-watch", lang: "EN" }
    ]
  },
  {
    id: "20260629-045",
    trackers: ["os", "security"],
    category: "Apple",
    title: "iPhone 18 Pro 供應商資料外洩：Apple 相關測試照片及敏感文件曝光",
    summary: "近期發生一起數據洩露事件，受影響的供應商為 Tata Electronics。大量公司敏感文件已在網路上洩露。洩露的資料內容包括了關於即將於九月初發布的 iPhone 18 Pro 的資料，其中特別引起關注的是該機型的跌落測試照片。這些文件揭露了蘋果的供應鏈資訊和產品開發階段的敏感資料。這類事件凸顯了供應鏈安全的重要性，提醒產業鏈夥伴必須加強資料保護機制，防止產品開發過程中的智慧財產權外洩。建議相關企業應實施嚴格的資料分類、存取控制，並定期進行安全稽核，以應對潛在的數據洩露風險。",
    tags: ["Apple", "iPhone 18 Pro", "Tata Electronics", "數據洩露", "供應鏈安全", "智慧財產權"],
    title_en: "iPhone 18 Pro Supplier Data Leak: Apple's Test Photos and Sensitive Documents Exposed",
    summary_en: "A recent data leak incident affected the supplier Tata Electronics. A large volume of sensitive company documents were leaked online. The leaked data included information regarding the iPhone 18 Pro, scheduled for release in early September, with particular attention drawn to drop test photos of the model. These documents reveal Apple's supply chain information and sensitive data from the product development phase. Such incidents highlight the importance of supply chain security, reminding industry partners to strengthen data protection mechanisms to prevent the leakage of intellectual property during the product development process. It is recommended that relevant companies implement strict data classification and access control, and conduct regular security audits to address potential data leakage risks.",
    tags_en: ["Apple", "iPhone 18 Pro", "Tata Electronics", "Data Leakage", "Supply Chain Security", "Intellectual Property"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/iphone-18-pro-drop-tests-dark-web", lang: "EN" }
    ]
  },
  {
    id: "20260629-046",
    trackers: ["os"],
    category: "Apple",
    title: "測試 macOS Golden Gate Beta 版：建議將其安裝至獨立 APFS 分區以避免影響主系統穩定性",
    summary: "本文為用戶提供在測試 macOS Golden Gate Beta 版本時的實用建議。由於 macOS 系統的複雜性，特別是其對舊有軟體和硬體的支援，Beta 版可能存在較高的風險和不穩定的兼容性問題。作者建議，用戶不應將 Beta 版直接安裝到主系統（Production Tahoe volume）上，而是應利用 APFS 檔案系統的特性，在一個獨立的 APFS 分區（separate APFS volume）上進行安裝和測試。這樣做可以讓用戶在充分測試 Beta 版功能和潛在錯誤的同時，仍能保留現有穩定且可靠的公共版本系統，從而最大程度地降低系統運行的風險。",
    tags: ["macOS", "Golden Gate", "APFS", "Beta 版", "macOS Tahoe", "系統更新"],
    title_en: "Testing macOS Golden Gate Beta: Recommended to Install to a Separate APFS Volume to Avoid Impacting Main System Stability",
    summary_en: "This article provides practical advice for users testing the macOS Golden Gate Beta version. Due to the complexity of the macOS system, especially its support for legacy software and hardware, the Beta version may carry higher risks and unstable compatibility issues. The author recommends that users should not install the Beta version directly onto the main system (Production Tahoe volume), but rather utilize the features of the APFS file system to install and test it on a separate APFS volume. Doing so allows users to fully test the Beta version's features and potential bugs while still retaining their current stable and reliable public version system, thereby minimizing the risk to system operation.",
    tags_en: ["macOS", "Golden Gate", "APFS", "Beta", "macOS Tahoe", "System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/how-to-install-macos-golden-gate-on-a-separate-apfs-volume-video", lang: "EN" }
    ]
  },
  {
    id: "20260629-047",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 26.5.2 與 macOS 26.5.2 安全更新，主要修補 WebKit 與 WebRTC 相關漏洞",
    summary: "Apple 今日發布了 iOS 26.5.2 和 macOS 26.5.2 的安全更新，旨在修補近 30 個安全漏洞。這些更新雖然沒有新增功能，但對於所有 iPhone、iPad 和 Mac 用戶都極為重要。根據官方說明，本次修補的內容主要集中在 WebKit 和 WebRTC 等網頁技術相關的漏洞，其中 WebKit 的更新佔了大部分。除了網頁技術的修補外，更新中也包含了一些核心層級的修復。Apple 甚至表示，這些安全修補內容最早是在 iOS 26.6 的 Beta 版本中提供的，但現在已提前發布給所有用戶。建議所有用戶儘快更新至最新版本，以確保設備擁有最新的安全保護。",
    tags: ["Apple", "iOS 26.5.2", "macOS 26.5.2", "WebKit", "WebRTC", "安全更新"],
    title_en: "Apple Releases iOS 26.5.2 and macOS 26.5.2 Security Updates, Primarily Patching WebKit and WebRTC Vulnerabilities",
    summary_en: "Apple today released security updates for iOS 26.5.2 and macOS 26.5.2, aimed at patching nearly 30 security vulnerabilities. Although these updates do not introduce new features, they are crucial for all iPhone, iPad, and Mac users. According to the official statement, the patches primarily focus on vulnerabilities related to web technologies such as WebKit and WebRTC, with the majority of updates targeting WebKit. In addition to web technology patches, the updates also include some core-level fixes. Apple even stated that these security patches were initially provided in the iOS 26.6 Beta version, but are now being released to all users ahead of schedule. All users are advised to update to the latest version as soon as possible to ensure their devices have the latest security protection.",
    tags_en: ["Apple", "iOS 26.5.2", "macOS 26.5.2", "WebKit", "WebRTC", "Security Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/ios-26-5-2-has-fixes-for-25-security-issues-on-iphone-details-here", lang: "EN" }
    ]
  },
  {
    id: "20260629-048",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 macOS Sonoma 14.8.8 與 macOS Sequoia 15.7.8 第三版 RC，提供重要安全修補",
    summary: "Apple 為其作業系統 macOS Sonoma 14.8.8 和 macOS Sequoia 15.7.8 發布了第三版 Release Candidate (RC)。這兩次更新皆包含重要的安全修補，並建議所有用戶進行更新。對於 Sonoma 14.8.8，本次 RC 的建置號為 23J610；對於 Sequoia 15.7.8，本次 RC 的建置號為 24G812。雖然 Apple 尚未在安全發布頁面公布詳細的修補內容，但開發者和用戶應留意這些系統更新，以確保修補最新的安全漏洞。建議用戶透過官方渠道，如 Apple 的支援網站，獲取完整的安全修補資訊。",
    tags: ["Apple", "macOS", "Sonoma", "Sequoia", "安全修補", "RC"],
    title_en: "Apple Releases macOS Sonoma 14.8.8 and macOS Sequoia 15.7.8 Third RC, Providing Important Security Patches",
    summary_en: "Apple has released a third Release Candidate (RC) for its operating systems, macOS Sonoma 14.8.8 and macOS Sequoia 15.7.8. Both updates include important security patches, and all users are advised to update. For Sonoma 14.8.8, the build number for this RC is 23J610; for Sequoia 15.7.8, the build number is 24G812. Although Apple has not yet published the detailed patch contents on the security release page, developers and users should pay attention to these system updates to ensure the latest security vulnerabilities are patched. Users are advised to obtain complete security patch information through official channels, such as the Apple support website.",
    tags_en: ["Apple", "macOS", "Sonoma", "Sequoia", "Security Patch", "RC"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/third-rcs-for-macos-sonoma-14-8-8-and-macos-sequoia-15-7-8-now-available", lang: "EN" }
    ]
  },
  {
    id: "20260629-049",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 macOS 26.5.2 安全更新，修補多項未公開漏洞，建議用戶儘速安裝",
    summary: "Apple 今日發布了 macOS 26.5.2 版本，除了 iOS 和 iPadOS 也有同步更新。本次更新主要提供多項安全修補，旨在修補系統中可能被利用的漏洞。雖然官方發布說明為例行性的安全修補，但文章強調，由於近期曾有 Coruna 和 DarkSword 等漏洞引發緊急修補，用戶應儘快安裝此類小版本更新，以防範已在野外被利用的零日漏洞。建議所有 Mac 用戶應立即檢查並安裝此安全更新，以確保系統的安全性。",
    tags: ["Apple", "macOS", "26.5.2", "安全更新", "漏洞修補", "iOS"],
    title_en: "Apple Releases macOS 26.5.2 Security Update to Patch Multiple Vulnerabilities, Advising Users to Install Promptly",
    summary_en: "Apple today released macOS 26.5.2, with corresponding updates also available for iOS and iPadOS. This update primarily provides multiple security patches aimed at fixing vulnerabilities that could be exploited within the system. Although the official release notes describe routine security patches, the article emphasizes that due to recent emergency patches triggered by vulnerabilities such as Coruna and DarkSword, users should install such minor version updates promptly to prevent exploitation of zero-day vulnerabilities already in the wild. All Mac users are advised to immediately check for and install this security update to ensure system security.",
    tags_en: ["Apple", "macOS", "26.5.2", "Security Update", "Vulnerability Patch", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/macos-26-5-2-now-available-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260629-050",
    trackers: ["os"],
    category: "Apple",
    title: "AI 程式開發工具 Cursor 推出 iOS/iPadOS App，整合雲端與本地端代理程式功能",
    summary: "AI 程式開發工具 Cursor 在近期被 SpaceX 收購後，正式於 App Store 上發布了其 iOS 和 iPadOS 應用程式。此應用程式旨在讓開發者能夠隨處啟動編碼代理程式（coding agents），並追蹤和管理正在進行的工程工作。主要功能包括：透過語音對代理程式進行對話、檢視程式碼差異（diffs）、註解圖片以提供視覺回饋，以及理解不熟悉的程式碼庫。Cursor 強調其目標是讓雲端代理程式的體驗與本地機器無異，並提供遠端控制和流暢的本地/雲端切換功能。此外，公司也計畫增加「無儲存庫聊天」（repo-less chats）功能，以簡化無需程式碼庫上下文的任務啟動。目前，Cursor 正在提供 Composer 2.5 在行動應用程式上的折扣優惠。",
    tags: ["Cursor", "SpaceX", "iOS", "iPadOS", "AI 程式開發", "App Store", "代理程式"],
    title_en: "AI Coding Tool Cursor Launches iOS/iPadOS App, Integrating Cloud and Local Agent Functionality",
    summary_en: "Following its recent acquisition by SpaceX, the AI coding tool Cursor has officially released its iOS and iPadOS application on the App Store. This application is designed to allow developers to launch coding agents anywhere and track and manage ongoing engineering work. Key features include: conversing with agents via voice, viewing code diffs, annotating images for visual feedback, and understanding unfamiliar codebases. Cursor emphasizes that its goal is to provide an experience for cloud agents that is indistinguishable from a local machine, offering remote control and seamless local/cloud switching. Furthermore, the company plans to add 'repo-less chats' functionality to simplify task initiation without requiring a codebase context. Currently, Cursor is offering a discount on Composer 2.5 for mobile applications.",
    tags_en: ["Cursor", "SpaceX", "iOS", "iPadOS", "AI Coding", "App Store", "Agent"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/cursor-releases-iphone-and-ipad-app-following-recent-acquisition-by-spacex", lang: "EN" }
    ]
  },
  {
    id: "20260629-051",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 26.6、watchOS 26.6 等多系統 Beta 3 更新，著重修復穩定性",
    summary: "Apple 近期發布了多個系統的 Beta 3 版本，包括 iPadOS 26.6、watchOS 26.6、tvOS 26.6 和 visionOS 26.6 等。這些更新屬於較為輕量的版本，主要目的集中在修復系統的 Bug 和提升穩定性，而非引入重大使用者介面或新功能。雖然文章未提供具體的新功能細節，但預計在官方正式發布時（可能在下個月）會揭曉更多內容。對於使用 Beta 版本的開發者和早期使用者而言，建議留意這些更新以確保設備的穩定性。開發者應持續關注 Apple 官方的發布週期，以掌握系統的最新穩定版本。",
    tags: ["Apple", "iPadOS", "watchOS", "tvOS", "visionOS", "Beta 測試"],
    title_en: "Apple releases Beta 3 updates for multiple systems, including iPadOS 26.6 and watchOS 26.6, focusing on stability fixes",
    summary_en: "Apple recently released Beta 3 versions for multiple operating systems, including iPadOS 26.6, watchOS 26.6, tvOS 26.6, and visionOS 26.6. These updates are relatively lightweight, primarily focused on fixing system bugs and improving stability, rather than introducing major user interface changes or new features. Although the article does not provide specific details on new features, more content is expected to be revealed upon official release (possibly next month). Developers and early adopters using the Beta versions are advised to monitor these updates to ensure device stability. Developers should continue to follow Apple's official release cycle to stay updated on the latest stable system versions.",
    tags_en: ["Apple", "iPadOS", "watchOS", "tvOS", "visionOS", "Beta 測試"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/beta-3-for-ipados-26-6-watchos-26-6-and-more-now-available", lang: "EN" }
    ]
  },
  {
    id: "20260629-052",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 推出 macOS 26.6 Beta 3，開發者可預覽系統更新與新功能",
    summary: "Apple 正在逐步為開發者推出 macOS 26.6 的 Beta 3 版本。此版本是在前一個 Beta 2 版本發布兩週後推出的，目前測試週期接近尾聲。根據 Apple 此前的發布說明，macOS 26.6 的更新重點主要為修復錯誤，例如先前錯誤地將部分應用程式識別為僅限 Intel 平台，導致棄用通知顯示不正確的問題。開發者應注意，Apple 的主要開發重心已轉向在 WWDC 上宣布的 macOS 27 Golden Gate，預計今年秋季發布。開發者可透過「系統設定」中的「軟體更新」來安裝此 Beta 測試版。建議使用者在更新前備份 Mac 設備，並持續關注 Apple 官方的正式發布資訊。",
    tags: ["Apple", "macOS", "macOS 26.6", "Beta 測試", "macOS 27", "Golden Gate"],
    title_en: "Apple Releases macOS 26.6 Beta 3, Allowing Developers to Preview System Updates and New Features",
    summary_en: "Apple is gradually rolling out Beta 3 of macOS 26.6 to developers. This version was released two weeks after the previous Beta 2 version, and the testing cycle is nearing its conclusion. According to Apple's previous release notes, the main focus of the macOS 26.6 update is bug fixes, such as correcting an issue where certain applications were incorrectly identified as Intel-only, leading to inaccurate deprecation notices. Developers should note that Apple's primary development focus has shifted to macOS 27 Golden Gate, announced at WWDC, which is expected to release this fall. Developers can install this Beta build via 'Software Update' in 'System Settings.' Users are advised to back up their Mac devices before updating and to continue monitoring official Apple announcements.",
    tags_en: ["Apple", "macOS", "macOS 26.6", "Beta Testing", "macOS 27", "Golden Gate"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/macos-26-6-beta-rolling-out-now-heres-what-to-expect", lang: "EN" }
    ]
  },
  {
    id: "20260629-053",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 26.5.2、iPadOS 26.5.2 與 macOS 26.5.2 安全更新，主要修補 WebKit 相關漏洞",
    summary: "Apple 今日發布了針對 iPhone、iPad 和 Mac 的最新安全更新：iOS 26.5.2、iPadOS 26.5.2 和 macOS 26.5.2。本次更新屬於小版本修補，重點完全放在提升安全性，並未引入新功能。根據 Apple 官方說明，本次更新包含近 30 個安全修補，其中大部分修補都與 WebKit 及相關網頁技術有關。這類安全更新旨在修補潛在的漏洞，保護用戶設備免受網路威脅。用戶應透過設備的「設定」>「一般」>「軟體更新」進行安裝。雖然 Apple 尚未發布 iOS 27 的正式版本，但目前已進入 iOS 26.6 的 Beta 測試階段，預計在今年秋季正式發布 iOS 27。建議所有用戶盡快更新至最新版本，以確保設備的安全性和穩定性。",
    tags: ["Apple", "iOS 26.5.2", "iPadOS 26.5.2", "macOS 26.5.2", "WebKit", "安全更新"],
    title_en: "Apple Releases iOS 26.5.2, iPadOS 26.5.2, and macOS 26.5.2 Security Updates, Primarily Patching WebKit Vulnerabilities",
    summary_en: "Apple today released the latest security updates for iPhone, iPad, and Mac: iOS 26.5.2, iPadOS 26.5.2, and macOS 26.5.2. This update is a minor patch focused entirely on enhancing security and does not introduce new features. According to Apple's official statement, this update includes nearly 30 security patches, most of which are related to WebKit and associated web technologies. Such security updates aim to patch potential vulnerabilities, protecting user devices from network threats. Users should install the update via the device's 'Settings' > 'General' > 'Software Update'. Although Apple has not yet released the official iOS 27 version, the device is currently in the iOS 26.6 Beta testing phase, which is expected to be officially released in the fall of this year. All users are advised to update to the latest version as soon as possible to ensure device security and stability.",
    tags_en: ["Apple", "iOS 26.5.2", "iPadOS 26.5.2", "macOS 26.5.2", "WebKit", "Security Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/apple-releases-ios-26-5-2-for-iphone-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260629-054",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 26.6 開發者 Beta 3，預告新版聯絡人限制與防盜功能",
    summary: "Apple 近期發布了 iOS 26.6 的第三個開發者 Beta 版本，該版本自五月底開始進行測試。雖然業界焦點已轉向 iOS 27，但 iOS 26.6 將是下一批正式發布給用戶的版本，基於 iOS 26 的基礎進行迭代。本次 Beta 版本發現了兩項主要變動：一是調整了聯絡人封鎖的數量限制；二是似乎正在開發新的 iPhone 防盜功能。此外，此更新可能也為 iOS 27 中 Siri AI 所使用的 Spotlight 索引功能做準備。文章指出，Apple 的下一個主要軟體更新預計於九月推出，屆時將持續迭代 iOS 27。開發者應關注這些系統層面的調整，以了解未來作業系統的發展方向。",
    tags: ["Apple", "iOS 26.6", "iOS 27", "Beta 版", "作業系統更新", "防盜功能"],
    title_en: "Apple Releases iOS 26.6 Developer Beta 3, Teasing New Contacts Restrictions and Anti-Theft Features",
    summary_en: "Apple recently released the third developer Beta version of iOS 26.6, which began testing at the end of May. Although industry focus has shifted to iOS 27, iOS 26.6 will be the next batch of versions released to users, iterating on the foundation of iOS 26. This Beta version revealed two major changes: first, an adjustment to the number limit for blocked contacts; and second, the apparent development of new iPhone anti-theft features. Furthermore, this update may also be preparing the Spotlight indexing function used by Siri AI in iOS 27. The article notes that Apple's next major software update is expected in September, at which time iOS 27 will continue to iterate. Developers should pay attention to these system-level adjustments to understand the future direction of the operating system.",
    tags_en: ["Apple", "iOS 26.6", "iOS 27", "Beta", "Operating System Update", "Anti-Theft Feature"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/apple-releases-ios-26-6-beta-3-for-iphone-heres-what-to-expect", lang: "EN" }
    ]
  },
  {
    id: "20260629-055",
    trackers: ["os"],
    category: "Apple",
    title: "傳聞：Apple 2027 年 iPhone 系列將推出六款機型，包含 Air 2、18e 與 Ultra 等多樣化產品線",
    summary: "根據資安情報來源 Digital Chat Station 的傳聞，Apple 預計在 2027 年將推出史上最多樣化的 iPhone 系列。傳聞指出，今年秋季將會推出較小的旗艦機型陣容，包括 iPhone 18 Pro、Pro Max 和 iPhone Ultra。而更完整的產品線將延至 2027 年初，預計包含 iPhone Air 2、iPhone 18 和 iPhone 18e。其中，iPhone 18e 預計將採用 6.12 吋螢幕和 60Hz 刷新率，且可能缺乏 ProMotion 支援。此外，傳聞還提及 iPhone Ultra 將具備可折疊螢幕設計。這些資訊屬於產品傳聞，主要關注點為產品線的擴展與技術規格的變化，而非任何安全漏洞或資安威脅。建議用戶以 Apple 官方正式發布為準，並留意官方針對新機型的安全更新。",
    tags: ["Apple", "iPhone", "2027", "iPhone 18e", "iPhone Ultra", "產品傳聞"],
    title_en: "Rumor: Apple's 2027 iPhone Series to Launch Six Models, Including Air 2, 18e, and Ultra",
    summary_en: "According to cybersecurity intelligence source Digital Chat Station, Apple is expected to launch its most diverse iPhone series ever in 2027. The rumors suggest that a smaller flagship lineup, including the iPhone 18 Pro, Pro Max, and iPhone Ultra, will be released this autumn. The more complete product line is expected to arrive in early 2027, potentially including the iPhone Air 2, iPhone 18, and iPhone 18e. Among these, the iPhone 18e is rumored to feature a 6.12-inch screen and a 60Hz refresh rate, and may lack ProMotion support. Furthermore, the rumors mention that the iPhone Ultra will feature a foldable screen design. This information constitutes product rumors, and the main focus is on the expansion of the product line and changes in technical specifications, rather than any security vulnerabilities or cybersecurity threats. Users are advised to rely on official Apple announcements and monitor official security updates for new models.",
    tags_en: ["Apple", "iPhone", "2027", "iPhone 18e", "iPhone Ultra", "Product Rumor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/leaker-outlines-iphone-lineup-for-next-year-with-six-new-models-coming", lang: "EN" }
    ]
  },
  {
    id: "20260629-056",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 16吋MacBook Pro升級價格飆升，最高配置已突破五位數門檻",
    summary: "本文分析了Apple最新款16吋MacBook Pro的定價結構，指出雖然基礎機型價格僅上漲約13%至15%，但其記憶體（RAM）和固態硬碟（SSD）的升級費用大幅增加。特別是M5 Max晶片的配置，其RAM和SSD的升級成本在許多配置中增長了驚人的50%至67%。根據John Gruber的計算，將MacBook Pro配置到M5 Max、128GB記憶體和8TB SSD的極限配置，最終總價已達到$10,149。這篇文章主要關注產品的定價趨勢與升級成本，而非安全漏洞或技術細節。建議潛在購買者需仔細評估升級選項的成本增幅，以決定是否值得購買高配備的機型。",
    tags: ["Apple", "MacBook Pro", "M5 Max", "定價分析", "硬體升級", "MacBook"],
    title_en: "Apple 16-inch MacBook Pro Upgrade Prices Soar, Top Configurations Exceed Five-Figure Threshold",
    summary_en: "This article analyzes the pricing structure of the latest 16-inch MacBook Pro, noting that while the base model price has only increased by about 13% to 15%, the upgrade costs for Random Access Memory (RAM) and Solid State Drive (SSD) have significantly increased. Specifically, the configuration featuring the M5 Max chip shows that the upgrade costs for RAM and SSD have grown by an astonishing 50% to 67% in many configurations. According to John Gruber's calculations, the ultimate total price for a maximum configuration—featuring the M5 Max, 128GB of memory, and 8TB SSD—has reached $10,149. This article primarily focuses on product pricing trends and upgrade costs, rather than security vulnerabilities or technical details. Potential buyers are advised to carefully evaluate the cost increase of upgrade options to determine if purchasing a high-spec model is worthwhile.",
    tags_en: ["Apple", "MacBook Pro", "M5 Max", "Pricing Analysis", "Hardware Upgrade", "MacBook"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/a-maxed-out-16-inch-macbook-pro-now-has-a-5-figure-price-tag", lang: "EN" }
    ]
  },
  {
    id: "20260629-057",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 macOS Tahoe 26.5.2 安全更新：修補多個 WebKit、Kernel 與 libxslt 的記憶體漏洞",
    summary: "Apple 發布 macOS Tahoe 26.5.2 版本，修補多個關鍵的資安漏洞，涵蓋 WebKit、Kernel 核心以及 libxslt 等元件。本次更新修補了多個 WebKit 相關的漏洞，包括 CVE-2026-43704、CVE-2026-43700 等，這些漏洞可能允許惡意網站洩露敏感用戶資訊、跨來源竊取資料，或導致 Safari 崩潰。此外，更新也修補了 Kernel 層級的記憶體安全問題（如 CVE-2026-43724），以及 libxslt 的雙釋放（double free）問題（CVE-2026-43706）。這些漏洞的攻擊向量主要來自處理惡意編寫的網頁內容，實務上建議所有 macOS Tahoe 用戶應立即更新至 26.5.2 或更高版本，以防範系統崩潰或資料外洩。",
    tags: ["macOS", "Apple", "WebKit", "Kernel", "CVE-2026-43700", "CVE-2026-43706"],
    title_en: "Apple Releases macOS Tahoe 26.5.2 Security Update: Patching Multiple Memory Vulnerabilities in WebKit, Kernel, and libxslt",
    summary_en: "Apple has released macOS Tahoe version 26.5.2, patching multiple critical security vulnerabilities across components including WebKit, the Kernel core, and libxslt. This update addresses several WebKit-related vulnerabilities, including CVE-2026-43704 and CVE-2026-43700. These flaws could potentially allow malicious websites to leak sensitive user information, perform cross-site data theft, or cause Safari to crash. Furthermore, the update patches a memory safety issue at the Kernel level (such as CVE-2026-43724), as well as a double free vulnerability in libxslt (CVE-2026-43706). The attack vectors for these vulnerabilities primarily originate from processing maliciously crafted web content. Practically, all macOS Tahoe users are advised to update immediately to 26.5.2 or later to prevent system crashes or data leakage.",
    tags_en: ["macOS", "Apple", "WebKit", "Kernel", "CVE-2026-43700", "CVE-2026-43706"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127595", lang: "EN" }
    ]
  },
  {
    id: "20260629-058",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "NIST縮減CVE分析範圍引發疑慮：研究指出CVE覆蓋率與準確性下降",
    summary: "根據安全公司 Volerion 的研究分析，美國國家標準與技術研究院（NIST）近期縮減了對CVE的深度分析（enrichment）數量，導致國家漏洞資料庫（NVD）的漏洞資訊覆蓋率和準確性出現問題。研究指出，在分析的期間，超過半數的CVE被優先分析，但實際獲得NIST深度分析的漏洞數量遠低於預期，導致大量已發布的CVE缺乏專業分析。此外，缺乏NIST的CVSS評分，使企業必須依賴來自不同CVE編號權威機構（CNA）的評分，這些評分可能存在偏差或不一致。更嚴重的是，Volerion 發現NIST自身的分析也存在錯誤，例如在攻擊複雜度評級上，NIST有時將難度評為低（AC:L），而實際情況可能為高（AC:H）。這使得終端使用者難以準確判斷漏洞的風險，影響了漏洞管理和風險評估的決策制定。",
    tags: ["NIST", "CVE", "NVD", "CVSS", "漏洞管理", "Volerion"],
    title_en: "Concerns Raised Over NIST Reducing CVE Analysis Scope: Research Indicates Decline in CVE Coverage and Accuracy",
    summary_en: "According to research analysis by security firm Volerion, the U.S. National Institute of Standards and Technology (NIST) has recently reduced the depth of its CVE enrichment, leading to issues with the coverage and accuracy of vulnerability information in the National Vulnerability Database (NVD). The study points out that during the analysis period, while over half of the CVEs were prioritized for analysis, the actual number of vulnerabilities receiving deep NIST analysis was significantly lower than expected, resulting in a large number of published CVEs lacking professional analysis. Furthermore, the absence of NIST's CVSS scoring forces enterprises to rely on scores from various CVE Authority (CNA) sources, which may contain biases or inconsistencies. More critically, Volerion found that NIST's own analysis contains errors; for instance, NIST sometimes rates the attack complexity as Low (AC:L) when the actual situation might be High (AC:H). This makes it difficult for end-users to accurately assess the vulnerability risk, thereby impacting decision-making in vulnerability management and risk assessment.",
    tags_en: ["NIST", "CVE", "NVD", "CVSS", "Vulnerability Management", "Volerion"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/nist-enrichment-reductions-cve-coverage-accuracy", lang: "EN" }
    ]
  },
  {
    id: "20260629-059",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Apple 修補超過 30 個漏洞：Webkit 包含 AI 發現的記憶體與使用後釋放漏洞",
    summary: "Apple 最新發布了針對 iOS、macOS 和 Safari 瀏覽器的安全更新，修補了超過三十個漏洞。其中 WebKit 引擎的四個漏洞特別引人注目，包括 CVE-2026-43707（記憶體損壞）、CVE-2026-43715（使用後釋放）等。這些漏洞的發現，分別歸功於 OpenAI Codex Security 和 Anthropic 的 Claude 等人工智慧工具與研究人員。此外，Apple 也修復了三個可能導致洩漏核心系統狀態或破壞核心記憶體的漏洞（如 CVE-2026-43722）。Apple 表示，由於人工智慧工具加速了惡意漏洞的開發，公司正提前發布安全更新，以縮短從發現到修補的時間窗口。用戶應儘快更新至 iOS 26.5.2、iPadOS 26.5.2、macOS Tahoe 26.5.2 和 Safari 26.5.2 版本。",
    tags: ["Apple", "WebKit", "CVE-2026-43707", "AI 漏洞發現", "iOS", "macOS"],
    title_en: "Apple Patches Over 30 Vulnerabilities: WebKit Includes Memory and Use-After-Free Flaws Discovered by AI",
    summary_en: "Apple has released a security update for iOS, macOS, and Safari browsers, patching over thirty vulnerabilities. Four flaws in the WebKit engine are particularly noteworthy, including CVE-2026-43707 (memory corruption) and CVE-2026-43715 (use-after-free). The discovery of these vulnerabilities is attributed to artificial intelligence tools and researchers, specifically OpenAI Codex Security and Anthropic's Claude. Furthermore, Apple also fixed three vulnerabilities that could lead to the leakage of core system state or corruption of core memory (such as CVE-2026-43722). Apple stated that because AI tools have accelerated the development of malicious vulnerabilities, the company is proactively releasing security updates to shorten the window between discovery and patching. Users should update to iOS 26.5.2, iPadOS 26.5.2, macOS Tahoe 26.5.2, and Safari 26.5.2 as soon as possible.",
    tags_en: ["Apple", "WebKit", "CVE-2026-43707", "AI Vulnerability Discovery", "iOS", "macOS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/apple-patches-30-ios-macos-safari-flaws.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-060",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安警示：高安裝量廣告攔截擴充套件 Adblock for YouTube 存在跨站腳本攻擊風險",
    summary: "資安廠商 Island 報告指出，Chrome 網站商店中安裝量超過 1,100 萬次的廣告攔截擴充套件 Adblock for YouTube，存在嚴重的安全風險。由於該擴充套件權限過大，攻擊者若控制其伺服器端，可透過注入 JavaScript 程式碼，在用戶端執行任意程式碼。研究發現，該套件並未限制其運作範圍，攻擊者只需在網站 URL 中加入 \"youtube.com\" 字串，即可使其在任何網站上運行。更甚者，攻擊者可修改伺服器端設定，利用擴充套件內建的 JavaScript 程式庫，竊取用戶敏感資料或進行帳號冒用等惡意行為。開發商 AdBlock 已回應將著手修復，包括驗證主機名稱和確保伺服器配置無法注入可執行程式碼。",
    tags: ["Adblock for YouTube", "Chrome 擴充套件", "跨站腳本攻擊", "JavaScript 注入", "資安風險", "Island"],
    title_en: "Security Alert: Adblock for YouTube, a highly installed ad-blocking extension, poses Cross-Site Scripting risk",
    summary_en: "Security vendor Island reported that Adblock for YouTube, an ad-blocking extension installed over 11 million times in the Chrome Web Store, poses a severe security risk. Due to the extension's excessive permissions, if an attacker gains control of its server-side components, they can inject JavaScript code to execute arbitrary code on the user's device. Research found that the extension does not restrict its operational scope; an attacker only needs to include the string \"youtube.com\" in a website URL for it to run on any site. Furthermore, attackers can modify server-side settings to utilize the extension's built-in JavaScript library to steal user sensitive data or perform malicious activities such as account impersonation. The developer, AdBlock, has responded by stating they will begin remediation, including validating hostnames and ensuring server configurations cannot inject executable code.",
    tags_en: ["Adblock for YouTube", "Chrome Extension", "Cross-Site Scripting", "JavaScript Injection", "Security Risk", "Island"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176944", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-061",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "OpenAI組織邀請機制遭濫用：資安公司受害「毒化租戶」攻擊，警惕AI工作環境的社交工程風險",
    summary: "資安公司Push Security近期遭遇一場利用OpenAI平台合法邀請機制進行的「毒化租戶攻擊」。攻擊者建立一個偽冒公司名稱的OpenAI組織，並透過看似正式的電子郵件邀請特定員工加入，意圖讓受害者誤以為這是公司正式租戶。攻擊者在該偽造組織中，將受邀員工設定為Owner角色，並綁定信用卡，顯示其具備偵察和高準備度。該攻擊的風險點在於，員工若誤信該邀請，並在AI工作環境中輸入程式碼、內部文件或客戶資料，攻擊者作為組織管理員，便可能掌握這些敏感的互動紀錄和API資料。Push Security將此事件定性為毒化租戶攻擊，強調隨著AI服務成為企業核心工作入口，平臺的組織邀請與共享功能，已成為新的社交工程與資料蒐集管道。公司建議建立郵件規則封鎖類似邀請，並提高警覺，避免在未經確認的AI租戶中輸入敏感資訊。",
    tags: ["OpenAI", "毒化租戶攻擊", "社交工程", "AI安全", "組織邀請", "SaaS平台"],
    title_en: "OpenAI Organization Invitation Mechanism Exploited: Cybersecurity Firm Targeted by 'Poisoned Tenant' Attack, Warning Against Social Engineering Risks in AI Work Environments",
    summary_en: "Cybersecurity firm Push Security recently encountered a 'poisoned tenant attack' that exploited the legitimate invitation mechanism of the OpenAI platform. The attackers established an OpenAI organization using a fake company name and invited specific employees via seemingly official emails, intending for the victims to believe it was a formal company tenant. Within this fabricated organization, the attackers set the invited employees as Owners and linked credit cards, indicating reconnaissance and high preparation. The risk of this attack lies in the fact that if employees mistakenly trust the invitation and input code, internal documents, or client data within the AI work environment, the attackers, acting as organization administrators, could gain access to these sensitive interaction records and API data. Push Security classifies this incident as a poisoned tenant attack, emphasizing that as AI services become core enterprise work entry points, the platform's organization invitation and sharing features have become new channels for social engineering and data collection. The company advises establishing email rules to block similar invitations and increasing vigilance to prevent inputting sensitive information into unverified AI tenants.",
    tags_en: ["OpenAI", "Poisoned Tenant Attack", "Social Engineering", "AI Security", "Organization Invitation", "SaaS Platform"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176942", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-062",
    trackers: ["os", "security"],
    category: "供應鏈與開源安全",
    title: "Linux基金會成立Akrites開源安全協調計畫，應對AI加速的開源漏洞修補壓力",
    summary: "為應對AI模型加速漏洞發現帶來的開源專案修補壓力，Linux基金會宣布成立開源安全協調計畫Akrites。該計畫匯集了AWS、Google、微軟、IBM、Nvidia、OpenAI等眾多科技巨頭，建立跨產業的開源軟體漏洞協調機制。Akrites將設立標準化的漏洞揭露流程（CVD）和安全事件應變團隊（SIRT），確保在漏洞公開前完成驗證、修補與協調。計畫的核心原則是「保密優先」，旨在防止未修補漏洞在公開前外洩或被攻擊者利用。此外，Akrites也承諾在關鍵開源專案缺乏維護人力時，擔任最後接手維護者，確保專案持續更新。Linux基金會強調，重點在於修補的實際部署，以防攻擊者利用AI快速逆向分析漏洞並發動攻擊。",
    tags: ["Linux基金會", "Akrites", "開源安全", "漏洞協調", "CVD", "AI安全"],
    title_en: "Linux Foundation Establishes Akrites Open-Source Security Coordination Program to Address AI-Accelerated Open-Source Vulnerability Patching Pressure",
    summary_en: "To address the increasing pressure on open-source projects due to AI model-accelerated vulnerability discovery, the Linux Foundation announced the establishment of Akrites, an open-source security coordination program. This program brings together numerous tech giants, including AWS, Google, Microsoft, IBM, Nvidia, and OpenAI, to establish a cross-industry coordination mechanism for open-source software vulnerabilities. Akrites will establish a standardized Vulnerability Disclosure Process (CVD) and a Security Incident Response Team (SIRT), ensuring that validation, patching, and coordination are completed before a vulnerability is made public. The core principle of the program is 'confidentiality first,' aiming to prevent unpatched vulnerabilities from leaking or being exploited by attackers before remediation. Furthermore, Akrites commits to serving as the last resort maintainer for critical open-source projects that lack sufficient maintenance manpower, ensuring continuous project updates. The Linux Foundation emphasized that the focus is on practical deployment of patches, preventing attackers from using AI for rapid reverse engineering of vulnerabilities and launching attacks.",
    tags_en: ["Linux Foundation", "Akrites", "Open-Source Security", "Vulnerability Coordination", "CVD", "AI Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176934", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-063",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "IBM、紅帽與Palo Alto Networks合作，推出Project Lightwell強化開源軟體供應鏈安全防護",
    summary: "IBM、紅帽（Red Hat）與Palo Alto Networks宣布合作，推出Project Lightwell服務，旨在全面強化企業開放原始碼軟體供應鏈的安全性。此服務將原本針對RHEL、OpenShift等平臺元件的生命週期管理、漏洞修補與發布工程，擴展至企業常用的第三方函式庫、程式語言工具鏈、AI框架及資料串流平臺。Palo Alto Networks的加入，特別整合了虛擬修補（Virtual Patching）能力，使防禦範圍從傳統的開源軟體和商業應用程式，延伸至操作科技（OT）和醫療保健技術等關鍵領域。此舉旨在應對AI爆發性發展導致資安漏洞發現速度加快的趨勢，協助企業快速降低新興威脅帶來的系統性風險，確保業務營運不中斷。",
    tags: ["IBM", "Red Hat", "Palo Alto Networks", "Project Lightwell", "開源軟體", "供應鏈安全", "虛擬修補", "OT"],
    title_en: "IBM, Red Hat, and Palo Alto Networks Partner to Launch Project Lightwell to Enhance Open Source Software Supply Chain Security",
    summary_en: "IBM, Red Hat, and Palo Alto Networks have announced a collaboration to launch Project Lightwell, a service designed to comprehensively strengthen the security of enterprise open-source software supply chains. This service expands lifecycle management, vulnerability patching, and release engineering—originally focused on platform components like RHEL and OpenShift—to include commonly used third-party libraries, programming language toolchains, AI frameworks, and data streaming platforms. Palo Alto Networks' involvement specifically integrates Virtual Patching capabilities, extending the defense scope from traditional open-source software and commercial applications to critical sectors such as Operational Technology (OT) and healthcare technology. This initiative aims to address the trend of accelerating vulnerability discovery due to the explosive development of AI, helping enterprises quickly mitigate systemic risks posed by emerging threats and ensuring business continuity.",
    tags_en: ["IBM", "Red Hat", "Palo Alto Networks", "Project Lightwell", "Open Source Software", "Supply Chain Security", "Virtual Patching", "OT"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176914", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-064",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "微軟警告：惡意Chromium擴充套件冒充AI服務，竊取使用者搜尋流量與輸入資料",
    summary: "微軟威脅情報部門發現一個惡意的Chromium擴充套件，該擴充套件冒充知名的AI問答引擎Perplexity AI，誘騙使用者安裝。該擴充套件的主要目的是攔截搜尋流量和收集使用者資料，可能用於建立使用者檔案、進行目標廣告或其他濫用。該惡意擴充套件利用了Manifest Version 3 (MV3) 的能力，結合了中間基礎設施和declarativeNetRequest (DNR) 規則，能夠在保留合法搜尋結果外觀的同時，透明地攔截Omnibox查詢。其具體行為包括將完整的搜尋查詢和即時的搜尋建議（輸入字元）都導向攻擊者控制的網域（perplexity-ai[.]online），而非官方網域。這不僅構成搜尋劫持，更具備了即時的按鍵輸入監控能力。微軟已將此擴充套件報告給Google，並已成功移除。建議組織應加強使用者警覺訓練，並實施分層安全策略，以防範利用AI品牌進行的社會工程攻擊。",
    tags: ["Chromium擴充套件", "Perplexity AI", "搜尋劫持", "MV3", "declarativeNetRequest", "社會工程"],
    title_en: "Microsoft Warns: Malicious Chromium Extension Impersonates AI Service to Steal User Search Traffic and Input Data",
    summary_en: "Microsoft's threat intelligence department discovered a malicious Chromium extension that impersonates the well-known AI Q&A engine, Perplexity AI, luring users into installing it. The primary goal of this extension is to intercept search traffic and collect user data, which could be used to build user profiles, conduct targeted advertising, or other abuses. The malicious extension leverages the capabilities of Manifest Version 3 (MV3), combining intermediate infrastructure and declarativeNetRequest (DNR) rules to transparently intercept Omnibox queries while maintaining the appearance of legitimate search results. Its specific behavior includes redirecting complete search queries and real-time search suggestions (input characters) to an attacker-controlled domain (perplexity-ai[.]online), rather than the official domain. This constitutes not only search hijacking but also real-time keystroke monitoring capability. Microsoft has reported this extension to Google and has successfully removed it. Organizations are advised to strengthen user awareness training and implement layered security strategies to prevent social engineering attacks that utilize AI branding.",
    tags_en: ["Chromium Extension", "Perplexity AI", "Search Hijacking", "MV3", "declarativeNetRequest", "Social Engineering"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/06/29/chromium-extension-uses-airelated-branding-redirect-browser-search", lang: "EN" }
    ]
  },
  {
    id: "20260629-065",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "微軟揭露：假冒 Perplexity 的 Chrome 擴充套件竊取用戶搜尋紀錄與輸入字元",
    summary: "微軟研究團隊發現一個名為「Search for perplexity ai」的惡意 Chrome 擴充套件。該擴充套件偽裝成知名的 AI 搜尋引擎 Perplexity，利用假冒的網域 perplexity-ai[.]online，將用戶在瀏覽器地址欄輸入的每一個字元和所有搜尋查詢，都先導向攻擊者控制的伺服器進行記錄。攻擊者透過擴充套件的搜尋提供者覆寫權限，在將用戶重定向到真實的搜尋結果（如 Perplexity、Google 或 Bing）之前，攔截並收集了這些敏感數據，包括瀏覽器標頭、IP 位址和使用者代理。雖然微軟未公開受影響的用戶數量，但此類惡意擴充套件利用 AI 品牌熱潮，竊取用戶的搜尋行為，而非僅限於聊天內容。微軟建議企業應透過瀏覽器或公司政策限制允許的擴充套件，並對 AI 品牌工具保持高度警惕，檢查發布者和網域的真實性。",
    tags: ["Chrome 擴充套件", "Perplexity", "惡意程式碼", "搜尋紀錄竊取", "瀏覽器安全", "AI 品牌詐騙"],
    title_en: "Microsoft Reveals: Fake Perplexity Chrome Extension Steals User Search History and Input Characters",
    summary_en: "Microsoft research teams discovered a malicious Chrome extension named \"Search for perplexity ai.\" This extension impersonates the well-known AI search engine Perplexity, utilizing the fake domain perplexity-ai[.]online. It intercepts and records every character typed into the browser address bar and all search queries, routing them first to a server controlled by the attacker. The attacker leveraged the extension's search provider override permission to intercept and collect this sensitive data—including browser headers, IP addresses, and user agents—before redirecting the user to the genuine search results (such as Perplexity, Google, or Bing). Although Microsoft did not disclose the number of affected users, this type of malicious extension exploits the AI brand hype to steal user search behavior, not just chat content. Microsoft advises enterprises to restrict allowed extensions through browser or company policies and to remain highly vigilant regarding AI brand tools, checking the authenticity of the publisher and domain.",
    tags_en: ["Chrome Extension", "Perplexity", "Malware", "Search History Theft", "Browser Security", "AI Brand Impersonation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/malicious-perplexity-chrome-extension.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-066",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Infoblox揭露：超過23萬網站利用DCloud Uni-App框架，大規模推動投資詐騙與網路釣魚",
    summary: "DNS威脅情報公司Infoblox發布報告指出，超過236,000個網站利用一個名為DCloud Uni-App的合法開源跨平台開發框架，建立各種詐騙網站。這些網站包括虛假的加密貨幣交易所、多語言的詐騙平台、WhatsApp網路釣魚網、假賭博平台和品牌冒用網站。詐騙活動自2022年中期以來持續進行，且已擴散至全球各地，冒充從大型股票交易所到零售巨頭等眾多品牌。\n\n雖然使用DCloud本身並非惡意指標，但Infoblox發現這些詐騙網站具有共同特徵，如假券商介面、加密貨幣錢包抽取提示、假賭場介面和品牌冒用。詐騙網站的運營模式高度複雜，常利用「邀請碼門檻」機制，要求受害者必須經由現有關係人引薦才能註冊或存款，以建立金字塔結構。Infoblox分析顯示，即使是專業的詐騙營運商也會移除DCloud的預設標記來規避偵測，使得詐騙網站的數量遠超單純框架指紋的判斷。\n\n修補建議方面，由於攻擊者利用合法框架和主流雲端服務商（如Cloudflare、AWS）託管，單純的技術修補難度極高。組織應提高對「行為異常」的監控，特別是針對要求用戶透過「邀請碼」才能進入核心功能、或要求連接錢包進行「驗證」的網站，並強化對品牌冒用和金字塔式招募模式的風險評估。",
    tags: ["Infoblox", "DCloud Uni-App", "開源框架", "投資詐騙", "網路釣魚", "品牌冒用"],
    title_en: "Infoblox Reveals: Over 236,000 Websites Utilize DCloud Uni-App Framework for Large-Scale Investment Scams and Phishing",
    summary_en: "A report released by DNS threat intelligence company Infoblox indicates that over 236,000 websites have utilized a legitimate open-source cross-platform development framework called DCloud Uni-App to establish various scam sites. These sites include fake cryptocurrency exchanges, multilingual scam platforms, WhatsApp phishing networks, fake gambling sites, and brand impersonation sites. These scam activities have been ongoing since mid-2022 and have spread globally, impersonating numerous brands from major stock exchanges to retail giants.\n\nWhile the use of DCloud itself is not an indicator of malicious intent, Infoblox found that these scam websites share common characteristics, such as fake brokerage interfaces, cryptocurrency wallet withdrawal prompts, fake casino interfaces, and brand impersonation. The operational model of these scam sites is highly complex, often utilizing an 'invitation code threshold' mechanism, requiring victims to be referred by existing contacts to register or deposit, thereby establishing a pyramid structure. Infoblox's analysis shows that even professional scam operators remove DCloud's default markers to evade detection, making the number of scam sites far exceed what can be determined by simple framework fingerprinting.\n\nRegarding remediation, since attackers utilize legitimate frameworks and mainstream cloud service providers (such as Cloudflare and AWS) for hosting, simple technical patching is extremely difficult. Organizations should enhance monitoring for 'behavioral anomalies,' especially for websites that require users to use an 'invitation code' to access core functions, or those that require connecting a wallet for 'verification.' Furthermore, they must strengthen risk assessments against brand impersonation and pyramid recruitment models.",
    tags_en: ["Infoblox", "DCloud Uni-App", "Open-Source Framework", "Investment Scam", "Phishing", "Brand Impersonation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/236000-dcloud-uni-app-sites-used-in.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-067",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "npm與Go套件遭劫持：惡意程式透過VS Code任務與假字體竊取多種資安憑證",
    summary: "資安研究人員發現兩組被劫持的npm套件（html-to-gutenberg, fetch-page-assets）和多個Go套件，旨在於受感染的Windows、Linux及macOS主機上部署一個Python資訊竊取器。攻擊鏈利用了VS Code的自動運行任務（如eslint-check），當開發者開啟包含惡意套件的專案資料夾時觸發執行。惡意程式將JavaScript載荷偽裝成字體檔案（.woff2），並利用區塊鏈交易數據（如TronGrid, Aptos）作為「死信箱」來獲取下一階段的JavaScript載荷。該載荷建立Socket.io後門，提供遠端控制、檔案上傳和執行能力。最終，Python階段執行一個廣泛的憑證竊取器，可竊取瀏覽器（Chromium, Firefox）、密碼管理器、金鑰鏈、開發工具（Git憑證、GitHub CLI）以及多種雲端儲存服務的資料。受影響用戶應立即移除這些套件，檢查VS Code中的自動運行任務，並全面輪換所有憑證、API金鑰和錢包密碼。",
    tags: ["npm", "Go套件", "VS Code", "資訊竊取器", "憑證竊取", "供應鏈攻擊"],
    title_en: "npm and Go Packages Compromised: Malware Steals Various Security Credentials via VS Code Tasks and Fake Fonts",
    summary_en: "Security researchers discovered two compromised npm packages (html-to-gutenberg, fetch-page-assets) and multiple Go packages designed to deploy a Python information stealer on infected Windows, Linux, and macOS hosts. The attack chain utilized VS Code's automatic tasks (such as eslint-check), triggering execution when a developer opened a project directory containing the malicious packages. The malware disguised JavaScript payloads as font files (.woff2) and used blockchain transaction data (such as TronGrid, Aptos) as a 'dead drop' to retrieve the next stage of JavaScript payloads. This payload establishes a Socket.io backdoor, providing remote control, file upload, and execution capabilities. Finally, the Python stage executes a comprehensive credential stealer, capable of stealing data from browsers (Chromium, Firefox), password managers, keychains, development tools (Git credentials, GitHub CLI), and various cloud storage services. Affected users should immediately remove these packages, check automatic tasks in VS Code, and comprehensively rotate all credentials, API keys, and wallet passwords.",
    tags_en: ["npm", "Go packages", "VS Code", "Information stealer", "Credential theft", "Supply chain attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/hijacked-npm-and-go-packages-use-vs.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-068",
    trackers: ["os"],
    category: "Android",
    title: "Android 系統新增應用程式級備份控制，提升使用者對個人資料的精細管理權限",
    summary: "Google 正在逐步推出 Android 系統的應用程式級備份控制功能，讓使用者能更精細地管理個人資料的備份範圍。在 Pixel 裝置的設定介面中，使用者現在可以在「Google Backup」下看到「App data」區塊，可查看並控制每個應用程式的備份狀態。此功能預設為啟用，但使用者可以透過切換開關來停用特定應用程式的備份，系統會明確告知停用後將會刪除該應用程式在 Google 帳戶中的資料，並停止備份。此控制權限僅限於應用程式資料，不包含包含簡訊、通話紀錄和裝置設定的「Device data」區塊。此功能已在 Pixel 裝置上，包括穩定版的 Android 16 和 17，以及 Google Play 服務版本 26.24 上觀察到。然而，文章指出此功能尚未在 Samsung 品牌手機上推出。此更新旨在強化使用者對個人資料的控制權，是 Android 平台在隱私保護和資料管理方面的重要進展。",
    tags: ["Android", "Google Backup", "App data", "Pixel", "隱私保護", "資料備份"],
    title_en: "Android System Adds App-Level Backup Controls, Enhancing User Granular Control Over Personal Data",
    summary_en: "Google is gradually rolling out app-level backup controls for the Android system, allowing users to manage the scope of their personal data backups with greater granularity. On Pixel devices, users can now view and control the backup status for each application under the 'App data' section within the 'Google Backup' settings. This feature is enabled by default, but users can disable backups for specific applications using a toggle switch. The system will clearly notify the user that disabling the backup will delete the application's data from the Google account and stop the backup. This control is limited to application data only and does not include the 'Device data' section, which contains SMS, call logs, and device settings. This feature has been observed on Pixel devices, including Android 16 and 17 stable versions, and Google Play Services version 26.24. However, the article notes that this feature has not yet been released on Samsung brand phones. This update aims to strengthen user control over personal data, marking a significant advancement for the Android platform in privacy protection and data management.",
    tags_en: ["Android", "Google Backup", "App data", "Pixel", "Privacy Protection", "Data Backup"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/android-backups-per-app-controls", lang: "EN" }
    ]
  },
  {
    id: "20260629-069",
    trackers: ["os"],
    category: "Android",
    title: "Google 系統更新報告：Android 生態系持續優化，強化連線、安全與 AI 體驗",
    summary: "本報告涵蓋 Google 於 2026 年 6 月期間發布的「Google System Release Notes」，主要更新了 Play services、Play Store、Android System Intelligence 等核心系統元件。本次更新著重於提升跨裝置的連線穩定性、強化系統管理功能，並整合 AI 體驗。在安全方面，系統更新包含多項安全增強，例如提升設備連線的安全性，並在 Google Play Store 增加對未經驗證應用程式的額外安全驗證。功能層面，用戶可在 Google Wallet 觀看帳戶支付方式，並在 Play Store 內直接觀看遊戲相關創作者影片。此外，系統也加入了更完善的密碼和通行鑰管理功能，支援透過 Credential Exchange 標準在 Google 密碼管理器與第三方密碼管理器間匯入匯出。這些更新顯示 Google 正在持續優化 Android 跨平台生態系統的性能與用戶體驗，特別是在設備連線與身份驗證方面。",
    tags: ["Google", "Android", "Play services", "Google Play Store", "系統更新", "AI 整合"],
    title_en: "Google System Update Report: Continuous Optimization of the Android Ecosystem, Strengthening Connectivity, Security, and AI Experience",
    summary_en: "This report covers the \"Google System Release Notes\" published by Google during June 2026, primarily updating core system components such as Play services, Play Store, and Android System Intelligence. This update focuses on improving cross-device connectivity stability, strengthening system management functions, and integrating AI experiences. Regarding security, the system update includes multiple security enhancements, such as improving the security of device connectivity and adding extra security verification for unverified applications in the Google Play Store. Functionally, users can view account payment methods in Google Wallet and directly view creator videos related to games within the Play Store. Furthermore, the system has added more comprehensive password and passkey management features, supporting import and export between Google Password Manager and third-party password managers via the Credential Exchange standard. These updates demonstrate Google's continuous optimization of the Android cross-platform ecosystem's performance and user experience, particularly in device connectivity and identity verification.",
    tags_en: ["Google", "Android", "Play services", "Google Play Store", "System Update", "AI Integration"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/june-2026-google-system-updates", lang: "EN" }
    ]
  },
  {
    id: "20260629-070",
    trackers: ["os"],
    category: "Android",
    title: "OpenClaw發布跨平台行動應用程式，讓用戶可隨時使用AI Agent功能",
    summary: "OpenClaw宣布推出適用於Android和iOS的行動閘道應用程式，旨在讓用戶能夠隨時使用AI Agent功能。該應用程式需要與用戶已在其他平台上設置的私有OpenClaw Gateway進行配對，可透過QR Code或設定代碼完成。用戶透過此行動裝置可以與助理聊天、使用即時語音通話（realtime Talk mode）、審批Gateway執行的動作，並可選擇啟用相機、螢幕、位置和通知等設備功能。雖然OpenClaw的應用程式設計風格較為簡潔，但它提供了在行動裝置上進行設備感知自動化和工作流程監控的能力。然而，初期用戶評價顯示該應用程式存在多個Bug，用戶回饋包括無法配對、操作不便等，整體體驗尚未達到最佳化。",
    tags: ["OpenClaw", "AI Agent", "Android", "iOS", "行動應用程式", "Gateway"],
    title_en: "OpenClaw Releases Cross-Platform Mobile Application Enabling On-Demand AI Agent Functionality",
    summary_en: "OpenClaw announced the launch of a mobile gateway application for Android and iOS, designed to allow users to access AI Agent functionality on the go. The application requires pairing with a private OpenClaw Gateway already set up on other platforms, which can be completed via QR Code or setup code. Through this mobile device, users can chat with the assistant, use realtime Talk mode, approve actions executed by the Gateway, and optionally enable device functions such as the camera, screen, location, and notifications. Although the OpenClaw application features a minimalist design, it provides the capability for device-aware automation and workflow monitoring on mobile devices. However, initial user reviews indicate that the application contains multiple bugs, with user feedback including pairing failures and poor usability, meaning the overall experience has not yet reached optimalization.",
    tags_en: ["OpenClaw", "AI Agent", "Android", "iOS", "Mobile Application", "Gateway"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/openclaw-app-android-ios", lang: "EN" }
    ]
  },
  {
    id: "20260629-071",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Watch 9 與 Ultra 2 傳出更新錶帶設計，增加多樣化風格選項",
    summary: "本文根據洩露資訊，介紹了三星即將推出的 Galaxy Watch 9 和 Galaxy Watch Ultra 2 的更新錶帶設計。雖然主機的設計與前代（如 Watch 8）相比變化不大，但新的錶帶系列提供了多樣化的選擇，包括帶有「Ultra」字樣的錶帶、模擬皮革與矽膠材質的「Hybrid」錶帶，以及多種活動型和布料材質的錶帶。這些設計更新旨在為產品線注入新活力。值得注意的是，洩露資訊顯示三星可能不會再次更改錶帶的安裝機制，理論上意味著前一代的錶帶或許仍可兼容於 Galaxy Watch 9，但這尚未得到官方證實。預計這些新智慧手錶將在七月二十二日正式公布更多細節。",
    tags: ["Samsung", "Galaxy Watch 9", "Galaxy Watch Ultra 2", "錶帶設計", "Android"],
    title_en: "Samsung Galaxy Watch 9 and Ultra 2 Rumored to Feature Updated Strap Designs, Adding Diverse Style Options",
    summary_en: "Based on leaked information, this article introduces the updated strap designs for the upcoming Samsung Galaxy Watch 9 and Galaxy Watch Ultra 2. Although the main body design remains largely unchanged compared to the previous generation (such as the Watch 8), the new strap lineup offers diverse choices, including straps featuring the 'Ultra' designation, 'Hybrid' straps made of simulated leather and silicone, and various active and fabric material straps. These design updates aim to inject new vitality into the product line. Notably, the leaked information suggests that Samsung may not change the strap attachment mechanism again, theoretically meaning that straps from the previous generation might still be compatible with the Galaxy Watch 9, though this has not been officially confirmed. These new smartwatches are expected to reveal more details on July 22nd.",
    tags_en: ["Samsung", "Galaxy Watch 9", "Galaxy Watch Ultra 2", "Strap Design", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/samsungs-galaxy-watch-9-band-lineup-leaks-with-more-updates-than-the-smartwatch-gallery", lang: "EN" }
    ]
  },
  {
    id: "20260629-072",
    trackers: ["os"],
    category: "Android",
    title: "亞馬遜棄用 Android 轉向自研 VegaOS 平台，強化生態閉環與安全控制",
    summary: "亞馬遜宣布其 Fire TV 平台正逐步從 Android 系統轉向自研的 VegaOS 系統。亞馬遜資深副總裁 Aidan Marcuss 在接受採訪時解釋了此決策背後的動機。主要原因包括：第一，VegaOS 是一個輕量級平台，能讓亞馬遜開發出更具成本效益的 Fire TV 硬體設備；第二，從資安角度來看，亞馬遜擔憂用戶透過側載（sideloading）安裝的應用程式可能帶有惡意程式碼，因此轉向更受控的生態系統來提升安全性。然而，此轉變的實務影響是，VegaOS 不相容現有的 Android 應用程式，導致數以萬計的應用程式無法在新機型上運行。亞馬遜回應稱，大多數內容已在 VegaOS 上提供，並持續擴展支援，但該變動讓用戶面臨大量應用程式兼容性問題，且亞馬遜尚未明確說明消費者能從此轉型中獲得哪些實質利益。",
    tags: ["Amazon", "Fire TV", "VegaOS", "Android", "生態系統", "側載"],
    title_en: "Amazon Discontinues Android, Shifts to Proprietary VegaOS Platform to Strengthen Ecosystem Closure and Security Control",
    summary_en: "Amazon has announced that its Fire TV platform is gradually transitioning from the Android operating system to its proprietary VegaOS system. Senior Vice President Aidan Marcuss explained the motivations behind this decision during an interview. The primary reasons include: first, VegaOS is a lightweight platform that allows Amazon to develop more cost-effective Fire TV hardware devices; and second, from a cybersecurity perspective, Amazon is concerned that applications installed by users via sideloading may contain malicious code, thus transitioning to a more controlled ecosystem to enhance security. However, the practical impact of this transition is that VegaOS is incompatible with existing Android applications, meaning tens of thousands of apps cannot run on the new devices. Amazon responded that most content is already available on VegaOS and that support is continuously being expanded, but this change presents users with significant application compatibility issues, and Amazon has not yet clearly stated what tangible benefits consumers will gain from this transition.",
    tags_en: ["Amazon", "Fire TV", "VegaOS", "Android", "Ecosystem", "Sideloading"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/amazon-fire-tv-vegaos-android-interview", lang: "EN" }
    ]
  },
  {
    id: "20260629-073",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Watch Ultra 2 與 Z Fold 8 系列傳聞：螢幕亮度與電池規格大幅升級",
    summary: "根據最新的洩漏資訊，三星（Samsung）預計在七月舉行的 Galaxy Unpacked 活動上發布 Galaxy Watch Ultra 2 和 Galaxy Z Fold 8 系列。在螢幕方面，Galaxy Watch Ultra 2 的顯示亮度傳聞將大幅提升至 5,000 nits，超越其摺疊機型。此外，Galaxy Z Fold 8 Ultra 的峰值亮度也預計達到 3,600 nits，相較於前代 Z Fold 7 的 2,600 nits 有顯著提升。在電池與充電方面，Z Fold 8、Z Fold 8 Ultra 和 Z Flip 8 系列將升級至 45W 的充電功率，高於 Z Fold 7 的 25W。Galaxy Watch Ultra 2 傳聞搭載 800mAh 電池，並可能獲得 IP69K 等級的防水防塵等級，使其具備高壓和熱水耐受性。這些升級預計將提升產品的耐用性與使用體驗。",
    tags: ["三星", "Samsung", "Galaxy Watch Ultra 2", "Galaxy Z Fold 8", "Android", "螢幕亮度", "IP69K"],
    title_en: "Samsung Galaxy Watch Ultra 2 and Z Fold 8 Series Rumors: Major Upgrades to Screen Brightness and Battery Specs",
    summary_en: "According to the latest leaks, Samsung is expected to unveil the Galaxy Watch Ultra 2 and Galaxy Z Fold 8 series at the Galaxy Unpacked event in July. Regarding the display, the Galaxy Watch Ultra 2's display brightness is rumored to significantly increase to 5,000 nits, surpassing its foldable counterpart. Furthermore, the Galaxy Z Fold 8 Ultra's peak brightness is also expected to reach 3,600 nits, a significant improvement compared to the Z Fold 7's 2,600 nits. In terms of battery and charging, the Z Fold 8, Z Fold 8 Ultra, and Z Flip 8 series will upgrade to a 45W charging power, higher than the Z Fold 7's 25W. The Galaxy Watch Ultra 2 is rumored to feature an 800mAh battery and may receive an IP69K rating, giving it resistance to high pressure and hot water. These upgrades are expected to enhance the products' durability and user experience.",
    tags_en: ["Samsung", "Galaxy Watch Ultra 2", "Galaxy Z Fold 8", "Android", "Screen Brightness", "IP69K"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/galaxy-watch-ultra-z-fold-8-screen-brightness-and-battery-leaks", lang: "EN" }
    ]
  },
  {
    id: "20260629-074",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel Watch 5 透過 FCC 資訊曝光，預計將具備 Wi-Fi 與 LTE 連接功能",
    summary: "根據網路情報來源的報導，Google 的 Pixel Watch 5 已透過 FCC 網站的註冊清單曝光。這些清單列出了四個型號（G25QD, G1XJ6, G0F3Y, GFW3R），顯示該設備具備透過 Wi-Fi 和 LTE 連接至網路服務提供者。這與過去 Pixel Watch 系列中部分型號的配置一致，暗示 Google 可能會跳過傳統上較經濟的純 Wi-Fi 版本。情報指出，如果所有型號都具備這兩種連接協議，可能代表 Google 正在規劃推出類似「Pro」版本的第二款產品，以應對市場需求。雖然 FCC 文件提供了初步的硬體資訊，但具體細節仍不明確，預計 Google 可能會在今年八月左右正式發布新一代 Pixel Watch 系列。",
    tags: ["Google", "Pixel Watch 5", "FCC", "Wearable", "LTE", "Wi-Fi"],
    title_en: "Google Pixel Watch 5 Exposed via FCC Filings, Expected to Feature Wi-Fi and LTE Connectivity",
    summary_en: "According to network intelligence sources, Google's Pixel Watch 5 has appeared in the FCC website's registration listings. These listings include four models (G25QD, G1XJ6, G0F3Y, GFW3R), indicating that the device is equipped with both Wi-Fi and LTE connectivity to network service providers. This aligns with the configuration of some previous Pixel Watch series models, suggesting that Google might skip the traditionally more economical pure Wi-Fi version. The intelligence suggests that if all models feature both connection protocols, it may indicate that Google is planning to launch a second product similar to a 'Pro' version to meet market demand. Although the FCC documents provide preliminary hardware information, the specific details remain unclear, and Google is expected to officially launch the new generation Pixel Watch series around August of this year.",
    tags_en: ["Google", "Pixel Watch 5", "FCC", "Wearable", "LTE", "Wi-Fi"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/pixel-watch-5-spotted-ahead-of-launch", lang: "EN" }
    ]
  },
  {
    id: "20260629-075",
    trackers: ["os"],
    category: "Android",
    title: "Redmagic 確認推出 Astra 2：下一代全球型 Android 遊戲平板預告",
    summary: "Redmagic 宣布其下一款小型遊戲平板將以「Redmagic Astra 2」的名稱進行全球發布。此舉延續了市場對小型高階 Android 遊戲設備的興趣，與 Lenovo Legion Tab 等產品類比。雖然 Redmagic 過去的 Astra 型號已具備 OLED 螢幕和生物識別等特色，但 Astra 2 將是其更進階的產品。目前有消息指出，Redmagic 正在測試的「Gaming Tablet 5 Pro」雖然具備 Snapdragon 8 Elite Gen 5 晶片和液冷系統，但該版本最初僅限中國市場。Astra 2 的具體發售日期和價格尚未公布，但其全球化發布預示著該品牌將持續在高性能、小型化遊戲設備市場進行佈局。",
    tags: ["Redmagic", "Astra 2", "Android", "遊戲平板", "Snapdragon", "行動裝置"],
    title_en: "Redmagic Confirms Launch of Astra 2: Next-Generation Global Android Gaming Tablet Preview",
    summary_en: "Redmagic announced that its next small gaming tablet will be globally released under the name \"Redmagic Astra 2.\" This move capitalizes on market interest in compact, high-end Android gaming devices, similar to products like the Lenovo Legion Tab. Although previous Astra models featured OLED screens and biometric security, the Astra 2 is set to be a more advanced product. Currently, there are reports that the \"Gaming Tablet 5 Pro,\" which Redmagic is testing, features the Snapdragon 8 Elite Gen 5 chip and a liquid cooling system, but this version was initially limited to the Chinese market. While the specific release date and price of the Astra 2 have not been announced, its global launch signals the brand's continued focus on the high-performance, compact gaming device market.",
    tags_en: ["Redmagic", "Astra 2", "Android", "Gaming Tablet", "Snapdragon", "Mobile Device"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/redmagic-astra-2-gaming-tablet-global-launch-confirmed", lang: "EN" }
    ]
  },
  {
    id: "20260629-076",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 預覽版新增「照片隨機輪播」功能，讓使用者可自選相簿自動更換桌布",
    summary: "Google Pixel 在最新的 Android 17 QPR1 Beta 版本中，預計將推出「照片隨機輪播」（Photo shuffle）功能。此功能允許使用者建立包含喜愛照片的相簿，讓手機桌布可以自動定期更新，提升個人化體驗。雖然目前功能並非預設啟用，但可透過手動開關開啟。目前觀察到的輪播間隔選項包括每小時、每日、日出/日落，以及「點擊」觸發。相較於過去僅限於 Google 內建「合輯」（Collections）的輪播功能，此新特性最大的亮點是允許使用者選擇自定義的圖片來源。雖然原文未明確說明是否能適用於所有圖片類型，但其靈活性顯著提升了用戶的客製化程度。此功能預計將在未來 Pixel 更新中逐步推出。",
    tags: ["Google Pixel", "Android 17", "照片隨機輪播", "桌布", "Android 系統更新", "AOSP"],
    title_en: "Google Pixel Preview Adds 'Photo Shuffle' Feature, Allowing Users to Select Albums for Automatic Wallpaper Changes",
    summary_en: "In the latest Android 17 QPR1 Beta version, Google Pixel is expected to introduce the 'Photo shuffle' feature. This function allows users to create an album of favorite photos, enabling the phone's wallpaper to automatically update at regular intervals, enhancing the personalization experience. Although the feature is not enabled by default, it can be activated manually. Observed shuffle interval options include hourly, daily, sunrise/sunset, and 'on click' triggers. Compared to previous shuffle functions limited only to Google's built-in 'Collections,' the biggest highlight of this new feature is that it allows users to select custom image sources. Although the original text does not explicitly state if it can apply to all image types, its flexibility significantly enhances user customization. This feature is expected to be rolled out gradually in future Pixel updates.",
    tags_en: ["Google Pixel", "Android 17", "Photo shuffle", "Wallpaper", "Android System Update", "AOSP"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/google-pixel-phones-may-soon-let-you-shuffle-your-favorite-wallpapers", lang: "EN" }
    ]
  },
  {
    id: "20260629-077",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 應用程式 Chess Play and Learn App 存在檔案處理漏洞，可能導致備份檔案外洩",
    summary: "本漏洞（CVE-2026-13514）影響 Chess Play and Learn App 的版本，從 4.9.0 到 4.9.42。問題出在對 AndroidManifest.xml 檔案的未知處理，該操作允許攻擊者在實體設備上執行攻擊，導致備份檔案暴露給未經授權的控制範圍。這屬於 Android 平台上的應用程式層級漏洞。雖然廠商已獲知此問題並承諾修復，但其漏洞獎勵計畫明確排除實體存取攻擊。建議使用者應立即升級受影響的應用程式組件版本，以修補此安全風險。",
    tags: ["Android", "CVE-2026-13514", "Chess Play and Learn App", "AndroidManifest.xml", "應用程式漏洞", "備份檔案外洩"],
    title_en: "Android Application Chess Play and Learn App Has File Handling Vulnerability, Potentially Leading to Backup File Leakage",
    summary_en: "This vulnerability (CVE-2026-13514) affects versions of the Chess Play and Learn App from 4.9.0 to 4.9.42. The issue lies in the unknown handling of the AndroidManifest.xml file, an operation that allows an attacker to execute an attack on a physical device, leading to backup files being exposed to unauthorized control. This is an application-level vulnerability on the Android platform. Although the vendor is aware of the issue and has committed to a fix, its bug bounty program explicitly excludes physical access attacks. Users are advised to immediately upgrade the affected application component version to patch this security risk.",
    tags_en: ["Android", "CVE-2026-13514", "Chess Play and Learn App", "AndroidManifest.xml", "Application Vulnerability", "Backup File Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-13514", lang: "EN" }
    ]
  },
  {
    id: "20260629-078",
    trackers: ["os"],
    category: "開源影響",
    title: "Linux Foundation 發表報告：提供衡量開源專案辦公室（OSPO）價值與投資回報率（ROI）的框架",
    summary: "本文介紹了衡量開源專案辦公室（OSPO）價值的重要性，指出在當前財務環境下，OSPO經常面臨資源削減的壓力。OSPO需要具備清晰的機制，能夠向高層管理階層和利害關係人證明其工作對組織目標的實際貢獻，並證明其價值超過其他競爭資源的專案。文章重點分享了 Ibrahim Haddad 的報告《Measuring OSPO Value: A Framework for ROI, Resilience, Risk Foresight, and Strategic Influence》，該報告提供了一個全面的框架，幫助組織量化開源投入的投資回報率（ROI）、韌性、風險預測和戰略影響力，協助OSPO將其工作成果轉化為可量化的商業價值。",
    tags: ["OSPO", "開源專案", "投資回報率", "ROI", "Linux Foundation", "開源治理"],
    title_en: "Linux Foundation Publishes Report: A Framework for Measuring Open Source Program Office (OSPO) Value and Return on Investment (ROI)",
    summary_en: "This article discusses the importance of measuring the value of an Open Source Program Office (OSPO), noting that OSPOs often face resource reduction pressure in the current financial climate. OSPOs need clear mechanisms to demonstrate to senior management and stakeholders the actual contribution of their work to organizational goals, and to prove that their value exceeds that of other competing projects. The article highlights Ibrahim Haddad's report, 'Measuring OSPO Value: A Framework for ROI, Resilience, Risk Foresight, and Strategic Influence.' This report provides a comprehensive framework to help organizations quantify the Return on Investment (ROI), resilience, risk foresight, and strategic influence of open source investments, assisting OSPOs in translating their work outcomes into quantifiable business value.",
    tags_en: ["OSPO", "Open Source Project", "Return on Investment", "ROI", "Linux Foundation", "Open Source Governance"],
    sources: [
      { name: "Linux Foundation", url: "https://linuxfoundation.org/blog/measuring-ospo-value", lang: "EN" }
    ]
  },
  {
    id: "20260629-079",
    trackers: ["security"],
    category: "前瞻技術",
    title: "SpecterOps警告：SQL Server 2025 AI功能可能被濫用，高權限攻擊者可透過外部連線竊取資料",
    summary: "資安公司 SpecterOps 發布報告，指出微軟新一代資料庫平臺 SQL Server 2025 整合多項 AI 功能後，可能產生新的攻擊面。受影響的關鍵功能包括用於連結外部 REST 端點的預存程序 `sp_invoke_external_rest_endpoint`、建立外部 AI 模型指令 `CREATE EXTERNAL MODEL`，以及將文字內容傳送至外部 AI 模型的 `AI_GENERATE_EMBEDDINGS`。這些功能皆允許 SQL Server 透過 HTTPS 與外部服務通訊。SpecterOps 警告，若攻擊者取得高權限（如 sysadmin），可利用這些合法 AI 功能，將資料表或文件匯出後傳送到攻擊者控制的外部端點。由於 AI 功能使得資料庫伺服器的出站 HTTPS 流量被視為正常業務流程，傳統的網路監控與偵測方式難度顯著增加，使得惡意活動更難被傳統安全機制攔截。",
    tags: ["SQL Server 2025", "SpecterOps", "AI 攻擊面", "資料外洩", "sysadmin", "外部連線"],
    title_en: "SpecterOps Warns: SQL Server 2025 AI Features Could Be Exploited, Allowing High-Privilege Attackers to Exfiltrate Data via External Connections",
    summary_en: "Security firm SpecterOps released a report indicating that Microsoft's next-generation database platform, SQL Server 2025, introduces new attack surfaces due to the integration of multiple AI features. Key vulnerable features include the stored procedure `sp_invoke_external_rest_endpoint` used for connecting to external REST endpoints, the command `CREATE EXTERNAL MODEL` for establishing external AI models, and `AI_GENERATE_EMBEDDINGS` for sending text content to external AI models. All these features allow SQL Server to communicate with external services via HTTPS. SpecterOps warns that if an attacker gains high privileges (such as sysadmin), they can leverage these legitimate AI functions to export data tables or files and transmit them to an external endpoint controlled by the attacker. Because the AI features make outbound HTTPS traffic from the database server appear as normal business workflow, traditional network monitoring and detection methods face significantly increased difficulty, making malicious activity harder for traditional security mechanisms to intercept.",
    tags_en: ["SQL Server 2025", "SpecterOps", "AI Attack Surface", "Data Leakage", "sysadmin", "External Connection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176941", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-080",
    trackers: ["security"],
    category: "前瞻技術",
    title: "酷澎數位信任部門：資安角色轉型至「信任設計」，以FIDO2 Passkey提升用戶信任度",
    summary: "酷澎數位信任部門總監Stanley Chou指出，資安已超越技術防護，轉向建立使用者信任。他提出「信任設計」（Trust Design）概念，主張信任可以被設計，核心是減少使用者的不確定感。該設計流程包含三個步驟：首先，定義關鍵場景（如電商結帳、輸入密碼等），找出信任失效模式；其次，建立明確的信任承諾；最後，透過「邊界」、「保證」和「韌性」三個維度進行驗證，並持續監測信任偏移。文章以酷澎導入FIDO2 Passkey應用為例，說明其應用過程。傳統登入模式讓使用者擔心「秘密共享」和中間人攻擊。酷澎透過FIDO2，將私鑰儲存在個人手機，並採用非對稱式驗證，大幅降低了使用者將秘密分享給系統端的風險，提升了登入的信任度。目前該機制已產生超過50萬把Passkey金鑰，顯示其導入成效。",
    tags: ["酷澎", "FIDO2", "Passkey", "信任設計", "數位信任", "身分驗證", "DevSecOps"],
    title_en: "CoolBerry Digital Trust Department: Shifting Security Roles to 'Trust Design' with FIDO2 Passkeys to Enhance User Trust",
    summary_en: "Stanley Chou, Director of CoolBerry Digital Trust, points out that cybersecurity has moved beyond technical defense and is now focused on building user trust. He introduces the concept of 'Trust Design,' arguing that trust can be designed, with the core goal of reducing user uncertainty. This design process includes three steps: first, defining critical scenarios (such as e-commerce checkout or password entry) to identify trust failure modes; second, establishing clear trust commitments; and finally, validating through three dimensions—'boundaries,' 'guarantees,' and 'resilience'—while continuously monitoring for trust drift. The article uses CoolBerry's implementation of FIDO2 Passkeys as an example, detailing the application process. Traditional login methods cause users to worry about 'secret sharing' and man-in-the-middle attacks. By utilizing FIDO2, CoolBerry stores the private key on the user's personal mobile phone and adopts asymmetric authentication, significantly reducing the risk of users sharing secrets with the system, thereby enhancing login trust. This mechanism has currently generated over 500,000 Passkey keys, demonstrating its successful adoption.",
    tags_en: ["CoolBerry", "FIDO2", "Passkey", "Trust Design", "Digital Trust", "Authentication", "DevSecOps"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176935", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-081",
    trackers: ["security"],
    category: "前瞻技術",
    title: "美國總統簽署行政命令：要求聯邦政府加速推動後量子密碼學（PQC）遷移，設定2030年里程碑",
    summary: "美國總統川普簽署行政命令，要求聯邦政府加速推動後量子密碼學（PQC）遷移，目標是藉由聯邦採購帶動產業升級。該命令要求各聯邦機關盤點高價值資產及高影響系統使用的公開金鑰密碼，建立密碼學資產盤點機制。具體時程要求高價值資產及高影響系統必須在2030年底前完成後量子金鑰建立（Key Establishment）部署，並在2031年底前完成後量子數位簽章（Digital Signatures）遷移。此外，行政命令還要求修訂聯邦採購法規（FAR），要求聯邦承包商需在2030年底前符合NIST標準，納入PQC演算法。這項政策將PQC遷移分為加密通訊和身分驗證兩條路徑，為美國政府的資安基礎設施帶來明確的技術升級時程。",
    tags: ["PQC", "後量子密碼學", "聯邦政府", "NIST", "資安政策", "加密通訊"],
    title_en: "US President Signs Executive Order Mandating Federal Government Acceleration of Post-Quantum Cryptography (PQC) Transition, Setting 2030 Milestones",
    summary_en: "President Trump signed an executive order requiring the federal government to accelerate the transition to Post-Quantum Cryptography (PQC), aiming to drive industry upgrades through federal procurement. The order mandates that federal agencies inventory public-key cryptography used in high-value assets and high-impact systems, establishing a cryptographic asset inventory mechanism. Specifically, it requires that high-value assets and high-impact systems complete the deployment of Post-Quantum Key Establishment by the end of 2030, and complete the transition of Post-Quantum Digital Signatures by the end of 2031. Furthermore, the executive order requires the revision of the Federal Acquisition Regulation (FAR), mandating that federal contractors comply with NIST standards and incorporate PQC algorithms by the end of 2030. This policy divides the PQC transition into two paths: cryptographic communication and identity verification, providing a clear technical upgrade timeline for the US government's cybersecurity infrastructure.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "Federal Government", "NIST", "Cybersecurity Policy", "Cryptographic Communication"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176928", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-082",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Forescout研究：近九成SSH伺服器缺乏PQC支援，企業應規劃量子就緒路線圖",
    summary: "網路資產管理與資安廠商Forescout旗下Vedere Labs發布研究，警告隨著量子運算技術的成熟，現行公開金鑰密碼系統將面臨威脅。研究指出，雖然支援後量子密碼學（PQC）金鑰交換（KEX）演算法的SSH伺服器數量已從一年前的1,150萬臺增加至超過1,900萬臺，但整體仍有近九成SSH伺服器尚未具備PQC能力。在企業網路設備中，採用支援PQC的OpenSSH版本比例雖已提升，但IoT與OT設備的PQC支援比例仍顯不足。此外，研究也觀察到TLS 1.3的部署率有所提升，但企業網路中具備PQC能力的比例仍低於10%。專家建議，組織應及早建立「量子就緒路線圖」，盤點現有加密資產，評估風險，並與供應商協調產品升級，以應對未來量子運算帶來的安全風險。",
    tags: ["Forescout", "PQC", "量子運算", "SSH", "加密資產", "量子就緒"],
    title_en: "Forescout Research: Nearly 90% of SSH Servers Lack PQC Support; Enterprises Should Plan a Quantum Readiness Roadmap",
    summary_en: "Vedere Labs, a company under the network asset management and cybersecurity vendor Forescout, released research warning that current public-key cryptography systems will face threats as quantum computing technology matures. The study points out that while the number of SSH servers supporting Post-Quantum Cryptography (PQC) Key Exchange (KEX) algorithms has increased from 11.5 million units a year ago to over 19 million units, nearly 90% of SSH servers overall still lack PQC capability. Although the proportion of OpenSSH versions supporting PQC in enterprise network devices has improved, the PQC support ratio remains insufficient for IoT and OT equipment. Furthermore, the study observed an increase in TLS 1.3 deployment rates, but the proportion of enterprise networks with PQC capability remains below 10%. Experts recommend that organizations should establish a 'quantum readiness roadmap' early, inventory existing cryptographic assets, assess risks, and coordinate product upgrades with vendors to address future security risks posed by quantum computing.",
    tags_en: ["Forescout", "PQC", "Quantum Computing", "SSH", "Cryptographic Assets", "Quantum Readiness"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176915", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260629-083",
    trackers: ["security"],
    category: "前瞻技術",
    title: "WhatsApp 推出用戶名預留功能，強化隱私保護，讓用戶可選擇不使用電話號碼聯繫",
    summary: "WhatsApp 宣布推出全球用戶名預留功能，旨在保護超過三十億用戶的隱私。此功能允許用戶使用自定義的用戶名進行聯繫，而非直接分享電話號碼。用戶可以預先創建和保留用戶名，該功能將分階段推出。WhatsApp 強調這是一個隱私功能，而非社交媒體帳號，接收方必須知道用戶的精確用戶名才能首次聯繫。此外，用戶還可以設定「用戶名密鑰」（username key），為用戶名增加額外保護層級，確保只有知道用戶名和密鑰的人才能首次聯繫。此舉的重大益處是，一旦啟用，其他帳號將無法查看或存取用戶的電話號碼。內容創作者和企業用戶甚至可以選擇將現有的 Instagram 或 Facebook 用戶名綁定到 WhatsApp。此功能開發時間點，已追隨 Signal 等其他通訊軟體，旨在提升用戶在數位空間的隱私控制權。",
    tags: ["WhatsApp", "用戶名預留", "隱私保護", "Meta", "通訊軟體", "用戶名密鑰"],
    title_en: "WhatsApp Launches Username Reservation Feature to Enhance Privacy, Allowing Users to Communicate Without Using Phone Numbers",
    summary_en: "WhatsApp has announced the global launch of a username reservation feature, aimed at protecting the privacy of over three billion users. This feature allows users to communicate using a custom username rather than directly sharing their phone number. Users can pre-create and reserve a username, which will be rolled out in phases. WhatsApp emphasizes that this is a privacy feature, not a social media account, and the recipient must know the user's exact username to initiate contact. Furthermore, users can set a 'username key' to add an extra layer of protection to the username, ensuring that only those who know both the username and the key can initiate contact. The major benefit of this feature is that, once enabled, other accounts will be unable to view or access the user's phone number. Content creators and business users can even choose to link existing Instagram or Facebook usernames to WhatsApp. The timing of this feature's development follows other messaging applications like Signal, aiming to enhance users' privacy control in the digital space.",
    tags_en: ["WhatsApp", "Username Reservation", "Privacy Protection", "Meta", "Messaging App", "Username Key"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/whatsapp-is-finally-getting-usernames.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-084",
    trackers: ["security"],
    category: "前瞻技術",
    title: "量子計算威脅迫近：企業應採取「憑證優先」策略進行後量子密碼遷移",
    summary: "隨著量子電腦技術的進步，目前加密的資料（如密碼、憑證）未來可能不再保密。攻擊者可利用「現在收割、稍後解密」（Harvest Now, Decrypt Later）戰術，即當前攔截並儲存加密流量，等待量子電腦解密。由於憑證的保密壽命可能長達數年，風險極高。為應對此威脅，建議企業應採取「憑證優先」（credentials-first）的遷移策略。第一步是盤點所有加密依賴，特別關注密碼管理器、秘密管理器和特權存取管理（PAM）平台，找出長期存活的服務帳號和硬編碼密鑰。第二，應根據「保密壽命」和「可達性」來評估風險，而非僅看系統規模。第三，建議採用「混合加密」（hybrid cryptography），將傳統演算法與抗量子演算法結合，確保連接同時抵抗現有和未來的攻擊。最後，應建立「加密敏捷性」（crypto-agility），將加密功能集中化，使演算法更換成為配置變更而非大規模重構。",
    tags: ["量子計算", "後量子密碼", "憑證", "混合加密", "加密敏捷性", "NSA", "NIST"],
    title_en: "Quantum Computing Threat Looms: Enterprises Should Adopt a 'Credentials-First' Strategy for Post-Quantum Cryptography Migration",
    summary_en: "As quantum computing technology advances, currently encrypted data (such as passwords and certificates) may lose their confidentiality in the future. Attackers can employ a 'Harvest Now, Decrypt Later' tactic, which involves intercepting and storing encrypted traffic now, waiting for a quantum computer to decrypt it. Given that the confidentiality lifespan of certificates can span several years, the risk is extremely high. To address this threat, enterprises are advised to adopt a 'credentials-first' migration strategy. The first step is to inventory all cryptographic dependencies, paying special attention to password managers, secret managers, and Privileged Access Management (PAM) platforms, to identify long-lived service accounts and hardcoded keys. Second, risk should be assessed based on 'confidentiality lifespan' and 'accessibility,' rather than merely system size. Third, it is recommended to adopt 'hybrid cryptography,' combining traditional algorithms with quantum-resistant algorithms to ensure connections resist both current and future attacks. Finally, 'crypto-agility' should be established by centralizing cryptographic functions, making algorithm replacement a configuration change rather than a large-scale refactoring.",
    tags_en: ["Quantum Computing", "Post-Quantum Cryptography", "Credentials", "Hybrid Cryptography", "Crypto-Agility", "NSA", "NIST"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/why-post-quantum-cryptography-starts.html", lang: "EN" }
    ]
  },
  {
    id: "20260629-085",
    trackers: ["os"],
    category: "重點關注",
    title: "最高法院裁定：手機定位紀錄受第四修正案保護，要求警方取得搜查令",
    summary: "美國最高法院在 Chatrie v. United States 案中做出 6-3 的裁決，擴大第四修正案的保護範圍。該裁決指出，即使個人自願將定位歷史資料提供給 Google 或 Apple 等科技公司，其仍具有合理的隱私期待。這意味著警方若要取得這些定位資料，必須遵循標準的搜查令程序，不能再使用廣泛的地理圍欄（geofencing）搜查令來繞過個體搜查令的要求。此判決挑戰了司法部先前主張，用戶同意使用如 Google 地圖時間軸（Timeline）功能即放棄隱私權的觀點。此判決對個人隱私權具有重大影響，要求科技公司和執法機構必須更嚴格遵守法律程序。原文未提供具體修補建議，但實務上代表用戶應提高對個人定位資料的隱私意識，並關注科技公司在數據處理上的變化。",
    tags: ["最高法院", "第四修正案", "定位資料", "隱私權", "Google", "Apple", "Chatrie v. United States"],
    title_en: "Supreme Court Rules: Mobile Location Records Protected by Fourth Amendment, Requiring Search Warrant",
    summary_en: "In the case of Chatrie v. United States, the U.S. Supreme Court issued a 6-3 ruling, expanding the scope of Fourth Amendment protections. The ruling stated that even if individuals voluntarily provide location history data to tech companies like Google or Apple, that data retains a reasonable expectation of privacy. This means that if law enforcement wishes to obtain this location data, they must follow standard search warrant procedures and can no longer use broad geofencing warrants to circumvent individual warrant requirements. This judgment challenges the Department of Justice's previous assertion that user consent to use features like Google Maps Timeline constitutes a waiver of privacy rights. This ruling has significant implications for personal privacy, requiring both tech companies and law enforcement agencies to adhere more strictly to legal procedures. While the original text does not provide specific remediation advice, practically, it suggests that users should raise their privacy awareness regarding personal location data and monitor changes in how tech companies handle data.",
    tags_en: ["Supreme Court", "Fourth Amendment", "Location Data", "Privacy Rights", "Google", "Apple", "Chatrie v. United States"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/supreme-court-rules-the-fourth-amendment-protects-your-phones-location-history", lang: "EN" }
    ]
  },
  {
    id: "20260629-086",
    trackers: ["os"],
    category: "重點關注",
    title: "三星Galaxy Z Fold 8系列產品命名混亂，最新洩漏資料確認「Fold 8」與「Fold 8 Ultra」兩款機型",
    summary: "根據最新的洩漏資訊，三星（Samsung）下一代Galaxy Z Fold 8系列將包含兩款設備：Galaxy Z Fold 8和Galaxy Z Fold 8 Ultra。這兩款機型分別繼承了Galaxy Z Fold 7的外型，以及一款模仿蘋果未來可折疊iPhone設計、擁有更寬內螢幕和更短外螢幕的機型。雖然命名上極為混亂，但WPC資料庫的案例列表已顯示了Galaxy Z Flip 8、Fold 8和Fold 8 Ultra的產品型號，幾乎確認了三星的命名策略。三星預計於7月22日發布這些可折疊手機。此類洩漏資訊通常不會持久，但為業界提供了關於其產品線和命名規則的初步了解。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Foldable", "Android", "產品洩漏", "命名策略"],
    title_en: "Samsung Galaxy Z Fold 8 Series Naming Confusion: Latest Leaks Confirm 'Fold 8' and 'Fold 8 Ultra' Models",
    summary_en: "According to the latest leaked information, Samsung's next-generation Galaxy Z Fold 8 series will include two devices: the Galaxy Z Fold 8 and the Galaxy Z Fold 8 Ultra. These two models are said to inherit the design of the Galaxy Z Fold 7, along with a model that mimics Apple's future foldable iPhone design, featuring a wider inner screen and a shorter outer screen. Although the naming is extremely confusing, the WPC database case list has shown product models for the Galaxy Z Flip 8, Fold 8, and Fold 8 Ultra, nearly confirming Samsung's naming strategy. Samsung is expected to release these foldable phones on July 22. While such leaked information is usually transient, it provides the industry with an initial understanding of its product line and naming conventions.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Foldable", "Android", "Product Leak", "Naming Strategy"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/samsungs-confusing-galaxy-z-fold-8-ultra-name-is-basically-official-in-latest-leak-gallery", lang: "EN" }
    ]
  },
  {
    id: "20260629-087",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Meet 推出 Gemini 筆記功能：AI Pro/Ultra 用戶可自動生成會議摘要與行動項目",
    summary: "Google 為其 Workspace 用戶推出了「為我記錄筆記」（Take notes for me）功能，該功能專為 Google AI Pro 和 Ultra 訂閱者開放。此功能由 Gemini 驅動，能夠即時轉錄 Google Meet 會議內容，並自動生成包含關鍵行動項目、決策點和後續步驟的詳細摘要。使用者可透過點擊 Meet 介面或在設定中啟用此功能，並可自訂摘要的詳細程度與格式。生成的筆記將儲存至 Google Drive 的 Google 文件中，同時也會透過電子郵件通知參與者。此功能目前支援多種語言，包括英文、法文、德文、義文、日文、韓文、葡萄牙文和西班牙文。此更新旨在幫助使用者更專注於討論本身，提升會議效率。此功能僅限於付費的 AI Pro 或 Ultra 訂閱方案。",
    tags: ["Google Meet", "Gemini", "Workspace", "AI Pro", "AI Ultra", "會議記錄", "生產力工具"],
    title_en: "Google Meet introduces Gemini note-taking feature: AI Pro/Ultra users can automatically generate meeting summaries and action items",
    summary_en: "Google has launched the \"Take notes for me\" feature for its Workspace users, which is exclusively available to Google AI Pro and Ultra subscribers. This feature, powered by Gemini, can transcribe Google Meet meeting content in real-time and automatically generate a detailed summary that includes key action items, decision points, and follow-up steps. Users can enable this feature by clicking within the Meet interface or through the settings, and they can customize the level of detail and format of the summary. The generated notes will be saved in a Google Doc in Google Drive and will also be notified to participants via email. This feature currently supports multiple languages, including English, French, German, Italian, Japanese, Korean, Portuguese, and Spanish. This update aims to help users focus more on the discussion itself, thereby improving meeting efficiency. This feature is only available to paid AI Pro or Ultra subscription plans.",
    tags_en: ["Google Meet", "Gemini", "Workspace", "AI Pro", "AI Ultra", "Meeting Notes", "Productivity Tools"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/google-meet-take-notes-ai-pro-ultra", lang: "EN" }
    ]
  },
  {
    id: "20260629-088",
    trackers: ["os"],
    category: "重點關注",
    title: "WPC 宣布 Qi 標準升級至 50W 無線充電，預計將推動 Pixel 與 iPhone 等主流設備採用",
    summary: "無線電力聯盟（WPC）宣布，基於 Qi 和 Qi2 技術，正在推進更高功率的 50W 無線充電標準。該標準的發展受到小米（Xiaomi）的積極推動，其核心技術採用了「小電感、低電壓、高功率」的解決方案。雖然該標準尚未最終定案，但預計更新可能在 2028 年左右推出。一旦實施，50W 的充電能力將大幅提升無線充電的性能。預計除了主動推動標準的小米之外，Google Pixel 和 iPhone 等主要品牌也將跟進採用此技術，以應對市場對更高功率充電的需求。這項發展預示著未來智慧型手機和配件將朝向更高效率、更強大的無線充電能力發展。",
    tags: ["WPC", "Qi2", "50W 充電", "無線充電", "Pixel", "iPhone"],
    title_en: "WPC Announces Qi Standard Upgrade to 50W Wireless Charging, Expected to Drive Adoption by Devices like Pixel and iPhone",
    summary_en: "The Wireless Power Consortium (WPC) announced that it is advancing a higher-power 50W wireless charging standard based on Qi and Qi2 technologies. The development of this standard is actively driven by Xiaomi, whose core technology utilizes a \"small inductance, low voltage, high power\" solution. Although the standard has not been finalized, the update is expected to be released around 2028. Once implemented, the 50W charging capability will significantly enhance the performance of wireless charging. It is anticipated that major brands, including Google Pixel and iPhone, will follow suit in adopting this technology to meet the market demand for higher power charging. This development suggests that future smartphones and accessories will move toward higher efficiency and more powerful wireless charging capabilities.",
    tags_en: ["WPC", "Qi2", "50W Charging", "Wireless Charging", "Pixel", "iPhone"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/29/qi2-50w-upgrade-meeting-report", lang: "EN" }
    ]
  },
  {
    id: "20260629-089",
    trackers: ["os"],
    category: "重點關注",
    title: "最高法院裁定：取得詳細手機定位歷史資料構成第四修正案下的搜查，要求警方必須具備搜查令與合理懷疑基礎",
    summary: "美國最高法院在一項 6:3 的判決中裁定，當警方從科技公司取得個人的詳細手機定位歷史資料時，這構成了《美國憲法》第四修正案所保護的搜查行為。此裁定確立了即使資料僅涵蓋短時間或由第三方公司持有，其隱私權依然受到憲法保護。根據判決，由於取得此類資料本身即被視為「搜查」，警方在存取前通常必須取得具備合理懷疑基礎（probable cause）且描述了足夠具體範圍的搜查令。雖然本案涉及 Google 和 Android 手機，但判決的保護範圍不限於特定公司，未來可能延伸至 Apple 等其他科技公司持有的可比定位記錄。最高法院並未裁定本案中使用的地理圍欄搜查令（geofence warrant）是否有效，而是將案件交回上訴法院進一步審查搜查令各階段是否具備合理懷疑基礎與足夠具體性。此判決明確指出，此類定位資料不能被視為警方過去可自由取得的資源。",
    tags: ["最高法院", "第四修正案", "手機定位資料", "隱私權", "法律判例", "Google", "Apple"],
    title_en: "Supreme Court Rules: Obtaining Detailed Mobile Location History Constitutes a Search Under the Fourth Amendment, Requiring Police to Possess a Warrant and Probable Cause",
    summary_en: "In a 6-3 decision, the U.S. Supreme Court ruled that when police obtain an individual's detailed mobile location history from a technology company, this constitutes a search protected by the Fourth Amendment to the U.S. Constitution. This ruling establishes that an individual's privacy rights remain constitutionally protected even if the data covers only a short period or is held by a third-party company. According to the judgment, because obtaining this type of data is considered a 'search' in itself, police typically must obtain a warrant that is based on probable cause and describes a sufficiently specific scope before accessing it. Although this case involved Google and Android phones, the ruling's protection is not limited to specific companies and may extend in the future to comparable location records held by other technology companies, such as Apple. The Supreme Court did not rule on the validity of the geofence warrant used in this case; instead, it remanded the matter to the appellate court for further review of whether the warrant possessed probable cause and sufficient specificity at each stage of the search. This decision clearly states that this type of location data cannot be viewed as a resource freely available to the police.",
    tags_en: ["Supreme Court", "Fourth Amendment", "Mobile Location Data", "Privacy Rights", "Legal Precedent", "Google", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/scotus-says-detailed-cellphone-location-data-is-protected-by-the-fourth-amendment", lang: "EN" }
    ]
  },
  {
    id: "20260629-090",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple與Optis專利爭議升級：挑戰英國最高法院5.02億美元授權費裁決",
    summary: "本案為Apple與Optis Wireless之間關於4G/LTE網路技術專利的長期法律糾紛。爭議焦點已從是否侵權，轉移至Apple應支付的合理、公平、非歧視（FRAND）授權費用。英國上訴法院曾裁定Apple需向Optis支付5.02億美元的全球專利授權金，該金額的計算基礎包括了Optis與Google的交易，並追溯至2013年，引發了Apple對計算方法和法律適用性的質疑。Apple現正向英國最高法院尋求審查，主張上訴法院在法律上存在錯誤，且估值方法「武斷」。此外，高通（Qualcomm）也對Apple的抗辯立場提出異議，認為其可能削弱技術開發的激勵機制。此案的審理將決定Apple未來在相關技術領域的授權成本和法律規範。",
    tags: ["Apple", "Optis Wireless", "專利戰", "FRAND", "英國最高法院", "4G/LTE", "智慧財產"],
    title_en: "Apple-Optis Patent Dispute Escalates: Challenging UK Supreme Court's $502 Million Licensing Fee Ruling",
    summary_en: "This case is a long-standing legal dispute between Apple and Optis Wireless regarding 4G/LTE network technology patents. The focus of the dispute has shifted from whether infringement occurred to the reasonable, fair, and non-discriminatory (FRAND) licensing fees Apple must pay. The UK Court of Appeal previously ruled that Apple must pay Optis $502 million in global patent royalties. The calculation of this amount included transactions between Optis and Google and was traced back to 2013, leading Apple to question both the calculation methodology and the legal applicability. Apple is now seeking review from the UK Supreme Court, arguing that the Court of Appeal made legal errors and that the valuation method was 'arbitrary.' Furthermore, Qualcomm has also objected to Apple's defense stance, arguing that it may weaken the incentive mechanism for technological development. The outcome of this case will determine Apple's future licensing costs and legal standards in the relevant technology domain.",
    tags_en: ["Apple", "Optis Wireless", "Patent War", "FRAND", "UK Supreme Court", "4G/LTE", "Intellectual Property"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/apple-asks-uk-supreme-court-to-overturn-502-million-patent-ruling-in-optis-dispute", lang: "EN" }
    ]
  },
  {
    id: "20260629-091",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果挑戰印度反壟斷調查：指控印度競爭委員會（CCI）抄襲競爭對手主張",
    summary: "蘋果公司（Apple）正尋求推翻印度競爭委員會（CCI）關於其濫用App Store和應用內支付控制權的反壟斷調查結果。根據路透社報導，蘋果指控CCI未能進行獨立調查，而是「複製貼上」了來自競爭對手（如Match、Walmart的PhonePe和Paytm）的主張。蘋果還批評CCI在引用2024年歐盟裁決時，未考慮印度不同的市場條件。在罰款範圍上，蘋果主張應僅限於其在印度的相關營收，而非基於全球營業額。此案與Alphabet（Google）此前在印度面臨的爭議有相似之處。蘋果警告，對App Store的強制改變將會造成監管不確定性，並可能阻礙印度數位經濟的投資。CCI方面則堅持罰款可基於蘋果的全球營業額。",
    tags: ["Apple", "印度", "App Store", "反壟斷", "CCI", "應用內支付"],
    title_en: "Apple Challenges India Anti-Monopoly Probe: Accuses CCI of Copying Competitor Claims",
    summary_en: "Apple is seeking to overturn the Indian Competition Commission's (CCI) anti-monopoly investigation regarding its alleged misuse of App Store and in-app payment controls. According to Reuters, Apple alleges that the CCI failed to conduct an independent investigation, instead 'copying and pasting' claims made by competitors (such as Match, Walmart's PhonePe, and Paytm). Apple also criticized the CCI for failing to consider India's unique market conditions when citing the 2024 EU ruling. Regarding the penalty scope, Apple argues that the fine should be limited only to its relevant Indian revenue, rather than being based on its global turnover. This case bears similarities to the dispute previously faced by Alphabet (Google) in India. Apple warned that forced changes to the App Store would create regulatory uncertainty and could hinder investment in India's digital economy. The CCI, however, maintains that the fine can be based on Apple's global turnover.",
    tags_en: ["Apple", "India", "App Store", "Anti-Monopoly", "CCI", "In-App Payment"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/apple-says-india-built-its-app-store-antitrust-case-on-copy-pasted-claims-from-rivals", lang: "EN" }
    ]
  },
  {
    id: "20260629-092",
    trackers: ["os"],
    category: "重點關注",
    title: "WhatsApp 開放帳號名稱預留功能，提升用戶隱私與品牌一致性",
    summary: "WhatsApp 今日開始在全球範圍推出帳號名稱（Username）預留功能，讓用戶可以在新功能正式上線前預先鎖定獨特的名稱。此功能允許用戶在不公開手機號碼的情況下，與新聯絡人或企業進行通訊，為用戶提供額外的隱私保護層級。此外，WhatsApp也為創作者、小型企業和組織設立了名稱申報系統，讓這些實體能夠在WhatsApp上使用與Instagram或Facebook等其他社群平台一致的名稱，維持穩定的線上品牌形象。WhatsApp強調，用戶必須知道其確切的帳號名稱才能首次聯繫，且不會建立用戶目錄或推薦系統。雖然預留功能已開始滾動推出，但帳號名稱的正式使用將在未來數月內逐步開放，用戶將透過應用程式內通知了解其所在國家是否已支援此功能。建議用戶利用此機制，建立一個僅知曉其帳號名稱的目標群體，以強化個人隱私。",
    tags: ["WhatsApp", "帳號名稱", "Username", "隱私保護", "社群媒體", "品牌一致性"],
    title_en: "WhatsApp Introduces Reserved Account Name Feature to Enhance User Privacy and Brand Consistency",
    summary_en: "WhatsApp has begun rolling out a reserved Username feature globally today, allowing users to pre-lock a unique name before the official launch of the function. This feature enables users to communicate with new contacts or businesses without disclosing their phone number, providing an additional layer of privacy protection. Furthermore, WhatsApp has established a name registration system for creators, small businesses, and organizations, allowing these entities to use consistent names on WhatsApp that match those used on other social platforms like Instagram or Facebook, thereby maintaining a stable online brand image. WhatsApp emphasizes that users must know their exact account name to initiate contact and that the feature will not build a user directory or recommendation system. Although the reservation feature has started rolling out, the formal use of the account name will be gradually rolled out over the coming months. Users will be notified within the app regarding whether this feature is supported in their country. It is recommended that users utilize this mechanism to establish a target group that knows only their account name, thereby strengthening personal privacy.",
    tags_en: ["WhatsApp", "Username", "Privacy Protection", "Social Media", "Brand Consistency"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/whatsapp-username-reservations-are-now-open-heres-how-to-claim-yours", lang: "EN" }
    ]
  },
  {
    id: "20260629-093",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果爭取豁免權：為中國手機尋求購買被美國國防部列黑單的中國記憶體晶片",
    summary: "本文報導指出，蘋果公司（Apple）正積極遊說美國政府，爭取購買來自兩家被美國國防部（Pentagon）列為黑單的中國記憶體晶片。這些晶片供應商分別是 CXMT 和 YMTC。過去，蘋果曾在 2022 年向拜登政府尋求類似的許可，但未獲成功。儘管蘋果曾承諾這些晶片僅用於銷往中國的 iPhone，但其供應鏈的限制和地緣政治因素，使得蘋果在獲取關鍵組件上面臨挑戰。這顯示了國際貿易限制和地緣政治風險，對蘋果的產品供應鏈管理構成重大壓力。",
    tags: ["Apple", "地緣政治", "供應鏈", "中國", "記憶體晶片", "美國出口管制"],
    title_en: "Apple Seeks Exemption: Seeking to Purchase Chinese Memory Chips Blacklisted by U.S. Department of Defense",
    summary_en: "This report indicates that Apple is actively lobbying the U.S. government to purchase Chinese memory chips from two suppliers, CXMT and YMTC, both of which have been blacklisted by the U.S. Department of Defense (Pentagon). Previously, Apple sought similar permits from the Biden administration in 2022 but was unsuccessful. Although Apple had pledged that these chips would only be used for iPhones destined for China, supply chain restrictions and geopolitical factors present significant challenges for Apple in obtaining key components. This highlights the major pressure that international trade restrictions and geopolitical risks exert on Apple's product supply chain management.",
    tags_en: ["Apple", "Geopolitics", "Supply Chain", "China", "Memory Chips", "U.S. Export Controls"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/29/apple-may-struggle-to-get-clearance-for-chinese-ram-even-for-chinese-iphones", lang: "EN" }
    ]
  },
  {
    id: "20260629-094",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果因 AI 記憶體需求激增，宣布大幅調漲 Mac 與 iPad 等產品線價格",
    summary: "蘋果公司宣布其大部分產品線，包括 Mac 和 iPad，將進行前所未有的價格調漲。此次價格上漲的主要驅動因素是全球 AI 資料中心對記憶體供應的巨大需求，導致市場出現「記憶體危機」。文章指出，記憶體壓力問題已持續一整年，目前已達到難以持續的程度。雖然文章主要聚焦於市場經濟和產品定價，但其背後反映了 AI 發展對硬體資源（特別是記憶體）的極端拉升，這對所有電子產品的供應鏈和成本結構產生了重大影響。消費者應留意未來產品的定價趨勢，並關注記憶體供應鏈的改善時機。",
    tags: ["Apple", "AI", "記憶體危機", "Mac", "iPad", "供應鏈"],
    title_en: "Apple Announces Significant Price Increases for Mac and iPad Product Lines Due to Surging AI Memory Demand",
    summary_en: "Apple has announced unprecedented price increases across most of its product lines, including Mac and iPad. The primary driver for this price hike is the massive global demand for memory supply from AI data centers, which has created a 'memory crisis' in the market. The article points out that the memory pressure issue has persisted for an entire year and has reached an unsustainable level. Although the article primarily focuses on market economics and product pricing, it reflects the extreme pull of AI development on hardware resources (especially memory), which has significantly impacted the supply chain and cost structure of all electronic products. Consumers should pay attention to future product pricing trends and monitor the timing of improvements in the memory supply chain.",
    tags_en: ["Apple", "AI", "Memory Crisis", "Mac", "iPad", "Supply Chain"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/28/heres-why-your-ipad-and-mac-just-got-much-more-expensive", lang: "EN" }
    ]
  },
  {
    id: "20260629-095",
    trackers: ["os"],
    category: "重點關注",
    title: "美國最高法院裁定：政府使用「地理圍欄」搜查手機位置紀錄需具備搜查令，保護用戶隱私權",
    summary: "美國最高法院在一宗涉及警方使用「地理圍欄搜查令」（geofence warrants）追蹤嫌犯的案件中，裁定政府獲取用戶位置歷史紀錄（Location History）必須具備搜查令（warrant）並證明合理理由。法院認為，無論數據量多小，只要是透過手機位置追蹤服務取得，都構成《第四修正案》下的搜查行為。此判決挑戰了政府過去主張「數據過小不需保護」或「用戶自願分享即無隱私期待」的論點。判決指出，由於現代手機應用程式普遍需要用戶主動開啟位置追蹤服務，且科技公司在提示用戶時，往往未充分揭露數據記錄的頻率、精準度或可能被政府獲取的細節，因此用戶對其位置數據仍有合理的隱私期待。這對政府監控和科技公司數據使用規範產生重大影響，要求政府在進行位置數據搜查時，必須遵守更高的法律標準。",
    tags: ["美國最高法院", "第四修正案", "位置歷史紀錄", "地理圍欄", "隱私權", "政府監控"],
    title_en: "US Supreme Court Rules: Government Use of 'Geofencing' to Search Phone Location Records Requires a Warrant, Protecting User Privacy",
    summary_en: "In a case involving police using 'geofence warrants' to track suspects, the US Supreme Court ruled that government access to a user's Location History must be backed by a warrant and demonstrate reasonable cause. The court determined that any data obtained through mobile location tracking services constitutes a search under the Fourth Amendment, regardless of the data volume. This ruling challenges the government's previous arguments that 'data is too small to require protection' or that 'voluntary sharing negates privacy expectations.' The judgment pointed out that because modern mobile applications generally require users to actively enable location tracking services, and because tech companies often fail to fully disclose the frequency, accuracy, or specific details of data that might be obtained by the government, users maintain a reasonable expectation of privacy regarding their location data. This has significant implications for government surveillance and tech company data usage standards, requiring the government to adhere to higher legal standards when searching location data.",
    tags_en: ["US Supreme Court", "Fourth Amendment", "Location History", "Geofence", "Privacy", "Government Surveillance"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/06/supreme-court-ruling-guts-governments-use-of-geofence-warrants", lang: "EN" }
    ]
  },
  {
    id: "20260629-096",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "歐盟擬限制 Google 壟斷：安全專家警告，可能導致 Android 服務與用戶資料外洩風險",
    summary: "歐盟委員會正積極制定新規定，旨在限制 Google 在歐盟市場的壟斷地位。這些提案涉及兩大變革：一是要求 Google 讓出 Android 上的 AI 服務主導權，允許用戶整合其他 AI 模型並給予類似 Gemini 的系統級存取權；二是要求 Google 與競爭對手分享高度細節的匿名搜尋資料。Google 安全工程副總裁指出，若這些規定實施，短期內歐盟的詐騙行為可能會顯著增加。特別是關於 AI 服務的開放，可能讓惡意行為者利用新的系統存取權，安裝惡意 AI 服務，從而竊取用戶檔案、螢幕內容，甚至操縱用戶體驗。此外，分享的匿名搜尋資料包含搜尋內容、排名和點擊率等核心商業數據，其細節程度極高，對用戶隱私和商業機密構成重大風險。",
    tags: ["歐盟", "Google", "Gemini", "Android", "數據隱私", "AI 服務", "市場監管"],
    title_en: "EU Plans to Limit Google's Monopoly: Security Experts Warn of Potential Android Service and User Data Leakage Risks",
    summary_en: "The European Commission is actively developing new regulations aimed at curbing Google's dominant market position within the EU. These proposals involve two major changes: first, requiring Google to relinquish control of AI services on Android, allowing users to integrate other AI models and granting system-level access similar to Gemini; and second, mandating that Google share highly detailed anonymous search data with competitors. A Google VP of Security Engineering pointed out that if these regulations are implemented, fraudulent activities in the EU could significantly increase in the short term. Specifically, the opening up of AI services could allow malicious actors to exploit new system access rights to install malicious AI services, thereby stealing user files, screen content, or even manipulating user experiences. Furthermore, the shared anonymous search data includes core commercial data such as search queries, ranking, and click-through rates, making its level of detail extremely high and posing significant risks to user privacy and commercial secrets.",
    tags_en: ["EU", "Google", "Gemini", "Android", "Data Privacy", "AI Services", "Market Regulation"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/06/google-warns-eus-plans-to-weaken-its-monopoly-could-expose-user-data", lang: "EN" }
    ]
  },
  {
    id: "20260629-097",
    trackers: ["os"],
    category: "重點關注",
    title: "Comcast 宣布拆分媒體與寬頻業務，重塑美國傳播產業版圖",
    summary: "美國媒體集團 Comcast 宣布計劃將其媒體業務與行動及寬頻網路業務進行拆分。該拆分預計將透過無稅的剝離方式完成，涉及 NBCUniversal 和 Sky 等業務，並將股票分配給現有股東。此舉旨在應對傳統媒體產業面臨的挑戰，特別是觀眾注意力轉向社群媒體和串流平台。市場預期，此舉將使 Comcast 的股價上漲超過 20%。值得注意的是，此拆分發生在美國媒體產業正在經歷重大重組的背景下，例如 Paramount Skydance 預計將收購 Warner Bros Discovery。此類產業結構調整，顯示了傳統媒體巨頭正在積極尋求新的營運模式以應對市場變化。",
    tags: ["Comcast", "NBCUniversal", "Sky", "媒體產業", "寬頻網路", "產業重組", "拆分"],
    title_en: "Comcast Announces Split of Media and Broadband Operations, Reshaping the US Communications Landscape",
    summary_en: "Media conglomerate Comcast has announced plans to split its media operations from its mobile and broadband network business. The split is expected to be completed through a tax-free spin-off, involving businesses such as NBCUniversal and Sky, with shares to be distributed to existing shareholders. This move aims to address the challenges facing the traditional media industry, particularly the shift of audience attention toward social media and streaming platforms. The market anticipates that this action will cause Comcast's stock price to rise by over 20%. Notably, this split occurs against the backdrop of major restructuring in the US media industry, such as the anticipated acquisition of Warner Bros Discovery by Paramount Skydance. Such industry structural adjustments demonstrate that traditional media giants are actively seeking new operating models to adapt to market changes.",
    tags_en: ["Comcast", "NBCUniversal", "Sky", "Media Industry", "Broadband", "Industry Restructuring", "Spin-off"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/06/comcast-is-splitting-its-media-and-broadband-properties", lang: "EN" }
    ]
  },
  {
    id: "20260629-098",
    trackers: ["os"],
    category: "重點關注",
    title: "NASA X-59 飛機測試：探索超音速飛行技術，目標消除轟鳴聲的環境影響",
    summary: "本文介紹 NASA 的 X-59 Quesst 實驗性飛機，這款設計旨在取代傳統超音速飛行產生的巨大「音爆」（sonic boom）。X-59 具備「安靜超音速技術」（Quiet SuperSonic Technology）的目標，目標是將音爆聲減弱至類似汽車門關閉的輕微「砰」聲。該飛機已開始進行超音速測試飛行，未來計畫在美國各地進行巡迴測試，收集民眾對其低噪音「砰」聲的反應。此項技術的發展，正與美國國會推動的立法進程同步，旨在可能廢除 1973 年的超音速大陸飛行禁令。儘管技術上可能實現更安靜的超音速旅行，但文章指出，任何商業化復興仍需面對燃料消耗成本等經濟可行性挑戰。",
    tags: ["NASA", "X-59 Quesst", "超音速飛行", "音爆", "航空技術", "環境影響"],
    title_en: "NASA X-59 Aircraft Testing: Exploring Supersonic Flight Technology to Mitigate Sonic Boom Environmental Impact",
    summary_en: "This article introduces NASA's X-59 Quesst experimental aircraft, a design intended to replace the massive 'sonic boom' generated by traditional supersonic flight. The X-59 aims for 'Quiet SuperSonic Technology,' with the goal of reducing the sonic boom to a faint 'thump' similar to a closing car door. The aircraft has begun supersonic test flights and is planned for future touring tests across the United States to gather public feedback on its low-noise 'thump.' The development of this technology is running parallel with legislative efforts in the U.S. Congress, aiming potentially to repeal the 1973 supersonic continental flight ban. Although the technology may achieve quieter supersonic travel, the article notes that any commercial revival still faces economic feasibility challenges, such as fuel consumption costs.",
    tags_en: ["NASA", "X-59 Quesst", "Supersonic Flight", "Sonic Boom", "Aviation Technology", "Environmental Impact"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/06/nasas-x-59-frankenjet-tests-supersonic-flight-without-the-sonic-boom", lang: "EN" }
    ]
  },
  {
    id: "20260629-099",
    trackers: ["os"],
    category: "重點關注",
    title: "Kubernetes 專案發布 AI 政策，規範貢獻者使用 AI 工具的責任與規範",
    summary: "Kubernetes 專案為應對 AI 輔助編碼的趨勢，正式發布了 AI 政策。該政策旨在引導社群貢獻者，使其了解如何負責任地使用 AI 工具來協助程式碼生成。政策指出，雖然 AI 提升了程式碼生成的速度，但在維護程式碼庫方面，仍有許多改進空間。貢獻者必須在提交 PR 時，明確揭露是否使用了 AI 工具進行協助。然而，政策嚴格禁止將 AI 模型列為共同作者，或使用「輔助由」或「共同開發」等字眼來歸功於大型語言模型（LLM）工具。這項政策是為了確保專案的知識產權和貢獻者責任的明確性，是開源專案應對 AI 時代的治理機制。",
    tags: ["Kubernetes", "AI 政策", "開源專案", "LLM", "程式碼貢獻", "軟體治理"],
    title_en: "Kubernetes Project Releases AI Policy to Govern Contributors' Use of AI Tools",
    summary_en: "In response to the trend of AI-assisted coding, the Kubernetes project has officially released an AI Policy. This policy aims to guide community contributors on how to responsibly use AI tools to assist with code generation. The policy notes that while AI accelerates code generation, there is still significant room for improvement in maintaining the codebase. Contributors must explicitly disclose in their PRs whether they used AI tools for assistance. However, the policy strictly prohibits listing AI models as co-authors or using phrases like 'assisted by' or 'co-developed by' to attribute credit to Large Language Model (LLM) tools. This policy serves to ensure the clarity of the project's intellectual property and contributor accountability, representing a governance mechanism for open-source projects in the AI era.",
    tags_en: ["Kubernetes", "AI Policy", "Open Source Project", "LLM", "Code Contribution", "Software Governance"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1080144", lang: "EN" }
    ]
  },
  {
    id: "20260629-100",
    trackers: ["os"],
    category: "重點關注",
    title: "Wine 11.12 發布：強化 Wayland 支援，提供分數縮放與多顯示器優化",
    summary: "Wine 11.12 版本已發布，主要提升了在 Wayland 環境下的使用者介面（UI）體驗。此版本新增了 Wayland 分數縮放（fractional scaling）支援，讓使用者無需透過 X11/XWayland 即可在高解析度/高密度顯示器上獲得更流暢的縮放體驗，甚至支援每個顯示器設定不同的縮放比例。此外，Wine 11.12 也更新了多個核心元件，包括整合了 FFmpeg 的 libswresample 和 libswscale 函式庫，並將 Mono 引擎升級至 Mono 11.2。本版本修復了 27 個已知錯誤，涵蓋了 Corel 產品安裝程式、圖形問題、Microsoft Office 2007 等多種應用程式，甚至修復了 2009 年的 Slingplayer 錯誤。使用者可透過 WineHQ.org 下載此開發快照，為邁向 Wine 12.0 版本做好準備。",
    tags: ["Wine", "Wayland", "Wine 11.12", "Linux", "FFmpeg", "Mono"],
    title_en: "Wine 11.12 Released: Enhanced Wayland Support with Fractional Scaling and Multi-Display Optimization",
    summary_en: "Wine 11.12 has been released, primarily improving the user interface (UI) experience in Wayland environments. This version adds support for Wayland fractional scaling, allowing users to achieve a smoother scaling experience on high-resolution/high-density displays without relying on X11/XWayland, and even supports setting different scaling ratios for each display. Furthermore, Wine 11.2 has updated multiple core components, including integrating the libswresample and libswscale libraries from FFmpeg, and upgrading the Mono engine to Mono 11.2. This version fixes 27 known bugs, covering various applications such as Corel product installers, graphics issues, and Microsoft Office 2007, and even fixes a Slingplayer error from 2009. Users can download this development snapshot from WineHQ.org, preparing for the upcoming Wine 12.0 version.",
    tags_en: ["Wine", "Wayland", "Wine 11.12", "Linux", "FFmpeg", "Mono"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.12-Released", lang: "EN" }
    ]
  },
  {
    id: "20260629-101",
    trackers: ["os"],
    category: "重點關注",
    title: "Bcachefs 檔案系統規劃整合 Rust 語言至核心模組，預計在 v1.38.7 版本實施",
    summary: "Bcachefs 檔案系統計畫在 v1.38.7 版本中，首次將 Rust 程式語言整合至其核心（in-kernel）模組。目前 Bcachefs 已在使用者空間工具中使用 Rust，此次更新旨在提升核心層的開發能力。然而，由於 Bcachefs 是外掛式（out-of-tree）模組，整合 Rust 帶來了部署上的挑戰。開發者指出，使用動態核心模組系統（DKMS）來建構 Rust 模組並不實用，因為 Rust 缺乏穩定的 ABI，要求編譯時的 Rustc 版本必須與核心版本匹配。因此，Bcachefs 最終計畫將目標轉向更標準的發行版二進位包，而非依賴 DKMS 方式。這代表了外掛式 Rust 核心模組的普遍挑戰，為未來 Linux 核心開發者提供了重要的參考。",
    tags: ["Bcachefs", "Rust", "Linux 核心", "out-of-tree", "DKMS", "ABI"],
    title_en: "Bcachefs Filesystem Plans to Integrate Rust Language into Core Module, Expected in v1.38.7",
    summary_en: "The Bcachefs filesystem plans to integrate the Rust programming language into its core (in-kernel) module for the first time in version v1.38.7. Currently, Bcachefs uses Rust in user-space tools, and this update aims to enhance core-level development capabilities. However, because Bcachefs is an out-of-tree module, integrating Rust presents deployment challenges. Developers noted that using the Dynamic Kernel Module System (DKMS) to build the Rust module is impractical because Rust lacks a stable ABI, requiring the Rustc version used during compilation to match the kernel version. Therefore, Bcachefs ultimately plans to shift its focus toward a more standard distribution binary package, rather than relying on the DKMS method. This represents a common challenge for out-of-tree Rust core modules and provides important reference material for future Linux kernel developers.",
    tags_en: ["Bcachefs", "Rust", "Linux Kernel", "out-of-tree", "DKMS", "ABI"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Bcachefs-1.38.7-Rust-Kernel", lang: "EN" }
    ]
  },
  {
    id: "20260629-102",
    trackers: ["os"],
    category: "重點關注",
    title: "Git 2.55 版本發布：預設啟用 Rust 支援，並增強歷史紀錄修復功能",
    summary: "版本控制系統 Git 發布了最新穩定版 Git 2.55。本次更新的主要亮點包括：預設啟用 Rust 程式碼支援。過去 Git 的 Rust 支援需要開發者在編譯時手動選擇啟用，而從 Git 2.55 開始，除非明確使用 `NO_RUST` 選項否決，否則 Rust 支援將會預設開啟。這預示著未來 Git 3.0 或更高版本可能將使 Rust 支援成為強制性功能。此外，Git 2.55 也大幅優化了歷史紀錄修復（git history fixup）功能，允許開發者直接將已暫存的變更合併到更早的提交點，無需執行互動式 Rebase。同時，該版本也提升了增量式多包索引（incremental multi-pack indexes）的重打包效率，並包含多項底層優化。開發者應注意，`git history` 子指令目前仍被視為實驗性功能。",
    tags: ["Git", "Git 2.55", "Rust", "版本控制系統", "開發工具鏈", "歷史紀錄"],
    title_en: "Git 2.55 Released: Default Rust Support Enabled and History Fixup Functionality Enhanced",
    summary_en: "The version control system Git has released the latest stable version, Git 2.55. Key highlights of this update include: default enablement of Rust code support. Previously, Git's Rust support required developers to manually select it during compilation; however, starting with Git 2.55, Rust support will be enabled by default unless explicitly disabled using the `NO_RUST` option. This suggests that future versions, such as Git 3.0 or higher, may make Rust support a mandatory feature. Furthermore, Git 2.55 significantly optimizes the history fixup (git history fixup) functionality, allowing developers to merge staged changes directly into earlier commit points without needing to perform an interactive Rebase. Concurrently, the version also improves the repacking efficiency of incremental multi-pack indexes and includes various underlying optimizations. Developers should note that the `git history` subcommand is currently considered an experimental feature.",
    tags_en: ["Git", "Git 2.55", "Rust", "Version Control System", "Development Toolchain", "History"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Git-2.55-Released", lang: "EN" }
    ]
  },
  {
    id: "20260629-103",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟發布 WSL 容器預覽版 (WSLC)，強化 Windows 上的原生 Linux 容器體驗",
    summary: "微軟宣布推出 WSL 容器 (WSLC) 的公開預覽版，這是 Windows Subsystem for Linux (WSL) 在 Windows 11 上的最新延伸。WSLC 透過 wslc 命令列工具，為使用者提供在 WSL 環境中建構、執行和管理 Linux 容器的原生體驗。此預覽版具備完整的容器生命週期管理、多樣化的網路選項、GPU 支援，以及針對 C++ 和 C#/WinRT 的 SDK 整合等功能。WSLC 預覽版已包含在 WSL 2.9.3 版本中。此外，微軟還宣布了多項 WSL 改善，包括將 VirtIOFS 設為 WSL 容器的新預設檔案系統，預計可提供高達兩倍的性能提升，並同步改善了網路和記憶體回收機制，對於雲原生工作負載的測試與部署提供了便利。",
    tags: ["Microsoft", "WSL", "WSLC", "Linux 容器", "Windows 11", "VirtIOFS"],
    title_en: "Microsoft Releases WSL Container Preview (WSLC), Enhancing Native Linux Container Experience on Windows",
    summary_en: "Microsoft has announced the public preview of WSL Containers (WSLC), the latest extension of the Windows Subsystem for Linux (WSL) on Windows 11. WSLC provides users with a native experience for building, running, and managing Linux containers within the WSL environment using the wslc command-line tool. This preview includes full container lifecycle management, diverse networking options, GPU support, and SDK integration for C++ and C#/WinRT. The WSLC preview is included in the WSL 2.9.3 version. Furthermore, Microsoft announced several WSL improvements, including setting VirtIOFS as the new default file system for WSL containers, which is expected to provide up to double the performance boost, along with synchronized improvements to network and memory reclamation mechanisms, offering convenience for testing and deploying cloud-native workloads.",
    tags_en: ["Microsoft", "WSL", "WSLC", "Linux Containers", "Windows 11", "VirtIOFS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Microsoft-Preview-WSL-WSLC", lang: "EN" }
    ]
  },
  {
    id: "20260629-104",
    trackers: ["os"],
    category: "重點關注",
    title: "紅帽工程師分享 AArch64 Linux 桌面使用經驗：因效能與驅動問題，決定回歸 AMD Ryzen x86_64 系統",
    summary: "紅帽（Red Hat）資深工程師 Marcin Juszkiewicz 曾使用 Ampere Altra AArch64 Linux 桌面作為主要開發系統近一年時間。最初，他使用 Fedora 42 至 Fedora 44 運行該系統，但面臨多重技術挑戰。主要問題包括：Ampere Altra 系統需要每週修補自建核心（kernel build）以解決 PCI Express 控制器問題；即使擁有 80 個 Arm64 核心，其單執行緒效能仍顯不足；此外，在 Linux 7.0+ 版本上，AArch64 平台出現了 AMDGPU 核心驅動問題，導致影音播放和遊戲出現錯誤。即使更換至 NVIDIA GeForce RTX 搭配 Nouveau 驅動，也因 AArch64 缺乏完善的 NVIDIA Flatpak 儲存庫而遇到軟體兼容性問題。最終，工程師放棄了 AArch64 桌面實驗，回歸使用其原有的 AMD Ryzen x86_64 桌面。他指出，儘管核心數量大幅減少，但 x86_64 系統在日常開發、遊戲和應用程式運行上表現穩定且高效，並將 Ampere Altra 設備重新用於 RISC-V 交叉編譯任務。",
    tags: ["Red Hat", "AArch64", "Linux", "Ampere Altra", "AMD Ryzen", "x86_64", "Linux 核心"],
    title_en: "Red Hat Engineer Shares AArch64 Linux Desktop Experience: Returning to AMD Ryzen x86_64 System Due to Performance and Driver Issues",
    summary_en: "Senior Red Hat engineer Marcin Juszkiewicz spent nearly a year using the Ampere Altra AArch64 Linux desktop as his primary development system. Initially, he ran the system using Fedora 42 through Fedora 44, but encountered multiple technical challenges. Key issues included: the Ampere Altra system requiring weekly kernel builds to patch PCI Express controller issues; insufficient single-threaded performance despite having 80 Arm64 cores; and, furthermore, on Linux 7.0+ versions, the AArch64 platform exhibited AMDGPU core driver problems, causing errors in video playback and gaming. Even when switching to NVIDIA GeForce RTX with the Nouveau driver, software compatibility issues arose due to the lack of a comprehensive NVIDIA Flatpak repository for AArch64. Ultimately, the engineer abandoned the AArch64 desktop experiment and returned to his original AMD Ryzen x86_64 desktop. He noted that despite a significant reduction in core count, the x86_64 system performs stably and efficiently for daily development, gaming, and application execution, and he repurposed the Ampere Altra device for RISC-V cross-compilation tasks.",
    tags_en: ["Red Hat", "AArch64", "Linux", "Ampere Altra", "AMD Ryzen", "x86_64", "Linux kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Red-Hat-ARM-Engineer-Back-Ryzen", lang: "EN" }
    ]
  },
  {
    id: "20260629-105",
    trackers: ["os"],
    category: "重點關注",
    title: "ZLUDA v6 發布：新增 PhysX 支援於 AMD GPU，但專案失去商業資金支持",
    summary: "ZLUDA 是一個開源專案，最初旨在為 Intel 顯示卡提供 CUDA 支援，後來轉為在 AMD GPU 上提供 CUDA 的替代方案。最新發布的 ZLUDA v6 版本，除了包含一些機器學習支援的改進外，最大的亮點是成功將 PhysX 支援整合到 AMD GPU 上，讓舊遊戲能運行得更好。開發者 Andrzej Janik 報告，在 Mafia II 等遊戲的基準測試中，效果表現良好。此外，v6 版本也增加了紋理支援，並大幅提升了對 Microsoft Windows 系統的支援，除了原有的 Linux 平台外。然而，文章指出，該專案已失去先前來自未公開方的商業資金，未來將退回為開發者個人的「週末專案」性質。使用者可從 GitHub 下載 ZLUDA v6。",
    tags: ["ZLUDA", "AMD GPU", "PhysX", "CUDA", "開源專案", "Windows", "AI/ML"],
    title_en: "ZLUDA v6 Released: Adds PhysX Support for AMD GPU, But Project Loses Commercial Funding",
    summary_en: "ZLUDA is an open-source project originally designed to provide CUDA support for Intel graphics cards, and later transitioned to offering a CUDA alternative for AMD GPUs. The newly released ZLUDA v6 version, besides including improvements for machine learning support, highlights the successful integration of PhysX support onto AMD GPUs, allowing older games to run better. Developer Andrzej Janik reported that the performance was good in benchmarks using games like Mafia II. Furthermore, the v6 version added texture support and significantly enhanced support for the Microsoft Windows system, in addition to the existing Linux platform. However, the article notes that the project has lost the commercial funding it previously received from an undisclosed party, and will revert to the nature of a developer's personal 'weekend project' in the future. Users can download ZLUDA v6 from GitHub.",
    tags_en: ["ZLUDA", "AMD GPU", "PhysX", "CUDA", "Open-Source Project", "Windows", "AI/ML"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ZLUDA-6-Released", lang: "EN" }
    ]
  },
  {
    id: "20260629-106",
    trackers: ["os"],
    category: "重點關注",
    title: "開源反作弊系統 TLAC 登場：提供用戶層級替代方案，關注 Linux 與 Rust 技術應用",
    summary: "TLAC 是一個新興的開源反作弊系統，旨在為傳統的 Kernel-level（核心層級）反作弊工具（如 Denuvo、Easy Anti-Cheat、BattlEye）提供一個尊重隱私的替代方案。該工具目前是為 Linux 環境開發的，但尚未支援 Windows 平台，這限制了其在主流遊戲中的應用。TLAC 2.0 版本利用 Rust 語言開發，強調性能與安全性。其功能包括使用 ptrace 和 procfs 掃描程序記憶體、檢測作弊簽名，以及基於 HWID 的封禁機制。此外，它還包含一個核心完整性檢查模組，用於驗證系統完整性，同時避免干擾用戶數據。雖然這是一個有趣的開源嘗試，但其在遊戲產業的實際採用情況仍有待觀察。",
    tags: ["TLAC", "開源", "反作弊", "Linux", "Rust", "p-trace", "遊戲安全"],
    title_en: "Open-Source Anti-Cheat System TLAC Appears: Offering a User-Level Alternative, Focusing on Linux and Rust Technology Applications",
    summary_en: "TLAC is an emerging open-source anti-cheat system designed to provide a privacy-respecting alternative to traditional Kernel-level anti-cheat tools (such as Denuvo, Easy Anti-Cheat, and BattlEye). The tool is currently developed for the Linux environment but does not yet support the Windows platform, which limits its application in mainstream games. TLAC 2.0 utilizes the Rust language, emphasizing performance and security. Its functionalities include scanning process memory and detecting cheat signatures using ptrace and procfs, as well as implementing a HWID-based ban mechanism. Furthermore, it includes a core integrity checking module to verify system integrity while avoiding interference with user data. Although this is an interesting open-source attempt, its actual adoption within the gaming industry remains to be seen.",
    tags_en: ["TLAC", "Open Source", "Anti-Cheat", "Linux", "Rust", "p-trace", "Game Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/TLAC-Open-Source-Anti-Cheat", lang: "EN" }
    ]
  },
  {
    id: "20260629-107",
    trackers: ["os"],
    category: "重點關注",
    title: "Radeon RADV 驅動程式預設啟用 Vulkan Descriptor Heap，提升圖形 API 穩定性與性能",
    summary: "Radeon RADV Vulkan 驅動程式在預計於八月發布的 Mesa 26.2 穩定版中，已將 VK_EXT_descriptor_heap 的描述符堆（descriptor heap）支援設為預設啟用。先前在 Mesa 26.1 版本中，此功能需要手動設定 RADV_EXPERIMENTAL=heap 環境變數才能啟用。此項變更由 Valve 的 Linux 圖形團隊 Samuel Pitoiset 實施，旨在提升開發者體驗與穩定性。描述符堆允許開發者明確管理描述符和儲存描述符的記憶體，特別是 VK_EXT_descriptor_heap，它能解決 VK_EXT_descriptor_buffer 相關問題，提供更具可攜性與可預測的性能。此舉與 Intel 最近的動態同步，且 DXVK 3.0 版本也已預設使用描述符堆，顯示整個圖形 API 生態系統正朝向更標準化、更高效能的設計趨勢。",
    tags: ["Vulkan", "RADV", "Mesa", "Descriptor Heap", "VK_EXT_descriptor_heap", "圖形 API"],
    title_en: "Radeon RADV Driver Defaults to Enable Vulkan Descriptor Heap, Improving Graphics API Stability and Performance",
    summary_en: "In the Mesa 26.2 stable version, expected to be released in August, the Radeon RADV Vulkan driver has enabled support for the descriptor heap (VK_EXT_descriptor_heap) by default. Previously, this feature required manually setting the RADV_EXPERIMENTAL=heap environment variable in the Mesa 26.1 version. This change was implemented by Samuel Pitoiset, Valve's Linux graphics team, aiming to improve developer experience and stability. Descriptor heaps allow developers to explicitly manage the memory for descriptors and storage descriptors. Specifically, VK_EXT_descriptor_heap addresses issues related to VK_EXT_descriptor_buffer, offering more portable and predictable performance. This move aligns with Intel's recent dynamic synchronization and the fact that DXVK 3.0 also defaults to using descriptor heaps, indicating that the entire graphics API ecosystem is moving toward more standardized and higher-performance designs.",
    tags_en: ["Vulkan", "RADV", "Mesa", "Descriptor Heap", "VK_EXT_descriptor_heap", "Graphics API"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/RADV-Descriptor-Heap-Default", lang: "EN" }
    ]
  },
  {
    id: "20260629-108",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAPV 0.3 更新：新增 APV RAW 編解碼支援，強化專業級影片編碼能力",
    summary: "OpenAPV 是一個由 Academy Software Foundation 提供的開源專案，旨在提供 Advanced Professional Video (APV) 編解碼器的參考實作。APV 被視為 Apple ProRes 格式的領先開源替代方案，廣受 Samsung 和 DaVinci Resolve 等專業影音工作流程採用，用於高保真、高品質的影片內容處理。本次發布的 OpenAPV 0.3 版本，最大的亮點是新增了 APV RAW 的支援。該版本同時支援 APV RAW 的編碼和解碼功能，並加入了用於編碼 16 位元 4 通道線性像素值資料的壓縮與擴展演算法。此外，還引入了新的 Profile，以更明確地區分 APV 與 APV RAW 兩種格式。這項更新對於需要處理原始高位元深度（16-bit）線性像素資料的專業影音產業至關重要，有助於提升工作流程的靈活性與資料完整性。使用者可透過 Academy Software Foundation 在 GitHub 上獲取此 BSD 授權的軟體。",
    tags: ["OpenAPV", "APV", "APV RAW", "ProRes", "編解碼器", "影片編碼", "Academy Software Foundation"],
    title_en: "OpenAPV 0.3 Update: Adds APV RAW Encoding/Decoding Support, Enhancing Professional Video Encoding Capabilities",
    summary_en: "OpenAPV is an open-source project provided by the Academy Software Foundation, designed to offer a reference implementation for the Advanced Professional Video (APV) codec. APV is considered a leading open-source alternative to the Apple ProRes format, widely adopted in professional video workflows such as those used by Samsung and DaVinci Resolve, for high-fidelity, high-quality video content processing. The newly released OpenAPV 0.3 version's major highlight is the addition of APV RAW support. This version simultaneously supports both APV RAW encoding and decoding functionalities, and introduces compression and expansion algorithms for encoding 16-bit 4-channel linear pixel data. Furthermore, a new Profile has been introduced to more clearly distinguish between the APV and APV RAW formats. This update is crucial for the professional video industry that handles raw high bit-depth (16-bit) linear pixel data, helping to improve workflow flexibility and data integrity. Users can obtain this BSD-licensed software from the Academy Software Foundation on GitHub.",
    tags_en: ["OpenAPV", "APV", "APV RAW", "ProRes", "Codec", "Video Encoding", "Academy Software Foundation"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenAPV-0.3", lang: "EN" }
    ]
  },
  {
    id: "20260629-109",
    trackers: ["os"],
    category: "重點關注",
    title: "美國最高法院裁定：警方在搜查手機位置資料時，必須取得搜查令",
    summary: "本篇報導非技術性資安事件，而是法律判例分析。美國最高法院裁定，當警方欲搜查個人的手機位置資料時，必須取得法院核發的搜查令（warrant）。這確立了個人數位隱私權的法律門檻，對所有涉及數據監控和執法機關的數據處理流程產生重大影響。實務上，這要求執法單位在存取公民的行動數據時，必須遵循嚴格的法律程序，不能僅憑單純的合理懷疑或行政命令。這代表著個人數位隱私權在法律層面獲得了更強的保護，對科技公司和數據服務提供商也提出了更高的合規要求，必須建立更嚴謹的數據存取和審核機制。",
    tags: ["美國最高法院", "數位隱私權", "手機位置資料", "法律合規", "數據監控", "法律判例"],
    title_en: "US Supreme Court Rules: Police Must Obtain Search Warrant When Searching Phone Location Data",
    summary_en: "This report analyzes a legal precedent, not a technical cybersecurity incident. The US Supreme Court ruled that police must obtain a court-issued search warrant when searching an individual's mobile phone location data. This establishes a legal threshold for personal digital privacy, significantly impacting data processing procedures for all entities involved in data surveillance and law enforcement. Practically, this requires law enforcement agencies to follow strict legal procedures when accessing citizens' mobile data, and they cannot rely solely on mere reasonable suspicion or administrative orders. This represents stronger legal protection for personal digital privacy, imposing higher compliance requirements on technology companies and data service providers, who must establish more rigorous data access and auditing mechanisms.",
    tags_en: ["US Supreme Court", "Digital Privacy", "Mobile Location Data", "Legal Compliance", "Data Surveillance", "Legal Precedent"],
    sources: [
      { name: "The Register", url: "https://theregister.com/legal/2026/06/29/supreme-court-rules-cops-need-a-warrant-to-vacuum-up-phone-location-data/5263950", lang: "EN" }
    ]
  },
  {
    id: "20260629-110",
    trackers: ["os"],
    category: "重點關注",
    title: "無法生成標題，原文內容與資安主題無關",
    summary: "無法生成摘要，原文內容為科技新聞聚合頁面，未提及任何資安事件、漏洞或產品更新。",
    tags: ["無法生成", "科技新聞", "非資安"],
    title_en: "Unable to generate title, original content is unrelated to cybersecurity topics",
    summary_en: "Unable to generate summary, the original content is a technology news aggregation page and does not mention any cybersecurity incidents, vulnerabilities, or product updates.",
    tags_en: ["Unable to generate", "Technology News", "Non-cybersecurity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/science/2026/06/29/large-hadron-collider-goes-offline-to-make-room-for-its-enhanced-successor/5263927", lang: "EN" }
    ]
  },
  {
    id: "20260629-111",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 泡沫破裂恐衝擊全球經濟：BIS 報告警示金融市場風險",
    summary: "國際清算銀行（BIS）發布報告，警告當前的生成式人工智慧（AI）和機器學習（ML）產業泡沫可能破裂，對全球經濟構成重大風險。報告指出，過度樂觀的預期和投機行為推動了AI相關領域的估值，一旦泡沫破裂，可能導致金融市場劇烈震盪，影響全球經濟穩定。雖然文章未提供具體技術細節或受影響產品，但其實務影響層面強調了對AI產業過熱的警惕，建議相關機構和投資者應關注宏觀經濟風險，而非單純的技術進展。本報告提醒市場參與者，應保持謹慎態度，評估AI技術的實際應用價值與經濟體系的韌性。",
    tags: ["AI", "ML", "BIS", "經濟泡沫", "金融風險", "全球經濟"],
    title_en: "AI Bubble Burst Threatens Global Economy: BIS Report Warns of Financial Market Risks",
    summary_en: "The Bank for International Settlements (BIS) has released a report warning that the current generative Artificial Intelligence (AI) and Machine Learning (ML) industry bubble may burst, posing significant risks to the global economy. The report points out that overly optimistic expectations and speculative behavior have driven valuations in AI-related sectors. Should the bubble burst, it could lead to severe financial market volatility, impacting global economic stability. Although the article does not provide specific technical details or affected products, its practical implications emphasize caution regarding the overheating of the AI industry, advising relevant institutions and investors to focus on macroeconomic risks rather than mere technological advancements. This report reminds market participants to maintain a cautious attitude, assessing the actual application value of AI technology against the resilience of the economic system.",
    tags_en: ["AI", "ML", "BIS", "Economic Bubble", "Financial Risk", "Global Economy"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/29/how-the-ai-bubble-could-pop-and-take-down-the-global-economy-according-to-the-bis/5263793", lang: "EN" }
    ]
  },
  {
    id: "20260629-112",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟將協助歐盟委員會，強化歐美數據共享協議的防禦機制",
    summary: "本文報導微軟（Microsoft）將與歐盟委員會（European Commission）合作，協助強化歐盟與美國之間的數據共享協議。此舉旨在應對數據跨境傳輸和數據主權方面的挑戰，特別是在地緣政治和監管環境日益複雜的背景下。雖然文章未提供具體的技術漏洞或CVE資訊，但其核心議題圍繞在數據流動的合規性、安全性和主權保護。對於企業和開發者而言，這意味著必須更加關注數據的本地化儲存、加密傳輸，並確保數據處理流程符合歐盟的嚴格規範（如GDPR）。建議相關組織應重新審視其跨國數據傳輸的法律基礎和技術安全措施，以避免潛在的合規風險。",
    tags: ["Microsoft", "歐盟委員會", "數據主權", "數據共享協議", "GDPR", "跨平台趨勢"],
    title_en: "Microsoft to assist European Commission in strengthening data sharing agreements between EU and US",
    summary_en: "This article reports that Microsoft will collaborate with the European Commission to help strengthen data sharing agreements between the EU and the United States. This initiative aims to address challenges related to cross-border data transfer and data sovereignty, especially against the backdrop of increasingly complex geopolitical and regulatory environments. Although the article does not provide specific technical vulnerabilities or CVE information, its core issue revolves around the compliance, security, and sovereignty of data flow. For enterprises and developers, this means paying closer attention to localized data storage, encrypted transmission, and ensuring that data processing procedures comply with strict EU regulations (such as GDPR). It is recommended that relevant organizations re-examine the legal basis and technical security measures for their cross-border data transfers to avoid potential compliance risks.",
    tags_en: ["Microsoft", "European Commission", "Data Sovereignty", "Data Sharing Agreements", "GDPR", "Cross-Platform Trends"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/06/29/microsoft-to-assist-european-commission-in-defense-of-eu-us-data-sharing-agreement/5263737", lang: "EN" }
    ]
  },
  {
    id: "20260629-113",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Klue透過「過時憑證」攻擊Salesforce整合：數百家公司CRM資料外洩，提醒資安人員注意弱口密風險",
    summary: "本報導討論了由市場情報公司Klue發生的Salesforce供應鏈攻擊事件。攻擊者利用了與Salesforce整合的「過時憑證」（legacy credential），成功取得OAuth tokens，進而存取了數百家客戶的Salesforce資料。受影響的企業包括多家安全公司（如Huntress）和大型密碼管理服務商LastPass。外洩的資料主要為客戶關係管理（CRM）資料，包含業務聯絡人、報價、銷售相關資料，以及LastPass客戶的姓名、電話、電子郵件和實體地址等。雖然攻擊者聲稱未竊取財務資訊或密碼，但這類資料外洩仍可能導致企業失去業務線索和客戶聯絡資料。專家指出，此次事件凸顯了「過時憑證」和「不良密碼習慣」的巨大風險，其造成的傷害甚至超過了AI技術所能威脅的範圍，提醒企業必須及時清理和管理所有整合的舊有憑證。",
    tags: ["Klue", "Salesforce", "OAuth tokens", "過時憑證", "CRM資料", "供應鏈攻擊"],
    title_en: "Klue Exploits 'Legacy Credentials' in Salesforce Integration: CRM Data Leak from Hundreds of Companies, Warning Security Staff About Weak Password Risks",
    summary_en: "This report discusses a Salesforce supply chain attack incident reported by market intelligence firm Klue. The attackers utilized 'legacy credentials' integrated with Salesforce to successfully obtain OAuth tokens, subsequently accessing Salesforce data belonging to hundreds of clients. Affected companies include multiple security firms (such as Huntress) and the major password management service provider LastPass. The leaked data primarily consists of Customer Relationship Management (CRM) data, including business contacts, quotes, and sales-related information, as well as names, phone numbers, emails, and physical addresses for LastPass customers. Although the attackers claimed not to have stolen financial information or passwords, such data leakage can still cause businesses to lose business leads and client contact information. Experts point out that this incident highlights the significant risks posed by 'legacy credentials' and 'poor password hygiene,' the damage from which may even exceed the scope of threats posed by AI technology, reminding enterprises that they must promptly clean up and manage all integrated old credentials.",
    tags_en: ["Klue", "Salesforce", "OAuth tokens", "legacy credentials", "CRM data", "supply chain attack"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/29/ai-may-be-good-at-finding-security-vulnerabilities-but-it-cant-beat-human-stupidity/5263262", lang: "EN" }
    ]
  },
  {
    id: "20260629-114",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta利用自定義CXL ASIC重用舊伺服器記憶體，實現成本節省",
    summary: "本報導描述了Meta公司如何透過利用自定義的CXL (Compute Express Link) ASIC，重用舊伺服器的記憶體資源，從而大幅節省了營運成本。這項技術應用展示了大型科技公司在資料中心架構優化方面的實務能力。具體而言，透過CXL介面，Meta能夠將記憶體資源從舊設備轉移到新系統，而非必須購買全新的記憶體模組。這不僅降低了硬體採購成本，也提升了資源利用率。此類記憶體重用策略對於AI訓練和大型模型運算等資源密集型工作負載尤其關鍵，代表了未來資料中心運算架構朝向高效能、可擴展、資源循環的趨勢。對於資安與架構設計人員而言，這提醒了在設計系統時，應考慮介面層面的靈活性與資源的最大化利用。",
    tags: ["Meta", "CXL", "ASIC", "資料中心", "記憶體重用", "AI運算"],
    title_en: "Meta Utilizes Custom CXL ASIC to Reuse Old Server Memory, Achieving Cost Savings",
    summary_en: "This report describes how Meta company utilizes a custom Compute Express Link (CXL) ASIC to reuse memory resources from older servers, thereby significantly reducing operational costs. This technical application demonstrates the practical capabilities of large technology companies in optimizing data center architecture. Specifically, through the CXL interface, Meta can transfer memory resources from older equipment to new systems, rather than being required to purchase entirely new memory modules. This not only lowers hardware procurement costs but also enhances resource utilization. Such memory reuse strategies are particularly critical for resource-intensive workloads like AI training and large model computation, representing a trend toward highly efficient, scalable, and resource-circular data center computing architectures. For cybersecurity and architecture design personnel, this serves as a reminder to consider interface-level flexibility and maximum resource utilization when designing systems.",
    tags_en: ["Meta", "CXL", "ASIC", "Data Center", "Memory Reuse", "AI Computing"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/06/29/zuck-saves-meta-bucks-by-reusing-memory-from-old-servers-with-a-custom-cxl-asic/5263483", lang: "EN" }
    ]
  },
  {
    id: "20260629-115",
    trackers: ["os"],
    category: "重點關注",
    title: "研究人員濫用 LLM 角色扮演，成功誘騙大型語言模型生成違禁藥物食譜",
    summary: "資安研究人員發現，大型語言模型（LLMs）在處理角色扮演（role-playing）的提示注入（prompt injection）攻擊時，存在嚴重的安全漏洞。攻擊者透過設計特定的情境和角色，成功繞過模型內建的安全限制，使 LLM 輸出了關於製造違禁藥物（如可卡因）的詳細食譜。這類攻擊的實務影響極為嚴重，不僅可能導致模型被用於生成非法、有害或惡意的內容，也暴露了當前 LLM 在安全邊界控制和上下文理解上的不足。修補建議方面，開發者必須加強對提示注入的防禦機制，特別是在涉及敏感或高風險主題的內容生成時，應實施更嚴格的內容過濾和安全審核層。目前，這類漏洞的具體修補方案尚未公開，但強調了在 AI 應用層面必須建立多層次的安全防護。",
    tags: ["LLM", "提示注入", "Prompt Injection", "大型語言模型", "AI 安全", "角色扮演"],
    title_en: "Researchers Exploit LLM Role-Playing to Trick Large Language Model into Generating Illegal Drug Recipes",
    summary_en: "Cybersecurity researchers discovered that Large Language Models (LLMs) have significant security vulnerabilities when handling role-playing prompt injection attacks. By designing specific scenarios and roles, attackers successfully bypassed the model's built-in safety restrictions, causing the LLM to output detailed recipes for manufacturing illegal drugs (such as cocaine). The practical impact of such attacks is extremely severe, not only potentially allowing the model to be used for generating illegal, harmful, or malicious content, but also exposing deficiencies in current LLMs regarding safety boundary control and contextual understanding. Regarding remediation, developers must strengthen defenses against prompt injection, and stricter content filtering and safety review layers should be implemented, especially when generating content related to sensitive or high-risk topics. While specific patches for these vulnerabilities have not yet been disclosed, this highlights the necessity of establishing multi-layered security defenses at the AI application layer.",
    tags_en: ["LLM", "提示注入", "Prompt Injection", "Large Language Model", "AI Security", "Role-Playing"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/30/security-researchers-tricked-llms-into-giving-them-cocaine-recipes-by-abusing-role-models-for-prompt-injection/5264115", lang: "EN" }
    ]
  },
  {
    id: "20260629-116",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無資安新聞內容：文章為地緣政治分析，無技術漏洞或產品更新資訊",
    summary: "原文內容為一篇關於俄羅斯在烏克蘭戰爭四年後的地緣政治分析，討論俄羅斯如何將影響力作戰（influence ops）轉向美國和歐洲。文章未提及任何資安產品、技術漏洞、CVE 編號或修補建議。因此，無法根據資安新聞編輯的標準格式撰寫摘要。",
    tags: ["地緣政治", "俄羅斯", "烏克蘭", "影響力作戰", "資訊戰"],
    title_en: "Non-Cybersecurity Content: Article is Geopolitical Analysis, No Technical Vulnerability or Product Update Information",
    summary_en: "The original content is a geopolitical analysis regarding Russia four years after the war in Ukraine, discussing how Russia is shifting its influence operations toward the US and Europe. The article does not mention any cybersecurity products, technical vulnerabilities, CVE numbers, or patch recommendations. Therefore, a summary cannot be written according to standard cybersecurity news editorial format.",
    tags_en: ["Geopolitics", "Russia", "Ukraine", "Influence Ops", "Information Warfare"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/29/four-years-into-ukraine-invasion-russia-turns-influence-ops-back-to-us-and-europe/5264011", lang: "EN" }
    ]
  },
  {
    id: "20260629-117",
    trackers: ["security"],
    category: "uncategorized",
    title: "匿名研究者釋出 Exploitarium 零日漏洞庫，資安社群警惕利用風險",
    summary: "本文報導了一名匿名研究者釋出一個名為 Exploitarium 的零日漏洞資料庫。該資料庫包含大量可供攻擊者利用的漏洞利用程式碼，性質上極具威脅性。雖然原文未提供具體的受影響產品、CVE 編號或CVSS分數，但其存在本身對資安界構成重大警示。這類公開的漏洞庫極易被惡意行為者掌握，可能導致攻擊面急劇擴大，並增加攻擊的成功率。資安專業人員和企業應提高警覺，密切關注此類漏洞的後續分析和修補公告。建議組織應強化資產盤點，並實施縱深防禦策略，特別是針對已知漏洞的修補與監控。",
    tags: ["Exploitarium", "零日漏洞", "漏洞利用", "資安威脅", "攻擊面擴大"],
    title_en: "Anonymous Researcher Releases Exploitarium Zero-Day Vulnerability Database, Cybersecurity Community Warned of Exploitation Risks",
    summary_en: "This article reports that an anonymous researcher has released a zero-day vulnerability database named Exploitarium. This database contains a large amount of exploit code available for attackers, making it inherently highly threatening. Although the original text does not provide specific affected products, CVE IDs, or CVSS scores, its mere existence constitutes a major warning to the cybersecurity community. Such public vulnerability repositories are easily acquired by malicious actors, potentially leading to a rapid expansion of the attack surface and increasing the success rate of attacks. Cybersecurity professionals and enterprises should heighten their vigilance and closely monitor subsequent analysis and patch announcements regarding these vulnerabilities. Organizations are advised to strengthen asset inventory and implement a defense-in-depth strategy, especially concerning patching and monitoring for known vulnerabilities.",
    tags_en: ["Exploitarium", "Zero-Day Vulnerability", "Exploitation", "Cybersecurity Threat", "Attack Surface Expansion"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/29/anonymous-researcher-drops-0-day-exploitarium-repo/5263961", lang: "EN" }
    ]
  }
];
