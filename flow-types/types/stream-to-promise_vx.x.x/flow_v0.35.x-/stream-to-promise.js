declare module 'stream-to-promise' {
        
/**
 * Return a promise which resolves when the input stream ends
 * @param stream The input stream
 * @returns A promise containing the stream output as a buffer
 */
declare function streamToPromise(stream: NodeJS.ReadableStream): Promise<Buffer>

	
/**
 * Return s promise which resolves when the input stream ends
 * @param stream The input stream
 */
declare function streamToPromise(stream: NodeJS.WritableStream): Promise<void>

	declare module.exports: typeof streamToPromise

    }
