import counterModel, { DEFAULT_MODEL } from '../models/counter'

// 领域服务： 操作不同数据实体/模型具体逻辑，抽象可复用，一般是业务通用逻辑。
// 视图层不操作该层
const counterServer = {
  setCount: (count) => {
    counterModel.setState({
      count
    })
  },
  addCount: () => {
    counterModel.setState(s => ({
      count: s.count+1
    }))
  },
  getData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(10)
      },10)
    })
  },
  reset: () => {
    counterModel.setState(DEFAULT_MODEL)
  }
}

export default counterServer
