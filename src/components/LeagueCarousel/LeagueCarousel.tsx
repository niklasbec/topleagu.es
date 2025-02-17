'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import League from '../League/League';
import { useSuspenseQuery, useQuery } from '@tanstack/react-query';
import { LeagueType } from '@/types/apiSchemas/getLeagues';
import Loader from '../Loader/Loader';
import { createLeaguesQueryOptions } from '@/queryOptions/leagues';

export default function LeagueCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  const { error, data, isPending } = useQuery(createLeaguesQueryOptions());

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if(isPending) {
    return <Loader />
  }

  if (error) {
    return <span>Error</span>;
  }

  const { leagues } = data;

  return (
    <div className="h-full 2xl:max-w-[1500px] 3xl:max-w-[1800px]">
      <Header league={leagues[current - 1]} currentIndex={current - 1} maxIndex={leagues.length} />
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {data.leagues.map((league: LeagueType) => (
            <CarouselItem key={league.name}>
              <League {...league} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
