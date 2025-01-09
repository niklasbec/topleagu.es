import {
  arsenal,
  astonVilla,
  bournemouth,
  ipswichTown,
  brentford,
  brighton,
  chelsea,
  crystalPalace,
  everton,
  fulham,
  leicester,
  liverpool,
  manCity,
  manUnited,
  newcastle,
  nottingham,
  southampton,
  tottenham,
  westHam,
  wolverHampton,
} from "../../../public/logos/premier-league";

export const leagues = [
  {
    name: "Premier League",
    logoPath: "/logos/premier-league.svg",
    teams: {
      arsenal: { name: "Arsenal", logo: arsenal, color: "bg-red-600" },
      astonVilla: {
        name: "Aston Villa",
        logo: astonVilla,
        color: "bg-blue-300",
      },
      bourneMouth: {
        name: "Bournemouth",
        logo: bournemouth,
        color: "bg-red-600",
      },
      ipswichTown: {
        name: "Ipswich Town",
        logo: ipswichTown,
        color: "bg-blue-600",
      },
      brentford: { name: "Brentford", logo: brentford, color: "bg-red-600" },
      brighton: {
        name: "Brighton",
        logo: brighton,
        color: "bg-blue-600",
      },
      chelsea: { name: "Chelsea", logo: chelsea, color: "bg-blue-700" },
      crystalPalace: {
        name: "Crystal Palace",
        logo: crystalPalace,
        color: "bg-blue-600",
      },
      everton: { name: "Everton", logo: everton, color: "bg-blue-600" },
      fulham: { name: "Fulham", logo: fulham, color: "bg-black" },
      leicester: {
        name: "Leicester City",
        logo: leicester,
        color: "bg-blue-600",
      },
      liverpool: { name: "Liverpool", logo: liverpool, color: "bg-red-600" },
      manCity: {
        name: "Manchester City",
        logo: manCity,
        color: "bg-sky-400",
      },
      manUnited: {
        name: "Manchester United",
        logo: manUnited,
        color: "bg-red-600",
      },
      newcastle: {
        name: "Newcastle United",
        logo: newcastle,
        color: "bg-black",
      },
      nottingham: {
        name: "Nottingham Forest",
        logo: nottingham,
        color: "bg-red-600",
      },
      southampton: {
        name: "Southampton",
        logo: southampton,
        color: "bg-red-600",
      },
      tottenham: {
        name: "Tottenham Hotspur",
        logo: tottenham,
        color: "bg-navy-900",
      },
      westHam: {
        name: "West Ham United",
        logo: westHam,
        color: "bg-rose-500",
      },
      wolverHampton: {
        name: "Wolverhampton",
        logo: wolverHampton,
        color: "bg-yellow-500",
      },
    },
  },
  { name: "La Liga", logoPath: "/logos/laliga.png", teams: {} },
  {
    name: "Bundesliga",
    logoPath: "/logos/bundesliga.png",
    teams: {},
  },
  { name: "Serie A", logoPath: "/logos/seriea.png", teams: {} },
  { name: "Ligue 1", logoPath: "/logos/ligue1.jpeg", teams: {} },
]

// export const leagues = new Map([
//   [
//     "premierLeague",
//     {
//       name: "Premier League",
//       logoPath: "/logos/premier-league.svg",
//       teams: new Map([
//         ["arsenal", { name: "Arsenal FC", logo: arsenal, color: "bg-red-600" }],
//         [
//           "astonVilla",
//           { name: "Aston Villa FC", logo: astonVilla, color: "bg-rose-500" },
//         ],
//         [
//           "bourneMouth",
//           { name: "AFC Bournemouth", logo: bournemouth, color: "bg-red-600" },
//         ],
//         [
//           "ipswichTown",
//           { name: "Ipswich Town FC", logo: ipswichTown, color: "bg-blue-600" },
//         ],
//         [
//           "brentford",
//           { name: "Brentford FC", logo: brentford, color: "bg-red-600" },
//         ],
//         [
//           "brighton",
//           {
//             name: "Brighton & Hove Albion FC",
//             logo: brighton,
//             color: "bg-blue-600",
//           },
//         ],
//         ["chelsea", { name: "Chelsea FC", logo: chelsea, color: "bg-blue-700" }],
//         [
//           "crystalPalace",
//           { name: "Crystal Palace FC", logo: crystalPalace, color: "bg-blue-600" },
//         ],
//         ["everton", { name: "Everton FC", logo: everton, color: "bg-blue-600" }],
//         ["fulham", { name: "Fulham FC", logo: fulham, color: "bg-black" }],
//         [
//           "leicester",
//           { name: "Leicester City FC", logo: leicester, color: "bg-blue-600" },
//         ],
//         [
//           "liverpool",
//           { name: "Liverpool FC", logo: liverpool, color: "bg-red-600" },
//         ],
//         [
//           "manCity",
//           { name: "Manchester City FC", logo: manCity, color: "bg-sky-400" },
//         ],
//         [
//           "manUnited",
//           { name: "Manchester United FC", logo: manUnited, color: "bg-red-600" },
//         ],
//         [
//           "newcastle",
//           { name: "Newcastle United FC", logo: newcastle, color: "bg-black" },
//         ],
//         [
//           "nottingham",
//           { name: "Nottingham Forest FC", logo: nottingham, color: "bg-red-600" },
//         ],
//         [
//           "southampton",
//           { name: "Southampton FC", logo: southampton, color: "bg-red-600" },
//         ],
//         [
//           "tottenham",
//           { name: "Tottenham Hotspur FC", logo: tottenham, color: "bg-navy-900" },
//         ],
//         [
//           "westHam",
//           { name: "West Ham United FC", logo: westHam, color: "bg-rose-500" },
//         ],
//         [
//           "wolverHampton",
//           {
//             name: "Wolverhampton Wanderers FC",
//             logo: wolverHampton,
//             color: "bg-yellow-500",
//           },
//         ],
//       ]),
//     },
//   ],
//   [
//     "laLiga",
//     { name: "La Liga", logoPath: "/logos/laliga.png", teams: new Map() },
//   ],
//   [
//     "bundesliga",
//     { name: "Bundesliga", logoPath: "/logos/bundesliga.png", teams: new Map() },
//   ],
//   [
//     "serieA",
//     { name: "Serie A", logoPath: "/logos/seriea.png", teams: new Map() },
//   ],
//   [
//     "ligue1",
//     { name: "Ligue 1", logoPath: "/logos/ligue1.jpeg", teams: new Map() },
//   ],
// ]);
