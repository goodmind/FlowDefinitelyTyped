declare module "random-number" {
  declare type Generator = (
    min?: number | null,
    max?: number | null,
    integer?: boolean | null
  ) => number;
  declare interface UnparsedOptions {
    min?: number;
    max?: number;
    integer?: boolean;
  }
  declare interface Options {
    min: number;
    max: number;
    integer: boolean;
  }
  declare interface RandomNumber {
    (options?: UnparsedOptions): number;
    generator(options?: UnparsedOptions): Generator;
    defaults(options?: UnparsedOptions): Options;
  }
  declare var randomNumber: RandomNumber;
  declare module.exports: typeof randomNumber;
}
