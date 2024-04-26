import { GameConfiguration } from "./GameManager";

export class Round {
  private referenceNote: number;
  private answerNote: number;
  private targetInterval: number;
  private lowestNote: number;
  private highestNote: number;
  constructor(gameConfiguration: GameConfiguration) {
    this.referenceNote = gameConfiguration.referenceNote;
    this.answerNote = gameConfiguration.answerNote;
    this.targetInterval = gameConfiguration.interval;
    this.lowestNote = gameConfiguration.lowestNote || 0;
    this.highestNote = gameConfiguration.highestNote || 127;
  }
  public get ReferenceNote() {
    return this.referenceNote;
  }

  public get AnswerNote() {
    return this.answerNote;
  }

  public SetAnswerNote(value: number): void {
    this.answerNote = value;
  }

  public get TargetInterval() {
    return this.targetInterval;
  }

  public get ActualInterval() {
    return this.answerNote - this.referenceNote;
  }

  public get IsCorrect(): boolean {
    return this.ActualInterval === this.targetInterval;
  }

  public get LowestNote(): number {
    return this.lowestNote;
  }

  public get HighestNote(): number {
    return this.highestNote;
  }
}
