#!/bin/bash

# Script to set up branch protection rules using GitHub CLI
# Requires: gh auth login

REPO_NAME=$(basename $(git rev-parse --show-toplevel))
OWNER=$(gh repo view --json owner -q ".owner.login")
BRANCH="main"

echo "Setting up branch protection for $OWNER/$REPO_NAME branch $BRANCH..."

gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/$OWNER/$REPO_NAME/branches/$BRANCH/protection \
  --input github/branch-protection-config.json

echo "Branch protection rules applied successfully."

