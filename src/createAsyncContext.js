let idPointer = 0
export default function createAsyncContext() {
  const registry = {}
  const chunkRegistry = {}
  return {
    getNextId: () => {
      idPointer += 1
      return idPointer
    },
    addChunkName(chunkName) {
      chunkRegistry[chunkName] = true
    },
    resolved(id) {
      registry[id] = true
    },
    getState() {
      return {
        resolved: Object.keys(registry).reduce(
          (acc, cur) => Object.assign(acc, { [cur]: true }),
          {},
        ),
      }
    },
    getChunkState() {
      return {
        resolved: Object.keys(chunkRegistry).reduce(
          (acc, cur) => Object.assign(acc, { [cur]: true }),
          {},
        ),
      }
    },
  }
}
