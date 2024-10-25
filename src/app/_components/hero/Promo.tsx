import { Button } from '@/components/ui/button'
import React from 'react'

export default function Promo() {
  return (
    <div className='w-full md:w-1/2 flex flex-col md:items-start gap-2'>
        <div className='px-2 py-1 bg-yellow-500 rounded-md w-max'>
            <h1 className='text-base text-black'>
                Free Shipping - orders over $100
            </h1>
        </div>
        <div className='flex flex-col gap-10 text-wrap w-full'>
            <h1 className='text-black text-4xl md:text-6xl text-wrap'>
                Limited Time Offer! <br />
                <span className='font-bold'>Up To 50% OFF</span>
            </h1>
            <h2 className='text-black text-xl text-wrap'>
                Introduced a new model for online grocery shopping and convenient home delivery.
            </h2>
            <Button
                variant="outline"
                className='border-2 border-purple-700 text-purple-700 w-max bg-transparent rounded-none hover:bg-purple-700 hover:text-white'
            >
                Explore Store
            </Button>
        </div>
    </div>
  )
}
