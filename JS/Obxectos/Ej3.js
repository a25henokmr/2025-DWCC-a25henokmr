'use strict';

const game = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};

const jugadores = function goles(game) {
  for (const jugador of game.scored) {
    let gol = game.scored.indexOf(jugador) + 1;
    console.log('Gol ' + gol + ': ' + game.scored.at(gol - 1));
  }
};

let scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
