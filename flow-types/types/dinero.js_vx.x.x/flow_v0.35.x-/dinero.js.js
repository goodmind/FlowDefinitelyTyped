declare module 'dinero.js' {
        declare module.exports: typeof DineroFactory

	declare function DineroFactory(
options?: DineroFactory$Dinero.DineroFactory$Options): DineroFactory$DineroFactory$Dinero

	
      declare var npm$namespace$DineroFactory: {
        normalizePrecision: typeof DineroFactory$normalizePrecision,
        globalExchangeRatesApi: typeof DineroFactory$globalExchangeRatesApi,
      }
declare var DineroFactory$globalExchangeRatesApi: DineroFactory$ExchangeRatesApiOptions;

declare function DineroFactory$normalizePrecision(objects: DineroFactory$Dinero[]): DineroFactory$Dinero[]


declare interface DineroFactory$Options {
amount?: number,
currency?: string,
precision?: number
} 

declare interface DineroFactory$Dinero {
getAmount(): number,
getCurrency(): string,
getLocale(): string,
setLocale(newLocale: string): DineroFactory$Dinero,
getPrecision(): number,
convertPrecision(newPrecision: number): DineroFactory$Dinero,
add(addend: DineroFactory$Dinero): DineroFactory$Dinero,
subtract(subtrahend: DineroFactory$Dinero): DineroFactory$Dinero,
multiply(
multiplier: number,
roundingMode?: DineroFactory$RoundingMode): DineroFactory$Dinero,
divide(
divisor: number,
roundingMode?: DineroFactory$RoundingMode): DineroFactory$Dinero,
percentage(percentage: number): DineroFactory$Dinero,
allocate(ratios: number[]): DineroFactory$Dinero[],
convert(
currency: string,
options?: DineroFactory$ExchangeRatesApiOptions): Promise<DineroFactory$Dinero>,
equalsTo(comparator: DineroFactory$Dinero): boolean,
lessThan(comparator: DineroFactory$Dinero): boolean,
lessThanOrEqual(comparator: DineroFactory$Dinero): boolean,
greaterThan(comparator: DineroFactory$Dinero): boolean,
greaterThanOrEqual(comparator: DineroFactory$Dinero): boolean,
isZero(): boolean,
isPositive(): boolean,
isNegative(): boolean,
hasSubUnits(): boolean,

/**
 * @deprecated since version 2.0
 */
hasCents(): boolean,
hasSameCurrency(comparator: DineroFactory$Dinero): boolean,
hasSameAmount(comparator: DineroFactory$Dinero): boolean,
toFormat(format?: string, roundingMode?: DineroFactory$RoundingMode): string,
toUnit(): number,
toRoundedUnit(digits: number, roundingMode?: DineroFactory$RoundingMode): number,
toObject(): DineroFactory$DineroObject
} 

declare type DineroFactory$RoundingMode = "HALF_ODD"
| "HALF_EVEN"
| "HALF_UP"
| "HALF_DOWN"
| "HALF_TOWARDS_ZERO"
| "HALF_AWAY_FROM_ZERO";

declare interface DineroFactory$ExchangeRatesApiOptions {
endpoint: string,
propertyPath: string,
headers?: {
[header: string]: string
},
roundingMode?: DineroFactory$RoundingMode
} 

declare interface DineroFactory$DineroObject {
amount: number,
currency: string,
precision: number
} 
    }
