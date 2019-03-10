declare module "react-daum-postcode" {
  import type { Component } from "react";

  declare interface DaumPostcode$Props {
    onComplete: any;
    width?: number | string;
    height?: number | string;
    autoClose?: boolean;
    autoResize?: boolean;
    animation?: boolean;
    style?: any;
    defaultQuery?: string;
    theme?: any;
    scriptUrl?: string;
  }
  declare export default class DaumPostcode
    mixins Component<DaumPostcode$Props, any> {
    render(): React$Node;
  }
}
