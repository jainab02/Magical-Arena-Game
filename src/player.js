class Player {
  // constructor for Player class
  constructor (name, health, strength, attack) {
    this.name = name
    this.health = health
    this.strength = strength
    this.attack = attack
  }
  // method for Calculating attack damage based on the dice roll
  attackDamage (diceRoll) {
    return this.attack * diceRoll
  }
  // method for Calculating defending strength based on the dice roll
  defendingStrength (diceRoll) {
    return this.strength * diceRoll
  }
  // method for Calculating damage created by the attacker during the attack
  damageCreated (attackDamage, defendingStrength) {
    return Math.max(0, attackDamage - defendingStrength)
  }
  // method for Calculating health decreased of defender
  reduceHealth (damage) {
    this.health -= damage
  }
  // method for checking if the player survived the attack or not
  // if it returned false then game will end
  isPlayerAlive () {
    return this.health > 0
  }
}
module.exports = Player
