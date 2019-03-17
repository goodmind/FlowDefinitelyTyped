declare module "react-dom" {
  import type {
    ReactInstance,
    Component,
    ComponentState,
    ReactElement,
    SFCElement,
    CElement,
    DOMAttributes,
    DOMElement,
    Node,
    ReactPortal
  } from "react";

  declare export function findDOMNode(
    instance: ReactInstance
  ): Element | null | Text;

  declare export function unmountComponentAtNode(container: Element): boolean;

  declare export function createPortal(
    children: Node,
    container: Element,
    key?: null | string
  ): ReactPortal;

  declare export var version: string;
  declare export var render: Renderer;
  declare export var hydrate: Renderer;
  declare export function unstable_batchedUpdates<A, B>(
    callback: (a: A, b: B) => any,
    a: A,
    b: B
  ): void;

  declare export function unstable_batchedUpdates<A>(
    callback: (a: A) => any,
    a: A
  ): void;

  declare export function unstable_batchedUpdates(callback: () => any): void;

  declare export function unstable_renderSubtreeIntoContainer<T: Element>(
    parentComponent: Component<any>,
    element: DOMElement<DOMAttributes<T>, T>,
    container: Element,
    callback?: (element: T) => any
  ): T;

  declare export function unstable_renderSubtreeIntoContainer<
    P,
    T: Component<P, ComponentState>
  >(
    parentComponent: Component<any>,
    element: CElement<P, T>,
    container: Element,
    callback?: (component: T) => any
  ): T;

  declare export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: Component<any>,
    element: ReactElement<P>,
    container: Element,
    callback?: (component?: Component<P, ComponentState> | Element) => any
  ): Component<P, ComponentState> | Element | void;

  declare export interface Renderer {
    <T: Element>(
      element: DOMElement<DOMAttributes<T>, T>,
      container: Element | null,
      callback?: () => void
    ): T;
    (
      element: Array<DOMElement<DOMAttributes<any>, any>>,
      container: Element | null,
      callback?: () => void
    ): Element;
    (
      element: SFCElement<any> | Array<SFCElement<any>>,
      container: Element | null,
      callback?: () => void
    ): void;
    <P, T: Component<P, ComponentState>>(
      element: CElement<P, T>,
      container: Element | null,
      callback?: () => void
    ): T;
    (
      element: Array<CElement<any, Component<any, ComponentState>>>,
      container: Element | null,
      callback?: () => void
    ): Component<any, ComponentState>;
    <P>(
      element: ReactElement<P>,
      container: Element | null,
      callback?: () => void
    ): Component<P, ComponentState> | Element | void;
    (
      element: Array<ReactElement<any>>,
      container: Element | null,
      callback?: () => void
    ): Component<any, ComponentState> | Element | void;
    (
      parentComponent: Component<any> | Array<Component<any>>,
      element: SFCElement<any>,
      container: Element,
      callback?: () => void
    ): void;
  }
}
