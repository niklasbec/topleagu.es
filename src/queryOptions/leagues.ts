import { queryOptions } from "@tanstack/react-query";
import { fetchLeagues } from "@/dataFetching/leagues";

export function createLeaguesQueryOptions() {
    return queryOptions({queryKey: ['leagues'], queryFn: fetchLeagues})
}