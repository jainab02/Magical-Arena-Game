const Dice = require('./dice')
class Arena {
  // method- battle ground for Playing the game
  battleFight (playerA, playerB) {
    // Determine which player attacks first based on health
    console.log("Welcome to the Battefield...")
    const dice = new Dice()
    const attacker = playerA.health < playerB.health ? playerA : playerB;
    const defender = attacker === playerA ? playerB : playerA;
    console.log(`${attacker.name}, Starts the Game`)

    while (attacker.isPlayerAlive() && defender.isPlayerAlive()) {
      this.performTurn(attacker, defender, dice)
      if (defender.isPlayerAlive()) {
        this.performTurn(attacker, defender, dice)
      }
    }
  }

  // method for rolling the dice and calculating the health reduced and damage caused
  performTurn (attacker, defender, dice) {
    const attackDiceRoll = dice.roll()
    const defendDiceRoll = dice.roll()

    const attackDamage = attacker.attackDamage(attackDiceRoll)
    const defendingStrength = defender.defendingStrength(defendDiceRoll)
    const damage = attacker.damageCreated(attackDamage, defendingStrength)
    defender.reduceHealth(damage)

    console.log(
      `${attacker.name} rolls ${attackDiceRoll} dice, ${defender.name} rolls ${defendDiceRoll} dice`
    )
    console.log(
      `${attacker.name} attacks with ${attackDamage}, ${defender.name} defends with ${defendingStrength}`
    )
    console.log(
      `${defender.name} takes ${damage} damage, health is now ${
        defender.health > 0 ? defender.health : 0
      }`
    )
  }
}
module.exports = Arena
