import { StateCreator } from 'zustand';
import { AuthSlice } from './../types';
import { deleteCookie } from '@/config/cookie';

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthenticated: false,
  email: null,
  role: null,
  fullname: null,
  username: null,
  isLoading: false,

  login: (email: string, fullname: string) =>
    set({
      isAuthenticated: true,
      email,
      fullname,
    }),
  logout: () => {
    deleteCookie();
    localStorage.removeItem('role');
    set({
      isAuthenticated: false,
      email: null,
      fullname: null,
    });
  },
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
});
