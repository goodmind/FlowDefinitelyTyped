declare module 'superagent' {
        import typeof * as fs from 'fs';

	import typeof * as https from 'https';

	import typeof * as stream from 'stream';

	import typeof * as cookiejar from 'cookiejar';

	declare type CallbackHandler = (err: any, res: request$request$Response) => void;
	declare type Serializer = (obj: any) => string;
	declare type BrowserParser = (str: string) => any;
	declare type NodeParser = (
res: request$request$Response,
callback: (err: Error | null, body: any) => void) => void;
	declare type Parser = BrowserParser | NodeParser;
	declare type MultipartValueSingle = Blob
| Buffer
| fs.ReadStream
| string
| boolean
| number;
	declare type MultipartValue = MultipartValueSingle | MultipartValueSingle[];
	declare var request: request$request$SuperAgentStatic;
	declare type request$SuperAgentRequest = {
agent(agent?: https.Agent): this,
cookies: string,
method: string,
url: string
} & request$Request


declare type request$SuperAgentStatic = {
(url: string): request$SuperAgentRequest,
(method: string, url: string): request$SuperAgentRequest,
agent(): this & request$Request,
serialize: {
[type: string]: Serializer
},
parse: {
[type: string]: Parser
}
} & request$SuperAgent<request$SuperAgentRequest>


declare type request$SuperAgent<Req: request$SuperAgentRequest> = {
jar: cookiejar.CookieJar,
attachCookies(req: Req): void,
checkout(url: string, callback?: CallbackHandler): Req,
connect(url: string, callback?: CallbackHandler): Req,
copy(url: string, callback?: CallbackHandler): Req,
del(url: string, callback?: CallbackHandler): Req,
delete(url: string, callback?: CallbackHandler): Req,
get(url: string, callback?: CallbackHandler): Req,
head(url: string, callback?: CallbackHandler): Req,
lock(url: string, callback?: CallbackHandler): Req,
merge(url: string, callback?: CallbackHandler): Req,
mkactivity(url: string, callback?: CallbackHandler): Req,
mkcol(url: string, callback?: CallbackHandler): Req,
move(url: string, callback?: CallbackHandler): Req,
notify(url: string, callback?: CallbackHandler): Req,
options(url: string, callback?: CallbackHandler): Req,
patch(url: string, callback?: CallbackHandler): Req,
post(url: string, callback?: CallbackHandler): Req,
propfind(url: string, callback?: CallbackHandler): Req,
proppatch(url: string, callback?: CallbackHandler): Req,
purge(url: string, callback?: CallbackHandler): Req,
put(url: string, callback?: CallbackHandler): Req,
report(url: string, callback?: CallbackHandler): Req,
saveCookies(res: request$Response): void,
search(url: string, callback?: CallbackHandler): Req,
subscribe(url: string, callback?: CallbackHandler): Req,
trace(url: string, callback?: CallbackHandler): Req,
unlock(url: string, callback?: CallbackHandler): Req,
unsubscribe(url: string, callback?: CallbackHandler): Req
} & stream.Stream


declare type request$ResponseError = {
status: number,
text: string,
method: string,
path: string
} & Error


declare type request$Response = {
accepted: boolean,
badRequest: boolean,
body: any,
charset: string,
clientError: boolean,
error: request$ResponseError,
files: any,
forbidden: boolean,
get(header: string): string,
get(header: "Set-Cookie"): string[],
header: any,
info: boolean,
links: {[key: string]: any},
noContent: boolean,
notAcceptable: boolean,
notFound: boolean,
ok: boolean,
redirect: boolean,
serverError: boolean,
status: number,
statusType: number,
text: string,
type: string,
unauthorized: boolean,
xhr: XMLHttpRequest
} & NodeJS.ReadableStream


declare type request$Request = {
abort(): void,
accept(type: string): this,
attach(
field: string,
file: MultipartValueSingle,
options?: string | {
filename?: string,
contentType?: string
}): this,
auth(user: string, pass: string, options?: {
type: "basic" | "auto"
}): this,
auth(token: string, options: {
type: "bearer"
}): this,
buffer(val?: boolean): this,
ca(cert: Buffer): this,
cert(cert: Buffer | string): this,
clearTimeout(): this,
end(callback?: CallbackHandler): this,
field(name: string, val: MultipartValue): this,
field(fields: {
[fieldName: string]: MultipartValue
}): this,
get(field: string): string,
key(cert: Buffer | string): this,
ok(callback: (res: request$Response) => boolean): this,
on(name: "error", handler: (err: any) => void): this,
on(name: "progress", handler: (event: request$ProgressEvent) => void): this,
on(name: string, handler: (event: any) => void): this,
parse(parser: Parser): this,
part(): this,
pfx(cert: Buffer | string | {
pfx: Buffer,
passphrase: string
}): this,
pipe(stream: NodeJS.WritableStream, options?: {[key: string]: any}): stream.Writable,
query(val: {[key: string]: any} | string): this,
redirects(n: number): this,
responseType(type: string): this,
retry(count?: number, callback?: CallbackHandler): this,
send(data?: string | {[key: string]: any}): this,
serialize(serializer: Serializer): this,
set(field: {[key: string]: any}): this,
set(field: string, val: string): this,
set(field: "Cookie", val: string[]): this,
timeout(ms: number | {
deadline?: number,
response?: number
}): this,
type(val: string): this,
unset(field: string): this,
use(fn: request$Plugin): this,
withCredentials(): this,
write(data: string | Buffer, encoding?: string): this
} & Promise<request$Response>


declare type request$Plugin = (req: request$SuperAgentRequest) => void;

declare interface request$ProgressEvent {
direction: "download" | "upload",
loaded: number,
percent?: number,
total?: number
} 
	declare module.exports: typeof request

    }
