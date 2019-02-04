declare module 'finalhandler' {
        import type {
          IncomingMessage,ServerResponse
        } from 'http';

	declare function finalHandler(
req: IncomingMessage,
res: ServerResponse,
options?: finalHandler$finalHandler$Options): (err: any) => void

	declare export interface finalHandler$Options {
message?: boolean | ((err: any, status: number) => string),
onerror?: (err: any, req: IncomingMessage, res: ServerResponse) => void,
stacktrace?: boolean
} 
	declare module.exports: typeof finalHandler

    }
