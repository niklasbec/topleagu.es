import React from "react";

interface ScoreProps {
  home?: number | null;
  away?: number | null;
  kickoff: string;
  status: "live" | "completed" | "tbd";
}

function formatTimestamp(input: string): string {
  // Parse the input timestamp
  const date = new Date(input);

  // Extract relevant parts of the date
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  // Format the output
  return `${day}.${month} ${hours}:${minutes}`;
}

const Score = ({ status, home, away, kickoff }: ScoreProps) => {
  return (
    <div className="absolute left-0 right-0 ms-auto me-auto w-20 bg-zinc-100 shadow-lg flex justify-center h-[50px] items-center">
      {status === "tbd" ? (
        <p className="font-inter font-extrabold text-lg">TBD</p>
      ) : status === "live" ? (
        <>
          <p className="font-inter font-extrabold text-lg tracking-widest text-red-600">
            {home}:{away}
          </p>
          <span className="absolute flex h-3 w-3 -right-1.5 -top-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </>
      ) : (
        <p className="font-inter font-extrabold text-lg tracking-widest flex justify-center">
          {home === null || away === null ? (
            <span className="text-md font-semibold text-center tracking-normal leading-5">
              {formatTimestamp(kickoff)}
            </span>
          ) : (
            <span>
              {home}:{away}
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default Score;
