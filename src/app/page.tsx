import CollectionSection from "./_components/collections";
import HeroSection from "./_components/hero";

export default function Home() {
  return (
    <main className="w-full bg-slate-200">
      <HeroSection />
      <CollectionSection />
    </main>
  );
}
