declare module 'fxn' {
        declare export type HttpMethod = "GET"
| "POST"
| "PUT"
| "DELETE"
| "OPTIONS";
	declare export interface HttpHeaders {
[item: string]: string
} 
	declare export class Controller  {
_method: HttpMethod;
_path: string;
_requestHeaders: Object;
_headers: Object;
_status: number;
_responder: Function;
_securityPolicies: Object;
params: any;
constructor(path: string, method: string, requestHeaders: Object, params: Object, responder: Function): this;
convertMethod(method: HttpMethod, id: number): string;
run(): void;
notImplemented(msg: string, details: Object): boolean;
before(): void;
after(): void;
get(): void;
put(): void;
post(): void;
del(): void;
options(): void;
index(): void;
show(): void;
update(): void;
create(): void;
destroy(): void;
status(value: number): boolean;
setHeaders(): HttpHeaders;
setHeader(key: string, value: string): string;
appendHeader(key: string, value: string): string;
getHeader(key: string, value: string): string;
code(code: number): number;
getStatus(): number;
render(data: Buffer | String | Object): void;
allowOrigin(value: string): this;
securityPolicy(directive: string, src: string): string;
redirect(location: string): void
}
	declare export class Daemon  {
constructor(string: string): this
}
	declare export class Application  {
constructor(string: string): this;
send: Function
}
	declare export class Router  {}
	declare export class Scheduler  {}
    }
