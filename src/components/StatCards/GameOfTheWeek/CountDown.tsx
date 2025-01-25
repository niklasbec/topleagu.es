import React from 'react';
import Countdown from 'react-countdown';

interface CountDownProps {
  date: string;
  className?: string;
}

const CountDown = ({ date, className }: CountDownProps) => {
  return (
    <div className={className}>
      <Countdown date={date} />
    </div>
  );
};

export default CountDown;
