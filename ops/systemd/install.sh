#!/usr/bin/env bash
# Install the three tracker services. Needs root, so a human runs this.
#
#   sudo bash ops/systemd/install.sh
#
# It copies three files into /etc/systemd/system/, reloads systemd, enables and
# starts them, then reports health. Re-running it is safe: the copy overwrites
# and `enable --now` is idempotent.
set -euo pipefail

SRC=$(cd "$(dirname "$0")" && pwd)
UNITS="ollama.service llama-embed.service llama-rerank.service"

if [ "$(id -u)" -ne 0 ]; then
  echo "needs root: sudo bash $0" >&2
  exit 1
fi

for u in $UNITS; do
  install -m 0644 "$SRC/$u" "/etc/systemd/system/$u"
  echo "installed /etc/systemd/system/$u"
done

systemctl daemon-reload
for u in $UNITS; do
  systemctl enable --now "$u"
done

# Health, not "systemctl says active": a unit can be running and the port
# still not answering, and the port is what the pipeline talks to.
sleep 3
rc=0
check() {   # $1=port $2=path $3=label
  code=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 2 --max-time 5 \
         "http://127.0.0.1:$1$2" 2>/dev/null || true)
  if [ "$code" = "200" ]; then
    echo "  $3 (:$1) answering"
  else
    echo "  $3 (:$1) NOT answering (http=$code) -- journalctl -u $4 -n 30" >&2
    rc=1
  fi
}
check 11434 /api/tags ollama       ollama.service
check 8081  /health   embed        llama-embed.service
check 8082  /health   rerank       llama-rerank.service
exit $rc
