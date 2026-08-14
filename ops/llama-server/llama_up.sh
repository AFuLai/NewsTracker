#!/usr/bin/env bash
# WP4 — the two CPU-only llama-server instances (see MANIFEST.md).
#   8081  bge-m3              embeddings   (--embedding)
#   8082  bge-reranker-v2-m3  /v1/rerank   (--reranking --pooling rank)
#
# -ngl 0 keeps every layer on CPU: ollama keeps the whole 8 GB of VRAM.
# Bound to 127.0.0.1 — no auth on these endpoints.
set -u

LC=${TRACKER_LLAMA_BIN:-/opt/llama.cpp/llama-b10423}
M=${TRACKER_LLAMA_MODELS:-/opt/llama.cpp/models}
THREADS=${TRACKER_LLAMA_THREADS:-6}
export LD_LIBRARY_PATH=$LC

health() {   # $1=port -> echoes the HTTP code, never fails the script
  # curl already prints "000" on a failed connect AND exits non-zero, so an
  # `|| echo 000` fallback concatenates into "000000". Swallow the status
  # instead. --connect-timeout matters on its own: on WSL2 loopback a port
  # with no listener hangs rather than refusing, so without it a "status"
  # call against a stopped service waits out the full --max-time.
  curl -s -o /dev/null -w "%{http_code}" \
    --connect-timeout 2 --max-time 3 \
    "http://127.0.0.1:$1/health" 2>/dev/null
  true
}

stop() {
  # Match the binary path, not a bare "llama-server", so this can never kill
  # the shell that is running this script.
  local killed=0
  for p in $(pgrep -f "$LC/llama-server" 2>/dev/null); do
    kill "$p" 2>/dev/null && killed=$((killed + 1))
  done
  [ "$killed" -gt 0 ] && sleep 2
  for p in $(pgrep -f "$LC/llama-server" 2>/dev/null); do
    kill -9 "$p" 2>/dev/null
  done
  echo "stopped $killed process(es)"
}

start_one() {   # $1=port $2=model file $3.. = extra flags
  local port=$1 model=$2; shift 2
  local log="/tmp/llama-$([ "$port" = 8081 ] && echo embed || echo rerank).log"
  if [ ! -f "$M/$model" ]; then
    echo "MISSING MODEL: $M/$model — see ops/llama-server/MANIFEST.md" >&2
    return 1
  fi
  nohup "$LC/llama-server" --model "$M/$model" "$@" \
    -ngl 0 --threads "$THREADS" --ctx-size 8192 --batch-size 8192 \
    --host 127.0.0.1 --port "$port" > "$log" 2>&1 &
  disown
}

wait_healthy() {   # $1=port $2=label
  local port=$1 label=$2
  for i in $(seq 1 90); do
    if [ "$(health "$port")" = "200" ]; then
      echo "  $label (:$port) healthy after ${i}s"
      return 0
    fi
    sleep 1
  done
  echo "  $label (:$port) DID NOT come up. Last 25 log lines:" >&2
  tail -25 "/tmp/llama-$([ "$port" = 8081 ] && echo embed || echo rerank).log" >&2
  return 1
}

case "${1:-start}" in
  stop)
    stop
    ;;
  status)
    rc=0
    for spec in "8081 embed" "8082 rerank"; do
      set -- $spec
      code=$(health "$1")
      if [ "$code" = "200" ]; then
        echo "  $2 (:$1) UP"
      else
        echo "  $2 (:$1) DOWN (http=$code)"; rc=1
      fi
    done
    # Exit non-zero when anything is down, so a caller reading the exit code
    # cannot mistake a partial deployment for a healthy one.
    exit $rc
    ;;
  start|restart)
    stop
    start_one 8081 bge-m3-FP16.gguf --embedding --pooling cls || exit 1
    start_one 8082 bge-reranker-v2-m3-FP16.gguf --reranking --pooling rank || exit 1
    wait_healthy 8081 embed  || exit 1
    wait_healthy 8082 rerank || exit 1
    echo "both up"
    ;;
  *)
    echo "usage: $0 {start|stop|restart|status}" >&2
    exit 2
    ;;
esac
