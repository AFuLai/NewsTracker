// data-20260206.js — 2026-02-06
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-06"] = [
  {
    id: "20260206-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：SmarterMail存在未經身份驗證的RCE漏洞，已被勒索軟體攻擊者利用",
    summary: "美國網路安全機構CISA警告，SmarterMail電子郵件和協作伺服器存在多個漏洞，其中一個被識別為CVE-2026-24423，已被攻擊者在野外利用。此漏洞屬於未經身份驗證的遠端程式碼執行（RCE）缺陷，透過ConnectToHub API觸發。由於該API處理來自遠端伺服器的請求，攻擊者可以定義任意的命令執行參數，並將其傳遞至終點，導致在所有平台上執行惡意命令。根本原因在於ConnectToHub API允許匿名使用者並處理POST請求中的JSON資料。攻擊者可利用此缺陷在Linux系統上提升權限。CISA已將CVE-2026-24423列入已知被利用漏洞（KEV）目錄，並警告勒索軟體團體已利用此漏洞。SmarterMail已於1月15日發布了修補版本9511，修補了CVE-2026-24423及先前被利用的兩個缺陷，建議使用者盡快更新。",
    tags: ["SmarterMail", "CVE-2026-24423", "RCE", "CISA", "勒索軟體", "ConnectToHub API"],
    title_en: "CISA Warns: SmarterMail Has Unauthenticated RCE Vulnerability Exploited by Ransomware Attackers",
    summary_en: "The U.S. cybersecurity agency CISA has warned that the SmarterMail email and collaboration server contains multiple vulnerabilities, one of which is identified as CVE-2026-24423 and has been exploited in the wild by attackers. This vulnerability is an unauthenticated Remote Code Execution (RCE) flaw, triggered via the ConnectToHub API. Because this API processes requests from remote servers, attackers can define arbitrary command execution parameters and pass them to the endpoint, leading to the execution of malicious commands on all platforms. The root cause is that the ConnectToHub API allows anonymous users and processes JSON data within POST requests. Attackers can exploit this flaw to escalate privileges on Linux systems. CISA has listed CVE-2026-24423 in its Known Exploited Vulnerabilities (KEV) catalog, warning that ransomware groups have utilized this vulnerability. SmarterMail released a patched version 9511 on January 15th, which fixes CVE-2026-24423 and two previously exploited flaws, and recommends that users update as soon as possible.",
    tags_en: ["SmarterMail", "CVE-2026-24423", "RCE", "CISA", "Ransomware", "ConnectToHub API"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/critical-smartermail-vulnerability-exploited-in-ransomware-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260206-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "BeyondTrust 遠端支援/特權存取漏洞（CVE-2026-1731）：未經身份驗證即可執行系統指令",
    summary: "BeyondTrust 的遠端支援（Remote Support, RS）和特定版本的特權遠端存取（Privileged Remote Access, PRA）產品，存在一項關鍵的預身份驗證遠端程式碼執行漏洞（CVE-2026-1731）。攻擊者無需身份驗證，僅需發送特殊編造的請求，即可在網站使用者的權限下執行作業系統指令。此漏洞已被 CISA 列入已知被利用漏洞目錄，屬於嚴重的遠端程式碼執行（RCE）風險。該漏洞的技術根源為不當處理作業系統指令（CWE-78）。修補建議是立即根據廠商指示實施緩解措施，或遵循適用業務持續性計畫（BOD 22-01）的指導，若無法緩解，應考慮停用該產品。受影響版本包括 PRA 和 RS 的特定舊版。",
    tags: ["BeyondTrust", "CVE-2026-1731", "遠端程式碼執行", "RCE", "OS Command Injection", "CISA"],
    title_en: "BeyondTrust Remote Support/Privileged Access Vulnerability (CVE-2026-1731): Execution of System Commands Without Authentication",
    summary_en: "A critical pre-authentication Remote Code Execution (RCE) vulnerability (CVE-2026-1731) exists in BeyondTrust's Remote Support (RS) and specific versions of Privileged Remote Access (PRA) products. Attackers can execute operating system commands with the privileges of a website user by sending specially crafted requests, without requiring any authentication. This vulnerability has been listed by CISA in its Known Exploited Vulnerabilities Catalog, posing a severe RCE risk. The technical root cause of the vulnerability is the improper handling of operating system commands (CWE-78). The recommended mitigation is to immediately apply patches according to vendor instructions, or, following applicable Business Continuity Plan (BOD 22-01) guidance, if mitigation is not possible, consider disabling the product. Affected versions include specific older versions of PRA and RS.",
    tags_en: ["BeyondTrust", "CVE-2026-1731", "RCE", "OS Command Injection", "CISA"],
    sources: [
      { name: "NVD (NIST)", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-1731", lang: "EN" }
    ]
  }
];
