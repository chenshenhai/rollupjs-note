const path = require('path');
const Koa = require('koa');
const KoaStatic = require('koa-static');
const compileTask = require('./compile_task');
const configList = require('./rollup.config.dev');

const app = new Koa();
const examplePath = path.join(__dirname, '..');

console.log(examplePath)

app.use(KoaStatic(examplePath))
app.listen(3001, function(){
  console.log('[example] http://127.0.0.1:3001/index.html')
  compileTask(configList)
})


