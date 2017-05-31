# WebdriverIO 常用指令 (API) 語法

<http://webdriver.io/api.html>

**前往某網址**

```
browser.url('http://www.google.com');
```

**設定欄位的值**

```
browser.element('.email').setValue('aaa@bbb.com');
// 縮寫
$('.email').setValue('aaa@bbb.com');
```

**點選欄位的值**

```
browser.click('.some-button');

// 縮寫
$('.some-button').click();

$('[title="Sign Out"]').click();
```

**檢查某個元素是否存在**

```
browser.waitForExist('.alert-text');

// 縮寫
$('.alert-text').waitForExist();
```

**取得某個元素的值**

```
browser.getText('.alert-text');

// 縮寫
$('.alert-text').getText();
```

**驗證**

```
assert.equal('實際文字內容', '預期文字內容');
```