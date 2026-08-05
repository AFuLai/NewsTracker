// data-20260407.js — 2026-04-07
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-07"] = [
  {
    id: "20260407-001",
    trackers: ["eu_cra", "security"],
    category: "法令更新",
    title: "歐盟《網路韌性法案》（CRA）確立數位產品最低資安標準，要求製造商實施「安全設計」與「SBOM」",
    summary: "歐盟頒布的《網路韌性法案》（Cyber Resilience Act, CRA）是首個為所有在歐盟市場銷售的連網產品設定最低資安標準的法規。受影響產品範圍極廣，涵蓋從消費性電子產品（如智慧型手機、穿戴裝置）到B2B軟體、複雜的工業系統，只要包含「數位元素」即受規範。法案要求製造商必須遵循「安全設計」（secure by design）和「預設安全」（secure by default）原則，在產品開發初期即納入資安考量。實務上，製造商需進行風險評估，並整合生成「軟體物料清單」（SBOM）來詳述產品所使用的所有軟體組件。此外，產品需提供整個支援週期（通常為五年）的資安更新，並透過新的中央平台向ENISA報告重大漏洞。法案將透過協調標準（如CEN、CENELEC、ETSI）來具體化要求，有助於市場的統一化與透明化。",
    tags: ["Cyber Resilience Act", "CRA", "歐盟", "資安法規", "SBOM", "安全設計"],
    title_en: "EU Cyber Resilience Act (CRA) Establishes Minimum Cybersecurity Standards for Digital Products, Mandating 'Secure by Design' and 'SBOM'",
    summary_en: "The Cyber Resilience Act (CRA) issued by the EU is the first regulation to set minimum cybersecurity standards for all connected products sold on the EU market. The scope of affected products is extremely broad, covering everything from consumer electronics (such as smartphones and wearables) to B2B software and complex industrial systems; any product containing a 'digital element' is subject to regulation. The Act requires manufacturers to adhere to the principles of 'secure by design' and 'secure by default,' integrating cybersecurity considerations from the initial stages of product development. Practically, manufacturers must conduct risk assessments and generate a 'Software Bill of Materials' (SBOM) to detail all software components used in the product. Furthermore, products must provide cybersecurity updates throughout their entire support lifecycle (typically five years) and report major vulnerabilities to ENISA via a new central platform. The Act will specify these requirements through harmonized standards (such as those from CEN, CENELEC, and ETSI), helping to achieve market standardization and transparency.",
    tags_en: ["Cyber Resilience Act", "CRA", "EU", "Cybersecurity Regulation", "SBOM", "Secure by Design"],
    sources: [
      { name: "BSI（德國）", url: "https://bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Cyber_Resilience_Act/cyber_resilience_act_node.html", lang: "EN" }
    ]
  },
  {
    id: "20260407-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "俄羅斯駭客利用舊型路由器DNS劫持竊取微軟帳號憑證：APT28活動分析",
    summary: "資安專家警告，與俄羅斯軍情單位相關的駭客組織「Forest Blizzard」（亦稱 APT28/Fancy Bear）正在利用舊型、缺乏安全更新的網際網路路由器上的已知漏洞，大規模竊取微軟 Office 使用者的身份驗證 Token。該攻擊活動無需部署惡意軟體，僅透過修改路由器系統的 DNS 設定，將使用者導向駭客控制的虛擬私人伺服器。攻擊者能夠在使用者完成多因素驗證後，攔截傳輸的 OAuth 驗證 Token，從而直接取得受害者帳號的存取權，無需進行傳統的釣魚攻擊。此次活動主要針對政府機構、外事部、執法部門等，影響範圍超過 18,000 台路由器。受影響的設備多為 SOHO 市場的 Mikrotik 和 TP-Link 等品牌路由器。修補建議是應立即更新或更換支援安全補丁的路由器設備，並加強對 DNS 流量的監控，以防範 DNS 劫持攻擊。",
    tags: ["APT28", "Forest Blizzard", "DNS劫持", "Mikrotik", "TP-Link", "OAuth Token", "微軟 Office"],
    title_en: "Russian Hackers Exploit Old Router DNS Hijacking to Steal Microsoft Account Credentials: APT28 Activity Analysis",
    summary_en: "Cybersecurity experts warn that the hacking group 'Forest Blizzard' (also known as APT28/Fancy Bear), which is linked to Russian military intelligence units, is exploiting known vulnerabilities in outdated, unpatched internet routers to steal identity authentication Tokens from Microsoft Office users on a large scale. This attack activity does not require the deployment of malware; it merely modifies the router's DNS settings to redirect users to a hacker-controlled Virtual Private Server (VPS). The attackers are able to intercept the OAuth authentication Token transmitted after the user completes multi-factor authentication, thereby gaining direct access to the victim's account without needing traditional phishing attacks. This activity primarily targets government agencies, foreign affairs departments, and law enforcement divisions, affecting over 18,000 routers. The affected devices are mainly Mikrotik and TP-Link brand routers from the SOHO market. The recommended remediation is to immediately update or replace the routers with devices that support security patches, and to strengthen monitoring of DNS traffic to prevent DNS hijacking attacks.",
    tags_en: ["APT28", "Forest Blizzard", "DNS Hijacking", "Mikrotik", "TP-Link", "OAuth Token", "Microsoft Office"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/04/russia-hacked-routers-to-steal-microsoft-office-tokens", lang: "EN" }
    ]
  },
  {
    id: "20260407-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Medusa勒索軟體集團（Storm-1175）快速利用零日漏洞攻擊關鍵基礎設施",
    summary: "資安公司微軟報告指出，Medusa勒索軟體集團（代號 Storm-1175）作為RaaS組織，自2021年以來持續活躍，已在關鍵基礎設施領域攻擊超過300個組織。該集團以雙重勒索（加密資料並竊取資料）為特點，主要透過釣魚和利用未修補的漏洞取得初始存取權。Storm-1175的攻擊速度極快，能在數小時內完成從初始入侵到資料外洩和加密勒索的整個流程。他們擅長利用新公開的漏洞，甚至在漏洞公開前七天就進行攻擊，例如利用SmarterMail的CVE-2026-23760和GoAnywhere MFT的CVE-2025-10035等零日漏洞。攻擊鏈包含利用多個安全缺陷達成遠端程式碼執行（RCE），並針對Linux系統（如Oracle WebLogic）進行攻擊。攻擊者在取得管理員權限後，還會使用腳本從Veeam備份軟體中恢復密碼，以擴大勒索範圍。建議受影響組織應持續盤點和監控內部及外部系統，並特別注意修補和加固邊界資產。",
    tags: ["Medusa", "Storm-1175", "RaaS", "零日漏洞", "CVE-2026-23760", "關鍵基礎設施"],
    title_en: "Medusa Ransomware Group (Storm-1175) Rapidly Exploits Zero-Day Vulnerabilities to Attack Critical Infrastructure",
    summary_en: "Security firm Microsoft reports that the Medusa ransomware group (codenamed Storm-1175), operating as a RaaS organization, has been active since 2021 and has attacked over 300 organizations in the critical infrastructure sector. The group is characterized by double extortion (encrypting data and stealing data), primarily gaining initial access through phishing and exploiting unpatched vulnerabilities. Storm-1175's attack speed is extremely fast, completing the entire process from initial intrusion to data exfiltration and encrypted ransomware within hours. They are skilled at exploiting newly disclosed vulnerabilities, even attacking seven days before the vulnerability is public, such as using zero-day vulnerabilities in SmarterMail's CVE-2026-23760 and GoAnywhere MFT's CVE-2025-10035. The attack chain involves exploiting multiple security flaws to achieve Remote Code Execution (RCE), targeting Linux systems (such as Oracle WebLogic). After gaining administrator privileges, attackers also use scripts to recover passwords from Veeam backup software to expand the scope of the ransomware. Affected organizations are advised to continuously inventory and monitor internal and external systems, paying special attention to patching and hardening boundary assets.",
    tags_en: ["Medusa", "Storm-1175", "RaaS", "Zero-Day Vulnerability", "CVE-2026-23760", "Critical Infrastructure"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/medusa-ransomware-fast-to-exploit-vulnerabilities-breached-systems", lang: "EN" }
    ]
  },
  {
    id: "20260407-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 報告：電網資安風險轉移，攻擊目標從控制系統轉向支援與管理系統",
    summary: "Dragos 的《2026 OT/ICS 資安年度回顧》指出，電網的資安風險已不再是傳統假設的「需要直接駭入控制系統」才能造成重大干擾。攻擊者（如 ELECTRUM）已轉向更具隱蔽性的目標，即電網營運所需的支援、監控和管理系統。攻擊者正在利用遠端存取基礎設施、工程工作站，以及提供能見度、協調和控制的 IT 系統。這使得風險發生在 IT 與 OT 的交界處，難以區分授權使用與敵對行為。此外，電網整合了分散式能源資源（DER）、電池儲能系統（BESS）和工業物聯網，雖然提升了能力，但也增加了新的存取路徑和依賴性。Dragos 觀察到，缺乏 OT 資產能見度是最大的風險驅動因素，且 ICS 漏洞的利用速度極快，有時在揭露後幾乎沒有防禦時間。",
    tags: ["Dragos", "OT/ICS", "電網資安", "DER", "BESS", "ELECTRUM", "資安風險"],
    title_en: "Dragos Report: Grid Security Risks Shift, Attack Targets Move from Control Systems to Support and Management Systems",
    summary_en: "Dragos's '2026 OT/ICS Cybersecurity Annual Review' points out that grid cybersecurity risks no longer assume that major disruption requires direct hacking of control systems. Attackers (such as ELECTRUM) have shifted to more covert targets: the support, monitoring, and management systems required for grid operations. Attackers are utilizing remote access infrastructure, engineering workstations, and IT systems that provide visibility, coordination, and control. This means that risks are occurring at the intersection of IT and OT, making it difficult to distinguish between authorized use and hostile activity. Furthermore, as grids integrate Distributed Energy Resources (DER), Battery Energy Storage Systems (BESS), and industrial IoT, while enhancing capability, they also increase new access paths and dependencies. Dragos observes that the lack of OT asset visibility is the biggest risk driver, and that ICS vulnerabilities are exploited extremely quickly, often leaving little time for defense after disclosure.",
    tags_en: ["Dragos", "OT/ICS", "Grid Cybersecurity", "DER", "BESS", "ELECTRUM", "Cybersecurity Risk"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/blog/electric-grid-cybersecurity-threats", lang: "EN" }
    ]
  }
];
