#!/bin/bash
# This script will be used to determine the organizations that will be used by the path:.github/workflows/scheduled-report.yml workflow
# 1. It will check for the existence of the file ./config/organizations.json
# 2. If the file exists, it will echo the information like this: echo $(cat ./config/organizations.json | jq -c '.organizations')
# 3. If the file does not exist it will echo the information like this: echo ["$GITHUB_REPOSITORY_OWNER"]

# Check if the file exists
if [ -f ./config/organizations.json ]; then
  echo $(cat ./config/organizations.json | jq -c '.organizations')
else
  echo [\""$GITHUB_REPOSITORY_OWNER"\"]
fi


