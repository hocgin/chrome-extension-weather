#!/usr/bin/env bash
version=$1
version='v'.`cat manifest.json | awk 'NR==5' | awk '{print $2}' | sed 's/\"//g;s/,//'`




echo "正在发布版本 $version"
git tag -a $version -m "发布 version"
git push origin --tags
