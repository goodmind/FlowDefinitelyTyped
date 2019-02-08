declare module "koa" {
  declare interface Context {
    vals: any;
    validateBody: (key: string) => KoaBouncer$KoaBouncer$Validator;
    validateQuery: (key: string) => KoaBouncer$KoaBouncer$Validator;
    validateParam: (key: string) => KoaBouncer$KoaBouncer$Validator;
    check: (result: any, tip?: string) => void;
    checkNot: (result: any, tip?: string) => KoaBouncer$KoaBouncer$Validator;
  }
}

declare var npm$namespace$KoaBouncer: {
  middleware: typeof KoaBouncer$middleware,
  isSafeInteger: typeof KoaBouncer$isSafeInteger
};
declare export class KoaBouncer$ValidationError mixins Error {
  name: string;
  message: string;
  bouncer: {
    key: string,
    message: string
  };
  constructor(key: string, message: string): this;
}

declare export class KoaBouncer$Validator {
  constructor(props: {
    ctx: Context,
    key: string,
    vals: any
  }): this;
  required(tip?: string): KoaBouncer$Validator;
  optional(): KoaBouncer$Validator;
  check(result: any, tip?: string): KoaBouncer$Validator;
  checkNot(result: any, tip?: string): KoaBouncer$Validator;
  checkPred(pred: any, tip?: string): KoaBouncer$Validator;
  checkNotPred(pred: any, tip?: string): KoaBouncer$Validator;
  tap(f: (arg: any) => any, tip?: string): KoaBouncer$Validator;
  isIn(arr: any[], tip?: string): KoaBouncer$Validator;
  isNotIn(arr: any[], tip?: string): KoaBouncer$Validator;
  isArray(tip?: string): KoaBouncer$Validator;
  eq(otherVal: string, tip?: string): KoaBouncer$Validator;
  gt(otherVal: string, tip?: string): KoaBouncer$Validator;
  gte(otherVal: string, tip?: string): KoaBouncer$Validator;
  lt(otherVal: string, tip?: string): KoaBouncer$Validator;
  lte(otherVal: string, tip?: string): KoaBouncer$Validator;
  isLength(min: number, max: number, tip?: string): KoaBouncer$Validator;
  defaultTo(valueOrFunction: any): KoaBouncer$Validator;
  isString(tip?: string): KoaBouncer$Validator;
  isInt(tip?: string): KoaBouncer$Validator;
  toInt(tip?: string): KoaBouncer$Validator;
  isFiniteNumber(tip?: string): KoaBouncer$Validator;
  toArray(): KoaBouncer$Validator;
  toInts(tip?: string): KoaBouncer$Validator;
  uniq(): KoaBouncer$Validator;
  toBoolean(): KoaBouncer$Validator;
  toDecimal(tip?: string): KoaBouncer$Validator;
  toFloat(tip?: string): KoaBouncer$Validator;
  toFiniteFloat(): KoaBouncer$Validator;
  toString(): KoaBouncer$Validator;
  trim(): KoaBouncer$Validator;
  match(regexp: RegExp, tip?: string): KoaBouncer$Validator;
  notMatch(regexp: RegExp, tip?: string): KoaBouncer$Validator;
  fromJson(tip?: string): KoaBouncer$Validator;
  isAlpha(tip?: string): KoaBouncer$Validator;
  isAlphanumeric(tip?: string): KoaBouncer$Validator;
  isNumeric(tip?: string): KoaBouncer$Validator;
  isAscii(tip?: string): KoaBouncer$Validator;
  isBase64(tip?: string): KoaBouncer$Validator;
  isEmail(tip?: string): KoaBouncer$Validator;
  isHexColor(tip?: string): KoaBouncer$Validator;
  isUuid(tip?: string): KoaBouncer$Validator;
  isJson(tip?: string): KoaBouncer$Validator;
  encodeBase64(tip?: string): KoaBouncer$Validator;
  clamp(min: number, max: number): KoaBouncer$Validator;
  static addMethod(name: string, fn: Function): void;
}

declare interface KoaBouncer$MiddlewareOption {
  getParams?: (ctx: Context) => any;
  getQuery?: (ctx: Context) => any;
  getBody?: (ctx: Context) => any;
}

declare export function KoaBouncer$middleware(
  opts?: KoaBouncer$MiddlewareOption
): Middleware;

declare export function KoaBouncer$isSafeInteger(n: number): boolean;
declare module "koa-bouncer" {
  import type { Middleware, Context } from "koa";

  declare module.exports: typeof KoaBouncer;
}
