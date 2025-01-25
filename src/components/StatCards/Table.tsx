import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { CaretDownIcon, CaretUpIcon, DoubleArrowDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { StandingType } from '@/types/apiSchemas/getLeagues';
import TableTeamFoldOut from './TableTeamFoldOut';

interface LeagueStandingsProps {
  standings: StandingType[][];
  league: string | 'Premier League' | 'La Liga' | 'Serie A' | 'Bundesliga' | 'Ligue 1';
}

const LeagueTable = ({ standings, league }: LeagueStandingsProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedTeam, setSelectedTeam] = useState<null | string>(null);
  const teams = standings[0];
  const filteredTeams = [...teams.slice(0, 3), ...teams.slice(teams.length - 4, teams.length - 1)];
  console.log(league);

  return (
    <Card className="bg-green-400 my-3 text-zinc-950">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="font-bungee">League Table</CardTitle>
          <Toggle onPressedChange={setShowAll} defaultPressed={showAll} pressed={showAll} variant="outline" aria-label="Toggle show all">
            {showAll ? <CaretUpIcon /> : <CaretDownIcon className="text-zinc-950" />}
          </Toggle>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="font-inter font-medium">
          <TableHeader>
            <TableRow className="font-bungee">
              <TableHead className="w-fit text-zinc-950">Team</TableHead>
              <TableHead className="w-5 text-center text-zinc-950">Games</TableHead>
              <TableHead className="w-5 text-center text-zinc-950">W</TableHead>
              <TableHead className="w-5 text-center text-zinc-950">L</TableHead>
              <TableHead className="w-5 text-center text-zinc-950">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(showAll ? teams : filteredTeams).map((team, index: number) => (
              <React.Fragment key={team.team.id}>
                <TableRow onClick={() => setSelectedTeam(team.team.name)}>
                  <TableCell>
                    <div className="flex items-center font-semibold text-zinc-950">
                      {index < 3 || showAll ? index + 1 : index + 15}. {team.team.name}
                      <img className="h-8 w-auto ml-2" src={team.team.logo} alt={team.team.name + ' Logo'} />
                    </div>
                    {selectedTeam === team.team.name && <TableTeamFoldOut standing={team} />}
                  </TableCell>
                  <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.all.win}</TableCell>
                  <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.all.lose}</TableCell>
                  <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.all.played}</TableCell>
                  <TableCell className="text-center align-top justify-center font-bungee text-xl">{team.points}</TableCell>
                </TableRow>
                {index === 2 && !showAll && (
                  <TableRow key={'spacer' + team.team.id} onClick={() => setShowAll(!showAll)}>
                    <TableCell>
                      <div className="flex items-center">
                        <DoubleArrowDownIcon />
                      </div>
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell>
                      <div className="flex justify-center">
                        <DoubleArrowDownIcon />
                      </div>
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
