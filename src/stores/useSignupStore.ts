import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  code: string;
  userId: string;
  budget: string;
  platforms: ISignupPlatform[];
  setUserId: (userId: string) => void;
  setCode: (code: string) => void;
  setBudget: (budget: string) => void;
  setPlatforms: (platform: ISignupPlatform[]) => void;
  resetSignupData: () => void;
}

const initialState = {
  code: '',
  userId: '',
  budget: '',
  platforms: [],
};

export const useSignupStore = create<IStore>()(
  persist(
    set => ({
      ...initialState,
      setUserId: userId => set(state => ({ ...state, userId })),
      setCode: code => set(state => ({ ...state, code })),
      setBudget: budget => set(state => ({ ...state, budget })),
      setPlatforms: platforms => set(state => ({ ...state, platforms })),
      resetSignupData: () => set({ ...initialState }),
    }),
    { name: 'signup' },
  ),
);
