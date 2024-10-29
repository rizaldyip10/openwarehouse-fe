'use client';

import StoreCard from './_components/Card';
import { useGetStore } from '@/services/store/hooks/useGetStore';
import { StoreDataProps } from '@/services/store/interfaces';

export default function StorePage() {
  const { storeData } = useGetStore();

  const data: StoreDataProps[] = storeData?.data?.data;

  return (
    <div className='flex min-h-screen flex-grow flex-col items-center gap-12 bg-extends-bgDefault px-24 py-12'>
      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
        {data?.map((store: StoreDataProps) => {
          return (
            <div key={store.slug} className='flex items-center justify-center'>
              <StoreCard
                imageUrl={store.imageUrl}
                name={store.name}
                slug={store.slug}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
