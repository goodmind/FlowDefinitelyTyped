declare module 'into-stream' {
        declare module.exports: typeof intoStream

	declare function intoStream(
input: intoStream$intoStream$Input | Promise<intoStream$intoStream$Input>): NodeJS.ReadableStream

	
      declare var npm$namespace$intoStream: {
        obj: typeof intoStream$obj,
        
      }
declare function intoStream$obj(
input: {[key: string]: any} | Iterable<{[key: string]: any}> | Promise<{[key: string]: any} | Iterable<{[key: string]: any}>>): NodeJS.ReadableStream


declare type intoStream$Input = Buffer | string | Iterable<Buffer | string>;
    }
