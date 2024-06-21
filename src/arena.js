const Dice = require('./dice')
class Arena {
  constructor (dice) {
    this.dice = dice
  }
  fight (playerA, playerB) {
    const dice = new Dice()
    while (playerA.isPlayerAlive() && playerB.isPlayerAlive()) {
      this.performTurn(playerA, playerB, dice)
      if (playerB.isPlayerAlive()) {
        this.performTurn(playerB, playerA, dice)
      }
    }
    const winner = playerA.isPlayerAlive() ? playerA : playerB
    console.log(`${winner.name} wins the match!`)
  }
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
      `${defender.name} takes ${damage} damage, health is now ${defender.health}`
    )
  }
}
module.exports = Arena
