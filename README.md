## react全家桶从零开始搭建简书项目

项目地址：https://github.com/Alanwh/jianshu  
技术栈：react、react-router4.x 、 react-redux 、 webpack3.x、 redux-saga 、 css-module 、 ES6 、babel...
****

## 命令式开发 <-> 申明式开发
* 定义 state
* JSX 模板
* 模板 + state 结合，生成 DOM 并渲染
* 改变 state
* 重新生成 DOM 
* 替换变换的DOM
----------------------
* 定义 state
* JSX 模板
* 模板 + state 结合，生成 DOM 并渲染
* 改变 state
* 重新生成 DOM 
* 对比前后 DOM 元素的变化
* 替换变换的DOM
----------------------
* 定义 state
* JSX 模板
* 模板 + state 结合生成虚拟 DOM ('div',{id:'div'},'hello world')
* 虚拟 DOM 生成 DOM 并渲染
* 改变 state
* 重新生成虚拟 DOM
* 对比虚拟 DOM 的变化
* 生成变化 DOM 并替换