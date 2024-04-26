import { notes, notesByName } from "./Note";

describe("A note", () => {
  it("can be found by its name", () => {
    expect(notesByName["C4"].number).toBe(60);
  });
  it("can be found by its number", () => {
    expect(notes[60].name).toBe("C4");
  });
});
