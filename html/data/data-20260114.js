// data-20260114.js — 2026-01-14
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-14"] = [
  {
    id: "20260114-001",
    trackers: ["eu_cra"],
    category: "調和標準",
    title: "ETSI 發布 EN 304 223 標準，建立 AI 系統全生命週期安全框架",
    summary: "為應對日益複雜的 AI 網路威脅，ETSI 發布了新的標準 EN 304 223。此標準旨在為 AI 模型和系統提供一套成熟、結構化且基於全生命週期的安全基準要求。文章指出，AI 帶來的風險與傳統軟體不同，包括資料投毒（data poisoning）、模型混淆（model obfuscation）、間接提示注入（indirect prompt injection）等。EN 304 223 採用了從安全設計、安全開發、安全部署、安全維護到安全終止的五個階段，定義了 13 項原則和要求。該標準涵蓋了包含深度神經網路的 AI 系統，特別適用於實際部署的生成式 AI 系統。此外，ETSI 還預計會發布技術報告 ETSI TR 104 159，專門針對生成式 AI，深入探討深度偽造、錯誤資訊、機密性、版權和智慧財產權等領域的具體規範。此標準為整個 AI 供應鏈提供了清晰、可信賴的安全基礎。",
    tags: ["ETSI", "EN 304 223", "AI 安全", "生成式 AI", "深度神經網路", "資料投毒"],
    title_en: "ETSI Releases EN 304 223 Standard, Establishing a Full Lifecycle Security Framework for AI Systems",
    summary_en: "To address increasingly complex AI cyber threats, ETSI has released the new standard EN 304 223. This standard aims to provide a mature, structured, and full lifecycle set of security baseline requirements for AI models and systems. The article notes that the risks posed by AI differ from traditional software, including data poisoning, model obfuscation, and indirect prompt injection. EN 304 223 adopts five stages—from secure design, secure development, secure deployment, to secure maintenance and secure decommissioning—and defines 13 principles and requirements. The standard covers AI systems, including those with deep neural networks, and is particularly applicable to deployed generative AI systems. Furthermore, ETSI plans to issue the technical report ETSI TR 104 159, which will specifically address generative AI, delving into specific regulations regarding deepfakes, misinformation, confidentiality, copyright, and intellectual property. This standard provides a clear and reliable security foundation for the entire AI supply chain.",
    tags_en: ["ETSI", "EN 304 223", "AI Security", "Generative AI", "Deep Neural Networks", "Data Poisoning"],
    sources: [
      { name: "ETSI 資安技術", url: "https://etsi.org/newsroom/press-releases/2627-etsi-releases-world-leading-standard-for-securing-ai", lang: "EN" }
    ]
  },
  {
    id: "20260114-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Project Zero揭露Android生態系統0-Click攻擊面：警告AI功能擴張與驅動程式安全漏洞",
    summary: "本報告深入分析了Android生態系統的0-click攻擊面，指出隨著AI功能爆炸式增長，手機的遠端攻擊面可能大幅擴大。研究團隊在Pixel設備上發現了多個關鍵漏洞，包括與Dolby UDC相關的漏洞（CVE-2025-54957）和BigWave驅動程式漏洞（CVE-2025-36934）。這些漏洞的發現時間極短，顯示攻擊者可能在短時間內利用未被充分覆蓋的編解碼器或驅動程式。報告強調，許多編解碼器和驅動程式仍是「軟目標」，且其攻擊面往往未被廠商充分理解。建議Android和OEM廠商應對0-click攻擊面進行嚴格分析、全面模糊測試（fuzzing），並考慮將最脆弱的驅動程式重寫為Rust等管理語言，同時確保如seccomp等安全機制在每次發布時都能得到驗證，以應對攻擊者不斷提升的利用能力。",
    tags: ["Android", "0-click", "Dolby UDC", "CVE-2025-54957", "CVE-2025-36934", "驅動程式安全", "AI安全"],
    title_en: "Project Zero Uncovers 0-Click Attack Surface in Android Ecosystem: Warning on AI Feature Expansion and Driver Vulnerabilities",
    summary_en: "This report deeply analyzes the 0-click attack surface of the Android ecosystem, pointing out that the mobile device's remote attack surface may significantly expand with the explosive growth of AI features. The research team discovered multiple critical vulnerabilities on Pixel devices, including a vulnerability related to Dolby UDC (CVE-2025-54957) and a BigWave driver vulnerability (CVE-2025-36934). The short discovery time of these vulnerabilities suggests that attackers may exploit insufficiently covered codecs or drivers in a short period. The report emphasizes that many codecs and drivers remain 'soft targets,' and their attack surface is often not fully understood by manufacturers. It recommends that Android and OEM manufacturers conduct rigorous analysis and comprehensive fuzzing for the 0-click attack surface, and consider rewriting the most vulnerable drivers in memory-safe languages like Rust. Furthermore, it stresses the need to ensure that security mechanisms like seccomp are validated with every release to counter the continuously improving exploitation capabilities of attackers.",
    tags_en: ["Android", "0-click", "Dolby UDC", "CVE-2025-54957", "CVE-2025-36934", "Driver Security", "AI Security"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/01/pixel-0-click-part-3.html", lang: "EN" }
    ]
  },
  {
    id: "20260114-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 Pixel 9 BigWave 驅動程式存在多個 LPE 漏洞，可逃逸媒體編解碼沙盒",
    summary: "本研究針對 Android 系統的媒體編解碼（mediacodec）環境，利用 DriverCartographer 工具發現了 Pixel 9 晶片組上用於加速 AV1 解碼的 BigWave 驅動程式（/dev/bigwave）。雖然 mediacodec 的 SELinux 環境旨在提供受限的沙盒保護，但研究人員發現該驅動程式可從此沙盒環境存取。由於 Android 設備的硬體驅動程式常是本地權限提升（LPE）漏洞的潛在來源，研究人員對 BigWave 驅動程式進行了深入審計。最終，他們在該驅動程式中發現了三個獨立的漏洞，其中一個漏洞具有極高的利用價值，能夠成功逃逸 mediacodec 的沙盒限制，並在 Pixel 9 設備上實現核心層級的任意讀寫（kernel arbitrary read/write）。這類漏洞若被惡意利用，可能導致系統核心被完全控制，造成極高的安全風險。",
    tags: ["Pixel 9", "BigWave", "LPE", "mediacodec", "SELinux", "Android", "驅動程式漏洞"],
    title_en: "Research Reveals Multiple LPE Vulnerabilities in Pixel 9 BigWave Driver, Allowing Sandbox Escape",
    summary_en: "This research focused on the media codec environment of the Android system, utilizing the DriverCartographer tool to discover the BigWave driver (/dev/bigwave) used for accelerating AV1 decoding on the Pixel 9 chipset. Although the mediacodec SELinux environment is designed to provide restricted sandbox protection, researchers found that this driver could be accessed from within the sandbox. Given that Android device hardware drivers are often potential sources of local privilege escalation (LPE) vulnerabilities, the researchers conducted an in-depth audit of the BigWave driver. They ultimately discovered three independent vulnerabilities within the driver, one of which has extremely high exploitability. This vulnerability can successfully escape the mediacodec sandbox restrictions and achieve kernel arbitrary read/write on the Pixel 9 device. If exploited maliciously, such vulnerabilities could lead to complete system kernel control, posing an extremely high security risk.",
    tags_en: ["Pixel 9", "BigWave", "LPE", "mediacodec", "SELinux", "Android", "Driver Vulnerability"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/01/pixel-0-click-part-2.html", lang: "EN" }
    ]
  },
  {
    id: "20260114-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google 揭露 Android 訊息解碼器 0-Click 漏洞：多個 CVE 警示訊息處理風險",
    summary: "隨著手機整合更多 AI 功能，訊息應用程式的 0-click 攻擊面日益擴大。Google 指出，許多功能（如音訊轉錄）在使用者未主動互動前，會自動解碼收到的媒體內容。這使得音訊解碼器成為大多數 Android 裝置的 0-click 攻擊面。研究團隊已針對此問題進行深入調查，並報告了多個漏洞。首先，針對 Samsung 設備的 Monkey’s Audio codec，報告了 CVE-2025-49415。接著，團隊審查了 Dolby Unified Decoder，並報告了 CVE-2025-54957，此漏洞可能存在於當前大多數 Android 裝置的 0-click 攻擊面。此外，另有研究報告了 CVE-2025-36934，該漏洞涉及 Pixel 9 上解碼器運行沙盒中的驅動程式。這些漏洞的實務影響是，攻擊者無需使用者點擊即可利用解碼器處理訊息媒體的過程，執行惡意代碼。建議開發者應立即修補相關的音訊解碼器和驅動程式，並評估訊息應用程式的安全性，特別是自動解碼功能帶來的風險。",
    tags: ["Android", "0-click", "CVE-2025-49415", "CVE-2025-54957", "CVE-2025-36934", "音訊解碼器"],
    title_en: "Google Discloses Android Messaging Decoder 0-Click Vulnerability: Multiple CVEs Warn of Message Handling Risks",
    summary_en: "As smartphones integrate more AI features, the 0-click attack surface of messaging applications is expanding. Google points out that many features (such as audio transcription) automatically decode received media content before user interaction. This makes the audio decoder the 0-click attack surface for most Android devices. A research team has conducted an in-depth investigation into this issue and reported multiple vulnerabilities. First, CVE-2025-49415 was reported for the Monkey’s Audio codec on Samsung devices. Next, the team reviewed the Dolby Unified Decoder and reported CVE-2025-54957, a vulnerability that may exist on the 0-click attack surface of most current Android devices. Furthermore, another study reported CVE-2025-36934, a vulnerability involving the driver running within the decoder sandbox on Pixel 9. The practical impact of these vulnerabilities is that attackers can execute malicious code by exploiting the decoder's process of handling message media without requiring user clicks. Developers are advised to immediately patch the relevant audio decoders and drivers, and to assess the security of messaging applications, especially the risks posed by automatic decoding features.",
    tags_en: ["Android", "0-click", "CVE-2025-49415", "CVE-2025-54957", "CVE-2025-36934", "Audio Decoder"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/01/pixel-0-click-part-1.html", lang: "EN" }
    ]
  },
  {
    id: "20260114-005",
    trackers: ["os", "security"],
    category: "Android",
    title: "AliasVault Android 密碼管理工具存在越權取得 Passkey 回應漏洞 (CVE-2026-22694)",
    summary: "密碼管理應用程式 AliasVault 的 Android 版本 0.24.0 至 0.25.2，在處理來自 Android 應用程式的 Passkey 請求時，存在驗證不完整的安全漏洞 (CVE-2026-22694)。此漏洞的本質在於 Android 憑證提供者（credential provider）未能完整驗證呼叫應用程式的身份、來源（origin）以及服務提供者 ID (RP ID)。在特定本地條件下，惡意應用程式可能嘗試取得其未授權存取權限的網站的 Passkey 回應。此漏洞已在 AliasVault Android 0.25.3 版本中修復。建議所有使用者應立即升級至 0.25.3 或更高版本，以避免被惡意應用程式利用，保護帳號的密鑰資訊。",
    tags: ["AliasVault", "CVE-2026-22694", "Android", "Passkey", "密碼管理", "憑證提供者"],
    title_en: "AliasVault Android Password Manager Tool Has Privilege Escalation Vulnerability in Passkey Response (CVE-2026-22694)",
    summary_en: "The Android version 0.24.0 to 0.25.2 of the password management application AliasVault contains an incomplete validation security vulnerability (CVE-2026-22694) when handling Passkey requests from Android applications. The core of this vulnerability is that the Android credential provider fails to fully validate the identity, origin, and Relying Party ID (RP ID) of the calling application. Under specific local conditions, a malicious application may attempt to obtain Passkey responses for websites to which it is not authorized. This vulnerability has been fixed in AliasVault Android version 0.25.3. All users are advised to immediately upgrade to 0.25.3 or later versions to prevent exploitation by malicious applications and protect account key information.",
    tags_en: ["AliasVault", "CVE-2026-22694", "Android", "Passkey", "Password Manager", "Credential Provider"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-22694", lang: "EN" }
    ]
  }
];
