# WebdriverIO 初始化專案

**初始化測試專案**

```
$ node_modules/.bin/wdio

=========================
WDIO Configuration Helper
=========================

? Where do you want to execute your tests? On my local machine
? Which framework do you want to use? mocha
? Shall I install the framework adapter for you? Yes
? Where are your test specs located? ./test/specs/**/*.js
? Which reporter do you want to use?  spec - https://github.com/webdriverio/wdio-spec-r
eporter
? Shall I install the reporter library for you? Yes
? Do you want to add a service to your test setup? (Press <space> to select, <a> to tog
? Do you want to add a service to your test setup?  selenium-standalone - https://githu
b.com/webdriverio/wdio-selenium-standalone-service
? Shall I install the services for you? Yes
? Level of logging verbosity silent
? In which directory should screenshots gets saved if a command fails? ./errorShots/
? What is the base url? http://demo.keystonejs.com/
```

**執行方式**

```
node_modules/.bin/wdio wdio.conf.js
```