declare module "indefinite" {
  declare export interface Options {
    capitalize?: boolean;
    caseInsensitive?: boolean;
    numbers?: "colloquial";
  }
  declare export function indefinite(
    word: string | number,
    opts?: Options
  ): string;
}
