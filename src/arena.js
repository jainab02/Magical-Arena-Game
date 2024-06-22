const Dice = require('./dice')
class Arena {
  // method- battle ground for Playing the game
  battleFight (playerA, playerB) {
    const dice = new Dice()
    while (playerA.isPlayerAlive() && playerB.isPlayerAlive()) {
      this.performTurn(playerA, playerB, dice)
      if (playerB.isPlayerAlive()) {
        this.performTurn(playerB, playerA, dice)
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
