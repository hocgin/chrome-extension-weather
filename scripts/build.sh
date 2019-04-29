#!/bin/sh
cp ./key.pem ../dist

cd ../dist
zip -r -FS WeatherForChrome.zip *