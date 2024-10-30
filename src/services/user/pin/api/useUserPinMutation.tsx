import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/config/AxiosInstance';

export const useUserPinMutation = ({ onSuccess, onError }: any) => {
  const { mutate, status } = useMutation({
    mutationFn: async (pin: string) => {
      return await axiosInstance.patch('/auth/pin', { pin });
    },
    onSuccess,
    onError,
  });

  return { mutate, status };
};
