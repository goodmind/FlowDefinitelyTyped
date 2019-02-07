declare module "lodash.tostring" {
  import type { toString } from "lodash";

  declare module.exports: typeof toString;
}
