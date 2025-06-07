
export type Shape = 'oval' | 'squiggle' | 'diamond';
export type Color = 'red' | 'green' | 'purple';
export type Shading = 'solid' | 'striped' | 'open';
export type NumberOfShapes = 1 | 2 | 3;

export interface Card {
  shape: Shape;
  color: Color;
  shading: Shading;
  number: NumberOfShapes;
}

export class SetGame {
  protected deck: Card[] = [];

  constructor() {
    this.generateDeck();
    this.shuffleDeck();
  }

  private generateDeck(): void {
    const shapes: Shape[] = ['oval', 'squiggle', 'diamond'];
    const colors: Color[] = ['red', 'green', 'purple'];
    const shadings: Shading[] = ['solid', 'striped', 'open'];
    const numbers: NumberOfShapes[] = [1, 2, 3];

    this.deck = [];

    for (const shape of shapes) {
      for (const color of colors) {
        for (const shading of shadings) {
          for (const number of numbers) {
            this.deck.push({ shape, color, shading, number });
          }
        }
      }
    }
  }

  private shuffleDeck(): void {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  public isSet(cards: Card[]): boolean {
    if (cards.length !== 3) return false;

    const features = ['shape', 'color', 'shading', 'number'] as const;

    return features.every((feature) => {
      const values = cards.map((card) => card[feature]);
      const uniqueValues = new Set(values);
      return uniqueValues.size === 1 || uniqueValues.size === 3;
    });
  }

  public reset(): void {
    this.deck = [];
    this.generateDeck();
    this.shuffleDeck();
  }

  public cardsRemaining(): number {
    return this.deck.length;
  }
}