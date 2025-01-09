import { Fixture } from "@/types/fixtures";
import React from "react";
import Image from "next/image";
import { leagues } from "@/definitions/leagues";

interface FixtureCardProps extends Fixture {
  className: string;
}

const FixtureCard = ({ home, away, className }: FixtureCardProps) => {
  const homeTeam = leagues[0].teams[home.teamId];
  const awayTeam = leagues[0].teams[away.teamId];

  const matchCompleted = true;
  return (
    <div
      className={
        className + " flex justify-between max-h-8 items-center relative"
      }
    >
      <div
        className={`w-1/2 ${homeTeam.color} rounded-l-full flex items-center`}
      >
        <Image src={homeTeam.logo} width={40} height={40} alt={homeTeam.name} />
        <p className="ml-2 font-inter font-extrabold tracking-wide text-white">
          {homeTeam.name.toUpperCase()}
        </p>
      </div>
      <div
        className={`w-1/2 flex justify-end ${awayTeam.color} rounded-r-full items-center`}
      >
        <p className="mr-2 font-inter font-extrabold tracking-wide text-white">
          {awayTeam.name.toUpperCase()}
        </p>
        <Image src={awayTeam.logo} width={40} height={40} alt={awayTeam.name} />
      </div>
      <div className="absolute left-0 right-0 ms-auto me-auto w-16 bg-white flex justify-center h-12 items-center rounded-lg">
        {matchCompleted ? (
          <p className="font-inter font-extrabold text-lg">TBD</p>
        ) : (
          <p className="font-inter font-extrabold text-lg tracking-widest">
            2:1
          </p>
        )}
      </div>
    </div>
  );
};

export default FixtureCard;
