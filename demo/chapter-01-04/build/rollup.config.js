const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const del = require('rollup-plugin-delete');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
    sourcemap: true,
  }, 
  plugins: [
    del({ targets: 'dist/*' }),
    babel({
      presets: ['@babel/preset-env']
    }),
  ],
}