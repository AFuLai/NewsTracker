本專案使用 D:\Claude\Common 之共用資源，須以最高級別遵守 D:\Claude\Common\repo\rule\ 之憲法準則（CORE.md＋STANDARD.md）。
session 啟動時先讀取該目錄全部 .md 並據以行動。

## 兩側各放什麼

git 正典在 WSL 側（`/opt/tracker/repo`，remote `https://github.com/AFuLai/NewsTracker.git`，branch `main`）。
**Windows 專案根目錄沒有 `.git`**——在那裡跑 git 會得到 `not a git repository`。該目錄只存放產物與參考，改那裡不會進版控：

- `Tracker-2.NN/` — 由 `git archive` 解出的發行快照，唯讀
- `tarball/*.zip` — `tracker pack` 產生的發行 zip
- `status.json` — 最近一次 pipeline 執行結果

所有 git 與原始碼操作走 WSL：

```bash
wsl -e bash -lc 'cd /opt/tracker/repo && git status'
```

需要用 Windows 端工具讀寫該 repo 時，路徑為 `\\wsl.localhost\Ubuntu\opt\tracker\repo\...`。

WSL 工作區 `/opt/tracker`（LAYOUT-11）：`repo/` 是 git checkout；`web/` 是 Firebase Hosting 部署目錄
（`public/` 就是產生的靜態站本體，2026-10-19 前為指向 `repo/html` 的 symlink），屬本專案專屬、只在本機、不進 git。`repo/` 內的 `db/`、`logs/`、
`endpoints.json` 已 gitignore，並登記於 `refs/registry/conventions.json` 的 `local_stores`。

repo 放 ext4 而非 `/mnt/d` 是刻意的：檔案數多、常跑 `git status` 的 repo 放 9p 掛載會有極高逐檔延遲。

## 產出與版控

- `/opt/tracker/web/public/` 是產生的靜態站（`index.html` ＋ `data/data-YYYYMMDD.js`），**不進版控**（2026-10-19 起；2026-08-05～10-18 曾納入）。
  發布走 Firebase Hosting（專案 `afu-news`，由 `/opt/tracker/web` 部署），**只在 afu-delta 發布**。
  站台內容的正本是 `db/articles.sqlite`（本機、不進 git），由 render 重新產生。
- `tracker pack` 只 `git add` `VERSION` 與 `ChangeLog.html`，發行 zip 由 `git archive` 產生、只含引擎。
- 設計文件 `PLAN-v2..v4.md` 在 `refs/plans/`。
- 日檔的 `id` 由 `tracker/render.py` 依文章的**穩定 DB id** 指派（`f"{day8}-{id}"`，F-DATA-1）：往舊日期插一則**不會**重編其後各項，permalink 穩定。（2026-09-02 前為排序序位 `f"{day}-{i:03d}"`，插舊日期會整天重編——已改；改動當下需全站 rebuild 一次，之後永久穩定。）

## 本檔怎麼跨機（憲法附錄 A.3）

Claude Code 從 **cwd** 讀 `CLAUDE.md`，而本專案的 cwd 在 Windows 側、git 正典在 WSL 側——放進 repo 的 `CLAUDE.md` 不會被任何 session 讀到。因此本檔採**單一來源＋受管區塊**：

- 共用半部的單一來源：repo 內的 `ops/claude-md/shared.md`
- 落地檔（各機 cwd 的 `CLAUDE.md`）由 `ops/claude-md/sync.sh` 注入受管區塊
- **受管區塊外**的內容屬該機器自有（例如 `common-roots` 宣告，其路徑逐機不同），注入不會覆蓋

```bash
bash ops/claude-md/sync.sh --check                        # 不寫入，回報過期／缺漏
bash ops/claude-md/sync.sh --apply                        # 注入或更新受管區塊
bash ops/claude-md/sync.sh --apply --target <該機路徑>     # 落地檔不在預設位置時
bash ops/claude-md/sync.sh --self-test                    # 驗 --check 真的抓得到漂移
```

落地檔預設 `/mnt/d/Claude/Tool/NewsTracker/CLAUDE.md`，可用 `--target` 或環境變數 `NEWSTRACKER_CLAUDE_MD` 覆寫。
