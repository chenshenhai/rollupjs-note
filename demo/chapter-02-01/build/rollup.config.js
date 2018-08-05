const path = require('path');
const babel = require('rollup-plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    ["env", {
      "modules": false
    }],
  ],
  "plugins": [
    "transform-object-rest-spread",
  ],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
    }, 
    plugins: [
      babel(babelOptions),
    ],
  },
  {
    input: resolveFile('src/lib/index.js'),
    output: {
      file: resolveFile('dist/lib.js'),
      format: 'cjs',
    }, 
    plugins: [
      babel(babelOptions),
    ],
  }
]