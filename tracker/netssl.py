"""One shared TLS context for every httpx call.

httpx builds a fresh SSLContext for every module-level httpx.get/post (each
creates a throw-away Client) and loads certifi with
ssl.create_default_context(cafile=...).  On native Windows, OpenSSL 3's
by-file loader takes 3-15 s of pure CPU per call (measured on the portable
build: cafile 15 s vs the same PEM via cadata 0.03 s), so a fetch round of
a few hundred URLs pinned a core and crawled.  Linux pays far less but still
pays per call.

install() makes httpx reuse one context built from cadata whenever the
caller asked for the default (verify=True, no client cert).  Anything else
(verify=False, a custom context, SSL_CERT_FILE / SSL_CERT_DIR) goes through
httpx unchanged.  Sharing is safe here: httpcore only sets ALPN on the context
and we never enable http2, so every connection sets the same value.
"""
from __future__ import annotations

import os
import ssl
import threading

_lock = threading.Lock()
_ctx: ssl.SSLContext | None = None
_installed = False


def shared_context() -> ssl.SSLContext:
    global _ctx
    if _ctx is None:
        with _lock:
            if _ctx is None:
                import certifi
                with open(certifi.where(), encoding='ascii') as fh:
                    _ctx = ssl.create_default_context(cadata=fh.read())
    return _ctx


def install() -> None:
    """Patch httpx once so default-verify transports share shared_context()."""
    global _installed
    if _installed:
        return
    try:
        import httpx._config as cfg
        import httpx._transports.default as tdef
    except Exception:  # httpx missing or reorganised: keep its own behaviour
        return
    original = cfg.create_ssl_context

    def create_ssl_context(verify=True, cert=None, trust_env=True):
        if (verify is True and cert is None and not (
                trust_env and (os.environ.get('SSL_CERT_FILE')
                               or os.environ.get('SSL_CERT_DIR')))):
            return shared_context()
        return original(verify=verify, cert=cert, trust_env=trust_env)

    cfg.create_ssl_context = create_ssl_context
    if getattr(tdef, 'create_ssl_context', None) is original:
        tdef.create_ssl_context = create_ssl_context
    _installed = True
