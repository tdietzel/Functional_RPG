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

export function battle(arrayInput) {
  return function(action) {
    
    if (action === "playerAttacks") {
      const damageDealt = 0 - arrayInput[0].strength;
      const updatedEnemy = changeState("health")(damageDealt)(arrayInput[1]);
      return [arrayInput[0],updatedEnemy];
    } else if (action === "enemyAttacks") {
      const damageDealt = 0 - arrayInput[1].strength;
      const updatedPlayer = changeState("health")(damageDealt)(arrayInput[0]);
      return [updatedPlayer,arrayInput[1]];
    } else {
      return arrayInput;
    }
  }
}


// enemy attack
// player block
// enemy block
// flee