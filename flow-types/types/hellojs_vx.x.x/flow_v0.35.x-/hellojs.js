declare module 'hellojs' {
        declare module.exports: typeof hello

	declare var hello: hello$hello$HelloJSStatic;
	declare interface hello$HelloJSUtils {
extend(r: {[key: string]: any}, ...a: any[]): any,
error(code: number, message: string): {
code: number,
message: string
},
qs(
url: string,
params?: {[key: string]: any},
formatFunction?: (param: any) => string): string,
param(o: {[key: string]: any}, formatFunction?: (param: any) => string): string,
param(s: string, formatFunction?: (param: string) => any): any,
store(name?: string, value?: any): any,
append(
node: string | HTMLElement,
attr: {[key: string]: any} | void | null,
target: string | HTMLElement): HTMLElement,
iframe(src: string, redirectUri?: string): void,
merge(...a: any[]): any,
args(o: {[key: string]: any}, args: {[key: string]: any}): any | false,
url(): Location,
url(path: string): URL | HTMLAnchorElement,
diff(a: any[], b: any[]): any[],
diffKey(a: any[], b: any[]): any[],
unique(a: any[]): any[],
isEmpty(obj: any): boolean,
Event: hello$HelloJSEvent,
globalEvent(callback: () => void, guid?: string): string,
popup(
url: string,
redirectUri?: string,
options?: {[key: string]: any}): Window | any,
responseHandler(window: Window, parent?: any): void,
request(p: {[key: string]: any}, callback: hello$HelloJSResponseCallback): void,
request_cors(callback: hello$HelloJSResponseCallback): boolean,
domInstance(type: string, data: any): boolean,
clone<T>(obj: T): T,
xhr(
method: string,
url: string,
headers: {[key: string]: any},
data: any,
callback: hello$HelloJSResponseCallback): XMLHttpRequest,
jsonp(url: string, callback: () => void, callbackID?: string, timeout?: number): void,
post(
url: string,
data: any,
options: {[key: string]: any},
callback: hello$HelloJSResponseCallback,
callbackID?: string,
timeout?: number): void,
hasBinary(data: any): boolean,
isBinary(data: any): boolean,
toBlob(dataURI: string): Blob | string,
dataToJSON(p: any): any,
nodeListToJSON(nodelist: NodeList): any
} 

declare type hello$HelloJSResponseCallback = (r: any, headers: any) => void;

declare type hello$HelloJSTokenResponseType = "code"
| "code id_token"
| "code id_token token"
| "code token"
| "id_token"
| "id_token token"
| "none"
| "token";

declare type hello$HelloJSDisplayType = "popup" | "page" | "none";

declare interface hello$HelloJSLoginOptions {
redirect_uri?: string,
display?: hello$HelloJSDisplayType,
scope?: string,
response_type?: hello$HelloJSTokenResponseType,
force?: boolean | null,
oauth_proxy?: string,
timeout?: number,
default_service?: string,
popup?: hello$HelloJSPopupOptions,
state?: string
} 

declare interface hello$HelloJSLogoutOptions {
force?: boolean
} 

declare interface hello$HelloJSPopupOptions {
resizable: number,
scrollbars: number,
width: number,
height: number
} 

declare interface hello$HelloJSEvent {
on(
event: string,
callback: (auth: hello$HelloJSEventArgument) => void): hello$HelloJSStatic,
off(
event: string,
callback: (auth: hello$HelloJSEventArgument) => void): hello$HelloJSStatic,
findEvents(event: string, callback: (name: string, index: number) => void): void,
emit(event: string, data: any): hello$HelloJSStatic,
emitAfter(): hello$HelloJSStatic
} 

declare interface hello$HelloJSEventArgument {
network: string,
authResponse?: hello$HelloJSAuthResponse
} 

declare interface hello$HelloJSLoginEventArguement {
network: string,
authResponse?: hello$HelloJSAuthResponse,
error?: Error
} 

declare interface hello$HelloJSAuthResponse {
access_token?: string,
token_type?: string,
expires_in?: number,
id_token?: string,
state?: string,
session_state?: string,
network?: string,
display?: hello$HelloJSDisplayType,
redirect_uri?: string,
scope?: string,
expires?: number
} 

declare type hello$HelloJSStatic = {
init(
serviceAppIds: {
[id: string]: string
},
options?: hello$HelloJSLoginOptions): void,
init(servicesDef: {
[id: string]: hello$HelloJSServiceDef
}): void,
login(callback: () => void): PromiseLike<hello$HelloJSLoginEventArguement>,
login(
options?: hello$HelloJSLoginOptions,
callback?: () => void): PromiseLike<hello$HelloJSLoginEventArguement>,
login(
network?: string,
options?: hello$HelloJSLoginOptions,
callback?: () => void): PromiseLike<hello$HelloJSLoginEventArguement>,
logout(callback?: () => void): PromiseLike<any>,
logout(options?: hello$HelloJSLogoutOptions, callback?: () => void): PromiseLike<any>,
logout(
network?: string,
options?: hello$HelloJSLogoutOptions,
callback?: () => void): PromiseLike<any>,
getAuthResponse(network?: string): hello$HelloJSAuthResponse,
settings: hello$HelloJSLoginOptions,
(network: string): hello$HelloJSStatic,
utils: hello$HelloJSUtils,
api(options: {[key: string]: any}): PromiseLike<any>,
api(
path?: string,
method?: string,
data?: {[key: string]: any},
callback?: (json: any) => void): PromiseLike<any>,
api(
path?: string,
query?: {[key: string]: any},
method?: string,
data?: {[key: string]: any},
timeout?: number,
callback?: (json: any) => void): PromiseLike<any>
} & hello$HelloJSEvent


declare interface hello$HelloJSOAuthDef {
version: string | number,
auth?: string
} 

declare type hello$HelloJSOAuth2Def = {
grant?: string,
response_type?: hello$HelloJSTokenResponseType
} & hello$HelloJSOAuthDef


declare type hello$HelloJSOAuth1Def = {
request?: string,
token?: string
} & hello$HelloJSOAuthDef


declare type hello$HelloJSUrlMappingFunction = (p: any, callback: (url: string) => void) => void;

declare interface hello$HelloJSServiceDef {
name?: string,
oauth: hello$HelloJSOAuth2Def | hello$HelloJSOAuth1Def,
scope?: {
[id: string]: string
},
scope_delim?: string,
refresh?: boolean,
base?: string,
root?: string,
get?: {
[id: string]: string | hello$HelloJSUrlMappingFunction
},
post?: {
[id: string]: string | hello$HelloJSUrlMappingFunction
},
del?: {
[id: string]: string | hello$HelloJSUrlMappingFunction
},
put?: {
[id: string]: string | hello$HelloJSUrlMappingFunction
},
patch?: {
[id: string]: string | hello$HelloJSUrlMappingFunction
},
wrap?: {
[id: string]: (r: any, headers: any, p: any) => void
},
xhr(p: any, query: any): void,
jsonp?: ((p: any, query: any) => void) | boolean,
form?: ((p: any, query: any) => void) | boolean,
login(p: any): void,
logout?: ((callback: () => void | string) => void) | string
} 
    }
