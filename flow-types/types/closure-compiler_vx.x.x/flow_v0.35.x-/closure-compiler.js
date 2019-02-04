declare module 'closure-compiler' {
        declare export type Callback = (err: Error, stdout: string, stderr: string) => any;
	declare export function compile(src: string, callback: Callback): void

	declare export function compile(
src: string,
options: {
[k: string]: string | string[]
},
callback: Callback): void

    }
