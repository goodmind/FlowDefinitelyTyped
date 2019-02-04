declare module 'redom' {
        declare export type RedomElement = Node | RedomComponent;
	declare export type RedomQuery = string | RedomElement;
	declare export type RedomMiddleware = (el: HTMLElement) => void;
	declare export type RedomQueryArgumentValue = RedomElement
| string
| number
| {
[key: string]: any
}
| RedomMiddleware;
	declare export type RedomQueryArgument = RedomQueryArgumentValue | RedomQueryArgumentValue[];
	declare export interface RedomComponent {
el: HTMLElement,
update(item: any, index: number, data: any, context?: any): void,
onmount(): void,
onremount(): void,
onunmount(): void
} 
	declare export interface RedomComponentConstructor {
new (): RedomComponent
} 
	declare export class ListPool  {
constructor(View: RedomComponentConstructor, key?: string, initData?: any): this;
update(data: any[], context?: any): void
}
	declare export class List mixins RedomComponent {
el: HTMLElement;
constructor(parent: RedomQuery, View: RedomComponentConstructor, key?: string, initData?: any): this;
update(data: any[], context?: any): void;
onmount(): void;
onremount(): void;
onunmount(): void;
static extend(
parent: RedomQuery,
View: RedomComponentConstructor,
key?: string,
initData?: any): RedomComponentConstructor
}
	declare export class Place mixins RedomComponent {
el: HTMLElement;
constructor(View: RedomComponentConstructor, initData?: any): this;
update(visible: boolean, data?: any): void
}
	declare export class Router mixins RedomComponent {
el: HTMLElement;
constructor(parent: RedomQuery, Views: RouterDictionary, initData?: any): this;
update(route: string, data?: any): void
}
	declare export interface RouterDictionary {
[key: string]: RedomComponentConstructor
} 
	declare export function html(query: RedomQuery, ...args: RedomQueryArgument[]): HTMLElement

	declare export function h(query: RedomQuery, ...args: RedomQueryArgument[]): HTMLElement

	declare export function el(query: RedomQuery, ...args: RedomQueryArgument[]): HTMLElement

	declare export function listPool(View: RedomComponentConstructor, key?: string, initData?: any): ListPool

	declare export function list(
parent: RedomQuery,
View: RedomComponentConstructor,
key?: string,
initData?: any): List

	declare export function mount(parent: RedomElement, child: RedomElement, before?: RedomElement): RedomElement

	declare export function unmount(parent: RedomElement, child: RedomElement): RedomElement

	declare export function place(View: RedomComponentConstructor, initData?: any): Place

	declare export function router(parent: RedomQuery, Views: RouterDictionary, initData?: any): Router

	declare export function setAttr(view: RedomElement, arg1: string | {[key: string]: any}, arg2?: string): void

	declare export function setStyle(view: RedomElement, arg1: string | {[key: string]: any}, arg2?: string): void

	declare export function setChildren(parent: RedomElement, children: RedomElement[]): void

	declare export function svg(query: RedomQuery, ...args: RedomQueryArgument[]): SVGElement

	declare export function s(query: RedomQuery, ...args: RedomQueryArgument[]): SVGElement

	declare export function text(str: string): Text

	
      declare var npm$namespace$list: {
        extend: typeof list$extend,
        
      }
declare function list$extend(
parent: RedomQuery,
View: RedomComponentConstructor,
key?: string,
initData?: any): RedomComponentConstructor

	
      declare var npm$namespace$svg: {
        extend: typeof svg$extend,
        
      }
declare function svg$extend(query: RedomQuery): RedomComponentConstructor

    }
