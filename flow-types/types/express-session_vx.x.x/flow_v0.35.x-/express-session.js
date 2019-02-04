declare module 'express-session' {
        declare module 'global' {
        declare interface Express$Request {
session?: Express$Session,
sessionID?: string
} 

declare interface Express$SessionData {
[key: string]: any,
cookie: Express$SessionCookieData
} 

declare interface Express$SessionCookieData {
originalMaxAge: number,
path: string,
maxAge: number | null,
secure?: boolean,
httpOnly: boolean,
domain?: string,
expires: Date | boolean,
sameSite?: boolean | string
} 

declare type Express$SessionCookie = {
serialize(name: string, value: string): string
} & Express$SessionCookieData


declare type Express$Session = {
id: string,
regenerate(callback: (err: any) => void): void,
destroy(callback: (err: any) => void): void,
reload(callback: (err: any) => void): void,
save(callback: (err: any) => void): void,
touch(callback: (err: any) => void): void,
cookie: Express$SessionCookie
} & Express$SessionData

    }

	declare function session(options?: session$session$SessionOptions): express.RequestHandler

	declare interface session$SessionOptions {
secret: string | string[],
name?: string,
store?: session$Store | session$MemoryStore,
cookie?: express.CookieOptions,
genid(req: express.Express$Request): string,
rolling?: boolean,
resave?: boolean,
proxy?: boolean,
saveUninitialized?: boolean,
unset?: string
} 

declare interface session$BaseMemoryStore {
get: (
sid: string,
callback: (err: any, session?: Express$Express$SessionData | null) => void) => void,
set: (
sid: string,
session: Express$Express$Session,
callback?: (err?: any) => void) => void,
destroy: (sid: string, callback?: (err?: any) => void) => void,
length?: (callback: (err: any, length?: number | null) => void) => void,
clear?: (callback?: (err?: any) => void) => void
} 

declare class session$Store mixins node.EventEmitter {
constructor(config?: any): this;
regenerate: (req: express.Express$Request, fn: (err?: any) => any) => void;
load: (
sid: string,
fn: (err: any, session?: Express$Express$SessionData | null) => any) => void;
createSession: (req: express.Express$Request, sess: Express$Express$SessionData) => void;
get: (
sid: string,
callback: (err: any, session?: Express$Express$SessionData | null) => void) => void;
set: (
sid: string,
session: Express$Express$SessionData,
callback?: (err?: any) => void) => void;
destroy: (sid: string, callback?: (err?: any) => void) => void;
all: (
callback: (err: any, obj?: {
[sid: string]: Express$Express$SessionData
} | null) => void) => void;
length: (callback: (err: any, length?: number | null) => void) => void;
clear: (callback?: (err?: any) => void) => void;
touch: (
sid: string,
session: Express$Express$SessionData,
callback?: (err?: any) => void) => void
}

declare class session$MemoryStore mixins session$BaseMemoryStore {
get: (
sid: string,
callback: (err: any, session?: Express$Express$SessionData | null) => void) => void;
set: (
sid: string,
session: Express$Express$SessionData,
callback?: (err?: any) => void) => void;
destroy: (sid: string, callback?: (err?: any) => void) => void;
all: (
callback: (err: any, obj?: {
[sid: string]: Express$Express$SessionData
} | null) => void) => void;
length: (callback: (err: any, length?: number | null) => void) => void;
clear: (callback?: (err?: any) => void) => void;
touch: (
sid: string,
session: Express$Express$SessionData,
callback?: (err?: any) => void) => void
}
	declare module.exports: typeof session

    }
