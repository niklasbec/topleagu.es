import React from "react";
import TopScorer from "@/components/StatCards/TopScorer";
import Table from "@/components/StatCards/Table";
import Fixtures from "../StatCards/Fixtures";
import { LeagueType } from "@/types/apiSchemas/getLeagues";

const League = ({ name, top_scorers, standings, fixtures }: LeagueType) => {
  return (
    <div className="h-full overflow-hidden">
      <h1 className="text-5xl font-bold font-bungee select-none mb-4">
        {name}
      </h1>
      <TopScorer top_scorers={top_scorers} />
      <Table standings={standings} league={name} />
      <Fixtures fixtures={fixtures} />
    </div>
  );
};

export default League;
