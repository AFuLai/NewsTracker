// data-20260527.js — 2026-05-27
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-27"] = [
  {
    id: "20260527-001",
    trackers: ["security"],
    category: "重大事件",
    title: "拉丁美洲政府機構面臨數據外洩威脅：犯罪集團專攻公部門，利用地緣政治壓力進行勒索",
    summary: "拉丁美洲地區的網路犯罪集團正將政府機構和承包商作為主要目標，竊取並將公民數據進行變現。近期事件包括：某群體聲稱入侵了烏拉圭的政府身份服務，涉及數百萬公民記錄；另有駭客集體聲稱竊取了墨西哥多個政府機構的數據；在哥倫比亞，網路攻擊者曾針對國家衛生部進行大量攻擊。這些犯罪行為顯示，公部門已成為該地區最常遭受攻擊的產業。攻擊者傾向於「純勒索」攻擊，繞過加密階段，專注於高容量數據外傳，並利用地緣政治不穩定性、選舉和政治差異來增加威脅性。專家指出，攻擊者經常重複使用歷史或公開可用的數據，並將其偽裝成新的洩漏事件，以達到心理和公眾壓力。建議機構應加強身份安全、修補漏洞和保護暴露的基礎設施，以應對這種利用監管合規性進行勒索的威脅。",
    tags: ["拉丁美洲", "政府機構", "數據外洩", "勒索軟體", "公部門", "身份安全"],
    title_en: "Latin American Government Agencies Face Data Leak Threats: Criminal Groups Target Public Sector, Using Geopolitical Pressure for Ransom",
    summary_en: "Cybercrime groups in Latin America are targeting government agencies and contractors as primary objectives, stealing and monetizing citizen data. Recent incidents include: a group claiming to have breached Uruguay's government identity service, involving millions of citizen records; another hacker collective claiming to have stolen data from multiple Mexican government agencies; and in Colombia, cyber attackers targeting the national Ministry of Health with massive attacks. These criminal activities demonstrate that the public sector has become the most frequently attacked industry in the region. Attackers tend to execute 'pure ransomware' attacks, bypassing encryption stages and focusing on high-volume data exfiltration, while leveraging geopolitical instability, elections, and political differences to increase threat severity. Experts point out that attackers often reuse historical or publicly available data, disguising it as new leak incidents to generate psychological and public pressure. Agencies are advised to strengthen identity security, patch vulnerabilities, and protect exposed infrastructure to counter this threat of ransomware utilizing regulatory compliance.",
    tags_en: ["Latin America", "Government Agencies", "Data Leak", "Ransomware", "Public Sector", "Identity Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/latin-american-cybercriminals-government-data", lang: "EN" }
    ]
  },
  {
    id: "20260527-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "銀行木馬持續進化：Grandoreiro利用DLL側載與WebRTC、BTMOB RAT透過Android權限竊取資料",
    summary: "兩大銀行木馬家族 Grandoreiro 和 BTMOB 近期成為拉丁美洲和歐洲的目標。Grandoreiro 是一個自 2016 年以來持續活躍的銀行木馬，主要透過釣魚郵件傳播，並利用 DLL Side-Loading 技術，針對葡萄牙等地的銀行（如 Abanca、Banco de Portugal、BBVA PT 等）。新活動利用 Delphi 11 開發的 DLL，並結合 sgcWebSockets、STUN 和 ICE 等 WebRTC 相關協議，使得惡意流量偽裝成難以監控的網路會議流量。BTMOB 則是一種 Android 遠端存取木馬（RAT），最早於 2025 年二月出現。它透過釣魚網站引導受害者安裝惡意 APK，隨後利用 Android 權限服務（Accessibility Services）來獲取系統存取權限，具備解鎖設備、截圖、記錄按鍵和竊取憑證等功能。這兩類木馬的進化顯示，金融木馬正在結合釣魚、DLL 側載、雲服務濫用和反分析機制，使得傳統的表面防禦難以偵測。",
    tags: ["Grandoreiro", "BTMOB", "DLL Side-Loading", "WebRTC", "Android RAT", "釣魚攻擊"],
    title_en: "Banking Malware Continues to Evolve: Grandoreiro Uses DLL Side-Loading with WebRTC, BTMOB RAT Steals Data via Android Permissions",
    summary_en: "Two major banking malware families, Grandoreiro and BTMOB, have recently targeted Latin America and Europe. Grandoreiro is a banking trojan active since 2016, primarily spread through phishing emails. It utilizes DLL Side-Loading techniques, targeting banks in locations like Portugal (e.g., Abanca, Banco de Portugal, BBVA PT). The new activity uses a DLL developed with Delphi 11 and combines WebRTC-related protocols such as sgcWebSockets, STUN, and ICE, allowing malicious traffic to disguise itself as difficult-to-monitor network conferencing traffic. BTMOB is an Android Remote Access Trojan (RAT) that first appeared in February 2025. It guides victims to install malicious APKs via phishing websites, subsequently leveraging Android permission services (Accessibility Services) to gain system access. Its capabilities include unlocking devices, taking screenshots, logging keystrokes, and stealing credentials. The evolution of these two types of malware indicates that financial trojans are combining phishing, DLL Side-Loading, cloud service abuse, and anti-analysis mechanisms, making detection difficult for traditional perimeter defenses.",
    tags_en: ["Grandoreiro", "BTMOB", "DLL Side-Loading", "WebRTC", "Android RAT", "Phishing Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/grandoreiro-malware-and-btmob-rat.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "成熟的 SOC 應對現代威脅：從被動防禦轉向降低業務不確定性風險",
    summary: "現代網路威脅已不再是單純的「堡壘問題」，而是以常規活動的形式潛入，累積營運風險。成熟的資安營運中心（SOC）的職責已從單純的「偵測攻擊」轉變為「降低業務不確定性」。文章指出，營運中的任何未識別流程、未豐富的警報或延遲的調查，都會成為累積的「營運債務」。為此，成熟的 SOC 必須具備三個能力：1. 保持對新興威脅的持續可視性，利用即時的威脅情報（如 IP、網域、惡意程式變種）來預先偵測，將偵測系統從被動存檔轉為主動雷達。2. 豐富警報的上下文資訊，讓分析師能即時查詢 IP、網域、雜湊值等，大幅提高鑑別速度和信心。3. 提供「可執行」的報告，將技術分析結果自動轉化為針對不同受眾（技術、管理、合規）的行動建議，消除從「分析完成」到「響應啟動」的延遲。這些步驟能有效降低營運中斷、勒索軟體升級和合規失敗的風險。",
    tags: ["SOC", "威脅情報", "SIEM", "警報豐富化", "營運風險", "資安事件響應"],
    title_en: "Mature SOC Responding to Modern Threats: Shifting from Passive Defense to Reducing Business Uncertainty Risk",
    summary_en: "Modern cyber threats are no longer merely a 'fortress problem'; they infiltrate through routine activities, accumulating operational risk. The role of a mature Security Operations Center (SOC) has shifted from simply 'detecting attacks' to 'reducing business uncertainty.' The article points out that any unidentified process, unenriched alert, or delayed investigation in operation becomes accumulating 'operational debt.' Therefore, a mature SOC must possess three capabilities: 1. Maintaining continuous visibility into emerging threats, utilizing real-time threat intelligence (such as IPs, domains, and malware variants) for proactive detection, transforming detection systems from passive logging to active radar. 2. Enriching alert context information, allowing analysts to instantly query IPs, domains, hashes, and more, significantly improving identification speed and confidence. 3. Providing 'actionable' reports, automatically converting technical analysis results into actionable recommendations tailored for different audiences (technical, management, compliance), eliminating the delay from 'analysis completion' to 'response initiation.' These steps effectively mitigate the risks of operational disruption, ransomware escalation, and compliance failure.",
    tags_en: ["SOC", "Threat Intelligence", "SIEM", "Alert Enrichment", "Operational Risk", "Cybersecurity Incident Response"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/3-soc-steps-that-shut-down-incident.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Gitea 平台曝出 CVE-2026-27771 漏洞：未經授權可拉取私有容器鏡像",
    summary: "資安研究機構 Noscope 揭露 Gitea 版本控制平台存在一項嚴重漏洞 CVE-2026-27771。此漏洞影響所有早於 1.26.2 的 Gitea 版本，CVSS 分數為 8.2。攻擊者無需帳號密碼或任何憑證，即可從受影響的 Gitea 部署中拉取原本應為私有的容器鏡像。Noscope 評估，此漏洞可能影響全球超過 30,000 個部署，且已潛伏近四年，受影響產業涵蓋醫療、航空航太、零售和 ISP 等關鍵領域。由於私有標記未能提供預期保護，攻擊者可將私有鏡像視為公開。建議 Gitea 用戶應立即升級至 1.26.2 或更高版本。若無法立即修補，可暫時設定 `service.REQUIRE_SIGNIN_VIEW=true` 作為臨時緩解措施。",
    tags: ["Gitea", "CVE-2026-27771", "容器鏡像", "版本控制", "開源安全"],
    title_en: "Gitea Platform Exposed to CVE-2026-27771 Vulnerability: Unauthorized Retrieval of Private Container Images",
    summary_en: "Security research organization Noscope has revealed a critical vulnerability, CVE-2026-27771, in the Gitea version control platform. This vulnerability affects all Gitea versions prior to 1.26.2, with a CVSS score of 8.2. Attackers can retrieve container images that should be private from affected Gitea deployments without needing any credentials or passwords. Noscope estimates that this vulnerability could affect over 30,000 deployments globally, and it has been dormant for nearly four years. Affected industries include critical sectors such as healthcare, aerospace, retail, and ISPs. Because private tagging did not provide expected protection, attackers can treat private images as public. Gitea users are advised to immediately upgrade to version 1.26.2 or higher. If immediate patching is not possible, setting `service.REQUIRE_SIGNIN_VIEW=true` can serve as a temporary mitigation measure.",
    tags_en: ["Gitea", "CVE-2026-27771", "Container Images", "Version Control", "Open Source Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/gitea-vulnerability-exposes-private.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-005",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FBI警告：勒索集團Silent Ransom Group鎖定律師事務所，透過實體滲透與社工詐騙竊取客戶資料",
    summary: "聯邦調查局（FBI）警告，勒索集團Silent Ransom Group（SRG，亦稱Luna Moth、Chatty Spider、UNC3753）正鎖定律師事務所，並透過高度進階的社工詐騙手法進行攻擊。該集團自2022年以來已活躍，目標涵蓋保險、金融和醫療等領域。SRG的攻擊模式已從傳統的網路釣魚郵件，進化到實體滲透。攻擊者會冒充IT人員，透過電話或郵件要求受害者授予遠端桌面存取權限；若失敗，則會派遣人員親自到受害者現場，以「備份」或「影像化」為名目，物理性地插入儲存設備。一旦取得物理存取權，攻擊者會最小化權限提升，並使用WinSCP或Rclone等工具，將資料竊取（Exfiltrate）至Google Drive或OneDrive等雲端平台，或外部硬碟。SRG主要執行資料竊取勒索（Data Theft Extortion），威脅公開或出售資料，而非傳統加密勒索。FBI建議組織應驗證所有進入公司的人員身份，強制實施抗釣魚的MFA，並考慮限制敏感資料電腦的遠端存取和外部設備安裝權限。",
    tags: ["Silent Ransom Group", "FBI", "社工詐騙", "資料竊取", "律師事務所", "WinSCP", "Rclone"],
    title_en: "FBI Warns: Ransom Group Silent Ransom Group Targets Law Firms Using Physical Intrusion and Social Engineering Scams to Steal Client Data",
    summary_en: "The FBI warns that the ransomware group Silent Ransom Group (SRG), also known as Luna Moth, Chatty Spider, and UNC3753, is targeting law firms and conducting attacks using highly advanced social engineering techniques. The group has been active since 2022, targeting sectors including insurance, finance, and healthcare. SRG's attack pattern has evolved from traditional phishing emails to physical intrusion. Attackers impersonate IT personnel, requesting victims to grant remote desktop access via phone or email; if unsuccessful, they dispatch personnel to the victim's location, physically inserting storage devices under the guise of 'backup' or 'imaging.' Once physical access is obtained, the attackers minimize privilege escalation and use tools like WinSCP or Rclone to exfiltrate data to cloud platforms such as Google Drive or OneDrive, or to external hard drives. SRG primarily executes data theft extortion, threatening to publish or sell data, rather than traditional encryption ransomware. The FBI advises organizations to verify the identity of all personnel entering the company, enforce anti-phishing MFA, and consider restricting remote access and external device installation privileges for computers containing sensitive data.",
    tags_en: ["Silent Ransom Group", "FBI", "Social Engineering", "Data Theft", "Law Firm", "WinSCP", "Rclone"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/ransomware-actors-steal-law-firm-data", lang: "EN" }
    ]
  },
  {
    id: "20260527-006",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI輔助漏洞利用開發速度驚人提升：研究指出攻擊者利用 LLM 將 PoC 建立時間從 125 天縮至半天",
    summary: "根據 Cogent Research 的分析，攻擊者已開始利用 AI 工具（如大型語言模型 LLMs）大幅縮短開發漏洞利用程式（PoC）所需的時間。研究指出，在已知漏洞（CVE）的利用開發時間已從 125.3 天急劇縮短至僅 0.5 天。這使得傳統的漏洞掃描工具難以跟上攻擊速度，在漏洞揭露後的最高風險時期產生了顯著的「能見度缺口」（visibility gap）。\n\nCogent 分析了超過 69,159 個 CVE，發現高比例的關鍵漏洞（83.2%）未能得到主要商業掃描工具的偵測覆蓋。此外，即使有偵測簽名，仍有高比例的漏洞在偵測機制到位前就已開始被利用。專家建議，安全團隊應將重點從依賴掃描器轉向建立「平行偵測路徑」，結合軟體清單分析、軟體物料清單（SBOM）比對和威脅情報，以便在漏洞揭露後能迅速識別受影響資產，從而實現更及時的預防性應對。",
    tags: ["AI 攻擊", "LLM", "CVE", "PoC", "SBOM", "漏洞利用"],
    title_en: "AI Assistance Dramatically Accelerates Exploit Development: Research Shows Attackers Reduced PoC Creation Time from 125 Days to Half a Day",
    summary_en: "According to Cogent Research's analysis, attackers have begun utilizing AI tools (such as Large Language Models, LLMs) to drastically reduce the time required to develop Proof-of-Concept (PoC) exploits. The research indicates that the development time for exploiting known vulnerabilities (CVE) has sharply decreased from 125.3 days to just 0.5 days. This pace makes traditional vulnerability scanning tools struggle to keep up with the attack speed, creating a significant \"visibility gap\" during the highest-risk period after a vulnerability is disclosed.\n\nCogent analyzed over 69,159 CVEs and found that a high proportion of critical vulnerabilities (83.2%) were not covered by major commercial scanning tools. Furthermore, even when detection signatures exist, a high proportion of vulnerabilities are being exploited before detection mechanisms are in place. Experts recommend that security teams shift focus from relying solely on scanners to establishing a \"parallel detection path,\" combining Software Bill of Materials (SBOM) analysis and threat intelligence to quickly identify affected assets after a vulnerability is disclosed, thereby achieving more timely preventive response.",
    tags_en: ["AI Attacks", "LLM", "CVE", "PoC", "SBOM", "Exploitation"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/ai-assisted-exploit-development-scanner-detection", lang: "EN" }
    ]
  },
  {
    id: "20260527-007",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增三項已知遭利用漏洞：涵蓋Daemon Tools、TanStack及Nx Console等元件",
    summary: "美國網路安全局（CISA）宣布將三個新的漏洞納入其「已知遭利用漏洞目錄」（KEV Catalog）。這三個漏洞分別為CVE-2026-8398（Daemon Tools Lite嵌入惡意程式碼）、CVE-2026-45321（TanStack未指定漏洞）和CVE-2026-48027（Nx Console嵌入惡意程式碼）。CISA指出，這類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦政府機構構成重大風險。雖然相關的《強制執行指令》（BOD 22-01）主要要求聯邦民用行政部門修補，但CISA強烈敦促所有組織將修補KEV目錄中的漏洞，作為漏洞管理流程的優先事項，以降低整體網路暴露風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-8398", "CVE-2026-45321", "CVE-2026-48027", "漏洞管理"],
    title_en: "CISA Adds Three Known Exploited Vulnerabilities: Affecting Components Including Daemon Tools, TanStack, and Nx Console",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the inclusion of three new vulnerabilities in its 'Known Exploited Vulnerabilities Catalog' (KEV Catalog). These three vulnerabilities are CVE-2026-8398 (malicious code embedded in Daemon Tools Lite), CVE-2026-45321 (unspecified vulnerability in TanStack), and CVE-2026-48027 (malicious code embedded in Nx Console). CISA points out that these types of vulnerabilities are common attack vectors used by malicious actors and pose a significant risk to federal government agencies. Although the related 'Executive Order' (BOD 22-01) primarily mandates patching for federal civilian agencies, CISA strongly urges all organizations to prioritize patching vulnerabilities listed in the KEV Catalog as part of their vulnerability management process to reduce overall network exposure risk.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-8398", "CVE-2026-45321", "CVE-2026-48027", "Vulnerability Management"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/alerts/2026/05/27/cisa-adds-three-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260527-008",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安署檢測中國App：高德地圖等四款App被曝過度蒐集剪貼簿、健康紀錄及傳輸至中國伺服器",
    summary: "數位發展部資通安全署（資安署）委託資安院進行黑箱檢測，針對高德地圖、嗶哩嗶哩、愛奇藝及BIMOBIMO等四款中國App，檢測其核心風險。檢測結果顯示，高德地圖在Android平臺驗出十一項高風險行為，包括主動讀取剪貼簿、持續讀取地理位置、讀取通訊錄、健康紀錄，甚至在關閉狀態下傳輸資料至中國境內伺服器。資安署指出，這些行為已超出App核心功能所需，可能導致過度蒐集個資及增加資料外洩風險。相較之下，Google Maps未發現主動讀取剪貼簿的行為。資安署提醒，除了技術風險外，所有中國App皆面臨透過《網絡安全法》等法規，將用戶資料提供給中國政府部門的結構性風險。建議用戶應定期檢視App權限，並考慮在企業環境推動MAM技術進行設備隔離。",
    tags: ["高德地圖", "資安署", "中國App", "剪貼簿", "個資蒐集", "資料外洩", "行動裝置安全"],
    title_en: "Cybersecurity Agency Tests Chinese Apps: Gaode Maps and Three Others Exposed for Excessive Collection of Clipboard, Health Records, and Transmission to Chinese Servers",
    summary_en: "The Digital Development Ministry's Cybersecurity Agency (CSA) commissioned the Taiwan Institute of Computer Security (TICS) to conduct black-box testing on four Chinese apps: Gaode Maps, Bilibili, iQiyi, and BIMOBIMO, to assess their core risks. The test results revealed that Gaode Maps exhibited eleven high-risk behaviors on the Android platform, including actively reading the clipboard, continuously reading geographical location, accessing the contact list, and reading health records. Furthermore, it was found transmitting data to servers within mainland China even when the app was closed. The CSA pointed out that these behaviors exceed what is necessary for the app's core functionality, potentially leading to excessive personal data collection and increasing the risk of data leakage. In comparison, Google Maps was not found to actively read the clipboard. The CSA cautioned that beyond technical risks, all Chinese apps face structural risks of having user data provided to Chinese government departments under regulations such as the Cybersecurity Law. Users are advised to regularly review app permissions and consider promoting Mobile Application Management (MAM) technology in enterprise environments for device isolation.",
    tags_en: ["Gaode Maps", "Cybersecurity Agency", "Chinese Apps", "Clipboard", "Personal Data Collection", "Data Leakage", "Mobile Device Security"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176165", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ExifTool 處理 PNG 檔案時存在重大指令注入漏洞 (CVE-2026-3102)，macOS 用戶需立即升級至 13.50 版",
    summary: "開源影像元數據處理工具 ExifTool 在處理 PNG 檔案時，於 macOS 環境下存在一個指令注入漏洞 (CVE-2026-3102)。此漏洞影響 ExifTool 13.49 及更早版本，攻擊者可透過竄改圖片 metadata 中的 DateTimeOriginal 欄位，嵌入惡意 Shell 指令。當存在漏洞的 ExifTool 處理到此類特製圖片時，會觸發作業系統指令注入，進而執行任意指令，可能導致系統被控制或資料外洩。此漏洞的根源在於 ExifTool 在 macOS 處理 PNG 檔案時使用的 SetMacOSTags 函式。卡巴斯基研究團隊已揭露此問題，並在 ExifTool 13.50 版本中完成修補。企業用戶應特別注意，由於許多資產管理或影像處理平台直接整合 ExifTool，建議相關平台使用者務必確認其已升級至最新版本，以避免風險。",
    tags: ["ExifTool", "CVE-2026-3102", "指令注入", "macOS", "PNG", "開源軟體"],
    title_en: "Critical Command Injection Vulnerability in ExifTool When Processing PNG Files (CVE-2026-3102); macOS Users Must Upgrade to Version 13.50",
    summary_en: "The open-source image metadata processing tool ExifTool contains a command injection vulnerability (CVE-2026-3102) when processing PNG files in a macOS environment. This vulnerability affects ExifTool versions 13.49 and earlier. An attacker can exploit this by embedding malicious Shell commands within the DateTimeOriginal field of an image's metadata. When the vulnerable ExifTool processes such a specially crafted image, it triggers an operating system command injection, allowing the execution of arbitrary commands, which could potentially lead to system compromise or data leakage. The root cause of this vulnerability lies in the SetMacOSTags function used by ExifTool when handling PNG files on macOS. The Kaspersky research team has disclosed this issue and implemented a fix in ExifTool version 13.50. Enterprise users should pay special attention, as many asset management or image processing platforms directly integrate ExifTool. It is recommended that users of such platforms ensure they have upgraded to the latest version to mitigate risk.",
    tags_en: ["ExifTool", "CVE-2026-3102", "Command Injection", "macOS", "PNG", "Open-Source Software"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176164", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "互動資通平臺遭駭與數字科技原始碼外洩：資安事件警訊與開發流程風險分析",
    summary: "本文彙整了多起資安事件警訊，包括互動資通（Teamplus）的EVERY8D企業簡訊平臺疑似遭勒索軟體攻擊，F-ISAC已發布黃燈級警訊。此外，數字科技因開發測試流程疏失，導致包含會員姓名、身分證字號等敏感資訊的原始碼短暫外洩。其他重大事件包括：日本LMS KnowledgeDeliver存在CVE-2026-5426漏洞，被駭客植入Godzilla Webshell；北韓Lazarus駭客群轉用記憶體運作的RemotePE等惡意工具；以及7-Eleven發生超過60萬筆資料外洩事件。事件顯示，企業需強化開發流程管理、資安監控，並應注意供應鏈與基礎設施的潛在風險。",
    tags: ["互動資通", "EVERY8D", "F-ISAC", "數字科技", "CVE-2026-5426", "勒索軟體", "資料外洩"],
    title_en: "Interactive Communications Platform Hacked and Digital Technology Source Code Leaked: Cybersecurity Incident Warnings and Development Process Risk Analysis",
    summary_en: "This article compiles multiple cybersecurity incident warnings, including the suspected ransomware attack on Teamplus's EVERY8D corporate messaging platform, for which F-ISAC has issued a yellow alert. Furthermore, Digital Technology experienced a temporary leak of source code containing sensitive information such as member names and ID numbers due to development and testing process lapses. Other major incidents include: the KnowledgeDeliver LMS in Japan having a CVE-2026-5426 vulnerability, which was exploited by hackers to implant a Godzilla Webshell; the North Korean Lazarus group utilizing malicious tools such as memory-resident RemotePE; and the 7-Eleven data leak involving over 600,000 records. These incidents highlight the need for enterprises to strengthen development process management and cybersecurity monitoring, while also paying attention to potential risks in the supply chain and infrastructure.",
    tags_en: ["Teamplus", "EVERY8D", "F-ISAC", "Digital Technology", "CVE-2026-5426", "ransomware", "data leak"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176159", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google威脅情報揭露：中國網釣PhaaS平臺「YY来鱼」大規模偽造日本服務，全球擴散威脅",
    summary: "Google威脅情報小組（GTIG）公布一宗網路釣魚威脅，指出一個名為「YY来鱼」的PhaaS平臺。該平臺利用高度自動化的「在地化即服務」模式，大規模發動精準的網路釣魚攻擊。自2024年8月以來，其核心目標鎖定日本市場，提供超過400種釣魚模板，深度偽造Amazon、Apple、PayPay、JR鐵路、任天堂等日本民眾日常服務。攻擊者利用當地消費習慣與時事主題，如電力補助等名義引誘受害者。該平臺支援RCS與iMessage加密簡訊，並具備真人驗證機制，能規避電信業者過濾與資安廠商自動化掃描。GTIG警告，雖然目前以日本為主要目標，但此類中文自動化PhaaS體系已向美洲、歐洲、澳洲及中東擴散，構成全球性的資安威脅。",
    tags: ["Google威脅情報小組", "GTIG", "PhaaS平臺", "網路釣魚", "在地化攻擊", "中國駭客"],
    title_en: "Google Threat Intelligence Reveals Chinese PhaaS Platform 'YY来鱼' Massively Spoofing Japanese Services, Globalizing Threat",
    summary_en: "The Google Threat Intelligence Group (GTIG) has disclosed a phishing threat originating from a PhaaS platform named 'YY来鱼'. This platform utilizes a highly automated 'localization-as-a-service' model to launch large-scale, sophisticated phishing attacks. Since August 2024, its primary target has been the Japanese market, offering over 400 phishing templates that deeply spoof daily services used by Japanese citizens, including Amazon, Apple, PayPay, JR Railway, and Nintendo. The attackers exploit local consumption habits and current events, such as power subsidies, to lure victims. The platform supports RCS and iMessage encrypted messaging and includes a human verification mechanism, allowing it to bypass carrier filtering and automated security vendor scanning. GTIG warns that while Japan is currently the main target, this type of Chinese automated PhaaS system has spread to the Americas, Europe, Australia, and the Middle East, constituting a global cybersecurity threat.",
    tags_en: ["Google Threat Intelligence Group", "GTIG", "PhaaS platform", "Phishing", "Localization Attack", "Chinese Hackers"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176161", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "7-Zip修補CVE-2026-48095：警告處理NTFS映像檔時的堆積緩衝區溢位漏洞",
    summary: "廣受使用的開源壓縮工具7-Zip發布了26.01版更新，修補了一個可能導致執行任意程式碼的重大漏洞CVE-2026-48095。此漏洞屬於堆積緩衝區溢位弱點，存在於7-Zip處理NTFS映像檔的過程中。攻擊者可利用特製的NTFS映像檔，由於7-Zip在處理NTFS壓縮資料流緩衝區時記憶體配置不足，觸發此漏洞。該漏洞的CVSS嚴重性評分為8.8分。Security Lab報告指出，在記憶體較小的系統上，此漏洞可能導致系統拒絕服務（DoS）；而在擁有16GB以上記憶體的系統上，則可能造成緩衝區溢位。值得注意的是，惡意NTFS映像檔無需使用特定副檔名，可偽裝成其他類型檔案，只要用戶開啟即可觸發。建議所有用戶應儘速更新至7-Zip 26.01版或更高版本。",
    tags: ["7-Zip", "CVE-2026-48095", "堆積緩衝區溢位", "NTFS映像檔", "開源軟體", "漏洞修補"],
    title_en: "7-Zip Patches CVE-2026-48095: Stack Buffer Overflow Vulnerability When Handling NTFS Images",
    summary_en: "The widely used open-source compression tool 7-Zip has released version 26.01, patching a critical vulnerability, CVE-2026-48095, which could lead to arbitrary code execution. This vulnerability is a stack buffer overflow weakness that exists during 7-Zip's processing of NTFS images. An attacker can exploit this vulnerability using a specially crafted NTFS image. Due to insufficient memory allocation in 7-Zip when handling the NTFS compressed data stream buffer, this vulnerability can be triggered. The CVSS severity score for this vulnerability is 8.8. Security Lab reported that on systems with limited memory, this vulnerability may cause a Denial of Service (DoS); however, on systems with 16GB or more of memory, it could lead to a buffer overflow. Notably, the malicious NTFS image does not require a specific file extension and can masquerade as other types of files, triggering the vulnerability simply by the user opening it. All users are advised to update to 7-Zip version 26.01 or later as soon as possible.",
    tags_en: ["7-Zip", "CVE-2026-48095", "Stack Buffer Overflow", "NTFS Image", "Open-Source Software", "Vulnerability Patch"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176155", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "KnowledgeDeliver LMS遭RCE漏洞攻擊：相同金鑰讓多平臺易受，駭客植入Webshell與惡意指令碼",
    summary: "日本學習管理系統（LMS）KnowledgeDeliver存在重大資安漏洞CVE-2026-5426。該漏洞源於系統使用相同的ASP.NET機器金鑰，允許未經身分驗證的攻擊者利用惡意ViewState進行反序列化攻擊，最終可達成遠端執行任意程式碼（RCE），CVSS風險評分為9.1分。Google Mandiant指出，由於不同客戶部署的KnowledgeDeliver平臺使用相同金鑰，一旦任一伺服器被攻陷，所有暴露在網際網路的平臺都面臨風險。駭客組織已濫用此權限，在平臺注入名為Godzilla（BlueBeam）的Webshell，該惡意程式在記憶體執行，難以被檔案掃描偵測。攻擊者還嘗試透過修改IIS權限和網頁檔案，誘騙使用者下載偽造的資安外掛程式，最終目的是感染Cobalt Strike的Beacon。建議用戶應立即更新至Digital Knowledge提供的修補版本，並提高對系統權限和使用者行為的監控。",
    tags: ["KnowledgeDeliver", "CVE-2026-5426", "RCE", "ASP.NET", "Webshell", "Cobalt Strike", "LMS"],
    title_en: "KnowledgeDeliver LMS Targeted by RCE Vulnerability: Shared Key Exposes Multiple Platforms, Allowing Webshell and Malicious Script Injection",
    summary_en: "A critical security vulnerability, CVE-2026-5426, has been found in the Japanese Learning Management System (LMS) KnowledgeDeliver. The vulnerability stems from the system's use of a shared ASP.NET machine key, which allows unauthenticated attackers to perform deserialization attacks using malicious ViewState, ultimately achieving Remote Code Execution (RCE), with a CVSS score of 9.1. Google Mandiant pointed out that because different client deployments of KnowledgeDeliver use the same key, if any single server is compromised, all internet-exposed platforms are at risk. Threat actors have already exploited this vulnerability to inject a Webshell named Godzilla (BlueBeam) into the platform. This malicious code executes in memory, making it difficult to detect via file scanning. Attackers have also attempted to modify IIS permissions and web page files to trick users into downloading fake security plugins, with the ultimate goal of infecting Cobalt Strike Beacon. Users are advised to immediately update to the patched version provided by Digital Knowledge and enhance monitoring of system permissions and user behavior.",
    tags_en: ["KnowledgeDeliver", "CVE-2026-5426", "RCE", "ASP.NET", "Webshell", "Cobalt Strike", "LMS"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176146", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-014",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "關於個人資料處理政策的說明與權益保障",
    summary: "本文為『보안뉴스』根據《個人資訊保護法》第 30 條所制定的個人資料處理政策。內容涵蓋了個人資料的蒐集目的（如會員註冊、客戶諮詢、文章投稿、合作申請等）、資料的保留期限（依用途不同，如會員資料至退會時，客戶諮詢資料保留 1 年）。文章詳細說明了資料的處理基礎為「主體同意」，並強調了資料的利用目的限制。此外，政策也闡述了資料主體行使權利（如查閱、更正、刪除、處理停止）的流程與方式。在安全措施方面，『보안뉴스』採取了內部管理計畫、技術防護（如安裝安全程式、外部접근 통제）、以及物理存取控制等措施。文章最後提供了個人資料保護責任者及相關的外部諮詢機構聯絡方式，旨在確保資訊主體的權益與個人資料的安全性。",
    tags: ["個人資訊保護法", "個人資料處理政策", "主體", "個人情報保護", "보안뉴스"],
    title_en: "Statement on Personal Data Processing Policy and Rights Protection",
    summary_en: "This article presents the personal data processing policy formulated by 'Boan News' in accordance with Article 30 of the Personal Information Protection Act. The content covers the purposes for collecting personal data (such as membership registration, client consultation, article submission, and cooperation applications), the retention period for the data (which varies by purpose, such as membership data until withdrawal, and client consultation data retained for 1 year). The article details that the basis for data processing is 'subject consent' and emphasizes the limitation of data usage purposes. Furthermore, the policy elaborates on the procedures and methods for data subjects to exercise their rights (such as access, correction, deletion, and cessation of processing). Regarding security measures, 'Boan News' implements internal management plans, technical safeguards (such as installing security programs and external access control), and physical access controls. Finally, the article provides contact information for the personal data protection officer and relevant external consulting organizations, aiming to ensure the rights of the data subject and the security of personal data.",
    tags_en: ["Personal Information Protection Act", "Personal Data Processing Policy", "Data Subject", "Personal Information Protection", "Boan News"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/ad_info/ad_info03.asp?kind=03", lang: "EN" }
    ]
  },
  {
    id: "20260527-015",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "npm 惡意套件「mouse5212-super-formatter」竊取 Anthropic Claude 工作區資料，警惕開源專案風險",
    summary: "資安研究人員發現一個名為「mouse5212-super-formatter」的惡意 npm 套件。該套件偽裝成內部「歸檔部署同步」工具，旨在在套件安裝後（postinstall stage）執行惡意行為。它會透過獲取受害者環境中的 GitHub 存取權杖或使用硬編碼權杖，自動與 GitHub 進行身份驗證，並將本地工作區（特別是 Anthropic Claude AI 工具用於處理上傳和輸出的 `/mnt/user-data` 目錄）的所有檔案，遞迴地上傳到攻擊者控制的 GitHub 帳號。攻擊者還會寫入虛假的網路連線日誌，以掩蓋未經授權收集和遠端傳輸本地資料的真實行為。雖然該套件仍可從 npm 下載，但研究機構警告，惡意程式碼的門檻降低，未來將出現更多模仿 APT 組織的「sloppy malwares」，建議開發者應嚴格審查所有第三方 npm 套件，並實施更完善的 CI/CD 管線安全措施。",
    tags: ["npm", "mouse5212-super-formatter", "Anthropic Claude", "開源專案", "GitHub", "供應鏈攻擊"],
    title_en: "Malicious npm package 'mouse5212-super-formatter' steals Anthropic Claude workspace data; beware of open-source project risks",
    summary_en: "Cybersecurity researchers discovered a malicious npm package named 'mouse5212-super-formatter'. This package disguises itself as an internal 'archive deployment synchronization' tool, designed to execute malicious actions during the postinstall stage. It automatically authenticates with GitHub by obtaining access tokens from the victim's environment or by using hardcoded tokens, and then recursively uploads all files from the local workspace (specifically the `/mnt/user-data` directory, which is used by Anthropic Claude AI for handling uploads and outputs) to an attacker-controlled GitHub account. The attacker also writes fake network connection logs to conceal the actual behavior of unauthorized local data collection and remote transmission. Although the package is still available for download from npm, research institutions warn that the barrier for malicious code is lowering, and more 'sloppy malwares' mimicking APT organizations will appear in the future. Developers are advised to strictly review all third-party npm packages and implement more robust CI/CD pipeline security measures.",
    tags_en: ["npm", "mouse5212-super-formatter", "Anthropic Claude", "Open-Source Projects", "GitHub", "Supply Chain Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/malicious-npm-package-stole-files-from.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-016",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "CrowdStrike與Google聯手瓦解GlassWorm惡意軟體，阻斷多層次供應鏈攻擊C2通道",
    summary: "CrowdStrike、Google與Shadowserver Foundation宣布，成功同時瓦解了GlassWorm惡意軟體所有命令與控制（C2）通道。GlassWorm是一種持續性的軟體鏈戰役，主要目標是透過惡意套件和擴充功能攻擊軟體開發人員。攻擊者利用開發人員對程式碼儲存庫、雲端平台、CI/CD管線和套件註冊庫的存取權，實施供應鏈攻擊。該惡意軟體透過投毒VS Code擴充功能（發布於Microsoft VS Code Marketplace和Open VSX）以及惡意npm和Python套件，竊取開發者憑證（如GitHub、NPM、OpenVSX token和加密貨幣錢包）。GlassWorm還部署了Websocket基的JavaScript RAT（GlassWormRAT），用於竊取瀏覽器資料、截圖和按鍵輸入。其攻擊的複雜性在於其多層次的C2通道設計，結合了Solana區塊鏈、BitTorrent DHT、Google Calendar等合法服務作為「死信箱解析器」，極具韌性。本次協同行動成功中和了所有四個通道，阻止了受感染設備接收新指令或負載。",
    tags: ["GlassWorm", "供應鏈攻擊", "VS Code擴充功能", "npm", "C2通道", "軟體開發者", "CrowdStrike"],
    title_en: "CrowdStrike and Google Collaborate to Dismantle GlassWorm Malware, Blocking Multi-Layered Supply Chain Attack C2 Channels",
    summary_en: "CrowdStrike, Google, and Shadowserver Foundation announced the successful simultaneous dismantling of all Command and Control (C2) channels used by the GlassWorm malware. GlassWorm is a persistent software supply chain campaign primarily targeting software developers through malicious packages and extensions. Attackers exploit developers' access to code repositories, cloud platforms, CI/CD pipelines, and package registries to execute supply chain attacks. The malware steals developer credentials (such as GitHub, NPM, OpenVSX tokens, and cryptocurrency wallet keys) by deploying poisoned VS Code extensions (published on the Microsoft VS Code Marketplace and Open VSX) and malicious npm and Python packages. GlassWorm also deploys a WebSocket-based JavaScript RAT (GlassWormRAT) to steal browser data, screenshots, and keystrokes. The complexity of its attack lies in its multi-layered C2 channel design, which utilizes legitimate services such as Solana blockchain, BitTorrent DHT, and Google Calendar as 'dead-letter resolvers,' making it highly resilient. This collaborative action successfully neutralized all four channels, preventing infected devices from receiving new commands or payloads.",
    tags_en: ["GlassWorm", "Supply Chain Attack", "VS Code Extension", "npm", "C2 Channel", "Software Developer", "CrowdStrike"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/glassworm-malware-takedown-disrupts.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-017",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Google警告：中文駭客PhaaS平臺利用AI技術，提升全球網釣能力並規避偵測",
    summary: "Google威脅情報小組（GTIG）警告，中文駭客主導的網路釣魚即服務（PhaaS）市場正在迅速擴張，並利用AI自動化工具提升全球網釣能力。這些平臺已從過去由俄語駭客主導的局面，轉變為一個成熟的地下犯罪供應鏈。攻擊者不再使用靜態模板，而是採用AI網頁產生器搭配Puppeteer等工具，僅需提供目標URL，系統即可複製合法網站的HTML、CSS與JavaScript，使得傳統特徵碼偵測難以奏效。其攻擊手段已從單純收集密碼，進一步演化至即時攔截一次性密碼（OTP），甚至能結合竊取的信用卡資訊，對受害者設備的數位錢包發動攻擊。這些PhaaS平臺提供網域名稱註冊、VPS代管等配套服務，讓犯罪者能更快速地對全球民眾發動攻擊。",
    tags: ["Google威脅情報小組", "PhaaS", "AI自動化", "網路釣魚", "Puppeteer", "OT/ICS 設備漏洞"],
    title_en: "Google Warns: Chinese Hackers Use PhaaS Platforms and AI to Enhance Global Phishing Capabilities and Evade Detection",
    summary_en: "Google Threat Intelligence Group (GTIG) warns that the phishing-as-a-service (PhaaS) market, driven by Chinese hackers, is rapidly expanding and utilizing AI automation tools to enhance global phishing capabilities. These platforms have transitioned from a previously Russian-dominated landscape into a mature underground criminal supply chain. Attackers no longer use static templates; instead, they employ AI webpage generators combined with tools like Puppeteer. By merely providing a target URL, the system can replicate the HTML, CSS, and JavaScript of legitimate websites, making traditional signature-based detection difficult. Their attack methods have evolved from simply collecting passwords to intercepting one-time passwords (OTP) in real-time, and can even combine stolen credit card information to attack victims' digital wallets. These PhaaS platforms provide supporting services such as domain name registration and VPS hosting, allowing criminals to launch attacks against global populations more quickly.",
    tags_en: ["Google Threat Intelligence Group", "PhaaS", "AI automation", "Phishing", "Puppeteer", "OT/ICS device vulnerabilities"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176158", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-018",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "警惕AI誘餌攻擊：駭客濫用Google廣告與Claude分享頁面散播macOS惡意軟體",
    summary: "本篇報導揭露一種新型的惡意軟體散播手法，攻擊者利用熱門AI工具Claude Code作為誘餌，結合Google搜尋廣告，目標鎖定有意下載與安裝桌面版Claude Code的macOS用戶。攻擊者會讓用戶在Google廣告中看到指向合法Anthropic網域claude.ai的連結。點擊後，用戶會進入一個偽裝成「Apple Support」的Claude對話分享頁面，內容看似是安裝教學，但夾帶的終端機指令實際上會從攻擊者控制的網域下載並安裝名為MacSync的惡意程式。此攻擊的巧妙之處在於，它沒有建立虛假網域，而是利用了合法平台（Google廣告與claude.ai）的信任基礎，並透過Base64編碼來隱藏惡意連結。為避免受害，用戶應直接從官方網站下載應用程式，並務必參考Claude官方文件取得操作指令，而非直接執行來源不明的指令。",
    tags: ["Claude Code", "macOS", "Google廣告", "惡意軟體", "釣魚攻擊", "Anthropic"],
    title_en: "Beware of AI Lure Attacks: Hackers Abuse Google Ads and Claude Share Pages to Spread macOS Malware",
    summary_en: "This report reveals a new malware distribution technique where attackers use popular AI tools like Claude Code as bait, combined with Google search ads, targeting macOS users who intend to download and install the desktop version of Claude Code. The attackers make users see a link in Google Ads pointing to the legitimate Anthropic domain, claude.ai. Upon clicking, the user enters a Claude dialogue share page disguised as \"Apple Support.\" While the content appears to be installation instructions, the embedded terminal command actually downloads and installs malicious software named MacSync from an attacker-controlled domain. The sophistication of this attack lies in the fact that it does not establish a fake domain but rather leverages the trust foundation of legitimate platforms (Google Ads and claude.ai), and hides the malicious link using Base64 encoding. To avoid falling victim, users should download applications directly from the official website and must refer to official Claude documentation for instructions, rather than executing commands from unknown sources.",
    tags_en: ["Claude Code", "macOS", "Google Ads", "Malware", "Phishing Attack", "Anthropic"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176139", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-019",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android AppLock 應用程式存在繞過生物識別驗證的漏洞 (CVE-2025-68712)",
    summary: "本漏洞（CVE-2025-68712）影響 SpSoft AppLock (com.sp.protector.free) 的 7.9.40 版本，是一款用於 Android 平台的應用程式。該應用程式雖然整合了 Android 的生物識別機制（如指紋或 PIN 驗證），但其鎖定功能是透過自定義的疊層（custom overlay）實現的，導致驗證機制無法持續強制執行。攻擊者若能利用應用程式的介面流動（cascading interface flows）和暴露的路由，透過廣告或瀏覽器意圖（intents）等方式進行不安全的導航，便可以在未重新進行身份驗證的情況下退出鎖定介面，從而存取受保護的應用程式，例如 Chrome。這可能導致資訊洩露和權限提升。建議使用者應關注該應用程式的更新，並考慮使用更可靠的系統級安全機制來保護敏感資料。",
    tags: ["Android", "CVE-2025-68712", "SpSoft AppLock", "生物識別", "資訊洩露", "權限提升"],
    title_en: "Android AppLock Application Contains Vulnerability Bypassing Biometric Authentication (CVE-2025-68712)",
    summary_en: "This vulnerability (CVE-2025-68712) affects version 7.9.40 of SpSoft AppLock (com.sp.protector.free), an application for the Android platform. Although the application integrates Android's biometric mechanisms (such as fingerprint or PIN authentication), its locking function is implemented via a custom overlay, which prevents the authentication mechanism from being continuously enforced. If an attacker can exploit the application's cascading interface flows and exposed routes by performing unsafe navigation—for example, through advertisements or browser intents—they can exit the locked interface without re-authenticating, thereby accessing protected applications such as Chrome. This could lead to information leakage and privilege escalation. Users are advised to monitor for updates to this application and consider using more reliable system-level security mechanisms to protect sensitive data.",
    tags_en: ["Android", "CVE-2025-68712", "SpSoft AppLock", "Biometric Authentication", "Information Leakage", "Privilege Escalation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68712", lang: "EN" }
    ]
  },
  {
    id: "20260527-020",
    trackers: ["security"],
    category: "前瞻技術",
    title: "管理「影子AI」工具的五步驟：建立可見性與治理框架",
    summary: "隨著員工在日常工作中使用越來越多個AI輔助工具（如寫作助理、編碼副駕駛等），許多工具透過OAuth或瀏覽器擴充功能連接到企業數據，形成了「影子AI」的治理盲區。這些工具往往繞過了傳統網路安全監控，使安全團隊缺乏能見度。文章指出，應透過建立一套完整的AI治理流程來解決此問題。建議的五步驟包括：1. 建立全面的AI工具清單，涵蓋OAuth連接、瀏覽器擴充功能和內建AI功能；2. 制定實用且具教育性的政策，明確列出核准工具、數據分類規則和數據訓練退出選項；3. 建立快速申請流程，減少新工具導入的摩擦；4. 採用持續監控作為共享的安全層，為安全團隊提供即時能見度，並提醒員工潛在風險；5. 考慮使用AI工具的風險評分和分類。實務上，企業應將AI治理視為提升員工工作效率與安全性的雙向機制。",
    tags: ["AI治理", "影子AI", "OAuth", "瀏覽器擴充功能", "數據洩露", "AI工具"],
    title_en: "Five Steps to Manage 'Shadow AI' Tools: Establishing Visibility and Governance Frameworks",
    summary_en: "As employees increasingly use various AI assistance tools (such as writing assistants, coding copilots, etc.) in their daily work, many of these tools connect to corporate data via OAuth or browser extensions, creating a governance blind spot known as 'Shadow AI.' These tools often bypass traditional network security monitoring, leaving security teams with limited visibility. The article suggests that this problem should be solved by establishing a comprehensive AI governance process. The five recommended steps include: 1. Establishing a comprehensive inventory of AI tools, covering OAuth connections, browser extensions, and built-in AI functionalities; 2. Developing practical and educational policies that clearly list approved tools, data classification rules, and data training opt-out options; 3. Creating a rapid application process to reduce friction when introducing new tools; 4. Implementing continuous monitoring as a shared security layer, providing real-time visibility for security teams and reminding employees of potential risks; and 5. Considering risk scoring and classification for the use of AI tools. Practically, enterprises should view AI governance as a dual mechanism for enhancing both employee efficiency and security.",
    tags_en: ["AI Governance", "Shadow AI", "OAuth", "Browser Extensions", "Data Leakage", "AI Tools"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/5-steps-to-managing-shadow-ai-tools.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-021",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI聊天機器人被惡用：駭客透過LLM推薦惡意下載，植入持久性後門進行挖礦",
    summary: "微軟警告，駭客正在利用人工智慧（AI）聊天機器人作為新的社會工程學媒介，將惡意下載網站的連結植入到大型語言模型（LLM）的生成回應中。攻擊者偽裝成如 CrystalDiskInfo、HWMonitor 等合法系統工具，目標是高階 GPU 設備的用戶。攻擊鏈首先透過搜尋引擎優化（SEO）中毒，隨後轉移至 AI 聊天機器人介面。用戶點擊連結後，下載的 ZIP 檔案包含一個惡意 DLL，該 DLL 會使用 msiexec.exe 安裝 ScreenConnect，建立持久性遠端存取。最終，惡意程式會使用 Process Hollowing 等技術，在受信任的微軟簽名二進位檔下執行挖礦程式（如 gminer），並透過 PowerShell 腳本或註冊表鍵確保持久性，同時偵測並終止如 Task Manager 等安全工具的運行。微軟已偵測並阻擋了此類活動，建議用戶提高警覺，並留意來自AI介面的軟體推薦連結。",
    tags: ["AI 聊天機器人", "LLM", "社會工程學", "挖礦", "ScreenConnect", "Process Hollowing"],
    title_en: "AI Chatbots Exploited: Hackers Use LLMs to Recommend Malicious Downloads and Implant Persistent Backdoors for Mining",
    summary_en: "Microsoft warns that hackers are utilizing Artificial Intelligence (AI) chatbots as a new social engineering vector, embedding links to malicious download sites within the generated responses of Large Language Models (LLMs). Attackers disguise themselves as legitimate system tools, such as CrystalDiskInfo and HWMonitor, targeting users of high-end GPU equipment. The attack chain begins with Search Engine Optimization (SEO) poisoning, which then transfers to the AI chatbot interface. After a user clicks the link, the downloaded ZIP file contains a malicious DLL. This DLL uses msiexec.exe to install ScreenConnect, establishing persistent remote access. Finally, the malware uses techniques like Process Hollowing to execute mining programs (such as gminer) under trusted Microsoft-signed binaries, ensuring persistence via PowerShell scripts or registry keys, while also detecting and terminating security tools like Task Manager. Microsoft has detected and blocked this type of activity, advising users to remain vigilant and pay attention to software recommendation links originating from AI interfaces.",
    tags_en: ["AI Chatbots", "LLM", "Social Engineering", "Mining", "ScreenConnect", "Process Hollowing"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/ai-chatbot-recommendations-redirect.html", lang: "EN" }
    ]
  },
  {
    id: "20260527-022",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安產業演進回顧：從周邊防禦到 AI 原生安全，應對雲端、行動與物聯網挑戰",
    summary: "本文回顧了資安產業過去二十年的演變歷程，指出其核心焦點已從傳統的網路周邊防禦（Perimeter Defense）轉向更複雜、更分散的現代安全模型。早期資安主要關注防毒軟體和防火牆，缺乏對無密碼設備和數據傳輸加密的重視。隨著雲端運算（如 AWS S3/EC2）、行動裝置（iPhone、Android）和物聯網（IoT）的普及，企業的攻擊面急劇擴大，數據不再局限於企業內部網路。這使得傳統的「重灌設備」或「封鎖 IP」的防禦模式失效。現代資安已成為企業的戰略重點，重點轉移到身份管理、數據保護和應對複雜的系統入侵。此外，文章提到，隨著 AI 的興起，資安防禦也正迎來新一波的技術創新，要求企業必須考慮如美國 SEC 的網路揭露規則和歐盟 GDPR 等法規遵循性。修補建議是將安全視為業務連續性的戰略要素，並採用更全面的、以身份和數據為中心的防禦思維。",
    tags: ["資安產業演進", "周邊防禦", "雲端運算", "物聯網", "AI 安全", "身份管理", "GDPR"],
    title_en: "Reviewing the Evolution of the Cybersecurity Industry: From Perimeter Defense to AI-Native Security, Addressing Challenges in Cloud, Mobile, and IoT",
    summary_en: "This article reviews the evolution of the cybersecurity industry over the past two decades, pointing out that its core focus has shifted from traditional network perimeter defense to more complex and distributed modern security models. Early cybersecurity primarily focused on antivirus software and firewalls, lacking emphasis on passwordless devices and data transmission encryption. With the proliferation of cloud computing (such as AWS S3/EC2), mobile devices (iPhone, Android), and the Internet of Things (IoT), the enterprise attack surface has dramatically expanded, and data is no longer confined to the internal corporate network. This rendered traditional defense models like 're-imaging devices' or 'blocking IPs' ineffective. Modern cybersecurity has become a strategic priority for enterprises, shifting focus to identity management, data protection, and responding to complex system intrusions. Furthermore, the article notes that with the rise of AI, cybersecurity defense is undergoing a new wave of technological innovation, requiring enterprises to consider regulatory compliance such as the US SEC's network disclosure rules and the EU GDPR. The remediation suggestion is to view security as a strategic element of business continuity and adopt a more comprehensive, identity- and data-centric defense mindset.",
    tags_en: ["Cybersecurity Industry Evolution", "Perimeter Defense", "Cloud Computing", "Internet of Things", "AI Security", "Identity Management", "GDPR"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/cybersecurity-evolution-perimeter-defense-to-ai-native-security", lang: "EN" }
    ]
  },
  {
    id: "20260527-023",
    trackers: ["security"],
    category: "前瞻技術",
    title: "NIST擴展PQC標準化評選：九種額外數位簽章方案晉級，加速企業後量子密碼遷移",
    summary: "美國國家標準與技術研究院（NIST）持續推動後量子密碼（PQC）體系標準化，近期宣布「額外數位簽章方案」的PQC競賽進入第三輪評選。本次共有九種演算法（包括FAEST、HAWK、MAYO等）晉級，旨在分散單一數學基礎的風險，提升系統安全性。NIST預計將進行為期兩年的評估，檢驗各演算法的效率與抗攻擊能力。\n\n儘管有更多演算法入選，NIST仍提醒企業不應延遲PQC遷移計畫。在數位簽章方面，企業可立即採用已發布的FIPS 204（ML-DSA）與FIPS 205（SLH-DSA）。此外，通用加密（KEM）標準FIPS 203（ML-KEM）已正式發布，建議企業盡速採納。雖然未來標準如FIPS 207仍在制定，但現有標準已足夠支持企業先行部署，應掌握時機，規劃資安升級。",
    tags: ["NIST", "PQC", "後量子密碼", "數位簽章", "FIPS 204", "FIPS 203"],
    title_en: "NIST Expands PQC Standardization Evaluation: Nine Additional Digital Signature Schemes Advance, Accelerating Enterprise Post-Quantum Cryptography Migration",
    summary_en: "The U.S. National Institute of Standards and Technology (NIST) continues to drive the standardization of Post-Quantum Cryptography (PQC) systems, recently announcing that the PQC competition for 'additional digital signature schemes' has entered its third round of evaluation. Nine algorithms (including FAEST, HAWK, and MAYO) have advanced, aiming to diversify risk away from single mathematical foundations and enhance system security. NIST expects to conduct a two-year evaluation to test the efficiency and resistance of each algorithm to attacks. Despite the inclusion of more algorithms, NIST reminds enterprises not to delay their PQC migration plans. For digital signatures, enterprises can immediately adopt the published FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA). Furthermore, the general encryption (KEM) standard FIPS 203 (ML-KEM) has been officially released, and enterprises are advised to adopt it as soon as possible. Although future standards like FIPS 207 are still under development, current standards are sufficient to support early enterprise deployment; organizations should seize the opportunity and plan their security upgrades.",
    tags_en: ["NIST", "PQC", "Post-Quantum Cryptography", "Digital Signature", "FIPS 204", "FIPS 203"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176166", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260527-024",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Tauri 框架存在遠端 URL 誤判為本地來源的漏洞 (CVE-2026-42184)",
    summary: "Tauri 是一個用於建構多平台桌面應用程式的框架。該漏洞 (CVE-2026-42184) 存在於 Tauri 的 `is_local_url()` 函式中，影響版本範圍為 2.0 至 2.11.0。在 Windows 和 Android 系統上，Tauri 會將自訂 URI 方案（custom URI scheme）映射到 `http://<scheme>.localhost/`。問題出在 Tauri 判斷來源是否為本地時，僅檢查了 URL 的第一個子網域。攻擊者可以利用此缺陷，在一個子網域與應用程式自訂方案匹配的網域上託管頁面，從而使應用程式誤判該遠端來源為可信的本地來源。此漏洞已在版本 2.10.3 中修復。建議使用者立即升級至 2.10.3 或更高版本，以防止遭受遠端攻擊。",
    tags: ["Tauri", "CVE-2026-42184", "跨平台", "WebView", "SSRF", "Windows", "Android"],
    title_en: "Tauri Framework Vulnerable to Remote URL Misjudgment as Local Source (CVE-2026-42184)",
    summary_en: "Tauri is a framework used for building multi-platform desktop applications. The vulnerability (CVE-2026-42184) exists in Tauri's `is_local_url()` function and affects versions ranging from 2.0 to 2.11.0. On Windows and Android systems, Tauri maps custom URI schemes to `http://<scheme>.localhost/`. The problem is that when Tauri determines if a source is local, it only checks the URL's first subdomain. An attacker can exploit this flaw by hosting a page on a domain that matches the application's custom scheme subdomain, causing the application to mistakenly judge the remote source as a trusted local source. This vulnerability was fixed in version 2.10.3. Users are advised to immediately upgrade to version 2.10.3 or higher to prevent remote attacks.",
    tags_en: ["Tauri", "CVE-2026-42184", "Cross-platform", "WebView", "SSRF", "Windows", "Android"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-42184", lang: "EN" }
    ]
  },
  {
    id: "20260527-025",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "TVING 宣布 2028 年版權策略調整：強調 AI 內容與內容生態系合作",
    summary: "本篇報導主要為 TVING 平台發布的內容策略更新資訊，而非資安事件或技術漏洞分析。內容指出 TVING 將在 2028 年調整版權策略，未來將更側重於 AI 內容的整合與應用，並強調與內容生態系夥伴的深度合作。平台在內容獲取方面，除了傳統的版權購買外，也將納入 AI 內容的生成與應用，這預示著串流媒體產業將加速 AI 技術的整合，改變傳統的內容供應鏈模式。對於用戶和產業觀察者而言，這代表未來觀影體驗將更加多元，但同時也需關注內容版權和 AI 內容的法律規範與倫理問題。原文未提供任何技術細節、CVE 或修補建議。",
    tags: ["TVING", "內容策略", "AI 內容", "版權", "串流媒體"],
    title_en: "TVING Announces 2028 Copyright Strategy Adjustment: Emphasizing AI Content and Content Ecosystem Collaboration",
    summary_en: "This report primarily covers content strategy updates released by the TVING platform, rather than a cybersecurity incident or technical vulnerability analysis. The content indicates that TVING will adjust its copyright strategy in 2028, placing greater emphasis on the integration and application of AI content, and highlighting deep collaboration with content ecosystem partners. In terms of content acquisition, in addition to traditional copyright purchasing, the platform will also incorporate the generation and application of AI content. This suggests that the streaming media industry will accelerate the integration of AI technology, changing the traditional content supply chain model. For users and industry observers, this means that future viewing experiences will be more diverse, but attention must also be paid to the legal regulations and ethical issues surrounding content copyrights and AI content. The original text does not provide any technical details, CVEs, or patching recommendations.",
    tags_en: ["TVING", "Content Strategy", "AI Content", "Copyright", "Streaming Media"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/ad_info/ad_info04.asp?kind=04", lang: "EN" }
    ]
  }
];
