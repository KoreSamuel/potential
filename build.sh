#!/usr/bin/env sh

set -ev

npm run docs:build

cd src/.vuepress/dist

git init
git config user.name "KoreSamuel"
git config user.email "swustxiaojie@163.com"
git add .
git commit -m "Action Auto Builder at `date +"%Y-%m-%d %H:%M"`"

git push --force --quiet https://github.com/KoreSamuel/potential.git master:gh-pages

cd -