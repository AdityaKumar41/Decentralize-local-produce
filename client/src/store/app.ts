import { create } from "zustand";

interface AppState {
  account: string | null;
  setAccount: (account: string | null) => void;
  getAllProducts: [];
  setAllProducts: (products: []) => void;
}

const useAppStore = create<AppState>((set) => ({
  account: null,
  setAccount: (account) => set(() => ({ account })),
  getAllProducts: [],
  setAllProducts: (products) => set(() => ({ getAllProducts: products })),
}));

export default useAppStore;
