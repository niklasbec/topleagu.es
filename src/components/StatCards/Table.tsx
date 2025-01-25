import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { CaretDownIcon, CaretUpIcon, DoubleArrowDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { StandingType } from '@/types/apiSchemas/getLeagues';
import TableTeamFoldOut from './TableTeamFoldOut';
import { useMediaQuery } from 'usehooks-ts';
import TableStandingIcon from './TableStandingIcon';
import { teamNameAbbreviation } from '@/helpers/teamNameAbbreviation';

interface LeagueStandingsProps {
  standings: StandingType[][];
  league: string | 'Premier League' | 'La Liga' | 'Serie A' | 'Bundesliga' | 'Ligue 1';
}

const LeagueTable = ({ standings, league }: LeagueStandingsProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedTeam, setSelectedTeam] = useState<null | string>(null);
  const teams = standings[0];
  const filteredTeams = [...teams.slice(0, 3), ...teams.slice(teams.length - 3, teams.length)];
  const showFurtherTableStats = useMediaQuery('(min-width: 768px)');
  const showAbbreviations = useMediaQuery('(max-width: 420px)');
  const tableHeadStyles = 'w-5 text-center text-zinc-950';

  return (
    <Card className="bg-green-400 my-3 text-zinc-950">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="font-bungee">League Table</CardTitle>
          <Toggle onPressedChange={setShowAll} defaultPressed={showAll} pressed={showAll} variant="outline" aria-label="Toggle show all">
            {showAll ? <CaretUpIcon /> : <CaretDownIcon className="text-zinc-950" />}
          </Toggle>
        </div>
        <span className="font-bungee !-mt-2">{league}</span>
      </CardHeader>
      <CardContent>
        <Table className="font-inter font-medium">
          <TableHeader>
            <TableRow className="font-bungee">
              <TableHead className="w-fit text-zinc-950">Team</TableHead>
              {showFurtherTableStats && (
                <>
                  <TableHead className={tableHeadStyles}>W</TableHead>
                  <TableHead className={tableHeadStyles}>L</TableHead>
                  <TableHead className={tableHeadStyles}>Games</TableHead>
                </>
              )}
              <TableHead className={tableHeadStyles}>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(showAll ? teams : filteredTeams).map((team, index: number) => (
              <React.Fragment key={team.team.id}>
                <TableRow onClick={() => setSelectedTeam(selectedTeam === team.team.name ? null : team.team.name)}>
                  <TableCell>
                    <div className="flex items-center font-semibold text-zinc-950">
                      {index < 3 || showAll ? index + 1 : index + teams.length - 5}.{' '}
                      {showAbbreviations ? teamNameAbbreviation(team.team.name) : team.team.name}
                      <img className="h-8 w-auto ml-2" src={team.team.logo} alt={team.team.name + ' Logo'} />
                      {team.description && showFurtherTableStats && <TableStandingIcon description={team.description} />}
                    </div>
                    {selectedTeam === team.team.name && <TableTeamFoldOut standing={team} />}
                  </TableCell>
                  {showFurtherTableStats && (
                    <>
                      <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.all.win}</TableCell>
                      <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.all.lose}</TableCell>
                      <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.all.played}</TableCell>
                    </>
                  )}
                  <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.points}</TableCell>
                </TableRow>
                {index === 2 && !showAll && (
                  <TableRow key={'spacer' + team.team.id} onClick={() => setShowAll(!showAll)}>
                    <TableCell>
                      <DoubleArrowDownIcon />
                    </TableCell>
                    {showFurtherTableStats && (
                      <>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                      </>
                    )}
                    <TableCell className="absolute right-0">
                      <DoubleArrowDownIcon />
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeagueTable;
