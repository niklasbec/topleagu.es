import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FixtureCard from '@/components/Fixtures/FixtureCard';
import { FixtureType } from '@/types/apiSchemas/getLeagues';

interface FixturesProps {
  fixtures: FixtureType[];
}

const Fixtures = ({ fixtures }: FixturesProps) => {
  return (
    <Card className="bg-cover bg-[#2284c5] my-3 font-inter font-bold text-zinc-950">
      <CardHeader>
        <CardTitle className="font-bungee">Fixtures</CardTitle>
      </CardHeader>
      <CardContent className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
        {fixtures.map((fixture) => {
          return <FixtureCard className="my-3" fixture={fixture} key={fixture.teams.home.id + ' vs ' + fixture.teams.away.id} />;
        })}
      </CardContent>
    </Card>
  );
};

export default Fixtures;
