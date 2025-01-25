import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import WinProbability from './WinProbability';
import CountDown from './CountDown';

interface GameOfTheWeekProps {
  game: FixtureType;
  className?: string;
}

const GameOfTheWeek = ({ game, className }: GameOfTheWeekProps) => {
  return (
    <Card className={'bg-cover bg-purple-400 my-3 font-bold h-fit text-zinc-950 ' + className}>
      <CardHeader>
        <CardTitle className="font-bungee">Game of the Week</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap flex-col items-center my-4">
        <div className="flex items-center">
          <img className="mr-4" src={game.teams.home.logo} width={100} alt={'logo ' + game.teams.home.name} />
          <p className="font-bungee text-4xl">VS</p>
          <img className="ml-4" src={game.teams.away.logo} width={100} alt={'logo ' + game.teams.away.name} />
        </div>
        <p className="mt-3 text-lg uppercase font-semibold tracking-tight">{game.fixture.venue.name}</p>
        <CountDown className="font-bungee text-4xl mt-2" date={game.fixture.date} />
        <WinProbability game={game} />
      </CardContent>
    </Card>
  );
};

export default GameOfTheWeek;
