// data-20260911.js — 2026-09-11
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-11"] = [
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
  }
];
