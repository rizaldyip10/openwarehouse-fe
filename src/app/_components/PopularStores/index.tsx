import React from 'react'
import PopularStoreList from './PopularStoreList'

export default function PopularBrands() {
  return (
    <div className="w-full flex items-center justify-center p-8">
        <div className='w-full 2xl:w-[1440px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-black text-2xl font-semibold'>Most Popular Stores</h1>
            <p className='text-gray-500 text-lg font-normal'>All brand Offer start 25 Dec.</p>
          </div>
          <PopularStoreList />
        </div>
    </div>
  )
}
