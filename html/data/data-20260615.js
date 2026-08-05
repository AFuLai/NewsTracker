// data-20260615.js — 2026-06-15
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-15"] = [
  {
    id: "20260615-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Dragos 2026 年度報告揭示油氣與石化產業OT資安趨勢：關注供應鏈與關鍵基礎設施風險",
    summary: "Dragos 發表《2026 年度 OT 資安報告》，重點分析油氣（O&G）及石化產業的營運技術（OT）資安現況與未來趨勢。報告指出，隨著工業物聯網（IIoT）和數位化轉型加速，這些關鍵基礎設施的攻擊面持續擴大。主要的威脅趨勢包括供應鏈漏洞的利用、針對工業控制系統（ICS）的惡意程式碼植入，以及利用遠端存取服務（如VPN）進行的攻擊。報告強調，攻擊者已將目標鎖定在能造成實體破壞的關鍵控制系統，而非僅限於資訊系統（IT）。實務影響層面，企業必須將資安防護從傳統的邊界防禦，轉向深度整合、縱深防禦（Defense-in-Depth）的架構。修補建議涵蓋了實施網路區隔（Network Segmentation）、強化身份驗證機制、以及持續監控OT網路流量異常。報告也提醒，產業應關注資安標準的遵循，以應對日益嚴峻的國家級駭客行動。",
    tags: ["Dragos", "OT資安", "工業控制系統", "O&G", "石化", "供應鏈風險"],
    title_en: "Dragos 2026 Annual Report Reveals OT Security Trends in Oil & Gas and Petrochemical Industries: Focus on Supply Chain and Critical Infrastructure Risks",
    summary_en: "Dragos released the \"2026 Annual OT Security Report,\" which analyzes the current state and future trends of Operational Technology (OT) security in the Oil & Gas (O&G) and petrochemical industries. The report points out that as Industrial IoT (IIoT) and digital transformation accelerate, the attack surface of these critical infrastructures continues to expand. Major threat trends include the exploitation of supply chain vulnerabilities, the implantation of malicious code targeting Industrial Control Systems (ICS), and attacks utilizing remote access services (such as VPNs). The report emphasizes that attackers are now targeting critical control systems capable of causing physical damage, rather than being limited to Information Technology (IT) systems. In terms of practical impact, enterprises must shift security protection from traditional perimeter defense to an architecture of deep integration and Defense-in-Depth. Remediation suggestions include implementing Network Segmentation, strengthening identity authentication mechanisms, and continuously monitoring for abnormal OT network traffic. The report also reminds the industry to pay attention to compliance with security standards to cope with increasingly severe nation-state hacking activities.",
    tags_en: ["Dragos", "OT Security", "Industrial Control Systems", "O&G", "Petrochemical", "Supply Chain Risk"],
    sources: [
      { name: "Dragos Blog", url: "https://hub.dragos.com/hubfs/2026_YIR_ExecutiveBriefing%20O_G.pdf?hsLang=en", lang: "EN" }
    ]
  },
  {
    id: "20260615-002",
    trackers: ["security"],
    category: "重大事件",
    title: "重大警訊：ELECTRUM 攻擊波襲擊波蘭能源基礎設施，鎖定分散式能源資源",
    summary: "根據報告指出，在 2025 年 12 月，一個代號為 ELECTRUM 的網路攻擊行動，成功襲擊了波蘭的能源基礎設施。此次攻擊的目標涵蓋了熱電聯產（CHP）設施以及再生能源管理系統，被指出是全球首例針對分散式能源資源（DERs）的重大協調網路攻擊。這類攻擊代表著對關鍵能源基礎設施的系統性威脅，顯示攻擊者已將目標鎖定在能源供應鏈的關鍵節點。實務上，這類攻擊的發生，凸顯了能源產業在數位轉型過程中，其營運技術（OT）和資訊技術（IT）系統邊界模糊化所面臨的極高風險。建議相關機構應強化 OT/ICS 設備的網路隔離、實施縱深防禦，並針對 DERs 的協調管理系統建立專門的威脅情資監控與應變機制。",
    tags: ["ELECTRUM", "波蘭能源", "DERs", "OT/ICS", "關鍵基礎設施", "網路攻擊"],
    title_en: "Major Warning: ELECTRUM Attack Wave Hits Polish Energy Infrastructure, Targeting Distributed Energy Resources",
    summary_en: "According to reports, in December 2025, a cyberattack campaign codenamed ELECTRUM successfully struck Poland's energy infrastructure. The attack targeted Combined Heat and Power (CHP) facilities and renewable energy management systems, marking what is identified as the world's first major coordinated cyberattack against Distributed Energy Resources (DERs). Such attacks represent a systemic threat to critical energy infrastructure, indicating that attackers have focused on key nodes within the energy supply chain. Practically, the occurrence of such attacks highlights the extremely high risks faced by the energy industry due to the blurring boundaries between its Operational Technology (OT) and Information Technology (IT) systems during digital transformation. It is recommended that relevant organizations strengthen network isolation for OT/ICS equipment, implement defense-in-depth, and establish specialized threat intelligence monitoring and response mechanisms for the coordinated management of DERs.",
    tags_en: ["ELECTRUM", "Poland Energy", "DERs", "OT/ICS", "Critical Infrastructure", "Cyberattack"],
    sources: [
      { name: "Dragos Blog", url: "https://hub.dragos.com/hubfs/Electric-Year-in-Review-Threats-and-Defensive-Priorities-Slide-Presentation.pdf?hsLang=en", lang: "EN" }
    ]
  },
  {
    id: "20260615-003",
    trackers: ["security"],
    category: "重大事件",
    title: "勒索軟體 NightSpire 攻擊手法曝光：利用 RDP、合法遠端工具及雲端服務竊取並加密資料",
    summary: "資安業者 Picus 分析了勒索軟體 NightSpire 的攻擊模式。該勒索軟體自 2025 年初出現，已在多達 33 個國家、超過 64 家組織受害，涵蓋醫療、政府、金融及製造等關鍵產業。NightSpire 的主要特點是結合多種合法工具，使惡意行為能偽裝成正常系統活動，以規避偵測。攻擊鏈通常從暴露的遠端桌面協定（RDP）服務開始，建立初始存取點。後續攻擊活動利用 Chrome Remote Desktop、AnyDesk 等合法遠端工具建立長期存取權。攻擊者會使用 Windows 桌面搜尋工具 Everything 尋找敏感資料，再透過 7-Zip 壓縮，並利用 MEGAsync 等遠端同步軟體將資料傳輸至 MEGA 雲端。最後，使用 Go 語言編寫的執行檔加密本地檔案，並威脅公開事先竊取的資料，增加受害者的支付壓力。建議組織應立即修補 RDP 服務的漏洞，並實施網路分段、強化身份驗證機制，以阻斷攻擊鏈中的合法工具利用。",
    tags: ["NightSpire", "勒索軟體", "RDP", "資安事件", "資料外洩", "攻擊鏈"],
    title_en: "Ransomware NightSpire Attack Techniques Exposed: Exploiting RDP, Legitimate Remote Tools, and Cloud Services to Steal and Encrypt Data",
    summary_en: "Security firm Picus analyzed the attack patterns of the ransomware NightSpire. Since appearing in early 2025, the ransomware has affected over 64 organizations in 33 countries, spanning critical sectors including healthcare, government, finance, and manufacturing. A key characteristic of NightSpire is its combination of various legitimate tools, allowing malicious activities to masquerade as normal system operations to evade detection. The attack chain typically begins with exposed Remote Desktop Protocol (RDP) services, establishing an initial point of access. Subsequent activities utilize legitimate remote tools such as Chrome Remote Desktop and AnyDesk to establish persistent access. Attackers use the Windows desktop search tool Everything to locate sensitive data, which is then compressed using 7-Zip. The data is subsequently exfiltrated to MEGA cloud storage using remote synchronization software like MEGAsync. Finally, a Go language compiled executable encrypts local files and threatens to publish the previously stolen data, increasing pressure on the victims to pay. Organizations are advised to immediately patch RDP service vulnerabilities and implement network segmentation and enhanced identity authentication mechanisms to disrupt the use of legitimate tools within the attack chain.",
    tags_en: ["NightSpire", "Ransomware", "RDP", "Cybersecurity Incident", "Data Leakage", "Attack Chain"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176627", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-004",
    trackers: ["security"],
    category: "重大事件",
    title: "Google提告中國網路犯罪集團：揭露AI驅動、大規模詐騙基礎設施",
    summary: "Google向聯邦地方法院提告中國網路犯罪集團Outsider Enterprise，指控其利用AI工具和釣魚工具包建立大規模詐騙基礎設施。該集團開發的Outsider工具套件，提供290種網站範本，用戶只需付費即可快速建立冒充電信業者、金融機構或政府機關的假網站。更令人擔憂的是，Outsider支援使用Gemini等AI平台生成客製化釣魚程式碼，並將其部署成可上線的詐騙網站，用於即時竊取受害者帳號、密碼及多因素驗證碼。Google指出，Outsider Enterprise是一個完整的詐騙產業鏈，成員透過Telegram協調，已建立數千個假網站和超過百萬惡意網域，並在短時間內向Android用戶發送了數百萬則詐騙簡訊，造成數十萬人受害。Google正與FBI及多家電信業者合作瓦解其基礎設施，並呼籲美國國會通過立法，建立長期防詐騙機制，以應對AI使詐騙內容更逼真、更難辨識的趨勢。",
    tags: ["Google", "Outsider Enterprise", "AI詐騙", "釣魚工具", "詐騙簡訊", "網路犯罪"],
    title_en: "Google Sues Chinese Cybercrime Group: Exposing AI-Driven, Large-Scale Scam Infrastructure",
    summary_en: "Google has filed a lawsuit in federal district court against the Chinese cybercrime group Outsider Enterprise, accusing it of using AI tools and phishing toolkits to build a large-scale scam infrastructure. The Outsider toolkit developed by the group provides 290 website templates, allowing users to quickly establish fake websites impersonating charging service providers, financial institutions, or government agencies simply by paying a fee. More concerning is that Outsider supports using AI platforms like Gemini to generate customized phishing code, which is then deployed as live scam websites used to steal victims' accounts, passwords, and multi-factor authentication codes in real-time. Google points out that Outsider Enterprise is a complete scam industry chain; its members, who coordinate via Telegram, have established thousands of fake websites and over a million malicious domains, and have sent millions of scam SMS messages to Android users in a short period, harming hundreds of thousands of people. Google is collaborating with the FBI and multiple telecommunications companies to dismantle its infrastructure, and is calling on the U.S. Congress to pass legislation to establish long-term anti-scam mechanisms to address the trend of AI making scam content more realistic and harder to detect.",
    tags_en: ["Google", "Outsider Enterprise", "AI Scam", "Phishing Toolkit", "Scam SMS", "Cybercrime"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176606", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-005",
    trackers: ["security"],
    category: "重大事件",
    title: "Sygnia揭露Velvet Ant十年間諜行動：駭客透過PAM模組滲透隔離關鍵基礎設施網路",
    summary: "資安公司Sygnia公布Operation Highland攻擊行動，揭露中國駭客組織Velvet Ant的網路間諜活動。該行動最為複雜精密的點在於，Velvet Ant至少從2016年開始，在完全與網際網路隔離的關鍵基礎設施網路（ICS）潛伏了近十年。攻擊者採取三階段滲透策略：首先，在面向網際網路的伺服器部署GS-Netcat，偽裝成系統程序建立初始存取；接著，利用Nginx與FastCGI透過HTTP請求穿越IT網路，抵達隔離網段；最終，攻擊者篡改Linux PAM認證模組與OpenSSH程式，植入後門密碼並竊取憑證，建立三重持久化機制。Sygnia指出，攻擊者控制身分驗證的核心元件，使得傳統的密碼更換等應變措施幾乎失效，甚至可能導致系統服務中斷。此行動顯示攻擊者具備龐大資源和高度組織性，針對不同目標環境量身打造工具。",
    tags: ["Sygnia", "Velvet Ant", "Operation Highland", "PAM模組", "關鍵基礎設施", "網路間諜", "ICS"],
    title_en: "Sygnia Uncovers Decade-Long Espionage Operation by Velvet Ant: Hackers Infiltrate Isolated Critical Infrastructure Networks via PAM Module",
    summary_en: "Cybersecurity firm Sygnia announced the Operation Highland attack, revealing network espionage activities by the Chinese hacking group Velvet Ant. The most complex and sophisticated aspect of this operation is that Velvet Ant has been lurking within isolated critical infrastructure networks (ICS) for nearly a decade, starting at least in 2016. The attackers employed a three-stage infiltration strategy: first, they deployed GS-Netcat on internet-facing servers, masquerading as system processes to establish initial access; next, they utilized Nginx and FastCGI through HTTP requests to traverse the IT network and reach the isolated segment; finally, the attackers modified the Linux PAM authentication module and OpenSSH program, implanting backdoor credentials and stealing credentials to establish a triple persistence mechanism. Sygnia pointed out that by controlling the core identity authentication component, traditional incident response measures like password changes are rendered nearly ineffective and could even cause system service disruptions. This operation demonstrates that the attackers possess vast resources and high organization, tailoring tools for different target environments.",
    tags_en: ["Sygnia", "Velvet Ant", "Operation Highland", "PAM module", "Critical Infrastructure", "Network Espionage", "ICS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176603", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-006",
    trackers: ["security"],
    category: "重大事件",
    title: "澳洲製糖業遭遇資安攻擊：Mackay Sugar兩座糖廠營運中斷，凸顯農工OT系統脆弱性",
    summary: "澳洲第二大製糖公司 Mackay Sugar 近期遭遇嚴重網路安全事故，導致其位於昆士蘭麥凱地區的兩座糖廠（Farleigh與Racecourse）的製糖與甘蔗運輸作業全面停擺。此次攻擊事件發生在磨坊榨糖作業啟動之際，造成營運中斷，甚至迫使公司發出「停止收割」通知。雖然公司已啟動緊急應變機制，並發布公告說明正在處理網路安全事件，但官方尚未揭露具體技術細節，也未確認是否涉及勒索軟體或其他惡意攻擊。此事件不僅影響了該公司的核心營運，更突顯了農工業供應鏈，特別是OT（操作技術）系統在面對網路威脅時的極高脆弱性。由於該公司產品外銷至亞太多國，此事件的後續影響將持續關注。",
    tags: ["Mackay Sugar", "OT系統", "農工供應鏈", "資安事故", "營運中斷", "網路威脅"],
    title_en: "Australian Sugar Industry Hit by Cyberattack: Mackay Sugar's Two Factories Halt Operations, Highlighting Vulnerability of Agri-Industrial OT Systems",
    summary_en: "Mackay Sugar, Australia's second-largest sugar company, recently suffered a severe cybersecurity incident, leading to a complete shutdown of sugar processing and sugarcane transportation operations at its two facilities (Farleigh and Racecourse) in the Mackay region of Queensland. The attack occurred when the mill was starting its crushing operations, causing operational disruption and even forcing the company to issue a 'stop harvesting' notice. Although the company has activated its emergency response mechanisms and issued a statement confirming it is handling the cybersecurity incident, specific technical details have not been disclosed, nor has it been confirmed if ransomware or other malicious attacks were involved. This incident not only impacted the company's core operations but also highlighted the extreme vulnerability of the agri-industrial supply chain, particularly its OT (Operational Technology) systems, when facing cyber threats. Given that the company exports its products to numerous Asian countries, the subsequent impact of this event will be closely monitored.",
    tags_en: ["Mackay Sugar", "OT Systems", "Agri-Industrial Supply Chain", "Cybersecurity Incident", "Operational Disruption", "Cyber Threat"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176600", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-007",
    trackers: ["security"],
    category: "重大事件",
    title: "九州電力送配電外接儲存裝置失竊：1,090萬用電帳戶資料面臨外洩風險",
    summary: "日本九州電力送配電（Kyushu Electric Power Distribution）公告，用於備份系統資料的外接儲存裝置失竊。該裝置內儲存了最多 1,090 萬筆用電帳戶資料，包含用戶姓名、供電地址、用電量及電話號碼等個人資訊，但原文強調未包含銀行帳戶或信用卡資訊。根據報導，該儲存裝置的資料並未加密，且未設置密碼保護。雖然公司強調機房進出受到嚴格管控，且目前尚未有證據顯示資料已外洩，但由於設備失竊，資料外洩的風險極高。公司已向警方報案，並正在調查裝置是否被未經授權人員帶離。此事件凸顯了企業在實體資產管理和資料加密保護上的重大漏洞，建議相關企業應強化備份設備的物理安全措施，並確保所有敏感資料在備份時必須進行加密保護。",
    tags: ["九州電力送配電", "資料外洩", "外接儲存裝置", "個人資料", "物理安全"],
    title_en: "Theft of Offsite Storage Device at Kyushu Electric Power Distribution: 10.9 Million Electricity Account Records Face Leak Risk",
    summary_en: "Kyushu Electric Power Distribution (Kyushu Electric Power Distribution) announced the theft of an offsite storage device used for backing up system data. This device stored up to 10.9 million electricity account records, containing personal information such as user names, service addresses, electricity consumption, and phone numbers, but the original text emphasized that it did not include bank account or credit card information. According to reports, the data on the storage device was unencrypted and lacked password protection. Although the company stressed that access to the data center is strictly controlled and there is currently no evidence of data leakage, the theft of the equipment poses an extremely high risk of data leakage. The company has reported the incident to the police and is investigating whether the device was removed by unauthorized personnel. This incident highlights significant vulnerabilities in corporate physical asset management and data encryption protection, suggesting that relevant companies should strengthen physical security measures for backup equipment and ensure that all sensitive data is encrypted during backup.",
    tags_en: ["Kyushu Electric Power Distribution", "Data Leakage", "Offsite Storage Device", "Personal Data", "Physical Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176591", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-008",
    trackers: ["security"],
    category: "重大事件",
    title: "法國政府通訊平臺 Tchap 遭帳號冒用，公開對話內容可能外洩",
    summary: "法國跨部會數位事務局（DINUM）公告，用於公部門人員的加密通訊平臺 Tchap 於 6 月 7 日發生安全事件。攻擊者透過社交工程手法冒用一名使用者帳號，得以查看該帳號可存取的公開對話內容。DINUM 確認私人對話具備加密保護，即使帳號遭冒用，私人對話歷史紀錄仍無法被存取。然而，由於公開聊天室的訊息設計上可供所有使用者搜尋與加入且未加密，因此這次的潛在資料外洩範圍主要限於公開聊天室的內容。DINUM 估計，在超過 82.5 萬名使用者中，約有 73,467 人可能受影響，潛在暴露資料包括姓名、電子郵件地址、所屬機關與帳號頭像。DINUM 已與法國國家資訊系統安全局（ANSSI）協調分析，並已封鎖涉案帳號，並已通報法國國家資訊與自由委員會（CNIL）。",
    tags: ["Tchap", "法國政府", "帳號冒用", "社交工程", "公開對話", "DINUM", "ANSSI"],
    title_en: "French Government Communication Platform Tchap Suffers Account Impersonation, Public Chat Content Potentially Exposed",
    summary_en: "The French Directorate for Digital Affairs (DINUM) announced a security incident involving Tchap, an encrypted communication platform used by public sector personnel, which occurred on June 7. Attackers used social engineering techniques to impersonate a user account, gaining access to the public chat content viewable by that account. DINUM confirmed that private conversations are protected by encryption, meaning that even if an account is compromised, private chat history remains inaccessible. However, because messages in public chat rooms are designed to be searchable and joinable by all users and are unencrypted, the potential scope of data leakage is primarily limited to public chat room content. DINUM estimates that among over 825,000 users, approximately 73,467 individuals may have been affected. Potential exposed data includes names, email addresses, affiliated agencies, and account avatars. DINUM has coordinated with the French National Agency for the Security of Information Systems (ANSSI) for analysis, has blocked the compromised account, and has notified the French National Commission for Information Liberty (CNIL).",
    tags_en: ["Tchap", "French Government", "Account Impersonation", "Social Engineering", "Public Chat", "DINUM", "ANSSI"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176589", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-009",
    trackers: ["security"],
    category: "重大事件",
    title: "丹麥製藥巨擘諾和諾德IT系統遭駭，臨床試驗病患資料外洩引發釣魚風險",
    summary: "丹麥製藥公司諾和諾德（Novo Nordisk）宣布，其內部IT系統曾遭受未授權存取，導致部分參與臨床試驗的病患資料外洩。受影響的資料包括合作夥伴的姓名、註冊編號、電子郵件信箱、電話號碼及公司地址等。諾和諾德強調，洩露的資訊並未直接包含病患的姓名或其他可辨識身分屬性，因此不認為會造成受測者身分曝光，且核心業務運作未受影響。為應對此次事件，公司已暫時下線被駭系統並通報主管機關，同時提醒合作夥伴警惕可能發生的精準釣魚攻擊。初步判斷攻擊方式可能涉及勒索軟體，但尚未有駭客組織公開聲明。公司目前正持續進行調查與系統恢復工作。",
    tags: ["諾和諾德", "Novo Nordisk", "資料外洩", "勒索軟體", "臨床試驗", "醫療產業"],
    title_en: "Danish Pharma Giant Novo Nordisk IT System Hacked; Clinical Trial Patient Data Leak Triggers Phishing Risk",
    summary_en: "Danish pharmaceutical company Novo Nordisk announced that its internal IT system was subjected to unauthorized access, resulting in the leakage of some patient data from clinical trials. The affected data includes names, registration numbers, email addresses, phone numbers, and company addresses of partners. Novo Nordisk emphasized that the leaked information does not directly contain patients' names or other identifiable attributes, and therefore does not believe it will cause subject identity exposure, nor has it affected core business operations. To address this incident, the company has temporarily taken the compromised system offline and notified regulatory authorities, while also warning partners to be vigilant against potential targeted phishing attacks. Preliminary assessments suggest the attack may involve ransomware, but no hacker group has made a public statement. The company is currently continuing its investigation and system recovery efforts.",
    tags_en: ["Novo Nordisk", "Data Leakage", "Ransomware", "Clinical Trial", "Healthcare Industry"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176585", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-010",
    trackers: ["os"],
    category: "Linux",
    title: "AMD 移除消費級 CPU 的記憶體加密功能 TSME，用戶抱怨安全保護遭突然取消",
    summary: "AMD 曾將透明安全記憶體加密（TSME）功能，從高階 CPU 擴展至消費級 Ryzen 晶片，用於保護記憶體中的敏感資料，防止物理攻擊（如冷啟動攻擊）。然而，AMD 近期突然且未經預警地從這些低階晶片系列中移除此項保護。該變更使得在 Windows 系統上難以察覺，而使用 Linux 系統則需要較高的技術知識才能發現。一位 Linux 用戶在檢查其 Ryzen 7 9700X 的硬體安全配置時，發現 Host Security ID (HSI) 顯示 TSME 已不再支援，這與用戶在 BIOS 中啟用該功能的設定相悖。AMD 方面僅聲明 TSME 僅是「AMD PRO Technologies」的一部分，並拒絕對此變動提供詳細解釋，引發了用戶對安全保護突然取消的強烈不滿。",
    tags: ["AMD", "TSME", "Ryzen 7 9700X", "記憶體加密", "冷啟動攻擊", "Linux"],
    title_en: "AMD Removes Memory Encryption Feature TSME from Consumer CPUs; Users Complain of Sudden Loss of Security Protection",
    summary_en: "AMD previously extended the Transparent Secure Memory Encryption (TSME) feature from high-end CPUs to consumer Ryzen chips, used to protect sensitive data in memory and prevent physical attacks (such as cold boot attacks). However, AMD recently and without warning removed this protection from these lower-tier chip series. This change is difficult to detect on Windows systems, while users on Linux systems require a higher level of technical knowledge to notice. One Linux user, while checking the hardware security configuration of their Ryzen 7 9700X, discovered that the Host Security ID (HSI) indicated that TSME was no longer supported, contradicting the user's BIOS setting to enable the feature. AMD merely stated that TSME is only part of \"AMD PRO Technologies\" and declined to provide a detailed explanation for the change, leading to strong user dissatisfaction over the sudden removal of the security protection.",
    tags_en: ["AMD", "TSME", "Ryzen 7 9700X", "Memory Encryption", "Cold Boot Attack", "Linux"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/06/users-cry-foul-after-amd-stripped-memory-crypto-from-its-consumer-cpus", lang: "EN" }
    ]
  },
  {
    id: "20260615-011",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 7.1 版本發布：深入探討新功能與社群發展趨勢",
    summary: "Linux 核心 7.1 版本已於預期時間（6 月 14 日）發布。本次核心版本除了帶來大量新的功能特性外，也反映了開發社群的持續擴展與變化。文章主要概述了 7.1 版本所包含的變動內容，並對 Linux 開發社群的整體趨勢進行了深入探討。對於使用者和開發者而言，了解這些核心變動對於確保系統的穩定性、利用新功能，以及預測未來的開發方向至關重要。建議系統管理員應關注官方發布的變更日誌，並根據自身應用場景評估升級到 7.1 核心的必要性，以充分利用新功能並修補潛在的系統漏洞。",
    tags: ["Linux 核心", "7.1", "Linus Torvalds", "核心更新", "開發趨勢"],
    title_en: "Linux Kernel 7.1 Released: Deep Dive into New Features and Community Development Trends",
    summary_en: "Linux Kernel version 7.1 was released on schedule (June 14). In addition to bringing numerous new features, this kernel version also reflects the continuous expansion and evolution of the development community. The article primarily outlines the changes included in version 7.1 and provides an in-depth exploration of the overall trends within the Linux development community. For users and developers, understanding these core changes is crucial for ensuring system stability, utilizing new functionalities, and predicting future development directions. System administrators are advised to monitor official release changelogs and assess the necessity of upgrading to the 7.1 kernel based on their specific use cases, thereby fully leveraging new features and patching potential system vulnerabilities.",
    tags_en: ["Linux Kernel", "7.1", "Linus Torvalds", "Kernel Update", "Development Trends"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1077425", lang: "EN" }
    ]
  },
  {
    id: "20260615-012",
    trackers: ["os"],
    category: "Linux",
    title: "多發行版安全更新：AlmaLinux、Debian、Fedora、SUSE等發布多個核心元件與應用程式的修補程式",
    summary: "多數主流 Linux 發行版（包括 AlmaLinux、Debian、Fedora、Mageia、Oracle、Red Hat、SUSE）近期同步發布了大量的安全更新。這些更新涵蓋了從核心元件到上層應用程式的廣泛範圍，涉及的技術細節包括但不限於：`openssl`、`chromium`、`apache2`、`libssh`、`postfix`、`samba`、`postgresql`、`kernel` 等。發行版針對不同元件進行了修補，以應對潛在的漏洞或提升系統穩定性。實務上，系統管理員應立即檢查並更新所有受影響的發行版和元件，特別是那些涉及網路服務和核心功能的組件，以確保系統的安全性和可靠性。建議遵循各發行版官方的更新流程，並針對關鍵服務進行測試。",
    tags: ["Linux", "AlmaLinux", "Debian", "Fedora", "SUSE", "安全更新", "openssl", "核心元件"],
    title_en: "Multi-Distribution Security Updates: AlmaLinux, Debian, Fedora, SUSE and Others Release Patches for Multiple Core Components and Applications",
    summary_en: "Most major Linux distributions (including AlmaLinux, Debian, Fedora, Mageia, Oracle, Red Hat, SUSE) have recently released a large volume of security updates. These updates cover a wide range of components, from core kernel elements to higher-level applications, including but not limited to: `openssl`, `chromium`, `apache2`, `libssh`, `postfix`, `samba`, `postgresql`, and `kernel`. The distributions have applied patches to various components to address potential vulnerabilities or enhance system stability. In practice, system administrators should immediately check and update all affected distributions and components, especially those involved in network services and core functionalities, to ensure system security and reliability. It is recommended to follow the official update procedures of each distribution and test critical services accordingly.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Fedora", "SUSE", "Security Update", "openssl", "core components"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1077945", lang: "EN" }
    ]
  },
  {
    id: "20260615-013",
    trackers: ["os"],
    category: "Linux",
    title: "Ubuntu Touch 24.04-2.0 Beta 發布：改善螢幕瀏海與圓角支援，升級 Chromium 瀏覽器",
    summary: "Ubuntu Touch 社群發布了 24.04-2.0 Beta 版本，為即將於七月中旬發布的穩定版做準備。此版本基於 Ubuntu 24.04 LTS 套件基礎，主要更新包括將 Morph 網頁瀏覽器的 Chromium 版本從 87 升級至 134。對於終端用戶而言，最大的改進是系統現在能夠更好地處理現代智慧型手機的螢幕「瀏海」（Notches）和圓角設計，透過設備配置可正確避開這些區域。此外，版本還增加了 Lomiri shell 的螢幕截圖編輯器、提升了行動數據連接的可靠性，並讓支援 FSCRYPT v2 的設備上的用戶資料加密功能不再是實驗性質。本次 Beta 版本支援的設備包括 Fairphone 4/5、Nothing Phone (1)、Sony Xperia X 等多款機種。",
    tags: ["Ubuntu Touch", "24.04-2.0", "Chromium", "Linux", "Mobile OS", "Notch Support"],
    title_en: "Ubuntu Touch 24.04-2.0 Beta Released: Improved Notch and Corner Radius Support, Chromium Browser Upgrade",
    summary_en: "The Ubuntu Touch community has released the 24.04-2.0 Beta version, preparing for the stable release scheduled for mid-July. Based on the Ubuntu 24.04 LTS package, the major updates include upgrading the Chromium version of the Morph web browser from 87 to 134. For end-users, the biggest improvement is that the system can now better handle the 'Notches' and rounded corner designs of modern smartphones, accurately avoiding these areas via device configuration. Additionally, the version adds a screenshot editor for the Lomiri shell, improves the reliability of mobile data connectivity, and makes user data encryption no longer experimental on devices supporting FSCRYPT v2. Devices supported by this Beta version include multiple models such as the Fairphone 4/5, Nothing Phone (1), and Sony Xperia X.",
    tags_en: ["Ubuntu Touch", "24.04-2.0", "Chromium", "Linux", "Mobile OS", "Notch Support"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Ubuntu-Touch-24.04-2.0", lang: "EN" }
    ]
  },
  {
    id: "20260615-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "FreeBSD 啟動 AI 輔助漏洞發現專案，目標提升系統安全性",
    summary: "FreeBSD 專案宣布啟動「AI 輔助漏洞發現專案」，獲得 Linux Foundation 支援的 Alpha-Omega 專案提供資金支持。此專案預計為期六個月，目標是透過人工智慧技術，協助降低 FreeBSD 程式碼庫中可被利用的漏洞數量。該專案的資金來源為 25 萬美元，將用於 FreeBSD 安全團隊的成員。除了 Alpha-Omega 的參與，Netflix 也將協助測試和驗證此安全研究的變動。安全團隊將利用公開可用的大型語言模型，部分成員甚至能透過 Project Glasswing 存取 Clade Mythos 等先進工具。此舉代表 FreeBSD 在資安研究領域積極導入 AI 技術，預期能大幅提升其核心系統的安全性。相關資訊可於 FreeBSDFoundation.org 了解。",
    tags: ["FreeBSD", "AI 輔助", "漏洞發現", "Linux Foundation", "Alpha-Omega", "系統安全"],
    title_en: "FreeBSD Launches AI-Assisted Vulnerability Discovery Project to Enhance System Security",
    summary_en: "The FreeBSD project has announced the launch of an \"AI-Assisted Vulnerability Discovery Project,\" receiving funding support from the Linux Foundation's Alpha-Omega project. This project is expected to run for six months and aims to utilize artificial intelligence technology to help reduce the number of exploitable vulnerabilities within the FreeBSD codebase. The project is funded with $250,000, which will support members of the FreeBSD security team. In addition to Alpha-Omega's participation, Netflix will assist in testing and validating the changes resulting from this security research. The security team will utilize publicly available large language models, and some members will even have access to advanced tools like Clade Mythos via Project Glasswing. This initiative represents FreeBSD's proactive adoption of AI technology in the field of cybersecurity research, which is expected to significantly enhance the security of its core system. More information can be found at FreeBSDFoundation.org.",
    tags_en: ["FreeBSD", "AI-Assisted", "Vulnerability Discovery", "Linux Foundation", "Alpha-Omega", "System Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FreeBSD-AI-Bug-Discovery", lang: "EN" }
    ]
  },
  {
    id: "20260615-015",
    trackers: ["os"],
    category: "Linux",
    title: "Arch Linux AUR遭垃圾訊息與不雅內容污染：AI偵測工具揭露多達70個套件受影響",
    summary: "Arch Linux 使用者儲存庫（AUR）近期遭遇新的污染問題。在先前處理了大量惡意軟體套件之後，現在發現許多套件被植入俄語垃圾訊息和不雅內容。這些惡意訊息是以提交（commit）的方式，在套件安裝後自動寫入使用者配置檔，例如 bashrc、zshrc 或 Fish 的設定檔中。一名使用 AI/LLM 偵測機器人的資安研究人員發現了這些異常行為。目前報告指出，超過 70 個不同類型的 AUR 套件受此影響，涵蓋了 Python、Ruby、Llama.cpp 等多種語言的套件。這類污染行為的發生，凸顯了 AUR 內容審核機制需要更完善的自動化監控，特別是利用 AI/LLM 輔助偵測，以應對持續不斷的內容濫用與惡意植入。建議使用者應保持警惕，並定期檢查其系統配置檔，確保沒有未經授權的自啟動腳本或訊息被植入。",
    tags: ["Arch Linux", "AUR", "Linux", "垃圾訊息", "AI/LLM", "配置檔污染"],
    title_en: "Arch Linux AUR Polluted with Spam and Obscene Content: AI Detection Tool Reveals Up to 70 Affected Packages",
    summary_en: "The Arch Linux User Repository (AUR) has recently encountered a new contamination issue. After previously dealing with a large number of malicious packages, it has now been found that many packages have been injected with Russian spam and obscene content. This malicious content is introduced via commits, automatically writing to user configuration files, such as bashrc, zshrc, or Fish settings files, after package installation. A security researcher utilizing an AI/LLM detection robot discovered this abnormal behavior. Current reports indicate that over 70 different types of AUR packages are affected, covering packages written in various languages such as Python, Ruby, and Llama.cpp. The occurrence of this contamination highlights the need for a more robust automated monitoring mechanism for AUR content review, especially utilizing AI/LLM assistance, to counter continuous content abuse and malicious injection. Users are advised to remain vigilant and regularly check their system configuration files to ensure no unauthorized startup scripts or messages have been injected.",
    tags_en: ["Arch Linux", "AUR", "Linux", "Spam Message", "AI/LLM", "Config File Pollution"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Arch-Linux-AUR-Russian-Spam", lang: "EN" }
    ]
  },
  {
    id: "20260615-016",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心優化：大幅提升 /proc/filesystems 讀取效率，性能提升高達 444%",
    summary: "本文介紹了 Linux 7.2 核心針對 `/proc/filesystems` 檔案的重大性能優化。由於該檔案經常被讀取，特別是當 SELinux 函式庫（libselinux）以及許多依賴其功能的程式（如 sed）需要獲取系統支援的檔案系統列表時，性能瓶頸較為明顯。本次優化主要透過以下技術改進：將檔案系統列表結構化為 RCU（Read-Copy-Update）機制，並預先生成（pre-generating）`/proc/filesystems` 的字串內容，取代了每次讀取時進行的指標追蹤和逐項輸出（printfing）。這些改動使得讀取效率大幅提升，性能提升高達 444%。這項優化由 Christian Brauner 提交，並獲得 Linus Torvalds 合併，旨在提升核心在處理高頻率系統資訊查詢時的穩定性和響應速度。實務上，這對依賴此系統資訊的應用程式和安全模組（如 SELinux）具有顯著的性能提升。",
    tags: ["Linux 7.2", "/proc/filesystems", "SELinux", "RCU", "核心優化", "性能提升"],
    title_en: "Linux 7.2 Kernel Optimization: Significantly Improves /proc/filesystems Read Efficiency, Boosting Performance by Up to 444%",
    summary_en: "This article introduces a major performance optimization in the Linux 7.2 kernel targeting the /proc/filesystems file. Since this file is frequently read—especially when the SELinux library (libselinux) and many programs that depend on it (such as sed) need to retrieve the list of supported file systems—a performance bottleneck was noticeable. This optimization primarily utilizes the following technical improvements: structuring the file system list using the RCU (Read-Copy-Update) mechanism, and pre-generating the string content of /proc/filesystems, replacing the need for index tracking and iterative output (printfing) upon every read. These changes significantly boost read efficiency, achieving a performance improvement of up to 444%. This optimization was submitted by Christian Brauner and merged by Linus Torvalds, aiming to enhance the kernel's stability and response speed when handling high-frequency system information queries. Practically, this provides a significant performance boost for applications and security modules (such as SELinux) that rely on this system information.",
    tags_en: ["Linux 7.2", "/proc/filesystems", "SELinux", "RCU", "Kernel Optimization", "Performance Improvement"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Reading-Proc-FS", lang: "EN" }
    ]
  },
  {
    id: "20260615-017",
    trackers: ["os"],
    category: "Linux",
    title: "Framework 筆電進展：Coreboot 支援 Meteor Lake 與 Panther Lake 晶片",
    summary: "Framework Computer 正在積極推動其筆電型號的 Coreboot 支援。目前，Framework Laptop 13（搭載 Intel Meteor Lake，代號 Marigold）已獲得上游 Coreboot 支援。雖然大部分功能已運作，但仍需完善 eSPI 內建鍵盤、eSPI PS/2 模擬滑鼠/觸控板、cros_ec OS 驅動程式，以及電池/AC 報告等功能，且 Thunderbolt 4、USB4 和 s0ix 尚未進行測試。此外，Framework Computer 的下游 Coreboot Git 儲存庫也已加入 Sakura，為搭載 Intel Core Ultra Series 3（代號 Panther Lake）的筆電提供 Coreboot 支援。目前支援的 Panther Lake 功能與 Meteor Lake 相似。這顯示 Framework 在將 Coreboot 整合到其現代 Intel 晶片設備上持續投入，未來若能成熟，有望成為官方支援功能。",
    tags: ["Framework Computer", "Coreboot", "Intel", "Meteor Lake", "Panther Lake", "Linux 核心"],
    title_en: "Framework Laptop Progress: Coreboot Supports Meteor Lake and Panther Lake Chips",
    summary_en: "Framework Computer is actively advancing Coreboot support for its laptop models. Currently, the Framework Laptop 13 (equipped with Intel Meteor Lake, codenamed Marigold) has received upstream Coreboot support. Although most functionalities are operational, improvements are still needed for the eSPI built-in keyboard, eSPI PS/2 simulated mouse/touchpad, cros_ec OS driver, and functions such as battery/AC reporting. Furthermore, Thunderbolt 4, USB4, and s0ix have not yet been tested. Additionally, Framework Computer's downstream Coreboot Git repository has also been added to Sakura, providing Coreboot support for laptops equipped with Intel Core Ultra Series 3 (codenamed Panther Lake). The currently supported Panther Lake functionalities are similar to those of Meteor Lake. This demonstrates Framework's continued investment in integrating Coreboot into its modern Intel chip devices, which, if matured, could become official supported features.",
    tags_en: ["Framework Computer", "Coreboot", "Intel", "Meteor Lake", "Panther Lake", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Framework-Intel-Coreboot-2026", lang: "EN" }
    ]
  },
  {
    id: "20260615-018",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心整合 Cache Aware Scheduling，提升現代 Intel/AMD CPU 效能",
    summary: "Linux 核心在 7.2 版本中整合了 Cache Aware Scheduling 功能。此功能旨在優化任務排程，確保共享資料的任務能被共置於同一級別快取（LLC）域，從而提高快取局部性（cache locality）並減少快取遺失或跳動。這項功能已開發超過一年，特別有益於具備多個 LLC 的現代 Intel 和 AMD 處理器。除了 Cache Aware Scheduling，本次 7.2 的排程更新也提升了 SMT 意識的 SD_ASYM_CPUCAPACITY 排程，優化了 cfs_rq 和 sched_entity 的分配，進一步改善資料局部性。實務上，此更新預計能為使用 AMD EPYC、Xeon 6、AMD Zen 5 等 CPU 的工作負載（如 PostgreSQL、Valkey 等）帶來顯著的效能提升。開發者可透過 CONFIG_SCHED_CACHE Kconfig 選項啟用此功能。",
    tags: ["Linux 7.2", "Cache Aware Scheduling", "LLC", "CPU 效能", "Intel", "AMD"],
    title_en: "Linux 7.2 Integrates Cache Aware Scheduling to Boost Performance on Modern Intel/AMD CPUs",
    summary_en: "The Linux kernel, in version 7.2, has integrated the Cache Aware Scheduling feature. This feature aims to optimize task scheduling by ensuring that tasks sharing data are co-located within the same Last Level Cache (LLC) domain, thereby improving cache locality and reducing cache misses or thrashing. This feature has been under development for over a year and is particularly beneficial for modern Intel and AMD processors that feature multiple LLCs. In addition to Cache Aware Scheduling, the 7.2 scheduling update also enhances SMT-aware SD_ASYM_CPUCAPACITY scheduling, optimizing the allocation of cfs_rq and sched_entity, which further improves data locality. Practically, this update is expected to bring significant performance improvements for workloads (such as PostgreSQL, Valkey, etc.) running on CPUs like AMD EPYC, Xeon 6, and AMD Zen 5. Developers can enable this feature via the CONFIG_SCHED_CACHE Kconfig option.",
    tags_en: ["Linux 7.2", "Cache Aware Scheduling", "LLC", "CPU Performance", "Intel", "AMD"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Scheduler", lang: "EN" }
    ]
  },
  {
    id: "20260615-019",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心更新：整合 Rust Zerocopy 函式庫，提升記憶體操作安全與效能",
    summary: "Linux 7.2 核心版本針對 Rust 程式碼進行了大規模更新，新增了超過四萬行 Rust 程式碼。本次更新的核心亮點是整合了 Zerocopy 函式庫，旨在透過提供安全、零成本的記憶體操作，大幅減少程式碼中「不安全」（unsafe）的 Rust 區塊。Zerocopy 透過可推導的 Trait 和宏，讓開發者能夠安全地在位元組序列和各種資料型別之間進行轉換，從而提升核心的安全性。此外，本次更新還加入了對 AutoFDO（自動回饋定向優化）的支援，使 Rust 核心程式碼能從編譯器獲得更好的性能優化，例如 Rust Binder 程式碼的性能提升了約 13%。同時，Linux 7.2 也增加了對軟體標籤型 KASAN（核心位址檢查器）的支援，並為即將發布的 Rust 1.98 版本做準備，整體提升了 Linux 核心的穩定性與效能。",
    tags: ["Linux 7.2", "Rust", "Zerocopy", "KASAN", "AutoFDO", "核心安全"],
    title_en: "Linux 7.2 Kernel Update: Integrating Rust Zerocopy Library to Enhance Memory Operation Safety and Efficiency",
    summary_en: "The Linux 7.2 kernel version includes a massive update for Rust code, adding over forty thousand lines of Rust code. The core highlight of this update is the integration of the Zerocopy library, which aims to significantly reduce the use of 'unsafe' Rust blocks by providing safe, zero-cost memory operations. Zerocopy utilizes derivable Traits and macros, allowing developers to safely convert between byte sequences and various data types, thereby enhancing kernel security. Furthermore, this update introduces support for AutoFDO (Automatic Feedback Directed Optimization), enabling Rust kernel code to receive better performance optimizations from the compiler. For instance, the performance of Rust Binder code has improved by approximately 13%. Concurrently, Linux 7.2 adds support for software-tagged KASAN (Kernel Address Sanitizer) and prepares for the upcoming Rust 1.98 release, collectively boosting the stability and efficiency of the Linux kernel.",
    tags_en: ["Linux 7.2", "Rust", "Zerocopy", "KASAN", "AutoFDO", "Kernel Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Rust", lang: "EN" }
    ]
  },
  {
    id: "20260615-020",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心更新：提升檔案系統大小寫折疊（Casefolding）報告能力，優化與 Windows NFS 互通性",
    summary: "Linux 7.2 核心在虛擬檔案系統（VFS）方面進行了重大更新，新增了透過 `file_kattr` 旗標報告本地檔案系統大小寫折疊（case-folding）行為的能力。此功能旨在讓檔案伺服器（如 NFSD、KSMBD 等）能夠準確地向客戶端報告檔案系統是否為大小寫不敏感（case-insensitive）或大小寫不保留（case-nonpreserving），而非僅憑猜測。此更新的主要動機是為了改善與 Microsoft Windows NFS 客戶端的互操作性，確保 Win32 應用程式能正確運作。支援此功能的檔案系統包括 fat、exfat、ntfs3、hfs、xfs 等。具體而言，NFSD 可透過 NFSv3 PATHCONF 和 NFSv4 的 FATTR4 屬性報告大小寫行為，而 KSMBD 則透過 FS_ATTRIBUTE_INFORMATION 報告。此舉能讓客戶端避免發出多餘的 LOOKUP/READDIR 請求，提升效能與穩定性。",
    tags: ["Linux 7.2", "VFS", "Casefolding", "NFS", "Windows", "file_kattr"],
    title_en: "Linux 7.2 Kernel Update: Enhancing Filesystem Casefolding Reporting for Improved Windows NFS Interoperability",
    summary_en: "The Linux 7.2 kernel has undergone a major update to the Virtual Filesystem (VFS), adding the capability to report local filesystem case-folding behavior via the `file_kattr` flag. This feature aims to enable file servers (such as NFSD, KSMBD, etc.) to accurately report whether a filesystem is case-insensitive or case-nonpreserving, rather than merely guessing. The primary motivation for this update is to improve interoperability with Microsoft Windows NFS clients, ensuring that Win32 applications function correctly. Filesystems that support this feature include fat, exfat, ntfs3, hfs, xfs, and others. Specifically, NFSD can report case behavior using NFSv3 PATHCONF and NFSv4 FATTR4 attributes, while KSMBD reports via FS_ATTRIBUTE_INFORMATION. This enhancement allows clients to avoid issuing unnecessary LOOKUP/READDIR requests, thereby improving performance and stability.",
    tags_en: ["Linux 7.2", "VFS", "Casefolding", "NFS", "Windows", "file_kattr"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Casefolding", lang: "EN" }
    ]
  },
  {
    id: "20260615-021",
    trackers: ["os"],
    category: "Linux",
    title: "GNU Linux-libre 7.1 發布，強化驅動程式清理與自由軟體原則，並關注 i486 支援終止",
    summary: "GNU Linux-libre 7.1-gnu 版本已發布，這是針對追求軟體自由的用戶群體，基於最新的 Linux 7.1 核心進行的建構。本次更新的重點在於進一步清理（de-blobbing）各種驅動程式，特別是那些依賴非自由軟體微碼或韌體的元件。更新內容涵蓋了對多個 GPU 和 WiFi 網路驅動程式的處理，並清理了大量設備樹檔案中的 Blob 名稱。此外，GNU Linux-libre 7.1 也特別關注了上游 Linux 核心在 7.1 版本中移除 Intel 486 CPU 支援的變動。開發者指出，這標誌著 i486 支援的時代結束，對歷史設備的維護提出了挑戰。這是一個專注於自由軟體原則的 Linux 核心版本，可從 FSFLA.org 取得。",
    tags: ["GNU Linux-libre", "Linux 7.1", "i486", "驅動程式清理", "自由軟體", "Linux 核心"],
    title_en: "GNU Linux-libre 7.1 Released, Enhancing Driver Cleanup and Free Software Principles, While Addressing the End of i486 Support",
    summary_en: "The GNU Linux-libre 7.1-gnu version has been released, built upon the latest Linux 7.1 kernel for users committed to software freedom. The focus of this update is further cleaning (de-blobbing) various drivers, especially components that rely on non-free software microcode or firmware. The update includes handling for multiple GPU and WiFi network drivers, and cleans up Blob names within numerous device tree files. Furthermore, GNU Linux-libre 7.1 specifically addresses the change in the upstream Linux kernel 7.1 version that removes Intel 486 CPU support. Developers point out that this marks the end of the era for i486 support, posing challenges for maintaining legacy hardware. This is a Linux kernel version focused on free software principles and can be obtained from FSFLA.org.",
    tags_en: ["GNU Linux-libre", "Linux 7.1", "i486", "Driver Cleanup", "Free Software", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNU-Linux-Libre-7.1", lang: "EN" }
    ]
  },
  {
    id: "20260615-022",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 Kbuild 更新：提高 LLVM/Clang 編譯器要求至 17，並支援分散式 ThinLTO",
    summary: "Linux 核心的 Kbuild 系統在 7.2 版本中進行了重大更新，主要針對使用 LLVM/Clang 編譯器而非 GCC 的開發者。最顯著的變更是提高了編譯器的最低版本要求，從原先的 Clang 15 提升至 Clang 17 及以上。此舉旨在使 LLVM/Clang 的能力更貼近 GCC 編譯器的功能，特別是解決了範圍檢查器（scope checker）和與 GCC 8.1+ 不相容的 `const` 變數問題。此外，Linux 7.2 還新增了對 LLVM 分散式 ThinLTO（DTLTO）模式的支援，這能提供比傳統內建 ThinLTO 更快的核心建構速度。Kbuild 也加強了 Kconfig 的安全性，修補了潛在的空指標解引用和拼寫錯誤，並加入了 `kconfig-sym-check` 目標來檢查懸空 Kconfig 符號引用，提升了核心配置的健壯性。",
    tags: ["Linux 核心", "Kbuild", "LLVM", "Clang", "ThinLTO", "Linux 7.2"],
    title_en: "Linux 7.2 Kbuild Update: Raises LLVM/Clang Compiler Requirement to 17 and Supports Distributed ThinLTO",
    summary_en: "The Kbuild system in the Linux kernel underwent a major update in version 7.2, primarily targeting developers who use the LLVM/Clang compiler instead of GCC. The most notable change is the increase in the minimum required compiler version, raising it from Clang 15 to Clang 17 and above. This move aims to bring LLVM/Clang's capabilities closer to those of the GCC compiler, particularly addressing the scope checker and the issue of `const` variables that were incompatible with GCC 8.1+. Furthermore, Linux 7.2 adds support for LLVM Distributed ThinLTO (DTLTO) mode, which provides faster kernel build times compared to traditional built-in ThinLTO. Kbuild also enhanced Kconfig security by patching potential null pointer dereferences and typos, and introduced the `kconfig-sym-check` target to check for dangling Kconfig symbol references, thereby improving the robustness of kernel configuration.",
    tags_en: ["Linux Kernel", "Kbuild", "LLVM", "Clang", "ThinLTO", "Linux 7.2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Kbuild", lang: "EN" }
    ]
  },
  {
    id: "20260615-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "思科 SD-WAN 漏洞：攻擊者可透過特定條件達成 Root 權限",
    summary: "本文報導了思科（Cisco）SD-WAN 設備的一個安全漏洞。該漏洞允許攻擊者在特定條件下，能夠在遠端執行程式碼，並提升至 Root 權限。雖然原文未提供具體的 CVE 編號或 CVSS 分數，但其實務影響極為嚴重，可能導致攻擊者完全控制受影響的網路設備。建議用戶應密切關注思科官方發布的修補程式或安全公告，並及時進行系統更新，以修補此類遠端程式碼執行與權限提升的漏洞，確保網路邊緣設備的安全。",
    tags: ["Cisco", "SD-WAN", "Root 權限", "遠端程式碼執行", "資安漏洞"],
    title_en: "Cisco SD-WAN Vulnerability: Attackers Can Achieve Root Privileges via Specific Conditions",
    summary_en: "This article reports a security vulnerability in Cisco SD-WAN devices. The vulnerability allows attackers, under specific conditions, to execute remote code and escalate privileges to Root. Although the original text does not provide a specific CVE ID or CVSS score, the practical impact is extremely severe, potentially allowing attackers to gain full control over the affected network equipment. Users are advised to closely monitor official Cisco advisories or patches and perform timely system updates to remediate this type of remote code execution and privilege escalation vulnerability, ensuring the security of network edge devices.",
    tags_en: ["Cisco", "SD-WAN", "Root Privileges", "Remote Code Execution", "Security Vulnerability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/patches/2026/06/15/cisco-sd-wan-make-me-root-bug-under-attack/5255916", lang: "EN" }
    ]
  },
  {
    id: "20260615-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Red Hat 宣布為 Ubuntu 進行安全更新，修補潛在的系統漏洞",
    summary: "本篇報導提及 Red Hat 為 Ubuntu 進行了安全更新，旨在修補潛在的系統漏洞。雖然文章未提供具體的 CVE 編號、CVSS 分數或受影響的產品版本，但其核心目的是提升 Ubuntu 系統的安全性。對於使用 Ubuntu 系統的企業用戶和資安人員而言，應密切關注 Red Hat 或 Canonical 等主要發行商發布的官方安全公告（如 USN 或 DSA），並及時進行系統升級與修補。建議用戶應定期檢查系統更新，確保所有核心元件和應用程式都處於最新且安全的版本，以防範未知的安全風險。",
    tags: ["Ubuntu", "Red Hat", "安全更新", "Linux 核心", "資安公告"],
    title_en: "Red Hat Announces Security Update for Ubuntu to Patch Potential System Vulnerabilities",
    summary_en: "This report mentions that Red Hat has issued a security update for Ubuntu, aimed at patching potential system vulnerabilities. Although the article does not provide specific CVE IDs, CVSS scores, or affected product versions, its core purpose is to enhance the security of the Ubuntu system. For enterprise users and cybersecurity professionals utilizing Ubuntu systems, it is crucial to closely monitor official security announcements (such as USN or DSA) released by major vendors like Red Hat or Canonical, and to perform timely system upgrades and patching. Users are advised to regularly check for system updates to ensure that all core components and applications are running the latest and secure versions, thereby preventing unknown security risks.",
    tags_en: ["Ubuntu", "Red Hat", "Security Update", "Linux Kernel", "Cybersecurity Announcement"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/06/15/red-hat-gives-ubuntu-a-bootc-up-the-backside-at-canonical-shindig/5255608", lang: "EN" }
    ]
  },
  {
    id: "20260615-025",
    trackers: ["os"],
    category: "Linux",
    title: "Arch Linux 限制 AUR 貢獻者註冊，應對惡意提交程式碼的浪潮",
    summary: "Arch Linux 為了應對日益增加的惡意程式碼提交，已對其 AUR（Arch User Repository）的貢獻者註冊機制進行了限制。此舉旨在提高生態系統的安全性，防止惡意軟體或帶有後門的程式碼進入核心儲存庫。文章指出，惡意提交的趨勢與複雜性正在增加，使得社群必須採取更嚴格的審核措施。對於使用 Arch Linux 的用戶和開發者而言，應留意系統更新和 AUR 相關的安全性公告，並確保所有第三方套件來源都經過充分驗證。雖然文章未提供具體的 CVE 或 CVSS 分數，但其實務影響是提升了 Arch Linux 的整體安全門檻，保護了用戶免受潛在的供應鏈攻擊。",
    tags: ["Arch Linux", "AUR", "惡意程式碼", "供應鏈安全", "Linux"],
    title_en: "Arch Linux Restricts AUR Contributor Registration to Counter Wave of Malicious Code",
    summary_en: "To address the increasing submission of malicious code, Arch Linux has implemented restrictions on the contributor registration mechanism for its AUR (Arch User Repository). This measure aims to enhance the security of the ecosystem and prevent malware or backdoored code from entering the core repository. The article notes that the trend and complexity of malicious submissions are increasing, requiring the community to adopt stricter review measures. Users and developers utilizing Arch Linux should pay attention to system updates and AUR-related security announcements, and ensure that all third-party package sources are thoroughly validated. Although the article does not provide specific CVE or CVSS scores, its practical impact is raising the overall security threshold of Arch Linux, protecting users from potential supply chain attacks.",
    tags_en: ["Arch Linux", "AUR", "Malicious Code", "Supply Chain Security", "Linux"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/15/arch-linux-locks-down-aur-signups-amid-wave-of-malicious-commits/5255511", lang: "EN" }
    ]
  },
  {
    id: "20260615-026",
    trackers: ["os"],
    category: "Linux",
    title: "Flatpak-ng 棄用預警：對依賴 systemd 的 Linux 應用程式開發者構成挑戰",
    summary: "本文討論了 Flatpak-ng 的發展趨勢，指出其在系統級應用程式打包和分發方面可能面臨挑戰。Flatpak-ng 是一個用於管理 Flatpak 應用程式的工具，它與 systemd 緊密相關，許多依賴 systemd 服務或功能進行系統整合的應用程式開發者可能會受到影響。文章暗示，隨著系統環境和應用程式打包標準的演變，開發者需要重新評估其應用程式的依賴關係，特別是那些深度耦合 systemd 服務的應用。雖然原文未提供具體的 CVE 或 CVSS 分數，但其實務影響在於可能導致應用程式在現代 Linux 發行版上難以正確運行或進行系統級的整合。開發者應關注 Flatpak 生態系統的最新動態，並考慮使用更具彈性或更標準化的打包機制來確保應用程式的兼容性和可移植性。",
    tags: ["Flatpak", "Flatpak-ng", "systemd", "Linux", "應用程式打包", "Linux 開發"],
    title_en: "Flatpak-ng Deprecation Warning: Challenges for Linux Application Developers Relying on systemd",
    summary_en: "This article discusses the development trends of Flatpak-ng, pointing out potential challenges in its use for system-level application packaging and distribution. Flatpak-ng is a tool used for managing Flatpak applications, and because it is closely tied to systemd, many application developers who rely on systemd services or functionalities for system integration may be affected. The article suggests that as system environments and application packaging standards evolve, developers need to re-evaluate their application's dependencies, especially those deeply coupled with systemd services. Although the original text does not provide specific CVE or CVSS scores, the practical impact is that applications may struggle to run correctly or integrate at the system level on modern Linux distributions. Developers should monitor the latest dynamics of the Flatpak ecosystem and consider using more flexible or standardized packaging mechanisms to ensure application compatibility and portability.",
    tags_en: ["Flatpak", "Flatpak-ng", "systemd", "Linux", "Application Packaging", "Linux Development"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/06/15/flatpak-ng-sounds-like-bad-news-for-systemd-refuseniks/5254885", lang: "EN" }
    ]
  },
  {
    id: "20260615-027",
    trackers: ["security"],
    category: "法規與標準",
    title: "CISO面臨巨大壓力：企業內部為營運目標壓抑或延遲安全漏洞揭露",
    summary: "本報導指出，資安長（CISO）在企業內部面臨巨大的壓力，常被要求為了達成商業目標（如產品上市、財報發布）而壓抑或延遲揭露重要的資安漏洞或風險。根據 Checkmarx 的報告，高達 95% 的 CISO 感到有壓力必須抑制或延遲與合規相關的安全發現。這種壓力來源於董事會、公關部門以及產品銷售團隊，他們更關注時機和商業時程，而非透明的風險管理。CISO 在「揭露」與「保持沉默」之間掙扎，尤其是在漏洞不被視為極度嚴重時。此外，許多 CISO 缺乏足夠的權威和資源，導致資安投資常被視為成本，而非營運韌性。專家建議，組織必須將資安視為與業務目標緊密結合的環節，而非獨立的成本中心，並提前教育高階主管和董事會，建立透明、主動揭露風險的文化，才能有效緩解這些內部壓力。",
    tags: ["CISO", "資安風險", "漏洞揭露", "企業治理", "合規性", "營運韌性"],
    title_en: "CISOs Face Immense Pressure: Internal Corporate Goals Force Suppression or Delay of Security Vulnerability Disclosure",
    summary_en: "This report highlights that Chief Information Security Officers (CISOs) face immense pressure within corporations, often being required to suppress or delay the disclosure of critical security vulnerabilities or risks to achieve business objectives (such as product launches or financial report releases). According to a Checkmarx report, up to 95% of CISOs feel pressured to inhibit or delay security findings related to compliance. This pressure originates from the board of directors, PR departments, and product sales teams, who prioritize timing and business schedules over transparent risk management. CISOs struggle between 'disclosing' and 'remaining silent,' especially when vulnerabilities are not perceived as extremely severe. Furthermore, many CISOs lack sufficient authority and resources, causing security investments to be viewed as a cost rather than operational resilience. Experts recommend that organizations must integrate security into the business objectives, rather than treating it as an independent cost center. They also advise proactively educating senior management and the board of directors to establish a culture of transparent, proactive risk disclosure to effectively alleviate this internal pressure.",
    tags_en: ["CISO", "Security Risk", "Vulnerability Disclosure", "Corporate Governance", "Compliance", "Operational Resilience"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/most-cisos-report-pressure-to-bury-bad-security-news", lang: "EN" }
    ]
  },
  {
    id: "20260615-028",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "資誠警告：網路安全與AI治理已成國際市場門檻，企業需掌握SBOM、SSCA與ISO 42001等標準化證據",
    summary: "資誠智能風險管理諮詢公司董事長張晉瑞指出，在全球地緣政治與多重危機交錯的背景下，企業的網路安全與AI治理能力已不再是IT部門的內部議題，而是決定能否進入國際供應鏈、維持合約地位的關鍵門檻。他特別強調，面對歐盟《網路韌性法》（CRA）的強制通報義務，企業必須建立SBOM（軟體物料清單）和HBOM（硬體物料清單）的快速盤點能力，以應對24小時的漏洞通報時限。此外，在半導體等高科技產業，應採用SEMI的SSCA標準進行評估，以提供單一化、可驗證的信任證據。在AI治理方面，張晉瑞警示「影子AI」和「代理式AI」帶來的風險，建議企業應將自主代理視為高權限實體，並導入「人類介入機制」（Human-in-the-loop）等控制。他總結指出，具備ISO 42001等國際標準認證，能將合規責任轉化為跨國談判的實質籌碼，是企業在國際市場的護城河。",
    tags: ["網路安全", "AI治理", "SBOM", "CRA", "ISO 42001", "SSCA", "供應鏈韌性"],
    title_en: "Creswell warns: Cybersecurity and AI Governance are now international market barriers; enterprises must master standards like SBOM, SSCA, and ISO 42001",
    summary_en: "Zhang Jinrui, Chairman of Creswell Intelligent Risk Management Consulting, pointed out that against the backdrop of global geopolitics and multiple crises, a company's cybersecurity and AI governance capabilities are no longer internal IT department issues, but critical barriers determining its ability to enter international supply chains and maintain contractual status. He specifically emphasized that, facing the mandatory reporting obligations of the EU's Cyber Resilience Act (CRA), enterprises must establish rapid inventory capabilities for SBOM (Software Bill of Materials) and HBOM (Hardware Bill of Materials) to meet the 24-hour vulnerability reporting deadline. Furthermore, in high-tech industries such as semiconductors, companies should adopt SEMI's SSCA standard for assessment to provide unified, verifiable evidence of trust. Regarding AI governance, Zhang Jinrui warned about the risks posed by 'shadow AI' and 'agentic AI,' advising companies to treat autonomous agents as high-privilege entities and implement controls such as 'Human-in-the-loop' mechanisms. He concluded that possessing international standard certifications like ISO 42001 can transform compliance responsibility into tangible leverage for cross-border negotiations, serving as a protective moat for enterprises in the international market.",
    tags_en: ["Cybersecurity", "AI Governance", "SBOM", "CRA", "ISO 42001", "SSCA", "Supply Chain Resilience"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176614", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-029",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國政府限制Anthropic Claude Fable與Mythos模型存取，要求非美籍人士停用",
    summary: "美國政府發布出口管制命令，要求Anthropic公司暫時關閉其Claude Fable 5與Mythos 5模型，限制所有非美國籍人士存取，無論其身處何地。Anthropic指出，此管制命令可能與模型遭到越獄（Jailbreak）的風險有關，但Opus 4.8等其他模型仍可正常使用。此外，Anthropic也調整了Mythos級模型的資料留存政策，自2026年6月9日起生效，將使用者提交的提示詞與模型輸出保留30天，以利進行濫用行為的觀察與判斷。此舉主要影響原本採用零資料留存（ZDR）的企業與雲端服務客戶，要求用戶注意資料留存的變化。",
    tags: ["Anthropic", "Claude Fable 5", "Mythos 5", "美國政府", "出口管制", "資料留存"],
    title_en: "US Government Restricts Access to Anthropic's Claude Fable and Mythos Models, Mandating Non-US Citizens to Cease Use",
    summary_en: "The US government has issued an export control order requiring Anthropic to temporarily shut down its Claude Fable 5 and Mythos 5 models, restricting access to all non-US citizens, regardless of their location. Anthropic noted that this control order may be related to the risk of model jailbreaking, but other models, such as Opus 4.8, remain fully usable. Furthermore, Anthropic has adjusted the data retention policy for Mythos-class models, effective June 9, 2026. It will retain user-submitted prompts and model outputs for 30 days to facilitate the observation and judgment of misuse. This change primarily affects enterprise and cloud service clients who previously utilized Zero Data Retention (ZDR), urging users to note the change in data retention.",
    tags_en: ["Anthropic", "Claude Fable 5", "Mythos 5", "US Government", "Export Control", "Data Retention"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176604", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-030",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國政府要求Anthropic封鎖Claude Fable/Mythos模型，引發AI模型出口管制爭議",
    summary: "美國政府援引國家安全考量，要求Anthropic公司中止所有外國用戶（包括外籍員工）存取其最新、威力最強大的AI模型Claude Fable 5和Mythos 5。Anthropic在收到美國商務部命令後，宣布全面暫停提供這兩款模型給全球用戶，並公開表達了對美國政府作法的反對立場。該命令的基礎據稱是美國政府接獲一起「可能的越獄通報」。Anthropic指出，其模型已經過數千小時的紅隊演練，安全防護效力極高，且目前尚未接獲任何令人憂心或引發損害的非通用越獄通報。公司認為，以單一可能的越獄行為為由，召回已部署給數億用戶的商用模型，將嚴重阻礙尖端AI模型的部署與發展。Anthropic強調，其深度防禦策略和嚴密監控機制，旨在降低模型被不當利用的風險，並正努力恢復服務。",
    tags: ["Anthropic", "Claude Fable 5", "Mythos 5", "美國政府", "出口管制", "AI 模型安全"],
    title_en: "US Government Demands Anthropic Block Claude Fable/Mythos Models, Sparking AI Model Export Control Controversy",
    summary_en: "Citing national security concerns, the US government has required Anthropic to suspend all foreign user access (including foreign employees) to its latest and most powerful AI models, Claude Fable 5 and Mythos 5. After receiving the US Department of Commerce order, Anthropic announced a complete suspension of these two models for global users, publicly expressing its opposition to the US government's actions. The order is reportedly based on the US government receiving a 'possible jailbreak notification.' Anthropic pointed out that its models have undergone thousands of hours of red-teaming and possess extremely high safety protection efficacy, and that no concerning or damaging non-general jailbreak notifications have been received to date. The company argues that recalling a commercial model deployed to hundreds of millions of users based on a single possible jailbreak incident would severely impede the deployment and development of cutting-edge AI models. Anthropic emphasized that its deep defense strategy and strict monitoring mechanisms are designed to mitigate the risk of misuse, and that it is working hard to restore service.",
    tags_en: ["Anthropic", "Claude Fable 5", "Mythos 5", "US Government", "Export Control", "AI Model Safety"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176598", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-031",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Media Player 進行更新，提升字幕控制與檔案識別能力",
    summary: "微軟於 2026 年 6 月 12 日發布了 Windows Insider Preview 的新版本，其中包含對現代 Media Player (版本 11.2605.14.0) 的多項更新。本次更新主要提升了使用者體驗和穩定性。主要功能包括：字幕樣式現可與系統設定綁定，提供更精細的控制；新增播放佇列的「索引中」旗幟，讓使用者了解媒體庫掃描進度；改善了檔案格式識別邏輯，減少了因誤判導致的播放失敗；同時修復了播放佇列編輯時的崩潰問題，並優化了「缺少 Codec」的錯誤訊息，提供更清晰的指引。雖然微軟確認 Media Player 仍在持續開發，但文章指出，相較於其前身 Windows Media Player (WMP) 或第三方播放器（如 VLC），現代 Media Player 在啟動速度和記憶體佔用上仍有顯著落差，建議使用者留意其效能優化。",
    tags: ["Windows 11", "Media Player", "WinUI", "Codec", "Insider Preview", "微軟"],
    title_en: "Windows 11 Media Player Update Enhances Subtitle Control and File Identification Capabilities",
    summary_en: "Microsoft released a new version of Windows Insider Preview on June 12, 2026, which includes multiple updates for the modern Media Player (version 11.2605.14.0). This update primarily enhances user experience and stability. Key features include: subtitle styles can now be linked to system settings, offering more granular control; a new \"Indexing\" flag has been added to the playback queue, allowing users to track media library scanning progress; and the file format identification logic has been improved, reducing playback failures caused by misidentification. Furthermore, a crash issue when editing the playback queue has been fixed, and the \"Missing Codec\" error message has been optimized to provide clearer guidance. Although Microsoft confirmed that Media Player is still under continuous development, the article notes that compared to its predecessor, Windows Media Player (WMP), or third-party players (such as VLC), the modern Media Player still shows significant discrepancies in startup speed and memory consumption, advising users to monitor its performance optimization.",
    tags_en: ["Windows 11", "Media Player", "WinUI", "Codec", "Insider Preview", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/16/microsoft-reveals-windows-11s-media-player-isnt-dead-but-legacy-still-opens-videos-instantly", lang: "EN" }
    ]
  },
  {
    id: "20260615-032",
    trackers: ["os"],
    category: "Windows",
    title: "新版 Outlook 性能缺陷曝光：基於 WebView2 的設計導致通知點擊延遲高達 10 秒",
    summary: "本文分析了 Microsoft 新版 Outlook (New Outlook) 在 Windows 11 上的使用體驗問題。新版 Outlook 採用基於 WebView2 的網頁應用架構，取代了傳統的 Win32 桌面應用程式 (Outlook Classic)。雖然新版 Outlook 在功能上持續更新，但其性能問題尤其在處理通知時極為明顯。當用戶點擊新郵件的通知橫幅時，新版 Outlook 需要載入整個應用程式和收件匣，導致用戶必須等待約 10 秒才能看到目標郵件。相比之下，Outlook Classic 幾乎是即時開啟該郵件。從資源消耗來看，新版 Outlook 在閒置時佔用記憶體（RAM）和 CPU 資源遠高於 Outlook Classic，且其多個 WebView2 相關程序（如 WebView2 Manager, GPU Process 等）導致資源開銷巨大。文章指出，由於其網頁應用本質，性能瓶頸難以透過簡單的應用程式更新修復，建議用戶留意其性能優化進度。",
    tags: ["Microsoft Outlook", "WebView2", "Windows 11", "Win32", "性能優化", "應用程式架構"],
    title_en: "Performance Flaw Exposed in New Outlook: WebView2 Design Causes Notification Click Delay of Up to 10 Seconds",
    summary_en: "This article analyzes the user experience issues with Microsoft's New Outlook on Windows 11. New Outlook uses a web-based application architecture built on WebView2, replacing the traditional Win32 desktop application (Outlook Classic). Although New Outlook is continuously updated with features, its performance issues are particularly noticeable when handling notifications. When a user clicks a notification banner for a new email, New Outlook must load the entire application and inbox, causing the user to wait approximately 10 seconds to view the target email. In contrast, Outlook Classic opens the email almost instantly. In terms of resource consumption, New Outlook consumes significantly more memory (RAM) and CPU resources than Outlook Classic when idle, and its multiple WebView2-related processes (such as WebView2 Manager, GPU Process, etc.) result in massive resource overhead. The article points out that due to its web application nature, performance bottlenecks are difficult to fix through simple application updates, and advises users to monitor its performance optimization progress.",
    tags_en: ["Microsoft Outlook", "WebView2", "Windows 11", "Win32", "Performance Optimization", "Application Architecture"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/15/microsofts-new-outlook-takes-10-seconds-to-do-what-outlook-classic-does-instantly-on-windows", lang: "EN" }
    ]
  },
  {
    id: "20260615-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 2026 年度 OT 資安回顧：深入分析關鍵基礎設施的實戰威脅與教訓",
    summary: "本文為 Dragos 撰寫的 2026 年 OT（營運技術）資安年度回顧，旨在總結一年來從真實世界事件中學到的關鍵威脅、漏洞和實戰教訓。內容涵蓋了當前 OT 領域面臨的廣泛威脅，包括國家級駭客的攻擊模式、工業控制系統（ICS）的漏洞利用，以及針對關鍵基礎設施的攻擊行為。文章強調了 OT 資安的複雜性，指出傳統 IT 安全方法不足以應對物理世界與數位世界交匯處的風險。實務影響層面，建議組織必須提升對 OT 網路的監控能力、強化網路分段（Segmentation），並建立完整的事件響應流程。修補建議著重於採用縱深防禦（Defense-in-Depth）策略，並持續追蹤最新的工業控制系統漏洞，以應對日益複雜的攻擊面。",
    tags: ["OT 安全", "ICS", "關鍵基礎設施", "國家級駭客", "網路分段", "Dragos"],
    title_en: "Dragos 2026 Annual OT Security Review: Analyzing Real-World Threats and Lessons for Critical Infrastructure",
    summary_en: "This article is Dragos's 2026 annual OT (Operational Technology) security review, designed to summarize key threats, vulnerabilities, and practical lessons learned from real-world incidents over the past year. The content covers the broad threats facing the OT domain today, including attack patterns from nation-state hackers, exploitation of Industrial Control Systems (ICS) vulnerabilities, and attack behaviors targeting critical infrastructure. The article emphasizes the complexity of OT security, pointing out that traditional IT security methods are insufficient to address risks at the intersection of the physical and digital worlds. In terms of practical implications, it advises organizations to enhance monitoring capabilities for OT networks, strengthen network segmentation, and establish comprehensive incident response processes. Remediation recommendations focus on adopting a Defense-in-Depth strategy and continuously tracking the latest ICS vulnerabilities to cope with the increasingly complex attack surface.",
    tags_en: ["OT Security", "ICS", "Critical Infrastructure", "Nation-State Hackers", "Network Segmentation", "Dragos"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/ot-cybersecurity-year-in-review.rss", lang: "EN" }
    ]
  },
  {
    id: "20260615-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增兩項已知被利用漏洞：涵蓋思科SD-WAN與LiteSpeed cPanel的攻擊風險",
    summary: "美國網路安全局（CISA）宣布，已根據積極利用的證據，將兩項新漏洞納入「已知被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。新增的漏洞包括：CVE-2026-20262，為思科（Cisco）Catalyst SD-WAN Manager的目錄或路徑穿越漏洞；以及CVE-2026-54420，為LiteSpeed cPanel外掛的UNIX符號連結漏洞。CISA指出，這類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業級系統構成重大風險。此外，CISA發布的《具約束力的操作指令》（BOD 26-04）要求聯邦民事執行機構（FCEB）必須根據風險優先修補，特別是那些列於KEV目錄、且在公開資產上可授予完全控制權的高風險漏洞。雖然指令僅適用於聯邦機構，但CISA鼓勵所有組織應採納風險導向的漏洞管理方法，並優先修補KEV目錄中的漏洞。組織應密切關注CISA的更新，並針對已知的被利用漏洞採取緊急修補措施。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-20262", "CVE-2026-54420", "思科", "漏洞管理"],
    title_en: "CISA Adds Two Known Exploited Vulnerabilities: Covering Attack Risks in Cisco SD-WAN and LiteSpeed cPanel",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added two new vulnerabilities to the Known Exploited Vulnerabilities Catalog, based on evidence of active exploitation. The newly added vulnerabilities include: CVE-2026-20262, a directory or path traversal vulnerability in Cisco Catalyst SD-WAN Manager; and CVE-2026-54420, a UNIX symbolic link vulnerability in the LiteSpeed cPanel plugin. CISA points out that such vulnerabilities are common attack vectors used by malicious actors, posing a significant risk to federal enterprise systems. Furthermore, the 'Binding Operational Directive' (BOD 26-04) issued by CISA requires Federal Civilian Executive Branch Agencies (FCEB) to prioritize patching based on risk, especially for high-risk vulnerabilities listed in the KEV catalog that could grant full control over public assets. Although the directive only applies to federal agencies, CISA encourages all organizations to adopt a risk-based vulnerability management approach and prioritize patching vulnerabilities listed in the KEV catalog. Organizations should closely monitor CISA updates and take emergency patching measures for known exploited vulnerabilities.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-20262", "CVE-2026-54420", "Cisco", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/06/15/cisa-adds-two-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260615-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Copilot「SearchLeak」攻擊：研究揭露三階段資料竊取漏洞，利用參數注入竊取企業敏感資料",
    summary: "研究人員發現一種名為「SearchLeak」的攻擊，利用Microsoft Copilot的間接提示注入（P2P）漏洞，可讓攻擊者透過惡意連結，在受害者不知情的情況下，竊取其存取範圍內的電子郵件、會議筆記、OneDrive及SharePoint等企業敏感文件。該攻擊透過構造包含惡意參數的Copilot連結，引導Copilot執行搜尋任務，並將獲取的敏感資訊（如郵件主旨、安全代碼）透過圖片標籤（img tag）的伺服器端抓取機制，傳輸至攻擊者控制的伺服器。雖然Microsoft已修補此漏洞（追蹤為CVE-2026-42824），但專家警告，這類風險屬於大型語言模型（LLM）企業助理的廣泛類別，強調平台方應加強提示隔離、輸出淨化和內容安全政策（CSP）的強制執行。組織層面應將AI系統視為攻擊面的一部分，並最小化不必要的資料暴露。",
    tags: ["Microsoft Copilot", "SearchLeak", "CVE-2026-42824", "提示注入", "LLM", "資料外洩"],
    title_en: "Copilot 'SearchLeak' Attack: Research Uncovers Three-Stage Data Exfiltration Vulnerability Using Parameter Injection",
    summary_en: "Researchers discovered an attack called 'SearchLeak,' which exploits an indirect prompt injection (P2P) vulnerability in Microsoft Copilot. This vulnerability allows attackers to steal corporate sensitive files—such as emails, meeting notes, OneDrive, and SharePoint—within the victim's access scope, without the victim's knowledge. The attack works by constructing a Copilot link containing malicious parameters, which guides Copilot to execute a search task and transmit the retrieved sensitive information (such as email subjects or security codes) to an attacker-controlled server via a server-side scraping mechanism embedded in an image tag (img tag). Although Microsoft has patched this vulnerability (tracked as CVE-2026-42824), experts warn that this type of risk belongs to the broad category of enterprise LLM assistant risks. They emphasize that platform providers must strengthen prompt isolation, output sanitization, and the enforcement of Content Security Policies (CSP). Organizations should treat AI systems as part of their attack surface and minimize unnecessary data exposure.",
    tags_en: ["Microsoft Copilot", "SearchLeak", "CVE-2026-42824", "Prompt Injection", "LLM", "Data Leakage"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/copilot-searchleak-attack-1-click-data-theft", lang: "EN" }
    ]
  },
  {
    id: "20260615-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google揭露中國資安威脅群UNC6508：透過REDCap竊取學術機構憑證並進行長期間諜活動",
    summary: "Google威脅情報小組（GTIG）與Mandiant合作，揭露一個由中國背景的資安威脅行為者UNC6508所執行的大規模網路間諜活動。該活動目標為美國學術、醫療及軍事研究機構，持續時間至少一年。攻擊鏈始於利用外部暴露的REDCap（研究電子資料擷取）Web應用程式，部署名為Infinitered的客製化惡意軟體，竊取研究人員的憑證。隨後，攻擊者利用這些憑證進入內部網路，並透過修改網域內容合規性規則（content-compliance rules）進行隱蔽的資料外傳。這種資料外傳技術非常新穎，不依賴惡意軟體或標準的「利用現有系統」工具，極難被傳統安全控制系統偵測。GTIG指出，該行為者不僅竊取了涉及軍事戰略、外國政策和先進防禦技術的敏感資料，其操作的範圍和技術的複雜性都顯示出高度的國家級情報收集意圖。建議受影響機構應立即審查所有外部暴露的Web應用程式，特別是學術研究平台，並強化對網域內容合規性規則的監控，以防範憑證竊取和隱蔽的資料外傳。",
    tags: ["UNC6508", "REDCap", "Google Threat Intelligence", "中國資安威脅", "憑證竊取", "資料外傳"],
    title_en: "Google Uncovers Chinese Cyber Threat Group UNC6508: Stealing Academic Credentials and Conducting Long-Term Espionage via REDCap",
    summary_en: "Google Threat Intelligence Group (GTIG), in collaboration with Mandiant, has exposed a large-scale cyber espionage campaign executed by a China-linked threat actor, UNC6508. The campaign targeted U.S. academic, medical, and military research institutions, maintaining persistence for at least one year. The attack chain began by exploiting externally exposed REDCap (Research Electronic Data Capture) web applications to deploy custom malware named Infinitered, stealing credentials from researchers. Subsequently, the attackers used these credentials to gain access to internal networks and exfiltrate data by modifying content-compliance rules. This data exfiltration technique is highly novel, relying neither on malware nor standard 'living off the land' tools, making it extremely difficult for traditional security controls to detect. GTIG notes that the actor not only stole sensitive data related to military strategy, foreign policy, and advanced defense technologies, but the scope and technical complexity of their operations indicate a high degree of state-level intelligence collection intent. Affected organizations are advised to immediately review all externally exposed web applications, especially academic research platforms, and strengthen monitoring of content-compliance rules to prevent credential theft and covert data exfiltration.",
    tags_en: ["UNC6508", "REDCap", "Google Threat Intelligence", "China Cyber Threat", "Credential Theft", "Data Exfiltration"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/china-nexus-actor-us-researchers-undetected", lang: "EN" }
    ]
  },
  {
    id: "20260615-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "美國政府限制 Anthropic 模型外國使用，憂心 AI 助長網路攻擊與漏洞利用",
    summary: "美國政府因擔憂國家級駭客和網路犯罪分子利用前沿 AI 模型進行惡意活動，已對 Anthropic 的 Fable 5 和 Mythos 5 模型實施出口管制，限制了外國國民甚至公司員工的使用權。Anthropic 此前已發布研究報告，指出攻擊者正日益利用其 AI 服務來生成惡意程式碼、尋找漏洞，並自動化整個網路攻擊鏈。研究顯示，AI 模型已能達到接近頂尖人類研究員的漏洞發現和利用能力。此外，OpenAI 的 GPT-5.5 在複雜的攻擊鏈模擬中表現優於 Mythos。業界專家強調，單純的 AI 模型只是「引擎」，真正決定攻擊威脅程度的是周圍的「支架」（scaffolding）和控制機制。攻擊者目前已將 AI 應用於攻擊生命週期的各個階段，包括惡意軟體創建和混淆，這對現有的 TTPs 框架提出了挑戰。",
    tags: ["Anthropic", "Mythos 5", "Fable 5", "美國政府", "AI 模型", "出口管制", "網路攻擊"],
    title_en: "US Government Restricts Anthropic Models' Foreign Use, Concerned Over AI Fueling Cyber Attacks and Exploitation",
    summary_en: "Due to concerns that state-sponsored hackers and cybercriminals may utilize advanced AI models for malicious activities, the US government has implemented export controls on Anthropic's Fable 5 and Mythos 5 models, restricting their use to foreign nationals and even company employees. Anthropic previously published a research report indicating that attackers are increasingly using its AI services to generate malicious code, find vulnerabilities, and automate entire cyber attack chains. The research showed that AI models have achieved vulnerability discovery and exploitation capabilities approaching those of top human researchers. Furthermore, OpenAI's GPT-5.5 demonstrated superior performance to Mythos in complex attack chain simulations. Industry experts emphasize that the AI model itself is merely the 'engine'; the true determinant of the attack threat level is the surrounding 'scaffolding' and control mechanisms. Attackers are currently applying AI across all stages of the attack lifecycle, including malware creation and obfuscation, posing a challenge to existing TTPs frameworks.",
    tags_en: ["Anthropic", "Mythos 5", "Fable 5", "US Government", "AI Models", "Export Controls", "Cyber Attacks"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/us-cracks-down-anthropic-ai-models-abuse-concerns", lang: "EN" }
    ]
  },
  {
    id: "20260615-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕世界盃威脅：FortiGuard Labs揭露FIFA 2026相關網域與憑證竊取攻擊路徑",
    summary: "隨著2026年世界盃足球賽即將開打，網路釣魚威脅隨之升溫。Fortinet旗下FortiGuard Labs發布調查報告，監測到全球已出現超過13,000個與FIFA 2026相關的新註冊網域，其中有超過1,100個被識別為惡意或可疑。攻擊者除了利用售票、直播等熱門關鍵字，更鎖定賽事龐大的臨時人力需求，開闢了新的攻擊路徑。具體攻擊手法包括散播虛假職缺廣告，誘騙求職者點擊連結，最終導向偽造的Google登入頁面，實施憑證竊取（Credential Harvesting）。受害者輸入帳號密碼後，即使網頁顯示錯誤訊息，攻擊者已成功擷取其登入憑證與個資，可進而用於後續的滲透或詐騙行為。建議民眾與企業提高警覺，特別留意來自虛假職缺或邀請函的連結，並採取多重驗證機制保護帳號。",
    tags: ["FIFA 2026", "網路釣魚", "憑證竊取", "FortiGuard Labs", "網域註冊", "社會工程學"],
    title_en: "Beware of World Cup Threats: FortiGuard Labs Uncovers Attack Vectors Targeting FIFA 2026 Domains and Credentials",
    summary_en: "With the 2026 FIFA World Cup approaching, phishing threats are escalating. Fortinet's FortiGuard Labs released an investigation report monitoring over 13,000 newly registered domains globally related to FIFA 2026, of which more than 1,100 were identified as malicious or suspicious. Attackers are not only utilizing popular keywords such as ticketing and live streaming but are also targeting the massive temporary staffing needs of the event, opening up new attack vectors. Specific attack methods include distributing fake job advertisements to lure job seekers into clicking links, which ultimately lead to fraudulent Google login pages to perform Credential Harvesting. Even if the webpage displays an error message after the victim enters their account and password, the attackers have successfully captured their login credentials and personal information, which can then be used for subsequent penetration or fraud. It is recommended that the public and enterprises raise their awareness, paying special attention to links originating from fake job openings or invitation letters, and implementing multi-factor authentication mechanisms to protect accounts.",
    tags_en: ["FIFA 2026", "Phishing", "Credential Harvesting", "FortiGuard Labs", "Domain Registration", "Social Engineering"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176605", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將Ivanti Sentry閘道漏洞CVE-2026-10520列入KEV：命令注入風險與部署限制分析",
    summary: "美國網路安全暨基礎設施安全局（CISA）於6月11日宣布，將影響Ivanti Sentry安全閘道設備的CVE-2026-10520納入已知遭利用漏洞（KEV）清單。此漏洞為作業系統命令注入類型，CVSS分數達滿分10.0分。Ivanti此前已發布安全公告，修補此漏洞及另一個CVE-2026-10523。Ivanti指出，該漏洞的實際風險高度取決於Sentry設備的部署方式，特別是管理介面是否限制外部存取。若設備透過EPMM管理，受影響API會受雙向TLS（mTLS）保護；若使用Neurons for MDM管理，應避免將8443連接埠暴露於網際網路。儘管CISA將其納入KEV清單的依據是蜜罐環境的攻擊嘗試，Ivanti強調，若用戶遵循其建議，管理介面不應暴露於網際網路，可大幅降低實際風險。建議用戶應遵循Ivanti官方文件，確保管理介面安全配置。",
    tags: ["CISA", "Ivanti", "CVE-2026-10520", "Sentry", "命令注入", "KEV"],
    title_en: "CISA Adds Ivanti Sentry Gateway Vulnerability CVE-2026-10520 to KEV: Command Injection Risk and Deployment Limitations Analysis",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced on June 11th that CVE-2026-10520, affecting Ivanti Sentry security gateway devices, has been added to the Known Exploited Vulnerabilities (KEV) catalog. This vulnerability is an operating system command injection type, achieving a CVSS score of 10.0. Ivanti previously issued a security advisory patching this vulnerability and another one, CVE-2026-10523. Ivanti notes that the actual risk of this vulnerability is highly dependent on how the Sentry device is deployed, particularly whether the management interface restricts external access. If the device is managed via EPMM, the affected API is protected by mutual TLS (mTLS); if managed using Neurons for MDM, users should avoid exposing port 8443 to the internet. Although CISA's basis for inclusion in the KEV list was observed attack attempts in a honeypot environment, Ivanti emphasizes that if users follow its recommendations, the actual risk can be significantly reduced by ensuring the management interface is not exposed to the internet. Users are advised to follow Ivanti's official documentation to ensure secure management interface configuration.",
    tags_en: ["CISA", "Ivanti", "CVE-2026-10520", "Sentry", "Command Injection", "KEV"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176612", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "遠端管理工具 SimpleHelp 曝重大身分驗證漏洞 CVE-2026-48558，可繞過 MFA 建立技術人員帳號",
    summary: "遠端管理工具平臺 SimpleHelp 近日發布更新，修補了一個極為嚴重的身分驗證繞過漏洞 CVE-2026-48558。此漏洞的 CVSS 嚴重性評分達滿分 10.0，允許未經驗證的遠端攻擊者利用漏洞偽造身分資訊，建立具有高權限的「技術人員（Technician）」帳號。攻擊的根本原因出在 SimpleHelp 的 OpenID Connect (OIDC) 身分驗證流程，該流程未能正確驗證身分權杖（Identity Token）的加密簽章。攻擊者可透過偽造權杖，以技術人員身分通過驗證，進而繞過多因素驗證（MFA）。更甚者，攻擊者甚至可以在首次登入時自行註冊新的 MFA 驗證方式，使得基於 MFA 的防禦措施也形同虛設。受影響版本包括 5.5.15 及更早版本，以及 6.0 系列預覽版本。用戶應立即更新至已修補的 5.5.16 或 6.0 RC2 版本，以防範被遠端攻擊者利用。",
    tags: ["SimpleHelp", "CVE-2026-48558", "OIDC", "MFA", "身分驗證", "遠端管理"],
    title_en: "Major Authentication Vulnerability CVE-2026-48558 Discovered in Remote Management Tool SimpleHelp, Allowing Creation of Technician Accounts Bypassing MFA",
    summary_en: "The remote management platform SimpleHelp recently released an update to patch an extremely severe authentication bypass vulnerability, CVE-2026-48558. This vulnerability has a CVSS severity score of 10.0, allowing unauthenticated remote attackers to exploit the flaw to forge identity information and create high-privilege 'Technician' accounts. The root cause of the attack lies in SimpleHelp's OpenID Connect (OIDC) authentication flow, which fails to correctly validate the cryptographic signature of the Identity Token. By forging the token, an attacker can bypass authentication as a technician, thereby circumventing Multi-Factor Authentication (MFA). Furthermore, the attacker can even register new MFA methods during the initial login, rendering MFA-based defenses ineffective. Affected versions include 5.5.15 and earlier, as well as the 6.0 series preview versions. Users should immediately update to the patched versions 5.5.16 or 6.0 RC2 to prevent exploitation by remote attackers.",
    tags_en: ["SimpleHelp", "CVE-2026-48558", "OIDC", "MFA", "Authentication", "Remote Management"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176601", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "MITRE ATT&CK 框架更新至第19版：戰術分類拆分「防禦規避」為「隱匿」與「防禦削弱」",
    summary: "資安業界廣泛使用的攻擊手法框架 MITRE ATT&CK 已更新至第19版。本次更新的重大變動，是將原有的「防禦規避」（Defense Evasion）戰術，拆分成兩個更精細的戰術類別：「隱匿」（Stealth）與「防禦削弱」（Defense Impairment）。此舉使框架從原有的 14 個戰術擴展至 15 個。MITRE 指出，這項拆分旨在解決「防禦規避」戰術類別過於龐大，難以進行威脅對應與分析的問題。它強調「隱匿」與「防禦削弱」是兩種不同的攻擊行為模型：前者指攻擊者利用潛伏技術（如 Living-off-the-land）進行潛伏，後者則指攻擊者主動停用日誌或篡改 EDR 代理程式以破壞防禦能力。對於防禦者而言，此更新的價值在於能更精準地判斷攻擊者是處於「躲藏」還是「破壞防禦」，從而制定更符合實際威脅模型的應對策略。",
    tags: ["MITRE ATT&CK", "戰術分類", "隱匿", "防禦削弱", "攻擊手法框架", "資安威脅情報"],
    title_en: "MITRE ATT&CK Framework Updated to Version 19: 'Defense Evasion' Tactic Split into 'Stealth' and 'Defense Impairment'",
    summary_en: "The MITRE ATT&CK framework, widely used in the cybersecurity industry, has been updated to Version 19. The major change in this update is the splitting of the original 'Defense Evasion' tactic into two more granular tactic categories: 'Stealth' and 'Defense Impairment.' This expands the framework from its original 14 tactics to 15. MITRE notes that this split aims to address the issue of the 'Defense Evasion' tactic being too broad, making threat mapping and analysis difficult. It emphasizes that 'Stealth' and 'Defense Impairment' represent two different attacker behavior models: the former refers to attackers using latent techniques (such as Living-off-the-land) for concealment, while the latter refers to attackers actively disabling logs or tampering with EDR agents to disrupt defensive capabilities. For defenders, the value of this update lies in the ability to more accurately determine whether the attacker is 'hiding' or 'disrupting defenses,' thereby enabling the formulation of response strategies that align with actual threat models.",
    tags_en: ["MITRE ATT&CK", "Tactic Classification", "Stealth", "Defense Impairment", "Adversary Tactics Framework", "Cyber Threat Intelligence"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176594", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "phpBB 核心發佈更新修補重大身分驗證繞過漏洞，防範任意帳號登入風險",
    summary: "開源論壇軟體 phpBB 近日發布更新，修補一個嚴重的身分驗證繞過漏洞。此漏洞允許攻擊者僅需發送特製 HTTP 請求，即可登入包括管理員在內的任意帳號，無需密碼。受影響版本涵蓋 3.3.16 以前的 3.x 版本，以及 4.0.0-a2 以前的 4.x 測試版本。資安公司 Aikido 發現此漏洞，並指出其已存在時間較長。雖然此漏洞允許攻擊者取得完整的論壇讀寫刪除權限，但由於管理員控制面板（ACP）有獨立密碼保護，因此無法造成遠端執行程式碼。phpBB 已在 3.3.17 版本修補了 3.x 版本的漏洞，但 4.x 測試版本尚未修補。建議所有使用 phpBB 的用戶應立即升級至最新穩定版本，特別是 3.x 版本，以防止帳號被盜用和資料外洩。",
    tags: ["phpBB", "身分驗證繞過", "開源軟體", "論壇系統", "漏洞修補"],
    title_en: "phpBB Core Releases Update Patching Critical Authentication Bypass Vulnerability, Preventing Arbitrary Account Login Risk",
    summary_en: "The open-source forum software phpBB recently released an update to patch a critical authentication bypass vulnerability. This vulnerability allows attackers to log into any account, including administrator accounts, merely by sending a specially crafted HTTP request, without needing a password. Affected versions include 3.x versions prior to 3.3.16, and 4.x test versions prior to 4.0.0-a2. The vulnerability was discovered by the security company Aikido, which noted that it has existed for some time. Although this vulnerability allows attackers to gain full forum read, write, and delete permissions, it cannot lead to Remote Code Execution (RCE) because the Admin Control Panel (ACP) is protected by a separate password. phpBB has patched the 3.x version vulnerability in 3.3.17, but the 4.x test version has not yet been patched. All users of phpBB are advised to immediately upgrade to the latest stable version, especially 3.x, to prevent account theft and data leakage.",
    tags_en: ["phpBB", "Authentication Bypass", "Open-Source Software", "Forum System", "Vulnerability Patch"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176597", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕 Langflow 路徑遍歷漏洞：VulnCheck 發現攻擊者試圖利用 CVE-2026-5027 遠端執行程式碼",
    summary: "資安公司 VulnCheck 警告，已發現有人嘗試利用 Langflow 的路徑遍歷漏洞 CVE-2026-5027。此漏洞存在於大型語言模型開發工具 Langflow 的 POST /api/v2/files 端點，攻擊者可透過路徑遍歷序列，在檔案系統的任意位置寫入檔案，進而達到遠端執行任意程式碼的風險。該漏洞的根本原因在於該端點未能徹底清理來自多個來源的 filename 參數。VulnCheck 指出，由於 Langflow 預設允許未經授權的自動登入，攻擊者僅需發出未經授權的請求並附帶有效連線權杖，便可利用此漏洞。該漏洞的 CVSS v4.0 分數為 8.7 分，CVSS v3.1 為 8.8 分。Langflow 開發團隊已在 0.8.3 版元件和後續的 1.9.0 版本中進行了修復。建議使用者應立即升級至 Langflow 1.9.0 或更高版本，並審慎管理應用程式的權限與連線憑證。",
    tags: ["Langflow", "CVE-2026-5027", "路徑遍歷", "LLM 開發工具", "遠端程式碼執行", "VulnCheck"],
    title_en: "Beware of Langflow Path Traversal Vulnerability: VulnCheck Discovers Attackers Attempting to Exploit CVE-2026-5027 for Remote Code Execution",
    summary_en: "Cybersecurity company VulnCheck warns that attempts have been detected to exploit a path traversal vulnerability, CVE-2026-5027, in Langflow. This vulnerability exists in the POST /api/v2/files endpoint of Langflow, a tool for developing large language models. Through path traversal sequences, attackers can write files to arbitrary locations in the file system, leading to the risk of remote arbitrary code execution. The root cause of this vulnerability is that the endpoint fails to properly sanitize the filename parameter originating from multiple sources. VulnCheck points out that because Langflow defaults to allowing unauthorized automatic login, attackers only need to send an unauthorized request with a valid connection token to exploit this vulnerability. The vulnerability has a CVSS v4.0 score of 8.7 and a CVSS v3.1 score of 8.8. The Langflow development team has implemented fixes in component version 0.8.3 and the subsequent 1.9.0 version. Users are advised to immediately upgrade to Langflow 1.9.0 or higher, and to carefully manage application permissions and connection credentials.",
    tags_en: ["Langflow", "CVE-2026-5027", "Path Traversal", "LLM Development Tool", "Remote Code Execution", "VulnCheck"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176593", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Oracle PeopleTools 遭積極利用：CISA警告 CVE-2026-35273 漏洞已被駭客用於勒索攻擊",
    summary: "Oracle 警告企業應用系統平臺 PeopleSoft PeopleTools 存在重大漏洞 CVE-2026-35273。Mandiant 與 Google 威脅情報團隊指出，駭客組織 ShinyHunters (UNC6240) 已在 Oracle 公告前積極利用此漏洞。美國網路安全與基礎設施安全局（CISA）已確認此漏洞已被用於實際攻擊，並將其列入已遭利用的漏洞名單（KEV）。CVE-2026-35273 是 PeopleTools 重要功能缺乏驗證的弱點，攻擊者無需身分驗證即可利用，可能導致系統被挾持。CISA 已要求聯邦機構在特定期限前完成修補，並指出此漏洞已被用於勒索軟體活動。用戶應立即採取行動，修補此漏洞以緩解風險。",
    tags: ["Oracle", "PeopleSoft PeopleTools", "CVE-2026-35273", "CISA", "KEV", "勒索軟體"],
    title_en: "Oracle PeopleTools Actively Exploited: CISA Warns CVE-2026-35273 Vulnerability Used in Ransomware Attacks",
    summary_en: "Oracle has warned of a critical vulnerability, CVE-2026-35273, in the enterprise application platform PeopleSoft PeopleTools. Mandiant and Google Threat Intelligence have pointed out that the threat group ShinyHunters (UNC6240) has been actively exploiting this vulnerability before Oracle's public disclosure. CISA has confirmed that this vulnerability has been used in actual attacks and has listed it on its Known Exploited Vulnerabilities (KEV) catalog. CVE-2026-35273 is a weakness in a PeopleTools core function due to lack of validation, which attackers can exploit without authentication, potentially leading to system compromise. CISA has required federal agencies to patch this vulnerability by a specific deadline and noted that it has been used in ransomware activity. Users should take immediate action to patch this vulnerability to mitigate risk.",
    tags_en: ["Oracle", "PeopleSoft PeopleTools", "CVE-2026-35273", "CISA", "KEV", "Ransomware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176590", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國資安集團利用REDCap後門及Google Workspace內容合規規則竊取敏感研究資料",
    summary: "Google威脅情報小組（GTIG）報告指出，一個被歸因為UNC6508的中國相關間諜組織，在超過一年時間內，潛伏於北美學術、醫療和軍事研究網路，竊取敏感研究和國防郵件。攻擊的初始入口點是REDCap（研究電子數據捕獲）伺服器上的後門。該惡意程式（INFINITERED）劫持了REDCap的升級流程，竊取用戶憑證，並作為後門運行。更為隱蔽的是，攻擊者濫用了Google Workspace的內容合規規則，創建了一個監控特定關鍵字（如「Patroit」和「chikungunya」）的規則，將匹配的郵件靜默轉發到攻擊者控制的外部信箱，從而實現了資料外洩。受影響的目標包括臨床提供者、學術中心和軍事機構。修補建議包括：徹底修補所有外部暴露的REDCap伺服器，移除舊版本；審查Workspace等郵件服務的內容合規和郵件轉發規則，特別是任何將郵件轉發到外部地址的規則；並為管理員帳號啟用防釣魚的MFA。",
    tags: ["UNC6508", "REDCap", "Google Workspace", "內容合規規則", "資料外洩", "間諜活動"],
    title_en: "Chinese Cyber Group Exploits REDCap Backdoor and Google Workspace Content Compliance Rules to Steal Sensitive Research Data",
    summary_en: "A report from the Google Threat Intelligence Group (GTIG) indicates that a China-linked espionage group, attributed to UNC6508, has been operating for over a year, infiltrating North American academic, medical, and military research networks to steal sensitive research and defense emails. The initial entry point for the attack was a backdoor on a REDCap (Research Electronic Data Capture) server. The malware (INFINITERED) hijacked the REDCap upgrade process, stealing user credentials and operating as a persistent backdoor. More stealthily, the attackers exploited Google Workspace's content compliance rules, creating a rule that monitored specific keywords (such as “Patroit” and “chikungunya”) and silently forwarded matching emails to an external mailbox controlled by the attackers, thereby achieving data exfiltration. Affected targets include clinical providers, academic centers, and military organizations. Remediation recommendations include: thoroughly patching all externally exposed REDCap servers and removing older versions; reviewing content compliance and email forwarding rules in email services like Workspace, especially any rules that forward emails to external addresses; and enabling anti-phishing MFA for administrator accounts.",
    tags_en: ["UNC6508", "REDCap", "Google Workspace", "Content Compliance Rules", "Data Exfiltration", "Espionage"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/chinese-hackers-abused-google-workspace.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-046",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "北韓駭客群啟動 UNK_DeadDrop 釣魚活動：利用 VS Code 惡意擴充功能竊取憑證",
    summary: "資安研究機構 Proofpoint 報告指出，一個與北韓持續威脅群 Contagious Interview 相似的惡意活動 UNK_DeadDrop 正在大規模運作。該活動透過發送釣魚郵件，以開發人員招募或程式碼審查為主題，鎖定金融、加密貨幣、教育、科技等近百個組織。攻擊鏈始於包含惡意連結的郵件，引導受害者在 VS Code 或 Cursor 中開啟惡意 GitHub 儲存庫。關鍵技術細節在於，攻擊利用 VS Code 的 `runOn: folderOpen` 功能，無需用戶互動即可觸發惡意程式碼執行。惡意載入器（Loader）會安裝一個偽裝成合法 Google 服務的惡意 VS Code 擴充功能（VSIX）。該擴充功能透過與外部伺服器通訊，執行遠端指令、系統偵察，並從瀏覽器錢包擴充功能、憑證和桌面錢包應用程式竊取資料。最終目標是竊取憑證和數據，並透過 HTTP POST 請求傳輸至特定 C2 位址。Proofpoint 觀察到，該活動顯示北韓駭客針對開發人員的行為正在成熟和擴大規模。",
    tags: ["Proofpoint", "UNK_DeadDrop", "Contagious Interview", "VS Code", "惡意擴充功能", "北韓駭客", "釣魚攻擊"],
    title_en: "North Korean Hacker Group Launches UNK_DeadDrop Phishing Campaign: Stealing Credentials via VS Code Malicious Extension",
    summary_en: "Security research firm Proofpoint reported that a malicious campaign, UNK_DeadDrop, similar to the North Korean threat group Contagious Interview, is operating on a large scale. The campaign targets nearly a hundred organizations in sectors such as finance, cryptocurrency, education, and technology by sending phishing emails themed around developer recruitment or code review. The attack chain begins with an email containing a malicious link, which guides the victim to open a malicious GitHub repository in VS Code or Cursor. The key technical detail is that the attack exploits the `runOn: folderOpen` feature of VS Code, triggering malicious code execution without user interaction. The malicious loader installs a malicious VS Code extension (VSIX) disguised as a legitimate Google service. This extension communicates with an external server to execute remote commands, perform system reconnaissance, and steal data from browser wallet extensions, credentials, and desktop wallet applications. The ultimate goal is to steal credentials and data, which are then transmitted to a specific C2 address via HTTP POST requests. Proofpoint observed that this campaign demonstrates the maturation and scaling of North Korean hacker behavior targeting developers.",
    tags_en: ["Proofpoint", "UNK_DeadDrop", "Contagious Interview", "VS Code", "Malicious Extension", "North Korean Hackers", "Phishing Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/north-korean-hackers-are-turning.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "LiteLLM 鏈式漏洞曝光：低權限帳號可透過三個 CVE 升級為全權管理員並執行伺服器代碼",
    summary: "AI 開發工具 LiteLLM 作為 AI 閘道器，負責串接上百個模型提供者，其核心位置使其成為高風險目標。研究人員 Obsidian Security 揭露了一個嚴重的鏈式漏洞，攻擊者僅需一個預設的低權限帳號，即可透過三個漏洞（CVE-2026-47101、CVE-2026-47102、CVE-2026-40217）升級為全權管理員，並最終在伺服器上執行任意代碼。第一個漏洞 CVE-2026-47101 允許非管理員用戶透過未經檢查的 `allowed_routes` 欄位，繞過 API 路由門控，達到訪問管理路徑的目的。接著，攻擊者利用 CVE-2026-47102 透過更新用戶記錄的方式，將自身角色提升為 `proxy_admin`。最後，利用 CVE-2026-40217，一個沙盒逃逸漏洞，攻擊者可以在 Custom Code Guardrail 中執行任意 Python 代碼，最終實現反向 Shell。成功利用此鏈路，攻擊者可竊取所有配置的提供者密鑰、解密儲存憑證的鹽密鑰，並讀取所有傳輸的提示詞和回應，甚至能偽造模型回應，對 AI 應用造成極大危害。建議用戶立即升級至 LiteLLM v1.83.14-stable 或更高版本，並審核所有管理員帳號、Custom Code Guardrail 以及配置的回調機制。",
    tags: ["LiteLLM", "CVE-2026-47101", "CVE-2026-47102", "CVE-2026-40217", "AI 閘道器", "RCE", "供應鏈安全"],
    title_en: "LiteLLM Chaining Vulnerability Exposed: Low-Privilege Account Can Achieve Full Administrator Privileges and Execute Server-Side Code via Three CVEs",
    summary_en: "LiteLLM, an AI development tool that functions as an AI gateway and connects to hundreds of model providers, is a high-risk target due to its core position. Researchers at Obsidian Security have revealed a severe chaining vulnerability. An attacker, using only a default low-privilege account, can escalate privileges to full administrator and ultimately execute arbitrary code on the server by exploiting three vulnerabilities (CVE-2026-47101, CVE-2026-47102, and CVE-2026-40217). The first vulnerability, CVE-2026-47101, allows non-administrator users to bypass the API routing gate by exploiting an unchecked `allowed_routes` field, thereby accessing administrative paths. Next, the attacker utilizes CVE-2026-47102 to elevate their own role to `proxy_admin` by updating user records. Finally, using CVE-2026-40217, a sandbox escape vulnerability, the attacker can execute arbitrary Python code within the Custom Code Guardrail, ultimately achieving a reverse shell. By successfully exploiting this chain, the attacker can steal all configured provider keys, decrypt salt keys used for storing credentials, and read all transmitted prompts and responses. Furthermore, they can even forge model responses, posing a significant threat to AI applications. Users are advised to immediately upgrade to LiteLLM v1.83.14-stable or higher, and to review all administrator accounts, Custom Code Guardrails, and configured callback mechanisms.",
    tags_en: ["LiteLLM", "CVE-2026-47101", "CVE-2026-47102", "CVE-2026-40217", "AI Gateway", "RCE", "Supply Chain Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/litellm-vulnerability-chain-lets-low.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "一鍵式攻擊路徑曝光：研究人員揭露 Microsoft 365 Copilot 透過 Bing 服務洩漏敏感資料",
    summary: "Varonis Threat Labs 研究人員發佈「SearchLeak」攻擊路徑，展示了攻擊者如何透過單點點擊，從 Microsoft 365 Copilot Enterprise Search 竊取使用者信箱、行事曆和索引檔案的敏感資料。此漏洞利用了三種組合的缺陷：首先是「參數到提示注入」（Parameter-to-Prompt injection），攻擊者透過 URL 的 `q` 參數植入指令；其次是 Copilot 輸出渲染過程中的時序競爭條件（race condition），在內容安全政策（CSP）執行前觸發惡意請求；最後是利用 Bing 搜尋的「圖片搜尋」端點，將竊取的資料編碼成路徑，繞過頁面 CSP，讓 Bing 成為資料外洩的代理。攻擊者可繼承登入使用者的所有 Graph 權限，竊取包括 MFA 密碼、電子郵件標題和財務資料等高度敏感資訊。雖然 Microsoft 已在後端修復此缺陷，但用戶應監控 Copilot 搜尋 URL 的 `q` 參數，並注意異常發往 Bing 圖片端點的請求，同時應收緊 Copilot 的資料存取治理範圍，限制其索引範圍。",
    tags: ["Microsoft 365 Copilot", "CVE-2026-42824", "參數注入", "內容安全政策", "資料外洩", "Bing 服務"],
    title_en: "One-Click Attack Path Exposed: Researchers Reveal Microsoft 365 Copilot Leaks Sensitive Data via Bing Service",
    summary_en: "Varonis Threat Labs researchers published the \"SearchLeak\" attack path, demonstrating how an attacker can steal sensitive user data—including mailbox, calendar, and indexed files—from Microsoft 365 Copilot Enterprise Search with a single click. This vulnerability exploits a combination of three flaws: first, \"Parameter-to-Prompt injection,\" where an attacker injects commands via the URL's `q` parameter; second, a race condition during Copilot's output rendering process, which triggers malicious requests before Content Security Policy (CSP) enforcement; and finally, the exploitation of Bing Search's \"Image Search\" endpoint to encode the stolen data into a path, bypassing the page CSP and allowing Bing to act as the data exfiltration proxy. Attackers can inherit all Graph permissions of the logged-in user, stealing highly sensitive information such as MFA passwords, email subjects, and financial data. Although Microsoft has patched this flaw on the backend, users should monitor the `q` parameter in Copilot search URLs and watch for anomalous requests directed to the Bing image endpoint. Furthermore, users should tighten Copilot's data access governance scope and limit its indexing range.",
    tags_en: ["Microsoft 365 Copilot", "CVE-2026-42824", "Parameter Injection", "Content Security Policy", "Data Leakage", "Bing Service"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/one-click-microsoft-365-copilot-flaw.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-049",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用未修補的 Oracle PeopleSoft 漏洞與 Check Point VPN 缺陷，攻擊學術與企業網路",
    summary: "本週資安重點涵蓋多個高風險漏洞。首先，駭客組織 ShinyHunters (UNC6240) 利用 Oracle PeopleSoft 的未修補漏洞 (CVE-2026-35273, CVSS 9.8) 進入企業網路，該漏洞涉及關鍵功能缺乏身份驗證，可讓未經授權的攻擊者取得 PeopleSoft Enterprise PeopleTools 的控制權。攻擊活動觀察期間主要針對高等教育領域，並透過 MeshCentral 進行內部偵察和資料外洩。CISA 已將此漏洞列入已知被利用漏洞清單 (KEV)。其次，Check Point 警告其 Remote Access VPN 和 Mobile Access 部署中，使用過時 IKEv1 協定時，存在一個邏輯流程缺陷 (CVE-2026-50751, CVSS 9.3)。此缺陷允許未經身份驗證的遠端攻擊者繞過使用者驗證，建立 VPN 連線。修補建議是立即更新系統，並特別檢查是否使用了過時的 IKEv1 協定。此外，Google 也修補了多個 Chrome 零日漏洞，包括 CVE-2026-11645，提醒用戶保持瀏覽器更新。",
    tags: ["Oracle PeopleSoft", "CVE-2026-35273", "Check Point VPN", "CVE-2026-50751", "CISA", "IKEv1", "資安漏洞"],
    title_en: "Hackers Exploit Unpatched Oracle PeopleSoft Vulnerability and Check Point VPN Flaw to Attack Academic and Enterprise Networks",
    summary_en: "This week's cybersecurity focus covers multiple high-risk vulnerabilities. First, the hacker group ShinyHunters (UNC6240) exploited an unpatched vulnerability in Oracle PeopleSoft (CVE-2026-35273, CVSS 9.8) to gain access to enterprise networks. This vulnerability involves a lack of authentication in a critical function, allowing unauthorized attackers to gain control of PeopleSoft Enterprise PeopleTools. The observed attack activity primarily targeted the higher education sector, involving internal reconnaissance and data exfiltration via MeshCentral. CISA has listed this vulnerability as a Known Exploited Vulnerability (KEV). Second, Check Point warned of a logical flaw (CVE-2026-50751, CVSS 9.3) in its Remote Access VPN and Mobile Access deployments when using the outdated IKEv1 protocol. This flaw allows unauthenticated remote attackers to bypass user authentication and establish a VPN connection. The recommended remediation is to immediately update the system and specifically check for the use of the outdated IKEv1 protocol. Additionally, Google patched multiple Chrome zero-day vulnerabilities, including CVE-2026-11645, reminding users to keep their browsers updated.",
    tags_en: ["Oracle PeopleSoft", "CVE-2026-35273", "Check Point VPN", "CVE-2026-50751", "CISA", "IKEv1", "Cybersecurity Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/weekly-recap-chrome-0-day-unifi.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-050",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Palo Alto 警告：CVE-2026-0257 漏洞遭積極利用，可繞過 GlobalProtect 門戶端安全控制",
    summary: "網路安全公司 Palo Alto Networks 報告，已觀察到未知威脅行為者積極利用一項新揭露的 PAN-OS 漏洞 CVE-2026-0257。此漏洞屬於身分驗證繞過（authentication bypass）缺陷，影響 PAN-OS 的門戶端（portal）和閘道器（gateway）元件，可讓攻擊者建立未經授權的 VPN 連線。該漏洞已在野外被利用，初步活動可追溯至 2026 年 5 月 17 日。美國網路安全基礎設施局（CISA）已將此 CVE-2026-0257 列入已知已利用漏洞清單（KEV），並要求聯邦民用行政部門在 2026 年 6 月 1 日前修復。Palo Alto 建議客戶搜尋 GlobalProtect 日誌，尋找與 PoC 漏洞利用相關的硬編碼客戶端配置值，以偵測潛在入侵。建議用戶應立即採取修補措施，並留意公司發布的 IoCs。",
    tags: ["Palo Alto Networks", "CVE-2026-0257", "PAN-OS", "GlobalProtect", "身分驗證繞過", "CISA KEV"],
    title_en: "Palo Alto Warning: CVE-2026-0257 Vulnerability Actively Exploited, Bypassing GlobalProtect Client Security Controls",
    summary_en: "Cybersecurity firm Palo Alto Networks reported observing unknown threat actors actively exploiting a newly disclosed PAN-OS vulnerability, CVE-2026-0257. This vulnerability is an authentication bypass defect affecting the portal and gateway components of PAN-OS, allowing attackers to establish unauthorized VPN connections. The vulnerability has been exploited in the wild, with initial activity traceable to May 17, 2026. The US Cybersecurity and Infrastructure Security Agency (CISA) has listed CVE-2026-0257 on its Known Exploited Vulnerabilities (KEV) catalog, requiring federal civilian agencies to remediate by June 1, 2026. Palo Alto advises customers to search GlobalProtect logs for hardcoded client configuration values related to PoC exploitation to detect potential intrusions. Users are advised to apply patches immediately and monitor for IoCs released by the company.",
    tags_en: ["Palo Alto Networks", "CVE-2026-0257", "PAN-OS", "GlobalProtect", "Authentication Bypass", "CISA KEV"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/palo-alto-warns-of-active-exploitation.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-051",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ruby Net::IMAP 函式庫存在兩項漏洞：可遭中間人攻擊繞過 TLS 加密與注入任意 IMAP 指令",
    summary: "Ubuntu 宣布 Ruby 的 Net::IMAP 函式庫存在兩項安全漏洞。第一個漏洞（CVE-2026-42246）指出，該函式庫在發出 STARTTLS 指令後，未能正確驗證 TLS 加密是否已啟動，可能導致遠端攻擊者執行中間人攻擊（Man-in-the-Middle, MITM），從而靜默繞過 TLS 加密。第二個漏洞（CVE-2026-42257）則發現，該函式庫未對傳遞給特定指令的字串參數進行充分驗證，可能讓遠端攻擊者注入任意 IMAP 指令。這些漏洞皆來自 Ruby 的 Net::IMAP 函式庫，若未修補，可能導致資料傳輸安全性和系統指令執行風險。建議使用者透過標準系統更新，將相關套件升級至修補版本，以降低安全風險。",
    tags: ["Ruby", "Net::IMAP", "CVE-2026-42246", "CVE-2026-42257", "TLS", "中間人攻擊"],
    title_en: "Two Vulnerabilities Found in Ruby Net::IMAP Library: Susceptible to MITM Bypass of TLS Encryption and Arbitrary IMAP Command Injection",
    summary_en: "Ubuntu announced two security vulnerabilities in the Ruby Net::IMAP library. The first vulnerability (CVE-2026-42246) indicates that the library fails to correctly validate whether TLS encryption has been initiated after sending the STARTTLS command, potentially allowing a remote attacker to execute a Man-in-the-Middle (MITM) attack, thereby silently bypassing TLS encryption. The second vulnerability (CVE-2026-42257) was found because the library does not sufficiently validate string parameters passed to specific commands, potentially allowing a remote attacker to inject arbitrary IMAP commands. Both vulnerabilities originate from the Ruby Net::IMAP library and, if unpatched, could lead to risks concerning data transmission security and system command execution. Users are advised to upgrade the relevant package to a patched version via standard system updates to mitigate security risks.",
    tags_en: ["Ruby", "Net::IMAP", "CVE-2026-42246", "CVE-2026-42257", "TLS", "Man-in-the-Middle Attack"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8431-1", lang: "EN" }
    ]
  },
  {
    id: "20260615-052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "tmux 終端機多工器發現 Use-After-Free 漏洞，可能導致服務崩潰，Ubuntu 發布修補建議",
    summary: "Ubuntu 發布 USN-8428-1，修補一個位於 tmux 終端機多工器中的漏洞。該漏洞源於 tmux 在處理圖片清理時的錯誤，導致了 Use-After-Free（使用後釋放）的記憶體安全問題。理論上，本地攻擊者可以利用此問題，使 tmux 崩潰，進而造成服務拒絕（Denial of Service, DoS）的影響。Ubuntu 建議用戶透過標準系統更新來修復此問題，以降低安全風險。用戶應確保將系統更新至修補後的套件版本，以避免遭受此類本地攻擊。",
    tags: ["tmux", "Use-After-Free", "Denial of Service", "Ubuntu", "終端機多工器", "記憶體漏洞"],
    title_en: "Use-After-Free vulnerability found in tmux terminal multiplexer, potentially causing service crash; Ubuntu releases patch advisory",
    summary_en: "Ubuntu has released USN-8428-1 to patch a vulnerability located in the tmux terminal multiplexer. The vulnerability stems from an error in how tmux handles image cleanup, leading to a Use-After-Free memory safety issue. Theoretically, a local attacker could exploit this issue to crash tmux, resulting in a Denial of Service (DoS) impact. Ubuntu advises users to fix this problem via standard system updates to mitigate security risks. Users should ensure their system is updated to the patched package version to avoid suffering from such local attacks.",
    tags_en: ["tmux", "Use-After-Free", "Denial of Service", "Ubuntu", "terminal multiplexer", "memory vulnerability"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8428-1", lang: "EN" }
    ]
  },
  {
    id: "20260615-053",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CUPS 服務修復多個漏洞：包含本地與遠端任意程式碼執行風險，建議立即更新",
    summary: "本篇公告修復了 CUPS（Common Unix Printing System）服務中的多個安全漏洞。這些漏洞涵蓋了從授權檢查、RSS 通知器處理、到處理工作屬性等各個環節。其中，多個 CVE 編號，例如 CVE-2026-34980 和 CVE-2026-34990，允許遠端或本地攻擊者執行任意程式碼（RCE），或導致服務崩潰（DoS）。具體風險包括：本地攻擊者可能利用不當的用戶名比較機制（CVE-2026-27447）或處理 IPP 服務的漏洞（CVE-2026-34990）來覆寫任意檔案或執行程式碼；遠端攻擊者則可能利用 RSS 通知器（CVE-2026-34978）或頁邊界處理的漏洞（CVE-2026-34980）達到同樣的目標。為確保系統安全，建議所有使用 CUPS 服務的用戶應立即更新到最新的修補版本，以修復這些嚴重的安全缺陷。",
    tags: ["CUPS", "CVE-2026-27447", "CVE-2026-34978", "CVE-2026-34980", "任意程式碼執行", "Denial of Service"],
    title_en: "CUPS Service Patches Multiple Vulnerabilities: Including Local and Remote Arbitrary Code Execution Risks, Immediate Update Recommended",
    summary_en: "This announcement patches multiple security vulnerabilities in the CUPS (Common Unix Printing System) service. These vulnerabilities cover various areas, including authorization checks, RSS notifier processing, and handling job attributes. Several CVE IDs, such as CVE-2026-34980 and CVE-2026-34990, allow remote or local attackers to execute arbitrary code (RCE) or cause service crashes (DoS). Specific risks include: local attackers may exploit improper username comparison mechanisms (CVE-2026-27447) or vulnerabilities in handling IPP services (CVE-2026-34990) to overwrite arbitrary files or execute code; while remote attackers may exploit the RSS notifier (CVE-2026-34978) or vulnerabilities in page boundary processing (CVE-2026-34980) to achieve similar goals. To ensure system security, all users utilizing the CUPS service are advised to immediately update to the latest patched version to fix these critical security flaws.",
    tags_en: ["CUPS", "CVE-2026-27447", "CVE-2026-34978", "CVE-2026-34980", "Arbitrary Code Execution", "Denial of Service"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8405-2", lang: "EN" }
    ]
  },
  {
    id: "20260615-054",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Mesa WebGPU 記憶體分配驗證缺陷：Ubuntu 提醒用戶修補潛在的拒絕服務或任意程式碼執行風險",
    summary: "Ubuntu 提醒用戶，Mesa 函式庫在 WebGPU 模組中存在記憶體分配大小驗證不當的缺陷。此漏洞允許攻擊者在特定情況下利用此問題，導致 Mesa 崩潰，造成拒絕服務（Denial of Service, DoS）。更嚴重的是，攻擊者理論上可能利用此缺陷執行任意程式碼。修補建議是透過標準的系統更新機制，將相關套件升級至最新版本。用戶在更新後必須重新啟動會話，以確保所有必要的修補生效。建議用戶立即執行系統更新，以降低安全風險。",
    tags: ["Mesa", "WebGPU", "記憶體分配", "Denial of Service", "Ubuntu", "漏洞"],
    title_en: "Mesa WebGPU Memory Allocation Validation Flaw: Ubuntu Alerts Users to Potential Denial of Service or Arbitrary Code Execution Risk",
    summary_en: "Ubuntu has alerted users to a flaw in the Mesa library's WebGPU module, specifically an improper validation of memory allocation sizes. This vulnerability could allow an attacker, under certain conditions, to cause a Mesa crash, resulting in a Denial of Service (DoS). More severely, the flaw could theoretically be exploited by an attacker to execute arbitrary code. The recommended fix is to upgrade the relevant packages to the latest version using standard system update mechanisms. Users must restart their session after updating to ensure all necessary patches take effect. Users are advised to perform the system update immediately to mitigate security risks.",
    tags_en: ["Mesa", "WebGPU", "Memory Allocation", "Denial of Service", "Ubuntu", "Vulnerability"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8427-1", lang: "EN" }
    ]
  },
  {
    id: "20260615-055",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 1用戶指南：教您如何透過Mac端檢查系統內容索引進度",
    summary: "本文針對iOS 27 Beta 1用戶，提供了一種檢查系統內容索引進度的實用指南。由於iOS 27徹底重構了系統內容索引機制，以支援改進的Apple Intelligence模型和底層的Apple Foundation Models，首次安裝後系統會進行全面的內容重新索引。雖然系統會在「設定」中顯示「Indexing in Progress」的橫幅，但對於部分用戶，索引過程可能持續數日，且iOS本身無法提供精確的剩餘進度。文章指出，用戶可以透過將iPhone連接到Mac，並在Mac的Console應用程式中，啟用「Include Debug Messages」後，搜尋「spotlight indexing progress」來查看進度百分比（格式為：PipelineCompleteness: XX%）。由於iOS 27仍處於早期開發者測試階段，Apple預計在今年夏天會對索引流程進行多項調整與完善，直到秋季正式發布。",
    tags: ["iOS 27", "Apple Intelligence", "Beta 測試", "Spotlight", "索引進度", "macOS"],
    title_en: "iOS 27 Beta 1 User Guide: How to Check System Content Indexing Progress via Mac",
    summary_en: "This article provides a practical guide for iOS 27 Beta 1 users on how to check the system content indexing progress. Since iOS 27 completely restructured the system content indexing mechanism to support the improved Apple Intelligence models and underlying Apple Foundation Models, the system will perform a comprehensive content re-indexing after the initial installation. Although the system will display an \"Indexing in Progress\" banner in \"Settings,\" for some users, the indexing process may continue for several days, and iOS itself cannot provide an accurate remaining progress percentage. The article points out that users can connect their iPhone to a Mac and, within the Mac's Console application, enable \"Include Debug Messages\" and search for \"spotlight indexing progress\" to view the progress percentage (formatted as: PipelineCompleteness: XX%). Since iOS 27 is still in the early developer testing phase, Apple expects to make multiple adjustments and improvements to the indexing process this summer, until the official release in the fall.",
    tags_en: ["iOS 27", "Apple Intelligence", "Beta Testing", "Spotlight", "Indexing Progress", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/still-seeing-indexing-in-progress-on-ios-27-heres-how-to-check-the-actual-status", lang: "EN" }
    ]
  },
  {
    id: "20260615-056",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 內建「背景聲音」功能與 AirPods Pro 3 結合，提供提升專注力的環境音解決方案",
    summary: "本文介紹了一項隱藏在 iOS 輔助功能（Accessibility）中的「背景聲音」（Background Sounds）功能，並說明其如何與 AirPods Pro 3 的主動降噪（ANC）功能結合，成為提升工作專注力的日常工具。該功能本身已存在多年，但隨著 iOS 18 和 iOS 26 的更新，其可用性與選項大幅提升。特別提到 iOS 18 新增的「Fire」選項，以及 iOS 26 加入的「屋頂雨聲」（Rain on Roof）等新環境音。使用者可以透過控制中心（Control Center）開啟或關閉此功能，並可自訂等化器（EQ）以達到最佳效果。這項組合為用戶提供了一種強大的環境噪音過濾系統，幫助使用者有效隔絕周遭干擾，提升工作效率。修補建議方面，文章未提及任何安全漏洞，僅為功能使用指南。",
    tags: ["iOS", "AirPods Pro 3", "背景聲音", "Accessibility", "ANC", "iOS 18", "環境音"],
    title_en: "iOS Built-in 'Background Sounds' Feature Combined with AirPods Pro 3 Offers an Environmental Sound Solution for Enhanced Focus",
    summary_en: "This article introduces the 'Background Sounds' feature, which is hidden within iOS Accessibility, and explains how it can be combined with the Active Noise Cancellation (ANC) of the AirPods Pro 3 to become a daily tool for improving work focus. Although this feature has existed for years, its usability and options have been significantly enhanced with the updates in iOS 18 and iOS 26. Special mention is made of the new 'Fire' option added in iOS 18, and new environmental sounds like 'Rain on Roof' introduced in iOS 26. Users can toggle this feature on or off via the Control Center and can customize the equalizer (EQ) for optimal effect. This combination provides users with a powerful environmental noise filtering system, helping them effectively block out surrounding distractions and boost work efficiency. Regarding patch recommendations, the article does not mention any security vulnerabilities; it is purely a feature usage guide.",
    tags_en: ["iOS", "AirPods Pro 3", "Background Sounds", "Accessibility", "ANC", "iOS 18", "Environmental Sound"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/this-hidden-ios-feature-is-my-daily-go-to-when-using-airpods-pro-3", lang: "EN" }
    ]
  },
  {
    id: "20260615-057",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 預覽版將引入互動式放大鏡「Easter Egg」，延續 Liquid Glass 設計風格",
    summary: "本文介紹 Apple 在 iOS 27 作業系統中加入一個互動式的「放大鏡」（loupe）功能，該功能被視為一個趣味的 Easter Egg。這個設計元素源自於 Preview App 的歷史，該 App 最初在 Mac 上推出時就以放大鏡圖標為特色。去年，Apple 已將 Preview App 帶到 iPadOS 26 和 iOS 26，但只有 iPad 版本具備互動式放大鏡。今年，iOS 27 將把此互動功能帶到手機版，讓使用者可以拖動放大鏡，觀察其下方文字和內容會產生扭曲和反應。此更新屬於系統介面與用戶體驗的優化，而非安全修補。建議使用者留意 Apple 官方發布的 iOS 27 完整功能與操作指南。",
    tags: ["iOS 27", "Apple", "Preview App", "Liquid Glass", "Easter Egg", "iPadOS"],
    title_en: "iOS 27 Preview will introduce interactive loupe 'Easter Egg', continuing the Liquid Glass design style",
    summary_en: "This article introduces an interactive 'loupe' feature added to the iOS 27 operating system by Apple, which is considered a fun Easter Egg. This design element originates from the history of the Preview App, which featured a loupe icon when it was first launched on Mac. Last year, Apple brought the Preview App to iPadOS 26 and iOS 26, but only the iPad version had the interactive loupe. This year, iOS 27 will bring this interactive function to the mobile version, allowing users to drag the loupe to observe the text and content beneath it distort and react. This update is an optimization of the system interface and user experience, not a security patch. Users are advised to monitor official Apple releases for the complete iOS 27 features and operation guides.",
    tags_en: ["iOS 27", "Apple", "Preview App", "Liquid Glass", "Easter Egg", "iPadOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/preview-on-ios-27-inherits-fun-liquid-glass-easter-egg-from-ipados-26", lang: "EN" }
    ]
  },
  {
    id: "20260615-058",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 說明 macOS 26.4 終端機（Terminal）新增安全警告機制，防止用戶貼入惡意指令",
    summary: "Apple 發布支援文件說明 macOS 26.4 引入的終端機（Terminal）安全功能。此功能旨在保護用戶免受透過終端機貼入的惡意程式碼或指令攻擊。當用戶從網站、聊天應用程式或電子郵件等外部來源複製指令並嘗試貼入時，系統會彈出警告，提醒用戶貼入的內容可能包含惡意軟體。此外，若系統偵測到指令或腳本包含已知惡意，會顯示「Malware Detected, Paste Blocked」或「Malicious Script Blocked」警告，此時無法繼續貼入。Apple 建議，如果用戶認為被阻擋的指令是因網站被錯誤報告為欺騙性內容，可以透過文件中的機制回報錯誤。此安全機制旨在提升系統安全性，但其觸發條件可能因用戶使用習慣而有所變化。",
    tags: ["macOS", "Terminal", "Apple", "安全功能", "惡意軟體", "macOS 26.4"],
    title_en: "Apple announces security warning mechanism in macOS 26.4 Terminal to prevent pasting of malicious commands",
    summary_en: "Apple has released supporting documentation detailing the security feature introduced in macOS 26.4 Terminal. This feature is designed to protect users from malicious code or commands pasted into Terminal. When a user copies commands from external sources such as websites, chat applications, or emails and attempts to paste them, the system will display a warning, alerting the user that the pasted content may contain malware. Furthermore, if the system detects that the command or script contains known malicious content, it will display a \"Malware Detected, Paste Blocked\" or \"Malicious Script Blocked\" warning, preventing the paste operation. Apple suggests that if a user believes the blocked command was due to a website being incorrectly reported as deceptive content, they can report the error through the documentation's mechanism. While this security mechanism aims to enhance system safety, its triggering conditions may vary depending on user habits.",
    tags_en: ["macOS", "Terminal", "Apple", "Security Feature", "Malware", "macOS 26.4"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/apple-reveals-why-macos-might-block-your-terminal-prompt", lang: "EN" }
    ]
  },
  {
    id: "20260615-059",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 為 macOS Sonoma 與 macOS Sequoia 發布第二波 Release Candidate，提供重要安全修補",
    summary: "Apple 近期發布了多個開發者測試版，包括 iOS 26.6、iPadOS 26.6 等。除了最新的 macOS Tahoe 26.6 之外，Apple 還為較舊的 macOS 版本——macOS Sonoma 14.8.8 (23J607) 和 macOS Sequoia 15.7.8 (24G809) 發布了第二波 Release Candidates (RC)。這兩版本是在五月二十六日首次發布 RC 後，又進行的第二次 RC 更新。發布說明指出，這些更新主要提供「重要的安全修補」，旨在支持那些無法或選擇不升級到最新 macOS 版本的用戶。這顯示 Apple 正在持續為舊版系統提供安全支援，讓用戶能延長使用壽命。文章推測，這些 RC 版本可能在未來幾天內正式發布，可能與 iOS 26.5.2 等版本一同推送。",
    tags: ["Apple", "macOS", "macOS Sonoma", "macOS Sequoia", "Release Candidate", "安全修補"],
    title_en: "Apple Releases Second Wave of Release Candidates for macOS Sonoma and macOS Sequoia, Providing Critical Security Patches",
    summary_en: "Apple recently released multiple developer betas, including iOS 26.6 and iPadOS 26.6. In addition to the latest macOS Tahoe 26.6, Apple has also released a second wave of Release Candidates (RC) for older macOS versions—macOS Sonoma 14.8.8 (23J607) and macOS Sequoia 15.7.8 (24G809). These are the second RC updates following the initial release on May 26th. The release notes indicate that these updates primarily provide “important security patches,” aiming to support users who cannot or choose not to upgrade to the latest macOS version. This demonstrates Apple's continued commitment to providing security support for older systems, allowing users to extend the lifespan of their devices. It is speculated that these RC versions may be officially released in the coming days, potentially bundled with versions like iOS 26.5.2.",
    tags_en: ["Apple", "macOS", "macOS Sonoma", "macOS Sequoia", "Release Candidate", "Security Patch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/apple-rolls-out-rc-builds-for-upcoming-macos-sonoma-and-macos-sequoia-updates", lang: "EN" }
    ]
  },
  {
    id: "20260615-060",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 預計推出 iOS 26.5.2 錯誤修復更新，持續優化 iPhone 系統穩定性",
    summary: "本文報導指出，儘管業界關注焦點已轉向 iOS 27，但目前用戶仍主要使用 iOS 26 系統。Apple 正在準備並內部測試一個名為 iOS 26.5.2 的錯誤修復更新。此版本預計將包含進一步的系統 Bug 修復與微調。此前，Apple 已於上月發布了 iOS 26.5，引入了 RCS 訊息的端到端加密、新的 Pride Luminance 壁紙和 Apple 地圖的建議地點功能。此外，iOS 26.5.1 更早修復了影響 iPhone Air 和 iPhone 17 機型的充電問題。開發者目前也正在測試 iOS 26.6 的第二個 Beta 版本，而 iOS 27 的第二個 Beta 版本預計將在本週或下週推出，公眾 Beta 版本則預計於七月。此更新旨在確保現有用戶能獲得穩定的系統體驗。",
    tags: ["Apple", "iOS 26.5.2", "iOS 26", "Bug Fix", "iPhone"],
    title_en: "Apple expected to release iOS 26.5.2 bug fix update, continuing to optimize iPhone system stability",
    summary_en: "This article reports that although industry focus has shifted to iOS 27, users are currently still primarily using the iOS 26 system. Apple is preparing and internally testing a bug fix update named iOS 26.5.2. This version is expected to include further system bug fixes and fine-tuning. Previously, Apple released iOS 26.5 last month, which introduced end-to-end encryption for RCS messaging, a new Pride Luminance wallpaper, and suggested locations for Apple Maps. Furthermore, iOS 26.5.1 earlier fixed charging issues affecting the iPhone Air and iPhone 17 models. Developers are currently also testing the second Beta version of iOS 26.6, while the second Beta version of iOS 27 is expected to be released this week or next, with the public Beta version anticipated in July. This update aims to ensure that existing users receive a stable system experience.",
    tags_en: ["Apple", "iOS 26.5.2", "iOS 26", "Bug Fix", "iPhone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/ios-26-5-2-update-likely-coming-soon-for-iphone-users", lang: "EN" }
    ]
  },
  {
    id: "20260615-061",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 推出 macOS Tahoe、iPadOS 等 26.6 Beta 版本，著重於修復與效能優化",
    summary: "Apple 正在持續為其現有的作業系統系列推出開發者 Beta 版本。本次滾動更新涵蓋了 iPadOS 26.6、macOS Tahoe 26.6、tvOS 26.6、watchOS 26.6、visionOS 26.6 以及 HomePod 26.6 等多個版本。與新功能發布不同，26.6 週期主要著重於系統的 Bug 修復與效能提升。目前觀察到的主要變動，僅是在用戶嘗試達到聯絡人封鎖上限時，會出現新的警示提示。這類 Beta 版本通常用於開發者進行測試，用戶應謹慎評估是否需要升級。建議開發者持續關注 Apple 官方的正式發布公告，以確保系統穩定性。",
    tags: ["Apple", "macOS Tahoe", "iPadOS", "watchOS", "tvOS", "Beta 版"],
    title_en: "Apple Releases macOS Tahoe, iPadOS, and Other 26.6 Beta Versions, Focusing on Bug Fixes and Performance Optimization",
    summary_en: "Apple continues to release developer Beta versions for its existing operating system lineup. This rolling update covers multiple versions, including iPadOS 26.6, macOS Tahoe 26.6, tvOS 26.6, watchOS 26.6, visionOS 26.6, and HomePod 26.6. Unlike new feature releases, the 26.6 cycle primarily focuses on system bug fixes and performance enhancements. The main change currently observed is a new alert prompt that appears when users attempt to reach the contact blocker limit. Since these Beta versions are typically used by developers for testing, users should carefully evaluate whether an upgrade is necessary. Developers are advised to continue monitoring official Apple release announcements to ensure system stability.",
    tags_en: ["Apple", "macOS Tahoe", "iPadOS", "watchOS", "tvOS", "Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/macos-26-6-beta-2-rolling-out-now-plus-ipados-26-6-watchos-26-6-tvos-26-6-more", lang: "EN" }
    ]
  },
  {
    id: "20260615-062",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 26.6 開發者 Beta 2，預計為下一批出貨版本",
    summary: "本文報導 Apple 發布了 iOS 26.6 的第二個開發者 Beta 版本。此更新是在首次開發者 Beta 和五月份的公開 Beta 之後發布的。目前已發現的變動包括提高聯絡人封鎖數量限制，以及新增了防盜 iPhone 功能。雖然開發者和市場的焦點已轉向 iOS 27，但 iOS 26.6 仍將是下一批送貨的穩定版本，基於 iOS 26 的基礎。文章指出，iOS 26.6 的發布時間比 Apple 過去的發布週期提前了。開發者應關注此版本的功能調整，並留意 Apple 預計於九月推出的 iOS 27 重大軟體更新。",
    tags: ["Apple", "iOS 26.6", "Beta 版本", "iOS 27", "作業系統更新", "Apple 生態系"],
    title_en: "Apple Releases iOS 26.6 Developer Beta 2, Expected for Next Shipment",
    summary_en: "This article reports that Apple has released the second developer Beta version of iOS 26.6. This update follows the initial developer Beta and the public Beta released in May. Changes discovered so far include increased limits on blocked contacts and the addition of a 'Stolen iPhone' feature. Although developer and market focus has shifted to iOS 27, iOS 26.6 will remain the stable version for the next shipment, built upon iOS 26. The article notes that the release timing of iOS 26.6 is ahead of Apple's typical release cycle. Developers should pay attention to the feature adjustments in this version and keep an eye on the major software update, iOS 27, which Apple is expected to launch in September.",
    tags_en: ["Apple", "iOS 26.6", "Beta Version", "iOS 27", "Operating System Update", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/apple-releases-ios-26-6-beta-2-for-iphone-heres-what-to-expect", lang: "EN" }
    ]
  },
  {
    id: "20260615-063",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 系統更新：新增 Liquid Glass 透明度滑桿，提供更精細的介面自訂選項",
    summary: "本文介紹 iOS 27 版本在使用者介面設計上的更新，特別是針對 Apple 系統級的 Liquid Glass 設計。相較於 iOS 26 僅提供「透明 (Clear)」和「帶色 (Tinted)」兩種選擇，iOS 27 透過在「設定 (Settings)」>「外觀 (Appearance)」中新增一個滑桿，讓使用者可以更精細地調整 Liquid Glass 元素的透明度和色調。這個滑桿允許使用者在整個透明度與色調的連續光譜上設定任何偏好點，從極度透明到極度帶色。這項功能旨在提升使用者對系統介面的個人化控制，讓使用者可以根據個人偏好，調整 App Store、Apple Podcasts 等系統元件的視覺呈現效果。目前該功能已準備好發布，為 iOS 27 的主要視覺亮點之一。",
    tags: ["iOS 27", "Apple", "Liquid Glass", "系統介面", "使用者體驗"],
    title_en: "iOS 27 System Update: Introducing Liquid Glass Transparency Slider for Finer Interface Customization",
    summary_en: "This article introduces the UI design updates in iOS 27, specifically focusing on the system-level Liquid Glass design. Compared to iOS 26, which only offered 'Clear' and 'Tinted' options, iOS 27 adds a slider within 'Settings' > 'Appearance'. This allows users to fine-tune the transparency and hue of Liquid Glass elements. This slider enables users to set any preferred point across a continuous spectrum of transparency and hue, ranging from extremely transparent to highly tinted. This feature aims to enhance users' personalized control over the system interface, allowing them to adjust the visual appearance of system components like the App Store and Apple Podcasts according to personal preference. This feature is currently ready for release and is one of the main visual highlights of iOS 27.",
    tags_en: ["iOS 27", "Apple", "Liquid Glass", "System Interface", "User Experience"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/ios-27-adds-new-liquid-glass-slider-on-iphone-heres-what-it-lets-you-do", lang: "EN" }
    ]
  },
  {
    id: "20260615-064",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 18 Pro 傳聞升級：預計搭載可變光圈主鏡、廣角望遠鏡及專業級軟體功能",
    summary: "根據市場傳聞，下一代 iPhone 18 Pro 將帶來顯著的相機硬體升級。主要的升級點包括：主鏡頭預計採用可變光圈（variable aperture），這項功能若實裝成功，將極大地提升用戶對照片景深和焦段的控制能力，並可能優化人像模式和低光拍攝表現。此外，望遠鏡（Telephoto）相機預計將獲得更大的光圈，以改善其在低光環境下的拍攝性能。在軟體層面，蘋果也計畫為其相機應用程式進行升級，使其功能更接近專業級相機，並可能推出 Pro 專屬的軟體功能，例如改進的相機控制按鈕。這些升級預計將使 iPhone 18 Pro 的相機功能達到新的高度，但目前文章未提供具體的版本號或發布日期，僅為市場預測。",
    tags: ["iPhone 18 Pro", "可變光圈", "望遠鏡", "Apple 相機", "iOS", "硬體升級"],
    title_en: "iPhone 18 Pro Rumored Upgrade: Expected to Feature Variable Aperture Main Lens, Wide-Angle Telephoto, and Professional Software Functions",
    summary_en: "According to market rumors, the next-generation iPhone 18 Pro is expected to bring significant camera hardware upgrades. Key upgrades include: the main lens is rumored to adopt a variable aperture, a feature that, if successfully implemented, will greatly enhance users' control over photo depth and focal length, potentially optimizing portrait mode and low-light shooting performance. Furthermore, the telephoto camera is expected to receive a larger aperture to improve its shooting performance in low-light environments. On the software front, Apple also plans to upgrade its camera application to make its functions closer to professional cameras, and may introduce Pro-exclusive software features, such as improved camera control buttons. These upgrades are expected to elevate the iPhone 18 Pro's camera capabilities to new heights, but the article currently provides no specific version numbers or release dates, and remains purely market speculation.",
    tags_en: ["iPhone 18 Pro", "Variable Aperture", "Telephoto", "Apple Camera", "iOS", "Hardware Upgrade"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/iphone-18-pro-three-new-camera-upgrades-are-coming", lang: "EN" }
    ]
  },
  {
    id: "20260615-065",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 18 Pro 預測採用鋁合金機身，預期與 iPhone 17 Pro 相似，具備散熱優勢但易留刮痕",
    summary: "根據洩密資訊，預計 Apple 的 iPhone 18 Pro 系列將繼續採用鋁合金機身，而非更早的鈦金屬。此材質被認為具有良好的散熱效果和耐用性。然而，與 iPhone 17 Pro 的經驗相似，鋁合金機身雖然堅固，但更容易出現刮痕和磨損，特別是在相機平台周圍的凸起邊緣。Apple 曾解釋 iPhone 17 Pro 上的瑕疵，指出部分痕跡是來自店內 MagSafe 支架的材料轉移，而非真正的刮傷，且這些痕跡是可清除的。因此，用戶應預期 iPhone 18 Pro 在美觀度方面，可能會沿用鋁合金的特性，即易受日常磨損影響。目前預計 iPhone 18 Pro 將提供四種顏色選擇。",
    tags: ["iPhone 18 Pro", "iPhone 17 Pro", "鋁合金", "Apple", "機身設計", "MagSafe"],
    title_en: "iPhone 18 Pro Predicted to Use Aluminum Body, Expected to Be Similar to iPhone 17 Pro, Offering Heat Dissipation Advantages but Prone to Scratches",
    summary_en: "According to leaked information, Apple's iPhone 18 Pro series is expected to continue using an aluminum alloy body, rather than the earlier titanium material. This material is considered to have good heat dissipation and durability. However, similar to the experience with the iPhone 17 Pro, while the aluminum alloy body is sturdy, it is more susceptible to scratches and wear, especially on the protruding edges around the camera module. Apple previously explained the imperfections on the iPhone 17 Pro, pointing out that some marks were due to material transfer from in-store MagSafe stands, rather than actual scratches, and that these marks are removable. Therefore, users should anticipate that the iPhone 18 Pro may maintain the characteristic of aluminum alloy, which is susceptible to daily wear and tear. Currently, the iPhone 18 Pro is expected to offer four color options.",
    tags_en: ["iPhone 18 Pro", "iPhone 17 Pro", "Aluminum Alloy", "Apple", "Body Design", "MagSafe"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/iphone-18-pro-casing-likely-to-experience-same-pros-cons-as-its-predecessor", lang: "EN" }
    ]
  },
  {
    id: "20260615-066",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 開發者測試版初體驗：深入探討新版系統的穩定性與功能亮點",
    summary: "本文以個人體驗的角度，討論了安裝 iOS 27 開發者測試版（developer beta）的過程與感受。作者指出，對於一般使用者而言，在日常使用的設備上安裝開發者測試版通常是極不推薦的行為，因為系統穩定性尚未經過充分檢驗。然而，由於作者的 iPhone 是唯一具備使用新版 Siri 功能的設備，作者決定例外嘗試。這篇文章主要著重於分享初次接觸新版 iOS 系統的個人觀察，而非技術漏洞或重大安全事件。對於希望了解新功能或測試系統的開發者，建議做好心理準備，並理解開發者測試版本質上仍處於不穩定的階段。",
    tags: ["iOS 27", "Apple", "開發者測試版", "Beta 版", "Siri", "macOS"],
    title_en: "First Impressions of iOS 27 Developer Beta: A Deep Dive into Stability and New Features",
    summary_en: "From a personal experience perspective, this article discusses the process and feelings associated with installing the iOS 27 developer beta. The author points out that for general users, installing a developer beta on a daily-use device is generally highly discouraged because the system stability has not been fully tested. However, because the author's iPhone is the only device capable of using the new Siri features, they decided to try it anyway. This article primarily focuses on sharing personal observations upon first encountering the new iOS system, rather than technical vulnerabilities or major security incidents. For developers who wish to learn about new features or test the system, it is recommended to be mentally prepared and understand that the developer beta version is inherently still in an unstable phase.",
    tags_en: ["iOS 27", "Apple", "Developer Beta", "Beta", "Siri", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/the-stability-of-the-first-ios-27-developer-beta-tells-its-own-story", lang: "EN" }
    ]
  },
  {
    id: "20260615-067",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果Mac與Intel合作歷史回顧：從Marklar專案到macOS 26的終章",
    summary: "本文回顧了Apple Mac與Intel處理器合作的歷史軌跡。Mac OS X最初在PowerPC處理器上運行，直到2000年，一位Apple工程師提出了一個讓Mac OS X能在Intel處理器上運行的專案，代號為「Project Marklar」。這項技術的發展，標誌著Mac進入了使用Intel晶片的時代。文章指出，雖然最新的macOS 27將會發布，但運行macOS 26的最後一批Intel Mac型號，仍將有兩年的安全和Safari更新支援。然而，macOS 26被定位為Intel Mac時代的「終章」，之後的任何發展都屬於尾聲或後記。這顯示了Apple平台正在逐步從Intel架構過渡到Apple Silicon，並持續優化兼容性層（如Rosetta）。",
    tags: ["Apple Silicon", "Intel Mac", "macOS", "Project Marklar", "Rosetta", "Apple 平台"],
    title_en: "A Retrospective of Apple Mac and Intel's Collaboration: From Project Marklar to the Final Chapter of macOS 26",
    summary_en: "This article reviews the historical trajectory of the collaboration between Apple Mac and Intel processors. Mac OS X originally ran on PowerPC processors until, in 2000, an Apple engineer proposed a project, codenamed \"Project Marklar,\" that allowed Mac OS X to run on Intel processors. The development of this technology marked Mac's entry into the era of using Intel chips. The article points out that although the latest macOS 27 will be released, the final batch of Intel Mac models running macOS 26 will still receive two years of security and Safari updates. However, macOS 26 is positioned as the \"final chapter\" of the Intel Mac era, with any subsequent developments being considered epilogues or afterthoughts. This demonstrates that the Apple platform is gradually transitioning from the Intel architecture to Apple Silicon, while continuously optimizing compatibility layers (such as Rosetta).",
    tags_en: ["Apple Silicon", "Intel Mac", "macOS", "Project Marklar", "Rosetta", "Apple 平台"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/06/20-years-of-intel-macs-why-apple-switched-and-why-it-switched-again", lang: "EN" }
    ]
  },
  {
    id: "20260615-068",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "HTTP/2 Bomb 攻擊威脅：CVE-2026-49975 曝露核心網頁技術，恐癱瘓電信與醫療等產業",
    summary: "本篇報導揭露「HTTP/2 Bomb」攻擊，利用 HTTP/2 協議的兩個設計功能（HPACK 和 flow control）進行放大式阻斷服務（DoS）攻擊。該漏洞無需身份驗證，並被評估為高嚴重性（CVSS 7.5）。攻擊者可透過發送連續的微小請求，迫使伺服器創建大型標頭結構，並同時阻斷伺服器回傳回應的能力，導致伺服器耗盡記憶體。受影響範圍極廣，初期掃描顯示超過 88 萬個網站支援 HTTP/2，且運行 Nginx、Apache httpd、Microsoft IIS、Envoy 和 Cloudflare Pingora 等伺服器。雖然廠商已發布修補程式，但部署不均勻，特別是 Cloudflare 尚未修補。建議所有運行網際網路服務的組織應立即修補，特別是電信、IT 和醫療等高度依賴網際網路連線的產業。",
    tags: ["HTTP/2 Bomb", "CVE-2026-49975", "DoS 攻擊", "HTTP/2", "Nginx", "Apache httpd", "電信產業"],
    title_en: "HTTP/2 Bomb Attack Threat: CVE-2026-49975 Exposes Core Web Technology, Potentially Paralyzing Telecom and Healthcare Industries",
    summary_en: "This report reveals the \"HTTP/2 Bomb\" attack, which utilizes two design features of the HTTP/2 protocol (HPACK and flow control) to execute an amplified Denial-of-Service (DoS) attack. The vulnerability requires no authentication and is assessed as high severity (CVSS 7.5). Attackers can send continuous, minute requests, forcing the server to create large header structures while simultaneously blocking the server's ability to return responses, leading to memory exhaustion. The affected scope is extremely wide; initial scans show over 880,000 websites supporting HTTP/2, running servers such as Nginx, Apache httpd, Microsoft IIS, Envoy, and Cloudflare Pingora. Although vendors have released patches, deployment is uneven, particularly with Cloudflare not yet patching. It is recommended that all organizations running internet services patch immediately, especially industries highly dependent on internet connectivity, such as telecommunications, IT, and healthcare.",
    tags_en: ["HTTP/2 Bomb", "CVE-2026-49975", "DoS Attack", "HTTP/2", "Nginx", "Apache httpd", "Telecommunications Industry"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8398-3", lang: "EN" },
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/http-2-bomb-attacks-telcos-healthcare", lang: "EN" }
    ]
  },
  {
    id: "20260615-069",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露：Microsoft 365 Copilot 透過三階段鏈式漏洞，可將敏感資料竊取至攻擊者伺服器",
    summary: "安全公司 Varonis 研究團隊發現了名為 SearchLeak 的嚴重漏洞鏈，影響 Microsoft 365 Copilot Enterprise。該漏洞允許攻擊者透過精心設計的 URL，在受害者點擊連結後，竊取其信箱、OneDrive 或 SharePoint 中的敏感資料。攻擊鏈結合了三個缺陷：首先是參數到提示注入（P2P injection），利用 Copilot Search 的 'q' 參數發起搜索指令；接著是 HTML 渲染競態條件（race condition），讓惡意 HTML 在內容清理前執行；最後是 Bing 搜尋功能中的服務端請求偽造（SSRF）問題，使 Bing 成為未知的資料外洩代理。攻擊者可將竊取的資料嵌入 URL，透過 Bing 請求的日誌被讀取。Microsoft 已針對此漏洞分配了 CVE-2026-42824，並已修復。Varonis 提醒，AI 系統的出現，使得傳統的漏洞類別（如 SSRF 和注入）可以在更具影響力的情境下被武器化。",
    tags: ["Microsoft 365 Copilot", "CVE-2026-42824", "參數注入", "SSRF", "資料外洩", "AI 安全"],
    title_en: "Research Reveals: Microsoft 365 Copilot Can Exfiltrate Sensitive Data to Attacker Server via Three-Stage Chain Vulnerability",
    summary_en: "The security company Varonis research team discovered a critical vulnerability chain, dubbed SearchLeak, affecting Microsoft 365 Copilot Enterprise. This vulnerability allows an attacker to exfiltrate sensitive data from a victim's mailbox, OneDrive, or SharePoint by having them click a specially crafted URL. The attack chain combines three defects: first, Parameter-to-Prompt injection (P2P injection), which leverages the 'q' parameter in Copilot Search to initiate a search command; second, an HTML rendering race condition, which allows malicious HTML to execute before content sanitization; and finally, a Server-Side Request Forgery (SSRF) issue within Bing Search, making Bing an unknown data leakage proxy. Attackers can embed the stolen data into the URL, which is then read through the Bing request logs. Microsoft has assigned CVE-2026-42824 to this vulnerability and has since patched it. Varonis warns that the emergence of AI systems allows traditional vulnerability types (such as SSRF and injection) to be weaponized in more impactful scenarios.",
    tags_en: ["Microsoft 365 Copilot", "CVE-2026-42824", "Parameter Injection", "SSRF", "Data Leakage", "AI Security"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-attack-turned-microsoft-365-copilot-into-1-click-data-theft-tool", lang: "EN" }
    ]
  },
  {
    id: "20260615-070",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安業者揭露：動態桌布Chrome擴充套件家族暗藏追蹤功能，竊取用戶瀏覽行為與個人資料",
    summary: "資安業者 Socket 近日揭露了一批具有隱私風險的 Chrome 擴充套件家族。這些套件表面上聲稱提供動態桌布功能，並在商店頁面宣稱不會收集用戶資料，但實際上卻在後臺進行用戶行為追蹤。經調查，這些擴充套件會記錄用戶的 IP 位址、ISP、點擊次數以及引薦來源等敏感資訊，並將這些資料提供給第三方廣告合作夥伴。更令人擔憂的是，部分套件甚至會操縱 Google 搜尋流量，將擴充套件的流量偽裝成 Google 搜尋點擊，以影響廣告點擊追蹤的統計數據。Socket 在 Chrome 網站商店發現了 152 個這類擴充套件，這些套件共用相同的程式碼架構與後端基礎設施，並透過三個不同的品牌網域發布。為保護用戶隱私，Socket 建議用戶移除所有來自這些來源的擴充套件，並檢查搜尋引擎設定是否恢復到原始狀態。",
    tags: ["Chrome 擴充套件", "隱私洩露", "用戶追蹤", "Socket", "廣告追蹤", "第三方元件漏洞"],
    title_en: "Cybersecurity Firm Reveals: Dynamic Wallpaper Chrome Extension Family Conceals Tracking Functions, Stealing User Browsing Behavior and Personal Data",
    summary_en: "Cybersecurity firm Socket recently exposed a family of Chrome extensions with privacy risks. While these extensions superficially claim to provide dynamic wallpaper functionality and state on their store pages that they do not collect user data, they are actually tracking user behavior in the background. Investigations revealed that these extensions record sensitive information such as the user's IP address, ISP, click count, and referral source, and provide this data to third-party advertising partners. More concerningly, some extensions even manipulate Google search traffic, disguising the extension's traffic as Google search clicks to skew advertising click tracking statistics. Socket found 152 such extensions in the Chrome Web Store. These extensions share the same code architecture and backend infrastructure, and are distributed through three different brand domains. To protect user privacy, Socket advises users to remove all extensions from these sources and check that their search engine settings have been restored to their original state.",
    tags_en: ["Chrome Extensions", "Privacy Leakage", "User Tracking", "Socket", "Ad Tracking", "Third-Party Component Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176609", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-071",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "SLSA框架揭示Mini Shai-Hulud攻擊：有效簽章無法保證供應鏈安全",
    summary: "本文分析Mini Shai-Hulud NPM供應鏈攻擊事件，指出攻擊者利用GitHub Actions工作流程缺陷，結合快取污染與OIDC權杖擷取，透過合法CI/CD管線發布惡意NPM套件。攻擊最初波及TanStack等命名空間，後續擴散至Mistralai、UiPath等，影響數百個套件。儘管這些惡意套件帶有密碼學層面的有效來源證明（provenance attestation）和簽章，但SLSA框架指出，問題不在於證明本身造假，而是產生證明所使用的建置平臺（GitHub Actions）已被攻擊者利用。SLSA建議，單看有效簽章不足以判斷安全，企業必須確保建置平臺達到SLSA Build L3級別，具備環境隔離能力，防止快取污染和權杖洩露。此外，開發者應實施最小權限原則，並監控工作流程失敗卻仍完成發布等異常行為。",
    tags: ["SLSA", "NPM", "供應鏈安全", "GitHub Actions", "OIDC權杖", "開源專案"],
    title_en: "SLSA Framework Reveals Mini Shai-Hulud Attack: Valid Signatures Cannot Guarantee Supply Chain Security",
    summary_en: "This article analyzes the Mini Shai-Hulud NPM supply chain attack, pointing out that attackers exploited flaws in GitHub Actions workflows, combining cache poisoning with OIDC token theft to publish malicious NPM packages through legitimate CI/CD pipelines. The attack initially affected namespaces like TanStack, subsequently spreading to Mistralai, UiPath, and impacting hundreds of packages. Although these malicious packages carried cryptographically valid provenance attestation and signatures, the SLSA framework points out that the problem is not that the proof itself was forged, but that the build platform used to generate the proof (GitHub Actions) was compromised by the attacker. SLSA suggests that relying solely on valid signatures is insufficient for determining security; enterprises must ensure that the build platform achieves SLSA Build L3 level, possessing environmental isolation capabilities to prevent cache poisoning and token leakage. Furthermore, developers should implement the principle of least privilege and monitor for anomalous behaviors, such as successful publication despite workflow failures.",
    tags_en: ["SLSA", "NPM", "Supply Chain Security", "GitHub Actions", "OIDC Token", "Open Source Projects"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176596", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-072",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Arch Linux AUR供應鏈遭攻擊：惡意套件接手竄改建置腳本，透過NPM下載惡意酬載",
    summary: "軟體供應鏈安全業者Sonatype揭露，Arch Linux的社群套件庫AUR遭遇供應鏈攻擊。攻擊者鎖定無人維護的AUR套件，接手後竄改PKGBUILD或安裝指令，使使用者在建置或安裝套件時，透過NPM下載惡意套件atomic-lockfile，進而執行Linux惡意酬載。初步估計受影響套件總數可能接近1,500個，且攻擊活動持續擴大。惡意程式主要目標是開發者工作站與建置環境，可竊取Slack、Teams等協作軟體資料，以及GitHub、NPM、HashiCorp Vault權杖、SSH金鑰、Docker/Podman憑證等敏感憑證。NPM安全團隊已移除惡意套件atomic-lockfile 1.4.2版，並建議所有曾執行相關酬載的主機，應視為憑證外洩，全面輪替所有帳號憑證、權杖與金鑰。Arch Linux社群正持續重設或刪除惡意提交，並封鎖涉案帳號。",
    tags: ["Arch Linux", "AUR", "Sonatype", "NPM", "供應鏈攻擊", "惡意酬載", "PKGBUILD"],
    title_en: "Arch Linux AUR Supply Chain Attacked: Malicious Packages Hijack Build Scripts and Download Malicious Payloads via NPM",
    summary_en: "Software supply chain security firm Sonatype revealed that the Arch Linux community repository, AUR, was targeted by a supply chain attack. Attackers focused on unmaintained AUR packages, hijacking them to modify PKGBUILD or installation scripts. This causes users, during package building or installation, to download the malicious package `atomic-lockfile` via NPM, subsequently executing a Linux malicious payload. It is preliminarily estimated that the total number of affected packages may approach 1,500, and the attack activity is continuously expanding. The malicious code primarily targets developer workstations and build environments, capable of stealing sensitive credentials such as data from collaboration software like Slack and Teams, as well as tokens and keys from GitHub, NPM, HashiCorp Vault, SSH keys, and Docker/Podman credentials. The NPM security team has removed the malicious package `atomic-lockfile` version 1.4.2, and advises all machines that executed the related payload to be treated as compromised, requiring a full rotation of all account credentials, tokens, and keys. The Arch Linux community is continuously resetting or deleting malicious submissions and blocking involved accounts.",
    tags_en: ["Arch Linux", "AUR", "Sonatype", "NPM", "Supply Chain Attack", "Malicious Payload", "PKGBUILD"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176592", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-073",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Dynatrace GitHub儲存庫遭外洩：駭客利用PAT竊取246個儲存庫，包含內部基礎架構與員工資料",
    summary: "資安公司 Dynatrace 近期傳出其GitHub儲存庫遭到駭客入侵，駭客代號 xpI0itrs 在駭客論壇上公開販售這批資料。駭客聲稱透過外洩的個人存取令牌（PAT）取得，竊取了共 246 個儲存庫，總資料量達 8.46GB。這些資料內容極為敏感，包括 Dynatrace 的內部基礎架構資訊、CI/CD 管線配置、Kubernetes 叢集管理細節，以及特定專案的員工個人資料。駭客公開的樣本資料包含員工的全名、使用者名稱和公司電子郵件信箱，另有疑似產品原始碼。目前 Dynatrace 尚未正式證實此次資料外洩事件的真實性，但此事件凸顯了企業在管理個人存取令牌（PAT）和保護軟體開發生命週期（SDLC）資訊時，面臨的重大供應鏈安全風險。",
    tags: ["Dynatrace", "GitHub", "PAT", "個人存取令牌", "基礎架構資訊", "供應鏈安全"],
    title_en: "Dynatrace GitHub Repository Leaked: Hackers Steal 246 Repositories Using PAT, Including Internal Infrastructure and Employee Data",
    summary_en: "Cybersecurity company Dynatrace recently had its GitHub repositories compromised by hackers. The group, known as xpI0itrs, has publicly listed and sold this data on a hacker forum. The hackers claim they obtained the data using leaked Personal Access Tokens (PATs), stealing a total of 246 repositories containing 8.46GB of data. This data is highly sensitive, including Dynatrace's internal infrastructure information, CI/CD pipeline configurations, Kubernetes cluster management details, and employee personal data for specific projects. Sample data publicly released by the hackers includes employees' full names, usernames, and corporate email addresses, along with suspected product source code. While Dynatrace has not yet officially confirmed the authenticity of this data leak, the incident highlights the significant supply chain security risks companies face when managing Personal Access Tokens (PATs) and protecting Software Development Life Cycle (SDLC) information.",
    tags_en: ["Dynatrace", "GitHub", "PAT", "Personal Access Token", "Infrastructure Information", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176587", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-074",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安專家警告：新員工入職時的預設密碼管理風險，可能成為企業系統的重大入侵點",
    summary: "本文探討了企業在員工入職（Onboarding）過程中，傳統的密碼共享方式（如透過電子郵件或簡訊傳送臨時密碼）所帶來的重大安全風險。這種做法不僅容易被攔截或在未受保護的設備上存取，而且臨時密碼若未被強制修改，極易成為長期、可被攻擊者利用的弱點。\n\n文章指出，當便利性凌駕於安全性時，組織往往會讓預設或臨時密碼成為長期弱點。實例包括：2023年，駭客利用某水務局的PLC設備預設密碼「1111」進行攻擊；以及2025年，研究人員透過McDonald's招聘平台McHire的弱版管理員帳號（使用「123456」），存取了超過六千四百萬份求職者資料。\n\n為了解決此問題，文章推薦了Specops uReset等專業解決方案，該方案讓新員工透過安全的註冊流程（而非接收臨時密碼）自行設定符合組織政策的密碼，從根本上降低了密碼傳遞和管理的風險。",
    tags: ["密碼管理", "Onboarding", "預設密碼", "Specops uReset", "OT/ICS", "資安風險"],
    title_en: "Cybersecurity Experts Warn: Default Password Management Risks During Employee Onboarding Could Become Major Enterprise System Entry Points",
    summary_en: "This article discusses the significant security risks associated with traditional password sharing methods during employee onboarding (such as sending temporary passwords via email or SMS). Not only is this practice susceptible to interception or access on unprotected devices, but temporary passwords that are not forced to change can easily become long-term vulnerabilities exploitable by attackers.\n\nThe article points out that when convenience outweighs security, organizations often allow default or temporary passwords to become persistent weaknesses. Examples include: in 2023, hackers attacking a water utility's PLC equipment using the default password '1111'; and in 2025, researchers accessing over sixty-four million job seeker records through a weak administrator account (using '123456') on McDonald's recruitment platform, McHire.\n\nTo address this issue, the article recommends professional solutions like Specops uReset. This solution allows new employees to set their own passwords through a secure registration process (rather than receiving a temporary password), fundamentally reducing the risk associated with password transmission and management.",
    tags_en: ["Password Management", "Onboarding", "Default Password", "Specops uReset", "OT/ICS", "Cybersecurity Risk"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/the-onboarding-password-mistake-that.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-075",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "152個Chrome擴充功能被發現：利用新分頁背景牆紙外觀，進行數據收集與流量造假",
    summary: "資安研究人員發現一個由152個Google Chrome擴充功能組成的網路，這些擴充功能偽裝成新分頁的動態背景牆紙附加元件。這些擴充功能分散在38個不同的Chrome Web Store發布者帳戶下，並被總共安裝了105,000次。儘管這些擴充功能在商店聲稱不會收集用戶數據，但其隱私政策卻承認會記錄IP位址、ISP、點擊次數和來源者，並將這些數據分享給Google AdSense、DoubleClick和第三方廣告合作夥伴。更嚴重的是，這些擴充功能在安裝和解除安裝時，會透過硬編碼的URL參數，偽造流量來源，將自身行為偽裝成「Google有機搜尋」的自然流量，甚至在解除安裝時模仿真實的Google搜尋點擊行為。此外，這些擴充功能還具備在服務工作者啟動時，列舉並刪除所有可找到的IndexedDB資料庫的能力。該活動被評估為「財務動機的商業廣告軟體和流量歸因欺詐聯盟操作」。",
    tags: ["Chrome 擴充功能", "數據收集", "流量造假", "PUP", "Chrome Web Store", "IndexedDB"],
    title_en: "152 Chrome Extensions Discovered: Collecting Data and Faking Traffic Using New Tab Background Wallpaper Appearance",
    summary_en: "Cybersecurity researchers discovered a network of 152 Google Chrome extensions that masquerade as dynamic new tab background wallpaper add-ons. These extensions are distributed across 38 different Chrome Web Store publisher accounts and have been installed a total of 105,000 times. Although the extensions claim in the store that they do not collect user data, their privacy policies admit to logging IP addresses, ISPs, click counts, and sources, and sharing this data with Google AdSense, DoubleClick, and third-party advertising partners. More seriously, these extensions, upon installation and uninstallation, use hardcoded URL parameters to fake traffic sources, disguising their actions as natural 'Google organic search' traffic, and even simulating real Google search click behavior during uninstallation. Furthermore, these extensions possess the ability to list and delete all discoverable IndexedDB databases when the service worker starts. The activity was assessed as a 'financially motivated commercial adware and traffic attribution fraud consortium operation.'",
    tags_en: ["Chrome Extensions", "Data Collection", "Traffic Faking", "PUP", "Chrome Web Store", "IndexedDB"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/152-chrome-wallpaper-extensions-with.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-076",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "WordPress 插件遭竄改：Awesome Motive旗下三款工具（PushEngage/OptinMonster/TrustPulse）植入後門，危及網站資料",
    summary: "資安公司 Sansec 揭露，Awesome Motive 公司旗下三款熱門 WordPress 插件——PushEngage、OptinMonster 和 TrustPulse，曾被駭客竄改其 JavaScript 檔案。攻擊的觸發條件是網站管理員登入時載入這些惡意腳本。惡意程式碼會利用管理員的有效會話，自動建立一個駭客控制的後門管理員帳號，並安裝一個隱藏的插件，該插件實際上開啟了一個 Web Shell（遠端指令通道）。攻擊者透過這個 Web Shell，可以在無需登入的情況下，讀取、修改任何檔案、複製資料庫，甚至植入更多後門。受影響的網站應視為已遭入侵。修復建議是，由於後門設計隱藏，僅靠 WordPress 儀表板無法判斷是否受害，必須進行徹底的伺服器端掃描，並假設網站已遭全面入侵。建議所有用戶立即檢查伺服器，並特別注意檢查是否有未知的後門帳號或異常的檔案變動。",
    tags: ["WordPress", "Awesome Motive", "PushEngage", "OptinMonster", "TrustPulse", "Web Shell", "JavaScript", "供應鏈攻擊"],
    title_en: "WordPress Plugins Tampered With: Three Awesome Motive Tools (PushEngage/OptinMonster/TrustPulse) Implant Backdoors, Jeopardizing Website Data",
    summary_en: "Security firm Sansec revealed that three popular WordPress plugins from Awesome Motive—PushEngage, OptinMonster, and TrustPulse—were tampered with by hackers to modify their JavaScript files. The attack was triggered when the website administrator logged in and loaded these malicious scripts. The malicious code utilized the administrator's active session to automatically create a hacker-controlled backdoor administrator account and install a hidden plugin that effectively opened a Web Shell (a remote command channel). Through this Web Shell, attackers could read, modify any file, copy the database, or even implant more backdoors without needing to log in. Affected websites should be considered compromised. The remediation advice is that because the backdoor is designed to be hidden, it cannot be determined whether the site is affected merely by checking the WordPress dashboard; a thorough server-side scan is required, and the site must be assumed to be fully compromised. All users are advised to immediately check their servers, paying special attention to checking for unknown backdoor accounts or abnormal file changes.",
    tags_en: ["WordPress", "Awesome Motive", "PushEngage", "OptinMonster", "TrustPulse", "Web Shell", "JavaScript", "Supply Chain Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/popular-wordpress-plugin-scripts.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-077",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Group-IB揭露「Sniper Dz」詐騙機制：利用瀏覽器通知與社群工程鎖定中東用戶",
    summary: "資安公司 Group-IB 揭露了一系列針對中東和北非地區用戶的詐騙活動，這些活動利用偽造的 Facebook 帳號，冒充政客、公眾人物或電信公司（如 Algérie Télécom）來散播假優惠。詐騙流程高度複雜，首先透過 Link in bio 等可信賴的連結聚合平台引導受害者，而非直接導向惡意網站。攻擊的最終目標是讓用戶授權瀏覽器通知（透過 VAPID 公鑰），從而進入一個精心設計的「變現漏斗」。此漏斗利用瀏覽器通知濫用、歷史記錄劫持（注入假歷史狀態）和「Tab-under」技術，使受害者難以脫身。最終，受害者會被導向流量分配系統（TDS），進行高價簡訊訂閱、高價電話詐騙或投資詐騙。Group-IB 指出，這類詐騙不再依賴傳統惡意軟體，而是利用對合法網路技術和瀏覽器功能的濫用，進行精密的社會工程和流量變現。",
    tags: ["Group-IB", "Sniper Dz", "VAPID", "瀏覽器通知濫用", "社會工程", "流量變現"],
    title_en: "Group-IB Uncovers 'Sniper Dz' Scam Mechanism: Targeting Middle Eastern Users via Browser Notifications and Social Engineering",
    summary_en: "Cybersecurity firm Group-IB has exposed a series of scam activities targeting users in the Middle East and North Africa. These activities utilize fake Facebook accounts, impersonating politicians, public figures, or telecommunications companies (such as Algérie Télécom) to disseminate fake offers. The scam process is highly complex; it first guides victims through trusted link aggregation platforms like Link in bio, rather than directly linking to malicious websites. The ultimate goal of the attack is to trick users into authorizing browser notifications (via VAPID public keys), thereby entering a meticulously designed 'monetization funnel.' This funnel leverages browser notification abuse, history hijacking (by injecting false history states), and 'Tab-under' techniques, making it difficult for victims to escape. Finally, victims are directed to a Traffic Distribution System (TDS) to engage in high-priced SMS subscriptions, high-cost phone scams, or investment fraud. Group-IB points out that these scams no longer rely on traditional malware, but instead exploit the abuse of legitimate network technologies and browser functionalities to conduct sophisticated social engineering and traffic monetization.",
    tags_en: ["Group-IB", "Sniper Dz", "VAPID", "Browser Notification Abuse", "Social Engineering", "Traffic Monetization"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/sniper-dz-scams-target-mena-users-via.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-078",
    trackers: ["os"],
    category: "Android",
    title: "Gemini 於 Android Auto 與手機上出現通話功能故障，用戶回報無法使用語音撥號",
    summary: "部分 Android Auto 用戶回報，使用 Gemini 進行語音通話指令時出現功能故障，無法撥號。此問題不僅限於車載系統，甚至影響到在一般 Android 手機上使用 Gemini 進行通話的能力。用戶在手機上會看到「Something went wrong. Please try again」的錯誤訊息。由於此問題的根源不明確，但推測可能與 Gemini 或 Google 應用程式的近期更新有關。目前暫時的解決方案是切換回使用 Google Assistant，但這僅為短期修復。此外，用戶還注意到 Android Auto 有時會隨機顯示 Assistant 圖示，而非 Gemini，這是一個視覺上的異常。Google 建議用戶持續關注後續的修補與更新。",
    tags: ["Gemini", "Android Auto", "Google Assistant", "Android 平台", "通話功能", "軟體 Bug"],
    title_en: "Gemini exhibits call function failures on Android Auto and mobile phones, users report inability to dial by voice",
    summary_en: "Some Android Auto users have reported functional failures when using Gemini for voice calling commands, resulting in an inability to dial. This issue is not limited to the in-car system, but also affects the ability to use Gemini for calls on general Android mobile phones. Users on mobile phones see the error message, \"Something went wrong. Please try again.\" Since the root cause of this issue is unclear, it is speculated that it may be related to recent updates to Gemini or the Google application. The current temporary workaround is to switch back to using Google Assistant, but this is only a short-term fix. Furthermore, users have noticed that Android Auto sometimes randomly displays the Assistant icon instead of Gemini, which is a visual anomaly. Google advises users to monitor subsequent patches and updates.",
    tags_en: ["Gemini", "Android Auto", "Google Assistant", "Android Platform", "Calling Function", "Software Bug"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/15/gemini-suddenly-cant-make-calls-on-android-and-android-auto-for-some", lang: "EN" }
    ]
  },
  {
    id: "20260615-079",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Z Fold 8 Ultra 與 Galaxy Z Fold 8 規格外洩：預計於 Unpacked 2026 發布",
    summary: "根據內部 FCC 文件洩漏，三星（Samsung）下一代摺疊手機系列包含 Galaxy Z Fold 8 Ultra 和 Galaxy Z Fold 8。Z Fold 8 Ultra 的外觀預計與標準 Z Fold 旗艦機型相似，其身份代碼為 SM-F976U。Z Fold 8 則被描述為一款更寬、規格更基礎的摺疊機型。此外，洩漏資料也提及了 Galaxy Watch Ultra 2 和 Galaxy Watch 9 等智慧手錶系列。這些資訊顯示三星的產品線規劃，預計將在 2026 年的 Unpacked 活動期間正式發布。目前洩漏內容主要集中於產品命名與型號代碼，尚未提供詳細的技術規格或性能數據。",
    tags: ["Samsung", "Galaxy Z Fold 8 Ultra", "Galaxy Z Fold 8", "FCC", "摺疊手機", "Galaxy Watch"],
    title_en: "Samsung Galaxy Z Fold 8 Ultra and Galaxy Z Fold 8 Specs Leak: Expected Release at Unpacked 2026",
    summary_en: "According to leaked internal FCC documents, Samsung's next generation of foldable phones includes the Galaxy Z Fold 8 Ultra and the Galaxy Z Fold 8. The Z Fold 8 Ultra is expected to have an appearance similar to the standard Z Fold flagship model, with the identity code SM-F976U. The Z Fold 8 is described as a wider, more basic foldable model. Additionally, the leaked data also mentions smart watch series such as the Galaxy Watch Ultra 2 and Galaxy Watch 9. This information reveals Samsung's product line planning, which is expected to be officially launched during the Unpacked event in 2026. The leaked content currently focuses mainly on product naming and model codes, and detailed technical specifications or performance data have not yet been provided.",
    tags_en: ["Samsung", "Galaxy Z Fold 8 Ultra", "Galaxy Z Fold 8", "FCC", "Foldable Phone", "Galaxy Watch"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/15/galaxy-z-fold-8-ultra-fcc-leak", lang: "EN" }
    ]
  },
  {
    id: "20260615-080",
    trackers: ["os"],
    category: "Android",
    title: "三星發布 One UI Watch 8 安全更新，涵蓋 Galaxy Watch 7、Watch 8 與 Watch Ultra",
    summary: "三星正持續推出安全更新，最新的一輪韌體更新已開始推送至 Galaxy Watch 7、Watch 8 和 Galaxy Watch Ultra 等旗艦智慧手錶。這些設備系列基於 Wear OS 6 運行，並採用 One UI Watch 8 介面。本次更新的目的是強化設備的安全性與穩定性，體積較小，預計安裝過程平穩，不會帶來重大的功能或介面變動。雖然文章提到近期有用戶回報更新可能影響電池續航力，但本次五月 2026 的安全更新內容並未針對此問題進行修復。三星遵循其慣例，會先在韓國推出，再逐步擴展至歐洲和美國等地區，用戶應留意官方公告以進行更新。",
    tags: ["三星", "Samsung", "Galaxy Watch 7", "Galaxy Watch 8", "Watch Ultra", "One UI Watch 8", "Wear OS 6"],
    title_en: "Samsung releases One UI Watch 8 security update covering Galaxy Watch 7, Watch 8, and Watch Ultra",
    summary_en: "Samsung continues to release security updates, with the latest firmware update now being pushed to flagship smartwatches including the Galaxy Watch 7, Watch 8, and Galaxy Watch Ultra. These device series run on Wear OS 6 and utilize the One UI Watch 8 interface. The purpose of this update is to enhance the device's security and stability. The update is expected to be small, ensuring a smooth installation process without major functional or interface changes. Although the article mentions that recent user reports suggest updates might impact battery life, the content of this May 2026 security update does not address this issue. Following its usual practice, Samsung will first roll out the update in Korea before gradually expanding it to regions like Europe and the US. Users should monitor official announcements for update details.",
    tags_en: ["三星", "Samsung", "Galaxy Watch 7", "Galaxy Watch 8", "Watch Ultra", "One UI Watch 8", "Wear OS 6"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/15/galaxy-watch-7-8-ultra-get-may-update", lang: "EN" }
    ]
  },
  {
    id: "20260615-081",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android XR 生態系統更新：Developer Preview 4 推出，強化跨平台開發與智慧眼鏡支援",
    summary: "Google 宣布 Android XR 生態系統持續擴展，並發布了 Developer Preview 4 的 Android XR SDK。本次更新旨在簡化 XR 開發流程，提供更全面的工具鏈與 API。開發者現在可以使用此 SDK 針對沉浸式與擴增實境（AR）體驗進行設計與建構。核心亮點包括：1. **智慧眼鏡支援**：透過 Jetpack Projected 函式庫，開發者可將現有的行動應用程式擴展至輔助顯示眼鏡，並利用 Device Availability API 根據眼鏡佩戴狀態自適應行為。2. **地理空間定位**：為沉浸式體驗提供早期預覽的 Geospatial API，結合 ARCore for Jetpack XR 與 Google 的視覺定位系統（VPS），實現將數位內容錨定到高精度的真實世界位置。3. **跨平台支援**：除了現有的 Unity 支援外，本次更新還正式擴展至對 Unreal Engine 和 Godot 的官方支援，讓開發者能使用熟悉的引擎為 Android XR 構建應用。開發者可利用 Android Studio 內建的 XR 模擬器進行測試與迭代，無需實體硬體。",
    tags: ["Android XR", "Developer Preview 4", "Jetpack Projected", "ARCore", "Unreal Engine", "Godot", "智慧眼鏡"],
    title_en: "Android XR Ecosystem Update: Developer Preview 4 Launched, Enhancing Cross-Platform Development and Smart Glasses Support",
    summary_en: "Google announced the continued expansion of the Android XR ecosystem and released the Android XR SDK Developer Preview 4. This update aims to simplify the XR development process by providing a more comprehensive toolchain and APIs. Developers can now use this SDK to design and build both immersive and augmented reality (AR) experiences. Key highlights include: 1. **Smart Glasses Support**: Through the Jetpack Projected library, developers can extend existing mobile applications to auxiliary display glasses and utilize the Device Availability API for behavior adaptation based on the glasses' wearing status. 2. **Geospatial Positioning**: An early preview of the Geospatial API is provided for immersive experiences, combining ARCore for Jetpack XR with Google's Visual Positioning System (VPS) to anchor digital content to high-precision real-world locations. 3. **Cross-Platform Support**: In addition to existing Unity support, this update officially expands support to Unreal Engine and Godot, allowing developers to build Android XR applications using familiar engines. Developers can use the XR simulator built into Android Studio for testing and iteration, eliminating the need for physical hardware.",
    tags_en: ["Android XR", "Developer Preview 4", "Jetpack Projected", "ARCore", "Unreal Engine", "Godot", "Smart Glasses"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/06/what-is-new-android-xr.html", lang: "EN" }
    ]
  },
  {
    id: "20260615-082",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 應用程式漏洞：Rakuten Send Anywhere 允許未授權應用程式強制下載檔案，可能導致任意程式碼執行",
    summary: "本漏洞（CVE-2025-68713）存在於 Android 平台上的 Rakuten Send Anywhere 檔案傳輸應用程式（com.estmob.android.sendanywhere）版本 23.2.9。該漏洞的本質在於，即使是沒有任何權限的不可信應用程式，也能強制將任意檔案下載到該應用程式的範圍儲存空間（scoped storage）。這些下載的檔案會出現在應用程式信任的接收介面。這為攻擊者建立了一個攻擊向量：如果傳入的負載是 APK 檔案，則可能導致任意程式碼執行；若只是超大檔案傳輸，則可能造成資源耗盡導致服務拒絕（DoS）。修補建議是開發者應立即更新 Send Anywhere 應用程式，並應加強對外部應用程式強制寫入和接收檔案的權限驗證機制，以限制攻擊範圍。",
    tags: ["Android", "Rakuten Send Anywhere", "CVE-2025-68713", "任意程式碼執行", "Scoped Storage", "Android 應用程式"],
    title_en: "Android Application Vulnerability: Rakuten Send Anywhere Allows Unauthorized Applications to Force File Downloads, Potentially Leading to Arbitrary Code Execution",
    summary_en: "This vulnerability (CVE-2025-68713) exists in the Rakuten Send Anywhere file transfer application (com.estmob.android.sendanywhere) version 23.2.9 on the Android platform. The core issue is that even an untrusted application without any permissions can force arbitrary files to download into the application's scoped storage. These downloaded files will appear in the application's trusted receiving interface. This creates an attack vector for attackers: if the payload is an APK file, it could lead to arbitrary code execution; if it is just a super large file transfer, it could cause resource exhaustion leading to a Denial of Service (DoS). The suggested fix is for developers to immediately update the Send Anywhere application and strengthen the permission verification mechanism for external applications forcing writes and receiving files, thereby limiting the attack scope.",
    tags_en: ["Android", "Rakuten Send Anywhere", "CVE-2025-68713", "Arbitrary Code Execution", "Scoped Storage", "Android Application"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68713", lang: "EN" }
    ]
  },
  {
    id: "20260615-083",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI原生作業系統將改變資安格局，預測「社工攻擊」時代的終結",
    summary: "本文探討隨著Google Gemini和Apple Intelligence等AI功能深度整合到作業系統中，資安防禦的重心正從「使用者警覺」轉移到「系統主動防禦」。傳統社工攻擊（如釣魚郵件、冒充電話）之所以有效，主要利用了人類在「身份驗證」、「情境理解」和「反應速度」上的三大弱點。傳統的身份驗證依賴靜態密碼，且負擔完全在使用者身上；傳統系統難以整合多模態資訊，無法理解攻擊的整體情境；而攻擊利用人類的習慣和慣性，在使用者尚未察覺時完成行動。\nAI原生作業系統的整合LLM能力，預計將根本改變這些弱點。它能透過分析行為模式、通訊歷史和設備關係來實現持續性身份驗證，而非僅依賴密碼；它能同時整合郵件、通訊、行事曆等多源數據，識別跨模態的操縱模式；並能在攻擊發生前或進行時介入，提供整體情境警告。這預示著未來資安防禦將由系統主動參與解讀，而非僅依賴使用者警惕。",
    tags: ["AI原生作業系統", "社工攻擊", "LLM", "身份驗證", "情境理解", "資安防禦"],
    title_en: "AI-Native Operating Systems Will Change the Security Landscape, Predicting the End of 'Social Engineering' Attacks",
    summary_en: "This article explores how the deep integration of AI features, such as Google Gemini and Apple Intelligence, into operating systems is shifting the focus of cybersecurity defense from 'user vigilance' to 'system proactive defense.' Traditional social engineering attacks (such as phishing emails or impersonation calls) have been effective primarily by exploiting three human weaknesses: 'identity verification,' 'contextual understanding,' and 'reaction speed.' Traditional identity verification relies on static passwords, placing the entire burden on the user; traditional systems struggle to integrate multi-modal information, making it difficult to understand the overall context of an attack; and attacks exploit human habits and inertia, completing actions before the user is even aware. AI-native operating systems, by integrating LLM capabilities, are expected to fundamentally change these weaknesses. They can achieve continuous identity verification by analyzing behavioral patterns, communication history, and device relationships, rather than relying solely on passwords; they can simultaneously integrate multi-source data like email, communication, and calendars to identify cross-modal manipulation patterns; and they can intervene before or during an attack to provide comprehensive contextual warnings. This suggests that future cybersecurity defense will be driven by system-level interpretation, rather than solely depending on user vigilance.",
    tags_en: ["AI-Native Operating Systems", "Social Engineering", "LLM", "Identity Verification", "Contextual Understanding", "Cybersecurity Defense"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/beginning-end-social-engineering", lang: "EN" }
    ]
  },
  {
    id: "20260615-084",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic發布Claude安全實務指南：利用AI建立威脅模型與漏洞修補流程",
    summary: "AI模型業者Anthropic發布了一份程式原始碼安全實務指南，旨在指導企業和開放原始碼專案如何利用其Claude模型來建立威脅模型、找出漏洞，並進行後續的驗證、分級處理與修補。Anthropic提供了一個名為defending-code-reference-harness的參考實作，該實作整合了多個Claude Code技能，涵蓋快速啟動、威脅建模、漏洞掃描、驗證分級、修補與客製化等環節。其自主掃描管線預設鎖定C/C++的記憶體漏洞，透過編譯目標程式並在啟用AddressSanitizer（ASAN）的Docker映像檔中，於gVisor隔離的容器內執行AI代理程式，以降低風險。Anthropic強調，安全流程應從建立威脅模型開始，接著由獨立的AI代理程式發現漏洞，並透過PoC確認漏洞可利用性，最後根據可達性、攻擊控制程度等因素安排修補優先順序。同時，指南也提醒開發者，AI產生的修補程式碼仍需經過嚴格的測試、驗證與人工審查。",
    tags: ["Anthropic", "Claude", "AI安全", "威脅模型", "漏洞修補", "開源專案"],
    title_en: "Anthropic Releases Claude Security Best Practices Guide: Utilizing AI for Threat Modeling and Vulnerability Patching",
    summary_en: "AI model provider Anthropic has released a secure coding best practices guide aimed at instructing enterprises and open-source projects on how to use its Claude model to build threat models, identify vulnerabilities, and perform subsequent validation, severity grading, and patching. Anthropic provides a reference implementation called `defending-code-reference-harness`, which integrates multiple Claude Code skills covering rapid setup, threat modeling, vulnerability scanning, validation grading, patching, and customization. Its autonomous scanning pipeline is pre-configured to detect C/C++ memory vulnerabilities. It achieves this by compiling the target program and executing an AI agent within a gVisor-isolated container in a Docker image with AddressSanitizer (ASAN) enabled, thereby minimizing risk. Anthropic emphasizes that the security process should begin with threat modeling, followed by an independent AI agent discovering vulnerabilities, confirming exploitability via PoC, and finally prioritizing patches based on factors like reachability and attack control. Furthermore, the guide reminds developers that AI-generated patch code still requires rigorous testing, validation, and manual review.",
    tags_en: ["Anthropic", "Claude", "AI Security", "Threat Modeling", "Vulnerability Patching", "Open Source Projects"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176595", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260615-085",
    trackers: ["os"],
    category: "重點關注",
    title: "三星發布 Galaxy Book 6 Edge：搭載 Snapdragon X2 Elite，強調 AI 性能與生態整合",
    summary: "三星發表了其第二款搭載 Snapdragon 處理器的 Galaxy Book 筆電——Galaxy Book 6 Edge。新機型採用 Snapdragon X2 Elite 晶片，並具備抗反射 AMOLED 螢幕和長達 22 小時的電池續航力。本次發布的型號規格固定為 16 吋、16GB RAM 和 1TB 儲存空間，並以「灰藍色」推出。該筆電除了具備 USB-C、HDMI、USB-A 等多樣連接埠外，還深度整合了三星的 Galaxy 生態系統，支援 Storage Share、Multi Control 等功能，實現跨設備的檔案和內容無縫傳輸。然而，新機型的售價為 $2,099.99，相較於市場上其他同級產品（如 Lenovo Yoga Slim 7x 或 MacBook Pro），價格偏高。三星目前僅透過官方網站銷售，並提供舊機型折抵優惠。",
    tags: ["Samsung", "Galaxy Book 6 Edge", "Snapdragon X2 Elite", "AI 性能", "Windows", "跨平台趨勢"],
    title_en: "Samsung Launches Galaxy Book 6 Edge: Featuring Snapdragon X2 Elite, Emphasizing AI Performance and Ecosystem Integration",
    summary_en: "Samsung has unveiled its second Galaxy Book laptop powered by a Snapdragon processor—the Galaxy Book 6 Edge. The new model utilizes the Snapdragon X2 Elite chip and features an anti-reflective AMOLED screen and up to 22 hours of battery life. The released model specifications are fixed at 16 inches, 16GB RAM, and 1TB storage, and it is launched in 'Slate Blue.' In addition to various ports like USB-C, HDMI, and USB-A, the laptop deeply integrates with the Samsung Galaxy ecosystem, supporting features like Storage Share and Multi Control, enabling seamless file and content transfer across devices. However, the new model is priced at $2,099.99, which is relatively high compared to other comparable market products (such as the Lenovo Yoga Slim 7x or MacBook Pro). Samsung is currently selling it only through its official website and offering trade-in discounts for older models.",
    tags_en: ["Samsung", "Galaxy Book 6 Edge", "Snapdragon X2 Elite", "AI Performance", "Windows", "Cross-platform Trends"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/15/samsung-galaxy-book-6-edge-with-snapdragon-x2-elite-is-2100-only-16gb-of-ram", lang: "EN" }
    ]
  },
  {
    id: "20260615-086",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Chrome 逐步移除 Manifest V2 支援，標誌著多數廣告攔截器功能終結",
    summary: "Google Chrome 正在逐步淘汰對 Manifest V2 擴充功能的支援，這項變動將對依賴舊版權限結構的廣告攔截器（如 uBlock Origin）造成重大影響。Chrome 透過移除核心的技術權限，特別是 `kExtensionManifestV2Disabled` 旗標，來強制使用者轉向 Manifest V3 的新權限模型。Google 官方指出，MV2 擴充功能已不再允許在任何支援的 Chrome 版本中使用，且由於其複雜性和安全風險，Google 將停止維護此功能。預計在 Chrome 150 版本（2026 年 6 月 30 日）將移除主要繞過技術，而 Chrome 151 版本（2026 年 7 月）則會移除所有剩餘的 Manifest V2 旗標。此舉不僅影響 Chrome，其他基於 Chromium 的瀏覽器（如 Microsoft Edge 和 Opera）也可能跟進此趨勢，實務上要求開發者和使用者必須適應 Manifest V3 的新架構，以維持瀏覽器擴充功能和隱私保護的平衡。",
    tags: ["Google Chrome", "Manifest V3", "Manifest V2", "擴充功能", "廣告攔截器", "Chromium", "WebExtensions"],
    title_en: "Google Chrome Gradually Deprecates Manifest V2 Support, Signaling the End of Many Ad Blocker Features",
    summary_en: "Google Chrome is phasing out support for Manifest V2 extensions, a change that will significantly impact ad blockers relying on the old permission structure (such as uBlock Origin). Chrome is forcing users to transition to the Manifest V3 permission model by removing core technical permissions, specifically the `kExtensionManifestV2Disabled` flag. Google has stated that MV2 extensions are no longer allowed in any supported Chrome version, and due to their complexity and security risks, Google will cease maintenance of this feature. It is expected that the major bypass techniques will be removed in Chrome 150 (June 30, 2026), and all remaining Manifest V2 flags will be removed in Chrome 151 (July 2026). This move does not only affect Chrome; other Chromium-based browsers (such as Microsoft Edge and Opera) may follow this trend, practically requiring developers and users to adapt to the Manifest V3 architecture to maintain the balance between browser extensions and privacy protection.",
    tags_en: ["Google Chrome", "Manifest V3", "Manifest V2", "Extensions", "Ad Blockers", "Chromium", "WebExtensions"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/15/google-chromes-next-update-will-mark-the-end-of-popular-ad-blockers", lang: "EN" }
    ]
  },
  {
    id: "20260615-087",
    trackers: ["os"],
    category: "重點關注",
    title: "三星 Galaxy Z Fold 8「Wide」版預計採用更厚超薄玻璃，提升耐用性",
    summary: "根據最新報告，三星即將推出的 Galaxy Z Fold 8 系列中，「Wide」版本（另名 Z Fold 8）預計將採用比前代 Z Fold 7 更厚的超薄玻璃（UTG）。具體而言，其玻璃厚度預計達到 60μm，相較於 Z Fold 7 的 45μm 有顯著提升。UTG 技術是摺疊手機提升體驗的關鍵，厚度與耐用性之間存在權衡：玻璃越薄，折疊時越不易碎裂；但玻璃越厚，顯示面板的觀感和抗衝擊性越佳。報導指出，雖然 Z Fold 8 的「Wide」版厚度提升，可能使其在日常使用中偶爾出現螢幕裂痕的機率略高，但整體而言，其耐用性將更強。與此同時，同型因子的 Z Fold 8「Ultra」版預計仍維持 45μm 的厚度。三星預計將於 7 月 22 日發布這兩款新機型。",
    tags: ["Samsung", "Galaxy Z Fold 8", "超薄玻璃", "UTG", "摺疊手機", "硬體規格"],
    title_en: "Samsung Galaxy Z Fold 8 'Wide' Edition Expected to Use Thicker Ultra-Thin Glass for Enhanced Durability",
    summary_en: "According to the latest report, the 'Wide' version (also named Z Fold 8) of the upcoming Samsung Galaxy Z Fold 8 series is expected to adopt Ultra-Thin Glass (UTG) that is thicker than the previous Z Fold 7. Specifically, the glass thickness is projected to reach 60μm, a significant increase compared to the Z Fold 7's 45μm. UTG technology is key to improving the foldable phone experience, involving a trade-off between thickness and durability: thinner glass is less prone to cracking when folded, but thicker glass offers better display aesthetics and anti-impact resistance. The report notes that although the increased thickness of the Z Fold 8 'Wide' edition might slightly increase the probability of occasional screen cracks during daily use, its overall durability will be stronger. Meanwhile, the similarly sized Z Fold 8 'Ultra' edition is expected to maintain the 45μm thickness. Samsung is scheduled to release these two new models on July 22.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Ultra-Thin Glass", "UTG", "Foldable Phone", "Hardware Specifications"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/15/galaxy-z-fold-8-wide-reportedly-has-a-stronger-inner-display-than-the-ultra", lang: "EN" }
    ]
  },
  {
    id: "20260615-088",
    trackers: ["os"],
    category: "重點關注",
    title: "WhatsApp Web 即將支援群組通話：可進行語音與視訊通話，最多支持 32 人",
    summary: "WhatsApp Web 正在逐步擴展其功能，預計將在群組聊天室中支援語音和視訊通話功能。目前已進行測試，並可支持多達 32 位參與者，功能包括螢幕分享。使用者只需在群組聊天室頂部尋找通話按鈕即可啟動。此功能與應用程式端一致，所有群組通話都具備端到端加密，並支援通話連結，方便邀請參與者。欲體驗此功能，使用者可透過「設定」>「幫助」進入 WhatsApp Web 的 Beta 測試版。然而，WhatsApp 傾向分階段推出新功能，因此進入 Beta 版並不能保證立即獲得所有新功能。",
    tags: ["WhatsApp", "WhatsApp Web", "群組通話", "端到端加密", "Beta 測試"],
    title_en: "WhatsApp Web to Support Group Calls: Voice and Video Calls for up to 32 Participants",
    summary_en: "WhatsApp Web is gradually expanding its features, and is expected to support voice and video calling within group chats. This feature has been tested and can support up to 32 participants, including screen sharing. Users can initiate the call by finding the call button at the top of the group chat. This functionality is consistent with the application version, and all group calls feature end-to-end encryption and support call links for easy participant invitation. To experience this feature, users can access the WhatsApp Web Beta version via 'Settings' > 'Help'. However, since WhatsApp tends to roll out new features in phases, entering the Beta version does not guarantee immediate access to all new features.",
    tags_en: ["WhatsApp", "WhatsApp Web", "Group Calls", "End-to-End Encryption", "Beta Testing"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/whatsapp-web-extends-voice-and-video-calls-test-to-group-chats", lang: "EN" }
    ]
  },
  {
    id: "20260615-089",
    trackers: ["os"],
    category: "重點關注",
    title: "巴西法院裁定遊戲中的「戰利品箱」涉嫌賭博，要求蘋果等公司支付近六千萬美元賠償金",
    summary: "巴西法院針對遊戲中的「戰利品箱」（loot boxes）模式，裁定其類似賭博行為，可能使未成年人面臨強迫性行為和商業剝削的風險。法院要求蘋果（Apple）、微軟（Microsoft）、騰訊（Tencent）等多家遊戲公司支付鉅額集體道德損害賠償金。其中，蘋果被要求支付約 2.98 億巴西雷亞爾（約 5,870 萬美元）。法院同時強調，除了集體賠償金外，購買或使用戰利品箱的未成年人有權尋求個人補償。此外，法院還下令這些公司必須進行多項變革，包括建立未經父母同意的購買退款系統、實施年齡驗證工具、明確警告隨機獎勵的性質，並提供「機率透明度」（probabilistic transparency）以揭露獲取每件物品的機率。",
    tags: ["Apple", "戰利品箱", "Loot Boxes", "巴西法律", "未成年人保護", "遊戲產業"],
    title_en: "Brazilian Court Rules In-Game 'Loot Boxes' Suspected of Gambling, Orders Apple and Others to Pay Nearly $60 Million in Compensation",
    summary_en: "A Brazilian court ruled that the 'loot boxes' model in games resembles gambling, potentially exposing minors to risks of compulsive behavior and commercial exploitation. The court ordered major gaming companies, including Apple, Microsoft, and Tencent, to pay substantial collective moral damages. Specifically, Apple was ordered to pay approximately 298 million Brazilian Reais (about $58.7 million USD). The court also emphasized that, in addition to collective compensation, minors who purchase or use loot boxes have the right to seek individual compensation. Furthermore, the court mandated that these companies implement several changes, including establishing a refund system for purchases without parental consent, implementing age verification tools, clearly warning about the nature of random rewards, and providing 'probabilistic transparency' to disclose the probability of obtaining each item.",
    tags_en: ["Apple", "Loot Boxes", "Brazilian Law", "Minor Protection", "Gaming Industry"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/apple-among-companies-ordered-to-pay-nearly-60-million-in-brazil-over-loot-boxes", lang: "EN" }
    ]
  },
  {
    id: "20260615-090",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 說明 iOS 27 新 Siri AI 耗時過久：從基礎架構全面重構",
    summary: "Apple 官方透露，iOS 27 的新 Siri AI 功能雖然是重大升級，但其開發時間較長，主要原因是 Apple 決定不沿用原有的 Siri 基礎架構。根據負責 Siri 的主管 Mike Rockwell 的說明，最初的版本僅是增量式更新，增加了工具呼叫功能，但 Apple 認為這無法達到其期望的願景與用戶體驗。因此，Apple 決定「從零開始」徹底重構 Siri，並將其建立在更現代、更強大的基礎上。新版 Siri 具備原生多模態能力，並從設計初期就考慮了隱私保護。這項升級的關鍵在於其跨平台一致性，可同時在 iPhone、iPad、Mac、Watch、Vision Pro、CarPlay 和 AirPods 等所有 Apple 設備上提供統一的體驗。這顯示 Apple 在 AI 整合上，追求的是系統層級的深度整合與一致性，而非單純的功能疊加。",
    tags: ["Apple", "iOS 27", "Siri AI", "Apple Intelligence", "跨平台", "AI 整合"],
    title_en: "Apple Explains iOS 27's New Siri AI Takes Time: A Complete Infrastructure Overhaul",
    summary_en: "Apple officially revealed that while the new Siri AI feature in iOS 27 is a major upgrade, its development required significant time because Apple decided not to reuse the original Siri infrastructure. According to Mike Rockwell, the head responsible for Siri, the initial version was merely an incremental update that added tool-calling functionality. However, Apple felt this could not achieve its desired vision and user experience. Therefore, Apple decided to completely rebuild Siri 'from scratch,' building it on a more modern and powerful foundation. The new Siri features native multimodal capabilities and privacy protection were considered from the initial design phase. The key to this upgrade is its cross-platform consistency, providing a unified experience across all Apple devices, including iPhone, iPad, Mac, Watch, Vision Pro, CarPlay, and AirPods. This demonstrates that Apple's pursuit in AI integration is deep, system-level integration and consistency, rather than simple feature stacking.",
    tags_en: ["Apple", "iOS 27", "Siri AI", "Apple Intelligence", "Cross-Platform", "AI Integration"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/apple-explains-why-siris-major-ios-27-overhaul-took-so-long", lang: "EN" }
    ]
  },
  {
    id: "20260615-091",
    trackers: ["os"],
    category: "重點關注",
    title: "Chase Sapphire Preferred 卡片新增福利：提供一年免費 Apple TV 或 Apple One 折扣",
    summary: "本文介紹 Chase Sapphire Preferred 信用卡為持卡人新增的兩項福利：可獲得一年免費 Apple TV，或選擇 Apple One 的每月折扣。Apple TV 的免費價值為 $156，持卡人需在 2026 年 12 月 31 日前啟用優惠。所有新舊持卡人皆可透過在 Chase 網站或 App 的福利入口網站連結 Apple 帳號來啟用。此外，對於現有的 Apple One 訂閱者，可獲得每月 $7.50 的折扣，適用期限最長 12 個月。對於持有更昂貴的 Chase Sapphire Reserve 卡的用戶，現在也能獲得每月 $15 的 Apple One 折扣。這些福利旨在提升持卡人對 Apple 生態系統的吸引力，讓更多人能享受 Apple 產品的優惠。",
    tags: ["Chase Sapphire Preferred", "Apple TV", "Apple One", "信用卡福利", "Apple 帳號"],
    title_en: "Chase Sapphire Preferred Card Adds New Benefits: Offering One Year of Free Apple TV or Apple One Discount",
    summary_en: "This article introduces two new benefits for Chase Sapphire Preferred cardholders: the option to receive one year of free Apple TV, or select a monthly discount on Apple One. The free value of Apple TV is $156, and cardholders must activate the offer before December 31, 2026. Both new and existing cardholders can activate this by linking their Apple account through the benefits portal on the Chase website or App. Additionally, existing Apple One subscribers can receive a $7.50 monthly discount, applicable for up to 12 months. Users who hold the more premium Chase Sapphire Reserve card can now also receive a $15 monthly Apple One discount. These benefits aim to enhance cardholders' appeal within the Apple ecosystem, allowing more people to enjoy discounts on Apple products.",
    tags_en: ["Chase Sapphire Preferred", "Apple TV", "Apple One", "Credit Card Benefits", "Apple Account"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/chase-adds-free-apple-tv-discounted-apple-one-benefit-to-popular-credit-card", lang: "EN" }
    ]
  },
  {
    id: "20260615-092",
    trackers: ["os"],
    category: "重點關注",
    title: "英國宣布限制未滿 16 歲使用社群媒體：全球國家趨勢與政策影響分析",
    summary: "隨著全球對青少年心理健康的關注日益增加，越來越多國家正考慮或實施限制未成年人使用社群媒體的政策。英國政府已宣布計劃在明年年初實施禁令，目標群體為未滿 16 歲的青少年。該禁令預計涵蓋 Snapchat、TikTok、YouTube、Instagram、Facebook 和 X 等旨在進行社交互動並允許用戶發布內容的平台，並將限制直播和陌生人聯繫功能。然而，政府表示不會將 WhatsApp 和 Signal 等純訊息服務納入禁令範圍。此外，英國政府也考慮對未滿 18 歲的青少年實施宵禁或限制無限滾動等措施。此趨勢已在全球範圍蔓延，澳洲是首個實施禁令的國家，歐盟和美國也曾提出類似的立法提案，顯示出跨國政策趨勢，主要基於學術研究證實社群媒體使用與青少年抑鬱、焦慮等心理健康問題之間存在顯著關聯。",
    tags: ["英國", "社群媒體", "青少年心理健康", "政策限制", "全球趨勢", "未成年人保護"],
    title_en: "UK Announces Restrictions on Social Media Use for Under-16s: Analysis of Global Trends and Policy Impact",
    summary_en: "Amid growing global concern regarding adolescent mental health, more countries are considering or implementing policies to restrict minors' use of social media. The UK government has announced plans to implement a ban early next year, targeting teenagers under the age of 16. This ban is expected to cover platforms designed for social interaction and content posting, such as Snapchat, TikTok, YouTube, Instagram, Facebook, and X, and will restrict features like live streaming and contact with strangers. However, the government stated that pure messaging services like WhatsApp and Signal will not be included in the ban. Furthermore, the UK government is also considering implementing curfews or limiting infinite scrolling for teenagers under 18. This trend has spread globally; Australia was the first country to implement a ban, and the EU and the US have also proposed similar legislative measures, demonstrating a cross-national policy trend primarily based on academic research confirming a significant link between social media use and mental health issues such as depression and anxiety.",
    tags_en: ["UK", "Social Media", "Adolescent Mental Health", "Policy Restrictions", "Global Trends", "Minor Protection"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/15/uk-becomes-the-latest-country-to-ban-social-media-apps-for-kids", lang: "EN" }
    ]
  },
  {
    id: "20260615-093",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "cURL 專案宣布「夏日寧靜期」，暫停接收免費漏洞報告，要求付費支援合約",
    summary: "cURL 專案的維護者 Daniel Stenberg 宣布，為了緩解近期的巨大壓力，cURL 將從 2026 年 7 月 1 日至 8 月 3 日期間，暫停接收來自未簽訂付費支援合約的漏洞報告。他將此期間稱為「cURL 夏日寧靜期」（curl summer of bliss）。雖然漏洞報告的接收暫停，但專案的 GitHub 議題和拉取請求追蹤器仍會保持開放。此外，原定發布的 cURL 8.22.0 版本，其發布日期已推遲兩週，新的預計發布日為 2026 年 9 月 2 日。此舉主要反映了專案維護者需要一段休息時間，以應對持續的開發壓力。",
    tags: ["cURL", "漏洞報告", "供應鏈", "Open Source", "安全公告"],
    title_en: "cURL Project Announces 'Summer Hiatus,' Halting Acceptance of Free Vulnerability Reports and Requiring Paid Support Contracts",
    summary_en: "cURL maintainer Daniel Stenberg announced that, in order to alleviate recent immense pressure, cURL will temporarily halt the acceptance of vulnerability reports from those who have not signed a paid support contract, from July 1, 2026, to August 3, 2026. He has termed this period the \"cURL summer of bliss.\" Although the acceptance of vulnerability reports is paused, the project's GitHub issue and pull request trackers will remain open. Furthermore, the originally scheduled release of cURL 8.22.0 has been postponed by two weeks, with the new estimated release date being September 2, 2026. This move primarily reflects the project maintainer's need for a period of rest to cope with continuous development pressure.",
    tags_en: ["cURL", "Vulnerability Report", "Supply Chain", "Open Source", "Security Announcement"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1077946", lang: "EN" }
    ]
  },
  {
    id: "20260615-094",
    trackers: ["os"],
    category: "重點關注",
    title: "Intel發布Performance Skills：利用AI輔助Linux程式碼分析與效能優化",
    summary: "Intel推出「Intel Performance Skills」這項開源專案，旨在為AI代理（AI agents）提供結構化的多步驟工作流程，以協助進行CPU效能分析和優化。該專案支援多個AI工具鏈，包括GitHub CLI、Copilot、Claude Code、OpenAI Codex、Gemini CLI和OpenCode。它是一個遵循MIT授權的專案，能夠偵測並提供修復建議，針對如窄SIMD使用、序列累加器模式、spinlock模式、假共享（false sharing）等各種編碼模式，以提升程式效能。在分析流程中，該專案整合了Linux的`perf`工具進行資料收集，並原生支援Phoronix Test Suite，可執行基準測試並分析優化成果。舉例而言，在某個基準測試中，他們發現了可實現16倍的效能優化。該專案目前可在GitHub的intel/intel-performance-skills位址找到。",
    tags: ["Intel", "Linux", "AI Agent", "性能優化", "SIMD", "GitHub", "Phoronix"],
    title_en: "Intel Releases Performance Skills: Utilizing AI to Assist Linux Code Analysis and Performance Optimization",
    summary_en: "Intel has launched 'Intel Performance Skills,' an open-source project designed to provide structured, multi-step workflows for AI agents to assist with CPU performance analysis and optimization. The project supports multiple AI toolchains, including GitHub CLI, Copilot, Claude Code, OpenAI Codex, Gemini CLI, and OpenCode. It is an MIT-licensed project that can detect and provide remediation suggestions for various coding patterns, such as narrow SIMD usage, scalar accumulator patterns, spinlock patterns, and false sharing, to improve code performance. During the analysis process, the project integrates Linux's `perf` tool for data collection and natively supports the Phoronix Test Suite, allowing for benchmark execution and analysis of optimization results. For example, in one benchmark test, they discovered a performance optimization of up to 16x. The project is currently available at the GitHub location intel/intel-performance-skills.",
    tags_en: ["Intel", "Linux", "AI Agent", "Performance Optimization", "SIMD", "GitHub", "Phoronix"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Performance-Skills", lang: "EN" }
    ]
  },
  {
    id: "20260615-095",
    trackers: ["os"],
    category: "重點關注",
    title: "GCC 支援 WebAssembly 後端：C/C++ 程式碼可直接編譯至 WASM 格式",
    summary: "GNU Compiler Collection (GCC) 指導委員會已正式批准在 GCC 中納入 WebAssembly (WASM) 後端支援。這項重大進展允許開發者使用 GCC 編譯器工具鏈，將 C/C++ 甚至 Rust 語言的程式碼直接編譯為 WASM 二進位指令格式。WASM 是一種開放標準，旨在讓 C/C++/Rust 等語言的程式碼能在現代瀏覽器及各種 WASM 環境中實現高效能執行。此新後端旨在取代過去可能需要依賴 LLVM 工具鏈的轉換方式，提供更現代的 GCC 原生支援。雖然目前仍處於早期開發階段，尚未功能完善，但預計初期支援可能會在明年的 GCC 17.1 穩定版本中實現。開發者需注意，這項支援屬於方向上的批准，實際實作仍需經過技術審查與完善。",
    tags: ["GCC", "WebAssembly", "WASM", "C/C++", "編譯器工具鏈", "跨平台"],
    title_en: "GCC to Support WebAssembly Backend: C/C++ Code Can Be Directly Compiled to WASM Format",
    summary_en: "The GNU Compiler Collection (GCC) committee has officially approved the inclusion of WebAssembly (WASM) backend support in GCC. This major development allows developers to use the GCC compiler toolchain to directly compile code written in C/C++ and even Rust into the WASM binary instruction format. WASM is an open standard designed to enable high-performance execution of code from languages like C/C++ and Rust across modern browsers and various WASM environments. This new backend aims to replace previous conversion methods that might have relied on the LLVM toolchain, offering more native GCC support. Although currently in an early development stage and not yet fully functional, initial support is expected in the stable GCC 17.1 release next year. Developers should note that this support is an approved direction, and actual implementation still requires technical review and refinement.",
    tags_en: ["GCC", "WebAssembly", "WASM", "C/C++", "Compiler Toolchain", "Cross-platform"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GCC-Steering-WebAssembly", lang: "EN" }
    ]
  },
  {
    id: "20260615-096",
    trackers: ["os"],
    category: "重點關注",
    title: "Firefox 152.0 重大更新：預設內建 JPEG-XL 支援，並提升 Windows HDR 影片與 CSS 功能",
    summary: "Mozilla 發布 Firefox 152.0 版本，該版本的主要更新包括預設內建 JPEG-XL 影像格式支援程式碼。雖然該功能預設仍需透過「Firefox Labs」手動啟用，但這使得在 Beta 和正式版建置中都能更容易進行實驗性測試。此外，Firefox 152 也帶來了重新設計的設定介面、支援 Windows 上的 HDR 影片，以及新增了對 CSS field-sizing 屬性的支援。開發者可參考 developer.mozilla.org 了解更多開發者新增功能。未來 Firefox 153 版本預計將加入 Vulkan 影片解碼支援。開發者和用戶可從 ftp.mozilla.org 下載 Firefox 152.0 的發行二進位檔案。",
    tags: ["Firefox", "Mozilla", "Firefox 152.0", "JPEG-XL", "HDR 影片", "CSS"],
    title_en: "Firefox 152.0 Major Update: Default Built-in JPEG-XL Support, and Enhanced Windows HDR Video and CSS Functionality",
    summary_en: "Mozilla has released Firefox 152.0, the main updates for which include default built-in support for the JPEG-XL image format. Although this feature still requires manual activation via 'Firefox Labs,' it makes experimental testing easier in both Beta and stable builds. Furthermore, Firefox 152 also introduces a redesigned settings interface, support for HDR video on Windows, and added support for the CSS field-sizing property. Developers can refer to developer.mozilla.org for more developer-related additions. Future Firefox 153 is expected to include Vulkan video decoding support. Developers and users can download the Firefox 152.0 release binaries from ftp.mozilla.org.",
    tags_en: ["Firefox", "Mozilla", "Firefox 152.0", "JPEG-XL", "HDR Video", "CSS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Firefox-152-Download", lang: "EN" }
    ]
  },
  {
    id: "20260615-097",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "研究人員指出：利用「修復程式碼」提示而非「越獄」提示，可誘騙大型語言模型（LLM）產生惡意輸出",
    summary: "一名研究人員指出，大型語言模型（LLM）的安全性評估常過度關注「越獄」（Jailbreak）攻擊，但實際上，更簡單的「修復程式碼」（fix this code）提示就能誘騙模型產生惡意輸出。這類攻擊利用了模型在處理程式碼和修復任務時的上下文理解偏差，使其在看似無害的程式碼修正流程中洩漏敏感資訊或執行惡意行為。文章強調，攻擊的本質並非突破模型的安全限制，而是利用了模型在特定任務（如程式碼輔助）上的邏輯漏洞。實務上，開發者和資安人員應警惕模型在處理程式碼輔助任務時的上下文洩漏風險，並應從輸入驗證和輸出過濾等多層次機制進行加固，而非僅依賴傳統的越獄防禦。目前文章未提供具體受影響模型或版本號，僅指出這是一種普遍的 LLM 應用層面漏洞。",
    tags: ["LLM", "大型語言模型", "AI安全", "提示工程", "程式碼漏洞", "Anthropic"],
    title_en: "Researchers Point Out: Using 'Fix Code' Prompts, Not 'Jailbreak' Prompts, to Trick Large Language Models (LLMs) into Generating Malicious Output",
    summary_en: "A researcher points out that the security evaluation of Large Language Models (LLMs) often overemphasizes 'Jailbreak' attacks, when in fact, a simpler 'fix this code' prompt can trick the model into generating malicious output. These attacks exploit the model's contextual understanding bias when processing code and fixing tasks, causing it to leak sensitive information or perform malicious actions during what appears to be a harmless code correction process. The article emphasizes that the nature of the attack is not about breaking the model's safety limits, but rather exploiting a logical vulnerability in the model when performing specific tasks (such as code assistance). In practice, developers and security personnel should be vigilant about the risk of contextual leakage when the model is performing code assistance tasks, and should strengthen defenses using multi-layered mechanisms like input validation and output filtering, rather than relying solely on traditional jailbreak defenses. The article currently does not provide specific affected models or version numbers, only pointing out that this is a general LLM application-layer vulnerability.",
    tags_en: ["LLM", "Large Language Model", "AI Security", "Prompt Engineering", "Code Vulnerability", "Anthropic"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/15/feds-freaked-over-fable-5-after-simple-fix-this-code-prompt-not-jailbreak-says-researcher/5255827", lang: "EN" }
    ]
  },
  {
    id: "20260615-098",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "歐洲理事會遭駭客攻擊：研究揭露大型組織的資安風險與供應鏈漏洞",
    summary: "本文報導了歐洲理事會（Council of Europe）遭受駭客攻擊的事件，指出這類攻擊往往利用了組織的內部系統或供應鏈中的弱點。攻擊的本質是針對大型、關鍵基礎設施的資訊系統，而非單純的技術漏洞。實務影響顯示，即使是國際級的組織，其資訊安全防線也可能因管理疏忽、第三方服務商的弱點，或缺乏完善的網路隔離機制而遭到突破。修補建議著重於強化供應鏈安全管理、實施零信任架構，並對內部系統進行定期的、全面的安全審計，以防止攻擊者從非核心系統滲透到核心數據。",
    tags: ["歐洲理事會", "資安事件", "供應鏈風險", "零信任", "資訊安全"],
    title_en: "Council of Europe Hacked: Research Reveals Cybersecurity Risks and Supply Chain Vulnerabilities in Large Organizations",
    summary_en: "This article reports on the hacking incident involving the Council of Europe, pointing out that such attacks often exploit weaknesses within an organization's internal systems or supply chain. The nature of the attack targets the information systems of large, critical infrastructure, rather than merely technical vulnerabilities. Practical implications show that even international-level organizations can have their information security defenses breached due to management negligence, third-party vendor weaknesses, or lack of comprehensive network isolation mechanisms. Remediation suggestions focus on strengthening supply chain security management, implementing zero trust architecture, and conducting regular, comprehensive security audits of internal systems to prevent attackers from infiltrating core data through non-core systems.",
    tags_en: ["Council of Europe", "Cybersecurity Incident", "Supply Chain Risk", "Zero Trust", "Information Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/06/15/council-of-europe-hacked-in-shinyhunters-peoplesoft-heist/5255757", lang: "EN" }
    ]
  },
  {
    id: "20260615-099",
    trackers: ["os"],
    category: "重點關注",
    title: "Java Valhalla 特性預覽：JDK 28 引入新的物件模型支援",
    summary: "Java 開發生態系統宣布，Valhalla 特性已在 JDK 28 中推出預覽版。Valhalla 旨在解決 Java 語言在處理複雜、結構化資料（如記錄或陣列）時的限制，特別是透過引入「值類型」（Value Types）的概念。這項更新對於需要高效處理大量結構化資料的應用程式，如遊戲引擎、科學模擬或大型數據處理系統，具有實質的效能提升潛力。開發者應關注此預覽版，並規劃其在未來版本中的穩定採用。目前原文未提供具體的 CVSS 分數或受影響產品列表，但其核心影響是提升 Java 語言的資料處理能力，建議開發者關注 JDK 28 及後續版本的相關文件，以了解最佳實踐和遷移路徑。",
    tags: ["Java", "JDK 28", "Valhalla", "值類型", "Java 開發", "物件模型"],
    title_en: "Java Valhalla Feature Preview: JDK 28 Introduces New Object Model Support",
    summary_en: "The Java development ecosystem announced that the Valhalla feature is available in preview in JDK 28. Valhalla aims to address limitations in the Java language when handling complex, structured data (such as records or arrays), particularly by introducing the concept of 'Value Types.' This update has the potential for significant performance improvements for applications that require efficient handling of large amounts of structured data, such as game engines, scientific simulations, or large-scale data processing systems. Developers should monitor this preview and plan for its stable adoption in future versions. While the original text does not provide specific CVSS scores or affected product lists, its core impact is enhancing Java's data processing capabilities. Developers are advised to follow documentation related to JDK 28 and subsequent versions to understand best practices and migration paths.",
    tags_en: ["Java", "JDK 28", "Valhalla", "Value Types", "Java Development", "Object Model"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/06/15/javas-project-valhalla-finally-lands-a-preview-in-jdk-28/5255557", lang: "EN" }
    ]
  },
  {
    id: "20260615-100",
    trackers: ["os"],
    category: "重點關注",
    title: "美國數據中心法案或將到期，缺乏替代方案，可能導致聯邦機構的數據安全監管出現真空期",
    summary: "美國聯邦機構（Feds）的數據中心法案（US Data Center Law）面臨到期風險，且目前缺乏明確的替代或更新法案來接替其監管職能。這可能導致聯邦政府在數據中心的安全和合規性監管上出現監管真空期。雖然原文未提供具體的漏洞或技術細節，但其實務影響在於，聯邦機構在數據儲存、處理和傳輸的標準化安全要求可能在法案到期後變得模糊或不確定。建議相關機構應密切關注美國國會和聯邦政府的立法進展，提前規劃數據治理和安全架構的轉型，以應對潛在的監管不確定性。",
    tags: ["美國聯邦政府", "數據中心法案", "監管真空", "資安法規", "數據治理"],
    title_en: "US Data Center Law may expire, and without alternatives, could create a regulatory vacuum for federal agency data security oversight",
    summary_en: "The US Data Center Law governing federal agencies (Feds) faces expiration risks, and there is currently no clear alternative or updated legislation to assume its regulatory functions. This could lead to a regulatory vacuum regarding the security and compliance oversight of data centers within the federal government. Although the original text does not provide specific vulnerabilities or technical details, the practical implication is that standardized security requirements for data storage, processing, and transmission by federal agencies may become ambiguous or uncertain after the law expires. It is recommended that relevant organizations closely monitor legislative developments from the U.S. Congress and federal government, and proactively plan for the transition of data governance and security architecture to address potential regulatory uncertainty.",
    tags_en: ["U.S. Federal Government", "Data Center Law", "Regulatory Vacuum", "Cybersecurity Regulations", "Data Governance"],
    sources: [
      { name: "The Register", url: "https://theregister.com/public-sector/2026/06/15/feds-snooze-as-us-datacenter-law-set-to-lapse-with-no-replacement-in-site/5255679", lang: "EN" }
    ]
  },
  {
    id: "20260615-101",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Y2K 漏洞重現：開發者發現舊版 BSD 系統中的時效性缺陷",
    summary: "一位開發者在研究舊版 BSD 系統時，發現了一個與 Y2K 相關的時效性缺陷。此漏洞的本質是系統在處理日期時間計算時可能出現的邊界條件錯誤，類似於歷史上的 Y2K 問題。雖然原文未提供具體的 CVE 編號、CVSS 分數或受影響版本範圍，但此類缺陷通常會影響到運行了數十年、且未進行全面現代化維護的遺留系統。實務上，這提醒了資安人員不能低估老舊系統（Legacy Systems）的風險，即使是看似穩定的基礎設施，也可能存在未被發現的時效性或邊界條件漏洞。修補建議應包括對所有運行舊版作業系統的系統進行徹底的日期時間庫和時間處理邏輯審核與更新。",
    tags: ["BSD", "Y2K", "時效性漏洞", "遺留系統", "作業系統", "安全缺陷"],
    title_en: "Y2K Vulnerability Reappears: Developer Finds Temporal Flaw in Old BSD System",
    summary_en: "While researching an old BSD system, a developer discovered a temporal flaw related to Y2K. The essence of this vulnerability is a potential boundary condition error that the system might encounter when processing date and time calculations, similar to the historical Y2K problem. Although the original text did not provide specific CVE IDs, CVSS scores, or affected version ranges, such flaws typically impact legacy systems that have been running for decades and have not undergone comprehensive modernization maintenance. Practically, this reminds cybersecurity personnel not to underestimate the risk posed by legacy systems, as even seemingly stable infrastructure may contain undiscovered temporal or boundary condition vulnerabilities. Remediation recommendations should include thorough auditing and updating of date/time libraries and time processing logic for all systems running old operating systems.",
    tags_en: ["BSD", "Y2K", "Temporal Vulnerability", "Legacy Systems", "Operating System", "Security Flaw"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/06/15/the-y2k-bug-is-back-dutch-dev-digs-up-untimely-flaw-in-old-bsd-build/5255645", lang: "EN" }
    ]
  },
  {
    id: "20260615-102",
    trackers: ["os"],
    category: "重點關注",
    title: "Google揭露：指控來自中國的間諜活動已在醫療研究網路中持續超過一年",
    summary: "Google透過研究報告揭露，有來自中國的間諜活動團體已在多個醫療研究網路中進行長期滲透和情報竊取。這些活動的持續時間已超過一年，顯示出高度的組織性和持久性。攻擊者利用這些網路作為目標，竊取敏感的醫療研究數據和知識產權。報告指出，這些行為屬於國家級的情報戰，對全球醫療研究的完整性和數據安全構成了嚴重威脅。雖然原文未提供具體的CVE或CVSS分數，但其實務影響極為重大，可能導致研究成果被竊取，影響公共衛生和醫療進展。修補建議包括：醫療機構和研究單位必須立即強化網路邊界安全、實施嚴格的數據分類與存取控制（DAC），並對所有外部連線和合作夥伴進行徹底的背景調查和安全審計，以防範長期、隱蔽的情報竊取。",
    tags: ["Google", "中國", "間諜活動", "醫療網路", "情報竊取", "國家級威脅"],
    title_en: "Google Reveals: Alleged China-Origin Espionage Activity Persists in Medical Research Networks for Over a Year",
    summary_en: "According to a research report released by Google, espionage groups originating from China have been conducting long-term infiltration and intelligence theft within multiple medical research networks. The persistence of these activities, lasting over a year, indicates a high degree of organization and longevity. The attackers are targeting these networks to steal sensitive medical research data and intellectual property. The report indicates that these actions constitute state-level intelligence warfare, posing a severe threat to the integrity and data security of global medical research. Although the original text does not provide specific CVE or CVSS scores, the practical impact is extremely significant, potentially leading to the theft of research findings and impacting public health and medical progress. Remediation recommendations include: Medical institutions and research units must immediately strengthen network perimeter security, implement strict Data Access Control (DAC), and conduct thorough background checks and security audits on all external connections and partners to prevent long-term, covert intelligence theft.",
    tags_en: ["Google", "China", "Espionage Activity", "Medical Network", "Intelligence Theft", "State-Level Threat"],
    sources: [
      { name: "The Register", url: "https://theregister.com/research/2026/06/15/google-says-prc-linked-spies-hid-in-medical-research-networks-for-more-than-a-year/5254547", lang: "EN" }
    ]
  },
  {
    id: "20260615-103",
    trackers: ["os"],
    category: "重點關注",
    title: "美國對 Anthropic 模型限制引發歐盟主權意識，推動技術獨立性需求",
    summary: "隨著美國對 Anthropic 等大型語言模型（LLMs）的使用限制日益嚴格，歐盟（EU）的反應是將此轉化為推動技術主權和獨立性的巨大動力。歐盟官方指出，來自美國的存取限制證明了歐洲在關鍵技術領域，特別是人工智慧和計算能力方面，必須建立更強大的自主基礎設施。這場地緣政治的壓力促使歐盟加速其在 AI 治理、基礎設施建構以及本土模型開發上的投入。對於開發者和企業而言，這意味著需要關注跨國數據流動的風險，並加速採用符合歐盟規範、具備高度本地化和自主可控能力的 AI 解決方案，以應對潛在的外部技術封鎖風險。",
    tags: ["Anthropic", "大型語言模型", "LLMs", "歐盟", "技術主權", "地緣政治"],
    title_en: "US Restrictions on Anthropic Models Spark EU Sovereignty Concerns, Driving Demand for Technological Independence",
    summary_en: "As the US tightens restrictions on the use of large language models (LLMs) such as Anthropic's, the EU's response is to transform this into a major impetus for promoting technological sovereignty and independence. EU officials point out that access restrictions originating from the US demonstrate that Europe must build a stronger autonomous infrastructure in critical technological areas, particularly in artificial intelligence and computing power. This geopolitical pressure is accelerating the EU's investment in AI governance, infrastructure construction, and developing indigenous models. For developers and enterprises, this means paying attention to the risks of cross-border data flow and accelerating the adoption of AI solutions that comply with EU regulations, possess high levels of localization, and ensure autonomous control, in order to cope with potential external technological blockade risks.",
    tags_en: ["Anthropic", "LLMs", "EU", "Technological Sovereignty", "Geopolitics"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/15/us-clampdown-on-anthropic-models-sends-eu-sovereignty-surge-into-overdrive/5255487", lang: "EN" }
    ]
  },
  {
    id: "20260615-104",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無資安事件報導，無法生成新聞標題",
    summary: "原文為資安產業新聞彙整，未提及具體的漏洞、CVE 編號或單一事件，無法撰寫具體的新聞摘要。",
    tags: ["資安產業趨勢", "AI 攻擊", "零信任", "供應鏈", "OpenBSD", "Microsoft 365"],
    title_en: "No Security Incident Report Available, Cannot Generate News Title",
    summary_en: "The original text is a compilation of cybersecurity industry news and does not mention specific vulnerabilities, CVE IDs, or a single incident, making it impossible to write a specific news summary.",
    tags_en: ["Cybersecurity Industry Trends", "AI Attacks", "Zero Trust", "Supply Chain", "OpenBSD", "Microsoft 365"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/15/uk-ai-hiring-surges-as-firms-seek-people-to-babysit-the-bots/5255437", lang: "EN" }
    ]
  },
  {
    id: "20260615-105",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布自身在生成式 AI 應用中的責任，強調 AI 系統的潛在風險與法律責任",
    summary: "本文報導 Google 關於其 AI 產品的責任歸屬與潛在風險的討論。文章指出，隨著 AI 應用（特別是大型語言模型，LLMs）的普及，其產生的內容可能包含不準確、有偏見或具有誤導性的資訊。Google 正在加強其在 AI 輸出內容的審核機制，並強調開發者和使用者必須對 AI 系統的輸出結果負起最終的責任。實務上，這意味著企業在將 AI 整合到核心業務流程時，必須建立嚴格的驗證和審核層，以避免因 AI 錯誤導致的法律或業務風險。建議開發者應採用多層次的驗證流程，並在使用者介面提供明確的免責聲明，以管理用戶的期望和風險。",
    tags: ["Google", "AI", "LLMs", "責任歸屬", "生成式AI", "風險管理"],
    title_en: "Google Declares Responsibility in Generative AI Applications, Emphasizing Potential Risks and Legal Liabilities of AI Systems",
    summary_en: "This article reports on Google's discussion regarding the accountability and potential risks associated with its AI products. It points out that with the proliferation of AI applications (especially Large Language Models, LLMs), the content generated may contain inaccurate, biased, or misleading information. Google is strengthening its review mechanisms for AI output content and emphasizes that developers and users must bear the ultimate responsibility for the output of AI systems. Practically, this means that when enterprises integrate AI into core business processes, they must establish strict validation and review layers to avoid legal or business risks caused by AI errors. It is recommended that developers adopt multi-layered validation processes and provide clear disclaimers in the user interface to manage user expectations and risks.",
    tags_en: ["Google", "AI", "LLMs", "Accountability", "Generative AI", "Risk Management"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/15/google-found-liable-for-bad-ai-overview-results-lets-play-truth-or-consequences/5254897", lang: "EN" }
    ]
  },
  {
    id: "20260615-106",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "原文內容為資安產業新聞匯總，涵蓋 LLM 攻擊、Kubernetes 雲原生架構、Microsoft 365 安全、AI 輔助攻擊、零信任模型、以及多個 OS（OpenBSD、Fedora）的更新與產業動態，未提及單一具體的 CVE 或受影響產品。因此無法撰寫具體的受影響產品和修補建議。",
    tags: ["AI 攻擊", "零信任", "LLM", "雲原生", "OpenBSD", "Fedora"],
    title_en: "N/A",
    summary_en: "The original content is a compilation of cybersecurity industry news, covering topics such as LLM attacks, Kubernetes cloud-native architecture, Microsoft 365 security, AI-assisted attacks, zero trust models, and updates/industry dynamics for multiple OSs (OpenBSD, Fedora). It does not mention a single specific CVE or affected product. Therefore, it is impossible to write specific affected products and patch recommendations.",
    tags_en: ["AI Attacks", "Zero Trust", "LLM", "Cloud-Native", "OpenBSD", "Fedora"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/06/15/munch-museum-windows-display-gives-visitors-something-to-scream-about/5254084", lang: "EN" }
    ]
  },
  {
    id: "20260615-107",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft Teams「辦公室地點偵測」功能將推出：透過 Wi-Fi 識別用戶在辦公室的臨場狀態",
    summary: "Microsoft 正在推動一項名為「Workplace check-in」的爭議功能，允許組織透過 Wi-Fi 訊號追蹤員工是否在辦公室。此功能需結合 Microsoft Teams 與 Microsoft Places 目錄使用。其運作原理並非即時定位，而是根據用戶連線到特定辦公室 Wi-Fi 訊號（如 BSSID）來判斷其所在地點（如特定樓層或建築）。雖然 Microsoft 強調此功能預設不會啟用，且用戶可選擇「Opt out」，但實務上，IT 管理員仍可透過設定強制啟用。該功能要求用戶在作業系統層級和 Teams 應用層級都授予位置權限。這項變動的實務影響是，企業可以了解員工在特定時間點是否在辦公室，但 Microsoft 聲明不會監控員工在樓層間的移動。建議用戶和組織應留意其隱私權風險，並了解其強制性設定的潛在風險。",
    tags: ["Microsoft Teams", "Workplace check-in", "Wi-Fi 定位", "隱私權", "企業應用", "Microsoft Places"],
    title_en: "Microsoft Teams 'Office Location Detection' Feature to Launch: Identifying User Presence in the Office via Wi-Fi",
    summary_en: "Microsoft is promoting a controversial feature called 'Workplace check-in,' which allows organizations to track whether employees are physically present in the office using Wi-Fi signals. This feature requires the integration of Microsoft Teams and the Microsoft Places directory. Its operating principle is not real-time location tracking, but rather determining the user's location (such as a specific floor or building) based on the user connecting to a specific office Wi-Fi signal (e.g., BSSID). Although Microsoft emphasizes that this feature is disabled by default and that users can 'Opt out,' in practice, IT administrators can still enforce its activation through settings. The feature requires users to grant location permissions at both the operating system and the Teams application levels. The practical impact of this change is that companies can understand whether employees are in the office at a specific time, but Microsoft states that it will not monitor employee movement between floors. Users and organizations are advised to pay attention to the privacy risks and understand the potential risks associated with mandatory settings.",
    tags_en: ["Microsoft Teams", "Workplace check-in", "Wi-Fi Location", "Privacy", "Enterprise Applications", "Microsoft Places"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/15/microsoft-teams-will-auto-detect-when-youre-at-the-office-via-wi-fi-roll-out-confirmed-but-you-can-opt-out", lang: "EN" }
    ]
  }
];
