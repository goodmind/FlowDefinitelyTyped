declare module "elo-rank" {
  declare class EloRank {
    constructor(kFactor?: number): this;
    setKFactor(kFactor: number): void;
    getKFactor(): number;
    getExpected(a: number, b: number): number;
    updateRating(expected: number, actual: number, current: number): number;
  }
  declare export default typeof EloRank;
}
