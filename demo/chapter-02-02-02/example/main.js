requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: '/', 
  paths: {
    'lib/hello': 'dist/lib/hello',
    'lib/world': 'dist/lib/world',
  }
});

define(function (require) {
  var demo = require('dist/index');
  demo.init()
});
