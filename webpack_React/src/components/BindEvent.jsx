import React from 'react'

export default class BindEvent extends React.Component {
    constructor() {
        super()

        //私有数据
        this.state = {
            msg: '哈哈哈'
        }
    }
    render() {
        return <div>
            BindEvent 组件
            <hr />
            {/* 事件中 onClick接受的是一个function 同样可以使用匿名函数(lamdba) */}
            <button onClick={this.show}>提交</button>
            <button onClick={()=>this.show('你好','大海')}>提交2</button>
            <button onClick={() => {
                //在react 中如果想为state 赋值那么使用this.setState({msg:'123'}) 推荐来修改状态值
                //1.下面仅仅更新state中的msg 如果state中有其它值。不会对其它值更改
                //2.this.setSate 是异步处理的 ，如果需要拿到最新的值 可以使用回调函数
                // this.setState({ msg: '123' })
                this.setState({msg:'大海'},function(){ //回调函数
                    console.log(this.state.msg)
                })
                // alert('你好，世界')
                console.log('aaaaaaaaaaaaa')
            }}>提交匿名</button>

            <p>{this.state.msg}</p>
        </div>
    }
    show(arg1,arg2) {
        console.log('海嗨嗨嗨'+arg1+arg2)
    }
}