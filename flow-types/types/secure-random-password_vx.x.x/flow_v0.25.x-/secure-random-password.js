declare module "secure-random-password" {
  declare export var lower: string;
  declare export var upper: string;
  declare export var consonants: string;
  declare export var vowels: string;
  declare export var digits: string;
  declare export var symbols: string;
  declare export var fullSymbols: string;
  declare export var copyableSymbols: string;
  declare export interface RandomPasswordOptions {
    length?: number;
    characters?: string | string[];
  }
  declare export function randomPassword(
    options?: RandomPasswordOptions
  ): string;

  declare export function randomString(options?: RandomPasswordOptions): string;
}
