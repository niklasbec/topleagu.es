import { z } from 'zod';

const playerSchema = z.object({
  id: z.number(),
  name: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  age: z.number(),
  birth: z.object({
    date: z.string(),
    place: z.string(),
    country: z.string(),
  }),
  nationality: z.string(),
  height: z.string(),
  weight: z.string(),
  injured: z.boolean(),
  photo: z.string().url(),
});

const statisticsSchema = z.object({
  team: z.object({
    id: z.number(),
    name: z.string(),
    logo: z.string().url(),
  }),
  league: z.object({
    id: z.number(),
    name: z.string(),
    country: z.string(),
    logo: z.string().url(),
    flag: z.string().url(),
    season: z.number(),
  }),
  games: z.object({
    appearences: z.number().nullable(),
    lineups: z.number().nullable(),
    minutes: z.number().nullable(),
    number: z.number().nullable(),
    position: z.string(),
    rating: z.string().nullable(),
    captain: z.boolean(),
  }),
  substitutes: z.object({
    in: z.number().nullable(),
    out: z.number().nullable(),
    bench: z.number().nullable(),
  }),
  shots: z.object({
    total: z.number().nullable(),
    on: z.number().nullable(),
  }),
  goals: z.object({
    total: z.number().nullable(),
    conceded: z.number().nullable(),
    assists: z.number().nullable(),
    saves: z.number().nullable(),
  }),
  passes: z.object({
    total: z.number().nullable(),
    key: z.number().nullable(),
    accuracy: z.number().nullable(),
  }),
  tackles: z.object({
    total: z.number().nullable(),
    blocks: z.number().nullable(),
    interceptions: z.number().nullable(),
  }),
  duels: z.object({
    total: z.number().nullable(),
    won: z.number().nullable(),
  }),
  dribbles: z.object({
    attempts: z.number().nullable(),
    success: z.number().nullable(),
    past: z.number().nullable(),
  }),
  fouls: z.object({
    drawn: z.number().nullable(),
    committed: z.number().nullable(),
  }),
  cards: z.object({
    yellow: z.number().nullable(),
    yellowred: z.number().nullable(),
    red: z.number().nullable(),
  }),
  penalty: z.object({
    won: z.number().nullable(),
    commited: z.number().nullable(),
    scored: z.number().nullable(),
    missed: z.number().nullable(),
    saved: z.number().nullable(),
  }),
});

const topScorerSchema = z.object({
  player: playerSchema,
  statistics: z.array(statisticsSchema),
});

const standingSchema = z.object({
  rank: z.number(),
  team: z.object({
    id: z.number(),
    name: z.string(),
    logo: z.string().url(),
  }),
  points: z.number(),
  goalsDiff: z.number(),
  group: z.string(),
  form: z.string(),
  status: z.string(),
  description: z.string().nullable(),
  all: z.object({
    played: z.number(),
    win: z.number(),
    draw: z.number(),
    lose: z.number(),
    goals: z.object({
      for: z.number(),
      against: z.number(),
    }),
  }),
  home: z.object({
    played: z.number(),
    win: z.number(),
    draw: z.number(),
    lose: z.number(),
    goals: z.object({
      for: z.number(),
      against: z.number(),
    }),
  }),
  away: z.object({
    played: z.number(),
    win: z.number(),
    draw: z.number(),
    lose: z.number(),
    goals: z.object({
      for: z.number(),
      against: z.number(),
    }),
  }),
  update: z.string(),
});

const fixtureSchema = z.object({
  fixture: z.object({
    id: z.number(),
    referee: z.string(),
    timezone: z.string(),
    date: z.string(),
    timestamp: z.number(),
    periods: z.object({
      first: z.number().nullable(),
      second: z.number().nullable(),
    }),
    venue: z.object({
      id: z.number(),
      name: z.string(),
      city: z.string(),
    }),
    status: z.object({
      long: z.string(),
      short: z.string(),
      elapsed: z.number().nullable(),
      extra: z.number().nullable(),
    }),
  }),
  league: z.object({
    id: z.number(),
    name: z.string(),
    country: z.string(),
    logo: z.string().url(),
    flag: z.string().url(),
    season: z.number(),
    round: z.string(),
  }),
  teams: z.object({
    home: z.object({
      id: z.number(),
      name: z.string(),
      logo: z.string().url(),
      winner: z.boolean().nullable(),
    }),
    away: z.object({
      id: z.number(),
      name: z.string(),
      logo: z.string().url(),
      winner: z.boolean().nullable(),
    }),
  }),
  goals: z.object({
    home: z.number().nullable(),
    away: z.number().nullable(),
  }),
  score: z.object({
    halftime: z.object({
      home: z.number().nullable(),
      away: z.number().nullable(),
    }),
    fulltime: z.object({
      home: z.number().nullable(),
      away: z.number().nullable(),
    }),
    extratime: z.object({
      home: z.number().nullable(),
      away: z.number().nullable(),
    }),
    penalty: z.object({
      home: z.number().nullable(),
      away: z.number().nullable(),
    }),
  }),
});

const leagueSchema = z.object({
  name: z.string(),
  ranking: z.number(),
  teams: z.array(z.unknown()), // Adjust if specific team structure is needed
  top_scorers: z.array(topScorerSchema),
  league_id: z.number(),
  standings: z.array(z.array(standingSchema)),
  fixtures: z.array(fixtureSchema),
});

export const leaguesResponseSchema = z.object({
  leagues: z.array(leagueSchema),
});

export type LeagueType = z.infer<typeof leagueSchema>;
export type TopScorerType = z.infer<typeof topScorerSchema>;
export type StandingType = z.infer<typeof standingSchema>;
export type FixtureType = z.infer<typeof fixtureSchema>;
