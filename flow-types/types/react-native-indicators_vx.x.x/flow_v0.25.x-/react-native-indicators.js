declare module "react-native-indicators" {
  import type { Component } from "react";

  import type { Animated, EasingFunction } from "react-native";

  declare export interface BaseIndicatorProps {
    /**
     * Animation easing function
     * @default Easing.linear
     */
    animationEasing?: EasingFunction;

    /**
     * Animation duration in ms
     * @default1200
     */
    animationDuration?: number;
  }
  declare export type UIActivityIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Component count
     * @default 12
     */
    count?: number,

    /**
     * Base component size
     * @default 40
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class UIActivityIndicator
    mixins Component<UIActivityIndicatorProps> {}
  declare export type BallIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Component count
     * @default 8
     */
    count?: number,

    /**
     * Base component size
     * @default 40
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class BallIndicator mixins Component<BallIndicatorProps> {}
  declare export type BarIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Component count
     * @default 3
     */
    count?: number,

    /**
     * Base component size
     * @default 40
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class BarIndicator mixins Component<BarIndicatorProps> {}
  declare export type DotIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Component count
     * @default 4
     */
    count?: number,

    /**
     * Base component size
     * @default 16
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class DotIndicator mixins Component<DotIndicatorProps> {}
  declare export type MaterialIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Base component size
     * @default 40
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class MaterialIndicator
    mixins Component<MaterialIndicatorProps> {}
  declare export type PulseIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Base component size
     * @default 40
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class PulseIndicator mixins Component<PulseIndicatorProps> {}
  declare export type PacmanIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Base component size
     * @default 48
     */
    size?: number
  } & BaseIndicatorProps;

  declare export class PacmanIndicator mixins Component<PacmanIndicatorProps> {}
  declare export type SkypeIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Component count
     * @default 5
     */
    count?: number,

    /**
     * Base component size
     * @default 40
     */
    size?: number,

    /**
     * Minimum component scale
     * @default 0.2
     */
    minScale?: number,

    /**
     * Maximum component scale
     * @default 1.0
     */
    maxScale?: number
  } & BaseIndicatorProps;

  declare export class SkypeIndicator mixins Component<SkypeIndicatorProps> {}
  declare export type WaveIndicatorProps = {
    /**
     * Component color
     * @default 'rgb(0, 0, 0)'
     */
    color?: string,

    /**
     * Component count
     * @default 4
     */
    count?: number,

    /**
     * Base component size
     * @default 40
     */
    size?: number,

    /**
     * Minimum component scale
     * @default 0.54
     */
    waveFactor?: number,

    /**
     * Maximum component scale
     * @default 'fill'
     */
    waveMode?: "fill" | "outline"
  } & BaseIndicatorProps;

  declare export class WaveIndicator mixins Component<WaveIndicatorProps> {}
}
