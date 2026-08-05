// data-20260529.js — 2026-05-29
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-29"] = [
  {
    id: "20260529-001",
    trackers: ["security"],
    category: "重大事件",
    title: "遊輪營運商Carnival及有線電視業者Charter遭駭：兩大公司資料外洩事件分析",
    summary: "全球遊輪營運業者Carnival及其子公司荷美遊輪，以及美國有線電視業者Charter Communications，近期均證實發生資料外洩事件。駭客組織ShinyHunters在4月宣稱竊取Carnival的客戶資料，Carnival隨後透過緬因州政府檢察長辦公室申報，確認受影響人數接近600萬人。洩漏的資料類型包括姓名、出生日期、性別、電子郵件、地區及忠誠方案等。另一個受害者是Charter，駭客聲稱利用語音釣魚（Vishing）騙取一名員工的Microsoft Entra帳號，並於4月1日從Salesforce執行個體匯出約4000萬筆記錄。駭客聲稱竊取資料包含姓名、電子郵件、住家地址、電話號碼及客戶專線資訊。儘管Charter表示未洩漏敏感個資或客戶網路專線資訊，但兩起事件均顯示大型企業面臨嚴重的身份盜用與資料外洩風險。建議企業應強化員工資安教育，特別針對語音釣魚等社交工程攻擊，並實施多層次的身份驗證機制。",
    tags: ["Carnival", "Charter Communications", "ShinyHunters", "資料外洩", "語音釣魚", "Microsoft Entra", "客戶資料"],
    title_en: "Cruise Operator Carnival and Cable TV Provider Charter Hacked: Analysis of Data Leak Incidents Affecting Two Major Companies",
    summary_en: "Global cruise operator Carnival, along with its subsidiary Holland America Line, and US cable TV provider Charter Communications, have recently confirmed data leakage incidents. The hacker group ShinyHunters announced in April that they had stolen Carnival's customer data. Carnival subsequently reported this through the Maine Attorney General's office, confirming that nearly 6 million people were affected. The leaked data types include names, dates of birth, gender, email addresses, location, and loyalty program details. Another victim was Charter, which the hackers claimed to have compromised by using Vishing to trick an employee into revealing a Microsoft Entra account. On April 1st, the hackers allegedly executed an individual export from Salesforce, involving approximately 40 million records. The stolen data reportedly includes names, email addresses, home addresses, phone numbers, and customer dedicated line information. Although Charter stated that no sensitive personal information or customer network line information was leaked, both incidents highlight the severe risks of identity theft and data leakage faced by large enterprises. It is recommended that companies strengthen employee cybersecurity education, especially regarding social engineering attacks such as Vishing, and implement multi-layered identity verification mechanisms.",
    tags_en: ["Carnival", "Charter Communications", "ShinyHunters", "Data Leakage", "Vishing", "Microsoft Entra", "Customer Data"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176205", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-002",
    trackers: ["eu_cra", "security"],
    category: "法令更新",
    title: "印度CERT-In發布新指導方針：因應AI加速攻擊，要求企業在12小時內修補核心關鍵資產漏洞",
    summary: "印度網路安全主管機關CERT-In發布最新指導方針（CISG-2026-02），因應AI技術加速駭客發現、武器化和濫用漏洞的趨勢，大幅縮短了企業修補漏洞的時程。指導方針指出，傳統數週的修補週期已無法應對新一代自主化攻擊。具體要求包括：若為已公開利用的「核心關鍵資產」漏洞，必須在發現後12小時內進行修補、緩解或隔離；重大漏洞（風險值9.0）應於24小時內修補；高風險一般漏洞則須於5天內完成。此外，CERT-In也要求組織必須實施零信任架構、導入多因素驗證（MFA）、最小權限管理，並強化內網微分段，同時要求所有資安事件必須在6小時內通報。指導方針也鼓勵企業使用AI防禦工具，並定期進行AI輔助攻擊的安全教育，如深偽辨識和AI紅隊演練。然而，業界專家對12小時的修補時程提出質疑，認為時間過於緊迫，但普遍認為此類法規是迫使企業轉向持續性防禦態勢的必要調整。",
    tags: ["CERT-In", "AI攻擊", "漏洞修補", "零信任", "核心關鍵資產", "資安法規"],
    title_en: "India's CERT-In Issues New Guidelines: Mandating Vulnerability Patching for Core Critical Assets within 12 Hours Amid Accelerated AI Attacks",
    summary_en: "India's Computer Emergency Response Team - Indian Agency (CERT-In) has issued the latest guidelines (CISG-2026-02). Due to the trend of AI technology accelerating the discovery, weaponization, and exploitation of vulnerabilities, the guidelines significantly shorten the timeline for enterprises to patch vulnerabilities. The guidelines point out that the traditional patching cycle of several weeks is no longer adequate to counter new generations of autonomous attacks. Specific requirements include: for 'core critical assets' vulnerabilities that are publicly exploited, patching, mitigation, or isolation must occur within 12 hours of discovery; major vulnerabilities (risk score 9.0) must be patched within 24 hours; and high-risk general vulnerabilities must be addressed within 5 days. Furthermore, CERT-In mandates that organizations must implement Zero Trust architecture, introduce Multi-Factor Authentication (MFA), enforce least privilege management, and strengthen internal network micro-segmentation. It also requires that all security incidents must be reported within 6 hours. The guidelines also encourage enterprises to utilize AI defense tools and conduct regular security training, such as deepfake identification and AI red teaming. However, industry experts have questioned the 12-hour patching timeline, deeming it overly aggressive, but generally agree that such regulations are a necessary adjustment forcing companies toward a continuous defense posture.",
    tags_en: ["CERT-In", "AI Attacks", "Vulnerability Patching", "Zero Trust", "Core Critical Assets", "Cybersecurity Regulations"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176211", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-003",
    trackers: ["eu_cra", "security"],
    category: "法令更新",
    title: "歐盟通過《網路韌性法案》（CRA）新規定：為具數位元素的產品設定橫向資安要求",
    summary: "歐盟議會和理事會於 2024 年 10 月 23 日通過了《網路韌性法案》（Cyber Resilience Act, CRA）的綜合文本（Regulation (EU) 2024/2847）。此法規旨在為所有具備數位元素的產品設定統一的橫向網路資安要求，涵蓋從硬體到軟體的整個生命週期。其實務影響極大，要求產品製造商必須在設計階段就納入資安考量（Security by Design），並在產品上市後持續進行維護與更新。法案擴大了資安責任範圍，涵蓋了供應鏈管理、漏洞揭露（VD）義務，並明確了產品需符合特定的資安標準。企業和產品開發商必須密切關注此法規的具體實施細則和施行時程，以確保產品的合規性。建議相關產業應立即評估其產品線的資安風險，並規劃符合歐盟新標準的產品生命週期管理體系。",
    tags: ["歐盟", "Cyber Resilience Act", "CRA", "資安法規", "產品安全", "數位產品"],
    title_en: "EU Passes New Regulations under Cyber Resilience Act (CRA): Establishing Horizontal Cybersecurity Requirements for Products with Digital Elements",
    summary_en: "On October 23, 2024, the European Parliament and Council adopted the comprehensive text of the Cyber Resilience Act (Regulation (EU) 2024/2847). This regulation aims to establish unified horizontal cybersecurity requirements for all products containing digital elements, covering the entire lifecycle from hardware to software. Its practical impact is significant, requiring product manufacturers to incorporate security considerations at the design stage (Security by Design) and to continuously maintain and update products after they are placed on the market. The Act expands the scope of cybersecurity responsibility to include supply chain management, vulnerability disclosure (VD) obligations, and specifies that products must comply with certain cybersecurity standards. Companies and product developers must closely monitor the specific implementation details and enforcement timeline of this regulation to ensure product compliance. It is recommended that relevant industries immediately assess the cybersecurity risks of their product lines and plan a product lifecycle management system compliant with the new EU standards.",
    tags_en: ["EU", "Cyber Resilience Act", "CRA", "Cybersecurity Regulation", "Product Safety", "Digital Product"],
    sources: [
      { name: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/2847", lang: "EN" }
    ]
  },
  {
    id: "20260529-004",
    trackers: ["eu_cra", "security"],
    category: "法令更新",
    title: "歐盟《網路韌性法案》（CRA）修訂：強化數位產品的橫向資安要求",
    summary: "歐盟頒布了《網路韌性法案》（Regulation (EU) 2024/2847），旨在全面提升歐盟市場數位產品的網路安全標準。此法案要求所有具有數位元素的產品，無論其產業別，都必須內建資安設計和安全功能。它涵蓋了產品的整個生命週期，從設計、開發、製造到產品退役。實務上，這代表製造商必須建立更嚴格的資安管理系統，並在產品上市前進行全面的安全評估。對於企業和產品開發商而言，必須重新審視其產品的資安架構，確保符合法案規定的安全要求，以避免未來市場准入的障礙。建議相關產業應密切關注法案的具體實施細則和官方指引，提前規劃產品的資安設計與供應鏈管理。",
    tags: ["歐盟", "Cyber Resilience Act", "CRA", "資安法規", "數位產品", "網路安全"],
    title_en: "EU Cyber Resilience Act (CRA) Revision: Strengthening Cybersecurity Requirements for Digital Products",
    summary_en: "The EU has enacted the Cyber Resilience Act (Regulation (EU) 2024/2847), aiming to comprehensively elevate cybersecurity standards for digital products across the EU market. This law mandates that all products with digital elements, regardless of their industry, must incorporate security-by-design and secure functionalities. It covers the entire product lifecycle, from design, development, and manufacturing to product decommissioning. Practically, this means manufacturers must establish more stringent cybersecurity management systems and conduct comprehensive security assessments before product market entry. For enterprises and product developers, it is essential to re-evaluate their product's security architecture to ensure compliance with the law's safety requirements, thereby avoiding future market access barriers. It is recommended that relevant industries closely monitor the law's specific implementation details and official guidelines, and proactively plan for product cybersecurity design and supply chain management.",
    tags_en: ["EU", "Cyber Resilience Act", "CRA", "Cybersecurity Regulations", "Digital Products", "Cybersecurity"],
    sources: [
      { name: "EUR-Lex", url: "https://eur-lex.europa.eu/EN/legal-content/summary/horizontal-cybersecurity-requirements-for-products-with-digital-elements.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-005",
    trackers: ["eu_cra"],
    category: "法令更新",
    title: "歐盟 NIS 2 指令擴大範圍，要求成員國提升網路與資訊安全標準",
    summary: "隨著網路威脅持續增長，歐盟的《網路與資訊安全指令》（NIS 2 指令）已取代舊版指令，旨在提升歐盟各成員國的整體資安防護水平。本指令大幅擴大了適用範圍和目標，要求更多涉及公民日常生活的實體加強安全措施。為此，法國國家資安機構 ANSSI 透過分享「法國網路資安資料庫」（ReCyF）工作文件，提供了符合 NIS 2 目標的建議措施清單。雖然 ReCyF 目前為非約束性文件，但其為企業提供了參考依據。此外，ANSSI 也設立了線上預先註冊服務，協助企業了解並準備符合 NIS 2 指令的國家轉置要求。企業應關注指令的國家轉置進度，並參考 ANSSI 提供的資源進行安全體系建構。",
    tags: ["NIS 2 指令", "歐盟", "網路安全", "ANSSI", "法令更新", "資安合規"],
    title_en: "EU NIS 2 Directive Expands Scope, Mandating Member States to Elevate Cybersecurity Standards",
    summary_en: "As cyber threats continue to grow, the EU's Network and Information Security Directive (NIS 2 Directive) has replaced the older directive, aiming to elevate the overall cybersecurity defense level across all EU member states. This directive significantly expands its scope and targets, requiring more entities involved in citizens' daily lives to strengthen their security measures. To this end, France's National Cybersecurity Agency (ANSSI) has provided a list of recommended measures aligned with NIS 2 objectives through the sharing of the 'French Cybersecurity Database' (ReCyF) working document. Although ReCyF is currently non-binding, it offers a reference framework for businesses. Furthermore, ANSSI has established an online pre-registration service to help companies understand and prepare for the national transposition requirements of the NIS 2 Directive. Companies should monitor the progress of the directive's national transposition and utilize resources provided by ANSSI to build their security systems.",
    tags_en: ["NIS 2 Directive", "EU", "Cybersecurity", "ANSSI", "Legal Updates", "Cybersecurity Compliance"],
    sources: [
      { name: "ANSSI（法國）", url: "https://cyber.gouv.fr/en/regulations/the-nis-2-directive", lang: "EN" }
    ]
  },
  {
    id: "20260529-006",
    trackers: ["security"],
    category: "重大事件",
    title: "資安分析揭露：The Com 犯罪集團利用網路犯罪所得支持暴力與性剝削",
    summary: "Flashpoint 分析指出，一個名為 The Com 的跨國犯罪生態系統，正在利用其網路犯罪所得，支持更廣泛的暴力和性剝削犯罪。該集團包含「Hacker Com」、「Extortion Com」和「IRL Com」三個子集，成員多為北美地區的年輕人，並從遊戲社群和社群媒體招募，常涉及對兒童的性剝削和恐嚇。Hacker Com 負責網路攻擊，包括 SIM 卡交換、DDoS 攻擊和勒索軟體，曾針對 Okta、Salesforce 和 Microsoft365 等雲端與 SaaS 平台。分析強調，這三個子集之間存在高度重疊性，犯罪所得會被重新投入到整個犯罪體系，用於資助實體攻擊和維持犯罪基礎設施。專家警告，雖然近期駭客活動有所放緩，但該集團的成員具有高度的適應性和多重身份，隨時可能準備下一次大規模攻擊，並具備系統性地部署實體資產進行犯罪的趨勢。",
    tags: ["The Com", "駭客集團", "雲端安全", "SaaS", "勒索軟體", "性剝削", "網路犯罪"],
    title_en: "Cybersecurity Analysis Reveals: The Com Crime Syndicate Uses Cyber Proceeds to Fund Violence and Sexual Exploitation",
    summary_en: "Flashpoint analysis indicates that a transnational criminal ecosystem, dubbed The Com, is utilizing its proceeds from cybercrime to support broader acts of violence and sexual exploitation. This group comprises three subsets: \"Hacker Com,\" \"Extortion Com,\" and \"IRL Com.\" Its members are predominantly young individuals from North America, recruited through gaming communities and social media, and are frequently involved in child sexual exploitation and extortion. Hacker Com is responsible for cyberattacks, including SIM card swaps, DDoS attacks, and ransomware, targeting cloud and SaaS platforms such as Okta, Salesforce, and Microsoft365. The analysis emphasizes the high degree of overlap between these three subsets, noting that criminal proceeds are reinvested into the entire criminal system to fund physical attacks and maintain criminal infrastructure. Experts warn that although recent hacking activity has slowed, the group's members possess high adaptability and multiple identities, and are always prepared for the next large-scale attack, exhibiting a trend toward systematically deploying physical assets for criminal purposes.",
    tags_en: ["The Com", "Hacker Group", "Cloud Security", "SaaS", "Ransomware", "Sexual Exploitation", "Cybercrime"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/the-com-cyberattacks-violence-sexploitation", lang: "EN" }
    ]
  },
  {
    id: "20260529-007",
    trackers: ["eu_cra"],
    category: "調和標準",
    title: "ETSI 針對《網路韌性法案》發布網路管理系統垂直標準草案，強調開放式標準化流程",
    summary: "ETSI CYBER-EUSR 針對《網路韌性法案》（Cyber-Resilience Act）相關的垂直標準，進行了開放式諮詢。本文提供的文件為「中期草案」（INTERIM draft），旨在極早期階段推動標準化工作，其內容預計將經歷重大修改。該標準草案涵蓋網路管理系統（Network Management Systems）的相關要求。這類標準的制定，反映了歐洲在提升關鍵基礎設施網路安全韌性方面的努力。由於本文為草案文件，尚未具備最終的技術細節或修補建議，實務上應關注 ETSI 官方後續發布的正式版本與標準化進度，以掌握其對產業合規的影響。",
    tags: ["ETSI", "Cyber-Resilience Act", "網路管理系統", "標準化", "網路安全", "INTERIM draft"],
    title_en: "ETSI Releases Draft Vertical Standard for Network Management Systems in Response to Cyber-Resilience Act, Emphasizing Open Standardization Process",
    summary_en: "ETSI CYBER-EUSR has conducted an open consultation regarding vertical standards related to the Cyber-Resilience Act. The document provided in this article is an \"INTERIM draft,\" intended to promote standardization work at a very early stage, and its content is expected to undergo significant revisions. This draft standard covers requirements for Network Management Systems. The development of such standards reflects Europe's efforts to enhance the cybersecurity resilience of critical infrastructure. Since this article contains a draft document, it does not yet possess final technical details or remediation recommendations. Practitioners should monitor ETSI's official subsequent releases and standardization progress to understand its impact on industry compliance.",
    tags_en: ["ETSI", "Cyber-Resilience Act", "Network Management Systems", "Standardization", "Cybersecurity", "INTERIM draft"],
    sources: [
      { name: "ETSI 資安技術", url: "https://docbox.etsi.org/CYBER/EUSR/Open/EN_304-621_V0.1.3_2026-04-20_Network-Management-Systems_Mature-draft.pdf", lang: "EN" }
    ]
  },
  {
    id: "20260529-008",
    trackers: ["security"],
    category: "法規與標準",
    title: "亞洲資安保險市場迎復甦訊號：報告指出市場滲透率低，但受威脅增加",
    summary: "報告指出，儘管亞洲區（APAC）的網路資安保險市場滲透率仍偏低，許多大型企業的保額相較於實際風險敞口過小，小型企業的獨立保險購買率也低於 5%。市場落後的主要原因包括資安防護能力不一、快速數位化以及威脅環境的同步升級。儘管市場競爭導致保費持續下降，但威脅環境正在惡化，亞洲地區的組織持續發生高知名度的網路事件，例如中國銀行新加坡分行在 2025 年 4 月遭遇勒索軟體攻擊，以及日本啤酒製造商朝日公司在 2025 年 9 月遭 Qilin 攻擊導致停產。這顯示亞洲資安防護能力不一致，且數位擴張加速了攻擊面。然而，報告也指出，隨著經濟體高度互聯化和數位化，任何快速發展的市場都會成為攻擊目標，這也為資安保險的增長奠定了基礎。保險被視為抵禦營運中斷和勒索攻擊的經濟性財務後盾。",
    tags: ["資安保險", "APAC", "勒索軟體", "風險管理", "網路攻擊"],
    title_en: "Asian Cyber Insurance Market Shows Signs of Recovery: Report Highlights Low Penetration but Increasing Threats",
    summary_en: "The report points out that despite the cyber insurance market penetration in the Asia-Pacific (APAC) region remaining low, many large enterprises have coverage amounts that are insufficient compared to their actual risk exposure, and the independent insurance purchase rate for small businesses is below 5%. The main reasons for this market lag include varying levels of cybersecurity defenses, rapid digitalization, and the simultaneous escalation of the threat environment. Although market competition has led to continuous premium decreases, the threat environment is deteriorating. Organizations in the Asia region continue to experience high-profile cyber incidents, such as the ransomware attack suffered by the China Bank Singapore branch in April 2025, and the Qilin attack that forced a shutdown of Asahi Group, a Japanese beverage manufacturer, in September 2025. This indicates inconsistent cybersecurity defenses across Asia, and that digital expansion has accelerated the attack surface. However, the report also notes that as economies become highly interconnected and digitized, any rapidly developing market becomes a target for attack, which also lays the foundation for the growth of cyber insurance. Insurance is viewed as an essential financial safeguard against operational disruption and ransomware attacks.",
    tags_en: ["Cyber Insurance", "APAC", "Ransomware", "Risk Management", "Cyber Attack"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/asias-cyber-insurance-market-signs-of-life", lang: "EN" }
    ]
  },
  {
    id: "20260529-009",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "OpenSSF呼籲：應以機器可讀的連續安全訊號取代靜態證明，支持《網路韌性法案》的盡職調查",
    summary: "隨著軟體供應鏈日益複雜，傳統的紙本或點時空證明（point-in-time attestations）已無法滿足資安和法規遵循的要求。OpenSSF指出，為支持《網路韌性法案》（CRA）下的盡職調查，必須轉向使用機器可讀、持續生成的安全訊號。這些訊號能暴露軟體開發和運營的實際行為，而非提供保證或認證。文章強調，盡職調查應被視為一個持續、基於風險的過程，而非一次性檢查清單。製造商需要持續追蹤第三方元件的來源、安全特性和使用適當性。OpenSSF建議，應將這些可驗證的數據嵌入到開發和發布工作流程中，實現自動化、可追溯的風險管理，從而取代過時的靜態聲明，確保資安決策的持續性和可審計性。",
    tags: ["OpenSSF", "Cyber Resilience Act", "CRA", "軟體供應鏈", "盡職調查", "機器可讀訊號"],
    title_en: "OpenSSF Calls for Machine-Readable Continuous Security Signals to Replace Static Proofs, Supporting Due Diligence under the CRA",
    summary_en: "As the software supply chain grows increasingly complex, traditional paper-based or point-in-time attestations are insufficient to meet cybersecurity and regulatory compliance requirements. OpenSSF points out that to support due diligence under the Cyber Resilience Act (CRA), the industry must shift toward using machine-readable, continuously generated security signals. These signals expose the actual behavior of software development and operation, rather than providing mere guarantees or certifications. The article emphasizes that due diligence should be viewed as a continuous, risk-based process, not a one-time checklist. Manufacturers must continuously track the provenance, security characteristics, and suitability of third-party components. OpenSSF suggests embedding this verifiable data into the development and release workflow to achieve automated, traceable risk management, thereby replacing outdated static declarations and ensuring the continuous and auditable nature of cybersecurity decisions.",
    tags_en: ["OpenSSF", "Cyber Resilience Act", "CRA", "Software Supply Chain", "Due Diligence", "Machine-Readable Signals"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/blog/2026/05/29/aligning-on-machine-readable-signals-as-the-foundation-for-due-diligence", lang: "EN" }
    ]
  },
  {
    id: "20260529-010",
    trackers: ["os", "security"],
    category: "Windows",
    title: "StrongDM 桌面應用程式存在明文儲存憑證資訊漏洞 (CVE-2026-4387)",
    summary: "本漏洞（CVE-2026-4387）影響 StrongDM Desktop Application 版本早於 23.74.0，以及 Desktop Client 版本早於 53.77.0 的 Windows 系統。該應用程式在使用者本地的狀態檔案 `C:\\Users\\<username>\\.sdm\\state.kv` 中，以明文方式儲存了包含 JSON Web Token 和非對稱金鑰材料的身份驗證狀態。該檔案僅受到預設的使用者層級 NTFS 權限保護。攻擊者若能取得受影響使用者的本地讀取權限，並滿足額外的部署與執行條件，即可利用此漏洞竊取敏感憑證資訊。此漏洞的發現和披露由 Hope Walker (SpecterOps) 進行協調揭露。建議使用者應立即升級至 StrongDM Desktop Application 23.74.0 或更高版本，以及 Desktop Client 53.77.0 或更高版本，以修補此明文儲存的憑證風險。",
    tags: ["StrongDM", "CVE-2026-4387", "Windows", "憑證管理", "明文儲存", "JSON Web Token"],
    title_en: "StrongDM Desktop Application Contains Plaintext Credential Storage Vulnerability (CVE-2026-4387)",
    summary_en: "This vulnerability (CVE-2026-4387) affects Windows systems running StrongDM Desktop Application versions earlier than 23.74.0, and Desktop Client versions earlier than 53.77.0. The application stores authentication state, including JSON Web Tokens and asymmetric key material, in plaintext within the user's local state file `C:\\Users<username>\\.sdm\\state.kv`. This file is only protected by default user-level NTFS permissions. An attacker who can obtain local read access to the affected user, and who meets additional deployment and execution conditions, can exploit this vulnerability to steal sensitive credential information. The discovery and disclosure of this vulnerability were coordinated by Hope Walker (SpecterOps). Users are advised to immediately upgrade to StrongDM Desktop Application 23.74.0 or higher, and Desktop Client 53.77.0 or higher, to mitigate this plaintext credential storage risk.",
    tags_en: ["StrongDM", "CVE-2026-4387", "Windows", "Credential Management", "Plaintext Storage", "JSON Web Token"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-4387", lang: "EN" }
    ]
  },
  {
    id: "20260529-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 釋出重大安全更新：修補 151 個漏洞，包含多個記憶體相關弱點",
    summary: "Google 於 5 月 27 日發布 Chrome 電腦版與 Android 版安全更新，共修補了 151 個資安漏洞。本次更新的漏洞危險程度分布為 22 個重大漏洞和 123 個高風險漏洞。從技術細節來看，本次修補的漏洞類型主要集中在記憶體相關的弱點，其中「記憶體釋放後再存取」（Use After Free）類型的漏洞最多，共計 66 個。此外，文章指出「未受信任的使用者輸入驗證不充分」和「不當實作」類型的弱點也佔了相當比例。這些漏洞多發生在 ANGLE（Almost Native Graphics Layer Engine）元件，該元件共出現 33 個弱點。用戶應儘速更新至指定的版本號（Windows 版：148.0.7778.216 或 148.0.7778.217；macOS 版：148.0.7778.215 或 148.0.7778.216；Linux 與 Android 版：148.0.7778.215），以修補這些潛在的資安風險。",
    tags: ["Google Chrome", "資安更新", "Use After Free", "記憶體漏洞", "ANGLE", "資安漏洞"],
    title_en: "Google Chrome Releases Major Security Update: Patches 151 Vulnerabilities, Including Multiple Memory-Related Flaws",
    summary_en: "Google released security updates for Chrome on both desktop and Android versions on May 27, patching a total of 151 security vulnerabilities. The severity distribution of these vulnerabilities includes 22 critical flaws and 123 high-risk flaws. From a technical perspective, the patched vulnerabilities are primarily concentrated in memory-related weaknesses, with 'Use After Free' being the most common type, accounting for 66 flaws. Furthermore, the article notes that 'insufficient validation of untrusted user input' and 'improper implementation' flaws also constitute a significant proportion. Many of these vulnerabilities occur in the ANGLE (Almost Native Graphics Layer Engine) component, which accounts for 33 flaws. Users should update promptly to the specified version numbers (Windows: 148.0.7778.216 or 148.0.7778.217; macOS: 148.0.7778.215 or 148.0.7778.216; Linux and Android: 148.0.7778.215) to mitigate these potential security risks.",
    tags_en: ["Google Chrome", "Security Update", "Use After Free", "Memory Flaw", "ANGLE", "Security Vulnerability"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176201", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WordPress主題Avada Builder修補4項漏洞：CVE-2026-6279可遠端執行程式碼",
    summary: "WordPress熱門主題工具Avada及其頁面建構外掛Avada Builder，修補了四項安全漏洞，可能影響超過百萬個網站部署。這些漏洞由資安研究人員透過Wordfence漏洞懸賞計畫揭露。其中最嚴重的為CVE-2026-6279，CVSS嚴重性評分為9.8分，允許未經身分驗證的攻擊者執行遠端任意程式碼。另有CVE-2026-4798，CVSS評分為7.5分，可利用SQL注入竊取資料庫敏感資訊。由於Avada Builder是核心元件，影響範圍廣泛。Avada原廠已在Avada Builder 3.15.3版及Avada 7.15.3版本中完成修補，建議所有用戶應立即更新至最新版本以防範攻擊。",
    tags: ["Avada", "WordPress", "Avada Builder", "CVE-2026-6279", "SQL注入", "遠端程式碼執行"],
    title_en: "WordPress Theme Avada Builder Patches Four Vulnerabilities: CVE-2026-6279 Allows Remote Code Execution",
    summary_en: "The popular WordPress theme tool Avada and its page builder plugin Avada Builder have patched four security vulnerabilities, potentially affecting over a million website deployments. These vulnerabilities were disclosed by security researchers through the Wordfence bug bounty program. The most severe is CVE-2026-6279, which has a CVSS severity score of 9.8 and allows unauthenticated attackers to execute arbitrary remote code. Another vulnerability is CVE-2026-4798, which has a CVSS score of 7.5 and can be exploited via SQL injection to steal sensitive database information. Given that Avada Builder is a core component, the scope of impact is wide. Avada has completed the patches in Avada Builder version 3.15.3 and Avada version 7.15.3, and all users are advised to update immediately to the latest version to prevent attacks.",
    tags_en: ["Avada", "WordPress", "Avada Builder", "CVE-2026-6279", "SQL Injection", "Remote Code Execution"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176183", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-013",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "歐盟委員會：關於關鍵產品類別（Type C）標準化與未來擴展的說明",
    summary: "本次歐盟委員會的簡報，主要討論了未來在產品標準化方面可能增加的請求，特別針對「Type C」（關鍵產品）類別。雖然原文內容極為簡潔，僅提及了「Type C」產品可能需要額外的標準化要求，並給出了預計的截止日期（DDL：2026年10月30日）。這暗示了歐盟在提升產品安全性和標準化層面持續的監管力度。對於相關產業和產品開發商而言，應密切關注歐盟委員會後續發布的具體技術指引和標準化要求，以確保產品設計和供應鏈流程符合未來可能擴大的安全規範。建議相關企業應主動了解歐盟在關鍵產品領域的最新法規動態，並提前規劃產品的合規性評估與升級。",
    tags: ["歐盟委員會", "Type C", "標準化", "產品安全", "合規性", "DDL"],
    title_en: "European Commission: Statement on Standardization and Future Expansion for Key Product Categories (Type C)",
    summary_en: "This European Commission presentation primarily discusses potential future requirements for product standardization, specifically targeting the \"Type C\" (Key Products) category. Although the original content is very brief, it only mentions that \"Type C\" products may require additional standardization requirements, and provides an anticipated deadline (DDL: October 30, 2026). This suggests the EU's continued regulatory focus on enhancing product safety and standardization. For relevant industries and product developers, it is crucial to closely monitor the detailed technical guidelines and standardization requirements subsequently issued by the European Commission, ensuring that product design and supply chain processes comply with potentially expanded safety regulations. It is recommended that relevant companies proactively understand the latest regulatory developments in the key product domain of the EU and plan for product compliance assessment and upgrades in advance.",
    tags_en: ["European Commission", "Type C", "Standardization", "Product Safety", "Compliance", "DDL"],
    sources: [
      { name: "ETSI 資安技術", url: "https://docbox.etsi.org/Workshop/2025/10_SECURITY_CONFERENCE/6OCTOBER/KEYNOTES/EUROPEANCOMMISSION_JONES-MOURAO.pdf", lang: "EN" }
    ]
  },
  {
    id: "20260529-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ChatGPT摘要功能遭利用：ChatGPhish漏洞讓惡意網頁轉化為釣魚介面",
    summary: "資安研究人員揭露了一種名為 ChatGPhish 的漏洞，指出 OpenAI ChatGPT 在處理和摘要第三方網頁內容時，會過度信任網頁中的 Markdown 連結和圖片。攻擊者可透過在網頁中附加小型惡意負載，誘騙受害者讓 ChatGPT 進行摘要。當 ChatGPT 自動抓取這些嵌入的圖片並渲染內容時，惡意負載便會被觸發。實務影響包括：洩露受害者的 IP、User-Agent 和 Referer 資訊；渲染惡意的可點擊 Markdown 連結，甚至生成偽造的系統級安全警報或 QR Code，誘騙受害者掃描。這證明了「摘要」本身可以成為一個對抗性攻擊面。此外，文章還提到了其他 AI 相關的攻擊，包括針對 AI 編碼代理的 SymJack 和 TrustFall 攻擊，這類攻擊能讓惡意儲存庫在用戶信任後，執行帶有完整使用者權限的遠端程式碼。",
    tags: ["ChatGPT", "OpenAI", "ChatGPhish", "Markdown", "Prompt Injection", "AI 安全", "資料外洩"],
    title_en: "ChatGPT's Summarization Feature Exploited: ChatGPhish Vulnerability Turns Malicious Webpages into Phishing Interfaces",
    summary_en: "Cybersecurity researchers have disclosed a vulnerability called ChatGPhish, which points out that OpenAI's ChatGPT over-trusts Markdown links and images when processing and summarizing third-party web content. Attackers can attach small malicious payloads to a webpage to trick the victim into having ChatGPT summarize it. When ChatGPT automatically scrapes these embedded images and renders the content, the malicious payload is triggered. Practical impacts include: leaking the victim's IP, User-Agent, and Referer information; rendering malicious clickable Markdown links, or even generating fake system-level security alerts or QR codes to trick the victim into scanning them. This demonstrates that 'summarization' itself can become an adversarial attack surface. Furthermore, the article also mentioned other AI-related attacks, including SymJack and TrustFall attacks targeting AI coding agents. These types of attacks can allow malicious storage to execute remote code with full user privileges after gaining user trust.",
    tags_en: ["ChatGPT", "OpenAI", "ChatGPhish", "Markdown", "Prompt Injection", "AI Security", "Data Leakage"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/chatgphish-vulnerability-turns-chatgpt.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "分析：俄羅斯關聯的 GREYVIBE 駭客組織利用 AI 強化攻擊，鎖定烏克蘭目標",
    summary: "WithSecure 分析指出，一個代號為 GREYVIBE 的威脅行為者，自 2025 年 8 月起持續針對烏克蘭及其相關實體進行攻擊。該組織被評估為俄語群體，活動與克里姆林宮國家利益相關，主要目標是進行情報收集。GREYVIBE 利用了從魚叉式網路釣魚、假 CAPTCHA 頁面到假冒的成人網站等多種攻擊向量，傳遞客製化的惡意軟體。其攻擊鏈包括 PhantomMail、PhantomClick、PrincessClub 等，利用 PowerShell 遠端存取木馬 (RAT) 如 PhantomRelay 和 LegionRelay，可進行檔案竊取、螢幕截圖、瀏覽器資料竊取及 RDP 存取。值得注意的是，該群體大量利用生成式 AI (GenAI) 和大型語言模型 (LLMs)（如 ChatGPT、Gemini）來輔助生成圖片、開發惡意軟體和混淆腳本，以加速攻擊週期並規避傳統偵測。然而，分析也指出，AI 的使用可能導致惡意軟體（如 LegionRelay）出現設計缺陷，暗示其可能與純粹的國家級駭客行動有所不同。修補建議包括提高對 AI 輔助生成內容的警覺性，並強化對 PowerShell 腳本和 WebRTC 數據流的監控。",
    tags: ["GREYVIBE", "俄羅斯駭客", "AI 攻擊", "PowerShell RAT", "網路釣魚", "烏克蘭", "情報收集"],
    title_en: "Analysis: Russia-Linked GREYVIBE Hacker Group Uses AI to Enhance Attacks Targeting Ukraine",
    summary_en: "WithSecure analysis points out that a threat actor codenamed GREYVIBE has been continuously targeting Ukraine and its related entities since August 2025. The group is assessed to be Russian-linked, with activities aligned with the Kremlin's national interests, primarily focused on intelligence gathering. GREYVIBE utilizes various attack vectors, ranging from spear-phishing and fake CAPTCHA pages to impersonating adult websites, to deliver customized malware. Its attack chain includes PhantomMail, PhantomClick, and PrincessClub, which utilize PowerShell Remote Access Trojans (RATs) such as PhantomRelay and LegionRelay, capable of file exfiltration, screen capturing, browser data theft, and RDP access. Notably, the group heavily leverages Generative AI (GenAI) and Large Language Models (LLMs) (such as ChatGPT and Gemini) to assist in generating images, developing malware, and obfuscating scripts, thereby accelerating the attack cycle and evading traditional detection. However, the analysis also points out that the use of AI may lead to design flaws in the malware (such as LegionRelay), suggesting it might differ from purely state-level hacking operations. Remediation recommendations include increasing vigilance against AI-assisted generated content and strengthening monitoring of PowerShell scripts and WebRTC data streams.",
    tags_en: ["GREYVIBE", "Russian Hackers", "AI Attacks", "PowerShell RAT", "Phishing", "Ukraine", "Intelligence Gathering"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/new-russian-linked-greyvibe-targets.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "北韓駭客 Kimsuky 擴大攻擊範圍：利用偽裝安全軟體與 Webex 頁面傳播 HTTPSpy 惡意程式",
    summary: "北韓國家資助的威脅行為者 Kimsuky（又名 Velvet Chollima）在 2026 年 3 月至 4 月期間，針對韓國軍方及企業實體進行了新一輪網路攻擊。攻擊者採用了精密的社交工程手法，例如偽造安全軟體安裝頁面，或利用合法 Webex 會議排程資訊製作假頁面。在 3 月的活動中，攻擊者偽裝成韓國 B2B 訊息服務的安全工具（如 nProtect Online Security 和 AhnLab Safe Transaction）的安裝器，誘騙使用者下載惡意執行檔。這些執行檔會透過 `regsvr32.exe` 啟動第二階段 DLL 負載，建立持久性，並聯繫 C2 伺服器下載未知後續載荷。在 4 月的活動中，攻擊者則利用模仿 Cisco Webex 的假網頁，誘騙受害者下載並執行包含加密 JavaScript 的檔案，最終部署了 HTTPSpy 遠端存取木馬。HTTPSpy 是一個功能齊全的 RAT，支援執行 Shell 指令、檔案傳輸、截圖等。此外，Kimsuky 還利用 JSONP 查詢本地伺服器來驗證惡意程式的執行狀態。攻擊者持續進化，甚至利用 VS Code 隧道、LLM 和 Rust 語言，部署了 HelloDoor 和 HttpMalice 等新型惡意程式。",
    tags: ["Kimsuky", "HTTPSpy", "Webex", "北韓", "社交工程", "DLL 負載", "APT"],
    title_en: "North Korean Hackers Kimsuky Expand Attack Scope: Spreading HTTPSpy Malware via Fake Security Software and Webex Pages",
    summary_en: "The North Korean state-sponsored threat actor Kimsuky (also known as Velvet Chollima) launched a new wave of cyberattacks targeting South Korean military and corporate entities from March to April 2026. The attackers employed sophisticated social engineering techniques, such as creating fake installation pages for security software or utilizing legitimate Webex meeting scheduling information to build deceptive pages. During the March campaign, the attackers disguised malicious executables as installers for Korean B2B messaging security tools (such as nProtect Online Security and AhnLab Safe Transaction), tricking users into downloading the malicious files. These executables would then initiate a second-stage DLL payload via `regsvr32.exe` to establish persistence and connect to C2 servers to download unknown subsequent payloads. In the April campaign, the attackers utilized fake webpages mimicking Cisco Webex to trick victims into downloading and executing files containing encrypted JavaScript, ultimately deploying the HTTPSpy remote access trojan (RAT). HTTPSpy is a fully-featured RAT that supports executing shell commands, file transfer, and screen capturing. Furthermore, Kimsuky also used JSONP queries to check the execution status of the malware on local servers. The attackers continue to evolve, even deploying novel malware such as HelloDoor and HttpMalice using VS Code tunnels, LLMs, and the Rust language.",
    tags_en: ["Kimsuky", "HTTPSpy", "Webex", "North Korea", "Social Engineering", "DLL Payload", "APT"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/kimsuky-deploys-httpspy-expands-arsenal.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2026-0257：Palo Alto Networks PAN-OS認證繞過漏洞，警告企業用戶應優先修補",
    summary: "美國網路安全局（CISA）宣布將一項新的漏洞，CVE-2026-0257，加入其「已知已被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。此漏洞影響 Palo Alto Networks 的 PAN-OS 系統，屬於認證繞過類型的漏洞，已被證實為惡意網路行為者常用的攻擊媒介，對聯邦企業網路構成重大風險。\n\n根據《強制執行指令》（Binding Operational Directive, BOD）22-01，該目錄要求聯邦民事行政部門（FCEB）機構必須在指定期限內修補這些已知漏洞，以保護其網路免受活躍威脅。儘管該指令僅適用於FCEB，CISA仍強烈敦促所有組織將修補KEV目錄中的漏洞納入漏洞管理優先順序，以降低整體網路暴露風險。\n\n實務建議：所有使用Palo Alto Networks PAN-OS的組織，應立即將修補CVE-2026-0257列為最高優先級，並遵循供應商的修補指引進行修復。",
    tags: ["CISA", "CVE-2026-0257", "Palo Alto Networks", "PAN-OS", "認證繞過", "KEV Catalog"],
    title_en: "CISA Adds CVE-2026-0257: Palo Alto Networks PAN-OS Authentication Bypass Vulnerability, Advising Enterprises to Prioritize Patching",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new vulnerability, CVE-2026-0257, to its Known Exploited Vulnerabilities (KEV) Catalog. This vulnerability affects Palo Alto Networks' PAN-OS system and is an authentication bypass type, confirmed to be a common attack vector used by malicious actors, posing a significant risk to federal enterprise networks.\n\nUnder Binding Operational Directive (BOD) 22-01, the catalog mandates that Federal Civilian Executive Branch (FCEB) agencies must patch these known vulnerabilities within a specified timeframe to protect their networks from active threats. Although the directive only applies to FCEB, CISA strongly urges all organizations to include patching KEV catalog vulnerabilities in their vulnerability management priorities to reduce overall network exposure risk.\n\nPractical Advice: All organizations using Palo Alto Networks PAN-OS should immediately list patching CVE-2026-0257 as the highest priority and follow the vendor's patching guidelines for remediation.",
    tags_en: ["CISA", "CVE-2026-0257", "Palo Alto Networks", "PAN-OS", "Authentication Bypass", "KEV Catalog"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/alerts/2026/05/29/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260529-018",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "IBM與紅帽推出Project Lightwell：結合AI技術，提供企業開放原始碼套件漏洞修補服務",
    summary: "IBM與Red Hat合作推出Project Lightwell，旨在解決企業在處理第三方開放原始碼套件漏洞時的痛點。該服務將AI輔助漏洞分析能力，結合其在Red Hat Enterprise Linux和OpenShift等開源平臺的經驗，擴展至企業應用程式常用的第三方函式庫、程式語言工具鏈及AI框架。Project Lightwell的核心價值在於，它不只停留在漏洞發現階段，而是提供從漏洞審查、分流、優先排序，到最終交付「已驗證、具備簽章」的、可直接部署到正式環境的修補成果。這能大幅減輕企業自行維護修補分支的負擔。此外，該服務還將修補內容回饋給上游開源社群，促進生態系健康發展。初期技術支援鎖定Maven與Java生態系，未來將擴展至PyPI、NPM等。該服務定位為現有安全工具的補強，而非取代，並已與包括Bank of America、Goldman Sachs、JPMorgan Chase等大型金融機構合作。",
    tags: ["IBM", "Red Hat", "Project Lightwell", "SBOM", "開源安全", "軟體供應鏈", "Java生態系"],
    title_en: "IBM and Red Hat Launch Project Lightwell: Combining AI to Offer Enterprise Open Source Component Vulnerability Remediation Services",
    summary_en: "IBM and Red Hat have collaborated to launch Project Lightwell, addressing the pain points enterprises face when managing vulnerabilities in third-party open source components. This service combines AI-assisted vulnerability analysis capabilities with their experience in open source platforms like Red Hat Enterprise Linux and OpenShift, extending coverage to third-party libraries, programming language toolchains, and AI frameworks commonly used in enterprise applications. The core value of Project Lightwell is that it does not stop at vulnerability discovery; it provides remediation results—which are 'validated and signed' and ready for direct deployment into production environments—covering vulnerability review, triage, prioritization, and final delivery. This significantly reduces the burden on enterprises of maintaining remediation branches themselves. Furthermore, the service feeds the remediation content back to upstream open source communities, promoting healthy ecosystem development. Initially, the technical support is focused on the Maven and Java ecosystems, with future expansion planned for PyPI, NPM, and others. The service is positioned as a complement to existing security tools, not a replacement, and has already partnered with major financial institutions, including Bank of America, Goldman Sachs, and JPMorgan Chase.",
    tags_en: ["IBM", "Red Hat", "Project Lightwell", "SBOM", "Open Source Security", "Software Supply Chain", "Java Ecosystem"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176206", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-019",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "GitLab 19.0推出SBOM相依性掃描：強化軟體供應鏈，追蹤間接與可觸及漏洞",
    summary: "隨著第三方套件和AI生成程式碼的應用增加，軟體供應鏈風險難度提高。DevSecOps平臺GitLab於5月26日發布GitLab 19.0，新增以軟體物料清單（SBOM）為基礎的相依性掃描功能。此功能能協助企業盤點專案的直接與間接相依套件，並以CycloneDX格式輸出SBOM檔案。分析器不僅能與GitLab Advisory Database比對已知CVE漏洞，更關鍵的是能追蹤完整的相依路徑（例如：library-a -> library-b -> library-c），並區分哪些漏洞套件是程式碼可實際觸及的，從而讓團隊能將修補資源優先投入到風險最高的元件。此外，該功能支援持續風險檢查，即使專案程式碼未更新，也能在新的安全公告發布時，持續掃描既有專案的相依套件，確保持續的資安韌性。此功能提供給GitLab Ultimate客戶。",
    tags: ["GitLab", "SBOM", "相依性掃描", "CycloneDX", "軟體供應鏈", "CVE"],
    title_en: "GitLab 19.0 Launches SBOM Dependency Scanning: Strengthening Software Supply Chain, Tracking Indirect and Reachable Vulnerabilities",
    summary_en: "As the use of third-party packages and AI-generated code increases, software supply chain risks are becoming more complex. DevSecOps platform GitLab released GitLab 19.0 on May 26th, adding dependency scanning functionality based on Software Bill of Materials (SBOM). This feature helps enterprises inventory a project's direct and indirect dependencies and outputs the SBOM file in CycloneDX format. The analyzer not only compares against known CVE vulnerabilities in the GitLab Advisory Database but, crucially, can track the complete dependency path (e.g., library-a -> library-b -> library-c) and distinguish which vulnerable packages are actually reachable by the code. This allows teams to prioritize remediation efforts on the highest-risk components. Furthermore, the feature supports continuous risk checking; even if the project code is not updated, it can continuously scan existing project dependencies when new security advisories are released, ensuring continuous security resilience. This feature is available to GitLab Ultimate customers.",
    tags_en: ["GitLab", "SBOM", "Dependency Scanning", "CycloneDX", "Software Supply Chain", "CVE"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176203", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-020",
    trackers: ["security"],
    category: "開源影響",
    title: "荷蘭資安公司 Hadrian 開源 OpenHack 框架，利用多代理人流程自動化原始碼安全審查",
    summary: "荷蘭資安公司 Hadrian 發布開源 AI 漏洞研究框架 OpenHack。該框架旨在協助研究人員自動化執行原始碼安全審查與白箱滲透測試，解決單純使用大型語言模型（LLM）分析程式碼庫時容易產生大量誤判和不可驗證結果的問題。OpenHack 採用以情境為核心的多代理人（Multi-Agent）工作流程，流程包含偵察代理人（Recon Agent）找出攻擊面、路由代理人（Router Agent）建立測試情境、專家代理人（Expert Agent）進行漏洞驗證，以及獨立的複核代理人（Triage Agent）進行最終審查。其核心特色是確保漏洞的發現必須經過獨立代理人驗證，且每個階段都需要人工批准，大幅提升了漏洞研究的可靠性與可追蹤性。OpenHack 內建 12 種對應 OWASP Top 10 2025 與 MITRE CWE 的專家代理人，涵蓋注入攻擊、權限控管等常見漏洞類型。此框架支援 Claude Code、Codex 與 Cursor 等 AI 程式代理工具，讓資安社群能以較低成本進行專業級的原始碼安全審查。",
    tags: ["Hadrian", "OpenHack", "AI 漏洞研究", "白箱滲透測試", "LLM", "多代理人"],
    title_en: "Dutch Cybersecurity Firm Hadrian Releases OpenHack Framework to Automate Code Security Review Using Multi-Agent Workflow",
    summary_en: "Dutch cybersecurity firm Hadrian has released OpenHack, an open-source AI vulnerability research framework. The framework aims to assist researchers in automating code security reviews and white-box penetration testing, addressing the issue of excessive false positives and unverifiable results often generated when simply using large language models (LLMs) to analyze codebases. OpenHack adopts a context-driven Multi-Agent workflow, which includes a Recon Agent to identify attack surfaces, a Router Agent to establish testing scenarios, an Expert Agent to perform vulnerability validation, and an independent Triage Agent for final review. Its core feature is ensuring that discovered vulnerabilities must be validated by an independent agent, and every stage requires manual approval, significantly enhancing the reliability and traceability of vulnerability research. OpenHack integrates 12 expert agents corresponding to OWASP Top 10 2025 and MITRE CWE, covering common vulnerability types such as injection attacks and privilege management. The framework supports AI coding agents like Claude Code, Codex, and Cursor, enabling the security community to conduct professional-grade code security reviews at a lower cost.",
    tags_en: ["Hadrian", "OpenHack", "AI Vulnerability Research", "White-box Penetration Testing", "LLM", "Multi-Agent"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176210", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-021",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "惡意 NuGet 套件「Sicoob.Sdk」竊取巴西金融系統憑證，警告開發者注意供應鏈風險",
    summary: "資安研究人員發現一個偽裝成巴西大型合作金融系統 Sicoob C# 開發套件的惡意 NuGet 套件「Sicoob.Sdk」版本 2.0.0 至 2.0.4。該套件在開發者初始化 `SicoobClient` 時，會讀取本地的 PFX 憑證檔案，並將客戶 ID、PFX 密碼和 Base64 編碼的 PFX 資料傳輸到硬編碼的第三方 Sentry 端點。此外，它還設計用於捕獲 Boleto API 的原始回傳資料，可能洩露交易細節。攻擊者利用此漏洞竊取的憑證和資料，可被用於冒充受害者，進行金融 API 整合的惡意操作。建議受影響的組織立即移除該套件，視 PFX 憑證為已洩露，並執行憑證替換、密碼輪換，同時審計 Sicoob 認證和 API 日誌。\n\n文章同時揭露了 npm 生態系多起供應鏈攻擊，包括利用 Typosquatting、依賴混淆（Dependency Confusion）等手法，發布大量惡意套件，竊取 AWS 憑證、HashiCorp Vault token 和 CI/CD 密鑰，凸顯了開發流程中的系統性風險。",
    tags: ["NuGet", "Sicoob", "Sicoob.Sdk", "PFX 憑證", "供應鏈攻擊", "開源安全", "資安"],
    title_en: "Malicious NuGet Package 'Sicoob.Sdk' Steals Credentials from Brazilian Financial System, Warning Developers of Supply Chain Risks",
    summary_en: "Security researchers discovered a malicious NuGet package, 'Sicoob.Sdk', versions 2.0.0 through 2.0.4, disguised as a C# development kit for Sicoob, a large cooperative financial system in Brazil. When developers initialize `SicoobClient` using this package, it reads local PFX certificate files and transmits the client ID, PFX password, and Base64 encoded PFX data to a hardcoded third-party Sentry endpoint. Furthermore, it is designed to capture the raw return data of the Boleto API, potentially leaking transaction details. Attackers can use the stolen credentials and data to impersonate victims and perform malicious operations involving financial API integration. Affected organizations are advised to immediately remove the package, treat PFX certificates as compromised, and perform certificate replacement and password rotation, while also auditing Sicoob credentials and API logs.\n\nThe article also revealed multiple supply chain attacks within the npm ecosystem, including the publication of numerous malicious packages using techniques such as Typosquatting and Dependency Confusion, which stole AWS credentials, HashiCorp Vault tokens, and CI/CD secrets, highlighting systemic risks in development processes.",
    tags_en: ["NuGet", "Sicoob", "Sicoob.Sdk", "PFX certificate", "Supply Chain Attack", "Open Source Security", "Cybersecurity"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/malicious-sicoob-nuget-steals-banking.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-022",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "研究揭露雲端整合複雜性風險：過度權限與秘密洩露可導致自動化服務平台全面接管",
    summary: "研究人員指出，當低代碼（low-code）雲端服務的整合過於複雜時，即使是微小的錯誤或配置缺陷，也可能導致嚴重的平台安全漏洞。他們針對一個知名的自動化服務（Zapier）進行了分析，發現攻擊者可以利用多步驟的漏洞鏈，結合過度權限的角色、秘密憑證的發現，以及非人類身份（non-human identities）的弱點，進行平台接管。攻擊鏈的步驟包括：首先在可寫程式碼區塊執行自定義程式碼，利用該環境的過度寬鬆權限（如「allow_nothing_role」），進而從記憶體中提取秘密憑證（如NPM token）。一旦取得這些憑證，攻擊者便能橫向移動，竊取私有儲存庫，甚至能夠在用戶不知情的情況下，作為用戶身份執行操作，利用用戶已建立的第三方服務連接（如Gmail、Salesforce）來發送惡意內容。這凸顯了SaaS服務在整合日益複雜背景下，缺乏適當沙箱隔離、角色管理和秘密保護的巨大風險。修補建議是實施最小權限原則（least-privileged scope），並嚴格管理所有自動化平台和第三方整合的權限範圍。",
    tags: ["Zapier", "低代碼", "SaaS", "雲端整合", "過度權限", "秘密洩露", "自動化平台"],
    title_en: "Research Reveals Cloud Integration Complexity Risks: Over-Privilege and Secret Leakage Can Lead to Full Automation Platform Takeover",
    summary_en: "Researchers point out that when low-code cloud services become overly complex in their integration, even minor errors or configuration flaws can lead to severe platform security vulnerabilities. They conducted an analysis on a well-known automation service (Zapier) and found that attackers can exploit a multi-step vulnerability chain, combining over-privileged roles, the discovery of secret credentials, and weaknesses in non-human identities, to achieve platform takeover. The attack chain steps include: first, executing custom code in a writable code block, utilizing the environment's overly permissive rights (such as 'allow_nothing_role'), and subsequently extracting secret credentials from memory (such as an NPM token). Once these credentials are obtained, the attacker can perform lateral movement, steal private repositories, and even execute actions as the user's identity without the user's knowledge, utilizing pre-established third-party service connections (such as Gmail or Salesforce). This highlights the significant risk in SaaS services due to the lack of proper sandbox isolation, role management, and secret protection amidst increasingly complex integrations. The remediation suggestion is to implement the principle of least privilege and strictly manage the scope of permissions for all automation platforms and third-party integrations.",
    tags_en: ["Zapier", "low-code", "SaaS", "cloud integration", "over-privilege", "secret leakage", "automation platform"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/complex-cloud-integrations-small-errors-compromises", lang: "EN" }
    ]
  },
  {
    id: "20260529-023",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "npm生態系統遭攻擊：惡意套件利用安裝鉤子竊取雲端與CI/CD金鑰",
    summary: "微軟（Microsoft）發現一場針對npm套件生態系統的供應鏈攻擊。攻擊者利用「字形相似」（typosquatting）和偽造上游元數據等社會工程學手法，在短時間內發布了多個惡意套件。這些套件偽裝成與OpenSearch、ElasticSearch等知名的叢集管理或配置庫相關，誘騙開發者在執行`npm install`時自動安裝。惡意程式碼透過`preinstall`等安裝生命週期鉤子自動執行，無需開發者主動調用。攻擊的第二階段載荷是一個專門為雲端和CI/CD環境設計的程式，能夠靜默地竊取多種環境的敏感憑證，包括AWS的EC2元數據、Secrets Manager、HashiCorp Vault Token、GitHub Actions金鑰，甚至竊取npm發布令牌，從而實現雲端橫向移動和後續的供應鏈攻擊。攻擊者還採用了更隱蔽的載入器，利用Bun運行時來規避傳統的網路監控。\n修補建議：開發者應謹慎檢查和驗證所有第三方套件的來源和版本，並考慮使用更安全的套件管理流程，例如在CI/CD環境中實施最小權限原則和網路隔離。",
    tags: ["npm", "供應鏈攻擊", "typosquatting", "CI/CD", "AWS", "HashiCorp Vault", "OpenSearch", "preinstall hook"],
    title_en: "npm Ecosystem Attacked: Malicious Packages Use Install Hooks to Steal Cloud and CI/CD Keys",
    summary_en: "Microsoft discovered a supply chain attack targeting the npm package ecosystem. Attackers utilized social engineering techniques such as 'typosquatting' and falsified upstream metadata to rapidly publish multiple malicious packages. These packages disguised themselves as libraries related to popular cluster management or configuration tools like OpenSearch and ElasticSearch, tricking developers into automatically installing them when running `npm install`. The malicious code automatically executes via installation lifecycle hooks, such as `preinstall`, without the developer needing to actively call it. The second stage payload of the attack is a program specifically designed for cloud and CI/CD environments, capable of silently stealing sensitive credentials from various environments, including AWS EC2 metadata, Secrets Manager, HashiCorp Vault Tokens, and even GitHub Actions keys, thereby achieving cloud lateral movement and subsequent supply chain attacks. The attackers also employed a more stealthy loader, utilizing the Bun runtime to evade traditional network monitoring.\n\nMitigation Advice: Developers should carefully check and validate the source and version of all third-party packages, and consider adopting more secure package management processes, such as implementing the principle of least privilege and network isolation in CI/CD environments.",
    tags_en: ["npm", "Supply Chain Attack", "typosquatting", "CI/CD", "AWS", "HashiCorp Vault", "OpenSearch", "preinstall hook"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/05/28/typosquatted-npm-packages-used-steal-cloud-ci-cd-secrets", lang: "EN" }
    ]
  },
  {
    id: "20260529-024",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安警示：駭客利用 LLM Agent 進行後滲透，透過 Marimo 漏洞竊取內部 PostgreSQL 資料庫",
    summary: "資安公司 Sysdig 報告，不詳的威脅行為者利用大型語言模型（LLM）Agent，在取得初始存取權後，執行高度自動化且難以偵測的後滲透行動。攻擊鏈的起點是利用 Marimo 網路工具的 CVE-2026-39987 漏洞，這是一個影響所有版本 Marimo 且允許未經身份驗證的遠端程式碼執行（RCE）漏洞。攻擊者利用此漏洞進入受害主機，竊取雲端憑證，並透過 AWS Secrets Manager 取得 SSH 私鑰。隨後，他們對內部 PostgreSQL 資料庫執行了多個並行 SSH 會話，在短時間內成功外洩了資料庫的結構和全部內容。LLM Agent 的使用體現在其高度的適應性、即時規劃能力，以及能夠根據前一個工具的輸出自動決定下一步行動，使得攻擊鏈的難度從「編寫劇本」轉變為「推理預算」。修補建議包括立即更新 Marimo 至最新版本，審核所有公開可存取的實例，並定期輪換所有憑證、API 金鑰和 SSH 密鑰。",
    tags: ["LLM Agent", "CVE-2026-39987", "Marimo", "RCE", "後滲透", "PostgreSQL"],
    title_en: "Cybersecurity Alert: Hackers Exploit LLM Agents for Post-Exploitation, Stealing Internal PostgreSQL Database via Marimo Vulnerability",
    summary_en: "Security firm Sysdig reported that unknown threat actors utilized Large Language Model (LLM) Agents to perform highly automated and difficult-to-detect post-exploitation actions after gaining initial access. The attack chain began by exploiting CVE-2026-39987 in the Marimo network tool, a vulnerability affecting all versions of Marimo that allows for unauthenticated Remote Code Execution (RCE). The attackers used this vulnerability to gain entry to the victim's host, steal cloud credentials, and subsequently acquire SSH private keys via AWS Secrets Manager. They then executed multiple parallel SSH sessions against the internal PostgreSQL database, successfully exfiltrating the database's schema and entire content in a short period. The use of the LLM Agent was evident in its high adaptability, real-time planning capabilities, and ability to automatically determine the next step based on the output of the previous tool, transforming the complexity of the attack chain from 'script writing' to 'reasoning budget.' Remediation recommendations include immediately updating Marimo to the latest version, auditing all publicly accessible instances, and regularly rotating all credentials, API keys, and SSH keys.",
    tags_en: ["LLM Agent", "CVE-2026-39987", "Marimo", "RCE", "Post-exploitation", "PostgreSQL"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/attackers-use-llm-agent-for-post.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-025",
    trackers: ["security"],
    category: "前瞻技術",
    title: "警惕「影子AI」新風險：非開發人員使用AI建構應用程式，將敏感數據暴露於公網",
    summary: "隨著「Vibe Coding」（氛圍編碼）等AI驅動開發平台普及，員工已能快速將想法轉化為可運作的應用程式，並將其連接到企業的CRM、ERP等核心生產系統。這類「影子AI」風險已超越傳統的「影子IT」範疇。文章指出，這些應用程式往往在未經安全審核的情況下，直接上傳至公開網際網路，且缺乏基本的存取控制，可能使敏感的企業、營運或個人數據暴露在外。現有資安工具（如EDR、DLP、CASB）因其架構限制，難以捕捉到這種「會話層」（Session Layer）的端到端行為，無法將應用程式的建構、數據流動、與核心系統的API連接，以及最終的公開部署過程整合為單一的可控事件。建議企業應將安全控制點提升至「會話層」，從源頭監控整個應用程式的建構、數據傳輸和公開發布過程，實現對整個生命週期的可追溯性。",
    tags: ["影子AI", "Vibe Coding", "影子IT", "AI 應用程式", "數據外洩", "會話層安全"],
    title_en: "Beware of 'Shadow AI' Risks: Non-Developers Building Applications with AI, Exposing Sensitive Data to the Public Internet",
    summary_en: "With the proliferation of AI-driven development platforms like 'Vibe Coding,' employees can quickly transform ideas into functional applications and connect them to core enterprise systems such as CRM and ERP. This type of 'Shadow AI' risk has surpassed the scope of traditional 'Shadow IT.' The article points out that these applications are often uploaded directly to the public internet without security review and lack basic access controls, potentially exposing sensitive corporate, operational, or personal data. Existing security tools (such as EDR, DLP, CASB) struggle to capture this end-to-end behavior at the 'Session Layer' due to architectural limitations. They cannot integrate the application's construction, data flow, API connection to core systems, and final public deployment process into a single controllable event. Enterprises are advised to elevate security control points to the 'Session Layer,' monitoring the entire application lifecycle—from construction, data transmission, to public release—to achieve comprehensive traceability.",
    tags_en: ["Shadow AI", "Vibe Coding", "Shadow IT", "AI Applications", "Data Leakage", "Session Layer Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/what-2000-exposed-vibe-coded-apps.html", lang: "EN" }
    ]
  },
  {
    id: "20260529-026",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Dark Reading 慶祝 20 週年：回顧資安產業變遷與 AI 時代的挑戰",
    summary: "本文為 Dark Reading 20 週年紀念文章，非報導特定資安事件或漏洞。文章回顧了過去二十年資安產業的重大演變歷程。初期資安防禦從基於簽章的防毒軟體和邊界防火牆，經歷了雲端遷移導致邊界消融、行動裝置普及化，以及物聯網（IoT）擴大攻擊面等階段。隨著遠距工作模式的確立，傳統網路邊界徹底瓦解，促使企業必須轉向零信任架構（Zero Trust）。同時，威脅行為者也從單純駭客進化為具備國家級能力的犯罪組織，擅長利用零日漏洞和供應鏈攻擊。文章結尾以 AI 轉型為當前焦點，並以讀者投稿的「Look, I know, but this was the best AI stack we could afford」作為象徵，強調了 AI 時代帶來的新的安全挑戰。",
    tags: ["Dark Reading", "資安產業趨勢", "零信任架構", "物聯網", "AI 轉型", "供應鏈攻擊"],
    title_en: "Dark Reading Celebrates 20 Years: Reviewing Cybersecurity Industry Changes and Challenges in the AI Era",
    summary_en: "This article is a 20th-anniversary commemorative piece for Dark Reading, and is not a report on a specific security incident or vulnerability. It reviews the major evolutionary stages of the cybersecurity industry over the past two decades. Initially, security defense evolved from signature-based antivirus software and perimeter firewalls, through phases marked by the erosion of the perimeter due to cloud migration, the proliferation of mobile devices, and the expansion of the attack surface via the Internet of Things (IoT). With the establishment of remote work models, traditional network perimeters completely dissolved, compelling enterprises to transition to Zero Trust architecture. Concurrently, threat actors have evolved from simple hackers into sophisticated, nation-state-level criminal organizations, adept at exploiting zero-day vulnerabilities and executing supply chain attacks. The article concludes by focusing on AI transformation as the current centerpiece, using the reader-submitted quote, 'Look, I know, but this was the best AI stack we could afford,' as a symbol to emphasize the new security challenges brought by the AI era.",
    tags_en: ["Dark Reading", "Cybersecurity Industry Trends", "Zero Trust Architecture", "Internet of Things", "AI Transformation", "Supply Chain Attacks"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cloud-security/name-that-toon-mark-of-cybersecurity-progress", lang: "EN" }
    ]
  },
  {
    id: "20260529-027",
    trackers: ["security"],
    category: "前瞻技術",
    title: "全球人型機器人（Embodied AI）帶來的網路風險：從設備漏洞到地緣政治間諜戰",
    summary: "隨著全球國家和企業在具身AI（Embodied AI）市場的競爭加劇，人型機器人等機器人系統的網路安全風險日益凸顯。專家指出，這些系統不僅存在物理安全隱患，更可能透過網路竊取數據。研究人員已發現市面上流行的機器人（如Unitree）存在多個後門，並能將用戶私密數據傳輸至特定國家，甚至可能實現機器群的無線感染。除了設備層面的漏洞，供應鏈和關鍵資源也成為攻擊目標。特別是隨著具身AI對稀有金屬和關鍵礦產需求的增長，地緣政治間諜活動成為焦點。文章提到，中國的APT組織已多次針對加拿大、印尼、以及參與深海採礦的組織進行網路間諜活動，目的主要是竊取技術和商業機密，而非直接破壞。業界呼籲，在AI技術快速商業化的過程中，必須全面評估並修補這些系統潛在的網路和供應鏈風險。",
    tags: ["Embodied AI", "人型機器人", "網路安全", "供應鏈風險", "APT", "地緣政治", "Unitree"],
    title_en: "Cyber Risks Posed by Global Embodied AI: From Device Vulnerabilities to Geopolitical Espionage",
    summary_en: "As global nations and enterprises intensify competition in the Embodied AI market, the cybersecurity risks associated with robotic systems, such as humanoid robots, are becoming increasingly prominent. Experts point out that these systems not only pose physical security risks but can also be used to steal data over the network. Researchers have discovered multiple backdoors in popular robots (such as Unitree), which can transmit user private data to specific countries and may even achieve wireless infection across robot swarms. Beyond device-level vulnerabilities, the supply chain and critical resources are also becoming targets. Especially with the growing demand of Embodied AI for rare metals and critical minerals, geopolitical espionage has become a focal point. The article mentions that Chinese APT groups have repeatedly conducted cyber espionage targeting organizations in Canada, Indonesia, and those involved in deep-sea mining, primarily aiming to steal technology and commercial secrets rather than direct destruction. The industry calls for a comprehensive assessment and remediation of these potential network and supply chain risks amidst the rapid commercialization of AI technology.",
    tags_en: ["Embodied AI", "Humanoid Robots", "Cybersecurity", "Supply Chain Risk", "APT", "Geopolitics", "Unitree"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/global-powers-explore-humanoids-cyber-risk", lang: "EN" }
    ]
  },
  {
    id: "20260529-028",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Red Hat發布OpenShift沙盒容器1.12，將機密運算帶到裸機與AI工作負載",
    summary: "為滿足高度監管產業對數據保護的需求，Red Hat發布了OpenShift沙盒容器1.12和Red Hat build of Trustee 1.1，將機密運算（Confidential Computing）能力帶到裸機和AI工作負載。此功能提供針對Intel TDX、AMD SEV-SNP和IBM SEL等硬體支援的自動化生命週期管理、記憶體加密和遠端證明（Remote Attestation）。這使得企業能夠在物理基礎設施上保護「使用中」的數據，有助於符合GDPR、HIPAA和PCI-DSS等嚴格法規。此外，Red Hat還擴展了這些硬體強制保護到NVIDIA Confidential Computing，能夠在GPU記憶體內保護專有模型權重和數據，適用於AI/ML處理流程。這些更新為企業提供了一個統一、開源的堆疊，將雲端級的安全性合規性帶到裸機和加速AI管線。",
    tags: ["Red Hat", "OpenShift", "Confidential Computing", "Intel TDX", "AMD SEV-SNP", "AI/ML"],
    title_en: "Red Hat releases OpenShift Sandbox Container 1.12, bringing Confidential Computing to bare metal and AI workloads",
    summary_en: "To meet the data protection requirements of highly regulated industries, Red Hat has released OpenShift Sandbox Container 1.12 and Red Hat build of Trustee 1.1, bringing Confidential Computing capabilities to bare metal and AI workloads. This feature provides automated lifecycle management, memory encryption, and Remote Attestation, with hardware support for Intel TDX, AMD SEV-SNP, and IBM SEL. This enables enterprises to protect data 'in use' on physical infrastructure, aiding compliance with strict regulations such as GDPR, HIPAA, and PCI-DSS. Furthermore, Red Hat has extended this hardware-enforced protection to NVIDIA Confidential Computing, allowing for the protection of proprietary model weights and data within GPU memory, applicable to AI/ML processing pipelines. These updates provide enterprises with a unified, open-source stack, bringing cloud-grade security compliance to bare metal and accelerated AI pipelines.",
    tags_en: ["Red Hat", "OpenShift", "Confidential Computing", "Intel TDX", "AMD SEV-SNP", "AI/ML"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/10-essential-reads-optimize-performance-security-and-roi-ai-era", lang: "EN" }
    ]
  },
  {
    id: "20260529-029",
    trackers: ["security"],
    category: "前瞻技術",
    title: "微軟獲 Gartner 認可：2026 年終端保護領域領導者，強化 AI 驅動的防禦系統",
    summary: "微軟（Microsoft）宣布，其 Defender 終端保護解決方案連續第七年被 Gartner 評為 2026 年終端保護領域的領導者（Leader）。這份榮譽肯定了 Defender 結合全球威脅情報、提供業界領先的終端偵測與回應（EDR）能力。文章強調，現代資安防禦已從孤立工具轉向連貫系統，能夠跨越終端、身份、電子郵件、雲端和數據等環境，實現更早的偵測和更強的預防。微軟持續在終端保護方面進行創新，包括：在攻擊期間提供主動防禦，預測並阻擋攻擊者的下一步行動；透過自定義遙測數據收集，擴展偵測範圍；推出簡化的部署工具，提升上線效率；以及支援主權級別的保護模型。此外，微軟還宣布了針對本地 AI Agent 的終端安全功能，旨在發現、治理和阻擋如 OpenClaw 等 AI 代理程式。這些進展體現了微軟在 AI 驅動、代理式安全（Agentic Security）領域的持續投入。",
    tags: ["Microsoft Defender", "Gartner Magic Quadrant", "終端保護", "EDR", "AI Agent", "Agentic Security"],
    title_en: "Microsoft Recognized by Gartner: Leader in Endpoint Protection for 2026, Strengthening AI-Driven Defense Systems",
    summary_en: "Microsoft announced that its Defender endpoint protection solution has been named a Leader in the Endpoint Protection domain by Gartner for the seventh consecutive year. This recognition affirms that Defender combines global threat intelligence to provide industry-leading Endpoint Detection and Response (EDR) capabilities. The article emphasizes that modern cybersecurity defense has shifted from isolated tools to cohesive systems, capable of achieving earlier detection and stronger prevention across environments such as endpoints, identities, email, cloud, and data. Microsoft continues to innovate in endpoint protection, including: providing proactive defense during attacks by predicting and blocking attacker next steps; expanding detection scope through custom telemetry data collection; launching simplified deployment tools to improve time-to-market; and supporting sovereign-level protection models. Furthermore, Microsoft announced endpoint security features for local AI Agents, designed to discover, govern, and block AI agents such as OpenClaw. These advancements demonstrate Microsoft's continuous investment in the AI-driven, Agentic Security domain.",
    tags_en: ["Microsoft Defender", "Gartner Magic Quadrant", "Endpoint Protection", "EDR", "AI Agent", "Agentic Security"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/05/29/microsoft-is-named-a-leader-in-the-2026-gartner-magic-quadrant-for-endpoint-protection", lang: "EN" }
    ]
  },
  {
    id: "20260529-030",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "G7 成立網路安全工作組：強化國際合作應對跨國網路威脅",
    summary: "隨著網路威脅的加劇與多樣化，網路安全已成為國家與國際安全、經濟穩定及數位信任的核心支柱。為此，G7 成員國於 2024 年成立了網路安全工作組（Cybersecurity Working Group），旨在建立共同框架，分享資訊、設定共同優先事項並協調行動。該工作組的目標包括促進經驗分享、威脅分析、制定共同安全指引，並強化國家與關鍵基礎設施的集體韌性。在義大利（2024 年）和加拿大（2025 年）的主席期間，工作組已開始討論物聯網（IoT）安全、後量子密碼學過渡、人工智慧（AI）的網路安全挑戰，以及安全設計（security-by-design）和公私夥伴關係的發展。此機制是應對不斷演變的跨國威脅的關鍵合作框架，目標是為公民、企業和機構建立一個安全、有韌性且可信的網路空間。",
    tags: ["G7", "網路安全", "Cybersecurity Working Group", "物聯網", "後量子密碼學", "人工智慧", "國際合作"],
    title_en: "G7 Establishes Cybersecurity Working Group: Strengthening International Cooperation Against Cross-Border Cyber Threats",
    summary_en: "As cyber threats intensify and diversify, cybersecurity has become a core pillar of national and international security, economic stability, and digital trust. To address this, G7 member countries established a Cybersecurity Working Group in 2024. The group aims to build a common framework for sharing information, setting common priorities, and coordinating actions. The working group's goals include promoting experience sharing, threat analysis, developing common security guidelines, and strengthening the collective resilience of nations and critical infrastructure. During the presidencies of Italy (2024) and Canada (2025), the group has begun discussing IoT security, the post-quantum cryptography transition, and the cybersecurity challenges posed by Artificial Intelligence (AI), as well as the development of security-by-design and public-private partnerships. This mechanism is a key cooperative framework for addressing evolving cross-border threats, aiming to establish a secure, resilient, and trustworthy cyberspace for citizens, businesses, and institutions.",
    tags_en: ["G7", "Cybersecurity", "Cybersecurity Working Group", "IoT", "Post-Quantum Cryptography", "Artificial Intelligence", "International Cooperation"],
    sources: [
      { name: "ANSSI（法國）", url: "https://cyber.gouv.fr/en/international-cooperation-and-actions/the-g7-cybersecurity-working-group", lang: "EN" }
    ]
  },
  {
    id: "20260529-031",
    trackers: ["security"],
    category: "產業動態",
    title: "Microsoft SharePoint 存在高風險遠端程式碼執行漏洞 (CVE-2026-45659)，建議立即更新修補程式",
    summary: "微軟（Microsoft）發布了安全更新，修復了 SharePoint 平台中的一個遠端程式碼執行漏洞，編號為 CVE-2026-45659。此漏洞的 CVSS v3.1 分數為 8.8/10，屬於高風險等級。攻擊者若成功利用此漏洞，即使僅擁有低權限的遠端身份驗證權限，仍可透過傳送惡意序列化負載（serialized payloads）給受影響的 SharePoint 伺服器，從而達成遠端程式碼執行。實務影響包括未經授權存取敏感資訊、執行任意指令、權限提升，甚至導致系統被完全入侵。受影響產品包括 SharePoint Server Subscription Edition（版本早於 16.0.19725.20280）、SharePoint Server 2019（版本早於 16.0.10417.20128）和 SharePoint Server 2016（版本早於 16.0.5552.1002）。微軟建議所有使用者和管理員應立即將產品更新至最新版本以修補此漏洞。",
    tags: ["Microsoft", "SharePoint", "CVE-2026-45659", "遠端程式碼執行", "RCE", "資安漏洞"],
    title_en: "High-Risk Remote Code Execution Vulnerability Found in Microsoft SharePoint (CVE-2026-45659); Immediate Patching Recommended",
    summary_en: "Microsoft has released a security update to fix a Remote Code Execution vulnerability in the SharePoint platform, designated as CVE-2026-45659. This vulnerability has a CVSS v3.1 score of 8.8/10, classifying it as high risk. If successfully exploited, an attacker, even with only low-privilege remote authentication credentials, can achieve Remote Code Execution by sending malicious serialized payloads to the affected SharePoint server. Practical impacts include unauthorized access to sensitive information, execution of arbitrary commands, privilege escalation, and even complete system compromise. Affected products include SharePoint Server Subscription Edition (versions earlier than 16.0.19725.20280), SharePoint Server 2019 (versions earlier than 16.0.10417.20128), and SharePoint Server 2016 (versions earlier than 16.0.5552.1002). Microsoft advises all users and administrators to immediately update their products to the latest version to patch this vulnerability.",
    tags_en: ["Microsoft", "SharePoint", "CVE-2026-45659", "Remote Code Execution", "RCE", "Security Vulnerability"],
    sources: [
      { name: "新加坡 CSA", url: "https://csa.gov.sg/alerts-and-advisories/alerts/al-2026-063", lang: "EN" }
    ]
  },
  {
    id: "20260529-032",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "法國國家資安機構 ANSSI 參與新加坡國際資安週，深化與新加坡資安局 CSA 合作",
    summary: "法國國家資安機構（ANSSI）於 2025 年 10 月 20 日至 24 日期間，參加了在亞太地區最重要的國際資安盛會——新加坡國際資安週（SICW）。本次活動是法國與新加坡簽署全球戰略夥伴關係後，雙方深化合作的成果展現。ANSSI 的總監 Vincent Strubel 在會上參與了多場高層圓桌討論，涵蓋如 Pall Mall 流程等主題，並與其他國際夥伴進行了雙邊會談。此次盛會的重點在於進一步鞏固 ANSSI 與新加坡資安局（CSA）之間的多年合作關係。兩機構自 2015 年以來已建立穩固的合作基礎，並於 2023 年 6 月將原有的合作計畫延長，證明了兩國在資安領域的歷史信任與合作價值。",
    tags: ["ANSSI", "CSA", "新加坡國際資安週", "SICW", "法國", "新加坡", "資安合作"],
    title_en: "French National Cybersecurity Agency ANSSI Participates in Singapore International Cybersecurity Week, Deepening Cooperation with Singapore Cyber Agency CSA",
    summary_en: "The French National Cybersecurity Agency (ANSSI) participated in the Singapore International Cybersecurity Week (SICW), the most important international cybersecurity event in the Asia-Pacific region, from October 20 to 24, 2025. This participation showcases the deepening cooperation between France and Singapore following the signing of a global strategic partnership. ANSSI Director Vincent Strubel took part in multiple high-level roundtables during the event, covering topics such as the Pall Mall process, and held bilateral discussions with other international partners. The focus of this event was to further solidify the long-standing cooperation between ANSSI and the Cyber Agency of Singapore (CSA). The two agencies have built a solid foundation of cooperation since 2015, and extended their original cooperation plan in June 2023, demonstrating the historical trust and cooperative value between the two countries in the cybersecurity domain.",
    tags_en: ["ANSSI", "CSA", "Singapore International Cybersecurity Week", "SICW", "France", "Singapore", "Cybersecurity Cooperation"],
    sources: [
      { name: "ANSSI（法國）", url: "https://cyber.gouv.fr/en/news/sicw-2025", lang: "EN" }
    ]
  },
  {
    id: "20260529-033",
    trackers: ["security"],
    category: "uncategorized",
    title: "資安警示：Gogs版本存在參數注入漏洞，可能導致遠端程式碼執行與跨租戶資料竊取",
    summary: "資安公司 Rapid7 警告，自建程式碼版本管理系統 Gogs 存在一項重大漏洞。此漏洞被歸類為參數注入（argument injection），攻擊者僅需透過身分驗證即可在「合併前重設程式碼基礎」（Rebase before merging）的操作流程中，建立惡意分支的拉取請求。利用此漏洞，攻擊者無需管理員權限，且無需與使用者互動，即可達到遠端執行任意程式碼（RCE）。該漏洞的 CVSS v4.0 評分為 9.4，屬於極高風險。Rapid7 發現此風險影響範圍廣泛，無論在 Windows、macOS、Linux 系統建置，或使用 Docker、二進位檔等安裝方式的 Gogs 版本均受影響，包括 0.14.2 版和 0.15.0+dev 測試版。由於 Gogs 開發團隊尚未修補，Rapid7 建議用戶應立即採取行動，包括限制用戶註冊與建立儲存庫，並仔細審核相關的合併及重設程式碼基礎組態設定。",
    tags: ["Gogs", "Rapid7", "參數注入", "RCE", "程式碼版本管理", "資安漏洞"],
    title_en: "Security Alert: Gogs Version Contains Parameter Injection Vulnerability, Potentially Leading to Remote Code Execution and Cross-Tenant Data Theft",
    summary_en: "Security company Rapid7 warns that the self-hosted code version management system Gogs contains a critical vulnerability. This vulnerability is classified as parameter injection (argument injection). An attacker only needs to authenticate to create a pull request for a malicious branch during the 'Rebase before merging' workflow. By exploiting this vulnerability, an attacker can achieve Remote Code Execution (RCE) without requiring administrator privileges or user interaction. The vulnerability has a CVSS v4.0 score of 9.4, indicating extreme risk. Rapid7 found that this risk affects a wide range of Gogs versions, regardless of whether they are built on Windows, macOS, or Linux, or installed via Docker or binaries, including versions 0.14.2 and 0.15.0+dev. Since the Gogs development team has not yet patched it, Rapid7 advises users to take immediate action, including restricting user registration and repository creation, and carefully reviewing relevant merge and rebase before merging configuration settings.",
    tags_en: ["Gogs", "Rapid7", "Parameter Injection", "RCE", "Code Version Management", "Security Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176202", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260529-034",
    trackers: ["security"],
    category: "uncategorized",
    title: "Langflow 平台面臨嚴重漏洞：CVE-2025-34291 允許未經身份驗證的遠端程式碼執行",
    summary: "AI 應用開發平台 Langflow 曾於 2025 年 12 月發布安全更新，修補了其產品中的一個關鍵漏洞（CVE-2025-34291）。此漏洞被評為 CVSS v4.0 分數 9.4/10，屬於原點驗證錯誤（origin validation error）。若成功利用，未經身份驗證的遠端攻擊者可執行任意程式碼，導致系統完全被攻陷。目前此漏洞已被證實正在野外積極利用。受影響版本為 Langflow 1.6.9 及更早版本。建議所有使用者和管理員立即升級至最新版本，以防止系統被惡意利用。",
    tags: ["Langflow", "CVE-2025-34291", "遠端程式碼執行", "AI 平台", "資安漏洞"],
    title_en: "Langflow Platform Faces Critical Vulnerability: CVE-2025-34291 Allows Unauthenticated Remote Code Execution",
    summary_en: "The AI application development platform Langflow released a security update in December 2025 to patch a critical vulnerability (CVE-2025-34291) in its product. This vulnerability is rated CVSS v4.0 score 9.4/10 and is classified as an origin validation error. Successful exploitation allows unauthenticated remote attackers to execute arbitrary code, leading to complete system compromise. This vulnerability is currently confirmed to be actively exploited in the wild. Affected versions include Langflow 1.6.9 and earlier. All users and administrators are advised to upgrade immediately to the latest version to prevent malicious exploitation.",
    tags_en: ["Langflow", "CVE-2025-34291", "Remote Code Execution", "AI Platform", "Security Vulnerability"],
    sources: [
      { name: "新加坡 CSA", url: "https://csa.gov.sg/alerts-and-advisories/alerts/al-2026-062", lang: "EN" }
    ]
  }
];
