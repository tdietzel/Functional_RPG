import { levelCalc } from "../src/js/levelingSystem.js"

describe(levelCalc, () => {

  test("should return the player's level (up to level 3) based on number of points entered", () => {
    expect(levelCalc(9)).toEqual(1);
    expect(levelCalc(10)).toEqual(2);
    expect(levelCalc(20)).toEqual(3);
  });
})


describe(levelPerks, () => {

  const sampleCharacter = {
    name: "bob",
    health: 10,
    strength: 8,
    intelligence: 2
  }

  const sampleEnemy = {
    type: "Sabertooth",
    health: 3,
    strength: 8
  }
  
  test("should amend player's properties based on player level", () => {
    levelPerks(sampleCharacter,2);
    expect(sampleCharacter.strength).toEqual(13)
  }) 

})
// leveling system turns points into levels

// Points get added after each win
// Points earned is equivalent to enemy's xp property
// if you lose, nothing happens
// 
