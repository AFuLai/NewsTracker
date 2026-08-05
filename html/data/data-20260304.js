// data-20260304.js — 2026-03-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-03-04"] = [
  {
    id: "20260304-001",
    trackers: ["eu_cra"],
    category: "法令更新",
    title: "歐盟《產品安全法案》（CRA）：成員國在市場監管與符合性評定中的核心角色",
    summary: "本文闡述了歐盟《產品安全法案》（CRA）的執行機制，強調了成員國在市場監管中的關鍵作用。CRA採用事後執法模式，要求製造商需自行確保產品符合法案規定的基本要求，並負起市場投放的全部責任。成員國負責執行，有權對投放歐盟市場的產品進行審查，並可要求供應鏈中的所有經濟參與者（包括製造商、授權代表、進口商和經銷商）採取糾正或限制措施。此外，成員國還負責評估和監控符合性評定機構，並透過指定通知機構（Notifying authorities）來執行。為確保執行的一致性，成員國在多個論壇進行協調，並參與制定實施法規。相關合作機構包括行政合作群組（AdCos）和通知機構工作組，共同推動市場監管和符合性評定。",
    tags: ["CRA", "產品安全法案", "歐盟", "市場監管", "符合性評定", "成員國"],
    title_en: "EU Product Safety Act (CRA): The Core Role of Member States in Market Surveillance and Conformity Assessment",
    summary_en: "This article elaborates on the enforcement mechanism of the EU Product Safety Act (CRA), emphasizing the crucial role of member states in market surveillance. The CRA adopts an ex-post enforcement model, requiring manufacturers to ensure that their products comply with the basic requirements stipulated by the Act and bear full responsibility for placing them on the market. Member states are responsible for enforcement, possessing the authority to examine products placed on the EU market and can mandate corrective or restrictive measures across all economic operators in the supply chain (including manufacturers, authorized representatives, importers, and distributors). Furthermore, member states are responsible for assessing and monitoring conformity assessment bodies, and they execute this through designated notifying authorities. To ensure consistent enforcement, member states coordinate in multiple forums and participate in developing implementing regulations. Relevant collaborative bodies include the Administrative Cooperation Groups (AdCos) and the Notifying Authorities Working Group, which jointly promote market surveillance and conformity assessment.",
    tags_en: ["CRA", "Product Safety Act", "EU", "Market Surveillance", "Conformity Assessment", "Member States"],
    sources: [
      { name: "EC CRA 實施頁面", url: "https://digital-strategy.ec.europa.eu/en/policies/cra-member-states", lang: "EN" }
    ]
  },
  {
    id: "20260304-002",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "歐盟《網路韌性法案》（CRA）要求供應鏈全鏈管理：涵蓋晶片、作業系統等組件安全",
    summary: "歐盟《網路韌性法案》（CRA）規定，產品製造商的責任已擴大至整個供應鏈，不僅限於最終產品（如智慧型手機或應用程式），也涵蓋了晶片、作業系統等核心組件。製造商必須確保產品在設計階段即具備基礎安全，包括預設安全（如禁止預設密碼）、存取控制、加密技術使用，以及自動更新機制。此外，製造商需為產品設定明確的支援期限，並在產品上市前進行風險評估，定義如何實施必要的網路安全要求，並完成符合性評定。產品上市後，製造商必須在指定的支援期內處理漏洞，並主動報告任何被利用的漏洞或嚴重安全事件。此法案要求製造商在產品生命週期各階段持續負責安全，並最終可貼附 CE 標記和符合性聲明。",
    tags: ["CRA", "網路韌性法案", "歐盟", "供應鏈安全", "CE 標記", "安全設計"],
    title_en: "EU Cyber Resilience Act (CRA) Mandates Full Supply Chain Management: Covering Components like Chips and Operating Systems",
    summary_en: "The EU Cyber Resilience Act (CRA) expands the responsibility of product manufacturers across the entire supply chain, extending beyond just the final product (such as smartphones or applications) to include core components like chips and operating systems. Manufacturers must ensure that products are designed with foundational security from the outset, including security by design principles (such as prohibiting default passwords), access control, the use of encryption technology, and automatic update mechanisms. Furthermore, manufacturers must set clear support periods for their products, conduct risk assessments before market placement, define how necessary cybersecurity requirements will be implemented, and undergo conformity assessment. After market placement, manufacturers must address vulnerabilities within the specified support period and proactively report any exploited vulnerabilities or serious security incidents. This Act requires manufacturers to maintain continuous security responsibility throughout the product lifecycle, which ultimately allows for the attachment of the CE marking and a declaration of conformity.",
    tags_en: ["CRA", "Cyber Resilience Act", "EU", "Supply Chain Security", "CE Marking", "Security by Design"],
    sources: [
      { name: "EC CRA 實施頁面", url: "https://digital-strategy.ec.europa.eu/en/policies/cra-manufacturers", lang: "EN" }
    ]
  },
  {
    id: "20260304-003",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞曝光：PowerVR 物件生命週期問題導致堆記憶體溢出，需緊急修補",
    summary: "本篇報告揭露 CVE-2026-3537，這是一個發生在 Google Chrome 瀏覽器於 Android 平台上的安全漏洞。該漏洞源於 PowerVR 繪圖處理器中的物件生命週期管理問題，允許遠端攻擊者透過精心構造的 HTML 頁面，潛在地觸發堆記憶體（heap corruption）的溢出。根據 Chromium 安全性評級，此漏洞被判定為「Critical」（嚴重）。該漏洞影響範圍涵蓋所有版本低於 145.0.7632.159 的 Chrome on Android。攻擊向量為遠端（AV:N），無需本地權限（PR:N），且攻擊難度較低（AC:L）。修補建議是立即升級至 145.0.7632.159 或更高版本。開發者應特別關注物件生命週期管理和堆記憶體安全，以避免類似的資源釋放錯誤。",
    tags: ["Google Chrome", "Android", "CVE-2026-3537", "PowerVR", "堆記憶體溢出", "Chromium"],
    title_en: "Google Chrome Android Vulnerability Exposed: PowerVR Object Lifecycle Issue Causes Heap Overflow, Requires Urgent Patch",
    summary_en: "This report reveals CVE-2026-3537, a security vulnerability found in the Google Chrome browser on the Android platform. The flaw originates from an object lifecycle management issue within the PowerVR graphics processor, which allows a remote attacker to potentially trigger a heap corruption overflow via a specially crafted HTML page. According to Chromium security ratings, this vulnerability is classified as 'Critical'. The vulnerability affects all versions of Chrome on Android prior to 145.0.7632.159. The attack vector is remote (AV:N), requires no local privileges (PR:N), and has low attack complexity (AC:L). The recommended fix is to immediately upgrade to version 145.0.7632.159 or higher. Developers should pay special attention to object lifecycle management and heap memory safety to prevent similar resource release errors.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-3537", "Heap Overflow", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-3537", lang: "EN" }
    ]
  }
];
