import counterModel, { DEFAULT_MODEL } from '../models/counter'

// 领域服务： 操作不同数据实体/模型具体逻辑，抽象可复用
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
