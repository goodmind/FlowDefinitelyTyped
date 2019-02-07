declare module 'moonjs' {
        declare interface Moon$Instance<Data> {
get<K: $Keys<Data>>(name: K): $ElementType<Data, K>,
set<K: $Keys<Data>>(name: K, value: $ElementType<Data, K>): void,
callMethod<K: $Keys<Data>>(methodName: K, params?: any[]): any,
mount(selector: string): void,
destroy(): void,
build(): void,
on(eventName: string, listener: (event: Event) => void): void,
off(eventName?: string, listener?: (event: Event) => void): void,
emit(eventName: string, data?: any): void,
$data: Data
} 

declare interface Moon$MoonConstructor {
new <Props: string= empty, Data= {}, Methods= {}>(
options?: Moon$ConstructorOptions<Props, Data, Methods>): Moon$Instance<Data & Methods & Record<Props, any>>
} 

declare type Moon$MoonStatic = {
component<Props: string= empty, Data= {}, Methods= {}>(
name: string,
options: Moon$ComponentOptions<Props, Data, Methods>): Moon$MoonConstructor,
config: Moon$MoonConfig,
use(plugin: {[key: string]: any}): void,
compile(template: string): void,
nextTick(callback: () => void): void,
directive(name: string, action: (el: any, val: any) => void): void
} & Moon$MoonConstructor


declare type Moon$ConstructorOptions<Props: string, Data, Methods> = Moon$ComponentOptionsProperties<Props, (() => Data) | Data, Methods> & ThisType<Moon$Instance<Data & Methods & Record<Props, any>>>;

declare type Moon$ComponentOptions<Props: string, Data, Methods> = Moon$ComponentOptionsProperties<Props, () => Data, Methods> & ThisType<Moon$Instance<Data & Methods & Record<Props, any>>>;

declare interface Moon$ComponentOptionsProperties<Props: string, Data, Methods> {
el?: string | HTMLElement,
template?: string,
name?: string,
functional?: true,
props?: Props[],
data?: Data,
methods?: Methods,
hooks?: Moon$LifecycleHooks,
render?: (h: Moon$CreateElement, ctx: any) => Moon$VDomElement
} 

declare interface Moon$CreateElement {
(tag: "#text", attrs: Record<string, any>, metadata?: any, children?: string): Moon$VDomElement,
(tag: string | Moon$Instance<{[key: string]: any}>, attrs: Record<string, any>, metadata?: any, children?: string | Moon$VDomElement[]): Moon$VDomElement
} 

declare interface Moon$VDomElement {
type: string,
val: string,
props: Record<string, any>,
meta: {[key: string]: any},
children: Moon$VDomElement[]
} 

declare interface Moon$LifecycleHooks {
init?: () => void,
mounted?: () => void,
updated?: () => void,
destroyed?: () => void
} 

declare interface Moon$MoonConfig {
silent: boolean,
prefix: string,
keycodes(codemap: Record<string, number>): void,
delimiters: string[],
version: string
} 
	declare var Moon: Moon$Moon$MoonStatic;
	declare module.exports: typeof Moon

    }
