import { create } from 'zustand'

export const DEFAULT_MODEL = {
  count: 10
}

const counterModel = create(() => ({
  ...DEFAULT_MODEL
}))

export default counterModel
