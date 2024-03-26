import { create } from 'zustand'

// 领域模型：业务领域具体实体的数据
export const DEFAULT_MODEL = {
  count: 10
}

const counterModel = create(() => ({
  ...DEFAULT_MODEL
}))

export default counterModel
