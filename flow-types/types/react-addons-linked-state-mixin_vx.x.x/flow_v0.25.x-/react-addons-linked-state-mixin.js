declare module "react" {
  declare interface HTMLAttributes<T> {
    checkedLink?: LinkedStateMixin$ReactLink<boolean>;
    valueLink?: LinkedStateMixin$ReactLink<boolean | string | number>;
  }
}
declare module "react-addons-linked-state-mixin" {
  import type { Mixin } from "react";

  declare var LinkedStateMixin$LinkedStateMixin: LinkedStateMixin$LinkedStateMixin;
  declare type LinkedStateMixin = LinkedStateMixin$LinkedStateMixin;
  declare export default typeof LinkedStateMixin;

  declare export interface LinkedStateMixin$ReactLink<T> {
    value: T;
    requestChange(newValue: T): void;
  }

  declare export type LinkedStateMixin$LinkedStateMixin = {
    linkState<T>(key: string): LinkedStateMixin$ReactLink<T>
  } & Mixin<any, any>;
}
