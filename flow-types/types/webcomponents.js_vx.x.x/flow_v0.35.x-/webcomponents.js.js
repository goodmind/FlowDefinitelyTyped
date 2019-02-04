declare module 'webcomponents.js' {
        declare export interface CustomElementInit {
prototype: HTMLElement,
extends?: string
} 
	declare export interface CustomElementConstructor {
new (): HTMLElement
} 
	declare export interface CustomElementsPolyfill {
hasNative: boolean,
flags: any,
ready: boolean,
useNative: boolean
} 
	declare export interface HTMLImportsPolyfill {
IMPORT_LINK_TYPE: string,
isIE: boolean,
flags: any,
ready: boolean,
rootDocument: Document,
useNative: boolean,
whenReady(callback: () => void): void
} 
	declare export interface Polyfill {
flags: any
} 
	declare module 'global' {
        declare interface ElementDefinitionOptions {
extends?: string
} 
	declare type ShadowRoot = {
innerHTML: string,
+host: Element
} & DocumentFragment

	declare interface CustomElementRegistry {
define(
name: string,
function Object() { [native code] }: Function,
options?: ElementDefinitionOptions): void,
get(name: string): any,
whenDefined(name: string): PromiseLike<void>
} 
	declare interface Element {
createShadowRoot(): ShadowRoot,
+shadowRoot: ShadowRoot | null
} 
	declare interface Document {
registerElement(name: string, prototype: CustomElementInit): CustomElementConstructor
} 
	declare interface Window {
CustomElements: CustomElementsPolyfill,
HTMLImports: HTMLImportsPolyfill,
WebComponents: Polyfill,
customElements: CustomElementRegistry
} 
    }

    }
