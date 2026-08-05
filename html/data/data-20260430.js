// data-20260430.js — 2026-04-30
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-30"] = [
  {
    id: "20260430-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "巴西ISP遭DDoS攻擊：Huge Networks CEO私鑰外洩，駭客利用Mirai變種與CVE-2023-1389建構Botnet",
    summary: "巴西DDoS防禦公司Huge Networks（提供巴西ISP服務）的基礎設施遭到駭客入侵，導致其私有SSH金鑰外洩，並被用於建構一個大規模的DDoS Botnet。駭客利用了DNS反射攻擊（DNS reflection）的放大效應，並鎖定了易受CVE-2023-1389（已修補）的TP-Link路由器作為攻擊目標。攻擊活動的證據來自於公開洩露的檔案，顯示駭客透過一個內部存取點（bastion/jump server）取得Root權限，並執行了針對巴西IP區間的攻擊。公司CEO表示，此次未授權活動可能源於2026年1月的數位入侵，該入侵最初是透過一個洩漏的SSH金鑰發生。公司已聘請第三方網路鑑識公司進行調查，並已修復了相關漏洞和輪換了金鑰。",
    tags: ["Huge Networks", "DDoS攻擊", "SSH金鑰外洩", "DNS反射攻擊", "CVE-2023-1389", "Botnet", "Mirai"],
    title_en: "Brazilian ISP Hit by DDoS Attack: Huge Networks CEO Private Key Leak Used by Hackers to Build Botnet Using Mirai Variant and CVE-2023-1389",
    summary_en: "The infrastructure of Huge Networks, a DDoS defense company providing services to Brazilian ISPs, was compromised by hackers, leading to the leakage of its private SSH key. This key was then used to build a large-scale DDoS Botnet. The attackers leveraged DNS reflection amplification and targeted TP-Link routers vulnerable to CVE-2023-1389 (which has been patched). Evidence of the attack activity came from publicly leaked files, showing that hackers obtained Root privileges through an internal access point (bastion/jump server) and executed attacks against Brazilian IP ranges. The company's CEO stated that the unauthorized activity may stem from a digital intrusion in January 2026, which initially occurred via a leaked SSH key. The company has hired a third-party network forensics firm to investigate and has since patched the relevant vulnerabilities and rotated the keys.",
    tags_en: ["Huge Networks", "DDoS attack", "SSH key leak", "DNS reflection attack", "CVE-2023-1389", "Botnet", "Mirai"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/04/anti-ddos-firm-heaped-attacks-on-brazilian-isps", lang: "EN" }
    ]
  }
];
