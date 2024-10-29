import { useUserLoginMutation } from '../api/useUserLoginMutation';
import { setCookie, deleteCookie, getCookie } from '@/config/cookie';
import { useToast } from '@/hooks/use-toast';
import { useKeepLogin } from './useKeepLogin';
import { useRouter } from 'next/navigation';

export const useUserLogin = () => {
  const { toast } = useToast();
  const { keepLoginMutation } = useKeepLogin();
  const navigate = useRouter();

  const { mutate: UserLoginMutation, isPending: UserLoginLoading } =
    useUserLoginMutation({
      onSuccess: async (res: any) => {
        const accesstoken = res?.data?.data;

        const cookie = await getCookie();
        if (cookie) {
          deleteCookie();
        }
        await setCookie(accesstoken);
        keepLoginMutation();

        toast({
          variant: 'success',
          description: res?.data?.message,
        });

        setTimeout(() => {
          navigate.push('/');
        }, 1500);
      },
      onError: (err: any) => {
        console.log(err.response.data.message);
        toast({
          variant: 'destructive',
          description: err.response.data.message,
        });
      },
    });

  return {
    UserLoginMutation,
    UserLoginLoading,
  };
};
