const {createFilter, dataToEsm} = require('rollup-pluginutils');

module.exports = function json (options = {}) {
	const filter = createFilter(options.include, options.exclude);
	const indent = 'indent' in options ? options.indent : '\t';

	return {
		name: 'json',

		transform (codeStr, id) {
      console.log('id = ', id);
      console.log('codeStr = ', codeStr);
			return {
				code: dataToEsm(codeStr, {
					preferConst: options.preferConst,
					compact: options.compact,
					namedExports: options.namedExports,
					indent
				}),
				map: {mappings: ''}
			};
		}
	};
}