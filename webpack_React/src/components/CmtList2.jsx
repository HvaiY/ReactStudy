import React from 'react'
//导入需要的组件样式
import cssobj from '@/css/cmtlist.css' //后缀名不能省略 2.这里因为在webpack.config做了css模块化处理，隐藏 cssobj 会是一个对象了
import CmtItem from '@/components/CmtItem2'

export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，楼下SB' },
                { id: 3, user: '王五', content: '哈哈，沙发' },
                { id: 4, user: '赵六', content: '哈哈，楼上山炮' },
                { id: 5, user: '田七', content: '哈哈，桩头' }
            ]
        }
    }
    render(){
        return <div>
        {/* 样式 语法 style={{color:'red'}} */}
        {/* 样式中除了纯数字样式外 其它都需要以字符形式包裹 用''  */}
        {/* 组件中使用css className='' */}
            {/* <h1 className='title'>这是评论列表组件</h1> //未使用模块化之前的方式，会存在作用域问题*/}
            <h1 className={cssobj.title}>这是评论列表组件</h1>
            {this.state.CommentList.map(item=>
            <CmtItem {...item} key={item.id}></CmtItem>
            )} 
        </div>
    }
}