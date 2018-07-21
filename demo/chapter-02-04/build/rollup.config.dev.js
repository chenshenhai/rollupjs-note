const path = require('path');
const serve = require('rollup-plugin-serve');
const configList = require('./rollup.config');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}
const PORT = 3000;

const devSite = `http://127.0.0.1:${PORT}`;
const devUMDPath = path.join('example', '/umd/index.html');
const devUMDAMDPath = path.join('example', '/umd_amd/index.html');
const devIIFEPath = path.join('example', '/iife/index.html');
const devUMDUrl = `${devSite}/${devUMDPath}`;
const devUMDAMDUrl = `${devSite}/${devUMDAMDPath}`;
const devIIFEUrl = `${devSite}/${devIIFEPath}`;

setTimeout(()=>{
  console.log(`[dev UMD]: ${devUMDUrl}`)
  console.log(`[dev UMD_AMD]: ${devUMDAMDUrl}`)
  console.log(`[dev IIFE]: ${devIIFEUrl}`)
}, 1000);

configList.map((config, index) => {

  config.output.sourcemap = true;

  if( index === 0 ) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('')]
        })
      ]
    ]
  }
  
  return config;
})


module.exports = configList;