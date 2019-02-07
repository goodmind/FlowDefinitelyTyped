declare module 'koa-session' {
        declare type Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;
	
/**
 * Session model.
 */
declare interface session$Session {

/**
 * JSON representation of the session.
 */
toJSON(): {[key: string]: any},

/**
 * alias to `toJSON`
 */
inspect(): {[key: string]: any},

/**
 * Return how many values there are in the session object.
 * Used to see if it"s "populated".
 */
+length: number,

/**
 * populated flag, which is just a boolean alias of .length.
 */
+populated: boolean,

/**
 * get/set session maxAge
 */
maxAge: $ElementType<session$opts, "maxAge">,

/**
 * save this session no matter whether it is populated
 */
save(): void,

/**
 * allow to put any value on session object
 */
[_: string]: any
} 

declare interface session$ContextSession {
ctx: Koa.Context,
app: $ElementType<Koa.Context, "app">,
session$opts: session$opts,
store: session$stores,
session: session$Session | false,

/**
 * internal logic of `ctx.session`
 */
get(): session$Session,

/**
 * internal logic of `ctx.session=`
 */
set(val: any): void,
prevHash: string,

/**
 * init session from external store
 * will be called in the front of session middleware
 */
initFromExternal(): Promise<void>,

/**
 * Commit the session changes or removal.
 */
commit(): Promise<void>
} 

declare interface session$util {

/**
 * Decode the base64 cookie value to an object.
 */
decode(str: string): {[key: string]: any},

/**
 * Encode an object into a base64-encoded JSON string.
 */
encode(obj: {[key: string]: any}): string,
hash(sess: any): string
} 

declare type session$opts = {

/**
 * cookie key (default is koa:sess)
 */
key: string,

/**
 * maxAge in ms (default is 1 days)
 * "session" will result in a cookie that expires when session/browser is closed
 * Warning: If a session cookie is stolen, this cookie will never expire
 */
maxAge?: number | "session",

/**
 * custom encode method
 */
encode: $ElementType<session$util, "encode">,

/**
 * custom decode method
 */
decode: $ElementType<session$util, "decode">,

/**
 * The way of generating external session id is controlled by the options.genid, which defaults to Date.now() + "-" + uid.sync(24).
 */
genid: () => string,

/**
 * Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false
 */
rolling?: boolean,

/**
 * Renew session when session is nearly expired, so we can always keep user logged in. (default is false)
 */
renew?: boolean,

/**
 * You can store the session content in external stores(redis, mongodb or other DBs)
 */
store?: session$stores,

/**
 * If your session store requires data or utilities from context, opts.ContextStore is alse supported.
 * ContextStore must be a class which claims three instance methods demonstrated above.
 * new ContextStore(ctx) will be executed on every request.
 */
ContextStore?: {
new (ctx: Koa.Context): session$stores
},

/**
 * If you want to add prefix for all external session id, you can use options.prefix, it will not work if options.genid present.
 */
prefix?: string,

/**
 * Hook: valid session value before use it
 */
valid?: (ctx: Koa.Context, session: $Shape<session$Session>) => void,

/**
 * Hook: before save session
 */
beforeSave?: (ctx: Koa.Context, session: session$Session) => void
} & Omit<Cookies.SetOption, "maxAge">


declare interface session$stores {

/**
 * get session object by key
 */
get(
key: string,
maxAge: $ElementType<session$opts, "maxAge">,
data: {
rolling: $ElementType<session$opts, "rolling">
}): any,

/**
 * set session object for key, with a maxAge (in ms)
 */
set(
key: string,
sess: $Shape<session$Session> & {
_expire?: number,
_maxAge?: number
},
maxAge: $ElementType<session$opts, "maxAge">,
data: {
changed: boolean,
rolling: $ElementType<session$opts, "rolling">
}): any,

/**
 * destroy session for key
 */
destroy(key: string): any
} 
	declare function session(CONFIG: $Shape<session$session$opts>, app: Koa): Koa.Middleware

	declare function session(app: Koa): Koa.Middleware

	declare module 'koa' {
        declare interface Context {
session: session$session$Session | null,
+sessionOptions: session$session$opts | void
} 
	declare interface Application {
on(
name: "session:missed" | "session:expired" | "session:invalid",
data: {
key?: string,
value?: $Shape<session$session$Session>,
ctx: Context
}): void,
once(
name: "session:missed" | "session:expired" | "session:invalid",
data: {
key?: string,
value?: $Shape<session$session$Session>,
ctx: Context
}): void
} 
    }

	declare module.exports: typeof session

    }
