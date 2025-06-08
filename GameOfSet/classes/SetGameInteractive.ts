import { SetGame, Card } from "./SetGame";


export class SetGameInteractive extends SetGame {
  private dealtCards: Card[] = [];
  private dealtIsSet: boolean = false;
  private correctGuesses: number = 0;
  private incorrectGuesses: number = 0;

  private dealCards(): Card[] {
    this.dealtCards = this.deck.splice(0, 3);
    this.dealtIsSet = this.isSet(this.dealtCards);
    return this.dealtCards;
  }

  private dealSet(): Card[] | [] {
    // im thinking of an algorithm that finds the first set in the deck
    // it will draw the first card and then look for two more cards that form a set
    // it will be like findallsets but return the first set only and it will use the next 12 cards or the rest of the deck
    // it should return empty array if no set is found
    const remainingCards = this.deck.slice(0, 12);
    for (let i = 0; i < remainingCards.length; i++) {
      for (let j = i + 1; j < remainingCards.length; j++) {
        for (let k = j + 1; k < remainingCards.length; k++) {
          const trio = [remainingCards[i], remainingCards[j], remainingCards[k]];
          if (this.isSet(trio)) {
            // remove the found cards from the deck
            this.deck = this.deck.filter(card => !trio.includes(card));
            this.dealtIsSet = true;
            this.dealtCards = trio;
            return trio;
          }
        }
      }
    }
    return [];
  }

  public dealRandom(): Card[] {
    // if random number condition is true, find a set, else deal cards
    const randomNumber = Math.random() > 0.5;
    if (randomNumber) {
      const foundSet = this.dealSet();
      if (foundSet.length > 0) {
        return foundSet;
      }
    }
    // if random number condition is false or no set is found, deal cards
    return this.dealCards();
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
  }

}