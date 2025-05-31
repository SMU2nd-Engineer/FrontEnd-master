import { create } from "zustand";

/**
 * 찜 목록 갱신을 위한 상태 관리
 */
const usePickStore = create((set) => ({
  refreshFlag: false,
  triggerRefresh: () => set((state) => ({ refreshFlag: !state.refreshFlag })), // true <-> false toggle
}));

export default usePickStore;
