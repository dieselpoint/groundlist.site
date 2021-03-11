#!/bin/bash

yarn generate

git add -A
git commit -m "publish"
git pull origin master
git push origin master
