export function levelCalc(input) {
  if (input >= 20 ) {
    return 3;
  } else if (input >= 10 ) {
    return 2;
  } else {
    return 1;
  }
}