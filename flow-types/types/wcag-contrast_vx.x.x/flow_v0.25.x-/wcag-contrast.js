declare module "wcag-contrast" {
  /**
   * Get the contrast ratio between two relative luminance values
   */
  declare export function luminance(a: number, b: number): number;

  /**
   * Get a score for the contrast between two colors as rgb triplets
   */
  declare export function rgb(a: number[], b: number[]): number;

  /**
   * Get a score for the contrast between two colors as hex strings
   */
  declare export function hex(a: string, b: string): number;

  /**
   * Get a textual score from a numeric contrast value
   */
  declare export function score(contrast: number): string;
}
