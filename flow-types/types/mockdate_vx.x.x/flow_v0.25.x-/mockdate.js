declare module "mockdate" {
  /**
   * Change the Date implementation to mock a specific date.
   * @param Date to be set as current
   * @param timezoneOffset ? The value that should be returned by new Date().getTimezoneOffset()
   */
  declare export function set(
    date:
      | {
          valueOf(): number
        }
      | number
      | string,
    timezoneOffset?: number
  ): void;

  /**
   * Restore the original Date object back to the native implementation.
   */
  declare export function reset(): void;
}
