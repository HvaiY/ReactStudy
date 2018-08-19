import React from 'react'

import CmtItem from '@/components/CmtItem'

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
            <h1 style={{color:'red',fontSize:'35px',zIndex:3,fontWeight:'200px',textAlign:'center'}}>这是评论列表组件</h1>
            {this.state.CommentList.map(item=>
            <CmtItem {...item} key={item.id}></CmtItem>
            )} 
        </div>
    }
}