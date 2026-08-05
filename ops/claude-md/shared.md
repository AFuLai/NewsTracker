本專案使用 D:\Claude\Common 之共用資源，須以最高級別遵守 D:\Claude\Common\rule\ 之憲法準則。
session 啟動時先讀取該目錄全部 .md 並據以行動。

## 兩側各放什麼

git 正典在 WSL 側（`/opt/tracker`，remote `https://github.com/AFuLai/NewsTracker.git`，branch `main`）。
**Windows 專案根目錄沒有 `.git`**——在那裡跑 git 會得到 `not a git repository`。該目錄只存放產物與參考，改那裡不會進版控：

- `Tracker-2.NN/` — 由 `git archive` 解出的發行快照，唯讀
- `tarball/*.zip` — `tracker pack` 產生的發行 zip
- `status.json` — 最近一次 pipeline 執行結果

所有 git 與原始碼操作走 WSL：

```bash
wsl -e bash -lc 'cd /opt/tracker && git status'
```

需要用 Windows 端工具讀寫該 repo 時，路徑為 `\\wsl.localhost\Ubuntu\opt\tracker\...`。

repo 放 ext4 而非 `/mnt/d` 是刻意的：檔案數多、常跑 `git status` 的 repo 放 9p 掛載會有極高逐檔延遲。

## 產出與版控

- `/opt/tracker/html/` 是產生的靜態站（`index.html` ＋ `data/data-YYYYMMDD.js`），**已納入版控**（2026-08-05 起）。
- 同時在 `.gitattributes` 標了 `html/ export-ignore`：`tracker pack` 用 `git archive` 出的發行 zip **只含引擎、不含產出**。少了這行 zip 會從 ~180 KB 膨脹到 ~5.3 MB。
- `html/*.bak` 仍在 `.gitignore` 內。
- 日檔的 `id` 由 `tracker/render.py` 依**排序後的序位**指派（`f"{day}-{i:03d}"`）。往舊日期插一則就會讓其後全部重新編號，該檔整份重寫——diff 行數會遠大於實際異動，但 delta 壓縮後位元組成本很小。

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
