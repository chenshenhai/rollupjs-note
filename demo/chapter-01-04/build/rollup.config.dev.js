const path = require('path');
const serve = require('rollup-plugin-serve');
const config = require('./rollup.config');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  ...[
    serve({
      port: 3001,
      contentBase: [resolveFile('example'), resolveFile('dist')]
    })
  ]
]

module.exports = config;