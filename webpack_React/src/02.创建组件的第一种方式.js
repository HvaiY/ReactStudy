//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 

//第一种创建组件的方式 组件的首字母一定要大些
function Hello(props){
    //如果在一个组件中 return null 则表示组件是空的 上面都不会渲染
   // return null
   //在组件中必须返回一个合法的JSX 虚拟DOM元素
return <div>这是一个Hello 组件--{props.name}---{props.age}---{props.gender}</div>
//注意 ： 无人是vue还是react 中 ，组件的属性值是只读，不可重新赋值
}

const dog={
    name:'大黄',
    age:3,
    gender:'雄'
}

//调用render 函数渲染 jsx xml 可比html严格的多
//Hello 使用属性传值 然后Hello组件返回一个虚拟DOM .由render 渲染 
ReactDOM.render(<div>
    12312
{/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>  {...dog} 表示展开对象 */}
<Hello {...dog}></Hello>
</div>,document.getElementById('app'))




//演示 ... 展开符的使用
const o2={
    address:'上海',
    email:'333@qq.com',
    age:25
    }
const o1={
    name:'大海',
    ...o2
}
console.log(o1)