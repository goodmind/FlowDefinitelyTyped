declare module 'deku' {
        declare module.exports: typeof deku

	
      declare var npm$namespace$deku: {
        createApp: typeof deku$createApp,
element: typeof deku$element,
        h: typeof deku$h,
      }
declare interface deku$VirtualElement {
type: string
} 


/**
 * Create a DOM renderer using a container element.
 * Everything will be rendered inside of that container.
 * Returns a function that accepts new state that can replace what is currently rendered.
 */
declare function deku$createApp(el: HTMLElement, dispatch?: Dispatch): Render



      declare var npm$namespace$dom: {
        create: typeof dom$create,
update: typeof dom$update,
        
      }

/**
 * Create a real DOM element from a virtual element, recursively looping down.
 * When it finds custom elements it will render them, cache them, and keep going,
 * so they are treated like any other native element.
 */
declare function dom$create<C>(
vnode: deku$VirtualElement,
path: string,
dispatch: Dispatch,
context: C): HTMLElement



/**
 * Modify a DOM element given an array of actions.
 */
declare function dom$update<C, A>(
dispatch: Dispatch,
context: C): (DOMElement: HTMLElement, action: A) => HTMLElement



      declare var npm$namespace$string: {
        render: typeof string$render,
        
      }

/**
 * Render a virtual element to a string. You can pass in an option state context object that will be given to all components.
 */
declare function string$render(vnode: deku$VirtualElement): string


declare function string$render<C>(vnode: deku$VirtualElement, context: C): string



/**
 * This function lets us create virtual nodes using a simple syntax.
 * It is compatible with JSX transforms so you can use JSX to write nodes that will compile to this function.
 */
declare function deku$element(type: string): deku$VirtualElement


declare function deku$element<A>(type: string, attributes: A, ...children: any[]): deku$VirtualElement


declare function deku$element(type: Thunk): deku$VirtualElement


declare function deku$element<A>(type: Thunk, attributes: A, ...children: any[]): deku$VirtualElement


declare var deku$h: typeof element;


      declare var npm$namespace$diff: {
        diffNode: typeof diff$diffNode,
        
      }

/**
 * Compare two virtual nodes and return an array of changes to turn the left into the right.
 */
declare function diff$diffNode(prevNode: deku$VirtualElement, nextNode: deku$VirtualElement): any[]


declare class diff$Actions  {
static setAttribute(a: string, b: any, c: any): diff$Actions;
static removeAttribute(a: string, b: any): diff$Actions;
static insertChild(a: any, b: number, c: string): diff$Actions;
static removeChild(a: number): diff$Actions;
static updateChild(a: number, b: any[]): diff$Actions;
static updateChildren(a: any[]): diff$Actions;
static insertBefore(a: number): diff$Actions;
static replaceNode(a: any, b: any, c: string): diff$Actions;
static removeNode(a: any): diff$Actions;
static sameNode(): diff$Actions;
static updateThunk(a: any, b: any, c: string): diff$Actions;
static case(pat: any, action: diff$Actions): any
}


      declare var npm$namespace$vnode: {
        createTextElement: typeof vnode$createTextElement,
createThunkElement: typeof vnode$createThunkElement,
createEmptyElement: typeof vnode$createEmptyElement,
isThunk: typeof vnode$isThunk,
isText: typeof vnode$isText,
isEmpty: typeof vnode$isEmpty,
isSameThunk: typeof vnode$isSameThunk,
createPath: typeof vnode$createPath,
        create: typeof vnode$create,
      }
declare var vnode$create: typeof element;


/**
 * Text nodes are stored as objects to keep things simple
 */
declare function vnode$createTextElement(text: string): deku$VirtualElement



/**
 * Lazily-rendered virtual nodes
 */
declare function vnode$createThunkElement<P, T, O>(
fn: (model: Model) => deku$VirtualElement,
key: string,
props: P,
children: T[],
options: O): deku$VirtualElement


declare function vnode$createEmptyElement(): deku$VirtualElement


declare function vnode$isThunk(vnode: deku$VirtualElement): boolean


declare function vnode$isText(vnode: deku$VirtualElement): boolean


declare function vnode$isEmpty(vnode: deku$VirtualElement): boolean


declare function vnode$isSameThunk(prevNode: deku$VirtualElement, nextNode: deku$VirtualElement): boolean



/**
 * Create a node path, eg. (23,5,2,4) => '23.5.2.4'
 */
declare function vnode$createPath(...paths: (number | string)[]): string

	declare interface Model {
props?: any,
children?: any[],
path?: string,
dispatch?: Dispatch,
context?: any
} 
	declare interface Component {
string$render: (model: Model) => deku$deku$VirtualElement,
onCreate?: (model: Model) => any,
onUpdate?: (model: Model) => any,
onRemove?: (model: Model) => any
} 
	
/**
 * Thunk object passed to `element`
 */
declare type Thunk = Component | ((model: Model) => deku$deku$VirtualElement);
	declare type Render = (vnode: deku$deku$VirtualElement, context?: any) => void;
	declare type Dispatch = (action: any) => any;
    }
