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
  }
];
