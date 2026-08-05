// data-20260429.js — 2026-04-29
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-29"] = [
  {
    id: "20260429-001",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "CI/CD 管線濫用風險警示：新工具利用 LLM 分析檢測 GitHub Actions 等工作流變更",
    summary: "隨著攻擊者目標從生產伺服器轉向自動化部署流程，CI/CD 管線已成為高價值攻擊目標。攻擊鏈通常涉及竊取開發者憑證、修改工作流檔案，進而從 CI 環境竊取雲端憑證、密鑰和 OIDC token。文章介紹了 open-sourcing 的 cicd-abuse-detector 工具，這是一個可直接使用的 CI 模板，能透過正規表達式訊號提取和 LLM 分析，檢測 CI/CD 管線中的可疑變動。該工具適用於 GitHub Actions、GitLab CI 和 Azure DevOps，能夠從工作流的差異（diff）中提取超過 50 種訊號，並將其提交給 Claude 進行結構化威脅分析。攻擊面不再是 CVE，而是 YAML 檔案本身。文章提及的攻擊案例包括 GhostAction 和 Shai-Hulud npm worm，強調了憑證大規模竊取和供應鏈污染的風險。修補建議是實施嚴格的 CI/CD 流程審核，並限制工作流的權限範圍。",
    tags: ["CI/CD", "GitHub Actions", "LLM", "供應鏈安全", "憑證竊取", "YAML", "DevSecOps"],
    title_en: "CI/CD Pipeline Abuse Risk Alert: New Tool Uses LLM to Analyze and Detect Workflow Changes in GitHub Actions and Others",
    summary_en: "As attackers shift their focus from production servers to automated deployment processes, CI/CD pipelines have become high-value targets. The attack chain typically involves stealing developer credentials and modifying workflow files, subsequently exfiltrating cloud credentials, keys, and OIDC tokens from the CI environment. This article introduces the open-sourced cicd-abuse-detector tool, a ready-to-use CI template that detects suspicious changes within CI/CD pipelines using regex signal extraction and LLM analysis. The tool is applicable to GitHub Actions, GitLab CI, and Azure DevOps, capable of extracting over 50 signals from workflow diffs and submitting them to Claude for structured threat analysis. The attack surface is no longer CVEs, but the YAML files themselves. Attack cases mentioned in the article include GhostAction and the Shai-Hulud npm worm, emphasizing the risks of large-scale credential theft and supply chain contamination. Remediation suggestions include implementing strict CI/CD process reviews and limiting the scope of workflow permissions.",
    tags_en: ["CI/CD", "GitHub Actions", "LLM", "Supply Chain Security", "Credential Theft", "YAML", "DevSecOps"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/detecting-cicd-pipeline-abuse-with-llm-augmented-analysis", lang: "EN" }
    ]
  }
];
