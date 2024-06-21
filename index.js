const Player = require('./src/player').default;
const Dice = require('./src/dice');
const Arena = require('./src/arena');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const dice = new Dice();
const arena = new Arena();
arena.fight(playerA,playerB)
