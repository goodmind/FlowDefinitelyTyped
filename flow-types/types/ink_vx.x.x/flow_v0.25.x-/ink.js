declare module "global" {
  declare type JSX$Element = InkElement;

  declare type JSX$ElementClass = Component;

  declare type JSX$FunctionalElement = StatelessComponent;

  declare interface JSX$ElementAttributesProperty {
    props: {};
  }

  declare interface JSX$ElementChildrenAttribute {
    children: {};
  }

  declare interface JSX$IntrinsicClassAttributes<T> {
    ref?: (ref: T | null) => void;
  }

  declare interface JSX$IntrinsicElements {
    div: {};
    span: {};
    br: {};
  }
}
declare module "ink" {
  import type { ValidationMap } from "prop-types";

  declare export interface InkElement {
    component: InkComponent<any>;
    instance: Component<any, any, any> | null;
    ref: (ref: any) => void;
    _props: any;
    _children: InkNode[];
  }
  declare export type InkNode =
    | $ReadOnlyArray<InkElement | string | number | null>
    | InkElement
    | string
    | number
    | null;
  declare export function h<P: Record<string, any>>(
    type: ComponentClass<P, any, any> | StatelessComponent<P, any>,
    props: P,
    ...children: InkNode[]
  ): InkElement;

  declare export function h<T: $Keys<JSX$IntrinsicElements>>(
    type: T,
    props: $ElementType<JSX$IntrinsicElements, T>,
    ...children: InkNode[]
  ): InkElement;

  declare export function render(
    tree: InkElement,
    stream?: NodeJS$WriteStream
  ): () => void;

  declare export function renderToString(
    tree: InkElement,
    prevTree?: InkElement
  ): string;

  declare export type InkComponent<P: Record<string, any> = {}> =
    | ComponentClass<P, any, any>
    | StatelessComponent<P, any>;
  declare export interface StatelessComponent<
    P: Record<string, any> = {},
    C: Record<string, any> = {}
  > {
    (props: P, context: C): InkElement;
    defaultProps?: Record<string, any>;
    propTypes?: ValidationMap<Record<string, any>>;
  }
  declare export interface Component<
    P: Record<string, any> = {},
    S: Record<string, any> = {},
    C: Record<string, any> = {}
  > {
    state: S;
    render(
      props: $PropertyType<Component<>, "props">,
      state: $PropertyType<Component<>, "state">,
      context: $PropertyType<Component<>, "state">
    ): InkElement;
    componentWillMount?: () => void;
    componentDidMount?: () => void;
    componentWillUnmount?: () => void;
    componentWillReceiveProps?: (
      nextProps: $PropertyType<Component<>, "props">,
      nextState: $PropertyType<Component<>, "state">
    ) => void;
    shouldComponentUpdate?: (
      nextProps: $PropertyType<Component<>, "props">,
      nextState: $PropertyType<Component<>, "state">
    ) => void;
    componentWillUpdate?: (
      nextProps: $PropertyType<Component<>, "props">,
      nextState: $PropertyType<Component<>, "state">
    ) => void;
    componentDidUpdate?: () => void;
    getChildContext?: () => () => Record<string, any>;
  }
  declare export interface ComponentClass<
    P: Record<string, any> = {},
    S: Record<string, any> = {},
    C: Record<string, any> = {}
  > {
    new(
      props: $PropertyType<Component<>, "props">,
      context: $PropertyType<Component<>, "state">
    ): Component<P, S, C>;
    defaultProps?: Record<string, any>;
    propTypes?: ValidationMap<Record<string, any>>;
  }

  declare var npm$namespace$h: {
    Fragment: typeof h$Fragment
  };
  declare var h$Fragment: InkComponent<>;
  declare export var h$Fragment: typeof h$Fragment;
  declare export var Color: ComponentClass<{
    rgb?: [number, number, number],
    hsl?: [number, number, number],
    hsv?: [number, number, number],
    hwb?: [number, number, number],
    hex?: string,
    keyword?: string,
    bgRgb?: [number, number, number],
    bgHsl?: [number, number, number],
    bgHsv?: [number, number, number],
    bgHwb?: [number, number, number],
    bgHex?: string,
    bgKeyword?: string,
    reset?: boolean,
    bold?: boolean,
    dim?: boolean,
    italic?: boolean,
    underline?: boolean,
    inverse?: boolean,
    hidden?: boolean,
    strikethrough?: boolean,
    visible?: boolean,
    black?: boolean,
    red?: boolean,
    green?: boolean,
    yellow?: boolean,
    blue?: boolean,
    magenta?: boolean,
    cyan?: boolean,
    white?: boolean,
    gray?: boolean,
    grey?: boolean,
    blackBright?: boolean,
    redBright?: boolean,
    greenBright?: boolean,
    yellowBright?: boolean,
    blueBright?: boolean,
    magentaBright?: boolean,
    cyanBright?: boolean,
    whiteBright?: boolean,
    bgBlack?: boolean,
    bgRed?: boolean,
    bgGreen?: boolean,
    bgYellow?: boolean,
    bgBlue?: boolean,
    bgMagenta?: boolean,
    bgCyan?: boolean,
    bgWhite?: boolean,
    bgBlackBright?: boolean,
    bgRedBright?: boolean,
    bgGreenBright?: boolean,
    bgYellowBright?: boolean,
    bgBlueBright?: boolean,
    bgMagentaBright?: boolean,
    bgCyanBright?: boolean,
    bgWhiteBright?: boolean
  }>;
  declare export var Bold: InkComponent<>;
  declare export var Underline: InkComponent<>;
}
