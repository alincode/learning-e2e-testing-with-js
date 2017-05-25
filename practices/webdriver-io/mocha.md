# WebdriverIO 實戰練習 - 撰寫第一個單元測試程式

```
npm install mocha -g

或
npm install mocha --save-dev
node_modules/.bin/mocha
```

**範例**

```js
var assert = require('assert');

describe('第一個單元測試', function() {

  it('加', function() {
    assert.equal(1 + 2, 3);
  });
});
```

**執行方式**

```
mocha first-unit-test.js
```

### 練習題

* 實作一個加減乘除的測試程式