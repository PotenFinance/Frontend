import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  user?: IUserInfo;
  setUser: (user: IUserInfo) => void;
}

export const useUserStore = create<IStore>()(
  persist(
    set => ({
      setUser: user => set(state => ({ ...state, user })),
    }),
    { name: 'user' },
  ),
);
