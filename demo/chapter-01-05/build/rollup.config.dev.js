const path = require('path');
const config = require('./rollup.config');

config.output.sourcemap = true;

module.exports = config;