import React from 'react';
import TopScorer from '@/components/StatCards/TopScorer';
import Table from '@/components/StatCards/Table/Table';
import Fixtures from '../StatCards/Fixtures';
import { LeagueType } from '@/types/apiSchemas/getLeagues';
import GameOfTheWeek from '../StatCards/GameOfTheWeek/GameOfTheWeek';

const League = ({ name, top_scorers, standings, fixtures }: LeagueType) => {
  return (
    <div className="h-full overflow-hidden">
      <h1 className="text-5xl font-bold font-bungee select-none mb-4">{name}</h1>
      <div className="xl:flex flex-wrap justify-between">
        <div className="w-full flex flex-col xl:w-[49%]">
          <TopScorer top_scorers={top_scorers} />
          <Table standings={standings} league={name} />
        </div>
        <div className="w-full flex flex-col xl:w-[49%]">
          <GameOfTheWeek game={fixtures[8]} />
          <Fixtures fixtures={fixtures} />
        </div>
      </div>
    </div>
  );
};

export default League;
