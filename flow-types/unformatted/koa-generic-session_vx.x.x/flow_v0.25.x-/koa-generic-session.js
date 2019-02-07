declare module 'koa-generic-session' {
        import typeof * as Koa from 'koa';

	
      declare var npm$namespace$koaSession: {
        
        MemoryStore: typeof koaSession$MemoryStore,
      }
declare interface koaSession$Session {
cookie: any,
[key: string]: any
} 

declare interface koaSession$SessionIdStore {
get(): any,
set(sid: string, session: koaSession$Session): void,
reset(): void
} 

declare interface koaSession$SessionStore {
(): koaSession$SessionStore,
get(sid: string): any,
set(sid: string, session: koaSession$Session, ttl: number): void,
destroy(sid: string): void
} 

declare interface koaSession$SessionOptions {
key?: string,
store?: koaSession$SessionStore,
ttl?: number,
prefix?: string,
cookie?: {
path?: string,
rewrite?: boolean,
signed?: boolean,
maxAge?: number,
secure?: boolean,
httpOnly?: boolean
},
allowEmpty?: boolean,
defer?: boolean,
reconnectTimeout?: number,
rolling?: boolean,
sessionIdStore?: koaSession$SessionIdStore,
genSid?: (length: number) => string,
errorHandler?: (error: Error, type: string, ctx: Koa.Context) => void,
valid?: (ctx: Koa.Context, session: koaSession$Session) => boolean,
beforeSave?: (ctx: Koa.Context, session: koaSession$Session) => void
} 

declare var koaSession$MemoryStore: koaSession$SessionStore;
	declare module 'koa' {
        declare interface Context {
session: koaSession$koaSession$Session | null,
sessionSave: boolean | null,
regenerateSession(): Generator
} 
    }

	declare function koaSession(options: koaSession$koaSession$SessionOptions): Koa.Middleware

	declare module.exports: typeof koaSession

    }
