//导入包
import React from 'react' //创建组建 虚拟Dom元素 生命周期
import ReactDOM from 'react-dom' //把创建好的组件 虚拟DOM 放到页面上展示 

import BindEvent from '@/components/BindEvent'

//调用render 函数渲染 jsx xml 可比html严格的多
ReactDOM.render(<div>
<BindEvent></BindEvent>
</div>, document.getElementById('app'))


