import { changeState } from "./character";

export function levelCalc(input) {
  return input >= 20 ? 3 : input >= 10 ? 2 : 1;
}

export const levelPerks = (character, level) => {
  return level === 3 && !(character.level === 3) ? (() => {
    const updatedLevelProp = changeState("level")("=")(3)(character);
    const updatedPerk = changeState("strength")()(5)(updatedLevelProp);
    return updatedPerk;
  })() :
    level === 2 && !(character.level === 2) ? (() => {
      const updatedLevelProp = changeState("level")("=")(2)(character);
      const updatedPerk = changeState("strength")()(3)(updatedLevelProp);
      return updatedPerk;
    })() :
      character;
};

export const addXP = (arrayInput) => {
  const updatedXP = changeState("xp")()(arrayInput[1].xp)(arrayInput[0]);
  return updatedXP;
};