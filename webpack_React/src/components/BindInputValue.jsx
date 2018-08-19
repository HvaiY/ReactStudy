import React from 'react'

export default class BindInputValue extends React.Component{
    constructor(){
        super()
        this.state={
            user:'大海',
            age:'25',
            msg:'你好，大海'
        }
    }
    render(){
        return <div>
            <button onClick={()=>{
                this.setState({
                    msg:'Hello ,World!'
                })
            }}>修改</button>
            {/* 绑定值state的时候 ，如果不提供onChange处理函数，那么该文本框是一个只读的文本框，这时需要同时提供readOnly，要么提供onChange不然就报错了 */}
            {/* <input type="text" style={{width:'100%'}} value={this.state.msg} readOnly/> */}
            <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={(e)=>{
                this.setState({
                    // msg:e.value
                     msg:e.target.value //建议
                   // msg:e.ref.txt.value //三种方法 
                })
            }} ref='txt'/>

        </div>
    }
}