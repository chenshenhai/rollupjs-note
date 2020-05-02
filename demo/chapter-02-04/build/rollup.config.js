const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

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
      nodeResolve(),
      commonjs(),
      babel(babelOptions),
    ],
  },
]