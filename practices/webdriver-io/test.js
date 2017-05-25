var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com/ncr')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();