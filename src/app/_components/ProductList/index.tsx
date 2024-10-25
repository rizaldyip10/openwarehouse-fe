import { ProductListData } from '@/app/data/DummyData'
import { ProductCard } from '@/components/template/ProductCard'
import React from 'react'

export default function ProductList() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
      {
        ProductListData.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))
      }
    </div>
  )
}
