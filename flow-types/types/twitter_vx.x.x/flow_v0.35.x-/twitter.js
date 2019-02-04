declare module 'twitter' {
        import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof Twitter

	declare class Twitter  {
VERSION: string;
allow_promise: boolean;
request: typeof request;
constructor(options: Twitter$Twitter$AccessTokenOptions | Twitter$Twitter$BearerTokenOptions): this;
get(
path: string,
params: Twitter$Twitter$RequestParams,
callback: Twitter$Twitter$Callback): void;
get(path: string, callback: Twitter$Twitter$Callback): void;
get(
path: string,
params?: Twitter$Twitter$RequestParams): Promise<Twitter$Twitter$ResponseData>;
post(
path: string,
params: Twitter$Twitter$RequestParams,
callback: Twitter$Twitter$Callback): void;
post(path: string, callback: Twitter$Twitter$Callback): void;
post(
path: string,
params?: Twitter$Twitter$RequestParams): Promise<Twitter$Twitter$ResponseData>;
stream(
method: "user" | "site" | string,
params: {
[key: string]: any
},
callback: (stream: EventEmitter) => void): void;
stream(
method: "user" | "site" | string,
callback: (stream: EventEmitter) => void): void;
stream(
method: "user" | "site" | string,
params?: {
[key: string]: any
}): EventEmitter
}
	declare interface Twitter$Options {
consumer_key: string,
consumer_secret: string,
rest_base?: string,
stream_base?: string,
user_stream_base?: string,
site_stream_base?: string,
media_base?: string,
request_options?: request.CoreOptions
} 

declare type Twitter$AccessTokenOptions = {
access_token_key: string,
access_token_secret: string
} & Twitter$Options


declare type Twitter$BearerTokenOptions = {
bearer_token: string
} & Twitter$Options


declare type Twitter$Callback = (error: any, data: Twitter$ResponseData, response: request.Response) => void;

declare interface Twitter$RequestParams {
[key: string]: any,
base?: string
} 

declare interface Twitter$ResponseData {
[key: string]: any
} 
    }
