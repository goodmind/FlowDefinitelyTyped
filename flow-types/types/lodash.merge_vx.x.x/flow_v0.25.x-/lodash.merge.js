declare module "lodash.merge" {
  import type { merge } from "lodash";

  declare module.exports: typeof merge;
}
