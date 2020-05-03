const path = require('path');
const buble = require('@rollup/plugin-buble');
const { babel } = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const vue = require('rollup-plugin-vue');
const css = require('rollup-plugin-css-only');
const replace = require('@rollup/plugin-replace')

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

// const isProductionEnv = process.env.NODE_ENV === 'production';

const babelOptions = {
  "presets": ['@babel/preset-env'],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    // input: resolveFile('src/App.vue'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
      name: 'App'
    }, 
    // external: ['vue'],
    plugins: [
      vue({css: false}),
      css(),
      nodeResolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      babel(babelOptions),
      buble(),
    ],
  },
]