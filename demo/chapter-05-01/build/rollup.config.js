const path = require('path');
const buble = require('rollup-plugin-buble'); 
const helloworld = require('./../plugin/rollup-plugin-helloworld');
const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
    }, 
    plugins: [
      buble(),
      helloworld({
        sourcemap: process.env.NODE_ENV === 'development',
      }),
    ],
  },
]