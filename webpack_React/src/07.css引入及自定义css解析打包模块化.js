//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 
import cssobj from '@/css/cmtlist.scss' 
console.log(cssobj)

//如果在引入某个闹的时候 如果该报安装在了 node_modules目录下
//则可以省略node_modules 这一层目录。直接以包名开始进入自己的模块或者样式表
//第三方css样式使用模块快并不是很好用。可以选择不用模块化

//处理方式： 第三方的css都是.css结尾，那么我们自己规定
//   限制自己的样式都要以scss或者less结尾，这样 我们自要给.css或者less的文件启用模块化就好了 
// import bootcss from 'bootstrap/dist/css/bootstrap.css'
//只是引用css  可以改为下面的
import 'bootstrap/dist/css/bootstrap.css'

// function CmtItem(props){
//     return <div key={props.id}>
//     <h1>评论人：{props.user}</h1>
//     <p>评论内容：{props.content}</p>
// </div>
// }  //抽出到jsx
// class CmtList extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             CommentList: [
//                 { id: 1, user: '张三', content: '哈哈，沙发' },
//                 { id: 2, user: '李四', content: '哈哈，楼下SB' },
//                 { id: 3, user: '王五', content: '哈哈，沙发' },
//                 { id: 4, user: '赵六', content: '哈哈，楼上山炮' },
//                 { id: 5, user: '田七', content: '哈哈，桩头' }
//             ]
//         }
//     }
//     render(){
//         return <div>
//             <h1>这是评论列表组件</h1>
//             {this.state.CommentList.map(item=>
//             <CmtItem {...item}></CmtItem>
//             )} 
//         </div>
//     }
// } //抽离到jsx
import CmtList from '@/components/CmtList2' //使用@绝对路径(@路径需要配置)更简单，容易避免BUG

//调用render 函数渲染 jsx xml 可比html严格的多
ReactDOM.render(<div>
 {/* 使用第三方的css，注意这里没用模块化处理哦  */}
<button className="btn btn-primary">提交</button>

<CmtList></CmtList>
</div>, document.getElementById('app'))


