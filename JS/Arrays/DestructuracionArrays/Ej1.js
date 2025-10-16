const players = [
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
];

const [players1, players2] = players1;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;

const allPlayers = players.flat();

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
