const Dice = require('../src/dice');

describe('Dice', function () {
  it('should roll die between 1 and 6', function () {
    const dice = new Dice();
    for (let i = 0; i < 100; i++) {
      const roll = dice.roll();
      console.assert(roll >= 1 && roll <= 6, `Expected roll to be between 1 and 6, got ${roll}`);
    }
  });
});
