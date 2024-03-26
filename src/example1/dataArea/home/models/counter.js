import { create } from 'zustand'

// 领域模型：业务领域具体实体的数据。
// 这里实际上是前端UI模型，因为UI会直接消费
export const DEFAULT_MODEL = {
  count: 10
}

const counterModel = create(() => ({
  ...DEFAULT_MODEL
}))

export default counterModel
