declare module "react-lazyload" {
  import type { Component } from "react";

  declare export interface LazyLoadProps {
    once?: boolean;
    height?: number | string;
    offset?: number | number[];
    overflow?: boolean;
    resize?: boolean;
    scroll?: boolean;
    children?: React$Node;
    throttle?: number | boolean;
    debounce?: number | boolean;
    placeholder?: any;
    unmountIfInvisible?: boolean;
  }
  declare export default class LazyLoad mixins Component<LazyLoadProps> {
    constructor(props: LazyLoad): this;
  }
  declare export function lazyload(option: {}): LazyLoad;

  declare export function forceCheck(): void;
}
