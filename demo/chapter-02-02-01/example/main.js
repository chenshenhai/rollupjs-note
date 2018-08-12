requirejs.config({
  baseUrl: '/', 
  paths: {}
});


define(function (require) {
  var demo = require('dist/index');
  demo.init()
});
