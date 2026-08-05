// data-20260104.js — 2026-01-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-04"] = [
  {
    id: "20260104-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕！Microsoft SharePoint 存在資料反序列化漏洞，可遠端執行程式碼",
    summary: "Microsoft SharePoint 存在一項名為 CVE-2026-20963 的嚴重漏洞。此漏洞源於對不受信任資料的處理，允許未經授權的攻擊者透過網路遠端執行程式碼。根據 CVSS 3.1 評分，此漏洞的攻擊向量（AV）為網路（N），攻擊複雜度（AC）為低（L），權限要求（PR）為低（L），使用者互動（UI）為無（N），範圍（S）為無（U），機密性（C）、完整性（I）、可用性（A）均為高（H）。由於此漏洞已被 CISA 列入已知被利用的漏洞目錄（Known Exploited Vulnerabilities Catalog），實務影響極高，建議所有使用 SharePoint 服務的組織應立即採取行動。修補建議包括：根據廠商指示應用修補程式；若為雲端服務，應遵循適用之 BOD 22-01 指引；若無法修補，則應考慮停止使用該產品。建議使用 SCA 工具或資安管理系統，監控並修補所有受影響的 SharePoint 版本。",
    tags: ["Microsoft SharePoint", "CVE-2026-20963", "反序列化漏洞", "遠端程式碼執行", "CISA KEV"],
    title_en: "Alert! Microsoft SharePoint has a Deserialization Vulnerability Allowing Remote Code Execution",
    summary_en: "Microsoft SharePoint contains a critical vulnerability identified as CVE-2026-20963. This vulnerability stems from the handling of untrusted data, allowing unauthorized attackers to remotely execute code over the network. According to the CVSS 3.1 score, the vulnerability has a Network (N) attack vector (AV), Low (L) attack complexity (AC), Low (L) privileges required (PR), None (N) user interaction (UI), and Unchanged (U) scope (S). Furthermore, Confidentiality (C), Integrity (I), and Availability (A) are all rated High (H). Since this vulnerability has been listed by CISA in the Known Exploited Vulnerabilities Catalog, the practical impact is extremely high, and all organizations using SharePoint services are advised to take immediate action. Recommended remediation steps include: applying the patch according to the vendor's instructions; if using a cloud service, following the applicable BOD 22-01 guidelines; and if patching is impossible, considering discontinuing the use of the product. It is recommended to use SCA tools or security management systems to monitor and patch all affected SharePoint versions.",
    tags_en: ["Microsoft SharePoint", "CVE-2026-20963", "Deserialization Vulnerability", "Remote Code Execution", "CISA KEV"],
    sources: [
      { name: "NVD (NIST)", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-20963", lang: "EN" }
    ]
  }
];
