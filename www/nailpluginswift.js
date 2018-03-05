var exec = require('cordova/exec');

var PLUGIN_NAME = 'NailPluginSwift';
//the function which connect java script and native language
var NailPluginSwift = {
  login: function(protocols, cb) {
    exec(cb, null, PLUGIN_NAME, 'login', [{"protocols" : protocols}]);
  },

  login2: function(protocols,cb) {
  	exec(cb,null, PLUGIN_NAME, 'login2', [{"protocols" : protocols}]);
  }

};

module.exports = NailPluginSwift;
