declare module "babel-template" {
  import type { BabylonOptions } from "babylon";

  import typeof * as t from "babel-types";

  declare type Node = t.Node;
  declare module.exports: typeof template;

  declare function template(code: string, opts?: BabylonOptions): UseTemplate;

  declare type UseTemplate = (nodes?: {
    [placeholder: string]: Node
  }) => Node;
}
