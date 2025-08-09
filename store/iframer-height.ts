import { create } from "zustand";

interface Iframe {
  id: string;
  height: number;
}

interface IframeHeightStore {
  iframes: Iframe[];
  setHeight: (data: Iframe) => void;
}

export const useIframeHeightStore = create<IframeHeightStore>((set) => ({
  iframes: [],
  setHeight: (data) =>
    set((state) => {
      // 'id' ile eşleşen iframe varsa güncelleniyor, yoksa yeni bir iframe ekleniyor
      const existingIframeIndex = state.iframes.findIndex((item) => item.id === data.id);

      if (existingIframeIndex !== -1) {
        // İlgili iframe bulundu, sadece yüksekliği güncelle
        const updatedIframes = [...state.iframes];
        updatedIframes[existingIframeIndex] = {
          ...updatedIframes[existingIframeIndex],
          height: data.height
        };

        return { iframes: updatedIframes };
      } else {
        // İlgili iframe bulunamadı, yeni bir iframe ekle
        return { iframes: [...state.iframes, data] };
      }
    })
}));
