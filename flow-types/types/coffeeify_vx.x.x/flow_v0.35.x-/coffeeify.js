declare module 'coffeeify' {
        declare interface coffeeify$Coffeeify {
isCoffee(file: string): boolean,
isLiterate(file: string): boolean,
sourceMap: boolean,
compile(file: string, data: string, callback: coffeeify$Callback): void,
(file: string): through.ThroughStream
} 

declare interface coffeeify$Callback {
(error: coffeeify$ParseError, compiled: string): void
} 

declare type coffeeify$ParseError = {
new (error: any, src: string, file: string): coffeeify$ParseError,
message: string,
line: number,
column: number,
annotated: string
} & SyntaxError

	declare var coffeeify: coffeeify$coffeeify$Coffeeify;
	declare module.exports: typeof coffeeify

    }
