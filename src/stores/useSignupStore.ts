import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IValue {
  budget?: string;
}

interface IStore extends IValue {
  setSignupData: (value: IValue) => void;
}

export const useSignupStore = create<IStore>()(
  persist(
    set => ({
      budget: '',
      setSignupData: value => set(state => ({ ...state, ...value })),
    }),
    { name: 'signup' },
  ),
);
