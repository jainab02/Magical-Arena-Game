class Dice {
    constructor(numSides) {
      this.numSides = numSides;
    }
    roll() {
      return Math.floor(Math.random() * this.numSides) + 1;
    }
  }
  
module.exports = Dice;
  