declare module "lodash.isequal" {
  import type { isEqual } from "lodash";

  declare module.exports: typeof isEqual;
}
