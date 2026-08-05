// data-20260424.js — 2026-04-24
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-24"] = [
  {
    id: "20260424-001",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Red Hat OpenShift 推出開發者預覽版「機密叢集」，將信任邊界擴展至整個叢集基礎設施",
    summary: "Red Hat 宣布推出 OpenShift 的機密叢集（Confidential Clusters）開發者預覽版。此功能將機密運算（Confidential Computing）的保護範圍從單一工作負載（Workload）擴展到整個叢集基礎設施層級。機密叢集透過硬體根植信任（hardware-rooted trust），在 OpenShift 叢集中的每個節點建立一個經過完整證明（fully attested）、加密且可驗證的執行環境。目前版本已在 Microsoft Azure 上支援，並利用 AMD Secure Encrypted Virtualization—Secure Nested Paging (SEV-SNP) 技術。此系統透過「機密叢集操作器」（Confidential Cluster Operator）自動化了叢集級別的信任建立，包括管理證明服務（Trustee）、計算基準參考值（PCR values）、為每個節點生成唯一加密金鑰，以及自動化節點加入流程。這對於受法規監管的產業、主權雲環境或機密 AI 應用場景至關重要，確保叢集基礎設施本身是可信的。未來規劃將擴展至整個控制平面和計算平面節點的證明，並支援 Intel TDX 等更多硬體。",
    tags: ["Red Hat OpenShift", "機密運算", "Confidential Computing", "AMD SEV-SNP", "Kubernetes", "叢集安全"],
    title_en: "Red Hat OpenShift Launches Developer Preview of 'Confidential Clusters,' Extending Trust Boundaries Across the Entire Cluster Infrastructure",
    summary_en: "Red Hat announced the developer preview of Confidential Clusters for OpenShift. This feature extends the protection of Confidential Computing from individual workloads to the entire cluster infrastructure layer. Confidential Clusters establish a fully attested, encrypted, and verifiable execution environment on every node within the OpenShift cluster using hardware-rooted trust. The current version is supported on Microsoft Azure and utilizes AMD Secure Encrypted Virtualization—Secure Nested Paging (SEV-SNP) technology. The system automates cluster-level trust establishment through the 'Confidential Cluster Operator,' including management of the Trustee, Platform Configuration Register (PCR) values, generation of unique encryption keys for each node, and automated node joining processes. This is crucial for highly regulated industries, sovereign cloud environments, or confidential AI application scenarios, ensuring that the cluster infrastructure itself is trustworthy. Future plans include extending attestation to the entire control plane and compute plane nodes, and supporting more hardware like Intel TDX.",
    tags_en: ["Red Hat OpenShift", "Confidential Computing", "Confidential Computing", "AMD SEV-SNP", "Kubernetes", "Cluster Security"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/confidential-clusters-red-hat-openshift-developer-preview-now-available-microsoft-azure-amd-sev-snp", lang: "EN" }
    ]
  },
  {
    id: "20260424-002",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "歐盟資安認證週：討論強化歐盟網路韌性與《網路韌性法案》框架",
    summary: "本次活動由歐盟資安局（ENISA）與歐盟委員會共同組織，匯集了政策制定者、產業專家、合規評估機構和國家主管機關，旨在討論如何透過統一的認證框架來強化歐洲的網路韌性。會議重點圍繞歐盟資安認證框架（ECCF）的實施，並與《網路韌性法案》（CRA）和《NIS2 指令》等法規形成協同作用。主要討論進展包括：1. 針對歐盟數位身份錢包（EUDI Wallets）的草案候選方案，旨在提供最高安全標準，目前開放公開諮詢至 2026 年 4 月 30 日。2. 針對「管理式安全服務」（Managed Security Services）的草案候選方案，該方案將為選擇可信賴的資安服務提供基準，特別重要的是，參與《網路團結法案》下歐盟資安儲備的服務提供商，在方案採納後兩年內必須取得認證。此外，會議也檢視了 ECCF 下的同儕審查機制，確保成員國能達到一致的標準。這些進展顯示歐盟正積極建立一套全面的資安認證體系。",
    tags: ["ENISA", "歐盟資安認證", "ECCF", "網路韌性法案", "CRA", "NIS2 指令", "數位身份錢包"],
    title_en: "EU Cybersecurity Certification Week: Discussing Strengthening EU Cyber Resilience and the CRA Framework",
    summary_en: "This event was jointly organized by the European Union Agency for Cybersecurity (ENISA) and the European Commission, bringing together policymakers, industry experts, compliance assessment bodies, and national authorities. The goal is to discuss how to strengthen Europe's cyber resilience through a unified certification framework. The meeting focused on the implementation of the European Cybersecurity Certification Framework (ECCF), and its synergy with regulations such as the Cyber Resilience Act (CRA) and the NIS2 Directive. Key discussion points included: 1. A draft candidate scheme for European Digital Identity Wallets (EUDI Wallets), aiming to provide the highest security standards, with public consultation open until April 30, 2026. 2. A draft candidate scheme for Managed Security Services, which will set a standard for selecting trustworthy cybersecurity services. Crucially, service providers participating in the EU cybersecurity reserve under the Cyber Solidarity Act must obtain certification within two years after the scheme's adoption. Furthermore, the meeting reviewed the peer review mechanism under the ECCF to ensure that member states achieve consistent standards. These developments demonstrate the EU's active establishment of a comprehensive cybersecurity certification system.",
    tags_en: ["ENISA", "EU Cybersecurity Certification", "ECCF", "Cyber Resilience Act", "CRA", "NIS2 Directive", "Digital Identity Wallet"],
    sources: [
      { name: "EC CRA 實施頁面（News）", url: "https://digital-strategy.ec.europa.eu/en/news/european-cybersecurity-certification-week-2026-advancing-eu-cybersecurity-cyprus", lang: "EN" }
    ]
  }
];
