import BennefitsSection from './_components/Bennefits';
import CollectionSection from './_components/Collections';
import HeroSection from './_components/Hero';
import PopularBrands from './_components/PopularStores';
import ProductList from './_components/ProductList';
import PromoBanner from './_components/PromoBanner';

export default function Home() {
  return (
    <main className='w-full bg-extends-brokenWhite'>
      <HeroSection />
      <div className='flex w-full flex-col items-center justify-center px-3 md:px-10 lg:px-24'>
        <CollectionSection />
        <PopularBrands />
        <ProductList />
        <PromoBanner />
        <BennefitsSection />
      </div>
    </main>
  );
}
