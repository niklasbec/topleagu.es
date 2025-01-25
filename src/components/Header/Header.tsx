"use client";
import { DotIcon, DotFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface HeaderProps {
  currentIndex: number;
  maxIndex: number;
  league?: {
    name: string;
    logoPath: string;
    teams: unknown;
  };
}

const Header = ({ currentIndex, maxIndex, league }: HeaderProps) => {
  if (!league) return;

  return (
    <div className="flex relative justify-center items-center my-4 h-11 select-none">
      <Image
        className="absolute left-0"
        key={league.name}
        src={`/logos/${league.name}.svg`}
        alt={league.name}
        width={40}
        height={40}
      />
      <div className="flex">
        {Array.from({ length: maxIndex }, (_, i) => i + 1).map((_, index) => {
          return index === currentIndex ? (
            <DotFilledIcon
              key="dotfilled"
              className="-mr-3"
              width={22}
              height={22}
            />
          ) : (
            <DotIcon
              key={"dot" + index}
              className="-mr-3"
              width={22}
              height={22}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
