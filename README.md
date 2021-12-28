<h1 align="center">Chrome Extension Weather</h1>
<p align="center"><img src="docs/logo.png"/></p>

### 安装

[![Chrome Web Store](https://img.shields.io/badge/Chrome-latest-brightgreen.svg)](https://chrome.google.com/webstore/detail/weather/ibieofighcnndjcjchdahdiacjpmkhgf)
[![Edge Web Store](https://img.shields.io/badge/Edge-latest-brightgreen.svg)](https://microsoftedge.microsoft.com/addons/detail/mmjibclgkfldbhbnpcfoigijmfippfgg)

### 项目开发和本地安装

1. 编译插件

```bash
# 指定 node 版本
npm install -g n
sudo n 9.0.0
# 安装依赖环境
npm install
# 运行
npm start
```

2. 如果安装, 启用`开发模式`，加载 dist 目录即可。

3. 打包插件

- 3.1 打包插件(需编译后)

```bash
./scripts/build.sh
```

- 3.2 触发自动构建打包

```bash
./scripts/pushtag.sh v3.1.7
```

### 更新日志

- [更新日志](CHANGELOG.md)

### 演示 :)

<img src="docs/s2.gif" width="100"/>

### Q&A

[反馈或建议](https://github.com/hocgin/chrome-extension-weather/issues/new)

### 联系作者

<img src="http://cdn.hocgin.top/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" width = "100" height = "100" alt="图片名称" align=center />
