import { changeState } from "./character";
// import { enemyType } from "./enemy.js";

// export let myCharacter = {};
// export let newEnemy = {};

// const stateControl = storeState();

// export function battleSetup(state) {
//   // myCharacter = stateControl(state);

//   const getState = storeState(state)
//   myCharacter = getState
//   newEnemy = enemyType("Swoopbird");
// }



// attack([{character},{enemy}]) {
//   // process the attack

//   return [{character},{enemy}];
// }

// export function battle(arrayInput) {
//   return function(action) {
    
//     if (action === "playerAttacks") {
//       const damageDealt = 0 - arrayInput[0].strength;
//       const updatedEnemy = changeState("health")(damageDealt)(arrayInput[1]);
//       return [arrayInput[0],updatedEnemy];
//     } else if (action === "enemyAttacks") {
//       const damageDealt = 0 - arrayInput[1].strength;
//       const updatedPlayer = changeState("health")(damageDealt)(arrayInput[0]);
//       return [updatedPlayer,arrayInput[1]];
//     } else if (action === "playerBlocks") {
//       const damageDealt = (arrayInput[0].strength) * .25;
//       const updatedPlayer = changeState("health")(damageDealt)(arrayInput[0]);
//       return [arrayInput[0], updatedPlayer];
//     } else {
//       return arrayInput;
//     }
//   }
// }

export function battle(arrayInput) {
  return function(entityId) {
    let otherEntity = 0;
    if (entityId === 0) {otherEntity = 1};
    return function(action) {
      if (action === "attacks") {
        const damageDealt = 0 - arrayInput[entityId].strength;
        const updatedEntity = changeState("health")(damageDealt)(arrayInput[otherEntity]);
        if (entityId === 0) {
          return [arrayInput[0],updatedEntity];
        } else {
          return [updatedEntity,arrayInput[1]];
        }
      } else {
        return arrayInput;
      }
    }
  }
}


// player block
// enemy block
// flee