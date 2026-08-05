// data-20260507.js — 2026-05-07
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-07"] = [
  {
    id: "20260507-001",
    trackers: ["os", "security"],
    category: "Android",
    title: "Optoma CinemaX P2 投影機曝露 ADB 服務，遭網路攻擊可取得 Root 權限",
    summary: "Optoma CinemaX P2 投影機因韌體配置錯誤，曝露了 Android Debug Bridge (ADB) 服務於 TCP 5555 埠，且未要求任何身份驗證。該設備的配置參數 ro.adb.secure=0 禁用了 RSA 金鑰驗證，使得攻擊者僅需在同一網路內，即可透過 ADB 連線取得 Shell，並進一步利用存在於 /system/xbin/su 的 su 二進位檔，無需驗證即可升級至 Root 權限。這類漏洞屬於不當授權（CWE-285），攻擊者可完全控制設備，竊取儲存的 Wi-Fi 憑證、植入持久性惡意軟體，並存取所有設備資料。修補建議應立即更新韌體，並確保 ADB 服務在生產環境中必須啟用身份驗證，並修復 su 二進位檔的權限管理。",
    tags: ["Optoma CinemaX P2", "CVE-2026-30495", "Android Debug Bridge", "ADB", "Root 權限", "韌體安全"],
    title_en: "Optoma CinemaX P2 Projector Exposes ADB Service, Allowing Root Access via Network Attack",
    summary_en: "Due to a firmware configuration error, the Optoma CinemaX P2 projector exposed the Android Debug Bridge (ADB) service on TCP port 5555 without requiring any authentication. The device's configuration parameter `ro.adb.secure=0` disabled RSA key verification, allowing an attacker merely on the same network to connect via ADB, obtain a shell, and subsequently utilize the `su` binary located at `/system/xbin/su` to escalate to Root privileges without authentication. This vulnerability falls under Improper Authorization (CWE-285), allowing attackers complete control over the device, enabling them to steal stored Wi-Fi credentials, implant persistent malware, and access all device data. The recommended remediation is to immediately update the firmware and ensure that the ADB service is configured with authentication in production environments, while also fixing the permission management of the `su` binary.",
    tags_en: ["Optoma CinemaX P2", "CVE-2026-30495", "Android Debug Bridge", "ADB", "Root Access", "Firmware Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30495", lang: "EN" }
    ]
  },
  {
    id: "20260507-002",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Optoma CinemaX P2 投影機：透過未經身份驗證的 HTTP API 實現遠端控制漏洞 (CVE-2026-30496)",
    summary: "Optoma CinemaX P2 投影機因韌體缺陷存在遠端控制漏洞 (CVE-2026-30496)。該設備在 TCP 埠 2345 上暴露了一個 HTTP API，允許任何位於同一網路的設備進行完全的未經身份驗證遠端控制。攻擊者無需任何權限即可讀取 74 個配置端點，並修改多項設定，包括音量、靜音、亮度、電源開關、網路協定（如 TELNET）的啟用/停用、顯示模式等。此漏洞的根本原因為「不當授權」(CWE-285)。由於該 API 未實施任何身份驗證機制，任何網路上的設備都能利用此漏洞，實質影響為設備的完整性與可用性。建議用戶應立即更新投影機韌體，並考慮在網路層面限制對 2345 埠的存取，以防止未經授權的遠端操作。",
    tags: ["Optoma", "CVE-2026-30496", "投影機", "HTTP API", "遠端控制", "CWE-285"],
    title_en: "Optoma CinemaX P2 Projector: Remote Control Vulnerability via Unauthenticated HTTP API (CVE-2026-30496)",
    summary_en: "The Optoma CinemaX P2 projector has a remote control vulnerability (CVE-2026-30496) due to a firmware flaw. The device exposes an HTTP API on TCP port 2345, which allows any device on the same network to perform complete, unauthenticated remote control. Attackers can read 74 configuration endpoints and modify multiple settings, including volume, mute, brightness, power switch, enabling/disabling network protocols (such as TELNET), and display modes, without requiring any privileges. The root cause of this vulnerability is \"Improper Authorization\" (CWE-285). Because the API does not implement any authentication mechanism, any device on the network can exploit this vulnerability, impacting the device's integrity and availability. Users are advised to immediately update the projector firmware and consider restricting access to port 2345 at the network layer to prevent unauthorized remote operations.",
    tags_en: ["Optoma", "CVE-2026-30496", "Projector", "HTTP API", "Remote Control", "CWE-285"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30496", lang: "EN" }
    ]
  }
];
