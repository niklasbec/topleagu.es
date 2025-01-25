'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import League from '../League/League';
import { useQuery } from '@tanstack/react-query';
import { LeagueType } from '@/types/apiSchemas/getLeagues';
import Loader from '../Loader/Loader';

export default function LeagueCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const fetchLeagues = async () => {
    const res = await fetch('https://render-topleagues.onrender.com/leagues');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();

    return data;
  };

  const useLeagues = () => {
    return useQuery(['leagues'], fetchLeagues);
  };

  const { isLoading, error, data } = useLeagues();

  if (isLoading) {
    return (
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Loader />;
      </div>
    );
  }

  if (error) {
    return <span>Error</span>;
  }

  const { leagues } = data;

  return (
    <div className="h-full 2xl:max-w-[1800px]">
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
