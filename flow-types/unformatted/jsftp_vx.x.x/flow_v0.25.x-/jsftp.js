declare module 'jsftp' {
        import type {
          Socket
        } from 'net';

	import type {
          EventEmitter
        } from 'events';

	declare export interface JsftpOpts {
host?: string,
port?: number,
user?: string,
pass?: string,
createSocket?: ({port, host}: {
port: number,
host: string
}, firstAction: () => {}) => Socket,
useList?: boolean
} 
	declare export type ErrorCallback = (err: Error) => void;
	declare export type RawCallback = (err: Error, data: {
code: number,
text: string
}) => void;
	declare export type ListCallback = (err: Error, dirContents: string) => void;
	declare export type GetCallback = (err: Error, socket: Socket) => void;
	declare export type LsCallback = (err: Error, res: [{
name: string
}]) => void;
	declare export default class Ftp mixins EventEmitter {
constructor(opts: JsftpOpts): this;
ls(filePath: string, callback: LsCallback): void;
list(filePath: string, callback: ListCallback): void;
get(remotePath: string, callback: GetCallback): void;
get(remotePath: string, localPath: string, callback: ErrorCallback): void;
put(
source: string | Buffer | NodeJS.ReadableStream,
remotePath: string,
callback: ErrorCallback): void;
rename(from: string, to: string, callback: ErrorCallback): void;
raw(command: string, callback: RawCallback): void;
raw(command: string, arg1: any, callback: RawCallback): void;
raw(command: string, arg1: any, arg2: any, callback: RawCallback): void;
raw(command: string, arg1: any, arg2: any, arg3: any, callback: RawCallback): void;
raw(
command: string,
arg1: any,
arg2: any,
arg3: any,
arg4: any,
callback: RawCallback): void;
keepAlive(timeInMs?: number): void;
destroy(): void
}
    }
