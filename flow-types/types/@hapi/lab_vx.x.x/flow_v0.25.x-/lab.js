declare module "@hapi/lab" {
  /**
   * The test script.
   */
  declare export function script(
    options?: ScriptOptions
  ): Lab & ExperimentAlt & TestAlt;

  /**
   * Access the configured assertion library.
   */
  declare export var assertions: any;
  declare interface Lab {
    /**
     * Organise tests into an experiment
     */
    experiment(desc: string, cb: EmptyCallback): void;

    /**
     * Organise tests into an experiment with options
     */
    experiment(
      desc: string,
      options: ExperimentOptions,
      cb: EmptyCallback
    ): void;

    /**
     * Create a test suite
     */
    describe(desc: string, cb: EmptyCallback): void;

    /**
     * Create a test suite with options
     */
    describe(desc: string, options: ExperimentOptions, cb: EmptyCallback): void;

    /**
     * Create a test suite
     */
    suite(desc: string, cb: EmptyCallback): void;

    /**
     * Create a test suite with options
     */
    suite(desc: string, options: ExperimentOptions, cb: EmptyCallback): void;

    /**
     * The test spec
     */
    test(desc: string, cb: TestCallback): void;

    /**
     * The test spec using a promise
     */
    test(desc: string, promise: TestPromise): void;

    /**
     * The test spec with options
     */
    test(desc: string, options: TestOptions, cb: TestCallback): void;

    /**
     * The test spec using a promise with options
     */
    test(desc: string, options: TestOptions, promise: TestPromise): void;

    /**
     * The test spec
     */
    it(desc: string, cb: TestCallback): void;

    /**
     * The test spec using a promise
     */
    it(desc: string, promise: TestPromise): void;

    /**
     * The test spec with options
     */
    it(desc: string, options: TestOptions, cb: TestCallback): void;

    /**
     * The test spec using a promise with options
     */
    it(desc: string, options: TestOptions, promise: TestPromise): void;

    /**
     * Perform async actions before the test suite
     */
    before(cb: AsyncCallback): void;

    /**
     * Perform async actions before the test suite using a promise
     */
    before(promise: AsyncPromise): void;

    /**
     * Perform async actions before the test suite with options
     */
    before(options: AsyncOptions, cb: AsyncCallback): void;

    /**
     * Perform async actions before the test suite with otions, using a promise
     */
    before(options: AsyncOptions, promise: AsyncPromise): void;

    /**
     * Perform async actions before each test
     */
    beforeEach(cb: AsyncCallback): void;

    /**
     * Perform async actions before each test using a promise
     */
    beforeEach(promise: AsyncPromise): void;

    /**
     * Perform async actions before each test with options
     */
    beforeEach(options: AsyncOptions, cb: AsyncCallback): void;

    /**
     * Perform async actions before each test with options, using a promise
     */
    beforeEach(options: AsyncOptions, promise: AsyncPromise): void;

    /**
     * Perform async actions after the test suite
     */
    after(cb: AsyncCallback): void;

    /**
     * Perform async actions after the test suite using a promise
     */
    after(promise: AsyncPromise): void;

    /**
     * Perform async actions after the test suite with options
     */
    after(options: AsyncOptions, cb: AsyncCallback): void;

    /**
     * Perform async actions after the test suite with options, using a promise
     */
    after(options: AsyncOptions, promise: AsyncPromise): void;

    /**
     * Perform async actions after each test
     */
    afterEach(cb: AsyncCallback): void;

    /**
     * Perform async actions after each test using a promise
     */
    afterEach(promise: AsyncPromise): void;

    /**
     * Perform async actions after each test with options
     */
    afterEach(options: AsyncOptions, cb: AsyncCallback): void;

    /**
     * Perform async actions after each test with options, using a promise
     */
    afterEach(options: AsyncOptions, promise: AsyncPromise): void;
  }
  declare interface ExperimentAlt {
    experiment: SkipOnlyExperiment;
    suite: SkipOnlyExperiment;
    describe: SkipOnlyExperiment;
  }
  declare interface TestAlt {
    test: SkipOnlyTest;
    it: SkipOnlyTest;
  }
  declare interface SkipOnlyExperiment {
    /**
     * Skip this test suite
     */
    skip: ExperimentArgs & ExperimentWithOptionsArgs;

    /**
     * Only execute this test suite
     */
    only: ExperimentArgs & ExperimentWithOptionsArgs;
  }
  declare interface SkipOnlyTest {
    /**
     * Skip this test
     */
    skip: TestArgs & TestWithOptionsArgs;

    /**
     * Only execute this test
     */
    only: TestArgs & TestWithOptionsArgs;
  }
  declare interface ScriptOptions {
    /**
     * Enable auto-execution of the script? (true)
     */
    schedule?: boolean;

    /**
     * Pass Lab CLI options
     */
    cli?: any;
  }
  declare interface ExperimentOptions {
    /**
     * Set a specific timeout in milliseconds (2000)
     */
    timeout?: number;

    /**
     * Execute tests in parallel? (false)
     */
    parallel?: boolean;

    /**
     * Skip execution? (false)
     */
    skip?: boolean;

    /**
     * Execute only this test/experiment? (false)
     */
    only?: boolean;
  }
  declare type TestOptions = {
    /**
     * The expected number of assertions to execute
     */
    plan?: number
  } & ExperimentOptions;

  declare interface AsyncOptions {
    /**
     * Set a specific timeout in milliseconds (disabled)
     */
    timeout?: number;
  }
  declare interface DoneNote {
    /**
     * Attach a note to the test case
     */
    note: (text: string) => void;
  }
  declare type EmptyCallback = () => void;
  declare type DoneFunction = (err?: Error) => void;
  declare type CleanupFunction = (func: (next: Function) => void) => void;
  declare type TestCallback = (
    done: DoneFunction & DoneNote,
    onCleanup?: CleanupFunction
  ) => void;
  declare type TestPromise = () => Promise<any>;
  declare type AsyncCallback = (done: DoneFunction) => void;
  declare type AsyncPromise = () => Promise<any>;
  declare type ExperimentArgs = (desc: string, cb: EmptyCallback) => {};
  declare type ExperimentWithOptionsArgs = (
    desc: string,
    options: ExperimentOptions,
    cb: EmptyCallback
  ) => {};
  declare type TestArgs = (desc: string, cb: TestCallback) => {};
  declare type TestWithOptionsArgs = (
    desc: string,
    options: TestOptions,
    cb: TestCallback
  ) => {};
}
