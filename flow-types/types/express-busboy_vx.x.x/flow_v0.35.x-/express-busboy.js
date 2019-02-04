declare module 'express-busboy' {
        import typeof * as connectBusboy from 'connect-busboy';

	import typeof * as express from 'express';

	declare export type ExpressBusboyOptions = {
upload?: number,
path?: string,
allowedPath?: string | RegExp | ((url: string) => boolean),
restrictMultiple?: boolean,
mimeTypeLimit?: string | string[]
} & connectBusboy.ConnectBusboyOptions

	declare export function extend(app: express.Application, options?: ExpressBusboyOptions): express.Application

    }
