import { create } from "zustand";

const useTicketStore = create((set) => ({
  selectedIds: [],
  setSelectedIds: (ids) => set({ selectedIds: ids }),

  startDate: null,
  setStartDate: (date) => set({ startDate: date }),

  endDate: null,
  setEndDate: (date) => set({ endDate: date }),

  allCategoryIds: [],
  setAllCategoryIds: (ids) => set({ allCategoryIds: ids }),

  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useTicketStore;
