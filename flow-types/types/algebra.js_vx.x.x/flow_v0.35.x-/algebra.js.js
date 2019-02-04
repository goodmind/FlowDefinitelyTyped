declare module 'algebra.js' {
        declare class Term  {
coefficients: algebra$js.js$Fraction[];
variables: Variable[];
coefficient(): algebra$js.js$Fraction;
toString(): string
}
	declare class Variable  {
variable: string;
toString(): string
}
	declare type Union = string | number | algebra$js.js$Fraction | Term;
	
      declare var npm$namespace$js: {
        parse: typeof js$parse,
toTex: typeof js$toTex,
        
      }
declare function js$parse(input: string): js$Equation | js$Expression


declare function js$toTex(
input: js$Fraction
| js$Expression
| js$Equation
| {[key: string]: any}
| Array<js$Fraction | {[key: string]: any}>): string


declare class js$Equation  {
lhs: js$Expression;
rhs: js$Expression;
constructor(lhs: js$Expression, rhs: js$Expression | js$Fraction | number): this;
solveFor(variable: string): js$Fraction | js$Fraction[] | number[];
toString(): string
}

declare class js$Expression  {
constants: js$Fraction[];
terms: Term[];
constructor(variable: Union | void): this;
add(other: Union | js$Expression, simplify?: boolean): js$Expression;
divide(other: js$Fraction | number, simplify?: boolean): js$Expression;
eval(p: {[key: string]: any}, simplify?: boolean): js$Expression;
multiply(other: Union | js$Expression, simplify?: boolean): js$Expression;
pow(p: number, simplify?: boolean): js$Expression;
constant(): js$Fraction;
simplify(): js$Expression;
subtract(other: Union | js$Expression, simplify?: boolean): js$Expression;
summation(
variable: string,
lower: number,
upper: number,
simplify?: boolean): js$Expression;
toString(): string
}

declare class js$Fraction  {
denom: number;
numer: number;
constructor(num: number, denom: number): this;
abs(): js$Fraction;
add(other: js$Fraction | number, simplify?: boolean): js$Fraction;
divide(other: js$Fraction | number, simplify?: boolean): js$Fraction;
multiply(other: js$Fraction | number, simplify?: boolean): js$Fraction;
subtract(other: js$Fraction | number, simplify?: boolean): js$Fraction;
toString(): string;
valueOf(): number
}
	declare module.exports: typeof algebra$js

    }
