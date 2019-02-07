declare module "react-addons-pure-render-mixin" {
  import type { Mixin } from "react";

  declare var PureRenderMixin: PureRenderMixin;
  declare module.exports: typeof PureRenderMixin;

  declare type PureRenderMixin = {} & Mixin<any, any>;
}
