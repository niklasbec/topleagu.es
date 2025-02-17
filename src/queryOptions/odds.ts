import { queryOptions } from "@tanstack/react-query";
import { fetchOdds } from "@/dataFetching/odds";

export function createOddsQueryOptions(leagueKey: string) {
    return queryOptions({queryKey: ['odds-' + leagueKey], queryFn: () => fetchOdds(leagueKey)})
}