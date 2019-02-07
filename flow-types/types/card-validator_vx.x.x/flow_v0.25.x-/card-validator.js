declare module "card-validator" {
  declare export interface Card {
    niceType: string;
    type: string;
    pattern: string;
    isAmex: boolean;
    gaps: number[];
    lengths: number[];
    code: {
      name: string,
      size: number
    };
  }
  declare export interface valid {
    isPotentiallyValid: boolean;
    isValid: boolean;
  }
  declare export type validNumber = {
    card: Card | null
  } & valid;

  declare export type validExpirationDate = {
    month: string | null,
    year: string | null
  } & valid;

  declare export type validExpirationMonth = {
    isValidForThisYear: boolean
  } & valid;

  declare export type validExpirationYear = {
    isCurrentYear: boolean
  } & valid;

  declare export function number(value: string): validNumber;

  declare export function expirationDate(
    value:
      | string
      | {
          month: string,
          year: string
        }
  ): validExpirationDate;

  declare export function expirationMonth(value: string): validExpirationMonth;

  declare export function expirationYear(value: string): validExpirationYear;

  declare export function cvv(value: string, maxLength?: number): valid;

  declare export function postalCode(
    value: string,
    options?: {
      minLength?: number
    }
  ): valid;
}
