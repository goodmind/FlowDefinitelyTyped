declare module "lodash.functions" {
  import type { functions } from "lodash";

  declare module.exports: typeof functions;
}
