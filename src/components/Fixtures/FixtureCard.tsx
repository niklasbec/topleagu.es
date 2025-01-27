import React from 'react';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import Score from './Score';

interface FixtureCardProps {
  className: string;
  fixture: FixtureType;
}

const FixtureCard = ({ fixture, className }: FixtureCardProps) => {
  const homeTeam = fixture.teams.home;
  const awayTeam = fixture.teams.away;

  return (
    <div
      className={
        className + '  flex flex-col m-2 rounded-xl items-center justify-between p-6 bg-gradient-to-bl from-[#fff1f2a9]  to-[#ffffff] shadow-lg'
      }
    >
      <div className="w-full flex items-center justify-between mb-6">
        <div className="w-2/5 flex justify-center">
          <img className="h-14 w-auto" src={homeTeam.logo} alt={homeTeam.name + ' Logo'} />
        </div>
        <p className="font-bungee text-xl">VS</p>
        <div className="w-2/5 flex justify-center">
          <img className="h-14 w-auto" src={awayTeam.logo} alt={awayTeam.name + ' Logo'} />
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
