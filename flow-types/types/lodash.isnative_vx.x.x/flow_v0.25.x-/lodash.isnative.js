declare module "lodash.isnative" {
  import type { isNative } from "lodash";

  declare module.exports: typeof isNative;
}
