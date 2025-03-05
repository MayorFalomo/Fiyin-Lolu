import { create } from 'zustand';

interface StoreState {
  logoColor: string;
  updateLogoColor: (color: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  logoColor: 'black',
  updateLogoColor: (color: string) => set({ logoColor: color }),
}));
