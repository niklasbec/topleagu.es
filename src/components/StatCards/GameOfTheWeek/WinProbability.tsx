import { teamNameAbbreviation } from '@/helpers/teamNameAbbreviation';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface WinProbabilityProps {
  game: FixtureType;
  leagueKey: string;
}

const WinProbability = ({ game, leagueKey }: WinProbabilityProps) => {
  let odds = {
    homeTeamWinPos: null,
    awayTeamWinPos: null,
    drawPos: null,
  };
  const { home, away } = game.teams;

  const fetchOdds = async () => {
    const res = await fetch(`https://render-topleagues.onrender.com/odds?league_key=${leagueKey}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();

    return data;
  };

  const useOdds = () => {
    return useQuery(['odds-' + leagueKey], fetchOdds);
  };

  const { isLoading, error, data } = useOdds();

  if (data) {
    console.log(away.name, home.name);
    const match = data.odds.filter((odd) => odd.away_team.includes(away.name) || odd.home_team.includes(home.name));
    if (match.length > 0) {
      const matchOdds = match[0].bookmakers[0].markets[0].outcomes;
      const oddsTotal = match[0].bookmakers[0].markets[0].outcomes.reduce((acc, val) => acc + val.price, 0);
      odds = {
        homeTeamWinPos: Math.round((matchOdds[1].price / oddsTotal) * 100),
        awayTeamWinPos: Math.round((matchOdds[0].price / oddsTotal) * 100),
        drawPos: Math.round((matchOdds[2].price / oddsTotal) * 100),
      };
    }
  }

  if (isLoading) {
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
        <div style={{ width: `${odds.homeTeamWinPos}%` }} className="flex flex-col justify-center items-center">
          <p className="font-bungee text-2xl">{odds.homeTeamWinPos}%</p>
          <p>{teamNameAbbreviation(home.name)}</p>
        </div>
        <div style={{ width: `${odds.drawPos}%` }} className="flex flex-col justify-center items-center">
          <p className="font-bungee text-2xl">{odds.drawPos}%</p>
          <p>DRAW</p>
        </div>
        <div style={{ width: `${odds.awayTeamWinPos}%` }} className="flex flex-col justify-center items-center">
          <p className="font-bungee text-2xl">{odds.awayTeamWinPos}%</p>
          <p>{teamNameAbbreviation(away.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default WinProbability;
