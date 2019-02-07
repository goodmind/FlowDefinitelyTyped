declare module "lodash.tonumber" {
  import type { toNumber } from "lodash";

  declare module.exports: typeof toNumber;
}
