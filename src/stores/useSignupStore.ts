import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  budget: string;
  platforms: ISignupPlatform[];
  setBudget: (budget: string) => void;
  setPlatforms: (platform: ISignupPlatform[]) => void;
  resetSignupData: () => void;
}

export const useSignupStore = create<IStore>()(
  persist(
    set => ({
      budget: '',
      platforms: [],
      setBudget: budget => set(state => ({ ...state, budget })),
      setPlatforms: platforms => set(state => ({ ...state, platforms })),
      resetSignupData: () => set({ budget: '', platforms: [] }),
    }),
    { name: 'signup' },
  ),
);
