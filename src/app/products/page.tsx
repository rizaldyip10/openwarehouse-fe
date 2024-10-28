import ProductFilters from "./_components/ProductsFilters";
import ProductList from "./_components/ProductsList";

export default function ProductsPage() {
  return (
    <div className="w-full flex justify-center px-3 md:px-10 lg:px-24 py-7 bg-extends-bgDefault">
        <div className="w-full xl:w-[1440px] grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
            <ProductFilters />
            <ProductList />
        </div>
    </div>
  );
};
