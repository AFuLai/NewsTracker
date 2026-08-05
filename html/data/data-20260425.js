// data-20260425.js — 2026-04-25
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-25"] = [
  {
    id: "20260425-001",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Elastic InfoSec 監控 AI 代理：利用 OpenTelemetry 追蹤 Claude Code/Cowork 的操作行為",
    summary: "隨著 AI 輔助編碼工具（如 Claude Code 和 Claude Cowork）成為工程工作流程的標準，安全團隊面臨如何持續掌握這些 AI 代理行為的挑戰。本文詳述 Elastic InfoSec 團隊如何建立一個監控管道，利用這些工具的原生 OpenTelemetry (OTel) 匯出能力，將 AI 代理的活動數據傳輸至 Elasticsearch。Claude Code 和 Cowork 能夠執行 Shell 指令、讀取檔案、呼叫 API，並透過 MCP 連接器與 Slack、GitHub 等內部系統互動，因此其操作行為必須被監控。AI 代理匯出的五種核心事件類型包括 `api_request`、`tool_result`、`tool_decision`、`user_prompt` 和 `api_error`。數據傳輸採用 OTel 標準協議，可透過自建的 OTel Gateway 或直接使用 Elastic Cloud 的 Managed OTLP Endpoint 實現。這確保了所有 AI 代理的活動、成本、權限使用和錯誤訊息都能被安全團隊即時監控，以支持威脅偵測、事件回應和合規性要求。",
    tags: ["OpenTelemetry", "AI 代理", "Claude Code", "Claude Cowork", "Elasticsearch", "OTLP"],
    title_en: "Elastic InfoSec Monitoring AI Agents: Tracking Claude Code/Cowork Operations via OpenTelemetry",
    summary_en: "As AI coding assistants (such as Claude Code and Claude Cowork) become standard in engineering workflows, security teams face the challenge of continuously monitoring the behavior of these AI agents. This article details how the Elastic InfoSec team built a monitoring pipeline that leverages the native OpenTelemetry (OTel) export capabilities of these tools to stream AI agent activity data to Elasticsearch. Since Claude Code and Cowork can execute Shell commands, read files, call APIs, and interact with internal systems like Slack and GitHub via the MCP connector, their operational behavior must be monitored. The five core event types exported by the AI agents include `api_request`, `tool_result`, `tool_decision`, `user_prompt`, and `api_error`. Data transmission uses the OTel standard protocol, which can be implemented via a self-built OTel Gateway or directly using the Elastic Cloud Managed OTLP Endpoint. This ensures that all AI agent activity, cost, permission usage, and error messages can be monitored in real-time by the security team, supporting threat detection, incident response, and compliance requirements.",
    tags_en: ["OpenTelemetry", "AI Agents", "Claude Code", "Claude Cowork", "Elasticsearch", "OTLP"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/claude-code-cowork-monitoring-otel-elastic", lang: "EN" }
    ]
  }
];
