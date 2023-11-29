import { battle } from "../src/js/battle.js"

describe(battle, () => {

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
  
  test("should return an array of character and enemy objects", () => {
    expect(battle([sampleCharacter,sampleEnemy])(0)()[0]).toHaveProperty("name");
    expect(battle([sampleCharacter,sampleEnemy])(0)()[1]).toHaveProperty("type");
  });
  
  test("should reduce the value of the defender's health according to the attacker's attack strength when 'attacks' is the action", () => {
    expect(battle([sampleCharacter,sampleEnemy])(0)("attacks")[1]).toHaveProperty("health",-5);
    expect(battle([sampleCharacter,sampleEnemy])(1)("attacks")[0]).toHaveProperty("health", 2);
  });

  test("should reduce the value of the blocker's health by .25% of the attacker's attack strength when 'blocks' is the action", () => {
    expect(battle([sampleCharacter,sampleEnemy])(0)("blocks")[0]).toHaveProperty("health", 8);
    expect(battle([sampleCharacter,sampleEnemy])(1)("blocks")[1]).toHaveProperty("health", 1);
  });
})
