// data-20260518.js — 2026-05-18
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-18"] = [
  {
    id: "20260518-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Grafana 確認遭資料外洩：駭客透過 GitHub 存取權限竊取程式碼，但未影響客戶資料",
    summary: "開源視覺化與分析軟體提供商 Grafana 確認發生資料外洩事件。該公司指出，入侵可能源於一個被盜用的存取 Token，該 Token 授予了駭客進入 Grafana Labs GitHub 環境的權限。駭客成功下載了 Grafana 的程式碼庫，並曾要求贖金以防止原始碼外洩，但 Grafana 已決定不支付。公司強調，本次事件並未竊取任何個人或客戶資訊，也未影響客戶系統或營運。Grafana 已重設了受損憑證，並正在進行鑑識分析。值得注意的是，駭客組織 Coinbase Cartel 聲稱在 5 月 15 日將 Grafana 列入其洩露網站，但當時並未發現資料外洩。分析指出，Coinbase Cartel 是一個進行大規模資料竊取活動的駭客聯盟，與 ShinyHunters、Scattered Spider 等組織有關聯。",
    tags: ["Grafana", "GitHub", "資料外洩", "開源軟體", "Coinbase Cartel", "程式碼竊取"],
    title_en: "Grafana Confirms Data Leak: Hacker Steals Code via GitHub Access, But No Customer Data Affected",
    summary_en: "Open-source visualization and analytics software provider Grafana confirmed a data leak incident. The company stated that the intrusion may have originated from a stolen access Token, which granted the hacker access to the Grafana Labs GitHub environment. The hacker successfully downloaded Grafana's code repository and had demanded a ransom to prevent the source code from being leaked, but Grafana has decided not to pay. The company emphasized that this incident did not steal any personal or customer information, nor did it affect customer systems or operations. Grafana has reset the compromised credentials and is conducting forensic analysis. Notably, the hacker group Coinbase Cartel claimed to list Grafana on its leak site on May 15, but no data leak was found at that time. Analysis points out that Coinbase Cartel is a hacker collective involved in large-scale data theft activities, associated with groups such as ShinyHunters and Scattered Spider.",
    tags_en: ["Grafana", "GitHub", "Data Leak", "Open Source Software", "Coinbase Cartel", "Code Theft"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/grafana-confirms-breach-after-hackers-claim-they-stole-data", lang: "EN" }
    ]
  },
  {
    id: "20260518-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA承包商GitHub儲存AWS GovCloud金鑰與內部密碼，曝露多個高權限系統憑證",
    summary: "資安專家發現，一位為網路安全與基礎設施安全局（CISA）工作的承包商，曾在公共GitHub儲存庫中洩露了大量高度敏感的內部憑證和金鑰。該儲存庫包含用於建構、測試和部署軟體的內部流程細節，被評為近期政府資料洩露事件中最嚴重之一。洩露的內容包括用於三個Amazon AWS GovCloud伺服器的管理員憑證（如`importantAWStokens`），以及包含多個內部CISA系統（如「LZ-DSO」）明文帳號密碼的CSV檔案。專家指出，這屬於典型的安全衛生不良行為，包括在公共儲存庫中儲存明文密碼、禁用GitHub的密鑰偵測功能等。這些洩露的AWS金鑰已被驗證可透過高權限登入三個GovCloud帳戶，且包含用於CISA內部程式庫（artifactory）的憑證，這對惡意攻擊者而言是極具吸引力的橫向移動目標。CISA方面已了解此事件，並正在調查，但未公開說明資料是否已被盜用。修補建議是嚴格實施最小權限原則，並禁止將任何形式的敏感憑證或金鑰儲存在公共程式碼儲存庫中。",
    tags: ["CISA", "AWS GovCloud", "GitHub", "憑證洩露", "密碼學", "資安衛生"],
    title_en: "CISA Contractor Stores AWS GovCloud Keys and Internal Passwords on GitHub, Exposing Multiple High-Privilege System Credentials",
    summary_en: "Security experts discovered that a contractor working for the Cybersecurity and Infrastructure Security Agency (CISA) leaked a large amount of highly sensitive internal credentials and keys in a public GitHub repository. The repository contained internal process details used for building, testing, and deploying software, and is considered one of the most severe recent government data leaks. The leaked content included administrator credentials for three Amazon AWS GovCloud servers (such as `importantAWStokens`), and CSV files containing plaintext usernames and passwords for multiple internal CISA systems (such as 'LZ-DSO'). Experts pointed out that this constitutes typical poor security hygiene, including storing plaintext passwords in public repositories and disabling GitHub's key detection features. The leaked AWS keys have been verified to allow high-privilege login to three GovCloud accounts, and include credentials for CISA's internal artifactory, making them highly attractive targets for lateral movement by malicious attackers. CISA is aware of the incident and is investigating, but has not publicly disclosed whether the data has been compromised. Remediation recommendations include strictly implementing the principle of least privilege and prohibiting the storage of any form of sensitive credentials or keys in public code repositories.",
    tags_en: ["CISA", "AWS GovCloud", "GitHub", "Credential Leak", "Cryptography", "Security Hygiene"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github", lang: "EN" }
    ]
  },
  {
    id: "20260518-003",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "歐盟資安中心招募專家：參與數位歐洲與地平線計畫，強化歐盟網路安全能力",
    summary: "歐洲網路安全工業、技術與研究能力中心（ECCC）正在積極招募資安專家，以支持歐盟在網路安全、數位韌性及技術主權領域的投資擴張。這些專家將透過合約方式參與評估歐盟資安基金計畫（如數位歐洲計畫和地平線歐洲計畫）的申請、監控已資助專案及合約等工作。參與者應具備至少五年資安工作經驗，領域涵蓋資安研究、安全工程、CISO、資安顧問、合規或關鍵基礎設施保護等。由於工作性質為獨立專家參與，而非永久職位，但能參與塑造歐洲資安格局的網絡。申請者需具備流利的英文能力，並鼓勵女性專業人士申請。詳細資訊請查閱 Funding and Tenders 網站。",
    tags: ["ECCC", "數位歐洲計畫", "地平線歐洲計畫", "網路安全", "資安專家", "歐盟"],
    title_en: "EU Cybersecurity Center Recruits Experts: Participate in Digital Europe and Horizon Programs to Strengthen EU Cybersecurity Capabilities",
    summary_en: "The European Cybersecurity Center of Competence (ECCC) is actively recruiting cybersecurity experts to support the EU's expanding investments in cybersecurity, digital resilience, and technological sovereignty. These experts will participate on a contractual basis in tasks such as evaluating applications for EU cybersecurity funding programs (such as the Digital Europe Program and the Horizon Europe Program), monitoring funded projects, and managing contracts. Candidates should possess at least five years of cybersecurity work experience, with expertise spanning areas such as cybersecurity research, security engineering, CISO, cybersecurity consulting, compliance, or critical infrastructure protection. As this is an independent expert engagement rather than a permanent position, it offers participation in shaping the European cybersecurity landscape. Applicants must have fluent English proficiency, and female professionals are encouraged to apply. For detailed information, please visit the Funding and Tenders website.",
    tags_en: ["ECCC", "Digital Europe Program", "Horizon Europe Program", "Cybersecurity", "Cybersecurity Expert", "EU"],
    sources: [
      { name: "EC CRA 實施頁面（News）", url: "https://digital-strategy.ec.europa.eu/en/news/eccc-seeks-cybersecurity-experts-major-funding-programmes", lang: "EN" }
    ]
  }
];
