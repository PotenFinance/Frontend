import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IService {
  platformId: number;
  platformName: string;
  platformType: string;
}

interface IStore {
  services: IService[];
  setServices: (service: IService[]) => void;
  addService: (service: IService) => void;
  // updateService: (service: IService) => void;
  deleteService: (serviceId: number) => void;
}

export const useServiceStore = create<IStore>()(
  persist(
    set => ({
      services: [],
      setServices: services => set(state => ({ ...state, services })),
      addService: service => set(state => ({ ...state, services: [...state.services, service] })),
      // updateService: service =>
      //   set(state => ({
      //     ...state,
      //     services: [
      //       ...state.services?.map(v => {
      //         if (v.platformId === service.platformId) return service;
      //         return v;
      //       }),
      //     ],
      //   })),
      deleteService: serviceId =>
        set(state => ({
          ...state,
          services: [...state.services?.filter(v => v.platformId !== serviceId)],
        })),
    }),
    { name: 'service' },
  ),
);
