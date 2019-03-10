declare module "rc-slider" {
  import typeof * as React from "react";

  import type { RCTooltip } from "rc-tooltip";

  declare export interface Marks {
    [number: number]:
      | React$Node
      | string
      | {
          style: any,
          label: string | React$Node
        };
  }
  declare export interface CommonApiProps {
    /**
     * Additional CSS class for the root DOM node
     * @default ''
     */
    className?: string;

    /**
     * The minimum value of the slider
     * @default 0
     */
    min?: number;

    /**
     * The maximum value of the slider
     * @default 100
     */
    max?: number;

    /**
     * Marks on the slider. The key determines the position, and the value determines what will show.
     * If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.
     * @default '{}' | {number: { style, label }}
     */
    marks?: Marks;

    /**
     * Value to be added or subtracted on each step the slider makes. Must be greater than zero, and max - min should be evenly divisible by the step value.
     * @default 1
     */
    step?: number | null;

    /**
     * If vertical is true, the slider will be vertical.
     * @default false
     */
    vertical?: boolean;

    /**
     * A handle generator which could be used to customized handle.
     */
    handle?: (props: any) => React.Node;

    /**
     * If the value is true, it means a continuous value interval, otherwise, it is a independent value.
     * @default true
     */
    included?: boolean;

    /**
     * If true, handles can't be moved.
     * @default false
     */
    disabled?: boolean;

    /**
     * When the step value is greater than 1, you can set the dots to true if you want to render the slider with dots.
     * @default false
     */
    dots?: boolean;

    /**
     * @deprecated in version ^6.0.0. Use rc-tooltip
     * Tooltip transition class name
     */
    tipTransitionName?: string;

    /**
     * @deprecated in version ^6.0.0. Use rc-tooltip
     * Tooltip formatter
     */
    tipFormatter?: ((value: any) => any | void) | null;

    /**
     * The style used for the background and container. (both for slider(Object) and range(Array of Object), the array will be used for mutli handle follow element order)
     */
    style?: React.CSSProperties[] | React.CSSProperties;

    /**
     * The style used for handle. (both for slider(Object) and range(Array of Object), the array will be used for mutli handle follow element order)
     */
    handleStyle?: React.CSSProperties[] | React.CSSProperties;

    /**
     * The style used for track. (both for slider(Object) and range(Array of Object), the array will be used for mutli track follow element order)
     */
    trackStyle?: React.CSSProperties[] | React.CSSProperties;

    /**
     * The style used for the track base color.
     */
    railStyle?: React.CSSProperties;

    /**
     * The style used for the dots.
     */
    dotStyle?: React.CSSProperties;

    /**
     * The style used for the active dots.
     */
    activeDotStyle?: React.CSSProperties;
  }
  declare export type SliderProps = {
    /**
     * onBeforeChange will be triggered when ontouchstart or onmousedown is triggered.
     */
    onBeforeChange?: (value: number) => void,

    /**
     * onChange will be triggered while the value of Slider changing.
     */
    onChange?: (value: number) => void,

    /**
     * onAfterChange will be triggered when ontouchend or onmouseup is triggered.
     */
    onAfterChange?: (value: number) => void,

    /**
     * Set initial value of slider.
     * @default 0
     */
    defaultValue?: number,

    /**
     * Set current value of slider.
     */
    value?: number,

    /**
     * Set the tabIndex of the slider handle.
     * @default 0
     */
    tabIndex?: number
  } & CommonApiProps;

  declare export type RangeProps = {
    /**
     * onBeforeChange will be triggered when ontouchstart or onmousedown is triggered.
     * For prop (count = -1) type returned is [number, undefined]. Bug raised in rc-slider https://github.com/react-component/slider/issues/457
     */
    onBeforeChange?: (value: number[]) => void,

    /**
     * onChange will be triggered while the value of Slider changing.
     * For prop (count = -1) type returned is [number, undefined]. Bug raised in rc-slider https://github.com/react-component/slider/issues/457
     */
    onChange?: (value: number[]) => void,

    /**
     * onAfterChange will be triggered when ontouchend or onmouseup is triggered.
     * For prop (count = -1) type returned is [number, undefined]. Bug raised in rc-slider https://github.com/react-component/slider/issues/457
     */
    onAfterChange?: (value: number[]) => void,

    /**
     * Set initial positions of handles.
     * @default [0,0]
     */
    defaultValue?: number[],

    /**
     * Set current positions of handles.
     */
    value?: number[],

    /**
     * Set the tabIndex of each handle.
     * @default [0,0]
     */
    tabIndex?: number[],

    /**
     * Determine how many ranges to render, and multiple handles will be rendered (number + 1).
     * @default 1
     */
    count?: number,

    /**
     * allowCross could be set as true to allow those handles to cross.
     * @default true
     */
    allowCross?: boolean,

    /**
     * pushable could be set as true to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles.
     * @default true
     */
    pushable?: boolean | number
  } & CommonApiProps;

  declare export type HandleProps = {
    /**
     * Class name
     */
    className: string,

    /**
     * Styling if true, then bottom: {offset} else left: {offset}
     * @default False
     */
    vertical: boolean,

    /**
     * Styling option offset
     */
    offset: number
  } & CommonApiProps;

  declare export interface WithTooltipProps {
    tipFormatter?: (value: number) => React.Node;
    tipProps?: $Shape<RCTooltip.Props>;
  }
  declare export default class Slider mixins React.Component<SliderProps> {}
  declare export class Range mixins React.Component<RangeProps> {}
  declare export class Handle mixins React.Component<HandleProps> {}
  declare export function createSliderWithTooltip(
    slider: typeof Slider
  ): () => React.Component<WithTooltipProps & SliderProps>;

  declare export function createSliderWithTooltip(
    range: typeof Range
  ): () => React.Component<WithTooltipProps & RangeProps>;
}
