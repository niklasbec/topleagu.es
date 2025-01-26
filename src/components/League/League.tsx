import React, { useCallback, useMemo } from 'react';
import TopScorer from '@/components/StatCards/TopScorer';
import Table from '@/components/StatCards/Table/Table';
import Fixtures from '../StatCards/Fixtures';
import { LeagueType } from '@/types/apiSchemas/getLeagues';
import GameOfTheWeek from '../StatCards/GameOfTheWeek/GameOfTheWeek';

const League = ({ name, top_scorers, standings, fixtures, odds_key }: LeagueType) => {
  const calculateGameOfTheWeek = useCallback(() => {
    const teamStandings = {};
    let lowestTotal = Infinity;
    let game = fixtures[0];

    standings[0].forEach((team) => {
      teamStandings[team.team.name] = team.rank;
    });

    fixtures.forEach((fixture) => {
      const total = teamStandings[fixture.teams.away.name] + teamStandings[fixture.teams.home.name];
      if (total < lowestTotal) {
        lowestTotal = total;
        game = fixture;
      }
    });

    return game;
  }, [standings, fixtures]);

  const gameOfTheWeek = useMemo(() => calculateGameOfTheWeek(), [calculateGameOfTheWeek]);

  return (
    <div className="h-full overflow-hidden">
      <h1 className="text-5xl font-bold font-bungee select-none mb-4">{name}</h1>
      <div className="xl:flex flex-wrap justify-between">
        <div className="flex flex-col xl:w-[49%]">
          <TopScorer top_scorers={top_scorers} />
          <Table standings={standings} league={name} />
        </div>
        <div className="flex flex-col xl:w-[49%]">
          <GameOfTheWeek leagueKey={odds_key} game={gameOfTheWeek} />
          <Fixtures fixtures={fixtures} />
        </div>
      </div>
    </div>
  );
};

export default League;
