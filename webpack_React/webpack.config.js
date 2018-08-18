 const path = require('path')
 const htmlwebpackplugin = require('html-webpack-plugin') //导入 在内存中生成的index页面的插件
 //创建一个插件的实例对象
 const htmlplugin = new htmlwebpackplugin({
     template: path.join(__dirname, './src/index.html'), //源文件
     filename: 'index.html' //生成页面的名称
 })

//webpack 基于Node  所以 支持node api 的语法，这里使用的是node 的语法
//向外暴露一个打包的配置 对象
//webpack 默认只能打包处理.js 其它后缀名称的文件无法打包，所有要配置第三方的loader 
module.exports = {
    mode: 'development', //也可以是production 
    //在webpack 中约定大于配置 ，约定 默认的打包入口路径是 src->index.js
    plugins: [
        htmlplugin
    ]
     ,
     module: { // 所有第三方 模块配置规则
         rules: [ //第三方匹配规则
             {
                 test: /\.js|jsx$/,
                 use: 'babel-loader',
                 exclude: /node_modules/
             }//千万别忘记添加exclude 排除项
         ]
     },
     resolve:{
         extensions:['.js','.jsx','.json'], //表示这几种后缀名的文件后缀名不用写，会补齐
    alias:{
        '@':path.join(__dirname,'./src')//这就表示 @ 为根目录src这一路径
    }
        }
}

//ES6 向外导出模块api 是 export default{} ,这里不适用 ，Es6 导入模块  import ** from '标识符'
//哪些特性Node 支持呢？ 如果Chrome支持的那么Node都支持(Node抠出来谷歌浏览器的JavaScript 引擎环境))