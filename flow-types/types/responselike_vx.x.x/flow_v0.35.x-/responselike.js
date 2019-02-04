declare module 'responselike' {
        import type {
          IncomingMessage
        } from 'http';

	import type {
          Stream
        } from 'stream';

	declare module.exports: typeof ResponseLike

	
/**
 * Returns a streamable response object similar to a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 */
declare class ResponseLike mixins Stream.Readable {
statusCode: number;
headers: {
[header: string]: string | string[] | void
};
body: Buffer;
url: string;

/**
 * @param statusCode HTTP response status code.
 * @param headers HTTP headers object. Keys will be automatically lowercased.
 * @param body A Buffer containing the response body. The Buffer contents will be streamable but is also exposed directly as `response.body`.
 * @param url Request URL string.
 */
constructor(statusCode: number, headers: {
[header: string]: string | string[] | void
}, body: Buffer, url: string): this
}
    }
