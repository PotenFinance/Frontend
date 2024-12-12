import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IPlatform {
  platformId: number;
  platformName: string; //TODO 추가
  platformType: string; //TODO 추가
  planId: number;
  isGroup: boolean;
  groupMembers: string; //TODO 추가
  isYearlyPay: boolean;
  billingMonth: string;
  billingDay: string;
}

interface IStore {
  budget: string;
  platforms: IPlatform[];
  setBudget: (budget: string) => void;
  setPlatforms: (platform: IPlatform[]) => void;
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
