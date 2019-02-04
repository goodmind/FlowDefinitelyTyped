declare module 'js-quantities' {
        declare var Qty: Qty$Qty$Type;
	declare interface Qty {
+numerator: string[],
+denominator: string[],
+scalar: number,
+baseScalar: number,
+initValue: string,
units(): string,
isCompatible(value: Qty$Qty$UnitSource): boolean,
kind(): string,
isUnitless(): boolean,
isBase(): boolean,
toBase(): Qty,
toFloat(): number,
to(value: Qty$Qty$UnitSource): Qty,
inverse(): Qty,
eq(value: Qty$Qty$UnitSource): boolean,
same(value: Qty$Qty$UnitSource): boolean,
lt(value: Qty$Qty$UnitSource): boolean,
lte(value: Qty$Qty$UnitSource): boolean,
gt(value: Qty$Qty$UnitSource): boolean,
gte(value: Qty$Qty$UnitSource): boolean,
compareTo(value: Qty): Qty$Qty$ComparisonResult,
add(value: Qty$Qty$Source): Qty,
sub(value: Qty$Qty$Source): Qty,
mul(value: Qty$Qty$Source): Qty,
div(value: Qty$Qty$Source): Qty,
toPrec(value: Qty$Qty$Source): Qty,
toString(valueOrPrecision?: Qty$Qty$Source): string,
toString(value: string, precision: number): string,
format(formatter?: Qty$Qty$Formatter): string,
format(value: string, formatter?: Qty$Qty$Formatter): string
} 
	declare interface Qty$Type {
(value: Qty$Source): Qty,
(value: number, unit: string): Qty,
new (value: Qty$Source): Qty,
new (value: number, unit: string): Qty,
parse(value: string): Qty,
getKinds(): string[],
getUnits(kind?: string): string[],
getAliases(unit: string): string[],
swiftConverter(sourceUnit: string, targetUnit: string): Qty$Converter,
formatter: Qty$Formatter,
+Error: any,
mulSafe(n1: number, n2: number): number,
divSafe(n1: number, n2: number): number
} 

declare interface Qty$Converter {
(sourceValue: number): number,
(sourceValues: number[]): number[]
} 

declare type Qty$Formatter = (scalar: number, unit: string) => string;

declare type Qty$ComparisonResult = -1 | 0 | 1;

declare type Qty$Source = Qty$UnitSource | number;

declare type Qty$UnitSource = Qty | string;
	declare module.exports: typeof Qty

    }
