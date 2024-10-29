import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/config/AxiosInstance';
import { UserRegisterRequest } from '../interfaces';

export const useUserRegisterMutation = ({ onSuccess, onError }: any) => {
  const { mutate, status } = useMutation({
    mutationFn: async ({ email, fullname, password }: UserRegisterRequest) => {
      return await axiosInstance.post('/auth/signup', {
        email,
        fullname,
        password,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
    status,
  };
};
