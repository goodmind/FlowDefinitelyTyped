declare module "styletron-react" {
  import typeof * as React from "react";

  import type { driver, StandardEngine, StyleObject } from "styletron-standard";

  declare export { StyleObject, StandardEngine };

  declare export interface Reducer {
    (style: StyleObject, props?: { [key: string]: any }): StyleObject;
  }
  declare export interface AssignmentCommutativeReducerContainer {
    assignmentCommutative: true;
    reducer: Reducer;
    style: StyleObject;
    factory: (style: StyleObject) => AssignmentCommutativeReducerContainer;
  }
  declare export interface NonAssignmentCommutativeReducerContainer {
    assignmentCommutative: false;
    reducer: Reducer;
  }
  declare export type ReducerContainer =
    | AssignmentCommutativeReducerContainer
    | NonAssignmentCommutativeReducerContainer;
  declare export type StackIndex = number;
  declare export interface StackInfo {
    stack: string | void;
    stacktrace: any;
    message: string;
  }
  declare export type StyletronBase = React.ElementType;
  declare export type StyletronDriver = typeof driver;
  declare export type StyletronGetInitialStyle = () => StyleObject;
  declare export type StyletronWrapper = (
    fc: React.FC<any>
  ) => React.ComponentType<any>;
  declare export interface Styletron {
    reducers: $ReadOnlyArray<ReducerContainer>;
    base: StyletronBase;
    driver: StyletronDriver;
    wrapper: StyletronWrapper;
    getInitialStyle: StyletronGetInitialStyle;
    debug?: {
      stackIndex: StackIndex,
      stackInfo: StackInfo
    };
  }
  declare export type StyletronComponent<Props> = React.FC<Props> & {
    __STYLETRON__: Styletron
  };
  declare export interface StyledFn {
    <
      C: $Keys<JSX.IntrinsicElements> | React.ComponentType<any>,
      P: { [key: string]: any }
    >(
      component: C,
      style: (props: P) => StyleObject
    ): StyletronComponent<
      Pick<
        React.ComponentProps<C>,
        Exclude<
          $Keys<React.ComponentProps<C>>,
          {
            className: string
          }
        >
      > &
        P
    >;
    <C: $Keys<JSX.IntrinsicElements> | React.ComponentType<any>>(
      component: C,
      style: StyleObject
    ): StyletronComponent<
      Pick<
        React.ComponentProps<C>,
        Exclude<
          $Keys<React.ComponentProps<C>>,
          {
            className: string
          }
        >
      >
    >;
  }
  declare export interface WithStyleFn {
    <C: StyletronComponent<any>, P: { [key: string]: any }>(
      component: C,
      style: (props: P) => StyleObject
    ): StyletronComponent<React.ComponentProps<C> & P>;
    <C: StyletronComponent<any>>(
      component: C,
      style: StyleObject
    ): StyletronComponent<React.ComponentProps<C>>;
  }
  declare export interface WithTransformFn {
    <C: StyletronComponent<any>, P: { [key: string]: any }>(
      component: C,
      style: (style: StyleObject, props: P) => StyleObject
    ): StyletronComponent<React.ComponentProps<C> & P>;
  }
  declare export interface WithWrapperFn {
    <C: StyletronComponent<any>, P: { [key: string]: any }>(
      component: C,
      wrapper: (component: C) => React.ComponentType<P>
    ): StyletronComponent<React.ComponentProps<C> & P>;
  }
  declare export class BrowserDebugEngine {
    debug(stack: {
      stackIndex: StackIndex,
      stackInfo: StackInfo
    }): string;
  }
  declare export class NoopDebugEngine {
    debug(): void;
  }
  declare export type DebugEngine = BrowserDebugEngine | NoopDebugEngine;
  declare export interface DevProviderProps {
    children: React.Node;
    value: StandardEngine;
    debugAfterHydration?: boolean;

    /**
     * DebugEngineContext
     */
    debug?: DebugEngine;
  }
  declare export class DevProvider
    mixins React.Component<
        DevProviderProps,
        {
          hydrating: boolean
        }
      > {}
  declare export var Provider:
    | typeof DevProvider
    | React.Provider<StandardEngine>;
  declare export function DevConsumer(props: {
    children: (
      styletronEngine: StandardEngine,
      debugEngine: DebugEngine,
      hydrating: boolean
    ) => React.Node
  }): React$Node;

  /**
   * @param style the StyleObject
   * @returns string to be used in className prop of JSX.Element
   */
  declare export type CSSFn = (style: StyleObject) => string;
  declare export function useStyletron(): $ReadOnly<[CSSFn]>;

  declare export interface CreateStyledOptions {
    getInitialStyle: StyletronGetInitialStyle;
    driver: StyletronDriver;
    wrapper: StyletronWrapper;
  }
  declare export function createStyled(options: CreateStyledOptions): StyledFn;

  declare export var styled: $Call<typeof createStyled>;
  declare export function createStyledElementComponent(
    styletron: Styletron
  ): StyletronComponent<any>;

  declare export var withTransform: WithTransformFn;
  declare export var withStyleDeep: WithStyleFn;
  declare export var withStyle: typeof withStyleDeep;
  declare export var withWrapper: WithWrapperFn;
  declare export function composeStatic(
    styletron: Styletron,
    reducerContainer: ReducerContainer
  ): Styletron;

  declare export function composeDynamic(
    styletron: Styletron,
    reducer: (style: StyleObject, props: { [key: string]: any }) => StyleObject
  ): Styletron;

  declare export function staticComposeShallow(
    styletron: Styletron,
    style: StyleObject
  ): $Call<typeof composeStatic>;

  declare export function staticComposeDeep(
    styletron: Styletron,
    style: StyleObject
  ): $Call<typeof composeStatic>;

  declare export function dynamicComposeShallow(
    styletron: Styletron,
    styleArg: (props: { [key: string]: any }) => StyleObject
  ): $Call<typeof composeDynamic>;

  declare export function dynamicComposeDeep(
    styletron: Styletron,
    styleArg: (props: { [key: string]: any }) => StyleObject
  ): $Call<typeof composeDynamic>;

  declare export function autoComposeShallow(
    styletron: Styletron,
    styleArg: StyleObject | ((props: { [key: string]: any }) => StyleObject)
  ): $Call<typeof staticComposeShallow>;

  declare export function autoComposeDeep(
    styletron: Styletron,
    styleArg: StyleObject
  ): $Call<typeof staticComposeDeep>;

  declare export function autoComposeDeep(
    styletron: Styletron,
    styleArg: (props: { [key: string]: any }) => StyleObject
  ): $Call<typeof dynamicComposeDeep>;

  declare export function createShallowMergeReducer(
    style: StyleObject
  ): AssignmentCommutativeReducerContainer;

  declare export function createDeepMergeReducer(
    style: StyleObject
  ): AssignmentCommutativeReducerContainer;

  declare export function resolveStyle(
    getInitialStyle: () => StyleObject,
    reducers: $ReadOnlyArray<ReducerContainer>,
    props: { [key: string]: any }
  ): StyleObject;
}
