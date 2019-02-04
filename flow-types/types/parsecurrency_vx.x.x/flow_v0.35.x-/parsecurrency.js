declare module 'parsecurrency' {
        declare interface ParsedCurrency {
raw: string,
value: number,
integer: string,
decimals: string,
currency: string,
symbol: string,
decimalSeparator: string,
groupSeparator: string
} 
	declare function parsecurrency(currency: string): ParsedCurrency

	declare module.exports: typeof parsecurrency

    }
