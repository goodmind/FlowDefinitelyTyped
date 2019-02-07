declare module "words-to-numbers" {
  declare export function wordsToNumbers(
    text: string,
    options?: {
      fuzzy: boolean
    }
  ): string | number | null;

  declare export default typeof wordsToNumbers;
}
