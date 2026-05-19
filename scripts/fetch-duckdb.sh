#!/usr/bin/env bash
# Pull dbt-sql/mbtsa_work.duckdb (~203MB, Git LFS) from the upstream data repo.
# Required before building the deep-dive dashboard.
set -euo pipefail

DEST="$(dirname "$0")/../dbt-sql/mbtsa_work.duckdb"
UPSTREAM="https://github.com/priyanshu124/IT_state_budget_agent.git"
TMP="$(mktemp -d)"

if ! command -v git-lfs >/dev/null 2>&1; then
  echo "git-lfs is required. Install: https://git-lfs.com" >&2
  exit 1
fi

mkdir -p "$(dirname "$DEST")"
echo "Cloning $UPSTREAM (LFS) to $TMP ..."
git lfs install
git clone --depth=1 "$UPSTREAM" "$TMP"
git -C "$TMP" lfs pull --include="dbt-sql/mbtsa_work.duckdb"

cp "$TMP/dbt-sql/mbtsa_work.duckdb" "$DEST"
rm -rf "$TMP"
echo "Done: $DEST"
