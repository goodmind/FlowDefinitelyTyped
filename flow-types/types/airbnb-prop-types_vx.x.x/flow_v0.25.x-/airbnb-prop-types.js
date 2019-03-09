declare module "airbnb-prop-types" {
  import typeof * as PropTypes from "prop-types";

  declare export interface ReactComponentLike {
    setState(...args: any[]): any;
    forceUpdate(...args: any[]): any;
    render(): PropTypes.ReactNodeLike;
    props: any;
    state: any;
    context: any;
    refs: any;
  }
  declare export interface ReactClassComponentLike {
    new(...args: any[]): ReactComponentLike;
  }
  declare export type ReactFunctionComponentLike = (
    ...args: any[]
  ) => PropTypes.ReactNodeLike;
  declare export type ReactTypeLike =
    | string
    | ReactClassComponentLike
    | ReactFunctionComponentLike;
  declare export interface Specifier<T = any> {
    max?: number;
    min?: number;
    validator: PropTypes.Validator<T>;
  }
  declare export function and<A>(
    propTypes: [PropTypes.Validator<A>],
    name?: string
  ): PropTypes.Requireable<A>;

  declare export function and<A, B>(
    propTypes: [PropTypes.Validator<A>, PropTypes.Validator<B>],
    name?: string
  ): PropTypes.Requireable<A & B>;

  declare export function and<A, B, C>(
    propTypes: [
      PropTypes.Validator<A>,
      PropTypes.Validator<B>,
      PropTypes.Validator<C>
    ],
    name?: string
  ): PropTypes.Requireable<A & B & C>;

  declare export function and<T>(
    propTypes: Array<PropTypes.Validator<any>>,
    name?: string
  ): PropTypes.Requireable<T>;

  declare export function between(options: {
    lt?: number,
    lte?: number,
    gt?: number,
    gte?: number
  }): PropTypes.Requireable<number>;

  declare export function booleanSome(
    ...props: string[]
  ): PropTypes.Requireable<boolean>;

  declare export function childrenHavePropXorChildren<T>(
    prop: string | Symbol
  ): PropTypes.Requireable<T>;

  declare export function childrenOf<T, P>(
    propType: PropTypes.Validator<P>
  ): PropTypes.Requireable<T>;

  declare export function childrenOfType<T>(
    ...types: ReactTypeLike[]
  ): PropTypes.Requireable<T>;

  declare export function childrenSequenceOf<T>(
    ...specifiers: Specifier<>[]
  ): PropTypes.Requireable<T>;

  declare export function componentWithName<T>(
    name: string | RegExp,
    options?: {
      stripHOCs: $ReadOnlyArray<string>
    }
  ): PropTypes.Requireable<T>;

  declare export function disallowedIf<T>(
    propType: PropTypes.Requireable<T>,
    otherPropName: string,
    otherPropType: PropTypes.Validator<any>
  ): PropTypes.Requireable<T>;

  declare export function elementType<T>(
    type: ReactTypeLike
  ): PropTypes.Requireable<T>;

  declare export function explicitNull(): PropTypes.Requireable<null | void>;

  declare export function forbidExtraProps<T: { [key: string]: any }>(
    propTypes: PropTypes.ValidationMap<T>
  ): PropTypes.ValidationMap<T>;

  declare export function integer(): PropTypes.Requireable<number>;

  declare export function keysOf<T, P>(
    propType: PropTypes.Validator<P>,
    name?: string
  ): PropTypes.Requireable<T>;

  declare export function mutuallyExclusiveProps<T>(
    propType: PropTypes.Requireable<T>,
    ...propNames: string[]
  ): PropTypes.Requireable<T>;

  declare export function mutuallyExclusiveProps<T>(
    propType: PropTypes.Validator<T>,
    ...propNames: string[]
  ): PropTypes.Requireable<T>;

  declare export function mutuallyExclusiveTrueProps(
    ...propNames: string[]
  ): PropTypes.Requireable<boolean>;

  declare export function nChildren<T, P>(
    n: number,
    propType?: PropTypes.Validator<P>
  ): PropTypes.Requireable<T>;

  declare export var nonNegativeInteger: PropTypes.Requireable<number>;
  declare export function nonNegativeNumber(): PropTypes.Requireable<number>;

  declare export function numericString(): PropTypes.Requireable<string>;

  declare export function object<
    T: { [key: string]: any }
  >(): PropTypes.Requireable<T>;

  declare export function or<A>(
    propTypes: [PropTypes.Validator<A>],
    name?: string
  ): PropTypes.Requireable<A>;

  declare export function or<A, B>(
    propTypes: [PropTypes.Validator<A>, PropTypes.Validator<B>],
    name?: string
  ): PropTypes.Requireable<A | B>;

  declare export function or<A, B, C>(
    propTypes: [
      PropTypes.Validator<A>,
      PropTypes.Validator<B>,
      PropTypes.Validator<C>
    ],
    name?: string
  ): PropTypes.Requireable<A | B | C>;

  declare export function or<T>(
    propTypes: Array<PropTypes.Validator<T>>,
    name?: string
  ): PropTypes.Requireable<T>;

  declare export function or<T>(
    propTypes: Array<PropTypes.Validator<any>>,
    name?: string
  ): PropTypes.Requireable<T>;

  declare export function range<T: number>(
    min?: number,
    max?: number
  ): PropTypes.Requireable<T>;

  declare export function range(
    min?: number,
    max?: number
  ): PropTypes.Requireable<number>;

  declare export function requiredBy<P>(
    requiredByPropName: string,
    propType: PropTypes.Validator<P>,
    defaultValue?: any
  ): PropTypes.Requireable<P>;

  declare export function restrictedProp<T>(
    messageFunction?: (
      props: { [key: string]: any },
      propName: string,
      componentName: string,
      location: string,
      propFullName: string
    ) => string | Error | void
  ): PropTypes.Requireable<T>;

  declare export function sequenceOf<T>(
    ...specifiers: Specifier<>[]
  ): PropTypes.Requireable<T>;

  declare export function shape<T: { [key: string]: any }>(
    propTypes: PropTypes.ValidationMap<T>
  ): PropTypes.Requireable<T>;

  declare export function stringStartsWith(
    string: string
  ): PropTypes.Requireable<string>;

  declare export function uniqueArray<T>(): PropTypes.Requireable<T[]>;

  declare export function uniqueArrayOf<T, P>(
    propType: PropTypes.Validator<P>,
    mapperOrName: ((value: any) => any) | string,
    name?: string
  ): PropTypes.Requireable<T[]>;

  declare export function valuesOf<T>(
    propType: PropTypes.Validator<T>
  ): PropTypes.Requireable<{
    [key: string]: T
  }>;

  declare export function withShape<T: { [key: string]: any }, P, S>(
    propType: PropTypes.Validator<P>,
    propTypes: PropTypes.ValidationMap<S>
  ): PropTypes.Requireable<T>;
}
