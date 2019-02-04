declare module 'rest' {
        declare module.exports: typeof rest

	declare function rest(path: string): rest$rest$ResponsePromise

	declare function rest(request: rest$rest$Request): rest$rest$ResponsePromise

	
      declare var npm$namespace$rest: {
        setDefaultClient: typeof rest$setDefaultClient,
getDefaultClient: typeof rest$getDefaultClient,
resetDefaultClient: typeof rest$resetDefaultClient,
wrap: typeof rest$wrap,
        
      }
declare export function rest$setDefaultClient(client: rest$Client): void


declare export function rest$getDefaultClient(): rest$Client


declare export function rest$resetDefaultClient(): void


declare export function rest$wrap<T>(interceptor: rest$Interceptor<T>, config?: T): rest$Client


declare export interface rest$Request {
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
canceled?: boolean,
cancel?: () => void,
originator?: (request?: rest$Request) => rest$ResponsePromise
} 

declare export interface rest$Status {
code: number,
text?: string
} 

declare export interface rest$Headers {
[index: string]: any
} 

declare export interface rest$Response {
request: rest$Request,
raw: any,
status: rest$Status,
headers: rest$Headers,
entity: any
} 

declare export type rest$ResponsePromise = {
entity(): when.Promise<any>,
status(): when.Promise<number>,
headers(): when.Promise<rest$Headers>,
header(headerName: string): when.Promise<any>
} & when.Promise<rest$Response>


declare export interface rest$Interceptor<T> {
(parent?: rest$Client, config?: T): rest$Client
} 

declare export interface rest$Client {
(path: string): rest$ResponsePromise,
(request: rest$Request): rest$ResponsePromise,
skip(): rest$Client,
wrap<T>(interceptor: rest$Interceptor<T>, config?: T): rest$Client
} 

declare export interface rest$Meta {
client: rest$Client,
arguments: any
} 
    }
declare module 'rest/interceptor' {
        declare function interceptor<T, U>(config: interceptor$jsonp$Config<T, U>): rest$rest$Interceptor<T>

	declare interface interceptor$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof interceptor

    }
declare module 'rest/interceptor/defaultRequest' {
        declare var defaultRequest: rest$rest$Interceptor<defaultRequest$interceptor$Config>;
	declare interface defaultRequest$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof defaultRequest

    }
declare module 'rest/interceptor/hateoas' {
        declare var hateoas: rest$rest$Interceptor<hateoas$defaultRequest$Config>;
	declare interface hateoas$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof hateoas

    }
declare module 'rest/interceptor/location' {
        declare var location: rest$rest$Interceptor<location$hateoas$Config>;
	declare interface location$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof location

    }
declare module 'rest/interceptor/mime' {
        declare var mime: rest$rest$Interceptor<mime$location$Config>;
	declare interface mime$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof mime

    }
declare module 'rest/interceptor/pathPrefix' {
        declare var pathPrefix: rest$rest$Interceptor<pathPrefix$mime$Config>;
	declare interface pathPrefix$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof pathPrefix

    }
declare module 'rest/interceptor/basicAuth' {
        declare var basicAuth: rest$rest$Interceptor<basicAuth$pathPrefix$Config>;
	declare interface basicAuth$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof basicAuth

    }
declare module 'rest/interceptor/oAuth' {
        declare var oAuth: rest$rest$Interceptor<oAuth$basicAuth$Config>;
	declare interface oAuth$DismissWindow {
(): void
} 

declare interface oAuth$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof oAuth

    }
declare module 'rest/interceptor/csrf' {
        declare var csrf: rest$rest$Interceptor<csrf$oAuth$Config>;
	declare interface csrf$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof csrf

    }
declare module 'rest/interceptor/errorCode' {
        declare var errorCode: rest$rest$Interceptor<errorCode$csrf$Config>;
	declare interface errorCode$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof errorCode

    }
declare module 'rest/interceptor/retry' {
        declare var retry: rest$rest$Interceptor<retry$errorCode$Config>;
	declare interface retry$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof retry

    }
declare module 'rest/interceptor/template' {
        declare var template: rest$rest$Interceptor<template$retry$Config>;
	declare interface template$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof template

    }
declare module 'rest/interceptor/timeout' {
        declare var timeout: rest$rest$Interceptor<timeout$template$Config>;
	declare interface timeout$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof timeout

    }
declare module 'rest/interceptor/jsonp' {
        declare var jsonp: rest$rest$Interceptor<jsonp$timeout$Config>;
	declare interface jsonp$Config<T, U> {
init?: (config: T) => U,
request?: (
request: rest$rest$Request,
config: U,
meta: rest$rest$Meta) => rest$rest$Request | when.Promise<rest$rest$Request>,
response?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
success?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
error?: (
response: rest$rest$Response,
config: U,
meta: rest$rest$Meta) => rest$rest$Response | when.Promise<rest$rest$Response>,
method?: string,
path?: string,
params?: any,
headers?: any,
entity?: any,
mixin?: any,
target?: string,
client?: rest$rest$Client,
client?: rest$rest$Client,
code?: number,
mime?: string,
accept?: string,
registry?: registry$registry$Registry,
permissive?: boolean,
prefix?: string,
username?: string,
password?: string,
token?: string,
clientId?: string,
scope?: string,
authorizationUrl?: string,
redirectUrl?: string,
windowStrategy?: (url: string) => oAuth$DismissWindow,
oAuthCallback?: (hash: string) => void,
oAuthCallbackName?: string,
name?: string,
token?: string,
code?: number,
initial?: number,
multiplier?: number,
max?: number,
template?: string,
params?: {
[name: string]: any
},
timeout?: number,
transient?: boolean,
callback?: {
param?: string,
prefix?: string,
name?: string
}
} 
	declare module.exports: typeof jsonp

    }
declare module 'rest/interceptor/ie/xdomain' {
        declare var xdomain: rest$rest$Interceptor<{}>;
	declare module.exports: typeof xdomain

    }
declare module 'rest/interceptor/ie/xhr' {
        declare var xhr: rest$rest$Interceptor<{}>;
	declare module.exports: typeof xhr

    }
declare module 'rest/mime/registry' {
        declare var registry: registry$registry$Registry;
	declare interface registry$MIMEConverter {
read(value: string): any | when.Promise<any>,
write(value: any): string | when.Promise<string>
} 

declare interface registry$Registry {
lookup(mimeType: string): when.Promise<registry$MIMEConverter>,
register(mimeType: string, converter: registry$MIMEConverter): void
} 
	declare module.exports: typeof registry

    }
declare module 'rest/client/xhr' {
        declare var xhr: rest$rest$Client;
	declare module.exports: typeof xhr

    }
declare module 'rest/client/node' {
        declare var node: rest$rest$Client;
	declare module.exports: typeof node

    }
declare module 'rest/client/jsonp' {
        declare var jsonp: rest$rest$Client;
	declare module.exports: typeof jsonp

    }
declare module 'rest/client/xdr' {
        declare var xdr: rest$rest$Client;
	declare module.exports: typeof xdr

    }
