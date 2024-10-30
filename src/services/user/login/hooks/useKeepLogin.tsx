import { useKeepLoginMutation } from '../api/useKeepLoginMutation';
import useStore from '@/zustand';

export const useKeepLogin = () => {
  const { login, setIsLoading, logout } = useStore();
  const {
    mutate: keepLoginMutation,
    isPending: keepLoginLoading,
    status,
    data: userData,
  } = useKeepLoginMutation({
    onSuccess: async (res: any) => {
      setIsLoading(true);

      const { email, fullname, role, pin } = res?.data?.data;
      login(email, fullname, role, pin);
      setIsLoading(false);
    },
    onError: (err: any) => {
      logout();
      setIsLoading(false);
    },
  });

  return {
    keepLoginMutation,
    keepLoginLoading,
    status,
    userData,
  };
};
