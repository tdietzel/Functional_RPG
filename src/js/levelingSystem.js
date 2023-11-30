import { changeState } from "./character";
import { updateState } from "./character";

export function levelCalc(input) {
  return input >= 20 ? 3 : input >= 10 ? 2 : 1;
}

// export function levelPerks(character, level) {
//   if ((level === 3) && !(character.level === 3)) {
//     const updatedLevelProp = updateState("level")(3)(character);
//     const updatedPerk = changeState("strength")(5)(updatedLevelProp)
//     return updatedPerk;
//   }
// }

// Example of using ternary operators instead of If / else statements

// export function levelPerks(character, level) {
//   level === 3 && !(character.level === 3) ? (() => {
//     const updatedLevelProp = updateState("level")(3)(character);
//     const updatedPerk = changeState("strength")(5)(updatedLevelProp)
//     return updatedPerk;
//   })() : character;
// }