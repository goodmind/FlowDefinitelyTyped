declare module "fuzzyset" {
  declare interface FuzzySet {
    get(candidate: string): Array<[number, string]>;
    add(value: string): boolean;
    length(): number;
    isEmpty(): boolean;
    values(): string[];
  }
  declare function FuzzySet(
    source?: string[],
    useLevenshtein?: boolean,
    gramSizeLower?: number,
    gramSizeUpper?: number
  ): FuzzySet;

  declare module.exports: typeof FuzzySet;
}
