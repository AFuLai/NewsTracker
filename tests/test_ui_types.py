"""TrackerTypes (ui/index.html, TRACKER-TYPES block): pure news-type / platform / package
classifier. Expected values are hand-derived from refs/plans/20261109-source-category-review.md."""
import json, re, subprocess
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "ui" / "index.html"


def _block():
    m = re.search(r"/\* TRACKER-TYPES:BEGIN \*/(.*?)/\* TRACKER-TYPES:END \*/",
                  HTML.read_text(encoding="utf-8"), re.S)
    assert m, "TRACKER-TYPES block missing"
    return m.group(1)


def _run(expr):
    js = '"use strict";\n' + _block() + "\nprocess.stdout.write(JSON.stringify((() => {" + expr + "})()));"
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


def _ty(a):
    return _run("return TrackerTypes.typeOf(" + json.dumps(a, ensure_ascii=False) + ");")


def test_pure():
    for w in ("window", "document", "localStorage", "location", "state."):
        assert not re.search(r"\b" + re.escape(w), _block()), w


def test_platform_vuln():
    assert _ty({"category": "Linux", "title": "Linux 核心修補：ngbe 驅動程式修復 NULL 指標解引用漏洞",
                "tags": ["Linux 核心"]}) == "vuln"


def test_platform_plain_update():
    assert _ty({"category": "Apple", "title": "iOS 27 Beta 5 更新：提升 Liquid Glass 透明度",
                "tags": ["iOS 27"]}) == "platform"


def test_focus_incident():
    assert _ty({"category": "重點關注", "title": "物流巨頭 CEVA 遭駭客攻擊，客戶資料外洩", "tags": []}) == "incident"


def test_focus_bare_supply_chain_is_not_supply():
    assert _ty({"category": "重點關注", "title": "Apple 傳 iPhone 18 延期", "tags": ["供應鏈"]}) == "focus"


def test_platform_supply():
    assert _ty({"category": "Android", "title": "Shai-Hulud 蠕蟲：Tensorlake 的 npm SDK 遭汙染",
                "tags": []}) == "supply"


def test_summary_is_ignored():
    assert _ty({"category": "Windows", "title": "Windows 11 新增 Run 對話框",
                "summary": "此更新也修補漏洞", "tags": []}) == "platform"


def test_typed_category_kept():
    assert _ty({"category": "漏洞與威脅情報", "title": "x", "tags": []}) == "vuln"
    assert _ty({"category": "重大事件", "title": "Linux 漏洞", "tags": []}) == "incident"
    assert _ty({"category": "合規指引", "title": "x"}) == "regulation"


def test_unknown_is_other():
    assert _ty({"category": "uncategorized", "title": "x"}) == "other"
    assert _ty({}) == "other"
    assert _ty(None) == "other"


def test_title_en_counts():
    assert _ty({"category": "Apple", "title": "Apple 發布 iOS 26.4.1", "title_en": "Apple fixes zero-day in iOS",
                "tags": []}) == "vuln"


def test_platforms_of():
    out = _run("""return [
      TrackerTypes.platformsOf({category:'Linux', tags:[]}),
      TrackerTypes.platformsOf({category:'漏洞與威脅情報', tags:['Windows 11','macOS']}),
      TrackerTypes.platformsOf({category:'重大事件', tags:['iOS 27','Android 17','Linux 核心']}),
      TrackerTypes.platformsOf({category:'重大事件', tags:['Linuxfx']}),
      TrackerTypes.platformsOf(null)];""")
    assert out == [["Linux"], ["Apple", "Windows"], ["Linux", "Apple", "Android"], [], []]


def test_packages_of():
    out = _run("""const p = a => TrackerTypes.packagesOf(a); return [
      p({title:'Linux 核心修補漏洞', tags:['Linux 核心']}),
      p({title:'OpenSSH 10.1 發布', tags:['OpenSSH']}),
      p({title:'GitHub 服務中斷', tags:['GitHub']}),
      p({title:'Git 2.52 修補漏洞', tags:[]}),
      p({title:'Chromium 修補 CVE-2026-1234', tags:['Google Chrome']}),
      p({title:'惡意 npm 套件', tags:[]}),
      p({title:'Mesa 26.3 發布', title_en:'Mesa 26.3 adds Vulkan', tags:[]}),
      p({title:'Chromebook 新功能', tags:[]}),
      p({title:'FortiGate 與 PAN-OS 漏洞', tags:[]}),
      p(null)];""")
    assert out == [["linux-kernel"], ["openssh"], [], ["git"], ["chrome"], ["npm"], ["mesa"], [],
                   ["fortinet", "paloalto"], []]


def test_package_table_shape():
    out = _run("""return TrackerTypes.PACKAGES.map(x => [typeof x.id, typeof x.name, Array.isArray(x.match)]);""")
    assert len(out) >= 30
    assert all(r == ["string", "string", True] for r in out)
    ids = _run("return TrackerTypes.PACKAGES.map(x => x.id);")
    assert len(set(ids)) == len(ids)
    for need in ("linux-kernel", "chrome", "firefox", "openssh", "openssl", "glibc", "gcc", "llvm", "systemd",
                 "curl", "git", "python", "nodejs", "php", "java", "rust", "docker", "kubernetes",
                 "wordpress", "npm", "pypi", "fortinet", "paloalto", "cisco", "citrix", "ivanti", "vmware",
                 "exchange", "sharepoint", "mesa"):
        assert need in ids, need
