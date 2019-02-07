declare module "halogen" {
  import typeof * as react from "react";

  declare export type VerticalAlign =
    | "baseline"
    | "length"
    | "sub"
    | "super"
    | "top"
    | "text-top"
    | "middle"
    | "bottom"
    | "text-bottom"
    | "initial"
    | "inherit";
  declare export interface HalogenCommonProps {
    loading?: boolean;
    color?: string;
    id?: string;
    className?: string;
    verticalAlign?: VerticalAlign;
  }
  declare export type SizeLoaderProps = {
    size?: string
  } & HalogenCommonProps;

  declare export type MarginLoaderProps<T> = {
    margin?: T,
    size?: T
  } & HalogenCommonProps;

  declare export type RadiusLoaderProps = {
    height?: string,
    width?: string,
    radius?: string
  } & MarginLoaderProps<string>;

  /**
   * React components
   */
  declare export type PulseLoader = react.Component<MarginLoaderProps<string>>;
  declare export var PulseLoader: react.ComponentClass<
    MarginLoaderProps<string>
  >;
  declare export type RotateLoader = react.Component<MarginLoaderProps<string>>;
  declare export var RotateLoader: react.ComponentClass<
    MarginLoaderProps<string>
  >;
  declare export type BeatLoader = react.Component<MarginLoaderProps<string>>;
  declare export var BeatLoader: react.ComponentClass<
    MarginLoaderProps<string>
  >;
  declare export type RiseLoader = react.Component<MarginLoaderProps<string>>;
  declare export var RiseLoader: react.ComponentClass<
    MarginLoaderProps<string>
  >;
  declare export type SyncLoader = react.Component<MarginLoaderProps<string>>;
  declare export var SyncLoader: react.ComponentClass<
    MarginLoaderProps<string>
  >;
  declare export type GridLoader = react.Component<MarginLoaderProps<string>>;
  declare export var GridLoader: react.ComponentClass<
    MarginLoaderProps<string>
  >;
  declare export type ClipLoader = react.Component<SizeLoaderProps>;
  declare export var ClipLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type SquareLoader = react.Component<SizeLoaderProps>;
  declare export var SquareLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type DotLoader = react.Component<SizeLoaderProps>;
  declare export var DotLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type PacmanLoader = react.Component<MarginLoaderProps<number>>;
  declare export var PacmanLoader: react.ComponentClass<
    MarginLoaderProps<number>
  >;
  declare export type MoonLoader = react.Component<SizeLoaderProps>;
  declare export var MoonLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type RingLoader = react.Component<SizeLoaderProps>;
  declare export var RingLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type BounceLoader = react.Component<SizeLoaderProps>;
  declare export var BounceLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type SkewLoader = react.Component<SizeLoaderProps>;
  declare export var SkewLoader: react.ComponentClass<SizeLoaderProps>;
  declare export type FadeLoader = react.Component<RadiusLoaderProps>;
  declare export var FadeLoader: react.ComponentClass<RadiusLoaderProps>;
  declare export type ScaleLoader = react.Component<RadiusLoaderProps>;
  declare export var ScaleLoader: react.ComponentClass<RadiusLoaderProps>;
}
