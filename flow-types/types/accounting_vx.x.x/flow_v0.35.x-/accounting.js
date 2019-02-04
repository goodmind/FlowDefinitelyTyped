declare module 'accounting' {
        declare interface accounting$CurrencyFormat {
pos: string,
neg?: string,
zero?: string
} 

declare interface accounting$CurrencySettings<TFormat> {
symbol?: string,
format?: TFormat,
decimal?: string,
thousand?: string,
precision?: number
} 

declare interface accounting$NumberSettings {
precision?: number,
thousand?: string,
decimal?: string
} 

declare interface accounting$Settings {
currency: accounting$CurrencySettings<any>,
number: accounting$NumberSettings
} 

declare interface accounting$Static {
formatMoney(
number: number | string,
symbol?: string,
precision?: number,
thousand?: string,
decimal?: string,
format?: string): string,
formatMoney(
number: number | string,
options: accounting$CurrencySettings<string> | accounting$CurrencySettings<accounting$CurrencyFormat>): string,
formatMoney(
numbers: number[],
symbol?: string,
precision?: number,
thousand?: string,
decimal?: string,
format?: string): string[],
formatMoney(
numbers: number[],
options: accounting$CurrencySettings<string> | accounting$CurrencySettings<accounting$CurrencyFormat>): string[],
formatMoney(
numbers: any[],
symbol?: string,
precision?: number,
thousand?: string,
decimal?: string,
format?: string): any[],
formatMoney(
numbers: any[],
options: accounting$CurrencySettings<string> | accounting$CurrencySettings<accounting$CurrencyFormat>): any[],
formatColumn(
numbers: number[],
symbol?: string,
precision?: number,
thousand?: string,
decimal?: string,
format?: string): string[],
formatColumn(
numbers: number[],
options: accounting$CurrencySettings<string> | accounting$CurrencySettings<accounting$CurrencyFormat>): string[],
formatColumn(
numbers: number[][],
symbol?: string,
precision?: number,
thousand?: string,
decimal?: string,
format?: string): string[][],
formatColumn(
numbers: number[][],
options: accounting$CurrencySettings<string> | accounting$CurrencySettings<accounting$CurrencyFormat>): string[][],
formatNumber(
number: number,
precision?: number,
thousand?: string,
decimal?: string): string,
formatNumber(number: number, options: accounting$NumberSettings): string,
formatNumber(
number: number[],
precision?: number,
thousand?: string,
decimal?: string): string[],
formatNumber(number: number[], options: accounting$NumberSettings): string[],
formatNumber(number: any[], precision?: number, thousand?: string, decimal?: string): any[],
formatNumber(number: any[], options: accounting$NumberSettings): any[],
toFixed(number: number, precision?: number): string,
unformat(string: string, decimal?: string): number,
settings: accounting$Settings
} 
	declare var accounting: accounting$accounting$Static;
	declare module.exports: typeof accounting

    }
