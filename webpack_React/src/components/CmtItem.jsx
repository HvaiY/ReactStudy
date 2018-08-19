import React from 'react'
import styles from '@/components/styles'

//使用封装的样式
export default function CmtItem(props){
    return <div style={styles.item}>
    <h1 style={styles.user}>评论人：{props.user}</h1>
    <p style={styles.content}>评论内容：{props.content}</p>
</div>
}