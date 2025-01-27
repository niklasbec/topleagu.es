import React from 'react';
import Score from '@/components/Fixtures/Score';
import { useWindowSize } from '@uidotdev/usehooks';
import { FixtureType } from '@/types/apiSchemas/getLeagues';
import { teamNameAbbreviation } from '@/helpers/teamNameAbbreviation';

interface FixtureCardProps {
  className: string;
  fixture: FixtureType;
}

const sharedTeamContainerStyles = 'bg-white w-1/2 h-[50px] flex items-center font-inter text-md sm:text-lg sm:font-bold';

const FixtureCard = ({ fixture, className }: FixtureCardProps) => {
  const homeTeam = fixture.teams.home;
  const awayTeam = fixture.teams.away;
  // const league = fixture.league.name;

  const { width } = useWindowSize();
  const showAbbreviations = width && width < 500;
  return (
    <div className={className + ' flex justify-between items-center relative text-zinc-950'}>
      <div className={`${sharedTeamContainerStyles} rounded-l-full `}>
        <img className="h-8 w-auto ml-3" src={homeTeam.logo} alt={homeTeam.name + ' Logo'} />
        {showAbbreviations ? (
          <p className="ml-2 text-lg">{teamNameAbbreviation(homeTeam.name)}</p>
        ) : (
          <p className="ml-2 w-20 xs:w-28 sm:w-full truncate">{homeTeam.name.toUpperCase()}</p>
        )}
      </div>
      <div className={`${sharedTeamContainerStyles} justify-end rounded-r-full`}>
        {showAbbreviations ? (
          <p className="mr-2 text-lg">{teamNameAbbreviation(awayTeam.name)}</p>
        ) : (
          <p className="mr-2 w-20 xs:w-28 sm:w-full text-right truncate">{awayTeam.name.toUpperCase()}</p>
        )}
        <img className="h-8 w-auto mr-3" src={awayTeam.logo} alt={awayTeam.name + ' Logo'} />
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
