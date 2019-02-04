declare module 'oauth-shim' {
        import typeof * as express from 'express';

	declare module.exports: typeof oauthShim

	declare var oauthShim: oauthShim$oauthShim$Handler;
	declare type oauthShim$Handler = {
interpret: express.RequestHandler,
proxy: express.RequestHandler,
redirect: express.RequestHandler,
unhandled: express.RequestHandler,
credentials: {
get(query: any, cb: (success: false | {[key: string]: any}) => void): void
},
init(configs: oauthShim$Config[]): void
} & express.RequestHandler


declare type oauthShim$Request = {
oauthshim?: {
options?: {
[key: string]: any,
path?: string
},
redirect?: string,
data?: {
[key: string]: any,
access_token?: string
}
}
} & express.oauthShim$Request


declare interface oauthShim$Config {
client_id: string,
client_secret: string,
grant_url: string,
domain: string
} 
    }
