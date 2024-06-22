class Player {
  constructor (name, health, strength, attack) {
    this.name = name
    this.health = health
    this.strength = strength
    this.attack = attack
  }
  // Calculate attack damage based on the dice roll
  attackDamage (diceRoll) {
    return this.attack * diceRoll
  }

  // Calculate defending strength based on the dice roll
  defendingStrength (diceRoll) {
    return this.strength * diceRoll
  }
  
  // Calculate damage inflicted by the attacker
  damageCreated (attackDamage, defendingStrength) {
    return Math.max(0, attackDamage - defendingStrength)
  }

  // Reduce player's health by the specified damage
  reduceHealth (damage) {
    this.health -= damage
  }

  // Check if the player is still alive
  isPlayerAlive () {
    return this.health > 0
  }
}

module.exports = Player
