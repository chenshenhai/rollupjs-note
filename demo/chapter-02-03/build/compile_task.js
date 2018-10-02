const path = require('path');
const rollup = require('rollup');
const chalk = require('chalk');
const compose = require('koa-compose');


module.exports = compileTask;

function logger( text = '', opts = { status : 'INFO' } ) {
  let logText = '';
  switch( opts.status)  {
    case 'SUCCESS': 
      logText = `${chalk.bgGreen('[SUCCESS]')} ${chalk.green(text)}`
      break;
    case 'WARN': 
      logText = `${chalk.bgYellow('[WARN]')} ${chalk.yellow(text)}`
      break;
    case 'ERROR': 
      logText = `${chalk.bgRed('[ERROR]')} ${chalk.red(text)}`
      break;
    default:
      logText = `${chalk.bgWhite('[INFO]')} ${chalk.white(text)}`
      break;
  }
  console.log(logText);
}

function compileTask(configList){
  const taskList = [];

  configList.forEach(function(config){
    taskList.push(wrapTask(config));
  });
  
  compose(taskList)( ).then(function(){
    logger('END', {status: 'SUCCESS'});
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

    logger(`开始编译 ${path.basename(inputOptions.input) }`);  
    await bundle.generate(outputOptions);
    // or write the bundle to disk
    await bundle.write(outputOptions);
    logger(`编译结束 ${path.basename(outputOptions.file)}`);   

    await next();
  }
}



