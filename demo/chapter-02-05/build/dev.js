const rollup = require('rollup');
const compose = require('koa-compose');
const configList = require('./rollup.config.dev');

build();

function build(){
  const taskList = [];

  configList.forEach(function(config){
    taskList.push(wrapTask(config));
  });
  
  compose(taskList)( ).then(function(){
    console.log('[SUCCESS]: END')
  }).catch(function(err){
    console.log(err);
  })
}

function wrapTask( config ) {
  const inputOptions = config;
  const outputOptions = config.output;
  return async function(ctx, next) {
    // create a bundle
    const bundle = await rollup.rollup(inputOptions);

    console.log(`[INFO] 开始编译 ${inputOptions.input}`);  
    await bundle.generate(outputOptions);
    // or write the bundle to disk
    await bundle.write(outputOptions);
    console.log(`[INFO] 编译结束 ${outputOptions.file}`);  

    await next();
  }
}



