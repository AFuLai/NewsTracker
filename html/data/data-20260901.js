// data-20260901.js — 2026-09-01
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-01"] = [
  {
    id: "20260901-001",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Linux 提升資料安全：預設啟用 Btrfs 自動快照功能，支援用戶資料回溯",
    summary: "KDE Linux 在本月發布了重要的系統安全與用戶體驗升級。最大的改動是為所有用戶檔案啟用自動 Btrfs 快照功能，並將用戶主目錄設定為 Btrfs 子卷（sub-volumes）。此功能透過設定 Snapper 和 KIO-Snapshot，讓使用者可以輕鬆回溯用戶檔案到較早的狀態，達到類似「撤銷」的資料保護效果。這項功能並非取代傳統的備份機制，但極大地增強了系統的資料安全性。此外，KDE Linux 還提升了 Dolphin 檔案管理器的 Btrfs 快照整合度，並預設啟用了 CJKV（中、日、韓、越）輸入法支援，改善了多語言用戶的體驗。整體而言，本次更新著重於資料完整性、用戶體驗和多語言支援，並包含多項品質保證、測試和安全修補。",
    tags: ["KDE Linux", "Btrfs", "快照", "Snapper", "Linux 核心", "資料安全"],
    title_en: "KDE Linux Enhances Data Security: Enables Default Btrfs Automatic Snapshot Feature for User Data Recovery",
    summary_en: "KDE Linux released a significant system security and user experience upgrade this month. The major change is the activation of automatic Btrfs snapshot functionality for all user files, and setting the user home directory as a Btrfs sub-volume. This feature, implemented using Snapper and KIO-Snapshot, allows users to easily restore user files to an earlier state, providing a data protection effect similar to an 'undo' function. While this feature does not replace traditional backup mechanisms, it significantly enhances the system's data security. Furthermore, KDE Linux improved the Btrfs snapshot integration within the Dolphin file manager and enabled default support for CJKV (Chinese, Japanese, Korean, Vietnamese) input methods, improving the experience for multilingual users. Overall, this update focuses on data integrity, user experience, and multilingual support, and includes multiple quality assurance, testing, and security patches.",
    tags_en: ["KDE Linux", "Btrfs", "Snapshot", "Snapper", "Linux Kernel", "Data Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Linux-August-2026", lang: "EN" }
    ]
  },
  {
    id: "20260901-002",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 發布 Linux 核心排程器補丁，提升 Vera 晶片上的 SMT 效能",
    summary: "NVIDIA 工程師 Andrea Righi 為其 Olympus 核心的 NVIDIA Vera 晶片，在 Linux 核心排程器（scheduler）提交了一系列補丁。Olympus 核心採用 SMT（Simultaneous Multi-Threading）設計，當兩個對稱處理單元（PEs）都活躍時，核心處於雙執行緒模式；但當其中一個 PE 閒置時，核心應能恢復單執行緒模式以達到最佳效能。\n\n原有的排程機制在處理 PE 閒置和活躍的轉換時，容易導致性能下降。本次補丁的核心目標是讓排程器能更精確地識別並偏好完全閒置的核心，避免不必要的 PE 喚醒，從而確保單執行緒模式能穩定恢復。\n\n透過這些補丁，特別是針對 PE0 設置了優先權，並指導了公平排程器（fair scheduler）的閒置選擇路徑，可以有效提升 SMT 負載的性能。測試結果顯示，在兩節點的 Vera 系統上運行 GEMM 基準測試時，吞吐量從基線核心的約 9.4 TFLOP/s 提升至約 10.1 TFLOP/s，且運行結果更具可預測性。這類更新對於使用 NVIDIA Vera 晶片進行高性能計算（HPC）的用戶至關重要，建議系統維護者關注 Linux 核心的最新排程器更新。",
    tags: ["NVIDIA", "Linux 核心", "Vera", "Olympus", "SMT", "排程器"],
    title_en: "NVIDIA Releases Linux Kernel Scheduler Patch to Improve SMT Efficiency on Vera Chip",
    summary_en: "NVIDIA engineer Andrea Righi submitted a series of patches to the Linux kernel scheduler for the NVIDIA Vera chip, which is used in the Olympus core. The Olympus core utilizes a Simultaneous Multi-Threading (SMT) design, operating in a dual-threaded mode when both Processing Elements (PEs) are active; however, when one PE is idle, the core should revert to a single-threaded mode to achieve optimal performance.\n\nThe existing scheduling mechanism often resulted in performance degradation when transitioning between PE idle and active states. The core goal of this patch is to enable the scheduler to more accurately identify and prioritize completely idle cores, thereby avoiding unnecessary PE wake-ups and ensuring stable recovery into single-threaded mode.\n\nThese patches, particularly by setting a priority for PE0 and guiding the fair scheduler's idle selection path, effectively boost SMT load performance. Testing results show that when running the GEMM benchmark on Vera systems with two nodes, throughput increased from approximately 9.4 TFLOP/s on the baseline core to approximately 10.1 TFLOP/s, with more predictable results. Such updates are crucial for users utilizing the NVIDIA Vera chip for High-Performance Computing (HPC), and system maintainers are advised to monitor the latest Linux kernel scheduler updates.",
    tags_en: ["NVIDIA", "Linux Kernel", "Vera", "Olympus", "SMT", "Scheduler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Linux-Sched-Vera-SMT", lang: "EN" }
    ]
  },
  {
    id: "20260901-003",
    trackers: ["os"],
    category: "Windows",
    title: "Nvidia 確認不再為 Windows 10 提供遊戲驅動支援，用戶應考慮升級至 Windows 11",
    summary: "儘管微軟已將 Windows 10 的安全更新延長至 2027 年，但對於遊戲玩家而言，這並不代表所有硬體廠商都會跟進。Nvidia 已率先宣布，將於 2026 年 10 月發布支援 Windows 10 的最終 Game Ready Driver。從 2026 年 11 月開始，使用 Windows 10 將無法獲得遊戲相關的修復或優化。雖然 Nvidia 的驅動程式仍會提供安全修復支援至至少 2029 年，但對於遊戲體驗而言，這是一個重大轉變，因為新遊戲的 Bug 或優化將無法得到修補。文章提醒，由於市場上仍有大量用戶（HP 數據顯示約 30% 的 PC 仍運行 Windows 10）堅持使用舊系統，用戶應認真考慮升級至 Windows 11，否則未來運行新遊戲時可能會面臨性能問題或功能限制。",
    tags: ["Nvidia", "Windows 10", "Windows 11", "Game Ready Driver", "作業系統支援", "PC 遊戲"],
    title_en: "Nvidia Confirms Ending Game Driver Support for Windows 10; Users Should Consider Upgrading to Windows 11",
    summary_en: "Although Microsoft has extended security updates for Windows 10 until 2027, this does not mean that all hardware vendors will continue support for gaming. Nvidia has announced that it will release a final Game Ready Driver supporting Windows 10 in October 2026. Starting in November 2026, users on Windows 10 will no longer receive game-related fixes or optimizations. While Nvidia's drivers will still provide security patch support until at least 2029, this represents a major shift for gaming, as new game bugs or optimizations will not be addressed. The article reminds users that since a significant number of users still rely on the older system (HP data shows that approximately 30% of PCs still run Windows 10), they should seriously consider upgrading to Windows 11 to avoid potential performance issues or feature limitations when running new games in the future.",
    tags_en: ["Nvidia", "Windows 10", "Windows 11", "Game Ready Driver", "Operating System Support", "PC Gaming"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/01/nvidia-wont-extend-windows-10-driver-support-like-microsoft-did-ending-it-in-october-2026", lang: "EN" }
    ]
  },
  {
    id: "20260901-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA分析：2024至2025年漏洞激增，攻擊者仍偏好利用已知且可預防的軟體弱點",
    summary: "美國網路安全暨基礎設施安全局（CISA）公布2024至2025會計年度的漏洞分析結果，指出CVE紀錄數量大幅增長，從2024年度的14,234筆增加至2025年度的30,517筆，數量增加超過一倍。然而，CISA觀察到實際遭利用的漏洞（KEV）仍高度集中於長年存在的軟體弱點，其中41.5%的KEV涉及MITRE長期追蹤的弱點。這些弱點主要包括SQL注入、輸入驗證不當、路徑遍歷、命令注入、程式碼注入，以及缺乏身分驗證等，均屬於MITRE CWE Top 25的常見缺陷。此外，CISA的網路衛生掃描也揭示，仍有高比例的美國關鍵基礎設施組織使用已終止支援的軟體或棄用的SSL/TLS協定。CISA提醒，組織修補漏洞時，不應僅依賴CVSS分數，應綜合評估漏洞是否為已知遭利用（KEV）、是否可自動化利用，以及資產暴露程度，並呼籲軟體業者應落實安全設計（Secure by Design）原則。",
    tags: ["CISA", "CVE", "KEV", "MITRE CWE", "SQL注入", "安全設計"],
    title_en: "CISA Analysis: Vulnerability Surge Expected from 2024 to 2025, Attackers Still Prefer Exploiting Known and Preventable Software Flaws",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) released its vulnerability analysis for the 2024–2025 fiscal year, noting a significant increase in the number of CVE records. The count rose from 14,234 records in 2024 to 30,517 records in 2025, more than doubling. However, CISA observed that actively exploited vulnerabilities (KEV) remain highly concentrated in long-standing software weaknesses. Specifically, 41.5% of KEVs involve flaws tracked by MITRE over extended periods. These weaknesses primarily include SQL injection, improper input validation, path traversal, command injection, code injection, and lack of authentication, all of which are common defects listed in the MITRE CWE Top 25. Furthermore, CISA's network hygiene scans revealed that a high proportion of U.S. critical infrastructure organizations still utilize software with discontinued support or deprecated SSL/TLS protocols. CISA advises that when patching vulnerabilities, organizations should not rely solely on CVSS scores. Instead, they must comprehensively assess whether the vulnerability is a known exploited vulnerability (KEV), if it can be automatically exploited, and the level of asset exposure. CISA also urges software vendors to implement Secure by Design principles.",
    tags_en: ["CISA", "CVE", "KEV", "MITRE CWE", "SQL Injection", "Secure by Design"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178542", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-005",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Kubernetes 1.37 穩定版發布：引入 Pod 憑證與叢集信任套件，強化工作負載身分驗證",
    summary: "Kubernetes 官方發布 1.37 版本，將 Pod 憑證（Pod Certificates）和叢集信任套件（Cluster Trust Bundles）升級為穩定版。這項新機制為工作負載提供了一種超越傳統 Service Account JWT 的身分驗證方式。過去，工作負載身分主要依賴 JWT，一旦被竊取，攻擊者可能冒用身份。Pod 憑證改採 X.509 憑證與非對稱密碼機制，可用於 TLS 與雙向 TLS (mTLS) 身分驗證，並支援憑證自動輪替，大幅提升安全性。\n\n此外，1.37 版本也將 Manifest 式准入控制（Manifest-based Admission Control）升級至 Beta。這允許管理員從本機靜態檔案載入准入 Webhook 和 CEL 政策，這些安全政策在 API 伺服器啟動時即生效，不依賴 etcd，且無法透過 Kubernetes API 修改，從而降低了具備 API 權限者竄改安全政策的風險。\n\n然而，目前 Kubernetes 核心仍未提供 Pod 憑證簽發器，管理員仍需額外部署憑證簽發控制器來負責憑證的簽發、更新，以及維護叢集信任套件中的信任錨點資訊。",
    tags: ["Kubernetes", "Kubelet", "Pod Certificates", "X.509", "mTLS", "Admission Control"],
    title_en: "Kubernetes 1.37 Stable Release: Introducing Pod Certificates and Cluster Trust Bundles to Enhance Workload Identity Authentication",
    summary_en: "The Kubernetes official release of version 1.37 has promoted Pod Certificates and Cluster Trust Bundles to stable versions. This new mechanism provides workloads with an identity authentication method that surpasses traditional Service Account JWTs. Previously, workload identity primarily relied on JWTs, which, if stolen, could allow an attacker to impersonate the identity. Pod Certificates adopt X.509 certificates and asymmetric cryptography, usable for TLS and mutual TLS (mTLS) authentication, and support automatic certificate rotation, significantly enhancing security.\n\nFurthermore, version 1.37 promotes Manifest-based Admission Control to Beta. This allows administrators to load Admission Webhooks and CEL policies from local static files. These security policies take effect when the API server starts up, do not rely on etcd, and cannot be modified via the Kubernetes API, thereby reducing the risk of an attacker with API privileges tampering with security policies.\n\nHowever, the Kubernetes core currently does not provide a Pod Certificate Issuer. Administrators are still required to deploy an external certificate issuance controller to handle certificate issuance, updates, and the maintenance of trust anchor information within the cluster trust bundles.",
    tags_en: ["Kubernetes", "Kubelet", "Pod Certificates", "X.509", "mTLS", "Admission Control"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178549", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-006",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Gartner預測AI安全市場高速成長，警示AI Agent面臨存取控制與提示詞注入風險",
    summary: "研究調查機構Gartner預估，全球AI安全市場規模將呈現爆炸性增長，預計從2026年的28.35億美元，成長至2027年的47.83億美元，年增率高達68.7%。Gartner指出，隨著企業AI專案的擴展，安全風險日益複雜，不僅面臨傳統漏洞，更增加了第三方與開源軟體的漏洞，以及供應鏈攻擊的威脅。特別警示，預計到2029年，成功攻擊AI Agent的事件中，超過半數將與存取控制弱點（Access Control）和提示詞注入（Prompt Injection）相關。在各個AI安全領域中，AI應用程式安全預計市場規模最大，其次是AI使用控制，顯示市場對AI應用層面和使用流程的保護需求極高。",
    tags: ["Gartner", "AI安全", "AI Agent", "Prompt Injection", "存取控制", "供應鏈安全"],
    title_en: "Gartner Predicts Rapid Growth in AI Security Market, Warns AI Agents Face Access Control and Prompt Injection Risks",
    summary_en: "Research firm Gartner estimates that the global AI security market will experience explosive growth, projected to increase from $2.835 billion in 2026 to $4.783 billion in 2027, representing a Compound Annual Growth Rate (CAGR) of 68.7%. Gartner points out that as enterprise AI projects expand, security risks are becoming increasingly complex, facing not only traditional vulnerabilities but also threats from third-party and open-source software vulnerabilities, as well as supply chain attacks. Specifically, it warns that by 2029, over half of successful attacks against AI Agents are expected to be related to Access Control weaknesses and Prompt Injection. Among various AI security domains, AI Application Security is expected to be the largest market, followed by AI Usage Control, indicating a high market demand for protection at the AI application layer and usage process.",
    tags_en: ["Gartner", "AI Security", "AI Agent", "Prompt Injection", "Access Control", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178560", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-007",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Google Android 17 強化隱私與連線安全：導入 ECH、限制區域網路存取及強化 2G 防護",
    summary: "Google 發布 Android 17 作業系統，大幅提升行動裝置的網路隱私與連線安全性。主要新增功能包括支援 ECH（Encrypted Client Hello），此機制能加密 TLS 連線建立時可能洩露的伺服器名稱資訊，有效降低網路業者或中介者追蹤使用者連線網域的風險。此外，Android 17 限制 App 存取區域網路（LAN），要求 App 必須取得使用者明確授權，才能掃描或連線同一網路內的智慧設備（如電視、攝影機）。系統也預設採用憑證透明度（CT）機制，增加 TLS 憑證的驗證層級。在行動網路層面，為防範偽基地臺攻擊，Android 17 參與的電信業者將預設關閉 2G 網路，以阻止駭客將用戶強制連線至安全性較低的 2G，從而繞過現有的詐騙過濾機制。",
    tags: ["Android 17", "Google", "ECH", "區域網路", "2G 防護", "隱私保護"],
    title_en: "Google Android 17 Enhances Privacy and Connection Security: Introducing ECH, Restricting LAN Access, and Strengthening 2G Protection",
    summary_en: "Google has released the Android 17 operating system, significantly boosting mobile device network privacy and connection security. Key new features include support for ECH (Encrypted Client Hello), a mechanism that encrypts server name information potentially leaked during TLS connection establishment. This effectively reduces the risk of network providers or intermediaries tracking users' connected domains. Furthermore, Android 17 restricts App access to Local Area Networks (LAN), requiring apps to obtain explicit user permission before scanning or connecting to smart devices within the same network (such as TVs or cameras). The system also defaults to using Certificate Transparency (CT) mechanisms, increasing the verification level of TLS certificates. At the mobile network layer, to prevent fake base station attacks, carriers participating in Android 17 will default to disabling 2G networks, thereby preventing hackers from forcing users onto the less secure 2G standard and bypassing existing fraud filtering mechanisms.",
    tags_en: ["Android 17", "Google", "ECH", "Local Area Network", "2G Protection", "Privacy Protection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178557", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-008",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "KISA啟動「物理安全系統互通性測試」，推動異廠設備標準化整合",
    summary: "隨著CCTV、安全感測器、門禁控制等物理安全系統的應用日益普及，業界對於能整合管理多種設備的整合式安全服務需求不斷增加。然而，由於不同製造商和設備型號之間在資料結構和連動方式上存在差異，若要將不同系統串接起來，往往需要進行額外的開發工作。為了解決此痛點，韓國資訊安全院（KISA）自2022年起透過「物理安全整合平台研發」，持續開發了系統間連動的標準和驗證基準。本次啟動的「物理安全系統互通性測試」，旨在將這些研發出的連動標準推廣至產業現場，並支援標準化產品之間的整合。測試範圍涵蓋「整合系統」（如整合平台、整合監控系統）和「單一系統」（如視訊安全-安全感測器-門禁控制）。通過測試，系統需證明能依據連動標準正常傳輸和處理資料。通過測試的企業將獲得有效期為3年的「物理安全系統互通性測試結果報告」，這能讓企業正式證明其系統的標準適用性與連動功能，有助於活化產業生態系並降低企業開發成本。測試申請將於7日開始受理。",
    tags: ["KISA", "物理安全系統", "互通性測試", "整合系統", "標準化", "門禁控制"],
    title_en: "KISA Launches 'Physical Security System Interoperability Testing' to Promote Standardization and Integration of Multi-Vendor Equipment",
    summary_en: "As physical security systems—such as CCTV, safety sensors, and access control—become increasingly widespread, the industry demand for integrated security services capable of managing diverse equipment is growing. However, because different manufacturers and equipment models vary in data structures and connectivity methods, connecting different systems often requires additional development work. To solve this pain point, the Korea Internet & Security Agency (KISA) has been developing standardized interconnection protocols and verification criteria through the 'Physical Security Integration Platform Development' since 2022. The newly launched 'Physical Security System Interoperability Testing' aims to promote these developed interconnection standards into the industry field and support the integration of standardized products. The testing scope covers both 'integrated systems' (such as integration platforms and integrated monitoring systems) and 'single systems' (such as video surveillance-safety sensors-access control). Through testing, the system must demonstrate that it can correctly transmit and process data according to the interconnection standards. Companies that pass the test will receive a 'Physical Security System Interoperability Test Report' valid for three years. This report allows companies to formally prove the standard applicability and interconnection functionality of their systems, helping to revitalize the industry ecosystem and reduce corporate development costs. Applications for the test will begin accepting submissions on the 7th.",
    tags_en: ["KISA", "Physical Security System", "Interoperability Test", "Integrated System", "Standardization", "Access Control"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145573", lang: "EN" }
    ]
  }
];
