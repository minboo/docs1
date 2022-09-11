#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m '1'
git push -f git@github.com:minboo/docs.git

git add -A
git commit -m '2'
git push -f git@gitee.com:minboo/docs.git
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy1'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:minboo/mingboo.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:minboo/docs.git master:pages
cd -

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy2'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:minboo/mingboo.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:minboo/docs.git master:pages
cd -