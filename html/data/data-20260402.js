// data-20260402.js — 2026-04-02
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-02"] = [
  {
    id: "20260402-001",
    trackers: ["security"],
    category: "重大事件",
    title: "德州Nacogdoches紀念醫院遭駭：25 萬人個人與健康資料外洩事件分析",
    summary: "Nacogdoches Memorial Hospital (NMH) 確認發生資料外洩事件，受影響人數初步估計超過 25 萬人。此次事件發生在駭客入侵醫院內部網路和資訊系統後。受影響的個人資料極為敏感，包含姓名、地址、電話、電子郵件、社會安全碼、出生日期、病歷號碼、帳號、健康保險受益人號碼及照片等。醫院已立即重設網路安全、強化防護，並通知了執法機構。儘管醫院提醒受影響者保持警惕，但目前尚未提供免費的身份盜竊或信用監控服務。NMH 尚未透露攻擊者身份，且沒有已知的勒索軟體團體聲稱負責。此事件凸顯了醫療機構在數位化過程中，個人健康資料保護的重大風險。",
    tags: ["Nacogdoches Memorial Hospital", "資料外洩", "醫療健康資訊", "社會安全碼", "網路安全"],
    title_en: "Nacogdoches Memorial Hospital Hacked: Analysis of Data Breach Affecting 250,000 People",
    summary_en: "Nacogdoches Memorial Hospital (NMH) has confirmed a data breach, initially affecting over 250,000 individuals. The incident occurred after hackers infiltrated the hospital's internal network and information systems. The compromised personal data is highly sensitive, including names, addresses, phone numbers, email addresses, social security numbers, dates of birth, medical record numbers, account numbers, health insurance beneficiary numbers, and photos. The hospital has immediately reset its network security and enhanced defenses, and has notified law enforcement agencies. Although the hospital has advised affected individuals to remain vigilant, it has not yet offered free identity theft or credit monitoring services. NMH has not disclosed the attacker's identity, nor has any known ransomware group claimed responsibility. This incident highlights the significant risks associated with protecting personal health data in the digitalization of healthcare institutions.",
    tags_en: ["Nacogdoches Memorial Hospital", "Data Breach", "Healthcare Information", "Social Security Number", "Cybersecurity"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/250000-affected-by-data-breach-at-nacogdoches-memorial-hospital", lang: "EN" }
    ]
  },
  {
    id: "20260402-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Elastic 介紹高階規則（Higher-Order Rules）：透過關聯多重警報提升資安偵測準確性",
    summary: "本文介紹 Elastic Security 的高階規則（Higher-Order Rules, HOR）概念。傳統的原子規則（atomic rules）只能偵測單一行為，容易產生大量警報。HOR 的核心價值在於將相關警報在時間、資料來源或共享實體（如主機、使用者、IP）上進行關聯，從而將分散的訊號組合成更有意義的攻擊模式。這類規則不取代基礎偵測，而是提升多重發現的信心度。實務上，HOR 結合了「實體關聯」、「跨資料來源可見性」和「時間/發生頻率意識」三個原則。它能結合端點、網路、郵件等多個領域的訊號，或追蹤單一實體在不同時間點的異常行為，大幅提高分析師的警報優先級和偵測效率。",
    tags: ["Elastic", "Higher-Order Rules", "警報關聯", "資安偵測", "端點安全", "Triage"],
    title_en: "Elastic Introduces Higher-Order Rules: Enhancing Security Detection Accuracy by Correlating Multiple Alerts",
    summary_en: "This article introduces the concept of Higher-Order Rules (HOR) in Elastic Security. Traditional atomic rules can only detect single behaviors, often leading to a high volume of alerts. The core value of HOR lies in correlating related alerts based on time, data source, or shared entities (such as hosts, users, or IPs), thereby synthesizing scattered signals into more meaningful attack patterns. These rules do not replace foundational detection but rather enhance the confidence level of multi-stage discovery. Practically, HOR combines three principles: 'entity correlation,' 'cross-data source visibility,' and 'time/frequency awareness.' It can combine signals from multiple domains—such as endpoint, network, and email—or track the anomalous behavior of a single entity across different time points, significantly improving the analyst's alert prioritization and detection efficiency.",
    tags_en: ["Elastic", "Higher-Order Rules", "Alert Correlation", "Security Detection", "Endpoint Security", "Triage"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/higher-order-detection-rules", lang: "EN" }
    ]
  }
];
