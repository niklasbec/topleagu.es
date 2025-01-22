import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import {
  CaretDownIcon,
  CaretUpIcon,
  DoubleArrowDownIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { StandingType } from "@/types/apiSchemas/getLeagues";

interface LeagueStandingsProps {
  standings: StandingType[][];
  league:
    | string
    | "Premier League"
    | "La Liga"
    | "Serie A"
    | "Bundesliga"
    | "Ligue 1";
}

const LeagueTable = ({ standings, league }: LeagueStandingsProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const teams = standings[0];
  const filteredTeams = [
    ...teams.slice(0, 3),
    ...teams.slice(teams.length - 4, teams.length - 1),
  ];
  console.log(league);

  return (
    <Card className="bg-green-400 my-3 text-black">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="font-bungee">League Table</CardTitle>
          <Toggle
            onPressedChange={setShowAll}
            defaultPressed={showAll}
            pressed={showAll}
            variant="outline"
            aria-label="Toggle show all"
          >
            {showAll ? (
              <CaretUpIcon />
            ) : (
              <CaretDownIcon className="text-black" />
            )}
          </Toggle>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="font-inter font-medium">
          <TableHeader>
            <TableRow className="font-bungee">
              <TableHead className="w-fit text-black">Team</TableHead>
              <TableHead className="w-0 text-black">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(showAll ? teams : filteredTeams).map((team, index: number) => (
              <React.Fragment key={team.team.id}>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center font-semibold text-black">
                      {index < 3 || showAll ? index + 1 : index + 15}.{" "}
                      {team.team.name}
                      <Image
                        width={32}
                        height={32}
                        className="ml-2"
                        priority
                        src={team.team.logo}
                        alt={team.team.name + " Logo"}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center font-bungee text-xl">
                    {team.points}
                  </TableCell>
                </TableRow>
                {index === 2 && !showAll && (
                  <TableRow
                    key={"spacer" + team.team.id}
                    onClick={() => setShowAll(!showAll)}
                  >
                    <TableCell>
                      <div className="flex items-center">
                        <DoubleArrowDownIcon />
                      </div>
                    </TableCell>
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
