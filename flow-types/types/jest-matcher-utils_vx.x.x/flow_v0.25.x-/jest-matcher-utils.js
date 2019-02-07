declare module "jest-matcher-utils" {
  import type { Chalk } from "chalk";

  declare export var EXPECTED_COLOR: Chalk;
  declare export var RECEIVED_COLOR: Chalk;
  declare export var EXPECTED_BG: Chalk;
  declare export var RECEIVED_BG: Chalk;
  declare export var SUGGEST_TO_EQUAL: string;
  declare export function stringify(object: any, maxDepth?: number): string;

  declare export function highlightTrailingWhitespace(
    text: string,
    bgColor: Chalk
  ): string;

  declare export function printReceived(object: any): string;

  declare export function printExpected(value: any): string;

  declare export function printWithType(
    name: string,
    received: any,
    print: (value: any) => string
  ): string;

  declare export function ensureNoExpected(
    actual: any,
    matcherName?: string
  ): void;

  declare export function ensureActualIsNumber(
    actual: any,
    matcherName?: string
  ): void;

  declare export function ensureExpectedIsNumber(
    actual: any,
    matcherName?: string
  ): void;

  declare export function ensureNumbers(
    actual: any,
    expected: any,
    matcherName?: string
  ): void;

  declare export function pluralize(word: string, count: number): string;

  declare export function matcherHint(
    matcherName: string,
    received?: string,
    expected?: string,
    options?: {
      secondArgument?: string,
      isDirectExpectCall?: boolean
    }
  ): string;
}
