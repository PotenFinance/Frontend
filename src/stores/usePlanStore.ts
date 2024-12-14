import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  plans: ISignupPlatform[];
  setPlans: (plans: ISignupPlatform[]) => void;
  resetPlanData: () => void;
  updatePlanId: (plan: { platformId: string; planId: string }) => void;
  updateIsGroup: (plan: { platformId: string; isGroup: TBoolean }) => void;
  updateGroupMembers: (plan: { platformId: string; groupMembers: string }) => void;
  updateIsYearlyPay: (plan: { platformId: string; isYearlyPay: TBoolean }) => void;
  updateBillingMonth: (plan: { platformId: string; billingMonth: string }) => void;
  updateBillingDay: (plan: { platformId: string; billingDay: string }) => void;
}

const initialState = {
  plans: [],
};

export const usePlanStore = create<IStore>()(
  persist(
    set => ({
      ...initialState,
      setPlans: plans => set(state => ({ ...state, plans })),
      resetPlanData: () => set({ ...initialState }),
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
