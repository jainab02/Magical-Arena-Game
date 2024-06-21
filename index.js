const Player = require('./src/player');
const Dice = require('./src/dice');
const Arena = require('./src/arena');

const playerA = new Player('Player A', 50, 10, 10);
const playerB = new Player('Player B', 50, 10, 10);

const dice = new Dice();
const arena = new Arena();
arena.fight(playerA,playerB)
