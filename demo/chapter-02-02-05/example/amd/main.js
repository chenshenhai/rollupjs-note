requirejs.config({
  baseUrl: '/', 
  paths: {
    'lib/demo': '/dist/index.umd',
  }
});

requirejs(['example/amd/index']);