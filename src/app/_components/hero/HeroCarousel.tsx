"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import imgPlaceholder from "@/assets/images/01.png";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Optional: Pause on hover
    const onMouseEnter = () => {
      plugin.current.stop();
    };

    const onMouseLeave = () => {
      plugin.current.play();
    };

    const element = api.rootNode();
    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", onMouseEnter);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [api]);

  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <Carousel 
        className="w-80 h-80 md:w-[480px] md:h-[480px]" 
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false
        }}
      >
        <CarouselContent>
          {[...Array(3)].map((_, index) => (
            <CarouselItem key={index}>
              <Image 
                src={imgPlaceholder} 
                alt={`product ${index + 1}`} 
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};