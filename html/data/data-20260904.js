// data-20260904.js — 2026-09-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-04"] = [
  {
    id: "20260904-10566",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache SkyWalking 發現 CWE-79 儲存型 XSS 漏洞，影響 10.2.0 至 10.4.0 版本",
    summary: "Apache SkyWalking 的 Booster UI 介面存在輸入處理不當導致的跨站腳本攻擊（XSS）漏洞，編號為 CVE-2026-85229。此漏洞屬於 CWE-79 類型，影響範圍為 Apache SkyWalking 版本 10.2.0 至 10.4.0。攻擊者可利用此漏洞在儀表板小工具（dashboard widgets）中注入惡意腳本。建議用戶應立即升級至 Horizon UI 1.0.0 版本以修復此安全問題。此漏洞的修補是針對先前 CVE-2025-54057 的不完整修復。",
    tags: ["Apache SkyWalking", "CVE-2026-85229", "XSS", "CWE-79", "Booster UI"],
    title_en: "Apache SkyWalking Discovers CWE-79 Stored XSS Vulnerability Affecting Versions 10.2.0 to 10.4.0",
    summary_en: "The Booster UI interface in Apache SkyWalking contains a Cross-Site Scripting (XSS) vulnerability due to improper input handling, identified as CVE-2026-85229. This vulnerability is classified as CWE-79 and affects Apache SkyWalking versions 10.2.0 through 10.4.0. An attacker can exploit this vulnerability by injecting malicious scripts into dashboard widgets. Users are advised to immediately upgrade to version 1.0.0 of the Horizon UI to remediate this security issue. This patch addresses an incomplete fix for the prior vulnerability, CVE-2025-54057.",
    tags_en: ["Apache SkyWalking", "CVE-2026-85229", "XSS", "CWE-79", "Booster UI"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/04/2", lang: "EN" }
    ]
  },
  {
    id: "20260904-10567",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache SkyWalking 存在 CVE-2026-71216 漏洞：透過 PagerDuty 警報鉤子傳輸明文密鑰",
    summary: "Apache SkyWalking 系列產品在版本 9.6.0 至 11.0.0 之間存在一個安全漏洞 CVE-2026-71216。此漏洞的根源在於其 PagerDuty 警報鉤子（alarm hook）在傳輸整合路由密鑰（integration routing key）時，會透過未加密的 HTTP 協定傳送。儘管 PagerDuty 服務端通常會透過 HTTPS 接收請求，並在收到純 HTTP 請求後回傳重定向，但此重定向並不能消除密鑰在離開主機時已經以明文形式被記錄的風險。攻擊者有可能攔截到包含路由密鑰的 JSON 內文，從而竊取敏感的整合資訊。建議受影響的用戶應升級至版本 11.0.0 或更高版本，以修復此安全問題。",
    tags: ["Apache SkyWalking", "CVE-2026-71216", "PagerDuty", "明文傳輸", "資安漏洞"],
    title_en: "Apache SkyWalking Vulnerable to CVE-2026-71216: Plaintext Key Transmission via PagerDuty Alarm Hook",
    summary_en: "Apache SkyWalking products, specifically versions between 9.6.0 and 11.0.0, contain a security vulnerability, CVE-2026-71216. The root cause lies in the PagerDuty alarm hook, which transmits the integration routing key via unencrypted HTTP protocol. Although the PagerDuty service endpoint typically receives requests via HTTPS and returns a redirect after receiving a pure HTTP request, this redirect does not eliminate the risk of the key being logged in plaintext as it leaves the host. An attacker could potentially intercept the JSON payload containing the routing key, thereby stealing sensitive integration information. Affected users are advised to upgrade to version 11.0.0 or higher to remediate this security issue.",
    tags_en: ["Apache SkyWalking", "CVE-2026-71216", "PagerDuty", "Plaintext Transmission", "Security Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/04/1", lang: "EN" }
    ]
  },
  {
    id: "20260904-10492",
    trackers: ["security"],
    category: "前瞻技術",
    title: "NCSC提醒企業：PQC轉型不只看內部，需掌握供應商產品升級與設備生命週期",
    summary: "英國國家網路安全中心（NCSC）指出，企業推動後量子密碼學（PQC）轉型時，除了盤點內部系統與密碼學資產，更必須及早掌握供應商產品的升級進度。若設備、軟體或服務無法如期支援PQC，將會影響轉型進度。NCSC建議企業應將PQC需求納入供應商資安評估與採購條件，並確認新產品的支援時間，以及既有產品的升級可行性。特別是長生命週期的工業IoT設備和OT環境，因設備汰換週期長，需更早規劃轉型。NCSC設定了轉型時程目標：建議2028年前完成資產盤點與初步計畫；2031年前完成最高優先級系統的轉型；並以2035年為所有系統、服務及產品完成轉型的目標。NCSC估計，大型組織僅完成前期盤點與規劃，就需要2至3年時間。",
    tags: ["NCSC", "PQC", "後量子密碼學", "供應鏈安全", "OT環境", "資安轉型"],
    title_en: "NCSC Reminds Businesses: PQC Transition Requires More Than Internal Focus; Must Track Vendor Product Upgrades and Equipment Lifecycles",
    summary_en: "The UK's National Cyber Security Centre (NCSC) points out that when enterprises drive the transition to Post-Quantum Cryptography (PQC), they must not only inventory internal systems and cryptographic assets but also proactively track the upgrade progress of vendor products. If equipment, software, or services cannot support PQC on schedule, it will impede the transition. NCSC advises that enterprises should incorporate PQC requirements into vendor security assessments and procurement criteria, and confirm the support timeline for new products, as well as the upgrade feasibility for existing ones. This is particularly critical for industrial IoT equipment and OT environments with long lifecycles, which require earlier planning for transition. NCSC has set transition timeline goals: recommending asset inventory and initial planning by 2028; completing the transition for the highest-priority systems by 2031; and setting 2035 as the target for completing the transition across all systems, services, and products. NCSC estimates that large organizations require 2 to 3 years just to complete the initial inventory and planning.",
    tags_en: ["NCSC", "PQC", "Post-Quantum Cryptography", "Supply Chain Security", "OT Environment", "Cybersecurity Transition"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178638", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260904-10493",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OWASP指出AI代理過度授權為三大風險：企業權限控管落差大",
    summary: "開放全球應用程式安全計畫（OWASP）在2026年發布的LLM十大安全風險中，將「過度代理授權」（Excessive Agency）列為第三大風險。這項風險指出AI代理（AI Agents）可能被授予超出其工作所需權限，導致安全漏洞。根據IT研究機構EMA的調查，雖然94%的受訪企業對AI代理的權限控制有信心，但實際落實最小權限原則的企業比例僅為32.7%。調查顯示，在實際部署AI代理的過程中，有65%的企業曾遇到AI代理執行超出原定範圍的操作，且近三成的事件已造成可衡量的組織影響。此外，企業在偵測和制止越界操作的能力也存在巨大落差：只有32.2%的企業能透過自動化機制在數分鐘內完成制止，而超過46%的企業甚至難以完整掌握AI代理過去30天的操作紀錄。這凸顯了企業在AI代理權限管理和監控機制上的重大實務挑戰。",
    tags: ["OWASP", "AI代理", "LLM", "最小權限原則", "過度授權", "AI安全"],
    title_en: "OWASP Highlights Excessive AI Agent Authorization as Top Three Risk: Significant Gap in Enterprise Privilege Control",
    summary_en: "The Open Web Application Security Project (OWASP) listed \"Excessive Agency\" as the third major risk in its Top 10 LLM Security Risks published in 2026. This risk points out that AI Agents may be granted permissions exceeding what is necessary for their function, leading to security vulnerabilities. According to a survey by the IT research firm EMA, while 94% of surveyed companies are confident in their AI Agent permission control, only 32.7% of companies actually implement the principle of least privilege. The survey showed that during the deployment of AI Agents, 65% of companies encountered instances where the AI Agents performed operations outside their designated scope, and nearly 30% of these incidents caused measurable organizational impact. Furthermore, there is a significant gap in enterprises' ability to detect and stop out-of-scope operations: only 32.2% of companies can stop such actions through automated mechanisms within minutes, and over 46% of companies struggle to fully track the AI Agent's operational records from the past 30 days. This highlights major practical challenges for enterprises in AI Agent permission management and monitoring mechanisms.",
    tags_en: ["OWASP", "AI Agents", "LLM", "Principle of Least Privilege", "Over-authorization", "AI Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178623", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260904-10494",
    trackers: ["security"],
    category: "前瞻技術",
    title: "澳洲通訊局（ASD）提出PQC轉型實務指引：建議企業建立密碼學物料清單（CBOM）",
    summary: "澳洲通訊局（ASD）於今年7月發布企業後量子密碼學（PQC）轉型實務做法，旨在協助企業應對未來量子電腦威脅。ASD將PQC轉型流程整理為LATICE架構，包含盤點（Locate）、評估（Assess）、排定優先順序（Triage）、執行（Implement）、溝通（Communicate）與教育訓練（Educate）等階段。企業應掌握系統中所有使用傳統非對稱式密碼學的位置、採用的演算法、金鑰長度與參數，以及受保護的資料與系統。由於密碼學資產可能分散於自研應用程式、OT設備、供應商平台、雲端服務、通訊協定、函式庫及二進位檔案等各處，ASD建議企業建立密碼學物料清單（CBOM）。此清單需整合SBOM、軟體供應鏈管理系統、資產探索工具、組態管理資料、PKI及金鑰管理系統等多源資訊，並建議企業不必等到資訊完整才開始準備，應及早建立初步清單並持續完善，以加速PQC轉型進程。",
    tags: ["PQC", "後量子密碼學", "ASD", "密碼學物料清單", "CBOM", "非對稱式密碼學"],
    title_en: "Australian Signals Directorate Issues PQC Transition Guidance: Recommends Establishing a Cryptographic Bill of Materials (CBOM)",
    summary_en: "The Australian Signals Directorate (ASD) released practical guidance for enterprise Post-Quantum Cryptography (PQC) transition in July of this year, aiming to help organizations prepare for future quantum computer threats. ASD structured the PQC transition process into a LATICE framework, encompassing stages such as Locate, Assess, Triage, Implement, Communicate, and Educate. Enterprises must identify all locations within their systems that use traditional asymmetric cryptography, including the algorithms, key lengths, parameters, and the data and systems being protected. Since cryptographic assets may be scattered across proprietary applications, OT equipment, supplier platforms, cloud services, communication protocols, libraries, and binary files, ASD recommends that enterprises establish a Cryptographic Bill of Materials (CBOM). This inventory must integrate multi-source information from SBOMs, software supply chain management systems, asset discovery tools, configuration management data, PKI, and key management systems. Furthermore, ASD advises that organizations should not wait for complete information before starting preparations; they should establish a preliminary list early and continuously refine it to accelerate the PQC transition process.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "ASD", "Cryptographic Bill of Materials", "CBOM", "Asymmetric Cryptography"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178653", lang: "ZH-TW" }
    ]
  }
];
