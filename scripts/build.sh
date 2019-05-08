#!/bin/sh
cd scripts

cp ./key.pem ../dist
cd ../dist
zip -r -FS plugin.zip *