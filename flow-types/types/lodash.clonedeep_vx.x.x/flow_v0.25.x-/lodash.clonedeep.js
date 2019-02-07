declare module "lodash.clonedeep" {
  import type { cloneDeep } from "lodash";

  declare module.exports: typeof cloneDeep;
}
