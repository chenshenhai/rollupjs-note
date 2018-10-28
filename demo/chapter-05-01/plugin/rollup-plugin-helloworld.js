const {createFilter, dataToEsm} = require('rollup-pluginutils');

module.exports = function json (options = {}) {
	return {
		name: 'json',

		transform (code, id) {
      let codeStr = code.replace(/hello\sworld/ig, 'hello rollup.js');
			return {
				code: codeStr,
				map: {mappings: ''}
			};
    }
    
	};
}