"""europa.eu mirrors every page across languages; only keep /en/.

digital-strategy.ec.europa.eu/<lang>/policies/cyber-resilience-act was ingested
20 times — once per EU language — and 18 of those translations were live on the
site as separate articles, each summarised into its own near-identical Chinese
paragraph. `content_hash` never caught them: different URLs, and the summaries
differ because each was a separate LLM call.
"""
import pytest

from tracker.sources.path import _is_translated_duplicate, _looks_like_article

EC = "digital-strategy.ec.europa.eu"


@pytest.mark.parametrize("lang", ["bg", "cs", "de", "el", "es", "fr", "ga", "hr",
                                  "hu", "it", "lt", "lv", "nl", "pl", "pt", "ro",
                                  "sk", "sl", "sv"])
def test_every_translation_is_rejected(lang):
    assert _is_translated_duplicate(EC, f"/{lang}/policies/cyber-resilience-act")


def test_english_is_kept():
    assert not _is_translated_duplicate(EC, "/en/policies/cyber-resilience-act")
    assert _looks_like_article(f"https://{EC}/en/policies/cyber-resilience-act")


def test_no_language_prefix_is_kept():
    assert not _is_translated_duplicate(EC, "/library/cyber-resilience-act")


@pytest.mark.parametrize("url", [
    # A generic "two-letter first segment" rule would eat all of these. They are
    # section names, not languages, and they are real articles.
    "https://arstechnica.com/ai/2026/07/some-model-does-a-thing/",
    "https://jpcert.or.jp/at/2026/at260011.html",
    "https://jpcert.or.jp/wr/2026/wr260603.html",
])
def test_two_letter_sections_on_other_hosts_are_untouched(url):
    assert _looks_like_article(url) is True


def test_scoped_to_the_europa_family():
    # cyber.gouv.fr also uses /en/, but has no per-language mirror scheme we
    # rely on — leave it alone.
    assert not _is_translated_duplicate("cyber.gouv.fr", "/fr/actualites/x-y-z")
    assert _is_translated_duplicate("ec.europa.eu", "/fr/news/x-y-z")
