#!/usr/bin/env bash
cd /opt/tracker
# ensure ollama is up
if ! curl -s -m 3 http://localhost:11434/api/tags >/dev/null 2>&1; then
  nohup ollama serve >/tmp/ollama.log 2>&1 &
  for i in $(seq 1 30); do
    curl -s -m 2 http://localhost:11434/api/tags >/dev/null 2>&1 && break
    sleep 1
  done
fi
curl -s -m 3 http://localhost:11434/api/tags >/dev/null 2>&1 && echo "OLLAMA_OK" > /tmp/pack.txt || echo "OLLAMA_DOWN" > /tmp/pack.txt
# force ollama backend for changelog to avoid gemini timeout
TRACKER_LLM_BACKEND=ollama /opt/venv/bin/tracker pack >> /tmp/pack.txt 2>&1
echo "EXIT=$?" >> /tmp/pack.txt
ls -1t "/mnt/d/Claude/Track Security/tarball/" | head -3 >> /tmp/pack.txt
