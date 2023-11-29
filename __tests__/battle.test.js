import { battle } from "../src/js/battle.js"
// import { enemyType } from "../src/js/enemy.js";
// import { changeState } from "../src/js/character.js"

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
    expect(battle([sampleCharacter,sampleEnemy])()[0]).toHaveProperty("name");
    expect(battle([sampleCharacter,sampleEnemy])()[1]).toHaveProperty("type");
  });
  
  test("should reduce the value of the enemy's health according to the player's attack strength when 'playerAttacks' is the action", () => {
    expect(battle([sampleCharacter,sampleEnemy])("playerAttacks")[1]).toHaveProperty("health",-5);
  });

  test("should reduce the value of the player's health according to the enemy's attack strength when 'enemyAttacks' is the action", () => {
    expect(battle([sampleCharacter,sampleEnemy])("enemyAttacks")[0]).toHaveProperty("health", 2);
  });
})
