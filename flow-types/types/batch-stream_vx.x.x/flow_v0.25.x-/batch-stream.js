declare module "batch-stream" {
  declare interface Options {
    size?: number;
    highWaterMark?: number;
  }
  declare class BatchStream mixins stream.Transform {
    size: number;
    batch: any[];
    constructor(options: Options): this;
  }
  declare module.exports: typeof BatchStream;
}
