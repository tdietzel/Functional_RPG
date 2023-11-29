import { levelCalc } from "../src/js/levelingSystem.js"

describe(levelCalc, () => {

  test("should return the player's level (up to level 3) based on number of points entered", () => {
    expect(levelCalc(9)).toEqual(1);
    expect(levelCalc(10)).toEqual(2);
    expect(levelCalc(20)).toEqual(3);
  });
})

// leveling system turns points into levels

// Points get added after each win
// Points earned is equivalent to enemy's xp property
// if you lose, nothing happens
// 
