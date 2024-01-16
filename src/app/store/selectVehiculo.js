import { create } from 'zustand'

 const useStore = create((set) => ({
  count: 15,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))


export default useStore;

