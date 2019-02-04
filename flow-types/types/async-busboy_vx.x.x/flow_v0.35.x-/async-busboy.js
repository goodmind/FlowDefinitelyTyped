declare module 'async-busboy' {
        import typeof * as fs from 'fs';

	import typeof * as http from 'http';

	declare type Options = {
onFile: (
fieldname: string,
file: NodeJS.ReadableStream,
filename: string,
encoding: string,
mimetype: string) => void
} & busboy.BusboyConfig

	declare type AsyncBusboy = (
req: http.IncomingMessage,
options?: Options) => Promise<{
fields: {
[key: string]: any
},
files?: fs.ReadStream[]
}>;
	declare var asyncBusboy: AsyncBusboy;
	declare module.exports: typeof asyncBusboy

    }
