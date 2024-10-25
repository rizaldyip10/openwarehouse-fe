import CollectionSection from "./_components/Collections";
import HeroSection from "./_components/Hero";
import PopularBrands from "./_components/PopularStores";

export default function Home() {
  return (
    <main className="w-full bg-slate-200">
      <HeroSection />
      <div className="w-full flex flex-col justify-center items-center px-3 md:px-10 lg:px-24">
        <CollectionSection />
        <PopularBrands />
      </div>
    </main>
  );
}
