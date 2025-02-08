import React from 'react';
import { ChevronDown } from 'lucide-react';

interface TableStandingIconProps {
  description: string;
}

const TableStandingIcon = ({ description }: TableStandingIconProps) => {
  const selectIcon = (desc: string): React.ReactElement | undefined => {
    desc = desc.includes('Champions League') ? 'Champions League' : desc;
    desc = desc.includes('Europa League') ? 'Europa League' : desc;
    desc = desc.includes('Conference League') ? 'Conference League' : desc;

    switch (desc) {
      case 'Bundesliga (Relegation)':
        return <ChevronDown className="ml-2 text-yellow-300" />;
      case 'Relegation Playoffs':
        return <ChevronDown className="ml-2 text-yellow-300" />;
      case 'Relegation':
        return <ChevronDown className="ml-2 text-red-600" />;
      case 'Relegation - 2. Bundesliga':
        return <ChevronDown className="ml-2 text-red-600" />;
      case 'Relegation - Serie B':
        return <ChevronDown className="ml-2 text-red-600" />;
      case 'Champions League':
        return (
          <img
            className="ml-2"
            src={`https://ld49syfljdcz1lbe.public.blob.vercel-storage.com/ChampionsLeague.svg`}
            width={20}
            height={20}
            alt="champions league logo"
          />
        );
      case 'Europa League':
        return (
          <img
            className="ml-2"
            src={`https://ld49syfljdcz1lbe.public.blob.vercel-storage.com/EuropaLeague.png`}
            width={20}
            height={20}
            alt="europa league logo"
          />
        );
      case 'Conference League':
        return (
          <img
            className="ml-2"
            src={`https://ld49syfljdcz1lbe.public.blob.vercel-storage.com/ConferenceLeague.png`}
            width={20}
            height={20}
            alt="conference league logo"
          />
        );
      default:
        break;
    }
  };

  return selectIcon(description);
};

export default TableStandingIcon;
