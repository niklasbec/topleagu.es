import React from 'react';
import { DateTime } from 'luxon';

interface ScoreProps {
  home?: number | null;
  away?: number | null;
  kickoff: string;
  status: 'live' | 'completed' | 'tbd' | string;
}

function formatTimestamp(input: string): string {
  // Parse the input timestamp with Luxon
  const date = DateTime.fromISO(input, { zone: 'default' });

  // Format the output
  return date.toFormat('dd.MM HH:mm');
}

const Score = ({ status, home, away, kickoff }: ScoreProps) => {
  const containerClassNames =
    'absolute left-0 right-0 ms-auto me-auto bg-zinc-100 shadow-lg flex justify-center h-[50px] w-16 md:w-20 items-center';
  return (
    <div className={containerClassNames}>
      {status === 'tbd' ? (
        <p className="font-inter font-extrabold text-lg">TBD</p>
      ) : status === 'live' ? (
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
            <span className="text-md font-semibold text-center tracking-normal leading-5">{formatTimestamp(kickoff)}</span>
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
