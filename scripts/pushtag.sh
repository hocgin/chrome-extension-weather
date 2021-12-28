#!/usr/bin/env bash
version=$1
version=${version:='v3.1.7'}




echo "正在发布版本 $version"
git tag -a $version -m "发布 version"
git push origin --tags
