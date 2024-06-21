class Player{
    constructor(name,health,strength,attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }
    attackDamage(diceRoll){
        return this.attack*diceRoll;
    }
    defendingStrength(diceRoll){
        return this.strength*diceRoll;
    }
    damageCreated(attackDamage, defendingStrength) {
        return Math.max(0, attackDamage - defendingStrength);
    }

    reduceHealth(damage) {
        this.health -= damage;
    }
    isPlayerAlive(){
        return this.health>0;
    }
}
module.exports = Player;