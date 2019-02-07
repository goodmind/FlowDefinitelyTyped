declare module "bunyan-format" {
  import type { Writable } from "stream";

  declare interface BunyanFormatWritable$ColorFromLevel {
    [level: number]: string;
  }

  declare interface BunyanFormatWritable$Options {
    outputMode?: "short" | "long" | "simple" | "json" | "bunyan";
    color?: boolean;
    colorFromLevel?: BunyanFormatWritable$ColorFromLevel;
    levelInString?: boolean;
    jsonIndent?: string | number;
  }
  declare class BunyanFormatWritable mixins Writable {
    /**
     * Creates a writable stream that formats bunyan records written to it.
     */
    constructor(
      options: BunyanFormatWritable$BunyanFormatWritable$Options,
      output?: Writable
    ): this;
  }
  declare module.exports: typeof BunyanFormatWritable;
}
