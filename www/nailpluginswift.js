var exec = require('cordova/exec');

var PLUGIN_NAME = 'NailPluginSwift';

var NailPluginSwift = {
  login: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'login', [phrase]);
  }
};

module.exports = NailPluginSwift;
