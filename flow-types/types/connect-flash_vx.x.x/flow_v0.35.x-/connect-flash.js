declare export interface Express$Request {
flash(): {
[key: string]: string[]
},
flash(message: string): any,
flash(event: string, message: string): any
} declare module 'connect-flash' {
        declare interface IConnectFlashOptions {
unsafe?: boolean
} 
	declare function e(options?: IConnectFlashOptions): express.RequestHandler

	declare module.exports: typeof e

    }
