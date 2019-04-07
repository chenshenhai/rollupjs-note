# Rollup.js 实战学习笔记

## 前言

最近几个月自己开发一些`js`库或组件库，费了九牛二虎之力搭建了`webpack`脚手架，然后还要配置一堆`loader`，最后编译出来的代码还夹带了一堆`webpackJsonp([0], .....)` 的代码，使得编译后的ES5代码（未混淆）可读性降低了，也导致了结果代码体积增大。

在寻找新的编译工具时候，发现`Vue.js`，`React.js`等流行库的源码都用了`rollup.js`来编译代码，同时相关库的编译也输出了各种模块规范`AMD`、`CommonJS`、`UMD`和`IIFE`。因此选择了`rollup.js`来实践开发日常的工具，在玩了几个月的的`rollup.js`后，将学习的过程中记录成这本书，也沉淀了学习过程中的demo，方便以后搭建脚手架时候查看。


## 关于本书

<img width="360" src="https://user-images.githubusercontent.com/8216630/47964308-ec4a8380-e072-11e8-8441-e5ac10acc81e.png">


- [关于作者(我)](https://chenshenhai.github.io/)
- [作者(我)Github](https://github.com/chenshenhai/)
- [gitbook在线阅读入口](https://chenshenhai.github.io/rollupjs-note/)
- 如有错误或疑问欢迎，提交[issues](https://github.com/chenshenhai/rollupjs-note/issues)或PR

更多前端`技术学习`和`开源学习教程`可关注公众号 `DeepSeaCode`  (`大海码` ) 

![qrcode_for_gh_959d1c4d729a_258](https://user-images.githubusercontent.com/8216630/43264303-495bf52c-9118-11e8-85cd-4ec6fcc6d066.jpg)

<br/>


## 目录

* [Rollup.js 实战学习笔记](https://github.com/chenshenhai/rollupjs-note/blob/master/README.md)
* [0.致读者]
    * [0.1 本书初衷](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter00/01.md) 
    * [0.2 参考资料](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter00/02.md)
* [1. 快速开始]
    * [1.1 快速配置文件](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter01/01.md)
    * [1.2 ES6+编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter01/02.md)
    * [1.3 开发模式](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter01/03.md)
    * [1.4 生产模式](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter01/04.md)
    * [1.5 Node.js使用API模式](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter01/05.md)
* [2. js编译]
    * [2.1 多文件输入输出编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/01.md)
    * [2.2.1 AMD 模块类型编译 (上)](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/02-01.md)
    * [2.2.2 AMD 模块类型编译 (下)](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/02-02.md)
    * [2.2.3 CommonJS 模块类型编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/02-03.md)
    * [2.2.4 IIFE 模块类型编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/02-04.md)
    * [2.2.5 UMD 模块类型编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/02-05.md)
    * [2.3 Node.js使用API模式的热编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/03.md)
    * [2.4 node模块引用](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/04.md)
    * [2.5 json文件引用](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter02/05.md)
* [3. css编译]
    * [3.1 css引用](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter03/01.md)
    * [3.2 scss编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter03/02.md)
    * [3.3 less编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter03/03.md)
* [4. 框架使用]
    * [4.1 React.js编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter04/01.md)
    * [4.2 Vue.js编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter04/02.md)
* [5. 插件开发]
    * [5.1 开发插件helloworld](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter05/01.md)
* [6. 其他实战]
    * [6.1 TypeScript编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter06/01.md)
    * [6.2 Babel7 编译](https://github.com/chenshenhai/rollupjs-note/tree/master/note/chapter06/02.md)
