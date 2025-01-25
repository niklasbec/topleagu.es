import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FixtureCard from '@/components/Fixtures/FixtureCard';
import { FixtureType } from '@/types/apiSchemas/getLeagues';

interface FixturesProps {
  fixtures: FixtureType[];
}

const Fixtures = ({ fixtures }: FixturesProps) => {
  return (
    <Card className="bg-cover bg-amber-300 my-3 font-inter font-bold text-zinc-950">
      <CardHeader>
        <CardTitle className="font-bungee">Fixtures</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        {fixtures.map((fixture) => {
          return <FixtureCard className="w-full my-3" fixture={fixture} key={fixture.teams.home.id + ' vs ' + fixture.teams.away.id} />;
        })}
      </CardContent>
    </Card>
  );
};

export default Fixtures;
