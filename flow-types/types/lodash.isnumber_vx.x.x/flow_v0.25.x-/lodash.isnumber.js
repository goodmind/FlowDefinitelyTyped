declare module "lodash.isnumber" {
  import type { isNumber } from "lodash";

  declare module.exports: typeof isNumber;
}
