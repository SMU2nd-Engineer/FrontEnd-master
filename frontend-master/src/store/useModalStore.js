import { create } from "zustand";

export const useModalStore = create((set, get) => ({
  isOpen: false,
  type: "alert",
  text: { title: "", message: "" },
  resolve: null,

  open: (type, text) =>
    new Promise((resolve) => {
      set({
        isOpen: true,
        type,
        text,
        resolve,
      });
    }),

  close: (result) => {
    get().resolve?.(result);
    set({
      isOpen: false,
      resolve: null,
    });
  },
}));
