#!/usr/bin/env bash
cd /opt/tracker
/opt/venv/bin/tracker pack > /tmp/pack.txt 2>&1
echo "EXIT=$?" >> /tmp/pack.txt
ls -1t "/mnt/d/Claude/Track Security/tarball/" | head -3 >> /tmp/pack.txt
