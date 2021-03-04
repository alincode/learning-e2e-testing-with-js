var webdriverio = require('webdriverio');
var assert = require('assert');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('https://www.dcard.tw/signup')
    .getTitle().then(function(title) {
        console.log(title);
        assert.equal(title, '註冊 Dcard');
    })
    .click('.SignupPage_forumBtn_2fGMq')
    .pause(5000)
    .getAttribute('#search input', 'placeholder').then(function(attributeValue) {
        try {
            assert.equal(attributeValue, '搜尋文章、看板、＠人物2');
            console.log(attributeValue);
        } catch(e){
            console.log(e);
        }
    })
    .end();