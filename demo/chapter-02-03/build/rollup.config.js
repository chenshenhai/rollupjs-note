const path = require('path');
const buble = require('rollup-plugin-buble');
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

const plugins = [
  babel(babelOptions),
  buble(),
]

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
      name: 'Demo',
    }, 
    external: ['lib/hello', 'lib/world'],
    plugins,
  },

  {
    input: resolveFile('src/lib/hello.js'),
    output: {
      file: resolveFile('dist/lib/hello.js'),
      format: 'umd',
      name: 'Hello',
    }, 
    plugins,
  },

  {
    input: resolveFile('src/lib/world.js'),
    output: {
      file: resolveFile('dist/lib/world.js'),
      format: 'umd',
      name: 'World',
    }, 
    plugins,
  },


]