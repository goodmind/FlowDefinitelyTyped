declare module "lodash.foreach" {
  import type { forEach } from "lodash";

  declare module.exports: typeof forEach;
}
