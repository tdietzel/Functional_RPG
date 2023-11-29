import { changeState } from "./character";
import { updateState } from "./character";

export function levelCalc(input) {
  if (input >= 20 ) {
    return 3;
  } else if (input >= 10 ) {
    return 2;
  } else {
    return 1;
  }
}

export function levelPerks(character, level) {
  if ((level === 3) && !(character.level === 3)) {
    const updatedLevelProp = updateState("level")(3)(character);
    const updatedPerk = changeState("strength")(5)(updatedLevelProp)
    return updatedPerk;
  }
}