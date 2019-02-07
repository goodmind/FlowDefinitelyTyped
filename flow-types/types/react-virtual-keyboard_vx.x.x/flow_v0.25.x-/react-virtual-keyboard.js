declare module "react-virtual-keyboard" {
  import type { Component } from "react";

  import type { KeyboardOptions, NavigateOptions } from "virtual-keyboard";

  declare export type ReactKeyboardOptions = {
    accepted?: void
  } & KeyboardOptions;

  declare export type kbEvents = (
    event?: string | Event,
    keyboard?: Element,
    el?: Element
  ) => void;
  declare export interface KeyboardProps {
    name?: string;
    value?: string;
    options?: ReactKeyboardOptions;
    onAccepted?: kbEvents;
    onChange?: kbEvents;
    callbackParent?: kbEvents;
    placeholder?: string;
  }
  declare export interface KeyboardState {
    value: string;
    className: string;
  }
  declare export default class Keyboard
    mixins Component<KeyboardProps, KeyboardState> {}
}
