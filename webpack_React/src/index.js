//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 
// import '@/04.class的基本使用'
import '@/05.class的继承'

//使用class创建React组件 也就是第二种创建组件的方式
class Movie extends React.Component{
    render(){
        return <div>组件的第二种创建方式 {this.props.name}-----{this.props.age}----{this.props.gender}</div>
    }
}
const user={
    name:'aa',
    age:25,
    gender:'男'
}

//调用render 函数渲染 jsx xml 可比html严格的多
ReactDOM.render(<div>
    12312
<Movie {...user}></Movie>
</div>,document.getElementById('app'))


