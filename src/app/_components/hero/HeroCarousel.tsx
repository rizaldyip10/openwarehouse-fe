"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { useRef } from "react";
import pro5 from "@/assets/images/pro-4.png";
import pro6 from "@/assets/images/pro-2.png";
import pro7 from "@/assets/images/pro-3.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const imgs = [
  pro5, pro6, pro7
]

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
          {imgs.map((img, index) => (
            <CarouselItem key={index}>
              <Image 
                src={img} 
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