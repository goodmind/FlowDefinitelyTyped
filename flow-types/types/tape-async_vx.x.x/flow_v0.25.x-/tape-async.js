declare module "tape-async" {
  import typeof * as tapeSync from "tape";

  declare export default typeof tape;

  declare function tape(
    name: string | tape$TestOptions,
    cb: tape$TestCase
  ): void;

  declare function tape(
    name: string,
    opts: tape$TestOptions,
    cb: tape$TestCase
  ): void;

  declare function tape(cb: tape$TestCase): void;

  declare var tape: typeof npm$namespace$tape;

  declare var npm$namespace$tape: {
    skip: typeof tape$skip,
    onFinish: typeof tape$onFinish,
    only: typeof tape$only,
    createHarness: typeof tape$createHarness,
    createStream: typeof tape$createStream
  };
  declare interface tape$TestCase {
    (test: tape$Test): void | Iterator<any> | PromiseLike<void>;
  }

  /**
   * Available opts options for the tape function.
   */
  declare type tape$TestOptions = tapeSync.TestOptions;

  /**
   * Options for the createStream function.
   */
  declare type tape$StreamOptions = tapeSync.StreamOptions;

  /**
   * Generate a new test that will be skipped over.
   */
  declare function tape$skip(
    name: string | tape$TestOptions,
    cb: tape$TestCase
  ): void;

  declare function tape$skip(
    name: string,
    opts: tape$TestOptions,
    cb: tape$TestCase
  ): void;

  declare function tape$skip(cb: tape$TestCase): void;

  /**
   * The onFinish hook will get invoked when ALL tape tests have finished right before tape is about to print the test summary.
   */
  declare function tape$onFinish(cb: () => void): void;

  /**
   * Like test(name?, opts?, cb) except if you use .only this is the only test case that will run for the entire process, all other test cases using tape will be ignored.
   */
  declare function tape$only(
    name: string | tape$TestOptions,
    cb: tape$TestCase
  ): void;

  declare function tape$only(
    name: string,
    opts: tape$TestOptions,
    cb: tape$TestCase
  ): void;

  declare function tape$only(cb: tape$TestCase): void;

  /**
   * Create a new test harness instance, which is a function like test(), but with a new pending stack and test state.
   */
  declare function tape$createHarness(): typeof tape;

  /**
   * Create a stream of output, bypassing the default output stream that writes messages to console.log().
   * By default stream will be a text stream of TAP output, but you can get an object stream instead by setting opts.objectMode to true.
   */
  declare function tape$createStream(
    opts?: tape$StreamOptions
  ): NodeJS$ReadableStream;

  declare type tape$Test = {
    /**
     * Create a subtest with a new test handle st from cb(st) inside the current test.
     * cb(st) will only fire when t finishes.
     * Additional tests queued up after t will not be run until all subtests finish.
     */
    test(name: string, cb: tape$TestCase): void,
    test(name: string, opts: tape$TestOptions, cb: tape$TestCase): void
  } & tapeSync.Test;
}
