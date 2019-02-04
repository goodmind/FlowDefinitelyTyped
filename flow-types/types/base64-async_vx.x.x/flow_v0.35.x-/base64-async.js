declare module 'base64-async' {
        declare module.exports: typeof base64Async

	declare function base64Async(input: Buffer, options?: base64Async$base64Async$Options): Promise<string>

	declare function base64Async(input: string, options?: base64Async$base64Async$Options): Promise<Buffer>

	
      declare var npm$namespace$base64Async: {
        encode: typeof base64Async$encode,
decode: typeof base64Async$decode,
        
      }
declare function base64Async$encode(input: Buffer, options?: base64Async$Options): Promise<string>


declare function base64Async$decode(input: string, options?: base64Async$Options): Promise<Buffer>


declare interface base64Async$Options {
chunkSize?: number
} 
    }
