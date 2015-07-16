require('coffee-script');
require('coffee-script/register');

exports.config = {
  baseUrl: 'http://localhost:9393',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['e2e/**/*.coffee'],

  capabilities: {
    browserName: 'phantomjs'
  },

  onPrepare: function() {
    global.By = global.by;
    global._ = require('underscore-node')._;
  }
}
