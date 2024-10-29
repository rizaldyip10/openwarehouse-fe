import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/config/AxiosInstance';
import { UserSignInRequest } from '../interfaces';

export const useUserLoginMutation = ({ onSuccess, onError }: any) => {
  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }: UserSignInRequest) => {
      return await axiosInstance.post('/auth/signin', {
        email,
        password,
      });
    },
    onSuccess,
    onError,
  });

  return { mutate, isPending };
};
