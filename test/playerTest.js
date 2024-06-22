const Player=require('../src/player')
const Dice = require('../src/dice')
describe('Player', function () {
  it('should initialize correctly', function () {
    const player = new Player('Test Player', 100, 10, 5)
    console.assert(
      player.name === 'Test Player',
      'Name should be "Test Player"'
    )
    console.assert(player.health === 100, 'Health should be 100')
    console.assert(player.strength === 10, 'Strength should be 10')
    console.assert(player.attack === 5, 'Attack should be 5')
  })

  it('should return alive status correctly', function () {
    const player = new Player('Test Player', 0, 10, 5)
    console.assert(!player.isPlayerAlive(), 'Player should not be alive')

    player.health = 10
    console.assert(player.isPlayerAlive(), 'Player should be alive')
  })

  it('should roll die between 1 and 6', function () {
    const player = new Player('Test Player', 100, 10, 5);
    const dice = new Dice(); 
    const roll = dice.roll(); 
    console.assert(
      roll >= 1 && roll <= 6,
      `Expected roll to be between 1 and 6, got ${roll}`
    );
  });

  it('should calculate attack damage correctly', function () {
    const player = new Player('Test Player', 100, 10, 5)
    const attackRoll = 4
    console.assert(
      player.attackDamage(attackRoll) === 20,
      'Attack damage should be 20'
    )
  })

  it('should calculate defending strength correctly', function () {
    const player = new Player('Test Player', 100, 10, 5)
    const defendRoll = 3
    console.assert(
      player.defendingStrength(defendRoll) === 30,
      'Defending strength should be 30'
    )
  })

  it('should calculate damage created correctly', function () {
    const player = new Player('Test Player', 100, 10, 5)
    const attackDamage = 50
    const defendingStrength = 30
    console.assert(
      player.damageCreated(attackDamage, defendingStrength) === 20,
      'Damage created should be 20'
    )
  })

  it('should reduce health correctly', function () {
    const player = new Player('Test Player', 100, 10, 5)
    player.reduceHealth(30)
    console.assert(player.health === 70, 'Health should be reduced to 70')
  })
})
