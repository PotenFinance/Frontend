import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IPlatform {
  platformId: number;
  platformName: string; //TODO 추가
  platformType: string; //TODO 추가
  planId: number;
  isGroup: boolean;
  isYearlyPay: boolean;
  billingMonth: number;
  billingDay: number;
}

interface IStore {
  budget: string;
  platforms: IPlatform[];
  setBudget: (budget: string) => void;
  setPlatforms: (platform: IPlatform[]) => void;
  // addPlatform: (platform: IPlatform) => void;
  updatePlatform: (platform: IPlatform) => void;
  // deletePlatform: (platformId: number) => void;
}

export const useSignupStore = create<IStore>()(
  persist(
    set => ({
      budget: '',
      platforms: [],
      setBudget: budget => set(state => ({ ...state, budget })),
      setPlatforms: platforms => set(state => ({ ...state, platforms })),
      // addPlatform: platform =>
      //   set(state => ({ ...state, platforms: [...state.platforms, platform] })),
      updatePlatform: platform =>
        set(state => ({
          ...state,
          platforms: [
            ...state.platforms?.map(v => {
              if (v.platformId === platform.platformId) return platform;
              return v;
            }),
          ],
        })),
      // deletePlatform: platformId =>
      //   set(state => ({
      //     ...state,
      //     platforms: [...state.platforms?.filter(v => v.platformId !== platformId)],
      //   })),
    }),
    { name: 'signup' },
  ),
);
