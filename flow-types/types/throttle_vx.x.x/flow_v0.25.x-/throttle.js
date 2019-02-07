declare module "throttle" {
  import typeof * as stream from "stream";

  declare module.exports: typeof Throttle;

  declare class Throttle mixins stream.Transform {
    constructor(options: number | Throttle$Throttle$Options): this;
  }
  declare type Throttle$Options = {
    bps: number,
    chunkSize?: number
  } & stream.TransformOptions;
}
