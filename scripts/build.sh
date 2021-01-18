#!/usr/bin/env bash
path=$(cd `dirname $0`; pwd)
project=$(cd $path/..; pwd)
dist=$project/dist

cp $path/key.pem $dist
zip -r -FS $dist/plugin.zip $dist/*
