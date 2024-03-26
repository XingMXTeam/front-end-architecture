import counterServer from '../server/counter'
// 应用层：直接对接用户，可以触发一系列的核心业务流程
const counterApplication = {
  init: () => {
    counterServer.getData()
  },
  refreshData: (count) => {
    counterServer.setCount()
  },
  addCount: () => {
    counterServer.addCount()
  }
}

export default counterApplication
