declare module "lodash.isfunction" {
  import type { isFunction } from "lodash";

  declare module.exports: typeof isFunction;
}
