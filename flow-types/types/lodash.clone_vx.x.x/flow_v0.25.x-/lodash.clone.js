declare module "lodash.clone" {
  import type { clone } from "lodash";

  declare module.exports: typeof clone;
}
