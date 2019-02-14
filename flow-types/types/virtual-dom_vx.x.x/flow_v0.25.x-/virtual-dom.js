declare var npm$namespace$VirtualDOM: {
  create: typeof VirtualDOM$create,
  h: typeof VirtualDOM$h,
  diff: typeof VirtualDOM$diff,
  patch: typeof VirtualDOM$patch,
  isVNode: typeof VirtualDOM$isVNode,
  isVText: typeof VirtualDOM$isVText,
  isWidget: typeof VirtualDOM$isWidget,
  isThunk: typeof VirtualDOM$isThunk
};
declare interface VirtualDOM$VHook {
  hook(node: Element, propertyName: string): void;
  unhook(node: Element, propertyName: string): void;
}

declare type VirtualDOM$EventHandler = (...args: any[]) => void;

declare interface VirtualDOM$VProperties {
  attributes?: {
    [index: string]: string
  };

  /**
   * I would like to use {[index: string]: string}, but then we couldn't use an
   * object literal when setting the styles, since TypeScript doesn't seem to
   * infer that {'fontSize': string; 'fontWeight': string;} is actually quite
   * assignable to the type { [index: string]: string; }
   */
  style?: any;

  /**
   * The relaxation on `style` above is the reason why we need `any` as an option
   * on the indexer type.
   */
  [index: string]:
    | any
    | string
    | boolean
    | number
    | VirtualDOM$VHook
    | VirtualDOM$EventHandler
    | {
        [index: string]: string | boolean | number
      };
}

declare interface VirtualDOM$VNode {
  tagName: string;
  properties: VirtualDOM$VProperties;
  children: VirtualDOM$VTree[];
  key?: string;
  namespace?: string;
  count: number;
  hasWidgets: boolean;
  hasThunks: boolean;
  hooks: any[];
  descendantHooks: any[];
  version: string;
  type: string;
}

declare interface VirtualDOM$VNodeConstructor {
  new(
    tagName: string,
    properties: VirtualDOM$VProperties,
    children: VirtualDOM$VTree[],
    key?: string,
    namespace?: string
  ): VirtualDOM$VNode;
}

declare interface VirtualDOM$VText {
  text: string;
  version: string;
  type: string;
}

declare interface VirtualDOM$VTextConstructor {
  new(text: string): VirtualDOM$VText;
}

declare interface VirtualDOM$Widget {
  type: string;
  init(): Element;
  update(previous: VirtualDOM$Widget, domNode: Element): void;
  destroy(node: Element): void;
}

declare interface VirtualDOM$Thunk {
  type: string;
  vnode: VirtualDOM$VTree;
  render(previous: VirtualDOM$VTree): VirtualDOM$VTree;
}

declare type VirtualDOM$VTree =
  | VirtualDOM$VText
  | VirtualDOM$VNode
  | VirtualDOM$Widget
  | VirtualDOM$Thunk;

declare interface VirtualDOM$VPatch {
  vNode: VirtualDOM$VNode;
  patch: any;
  version: string;

  /**
   * type is set to 'VirtualPatch' on the prototype, but overridden in the
   * constructor with a number.
   */
  type: number;
}

declare type VirtualDOM$PatchFn<T: Element> = (
  rootNode: T,
  patches: VirtualDOM$VPatch[],
  renderOptions: VirtualDOM$VPatchOptions<T>
) => T;

declare interface VirtualDOM$VPatchOptions<T: Element> {
  patch?: VirtualDOM$PatchFn<T>;
}

declare type VirtualDOM$createProperties = {
  key?: string,
  namespace?: string
} & VProperties;

declare type VirtualDOM$VChild =
  | VirtualDOM$VTree[]
  | VirtualDOM$VTree
  | string[]
  | string;

/**
 * create() calls either document.createElement() or document.createElementNS(),
 * for which the common denominator is Element (not HTMLElement).
 */
declare function VirtualDOM$create(
  vnode: VirtualDOM$VText,
  opts?: {
    document?: Document,
    warn?: boolean
  }
): Text;

declare function VirtualDOM$create(
  vnode: VirtualDOM$VNode | VirtualDOM$Widget | VirtualDOM$Thunk,
  opts?: {
    document?: Document,
    warn?: boolean
  }
): Element;

declare function VirtualDOM$h(
  tagName: string,
  properties: VirtualDOM$createProperties,
  children: string | VirtualDOM$VChild[]
): VirtualDOM$VNode;

declare function VirtualDOM$h(
  tagName: string,
  children: string | VirtualDOM$VChild[]
): VirtualDOM$VNode;

declare function VirtualDOM$diff(
  left: VirtualDOM$VTree,
  right: VirtualDOM$VTree
): VirtualDOM$VPatch[];

/**
 * patch() usually just returns rootNode after doing stuff to it, so we want
 * to preserve that type (though it will usually be just Element).
 */
declare function VirtualDOM$patch<T: Element>(
  rootNode: T,
  patches: VirtualDOM$VPatch[],
  renderOptions?: VirtualDOM$VPatchOptions<T>
): T;

declare function VirtualDOM$isVNode(vTree: VirtualDOM$VTree): boolean;

declare function VirtualDOM$isVText(vTree: VirtualDOM$VTree): boolean;

declare function VirtualDOM$isWidget(vTree: VirtualDOM$VTree): boolean;

declare function VirtualDOM$isThunk(vTree: VirtualDOM$VTree): boolean;
declare module "virtual-dom/h" {
  declare export default typeof h;
}
declare module "virtual-dom/create-element" {
  declare export default typeof create;
}
declare module "virtual-dom/diff" {
  declare export default typeof diff;
}
declare module "virtual-dom/patch" {
  declare export default typeof patch;
}
declare module "virtual-dom" {
  declare export default typeof VirtualDOM;
}
declare module "virtual-dom/vnode/vnode" {
  declare var VirtualDOM$VNode: VirtualDOM$VNodeConstructor;
  declare export default typeof VNode;
}
declare module "virtual-dom/vnode/vtext" {
  declare var VirtualDOM$VText: VirtualDOM$VTextConstructor;
  declare export default typeof VText;
}
declare module "virtual-dom/vnode/is-vnode" {
  declare export default typeof isVNode;
}
declare module "virtual-dom/vnode/is-vtext" {
  declare export default typeof isVText;
}
declare module "virtual-dom/vnode/is-widget" {
  declare export default typeof isWidget;
}
declare module "virtual-dom/vnode/is-thunk" {
  declare export default typeof isThunk;
}
