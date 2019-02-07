declare module "superagent-bunyan" {
  import typeof * as Logger from "bunyan";

  import type { Plugin } from "superagent";

  declare function superagentLogger(
    logger: Logger,
    requestId?: string,
    extra?: { [key: string]: any }
  ): Plugin;

  declare module.exports: typeof superagentLogger;
}
