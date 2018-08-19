//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 
// import '@/04.class的基本使用'
import '@/05.class的继承'

//使用class创建React组件 也就是第二种创建组件的方式

//创建组件 用 class 和function的区别
 //class 可以有自己的私有数据，而使用function创建的组件，只有props，没有自己的私有数据和生命周期函数
class Movie extends React.Component{
//state就是vue中的data 可读可写的
constructor(){
    super()
    this.states={
        msg:'大家好，我是class创建的组件'
    }
}
    //无论是function 还是class 他们的props都是只读的
    render(){

        this.states.msg="我是被修改了的值"
        return <div>组件的第二种创建方式 {this.props.name}-----{this.props.age}----{this.props.gender}
        <h3>{this.states.msg}</h3>
        </div>
    }
}

//props与state/data之间的区别
//   props 是外界传递过来的，
//    state/data 中的数据都是私有的 ，（ajax获取过来的数据一般都是私有的）
//   props 是只读的
//    state/data 数据是可读可写的

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


