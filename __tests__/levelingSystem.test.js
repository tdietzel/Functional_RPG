import { levelCalc, levelPerks, addXP } from "../src/js/levelingSystem.js"

describe(levelCalc, () => {

  test("should return the player's level (up to level 3) based on players xp", () => {
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

  test("should amend player's properties based on player level", () => {
    expect(levelPerks(sampleCharacter,4).strength).toEqual(8);
    expect(levelPerks(sampleCharacter,3).strength).toEqual(13);
    expect(levelPerks(sampleCharacter,2).strength).toEqual(11);
    expect(levelPerks(sampleCharacter,1).strength).toEqual(8);
  });
})

describe(addXP, () => {
  
  const sampleCharacter = {
    name: "bob",
    health: 10,
    strength: 8,
    intelligence: 2
  }

  const sampleEnemy = {
    type: "Sabertooth",
    health: 3,
    strength: 8,
    xp: 3
  }
  
  test("should add experience points (XP) to the player based on the enemy's XP", () => {
    expect(addXP([sampleCharacter,sampleEnemy]).xp).toEqual(3);
  });
})

// leveling system turns points into levels

// Points get added after each win
// Points earned is equivalent to enemy's xp property
// if you lose, nothing happens
// 
