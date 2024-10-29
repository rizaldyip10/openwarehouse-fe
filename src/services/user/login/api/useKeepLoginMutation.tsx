import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/config/AxiosInstance';

export const useKeepLoginMutation = ({ onSuccess, onError }: any) => {
  const { mutate, isPending, status } = useMutation({
    mutationFn: async () => {
      return await axiosInstance.post('/auth/me');
    },
    onSuccess,
    onError,
  });

  return { mutate, isPending, status };
};
