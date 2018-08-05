const rollup = require('rollup');
const config = require('./rollup.config');

const inputOptions = config;
const outputOptions = config.output;

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(`[INFO] 开始编译 ${inputOptions.input}`);  

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  console.log(`[SUCCESS] 编译结束 ${outputOptions.file}`);  

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();