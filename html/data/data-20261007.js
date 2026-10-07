// data-20261007.js — 2026-10-07
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-10-07"] = [
  {
    id: "20261007-14719",
    trackers: ["security"],
    category: "重大事件",
    title: "亞利桑那法院系統遭駭：超過百萬人個人資料外洩，涉及法院費用與保護令紀錄",
    summary: "亞利桑那州法院系統遭受網路攻擊，導致超過 130 萬名公民的個人資料被盜。這些資料包括可追溯至 30 年前的未繳法院費用、罰款和補償金紀錄，以及近 30,000 筆活躍和非活躍的保護令紀錄。此外，駭客還竊取了可追溯至 2010 年的養育照護委員會報告，涉及父母被指控不適宜或無法照顧子女的案件。據悉，攻擊可能源於一名法院員工點擊了惡意電子郵件連結。法院技術人員在 9 月 24 日發現異常後，於約兩小時內成功在備援伺服器上切斷了攻擊。目前，法院已通知受影響的公民。雖然目前沒有證據顯示資料已被使用或分享，但該事件仍正在調查中，且未影響或延遲任何法院案件，也沒有發現任何紀錄被竄改或刪除。",
    tags: ["亞利桑那州法院", "資料外洩", "網路攻擊", "個人資料", "法院系統"],
    title_en: "Arizona Court System Hacked: Personal Data of Over One Million Exposed, Including Court Fees and Protective Order Records",
    summary_en: "The Arizona state court system suffered a cyberattack, resulting in the theft of personal data belonging to over 1.3 million citizens. This data includes records of unpaid court fees, fines, and compensation traceable back 30 years, as well as nearly 30,000 active and inactive protective order records. Furthermore, hackers also stole child protective services reports dating back to 2010, concerning cases where parents were accused of being unfit or unable to care for their children. The attack is believed to have originated from a court employee clicking a malicious email link. Court technical staff detected the anomaly on September 24th and successfully contained the attack on a backup server within approximately two hours. The court has notified the affected citizens. Although there is currently no evidence that the data has been used or shared, the incident remains under investigation, and it has not affected or delayed any court cases, nor have any records been altered or deleted.",
    tags_en: ["Arizona Court", "Data Leak", "Cyberattack", "Personal Data", "Court System"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/personal-information-for-over-1-million-people-stolen-in-a-cyberattack-on-arizonas-court-system", lang: "EN" }
    ]
  },
  {
    id: "20261007-14938",
    trackers: ["os", "security"],
    category: "Linux",
    title: "TrendAI 揭露 X.Org Server 與 XWayland 十二個新漏洞：包含 Use-After-Free 與緩衝區溢出",
    summary: "TrendAI Zero Day Initiative 近期公開了針對傳統 X.Org Server 和 XWayland 的十二個安全漏洞。這些漏洞揭示了 X.Org Server 代碼庫中持續存在的 Use-After-Free、緩衝區溢出（Buffer Overflow）以及越界讀寫（Out-of-Bounds Reads/Writes）等嚴重問題。具體發現的漏洞包括 CVE-2026-88812 (XKB SetGeometry TextDoodad Double Free)、CVE-2026-93515 (Present Extension Cross-Window Notify Use-After-Free) 等。這些問題存在於所有早於 xorg-server-21.1.25 和 xwayland-24.1.14 的版本。開發者和系統管理員應立即升級至指定版本，以修補這些持續存在的核心安全缺陷，避免潛在的系統崩潰或惡意利用。",
    tags: ["X.Org Server", "XWayland", "CVE-2026-88812", "Use-After-Free", "Linux 核心", "緩衝區溢出"],
    title_en: "TrendAI Discloses Twelve New Vulnerabilities in X.Org Server and XWayland: Including Use-After-Free and Buffer Overflow",
    summary_en: "TrendAI Zero Day Initiative recently disclosed twelve security vulnerabilities affecting the traditional X.Org Server and XWayland. These vulnerabilities expose persistent critical issues within the X.Org Server codebase, including Use-After-Free, Buffer Overflow, and Out-of-Bounds Reads/Writes. Specific discovered vulnerabilities include CVE-2026-88812 (XKB SetGeometry TextDoodad Double Free) and CVE-2026-93515 (Present Extension Cross-Window Notify Use-After-Free). These issues exist in all versions prior to xorg-server-21.1.25 and xwayland-24.1.14. Developers and system administrators should immediately upgrade to the specified versions to patch these persistent core security flaws, preventing potential system crashes or malicious exploitation.",
    tags_en: ["X.Org Server", "XWayland", "CVE-2026-88812", "Use-After-Free", "Linux Kernel", "Buffer Overflow"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/X.Org-12-New-Issues-2026", lang: "EN" }
    ]
  },
  {
    id: "20261007-14939",
    trackers: ["os"],
    category: "Linux",
    title: "Linux Zswap 記憶體管理優化：開發者發布新補丁大幅降低請求爭用",
    summary: "本次更新針對 Linux 核心的 Zswap 記憶體快取機制進行了重大優化。Zswap 用於壓縮交換頁面，旨在提升系統在記憶體資源緊張時的效能。開發者 Usama Arif 發布了一系列補丁，旨在解決 Zswap 在處理讀取（loads）和寫入（stores）操作時，因共用 per-CPU acomp 請求和互斥鎖（mutex）所造成的瓶頸。新補丁透過將壓縮和解壓縮的請求、等待和互斥鎖分開，使讀取操作不再等待寫入操作，從而顯著降低了請求爭用。此外，對於同步的軟體壓縮器，新補丁還能讓讀取操作不需獲取 zswap 鎖。根據測試結果顯示，在 1 vCPU 和 8 vCPUs 的高負載情境下，Zswap 的讀取延遲（read per run）大幅降低，顯示出顯著的效能提升。目前此系列補丁已提交至 Linux 核心郵件列表審查，預計將提升 Linux 系統的記憶體管理效率。",
    tags: ["Linux 核心", "Zswap", "記憶體管理", "Usama Arif", "Linux 效能優化"],
    title_en: "Linux Zswap Memory Management Optimization: Developer Releases New Patch Significantly Reducing Contention",
    summary_en: "This update introduces major optimizations to the Zswap memory caching mechanism within the Linux kernel. Zswap is used to compress swapped pages, aiming to improve system performance when memory resources are scarce. Developer Usama Arif has released a series of patches designed to address bottlenecks in Zswap when handling read (loads) and write (stores) operations, which were previously caused by shared per-CPU acomp requests and mutexes. The new patches separate the requests, waits, and mutexes for compression and decompression, ensuring that read operations no longer wait for write operations, thereby significantly reducing contention. Furthermore, for synchronous software compressors, the new patches allow read operations to proceed without acquiring the zswap lock. Testing results show that under high-load scenarios (1 vCPU and 8 vCPUs), the read latency (read per run) of Zswap is significantly reduced, demonstrating substantial performance improvements. This series of patches has been submitted to the Linux kernel mailing list for review and is expected to enhance the memory management efficiency of Linux systems.",
    tags_en: ["Linux Kernel", "Zswap", "Memory Management", "Usama Arif", "Linux Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Better-Zswap-Performance", lang: "EN" }
    ]
  },
  {
    id: "20261007-15003",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 新功能：任務欄預覽將改用視窗標題列表取代縮圖，並新增遠端控制 Android 裝置功能",
    summary: "Microsoft 在 Windows 11 中測試了一項名為「Show taskbar previews as」的新設定。此功能允許使用者將任務欄的懸停預覽（hover thumbnails）替換為一個視窗標題的列表，此設計風格與 Windows XP 時代的群組視窗功能有相似之處。此外，在「快速設定」（Quick Settings）中新增了一個行動裝置圖磚（Mobile devices tile），使用者可以透過此圖磚來觸發遠端功能，例如讓連結的 Android 手機進入勿擾模式、靜音或發出鈴聲。這些更新屬於系統功能優化與使用者體驗的改進，而非針對特定漏洞的修補。",
    tags: ["Windows 11", "Microsoft", "任務欄", "Quick Settings", "Android", "系統功能"],
    title_en: "Windows 11 New Features: Taskbar Previews to Use Window Title List Instead of Thumbnails, and Addition of Remote Control for Android Devices",
    summary_en: "Microsoft is testing a new setting in Windows 11 called \"Show taskbar previews as.\" This feature allows users to replace the taskbar's hover thumbnails with a list of window titles, a design style reminiscent of the group window functionality from the Windows XP era. Additionally, a Mobile devices tile has been added to Quick Settings. Users can utilize this tile to trigger remote functions, such as setting a linked Android phone to Do Not Disturb, silencing it, or making it ring. These updates represent system functionality optimizations and user experience improvements, rather than patches for specific vulnerabilities.",
    tags_en: ["Windows 11", "Microsoft", "Taskbar", "Quick Settings", "Android", "System Functionality"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/07/windows-11s-taskbar-is-quietly-borrowing-an-old-trick-from-windows-xp-a-list-of-window-titles-instead-of-thumbnails-plus-a-button-to-ring-a-misplaced-android-phone", lang: "EN" }
    ]
  },
  {
    id: "20261007-14687",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Sony PS5發布系統更新，可能修補越獄工具Relapse所利用的WebKit與核心漏洞",
    summary: "Sony於9月16日發布PlayStation 5系統軟體26.06-14.00.00，除了提升畫質和系統效能外，也包含安全性更新。資安媒體指出，此更新後，目前公開的PS5越獄工具Relapse無法支援，僅支援舊版本（如7.00至13.60）。Relapse工具先前是透過兩階段漏洞利用鏈運作，利用WebKit的物件記憶體破壞漏洞，再結合核心的記憶體已釋放卻仍被使用（UAF）問題，以執行未簽署程式。雖然Sony官方更新說明未明確確認修補Relapse相關漏洞，但由於越獄工具無法在新版本上運行，業界研判Sony可能已修補了這些漏洞。用戶應儘速更新系統以提升安全性。",
    tags: ["Sony", "PlayStation 5", "PS5", "Relapse", "WebKit", "UAF", "越獄"],
    title_en: "Sony PS5 releases system update that may patch WebKit and core vulnerabilities exploited by Relapse jailbreak tool",
    summary_en: "On September 16, Sony released PlayStation 5 system software 26.06-14.00.00. In addition to enhancing picture quality and system performance, the update includes security patches. Cybersecurity media reports that after this update, the currently public PS5 jailbreak tool, Relapse, will no longer be supported, only supporting older versions (such as 7.00 to 13.60). The Relapse tool previously operated via a two-stage exploit chain, utilizing a WebKit object memory corruption vulnerability, combined with a core memory Use-After-Free (UAF) issue, to execute unsigned code. Although the official Sony update notes do not explicitly confirm patching vulnerabilities related to Relapse, the industry assessment is that Sony may have patched these vulnerabilities because the jailbreak tool cannot run on the new version. Users are advised to update the system promptly to enhance security.",
    tags_en: ["Sony", "PlayStation 5", "PS5", "Relapse", "WebKit", "UAF", "Jailbreak"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179474", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14688",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache HTTP Server 發布更新修補 20 個漏洞，包含高風險 Use-After-Free 與權限管理問題",
    summary: "Apache 軟體基金會於 10 月 1 日發布 Apache HTTP Server 更新，修補了多達 20 個資安漏洞。這些漏洞涵蓋了記憶體破壞、資訊洩漏、阻斷服務及權限管理等多種問題。受影響版本範圍為 2.4.0 至 2.4.68，用戶應立即升級至已修補的 2.4.69 版本。雖然 Apache 對這些漏洞的嚴重性評估多為中低風險，但根據 NVD 資料庫查詢，其中有三個漏洞的 CVSS 評分達到 9.8 分，風險極高。具體包括：CVE-2026-56154（mod_rewrite 模組的 Use-After-Free 記憶體問題）、CVE-2026-57941（mod_http2 共享緩衝區重入問題），以及 CVE-2026-59797（mod_ssl 模組的權限管理問題）。建議所有使用 Apache HTTP Server 的用戶，務必儘速升級至 2.4.69 或更高版本，以防範高風險的攻擊。",
    tags: ["Apache HTTP Server", "CVE-2026-56154", "CVE-2026-57941", "CVE-2026-59797", "Use-After-Free", "Web伺服器"],
    title_en: "Apache HTTP Server Releases Update Patching 20 Vulnerabilities, Including High-Risk Use-After-Free and Privilege Management Issues",
    summary_en: "The Apache Software Foundation released an update for Apache HTTP Server on October 1st, patching up to 20 security vulnerabilities. These vulnerabilities cover various issues including memory corruption, information leakage, denial of service, and privilege management. The affected version range is 2.4.0 to 2.4.68, and users should immediately upgrade to the patched 2.4.69 version. Although Apache assesses the severity of these vulnerabilities as medium to low risk, according to NVD database queries, three vulnerabilities achieved a CVSS score of 9.8, indicating extremely high risk. These include: CVE-2026-56154 (a Use-After-Free memory issue in the mod_rewrite module), CVE-2026-57941 (a shared buffer re-entry issue in mod_http2), and CVE-2026-59797 (a privilege management issue in the mod_ssl module). All users of Apache HTTP Server are strongly advised to promptly upgrade to version 2.4.69 or higher to prevent high-risk attacks.",
    tags_en: ["Apache HTTP Server", "CVE-2026-56154", "CVE-2026-57941", "CVE-2026-59797", "Use-After-Free", "Web Server"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179473", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14690",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Atlassian 揭露重大漏洞 CVE-2026-21589：未驗證攻擊者可讀取應用系統根目錄檔案",
    summary: "軟體開發廠商 Atlassian 發布資安公告，揭露一重大等級的任意檔案讀取漏洞 CVE-2026-21589。此漏洞的 CVSS v4.0 嚴重程度評分為 9.3 分。受影響產品範圍廣泛，包括 Bitbucket Data Center、Confluence Data Center、Jira Service Management Data Center、Jira Software Data Center、Bamboo Data Center、Crowd Data Center、Crucible，以及 Fisheye 等所有版本。未經身分驗證的攻擊者可利用此漏洞直接存取應用系統根目錄的特定檔案。雖然攻擊者必須事先掌握目標檔案的完整名稱與路徑才能利用，但若用戶無法及時修補，Atlassian 建議採取多層緩解措施，包括在網頁應用程式防火牆（WAF）加入正規表達式過濾、使用 Tomcat 的 RewriteValve 元件封鎖特定請求，或將相關應用系統的執行個體暫時從網際網路上移除，以降低曝露風險。",
    tags: ["Atlassian", "CVE-2026-21589", "任意檔案讀取", "Data Center", "WAF", "CVSS"],
    title_en: "Atlassian Discloses Critical Vulnerability CVE-2026-21589: Unauthenticated Attacker Can Read Application System Root Directory Files",
    summary_en: "Software vendor Atlassian has issued a security advisory disclosing a critical arbitrary file read vulnerability, CVE-2026-21589. This vulnerability has a CVSS v4.0 severity score of 9.3. The affected product scope is wide, including all versions of Bitbucket Data Center, Confluence Data Center, Jira Service Management Data Center, Jira Software Data Center, Bamboo Data Center, Crowd Data Center, Crucible, and Fisheye. An unauthenticated attacker can exploit this vulnerability to directly access specific files in the application system's root directory. Although the attacker must know the full name and path of the target file to exploit it, if users cannot patch in a timely manner, Atlassian recommends implementing multi-layered mitigation measures, including adding regular expression filtering to the Web Application Firewall (WAF), using the Tomcat RewriteValve component to block specific requests, or temporarily removing the relevant application system instance from the internet to reduce exposure risk.",
    tags_en: ["Atlassian", "CVE-2026-21589", "Arbitrary File Read", "Data Center", "WAF", "CVSS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179469", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14691",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FBI因IT服務承包商未及時修補Oracle PeopleSoft漏洞，導致資料外洩而解約",
    summary: "美國聯邦調查局（FBI）證實已與一家IT服務承包商解約，原因是該承包商未能及時部署已發布的安全修補程式，導致了先前發生資料外洩事件。根據知情人士透露，受影響的服務商為Accenture，涉及的平臺為Oracle PeopleSoft。此漏洞（CVE-2026-35273）先前已被公開，甚至有攻擊者如ShinyHunters利用該漏洞入侵FBI求職網站。安全機構如Mandiant和Google威脅情報團隊曾發出警示，指出未及時更新系統將使攻擊者能取得遠端程式碼執行能力。FBI的資安主管強調，承包商未能及時修補，導致了入侵，因此採取了降低風險的措施，並與該承包商解約。",
    tags: ["FBI", "Accenture", "Oracle PeopleSoft", "CVE-2026-35273", "資料外洩", "修補程式"],
    title_en: "FBI Terminates Contract with IT Service Contractor Due to Data Leak from Unpatched Oracle PeopleSoft Vulnerability",
    summary_en: "The FBI has confirmed the termination of its contract with an IT service contractor because the contractor failed to deploy timely security patches, which led to a previous data leak incident. According to sources, the affected service provider was Accenture, and the platform involved was Oracle PeopleSoft. This vulnerability (CVE-2026-35273) was previously disclosed, and attackers, such as ShinyHunters, even exploited it to breach the FBI's job application website. Security organizations like Mandiant and Google Threat Intelligence Team issued warnings, noting that failure to update systems promptly could allow attackers to achieve Remote Code Execution (RCE). An FBI cybersecurity official emphasized that the contractor's failure to patch in a timely manner led to the breach, prompting the agency to take risk-mitigation measures and terminate the contract with the contractor.",
    tags_en: ["FBI", "Accenture", "Oracle PeopleSoft", "CVE-2026-35273", "Data Leak", "Patch"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179467", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14692",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Mozilla發布Firefox 157.0.1修補程式，修復檔案處理元件中度漏洞CVE-2026-106016",
    summary: "Mozilla基金會於10月6日發布Firefox安全性更新157.0.1，旨在修補一個中度風險漏洞CVE-2026-106016。此弱點存在於Firefox的檔案處理元件，可能被攻擊者用來繞過特定的緩解措施。儘管Mozilla官方僅認定此漏洞為中度風險，但根據Tenable的評估，其CVSS嚴重程度評分高達9.8分，屬於重大等級，用戶應高度警惕。建議所有用戶應儘速更新至Firefox 157.0.1版本，以確保系統安全，避免遭受潛在的攻擊風險。",
    tags: ["Mozilla", "Firefox", "CVE-2026-106016", "檔案處理元件", "安全更新", "Tenable"],
    title_en: "Mozilla releases Firefox 157.0.1 patch to fix medium-severity vulnerability CVE-2026-106016",
    summary_en: "The Mozilla Foundation released Firefox security update 157.0.1 on October 6th, aimed at patching a medium-risk vulnerability, CVE-2026-106016. This weakness resides in Firefox's file handling component and could potentially be exploited by attackers to bypass specific mitigation measures. Although Mozilla officially classifies this vulnerability as medium risk, Tenable's assessment rates its CVSS severity score as high as 9.8, classifying it as critical, and users should exercise extreme caution. All users are advised to update promptly to Firefox 157.0.1 to ensure system security and avoid potential attack risks.",
    tags_en: ["Mozilla", "Firefox", "CVE-2026-106016", "File Handling Component", "Security Update", "Tenable"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179464", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14693",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 155 大版本發布：修補 247 個資安弱點，重點關注授權與記憶體安全漏洞",
    summary: "Google 於 10 月 6 日發布 Chrome 155 穩定版，一次性修補了共 247 個資安弱點。從風險等級來看，其中包含 4 個重大等級和 53 個高風險等級的漏洞。本次修補的漏洞類型多元，除了傳統的記憶體相關漏洞外，特別關注「不正確授權」和「缺乏授權」的弱點，分別共計 41 個和 34 個。此外，還有 34 個「Use after free」類型的記憶體釋放後存取漏洞，以及 20 個使用者介面資訊誤導等漏洞。用戶應立即升級至適用作業系統的最新版本，包括 Windows/macOS 的 155.0.8059.39 或 155.0.8059.40，以及 Linux/Android 的 155.0.8059.39，以降低相關的資安風險。",
    tags: ["Google Chrome", "CVE", "資安漏洞", "記憶體安全", "Chrome 155", "資安修補"],
    title_en: "Google Chrome 155 Major Release: Patches 247 Security Vulnerabilities, Focusing on Authorization and Memory Safety Flaws",
    summary_en: "Google released Chrome 155 stable version on October 6, patching a total of 247 security vulnerabilities. In terms of risk level, these include 4 critical and 53 high-risk vulnerabilities. The vulnerabilities patched in this release are diverse; in addition to traditional memory-related flaws, special attention was paid to 'incorrect authorization' and 'missing authorization' weaknesses, totaling 41 and 34 respectively. Furthermore, there are 34 'Use after free' type memory release access vulnerabilities, and 20 vulnerabilities related to user interface information misleading. Users should immediately upgrade to the latest version for their respective operating systems, including 155.0.8059.39 or 155.0.8059.40 for Windows/macOS, and 155.0.8059.39 for Linux/Android, to mitigate associated security risks.",
    tags_en: ["Google Chrome", "CVE", "Security Vulnerability", "Memory Safety", "Chrome 155", "Security Patch"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179463", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14694",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "FortiGuard揭露Linux後門ClingSTUN：利用多品牌IoT設備漏洞建立遠端控制代理節點",
    summary: "資安業者Fortinet旗下FortiGuard Labs揭露了名為ClingSTUN的Linux後門程式。該後門主要鎖定暴露於公開網路且存在已知漏洞的設備，使其成為可持續存取和遠端控制的代理節點。攻擊者利用多數IoT與網路設備（如D-Link、TP-Link、Tenda等）的已知漏洞進行初始入侵，隨後投遞ClingSTUN。ClingSTUN利用公開STUN服務進行惡意通訊，由於STUN常被正常應用（如VoIP、WebRTC）使用，使其流量難以區分。一旦設備被控制，攻擊者可利用其公開IP位址轉送網路流量，使惡意活動看似來自受害企業，甚至導致企業IP位址被列入封鎖名單。研究人員建議企業應盤點所有暴露於公網的設備及韌體版本，儘快安裝廠商提供的安全更新；若無法立即更新，應考慮隔離或停用存在漏洞的服務，以降低風險。",
    tags: ["ClingSTUN", "Linux後門", "IoT設備", "STUN", "FortiGuard Labs", "漏洞利用"],
    title_en: "FortiGuard Uncovers Linux Backdoor ClingSTUN: Exploiting Multi-Brand IoT Vulnerabilities to Establish Remote Control Proxy Nodes",
    summary_en: "Cybersecurity firm Fortinet's FortiGuard Labs has revealed a Linux backdoor program named ClingSTUN. This backdoor primarily targets devices exposed to the public internet and possessing known vulnerabilities, enabling them to become persistent access and remote control proxy nodes. Attackers exploit known vulnerabilities in numerous IoT and network devices (such as D-Link, TP-Link, and Tenda) for initial compromise, subsequently deploying ClingSTUN. ClingSTUN utilizes public STUN services for malicious communication. Because STUN is commonly used by legitimate applications (such as VoIP and WebRTC), its traffic is difficult to distinguish. Once a device is compromised, attackers can use its public IP address to relay network traffic, making malicious activity appear to originate from the victimized enterprise, and potentially leading to the enterprise's IP address being blacklisted. Researchers recommend that enterprises inventory all devices and firmware versions exposed to the public internet and promptly install vendor-provided security updates. If immediate updating is not possible, organizations should consider isolating or disabling vulnerable services to mitigate risk.",
    tags_en: ["ClingSTUN", "Linux Backdoor", "IoT Devices", "STUN", "FortiGuard Labs", "Vulnerability Exploitation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179423", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14696",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Truffle Security研究揭露GitHub公開程式碼憑證高風險：大量金鑰長期暴露，建議企業立即輪替憑證",
    summary: "資安業者Truffle Security掃描The Stack v3收錄的約2.25億個GitHub公開儲存庫快照，發現大量已暴露的程式碼憑證仍具備使用風險。研究團隊在2026年7月驗證，確認其中約543,699組憑證仍可使用，暴露時間中位數高達784天，第90百分位甚至超過6.3年。雖然GitHub自2024年2月開始啟用Push Protection預設防護，顯著降低了可識別憑證的暴露密度，但研究指出仍有51.8%的有效憑證不在預設阻擋範圍，包括資料庫連線字串、私鑰及Google API金鑰。由於許多憑證（如Postgres連線字串）缺乏自動撤銷機制，研究團隊強烈建議企業應立即將任何曾隨程式碼提交至公開儲存庫的憑證視為已暴露，並優先進行憑證輪替，同時回溯掃描程式碼歷史，並轉向使用具有有效期限的憑證。",
    tags: ["GitHub", "憑證暴露", "Truffle Security", "程式碼安全", "API金鑰", "憑證輪替"],
    title_en: "Truffle Security Research Reveals High-Risk Credentials in Public GitHub Code: Mass Keys Exposed, Immediate Credential Rotation Recommended",
    summary_en: "Security firm Truffle Security scanned a snapshot of approximately 225 million GitHub public repositories included in The Stack v3, discovering a large number of exposed code credentials that still pose a risk of use. The research team verified in July 2026 that approximately 543,699 of these credentials remain usable, with a median exposure time of 784 days and the 90th percentile exceeding 6.3 years. Although GitHub enabled Push Protection as a default defense starting in February 2024, significantly reducing the density of identifiable exposed credentials, the research pointed out that 51.8% of effective credentials are outside the default blocking scope. These include database connection strings, private keys, and Google API keys. Because many credentials (such as Postgres connection strings) lack automatic revocation mechanisms, the research team strongly recommends that enterprises treat any credential that has been committed to a public repository as exposed and prioritize credential rotation. Furthermore, companies should retroactively scan their code history and transition to using credentials with effective expiration dates.",
    tags_en: ["GitHub", "Credential Exposure", "Truffle Security", "Code Security", "API Key", "Credential Rotation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179433", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14757",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "X.Org 伺服器與 Xwayland 釋出多個漏洞修補：包含堆溢出與使用後釋放問題",
    summary: "X.Org 官方發布了針對 X server 和 Xwayland 實作的安全性修補，修補版本為 xorg-server-21.1.25 和 xwayland-24.1.14。本次修補涵蓋多個高風險漏洞，包括 CVE-2026-88812 (Double Free)、CVE-2026-93515 (Use-After-Free)、CVE-2026-93516 (Use-After-Free)、CVE-2026-93517 (Heap Buffer Overflow)、CVE-2026-93518 (Heap Buffer Overflow) 以及 CVE-2026-93519 (Buffer Overflow)。這些漏洞皆可由經過驗證的 X 客戶端觸發，可能導致堆損壞、任意程式碼執行或服務拒絕。開發人員應立即升級至指定版本以修補這些安全隱患。",
    tags: ["X.Org", "X server", "Xwayland", "CVE-2026-88812", "CVE-2026-93515", "CVE-2026-93516", "CVE-2026-93517", "CVE-2026-93518"],
    title_en: "X.Org Server and Xwayland Release Multiple Vulnerability Patches: Including Heap Overflow and Use-After-Free Issues",
    summary_en: "The X.Org project has released security patches for the X server and Xwayland implementations, with patched versions xorg-server-21.1.25 and xwayland-24.1.14. This patch addresses multiple high-risk vulnerabilities, including CVE-2026-88812 (Double Free), CVE-2026-93515 (Use-After-Free), CVE-2026-93516 (Use-After-Free), CVE-2026-93517 (Heap Buffer Overflow), CVE-2026-93518 (Heap Buffer Overflow), and CVE-2026-93519 (Buffer Overflow). These vulnerabilities can be triggered by a validated X client and may lead to heap corruption, arbitrary code execution, or denial of service. Developers should upgrade immediately to the specified versions to mitigate these security risks.",
    tags_en: ["X.Org", "X server", "Xwayland", "CVE-2026-88812", "CVE-2026-93515", "CVE-2026-93516", "CVE-2026-93517", "CVE-2026-93518"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/23", lang: "EN" }
    ]
  },
  {
    id: "20261007-14758",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Impala 存在 CVE-2026-97720 漏洞：JWT/OAuth 認證繞過，建議升級至 4.5.3",
    summary: "Apache Impala 在版本 4.1.0 至 4.5.2 中存在一個低風險的漏洞 CVE-2026-97720。此漏洞源於 Impala executor 的 Webserver 在處理 JWT/OAuth 認證時，未能正確驗證 Bearer token (JWT) 的簽名。這使得攻擊者可以在 Webserver 配置接受 JWT/OAuth token 的情況下，繞過認證機制，存取執行器所提供的資源。為修復此問題，建議使用者升級至 Apache Impala 4.5.3 或選擇停用 Impala executor 的 JWT/OAuth 認證功能。",
    tags: ["Apache Impala", "CVE-2026-97720", "JWT", "OAuth", "Webserver", "認證繞過"],
    title_en: "Apache Impala has CVE-2026-97720 Vulnerability: JWT/OAuth Authentication Bypass; Upgrade to 4.5.3 Recommended",
    summary_en: "Apache Impala versions 4.1.0 through 4.5.2 contain a low-risk vulnerability, CVE-2026-97720. This vulnerability stems from the Impala executor's Webserver failing to correctly validate the signature of a Bearer token (JWT) when processing JWT/OAuth authentication. This allows an attacker, when the Webserver is configured to accept JWT/OAuth tokens, to bypass the authentication mechanism and access resources provided by the executor. To fix this issue, users are advised to upgrade to Apache Impala 4.5.3 or disable the JWT/OAuth authentication feature of the Impala executor.",
    tags_en: ["Apache Impala", "CVE-2026-97720", "JWT", "OAuth", "Webserver", "Authentication Bypass"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/22", lang: "EN" }
    ]
  },
  {
    id: "20261007-14759",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Impala 存在儲存型 XSS 漏洞 (CVE-2026-93684)，低權限用戶可植入惡意腳本",
    summary: "Apache Impala 在版本 2.7.0 至 4.5.2 之間存在一個儲存型跨站腳本攻擊 (Stored XSS) 漏洞，編號為 CVE-2026-93684。該漏洞屬於 CWE-79，允許僅具有 SELECT 權限的 SQL 用戶，將 JavaScript 代碼植入到資料表別名中。當其他用戶在 Impala 的 Web UI 中開啟包含該別名的查詢計畫時，惡意腳本將會在受害者的瀏覽器中執行。此漏洞的實務影響是允許低權限用戶執行惡意代碼，可能導致會話劫持或資訊竊取。建議受影響用戶應立即升級至版本 4.5.3 或更高版本以修補此安全風險。",
    tags: ["Apache Impala", "CVE-2026-93684", "Stored XSS", "SQL", "Web UI"],
    title_en: "Apache Impala has Stored XSS Vulnerability (CVE-2026-93684), allowing low-privilege users to inject malicious scripts",
    summary_en: "Apache Impala versions between 2.7.0 and 4.5.2 contain a Stored Cross-Site Scripting (XSS) vulnerability, identified as CVE-2026-93684. This vulnerability falls under CWE-79 and allows SQL users with only SELECT privileges to inject JavaScript code into table aliases. When other users open a query plan containing the affected alias in the Impala Web UI, the malicious script will execute in the victim's browser. The practical impact of this vulnerability is that low-privilege users can execute malicious code, potentially leading to session hijacking or information theft. Affected users are advised to immediately upgrade to version 4.5.3 or later to patch this security risk.",
    tags_en: ["Apache Impala", "CVE-2026-93684", "Stored XSS", "SQL", "Web UI"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/21", lang: "EN" }
    ]
  },
  {
    id: "20261007-14760",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Impala 存在路徑遍歷漏洞 (CVE-2026-90466)，可能允許載入非信任路徑的 JAR 檔案",
    summary: "Apache Impala 4.5.2 版本存在一個路徑遍歷漏洞 (CVE-2026-90466)。此漏洞利用 'trusted_jar_paths' 的路徑遍歷機制，允許攻擊者透過相對路徑載入位於非預期位置的 JAR 檔案。雖然攻擊無法覆寫 URI 的 Schema，但如果 Impala 管理員已配置了非空的 'trusted_jar_paths'，攻擊者可以透過 Impala DDLs（例如 CREATE DATA SOURCE 和 CREATE TABLE）將惡意 JAR 上傳到不同位置，進而實現載入。修復此問題的建議措施是升級至 Apache Impala 4.5.3 版本。本漏洞的追蹤編號為 IMPALA-15345。",
    tags: ["Apache Impala", "CVE-2026-90466", "路徑遍歷", "JAR", "Impala"],
    title_en: "Apache Impala Path Traversal Vulnerability (CVE-2026-90466) May Allow Loading JAR Files from Untrusted Paths",
    summary_en: "Apache Impala version 4.5.2 contains a path traversal vulnerability (CVE-2026-90466). This vulnerability exploits the path traversal mechanism of 'trusted_jar_paths', allowing an attacker to load JAR files from unexpected locations using relative paths. Although the attack cannot overwrite the URI's Schema, if the Impala administrator has configured a non-empty 'trusted_jar_paths', an attacker can upload malicious JAR files to different locations using Impala DDLs (such as CREATE DATA SOURCE and CREATE TABLE), thereby achieving the load. The recommended mitigation is to upgrade to Apache Impala version 4.5.3. The tracking ID for this vulnerability is IMPALA-15345.",
    tags_en: ["Apache Impala", "CVE-2026-90466", "Path Traversal", "JAR", "Impala"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/20", lang: "EN" }
    ]
  },
  {
    id: "20261007-14761",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache log4net 存在 CVE-2026-105244 漏洞：RemoteSyslogAppender 錯誤處理非 ASCII 字元",
    summary: "Apache log4net 的 RemoteSyslogAppender 存在一項「輸出編碼或轉義不當」（Improper Encoding or Escaping of Output）的漏洞，編號為 CVE-2026-105244。此漏洞的影響範圍是任何非可見 ASCII 和空格的字元都會被移除，而非正確轉義。這導致非 ASCII 文本和控制字元（如 Tab）會悄無聲息地消失，使得攻擊者可以透過讓特定值在日誌記錄中看起來與預期值相同，從而造成資料誤判或混淆。受影響的版本包括 Apache log4net 1.2.12 之前版本，以及 3.5.0 之前版本。僅使用 RemoteSyslogAppender 的應用程式會受到影響。建議使用者立即升級至版本 3.5.0 以修復此問題。",
    tags: ["Apache log4net", "CVE-2026-105244", "RemoteSyslogAppender", "非 ASCII 字元", "日誌記錄"],
    title_en: "Apache log4net Vulnerability CVE-2026-105244: RemoteSyslogAppender Improper Handling of Non-ASCII Characters",
    summary_en: "Apache log4net's RemoteSyslogAppender contains a vulnerability, CVE-2026-105244, related to 'Improper Encoding or Escaping of Output.' This vulnerability causes any characters that are not visible ASCII or spaces to be removed, rather than being correctly escaped. This results in non-ASCII text and control characters (such as Tab) disappearing silently, allowing an attacker to cause data misjudgment or confusion by making a specific value appear identical to the expected value within the log records. Affected versions include Apache log4net prior to 1.2.12 and prior to 3.5.0. Only applications utilizing RemoteSyslogAppender are affected. Users are advised to immediately upgrade to version 3.5.0 to remediate this issue.",
    tags_en: ["Apache log4net", "CVE-2026-105244", "RemoteSyslogAppender", "Non-ASCII Characters", "Logging"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/19", lang: "EN" }
    ]
  },
  {
    id: "20261007-14762",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Apache log4net 存在 NUL 字元截斷漏洞：OutputDebugStringAppender 記錄內容可能被隱藏",
    summary: "本漏洞為 Apache log4net 函式庫中的 OutputDebugStringAppender 組件所導致的「不當中和空字元（NUL Character）」問題，編號為 CVE-2026-105240。當日誌內容包含 NUL 字元時，該字元會導致除錯輸出記錄在該點截斷，使得佈局器（layout）之後渲染的所有資訊，包括例外文字和尾部欄位，會被靜默丟失。這意味著，任何能將資料寫入日誌訊息的攻擊者，都可能隱藏日誌記錄的剩餘部分。此漏洞僅影響使用 OutputDebugStringAppender 的 Windows 應用程式。受影響版本為 Apache log4net 1.2.9 之前至 3.5.0 之前。建議使用者升級至版本 3.5.0 以修復此問題。",
    tags: ["Apache log4net", "CVE-2026-105240", "NUL Character", "OutputDebugStringAppender", "Windows"],
    title_en: "Apache log4net NUL Character Truncation Vulnerability: OutputDebugStringAppender Content May Be Hidden",
    summary_en: "This vulnerability, designated CVE-2026-105240, stems from the OutputDebugStringAppender component within the Apache log4net library, concerning an 'unhandled NUL Character' issue. When log content contains a NUL character, this character causes the debug output to truncate at that point, leading to the silent loss of all information rendered by the layout afterward, including exception text and trailing fields. This means that an attacker capable of writing data to the log message could potentially hide the remaining parts of the log record. This vulnerability only affects Windows applications using OutputDebugStringAppender. Affected versions are those prior to Apache log4net 1.2.9 up to prior to 3.5.0. Users are advised to upgrade to version 3.5.0 to remediate this issue.",
    tags_en: ["Apache log4net", "CVE-2026-105240", "NUL Character", "OutputDebugStringAppender", "Windows"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/18", lang: "EN" }
    ]
  },
  {
    id: "20261007-14763",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Apache log4net 存在 CVE-2026-105243 漏洞：EventLogAppender 記錄訊息可被靜默丟棄",
    summary: "Apache log4net 的 EventLogAppender 組件存在一項資訊記錄不足（Insufficient Logging）的漏洞，編號為 CVE-2026-105243。此漏洞僅影響在 Windows 環境下使用 EventLogAppender 的應用程式。攻擊者可以透過發送過長的日誌訊息，使其超出 Windows Event Log 接受的固定大小限制，導致系統在記錄並回報無內容時，能夠靜默地抑制（suppress）整個日誌記錄。這可能導致關鍵事件的日誌記錄遺失，影響系統的監控與追蹤能力。\n\n受影響版本包括 Apache log4net 1.2.9 之前版本，以及特定版本號的 log4net 早期版本。建議使用者應立即升級至修復此問題的 3.5.0 版本，以確保日誌記錄的完整性與安全性。",
    tags: ["Apache log4net", "CVE-2026-105243", "EventLogAppender", "Windows", "日誌記錄", "資訊安全"],
    title_en: "Apache log4net has CVE-2026-105243 vulnerability: EventLogAppender message logging can be silently discarded",
    summary_en: "The EventLogAppender component in Apache log4net contains an Insufficient Logging vulnerability, identified as CVE-2026-105243. This vulnerability only affects applications using EventLogAppender in a Windows environment. An attacker can send an excessively long log message, causing it to exceed the fixed size limit accepted by the Windows Event Log. This results in the system silently suppressing the entire log entry when reporting no content. This could lead to the loss of critical event logging, compromising the system's monitoring and tracking capabilities.\n\nAffected versions include Apache log4net versions prior to 1.2.9, as well as early versions of log4net with specific version numbers. Users are advised to immediately upgrade to version 3.5.0, which fixes this issue, to ensure the integrity and security of log records.",
    tags_en: ["Apache log4net", "CVE-2026-105243", "EventLogAppender", "Windows", "Logging", "Information Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/17", lang: "EN" }
    ]
  },
  {
    id: "20261007-14764",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache log4net 存在 CVE-2026-105242 漏洞：ASP.NET 請求轉換器處理不當導致日誌事件丟失",
    summary: "Apache log4net 的 aspnet-request 模式轉換器存在「不當處理異常條件」的漏洞，編號為 CVE-2026-105242。此漏洞僅影響使用 ASP.NET for .NET Framework 且佈局（layout）使用 `%aspnet-request` 的應用程式。當請求攜帶特定內容（例如標記 Markup）時，會觸發 ASP.NET 請求驗證，導致佈局拋出異常，進而使日誌附加器（appender）丟棄整個日誌事件。攻擊者可以利用此漏洞抑制或隱藏自身請求的日誌記錄，從而規避監控。受影響版本包括 Apache log4net 1.2.11 之前版本，以及 243f1e9f3ee235955bade4b4fe664a903378719a 之前版本。建議使用者立即升級至版本 3.5.0 以修復此問題。",
    tags: ["Apache log4net", "CVE-2026-105242", "ASP.NET", "日誌記錄", "應用程式安全"],
    title_en: "Apache log4net Vulnerability CVE-2026-105242: Improper Handling in ASP.NET Request Converter Causes Log Event Loss",
    summary_en: "The `aspnet-request` pattern converter in Apache log4net contains a vulnerability, CVE-2026-105242, related to 'improper handling of exception conditions.' This vulnerability only affects applications that use ASP.NET for .NET Framework and utilize `%aspnet-request` in their layout. When a request carries specific content (such as a Markup tag), it triggers ASP.NET request validation, causing the layout to throw an exception. This, in turn, leads the log appender to discard the entire log event. An attacker can exploit this vulnerability to suppress or hide the logging of their own requests, thereby evading monitoring. Affected versions include Apache log4net prior to 1.2.11, and prior to 243f1e9f3ee235955bade4b4fe664a903378719a. Users are advised to immediately upgrade to version 3.5.0 to fix this issue.",
    tags_en: ["Apache log4net", "CVE-2026-105242", "ASP.NET", "Logging", "Application Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/07/16", lang: "EN" }
    ]
  },
  {
    id: "20261007-14697",
    trackers: ["os", "security"],
    category: "供應鏈與開源安全",
    title: "Linux基金會ELISA納入Cregit與stress-ng，強化安全關鍵軟體開發與測試能力",
    summary: "Linux基金會旗下ELISA（Enabling Linux In Safety Applications）宣布，將Cregit和stress-ng兩項開源專案納入管理，旨在擴大其支援安全關鍵軟體開發與測試的技術範圍。ELISA專注於推動Linux及其他開源軟體在汽車、工業、航太等高度重視安全與可靠性的產業應用。Cregit可協助開發人員追蹤和分析Linux核心程式碼的歷史演進，有助於理解程式碼的背景與變動。而stress-ng則提供數百項壓力測試，用於全面評估Linux系統的行為、可靠性及效能。這兩項專案的納入，使開發者能從軟體生命週期的各個階段，更系統性地處理程式碼分析、系統測試及可靠性問題，提升安全關鍵系統的整體韌性。",
    tags: ["Linux基金會", "ELISA", "Cregit", "stress-ng", "開源安全", "安全關鍵系統"],
    title_en: "Linux Foundation's ELISA Incorporates Cregit and stress-ng to Enhance Secure Development and Testing Capabilities",
    summary_en: "ELISA (Enabling Linux In Safety Applications), an initiative under the Linux Foundation, announced the incorporation of two open-source projects, Cregit and stress-ng, into its management. This move aims to expand the technical scope supporting the development and testing of safety-critical software. ELISA focuses on promoting the use of Linux and other open-source software in highly safety- and reliability-critical industries such as automotive, industrial, and aerospace. Cregit assists developers in tracking and analyzing the historical evolution of Linux kernel code, which helps in understanding the code's background and changes. Meanwhile, stress-ng provides hundreds of stress tests used to comprehensively evaluate the behavior, reliability, and performance of Linux systems. The inclusion of these two projects allows developers to address code analysis, system testing, and reliability issues more systematically across all stages of the software lifecycle, thereby enhancing the overall resilience of safety-critical systems.",
    tags_en: ["Linux Foundation", "ELISA", "Cregit", "stress-ng", "Open Source Security", "Safety-Critical Systems"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179424", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14771",
    trackers: ["eu_cra"],
    category: "開源影響",
    title: "AI自律滲透測試框架 ARTEX 韓文版公開，強調防禦用途以應對金融業攻擊威脅",
    summary: "近期，隨著AI自動化攻擊工具被用於攻擊國內金融機構，一個名為 ARTEX 的AI自律滲透測試框架（Pen-testing）的韓文版本已在GitHub上公開。雖然該工具被調查當局認定曾被用於個人資訊洩露攻擊，使其被視為「危險的駭客工具」，但其貢獻者強調，ARTEX的本質是協助防禦者提升安全和偵測能力。ARTEX是一個由LLM多Agent組成的系統，能夠自主地規劃攻擊目標、執行工具、並將發現的資產和漏洞累積到圖形結構中，模擬了白帽駭客從偵察、分析到利用、橫向移動的完整邏輯鏈。其核心架構包含「資產圖（Asset Graph）」和「探索圖（Exploration Graph）」兩層雙圖結構，透過「規劃者（Planner）」和「工作者（Worker）」等Agent分工合作，實現複雜的攻擊鏈。此次韓文版公開，特別優化了使用者介面，讓分析結果、最終報告和對話回覆等資訊能以韓文輸出，大幅提升了韓國安全實務人員的分析效率。專家建議，應將重點放在如何研究這些AI工具，並將安全能力內建於系統本身，而非僅關注工具本身。",
    tags: ["ARTEX", "AI自動化攻擊", "Pen-testing", "LLM多Agent", "資產圖", "金融安全"],
    title_en: "AI Autonomous Penetration Testing Framework ARTEX Korean Version Released, Emphasizing Defensive Use Against Financial Sector Threats",
    summary_en: "Recently, as AI automated attack tools have been used to target domestic financial institutions, a Korean version of ARTEX, an AI autonomous penetration testing framework (Pen-testing), was released on GitHub. Although the tool has been investigated by authorities and found to have been used in personal information leakage attacks, labeling it as a 'dangerous hacking tool,' its contributors emphasize that ARTEX is fundamentally designed to assist defenders in enhancing security and detection capabilities. ARTEX is a system composed of multiple LLM Agents that can autonomously plan attack targets, execute tools, and accumulate discovered assets and vulnerabilities into a graph structure, simulating the complete logical chain of a white-hat hacker from reconnaissance and analysis to exploitation and lateral movement. Its core architecture includes a dual-graph structure of an 'Asset Graph' and an 'Exploration Graph.' By having Agents like the 'Planner' and 'Worker' collaborate, it achieves complex attack chaining. The release of this Korean version specifically optimized the user interface, allowing analysis results, final reports, and conversational responses to be output in Korean, significantly boosting the analysis efficiency for Korean security practitioners. Experts suggest that the focus should be on researching how to integrate these AI tools and embedding security capabilities directly into systems, rather than merely focusing on the tools themselves.",
    tags_en: ["ARTEX", "AI Automated Attacks", "Pen-testing", "LLM Multi-Agent", "Asset Graph", "Financial Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146220", lang: "EN" }
    ]
  },
  {
    id: "20261007-14793",
    trackers: ["os"],
    category: "Android",
    title: "Google Wallet for Android 推出卡片堆疊式重新設計，優化支付介面與使用者體驗",
    summary: "Google Wallet for Android 進行了介面更新，針對存儲的信用卡和簽帳卡，從原有的輪播式（carousel）展示改為堆疊式（stacked list）設計。新設計在首頁會完整顯示一張卡片預覽，並在頂部顯示第二張卡片的邊緣，使用者可透過點擊或向下滑動進入全螢幕佈局查看詳細資訊。此改動旨在優化單手操作的便利性，特別適用於將最常用卡片放置在底部的情況。此外，使用者現在可透過右上方新增的設定齒輪圖示，查看卡片詳細資訊和交易紀錄，這相較於舊版增加了額外步驟。此重設計始於九月，目前正透過伺服器端更新逐步擴大可用性，但除了首頁介面，其他功能皆未變動。此更新屬於使用者介面（UI/UX）的改進，不涉及核心安全漏洞或功能變更。",
    tags: ["Google Wallet", "Android", "UI/UX", "支付系統", "堆疊式設計"],
    title_en: "Google Wallet for Android Redesigns Card Display to Optimize Payment Interface and User Experience",
    summary_en: "Google Wallet for Android has updated its interface for stored credit and debit cards, changing from a carousel display to a stacked list design. The new design fully displays one card preview on the homepage, with the edge of the second card visible at the top. Users can tap or swipe down to enter a full-screen layout for detailed information. This change aims to optimize convenience for single-hand operation, especially when the most frequently used card is placed at the bottom. Additionally, users can now view detailed card information and transaction history via a newly added settings gear icon in the upper right corner, which adds an extra step compared to the previous version. This redesign began in September and is currently expanding availability through server-side updates, but all functions other than the homepage interface remain unchanged. This update is a User Interface (UI/UX) improvement and does not involve core security vulnerabilities or functional changes.",
    tags_en: ["Google Wallet", "Android", "UI/UX", "Payment System", "Stacked Design"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/06/google-wallet-stacked-redesign", lang: "EN" }
    ]
  },
  {
    id: "20261007-14686",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "OpenSSH 10.6 發布，停用 LZ77 字典編碼降低洩密風險，並正式啟用後量子混合簽章",
    summary: "OpenSSH 發布 10.6 版本，主要修補了與資料長度推測相關的資安風險。此版本停用了 LZ77 字典編碼功能，因為攻擊者若能控制 SSH 連線中的輸入，並觀察加密後資料長度的變化，可能藉此推測其他秘密資料。雖然 SSH 仍可使用壓縮功能，但建議使用者應讓上層應用程式處理壓縮，避免不同 SSH 通道共用壓縮資訊帶來的風險。\n\n此外，OpenSSH 10.6 正式啟用結合 ML-DSA-44 與 Ed25519 的混合式後量子簽章（ssh-mldsa44-ed25519），加速後量子密碼技術的採用。新版也加入了預設的後量子安全警告，若用戶端使用非後量子金鑰交換方式，伺服器將會記錄。\n\n除了上述重大更新，10.6 還修正了 SFTP 用戶端可能將惡意路徑寫入錯誤目錄的問題，以及修復了命令列輸入中特殊字元可能導致 Shell 指令注入的漏洞，提升整體安全性。",
    tags: ["OpenSSH", "10.6", "LZ77", "後量子密碼", "ML-DSA-44", "Ed25519", "資安更新"],
    title_en: "OpenSSH 10.6 Released, Disabling LZ77 Dictionary Encoding to Lower Leakage Risk, and Officially Enabling Post-Quantum Hybrid Signatures",
    summary_en: "OpenSSH has released version 10.6, which primarily patches a security risk related to data length inference. This version disables the LZ77 dictionary encoding feature because attackers could potentially infer other secret data by controlling the input in an SSH connection and observing changes in the encrypted data length. Although SSH still supports compression, users are advised to let the upper-layer application handle compression to mitigate risks arising from shared compression information across different SSH channels.\n\nFurthermore, OpenSSH 10.6 officially enables a hybrid post-quantum signature combining ML-DSA-44 and Ed25519 (ssh-mldsa44-ed25519), accelerating the adoption of post-quantum cryptography. The new version also includes a default post-quantum security warning; if the client uses a non-post-quantum key exchange method, the server will log this.\n\nIn addition to these major updates, 10.6 also fixes an issue where the SFTP client might write malicious paths to incorrect directories, and patches a vulnerability where special characters in command-line input could lead to shell command injection, thereby enhancing overall security.",
    tags_en: ["OpenSSH", "10.6", "LZ77", "Post-Quantum Cryptography", "ML-DSA-44", "Ed25519", "Security Update"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179472", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14689",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic擴大Cyber Verification Program (CVP)，建立分層式資安存取機制，提升資安研究與紅隊作業能力",
    summary: "Anthropic宣布擴大其Cyber Verification Program (CVP)，並整合原有的Project Glasswing，將資安存取權限重新劃分為三個層級：Defense Access、Red Team Access與Specialized Access。此機制旨在讓通過驗證的資安團隊，可根據工作需求取得不同限制的Claude模型能力，提升資安研究與紅隊作業的專業性。\n\n新版CVP的層級設計，從防禦工作（Defense Access）到授權滲透測試（Red Team Access），再到針對飛航、電網等高風險基礎設施的極限測試（Specialized Access），提供了精細化的安全存取管理。Anthropic透過CyScenarioBench測試顯示，權限層級越高，模型執行高風險操作的成功率越高，Specialized Access的限制最少。\n\n此外，透過Project Glasswing的合作夥伴，Anthropic已在今年4月至7月間發現了至少12.9萬個經驗證的軟體漏洞，並利用Claude資安能力掃描開源專案，額外找出5,500個安全漏洞，其中超過3.3萬個被評為重大或高嚴重度。此舉顯示AI模型在資安漏洞挖掘與驗證方面的強大應用。",
    tags: ["Anthropic", "Cyber Verification Program (CVP)", "Project Glasswing", "Claude模型", "紅隊作業", "資安漏洞"],
    title_en: "Anthropic Expands Cyber Verification Program (CVP) with Tiered Security Access Mechanism to Enhance Security Research and Red Teaming Capabilities",
    summary_en: "Anthropic announced the expansion of its Cyber Verification Program (CVP) and the integration of the existing Project Glasswing. It has re-categorized security access privileges into three distinct tiers: Defense Access, Red Team Access, and Specialized Access. This mechanism allows verified security teams to obtain different levels of restricted Claude model capabilities based on their operational needs, thereby enhancing the professionalism of security research and red teaming activities.\n\nThe new CVP tiered design provides granular security access management, ranging from defensive work (Defense Access) to authorized penetration testing (Red Team Access), and finally to extreme testing for high-risk critical infrastructure such as aviation and power grids (Specialized Access). Anthropic's CyScenarioBench testing demonstrated that the higher the access tier, the higher the success rate of the model executing high-risk operations, with Specialized Access having the fewest restrictions.\n\nFurthermore, through its partners involved in Project Glasswing, Anthropic discovered at least 129,000 verified software vulnerabilities between April and July of this year. By utilizing Claude's security capabilities to scan open-source projects, the company also found an additional 5,500 security vulnerabilities, over 33,000 of which were rated as critical or high severity. This demonstrates the powerful application of AI models in security vulnerability discovery and verification.",
    tags_en: ["Anthropic", "Cyber Verification Program (CVP)", "Project Glasswing", "Claude", "Red Teaming", "Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179470", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14695",
    trackers: ["security"],
    category: "前瞻技術",
    title: "製造業PQC轉型挑戰：Forescout提醒OT環境需全面評估設備韌體與身分驗證的密碼學機制",
    summary: "網路安全業者Forescout分析製造業在推動後量子密碼學（PQC）轉型時，面臨的挑戰遠超單純更換加密演算法。在營運技術（OT）環境中，密碼學機制不僅用於保護網路連線，更深植於韌體數位簽章、安全開機（Secure Boot）和設備身分驗證等核心功能。例如，目前部署的可程式化邏輯控制器（PLC）可能使用ECDSA公開金鑰驗證韌體，且預計運作至2050年左右。Forescout指出，當量子運算能力威脅現行公開金鑰密碼學時，攻擊者可能竊取金鑰，從而將惡意韌體偽裝成可信任的內容。因此，企業在規劃PQC轉型時，必須全面盤點既有設備使用的所有密碼學機制，並評估其升級可行性。由於OT設備的密碼學支援度受限於處理器效能、記憶體容量、韌體架構等多重條件，無法升級的設備可能需要額外防護或直接汰換。製造業應提早規劃設備生命週期，將汰換需求納入預算，避免在密碼學機制必須更換時才倉促應對。",
    tags: ["PQC", "後量子密碼學", "OT環境", "營運技術", "PLC", "韌體安全", "Forescout"],
    title_en: "Manufacturing PQC Transition Challenges: Forescout Reminds OT Environments to Fully Assess Firmware and Authentication Cryptographic Mechanisms",
    summary_en: "Cybersecurity firm Forescout analyzes that the challenges manufacturing faces when transitioning to Post-Quantum Cryptography (PQC) extend far beyond simply replacing encryption algorithms. In Operational Technology (OT) environments, cryptographic mechanisms are not only used to protect network connections but are also deeply embedded in core functions such as firmware digital signatures, Secure Boot, and device authentication. For instance, Programmable Logic Controllers (PLCs) currently deployed may use ECDSA public key verification for firmware, with expected operational lifecycles extending until around 2050. Forescout points out that when quantum computing capabilities threaten current public-key cryptography, attackers may steal keys, thereby allowing malicious firmware to be disguised as trusted content. Therefore, when planning PQC transition, enterprises must comprehensively inventory all cryptographic mechanisms used by existing equipment and assess their upgrade feasibility. Since the cryptographic support of OT devices is limited by multiple factors, including processor performance, memory capacity, and firmware architecture, devices that cannot be upgraded may require additional protection or outright replacement. Manufacturing must plan for equipment lifecycles in advance, incorporating replacement needs into the budget to avoid reacting hastily when cryptographic mechanisms must be changed.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "OT Environment", "Operational Technology", "PLC", "Firmware Security", "Forescout"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179409", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261007-14839",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV 透過 Dolby Atmos 升級 F1 內容，提供更沉浸式觀影體驗",
    summary: "Apple TV 宣布與 Dolby Laboratories 合作，自 10 月 23 日美國大獎賽週末起，將為其直播的 Formula 1 內容加入 Dolby Atmos 音效支援。這項升級旨在結合 Dolby Vision 與 Dolby Atmos，為粉絲提供更具沉浸感的觀看體驗。透過 Atmos 技術，觀眾可以更細膩地聽到引擎的轟鳴聲、賽道上的戰鬥聲，以及維修區的氣氛，讓觀影體驗更接近現場。目前 Apple TV 的 F1 串流權利僅涵蓋美國市場，但該服務仍包含在 Apple TV 的訂閱費用內，無需額外訂閱。Apple 透過此舉持續擴展其在體育內容的觀看體驗，並已在美國市場提供過其他 F1 內容，如《F1: Drive to Survive》第八季。",
    tags: ["Apple TV", "Dolby Atmos", "Formula 1", "Dolby Vision", "Apple One"],
    title_en: "Apple TV Upgrades F1 Content with Dolby Atmos for Enhanced Viewing Experience",
    summary_en: "Apple TV announced a partnership with Dolby Laboratories, starting from the US Grand Prix weekend on October 23rd, to incorporate Dolby Atmos audio support for its live Formula 1 content. This upgrade aims to combine Dolby Vision and Dolby Atmos, offering fans a more immersive viewing experience. Through Atmos technology, viewers can hear the subtle roar of engines, the sounds of battle on the track, and the atmosphere of the pit lane, making the viewing experience feel closer to the actual event. Currently, Apple TV's F1 streaming rights are limited to the US market, but the service is included in the Apple TV subscription fee, requiring no additional payment. With this move, Apple continues to expand its sports content viewing experience and has previously offered other F1 content in the US market, such as Season 8 of 'F1: Drive to Survive.'",
    tags_en: ["Apple TV", "Dolby Atmos", "Formula 1", "Dolby Vision", "Apple One"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/06/formula-1-on-apple-tv-is-getting-dolby-atmos-starting-this-month", lang: "EN" }
    ]
  },
  {
    id: "20261007-14840",
    trackers: ["os"],
    category: "重點關注",
    title: "報告指出 Apple 在 2026 年第二季超越三星，成為歐洲電信營運商渠道領先智慧型手機品牌",
    summary: "根據 Counterpoint Research 的報告，在 2026 年第二季，Apple 在歐洲電信營運商（carrier channel）的智慧型手機銷售市場份額超越了三星，成為該渠道的領先品牌。報告指出，雖然整體智慧型手機銷售額下降了 8%，但電信營運商的銷售表現優於更廣泛的開放市場。這主要是因為記憶體成本上升導致低階市場受挫，使得電信渠道的銷售傾向於高階和高端品牌，如 Apple。Apple 在歐洲電信渠道的銷售份額從 2025 年第二季的 33% 上升到 37%，而三星的份額則從 39% 下降至 34%。此外，中國品牌 vivo 和 Motorola 在電信銷售方面也呈現顯著增長。分析師預計，由於低階市場持續受到記憶體危機的影響，電信營運商渠道在未來幾個季度仍將持續增長。",
    tags: ["Apple", "Samsung", "Counterpoint Research", "歐洲市場", "智慧型手機", "電信營運商"],
    title_en: "Report indicates Apple surpassed Samsung in Q2 2026, becoming the leading smartphone brand through European carrier channels",
    summary_en: "According to a Counterpoint Research report, in the second quarter of 2026, Apple surpassed Samsung in the smartphone sales market share through European carrier channels, becoming the leading brand in this channel. The report notes that while overall smartphone sales declined by 8%, the carrier channel's performance outperformed the broader open market. This is primarily because rising memory costs hampered the low-end market, causing sales in the carrier channel to favor high-end and premium brands, such as Apple. Apple's sales share in the European carrier channel increased from 33% in Q2 2025 to 37%, while Samsung's share decreased from 39% to 34%. Furthermore, Chinese brands vivo and Motorola showed significant growth in carrier sales. Analysts predict that due to the continued impact of the memory crisis on the low-end market, the carrier channel will continue to grow in the coming quarters.",
    tags_en: ["Apple", "Samsung", "Counterpoint Research", "European Market", "Smartphone", "Carrier Channel"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/06/apple-overtakes-samsung-to-lead-european-carrier-smartphone-sales-in-q2-per-report", lang: "EN" }
    ]
  },
  {
    id: "20261007-14963",
    trackers: ["os"],
    category: "重點關注",
    title: "韓國總統呼籲政府應開發 AI 驅動的防禦工具，應對 AI 攻擊威脅",
    summary: "韓國總統 Lee Jae Myung 在公開場合發言，指出近期金融及公共機構接連發生個人資訊外洩事件，懷疑這些事件利用了人工智慧技術。他呼籲政府應迅速查明事件經過，並集中資源，建立能夠預先偵測和預防網路攻擊的安全能力。總統強調，韓國社會需要「徹底革新安全範式」以適應 AI 時代，要求公私部門合作，轉型技術、系統與意識。此外，文章提及澳洲政治人物也質疑 OpenAI 的代理人如何存取政府醫療紀錄網站，並討論了澳洲是否應修改版權法，以平衡 AI 產業發展與內容創作者權益。",
    tags: ["韓國", "AI 安全", "網路攻擊", "政府政策", "OpenAI", "版權法"],
    title_en: "South Korean President Calls for Government Development of AI-Driven Defense Tools to Counter AI Attacks",
    summary_en: "South Korean President Lee Jae Myung stated in a public address that recent instances of personal information leaks from financial and public institutions suggest the use of artificial intelligence technology. He urged the government to quickly investigate these incidents and concentrate resources on building security capabilities capable of preemptively detecting and preventing cyberattacks. The President emphasized that Korean society requires a 'fundamental paradigm shift in security' to adapt to the AI era, calling for public-private sector cooperation to transform technology, systems, and awareness. Additionally, the article mentions an Australian political figure questioning how OpenAI's agents accessed a government medical record website, and discusses whether Australia should amend its copyright law to balance AI industry development with content creator rights.",
    tags_en: ["South Korea", "AI Security", "Cyberattack", "Government Policy", "OpenAI", "Copyright Law"],
    sources: [
      { name: "The Register", url: "https://theregister.com/public-sector/2026/10/07/south-korean-president-calls-for-creation-of-tools-that-stop-all-cyber-attacks/5301533", lang: "EN" }
    ]
  },
  {
    id: "20261007-14964",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟更新 Azure 虛擬機實例生命週期，強調客戶需規劃遷移至最新世代",
    summary: "微軟近期發布了 Azure 虛擬機（VM）實例的「增強生命週期」定義，旨在為客戶提供更清晰的基礎設施過渡指引。該生命週期分為四個階段：Current（現行）、Extended（延伸）、End of Life（生命週期結束）和 Retired（退役）。Current 階段的 VM 適用於新部署，提供標準維護與支援；Extended 階段仍受支援，但可能受使用配額和定價變動影響，微軟建議客戶規劃轉移至 Current VM；End of Life 階段仍受支援，但僅限現有客戶使用，且客戶需主動轉移；而 Retired 階段則表示不支援，無法提供 IP 位址，但資料仍會保留。\n微軟強調此生命週期管理旨在讓基礎設施變革更具可預測性與透明度，並鼓勵客戶「現代化」至最新的 Azure 實例類型。儘管微軟的發言指出會提前通知特定舊世代 VM 系列進入 End of Life 階段，但文章指出該生命週期是否具備可預測的時間節奏仍不明確。微軟代表表示，客戶將會針對其特定的 VM 退役事宜收到直接通知，並提供時間、指導和資源來規劃轉移。整體而言，微軟持續推動客戶將工作負載遷移至最新、更高效能的實例類型。",
    tags: ["Microsoft", "Azure", "虛擬機", "VM", "雲端運算", "生命週期管理"],
    title_en: "Microsoft Updates Azure Virtual Machine Instance Lifecycle, Emphasizing Client Planning for Migration to Latest Generations",
    summary_en: "Microsoft recently introduced an 'Enhanced Lifecycle' definition for Azure Virtual Machine (VM) instances, aiming to provide clients with clearer infrastructure transition guidelines. This lifecycle is divided into four stages: Current, Extended, End of Life, and Retired. VMs in the Current stage are suitable for new deployments, offering standard maintenance and support; those in the Extended stage are still supported but may be subject to usage quotas and pricing changes, prompting Microsoft to advise clients to plan migration to Current VMs; the End of Life stage is still supported but is limited to existing customers, requiring proactive client migration; and the Retired stage indicates no support, no IP address provision, but data retention is maintained.\nMicrosoft emphasizes that this lifecycle management aims to make infrastructure changes more predictable and transparent, encouraging clients to 'modernize' to the latest Azure instance types. Although Microsoft stated that specific older VM series will be notified in advance regarding their entry into the End of Life stage, the article notes that the predictable timeline for this lifecycle remains unclear. A Microsoft representative stated that clients will receive direct notification regarding the retirement of their specific VM, along with time, guidance, and resources to plan the migration. Overall, Microsoft continues to push clients to migrate their workloads to the latest, most efficient instance types.",
    tags_en: ["Microsoft", "Azure", "Virtual Machine", "VM", "Cloud Computing", "Lifecycle Management"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/10/07/microsoft-defines-its-azure-instance-lifecycle-without-any-info-about-timing/5301526", lang: "EN" }
    ]
  },
  {
    id: "20261007-14770",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "로그프레소發：推出整合生成式 AI 使用紀錄的 SIEM 監控應用",
    summary: "隨著生成式 AI 在金融和大型企業的導入激增，企業的資安監控範圍也隨之擴大。로그프레소發布了「ChatGPT Enterprise」整合應用，旨在將生成式 AI 的使用紀錄與傳統的資安監控（SIEM）平台進行整合分析。此應用透過連接 OpenAI 的 ChatGPT Compliance API，能夠收集包括工作空間對話訊息、身份驗證、管理稽核、應用與模型上下文協議（MCP）呼叫、應用認證、Codex（OpenAI 的編碼代理）和自訂代理活動等共計 10 種深度日誌。安全人員可以利用這些 AI 稽核日誌，建立符合公司政策的自訂偵測規則，從而精準地偵測和追蹤 AI 使用過程中的異常活動。這不僅能協助企業進行內部稽核和法規遵循的準備，也能讓安全人員透過類似 ChatGPT 介面的對話紀錄查詢，確認敏感資訊的包含情況和使用情境。로그프레소表示，未來將持續擴大稽核整合範圍，目標是讓企業能在單一平台上收集並分析所有主流生成式 AI 服務的利用紀錄。",
    tags: ["로그프레소", "ChatGPT Enterprise", "SIEM", "生成式 AI", "OpenAI", "ChatGPT Compliance API"],
    title_en: "Logpresso Launches SIEM Monitoring Application Integrating Generative AI Usage Logs",
    summary_en: "As the adoption of generative AI rapidly increases in the finance and large enterprise sectors, the scope of corporate security monitoring is expanding. Logpresso has released the \"ChatGPT Enterprise\" integrated application, designed to integrate and analyze generative AI usage logs with traditional Security Information and Event Management (SIEM) platforms. By connecting to the OpenAI ChatGPT Compliance API, this application can collect a total of 10 types of deep logs, including workspace conversation messages, identity authentication, administrative audit, Model Context Protocol (MCP) calls, application certification, Codex (OpenAI's coding agent), and custom agent activities. Security personnel can utilize these AI audit logs to establish custom detection rules that comply with corporate policies, thereby accurately detecting and tracking anomalous activities during AI usage. This not only assists enterprises in preparing for internal audits and regulatory compliance but also allows security personnel to query conversation records, similar to the ChatGPT interface, to confirm the inclusion and context of sensitive information. Logpresso stated that it plans to continuously expand its audit integration scope, aiming to enable enterprises to collect and analyze usage records from all major generative AI services on a single platform.",
    tags_en: ["Logpresso", "ChatGPT Enterprise", "SIEM", "Generative AI", "OpenAI", "ChatGPT Compliance API"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146239", lang: "EN" }
    ]
  },
  {
    id: "20261007-14774",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "金融機構應選擇「私有底層SASE」而非「公網邊緣ZTNA」保護業務系統",
    summary: "隨著外部公開業務系統的威脅日益增加，資訊安全長（CISO）在選擇零信任網路存取（ZTNA）解決方案時面臨困境。文章指出，傳統的「入站ZTNA + IPS/IP阻斷」結合型方案（Public Edge）雖然能阻擋已知威脅，但存在致命缺陷：無法防禦零日攻擊（Zero-Day）或利用正常帳號的駭客，且其接入閘道（Gateway）的公網IP和埠（Port）仍會暴露在外，成為攻擊目標。作者建議應選擇「私有底層SASE」（Private Backbone SASE）方案，該方案能實現「原始地址隱藏」（Private Edge），將企業業務系統和內部連接器完全隱藏於全球專用底層網路（Private Backbone）後方。這能將攻擊面（Attack Surface）降至零，使攻擊者無法在網路上偵察到企業的實際伺服器或閘道設備。此外，真正的SASE還需提供整合的安全性控制，包括身份驗證（ZTNA）、資料外洩防護（CASB）和安全網關（SWG）等功能，並能即時（如1日內）透過底層網路進行高階漏洞修補和DDoS防禦。CISO應關注其是否能徹底消除公網IP暴露風險，並提供結構性的、無法被攻擊者直接突破的私有底層連接。",
    tags: ["ZTNA", "SASE", "Private Edge", "Public Edge", "CISO", "金融安全"],
    title_en: "Financial Institutions Should Choose 'Private Backbone SASE' Over 'Public Edge ZTNA' to Protect Business Systems",
    summary_en: "As the threat to externally exposed business systems increases, Chief Information Security Officers (CISOs) face dilemmas when selecting Zero Trust Network Access (ZTNA) solutions. The article points out that traditional combined solutions of 'Inbound ZTNA + IPS/IP Blocking' (Public Edge), while capable of blocking known threats, have fatal flaws: they cannot defend against Zero-Day attacks or hackers utilizing legitimate accounts, and their access gateway's public IP and port remain exposed, making them targets for attack. The author suggests opting for a 'Private Backbone SASE' solution, which achieves 'Private Edge' by completely concealing enterprise business systems and internal connectors behind a global dedicated backbone network (Private Backbone). This reduces the attack surface to zero, preventing attackers from discovering the company's actual servers or gateway equipment on the network. Furthermore, true SASE must provide integrated security controls, including Identity Authentication (ZTNA), Cloud Access Security Broker (CASB), and Secure Web Gateway (SWG) functions, and must be able to perform advanced vulnerability patching and DDoS defense through the backbone network in real-time (e.g., within one day). CISOs should focus on whether the solution can completely eliminate the risk of public IP exposure and provide a private backbone connection that is structural and cannot be directly breached by attackers.",
    tags_en: ["ZTNA", "SASE", "Private Edge", "Public Edge", "CISO", "Financial Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146222", lang: "EN" }
    ]
  },
  {
    id: "20261007-14792",
    trackers: ["security"],
    category: "產業動態",
    title: "Google Chrome、Apache HTTP Server 2.4等多產品曝多重漏洞，建議立即更新修補版本",
    summary: "本報告彙整了多個產品的資安警報，包括 Google Chrome、Apache HTTP Server 2.4、Mozilla 產品、OpenSSL、Fortinet FortiMail、Cisco Catalyst SD-WAN Manager、Apple 產品、Elastic 產品、WatchGuard、HPE、Pgpool-II 以及 NetScaler ADC/Gateway 等多個系統。多數漏洞皆為多重漏洞，建議用戶務必將受影響產品更新至修補版本以解決風險。特別指出 Fortinet FortiMail 存在未經身份驗證的遠端程式碼執行漏洞，且已確認有被惡用風險。此外，Cisco Catalyst SD-WAN Manager 的漏洞已確認遭利用，Apple 產品和 NetScaler ADC/Gateway 的漏洞也存在被惡用報告。用戶應參考各廠商官方提供的修補指南，並針對已確認被惡用的產品，採取緊急修補或實施權宜之計。",
    tags: ["Google Chrome", "Apache HTTP Server 2.4", "Fortinet", "OpenSSL", "Cisco", "Mozilla", "CVE", "資安漏洞"],
    title_en: "Google Chrome, Apache HTTP Server 2.4, and Multiple Products Exposed to Multiple Vulnerabilities; Immediate Update to Patched Versions Recommended",
    summary_en: "This report compiles cybersecurity alerts for multiple products, including Google Chrome, Apache HTTP Server 2.4, Mozilla products, OpenSSL, Fortinet FortiMail, Cisco Catalyst SD-WAN Manager, Apple products, Elastic products, WatchGuard, HPE, Pgpool-II, and NetScaler ADC/Gateway. The majority of these vulnerabilities are multiple flaws, and users are strongly advised to update affected products to patched versions to mitigate risk. Of particular concern is an unauthenticated Remote Code Execution vulnerability found in Fortinet FortiMail, which has been confirmed to be at risk of exploitation. Furthermore, vulnerabilities in Cisco Catalyst SD-WAN Manager have been confirmed exploited, and reports indicate active exploitation for vulnerabilities in Apple products and NetScaler ADC/Gateway. Users should refer to the official patch guides provided by each vendor and implement emergency patching or temporary mitigation measures for products confirmed to be exploited.",
    tags_en: ["Google Chrome", "Apache HTTP Server 2.4", "Fortinet", "OpenSSL", "Cisco", "Mozilla", "CVE", "Vulnerability"],
    sources: [
      { name: "JPCERT/CC", url: "https://jpcert.or.jp/wr/2026/wr261007.html", lang: "EN" }
    ]
  }
];
