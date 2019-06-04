declare module "json-stream-stringify" {
  import type { Readable } from "stream";

  declare export default class JsonStreamStringify mixins Readable {
    constructor(
      value: any,
      replacer?: ((key: any, value: any) => any) | any[],
      spaces?: string | number,
      cycle?: boolean
    ): this;
    path(): [string, number];
  }
}
