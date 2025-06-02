import { create } from "zustand";

export const useProductStore = create((set) => ({
  productInfo: {},
  setProductInfo: (value) => set({ productInfo: value }),
}));
