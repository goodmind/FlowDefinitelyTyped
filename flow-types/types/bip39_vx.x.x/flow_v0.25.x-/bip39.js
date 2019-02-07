declare module "bip39" {
  declare export var wordlists: {
    EN: string[],
    JA: string[],
    chinese_simplified: string[],
    chinese_traditional: string[],
    english: string[],
    french: string[],
    italian: string[],
    japanese: string[],
    spanish: string[]
  };
  declare export function entropyToMnemonic(
    entropyHex: Buffer | string,
    wordlist?: string[]
  ): string;

  declare export function generateMnemonic(
    strength?: number,
    rng?: (size: number) => Buffer,
    wordlist?: string[]
  ): string;

  declare export function mnemonicToEntropy(
    mnemonic: string,
    wordlist?: string[]
  ): string;

  declare export function mnemonicToSeed(
    mnemonic: string,
    password?: string
  ): Buffer;

  declare export function mnemonicToSeedHex(
    mnemonic: string,
    password?: string
  ): string;

  declare export function validateMnemonic(
    mnemonic: string,
    wordlist?: string[]
  ): boolean;
}
