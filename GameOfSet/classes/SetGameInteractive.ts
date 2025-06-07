import { SetGame, Card } from "./SetGame";


export class SetGameInteractive extends SetGame {
  private dealtCards: Card[] = [];
  private dealtIsSet: boolean = false;
  private correctGuesses: number = 0;
  private incorrectGuesses: number = 0;

  constructor() {
    super();
    this.dealCards(); // Deal the first set of cards
  }

  public dealCards(): Card[] {
    this.dealtCards = this.deck.splice(0, 3);
    this.dealtIsSet = this.isSet(this.dealtCards);
    return this.dealtCards;
  }

  public checkUserAssertion(userAssertion: boolean): boolean {
    const isCorrect = userAssertion === this.dealtIsSet;
    if (isCorrect) {
      this.correctGuesses++;
    } else {
      this.incorrectGuesses++;
    }
    return isCorrect;
  }

  public getScore(): string {
    const total = this.correctGuesses + this.incorrectGuesses;
    const accuracy = total > 0 ? ((this.correctGuesses / total) * 100).toFixed(1) : '0.0';
    return `✅ Correct: ${this.correctGuesses}, ❌ Incorrect: ${this.incorrectGuesses}, 🎯 Accuracy: ${accuracy}%`;
  }

  public reset(): void {
    super.reset();
    this.dealtCards = [];
    this.dealtIsSet = false;
    this.correctGuesses = 0;
    this.incorrectGuesses = 0;
    this.dealCards();
  }

}