from tracker.cluster import merge_by_title, _jaccard, _tokens


def test_tokens_pick_cjk_bigrams_and_ascii_words():
    t = _tokens("CVE-2026-12345 Drupal SQL 注入漏洞 大規模利用")
    assert "drupal" in t and "sql" in t and "cve-2026-12345" in t
    assert "注入" in t and "漏洞" in t


def test_jaccard_close_titles_high():
    a = _tokens("Drupal SQL 注入漏洞遭大規模利用 CVE-2026-9082")
    b = _tokens("CVE-2026-9082 Drupal SQL Injection Exploited in Wild")
    # Different languages but shared CVE token should give a non-zero overlap.
    assert _jaccard(a, b) > 0.05


def test_merge_picks_longest_summary_and_merges_sources():
    rows = [
        {"id": 1, "title": "Drupal Core SQL 注入 CVE-2026-9082 全球大規模利用",
         "summary": "x" * 50, "url": "https://thehackernews.com/a", "source": "THN"},
        {"id": 2, "title": "Drupal Core SQL Injection CVE-2026-9082 exploited",
         "summary": "y" * 400, "url": "https://securityweek.com/b", "source": "SecurityWeek"},
        {"id": 3, "title": "Unrelated Windows DNS RCE Patch Tuesday",
         "summary": "z" * 200, "url": "https://msrc.microsoft.com/c", "source": "MS"},
    ]
    merged = merge_by_title(rows, threshold=0.3)
    titles = [m["title"] for m in merged]
    assert len(merged) == 2  # Drupal pair collapsed
    drupal = next(m for m in merged if "Drupal" in m["title"])
    assert len(drupal["sources"]) == 2
    # Primary should be the longer-summary one (id=2, SecurityWeek)
    assert "SecurityWeek" in drupal["title"] or drupal["id"] == 2
    assert sorted(drupal["_merged_ids"]) == [1, 2]


def test_same_source_does_not_merge_without_cve():
    rows = [
        {"id": 1, "title": "Windows Patch Tuesday May 2026 Defender Bypass",
         "summary": "a" * 100, "url": "https://thehackernews.com/x", "source": "THN"},
        {"id": 2, "title": "Windows Patch Tuesday Defender Bypass Update",
         "summary": "b" * 100, "url": "https://thehackernews.com/y", "source": "THN"},
    ]
    merged = merge_by_title(rows)
    assert len(merged) == 2  # same-source guard prevents collapse


def test_same_source_still_merges_with_shared_cve():
    rows = [
        {"id": 1, "title": "Fortinet CVE-2026-12345 RCE part 1",
         "summary": "a" * 100, "url": "https://thehackernews.com/x", "source": "THN"},
        {"id": 2, "title": "Update on CVE-2026-12345 active exploitation",
         "summary": "b" * 100, "url": "https://thehackernews.com/y", "source": "THN"},
    ]
    merged = merge_by_title(rows)
    assert len(merged) == 1  # CVE bridge overrides same-source guard
