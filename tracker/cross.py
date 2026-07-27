"""Cross-tracker belonging detection.

Given an article currently labelled `tracker=X`, determine whether it also
belongs to `tracker=Y`. Decision is made *without* an LLM, using three
cheap signals against Y's searchinfo:

  1. source domain in Y.entries (the source itself is a Y-watched site)
  2. shared distinctive tokens between article.tags / title and Y.keys
  3. presence of strong subject markers in title (e.g. "CRA", "NIS2")
"""
from __future__ import annotations

import re
from typing import Iterable
from urllib.parse import urlparse

from .config import SearchInfo

CJK_RE = re.compile(r"[㐀-鿿]")
WORD_RE = re.compile(r"[A-Za-z0-9][A-Za-z0-9\-]*")

# High-signal subject markers per tracker — if any of these phrases appear
# verbatim in title or tags, that's a strong "belongs here" signal.
STRONG_MARKERS: dict[str, tuple[str, ...]] = {
    "security": ("CVE-", "KEV", "ransomware", "勒索", "資料外洩", "漏洞",
                 "zero-day", "APT", "exploit", "RCE", "LPE",
                 "malware", "惡意軟體", "Malware-as-a-Service", "MaaS",
                 "stealer", "trojan", "phishing", "釣魚", "backdoor", "後門",
                 "C2", "exfiltration", "DDoS"),
    "eu_cra": ("CRA", "Cyber Resilience Act", "網路韌性法", "ENISA", "EUR-Lex",
               "delegated act", "harmonised standard", "harmonized standard",
               "ETSI EN 303", "CEN/CENELEC", "JTC 13", "JTC 21",
               "conformity assessment", "CE marking", "SBOM", "VEX",
               "NIS2", "DORA", "Linux Foundation",
               # APAC angle markers
               "METI", "KISA", "TWCERT", "ACSC", "CERT-In", "JPCERT",
               "亞太對應", "歐盟出口"),
    # OS-specific markers — deliberately NOT the generic "CVE-" (too broad; that
    # belongs to security). These are platform/kernel signals.
    "os": ("Linux kernel", "Linux", "Windows", "Android", "iOS", "iPadOS",
           "macOS", "watchOS", "kernel", "Patch Tuesday", "AOSP", "Pixel",
           "systemd", "glibc", "OpenSSH", "Win32", "NTLM", "WebKit",
           "Ubuntu", "Debian", "Fedora", "MSRC", "作業系統", "核心"),
}


def _tokens(text: str) -> set[str]:
    text = (text or "").lower()
    toks: set[str] = set()
    for m in WORD_RE.finditer(text):
        t = m.group(0)
        if len(t) > 2:
            toks.add(t)
    cjk = "".join(c for c in text if CJK_RE.match(c))
    for i in range(len(cjk) - 1):
        toks.add(cjk[i:i + 2])
    return toks


def _key_token_sets(info: SearchInfo) -> list[set[str]]:
    return [_tokens(k.text) for k in info.keys]


# Deliberately NOT `\b` / `\w`: in Python's unicode mode `\w` matches CJK, so
# `\bWindows\b` would FAIL on "Windows代理程式" and `\bLinux\b` on
# "新型Linux/Windows惡意程式" — titles in this corpus routinely butt an ASCII
# product name straight against Han characters with no space. Word boundaries
# here mean "not glued to another ASCII word character", which still rejects
# "LinuxFoundation" / "democracy" / "Terracraft" while keeping CJK adjacency.
_ASCII_WORD = "A-Za-z0-9_"
_LEFT_GUARD = f"(?<![{_ASCII_WORD}])"
_RIGHT_GUARD = f"(?![{_ASCII_WORD}])"
_ASCII_WORD_CHAR_RE = re.compile(f"[{_ASCII_WORD}]")


def _compile_marker(marker: str) -> str | re.Pattern[str]:
    """Turn one STRONG_MARKERS phrase into a matcher.

    * A marker containing any CJK codepoint is returned as a lowercased
      **string** -> plain substring match. CJK text has no word separators,
      so a boundary assertion would never fire inside 「重大漏洞揭露」.
    * Anything else is returned as a compiled case-insensitive **regex**
      guarded by ASCII word boundaries, so "CRA" no longer matches inside
      "demo*cra*cy" / "Terra*cra*ft" / "*Cra*ig", and "Linux" no longer
      matches inside "LinuxFoundation".

    A guard is only added on a side where the marker actually ends in a word
    character, so "CVE-" compiles to ``(?<![A-Za-z0-9_])CVE\\-`` with no
    trailing guard (a trailing one would demand a non-word char right after
    the hyphen and so reject "CVE-2026-1234"'s digits under some spellings);
    "CEN/CENELEC" keeps both guards.
    """
    if CJK_RE.search(marker):
        return marker.lower()
    pat = re.escape(marker)
    if marker and _ASCII_WORD_CHAR_RE.match(marker[0]):
        pat = _LEFT_GUARD + pat
    if marker and _ASCII_WORD_CHAR_RE.match(marker[-1]):
        pat = pat + _RIGHT_GUARD
    return re.compile(pat, re.IGNORECASE)


# Precompiled once at import time: belongs_to() runs per article per tracker
# over thousands of rows, so compiling inside the loop would be a real
# regression. Extra/unknown markers get compiled lazily and memoised.
_MARKER_MATCHERS: dict[str, str | re.Pattern[str]] = {
    m: _compile_marker(m) for markers in STRONG_MARKERS.values() for m in markers
}


def _matcher(marker: str) -> str | re.Pattern[str]:
    m = _MARKER_MATCHERS.get(marker)
    if m is None:
        m = _MARKER_MATCHERS[marker] = _compile_marker(marker)
    return m


def _strong_hit(text: str, markers: Iterable[str]) -> bool:
    if not text:
        return False
    lower = text.lower()
    for marker in markers:
        m = _matcher(marker)
        if isinstance(m, str):
            if m in lower:
                return True
        elif m.search(text):
            return True
    return False


def belongs_to(*, article_url: str, article_title: str, article_tags: list[str],
               other: SearchInfo, other_name: str,
               article_category: str | None = None,
               min_token_overlap: int = 3,
               key_token_sets: list[set[str]] | None = None,
               narrow_domains: set[str] | None = None) -> bool:
    """Decide if an article also belongs to `other` tracker.

    Signals (in order of strength):
      0. article_category is one of `other` tracker's categories — the LLM
         has already classified the article into that topical space.
      1. Source domain is a *narrow* specialist site for `other` topic
         (caller-supplied via narrow_domains). General-purpose media sites
         that happen to appear in both searchinfos are NOT enough.
      2. Strong subject markers (CRA / Cyber Resilience Act / ENISA …) in
         title or tags.
      3. ≥ min_token_overlap distinctive tokens shared with any KEY phrase.
    """
    # Signal 0: category match is the most authoritative — the LLM picked
    # a category from `other` tracker's whitelist for this article.
    if article_category and article_category in (other.categories or []):
        return True

    netloc = (urlparse(article_url).netloc or "").lower().removeprefix("www.")
    if narrow_domains:
        for d in narrow_domains:
            if netloc == d or netloc.endswith("." + d):
                return True

    tag_blob = " ".join(article_tags or [])
    if _strong_hit(article_title, STRONG_MARKERS.get(other_name, ())):
        return True
    if _strong_hit(tag_blob, STRONG_MARKERS.get(other_name, ())):
        return True

    article_toks = _tokens(article_title) | _tokens(tag_blob)
    if not article_toks:
        return False
    sets = key_token_sets if key_token_sets is not None else _key_token_sets(other)
    for ks in sets:
        if len(article_toks & ks) >= min_token_overlap:
            return True
    return False


# Domains that are SPECIALIST for a tracker — any article from them is
# strong evidence of belonging. Curated manually; general-media sites that
# also appear in both searchinfos (THN, iThome, OpenSSF, SecurityWeek …)
# are deliberately NOT here.
NARROW_DOMAINS: dict[str, set[str]] = {
    "eu_cra": {"enisa.europa.eu", "eur-lex.europa.eu", "digital-strategy.ec.europa.eu",
               "cencenelec.eu", "stan4cra.eu", "etsi.org", "bsi.bund.de",
               "ssi.gouv.fr", "cyber.gouv.fr", "linuxfoundation.org",
               # APAC regulator domains — specialists for the 亞太對應 angle.
               "nisc.go.jp", "jpcert.or.jp", "csa.gov.sg"},
               # Boannews and similar APAC media are deliberately NOT here —
               # they cover everything, not just CRA, so narrow-domain bypass
               # would create false positives.
    "security": {"cisa.gov", "nvd.nist.gov", "krebsonsecurity.com",
                 "googleprojectzero.blogspot.com", "googleblog.com"},
    # OS specialists — kernel/distro/vendor sites whose articles are almost
    # always about an operating system. General tech media (Ars, The Register,
    # THN) are deliberately NOT here.
    "os": {"kernel.org", "lwn.net", "phoronix.com", "source.android.com",
           "android-developers.googleblog.com", "msrc.microsoft.com",
           "blogs.windows.com", "windowslatest.com", "support.apple.com",
           "9to5mac.com", "9to5google.com", "ubuntu.com", "debian.org"},
}
