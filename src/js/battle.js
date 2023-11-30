import { changeState } from "./character";

export function battle(arrayInput) {
  return function(entityId) {
    let otherEntity = 0;
    if (entityId === 0) {otherEntity = 1};
    return function(action) {
      if (action === "attacks") {
        const damageDealt = arrayInput[entityId].strength;
        const updatedEntity = changeState("health")("-")(damageDealt)(arrayInput[otherEntity]);
        if (entityId === 0) {
          return [arrayInput[0],updatedEntity];
        } else {
          return [updatedEntity,arrayInput[1]];
        }
      } else if (action === "blocks") {
        const damageDealt = ((arrayInput[otherEntity].strength) * .25);
        const updatedEntity = changeState("health")("-")(damageDealt)(arrayInput[entityId]);
        if (entityId === 0) {
          return [updatedEntity,arrayInput[1]];
        } else {
          return [arrayInput[0],updatedEntity];
        }
      } else {
        return arrayInput;
      }
    }
  }
}