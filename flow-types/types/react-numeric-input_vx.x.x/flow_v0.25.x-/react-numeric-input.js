declare module "react-numeric-input" {
  import typeof * as React from "react";

  declare module.exports: typeof NumericInput;

  declare type NumericInput$BoundsFunctionProp =
    | number
    | ((component: NumericInput) => number | void);

  declare type NumericInput$Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;

  declare type NumericInput$NumericInputProps = {
    addLabelText?: string,
    componentClass?: string,
    defaultValue?: number | string,
    format?: (value: number | null) => string,
    max?: NumericInput$BoundsFunctionProp,
    min?: NumericInput$BoundsFunctionProp,
    mobile?: boolean | "auto" | ((component: NumericInput) => boolean),
    noStyle?: boolean,
    noValidate?: boolean | string,
    onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement>,
    onChange?: (
      value: number | null,
      stringValue: string,
      input: HTMLInputElement
    ) => void,
    onFocus?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement>,
    onInput?: React.FormEventHandler<HTMLInputElement>,
    onInvalid?: (
      error: string,
      value: number | null,
      stringValue: string
    ) => void,
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement>,
    onSelect?: React.ReactEventHandler<HTMLInputElement>,
    onValid?: (value: number | null, stringValue: string) => void,
    parse?: (stringValue: string) => number | null,
    precision?: number | ((component: NumericInput) => number | null | void),
    snap?: boolean,
    step?:
      | number
      | ((component: NumericInput, direction: string) => number | void),
    strict?: boolean,
    style?:
      | {
          [key: string]: React.CSSProperties
        }
      | boolean,
    value?: number | string
  } & NumericInput$Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "min" | "max" | "step" | "onChange" | "defaultValue" | "onInvalid" | "style"
  >;

  declare interface NumericInput$NumericInputState {
    btnDownActive?: boolean;
    btnDownHover?: boolean;
    btnUpActive?: boolean;
    btnUpHover?: boolean;
    selectionEnd?: number | null;
    selectionStart?: number | null;
    stringValue?: string;
    value?: number | null;
  }
  declare class NumericInput
    mixins React.Component<
        NumericInput$NumericInput$NumericInputProps,
        NumericInput$NumericInput$NumericInputState
      > {
    static DIRECTION_UP: string;
    static DIRECTION_DOWN: string;
  }
}
