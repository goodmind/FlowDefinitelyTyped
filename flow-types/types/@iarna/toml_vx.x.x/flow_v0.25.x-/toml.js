declare module "@iarna/toml" {
  import typeof * as parseAsync from "./parse-async";

  import typeof * as parseStream from "./parse-stream";

  import typeof * as stringify from "./stringify";

  /**
   * Synchronously parse a TOML string and return an object.
   */
  declare export function parse(str: string): Record<string, any>;

  declare export { parseAsync as async, parseStream as stream };
}
