import React from 'react'

import cssobj from '@/css/cmtlist.css'
//使用封装的样式
export default function CmtItem(props){
    return <div >
    <h1 id={cssobj.cmtTitle}>评论人：{props.user}</h1>
    <p id={cssobj.cmtItme}>评论内容：{props.content}</p>
</div>
}