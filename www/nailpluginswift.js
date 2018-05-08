var exec = require('cordova/exec');

var PLUGIN_NAME = 'NailPluginSwift';
//the function which connect java script and native language
var NailPluginSwift = {
  authorizeProtocols: function(protocols, successCallback, errorCallback) {
    exec(successCallback,
      errorCallback,
      PLUGIN_NAME,
      'authorizeProtocols',
      [{"protocols" : protocols}]
    );
  },

  authorizeProtocols2: function(protocols,successCallback, errorCallback) {
    exec(successCallback,
      errorCallback,
      PLUGIN_NAME,
      'authorizeProtocols2',
      [{"protocols" : protocols}]
    );
  },

  serviceNames: function(successCallback) {
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'serviceNames',
      []
    );
  },

  getEndpointUrl: function(serviceName, protocolName, successCallback){
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'getEndpointUrl',
      [{"serviceName" : serviceName,
      "protocolName" : protocolName}]
    );

  },

  getDisplayName: function(serviceName, successCallback){
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'getDisplayName',
      [{
        "serviceName" : serviceName
      }]
    );
  },

  getServiceToken: function(serviceName, protocolName, successCallback){
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'getServiceToken',
      [{"serviceName" : serviceName,
      "protocolName" : protocolName}]
    );
  },

  getServiceUrl: function(serviceName, successCallback, errorCallback) {
    exec(successCallback,
      errorCallback,
      PLUGIN_NAME,
      'getServiceUrl',
      [{
        "serviceName" : serviceName
      }]
    );
  },

  removeService: function(serviceName, successCallback) {
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'removeService',
      [{
        "serviceName" : serviceName
      }]
    );
  },

  clearAllServices: function(successCallback){
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'clearAllServices',
      []
    );
  },

  serialize: function(successCallback){
    exec(successCallback,
      null,
      PLUGIN_NAME,
      'serialize',
      []
    );
  },

  parse: function(serviceSpec, successCallback, errorCallback){
    exec(successCallback,
      errorCallback,
      PLUGIN_NAME,
      'parse',
      [{
        "serviceSpec" : serviceSpec
      }]
    );
  }

};

module.exports = NailPluginSwift;
