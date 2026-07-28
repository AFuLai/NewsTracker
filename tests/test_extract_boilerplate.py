"""trafilatura sometimes returns the site's nav/teaser block instead of the article.

Measured on a 171-page live corpus (36 domains, 2026-07-28): theregister.com
returned the byte-identical 3,350-char "MOST POPULAR …" sidebar for 10 of 11
sampled articles.  It is longer than MIN_BODY (600), so nothing downstream
noticed and the summariser invented technical detail from a headline list.

The fixtures are the real pages with every word swapped for filler of the same
length — the DOM shape, line lengths and punctuation (which is all the
extractor keys on) survive; the third-party wording does not.  The Register
fixture still reproduces the bug through raw trafilatura; the Phoronix one is a
page that extracts correctly today and must stay untouched.
"""
from pathlib import Path

import pytest

from tracker.extract import (dom_article_text, extract_body,
                             looks_like_boilerplate, prose_stats)

FIXTURES = Path(__file__).parent / "fixtures"
MARKER = "The county police department is asking for help identifying a suspect."


def _fx(name: str) -> str:
    return (FIXTURES / name).read_text(encoding="utf-8")


def _raw_trafilatura(html: str) -> str:
    trafilatura = pytest.importorskip("trafilatura")
    return (trafilatura.extract(html, include_comments=False, include_tables=False,
                                favor_recall=False) or "").strip()


# --- the detector -----------------------------------------------------------

PROSE = ("The council said the scanner network went offline after the fire, and "
         "that it had no timeline for a replacement. Officers asked residents to "
         "report anything unusual. A spokesperson declined to say how many units "
         "were affected, citing the ongoing investigation into the incident.\n"
         "Two of the cameras had been installed only weeks earlier. The vendor "
         "said it was cooperating fully with investigators and would not comment "
         "further while the review continues.")

TEASER = "\n".join(["MOST POPULAR", "AI"] + [
    f"Security Vendor {i} ships patch for critical flaw Researchers say the bug "
    f"affects every supported release" for i in range(12)])


def test_prose_is_not_flagged():
    assert not looks_like_boilerplate(PROSE)


def test_teaser_block_is_flagged():
    assert looks_like_boilerplate(TEASER)
    s = prose_stats(TEASER)
    assert s["sent_char_frac"] < 0.35 and s["term_density"] < 5.0


def test_short_text_is_never_flagged():
    """Below 600 chars MIN_BODY already handles it; judging shape there is noise."""
    assert not looks_like_boilerplate("Headline one\nHeadline two\nHeadline three")


def test_dense_but_listy_text_is_not_flagged():
    """NVD CVE pages and changelogs have few sentence-ending lines but plenty of
    terminators; the conjunction in the rule is what keeps them safe."""
    listy = "\n".join([f"CVE-2026-{1000 + i} v3.1: 9.8 CRITICAL (AV:N/AC:L/Priv.None)"
                       for i in range(40)])
    assert prose_stats(listy)["sent_char_frac"] < 0.35
    assert not looks_like_boilerplate(listy)


# --- the DOM fallback -------------------------------------------------------

def test_dom_fallback_prefers_paragraphs_over_link_list():
    html = """<html><body>
      <div class="toplist">%s</div>
      <div class="bodytext">%s</div>
    </body></html>""" % (
        "".join(f'<h3><a href="/{i}">Some headline number {i} about things</a></h3>'
                for i in range(20)),
        "".join(f"<p>{PROSE}</p>" for _ in range(3)),
    )
    out = dom_article_text(html)
    assert "council said the scanner network" in out
    assert "Some headline number" not in out


def test_dom_fallback_survives_junk_input():
    assert dom_article_text("") == ""
    assert dom_article_text("<html><body><div>no paragraphs here</div></body></html>") == ""


# --- end to end on the real templates ---------------------------------------

def test_register_sidebar_is_replaced_by_the_article():
    html = _fx("theregister_sidebar.html")
    raw = _raw_trafilatura(html)
    # sanity: the fixture still reproduces the bug through plain trafilatura
    assert looks_like_boilerplate(raw), "fixture no longer reproduces the sidebar bug"
    assert len(raw) > 600, "and it slips past MIN_BODY, which is why it went unnoticed"

    body = extract_body(html)
    assert MARKER in body, "the real article text must come back"
    assert not looks_like_boilerplate(body)
    assert len(body) > 2000


def test_good_page_is_left_exactly_as_trafilatura_returned_it():
    """The guard must be inert on healthy pages — here the fallback would in fact
    be far worse (about 500 chars against 2,200), so any misfire is visible."""
    html = _fx("phoronix_article.html")
    raw = _raw_trafilatura(html)
    assert not looks_like_boilerplate(raw)
    assert extract_body(html) == raw
    assert len(dom_article_text(html)) < len(raw) / 2


def test_fallback_is_rejected_when_it_finds_only_a_scrap():
    """A flagged body is only replaced by a candidate that is long enough and is
    itself prose; otherwise we keep what we had rather than make things worse."""
    from tracker.extract import _better_candidate
    html = "<html><body><div><p>%s</p></div></body></html>" % ("tiny. " * 10)
    primary = TEASER
    assert looks_like_boilerplate(primary)
    assert _better_candidate(primary, html) == primary


# --- sources.article: a boilerplate body must count as a failed fetch --------

LONG_PROSE = PROSE * 2


def test_boilerplate_body_still_triggers_the_stealth_refetch(monkeypatch):
    """MIN_BODY alone let a 3,350-char sidebar through as a success."""
    from tracker.sources import article as art
    tried = []
    monkeypatch.setattr(art, "_get_html", lambda url, timeout: "<html>plain</html>")
    monkeypatch.setattr(art, "stealth_fetch",
                        lambda url, timeout=0: tried.append(url) or "<html>stealth</html>")
    monkeypatch.setattr(art, "extract_body",
                        lambda html, url=None: TEASER if "plain" in html else LONG_PROSE)

    body = art.fetch_body("https://example.com/a")
    assert tried == ["https://example.com/a"]
    assert body == LONG_PROSE


def test_healthy_body_does_not_trigger_a_second_fetch(monkeypatch):
    from tracker.sources import article as art
    tried = []
    monkeypatch.setattr(art, "_get_html", lambda url, timeout: "<html>plain</html>")
    monkeypatch.setattr(art, "stealth_fetch", lambda url, timeout=0: tried.append(url) or "")
    monkeypatch.setattr(art, "extract_body", lambda html, url=None: LONG_PROSE)

    assert art.fetch_body("https://example.com/a") == LONG_PROSE
    assert tried == []


def test_longer_boilerplate_never_beats_shorter_prose():
    from tracker.sources.article import _pick
    assert looks_like_boilerplate(TEASER * 3)
    assert _pick(LONG_PROSE, TEASER * 3) == LONG_PROSE
