'use client';

import Loading from '@/components/template/Loading';
import { useKeepLogin } from '@/services/user/login/hooks/useKeepLogin';
import { useEffect } from 'react';
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

  useEffect(() => {
    keepLoginMutation();
  }, [keepLoginMutation]);

  const currentRole = userData?.data?.data?.role || null;
  const isAllowed = currentRole && allowedRoles.includes(currentRole);

  useEffect(() => {
    if (status === 'success' && !isAllowed) {
      navigate.push('/');
    }
  }, [status, isAllowed, navigate]);

  if (status === 'pending' || !currentRole) {
    return <LoadingScreen />;
  }

  return <>{isAllowed ? children : null}</>;
};

export default LoaderUserDashboard;
