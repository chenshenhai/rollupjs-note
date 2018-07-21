const configList = require('./rollup.config');
 
configList.map((config, index) => {
  config.output.sourcemap = true;
  return config;
})


module.exports = configList;