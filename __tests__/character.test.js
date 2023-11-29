import { character } from "../src/js/character.js"

describe(character, () => {
    test("should hold name property", () => {
        expect(character).toContain("name");
    });
});