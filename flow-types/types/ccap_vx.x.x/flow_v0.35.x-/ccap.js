declare module 'ccap' {
        declare interface Captcha {
get(): [string, Buffer]
} 
	declare interface Options {
width?: number,
height?: number,
offset?: number,
quality?: number,
fontsize?: number,
generate(): string
} 
	declare function ccap(width: number, height: number, offset: number): Captcha

	declare function ccap(options?: Options): Captcha

	
	declare module.exports: typeof ccap

    }
