requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: '/', 
  paths: {
    
  }
});

requirejs(['']);


requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: '/', 
  paths: {
    'lib/demo': '../dist/index.umd',
  }
});

requirejs(['example/umd_amd/index']);