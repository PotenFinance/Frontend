import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  services: IPlatform[];
  setServices: (service: IPlatform[]) => void;
  addService: (service: IPlatform) => void;
  deleteService: (serviceId: string) => void;
  resetServiceData: () => void;
}

const initialState = {
  services: [],
};

export const useServiceStore = create<IStore>()(
  persist(
    set => ({
      services: [],
      setServices: services => set(state => ({ ...state, services })),
      addService: service => set(state => ({ ...state, services: [...state.services, service] })),
      deleteService: serviceId =>
        set(state => ({
          ...state,
          services: [...state.services?.filter(v => v.platformId !== serviceId)],
        })),
      resetServiceData: () => set({ ...initialState }),
    }),
    { name: 'service' },
  ),
);
