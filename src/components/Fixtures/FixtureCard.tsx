import { Fixture } from "@/types/fixtures";
import React from "react";
import Image from "next/image";
import Score from "@/components/Fixtures/Score";
import { useWindowSize } from "@uidotdev/usehooks";
import { FixtureType } from "@/types/apiSchemas/getLeagues";
import { teamNameAbbreviation } from "@/helpers/teamNameAbbreviation";

interface FixtureCardProps extends Fixture {
  className: string;
  fixture: FixtureType;
}

const sharedTeamContainerStyles =
  "w-1/2 h-[50px] flex items-center font-inter text-md sm:text-lg sm:font-extrabold sm:tracking-wide";

const FixtureCard = ({ fixture, className }: FixtureCardProps) => {
  const homeTeam = fixture.teams.home;
  const awayTeam = fixture.teams.away;
  const league = fixture.league.name;

  const { width } = useWindowSize();
  const showAbbreviations = width && width < 500;
  return (
    <div className={className + " flex justify-between items-center relative"}>
      <div
        className={`bg-slate-900 ${sharedTeamContainerStyles} rounded-l-full `}
      >
        <Image
          className="ml-2"
          src={homeTeam.logo}
          width={32}
          height={32}
          alt={homeTeam.name}
        />
        {showAbbreviations ? (
          <p className="ml-2 text-white text-lg">
            {teamNameAbbreviation(homeTeam.name)}
          </p>
        ) : (
          <p className="ml-2 text-white w-20 xs:w-28 sm:w-full truncate">
            {homeTeam.name.toUpperCase()}
          </p>
        )}
      </div>
      <div
        className={`bg-slate-900 ${sharedTeamContainerStyles} justify-end rounded-r-full`}
      >
        {showAbbreviations ? (
          <p className="mr-2 text-white text-lg">
            {teamNameAbbreviation(awayTeam.name)}
          </p>
        ) : (
          <p className="mr-2 text-white w-20 xs:w-28 sm:w-full text-right truncate">
            {awayTeam.name.toUpperCase()}
          </p>
        )}
        <Image
          src={awayTeam.logo}
          width={32}
          height={32}
          alt={awayTeam.name}
          className="mr-2"
        />
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
