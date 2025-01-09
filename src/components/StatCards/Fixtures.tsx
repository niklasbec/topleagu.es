import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FixtureCard from "@/components/Fixtures/FixtureCard";

const Fixtures = () => {
  const fixtures = [
    {
      home: { teamId: "arsenal", leagueId: "premierLeague" },
      away: { teamId: "astonVilla", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "astonVilla", leagueId: "premierLeague" },
      away: { teamId: "bourneMouth", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "bourneMouth", leagueId: "premierLeague" },
      away: { teamId: "ipswichTown", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "ipswichTown", leagueId: "premierLeague" },
      away: { teamId: "brentford", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "brentford", leagueId: "premierLeague" },
      away: { teamId: "brighton", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "brighton", leagueId: "premierLeague" },
      away: { teamId: "chelsea", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "crystalPalace", leagueId: "premierLeague" },
      away: { teamId: "everton", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "fulham", leagueId: "premierLeague" },
      away: { teamId: "leicester", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "liverpool", leagueId: "premierLeague" },
      away: { teamId: "manCity", leagueId: "premierLeague" },
    },
    {
      home: { teamId: "manUnited", leagueId: "premierLeague" },
      away: { teamId: "newcastle", leagueId: "premierLeague" },
    },
  ];

  return (
    <Card className="bg-amber-300 my-3 font-inter font-bold">
      <CardHeader>
        <CardTitle className="font-bungee">Fixtures</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        {fixtures.map((fixture) => {
          return (
            <FixtureCard
              className="w-full my-3"
              {...fixture}
              key={fixture.home.teamId + " vs " + fixture.away.teamId}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Fixtures;
