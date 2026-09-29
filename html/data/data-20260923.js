// data-20260923.js — 2026-09-23
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-23"] = [
  {
    id: "20260923-13046",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客組織 ShinyHunters 聲稱竊取美國 FBI 數 TB 探員資料，並要求撤回警告",
    summary: "駭客組織 ShinyHunters 在暗網上聲稱成功駭入美國聯邦調查局（FBI）的網站，竊取了大量探員及應徵者的個人資訊，資料量高達數 TB。據報導，駭客甚至置換了 FBI 的招聘入口網站網頁，並顯示為「維修中」狀態。ShinyHunters 聲稱其攻擊動機並非為了金錢，而是針對 FBI 今年五月發布的一份公開警告。該警告指控 ShinyHunters 攻擊線上學習管理系統，竊取隱私資訊並進行釣魚勒索。駭客要求 FBI 撤下此「不實指控」。若談判失敗，ShinyHunters 過去的行為是將竊取資料公開，可能嚴重影響美國及國際刑事案件的偵辦。此外，文章也提及英國警察國家法律資料庫（PNLD）曾遭駭，駭客組織 ExfilSquad 聲稱竊取了該資料庫達 13.5 萬筆紀錄，包含警務人員及政府合作夥伴的姓名、組織和電子郵件地址。",
    tags: ["ShinyHunters", "FBI", "ExfilSquad", "資料外洩", "聯邦調查局", "PNLD"],
    title_en: "Hacker Group ShinyHunters Claims Theft of Several TB of FBI Agent Data, Demands Warning Withdrawal",
    summary_en: "The hacker group ShinyHunters claimed on the dark web to have successfully breached the Federal Bureau of Investigation's (FBI) website, stealing a massive amount of personal information belonging to agents and applicants, totaling several terabytes of data. Reports indicate that the hackers even replaced the FBI's recruitment portal webpage, displaying a \"under maintenance\" status. ShinyHunters stated that their motive for the attack was not financial, but rather targeted a public warning issued by the FBI in May of this year. This warning accused ShinyHunters of attacking an online learning management system, stealing private information, and conducting phishing and extortion. The hackers are demanding that the FBI retract this \"false accusation.\" If negotiations fail, ShinyHunters' past behavior has been to publicly release stolen data, which could severely impact the investigation of US and international criminal cases. Additionally, the article mentions that the UK Police National Law Database (PNLD) was previously compromised, with the hacker group ExfilSquad claiming to have stolen 135,000 records from the database, including names, organizations, and email addresses of law enforcement personnel and government partners.",
    tags_en: ["ShinyHunters", "FBI", "ExfilSquad", "Data Leak", "Federal Bureau of Investigation", "PNLD"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179164", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13205",
    trackers: ["os"],
    category: "Linux",
    title: "Nouveau 開源驅動程式修補，為 NVIDIA 支援 HDMI 深色（Deep Color）顯示功能",
    summary: "Nouveau 是用於開源支援 NVIDIA 顯示卡的 Linux 核心圖形驅動程式。近期有新的修補程式提交，旨在為 Nouveau 啟用 HDMI Deep Color 支援。此功能允許支援更高位元的色彩深度，包括每色通道 10 位元、12 位元或 16 位元。這些修補程式目前作為主要的開源 NVIDIA Linux 驅動程式，在 Nova 驅動程式準備就緒之前提供支援。目前提交的 Deep Color 修補程式僅支援 RGB 模式，尚未支援 YCbCr 模式，且 16 位元每通道的支援也尚未在具備能力的顯示器上進行測試。對於對此功能感興趣的用戶，相關的 HDMI Deep Color 修補程式已在 dri-devel 郵件清單上發布。",
    tags: ["Nouveau", "NVIDIA", "Linux 核心", "HDMI Deep Color", "dri-devel"],
    title_en: "Nouveau Open-Source Driver Patch Enables HDMI Deep Color Support for NVIDIA",
    summary_en: "Nouveau is the open-source Linux kernel graphics driver for NVIDIA cards. Recently, a new patch was submitted to enable HDMI Deep Color support for Nouveau. This feature allows support for higher color bit depths, including 10-bit, 12-bit, or 16-bit per color channel. These patches currently provide support as the primary open-source NVIDIA Linux driver until the Nova driver is ready. The submitted Deep Color patch currently only supports RGB mode and does not yet support YCbCr mode, nor has 16-bit per channel support been tested on capable displays. For users interested in this feature, the relevant HDMI Deep Color patch has been released on the dri-devel mailing list.",
    tags_en: ["Nouveau", "NVIDIA", "Linux Kernel", "HDMI Deep Color", "dri-devel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Nouveau-Deep-Color-Patches", lang: "EN" }
    ]
  },
  {
    id: "20260923-13655",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6511-1 相關漏洞，強化系統安全性",
    summary: "本安全公告（DSA-6511-1）針對 Debian 系統發布，旨在修補一個潛在的系統漏洞。雖然原文未提供詳細的技術細節或 CVSS 分數，但其發布於 Debian 安全公告列表，表明這是一個需要系統管理員關注的系統層級安全問題。修補建議是立即更新系統，以確保所有用戶能夠修補相關的元件，避免被惡意利用。由於此公告僅提供一個安全追蹤連結，建議用戶應透過官方的 Debian 安全公告機制，獲取完整的漏洞描述、受影響版本範圍以及詳細的修補步驟，並及時執行系統升級。修補此類核心系統漏洞對於維護系統的穩健性和安全性至關重要。",
    tags: ["Debian", "DSA-6511-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6511-1 Vulnerability to Enhance System Security",
    summary_en: "This security advisory (DSA-6511-1) is issued for Debian systems and aims to patch a potential system vulnerability. Although the original text does not provide detailed technical specifications or CVSS scores, its inclusion in the Debian security advisory list indicates a system-level security issue that system administrators must address. The recommended patch is to immediately update the system to ensure all users can patch the affected components and prevent malicious exploitation. Since this advisory only provides a security tracking link, users are advised to obtain the complete vulnerability description, affected version range, and detailed patching steps through the official Debian security advisory mechanism, and to perform the system upgrade promptly. Patching such core system vulnerabilities is crucial for maintaining system robustness and security.",
    tags_en: ["Debian", "DSA-6511-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00423.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13656",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6510-1 相關漏洞，強化系統安全性",
    summary: "Debian 發布了安全公告，修補了一個與 DSA-6510-1 相關的漏洞。此漏洞的修補旨在提升系統的整體安全性，特別是針對核心元件的潛在風險。雖然原文未提供詳細的技術細節或 CVSS 分數，但這類安全更新通常涉及核心系統的穩定性與安全性強化。建議所有使用 Debian 系統的用戶，應立即透過官方的系統更新機制（如 apt update/upgrade）進行修補，以確保系統能夠抵禦已知的安全威脅。用戶應留意 Debian 官方安全公告（DSA）的發布，並及時執行系統升級，這是維護系統安全性的最佳實務。",
    tags: ["Debian", "DSA-6510-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6510-1 Vulnerability to Enhance System Security",
    summary_en: "Debian has issued a security advisory to patch a vulnerability related to DSA-6510-1. This patch aims to enhance the overall system security, particularly addressing potential risks within core components. Although the original text does not provide detailed technical specifications or a CVSS score, such security updates typically involve strengthening the stability and security of the core system. All users running Debian systems are advised to immediately apply the patch through the official system update mechanism (such as apt update/upgrade) to ensure the system can defend against known security threats. Users should monitor Debian's official Security Advisory (DSA) releases and perform timely system upgrades, which is best practice for maintaining system security.",
    tags_en: ["Debian", "DSA-6510-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00422.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13049",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "OpenSSF發布CRA準備指南：協助開源社群釐清不同角色在歐盟網路韌性法案下的責任",
    summary: "隨著歐盟《網路韌性法案》（CRA）逐步落地，開源社群對於自身應承擔的責任感到困惑。開源安全基金會（OpenSSF）於9月15日發布「Grow CRA Readiness」準備指南，旨在協助開源社群根據自身角色判斷義務。指南將開源參與者分為三類：開源維護者／貢獻者、開源軟體管理者（Open Source Software Steward）以及含數位元素產品的製造商。OpenSSF強調，非商業維護者通常不承擔製造商的責任。對於開源軟體管理者，指南提供了持續支援特定開源軟體開發與維運的指引；而對於製造商，因其責任最廣，相關路徑涵蓋了產品、工程、資安及法遵團隊，以尋找應對CRA要求的資源。OpenSSF整合了OSPS Baseline、SLSA、Sigstore等開源安全與軟體供應鏈工具，建議組織無需一次解決所有問題，應先確認自身角色，建立準備計畫，再逐步尋求相應的指引與工具。",
    tags: ["OpenSSF", "CRA", "歐盟網路韌性法案", "開源安全", "軟體供應鏈", "OSPS Baseline"],
    title_en: "OpenSSF Releases CRA Readiness Guide: Helping Open Source Community Clarify Roles and Responsibilities under EU Cyber Resilience Act",
    summary_en: "As the EU Cyber Resilience Act (CRA) gradually comes into effect, the open-source community is confused about the responsibilities they must bear. The Open Source Security Foundation (OpenSSF) released the \"Grow CRA Readiness\" guide on September 15th, aiming to help the open-source community determine their obligations based on their specific roles. The guide categorizes open-source participants into three groups: open-source maintainers/contributors, Open Source Software Stewards, and manufacturers of products containing digital elements. OpenSSF emphasizes that non-commercial maintainers typically do not bear the responsibilities of manufacturers. For Open Source Software Stewards, the guide provides guidelines for continuously supporting the development and operation of specific open-source software; while for manufacturers, whose responsibilities are the broadest, the relevant pathways cover product, engineering, security, and legal compliance teams, helping them identify resources to meet CRA requirements. OpenSSF integrates open-source security and software supply chain tools such as OSPS Baseline, SLSA, and Sigstore, advising organizations that they do not need to solve all problems at once. Instead, they should first confirm their role, establish a readiness plan, and then gradually seek corresponding guidance and tools.",
    tags_en: ["OpenSSF", "CRA", "EU Cyber Resilience Act", "Open Source Security", "Software Supply Chain", "OSPS Baseline"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179158", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13239",
    trackers: ["os"],
    category: "Windows",
    title: "微軟發布 Windows Developer Config：一鍵自動化開發者工作站環境建置",
    summary: "微軟推出 Windows Developer Config，這是一個開源專案，旨在透過單一 PowerShell 指令，將全新的 Windows 11 安裝快速配置成一套完整的開發者工作站環境。傳統上，開發者需要耗費大量時間手動安裝和配置各種工具，包括 PowerShell 7、Git、VS Code、WSL 等。Windows Developer Config 透過 11 個階段和 50 個步驟，自動化了這個流程，並具備冪等性（idempotent），確保重複執行時不會造成重複工作。該工具安裝了包括 Windows Terminal、PowerShell 7、Git、GitHub CLI、VS Code、.NET SDK 10、Python 3.14、PowerToys 等 15 個核心開發套件，並啟用多項系統設定，例如 Developer Mode、Win32 長路徑支援、Windows Sudo 內聯模式和遠端桌面連接。這極大地簡化了新機配置的複雜性，讓使用者能快速進入開發狀態。使用者只需在 PowerShell 中執行指定的 PowerShell one-liner 即可啟動配置，建議預留至少 15GB 的可用空間。",
    tags: ["Windows 11", "Developer Config", "PowerShell", "VS Code", "WSL", "開發者環境"],
    title_en: "Microsoft Releases Windows Developer Config: Automating Developer Workstation Setup with a Single Click",
    summary_en: "Microsoft has launched Windows Developer Config, an open-source project designed to quickly configure a fresh Windows 11 installation into a complete developer workstation environment using a single PowerShell command. Traditionally, developers spent significant time manually installing and configuring various tools, including PowerShell 7, Git, VS Code, and WSL. Windows Developer Config automates this process through 11 stages and 50 steps, and it is idempotent, ensuring that repeated execution does not cause redundant work. The tool installs 15 core development packages, including Windows Terminal, PowerShell 7, Git, GitHub CLI, VS Code, .NET SDK 10, Python 3.14, and PowerToys, while also enabling multiple system settings such as Developer Mode, Win32 long path support, Windows Sudo inline mode, and remote desktop connection. This greatly simplifies the complexity of new machine setup, allowing users to quickly enter a development state. Users only need to run the specified PowerShell one-liner in PowerShell to start the configuration, and it is recommended to reserve at least 15GB of available space.",
    tags_en: ["Windows 11", "Developer Config", "PowerShell", "VS Code", "WSL", "Developer Environment"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/23/i-tested-microsofts-secret-tool-that-debloats-windows-11-and-makes-you-a-power-user", lang: "EN" }
    ]
  },
  {
    id: "20260923-13047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "IBM修補MQ重大漏洞：CVE-2026-10747與CVE-2026-10858，影響MQ Appliance及HPE NonStop版本",
    summary: "IBM於9月10日與17日發布資安公告，修補了兩個影響其IBM MQ中介軟體的重大漏洞。受影響的產品包括IBM MQ Appliance 9.4及10.0部分版本，以及IBM MQ for HPE NonStop的8.1.0到8.1.0.40等版本。第一個漏洞CVE-2026-10747為MQ Appliance在處理通訊協定訊息時的堆積緩衝區溢位（Stack Buffer Overflow），CVSS評分達10.0分。此漏洞允許未經身分驗證的攻擊者造成服務阻斷或執行任意程式碼。第二個漏洞CVE-2026-10858源自HPE NonStop版MQ處理多區段訊息時的堆積緩衝區下溢（Heap Buffer Underflow），CVSS評分達9.9分。此漏洞需攻擊者已通過身分驗證，但仍可能導致服務阻斷或執行任意程式碼。為修補這些漏洞，建議MQ Appliance升級至9.4.0.26、9.4.5.3或10.0.0.5以上版本，MQ for HPE NonStop則應升級至8.1.0.41版。用戶應立即執行更新以防範攻擊。",
    tags: ["IBM", "IBM MQ", "CVE-2026-10747", "CVE-2026-10858", "堆積緩衝區溢位", "MQ Appliance"],
    title_en: "IBM Patches Critical MQ Vulnerabilities: CVE-2026-10747 and CVE-2026-10858 Affect MQ Appliance and HPE NonStop Versions",
    summary_en: "On September 10 and 17, IBM issued security advisories patching two critical vulnerabilities affecting its IBM MQ middleware. Affected products include certain versions of IBM MQ Appliance 9.4 and 10.0, as well as versions 8.1.0 through 8.1.0.40 of IBM MQ for HPE NonStop. The first vulnerability, CVE-2026-10747, is a Stack Buffer Overflow in MQ Appliance when processing communication protocol messages, achieving a CVSS score of 10.0. This vulnerability allows an unauthenticated attacker to cause a denial of service or execute arbitrary code. The second vulnerability, CVE-2026-10858, stems from a Heap Buffer Underflow in MQ when processing multi-segment messages on HPE NonStop, achieving a CVSS score of 9.9. This vulnerability requires the attacker to be authenticated but could still lead to a denial of service or execution of arbitrary code. To patch these vulnerabilities, users are advised to upgrade MQ Appliance to version 9.4.0.26, 9.4.5.3, or 10.0.0.5 or later, and MQ for HPE NonStop to version 8.1.0.41. Users should apply the update immediately to prevent attacks.",
    tags_en: ["IBM", "IBM MQ", "CVE-2026-10747", "CVE-2026-10858", "Stack Buffer Overflow", "MQ Appliance"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179163", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "MongoDB修補14個資安漏洞：包含Mongoid資料讀寫與C Driver堆積緩衝區溢位風險",
    summary: "資料庫軟體業者MongoDB於9月18日及19日陸續修補並揭露了14個資安漏洞。其中兩個漏洞尤其嚴重，且CVSS v4.0評分皆為9.2分。第一個漏洞CVE-2026-93762存在於Mongoid處理內嵌文件的查詢路徑，由於未妥善處理外部提供的欄位名稱，未經身分驗證的攻擊者可能利用此漏洞讀取或刪除非預期的資料。第二個漏洞CVE-2026-93393是Windows版C Driver在TLS傳輸層的堆積緩衝區溢位漏洞，遠端攻擊者在TLS交握完成後可觸發記憶體破壞、讀取鄰近堆積資料，或導致程式崩潰。使用者應根據所使用的元件，將Mongoid升級至7.6.2、8.0.13、8.1.13、9.0.12或9.1.1以上版本，Windows平臺C Driver則應升級至1.30.11或2.5.4以上版本，以確保系統安全。",
    tags: ["MongoDB", "CVE-2026-93762", "CVE-2026-93393", "Mongoid", "C Driver", "堆積緩衝區溢位"],
    title_en: "MongoDB Patches 14 Security Vulnerabilities: Including Mongoid Data Read/Write and C Driver Stack Buffer Overflow Risks",
    summary_en: "Database software vendor MongoDB patched and disclosed 14 security vulnerabilities on September 18 and 19. Two of these vulnerabilities are particularly severe, both scoring 9.2 on CVSS v4.0. The first vulnerability, CVE-2026-93762, resides in the Mongoid query path for handling embedded documents. Due to improper handling of externally provided field names, an unauthenticated attacker could exploit this vulnerability to read or delete unexpected data. The second vulnerability, CVE-2026-93393, is a stack buffer overflow vulnerability in the Windows C Driver's TLS layer. A remote attacker, after the TLS handshake is complete, can trigger memory corruption, read adjacent stack data, or cause the program to crash. Users should upgrade Mongoid to version 7.6.2, 8.0.13, 8.1.13, 9.0.12, or 9.1.1 or higher, depending on the component used. For the Windows platform C Driver, users should upgrade to version 1.30.11 or 2.5.4 or higher, to ensure system security.",
    tags_en: ["MongoDB", "CVE-2026-93762", "CVE-2026-93393", "Mongoid", "C Driver", "Stack Buffer Overflow"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179159", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13050",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA警告西門子SIPLUS/SIMATIC系列產品面臨Copy Fail漏洞，建議升級修補Linux核心漏洞CVE-2026-31431",
    summary: "美國網路安全與基礎設施安全局（CISA）於9月22日發布公告，警告西門子（Siemens）的SIPLUS與SIMATIC系列部分工業控制系統（ICS）產品，可能受到Copy Fail漏洞的影響。該漏洞源於Linux核心，編號為CVE-2026-31431，CVSS嚴重性評分為7.8分。此漏洞可能允許本機攻擊者取得root權限。由於西門子SIPLUS與SIMATIC系列部分產品使用了含有受影響Linux Kernel元件的軟體，因此這些產品也面臨此安全風險。西門子已於9月8日發布公告，並提供了修補版本，建議所有用戶應立即升級至修補版本以消除此漏洞的威脅。",
    tags: ["CISA", "西門子", "Siemens", "SIPLUS", "SIMATIC", "CVE-2026-31431", "工業控制系統"],
    title_en: "CISA Warns Siemens SIPLUS/SIMATIC Series Products of Copy Fail Vulnerability, Recommends Patching Linux Kernel Flaw CVE-2026-31431",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) issued an announcement on September 22, warning that certain Industrial Control System (ICS) products from Siemens' SIPLUS and SIMATIC series may be affected by a Copy Fail vulnerability. This vulnerability originates in the Linux kernel, designated as CVE-2026-31431, with a CVSS severity score of 7.8. This flaw could potentially allow a local attacker to gain root privileges. Because certain Siemens SIPLUS and SIMATIC series products utilize software containing the affected Linux Kernel component, these products are also exposed to this security risk. Siemens issued an announcement on September 8, providing a patched version, and recommends that all users immediately upgrade to the patched version to eliminate the threat posed by this vulnerability.",
    tags_en: ["CISA", "Siemens", "SIPLUS", "SIMATIC", "CVE-2026-31431", "Industrial Control System"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179156", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13051",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 154 大幅修補 108 個資安漏洞，包含多個重大與高風險記憶體安全問題",
    summary: "Google 發布 Chrome 瀏覽器大版本 154，共修補了 108 個資安漏洞，其中包含 11 個重大等級和 25 個高風險等級的漏洞。這些修補旨在提升瀏覽器的整體安全性。從漏洞類型來看，最主要的漏洞類型為「記憶體釋放後再存取使用」（Use After Free）問題，共發現 23 個；此外，還有 12 個授權不正確與 11 個缺乏授權相關問題，以及 12 個介面歪曲（UI misrepresentation）問題。用戶應根據作業系統進行更新：Windows 與 macOS 版本建議更新至 154.0.8037.57 或 154.0.8037.58；Linux 與 Android 版本則應更新至 154.0.8037.57。建議所有用戶及時更新至最新版本，以修補這些潛在的記憶體和權限相關的資安風險。",
    tags: ["Google", "Chrome", "CVE", "Use After Free", "資安漏洞", "瀏覽器安全"],
    title_en: "Google Chrome 154 Major Patch Fixes 108 Security Vulnerabilities, Including Multiple Critical and High-Risk Memory Safety Issues",
    summary_en: "Google has released Chrome browser version 154, which patches a total of 108 security vulnerabilities, including 11 critical and 25 high-risk vulnerabilities. These patches aim to enhance the overall security of the browser. Regarding vulnerability types, the most prevalent type is 'Use After Free' issues, with 23 instances found; additionally, there are 12 incorrect authorization and 11 lack-of-authorization related issues, as well as 12 UI misrepresentation issues. Users should update based on their operating system: Windows and macOS versions are recommended to update to 154.0.8037.57 or 154.0.8037.58; Linux and Android versions should update to 154.0.8037.57. All users are advised to update promptly to the latest version to mitigate these potential memory and permission-related security risks.",
    tags_en: ["Google", "Chrome", "CVE", "Use After Free", "Security Vulnerability", "Browser Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179155", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Wordfence揭露The Events Calendar兩大RCE漏洞：未登入訪客可遠端接管網站",
    summary: "資安業者Wordfence揭露WordPress熱門外掛The Events Calendar存在兩項嚴重遠端程式碼執行（RCE）漏洞，分別為CVE-2026-78006與CVE-2026-78159。這兩漏洞的風險評分均達9.8分，極度危險。攻擊者僅需在活動頁開啟留言功能，無需登入帳號或等待管理員核准，即可利用特製留言觸發漏洞，在伺服器執行任意命令或接管網站。CVE-2026-78006利用PHP資料還原過程的缺陷，讓外掛誤判內容安全；而CVE-2026-78159則利用資料檢查缺陷，讓程式呼叫帳號更新功能，進而重設管理員密碼，進一步達成遠端程式碼執行。研究人員建議所有使用者應立即升級至6.17.4.1或更高版本，以修補這些漏洞。",
    tags: ["WordPress", "The Events Calendar", "CVE-2026-78006", "CVE-2026-78159", "RCE", "外掛漏洞"],
    title_en: "Wordfence Discloses Two Critical RCE Vulnerabilities in The Events Calendar: Unauthenticated Visitors Can Take Over Websites",
    summary_en: "Security firm Wordfence has disclosed two severe Remote Code Execution (RCE) vulnerabilities in the popular WordPress plugin, The Events Calendar: CVE-2026-78006 and CVE-2026-78159. Both vulnerabilities carry a risk score of 9.8, making them extremely dangerous. Attackers only need to enable the comment function on an event page. Without needing to log in or wait for administrator approval, they can exploit a specially crafted comment to execute arbitrary commands or take over the website on the server. CVE-2026-78006 exploits a flaw in the PHP data sanitization process, causing the plugin to misjudge content safety; while CVE-2026-78159 utilizes a data validation flaw that triggers the account update function, thereby resetting the administrator's password and achieving RCE. Researchers recommend that all users immediately upgrade to version 6.17.4.1 or higher to patch these vulnerabilities.",
    tags_en: ["WordPress", "The Events Calendar", "CVE-2026-78006", "CVE-2026-78159", "RCE", "Plugin Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179153", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13053",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Arista SD-WAN平臺VeloCloud Orchestrator (VCO) 遭重大漏洞CVE-2026-93952，CISA警告已遭利用",
    summary: "資安廠商Arista於9月22日發布公告，揭露SD-WAN集中管理平臺VeloCloud Orchestrator (VCO) 存在重大漏洞CVE-2026-93952。此漏洞可讓遠端攻擊者存取VCO的內部特權功能，危及VCO及其資料的機密性、完整性與可用性。該漏洞的CVSS v4.0嚴重程度評分為9.5分，且Arista指出該弱點已遭到外部研究人員通報並積極利用。美國網路安全與基礎設施安全局（CISA）已將其列入已遭利用的漏洞名單（KEV），並要求聯邦機構在三日內完成修補。\n\n攻擊者利用此漏洞需滿足特定條件：首先，需能存取VCO網頁介面；其次，IT人員必須在VeloCloud Edge設置以憑證對VCO進行身分驗證，且攻擊者需能存取VeloCloud Edge身分驗證憑證公開的部分。建議相關機構應立即修補此漏洞，以防範遭受攻擊。",
    tags: ["Arista", "VeloCloud Orchestrator", "VCO", "CVE-2026-93952", "SD-WAN", "CISA", "KEV"],
    title_en: "Arista SD-WAN Platform VeloCloud Orchestrator (VCO) Affected by Critical Vulnerability CVE-2026-93952; CISA Warns of Exploitation",
    summary_en: "Security vendor Arista announced on September 22 that a critical vulnerability, CVE-2026-93952, was discovered in the VeloCloud Orchestrator (VCO), an SD-WAN centralized management platform. This vulnerability allows remote attackers to access internal privileged functions of the VCO, compromising the confidentiality, integrity, and availability of the VCO and its data. The vulnerability has a CVSS v4.0 severity score of 9.5, and Arista notes that the weakness has been reported and actively exploited by external researchers. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has listed it as an actively exploited vulnerability (KEV) and mandated that federal agencies complete patching within three days.\n\nTo exploit this vulnerability, an attacker must meet specific conditions: first, they must be able to access the VCO web interface; second, IT personnel must have configured VeloCloud Edge to authenticate with the VCO using certificates, and the attacker must be able to access the public portion of the VeloCloud Edge authentication certificate. Relevant organizations are advised to patch this vulnerability immediately to prevent potential attacks.",
    tags_en: ["Arista", "VeloCloud Orchestrator", "VCO", "CVE-2026-93952", "SD-WAN", "CISA", "KEV"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179154", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13054",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "F5 BIG-IP Access Policy Manager (APM) 存在 RCE 漏洞，CISA 已列入 KEV 警示",
    summary: "資安廠商 F5 於 9 月 22 日發布公告，指出其 BIG-IP 元件 Access Policy Manager (APM) 在特定配置下存在資安漏洞 CVE-2026-94127。此漏洞屬於記憶體堆積緩衝區溢位類型，當 APM 被設定為 OAuth 授權伺服器，且存取政策與 OAuth 設定檔同時存在於虛擬伺服器時，攻擊者可利用惡意流量遠端執行任意程式碼（RCE）。該漏洞的 CVSS v4.0 嚴重程度評分為 9.3 分，CVSS 評分為 9.8 分。由於此弱點已被發現遭到利用，美國網路安全與基礎設施安全局（CISA）已將其列入已遭利用的漏洞名單（KEV）。F5 提醒，此風險僅影響 APM 的 OAuth 元件，且僅限 APM 的 21.1、17.5 與 17.1 版本。若用戶未將 APM 設定為 OAuth 授權伺服器，則不受影響。F5 已為受影響版本發布修補程式，建議用戶應立即進行版本升級。",
    tags: ["F5", "BIG-IP", "APM", "CVE-2026-94127", "RCE", "CISA", "OAuth"],
    title_en: "F5 BIG-IP Access Policy Manager (APM) has RCE vulnerability; CISA listed in KEV Alert",
    summary_en: "Security vendor F5 announced on September 22 that its BIG-IP component, Access Policy Manager (APM), contains a security vulnerability, CVE-2026-94127, under specific configurations. This vulnerability is a memory stack buffer overflow type. When APM is configured as an OAuth authorization server, and the access policy and OAuth configuration file both exist on the virtual server, an attacker can exploit malicious traffic to achieve Remote Code Execution (RCE). The vulnerability has a CVSS v4.0 severity score of 9.3 and a CVSS score of 9.8. Because this weakness has been found to be exploited, the U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added it to its Known Exploited Vulnerabilities (KEV) catalog. F5 notes that this risk only affects the APM OAuth component and is limited to APM versions 21.1, 17.5, and 17.1. Users who have not configured APM as an OAuth authorization server are unaffected. F5 has released a patch for the affected versions and recommends that users upgrade immediately.",
    tags_en: ["F5", "BIG-IP", "APM", "CVE-2026-94127", "RCE", "CISA", "OAuth"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179151", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13055",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：四個高危漏洞已遭積極利用，要求聯邦機構緊急修補",
    summary: "美國網路安全與基礎設施安全局（CISA）於9月22日發布警告，指出已掌握四個漏洞遭積極利用的證據，並將其列入已遭利用的漏洞名單（KEV）。受影響的漏洞包括Check Point的憑證驗證不當漏洞CVE-2026-85102、路徑遍歷漏洞CVE-2026-93616，以及Arista VeloCloud Orchestrator輸入驗證不當漏洞CVE-2026-93952和F5 BIG-IP APM記憶體堆積緩衝區溢位漏洞CVE-2026-94127。這些漏洞均被評為重大等級，其中CVE-2026-93952達到CVSS滿分10分。CISA要求聯邦機構必須在9月25日前完成修補。Arista與F5已於9月22日發布公告，確認漏洞遭利用；Check Point也已說明相關弱點的修補狀況。實務上，組織應立即檢查其資安設備，並優先修補這些已公開遭利用的漏洞，以降低被攻擊的風險。",
    tags: ["CISA", "KEV", "CVE-2026-85102", "CVE-2026-93616", "CVE-2026-93952", "CVE-2026-94127", "Check Point", "Arista", "F5"],
    title_en: "CISA Warns: Four High-Risk Vulnerabilities Actively Exploited, Demands Federal Agency Patching",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) issued a warning on September 22, stating that evidence of four vulnerabilities being actively exploited has been gathered, and listing them on its Known Exploited Vulnerabilities (KEV) catalog. The affected vulnerabilities include the Check Point improper certificate validation vulnerability CVE-2026-85102, the path traversal vulnerability CVE-2026-93616, the Arista VeloCloud Orchestrator improper input validation vulnerability CVE-2026-93952, and the F5 BIG-IP APM memory stack buffer overflow vulnerability CVE-2026-94127. All these vulnerabilities are rated as critical, with CVE-2026-93952 achieving a CVSS score of 10. CISA requires federal agencies to complete patching by September 25. Arista and F5 released announcements on September 22 confirming the vulnerabilities were exploited; Check Point also provided an update on the remediation status of the related weaknesses. Practically, organizations should immediately check their security equipment and prioritize patching these publicly exploited vulnerabilities to reduce the risk of attack.",
    tags_en: ["CISA", "KEV", "CVE-2026-85102", "CVE-2026-93616", "CVE-2026-93952", "CVE-2026-94127", "Check Point", "Arista", "F5"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179150", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13058",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SolarWinds Access Rights Manager (ARM) 漏洞揭露：CVE-2026-28326 允許遠端執行程式碼",
    summary: "網路與系統管理軟體業者 SolarWinds 揭露其 Access Rights Manager (ARM) 系統存在高風險漏洞 CVE-2026-28326。此漏洞的 CVSS 風險分數為 8.8 分，影響 ARM 2026.2 及更早版本。漏洞根源在於 ARM 使用了寫死的靜態金鑰，使得未經身分驗證的攻擊者可能透過此漏洞進行遠端程式碼執行（RCE）。SolarWinds 已於 9 月 17 日發布 ARM 2026.2.1 修補版本。雖然攻擊者利用此漏洞需能從相鄰網路發動攻擊，但攻擊複雜度低，且無需事先取得系統權限或使用者操作。對於使用舊版 ARM 的企業，在安裝修補版本時需注意升級路徑：版本 2023.2.4 以前無法直接升級至最新版本，必須先升級至 2023.2.4，再依 SolarWinds 支援的路徑逐步升級至 ARM 2026.2.1。",
    tags: ["SolarWinds", "CVE-2026-28326", "Access Rights Manager", "RCE", "資安漏洞", "CVSS"],
    title_en: "SolarWinds Access Rights Manager (ARM) Vulnerability Disclosed: CVE-2026-28326 Allows Remote Code Execution",
    summary_en: "Network and system management software vendor SolarWinds has disclosed a high-risk vulnerability, CVE-2026-28326, in its Access Rights Manager (ARM) system. This vulnerability has a CVSS risk score of 8.8 and affects ARM versions 2026.2 and earlier. The root cause of the vulnerability is that ARM uses hardcoded static keys, which could allow unauthenticated attackers to perform Remote Code Execution (RCE) via this flaw. SolarWinds released the ARM 2026.2.1 patch version on September 17. Although exploiting this vulnerability requires the attacker to originate the attack from an adjacent network, the attack complexity is low, and it does not require prior system privileges or user interaction. Enterprises using older versions of ARM must pay attention to the upgrade path when installing the patch: versions prior to 2023.2.4 cannot directly upgrade to the latest version and must first be upgraded to 2023.2.4, followed by a gradual upgrade path to ARM 2026.2.1 as supported by SolarWinds.",
    tags_en: ["SolarWinds", "CVE-2026-28326", "Access Rights Manager", "RCE", "Vulnerability", "CVSS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179139", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13108",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警告：Perl模組 Crypt::SelfCertificate 存在惡意程式碼，CVE-2026-95831 允許遠端執行 Python 代碼",
    summary: "Perl 語言的 Crypt::SelfCertificate 模組在版本 1.01 至 1.05 之間包含惡意程式碼，被識別為 CVE-2026-95831。該漏洞允許攻擊者透過模組的 generate_certificate 功能，執行儲存在惡意 HTTP URL 的 Python 代碼。攻擊者無需在受影響主機上留下任何腳本檔案，即可作為使用者權限執行任意程式碼。這類惡意程式碼的植入，可能意圖在安裝後觸發，並利用 Base64 編碼的混淆 URL 載入並執行遠端代碼。由於該模組的發布版本缺乏測試腳本或建構鉤子，增加了風險。建議所有安裝了受影響版本的系統應視為潛在受損，並進行深入調查。修復建議是立即移除或升級至未受影響的版本。",
    tags: ["CVE-2026-95831", "Crypt::SelfCertificate", "Perl", "惡意程式碼", "Supply Chain Attack", "Python"],
    title_en: "Warning: Perl Module Crypt::SelfCertificate Contains Malicious Code, CVE-2026-95831 Allows Remote Execution of Python Code",
    summary_en: "The Perl module Crypt::SelfCertificate, versions 1.01 through 1.05, contains malicious code identified as CVE-2026-95831. This vulnerability allows an attacker to execute Python code stored at a malicious HTTP URL via the module's generate_certificate function. An attacker can execute arbitrary code as a user without needing to leave any script files on the affected host. The malicious code is likely designed to trigger upon installation, utilizing a Base64 encoded obfuscated URL to load and execute remote code. The risk is heightened because the module's released versions lack testing scripts or build hooks. All systems running affected versions are advised to be treated as potentially compromised and undergo thorough investigation. The recommended remediation is to immediately remove or upgrade to an unaffected version.",
    tags_en: ["CVE-2026-95831", "Crypt::SelfCertificate", "Perl", "Malicious Code", "Supply Chain Attack", "Python"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/23/2", lang: "EN" }
    ]
  },
  {
    id: "20260923-13109",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "fetchmail 6.6.6 及舊版受影響：NTLM 認證客戶端存在遠端程式碼執行漏洞 CVE-2026-94184",
    summary: "fetchmail 維護者 Matthias Andree 發布了 fetchmail 6.6.8 版本，主要修復了先前安全公告 fetchmail-SA-2026-01 中提到的漏洞。該漏洞位於 NTLM 認證客戶端，可能導致遠端程式碼執行（RCE）。雖然 fetchmail 6.6.7 版本已修復了有漏洞的 NTLM 認證客戶端程式碼並檢查緩衝區大小，但由於原始安全公告的描述不準確，因此需要發布更新版本。原始報告指出，在某些情況下，啟用 NTLM 的 fetchmail 版本可能存在漏洞，最壞情況下會導致 RCE。建議使用者升級至 fetchmail 6.6.8 或更高版本，以確保修復了所有相關的安全問題，並避免因不準確的文檔描述而造成混淆。",
    tags: ["fetchmail", "CVE-2026-94184", "NTLM", "遠端程式碼執行", "RCE"],
    title_en: "fetchmail 6.6.6 and Earlier Versions Affected: NTLM Authentication Client Contains Remote Code Execution Vulnerability CVE-2026-94184",
    summary_en: "fetchmail maintainer Matthias Andree has released fetchmail 6.6.8, which primarily addresses the vulnerability mentioned in the previous security advisory fetchmail-SA-2026-01. The vulnerability resides in the NTLM authentication client and could potentially lead to Remote Code Execution (RCE). Although fetchmail 6.6.7 already fixed the vulnerable NTLM authentication client code and checked buffer sizes, an updated version was necessary due to inaccuracies in the original security advisory's description. The original report indicated that fetchmail versions with NTLM enabled might contain a vulnerability, potentially leading to RCE in the worst-case scenario. Users are advised to upgrade to fetchmail 6.6.8 or later to ensure all related security issues are patched and to avoid confusion caused by inaccurate documentation descriptions.",
    tags_en: ["fetchmail", "CVE-2026-94184", "NTLM", "Remote Code Execution", "RCE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/23/1", lang: "EN" }
    ]
  },
  {
    id: "20260923-13149",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV推出新喜劇影集《Brothers》，由Matthew McConaughey與Woody Harrelson主演",
    summary: "Apple TV近日推出了全新喜劇影集《Brothers》的前兩集，該劇集由Woody Harrelson和Matthew McConaughey主演。故事圍繞著兩人虛構化的角色展開，他們長期的友誼因一個數十年來埋藏的秘密而陷入混亂：他們可能實際上是親生兄弟。影集設定在Woody的女兒婚禮崩潰後，一家人前往Matthew的牧場度過假期。然而，Matthew的母親Ma Mac不慎透露了這個秘密，導致兩人必須在追尋真相的過程中，同時應對家庭、名聲和身份危機。該劇集預計共八集，將於每週三播出，直到11月4日。觀看《Brothers》需要訂閱Apple TV服務，每月費用為$14.99，或透過Apple One組合包訂閱。",
    tags: ["Apple TV", "Brothers", "Woody Harrelson", "Matthew McConaughey", "喜劇影集"],
    title_en: "Apple TV launches new comedy series 'Brothers' starring Matthew McConaughey and Woody Harrelson",
    summary_en: "Apple TV recently released the first two episodes of its new comedy series, 'Brothers,' starring Woody Harrelson and Matthew McConaughey. The story revolves around the two men's fictional characters, whose long-standing friendship is thrown into chaos by a secret buried for decades: they may actually be biological brothers. The series is set after a collapse at Woody's daughter's wedding, as the family travels to Matthew's ranch for a holiday. However, Matthew's mother, Ma Mac, accidentally reveals the secret, forcing the two men to confront family, reputation, and identity crises while searching for the truth. The series is scheduled for eight episodes and will air every Wednesday until November 4. To watch 'Brothers,' subscribers must subscribe to Apple TV for $14.99 per month, or through the Apple One bundle.",
    tags_en: ["Apple TV", "Brothers", "Woody Harrelson", "Matthew McConaughey", "Comedy Series"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/22/brothers-starring-matthew-mcconaughey-and-woody-harrelson-premieres-on-apple-tv", lang: "EN" }
    ]
  },
  {
    id: "20260923-13150",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 27.2、watchOS 27.2 等公共測試版，強化健康與 Siri AI 功能",
    summary: "Apple 今日發布了 iPadOS 27.2、watchOS 27.2 和 tvOS 27.2 等版本的公共測試版（Public Beta）。這些版本與開發者測試版 2 的建構相同。本次更新的重點在於 iPadOS 和 iOS 的重大改動。iPadOS 27.2 引入了全新的「健康」App，整合了 Apple Intelligence 功能，包括「洞察」和「長壽」等功能標籤。此外，它還為 Apple TV App 新增了「個人資料」（Profiles）功能，方便家長管理兒童觀看內容。另一個顯著的改進是，Siri AI 功能已擴展至 iPadOS，此功能先前僅限於 macOS Golden Gate，且 Siri AI 的支援語言也大幅增加。使用者若有興趣安裝，需前往「設定」的「軟體更新」頁面，並確保已開啟 Beta 更新選項。",
    tags: ["Apple", "iPadOS", "watchOS", "Apple Intelligence", "Siri AI", "公共測試版"],
    title_en: "Apple Releases Public Beta for iPadOS 27.2, watchOS 27.2, and More, Enhancing Health and Siri AI Features",
    summary_en: "Apple today released Public Beta versions of iPadOS 27.2, watchOS 27.2, and tvOS 27.2. These versions share the same build as the Developer Beta 2. The focus of this update is on major changes to iPadOS and iOS. iPadOS 27.2 introduces a brand new 'Health' app, which integrates Apple Intelligence features, including 'Insights' and 'Longevity' feature tags. Furthermore, it adds a 'Profiles' feature to the Apple TV app, allowing parents to manage children's viewing content. Another significant improvement is the expansion of Siri AI functionality to iPadOS, a feature previously limited to macOS Golden Gate. Additionally, the supported languages for Siri AI have been greatly increased. Users interested in installing the beta must navigate to the 'Software Update' page in 'Settings' and ensure that the Beta update option is enabled.",
    tags_en: ["Apple", "iPadOS", "watchOS", "Apple Intelligence", "Siri AI", "Public Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/22/public-beta-debuts-for-ipados-27-2-and-more-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260923-13297",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究揭露新型 EDR 規避技術：利用程序參數毒化繞過端點防禦",
    summary: "研究人員發現了一種名為「程序參數毒化」（process parameter poisoning）的進階 EDR 規避技術。此技術的本質是將惡意 Payload 隱藏在標準的程序初始化結構中，並利用 Windows 自動傳遞給新程序的啟動參數。攻擊者執行此技術時，無需使用傳統上 EDR 工具密切監控的記憶體分配或寫入 API（如 VirtualAllocEx()、WriteProcessMemory() 等），從而達到規避偵測的目的。Flashpoint 測試證實，該技術在多個市場領先的 EDR 產品上成功執行，且未觸發任何警報。為有效防禦，Flashpoint 建議安全防禦者應改變監控重點，不能僅依賴傳統的 Windows API 呼叫。建議的四種偵測策略包括：檢查程序參數是否有異常數據；監控執行緒執行劫持；偵測來自異常記憶體位置的程式碼執行；以及監控記憶體權限是否被更改為可執行。安全專家提醒，雖然目前尚未在公開惡意樣本中發現使用此技術的證據，但其潛在風險極高，應將其納入防禦考量。",
    tags: ["EDR", "程序參數毒化", "Process Injection", "Flashpoint", "Windows API"],
    title_en: "Research Uncovers Novel EDR Evasion Technique: Bypassing Endpoint Defense via Process Parameter Poisoning",
    summary_en: "Researchers have discovered an advanced EDR evasion technique called \"process parameter poisoning.\" The core of this technique involves hiding a malicious payload within standard program initialization structures and utilizing startup parameters automatically passed to new processes by Windows. When attackers execute this technique, they do not need to use memory allocation or write APIs (such as VirtualAllocEx() or WriteProcessMemory()) that EDR tools traditionally monitor, thereby achieving detection evasion. Flashpoint testing confirmed that this technique successfully executed against multiple market-leading EDR products without triggering any alerts. For effective defense, Flashpoint recommends that security defenders shift their monitoring focus and cannot rely solely on traditional Windows API calls. The four suggested detection strategies include: checking program parameters for anomalous data; monitoring thread execution hijacking; detecting code execution originating from abnormal memory locations; and monitoring if memory permissions are changed to executable. Security experts caution that although there is currently no evidence of this technique being used in public malicious samples, its potential risk is extremely high and should be incorporated into defensive considerations.",
    tags_en: ["EDR", "Process Parameter Poisoning", "Process Injection", "Flashpoint", "Windows API"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/endpoint-security/edr-evasion-stack-helps-process-injection-slip-past-defenses", lang: "EN" }
    ]
  },
  {
    id: "20260923-13299",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "阿聯酋與沙烏地阿拉伯面臨複雜化網路攻擊潮，需加強防禦",
    summary: "根據 Positive Technologies 的情報分析，中東地區的網路攻擊事件持續增加，其中阿聯酋和沙烏地阿拉伯在 2026 年上半年共吸收了該海灣地區 50% 的網路攻擊。攻擊類型已從容易偵測的 DDoS 或網站變更，轉向更複雜、更難偵測的滲透式攻擊。受影響組織最常遭受的攻擊是資訊洩露漏洞（information-disclosure vulnerabilities），佔 62%。此外，遠端程式碼執行（remote code execution）和身分驗證繞過（authentication bypass）等攻擊也十分普遍。這些攻擊顯示，攻擊者正專注於關鍵基礎設施的隱蔽滲透、建立持久性以及資料收集。Positive Technologies 建議，由於阿聯酋和沙烏地阿拉伯正積極推動數位轉型，應著重縮小攻擊面，並特別關注工業自動化領域中，過時系統和物聯網（IoT）設備帶來的額外風險，以應對 AI 輔助攻擊的威脅。",
    tags: ["阿聯酋", "沙烏地阿拉伯", "Positive Technologies", "DDoS", "資訊洩露漏洞", "IoT", "網路攻擊"],
    title_en: "UAE and Saudi Arabia Face Complex Wave of Cyber Attacks, Requiring Enhanced Defense",
    summary_en: "According to Positive Technologies' intelligence analysis, cyber attack incidents in the Middle East region are continuously increasing. Specifically, the UAE and Saudi Arabia absorbed 50% of the cyber attacks in the Gulf region during the first half of 2026. The attack types have shifted from easily detectable DDoS or website defacement to more complex and harder-to-detect infiltration attacks. The most common vulnerability exploited in affected organizations is information-disclosure vulnerabilities, accounting for 62%. Furthermore, attacks such as remote code execution and authentication bypass are also highly prevalent. These attacks indicate that threat actors are focusing on stealthy infiltration, establishing persistence, and data collection within critical infrastructure. Positive Technologies suggests that given the UAE and Saudi Arabia's active push for digital transformation, efforts should focus on reducing the attack surface, with special attention paid to the additional risks posed by legacy systems and IoT devices in the industrial automation sector, in order to counter the threat of AI-assisted attacks.",
    tags_en: ["UAE", "Saudi Arabia", "Positive Technologies", "DDoS", "Information-disclosure vulnerabilities", "IoT", "Cyber attacks"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/uae-saudi-arabia-face-onslaught-of-increasingly-sophisticated-automated-cyberattacks", lang: "EN" }
    ]
  },
  {
    id: "20260923-13388",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GitLab 郵件功能漏洞：洩露的專案郵件地址可繞過權限與 2FA 進行程式碼提交",
    summary: "資安研究公司 Aikido Security 揭露 GitLab 的郵件工作項目功能存在重大安全漏洞。該功能允許使用者為每個專案生成一個專屬的郵件地址，用於透過郵件提交 Issue 或 Merge Request。然而，攻擊者若取得此郵件地址，可利用其背後的持久性 Token，繞過傳統的登入驗證機制，甚至無需觸及受害者的信箱。\n\n更嚴重的是，攻擊者可透過修改郵件地址後綴（例如從 -issue 改為 -merge-request），將郵件內容偽裝成程式碼補丁（patch），並將其提交到目標分支，包括 `main` 分支。由於 GitLab 不檢查郵件的來源，攻擊者可以假冒受害者身份，以受害者所有的權限執行程式碼提交，甚至觸發 CI/CD 工作流程。此漏洞的影響範圍極廣，因為所有 GitLab.com 帳號和開啟了郵件功能的自架實例都可能受影響。\n\n修復建議包括：使用者應立即在個人存取 Token 頁面重設其郵件工作項目 Token，以使所有洩露的地址失效；同時，應檢查並移除所有公開的、包含此類郵件地址的文檔或 README 文件；對於自架實例的管理者，建議考慮關閉整個實例的郵件工作項目功能。",
    tags: ["GitLab", "郵件工作項目", "Token 洩露", "CI/CD", "Merge Request", "2FA 繞過"],
    title_en: "GitLab Email Feature Vulnerability: Leaked Project Email Addresses Bypass Permissions and 2FA for Code Commits",
    summary_en: "Security research firm Aikido Security has disclosed a critical vulnerability in GitLab's email issue feature. This feature allows users to generate a dedicated email address for each project, used for submitting Issues or Merge Requests via email. However, if an attacker obtains this email address, they can exploit the persistent token associated with it to bypass traditional login authentication mechanisms, even without accessing the victim's mailbox.\n\nMore critically, attackers can modify the email address suffix (for example, changing it from -issue to -merge-request) to disguise the email content as a code patch, and submit it to a target branch, including the `main` branch. Since GitLab does not validate the source of the email, an attacker can impersonate a victim and execute code commits with the victim's full permissions, potentially triggering CI/CD workflows. The impact of this vulnerability is widespread, affecting all GitLab.com accounts and self-hosted instances with the email feature enabled.\n\nRemediation recommendations include: Users should immediately reset their email issue tokens on the personal access token page to invalidate all leaked addresses; they should also check and remove any public documentation or README files containing such email addresses; for self-hosted instance administrators, it is recommended to consider disabling the entire instance's email issue feature.",
    tags_en: ["GitLab", "Email Issue Feature", "Token Leakage", "CI/CD", "Merge Request", "2FA Bypass"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/a-leaked-gitlab-issue-email-address.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13389",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "MikroTik RouterOS 鏈式漏洞曝光：兩個 SSH 缺陷讓攻擊者可繞過認證取得最高管理權限",
    summary: "研究人員揭露了名為 MikroTrick 的鏈式攻擊，利用 MikroTik RouterOS 的兩個 SSH 漏洞（CVE-2026-67279 和 CVE-2026-86060）來繞過密碼、SSH 金鑰或任何形式的認證，取得設備的完整管理控制權。CVE-2026-67279 缺陷能讓未經認證的客戶端在 SSH 認證流程中達到本應需要完整登入的階段。接著，CVE-2026-86060 缺陷利用了 RouterOS 登入程式接收參數的漏洞，允許攻擊者透過將 `-2` 作為使用者名稱，強制登入程式從標準輸入（file descriptor 2）讀取權限和使用者資訊，從而開啟一個具有最高權限的控制台。攻擊證據顯示，此鏈式攻擊早在修補程式發布前就已在野外被利用，CISA 已將 CVE-2026-86060 列入已知被利用漏洞目錄。建議管理員立即修補 RouterOS，並檢查設備是否有異常使用者、排程任務或未知的診斷檔案，若懷疑受感染，應隔離設備並從可信賴的配置重新建置。",
    tags: ["MikroTik", "RouterOS", "CVE-2026-67279", "CVE-2026-86060", "SSH", "鏈式攻擊"],
    title_en: "MikroTik RouterOS Chained Vulnerability Exposed: Two SSH Flaws Allow Attackers to Bypass Authentication and Gain Root Privileges",
    summary_en: "Researchers have disclosed a chained attack, dubbed MikroTrick, that leverages two vulnerabilities in MikroTik RouterOS's SSH implementation (CVE-2026-67279 and CVE-2026-86060) to bypass passwords, SSH keys, or any form of authentication, thereby gaining complete administrative control over the device. The CVE-2026-67279 flaw allows unauthenticated clients to reach a stage in the SSH authentication process that normally requires full login credentials. Subsequently, the CVE-2026-86060 flaw exploits a vulnerability in how the RouterOS login program handles parameters, allowing an attacker to force the login program to read privilege and user information from standard input (file descriptor 2) by using `-2` as the username. Evidence suggests that this chained attack was exploited in the wild before the patch was released, and CISA has listed CVE-2026-86060 in its known exploited vulnerabilities catalog. Administrators are advised to immediately patch RouterOS and check the device for unusual users, scheduled tasks, or unknown diagnostic files. If infection is suspected, the device should be isolated and rebuilt from a trusted configuration.",
    tags_en: ["MikroTik", "RouterOS", "CVE-2026-67279", "CVE-2026-86060", "SSH", "Chained Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/mikrotrick-chain-let-attackers-take.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13390",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Cisco Talos揭露：新型Windows惡意程式CLOSEDQUORUM利用多AI模型進行命令與控制",
    summary: "資安公司 Cisco Talos 於 9 月 22 日發佈，發現一種名為 CLOSEDQUORUM 的 Windows 惡意程式。此惡意程式的創新之處在於，它不再依賴傳統的攻擊者伺服器進行命令與控制（C2），而是透過投票機制，向多達四個商業 AI 模型（如 DeepSeek、Qwen、Mistral、Google Gemini）徵詢指令。惡意程式會向這些 AI 模型發送電腦基本資訊，並讓模型從「steal（竊取）」、「inject（注入）」、「persist（持久化）」和「move（移動）」四個動作中選擇。若投票決定執行「steal」，惡意程式會執行多項高風險行為，包括：傾印 LSASS 記憶體以竊取登入憑證；複製 Chrome、Edge、Firefox 的儲存密碼；以及從 MetaMask、Exodus 和 Ethereum 等加密貨幣錢包竊取資料。此外，它還能使用 Early Bird APC injection 或 process hollowing 等技術進行程式注入，並透過修改 Registry Run key、排程任務和 WMI event subscription 等方式達成持久化。Talos 提醒防禦者，應關注 AI 服務流量、多 AI 供應商的異常連線、以及 LSASS 存取、程式注入或 WMI 持久化等行為組合，而非僅阻擋特定網域。由於惡意程式的決定過程和竊取資料都會透過 Discord webhook 上傳，這為偵測提供了額外線索。",
    tags: ["CLOSEDQUORUM", "Cisco Talos", "Windows 惡意程式", "AI 模型", "LSASS", "C2", "Process Injection"],
    title_en: "Cisco Talos Reveals: New Windows Malware CLOSEDQUORUM Uses Multiple AI Models for Command and Control",
    summary_en: "Cybersecurity firm Cisco Talos announced on September 22nd the discovery of a Windows malware named CLOSEDQUORUM. The innovative aspect of this malware is that it no longer relies on traditional attacker servers for command and control (C2). Instead, it polls multiple commercial AI models (such as DeepSeek, Qwen, Mistral, and Google Gemini) to solicit instructions via a voting mechanism. The malware sends basic computer information to these AI models, asking them to choose from four actions: \"steal,\" \"inject,\" \"persist,\" and \"move.\" If the vote decides to execute \"steal,\" the malware performs multiple high-risk actions, including: dumping LSASS memory to steal login credentials; copying stored passwords from Chrome, Edge, and Firefox; and exfiltrating data from cryptocurrency wallets such as MetaMask, Exodus, and Ethereum. Furthermore, it can utilize techniques like Early Bird APC injection or process hollowing for code injection, and achieve persistence by modifying Registry Run keys, scheduled tasks, and WMI event subscriptions. Talos advises defenders to focus on combinations of behaviors—such as monitoring AI service traffic, detecting anomalous connections to multiple AI vendors, and observing LSASS access, process injection, or WMI persistence—rather than merely blocking specific domains. Since the malware's decision process and data exfiltration are uploaded via Discord webhooks, this provides additional clues for detection.",
    tags_en: ["CLOSEDQUORUM", "Cisco Talos", "Windows Malware", "AI Models", "LSASS", "C2", "Process Injection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/windows-malware-is-built-to-let-up-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13392",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "cPanel CalDAV/CardDAV服務漏洞：允許帳戶用戶以 root 權限執行程式碼，全面控制伺服器",
    summary: "cPanel於9月22日宣布，其CalDAV和CardDAV服務存在一個嚴重漏洞，允許任何擁有cPanel託管帳戶的用戶執行root權限程式碼，從而全面控制伺服器。此外，WP Toolkit插件也存在第二個漏洞，允許帳戶持有者修改屬於其他帳戶的資料庫。cPanel已為這三個漏洞發布了修補版本。\n\n第一個漏洞的影響範圍極廣，只要擁有cPanel帳戶即可利用，在共享伺服器上風險尤其高。修補建議是立即更新cPanel & WHM（CVE-2026-87899 和 CVE-2026-68490）以及WP Toolkit（CVE-2026-87900）。對於無法立即更新的伺服器，cPanel並未提供臨時規避方法。",
    tags: ["cPanel", "CalDAV", "CardDAV", "CVE-2026-87899", "CVE-2026-68490", "CVE-2026-87900", "root權限"],
    title_en: "cPanel CalDAV/CardDAV Service Vulnerability: Allows Account Users to Execute Code with Root Privileges, Achieving Full Server Control",
    summary_en: "cPanel announced on September 22nd that its CalDAV and CardDAV services contain a critical vulnerability, allowing any user with a cPanel hosting account to execute code with root privileges, thereby achieving full server control. Additionally, the WP Toolkit plugin has a second vulnerability that allows account holders to modify data belonging to other accounts. cPanel has released patches for all three vulnerabilities. The first vulnerability has a wide impact scope, as it can be exploited by anyone with a cPanel account, posing particular risk on shared servers. The recommended patch is to immediately update cPanel & WHM (CVE-2026-87899 and CVE-2026-68490) and WP Toolkit (CVE-2026-87900). cPanel has not provided a temporary workaround for servers that cannot be updated immediately.",
    tags_en: ["cPanel", "CalDAV", "CardDAV", "CVE-2026-87899", "CVE-2026-68490", "CVE-2026-87900", "root privileges"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/new-cpanel-flaw-lets-hosting-account_0272795595.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13395",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "DepthFirst揭露Ubuntu核心漏洞：AF_UNIX Socket Use-After-Free可逃逸容器並取得主機Root權限",
    summary: "資安公司 DepthFirst 於 9 月 22 日發布研究，指出 Linux 核心 AF_UNIX socket 子系統存在一個 Use-After-Free 漏洞，編號為 CVE-2026-80521 (CVSS score: 7.8)。此漏洞允許攻擊者從容器內部逃逸（container escape），並在主機上取得 root 權限。該漏洞位於核心的垃圾回收器（garbage collector）處理通過 SCM_RIGHTS 訊息傳遞的檔案描述符時，存在一個競態條件（race condition）。攻擊者可以在垃圾回收器運行期間，利用此條件釋放部分連結 socket 的記憶體，但未能移除指向該記憶體的內部指標，導致後續的收集過程追蹤到已釋放的記憶體。由於此漏洞可透過容器允許的普通系統呼叫（system calls）觸發，因此繞過了命名空間隔離（namespace isolation）、cgroup 限制和 seccomp 過濾。雖然此漏洞已於 8 月 6 日在 mainline kernel 7.2 和 stable branch 7.1.10 上修補，但 Ubuntu 尚未為其 26.04、24.04 或 22.04 LTS 版本發布修補程式。DepthFirst 建議將不受信任的工作負載遷移至 microVM 隔離環境，例如 Firecracker 或 Kata Containers，而非僅依賴容器作為安全邊界。",
    tags: ["CVE-2026-80521", "Linux kernel", "AF_UNIX socket", "Container Escape", "Ubuntu", "Use-After-Free"],
    title_en: "DepthFirst Reveals Ubuntu Kernel Vulnerability: AF_UNIX Socket Use-After-Free Allows Container Escape and Host Root Privilege Escalation",
    summary_en: "Security firm DepthFirst published research on September 22, identifying a Use-After-Free vulnerability in the Linux kernel's AF_UNIX socket subsystem, designated as CVE-2026-80521 (CVSS score: 7.8). This vulnerability allows an attacker to achieve container escape and gain root privileges on the host. The flaw resides in the kernel's garbage collector when handling file descriptors passed via SCM_RIGHTS messages, involving a race condition. An attacker can exploit this condition during the garbage collector's operation to free memory associated with a linked socket, but fail to remove the internal pointer referencing that memory, causing subsequent collection processes to track freed memory. Because this vulnerability can be triggered using standard system calls permitted within a container, it bypasses namespace isolation, cgroup restrictions, and seccomp filtering. Although this vulnerability was patched on August 6 in the mainline kernel 7.2 and stable branch 7.1.10, Ubuntu has not yet released patches for its 26.04, 24.04, or 22.04 LTS versions. DepthFirst recommends migrating untrusted workloads to microVM isolation environments, such as Firecracker or Kata Containers, rather than relying solely on containers as a security boundary.",
    tags_en: ["CVE-2026-80521", "Linux kernel", "AF_UNIX socket", "Container Escape", "Ubuntu", "Use-After-Free"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/exploit-released-for-unpatched-ubuntu.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13396",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "F5 BIG-IP APM 存在嚴重零日漏洞，允許未登入執行程式碼，CISA已列入已知漏洞清單",
    summary: "F5 公司揭露，其 BIG-IP Access Policy Manager (APM) 存在一個關鍵的堆疊緩衝區溢出漏洞 (heap-based buffer overflow)，編號為 CVE-2026-94127。此漏洞影響的條件是 APM 必須作為 OAuth 授權伺服器，並在與存取策略相同的虛擬伺服器上運行。攻擊者可透過發送到該虛擬伺服器的惡意流量，在未登入的情況下執行遠端程式碼 (RCE)。該漏洞的 CVSS v3.1 分數為 9.8/10，CVSS v4.0 為 9.3/10。由於攻擊流量直接針對虛擬伺服器本身，因此限制 BIG-IP 管理介面存取無法防禦此漏洞，即使是 Appliance 模式的系統也受影響。美國網路安全與基礎設施安全局 (CISA) 已於 9 月 22 日將此漏洞列入其已知漏洞清單 (KEV)，並要求聯邦民用機構盡快修補。F5 已發布工程熱修補程式 (engineering hotfixes)，建議用戶在無法立即安裝時，應先透過 iRule 進行緩解，並保留鑑識證據，隨後盡快安裝官方修補程式。",
    tags: ["F5", "BIG-IP", "APM", "CVE-2026-94127", "RCE", "OAuth", "CISA"],
    title_en: "F5 BIG-IP APM Contains Critical Zero-Day Vulnerability Allowing Unauthenticated Remote Code Execution; CISA Lists Flaw",
    summary_en: "F5 has disclosed a critical heap-based buffer overflow vulnerability, designated CVE-2026-94127, affecting its BIG-IP Access Policy Manager (APM). This vulnerability is exploitable when APM is configured as an OAuth authorization server and runs on the same virtual server as the access policy. An attacker can send malicious traffic to the virtual server to achieve unauthenticated Remote Code Execution (RCE). The flaw has a CVSS v3.1 score of 9.8/10 and a CVSS v4.0 score of 9.3/10. Because the attack traffic directly targets the virtual server itself, restricting access to the BIG-IP management interface does not mitigate this vulnerability, and even systems in Appliance mode are affected. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added this vulnerability to its Known Exploited Vulnerabilities catalog (KEV) on September 22, urging federal civilian agencies to apply patches immediately. F5 has released engineering hotfixes and advises users that if immediate installation is not possible, they should first implement mitigation via iRule, preserve forensic evidence, and then apply the official patch as soon as possible.",
    tags_en: ["F5", "BIG-IP", "APM", "CVE-2026-94127", "RCE", "OAuth", "CISA"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/f5-patches-critical-big-ip-apm-zero-day.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13397",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "中國駭客利用 Chrome 與 Windows 零日漏洞鏈攻擊，目標鎖定亞洲政府機構",
    summary: "研究人員發現一個代號為 UTA0565 的中國威脅行為者，利用 Google Chrome 和 Microsoft Windows 的零日漏洞鏈進行攻擊。此次攻擊鏈結合了三個漏洞：Chrome 的 CVE-2026-85046、CVE-2026-87491，以及 Windows 的 CVE-2026-85880，旨在突破瀏覽器沙箱並達成遠端程式碼執行（RCE）。攻擊者透過偽造網站，發送假冒媒體或非政府組織（NGO）的釣魚郵件，例如偽裝成 Center for American Progress (CAP)，目標鎖定亞洲政府機構。這些郵件包含指向偽造網域的連結，載入的 HTML 元素利用 BlueMoon exploit kit，最終下載名為 CLEANGULP 的惡意程式。CLEANGULP 是一個具備執行指令、列舉進程、上傳/下載檔案等功能的惡意家族，並使用硬編碼的 C2 網域進行通訊。這顯示該攻擊可能來自一個協調的中國社群，建議用戶應保持警惕，並儘快修補所有相關漏洞。",
    tags: ["UTA0565", "Google Chrome", "Microsoft Windows", "CVE-2026-85046", "CVE-2026-87491", "CVE-2026-85880", "]  }** 備註：在輸出時，請確保 JSON 結構是完整的，且沒有額外的 Markdown 標記或說明文字。** (此備註僅供內部參考，不應包含在最終輸出中) **}** 由於我不能輸出備註，我將直接輸出最終的 JSON。<channel|>{ <0x0D>"],
    title_en: "Chinese Hackers Exploit Chrome and Windows Zero-Day Chain to Target Asian Government Agencies",
    summary_en: "Researchers have identified a Chinese threat actor, designated UTA0565, that is utilizing a zero-day vulnerability chain targeting Google Chrome and Microsoft Windows. This attack chain combines three vulnerabilities: Chrome's CVE-2026-85046, CVE-2026-87491, and Windows' CVE-2026-85880, aiming to bypass the browser sandbox and achieve Remote Code Execution (RCE). The attackers are targeting Asian government agencies by sending phishing emails via spoofed websites, impersonating media or non-governmental organizations (NGOs), such as the Center for American Progress (CAP). These emails contain links pointing to fake domains, which load HTML elements utilizing the BlueMoon exploit kit, ultimately downloading malware named CLEANGULP. CLEANGULP is a malware family capable of executing commands, listing processes, and uploading/downloading files, and it communicates using hardcoded C2 domains. This suggests the attack may originate from a coordinated Chinese community, and users are advised to remain vigilant and promptly patch all relevant vulnerabilities.",
    tags_en: ["UTA0565", "Google Chrome", "Microsoft Windows", "CVE-2026-85046", "CVE-2026-87491", "CVE-2026-85880"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/chinese-hackers-exploit-chrome-windows.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13398",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Next.js ImageResponse 存在嚴重漏洞：透過 SVG 內容執行遠端程式碼",
    summary: "Vercel 宣布 Next.js 核心功能 ImageResponse 存在嚴重安全漏洞，該漏洞可允許攻擊者透過注入控制的資料（例如來自請求 URL 的文字）到 SVG 內容、屬性或樣式中，最終在伺服器端執行惡意程式碼。此漏洞被追蹤為 CVE-2026-94545，CVSS 分數為 9.5，被評定為關鍵級別。受影響版本為 Next.js 16.2.0 至 16.3.5，且該漏洞僅在使用 Node.js 執行環境時發生，Edge 版本不受影響。ImageResponse 內部使用 Satori 函式庫將圖像佈局轉換為 SVG 程式碼。開發者應立即將 Next.js 升級至修補版本 16.3.6。若無法立即升級，建議的臨時解決方案是確保所有來自攻擊者控制的資料不會被渲染到 SVG 的內容、屬性或樣式中。此漏洞的根本原因在於 Satori 函式庫未能正確轉義某些輸入值，導致其被誤讀為 SVG 程式碼，進而可能導致程式碼執行。",
    tags: ["Next.js", "Vercel", "CVE-2026-94545", "ImageResponse", "SVG", "Node.js"],
    title_en: "Critical Vulnerability Found in Next.js ImageResponse: Remote Code Execution via SVG Content",
    summary_en: "Vercel has announced a critical security vulnerability in Next.js' core ImageResponse feature. This vulnerability allows an attacker to execute malicious code on the server by injecting controlled data (such as text from a request URL) into the SVG content, attributes, or styles. The flaw is tracked as CVE-2026-94545, with a CVSS score of 9.5, rating it as critical. Affected versions range from Next.js 16.2.0 to 16.3.5, and the vulnerability only occurs when running in a Node.js environment; the Edge version is unaffected. ImageResponse internally uses the Satori library to convert image layouts into SVG code. Developers should immediately upgrade Next.js to the patched version 16.3.6. If immediate upgrading is not possible, the recommended temporary mitigation is to ensure that no attacker-controlled data is rendered into the SVG's content, attributes, or styles. The root cause of this vulnerability is that the Satori library fails to properly escape certain input values, causing them to be misinterpreted as SVG code, which can subsequently lead to code execution.",
    tags_en: ["Next.js", "Vercel", "CVE-2026-94545", "ImageResponse", "SVG", "Node.js"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/critical-nextjs-imageresponse-flaw-can.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13399",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客群 ShinyHunters 聲稱入侵 FBI，竊取員工敏感資料，引發資安關注",
    summary: "網路勒索集團 ShinyHunters 在暗網發文聲稱已入侵美國聯邦調查局（FBI），並竊取了包括現任及前任員工在內的大量敏感資料。該集團聲稱受影響的服務包括刑事司法（CJ）、人力資源（HR）、Medlink 等多個內部系統，並宣稱竊取的資料量約為 2 TB，包含醫學紀錄、藥物資訊和個人身份識別資訊（PII）。FBI 官方已發文表示，其「知悉」關於 FBIjobs.gov 門戶網站被聲稱受影響的聲明，並正在積極調查。雖然 ShinyHunters 聲稱利用了 Oracle PeopleSoft 的零日漏洞，但目前尚未有公開的 PeopleSoft 預認證 RCE 零日細節。資安專家指出，這起事件是駭客群在法執與網路犯罪之間進行的挑釁性行動，並強調組織應保護身份驗證和第三方信任關係，而非僅依賴技術邊界。FBI 官方強調正在與第三方服務提供商合作，以減輕任何風險。",
    tags: ["ShinyHunters", "FBI", "CVE-2026-35273", "PeopleSoft", "資料外洩", "PII"],
    title_en: "Hacker Group ShinyHunters Claims FBI Breach, Stealing Sensitive Employee Data, Raising Security Concerns",
    summary_en: "The ransomware group ShinyHunters posted on the dark web claiming to have breached the U.S. Federal Bureau of Investigation (FBI), stealing a large amount of sensitive data belonging to both current and former employees. The group claimed that multiple internal systems were affected, including Criminal Justice (CJ), Human Resources (HR), and Medlink. They further claimed that the stolen data volume was approximately 2 TB, containing medical records, drug information, and Personally Identifiable Information (PII). The FBI has issued a statement acknowledging the claims regarding the alleged compromise of the FBIjobs.gov portal and stated that it is actively investigating. Although ShinyHunters claimed to have exploited a zero-day vulnerability in Oracle PeopleSoft, no public details of a PeopleSoft pre-certified RCE zero-day have been released yet. Cybersecurity experts point out that this incident is a provocative action by the hacker group in the space between law enforcement and cybercrime, emphasizing that organizations must protect identity authentication and third-party trust relationships, rather than relying solely on technical boundaries. The FBI has stressed that it is collaborating with third-party service providers to mitigate any risk.",
    tags_en: ["ShinyHunters", "FBI", "CVE-2026-35273", "PeopleSoft", "Data Leak", "PII"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/shinyhunters-claims-fbi-breach-says-it.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13598",
    trackers: ["os"],
    category: "Apple",
    title: "MacWhisper 15.2 重大更新：整合 Apple Intelligence，提供即時會議逐字稿與進階語音辨識",
    summary: "MacWhisper 在最新版本 15.2 中進行了重大升級，大幅提升了其作為 Mac 平台 AI 轉錄工具的能力。本次更新的核心功能包括：支援至多 8 位發言者的 Nemotron 3 Diarization 語音辨識模型，以及革命性的即時會議逐字稿功能。使用者現在可以在會議進行時即時追蹤、複製或轉移逐字稿內容。此外，MacWhisper 15.2 整合了阿里巴巴的 QWEN3-ASR 轉錄模型，支援 22 種語言，並與 macOS 27 的 Apple Intelligence、Siri、Spotlight 和 Shortcuts 進行更緊密的系統級整合。這讓使用者可以透過系統級搜尋、Siri 查詢或 Shortcuts 擷取轉錄內容。功能層面，版本還增加了資料夾和子資料夾管理，方便使用者整理會議記錄。整體而言，本次更新強化了 MacWhisper 在專業內容創作和會議記錄流程中的實用性。",
    tags: ["MacWhisper", "Apple Intelligence", "macOS", "Nemotron 3 Diarization", "QWEN3-ASR", "逐字稿"],
    title_en: "MacWhisper 15.2 Major Update: Integrates Apple Intelligence for Real-time Meeting Transcripts and Advanced Voice Recognition",
    summary_en: "MacWhisper has released a major upgrade in version 15.2, significantly enhancing its capabilities as an AI transcription tool for the Mac platform. Key features of this update include support for the Nemotron 3 Diarization voice recognition model, which handles up to 8 speakers, and a revolutionary real-time meeting transcript function. Users can now track, copy, or transfer transcript content as the meeting progresses. Furthermore, MacWhisper 15.2 integrates Alibaba's QWEN3-ASR transcription model, supporting 22 languages, and features deeper system-level integration with macOS 27's Apple Intelligence, Siri, Spotlight, and Shortcuts. This allows users to extract transcript content via system-level search, Siri queries, or Shortcuts actions. Functionally, the version also adds folder and subfolder management, making it easier for users to organize meeting records. Overall, this update strengthens MacWhisper's utility in professional content creation and meeting documentation workflows.",
    tags_en: ["MacWhisper", "Apple Intelligence", "macOS", "Nemotron 3 Diarization", "QWEN3-ASR", "Transcripts"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/macwhisper-update-brings-real-time-meeting-transcripts-improved-speaker-recognition-more", lang: "EN" }
    ]
  },
  {
    id: "20260923-13600",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 watchOS 27.0.1 更新，修復 Apple Watch Series 12 與 Ultra 4 意外重啟的 Bug",
    summary: "Apple 今日發布 watchOS 27.0.1 更新，專門修復 Apple Watch Series 12 和 Apple Watch Ultra 4 的一個系統問題。根據用戶回報，部分用戶曾遇到其 Apple Watch 設備會於日常使用中意外且多次重啟的現象。本次軟體更新旨在解決此意外重啟的 Bug。此更新為修補性版本，主要目的是提升設備的穩定性，確保用戶能順暢使用新機型。建議受影響的 Apple Watch Series 12 和 Apple Watch Ultra 4 用戶，應儘快透過系統更新機制安裝 watchOS 27.0.1 版本，以恢復正常使用。",
    tags: ["Apple", "watchOS", "watchOS 27.0.1", "Apple Watch Series 12", "Apple Watch Ultra 4"],
    title_en: "Apple releases watchOS 27.0.1 update to fix unexpected reboots on Apple Watch Series 12 and Ultra 4",
    summary_en: "Apple today released the watchOS 27.0.1 update, specifically addressing a system issue affecting the Apple Watch Series 12 and Apple Watch Ultra 4. According to user reports, some users encountered a phenomenon where their Apple Watch devices would unexpectedly and repeatedly reboot during normal use. This software update aims to resolve this unexpected reboot bug. As a patch release, the primary goal is to enhance device stability and ensure smooth operation for users of the new models. Affected users of the Apple Watch Series 12 and Apple Watch Ultra 4 are advised to install watchOS 27.0.1 via the system update mechanism as soon as possible to restore normal functionality.",
    tags_en: ["Apple", "watchOS", "watchOS 27.0.1", "Apple Watch Series 12", "Apple Watch Ultra 4"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/apple-releases-watchos-27-0-1-to-fix-apple-watch-series-12-and-ultra-4-bug", lang: "EN" }
    ]
  },
  {
    id: "20260923-13601",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27：Apple 日曆應用程式重大更新，增添更多功能與整合",
    summary: "本文介紹了 iOS 27 作業系統中，Apple 日曆（Calendar）應用程式的全新功能與改進。雖然文章內容主要聚焦於新功能介紹，但從資安角度來看，系統級應用程式的更新通常會包含安全修補與功能優化。iOS 27 的更新預計將為日曆提供更完善的用戶體驗和更強的系統整合能力。使用者應留意 Apple 官方發布的更新通知，確保設備運行最新版本，以獲得最佳的穩定性與安全性。由於原文未提供具體的漏洞或安全細節，建議用戶保持系統更新習慣，以防範潛在的軟體漏洞。",
    tags: ["iOS 27", "Apple Calendar", "Apple", "作業系統更新"],
    title_en: "iOS 27: Major Update to Apple Calendar App Adds More Features and Integrations",
    summary_en: "This article introduces the new features and improvements to the Apple Calendar application within the iOS 27 operating system. Although the content primarily focuses on new feature introductions, from a cybersecurity perspective, system-level application updates typically include security patches and functional optimizations. The iOS 27 update is expected to provide the Calendar with a more comprehensive user experience and stronger system integration capabilities. Users should pay attention to official Apple release notifications and ensure their devices run the latest version to achieve optimal stability and security. Since the original text does not provide specific vulnerabilities or security details, users are advised to maintain a habit of system updates to prevent potential software vulnerabilities.",
    tags_en: ["iOS 27", "Apple Calendar", "Apple", "Operating System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/heres-everything-new-for-apple-calendar-in-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260923-13603",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV 10月內容預告：聚焦新劇集與影視內容排程",
    summary: "本文為 Apple TV 平台內容更新的預告，主要介紹該平台在 2026 年 10 月將推出的新劇集與影視內容。內容涵蓋了多部已獲得關注的劇集，例如《Slow Horses》、《Ted Lasso》以及新的喜劇作品《Brothers》等。文章重點在於內容的排程和宣傳，而非技術性的安全漏洞或系統更新。對於使用者而言，這代表 Apple TV 平台將持續提供豐富且多元的娛樂內容。建議用戶透過 Apple TV 官方網站或相關應用程式，留意最新的內容發行時間表，以掌握最新的觀看資訊。",
    tags: ["Apple TV", "Apple", "影音內容", "Apple TV+"],
    title_en: "Apple TV October Content Preview: Focusing on New Series and Video Content Schedule",
    summary_en: "This article serves as a preview of content updates for the Apple TV platform, primarily introducing new series and video content scheduled for release in October 2026. The content covers several highly anticipated shows, such as *Slow Horses*, *Ted Lasso*, and the new comedy series *Brothers*. The focus of the article is on content scheduling and promotion, rather than technical security vulnerabilities or system updates. For users, this signifies that the Apple TV platform will continue to provide rich and diverse entertainment content. Users are advised to monitor the official Apple TV website or related applications for the latest content release schedule to stay updated on viewing information.",
    tags_en: ["Apple TV", "Apple", "Video Content", "Apple TV+"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/heres-everything-new-apple-tv-has-coming-in-october-2026", lang: "EN" }
    ]
  },
  {
    id: "20260923-13606",
    trackers: ["os"],
    category: "Apple",
    title: "洩漏證據顯示 Siri AI 將透過 HomePod 27 軟體更新至 HomePod，並具備全新狀態指示燈",
    summary: "根據資安情報來源 pdfu 的洩漏，有證據顯示 Siri AI 功能即將透過 HomePod 27 軟體更新至 HomePod 設備。雖然 Apple 於六月介紹 Siri AI 時並未提及其支援 tvOS 或 HomePod 軟體，但洩漏指出 HomePod 27 軟體已包含運行 Siri AI 所需的程式碼，只是目前尚未對用戶啟用。儘管 pdfu 澄清了 Siri AI 是否會與新硬體綁定的不確定性，但文章分析指出，Apple 迄今對 Home 系列產品保持沉默，強烈暗示該功能可能需要特定的新硬體支援。這代表用戶可能需要升級至新一代的 HomePod 才能完整體驗 Siri AI 的功能。修補或升級建議是關注 Apple 未來的官方公告，並留意新硬體設備的發布資訊。",
    tags: ["Siri AI", "HomePod", "HomePod 27", "Apple", "tvOS", "Apple Home"],
    title_en: "Leaked evidence suggests Siri AI will update HomePod via HomePod 27 software, adding a new status indicator light",
    summary_en: "According to a leak from the cybersecurity intelligence source pdfu, there is evidence suggesting that Siri AI functionality will be updated to HomePod devices via HomePod 27 software. Although Apple did not mention support for tvOS or HomePod software when introducing Siri AI in June, the leak indicates that the HomePod 27 software already contains the necessary code to run Siri AI, though it has not yet been enabled for users. Despite pdfu clarifying the uncertainty regarding whether Siri AI will be tied to new hardware, the article analyzes that Apple's silence on the Home series products suggests that this feature may require specific new hardware support. This implies that users might need to upgrade to a new generation of HomePod to fully experience the Siri AI functionality. The recommended action is to monitor Apple's future official announcements and pay attention to new hardware device release information.",
    tags_en: ["Siri AI", "HomePod", "HomePod 27", "Apple", "tvOS", "Apple Home"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/heres-what-siri-ai-looks-like-on-homepod-per-leak", lang: "EN" }
    ]
  },
  {
    id: "20260923-13609",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27.2 擴展 FaceTime Dual Capture 功能，現支援群組通話",
    summary: "Apple 在 iOS 27.2 版本中為 FaceTime 進行了重大功能升級，擴展了 Dual Capture（雙視訊捕捉）功能以支援群組 FaceTime 通話。Dual Capture 允許使用者在 FaceTime 通話中同時顯示前置和後置鏡頭的畫面。此功能在 iOS 27.0 版本最初僅限於一對一通話。若使用 iOS 27.2 Beta 或等待正式發布，使用者即可在所有群組 FaceTime 通話中使用雙視訊功能。此功能需要運行 iOS 27、iPadOS 27 或 macOS 27 的相容設備，且需要 iPhone 17 或更新機型才能使用。此更新屬於平台功能增強，提升了 FaceTime 的互動性。",
    tags: ["iOS 27.2", "FaceTime", "Dual Capture", "Apple", "iOS"],
    title_en: "iOS 27.2 Expands FaceTime Dual Capture to Support Group Calls",
    summary_en: "Apple has rolled out a major feature upgrade for FaceTime in iOS 27.2, expanding the Dual Capture functionality to support group FaceTime calls. Dual Capture allows users to display both front and rear camera feeds simultaneously during a FaceTime call. This feature was initially limited to one-on-one calls in iOS 27.0. With iOS 27.2 Beta or upon official release, users can now utilize the dual-camera feature in all group FaceTime calls. This functionality requires compatible devices running iOS 27, iPadOS 27, or macOS 27, and specifically requires an iPhone 17 or newer model to use. This update represents a platform enhancement that significantly increases the interactivity of FaceTime.",
    tags_en: ["iOS 27.2", "FaceTime", "Dual Capture", "Apple", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/ios-27-2-makes-facetimes-best-new-feature-even-better", lang: "EN" }
    ]
  },
  {
    id: "20260923-13610",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳聞 2026 年 iPhone Pro 機型將採用「近無邊框」設計，但放棄採用 COE 與 LTPO+ 顯示技術",
    summary: "根據 ETNews 報導，Apple 傳聞為其 20 年紀念 iPhone Pro 機型規劃了一款「近無邊框」（near-borderless）的設計。該設計預計透過將顯示器彎曲至手機的四個邊緣，以實現全螢幕的視覺效果。儘管此前有市場懷疑，但此設計似乎仍會如期推進。然而，報導指出 Apple 預計將推遲採用兩種進階顯示技術：Color Filter on Encapsulation (COE) 和 Low-Temperature Polycrystalline Oxide Plus (LTPO+)。這兩種技術原本可幫助實現更薄的面板和更高的電力效率。產業消息來源透露，Apple 做出此決定的主要原因包括記憶體價格上漲，使得吸收額外顯示器成本更困難，以及公司正在尋找比 COE 和 LTPO+ 更優化的解決方案。消費者最關注的重點仍是「近無邊框」的設計能否保留。",
    tags: ["Apple", "iPhone Pro", "近無邊框", "COE", "LTPO+", "手機設計"],
    title_en: "Rumor: Apple's 2026 iPhone Pro to Adopt 'Near-Borderless' Design, but Abandon COE and LTPO+ Display Technologies",
    summary_en: "According to ETNews, Apple is rumored to be planning a 'near-borderless' design for its 20th Anniversary iPhone Pro model. This design is expected to achieve a full-screen visual effect by curving the display to all four edges of the phone. Despite previous market skepticism, this design appears to be moving forward as planned. However, the report indicates that Apple plans to postpone the adoption of two advanced display technologies: Color Filter on Encapsulation (COE) and Low-Temperature Polycrystalline Oxide Plus (LTPO+). These two technologies were originally intended to help achieve thinner panels and higher power efficiency. Industry sources reveal that the main reasons for Apple's decision include rising memory costs, which make it harder to absorb additional display costs, and the company is seeking more optimized solutions than COE and LTPO+. The key point consumers remain focused on is whether the 'near-borderless' design can be maintained.",
    tags_en: ["Apple", "iPhone Pro", "Near-Borderless", "COE", "LTPO+", "Smartphone Design"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/next-years-iphone-pro-models-have-near-borderless-design-report", lang: "EN" }
    ]
  },
  {
    id: "20260923-13611",
    trackers: ["os"],
    category: "Apple",
    title: "tvOS 27.2 預告新增 HomePod 環繞音效功能，提升 Apple TV 4K 影音體驗",
    summary: "Apple TV 用戶長期以來可將 HomePod 設定為音訊輸出喇叭。根據報導，tvOS 27.2 版本預計將大幅升級此功能，使其環繞音效功能現已在 Beta 版中可見。然而，有洩漏資訊指出，此功能最初可能在 tvOS 27.0 版本中就已存在，且初期版本可能尚未實現完整的環繞音效。此更新預計將為 Apple TV 4K 設備帶來更沉浸式的音訊體驗，讓用戶能更有效地利用 HomePod 的音質潛力。建議用戶關注 Apple 官方的正式發布，以確認功能細節與穩定性。",
    tags: ["tvOS", "Apple TV", "HomePod", "Apple 平台", "環繞音效"],
    title_en: "tvOS 27.2 Preview Adds HomePod Surround Sound Feature, Enhancing Apple TV 4K Multimedia Experience",
    summary_en: "Apple TV users have long been able to use a HomePod as an audio output speaker. According to reports, the tvOS 27.2 version is expected to significantly upgrade this functionality, with surround sound capabilities already visible in the Beta version. However, leaked information suggests that this feature may have initially existed in tvOS 27.0, though early versions might not have implemented full surround sound. This update is expected to bring a more immersive audio experience to Apple TV 4K devices, allowing users to better utilize the audio potential of the HomePod. Users are advised to monitor official Apple announcements for confirmation of feature details and stability.",
    tags_en: ["tvOS", "Apple TV", "HomePod", "Apple Platform", "Surround Sound"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/tvos-27-2-adds-new-homepod-surround-sound-feature-to-apple-tv-4k", lang: "EN" }
    ]
  },
  {
    id: "20260923-13612",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重大升級：Apple Mail 搜尋功能優化，提升搜尋相關性與準確性",
    summary: "Apple 在 iOS 27 版本中為其 Mail 應用程式帶來了重大功能升級，特別是優化了搜尋功能。新版本引入了新的排名系統，旨在讓使用者能更快速、更準確地找到收件箱深處的所需郵件。Apple 表示，新的搜尋功能能夠根據使用者的意圖（what you mean），而不僅僅是輸入的字詞來尋找結果。這項升級被認為是讓 Mail 搜尋功能達到應有水準的重大改進。使用者在使用前，應確保裝置已完成索引（Indexing）過程，以確保搜尋功能能達到最佳效果。此更新主要提升了使用者在電子郵件管理和資訊檢索的效率。",
    tags: ["iOS 27", "Apple Mail", "搜尋功能", "Apple 系統更新", "iOS"],
    title_en: "iOS 27 Major Upgrade: Apple Mail Search Function Optimized for Improved Relevance and Accuracy",
    summary_en: "Apple has introduced a significant feature upgrade to its Mail application in iOS 27, specifically optimizing the search functionality. The new version incorporates a novel ranking system designed to help users find desired emails deep within their inbox more quickly and accurately. Apple stated that the new search feature can find results based on the user's intent (what you mean), rather than solely on the typed keywords. This upgrade is considered a major improvement that brings the Mail search function up to expected standards. Users should ensure their device has completed the indexing process before use to guarantee optimal search performance. This update primarily enhances the efficiency of email management and information retrieval for users.",
    tags_en: ["iOS 27", "Apple Mail", "Search Function", "Apple System Update", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/ios-27-gives-apple-mail-my-most-wished-for-feature-upgrade", lang: "EN" }
    ]
  },
  {
    id: "20260923-13613",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 新增 iPhone Handoff 功能，實現單號跨機使用，但電信商支援狀況不一",
    summary: "Apple 近期推出 iPhone Handoff 新功能，允許用戶使用單一電話號碼在兩台 iPhone 之間智能切換，提升了跨設備的便利性。該功能需要電信營運商支援。目前，T-Mobile 是美國唯一支援此功能的電信商，而 Apple 預計 Verizon 將在年底前加入支援，其他電信商亦將陸續跟進。在國際市場，德國電信商 Telekom Germany 已成為該功能的合作夥伴。然而，文章指出 AT&T 似乎尚未有支援計畫，其回應更強調現有的 eSIM 激活與轉移選項，未能完全闡述 Handoff 的便利性。使用該功能的用戶體驗被形容為「神奇」，但 T-Mobile 對此功能收取每月費用。此功能對於提升用戶體驗具有重大潛力，但其普及性高度依賴電信商的配合與推動。",
    tags: ["Apple", "iPhone Handoff", "T-Mobile", "AT&T", "電信商", "iOS"],
    title_en: "Apple Adds iPhone Handoff Feature for Single Number Cross-Device Use, But Carrier Support Varies",
    summary_en: "Apple recently introduced the iPhone Handoff feature, which allows users to intelligently switch between two iPhones using a single phone number, enhancing cross-device convenience. This feature requires support from the mobile carrier. Currently, T-Mobile is the only carrier in the US supporting this feature, though Apple expects Verizon to add support by the end of the year, with other carriers expected to follow suit. In the international market, Germany's carrier Telekom Germany has become a partner for this feature. However, the article notes that AT&T does not appear to have a support plan, with its response emphasizing existing eSIM activation and transfer options rather than fully detailing the convenience of Handoff. Users who utilize this feature describe the experience as 'magical,' but T-Mobile charges a monthly fee for it. While this feature holds significant potential for improving user experience, its widespread adoption heavily relies on carrier cooperation and promotion.",
    tags_en: ["Apple", "iPhone Handoff", "T-Mobile", "AT&T", "Carrier", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/att-iphone-handoff-support", lang: "EN" }
    ]
  },
  {
    id: "20260923-13057",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Google推出AndroidX Security State，讓App能精準掌握裝置多元件修補狀態",
    summary: "傳統上，企業僅依賴裝置顯示的安全性修補程式等級（SPL）來判斷裝置安全性，但這無法全面掌握所有系統元件的修補狀況。為了解決此問題，Google近期推出了AndroidX旗下的Security State及Security State Provider程式庫穩定版本。Security State允許應用程式區分掌握Android系統、系統模組及核心等不同元件的修補狀態，並能比較目前安裝的修補等級與Android安全公告的修補等級，從而判斷元件是否缺少安全修補，甚至確認是否修補了特定CVE。這項能力對於銀行等高安全要求的應用情境極為重要，可讓應用程式在允許存取敏感資料或執行付款等操作前，先檢查裝置的修補情況。Security State Provider則提供標準化機制，讓OTA用戶端等更新機制能提供裝置可取得的安全更新資訊。目前Google Play系統更新已支援此功能，Google正與製造商合作擴大支援範圍。",
    tags: ["Google", "AndroidX", "Security State", "安全修補程式", "CVE", "應用程式安全"],
    title_en: "Google Launches AndroidX Security State, Allowing Apps to Precisely Track Device Component Patching Status",
    summary_en: "Traditionally, enterprises have relied solely on the device's displayed Security Patch Level (SPL) to assess device security, but this approach fails to comprehensively capture the patching status of all system components. To address this limitation, Google recently released the stable versions of AndroidX Security State and Security State Provider libraries. Security State allows applications to differentiate and track the patching status of various components—including the Android system, system modules, and the kernel. It can compare the currently installed patch level against the patch level specified in the Android security bulletin, thereby determining if a component is missing a security patch or even confirming if a specific CVE has been patched. This capability is crucial for high-security applications, such as banking, allowing the application to check the device's patching status before accessing sensitive data or executing payment operations. Meanwhile, Security State Provider offers a standardized mechanism, enabling update mechanisms like OTA clients to provide information on available security updates for the device. Google Play System Updates currently support this feature, and Google is collaborating with manufacturers to expand its support scope.",
    tags_en: ["Google", "AndroidX", "Security State", "Security Patch", "CVE", "Application Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179099", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13059",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Mandiant揭露AI程式開發助手遭劫持：攻擊者透過污染套件擴散蠕蟲竊取專有原始碼",
    summary: "資安公司Mandiant揭露一起針對軟體即服務（SaaS）業者的攻擊事件。攻擊者透過入侵並劫持開發人員使用的AI程式開發助手工作階段，開始竊取公司機密資訊。攻擊流程包括：利用AI助手建議安裝的外部污染PyPI套件，竊取資訊程式碼及GitHub OAuth權杖；隨後部署可自行擴散的Shai-Hulud蠕蟲，自動從內部程式碼儲存庫竊取專有原始碼。更嚴重的是，攻擊者還污染了受害企業官方命名空間的套件，導致另一名員工拉取後造成第二次感染。Mandiant建議企業應提高警覺，不應盲信AI開發助手推薦的第三方套件，建議利用密碼學雜湊值和核准清單進行驗證。同時，應限制開發工作站直接連線至外部套件來源，改用企業內部控管的套件儲存庫，並限制擴充套件存取API金鑰及長效OAuth權杖，以降低憑證遭竊風險。",
    tags: ["Mandiant", "AI程式開發助手", "PyPI", "Shai-Hulud蠕蟲", "OAuth權杖", "SaaS", "開源安全"],
    title_en: "Mandiant Reveals AI Coding Assistant Hijack: Attackers Use Package Pollution to Spread Worm and Steal Proprietary Source Code",
    summary_en: "Cybersecurity firm Mandiant disclosed an attack targeting a Software as a Service (SaaS) vendor. Attackers infiltrated and hijacked the AI coding assistant used by developers to steal corporate confidential information. The attack process involved: utilizing an external, polluted PyPI package suggested by the AI assistant to steal proprietary code and GitHub OAuth tokens; subsequently deploying a self-propagating Shai-Hulud worm to automatically exfiltrate proprietary source code from internal code repositories. More critically, the attackers also polluted packages within the victim company's official namespace, leading to a secondary infection when another employee pulled the compromised package. Mandiant advises organizations to raise awareness and avoid blindly trusting third-party packages recommended by AI coding assistants. They recommend using cryptographic hashes and approved whitelists for verification. Furthermore, companies should restrict developer workstations from direct connections to external package sources, opting instead for enterprise-controlled package repositories, and limiting the scope of extension access to API keys and long-lived OAuth tokens to mitigate credential theft risks.",
    tags_en: ["Mandiant", "AI Coding Assistant", "PyPI", "Shai-Hulud worm", "OAuth token", "SaaS", "Open Source Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179145", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13279",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "FBI/CISA警告：關鍵基礎設施應嚴格管理第三方ICS整合商的存取權限",
    summary: "本文件由FBI和CISA發布，旨在提醒關鍵基礎設施營運者，在使用第三方工業控制系統（ICS）整合商時，必須降低風險並最小化漏洞。ICS是監控和自動化物理過程的綜合網路，包括SCADA系統和可程式邏輯控制器等。營運者必須嚴格遵循「最小權限原則」（PoLP），確保第三方整合商僅擁有執行任務所需的最低存取權限。文章指出，若未實施PoLP，可能使關鍵基礎設施暴露給惡意網路行為者，導致設備和關鍵功能遭受破壞性攻擊。風險範例包括：惡意行為者可透過第三方整合商的網路，竊取客戶的SCADA資訊、ICS設備細節和系統圖，用於後續的破壞性攻擊。建議營運者應定期進行風險評估，特別關注整合商儲存的組織資料、資料的儲存地點（尤其涉及國外法規）以及是否提供遠端存取權。若考慮外國擁有者，更需納入地緣政治考量。",
    tags: ["CISA", "FBI", "ICS", "PoLP", "關鍵基礎設施", "供應鏈風險", "SCADA"],
    title_en: "FBI/CISA Warn Critical Infrastructure Must Strictly Manage Third-Party ICS Integrator Access",
    summary_en: "This document, issued by the FBI and CISA, serves as a reminder to critical infrastructure operators that they must mitigate risks and minimize vulnerabilities when utilizing third-party Industrial Control System (ICS) integrators. ICS is a comprehensive network used to monitor and automate physical processes, including SCADA systems and Programmable Logic Controllers (PLCs). Operators must strictly adhere to the 'Principle of Least Privilege' (PoLP), ensuring that third-party integrators only possess the minimum access rights necessary to perform their tasks. The article points out that failure to implement PoLP could expose critical infrastructure to malicious threat actors, potentially leading to destructive attacks on equipment and critical functions. Risk examples include: malicious actors potentially stealing client SCADA information, ICS equipment details, and system diagrams through the third-party integrator's network, for use in subsequent destructive attacks. It is recommended that operators conduct regular risk assessments, paying special attention to organizational data stored by the integrators, the location of data storage (especially concerning foreign regulations), and whether remote access is provided. If considering foreign ownership, geopolitical considerations must be included.",
    tags_en: ["CISA", "FBI", "ICS", "PoLP", "Critical Infrastructure", "Supply Chain Risk", "SCADA"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/resources-tools/resources/considerations-critical-infrastructure-operators-working-third-party-ics-integrators", lang: "EN" }
    ]
  },
  {
    id: "20260923-13298",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "研究揭露 GitLab 郵箱地址可被武器化，用於執行供應鏈攻擊與越權存取",
    summary: "Aikido Security 的研究指出，GitLab 為每個用戶自動分配的「來信箱地址」（Incoming email address）實際上包含高權限的存取 Token。攻擊者僅需取得此公開暴露的郵箱地址，便可利用其執行廣泛的用戶權限，對組織的公開與私有專案造成重大損害。該地址不僅用於創建 Issue，還可用於發送 Merge Requests 和 Patch Files，甚至可能觸發 CI/CD 工作流程，具備推送代碼至主分支（main branch）的能力。研究發現，這些 Token 具有非過期性，且可跨越所有受影響專案，甚至能繞過 IP 位址限制。若攻擊者能透過郵件修改專案路徑或 ID，可從公開專案擴展至私有專案。Aikido 建議組織應立即將這些存取 Token 視為秘密資產，進行輪替（rotation），並在開發環境和儲存庫中掃描，以降低攻擊面。GitLab 已更新 UI 和文件，但專家仍建議實施更嚴格的驗證機制，例如要求發件地址必須與 GitLab 帳號綁定，以大幅提高攻擊難度。",
    tags: ["GitLab", "供應鏈攻擊", "Incoming Mail Token", "CI/CD", "資安漏洞", "存取權限"],
    title_en: "Research Reveals GitLab Email Addresses Can Be Weaponized for Supply Chain Attacks and Privilege Escalation",
    summary_en: "Research by Aikido Security indicates that the 'Incoming email address' automatically assigned by GitLab to each user actually contains high-privilege access tokens. Attackers only need to obtain this publicly exposed email address to leverage broad user privileges, causing significant damage to an organization's public and private projects. This address can not only be used to create Issues but also to send Merge Requests and Patch Files, and potentially trigger CI/CD workflows, possessing the capability to push code to the main branch. The research found that these tokens are non-expiring and can span across all affected projects, even bypassing IP address restrictions. If an attacker can modify the project path or ID via email, they can escalate from public projects to private ones. Aikido advises organizations to immediately treat these access tokens as secret assets, perform rotation, and scan development environments and repositories to reduce the attack surface. Although GitLab has updated its UI and documentation, experts still recommend implementing stricter verification mechanisms, such as requiring the sending address to be bound to the GitLab account, to significantly increase the difficulty of attack.",
    tags_en: ["GitLab", "Supply Chain Attack", "Incoming Mail Token", "CI/CD", "Security Vulnerability", "Access Control"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/gitlab-email-addresses-supply-chain-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260923-13341",
    trackers: ["eu_cra", "security"],
    category: "供應鏈與開源安全",
    title: "OpenSSF 宣布 2026 秋季 Security Slam：推動開源專案達成資安衛生里程碑",
    summary: "Open Source Security Foundation (OpenSSF) 與 Cloud Native Computing Foundation (CNCF) 合作，宣布舉辦 2026 秋季 Security Slam。這是一個為期 30 天的虛擬挑戰活動，旨在協助開源專案提升其整體資安防護能力。活動將透過「Slam Library」提供的資源，引導參與者完成一系列的資安衛生里程碑。值得注意的是，本次活動的參與資格已大幅擴展，不再僅限於 CNCF 專案，任何開源專案皆可參與。除了傳統的資安衛生改善外，本次活動還新增了衡量專案準備度以符合歐盟《網路韌性法案》(EU CRA) 的新指標。參與者將在活動期間獲得客製化的認證和徽章，以證明其所達成的資安成就。活動時間為 2026 年 10 月 5 日至 11 月 6 日，相關資源將在 KubeCon + CloudNativeCon 北美舉行。",
    tags: ["OpenSSF", "CNCF", "Security Slam", "開源專案", "資安衛生", "EU CRA"],
    title_en: "OpenSSF Announces 2026 Autumn Security Slam: Driving Open Source Projects to Achieve Security Hygiene Milestones",
    summary_en: "The Open Source Security Foundation (OpenSSF) and the Cloud Native Computing Foundation (CNCF) have announced the 2026 Autumn Security Slam. This is a 30-day virtual challenge designed to help open source projects enhance their overall security posture. The activity will guide participants through a series of security hygiene milestones using resources provided by the \"Slam Library.\" Notably, participation eligibility has been significantly expanded; it is no longer limited to CNCF projects, and any open source project can participate. In addition to traditional security hygiene improvements, this year's event introduces new metrics to measure a project's readiness for compliance with the EU Cyber Resilience Act (EU CRA). Participants will receive customized certifications and badges during the event to validate their achieved security accomplishments. The event runs from October 5 to November 6, 2026, and related resources will be available at KubeCon + CloudNativeCon North America.",
    tags_en: ["OpenSSF", "CNCF", "Security Slam", "Open Source Projects", "Security Hygiene", "EU CRA"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/blog/2026/09/23/security-slam-2026-fall-edition", lang: "EN" }
    ]
  },
  {
    id: "20260923-13387",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "駭客利用 Terraform Provider 與 Go Module 進行惡意軟體散播，擴大供應鏈攻擊範圍",
    summary: "資安研究人員揭露，惡意軟體已透過 Go Modules 和 Terraform providers 這兩種方式進行散播，這是威脅行為者首次利用 HashiCorp 託管的中央儲存庫作為惡意負載的傳播媒介。這些惡意包裝與先前被歸因於北韓（DPRK）的 Graphalgo 戰役有重疊之處。攻擊鏈的部署方式極為複雜，包括透過假冒 Web3 公司的職位邀約，誘騙開發者在 GitHub 上引入包含惡意行為的依賴套件。惡意軟體執行時，需滿足特定加密操作，並從 Ethereum Sepolia testnet 上的智能合約獲取指令，同時透過 Slack 頻道保持第二個命令通道。該惡意軟體具備雙重命令與控制（C2）通道，利用區塊鏈的死信箱（dead drops）和 Slack bot token。它會收集系統資訊，並生成臨時公私鑰對，透過共享金鑰與受感染客戶端進行通訊，極具針對性。業界警告，雖然 Terraform Provider 的出現是新戰術，但其本質上仍是攻擊者尋找更直接的途徑獲取關鍵生產憑證，顯示攻擊範圍已超越 npm 和 PyPI。",
    tags: ["Terraform", "Go Modules", "HashiCorp", "供應鏈攻擊", "惡意軟體", "DPRK", "Graphalgo"],
    title_en: "Hackers Use Terraform Provider and Go Modules to Spread Malware, Expanding Supply Chain Attack Scope",
    summary_en: "Cybersecurity researchers have revealed that malware is being spread through two methods: Go Modules and Terraform providers. This marks the first time threat actors have used a central repository hosted by HashiCorp as a propagation medium for malicious payloads. These malicious packages overlap with the Graphalgo campaign previously attributed to North Korea (DPRK). The deployment of the attack chain is highly complex, involving the deception of developers into introducing malicious dependencies on GitHub through fake job offers from Web3 companies. When executed, the malware requires specific cryptographic operations and obtains instructions from a smart contract on the Ethereum Sepolia testnet, while maintaining a secondary command channel via a Slack channel. The malware possesses dual command and control (C2) channels, utilizing blockchain dead drops and Slack bot tokens. It collects system information and generates temporary public/private key pairs, communicating with the infected client using a shared key, making it highly targeted. Industry warnings indicate that while the appearance of Terraform Providers is a new tactic, its essence is still the attacker seeking a more direct path to obtain critical production credentials, showing that the attack scope has moved beyond npm and PyPI.",
    tags_en: ["Terraform", "Go Modules", "HashiCorp", "Supply Chain Attack", "Malware", "DPRK", "Graphalgo"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-use-malicious-terraform.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13391",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "MemTensor 供應鏈遭入侵：惡意 Go 植入物 sckit 竊取開發者憑證",
    summary: "資安研究機構指出，不詳的威脅行為者成功入侵了 MemTensor 在 npm 和 PyPI 上的兩個合法套件，植入了名為 sckit 的平台特定 Go 惡意程式。該植入物設計用於 Windows、Linux 和 macOS，旨在竊取敏感憑證，並將資料外洩至外部伺服器 skyleen[.]fr。\n\n受影響的套件包括 @memtensor/memos-cloud-openclaw-plugin 的版本 0.1.21、0.1.23 和 0.1.25，以及 MemoryOS 的版本 2.0.34。攻擊機制是利用套件的正常功能（如記憶回溯事件或模組匯入）來啟動惡意載荷。該植入物能夠收集開發機和 CI/CD 作業中的憑證，包括但不限於 .npmrc、AWS access keys、GitHub/GitLab tokens、npm/PyPI tokens 等。\n\n攻擊者據信透過操縱 MemTensor 的 GitHub Actions release pipelines，竊取了發布用的 npm 或 PyPI token。由於該植入物具備自我擴散能力，甚至包含在 npm 套件、Python 套件和 GitHub Actions 工作流程中安裝自身的模板。\n\n修復建議包括：立即將套件版本固定到安全的基準版本（npm 應為 0.1.20，PyPI 應為 2.0.33），輪換所有暴露的秘密憑證，清除任何 sckit 相關程序，並封鎖 skyleen[.]fr 及其所有子網域。",
    tags: ["MemTensor", "npm", "PyPI", "sckit", "供應鏈攻擊", "憑證竊取", "Go 語言"],
    title_en: "MemTensor Supply Chain Compromise: Malicious Go Implant sckit Steals Developer Credentials",
    summary_en: "Cybersecurity research organizations have pointed out that unknown threat actors successfully infiltrated two legitimate MemTensor packages on npm and PyPI, implanting a platform-specific Go malware named sckit. This implant is designed for Windows, Linux, and macOS, aiming to steal sensitive credentials and exfiltrate data to the external server skyleen[.]fr.\n\nThe affected packages include @memtensor/memos-cloud-openclaw-plugin versions 0.1.21, 0.1.23, and 0.1.25, and MemoryOS version 2.0.34. The attack mechanism leverages the packages' normal functionality (such as memory tracing events or module imports) to trigger the malicious payload. The implant is capable of collecting credentials from development machines and CI/CD workflows, including but not limited to .npmrc, AWS access keys, GitHub/GitLab tokens, and npm/PyPI tokens.\n\nAttackers are believed to have stolen the npm or PyPI token used for releases by manipulating MemTensor's GitHub Actions release pipelines. Due to the implant's self-propagating capability, it even includes templates to install itself within npm packages, Python packages, and GitHub Actions workflows.\n\nRemediation recommendations include: immediately pinning the package versions to safe baseline versions (npm should be 0.1.20, PyPI should be 2.0.33), rotating all exposed secret credentials, clearing any sckit-related processes, and blocking skyleen[.]fr and all its subdomains.",
    tags_en: ["MemTensor", "npm", "PyPI", "sckit", "Supply Chain Attack", "Credential Theft", "Go"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/compromised-memtensor-packages-deliver.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13504",
    trackers: ["os"],
    category: "Android",
    title: "Google Maps 更新 Android Auto 功能，提供路口交通號誌與停止標誌視覺預警",
    summary: "Google Maps 為 Android Auto 推出新功能更新，旨在提升駕駛者對前方路口狀況的預期性了解。此更新將在即將到來的路口，透過彈出式介面，明確顯示該處是交通號誌（traffic light）還是停止標誌（stop sign）。相較於過去僅將這些標誌作為地圖的固定元素顯示，新功能提供了更具實用性的即時視覺提示。此功能不僅在 Android Auto 上可用，甚至在手機主介面也已開始顯示，預計 Apple CarPlay 用戶亦會同步受益。這項微調被認為能為駕駛者提供極為直觀的資訊，特別是在駕駛陌生區域時，能大幅提升行車安全與便利性。此類更新通常屬於伺服器端部署，預計將逐步推廣至更多用戶。",
    tags: ["Google Maps", "Android Auto", "Android", "交通號誌", "Apple CarPlay", "系統更新"],
    title_en: "Google Maps Updates Android Auto with Visual Alerts for Intersection Traffic Lights and Stop Signs",
    summary_en: "Google Maps has released a new feature update for Android Auto, designed to enhance the driver's proactive understanding of upcoming intersection conditions. This update will use a pop-up interface to clearly display whether an upcoming intersection is controlled by a traffic light or a stop sign. Unlike previous versions that merely displayed these signs as static map elements, the new feature provides more practical, real-time visual cues. This functionality is not only available on Android Auto but is also beginning to appear on the phone's main screen, with Apple CarPlay users expected to benefit simultaneously. This refinement is expected to provide drivers with highly intuitive information, significantly improving driving safety and convenience, especially when navigating unfamiliar areas. Such updates are typically deployed server-side and are expected to roll out gradually to more users.",
    tags_en: ["Google Maps", "Android Auto", "Android", "Traffic Light", "Apple CarPlay", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/23/google-maps-traffic-lights-stop-signs-update-android-auto", lang: "EN" }
    ]
  },
  {
    id: "20260923-13795",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 應用程式漏洞：Arc Search 在背景模式下可透過偽造 UI 元素進行釣魚攻擊",
    summary: "Arc Search 應用程式在 Android 系統版本 1.12.10 之前的版本中存在一個安全漏洞。此漏洞允許遠端攻擊者透過精心設計的網站，在應用程式背景運行時，當頁面進入全螢幕模式時，無法顯示完整的通知。攻擊者可以利用此缺陷渲染偽造的用戶介面元素，例如偽造的網址列。這會誤導使用者相信顯示內容的來源，從而大幅提高使用者遭遇網路釣魚攻擊的風險。修補建議是升級至 Arc Search 應用程式版本 1.12.10 或更高版本，以確保全螢幕通知的正確顯示，防止攻擊者進行 UI 欺騙。",
    tags: ["Arc Search", "Android", "CVE-2026-94183", "釣魚攻擊", "UI 欺騙", "背景模式"],
    title_en: "Android Application Vulnerability: Arc Search Allows Phishing Attacks via Spoofed UI Elements in Background Mode",
    summary_en: "The Arc Search application contains a security vulnerability in versions prior to Android system version 1.12.10. This vulnerability allows a remote attacker, through a carefully designed website, to render spoofed user interface elements, such as a fake address bar, when the application is running in the background and the page enters full-screen mode, preventing the complete display of notifications. This can mislead users into believing the source of the displayed content, significantly increasing the risk of users falling victim to phishing attacks. The recommended remediation is to upgrade to Arc Search application version 1.12.10 or later to ensure the correct display of full-screen notifications and prevent UI deception by attackers.",
    tags_en: ["Arc Search", "Android", "CVE-2026-94183", "Phishing Attack", "UI Deception", "Background Mode"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-94183", lang: "EN" }
    ]
  },
  {
    id: "20260923-13056",
    trackers: ["security"],
    category: "前瞻技術",
    title: "澳洲通訊局（ASD）公布PQC轉型第四階段建議：企業需實施系統升級與混合方案",
    summary: "澳洲通訊局（ASD）已公布後量子密碼學（PQC）轉型系列第四階段建議，標誌著轉型進入實際系統調整的實作階段。企業在實施此階段時，不僅需要更換密碼演算法，還可能必須更新或修補既有應用程式、裝置及平臺，並調整密碼學函式庫、通訊協定與組態。ASD提醒，無法支援PQC的元件可能需要更換，建議企業可考慮更換為支援PQC的產品。由於PQC轉型需分階段進行，不同系統間的密碼學機制並存可能導致相容性問題，因此建議企業應進行充分的測試與驗證。在過渡期，可採用結合傳統與PQC的混合方案，但ASD強調這僅為過渡措施，最終目標仍是純PQC。此外，ASD特別提醒，在OT、IoT、實體門禁及建築管理系統等設備，由於使用年限長且功能更新困難，企業應積極與供應商協作，規劃升級或設備更換，以應對PQC轉型需求。G7國家亦呼籲政府與企業加快PQC轉型，建議政府將量子安全要求納入公共採購條件。",
    tags: ["PQC", "後量子密碼學", "ASD", "量子安全", "OT", "G7"],
    title_en: "Australian Signals Directorate (ASD) Releases Phase Four PQC Transition Recommendations: Enterprises Must Implement System Upgrades and Hybrid Schemes",
    summary_en: "The Australian Signals Directorate (ASD) has released the fourth phase of its Post-Quantum Cryptography (PQC) transition recommendations, marking the transition into a practical system adjustment phase. When implementing this phase, enterprises may need to do more than just replace cryptographic algorithms; they may also have to update or patch existing applications, devices, and platforms, and adjust cryptographic libraries, communication protocols, and configurations. ASD cautions that components that do not support PQC may require replacement, and advises enterprises to consider upgrading to PQC-supporting products. Since the PQC transition must be phased, the coexistence of cryptographic mechanisms between different systems may lead to compatibility issues, thus enterprises are advised to conduct thorough testing and validation. During the transition period, adopting a hybrid scheme combining traditional and PQC methods is acceptable, but ASD emphasizes that this is only a temporary measure, and the ultimate goal remains pure PQC. Furthermore, ASD specifically reminds enterprises that for equipment such as OT, IoT, physical access, and building management systems—due to their long service life and difficulty in functional updates—they should actively collaborate with suppliers to plan for upgrades or equipment replacement to meet PQC transition requirements. G7 nations have also called on governments and enterprises to accelerate PQC transition, recommending that governments incorporate quantum security requirements into public procurement conditions.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "ASD", "Quantum Security", "OT", "G7"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179101", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260923-13218",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic發布Opus 5.5，與OpenAI推出GPT-6 Sol/Luna，AI模型競爭加速與成本優化",
    summary: "隨著AI模型領域的競爭日益激烈，Anthropic和OpenAI兩大公司相繼發布了新一代模型。Anthropic推出了Opus 5.5，稱其為迄今最強的表現模型，在軟體任務和代理工作方面表現出色，並在AI Index中獲得高分。該模型相較於前代Opus 5，在成本和速度上都有顯著提升，例如輸入和輸出 Token 的成本分別降低了 40% 和 20%。另一方面，OpenAI也發布了GPT-6 Sol和Luna，並透過大幅降低 API 價格（相較於 GPT-5.6 的促銷價格，Sol 和 Luna 的價格分別降低了 50%）來吸引用戶。兩家公司都在強調模型在對齊（alignment）和安全性上的改進，同時也推出了防止模型被複製的保護機制。儘管有業界人士呼籲放慢前沿 AI 的發展速度，但兩大巨頭的模型發布節奏仍在加速，顯示市場競爭正從單純的性能比拼，轉向成本效益和商業應用層面的競爭。",
    tags: ["Anthropic", "OpenAI", "Opus 5.5", "GPT-6", "AI模型", "LLM"],
    title_en: "Anthropic Releases Opus 5.5, OpenAI Launches GPT-6 Sol/Luna, Accelerating AI Model Competition and Cost Optimization",
    summary_en: "As competition in the AI model domain intensifies, two major companies, Anthropic and OpenAI, have successively released new generations of models. Anthropic introduced Opus 5.5, which it claims is its most powerful model to date, excelling in software tasks and agentic workflows, and achieving high scores in the AI Index. Compared to the previous Opus 5, the model shows significant improvements in both cost and speed; for instance, the cost for input and output tokens has been reduced by 40% and 20%, respectively. Meanwhile, OpenAI also launched GPT-6 Sol and Luna, attracting users by significantly lowering API prices (Sol and Luna prices are reduced by 50% compared to the promotional price of GPT-5.6). Both companies emphasize improvements in model alignment and safety, while also introducing protective mechanisms to prevent model replication. Although industry insiders have called for a slowdown in the pace of frontier AI development, the model release cadence of these two giants continues to accelerate, indicating that market competition is shifting from a mere performance comparison to one focused on cost-effectiveness and commercial application layers.",
    tags_en: ["Anthropic", "OpenAI", "Opus 5.5", "GPT-6", "AI Model", "LLM"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/09/23/frontier-ai-keeps-racing-despite-calls-to-slow-down/5298448", lang: "EN" }
    ]
  },
  {
    id: "20260923-13296",
    trackers: ["security"],
    category: "前瞻技術",
    title: "SASE架構整合網路與安全：打造雲端單一管理平台",
    summary: "隨著企業運算向邊緣（Edge）和混合雲端發展，傳統的防火牆和分散式安全設備已難以應對複雜的網路安全挑戰。安全存取服務邊緣（SASE）架構應對此問題，它將軟體定義網路（SD-WAN）、威脅防禦、存取控制和應用程式安全整合到一個統一的雲端平台。SASE的基礎是全球分散的PoPs（點），能將安全和網路強制執行點部署到離使用者和資料源最近的地方。其核心功能包括：雲端防火牆作為服務（FWaaS）、安全網頁閘道（SWG）、雲端存取安全代理（CASB）和零信任網路存取（ZTNA）。這些功能透過單一的統一策略引擎管理，可根據使用者身份、設備狀態和地理位置等情境數據實時應用自適應控制，取代了傳統多設備、多策略的複雜架構。SASE能大幅簡化部署流程，讓新分行能在數小時內連接，並為物聯網（IoT）設備提供零信任保護，實現端到端的可視化監控。",
    tags: ["SASE", "SD-WAN", "零信任", "FWaaS", "CASB", "雲端安全"],
    title_en: "SASE Architecture Integrates Networking and Security: Building a Cloud Single Management Platform",
    summary_en: "As enterprise computing moves toward the Edge and hybrid cloud, traditional firewalls and distributed security devices struggle to address complex network security challenges. The Secure Access Service Edge (SASE) architecture addresses this problem by integrating Software-Defined Wide Area Networking (SD-WAN), threat defense, access control, and application security into a unified cloud platform. SASE is built on a global network of Points of Presence (PoPs), enabling the deployment of security and network enforcement points closer to the users and data sources. Its core functionalities include: Firewall as a Service (FWaaS), Secure Web Gateway (SWG), Cloud Access Security Broker (CASB), and Zero Trust Network Access (ZTNA). These functions are managed through a single, unified policy engine, allowing for real-time adaptive control based on contextual data such as user identity, device status, and geographical location, thereby replacing complex traditional multi-device, multi-policy architectures. SASE significantly simplifies deployment processes, allowing new branches to connect within hours, and provides zero trust protection for Internet of Things (IoT) devices, achieving end-to-end visibility and monitoring.",
    tags_en: ["SASE", "SD-WAN", "Zero Trust", "FWaaS", "CASB", "Cloud Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cloud-security/sase-converges-network-security-one-cloud", lang: "EN" }
    ]
  },
  {
    id: "20260923-13300",
    trackers: ["security"],
    category: "前瞻技術",
    title: "駭客透過「毒化」AI聊天機器人進行大規模虛假資訊與網路釣魚攻擊",
    summary: "資安研究機構 Vigilance Security 揭露了一場名為「Dark Sourcery」的惡意活動。攻擊者透過在網路上大量散播精心優化的假資訊、假支援頁面、假聯絡方式等內容，目標是「毒化」ChatGPT、Gemini 等主流 AI 聊天機器人。攻擊者利用搜尋引擎優化（SEO）等技術，提高 AI 檢索到這些惡意內容的機率，使 AI 將假資訊（如假電話號碼、假電子郵件、假登入頁面）呈現給使用者，使其看起來像是權威或可信的事實。這種攻擊方式不同於傳統的提示注入（Prompt Injection），它繞過了 AI 的防禦機制，直接將虛假資訊作為 AI 回答的一部分。受影響的品牌包括 Delta、Lufthansa、Chase、Airbnb 等數百家公司。專家建議使用者切勿盲信 AI 提供的資訊，應主動驗證所有結果。對於企業而言，應監控 AI 代理的運行時行為，並比對所有關鍵細節（如電話號碼、網址）是否與官方記錄一致。",
    tags: ["AI 聊天機器人", "ChatGPT", "Gemini", "虛假資訊", "網路釣魚", "SEO poisoning", "Vigilance Security"],
    title_en: "Hackers 'Poison' AI Chatbots for Large-Scale Disinformation and Phishing Attacks",
    summary_en: "Cybersecurity research firm Vigilance Security has uncovered a malicious campaign dubbed 'Dark Sourcery.' Attackers aim to 'poison' mainstream AI chatbots like ChatGPT and Gemini by widely disseminating highly optimized fake information, fake support pages, and fake contact details online. The attackers utilize techniques such as Search Engine Optimization (SEO) to increase the probability that the AI retrieves this malicious content, causing the AI to present false information (such as fake phone numbers, fake emails, or fake login pages) to users, making it appear authoritative or credible. This attack method differs from traditional Prompt Injection, as it bypasses the AI's defense mechanisms by directly incorporating false information into the AI's response. Affected brands include hundreds of companies such as Delta, Lufthansa, Chase, and Airbnb. Experts advise users not to blindly trust information provided by AI, and instead to proactively verify all results. For enterprises, it is recommended to monitor the runtime behavior of AI agents and cross-reference all critical details (such as phone numbers or URLs) against official records.",
    tags_en: ["AI Chatbots", "ChatGPT", "Gemini", "Disinformation", "Phishing", "SEO poisoning", "Vigilance Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/attackers-manipulate-ai-chatbots-mass-disinformation-phishing-campaign", lang: "EN" }
    ]
  },
  {
    id: "20260923-13393",
    trackers: ["security"],
    category: "前瞻技術",
    title: "CTF.ae推出XRanges for AI，提供多維度評估框架，檢測自主資安代理的真實漏洞發現能力",
    summary: "隨著自主資安代理（Autonomous security agents）在漏洞搜尋方面日益強大，業界缺乏標準化且可靠的評估方法。XRanges for AI，由CTF.ae開發，旨在解決此「回饋循環問題」。該平台提供一個完整的評估工作空間，包含兩大部分：一個包含多服務、具備業務邏輯和注入漏洞的基準目標庫，以及一個透過OpenTelemetry進行儀表化（Instrumentation）的層。XRanges for AI 不僅記錄代理的行為，更透過四個獨立的信號進行即時評分，確保評分獨立性。這四個信號包括：1. **Coverage（覆蓋率）**：衡量代理探索目標的廣度，指出其未觸及的「盲點」；2. **Boundaries（邊界）**：檢查代理是否遵守預設的「交戰規則」，防止其破壞環境；3. **Exploited（利用）**：精確追蹤代理成功利用的漏洞鏈階段，而非僅依賴報告；4. **Integrity（完整性）**：每分鐘運行檢查，確保目標環境在攻擊過程中仍保持功能正確性。這套系統能為AI工程師提供一個全面、客觀的評估矩陣，大幅提升資安測試的可靠性。",
    tags: ["XRanges for AI", "自主資安代理", "OpenTelemetry", "漏洞評估", "AI 安全", "CTF.ae"],
    title_en: "CTF.ae Launches XRanges for AI, Offering a Multi-Dimensional Evaluation Framework to Test Autonomous Security Agents' True Vulnerability Discovery Capabilities",
    summary_en: "As autonomous security agents become increasingly powerful in vulnerability searching, the industry lacks standardized and reliable evaluation methods. XRanges for AI, developed by CTF.ae, aims to solve this 'feedback loop problem.' The platform provides a complete evaluation workspace consisting of two parts: a baseline target repository with multiple services, business logic, and injection vulnerabilities, and a layer instrumented via OpenTelemetry. XRanges for AI not only records the agent's behavior but also provides real-time scoring through four independent signals, ensuring scoring independence. These four signals include: 1. **Coverage**: Measures the breadth of the agent's exploration of the target, identifying 'blind spots' it has not reached; 2. **Boundaries**: Checks whether the agent adheres to predefined 'rules of engagement,' preventing it from damaging the environment; 3. **Exploited**: Precisely tracks the stages of the vulnerability chain successfully exploited by the agent, rather than relying solely on reports; and 4. **Integrity**: Runs checks every minute to ensure the target environment maintains functional correctness during the attack process. This system provides AI engineers with a comprehensive and objective evaluation matrix, significantly enhancing the reliability of security testing.",
    tags_en: ["XRanges for AI", "Autonomous security agents", "OpenTelemetry", "Vulnerability evaluation", "AI security", "CTF.ae"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/545-hackers-tested-it-first-now-xranges.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13394",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic發布Opus 5.5，OpenAI推出GPT-6 Sol/Luna，強調AI模型對齊與安全提升",
    summary: "兩大AI公司Anthropic與OpenAI於週二宣布推出新一代模型，並共同強調持續投入提升模型對齊（alignment）能力以應對潛在風險。Anthropic的Opus 5.5相較於前代，在自動行為審計中表現出更低的風險行為，特別是在抵抗提示注入（prompt injection）方面更為穩健。該模型在模擬安全測試中，繞過隔離邊界（containment boundaries）的嘗試頻率顯著降低，且大部分嘗試的嚴重性為低級且自我報告。OpenAI則推出了GPT-6 Sol和GPT-6 Luna，這些模型在對齊方面也比前代有顯著提升，例如在模擬訊息板上執行未經授權動作的比例大幅下降。面對AI模型帶來的安全疑慮，Anthropic CEO Dario Amodei呼籲放緩技術進程，優先考慮責任開發。Google DeepMind的Demis Hassabis也提議成立美國主導的前沿AI標準機構，要求對模型進行嚴格的網路安全和高風險領域評估。OpenAI亦承諾讓第三方團體在訓練、評估和部署過程中審查其AI模型，以建立更透明、更國際化的安全標準。",
    tags: ["Anthropic", "OpenAI", "Opus 5.5", "GPT-6", "AI對齊", "Prompt Injection", "AGI"],
    title_en: "Anthropic Releases Opus 5.5; OpenAI Launches GPT-6 Sol/Luna, Emphasizing AI Model Alignment and Safety Improvements",
    summary_en: "The two major AI companies, Anthropic and OpenAI, announced the launch of their new generation models on Tuesday, jointly emphasizing their continued commitment to improving model alignment capabilities to address potential risks. Anthropic's Opus 5.5 exhibits lower risk behavior in automated behavioral audits compared to its predecessor, showing particular robustness against prompt injection. In simulated security tests, the frequency of attempts to bypass containment boundaries significantly decreased, and most attempts were reported as low severity. OpenAI introduced GPT-6 Sol and GPT-6 Luna, models that also show significant improvements in alignment compared to previous generations, such as a substantial reduction in the proportion of unauthorized actions executed on simulated message boards. Addressing the security concerns posed by AI models, Anthropic CEO Dario Amodei called for a slowdown in technological progress, prioritizing responsible development. Demis Hassabis of Google DeepMind also proposed the establishment of a US-led advanced AI standards body, requiring rigorous cybersecurity and high-risk domain assessments for models. OpenAI also committed to allowing third-party groups to review its AI models during training, evaluation, and deployment, aiming to establish more transparent and international safety standards.",
    tags_en: ["Anthropic", "OpenAI", "Opus 5.5", "GPT-6", "AI Alignment", "Prompt Injection", "AGI"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/anthropic-and-openai-models-still.html", lang: "EN" }
    ]
  },
  {
    id: "20260923-13503",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft發布Surface Pro 12-inch與Surface Laptop 13-inch新機型，搭載Snapdragon X2 Plus晶片",
    summary: "Microsoft宣布將推出Surface Pro 12-inch和Surface Laptop 13-inch的更新機型，主要升級點為搭載Qualcomm的Snapdragon X2 Plus晶片。本次更新的Surface Pro 12-inch除了升級晶片外，還提升了螢幕亮度達25%，並宣稱電池效率提升30%。新機型將從$1,149美元起售，並提供可選配的5G版本。此外，兩款機型均移除8GB RAM選項，最低配置為16GB或24GB RAM，儲存容量為256GB或512GB。Surface Laptop 13-inch的升級價格為$1,199美元。Microsoft同時推出了新款配備觸覺回饋和可客製化Copilot按鈕的Surface Mouse，預計於10月13日上市，並與新的「Microsoft Ink Canvas」應用程式一同發布。",
    tags: ["Microsoft", "Surface Pro 12-inch", "Surface Laptop 13-inch", "Snapdragon X2 Plus", "Qualcomm", "AI 裝置"],
    title_en: "Microsoft releases updated Surface Pro 12-inch and Surface Laptop 13-inch models featuring the Snapdragon X2 Plus chip",
    summary_en: "Microsoft announced the launch of updated versions of the Surface Pro 12-inch and Surface Laptop 13-inch, with the primary upgrade being the integration of Qualcomm's Snapdragon X2 Plus chip. In addition to the chip upgrade, the Surface Pro 12-inch enhances screen brightness by up to 25% and claims a 30% improvement in battery efficiency. The new models will start at $1,149 and offer an optional 5G version. Furthermore, both models remove the 8GB RAM option, with minimum configurations set at 16GB or 24GB RAM, and storage starting at 256GB or 512GB. The upgraded Surface Laptop 13-inch is priced at $1,199. Microsoft also introduced a new Surface Mouse featuring haptic feedback and a customizable Copilot button, expected to launch on October 13th, alongside the new \"Microsoft Ink Canvas\" application.",
    tags_en: ["Microsoft", "Surface Pro 12-inch", "Surface Laptop 13-inch", "Snapdragon X2 Plus", "Qualcomm", "AI Devices"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/23/microsoft-surface-pro-12-inch-5g-laptop-13-snapdragon-x2", lang: "EN" }
    ]
  },
  {
    id: "20260923-13505",
    trackers: ["os"],
    category: "重點關注",
    title: "高通發表 Snapdragon Sound Elite Gen 2，專為 AI 音訊穿戴裝置設計",
    summary: "高通（Qualcomm）宣布推出 Snapdragon Sound Elite Gen 2，這款系統單晶片（SoC）專門用於下一代音訊穿戴裝置（hearables）。該晶片旨在超越傳統音訊性能，重點提升 AI 處理能力，特別強調能為配備攝影機的耳機提供情境影像識別（contextual image recognition）功能。相較於前代，Snapdragon Sound Elite Gen 2 可提供高達 2 倍的裝置端 AI 性能，同時將功耗降低高達 40%。這使得 AI 穿戴裝置（如 Android XR 設備）能夠在本地運行複雜模型，並減少充電頻率。除了 AI 性能，該晶片還支援 Wi-Fi 6E，並保留了 aptX 和 XPAN 連接性，同時利用高通第五代協議提升主動降噪（ANC）效果。該 SoC 可驅動傳統耳機、開放式混合式音訊設計、具備攝影機的設備、音訊眼鏡及未來多模態穿戴裝置等。雖然原文未提及具體搭載產品，但預計將在 Android XR 設備等市場應用。",
    tags: ["Qualcomm", "Snapdragon Sound Elite Gen 2", "AI 穿戴裝置", "SoC", "Android XR", "Wi-Fi 6E"],
    title_en: "Qualcomm Unveils Snapdragon Sound Elite Gen 2, Designed for AI Audio Wearables",
    summary_en: "Qualcomm has announced the launch of Snapdragon Sound Elite Gen 2, a System-on-Chip (SoC) specifically designed for next-generation audio wearables (hearables). This chip aims to surpass traditional audio performance by focusing on enhanced AI processing capabilities, particularly emphasizing contextual image recognition for headphones equipped with cameras. Compared to its predecessor, Snapdragon Sound Elite Gen 2 offers up to double the on-device AI performance while reducing power consumption by up to 40%. This enables AI wearables (such as Android XR devices) to run complex models locally, thereby reducing the frequency of charging. In addition to AI performance, the chip supports Wi-Fi 6E and retains aptX and XPAN connectivity, while utilizing Qualcomm's fifth-generation protocol to improve Active Noise Cancellation (ANC) effects. The SoC can power traditional headphones, open-fit hybrid audio designs, camera-equipped devices, audio glasses, and future multimodal wearables. Although the original text does not mention specific equipped products, it is expected to be applied in market segments such as Android XR devices.",
    tags_en: ["Qualcomm", "Snapdragon Sound Elite Gen 2", "AI Wearables", "SoC", "Android XR", "Wi-Fi 6E"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/23/qualcomm-announces-snapdragon-sound-elite-gen-2", lang: "EN" }
    ]
  },
  {
    id: "20260923-13513",
    trackers: ["os"],
    category: "重點關注",
    title: "小米發布 Xiaomi 18 Pro/Pro Max：搭載 Snapdragon 8 Elite Gen 6，主打隱私顯示屏功能",
    summary: "小米（Xiaomi）在中國市場發布了全新的 Xiaomi 18 Pro 和 Xiaomi 18 Pro Max 旗艦手機。這兩款設備都採用最新的 Snapdragon 晶片組，並強調了「隱私顯示屏」（Privacy Display）功能，這項技術在小米的旗艦和輕巧型號上都得到應用，甚至加入了前置鏡頭偵測周圍觀察者、或在人潮擁擠的公共場所自動啟動隱私模式的進階功能。規格方面，Pro Max 配備了更強大的 Snapdragon 8 Elite Extreme Gen 6 晶片，以及驚人的 8,500 mAh 電池。兩款手機都配備了 200MP 主鏡頭、200MP 3.2x 望遠鏡和 50MP 超廣角鏡頭。Pro Max 的螢幕尺寸和電池容量均優於 Pro。雖然小米 17 Pro 之前未在國際發布，但小米已確認 18 Pro 系列將首次在海外市場亮相，預計將帶來更完整的全球化體驗。",
    tags: ["Xiaomi", "Xiaomi 18 Pro", "Xiaomi 18 Pro Max", "Snapdragon 8 Elite Gen 6", "隱私顯示屏", "Android"],
    title_en: "Xiaomi Launches Xiaomi 18 Pro/Pro Max: Featuring Snapdragon 8 Elite Gen 6 and Privacy Display",
    summary_en: "Xiaomi has launched the new Xiaomi 18 Pro and Xiaomi 18 Pro Max flagship phones in the Chinese market. Both devices utilize the latest Snapdragon chipset and emphasize the 'Privacy Display' feature. This technology is applied across Xiaomi's flagship and compact models, even incorporating advanced features such as detecting nearby observers via the front camera or automatically activating privacy mode in crowded public places. In terms of specifications, the Pro Max is equipped with the more powerful Snapdragon 8 Elite Extreme Gen 6 chip and an impressive 8,500 mAh battery. Both phones feature a 200MP main camera, a 200MP 3.2x telephoto lens, and a 50MP ultra-wide-angle camera. The Pro Max boasts a larger screen size and battery capacity compared to the Pro. Although the Xiaomi 17 Pro was not previously released internationally, Xiaomi has confirmed that the 18 Pro series will debut in overseas markets for the first time, promising a more complete global experience.",
    tags_en: ["Xiaomi", "Xiaomi 18 Pro", "Xiaomi 18 Pro Max", "Snapdragon 8 Elite Gen 6", "Privacy Display", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/23/xiaomi-18-pro-official-specs-features", lang: "EN" }
    ]
  },
  {
    id: "20260923-13596",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI訴訟：指控Apple Intelligence整合ChatGPT表現不佳，並要求法庭在審判前裁決",
    summary: "OpenAI透過法律文件指出，自2024年與Apple合作將ChatGPT整合至Apple Intelligence後，其市場表現不如預期，並表示對iPhone用戶的興趣度感到失望。OpenAI原先預期能從與Apple的合作中獲得「光環效應」和更多訂閱用戶，但根據其文件，ChatGPT整合推出後不久便「開局緩慢」，到2025年夏季已明顯「表現不佳」。此外，OpenAI的訴訟文件還指出，Apple將ChatGPT整合預設關閉，可能是導致用戶採用率低的原因之一。在法律戰方面，OpenAI同時也反駁了SpaceXAI提出的反壟斷指控，並要求法官在正式審判前就SpaceXAI的指控做出裁決。此案涉及AI生態系競爭、平台整合策略，以及科技巨頭之間的商業合作與法律糾紛。",
    tags: ["OpenAI", "Apple Intelligence", "ChatGPT", "SpaceXAI", "法律訴訟", "AI生態系"],
    title_en: "OpenAI Sues: Alleges Poor Integration of ChatGPT into Apple Intelligence, Seeks Pre-Trial Ruling",
    summary_en: "OpenAI filed legal documents stating that the market performance of ChatGPT, following its integration into Apple Intelligence in 2024, has been below expectations, and expressing disappointment regarding user interest among iPhone users. OpenAI had initially anticipated gaining a 'halo effect' and more subscribers from the partnership with Apple. However, according to its filing, ChatGPT's integration launched slowly and has shown noticeable 'poor performance' by Summer 2025. Furthermore, OpenAI's lawsuit documents point out that Apple setting the ChatGPT integration to be disabled by default might be one reason for the low user adoption rate. In the legal battle, OpenAI also refuted the anti-monopoly allegations raised by SpaceXAI, and requested the judge to rule on SpaceXAI's claims before the formal trial. This case involves AI ecosystem competition, platform integration strategies, and commercial cooperation and legal disputes among tech giants.",
    tags_en: ["OpenAI", "Apple Intelligence", "ChatGPT", "SpaceXAI", "Lawsuit", "AI Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/openai-says-apple-intelligence-users-showed-little-interest-in-chatgpt-integration", lang: "EN" }
    ]
  },
  {
    id: "20260923-13599",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Podcasts訂閱服務將擴展支援獨家影片內容，提供創作者更多變現管道",
    summary: "Apple宣布，Apple Podcasts訂閱服務即將擴展支援影片內容。此舉讓創作者除了提供付費音訊內容外，未來還能為訂閱者提供獨家的影片節目、無廣告影片、搶先觀看內容和額外獎勵影片。此功能將整合到現有的付費訂閱系統中，讓創作者能更輕鬆地透過單一平台提供音訊與影片的複合式內容。Apple指出，這能讓創作者建立更直接的聽眾商業模式，並提供更流暢的內容交付體驗。Apple目前正與託管服務供應商合作，以確保整合的順暢性，並預計將在未來幾個月內公布更多細節。",
    tags: ["Apple Podcasts", "Apple", "訂閱服務", "影片內容", "內容創作者", "iOS"],
    title_en: "Apple Podcasts Subscription Service to Expand Support for Exclusive Video Content, Offering Creators More Monetization Channels",
    summary_en: "Apple has announced that the Apple Podcasts subscription service will soon expand to support video content. This development means that creators will be able to offer subscribers not only paid audio content but also exclusive video shows, ad-free videos, early access content, and bonus videos. This feature will be integrated into the existing paid subscription system, allowing creators to more easily deliver combined audio and video content through a single platform. Apple noted that this will enable creators to build a more direct audience business model and provide a smoother content delivery experience. Apple is currently collaborating with hosting service providers to ensure smooth integration and expects to announce more details in the coming months.",
    tags_en: ["Apple Podcasts", "Apple", "Subscription Service", "Video Content", "Content Creator", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/apple-podcasts-will-soon-let-creators-offer-exclusive-videos-to-subscribers", lang: "EN" }
    ]
  },
  {
    id: "20260923-13605",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI升級ChatGPT語音模式：整合GPT-6模型、插件與ChatGPT Work功能",
    summary: "OpenAI宣布對ChatGPT語音模式進行多方面升級，顯著提升其功能性與應用廣度。本次更新主要包含三個重大改進：首先，ChatGPT語音模式現可由OpenAI的三個GPT-6模型驅動，包括能力最強的Astra，以及升級至GPT-6的Sol和Luna中型與小型智能模型。其次，語音模式現已支援插件（plugins）功能，可整合電子郵件、行事曆和Slack等外部服務，解決了此前語音模式與外部工具連接的斷層問題。最後，ChatGPT語音模式現已與ChatGPT Work整合，該系統是OpenAI的雲端連接代理式系統，可跨多平台使用。這些升級旨在讓用戶能更全面地透過語音指令操作，提升AI助理的實用性與整合度。",
    tags: ["OpenAI", "ChatGPT", "GPT-6", "語音模式", "插件", "ChatGPT Work"],
    title_en: "OpenAI Upgrades ChatGPT Voice Mode: Integrating GPT-6 Models, Plugins, and ChatGPT Work Functionality",
    summary_en: "OpenAI has announced multiple upgrades to the ChatGPT voice mode, significantly enhancing its functionality and application scope. This update includes three major improvements: First, the ChatGPT voice mode can now be powered by three GPT-6 models from OpenAI, including the most capable Astra, and the upgraded medium and small intelligence models, Sol and Luna. Second, the voice mode now supports plugins, allowing it to integrate with external services such as email, calendar, and Slack, resolving previous connectivity gaps between the voice mode and external tools. Finally, the ChatGPT voice mode is now integrated with ChatGPT Work, which is OpenAI's cloud-connected agentic system usable across multiple platforms. These upgrades aim to allow users to operate more comprehensively through voice commands, boosting the practical utility and integration of the AI assistant.",
    tags_en: ["OpenAI", "ChatGPT", "GPT-6", "Voice Mode", "Plugins", "ChatGPT Work"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/23/openai-just-upgraded-chatgpt-voice-in-three-ways", lang: "EN" }
    ]
  },
  {
    id: "20260923-13637",
    trackers: ["os"],
    category: "重點關注",
    title: "Surface Pro 12-inch與Surface Laptop 13-inch發表，搭載Snapdragon X2 Plus，強調AI與高效能",
    summary: "微軟（Microsoft）在Snapdragon Summit上發表了新一代Surface Pro 12-inch和Surface Laptop 13-inch，這兩款設備搭載了Snapdragon X2 Plus處理器。新機型強調在輕薄設計下提供更高的能效、更快的圖形處理能力，以及大幅提升的裝置端AI運算能力。相較於前代，新機型在Office生產力工作負載上提升高達17%，圖形性能提升超過60%，而NPU的本地AI推論速度提升高達95%。Surface Pro 12-inch具備Microsoft Ink Canvas功能，提供AI輔助的筆記、繪圖和內容總結體驗；Surface Laptop 13-inch則維持經典設計，並具備25%更亮的500-nit螢幕。此外，微軟也推出了具備觸覺回饋的Surface Mouse。這些更新旨在讓使用者在本地設備上運行AI應用，提升隱私性，並提供更流暢的日常使用體驗。新產品預計於10月13日在部分市場上市。",
    tags: ["Microsoft", "Surface Pro 12-inch", "Surface Laptop 13-inch", "Snapdragon X2 Plus", "AI on the PC", "Windows"],
    title_en: "Surface Pro 12-inch and Surface Laptop 13-inch Launched, Featuring Snapdragon X2 Plus, Emphasizing AI and High Performance",
    summary_en: "At the Snapdragon Summit, Microsoft unveiled the new generation Surface Pro 12-inch and Surface Laptop 13-inch, both powered by the Snapdragon X2 Plus processor. The new devices emphasize providing higher energy efficiency, faster graphics processing, and significantly enhanced on-device AI computing capabilities within a thin and light design. Compared to their predecessors, the new models boost performance for Office productivity workloads by up to 17%, improve graphics performance by over 60%, and increase local AI inference speed on the NPU by up to 95%. The Surface Pro 12-inch features Microsoft Ink Canvas, offering AI-assisted note-taking, drawing, and content summarization experiences; the Surface Laptop 13-inch maintains its classic design and features a 500-nit screen that is 25% brighter. Furthermore, Microsoft also launched the Surface Mouse with haptic feedback. These updates aim to allow users to run AI applications locally on the device, enhancing privacy and providing a smoother daily user experience. The new products are expected to go on sale in select markets on October 13th.",
    tags_en: ["Microsoft", "Surface Pro 12-inch", "Surface Laptop 13-inch", "Snapdragon X2 Plus", "AI on the PC", "Windows"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/devices/2026/09/23/introducing-surface-pro-12-inch-and-surface-laptop-13-inch-with-snapdragon-x2", lang: "EN" }
    ]
  },
  {
    id: "20260923-13794",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Wire gRPC/Protobuf Swift 運行時存在越界讀取漏洞，可能導致服務崩潰",
    summary: "Wire 函式庫為 Android、Kotlin、Swift 和 Java 提供了 gRPC 和 protocol buffers 的支援。在版本 6.4.1 和 7.0.0-alpha04 之前，其 Swift 運行時的 `ProtoReader.skipGroup(expectedEndTag:unknownFieldsWriter:)` 方法存在安全漏洞。該漏洞允許攻擊者在未知 START_GROUP 欄位內，為一個 LENGTH_DELIMITED 欄位傳入負數長度。此負數值會被 `ProtoReader.readData()` 傳遞給 `ReadBuffer.readData(count:)`，由於後者僅進行上限檢查，使得負數值能夠觸發 `Foundation Data(bytes:count:)`，最終導致無法恢復的程序陷阱（unrecoverable process trap）。任何解碼不受信任的 protobuf 位元組的 Swift 流程，都可能在未經身份驗證、無需用戶互動或無需了解目標 Schema 的情況下崩潰。此問題已在 Wire 版本 6.4.1 和 7.0.0-alpha04 中修復。",
    tags: ["Wire", "gRPC", "Protobuf", "Swift", "CVE", "越界讀取"],
    title_en: "Wire gRPC/Protobuf Swift Runtime Vulnerability Allows Out-of-Bounds Read, Potentially Causing Service Crash",
    summary_en: "The Wire library provides support for gRPC and protocol buffers across Android, Kotlin, Swift, and Java. Prior to versions 6.4.1 and 7.0.0-alpha04, a security vulnerability existed in the Swift runtime's `ProtoReader.skipGroup(expectedEndTag:unknownFieldsWriter:)` method. This vulnerability allows an attacker to pass a negative length for a LENGTH_DELIMITED field within an unknown START_GROUP field. This negative value is passed to `ProtoReader.readData()`, which subsequently calls `ReadBuffer.readData(count:)`. Because the latter only performs an upper bound check, the negative value can trigger `Foundation Data(bytes:count:)`, ultimately leading to an unrecoverable process trap. Any Swift process decoding untrusted protobuf bytes could crash without authentication, user interaction, or knowledge of the target schema. This issue has been patched in Wire versions 6.4.1 and 7.0.0-alpha04.",
    tags_en: ["Wire", "gRPC", "Protobuf", "Swift", "CVE", "Out-of-Bounds Read"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-61695", lang: "EN" }
    ]
  },
  {
    id: "20260923-13120",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "PioLink，以網路韌性（Cyber Resilience）為基礎的整合安全解決方案拓展市場",
    summary: "PioLink 是一家整合網路、安全和基礎設施技術的企業，旨在支援客戶的 IT 環境即使在發生網路攻擊或故障時也能穩定持續運營，屬於網路韌性（Cyber Resilience）技術領域。近期，該公司推出了基於 AI 的持續威脅暴露管理（CTEM）解決方案，將業務範圍從事後應對擴展到主動尋找潛在暴露點和攻擊路徑的領域。隨著 AI 擴散導致的攻擊自動化和攻擊面擴大成為核心安全議題，PioLink 結合了 CTEM、內部網路零信任（Zero Trust）、威脅情報（CTI）等主動技術，以及 HCI、ADC 等災難復原（DR）和服務連續性技術進行應對。其優勢在於不以單一設備為中心，而是建構整合式的管理與監控平台，實現從預防—偵測—應對—復原的完整體系。下半年，公司計劃透過 CTEM 解決方案「BlueHunter」、零信任及 N2SF 應對解決方案「TeeFront」，以及確保服務連續性的「PAS-K」等產品，朝提升整體安全與基礎設施網路韌性的方向發展業務。此外，憑藉零信任導入的擴散，該公司在日本和東南亞等海外市場也持續擴大成效。",
    tags: ["PioLink", "網路韌性", "Cyber Resilience", "CTEM", "零信任", "N2SF", "整合安全"],
    title_en: "PioLink Expands Market with Integrated Security Solution Based on Cyber Resilience",
    summary_en: "PioLink is an enterprise integrating networking, security, and infrastructure technologies. It aims to help clients' IT environments maintain stable and continuous operation even during cyber attacks or failures, placing it within the field of Cyber Resilience technology. Recently, the company launched an AI-based Continuous Threat Exposure Management (CTEM) solution, expanding its scope from reactive response to proactively identifying potential exposure points and attack paths. As attack automation and expanded attack surfaces due to the spread of AI become core security concerns, PioLink is addressing this by combining proactive technologies such as CTEM, internal network Zero Trust, and Threat Intelligence (CTI), with disaster recovery (DR) and service continuity technologies like HCI and ADC. Its advantage lies in not being centered on a single device, but rather in building an integrated management and monitoring platform that achieves a complete system spanning prevention, detection, response, and recovery. In the second half of the year, the company plans to develop its business in the direction of enhancing overall security and infrastructure network resilience through products such as the CTEM solution 'BlueHunter', the Zero Trust and N2SF response solution 'TeeFront', and 'PAS-K' for ensuring service continuity. Furthermore, leveraging the spread of Zero Trust adoption, the company continues to expand its performance in overseas markets such as Japan and Southeast Asia.",
    tags_en: ["PioLink", "Cyber Resilience", "CTEM", "Zero Trust", "N2SF", "Integrated Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146010", lang: "EN" }
    ]
  },
  {
    id: "20260923-13448",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "ETSI與歐盟委員會重申戰略夥伴關係，強化歐洲數位領導地位與標準制定能力",
    summary: "本次會議匯集了ETSI和歐盟委員會的高層代表，旨在討論標準化如何支持歐洲在競爭力、創新、資安和技術主權方面的宏大目標。與會者強調，標準化是將政策雄心轉化為實際技術的關鍵橋樑。討論內容涵蓋了《歐洲產品法案》（European Product Act package）以及《網路韌性法案》（Cyber Resilience Act）的經驗教訓。代表們指出，標準制定必須跟上快速發展的技術節奏，並需要更高的彈性、前瞻性與簡化。ETSI強調其在將歐洲政策目標轉化為全球可部署技術方面的核心作用，特別是在數位身份、電子簽章、資安以及Consumer IoT（如ETSI EN 303 645）等領域。會議最後重申了雙方致力於敏捷標準化，以支持可信賴、創新且具全球相關性的數位技術。",
    tags: ["ETSI", "歐洲委員會", "Cyber Resilience Act", "標準化", "數位主權", "歐洲產品法案"],
    title_en: "ETSI and the European Commission Reaffirm Strategic Partnership to Strengthen Europe's Digital Leadership and Standardization Capabilities",
    summary_en: "This meeting gathered high-level representatives from ETSI and the European Commission to discuss how standardization can support Europe's ambitious goals in competitiveness, innovation, cybersecurity, and technological sovereignty. Attendees emphasized that standardization is the crucial bridge for translating policy ambitions into tangible technology. Discussions covered lessons learned from the European Product Act package and the Cyber Resilience Act. Representatives pointed out that standard development must keep pace with the rapid pace of technological advancement, requiring greater flexibility, foresight, and simplification. ETSI highlighted its core role in translating European policy objectives into globally deployable technologies, particularly in areas such as digital identity, electronic signatures, cybersecurity, and Consumer IoT (such as ETSI EN 303 645). The meeting concluded by reaffirming the commitment of both parties to agile standardization to support trustworthy, innovative, and globally relevant digital technologies.",
    tags_en: ["ETSI", "European Commission", "Cyber Resilience Act", "Standardization", "Digital Sovereignty", "European Product Act"],
    sources: [
      { name: "ETSI 資安技術", url: "https://etsi.org/newsroom/news/etsi-and-european-commission-reaffirm-strategic-partnership-to-strengthen-europes-digital-leadership", lang: "EN" }
    ]
  }
];
