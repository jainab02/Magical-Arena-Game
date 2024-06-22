const Dice = require('./dice')
class Arena {
  // method- battle ground for Playing the game
  battleFight (playerA, playerB) {
    const dice = new Dice()
    // this loop will run until the one of the player dies (health=0)
    while (playerA.isPlayerAlive() && playerB.isPlayerAlive()) {
      // rolls the dice and takes the turn
      this.performTurn(playerA, playerB, dice)
      if (playerB.isPlayerAlive()) {
        // if the 2nd player survived the attack then rolled the dice again
        // this continues the game
        this.performTurn(playerB, playerA, dice)
      }
    }
    // decide the winner
    const winner = playerA.isPlayerAlive() ? playerA : playerB
    // declares the winner
    console.log(`${winner.name} wins the match!`)
  }
  // method for rolling the dice and calculating the health reduced and damage caused
  performTurn (attacker, defender, dice) {
    // rolling the dice for both the players
    const attackDiceRoll = dice.roll()
    const defendDiceRoll = dice.roll()
    // calculating the damage done , how much defender defends and health reduced
    const attackDamage = attacker.attackDamage(attackDiceRoll)
    const defendingStrength = defender.defendingStrength(defendDiceRoll)
    const damage = attacker.damageCreated(attackDamage, defendingStrength)
    defender.reduceHealth(damage)
    // printing the logs of the game
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
