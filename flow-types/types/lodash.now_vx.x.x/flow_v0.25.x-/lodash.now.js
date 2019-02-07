declare module "lodash.now" {
  import type { now } from "lodash";

  declare module.exports: typeof now;
}
