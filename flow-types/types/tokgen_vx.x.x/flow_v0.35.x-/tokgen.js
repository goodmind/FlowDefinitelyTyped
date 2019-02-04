declare module 'tokgen' {
        declare module.exports: typeof TokenGenerator

	declare class TokenGenerator  {
constructor(options?: TokenGenerator$TokenGenerator$Options): this;
generate(length?: number): string;
generate(length: number, callback: TokenGenerator$TokenGenerator$Callback): void;
generate(callback: TokenGenerator$TokenGenerator$Callback): void
}
	declare interface TokenGenerator$OptionsObject {
chars?: string,
length?: number
} 

declare type TokenGenerator$Options = number | string | TokenGenerator$OptionsObject;

declare type TokenGenerator$Callback = (error: any, token: string) => void;
    }
