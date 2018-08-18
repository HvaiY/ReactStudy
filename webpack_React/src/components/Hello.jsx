import React from 'react' //组件用到react 因此需要导入react

// 组件的首字母一定要大些 /创并导出
export default function Hello(props){
    //如果在一个组件中 return null 则表示组件是空的 上面都不会渲染
   // return null
   //在组件中必须返回一个合法的JSX 虚拟DOM元素
return <div>这是一个Hello 组件--{props.name}---{props.age}---{props.gender}</div>
//注意 ： 无人是vue还是react 中 ，组件的属性值是只读，不可重新赋值
}

//使用ES6 导出
// export default Hello