'use strict';
console.log('Johnson');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
    ['johnson', 'hello'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }

const rest = new Map();
rest.set('name', 'Italiano');
console.log(rest.set(2, 'parmesan'));
