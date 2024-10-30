import { useUserPinMutation } from '../api/useUserPinMutation';
import { useToast } from '@/hooks/use-toast';

export const useUserPin = () => {
  const { toast } = useToast();

  const { mutate: UserPinMutation, status: UserPinStatus } = useUserPinMutation(
    {
      onSuccess: async (res: any) => {
        toast({
          variant: 'success',
          description: res?.data?.message,
        });
      },
      onError: (err: any) => {
        toast({
          variant: 'destructive',
          description: err.response.data.message,
        });
      },
    },
  );

  return {
    UserPinMutation,
    UserPinStatus,
  };
};
