var assert = require('assert');

describe('第一個前端測試程式', function() {

  /*
  beforeEach(function() {
    browser.pause(8000);
  });
  */

  it('登入失敗', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin');
  });

  it('登入成功', function() {
  });

  it('登出', function() {
  });

});