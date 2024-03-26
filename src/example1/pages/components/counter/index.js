import counterModel from '../../../dataArea/home/models/counter'
import counterApplication from '../../../dataArea/home/application/counter'
import counterServer from '../../../dataArea/home/server/counter'
import {Button } from '@alifd/next'

function Counter() {
  counterApplication.init()

  const count = counterModel(state => state.count)



  return <>
    {count}
    <Button onClick={() => {
      counterServer.addCount()
    }}>+1</Button>
  </>
}

export default Counter
