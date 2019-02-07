declare module "bases" {
  declare export function toAlphabet(num: number, alphabet: string): string;

  declare export function fromAlphabet(str: string, alphabet: string): number;

  declare export function toBase(num: number, base: number): string;

  declare export function fromBase(str: string, base: number): number;

  declare export var KNOWN_ALPHABETS: any;
  declare export var NUMERALS: string;
  declare export var LETTERS_LOWERCASE: string;
  declare export var LETTERS_UPPERCASE: string;
}
