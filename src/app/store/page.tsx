import StoreCard from './_components/Card';

export default function StorePage() {
  return (
    <div className='flex min-h-screen flex-grow flex-col items-center gap-12 bg-extends-bgDefault px-24 py-12'>
      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
        <div className='flex items-center justify-center'>
          <StoreCard storeName='Apple' />
        </div>
      </div>
    </div>
  );
}
