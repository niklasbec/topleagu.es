"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { leagues } from "@/definitions/leagues";
import Header from "@/components/Header/Header";
import League from "../League";

export default function LeagueCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  console.log(current);

  return (
    <div className="h-full">
      <Header
        league={leagues[current - 1]}
        currentIndex={current - 1}
        maxIndex={leagues.length}
      />
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {leagues.map((league) => (
            <CarouselItem key={league.name}>
              <League name={league.name} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
