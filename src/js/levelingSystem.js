import { changeState } from "./character";
// import { myPlayer } from "../index.js";

export function levelCalc(character) {
  const level = character.xp >= 20 ? 3 : character.xp >= 10 ? 2 : 1;
  return levelPerks(character,level);
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
  arrayInput[0].xp = changeState("xp")('+')(arrayInput[1].xp)(arrayInput[0]).xp;
  return levelCalc(arrayInput[0]);
};