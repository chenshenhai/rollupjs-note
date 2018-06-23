const path = require('path');
const buble = require('rollup-plugin-buble');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'cjs',
    sourcemap: true,
  },
  external: [ 
    // 'babel-runtime/regenerator',
    // 'babel-runtime/helpers/asyncToGenerator',
    // 'babel-runtime/helpers/extends',
  ],
  plugins: [
    // babel({
    //   "presets": [
    //     ["env", {
    //       "modules": false
    //     }],
    //   ],
    //   "plugins": [
    //     "external-helpers",
    //     "transform-object-rest-spread",
    //     "transform-es2015-arrow-functions",
    //     ["transform-runtime", {
    //       "polyfill": true,
    //       "regenerator": true
    //     }],
    //   ],
    //   "runtimeHelpers": true,
    // }),
    
    resolve({
      jsnext: true,
      main: true
    }),
    // commonjs({
    //   include: 'node_modules/**',
    // }),
    babel({
      "exclude": 'node_modules/**',
      "presets": [
        [
          "env",
          {
            "modules": false
          }
        ],
        "stage-2",
        "stage-3"
      ],
      "plugins": [
        "external-helpers",
      ], 
    }),
    buble(),
  ],
}