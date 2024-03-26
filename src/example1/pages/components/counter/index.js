import counterModel from '../../../dataArea/home/models/counter'
import counterApplication from '../../../dataArea/home/application/counter'
import {Button } from '@alifd/next'

// 不依赖同层级的组件
// 消费model层数据，触发application层操作
function Counter() {
  counterApplication.init()

  const { addCount } = counterApplication

  const count = counterModel(state => state.count)

  return <>
    {count}
    <Button onClick={() => {
      addCount()
    }}>+1</Button>
  </>
}

export default Counter
