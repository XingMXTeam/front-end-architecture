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
  }
}

export default counterApplication
