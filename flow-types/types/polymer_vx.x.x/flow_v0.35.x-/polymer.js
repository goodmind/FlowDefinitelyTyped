declare module 'polymer' {
        import type {
          CustomElementConstructor
        } from 'webcomponents.js';

	declare module 'global' {
        declare type polymer$PropConstructorType = StringConstructor
| ObjectConstructor
| BooleanConstructor
| NumberConstructor
| DateConstructor
| ArrayConstructor;

declare interface polymer$PropObjectType {
type: polymer$PropConstructorType,
value?: boolean
| number
| string
| Function
| Object,
reflectToAttribute?: boolean,
readOnly?: boolean,
notify?: boolean,
computed?: string,
observer?: string
} 

declare interface polymer$CommonBase {
hostAttributes?: {
[name: string]: any
},
reflectPropertiesToAttribute(name: string): void,
serializeValueToAttribute(value: any, attribute: string, node?: Element): void,
deserialize(value: string, type: NumberConstructor): number,
deserialize(value: string, type: BooleanConstructor): boolean,
deserialize(value: string, type: ObjectConstructor): Object,
deserialize(value: string, type: ArrayConstructor): any[],
deserialize(value: string, type: DateConstructor): Date,
deserialize(value: string, type: StringConstructor): string,
serialize(value: any): string,
behaviors?: Object[],
factoryImpl(...args: any[]): void,
debounce(jobName: string, callback: Function, wait?: number): void,
isDebouncerActive(jobName: string): boolean,
flushDebouncer(jobName: string): void,
cancelDebouncer(jobName: string): void,
extends?: string,
getNativePrototype(tag: string): Object,
properties?: {
[prop: string]: (polymer$PropConstructorType | polymer$PropObjectType)
},
getPropertyInfo(property: string): Object,
is: string,
ready(): void,
attachedCallback(): void,
domHost(): Element,
distributeContent(): void,
elementMatches(selector: string, node?: Element): boolean,
instanceTemplate(template: HTMLElement): DocumentFragment,
$?: any,
listeners?: {
[key: string]: string
},
listen(node: Element, eventName: string, methodName: string): void,
unlisten(node: Element, eventName: string, methodName: string): void,
setScrollDirection(direction: string, node?: HTMLElement): void,
notifyPath(path: string, value: any, fromAbove: any): void,
set<Value>(path: string | (string | number)[], value: Value, root?: Object): void,
get(path: string | (string | number)[], root?: Object): any,
linkPaths(to: string, from?: string): void,
unlinkPaths(path: string): void,
push(path: string, ...item: any[]): number,
pop(path: string): any,
splice(path: string, index: number, removeCount: number, ...item: any[]): number,
shift(path: string): any,
unshift(path: string, ...item: any[]): number,
notifySplices(path: string, splices: $ReadOnlyArray<polymer$polymer$PolymerSplice>): void,
resolveUrl(url: string): string,
scopeSubtree(container: Element, shouldObserve: boolean): void,
$$(selector: string): Element,
toggleClass(name: string, bool?: boolean, node?: HTMLElement): void,
classFollows(name: string, toElement: HTMLElement, fromElement: HTMLElement): void,
attributeFollows(name: string, toElement: HTMLElement, fromElement: HTMLElement): void,
getContentChildNodes(selector: string): Node[],
getContentChildren(selector: string): HTMLElement[],
fire(type: string, detail?: any, options?: Object): CustomEvent,
async(callback: () => void, waitTime?: number): number,
cancelAsync(handle: number): void,
arrayDelete(path: string | any[], item: any): any[],
transform(transform: string, node?: HTMLElement): void,
translate3d(x: number, y: number, z: number, node?: HTMLElement): void,
importHref(href: string, onload?: Function, onerror?: Function): HTMLLinkElement,
create(tag: string, props: Object): Element,
isLightDescendant(node: HTMLElement): boolean,
isLocalDescendant(node: HTMLElement): boolean,
updateStyles(styles?: {
[prop: string]: string
}): void,
registerCallback(): void,
createdCallback(): void,
attachedCallback(): void,
detachedCallback(): void,
attributeChangedCallback(name: string): void,
extend(prototype: Object, api: Object): Object,
mixin(target: Object, source: Object): Object,
copyOwnProperty(name: string, source: Object, target: Object): void,
observers?: string[],
beforeRegister(): void,
registered(): void,
created(): void,
attached(): void,
detached(): void,
attributeChanged(name: string, oldValue: any, newValue: any): void
} 

declare type polymer$PolymerElement = {} & polymer$CommonBase & HTMLElement


declare type polymer$Base = {

/**
 * Need to allow all properties for callback methods.
 */
[prop: string]: any,
toggleAttribute(name: string, bool?: boolean, node?: HTMLElement): void
} & polymer$CommonBase


declare interface polymer$DomApiStatic {
(obj: Node | polymer$Base): polymer$DomApi,
(obj: Event): polymer$EventApi,
flush(): void
} 

declare interface polymer$ObservedNodeInfo {
target: Node,
addedNodes: Node[],
removedNode: Node[]
} 

declare interface polymer$DomApi {
appendChild(node: Node): Node,
insertBefore(node: Node, refNode?: Node): Node,
removeChild(node: Node): Node,
replaceChild(node: Node, refNode: Node): Node,
getOwnerRoot(): Node,
querySelector(selector: string): Node,
querySelectorAll(selector: string): Node[],
getDestinationInsertionPoints(): Node[],
getDistributedNodes(): Node[],
queryDistributedElements(selector: string): Node[],
setAttribute(name: string, value: any): void,
removeAttribute(name: string): void,
observeNodes(callback: (info: polymer$ObservedNodeInfo) => void): {},
unobserveNodes(observer: {}): void,
childNodes: Node[],
children: Element[],
parentNode: Node,
firstChild: Node,
lastChild: Node,
nextSibling: Node,
previousSibling: Node,
firstElementChild: Element,
lastElementChild: Element,
nextElementSibling: Element,
previousElementSibling: Element,
textContent: string,
innerHTML: string
} 

declare interface polymer$EventApi {
rootTarget: EventTarget,
localTarget: EventTarget,
path: Node[]
} 

declare interface polymer$Settings {
hasNativeCSSProperties: boolean,
hasNativeImports: boolean,
hasShadow: boolean,
nativeShadow: boolean,
useNativeCSSProperties: boolean,
useNativeCustomElements: boolean,
useNativeImports: boolean,
useNativeShadow: boolean,
usePolyfillProto: boolean,
useShadow: boolean,
wantShadow: boolean
} 

declare interface polymer$RenderStatus {
afterNextRender(element: Element, fn: Function, args?: any): void,
hasRendered(): boolean,
whenReady(cb: Function): void
} 

declare interface polymer$PolymerSplice {
index: number,
removed: Array<{}>,
addedCount: number,
object: Array<{}>,
type: string
} 

declare interface polymer$ArraySplice {
calculateSplices<T>(
current: $ReadOnlyArray<T>,
previous: $ReadOnlyArray<T>): polymer$PolymerSplice[]
} 

declare type polymer$ImportStatus = {
whenLoaded(cb: Function): void
} & polymer$RenderStatus


declare interface polymer$Templatizer {
templatize(template: HTMLTemplateElement, mutableData?: boolean): void,
stamp(model: {}): polymer$Base,
modelForElement: (elem: HTMLElement) => polymer$Base
} 

declare interface polymer$PolymerStatic {
polymer$Settings: polymer$Settings,
isInstance(element: string): boolean,
polymer$Base: polymer$Base,
dom: polymer$DomApiStatic,
(prototype: polymer$Base | {
new (): polymer$Base
}): CustomElementConstructor,
Class(prototype: polymer$Base | {
new (): polymer$Base
}): CustomElementConstructor,
polymer$RenderStatus: polymer$RenderStatus,
polymer$ArraySplice: polymer$ArraySplice,

/**
 * @deprecated
 */
polymer$ImportStatus: polymer$ImportStatus,
polymer$Templatizer: polymer$Templatizer
} 
	declare var Polymer: polymer$polymer$PolymerStatic;
    }

    }
