export class Round {
  private referenceNote: number;
  private answerNote: number;
  private targetInterval: number;
  constructor(
    referenceNote: number,
    answerNote: number,
    targetInterval: number
  ) {
    this.referenceNote = referenceNote;
    this.answerNote = answerNote;
    this.targetInterval = targetInterval;
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
    const highest = Math.max(this.referenceNote, this.answerNote);
    const lowest = Math.min(this.referenceNote, this.answerNote);
    return highest - lowest;
  }

  public get IsCorrect(): boolean {
    return this.ActualInterval === this.targetInterval;
  }
}
