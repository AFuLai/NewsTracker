// data-20260219.js — 2026-02-19
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-19"] = [
  {
    id: "20260219-001",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "OpenClaw AI 助理：透過 mDNS/DNS-SD 服務發現漏洞，可能導致連線劫持與憑證洩漏",
    summary: "本漏洞影響 OpenClaw 個人 AI 助理應用程式，特別是在使用 Bonjour/mDNS 和 DNS-SD 服務發現的場景。在受影響版本（低於 2026.2.14）中，客戶端會將未經身份驗證的 TXT 記錄（如 `lanHost`、`gatewayPort` 和 `gatewayTlsSha256`）視為權威的路由或固定輸入。攻擊者可在不信任的區域網路（LAN）上廣播惡意的 `_openclaw-gw._tcp` 服務，誘使客戶端連接到攻擊者控制的端點，並可能接受惡意憑證。這可能導致在建立連線過程中，敏感的閘道器憑證（如 `auth.token` 或 `auth.password`）被竊取。此漏洞的實務影響主要限於開發者或測試環境，以及依賴區域網路服務發現的客戶端。修補建議是升級至 OpenClaw 版本 2026.2.14 或更高版本。新版本已修改邏輯，使其優先使用解析後的服務端點（SRV + A/AAAA），並要求 TLS 指紋的設定需經過明確的用戶確認，不再允許服務發現提供的指紋覆蓋儲存的 TLS 固定值。",
    tags: ["OpenClaw", "CVE-2026-26327", "mDNS", "DNS-SD", "TLS Pinning", "區域網路"],
    title_en: "OpenClaw AI Assistant: Vulnerability Discovered via mDNS/DNS-SD Service Discovery May Lead to Connection Hijacking and Credential Leakage",
    summary_en: "This vulnerability affects the OpenClaw personal AI assistant application, particularly in scenarios utilizing Bonjour/mDNS and DNS-SD service discovery. In affected versions (below 2026.2.14), the client treats unauthenticated TXT records (such as `lanHost`, `gatewayPort`, and `gatewayTlsSha256`) as authoritative routing or fixed inputs. An attacker can broadcast malicious `_openclaw-gw._tcp` services on an untrusted Local Area Network (LAN), tricking the client into connecting to an attacker-controlled endpoint and potentially accepting malicious certificates. This could lead to the theft of sensitive gateway credentials (such as `auth.token` or `auth.password`) during the connection establishment process. The practical impact of this vulnerability is primarily limited to developer or testing environments, and clients that rely on local network service discovery. The recommended fix is to upgrade to OpenClaw version 2026.2.14 or higher. The new version has modified the logic to prioritize resolved service endpoints (SRV + A/AAAA), and requires explicit user confirmation for TLS fingerprint settings, no longer allowing the fingerprint provided by service discovery to override stored TLS fixed values.",
    tags_en: ["OpenClaw", "CVE-2026-26327", "mDNS", "DNS-SD", "TLS Pinning", "Local Area Network"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-26327", lang: "EN" }
    ]
  }
];
