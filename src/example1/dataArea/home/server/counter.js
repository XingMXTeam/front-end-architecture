import counterMode, { DEFAULT_MODEL } from '../models/counter'

const counterServer = {
  setCount: (count) => {
    counterMode.setState({
      count
    })
  },
  addCount: () => {
    counterMode.setState(s => ({
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
    counterMode.setState(DEFAULT_MODEL)
  }
}

export default counterServer
