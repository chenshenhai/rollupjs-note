

module.exports = function( opts ) {
  return {
    name: 'demo',
    transformChunk: function(source, id) {
      let result = {
        code: source,
        map: {
          mapping: ''
        }
      };
      result.code = `
        /*
        * this code is parsed by rollup-plugin-demo
        */
        ${source}
      `;
      return result;
    }
  }
}

