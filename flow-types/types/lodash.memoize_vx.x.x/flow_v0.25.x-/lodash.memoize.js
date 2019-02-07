declare module "lodash.memoize" {
  import type { memoize } from "lodash";

  declare module.exports: typeof memoize;
}
