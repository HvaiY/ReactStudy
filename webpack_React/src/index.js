import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 


const myh1=React.createElement('h1',{id:'myh1',title:'this is a h1'},'hello world')

const mydiv=React.createElement('div',null,myh1)

ReactDOM.render(mydiv,document.getElementById('app')) 

//JSX 
const myTestdiv=<div id="mydiv" title="divaa">
这是一个div元素
<h1> 这是一个H1</h1>
</div>

ReactDOM.render(myTestdiv,document.getElementById('app2'))

//JSX 多种写法
let a=10 //变量a
let str='你好 ，中国'
let boo=false
let title='989'
const h1=<h1>大海大海</h1> //元素
const arr=[<h2>h2</h2>,<h3>h3</h3>] //元素组

const arrStr=['毛利兰','柯南','小五郎']
//方案1 使用循环将字符串数组转为JSX 标签
//注意 React 中需要把key添加到被forEach 或者map 或者 for 循环直接控制的元素 
const conTemp=[]
arrStr.forEach(item=>{
    const temp=<h5 key={item}>{item}</h5>
    conTemp.push(temp)
})
//方案二 使用  map

//使用变量需要用{}包裹 
//什么时候需要{}:当我们需要在JSX控制的区域内，写js表达式 那么需要将JS代码写到{}内
ReactDOM.render(<div>{a}</div>,document.getElementById('app3'))
ReactDOM.render(<div>
{a+2}
<hr/>
{str}
<hr/>
{boo?'条件为真':'条件为假'}
<hr/>
<p title={title}>这是一个P</p>
<hr/>
{h1}
{/*arr*/}
{conTemp}
<hr/>
{arrStr.map(item=><h5 key={item}>{item}</h5>)}

</div>,document.getElementById('app3'))