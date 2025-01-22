"use client";
import { DotIcon, DotFilledIcon, GearIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <div className="absolute right-0">
        <Drawer>
          <DrawerTrigger>
            <GearIcon width={22} height={22} />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Settings</DrawerTitle>
              <DrawerDescription>
                Select the timeframe you want to see stats for
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center">
                In Progress
                {/* <Tabs defaultValue="gameday" className="w-[400px]">
                  <TabsList className="bg-black text-white">
                    <TabsTrigger value="gameday">Gameday</TabsTrigger>
                    <TabsTrigger value="last4">Last 4 Gamedays</TabsTrigger>
                    <TabsTrigger value="half">Season Half</TabsTrigger>
                    <TabsTrigger value="season">Season</TabsTrigger>
                  </TabsList>
                </Tabs> */}
              </div>
              {/* <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
