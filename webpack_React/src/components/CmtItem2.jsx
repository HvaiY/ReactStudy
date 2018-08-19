import React from 'react'

import cssobj from '@/css/cmtitem.css'
//使用封装的样式
export default function CmtItem(props){
    return <div className={cssobj.combox}>
    <h1 className={cssobj.title}>评论人：{props.user}</h1>
    <p className={cssobj.content}>评论内容：{props.content}</p>
</div>
}