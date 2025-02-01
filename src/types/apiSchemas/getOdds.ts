import { z } from 'zod';

export const outcomeSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export const marketSchema = z.object({
  key: z.string(),
  last_update: z.string(),
  outcomes: z.array(outcomeSchema),
});

export const bookmakerSchema = z.object({
  key: z.string(),
  title: z.string(),
  last_update: z.string(),
  markets: z.array(marketSchema),
});

export const oddSchema = z.object({
  id: z.string(),
  sport_key: z.string(),
  sport_title: z.string(),
  commence_time: z.string(),
  home_team: z.string(),
  away_team: z.string(),
  bookmakers: z.array(bookmakerSchema),
});

export const getOddsResponseSchema = z.object({
  odds: z.array(oddSchema),
});

export type OddsResponseType = z.infer<typeof getOddsResponseSchema>;
export type OddsType = z.infer<typeof oddSchema>;
export type OutcomeType = z.infer<typeof outcomeSchema>;
