import { changeState } from "./character";

// Example of using ternary operators instead of If / else statements
export const battle = (arrayInput) => (entityId) => (action) => {
  const otherEntity = entityId === 0 ? 1: 0;
  return action === "attacks" ? (() => {
    const damageDealt = arrayInput[otherEntity].strength;
    return arrayInput[otherEntity] = changeState("health")("-")(damageDealt)(arrayInput[otherEntity]);
  })() : 
    action === "blocks" ? (() => {
      const damageDealt = ((arrayInput[otherEntity].strength) * .25);

      return arrayInput[otherEntity] = changeState("health")("-")(damageDealt)(arrayInput[entityId]);
    })() : arrayInput;
};

// export function battleOld(arrayInput) {
//   return function(entityId) {
//     let otherEntity = 0;
//     if (entityId === 0) {otherEntity = 1};
//     return function(action) {
//       if (action === "attacks") {
//         const damageDealt = arrayInput[entityId].strength;
//         const updatedEntity = changeState("health")("-")(damageDealt)(arrayInput[otherEntity]);
//         if (entityId === 0) {
//           return [arrayInput[0],updatedEntity];
//         } else {
//           return [updatedEntity,arrayInput[1]];
//         }
//       } else if (action === "blocks") {
//         const damageDealt = ((arrayInput[otherEntity].strength) * .25);
//         const updatedEntity = changeState("health")("-")(damageDealt)(arrayInput[entityId]);
//         if (entityId === 0) {
//           return [updatedEntity,arrayInput[1]];
//         } else {
//           return [arrayInput[0],updatedEntity];
//         }
//       } else {
//         return arrayInput;
//       }
//     }
//   }
// }