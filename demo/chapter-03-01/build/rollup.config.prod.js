process.env.NODE_ENV = 'production';

const { uglify } = require('rollup-plugin-uglify');
const configList = require('./rollup.config');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      uglify()
    ]
  ]

  return config;
})

module.exports = configList;