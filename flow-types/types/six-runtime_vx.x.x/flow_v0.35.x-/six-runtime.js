declare module 'six-runtime' {
        declare var six: Six;
	declare interface Six {

/**
 * process.env.NODE_ENV
 */
+NODE_ENV: string,

/**
 * NODE_ENV的缩短版
 * 
 * production、prod => prod
 * 
 * dev、develop、development => dev
 */
+ENV: string,

/**
 * Six的rootPath
 */
+ROOT_PATH: string,

/**
 * Six的plugin的map
 */
+plugins: Six$Six$PluginsMap,

/**
 * 针对这次请求生效的数据缓存 set
 */
set(key: string, value: any): void,

/**
 * 针对这次请求生效的数据缓存 get
 */
get(key: string): any,

/**
 * DataProvider类，所有的data-provider必须继承这个类
 */
dataProvider$DataProvider: Six$plugins.dataProvider.dataProvider$DataProvider,

/**
 * 执行某个data-provider，并返回执行之后的值
 */
dp(name: string): any,

/**
 * 发送请求的工具方法，会将用户的cookie和traceId透传过去
 */
plugins$http: Six$plugins.plugins$http,

/**
 * 打日志方法
 */
plugins$log: Six$plugins.plugins$log,

/**
 * rpc调用工具方法，返回ThriftPool实例
 */
plugins$rpc: Six$plugins.plugins$rpc,

/**
 * 时间统计工具
 */
time: Six$plugins.time.time$timmer,

/**
 * 渲染函数
 */
view$render: Six$plugins.view.view$render
} 
	declare interface Six$PluginsMap {
sso: plugins$sso.sso$ssoFactory,
upm: plugins$upm.upm$upmFactory,
uac: plugins$uac.uac$uacFactory,
static: plugins$static.static$staticFactory
} 

declare type Six$next = () => any;

declare type Six$middleware = (ctx: {[key: string]: any}, Six$next: Six$next) => any;

declare type plugins$whiteList = (ctx: {[key: string]: any}) => boolean;

declare type sso$ssoFactory = (conf: sso$ssoConf) => any;

declare interface sso$ssoConf {
plugins$whiteList: string | RegExp | string[] | plugins$whiteList,
sso$ssoConf: sso$ssoClientConf,
enableCache: boolean,
hasLoginCacheMaxAge: number,
adapter(user: {[key: string]: any}): {[key: string]: any}
} 

declare interface sso$ssoClientConf {
clientId: string,
secret: string,
env: string,
sso$token: sso$token,
protocol: string,
errorHook(error: Error): void,
callbackUrl: string
} 

declare interface sso$token {
name: string,
path: string,
httpOnly: boolean,
expiredTime: number
} 

declare type upm$upmFactory = (conf: upm$upmConf) => any;

declare interface upm$upmConf {
plugins$whiteList: string | RegExp | string[] | plugins$whiteList,
enableMock: boolean,
domain: string,
path: string,
clientId: string,
clientSecret: string,
skipOffline: boolean,
failHook(err: Error, ctx: {[key: string]: any}, Six$next: Six$next): any,
getPath(ctx: {[key: string]: any}): string
} 

declare type uac$uacFactory = (conf: uac$uacConf) => any;

declare interface uac$uacConf {
plugins$whiteList: string | RegExp | string[] | plugins$whiteList,
enableMock: boolean,
client_id: string,
client_secret: string,
skipOffline: boolean,
failHook(err: Error, ctx: {[key: string]: any}, Six$next: Six$next): any,
getPath(ctx: {[key: string]: any}): string
} 

declare class dataProvider$DataProvider  {
static deps: string[];
static timeout: number;
static retry: number;
prepare(ctx: {[key: string]: any}, depsRes: {[key: string]: any}): any;
execute(ctx: {[key: string]: any}, args: any): any
}

declare interface plugins$http {
proxy(options: {[key: string]: any}): Six$middleware,
get(url: any, options?: {[key: string]: any}): Promise<any>,
post(url: any, options?: {[key: string]: any}): Promise<any>,
put(url: any, options?: {[key: string]: any}): Promise<any>,
patch(url: any, options?: {[key: string]: any}): Promise<any>,
del(url: any, options?: {[key: string]: any}): Promise<any>,
head(url: any, options?: {[key: string]: any}): Promise<any>
} 

declare interface plugins$log {
debug(msg: string, ...restOfVar: any[]): void,
info(msg: string, ...restOfVar: any[]): void,
warn(msg: string, ...restOfVar: any[]): void,
error(msg: string | Error, ...restOfVar: any[]): void
} 

declare type plugins$rpc = (config: {[key: string]: any}) => {[key: string]: any};

declare type static$staticFactory = (conf: static$staticConf) => Six$middleware;

declare interface static$staticConf {
rootPath: string,
static$cacheConf: static$cacheConf
} 

declare interface static$cacheConf {
defer: boolean,
cache: boolean,
maxAge: number,
index: string,
gzip: boolean,
extensions: boolean | string[]
} 

declare interface time$timmer {
now(): any,
start(key: string): void,
end(key: string): number,
serialize(between?: string, end?: string, time$filter?: time$filter): string
} 

declare type time$filter = (key: string) => boolean;

declare type view$render = (
name: string,
view$runtimeConf?: view$runtimeConf | null,
data?: {[key: string]: any}) => Promise<any>;

declare interface view$runtimeConf {
codeKey: string,
msgKey: string,
dataKey: string
} 
    }
