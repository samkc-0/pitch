import { fireEvent, render, screen } from "@testing-library/react";
import { GameConfiguration } from "./Classes/GameManager";
import App from "./App";

let gameConfiguration: GameConfiguration;
let slider: HTMLInputElement;

describe("The user interface", () => {
  beforeAll(() => {
    gameConfiguration = {
      referenceNote: 60,
      answerNote: 48,
      interval: 0,
      lowestNote: 12,
      highestNote: 78,
    };
    render(<App gameConfiguration={gameConfiguration} />);
    slider = screen.getByRole("slider") as HTMLInputElement;
  });
  it("has a title", () => {
    screen.getByText(/Pitch Training/i);
  });
  it("has a slider", () => {
    expect(slider).toBeDefined();
  });
  it("sets the slider to the intial answer note", () => {
    expect(slider.value).toBe(`${gameConfiguration.answerNote}`);
  });
  it("doesn't allow the slider to go below a round's lowest note", () => {
    expect(slider.min).toBe(`${gameConfiguration.lowestNote}`);
  });
  it("doesn't allow the slider to go above a round's highest note", () => {
    expect(slider.max).toBe(`${gameConfiguration.highestNote}`);
  });
  it("shows what note is currently playing", () => {
    screen.getByText(/C4/i);
  });
  it("has a button to reset the round", () => {
    const resetButton = screen.getByRole("button", { name: /reset/i });
    expect(resetButton).toBeDefined();
  });
  it("has a button to submit the answer", () => {
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDefined();
  });
  it("tells the user when their answer is correct", () => {
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.change(slider, { target: { value: 60 } });
    fireEvent.click(submitButton);
    screen.getByText(/correct/i);
  });
  it("tells the user when their answer is incorrect", async () => {
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await fireEvent.change(slider, { target: { value: 59 } });
    await fireEvent.click(submitButton);
    screen.getByText(/incorrect/i);
  });
  it("resets the round when the user clicks the reset button", async () => {
    const resetButton = screen.getByRole("button", { name: /reset/i });
    await fireEvent.click(resetButton);
    screen.getByText(/unsubmitted/i);
  });
});
