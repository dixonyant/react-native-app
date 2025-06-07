import { Card, SetGame } from "./SetGame";


export class SetGameClassic extends SetGame {
  public board: Card[] = [];
  public selectedCards: Card[] = [];

  constructor() {
    super();
    this.dealInitialCards();
  }

  private dealInitialCards(): void {
    this.board = this.deck.splice(0, 12);
  }

  public dealMoreCards(count: number = 3): void {
    this.board.push(...this.deck.splice(0, count));
  }

  public findAllSets(): Card[][] {
    const sets: Card[][] = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = i + 1; j < this.board.length; j++) {
        for (let k = j + 1; k < this.board.length; k++) {
          const trio = [this.board[i], this.board[j], this.board[k]];
          if (this.isSet(trio)) {
            sets.push(trio);
          }
        }
      }
    }
    return sets;
  }

  public reset(): void {
    super.reset();
    this.board = [];
    this.selectedCards = [];
    this.dealInitialCards();
  }
}
