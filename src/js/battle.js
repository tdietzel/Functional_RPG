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
      console.log(`Player's Strength: ${arrayInput[0].strength}`);
      console.log(`Enemy's Health: ${arrayInput[1].health}`);
      const damageDealt = 0 - arrayInput[0].strength;
      const updatedEnemy = changeState("health")(damageDealt)(arrayInput[1]);
      console.log(`New Enemy Health: ${updatedEnemy.health}`);
      return [arrayInput[0],updatedEnemy];
    }  else {
      return arrayInput;
    }
  }
}
