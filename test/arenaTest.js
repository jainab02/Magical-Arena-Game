const Player=require('../src/player')
const Arena=  require('../src/arena')
const Dice = require('../src/dice')

describe('Arena', function () {
  it('should declare a winner', function () {
    const playerA = new Player('Player A', 50, 5, 10)
    const playerB = new Player('Player B', 50, 5, 10)

    const arena = new Arena()
    arena.battleFight(playerA, playerB)

    const isAWinner = playerA.isPlayerAlive() && !playerB.isPlayerAlive()
    const isBWinner = playerB.isPlayerAlive() && !playerA.isPlayerAlive()
    console.assert(
      isAWinner || isBWinner,
      'Expected one player to be alive and the other to be dead'
    )
  })

  it('should perform turns correctly', function () {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 50, 5, 10);

    const arena = new Arena();
    const dice = new Dice()
    arena.performTurn(playerA, playerB,dice); 

    console.assert(
      playerB.health < 50,
      "Expected player B's health to be below 50"
    );
  });
})
