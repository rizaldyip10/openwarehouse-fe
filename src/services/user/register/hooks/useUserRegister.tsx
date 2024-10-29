import { useUserRegisterMutation } from '../api/useUserRegisterMutation';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export const useUserRegister = () => {
  const { toast } = useToast();
  const navigate = useRouter();

  const { mutate: UserRegisterMutation, status: UserRegisterStatus } =
    useUserRegisterMutation({
      onSuccess: (res: any) => {
        console.log(res);

        toast({
          variant: 'success',
          description: res?.data?.message,
        });

        setTimeout(() => {
          navigate.push('/signin');
        }, 1500);
      },
      onError: (err: any) => {
        console.log(err);
        toast({
          variant: 'destructive',
          description: err.response.data.message,
        });
      },
    });
  return {
    UserRegisterMutation,
    UserRegisterStatus,
  };
};
