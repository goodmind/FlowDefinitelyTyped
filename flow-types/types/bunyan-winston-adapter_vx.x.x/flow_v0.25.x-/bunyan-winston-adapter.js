declare module "bunyan-winston-adapter" {
  import typeof * as bunyan from "bunyan";

  import type { Logger } from "winston";

  declare export function createAdapter(logger: Logger, mapping?: any): bunyan;
}
