declare module 'notyf' {
        declare interface Options {
delay?: number,
alertIcon?: string,
confirmIcon?: string
} 
	declare class Notyf  {
constructor(options?: Options): this;
alert(text: string): void;
confirm(text: string): void
}
	declare module.exports: typeof Notyf

    }
