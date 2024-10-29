import { create } from 'zustand';
import { StoreState } from './types';
import { createAuthSlice } from './authSlice';

const useStore = create<StoreState>((...a) => ({
  ...createAuthSlice(...a),
}));

export default useStore;
