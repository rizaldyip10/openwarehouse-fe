// components/FullScreenLoader.js
'use client';

import Loading from '@/components/template/Loading';
import { useKeepLogin } from '@/services/user/login/hooks/useKeepLogin';
import { useEffect } from 'react';
import { useGetStore } from '@/services/store/hooks/useGetStore';

const FullScreenLoader = () => {
  const { keepLoginMutation, status } = useKeepLogin();
  const { storeDataLoading } = useGetStore();

  useEffect(() => {
    keepLoginMutation();
  }, [keepLoginMutation]);

  if (status === 'pending' || status === 'idle' || storeDataLoading) {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
        <Loading />
      </div>
    );
  }

  return null;
};

export default FullScreenLoader;
