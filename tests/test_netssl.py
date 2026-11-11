import httpx._config as cfg
import httpx._transports.default as tdef

import tracker  # noqa: F401  (installs the patch)
from tracker import netssl


def test_default_verify_reuses_one_context():
    a = tdef.create_ssl_context(verify=True, cert=None, trust_env=True)
    b = cfg.create_ssl_context()
    assert a is b is netssl.shared_context()


def test_transports_share_context():
    t1 = httpx_transport()
    t2 = httpx_transport()
    assert t1 is t2


def httpx_transport():
    import httpx
    tr = httpx.HTTPTransport()
    return tr._pool._ssl_context


def test_non_default_verify_untouched(monkeypatch):
    ctx = cfg.create_ssl_context(verify=False)
    assert ctx is not netssl.shared_context()
    monkeypatch.setenv('SSL_CERT_FILE', netssl.__file__)
    import pytest
    with pytest.raises(Exception):
        cfg.create_ssl_context()  # falls through to httpx: not a PEM file
