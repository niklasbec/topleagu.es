import { OddsResponseType } from "@/types/apiSchemas/getOdds";

export const fetchOdds = async (leagueKey: string): Promise<OddsResponseType> => {
  const res = await fetch(`https://render-topleagues.onrender.com/odds?league_key=${leagueKey}`);
  return await res.json();
};
