declare module "integer" {
  declare function Integer(
    val: Integer$Integer$IntLike
  ): Integer$Integer$IntClass;

  declare var npm$namespace$Integer: {
    fromBits: typeof Integer$fromBits,
    fromNumber: typeof Integer$fromNumber,
    fromString: typeof Integer$fromString,
    isInstance: typeof Integer$isInstance,
    MAX_VALUE: typeof Integer$MAX_VALUE,
    MIN_VALUE: typeof Integer$MIN_VALUE,
    ZERO: typeof Integer$ZERO,
    ONE: typeof Integer$ONE,
    NEG_ONE: typeof Integer$NEG_ONE
  };
  declare type Integer$IntLike = number | string | Integer$IntClass;

  declare function Integer$fromBits(
    low: number,
    high?: number
  ): Integer$IntClass;

  declare function Integer$fromNumber(
    val: number,
    defaultVal?: number | Integer$IntClass
  ): Integer$IntClass;

  declare function Integer$fromString(
    val: string,
    radix?: number,
    defaultVal?: string | Integer$IntClass
  ): Integer$IntClass;

  declare function Integer$isInstance(val: any): boolean;

  declare var Integer$MAX_VALUE: Integer$IntClass;

  declare var Integer$MIN_VALUE: Integer$IntClass;

  declare var Integer$ZERO: Integer$IntClass;

  declare var Integer$ONE: Integer$IntClass;

  declare var Integer$NEG_ONE: Integer$IntClass;

  declare class Integer$IntClass {
    low: number;
    high: number;
    constructor(val: Integer$IntLike): this;
    add(augend: Integer$IntLike): Integer$IntClass;
    plus(augend: Integer$IntLike): Integer$IntClass;
    sub(subtrahend: Integer$IntLike): Integer$IntClass;
    subtract(subtrahend: Integer$IntLike): Integer$IntClass;
    minus(subtrahend: Integer$IntLike): Integer$IntClass;
    mul(multiplier: Integer$IntLike): Integer$IntClass;
    multiply(multiplier: Integer$IntLike): Integer$IntClass;
    times(multiplier: Integer$IntLike): Integer$IntClass;
    div(divisor: Integer$IntLike): Integer$IntClass;
    divide(divisor: Integer$IntLike): Integer$IntClass;
    divideBy(divisor: Integer$IntLike): Integer$IntClass;
    dividedBy(divisor: Integer$IntLike): Integer$IntClass;
    over(divisor: Integer$IntLike): Integer$IntClass;
    mod(divisor: Integer$IntLike): Integer$IntClass;
    modulo(divisor: Integer$IntLike): Integer$IntClass;
    neg(): Integer$IntClass;
    negate(): Integer$IntClass;
    abs(): Integer$IntClass;
    absoluteValue(): Integer$IntClass;
    and(bits: Integer$IntLike): Integer$IntClass;
    or(bits: Integer$IntLike): Integer$IntClass;
    xor(bits: Integer$IntLike): Integer$IntClass;
    not(): Integer$IntClass;
    shl(bits: number): Integer$IntClass;
    shiftLeft(bits: number): Integer$IntClass;
    shr(bits: number): Integer$IntClass;
    shiftRight(bits: number): Integer$IntClass;
    eq(val: Integer$IntLike): boolean;
    equals(val: Integer$IntLike): boolean;
    isEqualTo(val: Integer$IntLike): boolean;
    neq(val: Integer$IntLike): boolean;
    notEquals(val: Integer$IntLike): boolean;
    isNotEqualTo(val: Integer$IntLike): boolean;
    doesNotEqual(val: Integer$IntLike): boolean;
    gt(val: Integer$IntLike): boolean;
    greaterThan(val: Integer$IntLike): boolean;
    isGreaterThan(val: Integer$IntLike): boolean;
    gte(val: Integer$IntLike): boolean;
    greaterThanOrEquals(val: Integer$IntLike): boolean;
    isGreaterThanOrEqualTo(val: Integer$IntLike): boolean;
    lt(val: Integer$IntLike): boolean;
    lessThan(val: Integer$IntLike): boolean;
    isLessThan(val: Integer$IntLike): boolean;
    lte(val: Integer$IntLike): boolean;
    lessThanOrEquals(val: Integer$IntLike): boolean;
    isLessThanOrEqualTo(val: Integer$IntLike): boolean;
    compare(val: Integer$IntLike): -1 | 0 | 1;
    bitSizeAbs(): number;
    isEven(): boolean;
    isOdd(): boolean;
    isPositive(): boolean;
    isNegative(): boolean;
    isZero(): boolean;
    isNonZero(): boolean;
    isNotZero(): boolean;
    isSafe(): boolean;
    isUnsafe(): boolean;
    toNumber(): number;
    toNumberUnsafe(): number;
    toString(radix?: number): string;
    valueOf(): number;
  }
  declare module.exports: typeof Integer;
}
