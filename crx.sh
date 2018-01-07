#!/bin/sh
# zip -r -FS ../my-extension.zip *
rm -rf ./out/

mkdir -p ./out/css/ && cp -r -f ./css/* ./out/css/
mkdir -p ./out/fonts/ && cp -r  -f ./fonts/* ./out/fonts/
mkdir -p ./out/i/ && cp -r  -f ./i/* ./out/i/
mkdir -p ./out/js/ && cp -r  -f ./js/* ./out/js/
mkdir -p ./out/libs/ && cp -r  -f ./libs/* ./out/libs/
mkdir -p ./out/weather-icon/ && cp -r  -f ./weather-icon/* ./out/weather-icon/

cp ./build/key.pem ./out/
cp ./manifest.json ./out/
cp *.html ./out/

cd ./out/

zip -r -FS WeatherForChrome.zip *