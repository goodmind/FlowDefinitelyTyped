declare module 'msgpack' {
        declare interface msgpack$MsgPackStatic {

/**
 * @param data string or ByteArray.
 * @param toString return string value if true.
 * @return string or ByteArray or false. pack failed if false.
 */
pack(data: any, function toString() { [native code] }?: boolean): any,

/**
 * @param data string or ByteArray.
 * @return string or ByteArray or undefined. unpack failed if undefined.
 */
unpack(data: any): any,
worker: string,
upload(
url: string,
option: msgpack$MsgPackUploadOption,
callback: msgpack$MsgPackUploadCallback): void,
download(
url: string,
option: msgpack$MsgPackDownloadOption,
callback: msgpack$MsgPackDownloadCallback): void
} 

declare interface msgpack$MsgPackUploadOption {

/**
 * string or ByteArray
 */
data: any,

/**
 * use WebWorker if true.
 */
worker?: boolean,

/**
 * timeout sec.
 */
timeout?: number,
before?: (xhr: XMLHttpRequest, option: msgpack$MsgPackUploadOption) => void,
after?: (
xhr: XMLHttpRequest,
option: msgpack$MsgPackUploadOption,
result: msgpack$MsgPackCallbackResult) => void
} 

declare interface msgpack$MsgPackUploadCallback {
(data: string, option: msgpack$MsgPackUploadOption, result: msgpack$MsgPackCallbackResult): void
} 

declare interface msgpack$MsgPackDownloadOption {

/**
 * use WebWorker if true.
 */
worker?: boolean,

/**
 * timeout sec.
 */
timeout?: number,
before?: (xhr: XMLHttpRequest, option: msgpack$MsgPackDownloadOption) => void,
after?: (
xhr: XMLHttpRequest,
option: msgpack$MsgPackDownloadOption,
result: msgpack$MsgPackCallbackResult) => void
} 

declare interface msgpack$MsgPackDownloadCallback {

/**
 * @param data string or ByteArray
 */
(data: any, option: msgpack$MsgPackDownloadOption, result: msgpack$MsgPackCallbackResult): void
} 

declare interface msgpack$MsgPackCallbackResult {
status: number,
ok: boolean
} 
	declare var msgpack: msgpack$msgpack$MsgPackStatic;
	declare module.exports: typeof msgpack

    }
