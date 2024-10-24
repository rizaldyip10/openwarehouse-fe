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

export default function HeroCarousel(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  return (
    <div className="w-1/2 flex justify-center">
      <Carousel className="w-[250px] h-[250px] md:w-[450px] md:h-[450px]" setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <Image src={imgPlaceholder} alt="product" priority />
          </CarouselItem>
          <CarouselItem>
            <Image src={imgPlaceholder} alt="product" />
          </CarouselItem>
          <CarouselItem>
            <Image src={imgPlaceholder} alt="product" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};