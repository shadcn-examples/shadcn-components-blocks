import { create } from "zustand";

interface SpinnerStore {
  open: boolean;
  toggleOpen: () => void;
}

export const useSpinnerStore = create<SpinnerStore>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open }))
}));
