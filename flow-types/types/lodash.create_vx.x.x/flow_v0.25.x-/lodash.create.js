declare module "lodash.create" {
  import type { create } from "lodash";

  declare module.exports: typeof create;
}
