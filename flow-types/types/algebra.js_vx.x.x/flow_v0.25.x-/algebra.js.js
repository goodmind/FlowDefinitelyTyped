declare module "algebra.js" {
  declare class Term {
    coefficients: algebra$jsFraction[];
    variables: Variable[];
    coefficient(): algebra$jsFraction;
    toString(): string;
  }
  declare class Variable {
    variable: string;
    toString(): string;
  }
  declare type Union = string | number | algebra$jsFraction | Term;

  declare var npm$namespace$algebra: {
    js: typeof npm$namespace$algebra$js
  };

  declare var npm$namespace$algebra$js: {
    parse: typeof algebra$js$parse,
    toTex: typeof algebra$js$toTex,

    Equation: typeof algebra$js$Equation,
    Expression: typeof algebra$js$Expression,
    Fraction: typeof algebra$js$Fraction
  };
  declare function algebra$js$parse(input: string): js$Equation | js$Expression;

  declare function algebra$js$toTex(
    input:
      | js$Fraction
      | js$Expression
      | js$Equation
      | { [key: string]: any }
      | Array<js$Fraction | { [key: string]: any }>
  ): string;

  declare class algebra$js$Equation {
    lhs: js$Expression;
    rhs: js$Expression;
    constructor(
      lhs: js$Expression,
      rhs: js$Expression | js$Fraction | number
    ): this;
    solveFor(variable: string): js$Fraction | js$Fraction[] | number[];
    toString(): string;
  }

  declare class algebra$js$Expression {
    constants: js$Fraction[];
    terms: Term[];
    constructor(variable: Union | void): this;
    add(
      other: Union | algebra$js$Expression,
      simplify?: boolean
    ): algebra$js$Expression;
    divide(
      other: js$Fraction | number,
      simplify?: boolean
    ): algebra$js$Expression;
    eval(p: { [key: string]: any }, simplify?: boolean): algebra$js$Expression;
    multiply(
      other: Union | algebra$js$Expression,
      simplify?: boolean
    ): algebra$js$Expression;
    pow(p: number, simplify?: boolean): algebra$js$Expression;
    constant(): js$Fraction;
    simplify(): algebra$js$Expression;
    subtract(
      other: Union | algebra$js$Expression,
      simplify?: boolean
    ): algebra$js$Expression;
    summation(
      variable: string,
      lower: number,
      upper: number,
      simplify?: boolean
    ): algebra$js$Expression;
    toString(): string;
  }

  declare class algebra$js$Fraction {
    denom: number;
    numer: number;
    constructor(num: number, denom: number): this;
    abs(): algebra$js$Fraction;
    add(
      other: algebra$js$Fraction | number,
      simplify?: boolean
    ): algebra$js$Fraction;
    divide(
      other: algebra$js$Fraction | number,
      simplify?: boolean
    ): algebra$js$Fraction;
    multiply(
      other: algebra$js$Fraction | number,
      simplify?: boolean
    ): algebra$js$Fraction;
    subtract(
      other: algebra$js$Fraction | number,
      simplify?: boolean
    ): algebra$js$Fraction;
    toString(): string;
    valueOf(): number;
  }
  declare export default typeof algebra$js;
}
