'use client';

import { useKeepLoginMutation } from '../api/useKeepLoginMutation';
import useStore from '@/zustand';

export const useKeepLogin = () => {
  const { login, setIsLoading, logout } = useStore();
  const {
    mutate: keepLoginMutation,
    isPending: keepLoginLoading,
    status,
  } = useKeepLoginMutation({
    onSuccess: async (res: any) => {
      try {
        setIsLoading(true);

        const { email, fullname } = res?.data?.data;

        login(email, fullname);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    onError: (err: any) => {
      logout();
    },
  });

  return {
    keepLoginMutation,
    keepLoginLoading,
    status,
  };
};
