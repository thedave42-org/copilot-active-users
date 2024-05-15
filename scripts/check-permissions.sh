#!/bin/bash

if [ -f .env ]; then
    source .env
fi

curl -sS -f -I -H "Authorization: token ${GITHUB_TOKEN}" https://api.github.com | awk -F': ' '/x-oauth-scopes/{print $2}' | tr -d ' '