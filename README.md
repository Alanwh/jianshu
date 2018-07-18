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
----------------------
当 props 或 state 发生改变，就会执行 render()

***

## 生命周期函数
### 定义:在某一时刻自动会调用执行的函数
constructor()不算,这是es6自带的构造函数

### 创建阶段（Mounting）
* componentWillMount()
    * 组件即将被挂载到页面之前执行
* render()
* componentDidMount()
    * 组件挂载到页面之后自动执行
    * ajax/fetch/axios 请求数据

### 更新阶段 (Updating)
* componentWillReceiveProps() 
    * 要从父组件接受参数且存在于父组件(第一次存在于父组件不会被执行)
    * 父组件重新执行 render 
    * prop 发生变化时执行
* shouldComponentUpdate() 
    * 返回 boolen 决定是否会执行更新
* componentWillUpdate() 
    * 在 shouldComponentUpdate() 返回 true 执行
* render()
    * 重新渲染函数执行
* componentDidUpdate()
    * 渲染过后执行

### 卸载阶段 (Unmounting)
* componentWillUnmount()
    * 组件被卸载的时候执行