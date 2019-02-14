declare module "deku" {
  declare export default typeof deku;

  declare var npm$namespace$deku: {
    createApp: typeof deku$createApp,
    element: typeof deku$element,
    h: typeof deku$h,

    dom: typeof npm$namespace$deku$dom,
    string: typeof npm$namespace$deku$string,
    diff: typeof npm$namespace$deku$diff,
    vnode: typeof npm$namespace$deku$vnode
  };
  declare interface deku$VirtualElement {
    type: string;
  }

  /**
   * Create a DOM renderer using a container element.
   * Everything will be rendered inside of that container.
   * Returns a function that accepts new state that can replace what is currently rendered.
   */
  declare function deku$createApp(el: HTMLElement, dispatch?: Dispatch): Render;

  declare var npm$namespace$deku$dom: {
    create: typeof deku$dom$create,
    update: typeof deku$dom$update
  };

  /**
   * Create a real DOM element from a virtual element, recursively looping down.
   * When it finds custom elements it will render them, cache them, and keep going,
   * so they are treated like any other native element.
   */
  declare function deku$dom$create<C>(
    vnode: deku$VirtualElement,
    path: string,
    dispatch: Dispatch,
    context: C
  ): HTMLElement;

  /**
   * Modify a DOM element given an array of actions.
   */
  declare function deku$dom$update<C, A>(
    dispatch: Dispatch,
    context: C
  ): (DOMElement: HTMLElement, action: A) => HTMLElement;

  declare var npm$namespace$deku$string: {
    render: typeof deku$string$render
  };

  /**
   * Render a virtual element to a string. You can pass in an option state context object that will be given to all components.
   */
  declare function deku$string$render(vnode: deku$VirtualElement): string;

  declare function deku$string$render<C>(
    vnode: deku$VirtualElement,
    context: C
  ): string;

  /**
   * This function lets us create virtual nodes using a simple syntax.
   * It is compatible with JSX transforms so you can use JSX to write nodes that will compile to this function.
   */
  declare function deku$element(type: string): deku$VirtualElement;

  declare function deku$element<A>(
    type: string,
    attributes: A,
    ...children: any[]
  ): deku$VirtualElement;

  declare function deku$element(type: Thunk): deku$VirtualElement;

  declare function deku$element<A>(
    type: Thunk,
    attributes: A,
    ...children: any[]
  ): deku$VirtualElement;

  declare var deku$h: typeof element;

  declare var npm$namespace$deku$diff: {
    diffNode: typeof deku$diff$diffNode,

    Actions: typeof deku$diff$Actions
  };

  /**
   * Compare two virtual nodes and return an array of changes to turn the left into the right.
   */
  declare function deku$diff$diffNode(
    prevNode: deku$VirtualElement,
    nextNode: deku$VirtualElement
  ): any[];

  declare class deku$diff$Actions {
    static setAttribute(a: string, b: any, c: any): deku$diff$Actions;
    static removeAttribute(a: string, b: any): deku$diff$Actions;
    static insertChild(a: any, b: number, c: string): deku$diff$Actions;
    static removeChild(a: number): deku$diff$Actions;
    static updateChild(a: number, b: any[]): deku$diff$Actions;
    static updateChildren(a: any[]): deku$diff$Actions;
    static insertBefore(a: number): deku$diff$Actions;
    static replaceNode(a: any, b: any, c: string): deku$diff$Actions;
    static removeNode(a: any): deku$diff$Actions;
    static sameNode(): deku$diff$Actions;
    static updateThunk(a: any, b: any, c: string): deku$diff$Actions;
    static case(pat: any, action: deku$diff$Actions): any;
  }

  declare var npm$namespace$deku$vnode: {
    createTextElement: typeof deku$vnode$createTextElement,
    createThunkElement: typeof deku$vnode$createThunkElement,
    createEmptyElement: typeof deku$vnode$createEmptyElement,
    isThunk: typeof deku$vnode$isThunk,
    isText: typeof deku$vnode$isText,
    isEmpty: typeof deku$vnode$isEmpty,
    isSameThunk: typeof deku$vnode$isSameThunk,
    createPath: typeof deku$vnode$createPath,
    create: typeof deku$vnode$create
  };
  declare var deku$vnode$create: typeof element;

  /**
   * Text nodes are stored as objects to keep things simple
   */
  declare function deku$vnode$createTextElement(
    text: string
  ): deku$VirtualElement;

  /**
   * Lazily-rendered virtual nodes
   */
  declare function deku$vnode$createThunkElement<P, T, O>(
    fn: (model: Model) => deku$VirtualElement,
    key: string,
    props: P,
    children: T[],
    options: O
  ): deku$VirtualElement;

  declare function deku$vnode$createEmptyElement(): deku$VirtualElement;

  declare function deku$vnode$isThunk(vnode: deku$VirtualElement): boolean;

  declare function deku$vnode$isText(vnode: deku$VirtualElement): boolean;

  declare function deku$vnode$isEmpty(vnode: deku$VirtualElement): boolean;

  declare function deku$vnode$isSameThunk(
    prevNode: deku$VirtualElement,
    nextNode: deku$VirtualElement
  ): boolean;

  /**
   * Create a node path, eg. (23,5,2,4) => '23.5.2.4'
   */
  declare function deku$vnode$createPath(...paths: (number | string)[]): string;

  declare interface Model {
    props?: any;
    children?: any[];
    path?: string;
    dispatch?: Dispatch;
    context?: any;
  }
  declare interface Component {
    render: (model: Model) => deku$VirtualElement;
    onCreate?: (model: Model) => any;
    onUpdate?: (model: Model) => any;
    onRemove?: (model: Model) => any;
  }

  /**
   * Thunk object passed to `element`
   */
  declare type Thunk = Component | ((model: Model) => deku$VirtualElement);
  declare type Render = (vnode: deku$VirtualElement, context?: any) => void;
  declare type Dispatch = (action: any) => any;
}
