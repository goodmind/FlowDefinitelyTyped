declare module 'restify-cookies' {
        import typeof * as restify from 'restify';

	declare module 'restify' {
        declare interface CookieOptions {
encode?: (input: string) => string,
maxAge?: number,
domain?: string,
path?: string,
expires?: Date,
httpOnly?: boolean,
secure?: boolean,
sameSite?: boolean | "lax" | "strict"
} 
	declare interface Request {
cookies: any
} 
	declare interface Response {
setCookie(key: string, val: string, options?: CookieOptions): void
} 
    }

    }
