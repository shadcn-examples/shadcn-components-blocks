import { create } from "zustand";

interface Item {
  id: string;
  device: string;
}

interface componentDevicePreviewStore {
  device: Item | null;
  updateDevice: (item: Item) => void;
}

export const useComponentDevicePreviewStore = create<componentDevicePreviewStore>((set) => ({
  device: null,
  updateDevice: (device) => set((state) => ({ device: device }))
}));
