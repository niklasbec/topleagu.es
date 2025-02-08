import React from 'react';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import Score from './Score';

interface FixtureCardProps {
  className: string;
  fixture: FixtureType;
  league: string;
}

const FixtureCard = ({ fixture, className, league }: FixtureCardProps) => {
  const homeTeam = fixture.teams.home;
  const awayTeam = fixture.teams.away;

  return (
    <div
      className={
        className +
        '  flex flex-col m-2 rounded-xl items-center justify-between p-6 bg-gradient-to-bl from-[#fff1f2a9]  to-[#ffffff] shadow-lg'
      }
    >
      <div className="w-full flex items-center justify-between mb-6">
        <div className="w-2/5 flex justify-center">
          <img
            className="h-16 w-auto"
            src={`https://ld49syfljdcz1lbe.public.blob.vercel-storage.com/${encodeURI(league)}/${encodeURI(homeTeam.name)}.svg`}
            alt={homeTeam.name + ' Logo'}
          />{' '}
        </div>
        <p className="font-bungee text-xl">VS</p>
        <div className="w-2/5 flex justify-center">
          <img
            className="h-16 w-auto"
            src={`https://ld49syfljdcz1lbe.public.blob.vercel-storage.com/${encodeURI(league)}/${encodeURI(awayTeam.name)}.svg`}
            alt={awayTeam.name + ' Logo'}
          />
        </div>
      </div>
      <Score
        home={fixture.score.fulltime.home}
        away={fixture.score.fulltime.away}
        kickoff={fixture.fixture.date}
        status={fixture.fixture.status.short}
      />
    </div>
  );
};

export default FixtureCard;
