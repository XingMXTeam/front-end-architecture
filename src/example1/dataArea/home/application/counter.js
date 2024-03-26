import counterModel from '../models/counter'
import counterServer from '../server/counter'
const counterApplication = {
  init: () => {
    counterServer.getData()
  },
  refreshData: (count) => {
    counterModel.setState({
      count
    })
  },
  addCount: () => {
    counterServer.addCount()
  }
}

export default counterApplication
