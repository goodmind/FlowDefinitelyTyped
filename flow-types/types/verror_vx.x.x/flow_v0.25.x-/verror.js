declare module "verror" {
  declare class VError mixins Error {
    static VError: typeof VError;
    static cause(err: Error): Error | null;
    static info(err: Error): VError$VError$Info;
    static fullStack(err: Error): string;
    static findCauseByName(err: Error, name: string): Error | null;
    static hasCauseWithName(err: Error, name: string): boolean;
    static errorFromList<T: Error>(
      errors: T[]
    ): null | T | VError$VError$MultiError;
    static errorForEach(err: Error, func: (err: Error) => void): void;
    cause(): Error | void;
    constructor(
      options: VError$VError$Options | Error,
      message: string,
      ...params: any[]
    ): this;
    constructor(message?: string, ...params: any[]): this;
  }
  declare interface VError$Info {
    [key: string]: any;
  }

  declare interface VError$Options {
    cause?: Error | null;
    name?: string;
    strict?: boolean;
    constructorOpt?: (...args: any[]) => void;
    info?: VError$Info;
  }

  declare class VError$SError mixins VError {}

  declare class VError$MultiError mixins VError {
    constructor(errors: Error[]): this;
    errors(): Error[];
  }

  declare class VError$WError mixins VError {}
  declare module.exports: typeof VError;
}
