// data-20261001.js — 2026-10-01
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-10-01"] = [
  {
    id: "20261001-14163",
    trackers: ["os"],
    category: "Linux",
    title: "OpenMandriva ROME 26.09 重大更新：導入 LLVM Clang 23、支援 Snap 格式及 PGO/LTO 優化",
    summary: "OpenMandriva 發布了 ROME 26.09 版本，這是一個自 ROME 24.12 以來的重大更新。本次更新在編譯器層面進行了顯著升級，預設編譯器已轉為 LLVM Clang 23，同時也提供了 GCC 16.2 選項。此外，系統還升級至 RPM 6.1，並在 RPM SPEC 文件中加入了 %pgo 區段，簡化了應用編譯器 Profile Guided Optimizations (PGO) 的流程。為了提升效能，幾乎所有 ROME 套件都採用了 Link-Time Optimizations (LTO) 進行編譯。\n\n在應用層面，OpenMandriva ROME 26.09 增加了對 Canonical Snap 套件的支援，除了原有的 Flatpaks、AppImage 和原生 RPM 格式外，極大地擴展了應用生態。其他重要升級包括 Qt 6.11.2、GTK 4.22.5 和 AMD ROCm 10.0 等。此外，本次發行也持續改善了對 RISC-V 和 LoongArch 64 位元架構的支援，並將開源 NVIDIA 核心模組納入官方核心。",
    tags: ["OpenMandriva", "ROME 26.09", "LLVM Clang 23", "PGO", "LTO", "Snap", "Linux"],
    title_en: "OpenMandriva ROME 26.09 Major Update: Adopting LLVM Clang 23, Supporting Snap Format, and PGO/LTO Optimization",
    summary_en: "OpenMandriva has released ROME 26.09, a major update since ROME 24.12. This update features significant compiler-level upgrades, with the default compiler switching to LLVM Clang 23, while also providing the option for GCC 16.2. Furthermore, the system has upgraded to RPM 6.1 and added a %pgo section to the RPM SPEC file, streamlining the process for application compiler Profile Guided Optimizations (PGO). To enhance performance, nearly all ROME packages are now compiled using Link-Time Optimizations (LTO). On the application layer, OpenMandriva ROME 26.09 adds support for Canonical Snap packages, greatly expanding the application ecosystem alongside existing Flatpaks, AppImage, and native RPM formats. Other notable upgrades include Qt 6.11.2, GTK 4.22.5, and AMD ROCm 10.0. Additionally, this release continues to improve support for RISC-V and LoongArch 64-bit architectures and incorporates the open-source NVIDIA kernel module into the official kernel.",
    tags_en: ["OpenMandriva", "ROME 26.09", "LLVM Clang 23", "PGO", "LTO", "Snap", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenMandriva-ROME-26.09", lang: "EN" }
    ]
  },
  {
    id: "20261001-14034",
    trackers: ["security"],
    category: "前瞻技術",
    title: "F5調查：全球網站PQC採用率分析，CDN效應推升後量子密碼學金鑰交換普及",
    summary: "網路應用與資安業者F5調查全球前100萬網站，發現54%的網站已支援後量子密碼學（PQC）金鑰交換。此普及化主要受大型CDN（如Cloudflare、Fastly）邊緣服務平臺預設啟用PQC金鑰交換的效應推動。若排除這些CDN託管的網站，實際支援比例僅為22%。在國家層面，臺灣的PQC採用率為38.26%，高於日本和南韓。然而，不同產業間仍有落差，科技業的PQC採用率最高，而關鍵基礎設施領域因部署大量既有OT系統及SCADA系統，轉型難度較高。雖然PQC金鑰交換已開始普及，但網站身分驗證仍是下一階段的部署課題，目前尚未在公開網環境出現純PQC或混合式PQC X.509憑證。企業應盤點現有演算法、金鑰長度及數位憑證，為PQC轉型做準備。",
    tags: ["PQC", "後量子密碼學", "F5", "金鑰交換", "TLS", "數位憑證"],
    title_en: "F5 Research: Global Website PQC Adoption Analysis Shows CDN Effect Boosting Post-Quantum Cryptography Key Exchange Adoption",
    summary_en: "A survey by network application and security vendor F5 of the top one million websites globally found that 54% of sites support Post-Quantum Cryptography (PQC) key exchange. This widespread adoption is primarily driven by the effect of large CDN (such as Cloudflare and Fastly) edge services platforms pre-enabling PQC key exchange. Excluding these CDN-hosted sites, the actual support rate is only 22%. At the national level, Taiwan's PQC adoption rate is 38.26%, higher than Japan and South Korea. However, there remains a disparity across industries; the technology sector has the highest PQC adoption rate, while the critical infrastructure sector faces higher transition difficulty due to the deployment of numerous existing OT and SCADA systems. Although PQC key exchange has begun to proliferate, website identity verification remains the next deployment challenge. Currently, pure PQC or hybrid PQC X.509 certificates have not appeared in the public internet environment. Enterprises should inventory their existing algorithms, key lengths, and digital certificates to prepare for the PQC transition.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "F5", "Key Exchange", "TLS", "Digital Certificate"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179267", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261001-14035",
    trackers: ["security"],
    category: "前瞻技術",
    title: "CSA警告PQC金鑰轉型應從信任根及上層金鑰著手，避免量子威脅",
    summary: "雲端安全聯盟（CSA）發布報告提醒企業進行後量子密碼學（PQC）金鑰轉型時，應從金鑰階層的信任根（Trust Root）及上層金鑰（KEK）著手。文章以信封加密（Envelope Encryption）為例指出，即使資料加密金鑰（DEK）已採用PQC保護，若上層的KEK或信任根仍依賴傳統密碼學（如RSA、ECC），整個金鑰結構仍可能面臨量子攻擊的威脅。CSA建議企業應先盤點所有密碼學資產，確認DEK、KEK與傳統憑證的相依關係，並根據資料保密時間決定轉型優先順序，特別是需要長期保密的資料。轉型過程中，由於系統不一定同步支援PQC，可能需暫時並存傳統與PQC演算法，企業必須監控實際使用的演算法及降級情況。轉型時應優先處理KEK等上層金鑰，確保轉型順序正確，以避免服務中斷或資料無法存取。",
    tags: ["PQC", "後量子密碼學", "金鑰管理", "信任根", "CSA", "加密"],
    title_en: "CSA Warns PQC Key Migration Must Start at Trust Root and Upper Keys to Avoid Quantum Threats",
    summary_en: "The Cloud Security Alliance (CSA) released a report advising enterprises that when migrating to Post-Quantum Cryptography (PQC) keys, they should begin with the Trust Root and Key Encryption Keys (KEK) at the key hierarchy level. Using Envelope Encryption as an example, the article points out that even if the Data Encryption Key (DEK) is protected by PQC, the entire key structure may still be vulnerable to quantum attacks if the upper KEK or Trust Root relies on traditional cryptography (such as RSA or ECC). CSA recommends that enterprises first inventory all cryptographic assets, confirming the dependencies between DEKs, KEKs, and traditional certificates, and determining the migration priority based on the data's required confidentiality period, especially for data requiring long-term secrecy. During the migration process, since systems may not synchronously support PQC, it might be necessary to temporarily coexist with traditional and PQC algorithms. Enterprises must monitor the actual algorithms used and any potential downgrade scenarios. When migrating, priority should be given to upper keys like KEKs to ensure the correct migration order, thereby preventing service disruption or data inaccessibility.",
    tags_en: ["PQC", "Post-Quantum Cryptography", "Key Management", "Trust Root", "CSA", "Encryption"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179311", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261001-14036",
    trackers: ["security"],
    category: "前瞻技術",
    title: "企業瀏覽器Island完成4億美元F輪融資，估值升至64億美元，強化AI代理安全控管能力",
    summary: "企業瀏覽器業者Island宣布成功完成4億美元的F輪融資，公司估值從先前48億美元提升至64億美元。Island於2022年推出企業瀏覽器，旨在讓企業能透過瀏覽器層面直接管理員工存取SaaS及內部Web應用程式，並限制資料的複製、貼上、下載及上傳等操作。為應對現代工作環境的複雜性，Island今年三月進一步擴展其Island Enterprise Platform，將控管範圍從單純的企業瀏覽器，擴展至一般瀏覽器、桌面應用程式及整個網路環境。特別是隨著企業開始導入AI代理（AI Agents），Island現已支援企業對AI代理的身分與權限進行精細控管，能夠限制AI代理存取哪些企業資源、使用哪些資料，並限定其可執行的操作，甚至可設定特定操作需要人工審核。此外，系統還能記錄AI代理的提示詞、回應及所有活動，以利企業進行後續的稽核追蹤。據悉，Island目前營收約達2億美元，年成長率約為100%，全球前十大銀行已有8家採用其企業瀏覽器解決方案。",
    tags: ["Island", "企業瀏覽器", "AI代理", "SaaS安全", "資料外洩防護", "企業資安"],
    title_en: "Enterprise Browser Island Completes $400 Million Series F Funding, Reaching $6.4 Billion Valuation, Enhancing AI Agent Security Control Capabilities",
    summary_en: "Enterprise browser provider Island announced the successful completion of $400 million in Series F funding, raising the company's valuation from $4.8 billion to $6.4 billion. Island launched its enterprise browser in 2022, aiming to allow organizations to manage employee access to SaaS and internal web applications directly at the browser level, while restricting actions such as copying, pasting, downloading, and uploading data. To address the complexity of modern work environments, Island further expanded its Island Enterprise Platform in March of this year, expanding its control scope from a simple enterprise browser to cover general browsers, desktop applications, and the entire network environment. Notably, as enterprises begin adopting AI Agents, Island now supports granular control of AI Agents' identities and permissions for enterprises. This allows organizations to restrict which corporate resources AI Agents can access, which data they can use, and what operations they can execute. It can even set specific operations to require manual review. Furthermore, the system records the AI Agent's prompts, responses, and all activities, facilitating subsequent auditing and tracking for the enterprise. It is reported that Island currently generates approximately $200 million in revenue, with an annual growth rate of about 100%, and 8 of the top ten global banks have adopted its enterprise browser solution.",
    tags_en: ["Island", "Enterprise Browser", "AI Agent", "SaaS Security", "Data Leakage Prevention", "Enterprise Cybersecurity"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179225", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261001-14156",
    trackers: ["os"],
    category: "重點關注",
    title: "PostgreSQL與Linux核心安全議題：探討Rust語言在記憶體安全與GPU應用上的應用",
    summary: "本週LWN.net週報涵蓋多個資安與開發議題。在核心安全方面，文章提及了PostgreSQL與Linux核心的互動，暗示了資料庫系統與作業系統層級的潛在安全交集。此外，文章也重點討論了Rust語言在提升記憶體安全方面的應用，特別是在處理C語言傳統難點的記憶體管理問題。在硬體加速與開發趨勢上，Rust被應用於GPU領域，顯示出其在系統級編程和高性能計算（HPC）中的潛力。另有KDE Plasma桌面環境的更新與討論，以及Chromium瀏覽器等主流應用程式的開發進展，共同描繪了當前系統軟體開發朝向更安全、更高效能、更現代化語言（如Rust）的趨勢。",
    tags: ["PostgreSQL", "Linux", "Rust", "記憶體安全", "GPU", "KDE Plasma", "Chromium"],
    title_en: "PostgreSQL and Linux Kernel Security Issues: Exploring Rust's Application in Memory Safety and GPU Computing",
    summary_en: "This week's LWN.net roundup covers various cybersecurity and development topics. Regarding kernel security, the article touches upon the interaction between PostgreSQL and the Linux kernel, suggesting potential security intersections between database systems and operating system layers. Furthermore, the article emphasizes the application of the Rust language in enhancing memory safety, particularly in addressing memory management issues that have traditionally been difficult with C. In hardware acceleration and development trends, Rust is being applied in the GPU domain, demonstrating its potential in system-level programming and High-Performance Computing (HPC). Other topics include updates and discussions on the KDE Plasma desktop environment, as well as development progress in mainstream applications like the Chromium browser. Collectively, these points paint a picture of current system software development moving toward safer, more efficient, and more modern languages (such as Rust).",
    tags_en: ["PostgreSQL", "Linux", "Rust", "Memory Safety", "GPU", "KDE Plasma", "Chromium"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1096293", lang: "EN" }
    ]
  },
  {
    id: "20261001-14164",
    trackers: ["os"],
    category: "重點關注",
    title: "Valve為Steam Frame VR開發，在Mesa Turnip驅動程式中實現焦平面渲染支援",
    summary: "Valve正在為其Steam Frame VR頭戴裝置開發焦平面渲染（Foveated Rendering）支援。此技術旨在模擬人眼視覺，在使用者注視的中心點（gaze point）提供高細節渲染，而在周邊視野則降低渲染品質。這對於VR頭戴設備的圖形渲染至關重要，因為它能在不犧牲核心視覺體驗的前提下，有效節省運算資源和功耗。該功能透過利用Vulkan的VK_EXT_fragment_density_map等擴充功能實現。Mesa資深貢獻者Connor Abbott為此進行了開發，並在XDC 2026上展示了相關成果。此外，他還分享了未來計畫，包括支援Adreno 800系列硬體、在SteamVR和遊戲引擎中整合子採樣圖像，以及實現更流暢的渲染效果。",
    tags: ["Valve", "Steam Frame", "Mesa", "Turnip", "Foveated Rendering", "Vulkan", "Adreno"],
    title_en: "Valve Develops Foveated Rendering Support for Steam Frame VR in Mesa Turnip Driver",
    summary_en: "Valve is developing support for Foveated Rendering for its Steam Frame VR headset. This technology aims to mimic human vision by providing high-detail rendering at the user's gaze point while reducing the rendering quality in the peripheral vision. This is crucial for VR headset graphics rendering because it effectively conserves computational resources and power consumption without sacrificing the core visual experience. This functionality is implemented by utilizing Vulkan extensions such as VK_EXT_fragment_density_map. Mesa contributor Connor Abbott developed this feature and presented the results at XDC 2026. Furthermore, he shared future plans, including support for the Adreno 800 series hardware, integrating sub-sampled images into SteamVR and game engines, and achieving smoother rendering effects.",
    tags_en: ["Valve", "Steam Frame", "Mesa", "Turnip", "Foveated Rendering", "Vulkan", "Adreno"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Steam-Frame-Turnip-Foveated", lang: "EN" }
    ]
  },
  {
    id: "20261001-14079",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "海康威視（Hikvision）與加德科技（Guardtech）簽署總代理合約，強化進國內門禁市場的佈局",
    summary: "AIoT產品及解決方案供應商海康威視（Hikvision）與國內物聯網安全市場的加德科技（Guardtech）簽署了門禁產品及解決方案的總代理合約。透過此次合約，加德科技正式獲得海康威視門禁硬體官方總代理資格。雙方計畫結合海康威視的技術實力與加德科技的通路及技術支援能力，提供客製化的門禁解決方案。主要產品線包括快速閘門（Speed Gate）和旋轉門（Turnstile）、MinMoe（민모）人臉辨識終端機、AX PRO無線警報系統等。特別值得一提的是，MinMoe人臉辨識終端機採用深度學習技術，提供超過99%的準確度與0.2秒以下的辨識速度，並透過人臉辨識防偽（Anti-spoofing）及使用者資料加密功能，強化了安全性與個人隱私保護。此外，透過Hik-Connect和HikCentral Professional等整合管理應用程式，可以在雲端及本地端（On-premise）環境中實現門禁的集中化管理。加德科技除了總代理合約，同時也將招募全國經銷商，以擴大市場佔有率，並預計為合作夥伴提供包括通路利潤、技術支援、銷售潛在客戶連結等多方面的多元支持。",
    tags: ["海康威視", "加德科技", "門禁", "AIoT", "MinMoe", "HikCentral Professional", "物聯網安全"],
    title_en: "Hikvision and Guardtech Sign General Agency Agreement to Strengthen Domestic Access Control Market Presence",
    summary_en: "AIoT product and solution provider Hikvision and domestic IoT security market player Guardtech have signed a general agency agreement for access control products and solutions. Through this agreement, Guardtech officially obtained the status of official general agent for Hikvision access control hardware. The two parties plan to combine Hikvision's technological strength with Guardtech's channel and technical support capabilities to provide customized access control solutions. Key product lines include Speed Gate and Turnstile, the MinMoe facial recognition terminal, and the AX PRO wireless alarm system. Notably, the MinMoe facial recognition terminal utilizes deep learning technology, offering over 99% accuracy and recognition speeds under 0.2 seconds. Furthermore, it enhances security and personal privacy protection through anti-spoofing and user data encryption functions. Additionally, integrated management applications such as Hik-Connect and HikCentral Professional enable centralized access control management in both cloud and on-premise environments. In addition to the general agency agreement, Guardtech will also recruit national distributors to expand market share and is expected to provide diverse support to partners, including channel profit, technical support, and sales lead connections.",
    tags_en: ["Hikvision", "Guardtech", "Access Control", "AIoT", "MinMoe", "HikCentral Professional", "IoT Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146140", lang: "EN" }
    ]
  },
  {
    id: "20261001-14080",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Google發表下一代前沿AI模型Gemini 4 Argon，初期僅限於專業資安機構使用",
    summary: "Google宣布推出下一代前沿AI模型Gemini 4 Argon。該模型在軟體開發、法律、金融等企業知識工作，以及複雜的資安防禦任務中展現了頂尖性能。Google初期僅將其開放給「可信賴的資安防禦者」群體使用，以進行初步測試，這符合業界對大型AI模型「未對齊」（misalignment）風險的關注。Google表示，在逐步擴大使用範圍前，將加強核心安全機制，包括防止模型濫用、防範提示注入（Prompt Injection）攻擊，並持續監測模型是否出現未對齊行為。該模型目前已在Google內部應用，協助處理如大型程式碼庫遷移等任務。Google的這次發表，緊接在OpenAI發表其AI Agent Dots和GPT-6.1 Sol模型之後，顯示了業界在AI能力和安全控制上的激烈競爭。",
    tags: ["Google", "Gemini 4 Argon", "AI模型", "Prompt Injection", "資安"],
    title_en: "Google Unveils Next-Generation Frontier AI Model, Gemini 4 Argon, Initially Restricted to Professional Cybersecurity Institutions",
    summary_en: "Google has announced the launch of its next-generation frontier AI model, Gemini 4 Argon. The model demonstrates top-tier performance across enterprise knowledge work, including software development, legal, and finance, as well as complex cybersecurity defense tasks. Google is initially restricting access to 'trusted cybersecurity defenders' for preliminary testing, addressing industry concerns regarding the 'misalignment' risks associated with large AI models. Google stated that before expanding the usage scope, it will strengthen core security mechanisms, including preventing model misuse and defending against Prompt Injection attacks, while continuously monitoring the model for any signs of misalignment behavior. The model is currently in use within Google's internal operations, assisting with tasks such as migrating large codebases. This announcement by Google follows closely after OpenAI released its AI Agent Dots and GPT-6.1 Sol models, highlighting the intense industry competition in both AI capabilities and safety controls.",
    tags_en: ["Google", "Gemini 4 Argon", "AI Model", "Prompt Injection", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146127", lang: "EN" }
    ]
  },
  {
    id: "20261001-14083",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "政府宣布強化公部門資安責任制：違反基本保密規範也將面臨懲處",
    summary: "為應對近期多起公部門資安事故，政府相關部門（包括행정안전부、國家情報院、人事革新處、個人情報保護委員會等）聯合宣布了《公部門資安責任強化方案》。本次改革旨在全面提升公部門的資安管理標準，並嚴格追究相關人員的責任。新規定將擴大懲處範圍，不僅限於故意造成事故，甚至包括未更換初始密碼或長期忽略已發現的資安漏洞等基本資訊保護規範的違反行為。此外，政府將透過修改《公務員懲戒令施行細則》等文件，直接將責任歸咎於監督者，提高懲戒標準。為提升整體資安能力，國家情報院主導的「資安實態評估」對象將從今年的 153 個機構擴大至 2028 年的 2000 多個國家及公部門。此外，還將在中央行政機構和地方公營企業的經營評估中增加資安指標，並規劃設立專業的專責組織，確保穩定的資安預算投入。",
    tags: ["公部門", "資安責任", "懲戒標準", "國家情報院", "資訊保護", "CVE"],
    title_en: "Government Announces Enhanced Cybersecurity Accountability for Public Sector: Violating Basic Confidentiality Standards Will Face Penalties",
    summary_en: "In response to recent public sector cybersecurity incidents, relevant government departments (including the Ministry of the Interior and Safety, National Intelligence Service, Personnel Innovation Department, and Personal Information Protection Commission) have jointly announced the 'Public Sector Cybersecurity Accountability Enhancement Plan.' This reform aims to comprehensively raise cybersecurity management standards across the public sector and strictly hold relevant personnel accountable. The new regulations will expand the scope of penalties, covering not only intentional incidents but also basic violations of information protection standards, such as failing to change initial passwords or long-term neglect of discovered security vulnerabilities. Furthermore, the government plans to directly assign responsibility to supervisors by amending documents like the 'Detailed Rules for the Civil Servant Disciplinary Regulations,' thereby raising disciplinary standards. To improve overall cybersecurity capabilities, the 'Cybersecurity Status Assessment,' led by the National Intelligence Service, will expand its scope from this year's 153 institutions to over 2,000 national and public sector entities by 2028. Additionally, cybersecurity indicators will be added to the operational assessments of central administrative agencies and local public enterprises, and a specialized dedicated organization will be planned to ensure stable cybersecurity budget allocation.",
    tags_en: ["Public Sector", "Cybersecurity Accountability", "Disciplinary Standards", "National Intelligence Service", "Information Protection", "CVE"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146133", lang: "EN" }
    ]
  }
];
