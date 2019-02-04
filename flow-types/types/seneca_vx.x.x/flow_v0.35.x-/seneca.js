declare module 'seneca' {
        declare function SNS(options?: SNS$SNS$Options): SNS$SNS$Instance

	declare type SNS$UnknownType = any;

declare interface SNS$Options {
[plugin_name: string]: any,
tag?: string,
idlen?: number,
timeout?: number,
default_plugins?: {
basic?: boolean,
"mem-store"?: boolean,
transport?: boolean,
web?: boolean
},
repl?: {
port?: number,
host?: string
},
debug?: {
fragile?: boolean,
undead?: boolean,
print?: {
options?: boolean
},
act_caller?: boolean,
short_logs?: boolean,
callpoint?: boolean
},
strict?: {
result?: boolean,
fixedargs?: boolean,
add?: boolean
},
actcache?: {
active?: boolean,
size?: number
},
trace?: {
act?: boolean,
stack?: boolean,
unknown?: string
},
stats?: {
size?: number,
interval?: number,
running?: boolean
},
deathdelay?: number,
admin?: {
local?: boolean,
prefix?: string
},
plugin?: any,
internal?: {
close_signals?: {
SIGHUP?: boolean,
SIGTERM?: boolean,
SIGINT?: boolean,
SIGBREAK?: boolean
},
actrouter?: SNS$UnknownType,
clientrouter?: SNS$UnknownType,
subrouter?: SNS$UnknownType
},
status?: {
interval?: number,
running?: boolean
},
zig?: any,
log?: SNS$LogSpec | {
level?: SNS$LogLevel,
short?: boolean
},
errhandler?: SNS$GlobalErrorHandler
} 

declare interface SNS$MinimalPattern {} 

declare type SNS$LogSpec = "quiet"
| "silent"
| "any"
| "all"
| "print"
| "standard"
| "test";

declare type SNS$LogLevel = "none" | "debug+" | "info+" | "warn+";

declare interface SNS$Optioner {
set: (input: string | SNS$Options) => SNS$Options,
get: () => SNS$Options
} 

declare type SNS$ExecutorWorker = (callback: any) => void;

declare type SNS$ExecutorCallback = (err: Error, result: any) => void;

declare interface SNS$Executor {
id: string,
desc: string,
fn: SNS$ExecutorWorker,
cb: SNS$ExecutorCallback,
gate: boolean,
ungate: boolean,
execute: SNS$UnknownType
} 

declare interface SNS$PluginOptions {} 

declare type SNS$PluginModule = (options: any) => void;

declare interface SNS$ClientOptions {} 

declare interface SNS$ListenOptions {} 

declare interface SNS$EntityDataWithQuery {
[entityKey: string]: any,
id?: string,
sort$?: any
} 

declare interface SNS$PartialMessagePayload {
transport$: {[key: string]: any} | {},
plugin$: any,
fatal$: boolean,
tx$: string
} 

declare type SNS$MessagePayload<T> = SNS$PartialMessagePayload & T;

declare type SNS$Pattern = string | SNS$MinimalPattern;

declare type SNS$GlobalErrorHandler = (error: Error) => void;

declare type SNS$AddCallback<T> = (
msg: SNS$MessagePayload<T>,
respond: (error: Error | null, msg?: any) => void) => void;

declare type SNS$ActCallback = (error: Error | null, result?: any) => void;

declare type SNS$CloseCallback = (optional: any, done: (error: Error) => void) => void;

declare type SNS$DatabaseID = string;

declare type SNS$EntitySaveCallback = (error: Error, result: any) => void;

declare type SNS$EntityLoadCallback = (error: Error, result: any) => void;

declare type SNS$EntityRemoveCallback = (error: Error) => void;

declare type SNS$EntityListCallback = (error: Error, result: any[]) => void;

declare interface SNS$Instance {
version: string,
options(options: SNS$Options): void,
error(handler: SNS$GlobalErrorHandler): void,
on(eventName: string, callback: (error: Error) => void): any,
close(callback: SNS$CloseCallback): void,
use(module: SNS$PluginModule, options?: SNS$PluginOptions): this,
use(name: string, options?: SNS$PluginOptions): this,
client(options?: SNS$ClientOptions): this,
listen(options?: SNS$ListenOptions): this,
ready(callback: (error: Error) => void): void,
add<PatternType, CallBackParams>(
pattern: PatternType,
action: SNS$AddCallback<PatternType & CallBackParams>): this,
add<PatternType, CallbackParams>(
pattern: PatternType,
paramspec: any,
action: SNS$AddCallback<PatternType & CallbackParams>): this,
act<PatternWithArgs>(pattern: PatternWithArgs, respond: SNS$ActCallback): void,
act<PatternWithArgs>(
pattern: PatternWithArgs,
msg: any,
respond: SNS$ActCallback): void,
make(entity_canon: string, properties?: any): SNS$Entity,
make(base: string, entity_canon: string, properties?: any): SNS$Entity,
make(zone: string, base: string, entity_canon: string, properties?: any): SNS$Entity,
export(name: string): SNS$PluginModule,
pin(pattern: SNS$Pattern): void
} 

declare interface SNS$Entity {
(canon: any, seneca: any): void,
[fieldname: string]: any,
make$(): SNS$Entity,
make$(name: string): SNS$Entity,
make$(base: string, name: string): SNS$Entity,
make$(zone: string, base: string, name: string): SNS$Entity,
save$(callback: SNS$EntitySaveCallback): void,
save$(props: SNS$EntityDataWithQuery, callback: SNS$EntitySaveCallback): void,
load$(
id: SNS$DatabaseID | SNS$EntityDataWithQuery,
callback: SNS$EntityLoadCallback): void,
remove$(
id: SNS$DatabaseID | SNS$EntityDataWithQuery,
callback: SNS$EntityRemoveCallback): void,
list$(query: SNS$EntityDataWithQuery, callback: SNS$EntityListCallback): void
} 
	declare module.exports: typeof SNS

    }
