import { teamNameAbbreviation } from '@/helpers/teamNameAbbreviation';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { stringSimilarity } from 'string-similarity-js';
import { OddsType, OutcomeType } from '@/types/apiSchemas/getOdds';
import { createOddsQueryOptions } from '@/queryOptions/odds';

interface WinProbabilityProps {
  game: FixtureType;
  leagueKey: string;
}

const WinProbability = ({ game, leagueKey }: WinProbabilityProps) => {
  let odds = {
    homeTeamWinPos: 0,
    awayTeamWinPos: 0,
    drawPos: 0,
  };
  const { home, away } = game.teams;

  const { isLoading, error, data } = useSuspenseQuery(createOddsQueryOptions(leagueKey));

  try {
    const match = data.odds.find(
      (odd: OddsType) => stringSimilarity(odd.away_team, away.name) > 0.8 || stringSimilarity(odd.home_team, home.name) > 0.8
    );

    if (match && match.bookmakers.length > 0 && match.bookmakers[0].markets.length > 0) {
      const matchOdds = match.bookmakers[0].markets[0].outcomes;

      if (matchOdds.length >= 3) {
        const oddsTotal = matchOdds.reduce((acc: number, val: OutcomeType) => acc + 1 / val.price, 0);

        const homeOutcome = matchOdds.find((outcome: OutcomeType) => stringSimilarity(outcome.name, home.name) > 0.5);
        const awayOutcome = matchOdds.find((outcome: OutcomeType) => stringSimilarity(outcome.name, away.name) > 0.5);
        const drawOutcome = matchOdds.find((outcome: OutcomeType) => outcome.name.toLowerCase() === 'draw');

        const homeProb = homeOutcome ? Math.round((1 / homeOutcome.price / oddsTotal) * 100) : 0;
        const awayProb = awayOutcome ? Math.round((1 / awayOutcome.price / oddsTotal) * 100) : 0;
        const drawProb = drawOutcome ? Math.round((1 / drawOutcome.price / oddsTotal) * 100) : 0;

        odds = {
          homeTeamWinPos: homeProb,
          awayTeamWinPos: awayProb,
          drawPos: drawProb,
        };
      }
    }
  } catch (error) {}

  if (isLoading) {
    return null;
  }

  if (Object.values(odds).some((val) => !val) || error) {
    return <p className="font-medium mt-2">{"We can't provide odds for this game"}</p>;
  }

  return (
    <div className="w-3/4 text-white text-xl font-extrabold">
      <div className="w-full flex items-end my-4 h-20">
        <div
          style={{ width: `${odds.homeTeamWinPos}%` }}
          className="bg-white h-3/4 rounded-t-xl rounded-l-xl flex justify-center items-center"
        ></div>
        <div
          style={{ width: `${odds.drawPos}%` }}
          className="bg-gray-200 opacity-50 h-2/4 rounded-tr-xl flex justify-center items-center"
        ></div>
        <div style={{ width: `${odds.awayTeamWinPos}%` }} className="h-1/4 rounded-tr-xl flex justify-evenly items-center">
          {Array.from({ length: odds.awayTeamWinPos * 0.5 }, (_, i) => i + 1).map((x) => (
            <div key={x} className="w-[2px] h-full bg-white" />
          ))}
        </div>
      </div>
      <div className="w-full flex items-end">
        <div className="flex flex-col w-1/3 justify-center items-start">
          <p className="font-bungee text-2xl">{odds.homeTeamWinPos}%</p>
          <p>{teamNameAbbreviation(home.name)}</p>
        </div>
        <div className="flex flex-col w-1/3 justify-center items-center">
          <p className="font-bungee text-2xl">{odds.drawPos}%</p>
          <p>DRAW</p>
        </div>
        <div className="flex flex-col w-1/3 justify-center items-end">
          <p className="font-bungee text-2xl">{odds.awayTeamWinPos}%</p>
          <p>{teamNameAbbreviation(away.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default WinProbability;
