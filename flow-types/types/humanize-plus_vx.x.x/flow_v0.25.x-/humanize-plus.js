declare module "humanize-plus" {
  declare export function formatNumber(
    number: number,
    decimals?: number
  ): string;

  declare export function intComma(number: number, decimals?: number): string;

  declare export function compactInteger(
    number: number,
    decimals?: number
  ): string;

  declare export function boundedNumber(
    number: number,
    bounds?: number,
    ending?: string
  ): string;

  declare export function ordinal(value: number): string;

  declare export function times(value: number, overrides?: any): string;

  declare export function pace(
    value: number,
    intervalMs: number,
    unit?: string
  ): string;

  declare export function fileSize(
    filesize: number,
    precision?: number
  ): string;

  declare export function pluralize(
    number: number,
    singular?: string,
    plural?: string
  ): string;

  declare export function truncate(
    string: string,
    length?: number,
    ending?: string
  ): string;

  declare export function truncateWords(
    string: string,
    length?: number
  ): string | null;

  declare export function capitalize(
    string: string,
    downCaseTail?: boolean
  ): string;

  declare export function capitalizeAll(string: string): string;

  declare export function titleCase(string: string): string;

  declare export function oxford(
    items: any[],
    limit?: number,
    limitStr?: string
  ): string;

  declare export function frequency(list: any[], verb?: string): string;

  declare export function toFixed(value: number, precision?: number): string;

  declare export function normalizePrecision(
    value: number,
    base?: number
  ): number;
}
