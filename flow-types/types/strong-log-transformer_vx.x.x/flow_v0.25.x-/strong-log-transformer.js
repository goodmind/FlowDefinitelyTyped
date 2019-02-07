declare module "strong-log-transformer" {
  declare interface Options {
    format: string;
    tag: string;
    mergeMultiline: boolean;
    timeStamp: boolean;
  }
  declare interface StrongLogTransformer {
    (options?: $Shape<Options>): NodeJS.ReadWriteStream;
    DEFAULTS: Options;
    cli(args: string[]): void;
  }
  declare var strongLogTransformer: StrongLogTransformer;
  declare module.exports: typeof strongLogTransformer;
}
