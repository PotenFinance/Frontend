import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  plans: ISignupPlatform[];
  setPlans: (plans: ISignupPlatform[]) => void;
  updatePlanId: (plan: { platformId: number; planId: number }) => void;
  updateIsGroup: (plan: { platformId: number; isGroup: boolean }) => void;
  updateGroupMembers: (plan: { platformId: number; groupMembers: string }) => void;
  updateIsYearlyPay: (plan: { platformId: number; isYearlyPay: boolean }) => void;
  updateBillingMonth: (plan: { platformId: number; billingMonth: string }) => void;
  updateBillingDay: (plan: { platformId: number; billingDay: string }) => void;
}

export const usePlanStore = create<IStore>()(
  persist(
    set => ({
      plans: [],
      setPlans: plans => set(state => ({ ...state, plans })),
      updatePlanId: ({ platformId, planId }) =>
        set(state => ({
          ...state,
          plans: [
            ...state.plans?.map(v => {
              if (v.platformId === platformId) return { ...v, planId };
              return v;
            }),
          ],
        })),
      updateIsGroup: ({ platformId, isGroup }) =>
        set(state => ({
          ...state,
          plans: [
            ...state.plans?.map(v => {
              if (v.platformId === platformId) return { ...v, isGroup };
              return v;
            }),
          ],
        })),
      updateGroupMembers: ({ platformId, groupMembers }) =>
        set(state => ({
          ...state,
          plans: [
            ...state.plans?.map(v => {
              if (v.platformId === platformId) return { ...v, groupMembers };
              return v;
            }),
          ],
        })),
      updateIsYearlyPay: ({ platformId, isYearlyPay }) =>
        set(state => ({
          ...state,
          plans: [
            ...state.plans?.map(v => {
              if (v.platformId === platformId) return { ...v, isYearlyPay };
              return v;
            }),
          ],
        })),
      updateBillingMonth: ({ platformId, billingMonth }) =>
        set(state => ({
          ...state,
          plans: [
            ...state.plans?.map(v => {
              if (v.platformId === platformId) return { ...v, billingMonth };
              return v;
            }),
          ],
        })),
      updateBillingDay: ({ platformId, billingDay }) =>
        set(state => ({
          ...state,
          plans: [
            ...state.plans?.map(v => {
              if (v.platformId === platformId) return { ...v, billingDay };
              return v;
            }),
          ],
        })),
    }),
    { name: 'plan' },
  ),
);
