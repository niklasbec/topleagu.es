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
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { leagues } from "@/definitions/leagues";
import Image from "next/image";
import { useState } from "react";

const LeagueTable = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const teams = Object.values(leagues[0].teams);
  const filteredTeams = [...teams.slice(0, 3), ...teams.slice(17, 20)];

  return (
    <Card className="bg-green-400 my-3 text-black">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="font-bungee">League Table</CardTitle>
          <Toggle
            onPressedChange={setShowAll}
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
            {(showAll ? teams : filteredTeams).map((team, index) => (
              <TableRow key={team.name}>
                <TableCell>
                  <div className="flex items-center font-semibold text-black">
                    {index + 1}. {team.name}{" "}
                    <Image
                      width={32}
                      height={32}
                      className="ml-2"
                      priority
                      src={team.logo}
                      alt={team.name + " Logo"}
                    />
                  </div>
                </TableCell>
                <TableCell className="flex justify-center font-bungee text-xl">
                  {34 - index}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeagueTable;
