// data-20260421.js — 2026-04-21
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-21"] = [
  {
    id: "20260421-001",
    trackers: ["security"],
    category: "重大事件",
    title: "前資安犯罪嫌犯「Scattered Spider」成員認罪：透過社工詐騙與SIM交換竊取數百萬加密貨幣",
    summary: "本文報導前網路犯罪集團「Scattered Spider」的成員泰勒·羅伯特·布坎南（Tyler Robert Buchanan）認罪，承認參與一系列的詐騙共謀與加重身份盜竊罪。布坎南在2022年參與的行動，涉及發動數以萬計的SMS釣魚攻擊，成功入侵包括Twilio、LastPass、DoorDash和Mailchimp等眾多科技公司。該集團利用竊取的資料，進而執行SIM卡交換（SIM-swapping）攻擊，從個人投資者處盜取加密貨幣。布坎南承認從美國個人受害者處盜取至少800萬美元的虛擬貨幣。這類攻擊的本質是利用社工工程學，透過欺騙電話、電子郵件或簡訊，讓受害者洩露憑證，從而取得企業內部網路的遠端存取權。布坎南於2023年逃離英國，並於2024年被西班牙當局逮捕，後被引渡至美國。此案凸顯了網路犯罪集團高度依賴社工技術和基礎設施漏洞進行大規模財務詐騙的嚴重風險。",
    tags: ["Scattered Spider", "SMS釣魚", "SIM-swapping", "社工工程學", "加密貨幣", "網路犯罪"],
    title_en: "Former Cybersecurity Criminal 'Scattered Spider' Member Pleads Guilty: Stealing Millions in Cryptocurrency via Social Engineering Scams and SIM Swapping",
    summary_en: "This article reports that Tyler Robert Buchanan, a former member of the cybercrime group 'Scattered Spider,' pleaded guilty to participating in a series of fraud conspiracies and aggravated identity theft. The actions Buchanan participated in in 2022 involved launching tens of thousands of SMS phishing attacks, successfully compromising numerous technology companies, including Twilio, LastPass, DoorDash, and Mailchimp. The group utilized the stolen data to execute SIM-swapping attacks, stealing cryptocurrency from individual investors. Buchanan admitted to stealing at least $8 million in virtual currency from individual victims in the United States. The nature of these attacks is to exploit social engineering, tricking victims through deceptive calls, emails, or texts into revealing credentials, thereby gaining remote access to corporate internal networks. Buchanan fled the UK in 2023 and was arrested by Spanish authorities in 2024, subsequently being extradited to the United States. This case highlights the severe risk posed by cybercrime groups' heavy reliance on social engineering techniques and infrastructure vulnerabilities for large-scale financial fraud.",
    tags_en: ["Scattered Spider", "SMS Phishing", "SIM-swapping", "Social Engineering", "Cryptocurrency", "Cybercrime"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/04/scattered-spider-member-tylerb-pleads-guilty", lang: "EN" }
    ]
  },
  {
    id: "20260421-002",
    trackers: ["os", "security"],
    category: "Apple",
    title: "macOS ClearanceKit 漏洞曝光：惡意軟體可偽裝Apple程序，存取受保護檔案",
    summary: "本漏洞 CVE-2026-40599 影響 macOS 系統中的 ClearanceKit 元件。ClearanceKit 用於攔截檔案系統存取事件，並強制執行每程序存取權限策略。在版本 5.0.5 之前，該元件存在錯誤，它會誤判具有空 Team ID 但非空 Signing ID 的程序為 Apple 平台二進位檔。這使得惡意軟體能夠偽裝成 Apple 程序，進入全域允許清單（global allowlist），從而存取所有受保護的檔案。此漏洞已在 5.0.5 版本中修復。建議使用者應立即升級 ClearanceKit 至 5.0.5 或更高版本，以防止權限提升和資料外洩風險。",
    tags: ["macOS", "ClearanceKit", "CVE-2026-40599", "Apple 平台", "權限提升"],
    title_en: "macOS ClearanceKit Vulnerability Exposed: Malicious Software Can Impersonate Apple Programs to Access Protected Files",
    summary_en: "The vulnerability CVE-2026-40599 affects the ClearanceKit component in macOS systems. ClearanceKit is used to intercept file system access events and enforce per-process access policies. Prior to version 5.0.5, the component contained a flaw that incorrectly identified programs with a null Team ID but a non-null Signing ID as Apple platform binaries. This allowed malicious software to impersonate Apple programs, enter the global allowlist, and subsequently access all protected files. This vulnerability has been patched in version 5.0.5. Users are advised to immediately upgrade ClearanceKit to version 5.0.5 or higher to prevent privilege escalation and data leakage risks.",
    tags_en: ["macOS", "ClearanceKit", "CVE-2026-40599", "Apple Platform", "Privilege Escalation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-40599", lang: "EN" }
    ]
  },
  {
    id: "20260421-003",
    trackers: ["security"],
    category: "前瞻技術",
    title: "研究報告：LLMs如何破解程式混淆技術，改變逆向工程格局",
    summary: "本研究探討大型語言模型（LLMs）在逆向工程領域的應用與挑戰。LLMs因其強大的程式碼閱讀能力，即使缺乏符號資訊，也能有效模仿和應用逆向工程方法。傳統的程式混淆技術旨在製造時間上的不對稱性，以增加逆向工程的難度。然而，研究發現，LLMs能夠在合理的時間內破解許多混淆技術，從而削弱了混淆的防禦效果。研究團隊使用學術混淆器 Tigress，並結合 AI 驅動的流程，開發了針對 LLMs 的靜態分析對策。這些對策的開發被證明是快速且成本低廉的。研究強調，成功的 LLM 防禦機制可以利用上下文窗口限制、預算限制和捷徑偏差等特性。這項研究顯示，LLMs已大幅改變軟體產業的格局，使得複雜的逆向工程任務更加容易，並促使開發者必須尋找新的防禦方法。",
    tags: ["LLM", "逆向工程", "程式混淆", "靜態分析", "AI 安全", "Tigress"],
    title_en: "Research Report: How LLMs Crack Code Obfuscation Techniques and Change the Reverse Engineering Landscape",
    summary_en: "This study explores the applications and challenges of Large Language Models (LLMs) in the field of reverse engineering. Due to their powerful code reading capabilities, LLMs can effectively mimic and apply reverse engineering methods even without symbolic information. Traditional code obfuscation techniques aim to create temporal asymmetry to increase the difficulty of reverse engineering. However, the research found that LLMs can crack many obfuscation techniques within a reasonable timeframe, thereby weakening the defensive effect of obfuscation. The research team used the academic obfuscator Tigress and, combined with AI-driven processes, developed static analysis countermeasures specifically for LLMs. The development of these countermeasures was proven to be fast and low-cost. The study emphasizes that successful LLM defense mechanisms can leverage characteristics such as context window limitations, budget constraints, and shortcut bias. This research shows that LLMs have significantly changed the landscape of the software industry, making complex reverse engineering tasks easier and forcing developers to seek new defensive methods.",
    tags_en: ["LLM", "Reverse Engineering", "Code Obfuscation", "Static Analysis", "AI Security", "Tigress"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/llm-reversing-vs-llm-obfuscation", lang: "EN" }
    ]
  }
];
