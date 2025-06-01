import { create } from "zustand";

/**
 * 요청이 여러 번 시도되었을 때 오류 발생시 에러를 1번만 사용할 수 상태를 저장하는 store
 */
export const useAxiosAlertStore = create((set) => ({
  hasShowAlert: false,
  setHasShowAlert: (value) => set({ hasShowAlert: value }),
  resetAlertFlag: () => setTimeout(() => set({ hasShowAlert: false }), 3000),
}));
