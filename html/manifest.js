// manifest.js — 多 tracker 頂層索引
const TRACKER_MANIFESTS = {
  "security": {
    title: "資安新聞追蹤",
    categories: ["法規與標準", "漏洞與威脅情報", "供應鏈與開源安全", "重大事件", "前瞻技術"],
    years: ["2026", "2025", "2024", "2023", "2022"],
    yearFiles: {
      "2026": "data/security/manifest-2026.js",
      "2025": "data/security/manifest-2025.js",
      "2024": "data/security/manifest-2024.js",
      "2023": "data/security/manifest-2023.js",
      "2022": "data/security/manifest-2022.js"
    }
  },
  "eu_cra": {
    title: "EU CRA 追蹤",
    categories: ["法令更新", "調和標準", "合規指引", "開源影響", "產業動態", "亞太對應", "研討活動"],
    years: ["2026", "2025", "2024", "2023", "2022", "2020", "2018"],
    yearFiles: {
      "2026": "data/eu_cra/manifest-2026.js",
      "2025": "data/eu_cra/manifest-2025.js",
      "2024": "data/eu_cra/manifest-2024.js",
      "2023": "data/eu_cra/manifest-2023.js",
      "2022": "data/eu_cra/manifest-2022.js",
      "2020": "data/eu_cra/manifest-2020.js",
      "2018": "data/eu_cra/manifest-2018.js"
    }
  },
  "os": {
    title: "作業系統追蹤",
    categories: ["Linux", "Windows", "Apple", "Android", "重點關注"],
    years: ["2026", "2023"],
    yearFiles: {
      "2026": "data/os/manifest-2026.js",
      "2023": "data/os/manifest-2023.js"
    }
  }
};
const TRACKER_LIST = ["security", "eu_cra", "os"];
const TRACKER_TITLES = {
  "security": "資安新聞追蹤",
  "eu_cra": "EU CRA 追蹤",
  "os": "作業系統追蹤"
};
const TRACKER_LAST_UPDATED = "2026-08-21";
// Back-compat shim for the legacy single-tracker UI loader.
const TRACKER_MANIFEST = TRACKER_MANIFESTS[TRACKER_LIST[0]];
