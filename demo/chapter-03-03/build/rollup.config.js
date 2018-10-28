const path = require('path');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const less = require('less');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const isProductionEnv = process.env.NODE_ENV === 'production';

const processLess = function(context, payload) {
  return new Promise(( resolve, reject ) => {
    less.render({
      file: context
    }, function(err, result) {
      if( !err ) {
        resolve(result);
      } else {
        reject(err);
      }
    });

    less.render(context, {})
    .then(function(output) {
      // output.css = string of css
      // output.map = string of sourcemap
      // output.imports = array of string filenames of the imports referenced
      if( output && output.css ) {
        resolve(output.css);
      } else {
        reject({})
      }
    },
    function(err) {
      reject(err)
    });

  })
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
      postcss({
        extract: true,
        minimize: isProductionEnv,
        process: processLess,
      }),
      babel(babelOptions),
    ],
  },
]