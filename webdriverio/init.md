# WebdriverIO 初始化專案

**初始化測試專案**

```
$ node_modules/.bin/wdio

=========================
WDIO Configuration Helper
=========================

選擇你的執行環境
? Where do you want to execute your tests? On my local machine

選擇你要使用的測試框架
? Which framework do you want to use? mocha

你要安裝測試框架的 adapter 嗎？
? Shall I install the framework adapter for you? Yes

設定你預計測試程式放置的資料夾位置
? Where are your test specs located? ./test/specs/**/*.js

選擇你想要的報表格式
? Which reporter do you want to use?  spec - https://github.com/webdriverio/wdio-spec-r
eporter

你要安裝報表函式庫嗎？
? Shall I install the reporter library for you? Yes

你想要添加服務到你的測試專案嗎？
? Do you want to add a service to your test setup? (Press <space> to select, <a> to tog
? Do you want to add a service to your test setup?  selenium-standalone - https://githu
b.com/webdriverio/wdio-selenium-standalone-service

你要安裝服務嗎？
? Shall I install the services for you? Yes

設定 log 的層級
? Level of logging verbosity silent

設定測試失敗的截圖放置位置
? In which directory should screenshots gets saved if a command fails? ./errorShots/

設定將測試的網站的 domain url
? What is the base url? http://demo.keystonejs.com/
```

**執行方式**

```
node_modules/.bin/wdio wdio.conf.js
```