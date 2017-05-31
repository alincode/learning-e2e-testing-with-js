# 用 REPL 來練習撰寫自動化程式

<http://webdriver.io/guide/usage/repl.html#description>

![](http://webdriver.io/images/repl.gif)

### 安裝 webdriverio 到全域環境

```
npm install webdriverio
```

### 啟動 REPL

**Mac**

```
node_modules/.bin/wdio repl firefox
node_modules/.bin/wdio repl chrome
```

**window**

```
node_modules\.bin\wdio repl firefox
node_modules\.bin\wdio repl chrome
```

### 實戰練習：取得 Dcard 的頭條

```js
browser.url('https://www.dcard.tw/signup');
browser.getTitle();
browser.click('.SignupPage_forumBtn_2fGMq');
browser.getAttribute('#search input', 'placeholder');
browser.$('.PostEntry_container_245XM strong').getText();
```

<!--
browser.$$('.PostEntry_container_245XM strong').forEach(function(item){ console.log(item.getText()); });
-->