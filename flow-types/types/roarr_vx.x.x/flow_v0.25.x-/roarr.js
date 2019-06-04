declare module "roarr" {
  declare export default typeof log;

  declare var log: Roarr$RoarrType;
  declare interface Roarr$MessageContextType {
    logLevel?: number;
    [name: string]: any;
  }

  declare interface Roarr$SprintfArgumentType {
    toString(): string;
  }

  declare interface Roarr$RoarrType {
    (
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    (
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;

    /**
     * Creates a child logger appending the provided context object to the previous logger context.
     * @param context
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr.child({ module: "myModule" });
     *
     * log.debug("My Message");
     * // {"context":{"logLevel":20},"Message":"My Message","sequence":0,"time":1531914529921,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#child
     */
    child(context: Roarr$MessageContextType): Roarr$RoarrType;

    /**
     * Returns the current context.
     */
    getContext(): Roarr$MessageContextType;

    /**
     * Convenience method for logging a message with logLevel context property value set to 10 (LogLevel.Trace)
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.trace('foo');
     * // {"context":{"logLevel":10},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#trace
     */
    trace(
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    trace(
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;

    /**
     * Convenience method for logging a message with logLevel context property value set to 20 (LogLevel.Debug)
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.debug('foo');
     * // {"context":{"logLevel":20},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#trace
     */
    debug(
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    debug(
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;

    /**
     * Convenience method for logging a message with logLevel context property value set to 30 (LogLevel.Info)
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.info('foo');
     * // {"context":{"logLevel":30},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#trace
     */
    info(
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    info(
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;

    /**
     * Convenience method for logging a message with logLevel context property value set to 40 (LogLevel.Warn)
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.warn('foo');
     * // {"context":{"logLevel":40},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#trace
     */
    warn(
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    warn(
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;

    /**
     * Convenience method for logging a message with logLevel context property value set to 50 (LogLevel.Error)
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.error('foo');
     * // {"context":{"logLevel":50},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#trace
     */
    error(
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    error(
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;

    /**
     * Convenience method for logging a message with logLevel context property value set to 60 (LogLevel.Fatal)
     * @example import Roarr from 'roarr';
     *
     * const log = Roarr;
     *
     * log.fatal('foo');
     * // {"context":{"logLevel":60},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
     * @see https://www.npmjs.com/package/roarr#trace
     */
    fatal(
      context: Roarr$MessageContextType,
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
    fatal(
      message: string,
      _0?: Roarr$SprintfArgumentType,
      _1?: Roarr$SprintfArgumentType,
      _2?: Roarr$SprintfArgumentType,
      _3?: Roarr$SprintfArgumentType,
      _4?: Roarr$SprintfArgumentType,
      _5?: Roarr$SprintfArgumentType,
      _6?: Roarr$SprintfArgumentType,
      _7?: Roarr$SprintfArgumentType
    ): void;
  }
}
