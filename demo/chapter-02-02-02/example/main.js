requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: '/', 
  paths: {
    'lib/hello': 'dist/lib/hello',
    'lib/world': 'dist/lib/world',
  }
});

requirejs(['example/index']);