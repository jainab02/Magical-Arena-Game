
class Player{
    constructor(name,health,strength,attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }
    attackDamage(diceRoll){
        return this.strength*diceRoll;
    }
    defendingStrength(diceRoll){
        return this.strength*diceRoll;
    }
    damageCreated(){
        return this.attackDamage-this.defendingStrength;
    }
    healthReduced(){
        return this.health-this.damageCreated;
    }
    isPlayerAlive(){
        return this.health>0;
    }
}
export default Player;