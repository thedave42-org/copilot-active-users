#!/bin/bash

if [ -f .env ]; then
    source .env
fi

curl -sS -f -I -H "Authorization: token ${COPILOT_ACCESS_LIST}" https://api.github.com | awk -F': ' '/x-oauth-scopes/{print $2}' | tr -d '\n' | tr -d ' '