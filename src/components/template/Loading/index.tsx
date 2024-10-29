'use client';

import useStore from '@/zustand';

const Loading = () => {
  return (
    <div className='h-16 w-16 animate-spin rounded-full border-4 border-dashed border-primary'></div>
  );
};

export default Loading;
