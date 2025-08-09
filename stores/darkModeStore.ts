import { create } from "zustand";

type DarkModeState = {
  darkComponents: Record<string, boolean>;
  toggleDarkMode: (id: string) => void;
  isDark: (id: string) => boolean;
};

export const useDarkModeStore = create<DarkModeState>((set, get) => ({
  darkComponents: {},

  toggleDarkMode: (id: string) =>
    set((state) => ({
      darkComponents: {
        ...state.darkComponents,
        [id]: !state.darkComponents[id]
      }
    })),

  isDark: (id: string) => !!get().darkComponents[id]
}));
