// components/FullScreenLoader.js
'use client';

import Loading from '@/components/template/Loading';
import { useKeepLogin } from '@/services/user/login/hooks/useKeepLogin';
import { useEffect } from 'react';

const FullScreenLoader = () => {
  const { keepLoginMutation, status } = useKeepLogin();

  useEffect(() => {
    keepLoginMutation();
  }, [keepLoginMutation]);

  if (status === 'pending' || status === 'idle') {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
        <Loading />
      </div>
    );
  }

  return null;
};

export default FullScreenLoader;
