'use client';

import Loading from '@/components/template/Loading';
import { useKeepLogin } from '@/services/user/login/hooks/useKeepLogin';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from '@/config/cookie';

const LoadingScreen = () => (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
    <Loading />
  </div>
);

const LoaderUserDashboard = ({ allowedRoles, children }: any) => {
  const { keepLoginMutation, status, userData } = useKeepLogin();
  const navigate = useRouter();
  const [cookieChecked, setCookieChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkCookie = async () => {
      const cookie = await getCookie();
      if (!cookie) {
        navigate.push('/signin');
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        setCookieChecked(true);
      }
    };
    checkCookie();
  }, [navigate]);

  useEffect(() => {
    if (cookieChecked) {
      keepLoginMutation();
    }
  }, [keepLoginMutation, cookieChecked]);

  const currentRole = userData?.data?.data?.role || null;
  const isAllowed = currentRole && allowedRoles.includes(currentRole);

  useEffect(() => {
    if (status === 'success' && !isAllowed) {
      navigate.push('/');
    }
  }, [status, isAllowed, navigate]);

  if (!cookieChecked || status === 'pending') {
    return <LoadingScreen />;
  }

  return <>{isAllowed ? children : null}</>;
};

export default LoaderUserDashboard;
