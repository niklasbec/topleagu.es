import { LeaguesResponseType } from "@/types/apiSchemas/getLeagues";

export const fetchLeagues = async (): Promise<LeaguesResponseType> => {
  const res = await fetch('https://render-topleagues.onrender.com/leagues');
  return res.json();
};
