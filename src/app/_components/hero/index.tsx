import HeroCarousel from "./HeroCarousel";
import Promo from "./Promo";

export default function HeroSection() {
  return (
    <div className="w-full bg-soft-gradient flex justify-center items-center py-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-max px-5 md:px-10 lg:px-24 gap-y-10">
            <Promo />
            <HeroCarousel />
        </div>
    </div>
  );
};
