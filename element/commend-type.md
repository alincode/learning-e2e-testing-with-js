# Selenium 指令的種類

* 操作（Actions）
* 存取（Accessors）
* 驗證（Assertions）

## 操作（Actions）

## 存取（Accessors）

## 驗證（Assertions）

* 驗證（assert）
* 辨識（verify）
* 等待（waitFor）

```
assertText
verifyText
waitForText
```

#### 驗證（assert）vs 辨識（verify）

差別在於處理錯誤的方式

* 驗證（assert）發生錯誤時，測試將會終止。
* 辨識（verify）：發生錯誤時，只是將錯誤訊息留下記錄，測試將會繼續執行不會中斷。
  * 使用情境：不影響整體測試流程的小細節

#### 等待（waitFor）

等待某些情況發生時才生效，常用於非同步 (AJAX)。

### 延伸閱讀

* [Selenium Assert vs Verify Commands and how to use in automation - YouTube](https://www.youtube.com/watch?v=iw_NDJsLYt8)