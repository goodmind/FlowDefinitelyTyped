declare module 'polymer-ts' {
        
      declare var npm$namespace$polymer: {
        createEs6PolymerBase: typeof polymer$createEs6PolymerBase,
prepareForRegistration: typeof polymer$prepareForRegistration,
createDomModule: typeof polymer$createDomModule,
createElement: typeof polymer$createElement,
createClass: typeof polymer$createClass,
isRegistered: typeof polymer$isRegistered,
        
      }
declare class polymer$PolymerBase mixins HTMLElement {
$: any;
$$: any;
root: HTMLElement;
shadyRoot: HTMLElement;
style: CSSStyleDeclaration;
customStyle: {
[property: string]: string
};
arrayDelete(path: string, item: string | any): any;
async(callback: Function, waitTime?: number): any;
attachedCallback(): void;
attributeFollows(name: string, toElement: HTMLElement, fromElement: HTMLElement): void;
cancelAsync(handle: number): void;
cancelDebouncer(jobName: string): void;
classFollows(name: string, toElement: HTMLElement, fromElement: HTMLElement): void;
create(tag: string, props?: Object): HTMLElement;
debounce(jobName: string, callback: Function, wait?: number): void;
deserialize(value: string, type: any): any;
distributeContent(): void;
domHost(): void;
elementMatches(selector: string, node: polymer$Element): any;
fire(type: string, detail?: Object, options?: polymer$FireOptions): any;
flushDebouncer(jobName: string): void;
get(path: string | Array<string | number>): any;
getContentChildNodes(slctr: string): any;
getContentChildren(slctr: string): any;
getNativePrototype(tag: string): any;
getPropertyInfo(property: string): any;
importHref(href: string, onload?: Function, onerror?: Function, optAsync?: boolean): any;
instanceTemplate(template: any): any;
isDebouncerActive(jobName: string): any;
linkPaths(to: string, from: string): void;
listen(node: polymer$Element, eventName: string, methodName: string): void;
mixin(target: Object, source: Object): void;
notifyPath(path: string, value: any, fromAbove?: any): void;
notifySplices(
path: string,
splices: {
index: number,
removed: Array<any>,
addedCount: number,
object: Array<any>,
type: "splice"
}): void;
pop(path: string): any;
push(path: string, value: any): any;
reflectPropertyToAttribute(name: string): void;
resolveUrl(url: string): any;
scopeSubtree(container: polymer$Element, shouldObserve: boolean): void;
serialize(value: string): any;
serializeValueToAttribute(value: any, attribute: string, node: polymer$Element): void;
set(path: string | Array<string | number>, value: any, root?: Object): any;
setScrollDirection(direction: string, node: HTMLElement): void;
shift(path: string, value: any): any;
splice(path: string, start: number, deleteCount: number, ...items: any[]): any;
toggleAttribute(name: string, force?: boolean, node?: HTMLElement): boolean;
toggleClass(name: string, bool: boolean, node?: HTMLElement): void;
transform(transform: string, node?: HTMLElement): void;
translate3d(x: any, y: any, z: any, node?: HTMLElement): void;
unlinkPaths(path: string): void;
unshift(path: string, value: any): any;
updateStyles(): void
}

declare interface polymer$dom {
(node: HTMLElement): HTMLElement,
(node: polymer$polymer$Base): HTMLElement,
flush(): any
} 

declare interface polymer$FireOptions {
node?: HTMLElement | polymer$polymer$Base,
bubbles?: boolean,
cancelable?: boolean
} 

declare interface polymer$Element {
properties?: Object,
listeners?: Object,
behaviors?: Object[],
observers?: String[],
factoryImpl(...args: any[]): void,
ready(): void,
created(): void,
attached(): void,
detached(): void,
attributeChanged(attrName: string, oldVal: any, newVal: any): void,
prototype?: Object
} 

declare interface polymer$PolymerTSElement {
$custom_cons?: FunctionConstructor,
$custom_cons_args?: any[],
template?: string,
style?: string
} 

declare interface polymer$Property {
name?: string,
type?: any,
value?: any,
reflectToAttribute?: boolean,
readOnly?: boolean,
notify?: boolean,
computed?: string,
observer?: string
} 

declare class polymer$Base mixins polymer$polymer$PolymerBase {
static create<T: polymer$polymer$Base>(...args: any[]): T;
static register(): void;
is: string
}

declare function polymer$createEs6PolymerBase(): void


declare function polymer$prepareForRegistration(elementClass: Function): polymer$polymer$Element


declare function polymer$createDomModule(definition: polymer$polymer$Element): void


declare function polymer$createElement<T: polymer$polymer$Base>(element: (...args: any[]) => T): (...args: any[]) => T


declare function polymer$createClass<T: polymer$polymer$Base>(element: (...args: any[]) => T): (...args: any[]) => T


declare function polymer$isRegistered(element: polymer$polymer$Element): boolean

	declare var Polymer: {
(prototype: polymer$polymer$Element): FunctionConstructor,
Class(prototype: polymer$polymer$Element): Function,
polymer$dom: polymer$polymer$dom,
appendChild(node: HTMLElement): HTMLElement,
insertBefore(node: HTMLElement, beforeNode: HTMLElement): HTMLElement,
removeChild(node: HTMLElement): HTMLElement,
updateStyles(): void,
polymer$Base: any
};
	declare function component(tagname: string, extendsTag?: string): (target: Function) => void

	declare function extend(tagname: string): (target: Function) => void

	declare function template(templateString: string): (target: Function) => void

	declare function style(styleString: string): (target: Function) => void

	declare function hostAttributes(attributes: Object): (target: Function) => void

	declare function property(
ob?: polymer$polymer$Property): (target: polymer$polymer$Element, propertyKey: string) => void

	declare function computed(
ob?: polymer$polymer$Property): (target: polymer$polymer$Element, computedFuncName: string) => void

	declare function listen(
eventName: string): (target: polymer$polymer$Element, propertyKey: string) => void

	declare function behavior(behaviorObject: any): any

	declare function observe(
observedProps: string): (target: polymer$polymer$Element, observerFuncName: string) => void

    }
