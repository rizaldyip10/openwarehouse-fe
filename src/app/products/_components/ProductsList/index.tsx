import { PaginationComponent } from "@/components/template/Pagination";
import { ProductCard } from "@/components/template/ProductCard";
import { ProductListData } from "@/data/DummyData";

export default function ProductList() {
  return (
    <div className='col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-9 xl:col-span-9'>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                ProductListData.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            }
        </div>
        <div className="w-full mt-4">
            <PaginationComponent />
        </div>
    </div>
  )
}
