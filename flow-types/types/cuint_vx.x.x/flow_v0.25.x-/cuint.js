declare module "cuint" {
  declare export interface Uint {
    add(x: this): this;
    subtract(x: this): this;
    multiply(x: this): this;
    div(x: this): this;
    equals(x: this): boolean;
    eq(x: this): boolean;
    greaterThan(x: this): boolean;
    gt(x: this): boolean;
    lessThan(x: this): boolean;
    lt(x: this): boolean;
    negate(): this;
    or(x: this): this;
    and(x: this): this;
    xor(x: this): this;
    not(x: this): this;
    shiftRight(n: number): this;
    shiftr(n: number): this;
    shiftLeft(n: number): this;
    shiftl(n: number): this;
    rorateLeft(n: number): this;
    rotl(n: number): this;
    rorateRight(n: number): this;
    rotr(n: number): this;
    fromNumber(n: number): this;
    fromBits(...bits: number[]): this;
    fromString(integer: string, radix?: number): this;
    toNumber(): number;
    toString(base?: number): string;
    clone(): this;
    _low: number;
    _high: number;
  }
  declare export interface UintConstructor<T: Uint> {
    (low: number, high?: number): T;
    (text: string, radix?: number): T;
    new(low: number, high?: number): T;
    new(text: string, radix?: number): T;
    prototype: T;
  }
  declare export type Uint64Constructor<T: Uint> = {
    (a00: number, a16: number, a32: number, a48: number): T,
    new(a00: number, a16: number, a32: number, a48: number): T
  } & UintConstructor<T>;

  declare export var UINT64: Uint64Constructor<Uint>;
  declare export var UINT32: UintConstructor<Uint>;
}
