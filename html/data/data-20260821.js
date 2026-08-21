// data-20260821.js — 2026-08-21
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-21"] = [
  {
    id: "20260821-001",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Mesa 驅動程式更新：Nova Lake 系列處理器圖形支援現已穩定化",
    summary: "Intel 的開源 Mesa 驅動程式針對 Linux 平台上的 Iris Gallium3D (OpenGL) 和 ANV (Vulkan) 支援，已將下一代 Nova Lake 處理器（包含 S、U、H、HX 系列）的整合圖形支援，從實驗性狀態提升至預設穩定狀態。此變動與 Linux 7.3 核心將 Nova Lake Xe3P 圖形視為穩定且預設啟用有關。由於 Linux 核心不再要求「force_probe」才能支援 Intel Nova Lake 圖形，Mesa 驅動程式也同步移除相關的 force probe 覆寫邏輯。此修補程式已在 Mesa Git 中實施，並計畫回溯應用至目前的 Mesa 26.2 穩定系列。這項更新確保了在 Intel Nova Lake 處理器正式上市前，開源 Linux 驅動支援已具備良好的穩定性，為開發者和使用者提供了更可靠的圖形加速體驗。",
    tags: ["Intel", "Mesa", "Nova Lake", "Linux", "OpenGL", "Vulkan", "Linux 核心"],
    title_en: "Intel Mesa Driver Update: Nova Lake Processor Graphics Support Stabilized",
    summary_en: "Intel's open-source Mesa driver support for Iris Gallium3D (OpenGL) and ANV (Vulkan) on Linux platforms has upgraded the integrated graphics support for the next-generation Nova Lake processors (including S, U, H, and HX series) from an experimental state to a stable, default state. This change is correlated with the Linux 7.3 kernel treating Nova Lake Xe3P graphics as stable and default enabled. Since the Linux kernel no longer requires 'force_probe' to support Intel Nova Lake graphics, the Mesa driver has also removed the corresponding force probe override logic. This patch has been implemented in the Mesa Git and is planned for backporting to the current Mesa 26.2 stable series. This update ensures that open-source Linux driver support possesses robust stability even before the official launch of the Intel Nova Lake processors, providing developers and users with a more reliable graphics acceleration experience.",
    tags_en: ["Intel", "Mesa", "Nova Lake", "Linux", "OpenGL", "Vulkan", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Mesa-Nova-Lake-Stable", lang: "EN" }
    ]
  },
  {
    id: "20260821-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安專家呼籲：地方政府應關注基礎資安，而非昂貴工具，以防範資金挪用與資料外洩",
    summary: "本文為資安專家撰寫的觀點文章，指出地方政府機構（如地方住房管理局、縣政府）在資安防護上常面臨預算不足、人力短缺的困境。這些機構雖然持有與聯邦政府類似的敏感資料（如社保號碼、醫療紀錄、刑事司法檔案），但往往缺乏專業的資安專案。專家強調，資安防護不應從昂貴的企業級工具開始，而應從基礎的風險評估和流程改善入手。建議地方政府應先釐清「正在運行的系統」、「所持有的資料」以及「實際的暴露面」，並將資安工作拆解成小塊、可負擔的單元（如MFA部署、事件回應保留），以適應有限的預算。此外，應主動將法規遵循（如HUD規則、CJIS、SOC 2）納入初期討論，並維持長期合作關係，持續進行人員培訓與監控，才能真正建立起穩固的資安防護體系。",
    tags: ["地方政府", "資安風險評估", "預算限制", "MFA", "CJIS", "資安流程"],
    title_en: "Cybersecurity Experts Urge Local Governments to Focus on Foundational Security, Not Expensive Tools, to Prevent Fund Misappropriation and Data Leakage",
    summary_en: "This opinion piece by cybersecurity experts highlights the challenges faced by local government agencies (such as local housing authorities and county governments) regarding cybersecurity protection, often due to budget constraints and staff shortages. Although these agencies hold sensitive data similar to that held by federal governments (such as social security numbers, medical records, and criminal justice files), they often lack professional cybersecurity staff. Experts emphasize that cybersecurity defense should not begin with expensive enterprise-grade tools, but rather with foundational risk assessments and process improvements. It is recommended that local governments first clarify their 'operational systems,' 'held data,' and 'actual exposure surface,' and break down cybersecurity work into small, affordable units (such as MFA deployment or incident response planning) to accommodate limited budgets. Furthermore, they should proactively integrate regulatory compliance (such as HUD rules, CJIS, and SOC 2) into initial discussions and maintain long-term partnerships, continuously conducting personnel training and monitoring, in order to truly establish a robust cybersecurity defense system.",
    tags_en: ["local government", "cybersecurity risk assessment", "budget constraints", "MFA", "CJIS", "cybersecurity process"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/calling-on-cyber-pros-to-help-city-hall", lang: "EN" }
    ]
  },
  {
    id: "20260821-003",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "Check Point揭露大型殭屍網路「StopAndProtect」：利用WordPress漏洞進行遠端代碼執行攻擊",
    summary: "全球資安公司Check Point揭露了一個名為「StopAndProtect」的大型網路犯罪集團。該集團利用了數千個已過時、缺乏安全補丁的WordPress網站，將其作為殭屍網路基礎設施。攻擊者透過利用WordPress和外掛的漏洞，佔領這些網站作為惡意程式散播地、C2命令控制伺服器和竊取資料儲存區。入侵手法包括「ClickFix」，即欺騙網站訪客看到偽造的CAPTCHA驗證畫面，進而誘使他們直接執行惡意的PowerShell指令。一旦設備感染，會分階段安裝包括勒索軟體、SMB/USB蠕蟲、螢幕鎖定器和資訊竊取器在內的六種模組化惡意工具。特別值得注意的是，資訊竊取惡意程式能在使用者離開時自動搜尋WhatsApp聯絡人，並秘密擷取螢幕畫面和對話紀錄。攻擊者透過植入強制自動執行的「MU-Plugin」來取得遠端代碼執行（RCE）權限，並能清除入侵痕跡。他們使用自製的網站管理程式（fMain.frm）從中央伺服器遠端控制分散的殭屍網路。截至7月，全球超過6000個IP位址受此攻擊影響。資安專家建議警惕在瀏覽器外部引導指令複製貼上的異常CAPTCHA畫面。",
    tags: ["Check Point", "WordPress", "StopAndProtect", "殭屍網路", "RCE", "PowerShell", "惡意程式"],
    title_en: "Check Point Uncovers Large Botnet Named 'StopAndProtect': Exploiting WordPress Vulnerabilities for Remote Code Execution Attacks",
    summary_en: "Global cybersecurity firm Check Point has uncovered a large cybercrime group named 'StopAndProtect.' This group utilizes thousands of outdated, unpatched WordPress websites as botnet infrastructure. Attackers exploit vulnerabilities in WordPress and its plugins to seize these sites for malicious code distribution, Command and Control (C2) servers, and data storage. The infection method includes 'ClickFix,' which deceives website visitors into seeing a fake CAPTCHA verification screen, thereby tricking them into executing malicious PowerShell commands. Once a device is infected, it installs six modular malicious tools, including ransomware, SMB/USB worms, screen lockers, and information stealers. Notably, the information stealer malware can automatically search WhatsApp contacts when the user leaves and secretly capture screen recordings and chat history. Attackers gain Remote Code Execution (RCE) privileges by implanting a forced, automatically executing 'MU-Plugin,' which also allows them to clean up their tracks. They use a custom website administration program (fMain.frm) to remotely control the distributed botnet from a central server. As of July, over 6,000 IP addresses globally have been affected by this attack. Cybersecurity experts advise caution regarding unusual CAPTCHA screens that prompt instructions to be copied and pasted outside the browser.",
    tags_en: ["Check Point", "WordPress", "StopAndProtect", "Botnet", "RCE", "PowerShell", "Malware"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145308", lang: "EN" }
    ]
  }
];
