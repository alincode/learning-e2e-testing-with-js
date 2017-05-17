# 元素選取器

常見的英文稱呼叫：Target / Element Locators / Selector

### identifier

identifier=id：選擇帶有特定 @id 屬性的元素。如果 @id 沒有找到元素，則會改以選擇 @name 中符合 id 的值。指令需要元素定位器為參數時，大多都是以此作為預設值。

```html
<div id="myId">hello</div>
```

### Name

name=name：選擇帶有特定 @name 屬性的元素。

```html
<div name="myName">hello</div>
```

### DOM

dom=javascriptExpression：以 JavaScript 的方式選擇 DOM，開頭必定是 document.。例如 dom=document.images[2]。

### xpath

xpath=xpathExpression：以 XPath 表示式來定位元素。

```
xpath=id('myId')
```

### link

link=textPattern：選擇包含指定文字比對模式（text patterns）的連結（link）或錨點（anchor）元素，也就是<a>。

### CSS selector

css=cssSelectorSyntax：以 CSS 選擇器來選擇元素，請參考 CSS2 選擇器、CSS3 選擇器的說明。這應該是網頁工程師最容易使用的定位器吧。

```html
<div id="myId">hello</div>
<div name="myName">hello</div>
```

![](assets/css-selector.png)

## 練習題

### 練習題一：identifier 與 Name

### 練習題二：xpath 與 link

### 練習題三：CSS selector

## 延伸閱讀

* [CSS 選擇器參考手冊](http://www.w3school.com.cn/cssref/css_selectors.asp)
* [w3schools - css selectors](https://www.w3schools.com/cssref/css_selectors.asp)
