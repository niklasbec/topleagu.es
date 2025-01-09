import React from "react";
import TopScorer from "@/components/StatCards/TopScorer";
import Table from "@/components/StatCards/Table";
import Fixtures from "../StatCards/Fixtures";

interface LeagueProps {
  name: string;
}

const League = ({ name }: LeagueProps) => {
  return (
    <div className="h-full overflow-hidden">
      <h1 className="text-5xl font-bold font-bungee select-none mb-4">
        {name}
      </h1>
      <TopScorer />
      <Table />
      <Fixtures />
    </div>
  );
};

export default League;
