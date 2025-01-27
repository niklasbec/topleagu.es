import React from 'react';
import { DateTime } from 'luxon';

interface ScoreProps {
  home?: number | null;
  away?: number | null;
  kickoff: string;
  status: 'live' | 'completed' | 'tbd' | string;
}

function formatTimestamp(input: string, format: 'time' | 'day'): string {
  // Parse the input timestamp with Luxon
  const date = DateTime.fromISO(input, { zone: 'default' });

  // Format the output
  if (format === 'time') {
    return date.toFormat('HH:mm');
  }
  return date.toFormat('dd.MM');
}

const Score = ({ status, home, away, kickoff }: ScoreProps) => {
  const containerClassNames = 'mt-2 ms-auto me-auto flex justify-center h-[50px] w-16 md:w-20 items-center';
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
        <div>
          {home === null || away === null ? (
            <>
              <p className="text-lg font-semibold text-center tracking-normal leading-5">{formatTimestamp(kickoff, 'day')}</p>
              <p className="text-lg font-semibold text-center tracking-normal leading-5">{formatTimestamp(kickoff, 'time')}</p>
            </>
          ) : (
            <span>
              {home}:{away}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Score;
