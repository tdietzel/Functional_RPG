import { enemyType } from "../src/js/enemy.js"

describe(enemyType, () => {

  test("should modify enemy state based on input", () => {
    expect(enemyType("Swoopbird")).toHaveProperty("type","Swoopbird");
    expect(enemyType("Sabertooth")).toHaveProperty("type","Sabertooth");
    expect(enemyType("something")).toHaveProperty("type","Insect");
  });
})