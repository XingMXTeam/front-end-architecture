import counterModel from '../../../dataArea/home/models/counter'
import counterApplication from '../../../dataArea/home/application/counter'
import {Button } from '@alifd/next'

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
