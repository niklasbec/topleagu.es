export interface Fixture {
  home: FixtureTeamInfo;
  away: FixtureTeamInfo;
}

export interface FixtureTeamInfo {
  teamId: string;
  leagueId: string;
}
