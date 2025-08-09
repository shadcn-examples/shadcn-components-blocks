import { create } from "zustand";

interface codeCopyStore {
  code: string | null;
  setCode: (code: string | null) => void;
  selectedTab: string | null;
  setSelectedTab: (code: string | null) => void;
}

export const useCodeCopyStore = create<codeCopyStore>((set) => ({
  code: null,
  setCode: (code) => set({ code }),
  selectedTab: null,
  setSelectedTab: (selectedTab) => set({ selectedTab })
}));
