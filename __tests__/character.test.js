import { changeState } from "../src/js/character.js"
// import { storeState } from "../src/js/character.js"

describe(changeState, () => {

  test("should change state based on inputted values and return the new state", () => {
    const property = "sampleProperty";
    const value = 2;
    const newState = changeState(property)(value)({});
    expect(newState.sampleProperty).toEqual(2);
  });
  
});

// describe(storeState, () => {
  
//   const stateControl = storeState();

//   test('should return changed state according to type of change (ie bluefood) introduced', () => {
//     const blueFood = changeState('soil')(5);
//     const changedStateofObject = stateControl(blueFood);
//     expect(changedStateofObject.soil).toEqual(5);

//   });
// })
// describe(character, () => {
//     test("should hold name property", () => {
//         expect(character).toContain("name");
//     });
// });