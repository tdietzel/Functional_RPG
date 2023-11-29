import { changeState, storeState, character, characterSelect } from "../src/js/character.js"

describe(changeState, () => {

  test("should change state based on inputted values and return the new state", () => {
    const property = "sampleProperty";
    const value = 2;
    const newState = changeState(property)(value)({});
    expect(newState.sampleProperty).toEqual(2);
  });

});

describe(storeState, () => {

  const stateControl = storeState();

  test('should return initial state when no changes are made', () => {
    const changedStateofObject = stateControl()
    expect(changedStateofObject).toEqual(stateControl())
  });


  test('should return changed state according to type of change (ie gainHealth) introduced', () => {
    const gainHealth = changeState('health')(1);
    const changedState = stateControl(gainHealth);
    expect(changedState.health).toEqual(1);
  });

});

describe(character, () => {
  test("should hold name property", () => {
    expect(character("myname")).toHaveProperty("name");
  });
});

describe(characterSelect, () => {

  test("should modify character state based on input", () => {
    expect(characterSelect({name:"myname"})("caveman")).toHaveProperty("intelligence",2);
    expect(characterSelect({name:"myname"})("cavedog")).toHaveProperty("intelligence",10);
    expect(characterSelect({name:"myname"})("something")).toHaveProperty("intelligence",0);

  });
})