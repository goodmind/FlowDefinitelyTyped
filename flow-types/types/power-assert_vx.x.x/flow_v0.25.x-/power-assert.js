declare var npm$namespace$assert: {
  fail: typeof assert$fail,
  ok: typeof assert$ok,
  equal: typeof assert$equal,
  notEqual: typeof assert$notEqual,
  deepEqual: typeof assert$deepEqual,
  notDeepEqual: typeof assert$notDeepEqual,
  strictEqual: typeof assert$strictEqual,
  notStrictEqual: typeof assert$notStrictEqual,
  deepStrictEqual: typeof assert$deepStrictEqual,
  notDeepStrictEqual: typeof assert$notDeepStrictEqual,
  ifError: typeof assert$ifError,
  customize: typeof assert$customize,
  throws: typeof assert$throws,
  doesNotThrow: typeof assert$doesNotThrow,
  strict: typeof assert$strict
};
declare export class assert$AssertionError mixins Error {
  name: string;
  message: string;
  actual: any;
  expected: any;
  operator: string;
  generatedMessage: boolean;
  constructor(options?: {
    message?: string,
    actual?: any,
    expected?: any,
    operator?: string,
    stackStartFunction?: Function
  }): this;
}

declare export function assert$fail(
  actual?: any,
  expected?: any,
  message?: string,
  operator?: string
): void;

declare export function assert$ok(value: any, message?: string): void;

declare export function assert$equal(
  actual: any,
  expected: any,
  message?: string
): void;

declare export function assert$notEqual(
  actual: any,
  expected: any,
  message?: string
): void;

declare export function assert$deepEqual(
  actual: any,
  expected: any,
  message?: string
): void;

declare export function assert$notDeepEqual(
  acutal: any,
  expected: any,
  message?: string
): void;

declare export function assert$strictEqual(
  actual: any,
  expected: any,
  message?: string
): void;

declare export function assert$notStrictEqual(
  actual: any,
  expected: any,
  message?: string
): void;

declare export function assert$deepStrictEqual(
  actual: any,
  expected: any,
  message?: string
): void;

declare export function assert$notDeepStrictEqual(
  actual: any,
  expected: any,
  message?: string
): void;

declare export var assert$throws: {
  (block: Function, message?: string): void,
  (block: Function, error: Function, message?: string): void,
  (block: Function, error: RegExp, message?: string): void,
  (block: Function, error: (err: any) => boolean, message?: string): void
};

declare export var assert$doesNotThrow: {
  (block: Function, message?: string): void,
  (block: Function, error: Function, message?: string): void,
  (block: Function, error: RegExp, message?: string): void,
  (block: Function, error: (err: any) => boolean, message?: string): void
};

declare export function assert$ifError(value: any): void;

declare export var assert$strict: typeof assert;

export interface assert$Options {
  assertion?: empower.assert$Options;
  output?: powerAssertFormatter.assert$Options;
}

declare export function assert$customize(
  options: assert$Options
): typeof assert;
declare module "power-assert" {
  import typeof * as empower from "empower";

  declare export default typeof assert;

  declare function assert(value: any, message?: string): void;
}
