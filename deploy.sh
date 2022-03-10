#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:choco-internship/team_1.git main:gh-pages

cd -