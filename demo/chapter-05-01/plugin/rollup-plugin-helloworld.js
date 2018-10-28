const {createFilter, dataToEsm} = require('rollup-pluginutils');

module.exports = function json (options = {}) {
	const filter = createFilter(options.include, options.exclude);
	const indent = 'indent' in options ? options.indent : '\t';

	return {
		name: 'json',

		transform (code, id) {
      console.log('id = ', id);
      console.log('code = ', code);
			return {
				code: code,
				map: {mappings: ''}
			};
		}
	};
}