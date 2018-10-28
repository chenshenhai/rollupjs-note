const path = require('path');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const sass = require('node-sass');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const isProductionEnv = process.env.NODE_ENV === 'production'

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

const processSass = function(context, payload) {
  return new Promise(( resolve, reject ) => {
    sass.render({
      file: context
    }, function(err, result) {
      if( !err ) {
        resolve(result);
      } else {
        reject(err)
      }
    });
  })
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
    }, 
    plugins: [
      postcss({
        extract: true,
        minimize: isProductionEnv,
        extensions:['css', 'scss'],
        process: processSass,
      }),
      babel(babelOptions),
    ],
  },
]