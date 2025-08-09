import { create } from "zustand";

interface ThanksDialogStore {
  open: boolean;
  toggleOpen: () => void;
  productType: string | null;
  setProductType: (value: string) => void;
}

export const useThanksDialogStore = create<ThanksDialogStore>((set) => ({
  open: false,
  productType: null,
  setProductType: (value) => set({ productType: value }),
  toggleOpen: () => set((state) => ({ open: !state.open })),
  set
}));
