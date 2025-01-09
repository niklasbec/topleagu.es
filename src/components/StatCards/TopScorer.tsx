import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
const TopScorer = () => {
  const players = [
    { name: "L. Messi", goals: 41 },
    { name: "C. Ronaldo", goals: 34 },
    { name: "R. Lewandowski", goals: 22 },
    { name: "T. Kubo", goals: 18 },
    { name: "J. Musiala", goals: 14 },
  ];

  return (
    <Card className="bg-pink-300 my-3 font-inter font-bold">
      <CardHeader>
        <div className="flex flex-row justify-between items-start">
          <div>
            <CardTitle className="font-bungee">Topscorer</CardTitle>
            <CardDescription className="text-black">
              Player with the most goals
            </CardDescription>
          </div>
          <Tabs defaultValue="goals">
            <TabsList className="bg-black text-white">
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="assists">Assists</TabsTrigger>
              <TabsTrigger value="total">Total</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between py-0 items-center">
        <Table>
          <TableBody>
            {players.map((player, index) => (
              <TableRow key={player.name}>
                <TableCell className="font-semibold">
                  <div className="flex items-center">
                    {index + 1}. {player.name}{" "}
                  </div>
                </TableCell>
                <TableCell className="flex justify-center font-bungee text-xl">
                  {player.goals}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Image
          src="/images/players/messi.png"
          alt=""
          height={300}
          width={300}
        />
      </CardContent>
    </Card>
  );
};

export default TopScorer;
