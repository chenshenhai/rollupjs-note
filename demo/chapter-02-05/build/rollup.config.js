const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": ['@babel/preset-env'],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
    }, 
    plugins: [
      json(),
      babel(babelOptions),
    ],
  },
]