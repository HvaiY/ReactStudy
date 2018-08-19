//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 
import cssobj from '@/css/cmtlist.css' 
console.log(cssobj)
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
<CmtList></CmtList>
</div>, document.getElementById('app'))


