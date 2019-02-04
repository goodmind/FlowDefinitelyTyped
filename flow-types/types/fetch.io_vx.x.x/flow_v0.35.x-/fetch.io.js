declare module 'fetch.io' {
        declare export type TUrl = string;
	declare export type TMethod = "delete"
| "get"
| "head"
| "options"
| "post"
| "put";
	declare export interface Query {
[key: string]: number | boolean | string
} 
	declare export interface Header {
[key: string]: string
} 
	declare export type Options = {
prefix?: string,
query?: Query,
header?: Header,
beforeRequest(url: TUrl, body: BodyInit): boolean | void,
afterResponse(res: Response): void,
afterJSON(body: any): void
} & RequestInit

	declare export class Request  {
constructor(method: TMethod, url: TUrl, options: Options): this;

/**
 * HTTP delete method
 */
delete: (url: TUrl) => this;

/**
 * HTTP get method
 */
get: (url: TUrl) => this;

/**
 * HTTP head method
 */
head: (url: TUrl) => this;

/**
 * HTTP options method
 */
options: (url: TUrl) => this;

/**
 * HTTP post method
 */
post: (url: TUrl) => this;

/**
 * HTTP put method
 */
put: (url: TUrl) => this;

/**
 * HTTP patch method
 */
patch: (url: TUrl) => this;

/**
 * Set Options
 */
config(key: string, value: any): this;
config(opts: {
[key: string]: any
}): this;

/**
 * Set Header
 */
set(key: string, value: any): this;
set(opts: {
[key: string]: any
}): this;

/**
 * Set Content-Type
 */
type(type: "json" | "form" | "urlencoded"): this;

/**
 * Add query string
 */
query(object: {
[key: string]: any
}): this;

/**
 * Send data
 */
send(data: {
[key: string]: any
}): this;

/**
 * append formData
 */
append(key: string, value: any): this;
append(object: {
[key: string]: any
}): this;

/**
 * Get Response directly
 */
then(
resolve: (value?: Response) => void,
reject?: (reason?: any) => void): Promise<any>;

/**
 * Make Response to JSON
 */
json(strict?: boolean): Promise<any>;

/**
 * Make Response to string
 */
text(): Promise<string>
}
	declare export default class Fetch mixins Request {
constructor(options?: Options): this
}
    }
