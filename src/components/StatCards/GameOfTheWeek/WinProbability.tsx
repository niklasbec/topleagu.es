import { teamNameAbbreviation } from '@/helpers/teamNameAbbreviation';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import React from 'react';

interface WinProbabilityProps {
  game: FixtureType;
}

const WinProbability = ({ game }: WinProbabilityProps) => {
  const homeTeamWinPos = 45;
  const awayTeamWinPos = 25;
  const drawPos = 30;
  const { home, away } = game.teams;

  return (
    <div className="w-3/4 text-white text-xl font-extrabold">
      <div className="w-full flex items-end my-4 h-20">
        <div
          style={{ width: `${homeTeamWinPos}%` }}
          className="bg-white h-3/4 rounded-t-xl rounded-l-xl flex justify-center items-center"
        ></div>
        <div style={{ width: `${drawPos}%` }} className="bg-gray-200 opacity-50 h-2/4 rounded-tr-xl flex justify-center items-center"></div>
        <div style={{ width: `${awayTeamWinPos}%` }} className="h-1/4 rounded-tr-xl flex justify-evenly items-center">
          {Array.from({ length: awayTeamWinPos * 0.5 }, (_, i) => i + 1).map((x) => (
            <div key={x} className="w-[2px] h-full bg-white" />
          ))}
        </div>
      </div>
      <div className="w-full flex items-end">
        <div style={{ width: `${homeTeamWinPos}%` }} className="flex flex-col justify-center items-center">
          <p className="font-bungee text-2xl">{homeTeamWinPos}%</p>
          <p>{teamNameAbbreviation(home.name)}</p>
        </div>
        <div style={{ width: `${drawPos}%` }} className="flex flex-col justify-center items-center">
          <p className="font-bungee text-2xl">{drawPos}%</p>
          <p>DRAW</p>
        </div>
        <div style={{ width: `${awayTeamWinPos}%` }} className="flex flex-col justify-center items-center">
          <p className="font-bungee text-2xl">{awayTeamWinPos}%</p>
          <p>{teamNameAbbreviation(away.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default WinProbability;
