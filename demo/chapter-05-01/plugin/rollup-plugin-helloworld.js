const {createFilter, dataToEsm} = require('rollup-pluginutils');

module.exports = function json (options = {}) {
	// const filter = createFilter(options.include, options.exclude);
	// const indent = 'indent' in options ? options.indent : '\t';
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