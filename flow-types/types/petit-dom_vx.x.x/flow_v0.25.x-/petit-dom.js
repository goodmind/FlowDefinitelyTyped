declare type JSX$Element = {} & PetitDom$PetitDom$VNode;

declare type JSX$ElementClass = {} & PetitDom$PetitDom$Component<PetitDom$PetitDom$ComponentProps>;

declare type JSX$IntrinsicClassAttributes<T> = {} & PetitDom$PetitDom$Props;

declare type JSX$IntrinsicAttributes = {} & PetitDom$PetitDom$IntrinsicProps;

declare interface JSX$ElementAttributesProperty {
  props: PetitDom$PetitDom$Props;
}

declare interface JSX$ElementChildrenAttribute {
  content: PetitDom$PetitDom$VNode[];
}

declare type JSX$IntrinsicElements = $ObjMapi<
  PetitDom$PetitDom$DomElements,
  <P>(
    P
  ) => PetitDom$PetitDom$Props<
    $ElementType<PetitDom$PetitDom$DomElements, P>
  > & {
    content?:
      | PetitDom$PetitDom$Content
      | $ReadOnlyArray<PetitDom$PetitDom$Content>
  }
>;
declare module "global" {
}
declare type PetitDom$Key = string | number;

declare type PetitDom$ComponentProps = { [key: string]: any };

declare type PetitDom$Content = string | PetitDom$VNode;

declare type PetitDom$DOMElementProps<E: JSX$Element> = $ObjMapi<
  E,
  <P>(P) => $ElementType<E, P>
>;

declare interface PetitDom$IntrinsicProps {
  key?: PetitDom$Key;
}

declare type PetitDom$Props<
  E: JSX$Element = JSX$Element
> = PetitDom$IntrinsicProps & PetitDom$DOMElementProps<E>;

declare type PetitDom$ShouldUpdate<P: PetitDom$ComponentProps> = (
  newProps: P,
  oldProps: P,
  newContent: $ReadOnlyArray<PetitDom$VNode>,
  oldContent: $ReadOnlyArray<PetitDom$VNode>
) => boolean;

declare interface PetitDom$FunctionComponent<P: PetitDom$ComponentProps> {
  (
    props: P,
    content: $ReadOnlyArray<PetitDom$Content>
  ): PetitDom$FunctionComponentNode<P>;
  shouldUpdate?: PetitDom$ShouldUpdate<P>;
}

declare interface PetitDom$ComponentClass<P: PetitDom$ComponentProps> {
  new(
    props: P,
    content: $ReadOnlyArray<PetitDom$Content>
  ): PetitDom$Component<P>;
}

declare interface PetitDom$Component<P: PetitDom$ComponentProps> {
  mount(props: P, content: $ReadOnlyArray<PetitDom$VNode>): JSX$Element;
  patch(
    element: JSX$Element,
    newProps: P,
    oldProps: P,
    newContent: $ReadOnlyArray<PetitDom$VNode>,
    oldContent: $ReadOnlyArray<PetitDom$VNode>
  ): JSX$Element;
  unmount(element: JSX$Element): void;
}

declare interface PetitDom$VNode {
  +isSVG: boolean;
  +type: any;
  +key: PetitDom$Key | null;
  +props: any;
  +content: $ReadOnlyArray<PetitDom$VNode>;
}

declare type PetitDom$ElementNode<
  T: $Keys<PetitDom$DomElements>,
  E: $ElementType<PetitDom$DomElements, T>
> = {
  +type: T,
  +props: PetitDom$Props<E>
} & PetitDom$VNode;

declare type PetitDom$ComponentNode<P: PetitDom$ComponentProps> = {
  +type: PetitDom$Component<P>,
  +props: P & PetitDom$IntrinsicProps
} & PetitDom$VNode;

declare type PetitDom$ComponentClassNode<P: PetitDom$ComponentProps> = {
  +type: PetitDom$ComponentClass<P>,
  +props: P & PetitDom$IntrinsicProps
} & PetitDom$VNode;

declare type PetitDom$FunctionComponentNode<P: PetitDom$ComponentProps> = {
  +type: PetitDom$FunctionComponent<P>,
  +props: P & PetitDom$IntrinsicProps
} & PetitDom$VNode;

declare type PetitDom$DomElements = {
  main: HTMLMainElement
} & HTMLElementTagNameMap &
  SVGElementTagNameMap;
declare module "petit-dom" {
  /**
   * Creates a VNode of the specified HTML Element type and with the
   * specified properties and contents.
   * @param type - The tag name of element to create
   * @param props - Properties to set on the element
   * @param - Child nodes
   * @returns A new VNode object
   */
  declare export function h<
    T: $Keys<ElementTagNameMap>,
    E: $ElementType<ElementTagNameMap, T>
  >(
    type: T,
    props?: PetitDom$PetitDom$Props<E> | null,
    ...children: PetitDom$PetitDom$Content[]
  ): PetitDom$PetitDom$ElementNode<T, E>;

  /**
   * Creates a VNode using a PetitDom component object.
   * @param type - A PetitDom component object
   * @param props - Properties to set on the component
   * @param - Child nodes
   * @returns A new VNode object
   */
  declare export function h<P: PetitDom$PetitDom$ComponentProps>(
    type: PetitDom$PetitDom$Component<P>,
    props?: P | null,
    ...children: PetitDom$PetitDom$Content[]
  ): PetitDom$PetitDom$ComponentNode<P>;

  /**
   * Creates a VNode using a PetitDom component class.
   * @param type - A PetitDom component class
   * @param props - Properties to set on the component
   * @param - Child nodes
   * @returns A new VNode object
   */
  declare export function h<P: PetitDom$PetitDom$ComponentProps>(
    type: PetitDom$PetitDom$ComponentClass<P>,
    props?: P | null,
    ...children: PetitDom$PetitDom$Content[]
  ): PetitDom$PetitDom$ComponentClassNode<P>;

  /**
   * Creates a VNode using a PetitDom function component.
   *
   * This function is compatible with both JSX and HyperScript syntax.
   * @param type - A PetitDom function component
   * @param props - Properties to set on the component
   * @param - Child nodes
   * @returns A new VNode object
   */
  declare export function h<P: PetitDom$PetitDom$ComponentProps>(
    type: PetitDom$PetitDom$FunctionComponent<P>,
    props?: P | null,
    ...children: PetitDom$PetitDom$Content[]
  ): PetitDom$PetitDom$FunctionComponentNode<P>;

  /**
   * Creates actual DOM Elements for the given VNode and its children.
   * @param vnode - The VNode object to mount
   * @returns The newly-created DOM element
   */
  declare export function mount(vnode: PetitDom$PetitDom$VNode): JSX$Element;

  /**
   * Diffs two VNodes and applies the necessary DOM changes
   * @param newVNode - The new VNode object, which will be mounted to the DOM element of oldVNode
   * @param oldVNode - The old VNode object to diff against
   * @param parent - The parent DOM element. Used internally by PetitDom to recursively patch child nodes
   * @returns The updated DOM element. This element is also moved from oldVNode to newVNode
   */
  declare export function patch(
    newVNode: PetitDom$PetitDom$VNode,
    oldVNode: PetitDom$PetitDom$VNode,
    parent?: JSX$Element
  ): JSX$Element;

  /**
   * Removes the given VNode from the actual DOM
   * @param vnode - The VNode object to unmount
   */
  declare export function unmount(vnode: PetitDom$PetitDom$VNode): void;
}
