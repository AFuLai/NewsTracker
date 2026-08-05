// data-20260203.js — 2026-02-03
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-03"] = [
  {
    id: "20260203-001",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客竊取超過 510 萬個 Panera Bread 客戶資料，透過社工攻擊繞過 SSO 系統",
    summary: "美國烘焙咖啡連鎖店 Panera Bread 確認遭駭客入侵，駭客組織 ShinyHunters 聲稱竊取了約 1400 萬筆記錄，包含超過 510 萬個獨特電子郵件地址。此次攻擊並非針對系統漏洞，而是利用語音網路釣魚（vishing）等社會工程學手法，竊取單一登入（SSO）代碼，從而繞過多重驗證（MFA）等傳統安全控制。駭客透過這些方式進入受害組織的雲端軟體服務（SaaS）環境，竊取並公開了包含姓名、地址和電話號碼等敏感的聯絡資訊。資安專家指出，如此大量的帳號資料洩露，對帳號填充（credential stuffing）、網路釣魚和身份盜用等下游風險構成巨大威脅。建議企業應高度警惕以身份為邊界的新型攻擊向量，並加強對 SSO 配置、MFA 疲勞攻擊以及服務台社工攻擊的防禦。",
    tags: ["Panera Bread", "ShinyHunters", "SSO", "vishing", "資料外洩", "社會工程學"],
    title_en: "Hackers Steal Over 5.1 Million Panera Bread Customer Records by Bypassing SSO System via Social Engineering Attack",
    summary_en: "American bakery-cafe chain Panera Bread confirmed a hack, with the hacker group ShinyHunters claiming to have stolen approximately 14 million records, including over 5.1 million unique email addresses. This attack did not target a system vulnerability but instead utilized social engineering methods, such as vishing (voice phishing), to steal Single Sign-On (SSO) codes, thereby bypassing traditional security controls like Multi-Factor Authentication (MFA). The hackers used these methods to gain access to the victim organization's Software as a Service (SaaS) environment, stealing and publicly disclosing sensitive contact information, including names, addresses, and phone numbers. Cybersecurity experts point out that such a massive leak of account data poses a significant threat of downstream risks, including credential stuffing, phishing, and identity theft. Companies are advised to be highly vigilant against new attack vectors where identity is the boundary, and to strengthen defenses against SSO misconfigurations, MFA fatigue attacks, and helpdesk social engineering attacks.",
    tags_en: ["Panera Bread", "ShinyHunters", "SSO", "vishing", "Data Leak", "Social Engineering"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/hackers-leak-5-1-million-panera-bread-accounts", lang: "EN" }
    ]
  }
];
