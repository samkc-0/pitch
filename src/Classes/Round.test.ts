import { Round } from "./Round";

let currentRound: Round;

describe("A round", () => {
  beforeAll(() => {
    currentRound = new Round({
      referenceNote: 60,
      answerNote: 58,
      interval: 0,
    });
  });
  it("can be created", () => {
    expect(currentRound).toBeDefined();
  });
  it("has a reference note", () => {
    expect(currentRound.ReferenceNote).toBe(60);
  });
  it("has an answer note", () => {
    expect(currentRound.AnswerNote).toBe(58);
  });
  it("has a target interval", () => {
    expect(currentRound.TargetInterval).toBe(0);
  });
  it("can describe its current interval", () => {
    expect(currentRound.ActualInterval).toBe(-2);
  });
  it("can have its answer note set", () => {
    currentRound.SetAnswerNote(59);
    expect(currentRound.AnswerNote).toBe(59);
    expect(currentRound.ActualInterval).toBe(-1);
  });
  it("calculates the interval as the distance between the highest pitched note and the lowest pitched note", () => {
    currentRound.SetAnswerNote(62);
    expect(currentRound.ActualInterval).toBe(2);
  });
  it("Is incorrect when targt interval is not equal to the actual interval", () => {
    expect(currentRound.IsCorrect).toBeFalsy();
  });
  it("Is correct when the target interval is equal to the actual interval", () => {
    currentRound.SetAnswerNote(60);
    expect(currentRound.IsCorrect).toBeTruthy();
  });
  it("defines a lowest note that is greater than or equal to 0", () => {
    expect(currentRound.LowestNote).toBeGreaterThanOrEqual(0);
  });
  it("defined a highest note that no higher than 127", () => {
    expect(currentRound.HighestNote).toBeLessThanOrEqual(127);
  });
});

describe("A unison round", () => {
  beforeEach(() => {
    currentRound = new Round({
      referenceNote: 60,
      answerNote: 60,
      interval: 0,
    });
  });
  it("Is correct when the answer not is the same as the reference note", () => {
    expect(currentRound.IsCorrect).toBe(true);
  });
});
