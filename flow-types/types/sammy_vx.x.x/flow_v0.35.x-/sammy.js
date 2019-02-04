declare function Sammy(): Sammy$Sammy$Application
declare function Sammy(selector: string): Sammy$Sammy$Application
declare function Sammy(handler: Function): Sammy$Sammy$Application
declare function Sammy(selector: string, handler: Function): Sammy$Sammy$Application

      declare var npm$namespace$Sammy: {
        Cache: typeof Sammy$Cache,
DataCacheProxy: typeof Sammy$DataCacheProxy,
DefaultLocationProxy: typeof Sammy$DefaultLocationProxy,
EJS: typeof Sammy$EJS,
Exceptional: typeof Sammy$Exceptional,
Flash: typeof Sammy$Flash,
Form: typeof Sammy$Form,
Haml: typeof Sammy$Haml,
Handlebars: typeof Sammy$Handlebars,
Hogan: typeof Sammy$Hogan,
Hoptoad: typeof Sammy$Hoptoad,
JSON: typeof Sammy$JSON,
Meld: typeof Sammy$Meld,
MemoryCacheProxy: typeof Sammy$MemoryCacheProxy,
Mustache: typeof Sammy$Mustache,
NestedParams: typeof Sammy$NestedParams,
OAuth2: typeof Sammy$OAuth2,
PathLocationProxy: typeof Sammy$PathLocationProxy,
Pure: typeof Sammy$Pure,
PushLocationProxy: typeof Sammy$PushLocationProxy,
Session: typeof Sammy$Session,
Storage: typeof Sammy$Storage,
Title: typeof Sammy$Title,
Template: typeof Sammy$Template,
Tmpl: typeof Sammy$Tmpl,
addLogger: typeof Sammy$addLogger,
log: typeof Sammy$log,
        DataLocationProxy: typeof Sammy$DataLocationProxy,
FormBuilder: typeof Sammy$FormBuilder,
Store: typeof Sammy$Store,
      }
declare interface Sammy$SammyFunc {
(): Sammy$Sammy$Application,
(selector: string): Sammy$Sammy$Application,
(handler: Function): Sammy$Sammy$Application,
(selector: string, handler: Function): Sammy$Sammy$Application
} 

declare export function Sammy$Cache(app: any, options: any): any


declare export function Sammy$DataCacheProxy(initial: any, $element: any): any


declare export var Sammy$DataLocationProxy: Sammy$DataLocationProxy;

declare export function Sammy$DefaultLocationProxy(app: any, run_interval_every: any): any


declare export function Sammy$EJS(app: any, method_alias: any): any


declare export function Sammy$Exceptional(app: any, errorReporter: any): any


declare export function Sammy$Flash(app: any): any


declare export var Sammy$FormBuilder: Sammy$FormBuilder;

declare export function Sammy$Form(app: any): any


declare export function Sammy$Haml(app: any, method_alias: any): any


declare export function Sammy$Handlebars(app: any, method_alias: any): any


declare export function Sammy$Hogan(app: any, method_alias: any): any


declare export function Sammy$Hoptoad(app: any, errorReporter: any): any


declare export function Sammy$JSON(app: any): any


declare export function Sammy$Meld(app: any, method_alias: any): any


declare export function Sammy$MemoryCacheProxy(initial: any): any


declare export function Sammy$Mustache(app: any, method_alias: any): any


declare export function Sammy$NestedParams(app: any): any


declare export function Sammy$OAuth2(app: any): any


declare export function Sammy$PathLocationProxy(app: any): any


declare export function Sammy$Pure(app: any, method_alias: any): any


declare export function Sammy$PushLocationProxy(app: any): any


declare export function Sammy$Session(app: any, options: any): any


declare export function Sammy$Storage(app: any): any


declare export var Sammy$Store: Sammy$Store;

declare export function Sammy$Title(): any


declare export function Sammy$Template(app: any, method_alias: any): any


declare export function Sammy$Tmpl(app: any, method_alias: any): any


declare export function Sammy$addLogger(logger: any): any


declare export function Sammy$log(...args: any[]): any


declare export class Sammy$Object  {
constructor(obj: any): this;
escapeHTML(s: string): string;
h(s: string): string;
has(key: string): boolean;
join(...args: any[]): string;
keys(attributes_only?: boolean): string[];
log(...args: any[]): void;
toHTML(): string;
toHash(): any;
toString(include_functions?: boolean): string
}

declare export type Sammy$Application = {
ROUTE_VERBS: string[],
APP_EVENTS: string[],
(appFn: Function): any,
$element(selector?: string): JQuery,
after(callback: Function): Sammy$Application,
any(verb: string, path: string, callback: Function): void,
around(callback: Function): Sammy$Application,
before(callback: Function): Sammy$Application,
before(options: any, callback: Function): Sammy$Application,
bind(name: string, callback: Function): Sammy$Application,
bind(name: string, data: any, callback: Function): Sammy$Application,
bindToAllEvents(callback: Function): Sammy$Application,
clearTemplateCache(): any,
contextMatchesOptions(context: any, match_options: any, positive?: boolean): boolean,
del(path: string, callback: Function): Sammy$Application,
del(path: RegExp, callback: Function): Sammy$Application,
destroy(): Sammy$Application,
error(message: string, original_error: Error): void,
eventNamespace(): string,
get(path: string, callback: Function): Sammy$Application,
get(path: RegExp, callback: Function): Sammy$Application,
getLocation(): string,
helper(name: string, method: Function): any,
helpers(extensions: any): any,
isRunning(): boolean,
log(...params: any[]): void,
lookupRoute(verb: string, path: string): any,
mapRoutes(route_array: any[]): Sammy$Application,
notFound(verb: string, path: string): any,
post(path: string, callback: Function): Sammy$Application,
post(path: RegExp, callback: Function): Sammy$Application,
put(path: string, callback: Function): Sammy$Application,
put(path: RegExp, callback: Function): Sammy$Application,
refresh(): Sammy$Application,
routablePath(path: string): string,
route(verb: string, path: string, callback: Function): Sammy$Application,
route(verb: string, path: RegExp, callback: Function): Sammy$Application,
run(start_url?: string): Sammy$Application,
runRoute(verb: string, path?: string, params?: any, target?: any): any,
send(...params: any[]): any,
setLocation(new_location: string): string,
setLocationProxy(new_proxy: Sammy$DataLocationProxy): void,
swap(content: any, callback: Function): any,
templateCache(key: string, value: any): any,
toString(): string,
trigger(name: string, data?: any): Sammy$Application,
unload(): Sammy$Application,
use(...params: any[]): void,
last_location: string[],
oauthorize: string,
requireOAuth(): any,
requireOAuth(path?: string): any,
requireOAuth(callback?: Function): any
} & Sammy$Object


declare export interface Sammy$DataLocationProxy {
new (app: any, run_interval_every?: any): Sammy$DataLocationProxy,
new (app: any, data_name: any, href_attribute: any): Sammy$DataLocationProxy,
fullPath(location_obj: any): string,
bind(): void,
unbind(): void,
setLocation(new_location: string): string,
_startPolling(every: number): void
} 

declare export type Sammy$EventContext = {
new (app: any, verb: any, path: any, params: any, target: any): any,
$element(): JQuery,
engineFor(engine: any): any,
eventNamespace(): string,
interpolate(content: any, data: any, engine: any, partials?: any): Sammy$EventContext,
json(str: any): any,
json(str: string): any,
load(location: any, options?: any, callback?: Function): any,
loadPartials(partials?: any): any,
notFound(): any,
partial(
location: string,
data?: any,
callback?: Function,
partials?: any): Sammy$RenderContext,
partials: any,
params: any,
redirect(...params: any[]): void,
render(
location: string,
data?: any,
callback?: Function,
partials?: any): Sammy$RenderContext,
renderEach(
location: any,
data?: {
name: string,
data?: any
}[],
callback?: Function): Sammy$RenderContext,
send(...params: any[]): Sammy$RenderContext,
swap(contents: any, callback: Function): string,
toString(): string,
trigger(name: string, data?: any): Sammy$EventContext,
name: any,
title: any
} & Sammy$Object


declare export interface Sammy$FormBuilder {
new (name: any, object: any): any,
checkbox(keypath: string, value: any, ...attributes: any[]): string,
close(): string,
hidden(keypath: string, ...attributes: any[]): string,
label(keypath: string, content: any, ...attributes: any[]): string,
open(...attributes: any[]): any,
password(keypath: string, ...attributes: any[]): string,
radio(keypath: string, value: any, ...attributes: any[]): string,
select(keypath: string, options: any, ...attributes: any[]): string,
submit(...attributes: any[]): string,
text(keypath: string, ...attributes: any[]): string,
textarea(keypath: string, ...attributes: any[]): string
} 

declare export interface Sammy$Form {
formFor(name: string, object: any, content_callback: Function): Sammy$FormBuilder
} 

declare export interface Sammy$GoogleAnalytics {
new (app: any, tracker: any): any,
noTrack(): any,
track(path: any): any
} 

declare export type Sammy$Haml = {} & Sammy$EventContext


declare export type Sammy$Handlebars = {} & Sammy$EventContext


declare export type Sammy$Hogan = {} & Sammy$EventContext


declare export type Sammy$JSON = {} & Sammy$EventContext


declare export type Sammy$Mustache = {} & Sammy$EventContext


declare export type Sammy$RenderContext = {
new (event_context: any): any,
appendTo(selector: string): Sammy$RenderContext,
collect(array: any[], callback: Function, now?: boolean): Sammy$RenderContext,
interpolate(data: any, engine?: any, retain?: boolean): Sammy$RenderContext,
load(location: string, options?: any, callback?: Function): Sammy$RenderContext,
loadPartials(partials?: any): Sammy$RenderContext,
next(content: any): void,
partial(location: string, callback: Function, partials: any): Sammy$RenderContext,
partial(
location: string,
data: any,
callback: Function,
partials: any): Sammy$RenderContext,
prependTo(selector: string): Sammy$RenderContext,
render(callback: Function): Sammy$RenderContext,
render(location: string, data: any): Sammy$RenderContext,
render(location: string, callback: Function, partials?: any): Sammy$RenderContext,
render(location: string, data: any, callback: Function): Sammy$RenderContext,
render(
location: string,
data: any,
callback: Function,
partials: any): Sammy$RenderContext,
renderEach(
location: string,
name?: string,
data?: any,
callback?: Function): Sammy$RenderContext,
replace(selector: string): Sammy$RenderContext,
send(...params: any[]): Sammy$RenderContext,
swap(callback?: Function): Sammy$RenderContext,
then(callback: Function): Sammy$RenderContext,
trigger(name: any, data: any): any,
wait(): void
} & Sammy$Object


declare export interface Sammy$StoreOptions {
name?: string,
element?: string,
type?: string,
memory?: any,
data?: any,
cookie?: any,
local?: any,
session?: any
} 

declare export interface Sammy$Store {
stores: any,
new (options?: any): any,
clear(key: string): any,
clearAll(): void,
each(callback: Function): boolean,
exists(key: string): boolean,
fetch(key: string, callback: Function): any,
filter(callback: Function): boolean,
first(callback: Function): boolean,
get(key: string): any,
isAvailable(): boolean,
keys(): string[],
load(key: string, path: string, callback: Function): void,
set(key: string, value: any): any,
Cookie(name: any, element: any, options: any): any,
Data(name: any, element: any): any,
LocalStorage(name: any, element: any): any,
Memory(name: any, element: any): any,
SessionStorage(name: any, element: any): any,
isAvailable(type: any): any,
Template(app: any, method_alias: any): any
} declare module 'sammy' {
        declare module.exports: typeof Sammy

    }
declare interface JQueryStatic {
sammy: Sammy$Sammy$SammyFunc,
Sammy$log: Function
} 