import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Table, TableRow, TableBody, TableCell } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TopScorerType } from '@/types/apiSchemas/getLeagues';

interface TopScorerProps {
  top_scorers: TopScorerType[];
  className?: string;
}

const TopScorer = ({ top_scorers, className }: TopScorerProps) => {
  const [scorerType, setScorerType] = useState<keyof typeof sortedPlayers>('goals');
  const [imageError, setImageError] = useState<boolean>(false);

  const top5 = top_scorers.slice(0, 5);
  const sortedPlayers = useMemo(() => {
    return {
      total: [...top5].sort(
        (a, b) =>
          (b.statistics[0].goals.total || 0) +
          (b.statistics[0].goals.assists || 0) -
          ((a.statistics[0].goals.total || 0) + (a.statistics[0].goals.assists || 0))
      ),
      assists: [...top5].sort((a, b) => (b.statistics[0].goals.assists || 0) - (a.statistics[0].goals.assists || 0)),
      goals: top5,
    };
  }, [top5]);

  useEffect(() => {
    setImageError(false);
  }, [scorerType]);

  const subtitleLabel = scorerType === 'total' ? 'goals & assists' : scorerType;

  return (
    <Card className={'bg-pink-300 my-3 font-inter font-bold h-fit ' + className}>
      <CardHeader>
        <div className="flex flex-col xs:flex-row justify-between items-start">
          <div>
            <CardTitle className="font-bungee">Topscorer</CardTitle>
            <CardDescription className="text-black">Player with the most {subtitleLabel}</CardDescription>
          </div>
          <Tabs className="mt-3 xs:mt-0" defaultValue="goals" onValueChange={(val) => setScorerType(val as keyof typeof sortedPlayers)}>
            <TabsList className="bg-black text-white">
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="assists">Assists</TabsTrigger>
              <TabsTrigger value="total">Total</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between py-0 items-end">
        <Table>
          <TableBody>
            {sortedPlayers[scorerType].map((player, index) => (
              <TableRow key={player.player.name}>
                <TableCell className="font-semibold">
                  <div className="flex items-center">
                    {index + 1}. {player.player.name}{' '}
                  </div>
                </TableCell>
                <TableCell className="flex justify-center font-bungee text-xl">
                  {scorerType === 'goals'
                    ? player.statistics[0].goals.total
                    : scorerType === 'assists'
                    ? player.statistics[0].goals.assists
                    : (player.statistics[0].goals.total || 0) + (player.statistics[0].goals.assists || 0)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {!imageError && (
          <Image
            className="hidden sm:block bottom-0 max-h-[300px]"
            src={`/images/players/${sortedPlayers[scorerType][0].player.lastname}.png`}
            onError={() => setImageError(true)}
            alt=""
            height={200}
            width={200}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TopScorer;
