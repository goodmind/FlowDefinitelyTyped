declare module "money-math" {
  declare export function add(a: string, b: string): string;

  declare export function subtract(a: string, b: string): string;

  declare export function mul(a: string, b: string): string;

  declare export function div(a: string, b: string): string;

  declare export function percent(a: string, b: string): string;

  declare export function cmp(a: string, b: string): 0 | number;

  declare export function isEqual(a: string, b: string): boolean;

  declare export function isZero(value: string): boolean;

  declare export function isNegative(value: string): boolean;

  declare export function isPositive(value: string): boolean;

  declare export function floatToAmount(value: number): string;

  declare export function format(
    currency:
      | "CHF"
      | "CNY"
      | "EUR"
      | "GBP"
      | "JPY"
      | "LTL"
      | "PLN"
      | "SEK"
      | "SKK"
      | "UAH"
      | "USD"
      | string,
    value: string
  ): string;

  declare export function roundUpTo5Cents(value: string): string;

  declare export function roundTo5Cents(value: string): string;
}
